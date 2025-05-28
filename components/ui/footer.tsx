'use client';

import { Github, Linkedin } from "lucide-react";
import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-black py-10 text-center text-gray-500 text-sm flex flex-col items-center gap-4">
      <p>{t("footer.credits")}</p>
      <div className="flex gap-6 justify-center">
        <a
          href="https://www.linkedin.com/in/coqueirojoao/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://github.com/coqueirojoao"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <Github size={28} />
        </a>
      </div>
    </footer>
  );
}
