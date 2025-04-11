import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Tabs, 
  Tab, 
  Paper, 
  List, 
  ListItem, 
  ListItemText,
  Button,
  useTheme,
  IconButton,
  Card,
  CardContent,
  CardActions,
  Divider,
  TextField,
  InputAdornment,
  Tooltip,
  LinearProgress,
  Chip,
  Fade,
  Zoom,
  Badge
} from '@mui/material';
import { 
  NavigateNext, 
  NavigateBefore,
  School,
  MenuBook,
  Brush,
  Search,
  Bookmark,
  BookmarkBorder,
  VolumeUp,
  CheckCircle,
  Help,
  Refresh
} from '@mui/icons-material';

interface N5Topic {
  id: string;
  title: string;
  content: string[];
  category: 'grammar' | 'vocabulary' | 'kanji';
  description?: string;
  examples?: string[];
  difficulty?: 'easy' | 'medium' | 'hard';
}

const N5Review: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'grammar' | 'vocabulary' | 'kanji'>('grammar');
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedTopics, setBookmarkedTopics] = useState<string[]>([]);
  const [showAnswer, setShowAnswer] = useState<boolean[]>([]);
  const [progress, setProgress] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const theme = useTheme();

  const n5Topics: N5Topic[] = [
    {
      id: 'grammar-1',
      title: 'Ngữ pháp cơ bản',
      description: 'Các điểm ngữ pháp cần thiết cho trình độ N5',
      content: [
        'です/だ - Là (động từ to be)',
        'は - Trợ từ chỉ chủ đề',
        'が - Trợ từ chỉ chủ ngữ',
        'を - Trợ từ chỉ tân ngữ',
        'に - Trợ từ chỉ đích đến',
        'へ - Trợ từ chỉ hướng',
        'で - Trợ từ chỉ địa điểm',
      ],
      examples: [
        '私は学生です。 (Tôi là học sinh.)',
        '本を読む。 (Tôi đọc sách.)',
        '学校へ行く。 (Tôi đi đến trường.)',
      ],
      category: 'grammar',
      difficulty: 'easy'
    },
    {
      id: 'vocabulary-1',
      title: 'Từ vựng cơ bản',
      description: 'Từ vựng thông dụng trong giao tiếp hàng ngày',
      content: [
        '私 (わたし) - Tôi',
        'あなた - Bạn',
        '彼 (かれ) - Anh ấy',
        '彼女 (かのじょ) - Cô ấy',
        '人 (ひと) - Người',
        '本 (ほん) - Sách',
        '学校 (がっこう) - Trường học',
      ],
      examples: [
        '私の本 (Sách của tôi)',
        '学校の人 (Người ở trường)',
        '彼女の友達 (Bạn của cô ấy)',
      ],
      category: 'vocabulary',
      difficulty: 'easy'
    },
    {
      id: 'kanji-1',
      title: 'Kanji cơ bản',
      description: 'Kanji cần thiết cho trình độ N5',
      content: [
        '日 (にち) - Ngày/Mặt trời',
        '月 (つき) - Mặt trăng/Tháng',
        '火 (ひ) - Lửa',
        '水 (みず) - Nước',
        '木 (き) - Cây',
        '金 (きん) - Vàng/Tiền',
        '土 (つち) - Đất',
      ],
      examples: [
        '日曜日 (Chủ nhật)',
        '月曜日 (Thứ hai)',
        '火曜日 (Thứ ba)',
      ],
      category: 'kanji',
      difficulty: 'medium'
    },
    {
      id: 'grammar-2',
      title: 'Các dạng động từ',
      description: 'Các cách chia động từ cơ bản',
      content: [
        'ます form - Thể lịch sự',
        'て form - Thể kết nối',
        'た form - Thể quá khứ',
        'ない form - Thể phủ định',
        'Potential form - Thể khả năng',
        'Volitional form - Thể ý chí',
        'Imperative form - Thể mệnh lệnh',
      ],
      examples: [
        '食べます (Tôi ăn)',
        '食べて (Ăn và...)',
        '食べた (Tôi đã ăn)',
        '食べない (Tôi không ăn)',
        '食べられる (Tôi có thể ăn)',
        '食べよう (Hãy ăn thôi)',
        '食べろ (Ăn đi!)',
      ],
      category: 'grammar',
      difficulty: 'medium'
    },
    {
      id: 'vocabulary-2',
      title: 'Từ vựng về thời gian',
      description: 'Từ vựng liên quan đến thời gian',
      content: [
        '今日 (きょう) - Hôm nay',
        '明日 (あした) - Ngày mai',
        '昨日 (きのう) - Hôm qua',
        '朝 (あさ) - Buổi sáng',
        '昼 (ひる) - Buổi trưa',
        '夜 (よる) - Buổi tối',
        '今 (いま) - Bây giờ',
      ],
      examples: [
        '今日は忙しい (Hôm nay bận)',
        '明日学校に行く (Ngày mai tôi sẽ đi học)',
        '昨日本を読んだ (Hôm qua tôi đã đọc sách)',
      ],
      category: 'vocabulary',
      difficulty: 'easy'
    },
    {
      id: 'kanji-2',
      title: 'Kanji về thiên nhiên',
      description: 'Kanji liên quan đến thiên nhiên',
      content: [
        '山 (やま) - Núi',
        '川 (かわ) - Sông',
        '海 (うみ) - Biển',
        '空 (そら) - Bầu trời',
        '雲 (くも) - Mây',
        '雨 (あめ) - Mưa',
        '雪 (ゆき) - Tuyết',
      ],
      examples: [
        '山に登る (Leo núi)',
        '川で泳ぐ (Bơi ở sông)',
        '海に行く (Đi đến biển)',
      ],
      category: 'kanji',
      difficulty: 'medium'
    },
    {
      id: 'grammar-3',
      title: 'Trợ từ thường gặp',
      description: 'Các trợ từ thường được sử dụng trong tiếng Nhật',
      content: [
        'から - Từ (nơi bắt đầu)',
        'まで - Đến (nơi kết thúc)',
        'より - Hơn (so sánh)',
        'と - Và (liệt kê)',
        'や - Và (liệt kê không đầy đủ)',
        'か - Hoặc',
        'の - Của (sở hữu)',
      ],
      examples: [
        '学校から家まで (Từ trường đến nhà)',
        '私より背が高い (Cao hơn tôi)',
        '本と鉛筆 (Sách và bút chì)',
        '私の本 (Sách của tôi)',
      ],
      category: 'grammar',
      difficulty: 'easy'
    },
    {
      id: 'vocabulary-3',
      title: 'Từ vựng về gia đình',
      description: 'Từ vựng liên quan đến gia đình',
      content: [
        '家族 (かぞく) - Gia đình',
        '父 (ちち) - Bố (khi nói về bố mình)',
        '母 (はは) - Mẹ (khi nói về mẹ mình)',
        '兄 (あに) - Anh trai (khi nói về anh mình)',
        '姉 (あね) - Chị gái (khi nói về chị mình)',
        '弟 (おとうと) - Em trai (khi nói về em mình)',
        '妹 (いもうと) - Em gái (khi nói về em mình)',
      ],
      examples: [
        '私の家族 (Gia đình của tôi)',
        '父は会社員です (Bố tôi là nhân viên công ty)',
        '母は料理が上手です (Mẹ tôi nấu ăn giỏi)',
      ],
      category: 'vocabulary',
      difficulty: 'easy'
    },
    {
      id: 'kanji-3',
      title: 'Kanji về cơ thể',
      description: 'Kanji liên quan đến cơ thể người',
      content: [
        '目 (め) - Mắt',
        '耳 (みみ) - Tai',
        '口 (くち) - Miệng',
        '手 (て) - Tay',
        '足 (あし) - Chân',
        '頭 (あたま) - Đầu',
        '心 (こころ) - Tim/Tâm',
      ],
      examples: [
        '目が大きい (Mắt to)',
        '手を洗う (Rửa tay)',
        '足が痛い (Chân đau)',
      ],
      category: 'kanji',
      difficulty: 'easy'
    },
    {
      id: 'grammar-4',
      title: 'Cách diễn đạt thời gian',
      description: 'Các mẫu câu diễn đạt thời gian trong tiếng Nhật',
      content: [
        '～前に - Trước khi...',
        '～後で - Sau khi...',
        '～間 - Trong khi...',
        '～時 - Khi...',
        '～までに - Trước khi... (thời hạn)',
        '～から～まで - Từ... đến...',
        '～ごとに - Mỗi khi...',
      ],
      examples: [
        '寝る前に本を読む (Tôi đọc sách trước khi ngủ)',
        '食べた後で歯を磨く (Tôi đánh răng sau khi ăn)',
        '勉強している間、音楽を聞く (Tôi nghe nhạc trong khi học)',
        '学校に行く時、友達に会う (Tôi gặp bạn khi đi học)',
      ],
      category: 'grammar',
      difficulty: 'medium'
    },
    {
      id: 'vocabulary-4',
      title: 'Từ vựng về đồ ăn',
      description: 'Từ vựng liên quan đến đồ ăn và thức uống',
      content: [
        '食べ物 (たべもの) - Thức ăn',
        '飲み物 (のみもの) - Thức uống',
        'ご飯 (ごはん) - Cơm',
        'パン - Bánh mì',
        '水 (みず) - Nước',
        'お茶 (おちゃ) - Trà',
        'コーヒー - Cà phê',
        '肉 (にく) - Thịt',
        '魚 (さかな) - Cá',
        '野菜 (やさい) - Rau',
        '果物 (くだもの) - Trái cây',
        '卵 (たまご) - Trứng',
        '牛乳 (ぎゅうにゅう) - Sữa',
        'お酒 (おさけ) - Rượu',
      ],
      examples: [
        '私はご飯が好きです (Tôi thích cơm)',
        '毎朝コーヒーを飲みます (Tôi uống cà phê mỗi buổi sáng)',
        '野菜をたくさん食べます (Tôi ăn nhiều rau)',
        '魚は新鮮です (Cá tươi)',
      ],
      category: 'vocabulary',
      difficulty: 'easy'
    },
    {
      id: 'kanji-4',
      title: 'Kanji về đồ ăn',
      description: 'Kanji liên quan đến đồ ăn và thức uống',
      content: [
        '食 (た) - Ăn',
        '飲 (の) - Uống',
        '飯 (はん) - Cơm',
        '肉 (にく) - Thịt',
        '魚 (さかな) - Cá',
        '菜 (さい) - Rau',
        '果 (か) - Trái cây',
        '卵 (たまご) - Trứng',
        '牛 (うし) - Bò',
        '乳 (にゅう) - Sữa',
        '酒 (さけ) - Rượu',
        '茶 (ちゃ) - Trà',
        '米 (こめ) - Gạo',
        '塩 (しお) - Muối',
      ],
      examples: [
        '食事をする (Ăn cơm)',
        '水を飲む (Uống nước)',
        '肉を食べる (Ăn thịt)',
        '野菜を買う (Mua rau)',
      ],
      category: 'kanji',
      difficulty: 'medium'
    },
    {
      id: 'grammar-5',
      title: 'Cách diễn đạt mong muốn',
      description: 'Các mẫu câu diễn đạt mong muốn trong tiếng Nhật',
      content: [
        '～たい - Muốn...',
        '～ほしい - Muốn có...',
        '～てほしい - Muốn ai đó làm gì...',
        '～ましょう - Hãy cùng...',
        '～ませんか - Bạn có muốn... không?',
        '～ましょうか - Tôi sẽ... nhé?',
        '～たいですか - Bạn có muốn... không?',
      ],
      examples: [
        '日本に行きたい (Tôi muốn đi Nhật Bản)',
        '新しい車がほしい (Tôi muốn có xe mới)',
        '手伝ってほしい (Tôi muốn bạn giúp đỡ)',
        '一緒に食べましょう (Hãy cùng ăn nào)',
        '映画を見ませんか (Bạn có muốn xem phim không?)',
      ],
      category: 'grammar',
      difficulty: 'medium'
    },
    {
      id: 'vocabulary-5',
      title: 'Từ vựng về giao thông',
      description: 'Từ vựng liên quan đến phương tiện giao thông',
      content: [
        '電車 (でんしゃ) - Tàu điện',
        'バス - Xe buýt',
        'タクシー - Taxi',
        '自転車 (じてんしゃ) - Xe đạp',
        '車 (くるま) - Xe hơi',
        '飛行機 (ひこうき) - Máy bay',
        '船 (ふね) - Tàu thủy',
        '駅 (えき) - Nhà ga',
        '停留所 (ていりゅうじょ) - Trạm dừng',
        '切符 (きっぷ) - Vé',
        '運転手 (うんてんしゅ) - Tài xế',
        '乗客 (じょうきゃく) - Hành khách',
        '道 (みち) - Đường',
        '信号 (しんごう) - Đèn giao thông',
      ],
      examples: [
        '電車で学校に行く (Tôi đi học bằng tàu điện)',
        'バスに乗る (Tôi lên xe buýt)',
        '駅で切符を買う (Tôi mua vé ở nhà ga)',
        '自転車で買い物に行く (Tôi đi mua sắm bằng xe đạp)',
      ],
      category: 'vocabulary',
      difficulty: 'easy'
    },
    {
      id: 'kanji-5',
      title: 'Kanji về giao thông',
      description: 'Kanji liên quan đến phương tiện giao thông',
      content: [
        '電 (でん) - Điện',
        '車 (しゃ) - Xe',
        '駅 (えき) - Nhà ga',
        '道 (みち) - Đường',
        '路 (ろ) - Đường',
        '橋 (はし) - Cầu',
        '港 (みなと) - Cảng',
        '空 (くう) - Không trung',
        '海 (かい) - Biển',
        '陸 (りく) - Đất liền',
        '運 (うん) - Vận chuyển',
        '転 (てん) - Xoay',
        '乗 (じょう) - Lên xe',
        '降 (こう) - Xuống xe',
      ],
      examples: [
        '電車に乗る (Lên tàu điện)',
        '駅で降りる (Xuống ở nhà ga)',
        '道を歩く (Đi bộ trên đường)',
        '橋を渡る (Băng qua cầu)',
      ],
      category: 'kanji',
      difficulty: 'medium'
    },
    {
      id: 'grammar-6',
      title: 'Cách diễn đạt khả năng',
      description: 'Các mẫu câu diễn đạt khả năng trong tiếng Nhật',
      content: [
        '～られる - Có thể... (động từ)',
        '～できる - Có thể... (danh từ)',
        '～ことができない - Không thể...',
        '～ことができます - Có thể...',
        '～ようになる - Trở nên có thể...',
        '～ようになりました - Đã trở nên có thể...',
        '～ようになりたい - Muốn trở nên có thể...',
      ],
      examples: [
        '日本語が話せる (Tôi có thể nói tiếng Nhật)',
        '料理ができる (Tôi có thể nấu ăn)',
        '漢字が書けない (Tôi không thể viết kanji)',
        '泳げるようになりました (Tôi đã có thể bơi)',
        '日本語が話せるようになりたい (Tôi muốn có thể nói tiếng Nhật)',
      ],
      category: 'grammar',
      difficulty: 'medium'
    },
    {
      id: 'vocabulary-6',
      title: 'Từ vựng về thời tiết',
      description: 'Từ vựng liên quan đến thời tiết và khí hậu',
      content: [
        '天気 (てんき) - Thời tiết',
        '気温 (きおん) - Nhiệt độ',
        '晴れ (はれ) - Nắng',
        '曇り (くもり) - Nhiều mây',
        '雨 (あめ) - Mưa',
        '雪 (ゆき) - Tuyết',
        '風 (かぜ) - Gió',
        '雷 (かみなり) - Sấm sét',
        '暑い (あつい) - Nóng',
        '寒い (さむい) - Lạnh',
        '暖かい (あたたかい) - Ấm áp',
        '涼しい (すずしい) - Mát mẻ',
        '湿度 (しつど) - Độ ẩm',
        '予報 (よほう) - Dự báo',
      ],
      examples: [
        '今日は晴れです (Hôm nay trời nắng)',
        '明日は雨が降るでしょう (Ngày mai trời sẽ mưa)',
        '夏は暑いです (Mùa hè nóng)',
        '冬は寒いです (Mùa đông lạnh)',
      ],
      category: 'vocabulary',
      difficulty: 'easy'
    },
    {
      id: 'kanji-6',
      title: 'Kanji về thời tiết',
      description: 'Kanji liên quan đến thời tiết và khí hậu',
      content: [
        '天 (てん) - Trời',
        '気 (き) - Khí',
        '晴 (せい) - Nắng',
        '曇 (どん) - Nhiều mây',
        '雨 (あめ) - Mưa',
        '雪 (ゆき) - Tuyết',
        '風 (かぜ) - Gió',
        '雷 (かみなり) - Sấm sét',
        '暑 (あつ) - Nóng',
        '寒 (さむ) - Lạnh',
        '暖 (だん) - Ấm áp',
        '涼 (りょう) - Mát mẻ',
        '湿 (しつ) - Ẩm ướt',
        '度 (ど) - Độ',
      ],
      examples: [
        '天気がいい (Thời tiết đẹp)',
        '雨が降る (Trời mưa)',
        '風が強い (Gió mạnh)',
        '気温が高い (Nhiệt độ cao)',
      ],
      category: 'kanji',
      difficulty: 'medium'
    },
    {
      id: 'grammar-7',
      title: 'Cách diễn đạt lý do',
      description: 'Các mẫu câu diễn đạt lý do trong tiếng Nhật',
      content: [
        '～から - Vì...',
        '～ので - Vì... (lịch sự hơn)',
        '～て - Và... (kết quả)',
        '～で - Vì... (lý do)',
        '～ために - Vì... (mục đích)',
        '～し - Và... (liệt kê lý do)',
        '～からこそ - Chính vì...',
      ],
      examples: [
        '雨が降っているから、傘を持っていきます (Vì trời đang mưa nên tôi sẽ mang ô)',
        '忙しいので、行けません (Vì bận nên tôi không thể đi)',
        '病気で学校を休みました (Tôi nghỉ học vì bị ốm)',
        '日本語を勉強するために、日本に行きます (Tôi đi Nhật Bản để học tiếng Nhật)',
        '安いし、美味しいし、この店が好きです (Tôi thích cửa hàng này vì rẻ và ngon)',
      ],
      category: 'grammar',
      difficulty: 'medium'
    },
    {
      id: 'vocabulary-7',
      title: 'Từ vựng về sở thích',
      description: 'Từ vựng liên quan đến sở thích và hoạt động giải trí',
      content: [
        '趣味 (しゅみ) - Sở thích',
        'スポーツ - Thể thao',
        '音楽 (おんがく) - Âm nhạc',
        '映画 (えいが) - Phim ảnh',
        '読書 (どくしょ) - Đọc sách',
        '旅行 (りょこう) - Du lịch',
        '料理 (りょうり) - Nấu ăn',
        '写真 (しゃしん) - Chụp ảnh',
        '絵 (え) - Vẽ',
        '歌 (うた) - Hát',
        '踊り (おどり) - Nhảy múa',
        'ゲーム - Trò chơi',
        '散歩 (さんぽ) - Đi dạo',
        '釣り (つり) - Câu cá',
      ],
      examples: [
        '私の趣味は読書です (Sở thích của tôi là đọc sách)',
        '音楽を聞くのが好きです (Tôi thích nghe nhạc)',
        '週末に映画を見ます (Tôi xem phim vào cuối tuần)',
        '旅行に行きたいです (Tôi muốn đi du lịch)',
      ],
      category: 'vocabulary',
      difficulty: 'easy'
    },
    {
      id: 'kanji-7',
      title: 'Kanji về sở thích',
      description: 'Kanji liên quan đến sở thích và hoạt động giải trí',
      content: [
        '趣 (しゅ) - Thú vị',
        '味 (み) - Vị',
        '音 (おん) - Âm thanh',
        '楽 (がく) - Nhạc',
        '映 (えい) - Chiếu',
        '画 (が) - Hình ảnh',
        '読 (どく) - Đọc',
        '書 (しょ) - Viết',
        '旅 (りょ) - Du lịch',
        '行 (こう) - Đi',
        '料 (りょう) - Nguyên liệu',
        '理 (り) - Lý',
        '写 (しゃ) - Chụp',
        '真 (しん) - Thật',
      ],
      examples: [
        '趣味は読書です (Sở thích là đọc sách)',
        '音楽を聞く (Nghe nhạc)',
        '映画を見る (Xem phim)',
        '写真を撮る (Chụp ảnh)',
      ],
      category: 'kanji',
      difficulty: 'medium'
    },
    {
      id: 'grammar-8',
      title: 'Cách diễn đạt so sánh',
      description: 'Các mẫu câu diễn đạt so sánh trong tiếng Nhật',
      content: [
        '～より - Hơn...',
        '～の方が - ... hơn',
        '～ほど - Như...',
        '～と同じ - Giống như...',
        '～と違う - Khác với...',
        '一番 (いちばん) - Nhất',
        '～の中 (なか) で - Trong số...',
      ],
      examples: [
        '私より背が高い (Cao hơn tôi)',
        '日本語の方が英語より難しい (Tiếng Nhật khó hơn tiếng Anh)',
        '思ったほど難しくない (Không khó như tôi nghĩ)',
        '私と同じ年です (Cùng tuổi với tôi)',
        '一番好きな食べ物 (Món ăn yêu thích nhất)',
        'この中で一番安い (Rẻ nhất trong số này)',
      ],
      category: 'grammar',
      difficulty: 'medium'
    },
    {
      id: 'vocabulary-8',
      title: 'Từ vựng về mua sắm',
      description: 'Từ vựng liên quan đến mua sắm và thương mại',
      content: [
        '買い物 (かいもの) - Mua sắm',
        '店 (みせ) - Cửa hàng',
        'スーパー - Siêu thị',
        'デパート - Cửa hàng bách hóa',
        '値段 (ねだん) - Giá',
        '安い (やすい) - Rẻ',
        '高い (たかい) - Đắt',
        '割引 (わりびき) - Giảm giá',
        'セール - Sale',
        '現金 (げんきん) - Tiền mặt',
        'カード - Thẻ',
        'レシート - Hóa đơn',
        '袋 (ふくろ) - Túi',
        '試着 (しちゃく) - Thử đồ',
      ],
      examples: [
        '買い物に行きます (Tôi đi mua sắm)',
        'この服は高いです (Bộ quần áo này đắt)',
        '安い店を知っていますか (Bạn có biết cửa hàng nào rẻ không?)',
        'カードで払います (Tôi trả bằng thẻ)',
      ],
      category: 'vocabulary',
      difficulty: 'easy'
    },
    {
      id: 'kanji-8',
      title: 'Kanji về mua sắm',
      description: 'Kanji liên quan đến mua sắm và thương mại',
      content: [
        '買 (かい) - Mua',
        '物 (もの) - Vật',
        '店 (てん) - Cửa hàng',
        '値 (ね) - Giá',
        '段 (だん) - Bậc',
        '安 (あん) - Rẻ',
        '高 (こう) - Cao/Đắt',
        '割 (わり) - Chia/Giảm',
        '引 (ひき) - Kéo',
        '現 (げん) - Hiện tại',
        '金 (きん) - Tiền',
        '袋 (たい) - Túi',
        '試 (し) - Thử',
        '着 (ちゃく) - Mặc',
      ],
      examples: [
        '買い物をする (Đi mua sắm)',
        '店に入る (Vào cửa hàng)',
        '値段を確認する (Kiểm tra giá)',
        '現金で払う (Trả bằng tiền mặt)',
      ],
      category: 'kanji',
      difficulty: 'medium'
    }
  ];

  // Initialize showAnswer array when topics change
  useEffect(() => {
    setShowAnswer(new Array(n5Topics.length).fill(false));
  }, []);

  // Update progress when topic changes
  useEffect(() => {
    const totalTopics = n5Topics.length;
    const currentProgress = ((currentTopicIndex + 1) / totalTopics) * 100;
    setProgress(currentProgress);
  }, [currentTopicIndex, n5Topics.length]);

  const filteredTopics = n5Topics.filter(topic => {
    if (showBookmarks) {
      return bookmarkedTopics.includes(topic.id);
    }
    return topic.category === selectedCategory && 
      (searchQuery === '' || 
       topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       topic.content.some(item => item.toLowerCase().includes(searchQuery.toLowerCase())));
  });

  const handleNext = () => {
    setCurrentTopicIndex((prev) => 
      prev < filteredTopics.length - 1 ? prev + 1 : 0
    );
    setShowHint(false);
  };

  const handlePrevious = () => {
    setCurrentTopicIndex((prev) => 
      prev > 0 ? prev - 1 : filteredTopics.length - 1
    );
    setShowHint(false);
  };

  const toggleBookmark = (topicId: string) => {
    setBookmarkedTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  const toggleShowAnswer = (index: number) => {
    const newShowAnswer = [...showAnswer];
    newShowAnswer[index] = !newShowAnswer[index];
    setShowAnswer(newShowAnswer);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'grammar':
        return <School />;
      case 'vocabulary':
        return <MenuBook />;
      case 'kanji':
        return <Brush />;
      default:
        return <School />;
    }
  };

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'easy':
        return '#4CAF50';
      case 'medium':
        return '#FF9800';
      case 'hard':
        return '#F44336';
      default:
        return '#9E9E9E';
    }
  };

  const getDifficultyText = (difficulty?: string) => {
    switch (difficulty) {
      case 'easy':
        return 'Dễ';
      case 'medium':
        return 'Trung bình';
      case 'hard':
        return 'Khó';
      default:
        return 'Chưa xác định';
    }
  };

  const currentTopic = filteredTopics[currentTopicIndex];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper 
        elevation={0}
        sx={{ 
          p: 3,
          bgcolor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 192, 203, 0.2)',
          borderRadius: 2
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              color: '#FF6B6B',
              fontFamily: "'Playfair Display', serif"
            }}
          >
            Ôn tập N5
          </Typography>
          <Badge badgeContent={bookmarkedTopics.length} color="error">
            <IconButton 
              color="primary" 
              onClick={() => setShowBookmarks(!showBookmarks)}
              sx={{ color: '#FF6B6B' }}
            >
              <Bookmark />
            </IconButton>
          </Badge>
        </Box>

        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{ 
            mb: 3, 
            height: 8, 
            borderRadius: 4,
            backgroundColor: 'rgba(255, 192, 203, 0.2)',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#FF6B6B',
            }
          }} 
        />

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Tìm kiếm chủ đề..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: '#FF9999' }} />
              </InputAdornment>
            ),
          }}
        />

        {!showBookmarks && (
          <Tabs
            value={selectedCategory}
            onChange={(_, newValue) => setSelectedCategory(newValue)}
            centered
            sx={{
              mb: 4,
              '& .MuiTabs-indicator': {
                backgroundColor: '#FF6B6B',
              },
              '& .MuiTab-root': {
                color: '#FF9999',
                '&.Mui-selected': {
                  color: '#FF6B6B',
                },
              },
            }}
          >
            <Tab 
              icon={<School />} 
              label="Ngữ pháp" 
              value="grammar"
              iconPosition="start"
            />
            <Tab 
              icon={<MenuBook />} 
              label="Từ vựng" 
              value="vocabulary"
              iconPosition="start"
            />
            <Tab 
              icon={<Brush />} 
              label="Kanji" 
              value="kanji"
              iconPosition="start"
            />
          </Tabs>
        )}

        {showBookmarks && (
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant="h5" sx={{ color: '#FF6B6B', mb: 2 }}>
              Chủ đề đã đánh dấu
            </Typography>
            {bookmarkedTopics.length === 0 && (
              <Typography variant="body1" sx={{ color: '#666' }}>
                Chưa có chủ đề nào được đánh dấu. Nhấp vào biểu tượng đánh dấu trên bất kỳ chủ đề nào để lưu.
              </Typography>
            )}
          </Box>
        )}

        {currentTopic && (
          <Fade in={true} timeout={500}>
            <Card 
              elevation={0}
              sx={{ 
                bgcolor: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(255, 192, 203, 0.2)',
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {getCategoryIcon(currentTopic.category)}
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      sx={{ 
                        ml: 1,
                        color: '#FF6B6B',
                        fontFamily: "'Playfair Display', serif"
                      }}
                    >
                      {currentTopic.title}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Chip 
                      label={getDifficultyText(currentTopic.difficulty)} 
                      size="small"
                      sx={{ 
                        bgcolor: getDifficultyColor(currentTopic.difficulty),
                        color: 'white'
                      }}
                    />
                    <IconButton 
                      onClick={() => toggleBookmark(currentTopic.id)}
                      sx={{ color: bookmarkedTopics.includes(currentTopic.id) ? '#FF6B6B' : '#FF9999' }}
                    >
                      {bookmarkedTopics.includes(currentTopic.id) ? <Bookmark /> : <BookmarkBorder />}
                    </IconButton>
                  </Box>
                </Box>

                {currentTopic.description && (
                  <Typography variant="body1" sx={{ mb: 2, color: '#666' }}>
                    {currentTopic.description}
                  </Typography>
                )}

                <Divider sx={{ mb: 2 }} />
                
                <List>
                  {currentTopic.content.map((item, index) => (
                    <ListItem 
                      key={index}
                      sx={{
                        '&:hover': {
                          bgcolor: 'rgba(255, 192, 203, 0.1)',
                        },
                        borderRadius: 1,
                        mb: 1
                      }}
                    >
                      <ListItemText 
                        primary={item}
                        sx={{
                          '& .MuiListItemText-primary': {
                            color: '#666',
                            fontSize: '1.1rem'
                          }
                        }}
                      />
                      <IconButton 
                        size="small" 
                        onClick={() => toggleShowAnswer(index)}
                        sx={{ color: '#FF9999' }}
                      >
                        {showAnswer[index] ? <CheckCircle /> : <Help />}
                      </IconButton>
                    </ListItem>
                  ))}
                </List>

                {currentTopic.examples && currentTopic.examples.length > 0 && (
                  <Box sx={{ mt: 3 }}>
                    <Typography variant="h6" sx={{ mb: 1, color: '#FF6B6B' }}>
                      Ví dụ:
                    </Typography>
                    <List>
                      {currentTopic.examples.map((example, index) => (
                        <ListItem key={index}>
                          <ListItemText 
                            primary={example}
                            sx={{
                              '& .MuiListItemText-primary': {
                                color: '#666',
                                fontSize: '1rem',
                                fontStyle: 'italic'
                              }
                            }}
                          />
                          <IconButton size="small" sx={{ color: '#FF9999' }}>
                            <VolumeUp />
                          </IconButton>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                <Box>
                  <Button
                    startIcon={<NavigateBefore />}
                    onClick={handlePrevious}
                    sx={{ 
                      color: '#FF9999',
                      '&:hover': {
                        bgcolor: 'rgba(255, 192, 203, 0.1)',
                      }
                    }}
                  >
                    Trước
                  </Button>
                  <Button
                    onClick={() => setShowHint(!showHint)}
                    sx={{ 
                      color: '#FF9999',
                      ml: 1,
                      '&:hover': {
                        bgcolor: 'rgba(255, 192, 203, 0.1)',
                      }
                    }}
                  >
                    {showHint ? 'Ẩn gợi ý' : 'Hiện gợi ý'}
                  </Button>
                </Box>
                <Box>
                  <Button
                    startIcon={<Refresh />}
                    onClick={() => setCurrentTopicIndex(Math.floor(Math.random() * filteredTopics.length))}
                    sx={{ 
                      color: '#FF9999',
                      mr: 1,
                      '&:hover': {
                        bgcolor: 'rgba(255, 192, 203, 0.1)',
                      }
                    }}
                  >
                    Ngẫu nhiên
                  </Button>
                  <Button
                    endIcon={<NavigateNext />}
                    onClick={handleNext}
                    sx={{ 
                      color: '#FF6B6B',
                      '&:hover': {
                        bgcolor: 'rgba(255, 192, 203, 0.1)',
                      }
                    }}
                  >
                    Tiếp
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Fade>
        )}
      </Paper>
    </Container>
  );
};

export default N5Review; 