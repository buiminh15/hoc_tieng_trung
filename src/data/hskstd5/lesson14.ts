import type { Lesson } from '../types'

/** Giáo trình chuẩn HSK 5 (Thượng), Bài 14: 北京的四合院. Nghĩa từ mới và ngữ pháp theo sách; dịch bài khóa do app thêm. Không có file nghe. Đáp án theo HSK5-BH1. */

export const hskStd5Lesson14: Lesson = {
  id: 14,
  title: "Tứ hợp viện Bắc Kinh",
  hanzi: "北京的四合院",
  pinyin: "Běijīng de sìhéyuàn",
  vi: "Tứ hợp viện Bắc Kinh",
  intro: "Giới thiệu kiểu nhà tứ hợp viện. Học 通常 (so với 常常), 因而, 为……所……, 让.",

  dialogue: [
    { who: 'A', name: '课文', hanzi: "四合院，是中国华北地区民居中的一种组合建筑形式。所谓四合，“四”指东、西、南、北四面，“合”就是四面房屋围在一起，中间形成一个方形的院子。四合院在中国汉族民居中历史最悠久，分布最广泛。不过，只要人们一提到四合院，便自然会想到北京四合院，这是因为传统的北京四合院都有一套固定的样式，十分具有代表性，在各种各样的四合院中，北京四合院可以代表其主要特点。", pinyin: "", vi: "Tứ hợp viện là một kiểu kiến trúc nhà ở dân gian vùng Hoa Bắc. Gọi là \"tứ hợp\": \"tứ\" chỉ bốn mặt đông, tây, nam, bắc, \"hợp\" là nhà bốn mặt vây lại, ở giữa thành sân vuông. Trong nhà dân người Hán, tứ hợp viện có lịch sử lâu đời nhất, phân bố rộng nhất. Nhưng hễ nhắc tứ hợp viện, người ta tự nhiên nghĩ đến tứ hợp viện Bắc Kinh, vì tứ hợp viện Bắc Kinh truyền thống có kiểu mẫu cố định, rất tiêu biểu, có thể đại diện đặc điểm chính.", scene: "Khái quát" },
    { who: 'A', name: '课文', hanzi: "北京有各种规模的四合院。最简单的四合院只有一个院子，比较复杂的有两三个，而有钱人家的，通常是由好几座四合院并列组成的。大门一般开在东南角或西北角，院中的北房是正房，比其他房屋的规模大，一般包括长辈的卧室和具备日常起居、接待客人等功能的客厅。院子的两边是东西厢房，是晚辈们生活的地方。在正房和厢房之间建有走廊，可以供人行走和休息。院子是十分理想的室外生活空间。有的人家喜欢种草、养花、种竹子，有的人家则喜欢用大盆养金鱼。院子不仅拉近了人与自然的关系，也让家里人在此得到了感情的交流，对创造生活情趣起了很大作用，因而最为人们所喜爱。", pinyin: "", vi: "Bắc Kinh có tứ hợp viện đủ quy mô. Đơn giản nhất chỉ một sân, phức tạp hơn có hai ba sân, nhà giàu thường gồm nhiều tứ hợp viện đặt song song. Cổng thường mở ở góc đông nam hoặc tây bắc; nhà phía bắc là chính phòng, lớn hơn các nhà khác, gồm phòng ngủ bậc cha chú và phòng khách dùng sinh hoạt hằng ngày, tiếp khách. Hai bên sân là sương phòng đông tây, nơi vãn bối sống. Giữa chính phòng và sương phòng có hành lang để đi lại, nghỉ ngơi. Sân là không gian sống ngoài trời rất lý tưởng. Có nhà trồng cỏ, nuôi hoa, trồng tre, có nhà dùng chậu lớn nuôi cá vàng. Sân không chỉ gần gũi người với thiên nhiên mà còn giúp giao lưu tình cảm, góp phần tạo thú vui cuộc sống, vì thế được yêu thích nhất.", scene: "Cấu trúc" },
  ],
  dialogueTip: "<b>通常</b>: thường. <b>因而</b>: do đó.",
  slowSay: "北京的四合院",

  vocab: [
    { hanzi: "四合院", pinyin: "sìhéyuàn", pos: "danh từ", meaning: "tứ hợp viện", han_viet: '' },
    { hanzi: "民居", pinyin: "mínjū", pos: "danh từ", meaning: "nhà dân", han_viet: '' },
    { hanzi: "组合", pinyin: "zǔhé", pos: "động từ", meaning: "kết hợp", han_viet: '' },
    { hanzi: "建筑", pinyin: "jiànzhù", pos: "danh từ", meaning: "kiến trúc", han_viet: '' },
    { hanzi: "形式", pinyin: "xíngshì", pos: "danh từ", meaning: "hình thức", han_viet: '' },
    { hanzi: "所谓", pinyin: "suǒwèi", pos: "tính từ", meaning: "cái gọi là", han_viet: '' },
    { hanzi: "方", pinyin: "fāng", pos: "tính từ", meaning: "vuông", han_viet: '' },
    { hanzi: "广泛", pinyin: "guǎngfàn", pos: "tính từ", meaning: "rộng rãi", han_viet: '' },
    { hanzi: "样式", pinyin: "yàngshì", pos: "danh từ", meaning: "kiểu dáng", han_viet: '' },
    { hanzi: "代表", pinyin: "dàibiǎo", pos: "danh từ/động từ", meaning: "đại biểu", han_viet: '' },
    { hanzi: "通常", pinyin: "tōngcháng", pos: "phó từ", meaning: "thường", han_viet: '' },
    { hanzi: "并列", pinyin: "bìngliè", pos: "động từ", meaning: "đặt song song", han_viet: '' },
    { hanzi: "组成", pinyin: "zǔchéng", pos: "động từ", meaning: "tạo thành", han_viet: '' },
    { hanzi: "长辈", pinyin: "zhǎngbèi", pos: "danh từ", meaning: "bậc cha chú", han_viet: '' },
    { hanzi: "具备", pinyin: "jùbèi", pos: "động từ", meaning: "có đủ", han_viet: '' },
    { hanzi: "日常", pinyin: "rìcháng", pos: "tính từ", meaning: "hằng ngày", han_viet: '' },
    { hanzi: "起居", pinyin: "qǐjū", pos: "danh từ", meaning: "sinh hoạt", han_viet: '' },
    { hanzi: "接待", pinyin: "jiēdài", pos: "động từ", meaning: "tiếp đãi", han_viet: '' },
    { hanzi: "功能", pinyin: "gōngnéng", pos: "danh từ", meaning: "chức năng", han_viet: '' },
    { hanzi: "厢房", pinyin: "xiāngfáng", pos: "danh từ", meaning: "chái nhà", han_viet: '' },
    { hanzi: "走廊", pinyin: "zǒuláng", pos: "danh từ", meaning: "hành lang", han_viet: '' },
    { hanzi: "空间", pinyin: "kōngjiān", pos: "danh từ", meaning: "không gian", han_viet: '' },
    { hanzi: "种", pinyin: "zhòng", pos: "động từ", meaning: "trồng", han_viet: '' },
    { hanzi: "竹子", pinyin: "zhúzi", pos: "danh từ", meaning: "cây tre", han_viet: '' },
    { hanzi: "则", pinyin: "zé", pos: "liên từ", meaning: "trong khi đó", han_viet: '' },
    { hanzi: "金鱼", pinyin: "jīnyú", pos: "danh từ", meaning: "cá vàng", han_viet: '' },
    { hanzi: "创造", pinyin: "chuàngzào", pos: "động từ", meaning: "sáng tạo", han_viet: '' },
    { hanzi: "情趣", pinyin: "qíngqù", pos: "danh từ", meaning: "thú vị", han_viet: '' },
    { hanzi: "因而", pinyin: "yīn’ér", pos: "liên từ", meaning: "do đó", han_viet: '' },
    { hanzi: "为", pinyin: "wéi", pos: "giới từ", meaning: "bị, được", han_viet: '' },
    { hanzi: "关闭", pinyin: "guānbì", pos: "động từ", meaning: "đóng kín", han_viet: '' },
  ],

  sections: [
    { kind: 'examples', label: "通常", title: "通常 – 常常", intro: "通常: phó từ chỉ tình huống thường xảy ra, có tính quy luật; dùng được làm định ngữ. 常常: tần suất cao, không nhất thiết có quy luật.", groups: [{ label: 'Ví dụ', items: [["通常除夕晚上都要放鞭炮、吃饺子。", "Tōngcháng chúxī wǎnshang dōu yào fàng biānpào, chī jiǎozi.", "Thường tối giao thừa đều đốt pháo, ăn sủi cảo."], ["周末他常常去父母家过。", "Zhōumò tā chángcháng qù fùmǔ jiā guò.", "Cuối tuần anh hay về nhà bố mẹ."]] }] },
    { kind: 'examples', label: "因而", title: "因而 (do đó)", intro: "因而: liên từ nối kết quả, văn viết.", groups: [{ label: 'Ví dụ', items: [["他坚持锻炼，因而身体很好。", "Tā jiānchí duànliàn, yīn’ér shēntǐ hěn hǎo.", "Anh kiên trì tập luyện nên sức khỏe tốt."], ["因而最为人们所喜爱。", "Yīn’ér zuì wéi rénmen suǒ xǐ’ài.", "Do đó được mọi người yêu thích nhất."]] }] },
  ],

  notes: [
    { title: "通常", body: "Thường; có quy luật.", say: "通常由几座四合院并列组成" },
    { title: "因而", body: "Do đó (văn viết).", say: "因而最为人们所喜爱" },
  ],

  writeChars: ["四", "合", "院", "厢", "廊", "竹", "金", "鱼"],

  drills: [],

  qa: [{ title: 'Hoạt động (运用)', items: [{"q": "你参观过四合院吗？", "hint": "……"}, {"q": "四合院的院子有什么作用？", "hint": "拉近人与自然的关系……"}] }],

  sentences: [],

  dictations: [
    { title: "Giáo trình 练习 1 / 2", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "现在的手机都（ ）很多功能。", answer: "具备", gloss: "có đủ" },
      { prompt: "我学的主要是一些（ ）用语。", answer: "日常", gloss: "hằng ngày" },
      { prompt: "今天雾很（ ），对面的建筑都看不清了。", answer: "浓", gloss: "dày" },
      { prompt: "这个问题需要进行（ ）调查。", answer: "广泛", gloss: "rộng" },
      { prompt: "这本书是由三个部分（ ）起来的。", answer: "组合", gloss: "kết hợp" },
      { prompt: "他们俩常常闹（ ）。", answer: "矛盾", gloss: "mâu thuẫn" },
      { prompt: "（ ）除夕晚上都要放鞭炮、吃饺子。 (通常/常常)", answer: "通常", gloss: "thường" },
      { prompt: "周末他（ ）去父母家过。", answer: "常常", gloss: "hay" },
      { prompt: "这套房子除了客厅……还有两个大（ ）。", answer: "阳台", gloss: "ban công" },
      { prompt: "我想搬到学校（ ）去住。", answer: "宿舍", gloss: "ký túc xá" },
      { prompt: "我家住在一号楼二（ ）403。", answer: "单元", gloss: "đơn nguyên" },
      { prompt: "她就住在我家（ ），是我的邻居。", answer: "隔壁", gloss: "bên cạnh" },
    ] },
  ],
}
