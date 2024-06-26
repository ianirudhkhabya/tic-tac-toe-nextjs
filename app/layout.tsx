import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ThemeSwitch from "@/components/switchTheme";
import SwitchThemeProvider from "@/providers/switchThemeProvider";

import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tic Tac Toe",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-white dark:bg-black text-black dark:text-white`}
      >
        <SwitchThemeProvider>
          {children}
          <ThemeSwitch />
        </SwitchThemeProvider>
      </body>
    </html>
  );
}
