"use server";

import { OTHER_PROBLEM, type RequestFieldErrors, type RequestState } from "@/lib/request-types";

const limit = (value: FormDataEntryValue | null, max: number) => String(value ?? "").trim().slice(0, max);

const escapeHtml = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function submitRequest(_previous: RequestState, formData: FormData): Promise<RequestState> {
  // Bots fill every field, people never see this one.
  if (limit(formData.get("website"), 200)) return { status: "success" };

  const device = limit(formData.get("device"), 60);
  const selectedProblem = limit(formData.get("problem"), 120);
  const customProblem = limit(formData.get("customProblem"), 300);
  const name = limit(formData.get("name"), 80);
  const phone = limit(formData.get("phone"), 40);
  const comment = limit(formData.get("comment"), 1000);
  const context = limit(formData.get("context"), 160);
  const problem = selectedProblem === OTHER_PROBLEM || !selectedProblem ? customProblem : selectedProblem;

  const fieldErrors: RequestFieldErrors = {};
  if (!device) fieldErrors.device = "Выберите устройство.";
  if (!problem) fieldErrors.problem = selectedProblem === OTHER_PROBLEM ? "Опишите, что случилось." : "Выберите поломку или опишите свою.";
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 9 || digits.length > 15) fieldErrors.phone = "Укажите номер телефона, например +375 29 123-45-67.";
  if (formData.get("consent") !== "on") fieldErrors.consent = "Нужно согласие на обработку данных.";
  if (Object.keys(fieldErrors).length > 0) return { status: "error", message: "Проверьте форму.", fieldErrors };

  const lines = [
    "<b>Новая заявка с сайта</b>",
    `Устройство: ${escapeHtml(device)}`,
    `Поломка: ${escapeHtml(problem)}`,
    name && `Имя: ${escapeHtml(name)}`,
    `Телефон: ${escapeHtml(phone)}`,
    comment && `Комментарий: ${escapeHtml(comment)}`,
    context && `Страница: ${escapeHtml(context)}`,
  ].filter(Boolean);

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const plainText = ["Здравствуйте! Хочу оставить заявку на ремонт.", ...lines.slice(1)]
    .join("\n")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

  if (!token || !chatId) {
    return { status: "fallback", message: plainText };
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: lines.join("\n"), parse_mode: "HTML" }),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`Telegram responded ${response.status}`);
    return { status: "success" };
  } catch (error) {
    console.error("Request delivery failed", error);
    return { status: "fallback", message: plainText };
  }
}
