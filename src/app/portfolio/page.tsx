"use client";
import { useState } from "react";
import Carousel from "../components/Carousel";
import styles from "./page.module.css";

const translations = {
  it: {
    title: "Gioielli",
  },
  en: {
    title: "Jewelry",
  },
};

// Rings - 4.70ct Green Emerald Bezel Ring
import img1 from "../../../assets/NewImages/4.70ct Green Emerald Bezel Ring/A    RI-ONE-019_1-3.jpg";
import img2 from "../../../assets/NewImages/4.70ct Green Emerald Bezel Ring/B RI-ONE-019_2-1.jpg";
import img3 from "../../../assets/NewImages/4.70ct Green Emerald Bezel Ring/C   RI-ONE-019_3-1-570x570.jpg";
import img4 from "../../../assets/NewImages/4.70ct Green Emerald Bezel Ring/D   RI-ONE-019_4-1-570x570.png";

// Rings - 6.00Ct Emerald Cut Side Stone Platinum Ring
import img5 from "../../../assets/NewImages/6.00Ct Emerald Cut Side Stone Platinum Ring/RI-NY-021_1-2-2048x2048.jpg";
import img6 from "../../../assets/NewImages/6.00Ct Emerald Cut Side Stone Platinum Ring/RI-NY-021_2-2-2048x2048.jpg";
import img7 from "../../../assets/NewImages/6.00Ct Emerald Cut Side Stone Platinum Ring/RI-NY-021_3-2-2048x2048.jpg";

// Rings - 8.80 ct Green Emerald Ring with Trapezoid Diamonds
import img8 from "../../../assets/NewImages/8.80 ct Green Emerald Ring with Trapezoid Diamonds/A   RI-MV27-EC_12-5-2048x2048.jpg";
import img9 from "../../../assets/NewImages/8.80 ct Green Emerald Ring with Trapezoid Diamonds/B   RI-MV27-EC_2-2-2048x2048.jpg";
import img10 from "../../../assets/NewImages/8.80 ct Green Emerald Ring with Trapezoid Diamonds/C   RI-MV27-EC_3-2-2048x2048.jpg";
import img11 from "../../../assets/NewImages/8.80 ct Green Emerald Ring with Trapezoid Diamonds/D   RI-MV27-EC_2-2-2048x2048.png";

// Eternity Bands - DIAMONDS BAGUETTE CUT
import img12 from "../../../assets/NewImages/ETBR DIAMONDS BAGUETTE CUT Montatura Battuta/a.jpg";
import img13 from "../../../assets/NewImages/ETBR DIAMONDS BAGUETTE CUT Montatura Battuta/b.png";
import img14 from "../../../assets/NewImages/ETBR DIAMONDS BAGUETTE CUT Montatura Battuta/c.png";
import img15 from "../../../assets/NewImages/ETBR DIAMONDS BAGUETTE CUT Montatura Battuta/d.png";

// Eternity Bands - FY DIAMONDS CUSHION CUT & BAGUETTE
import img16 from "../../../assets/NewImages/ETBR FY DIAMONDS CUSHION CUT & BAGUETTE/a.jpg";
import img17 from "../../../assets/NewImages/ETBR FY DIAMONDS CUSHION CUT & BAGUETTE/b.jpg";
import img18 from "../../../assets/NewImages/ETBR FY DIAMONDS CUSHION CUT & BAGUETTE/c.jpg";
import img19 from "../../../assets/NewImages/ETBR FY DIAMONDS CUSHION CUT & BAGUETTE/d.png";

// Eternity Bands - GREEN EMERALD
import img20 from "../../../assets/NewImages/ETBR GREEN EMERALD/a.png";
import img21 from "../../../assets/NewImages/ETBR GREEN EMERALD/b.png";
import img22 from "../../../assets/NewImages/ETBR GREEN EMERALD/d.png";

// Eternity Bands - GREEN EMERALD Oval cut and Diamonds
import img23 from "../../../assets/NewImages/ETBR GREEN EMERALD Oval cut and Diamonds/A.png";
import img24 from "../../../assets/NewImages/ETBR GREEN EMERALD Oval cut and Diamonds/B.png";
import img25 from "../../../assets/NewImages/ETBR GREEN EMERALD Oval cut and Diamonds/C.png";
import img26 from "../../../assets/NewImages/ETBR GREEN EMERALD Oval cut and Diamonds/D.png";

// Eternity Bands - RBC Diamonds
import img27 from "../../../assets/NewImages/ETBR RBC Diamonds/a.png";
import img28 from "../../../assets/NewImages/ETBR RBC Diamonds/b.png";
import img29 from "../../../assets/NewImages/ETBR RBC Diamonds/c.png";

// Eternity Bands - RUBY EMERALD CUT
import img30 from "../../../assets/NewImages/ETBR RUBY EMERALD CUT/a.png";
import img31 from "../../../assets/NewImages/ETBR RUBY EMERALD CUT/b.png";
import img32 from "../../../assets/NewImages/ETBR RUBY EMERALD CUT/c.png";
import img33 from "../../../assets/NewImages/ETBR RUBY EMERALD CUT/d.png";

// Necklaces - Tahitian Pearls
import img34 from "../../../assets/NewImages/Necklace Tahitian Pearls/a.png";
import img35 from "../../../assets/NewImages/Necklace Tahitian Pearls/b.png";
import img36 from "../../../assets/NewImages/Necklace Tahitian Pearls/c.png";

// Necklaces - Tennis Riviera
import img37 from "../../../assets/NewImages/Necklace Tennis Riviera/riviera a.jpg";
import img38 from "../../../assets/NewImages/Necklace Tennis Riviera/riviera b.png";
import img39 from "../../../assets/NewImages/Necklace Tennis Riviera/riviera c.png";

export default function PortfolioPage() {
  const [language, setLanguage] = useState<"it" | "en">("it");

  const toggleLanguage = () => {
    setLanguage(language === "it" ? "en" : "it");
  };

  const jewelryImages = [
    // 4.70ct Green Emerald Bezel Ring
    { src: img1.src, alt: "4.70ct Green Emerald Bezel Ring - View 1" },
    { src: img2.src, alt: "4.70ct Green Emerald Bezel Ring - View 2" },
    { src: img3.src, alt: "4.70ct Green Emerald Bezel Ring - View 3" },
    { src: img4.src, alt: "4.70ct Green Emerald Bezel Ring - View 4" },
    
    // 6.00Ct Emerald Cut Side Stone Platinum Ring
    { src: img5.src, alt: "6.00Ct Emerald Cut Side Stone Platinum Ring - View 1" },
    { src: img6.src, alt: "6.00Ct Emerald Cut Side Stone Platinum Ring - View 2" },
    { src: img7.src, alt: "6.00Ct Emerald Cut Side Stone Platinum Ring - View 3" },
    
    // 8.80 ct Green Emerald Ring with Trapezoid Diamonds
    { src: img8.src, alt: "8.80ct Green Emerald Ring with Trapezoid Diamonds - View 1" },
    { src: img9.src, alt: "8.80ct Green Emerald Ring with Trapezoid Diamonds - View 2" },
    { src: img10.src, alt: "8.80ct Green Emerald Ring with Trapezoid Diamonds - View 3" },
    { src: img11.src, alt: "8.80ct Green Emerald Ring with Trapezoid Diamonds - View 4" },
    
    // Eternity Band - Diamonds Baguette Cut
    { src: img12.src, alt: "Eternity Band with Diamonds Baguette Cut - View 1" },
    { src: img13.src, alt: "Eternity Band with Diamonds Baguette Cut - View 2" },
    { src: img14.src, alt: "Eternity Band with Diamonds Baguette Cut - View 3" },
    { src: img15.src, alt: "Eternity Band with Diamonds Baguette Cut - View 4" },
    
    // Eternity Band - FY Diamonds Cushion Cut & Baguette
    { src: img16.src, alt: "Eternity Band FY Diamonds Cushion Cut & Baguette - View 1" },
    { src: img17.src, alt: "Eternity Band FY Diamonds Cushion Cut & Baguette - View 2" },
    { src: img18.src, alt: "Eternity Band FY Diamonds Cushion Cut & Baguette - View 3" },
    { src: img19.src, alt: "Eternity Band FY Diamonds Cushion Cut & Baguette - View 4" },
    
    // Eternity Band - Green Emerald
    { src: img20.src, alt: "Eternity Band with Green Emeralds - View 1" },
    { src: img21.src, alt: "Eternity Band with Green Emeralds - View 2" },
    { src: img22.src, alt: "Eternity Band with Green Emeralds - View 3" },
    
    // Eternity Band - Green Emerald Oval Cut and Diamonds
    { src: img23.src, alt: "Eternity Band Green Emerald Oval Cut and Diamonds - View 1" },
    { src: img24.src, alt: "Eternity Band Green Emerald Oval Cut and Diamonds - View 2" },
    { src: img25.src, alt: "Eternity Band Green Emerald Oval Cut and Diamonds - View 3" },
    { src: img26.src, alt: "Eternity Band Green Emerald Oval Cut and Diamonds - View 4" },
    
    // Eternity Band - RBC Diamonds
    { src: img27.src, alt: "Eternity Band with Round Brilliant Cut Diamonds - View 1" },
    { src: img28.src, alt: "Eternity Band with Round Brilliant Cut Diamonds - View 2" },
    { src: img29.src, alt: "Eternity Band with Round Brilliant Cut Diamonds - View 3" },
    
    // Eternity Band - Ruby Emerald Cut
    { src: img30.src, alt: "Eternity Band with Ruby Emerald Cut - View 1" },
    { src: img31.src, alt: "Eternity Band with Ruby Emerald Cut - View 2" },
    { src: img32.src, alt: "Eternity Band with Ruby Emerald Cut - View 3" },
    { src: img33.src, alt: "Eternity Band with Ruby Emerald Cut - View 4" },
    
    // Necklace - Tahitian Pearls
    { src: img34.src, alt: "Necklace with Tahitian Pearls - View 1" },
    { src: img35.src, alt: "Necklace with Tahitian Pearls - View 2" },
    { src: img36.src, alt: "Necklace with Tahitian Pearls - View 3" },
    
    // Necklace - Tennis Riviera
    { src: img37.src, alt: "Tennis Riviera Necklace - View 1" },
    { src: img38.src, alt: "Tennis Riviera Necklace - View 2" },
    { src: img39.src, alt: "Tennis Riviera Necklace - View 3" },
  ];

  return (
    <div className={styles.page}>
      <button className={styles.languageToggle} onClick={toggleLanguage}>
        {language === "it" ? " EN" : " IT"}
      </button>
      <h1 className={styles.title}>{translations[language].title}</h1>
      <Carousel images={jewelryImages} />
    </div>
  );
}
