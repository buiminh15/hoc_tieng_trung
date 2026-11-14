import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 2, Bài 11: 他比我大三岁 (sách trang 81–88).
 * Sách bản Trung–Anh; phần tiếng Việt do app dịch.
 * Nghe: 11-1…11-5. Sách bài tập (trang 103–110, đáp án trang 21–22).
 */

const A = '/audio/hsk-std2/'

export const hskStd2Lesson11: Lesson = {
  id: 11,
  title: 'Anh ấy lớn hơn tôi ba tuổi',
  hanzi: '他比我大三岁',
  pinyin: 'Tā bǐ wǒ dà sān suì',
  vi: 'Anh ấy lớn hơn tôi ba tuổi',
  intro: 'So sánh người và vật: 他比我大三岁。 西瓜比昨天便宜。 Học cụm động từ làm định ngữ (……的 + danh từ), câu chữ 比 (1) và dạng phủ định A 没有 B, trợ động từ 可能; ngữ điệu câu hỏi chính phản; bộ 疒 và 冫.',

  dialogue: [
    { who: 'A', hanzi: '王方，昨天和你一起唱歌的人是谁？', pinyin: 'Wáng Fāng, zuótiān hé nǐ yìqǐ chàng gē de rén shì shéi?', vi: 'Vương Phương, người hôm qua đi hát cùng bạn là ai vậy?', scene: 'Hội thoại 1 · ở quán karaoke' },
    { who: 'B', hanzi: '一个朋友。', pinyin: 'Yí ge péngyou.', vi: 'Một người bạn.' },
    { who: 'A', hanzi: '什么朋友？是不是男朋友？', pinyin: 'Shénme péngyou? Shì bu shì nánpéngyou?', vi: 'Bạn gì? Có phải bạn trai không?' },
    { who: 'B', hanzi: '不是不是，我同学介绍的，昨天第一次见。', pinyin: 'Bú shì bú shì, wǒ tóngxué jièshào de, zuótiān dì-yī cì jiàn.', vi: 'Không phải đâu, bạn học giới thiệu, hôm qua mới gặp lần đầu.' },
    { who: 'A', hanzi: '左边这个看报纸的女孩子是你姐姐吗？', pinyin: 'Zuǒbian zhège kàn bàozhǐ de nǚ háizi shì nǐ jiějie ma?', vi: 'Cô gái đang đọc báo bên trái là chị bạn à?', scene: 'Hội thoại 2 · ở ký túc xá' },
    { who: 'B', hanzi: '是，右边写字的那个人是我哥哥。', pinyin: 'Shì, yòubian xiě zì de nàge rén shì wǒ gēge.', vi: 'Đúng, người đang viết bên phải là anh trai mình.' },
    { who: 'A', hanzi: '你哥哥多大？', pinyin: 'Nǐ gēge duō dà?', vi: 'Anh bạn bao nhiêu tuổi?' },
    { who: 'B', hanzi: '25岁，他比我大三岁。', pinyin: 'Èrshíwǔ suì, tā bǐ wǒ dà sān suì.', vi: '25 tuổi, anh ấy lớn hơn mình ba tuổi.' },
    { who: 'A', hanzi: '今天的西瓜怎么卖？', pinyin: 'Jīntiān de xīguā zěnme mài?', vi: 'Dưa hấu hôm nay bán thế nào?', scene: 'Hội thoại 3 · ở cửa hàng' },
    { who: 'B', hanzi: '三块五一斤。', pinyin: 'Sān kuài wǔ yì jīn.', vi: 'Ba tệ rưỡi một cân (nửa ký).' },
    { who: 'A', hanzi: '比昨天便宜。', pinyin: 'Bǐ zuótiān piányi.', vi: 'Rẻ hơn hôm qua.' },
    { who: 'B', hanzi: '是，苹果也比昨天便宜一些。您来点儿吧。', pinyin: 'Shì, píngguǒ yě bǐ zuótiān piányi yìxiē. Nín lái diǎnr ba.', vi: 'Vâng, táo cũng rẻ hơn hôm qua một chút. Chị mua ít đi.' },
    { who: 'A', hanzi: '前边说话的那个人就是我的汉语老师。你可能不认识她。', pinyin: 'Qiánbian shuō huà de nàge rén jiù shì wǒ de Hànyǔ lǎoshī. Nǐ kěnéng bú rènshi tā.', vi: 'Người đang nói chuyện phía trước chính là cô giáo tiếng Hán của mình. Có lẽ bạn không quen cô ấy.', scene: 'Hội thoại 4 · ở trường' },
    { who: 'B', hanzi: '是新来的汉语老师吗？', pinyin: 'Shì xīn lái de Hànyǔ lǎoshī ma?', vi: 'Là cô giáo tiếng Hán mới đến à?' },
    { who: 'A', hanzi: '是去年来的，她姓王，28岁。', pinyin: 'Shì qùnián lái de, tā xìng Wáng, èrshíbā suì.', vi: 'Cô ấy đến từ năm ngoái, họ Vương, 28 tuổi.' },
    { who: 'B', hanzi: '她比我们老师小两岁。', pinyin: 'Tā bǐ wǒmen lǎoshī xiǎo liǎng suì.', vi: 'Cô ấy nhỏ hơn cô giáo của bọn mình hai tuổi.' },
  ],
  dialogueClips: [
    { label: '11-1 · Hội thoại 1: 昨天和你一起唱歌的人是谁？', src: A + 'l11-1.mp3' },
    { label: '11-2 · Hội thoại 2: 他比我大三岁', src: A + 'l11-2.mp3' },
    { label: '11-3 · Hội thoại 3: 比昨天便宜', src: A + 'l11-3.mp3' },
    { label: '11-4 · Hội thoại 4: 你可能不认识她', src: A + 'l11-4.mp3' },
  ],
  dialogueTip: '<b>A 比 B + tính từ</b>: A hơn B (哥哥比姐姐高). Nói chênh lệch đặt sau tính từ: <b>大三岁, 便宜一些, 热得多</b>. Phủ định: <b>A 没有 B + tính từ</b>. Cụm động từ làm định ngữ phải có <b>的</b>: 看报纸的女孩子. <b>可能</b>: có lẽ.',
  slowSay: '他比我大三岁',

  vocab: [
    { hanzi: '唱歌', parts: '唱 (xướng) + 歌 (ca)', pinyin: 'chàng gē', pos: 'động từ', meaning: 'hát', han_viet: 'xướng ca' },
    { hanzi: '男', parts: '田 + 力', pinyin: 'nán', pos: 'tính từ', meaning: 'nam', han_viet: 'nam' },
    { hanzi: '女', pinyin: 'nǚ', pos: 'tính từ', meaning: 'nữ', han_viet: 'nữ' },
    { hanzi: '孩子', parts: '孩 (hài) + 子 (tử)', pinyin: 'háizi', pos: 'danh từ', meaning: 'đứa trẻ, con', han_viet: 'hài tử' },
    { hanzi: '右边', parts: '右 (hữu) + 边 (biên)', pinyin: 'yòubian', pos: 'danh từ', meaning: 'bên phải', han_viet: 'hữu biên' },
    { hanzi: '比', pinyin: 'bǐ', pos: 'giới từ', meaning: 'so với, hơn', han_viet: 'tỷ' },
    { hanzi: '便宜', parts: '便 (tiện) + 宜 (nghi)', pinyin: 'piányi', pos: 'tính từ', meaning: 'rẻ', han_viet: 'tiện nghi' },
    { hanzi: '说话', parts: '说 (thuyết) + 话 (thoại)', pinyin: 'shuō huà', pos: 'động từ', meaning: 'nói chuyện', han_viet: 'thuyết thoại' },
    { hanzi: '可能', parts: '可 (khả) + 能 (năng)', pinyin: 'kěnéng', pos: 'trợ động từ', meaning: 'có lẽ, có thể', han_viet: 'khả năng' },
    { hanzi: '去年', pinyin: 'qùnián', pos: 'danh từ', meaning: 'năm ngoái', han_viet: 'khứ niên' },
    { hanzi: '姓', parts: '女 + 生', pinyin: 'xìng', pos: 'động từ', meaning: 'họ (là)', han_viet: 'tính' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Câu chữ 比', title: 'Câu chữ 比 (1)',
      intro: 'Câu dùng 比 để so sánh gọi là câu chữ 比; vị ngữ có thể là tính từ. Muốn nói rõ chênh lệch: dùng con số cụ thể, dùng 一点儿 / 一些 khi chênh ít, dùng 多 / 得多 khi chênh nhiều. Phủ định dùng "A 没有 B ……".',
      groups: [
        { label: 'A 比 B + tính từ', items: [['哥哥比姐姐高。', 'Gēge bǐ jiějie gāo.', 'Anh cao hơn chị.'], ['今天比昨天热。', 'Jīntiān bǐ zuótiān rè.', 'Hôm nay nóng hơn hôm qua.'], ['今天的西瓜比昨天便宜。', 'Jīntiān de xīguā bǐ zuótiān piányi.', 'Dưa hấu hôm nay rẻ hơn hôm qua.']] },
        { label: 'Nói mức chênh lệch', items: [['西瓜比苹果贵两块钱。', 'Xīguā bǐ píngguǒ guì liǎng kuài qián.', 'Dưa đắt hơn táo hai tệ.'], ['我的学习比他好一点儿。', 'Wǒ de xuéxí bǐ tā hǎo yìdiǎnr.', 'Tôi học tốt hơn anh ấy một chút.'], ['今天比昨天热得多。', 'Jīntiān bǐ zuótiān rè de duō.', 'Hôm nay nóng hơn hôm qua nhiều.'], ['她比我们老师小两岁。', 'Tā bǐ wǒmen lǎoshī xiǎo liǎng suì.', 'Cô ấy nhỏ hơn cô giáo bọn mình hai tuổi.']] },
        { label: 'Phủ định: A 没有 B + tính từ', items: [['哥哥没有姐姐高。', 'Gēge méiyǒu jiějie gāo.', 'Anh không cao bằng chị.'], ['今天没有昨天热。', 'Jīntiān méiyǒu zuótiān rè.', 'Hôm nay không nóng bằng hôm qua.'], ['西瓜没有苹果便宜。', 'Xīguā méiyǒu píngguǒ piányi.', 'Dưa không rẻ bằng táo.']] },
      ],
    },
    {
      kind: 'examples', label: 'Ngữ điệu', title: 'Ngữ điệu câu hỏi chính phản (正反问句)',
      clip: { label: '11-5 · Nghe và đọc theo (ngữ điệu)', src: A + 'l11-5.mp3' },
      intro: 'Phần khẳng định được nhấn, phần phủ định đọc nhẹ; cụm khẳng định–phủ định đọc nhanh, sau trọng âm thì giọng hạ dần.',
      groups: [{ label: 'Nhấn phần khẳng định ↘', items: [['明天你去不去银行？', 'Míngtiān nǐ qù bu qù yínháng? ↘', 'nhấn 去'], ['这件衣服你喜欢不喜欢？', 'Zhè jiàn yīfu nǐ xǐhuan bu xǐhuan? ↘', 'nhấn 喜欢'], ['十一点多了，你睡不睡觉？', 'Shíyī diǎn duō le, nǐ shuì bu shuì jiào? ↘', 'nhấn 睡']] }],
    },
    {
      kind: 'examples', label: 'Bộ thủ', title: 'Chữ Hán: bộ 疒 và 冫',
      intro: 'Bộ 疒 (nạch) thường liên quan đến bệnh tật; bộ 冫 (hai chấm thủy) thường liên quan đến băng, giá lạnh.',
      groups: [{ label: 'Bộ 疒 và 冫', items: [['病', 'bìng', 'bệnh (bộ 疒)'], ['疯', 'fēng', 'điên (bộ 疒)'], ['冷', 'lěng', 'lạnh (bộ 冫)'], ['冰', 'bīng', 'băng (bộ 冫)']] }],
    },
  ],

  notes: [
    {
      title: 'Cụm động từ làm định ngữ',
      body: 'Khi động từ hoặc cụm động từ làm định ngữ thì giữa định ngữ và trung tâm ngữ phải có 的. Ví dụ: 新买的自行车, 我妈妈做的饭, 和你一起唱歌的人, 看报纸的女孩子.',
      say: '和你一起唱歌的人',
    },
    {
      title: 'Câu chữ 比 (1)',
      body: 'A 比 B + tính từ: 哥哥比姐姐高。 Mức chênh đặt sau tính từ: 西瓜比苹果贵两块钱 (con số), 好一点儿 / 便宜一些 (chênh ít), 热得多 (chênh nhiều). Phủ định: A 没有 B + tính từ: 今天没有昨天热。 Lưu ý: trước tính từ trong câu 比 không dùng 很.',
      say: '他比我大三岁',
    },
    {
      title: 'Trợ động từ 可能',
      body: '可能 biểu thị ước đoán: có lẽ, có thể. Có thể đặt trước động từ hoặc trước chủ ngữ. Ví dụ: 他可能早就知道这件事情了。 可能我明天不来上课了。 你可能不认识她。',
      say: '你可能不认识她',
    },
    {
      title: 'Ngữ điệu câu hỏi chính phản',
      body: 'Câu hỏi dạng 去不去, 喜欢不喜欢: nhấn phần khẳng định, phần phủ định đọc nhẹ và nhanh, sau đó giọng hạ dần.',
      say: '明天你去不去银行',
    },
  ],

  writeChars: ['比', '唱', '歌', '便', '宜', '姓'],

  drills: [
    {
      title: 'Nói câu khẳng định rồi đổi sang phủ định (运用 1, sách trang 87)',
      hint: 'Mẫu: 西瓜比苹果大。 → 苹果没有西瓜大。 Bấm để nghe.',
      items: [
        { h: '西瓜比苹果大。', p: 'Xīguā bǐ píngguǒ dà.', m: 'Dưa to hơn táo.' },
        { h: '苹果没有西瓜大。', p: 'Píngguǒ méiyǒu xīguā dà.', m: 'Táo không to bằng dưa.' },
        { h: '绿苹果比红苹果便宜。', p: 'Lǜ píngguǒ bǐ hóng píngguǒ piányi.', m: 'Táo xanh rẻ hơn táo đỏ.' },
        { h: '昨天35度，今天没有昨天热。', p: 'Zuótiān sānshíwǔ dù, jīntiān méiyǒu zuótiān rè.', m: 'Hôm qua 35 độ, hôm nay không nóng bằng hôm qua.' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 85)',
      items: [
        { q: '昨天和王方一起唱歌的人是谁？', hint: '是一个朋友，她同学介绍的。' },
        { q: '左边看报纸的女孩子是谁？', hint: '是她姐姐。' },
        { q: '她的哥哥25岁了，她多大了？', hint: '她22岁，哥哥比她大三岁。' },
        { q: '昨天的西瓜可能卖多少钱？', hint: '比三块五一斤贵，因为今天比昨天便宜。' },
        { q: '王老师是新老师吗？', hint: '不是，她是去年来的。' },
      ],
    },
  ],

  sentences: [
    { parts: ['昨天', '和', '你', '一起', '唱歌', '的', '人', '是', '谁'], pinyin: 'Zuótiān hé nǐ yìqǐ chàng gē de rén shì shéi?', vi: 'Người hôm qua đi hát cùng bạn là ai?' },
    { parts: ['左边', '看', '报纸', '的', '女孩子', '是', '你', '姐姐', '吗'], pinyin: 'Zuǒbian kàn bàozhǐ de nǚ háizi shì nǐ jiějie ma?', vi: 'Cô gái đọc báo bên trái là chị bạn à?' },
    { parts: ['他', '比', '我', '大', '三', '岁'], pinyin: 'Tā bǐ wǒ dà sān suì.', vi: 'Anh ấy lớn hơn tôi ba tuổi.' },
    { parts: ['今天', '的', '西瓜', '比', '昨天', '便宜'], pinyin: 'Jīntiān de xīguā bǐ zuótiān piányi.', vi: 'Dưa hôm nay rẻ hơn hôm qua.' },
    { parts: ['你', '可能', '不', '认识', '她'], pinyin: 'Nǐ kěnéng bú rènshi tā.', vi: 'Có lẽ bạn không quen cô ấy.' },
    { parts: ['今天', '没有', '昨天', '热'], pinyin: 'Jīntiān méiyǒu zuótiān rè.', vi: 'Hôm nay không nóng bằng hôm qua.' },
  ],

  dictations: [
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 11–15)',
      hint: 'Nghe đoạn ghi âm (11-1, phần 3), chọn A, B hoặc C. Câu 11: A 她的同学 · B 她的男朋友 · C 她的一个朋友. Câu 12: A 25岁 · B 22岁 · C 28岁. Câu 13: A 西瓜太贵 · B 苹果很多 · C 苹果好吃. Câu 14: A 女的和男的一样大 · B 女的比男的大 · C 男的比女的大. Câu 15: A 病了 · B 没睡觉 · C 没休息好.',
      clip: { label: '11-1 · Sách bài tập, phần nghe', src: A + 'w11-1.mp3' },
      items: [
        { prompt: 'Câu 11', answer: 'C', gloss: '她的一个朋友' }, { prompt: 'Câu 12', answer: 'B', gloss: '22岁' },
        { prompt: 'Câu 13', answer: 'A', gloss: '西瓜太贵' }, { prompt: 'Câu 14', answer: 'B', gloss: '女的比男的大' },
        { prompt: 'Câu 15', answer: 'C', gloss: '没休息好' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ (câu 21–25)',
      hint: 'A 唱歌 · B 便宜 · C 说话 · D 可能 · E 贵 · F 比. Gõ chữ cái A–F.',
      items: [
        { prompt: '昨天25度，今天（ ）昨天热一点儿。', answer: 'F', gloss: '比' }, { prompt: '每个周末，我都喜欢和朋友们一起去（ ）。', answer: 'A', gloss: '唱歌' },
        { prompt: '你认识前边（ ）的那两个人吗？', answer: 'C', gloss: '说话' }, { prompt: '天气不太好，我觉得（ ）要下雨了。', answer: 'D', gloss: '可能' },
        { prompt: '苹果比西瓜（ ），我想多买点儿苹果。', answer: 'B', gloss: '便宜' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, đúng hay sai (câu 26–30)',
      hint: 'Đọc câu cho sẵn rồi xét câu có dấu * đúng (gõ D) hay sai (gõ S).',
      items: [
        { prompt: '左边看报纸的这个人是我姐姐，右边写字的那个人是我哥哥。* 他们家可能有三个孩子。', answer: 'D', gloss: 'Đúng' },
        { prompt: '女儿给我打电话，她今天晚上和朋友们一起去唱歌，不回来吃晚饭了。* 女儿今天在家吃晚饭。', answer: 'S', gloss: 'Sai' },
        { prompt: '这是儿子送给我的手表，因为明天是我的生日。* 她送给儿子一块手表。', answer: 'S', gloss: 'Sai' },
        { prompt: '你问的这个问题很好，我要想一想，明天再告诉你，可以吗？* 他现在没有回答这个问题。', answer: 'D', gloss: 'Đúng' },
        { prompt: '哥哥的汉语比我好，姐姐的汉语也比我好。* 我的汉语没有哥哥和姐姐那么好。', answer: 'D', gloss: 'Đúng' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu (câu 31–35)',
      hint: 'A 这两天怎么没看见王老师？ B 我哥哥比我姐姐大三岁。 C 家里还有呢，来点儿水果吧。 D 这是我爸爸送给我的，昨天是我的生日。 E 他在哪儿呢？你看见他了吗？ F 我觉得公共汽车没有自行车快，因为路上车太多了。 Gõ chữ cái A–F.',
      items: [
        { prompt: '今天的鸡蛋比昨天的便宜一些，您来点儿吧。', answer: 'C', gloss: '家里还有呢，来点儿水果吧。' }, { prompt: '你哥哥大还是你姐姐大？', answer: 'B', gloss: '我哥哥比我姐姐大三岁。' },
        { prompt: '这是你的自行车吗？真漂亮。', answer: 'D', gloss: '这是我爸爸送给我的……' }, { prompt: '你每天坐公共汽车去学校吗？', answer: 'F', gloss: '我觉得公共汽车没有自行车快……' },
        { prompt: '她可能去旅游了。', answer: 'A', gloss: '这两天怎么没看见王老师？' },
      ],
    },
  ],
}
