import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 3, Bài 3: 桌子上放着很多饮料。 (sách trang 36–44).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách.
 * Nghe: 03-1…03-5. Bài tập: 练习 2–4 của giáo trình, đáp án theo "Đáp án giáo trình HSK 3" trang 5–6.
 */

const A = '/audio/hsk-std3/'

export const hskStd3Lesson3: Lesson = {
  id: 3,
  title: 'Trên bàn có rất nhiều thức uống.',
  hanzi: '桌子上放着很多饮料。',
  pinyin: 'Zhuōzi shang fàngzhe hěn duō yǐnliào.',
  vi: 'Trên bàn có rất nhiều thức uống.',
  intro: 'Nói về việc lựa chọn và sự tồn tại của đồ vật. Học 还是 và 或者, cách diễn tả sự tồn tại (từ chỉ vị trí + động từ + 着 + số lượng từ + danh từ), trợ động từ 会 chỉ khả năng.',

  dialogue: [
    { who: 'A', name: '小刚', hanzi: '明天是晴天还是阴天？', pinyin: 'Míngtiān shì qíngtiān háishi yīntiān?', vi: 'Ngày mai trời nắng hay âm u?', scene: 'Hội thoại 1 · Ở nhà của chị Lệ' },
    { who: 'B', name: '小丽', hanzi: '阴天，电视上说多云。怎么了？有事？', pinyin: 'Yīntiān, diànshì shang shuō duōyún. Zěnme le? Yǒu shì?', vi: 'Âm u, ti vi nói nhiều mây. Sao thế? Có việc à?' },
    { who: 'A', name: '小刚', hanzi: '没事，我们明天要去爬山。', pinyin: 'Méi shì, wǒmen míngtiān yào qù pá shān.', vi: 'Không có gì, mai bọn anh định đi leo núi.' },
    { who: 'B', name: '小丽', hanzi: '爬山的时候要小心点儿。', pinyin: 'Pá shān de shíhou yào xiǎoxīn diǎnr.', vi: 'Lúc leo núi phải cẩn thận nhé.' },
    { who: 'A', name: '小刚', hanzi: '好，你也去吗？', pinyin: 'Hǎo, nǐ yě qù ma?', vi: 'Được, em cũng đi chứ?' },
    { who: 'B', name: '小丽', hanzi: '我不去，我有事。', pinyin: 'Wǒ bú qù, wǒ yǒu shì.', vi: 'Em không đi, em có việc.' },
    { who: 'A', name: '周太太', hanzi: '你觉得这条裤子怎么样？', pinyin: 'Nǐ juéde zhè tiáo kùzi zěnmeyàng?', vi: 'Anh thấy cái quần này thế nào?', scene: 'Hội thoại 2 · Ở cửa hàng bách hóa' },
    { who: 'B', name: '周明', hanzi: '我记得你已经有两条这样的裤子了。', pinyin: 'Wǒ jìde nǐ yǐjīng yǒu liǎng tiáo zhèyàng de kùzi le.', vi: 'Anh nhớ là em đã có hai cái quần như thế này rồi.' },
    { who: 'A', name: '周太太', hanzi: '那我们再看看别的。', pinyin: 'Nà wǒmen zài kànkan biéde.', vi: 'Vậy mình xem cái khác.' },
    { who: 'B', name: '周明', hanzi: '这件衬衫怎么样？', pinyin: 'Zhè jiàn chènshān zěnmeyàng?', vi: 'Cái áo sơ mi này thế nào?' },
    { who: 'A', name: '周太太', hanzi: '还不错，多少钱？', pinyin: 'Hái búcuò, duōshao qián?', vi: 'Cũng được, bao nhiêu tiền?' },
    { who: 'B', name: '周明', hanzi: '这上面写着320元。', pinyin: 'Zhè shàngmiàn xiězhe sānbǎi èrshí yuán.', vi: 'Trên này ghi 320 tệ.' },
    { who: 'A', name: '周太太', hanzi: '买一件。', pinyin: 'Mǎi yí jiàn.', vi: 'Mua một cái.' },
    { who: 'A', name: '周太太', hanzi: '这些水果真新鲜，我们买西瓜还是苹果？', pinyin: 'Zhèxiē shuǐguǒ zhēn xīnxiān, wǒmen mǎi xīguā háishi píngguǒ?', vi: 'Hoa quả này tươi thật, mình mua dưa hấu hay táo?', scene: 'Hội thoại 3 · Ở cửa hàng trái cây' },
    { who: 'B', name: '周明', hanzi: '西瓜吧。你看，这上面写着"西瓜不甜不要钱"。', pinyin: 'Xīguā ba. Nǐ kàn, zhè shàngmiàn xiězhe "xīguā bù tián bú yào qián".', vi: 'Dưa hấu đi. Em xem, trên này ghi "dưa không ngọt không lấy tiền".' },
    { who: 'A', name: '周太太', hanzi: '那我们买一个大点儿的吧。', pinyin: 'Nà wǒmen mǎi yí ge dà diǎnr de ba.', vi: 'Vậy mình mua quả to một chút.' },
    { who: 'B', name: '周明', hanzi: '再买几个苹果。', pinyin: 'Zài mǎi jǐ ge píngguǒ.', vi: 'Mua thêm mấy quả táo.' },
    { who: 'A', name: '周太太', hanzi: '好啊，今天晚上只吃水果不吃饭！', pinyin: 'Hǎo a, jīntiān wǎnshang zhǐ chī shuǐguǒ bù chī fàn!', vi: 'Được, tối nay chỉ ăn hoa quả, không ăn cơm!' },
    { who: 'A', name: '小丽', hanzi: '桌子上放着很多饮料，你喝什么？', pinyin: 'Zhuōzi shang fàngzhe hěn duō yǐnliào, nǐ hē shénme?', vi: 'Trên bàn có rất nhiều đồ uống, anh uống gì?', scene: 'Hội thoại 4 · Trong phòng giải lao' },
    { who: 'B', name: '小刚', hanzi: '茶或者咖啡都可以。你呢？你喝什么？', pinyin: 'Chá huòzhě kāfēi dōu kěyǐ. Nǐ ne? Nǐ hē shénme?', vi: 'Trà hoặc cà phê đều được. Còn em uống gì?' },
    { who: 'A', name: '小丽', hanzi: '我喝茶，茶是我的最爱。天冷了或者工作累了的时候，喝杯热茶会很舒服。', pinyin: 'Wǒ hē chá, chá shì wǒ de zuì ài. Tiān lěng le huòzhě gōngzuò lèi le de shíhou, hē bēi rè chá huì hěn shūfu.', vi: 'Em uống trà, trà là thứ em thích nhất. Khi trời lạnh hoặc làm việc mệt, uống một cốc trà nóng sẽ rất dễ chịu.' },
    { who: 'B', name: '小刚', hanzi: '你喜欢喝什么茶？', pinyin: 'Nǐ xǐhuan hē shénme chá?', vi: 'Em thích uống trà gì?' },
    { who: 'A', name: '小丽', hanzi: '花茶、绿茶、红茶，我都喜欢。', pinyin: 'Huāchá, lǜchá, hóngchá, wǒ dōu xǐhuan.', vi: 'Trà hoa, trà xanh, trà đen, em đều thích.' },
  ],
  dialogueClips: [
    { label: '03-1 · Ở nhà của chị Lệ', src: A + 'l03-1.mp3' },
    { label: '03-2 · Ở cửa hàng bách hóa', src: A + 'l03-2.mp3' },
    { label: '03-3 · Ở cửa hàng trái cây', src: A + 'l03-3.mp3' },
    { label: '03-4 · Trong phòng giải lao', src: A + 'l03-4.mp3' },
  ],
  dialogueTip: '<b>还是</b> dùng trong câu hỏi lựa chọn (买西瓜还是苹果？), <b>或者</b> dùng trong câu trần thuật (茶或者咖啡都可以). <b>Vị trí + động từ + 着 + số lượng + danh từ</b>: ở đâu có gì (桌子上放着很多饮料). <b>会</b> chỉ khả năng xảy ra: 喝杯热茶会很舒服.',
  slowSay: '桌子上放着很多饮料',

  vocab: [
    { hanzi: '还是', pinyin: 'háishi', pos: 'liên từ', meaning: 'hay', han_viet: 'hoàn thị' },
    { hanzi: '爬山', pinyin: 'pá shān', pos: 'động từ', meaning: 'leo núi', han_viet: 'ba sơn' },
    { hanzi: '小心', pinyin: 'xiǎoxīn', pos: 'tính từ', meaning: 'cẩn thận', han_viet: 'tiểu tâm' },
    { hanzi: '条', pinyin: 'tiáo', pos: 'lượng từ', meaning: 'cái (dùng cho quần, váy…)', han_viet: 'điều' },
    { hanzi: '裤子', pinyin: 'kùzi', pos: 'danh từ', meaning: 'quần', han_viet: 'khố tử' },
    { hanzi: '记得', pinyin: 'jìde', pos: 'động từ', meaning: 'nhớ, còn nhớ', han_viet: 'ký đắc' },
    { hanzi: '衬衫', pinyin: 'chènshān', pos: 'danh từ', meaning: 'áo sơ mi', han_viet: 'sấn sam' },
    { hanzi: '元', pinyin: 'yuán', pos: 'lượng từ', meaning: 'đồng (đơn vị tiền tệ)', han_viet: 'nguyên' },
    { hanzi: '新鲜', pinyin: 'xīnxiān', pos: 'tính từ', meaning: 'tươi', han_viet: 'tân tiên' },
    { hanzi: '甜', pinyin: 'tián', pos: 'tính từ', meaning: 'ngọt', han_viet: 'điềm' },
    { hanzi: '只', pinyin: 'zhǐ', pos: 'phó từ', meaning: 'chỉ', han_viet: 'chỉ' },
    { hanzi: '放', pinyin: 'fàng', pos: 'động từ', meaning: 'đặt, để', han_viet: 'phóng' },
    { hanzi: '饮料', pinyin: 'yǐnliào', pos: 'danh từ', meaning: 'đồ uống, thức uống', han_viet: 'ẩm liệu' },
    { hanzi: '或者', pinyin: 'huòzhě', pos: 'liên từ', meaning: 'hoặc', han_viet: 'hoặc giả' },
    { hanzi: '舒服', pinyin: 'shūfu', pos: 'tính từ', meaning: 'dễ chịu', han_viet: 'thư phục' },
    { hanzi: '花', pinyin: 'huā', pos: 'danh từ', meaning: 'hoa', han_viet: 'hoa' },
    { hanzi: '绿', pinyin: 'lǜ', pos: 'tính từ', meaning: 'có màu xanh lá cây', han_viet: 'lục' },
  ],

  sections: [
    {
      kind: 'examples', label: '还是 · 或者', title: '还是 và 或者',
      intro: 'Thông thường 还是 được dùng trong câu hỏi còn 或者 được dùng trong câu trần thuật. Đối với những câu có mệnh đề mang hình thức nghi vấn, ta chỉ được dùng 还是 trong mệnh đề đó.',
      groups: [
        { label: '还是 (câu hỏi)', items: [['你要喝咖啡还是喝茶？', 'Nǐ yào hē kāfēi háishi hē chá?', 'Bạn uống cà phê hay trà?'], ['明天是晴天还是阴天？', 'Míngtiān shì qíngtiān háishi yīntiān?', 'Mai nắng hay âm u?']] },
        { label: '或者 (câu trần thuật)', items: [['今天晚上吃米饭或者面条都可以。', 'Jīntiān wǎnshang chī mǐfàn huòzhě miàntiáo dōu kěyǐ.', 'Tối nay ăn cơm hoặc mì đều được.'], ['天冷了或者工作累了的时候，喝杯热茶很舒服。', 'Tiān lěng le huòzhě gōngzuò lèi le de shíhou, hē bēi rè chá hěn shūfu.', 'Khi trời lạnh hoặc làm mệt, uống cốc trà nóng rất dễ chịu.']] },
        { label: 'Mệnh đề nghi vấn: chỉ dùng 还是', items: [['周太太40岁还是50岁，我们不知道。', 'Zhōu tàitai sìshí suì háishi wǔshí suì, wǒmen bù zhīdào.', 'Bà Châu 40 hay 50 tuổi, chúng tôi không biết.'], ['他的生日是10月还是11月，我不记得了。', 'Tā de shēngrì shì shí yuè háishi shíyī yuè, wǒ bú jìde le.', 'Sinh nhật anh ấy tháng 10 hay 11, tôi không nhớ.'], ['我不知道这个人是男的还是女的。', 'Wǒ bù zhīdào zhège rén shì nán de háishi nǚ de.', 'Tôi không biết người này là nam hay nữ.']] },
      ],
    },
    {
      kind: 'examples', label: 'Diễn tả tồn tại', title: 'Cách diễn tả sự tồn tại: vị trí + động từ + 着 + số lượng từ + danh từ',
      intro: 'Cấu trúc này diễn tả ở nơi nào đó có vật gì. Động từ thường dùng: 放, 写, 坐, 住… Cụm danh từ thường chỉ sự vật không xác định (一本书, 几个人), không dùng cụm xác định như 这本书, 周经理. Phủ định: vị trí + 没 + động từ (+ 着) + cụm danh từ, trước danh từ không có lượng từ.',
      groups: [
        { label: 'Khẳng định', items: [['桌子上放着一杯咖啡。', 'Zhuōzi shang fàngzhe yì bēi kāfēi.', 'Trên bàn đặt một cốc cà phê.'], ['我家楼上住着一个老师。', 'Wǒ jiā lóu shang zhùzhe yí ge lǎoshī.', 'Tầng trên nhà tôi có một thầy giáo ở.'], ['上面写着320元。', 'Shàngmiàn xiězhe sānbǎi èrshí yuán.', 'Trên đó ghi 320 tệ.'], ['桌子上放着很多饮料。', 'Zhuōzi shang fàngzhe hěn duō yǐnliào.', 'Trên bàn có rất nhiều đồ uống.']] },
        { label: 'Phủ định: 没 + động từ + 着', items: [['桌子上没放着咖啡。', 'Zhuōzi shang méi fàngzhe kāfēi.', 'Trên bàn không có cà phê.'], ['我家楼上没住着老师。', 'Wǒ jiā lóu shang méi zhùzhe lǎoshī.', 'Tầng trên nhà tôi không có thầy giáo nào ở.'], ['上面没写着多少钱。', 'Shàngmiàn méi xiězhe duōshao qián.', 'Trên đó không ghi bao nhiêu tiền.']] },
      ],
    },
    {
      kind: 'examples', label: 'Đọc cụm từ', title: 'Đọc to các cụm từ và câu (练习 1)',
      clip: { label: '03-5 · Đọc to các cụm từ và câu', src: A + 'l03-5.mp3' },
      intro: 'Bấm để nghe từng cụm. Cách thành lập từ mới: 新鲜 + 牛奶 → 鲜奶, 冷 + 饮料 → 冷饮, 上边 + 前面 → 上面.',
      groups: [{ label: 'Cụm từ', items: [
        ['不记得', 'bú jìde', 'không nhớ'], ['你还记得我吗？', 'Nǐ hái jìde wǒ ma?', 'Bạn còn nhớ tôi không?'],
        ['这些水果真新鲜', 'zhèxiē shuǐguǒ zhēn xīnxiān', 'hoa quả này tươi thật'], ['放在桌子上', 'fàng zài zhuōzi shang', 'đặt trên bàn'],
        ['只学汉语', 'zhǐ xué Hànyǔ', 'chỉ học tiếng Hán'], ['一条鱼', 'yì tiáo yú', 'một con cá'],
        ['鲜奶', 'xiānnǎi', 'sữa tươi'], ['冷饮', 'lěngyǐn', 'đồ uống lạnh'], ['上面', 'shàngmiàn', 'phía trên'],
      ] }],
    },
  ],

  notes: [
    {
      title: '还是 và 或者',
      body: '还是 và 或者 được dùng để diễn tả sự lựa chọn. Thông thường 还是 được dùng trong câu hỏi còn 或者 được dùng trong câu trần thuật. Ví dụ: 你要喝咖啡还是喝茶？ 今天晚上吃米饭或者面条都可以。 Đối với những câu có mệnh đề mang hình thức nghi vấn, ta chỉ được dùng 还是: 周太太40岁还是50岁，我们不知道。',
      say: '我们买西瓜还是苹果',
    },
    {
      title: 'Cách diễn tả sự tồn tại',
      body: 'Từ/cụm từ chỉ vị trí + động từ + 着 + từ chỉ số đếm + lượng từ + danh từ diễn tả ở nơi nào đó có vật gì: 桌子上放着一杯咖啡。 上面写着320元。 Dạng phủ định: vị trí + 没 + động từ + 着 + cụm danh từ, trước cụm danh từ không có lượng từ: 桌子上没放着咖啡。',
      say: '桌子上放着很多饮料',
    },
    {
      title: 'Trợ động từ 会 (khả năng)',
      body: 'Trợ động từ 会 được dùng trong câu để chỉ khả năng, thường được sử dụng để diễn tả những sự việc chưa xảy ra. Ví dụ: 你穿得那么少，会感冒的。 别担心，我会照顾好自己。 你不给他打电话吗，他会不高兴的。 喝杯热茶会很舒服。',
      say: '喝杯热茶会很舒服',
    },
    {
      title: 'Tục ngữ: 茶好客常来',
      body: 'Trà ngon khách sẽ đến thường. Câu này thường được dùng với hàm ý: hàng hóa tốt chắc chắn sẽ được khách hàng ưa chuộng.',
      say: '茶好客常来',
    },
  ],

  writeChars: ['饮', '料', '裤', '衬', '衫', '甜', '绿', '放'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 4)',
      items: [
        { q: '明天小刚去做什么？小丽也去吗？', hint: '明天小刚要去爬山，小丽不去。' },
        { q: '周太太买裤子了吗？为什么？', hint: '周太太没买裤子，因为她已经有两条一样的裤子了。' },
        { q: '周太太买什么了？多少钱？', hint: '周太太买了一件衬衫，320元。' },
        { q: '周明和太太买了什么水果？', hint: '他们买了西瓜和苹果。' },
        { q: '小刚喜欢喝什么？', hint: '他喜欢喝茶和咖啡。' },
        { q: '小丽喜欢喝什么？为什么？', hint: '她喜欢喝茶，因为天冷了或者工作累了的时候，喝杯热茶会让她觉得很舒服。' },
      ],
    },
    {
      title: 'Hoạt động theo cặp: hỏi sở thích bằng 还是 (运用 1)',
      items: [
        { q: '你喜欢早睡早起还是晚睡晚起？', hint: 'Trả lời bằng một trong hai lựa chọn.' },
        { q: '早饭你常喝咖啡还是牛奶？', hint: '' },
        { q: '你喜欢走路还是坐车？', hint: '' },
        { q: '你喜欢晴天还是雨天？', hint: '' },
        { q: '你喜欢看电视还是看电影？', hint: '' },
        { q: '你喜欢饭前吃水果还是饭后吃水果？', hint: '' },
      ],
    },
  ],

  sentences: [
    { parts: ['明天', '是', '晴天', '还是', '阴天'], pinyin: 'Míngtiān shì qíngtiān háishi yīntiān?', vi: 'Mai trời nắng hay âm u?' },
    { parts: ['爬', '山', '的', '时候', '要', '小心', '点儿'], pinyin: 'Pá shān de shíhou yào xiǎoxīn diǎnr.', vi: 'Lúc leo núi phải cẩn thận.' },
    { parts: ['我', '记得', '你', '已经', '有', '两', '条', '这样', '的', '裤子', '了'], pinyin: 'Wǒ jìde nǐ yǐjīng yǒu liǎng tiáo zhèyàng de kùzi le.', vi: 'Anh nhớ em đã có hai cái quần như thế rồi.' },
    { parts: ['这', '上面', '写', '着', '320', '元'], pinyin: 'Zhè shàngmiàn xiězhe sānbǎi èrshí yuán.', vi: 'Trên này ghi 320 tệ.' },
    { parts: ['桌子', '上', '放', '着', '很', '多', '饮料'], pinyin: 'Zhuōzi shang fàngzhe hěn duō yǐnliào.', vi: 'Trên bàn có rất nhiều đồ uống.' },
    { parts: ['茶', '或者', '咖啡', '都', '可以'], pinyin: 'Chá huòzhě kāfēi dōu kěyǐ.', vi: 'Trà hoặc cà phê đều được.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 舒服 · B 裤子 · C 衬衫 · D 或者 · E 还是. Gõ chữ cái A–E.',
      items: [
        { prompt: '你想喝点儿什么？茶（ ）咖啡？', answer: 'E', gloss: '还是' }, { prompt: '这条（ ）一点儿也不贵，买吧。', answer: 'B', gloss: '裤子' },
        { prompt: '我每个周末都在家看电视（ ）听音乐，不工作。', answer: 'D', gloss: '或者' }, { prompt: '你穿昨天新买的那件（ ）吧。', answer: 'C', gloss: '衬衫' },
        { prompt: '我不喜欢南方，太热了，不（ ）。', answer: 'A', gloss: '舒服' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 小心 · B 爬山 · C 只 · D 放 · E 记得. Gõ chữ cái A–E.',
      items: [
        { prompt: '我们看过这个电影，你（ ）是什么时候吗？ 去年8月。', answer: 'E', gloss: '记得' }, { prompt: '你跟我一起出去走走吧。 我现在（ ）想睡觉。', answer: 'C', gloss: '只' },
        { prompt: '饭菜做好了吗？ 做好了，已经（ ）饭桌上了。', answer: 'D', gloss: '放' }, { prompt: '您慢走，路上（ ）点儿。', answer: 'A', gloss: '小心' },
        { prompt: '上个周末你去哪儿了？ 我跟朋友去（ ）了。', answer: 'B', gloss: '爬山' },
      ],
    },
    {
      title: 'Giáo trình 注释 · Hoàn thành câu (gõ cụm còn thiếu)',
      hint: 'Gõ đúng cụm chữ Hán theo đáp án sách.',
      items: [
        { prompt: '你喜欢看书（ ）玩儿电子游戏？', answer: '还是', gloss: '还是' }, { prompt: '我们出去吧，买东西（ ）看电影。', answer: '或者', gloss: '或者' },
        { prompt: '我还没想好穿红色的裤子（ ）咖啡色的裤子。', answer: '还是', gloss: '还是' }, { prompt: '我家的桌子上放着（ ）。', answer: '几本书', accept: ['一本书'], gloss: 'sự tồn tại' },
        { prompt: '我的电脑旁边没放着（ ）。', answer: '手机', gloss: 'sự tồn tại' }, { prompt: '公共汽车上坐着（ ）。', answer: '许多乘客', accept: ['很多乘客'], gloss: 'sự tồn tại' },
        { prompt: '快起床吧，你（ ）。', answer: '会迟到的', gloss: '会' },
      ],
    },
  ],
}
