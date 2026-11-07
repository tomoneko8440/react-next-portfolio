"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import ThemeToggle from "@/components/ThemeToggle";
import styles from "@/app/site.module.css";

const NAV_ITEMS = [
  { href: "/", label: site.labels.nav.top },
  { href: "/profile", label: site.labels.nav.profile },
  { href: "/works", label: site.labels.nav.works },
  { href: "/blogs", label: site.labels.nav.blogs },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo}>
          {site.labels.common.skipToContent}
        </Link>
        <div className={styles.headerRight}>
          <nav aria-label="メインメニュー">
            <ul className={styles.nav}>
              {NAV_ITEMS.map((item) => {
                const isCurrent =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isCurrent ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
