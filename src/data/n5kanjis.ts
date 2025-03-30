export interface Kanji {
  id: string;
  character: string;
  meaning: string;
  onReading: string;
  kunReading: string;
  strokeCount: number;
  jlptLevel: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  examples: KanjiExample[];
}

export interface KanjiExample {
  word: string;
  reading: string;
  meaning: string;
}

export const N5_KANJIS: Kanji[] = [
  {
    id: '1',
    character: '日',
    meaning: 'ngày, mặt trời',
    onReading: 'ニチ、ジツ',
    kunReading: 'ひ、-び、-か',
    strokeCount: 4,
    jlptLevel: 'N5',
    examples: [
      {
        word: '日本',
        reading: 'にほん',
        meaning: 'Nhật Bản',
      },
      {
        word: '今日',
        reading: 'きょう',
        meaning: 'hôm nay',
      },
      {
        word: '日曜日',
        reading: 'にちようび',
        meaning: 'Chủ nhật',
      },
    ],
  },
  {
    id: '2',
    character: '一',
    meaning: 'một',
    onReading: 'イチ、イツ',
    kunReading: 'ひと-',
    strokeCount: 1,
    jlptLevel: 'N5',
    examples: [
      {
        word: '一月',
        reading: 'いちがつ',
        meaning: 'tháng 1',
      },
      {
        word: '一年',
        reading: 'いちねん',
        meaning: 'một năm',
      },
      {
        word: '一緒',
        reading: 'いっしょ',
        meaning: 'cùng nhau',
      },
    ],
  },
  {
    id: '3',
    character: '人',
    meaning: 'người',
    onReading: 'ジン、ニン',
    kunReading: 'ひと',
    strokeCount: 2,
    jlptLevel: 'N5',
    examples: [
      {
        word: '日本人',
        reading: 'にほんじん',
        meaning: 'người Nhật',
      },
      {
        word: '大人',
        reading: 'おとな',
        meaning: 'người lớn',
      },
      {
        word: '一人',
        reading: 'ひとり',
        meaning: 'một người',
      },
    ],
  },
  {
    id: '4',
    character: '年',
    meaning: 'năm',
    onReading: 'ネン',
    kunReading: 'とし',
    strokeCount: 6,
    jlptLevel: 'N5',
    examples: [
      {
        word: '今年',
        reading: 'ことし',
        meaning: 'năm nay',
      },
      {
        word: '去年',
        reading: 'きょねん',
        meaning: 'năm ngoái',
      },
      {
        word: '年齢',
        reading: 'ねんれい',
        meaning: 'tuổi',
      },
    ],
  },
  {
    id: '5',
    character: '大',
    meaning: 'lớn',
    onReading: 'ダイ、タイ',
    kunReading: 'おお-、-おお',
    strokeCount: 3,
    jlptLevel: 'N5',
    examples: [
      {
        word: '大学',
        reading: 'だいがく',
        meaning: 'trường đại học',
      },
      {
        word: '大きい',
        reading: 'おおきい',
        meaning: 'to lớn',
      },
      {
        word: '大人',
        reading: 'おとな',
        meaning: 'người lớn',
      },
    ],
  },
  {
    id: '6',
    character: '本',
    meaning: 'sách, gốc',
    onReading: 'ホン',
    kunReading: 'もと',
    strokeCount: 5,
    jlptLevel: 'N5',
    examples: [
      {
        word: '日本',
        reading: 'にほん',
        meaning: 'Nhật Bản',
      },
      {
        word: '本当',
        reading: 'ほんとう',
        meaning: 'sự thật',
      },
      {
        word: '本屋',
        reading: 'ほんや',
        meaning: 'hiệu sách',
      },
    ],
  },
  {
    id: '7',
    character: '中',
    meaning: 'giữa, trong',
    onReading: 'チュウ',
    kunReading: 'なか',
    strokeCount: 4,
    jlptLevel: 'N5',
    examples: [
      {
        word: '中国',
        reading: 'ちゅうごく',
        meaning: 'Trung Quốc',
      },
      {
        word: '中学校',
        reading: 'ちゅうがっこう',
        meaning: 'trường trung học',
      },
      {
        word: '午前中',
        reading: 'ごぜんちゅう',
        meaning: 'trong buổi sáng',
      },
    ],
  },
  {
    id: '8',
    character: '長',
    meaning: 'dài, trưởng',
    onReading: 'チョウ',
    kunReading: 'なが-い',
    strokeCount: 8,
    jlptLevel: 'N5',
    examples: [
      {
        word: '長い',
        reading: 'ながい',
        meaning: 'dài',
      },
      {
        word: '校長',
        reading: 'こうちょう',
        meaning: 'hiệu trưởng',
      },
      {
        word: '部長',
        reading: 'ぶちょう',
        meaning: 'trưởng phòng',
      },
    ],
  },
  {
    id: '9',
    character: '出',
    meaning: 'ra, xuất',
    onReading: 'シュツ',
    kunReading: 'で-る、だ-す',
    strokeCount: 5,
    jlptLevel: 'N5',
    examples: [
      {
        word: '出口',
        reading: 'でぐち',
        meaning: 'lối ra',
      },
      {
        word: '出発',
        reading: 'しゅっぱつ',
        meaning: 'xuất phát',
      },
      {
        word: '出る',
        reading: 'でる',
        meaning: 'đi ra',
      },
    ],
  },
  {
    id: '10',
    character: '上',
    meaning: 'trên',
    onReading: 'ジョウ',
    kunReading: 'うえ、あ-げる',
    strokeCount: 3,
    jlptLevel: 'N5',
    examples: [
      {
        word: '上手',
        reading: 'じょうず',
        meaning: 'giỏi',
      },
      {
        word: '上がる',
        reading: 'あがる',
        meaning: 'lên',
      },
      {
        word: '上げる',
        reading: 'あげる',
        meaning: 'nâng lên',
      },
    ],
  },
  {
    id: '11',
    character: '下',
    meaning: 'dưới',
    onReading: 'カ、ゲ',
    kunReading: 'した、さ-げる',
    strokeCount: 3,
    jlptLevel: 'N5',
    examples: [
      {
        word: '下手',
        reading: 'へた',
        meaning: 'kém',
      },
      {
        word: '下がる',
        reading: 'さがる',
        meaning: 'xuống',
      },
      {
        word: '下げる',
        reading: 'さげる',
        meaning: 'hạ xuống',
      },
    ],
  },
  {
    id: '12',
    character: '右',
    meaning: 'phải',
    onReading: 'ウ、ユウ',
    kunReading: 'みぎ',
    strokeCount: 5,
    jlptLevel: 'N5',
    examples: [
      {
        word: '右側',
        reading: 'みぎがわ',
        meaning: 'bên phải',
      },
      {
        word: '右手',
        reading: 'みぎて',
        meaning: 'tay phải',
      },
      {
        word: '左右',
        reading: 'さゆう',
        meaning: 'trái phải',
      },
    ],
  },
  {
    id: '13',
    character: '左',
    meaning: 'trái',
    onReading: 'サ',
    kunReading: 'ひだり',
    strokeCount: 5,
    jlptLevel: 'N5',
    examples: [
      {
        word: '左側',
        reading: 'ひだりがわ',
        meaning: 'bên trái',
      },
      {
        word: '左手',
        reading: 'ひだりて',
        meaning: 'tay trái',
      },
      {
        word: '左折',
        reading: 'させつ',
        meaning: 'rẽ trái',
      },
    ],
  },
  {
    id: '14',
    character: '分',
    meaning: 'phút, phần',
    onReading: 'ブン、フン',
    kunReading: 'わ-ける',
    strokeCount: 4,
    jlptLevel: 'N5',
    examples: [
      {
        word: '一分',
        reading: 'いっぷん',
        meaning: 'một phút',
      },
      {
        word: '自分',
        reading: 'じぶん',
        meaning: 'bản thân',
      },
      {
        word: '分かる',
        reading: 'わかる',
        meaning: 'hiểu',
      },
    ],
  },
  {
    id: '15',
    character: '先',
    meaning: 'trước, tiên',
    onReading: 'セン',
    kunReading: 'さき',
    strokeCount: 6,
    jlptLevel: 'N5',
    examples: [
      {
        word: '先生',
        reading: 'せんせい',
        meaning: 'thầy cô',
      },
      {
        word: '先週',
        reading: 'せんしゅう',
        meaning: 'tuần trước',
      },
      {
        word: '先月',
        reading: 'せんげつ',
        meaning: 'tháng trước',
      },
    ],
  },
  {
    id: '16',
    character: '生',
    meaning: 'sống, sinh',
    onReading: 'セイ、ショウ',
    kunReading: 'い-きる、う-まれる',
    strokeCount: 5,
    jlptLevel: 'N5',
    examples: [
      {
        word: '先生',
        reading: 'せんせい',
        meaning: 'thầy cô',
      },
      {
        word: '生徒',
        reading: 'せいと',
        meaning: 'học sinh',
      },
      {
        word: '誕生日',
        reading: 'たんじょうび',
        meaning: 'sinh nhật',
      },
    ],
  },
  {
    id: '17',
    character: '休',
    meaning: 'nghỉ',
    onReading: 'キュウ',
    kunReading: 'やす-む',
    strokeCount: 6,
    jlptLevel: 'N5',
    examples: [
      {
        word: '休む',
        reading: 'やすむ',
        meaning: 'nghỉ ngơi',
      },
      {
        word: '休日',
        reading: 'きゅうじつ',
        meaning: 'ngày nghỉ',
      },
      {
        word: '夏休み',
        reading: 'なつやすみ',
        meaning: 'nghỉ hè',
      },
    ],
  },
  {
    id: '18',
    character: '校',
    meaning: 'trường',
    onReading: 'コウ',
    kunReading: '',
    strokeCount: 10,
    jlptLevel: 'N5',
    examples: [
      {
        word: '学校',
        reading: 'がっこう',
        meaning: 'trường học',
      },
      {
        word: '校長',
        reading: 'こうちょう',
        meaning: 'hiệu trưởng',
      },
      {
        word: '高校',
        reading: 'こうこう',
        meaning: 'trường cấp 3',
      },
    ],
  },
  {
    id: '19',
    character: '金',
    meaning: 'vàng, tiền',
    onReading: 'キン、コン',
    kunReading: 'かね',
    strokeCount: 8,
    jlptLevel: 'N5',
    examples: [
      {
        word: 'お金',
        reading: 'おかね',
        meaning: 'tiền',
      },
      {
        word: '金曜日',
        reading: 'きんようび',
        meaning: 'thứ 6',
      },
      {
        word: '金持ち',
        reading: 'かねもち',
        meaning: 'người giàu',
      },
    ],
  },
  {
    id: '20',
    character: '土',
    meaning: 'đất',
    onReading: 'ド、ト',
    kunReading: 'つち',
    strokeCount: 3,
    jlptLevel: 'N5',
    examples: [
      {
        word: '土曜日',
        reading: 'どようび',
        meaning: 'thứ 7',
      },
      {
        word: '土地',
        reading: 'とち',
        meaning: 'đất đai',
      },
      {
        word: '土産',
        reading: 'みやげ',
        meaning: 'quà lưu niệm',
      },
    ],
  },
  {
    id: '21',
    character: '私',
    meaning: 'tôi',
    onReading: 'シ',
    kunReading: 'わたし',
    strokeCount: 7,
    jlptLevel: 'N5',
    examples: [
      {
        word: '私立',
        reading: 'しりつ',
        meaning: 'tư thục',
      },
      {
        word: '私',
        reading: 'わたし',
        meaning: 'tôi',
      },
      {
        word: '私たち',
        reading: 'わたしたち',
        meaning: 'chúng tôi',
      },
    ],
  },
  {
    id: '22',
    character: '今',
    meaning: 'bây giờ',
    onReading: 'コン、キン',
    kunReading: 'いま',
    strokeCount: 4,
    jlptLevel: 'N5',
    examples: [
      {
        word: '今日',
        reading: 'きょう',
        meaning: 'hôm nay',
      },
      {
        word: '今週',
        reading: 'こんしゅう',
        meaning: 'tuần này',
      },
      {
        word: '今年',
        reading: 'ことし',
        meaning: 'năm nay',
      },
    ],
  },
  {
    id: '23',
    character: '新',
    meaning: 'mới',
    onReading: 'シン',
    kunReading: 'あたら-しい',
    strokeCount: 13,
    jlptLevel: 'N5',
    examples: [
      {
        word: '新聞',
        reading: 'しんぶん',
        meaning: 'báo',
      },
      {
        word: '新しい',
        reading: 'あたらしい',
        meaning: 'mới',
      },
      {
        word: '新年',
        reading: 'しんねん',
        meaning: 'năm mới',
      },
    ],
  },
  {
    id: '24',
    character: '古',
    meaning: 'cũ',
    onReading: 'コ',
    kunReading: 'ふる-い',
    strokeCount: 5,
    jlptLevel: 'N5',
    examples: [
      {
        word: '古い',
        reading: 'ふるい',
        meaning: 'cũ',
      },
      {
        word: '中古',
        reading: 'ちゅうこ',
        meaning: 'đã qua sử dụng',
      },
      {
        word: '古本',
        reading: 'ふるほん',
        meaning: 'sách cũ',
      },
    ],
  },
  {
    id: '25',
    character: '間',
    meaning: 'khoảng, giữa',
    onReading: 'カン、ケン',
    kunReading: 'あいだ、ま',
    strokeCount: 12,
    jlptLevel: 'N5',
    examples: [
      {
        word: '時間',
        reading: 'じかん',
        meaning: 'thời gian',
      },
      {
        word: '間',
        reading: 'あいだ',
        meaning: 'khoảng thời gian',
      },
      {
        word: '人間',
        reading: 'にんげん',
        meaning: 'con người',
      },
    ],
  },
  {
    id: '26',
    character: '見',
    meaning: 'nhìn, xem',
    onReading: 'ケン',
    kunReading: 'み-る、み-える',
    strokeCount: 7,
    jlptLevel: 'N5',
    examples: [
      {
        word: '見る',
        reading: 'みる',
        meaning: 'nhìn',
      },
      {
        word: '見える',
        reading: 'みえる',
        meaning: 'có thể thấy',
      },
      {
        word: '意見',
        reading: 'いけん',
        meaning: 'ý kiến',
      },
    ],
  },
  {
    id: '27',
    character: '聞',
    meaning: 'nghe, hỏi',
    onReading: 'ブン、モン',
    kunReading: 'き-く',
    strokeCount: 14,
    jlptLevel: 'N5',
    examples: [
      {
        word: '聞く',
        reading: 'きく',
        meaning: 'nghe',
      },
      {
        word: '新聞',
        reading: 'しんぶん',
        meaning: 'báo',
      },
      {
        word: '聞こえる',
        reading: 'きこえる',
        meaning: 'có thể nghe',
      },
    ],
  },
  {
    id: '28',
    character: '食',
    meaning: 'ăn',
    onReading: 'ショク、ジキ',
    kunReading: 'た-べる',
    strokeCount: 9,
    jlptLevel: 'N5',
    examples: [
      {
        word: '食べる',
        reading: 'たべる',
        meaning: 'ăn',
      },
      {
        word: '食事',
        reading: 'しょくじ',
        meaning: 'bữa ăn',
      },
      {
        word: '食堂',
        reading: 'しょくどう',
        meaning: 'nhà ăn',
      },
    ],
  },
  {
    id: '29',
    character: '飲',
    meaning: 'uống',
    onReading: 'イン',
    kunReading: 'の-む',
    strokeCount: 12,
    jlptLevel: 'N5',
    examples: [
      {
        word: '飲む',
        reading: 'のむ',
        meaning: 'uống',
      },
      {
        word: '飲み物',
        reading: 'のみもの',
        meaning: 'đồ uống',
      },
      {
        word: '飲食',
        reading: 'いんしょく',
        meaning: 'ăn uống',
      },
    ],
  },
  {
    id: '30',
    character: '買',
    meaning: 'mua',
    onReading: 'バイ',
    kunReading: 'か-う',
    strokeCount: 12,
    jlptLevel: 'N5',
    examples: [
      {
        word: '買う',
        reading: 'かう',
        meaning: 'mua',
      },
      {
        word: '買い物',
        reading: 'かいもの',
        meaning: 'mua sắm',
      },
      {
        word: '買収',
        reading: 'ばいしゅう',
        meaning: 'mua chuộc',
      },
    ],
  },
  {
    id: '31',
    character: '来',
    meaning: 'đến, tới',
    onReading: 'ライ',
    kunReading: 'く-る',
    strokeCount: 7,
    jlptLevel: 'N5',
    examples: [
      {
        word: '来る',
        reading: 'くる',
        meaning: 'đến',
      },
      {
        word: '来月',
        reading: 'らいげつ',
        meaning: 'tháng sau',
      },
      {
        word: '来年',
        reading: 'らいねん',
        meaning: 'năm sau',
      },
    ],
  },
  {
    id: '32',
    character: '行',
    meaning: 'đi, hành',
    onReading: 'コウ、ギョウ',
    kunReading: 'い-く、ゆ-く',
    strokeCount: 6,
    jlptLevel: 'N5',
    examples: [
      {
        word: '行く',
        reading: 'いく',
        meaning: 'đi',
      },
      {
        word: '銀行',
        reading: 'ぎんこう',
        meaning: 'ngân hàng',
      },
      {
        word: '旅行',
        reading: 'りょこう',
        meaning: 'du lịch',
      },
    ],
  },
  {
    id: '33',
    character: '帰',
    meaning: 'về',
    onReading: 'キ',
    kunReading: 'かえ-る',
    strokeCount: 10,
    jlptLevel: 'N5',
    examples: [
      {
        word: '帰る',
        reading: 'かえる',
        meaning: 'về nhà',
      },
      {
        word: '帰国',
        reading: 'きこく',
        meaning: 'về nước',
      },
      {
        word: '帰宅',
        reading: 'きたく',
        meaning: 'về nhà',
      },
    ],
  },
  {
    id: '34',
    character: '学',
    meaning: 'học',
    onReading: 'ガク',
    kunReading: 'まな-ぶ',
    strokeCount: 8,
    jlptLevel: 'N5',
    examples: [
      {
        word: '学校',
        reading: 'がっこう',
        meaning: 'trường học',
      },
      {
        word: '大学',
        reading: 'だいがく',
        meaning: 'đại học',
      },
      {
        word: '学生',
        reading: 'がくせい',
        meaning: 'học sinh',
      },
    ],
  },
  {
    id: '35',
    character: '会',
    meaning: 'gặp, hội',
    onReading: 'カイ、エ',
    kunReading: 'あ-う',
    strokeCount: 6,
    jlptLevel: 'N5',
    examples: [
      {
        word: '会う',
        reading: 'あう',
        meaning: 'gặp',
      },
      {
        word: '会社',
        reading: 'かいしゃ',
        meaning: 'công ty',
      },
      {
        word: '会議',
        reading: 'かいぎ',
        meaning: 'cuộc họp',
      },
    ],
  },
  {
    id: '36',
    character: '話',
    meaning: 'nói chuyện',
    onReading: 'ワ',
    kunReading: 'はな-す',
    strokeCount: 13,
    jlptLevel: 'N5',
    examples: [
      {
        word: '話す',
        reading: 'はなす',
        meaning: 'nói',
      },
      {
        word: '電話',
        reading: 'でんわ',
        meaning: 'điện thoại',
      },
      {
        word: '会話',
        reading: 'かいわ',
        meaning: 'hội thoại',
      },
    ],
  },
  {
    id: '37',
    character: '読',
    meaning: 'đọc',
    onReading: 'ドク',
    kunReading: 'よ-む',
    strokeCount: 14,
    jlptLevel: 'N5',
    examples: [
      {
        word: '読む',
        reading: 'よむ',
        meaning: 'đọc',
      },
      {
        word: '読書',
        reading: 'どくしょ',
        meaning: 'đọc sách',
      },
      {
        word: '読者',
        reading: 'どくしゃ',
        meaning: 'độc giả',
      },
    ],
  },
  {
    id: '38',
    character: '書',
    meaning: 'viết',
    onReading: 'ショ',
    kunReading: 'か-く',
    strokeCount: 10,
    jlptLevel: 'N5',
    examples: [
      {
        word: '書く',
        reading: 'かく',
        meaning: 'viết',
      },
      {
        word: '辞書',
        reading: 'じしょ',
        meaning: 'từ điển',
      },
      {
        word: '図書館',
        reading: 'としょかん',
        meaning: 'thư viện',
      },
    ],
  },
  {
    id: '39',
    character: '友',
    meaning: 'bạn',
    onReading: 'ユウ',
    kunReading: 'とも',
    strokeCount: 4,
    jlptLevel: 'N5',
    examples: [
      {
        word: '友達',
        reading: 'ともだち',
        meaning: 'bạn bè',
      },
      {
        word: '友人',
        reading: 'ゆうじん',
        meaning: 'bạn',
      },
      {
        word: '親友',
        reading: 'しんゆう',
        meaning: 'bạn thân',
      },
    ],
  },
  {
    id: '40',
    character: '何',
    meaning: 'cái gì',
    onReading: 'カ',
    kunReading: 'なに、なん',
    strokeCount: 7,
    jlptLevel: 'N5',
    examples: [
      {
        word: '何',
        reading: 'なに',
        meaning: 'cái gì',
      },
      {
        word: '何時',
        reading: 'なんじ',
        meaning: 'mấy giờ',
      },
      {
        word: '何か',
        reading: 'なにか',
        meaning: 'cái gì đó',
      },
    ],
  },
  {
    id: '41',
    character: '時',
    meaning: 'thời gian, giờ',
    onReading: 'ジ',
    kunReading: 'とき',
    strokeCount: 10,
    jlptLevel: 'N5',
    examples: [
      {
        word: '時間',
        reading: 'じかん',
        meaning: 'thời gian',
      },
      {
        word: '時計',
        reading: 'とけい',
        meaning: 'đồng hồ',
      },
      {
        word: '何時',
        reading: 'なんじ',
        meaning: 'mấy giờ',
      },
    ],
  },
  {
    id: '42',
    character: '月',
    meaning: 'tháng, mặt trăng',
    onReading: 'ゲツ、ガツ',
    kunReading: 'つき',
    strokeCount: 4,
    jlptLevel: 'N5',
    examples: [
      {
        word: '一月',
        reading: 'いちがつ',
        meaning: 'tháng 1',
      },
      {
        word: '月曜日',
        reading: 'げつようび',
        meaning: 'thứ 2',
      },
      {
        word: '今月',
        reading: 'こんげつ',
        meaning: 'tháng này',
      },
    ],
  },
  {
    id: '43',
    character: '火',
    meaning: 'lửa',
    onReading: 'カ',
    kunReading: 'ひ',
    strokeCount: 4,
    jlptLevel: 'N5',
    examples: [
      {
        word: '火曜日',
        reading: 'かようび',
        meaning: 'thứ 3',
      },
      {
        word: '火事',
        reading: 'かじ',
        meaning: 'hỏa hoạn',
      },
      {
        word: '火山',
        reading: 'かざん',
        meaning: 'núi lửa',
      },
    ],
  },
  {
    id: '44',
    character: '水',
    meaning: 'nước',
    onReading: 'スイ',
    kunReading: 'みず',
    strokeCount: 4,
    jlptLevel: 'N5',
    examples: [
      {
        word: '水曜日',
        reading: 'すいようび',
        meaning: 'thứ 4',
      },
      {
        word: '水泳',
        reading: 'すいえい',
        meaning: 'bơi lội',
      },
      {
        word: '飲み水',
        reading: 'のみみず',
        meaning: 'nước uống',
      },
    ],
  },
  {
    id: '45',
    character: '木',
    meaning: 'cây',
    onReading: 'モク、ボク',
    kunReading: 'き',
    strokeCount: 4,
    jlptLevel: 'N5',
    examples: [
      {
        word: '木曜日',
        reading: 'もくようび',
        meaning: 'thứ 5',
      },
      {
        word: '木村',
        reading: 'きむら',
        meaning: 'Kimura',
      },
      {
        word: '木製',
        reading: 'もくせい',
        meaning: 'làm bằng gỗ',
      },
    ],
  },
  {
    id: '46',
    character: '山',
    meaning: 'núi',
    onReading: 'サン',
    kunReading: 'やま',
    strokeCount: 3,
    jlptLevel: 'N5',
    examples: [
      {
        word: '富士山',
        reading: 'ふじさん',
        meaning: 'núi Phú Sĩ',
      },
      {
        word: '山道',
        reading: 'やまみち',
        meaning: 'đường núi',
      },
      {
        word: '火山',
        reading: 'かざん',
        meaning: 'núi lửa',
      },
    ],
  },
  {
    id: '47',
    character: '川',
    meaning: 'sông',
    onReading: 'セン',
    kunReading: 'かわ',
    strokeCount: 3,
    jlptLevel: 'N5',
    examples: [
      {
        word: '川口',
        reading: 'かわぐち',
        meaning: 'cửa sông',
      },
      {
        word: '小川',
        reading: 'おがわ',
        meaning: 'suối nhỏ',
      },
      {
        word: '川崎',
        reading: 'かわさき',
        meaning: 'Kawasaki',
      },
    ],
  },
  {
    id: '48',
    character: '田',
    meaning: 'ruộng',
    onReading: 'デン',
    kunReading: 'た',
    strokeCount: 5,
    jlptLevel: 'N5',
    examples: [
      {
        word: '田中',
        reading: 'たなか',
        meaning: 'Tanaka',
      },
      {
        word: '山田',
        reading: 'やまだ',
        meaning: 'Yamada',
      },
      {
        word: '田舎',
        reading: 'いなか',
        meaning: 'nông thôn',
      },
    ],
  },
  {
    id: '49',
    character: '女',
    meaning: 'nữ',
    onReading: 'ジョ、ニョ',
    kunReading: 'おんな',
    strokeCount: 3,
    jlptLevel: 'N5',
    examples: [
      {
        word: '女性',
        reading: 'じょせい',
        meaning: 'phụ nữ',
      },
      {
        word: '女子',
        reading: 'じょし',
        meaning: 'nữ sinh',
      },
      {
        word: '女の子',
        reading: 'おんなのこ',
        meaning: 'con gái',
      },
    ],
  },
  {
    id: '50',
    character: '男',
    meaning: 'nam',
    onReading: 'ダン、ナン',
    kunReading: 'おとこ',
    strokeCount: 7,
    jlptLevel: 'N5',
    examples: [
      {
        word: '男性',
        reading: 'だんせい',
        meaning: 'nam giới',
      },
      {
        word: '男子',
        reading: 'だんし',
        meaning: 'nam sinh',
      },
      {
        word: '男の子',
        reading: 'おとこのこ',
        meaning: 'con trai',
      },
    ],
  }
]; 