import React, { useEffect, useState } from 'react';
import { Kanji } from '../types/kanji';
import { getN5Kanjis, getN4Kanjis } from '../api/kanjiApi';

const KanjiPage: React.FC = () => {
  const [n5Kanjis, setN5Kanjis] = useState<Kanji[]>([]);
  const [n4Kanjis, setN4Kanjis] = useState<Kanji[]>([]);

  useEffect(() => {
    setN5Kanjis(getN5Kanjis());
    setN4Kanjis(getN4Kanjis());
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Kanji N5 & N4</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">N5 Kanji ({n5Kanjis.length})</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {n5Kanjis.map((kanji) => (
              <div key={kanji.id} className="border p-4 rounded-lg">
                <div className="text-2xl mb-2">{kanji.kanji}</div>
                <div className="text-sm text-gray-600">音読み: {kanji.onyomi}</div>
                <div className="text-sm text-gray-600">訓読み: {kanji.kunyomi}</div>
                <div className="text-sm text-gray-600">意味: {kanji.meaning}</div>
                <div className="text-sm text-gray-600">漢越: {kanji.hanViet}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">N4 Kanji ({n4Kanjis.length})</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {n4Kanjis.map((kanji) => (
              <div key={kanji.id} className="border p-4 rounded-lg">
                <div className="text-2xl mb-2">{kanji.kanji}</div>
                <div className="text-sm text-gray-600">音読み: {kanji.onyomi}</div>
                <div className="text-sm text-gray-600">訓読み: {kanji.kunyomi}</div>
                <div className="text-sm text-gray-600">意味: {kanji.meaning}</div>
                <div className="text-sm text-gray-600">漢越: {kanji.hanViet}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanjiPage; 