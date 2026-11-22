import type { Lesson } from '../types'

/** Giáo trình chuẩn HSK 5 (Thượng), Bài 23: 放手. Nghĩa từ mới và ngữ pháp theo sách; dịch bài khóa do app thêm. Không có file nghe. Đáp án theo HSK5-BH1. */

export const hskStd5Lesson23: Lesson = {
  id: 23,
  title: "Buông tay",
  hanzi: "放手",
  pinyin: "Fàngshǒu",
  vi: "Buông tay",
  intro: "Mẹ học cách buông tay để con bay xa. Học 一致, 某, 幸亏 và 独自 – 单独.",

  dialogue: [
    { who: 'A', name: '课文', hanzi: "文文从小是个乖乖女，学习刻苦，遵守纪律。大事小事，尽管妈妈表示也要征求她的意见，但上哪所学校、念什么专业，甚至跟什么人交朋友，基本上都是妈妈说了算。", pinyin: "", vi: "Văn Văn từ nhỏ là cô con gái ngoan, học chăm, tuân thủ kỷ luật. Việc lớn nhỏ, tuy mẹ nói cũng hỏi ý cô, nhưng học trường nào, học ngành gì, thậm chí kết bạn với ai, về cơ bản đều do mẹ quyết.", scene: "Con gái ngoan" },
    { who: 'A', name: '课文', hanzi: "可是到了大学阶段，亲爱的女儿竟然违反了乖乖女的各种规矩，越来越有自己的主见，越来越能干、独立了。尽管她的成绩仍然是第一名，但她不再甘于当“好学生”：她逃课去听各种讲座，出席欧盟商会的鸡尾酒会，做志愿者，拍电影，学摄影，泡酒吧，参加了学生会并担任了学生会主席，还组织各种社会活动。妈妈以前要她当外交官的计划，在她眼里“实在没什么意思”，她觉得经商才是自己的目标。", pinyin: "", vi: "Nhưng lên đại học, cô con gái yêu lại phá các quy củ của cô gái ngoan, ngày càng có chính kiến, ngày càng giỏi giang độc lập. Dù thành tích vẫn đứng nhất, cô không còn cam làm \"học sinh giỏi\": trốn học đi nghe đủ loại bài giảng, dự tiệc cocktail của Thương hội EU, làm tình nguyện, quay phim, học nhiếp ảnh, vào quán bar, tham gia hội sinh viên và làm chủ tịch, còn tổ chức nhiều hoạt động xã hội. Kế hoạch mẹ muốn cô làm ngoại giao ngày trước, trong mắt cô \"thật chẳng có ý nghĩa\", cô cho rằng kinh doanh mới là mục tiêu của mình.", scene: "Thay đổi" },
    { who: 'A', name: '课文', hanzi: "她放弃了本系保送研究生、放弃了各种工作的面试，坚持要去国外留学，结果12所世界名牌大学录取了她。当面临是否选择牛津大学时，她们全家开会，爸爸妈妈认为应该去，但文文跟他们的意见不一致，她坚持要去美国。这一次妈妈让步了。她隐隐约约觉得：自己该完全放手了。没想到，正是妈妈的放手，让风筝越飞越高。", pinyin: "", vi: "Cô bỏ suất tuyển thẳng cao học của khoa, bỏ các buổi phỏng vấn việc làm, nhất quyết đi du học nước ngoài, kết quả 12 trường danh tiếng thế giới nhận cô. Khi phải chọn có vào Oxford không, cả nhà họp, bố mẹ cho rằng nên đi, nhưng Văn Văn không đồng ý, cô nhất quyết sang Mỹ. Lần này mẹ nhượng bộ. Bà mơ hồ thấy: mình nên buông tay hoàn toàn. Không ngờ chính việc buông tay của mẹ khiến cánh diều bay càng cao.", scene: "Du học" },
    { who: 'A', name: '课文', hanzi: "几年后，文文在美国工作，妈妈去洛杉矶看她。在这个陌生的地方，妈妈感到她们好像交换了某种身份：自己倒像女儿，而文文倒像妈妈。她们建立了一种新的关系。最初，妈妈哪儿也不敢去，不能单独出门，不能与人沟通，什么都要靠女儿。后来文文工作忙，就给她地图、车钥匙、机票，鼓励她自己出去。从家门口的超市开始，妈妈越走越远，最后竟然独自把美国横穿了一遍。她说，是女儿的“放手”，让她走得更远。妈妈的这才算是真正明白了“放手”的重要。", pinyin: "", vi: "Vài năm sau Văn Văn làm việc ở Mỹ, mẹ đến Los Angeles thăm. Ở nơi xa lạ, bà thấy hai mẹ con như đổi thân phận: mình giống con gái, còn Văn Văn giống mẹ. Họ xây dựng một mối quan hệ mới. Lúc đầu mẹ không dám đi đâu, không thể ra ngoài một mình, không giao tiếp được, việc gì cũng dựa vào con. Sau Văn Văn bận, đưa bản đồ, chìa khóa xe, vé máy bay, khích lệ mẹ tự đi. Từ siêu thị ngay cửa nhà, mẹ đi ngày càng xa, cuối cùng một mình băng qua cả nước Mỹ. Bà nói chính sự \"buông tay\" của con khiến bà đi xa hơn. Mẹ lúc này mới thực sự hiểu tầm quan trọng của \"buông tay\".", scene: "Mẹ học đi" },
    { who: 'A', name: '课文', hanzi: "2010年3月的一个夜晚，母女俩躺在夏威夷的沙滩上谈心。妈妈第一次为以前对女儿的“不放手”而道歉。文文沉默了很久，最后吻了妈妈一下，轻轻地说：“妈妈，我真的很喜欢现在的你。”妈妈忍不住流下了眼泪。她说：“幸亏那晚天色很暗。”", pinyin: "", vi: "Một đêm tháng 3/2010, hai mẹ con nằm trên bãi cát Hawaii tâm sự. Lần đầu mẹ xin lỗi vì trước đây \"không buông tay\". Văn Văn im lặng rất lâu, cuối cùng hôn mẹ, nói khẽ: \"Mẹ ơi, con thật sự rất thích mẹ bây giờ.\" Mẹ không kìm được rơi nước mắt. Bà nói: \"May mà đêm đó trời rất tối.\"", scene: "Buông tay" },
  ],
  dialogueTip: "<b>一致</b>: nhất trí. <b>某</b>. <b>幸亏</b>. <b>独自</b>/<b>单独</b>.",
  slowSay: "放手",

  vocab: [
    { hanzi: "乖", pinyin: "guāi", pos: "tính từ", meaning: "ngoan ngoãn", han_viet: '' },
    { hanzi: "刻苦", pinyin: "kèkǔ", pos: "tính từ", meaning: "siêng năng", han_viet: '' },
    { hanzi: "遵守", pinyin: "zūnshǒu", pos: "động từ", meaning: "tuân thủ", han_viet: '' },
    { hanzi: "纪律", pinyin: "jìlǜ", pos: "danh từ", meaning: "kỷ luật", han_viet: '' },
    { hanzi: "征求", pinyin: "zhēngqiú", pos: "động từ", meaning: "trưng cầu", han_viet: '' },
    { hanzi: "念", pinyin: "niàn", pos: "động từ", meaning: "học", han_viet: '' },
    { hanzi: "基本", pinyin: "jīběn", pos: "phó từ", meaning: "về cơ bản", han_viet: '' },
    { hanzi: "阶段", pinyin: "jiēduàn", pos: "danh từ", meaning: "giai đoạn", han_viet: '' },
    { hanzi: "亲爱", pinyin: "qīn’ài", pos: "tính từ", meaning: "thân yêu", han_viet: '' },
    { hanzi: "违反", pinyin: "wéifǎn", pos: "động từ", meaning: "làm trái", han_viet: '' },
    { hanzi: "规矩", pinyin: "guīju", pos: "danh từ", meaning: "quy củ", han_viet: '' },
    { hanzi: "能干", pinyin: "nénggàn", pos: "tính từ", meaning: "giỏi giang", han_viet: '' },
    { hanzi: "讲座", pinyin: "jiǎngzuò", pos: "danh từ", meaning: "bài thuyết trình", han_viet: '' },
    { hanzi: "出席", pinyin: "chūxí", pos: "động từ", meaning: "có mặt", han_viet: '' },
    { hanzi: "酒吧", pinyin: "jiǔbā", pos: "danh từ", meaning: "quán bar", han_viet: '' },
    { hanzi: "担任", pinyin: "dānrèn", pos: "động từ", meaning: "đảm nhiệm", han_viet: '' },
    { hanzi: "主席", pinyin: "zhǔxí", pos: "danh từ", meaning: "chủ tịch", han_viet: '' },
    { hanzi: "组织", pinyin: "zǔzhī", pos: "động từ", meaning: "tổ chức", han_viet: '' },
    { hanzi: "外交", pinyin: "wàijiāo", pos: "danh từ", meaning: "ngoại giao", han_viet: '' },
    { hanzi: "经商", pinyin: "jīng shāng", pos: "động từ", meaning: "kinh doanh", han_viet: '' },
    { hanzi: "目标", pinyin: "mùbiāo", pos: "danh từ", meaning: "mục tiêu", han_viet: '' },
    { hanzi: "系", pinyin: "xì", pos: "danh từ", meaning: "khoa", han_viet: '' },
    { hanzi: "名牌", pinyin: "míngpái", pos: "danh từ", meaning: "hiệu nổi tiếng", han_viet: '' },
    { hanzi: "录取", pinyin: "lùqǔ", pos: "động từ", meaning: "tuyển chọn", han_viet: '' },
    { hanzi: "面临", pinyin: "miànlín", pos: "động từ", meaning: "đối mặt", han_viet: '' },
    { hanzi: "一致", pinyin: "yízhì", pos: "tính từ", meaning: "nhất trí", han_viet: '' },
    { hanzi: "让步", pinyin: "ràng bù", pos: "động từ", meaning: "nhượng bộ", han_viet: '' },
    { hanzi: "隐约", pinyin: "yǐnyuè", pos: "tính từ", meaning: "mơ hồ", han_viet: '' },
    { hanzi: "陌生", pinyin: "mòshēng", pos: "tính từ", meaning: "xa lạ", han_viet: '' },
    { hanzi: "某", pinyin: "mǒu", pos: "đại từ", meaning: "nào đó", han_viet: '' },
    { hanzi: "建立", pinyin: "jiànlì", pos: "động từ", meaning: "xây dựng", han_viet: '' },
    { hanzi: "单独", pinyin: "dāndú", pos: "phó từ", meaning: "một mình", han_viet: '' },
    { hanzi: "沟通", pinyin: "gōutōng", pos: "động từ", meaning: "giao tiếp", han_viet: '' },
    { hanzi: "横", pinyin: "héng", pos: "tính từ", meaning: "ngang", han_viet: '' },
    { hanzi: "沙滩", pinyin: "shātān", pos: "danh từ", meaning: "bãi cát", han_viet: '' },
    { hanzi: "沉默", pinyin: "chénmò", pos: "động từ", meaning: "lặng im", han_viet: '' },
    { hanzi: "吻", pinyin: "wěn", pos: "động từ", meaning: "hôn", han_viet: '' },
    { hanzi: "忍不住", pinyin: "rěnbuzhù", pos: "cụm", meaning: "không nhịn được", han_viet: '' },
    { hanzi: "幸亏", pinyin: "xìngkuī", pos: "phó từ", meaning: "may mà", han_viet: '' },
    { hanzi: "暗", pinyin: "àn", pos: "tính từ", meaning: "tối", han_viet: '' },
  ],

  sections: [
    { kind: 'examples', label: "一致", title: "一致 (nhất trí)", intro: "一致: tính từ \"không bất đồng\"; phó từ \"đồng thanh\".", groups: [{ label: 'Ví dụ', items: [["文文跟他们的意见不一致，她坚持要去美国。", "Wénwen gēn tāmen de yìjiàn bù yízhì, tā jiānchí yào qù Měiguó.", "Văn Văn không cùng ý kiến với họ, cô nhất quyết đi Mỹ."], ["专家们一致认为这是一种成功的产品。", "Zhuānjiāmen yízhì rènwéi zhè shì yì zhǒng chénggōng de chǎnpǐn.", "Các chuyên gia đồng thanh cho đây là sản phẩm thành công."]] }] },
    { kind: 'examples', label: "某", title: "某 (nào đó)", intro: "某: đại từ chỉ người/việc nhất định chưa nói rõ, hoặc không xác định.", groups: [{ label: 'Ví dụ', items: [["公司业务员李某闻之大喜。", "Gōngsī yèwùyuán Lǐ mǒu wén zhī dà xǐ.", "Nhân viên Lý nào đó nghe tin mừng rỡ."], ["妈妈感到她们好像交换了某种身份。", "Māma gǎndào tāmen hǎoxiàng jiāohuànle mǒu zhǒng shēnfèn.", "Mẹ cảm thấy hai người như đổi một thân phận nào đó."]] }] },
    { kind: 'examples', label: "幸亏", title: "幸亏 (may mà)", intro: "幸亏: phó từ, nhờ lý do nào đó mà tránh được điều không mong.", groups: [{ label: 'Ví dụ', items: [["幸亏你提醒了我，我今天就去报名。", "Xìngkuī nǐ tíxǐngle wǒ, wǒ jīntiān jiù qù bàomíng.", "May bạn nhắc, hôm nay tôi đi đăng ký."], ["幸亏那晚天色很暗。", "Xìngkuī nà wǎn tiānsè hěn àn.", "May mà đêm đó trời rất tối."]] }] },
    { kind: 'examples', label: "独自 – 单独", title: "So sánh 独自 và 单独", intro: "独自: tự mình một người, không có ai khác; 单独: không cùng người khác, riêng ra; có thể làm định ngữ.", groups: [{ label: 'Ví dụ', items: [["他独自一人在体育馆里进行训练。", "Tā dúzì yì rén zài tǐyùguǎn li jìnxíng xùnliàn.", "Anh một mình tập trong nhà thi đấu."], ["教练为他单独安排了训练。", "Jiàoliàn wèi tā dāndú ānpáile xùnliàn.", "Huấn luyện viên sắp xếp riêng buổi tập cho anh."]] }] },
  ],

  notes: [
    { title: "一致", body: "Nhất trí.", say: "意见不一致" },
    { title: "某", body: "Nào đó.", say: "某种身份" },
    { title: "幸亏", body: "May mà.", say: "幸亏天色很暗" },
  ],

  writeChars: ["乖", "刻", "遵", "纪", "阶", "违", "隐", "幸"],

  drills: [],

  qa: [{ title: 'Hoạt động (运用)', items: [{"q": "你和父母有过意见不一致吗？", "hint": "……"}, {"q": "你怎么理解“放手”？", "hint": "……"}] }],

  sentences: [],

  dictations: [
    { title: "Giáo trình 练习 1 / 2 / 扩展", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "公司已与这家银行（ ）起了良好的业务关系。", answer: "建立", gloss: "xây dựng" },
      { prompt: "妈妈在电话那端（ ）了一会儿。", answer: "沉默", gloss: "im lặng" },
      { prompt: "经过（ ）训练，她终于成为了第一批女飞行员。", answer: "刻苦", gloss: "chăm chỉ" },
      { prompt: "观众对姚明这个名字一定不会（ ）。", answer: "陌生", gloss: "xa lạ" },
      { prompt: "你跟幼儿园的老师（ ）一下。", answer: "沟通", gloss: "giao tiếp" },
      { prompt: "那个小姑娘既（ ）又漂亮。", answer: "能干", gloss: "giỏi giang" },
      { prompt: "我儿子要是能这样懂（ ），该有多么好啊！", answer: "规矩", gloss: "quy củ" },
      { prompt: "（ ）了吴县长，咱不用出村就把苹果都卖了。", answer: "多亏", gloss: "may nhờ" },
      { prompt: "我给他打电话的（ ）是看他回来了没有。", answer: "目的", gloss: "mục đích" },
      { prompt: "他的建议一提出，就得到了大家的（ ）认可。", answer: "一致", gloss: "nhất trí" },
      { prompt: "他（ ）一人在体育馆里进行训练。", answer: "独自", gloss: "một mình" },
      { prompt: "教练为他（ ）安排了训练。", answer: "单独", gloss: "riêng" },
      { prompt: "请你给我提提（ ）意见。", answer: "修改", gloss: "sửa đổi" },
      { prompt: "在（ ）研究方面取得了丰富的成果。", answer: "学术", gloss: "học thuật" },
      { prompt: "这是首部汉语（ ）。", answer: "教材", gloss: "giáo trình" },
      { prompt: "我在一家出版社（ ）。", answer: "实习", gloss: "thực tập" },
    ] },
  ],
}
