import type { Lesson } from '../types'

/** Giáo trình chuẩn HSK 5 (Thượng), Bài 13: 锯掉生活的“筐底”. Nghĩa từ mới và ngữ pháp theo sách; dịch bài khóa do app thêm. Không có file nghe. Đáp án theo HSK5-BH1. */

export const hskStd5Lesson13: Lesson = {
  id: 13,
  title: "Cưa bỏ \"đáy giỏ\" của cuộc sống",
  hanzi: "锯掉生活的“筐底”",
  pinyin: "Jùdiào shēnghuó de \"kuāngdǐ\"",
  vi: "Cưa bỏ \"đáy giỏ\" của cuộc sống",
  intro: "Sự ra đời của bóng rổ và bài học đơn giản hóa vấn đề. Học 何况, 何必, 多亏, 仿佛 và so sánh 激烈 – 强烈.",

  dialogue: [
    { who: 'A', name: '课文', hanzi: "篮球运动是1891年由美国马萨诸塞州的体育教师詹姆士·奈史密斯博士发明的。那年的冬天特别冷，奈史密斯所在的训练学校缺乏在室内进行的球类比赛项目，他从当地人把球扔进桃子筐（当地产桃子，各家各户都备有装桃子的专用篮筐）的游戏中得到了启发，将两只篮筐分别安装在体育馆两边看台的栏杆上，学生分为甲乙两队，以足球为比赛工具向篮内投，按得分多少决定输赢。", pinyin: "", vi: "Bóng rổ do tiến sĩ James Naismith, giáo viên thể dục ở Massachusetts Mỹ, phát minh năm 1891. Mùa đông năm đó rất lạnh, trường huấn luyện nơi ông dạy thiếu môn bóng thi đấu trong nhà. Ông được gợi ý từ trò ném bóng vào giỏ đào của dân địa phương (nơi trồng đào, nhà nào cũng có giỏ đựng đào), bèn gắn hai chiếc giỏ vào lan can khán đài hai bên nhà thi đấu; học sinh chia hai đội, dùng bóng đá ném vào giỏ, tính điểm quyết định thắng thua.", scene: "Phát minh" },
    { who: 'A', name: '课文', hanzi: "这项运动很快流行起来。不过，由于栏杆上固定的是真正的筐，每当球投进时，就得有一个人踩着梯子上去把球取出来。这样的行为必须一再地重复，为此，比赛不得不断断续续地进行，缺少了激烈紧张的气氛，连运动员都不满意，更何况看比赛的球迷呢？为了解决这个问题，大家纷纷出主意，想出了很多取球的办法。有一位工程师甚至专门制造出一种机器，在下面一拉篮筐就能把球弹出来。可是，这些办法都没能让比赛顺畅起来。", pinyin: "", vi: "Môn này nhanh chóng thịnh hành. Nhưng vì trên lan can cố định là giỏ thật nên mỗi khi bóng vào phải có người đạp thang lên lấy bóng ra. Việc này phải lặp đi lặp lại nên trận đấu phải đứt quãng, thiếu không khí sôi nổi căng thẳng, đến cầu thủ cũng không hài lòng, huống chi cổ động viên? Để giải quyết, mọi người nhao nhao góp ý, nghĩ ra nhiều cách lấy bóng. Có kỹ sư còn chế riêng một cái máy, kéo bên dưới là bật bóng ra. Nhưng những cách này đều không làm trận đấu trôi chảy.", scene: "Vấn đề" },
    { who: 'A', name: '课文', hanzi: "几年后的一天，一个上幼儿园的小男孩跟着父亲从一群正在进行篮球比赛的人旁边经过。看到大人们一次次辛苦地取球，小男孩好奇地问父亲：“何必这么麻烦呢？把篮筐的底去掉不就行了吗？”多亏了他这句话，人们如梦初醒，一位球员连忙找来一把锯子把篮筐的底锯掉。你瞧，困扰了人们很长时间的取球问题就这样被一个小孩子解决了。", pinyin: "", vi: "Vài năm sau, một cậu bé học mẫu giáo theo cha đi ngang nhóm người đang thi đấu bóng rổ. Thấy người lớn vất vả lấy bóng, cậu tò mò hỏi: \"Hà tất phiền thế? Bỏ đáy giỏ đi chẳng được sao?\" May nhờ câu ấy, mọi người như tỉnh mộng, một cầu thủ vội tìm cái cưa cưa đáy giỏ. Bạn xem, vấn đề lấy bóng làm khổ mọi người lâu thế bị một đứa bé giải quyết.", scene: "Cậu bé" },
    { who: 'A', name: '课文', hanzi: "去掉篮筐的底，本是一件简单的事，可为什么那么多人都没有想到呢？说白了，因为我们的思维像篮球一样被篮筐的底挡在了半空中。于是，我们呆呆地去搬梯子、造机器……其实，世界上本来就没有太复杂的事，复杂都是我们自己造成的。生活仿佛篮筐，许多时候，我们需要的只不过是一把锯子，来锯掉那些阻碍我们的“筐底”。", pinyin: "", vi: "Bỏ đáy giỏ vốn là việc đơn giản, sao nhiều người không nghĩ ra? Nói thẳng, vì tư duy ta như quả bóng bị đáy giỏ chặn giữa không trung. Thế là ta ngây ra đi khiêng thang, chế máy… Thật ra thế giới vốn không có việc quá phức tạp, phức tạp do chính ta tạo ra. Cuộc sống như chiếc giỏ, nhiều lúc ta chỉ cần một cái cưa để cưa bỏ những \"đáy giỏ\" cản trở mình.", scene: "Bài học" },
  ],
  dialogueTip: "<b>何况</b>: huống chi. <b>何必</b>: hà tất. <b>多亏</b>: may nhờ. <b>仿佛</b>: dường như.",
  slowSay: "锯掉生活的筐底",

  vocab: [
    { hanzi: "锯(子)", pinyin: "jù(zi)", pos: "động từ/danh từ", meaning: "cưa", han_viet: '' },
    { hanzi: "筐", pinyin: "kuāng", pos: "danh từ", meaning: "giỏ, sọt", han_viet: '' },
    { hanzi: "训练", pinyin: "xùnliàn", pos: "động từ", meaning: "huấn luyện", han_viet: '' },
    { hanzi: "缺乏", pinyin: "quēfá", pos: "động từ", meaning: "thiếu", han_viet: '' },
    { hanzi: "项目", pinyin: "xiàngmù", pos: "danh từ", meaning: "hạng mục", han_viet: '' },
    { hanzi: "桃", pinyin: "táo", pos: "danh từ", meaning: "quả đào", han_viet: '' },
    { hanzi: "装", pinyin: "zhuāng", pos: "động từ", meaning: "đựng", han_viet: '' },
    { hanzi: "启发", pinyin: "qǐfā", pos: "động từ", meaning: "gợi ý", han_viet: '' },
    { hanzi: "安装", pinyin: "ānzhuāng", pos: "động từ", meaning: "lắp đặt", han_viet: '' },
    { hanzi: "栏杆", pinyin: "lángān", pos: "danh từ", meaning: "lan can", han_viet: '' },
    { hanzi: "甲", pinyin: "jiǎ", pos: "danh từ", meaning: "thứ nhất", han_viet: '' },
    { hanzi: "乙", pinyin: "yǐ", pos: "danh từ", meaning: "thứ hai", han_viet: '' },
    { hanzi: "工具", pinyin: "gōngjù", pos: "danh từ", meaning: "công cụ", han_viet: '' },
    { hanzi: "投篮", pinyin: "tóu lán", pos: "động từ", meaning: "ném rổ", han_viet: '' },
    { hanzi: "踩", pinyin: "cǎi", pos: "động từ", meaning: "đạp", han_viet: '' },
    { hanzi: "一再", pinyin: "yízài", pos: "phó từ", meaning: "nhiều lần", han_viet: '' },
    { hanzi: "重复", pinyin: "chóngfù", pos: "động từ", meaning: "lặp lại", han_viet: '' },
    { hanzi: "断断续续", pinyin: "duànduàn xùxù", pos: "tính từ", meaning: "đứt quãng", han_viet: '' },
    { hanzi: "激烈", pinyin: "jīliè", pos: "tính từ", meaning: "kịch liệt", han_viet: '' },
    { hanzi: "气氛", pinyin: "qìfēn", pos: "danh từ", meaning: "không khí", han_viet: '' },
    { hanzi: "何况", pinyin: "hékuàng", pos: "liên từ", meaning: "huống chi", han_viet: '' },
    { hanzi: "球迷", pinyin: "qiúmí", pos: "danh từ", meaning: "người mê bóng", han_viet: '' },
    { hanzi: "工程师", pinyin: "gōngchéngshī", pos: "danh từ", meaning: "kỹ sư", han_viet: '' },
    { hanzi: "机器", pinyin: "jīqì", pos: "danh từ", meaning: "máy móc", han_viet: '' },
    { hanzi: "顺畅", pinyin: "shùnchàng", pos: "tính từ", meaning: "trôi chảy", han_viet: '' },
    { hanzi: "幼儿园", pinyin: "yòu’éryuán", pos: "danh từ", meaning: "nhà trẻ", han_viet: '' },
    { hanzi: "好奇", pinyin: "hàoqí", pos: "tính từ", meaning: "tò mò", han_viet: '' },
    { hanzi: "何必", pinyin: "hébì", pos: "phó từ", meaning: "hà tất", han_viet: '' },
    { hanzi: "多亏", pinyin: "duōkuī", pos: "động từ", meaning: "may nhờ", han_viet: '' },
    { hanzi: "连忙", pinyin: "liánmáng", pos: "phó từ", meaning: "vội vàng", han_viet: '' },
    { hanzi: "瞧", pinyin: "qiáo", pos: "động từ", meaning: "nhìn", han_viet: '' },
    { hanzi: "困扰", pinyin: "kùnrǎo", pos: "động từ", meaning: "làm phiền", han_viet: '' },
    { hanzi: "思维", pinyin: "sīwéi", pos: "danh từ", meaning: "tư duy", han_viet: '' },
    { hanzi: "呆", pinyin: "dāi", pos: "tính từ", meaning: "ngây ra", han_viet: '' },
    { hanzi: "造成", pinyin: "zàochéng", pos: "động từ", meaning: "gây ra", han_viet: '' },
    { hanzi: "仿佛", pinyin: "fǎngfú", pos: "phó từ", meaning: "dường như", han_viet: '' },
    { hanzi: "阻碍", pinyin: "zǔ’ài", pos: "động từ", meaning: "cản trở", han_viet: '' },
  ],

  sections: [
    { kind: 'examples', label: "何况", title: "何况 (huống chi)", intro: "何况: liên từ, nêu ý tiến thêm bằng giọng phản vấn; còn bổ sung lý do.", groups: [{ label: 'Ví dụ', items: [["缺少了激烈紧张的气氛，连运动员都不满意，更何况看比赛的球迷呢？", "Quēshǎole jīliè jǐnzhāng de qìfēn, lián yùndòngyuán dōu bù mǎnyì, gèng hékuàng kàn bǐsài de qiúmí ne?", "Thiếu không khí sôi nổi, cầu thủ còn không hài lòng, huống chi cổ động viên?"], ["北京的发展变化太快，我这个土生土长的老北京还常常迷路呢，何况你一个外地人。", "Běijīng de fāzhǎn biànhuà tài kuài, wǒ zhège tǔshēng-tǔzhǎng de lǎo Běijīng hái chángcháng mílù ne, hékuàng nǐ yí ge wàidìrén.", "Bắc Kinh thay đổi quá nhanh, người gốc như tôi còn lạc đường, huống chi bạn là người nơi khác."]] }] },
    { kind: 'examples', label: "何必", title: "何必 (hà tất)", intro: "何必: phó từ, nghĩa không cần phải, thường trong câu hỏi.", groups: [{ label: 'Ví dụ', items: [["何必这么麻烦呢？把篮筐的底去掉不就行了吗？", "Hébì zhème máfan ne? Bǎ lánkuāng de dǐ qùdiào bú jiù xíng le ma?", "Hà tất phiền thế? Bỏ đáy giỏ đi chẳng được sao?"]] }] },
    { kind: 'examples', label: "多亏", title: "多亏 (may nhờ)", intro: "多亏: nhờ có ai/điều gì mà tránh được điều xấu.", groups: [{ label: 'Ví dụ', items: [["多亏你提醒，要不我肯定忘了下午还要开会。", "Duōkuī nǐ tíxǐng, yàobu wǒ kěndìng wàngle xiàwǔ hái yào kāi huì.", "May nhờ bạn nhắc, không thì tôi chắc quên chiều còn họp."], ["多亏了他这句话，人们如梦初醒。", "Duōkuīle tā zhè jù huà, rénmen rú mèng chū xǐng.", "May nhờ câu nói của cậu, mọi người như tỉnh mộng."]] }] },
    { kind: 'examples', label: "仿佛", title: "仿佛 (dường như)", intro: "仿佛: phó từ = 好像.", groups: [{ label: 'Ví dụ', items: [["经历了那件事后，我仿佛一夜之间长大成人了。", "Jīnglìle nà jiàn shì hòu, wǒ fǎngfú yí yè zhījiān zhǎngdà chéngrén le.", "Sau chuyện đó, tôi dường như một đêm lớn thành người trưởng thành."], ["生活仿佛篮筐。", "Shēnghuó fǎngfú lánkuāng.", "Cuộc sống như chiếc giỏ."]] }] },
    { kind: 'examples', label: "激烈 – 强烈", title: "So sánh 激烈 và 强烈", intro: "激烈: gay gắt, sôi nổi (cạnh tranh, thi đấu, tranh luận); 强烈: mạnh mẽ (nguyện vọng, phản ứng, ánh sáng).", groups: [{ label: 'Ví dụ', items: [["明天我去面试，听说竞争很激烈。", "Míngtiān wǒ qù miànshì, tīngshuō jìngzhēng hěn jīliè.", "Mai tôi đi phỏng vấn, nghe nói cạnh tranh rất gay gắt."], ["学生们强烈要求重新安排考试。", "Xuéshengmen qiángliè yāoqiú chóngxīn ānpái kǎoshì.", "Học sinh mạnh mẽ yêu cầu xếp lại kỳ thi."]] }] },
  ],

  notes: [
    { title: "何况", body: "Huống chi.", say: "更何况看比赛的球迷呢" },
    { title: "何必", body: "Hà tất.", say: "何必这么麻烦" },
    { title: "多亏", body: "May nhờ.", say: "多亏你提醒" },
  ],

  writeChars: ["锯", "筐", "训", "练", "缺", "乏", "何", "必"],

  drills: [],

  qa: [{ title: 'Hoạt động (运用)', items: [{"q": "你喜欢打篮球吗？", "hint": "……"}, {"q": "这个故事给你什么启发？", "hint": "复杂是我们自己造成的……"}] }],

  sentences: [],

  dictations: [
    { title: "Giáo trình 练习 1", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "今天的晚会你们组织得相当好，（ ）搞得轻松愉快。", answer: "气氛", gloss: "không khí" },
      { prompt: "一觉醒来发现已经8点多了，李阳（ ）穿好衣服往公司赶。", answer: "连忙", gloss: "vội" },
      { prompt: "他一边听，一边在本子上记着什么，（ ）对我的发言挺感兴趣似的。", answer: "仿佛", gloss: "dường như" },
      { prompt: "如果（ ）二十一天就会形成习惯。", answer: "重复", gloss: "lặp lại" },
      { prompt: "每天大量饮酒确实给我的身体健康（ ）了很大的伤害。", answer: "造成", gloss: "gây ra" },
      { prompt: "在食物（ ）的季节，动物为了活下去就只能多睡觉。", answer: "缺乏", gloss: "thiếu" },
    ] },
    { title: "Giáo trình 练习 2 / 做一做 / 扩展", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "要整理的东西太多了，这个箱子根本（ ）不下。 (装/放)", answer: "装", gloss: "đựng" },
      { prompt: "即使在现代社会里，故事仍然是人们生活中不可（ ）的一部分。 (缺少/缺乏)", answer: "缺少", gloss: "thiếu" },
      { prompt: "您多画点儿画儿多好，（ ）把时间浪费在这些人的身上？", answer: "何必", gloss: "hà tất" },
      { prompt: "年轻人恐怕都受不了，（ ）一个有病的老人呢?", answer: "何况", gloss: "huống chi" },
      { prompt: "（ ）你提醒，要不我肯定忘了下午还要开会。", answer: "多亏", gloss: "may nhờ" },
      { prompt: "明天我去一家公司面试，听说竞争很（ ）。 (激烈/强烈)", answer: "激烈", gloss: "gay gắt" },
      { prompt: "学生们（ ）要求重新安排考试。", answer: "强烈", gloss: "mạnh mẽ" },
      { prompt: "（ ）是中国传统的体育项目，（ ）是其中重要的组成部分。", answer: "武术", gloss: "võ thuật" },
      { prompt: "我认识一位大学的体育老师，他（ ）下得可棒了。", answer: "象棋", gloss: "cờ tướng" },
      { prompt: "打羽毛球你可不是我的（ ），不管打多少场你也赢不了。", answer: "对手", gloss: "đối thủ" },
      { prompt: "拿回（ ）的奖杯。", answer: "冠军", gloss: "quán quân" },
    ] },
  ],
}
