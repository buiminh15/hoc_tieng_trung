import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 3, Bài 7: 我跟她都认识五年了。 (sách trang 71–79).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách.
 * Nghe: 07-1…07-5. Bài tập: 练习 2–4 của giáo trình, đáp án theo "Đáp án giáo trình HSK 3" trang 14–15.
 */

const A = '/audio/hsk-std3/'

export const hskStd3Lesson7: Lesson = {
  id: 7,
  title: 'Tôi và cô ấy đã quen nhau năm năm rồi',
  hanzi: '我跟她都认识五年了。',
  pinyin: 'Wǒ gēn tā dōu rènshi wǔ nián le.',
  vi: 'Tôi và cô ấy đã quen nhau năm năm rồi',
  intro: 'Nói về khoảng thời gian, sở thích và giờ giấc. Học cách diễn tả khoảng thời gian (chủ ngữ + động từ + 了 + thời lượng + tân ngữ + 了), cách diễn tả hứng thú (对……感兴趣 / 有兴趣), cách nói giờ với 半, 刻, 差.',

  dialogue: [
    { who: 'A', name: '同事', hanzi: '那个漂亮的新同事是谁？', pinyin: 'Nàge piàoliang de xīn tóngshì shì shéi?', vi: 'Đồng nghiệp mới xinh đẹp kia là ai vậy?', scene: 'Hội thoại 1 · Trong văn phòng' },
    { who: 'B', name: '小刚', hanzi: '那是小丽。', pinyin: 'Nà shì Xiǎolì.', vi: 'Đó là Tiểu Lệ.' },
    { who: 'A', name: '同事', hanzi: '她刚来北京吗？', pinyin: 'Tā gāng lái Běijīng ma?', vi: 'Cô ấy mới đến Bắc Kinh à?' },
    { who: 'B', name: '小刚', hanzi: '不，她在北京工作三年了。', pinyin: 'Bù, tā zài Běijīng gōngzuò sān nián le.', vi: 'Không, cô ấy làm việc ở Bắc Kinh ba năm rồi.' },
    { who: 'A', name: '同事', hanzi: '以前她在哪儿工作？', pinyin: 'Yǐqián tā zài nǎr gōngzuò?', vi: 'Trước đây cô ấy làm ở đâu?' },
    { who: 'B', name: '小刚', hanzi: '她在银行工作了两年以后来的我们公司。', pinyin: 'Tā zài yínháng gōngzuòle liǎng nián yǐhòu lái de wǒmen gōngsī.', vi: 'Cô ấy làm ở ngân hàng hai năm rồi mới đến công ty mình.' },
    { who: 'A', name: '同事', hanzi: '周末你跟小丽去哪儿玩儿了？', pinyin: 'Zhōumò nǐ gēn Xiǎolì qù nǎr wánr le?', vi: 'Cuối tuần anh với Tiểu Lệ đi chơi đâu?', scene: 'Hội thoại 2 · Trong phòng giải lao' },
    { who: 'B', name: '小刚', hanzi: '我们去唱歌了。', pinyin: 'Wǒmen qù chàng gē le.', vi: 'Bọn tôi đi hát.' },
    { who: 'A', name: '同事', hanzi: '你们唱了多久？', pinyin: 'Nǐmen chàngle duō jiǔ?', vi: 'Các anh hát bao lâu?' },
    { who: 'B', name: '小刚', hanzi: '我们唱了两个小时歌，晚上还去听音乐会了。', pinyin: 'Wǒmen chàngle liǎng ge xiǎoshí gē, wǎnshang hái qù tīng yīnyuèhuì le.', vi: 'Bọn tôi hát hai tiếng, tối còn đi nghe hòa nhạc.' },
    { who: 'A', name: '同事', hanzi: '你们都对音乐感兴趣吗？', pinyin: 'Nǐmen dōu duì yīnyuè gǎn xìngqù ma?', vi: 'Các anh đều thích âm nhạc à?' },
    { who: 'B', name: '小刚', hanzi: '她对音乐感兴趣，我对她更感兴趣。', pinyin: 'Tā duì yīnyuè gǎn xìngqù, wǒ duì tā gèng gǎn xìngqù.', vi: 'Cô ấy thích âm nhạc, còn tôi thích cô ấy hơn.' },
    { who: 'A', name: '小刚', hanzi: '我跟小丽下个月结婚，到时候欢迎你来。', pinyin: 'Wǒ gēn Xiǎolì xià ge yuè jié hūn, dào shíhou huānyíng nǐ lái.', vi: 'Tháng sau tôi và Tiểu Lệ cưới, đến lúc đó mời anh đến dự.', scene: 'Hội thoại 3 · Trong phòng giải lao' },
    { who: 'B', name: '同事', hanzi: '什么？结婚？', pinyin: 'Shénme? Jié hūn?', vi: 'Cái gì? Cưới à?' },
    { who: 'A', name: '小刚', hanzi: '对啊，突然吗？', pinyin: 'Duì a, tūrán ma?', vi: 'Đúng vậy, bất ngờ lắm à?' },
    { who: 'B', name: '同事', hanzi: '你们不是刚认识吗？', pinyin: 'Nǐmen bú shì gāng rènshi ma?', vi: 'Hai người chẳng phải mới quen sao?' },
    { who: 'A', name: '小刚', hanzi: '我跟她都认识五年了。', pinyin: 'Wǒ gēn tā dōu rènshi wǔ nián le.', vi: 'Tôi với cô ấy đã quen nhau năm năm rồi.' },
    { who: 'B', name: '同事', hanzi: '你跟她结婚，那我怎么办啊？', pinyin: 'Nǐ gēn tā jié hūn, nà wǒ zěnme bàn a?', vi: 'Anh cưới cô ấy thì tôi biết làm sao đây?' },
    { who: 'A', name: '小丽', hanzi: '你看看手表，怎么迟到了？', pinyin: 'Nǐ kànkan shǒubiǎo, zěnme chídào le?', vi: 'Anh xem đồng hồ đi, sao lại đến muộn?', scene: 'Hội thoại 4 · Ở trước cửa công ty' },
    { who: 'B', name: '小刚', hanzi: '没迟到啊。', pinyin: 'Méi chídào a.', vi: 'Có muộn đâu.' },
    { who: 'A', name: '小丽', hanzi: '你不是说七点半来接我吗？你迟到了一刻钟。', pinyin: 'Nǐ bú shì shuō qī diǎn bàn lái jiē wǒ ma? Nǐ chídàole yí kè zhōng.', vi: 'Chẳng phải anh nói bảy rưỡi đến đón em sao? Anh muộn mười lăm phút rồi.' },
    { who: 'B', name: '小刚', hanzi: '现在不是七点半吗？', pinyin: 'Xiànzài bú shì qī diǎn bàn ma?', vi: 'Bây giờ chẳng phải bảy rưỡi sao?' },
    { who: 'A', name: '小丽', hanzi: '已经差一刻八点了！我都在这儿坐了半个小时了。', pinyin: 'Yǐjīng chà yí kè bā diǎn le! Wǒ dōu zài zhèr zuòle bàn ge xiǎoshí le.', vi: 'Đã tám giờ kém mười lăm rồi! Em ngồi đây nửa tiếng rồi.' },
    { who: 'B', name: '小刚', hanzi: '不是我迟到了，是你的表快了一刻钟。', pinyin: 'Bú shì wǒ chídào le, shì nǐ de biǎo kuàile yí kè zhōng.', vi: 'Không phải anh đến muộn, là đồng hồ của em nhanh mười lăm phút.' },
  ],
  dialogueClips: [
    { label: '07-1 · Trong văn phòng', src: A + 'l07-1.mp3' },
    { label: '07-2 · Trong phòng giải lao', src: A + 'l07-2.mp3' },
    { label: '07-3 · Trong phòng giải lao', src: A + 'l07-3.mp3' },
    { label: '07-4 · Ở trước cửa công ty', src: A + 'l07-4.mp3' },
  ],
  dialogueTip: '<b>Động từ + 了 + thời lượng</b>: làm trong bao lâu (唱了两个小时歌). Thêm <b>了</b> ở cuối câu: việc đó đến giờ vẫn đang tiếp diễn (都认识五年了). <b>对……感兴趣</b>: có hứng thú với…. Giờ: <b>半</b> = rưỡi, <b>刻</b> = 15 phút, <b>差</b> = kém.',
  slowSay: '我跟她都认识五年了',

  vocab: [
    { hanzi: '同事', pinyin: 'tóngshì', pos: 'danh từ', meaning: 'đồng nghiệp', han_viet: 'đồng sự' },
    { hanzi: '以前', pinyin: 'yǐqián', pos: 'danh từ', meaning: 'trước đây, trước kia', han_viet: 'dĩ tiền' },
    { hanzi: '银行', pinyin: 'yínháng', pos: 'danh từ', meaning: 'ngân hàng', han_viet: 'ngân hàng' },
    { hanzi: '久', pinyin: 'jiǔ', pos: 'tính từ', meaning: 'lâu, lâu dài', han_viet: 'cửu' },
    { hanzi: '感兴趣', pinyin: 'gǎn xìngqù', pos: 'cụm', meaning: 'có hứng thú, thích', han_viet: 'cảm hứng thú' },
    { hanzi: '结婚', pinyin: 'jié hūn', pos: 'động từ', meaning: 'kết hôn, cưới', han_viet: 'kết hôn' },
    { hanzi: '欢迎', pinyin: 'huānyíng', pos: 'động từ', meaning: 'hoan nghênh, chào mừng', han_viet: 'hoan nghênh' },
    { hanzi: '迟到', pinyin: 'chídào', pos: 'động từ', meaning: 'đến muộn', han_viet: 'trì đáo' },
    { hanzi: '半', pinyin: 'bàn', pos: 'số từ', meaning: 'một nửa, rưỡi', han_viet: 'bán' },
    { hanzi: '接', pinyin: 'jiē', pos: 'động từ', meaning: 'đón', han_viet: 'tiếp' },
    { hanzi: '刻', pinyin: 'kè', pos: 'lượng từ', meaning: 'mười lăm phút', han_viet: 'khắc' },
    { hanzi: '差', pinyin: 'chà', pos: 'động từ', meaning: 'kém, thiếu', han_viet: 'sai' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Khoảng thời gian', title: 'Cách diễn tả khoảng thời gian',
      intro: 'Để diễn tả hành động hay trạng thái xảy ra hoặc kéo dài trong khoảng thời gian bao lâu, người ta dùng bổ ngữ chỉ thời lượng như 一刻钟, 半个小时, 两天, 三个月… Cấu trúc "chủ ngữ + động từ + 了 + khoảng thời gian + tân ngữ" diễn tả khoảng thời gian mà hành động xảy ra. Cấu trúc "chủ ngữ + động từ + 了 + khoảng thời gian + tân ngữ + 了" diễn tả khoảng thời gian mà hành động đã xảy ra và vẫn đang tiếp diễn.',
      groups: [
        { label: '…… 了 + thời lượng (đã xong)', items: [['她工作了三年。', 'Tā gōngzuòle sān nián.', 'Cô ấy đã làm việc ba năm.'], ['我们坐了一个小时公共汽车。', 'Wǒmen zuòle yí ge xiǎoshí gōnggòng qìchē.', 'Chúng tôi ngồi xe buýt một tiếng.'], ['你怎么晚到了一刻钟？', 'Nǐ zěnme wǎn dàole yí kè zhōng?', 'Sao bạn đến muộn mười lăm phút?'], ['我们唱了两个小时歌。', 'Wǒmen chàngle liǎng ge xiǎoshí gē.', 'Chúng tôi hát hai tiếng.']] },
        { label: '…… 了 + thời lượng + 了 (vẫn đang tiếp diễn)', items: [['我学习了一年汉语了。', 'Wǒ xuéxíle yì nián Hànyǔ le.', 'Tôi học tiếng Hán được một năm rồi (vẫn đang học).'], ['她看了半个小时电视了。', 'Tā kànle bàn ge xiǎoshí diànshì le.', 'Cô ấy xem ti vi nửa tiếng rồi.'], ['他们游了二十分钟泳了。', 'Tāmen yóule èrshí fēnzhōng yǒng le.', 'Họ bơi được hai mươi phút rồi.'], ['我都在这儿坐了半个小时了。', 'Wǒ dōu zài zhèr zuòle bàn ge xiǎoshí le.', 'Tôi ngồi ở đây nửa tiếng rồi.']] },
      ],
    },
    {
      kind: 'examples', label: 'Hứng thú · giờ', title: 'Diễn tả hứng thú; nói giờ với 半, 刻, 差',
      intro: 'Cấu trúc 对……感兴趣 và 对……有兴趣 diễn tả sự hứng thú; phủ định là 对……不感兴趣 và 对……没(有)兴趣. Phó từ mức độ đặt trước 感兴趣 / 有兴趣: 很感兴趣, 非常有兴趣. Lưu ý 一刻钟 là khoảng thời gian, có nghĩa là mười lăm phút: 我等了你一刻钟 = Em đã đợi anh mười lăm phút rồi.',
      groups: [
        { label: 'Hứng thú', items: [['他们对电影感兴趣。', 'Tāmen duì diànyǐng gǎn xìngqù.', 'Họ thích phim.'], ['我儿子对打篮球不感兴趣。', 'Wǒ érzi duì dǎ lánqiú bù gǎn xìngqù.', 'Con trai tôi không thích bóng rổ.'], ['同学们对汉语有兴趣。你们都对音乐感兴趣吗？', 'Tóngxuémen duì Hànyǔ yǒu xìngqù. Nǐmen dōu duì yīnyuè gǎn xìngqù ma?', 'Các bạn thích tiếng Hán. Các bạn đều thích âm nhạc chứ?'], ['我对她更感兴趣。', 'Wǒ duì tā gèng gǎn xìngqù.', 'Tôi thích cô ấy hơn.']] },
        { label: 'Nói giờ', items: [['一点半', 'yì diǎn bàn', '1:30'], ['十二点一刻', "shí'èr diǎn yí kè", '12:15'], ['十二点三刻 / 差一刻一点', "shí'èr diǎn sān kè / chà yí kè yì diǎn", '12:45'], ['差五分十二点', "chà wǔ fēn shí'èr diǎn", '11:55'], ['十点半', 'shí diǎn bàn', '10:30'], ['差一分十二点', "chà yì fēn shí'èr diǎn", '11:59']] },
      ],
    },
    {
      kind: 'examples', label: 'Đọc cụm từ', title: 'Đọc to các cụm từ và câu (练习 1)',
      clip: { label: '07-5 · Đọc to các cụm từ và câu', src: A + 'l07-5.mp3' },
      intro: 'Bấm để nghe từng cụm.',
      groups: [{ label: 'Cụm từ', items: [
        ['工作以前', 'gōngzuò yǐqián', 'trước khi làm việc'], ['以前她在哪儿工作？', 'Yǐqián tā zài nǎr gōngzuò?', 'Trước đây cô ấy làm ở đâu?'],
        ['好久不见', 'hǎo jiǔ bú jiàn', 'lâu lắm không gặp'], ['你们唱了多久？', 'Nǐmen chàngle duō jiǔ?', 'Các bạn hát bao lâu?'],
        ['我跟小丽下个月结婚', 'wǒ gēn Xiǎolì xià ge yuè jié hūn', 'tháng sau tôi cưới Tiểu Lệ'], ['别迟到', 'bié chídào', 'đừng đến muộn'],
        ['迟到五分钟', 'chídào wǔ fēnzhōng', 'muộn năm phút'], ['七点一刻', 'qī diǎn yí kè', 'bảy giờ mười lăm'], ['八点三刻', 'bā diǎn sān kè', 'tám giờ bốn lăm'],
      ] }],
    },
  ],

  notes: [
    {
      title: 'Cách diễn tả khoảng thời gian',
      body: '"Chủ ngữ + động từ + 了 + khoảng thời gian + tân ngữ" diễn tả khoảng thời gian hành động xảy ra: 我们唱了两个小时歌。 Thêm 了 ở cuối câu: hành động đã xảy ra và vẫn đang tiếp diễn. Chẳng hạn 看了一个小时书了 cho biết người nói đã đọc sách được một giờ đồng hồ và hiện vẫn đang đọc.',
      say: '我都在这儿坐了半个小时了',
    },
    {
      title: 'Cách diễn tả sự hứng thú',
      body: '对……感兴趣 và 对……有兴趣 diễn tả hứng thú với điều gì; phủ định là 对……不感兴趣 và 对……没(有)兴趣. Phó từ mức độ đặt trước 感兴趣 và 有兴趣: 很感兴趣, 非常有兴趣. Ví dụ: 我对她更感兴趣。',
      say: '我对她更感兴趣',
    },
    {
      title: 'Nói giờ với 半, 刻, 差',
      body: '半 = rưỡi (一点半), 刻 = mười lăm phút (十二点一刻), 三刻 = bốn lăm phút, 差 = kém (差五分十二点 = 11:55). Lưu ý 一刻钟 còn là khoảng thời gian mười lăm phút: 我等了你一刻钟。',
      say: '差一刻八点',
    },
    {
      title: 'Tục ngữ: 一步走错步步错',
      body: 'Đi sai một bước, các bước kế tiếp đều sai. Khi đánh cờ, nếu ta đi sai một bước thì tất cả các bước tiếp theo cũng đều sai. Câu này dùng để diễn tả rằng nếu chúng ta đưa ra quyết định thiếu sáng suốt ngay từ đầu thì mọi quyết định sau đó cũng đều sai lầm; do vậy, khi thực hiện công việc nào đó, chúng ta nên thận trọng ở từng khâu, nhất là trong giai đoạn khởi đầu.',
      say: '一步走错步步错',
    },
  ],

  writeChars: ['同', '事', '银', '久', '趣', '婚', '迟', '刻'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 4)',
      items: [
        { q: '小丽以前在哪儿工作？工作了多长时间？', hint: '小丽以前在银行工作，她在银行工作了两年。' },
        { q: '小刚和小丽周末做什么了？做了多长时间？', hint: '他们周末去唱歌了，他们唱了两个小时。' },
        { q: '小丽对什么很感兴趣？小刚呢？', hint: '小丽对音乐很感兴趣，小刚对小丽很感兴趣。' },
        { q: '小刚和小丽什么时候结婚？', hint: '他们下个月结婚。' },
        { q: '同事为什么觉得小刚结婚很突然？', hint: '同事觉得小刚和小丽刚认识。' },
        { q: '小刚迟到了吗？为什么？', hint: '小刚没有迟到，因为小丽的表快了一刻钟。' },
      ],
    },
    {
      title: 'Hoạt động nhóm: lịch học trong tuần (运用 2)',
      items: [
        { q: 'Mẫu: 星期一 8:00–9:00 上1个小时汉语课', hint: 'Ghi lịch học các ngày trong tuần rồi nói bằng cấu trúc thời lượng.' },
      ],
    },
  ],

  sentences: [
    { parts: ['她', '在', '北京', '工作', '三', '年', '了'], pinyin: 'Tā zài Běijīng gōngzuò sān nián le.', vi: 'Cô ấy làm việc ở Bắc Kinh ba năm rồi.' },
    { parts: ['我们', '唱', '了', '两', '个', '小时', '歌'], pinyin: 'Wǒmen chàngle liǎng ge xiǎoshí gē.', vi: 'Bọn tôi hát hai tiếng.' },
    { parts: ['她', '对', '音乐', '感兴趣'], pinyin: 'Tā duì yīnyuè gǎn xìngqù.', vi: 'Cô ấy thích âm nhạc.' },
    { parts: ['我', '跟', '她', '都', '认识', '五', '年', '了'], pinyin: 'Wǒ gēn tā dōu rènshi wǔ nián le.', vi: 'Tôi với cô ấy đã quen nhau năm năm rồi.' },
    { parts: ['你', '迟到', '了', '一', '刻', '钟'], pinyin: 'Nǐ chídàole yí kè zhōng.', vi: 'Anh đến muộn mười lăm phút.' },
    { parts: ['已经', '差', '一', '刻', '八', '点', '了'], pinyin: 'Yǐjīng chà yí kè bā diǎn le.', vi: 'Đã tám giờ kém mười lăm rồi.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 以前 · B 同事 · C 兴趣 · D 欢迎 · E 差. Gõ chữ cái A–E.',
      items: [
        { prompt: '小明每天都听歌，对音乐有（ ）。', answer: 'C', gloss: '兴趣' }, { prompt: '我给你介绍一下，这是我的（ ）小王。', answer: 'B', gloss: '同事' },
        { prompt: '（ ）你来我家玩儿。', answer: 'D', gloss: '欢迎' }, { prompt: '我是（ ）十分八点到公司的。', answer: 'E', gloss: '差' },
        { prompt: '来中国（ ），我学了一年汉语。', answer: 'A', gloss: '以前' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 银行 · B 结婚 · C 迟到 · D 接 · E 半. Gõ chữ cái A–E.',
      items: [
        { prompt: '你今天怎么（ ）了？ 对不起，我起晚了。', answer: 'C', gloss: '迟到' }, { prompt: '你现在要去哪儿？ 我去机场（ ）一个朋友。', answer: 'D', gloss: '接' },
        { prompt: '比赛什么时候开始？ 十点（ ）。', answer: 'E', gloss: '半' }, { prompt: '请问，哪儿有（ ）？ 一直往前走，超市的旁边。', answer: 'A', gloss: '银行' },
        { prompt: '下个月我们就要（ ）了。 什么？你们不是刚认识吗？', answer: 'B', gloss: '结婚' },
      ],
    },
    {
      title: 'Giáo trình 注释 · Nói giờ với 半, 刻, 差 (gõ chữ Hán)',
      hint: 'Gõ đúng cách đọc giờ theo đáp án sách.',
      items: [
        { prompt: '10:30', answer: '十点半', gloss: '半' }, { prompt: '12:45', answer: '十二点三刻', accept: ['差一刻一点'], gloss: '刻 / 差' },
        { prompt: '11:59', answer: '差一分十二点', gloss: '差' },
      ],
    },
    {
      title: 'Giáo trình 注释 · Hoàn thành mẫu đối thoại (gõ câu còn thiếu)',
      hint: 'Gõ đúng câu theo đáp án sách.',
      items: [
        { prompt: 'A: 你学了多长时间汉语了？ B: （ ）。', answer: '我学了两年汉语', accept: ['我学了两年汉语了'], gloss: 'thời lượng' },
        { prompt: 'A: （ ）？ B: 我在这个地方住了十年了。', answer: '你在这儿住多长时间了', gloss: 'thời lượng' },
        { prompt: 'A: 小王还没来，你等了他多长时间？ B: （ ）。', answer: '我等他等了半个小时了', accept: ['我等了他半个小时了'], gloss: 'thời lượng' },
        { prompt: 'A: 你对什么运动感兴趣？ B: （ ）。', answer: '我对足球很感兴趣', gloss: 'hứng thú' },
        { prompt: 'A: 你喜欢汉语吗？ B: （ ）。', answer: '我对汉语没兴趣', accept: ['我对汉语很感兴趣'], gloss: 'hứng thú' },
      ],
    },
  ],
}
