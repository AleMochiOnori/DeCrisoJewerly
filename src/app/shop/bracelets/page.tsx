"use client";
import { useState } from "react";
import styles from "../page.module.css";

const translations = {
  it: {
    title: "Bracciali - De Criso Jewelry",
    subtitle: "Nuova collezione in arrivo",
    comingSoon: "Prossimamente disponibili nuovi bracciali di alta gioielleria",
    description: "La nostra collezione di bracciali è attualmente in fase di creazione. Torna presto per scoprire i nostri pezzi unici.",
    contactUs: "Contattaci per richieste personalizzate"
  },
  en: {
    title: "Bracelets - De Criso Jewelry",
    subtitle: "New collection coming soon",
    comingSoon: "New fine jewelry bracelets available soon",
    description: "Our bracelet collection is currently being created. Come back soon to discover our unique pieces.",
    contactUs: "Contact us for personalized requests"
  }
};

export default function BraceletsPage() {
  const [language, setLanguage] = useState<"it" | "en">("it");

  const toggleLanguage = () => {
    setLanguage(language === "it" ? "en" : "it");
  };

  return (
    <div className={styles.page}>
      <button className={styles.languageToggle} onClick={toggleLanguage}>
        {language === "it" ? " EN" : " IT"}
      </button>
      <h1 className={styles.title}>{translations[language].title}</h1>
      <p className={styles.subtitle}>{translations[language].subtitle}</p>

      <div className={styles.comingSoonContainer}>
        <div className={styles.comingSoonContent}>
          <h2>{translations[language].comingSoon}</h2>
          <p>{translations[language].description}</p>
          <a href="/contact" className={styles.contactLink}>
            {translations[language].contactUs}
          </a>
        </div>
      </div>
    </div>
  );
}
