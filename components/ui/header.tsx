'use client';

import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useCallback, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const sections = ['home', 'about', 'characters'];

export function Header() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = useCallback(
    (lng: string) => {
      router.push('/', '/', { locale: lng }).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    },
    [router]
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md font-dancing">
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center h-14">
        {/* Navegação Desktop */}
        <ul className="hidden md:flex gap-8 text-2xl font-medium">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="transition-colors duration-300 py-1 text-gray-300 xl:hover:text-red-700"
              >
                {t(`header.${id}`)}
              </a>
            </li>
          ))}
        </ul>

        {/* Bandeiras + menu hamburguer */}
        <div className="flex items-center gap-4">
          {/* Botão do menu hamburguer (somente mobile) */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Bandeiras */}
          <button
            onClick={() => changeLanguage('pt')}
            className={`${i18n.language === 'pt' ? 'opacity-100' : 'opacity-50'} transition-opacity`}
            aria-label="Português"
          >
            <Image src="/flags/br.svg" alt="Português" width={24} height={24} />
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`${i18n.language === 'en' ? 'opacity-100' : 'opacity-50'} transition-opacity`}
            aria-label="English"
          >
            <Image src="/flags/us.svg" alt="English" width={24} height={24} />
          </button>
        </div>
      </nav>

      {/* Menu Mobile - apenas links */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm px-6 pb-6 pt-4 flex flex-col gap-6 text-xl font-semibold text-white">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="border-b border-white/10 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t(`header.${id}`)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
