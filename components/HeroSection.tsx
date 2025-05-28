'use client';

import React, { forwardRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "./ui/button";
import { fadeInUp } from "../utils/animation";
import { useTranslation } from "next-i18next";

const MotionP = motion(forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>((props, ref) => (
  <p ref={ref} {...props} />
)));

interface HeroSectionProps {
  onOpenModal: () => void;
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  const { t } = useTranslation("common");

  return (
    <section id="home" className="relative flex flex-col items-center justify-center text-center h-screen px-4 overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 z-0">
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-black/80 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-t from-black/80 to-transparent z-10" />
      <div className="relative z-20">
        <Image src="/logo.png" alt="Metaphor ReFantazio Logo" width={500} height={200} className="mx-auto" />
        <MotionP className="mt-6 text-lg text-gray-300 max-w-xl" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={fadeInUp}>
          {t("hero.description")}
        </MotionP>
        <Button
          onClick={onOpenModal}
          className="mt-8 w-80 sm:w-96 md:w-[28rem] px-6 py-4 bg-red-600 hover:bg-red-700 font-dancing flex items-center justify-center gap-4 rounded-xl"
        >
          <Play className="w-7 h-7 sm:w-8 sm:h-8" />
          <span className="text-2xl sm:text-3xl md:text-4xl">{t("hero.button")}</span>
        </Button>
      </div>
    </section>
  );
}
