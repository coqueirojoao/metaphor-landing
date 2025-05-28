import { useTranslation } from "next-i18next";
import { CharacterInfo } from "../types/character";

export function useCharacterData(): Record<string, CharacterInfo> {
  const { t } = useTranslation("common");

  return {
    Will: {
      src: "/hero.webp",
      title: t("characters.Will.title"),
      description: t("characters.Will.description"),
    },
    "Louis Guiabern": {
      src: "/louis.webp",
      title: t("characters.Louis Guiabern.title"),
      description: t("characters.Louis Guiabern.description"),
    },
    Hulkenberg: {
      src: "/hulkenberg.webp",
      title: t("characters.Hulkenberg.title"),
      description: t("characters.Hulkenberg.description"),
    },
    "Leon Strohl": {
      src: "/leon.webp",
      title: t("characters.Leon Strohl.title"),
      description: t("characters.Leon Strohl.description"),
    },
  };
}
