"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const translations = {
  it: {
    title: "Contattaci",
    phone: "Telefono",
    address: "Indirizzo",
    formTitle: "Inviaci un Messaggio",
    name: "Nome",
    message: "Messaggio",
    placeholder: "Raccontaci della tua richiesta...",
    sendMessage: "Invia Messaggio",
    privacyLabel: "Ho letto e accetto la",
    privacyLink: "Privacy Policy"
  },
  en: {
    title: "Contact Us",
    phone: "Phone",
    address: "Address",
    formTitle: "Send Us a Message",
    name: "Name",
    message: "Message",
    placeholder: "Tell us about your inquiry...",
    sendMessage: "Send Message",
    privacyLabel: "I have read and accept the",
    privacyLink: "Privacy Policy"
  }
};

export default function ContactPage() {
  const [language, setLanguage] = useState<"it" | "en">("it");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const toggleLanguage = () => {
    setLanguage(language === "it" ? "en" : "it");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: language === "it" 
            ? "Messaggio inviato con successo! Ti risponderemo presto." 
            : "Message sent successfully! We'll get back to you soon."
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: language === "it"
            ? "Errore nell'invio del messaggio. Riprova."
            : "Error sending message. Please try again."
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: language === "it"
          ? "Errore nell'invio del messaggio. Riprova."
          : "Error sending message. Please try again."
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.page}>
      <button className={styles.languageToggle} onClick={toggleLanguage}>
        {language === "it" ? " EN" : " IT"}
      </button>
      <h1 className={styles.title}>{translations[language].title}</h1>
      <div className={styles.contactInfo}>
        <div className={styles.infoCard}>
          <p>Request private consultation</p>
        </div>
      </div>

      <div className={styles.formSection}>
        <h2 className={styles.formTitle}>{translations[language].formTitle}</h2>
        
        {status.type !== "idle" && (
          <div className={`${styles.statusMessage} ${styles[status.type]}`}>
            {status.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name">{translations[language].name} *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="phone">{translations[language].phone}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="message">{translations[language].message} *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder={translations[language].placeholder}
              required
            />
          </div>
          
          <div className={styles.privacyCheckbox}>
            <input
              type="checkbox"
              id="privacy"
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              required
            />
            <label htmlFor="privacy">
              {translations[language].privacyLabel}{" "}
              <Link href="/privacy" target="_blank" className={styles.privacyLink}>
                {translations[language].privacyLink}
              </Link>
            </label>
          </div>

          <button type="submit" className={styles.submitButton} disabled={status.type === "loading" || !privacyAccepted}>
            {status.type === "loading" 
              ? (language === "it" ? "Invio in corso..." : "Sending...")
              : translations[language].sendMessage
            }
          </button>
        </form>
      </div>
    </div>
  );
}
