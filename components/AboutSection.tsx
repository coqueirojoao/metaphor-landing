import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-about-section.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>
      <div className="relative z-10">
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
        <div className="max-w-5xl text-gray-100 space-y-6 text-lg">
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
      </div>
    </section>
  );
}
