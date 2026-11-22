import type { Lesson } from '../types'

/** Giáo trình chuẩn HSK 5 (Thượng), Bài 21: 汉字叔叔：一个美国人的汉字情缘. Nghĩa từ mới và ngữ pháp theo sách; dịch bài khóa do app thêm. Không có file nghe. Đáp án theo HSK5-BH1. */

export const hskStd5Lesson21: Lesson = {
  id: 21,
  title: "Chú Hán tự: tình yêu chữ Hán của một người Mỹ",
  hanzi: "汉字叔叔：一个美国人的汉字情缘",
  pinyin: "Hànzì shūshu: yí ge Měiguó rén de Hànzì qíngyuán",
  vi: "Chú Hán tự: tình yêu chữ Hán của một người Mỹ",
  intro: "Câu chuyện Richard Sears và trang web chữ Hán. Học 硬, 偶然 – 偶尔 và từ vựng máy tính.",

  dialogue: [
    { who: 'A', name: '课文', hanzi: "1972年，22岁的理查德·希尔斯爱上了中文，但是他感觉汉字很复杂，汉字的一笔一画没有任何逻辑，只能死记硬背。一个偶然的机会，他发现如果了解汉字的来源和演变过程，再学习它就变得轻松、容易。但是他遗憾地发现，几乎没有一本英文书能充分解释汉字的字源。", pinyin: "", vi: "Năm 1972, Richard Sears 22 tuổi yêu tiếng Trung nhưng thấy chữ Hán phức tạp, từng nét chẳng có logic nào, chỉ biết học thuộc lòng. Một cơ hội tình cờ, anh phát hiện nếu hiểu nguồn gốc và quá trình biến đổi của chữ Hán thì học trở nên nhẹ nhàng, dễ dàng. Nhưng tiếc là hầu như không có cuốn sách tiếng Anh nào giải thích đầy đủ nguồn gốc chữ Hán.", scene: "Duyên với chữ Hán" },
    { who: 'A', name: '课文', hanzi: "1994年，理查德得了心脏病，当时医生说他剩下的时间可能不多了。那时，他开始思考自己的人生，“我该怎么办？我该做什么？”“如果只能活24小时，我会打电话和朋友们说再见；如果我还能活一年，我要抓紧时间尽快把《说文解字》电脑化。”就这样，一部古汉字经典进入他的资料库，仅仅复印、整理和把这些资料输入电脑就用了8年。2002年元旦，战胜疾病的他决定把自己创办的网站公开，让更多喜欢中文的人在学习汉字时，不再像他最初那样学得那么痛苦。", pinyin: "", vi: "Năm 1994 Richard bị bệnh tim, bác sĩ nói thời gian còn lại có thể không nhiều. Lúc đó anh bắt đầu suy nghĩ về đời mình: \"Tôi nên làm gì? Nếu chỉ sống 24 giờ, tôi sẽ gọi điện chào từ biệt bạn bè; nếu còn sống một năm, tôi phải nhanh chóng điện toán hóa \"Thuyết văn giải tự\".\" Thế là một bộ kinh điển chữ Hán cổ vào kho tư liệu của anh, chỉ photocopy, chỉnh lý và nhập vào máy đã mất 8 năm. Tết Dương lịch 2002, anh chiến thắng bệnh tật quyết định công khai trang web mình lập, để nhiều người yêu tiếng Trung khi học chữ không còn đau khổ như anh lúc đầu.", scene: "Trang web" },
    { who: 'A', name: '课文', hanzi: "2011年，有人把他的故事放到了微博上，引起了广泛关注，他也因此被网友亲切地称呼为“汉字叔叔”。打开汉字叔叔克服种种困难、花光全部积蓄创办的网站，可以看到他收集整理的近10万个汉字，包含了它们演变的全部字形，当然也包括繁体字形和简体字形，还有普通话和部分方言读音、英文释义等内容，被网友称赞为“有图有真相”。更让人佩服的是，汉字叔叔将网站上的内容全部开放给网友免费下载。", pinyin: "", vi: "Năm 2011 có người đưa câu chuyện của anh lên Weibo, gây chú ý rộng rãi, anh cũng được cư dân mạng thân thiết gọi là \"Chú Hán tự\". Mở trang web anh vượt khó, dốc hết tiền tiết kiệm lập nên, thấy gần 100.000 chữ Hán anh sưu tầm chỉnh lý, gồm toàn bộ các dạng chữ biến đổi, tất nhiên cả phồn thể và giản thể, còn có âm đọc tiếng phổ thông và một số phương ngữ, nghĩa tiếng Anh…, được cư dân mạng khen \"có hình có thật\". Đáng khâm phục hơn, chú mở toàn bộ nội dung trang web cho tải miễn phí.", scene: "Nội dung trang web" },
    { who: 'A', name: '课文', hanzi: "现在，有很多单位向理查德发出了工作邀请，而理查德选择了去北京师范大学教书，因为那里也有人在做汉字识别查询的研究。在北师大，他除了教物理，还有充分的时间继续研究他的汉字，完善他的网站。在中国，60多岁已经是退休的年纪了。但汉字叔叔每天的日程却安排得很满。他说：“我不会退休，我还要继续追求我的梦想，我要‘活到老，学到老’。”", pinyin: "", vi: "Nay nhiều đơn vị mời Richard làm việc, anh chọn dạy ở Đại học Sư phạm Bắc Kinh vì ở đó cũng có người nghiên cứu nhận dạng và tra cứu chữ Hán. Ở BNU ngoài dạy vật lý anh còn đủ thời gian tiếp tục nghiên cứu chữ và hoàn thiện trang web. Ở Trung Quốc ngoài 60 tuổi đã đến tuổi nghỉ hưu, nhưng lịch mỗi ngày của chú rất đầy. Chú nói: \"Tôi không nghỉ hưu, tôi còn tiếp tục theo đuổi ước mơ, tôi muốn sống đến già học đến già.\"", scene: "Hiện nay" },
  ],
  dialogueTip: "<b>硬</b>: cố. <b>偶然</b>/<b>偶尔</b>.",
  slowSay: "汉字叔叔",

  vocab: [
    { hanzi: "情缘", pinyin: "qíngyuán", pos: "danh từ", meaning: "tình duyên", han_viet: '' },
    { hanzi: "逻辑", pinyin: "luójí", pos: "danh từ", meaning: "lô-gích", han_viet: '' },
    { hanzi: "硬", pinyin: "yìng", pos: "phó từ", meaning: "một cách máy móc", han_viet: '' },
    { hanzi: "死记硬背", pinyin: "sǐjì yìngbèi", pos: "thành ngữ", meaning: "học thuộc lòng máy móc", han_viet: '' },
    { hanzi: "偶然", pinyin: "ǒurán", pos: "tính từ/phó từ", meaning: "tình cờ", han_viet: '' },
    { hanzi: "演变", pinyin: "yǎnbiàn", pos: "động từ", meaning: "biến đổi", han_viet: '' },
    { hanzi: "遗憾", pinyin: "yíhàn", pos: "tính từ", meaning: "đáng tiếc", han_viet: '' },
    { hanzi: "心脏", pinyin: "xīnzàng", pos: "danh từ", meaning: "tim", han_viet: '' },
    { hanzi: "思考", pinyin: "sīkǎo", pos: "động từ", meaning: "suy nghĩ", han_viet: '' },
    { hanzi: "抓紧", pinyin: "zhuā jǐn", pos: "động từ", meaning: "nắm chắc", han_viet: '' },
    { hanzi: "尽快", pinyin: "jǐnkuài", pos: "phó từ", meaning: "càng sớm càng tốt", han_viet: '' },
    { hanzi: "经典", pinyin: "jīngdiǎn", pos: "danh từ/tính từ", meaning: "kinh điển", han_viet: '' },
    { hanzi: "库", pinyin: "kù", pos: "danh từ", meaning: "kho", han_viet: '' },
    { hanzi: "输入", pinyin: "shūrù", pos: "động từ", meaning: "nhập", han_viet: '' },
    { hanzi: "元旦", pinyin: "yuándàn", pos: "danh từ", meaning: "Tết Dương lịch", han_viet: '' },
    { hanzi: "疾病", pinyin: "jíbìng", pos: "danh từ", meaning: "bệnh tật", han_viet: '' },
    { hanzi: "创办", pinyin: "chuàngbàn", pos: "động từ", meaning: "lập ra", han_viet: '' },
    { hanzi: "公开", pinyin: "gōngkāi", pos: "động từ/tính từ", meaning: "công khai", han_viet: '' },
    { hanzi: "最初", pinyin: "zuìchū", pos: "danh từ", meaning: "lúc đầu", han_viet: '' },
    { hanzi: "痛苦", pinyin: "tòngkǔ", pos: "tính từ", meaning: "đau khổ", han_viet: '' },
    { hanzi: "微博", pinyin: "wēibó", pos: "danh từ", meaning: "weibo", han_viet: '' },
    { hanzi: "称呼", pinyin: "chēnghu", pos: "động từ/danh từ", meaning: "gọi", han_viet: '' },
    { hanzi: "克服", pinyin: "kèfú", pos: "động từ", meaning: "khắc phục", han_viet: '' },
    { hanzi: "收集", pinyin: "shōují", pos: "động từ", meaning: "thu thập", han_viet: '' },
    { hanzi: "包含", pinyin: "bāohán", pos: "động từ", meaning: "bao gồm", han_viet: '' },
    { hanzi: "繁体(字)", pinyin: "fántǐ(zì)", pos: "danh từ", meaning: "chữ phồn thể", han_viet: '' },
    { hanzi: "简体(字)", pinyin: "jiǎntǐ(zì)", pos: "danh từ", meaning: "chữ giản thể", han_viet: '' },
    { hanzi: "方言", pinyin: "fāngyán", pos: "danh từ", meaning: "phương ngữ", han_viet: '' },
    { hanzi: "称赞", pinyin: "chēngzàn", pos: "động từ", meaning: "khen ngợi", han_viet: '' },
    { hanzi: "真相", pinyin: "zhēnxiàng", pos: "danh từ", meaning: "sự thật", han_viet: '' },
    { hanzi: "佩服", pinyin: "pèifú", pos: "động từ", meaning: "khâm phục", han_viet: '' },
    { hanzi: "开放", pinyin: "kāifàng", pos: "động từ", meaning: "mở cửa", han_viet: '' },
    { hanzi: "下载", pinyin: "xiàzài", pos: "động từ", meaning: "tải xuống", han_viet: '' },
    { hanzi: "单位", pinyin: "dānwèi", pos: "danh từ", meaning: "đơn vị", han_viet: '' },
    { hanzi: "识别", pinyin: "shíbié", pos: "động từ", meaning: "nhận dạng", han_viet: '' },
    { hanzi: "查询", pinyin: "cháxún", pos: "động từ", meaning: "tra cứu", han_viet: '' },
    { hanzi: "物理", pinyin: "wùlǐ", pos: "danh từ", meaning: "vật lý", han_viet: '' },
    { hanzi: "完善", pinyin: "wánshàn", pos: "động từ/tính từ", meaning: "hoàn thiện", han_viet: '' },
    { hanzi: "退休", pinyin: "tuì xiū", pos: "động từ", meaning: "về hưu", han_viet: '' },
    { hanzi: "日程", pinyin: "rìchéng", pos: "danh từ", meaning: "lịch trình", han_viet: '' },
    { hanzi: "追求", pinyin: "zhuīqiú", pos: "động từ", meaning: "theo đuổi", han_viet: '' },
    { hanzi: "梦想", pinyin: "mèngxiǎng", pos: "danh từ/động từ", meaning: "ước mơ", han_viet: '' },
  ],

  sections: [
    { kind: 'examples', label: "硬", title: "硬 (khăng khăng, máy móc)", intro: "硬: phó từ, kiên quyết hoặc cố chấp làm việc gì.", groups: [{ label: 'Ví dụ', items: [["在中国历史故事“指鹿为马”中，赵高把鹿硬说成马。", "Zài Zhōngguó lìshǐ gùshi \"zhǐ lù wéi mǎ\" zhōng, Zhào Gāo bǎ lù yìng shuō chéng mǎ.", "Trong truyện \"chỉ hươu bảo ngựa\", Triệu Cao cứng bảo hươu là ngựa."], ["汉字的一笔一画没有任何逻辑，只能死记硬背。", "Hànzì de yì bǐ yí huà méiyǒu rènhé luójí, zhǐ néng sǐjì yìngbèi.", "Từng nét chữ Hán không có logic, chỉ biết học vẹt."]] }] },
    { kind: 'examples', label: "偶然 – 偶尔", title: "So sánh 偶然 và 偶尔", intro: "偶然: ngẫu nhiên, ngoài dự đoán (tính từ/phó từ); 偶尔: thỉnh thoảng, tần suất rất thấp.", groups: [{ label: 'Ví dụ', items: [["他很偶然地和队友撞在了一起，受了伤。", "Tā hěn ǒurán de hé duìyǒu zhuàng zài le yìqǐ, shòule shāng.", "Anh tình cờ va vào đồng đội và bị thương."], ["她们多半会到丽丽家玩儿，偶尔也会去吃饭看电影。", "Tāmen duōbàn huì dào Lìli jiā wánr, ǒu’ěr yě huì qù chī fàn kàn diànyǐng.", "Họ phần nhiều đến nhà Lệ Lệ chơi, thỉnh thoảng đi ăn, xem phim."]] }] },
  ],

  notes: [
    { title: "硬", body: "Khăng khăng, máy móc.", say: "死记硬背" },
    { title: "偶然/偶尔", body: "Tình cờ / thỉnh thoảng.", say: "偶然的机会" },
  ],

  writeChars: ["逻", "辑", "遗", "憾", "脏", "输", "痛", "梦"],

  drills: [],

  qa: [{ title: 'Hoạt động (运用)', items: [{"q": "你的母语文字和中文有什么不同？", "hint": "……"}, {"q": "学汉字时遇到过什么困难？怎么克服？", "hint": "……"}] }],

  sentences: [],

  dictations: [
    { title: "Giáo trình 练习 1 / 2 / 扩展", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "这点儿困难不算什么，我一定可以（ ）的。", answer: "克服", gloss: "vượt qua" },
      { prompt: "林峰与刘医生的恋情，在医院里已经是（ ）的秘密了。", answer: "公开", gloss: "công khai" },
      { prompt: "那时候他就有了这个（ ）老报纸的爱好。", answer: "收集", gloss: "sưu tầm" },
      { prompt: "你（ ）准备一下，争取下周把这个项目谈下来。", answer: "抓紧", gloss: "nắm chắc" },
      { prompt: "她对工作认真负责的态度很让人（ ）。", answer: "佩服", gloss: "khâm phục" },
      { prompt: "生活上不要过于（ ）享受。", answer: "追求", gloss: "theo đuổi" },
      { prompt: "买车的事我还没想好，你让我再（ ）几天。", answer: "考虑", gloss: "cân nhắc" },
      { prompt: "令人（ ）的是，中国至今还没有自己的国花。", answer: "遗憾", gloss: "đáng tiếc" },
      { prompt: "小明受伤了，那（ ）送医院呀！", answer: "赶快", gloss: "mau" },
      { prompt: "（ ）的文字就是可以读出来的图画。", answer: "最初", gloss: "ban đầu" },
      { prompt: "他很（ ）地和队友撞在了一起。 (偶然/偶尔)", answer: "偶然", gloss: "tình cờ" },
      { prompt: "（ ）也会去吃饭看电影。", answer: "偶尔", gloss: "thỉnh thoảng" },
      { prompt: "把没用的文件、照片都（ ）了。", answer: "删除", gloss: "xóa" },
      { prompt: "经常在网上（ ）信息、找资料。", answer: "搜索", gloss: "tìm kiếm" },
      { prompt: "现在大都是在网上（ ）新闻了。", answer: "浏览", gloss: "duyệt" },
      { prompt: "把广告设计方案（ ）一份到移动硬盘里。", answer: "复制", gloss: "sao chép" },
    ] },
  ],
}
