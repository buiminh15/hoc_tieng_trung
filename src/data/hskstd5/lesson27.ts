import type { Lesson } from '../types'

/** Giáo trình chuẩn HSK 5 (Thượng), Bài 27: 下棋. Nghĩa từ mới và ngữ pháp theo sách; dịch bài khóa do app thêm. Không có file nghe. Đáp án theo HSK5-BH1. */

export const hskStd5Lesson27: Lesson = {
  id: 27,
  title: "Đánh cờ",
  hanzi: "下棋",
  pinyin: "Xià qí",
  vi: "Đánh cờ",
  intro: "Bài học về được và mất qua ván cờ tướng cùng cha. Học động từ + 下来, 舍不得 và 失去 – 损失.",

  dialogue: [
    { who: 'A', name: '课文', hanzi: "我父亲是一位象棋教练。那一年，我大学放假回家，父亲要跟我下棋，我高兴地答应了。父亲让我先走三步。不到三分钟，我的棋子损失大半，棋盘上空空的，只剩下几个子了。没办法，眼睁睁看着父亲“将军”，我输了。我不服气，说：“这次运气不好，再来！”第二局又输了，“这次没发挥好，我们再来”！几局下来，基本上都是不到10分钟我就败下阵来。我有些灰心。父亲看看我说：“你初学棋，输是正常的。但是你要知道输在什么地方，要吸取教训。否则，你就再下上10年，也未必能赢。”", pinyin: "", vi: "Cha tôi là huấn luyện viên cờ tướng. Năm đó nghỉ đại học về nhà, cha muốn đánh cờ với tôi, tôi vui vẻ nhận lời. Cha nhường tôi đi trước ba nước. Chưa đến ba phút quân tôi mất quá nửa, bàn cờ trống trơn, chỉ còn vài quân. Hết cách, tôi trơ mắt nhìn cha \"chiếu tướng\", tôi thua. Tôi không phục: \"Lần này vận xui, đánh lại!\" Ván hai lại thua, \"lần này chưa phát huy tốt, đánh lại\"! Mấy ván trôi qua, hầu như chưa đến 10 phút là tôi bại trận. Tôi hơi nản. Cha nhìn tôi: \"Con mới học cờ, thua là bình thường. Nhưng phải biết thua ở đâu, phải rút bài học. Nếu không, con đánh thêm 10 năm cũng chưa chắc thắng.\"", scene: "Thua cờ" },
    { who: 'A', name: '课文', hanzi: "“我知道，我技术没你好，经验也不足。”“这只是次要因素，不是最重要的。”“那最重要的是什么？”我奇怪地问。“最重要的问题在于你心态不对。你不够珍惜你的棋子。”“怎么不珍惜呀？我每走一步，都想半天。”我否认说。", pinyin: "", vi: "\"Con biết, kỹ thuật con không bằng cha, kinh nghiệm cũng thiếu.\" \"Đó chỉ là yếu tố thứ yếu, không phải quan trọng nhất.\" \"Vậy quan trọng nhất là gì?\" tôi ngạc nhiên hỏi. \"Vấn đề quan trọng nhất là tâm thế con không đúng. Con không đủ trân trọng quân cờ.\" \"Sao không trân trọng? Mỗi nước con đều nghĩ nửa ngày.\" tôi phủ nhận.", scene: "Tâm thế" },
    { who: 'A', name: '课文', hanzi: "“那是后来。开始你是这样吗？我仔细观察过，你三分之二的棋子是在前三分之一的时间失去的。这期间你好像很有把握，下棋时不假思索，拿起来就走，失去了也不觉得可惜。因为你觉得棋子很多，失一两个不算什么。后三分之二的时间，你又犯了相反的错误：对棋子过于珍惜，每走一步都过于谨慎，一个棋子也不想失，反而一个一个都失去了。”", pinyin: "", vi: "\"Đó là về sau. Lúc đầu con thế sao? Cha quan sát kỹ, hai phần ba quân con mất trong một phần ba thời gian đầu. Lúc ấy con có vẻ rất tự tin, đánh không suy nghĩ, cầm lên là đi, mất cũng chẳng tiếc, vì cho rằng quân nhiều, mất một hai không sao. Hai phần ba thời gian sau con lại phạm lỗi ngược lại: quá trân trọng quân, mỗi nước quá cẩn thận, không muốn mất quân nào, ngược lại mất từng quân một.\"", scene: "Quan sát" },
    { who: 'A', name: '课文', hanzi: "说到这，父亲停下来，把棋子重新在棋盘上摆好，抬起头，看着我，问：“这是一盘待下的棋。我问你，下棋的基本原则是什么？”我想也没想，脱口而出：“赢啊！”“那是目的。”父亲用责备的眼光看了我一眼，“至于原则，是要考虑失。有得必然有失，有失才会有得。每走一步，你事先都应该想清楚：为了赢得什么，你愿意失去什么，这样才可能赢。可惜，大部分人都像你这样，开始不考虑得失，等到后来失去得多了，又开始舍不得，后果就是屡下屡败。其实不仅是下棋，人生也是如此啊！”", pinyin: "", vi: "Nói đến đây cha dừng, xếp lại quân trên bàn, ngẩng nhìn tôi hỏi: \"Đây là ván cờ chờ đánh. Cha hỏi con, nguyên tắc cơ bản của đánh cờ là gì?\" Tôi không nghĩ, buột miệng: \"Thắng chứ!\" \"Đó là mục đích.\" Cha nhìn tôi bằng ánh mắt trách móc, \"còn nguyên tắc là phải tính đến mất. Có được ắt có mất, có mất mới có được. Mỗi nước, con phải nghĩ rõ trước: để giành được gì, con chịu mất gì, như vậy mới có thể thắng. Tiếc là đa số như con, lúc đầu không tính được mất, đến sau mất nhiều lại tiếc, hậu quả là đánh mãi thua mãi. Thật ra không chỉ đánh cờ, cuộc đời cũng như vậy!\"", scene: "Bài học" },
  ],
  dialogueTip: "<b>V+下来</b>. <b>舍不得</b>. <b>失去</b>/<b>损失</b>.",
  slowSay: "下棋",

  vocab: [
    { hanzi: "(象)棋", pinyin: "(xiàng)qí", pos: "danh từ", meaning: "cờ (tướng)", han_viet: '' },
    { hanzi: "教练", pinyin: "jiàoliàn", pos: "danh từ", meaning: "huấn luyện viên", han_viet: '' },
    { hanzi: "答应", pinyin: "dāying", pos: "động từ", meaning: "đồng ý", han_viet: '' },
    { hanzi: "损失", pinyin: "sǔnshī", pos: "động từ", meaning: "mất, tổn thất", han_viet: '' },
    { hanzi: "眼睁睁", pinyin: "yǎnzhēngzhēng", pos: "tính từ", meaning: "trơ mắt", han_viet: '' },
    { hanzi: "将军", pinyin: "jiāng jūn", pos: "động từ", meaning: "chiếu tướng", han_viet: '' },
    { hanzi: "服气", pinyin: "fúqì", pos: "động từ", meaning: "chịu phục", han_viet: '' },
    { hanzi: "运气", pinyin: "yùnqi", pos: "danh từ", meaning: "vận may", han_viet: '' },
    { hanzi: "局", pinyin: "jú", pos: "lượng từ", meaning: "ván", han_viet: '' },
    { hanzi: "发挥", pinyin: "fāhuī", pos: "động từ", meaning: "phát huy", han_viet: '' },
    { hanzi: "灰心", pinyin: "huī xīn", pos: "tính từ", meaning: "nản lòng", han_viet: '' },
    { hanzi: "吸取", pinyin: "xīqǔ", pos: "động từ", meaning: "rút ra", han_viet: '' },
    { hanzi: "教训", pinyin: "jiàoxun", pos: "danh từ", meaning: "bài học", han_viet: '' },
    { hanzi: "未必", pinyin: "wèibì", pos: "phó từ", meaning: "chưa chắc", han_viet: '' },
    { hanzi: "次要", pinyin: "cìyào", pos: "tính từ", meaning: "thứ yếu", han_viet: '' },
    { hanzi: "因素", pinyin: "yīnsù", pos: "danh từ", meaning: "nhân tố", han_viet: '' },
    { hanzi: "在于", pinyin: "zàiyú", pos: "động từ", meaning: "ở chỗ", han_viet: '' },
    { hanzi: "心态", pinyin: "xīntài", pos: "danh từ", meaning: "tâm thế", han_viet: '' },
    { hanzi: "珍惜", pinyin: "zhēnxī", pos: "động từ", meaning: "trân trọng", han_viet: '' },
    { hanzi: "否认", pinyin: "fǒurèn", pos: "động từ", meaning: "phủ nhận", han_viet: '' },
    { hanzi: "观察", pinyin: "guānchá", pos: "động từ", meaning: "quan sát", han_viet: '' },
    { hanzi: "失去", pinyin: "shīqù", pos: "động từ", meaning: "mất", han_viet: '' },
    { hanzi: "期间", pinyin: "qījiān", pos: "danh từ", meaning: "thời kỳ", han_viet: '' },
    { hanzi: "把握", pinyin: "bǎwò", pos: "danh từ", meaning: "sự chắc chắn", han_viet: '' },
    { hanzi: "不假思索", pinyin: "bùjiǎ sīsuǒ", pos: "thành ngữ", meaning: "không cần suy nghĩ", han_viet: '' },
    { hanzi: "犯", pinyin: "fàn", pos: "động từ", meaning: "phạm", han_viet: '' },
    { hanzi: "过于", pinyin: "guòyú", pos: "phó từ", meaning: "quá", han_viet: '' },
    { hanzi: "原则", pinyin: "yuánzé", pos: "danh từ", meaning: "nguyên tắc", han_viet: '' },
    { hanzi: "责备", pinyin: "zébèi", pos: "động từ", meaning: "trách móc", han_viet: '' },
    { hanzi: "必然", pinyin: "bìrán", pos: "tính từ", meaning: "tất nhiên", han_viet: '' },
    { hanzi: "事先", pinyin: "shìxiān", pos: "danh từ", meaning: "trước đó", han_viet: '' },
    { hanzi: "舍不得", pinyin: "shěbude", pos: "động từ", meaning: "không nỡ", han_viet: '' },
    { hanzi: "后果", pinyin: "hòuguǒ", pos: "danh từ", meaning: "hậu quả", han_viet: '' },
    { hanzi: "屡", pinyin: "lǚ", pos: "phó từ", meaning: "nhiều lần", han_viet: '' },
  ],

  sections: [
    { kind: 'examples', label: "动词+下来", title: "V+下来", intro: "动词+下来: hoàn thành, có khi mang nghĩa tách khỏi hoặc cố định.", groups: [{ label: 'Ví dụ', items: [["你的论文大概什么时候发表？定下来了吗？", "Nǐ de lùnwén dàgài shénme shíhou fābiǎo? Dìng xialai le ma?", "Luận văn bạn khi nào đăng? Đã định chưa?"], ["几局下来，基本上都是不到10分钟我就败下阵来。", "Jǐ jú xialai, jīběnshang dōu shì bú dào shí fēnzhōng wǒ jiù bàixià zhèn lái.", "Mấy ván trôi qua, hầu như chưa đến 10 phút tôi đã bại trận."]] }] },
    { kind: 'examples', label: "舍不得", title: "舍不得 (không nỡ)", intro: "舍不得: động từ, không muốn bỏ, tiêu, dùng; khẳng định 舍得 thường dùng trong câu hỏi.", groups: [{ label: 'Ví dụ', items: [["把你最喜欢的玩具送给小朋友，你舍得吗？", "Bǎ nǐ zuì xǐhuan de wánjù sòng gěi xiǎopéngyou, nǐ shěde ma?", "Tặng đồ chơi thích nhất cho bạn nhỏ, bạn nỡ không?"], ["等到后来失去得多了，又开始舍不得，后果就是屡下屡败。", "Děngdào hòulái shīqù de duō le, yòu kāishǐ shěbude, hòuguǒ jiù shì lǚ xià lǚ bài.", "Đến khi mất nhiều lại tiếc, hậu quả là đánh mãi thua mãi."]] }] },
    { kind: 'examples', label: "失去 – 损失", title: "So sánh 失去 và 损失", intro: "失去: động từ, không còn cái vốn có (người, thời gian, cơ hội); 损失: vật chất/tài sản bị hao hụt, cũng là danh từ.", groups: [{ label: 'Ví dụ', items: [["因为一场病，他失去了记忆。", "Yīnwèi yì chǎng bìng, tā shīqùle jìyì.", "Vì một trận bệnh anh mất trí nhớ."], ["这次火灾造成了巨大的损失。", "Zhè cì huǒzāi zàochéngle jùdà de sǔnshī.", "Vụ hỏa hoạn này gây thiệt hại lớn."]] }] },
  ],

  notes: [
    { title: "V+下来", body: "Hoàn thành/cố định.", say: "几局下来" },
    { title: "舍不得", body: "Không nỡ.", say: "又开始舍不得" },
    { title: "失去/损失", body: "Mất / tổn thất.", say: "失去了记忆" },
  ],

  writeChars: ["棋", "教", "练", "损", "睁", "灰", "吸", "惜"],

  drills: [],

  qa: [{ title: 'Hoạt động (运用)', items: [{"q": "你会下什么棋？", "hint": "……"}, {"q": "怎么理解“有得必有失”？", "hint": "……"}] }],

  sentences: [],

  dictations: [
    { title: "Giáo trình 练习 1 / 2 / 扩展", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "吸取（ ）才能避免以后再次发生同样的问题。", answer: "教训", gloss: "bài học" },
      { prompt: "不能兼顾工作和家庭是影响幸福感的重要（ ）。", answer: "因素", gloss: "nhân tố" },
      { prompt: "希望你在比赛中（ ）好。", answer: "发挥", gloss: "phát huy" },
      { prompt: "只有做好准备的人才能（ ）住机会。", answer: "把握", gloss: "nắm bắt" },
      { prompt: "你就这样（ ）地看着他摔倒了？！", answer: "眼睁睁", gloss: "trơ mắt" },
      { prompt: "仔细（ ）周围的大自然。", answer: "观察", gloss: "quan sát" },
      { prompt: "考得不太好，觉得有点儿（ ）。", answer: "灰心", gloss: "nản" },
      { prompt: "在国外工作（ ），我一直很想念家乡。", answer: "期间", gloss: "trong thời gian" },
      { prompt: "如果有变动，请（ ）24小时告诉我。", answer: "提前", gloss: "trước" },
      { prompt: "这样做的（ ）很严重！", answer: "后果", gloss: "hậu quả" },
      { prompt: "我觉得他（ ）能听懂。", answer: "未必", gloss: "chưa chắc" },
      { prompt: "关键（ ）你怎样去和他沟通。", answer: "在于", gloss: "ở chỗ" },
      { prompt: "夫妻（ ）同时工作并做家务。", answer: "双方", gloss: "hai bên" },
      { prompt: "我花了很长时间学习怎么停（ ）。", answer: "下来", gloss: "lại" },
      { prompt: "因为一场病，他（ ）了记忆。 (失去/损失)", answer: "失去", gloss: "mất" },
      { prompt: "这次火灾造成了巨大的（ ）。", answer: "损失", gloss: "thiệt hại" },
      { prompt: "拿个（ ）夹一下，别丢了。", answer: "夹子", gloss: "kẹp" },
      { prompt: "一把钥匙开一把（ ）。", answer: "锁", gloss: "khóa" },
      { prompt: "西方人吃饭习惯用刀和（ ）。", answer: "叉子", gloss: "nĩa" },
      { prompt: "喝（ ）茶，感觉很舒服。", answer: "壶", gloss: "ấm" },
    ] },
  ],
}
