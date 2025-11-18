import React from "react";
import "./globals.css";

export const metadata = {
  title: "AI IA – Learning Platform",
  description: "AI-powered study assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ka">
      <body className="bg-[#02071b] text-white">{children}</body>
    </html>
  );
}
