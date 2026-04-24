"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";

interface CarouselProps {
  images: { src: string; alt: string }[];
}


export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

  // Preload a window of 5 images ahead and 2 behind
  const preloadIndices = Array.from(new Set([
    (currentIndex - 2 + images.length) % images.length,
    (currentIndex - 1 + images.length) % images.length,
    (currentIndex + 1) % images.length,
    (currentIndex + 2) % images.length,
    (currentIndex + 3) % images.length,
    (currentIndex + 4) % images.length,
    (currentIndex + 5) % images.length,
  ])).filter(idx => idx !== currentIndex);

  // On mount: preload ALL images via native Image() to warm the browser and CDN cache
  const preloadedRef = useRef(false);
  useEffect(() => {
    if (preloadedRef.current) return;
    preloadedRef.current = true;
    images.forEach((image) => {
      const img = new window.Image();
      img.src = image.src;
    });
  }, [images]);

  const goToPrevious = () => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setDirection(null);
    }, 350);
    setTimeout(() => {
      setIsAnimating(false);
    }, 650);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setDirection(null);
    }, 350);
    setTimeout(() => {
      setIsAnimating(false);
    }, 650);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setDirection(index > currentIndex ? "left" : "right");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setDirection(null);
    }, 350);
    setTimeout(() => {
      setIsAnimating(false);
    }, 650);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.imageContainer}>
        {/* Preload window: 5 avanti e 2 indietro */}
        {preloadIndices.map((idx) => (
          <div
            key={`preload-${idx}`}
            aria-hidden="true"
            style={{ position: 'absolute', inset: 0, opacity: 0, pointerEvents: 'none' }}
          >
            <Image
              src={images[idx].src}
              alt=""
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
        <Image
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          priority
          className={`${styles.image} ${
            isAnimating && direction
              ? direction === "left"
                ? styles.slideOutLeft
                : styles.slideOutRight
              : styles.slideIn
          }`}
          style={{ objectFit: 'contain' }}
        />
        
        <button 
          className={`${styles.button} ${styles.prev}`}
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          ‹
        </button>
        
        <button 
          className={`${styles.button} ${styles.next}`}
          onClick={goToNext}
          aria-label="Next image"
        >
          ›
        </button>
      </div>
    </div>
  );
}
