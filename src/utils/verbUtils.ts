import type { Verb, VerbDetail } from '../types/verb';

export const speak = (text: string) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ja-JP';
  
  // Lấy cài đặt từ localStorage
  const selectedVoice = localStorage.getItem('selectedVoice');
  const rate = localStorage.getItem('speechRate');
  const pitch = localStorage.getItem('speechPitch');
  
  // Áp dụng cài đặt
  if (selectedVoice) {
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.voiceURI === selectedVoice);
    if (voice) utterance.voice = voice;
  }
  
  if (rate) utterance.rate = parseFloat(rate);
  if (pitch) utterance.pitch = parseFloat(pitch);
  
  window.speechSynthesis.speak(utterance);
};

export const generateExamples = (verb: Verb): VerbDetail => {
  return {
    ruForm: {
      explanation: "Thể る là dạng từ điển của động từ, dùng để diễn tả hành động chung chung không có thời gian cụ thể.",
      examples: [
        {
          japanese: `毎日${verb.dictionaryForm}。`,
          reading: `まいにち${verb.reading}。`,
          meaning: `Hàng ngày tôi ${verb.meaning.toLowerCase()}.`,
        },
        {
          japanese: `明日${verb.ruForm}ます。`,
          reading: `あした${verb.ruForm}ます。`,
          meaning: `Ngày mai tôi sẽ ${verb.meaning.toLowerCase()}.`,
        },
      ],
    },
    teForm: {
      explanation: "Thể て dùng để nối các hành động, diễn tả hành động đang diễn ra, hoặc dùng để yêu cầu ai đó làm gì.",
      examples: [
        {
          japanese: `${verb.teForm}います。`,
          reading: `${verb.teForm}います。`,
          meaning: `Đang ${verb.meaning.toLowerCase()}.`,
        },
        {
          japanese: `${verb.teForm}ください。`,
          reading: `${verb.teForm}ください。`,
          meaning: `Hãy ${verb.meaning.toLowerCase()}.`,
        },
      ],
    },
    taForm: {
      explanation: "Thể た dùng để diễn tả hành động đã hoàn thành trong quá khứ.",
      examples: [
        {
          japanese: `昨日${verb.taForm}。`,
          reading: `きのう${verb.taForm}。`,
          meaning: `Hôm qua đã ${verb.meaning.toLowerCase()}.`,
        },
        {
          japanese: `もう${verb.taForm}？`,
          reading: `もう${verb.taForm}？`,
          meaning: `Đã ${verb.meaning.toLowerCase()} chưa?`,
        },
      ],
    },
    taiForm: {
      explanation: "Thể たい dùng để diễn tả mong muốn làm gì đó.",
      examples: [
        {
          japanese: `${verb.taiForm}です。`,
          reading: `${verb.taiForm}です。`,
          meaning: `Tôi muốn ${verb.meaning.toLowerCase()}.`,
        },
        {
          japanese: `${verb.taiForm}と思います。`,
          reading: `${verb.taiForm}とおもいます。`,
          meaning: `Tôi nghĩ là tôi muốn ${verb.meaning.toLowerCase()}.`,
        },
      ],
    },
  };
}; 