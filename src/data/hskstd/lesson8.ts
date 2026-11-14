import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 1, Bài 8: 我想喝茶。 (sách trang 68–75).
 * Nghe: 08-1…08-4 (giáo trình). Sách bài tập (trang 55–62, đáp án trang 14–15): nghe gõ từ hai âm tiết, ghi dấu thanh,
 * nghe chọn đáp án 9–12, nối câu hỏi/đáp 18–22, điền từ 23–30.
 * Phần tiếng Việt do app tự thêm ở những chỗ sách không có.
 */

const A = '/audio/hsk-std1/'

export const hskStd1Lesson8: Lesson = {
  id: 8,
  title: 'Tôi muốn uống trà.',
  hanzi: '我想喝茶。',
  pinyin: 'Wǒ xiǎng hē chá.',
  vi: 'Tôi muốn uống trà.',
  intro: 'Nói về mong muốn và hỏi giá: 你想喝什么？ 这个杯子多少钱？ Học động từ năng nguyện 想, đại từ nghi vấn 多少, lượng từ 个 và 口, cách nói số tiền; thanh 3 + các thanh; kết cấu chữ trên-dưới; bộ 钅 và 口.',

  dialogue: [
    { who: 'A', hanzi: '你想喝什么？', pinyin: 'Nǐ xiǎng hē shénme?', vi: 'Cô muốn uống gì?', scene: 'Hội thoại 1 · ở quán ăn' },
    { who: 'B', hanzi: '我想喝茶。', pinyin: 'Wǒ xiǎng hē chá.', vi: 'Tôi muốn uống trà.' },
    { who: 'A', hanzi: '你想吃什么？', pinyin: 'Nǐ xiǎng chī shénme?', vi: 'Cô muốn dùng món gì?' },
    { who: 'B', hanzi: '我想吃米饭。', pinyin: 'Wǒ xiǎng chī mǐfàn.', vi: 'Tôi muốn ăn cơm.' },
    { who: 'A', hanzi: '下午你想做什么？', pinyin: 'Xiàwǔ nǐ xiǎng zuò shénme?', vi: 'Buổi chiều bạn muốn làm gì?', scene: 'Hội thoại 2 · trong phòng khách' },
    { who: 'B', hanzi: '下午我想去商店。', pinyin: 'Xiàwǔ wǒ xiǎng qù shāngdiàn.', vi: 'Mình muốn đến cửa hàng.' },
    { who: 'A', hanzi: '你想买什么？', pinyin: 'Nǐ xiǎng mǎi shénme?', vi: 'Bạn muốn mua gì vậy?' },
    { who: 'B', hanzi: '我想买一个杯子。', pinyin: 'Wǒ xiǎng mǎi yí ge bēizi.', vi: 'Mình muốn mua một cái ly.' },
    { who: 'A', hanzi: '你好！这个杯子多少钱？', pinyin: 'Nǐ hǎo! Zhège bēizi duōshao qián?', vi: 'Chào cô! Cái ly này bao nhiêu tiền?', scene: 'Hội thoại 3 · ở cửa hàng' },
    { who: 'B', hanzi: '28块。', pinyin: 'Èrshíbā kuài.', vi: '28 đồng.' },
    { who: 'A', hanzi: '那个杯子多少钱？', pinyin: 'Nàge bēizi duōshao qián?', vi: 'Còn cái ly đó?' },
    { who: 'B', hanzi: '那个杯子18块钱。', pinyin: 'Nàge bēizi shíbā kuài qián.', vi: 'Ly đó 18 đồng.' },
  ],
  dialogueClips: [
    { label: '08-1 · Hội thoại 1: 你想喝什么？', src: A + 'l08-1.mp3' },
    { label: '08-2 · Hội thoại 2: 下午你想做什么？', src: A + 'l08-2.mp3' },
    { label: '08-3 · Hội thoại 3: 这个杯子多少钱？', src: A + 'l08-3.mp3' },
  ],
  dialogueTip: '<b>想 + động từ</b>: muốn làm gì. Hỏi giá: <b>…… 多少钱？</b>. Số tiền nói bằng <b>块</b> (khẩu ngữ của 元): 28块. Chú ý <b>一个</b> đọc <b>yí ge</b> (一 trước thanh 4 đọc thanh 2).',
  slowSay: '我想喝茶',

  vocab: [
    { hanzi: '想', parts: '相 (tương) + 心 (tâm)', pinyin: 'xiǎng', pos: 'động từ năng nguyện', meaning: 'muốn', han_viet: 'tưởng' },
    { hanzi: '喝', parts: '口 (khẩu) + 曷 (hạt)', pinyin: 'hē', pos: 'động từ', meaning: 'uống', han_viet: 'hát' },
    { hanzi: '茶', parts: '艹 (thảo) + 人 + 木 (mộc)', pinyin: 'chá', pos: 'danh từ', meaning: 'trà', han_viet: 'trà' },
    { hanzi: '吃', parts: '口 (khẩu) + 乞 (khất)', pinyin: 'chī', pos: 'động từ', meaning: 'ăn', han_viet: 'ngật' },
    { hanzi: '米饭', parts: '米 (mễ) + 饭 (phạn)', pinyin: 'mǐfàn', pos: 'danh từ', meaning: 'cơm', han_viet: 'mễ phạn' },
    { hanzi: '下午', parts: '下 (hạ) + 午 (ngọ)', pinyin: 'xiàwǔ', pos: 'danh từ', meaning: 'buổi chiều', han_viet: 'hạ ngọ' },
    { hanzi: '商店', parts: '商 (thương) + 店 (điếm)', pinyin: 'shāngdiàn', pos: 'danh từ', meaning: 'cửa hàng', han_viet: 'thương điếm' },
    { hanzi: '买', parts: '乛 + 头 (lược)', pinyin: 'mǎi', pos: 'động từ', meaning: 'mua', han_viet: 'mãi' },
    { hanzi: '个', pinyin: 'gè', pos: 'lượng từ', meaning: 'cái (lượng từ dùng chung)', han_viet: 'cá' },
    { hanzi: '杯子', parts: '杯 = 木 (mộc) + 不; 子 (tử)', pinyin: 'bēizi', pos: 'danh từ', meaning: 'ly, tách', han_viet: 'bôi tử' },
    { hanzi: '这', pinyin: 'zhè', pos: 'đại từ', meaning: 'đây, này', han_viet: 'giá' },
    { hanzi: '多少', parts: '多 (đa) + 少 (thiểu)', pinyin: 'duōshao', pos: 'đại từ', meaning: 'bao nhiêu', han_viet: 'đa thiểu' },
    { hanzi: '钱', parts: '钅 (bộ kim) + 戋 (tiền)', pinyin: 'qián', pos: 'danh từ', meaning: 'tiền', han_viet: 'tiền' },
    { hanzi: '块', parts: '土 (thổ) + 夬', pinyin: 'kuài', pos: 'lượng từ', meaning: 'đồng (đơn vị tiền tệ)', han_viet: 'khối' },
    { hanzi: '那', parts: '冄 + 阝 (bộ ấp)', pinyin: 'nà', pos: 'đại từ', meaning: 'kia, đó', han_viet: 'na' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Cách nói tiền', title: 'Cách diễn đạt số tiền',
      intro: 'Đơn vị cơ bản của nhân dân tệ (tiền Trung Quốc) là 元. Trong văn nói, 元 thường được thay bằng 块.',
      groups: [{ label: 'Ví dụ trong sách', items: [['一元 (块)', 'yì yuán (kuài)', 'một đồng'], ['五元 (块)', 'wǔ yuán (kuài)', 'năm đồng'], ['十元 (块)', 'shí yuán (kuài)', 'mười đồng'], ['五十元 (块)', 'wǔshí yuán (kuài)', 'năm mươi đồng'], ['一百元 (块)', 'yìbǎi yuán (kuài)', 'một trăm đồng']] }],
    },
    {
      kind: 'examples', label: 'Thanh 3 + các thanh', title: 'Sự kết hợp thanh điệu của từ hai âm tiết (3): thanh 3 + thanh 1/2/3/4',
      clip: { label: '08-4 · Nghe và đọc theo (kết hợp thanh điệu)', src: A + 'l08-4.mp3' },
      intro: 'Âm tiết đầu thanh 3, âm tiết sau lần lượt thanh 1, 2, 3, 4. Nhớ: khi sau thanh 3 là thanh 3, âm tiết đầu đọc thành thanh 2 (bài 1).',
      groups: [
        { label: 'Bốn ví dụ trong sách', items: [['手机', 'shǒujī', 'điện thoại · 3+1'], ['手镯', 'shǒuzhuó', 'vòng tay · 3+2'], ['手表', 'shǒubiǎo', 'đồng hồ đeo tay · 3+3'], ['手套', 'shǒutào', 'găng tay · 3+4']] },
        { label: 'Nghe và đọc theo (08-4)', items: [
          ['老师', 'lǎoshī', 'thầy cô giáo'], ['老人', 'lǎorén', 'người già'], ['雨伞', 'yǔsǎn', 'ô, dù'], ['有用', 'yǒu yòng', 'hữu dụng'],
          ['每天', 'měi tiān', 'mỗi ngày'], ['每年', 'měi nián', 'mỗi năm'], ['美好', 'měihǎo', 'tốt đẹp'], ['美丽', 'měilì', 'xinh đẹp'],
          ['海边', 'hǎibiān', 'bờ biển'], ['海绵', 'hǎimián', 'bọt biển'], ['洗澡', 'xǐ zǎo', 'tắm'], ['感谢', 'gǎnxiè', 'cảm ơn'],
          ['已经', 'yǐjīng', 'đã'], ['以前', 'yǐqián', 'trước đây'], ['表演', 'biǎoyǎn', 'biểu diễn'], ['表现', 'biǎoxiàn', 'biểu hiện'],
        ] },
      ],
    },
    {
      kind: 'examples', label: 'Cấu trúc chữ Hán', title: 'Cấu trúc của chữ Hán (3): kết cấu trên-dưới và trên-giữa-dưới',
      intro: 'Chữ có kết cấu tổ hợp còn gồm kết cấu trên-dưới (上下结构) và kết cấu trên-giữa-dưới (上中下结构).',
      groups: [
        { label: 'Kết cấu trên-dưới', items: [['是', 'shì', 'là'], ['爸', 'bà', 'cha, bố']] },
        { label: 'Kết cấu trên-giữa-dưới', items: [['茶', 'chá', 'trà'], ['高', 'gāo', 'cao']] },
      ],
    },
    {
      kind: 'examples', label: 'Bộ 钅 và 口', title: 'Các bộ của chữ Hán: 钅 và 口',
      intro: 'Bộ 钅 (kim) thường liên quan đến kim loại. Bộ 口 (khẩu) thường liên quan đến miệng.',
      groups: [
        { label: 'Bộ 钅 (kim loại)', items: [['钟', 'zhōng', 'đồng hồ'], ['钱', 'qián', 'tiền']] },
        { label: 'Bộ 口 (miệng)', items: [['吃', 'chī', 'ăn'], ['喝', 'hē', 'uống']] },
      ],
    },
  ],

  notes: [
    {
      title: 'Động từ năng nguyện 想',
      body: '想 thường đặt trước động từ để diễn tả mong muốn hay dự định. Ví dụ: 我想学汉语。 明天我想去学校看书。 我想买一个杯子。',
      say: '我想买一个杯子',
    },
    {
      title: 'Đại từ nghi vấn 多少',
      body: '多少 dùng để hỏi số lượng trên 10, lượng từ đứng sau 多少 có thể bỏ. 多少 cũng dùng để hỏi giá với cấu trúc: ……多少钱？ Ví dụ: 你们学校有多少(个)学生？ 你有多少(个)汉语老师？ 这个杯子多少钱？',
      say: '这个杯子多少钱',
    },
    {
      title: 'Lượng từ 个 và 口',
      body: '个 là lượng từ thường gặp nhất, dùng trước danh từ không có lượng từ riêng: 三个老师, 五个学生, 一个杯子. 口 dùng cho số người trong gia đình (bài 5): 李老师家有六口人, 我家有三口人.',
      say: '三个老师',
    },
    {
      title: 'Cách nói số tiền',
      body: 'Đơn vị cơ bản của nhân dân tệ là 元. Trong văn nói, 元 thường thay bằng 块: 一元 (块), 五元 (块), 十元 (块), 五十元 (块), 一百元 (块).',
      say: '五十块',
    },
    {
      title: 'Thanh 3 + các thanh',
      body: 'Thanh 3 đứng trước thanh 1, 2, 4 chỉ đọc nửa đầu (hạ giọng thấp, không lên): 手机, 手镯, 手套. Thanh 3 + thanh 3 thì âm đầu đọc thành thanh 2: 手表 (shóubiǎo).',
      say: '手机',
    },
    {
      title: 'Bộ 钅 và 口',
      body: 'Bộ 钅 thường liên quan đến kim loại: 钟, 钱. Bộ 口 thường liên quan đến miệng: 吃, 喝.',
      say: '吃喝',
    },
  ],

  writeChars: ['少', '个', '茶', '高', '是', '爸'],

  drills: [
    {
      title: 'Hai chữ đơn mới (认识独体字)',
      hint: 'Sách trang 73: nguồn gốc hình chữ. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '少', p: 'shǎo', m: 'ít, không nhiều, trái nghĩa 多' },
        { h: '个', p: 'gè', m: 'gốc là một cá nhân, nay là lượng từ' },
      ],
    },
    {
      title: 'Hỏi giá và nói số tiền',
      hint: 'Bấm để nghe từng câu, tự trả lời bằng số tiền khác.',
      items: [
        { h: '这个杯子多少钱？', p: 'Zhège bēizi duōshao qián?', m: 'Cái ly này bao nhiêu tiền?' },
        { h: '二十八块。', p: 'Èrshíbā kuài.', m: '28 đồng.' },
        { h: '那个杯子多少钱？', p: 'Nàge bēizi duōshao qián?', m: 'Cái ly đó bao nhiêu tiền?' },
        { h: '那个杯子十八块钱。', p: 'Nàge bēizi shíbā kuài qián.', m: 'Ly đó 18 đồng.' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi (练习 2, sách trang 71)',
      items: [
        { q: '你想吃什么？ (Nǐ xiǎng chī shénme?)', hint: '我想吃……（米饭 / 中国菜 …）' },
        { q: '你想喝什么？ (Nǐ xiǎng hē shénme?)', hint: '我想喝……（茶 / 水 …）' },
        { q: '明天下午你想做什么？ (Míngtiān xiàwǔ nǐ xiǎng zuò shénme?)', hint: '明天下午我想去……（nơi chốn）……（làm gì）。' },
        { q: '你去哪个商店买杯子？ (Nǐ qù nǎge shāngdiàn mǎi bēizi?)', hint: '我去……商店买杯子。' },
        { q: '一个杯子多少钱？ (Yí ge bēizi duōshao qián?)', hint: '一个杯子……块（钱）。' },
      ],
    },
    {
      title: 'Hoạt động theo cặp (运用 1, sách trang 74)',
      items: [
        { q: 'A: 今天下午你想做什么？  B: ……', hint: 'Nói dự định buổi chiều của bạn.' },
        { q: 'A: 你们班有多少个学生？  B: ……', hint: '我们班有……个学生。' },
        { q: 'A: 你们学校有多少个老师？  B: ……', hint: '我们学校有……个老师。' },
        { q: 'Hoạt động nhóm: hỏi nhau kế hoạch từng ngày trong tuần (thứ hai đến chủ nhật) và ghi vào bảng.', hint: 'Mẫu của sách: 谢朋，星期一去学校，星期六去商店。' },
      ],
    },
  ],

  sentences: [
    { parts: ['你', '想', '喝', '什么'], pinyin: 'Nǐ xiǎng hē shénme?', vi: 'Cô muốn uống gì?' },
    { parts: ['我', '想', '喝', '茶'], pinyin: 'Wǒ xiǎng hē chá.', vi: 'Tôi muốn uống trà.' },
    { parts: ['我', '想', '吃', '米饭'], pinyin: 'Wǒ xiǎng chī mǐfàn.', vi: 'Tôi muốn ăn cơm.' },
    { parts: ['下午', '我', '想', '去', '商店'], pinyin: 'Xiàwǔ wǒ xiǎng qù shāngdiàn.', vi: 'Buổi chiều mình muốn đến cửa hàng.' },
    { parts: ['我', '想', '买', '一', '个', '杯子'], pinyin: 'Wǒ xiǎng mǎi yí ge bēizi.', vi: 'Mình muốn mua một cái ly.' },
    { parts: ['这', '个', '杯子', '多少', '钱'], pinyin: 'Zhège bēizi duōshao qián?', vi: 'Cái ly này bao nhiêu tiền?' },
    { parts: ['那', '个', '杯子', '十八', '块', '钱'], pinyin: 'Nàge bēizi shíbā kuài qián.', vi: 'Ly đó 18 đồng.' },
  ],

  // ───────── Sách bài tập, bài 8 (đáp án: "Đáp án sách bài tập", trang 14–16) ─────────
  dictations: [
    {
      title: 'Sách bài tập · Nghe, gõ pinyin từ hai âm tiết (ngữ âm, câu 1–8)',
      hint: 'Nghe đoạn ghi âm (08-2), gõ lại pinyin của từ bạn nghe được (có thể không cần dấu).',
      clip: { label: '08-2 · Sách bài tập, ngữ âm phần 1', src: A + 'w08-2.mp3' },
      items: [
        { prompt: 'Câu 1', answer: 'yǔyán', gloss: '语言' }, { prompt: 'Câu 2', answer: 'guǎngbō', gloss: '广播' }, { prompt: 'Câu 3', answer: 'shuǐpíng', gloss: '水平' }, { prompt: 'Câu 4', answer: 'yǒumíng', gloss: '有名' },
        { prompt: 'Câu 5', answer: 'dǎsǎo', gloss: '打扫' }, { prompt: 'Câu 6', answer: 'xǐhào', gloss: '喜好' }, { prompt: 'Câu 7', answer: 'kǎoshì', gloss: '考试' }, { prompt: 'Câu 8', answer: 'yǔnxǔ', gloss: '允许' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, ghi dấu thanh (ngữ âm, câu 9–16)',
      hint: 'Nghe tiếp (08-2), gõ lại từ có đủ dấu thanh. Ví dụ: xiaoxin → xiǎoxīn.',
      clip: { label: '08-2 · Sách bài tập, ngữ âm phần 2', src: A + 'w08-2.mp3' },
      needTone: true,
      items: [
        { prompt: 'xiaoxin', answer: 'xiǎoxīn', gloss: '小心' }, { prompt: 'xiaoming', answer: 'xiǎomíng', gloss: '小名' },
        { prompt: 'zongzhi', answer: 'zǒngzhī', gloss: '总之' }, { prompt: 'zhunshi', answer: 'zhǔnshí', gloss: '准时' },
        { prompt: 'juxing', answer: 'jǔxíng', gloss: '举行' }, { prompt: 'luxing', answer: 'lǚxíng', gloss: '旅行' },
        { prompt: 'xiaoshi', answer: 'xiǎoshí', gloss: '小时' }, { prompt: 'shouzhi', answer: 'shǒuzhǐ', gloss: '手指' },
        { prompt: 'xuanze', answer: 'xuǎnzé', gloss: '选择' }, { prompt: 'xi zao', answer: 'xǐ zǎo', gloss: '洗澡' },
        { prompt: 'pao bu', answer: 'pǎo bù', gloss: '跑步' }, { prompt: 'zongshi', answer: 'zǒngshì', gloss: '总是' },
        { prompt: 'yexu', answer: 'yěxǔ', gloss: '也许' }, { prompt: 'ganmao', answer: 'gǎnmào', gloss: '感冒' },
        { prompt: 'bijiao', answer: 'bǐjiào', gloss: '比较' }, { prompt: 'bisai', answer: 'bǐsài', gloss: '比赛' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 9–12)',
      hint: 'Nghe đoạn ghi âm (08-1, phần 3), chọn A, B hoặc C. Câu 9: A 桌子 · B 椅子 · C 杯子. Câu 10: A 茶 · B 咖啡 · C 米饭. Câu 11: A 商店 · B 学校 · C 朋友家. Câu 12: A 38块 · B 79块 · C 49块.',
      clip: { label: '08-1 · Sách bài tập, nghe phần 3 (câu 9–12)', src: A + 'w08-1.mp3' },
      items: [
        { prompt: 'Câu 9', answer: 'C', gloss: '杯子' }, { prompt: 'Câu 10', answer: 'A', gloss: '茶' },
        { prompt: 'Câu 11', answer: 'C', gloss: '朋友家' }, { prompt: 'Câu 12', answer: 'C', gloss: '49块' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu hỏi với câu trả lời (câu 18–22)',
      hint: 'A 我喝茶，谢谢。 B 这个菜18块。 C 25块。 D 我想去商店买杯子。 E 不去，明天我去朋友家。 F 好的，谢谢！ Gõ chữ cái A–F.',
      items: [
        { prompt: '请问，这个杯子多少钱？', answer: 'C', gloss: '25块。' }, { prompt: '你想喝什么？', answer: 'A', gloss: '我喝茶，谢谢。' },
        { prompt: '你好，这个菜多少钱？', answer: 'B', gloss: '这个菜18块。' }, { prompt: '下午你想去哪儿？', answer: 'D', gloss: '我想去商店买杯子。' },
        { prompt: '明天你去学校吗？', answer: 'E', gloss: '不去，明天我去朋友家。' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ vào chỗ trống (câu 23–30)',
      hint: 'A 吃 · B 喝 · C 买 · D 名字 · E 做 · F 几 · G 多少. Gõ chữ cái A–G. (Câu 23–26 chọn từ A–E, câu 27–30 chọn từ F–G; câu 30 sách cho phép F hoặc G, bài này gõ F.)',
      items: [
        { prompt: '我想（ ）米饭。', answer: 'A', gloss: '吃' }, { prompt: '您好，您（ ）茶吗？', answer: 'B', gloss: '喝' },
        { prompt: '我妈妈会（ ）中国菜。', answer: 'E', gloss: '做' }, { prompt: '你想去商店（ ）什么？', answer: 'C', gloss: '买' },
        { prompt: '你家有（ ）口人？', answer: 'F', gloss: '几' }, { prompt: '你们学校有（ ）学生？', answer: 'G', gloss: '多少' },
        { prompt: '你好，这个杯子（ ）钱？', answer: 'G', gloss: '多少' }, { prompt: 'A: 你有（ ）个中国朋友？ B: 两个。', answer: 'F', accept: ['g'], gloss: '几' },
      ],
    },
  ],
}
