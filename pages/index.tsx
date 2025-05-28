'use client';


import { useState } from "react";
import { VideoModal } from "../components/ui/videoModal";
import { Header } from "../components/ui/header";
import Footer from "../components/ui/footer";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CharactersSection } from "../components/CharactersSection";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "pt", ["common"])),
    },
  };
};


export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white font-sans pt-14">
        <HeroSection onOpenModal={() => setModalOpen(true)} />
        <AboutSection />
        <CharactersSection />
        <VideoModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          videoId="yQPk4cVrU_w"
          title="Metaphor: ReFantazio - Official Trailer"
        />
      </main>
      <Footer />
    </>
  );
}
