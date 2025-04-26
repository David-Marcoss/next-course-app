import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codando: Página inicial",
  description:
    "Os melhores cursos de programação gratuitos com a melhor experiência de aprendizado e foco.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body className={`${nunito.className}} antialiased`}>{children}</body>
    </html>
  );
}
