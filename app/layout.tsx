import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/data/site";
import "./globals.css";
import styles from "./site.module.css";

export const metadata: Metadata = {
  title: { default: site.title, template: `%s | ${site.title}` },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" style={{ "--accent": site.accentColor } as CSSProperties}>
      <body>
        <a href="#main" className={styles.skipLink}>
          本文へ移動
        </a>
        <Header />
        <main id="main" className={styles.main}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
