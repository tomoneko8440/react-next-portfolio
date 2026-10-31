"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import styles from "@/app/site.module.css";

const NAV_ITEMS = [
  { href: "/", label: "Top" },
  { href: "/profile", label: "Profile" },
  { href: "/works", label: "Works" },
  { href: "/blogs", label: "Blog" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo}>
          {site.hero.name}
        </Link>
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
      </div>
    </header>
  );
}
