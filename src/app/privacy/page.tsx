"use client";

import { useState } from "react";
import styles from "./page.module.css";

const translations = {
  it: {
    title: "Privacy Policy",
    subtitle: "PRIVACY POLICY DI www.decriso.com",
    intro: "Informativa ai sensi del Regolamento UE 2016/679 (GDPR)",
    introText: "La presente informativa descrive le modalità di gestione dei dati personali degli utenti che consultano il sito web della società.",
    
    sections: [
      {
        number: "1",
        title: "TITOLARE DEL TRATTAMENTO",
        content: `Il Titolare del trattamento è:<br/><br/>
          <strong>Italian International Jewels S.r.l.</strong><br/>
          Via Monte Zebio, 40 - 00195 - Roma (Italia)<br/>
          C.F. e P.IVA: 17843811005<br/>
          E-mail: info@italianinternjewels.com`
      },
      {
        number: "2",
        title: "TIPOLOGIA DI DATI TRATTATI",
        content: `Il Titolare può trattare le seguenti categorie di dati personali:<br/><br/>
          • Dati identificativi (nome, cognome)<br/>
          • Dati di contatto (e-mail, numero di telefono)<br/>
          • Indirizzo di spedizione e fatturazione<br/>
          • Eventuali dati fiscali<br/>
          • Contenuto dei messaggi inviati dall'utente<br/>
          • Dati tecnici (indirizzo IP, log di accesso al sito)`
      },
      {
        number: "3",
        title: "FINALITÀ DEL TRATTAMENTO",
        content: `I dati sono trattati per:<br/><br/>
          • Rispondere alle richieste di informazioni inviate dall'utente<br/>
          • Gestire ordini e spedizioni<br/>
          • Fornire supporto ai clienti<br/>
          • Gestire richieste di appuntamento<br/>
          • Garantire il corretto funzionamento del sito<br/>
          • Emissione di eventuali documenti fiscali<br/>
          • Adempiere ad obblighi legali`
      },
      {
        number: "4",
        title: "BASE GIURIDICA DEL TRATTAMENTO",
        content: `Il trattamento si basa su:<br/><br/>
          • Consenso dell'interessato (art. 6.1.a GDPR)<br/>
          • Esecuzione di misure precontrattuali (art. 6.1.b GDPR)<br/>
          • Interesse legittimo (sicurezza del sito)`
          
      },
      {
        number: "5",
        title: "MODALITÀ DEL TRATTAMENTO",
        content: "Il trattamento avviene mediante strumenti informatici e/o manuali, nel rispetto dei principi di liceità, correttezza e trasparenza e adottando adeguate misure di sicurezza."
      },
      {
        number: "6",
        title: "CONSERVAZIONE DEI DATI",
        content: "I dati saranno conservati per il tempo necessario a soddisfare le finalità sopra indicate e comunque non oltre 12 mesi, salvo diversi obblighi di legge."
      },
      {
        number: "7",
        title: "COMUNICAZIONE DEI DATI",
        content: `I dati potranno essere comunicati a:<br/><br/>
          • Fornitori di servizi tecnici (hosting, e-mail)<br/>
          • Consulenti professionali (legali, amministrativi)<br/>
          • Corrieri e spedizionieri<br/><br/>
          I dati non saranno diffusi.`
      },
      {
        number: "8",
        title: "TRASFERIMENTO DEI DATI",
        content: "I dati sono trattati all'interno dell'Unione Europea. Eventuali trasferimenti verso Paesi terzi avverranno nel rispetto del GDPR."
      },
      {
        number: "9",
        title: "DIRITTI DELL'INTERESSATO",
        content: `L'interessato può esercitare i diritti previsti dagli artt. 15-22 GDPR:<br/><br/>
          • Accesso ai dati<br/>
          • Rettifica<br/>
          • Cancellazione<br/>
          • Limitazione del trattamento<br/>
          • Opposizione<br/>
          • Fare reclamo al Garante Privacy<br/><br/>
          Le richieste possono essere inviate a info@italianinternjewels.com`
      },
      {
        number: "10",
        title: "NATURA DEL CONFERIMENTO",
        content: "Il conferimento dei dati è facoltativo, ma necessario per rispondere alle richieste. Il mancato conferimento comporta l'impossibilità di fornire il servizio."
      },
      {
        number: "11",
        title: "MODIFICHE",
        content: "Il titolare si riserva il diritto di modificare la policy."
      },
      {
        number: "12",
        title: "CONSENSO",
        content: "L'utente, inviando una richiesta tramite e-mail o form, dichiara di aver letto e compreso la presente informativa."
      }
    ]
  },
  en: {
    title: "Privacy Policy",
    subtitle: "PRIVACY POLICY www.decriso.com",
    intro: "Information pursuant of EU Regulation 2016/679 (GDPR)",
    introText: "This Privacy Policy describes how Italian International Jewels S.r.l. collects and processes personal data of users who access and interact with its website.<br/> We are committed to protecting your personal data with the utmost care, ensuring confidentiality, security, and full compliance with applicable data protection laws.",
    
    sections: [
      {
        number: "1",
        title: "DATA CONTROLLER",
        content: `The Data Controller is:<br/><br/>
          <strong>Italian International Jewels S.r.l.</strong><br/>
          Via Monte Zebio, 40 – 00195 Rome (Italy)<br/>
          Registered with the Rome Chamber of Commerce<br/>
          Tax Code and VAT Number: 17843811005<br/>
          Email: info@italianinternjewels.com`
      },
      {
        number: "2",
        title: "TYPES OF PERSONAL DATA COLLECTED",
        content: `We may collect and process the following categories of personal data:<br/><br/>
          • Identification data (such as name and surname)<br/>
          • Contact details (such as email address and phone number)<br/>
          • Shipping and billing addresses<br/>
          • Any applicable tax or fiscal data<br/>
          • Information voluntarily provided through messages or appointment requests<br/>
          • Technical data (including IP address and website access logs)`
      },
      {
        number: "3",
        title: "PURPOSES OF PROCESSING",
        content: `Your data are processed for the following purposes:<br/><br/>
          • To respond to your inquiries and provide requested information<br/>
          • Processing of orders and management of shipments<br/>
          • Provision of customer support services<br/>
          • To arrange and manage appointment requests<br/>
          • To ensure the proper functioning and security of the website<br/>
          • Issuance of any applicable invoices and other fiscal documents<br/>
          • To comply with applicable legal and regulatory obligations`
      },
      {
        number: "4",
        title: "LEGAL BASIS",
        content: `Processing of your personal data is based on:<br/><br/>
          • Your consent (Article 6(1)(a) GDPR)<br/>
          • The need to take steps prior to entering into a contract (Article 6(1)(b) GDPR)<br/>
          • Legitimate interest (ensuring the security of the website)`
      },
      {
        number: "5",
        title: "PROCESSING METHODS AND SECURITY",
        content: "Personal data are processed using electronic and/or manual tools, in accordance with principles of lawfulness, fairness, and transparency. We implement appropriate technical and organizational measures to safeguard your data against unauthorized access, disclosure, alteration, or destruction."
      },
      {
        number: "6",
        title: "DATA RETENTION",
        content: "Your personal data will be retained only for as long as necessary to fulfill the purposes outlined above and, in any case, no longer than 12 months, unless a longer retention period is required by law."
      },
      {
        number: "7",
        title: "DATA SHARING",
        content: `Your personal data may be shared, where necessary, with:<br/><br/>
          • Trusted technical service providers (e.g., hosting and email services)<br/>
          • Professional advisors (legal, administrative, or tax consultants)<br/>
          • Courier and delivery service providers<br/><br/>
          Your data will never be publicly disclosed.`
      },
      {
        number: "8",
        title: "INTERNATIONAL DATA TRANSFERS",
        content: "Personal data are processed within the European Union. Any transfer to countries outside the EU will be carried out in full compliance with GDPR requirements."
      },
      {
        number: "9",
        title: "YOUR RIGHTS",
        content: `You have the right to exercise, at any time, the rights provided under Articles 15–22 of the GDPR, including:<br/><br/>
          • Access to your personal data<br/>
          • Rectification or updating of inaccurate data<br/>
          • Erasure of your data<br/>
          • Restriction of processing<br/>
          • Objection to processing<br/>
          • To lodge a complaint with the competent Data Protection Authority<br/><br/>
          Requests may be sent to: info@italianinternjewels.com`
      },
      {
        number: "10",
        title: "PROVISION OF DATA",
        content: "Providing personal data is voluntary; however, it is necessary in order for us to respond to your requests. Failure to provide such data may prevent us from delivering the requested services."
      },
      {
        number: "11",
        title: "MODIFICATIONS",
        content: "The Data Controller reserves the right to modify this Privacy Policy at any time."
      },
      {
        number: "12",
        title: "CONSENT",
        content: "By contacting us via email or through the website contact form, you acknowledge that you have read and understood this Privacy Policy and consent to the processing of your personal data as described herein."
      }
    ]
  }
};

export default function PrivacyPage() {
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
        
        <div className={styles.header}>
          <h1 className={styles.title}>{translations[language].title}</h1>
          <p className={styles.subtitle}>{translations[language].subtitle}</p>
          <p className={styles.intro}>{translations[language].intro}</p>
          <p className={styles.introText} dangerouslySetInnerHTML={{ __html: translations[language].introText }} />
        </div>

        <div className={styles.content}>
          {translations[language].sections.map((section, index) => (
            <div key={index} className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>{section.number}</span>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
              </div>
              <div
                className={styles.sectionContent}
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.lastUpdated}>
            {language === "it" 
              ? "Ultimo aggiornamento: Aprile 2026" 
              : "Last updated: April 2026"}
          </p>
        </div>
      </div>
    </div>
  );
}
