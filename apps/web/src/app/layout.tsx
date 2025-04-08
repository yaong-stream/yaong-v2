import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import { Providers } from "./providers";
import "./globals.css";
import { ReactNode } from "react";

const pretendard = localFont({
  src: "../../public/fonts/Pretendard-Variable.woff2",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "야옹 스트림",
  description: "라이브 스트리밍 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${pretendard.className}`}>
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
