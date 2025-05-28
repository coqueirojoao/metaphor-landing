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

const characterData = {
  Will: {
    src: "/hero.webp",
    description:
      "The protagonist of Metaphor: ReFantazio, canonically known as Will primarily, is a young man of a fantasy background. He is of the elda tribe, a race defined by no distinguished characteristics and an impossibly rare tribe.",
    title: "Wiru",
  },
  "Louis Guiabern": {
    src: "/louis.webp",
    description:
      "Louis Guiabern is the main antagonist in Metaphor: ReFantazio. He is a charismatic prodigy and an army officer, supposedly of the clemar tribe.",
    title: "Rui Guiaberun",
  },
  Hulkenberg: {
    src: "/hulkenberg.webp",
    description:
      "Eiselin Burchelli Meijal Hulkenberg, known simply as Hulkenberg, is a major playable character in Metaphor: ReFantazio. She is a knight of the populous roussainte tribe and a former member of the royal family's Kingsguard. After failing to protect the prince during an assassination attempt, she wandered the kingdom in shame. She returns to combat upon hearing news of King Hythlodaeus V's death.",
    title: "Aizerin Barucherri Maiaru Hyurukenberugu",
  },
};

export function CharactersSection() {
  return (
    <section
      id="characters"
      className="relative px-2 py-20 flex flex-col items-center text-center"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-characters.jpg"
          alt="Characters Background"
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
          Characters
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-orange-500 mx-auto my-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        />
        <motion.p
          className="text-gray-200 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          Meet the heroes and adversaries that shape your fate in this enthralling tale.
        </motion.p>
      </div>

      <div className="relative z-10 flex flex-col gap-8 md:gap-20 max-w-6xl w-full mx-auto px-2">
        {Object.entries(characterData).map(([name, data], index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} items-center gap-6 md:gap-10`}
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={data.src}
                alt={name}
                width={320}
                height={320}
                className="rounded-xl shadow-xl mx-auto w-full max-w-xs md:max-w-md lg:max-w-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-3xl font-bold text-orange-200 uppercase mt-2">{name}</h3>
              <p className="italic text-gray-400 text-md mb-4">{data.title}</p>
              <p className="text-gray-100 text-lg leading-relaxed">{data.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
