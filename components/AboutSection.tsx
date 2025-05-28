'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animation";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

export function AboutSection() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    slides: { perView: 1.5, spacing: 12 },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.5, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 30 },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 1000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-about-section.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-black/80 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-t from-black/80 to-transparent z-10" />
      </div>

      <div className="relative z-20 w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-extrabold text-orange-400 tracking-widest mb-4 uppercase"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          About
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-orange-500 mx-auto mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        />

        <div className="text-gray-100 space-y-6 text-lg px-2">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
          >
            <strong>Metaphor: ReFantazio</strong> is an extraordinary fantasy RPG from Atlus’s Studio Zero. Helmed by Persona series director Katsura Hashino, the game transports players to the mystical kingdom of Euchronia, where they embark on a magical political race to claim the throne.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
          >
            Inspired by the spiritual depth of Persona but set in an entirely new world, ReFantazio explores themes of anxiety, belief, and transformation. The story challenges players to confront their inner fears as they shape their identity in a society filled with secrets and strife.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
          >
            With visionary art direction by Shigenori Soejima and a deeply immersive score by Shoji Meguro, the game melds real-time and turn-based combat into a unique system that rewards both intuition and strategy.
          </motion.p>
        </div>

<div ref={sliderRef} className="keen-slider mt-12">
  {["ps5.png", "ps4.png", "xbox-series.png", "steam.png"].map((logo, i) => (
    <div key={i} className="keen-slider__slide flex justify-center items-center">
      <Image
        src={`/platforms/${logo}`}
        alt={logo}
        width={120}
        height={120}
        className={`object-contain ${logo.includes("steam") ? "w-32" : "w-40"}`}
      />
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
