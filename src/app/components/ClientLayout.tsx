"use client";
import { LanguageProvider } from "../context/LanguageContext";
import Sidebar from "./Sidebar";
import ConditionalFooter from "./ConditionalFooter";
import styles from "../layout.module.css";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className={styles.container}>
        <div className={styles.content}>
          <aside className={styles.sidebar}>
            <Sidebar />
          </aside>
          <main className={styles.main}>{children}</main>
        </div>
        <ConditionalFooter />
      </div>
    </LanguageProvider>
  );
}
