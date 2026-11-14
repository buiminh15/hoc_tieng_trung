import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 1, Bài 10: 我能坐这儿吗？ (sách trang 84–91).
 * Nghe: 10-1…10-6 (giáo trình). Sách bài tập (trang 71–78, đáp án trang 18–20): nghe chọn từ không phải từ láy,
 * ghi dấu thanh nhẹ, nghe chọn đáp án 9–12, nối câu hỏi/đáp 18–22, điền từ 23–30.
 * Phần tiếng Việt do app tự thêm ở những chỗ sách không có.
 */

const A = '/audio/hsk-std1/'

export const hskStd1Lesson10: Lesson = {
  id: 10,
  title: 'Tôi có thể ngồi ở đây được không?',
  hanzi: '我能坐这儿吗？',
  pinyin: 'Wǒ néng zuò zhèr ma?',
  vi: 'Tôi có thể ngồi ở đây được không?',
  intro: 'Nói về sự tồn tại và xin phép: 桌子上有什么？ 我能坐这儿吗？ Học câu có từ 有 chỉ sự tồn tại, liên từ 和, động từ năng nguyện 能, câu cầu khiến với 请; cách đọc thanh nhẹ, từ láy và hậu tố 们, 子, 头; kết cấu chữ bao quanh hoàn toàn; bộ 囗 và 礻.',

  dialogue: [
    { who: 'A', hanzi: '桌子上有什么？', pinyin: 'Zhuōzi shang yǒu shénme?', vi: 'Trên bàn có gì vậy?', scene: 'Hội thoại 1 · trong văn phòng' },
    { who: 'B', hanzi: '桌子上有一个电脑和一本书。', pinyin: 'Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.', vi: 'Có một chiếc máy vi tính và một quyển sách.' },
    { who: 'A', hanzi: '杯子在哪儿？', pinyin: 'Bēizi zài nǎr?', vi: 'Vậy cái ly đâu?' },
    { who: 'B', hanzi: '杯子在桌子里。', pinyin: 'Bēizi zài zhuōzi li.', vi: 'Ở trong bàn.' },
    { who: 'A', hanzi: '前面那个人叫什么名字？', pinyin: 'Qiánmiàn nàge rén jiào shénme míngzi?', vi: 'Người ở phía trước tên gì vậy?', scene: 'Hội thoại 2 · ở phòng tập thể dục' },
    { who: 'B', hanzi: '她叫王方，在医院工作。', pinyin: 'Tā jiào Wáng Fāng, zài yīyuàn gōngzuò.', vi: 'Cô ấy tên là Vương Phương, làm việc ở bệnh viện.' },
    { who: 'A', hanzi: '后面那个人呢？他叫什么名字？', pinyin: 'Hòumiàn nàge rén ne? Tā jiào shénme míngzi?', vi: 'Còn người ở phía sau? Anh ấy tên gì?' },
    { who: 'B', hanzi: '他叫谢朋，在商店工作。', pinyin: 'Tā jiào Xiè Péng, zài shāngdiàn gōngzuò.', vi: 'Anh ấy tên là Tạ Bằng, làm việc ở cửa hàng.' },
    { who: 'A', hanzi: '这儿有人吗？', pinyin: 'Zhèr yǒu rén ma?', vi: 'Chỗ này có ai ngồi chưa?', scene: 'Hội thoại 3 · ở thư viện' },
    { who: 'B', hanzi: '没有。', pinyin: 'Méi yǒu.', vi: 'Chưa.' },
    { who: 'A', hanzi: '我能坐这儿吗？', pinyin: 'Wǒ néng zuò zhèr ma?', vi: 'Tôi có thể ngồi ở đây được không?' },
    { who: 'B', hanzi: '请坐。', pinyin: 'Qǐng zuò.', vi: 'Được, xin mời.' },
  ],
  dialogueClips: [
    { label: '10-1 · Hội thoại 1: 桌子上有什么？', src: A + 'l10-1.mp3' },
    { label: '10-2 · Hội thoại 2: 前面那个人叫什么名字？', src: A + 'l10-2.mp3' },
    { label: '10-3 · Hội thoại 3: 我能坐这儿吗？', src: A + 'l10-3.mp3' },
  ],
  dialogueTip: '<b>Nơi chốn + 有 + người/vật</b>: có gì ở đâu (桌子上有一个电脑). Phủ định là <b>没有</b>. <b>能 …… 吗？</b> dùng để xin phép; đáp lại lịch sự bằng <b>请 + động từ</b>: 请坐. Chú ý 一 đọc <b>yí</b> trước ge, đọc <b>yì</b> trước běn.',
  slowSay: '我能坐这儿吗',

  vocab: [
    { hanzi: '桌子', parts: '桌 = 卓 + 木; 子 (tử)', pinyin: 'zhuōzi', pos: 'danh từ', meaning: 'bàn', han_viet: 'trác tử' },
    { hanzi: '上', pinyin: 'shang', pos: 'danh từ', meaning: 'trên, phía trên', han_viet: 'thượng' },
    { hanzi: '电脑', parts: '电 (điện) + 脑 (não)', pinyin: 'diànnǎo', pos: 'danh từ', meaning: 'máy vi tính', han_viet: 'điện não' },
    { hanzi: '和', parts: '禾 (hòa) + 口 (khẩu)', pinyin: 'hé', pos: 'liên từ', meaning: 'và', han_viet: 'hòa' },
    { hanzi: '本', pinyin: 'běn', pos: 'lượng từ', meaning: 'quyển, cuốn', han_viet: 'bản' },
    { hanzi: '里', pinyin: 'li', pos: 'danh từ', meaning: 'trong, bên trong', han_viet: 'lý' },
    { hanzi: '前面', parts: '前 (tiền) + 面 (diện)', pinyin: 'qiánmiàn', pos: 'danh từ', meaning: 'phía trước', han_viet: 'tiền diện' },
    { hanzi: '后面', parts: '后 (hậu) + 面 (diện)', pinyin: 'hòumiàn', pos: 'danh từ', meaning: 'phía sau', han_viet: 'hậu diện' },
    { hanzi: '这儿', pinyin: 'zhèr', pos: 'đại từ', meaning: 'chỗ này, ở đây', han_viet: '' },
    { hanzi: '没有', pinyin: 'méiyǒu (méi)', pos: 'phó từ', meaning: 'không có, chưa', han_viet: 'một hữu' },
    { hanzi: '能', parts: '厶 + 月 + 匕匕', pinyin: 'néng', pos: 'động từ năng nguyện', meaning: 'có thể', han_viet: 'năng' },
    { hanzi: '坐', parts: '从 (hai người) + 土 (thổ)', pinyin: 'zuò', pos: 'động từ', meaning: 'ngồi', han_viet: 'tọa' },
    { hanzi: '王方', pinyin: 'Wáng Fāng', pos: 'danh từ riêng', meaning: 'Vương Phương (tên người)', han_viet: '' },
    { hanzi: '谢朋', pinyin: 'Xiè Péng', pos: 'danh từ riêng', meaning: 'Tạ Bằng (tên người)', han_viet: '' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Thanh nhẹ', title: 'Cách đọc âm tiết mang thanh nhẹ',
      clip: { label: '10-4 · Nghe và đọc theo (thanh nhẹ)', src: A + 'l10-4.mp3' },
      intro: 'Độ cao của thanh nhẹ thay đổi theo âm tiết đứng trước. Sau thanh 1, thanh 2, thanh 4 thì âm tiết thanh nhẹ thường được hạ thấp; ngược lại, sau thanh 3 thì âm tiết thanh nhẹ lên cao hơn một chút.',
      groups: [{ label: 'Bốn ví dụ trong sách', items: [['桌子', 'zhuōzi', 'cái bàn · thanh 1 + nhẹ'], ['盘子', 'pánzi', 'cái đĩa · thanh 2 + nhẹ'], ['椅子', 'yǐzi', 'ghế dựa · thanh 3 + nhẹ'], ['裤子', 'kùzi', 'quần · thanh 4 + nhẹ']] }],
    },
    {
      kind: 'examples', label: 'Từ láy', title: 'Cách đọc từ láy',
      clip: { label: '10-5 · Nghe và đọc theo (từ láy)', src: A + 'l10-5.mp3' },
      intro: 'Trong từ láy hai âm tiết, âm tiết thứ hai thường được chuyển thành thanh nhẹ.',
      groups: [{ label: 'Nghe và đọc theo (10-5)', items: [
        ['爸爸', 'bàba', 'bố'], ['妈妈', 'māma', 'mẹ'], ['爷爷', 'yéye', 'ông nội'], ['奶奶', 'nǎinai', 'bà nội'],
        ['哥哥', 'gēge', 'anh trai'], ['姐姐', 'jiějie', 'chị gái'], ['弟弟', 'dìdi', 'em trai'], ['妹妹', 'mèimei', 'em gái'],
        ['姑姑', 'gūgu', 'cô'], ['叔叔', 'shūshu', 'chú'], ['太太', 'tàitai', 'bà, vợ'], ['星星', 'xīngxing', 'ngôi sao'],
        ['谢谢', 'xièxie', 'cảm ơn'], ['看看', 'kànkan', 'xem thử'], ['说说', 'shuōshuo', 'nói thử'], ['常常', 'chángchang', 'thường'],
      ] }],
    },
    {
      kind: 'examples', label: 'Hậu tố 们 子 头', title: 'Cách đọc các từ có hậu tố 们, 子, 头',
      clip: { label: '10-6 · Nghe và đọc theo (hậu tố)', src: A + 'l10-6.mp3' },
      intro: 'Trong các từ có hậu tố 们, 子, 头, các hậu tố này thường được đọc bằng thanh nhẹ.',
      groups: [
        { label: 'Hậu tố 们', items: [['你们', 'nǐmen', 'các bạn'], ['我们', 'wǒmen', 'chúng tôi'], ['他们', 'tāmen', 'họ'], ['人们', 'rénmen', 'mọi người']] },
        { label: 'Hậu tố 子', items: [['桌子', 'zhuōzi', 'cái bàn'], ['椅子', 'yǐzi', 'ghế dựa'], ['杯子', 'bēizi', 'ly, tách'], ['被子', 'bèizi', 'chăn']] },
        { label: 'Hậu tố 头', items: [['舌头', 'shétou', 'cái lưỡi'], ['枕头', 'zhěntou', 'cái gối'], ['石头', 'shítou', 'hòn đá'], ['木头', 'mùtou', 'gỗ']] },
        { label: 'Từ chỉ phương vị', items: [['前头', 'qiántou', 'phía trước'], ['后头', 'hòutou', 'phía sau'], ['里头', 'lǐtou', 'bên trong'], ['外头', 'wàitou', 'bên ngoài']] },
      ],
    },
    {
      kind: 'examples', label: 'Bao quanh hoàn toàn', title: 'Cấu trúc của chữ Hán (5): kết cấu bao quanh hoàn toàn',
      intro: 'Kết cấu bao quanh hoàn toàn thuộc dạng kết cấu tổ hợp: bao quanh bốn mặt (全包围结构).',
      groups: [{ label: 'Kết cấu bao quanh hoàn toàn', items: [['四', 'sì', 'bốn'], ['国', 'guó', 'quốc gia, đất nước']] }],
    },
    {
      kind: 'examples', label: 'Bộ 囗 và 礻', title: 'Các bộ của chữ Hán: 囗 và 礻',
      intro: 'Bộ 囗 thường mang nghĩa vây hãm, bao vây. Bộ 礻 là biến thể của 示, thường liên quan đến thần linh, việc thờ cúng, họa phúc.',
      groups: [
        { label: 'Bộ 囗 (vây quanh)', items: [['国', 'guó', 'quốc gia, đất nước'], ['困', 'kùn', 'bao vây, vây hãm']] },
        { label: 'Bộ 礻 (thần linh, thờ cúng)', items: [['视', 'shì', 'nhìn'], ['祝', 'zhù', 'chúc']] },
      ],
    },
  ],

  notes: [
    {
      title: 'Câu có từ 有: diễn tả sự tồn tại',
      body: '有 dùng trong câu diễn tả sự tồn tại: cho biết người hay vật đang ở vị trí hoặc địa điểm nào đó. Cấu trúc: từ chỉ vị trí + 有 + người/vật. Ví dụ: 椅子下面有一只小狗。 学校里有一个商店。 桌子上有一个电脑和一本书。 Phủ định là 没有, và trước tân ngữ không có định ngữ chỉ số lượng: 椅子下面没有小狗。 学校里没有商店。',
      say: '桌子上有一个电脑和一本书',
    },
    {
      title: 'Liên từ 和',
      body: '和 nối hai (hoặc nhiều hơn) thành phần ngang nhau, thể hiện quan hệ ngang cấp. Ví dụ: 我有一个中国朋友和一个美国朋友。 我家有三口人，爸爸、妈妈和我。 桌子上有一个电脑和一本书。',
      say: '爸爸妈妈和我',
    },
    {
      title: 'Động từ năng nguyện 能',
      body: '能 thường đứng trước động từ khác, diễn tả năng lực hoặc khả năng làm việc gì. 能……吗？ thường dùng để xin phép, hoặc mong muốn được phép làm gì. Ví dụ: 明天下午我能去商店。 你能在这儿写你的名字吗？ 我能坐这儿吗？',
      say: '我能坐这儿吗',
    },
    {
      title: 'Câu cầu khiến với 请',
      body: '请 kết hợp với động từ tạo thành câu cầu khiến, diễn đạt đề nghị, mong muốn, mang ngữ khí mềm mỏng, lịch sự. Ví dụ: 请写您的名字。 请喝茶。 请坐。',
      say: '请坐',
    },
    {
      title: 'Thanh nhẹ, từ láy, hậu tố 们 子 头',
      body: 'Thanh nhẹ không ghi dấu. Âm tiết thứ hai của từ láy (妈妈, 看看) thường đọc nhẹ. Các hậu tố 们, 子, 头 cũng đọc nhẹ: 我们, 桌子, 舌头.',
      say: '妈妈',
    },
    {
      title: 'Bộ 囗 và 礻',
      body: 'Bộ 囗 mang nghĩa vây quanh: 国, 困. Bộ 礻 liên quan đến thần linh, thờ cúng, họa phúc: 视, 祝.',
      say: '国',
    },
  ],

  writeChars: ['上', '下', '本', '末', '四', '国'],

  drills: [
    {
      title: 'Bốn chữ đơn mới (认识独体字)',
      hint: 'Sách trang 90: nguồn gốc hình chữ. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '上', p: 'shàng', m: 'phía trên (nét ngắn ở trên nét ngang dài)' },
        { h: '下', p: 'xià', m: 'phía dưới, trái nghĩa 上' },
        { h: '本', p: 'běn', m: 'gốc cây (thêm chấm ở dưới chữ 木), nghĩa mở rộng là cội nguồn' },
        { h: '末', p: 'mò', m: 'ngọn cây, nghĩa mở rộng là thứ yếu' },
      ],
    },
    {
      title: 'Điền lượng từ (练习 4, sách trang 88)',
      hint: 'Dùng các lượng từ 个, 口, 本, 块. Bấm để nghe câu hoàn chỉnh.',
      items: [
        { h: '我家有三口人。', p: 'Wǒ jiā yǒu sān kǒu rén.', m: 'Nhà tôi có ba người.' },
        { h: '我买一个杯子。', p: 'Wǒ mǎi yí ge bēizi.', m: 'Tôi mua một cái ly.' },
        { h: '我有五本汉语书。', p: 'Wǒ yǒu wǔ běn Hànyǔ shū.', m: 'Tôi có năm quyển sách tiếng Hán.' },
        { h: '椅子八十块钱。', p: 'Yǐzi bāshí kuài qián.', m: 'Cái ghế dựa 80 đồng.' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 87)',
      items: [
        { q: '电脑在哪儿？ (Diànnǎo zài nǎr?)', hint: '电脑在桌子上。' },
        { q: '书在哪儿？ (Shū zài nǎr?)', hint: '书在桌子上。' },
        { q: '桌子里面有什么？ (Zhuōzi lǐmiàn yǒu shénme?)', hint: '桌子里面有杯子。' },
        { q: '哪个人是王方？ (Nǎge rén shì Wáng Fāng?)', hint: '前面那个人是王方。' },
        { q: '哪个人是谢朋？ (Nǎge rén shì Xiè Péng?)', hint: '后面那个人是谢朋。' },
      ],
    },
    {
      title: 'Hoạt động theo cặp (运用 1, sách trang 91)',
      items: [
        { q: 'A: 你的桌子上面有什么？  B: ……', hint: '我的桌子上面有……' },
        { q: 'A: 你的椅子下面有什么？  B: ……', hint: '我的椅子下面有……' },
      ],
    },
  ],

  sentences: [
    { parts: ['桌子', '上', '有', '什么'], pinyin: 'Zhuōzi shang yǒu shénme?', vi: 'Trên bàn có gì vậy?' },
    { parts: ['桌子', '上', '有', '一', '个', '电脑', '和', '一', '本', '书'], pinyin: 'Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.', vi: 'Trên bàn có một máy vi tính và một quyển sách.' },
    { parts: ['杯子', '在', '桌子', '里'], pinyin: 'Bēizi zài zhuōzi li.', vi: 'Cái ly ở trong bàn.' },
    { parts: ['前面', '那', '个', '人', '叫', '什么', '名字'], pinyin: 'Qiánmiàn nàge rén jiào shénme míngzi?', vi: 'Người ở phía trước tên gì?' },
    { parts: ['这儿', '有', '人', '吗'], pinyin: 'Zhèr yǒu rén ma?', vi: 'Chỗ này có ai ngồi chưa?' },
    { parts: ['我', '能', '坐', '这儿', '吗'], pinyin: 'Wǒ néng zuò zhèr ma?', vi: 'Tôi có thể ngồi ở đây được không?' },
    { parts: ['请', '坐'], pinyin: 'Qǐng zuò.', vi: 'Xin mời ngồi.' },
  ],

  // ───────── Sách bài tập, bài 10 (đáp án: "Đáp án sách bài tập", trang 18–20) ─────────
  dictations: [
    {
      title: 'Sách bài tập · Nghe, chọn từ không phải từ láy (ngữ âm, câu 1–8)',
      hint: 'Nghe đoạn ghi âm (10-2), mỗi câu có 3 từ A, B, C: chọn từ KHÔNG phải từ láy hai âm tiết. 1: A 星星 B 孩子 C 奶奶. 2: A 姐姐 B 妹妹 C 早上. 3: A 朋友 B 看看 C 问问. 4: A 姥姥 B 哥哥 C 咳嗽. 5: A 妈妈 B 弟弟 C 清楚. 6: A 爸爸 B 头发 C 姑姑. 7: A 想想 B 谢谢 C 客气. 8: A 认识 B 叔叔 C 写写. Gõ A, B hoặc C.',
      clip: { label: '10-2 · Sách bài tập, ngữ âm phần 1', src: A + 'w10-2.mp3' },
      items: [
        { prompt: 'Câu 1', answer: 'B', gloss: '孩子' }, { prompt: 'Câu 2', answer: 'C', gloss: '早上' }, { prompt: 'Câu 3', answer: 'A', gloss: '朋友' }, { prompt: 'Câu 4', answer: 'C', gloss: '咳嗽' },
        { prompt: 'Câu 5', answer: 'C', gloss: '清楚' }, { prompt: 'Câu 6', answer: 'B', gloss: '头发' }, { prompt: 'Câu 7', answer: 'C', gloss: '客气' }, { prompt: 'Câu 8', answer: 'A', gloss: '认识' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, ghi dấu thanh (ngữ âm, câu 9–16)',
      hint: 'Nghe tiếp (10-2), gõ lại từ có đủ dấu thanh (âm tiết nhẹ không ghi dấu). Ví dụ: zhuozi → zhuōzi.',
      clip: { label: '10-2 · Sách bài tập, ngữ âm phần 2', src: A + 'w10-2.mp3' },
      needTone: true,
      items: [
        { prompt: 'zhuozi', answer: 'zhuōzi', gloss: '桌子' }, { prompt: 'yizi', answer: 'yǐzi', gloss: '椅子' },
        { prompt: 'baozi', answer: 'bāozi', gloss: '包子' }, { prompt: 'jiaozi', answer: 'jiǎozi', gloss: '饺子' },
        { prompt: 'haizi', answer: 'háizi', gloss: '孩子' }, { prompt: 'sangzi', answer: 'sǎngzi', gloss: '嗓子' },
        { prompt: 'shitou', answer: 'shítou', gloss: '石头' }, { prompt: 'shetou', answer: 'shétou', gloss: '舌头' },
        { prompt: 'litou', answer: 'lǐtou', gloss: '里头' }, { prompt: 'waitou', answer: 'wàitou', gloss: '外头' },
        { prompt: 'zanmen', answer: 'zánmen', gloss: '咱们' }, { prompt: 'renmen', answer: 'rénmen', gloss: '人们' },
        { prompt: 'women', answer: 'wǒmen', gloss: '我们' }, { prompt: 'tamen', answer: 'tāmen', gloss: '他们' },
        { prompt: 'beizi', answer: 'bēizi', gloss: '杯子' }, { prompt: 'yangzi', answer: 'yàngzi', gloss: '样子' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 9–12)',
      hint: 'Nghe đoạn ghi âm (10-1, phần 3), chọn A, B hoặc C. Câu 9: A 椅子 · B 电脑 · C 杯子和书. Câu 10: A 看书 · B 喝茶 · C 写汉字. Câu 11: A 医生 · B 谢朋 · C 谢朋的同学. Câu 12: A 小猫 · B 小狗 · C 椅子.',
      clip: { label: '10-1 · Sách bài tập, nghe phần 3 (câu 9–12)', src: A + 'w10-1.mp3' },
      items: [
        { prompt: 'Câu 9', answer: 'C', gloss: '杯子和书' }, { prompt: 'Câu 10', answer: 'A', gloss: '看书' },
        { prompt: 'Câu 11', answer: 'C', gloss: '谢朋的同学' }, { prompt: 'Câu 12', answer: 'B', gloss: '小狗' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu hỏi với câu trả lời (câu 18–22)',
      hint: 'A 在那儿，桌子里面。 B 好，请坐。 C 一个电脑和一本书。 D 她叫李月，是我的汉语老师。 E 不是，我后面那个人是李朋。 F 好的，谢谢！ Gõ chữ cái A–F.',
      items: [
        { prompt: '你好，我能坐这儿吗？', answer: 'B', gloss: '好，请坐。' }, { prompt: '你的杯子呢？', answer: 'A', gloss: '在那儿，桌子里面。' },
        { prompt: '你的桌子上有什么？', answer: 'C', gloss: '一个电脑和一本书。' }, { prompt: '你后面那个人是谁？', answer: 'D', gloss: '她叫李月，是我的汉语老师。' },
        { prompt: '你前面那个人是李朋吗？', answer: 'E', gloss: '不是，我后面那个人是李朋。' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ vào chỗ trống (câu 23–30)',
      hint: 'A 有 · B 在 · C 请 · D 名字 · E 能 · F 不 · G 没 · H 很 · I 多. Gõ chữ cái A–I. (Câu 23–26 chọn từ A–E, câu 27–30 chọn từ F–I.)',
      items: [
        { prompt: '我（ ）看看你的汉语书吗？', answer: 'E', gloss: '能' }, { prompt: '我爸爸今天不（ ）家。', answer: 'B', gloss: '在' },
        { prompt: '您好，（ ）喝茶。', answer: 'C', gloss: '请' }, { prompt: '学校里（ ）一个商店。', answer: 'A', gloss: '有' },
        { prompt: '你爸爸今年（ ）大了？', answer: 'I', gloss: '多' }, { prompt: '请坐，这儿的中国菜（ ）好吃。', answer: 'H', gloss: '很' },
        { prompt: '他（ ）是学生，他是老师。', answer: 'F', gloss: '不' }, { prompt: '我的桌子上（ ）有电脑。', answer: 'G', gloss: '没' },
      ],
    },
  ],
}
