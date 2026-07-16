import type { Metadata } from "next";
import { Radley } from "next/font/google";
import "./globals.css";

const radley = Radley({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Misaki Mochizuki | Portfolio",
  description:
    "課題解決のための視点を活かしたWeb制作・アプリ開発・デザインに取り組んでいます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={radley.variable}>
      <body>{children}</body>
    </html>
  );
}
