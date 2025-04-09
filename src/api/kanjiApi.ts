import { BASIC_KANJIS } from '../data/basicKanjis';
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


export const searchKanjis = async (searchText: string, level?: 'N5' | 'N4'): Promise<Kanji[]> => {
  const normalizedSearchText = searchText.toLowerCase();
  const allKanjis = [...BASIC_KANJIS];

  return allKanjis.filter((kanji) => {
    return (
      kanji.kanji.includes(searchText) ||
      kanji.meaning.toLowerCase().includes(normalizedSearchText) ||
      kanji.onyomi.toLowerCase().includes(normalizedSearchText) ||
      kanji.kunyomi.toLowerCase().includes(normalizedSearchText) ||
      kanji.hanViet.toLowerCase().includes(normalizedSearchText)
    );
  });
}; 