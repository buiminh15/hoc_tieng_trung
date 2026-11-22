import type { Lesson } from '../types'

/** Giáo trình chuẩn HSK 5 (Thượng), Bài 25: 给自己加满水. Nghĩa từ mới và ngữ pháp theo sách; dịch bài khóa do app thêm. Không có file nghe. Đáp án theo HSK5-BH1. */

export const hskStd5Lesson25: Lesson = {
  id: 25,
  title: "Bơm nước vào tàu",
  hanzi: "给自己加满水",
  pinyin: "Gěi zìjǐ jiāmǎn shuǐ",
  vi: "Bơm nước vào tàu",
  intro: "Chuyện thuyền trưởng bơm nước vào tàu và \"hiệu ứng áp lực\". Học 朝, 简直, 恐怕 và so sánh 严肃 – 严格.",

  dialogue: [
    { who: 'A', name: '课文', hanzi: "有一位经验丰富的老船长，一次返航中，天气恶劣，他们的船遇到了可怕的巨大风浪。正当水手们慌张得不知如何是好时，老船长命令水手们立刻打开货舱，使劲儿朝里面放水。“船长简直是疯了，这样做只会增加船的压力，船就会下沉得更快，这不是找死吗？”一个年轻的水手骂道。看着船长严肃的表情，水手们还是照做了。随着货舱里的水位越升越高，船一点一点地下沉，狂风巨浪依然猛烈，但对船的威胁却减小了，船也渐渐地取得了平衡。", pinyin: "", vi: "Có một thuyền trưởng giàu kinh nghiệm, một lần trên đường về gặp thời tiết xấu, tàu đụng sóng gió khổng lồ đáng sợ. Đúng lúc thủy thủ hoảng hốt không biết làm sao, ông lệnh mở ngay khoang hàng, gắng sức xả nước vào. \"Thuyền trưởng đúng là điên rồi, làm vậy chỉ tăng áp lực lên tàu, tàu chìm nhanh hơn, chẳng phải tự tìm chết sao?\" một thủy thủ trẻ mắng. Nhìn vẻ mặt nghiêm nghị của thuyền trưởng, các thủy thủ vẫn làm theo. Khi mực nước khoang càng lên cao, tàu chìm dần, sóng gió dữ dội vẫn vậy nhưng sự đe dọa với tàu giảm, tàu dần lấy lại thăng bằng.", scene: "Thuyền trưởng" },
    { who: 'A', name: '课文', hanzi: "船长望着松了一口气的水手们说：“几万吨的钢铁巨轮很少有被打翻的，被打翻的常常是根基很轻的小船。船在有一定重量的时候是最安全的，在空的时候则是最危险的。”", pinyin: "", vi: "Thuyền trưởng nhìn các thủy thủ thở phào nói: \"Tàu thép hàng vạn tấn rất ít khi bị lật, cái bị lật thường là thuyền nhỏ nhẹ gốc. Tàu có trọng lượng nhất định là an toàn nhất, khi rỗng thì nguy hiểm nhất.\"", scene: "Lời thuyền trưởng" },
    { who: 'A', name: '课文', hanzi: "另一个相似的故事发生在某一著名风景区，那里有一段被当地人称为“鬼谷”的最危险的路段，山路非常窄，两边是万丈深渊。每当导游们带队来这里游览时，一定要让游客们背点或者拿点什么东西。“这么危险的地方，我不拿东西两腿都发抖，再负重前行，那不是更容易摔倒吗？”一位妇女不解地问。导游小姐解释道：“这里以前发生过好几起意外，都是迷路的游客在丝毫没有感觉到压力的情况下，一不小心滚下去的。当地人每天都从这条路上背着东西来来往往，却从来没人出事。假如你感觉到了有风险，谨慎地负重前行，反而会更安全。”", pinyin: "", vi: "Một câu chuyện tương tự xảy ra ở một khu danh thắng nổi tiếng, nơi có đoạn đường nguy hiểm nhất người địa phương gọi là \"Quỷ Cốc\", đường núi rất hẹp, hai bên vực sâu muôn trượng. Mỗi khi hướng dẫn viên dẫn đoàn đến tham quan, nhất định bắt du khách đeo hoặc cầm thứ gì. \"Chỗ nguy hiểm thế, không cầm gì hai chân đã run, còn mang nặng đi thì chẳng dễ ngã hơn sao?\" một phụ nữ khó hiểu hỏi. Cô hướng dẫn giải thích: \"Ở đây trước kia xảy ra mấy vụ tai nạn, đều là du khách lạc đường không hề cảm thấy áp lực, lỡ chân lăn xuống. Người địa phương ngày nào cũng mang đồ qua lại trên đường này mà chưa ai gặp chuyện. Nếu bạn cảm thấy có nguy hiểm, cẩn thận mang nặng tiến bước, trái lại sẽ an toàn hơn.\"", scene: "Quỷ Cốc" },
    { who: 'A', name: '课文', hanzi: "这就是“压力效应”。那些胸怀理想、肩上有责任感的人，才能承受住压力，从历史的风雨中走过“鬼谷”；而那些没有理想，没有一点压力，做一天和尚撞一天钟的人，就像一艘风暴中的空船，往往一场人生的狂风巨浪便会把他们彻底地打翻在地。", pinyin: "", vi: "Đó là \"hiệu ứng áp lực\". Những người mang lý tưởng, vai gánh trách nhiệm mới chịu được áp lực, đi qua \"Quỷ Cốc\" giữa mưa gió lịch sử; còn những người không lý tưởng, không chút áp lực, ngày nào hay ngày nấy, như chiếc tàu rỗng trong bão, một trận sóng gió cuộc đời thường quật ngã họ hoàn toàn.", scene: "Hiệu ứng áp lực" },
  ],
  dialogueTip: "<b>朝</b>: hướng về. <b>简直</b>: quả là. <b>严肃</b>/<b>严格</b>.",
  slowSay: "给自己加满水",

  vocab: [
    { hanzi: "返航", pinyin: "fǎnháng", pos: "động từ", meaning: "quay về điểm xuất phát", han_viet: '' },
    { hanzi: "恶劣", pinyin: "èliè", pos: "tính từ", meaning: "tồi tệ", han_viet: '' },
    { hanzi: "可怕", pinyin: "kěpà", pos: "tính từ", meaning: "đáng sợ", han_viet: '' },
    { hanzi: "风浪", pinyin: "fēnglàng", pos: "danh từ", meaning: "sóng gió", han_viet: '' },
    { hanzi: "慌张", pinyin: "huāngzhāng", pos: "tính từ", meaning: "luống cuống", han_viet: '' },
    { hanzi: "舱", pinyin: "cāng", pos: "danh từ", meaning: "khoang", han_viet: '' },
    { hanzi: "使劲儿", pinyin: "shǐ jìnr", pos: "động từ", meaning: "gắng sức", han_viet: '' },
    { hanzi: "朝", pinyin: "cháo", pos: "giới từ", meaning: "hướng về", han_viet: '' },
    { hanzi: "简直", pinyin: "jiǎnzhí", pos: "phó từ", meaning: "quả là, thật là", han_viet: '' },
    { hanzi: "沉", pinyin: "chén", pos: "động từ", meaning: "chìm", han_viet: '' },
    { hanzi: "严肃", pinyin: "yánsù", pos: "tính từ", meaning: "nghiêm túc", han_viet: '' },
    { hanzi: "猛烈", pinyin: "měngliè", pos: "tính từ", meaning: "mạnh, dữ dội", han_viet: '' },
    { hanzi: "狂", pinyin: "kuáng", pos: "tính từ", meaning: "điên cuồng", han_viet: '' },
    { hanzi: "威胁", pinyin: "wēixié", pos: "động từ", meaning: "đe dọa", han_viet: '' },
    { hanzi: "平衡", pinyin: "pínghéng", pos: "tính từ", meaning: "thăng bằng", han_viet: '' },
    { hanzi: "吨", pinyin: "dūn", pos: "lượng từ", meaning: "tấn", han_viet: '' },
    { hanzi: "钢铁", pinyin: "gāngtiě", pos: "danh từ", meaning: "sắt thép", han_viet: '' },
    { hanzi: "根基", pinyin: "gēnjī", pos: "danh từ", meaning: "nền tảng", han_viet: '' },
    { hanzi: "重量", pinyin: "zhòngliàng", pos: "danh từ", meaning: "trọng lượng", han_viet: '' },
    { hanzi: "相似", pinyin: "xiāngsì", pos: "tính từ", meaning: "tương tự", han_viet: '' },
    { hanzi: "风景", pinyin: "fēngjǐng", pos: "danh từ", meaning: "phong cảnh", han_viet: '' },
    { hanzi: "窄", pinyin: "zhǎi", pos: "tính từ", meaning: "chật, hẹp", han_viet: '' },
    { hanzi: "万丈", pinyin: "wànzhàng", pos: "số lượng", meaning: "muôn trượng", han_viet: '' },
    { hanzi: "深渊", pinyin: "shēnyuān", pos: "danh từ", meaning: "vực sâu", han_viet: '' },
    { hanzi: "游览", pinyin: "yóulǎn", pos: "động từ", meaning: "tham quan", han_viet: '' },
    { hanzi: "发抖", pinyin: "fādǒu", pos: "động từ", meaning: "run rẩy", han_viet: '' },
    { hanzi: "负重", pinyin: "fùzhòng", pos: "động từ", meaning: "mang nặng", han_viet: '' },
    { hanzi: "摔倒", pinyin: "shuāidǎo", pos: "động từ", meaning: "ngã", han_viet: '' },
    { hanzi: "妇女", pinyin: "fùnǚ", pos: "danh từ", meaning: "phụ nữ", han_viet: '' },
    { hanzi: "起", pinyin: "qǐ", pos: "lượng từ", meaning: "vụ", han_viet: '' },
    { hanzi: "丝毫", pinyin: "sīháo", pos: "tính từ", meaning: "chút nào", han_viet: '' },
    { hanzi: "滚", pinyin: "gǔn", pos: "động từ", meaning: "lăn", han_viet: '' },
    { hanzi: "风险", pinyin: "fēngxiǎn", pos: "danh từ", meaning: "nguy cơ", han_viet: '' },
    { hanzi: "谨慎", pinyin: "jǐnshèn", pos: "tính từ", meaning: "cẩn thận", han_viet: '' },
    { hanzi: "效应", pinyin: "xiàoyìng", pos: "danh từ", meaning: "hiệu ứng", han_viet: '' },
    { hanzi: "胸", pinyin: "xiōng", pos: "danh từ", meaning: "ngực, lòng", han_viet: '' },
    { hanzi: "承受", pinyin: "chéngshòu", pos: "động từ", meaning: "chịu đựng", han_viet: '' },
    { hanzi: "和尚", pinyin: "héshang", pos: "danh từ", meaning: "nhà sư", han_viet: '' },
    { hanzi: "钟", pinyin: "zhōng", pos: "danh từ", meaning: "chuông", han_viet: '' },
    { hanzi: "彻底", pinyin: "chèdǐ", pos: "tính từ", meaning: "triệt để", han_viet: '' },
  ],

  sections: [
    { kind: 'examples', label: "朝", title: "朝 (hướng về)", intro: "朝: động từ \"đối diện, hướng\"; giới từ chỉ phương hướng của hành động, không làm bổ ngữ như 向.", groups: [{ label: 'Ví dụ', items: [["我们学校的正门坐西朝东。", "Wǒmen xuéxiào de zhèngmén zuò xī cháo dōng.", "Cổng chính trường tôi ngồi tây hướng đông."], ["老船长命令水手们立刻打开货舱，使劲儿朝里面放水。", "Lǎo chuánzhǎng mìnglìng shuǐshǒumen lìkè dǎkāi huòcāng, shǐjìnr cháo lǐmiàn fàng shuǐ.", "Thuyền trưởng lệnh thủy thủ mở ngay khoang, gắng sức xả nước vào trong."]] }] },
    { kind: 'examples', label: "简直", title: "简直 (quả là)", intro: "简直: phó từ, gần như hoàn toàn như vậy, nhấn mạnh phóng đại.", groups: [{ label: 'Ví dụ', items: [["听到刘方离婚的消息时，我简直不敢相信自己的耳朵。", "Tīngdào Liú Fāng líhūn de xiāoxi shí, wǒ jiǎnzhí bù gǎn xiāngxìn zìjǐ de ěrduo.", "Nghe tin Lưu Phương ly hôn, tôi quả không dám tin tai mình."], ["船长简直是疯了。", "Chuánzhǎng jiǎnzhí shì fēng le.", "Thuyền trưởng quả là điên rồi."]] }] },
    { kind: 'examples', label: "严肃 – 严格", title: "So sánh 严肃 và 严格", intro: "严肃: nghiêm túc (tác phong, thái độ; vẻ mặt, không khí khiến người kính sợ); 严格: nghiêm ngặt trong tuân thủ chế độ, tiêu chuẩn.", groups: [{ label: 'Ví dụ', items: [["这是一个决定公司发展的重大问题，应引起高度重视，严肃对待。", "Zhè shì yí ge juédìng gōngsī fāzhǎn de zhòngdà wèntí, yīng yǐnqǐ gāodù zhòngshì, yánsù duìdài.", "Đây là vấn đề trọng đại quyết định sự phát triển công ty, cần hết sức coi trọng, nghiêm túc đối đãi."], ["实验过程中，温度、水分等条件都要严格地控制。", "Shíyàn guòchéng zhōng, wēndù, shuǐfèn děng tiáojiàn dōu yào yángé de kòngzhì.", "Trong thí nghiệm, nhiệt độ, độ ẩm đều phải kiểm soát nghiêm ngặt."]] }] },
  ],

  notes: [
    { title: "朝", body: "Hướng về.", say: "朝里面放水" },
    { title: "简直", body: "Quả là, thật là.", say: "船长简直是疯了" },
  ],

  writeChars: ["船", "舱", "威", "胁", "谨", "慎", "承", "彻"],

  drills: [],

  qa: [{ title: 'Hoạt động (运用)', items: [{"q": "你同意“有压力才有动力”吗？", "hint": "……"}, {"q": "你怎么理解“压力效应”？", "hint": "……"}] }],

  sentences: [],

  dictations: [
    { title: "Giáo trình 练习 1 / 2 / 扩展", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "对这种行为（ ）的队员只能让他离开球队。", answer: "恶劣", gloss: "tồi tệ" },
      { prompt: "经济发展、社会进步都受到了巨大（ ）。", answer: "威胁", gloss: "đe dọa" },
      { prompt: "这毕竟是高考择校，我们必须（ ）对待。", answer: "谨慎", gloss: "cẩn thận" },
      { prompt: "初学骑自行车最重要的是注意保持（ ）。", answer: "平衡", gloss: "thăng bằng" },
      { prompt: "你决定在海外投资，有没有考虑到（ ）？", answer: "风险", gloss: "rủi ro" },
      { prompt: "林丹（ ）太厉害了！", answer: "简直", gloss: "quả là" },
      { prompt: "李岩那么（ ）地返回北京。", answer: "慌张", gloss: "luống cuống" },
      { prompt: "你的病好得不（ ），还应该再休息几天。", answer: "彻底", gloss: "triệt để" },
      { prompt: "我实在不敢（ ）这么贵重的礼物。", answer: "接受", gloss: "nhận" },
      { prompt: "这是一个重大问题，应严肃对待。 (严肃/严格)", answer: "严肃", gloss: "nghiêm túc" },
      { prompt: "温度等条件都要（ ）地控制。", answer: "严格", gloss: "nghiêm ngặt" },
      { prompt: "你这儿有（ ）吗？报名表上要贴张照片。", answer: "胶水", gloss: "keo dán" },
      { prompt: "这些（ ）是寄到地震灾区给孩子们用的。", answer: "文具", gloss: "văn phòng phẩm" },
      { prompt: "街区就像用（ ）画出的格子一样整齐。", answer: "尺子", gloss: "thước" },
      { prompt: "这个最小的房间只有12个（ ）。", answer: "平方", gloss: "mét vuông" },
    ] },
  ],
}
