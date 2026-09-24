"use client";

import { useActionState, useId, useState } from "react";
import { IconBrandWhatsapp, IconChevronDown, IconCircleCheck, IconLoader2, IconPhone } from "@tabler/icons-react";

import { submitRequest } from "@/app/actions/request";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { OTHER_PROBLEM, type RequestFormConfig, type RequestState } from "@/lib/request-types";
import { cn } from "@/lib/utils";

const chipClass =
  "cursor-pointer rounded-lg border border-[#eadbd1] bg-white px-3 py-2 text-sm font-medium text-[#211a17] transition-colors hover:border-[#ff5000]/60 has-checked:border-[#ff5000] has-checked:bg-[#ff5000]/8 has-checked:text-[#e74700] has-focus-visible:outline-2 has-focus-visible:outline-primary dark:border-[#49352d] dark:bg-[#1a1310] dark:text-[#fff7f0] dark:has-checked:border-[#ff7a18] dark:has-checked:bg-[#ff7a18]/12 dark:has-checked:text-[#ff8a32]";

const fieldClass = "h-11 rounded-lg border-[#eadbd1] bg-white text-base md:text-sm dark:border-[#49352d] dark:bg-[#1a1310]";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return <p id={id} className="text-xs font-medium text-[#d42a1f] dark:text-[#ff7b6b]">{message}</p>;
}

export function RequestForm({ config, onDone }: { config: RequestFormConfig; onDone: () => void }) {
  const id = useId();
  const [state, action, pending] = useActionState<RequestState, FormData>(submitRequest, { status: "idle" });
  const [deviceId, setDeviceId] = useState(config.deviceId ?? (config.devices.length === 1 ? config.devices[0].id : ""));
  const device = config.devices.find((item) => item.id === deviceId);
  const [problem, setProblem] = useState(config.problem ?? "");
  const [values, setValues] = useState({ customProblem: "", name: "", phone: "", comment: "" });
  const [consent, setConsent] = useState(false);
  const errors = state.status === "error" ? state.fieldErrors ?? {} : {};
  const showCustom = problem === OTHER_PROBLEM || (device !== undefined && device.problems.length === 0);
  const update = (field: keyof typeof values) => (event: { target: { value: string } }) => setValues((current) => ({ ...current, [field]: event.target.value }));

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center">
        <IconCircleCheck aria-hidden="true" stroke={1.5} className="size-14 text-[#65a832]" />
        <p className="text-lg font-bold text-[#171717] dark:text-[#fff7f0]">Заявка отправлена</p>
        <p className="max-w-xs text-sm leading-6 text-[#605952] dark:text-[#c5b8b1]">Мастер свяжется с вами, уточнит модель и назовёт стоимость.</p>
        <button type="button" onClick={onDone} className="mt-2 h-11 rounded-lg border border-[#eadbd1] px-6 text-sm font-semibold hover:border-primary hover:text-primary dark:border-[#49352d]">
          Закрыть
        </button>
      </div>
    );
  }

  if (state.status === "fallback") {
    return (
      <div className="flex flex-col gap-4 py-2">
        <p className="text-sm leading-6 text-[#605952] dark:text-[#c5b8b1]">
          Не получилось отправить заявку автоматически. Отправьте её мастеру в WhatsApp — текст уже готов, или позвоните.
        </p>
        <pre className="max-h-40 overflow-auto rounded-lg border border-[#eadbd1] bg-white p-3 font-sans text-xs leading-5 whitespace-pre-wrap text-[#443a35] dark:border-[#49352d] dark:bg-[#1a1310] dark:text-[#d9ccc4]">{state.message}</pre>
        <a
          href={`https://wa.me/375291506888?text=${encodeURIComponent(state.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#16bc39] text-sm font-semibold text-white hover:bg-[#12a532]"
        >
          <IconBrandWhatsapp aria-hidden="true" className="size-5" />
          Отправить в WhatsApp
        </a>
        <a href="tel:+375291506888" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#eadbd1] text-sm font-semibold hover:border-primary hover:text-primary dark:border-[#49352d]">
          <IconPhone aria-hidden="true" className="size-5" />
          +375 29 150-68-88
        </a>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-5" noValidate>
      <input type="hidden" name="context" value={config.context} />
      <input type="hidden" name="device" value={device?.label ?? ""} />
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Сайт
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {!config.deviceId && config.devices.length > 1 && (
        <div className="flex flex-col gap-2">
          <Label htmlFor={`${id}-device`}>Устройство</Label>
          <div className="relative">
            <select
              id={`${id}-device`}
              value={deviceId}
              onChange={(event) => {
                setDeviceId(event.target.value);
                setProblem("");
              }}
              aria-invalid={Boolean(errors.device) || undefined}
              aria-describedby={errors.device ? `${id}-device-error` : undefined}
              className={cn(
                fieldClass,
                "w-full cursor-pointer appearance-none border px-3 pr-10 dark:scheme-dark outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive",
                !deviceId && "text-muted-foreground",
              )}
            >
              <option value="" disabled>
                Выберите устройство
              </option>
              {config.devices.map((item) => (
                <option key={item.id} value={item.id} className="text-foreground">
                  {item.label}
                </option>
              ))}
            </select>
            <IconChevronDown aria-hidden="true" className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#8a7d76]" />
          </div>
          <FieldError id={`${id}-device-error`} message={deviceId ? undefined : errors.device} />
        </div>
      )}

      {device && (
        <fieldset className="flex flex-col gap-2" aria-describedby={errors.problem ? `${id}-problem-error` : undefined}>
          <legend className="mb-2 text-sm font-semibold text-[#171717] dark:text-[#fff7f0]">Что случилось</legend>
          <div className="flex flex-wrap gap-2">
            {device.problems.map((item) => (
              <label key={item} className={chipClass}>
                <input type="radio" name="problem" value={item} checked={problem === item} onChange={() => setProblem(item)} className="sr-only" />
                {item}
              </label>
            ))}
            <label className={cn(chipClass, "border-dashed")}>
              <input type="radio" name="problem" value={OTHER_PROBLEM} checked={problem === OTHER_PROBLEM} onChange={() => setProblem(OTHER_PROBLEM)} className="sr-only" />
              Другая поломка
            </label>
          </div>
          {showCustom && (
            <Input
              name="customProblem"
              value={values.customProblem}
              onChange={update("customProblem")}
              placeholder="Опишите, что случилось"
              aria-label="Опишите поломку"
              aria-invalid={Boolean(errors.problem) || undefined}
              maxLength={300}
              autoFocus={problem === OTHER_PROBLEM}
              className={cn(fieldClass, "mt-1")}
            />
          )}
          <FieldError id={`${id}-problem-error`} message={problem && problem !== OTHER_PROBLEM ? undefined : errors.problem} />
        </fieldset>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor={`${id}-name`}>Имя</Label>
          <Input id={`${id}-name`} name="name" value={values.name} onChange={update("name")} autoComplete="name" maxLength={80} placeholder="Как к вам обращаться" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor={`${id}-phone`}>Телефон *</Label>
          <Input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update("phone")}
            placeholder="+375 29 123-45-67"
            maxLength={40}
            aria-invalid={Boolean(errors.phone) || undefined}
            aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
            className={fieldClass}
          />
          <FieldError id={`${id}-phone-error`} message={errors.phone} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor={`${id}-comment`}>Комментарий <span className="font-normal text-muted-foreground">— по желанию</span></Label>
        <Textarea
          id={`${id}-comment`}
          name="comment"
          value={values.comment}
          onChange={update("comment")}
          maxLength={1000}
          placeholder="Можно уточнить детали"
          className="min-h-20 rounded-lg border-[#eadbd1] bg-white text-base md:text-sm dark:border-[#49352d] dark:bg-[#1a1310]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-[#605952] dark:text-[#c5b8b1]">
          <input
            type="checkbox"
            name="consent"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            aria-invalid={Boolean(errors.consent) || undefined}
            className="mt-0.5 size-4 shrink-0 accent-[#ff5000]"
          />
          Согласен на обработку персональных данных для связи по заявке
        </label>
        <FieldError id={`${id}-consent-error`} message={errors.consent} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#ff5000] text-sm font-semibold text-white transition-colors hover:bg-[#e74700] disabled:opacity-70"
      >
        {pending && <IconLoader2 aria-hidden="true" className="size-5 animate-spin" />}
        {pending ? "Отправляем…" : "Отправить заявку"}
      </button>
    </form>
  );
}
