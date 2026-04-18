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

// Anelli - ETBR DIAMONDS BAGUETTE CUT
import etbrBaguette1 from "../../../../assets/Anelli/ETBR DIAMONDS BAGUETTE CUT Montatura Battuta/a.jpg";
import etbrBaguette2 from "../../../../assets/Anelli/ETBR DIAMONDS BAGUETTE CUT Montatura Battuta/b.png";
import etbrBaguette3 from "../../../../assets/Anelli/ETBR DIAMONDS BAGUETTE CUT Montatura Battuta/c.png";
import etbrBaguette4 from "../../../../assets/Anelli/ETBR DIAMONDS BAGUETTE CUT Montatura Battuta/d.png";

// Anelli - ETBR FY DIAMONDS CUSHION CUT & BAGUETTE
import etbrYellow1 from "../../../../assets/Anelli/ETBR FY DIAMONDS CUSHION CUT & BAGUETTE/a.jpg";
import etbrYellow2 from "../../../../assets/Anelli/ETBR FY DIAMONDS CUSHION CUT & BAGUETTE/b.jpg";
import etbrYellow3 from "../../../../assets/Anelli/ETBR FY DIAMONDS CUSHION CUT & BAGUETTE/c.jpg";
import etbrYellow4 from "../../../../assets/Anelli/ETBR FY DIAMONDS CUSHION CUT & BAGUETTE/d.png";

// Anelli - ETBR GREEN EMERALD
import etbrGreenEm1 from "../../../../assets/Anelli/ETBR GREEN EMERALD/a.png";
import etbrGreenEm2 from "../../../../assets/Anelli/ETBR GREEN EMERALD/b.png";
import etbrGreenEm3 from "../../../../assets/Anelli/ETBR GREEN EMERALD/d.png";

// Anelli - ETBR GREEN EMERALD Oval cut and Diamonds
import etbrOvalEm1 from "../../../../assets/Anelli/ETBR GREEN EMERALD Oval cut and Diamonds/A.png";
import etbrOvalEm2 from "../../../../assets/Anelli/ETBR GREEN EMERALD Oval cut and Diamonds/B.png";
import etbrOvalEm3 from "../../../../assets/Anelli/ETBR GREEN EMERALD Oval cut and Diamonds/C.png";
import etbrOvalEm4 from "../../../../assets/Anelli/ETBR GREEN EMERALD Oval cut and Diamonds/D.png";

// Anelli - ETBR RBC Diamonds
import etbrRBC1 from "../../../../assets/Anelli/ETBR RBC Diamonds/a.png";
import etbrRBC2 from "../../../../assets/Anelli/ETBR RBC Diamonds/b.png";
import etbrRBC3 from "../../../../assets/Anelli/ETBR RBC Diamonds/c.png";

// Anelli - ETBR RUBY EMERALD CUT
import etbrRuby1 from "../../../../assets/Anelli/ETBR RUBY EMERALD CUT/a.png";
import etbrRuby2 from "../../../../assets/Anelli/ETBR RUBY EMERALD CUT/b.png";
import etbrRuby3 from "../../../../assets/Anelli/ETBR RUBY EMERALD CUT/c.png";
import etbrRuby4 from "../../../../assets/Anelli/ETBR RUBY EMERALD CUT/d.png";

const translations = {
  it: {
    title: "Anelli - De Criso Jewelry",
    subtitle: "Esplora la nostra collezione esclusiva di anelli di alta gioielleria",
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
        name: "Anello Smeraldo Trapezoidale Verde",
        description: "Anello con fanstastico smeraldo naturale da 4.77 Ct. certificato GRS montato in oro giallo 18K misura 7 US / 54 EU. Un vero capolavoro di alta gioielleria."
      },
      {
        name: "Anello Con Diamante taglio smeraldo certificato GIA 8.13 Ct.",
        description: "Straordinario anello con diamante naturale da 8.13Ct. taglio smeraldo, certificato GIA, classificato per colore e VS1 per purezza. Montato in platino, il diamante centrale è inpreziosito da due diamanti latrerali taglio trapezioidale creando un desiign senza tempo e raffinato e che emana brillantezza da ogni angolazione. L'anello misura 6 US / 52 EU "
      },
      {
        name: "Anello con Smeraldo Naturale da 8.80 Ct e Diamanti laterali in oro bianco e giallo 18K",
        description: "Raffinato anello co meraviglioso Smeraldo naturale da 8.80Ct. di colore verde intenso. La pietra centrale è sapientemente incastonata in una montatura in oro 18K bianco e giallo, che ne esalta l'eleganza e il carattere distintivo. Ai lati sono posizionati due diamanti naturali taglio trapezoidale che donano ulteriore brillantezza e un tocco di sofisticata modernità. Un gioiello esclusivo che unisce fascino senza tempo e design ricercato, perfetto per chi desidera distinguersi con eleganza.<br/>Misura anello: US 7.5 – EU 55"
      },      {
        name: "3.40Ct Anello a Fascia in Oro Bianco 18K con Diamanti Taglio Baguette",
        description: "Elegante anello a fascia, realizzato in oro bianco 18K. Questo splendido anello è realizzato con 34 diamanti taglio baguette da 0.10Ct. ciascuna, accuratamente selezionati per garantire uniformità e brillantezza, per un totale di 3.40 Ct. di caratura totale. Le pietre, di colore F e purezza VS, sono incastonate con precisione in una montatura battuta e liscia per creare un effetto luminoso e con le sue linee geometriche essenziali, offre un carattere moderno e minimale.<br/>La misura dell'anello è US 7 / EU 54"
      },
      {
        name: "Anello a Fascia In Oro Bianco 18K Con 6.00Ct. Diamanti Gialli Intenso a Cuscino e 2.40Ct. Diamanti Baguette",
        description: "Straordinario anello a fascia in oro bianco 18K impreziosito da 24 diamanti Fancy Intense Yellow taglio cuscino. Ciascun diamante ha un peso di circa 0,25 Ct, per un totale di circa 6,00 Ct di diamanti Fancy Intense Yellow. A incorniciare la fascia centrale di diamanti gialli sono presenti altri 48 diamanti taglio baguette (colore G, purezza VS), ciascuno di circa 0,05 Ct, per un totale di 2,40 Ct, che sono sapientemente disposti sopra e sotto i diamanti centrali Fancy Intense Yellow, creando un raffinato gioco di luce e contrasto. Un gioiello straordinario, perfetto sia per l'uso quotidiano che per occasioni speciali, capace di unire eleganza senza tempo e brillantezza contemporanea.<br/>La misura dell’anello è 7.5 US / 55 EU."
      },
      {
        name: "Anello a Fascia Con 9.20 Ct di Smeraldi Vivid Green Taglio Smeraldo Montati In Oro Bianco 18K",
        description: "Elegante anello a fascia realizzato in oro bianco 18K, impreziosito da 23 smeraldi naturali taglio smeraldo dal colore verde intenso e vivido. Ogni pietra, dal peso di circa 0,40 Ct, è stata accuratamente selezionata per garantire uniformità di proporzioni e tonalità, creando un effetto continuo e armonioso per un totale di circa 9,20 carati. La struttura avvolgente esalta la brillantezza delle gemme, rendendo questo anello un gioiello raffinato e di forte presenza.<br/>Misura 7 US / 54 EU."
      },
      {
        name: "Anello a Fascia con 4.00 Ct di Smeraldi Ovali Vivid Green e 1.10 Ct di brillanti in oro bianco 18K",
        description: "Elegante anello a fascia in oro bianco 18K, caratterizzato da una raffinata sequenza di 10 smeraldi taglio ovale dal colore verde vivido, ciascuno dal peso di 0.40 Ct per un totale di 4.00 Ct. Tra ogni smeraldo, sono posizionate 10 coppie di diamanti naturali taglio brillante (20 pietre totali, colore G e purezza VS), da 0.05 Ct ciascuno per un totale di 1.10 Ct, che donano luce e brillantezza all'intero gioiello. La composizione crea un equilibrio armonioso tra il verde profondo degli smeraldi e lo scintillio dei diamanti.<br/>Misura anello: 6 US / 52 EU."
      },
      {
        name: "Anello Eternity con 3.04 Ct Di Diamanti Naturali Taglio Brillante F Colore e VS Purezza Montato In Oro Bianco 18K",
        description: "Anello a fascia in oro bianco 18K impreziosito da 19 diamanti naturali taglio brillante, ciascuno di circa 0,16 Ct, per un totale di circa 3,04 Carati. I diamanti, di colore F e purezza VS, sono selezionati per la loro elevata qualità e non presentano inclusioni visibili ad occhio nudo. Perfettamente incastonati per massimizzare la riflessione della luce, esaltano tutta la brillantezza di questo anello senza tempo, ideale da indossare ogni giorno con naturale eleganza.<br/>Misura 6 US / 53 EU."
      },
      {
        name: "Anello Eternity Con 6.89 Ct Di Rubini Naturali Taglio Smeraldo Montati in Oro Bianco 18K",
        description: "Anello a fascia in oro bianco 18K impreziosito da 23 rubini naturali taglio smeraldo dal colore rosso vivido e intenso. Ogni pietra, dal peso di circa 0,29 Ct, è stata selezionata per garantire armonia e uniformità nel colore e nella dimensione, per un totale di circa 6,89 Carati. I rubini sono incastonati con griffe ad artigli estremamente raffinate, che esaltano la luce e la profondità delle gemme conferendo all'anello un aspetto sofisticato e di grande impatto.<br/>L' anello misura 7 US / 54 EU."
      },    ]
  },
  en: {
    title: "Rings - De Criso Jewelry",
    subtitle: "Explore our exclusive collection of fine jewelry rings",
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
        name: "Green Emerald Bezel Set Ring",
        description: "Featuring an emerald cut natural green emerald of 4.77Ct, GRS-certified. The stone is embraced by a bezel set, crafted in 18k yellow gold. Measure 7 US / 54 EU. "
      },
      {
        name: "8.13Ct Three Stone Emerald Cut Diamond Ring",
        description: "Stunning ring features a captivating 8.13ct emerald cut diamond, graded E VS1 and GIA-certified. Set in platinum, the center diamond is elegantly accented by trapezoid-cut side stones, creating a timeless and refined design that exudes brilliance from every angle."
      },
      {
        name: "8.80Ct Three Stone Natural Green Emerald Ring set in 18K white and yellow gold",
        description: "Exquisite 8.80Ct. weight natural Green Emerald Ring, featuring step cut trapezoid diamond side stones. The centerpiece is a captivating 8.80Ct natural emerald, meticulously set in 18K white and yellow gold. This stunning ring radiates sophistication and timeless charm.<br/>The Ring Measure actually 7.5 US / 55 EU"
      },
      {
        name: "3.40Ct. Eternity Band Ring with Baguette Cut Diamonds Set in 18K White Gold",
        description: "This fantastic eternity band ring is crafted in 18K white gold, it features a refined contemporary design. The band ring is set with 34 baguette cut diamonds of approx. 0.10Ct each, for a total carat weight of 3.40, carefully selected for their consistency and radiance. Each stone, graded F color and VS clarity, is precisely set into a bezel style mounting to create a seamless, continuous line of light. The clean, geometric lines of the baguette cut give the ring a distinctly modern and minimalistic aesthetic.<br/>The ring size is 7 US / 54 EU"
      },
      {
        name: "6.00Ct Fancy Intense Yellow Cushion Cut Eternity Band Ring Set In 18K White Gold",
        description: "Exquisite 18K white gold eternity band ring features 24 Fancy Intense Yellow Cushion Cut diamonds, each approximately 0.25 Ct, for an estimated total of 6.00 Ct of Fancy Intense Yellow diamonds. Enhancing the central row, 48 Baguette Cut diamonds (G color, VS clarity), each approximately 0.05 Ct, for a total of 2.40 Ct, are meticulously set above and below the Intense yellow cushions cut central diamonds, creating a refined interplay of light and contrast. A truly stunning piece, perfect for everyday wear as well as special occasions, combining timeless elegance with modern brilliance.<br/>The Ring size is 7.5 US / 55 EU."
      },
      {
        name: "9.20 Ct Natural Emerald Vivid Green Eternity Band Ring In 18K White Gold",
        description: "Refined full eternity band crafted in 18K white gold, set with 23 natural emerald cut emeralds displaying a vivid, intense green color. Each stone weighs approximately 0.40 Ct and has been carefully selected to ensure perfect consistency in size and color, resulting in a harmonious and continuous look totaling about 9.20 Carats. The design enhances the brilliance of the gemstones, making this ring a refined and striking piece.<br/>Ring size 7 US / 54 EU."
      },
      {
        name: "4.00 Ct Oval Green Emerald Eternity Band Ring And 1.10 Ct Round Brilliant Cut Natural Diamonds Set in 18K White Gold",
        description: "Exquisite 18K white gold eternity band ring featuring a refined sequence of 10 oval cut emeralds with a rich, vivid green color, each weighing 0.40 Ct for a total of 4.00 Ct. Set between each emeralds are 10 pairs of natural brilliant cut diamonds (20 stones in total, G color and VS clarity), each weighing 0.05 Ct for a total of 1.10 Ct, enhancing the ring with exceptional sparkle and brilliance. The design creates a perfect balance between the deep green of the emeralds and the radiance of the diamonds.<br/>Ring size: 6 US / 52 EU."
      },
      {
        name: "3.04 Ct F Color and VS Clarity Natural Round Brilliant Cut Eternity Band Ring Set In 18K White Gold",
        description: "Timeless full eternity band ring crafted in 18K white gold, set with 19 natural brilliant cut diamonds, each weighing approximately 0.16 Ct, for a total of about 3.04 Carats. The diamonds are graded F color and VS clarity, with no visible inclusions to the naked eye. Expertly set to maximize light reflection, they enhance the overall brilliance of this piece, making it a refined and versatile ring perfect for everyday wear.<br/>Ring size 6 US / 53 EU."
      },
      {
        name: "6.89 Ct Natural Ruby Eternity Band Ring Set In 18K White Gold",
        description: "Timeless full Eternity Band Ring crafted in 18K white gold, set with 23 natural emerald shaped rubies displaying a vivid, intense red color. Each stone weighs approximately 0.29 Ct and has been carefully matched for consistency, totaling about 6.89 Carats. The rubies are secured with exceptionally refined claw prongs, enhancing light performance and showcasing the depth of the gemstones, giving the ring a sophisticated and striking presence.<br/>Ring size 7 US / 54 EU."
      },
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
    { id: 7, images: [newRing1a.src, newRing1b.src, newRing1c.src, newRing1d.src] },
    { id: 8, images: [newRing2a.src, newRing2b.src, newRing2c.src] },
    { id: 9, images: [newRing3a.src, newRing3b.src, newRing3c.src] },
    { id: 10, images: [etbrBaguette1.src, etbrBaguette2.src, etbrBaguette3.src, etbrBaguette4.src] },
    { id: 11, images: [etbrYellow1.src, etbrYellow2.src, etbrYellow3.src, etbrYellow4.src] },
    { id: 12, images: [etbrGreenEm1.src, etbrGreenEm2.src, etbrGreenEm3.src] },
    { id: 13, images: [etbrOvalEm1.src, etbrOvalEm2.src, etbrOvalEm3.src, etbrOvalEm4.src] },
    { id: 14, images: [etbrRBC1.src, etbrRBC2.src, etbrRBC3.src] },
    { id: 15, images: [etbrRuby1.src, etbrRuby2.src, etbrRuby3.src, etbrRuby4.src] },
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
                <p className={styles.productDescription} dangerouslySetInnerHTML={{ __html: translations[language].products[index].description }} />
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
