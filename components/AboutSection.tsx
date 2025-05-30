'use client';

import React, { useEffect, forwardRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animation";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useTranslation } from "next-i18next";

const MotionH2 = motion(forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>((props, ref) => (
  <h2 ref={ref} {...props} />
)));

const MotionDiv = motion(forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <div ref={ref} {...props} />
)));

const MotionP = motion(forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>((props, ref) => (
  <p ref={ref} {...props} />
)));

export function AboutSection() {
  const { t } = useTranslation("common");

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    slides: { perView: 1.5, spacing: 12 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2.5, spacing: 20 } },
      "(min-width: 1024px)": { slides: { perView: 4, spacing: 30 } },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 1000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/background-about-section.jpg" alt="Background" fill className="object-cover opacity-20" />
        <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-black/80 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-t from-black/80 to-transparent z-10" />
      </div>

      <div className="relative z-20 w-full max-w-6xl mx-auto">
        <MotionH2 className="text-5xl font-extrabold text-orange-400 tracking-widest mb-4 uppercase" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={fadeInUp}>
          {t("about.title")}
        </MotionH2>
        <MotionDiv className="w-20 h-1 bg-orange-500 mx-auto mb-8" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={fadeInUp} />
        <div className="text-gray-100 space-y-6 text-lg px-2">
          {["paragraph1", "paragraph2", "paragraph3"].map((key) => (
            <MotionP key={key} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={fadeInUp}>
              {t(`about.${key}`)}
            </MotionP>
          ))}
        </div>

        <div ref={sliderRef} className="keen-slider mt-12">
          {["ps5.png", "ps4.png", "xbox-series.png", "steam.png"].map((logo, i) => (
            <div key={i} className="keen-slider__slide flex justify-center items-center">
              <Image src={`/platforms/${logo}`} alt={logo} width={logo === "steam.png" ? 128 : 160} height={logo === "steam.png" ? 128 : 160} className="object-contain w-32 sm:w-40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
