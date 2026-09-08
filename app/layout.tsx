import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = { title: "Viva Store", description: "Loja virtual com Next.js e Supabase" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><Header /><main>{children}</main><footer>© 2026 Viva Store • Projeto</footer></body></html>;
}
