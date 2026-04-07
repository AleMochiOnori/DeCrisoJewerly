"use client";
import { useState } from "react";
import styles from "../page.module.css";

// NewImages - Necklace Tahitian Pearls
import necklace1a from "../../../../assets/NewImages/Necklace Tahitian Pearls/a.png";
import necklace1b from "../../../../assets/NewImages/Necklace Tahitian Pearls/b.png";
import necklace1c from "../../../../assets/NewImages/Necklace Tahitian Pearls/c.png";

// NewImages - Necklace Tennis Riviera
import necklace2a from "../../../../assets/NewImages/Necklace Tennis Riviera/riviera a.jpg";
import necklace2b from "../../../../assets/NewImages/Necklace Tennis Riviera/riviera b.png";
import necklace2c from "../../../../assets/NewImages/Necklace Tennis Riviera/riviera c.png";

const translations = {
  it: {
    title: "Collane - De Criso Jewelry",
    subtitle: "Scopri la nostra collezione esclusiva di collane di alta gioielleria",
    inquireNow: "Compra ora",
    inquireAbout: "Richiedi Info su",
    name: "Nome",
    phone: "Telefono",
    sendInquiry: "Invia Richiesta",
    products: [
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
    title: "Necklaces - De Criso Jewelry",
    subtitle: "Discover our exclusive collection of fine jewelry necklaces",
    inquireNow: "Buy Now",
    inquireAbout: "Inquire About",
    name: "Name",
    phone: "Phone",
    sendInquiry: "Send Inquiry",
    products: [
      {
        name: "Tahitian Pearl Necklace",
        description: "Elegant Tahitian pearl necklace with charcoal gray reflections, characterized by an intense and sophisticated luster. Classic and harmonious design perfect for any occasion. Made with 45 Tahitian pearls with a diameter of approximately 8/10 mm. Length of approximately 45 cm with an 18K white gold clasp."
      },
      {
        name: "Diamond Riviera Necklace",
        description: "Riviera-style diamond necklace, 43.20 cm in length with 119 graduated round brilliant-cut diamonds set in four-prong settings, mounted in 18K white gold. The center stone measures 2.00Ct and the two side stones are 1.40Ct each. The diamonds have F/G color and VS-SI1 clarity. Estimated total weight: 20.50Ct."
      }
    ]
  }
};

export default function NecklacesPage() {
  const [language, setLanguage] = useState<"it" | "en">("it");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: ""
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const toggleLanguage = () => {
    setLanguage(language === "it" ? "en" : "it");
  };

  const products = [
    { id: 7, images: [necklace1a.src, necklace1b.src, necklace1c.src] },
    { id: 8, images: [necklace2a.src, necklace2b.src, necklace2c.src] },
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

  const openModal = (productName: string) => {
    setSelectedProduct(productName);
    setFormData({ ...formData, product: productName });
    setStatus({ type: "idle", message: "" });
    setIsModalOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          message: `Richiesta per prodotto: ${formData.product}`
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: language === "it"
            ? "Richiesta inviata con successo! Ti contatteremo presto."
            : "Inquiry sent successfully! We'll contact you soon.",
        });
        setTimeout(() => {
          setIsModalOpen(false);
          setFormData({ name: "", email: "", phone: "", product: "" });
          setStatus({ type: "idle", message: "" });
        }, 2000);
      } else {
        setStatus({
          type: "error",
          message: data.error || (language === "it"
            ? "Errore nell'invio della richiesta. Riprova."
            : "Error sending inquiry. Please try again."),
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: language === "it"
          ? "Errore nell'invio della richiesta. Riprova."
          : "Error sending inquiry. Please try again.",
      });
    }
  };

  const t = translations[language];

  return (
    <>
      <div className={styles.page}>
        <button className={styles.languageToggle} onClick={toggleLanguage}>
          {language === "it" ? " EN" : " IT"}
        </button>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.subtitle}>{t.subtitle}</p>

        <div className={styles.productsContainer}>
          {products.map((product, index) => (
            <div key={product.id} className={`${styles.productRow} ${index % 2 === 1 ? styles.reverse : ''}`}>
              <div className={styles.productImageWrapper}>
                <div className={styles.imageGallery}>
                  <img
                    src={product.images[currentImageIndex[product.id] || 0]}
                    alt={t.products[index].name}
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
                            className={`${styles.dot} ${
                              (currentImageIndex[product.id] || 0) === imgIndex
                                ? styles.activeDot
                                : ""
                            }`}
                            onClick={() => setCurrentImageIndex(prev => ({ ...prev, [product.id]: imgIndex }))}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{t.products[index].name}</h3>
                <p className={styles.productDescription}>{t.products[index].description}</p>
                <button
                  className={styles.inquireButton}
                  onClick={() => openModal(t.products[index].name)}
                >
                  {t.inquireNow}
                </button>
              </div>
            </div>
          ))}
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
            <h2>{t.inquireAbout} {selectedProduct}</h2>
            {status.type !== "idle" && (
              <div className={`${styles.statusMessage} ${styles[status.type]}`}>
                {status.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className={styles.modalForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">{t.name} *</label>
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
              
              <div className={styles.formGroup}>
                <label htmlFor="phone">{t.phone}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <button type="submit" className={styles.submitButton} disabled={status.type === "loading"}>
                {status.type === "loading" 
                  ? (language === "it" ? "Invio in corso..." : "Sending...")
                  : t.sendInquiry
                }
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
