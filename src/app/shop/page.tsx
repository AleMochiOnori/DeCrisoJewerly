"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";

import ring1 from "../../../assets/Jewels/Ring/Bubble Ring/BubbleRing1.jpeg";
import ring2 from "../../../assets/Jewels/Ring/Classic Heart Pavè Ring/1.Vista Frontale.jpg";
import ring3 from "../../../assets/Jewels/Ring/8.88 ct Green Emerald Ring with Trapezoid Diamonds/RI-MV27-EC_12-5-2048x2048.jpg";

// NewImages - 4.70ct Green Emerald Bezel Ring
import newRing1a from "../../../assets/NewImages/4.70ct Green Emerald Bezel Ring/A    RI-ONE-019_1-3.jpg";
import newRing1b from "../../../assets/NewImages/4.70ct Green Emerald Bezel Ring/B RI-ONE-019_2-1.jpg";
import newRing1c from "../../../assets/NewImages/4.70ct Green Emerald Bezel Ring/C   RI-ONE-019_3-1-570x570.jpg";
import newRing1d from "../../../assets/NewImages/4.70ct Green Emerald Bezel Ring/D   RI-ONE-019_4-1-570x570.png";

// NewImages - 6.00Ct Emerald Cut Side Stone Platinum Ring
import newRing2a from "../../../assets/NewImages/6.00Ct Emerald Cut Side Stone Platinum Ring/RI-NY-021_1-2-2048x2048.jpg";
import newRing2b from "../../../assets/NewImages/6.00Ct Emerald Cut Side Stone Platinum Ring/RI-NY-021_2-2-2048x2048.jpg";
import newRing2c from "../../../assets/NewImages/6.00Ct Emerald Cut Side Stone Platinum Ring/RI-NY-021_3-2-2048x2048.jpg";

// NewImages - 8.80 ct Green Emerald Ring with Trapezoid Diamonds
import newRing3a from "../../../assets/NewImages/8.80 ct Green Emerald Ring with Trapezoid Diamonds/A   RI-MV27-EC_12-5-2048x2048.jpg";
import newRing3b from "../../../assets/NewImages/8.80 ct Green Emerald Ring with Trapezoid Diamonds/B   RI-MV27-EC_2-2-2048x2048.jpg";
import newRing3c from "../../../assets/NewImages/8.80 ct Green Emerald Ring with Trapezoid Diamonds/C   RI-MV27-EC_3-2-2048x2048.jpg";

// NewImages - Necklace Tahitian Pearls
import newNecklace1a from "../../../assets/NewImages/Necklace Tahitian Pearls/a.png";
import newNecklace1b from "../../../assets/NewImages/Necklace Tahitian Pearls/b.png";
import newNecklace1c from "../../../assets/NewImages/Necklace Tahitian Pearls/c.png";

// NewImages - Necklace Tennis Riviera
import newNecklace2a from "../../../assets/NewImages/Necklace Tennis Riviera/riviera a.jpg";
import newNecklace2b from "../../../assets/NewImages/Necklace Tennis Riviera/riviera b.png";
import newNecklace2c from "../../../assets/NewImages/Necklace Tennis Riviera/riviera c.png";

// Earrings Green Em and Marq Diamonds
import earrings1a from "../../../assets/Earrings Green Em and Marq Diamonds/a.png";
import earrings1b from "../../../assets/Earrings Green Em and Marq Diamonds/b.jpg";
import earrings1c from "../../../assets/Earrings Green Em and Marq Diamonds/c.png";
import earrings1d from "../../../assets/Earrings Green Em and Marq Diamonds/IGIGreenEmerald d.jpeg";

// Orecchini 3 cuori Diamanti e oro giallo 18K
import earrings2a from "../../../assets/Orecchini 3 cuori Diamanti e oro giallo 18K/a.png";
import earrings2b from "../../../assets/Orecchini 3 cuori Diamanti e oro giallo 18K/b.png";
import earrings2c from "../../../assets/Orecchini 3 cuori Diamanti e oro giallo 18K/c.png";

// Orecchini Flower 3 - a Fiore zaffiri e diamanti
import earrings3b from "../../../assets/Orecchini Flower 3  - a Fiore zaffiri e diamanti/b.png";
import earrings3c from "../../../assets/Orecchini Flower 3  - a Fiore zaffiri e diamanti/c.png";
import earrings3d from "../../../assets/Orecchini Flower 3  - a Fiore zaffiri e diamanti/d.png";

const translations = {
  it: {
    title: "Shop De Criso Jewelry",
    subtitle: "Scopri la nostra collezione esclusiva di alta gioielleria",
    inquireNow: "Compra ora",
    modalTitle: "Richiesta informazioni",
    modalSubtitle: "Se desideri avere maggiori informazioni sul prodotto chiamaci senza impegno al numero",
    modalSubtitle2: "oppure compila il seguente modulo. Ti risponderemo prima possibile.",
    fullName: "Nome e Cognome",
    phone: "Numero di Telefono",
    messageLabel: "Messaggio",
    privacyText: "Ho letto la",
    privacyLink: "Privacy Policy",
    privacyText2: "ed acconsento al trattamento dei dati personali.",
    sendInquiry: "Invia Richiesta",
    moreComingSoon: "Altri prodotti in arrivo",
    moreDescription: "La nostra collezione si arricchisce continuamente. Torna presto per scoprire nuovi pezzi unici di alta gioielleria.",
    products: [
      {
        name: "Anello Smeraldo Trapezoidale Verde",
        description: "Un squisito smeraldo colombiano da 8,88 carati affiancato da diamanti trapezoidali. Un vero capolavoro di alta gioielleria."
      },
      {
        name: "Orecchini con Smeraldi e Diamanti Marquise",
        description: "Orecchini con smeraldi naturali certificati taglio ottagonale (step cut), trasparenti, di colore verde intenso: 3,62 ct e 3,41 ct. Montati in oro giallo e bianco, incorniciati da diamanti taglio marquise che esaltano la luminosità e il design."
      },
      {
        name: "Orecchini Pendenti a Cuore con Diamanti GIA",
        description: "Orecchini pendenti con diamanti taglio cuore graduati e brillanti di collegamento, per un totale di circa 4,80 ct (cuori principali 1,20 ct cad.), purezza VS e colore F/G, certificati GIA. Montati in oro bianco 18K, con proporzioni eleganti e progressione armoniosa delle dimensioni."
      },
      {
        name: "Orecchini a Fiore con Zaffiri Ceylon e Diamanti",
        description: "Orecchini a motivo floreale con zaffiri naturali origine Ceylon (Sri Lanka), taglio ovale, dal fantastico colore blu chiaro, per un totale di circa 2,40 Ct. Gli zaffiri sono arricchiti da diamanti taglio brillante di contorno per circa 0,60 Ct. in totali, colore G e purezza VS. Gli orecchini sono montati in oro bianco 14K, ed offrono un design molto raffinato e luminoso."
      },
      {
        name: "Anello con Smeraldo Verde 4.77Ct",
        description: "Anello con uno smeraldo naturale verde taglio smeraldo di 4,77Ct, certificato GRS. La pietra centrale è incastonata in una montatura a lunetta in oro giallo, circondata da un alone di diamanti taglio brillante che esaltano la bellezza dello smeraldo."
      },
      {
        name: "Anello Taglio Smeraldo con Diamante 8.13Ct",
        description: "Straordinario anello con un diamante taglio smeraldo da 8,13ct, graduato E VS1 e certificato GIA. Incastonato in platino, il diamante centrale è elegantemente accentuato da pietre laterali taglio trapezoidale, creando un design senza tempo e raffinato che emana brillantezza."
      },
      {
        name: "Anello Smeraldo Verde 8.88Ct con Diamanti Trapezoidali",
        description: "Presentiamo il nostro squisito anello con smeraldo verde naturale da 8,88 carati, con pietre laterali di diamanti trapezoidali taglio step. La pietra centrale è un affascinante smeraldo naturale da 8,88ct, meticolosamente incastonato in oro bianco e giallo 18K."
      },
      {
        name: "Collana con Perle di Tahiti",
        description: "Elegante collana di perle di Tahiti dai riflessi grigio antracite, caratterizzata da una lucentezza intensa e sofisticata. Design classico e armonioso perfetto per ogni occasione. Realizzata con 45 perle Tahiti di diametro di circa 8/10 mm. Lunghezza di circa 45 cm con chiusura in oro bianco 18K."
      },
      {
        name: "Collana Riviera di Diamanti",
        description: "Collana di diamanti stile Riviera, lunghezza 43,20 cm con 119 diamanti graduati taglio brillante rotondo incastonati in castoni a quattro griffe, montata in oro bianco 18K. La pietra centrale misura 2,00Ct e le due laterali 1,40Ct ciascuna. I diamanti hanno colore F/G e purezza VS-SI1. Peso totale stimato: 20,50Ct."
      }
    ]
  },
  en: {
    title: "Shop De Criso Jewelry",
    subtitle: "Discover our exclusive collection of fine jewelry",
    inquireNow: "Buy Now",
    modalTitle: "Request Information",
    modalSubtitle: "If you would like more information about the product, feel free to call us at",
    modalSubtitle2: "or fill out the following form. We will respond as soon as possible.",
    fullName: "Full Name",
    phone: "Phone Number",
    messageLabel: "Message",
    privacyText: "I have read the",
    privacyLink: "Privacy Policy",
    privacyText2: "and consent to the processing of personal data.",
    sendInquiry: "Send Request",
    moreComingSoon: "More products coming soon",
    moreDescription: "Our collection is constantly growing. Check back soon to discover new unique pieces of haute joaillerie.",
    products: [
      {
        name: "Green Emerald Trapezoid Ring",
        description: "An exquisite 8.88 carat Colombian emerald centerpiece flanked by trapezoid diamonds. A true masterpiece of haute joaillerie."
      },
      {
        name: "Earrings with Natural Emeralds and Marquise Diamonds",
        description: "Earrings featuring natural certified emeralds, octagonal step cut, transparent, vivid green weight 3.62 ct and 3.41 ct. The GIA has reported for minor clarity enhanced (F2). Set in 18K yellow and white gold, surrounded by marquise brilliant cut diamonds that enhance brilliance in a sophisticated design."
      },
      {
        name: "GIA Certified Heart Drop Diamond Earrings",
        description: "GIA Certified Drop earrings featuring graduated heart shaped diamonds with round brilliant connectors, totaling approx. 4.80 ct (main hearts 1.20 ct each), VS clarity and F/G color. Set in 18K white gold, with refined proportions and a harmonious size progression."
      },
      {
        name: "Floral Earrings with Ceylon Sapphires and Diamonds",
        description: "Floral motif earrings featuring natural Ceylon (Sri Lanka) sapphires, oval cut, with a beautiful light blue color, totaling approx. 2.40 Ct. The sapphires are accented by Round brilliant cut diamonds totaling approx. 0.60 Ct, G color and VS clarity. The earrings are set in solid 14K white gold, with a refined, elegant and luminous design."
      },
      {
        name: "4.77Ct Green Emerald Ring",
        description: "Ring featuring an emerald-cut natural green emerald of 4.77Ct, GRS-certified. The center stone is set in a yellow gold bezel setting, surrounded by a halo of brilliant-cut diamonds that enhance the beauty of the emerald."
      },
      {
        name: "8.13Ct Emerald Cut Diamond Ring",
        description: "Stunning ring features a captivating 8.13ct emerald-cut diamond, graded E VS1 and GIA-certified. Set in platinum, the center diamond is elegantly accented by trapezoid-cut side stones, creating a timeless and refined design that exudes brilliance."
      },
      {
        name: "8.88Ct Green Emerald Ring with Trapezoid Diamonds",
        description: "Introducing our exquisite 8.88 carat weight natural Green Emerald Ring, featuring step-cut trapezoid diamond side stones. The centerpiece is a captivating 8.88ct natural emerald, meticulously set in 18K white and yellow gold."
      },
      {
        name: "Tahitian Pearls Necklace",
        description: "Elegant Tahitian pearl necklace featuring anthracite-grey overtones, distinguished by an intense and sophisticated luster. The necklace has a classic and harmonious design, making it perfect for any occasion. Crafted with 45 Tahitian pearls measuring approximately 8/10 mm in diameter. Length of about 45 cm with closure in 18K white gold."
      },
      {
        name: "Riviera Diamond Necklace",
        description: "Riviera-style diamond necklace, measuring 43.20 cm in length, set with 119 graduated round brilliant cut diamonds mounted in four prong settings, crafted in 18K white gold. The center stone weighs 2.00 ct, and the two adjacent stones weigh 1.40Ct each. The diamonds are graded F/G color and VS-SI1 clarity. Total estimated weight: 20.50Ct."
      }
    ]
  }
};

export default function ShopPage() {
  const [language, setLanguage] = useState<"it" | "en">("it");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    product: "",
    privacy: false
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const toggleLanguage = () => {
    setLanguage(language === "it" ? "en" : "it");
  };

  const products = [
    { id: 3, images: [ring3.src] },
    { id: 4, images: [earrings1a.src, earrings1b.src, earrings1c.src, earrings1d.src] },
    { id: 5, images: [earrings2a.src, earrings2b.src, earrings2c.src] },
    { id: 6, images: [earrings3b.src, earrings3c.src, earrings3d.src] },
    { id: 7, images: [newRing1a.src, newRing1b.src, newRing1c.src, newRing1d.src] },
    { id: 8, images: [newRing2a.src, newRing2b.src, newRing2c.src] },
    { id: 9, images: [newRing3a.src, newRing3b.src, newRing3c.src] },
    { id: 10, images: [newNecklace1a.src, newNecklace1b.src, newNecklace1c.src] },
    { id: 11, images: [newNecklace2a.src, newNecklace2b.src, newNecklace2c.src] },
  ];

  // Preload all product images on mount to warm browser and CDN cache
  const preloadedRef = useRef(false);
  useEffect(() => {
    if (preloadedRef.current) return;
    preloadedRef.current = true;
    products.forEach((product) => {
      product.images.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextImage = (productId: number, totalImages: number) => {    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (productId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const getCurrentImage = (productId: number, images: string[]) => {
    return images[currentImageIndex[productId] || 0];
  };

  const handleInquire = (productName: string) => {
    setSelectedProduct(productName);
    setFormData({ ...formData, product: productName });
    setStatus({ type: "idle", message: "" });
    setIsModalOpen(true);
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
        body: JSON.stringify({
          ...formData,
          message: `${formData.message}\n\nProdotto richiesto: ${formData.product}`
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: language === "it" 
            ? "Richiesta inviata con successo! Ti contatteremo presto." 
            : "Inquiry sent successfully! We'll contact you soon."
        });
        setTimeout(() => {
          setIsModalOpen(false);
          setFormData({ name: "", email: "", phone: "", message: "", product: "", privacy: false });
          setStatus({ type: "idle", message: "" });
        }, 2000);
      } else {
        setStatus({
          type: "error",
          message: language === "it"
            ? "Errore nell'invio della richiesta. Riprova."
            : "Error sending inquiry. Please try again."
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: language === "it"
          ? "Errore nell'invio della richiesta. Riprova."
          : "Error sending inquiry. Please try again."
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    });
  };

  return (
    <>
      <div className={styles.page}>
        <button className={styles.languageToggle} onClick={toggleLanguage}>
          {language === "it" ? " EN" : " IT"}
        </button>
        <h1 className={styles.title}>{translations[language].title}</h1>
        <p className={styles.subtitle}>{translations[language].subtitle}</p>

        <div className={styles.productsContainer}>
          {products.map((product, index) => (
            <div key={product.id} className={`${styles.productRow} ${index % 2 === 1 ? styles.reverse : ''}`}>
              <div className={styles.productImageWrapper}>
                <div className={styles.imageGallery}>
                  <img 
                    src={getCurrentImage(product.id, product.images)} 
                    alt={translations[language].products[index].name} 
                    className={styles.productImage} 
                  />
                  {product.images.length > 1 && (
                    <>
                      <button 
                        className={`${styles.galleryButton} ${styles.prevButton}`}
                        onClick={() => prevImage(product.id, product.images.length)}
                        aria-label="Previous image"
                      >
                        ‹
                      </button>
                      <button 
                        className={`${styles.galleryButton} ${styles.nextButton}`}
                        onClick={() => nextImage(product.id, product.images.length)}
                        aria-label="Next image"
                      >
                        ›
                      </button>
                      <div className={styles.imageDots}>
                        {product.images.map((_, imgIndex) => (
                          <span 
                            key={imgIndex}
                            className={`${styles.dot} ${(currentImageIndex[product.id] || 0) === imgIndex ? styles.activeDot : ''}`}
                            onClick={() => setCurrentImageIndex(prev => ({ ...prev, [product.id]: imgIndex }))}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{translations[language].products[index].name}</h3>
                <p className={styles.productDescription}>{translations[language].products[index].description}</p>
                <button 
                  className={styles.inquireButton}
                  onClick={() => handleInquire(translations[language].products[index].name)}
                >
                  {translations[language].inquireNow}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.comingSoonSection}>
          <h3>{translations[language].moreComingSoon}</h3>
          <p>{translations[language].moreDescription}</p>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <h2>{translations[language].modalTitle}</h2>
            <p className={styles.modalSubtitle}>
              {translations[language].modalSubtitle}{" "}
              <a href="tel:+390669924965">+39 06 69924965</a>{" "}
              {translations[language].modalSubtitle2}
            </p>
            {status.type !== "idle" && (
              <div className={`${styles.statusMessage} ${styles[status.type]}`}>
                {status.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className={styles.modalForm}>
              <div className={styles.formRow}>
                <label htmlFor="name">{translations[language].fullName}<span className={styles.required}>*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={styles.formRow}>
                <label htmlFor="email">Email<span className={styles.required}>*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={styles.formRow}>
                <label htmlFor="phone">{translations[language].phone}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formRow}>
                <label htmlFor="message">{translations[language].messageLabel}<span className={styles.required}>*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.privacyGroup}>
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="privacy">
                  {translations[language].privacyText}{" "}
                  <a href="/privacy">{translations[language].privacyLink}</a>{" "}
                  {translations[language].privacyText2}
                </label>
              </div>
              
              <button type="submit" className={styles.submitButton} disabled={status.type === "loading" || !formData.privacy}>
                {status.type === "loading" 
                  ? (language === "it" ? "Invio in corso..." : "Sending...")
                  : translations[language].sendInquiry
                }
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
