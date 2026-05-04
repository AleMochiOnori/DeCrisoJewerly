"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  it: {
    home: "Home",
    about: "Chi Siamo",
    jewelry: "Gioielli",
    shop: "Shop",
    bracelets: "Bracciali",
    earrings: "Orecchini",
    necklaces: "Collane",
    rings: "Anelli",
    contact: "Contattaci"
  },
  en: {
    home: "Home",
    about: "About Us",
    jewelry: "Jewelry",
    shop: "Shop",
    bracelets: "Bracelets",
    earrings: "Earrings",
    necklaces: "Necklaces",
    rings: "Rings",
    contact: "Contact Us"
  }
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();

  // Definisci gli stili per ogni pagina
  const getNavStyle = () => {
    switch(pathname) {
      case '/about':
        return styles.navAbout;
      case '/portfolio':
        return styles.navPortfolio;
      case '/shop':
        return styles.navShop;
      case '/contact':
        return styles.navContact;
      default:
        return styles.navDefault;
    }
  };

  const getHamburgerStyle = () => {
    switch(pathname) {
      case '/about':
        return styles.hamburgerAbout;
      default:
        return '';
    }
  };

  return (
    <>
      <button 
        className={`${styles.hamburger} ${getHamburgerStyle()}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      
      <nav 
        className={`${styles.nav} ${getNavStyle()} ${isOpen ? styles.open : ''}`} 
        aria-label="Main navigation"
      >
        <div className={styles.languageToggleContainer}>
          <button className={styles.languageToggle} onClick={toggleLanguage}>
            {language === "it" ? "EN" : "IT"}
          </button>
        </div>
        
        <ul className={styles.list}>
          <li><Link href="/" onClick={() => setIsOpen(false)}>{translations[language].home}</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>{translations[language].about}</Link></li>
          <li><Link href="/portfolio" onClick={() => setIsOpen(false)}>{translations[language].jewelry}</Link></li>
          
          <li className={styles.shopMenuItem}>
            <div 
              className={styles.shopToggle} 
              onClick={() => setIsShopOpen(!isShopOpen)}
            >
              {translations[language].shop}
              <span className={`${styles.arrow} ${isShopOpen ? styles.arrowOpen : ''}`}>▼</span>
            </div>
            {isShopOpen && (
              <ul className={styles.subMenu}>
                <li>
                  <Link href="/shop/bracelets" onClick={() => setIsOpen(false)}>{translations[language].bracelets}</Link>
                </li>
                <li>
                  <Link href="/shop/earrings" onClick={() => setIsOpen(false)}>{translations[language].earrings}</Link>
                </li>
                <li>
                  <Link href="/shop/necklaces" onClick={() => setIsOpen(false)}>{translations[language].necklaces}</Link>
                </li>
                <li>
                  <Link href="/shop/rings" onClick={() => setIsOpen(false)}>{translations[language].rings}</Link>
                </li>
              </ul>
            )}
          </li>
          
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>{translations[language].contact}</Link></li>
        </ul>
      </nav>
      
      {isOpen && (
        <div 
          className={styles.overlay} 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
