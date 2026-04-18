"use client";
import { useState } from "react";
import styles from "../page.module.css";

// Earrings Green Em and Marq Diamonds
import earrings1a from "../../../../assets/Earrings Green Em and Marq Diamonds/a.png";
import earrings1b from "../../../../assets/Earrings Green Em and Marq Diamonds/b.jpg";
import earrings1c from "../../../../assets/Earrings Green Em and Marq Diamonds/c.png";
import earrings1d from "../../../../assets/Earrings Green Em and Marq Diamonds/IGIGreenEmerald d.jpeg";

// Orecchini 3 cuori Diamanti e oro giallo 18K
import earrings2a from "../../../../assets/Orecchini 3 cuori Diamanti e oro giallo 18K/a.png";
import earrings2b from "../../../../assets/Orecchini 3 cuori Diamanti e oro giallo 18K/b.png";
import earrings2c from "../../../../assets/Orecchini 3 cuori Diamanti e oro giallo 18K/c.png";

// Orecchini Flower 3 - a Fiore zaffiri e diamanti
import earrings3b from "../../../../assets/Orecchini Flower 3  - a Fiore zaffiri e diamanti/b.png";
import earrings3c from "../../../../assets/Orecchini Flower 3  - a Fiore zaffiri e diamanti/c.png";
import earrings3d from "../../../../assets/Orecchini Flower 3  - a Fiore zaffiri e diamanti/d.png";

// Orecchini Flower 2 - a Fiore con diamanti
import earrings4a from "../../../../assets/Orecchini Flower 2 - a Fiore con diamanti/a.png";
import earrings4b from "../../../../assets/Orecchini Flower 2 - a Fiore con diamanti/b.png";
import earrings4c from "../../../../assets/Orecchini Flower 2 - a Fiore con diamanti/c.png";

// A) Orecchini Flower 1 - a Fiore zaffiri Royal blue e diamanti
import earrings5a from "../../../../assets/Orecchini Flower 1 - a Fiore  zaffiri Royal blue e diamanti/a.png";
import earrings5b from "../../../../assets/Orecchini Flower 1 - a Fiore  zaffiri Royal blue e diamanti/b.png";
import earrings5c from "../../../../assets/Orecchini Flower 1 - a Fiore  zaffiri Royal blue e diamanti/c.png";

// 2 parte Orecchini con Zaffiri Blu e Diamanti in Oro Bianco 18K
import earrings6a from "../../../../assets/2 parte Orecchini con Zaffiri Blu e Diamanti in Oro Bianco 18K - Blue/d.png";
import earrings6b from "../../../../assets/2 parte Orecchini con Zaffiri Blu e Diamanti in Oro Bianco 18K - Blue/e.png";

const translations = {
  it: {
    title: "Orecchini - De Criso Jewelry",
    subtitle: "Scopri la nostra collezione esclusiva di orecchini di alta gioielleria",
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
        name: "Orecchini a Fiore con Diamanti",
        description: "Orecchini a motivo floreale con diamante centrale taglio Brillante di circa 0,70 Ct. ciascuno (tot. 1,40 Ct.), colore F e purezza VS, certificati GIA. Vi sono inoltre 8 diamanti taglio brillante di contorno per circa 1,20 Ct. totali, colore G e purezza VS. Gli orecchini sono realizzati con montatura in Platino, con un design classico ed elegante."
      },
      {
        name: "Orecchini a Fiore con Zaffiri Royal Blue e Diamanti",
        description: "Orecchini Made in Italy a motivo floreale con zaffiri naturali origine Ceylon, taglio ovale, colore deep blue (Royal Blue), per un totale di circa 3,20 ct. contornati da diamanti taglio brillante per circa 0,80 ct totali, purezza VS e colore G. Le pietre sono montate in oro bianco 18K."
      },
    ]
  },
  en: {
    title: "Earrings - De Criso Jewelry",
    subtitle: "Discover our exclusive collection of fine jewelry earrings",
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
        name: "Earrings with Natural Emeralds and Marquise Diamonds",
        description: "Earrings featuring natural certified emeralds, octagonal step cut, transparent, vivid green weight 3.62 ct and 3.41 ct. The GIA has reported for minor clarity enhanced (F2). Set in 18K yellow and white gold, surrounded by marquise brilliant cut diamonds that enhance brilliance in a sophisticated design."
      },
      {
        name: "GIA Certified Heart Drop Diamond Earrings",
        description: "GIA Certified Drop earrings featuring graduated heart shaped diamonds with round brilliant connectors, totaling approx. 4.80 ct (main hearts 1.20 ct each), VS clarity and F/G color. Set in 18K white gold, with refined proportions and a harmonious size progression."
      },
      {
        name: "Floral style Earrings with Ceylon Sapphires and Diamonds",
        description: "Floral motif earrings featuring natural Ceylon (Sri Lanka) sapphires, oval cut, with a beautiful light blue color, totaling approx. 2.40 Ct. The sapphires are accented by Round brilliant cut diamonds totaling approx. 0.60 Ct, G color and VS clarity. The earrings are set in solid 14K white gold, with a refined, elegant and luminous design."
      },
      {
        name: "Diamonds Floral Earrings",
        description: "GIA Certified Floral motif earrings featuring a central Round brilliant cut diamond of approx. 0.70 Ct. each (for a total weight of 1.40 C.t), F color and VS clarity. The main stones are surrounded by 8 Round brilliant cut diamonds totaling approx. 1.20 Ct, G color and VS clarity and set in Solid Platinum, with a timeless and elegant design."
      },
      {
        name: "Royal Blue Sapphire and Diamonds Floral Earrings",
        description: "Floral motif earrings featuring natural Ceylon sapphires, oval cut, deep blue (Royal Blue) color, totaling approx. 3.20 ct. surrounded by brilliant cut diamonds totaling approx. 0.80 ct, VS clarity and G color. The gems are set in 18K white gold. This piece was made in Italy."
      },
    ]
  }
};

export default function EarringsPage() {
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
    { id: 4, images: [earrings1a.src, earrings1b.src, earrings1c.src, earrings1d.src] },
    { id: 5, images: [earrings2a.src, earrings2b.src, earrings2c.src] },
    { id: 6, images: [earrings3b.src, earrings3c.src, earrings3d.src] },
    { id: 10, images: [earrings4a.src, earrings4b.src, earrings4c.src] },
    { id: 11, images: [earrings5a.src, earrings5b.src, earrings5c.src, earrings6a.src, earrings6b.src ]}
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
