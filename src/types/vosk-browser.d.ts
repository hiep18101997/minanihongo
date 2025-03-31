declare module 'vosk-browser' {
  export class Model {
    constructor(modelPath: string);
    initialize(): Promise<void>;
    terminate(): void;
  }

  export class KaldiRecognizer {
    constructor(model: Model, sampleRate: number);
    setWords(words: boolean): void;
    acceptWaveform(data: Float32Array): Promise<boolean>;
    result(): string;
    finalResult(): string;
  }
} 