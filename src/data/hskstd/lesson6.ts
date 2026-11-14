import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 1, Bài 6: 我会说汉语。 (sách trang 52–59).
 * Nghe: 06-1…06-4 (giáo trình). Sách bài tập (trang 39–46, đáp án trang 10–11): nghe gõ từ hai âm tiết, ghi dấu thanh,
 * nghe chọn đáp án 9–12, nối câu hỏi/đáp 18–22, điền từ 23–30.
 * Phần tiếng Việt do app tự thêm ở những chỗ sách không có.
 */

const A = '/audio/hsk-std1/'

export const hskStd1Lesson6: Lesson = {
  id: 6,
  title: 'Tôi biết nói tiếng Trung Quốc.',
  hanzi: '我会说汉语。',
  pinyin: 'Wǒ huì shuō Hànyǔ.',
  vi: 'Tôi biết nói tiếng Trung Quốc.',
  intro: 'Nói về khả năng và nhận xét: 你会说汉语吗？ 中国菜很好吃。 Học động từ năng nguyện 会, câu có vị ngữ là tính từ, đại từ nghi vấn 怎么; sự kết hợp thanh điệu của từ hai âm tiết (thanh 1 + các thanh); nét phẩy gập, nghiêng móc, hất; cấu trúc chữ Hán.',

  dialogue: [
    { who: 'A', hanzi: '你会说汉语吗？', pinyin: 'Nǐ huì shuō Hànyǔ ma?', vi: 'Em có biết nói tiếng Trung Quốc không?', scene: 'Hội thoại 1 · ở trường' },
    { who: 'B', hanzi: '我会说汉语。', pinyin: 'Wǒ huì shuō Hànyǔ.', vi: 'Em có biết.' },
    { who: 'A', hanzi: '你妈妈会说汉语吗？', pinyin: 'Nǐ māma huì shuō Hànyǔ ma?', vi: 'Mẹ em biết nói tiếng Trung Quốc không?' },
    { who: 'B', hanzi: '她不会说。', pinyin: 'Tā bú huì shuō.', vi: 'Mẹ em thì không.' },
    { who: 'A', hanzi: '中国菜好吃吗？', pinyin: 'Zhōngguó cài hǎochī ma?', vi: 'Món ăn Trung Quốc có ngon không?', scene: 'Hội thoại 2 · trong nhà bếp' },
    { who: 'B', hanzi: '中国菜很好吃。', pinyin: 'Zhōngguó cài hěn hǎochī.', vi: 'Rất ngon.' },
    { who: 'A', hanzi: '你会做中国菜吗？', pinyin: 'Nǐ huì zuò Zhōngguó cài ma?', vi: 'Anh có biết nấu món Trung Quốc không?' },
    { who: 'B', hanzi: '我不会做。', pinyin: 'Wǒ bú huì zuò.', vi: 'Tôi không biết.' },
    { who: 'A', hanzi: '你会写汉字吗？', pinyin: 'Nǐ huì xiě Hànzì ma?', vi: 'Anh có biết viết chữ Hán không?', scene: 'Hội thoại 3 · ở thư viện' },
    { who: 'B', hanzi: '我会写。', pinyin: 'Wǒ huì xiě.', vi: 'Tôi có biết.' },
    { who: 'A', hanzi: '这个字怎么写？', pinyin: 'Zhège zì zěnme xiě?', vi: 'Vậy chữ này anh viết thế nào?' },
    { who: 'B', hanzi: '对不起，这个字我会读，不会写。', pinyin: 'Duìbuqǐ, zhège zì wǒ huì dú, bú huì xiě.', vi: 'Xin lỗi, chữ này tôi biết đọc chứ không biết viết.' },
  ],
  dialogueClips: [
    { label: '06-1 · Hội thoại 1: 你会说汉语吗？', src: A + 'l06-1.mp3' },
    { label: '06-2 · Hội thoại 2: 中国菜好吃吗？', src: A + 'l06-2.mp3' },
    { label: '06-3 · Hội thoại 3: 你会写汉字吗？', src: A + 'l06-3.mp3' },
  ],
  dialogueTip: '<b>会</b> + động từ: biết làm gì nhờ học mà có. Phủ định là <b>不会</b>. Chữ <b>不</b> đứng trước thanh 4 đọc <b>bú</b>: bú huì. Khi muốn nhận xét, dùng <b>很 + tính từ</b>: 中国菜很好吃. Hỏi cách làm: <b>怎么 + động từ</b>: 这个字怎么写？',
  slowSay: '我会说汉语',

  vocab: [
    { hanzi: '会', pinyin: 'huì', pos: 'động từ năng nguyện', meaning: 'biết (nhờ học mà có khả năng)', han_viet: 'hội' },
    { hanzi: '说', parts: '讠 (ngôn) + 兑 (đoài)', pinyin: 'shuō', pos: 'động từ', meaning: 'nói', han_viet: 'thuyết' },
    { hanzi: '妈妈', pinyin: 'māma', pos: 'danh từ', meaning: 'mẹ', han_viet: '' },
    { hanzi: '菜', parts: '艹 (thảo) + 采 (thải)', pinyin: 'cài', pos: 'danh từ', meaning: 'món ăn, thức ăn', han_viet: 'thái' },
    { hanzi: '很', parts: '彳 (xích) + 艮 (cấn)', pinyin: 'hěn', pos: 'phó từ', meaning: 'rất', han_viet: 'ngận' },
    { hanzi: '好吃', parts: '好 (hảo) + 吃 (ngật)', pinyin: 'hǎochī', pos: 'tính từ', meaning: 'ngon. Từ ngoài đại cương HSK 1 (dấu * trong sách)', han_viet: '' },
    { hanzi: '做', parts: '亻 (nhân) + 故 (cố)', pinyin: 'zuò', pos: 'động từ', meaning: 'làm, nấu', han_viet: 'tố' },
    { hanzi: '写', parts: '冖 (mịch) + 与 (dữ)', pinyin: 'xiě', pos: 'động từ', meaning: 'viết', han_viet: 'tả' },
    { hanzi: '汉字', parts: '汉 (Hán) + 字 (tự)', pinyin: 'Hànzì', pos: 'danh từ', meaning: 'chữ Hán', han_viet: 'Hán tự' },
    { hanzi: '字', parts: '宀 (miên) + 子 (tử)', pinyin: 'zì', pos: 'danh từ', meaning: 'chữ', han_viet: 'tự' },
    { hanzi: '怎么', parts: '怎 = 乍 + 心; 么', pinyin: 'zěnme', pos: 'đại từ', meaning: 'như thế nào (hỏi tính chất, tình trạng, cách thức)', han_viet: 'chẩm ma' },
    { hanzi: '读', parts: '讠 (ngôn) + 卖 (mại)', pinyin: 'dú', pos: 'động từ', meaning: 'đọc', han_viet: 'độc' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Thanh 1 + các thanh', title: 'Sự kết hợp thanh điệu của từ hai âm tiết (1): thanh 1 + thanh 1/2/3/4',
      clip: { label: '06-4 · Nghe và đọc theo (kết hợp thanh điệu)', src: A + 'l06-4.mp3' },
      intro: 'Âm tiết đầu thanh 1 (cao và bằng), âm tiết sau lần lượt thanh 1, 2, 3, 4. Chú ý: trong tổ hợp âm tiết, thanh 3 khác với khi phát âm đứng riêng (214): thanh 3 được hạ giọng gần giống 211, nửa sau của âm tiết không lên giọng nữa.',
      groups: [
        { label: 'Bốn ví dụ trong sách', items: [['咖啡', 'kāfēi', 'cà phê · 1+1'], ['公园', 'gōngyuán', 'công viên · 1+2'], ['机场', 'jīchǎng', 'sân bay · 1+3'], ['车站', 'chēzhàn', 'bến xe · 1+4']] },
        { label: 'Nghe và đọc theo (06-4)', items: [
          ['今天', 'jīntiān', 'hôm nay'], ['今年', 'jīnnián', 'năm nay'], ['精彩', 'jīngcǎi', 'đặc sắc'], ['车票', 'chēpiào', 'vé xe'],
          ['公司', 'gōngsī', 'công ty'], ['刚才', 'gāngcái', 'vừa rồi'], ['操场', 'cāochǎng', 'sân vận động'], ['鸡蛋', 'jīdàn', 'trứng gà'],
          ['刮风', 'guā fēng', 'nổi gió'], ['欢迎', 'huānyíng', 'chào mừng'], ['经理', 'jīnglǐ', 'giám đốc'], ['机会', 'jīhuì', 'cơ hội'],
          ['关心', 'guānxīn', 'quan tâm'], ['关于', 'guānyú', 'về việc'], ['开始', 'kāishǐ', 'bắt đầu'], ['高兴', 'gāoxìng', 'vui'],
        ] },
      ],
    },
    {
      kind: 'examples', label: 'Cấu trúc chữ Hán', title: 'Cấu trúc của chữ Hán (1): kết cấu đơn lẻ và kết cấu tổ hợp',
      intro: 'Chữ Hán có hai loại cấu trúc cơ bản: nếu được tạo thành bởi một bộ phận duy nhất thì đó là chữ có kết cấu đơn lẻ (独体结构), ví dụ 人; nếu được tạo thành bởi hai bộ phận hoặc nhiều hơn thì đó là chữ có kết cấu tổ hợp (合体结构), ví dụ 你.',
      groups: [
        { label: 'Kết cấu đơn lẻ 独体结构', items: [['人', 'rén', 'con người'], ['我', 'wǒ', 'tôi, ta'], ['中', 'zhōng', 'chính giữa']] },
        { label: 'Kết cấu tổ hợp 合体结构', items: [['你', 'nǐ', '亻+ 尔 (anh, chị…)'], ['做', 'zuò', '亻+ 故 (làm)']] },
      ],
    },
    {
      kind: 'examples', label: 'Từ bổ sung', title: 'Từ vựng bổ sung: các ngoại ngữ',
      intro: 'Sách trang 58 bổ sung ba từ dùng trong hoạt động nhóm “你会说什么语？”.',
      groups: [{ label: 'Từ bổ sung', items: [['英语', 'Yīngyǔ', 'tiếng Anh'], ['法语', 'Fǎyǔ', 'tiếng Pháp'], ['日语', 'Rìyǔ', 'tiếng Nhật']] }],
    },
  ],

  notes: [
    {
      title: 'Động từ năng nguyện 会 (1)',
      body: '会 đặt trước động từ khác để diễn tả khả năng có được nhờ học. Phủ định là 不会. Cấu trúc: Chủ ngữ + (不)会 + Động từ. Ví dụ: 我会写汉字。 我不会做中国菜。 你妈妈会说汉语吗？',
      say: '我会写汉字',
    },
    {
      title: 'Câu có vị ngữ là tính từ',
      body: 'Tính từ miêu tả tính chất, trạng thái của người hay sự vật, thường đi cùng phó từ chỉ mức độ 很. Cấu trúc: Chủ ngữ + 很 + Tính từ. Phủ định: Chủ ngữ + 不 + Tính từ. Ví dụ: 我很好。 我妈妈的汉语不好。 中国菜很好吃。',
      say: '中国菜很好吃',
    },
    {
      title: 'Đại từ nghi vấn 怎么 (1)',
      body: '怎么 đặt trước động từ để hỏi về cách thức thực hiện hành động. Ví dụ: 这个汉字怎么读？ 你的汉语名字怎么写？ 这个字怎么写？',
      say: '这个字怎么写',
    },
    {
      title: 'Thanh 3 trong từ hai âm tiết',
      body: 'Khi thanh 3 đứng trước một âm tiết khác (không phải thanh 3) thì chỉ đọc nửa đầu: hạ giọng xuống thấp, không lên giọng nữa (khoảng 211). Chỉ khi đứng một mình hoặc ở cuối câu mới đọc đủ 214.',
      say: '机场',
    },
    {
      title: 'Cấu trúc chữ Hán',
      body: 'Chữ Hán có kết cấu đơn lẻ (độc thể) như 人, 我, 中 và kết cấu tổ hợp (hợp thể) như 你, 做. Hiểu cấu trúc giúp nhớ chữ và viết đúng.',
    },
  ],

  writeChars: ['东', '我', '西', '么', '钱', '打'],

  drills: [
    {
      title: 'Ba nét mới (笔画 6)',
      hint: 'Sách trang 56.',
      items: [
        { p: 'piězhé · phẩy gập', m: 'ví dụ: 么 me (hậu tố), 东 dōng (hướng đông)' },
        { p: 'xiégōu · nghiêng móc', m: 'ví dụ: 我 wǒ (tôi), 钱 qián (tiền)' },
        { p: 'tí · hất', m: 'ví dụ: 我 wǒ, 打 dǎ (đánh)' },
      ],
    },
    {
      title: 'Ba chữ đơn mới (认识独体字)',
      hint: 'Sách trang 57: nguồn gốc hình chữ. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '东', p: 'dōng', m: 'hướng đông (mặt trời mọc), trái nghĩa 西' },
        { h: '我', p: 'wǒ', m: 'tôi (hình vũ khí có nhiều răng nhọn)' },
        { h: '西', p: 'xī', m: 'hướng tây (hình tổ chim), trái nghĩa 东' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi (练习 2, sách trang 55)',
      items: [
        { q: '你会说汉语吗？ (Nǐ huì shuō Hànyǔ ma?)', hint: '会，我会说汉语。 hoặc 不会，我不会说汉语。' },
        { q: '你会写汉字吗？ (Nǐ huì xiě Hànzì ma?)', hint: '会，我会写。 hoặc 不会，我不会写。' },
        { q: '你会做中国菜吗？ (Nǐ huì zuò Zhōngguó cài ma?)', hint: '会，我会做。 hoặc 不会，我不会做。' },
        { q: '你有汉语名字吗？ (Nǐ yǒu Hànyǔ míngzi ma?)', hint: '有，我的汉语名字叫…… hoặc 没有。' },
        { q: '你会写你的汉语名字吗？ (Nǐ huì xiě nǐ de Hànyǔ míngzi ma?)', hint: '会，我会写。 hoặc 不会，我不会写。' },
      ],
    },
    {
      title: 'Hoạt động theo cặp (运用 1, sách trang 58)',
      items: [
        { q: 'A: 你会说汉语吗？  B: 我……', hint: 'Trả lời 会 hoặc 不会 theo khả năng thật của bạn.' },
        { q: 'A: 你的汉语名字叫什么？  B: 我的……', hint: '我的汉语名字叫……' },
        { q: 'Hoạt động nhóm: hỏi nhau biết nói những ngoại ngữ nào (英语, 法语, 汉语, 日语) và ghi vào bảng.', hint: 'Mẫu: 你会说英语吗？ 会 / 不会。' },
      ],
    },
  ],

  sentences: [
    { parts: ['你', '会', '说', '汉语', '吗'], pinyin: 'Nǐ huì shuō Hànyǔ ma?', vi: 'Em có biết nói tiếng Trung Quốc không?' },
    { parts: ['我', '会', '说', '汉语'], pinyin: 'Wǒ huì shuō Hànyǔ.', vi: 'Em có biết.' },
    { parts: ['她', '不', '会', '说'], pinyin: 'Tā bú huì shuō.', vi: 'Mẹ em thì không.' },
    { parts: ['中国', '菜', '很', '好吃'], pinyin: 'Zhōngguó cài hěn hǎochī.', vi: 'Món ăn Trung Quốc rất ngon.' },
    { parts: ['你', '会', '做', '中国', '菜', '吗'], pinyin: 'Nǐ huì zuò Zhōngguó cài ma?', vi: 'Anh có biết nấu món Trung Quốc không?' },
    { parts: ['我', '不', '会', '做'], pinyin: 'Wǒ bú huì zuò.', vi: 'Tôi không biết nấu.' },
    { parts: ['你', '会', '写', '汉字', '吗'], pinyin: 'Nǐ huì xiě Hànzì ma?', vi: 'Anh có biết viết chữ Hán không?' },
    { parts: ['这个', '字', '怎么', '写'], pinyin: 'Zhège zì zěnme xiě?', vi: 'Chữ này viết thế nào?' },
  ],

  // ───────── Sách bài tập, bài 6 (đáp án: "Đáp án sách bài tập", trang 10–11) ─────────
  dictations: [
    {
      title: 'Sách bài tập · Nghe, gõ pinyin từ hai âm tiết (ngữ âm, câu 1–8)',
      hint: 'Nghe đoạn ghi âm (06-2), gõ lại pinyin của từ bạn nghe được (có thể không cần dấu).',
      clip: { label: '06-2 · Sách bài tập, ngữ âm phần 1', src: A + 'w06-2.mp3' },
      items: [
        { prompt: 'Câu 1', answer: 'jīngyàn', gloss: '经验' }, { prompt: 'Câu 2', answer: 'yāoqǐng', gloss: '邀请' }, { prompt: 'Câu 3', answer: 'xiūlǐ', gloss: '修理' }, { prompt: 'Câu 4', answer: 'wēixiǎn', gloss: '危险' },
        { prompt: 'Câu 5', answer: 'chūntiān', gloss: '春天' }, { prompt: 'Câu 6', answer: 'xīnnián', gloss: '新年' }, { prompt: 'Câu 7', answer: 'shāngrén', gloss: '商人' }, { prompt: 'Câu 8', answer: 'cānguān', gloss: '参观' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, ghi dấu thanh (ngữ âm, câu 9–16)',
      hint: 'Nghe tiếp (06-2), gõ lại từ có đủ dấu thanh. Ví dụ: shenqing → shēnqǐng.',
      clip: { label: '06-2 · Sách bài tập, ngữ âm phần 2', src: A + 'w06-2.mp3' },
      needTone: true,
      items: [
        { prompt: 'shenqing', answer: 'shēnqǐng', gloss: '申请' }, { prompt: 'sheng bing', answer: 'shēng bìng', gloss: '生病' },
        { prompt: 'shenti', answer: 'shēntǐ', gloss: '身体' }, { prompt: 'shengri', answer: 'shēngrì', gloss: '生日' },
        { prompt: 'jiaoliu', answer: 'jiāoliú', gloss: '交流' }, { prompt: 'jiaoyou', answer: 'jiāoyóu', gloss: '郊游' },
        { prompt: 'feichang', answer: 'fēicháng', gloss: '非常' }, { prompt: 'feiji', answer: 'fēijī', gloss: '飞机' },
        { prompt: 'chou yan', answer: 'chōu yān', gloss: '抽烟' }, { prompt: 'chouti', answer: 'chōuti', gloss: '抽屉' },
        { prompt: 'fenzhong', answer: 'fēnzhōng', gloss: '分钟' }, { prompt: 'fangbian', answer: 'fāngbiàn', gloss: '方便' },
        { prompt: 'chaoshi', answer: 'chāoshì', gloss: '超市' }, { prompt: 'anjing', answer: 'ānjìng', gloss: '安静' },
        { prompt: 'gangcai', answer: 'gāngcái', gloss: '刚才' }, { prompt: 'ganjing', answer: 'gānjìng', gloss: '干净' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 9–12)',
      hint: 'Nghe đoạn ghi âm (06-1, phần 3), chọn A, B hoặc C. Câu 9: A 中国菜 · B 美国菜 · C 法国菜. Câu 10: A 张朋 · B 王朋 · C 李朋. Câu 11: A 英语 · B 汉语 · C 法语. Câu 12: A 我 · B 我妈妈 · C 我朋友.',
      clip: { label: '06-1 · Sách bài tập, nghe phần 3 (câu 9–12)', src: A + 'w06-1.mp3' },
      items: [
        { prompt: 'Câu 9', answer: 'A', gloss: '中国菜' }, { prompt: 'Câu 10', answer: 'C', gloss: '李朋' },
        { prompt: 'Câu 11', answer: 'B', gloss: '汉语' }, { prompt: 'Câu 12', answer: 'A', gloss: '我' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu hỏi với câu trả lời (câu 18–22)',
      hint: 'A 对不起，这个汉字我会读，不会写。 B 会，李老师是中国人。 C 中国菜很好吃。 D 我会说汉语，不会写汉字。 E 她不会做。 F 好的，谢谢！ Gõ chữ cái A–F.',
      items: [
        { prompt: '你妈妈会做中国菜吗？', answer: 'E', gloss: '她不会做。' }, { prompt: '这个汉字怎么写？', answer: 'A', gloss: '对不起，这个汉字我会读，不会写。' },
        { prompt: '李老师会说汉语吗？', answer: 'B', gloss: '会，李老师是中国人。' }, { prompt: '你会写汉字吗？', answer: 'D', gloss: '我会说汉语，不会写汉字。' },
        { prompt: '中国菜好吃吗？', answer: 'C', gloss: '中国菜很好吃。' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ vào chỗ trống (câu 23–30)',
      hint: 'A 很 · B 会 · C 怎么 · D 名字 · E 不 · F 吗 · G 呢 · H 哪 · I 的. Gõ chữ cái A–I. (Câu 23–26 chọn từ A–E, câu 27–30 chọn từ F–I.)',
      items: [
        { prompt: '我（ ）会写我的汉语名字。', answer: 'E', gloss: '不' }, { prompt: '你（ ）做中国菜吗？', answer: 'B', gloss: '会' },
        { prompt: '我朋友会说汉语，他的汉语（ ）好。', answer: 'A', gloss: '很' }, { prompt: '老师，这个汉字（ ）读？', answer: 'C', gloss: '怎么' },
        { prompt: '你的中国朋友会做中国菜（ ）？', answer: 'F', gloss: '吗' }, { prompt: '我会说汉语。你（ ）？', answer: 'G', gloss: '呢' },
        { prompt: '我妈妈（ ）朋友会说汉语。', answer: 'I', gloss: '的' }, { prompt: '你同学是（ ）国人？', answer: 'H', gloss: '哪' },
      ],
    },
  ],
}
