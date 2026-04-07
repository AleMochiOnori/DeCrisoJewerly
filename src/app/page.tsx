import styles from "./page.module.css";
import MainLogo from "../../assets/logo nero.png";
import jewerlyBackgoround from "../../assets/Rings.png"

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <img className={styles.MainLogo} src={MainLogo.src} alt="" />
        <img className={styles.rings} src={jewerlyBackgoround.src} alt="" />
      </div>
    </div>
  );
}
