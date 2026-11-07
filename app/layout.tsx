import { ViewTransition, type CSSProperties } from "react";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import CardTilt from "@/components/CardTilt";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTop from "@/components/ScrollToTop";
import TimelineProgress from "@/components/TimelineProgress";
import { themeScript } from "@/components/ThemeToggle";
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
  const { theme } = site;

  return (
    <html
      lang="ja"
      // ページ移動のときはスムーズスクロールを使わず、すぐ切り替える
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      style={
        {
          "--light-background": theme.background,
          "--light-surface": theme.surface,
          "--light-foreground": theme.foreground,
          "--light-muted": theme.muted,
          "--light-border": theme.border,
          "--accent": theme.accent,
          "--dark-background": theme.dark.background,
          "--dark-surface": theme.dark.surface,
          "--dark-foreground": theme.dark.foreground,
          "--dark-muted": theme.dark.muted,
          "--dark-border": theme.dark.border,
        } as CSSProperties
      }
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main" className={styles.skipLink}>{site.labels.common.skipToContent}</a>
        <Header />
        <main id="main" className={styles.main}>
          {/* ページ移動のときに中身をクロスフェードさせる */}
          <ViewTransition update="page-fade" default="none">
            {children}
          </ViewTransition>
        </main>
        <Footer />
        <BackToTop />
        <ScrollReveal />
        <ScrollToTop />
        <CardTilt />
        <TimelineProgress />
      </body>
    </html>
  );
}
