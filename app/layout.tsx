"use client";
import "./globals.css";
import { UserProvider } from "./context/UserContext";
import "@vibe/core/tokens";
import { ThemeProvider } from "@vibe/core";

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode; // 👈 parallel route slot
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider systemTheme="dark">
          <UserProvider>
            {children}
            {modal} {/* 👈 modal page will render on top of everything */}
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
