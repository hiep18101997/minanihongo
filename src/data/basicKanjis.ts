import { Kanji } from '../types/kanji';

export const BASIC_KANJIS: Kanji[] = [
  {
    id: 1,
    kanji: '一',
    onyomi: 'イチ、イツ',
    kunyomi: 'ひと（つ）',
    meaning: 'một',
    hanViet: 'Nhất',
    topic: 'Số đếm',
    jlptLevel: 'N5',
    examples: [
      { word: '一', reading: 'いち', meaning: 'một (On-yomi)' },
      { word: '一人', reading: 'ひとり', meaning: 'một người (Kun-yomi)' },
      { word: '一月', reading: 'いちがつ', meaning: 'tháng một (On-yomi)' }
    ]
  },
  {
    id: 2,
    kanji: '二',
    onyomi: 'ニ',
    kunyomi: 'ふた（つ）',
    meaning: 'hai',
    hanViet: 'Nhị',
    topic: 'Số đếm',
    jlptLevel: 'N5',
    examples: [
      { word: '二', reading: 'に', meaning: 'hai (On-yomi)' },
      { word: '二人', reading: 'ふたり', meaning: 'hai người (Kun-yomi)' },
      { word: '二月', reading: 'にがつ', meaning: 'tháng hai (On-yomi)' }
    ]
  },
  {
    id: 3,
    kanji: '三',
    onyomi: 'サン',
    kunyomi: 'み（つ）',
    meaning: 'ba',
    hanViet: 'Tam',
    topic: 'Số đếm',
    jlptLevel: 'N5',
    examples: [
      { word: '三', reading: 'さん', meaning: 'ba (On-yomi)' },
      { word: '三人', reading: 'さんにん', meaning: 'ba người (On-yomi)' },
      { word: '三月', reading: 'さんがつ', meaning: 'tháng ba (On-yomi)' }
    ]
  },
  {
    id: 4,
    kanji: '四',
    onyomi: 'シ',
    kunyomi: 'よ（つ）、よん',
    meaning: 'bốn',
    hanViet: 'Tứ',
    topic: 'Số đếm',
    jlptLevel: 'N5',
    examples: [
      { word: '四', reading: 'よん', meaning: 'bốn (Kun-yomi)' },
      { word: '四人', reading: 'よにん', meaning: 'bốn người (Kun-yomi)' },
      { word: '四月', reading: 'しがつ', meaning: 'tháng tư (On-yomi)' }
    ]
  },
  {
    id: 5,
    kanji: '五',
    onyomi: 'ゴ',
    kunyomi: 'いつ（つ）',
    meaning: 'năm',
    hanViet: 'Ngũ',
    topic: 'Số đếm',
    jlptLevel: 'N5',
    examples: [
      { word: '五', reading: 'ご', meaning: 'năm (On-yomi)' },
      { word: '五人', reading: 'ごにん', meaning: 'năm người (On-yomi)' },
      { word: '五月', reading: 'ごがつ', meaning: 'tháng năm (On-yomi)' }
    ]
  },
  {
    id: 6,
    kanji: '六',
    onyomi: 'ロク',
    kunyomi: 'む（つ）、むい',
    meaning: 'sáu',
    hanViet: 'Lục',
    topic: 'Số đếm',
    jlptLevel: 'N5',
    examples: [
      { word: '六', reading: 'ろく', meaning: 'sáu (On-yomi)' },
      { word: '六人', reading: 'ろくにん', meaning: 'sáu người (On-yomi)' },
      { word: '六月', reading: 'ろくがつ', meaning: 'tháng sáu (On-yomi)' }
    ]
  },
  {
    id: 7,
    kanji: '七',
    onyomi: 'シチ',
    kunyomi: 'なな（つ）、なの',
    meaning: 'bảy',
    hanViet: 'Thất',
    topic: 'Số đếm',
    jlptLevel: 'N5',
    examples: [
      { word: '七', reading: 'なな', meaning: 'bảy (Kun-yomi)' },
      { word: '七人', reading: 'しちにん', meaning: 'bảy người (On-yomi)' },
      { word: '七月', reading: 'しちがつ', meaning: 'tháng bảy (On-yomi)' }
    ]
  },
  {
    id: 8,
    kanji: '八',
    onyomi: 'ハチ',
    kunyomi: 'や（つ）、よう',
    meaning: 'tám',
    hanViet: 'Bát',
    topic: 'Số đếm',
    jlptLevel: 'N5',
    examples: [
      { word: '八', reading: 'はち', meaning: 'tám (On-yomi)' },
      { word: '八人', reading: 'はちにん', meaning: 'tám người (On-yomi)' },
      { word: '八月', reading: 'はちがつ', meaning: 'tháng tám (On-yomi)' }
    ]
  },
  {
    id: 9,
    kanji: '九',
    onyomi: 'キュウ、ク',
    kunyomi: 'ここの（つ）',
    meaning: 'chín',
    hanViet: 'Cửu',
    topic: 'Số đếm',
    jlptLevel: 'N5',
    examples: [
      { word: '九', reading: 'きゅう', meaning: 'chín (On-yomi)' },
      { word: '九人', reading: 'きゅうにん', meaning: 'chín người (On-yomi)' },
      { word: '九月', reading: 'くがつ', meaning: 'tháng chín (On-yomi)' }
    ]
  },
  {
    id: 10,
    kanji: '十',
    onyomi: 'ジュウ、ジッ',
    kunyomi: 'とお、と',
    meaning: 'mười',
    hanViet: 'Thập',
    topic: 'Số đếm',
    jlptLevel: 'N5',
    examples: [
      { word: '十', reading: 'じゅう', meaning: 'mười (On-yomi)' },
      { word: '十人', reading: 'じゅうにん', meaning: 'mười người (On-yomi)' },
      { word: '十月', reading: 'じゅうがつ', meaning: 'tháng mười (On-yomi)' }
    ]
  },
  {
    id: 11,
    kanji: '日',
    onyomi: 'ニチ、ジツ',
    kunyomi: 'ひ、か',
    meaning: 'ngày, mặt trời',
    hanViet: 'Nhật',
    topic: 'Thời gian',
    jlptLevel: 'N5',
    examples: [
      { word: '日本', reading: 'にほん', meaning: 'Nhật Bản' },
      { word: '今日', reading: 'きょう', meaning: 'hôm nay' },
      { word: '日曜日', reading: 'にちようび', meaning: 'Chủ nhật' }
    ]
  },
  {
    id: 12,
    kanji: '月',
    onyomi: 'ゲツ、ガツ',
    kunyomi: 'つき',
    meaning: 'tháng, mặt trăng',
    hanViet: 'Nguyệt',
    topic: 'Thời gian',
    jlptLevel: 'N5',
    examples: [
      { word: '月', reading: 'つき', meaning: 'mặt trăng (Kun-yomi)' },
      { word: '一月', reading: 'いちがつ', meaning: 'tháng một (On-yomi)' },
      { word: '月曜日', reading: 'げつようび', meaning: 'thứ hai (On-yomi)' }
    ]
  },
  {
    id: 13,
    kanji: '火',
    onyomi: 'カ',
    kunyomi: 'ひ',
    meaning: 'lửa',
    hanViet: 'Hỏa',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '火', reading: 'ひ', meaning: 'lửa (Kun-yomi)' },
      { word: '火曜日', reading: 'かようび', meaning: 'thứ ba (On-yomi)' },
      { word: '火山', reading: 'かざん', meaning: 'núi lửa (On-yomi)' }
    ]
  },
  {
    id: 14,
    kanji: '水',
    onyomi: 'スイ',
    kunyomi: 'みず',
    meaning: 'nước',
    hanViet: 'Thủy',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '水', reading: 'みず', meaning: 'nước (Kun-yomi)' },
      { word: '水曜日', reading: 'すいようび', meaning: 'thứ tư (On-yomi)' },
      { word: '水泳', reading: 'すいえい', meaning: 'bơi lội (On-yomi)' }
    ]
  },
  {
    id: 15,
    kanji: '木',
    onyomi: 'モク、ボク',
    kunyomi: 'き',
    meaning: 'cây, gỗ',
    hanViet: 'Mộc',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '木', reading: 'き', meaning: 'cây (Kun-yomi)' },
      { word: '木曜日', reading: 'もくようび', meaning: 'thứ năm (On-yomi)' },
      { word: '木材', reading: 'もくざい', meaning: 'gỗ (On-yomi)' }
    ]
  },
  {
    id: 16,
    kanji: '金',
    onyomi: 'キン、コン',
    kunyomi: 'かね',
    meaning: 'vàng, tiền',
    hanViet: 'Kim',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '金', reading: 'かね', meaning: 'tiền (Kun-yomi)' },
      { word: '金曜日', reading: 'きんようび', meaning: 'thứ sáu (On-yomi)' },
      { word: '金属', reading: 'きんぞく', meaning: 'kim loại (On-yomi)' }
    ]
  },
  {
    id: 17,
    kanji: '土',
    onyomi: 'ド、ト',
    kunyomi: 'つち',
    meaning: 'đất',
    hanViet: 'Thổ',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '土', reading: 'つち', meaning: 'đất (Kun-yomi)' },
      { word: '土曜日', reading: 'どようび', meaning: 'thứ bảy (On-yomi)' },
      { word: '土地', reading: 'とち', meaning: 'đất đai (On-yomi)' }
    ]
  },
  {
    id: 18,
    kanji: '山',
    onyomi: 'サン',
    kunyomi: 'やま',
    meaning: 'núi',
    hanViet: 'Sơn',
    topic: 'Địa lý',
    jlptLevel: 'N5',
    examples: [
      { word: '山', reading: 'やま', meaning: 'núi (Kun-yomi)' },
      { word: '山脈', reading: 'さんみゃく', meaning: 'dãy núi (On-yomi)' },
      { word: '火山', reading: 'かざん', meaning: 'núi lửa (On-yomi)' }
    ]
  },
  {
    id: 19,
    kanji: '川',
    onyomi: 'セン',
    kunyomi: 'かわ',
    meaning: 'sông',
    hanViet: 'Xuyên',
    topic: 'Địa lý',
    jlptLevel: 'N5',
    examples: [
      { word: '川', reading: 'かわ', meaning: 'sông (Kun-yomi)' },
      { word: '河川', reading: 'かせん', meaning: 'sông ngòi (On-yomi)' },
      { word: '小川', reading: 'おがわ', meaning: 'con suối (Kun-yomi)' }
    ]
  },
  {
    id: 20,
    kanji: '人',
    onyomi: 'ジン、ニン',
    kunyomi: 'ひと',
    meaning: 'người',
    hanViet: 'Nhân',
    topic: 'Con người',
    jlptLevel: 'N5',
    examples: [
      { word: '人', reading: 'ひと', meaning: 'người (Kun-yomi)' },
      { word: '日本人', reading: 'にほんじん', meaning: 'người Nhật Bản (On-yomi)' },
      { word: '外国人', reading: 'がいこくじん', meaning: 'người nước ngoài (On-yomi)' }
    ]
  },
  {
    id: 21,
    kanji: '口',
    onyomi: 'コウ、ク',
    kunyomi: 'くち',
    meaning: 'miệng',
    hanViet: 'Khẩu',
    topic: 'Cơ thể',
    jlptLevel: 'N5',
    examples: [
      { word: '口', reading: 'くち', meaning: 'miệng (Kun-yomi)' },
      { word: '入口', reading: 'いりぐち', meaning: 'lối vào (Kun-yomi)' },
      { word: '出口', reading: 'でぐち', meaning: 'lối ra (Kun-yomi)' }
    ]
  },
  {
    id: 22,
    kanji: '目',
    onyomi: 'モク',
    kunyomi: 'め',
    meaning: 'mắt',
    hanViet: 'Mục',
    topic: 'Cơ thể',
    jlptLevel: 'N5',
    examples: [
      { word: '目', reading: 'め', meaning: 'mắt (Kun-yomi)' },
      { word: '目的', reading: 'もくてき', meaning: 'mục đích (On-yomi)' },
      { word: '注目', reading: 'ちゅうもく', meaning: 'chú ý (On-yomi)' }
    ]
  },
  {
    id: 23,
    kanji: '耳',
    onyomi: 'ジ',
    kunyomi: 'みみ',
    meaning: 'tai',
    hanViet: 'Nhĩ',
    topic: 'Cơ thể',
    jlptLevel: 'N5',
    examples: [
      { word: '耳', reading: 'みみ', meaning: 'tai (Kun-yomi)' },
      { word: '耳鼻科', reading: 'じびか', meaning: 'khoa tai mũi họng (On-yomi)' },
      { word: '中耳炎', reading: 'ちゅうじえん', meaning: 'viêm tai giữa (On-yomi)' }
    ]
  },
  {
    id: 24,
    kanji: '手',
    onyomi: 'シュ',
    kunyomi: 'て',
    meaning: 'tay',
    hanViet: 'Thủ',
    topic: 'Cơ thể',
    jlptLevel: 'N5',
    examples: [
      { word: '手', reading: 'て', meaning: 'tay (Kun-yomi)' },
      { word: '手紙', reading: 'てがみ', meaning: 'thư từ (Kun-yomi)' },
      { word: '上手', reading: 'じょうず', meaning: 'giỏi, khéo (On-yomi)' }
    ]
  },
  {
    id: 25,
    kanji: '足',
    onyomi: 'ソク',
    kunyomi: 'あし',
    meaning: 'chân',
    hanViet: 'Túc',
    topic: 'Cơ thể',
    jlptLevel: 'N5',
    examples: [
      { word: '足', reading: 'あし', meaning: 'chân (Kun-yomi)' },
      { word: '足りる', reading: 'たりる', meaning: 'đủ (Kun-yomi)' },
      { word: '不足', reading: 'ふそく', meaning: 'thiếu (On-yomi)' }
    ]
  },
  {
    id: 26,
    kanji: '子',
    onyomi: 'シ、ス',
    kunyomi: 'こ',
    meaning: 'đứa trẻ',
    hanViet: 'Tử',
    topic: 'Con người',
    jlptLevel: 'N5',
    examples: [
      { word: '子', reading: 'こ', meaning: 'đứa trẻ (Kun-yomi)' },
      { word: '子供', reading: 'こども', meaning: 'trẻ em (Kun-yomi)' },
      { word: '椅子', reading: 'いす', meaning: 'ghế (On-yomi)' }
    ]
  },
  {
    id: 27,
    kanji: '女',
    onyomi: 'ジョ、ニョ',
    kunyomi: 'おんな',
    meaning: 'nữ, phụ nữ',
    hanViet: 'Nữ',
    topic: 'Con người',
    jlptLevel: 'N5',
    examples: [
      { word: '女', reading: 'おんな', meaning: 'phụ nữ (Kun-yomi)' },
      { word: '女性', reading: 'じょせい', meaning: 'nữ giới (On-yomi)' },
      { word: '少女', reading: 'しょうじょ', meaning: 'thiếu nữ (On-yomi)' }
    ]
  },
  {
    id: 28,
    kanji: '男',
    onyomi: 'ダン、ナン',
    kunyomi: 'おとこ',
    meaning: 'nam, đàn ông',
    hanViet: 'Nam',
    topic: 'Con người',
    jlptLevel: 'N5',
    examples: [
      { word: '男', reading: 'おとこ', meaning: 'đàn ông (Kun-yomi)' },
      { word: '男性', reading: 'だんせい', meaning: 'nam giới (On-yomi)' },
      { word: '長男', reading: 'ちょうなん', meaning: 'con trai trưởng (On-yomi)' }
    ]
  },
  {
    id: 29,
    kanji: '父',
    onyomi: 'フ',
    kunyomi: 'ちち',
    meaning: 'cha',
    hanViet: 'Phụ',
    topic: 'Gia đình',
    jlptLevel: 'N5',
    examples: [
      { word: '父', reading: 'ちち', meaning: 'cha (Kun-yomi)' },
      { word: '父親', reading: 'ちちおや', meaning: 'cha (Kun-yomi)' },
      { word: '父母', reading: 'ふぼ', meaning: 'cha mẹ (On-yomi)' }
    ]
  },
  {
    id: 30,
    kanji: '母',
    onyomi: 'ボ',
    kunyomi: 'はは',
    meaning: 'mẹ',
    hanViet: 'Mẫu',
    topic: 'Gia đình',
    jlptLevel: 'N5',
    examples: [
      { word: '母', reading: 'はは', meaning: 'mẹ (Kun-yomi)' },
      { word: '母親', reading: 'ははおや', meaning: 'mẹ (Kun-yomi)' },
      { word: '母国', reading: 'ぼこく', meaning: 'quê mẹ, tổ quốc (On-yomi)' }
    ]
  },
  {
    id: 31,
    kanji: '学',
    onyomi: 'ガク',
    kunyomi: 'まな（ぶ）',
    meaning: 'học',
    hanViet: 'Học',
    topic: 'Giáo dục',
    jlptLevel: 'N5',
    examples: [
      { word: '学校', reading: 'がっこう', meaning: 'trường học (On-yomi)' },
      { word: '大学', reading: 'だいがく', meaning: 'đại học (On-yomi)' },
      { word: '学生', reading: 'がくせい', meaning: 'học sinh, sinh viên (On-yomi)' }
    ]
  },
  {
    id: 32,
    kanji: '校',
    onyomi: 'コウ',
    kunyomi: '',
    meaning: 'trường học',
    hanViet: 'Hiệu',
    topic: 'Giáo dục',
    jlptLevel: 'N5',
    examples: [
      { word: '学校', reading: 'がっこう', meaning: 'trường học (On-yomi)' },
      { word: '校長', reading: 'こうちょう', meaning: 'hiệu trưởng (On-yomi)' },
      { word: '校舎', reading: 'こうしゃ', meaning: 'tòa nhà trường học (On-yomi)' }
    ]
  },
  {
    id: 33,
    kanji: '生',
    onyomi: 'セイ、ショウ',
    kunyomi: 'い（きる）、う（まれる）、なま',
    meaning: 'sống, sinh',
    hanViet: 'Sinh',
    topic: 'Cuộc sống',
    jlptLevel: 'N5',
    examples: [
      { word: '生徒', reading: 'せいと', meaning: 'học sinh (On-yomi)' },
      { word: '学生', reading: 'がくせい', meaning: 'học sinh, sinh viên (On-yomi)' },
      { word: '先生', reading: 'せんせい', meaning: 'giáo viên (On-yomi)' }
    ]
  },
  {
    id: 34,
    kanji: '先',
    onyomi: 'セン',
    kunyomi: 'さき',
    meaning: 'trước, đầu tiên',
    hanViet: 'Tiên',
    topic: 'Thời gian',
    jlptLevel: 'N5',
    examples: [
      { word: '先生', reading: 'せんせい', meaning: 'giáo viên (On-yomi)' },
      { word: '先週', reading: 'せんしゅう', meaning: 'tuần trước (On-yomi)' },
      { word: '先月', reading: 'せんげつ', meaning: 'tháng trước (On-yomi)' }
    ]
  },
  {
    id: 35,
    kanji: '年',
    onyomi: 'ネン',
    kunyomi: 'とし',
    meaning: 'năm',
    hanViet: 'Niên',
    topic: 'Thời gian',
    jlptLevel: 'N5',
    examples: [
      { word: '今年', reading: 'ことし', meaning: 'năm nay (Kun-yomi)' },
      { word: '去年', reading: 'きょねん', meaning: 'năm ngoái (On-yomi)' },
      { word: '来年', reading: 'らいねん', meaning: 'năm sau (On-yomi)' }
    ]
  },
  {
    id: 36,
    kanji: '時',
    onyomi: 'ジ',
    kunyomi: 'とき',
    meaning: 'thời gian, giờ',
    hanViet: 'Thời',
    topic: 'Thời gian',
    jlptLevel: 'N5',
    examples: [
      { word: '時間', reading: 'じかん', meaning: 'thời gian (On-yomi)' },
      { word: '時計', reading: 'とけい', meaning: 'đồng hồ (On-yomi)' },
      { word: '一時', reading: 'いちじ', meaning: '1 giờ (On-yomi)' }
    ]
  },
  {
    id: 37,
    kanji: '分',
    onyomi: 'フン、ブン',
    kunyomi: 'わ（ける）',
    meaning: 'phút, chia',
    hanViet: 'Phân',
    topic: 'Thời gian',
    jlptLevel: 'N5',
    examples: [
      { word: '分', reading: 'ふん', meaning: 'phút (On-yomi)' },
      { word: '時分', reading: 'じぶん', meaning: 'thời gian (On-yomi)' },
      { word: '分ける', reading: 'わける', meaning: 'chia (Kun-yomi)' }
    ]
  },
  {
    id: 38,
    kanji: '今',
    onyomi: 'コン、キン',
    kunyomi: 'いま',
    meaning: 'bây giờ',
    hanViet: 'Kim',
    topic: 'Thời gian',
    jlptLevel: 'N5',
    examples: [
      { word: '今', reading: 'いま', meaning: 'bây giờ (Kun-yomi)' },
      { word: '今日', reading: 'きょう', meaning: 'hôm nay (Kun-yomi)' },
      { word: '今週', reading: 'こんしゅう', meaning: 'tuần này (On-yomi)' }
    ]
  },
  {
    id: 39,
    kanji: '半',
    onyomi: 'ハン',
    kunyomi: 'なか（ば）',
    meaning: 'một nửa',
    hanViet: 'Bán',
    topic: 'Thời gian',
    jlptLevel: 'N5',
    examples: [
      { word: '半分', reading: 'はんぶん', meaning: 'một nửa (On-yomi)' },
      { word: '半年', reading: 'はんとし', meaning: 'nửa năm (On-yomi)' },
      { word: '午前半', reading: 'ごぜんはん', meaning: 'nửa buổi sáng (On-yomi)' }
    ]
  },
  {
    id: 40,
    kanji: '午',
    onyomi: 'ゴ',
    kunyomi: '',
    meaning: 'trưa',
    hanViet: 'Ngọ',
    topic: 'Thời gian',
    jlptLevel: 'N5',
    examples: [
      { word: '午前', reading: 'ごぜん', meaning: 'buổi sáng (On-yomi)' },
      { word: '午後', reading: 'ごご', meaning: 'buổi chiều (On-yomi)' },
      { word: '正午', reading: 'しょうご', meaning: 'trưa (On-yomi)' }
    ]
  },
  {
    id: 41,
    kanji: '前',
    onyomi: 'ゼン',
    kunyomi: 'まえ',
    meaning: 'trước',
    hanViet: 'Tiền',
    topic: 'Vị trí',
    jlptLevel: 'N5',
    examples: [
      { word: '前', reading: 'まえ', meaning: 'phía trước (Kun-yomi)' },
      { word: '午前', reading: 'ごぜん', meaning: 'buổi sáng (On-yomi)' },
      { word: '前年', reading: 'ぜんねん', meaning: 'năm trước (On-yomi)' }
    ]
  },
  {
    id: 42,
    kanji: '後',
    onyomi: 'ゴ、コウ',
    kunyomi: 'あと、うし（ろ）',
    meaning: 'sau',
    hanViet: 'Hậu',
    topic: 'Vị trí',
    jlptLevel: 'N5',
    examples: [
      { word: '後', reading: 'あと', meaning: 'sau (Kun-yomi)' },
      { word: '午後', reading: 'ごご', meaning: 'buổi chiều (On-yomi)' },
      { word: '後ろ', reading: 'うしろ', meaning: 'phía sau (Kun-yomi)' }
    ]
  },
  {
    id: 43,
    kanji: '東',
    onyomi: 'トウ',
    kunyomi: 'ひがし',
    meaning: 'đông',
    hanViet: 'Đông',
    topic: 'Phương hướng',
    jlptLevel: 'N5',
    examples: [
      { word: '東', reading: 'ひがし', meaning: 'phía đông (Kun-yomi)' },
      { word: '東京', reading: 'とうきょう', meaning: 'Tokyo (On-yomi)' },
      { word: '東南', reading: 'とうなん', meaning: 'đông nam (On-yomi)' }
    ]
  },
  {
    id: 44,
    kanji: '西',
    onyomi: 'セイ、サイ',
    kunyomi: 'にし',
    meaning: 'tây',
    hanViet: 'Tây',
    topic: 'Phương hướng',
    jlptLevel: 'N5',
    examples: [
      { word: '西', reading: 'にし', meaning: 'phía tây (Kun-yomi)' },
      { word: '西洋', reading: 'せいよう', meaning: 'phương Tây (On-yomi)' },
      { word: '東西', reading: 'とうざい', meaning: 'đông tây (On-yomi)' }
    ]
  },
  {
    id: 45,
    kanji: '南',
    onyomi: 'ナン',
    kunyomi: 'みなみ',
    meaning: 'nam',
    hanViet: 'Nam',
    topic: 'Phương hướng',
    jlptLevel: 'N5',
    examples: [
      { word: '南', reading: 'みなみ', meaning: 'phía nam (Kun-yomi)' },
      { word: '南口', reading: 'みなみぐち', meaning: 'cửa nam (Kun-yomi)' },
      { word: '南北', reading: 'なんぼく', meaning: 'nam bắc (On-yomi)' }
    ]
  },
  {
    id: 46,
    kanji: '北',
    onyomi: 'ホク',
    kunyomi: 'きた',
    meaning: 'bắc',
    hanViet: 'Bắc',
    topic: 'Phương hướng',
    jlptLevel: 'N5',
    examples: [
      { word: '北', reading: 'きた', meaning: 'phía bắc (Kun-yomi)' },
      { word: '北口', reading: 'きたぐち', meaning: 'cửa bắc (Kun-yomi)' },
      { word: '北極', reading: 'ほっきょく', meaning: 'Bắc Cực (On-yomi)' }
    ]
  },
  {
    id: 47,
    kanji: '右',
    onyomi: 'ウ、ユウ',
    kunyomi: 'みぎ',
    meaning: 'phải',
    hanViet: 'Hữu',
    topic: 'Phương hướng',
    jlptLevel: 'N5',
    examples: [
      { word: '右', reading: 'みぎ', meaning: 'bên phải (Kun-yomi)' },
      { word: '右側', reading: 'みぎがわ', meaning: 'phía bên phải (Kun-yomi)' },
      { word: '左右', reading: 'さゆう', meaning: 'trái phải (On-yomi)' }
    ]
  },
  {
    id: 48,
    kanji: '左',
    onyomi: 'サ',
    kunyomi: 'ひだり',
    meaning: 'trái',
    hanViet: 'Tả',
    topic: 'Phương hướng',
    jlptLevel: 'N5',
    examples: [
      { word: '左', reading: 'ひだり', meaning: 'bên trái (Kun-yomi)' },
      { word: '左側', reading: 'ひだりがわ', meaning: 'phía bên trái (Kun-yomi)' },
      { word: '左右', reading: 'さゆう', meaning: 'trái phải (On-yomi)' }
    ]
  },
  {
    id: 49,
    kanji: '上',
    onyomi: 'ジョウ',
    kunyomi: 'うえ、あ（げる）',
    meaning: 'trên',
    hanViet: 'Thượng',
    topic: 'Vị trí',
    jlptLevel: 'N5',
    examples: [
      { word: '上', reading: 'うえ', meaning: 'phía trên (Kun-yomi)' },
      { word: '上手', reading: 'じょうず', meaning: 'giỏi (On-yomi)' },
      { word: '上がる', reading: 'あがる', meaning: 'lên, tăng (Kun-yomi)' }
    ]
  },
  {
    id: 50,
    kanji: '下',
    onyomi: 'カ、ゲ',
    kunyomi: 'した、さ（げる）、お（りる）',
    meaning: 'dưới',
    hanViet: 'Hạ',
    topic: 'Vị trí',
    jlptLevel: 'N5',
    examples: [
      { word: '下', reading: 'した', meaning: 'phía dưới (Kun-yomi)' },
      { word: '下手', reading: 'へた', meaning: 'vụng về (Kun-yomi)' },
      { word: '上下', reading: 'じょうげ', meaning: 'trên dưới (On-yomi)' }
    ]
  },
  {
    id: 51,
    kanji: '中',
    onyomi: 'チュウ',
    kunyomi: 'なか',
    meaning: 'giữa, trong',
    hanViet: 'Trung',
    topic: 'Vị trí',
    jlptLevel: 'N5',
    examples: [
      { word: '中', reading: 'なか', meaning: 'bên trong (Kun-yomi)' },
      { word: '中国', reading: 'ちゅうごく', meaning: 'Trung Quốc (On-yomi)' },
      { word: '中心', reading: 'ちゅうしん', meaning: 'trung tâm (On-yomi)' }
    ]
  },
  {
    id: 52,
    kanji: '外',
    onyomi: 'ガイ、ゲ',
    kunyomi: 'そと、ほか',
    meaning: 'bên ngoài',
    hanViet: 'Ngoại',
    topic: 'Vị trí',
    jlptLevel: 'N5',
    examples: [
      { word: '外', reading: 'そと', meaning: 'bên ngoài (Kun-yomi)' },
      { word: '外国', reading: 'がいこく', meaning: 'nước ngoài (On-yomi)' },
      { word: '外出', reading: 'がいしゅつ', meaning: 'ra ngoài (On-yomi)' }
    ]
  },
  {
    id: 53,
    kanji: '大',
    onyomi: 'ダイ、タイ',
    kunyomi: 'おお（きい）',
    meaning: 'lớn',
    hanViet: 'Đại',
    topic: 'Kích thước',
    jlptLevel: 'N5',
    examples: [
      { word: '大', reading: 'おおきい', meaning: 'lớn (Kun-yomi)' },
      { word: '大学', reading: 'だいがく', meaning: 'đại học (On-yomi)' },
      { word: '大人', reading: 'おとな', meaning: 'người lớn (Kun-yomi)' }
    ]
  },
  {
    id: 54,
    kanji: '小',
    onyomi: 'ショウ',
    kunyomi: 'ちい（さい）',
    meaning: 'nhỏ',
    hanViet: 'Tiểu',
    topic: 'Kích thước',
    jlptLevel: 'N5',
    examples: [
      { word: '小', reading: 'ちいさい', meaning: 'nhỏ (Kun-yomi)' },
      { word: '小説', reading: 'しょうせつ', meaning: 'tiểu thuyết (On-yomi)' },
      { word: '小学生', reading: 'しょうがくせい', meaning: 'học sinh tiểu học (On-yomi)' }
    ]
  },
  {
    id: 55,
    kanji: '高',
    onyomi: 'コウ',
    kunyomi: 'たか（い）',
    meaning: 'cao',
    hanViet: 'Cao',
    topic: 'Kích thước',
    jlptLevel: 'N5',
    examples: [
      { word: '高', reading: 'たかい', meaning: 'cao (Kun-yomi)' },
      { word: '高校', reading: 'こうこう', meaning: 'trường cấp 3 (On-yomi)' },
      { word: '高齢', reading: 'こうれい', meaning: 'cao tuổi (On-yomi)' }
    ]
  },
  {
    id: 56,
    kanji: '安',
    onyomi: 'アン',
    kunyomi: 'やす（い）',
    meaning: 'rẻ, an toàn',
    hanViet: 'An',
    topic: 'Tính chất',
    jlptLevel: 'N5',
    examples: [
      { word: '安', reading: 'やすい', meaning: 'rẻ (Kun-yomi)' },
      { word: '安全', reading: 'あんぜん', meaning: 'an toàn (On-yomi)' },
      { word: '安心', reading: 'あんしん', meaning: 'yên tâm (On-yomi)' }
    ]
  },
  {
    id: 57,
    kanji: '新',
    onyomi: 'シン',
    kunyomi: 'あたら（しい）',
    meaning: 'mới',
    hanViet: 'Tân',
    topic: 'Tính chất',
    jlptLevel: 'N5',
    examples: [
      { word: '新', reading: 'あたらしい', meaning: 'mới (Kun-yomi)' },
      { word: '新聞', reading: 'しんぶん', meaning: 'báo (On-yomi)' },
      { word: '新年', reading: 'しんねん', meaning: 'năm mới (On-yomi)' }
    ]
  },
  {
    id: 58,
    kanji: '古',
    onyomi: 'コ',
    kunyomi: 'ふる（い）',
    meaning: 'cũ',
    hanViet: 'Cổ',
    topic: 'Tính chất',
    jlptLevel: 'N5',
    examples: [
      { word: '古', reading: 'ふるい', meaning: 'cũ (Kun-yomi)' },
      { word: '古本', reading: 'ふるほん', meaning: 'sách cũ (Kun-yomi)' },
      { word: '古代', reading: 'こだい', meaning: 'thời cổ đại (On-yomi)' }
    ]
  },
  {
    id: 59,
    kanji: '白',
    onyomi: 'ハク、ビャク',
    kunyomi: 'しろ（い）',
    meaning: 'trắng',
    hanViet: 'Bạch',
    topic: 'Màu sắc',
    jlptLevel: 'N5',
    examples: [
      { word: '白', reading: 'しろい', meaning: 'trắng (Kun-yomi)' },
      { word: '白紙', reading: 'はくし', meaning: 'giấy trắng (On-yomi)' },
      { word: '明白', reading: 'めいはく', meaning: 'rõ ràng (On-yomi)' }
    ]
  },
  {
    id: 60,
    kanji: '黒',
    onyomi: 'コク',
    kunyomi: 'くろ（い）',
    meaning: 'đen',
    hanViet: 'Hắc',
    topic: 'Màu sắc',
    jlptLevel: 'N5',
    examples: [
      { word: '黒', reading: 'くろい', meaning: 'đen (Kun-yomi)' },
      { word: '黒板', reading: 'こくばん', meaning: 'bảng đen (On-yomi)' },
      { word: '黒字', reading: 'くろじ', meaning: 'lãi (Kun-yomi)' }
    ]
  },
  {
    id: 61,
    kanji: '赤',
    onyomi: 'セキ、シャク',
    kunyomi: 'あか（い）',
    meaning: 'đỏ',
    hanViet: 'Xích',
    topic: 'Màu sắc',
    jlptLevel: 'N5',
    examples: [
      { word: '赤', reading: 'あかい', meaning: 'đỏ (Kun-yomi)' },
      { word: '赤道', reading: 'せきどう', meaning: 'xích đạo (On-yomi)' },
      { word: '赤ちゃん', reading: 'あかちゃん', meaning: 'em bé (Kun-yomi)' }
    ]
  },
  {
    id: 62,
    kanji: '青',
    onyomi: 'セイ、ショウ',
    kunyomi: 'あお（い）',
    meaning: 'xanh',
    hanViet: 'Thanh',
    topic: 'Màu sắc',
    jlptLevel: 'N5',
    examples: [
      { word: '青', reading: 'あおい', meaning: 'xanh (Kun-yomi)' },
      { word: '青空', reading: 'あおぞら', meaning: 'bầu trời xanh (Kun-yomi)' },
      { word: '青年', reading: 'せいねん', meaning: 'thanh niên (On-yomi)' }
    ]
  },
  {
    id: 63,
    kanji: '多',
    onyomi: 'タ',
    kunyomi: 'おお（い）',
    meaning: 'nhiều',
    hanViet: 'Đa',
    topic: 'Số lượng',
    jlptLevel: 'N5',
    examples: [
      { word: '多', reading: 'おおい', meaning: 'nhiều (Kun-yomi)' },
      { word: '多数', reading: 'たすう', meaning: 'đa số (On-yomi)' },
      { word: '多分', reading: 'たぶん', meaning: 'có lẽ (On-yomi)' }
    ]
  },
  {
    id: 64,
    kanji: '少',
    onyomi: 'ショウ',
    kunyomi: 'すく（ない）、すこ（し）',
    meaning: 'ít',
    hanViet: 'Thiểu',
    topic: 'Số lượng',
    jlptLevel: 'N5',
    examples: [
      { word: '少', reading: 'すくない', meaning: 'ít (Kun-yomi)' },
      { word: '少し', reading: 'すこし', meaning: 'một chút (Kun-yomi)' },
      { word: '少数', reading: 'しょうすう', meaning: 'thiểu số (On-yomi)' }
    ]
  },
  {
    id: 65,
    kanji: '長',
    onyomi: 'チョウ',
    kunyomi: 'なが（い）',
    meaning: 'dài',
    hanViet: 'Trường',
    topic: 'Kích thước',
    jlptLevel: 'N5',
    examples: [
      { word: '長', reading: 'ながい', meaning: 'dài (Kun-yomi)' },
      { word: '長年', reading: 'ながねん', meaning: 'nhiều năm (Kun-yomi)' },
      { word: '長所', reading: 'ちょうしょ', meaning: 'ưu điểm (On-yomi)' }
    ]
  },
  {
    id: 66,
    kanji: '近',
    onyomi: 'キン',
    kunyomi: 'ちか（い）',
    meaning: 'gần',
    hanViet: 'Cận',
    topic: 'Khoảng cách',
    jlptLevel: 'N5',
    examples: [
      { word: '近', reading: 'ちかい', meaning: 'gần (Kun-yomi)' },
      { word: '近所', reading: 'きんじょ', meaning: 'vùng lân cận (On-yomi)' },
      { word: '最近', reading: 'さいきん', meaning: 'gần đây (On-yomi)' }
    ]
  },
  {
    id: 67,
    kanji: '遠',
    onyomi: 'エン',
    kunyomi: 'とお（い）',
    meaning: 'xa',
    hanViet: 'Viễn',
    topic: 'Khoảng cách',
    jlptLevel: 'N5',
    examples: [
      { word: '遠', reading: 'とおい', meaning: 'xa (Kun-yomi)' },
      { word: '遠足', reading: 'えんそく', meaning: 'dã ngoại (On-yomi)' },
      { word: '遠方', reading: 'えんぽう', meaning: 'phương xa (On-yomi)' }
    ]
  },
  {
    id: 68,
    kanji: '明',
    onyomi: 'メイ、ミョウ',
    kunyomi: 'あか（るい）、あ（ける）',
    meaning: 'sáng',
    hanViet: 'Minh',
    topic: 'Ánh sáng',
    jlptLevel: 'N5',
    examples: [
      { word: '明', reading: 'あかるい', meaning: 'sáng (Kun-yomi)' },
      { word: '明日', reading: 'あした', meaning: 'ngày mai (Kun-yomi)' },
      { word: '説明', reading: 'せつめい', meaning: 'giải thích (On-yomi)' }
    ]
  },
  {
    id: 69,
    kanji: '暗',
    onyomi: 'アン',
    kunyomi: 'くら（い）',
    meaning: 'tối',
    hanViet: 'Ám',
    topic: 'Ánh sáng',
    jlptLevel: 'N5',
    examples: [
      { word: '暗', reading: 'くらい', meaning: 'tối (Kun-yomi)' },
      { word: '暗記', reading: 'あんき', meaning: 'học thuộc lòng (On-yomi)' },
      { word: '暗闇', reading: 'くらやみ', meaning: 'bóng tối (Kun-yomi)' }
    ]
  },
  {
    id: 70,
    kanji: '早',
    onyomi: 'ソウ',
    kunyomi: 'はや（い）',
    meaning: 'sớm',
    hanViet: 'Tảo',
    topic: 'Thời gian',
    jlptLevel: 'N5',
    examples: [
      { word: '早', reading: 'はやい', meaning: 'sớm (Kun-yomi)' },
      { word: '早朝', reading: 'そうちょう', meaning: 'sáng sớm (On-yomi)' },
      { word: '早退', reading: 'そうたい', meaning: 'về sớm (On-yomi)' }
    ]
  },
  {
    id: 71,
    kanji: '夕',
    onyomi: 'セキ',
    kunyomi: 'ゆう',
    meaning: 'chiều tối',
    hanViet: 'Tịch',
    topic: 'Thời gian',
    jlptLevel: 'N5',
    examples: [
      { word: '夕', reading: 'ゆう', meaning: 'chiều tối (Kun-yomi)' },
      { word: '夕方', reading: 'ゆうがた', meaning: 'chiều tối (Kun-yomi)' },
      { word: '夕食', reading: 'ゆうしょく', meaning: 'bữa tối (On-yomi)' }
    ]
  },
  {
    id: 72,
    kanji: '夜',
    onyomi: 'ヤ',
    kunyomi: 'よる',
    meaning: 'đêm',
    hanViet: 'Dạ',
    topic: 'Thời gian',
    jlptLevel: 'N5',
    examples: [
      { word: '夜', reading: 'よる', meaning: 'đêm (Kun-yomi)' },
      { word: '夜中', reading: 'よなか', meaning: 'nửa đêm (Kun-yomi)' },
      { word: '夜間', reading: 'やかん', meaning: 'ban đêm (On-yomi)' }
    ]
  },
  {
    id: 73,
    kanji: '春',
    onyomi: 'シュン',
    kunyomi: 'はる',
    meaning: 'mùa xuân',
    hanViet: 'Xuân',
    topic: 'Mùa',
    jlptLevel: 'N5',
    examples: [
      { word: '春', reading: 'はる', meaning: 'mùa xuân (Kun-yomi)' },
      { word: '春休み', reading: 'はるやすみ', meaning: 'nghỉ xuân (Kun-yomi)' },
      { word: '青春', reading: 'せいしゅん', meaning: 'tuổi trẻ (On-yomi)' }
    ]
  },
  {
    id: 74,
    kanji: '夏',
    onyomi: 'カ、ゲ',
    kunyomi: 'なつ',
    meaning: 'mùa hè',
    hanViet: 'Hạ',
    topic: 'Mùa',
    jlptLevel: 'N5',
    examples: [
      { word: '夏', reading: 'なつ', meaning: 'mùa hè (Kun-yomi)' },
      { word: '夏休み', reading: 'なつやすみ', meaning: 'nghỉ hè (Kun-yomi)' },
      { word: '夏祭り', reading: 'なつまつり', meaning: 'lễ hội mùa hè (Kun-yomi)' }
    ]
  },
  {
    id: 75,
    kanji: '秋',
    onyomi: 'シュウ',
    kunyomi: 'あき',
    meaning: 'mùa thu',
    hanViet: 'Thu',
    topic: 'Mùa',
    jlptLevel: 'N5',
    examples: [
      { word: '秋', reading: 'あき', meaning: 'mùa thu (Kun-yomi)' },
      { word: '秋分', reading: 'しゅうぶん', meaning: 'thu phân (On-yomi)' },
      { word: '秋祭り', reading: 'あきまつり', meaning: 'lễ hội mùa thu (Kun-yomi)' }
    ]
  },
  {
    id: 76,
    kanji: '冬',
    onyomi: 'トウ',
    kunyomi: 'ふゆ',
    meaning: 'mùa đông',
    hanViet: 'Đông',
    topic: 'Mùa',
    jlptLevel: 'N5',
    examples: [
      { word: '冬', reading: 'ふゆ', meaning: 'mùa đông (Kun-yomi)' },
      { word: '冬休み', reading: 'ふゆやすみ', meaning: 'nghỉ đông (Kun-yomi)' },
      { word: '冬至', reading: 'とうじ', meaning: 'đông chí (On-yomi)' }
    ]
  },
  {
    id: 77,
    kanji: '書',
    onyomi: 'ショ',
    kunyomi: 'か（く）',
    meaning: 'viết',
    hanViet: 'Thư',
    topic: 'Hành động',
    jlptLevel: 'N5',
    examples: [
      { word: '書', reading: 'かく', meaning: 'viết (Kun-yomi)' },
      { word: '手紙', reading: 'てがみ', meaning: 'thư từ (Kun-yomi)' },
      { word: '書道', reading: 'しょどう', meaning: 'thư pháp (On-yomi)' }
    ]
  },
  {
    id: 78,
    kanji: '読',
    onyomi: 'ドク、トク',
    kunyomi: 'よ（む）',
    meaning: 'đọc',
    hanViet: 'Độc',
    topic: 'Hành động',
    jlptLevel: 'N5',
    examples: [
      { word: '読', reading: 'よむ', meaning: 'đọc (Kun-yomi)' },
      { word: '読書', reading: 'どくしょ', meaning: 'đọc sách (On-yomi)' },
      { word: '読者', reading: 'どくしゃ', meaning: 'độc giả (On-yomi)' }
    ]
  },
  {
    id: 79,
    kanji: '話',
    onyomi: 'ワ',
    kunyomi: 'はな（す）、はなし',
    meaning: 'nói chuyện',
    hanViet: 'Thoại',
    topic: 'Hành động',
    jlptLevel: 'N5',
    examples: [
      { word: '話', reading: 'はなす', meaning: 'nói chuyện (Kun-yomi)' },
      { word: '会話', reading: 'かいわ', meaning: 'hội thoại (On-yomi)' },
      { word: '電話', reading: 'でんわ', meaning: 'điện thoại (On-yomi)' }
    ]
  },
  {
    id: 80,
    kanji: '買',
    onyomi: 'バイ',
    kunyomi: 'か（う）',
    meaning: 'mua',
    hanViet: 'Mãi',
    topic: 'Hành động',
    jlptLevel: 'N5',
    examples: [
      { word: '買', reading: 'かう', meaning: 'mua (Kun-yomi)' },
      { word: '買物', reading: 'かいもの', meaning: 'mua sắm (Kun-yomi)' },
      { word: '売買', reading: 'ばいばい', meaning: 'mua bán (On-yomi)' }
    ]
  },
  {
    id: 81,
    kanji: '売',
    onyomi: 'バイ',
    kunyomi: 'う（る）',
    meaning: 'bán',
    hanViet: 'Mại',
    topic: 'Hành động',
    jlptLevel: 'N5',
    examples: [
      { word: '売', reading: 'うる', meaning: 'bán (Kun-yomi)' },
      { word: '売店', reading: 'ばいてん', meaning: 'cửa hàng (On-yomi)' },
      { word: '販売', reading: 'はんばい', meaning: 'bán hàng (On-yomi)' }
    ]
  },
  {
    id: 82,
    kanji: '食',
    onyomi: 'ショク、ジキ',
    kunyomi: 'た（べる）、く（う）',
    meaning: 'ăn',
    hanViet: 'Thực',
    topic: 'Hành động',
    jlptLevel: 'N5',
    examples: [
      { word: '食', reading: 'たべる', meaning: 'ăn (Kun-yomi)' },
      { word: '食事', reading: 'しょくじ', meaning: 'bữa ăn (On-yomi)' },
      { word: '食堂', reading: 'しょくどう', meaning: 'nhà ăn (On-yomi)' }
    ]
  },
  {
    id: 83,
    kanji: '飲',
    onyomi: 'イン',
    kunyomi: 'の（む）',
    meaning: 'uống',
    hanViet: 'Ẩm',
    topic: 'Hành động',
    jlptLevel: 'N5',
    examples: [
      { word: '飲', reading: 'のむ', meaning: 'uống (Kun-yomi)' },
      { word: '飲料', reading: 'いんりょう', meaning: 'đồ uống (On-yomi)' },
      { word: '飲物', reading: 'のみもの', meaning: 'đồ uống (Kun-yomi)' }
    ]
  },
  {
    id: 84,
    kanji: '見',
    onyomi: 'ケン',
    kunyomi: 'み（る）',
    meaning: 'nhìn',
    hanViet: 'Kiến',
    topic: 'Hành động',
    jlptLevel: 'N5',
    examples: [
      { word: '見', reading: 'みる', meaning: 'nhìn (Kun-yomi)' },
      { word: '見学', reading: 'けんがく', meaning: 'tham quan (On-yomi)' },
      { word: '見物', reading: 'けんぶつ', meaning: 'thăm quan (On-yomi)' }
    ]
  },
  {
    id: 85,
    kanji: '聞',
    onyomi: 'ブン、モン',
    kunyomi: 'き（く）',
    meaning: 'nghe',
    hanViet: 'Văn',
    topic: 'Hành động',
    jlptLevel: 'N5',
    examples: [
      { word: '聞', reading: 'きく', meaning: 'nghe (Kun-yomi)' },
      { word: '新聞', reading: 'しんぶん', meaning: 'báo (On-yomi)' },
      { word: '聞取', reading: 'ききとる', meaning: 'nghe hiểu (Kun-yomi)' }
    ]
  },
  {
    id: 86,
    kanji: '行',
    onyomi: 'コウ、ギョウ、アン',
    kunyomi: 'い（く）、おこな（う）',
    meaning: 'đi',
    hanViet: 'Hành',
    topic: 'Hành động',
    jlptLevel: 'N5',
    examples: [
      { word: '行', reading: 'いく', meaning: 'đi (Kun-yomi)' },
      { word: '旅行', reading: 'りょこう', meaning: 'du lịch (On-yomi)' },
      { word: '銀行', reading: 'ぎんこう', meaning: 'ngân hàng (On-yomi)' }
    ]
  },
  {
    id: 87,
    kanji: '来',
    onyomi: 'ライ',
    kunyomi: 'く（る）',
    meaning: 'đến',
    hanViet: 'Lai',
    topic: 'Hành động',
    jlptLevel: 'N5',
    examples: [
      { word: '来', reading: 'くる', meaning: 'đến (Kun-yomi)' },
      { word: '来年', reading: 'らいねん', meaning: 'năm sau (On-yomi)' },
      { word: '来月', reading: 'らいげつ', meaning: 'tháng sau (On-yomi)' }
    ]
  },
  {
    id: 88,
    kanji: '帰',
    onyomi: 'キ',
    kunyomi: 'かえ（る）',
    meaning: 'về',
    hanViet: 'Quy',
    topic: 'Hành động',
    jlptLevel: 'N5',
    examples: [
      { word: '帰', reading: 'かえる', meaning: 'về (Kun-yomi)' },
      { word: '帰国', reading: 'きこく', meaning: 'về nước (On-yomi)' },
      { word: '帰宅', reading: 'きたく', meaning: 'về nhà (On-yomi)' }
    ]
  },
  {
    id: 89,
    kanji: '住',
    onyomi: 'ジュウ',
    kunyomi: 'す（む）',
    meaning: 'sống',
    hanViet: 'Trú',
    topic: 'Hành động',
    jlptLevel: 'N5',
    examples: [
      { word: '住', reading: 'すむ', meaning: 'sống (Kun-yomi)' },
      { word: '住所', reading: 'じゅうしょ', meaning: 'địa chỉ (On-yomi)' },
      { word: '住居', reading: 'じゅうきょ', meaning: 'nơi ở (On-yomi)' }
    ]
  },
  {
    id: 90,
    kanji: '旅',
    onyomi: 'リョ',
    kunyomi: 'たび',
    meaning: 'du lịch',
    hanViet: 'Lữ',
    topic: 'Hành động',
    jlptLevel: 'N5',
    examples: [
      { word: '旅', reading: 'たび', meaning: 'du lịch (Kun-yomi)' },
      { word: '旅行', reading: 'りょこう', meaning: 'du lịch (On-yomi)' },
      { word: '旅館', reading: 'りょかん', meaning: 'nhà trọ (On-yomi)' }
    ]
  },
  {
    id: 91,
    kanji: '車',
    onyomi: 'シャ',
    kunyomi: 'くるま',
    meaning: 'xe',
    hanViet: 'Xa',
    topic: 'Phương tiện',
    jlptLevel: 'N5',
    examples: [
      { word: '車', reading: 'くるま', meaning: 'xe (Kun-yomi)' },
      { word: '自転車', reading: 'じてんしゃ', meaning: 'xe đạp (On-yomi)' },
      { word: '車両', reading: 'しゃりょう', meaning: 'toa xe (On-yomi)' }
    ]
  },
  {
    id: 92,
    kanji: '電',
    onyomi: 'デン',
    kunyomi: '',
    meaning: 'điện',
    hanViet: 'Điện',
    topic: 'Khoa học',
    jlptLevel: 'N5',
    examples: [
      { word: '電気', reading: 'でんき', meaning: 'điện (On-yomi)' },
      { word: '電話', reading: 'でんわ', meaning: 'điện thoại (On-yomi)' },
      { word: '電車', reading: 'でんしゃ', meaning: 'tàu điện (On-yomi)' }
    ]
  },
  {
    id: 93,
    kanji: '駅',
    onyomi: 'エキ',
    kunyomi: '',
    meaning: 'nhà ga',
    hanViet: 'Dịch',
    topic: 'Giao thông',
    jlptLevel: 'N5',
    examples: [
      { word: '駅', reading: 'えき', meaning: 'nhà ga (On-yomi)' },
      { word: '駅前', reading: 'えきまえ', meaning: 'trước ga (On-yomi)' },
      { word: '駅員', reading: 'えきいん', meaning: 'nhân viên ga (On-yomi)' }
    ]
  },
  {
    id: 94,
    kanji: '社',
    onyomi: 'シャ',
    kunyomi: 'やしろ',
    meaning: 'công ty',
    hanViet: 'Xã',
    topic: 'Tổ chức',
    jlptLevel: 'N5',
    examples: [
      { word: '会社', reading: 'かいしゃ', meaning: 'công ty (On-yomi)' },
      { word: '社長', reading: 'しゃちょう', meaning: 'giám đốc (On-yomi)' },
      { word: '社会', reading: 'しゃかい', meaning: 'xã hội (On-yomi)' }
    ]
  },
  {
    id: 95,
    kanji: '店',
    onyomi: 'テン',
    kunyomi: 'みせ',
    meaning: 'cửa hàng',
    hanViet: 'Điếm',
    topic: 'Kinh doanh',
    jlptLevel: 'N5',
    examples: [
      { word: '店', reading: 'みせ', meaning: 'cửa hàng (Kun-yomi)' },
      { word: '店員', reading: 'てんいん', meaning: 'nhân viên cửa hàng (On-yomi)' },
      { word: '店舗', reading: 'てんぽ', meaning: 'cửa hiệu (On-yomi)' }
    ]
  },
  {
    id: 96,
    kanji: '銀',
    onyomi: 'ギン',
    kunyomi: '',
    meaning: 'bạc',
    hanViet: 'Ngân',
    topic: 'Kim loại',
    jlptLevel: 'N5',
    examples: [
      { word: '銀行', reading: 'ぎんこう', meaning: 'ngân hàng (On-yomi)' },
      { word: '銀座', reading: 'ぎんざ', meaning: 'Ginza (On-yomi)' },
      { word: '銀貨', reading: 'ぎんか', meaning: 'tiền bạc (On-yomi)' }
    ]
  },
  {
    id: 97,
    kanji: '病',
    onyomi: 'ビョウ、ヘイ',
    kunyomi: 'やまい',
    meaning: 'bệnh',
    hanViet: 'Bệnh',
    topic: 'Sức khỏe',
    jlptLevel: 'N5',
    examples: [
      { word: '病気', reading: 'びょうき', meaning: 'bệnh tật (On-yomi)' },
      { word: '病院', reading: 'びょういん', meaning: 'bệnh viện (On-yomi)' },
      { word: '病室', reading: 'びょうしつ', meaning: 'phòng bệnh (On-yomi)' }
    ]
  },
  {
    id: 98,
    kanji: '院',
    onyomi: 'イン',
    kunyomi: '',
    meaning: 'viện',
    hanViet: 'Viện',
    topic: 'Tổ chức',
    jlptLevel: 'N5',
    examples: [
      { word: '病院', reading: 'びょういん', meaning: 'bệnh viện (On-yomi)' },
      { word: '大学院', reading: 'だいがくいん', meaning: 'trường sau đại học (On-yomi)' },
      { word: '入院', reading: 'にゅういん', meaning: 'nhập viện (On-yomi)' }
    ]
  },
  {
    id: 99,
    kanji: '友',
    onyomi: 'ユウ',
    kunyomi: 'とも',
    meaning: 'bạn',
    hanViet: 'Hữu',
    topic: 'Quan hệ',
    jlptLevel: 'N5',
    examples: [
      { word: '友達', reading: 'ともだち', meaning: 'bạn bè (Kun-yomi)' },
      { word: '友情', reading: 'ゆうじょう', meaning: 'tình bạn (On-yomi)' },
      { word: '友好', reading: 'ゆうこう', meaning: 'hữu nghị (On-yomi)' }
    ]
  },
  {
    id: 100,
    kanji: '家',
    onyomi: 'カ、ケ',
    kunyomi: 'いえ、うち',
    meaning: 'nhà',
    hanViet: 'Gia',
    topic: 'Nơi ở',
    jlptLevel: 'N5',
    examples: [
      { word: '家', reading: 'いえ', meaning: 'nhà (Kun-yomi)' },
      { word: '家族', reading: 'かぞく', meaning: 'gia đình (On-yomi)' },
      { word: '家庭', reading: 'かてい', meaning: 'gia đình (On-yomi)' }
    ]
  },
  {
    id: 101,
    kanji: '家族',
    onyomi: 'カゾク',
    kunyomi: '',
    meaning: 'gia đình',
    hanViet: 'Gia tộc',
    topic: 'Gia đình',
    jlptLevel: 'N5',
    examples: [
      { word: '家族', reading: 'かぞく', meaning: 'gia đình (On-yomi)' },
      { word: '家族旅行', reading: 'かぞくりょこう', meaning: 'du lịch gia đình (On-yomi)' },
      { word: '家族写真', reading: 'かぞくしゃしん', meaning: 'ảnh gia đình (On-yomi)' }
    ]
  },
  {
    id: 102,
    kanji: '道',
    onyomi: 'ドウ、トウ',
    kunyomi: 'みち',
    meaning: 'đường',
    hanViet: 'Đạo',
    topic: 'Giao thông',
    jlptLevel: 'N5',
    examples: [
      { word: '道', reading: 'みち', meaning: 'đường (Kun-yomi)' },
      { word: '道路', reading: 'どうろ', meaning: 'đường bộ (On-yomi)' },
      { word: '道徳', reading: 'どうとく', meaning: 'đạo đức (On-yomi)' }
    ]
  },
  {
    id: 103,
    kanji: '通',
    onyomi: 'ツウ、ツ',
    kunyomi: 'とお（る）、かよ（う）',
    meaning: 'thông qua',
    hanViet: 'Thông',
    topic: 'Hành động',
    jlptLevel: 'N5',
    examples: [
      { word: '通', reading: 'とおる', meaning: 'đi qua (Kun-yomi)' },
      { word: '通学', reading: 'つうがく', meaning: 'đi học (On-yomi)' },
      { word: '通勤', reading: 'つうきん', meaning: 'đi làm (On-yomi)' }
    ]
  },
  {
    id: 104,
    kanji: '国',
    onyomi: 'コク',
    kunyomi: 'くに',
    meaning: 'quốc gia',
    hanViet: 'Quốc',
    topic: 'Địa lý',
    jlptLevel: 'N5',
    examples: [
      { word: '国', reading: 'くに', meaning: 'quốc gia (Kun-yomi)' },
      { word: '外国', reading: 'がいこく', meaning: 'nước ngoài (On-yomi)' },
      { word: '国語', reading: 'こくご', meaning: 'tiếng Nhật (On-yomi)' }
    ]
  },
  {
    id: 105,
    kanji: '外',
    onyomi: 'ガイ、ゲ',
    kunyomi: 'そと、ほか',
    meaning: 'bên ngoài',
    hanViet: 'Ngoại',
    topic: 'Vị trí',
    jlptLevel: 'N5',
    examples: [
      { word: '外', reading: 'そと', meaning: 'bên ngoài (Kun-yomi)' },
      { word: '外国', reading: 'がいこく', meaning: 'nước ngoài (On-yomi)' },
      { word: '外出', reading: 'がいしゅつ', meaning: 'ra ngoài (On-yomi)' }
    ]
  },
  {
    id: 106,
    kanji: '内',
    onyomi: 'ナイ、ダイ',
    kunyomi: 'うち',
    meaning: 'bên trong',
    hanViet: 'Nội',
    topic: 'Vị trí',
    jlptLevel: 'N5',
    examples: [
      { word: '内', reading: 'うち', meaning: 'bên trong (Kun-yomi)' },
      { word: '内容', reading: 'ないよう', meaning: 'nội dung (On-yomi)' },
      { word: '室内', reading: 'しつない', meaning: 'trong phòng (On-yomi)' }
    ]
  },
  {
    id: 107,
    kanji: '午前',
    onyomi: 'ゴゼン',
    kunyomi: '',
    meaning: 'buổi sáng',
    hanViet: 'Ngọ tiền',
    topic: 'Thời gian',
    jlptLevel: 'N5',
    examples: [
      { word: '午前', reading: 'ごぜん', meaning: 'buổi sáng (On-yomi)' },
      { word: '午前中', reading: 'ごぜんちゅう', meaning: 'trong buổi sáng (On-yomi)' },
      { word: '午前後', reading: 'ごぜんご', meaning: 'sau buổi sáng (On-yomi)' }
    ]
  },
  {
    id: 108,
    kanji: '午後',
    onyomi: 'ゴゴ',
    kunyomi: '',
    meaning: 'buổi chiều',
    hanViet: 'Ngọ hậu',
    topic: 'Thời gian',
    jlptLevel: 'N5',
    examples: [
      { word: '午後', reading: 'ごご', meaning: 'buổi chiều (On-yomi)' },
      { word: '午後後', reading: 'ごごご', meaning: 'sau buổi chiều (On-yomi)' },
      { word: '午後中', reading: 'ごごちゅう', meaning: 'trong buổi chiều (On-yomi)' }
    ]
  },
  {
    id: 109,
    kanji: '天',
    onyomi: 'テン',
    kunyomi: 'あまつ、あめ',
    meaning: 'trời',
    hanViet: 'Thiên',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '天気', reading: 'てんき', meaning: 'thời tiết (On-yomi)' },
      { word: '天井', reading: 'てんじょう', meaning: 'trần nhà (On-yomi)' },
      { word: '天候', reading: 'てんこう', meaning: 'thời tiết (On-yomi)' }
    ]
  },
  {
    id: 110,
    kanji: '気',
    onyomi: 'キ、ケ',
    kunyomi: '',
    meaning: 'khí, tinh thần',
    hanViet: 'Khí',
    topic: 'Tính chất',
    jlptLevel: 'N5',
    examples: [
      { word: '天気', reading: 'てんき', meaning: 'thời tiết (On-yomi)' },
      { word: '気分', reading: 'きぶん', meaning: 'tâm trạng (On-yomi)' },
      { word: '気持ち', reading: 'きもち', meaning: 'cảm giác (On-yomi)' }
    ]
  },
  {
    id: 111,
    kanji: '空',
    onyomi: 'クウ',
    kunyomi: 'そら、あ（く）、から',
    meaning: 'bầu trời, trống rỗng',
    hanViet: 'Không',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '空', reading: 'そら', meaning: 'bầu trời (Kun-yomi)' },
      { word: '空気', reading: 'くうき', meaning: 'không khí (On-yomi)' },
      { word: '空港', reading: 'くうこう', meaning: 'sân bay (On-yomi)' }
    ]
  },
  {
    id: 112,
    kanji: '雨',
    onyomi: 'ウ',
    kunyomi: 'あめ、あま',
    meaning: 'mưa',
    hanViet: 'Vũ',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '雨', reading: 'あめ', meaning: 'mưa (Kun-yomi)' },
      { word: '雨天', reading: 'うてん', meaning: 'trời mưa (On-yomi)' },
      { word: '雨具', reading: 'あまぐ', meaning: 'đồ mưa (Kun-yomi)' }
    ]
  },
  {
    id: 113,
    kanji: '雪',
    onyomi: 'セツ',
    kunyomi: 'ゆき',
    meaning: 'tuyết',
    hanViet: 'Tuyết',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '雪', reading: 'ゆき', meaning: 'tuyết (Kun-yomi)' },
      { word: '雪国', reading: 'ゆきぐに', meaning: 'xứ tuyết (Kun-yomi)' },
      { word: '雪景色', reading: 'ゆきげしき', meaning: 'cảnh tuyết (Kun-yomi)' }
    ]
  },
  {
    id: 114,
    kanji: '風',
    onyomi: 'フウ、フ',
    kunyomi: 'かぜ、かざ',
    meaning: 'gió',
    hanViet: 'Phong',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '風', reading: 'かぜ', meaning: 'gió (Kun-yomi)' },
      { word: '風邪', reading: 'かぜ', meaning: 'cảm lạnh (Kun-yomi)' },
      { word: '風呂', reading: 'ふろ', meaning: 'bồn tắm (On-yomi)' }
    ]
  },
  {
    id: 115,
    kanji: '雲',
    onyomi: 'ウン',
    kunyomi: 'くも',
    meaning: 'mây',
    hanViet: 'Vân',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '雲', reading: 'くも', meaning: 'mây (Kun-yomi)' },
      { word: '雲海', reading: 'うんかい', meaning: 'biển mây (On-yomi)' },
      { word: '雲行き', reading: 'くもゆき', meaning: 'diễn biến (Kun-yomi)' }
    ]
  },
  {
    id: 116,
    kanji: '星',
    onyomi: 'セイ、ショウ',
    kunyomi: 'ほし',
    meaning: 'ngôi sao',
    hanViet: 'Tinh',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '星', reading: 'ほし', meaning: 'ngôi sao (Kun-yomi)' },
      { word: '星座', reading: 'せいざ', meaning: 'chòm sao (On-yomi)' },
      { word: '星占い', reading: 'ほしうらない', meaning: 'tử vi (Kun-yomi)' }
    ]
  },
  {
    id: 117,
    kanji: '花',
    onyomi: 'カ、ケ',
    kunyomi: 'はな',
    meaning: 'hoa',
    hanViet: 'Hoa',
    topic: 'Thực vật',
    jlptLevel: 'N5',
    examples: [
      { word: '花', reading: 'はな', meaning: 'hoa (Kun-yomi)' },
      { word: '花見', reading: 'はなみ', meaning: 'ngắm hoa (Kun-yomi)' },
      { word: '花火', reading: 'はなび', meaning: 'pháo hoa (Kun-yomi)' }
    ]
  },
  {
    id: 118,
    kanji: '草',
    onyomi: 'ソウ',
    kunyomi: 'くさ',
    meaning: 'cỏ',
    hanViet: 'Thảo',
    topic: 'Thực vật',
    jlptLevel: 'N5',
    examples: [
      { word: '草', reading: 'くさ', meaning: 'cỏ (Kun-yomi)' },
      { word: '草花', reading: 'くさばな', meaning: 'cỏ hoa (Kun-yomi)' },
      { word: '草原', reading: 'そうげん', meaning: 'đồng cỏ (On-yomi)' }
    ]
  },
  {
    id: 119,
    kanji: '木',
    onyomi: 'モク、ボク',
    kunyomi: 'き、こ',
    meaning: 'cây',
    hanViet: 'Mộc',
    topic: 'Thực vật',
    jlptLevel: 'N5',
    examples: [
      { word: '木', reading: 'き', meaning: 'cây (Kun-yomi)' },
      { word: '木曜日', reading: 'もくようび', meaning: 'thứ năm (On-yomi)' },
      { word: '木造', reading: 'もくぞう', meaning: 'làm bằng gỗ (On-yomi)' }
    ]
  },
  {
    id: 120,
    kanji: '森',
    onyomi: 'シン',
    kunyomi: 'もり',
    meaning: 'rừng',
    hanViet: 'Sâm',
    topic: 'Thực vật',
    jlptLevel: 'N5',
    examples: [
      { word: '森', reading: 'もり', meaning: 'rừng (Kun-yomi)' },
      { word: '森林', reading: 'しんりん', meaning: 'rừng rậm (On-yomi)' },
      { word: '森羅万象', reading: 'しんらばんしょう', meaning: 'vạn vật (On-yomi)' }
    ]
  },
  {
    id: 121,
    kanji: '海',
    onyomi: 'カイ',
    kunyomi: 'うみ',
    meaning: 'biển',
    hanViet: 'Hải',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '海', reading: 'うみ', meaning: 'biển (Kun-yomi)' },
      { word: '海岸', reading: 'かいがん', meaning: 'bờ biển (On-yomi)' },
      { word: '海辺', reading: 'うみべ', meaning: 'bờ biển (Kun-yomi)' }
    ]
  },
  {
    id: 122,
    kanji: '川',
    onyomi: 'セン',
    kunyomi: 'かわ',
    meaning: 'sông',
    hanViet: 'Xuyên',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '川', reading: 'かわ', meaning: 'sông (Kun-yomi)' },
      { word: '川辺', reading: 'かわべ', meaning: 'bờ sông (Kun-yomi)' },
      { word: '川口', reading: 'かわぐち', meaning: 'cửa sông (Kun-yomi)' }
    ]
  },
  {
    id: 123,
    kanji: '池',
    onyomi: 'チ',
    kunyomi: 'いけ',
    meaning: 'ao',
    hanViet: 'Trì',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '池', reading: 'いけ', meaning: 'ao (Kun-yomi)' },
      { word: '池田', reading: 'いけだ', meaning: 'tên người (Kun-yomi)' },
      { word: '池袋', reading: 'いけぶくろ', meaning: 'tên địa điểm (Kun-yomi)' }
    ]
  },
  {
    id: 124,
    kanji: '湖',
    onyomi: 'コ',
    kunyomi: 'みずうみ',
    meaning: 'hồ',
    hanViet: 'Hồ',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '湖', reading: 'みずうみ', meaning: 'hồ (Kun-yomi)' },
      { word: '湖岸', reading: 'こがん', meaning: 'bờ hồ (On-yomi)' },
      { word: '湖面', reading: 'こめん', meaning: 'mặt hồ (On-yomi)' }
    ]
  },
  {
    id: 125,
    kanji: '島',
    onyomi: 'トウ',
    kunyomi: 'しま',
    meaning: 'đảo',
    hanViet: 'Đảo',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '島', reading: 'しま', meaning: 'đảo (Kun-yomi)' },
      { word: '島国', reading: 'しまぐに', meaning: 'quốc đảo (Kun-yomi)' },
      { word: '島民', reading: 'とうみん', meaning: 'dân đảo (On-yomi)' }
    ]
  },
  {
    id: 126,
    kanji: '山',
    onyomi: 'サン、セン',
    kunyomi: 'やま',
    meaning: 'núi',
    hanViet: 'Sơn',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '山', reading: 'やま', meaning: 'núi (Kun-yomi)' },
      { word: '山登り', reading: 'やまのぼり', meaning: 'leo núi (Kun-yomi)' },
      { word: '山頂', reading: 'さんちょう', meaning: 'đỉnh núi (On-yomi)' }
    ]
  },
  {
    id: 127,
    kanji: '丘',
    onyomi: 'キュウ',
    kunyomi: 'おか',
    meaning: 'đồi',
    hanViet: 'Khâu',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '丘', reading: 'おか', meaning: 'đồi (Kun-yomi)' },
      { word: '丘陵', reading: 'きゅうりょう', meaning: 'đồi núi (On-yomi)' },
      { word: '丘上', reading: 'きゅうじょう', meaning: 'trên đồi (On-yomi)' }
    ]
  },
  {
    id: 128,
    kanji: '野',
    onyomi: 'ヤ、ショ',
    kunyomi: 'の',
    meaning: 'đồng ruộng',
    hanViet: 'Dã',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '野', reading: 'の', meaning: 'đồng ruộng (Kun-yomi)' },
      { word: '野原', reading: 'のはら', meaning: 'cánh đồng (Kun-yomi)' },
      { word: '野球', reading: 'やきゅう', meaning: 'bóng chày (On-yomi)' }
    ]
  },
  {
    id: 129,
    kanji: '畑',
    onyomi: '',
    kunyomi: 'はたけ',
    meaning: 'ruộng',
    hanViet: 'Điền',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '畑', reading: 'はたけ', meaning: 'ruộng (Kun-yomi)' },
      { word: '畑仕事', reading: 'はたけしごと', meaning: 'công việc đồng ruộng (Kun-yomi)' },
      { word: '畑作', reading: 'はたけさく', meaning: 'trồng trọt (Kun-yomi)' }
    ]
  },
  {
    id: 130,
    kanji: '田',
    onyomi: 'デン',
    kunyomi: 'た',
    meaning: 'ruộng lúa',
    hanViet: 'Điền',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '田', reading: 'た', meaning: 'ruộng lúa (Kun-yomi)' },
      { word: '田舎', reading: 'いなか', meaning: 'nông thôn (Kun-yomi)' },
      { word: '田園', reading: 'でんえん', meaning: 'đồng quê (On-yomi)' }
    ]
  },
  {
    id: 131,
    kanji: '土',
    onyomi: 'ド、ト',
    kunyomi: 'つち',
    meaning: 'đất',
    hanViet: 'Thổ',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '土', reading: 'つち', meaning: 'đất (Kun-yomi)' },
      { word: '土曜日', reading: 'どようび', meaning: 'thứ bảy (On-yomi)' },
      { word: '土産', reading: 'みやげ', meaning: 'quà (Kun-yomi)' }
    ]
  },
  {
    id: 132,
    kanji: '石',
    onyomi: 'セキ、シャク、コク',
    kunyomi: 'いし',
    meaning: 'đá',
    hanViet: 'Thạch',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '石', reading: 'いし', meaning: 'đá (Kun-yomi)' },
      { word: '石橋', reading: 'いしばし', meaning: 'cầu đá (Kun-yomi)' },
      { word: '石炭', reading: 'せきたん', meaning: 'than đá (On-yomi)' }
    ]
  },
  {
    id: 133,
    kanji: '砂',
    onyomi: 'サ、シャ',
    kunyomi: 'すな',
    meaning: 'cát',
    hanViet: 'Sa',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '砂', reading: 'すな', meaning: 'cát (Kun-yomi)' },
      { word: '砂場', reading: 'すなば', meaning: 'bãi cát (Kun-yomi)' },
      { word: '砂漠', reading: 'さばく', meaning: 'sa mạc (On-yomi)' }
    ]
  },
  {
    id: 134,
    kanji: '岩',
    onyomi: 'ガン',
    kunyomi: 'いわ',
    meaning: 'đá tảng',
    hanViet: 'Nham',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '岩', reading: 'いわ', meaning: 'đá tảng (Kun-yomi)' },
      { word: '岩場', reading: 'いわば', meaning: 'bãi đá (Kun-yomi)' },
      { word: '岩石', reading: 'がんせき', meaning: 'đá (On-yomi)' }
    ]
  },
  {
    id: 135,
    kanji: '金',
    onyomi: 'キン、コン、ゴン',
    kunyomi: 'かね、かな',
    meaning: 'vàng, tiền',
    hanViet: 'Kim',
    topic: 'Kim loại',
    jlptLevel: 'N5',
    examples: [
      { word: '金', reading: 'かね', meaning: 'tiền (Kun-yomi)' },
      { word: '金曜日', reading: 'きんようび', meaning: 'thứ sáu (On-yomi)' },
      { word: '金魚', reading: 'きんぎょ', meaning: 'cá vàng (On-yomi)' }
    ]
  },
  {
    id: 136,
    kanji: '銀',
    onyomi: 'ギン',
    kunyomi: 'しろがね',
    meaning: 'bạc',
    hanViet: 'Ngân',
    topic: 'Kim loại',
    jlptLevel: 'N5',
    examples: [
      { word: '銀', reading: 'ぎん', meaning: 'bạc (On-yomi)' },
      { word: '銀河', reading: 'ぎんが', meaning: 'dải ngân hà (On-yomi)' },
      { word: '銀座', reading: 'ぎんざ', meaning: 'tên địa điểm (On-yomi)' }
    ]
  },
  {
    id: 137,
    kanji: '銅',
    onyomi: 'ドウ',
    kunyomi: 'あかがね',
    meaning: 'đồng',
    hanViet: 'Đồng',
    topic: 'Kim loại',
    jlptLevel: 'N5',
    examples: [
      { word: '銅', reading: 'どう', meaning: 'đồng (On-yomi)' },
      { word: '銅像', reading: 'どうぞう', meaning: 'tượng đồng (On-yomi)' },
      { word: '銅貨', reading: 'どうか', meaning: 'tiền xu (On-yomi)' }
    ]
  },
  {
    id: 138,
    kanji: '鉄',
    onyomi: 'テツ',
    kunyomi: 'くろがね',
    meaning: 'sắt',
    hanViet: 'Thiết',
    topic: 'Kim loại',
    jlptLevel: 'N5',
    examples: [
      { word: '鉄', reading: 'てつ', meaning: 'sắt (On-yomi)' },
      { word: '鉄道', reading: 'てつどう', meaning: 'đường sắt (On-yomi)' },
      { word: '鉄橋', reading: 'てっきょう', meaning: 'cầu sắt (On-yomi)' }
    ]
  },
  {
    id: 139,
    kanji: '玉',
    onyomi: 'ギョク',
    kunyomi: 'たま',
    meaning: 'ngọc, viên',
    hanViet: 'Ngọc',
    topic: 'Đá quý',
    jlptLevel: 'N5',
    examples: [
      { word: '玉', reading: 'たま', meaning: 'viên (Kun-yomi)' },
      { word: '玉子', reading: 'たまご', meaning: 'trứng (Kun-yomi)' },
      { word: '玉座', reading: 'ぎょくざ', meaning: 'ngai vàng (On-yomi)' }
    ]
  },
  {
    id: 140,
    kanji: '貝',
    onyomi: 'カイ',
    kunyomi: 'かい',
    meaning: 'vỏ sò',
    hanViet: 'Bối',
    topic: 'Động vật',
    jlptLevel: 'N5',
    examples: [
      { word: '貝', reading: 'かい', meaning: 'vỏ sò (Kun-yomi)' },
      { word: '貝殻', reading: 'かいがら', meaning: 'vỏ sò (Kun-yomi)' },
      { word: '貝類', reading: 'かいるい', meaning: 'động vật thân mềm (On-yomi)' }
    ]
  },
  {
    id: 141,
    kanji: '魚',
    onyomi: 'ギョ',
    kunyomi: 'うお、さかな',
    meaning: 'cá',
    hanViet: 'Ngư',
    topic: 'Động vật',
    jlptLevel: 'N5',
    examples: [
      { word: '魚', reading: 'さかな', meaning: 'cá (Kun-yomi)' },
      { word: '魚屋', reading: 'さかなや', meaning: 'cửa hàng cá (Kun-yomi)' },
      { word: '魚市場', reading: 'うおいちば', meaning: 'chợ cá (Kun-yomi)' }
    ]
  },
  {
    id: 142,
    kanji: '鳥',
    onyomi: 'チョウ',
    kunyomi: 'とり',
    meaning: 'chim',
    hanViet: 'Điểu',
    topic: 'Động vật',
    jlptLevel: 'N5',
    examples: [
      { word: '鳥', reading: 'とり', meaning: 'chim (Kun-yomi)' },
      { word: '鳥居', reading: 'とりい', meaning: 'cổng đền (Kun-yomi)' },
      { word: '鳥類', reading: 'ちょうるい', meaning: 'loài chim (On-yomi)' }
    ]
  },
  {
    id: 143,
    kanji: '虫',
    onyomi: 'チュウ、キ',
    kunyomi: 'むし',
    meaning: 'côn trùng',
    hanViet: 'Trùng',
    topic: 'Động vật',
    jlptLevel: 'N5',
    examples: [
      { word: '虫', reading: 'むし', meaning: 'côn trùng (Kun-yomi)' },
      { word: '虫歯', reading: 'むしば', meaning: 'sâu răng (Kun-yomi)' },
      { word: '昆虫', reading: 'こんちゅう', meaning: 'côn trùng (On-yomi)' }
    ]
  },
  {
    id: 144,
    kanji: '犬',
    onyomi: 'ケン',
    kunyomi: 'いぬ',
    meaning: 'chó',
    hanViet: 'Khuyển',
    topic: 'Động vật',
    jlptLevel: 'N5',
    examples: [
      { word: '犬', reading: 'いぬ', meaning: 'chó (Kun-yomi)' },
      { word: '犬小屋', reading: 'いぬごや', meaning: 'chuồng chó (Kun-yomi)' },
      { word: '犬歯', reading: 'けんし', meaning: 'răng nanh (On-yomi)' }
    ]
  },
  {
    id: 145,
    kanji: '猫',
    onyomi: 'ビョウ',
    kunyomi: 'ねこ',
    meaning: 'mèo',
    hanViet: 'Miêu',
    topic: 'Động vật',
    jlptLevel: 'N5',
    examples: [
      { word: '猫', reading: 'ねこ', meaning: 'mèo (Kun-yomi)' },
      { word: '猫背', reading: 'ねこぜ', meaning: 'gù lưng (Kun-yomi)' },
      { word: '猫舌', reading: 'ねこじた', meaning: 'không ăn được đồ nóng (Kun-yomi)' }
    ]
  },
  {
    id: 146,
    kanji: '馬',
    onyomi: 'バ、マ',
    kunyomi: 'うま、ま',
    meaning: 'ngựa',
    hanViet: 'Mã',
    topic: 'Động vật',
    jlptLevel: 'N5',
    examples: [
      { word: '馬', reading: 'うま', meaning: 'ngựa (Kun-yomi)' },
      { word: '馬車', reading: 'ばしゃ', meaning: 'xe ngựa (On-yomi)' },
      { word: '馬場', reading: 'ばば', meaning: 'bãi đua ngựa (On-yomi)' }
    ]
  },
  {
    id: 147,
    kanji: '牛',
    onyomi: 'ギュウ',
    kunyomi: 'うし',
    meaning: 'bò',
    hanViet: 'Ngưu',
    topic: 'Động vật',
    jlptLevel: 'N5',
    examples: [
      { word: '牛', reading: 'うし', meaning: 'bò (Kun-yomi)' },
      { word: '牛肉', reading: 'ぎゅうにく', meaning: 'thịt bò (On-yomi)' },
      { word: '牛乳', reading: 'ぎゅうにゅう', meaning: 'sữa bò (On-yomi)' }
    ]
  },
  {
    id: 148,
    kanji: '羊',
    onyomi: 'ヨウ',
    kunyomi: 'ひつじ',
    meaning: 'cừu',
    hanViet: 'Dương',
    topic: 'Động vật',
    jlptLevel: 'N5',
    examples: [
      { word: '羊', reading: 'ひつじ', meaning: 'cừu (Kun-yomi)' },
      { word: '羊飼い', reading: 'ひつじかい', meaning: 'người chăn cừu (Kun-yomi)' },
      { word: '羊毛', reading: 'ようもう', meaning: 'lông cừu (On-yomi)' }
    ]
  },
  {
    id: 149,
    kanji: '豚',
    onyomi: 'トン',
    kunyomi: 'ぶた',
    meaning: 'lợn',
    hanViet: 'Đồn',
    topic: 'Động vật',
    jlptLevel: 'N5',
    examples: [
      { word: '豚', reading: 'ぶた', meaning: 'lợn (Kun-yomi)' },
      { word: '豚肉', reading: 'ぶたにく', meaning: 'thịt lợn (Kun-yomi)' },
      { word: '豚小屋', reading: 'ぶたごや', meaning: 'chuồng lợn (Kun-yomi)' }
    ]
  },
  {
    id: 150,
    kanji: '鶏',
    onyomi: 'ケイ',
    kunyomi: 'にわとり',
    meaning: 'gà',
    hanViet: 'Kê',
    topic: 'Động vật',
    jlptLevel: 'N5',
    examples: [
      { word: '鶏', reading: 'にわとり', meaning: 'gà (Kun-yomi)' },
      { word: '鶏肉', reading: 'けいにく', meaning: 'thịt gà (On-yomi)' },
      { word: '鶏卵', reading: 'けいらん', meaning: 'trứng gà (On-yomi)' }
    ]
  },
  {
    id: 151,
    kanji: '午前',
    onyomi: 'ゴゼン',
    kunyomi: '',
    meaning: 'buổi sáng',
    hanViet: 'Ngọ Tiền',
    topic: 'Thời gian',
    jlptLevel: 'N5',
    examples: [
      { word: '午前', reading: 'ごぜん', meaning: 'buổi sáng (On-yomi)' },
      { word: '午前中', reading: 'ごぜんちゅう', meaning: 'trong buổi sáng (On-yomi)' },
      { word: '午前後', reading: 'ごぜんご', meaning: 'sau buổi sáng (On-yomi)' }
    ]
  },
  {
    id: 152,
    kanji: '午後',
    onyomi: 'ゴゴ',
    kunyomi: '',
    meaning: 'buổi chiều',
    hanViet: 'Ngọ Hậu',
    topic: 'Thời gian',
    jlptLevel: 'N5',
    examples: [
      { word: '午後', reading: 'ごご', meaning: 'buổi chiều (On-yomi)' },
      { word: '午後中', reading: 'ごごちゅう', meaning: 'trong buổi chiều (On-yomi)' },
      { word: '午後後', reading: 'ごごご', meaning: 'sau buổi chiều (On-yomi)' }
    ]
  },
  {
    id: 153,
    kanji: '家族',
    onyomi: 'カゾク',
    kunyomi: '',
    meaning: 'gia đình',
    hanViet: 'Gia Tộc',
    topic: 'Gia đình',
    jlptLevel: 'N5',
    examples: [
      { word: '家族', reading: 'かぞく', meaning: 'gia đình (On-yomi)' },
      { word: '家族旅行', reading: 'かぞくりょこう', meaning: 'du lịch gia đình (On-yomi)' },
      { word: '家族写真', reading: 'かぞくしゃしん', meaning: 'ảnh gia đình (On-yomi)' }
    ]
  },
  {
    id: 154,
    kanji: '医',
    onyomi: 'イ',
    kunyomi: '',
    meaning: 'bác sĩ, y học',
    hanViet: 'Y',
    topic: 'Y tế',
    jlptLevel: 'N5',
    examples: [
      { word: '医者', reading: 'いしゃ', meaning: 'bác sĩ (On-yomi)' },
      { word: '医師', reading: 'いし', meaning: 'bác sĩ (On-yomi)' },
      { word: '医学', reading: 'いがく', meaning: 'y học (On-yomi)' }
    ]
  },
  {
    id: 155,
    kanji: '意',
    onyomi: 'イ',
    kunyomi: '',
    meaning: 'ý nghĩa, ý chí',
    hanViet: 'Ý',
    topic: 'Tư tưởng',
    jlptLevel: 'N5',
    examples: [
      { word: '意味', reading: 'いみ', meaning: 'ý nghĩa (On-yomi)' },
      { word: '意見', reading: 'いけん', meaning: 'ý kiến (On-yomi)' },
      { word: '意志', reading: 'いし', meaning: 'ý chí (On-yomi)' }
    ]
  },
  {
    id: 156,
    kanji: '以',
    onyomi: 'イ',
    kunyomi: '',
    meaning: 'để, dùng để',
    hanViet: 'Dĩ',
    topic: 'Từ nối',
    jlptLevel: 'N5',
    examples: [
      { word: '以上', reading: 'いじょう', meaning: 'trở lên (On-yomi)' },
      { word: '以下', reading: 'いか', meaning: 'trở xuống (On-yomi)' },
      { word: '以内', reading: 'いない', meaning: 'trong vòng (On-yomi)' }
    ]
  },
  {
    id: 157,
    kanji: '引',
    onyomi: 'イン',
    kunyomi: 'ひく、ひける',
    meaning: 'kéo, rút',
    hanViet: 'Dẫn',
    topic: 'Động tác',
    jlptLevel: 'N5',
    examples: [
      { word: '引く', reading: 'ひく', meaning: 'kéo (Kun-yomi)' },
      { word: '引っ張る', reading: 'ひっぱる', meaning: 'kéo mạnh (Kun-yomi)' },
      { word: '引用', reading: 'いんよう', meaning: 'trích dẫn (On-yomi)' }
    ]
  },
  {
    id: 158,
    kanji: '員',
    onyomi: 'イン',
    kunyomi: '',
    meaning: 'thành viên',
    hanViet: 'Viên',
    topic: 'Tổ chức',
    jlptLevel: 'N5',
    examples: [
      { word: '社員', reading: 'しゃいん', meaning: 'nhân viên công ty (On-yomi)' },
      { word: '会員', reading: 'かいいん', meaning: 'hội viên (On-yomi)' },
      { word: '職員', reading: 'しょくいん', meaning: 'nhân viên (On-yomi)' }
    ]
  },
  {
    id: 159,
    kanji: '運',
    onyomi: 'ウン',
    kunyomi: 'はこぶ',
    meaning: 'vận chuyển, vận mệnh',
    hanViet: 'Vận',
    topic: 'Vận chuyển',
    jlptLevel: 'N5',
    examples: [
      { word: '運ぶ', reading: 'はこぶ', meaning: 'vận chuyển (Kun-yomi)' },
      { word: '運転', reading: 'うんてん', meaning: 'lái xe (On-yomi)' },
      { word: '運命', reading: 'うんめい', meaning: 'vận mệnh (On-yomi)' }
    ]
  },
  {
    id: 160,
    kanji: '英',
    onyomi: 'エイ',
    kunyomi: '',
    meaning: 'Anh, xuất sắc',
    hanViet: 'Anh',
    topic: 'Quốc gia',
    jlptLevel: 'N5',
    examples: [
      { word: '英語', reading: 'えいご', meaning: 'tiếng Anh (On-yomi)' },
      { word: '英国', reading: 'えいこく', meaning: 'nước Anh (On-yomi)' },
      { word: '英雄', reading: 'えいゆう', meaning: 'anh hùng (On-yomi)' }
    ]
  },
  {
    id: 161,
    kanji: '映',
    onyomi: 'エイ',
    kunyomi: 'うつる、うつす',
    meaning: 'chiếu, phản ánh',
    hanViet: 'Ánh',
    topic: 'Hình ảnh',
    jlptLevel: 'N5',
    examples: [
      { word: '映る', reading: 'うつる', meaning: 'được phản ánh (Kun-yomi)' },
      { word: '映す', reading: 'うつす', meaning: 'phản ánh (Kun-yomi)' },
      { word: '映画', reading: 'えいが', meaning: 'phim ảnh (On-yomi)' }
    ]
  },
  {
    id: 162,
    kanji: '屋',
    onyomi: 'オク',
    kunyomi: 'や',
    meaning: 'nhà, cửa hàng',
    hanViet: 'Ốc',
    topic: 'Nhà cửa',
    jlptLevel: 'N5',
    examples: [
      { word: '屋', reading: 'や', meaning: 'cửa hàng (Kun-yomi)' },
      { word: '屋上', reading: 'おくじょう', meaning: 'sân thượng (On-yomi)' },
      { word: '屋根', reading: 'やね', meaning: 'mái nhà (Kun-yomi)' }
    ]
  },
  {
    id: 163,
    kanji: '音',
    onyomi: 'オン、イン',
    kunyomi: 'おと、ね',
    meaning: 'âm thanh',
    hanViet: 'Âm',
    topic: 'Âm thanh',
    jlptLevel: 'N5',
    examples: [
      { word: '音', reading: 'おと', meaning: 'âm thanh (Kun-yomi)' },
      { word: '音楽', reading: 'おんがく', meaning: 'âm nhạc (On-yomi)' },
      { word: '音声', reading: 'おんせい', meaning: 'giọng nói (On-yomi)' }
    ]
  },
  {
    id: 164,
    kanji: '歌',
    onyomi: 'カ',
    kunyomi: 'うた、うたう',
    meaning: 'bài hát, hát',
    hanViet: 'Ca',
    topic: 'Âm nhạc',
    jlptLevel: 'N5',
    examples: [
      { word: '歌', reading: 'うた', meaning: 'bài hát (Kun-yomi)' },
      { word: '歌う', reading: 'うたう', meaning: 'hát (Kun-yomi)' },
      { word: '歌手', reading: 'かしゅ', meaning: 'ca sĩ (On-yomi)' }
    ]
  },
  {
    id: 165,
    kanji: '画',
    onyomi: 'ガ、カク',
    kunyomi: 'えがく',
    meaning: 'bức tranh, vẽ',
    hanViet: 'Họa',
    topic: 'Nghệ thuật',
    jlptLevel: 'N5',
    examples: [
      { word: '画', reading: 'が', meaning: 'bức tranh (On-yomi)' },
      { word: '画家', reading: 'がか', meaning: 'họa sĩ (On-yomi)' },
      { word: '映画', reading: 'えいが', meaning: 'phim ảnh (On-yomi)' }
    ]
  },
  {
    id: 166,
    kanji: '回',
    onyomi: 'カイ、エ',
    kunyomi: 'まわる、まわす',
    meaning: 'lần, quay lại',
    hanViet: 'Hồi',
    topic: 'Số lượng',
    jlptLevel: 'N5',
    examples: [
      { word: '回る', reading: 'まわる', meaning: 'quay (Kun-yomi)' },
      { word: '回す', reading: 'まわす', meaning: 'quay (Kun-yomi)' },
      { word: '一回', reading: 'いっかい', meaning: 'một lần (On-yomi)' }
    ]
  },
  {
    id: 167,
    kanji: '界',
    onyomi: 'カイ',
    kunyomi: '',
    meaning: 'giới, thế giới',
    hanViet: 'Giới',
    topic: 'Xã hội',
    jlptLevel: 'N5',
    examples: [
      { word: '世界', reading: 'せかい', meaning: 'thế giới (On-yomi)' },
      { word: '学界', reading: 'がっかい', meaning: 'giới học thuật (On-yomi)' },
      { word: '芸能界', reading: 'げいのうかい', meaning: 'giới giải trí (On-yomi)' }
    ]
  },
  {
    id: 168,
    kanji: '楽',
    onyomi: 'ガク、ラク',
    kunyomi: 'たのしい、たのしむ',
    meaning: 'vui vẻ, âm nhạc',
    hanViet: 'Lạc',
    topic: 'Cảm xúc',
    jlptLevel: 'N5',
    examples: [
      { word: '楽しい', reading: 'たのしい', meaning: 'vui vẻ (Kun-yomi)' },
      { word: '楽器', reading: 'がっき', meaning: 'nhạc cụ (On-yomi)' },
      { word: '音楽', reading: 'おんがく', meaning: 'âm nhạc (On-yomi)' }
    ]
  },
  {
    id: 169,
    kanji: '館',
    onyomi: 'カン',
    kunyomi: 'やかた',
    meaning: 'tòa nhà, quán',
    hanViet: 'Quán',
    topic: 'Công trình',
    jlptLevel: 'N5',
    examples: [
      { word: '館', reading: 'やかた', meaning: 'tòa nhà (Kun-yomi)' },
      { word: '図書館', reading: 'としょかん', meaning: 'thư viện (On-yomi)' },
      { word: '映画館', reading: 'えいがかん', meaning: 'rạp chiếu phim (On-yomi)' }
    ]
  },
  {
    id: 170,
    kanji: '漢',
    onyomi: 'カン',
    kunyomi: '',
    meaning: 'Hán, Trung Quốc',
    hanViet: 'Hán',
    topic: 'Quốc gia',
    jlptLevel: 'N5',
    examples: [
      { word: '漢字', reading: 'かんじ', meaning: 'chữ Hán (On-yomi)' },
      { word: '漢方', reading: 'かんぽう', meaning: 'thuốc Đông y (On-yomi)' },
      { word: '漢文', reading: 'かんぶん', meaning: 'văn chương Hán (On-yomi)' }
    ]
  },
  {
    id: 171,
    kanji: '寒',
    onyomi: 'カン',
    kunyomi: 'さむい',
    meaning: 'lạnh',
    hanViet: 'Hàn',
    topic: 'Thời tiết',
    jlptLevel: 'N5',
    examples: [
      { word: '寒い', reading: 'さむい', meaning: 'lạnh (Kun-yomi)' },
      { word: '寒気', reading: 'かんき', meaning: 'không khí lạnh (On-yomi)' },
      { word: '寒波', reading: 'かんぱ', meaning: 'đợt lạnh (On-yomi)' }
    ]
  },
  {
    id: 172,
    kanji: '顔',
    onyomi: 'ガン',
    kunyomi: 'かお',
    meaning: 'khuôn mặt',
    hanViet: 'Nhan',
    topic: 'Cơ thể',
    jlptLevel: 'N5',
    examples: [
      { word: '顔', reading: 'かお', meaning: 'khuôn mặt (Kun-yomi)' },
      { word: '顔色', reading: 'かおいろ', meaning: 'sắc mặt (Kun-yomi)' },
      { word: '顔面', reading: 'がんめん', meaning: 'khuôn mặt (On-yomi)' }
    ]
  },
  {
    id: 173,
    kanji: '起',
    onyomi: 'キ',
    kunyomi: 'おきる、おこす',
    meaning: 'dậy, bắt đầu',
    hanViet: 'Khởi',
    topic: 'Động tác',
    jlptLevel: 'N5',
    examples: [
      { word: '起きる', reading: 'おきる', meaning: 'dậy (Kun-yomi)' },
      { word: '起こす', reading: 'おこす', meaning: 'đánh thức (Kun-yomi)' },
      { word: '起立', reading: 'きりつ', meaning: 'đứng dậy (On-yomi)' }
    ]
  },
  {
    id: 174,
    kanji: '究',
    onyomi: 'キュウ',
    kunyomi: 'きわめる',
    meaning: 'nghiên cứu',
    hanViet: 'Cứu',
    topic: 'Học tập',
    jlptLevel: 'N5',
    examples: [
      { word: '究める', reading: 'きわめる', meaning: 'nghiên cứu (Kun-yomi)' },
      { word: '研究', reading: 'けんきゅう', meaning: 'nghiên cứu (On-yomi)' },
      { word: '究明', reading: 'きゅうめい', meaning: 'làm rõ (On-yomi)' }
    ]
  },
  {
    id: 175,
    kanji: '急',
    onyomi: 'キュウ',
    kunyomi: 'いそぐ',
    meaning: 'gấp, vội',
    hanViet: 'Cấp',
    topic: 'Tính chất',
    jlptLevel: 'N5',
    examples: [
      { word: '急ぐ', reading: 'いそぐ', meaning: 'vội (Kun-yomi)' },
      { word: '急行', reading: 'きゅうこう', meaning: 'tàu tốc hành (On-yomi)' },
      { word: '急用', reading: 'きゅうよう', meaning: 'việc gấp (On-yomi)' }
    ]
  },
  {
    id: 176,
    kanji: '去',
    onyomi: 'キョ、コ',
    kunyomi: 'さる',
    meaning: 'đi, rời đi',
    hanViet: 'Khứ',
    topic: 'Động tác',
    jlptLevel: 'N5',
    examples: [
      { word: '去る', reading: 'さる', meaning: 'rời đi (Kun-yomi)' },
      { word: '去年', reading: 'きょねん', meaning: 'năm ngoái (On-yomi)' },
      { word: '過去', reading: 'かこ', meaning: 'quá khứ (On-yomi)' }
    ]
  },
  {
    id: 177,
    kanji: '京',
    onyomi: 'キョウ、ケイ',
    kunyomi: 'みやこ',
    meaning: 'thủ đô, kinh đô',
    hanViet: 'Kinh',
    topic: 'Địa điểm',
    jlptLevel: 'N5',
    examples: [
      { word: '京', reading: 'みやこ', meaning: 'kinh đô (Kun-yomi)' },
      { word: '東京', reading: 'とうきょう', meaning: 'Tokyo (On-yomi)' },
      { word: '京都', reading: 'きょうと', meaning: 'Kyoto (On-yomi)' }
    ]
  },
  {
    id: 178,
    kanji: '強',
    onyomi: 'キョウ、ゴウ',
    kunyomi: 'つよい、しいる',
    meaning: 'mạnh, cưỡng bức',
    hanViet: 'Cường',
    topic: 'Tính chất',
    jlptLevel: 'N5',
    examples: [
      { word: '強い', reading: 'つよい', meaning: 'mạnh (Kun-yomi)' },
      { word: '強制', reading: 'きょうせい', meaning: 'cưỡng bức (On-yomi)' },
      { word: '強化', reading: 'きょうか', meaning: 'tăng cường (On-yomi)' }
    ]
  },
  {
    id: 179,
    kanji: '教',
    onyomi: 'キョウ',
    kunyomi: 'おしえる、おそわる',
    meaning: 'dạy, giáo dục',
    hanViet: 'Giáo',
    topic: 'Giáo dục',
    jlptLevel: 'N5',
    examples: [
      { word: '教える', reading: 'おしえる', meaning: 'dạy (Kun-yomi)' },
      { word: '教わる', reading: 'おそわる', meaning: 'học (Kun-yomi)' },
      { word: '教育', reading: 'きょういく', meaning: 'giáo dục (On-yomi)' }
    ]
  },
  {
    id: 180,
    kanji: '近',
    onyomi: 'キン、コン',
    kunyomi: 'ちかい',
    meaning: 'gần, gần đây',
    hanViet: 'Cận',
    topic: 'Vị trí',
    jlptLevel: 'N5',
    examples: [
      { word: '近い', reading: 'ちかい', meaning: 'gần (Kun-yomi)' },
      { word: '近所', reading: 'きんじょ', meaning: 'vùng lân cận (On-yomi)' },
      { word: '最近', reading: 'さいきん', meaning: 'gần đây (On-yomi)' }
    ]
  },
  {
    id: 181,
    kanji: '金',
    onyomi: 'キン、コン、ゴン',
    kunyomi: 'かね、かな',
    meaning: 'vàng, tiền',
    hanViet: 'Kim',
    topic: 'Tài chính',
    jlptLevel: 'N5',
    examples: [
      { word: '金', reading: 'かね', meaning: 'tiền (Kun-yomi)' },
      { word: '金曜日', reading: 'きんようび', meaning: 'thứ Sáu (On-yomi)' },
      { word: '金銭', reading: 'きんせん', meaning: 'tiền bạc (On-yomi)' }
    ]
  },
  {
    id: 182,
    kanji: '九',
    onyomi: 'キュウ、ク',
    kunyomi: 'ここの、ここのつ',
    meaning: 'chín, số 9',
    hanViet: 'Cửu',
    topic: 'Số đếm',
    jlptLevel: 'N5',
    examples: [
      { word: '九', reading: 'ここの', meaning: 'chín (Kun-yomi)' },
      { word: '九月', reading: 'くがつ', meaning: 'tháng Chín (On-yomi)' },
      { word: '九州', reading: 'きゅうしゅう', meaning: 'Kyushu (On-yomi)' }
    ]
  },
  {
    id: 183,
    kanji: '休',
    onyomi: 'キュウ',
    kunyomi: 'やすむ、やすみ',
    meaning: 'nghỉ ngơi',
    hanViet: 'Hưu',
    topic: 'Hoạt động',
    jlptLevel: 'N5',
    examples: [
      { word: '休む', reading: 'やすむ', meaning: 'nghỉ ngơi (Kun-yomi)' },
      { word: '休み', reading: 'やすみ', meaning: 'kỳ nghỉ (Kun-yomi)' },
      { word: '休日', reading: 'きゅうじつ', meaning: 'ngày nghỉ (On-yomi)' }
    ]
  },
  {
    id: 184,
    kanji: '空',
    onyomi: 'クウ',
    kunyomi: 'から、そら、あく、あける',
    meaning: 'trống rỗng, bầu trời',
    hanViet: 'Không',
    topic: 'Tính chất',
    jlptLevel: 'N5',
    examples: [
      { word: '空', reading: 'そら', meaning: 'bầu trời (Kun-yomi)' },
      { word: '空く', reading: 'あく', meaning: 'trống (Kun-yomi)' },
      { word: '空港', reading: 'くうこう', meaning: 'sân bay (On-yomi)' }
    ]
  },
  {
    id: 185,
    kanji: '口',
    onyomi: 'コウ、ク',
    kunyomi: 'くち',
    meaning: 'miệng, cửa',
    hanViet: 'Khẩu',
    topic: 'Cơ thể',
    jlptLevel: 'N5',
    examples: [
      { word: '口', reading: 'くち', meaning: 'miệng (Kun-yomi)' },
      { word: '入口', reading: 'いりぐち', meaning: 'cửa vào (Kun-yomi)' },
      { word: '出口', reading: 'でぐち', meaning: 'cửa ra (Kun-yomi)' }
    ]
  },
  {
    id: 186,
    kanji: '工',
    onyomi: 'コウ、ク、グ',
    kunyomi: 'たくみ',
    meaning: 'công việc, công nghiệp',
    hanViet: 'Công',
    topic: 'Công việc',
    jlptLevel: 'N5',
    examples: [
      { word: '工', reading: 'たくみ', meaning: 'thợ thủ công (Kun-yomi)' },
      { word: '工業', reading: 'こうぎょう', meaning: 'công nghiệp (On-yomi)' },
      { word: '工場', reading: 'こうじょう', meaning: 'nhà máy (On-yomi)' }
    ]
  },
  {
    id: 187,
    kanji: '公',
    onyomi: 'コウ',
    kunyomi: 'おおやけ',
    meaning: 'công cộng, công khai',
    hanViet: 'Công',
    topic: 'Xã hội',
    jlptLevel: 'N5',
    examples: [
      { word: '公', reading: 'おおやけ', meaning: 'công cộng (Kun-yomi)' },
      { word: '公園', reading: 'こうえん', meaning: 'công viên (On-yomi)' },
      { word: '公共', reading: 'こうきょう', meaning: 'công cộng (On-yomi)' }
    ]
  },
  {
    id: 188,
    kanji: '光',
    onyomi: 'コウ',
    kunyomi: 'ひかり、ひかる',
    meaning: 'ánh sáng',
    hanViet: 'Quang',
    topic: 'Thiên nhiên',
    jlptLevel: 'N5',
    examples: [
      { word: '光', reading: 'ひかり', meaning: 'ánh sáng (Kun-yomi)' },
      { word: '光る', reading: 'ひかる', meaning: 'phát sáng (Kun-yomi)' },
      { word: '光線', reading: 'こうせん', meaning: 'tia sáng (On-yomi)' }
    ]
  },
  {
    id: 189,
    kanji: '後',
    onyomi: 'ゴ、コウ',
    kunyomi: 'あと、のち、うしろ',
    meaning: 'sau, phía sau',
    hanViet: 'Hậu',
    topic: 'Vị trí',
    jlptLevel: 'N5',
    examples: [
      { word: '後', reading: 'あと', meaning: 'sau (Kun-yomi)' },
      { word: '後ろ', reading: 'うしろ', meaning: 'phía sau (Kun-yomi)' },
      { word: '午後', reading: 'ごご', meaning: 'buổi chiều (On-yomi)' }
    ]
  },
  {
    id: 191,
    kanji: '後',
    onyomi: 'ゴ、コウ',
    kunyomi: 'あと、のち、うしろ',
    meaning: 'sau, phía sau',
    hanViet: 'Hậu',
    topic: 'Vị trí',
    jlptLevel: 'N5',
    examples: [
      { word: '後', reading: 'あと', meaning: 'sau (Kun-yomi)' },
      { word: '後ろ', reading: 'うしろ', meaning: 'phía sau (Kun-yomi)' },
      { word: '午後', reading: 'ごご', meaning: 'buổi chiều (On-yomi)' }
    ]
  },
  {
    id: 192,
    kanji: '考',
    onyomi: 'コウ',
    kunyomi: 'かんがえる',
    meaning: 'suy nghĩ, cân nhắc',
    hanViet: 'Khảo',
    topic: 'Hoạt động tinh thần',
    jlptLevel: 'N5',
    examples: [
      { word: '考える', reading: 'かんがえる', meaning: 'suy nghĩ (Kun-yomi)' },
      { word: '思考', reading: 'しこう', meaning: 'tư duy (On-yomi)' },
      { word: '考察', reading: 'こうさつ', meaning: 'nghiên cứu (On-yomi)' }
    ]
  },
  {
    id: 193,
    kanji: '高',
    onyomi: 'コウ',
    kunyomi: 'たかい、たかまる、たかめる',
    meaning: 'cao, đắt',
    hanViet: 'Cao',
    topic: 'Tính chất',
    jlptLevel: 'N5',
    examples: [
      { word: '高い', reading: 'たかい', meaning: 'cao, đắt (Kun-yomi)' },
      { word: '高まる', reading: 'たかまる', meaning: 'tăng lên (Kun-yomi)' },
      { word: '高校', reading: 'こうこう', meaning: 'trường cấp 3 (On-yomi)' }
    ]
  },
  {
    id: 194,
    kanji: '国',
    onyomi: 'コク',
    kunyomi: 'くに',
    meaning: 'quốc gia',
    hanViet: 'Quốc',
    topic: 'Địa lý',
    jlptLevel: 'N5',
    examples: [
      { word: '国', reading: 'くに', meaning: 'đất nước (Kun-yomi)' },
      { word: '中国', reading: 'ちゅうごく', meaning: 'Trung Quốc (On-yomi)' },
      { word: '外国', reading: 'がいこく', meaning: 'nước ngoài (On-yomi)' }
    ]
  },
  {
    id: 195,
    kanji: '黒',
    onyomi: 'コク',
    kunyomi: 'くろ、くろい',
    meaning: 'màu đen',
    hanViet: 'Hắc',
    topic: 'Màu sắc',
    jlptLevel: 'N5',
    examples: [
      { word: '黒', reading: 'くろ', meaning: 'màu đen (Kun-yomi)' },
      { word: '黒い', reading: 'くろい', meaning: 'đen (Kun-yomi)' },
      { word: '黒板', reading: 'こくばん', meaning: 'bảng đen (On-yomi)' }
    ]
  },
  {
    id: 196,
    kanji: '今',
    onyomi: 'コン、キン',
    kunyomi: 'いま',
    meaning: 'bây giờ, hiện tại',
    hanViet: 'Kim',
    topic: 'Thời gian',
    jlptLevel: 'N5',
    examples: [
      { word: '今', reading: 'いま', meaning: 'bây giờ (Kun-yomi)' },
      { word: '今日', reading: 'きょう', meaning: 'hôm nay (Kun-yomi)' },
      { word: '今年', reading: 'ことし', meaning: 'năm nay (Kun-yomi)' }
    ]
  },
  {
    id: 197,
    kanji: '午',
    onyomi: 'ゴ',
    kunyomi: 'うま',
    meaning: 'trưa, giờ Ngọ',
    hanViet: 'Ngọ',
    topic: 'Thời gian',
    jlptLevel: 'N5',
    examples: [
      { word: '午前', reading: 'ごぜん', meaning: 'buổi sáng (On-yomi)' },
      { word: '午後', reading: 'ごご', meaning: 'buổi chiều (On-yomi)' },
      { word: '正午', reading: 'しょうご', meaning: 'buổi trưa (On-yomi)' }
    ]
  },
  {
    id: 198,
    kanji: '校',
    onyomi: 'コウ',
    kunyomi: '',
    meaning: 'trường học',
    hanViet: 'Hiệu',
    topic: 'Giáo dục',
    jlptLevel: 'N5',
    examples: [
      { word: '学校', reading: 'がっこう', meaning: 'trường học (On-yomi)' },
      { word: '高校', reading: 'こうこう', meaning: 'trường cấp 3 (On-yomi)' },
      { word: '校長', reading: 'こうちょう', meaning: 'hiệu trưởng (On-yomi)' }
    ]
  },
  {
    id: 201,
    kanji: '合',
    onyomi: 'ゴウ、ガッ',
    kunyomi: 'あう、あわせる',
    meaning: 'hợp, phù hợp',
    hanViet: 'Hợp',
    topic: 'Hoạt động',
    jlptLevel: 'N5',
    examples: [
      { word: '合う', reading: 'あう', meaning: 'phù hợp (Kun-yomi)' },
      { word: '合格', reading: 'ごうかく', meaning: 'đỗ (On-yomi)' },
      { word: '都合', reading: 'つごう', meaning: 'sự thuận tiện (On-yomi)' }
    ]
  },
  {
    id: 202,
    kanji: '谷',
    onyomi: 'コク',
    kunyomi: 'たに',
    meaning: 'thung lũng',
    hanViet: 'Cốc',
    topic: 'Địa lý',
    jlptLevel: 'N5',
    examples: [
      { word: '谷', reading: 'たに', meaning: 'thung lũng (Kun-yomi)' },
      { word: '渓谷', reading: 'けいこく', meaning: 'hẻm núi (On-yomi)' },
      { word: '谷間', reading: 'たにま', meaning: 'thung lũng (Kun-yomi)' }
    ]
  },
  {
    id: 203,
    kanji: '黄',
    onyomi: 'コウ、オウ',
    kunyomi: 'き、こ',
    meaning: 'màu vàng',
    hanViet: 'Hoàng',
    topic: 'Màu sắc',
    jlptLevel: 'N5',
    examples: [
      { word: '黄色', reading: 'きいろ', meaning: 'màu vàng (Kun-yomi)' }
    ]
  },
  {
    id: 204,
    kanji: '工',
    onyomi: 'コウ、ク',
    kunyomi: '',
    meaning: 'công việc, công nghiệp',
    hanViet: 'Công',
    topic: 'Công việc',
    jlptLevel: 'N5',
    examples: [
      { word: '工場', reading: 'こうじょう', meaning: 'nhà máy (On-yomi)' },
      { word: '工業', reading: 'こうぎょう', meaning: 'công nghiệp (On-yomi)' },
      { word: '大工', reading: 'だいく', meaning: 'thợ mộc (On-yomi)' }
    ]
  },
  {
    id: 205,
    kanji: '好',
    onyomi: 'コウ',
    kunyomi: 'す、この、すき',
    meaning: 'thích, tốt',
    hanViet: 'Hảo',
    topic: 'Tính chất',
    jlptLevel: 'N5',
    examples: [
      { word: '好き', reading: 'すき', meaning: 'thích (Kun-yomi)' },
      { word: '好む', reading: 'このむ', meaning: 'ưa thích (Kun-yomi)' },
      { word: '好意', reading: 'こうい', meaning: 'thiện ý (On-yomi)' }
    ]
  },
  {
    id: 206,
    kanji: '号',
    onyomi: 'ゴウ',
    kunyomi: '',
    meaning: 'số, hiệu',
    hanViet: 'Hiệu',
    topic: 'Số đếm',
    jlptLevel: 'N5',
    examples: [
      { word: '番号', reading: 'ばんごう', meaning: 'số thứ tự (On-yomi)' },
      { word: '記号', reading: 'きごう', meaning: 'ký hiệu (On-yomi)' },
      { word: '信号', reading: 'しんごう', meaning: 'tín hiệu (On-yomi)' }
    ]
  },
  {
    id: 207,
    kanji: '国',
    onyomi: 'コク',
    kunyomi: 'くに',
    meaning: 'quốc gia',
    hanViet: 'Quốc',
    topic: 'Địa lý',
    jlptLevel: 'N5',
    examples: [
      { word: '国', reading: 'くに', meaning: 'đất nước (Kun-yomi)' },
      { word: '中国', reading: 'ちゅうごく', meaning: 'Trung Quốc (On-yomi)' },
      { word: '外国', reading: 'がいこく', meaning: 'nước ngoài (On-yomi)' }
    ]
  },
  {
    id: 209,
    kanji: '細',
    onyomi: 'サイ',
    kunyomi: 'ほそい、こまかい',
    meaning: 'tế, nhỏ',
    hanViet: 'Tế',
    topic: 'Tính chất',
    jlptLevel: 'N5',
    examples: [
      { word: '細い', reading: 'ほそい', meaning: 'mảnh, nhỏ (Kun-yomi)' },
      { word: '細かい', reading: 'こまかい', meaning: 'chi tiết, tỉ mỉ (Kun-yomi)' },
      { word: '細胞', reading: 'さいぼう', meaning: 'tế bào (On-yomi)' }
    ]
  },
  {
    id: 210,
    kanji: '作',
    onyomi: 'サク、サ',
    kunyomi: 'つくる',
    meaning: 'làm, tác',
    hanViet: 'Tác',
    topic: 'Hoạt động',
    jlptLevel: 'N5',
    examples: [
      { word: '作る', reading: 'つくる', meaning: 'làm, tạo ra (Kun-yomi)' },
      { word: '作品', reading: 'さくひん', meaning: 'tác phẩm (On-yomi)' },
      { word: '作者', reading: 'さくしゃ', meaning: 'tác giả (On-yomi)' }
    ]
  },
  {
    id: 211,
    kanji: '川',
    onyomi: 'セン',
    kunyomi: 'かわ',
    meaning: 'sông',
    hanViet: 'Xuyên',
    topic: 'Địa lý',
    jlptLevel: 'N5',
    examples: [
      { word: '川', reading: 'かわ', meaning: 'sông (Kun-yomi)' },
      { word: '川口', reading: 'かわぐち', meaning: 'cửa sông (Kun-yomi)' },
      { word: '河川', reading: 'かせん', meaning: 'sông ngòi (On-yomi)' }
    ]
  },
  {
    id: 212,
    kanji: '先',
    onyomi: 'セン',
    kunyomi: 'さき',
    meaning: 'trước, tiên',
    hanViet: 'Tiên',
    topic: 'Thời gian',
    jlptLevel: 'N5',
    examples: [
      { word: '先生', reading: 'せんせい', meaning: 'thầy cô (On-yomi)' },
      { word: '先月', reading: 'せんげつ', meaning: 'tháng trước (On-yomi)' },
      { word: '先週', reading: 'せんしゅう', meaning: 'tuần trước (On-yomi)' }
    ]
  }
]; 