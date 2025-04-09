export interface Example {
  word: string;
  reading: string;
  meaning: string;
}

export interface Kanji {
  id: number;
  kanji: string;
  onyomi: string;
  kunyomi: string;
  meaning: string;
  hanViet: string;
  examples: Example[];
  topic: string;
  jlptLevel: string;
} 