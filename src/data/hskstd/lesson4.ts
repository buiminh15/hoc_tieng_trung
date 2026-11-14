import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 1, Bài 4: 她是我的汉语老师。 (sách trang 34–41).
 * Nghe: 04-1…04-7 (giáo trình). Sách bài tập (trang 23–30, đáp án trang 6–8): nghe chọn âm tiết, 一 biến điệu,
 * nghe chọn đáp án 9–12, nối câu hỏi/đáp 18–22, điền từ 23–30.
 * Phần tiếng Việt do app tự thêm ở những chỗ sách không có.
 */

const A = '/audio/hsk-std1/'

export const hskStd1Lesson4: Lesson = {
  id: 4,
  title: 'Cô ấy là cô giáo dạy tôi tiếng Trung Quốc.',
  hanzi: '她是我的汉语老师。',
  pinyin: 'Tā shì wǒ de Hànyǔ lǎoshī.',
  vi: 'Cô ấy là cô giáo dạy tôi tiếng Trung Quốc.',
  intro: 'Hỏi và giới thiệu người khác: 她是谁？ 你是哪国人？ Học đại từ nghi vấn 谁 và 哪, trợ từ kết cấu 的, trợ từ nghi vấn 呢; phân biệt zh ch sh r, vần mũi n và ng; 一 biến điệu; cách dùng y và w.',

  dialogue: [
    { who: 'A', hanzi: '她是谁？', pinyin: 'Tā shì shéi?', vi: 'Cô ấy là ai vậy?', scene: 'Hội thoại 1 · trong lớp học' },
    { who: 'B', hanzi: '她是我的汉语老师，她叫李月。', pinyin: 'Tā shì wǒ de Hànyǔ lǎoshī, tā jiào Lǐ Yuè.', vi: 'Đó là cô giáo dạy tôi tiếng Trung Quốc, cô tên là Lý Nguyệt.' },
    { who: 'A', hanzi: '你是哪国人？', pinyin: 'Nǐ shì nǎ guó rén?', vi: 'Anh là người nước nào vậy?', scene: 'Hội thoại 2 · ở thư viện' },
    { who: 'B', hanzi: '我是美国人。你呢？', pinyin: 'Wǒ shì Měiguó rén. Nǐ ne?', vi: 'Tôi là người Mỹ, còn cô?' },
    { who: 'A', hanzi: '我是中国人。', pinyin: 'Wǒ shì Zhōngguó rén.', vi: 'Tôi là người Trung Quốc.' },
    { who: 'A', hanzi: '他是谁？', pinyin: 'Tā shì shéi?', vi: 'Anh ấy là ai thế?', scene: 'Hội thoại 3 · xem ảnh' },
    { who: 'B', hanzi: '他是我同学。', pinyin: 'Tā shì wǒ tóngxué.', vi: 'Đó là bạn cùng lớp của tôi.' },
    { who: 'A', hanzi: '她呢？她是你同学吗？', pinyin: 'Tā ne? Tā shì nǐ tóngxué ma?', vi: 'Còn cô ấy? Cô ấy cũng là bạn cùng lớp của cô à?' },
    { who: 'B', hanzi: '她不是我同学，她是我朋友。', pinyin: 'Tā bú shì wǒ tóngxué, tā shì wǒ péngyou.', vi: 'Không phải, cô ấy là bạn tôi.' },
  ],
  dialogueClips: [
    { label: '04-1 · Hội thoại 1: 她是谁？', src: A + 'l04-1.mp3' },
    { label: '04-2 · Hội thoại 2: 你是哪国人？', src: A + 'l04-2.mp3' },
    { label: '04-3 · Hội thoại 3: 他是谁？', src: A + 'l04-3.mp3' },
  ],
  dialogueTip: '<b>哪国人</b> hỏi quốc tịch. <b>…… 呢？</b> hỏi lại “còn …… thì sao?”. Chữ <b>的</b> nối định ngữ với danh từ: 我的汉语老师 (cô giáo tiếng Hán của tôi). Khi danh từ sau 的 là người thân hoặc người rất gần thì có thể bỏ 的: 我同学, 我朋友.',
  slowSay: '她是我的汉语老师',

  vocab: [
    { hanzi: '她', parts: '女 (nữ) + 也 (dã)', pinyin: 'tā', pos: 'đại từ', meaning: 'cô ấy, bà ấy…', han_viet: 'tha' },
    { hanzi: '谁', parts: '讠 (ngôn) + 隹 (chuy)', pinyin: 'shéi', pos: 'đại từ', meaning: 'ai', han_viet: 'thùy' },
    { hanzi: '的', parts: '白 (bạch) + 勺 (chước)', pinyin: 'de', pos: 'trợ từ', meaning: 'dùng sau định ngữ', han_viet: 'đích' },
    { hanzi: '汉语', pinyin: 'Hànyǔ', pos: 'danh từ', meaning: 'tiếng Trung Quốc, Hán ngữ', han_viet: 'Hán ngữ' },
    { hanzi: '哪', parts: '口 (khẩu) + 那 (na)', pinyin: 'nǎ', pos: 'đại từ', meaning: 'nào', han_viet: 'ná' },
    { hanzi: '国', parts: '囗 (vi) + 玉 (ngọc)', pinyin: 'guó', pos: 'danh từ', meaning: 'quốc gia, đất nước', han_viet: 'quốc' },
    { hanzi: '呢', parts: '口 (khẩu) + 尼 (ni)', pinyin: 'ne', pos: 'trợ từ', meaning: 'dùng ở cuối câu hỏi', han_viet: '' },
    { hanzi: '他', parts: '亻 (nhân đứng) + 也 (dã)', pinyin: 'tā', pos: 'đại từ', meaning: 'anh ấy, ông ấy…', han_viet: 'tha' },
    { hanzi: '同学', parts: '同 = 冂 + 一 + 口; 学 (học)', pinyin: 'tóngxué', pos: 'danh từ', meaning: 'bạn cùng lớp', han_viet: 'đồng học' },
    { hanzi: '朋友', parts: '朋 = 月 + 月; 友 = 𠂇 + 又', pinyin: 'péngyou', pos: 'danh từ', meaning: 'bạn', han_viet: 'bằng hữu' },
  ],

  sections: [
    {
      kind: 'examples', label: 'zh ch sh r', title: 'Phân biệt thanh mẫu zh, ch, sh, r',
      clip: { label: '04-4 · Nghe và đọc theo (zh ch sh r)', src: A + 'l04-4.mp3' },
      intro: 'zh, ch, sh, r là nhóm âm cuốn lưỡi: đầu lưỡi cong lên phối hợp với phần trước ngạc cứng. zh và ch: đầu lưỡi chạm ngạc cứng trước rồi mở ra khe hở, zh không bật hơi, ch bật hơi rất mạnh. sh: đầu lưỡi không chạm ngạc cứng, giữ khe hở. Khác với sh, khi phát âm r dây thanh rung.',
      groups: [{ label: 'Nghe và đọc theo (04-4)', items: [
        ['知识', 'zhīshi', 'kiến thức'], ['厨师', 'chúshī', 'đầu bếp'], ['生日', 'shēngrì', 'sinh nhật'], ['上车', 'shàng chē', 'lên xe'],
        ['认识', 'rènshi', 'quen biết'], ['常识', 'chángshí', 'kiến thức thông thường'], ['事实', 'shìshí', 'sự thật'], ['超人', 'chāorén', 'siêu nhân'],
        ['燃烧', 'ránshāo', 'đốt cháy'], ['热闹', 'rènao', 'náo nhiệt'], ['出差', 'chū chāi', 'đi công tác'], ['长城', 'Chángchéng', 'Vạn Lý Trường Thành'],
        ['手术', 'shǒushù', 'phẫu thuật'], ['商场', 'shāngchǎng', 'trung tâm thương mại'], ['超市', 'chāoshì', 'siêu thị'], ['充值', 'chōng zhí', 'nạp tiền'],
      ] }],
    },
    {
      kind: 'examples', label: 'n ↔ ng', title: 'Phân biệt vần mũi trước n và vần mũi sau ng',
      clip: { label: '04-5 · Nghe và đọc theo (an–ang, en–eng…)', src: A + 'l04-5.mp3' },
      intro: 'n [n]: đầu lưỡi áp vào lợi trên, răng trên và răng dưới đối nhau, miệng mở hẹp. ng [ŋ]: phần sau của lưỡi cong vồng lên, lưỡi thụt về sau áp chặt vào ngạc mềm, miệng mở rộng hơn.',
      groups: [{ label: 'Nghe và đọc theo từng cặp (04-5)', items: [
        ['an – ang', 'an ↔ ang', 'mũi trước ↔ mũi sau'], ['ian – iang', 'ian ↔ iang', 'mũi trước ↔ mũi sau'], ['uan – uang', 'uan ↔ uang', 'mũi trước ↔ mũi sau'],
        ['en – eng', 'en ↔ eng', 'mũi trước ↔ mũi sau'], ['in – ing', 'in ↔ ing', 'mũi trước ↔ mũi sau'], ['uen – ueng', 'uen ↔ ueng', 'mũi trước ↔ mũi sau'],
      ] }],
    },
    {
      kind: 'examples', label: '一 biến điệu', title: 'Sự biến đổi thanh điệu của 一 (yī)',
      clip: { label: '04-6 · Nghe và đọc theo (一)', src: A + 'l04-6.mp3' },
      intro: 'Trước thanh 1, 2, 3: 一 đọc thanh 4 (yì). Trước thanh 4: 一 đọc thanh 2 (yí). Khi đứng riêng, chỉ con số, thứ tự hoặc ở cuối từ thì giữ nguyên yī.',
      groups: [
        { label: 'Trước thanh 1, 2, 3: đọc yì', items: [['一张', 'yì zhāng', 'một tờ'], ['一条', 'yì tiáo', 'một sợi'], ['一种', 'yì zhǒng', 'một loại']] },
        { label: 'Trước thanh 4: đọc yí', items: [['一定', 'yídìng', 'chắc chắn'], ['一块', 'yí kuài', 'một miếng']] },
        { label: 'Đứng riêng hoặc chỉ số: giữ yī', items: [['第一', 'dì yī', 'thứ nhất'], ['一二三', 'yī èr sān', 'một, hai, ba'], ['星期一', 'xīngqī yī', 'thứ hai'], ['十一', 'shíyī', 'mười một'], ['百分之一', 'bǎifēnzhī yī', 'một phần trăm']] },
      ],
    },
    {
      kind: 'examples', label: 'y và w', title: 'Quy tắc ghép âm (3): cách dùng y và w',
      clip: { label: '04-7 · Nghe và đọc theo (y và w)', src: A + 'l04-7.mp3' },
      intro: 'Vận mẫu bắt đầu bằng i, u, ü mà không có thanh mẫu thì khi viết phiên âm phải dùng y hoặc w. Bảng: i, in, ing → yi, yin, ying · ia, ie, iao, ian, iang, iong → ya, ye, yao, yan, yang, yong · iu → you · u → wu · ua, uo, uai, uan, uang, ueng → wa, wo, wai, wan, wang, weng · ui, un → wei, wen · ü, üe, üan, ün → yu, yue, yuan, yun.',
      groups: [{ label: 'Nghe và đọc theo (04-7)', items: [
        ['游泳', 'yóu yǒng', 'bơi'], ['友谊', 'yǒuyì', 'tình bạn'], ['音乐', 'yīnyuè', 'âm nhạc'], ['原因', 'yuányīn', 'nguyên nhân'],
        ['青蛙', 'qīngwā', 'con ếch'], ['影星', 'yǐngxīng', 'ngôi sao điện ảnh'], ['英雄', 'yīngxióng', 'anh hùng'], ['危险', 'wēixiǎn', 'nguy hiểm'],
        ['国外', 'guó wài', 'nước ngoài'], ['阴天', 'yīntiān', 'trời âm u'], ['语言', 'yǔyán', 'ngôn ngữ'], ['往往', 'wǎngwǎng', 'thường thường'],
        ['晚宴', 'wǎnyàn', 'tiệc tối'], ['爷爷', 'yéye', 'ông nội'], ['营养', 'yíngyǎng', 'dinh dưỡng'], ['我们', 'wǒmen', 'chúng tôi'],
      ] }],
    },
  ],

  notes: [
    {
      title: 'Đại từ nghi vấn 谁 và 哪',
      body: '谁 hỏi về người: 她是谁？ 他是谁？ 李月是谁？ 哪 đi theo cấu trúc: 哪 + lượng từ / danh từ + danh từ: 哪本书？ 哪个人？ 你是哪国人？ Câu có 谁, 哪 không thêm 吗.',
      say: '你是哪国人',
    },
    {
      title: 'Trợ từ kết cấu 的',
      body: 'Cấu trúc danh từ / đại từ + 的 + danh từ chỉ quan hệ sở hữu: 我的老师, 我的书. Khi danh từ sau 的 là từ chỉ người thân hoặc chỉ người rất gần thì 的 có thể bỏ: 我同学, 我朋友. Ví dụ: 她不是我同学，她是我朋友。',
      say: '我的汉语老师',
    },
    {
      title: 'Trợ từ nghi vấn 呢 (1)',
      body: '呢 đặt sau danh từ hoặc đại từ để hỏi về một đối tượng, thông tin đã nhắc ở câu trước. Mẫu: A……。B 呢？ Ví dụ: 我是美国人。你呢？ 她叫李月。他呢？',
      say: '你呢',
    },
    {
      title: 'zh ch sh r và n ng',
      body: 'zh, ch, sh, r là âm cuốn lưỡi: zh không bật hơi, ch bật hơi, sh xát qua khe, r là sh nhưng dây thanh rung. Vần mũi trước (n) kết thúc bằng lưỡi chạm lợi trên, miệng hẹp; vần mũi sau (ng) kết thúc ở ngạc mềm, miệng mở rộng hơn.',
      say: '知识',
    },
    {
      title: '一 biến điệu',
      body: '一 đọc yì trước thanh 1, 2, 3 (一张, 一条, 一种), đọc yí trước thanh 4 (一定, 一块), và đọc yī khi đứng một mình, chỉ số hoặc thứ tự (第一, 星期一).',
      say: '一定',
    },
    {
      title: 'Dùng y và w khi không có thanh mẫu',
      body: 'i → yi, in → yin, ing → ying; ia → ya, ie → ye, iu → you; u → wu, ua → wa, uo → wo, ui → wei, un → wen; ü → yu, üe → yue, ün → yun. Mục đích là tách ranh giới các âm tiết khi viết liền.',
      say: '我们',
    },
  ],

  writeChars: ['七', '儿', '几', '九', '二', '三'],

  drills: [
    {
      title: 'Nét mới (笔画 4)',
      hint: 'Sách trang 40. Hai nét mới: sổ cong móc, ngang gập cong móc.',
      items: [
        { p: 'shùwāngōu · sổ cong móc', m: 'ví dụ: 七 qī (bảy), 儿 ér (con trai)' },
        { p: 'héngzhéwāngōu · ngang gập cong móc', m: 'ví dụ: 九 jiǔ (chín), 几 jǐ (mấy)' },
      ],
    },
    {
      title: 'Bốn chữ đơn mới (认识独体字)',
      hint: 'Sách trang 40–41: nguồn gốc hình chữ. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '七', p: 'qī', m: 'số 7' },
        { h: '儿', p: 'ér', m: 'gốc là trẻ con, nay thường chỉ con trai' },
        { h: '几', p: 'jǐ', m: 'gốc là cái bàn nhỏ và thấp, nay là “mấy”' },
        { h: '九', p: 'jiǔ', m: 'số 9' },
      ],
    },
    {
      title: 'Thứ tự nét (2): từ trên xuống dưới, từ trái sang phải',
      hint: 'Sách trang 41.',
      items: [
        { h: '二', p: 'èr', m: 'từ trên xuống dưới' },
        { h: '三', p: 'sān', m: 'từ trên xuống dưới' },
        { h: '几', p: 'jǐ', m: 'từ trái sang phải' },
        { h: '八', p: 'bā', m: 'từ trái sang phải' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi (练习 2, sách trang 36)',
      items: [
        { q: '你是哪国人？ (Nǐ shì nǎ guó rén?)', hint: '我是中国人 / 美国人 / …… Thay bằng nước của bạn.' },
        { q: '你叫什么名字？ (Nǐ jiào shénme míngzi?)', hint: '我叫……' },
        { q: '你的汉语老师是哪国人？ (Nǐ de Hànyǔ lǎoshī shì nǎ guó rén?)', hint: '她 / 他是中国人。' },
        { q: '你的汉语老师叫什么名字？ (Nǐ de Hànyǔ lǎoshī jiào shénme míngzi?)', hint: '她 / 他叫……' },
        { q: '你的中国朋友是谁？ (Nǐ de Zhōngguó péngyou shì shéi?)', hint: '我的中国朋友是……' },
      ],
    },
    {
      title: 'Hoạt động theo cặp: hỏi đáp theo ảnh (运用 1, sách trang 41)',
      items: [
        { q: 'A: 他 / 她是谁？  B: 他 / 她是……', hint: 'Hỏi tên người trong ảnh, trả lời 他 / 她是 + tên.' },
        { q: 'A: 他 / 她是哪国人？  B: 他 / 她是……', hint: 'Hỏi quốc tịch, trả lời 他 / 她是 + nước + 人.' },
        { q: 'Hoạt động nhóm: 他 / 她是我同学 / 朋友，他 / 她叫……，他 / 她是……', hint: 'Mang ảnh của bạn bè, giới thiệu theo mẫu này.' },
      ],
    },
  ],

  sentences: [
    { parts: ['她', '是', '谁'], pinyin: 'Tā shì shéi?', vi: 'Cô ấy là ai vậy?' },
    { parts: ['她', '是', '我', '的', '汉语', '老师'], pinyin: 'Tā shì wǒ de Hànyǔ lǎoshī.', vi: 'Cô ấy là cô giáo dạy tôi tiếng Trung Quốc.' },
    { parts: ['你', '是', '哪', '国', '人'], pinyin: 'Nǐ shì nǎ guó rén?', vi: 'Bạn là người nước nào?' },
    { parts: ['我', '是', '美国', '人', '，', '你', '呢'], pinyin: 'Wǒ shì Měiguó rén, nǐ ne?', vi: 'Tôi là người Mỹ, còn bạn?' },
    { parts: ['他', '是', '我', '同学'], pinyin: 'Tā shì wǒ tóngxué.', vi: 'Anh ấy là bạn cùng lớp của tôi.' },
    { parts: ['她', '不', '是', '我', '同学'], pinyin: 'Tā bú shì wǒ tóngxué.', vi: 'Cô ấy không phải bạn cùng lớp của tôi.' },
    { parts: ['她', '是', '我', '朋友'], pinyin: 'Tā shì wǒ péngyou.', vi: 'Cô ấy là bạn của tôi.' },
  ],

  // ───────── Sách bài tập, bài 4 (đáp án: "Đáp án sách bài tập", trang 6–8) ─────────
  dictations: [
    {
      title: 'Sách bài tập · Nghe, gõ pinyin (ngữ âm, câu 1–8)',
      hint: 'Nghe đoạn ghi âm (04-2), gõ lại pinyin của từ bạn nghe được (có thể không cần dấu).',
      clip: { label: '04-2 · Sách bài tập, ngữ âm phần 1', src: A + 'w04-2.mp3' },
      items: [
        { prompt: 'Câu 1', answer: 'zhuānjiā', gloss: '专家' }, { prompt: 'Câu 2', answer: 'xīnnián', gloss: '新年' }, { prompt: 'Câu 3', answer: 'chéngjì', gloss: '成绩' }, { prompt: 'Câu 4', answer: 'fāyán', gloss: '发言' },
        { prompt: 'Câu 5', answer: 'zhīdào', gloss: '知道' }, { prompt: 'Câu 6', answer: 'zhījǐ', gloss: '知己' }, { prompt: 'Câu 7', answer: 'shǐyòng', gloss: '使用' }, { prompt: 'Câu 8', answer: 'rìqī', gloss: '日期' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, ghi thanh điệu của 一 (ngữ âm, câu 9–16)',
      hint: 'Nghe tiếp (04-2), cho biết 一 đọc thanh nào. Gõ yì (thanh 4) hoặc yí (thanh 2), hoặc gõ số 4 hoặc 2.',
      clip: { label: '04-2 · Sách bài tập, ngữ âm phần 2', src: A + 'w04-2.mp3' },
      needTone: true,
      items: [
        { prompt: 'yi tiān', answer: 'yì', accept: ['4', 'yì tiān'], gloss: '一天' }, { prompt: 'yi nián', answer: 'yì', accept: ['4', 'yì nián'], gloss: '一年' },
        { prompt: 'yi běn', answer: 'yì', accept: ['4', 'yì běn'], gloss: '一本' }, { prompt: 'yi wèi', answer: 'yí', accept: ['2', 'yí wèi'], gloss: '一位' },
        { prompt: 'yi zhāng', answer: 'yì', accept: ['4', 'yì zhāng'], gloss: '一张' }, { prompt: 'yi píng', answer: 'yì', accept: ['4', 'yì píng'], gloss: '一瓶' },
        { prompt: 'yi wǎn', answer: 'yì', accept: ['4', 'yì wǎn'], gloss: '一碗' }, { prompt: 'yi xià', answer: 'yí', accept: ['2', 'yí xià'], gloss: '一下' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 9–12)',
      hint: 'Nghe đoạn ghi âm (04-1, phần 3), chọn A, B hoặc C. Câu 9: A 美国人 · B 法国人 · C 中国人. Câu 10 và 11: A 我的朋友 · B 我的同学 · C 我的老师. Câu 12: A 王方 · B 李心 · C 安妮.',
      clip: { label: '04-1 · Sách bài tập, nghe phần 3 (câu 9–12)', src: A + 'w04-1.mp3' },
      items: [
        { prompt: 'Câu 9', answer: 'C', gloss: '中国人' }, { prompt: 'Câu 10', answer: 'C', gloss: '我的老师' },
        { prompt: 'Câu 11', answer: 'A', gloss: '我的朋友' }, { prompt: 'Câu 12', answer: 'B', gloss: '李心' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu hỏi với câu trả lời (câu 18–22)',
      hint: 'A 是，他是我的美国朋友。 B 她是李月，她是我的中国朋友。 C 他是我同学，他叫大卫。 D 不是，她是我的汉语老师。 E 我是美国人。 F 好的，谢谢！ Gõ chữ cái A–F.',
      items: [
        { prompt: '你是哪国人？', answer: 'E', gloss: '我是美国人。' }, { prompt: '他是谁？', answer: 'C', gloss: '他是我同学，他叫大卫。' },
        { prompt: '她是你同学吗？', answer: 'D', gloss: '不是，她是我的汉语老师。' }, { prompt: '谁是李月？', answer: 'B', gloss: '她是李月，她是我的中国朋友。' },
        { prompt: '他是你的朋友吗？', answer: 'A', gloss: '是，他是我的美国朋友。' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ vào chỗ trống (câu 23–30)',
      hint: 'A 哪 · B 叫 · C 的 · D 名字 · E 呢 · F 是 · G 不 · H 吗 · I 谁. Gõ chữ cái A–I. (Câu 23–26 chọn từ A–E, câu 27–30 chọn từ F–I.)',
      items: [
        { prompt: '你妈妈（ ）什么？', answer: 'B', gloss: '叫' }, { prompt: '您是（ ）国人？', answer: 'A', gloss: '哪' },
        { prompt: '他不是我同学，他是我（ ）中国朋友。', answer: 'C', gloss: '的' }, { prompt: '我是美国人。你（ ）？', answer: 'E', gloss: '呢' },
        { prompt: '他是（ ）？', answer: 'I', gloss: '谁' }, { prompt: '我（ ）是中国人，我是美国人。', answer: 'G', gloss: '不' },
        { prompt: '他是你的汉语老师（ ）？', answer: 'H', gloss: '吗' }, { prompt: '他不是我同学，他（ ）我的好朋友。', answer: 'F', gloss: '是' },
      ],
    },
  ],
}
