import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 1, Bài 5: 她女儿今年二十岁。 (sách trang 42–51).
 * Nghe: 05-1…05-10 (giáo trình). Sách bài tập (trang 31–38, đáp án trang 8–9): nghe chọn âm tiết, nhận biết âm cuốn lưỡi,
 * nghe chọn đáp án 9–12, nối câu hỏi/đáp 18–22, điền từ 23–30.
 * Phần tiếng Việt do app tự thêm ở những chỗ sách không có.
 */

const A = '/audio/hsk-std1/'

export const hskStd1Lesson5: Lesson = {
  id: 5,
  title: 'Con gái của cô ấy năm nay 20 tuổi.',
  hanzi: '她女儿今年二十岁。',
  pinyin: "Tā nǚ'ér jīnnián èrshí suì.",
  vi: 'Con gái của cô ấy năm nay 20 tuổi.',
  intro: 'Hỏi gia đình và tuổi: 你家有几口人？ 你女儿几岁了？ 你多大了？ Học đại từ nghi vấn 几, các số dưới 100, trợ từ 了 chỉ sự thay đổi, và 多 + 大 để hỏi tuổi; âm cuốn lưỡi (儿化), âm bật hơi và không bật hơi, dấu cách âm.',

  dialogue: [
    { who: 'A', hanzi: '你家有几口人？', pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', vi: 'Nhà anh có mấy người vậy?', scene: 'Hội thoại 1 · ở trường' },
    { who: 'B', hanzi: '我家有三口人。', pinyin: 'Wǒ jiā yǒu sān kǒu rén.', vi: 'Nhà tôi có ba người.' },
    { who: 'A', hanzi: '你女儿几岁了？', pinyin: "Nǐ nǚ'ér jǐ suì le?", vi: 'Con gái của cô mấy tuổi rồi?', scene: 'Hội thoại 2 · trong văn phòng' },
    { who: 'B', hanzi: '她今年四岁了。', pinyin: 'Tā jīnnián sì suì le.', vi: 'Năm nay cháu được bốn tuổi rồi.' },
    { who: 'A', hanzi: '李老师多大了？', pinyin: 'Lǐ lǎoshī duō dà le?', vi: 'Cô Lý bao nhiêu tuổi rồi?', scene: 'Hội thoại 3 · trong văn phòng' },
    { who: 'B', hanzi: '她今年五十岁了。', pinyin: 'Tā jīnnián wǔshí suì le.', vi: 'Năm nay cô ấy 50 tuổi rồi.' },
    { who: 'A', hanzi: '她女儿呢？', pinyin: "Tā nǚ'ér ne?", vi: 'Còn con gái cô ấy?' },
    { who: 'B', hanzi: '她女儿今年二十岁。', pinyin: "Tā nǚ'ér jīnnián èrshí suì.", vi: 'Con gái cô ấy năm nay 20 tuổi.' },
  ],
  dialogueClips: [
    { label: '05-1 · Hội thoại 1: 你家有几口人？', src: A + 'l05-1.mp3' },
    { label: '05-2 · Hội thoại 2: 你女儿几岁了？', src: A + 'l05-2.mp3' },
    { label: '05-3 · Hội thoại 3: 李老师多大了？', src: A + 'l05-3.mp3' },
  ],
  dialogueTip: 'Hỏi tuổi trẻ em (dưới 10 tuổi): <b>你女儿几岁了？</b>; hỏi bạn bè, người ngang tuổi: <b>你多大了？</b>. Chữ <b>了</b> ở cuối câu chỉ sự thay đổi, tình huống mới: 她今年四岁了 (năm nay đã 4 tuổi). <b>口</b> là lượng từ dùng cho số người trong gia đình: 三口人.',
  slowSay: '她女儿今年二十岁',

  vocab: [
    { hanzi: '家', parts: '宀 (miên, mái nhà) + 豕 (thỉ, con lợn)', pinyin: 'jiā', pos: 'danh từ', meaning: 'nhà', han_viet: 'gia' },
    { hanzi: '有', parts: '𠂇 + 月', pinyin: 'yǒu', pos: 'động từ', meaning: 'có', han_viet: 'hữu' },
    { hanzi: '口', pinyin: 'kǒu', pos: 'lượng từ', meaning: 'lượng từ dùng cho người (số người trong nhà). Từ ngoài đại cương HSK 1 (dấu * trong sách)', han_viet: 'khẩu' },
    { hanzi: '女儿', parts: '女 (nữ) + 儿 (nhi)', pinyin: "nǚ'ér", pos: 'danh từ', meaning: 'con gái', han_viet: 'nữ nhi' },
    { hanzi: '几', pinyin: 'jǐ', pos: 'đại từ', meaning: 'mấy', han_viet: 'kỷ' },
    { hanzi: '岁', parts: '山 (sơn) + 夕 (tịch)', pinyin: 'suì', pos: 'lượng từ', meaning: 'tuổi', han_viet: 'tuế' },
    { hanzi: '了', pinyin: 'le', pos: 'trợ từ', meaning: 'dùng ở giữa hay cuối câu để chỉ sự thay đổi hoặc tình huống mới', han_viet: 'liễu' },
    { hanzi: '今年', parts: '今 (kim) + 年 (niên)', pinyin: 'jīnnián', pos: 'danh từ', meaning: 'năm nay', han_viet: 'kim niên' },
    { hanzi: '多', parts: '夕 + 夕', pinyin: 'duō', pos: 'phó từ', meaning: 'chỉ mức độ (đi với 大 để hỏi tuổi)', han_viet: 'đa' },
    { hanzi: '大', pinyin: 'dà', pos: 'tính từ', meaning: 'lớn', han_viet: 'đại' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Số dưới 100', title: 'Các số dưới 100',
      intro: 'Từ 11 đến 99 ghép theo quy tắc hàng chục + hàng đơn vị: 十 + 九 = 十九 (19); 二 + 十 + 三 = 二十三 (23); 五 + 十 + 六 = 五十六 (56). Các số tròn chục: 十 shí, 二十 èrshí, 三十 sānshí, 四十 sìshí, 五十 wǔshí, 六十 liùshí, 七十 qīshí, 八十 bāshí, 九十 jiǔshí.',
      groups: [
        { label: 'Các số tròn chục', items: [['十', 'shí', '10'], ['二十', 'èrshí', '20'], ['三十', 'sānshí', '30'], ['四十', 'sìshí', '40'], ['五十', 'wǔshí', '50'], ['六十', 'liùshí', '60'], ['七十', 'qīshí', '70'], ['八十', 'bāshí', '80'], ['九十', 'jiǔshí', '90']] },
        { label: 'Ví dụ trong sách', items: [['十九', 'shíjiǔ', '19'], ['二十三', 'èrshísān', '23'], ['五十六', 'wǔshíliù', '56'], ['八十八', 'bāshíbā', '88'], ['九十九', 'jiǔshíjiǔ', '99']] },
      ],
    },
    {
      kind: 'examples', label: 'Từ gia đình', title: 'Từ vựng bổ sung: gia đình',
      clip: { label: '05-1 · Bài khóa (nghe lại)', src: A + 'l05-1.mp3' },
      intro: 'Sách trang 50 bổ sung các từ chỉ người thân, dùng trong hoạt động theo cặp “你家有几口人？”.',
      groups: [{ label: 'Từ bổ sung', items: [['爷爷', 'yéye', 'ông nội'], ['奶奶', 'nǎinai', 'bà nội'], ['爸爸', 'bàba', 'bố'], ['妈妈', 'māma', 'mẹ'], ['哥哥', 'gēge', 'anh trai'], ['姐姐', 'jiějie', 'chị gái'], ['弟弟', 'dìdi', 'em trai'], ['妹妹', 'mèimei', 'em gái']] }],
    },
    {
      kind: 'examples', label: 'Âm cuốn lưỡi 儿', title: 'Cách phát âm âm cuốn lưỡi (儿化)',
      clip: { label: '05-4 · Nghe và đọc theo (âm cuốn lưỡi)', src: A + 'l05-4.mp3' },
      intro: '儿 (ér) có thể kết hợp với âm tiết đứng trước thành một âm tiết có “âm cuốn lưỡi”. Khi viết chữ ta viết thêm 儿 (小孩儿), khi viết phiên âm ta thêm r vào sau phần phiên âm của chữ đứng trước (xiǎoháir).',
      groups: [{ label: 'Nghe và đọc theo (05-4)', items: [['小孩儿', 'xiǎoháir', 'trẻ con'], ['小鸟儿', 'xiǎo niǎor', 'con chim nhỏ'], ['饭馆儿', 'fànguǎnr', 'quán ăn'], ['香水儿', 'xiāngshuǐr', 'nước hoa']] }],
    },
    {
      kind: 'examples', label: 'i · u · ü', title: 'Phân biệt vận mẫu bắt đầu bằng i, u, ü',
      clip: { label: '05-5 · Có i và không có i (a–ia…)', src: A + 'l05-5.mp3' },
      intro: 'Nghe và luyện đọc từng cặp: khi có i, u hoặc ü đứng trước thì cách phát âm khác khi không có.',
      groups: [
        { label: 'Có i và không có i (05-5)', items: [['a – ia', 'a ↔ ia', ''], ['e – ie', 'e ↔ ie', ''], ['ao – iao', 'ao ↔ iao', ''], ['ou – iou (iu)', 'ou ↔ iou', ''], ['an – ian', 'an ↔ ian', ''], ['ang – iang', 'ang ↔ iang', ''], ['ong – iong', 'ong ↔ iong', '']] },
        { label: 'Có u và không có u (05-6)', items: [['a – ua', 'a ↔ ua', ''], ['ai – uai', 'ai ↔ uai', ''], ['ei – uei (ui)', 'ei ↔ uei', ''], ['an – uan', 'an ↔ uan', ''], ['en – uen (un)', 'en ↔ uen', ''], ['ang – uang', 'ang ↔ uang', ''], ['eng – ueng', 'eng ↔ ueng', '']] },
        { label: 'Có ü và không có ü (05-7)', items: [['e – üe', 'e ↔ üe', ''], ['an – üan', 'an ↔ üan', ''], ['en – ün', 'en ↔ ün', '']] },
      ],
    },
    {
      kind: 'examples', label: 'Bật hơi / không', title: 'Phân biệt thanh mẫu bật hơi và không bật hơi',
      clip: { label: '05-8 · Âm bật hơi và không bật hơi', src: A + 'l05-8.mp3' },
      intro: 'Các cặp: b–p, d–t, g–k, j–q, z–c, zh–ch. Trong mỗi cặp, âm đứng trước KHÔNG bật hơi, âm đứng sau BẬT HƠI. Mẹo: cầm tờ giấy trước miệng, đọc âm bật hơi thì giấy bay.',
      groups: [
        { label: 'Nghe và đọc theo từng cặp (05-8)', items: [['b – p', 'b ↔ p', 'không bật / bật'], ['d – t', 'd ↔ t', 'không bật / bật'], ['g – k', 'g ↔ k', 'không bật / bật'], ['j – q', 'j ↔ q', 'không bật / bật'], ['z – c', 'z ↔ c', 'không bật / bật'], ['zh – ch', 'zh ↔ ch', 'không bật / bật']] },
        { label: 'Nghe và đọc theo (05-9)', items: [['bàng – pàng', 'bàng — pàng', ''], ['dù – tù', 'dù — tù', ''], ['gǒu – kǒu', 'gǒu — kǒu', ''], ['jī – qī', 'jī — qī', ''], ['zì – cì', 'zì — cì', ''], ['zhuō – chē', 'zhuō — chē', '']] },
      ],
    },
    {
      kind: 'examples', label: 'Dấu cách âm', title: 'Quy tắc ghép âm (4): dấu cách âm (’)',
      clip: { label: '05-10 · Có và không có dấu cách âm', src: A + 'l05-10.mp3' },
      intro: 'Khi âm tiết bắt đầu bằng a, o hoặc e theo sau một âm tiết khác, ta dùng dấu cách âm (’) để tách các âm tiết, tránh lẫn lộn ranh giới. Ví dụ: pí’ǎo (áo khoác da).',
      groups: [{ label: 'So sánh có và không có dấu cách âm (05-10)', items: [
        ['piāo', 'piāo', 'nổi'], ['皮袄', "pí'ǎo", 'áo khoác da'],
        ['jiē', 'jiē', 'nhận'], ['饥饿', "jī'è", 'đói'],
        ['fānàn', 'fānàn', 'mở cuộc tiến công'], ['翻案', "fān'àn", 'lật lại bản án'],
        ['xiān', 'xiān', 'trước'], ['西安', "Xī'ān", 'thành phố Tây An'],
        ['jiāng', 'jiāng', 'sẽ'], ['激昂', "jī'áng", 'sôi sục, hào hùng'],
        ['fāngǎn', 'fāngǎn', 'phản cảm'], ['方案', "fāng'àn", 'phương án'],
      ] }],
    },
  ],

  notes: [
    {
      title: 'Đại từ nghi vấn 几',
      body: '几 dùng để hỏi số lượng, thường là con số dưới 10. Ví dụ: 你有几个汉语老师？ 李老师家有几口人？ 你女儿几岁了？ Câu có 几 không thêm 吗.',
      say: '你家有几口人',
    },
    {
      title: 'Các số dưới 100',
      body: 'Ghép hàng chục với hàng đơn vị: 十九 (19), 二十三 (23), 五十六 (56), 八十八 (88), 九十九 (99). Số tròn chục là số + 十: 二十, 三十, … 九十.',
      say: '八十八',
    },
    {
      title: 'Trợ từ 了 chỉ sự thay đổi',
      body: '了 đặt ở cuối câu để chỉ sự thay đổi hoặc sự xuất hiện của một tình huống mới. Ví dụ: 李老师今年50岁了。 我朋友的女儿今年四岁了。 你女儿几岁了？',
      say: '她今年四岁了',
    },
    {
      title: 'Câu hỏi tuổi với 多 + 大',
      body: '多 + 大 dùng để hỏi tuổi. Ví dụ: 你多大了？ 你女儿今年多大了？ 李老师多大了？ Theo phần Văn hóa của sách: hỏi trẻ dưới 10 tuổi dùng 你今年几岁了？; hỏi người trẻ hoặc ngang tuổi dùng 你今年多大了？; hỏi người lớn tuổi để thể hiện sự kính trọng dùng 您今年多大年纪了？',
      say: '你多大了',
    },
    {
      title: 'Âm cuốn lưỡi 儿化',
      body: '儿 kết hợp với âm tiết đứng trước thành một âm tiết có âm cuốn lưỡi. Khi viết chữ: 小孩儿. Khi viết phiên âm: thêm r vào cuối: xiǎoháir.',
      say: '小孩儿',
    },
    {
      title: 'Bật hơi và không bật hơi',
      body: 'b–p, d–t, g–k, j–q, z–c, zh–ch: âm đứng trước không bật hơi, âm đứng sau bật hơi. Hai âm này khác nhau ở luồng hơi thoát ra, không khác vị trí phát âm.',
      say: '爸爸',
    },
    {
      title: 'Dấu cách âm (’)',
      body: 'Âm tiết bắt đầu bằng a, o, e đi sau âm tiết khác thì dùng dấu ’ để tách: pí’ǎo (皮袄), nǚ’ér (女儿), Xī’ān (西安).',
      say: '女儿',
    },
  ],

  writeChars: ['水', '女', '了', '大', '四', '国', '小'],

  drills: [
    {
      title: 'Hai nét mới (笔画 5)',
      hint: 'Sách trang 48.',
      items: [
        { p: 'héngpiě · ngang phẩy', m: 'ví dụ: 水 shuǐ (nước), 又 yòu (lại)' },
        { p: 'piědiǎn · phẩy chấm', m: 'ví dụ: 女 nǚ (phụ nữ), 好 hǎo (tốt)' },
      ],
    },
    {
      title: 'Bốn chữ đơn mới (认识独体字)',
      hint: 'Sách trang 48–49: nguồn gốc hình chữ. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '水', p: 'shuǐ', m: 'nước (hình dòng nước chảy)' },
        { h: '女', p: 'nǚ', m: 'phụ nữ (hình người phụ nữ quỳ)' },
        { h: '了', p: 'le', m: 'gốc là đứa trẻ đã ra đời, nay là trợ từ' },
        { h: '大', p: 'dà', m: 'lớn (người dang hai tay hai chân)' },
      ],
    },
    {
      title: 'Thứ tự nét (3): ngoài trước trong sau, giữa trước hai bên sau',
      hint: 'Sách trang 49.',
      items: [
        { h: '四', p: 'sì', m: 'ngoài trước, trong sau' },
        { h: '国', p: 'guó', m: 'ngoài trước, trong sau (vào trước đóng sau)' },
        { h: '小', p: 'xiǎo', m: 'giữa trước, hai bên sau' },
        { h: '水', p: 'shuǐ', m: 'giữa trước, hai bên sau' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi (练习 2, sách trang 45)',
      items: [
        { q: '你家有几口人？ (Nǐ jiā yǒu jǐ kǒu rén?)', hint: '我家有……口人。 Ví dụ: 我家有四口人。' },
        { q: '你今年多大了？ (Nǐ jīnnián duō dà le?)', hint: '我今年……岁了。' },
        { q: '你的汉语老师今年多大了？ (Nǐ de Hànyǔ lǎoshī jīnnián duō dà le?)', hint: '她 / 他今年……岁了。' },
        { q: '你的中国朋友家有几口人？ (Nǐ de Zhōngguó péngyou jiā yǒu jǐ kǒu rén?)', hint: '他 / 她家有……口人。' },
        { q: '你的中国朋友今年多大了？ (Nǐ de Zhōngguó péngyou jīnnián duō dà le?)', hint: '他 / 她今年……岁了。' },
      ],
    },
    {
      title: 'Hoạt động theo cặp (运用 1, sách trang 50)',
      items: [
        { q: 'A: 你家有几口人？  B: 我家有……', hint: 'Dùng từ bổ sung: 爷爷, 奶奶, 爸爸, 妈妈, 哥哥, 姐姐, 弟弟, 妹妹.' },
        { q: 'A: 你 / 你爸爸 / 你妈妈……今年多大了？  B: 我 / 我爸爸 / 我妈妈……今年……', hint: 'Hỏi tuổi các thành viên trong gia đình.' },
        { q: 'Hoạt động nhóm: 我家有……人。这是我……，这是我……。……叫……，他 / 她是……，他 / 她今年……了。', hint: 'Mang ảnh gia đình, giới thiệu từng người theo mẫu này.' },
      ],
    },
  ],

  sentences: [
    { parts: ['你', '家', '有', '几', '口', '人'], pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', vi: 'Nhà anh có mấy người?' },
    { parts: ['我', '家', '有', '三', '口', '人'], pinyin: 'Wǒ jiā yǒu sān kǒu rén.', vi: 'Nhà tôi có ba người.' },
    { parts: ['你', '女儿', '几', '岁', '了'], pinyin: "Nǐ nǚ'ér jǐ suì le?", vi: 'Con gái của cô mấy tuổi rồi?' },
    { parts: ['她', '今年', '四', '岁', '了'], pinyin: 'Tā jīnnián sì suì le.', vi: 'Năm nay cháu được bốn tuổi rồi.' },
    { parts: ['李', '老师', '多', '大', '了'], pinyin: 'Lǐ lǎoshī duō dà le?', vi: 'Cô Lý bao nhiêu tuổi rồi?' },
    { parts: ['她', '今年', '五十', '岁', '了'], pinyin: 'Tā jīnnián wǔshí suì le.', vi: 'Năm nay cô ấy 50 tuổi rồi.' },
    { parts: ['她', '女儿', '今年', '二十', '岁'], pinyin: "Tā nǚ'ér jīnnián èrshí suì.", vi: 'Con gái cô ấy năm nay 20 tuổi.' },
  ],

  // ───────── Sách bài tập, bài 5 (đáp án: "Đáp án sách bài tập", trang 8–9) ─────────
  dictations: [
    {
      title: 'Sách bài tập · Nghe, gõ pinyin (ngữ âm, câu 1–8)',
      hint: 'Nghe đoạn ghi âm (05-2), gõ lại âm tiết bạn nghe được (có thể không cần dấu).',
      clip: { label: '05-2 · Sách bài tập, ngữ âm phần 1', src: A + 'w05-2.mp3' },
      items: [
        { prompt: 'Câu 1', answer: 'liáng', gloss: '粮' }, { prompt: 'Câu 2', answer: 'hóng', gloss: '红' }, { prompt: 'Câu 3', answer: 'dǒng', gloss: '懂' }, { prompt: 'Câu 4', answer: 'nán', gloss: '男' },
        { prompt: 'Câu 5', answer: 'sūn', gloss: '孙' }, { prompt: 'Câu 6', answer: 'huáng', gloss: '黄' }, { prompt: 'Câu 7', answer: 'shǎng', gloss: '赏' }, { prompt: 'Câu 8', answer: 'cōng', gloss: '葱' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, chọn từ không có âm cuốn lưỡi (ngữ âm, câu 9–16)',
      hint: 'Nghe tiếp (05-2). Câu 9: A nánháir · B dōngbian · C xiǎorénrshū. Câu 10: A xiǎo wǎnr · B pángbiānr · C jiàn miàn. Câu 11: A zháojí · B xiǎo jīr · C xiǎo māor. Câu 12: A wányìr · B zhǎo chár · C zhǎo qián. Câu 13: A yì quānr · B fàjì · C shǒujuànr. Câu 14: A yìdiǎnr · B wǔ diǎn · C yíhuìr. Câu 15: A lìxià · B yí xiàr · C dǎ dǔnr. Câu 16: A jiǎozi xiànr · B jiǎozi píer · C máopí. Gõ A, B hoặc C.',
      clip: { label: '05-2 · Sách bài tập, ngữ âm phần 2', src: A + 'w05-2.mp3' },
      items: [
        { prompt: 'Câu 9', answer: 'B', gloss: 'dōngbian 东边' }, { prompt: 'Câu 10', answer: 'C', gloss: 'jiàn miàn 见面' }, { prompt: 'Câu 11', answer: 'A', gloss: 'zháojí 着急' }, { prompt: 'Câu 12', answer: 'C', gloss: 'zhǎo qián 找钱' },
        { prompt: 'Câu 13', answer: 'B', gloss: 'fàjì 发髻' }, { prompt: 'Câu 14', answer: 'B', gloss: 'wǔ diǎn 五点' }, { prompt: 'Câu 15', answer: 'A', gloss: 'lìxià 立夏' }, { prompt: 'Câu 16', answer: 'C', gloss: 'máopí 毛皮' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 9–12)',
      hint: 'Nghe đoạn ghi âm (05-1, phần 3), chọn A, B hoặc C. Câu 9: A 张老师 · B 李老师 · C 李老师的女儿. Câu 10: A 40岁 · B 45岁 · C 50岁. Câu 11: A 我家 · B 我的中国朋友家 · C 我的美国朋友家. Câu 12: A 20岁 · B 21岁 · C 22岁.',
      clip: { label: '05-1 · Sách bài tập, nghe phần 3 (câu 9–12)', src: A + 'w05-1.mp3' },
      items: [
        { prompt: 'Câu 9', answer: 'C', gloss: '李老师的女儿' }, { prompt: 'Câu 10', answer: 'B', gloss: '45岁' },
        { prompt: 'Câu 11', answer: 'B', gloss: '我的中国朋友家' }, { prompt: 'Câu 12', answer: 'C', gloss: '22岁' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu hỏi với câu trả lời (câu 18–22)',
      hint: 'A 她今年七岁了。 B 不是，他是学生，他今年21岁。 C 他是中国人。 D 我今年38岁了。 E 我家有四口人。 F 好的，谢谢！ Gõ chữ cái A–F.',
      items: [
        { prompt: '你家有几口人？', answer: 'E', gloss: '我家有四口人。' }, { prompt: '李老师的女儿几岁了？', answer: 'A', gloss: '她今年七岁了。' },
        { prompt: '他是老师吗？', answer: 'B', gloss: '不是，他是学生，他今年21岁。' }, { prompt: '你今年多大了？', answer: 'D', gloss: '我今年38岁了。' },
        { prompt: '你的汉语老师是哪国人？', answer: 'C', gloss: '他是中国人。' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ vào chỗ trống (câu 23–30)',
      hint: 'A 大 · B 几 · C 岁 · D 名字 · E 口 · F 呢 · G 了 · H 吗 · I 哪. Gõ chữ cái A–I. (Câu 23–26 chọn từ A–E, câu 27–30 chọn từ F–I.)',
      items: [
        { prompt: '我的中国朋友家有三（ ）人。', answer: 'E', gloss: '口' }, { prompt: '你们老师今年多（ ）？', answer: 'A', gloss: '大' },
        { prompt: '我是美国人，我是学生，我19（ ）。', answer: 'C', gloss: '岁' }, { prompt: '你家有（ ）口人？', answer: 'B', gloss: '几' },
        { prompt: '他是（ ）国人？', answer: 'I', gloss: '哪' }, { prompt: '我今年29岁。你（ ）？', answer: 'F', gloss: '呢' },
        { prompt: '这是你女儿（ ）？', answer: 'H', gloss: '吗' }, { prompt: '他是我的好朋友，他今年30岁（ ）。', answer: 'G', gloss: '了' },
      ],
    },
  ],
}
