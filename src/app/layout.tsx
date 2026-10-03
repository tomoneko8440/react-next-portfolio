import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/libs/site";
import { themeInitScript } from "@/libs/theme";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ポートフォリオ`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1117" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // data-theme は <head> のスクリプトがブラウザで付けるので、サーバーの HTML と違っていても警告しない
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          本文へスキップ
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
