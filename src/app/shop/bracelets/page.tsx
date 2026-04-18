"use client";
import { useState } from "react";
import styles from "../page.module.css";

// EMC Diamonds Tennis Bracelet
import bracelet1a from "../../../../assets/EMC Diamonds Tennis Bracelet/a.png";
import bracelet1b from "../../../../assets/EMC Diamonds Tennis Bracelet/b.png";
import bracelet1c from "../../../../assets/EMC Diamonds Tennis Bracelet/c.png";

// RBC Diamonds Tennis Bracelet
import bracelet2a from "../../../../assets/RBC Diamonds Tennis Bracelet/a.png";
import bracelet2b from "../../../../assets/RBC Diamonds Tennis Bracelet/b.jpg";
import bracelet2c from "../../../../assets/RBC Diamonds Tennis Bracelet/c.png";

// Green EM EMC Bezel Set Bracelet 18KYG
import bracelet3a from "../../../../assets/Green EM EMC Bezel Set Bracelet 18KYG/a.png";
import bracelet3b from "../../../../assets/Green EM EMC Bezel Set Bracelet 18KYG/b.png";
import bracelet3c from "../../../../assets/Green EM EMC Bezel Set Bracelet 18KYG/image c2.png";

const translations = {
  it: {
    title: "Bracciali - De Criso Jewelry",
    subtitle: "Scopri la nostra collezione esclusiva di bracciali di alta gioielleria",
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
    moreDescription: "La nostra collezione si arricchisce continuamente.<br/>Torna presto per scoprire nuovi pezzi unici di alta gioielleria.",
    products: [
      {
        name: "Bracciale Tennis con Diamanti Taglio Smeraldo",
        description: "Bracciale tennis in oro bianco 18K, elegante e senza tempo.Il bracciale composto da 63 diamanti naturali, da circa 4 punti (0.04 Ct.) cadauno, con colore G e purezza VVS–VS, con una straordinaria luminosità. Per una caratura totale di circa 2.54 carati. Il bracciale misura in larghezza circa 2.3 mm, ed in lunghezza circa 17.5 cm, mentre il peso complessivo è di circa 8.00 grammi, a testimonianza della qualità dei materiali e della solidità della struttura. E’ un bracciale iconico, simbolo di classe e raffinatezza, ideale per impreziosire ogni look con un tocco di luce."
      },
      {
        name: "Bracciale Tennis con Diamanti Taglio Brillante",
        description: "Bracciale tennis classico, luminoso e raffinato montato in oro bianco 18k con 50 diamanti taglio brillante (G – Color, VS – Clarity). Ogni diamante pesa circa 0,10Ct., per un totale di circa 5,00Ct. per una lunghezza totale di 17.50cm, adatto a polsi con circonferenza 16/17cm."
      },
      {
        name: "Bracciale con Smeraldi Verdi a Montatura Battuta",
        description: "15.86 Ct Bracciale Tennis Con Smeraldi Naturali montato in oro giallo 18KBracciale tennis in oro giallo 18K, con 28 smeraldi naturali dal colore verde intenso ciascuno con peso di 0.55ct circa per un totale di 15.86Ct. Gli smeraldi hanno il classico taglio ottagonale sfaccettato e sono singolarmente incastonate con montatura a castone battuta. Il design lineare e raffinato è un equilibrio perfetto tra eleganza classica e modernità, un gioiello ideale sia per un uso quotidiano di lusso sia per occasioni speciali. La chiusura integrata, discreta e sicura, completa un pezzo di alta gioielleria pensato per durare nel tempo. Il bracciale pesa 14.10Gr e misura 205,1mm in lunghezza e 3.80mm in larghezza"
      }
    ]
  },
  en: {
    title: "Bracelets - De Criso Jewelry",
    subtitle: "Discover our exclusive collection of fine jewelry bracelets",
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
    moreDescription: "Our collection is constantly growing.<br/>Check back soon to discover new unique pieces of haute joaillerie.",
    products: [
      {
        name: "Emerald Cut Diamond Tennis Bracelet",
        description: "Elegant tennis bracelet crafted in 18K white gold, embodying timeless sophistication and fine craftsmanshipThe bracelet features 63 natural diamonds, each with an approximate weight of 0.04 carats, graded G color and VVS–VS clarity, ensuring outstanding quality and exceptional sparkle. The total diamond weight is approximately 2.54 carats.Its slim profile, with a width of approximately 2.3 mm, makes it a versatile and elegant piece suitable for any occasion. The bracelet measures approximately 17.5 cm in length and has a total weight of 8.00 grams, reflecting both durability and premium craftsmanship. A timeless piece of jewelry, designed to add a touch of brilliance and sophistication to any style."
      },
      {
        name: "Round Brilliant Cut Diamond Tennis Bracelet",
        description: "Classic Bright and Elegant Tennis Bracelet Set in 18k White Gold featuring 50 Round Brilliant Cut Diamonds (G color, VS clarity). Estimated weight: 0.10 Ct. per stone, for a total weight of 5.00 Ct. The Length is approx. 17.50 cm (6.7 inches), fits wrists of 16/17cm circumference."
      },
      {
        name: "Green Emerald Bezel Set Bracelet in 18K Yellow Gold",
        description: "15.86Ct Natural Green Emerald Tennis bracelet crafted in 18K Yellow GoldEach 28 rectangular faceted vivid green emeralds gemstones are individually secured in a bezel setting, where the gold gently surrounds the stone’s edges, enhancing its brilliance while providing excellent protection. The weight of emerald is about 15.86Ct. in total as per 0.55Ct each stone approx. The clean, refined design offers a perfect balance between timeless sophistication and contemporary style, making it suitable for both everyday luxury and special occasions. A seamless and secure clasp completes this fine piece of jewelry, designed to be worn and cherished for years to come. The Bracelet weighs 14.10gr. (0.50 oz.) in total and measures 3.80mm (0.15 inches) for the width and 205,1mm (8.08 inches) for the length."
      }
    ]
  }
};

export default function BraceletsPage() {
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
    { id: 1, images: [bracelet1a.src, bracelet1b.src, bracelet1c.src] },
    { id: 2, images: [bracelet2a.src, bracelet2b.src, bracelet2c.src] },
    { id: 3, images: [bracelet3a.src, bracelet3b.src, bracelet3c.src] },
  ];

  const nextImage = (productId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
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
          <p dangerouslySetInnerHTML={{ __html: translations[language].moreDescription }} />
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
                <label htmlFor="message">{translations[language].messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
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
              
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={status.type === "loading" || !formData.privacy}
              >
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
