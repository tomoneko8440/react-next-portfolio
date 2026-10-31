import { site } from "@/data/site";
import styles from "@/app/site.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <small>
        &copy; {new Date().getFullYear()} {site.hero.name}
      </small>
    </footer>
  );
}
