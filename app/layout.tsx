import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ремонт телефонов и ноутбуков в Борисове — Mandarin Сервис",
  description: "Ремонт смартфонов, ноутбуков и компьютеров в Борисове. Диагностика, замена экранов и аккумуляторов, чистка, установка Windows.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${manrope.variable} h-full scroll-smooth`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col antialiased">{children}</body>
    </html>
  );
}
