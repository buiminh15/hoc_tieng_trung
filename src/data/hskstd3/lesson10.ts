import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 3, Bài 10: 数学比历史难多了。 (sách trang 97–104).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách.
 * Nghe: 10-1…10-5. Bài tập: 热身/注释/练习 của giáo trình, đáp án theo "Đáp án giáo trình HSK 3" trang 20–21.
 */

const A = '/audio/hsk-std3/'

export const hskStd3Lesson10: Lesson = {
  id: 10,
  title: 'Toán khó hơn Lịch sử nhiều',
  hanzi: '数学比历史难多了。',
  pinyin: 'Shùxué bǐ lìshǐ nán duō le.',
  vi: 'Toán khó hơn Lịch sử nhiều',
  intro: 'So sánh người và sự vật. Học câu so sánh "A比B + tính từ + 一点儿/一些/得多/多了", dạng phủ định "A没有B(这么/那么) + tính từ" và cách nói số ước lượng bằng hai số liền kề (三四, 七八).',

  dialogue: [
    { who: 'A', name: '朋友', hanzi: '大山，你和马可谁个子高？', pinyin: 'Dàshān, nǐ hé Mǎkě shéi gèzi gāo?', vi: 'Đại Sơn, cậu với Mã Khả ai cao hơn?', scene: 'Hội thoại 1 · Trong lớp học' },
    { who: 'B', name: '大山', hanzi: '马可比我高，我比马可矮一点儿。', pinyin: 'Mǎkě bǐ wǒ gāo, wǒ bǐ Mǎkě ǎi yìdiǎnr.', vi: 'Mã Khả cao hơn tớ, tớ thấp hơn Mã Khả một chút.' },
    { who: 'A', name: '朋友', hanzi: '那你们谁大？', pinyin: 'Nà nǐmen shéi dà?', vi: 'Vậy hai cậu ai lớn tuổi hơn?' },
    { who: 'B', name: '大山', hanzi: '我比马可大两岁。', pinyin: 'Wǒ bǐ Mǎkě dà liǎng suì.', vi: 'Tớ lớn hơn Mã Khả hai tuổi.' },
    { who: 'A', name: '朋友', hanzi: '你们谁的汉语说得更好？', pinyin: 'Nǐmen shéi de Hànyǔ shuō de gèng hǎo?', vi: 'Ai trong hai cậu nói tiếng Hán giỏi hơn?' },
    { who: 'B', name: '大山', hanzi: '马可比我说得好一些，我的汉语没有他好。', pinyin: 'Mǎkě bǐ wǒ shuō de hǎo yìxiē, wǒ de Hànyǔ méiyǒu tā hǎo.', vi: 'Mã Khả nói giỏi hơn tớ một chút, tiếng Hán của tớ không giỏi bằng cậu ấy.' },
    { who: 'A', name: '小明', hanzi: '我喜欢历史课、体育课，不喜欢数学课。', pinyin: 'Wǒ xǐhuan lìshǐ kè, tǐyù kè, bù xǐhuan shùxué kè.', vi: 'Tớ thích môn Lịch sử, môn Thể dục, không thích môn Toán.', scene: 'Hội thoại 2 · Trong lớp học' },
    { who: 'B', name: '同学', hanzi: '为什么？数学也很有意思啊。', pinyin: 'Wèi shénme? Shùxué yě hěn yǒu yìsi a.', vi: 'Tại sao? Môn Toán cũng thú vị mà.' },
    { who: 'A', name: '小明', hanzi: '我觉得数学比历史难多了，我听不懂。', pinyin: 'Wǒ juéde shùxué bǐ lìshǐ nán duō le, wǒ tīng bu dǒng.', vi: 'Tớ thấy Toán khó hơn Lịch sử nhiều, tớ nghe không hiểu.' },
    { who: 'B', name: '同学', hanzi: '别担心，我可以帮你。', pinyin: 'Bié dān xīn, wǒ kěyǐ bāng nǐ.', vi: 'Đừng lo, tớ có thể giúp cậu.' },
    { who: 'A', name: '小明', hanzi: '好啊，我们每天学多长时间？', pinyin: 'Hǎo a, wǒmen měi tiān xué duō cháng shíjiān?', vi: 'Được thôi, mỗi ngày mình học bao lâu?' },
    { who: 'B', name: '同学', hanzi: '一两个小时吧。', pinyin: 'Yì liǎng ge xiǎoshí ba.', vi: 'Khoảng một hai tiếng nhé.' },
    { who: 'A', name: '同事', hanzi: '你最近比以前来得早多了，搬家了？', pinyin: 'Nǐ zuìjìn bǐ yǐqián lái de zǎo duō le, bān jiā le?', vi: 'Dạo này bạn đến sớm hơn trước nhiều, chuyển nhà rồi à?', scene: 'Hội thoại 3 · Trong phòng giải lao' },
    { who: 'B', name: '小丽', hanzi: '是啊，你不知道？我上个月就搬家了，走路二十分钟就到。', pinyin: 'Shì a, nǐ bù zhīdào? Wǒ shàng ge yuè jiù bān jiā le, zǒu lù èrshí fēnzhōng jiù dào.', vi: 'Ừ, bạn không biết à? Tháng trước mình đã chuyển nhà, đi bộ hai mươi phút là đến.' },
    { who: 'A', name: '同事', hanzi: '那很方便啊。', pinyin: 'Nà hěn fāngbiàn a.', vi: 'Vậy tiện quá.' },
    { who: 'B', name: '小丽', hanzi: '我还打算买辆自行车，骑车七八分钟就能到。', pinyin: 'Wǒ hái dǎsuàn mǎi liàng zìxíngchē, qí chē qī-bā fēnzhōng jiù néng dào.', vi: 'Mình còn định mua một chiếc xe đạp, đạp xe bảy tám phút là tới.' },
    { who: 'A', name: '同事', hanzi: '你不是有一辆吗？', pinyin: 'Nǐ bú shì yǒu yí liàng ma?', vi: 'Bạn chẳng phải có một chiếc rồi sao?' },
    { who: 'B', name: '小丽', hanzi: '那辆太旧了，要换一辆，很便宜，两三百块钱。', pinyin: 'Nà liàng tài jiù le, yào huàn yí liàng, hěn piányi, liǎng-sān bǎi kuài qián.', vi: 'Chiếc đó cũ quá, phải đổi chiếc khác, rất rẻ, hai ba trăm tệ.' },
    { who: 'A', name: '大山', hanzi: '这两个地方的房子一样吗？', pinyin: 'Zhè liǎng ge dìfang de fángzi yíyàng ma?', vi: 'Nhà ở hai nơi này giống nhau không?', scene: 'Hội thoại 4 · Đang xem nhà' },
    { who: 'B', name: '中介', hanzi: '不一样。您看，学校外边的房子比学校里边的大一些。', pinyin: 'Bù yíyàng. Nín kàn, xuéxiào wàibian de fángzi bǐ xuéxiào lǐbian de dà yìxiē.', vi: 'Không giống nhau. Anh xem, nhà ngoài trường lớn hơn nhà trong trường một chút.' },
    { who: 'A', name: '大山', hanzi: '大小没关系，主要是环境，哪个更安静？', pinyin: 'Dàxiǎo méi guānxi, zhǔyào shì huánjìng, nǎge gèng ānjìng?', vi: 'Lớn nhỏ không quan trọng, chủ yếu là môi trường, nơi nào yên tĩnh hơn?' },
    { who: 'B', name: '中介', hanzi: '学校里边的没有学校外边的那么安静。', pinyin: 'Xuéxiào lǐbian de méiyǒu xuéxiào wàibian de nàme ānjìng.', vi: 'Nhà trong trường không yên tĩnh bằng nhà ngoài trường.' },
    { who: 'A', name: '大山', hanzi: '哪个方便一些呢？', pinyin: 'Nǎge fāngbiàn yìxiē ne?', vi: 'Nơi nào tiện hơn một chút?' },
    { who: 'B', name: '中介', hanzi: '学校里边比学校外边方便，附近有三四个车站。', pinyin: 'Xuéxiào lǐbian bǐ xuéxiào wàibian fāngbiàn, fùjìn yǒu sān-sì ge chēzhàn.', vi: 'Trong trường tiện hơn ngoài trường, gần đó có ba bốn trạm xe.' },
  ],
  dialogueClips: [
    { label: '10-1 · Trong lớp học', src: A + 'l10-1.mp3' },
    { label: '10-2 · Trong lớp học', src: A + 'l10-2.mp3' },
    { label: '10-3 · Trong phòng giải lao', src: A + 'l10-3.mp3' },
    { label: '10-4 · Đang xem nhà', src: A + 'l10-4.mp3' },
  ],
  dialogueTip: '<b>A比B + tính từ + 一点儿/一些/得多/多了</b>: so sánh mức chênh lệch. Phủ định: <b>A没有B(这么/那么) + tính từ</b>. Số ước lượng: hai số liền kề (<b>三四个, 七八分钟</b>).',
  slowSay: '数学比历史难多了',

  vocab: [
    { hanzi: '个子', pinyin: 'gèzi', pos: 'danh từ', meaning: 'vóc dáng, thân hình', han_viet: 'cá tử' },
    { hanzi: '矮', pinyin: 'ǎi', pos: 'tính từ', meaning: 'thấp', han_viet: 'ải' },
    { hanzi: '历史', pinyin: 'lìshǐ', pos: 'danh từ', meaning: 'môn Lịch sử', han_viet: 'lịch sử' },
    { hanzi: '体育', pinyin: 'tǐyù', pos: 'danh từ', meaning: 'môn Thể dục', han_viet: 'thể dục' },
    { hanzi: '数学', pinyin: 'shùxué', pos: 'danh từ', meaning: 'môn Toán', han_viet: 'số học' },
    { hanzi: '方便', pinyin: 'fāngbiàn', pos: 'tính từ', meaning: 'thuận tiện', han_viet: 'phương tiện' },
    { hanzi: '自行车', pinyin: 'zìxíngchē', pos: 'danh từ', meaning: 'xe đạp', han_viet: 'tự hành xa' },
    { hanzi: '骑', pinyin: 'qí', pos: 'động từ', meaning: 'cưỡi, đi (xe đạp, xe máy)', han_viet: 'kỵ' },
    { hanzi: '旧', pinyin: 'jiù', pos: 'tính từ', meaning: 'cũ', han_viet: 'cựu' },
    { hanzi: '换', pinyin: 'huàn', pos: 'động từ', meaning: 'đổi, thay thế', han_viet: 'hoán' },
    { hanzi: '地方', pinyin: 'dìfang', pos: 'danh từ', meaning: 'chỗ, nơi', han_viet: 'địa phương' },
    { hanzi: '中介', pinyin: 'zhōngjiè', pos: 'danh từ', meaning: 'môi giới', han_viet: 'trung giới' },
    { hanzi: '主要', pinyin: 'zhǔyào', pos: 'tính từ', meaning: 'chủ yếu', han_viet: 'chủ yếu' },
    { hanzi: '环境', pinyin: 'huánjìng', pos: 'danh từ', meaning: 'môi trường', han_viet: 'hoàn cảnh' },
    { hanzi: '附近', pinyin: 'fùjìn', pos: 'danh từ', meaning: 'vùng lân cận', han_viet: 'phụ cận' },
  ],

  sections: [
    {
      kind: 'examples', label: 'So sánh 2', title: 'Câu so sánh: A比B + tính từ + 一点儿/一些/得多/多了',
      intro: '一点儿 và 一些 chỉ mức chênh lệch không lớn; 得多 và 多了 chỉ mức chênh lệch rất lớn. Hình thức phủ định là "A没有B (+ 这么/那么) + tính từ".',
      groups: [
        { label: 'A比B + tính từ + …', items: [['大山比大卫矮一点儿。', 'Dàshān bǐ Dàwèi ǎi yìdiǎnr.', 'Đại Sơn thấp hơn David một chút.'], ['我今天起得比昨天晚一些。', 'Wǒ jīntiān qǐ de bǐ zuótiān wǎn yìxiē.', 'Hôm nay tôi dậy muộn hơn hôm qua một chút.'], ['今天的作业比昨天多得多。', 'Jīntiān de zuòyè bǐ zuótiān duō de duō.', 'Bài tập hôm nay nhiều hơn hôm qua rất nhiều.'], ['数学比历史难多了。', 'Shùxué bǐ lìshǐ nán duō le.', 'Toán khó hơn Lịch sử nhiều.']] },
        { label: 'A没有B(这么/那么) + tính từ', items: [['咖啡没有茶好喝。', 'Kāfēi méiyǒu chá hǎo hē.', 'Cà phê không ngon bằng trà.'], ['他没有我这么高。', 'Tā méiyǒu wǒ zhème gāo.', 'Anh ấy không cao bằng tôi.'], ['这个电影没有那个电影那么有意思。', 'Zhège diànyǐng méiyǒu nàge diànyǐng nàme yǒu yìsi.', 'Phim này không thú vị bằng phim kia.'], ['学校里边的没有学校外边的那么安静。', 'Xuéxiào lǐbian de méiyǒu xuéxiào wàibian de nàme ānjìng.', 'Nhà trong trường không yên tĩnh bằng nhà ngoài trường.']] },
      ],
    },
    {
      kind: 'examples', label: 'Số ước lượng 1', title: 'Cách diễn tả số ước lượng: hai số liền kề',
      intro: 'Trong tiếng Trung, hai số đếm liền nhau có thể đặt cạnh nhau để diễn tả số ước lượng: 一二(两), 两三, 三四, 四五, 五六, 七八, 八九.',
      groups: [{ label: 'Ví dụ', items: [['我每天学习一两个小时汉语。', 'Wǒ měi tiān xuéxí yì liǎng ge xiǎoshí Hànyǔ.', 'Mỗi ngày tôi học tiếng Hán một hai tiếng.'], ['你都喝了三四杯咖啡了，别再喝了！', 'Nǐ dōu hēle sān-sì bēi kāfēi le, bié zài hē le!', 'Bạn uống ba bốn cốc cà phê rồi, đừng uống nữa!'], ['从小丽家到公司骑车七八分钟就能到。', 'Cóng Xiǎolì jiā dào gōngsī qí chē qī-bā fēnzhōng jiù néng dào.', 'Từ nhà Tiểu Lệ đến công ty đạp xe bảy tám phút là tới.'], ['学校附近有三四个车站。', 'Xuéxiào fùjìn yǒu sān-sì ge chēzhàn.', 'Gần trường có ba bốn trạm xe.']] }],
    },
    {
      kind: 'examples', label: 'Đọc cụm từ', title: 'Đọc to các cụm từ và câu (练习 1)',
      clip: { label: '10-5 · Đọc to các cụm từ và câu', src: A + 'l10-5.mp3' },
      intro: 'Bấm để nghe từng cụm.',
      groups: [{ label: 'Cụm từ', items: [
        ['历史课', 'lìshǐ kè', 'môn Lịch sử'], ['历史很长', 'lìshǐ hěn cháng', 'lịch sử rất dài'], ['数学比历史难多了', 'shùxué bǐ lìshǐ nán duō le', 'Toán khó hơn Lịch sử nhiều'],
        ['骑自行车', 'qí zìxíngchē', 'đi xe đạp'], ['这辆自行车太旧了', 'zhè liàng zìxíngchē tài jiù le', 'chiếc xe đạp này cũ quá'], ['换手机', 'huàn shǒujī', 'đổi điện thoại'], ['我要换一辆自行车', 'wǒ yào huàn yí liàng zìxíngchē', 'tôi muốn đổi xe đạp'],
        ['环境很好', 'huánjìng hěn hǎo', 'môi trường rất tốt'], ['学校附近', 'xuéxiào fùjìn', 'gần trường'], ['我在附近', 'wǒ zài fùjìn', 'tôi ở gần đây'],
      ] }],
    },
  ],

  notes: [
    {
      title: 'So sánh: A比B + tính từ + 一点儿/一些/得多/多了',
      body: '一点儿 và 一些 chỉ mức chênh lệch nhỏ; 得多 và 多了 chỉ mức chênh lệch rất lớn: 大山比大卫矮一点儿 / 数学比历史难多了。Phủ định: A没有B(+这么/那么)+tính từ, ví dụ 咖啡没有茶好喝。',
      say: '数学比历史难多了',
    },
    {
      title: 'Cách diễn tả số ước lượng (1)',
      body: 'Hai số liền kề đặt cạnh nhau để chỉ số ước lượng: 一两个小时, 三四杯, 七八分钟, 三四个车站.',
      say: '附近有三四个车站',
    },
    {
      title: 'Cách thành lập từ mới (旧字新词)',
      body: '换 + 季节 = 换季 (đổi mùa); 地方 + 上面 = 地面 (mặt đất); 主要 + 菜 = 主菜 (món chính).',
      say: '主菜',
    },
    {
      title: 'Tục ngữ: 不可同日而语',
      body: 'Không thể so sánh với nhau. Câu này không đặt các sự vật hay các khoảng thời gian khác nhau vào cùng một điều kiện thời gian; dùng để chỉ sự khác biệt rất lớn. Chẳng hạn, nếu xét về mặt công nghệ truyền thông, ta không thể so sánh quá khứ và hiện tại do lĩnh vực này phát triển rất nhanh.',
      say: '不可同日而语',
    },
  ],

  writeChars: ['矮', '历', '史', '体', '育', '骑', '旧', '换'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 4)',
      items: [
        { q: '马可和大山谁高？谁年龄大？谁的汉语说得好？', hint: '马可比大山高，大山的年龄大，马可的汉语比大山说得好一些。' },
        { q: '小明为什么不喜欢数学课？', hint: '他觉得数学课很难，他听不懂。' },
        { q: '小明和同学打算每天一起做什么？做多长时间？', hint: '小明和同学打算每天一起学习数学，每天学习一两个小时。' },
        { q: '小丽为什么比以前来得早了？', hint: '小丽搬家了，走路二十分钟就到。' },
        { q: '小丽为什么要买自行车？', hint: '因为骑车比走路快多了。' },
        { q: '住在学校里边和学校外边有什么不一样？', hint: '学校外边的房子比学校里边的大一些，更安静，学校里边比学校外边方便，附近有三四个车站。' },
      ],
    },
    {
      title: 'Hoạt động theo cặp (运用 1)',
      items: [
        { q: 'Mẫu: 爬山 → 爬过两三次', hint: 'Hỏi bạn: 参加比赛, 听音乐会, 逛公园, 旅游, 上课迟到 đã làm mấy lần, trả lời bằng số ước lượng.' },
      ],
    },
  ],

  sentences: [
    { parts: ['马可', '比', '我', '高'], pinyin: 'Mǎkě bǐ wǒ gāo.', vi: 'Mã Khả cao hơn tôi.' },
    { parts: ['我', '比', '马可', '大', '两', '岁'], pinyin: 'Wǒ bǐ Mǎkě dà liǎng suì.', vi: 'Tôi lớn hơn Mã Khả hai tuổi.' },
    { parts: ['数学', '比', '历史', '难', '多', '了'], pinyin: 'Shùxué bǐ lìshǐ nán duō le.', vi: 'Toán khó hơn Lịch sử nhiều.' },
    { parts: ['我', '的', '汉语', '没有', '他', '好'], pinyin: 'Wǒ de Hànyǔ méiyǒu tā hǎo.', vi: 'Tiếng Hán của tôi không giỏi bằng cậu ấy.' },
    { parts: ['骑', '车', '七八', '分钟', '就', '能', '到'], pinyin: 'Qí chē qī-bā fēnzhōng jiù néng dào.', vi: 'Đạp xe bảy tám phút là tới.' },
    { parts: ['附近', '有', '三四', '个', '车站'], pinyin: 'Fùjìn yǒu sān-sì ge chēzhàn.', vi: 'Gần đó có ba bốn trạm xe.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 安静 · B 体育 · C 个子 · D 旧 · E 骑. Gõ chữ cái A–E.',
      items: [
        { prompt: '我（ ）比他高一点儿。', answer: 'C', gloss: '个子' }, { prompt: '我每天（ ）车来学校。', answer: 'E', gloss: '骑' },
        { prompt: '我最喜欢（ ）课，多有意思啊。', answer: 'B', gloss: '体育' }, { prompt: '我喜欢住在这儿，主要是觉得这儿很（ ）。', answer: 'A', gloss: '安静' },
        { prompt: '这条裤子太（ ）了，再买一条吧。', answer: 'D', gloss: '旧' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 方便 · B 数学 · C 换 · D 附近 · E 地方. Gõ chữ cái A–E.',
      items: [
        { prompt: '我觉得你的比我的好。 你想要这个吗？没问题，我跟你（ ）。', answer: 'C', gloss: '换' }, { prompt: '你哪天比较（ ），我们见面聊聊天儿？ 周末吧，来我家吃饭。', answer: 'A', gloss: '方便' },
        { prompt: '这个（ ）的天气怎么样？ 非常好，夏天一点儿也不热。', answer: 'E', gloss: '地方' }, { prompt: '请问，这儿（ ）有超市吗？ 有，一直往前走就是。', answer: 'D', gloss: '附近' },
        { prompt: '你怎么不太高兴？ 我（ ）考得不好。', answer: 'B', gloss: '数学' },
      ],
    },
    {
      title: 'Giáo trình 注释 · Hoàn thành câu (gõ phần còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: '今天的天气比（ ）。', answer: '昨天冷多了', gloss: 'so sánh' },
        { prompt: '我做的饭没有（ ）。', answer: '妈妈做的那么好吃', gloss: 'phủ định' },
        { prompt: '骑自行车（ ）。', answer: '没有坐公共汽车那么快', gloss: 'phủ định' },
        { prompt: '这辆自行车（ ）。', answer: '三四百块', gloss: 'số ước lượng' },
        { prompt: '我有（ ）条黑色的裤子。', answer: '四五', gloss: 'số ước lượng' },
      ],
    },
    {
      title: 'Giáo trình 练习 3 · Hoàn thành đối thoại (gõ phần còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: 'A: 你和妈妈谁起得早？ B: （ ）。', answer: '妈妈比我起得早多了', gloss: 'so sánh' },
        { prompt: 'A: 她比你（ ）起多长时间？ B: 一两个小时吧。', answer: '早', gloss: 'so sánh' },
        { prompt: 'A: 今天我们班来了多少学生？ B: 今天来了（ ）个学生。', answer: '七八', gloss: 'số ước lượng' },
        { prompt: 'A: 那条呢？ B: 没有（ ），我觉得还可以。', answer: '那么贵', gloss: 'phủ định' },
      ],
    },
  ],
}
