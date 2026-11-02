import type { Metadata } from "next";
import { site } from "@/data/site";
import styles from "../site.module.css";

export const metadata: Metadata = {
  title: site.labels.profile.title,
  description: `${site.hero.name}${site.labels.profile.description}`,
};

export default function ProfilePage() {
  const { hero, about, skills, career, contact, labels } = site;

  return (
    <>
      <div className={styles.pageHeader}>
        <p className={styles.role}>{hero.role}</p>
        <h1 className={styles.pageTitle}>{labels.profile.title}</h1>
      </div>

      {about.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.heading}>{labels.profile.about}</h2>
          <div className={styles.about}>
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      )}

      {skills.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.heading}>{labels.profile.skills}</h2>
          <div className={styles.skills}>
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className={styles.skillCategory}>{group.category}</h3>
                <ul className={styles.tags}>
                  {group.items.map((item) => (
                    <li key={item} className={styles.tag}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {career.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.heading}>{labels.profile.career}</h2>
          <ol className={styles.career}>
            {career.map((item) => (
              <li
                key={`${item.period}-${item.title}`}
                className={styles.careerItem}
              >
                <p className={styles.period}>{item.period}</p>
                <div>
                  <h3 className={styles.careerTitle}>{item.title}</h3>
                  <p className={styles.careerDescription}>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {contact.links.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.heading}>{labels.profile.contact}</h2>
          <p className={styles.contactMessage}>{contact.message}</p>
          <ul className={styles.links}>
            {contact.links.map((link) => (
              <li key={link.url}>
                <a href={link.url} className={styles.button}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
