import type { Lesson } from '../types'

/** Giáo trình chuẩn HSK 5 (Thượng), Bài 22: 阅读与思考. Nghĩa từ mới và ngữ pháp theo sách; dịch bài khóa do app thêm. Không có file nghe. Đáp án theo HSK5-BH1. */

export const hskStd5Lesson22: Lesson = {
  id: 22,
  title: "Đọc và suy nghĩ",
  hanzi: "阅读与思考",
  pinyin: "Yuèdú yǔ sīkǎo",
  vi: "Đọc và suy nghĩ",
  intro: "Bàn về cách đọc truyện cổ tích và tư duy. Học 公平 – 平等 và từ vựng viết luận.",

  dialogue: [
    { who: 'A', name: '课文', hanzi: "很多家长可能过分强调阅读的作用，觉得多读书就能够把作文写得特别好。这个观点是不客观、不全面的，我们需要转变自己的观念。", pinyin: "", vi: "Nhiều phụ huynh có thể nhấn mạnh quá mức vai trò đọc sách, cho rằng đọc nhiều thì viết văn đặc biệt hay. Quan điểm này không khách quan, không toàn diện, ta cần thay đổi quan niệm.", scene: "Mở đầu" },
    { who: 'A', name: '课文', hanzi: "我曾经听一位美国的小学老师说，他们十分重视和学生一起讨论问题。比如，他们讨论过《卖火柴的小女孩儿》是写给谁看的，还讨论过灰姑娘的故事。老师讲完故事之后，问同学们：灰姑娘一旦进了这个王宫，成为王子的心上人，她的梦想实现了，一切幸福都属于她之后，这时她应该怎样对待她的继母，应该怎样对待她的两个姐姐？", pinyin: "", vi: "Tôi từng nghe một giáo viên tiểu học Mỹ nói họ rất coi trọng cùng học sinh thảo luận vấn đề. Ví dụ họ thảo luận \"Cô bé bán diêm\" viết cho ai đọc, cũng thảo luận chuyện Lọ Lem. Kể xong, thầy hỏi: Lọ Lem một khi vào cung, thành người trong lòng hoàng tử, mơ ước thành hiện thực, mọi hạnh phúc thuộc về cô, lúc ấy cô nên đối xử với mẹ kế thế nào, với hai chị thế nào?", scene: "Thảo luận ở lớp" },
    { who: 'A', name: '课文', hanzi: "为什么要讨论这个问题呢？因为这是一种情感交换。老师和学生通过讨论得出的结论是：一个已经拥有巨大幸福的人，应该原谅和理解那些伤害过自己的人。另外还要承认人性中一些先天的不完美，就是说作为一个母亲，在自己的亲生女儿和并不是亲生的灰姑娘之间，难免会更疼爱自己亲生的女儿，很难完全平等地对待她们。可能你觉得继母很自私，但这种行为有自然倾向的理由，与道德没有必然的关系。", pinyin: "", vi: "Vì sao thảo luận vấn đề này? Vì đây là sự trao đổi tình cảm. Kết luận thầy trò rút ra: người đã có hạnh phúc lớn nên tha thứ và thông cảm cho người từng làm hại mình. Ngoài ra còn phải thừa nhận một số khiếm khuyết bẩm sinh của bản tính con người: làm mẹ, giữa con gái ruột và Lọ Lem không phải ruột thịt, khó tránh thương con ruột hơn, khó đối xử hoàn toàn bình đẳng. Có thể bạn thấy mẹ kế ích kỷ, nhưng hành vi này có lý do thiên hướng tự nhiên, không nhất thiết liên quan đạo đức.", scene: "Kết luận" },
    { who: 'A', name: '课文', hanzi: "自从我听说了这件事，就开始思考应该如何阅读，除了阅读还应该做什么。你看这个老师在讲童话的时候，已经在有意识地把这种情感影响，甚至把人性的价值判断，都给了孩子们。如果只是单纯地主张阅读而不强调思考，那是片面的。“知识”两个字我始终认为它是要分开来谈的，“知”就是知感，“识”就是认识。所谓“知感”就是别人告诉你、说给你听、要求你记住的那一部分。但只有这一部分是不够的，还要有认识、思考。", pinyin: "", vi: "Từ khi nghe chuyện này tôi bắt đầu nghĩ nên đọc thế nào, ngoài đọc còn nên làm gì. Bạn xem thầy kể truyện cổ tích, đã có ý thức trao cho trẻ ảnh hưởng tình cảm này, thậm chí cả phán đoán giá trị về nhân tính. Nếu chỉ đơn thuần chủ trương đọc mà không nhấn mạnh suy nghĩ là phiến diện. Hai chữ \"知识\" tôi luôn cho là phải tách ra bàn: \"知\" là tri cảm, \"识\" là nhận thức. Cái gọi là \"tri cảm\" là phần người khác nói cho bạn, bắt bạn nhớ. Nhưng chỉ phần này thì chưa đủ, còn cần nhận thức, suy nghĩ.", scene: "Đọc và suy nghĩ" },
  ],
  dialogueTip: "<b>公平</b>/<b>平等</b>.",
  slowSay: "阅读与思考",

  vocab: [
    { hanzi: "过分", pinyin: "guòfèn", pos: "tính từ", meaning: "quá đáng", han_viet: '' },
    { hanzi: "强调", pinyin: "qiángdiào", pos: "động từ", meaning: "nhấn mạnh", han_viet: '' },
    { hanzi: "作文", pinyin: "zuòwén", pos: "danh từ", meaning: "bài làm văn", han_viet: '' },
    { hanzi: "观点", pinyin: "guāndiǎn", pos: "danh từ", meaning: "quan điểm", han_viet: '' },
    { hanzi: "客观", pinyin: "kèguān", pos: "tính từ", meaning: "khách quan", han_viet: '' },
    { hanzi: "全面", pinyin: "quánmiàn", pos: "tính từ", meaning: "toàn diện", han_viet: '' },
    { hanzi: "转变", pinyin: "zhuǎnbiàn", pos: "động từ", meaning: "thay đổi", han_viet: '' },
    { hanzi: "观念", pinyin: "guānniàn", pos: "danh từ", meaning: "quan niệm", han_viet: '' },
    { hanzi: "火柴", pinyin: "huǒchái", pos: "danh từ", meaning: "diêm", han_viet: '' },
    { hanzi: "灰", pinyin: "huī", pos: "danh từ/tính từ", meaning: "tro; xám", han_viet: '' },
    { hanzi: "一旦", pinyin: "yídàn", pos: "phó từ", meaning: "một khi", han_viet: '' },
    { hanzi: "王宫", pinyin: "wánggōng", pos: "danh từ", meaning: "hoàng cung", han_viet: '' },
    { hanzi: "王子", pinyin: "wángzǐ", pos: "danh từ", meaning: "hoàng tử", han_viet: '' },
    { hanzi: "属于", pinyin: "shǔyú", pos: "động từ", meaning: "thuộc về", han_viet: '' },
    { hanzi: "对待", pinyin: "duìdài", pos: "động từ", meaning: "đối xử", han_viet: '' },
    { hanzi: "交换", pinyin: "jiāohuàn", pos: "động từ", meaning: "trao đổi", han_viet: '' },
    { hanzi: "拥有", pinyin: "yōngyǒu", pos: "động từ", meaning: "có", han_viet: '' },
    { hanzi: "巨大", pinyin: "jùdà", pos: "tính từ", meaning: "to lớn", han_viet: '' },
    { hanzi: "承认", pinyin: "chéngrèn", pos: "động từ", meaning: "thừa nhận", han_viet: '' },
    { hanzi: "人性", pinyin: "rénxìng", pos: "danh từ", meaning: "bản tính con người", han_viet: '' },
    { hanzi: "完美", pinyin: "wánměi", pos: "tính từ", meaning: "hoàn mỹ", han_viet: '' },
    { hanzi: "难免", pinyin: "nánmiǎn", pos: "tính từ", meaning: "khó tránh", han_viet: '' },
    { hanzi: "疼爱", pinyin: "téng’ài", pos: "động từ", meaning: "thương yêu", han_viet: '' },
    { hanzi: "平等", pinyin: "píngděng", pos: "tính từ", meaning: "bình đẳng", han_viet: '' },
    { hanzi: "自私", pinyin: "zìsī", pos: "tính từ", meaning: "ích kỷ", han_viet: '' },
    { hanzi: "倾向", pinyin: "qīngxiàng", pos: "động từ/danh từ", meaning: "nghiêng về", han_viet: '' },
    { hanzi: "理由", pinyin: "lǐyóu", pos: "danh từ", meaning: "lý do", han_viet: '' },
    { hanzi: "道德", pinyin: "dàodé", pos: "danh từ", meaning: "đạo đức", han_viet: '' },
    { hanzi: "自从", pinyin: "zìcóng", pos: "giới từ", meaning: "từ khi", han_viet: '' },
    { hanzi: "童话", pinyin: "tónghuà", pos: "danh từ", meaning: "truyện cổ tích", han_viet: '' },
    { hanzi: "价值", pinyin: "jiàzhí", pos: "danh từ", meaning: "giá trị", han_viet: '' },
    { hanzi: "单纯", pinyin: "dānchún", pos: "tính từ", meaning: "đơn thuần", han_viet: '' },
    { hanzi: "主张", pinyin: "zhǔzhāng", pos: "động từ", meaning: "chủ trương", han_viet: '' },
    { hanzi: "知感", pinyin: "zhīgǎn", pos: "danh từ", meaning: "tri giác", han_viet: '' },
  ],

  sections: [
    { kind: 'examples', label: "公平 – 平等", title: "So sánh 公平 và 平等", intro: "公平: công bằng, không thiên vị (xử lý sự việc, cạnh tranh); 平等: ngang hàng về địa vị, quyền lợi giữa người với người.", groups: [{ label: 'Ví dụ', items: [["这次比赛很公平，没有什么问题。", "Zhè cì bǐsài hěn gōngpíng, méiyǒu shénme wèntí.", "Trận này rất công bằng, không vấn đề gì."], ["人生来是平等的，人人都有权追求自由和幸福。", "Rén shēnglái shì píngděng de, rénrén dōu yǒu quán zhuīqiú zìyóu hé xìngfú.", "Con người sinh ra bình đẳng, ai cũng có quyền theo đuổi tự do hạnh phúc."]] }] },
  ],

  notes: [
    { title: "公平/平等", body: "Công bằng / bình đẳng.", say: "平等地对待她们" },
  ],

  writeChars: ["阅", "读", "思", "考", "观", "念", "童", "话"],

  drills: [],

  qa: [{ title: 'Hoạt động (运用)', items: [{"q": "你喜欢写作文吗？怎样提高写作水平？", "hint": "……"}, {"q": "你读过《灰姑娘》吗？如果是灰姑娘你会怎么对待继母？", "hint": "……"}] }],

  sentences: [],

  dictations: [
    { title: "Giáo trình 练习 1 / 2 / 扩展", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "你应该勇敢地（ ）。", answer: "承认", gloss: "thừa nhận" },
      { prompt: "很难做到任何时候都很（ ）。", answer: "客观", gloss: "khách quan" },
      { prompt: "你的这个建议很有（ ）。", answer: "价值", gloss: "giá trị" },
      { prompt: "他（ ）将会议地点改在上海。", answer: "主张", gloss: "chủ trương" },
      { prompt: "你这种做法太（ ）了。", answer: "过分", gloss: "quá đáng" },
      { prompt: "希望你能给我一个好的（ ）。", answer: "理由", gloss: "lý do" },
      { prompt: "你可以试着（ ）一下思路。", answer: "转变", gloss: "thay đổi" },
      { prompt: "我不同意你的（ ）。", answer: "观点", gloss: "quan điểm" },
      { prompt: "这次新产品销售得不好的（ ）是宣传推广做得不够。", answer: "原因", gloss: "nguyên nhân" },
      { prompt: "他太（ ）了，很容易被人骗。", answer: "单纯", gloss: "đơn thuần" },
      { prompt: "这次比赛很（ ）。", answer: "公平", gloss: "công bằng" },
      { prompt: "人生来是（ ）的。", answer: "平等", gloss: "bình đẳng" },
      { prompt: "先看看前面的（ ），了解书的大概内容。", answer: "目录", gloss: "mục lục" },
      { prompt: "算不上是一篇（ ）。", answer: "论文", gloss: "luận văn" },
      { prompt: "这个地方的（ ）用错了。", answer: "标点", gloss: "dấu câu" },
      { prompt: "你现在完全是在说（ ）。", answer: "废话", gloss: "lời thừa" },
    ] },
  ],
}
