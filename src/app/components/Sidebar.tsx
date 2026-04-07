"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const pathname = usePathname();

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
        <ul className={styles.list}>
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link href="/portfolio" onClick={() => setIsOpen(false)}>Jewelry</Link></li>
          
          <li className={styles.shopMenuItem}>
            <div 
              className={styles.shopToggle} 
              onClick={() => setIsShopOpen(!isShopOpen)}
            >
              Shop
              <span className={`${styles.arrow} ${isShopOpen ? styles.arrowOpen : ''}`}>▼</span>
            </div>
            {isShopOpen && (
              <ul className={styles.subMenu}>
                <li>
                  <Link href="/shop/bracelets" onClick={() => setIsOpen(false)}>Bracelets</Link>
                </li>
                <li>
                  <Link href="/shop/earrings" onClick={() => setIsOpen(false)}>Earrings</Link>
                </li>
                <li>
                  <Link href="/shop/necklaces" onClick={() => setIsOpen(false)}>Necklaces</Link>
                </li>
                <li>
                  <Link href="/shop/rings" onClick={() => setIsOpen(false)}>Rings</Link>
                </li>
              </ul>
            )}
          </li>
          
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
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
