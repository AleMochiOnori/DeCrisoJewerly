import type { Metadata } from "next";
import { Libre_Baskerville, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import styles from "./layout.module.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "De Criso Jewelry",
  description: "De Criso Jewelry - Elegant handcrafted jewelry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreBaskerville.variable} ${sourceSerif4.variable}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <aside className={styles.sidebar}>
              <Sidebar />
            </aside>
            <main className={styles.main}>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
