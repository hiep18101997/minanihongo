import { Kanji, N5_KANJIS } from '../data/n5kanjis';
import { N4_KANJIS } from '../data/n4kanjis';

export const getAllKanjis = async (): Promise<Kanji[]> => {
  return [...N5_KANJIS, ...N4_KANJIS];
};

export const getN5Kanjis = async (): Promise<Kanji[]> => {
  return N5_KANJIS;
};

export const getN4Kanjis = async (): Promise<Kanji[]> => {
  return N4_KANJIS;
};

export const searchKanjis = async (searchText: string, level?: 'N5' | 'N4'): Promise<Kanji[]> => {
  const normalizedSearchText = searchText.toLowerCase();
  const allKanjis = level ? 
    (level === 'N5' ? N5_KANJIS : N4_KANJIS) : 
    [...N5_KANJIS, ...N4_KANJIS];

  return allKanjis.filter((kanji) => {
    return (
      kanji.character.includes(searchText) ||
      kanji.meaning.toLowerCase().includes(normalizedSearchText) ||
      kanji.onReading.toLowerCase().includes(normalizedSearchText) ||
      kanji.kunReading.toLowerCase().includes(normalizedSearchText) ||
      kanji.examples.some(
        (example) =>
          example.word.includes(searchText) ||
          example.reading.toLowerCase().includes(normalizedSearchText) ||
          example.meaning.toLowerCase().includes(normalizedSearchText)
      )
    );
  });
}; 