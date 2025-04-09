'use client';

import { useState, useEffect } from 'react';
import { BASIC_KANJIS } from '@/data/basicKanjis';

interface Example {
  word: string;
  reading: string;
  meaning: string;
}

interface Kanji {
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

export default function Home() {
  const [currentKanji, setCurrentKanji] = useState<Kanji>(BASIC_KANJIS[0]);
  const [showMeaning, setShowMeaning] = useState(false);
  const [showReading, setShowReading] = useState(false);
  const [showExamples, setShowExamples] = useState(false);
  const [showHanViet, setShowHanViet] = useState(false);
  const [showTopic, setShowTopic] = useState(false);
  const [showJlpt, setShowJlpt] = useState(false);

  const handleNext = () => {
    const currentIndex = BASIC_KANJIS.findIndex((k: Kanji) => k.id === currentKanji.id);
    const nextIndex = (currentIndex + 1) % BASIC_KANJIS.length;
    setCurrentKanji(BASIC_KANJIS[nextIndex]);
    setShowMeaning(false);
    setShowReading(false);
    setShowExamples(false);
    setShowHanViet(false);
    setShowTopic(false);
    setShowJlpt(false);
  };

  const handlePrevious = () => {
    const currentIndex = BASIC_KANJIS.findIndex((k: Kanji) => k.id === currentKanji.id);
    const prevIndex = (currentIndex - 1 + BASIC_KANJIS.length) % BASIC_KANJIS.length;
    setCurrentKanji(BASIC_KANJIS[prevIndex]);
    setShowMeaning(false);
    setShowReading(false);
    setShowExamples(false);
    setShowHanViet(false);
    setShowTopic(false);
    setShowJlpt(false);
  };

  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">Học Kanji Cơ Bản</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <div className="text-9xl font-bold text-blue-900 mb-4">{currentKanji.kanji}</div>
            <div className="text-2xl text-gray-600">ID: {currentKanji.id}</div>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => setShowTopic(!showTopic)}
              className="w-full p-4 bg-indigo-100 hover:bg-indigo-200 rounded-lg text-left transition-colors"
            >
              <div className="font-semibold text-indigo-900">Chủ Đề</div>
              {showTopic && (
                <div className="mt-2 text-lg text-indigo-800">{currentKanji.topic}</div>
              )}
            </button>

            <button
              onClick={() => setShowJlpt(!showJlpt)}
              className="w-full p-4 bg-pink-100 hover:bg-pink-200 rounded-lg text-left transition-colors"
            >
              <div className="font-semibold text-pink-900">Cấp Độ JLPT</div>
              {showJlpt && (
                <div className="mt-2 text-lg text-pink-800">{currentKanji.jlptLevel}</div>
              )}
            </button>

            <button
              onClick={() => setShowHanViet(!showHanViet)}
              className="w-full p-4 bg-blue-100 hover:bg-blue-200 rounded-lg text-left transition-colors"
            >
              <div className="font-semibold text-blue-900">Hán Việt</div>
              {showHanViet && (
                <div className="mt-2 text-lg text-blue-800">{currentKanji.hanViet}</div>
              )}
            </button>

            <button
              onClick={() => setShowReading(!showReading)}
              className="w-full p-4 bg-green-100 hover:bg-green-200 rounded-lg text-left transition-colors"
            >
              <div className="font-semibold text-green-900">Cách Đọc</div>
              {showReading && (
                <div className="mt-2 space-y-2">
                  <div className="text-lg text-green-800">
                    <span className="font-semibold">On-yomi:</span> {currentKanji.onyomi}
                  </div>
                  {currentKanji.kunyomi && (
                    <div className="text-lg text-green-800">
                      <span className="font-semibold">Kun-yomi:</span> {currentKanji.kunyomi}
                    </div>
                  )}
                </div>
              )}
            </button>

            <button
              onClick={() => setShowMeaning(!showMeaning)}
              className="w-full p-4 bg-purple-100 hover:bg-purple-200 rounded-lg text-left transition-colors"
            >
              <div className="font-semibold text-purple-900">Nghĩa</div>
              {showMeaning && (
                <div className="mt-2 text-lg text-purple-800">{currentKanji.meaning}</div>
              )}
            </button>

            <button
              onClick={() => setShowExamples(!showExamples)}
              className="w-full p-4 bg-orange-100 hover:bg-orange-200 rounded-lg text-left transition-colors"
            >
              <div className="font-semibold text-orange-900">Ví Dụ</div>
              {showExamples && (
                <div className="mt-2 space-y-2">
                  {currentKanji.examples.map((example: Example, index: number) => (
                    <div key={index} className="text-lg text-orange-800">
                      <div className="font-semibold">{example.word}</div>
                      <div className="text-sm">{example.reading}</div>
                      <div className="text-sm">{example.meaning}</div>
                    </div>
                  ))}
                </div>
              )}
            </button>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handlePrevious}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Kanji Trước
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Kanji Tiếp
          </button>
        </div>
      </div>
    </main>
  );
} 