'use client';

import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useCallback } from 'react';
import Image from 'next/image';

const sections = ['home', 'about', 'characters'];

export function Header() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();

  const changeLanguage = useCallback(
    (lng: string) => {
      router.push(router.pathname, router.asPath, { locale: lng });
    },
    [router]
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md font-dancing">
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center h-14">
        <ul className="flex gap-8 text-2xl font-medium">
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
        <div className="flex gap-4 items-center">
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
    </header>
  );
}
