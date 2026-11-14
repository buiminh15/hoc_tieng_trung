import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 2, Bài 7: 你家离公司远吗 (sách trang 49–56).
 * Sách bản Trung–Anh; phần tiếng Việt do app dịch.
 * Nghe: 07-1…07-5. Sách bài tập (trang 67–74, đáp án trang 13–15).
 */

const A = '/audio/hsk-std2/'

export const hskStd2Lesson7: Lesson = {
  id: 7,
  title: 'Nhà bạn có xa công ty không',
  hanzi: '你家离公司远吗',
  pinyin: 'Nǐ jiā lí gōngsī yuǎn ma',
  vi: 'Nhà bạn có xa công ty không',
  intro: 'Nói về khoảng cách và thời gian đi lại: 你家离公司远吗？ 坐公共汽车要一个多小时呢！ Học 还 (2) chỉ sự tiếp diễn, phó từ thời gian 就, động từ 离, trợ từ ngữ khí 呢; ngữ điệu cơ bản của câu (lên giọng, xuống giọng); bộ 彳 và 攵.',

  dialogue: [
    { who: 'A', hanzi: '大卫回来了吗？', pinyin: 'Dàwèi huílai le ma?', vi: 'David về chưa?', scene: 'Hội thoại 1 · ở nhà' },
    { who: 'B', hanzi: '没有，他还在教室学习呢。', pinyin: 'Méiyǒu, tā hái zài jiàoshì xuéxí ne.', vi: 'Chưa, cậu ấy vẫn đang học trong lớp.' },
    { who: 'A', hanzi: '已经9点多了，他怎么还在学习？', pinyin: 'Yǐjīng jiǔ diǎn duō le, tā zěnme hái zài xuéxí?', vi: 'Đã hơn 9 giờ rồi, sao cậu ấy vẫn còn học?' },
    { who: 'B', hanzi: '明天有考试，他说今天要好好准备。', pinyin: 'Míngtiān yǒu kǎoshì, tā shuō jīntiān yào hǎohǎo zhǔnbèi.', vi: 'Mai có bài thi, cậu ấy nói hôm nay phải chuẩn bị kỹ.' },
    { who: 'A', hanzi: '你现在在哪儿呢？', pinyin: 'Nǐ xiànzài zài nǎr ne?', vi: 'Bây giờ bạn đang ở đâu?', scene: 'Hội thoại 2 · trên đường ra sân bay' },
    { who: 'B', hanzi: '在去机场的路上。你已经到了吗？', pinyin: 'Zài qù jīchǎng de lùshang. Nǐ yǐjīng dào le ma?', vi: 'Đang trên đường ra sân bay. Bạn đến rồi à?' },
    { who: 'A', hanzi: '我下飞机了。你还有多长时间能到这儿？', pinyin: 'Wǒ xià fēijī le. Nǐ hái yǒu duō cháng shíjiān néng dào zhèr?', vi: 'Mình xuống máy bay rồi. Còn bao lâu nữa bạn đến được đây?' },
    { who: 'B', hanzi: '二十分钟就到。', pinyin: 'Èrshí fēnzhōng jiù dào.', vi: 'Hai mươi phút nữa là tới.' },
    { who: 'A', hanzi: '你家离公司远吗？', pinyin: 'Nǐ jiā lí gōngsī yuǎn ma?', vi: 'Nhà bạn có xa công ty không?', scene: 'Hội thoại 3 · ở phòng tập' },
    { who: 'B', hanzi: '很远，坐公共汽车要一个多小时呢！', pinyin: 'Hěn yuǎn, zuò gōnggòng qìchē yào yí ge duō xiǎoshí ne!', vi: 'Xa lắm, đi xe buýt mất hơn một tiếng đấy!' },
    { who: 'A', hanzi: '坐公共汽车太慢了，你怎么不开车？', pinyin: 'Zuò gōnggòng qìchē tài màn le, nǐ zěnme bù kāi chē?', vi: 'Đi xe buýt chậm quá, sao bạn không lái xe?' },
    { who: 'B', hanzi: '开车也不快，路上车太多了！', pinyin: 'Kāi chē yě bú kuài, lùshang chē tài duō le!', vi: 'Lái xe cũng không nhanh, đường đông xe quá!' },
    { who: 'A', hanzi: '今天晚上我们一起吃饭吧，给你过生日。', pinyin: 'Jīntiān wǎnshang wǒmen yìqǐ chī fàn ba, gěi nǐ guò shēngrì.', vi: 'Tối nay mình cùng ăn cơm nhé, tổ chức sinh nhật cho bạn.', scene: 'Hội thoại 4 · trên đường' },
    { who: 'B', hanzi: '今天？离我的生日还有一个多星期呢！', pinyin: 'Jīntiān? Lí wǒ de shēngrì hái yǒu yí ge duō xīngqī ne!', vi: 'Hôm nay ư? Còn hơn một tuần nữa mới đến sinh nhật mình mà!' },
    { who: 'A', hanzi: '下个星期我要去北京，今天过吧。', pinyin: 'Xià ge xīngqī wǒ yào qù Běijīng, jīntiān guò ba.', vi: 'Tuần sau mình đi Bắc Kinh, tổ chức hôm nay đi.' },
    { who: 'B', hanzi: '好吧，离这儿不远有一个中国饭馆，走几分钟就到了。', pinyin: 'Hǎo ba, lí zhèr bù yuǎn yǒu yí ge Zhōngguó fànguǎn, zǒu jǐ fēnzhōng jiù dào le.', vi: 'Được, gần đây có một quán ăn Trung Quốc, đi bộ vài phút là tới.' },
  ],
  dialogueClips: [
    { label: '07-1 · Hội thoại 1: 他还在教室学习呢', src: A + 'l07-1.mp3' },
    { label: '07-2 · Hội thoại 2: 二十分钟就到', src: A + 'l07-2.mp3' },
    { label: '07-3 · Hội thoại 3: 你家离公司远吗？', src: A + 'l07-3.mp3' },
    { label: '07-4 · Hội thoại 4: 离我的生日还有一个多星期呢', src: A + 'l07-4.mp3' },
  ],
  dialogueTip: '<b>A 离 B + 远 / 近</b>: A cách B xa / gần; cũng dùng cho thời gian: 离我的生日还有一个多星期. <b>还</b> (2): vẫn còn (还在学习), phủ định <b>还没</b>. <b>就 …… 了</b>: sớm, nhanh (二十分钟就到). <b>呢</b> cuối câu: khẳng định, có ý phóng đại.',
  slowSay: '你家离公司远吗',

  vocab: [
    { hanzi: '教室', parts: '教 (giáo) + 室 (thất)', pinyin: 'jiàoshì', pos: 'danh từ', meaning: 'lớp học, phòng học', han_viet: 'giáo thất' },
    { hanzi: '机场', parts: '机 (cơ) + 场 (trường)', pinyin: 'jīchǎng', pos: 'danh từ', meaning: 'sân bay', han_viet: 'cơ trường' },
    { hanzi: '路', parts: '足 + 各', pinyin: 'lù', pos: 'danh từ', meaning: 'đường', han_viet: 'lộ' },
    { hanzi: '离', pinyin: 'lí', pos: 'động từ', meaning: 'cách (xa)', han_viet: 'ly' },
    { hanzi: '公司', parts: '公 (công) + 司 (ty)', pinyin: 'gōngsī', pos: 'danh từ', meaning: 'công ty', han_viet: 'công ty' },
    { hanzi: '远', parts: '辶 + 元', pinyin: 'yuǎn', pos: 'tính từ', meaning: 'xa', han_viet: 'viễn' },
    { hanzi: '公共汽车', pinyin: 'gōnggòng qìchē', pos: 'danh từ', meaning: 'xe buýt', han_viet: 'công cộng khí xa' },
    { hanzi: '小时', pinyin: 'xiǎoshí', pos: 'danh từ', meaning: 'giờ, tiếng đồng hồ', han_viet: 'tiểu thời' },
    { hanzi: '慢', parts: '忄 + 曼', pinyin: 'màn', pos: 'tính từ', meaning: 'chậm', han_viet: 'mạn' },
    { hanzi: '快', parts: '忄 + 夬', pinyin: 'kuài', pos: 'tính từ', meaning: 'nhanh', han_viet: 'khoái' },
    { hanzi: '过', parts: '辶 + 寸', pinyin: 'guò', pos: 'động từ', meaning: 'trải qua, mừng (sinh nhật). Từ ngoài đại cương HSK 2 (dấu * trong sách)', han_viet: 'quá' },
    { hanzi: '走', pinyin: 'zǒu', pos: 'động từ', meaning: 'đi bộ', han_viet: 'tẩu' },
    { hanzi: '到', parts: '至 + 刂', pinyin: 'dào', pos: 'động từ', meaning: 'đến, tới', han_viet: 'đáo' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Ngữ điệu câu', title: 'Ngữ điệu cơ bản của câu tiếng Hán',
      clip: { label: '07-5 · Nghe và đọc theo (ngữ điệu)', src: A + 'l07-5.mp3' },
      intro: 'Câu tiếng Hán có hai ngữ điệu cơ bản: lên giọng và xuống giọng. Nói chung, câu hỏi đọc lên giọng, câu trần thuật đọc xuống giọng.',
      groups: [{ label: 'So sánh ↗ và ↘', items: [['他姓张？', 'Tā xìng Zhāng? ↗', 'Anh ấy họ Trương à?'], ['他姓张。', 'Tā xìng Zhāng. ↘', 'Anh ấy họ Trương.'], ['他不喜欢喝啤酒？', 'Tā bù xǐhuan hē píjiǔ? ↗', 'Anh ấy không thích uống bia à?'], ['他不喜欢喝啤酒。', 'Tā bù xǐhuan hē píjiǔ. ↘', 'Anh ấy không thích uống bia.']] }],
    },
    {
      kind: 'examples', label: 'Bộ thủ', title: 'Chữ Hán: bộ 彳 và 攵',
      intro: 'Bộ 彳 (song nhân) phần lớn liên quan đến việc đi lại; bộ 攵 (phản văn) phần lớn liên quan đến hành động đánh, gõ.',
      groups: [{ label: 'Bộ 彳 và 攵', items: [['行', 'xíng', 'đi (bộ 彳)'], ['往', 'wǎng', 'hướng về (bộ 彳)'], ['放', 'fàng', 'thả, để (bộ 攵)'], ['收', 'shōu', 'nhận (bộ 攵)']] }],
    },
    {
      kind: 'examples', label: 'Đi lại', title: 'Từ bổ sung: nơi chốn và phương tiện (运用 1, sách trang 55)',
      intro: 'Mẫu: 机场离我家非常远，我坐出租车去机场。',
      groups: [
        { label: 'Nơi chốn', items: [['学校', 'xuéxiào', 'trường'], ['饭馆', 'fànguǎn', 'quán ăn'], ['商店', 'shāngdiàn', 'cửa hàng'], ['医院', 'yīyuàn', 'bệnh viện'], ['公司', 'gōngsī', 'công ty'], ['机场', 'jīchǎng', 'sân bay']] },
        { label: 'Phương tiện', items: [['飞机', 'fēijī', 'máy bay'], ['自行车', 'zìxíngchē', 'xe đạp'], ['出租车', 'chūzūchē', 'taxi'], ['公共汽车', 'gōnggòng qìchē', 'xe buýt'], ['走路', 'zǒu lù', 'đi bộ']] },
      ],
    },
  ],

  notes: [
    {
      title: 'Phó từ ngữ khí 还 (2)',
      body: '还 chỉ hành động hoặc trạng thái vẫn đang tiếp diễn; phủ định dùng 还没. Ví dụ: 八点了，他还在睡觉。 你怎么还没吃饭？ 他还在教室学习呢。',
      say: '他还在教室学习呢',
    },
    {
      title: 'Phó từ thời gian 就',
      body: '就 nhấn mạnh người nói cho rằng việc xảy ra sớm, nhanh hoặc thuận lợi; thường đi với 了. Ví dụ: 同学们七点半就来教室了。 我坐飞机一个半小时就到北京了。 （我）二十分钟就到。',
      say: '二十分钟就到',
    },
    {
      title: 'Động từ 离',
      body: '离 chỉ khoảng cách về nơi chốn, thời gian hoặc mục đích: A 离 B …… Ví dụ: 我家离学校很远。 学校离机场有20多公里。 离我的生日还有一个多星期呢！',
      say: '我家离学校很远',
    },
    {
      title: 'Trợ từ ngữ khí 呢',
      body: '呢 đặt cuối câu trần thuật (sau vị ngữ tính từ hoặc động từ) để khẳng định sự thật, thuyết phục người nghe, có chút phóng đại. Ví dụ: 八点上课，时间还早呢。 医院离我们这儿还远呢。 坐公共汽车要一个多小时呢！',
      say: '坐公共汽车要一个多小时呢',
    },
    {
      title: 'Ngữ điệu cơ bản',
      body: 'Câu hỏi thường lên giọng ở cuối (他姓张？↗), câu trần thuật xuống giọng (他姓张。↘). Cùng một chuỗi chữ, ngữ điệu khác thì nghĩa khác.',
      say: '他姓张',
    },
  ],

  writeChars: ['离', '远', '路', '慢', '快', '走'],

  drills: [
    {
      title: 'Nói về khoảng cách (运用 1, sách trang 55)',
      hint: 'Bấm để nghe, rồi tự nói về những nơi bạn hay đến.',
      items: [
        { h: '机场离我家非常远，我坐出租车去机场。', p: 'Jīchǎng lí wǒ jiā fēicháng yuǎn, wǒ zuò chūzūchē qù jīchǎng.', m: 'Sân bay cách nhà tôi rất xa, tôi đi taxi ra sân bay.' },
        { h: '学校离我家不远，我走路去学校。', p: 'Xuéxiào lí wǒ jiā bù yuǎn, wǒ zǒu lù qù xuéxiào.', m: 'Trường cách nhà tôi không xa, tôi đi bộ đến trường.' },
        { h: '你的生日是几月几号？', p: 'Nǐ de shēngrì shì jǐ yuè jǐ hào?', m: 'Sinh nhật bạn ngày mấy tháng mấy?' },
        { h: '生日的时候，我常和朋友去吃饭。', p: 'Shēngrì de shíhou, wǒ cháng hé péngyou qù chī fàn.', m: 'Vào sinh nhật, tôi thường đi ăn với bạn bè.' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 53)',
      items: [
        { q: '大卫在哪儿学习呢？', hint: '他在教室学习呢。' },
        { q: '九点多了，大卫为什么还不休息？', hint: '因为明天有考试，他要好好准备。' },
        { q: '坐公共汽车一个小时能到公司吗？', hint: '不能，要一个多小时。' },
        { q: '公司离家很远，她为什么不开车？', hint: '因为开车也不快，路上车太多了。' },
        { q: '今天不是她的生日，为什么她朋友要今天给她过生日？', hint: '因为她朋友下个星期要去北京。' },
      ],
    },
  ],

  sentences: [
    { parts: ['他', '还', '在', '教室', '学习', '呢'], pinyin: 'Tā hái zài jiàoshì xuéxí ne.', vi: 'Cậu ấy vẫn đang học trong lớp.' },
    { parts: ['二十', '分钟', '就', '到'], pinyin: 'Èrshí fēnzhōng jiù dào.', vi: 'Hai mươi phút nữa là tới.' },
    { parts: ['你', '家', '离', '公司', '远', '吗'], pinyin: 'Nǐ jiā lí gōngsī yuǎn ma?', vi: 'Nhà bạn có xa công ty không?' },
    { parts: ['坐', '公共汽车', '要', '一', '个', '多', '小时', '呢'], pinyin: 'Zuò gōnggòng qìchē yào yí ge duō xiǎoshí ne!', vi: 'Đi xe buýt mất hơn một tiếng đấy!' },
    { parts: ['开车', '也', '不', '快', '，', '路上', '车', '太', '多', '了'], pinyin: 'Kāi chē yě bú kuài, lùshang chē tài duō le!', vi: 'Lái xe cũng không nhanh, đường đông xe quá!' },
    { parts: ['离', '我', '的', '生日', '还', '有', '一', '个', '多', '星期', '呢'], pinyin: 'Lí wǒ de shēngrì hái yǒu yí ge duō xīngqī ne!', vi: 'Còn hơn một tuần nữa mới đến sinh nhật mình!' },
  ],

  dictations: [
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 11–15)',
      hint: 'Nghe đoạn ghi âm (07-1, phần 3), chọn A, B hoặc C. Câu 11: A 睡觉 · B 考试 · C 学习. Câu 12: A 路上 · B 机场 · C 飞机上. Câu 13: A 坐公共汽车 · B 自行车 · C 出租车. Câu 14: A 二月一号 · B 二月七号 · C 二月十四号. Câu 15: A 不远 · B 很远 · C 不太远.',
      clip: { label: '07-1 · Sách bài tập, phần nghe', src: A + 'w07-1.mp3' },
      items: [
        { prompt: 'Câu 11', answer: 'C', gloss: '学习' }, { prompt: 'Câu 12', answer: 'B', gloss: '机场' },
        { prompt: 'Câu 13', answer: 'A', gloss: '坐公共汽车' }, { prompt: 'Câu 14', answer: 'C', gloss: '二月十四号' },
        { prompt: 'Câu 15', answer: 'A', gloss: '不远' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ (câu 21–25)',
      hint: 'A 离 · B 教室 · C 就 · D 过 · E 贵 · F 公司. Gõ chữ cái A–F.',
      items: [
        { prompt: '我家（ ）学校不太远。', answer: 'A', gloss: '离' }, { prompt: '北京到上海坐飞机一个多小时（ ）到了。', answer: 'C', gloss: '就' },
        { prompt: '晚上十点多了，爸爸还在（ ）工作呢。', answer: 'F', gloss: '公司' }, { prompt: '明天有考试，大卫还在（ ）学习呢。', answer: 'B', gloss: '教室' },
        { prompt: '今天是你的生日，你想怎么（ ）？', answer: 'D', gloss: '过' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, đúng hay sai (câu 26–30)',
      hint: 'Đọc câu cho sẵn rồi xét câu có dấu * đúng (gõ D) hay sai (gõ S).',
      items: [
        { prompt: '大卫明天有考试，所以还在教室学习呢。* 大卫不在家。', answer: 'D', gloss: 'Đúng' },
        { prompt: '我在去机场的路上呢，还有十分钟就到了。* 我到机场十分钟了。', answer: 'S', gloss: 'Sai' },
        { prompt: '离我家不远有一个饭馆，走几分钟就到了。* 饭馆离我家不远。', answer: 'D', gloss: 'Đúng' },
        { prompt: '坐公共汽车太慢了，我们还是坐出租车吧。* 坐出租车也很慢。', answer: 'S', gloss: 'Sai' },
        { prompt: '从学校到机场，坐出租车要一个小时，我们八点走，可以吗？* 他们要坐八点的飞机。', answer: 'S', gloss: 'Sai' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu (câu 31–35)',
      hint: 'A 还没有呢。 B 坐公共汽车太慢了。 C 不远，我每天走路去学校。 D 我们家前面有一个小饭馆，走几分钟就到了，去那儿吃吧。 E 他在哪儿呢？你看见他了吗？ F 我在去机场的路上。 Gõ chữ cái A–F.',
      items: [
        { prompt: '大卫回来了吗？', answer: 'A', gloss: '还没有呢。' }, { prompt: '你现在在哪儿呢？', answer: 'F', gloss: '我在去机场的路上。' },
        { prompt: '你为什么不坐公共汽车去公司？', answer: 'B', gloss: '坐公共汽车太慢了。' }, { prompt: '我今天很累，不想做饭了，我们出去吃吧。', answer: 'D', gloss: '……去那儿吃吧。' },
        { prompt: '你家离学校远不远？', answer: 'C', gloss: '不远，我每天走路去学校。' },
      ],
    },
  ],
}
