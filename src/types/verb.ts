export interface Verb {
  id: string;
  ruForm: string;
  reading: string;
  meaning: string;
  type: 'ichidan' | 'godan' | 'irregular';
  dictionaryForm: string;
  teForm: string;
  taForm: string;
  taiForm: string;
}

export interface VerbExample {
  japanese: string;
  reading: string;
  meaning: string;
}

export interface VerbDetail {
  ruForm: {
    explanation: string;
    examples: VerbExample[];
  };
  teForm: {
    explanation: string;
    examples: VerbExample[];
  };
  taForm: {
    explanation: string;
    examples: VerbExample[];
  };
  taiForm: {
    explanation: string;
    examples: VerbExample[];
  };
} 