import { BASIC_KANJIS } from '../data/basicKanjis';
import { NEW_KANJIS } from '../data/newKanjis';
import { Kanji } from '../types/kanji';

export const getBasicKanjis = (): Kanji[] => {
  return BASIC_KANJIS;
};

export const getKanjiById = (id: number): Kanji | undefined => {
  return BASIC_KANJIS.find(kanji => kanji.id === id);
};

export const getKanjisByTopic = (topic: string): Kanji[] => {
  return BASIC_KANJIS.filter(kanji => kanji.topic === topic);
};

export const getKanjisByJlptLevel = (level: string): Kanji[] => {
  return BASIC_KANJIS.filter(kanji => kanji.jlptLevel === level);
};

export const getAllKanjis = async (): Promise<Kanji[]> => {
  return [...BASIC_KANJIS];
};

export const getN5Kanjis = (): Kanji[] => {
  return [...BASIC_KANJIS, ...NEW_KANJIS].filter(kanji => kanji.jlptLevel === 'N5');
};

export const getN4Kanjis = (): Kanji[] => {
  return [...BASIC_KANJIS, ...NEW_KANJIS].filter(kanji => kanji.jlptLevel === 'N4');
};

export const searchKanjis = async (searchText: string, level?: 'N5' | 'N4'): Promise<Kanji[]> => {
  const normalizedSearchText = searchText.toLowerCase();
  const allKanjis = [...BASIC_KANJIS, ...NEW_KANJIS];

  return allKanjis.filter((kanji) => {
    if (level && kanji.jlptLevel !== level) {
      return false;
    }
    
    return (
      kanji.kanji.includes(searchText) ||
      kanji.meaning.toLowerCase().includes(normalizedSearchText) ||
      kanji.onyomi.toLowerCase().includes(normalizedSearchText) ||
      kanji.kunyomi.toLowerCase().includes(normalizedSearchText) ||
      kanji.hanViet.toLowerCase().includes(normalizedSearchText)
    );
  });
}; 