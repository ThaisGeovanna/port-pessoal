import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-exemplo.vercel.app"),
  title: "Thaís Geovanna | Desenvolvedora Front-end",
  description:
    "Portfólio de desenvolvimento front-end com projetos, habilidades, formação e contato.",
  openGraph: {
    title: "Thaís Geovanna | Desenvolvedora Front-end",
    description: "Conheça projetos e habilidades em desenvolvimento web.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
