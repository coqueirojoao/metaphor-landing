import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animation";
import { useTranslation } from "next-i18next";

export function CharactersSection() {
  const { t } = useTranslation("common");

  const characters = [
    {
      key: "Will",
      image: "/hero.webp"
    },
    {
      key: "Louis Guiabern",
      image: "/louis.webp"
    },
    {
      key: "Hulkenberg",
      image: "/hulkenberg.webp"
    },
    {
      key: "Leon Strohl",
      image: "/leon.webp"
    }
  ];

  return (
    <section
      id="characters"
      className="relative py-20 flex flex-col items-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-characters.jpg"
          alt="Characters Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-black/80 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-t from-black/80 to-transparent z-10" />
      </div>

      <div className="relative z-20">
        <motion.h2
          className="text-5xl font-extrabold text-orange-400 tracking-wider md:tracking-widest mb-4 uppercase"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          {t("characters.title")}
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-orange-500 mx-auto my-4 px-4 sm:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        />
        <motion.p
          className="text-gray-200 max-w-2xl mx-auto text-lg px-4 sm:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          {t("characters.subtitle")}
        </motion.p>
      </div>

      <div className="relative z-20 flex flex-col gap-8 md:gap-20 max-w-6xl w-full mx-auto px-4">
        {characters.map(({ key, image }, index) => {
          const data = t(`characters.${key}`, { returnObjects: true });

          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-6 md:gap-10`}
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src={image}
                  alt={key}
                  width={280}
                  height={280}
                  className="rounded-xl shadow-xl mx-auto w-full max-w-xs md:max-w-md lg:max-w-lg"
                />
              </div>
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-orange-200 uppercase mt-2">{key}</h3>
                <p className="italic text-gray-400 text-md mb-4">{data.title}</p>
                <p className="text-gray-100 text-lg leading-relaxed">{data.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
