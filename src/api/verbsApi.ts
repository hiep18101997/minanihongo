import { N5_VERBS, Verb } from '../data/n5verbs';

export const getN5Verbs = (): Promise<Verb[]> => {
  return new Promise((resolve) => {
    // Giả lập delay của API call
    setTimeout(() => {
      resolve(N5_VERBS);
    }, 500);
  });
};

export const searchVerbs = (query: string): Promise<Verb[]> => {
  return new Promise((resolve) => {
    const filteredVerbs = N5_VERBS.filter((verb) => {
      const searchStr = query.toLowerCase();
      return (
        verb.dictionaryForm.toLowerCase().includes(searchStr) ||
        verb.reading.toLowerCase().includes(searchStr) ||
        verb.meaning.toLowerCase().includes(searchStr)
      );
    });
    
    setTimeout(() => {
      resolve(filteredVerbs);
    }, 300);
  });
}; 