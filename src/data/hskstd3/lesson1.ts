import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 3, Bài 1: 周末你有什么打算？ (sách trang 17–26).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách.
 * Nghe: 01-1…01-5 (giáo trình). Bài tập: phần 练习 2–4 của giáo trình, đáp án theo "Đáp án giáo trình HSK 3" trang 1–2.
 */

const A = '/audio/hsk-std3/'

export const hskStd3Lesson1: Lesson = {
  id: 1,
  title: 'Anh dự định làm gì vào cuối tuần vậy?',
  hanzi: '周末你有什么打算？',
  pinyin: 'Zhōumò nǐ yǒu shénme dǎsuàn?',
  vi: 'Anh dự định làm gì vào cuối tuần vậy?',
  intro: 'Nói về kế hoạch cuối tuần và chuyến du lịch. Học bổ ngữ chỉ kết quả 好, cấu trúc phủ định hoàn toàn 一……也/都 + 不/没……, liên từ 那; chữ chỉ sự (指事字).',

  dialogue: [
    { who: 'A', name: '小丽', hanzi: '周末你有什么打算？', pinyin: 'Zhōumò nǐ yǒu shénme dǎsuàn?', vi: 'Cuối tuần anh có dự định gì?', scene: 'Hội thoại 1 · Nói về kế hoạch cuối tuần' },
    { who: 'B', name: '小刚', hanzi: '我早就想好了，请你吃饭、看电影、喝咖啡。', pinyin: 'Wǒ zǎo jiù xiǎnghǎo le, qǐng nǐ chī fàn, kàn diànyǐng, hē kāfēi.', vi: 'Anh nghĩ xong từ lâu rồi: mời em ăn cơm, xem phim, uống cà phê.' },
    { who: 'A', name: '小丽', hanzi: '请我？', pinyin: 'Qǐng wǒ?', vi: 'Mời em à?' },
    { who: 'B', name: '小刚', hanzi: '是啊，我已经找好饭馆儿了，电影票也买好了。', pinyin: 'Shì a, wǒ yǐjīng zhǎohǎo fànguǎnr le, diànyǐngpiào yě mǎihǎo le.', vi: 'Đúng vậy, anh đã tìm được quán ăn rồi, vé xem phim cũng mua xong rồi.' },
    { who: 'A', name: '小丽', hanzi: '我还没想好要不要跟你去呢。', pinyin: 'Wǒ hái méi xiǎnghǎo yào bu yào gēn nǐ qù ne.', vi: 'Em vẫn chưa nghĩ xong có nên đi với anh không.' },
    { who: 'A', name: '妈妈', hanzi: '你一直玩儿电脑游戏，作业写完了吗？', pinyin: 'Nǐ yìzhí wánr diànnǎo yóuxì, zuòyè xiěwán le ma?', vi: 'Con chơi điện tử suốt, bài tập làm xong chưa?', scene: 'Hội thoại 2 · Ở nhà' },
    { who: 'B', name: '儿子', hanzi: '都写完了。', pinyin: 'Dōu xiěwán le.', vi: 'Làm xong hết rồi ạ.' },
    { who: 'A', name: '妈妈', hanzi: '明天不是有考试吗？你怎么一点儿也不着急？', pinyin: 'Míngtiān bú shì yǒu kǎoshì ma? Nǐ zěnme yìdiǎnr yě bù zháojí?', vi: 'Mai chẳng phải có bài thi sao? Sao con chẳng lo lắng gì cả?' },
    { who: 'B', name: '儿子', hanzi: '我早就复习好了。', pinyin: 'Wǒ zǎo jiù fùxí hǎo le.', vi: 'Con ôn xong từ lâu rồi ạ.' },
    { who: 'A', name: '妈妈', hanzi: '那也不能一直玩儿啊。', pinyin: 'Nà yě bù néng yìzhí wánr a.', vi: 'Thế cũng không được chơi suốt thế.' },
    { who: 'A', name: '小丽', hanzi: '下个月我去旅游，你能跟我一起去吗？', pinyin: 'Xià ge yuè wǒ qù lǚyóu, nǐ néng gēn wǒ yìqǐ qù ma?', vi: 'Tháng sau em đi du lịch, anh đi cùng em được không?', scene: 'Hội thoại 3 · Nói về kế hoạch đi du lịch' },
    { who: 'B', name: '小刚', hanzi: '我还没想好呢。你觉得哪儿最好玩儿？', pinyin: 'Wǒ hái méi xiǎnghǎo ne. Nǐ juéde nǎr zuì hǎowánr?', vi: 'Anh vẫn chưa nghĩ xong. Em thấy đi đâu là vui nhất?' },
    { who: 'A', name: '小丽', hanzi: '南方啊，我们去年就是这个时候去的。', pinyin: 'Nánfāng a, wǒmen qùnián jiù shì zhège shíhou qù de.', vi: 'Miền Nam đó, năm ngoái chúng mình đi đúng dịp này.' },
    { who: 'B', name: '小刚', hanzi: '南方太热了，北方好一些，不冷也不热。', pinyin: 'Nánfāng tài rè le, běifāng hǎo yìxiē, bù lěng yě bú rè.', vi: 'Miền Nam nóng quá, miền Bắc dễ chịu hơn, không lạnh cũng không nóng.' },
    { who: 'A', name: '小刚', hanzi: '水果、面包、茶都准备好了，我们还带什么？', pinyin: 'Shuǐguǒ, miànbāo, chá dōu zhǔnbèi hǎo le, wǒmen hái dài shénme?', vi: 'Hoa quả, bánh mì, trà đều chuẩn bị xong rồi, mình còn mang gì nữa?', scene: 'Hội thoại 4 · Chuẩn bị đi du lịch' },
    { who: 'B', name: '小丽', hanzi: '手机、电脑、地图，一个也不能少。', pinyin: 'Shǒujī, diànnǎo, dìtú, yí ge yě bù néng shǎo.', vi: 'Điện thoại, máy tính, bản đồ, thiếu một thứ cũng không được.' },
    { who: 'A', name: '小刚', hanzi: '这些我昨天下午就准备好了。', pinyin: 'Zhèxiē wǒ zuótiān xiàwǔ jiù zhǔnbèi hǎo le.', vi: 'Mấy thứ này anh chuẩn bị xong từ chiều qua rồi.' },
    { who: 'B', name: '小丽', hanzi: '再多带几件衣服吧。', pinyin: 'Zài duō dài jǐ jiàn yīfu ba.', vi: 'Mang thêm vài bộ quần áo nữa đi.' },
    { who: 'A', name: '小刚', hanzi: '我们是去旅游，不是搬家，还是少带一些吧。', pinyin: 'Wǒmen shì qù lǚyóu, bú shì bān jiā, háishi shǎo dài yìxiē ba.', vi: 'Chúng mình đi du lịch chứ có phải chuyển nhà đâu, mang ít thôi.' },
  ],
  dialogueClips: [
    { label: '01-1 · Nói về kế hoạch cuối tuần', src: A + 'l01-1.mp3' },
    { label: '01-2 · Ở nhà', src: A + 'l01-2.mp3' },
    { label: '01-3 · Nói về kế hoạch đi du lịch', src: A + 'l01-3.mp3' },
    { label: '01-4 · Chuẩn bị đi du lịch', src: A + 'l01-4.mp3' },
  ],
  dialogueTip: '<b>Động từ + 好</b>: làm xong và hài lòng (想好, 买好, 准备好). <b>一 + lượng từ + danh từ + 也/都 + 不/没</b>: hoàn toàn không (一个也不能少). <b>那</b> đầu câu: vậy thì, dựa vào ý câu trước.',
  slowSay: '周末你有什么打算',

  vocab: [
    { hanzi: '周末', pinyin: 'zhōumò', pos: 'danh từ', meaning: 'cuối tuần', han_viet: 'chu mạt' },
    { hanzi: '打算', pinyin: 'dǎsuàn', pos: 'danh từ / động từ', meaning: 'kế hoạch; dự định', han_viet: 'đả toán' },
    { hanzi: '啊', pinyin: 'a', pos: 'trợ từ', meaning: 'được dùng ở cuối câu để khẳng định hay biện hộ cho điều gì', han_viet: '' },
    { hanzi: '跟', pinyin: 'gēn', pos: 'giới từ', meaning: 'cùng, với', han_viet: 'cân' },
    { hanzi: '一直', pinyin: 'yìzhí', pos: 'phó từ', meaning: 'suốt, liên tục', han_viet: 'nhất trực' },
    { hanzi: '游戏', pinyin: 'yóuxì', pos: 'danh từ', meaning: 'trò chơi', han_viet: 'du hí' },
    { hanzi: '作业', pinyin: 'zuòyè', pos: 'danh từ', meaning: 'bài tập về nhà', han_viet: 'tác nghiệp' },
    { hanzi: '着急', pinyin: 'zháojí', pos: 'tính từ', meaning: 'lo lắng', han_viet: 'trước cấp' },
    { hanzi: '复习', pinyin: 'fùxí', pos: 'động từ', meaning: 'ôn tập', han_viet: 'phục tập' },
    { hanzi: '南方', pinyin: 'nánfāng', pos: 'danh từ', meaning: 'phía nam, miền nam', han_viet: 'nam phương' },
    { hanzi: '北方', pinyin: 'běifāng', pos: 'danh từ', meaning: 'phía bắc, miền bắc', han_viet: 'bắc phương' },
    { hanzi: '面包', pinyin: 'miànbāo', pos: 'danh từ', meaning: 'bánh mì', han_viet: 'diện bao' },
    { hanzi: '带', pinyin: 'dài', pos: 'động từ', meaning: 'mang theo', han_viet: 'đới' },
    { hanzi: '地图', pinyin: 'dìtú', pos: 'danh từ', meaning: 'bản đồ', han_viet: 'địa đồ' },
    { hanzi: '搬', pinyin: 'bān', pos: 'động từ', meaning: 'dọn, dời', han_viet: 'ban' },
    { hanzi: '小丽', pinyin: 'Xiǎolì', pos: 'danh từ riêng', meaning: 'chị Lệ (tên người)', han_viet: '' },
    { hanzi: '小刚', pinyin: 'Xiǎogāng', pos: 'danh từ riêng', meaning: 'anh Cương (tên người)', han_viet: '' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Đọc cụm từ', title: 'Đọc to các cụm từ và câu (练习 1)',
      clip: { label: '01-5 · Đọc to các cụm từ và câu', src: A + 'l01-5.mp3' },
      intro: 'Bấm để nghe từng cụm.',
      groups: [{ label: 'Cụm từ', items: [
        ['打算去唱歌', 'dǎsuàn qù chàng gē', 'định đi hát'], ['周末你有什么打算？', 'Zhōumò nǐ yǒu shénme dǎsuàn?', 'Cuối tuần bạn định làm gì?'],
        ['一直写作业', 'yìzhí xiě zuòyè', 'làm bài tập suốt'], ['你怎么一直玩儿？', 'Nǐ zěnme yìzhí wánr?', 'Sao con chơi suốt thế?'],
        ['很着急', 'hěn zháojí', 'rất lo lắng'], ['你怎么一点儿也不着急啊？', 'Nǐ zěnme yìdiǎnr yě bù zháojí a?', 'Sao bạn chẳng lo gì cả?'],
        ['跟小狗玩儿', 'gēn xiǎo gǒu wánr', 'chơi với chó con'], ['你能跟我一起去吗？', 'Nǐ néng gēn wǒ yìqǐ qù ma?', 'Bạn đi cùng tôi được không?'],
        ['带地图', 'dài dìtú', 'mang bản đồ'], ['还是少带一些吧', 'háishi shǎo dài yìxiē ba', 'mang ít thôi'],
      ] }],
    },
    {
      kind: 'examples', label: 'Chữ chỉ sự', title: 'Chữ Hán: chữ chỉ sự (指事字) và cách thành lập từ mới',
      intro: 'Khi sáng tạo ra chữ Hán, do không thể dùng hình ảnh cụ thể để biểu thị một số sự vật trừu tượng nên người Trung Quốc cổ đã sử dụng các ký hiệu trừu tượng. Ghép chữ cũ cũng tạo được từ mới: 旅游 + 客人 → 游客, 外边 + 地方 → 外地, 北方 + 门 → 北门.',
      groups: [
        { label: 'Chữ chỉ sự', items: [['一', 'yī', 'chữ số "một"'], ['二', 'èr', 'chữ số "hai"'], ['三', 'sān', 'chữ số "ba"'], ['上', 'shàng', 'ở phía trên đường chân trời'], ['下', 'xià', 'ở phía dưới đường chân trời'], ['本', 'běn', 'chấm dưới chữ 木: rễ cây'], ['末', 'mò', 'chấm trên chữ 木: ngọn cây']] },
        { label: 'Từ mới ghép từ chữ cũ', items: [['游客', 'yóukè', 'khách du lịch'], ['外地', 'wàidì', 'nơi khác, ngoại tỉnh'], ['北门', 'běimén', 'cổng bắc']] },
      ],
    },
  ],

  notes: [
    {
      title: 'Bổ ngữ chỉ kết quả 好',
      body: 'Bổ ngữ chỉ kết quả 好 được dùng sau động từ để diễn tả hành động được hoàn thành và làm cho người ta cảm thấy hài lòng. So sánh: 我吃完了 chỉ diễn tả hành động đã được hoàn thành; 我吃好了 cho biết người nói không những đã ăn xong mà còn rất hài lòng về bữa ăn. Ví dụ: 今晚的电影小刚已经买好票了。 饭还没做好，请你等一会儿。 去旅游的东西准备好了吗？ 我还没想好要不要跟你去呢。',
      say: '我还没想好要不要跟你去呢',
    },
    {
      title: 'Cấu trúc phủ định hoàn toàn: 一……也/都 + 不/没……',
      body: 'Cấu trúc "一 + lượng từ + danh từ + 也/都 + 不/没 + động từ" diễn tả sự phủ định hoàn toàn: 我一个苹果也不想吃。 昨天他一件衣服都没买。 手机、电脑、地图，一个也不能少。 Đôi lúc "一 + lượng từ" có thể thay bằng 一点儿: 这个星期我很忙，一点儿时间也没有。 Khi vị ngữ là tính từ thì dùng "一点儿也/都 + 不 + tính từ": 他一点儿也不累。 你怎么一点儿也不着急？',
      say: '一个也不能少',
    },
    {
      title: 'Liên từ 那',
      body: '那 được dùng ở đầu câu để chỉ kết quả hay nhận xét dựa vào nội dung được đề cập trước đó. Ví dụ: A: 我不想去看电影。 B: 那我也不去了。 A: (明天的考试)我早就复习好了。 B: 那也不能一直玩儿啊。',
      say: '那也不能一直玩儿啊',
    },
    {
      title: 'Tục ngữ: 不到长城非好汉',
      body: 'Bất đáo Trường Thành phi hảo hán. 非 mang nghĩa "không phải là", 好汉 là anh hùng, người đáng kính nể. Câu này diễn tả ý người chưa từng đến Trường Thành thì không phải là anh hùng, thường được dùng để chỉ thái độ tích cực: một người được xem là hảo hán khi cố gắng tìm cách khắc phục khó khăn và giải quyết những vấn đề mà mình đang đối mặt.',
      say: '不到长城非好汉',
    },
  ],

  writeChars: ['一', '二', '三', '上', '下', '本', '末'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 4)',
      items: [
        { q: '周末小刚打算做什么？', hint: '他打算请小丽吃饭、看电影、喝咖啡。' },
        { q: '小丽要不要跟小刚一起去？', hint: '小丽还没想好。' },
        { q: '儿子在做什么？他准备好考试了吗？', hint: '儿子在玩儿电脑游戏，他已经准备好考试了。' },
        { q: '小丽什么时候去旅游？', hint: '下个月。' },
        { q: '小刚觉得哪儿最好玩儿？为什么？', hint: '他觉得北方最好玩儿，因为天气不冷也不热。' },
        { q: '小刚和小丽带了什么东西？', hint: '他们带了水果、面包、茶、手机、电脑、地图和一些衣服。' },
      ],
    },
    {
      title: 'Hoạt động theo cặp: phản bác bằng 一……也/都 + 不/没…… (运用 1)',
      items: [
        { q: 'A: 我觉得今天很冷。  B: 我觉得一点儿也不冷。我想吃一个苹果。  A: 我一个苹果也不想吃。', hint: 'Từ gợi ý: 买衣服, 爬山, 上网, 着急, 远, 忙.' },
      ],
    },
  ],

  sentences: [
    { parts: ['周末', '你', '有', '什么', '打算'], pinyin: 'Zhōumò nǐ yǒu shénme dǎsuàn?', vi: 'Cuối tuần anh có dự định gì?' },
    { parts: ['我', '已经', '找', '好', '饭馆儿', '了'], pinyin: 'Wǒ yǐjīng zhǎohǎo fànguǎnr le.', vi: 'Anh đã tìm được quán ăn rồi.' },
    { parts: ['你', '怎么', '一点儿', '也', '不', '着急'], pinyin: 'Nǐ zěnme yìdiǎnr yě bù zháojí?', vi: 'Sao con chẳng lo lắng gì cả?' },
    { parts: ['那', '也', '不', '能', '一直', '玩儿', '啊'], pinyin: 'Nà yě bù néng yìzhí wánr a.', vi: 'Thế cũng không được chơi suốt thế.' },
    { parts: ['你', '能', '跟', '我', '一起', '去', '吗'], pinyin: 'Nǐ néng gēn wǒ yìqǐ qù ma?', vi: 'Anh đi cùng em được không?' },
    { parts: ['一', '个', '也', '不', '能', '少'], pinyin: 'Yí ge yě bù néng shǎo.', vi: 'Thiếu một thứ cũng không được.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 周末 · B 带 · C 游戏 · D 跟 · E 作业. Gõ chữ cái A–E.',
      items: [
        { prompt: '你写完（ ）了吗？', answer: 'E', gloss: '作业' }, { prompt: '上个（ ）我们去朋友家玩儿了。', answer: 'A', gloss: '周末' },
        { prompt: '别玩儿（ ）了，快去睡觉。', answer: 'C', gloss: '游戏' }, { prompt: '他说好请我吃饭，但是没（ ）钱。', answer: 'B', gloss: '带' },
        { prompt: '明天我要上课，不能（ ）你们一起去玩儿。', answer: 'D', gloss: '跟' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 南方 · B 搬 · C 面包 · D 地图 · E 打算. Gõ chữ cái A–E.',
      items: [
        { prompt: '你是什么时候（ ）家的？我怎么不知道？', answer: 'B', gloss: '搬' }, { prompt: '你是北方人吗？ 不是，我是（ ）人。', answer: 'A', gloss: '南方' },
        { prompt: '考完试你有什么（ ）？', answer: 'E', gloss: '打算' }, { prompt: '你好，我要买一张（ ）。', answer: 'D', gloss: '地图' },
        { prompt: '累了吧？吃点儿（ ）吧。', answer: 'C', gloss: '面包' },
      ],
    },
    {
      title: 'Giáo trình 注释 · Hoàn thành câu (gõ cụm còn thiếu)',
      hint: 'Gõ đúng cụm chữ Hán theo đáp án sách.',
      items: [
        { prompt: '明天的汉语课我还没（ ）。', answer: '准备好', gloss: 'bổ ngữ 好' }, { prompt: '我们打算去旅行，我已经（ ）火车票了。', answer: '买好', gloss: 'bổ ngữ 好' },
        { prompt: '快（ ）衣服，我们准备出门了。', answer: '穿好', gloss: 'bổ ngữ 好' }, { prompt: '这些汉字太难了，我（ ）。(不认识)', answer: '一个字也不认识', accept: ['一个也不认识', '一个字都不认识'], gloss: 'phủ định hoàn toàn' },
        { prompt: '这件衣服真便宜，（ ）。(不贵)', answer: '一点儿也不贵', accept: ['一点儿都不贵'], gloss: 'phủ định hoàn toàn' }, { prompt: '我没带钱，（ ）。(没买)', answer: '一点儿东西也没买', accept: ['一点儿东西都没买', '一件东西也没买'], gloss: 'phủ định hoàn toàn' },
      ],
    },
  ],
}
