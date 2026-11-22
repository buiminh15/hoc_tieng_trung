import type { Lesson } from '../types'

/** Giáo trình chuẩn HSK 6 (Thượng), Bài 11: 我不在时，猫在干什么？. Nghĩa từ mới và ngữ pháp theo sách; dịch bài khóa do app thêm. Không có file nghe. Đáp án theo HSK6-BH-T1-DA. */

export const hskStd6Lesson11: Lesson = {
  id: 11,
  title: "Khi tôi vắng nhà, mèo làm gì?",
  hanzi: "我不在时，猫在干什么？",
  pinyin: "Wǒ bú zài shí, māo zài gàn shénme?",
  vi: "Khi tôi vắng nhà, mèo làm gì?",
  intro: "Anh chàng lắp camera xem ba chú mèo làm gì khi chủ đi vắng. Học 统统, 以……为……, 该干吗干吗 và so sánh 急忙 – 急切.",

  dialogue: [
    { who: 'A', name: '课文', hanzi: "钱小奇养了3只猫。大黄原本是只流浪猫，那天，淋着大雨来钱小奇家拜访，下完雨就不走了。见多识广的大黄虽有流浪史，却很有教养，它既不懒惰，也不嘴馋，天天趴在窗台上晒太阳，一副知足常乐的样子。每次钱小奇出门回来，它都恭恭敬敬地在门口迎接，不失君子风度。白白是个男孩儿，嗅觉灵敏，动作敏捷，快活而好动。钱小奇一回家，它就扑上来，亲热地撞主人的腿，还要把钱小奇和他带回来的东西统统闻一遍。喜儿是个人见人爱的女孩儿，每天大部分时间都在整理自己的毛发，把自己梳理得漂亮而迷人。", pinyin: "", vi: "Tiền Tiểu Kỳ nuôi 3 con mèo. Đại Hoàng vốn là mèo hoang, hôm đó dầm mưa lớn đến thăm nhà Tiền Tiểu Kỳ, hết mưa là không đi nữa. Đại Hoàng từng trải, tuy có quá khứ lang thang nhưng rất có giáo dục, không lười, không tham ăn, ngày ngày nằm phơi nắng trên bệ cửa, dáng vẻ biết đủ vui hoài. Mỗi lần Tiểu Kỳ ra ngoài về, nó đều cung kính đón ở cửa, không mất phong độ quân tử. Bạch Bạch là con đực, khứu giác nhạy, động tác nhanh nhẹn, vui vẻ hiếu động. Tiểu Kỳ về là nó nhào tới, thân mật húc chân chủ, còn đòi ngửi hết Tiểu Kỳ và đồ anh mang về. Hỉ Nhi là cô bé ai cũng yêu, phần lớn thời gian mỗi ngày chải chuốt bộ lông, khiến mình xinh đẹp mê người.", scene: "Ba chú mèo" },
    { who: 'A', name: '课文', hanzi: "钱小奇是个模范饲养员，每天早起第一件事就是伺候猫：清洁猫舍，喂水，喂饭。他虽然工作繁忙，但每天最急切盼望的就是回家开门的那一刻——大黄和白白在门口等候他，喜儿则毫无例外地站在远处，用凝视表达着它深沉的热情。", pinyin: "", vi: "Tiền Tiểu Kỳ là người nuôi mẫu mực, mỗi sáng dậy việc đầu tiên là hầu mèo: dọn chuồng, cho nước, cho ăn. Anh tuy bận nhưng khoảnh khắc mong ngóng nhất mỗi ngày là mở cửa về nhà — Đại Hoàng và Bạch Bạch chờ ở cửa, còn Hỉ Nhi không ngoại lệ đứng xa, dùng ánh nhìn chằm chằm bày tỏ nhiệt tình sâu lắng.", scene: "Người nuôi mẫu mực" },
    { who: 'A', name: '课文', hanzi: "钱小奇很好奇，自己不在家时猫在做什么？那么长时间，猫们多无聊，会不会忧郁得生病？为了弄清楚这事，他在家里安了个摄像头，监视猫的一举一动。很快，他发现这个不能移动的摄像头有缺陷，拍下的很多镜头都是空的，于是，他增加了设备，并决定自力更生安装一套尖端玩意儿。他边钻研边安装，经过三个多月的努力，安装好的设备不仅能够对猫的动态进行抓拍并储存下图像，钱小奇在外面时还能通过互联网遥控摄像头，对家里的猫进行即时监控，同时能通过操纵、移动摄像头，跟踪到家里的任何一个角落。", pinyin: "", vi: "Tiểu Kỳ rất tò mò, khi mình vắng nhà mèo làm gì? Thời gian dài thế, mèo chán biết bao, có u uất đến sinh bệnh không? Để làm rõ, anh lắp một camera trong nhà, theo dõi nhất cử nhất động của mèo. Rất nhanh anh phát hiện camera cố định này có khiếm khuyết, nhiều cảnh quay trống, nên anh thêm thiết bị và quyết tự lực lắp một bộ đồ tối tân. Anh vừa nghiên cứu vừa lắp, sau hơn ba tháng nỗ lực, thiết bị không chỉ chụp nhanh động tĩnh của mèo và lưu hình, mà khi ở ngoài Tiểu Kỳ còn điều khiển camera từ xa qua mạng, giám sát tức thời, đồng thời điều khiển, xoay camera, bám theo mọi góc nhà.", scene: "Lắp camera" },
    { who: 'A', name: '课文', hanzi: "通过对大量数据和图片进行分析，钱小奇发现，这三只猫大多数时间都在睡觉。除了睡觉，猫们的行动很有规律，以其中一只猫为例，它每天下午两点左右吃饭喝水，时间误差平均不到5分钟。更有趣的是，每次回家时，守在门口的大黄和白白也不是长时间在门口等他，而是在屋里该干吗干吗，听到主人的脚步声和钥匙响后，才会跑到门口来迎接。", pinyin: "", vi: "Qua phân tích lượng lớn dữ liệu và hình ảnh, Tiểu Kỳ phát hiện ba con mèo phần lớn thời gian ngủ. Ngoài ngủ, hành động của mèo rất có quy luật, lấy một con làm ví dụ, nó ăn uống khoảng 2 giờ chiều mỗi ngày, sai số trung bình dưới 5 phút. Thú vị hơn, mỗi lần về, Đại Hoàng và Bạch Bạch canh ở cửa cũng không đợi lâu ở cửa, mà ở trong nhà ai làm việc nấy, nghe tiếng bước chân và tiếng chìa khóa của chủ mới chạy ra cửa đón.", scene: "Quy luật" },
    { who: 'A', name: '课文', hanzi: "这套系统除了帮钱小奇了解了猫的踪迹以外，还帮过钱小奇不少忙。一次，他在办公室上网遥控摄像头，找到了掉在家里桌子下的钱包。如今，只要家里稍有动静，操作系统就能将图像记录下来，并把拍下的照片即时发到他的邮箱里“报警”。", pinyin: "", vi: "Hệ thống này ngoài giúp Tiểu Kỳ biết dấu vết mèo còn giúp anh không ít. Một lần, anh ở văn phòng lên mạng điều khiển camera, tìm thấy ví rơi dưới bàn ở nhà. Nay, hễ trong nhà có chút động tĩnh, hệ thống sẽ ghi hình, gửi ngay ảnh chụp vào hộp thư anh để \"báo động\".", scene: "Hệ thống" },
    { who: 'A', name: '课文', hanzi: "这是一套多么有用的远程遥控家庭安全机器人啊。", pinyin: "", vi: "Đây là bộ robot an ninh gia đình điều khiển từ xa hữu ích biết bao.", scene: "Kết" },
  ],
  dialogueTip: "<b>统统</b>. <b>以……为……</b>. <b>该干吗干吗</b>. <b>急忙</b>/<b>急切</b>.",
  slowSay: "我不在时猫在干什么",

  vocab: [
    { hanzi: "流浪", pinyin: "liúlàng", pos: "động từ", meaning: "lang thang", han_viet: '' },
    { hanzi: "淋", pinyin: "lín", pos: "động từ", meaning: "dầm (mưa)", han_viet: '' },
    { hanzi: "拜访", pinyin: "bàifǎng", pos: "động từ", meaning: "thăm hỏi", han_viet: '' },
    { hanzi: "见多识广", pinyin: "jiànduō-shíguǎng", pos: "thành ngữ", meaning: "biết nhiều hiểu rộng", han_viet: '' },
    { hanzi: "教养", pinyin: "jiàoyǎng", pos: "danh từ", meaning: "sự giáo dục", han_viet: '' },
    { hanzi: "懒惰", pinyin: "lǎnduò", pos: "tính từ", meaning: "lười biếng", han_viet: '' },
    { hanzi: "馋", pinyin: "chán", pos: "tính từ", meaning: "thèm ăn", han_viet: '' },
    { hanzi: "趴", pinyin: "pā", pos: "động từ", meaning: "nằm sấp", han_viet: '' },
    { hanzi: "知足常乐", pinyin: "zhīzú-chánglè", pos: "thành ngữ", meaning: "biết đủ vui hoài", han_viet: '' },
    { hanzi: "恭敬", pinyin: "gōngjìng", pos: "tính từ", meaning: "cung kính", han_viet: '' },
    { hanzi: "君子", pinyin: "jūnzǐ", pos: "danh từ", meaning: "quân tử", han_viet: '' },
    { hanzi: "嗅觉", pinyin: "xiùjué", pos: "danh từ", meaning: "khứu giác", han_viet: '' },
    { hanzi: "灵敏", pinyin: "língmǐn", pos: "tính từ", meaning: "nhạy bén", han_viet: '' },
    { hanzi: "敏捷", pinyin: "mǐnjié", pos: "tính từ", meaning: "nhanh nhẹn", han_viet: '' },
    { hanzi: "快活", pinyin: "kuàihuo", pos: "tính từ", meaning: "vui vẻ", han_viet: '' },
    { hanzi: "扑", pinyin: "pū", pos: "động từ", meaning: "bổ nhào", han_viet: '' },
    { hanzi: "亲热", pinyin: "qīnrè", pos: "tính từ", meaning: "thân mật", han_viet: '' },
    { hanzi: "统统", pinyin: "tǒngtǒng", pos: "phó từ", meaning: "toàn bộ", han_viet: '' },
    { hanzi: "迷人", pinyin: "mírén", pos: "tính từ", meaning: "đẹp, quyến rũ", han_viet: '' },
    { hanzi: "模范", pinyin: "mófàn", pos: "danh từ", meaning: "mẫu mực", han_viet: '' },
    { hanzi: "饲养", pinyin: "sìyǎng", pos: "động từ", meaning: "chăn nuôi", han_viet: '' },
    { hanzi: "清洁", pinyin: "qīngjié", pos: "tính từ", meaning: "sạch sẽ", han_viet: '' },
    { hanzi: "喂", pinyin: "wèi", pos: "động từ", meaning: "cho ăn", han_viet: '' },
    { hanzi: "繁忙", pinyin: "fánmáng", pos: "tính từ", meaning: "bận rộn", han_viet: '' },
    { hanzi: "急切", pinyin: "jíqiè", pos: "tính từ", meaning: "háo hức", han_viet: '' },
    { hanzi: "例外", pinyin: "lìwài", pos: "động từ", meaning: "ngoại lệ", han_viet: '' },
    { hanzi: "凝视", pinyin: "níngshì", pos: "động từ", meaning: "nhìn chăm chú", han_viet: '' },
    { hanzi: "深沉", pinyin: "shēnchén", pos: "tính từ", meaning: "sâu lắng", han_viet: '' },
    { hanzi: "监视", pinyin: "jiānshì", pos: "động từ", meaning: "theo dõi", han_viet: '' },
    { hanzi: "举动", pinyin: "jǔdòng", pos: "danh từ", meaning: "hành động", han_viet: '' },
    { hanzi: "缺陷", pinyin: "quēxiàn", pos: "danh từ", meaning: "khiếm khuyết", han_viet: '' },
    { hanzi: "镜头", pinyin: "jìngtóu", pos: "danh từ", meaning: "ống kính, cảnh quay", han_viet: '' },
    { hanzi: "自力更生", pinyin: "zìlì-gēngshēng", pos: "thành ngữ", meaning: "tự lực cánh sinh", han_viet: '' },
    { hanzi: "尖端", pinyin: "jiānduān", pos: "danh từ", meaning: "tiên tiến nhất", han_viet: '' },
    { hanzi: "钻研", pinyin: "zuānyán", pos: "động từ", meaning: "nghiên cứu kỹ", han_viet: '' },
    { hanzi: "动态", pinyin: "dòngtài", pos: "danh từ", meaning: "động thái", han_viet: '' },
    { hanzi: "储存", pinyin: "chǔcún", pos: "động từ", meaning: "lưu trữ", han_viet: '' },
    { hanzi: "遥控", pinyin: "yáokòng", pos: "động từ", meaning: "điều khiển từ xa", han_viet: '' },
    { hanzi: "即时", pinyin: "jíshí", pos: "phó từ", meaning: "ngay lập tức", han_viet: '' },
    { hanzi: "操纵", pinyin: "cāozòng", pos: "động từ", meaning: "điều khiển", han_viet: '' },
    { hanzi: "跟踪", pinyin: "gēnzōng", pos: "động từ", meaning: "theo dõi", han_viet: '' },
    { hanzi: "角落", pinyin: "jiǎoluò", pos: "danh từ", meaning: "góc", han_viet: '' },
    { hanzi: "误差", pinyin: "wùchā", pos: "danh từ", meaning: "sai số", han_viet: '' },
    { hanzi: "踪迹", pinyin: "zōngjì", pos: "danh từ", meaning: "dấu vết", han_viet: '' },
    { hanzi: "动静", pinyin: "dòngjing", pos: "danh từ", meaning: "tiếng động", han_viet: '' },
    { hanzi: "操作", pinyin: "cāozuò", pos: "động từ", meaning: "vận hành", han_viet: '' },
  ],

  sections: [
    { kind: 'examples', label: "统统", title: "统统 (toàn bộ)", intro: "统统: phó từ, chỉ hành vi liên quan toàn bộ đối tượng, không ngoại lệ; hay dùng khẩu ngữ, cũng nói 通通.", groups: [{ label: 'Ví dụ', items: [["我把随身携带着的DV小摄像机、录音机以及照相机统统从包里取了出来。", "Wǒ bǎ suíshēn xiédàizhe de DV xiǎo shèxiàngjī, lùyīnjī yǐjí zhàoxiàngjī tǒngtǒng cóng bāo lǐ qǔle chūlái.", "Tôi lấy hết máy quay, máy ghi âm và máy ảnh mang theo khỏi túi."], ["他不抽烟、不喝酒、不喝茶，什么电影院、酒吧，统统与他无缘。", "Tā bù chōu yān, bù hē jiǔ, bù hē chá, shénme diànyǐngyuàn, jiǔbā, tǒngtǒng yǔ tā wúyuán.", "Anh không hút thuốc, không rượu trà, rạp phim, quán bar thảy đều vô duyên với anh."]] }] },
    { kind: 'examples', label: "以……为……", title: "以……为…… (lấy… làm…)", intro: "以……为……: cấu trúc văn viết, tương đương khẩu ngữ \"把/拿……作为/当作……\"; hai 以 liền nhau thì 以 thứ hai có thể lược.", groups: [{ label: 'Ví dụ', items: [["以其中一只猫为例，它每天下午两点左右吃饭喝水。", "Yǐ qízhōng yì zhī māo wéi lì, tā měitiān xiàwǔ liǎng diǎn zuǒyòu chī fàn hē shuǐ.", "Lấy một con mèo làm ví dụ, nó ăn uống khoảng 2 giờ chiều mỗi ngày."], ["今天的晚会大伙准备了不少节目，当然以学生为主，老师为辅。", "Jīntiān de wǎnhuì dàhuǒ zhǔnbèile bù shǎo jiémù, dāngrán yǐ xuésheng wéi zhǔ, lǎoshī wéi fǔ.", "Tiệc tối nay mọi người chuẩn bị nhiều tiết mục, tất nhiên lấy học sinh làm chính, thầy cô phụ."]] }] },
    { kind: 'examples', label: "该干吗干吗", title: "该干吗干吗 (việc ai nấy làm)", intro: "该干吗干吗: rút gọn từ \"该+动词+宾语+还/就得+动词+宾语\", biểu thị mọi việc cứ theo như cũ, không điều gì thay đổi được.", groups: [{ label: 'Ví dụ', items: [["在中国，过年过节商店最忙了，哪儿有假呀，该开门就得开门。", "Zài Zhōngguó, guònián guòjié shāngdiàn zuì máng le, nǎr yǒu jià ya, gāi kāi mén jiù děi kāi mén.", "Ở Trung Quốc, Tết lễ cửa hàng bận nhất, đâu có nghỉ, đáng mở cửa vẫn phải mở."], ["每次回家时，守在门口的大黄和白白也不是长时间在门口等他，而是在屋里该干吗干吗。", "Měi cì huíjiā shí, shǒu zài ménkǒu de Dàhuáng hé Báibai yě bú shì cháng shíjiān zài ménkǒu děng tā, ér shì zài wū lǐ gāi gàn má gàn má.", "Mỗi lần về, Đại Hoàng và Bạch Bạch không đợi lâu ở cửa mà ở trong nhà ai làm việc nấy."]] }] },
    { kind: 'examples', label: "急忙 – 急切", title: "So sánh 急忙 và 急切", intro: "急忙: phó từ/tính từ, vội vàng làm gì đó (hành động nhanh); 急切: tính từ, nóng lòng, tha thiết (tâm trạng, ánh mắt, giọng nói).", groups: [{ label: 'Ví dụ', items: [["一听说是急诊病人，大夫急忙进行抢救。", "Yì tīngshuō shì jízhěn bìngrén, dàifu jímáng jìnxíng qiǎngjiù.", "Vừa nghe là bệnh nhân cấp cứu, bác sĩ vội vàng cứu chữa."], ["妈妈急切地盼望孩子早点儿放假回家。", "Māma jíqiè de pànwàng háizi zǎodiǎnr fàngjià huíjiā.", "Mẹ nóng lòng mong con sớm nghỉ về nhà."]] }] },
  ],

  notes: [
    { title: "统统", body: "Toàn bộ.", say: "统统闻一遍" },
    { title: "以……为……", body: "Lấy… làm…", say: "以其中一只猫为例" },
    { title: "该干吗干吗", body: "Việc ai nấy làm.", say: "在屋里该干吗干吗" },
  ],

  writeChars: ["猫", "嗅", "敏", "捷", "监", "视", "缺", "陷"],

  drills: [],

  qa: [{ title: 'Hoạt động (运用)', items: [{"q": "你养过宠物吗？", "hint": "……"}, {"q": "你会用摄像头看家吗？", "hint": "……"}] }],

  sentences: [],

  dictations: [
    { title: "Giáo trình 做一做 / 练习 3", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "一听说是急诊病人，大夫（ ）进行抢救。", answer: "急忙", gloss: "vội vàng" },
      { prompt: "妈妈（ ）地盼望孩子早点儿放假回家。", answer: "急切", gloss: "nóng lòng" },
      { prompt: "昨天，我在小区里遇到一只（ ）狗，金色的毛发。", answer: "流浪", gloss: "lang thang" },
      { prompt: "动作（ ），看见我，亲热地跟在我身边。", answer: "敏捷", gloss: "nhanh nhẹn" },
      { prompt: "看起来很有（ ），像个君子似的。", answer: "教养", gloss: "giáo dục" },
      { prompt: "我们人类一旦决定（ ）一种动物，就要对它负责到底。", answer: "饲养", gloss: "nuôi" },
      { prompt: "小家伙们（ ）而好动。", answer: "快活", gloss: "vui vẻ" },
      { prompt: "我一回家，它们就（ ）过来，跟我玩耍。", answer: "扑", gloss: "bổ nhào" },
      { prompt: "母猫则（ ）在沙发上凝视着它的孩子们。", answer: "趴", gloss: "nằm sấp" },
      { prompt: "母猫则趴在沙发上（ ）着它的孩子们。", answer: "凝视", gloss: "nhìn chăm chú" },
      { prompt: "别的事情（ ）都不重要。", answer: "统统", gloss: "toàn bộ" },
    ] },
  ],
}
