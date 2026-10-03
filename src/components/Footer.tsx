import Link from "next/link";
import { navItems, site } from "@/libs/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <nav aria-label="フッターメニュー">
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.ja}</Link>
              </li>
            ))}
            <li>
              <a href={site.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub<span className="visually-hidden">（新しいタブで開きます）</span>
              </a>
            </li>
          </ul>
        </nav>
        <p className={styles.copy}>
          <small>&copy; {new Date().getFullYear()} {site.shortName}</small>
        </p>
      </div>
    </footer>
  );
}
