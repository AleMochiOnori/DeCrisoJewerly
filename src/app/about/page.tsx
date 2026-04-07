"use client";

import { useState } from "react";
import styles from "./page.module.css";

const translations = {
  it: {
    title: "Su di noi",
    text1:
      "La Maison De Criso affonda le proprie radici in una storia che viene da lontano, nel cuore dell'Italia, terra in cui l'arte, la bellezza e il saper fare si intrecciano da secoli. È da questo patrimonio culturale e umano, tramandato nel tempo, che nasce l'identità della Maison: da un amore profondo per la bellezza in tutte le sue forme, per l'arte e per le cose fatte bene, con rispetto, pazienza e dedizione.<br /><br />De Criso  rappresenta l'evoluzione naturale di una lunga tradizione di gioiellieri, cresciuta nel tempo e reinterpretata con uno sguardo contemporaneo. Un percorso fatto di conoscenze tramandate di generazione in generazione, di gesti antichi che continuano a vivere in creazioni moderne, capaci di unire memoria e innovazione.<br /><br />Fin dalle sue origini, De Criso si dedica alla creazione di gioielli, realizzati con la cura e la passione che da sempre contraddistinguono i maestri orafi italiani. Ogni creazione di De Criso è disegnata, modellata e realizzata utilizzando diamanti naturali certificati (GIA, HRD) e pietre preziose accuratamente selezionate, accompagnate da certificazioni dei più autorevoli istituti gemmologici internazionali (GIA, GUBELIN, GRS, IGI ed altri).",
    text2:
      "La Maison lavora con smeraldi, zaffiri, rubini, tanzaniti, acquamarine, tormaline, spinelli, granati e molte altre gemme di straordinaria qualità, scelte non solo per il loro valore e bellezza, ma anche per la loro capacità di raccontare e tramandare storie e suscitare emozioni.<br /><br />Ogni gioiello è espressione dell'eccellenza del savoir-faire italiano: attenzione meticolosa al dettaglio, armonia delle forme e una ricerca costante della perfezione. Accanto alle proprie creazioni, De Criso propone anche una selezione esclusiva di pezzi firmati dalle più prestigiose maison internazionali.<br /><br />Le radici di De Criso restano saldamente ancorate all'Italia. I laboratori di produzione, situati a Roma e Valenza - due luoghi simbolo della tradizione orafa italiana - sono il punto d'incontro tra tecniche secolari e una continua ricerca di nuove forme, materiali e linguaggi estetici. <br /><br />Allo stesso tempo, De Criso guarda oltre i confini, con una presenza attiva negli Stati Uniti e un legame speciale con New York, capitale internazionale del lusso e del design. Qui la Maison collabora con laboratori selezionati, scelti per l'eccellenza tecnica e la sensibilità artigianale, per rispondere in modo puntuale alle esigenze del mercato internazionale, mantenendo intatti gli standard qualitativi e lo spirito che definiscono l'identità del marchio.",
  },
  en: {
    title: "About Us",
    text1:
      "Maison De Criso has its roots in a story that comes from afar, in the heart of Italy, a land where art, beauty and craftsmanship have been intertwined for centuries. It is from this cultural and human heritage, passed down over time, that the identity of the Maison is born: from a deep love for beauty in all its forms, for art and for things done well, with respect, patience and dedication.<br /><br />De Criso represents the natural evolution of a long tradition of jewelers, grown over time and reinterpreted with a contemporary gaze. A journey made of knowledge passed down from generation to generation, of ancient gestures that continue to live in modern creations, capable of uniting memory and innovation.<br /><br />Since its origins, De Criso has been dedicated to the creation of jewelry, made with the care and passion that have always distinguished Italian master goldsmiths. Each De Criso creation is designed, modeled and made using certified natural diamonds (GIA, HRD) and carefully selected precious stones, accompanied by certifications from the most authoritative international gemological institutes (GIA, GUBELIN, GRS, IGI and others).",
    text2:
      "The Maison works with emeralds, sapphires, rubies, tanzanites, aquamarines, tourmalines, spinels, garnets and many other gems of extraordinary quality, chosen not only for their value and beauty, but also for their ability to tell and pass on stories and evoke emotions.<br /><br />Each jewel is an expression of the excellence of Italian savoir-faire: meticulous attention to detail, harmony of forms and a constant search for perfection. Alongside its own creations, De Criso also offers an exclusive selection of pieces signed by the most prestigious international maisons.<br /><br />The roots of De Criso remain firmly anchored in Italy. The production laboratories, located in Rome and Valenza - two symbolic places of the Italian goldsmith tradition - are the meeting point between centuries-old techniques and a continuous search for new forms, materials and aesthetic languages.<br /><br />At the same time, De Criso looks beyond borders, with an active presence in the United States and a special bond with New York, the international capital of luxury and design. Here the Maison collaborates with selected laboratories, chosen for their technical excellence and artisanal sensitivity, to respond promptly to the needs of the international market, while maintaining the quality standards and spirit that define the brand's identity.",
  },
};

export default function AboutPage() {
  const [language, setLanguage] = useState<"it" | "en">("it");

  const toggleLanguage = () => {
    setLanguage(language === "it" ? "en" : "it");
  };

  return (
    <div className={styles.background}>
      <div className={styles.page}>
        <button className={styles.languageToggle} onClick={toggleLanguage}>
          {language === "it" ? " EN" : " IT"}
        </button>
        <h1 className={styles.title}>{translations[language].title}</h1>
        <div className={styles.textWrapper}>
          <div className={styles.section}>
            <div className={styles.textContent}>
              <p
                className={styles.text}
                dangerouslySetInnerHTML={{
                  __html: translations[language].text1,
                }}
              />
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.textContent}>
              <p
                className={styles.text}
                dangerouslySetInnerHTML={{
                  __html: translations[language].text2,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
