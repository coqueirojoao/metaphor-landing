'use client';

import { useState } from "react";
import { VideoModal } from "../components/ui/videoModal";
import { Header } from "../components/ui/header";
import { HeroSection } from "../components/heroSection";
import { AboutSection } from "../components/AboutSection";
import { CharactersSection } from "../components/CharactersSection";
import Footer from "../components/ui/footer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white font-sans pt-14">
        <HeroSection onOpenModal={() => setModalOpen(true)} />
        <AboutSection />
        <CharactersSection />
        <Footer />
        <VideoModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          videoId="yQPk4cVrU_w"
          title="Metaphor: ReFantazio - Official Trailer"
        />
      </main>
    </>
  );
}
