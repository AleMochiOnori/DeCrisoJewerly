"use client";
import { useState } from "react";
import styles from "../page.module.css";

import ring1 from "../../../../assets/Jewels/Ring/Bubble Ring/BubbleRing1.jpeg";
import ring2 from "../../../../assets/Jewels/Ring/Classic Heart Pavè Ring/1.Vista Frontale.jpg";
import ring3 from "../../../../assets/Jewels/Ring/8.88 ct Green Emerald Ring with Trapezoid Diamonds/RI-MV27-EC_12-5-2048x2048.jpg";

// NewImages - 4.70ct Green Emerald Bezel Ring
import newRing1a from "../../../../assets/NewImages/4.70ct Green Emerald Bezel Ring/A    RI-ONE-019_1-3.jpg";
import newRing1b from "../../../../assets/NewImages/4.70ct Green Emerald Bezel Ring/B RI-ONE-019_2-1.jpg";
import newRing1c from "../../../../assets/NewImages/4.70ct Green Emerald Bezel Ring/C   RI-ONE-019_3-1-570x570.jpg";
import newRing1d from "../../../../assets/NewImages/4.70ct Green Emerald Bezel Ring/D   RI-ONE-019_4-1-570x570.png";

// NewImages - 6.00Ct Emerald Cut Side Stone Platinum Ring
import newRing2a from "../../../../assets/NewImages/6.00Ct Emerald Cut Side Stone Platinum Ring/RI-NY-021_1-2-2048x2048.jpg";
import newRing2b from "../../../../assets/NewImages/6.00Ct Emerald Cut Side Stone Platinum Ring/RI-NY-021_2-2-2048x2048.jpg";
import newRing2c from "../../../../assets/NewImages/6.00Ct Emerald Cut Side Stone Platinum Ring/RI-NY-021_3-2-2048x2048.jpg";

// NewImages - 8.80 ct Green Emerald Ring with Trapezoid Diamonds
import newRing3a from "../../../../assets/NewImages/8.80 ct Green Emerald Ring with Trapezoid Diamonds/A   RI-MV27-EC_12-5-2048x2048.jpg";
import newRing3b from "../../../../assets/NewImages/8.80 ct Green Emerald Ring with Trapezoid Diamonds/B   RI-MV27-EC_2-2-2048x2048.jpg";
import newRing3c from "../../../../assets/NewImages/8.80 ct Green Emerald Ring with Trapezoid Diamonds/C   RI-MV27-EC_3-2-2048x2048.jpg";

const translations = {
  it: {
    title: "Anelli - De Criso Jewelry",
    subtitle: "Esplora la nostra collezione esclusiva di anelli di alta gioielleria",
    inquireNow: "Compra ora",
    inquireAbout: "Richiedi Info su",
    name: "Nome",
    phone: "Telefono",
    sendInquiry: "Invia Richiesta",
    products: [
      {
        name: "Anello Smeraldo Trapezoidale Verde",
        description: "Un squisito smeraldo colombiano da 8,88 carati affiancato da diamanti trapezoidali. Un vero capolavoro di alta gioielleria."
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
      }
    ]
  },
  en: {
    title: "Rings - De Criso Jewelry",
    subtitle: "Explore our exclusive collection of fine jewelry rings",
    inquireNow: "Buy Now",
    inquireAbout: "Inquire About",
    name: "Name",
    phone: "Phone",
    sendInquiry: "Send Inquiry",
    products: [
      {
        name: "Green Emerald Trapezoid Ring",
        description: "An exquisite 8.88 carat Colombian emerald centerpiece flanked by trapezoid diamonds. A true masterpiece of haute joaillerie."
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
      }
    ]
  }
};

export default function RingsPage() {
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
    { id: 3, images: [ring3.src] },
    { id: 7, images: [newRing1a.src, newRing1b.src, newRing1c.src, newRing1d.src] },
    { id: 8, images: [newRing2a.src, newRing2b.src, newRing2c.src] },
    { id: 9, images: [newRing3a.src, newRing3b.src, newRing3c.src] },
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
          message: `Richiesta per prodotto: ${formData.product}`
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
          setFormData({ name: "", email: "", phone: "", product: "" });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
            <h2>{translations[language].inquireAbout} {selectedProduct}</h2>
            {status.type !== "idle" && (
              <div className={`${styles.statusMessage} ${styles[status.type]}`}>
                {status.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className={styles.modalForm}>
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
              
              <button type="submit" className={styles.submitButton} disabled={status.type === "loading"}>
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
