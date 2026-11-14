import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 1, Bài 3: 你叫什么名字？ (sách trang 26–33).
 * Nghe: 03-1…03-7 (giáo trình). Sách bài tập (trang 15–22, đáp án trang 4–6): nghe chọn âm tiết, 不 biến điệu,
 * nghe chọn đáp án 9–12, nối câu hỏi/đáp 18–22, điền từ 23–30.
 * Phần tiếng Việt do app tự thêm ở những chỗ sách không có.
 */

const A = '/audio/hsk-std1/'

export const hskStd1Lesson3: Lesson = {
  id: 3,
  title: 'Cô tên gì?',
  hanzi: '你叫什么名字？',
  pinyin: 'Nǐ jiào shénme míngzi?',
  vi: 'Cô tên gì?',
  intro: 'Hỏi tên và quốc tịch: 你叫什么名字？ 你是中国人吗？ Học đại từ nghi vấn 什么, câu có từ 是, câu hỏi có 吗; phân biệt j q x với z c s, i u ü; 不 biến điệu; ü bỏ hai chấm sau j q x.',

  dialogue: [
    { who: 'A', hanzi: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', vi: 'Cô tên gì?', scene: 'Hội thoại 1 · ở trường: hỏi tên' },
    { who: 'B', hanzi: '我叫李月。', pinyin: 'Wǒ jiào Lǐ Yuè.', vi: 'Tôi là Lý Nguyệt.' },
    { who: 'A', hanzi: '你是老师吗？', pinyin: 'Nǐ shì lǎoshī ma?', vi: 'Cô là cô giáo phải không?', scene: 'Hội thoại 2 · trong lớp học: hỏi nghề nghiệp' },
    { who: 'B', hanzi: '我不是老师，我是学生。', pinyin: 'Wǒ bú shì lǎoshī, wǒ shì xuésheng.', vi: 'Không phải, tôi là học sinh.' },
    { who: 'A', hanzi: '你是中国人吗？', pinyin: 'Nǐ shì Zhōngguó rén ma?', vi: 'Bạn là người Trung Quốc phải không?', scene: 'Hội thoại 3 · ở trường: hỏi quốc tịch' },
    { who: 'B', hanzi: '我不是中国人，我是美国人。', pinyin: 'Wǒ bú shì Zhōngguó rén, wǒ shì Měiguó rén.', vi: 'Không phải, mình là người Mỹ.' },
  ],
  dialogueClips: [
    { label: '03-1 · Hội thoại 1: 你叫什么名字？', src: A + 'l03-1.mp3' },
    { label: '03-2 · Hội thoại 2: 你是老师吗？', src: A + 'l03-2.mp3' },
    { label: '03-3 · Hội thoại 3: 你是中国人吗？', src: A + 'l03-3.mp3' },
  ],
  dialogueTip: 'Hỏi tên: <b>你叫什么名字？</b>, trả lời <b>我叫……</b>. Hỏi có phải không: <b>…… 吗？</b>, trả lời <b>是</b> hoặc <b>不是</b>. Chú ý <b>不是</b> đọc <b>bú shì</b> (不 đứng trước thanh 4 thì đọc thanh 2).',
  slowSay: '你叫什么名字',

  vocab: [
    { hanzi: '叫', parts: '口 (khẩu) + 丩', pinyin: 'jiào', pos: 'động từ', meaning: 'tên (là), gọi là', han_viet: 'khiếu' },
    { hanzi: '什么', pinyin: 'shénme', pos: 'đại từ', meaning: 'gì, cái gì', han_viet: 'thập ma' },
    { hanzi: '名字', parts: '名 = 夕 (tịch) + 口 (khẩu); 字 = 宀 + 子', pinyin: 'míngzi', pos: 'danh từ', meaning: 'tên', han_viet: 'danh tự' },
    { hanzi: '我', pinyin: 'wǒ', pos: 'đại từ', meaning: 'tôi, ta, mình', han_viet: 'ngã' },
    { hanzi: '是', parts: '日 (nhật) + 正 (chính) lược', pinyin: 'shì', pos: 'động từ', meaning: 'là', han_viet: 'thị' },
    { hanzi: '老师', parts: '老 = 耂 + 匕; 师 = 丨 + 帀', pinyin: 'lǎoshī', pos: 'danh từ', meaning: 'thầy giáo, cô giáo', han_viet: 'lão sư' },
    { hanzi: '吗', parts: '口 (khẩu) + 马 (mã)', pinyin: 'ma', pos: 'trợ từ', meaning: 'trợ từ nghi vấn đặt cuối câu hỏi', han_viet: '' },
    { hanzi: '学生', parts: '学 = ⺍ + 冖 + 子; 生 (sinh)', pinyin: 'xuésheng', pos: 'danh từ', meaning: 'học sinh', han_viet: 'học sinh' },
    { hanzi: '人', pinyin: 'rén', pos: 'danh từ', meaning: 'người', han_viet: 'nhân' },
    { hanzi: '李月', pinyin: 'Lǐ Yuè', pos: 'danh từ riêng', meaning: 'Lý Nguyệt (tên người)', han_viet: '' },
    { hanzi: '中国', pinyin: 'Zhōngguó', pos: 'danh từ riêng', meaning: 'Trung Quốc', han_viet: 'Trung Quốc' },
    { hanzi: '美国', pinyin: 'Měiguó', pos: 'danh từ riêng', meaning: 'nước Mỹ', han_viet: 'Mỹ quốc' },
  ],

  sections: [
    {
      kind: 'examples', label: 'j q x ↔ z c s', title: 'Phân biệt thanh mẫu j, q, x và z, c, s',
      clip: { label: '03-4 · Nghe và đọc theo (j q x)', src: A + 'l03-4.mp3' },
      intro: 'j, q, x là âm mặt lưỡi: j và q chạm ngạc cứng, j KHÔNG bật hơi còn q có luồng hơi mạnh; x thì mặt lưỡi gần ngạc cứng nhưng không chạm, giữ một khe hở. z, c, s là âm đầu lưỡi phẳng: z và c đầu lưỡi chạm mặt trong răng cửa trên rồi mở ra tạo khe hở, z không bật hơi, c bật hơi rõ; s thì đầu lưỡi không chạm, để hơi thoát qua khe.',
      groups: [
        { label: 'Nghe và đọc theo (03-4): j, q, x', items: [['休息', 'xiūxi', 'nghỉ ngơi'], ['积极', 'jījí', 'tích cực'], ['机器', 'jīqì', 'máy móc'], ['小区', 'xiǎoqū', 'khu dân cư'], ['星期', 'xīngqī', 'tuần'], ['香蕉', 'xiāngjiāo', 'chuối'], ['兴趣', 'xìngqù', 'hứng thú'], ['继续', 'jìxù', 'tiếp tục']] },
        { label: 'Nghe và đọc theo (03-5): z, c, s', items: [['洗澡', 'xǐ zǎo', 'tắm'], ['打扫', 'dǎsǎo', 'quét dọn'], ['三次', 'sān cì', 'ba lần'], ['自己', 'zìjǐ', 'bản thân'], ['昨天', 'zuótiān', 'hôm qua'], ['早上', 'zǎoshang', 'buổi sáng'], ['操场', 'cāochǎng', 'sân vận động'], ['汉字', 'Hànzì', 'chữ Hán']] },
      ],
    },
    {
      kind: 'examples', label: 'i u ü', title: 'Phân biệt vận mẫu i, u, ü',
      clip: { label: '03-5 · Nghe và đọc theo (z c s)', src: A + 'l03-5.mp3' },
      intro: 'i và ü có cùng vị trí phát âm nhưng khác hình môi: i môi dẹt, ü môi tròn. Khi luyện, đọc i trước, giữ nguyên lưỡi rồi làm tròn môi là được ü. u và ü đều tròn môi, nhưng ü lưỡi đặt ở phía trước (đầu lưỡi áp mặt trong răng dưới) còn u lưỡi đặt ở phía sau (đầu lưỡi không chạm răng dưới, cố thụt lưỡi về sau).',
      groups: [{ label: 'So sánh', items: [['i', 'i', 'môi dẹt, lưỡi trước'], ['ü', 'ü', 'môi tròn, lưỡi trước'], ['u', 'u', 'môi tròn, lưỡi sau']] }],
    },
    {
      kind: 'examples', label: '不 biến điệu', title: 'Sự biến đổi thanh điệu của 不',
      clip: { label: '03-6 · Nghe và đọc theo (不)', src: A + 'l03-6.mp3' },
      intro: '不 không đổi thanh khi đứng trước âm tiết thanh 1, 2 hoặc 3 (đọc bù). Khi đứng trước âm tiết thanh 4 thì đọc thành thanh 2 (bú).',
      groups: [
        { label: 'Trước thanh 1, 2, 3: giữ bù', items: [['不吃', 'bù chī', 'không ăn'], ['不行', 'bù xíng', 'không được'], ['不好', 'bù hǎo', 'không tốt'], ['不喝', 'bù hē', 'không uống'], ['不能', 'bù néng', 'không thể'], ['不想', 'bù xiǎng', 'không muốn']] },
        { label: 'Trước thanh 4: đọc bú', items: [['不会', 'bú huì', 'không thể (không biết)'], ['不是', 'bú shì', 'không phải'], ['不看', 'bú kàn', 'không xem']] },
      ],
    },
    {
      kind: 'examples', label: 'ü bỏ hai chấm', title: 'Quy tắc ghép âm (2): ü và các vận mẫu bắt đầu bằng ü với j, q, x',
      clip: { label: '03-7 · Nghe và đọc theo (ü)', src: A + 'l03-7.mp3' },
      intro: 'Khi ü và các vận mẫu bắt đầu bằng ü ghép với thanh mẫu j, q, x thì hai dấu chấm trên ü được lược bỏ: ju, qu, xu (đọc vẫn là ü). Nhưng khi ghép với l, n thì giữ nguyên hai chấm: lǜ, nǚ.',
      groups: [
        { label: 'ü ghép với j, q, x (bỏ chấm): đọc là ü', items: [['ü', 'ü üe üan ün', 'vận mẫu gốc'], ['ju', 'ju jue juan jun', 'j + ü…'], ['qu', 'qu que quan qun', 'q + ü…'], ['xu', 'xu xue xuan xun', 'x + ü…']] },
        { label: 'Ví dụ có chữ Hán', items: [['去', 'qù', 'đi'], ['月', 'yuè', 'tháng'], ['绿', 'lǜ', 'xanh lá'], ['女', 'nǚ', 'nữ']] },
      ],
    },
  ],

  notes: [
    {
      title: 'Đại từ nghi vấn 什么',
      body: 'Dùng trong câu hỏi, có thể đứng một mình làm tân ngữ hoặc đi với danh từ phía sau làm tân ngữ. Câu có 什么 thì KHÔNG thêm 吗. Ví dụ: 你叫什么名字？ 这是什么？ 这是什么书？ (Đây là sách gì?)',
      say: '你叫什么名字',
    },
    {
      title: 'Câu có từ 是',
      body: 'Câu 是 là câu phán đoán, dùng để nói người hoặc vật bằng với hoặc thuộc về cái gì. Cấu trúc: Chủ ngữ + 是 + danh từ. Phủ định thêm 不 trước 是: Chủ ngữ + 不是 + danh từ. Ví dụ: 李月是老师。 我是美国人。 我不是老师。',
      say: '我是美国人',
    },
    {
      title: 'Câu hỏi có từ 吗',
      body: '吗 là trợ từ nghi vấn, thêm vào cuối câu trần thuật để tạo câu hỏi có/không. Ví dụ: 你是美国人吗？ 你是中国人吗？ 你是老师吗？ Trả lời: 是, …… / 不是, ……',
      say: '你是老师吗',
    },
    {
      title: 'Phân biệt j q x và z c s',
      body: 'j, q, x là âm mặt lưỡi (j không bật hơi, q bật hơi, x xát qua khe); z, c, s là âm đầu lưỡi phẳng (z không bật hơi, c bật hơi, s xát qua khe). Cặp j/z, q/c, x/s đối ứng nhưng khác vị trí lưỡi.',
      say: '星期',
    },
    {
      title: 'ü bỏ hai chấm khi ghép với j q x',
      body: 'Sau j, q, x thì ü viết thành u (ju, qu, xu) nhưng vẫn đọc là ü. Sau l, n thì giữ hai chấm (lü, nü). Âm tiết u thật sự đứng sau j, q, x không tồn tại nên không bị nhầm.',
      say: '去',
    },
    {
      title: '不 biến điệu',
      body: '不 đọc bù trước thanh 1, 2, 3 (不吃, 不行, 不好) và đọc bú trước thanh 4 (不是, 不会, 不看).',
      say: '不是',
    },
  ],

  writeChars: ['门', '月', '心', '您', '中', '人', '十', '工', '八'],

  drills: [
    {
      title: 'Nét mới (笔画 3)',
      hint: 'Sách trang 32. Hai nét mới: ngang gập móc, nằm móc.',
      items: [
        { p: 'héngzhégōu · ngang gập móc', m: 'ví dụ: 门 mén (cửa), 月 yuè (mặt trăng)' },
        { p: 'wògōu · nằm móc', m: 'ví dụ: 心 xīn (trái tim), 您 nín (ông, bà)' },
      ],
    },
    {
      title: 'Bốn chữ đơn mới (认识独体字)',
      hint: 'Sách trang 32: nguồn gốc hình chữ. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '月', p: 'yuè', m: 'mặt trăng, tháng' },
        { h: '心', p: 'xīn', m: 'trái tim' },
        { h: '中', p: 'zhōng', m: 'ở giữa (gốc: lá cờ tung bay)' },
        { h: '人', p: 'rén', m: 'người (hình người đứng thẳng)' },
      ],
    },
    {
      title: 'Thứ tự nét (1): ngang trước sổ sau, phẩy trước mác sau',
      hint: 'Sách trang 33.',
      items: [
        { h: '十', p: 'shí', m: 'ngang trước, sổ sau' },
        { h: '工', p: 'gōng', m: 'ngang trước, sổ sau' },
        { h: '八', p: 'bā', m: 'phẩy trước, mác sau' },
        { h: '人', p: 'rén', m: 'phẩy trước, mác sau' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi (练习 2, sách trang 28)',
      items: [
        { q: '你叫什么名字？ (Nǐ jiào shénme míngzi?)', hint: 'Trả lời: 我叫 + tên của bạn. Ví dụ: 我叫李月。' },
        { q: '你是中国人吗？ (Nǐ shì Zhōngguó rén ma?)', hint: 'Là người Trung Quốc: 是，我是中国人。 Không phải: 不是，我不是中国人。' },
        { q: '你是美国人吗？ (Nǐ shì Měiguó rén ma?)', hint: 'Là người Mỹ: 是，我是美国人。 Không phải: 不是，我不是美国人。' },
        { q: '你是老师吗？ (Nǐ shì lǎoshī ma?)', hint: '是，我是老师。 hoặc 不是，我不是老师，我是学生。' },
        { q: '你是学生吗？ (Nǐ shì xuésheng ma?)', hint: '是，我是学生。 hoặc 不是，我不是学生。' },
      ],
    },
    {
      title: 'Hoạt động theo cặp: tự giới thiệu (运用 1, sách trang 33)',
      items: [
        { q: 'Mẫu của sách: 我叫李月，我是中国人，我是老师。', hint: 'Cấu trúc: 我叫 + tên, 我是 + quốc tịch + 人, 我是 + nghề nghiệp. Thử thay bằng tên của bạn.' },
        { q: 'Mẫu của sách: 我叫大卫，我是美国人，我是学生。', hint: 'Đổi 大卫 (David) thành tên của bạn, và đổi 美国 thành nước của bạn.' },
      ],
    },
  ],

  sentences: [
    { parts: ['你', '叫', '什么', '名字'], pinyin: 'Nǐ jiào shénme míngzi?', vi: 'Cô tên gì?' },
    { parts: ['我', '叫', '李月'], pinyin: 'Wǒ jiào Lǐ Yuè.', vi: 'Tôi là Lý Nguyệt.' },
    { parts: ['你', '是', '老师', '吗'], pinyin: 'Nǐ shì lǎoshī ma?', vi: 'Cô là cô giáo phải không?' },
    { parts: ['我', '不', '是', '老师'], pinyin: 'Wǒ bú shì lǎoshī.', vi: 'Tôi không phải cô giáo.' },
    { parts: ['我', '是', '学生'], pinyin: 'Wǒ shì xuésheng.', vi: 'Tôi là học sinh.' },
    { parts: ['你', '是', '中国', '人', '吗'], pinyin: 'Nǐ shì Zhōngguó rén ma?', vi: 'Bạn là người Trung Quốc phải không?' },
    { parts: ['我', '不', '是', '中国', '人'], pinyin: 'Wǒ bú shì Zhōngguó rén.', vi: 'Mình không phải người Trung Quốc.' },
    { parts: ['我', '是', '美国', '人'], pinyin: 'Wǒ shì Měiguó rén.', vi: 'Mình là người Mỹ.' },
  ],

  // ───────── Sách bài tập, bài 3 (đáp án: "Đáp án sách bài tập", trang 4–6) ─────────
  dictations: [
    {
      title: 'Sách bài tập · Nghe, chọn âm tiết (ngữ âm, câu 1–8)',
      hint: 'Nghe đoạn ghi âm (03-2), chọn âm tiết bạn nghe được trong hai âm tiết cho sẵn rồi gõ lại âm tiết đó (có thể không cần dấu).',
      clip: { label: '03-2 · Sách bài tập, ngữ âm phần 1', src: A + 'w03-2.mp3' },
      items: [
        { prompt: 'sì / cì', answer: 'sì', gloss: '四' }, { prompt: 'suān / cuān', answer: 'suān', gloss: '酸' }, { prompt: 'zǐ / cǐ', answer: 'cǐ', gloss: '此' }, { prompt: 'zuàn / suàn', answer: 'suàn', gloss: '算' },
        { prompt: 'jiā / xiā', answer: 'xiā', gloss: '虾' }, { prompt: 'xīn / qīn', answer: 'xīn', gloss: '新' }, { prompt: 'jiāng / xiāng', answer: 'xiāng', gloss: '香' }, { prompt: 'qiú / jiǔ', answer: 'jiǔ', gloss: '酒' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, ghi thanh điệu của 不 (ngữ âm, câu 9–16)',
      hint: 'Nghe tiếp đoạn ghi âm (03-2), cho biết 不 trong mỗi từ đọc thanh nào. Gõ bù (thanh 4) hoặc bú (thanh 2), hoặc gõ số 4 hoặc 2.',
      clip: { label: '03-2 · Sách bài tập, ngữ âm phần 2', src: A + 'w03-2.mp3' },
      needTone: true,
      items: [
        { prompt: 'bu shì', answer: 'bú', accept: ['2', 'bú shì'], gloss: '不是' }, { prompt: 'bu xiǎng', answer: 'bù', accept: ['4', 'bù xiǎng'], gloss: '不想' },
        { prompt: 'bu hǎo', answer: 'bù', accept: ['4', 'bù hǎo'], gloss: '不好' }, { prompt: 'bu kàn', answer: 'bú', accept: ['2', 'bú kàn'], gloss: '不看' },
        { prompt: 'bu néng', answer: 'bù', accept: ['4', 'bù néng'], gloss: '不能' }, { prompt: 'bu shuō', answer: 'bù', accept: ['4', 'bù shuō'], gloss: '不说' },
        { prompt: 'bu qù', answer: 'bú', accept: ['2', 'bú qù'], gloss: '不去' }, { prompt: 'bu mǎi', answer: 'bù', accept: ['4', 'bù mǎi'], gloss: '不买' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 9–12)',
      hint: 'Nghe đoạn ghi âm (03-1, phần 3), chọn A, B hoặc C. Câu 9: A 李月 · B 刘月 · C 王月. Câu 10: A 是 · B 不是 · C 不知道. Câu 11: A 美国人 · B 中国人 · C 日本人. Câu 12: A 中国人 · B 日本人 · C 美国人.',
      clip: { label: '03-1 · Sách bài tập, nghe phần 3 (câu 9–12)', src: A + 'w03-1.mp3' },
      items: [
        { prompt: 'Câu 9', answer: 'A', gloss: '李月' }, { prompt: 'Câu 10', answer: 'B', gloss: '不是' },
        { prompt: 'Câu 11', answer: 'B', gloss: '中国人' }, { prompt: 'Câu 12', answer: 'C', gloss: '美国人' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu hỏi với câu trả lời (câu 18–22)',
      hint: 'A 不是，我是中国人。 B 我不是学生，我是老师。 C 你好，我叫大卫。 D 是，我是老师。 E 我叫李心。 F 好的，谢谢！ Gõ chữ cái A–F.',
      items: [
        { prompt: '你叫什么名字？', answer: 'E', gloss: '我叫李心。' }, { prompt: '您是老师吗？', answer: 'D', gloss: '是，我是老师。' },
        { prompt: '你好，我叫李月。', answer: 'C', gloss: '你好，我叫大卫。' }, { prompt: '你是美国人吗？', answer: 'A', gloss: '不是，我是中国人。' },
        { prompt: '你是学生吗？', answer: 'B', gloss: '我不是学生，我是老师。' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ vào chỗ trống (câu 23–30)',
      hint: 'A 什么 · B 是 · C 不 · D 名字 · E 吗 · F 老师 · G 学生 · H 中国 · I 美国. Gõ chữ cái A–I. (Câu 23–26 chọn từ A–E, câu 27–30 chọn từ F–I.)',
      items: [
        { prompt: '我（ ）是中国人，我是美国人。', answer: 'C', gloss: '不' }, { prompt: '您是老师（ ）？', answer: 'E', gloss: '吗' },
        { prompt: '他叫（ ）？', answer: 'A', gloss: '什么' }, { prompt: '李月（ ）中国人，她是老师。', answer: 'B', gloss: '是' },
        { prompt: '大卫不是老师，他是（ ）。', answer: 'G', gloss: '学生' }, { prompt: '（ ），谢谢您！', answer: 'F', gloss: '老师' },
        { prompt: '我不是中国人，我是（ ）人。', answer: 'I', gloss: '美国' }, { prompt: '你们是（ ）学生吗？', answer: 'H', gloss: '中国' },
      ],
    },
  ],
}
