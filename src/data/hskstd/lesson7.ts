import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 1, Bài 7: 今天几号？ (sách trang 60–67).
 * Nghe: 07-1…07-4 (giáo trình). Sách bài tập (trang 47–54, đáp án trang 12–13): nghe gõ từ hai âm tiết, ghi dấu thanh,
 * nghe chọn đáp án 9–12, nối câu hỏi/đáp 18–22, điền từ 23–30.
 * Phần tiếng Việt do app tự thêm ở những chỗ sách không có.
 */

const A = '/audio/hsk-std1/'

export const hskStd1Lesson7: Lesson = {
  id: 7,
  title: 'Hôm nay là ngày mấy?',
  hanzi: '今天几号？',
  pinyin: 'Jīntiān jǐ hào?',
  vi: 'Hôm nay là ngày mấy?',
  intro: 'Nói về ngày tháng và thứ: 今天几号？ 今天星期几？ Học cách diễn đạt ngày tháng, câu có vị ngữ là danh từ, câu liên động 去 + nơi chốn + làm gì; sự kết hợp thanh điệu thanh 2 + các thanh; kết cấu chữ trái-phải; bộ 氵 và 讠.',

  dialogue: [
    { who: 'A', hanzi: '请问，今天几号？', pinyin: 'Qǐngwèn, jīntiān jǐ hào?', vi: 'Xin hỏi hôm nay là ngày mấy?', scene: 'Hội thoại 1 · ở ngân hàng' },
    { who: 'B', hanzi: '今天9月1号。', pinyin: 'Jīntiān jiǔ yuè yī hào.', vi: 'Ngày 1 tháng 9.' },
    { who: 'A', hanzi: '今天星期几？', pinyin: 'Jīntiān xīngqī jǐ?', vi: 'Hôm nay là thứ mấy?' },
    { who: 'B', hanzi: '星期三。', pinyin: 'Xīngqī sān.', vi: 'Thứ tư.' },
    { who: 'A', hanzi: '昨天是几月几号？', pinyin: 'Zuótiān shì jǐ yuè jǐ hào?', vi: 'Hôm qua là ngày mấy tháng mấy?', scene: 'Hội thoại 2 · xem lịch' },
    { who: 'B', hanzi: '昨天是8月31号，星期二。', pinyin: 'Zuótiān shì bā yuè sānshíyī hào, xīngqī èr.', vi: 'Hôm qua là thứ ba, ngày 31 tháng 8.' },
    { who: 'A', hanzi: '明天呢？', pinyin: 'Míngtiān ne?', vi: 'Còn ngày mai?' },
    { who: 'B', hanzi: '明天是9月2号，星期四。', pinyin: 'Míngtiān shì jiǔ yuè èr hào, xīngqī sì.', vi: 'Ngày mai là thứ năm, ngày 2 tháng 9.' },
    { who: 'A', hanzi: '明天星期六，你去学校吗？', pinyin: 'Míngtiān xīngqī liù, nǐ qù xuéxiào ma?', vi: 'Ngày mai là thứ bảy, bạn có đến trường không?', scene: 'Hội thoại 3 · ở quán cà phê' },
    { who: 'B', hanzi: '我去学校。', pinyin: 'Wǒ qù xuéxiào.', vi: 'Có, tôi đến trường.' },
    { who: 'A', hanzi: '你去学校做什么？', pinyin: 'Nǐ qù xuéxiào zuò shénme?', vi: 'Bạn đến trường để làm gì?' },
    { who: 'B', hanzi: '我去学校看书。', pinyin: 'Wǒ qù xuéxiào kàn shū.', vi: 'Để đọc sách.' },
  ],
  dialogueClips: [
    { label: '07-1 · Hội thoại 1: 今天几号？', src: A + 'l07-1.mp3' },
    { label: '07-2 · Hội thoại 2: 昨天是几月几号？', src: A + 'l07-2.mp3' },
    { label: '07-3 · Hội thoại 3: 你去学校做什么？', src: A + 'l07-3.mp3' },
  ],
  dialogueTip: 'Ngày tháng nói theo thứ tự <b>tháng → ngày (号) → thứ (星期)</b>: 9月1号，星期三. Câu về ngày tháng không cần 是 khi khẳng định: <b>今天9月1号</b>. Hỏi mục đích: <b>去 + nơi chốn + 做什么？</b>',
  slowSay: '今天几号',

  vocab: [
    { hanzi: '请', parts: '讠 (ngôn) + 青 (thanh)', pinyin: 'qǐng', pos: 'động từ', meaning: '(lịch sự) mời, xin', han_viet: 'thỉnh' },
    { hanzi: '问', parts: '门 (môn) + 口 (khẩu)', pinyin: 'wèn', pos: 'động từ', meaning: 'hỏi. Từ ngoài đại cương HSK 1 (dấu * trong sách)', han_viet: 'vấn' },
    { hanzi: '今天', pinyin: 'jīntiān', pos: 'danh từ', meaning: 'hôm nay', han_viet: 'kim thiên' },
    { hanzi: '号', parts: '口 (khẩu) + 丂', pinyin: 'hào', pos: 'danh từ', meaning: 'ngày', han_viet: 'hiệu' },
    { hanzi: '月', pinyin: 'yuè', pos: 'danh từ', meaning: 'tháng', han_viet: 'nguyệt' },
    { hanzi: '星期', parts: '星 = 日 + 生; 期 = 其 + 月', pinyin: 'xīngqī', pos: 'danh từ', meaning: 'tuần, thứ', han_viet: 'tinh kỳ' },
    { hanzi: '昨天', pinyin: 'zuótiān', pos: 'danh từ', meaning: 'hôm qua', han_viet: 'tạc thiên' },
    { hanzi: '明天', pinyin: 'míngtiān', pos: 'danh từ', meaning: 'ngày mai', han_viet: 'minh thiên' },
    { hanzi: '去', pinyin: 'qù', pos: 'động từ', meaning: 'đi, đi đến', han_viet: 'khứ' },
    { hanzi: '学校', parts: '学 (học) + 校 (hiệu)', pinyin: 'xuéxiào', pos: 'danh từ', meaning: 'trường', han_viet: 'học hiệu' },
    { hanzi: '看', parts: '手 (thủ) + 目 (mục)', pinyin: 'kàn', pos: 'động từ', meaning: 'nhìn, xem, đọc', han_viet: 'khán' },
    { hanzi: '书', pinyin: 'shū', pos: 'danh từ', meaning: 'sách', han_viet: 'thư' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Tháng · thứ', title: 'Các tháng và các ngày trong tuần',
      intro: 'Tháng nói bằng số + 月: 一月 (tháng 1) … 十二月 (tháng 12). Thứ trong tuần nói bằng 星期 + số: 星期一 (thứ hai) … 星期六 (thứ bảy). Chủ nhật là 星期日 hoặc 星期天.',
      groups: [
        { label: 'Các tháng', items: [['一月', 'yī yuè', 'tháng 1'], ['二月', 'èr yuè', 'tháng 2'], ['三月', 'sān yuè', 'tháng 3'], ['四月', 'sì yuè', 'tháng 4'], ['五月', 'wǔ yuè', 'tháng 5'], ['六月', 'liù yuè', 'tháng 6'], ['七月', 'qī yuè', 'tháng 7'], ['八月', 'bā yuè', 'tháng 8'], ['九月', 'jiǔ yuè', 'tháng 9'], ['十月', 'shí yuè', 'tháng 10'], ['十一月', 'shíyī yuè', 'tháng 11'], ['十二月', "shí'èr yuè", 'tháng 12']] },
        { label: 'Các thứ', items: [['星期一', 'xīngqī yī', 'thứ hai'], ['星期二', 'xīngqī èr', 'thứ ba'], ['星期三', 'xīngqī sān', 'thứ tư'], ['星期四', 'xīngqī sì', 'thứ năm'], ['星期五', 'xīngqī wǔ', 'thứ sáu'], ['星期六', 'xīngqī liù', 'thứ bảy'], ['星期日', 'xīngqīrì', 'chủ nhật'], ['星期天', 'xīngqītiān', 'chủ nhật']] },
      ],
    },
    {
      kind: 'examples', label: 'Thanh 2 + các thanh', title: 'Sự kết hợp thanh điệu của từ hai âm tiết (2): thanh 2 + thanh 1/2/3/4',
      clip: { label: '07-4 · Nghe và đọc theo (kết hợp thanh điệu)', src: A + 'l07-4.mp3' },
      intro: 'Âm tiết đầu thanh 2 (đi lên), âm tiết sau lần lượt thanh 1, 2, 3, 4.',
      groups: [
        { label: 'Bốn ví dụ trong sách', items: [['时间', 'shíjiān', 'thời gian · 2+1'], ['银行', 'yínháng', 'ngân hàng · 2+2'], ['词典', 'cídiǎn', 'từ điển · 2+3'], ['蓝色', 'lánsè', 'màu xanh · 2+4']] },
        { label: 'Nghe và đọc theo (07-4)', items: [
          ['国家', 'guójiā', 'quốc gia'], ['楼房', 'lóufáng', 'nhà lầu'], ['苹果', 'píngguǒ', 'táo'], ['环境', 'huánjìng', 'môi trường'],
          ['昨天', 'zuótiān', 'hôm qua'], ['篮球', 'lánqiú', 'bóng rổ'], ['啤酒', 'píjiǔ', 'bia'], ['寒假', 'hánjià', 'kỳ nghỉ đông'],
          ['明天', 'míngtiān', 'ngày mai'], ['明年', 'míngnián', 'sang năm'], ['牛奶', 'niúnǎi', 'sữa bò'], ['牛肉', 'niú ròu', 'thịt bò'],
          ['年轻', 'niánqīng', 'trẻ'], ['长城', 'Chángchéng', 'Vạn Lý Trường Thành'], ['游泳', 'yóu yǒng', 'bơi'], ['游戏', 'yóuxì', 'trò chơi'],
        ] },
      ],
    },
    {
      kind: 'examples', label: 'Cấu trúc chữ Hán', title: 'Cấu trúc của chữ Hán (2): kết cấu trái-phải và trái-giữa-phải',
      intro: 'Chữ có kết cấu tổ hợp gồm kết cấu trái-phải (左右结构) và kết cấu trái-giữa-phải (左中右结构).',
      groups: [
        { label: 'Kết cấu trái-phải', items: [['你', 'nǐ', '亻+ 尔'], ['好', 'hǎo', '女 + 子']] },
        { label: 'Kết cấu trái-giữa-phải', items: [['谢', 'xiè', '讠+ 身 + 寸 (cảm ơn)'], ['树', 'shù', '木 + 又 + 寸 (cây)']] },
      ],
    },
    {
      kind: 'examples', label: 'Bộ 氵 và 讠', title: 'Các bộ của chữ Hán: 氵 và 讠',
      intro: 'Bộ 氵 (ba chấm thủy) thường liên quan đến nước. Bộ 讠 (ngôn) thường liên quan đến ngôn ngữ và lời nói.',
      groups: [
        { label: 'Bộ 氵 (liên quan đến nước)', items: [['汉', 'hàn', 'Hán'], ['没', 'méi', 'không có']] },
        { label: 'Bộ 讠 (liên quan đến lời nói)', items: [['语', 'yǔ', 'lời nói'], ['谁', 'shéi', 'ai']] },
      ],
    },
    {
      kind: 'examples', label: 'Từ bổ sung', title: 'Từ vựng bổ sung: sinh nhật',
      intro: 'Sách trang 67 bổ sung từ 生日 dùng trong hoạt động nhóm hỏi ngày sinh.',
      groups: [{ label: 'Từ bổ sung', items: [['生日', 'shēngrì', 'ngày sinh, sinh nhật'], ['8月31号', 'bā yuè sānshíyī hào', 'ví dụ của sách: ngày sinh Lý Nguyệt']] }],
    },
  ],

  notes: [
    {
      title: 'Cách diễn đạt ngày tháng',
      body: 'Người Trung Quốc nói ngày tháng theo trình tự từ đơn vị lớn đến đơn vị nhỏ: trước tiên là 月 (tháng), sau đó là 日 / 号 (ngày), cuối cùng là 星期 (thứ). Trong văn nói, người ta thường dùng 号 thay cho 日. Ví dụ: 9月1号，星期三。 9月2号，星期四。 8月31号，星期二。',
      say: '九月一号星期三',
    },
    {
      title: 'Câu có vị ngữ là danh từ',
      body: 'Vị ngữ là thành phần mang đặc điểm danh từ, thường dùng để nói về tuổi tác, thời gian, ngày tháng. Không cần động từ 是. Ví dụ: 我的汉语老师33岁。 明天星期三。 今天9月1号。',
      say: '今天九月一号',
    },
    {
      title: 'Câu liên động: 去 + nơi chốn + làm gì',
      body: 'Vị ngữ có hai động từ trở lên, động từ sau diễn tả mục đích của động từ trước. Đôi khi có thể bỏ tân ngữ chỉ nơi chốn sau 去. Ví dụ: 我去中国学习汉语。 我们去中国饭馆儿吃中国菜。 我去学校看书。',
      say: '我去学校看书',
    },
    {
      title: 'Thanh 2 trong từ hai âm tiết',
      body: 'Thanh 2 (đi lên) đứng trước thanh 1, 2, 3, 4: 时间, 银行, 词典, 蓝色. Luyện kỹ để không lẫn với thanh 1.',
      say: '银行',
    },
    {
      title: 'Bộ 氵 và 讠',
      body: 'Bộ 氵 (ba chấm thủy) thường liên quan đến nước: 汉, 没. Bộ 讠 (ngôn) thường liên quan đến lời nói: 语, 谁, 请, 说, 读.',
      say: '汉语',
    },
  ],

  writeChars: ['四', '五', '书', '月', '号', '看'],

  drills: [
    {
      title: 'Ba chữ đơn mới (认识独体字)',
      hint: 'Sách trang 65: nguồn gốc hình chữ. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '四', p: 'sì', m: 'số 4' },
        { h: '五', p: 'wǔ', m: 'số 5' },
        { h: '书', p: 'shū', m: 'gốc: bút lông chấm vào nghiên mực để viết; nay là viết chữ, sách' },
      ],
    },
    {
      title: 'Đọc to các tháng và các thứ (练习 2, sách trang 63)',
      hint: 'Bấm để nghe từng từ.',
      items: [
        { h: '一月', p: 'yī yuè', m: 'tháng 1' }, { h: '二月', p: 'èr yuè', m: 'tháng 2' }, { h: '三月', p: 'sān yuè', m: 'tháng 3' }, { h: '四月', p: 'sì yuè', m: 'tháng 4' },
        { h: '五月', p: 'wǔ yuè', m: 'tháng 5' }, { h: '六月', p: 'liù yuè', m: 'tháng 6' }, { h: '七月', p: 'qī yuè', m: 'tháng 7' }, { h: '八月', p: 'bā yuè', m: 'tháng 8' },
        { h: '九月', p: 'jiǔ yuè', m: 'tháng 9' }, { h: '十月', p: 'shí yuè', m: 'tháng 10' }, { h: '十一月', p: 'shíyī yuè', m: 'tháng 11' }, { h: '十二月', p: "shí'èr yuè", m: 'tháng 12' },
        { h: '星期一', p: 'xīngqī yī', m: 'thứ hai' }, { h: '星期二', p: 'xīngqī èr', m: 'thứ ba' }, { h: '星期三', p: 'xīngqī sān', m: 'thứ tư' }, { h: '星期四', p: 'xīngqī sì', m: 'thứ năm' },
        { h: '星期五', p: 'xīngqī wǔ', m: 'thứ sáu' }, { h: '星期六', p: 'xīngqī liù', m: 'thứ bảy' }, { h: '星期日', p: 'xīngqīrì', m: 'chủ nhật' }, { h: '星期天', p: 'xīngqītiān', m: 'chủ nhật' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi (练习 3, sách trang 63)',
      items: [
        { q: '今天几月几号星期几？ (Jīntiān jǐ yuè jǐ hào xīngqī jǐ?)', hint: 'Ví dụ: 今天9月1号，星期三。 Dùng ngày thật hôm nay.' },
        { q: '明天几月几号星期几？ (Míngtiān jǐ yuè jǐ hào xīngqī jǐ?)', hint: 'Trả lời cho ngày mai.' },
        { q: '昨天几月几号星期几？ (Zuótiān jǐ yuè jǐ hào xīngqī jǐ?)', hint: 'Trả lời cho ngày hôm qua.' },
        { q: '明天你去哪儿做什么？ (Míngtiān nǐ qù nǎr zuò shénme?)', hint: '明天我去……（nơi chốn）……（làm gì）。 Ví dụ: 明天我去学校看书。' },
        { q: '星期日你去哪儿做什么？ (Xīngqīrì nǐ qù nǎr zuò shénme?)', hint: '星期日我去……' },
      ],
    },
    {
      title: 'Hoạt động theo cặp (运用 1, sách trang 66)',
      items: [
        { q: 'A: 今天是几月几号？  B: ……', hint: 'Trả lời bằng ngày thật hôm nay.' },
        { q: 'A: 明天你做什么？  B: 明天我去……', hint: 'Nói dự định của bạn.' },
        { q: 'Hoạt động nhóm: hỏi và ghi ngày sinh của các bạn. Ví dụ: 李月 8月31号', hint: 'Mẫu: 你的生日是几月几号？ 我的生日是……' },
      ],
    },
  ],

  sentences: [
    { parts: ['请问', '，', '今天', '几', '号'], pinyin: 'Qǐngwèn, jīntiān jǐ hào?', vi: 'Xin hỏi hôm nay là ngày mấy?' },
    { parts: ['今天', '9', '月', '1', '号'], pinyin: 'Jīntiān jiǔ yuè yī hào.', vi: 'Hôm nay ngày 1 tháng 9.' },
    { parts: ['今天', '星期', '几'], pinyin: 'Jīntiān xīngqī jǐ?', vi: 'Hôm nay là thứ mấy?' },
    { parts: ['昨天', '是', '几', '月', '几', '号'], pinyin: 'Zuótiān shì jǐ yuè jǐ hào?', vi: 'Hôm qua là ngày mấy tháng mấy?' },
    { parts: ['明天', '星期', '六'], pinyin: 'Míngtiān xīngqī liù.', vi: 'Ngày mai là thứ bảy.' },
    { parts: ['我', '去', '学校'], pinyin: 'Wǒ qù xuéxiào.', vi: 'Tôi đến trường.' },
    { parts: ['你', '去', '学校', '做', '什么'], pinyin: 'Nǐ qù xuéxiào zuò shénme?', vi: 'Bạn đến trường làm gì?' },
    { parts: ['我', '去', '学校', '看', '书'], pinyin: 'Wǒ qù xuéxiào kàn shū.', vi: 'Tôi đến trường đọc sách.' },
  ],

  // ───────── Sách bài tập, bài 7 (đáp án: "Đáp án sách bài tập", trang 12–13) ─────────
  dictations: [
    {
      title: 'Sách bài tập · Nghe, gõ pinyin từ hai âm tiết (ngữ âm, câu 1–8)',
      hint: 'Nghe đoạn ghi âm (07-2), gõ lại pinyin của từ bạn nghe được (có thể không cần dấu).',
      clip: { label: '07-2 · Sách bài tập, ngữ âm phần 1', src: A + 'w07-2.mp3' },
      items: [
        { prompt: 'Câu 1', answer: 'shítáng', gloss: '食堂' }, { prompt: 'Câu 2', answer: 'chángcháng', gloss: '常常' }, { prompt: 'Câu 3', answer: 'niánqīng', gloss: '年轻' }, { prompt: 'Câu 4', answer: 'míngnián', gloss: '明年' },
        { prompt: 'Câu 5', answer: 'héshì', gloss: '合适' }, { prompt: 'Câu 6', answer: 'ménkǒu', gloss: '门口' }, { prompt: 'Câu 7', answer: 'érqiě', gloss: '而且' }, { prompt: 'Câu 8', answer: 'quánmiàn', gloss: '全面' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, ghi dấu thanh (ngữ âm, câu 9–16)',
      hint: 'Nghe tiếp (07-2), gõ lại từ có đủ dấu thanh. Ví dụ: fangmen → fáng mén.',
      clip: { label: '07-2 · Sách bài tập, ngữ âm phần 2', src: A + 'w07-2.mp3' },
      needTone: true,
      items: [
        { prompt: 'fang men', answer: 'fáng mén', gloss: '房门' }, { prompt: 'fangjian', answer: 'fángjiān', gloss: '房间' },
        { prompt: 'pixie', answer: 'píxié', gloss: '皮鞋' }, { prompt: 'pijiu', answer: 'píjiǔ', gloss: '啤酒' },
        { prompt: 'shihou', answer: 'shíhou', gloss: '时候' }, { prompt: 'shijian', answer: 'shíjiān', gloss: '时间' },
        { prompt: 'hui jia', answer: 'huí jiā', gloss: '回家' }, { prompt: 'hui guo', answer: 'huí guó', gloss: '回国' },
        { prompt: 'jie hun', answer: 'jié hūn', gloss: '结婚' }, { prompt: 'jieshu', answer: 'jiéshù', gloss: '结束' },
        { prompt: 'li kai', answer: 'lí kāi', gloss: '离开' }, { prompt: 'yi ci', answer: 'yí cì', gloss: '一次' },
        { prompt: 'qingxu', answer: 'qíngxù', gloss: '情绪' }, { prompt: 'chenggong', answer: 'chénggōng', gloss: '成功' },
        { prompt: 'jueding', answer: 'juédìng', gloss: '决定' }, { prompt: 'liulan', answer: 'liúlǎn', gloss: '浏览' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 9–12)',
      hint: 'Nghe đoạn ghi âm (07-1, phần 3), chọn A, B hoặc C. Câu 9: A 星期一 · B 星期二 · C 星期三. Câu 10: A 8月19号 · B 8月20号 · C 8月21号. Câu 11: A 1月22号 · B 7月22号 · C 3月22号. Câu 12: A 去学校 · B 去医院 · C 去朋友家.',
      clip: { label: '07-1 · Sách bài tập, nghe phần 3 (câu 9–12)', src: A + 'w07-1.mp3' },
      items: [
        { prompt: 'Câu 9', answer: 'C', gloss: '星期三' }, { prompt: 'Câu 10', answer: 'C', gloss: '8月21号' },
        { prompt: 'Câu 11', answer: 'A', gloss: '1月22号' }, { prompt: 'Câu 12', answer: 'C', gloss: '去朋友家' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu hỏi với câu trả lời (câu 18–22)',
      hint: 'A 她29岁。 B 今天星期日。 C 我去同学家看书。 D 我不会，我爸爸会。 E 今天是10月5号。 F 好的，谢谢！ Gõ chữ cái A–F.',
      items: [
        { prompt: '今天星期几？', answer: 'B', gloss: '今天星期日。' }, { prompt: '今天是几月几号？', answer: 'E', gloss: '今天是10月5号。' },
        { prompt: '你的汉语老师多大了？', answer: 'A', gloss: '她29岁。' }, { prompt: '明天你做什么？', answer: 'C', gloss: '我去同学家看书。' },
        { prompt: '你会说汉语吗？', answer: 'D', gloss: '我不会，我爸爸会。' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ vào chỗ trống (câu 23–30)',
      hint: 'A 几 · B 月 · C 号 · D 名字 · E 星期 · F 问 · G 去 · H 做 · I 会. Gõ chữ cái A–I. (Câu 23–26 chọn từ A–E, câu 27–30 chọn từ F–I.)',
      items: [
        { prompt: '昨天是（ ）三。', answer: 'E', gloss: '星期' }, { prompt: '明天星期（ ）？', answer: 'A', gloss: '几' },
        { prompt: '今天是9（ ）31号，星期六。', answer: 'B', gloss: '月' }, { prompt: '你10月几（ ）去中国？', answer: 'C', gloss: '号' },
        { prompt: '明天我（ ）一个中国朋友家吃饭。', answer: 'G', gloss: '去' }, { prompt: '明天星期六，你（ ）什么？', answer: 'H', gloss: '做' },
        { prompt: '我（ ）说汉语，不（ ）写汉字。', answer: 'I', gloss: '会' }, { prompt: '请（ ），这个汉字怎么读？', answer: 'F', gloss: '问' },
      ],
    },
  ],
}
