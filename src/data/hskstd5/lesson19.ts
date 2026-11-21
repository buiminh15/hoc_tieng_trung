import type { Lesson } from '../types'

/** Giáo trình chuẩn HSK 5 (Thượng), Bài 19: 家乡的萝卜饼. Nghĩa từ mới và ngữ pháp theo sách; dịch bài khóa do app thêm. Không có file nghe. Đáp án theo HSK5-BH1. */

export const hskStd5Lesson19: Lesson = {
  id: 19,
  title: "Bánh củ cải quê nhà",
  hanzi: "家乡的萝卜饼",
  pinyin: "Jiāxiāng de luóbo bǐng",
  vi: "Bánh củ cải quê nhà",
  intro: "Món bánh củ cải của quê nhà. Học 般, 闻, 趁 và so sánh 想念 – 怀念.",

  dialogue: [
    { who: 'A', name: '课文', hanzi: "家乡的众多美食中，萝卜饼是最让我怀念的。它那丰富的色彩、微甜的口感，至今仍让我十分想念。家乡的萝卜有青、红、紫三种。三种萝卜看起来赏心悦目，吃起来，青的甜中带点儿辣，红的辣中带着甜，紫的像山泉般清淡可口。父老乡亲们夸它说：“橘子、葡萄、梨，比不上咱的萝卜皮。”而萝卜饼就是用这三种颜色的萝卜做成的。", pinyin: "", vi: "Trong nhiều món ngon quê nhà, bánh củ cải là món tôi nhớ nhất. Màu sắc phong phú, vị hơi ngọt của nó đến nay vẫn khiến tôi rất nhớ. Củ cải quê tôi có ba loại xanh, đỏ, tím, nhìn đã sướng mắt, ăn thì xanh ngọt pha chút cay, đỏ cay pha ngọt, tím thanh nhạt dễ ăn như nước suối núi. Bà con khen: \"Quýt, nho, lê không bằng vỏ củ cải nhà ta.\" Bánh củ cải làm từ củ cải ba màu này.", scene: "Món ngon quê nhà" },
    { who: 'A', name: '课文', hanzi: "萝卜饼的做法极其简单，既不炒或煮，也不用油炸。先把三色萝卜洗净切丝，放入油、盐等，用筷子搅拌均匀，萝卜饼的原料便做成了。最关键的功夫是擀面。高手往往把面擀得薄如白纸，拌好的萝卜丝儿铺到饼上后，得再折叠两三次，要求饼熟之后表皮是透明的，能透过表皮看见萝卜丝儿。最后用刀切成块状，饼便做好了。", pinyin: "", vi: "Cách làm bánh củ cải cực đơn giản, không xào, không nấu, cũng không rán ngập dầu. Rửa sạch củ cải ba màu thái sợi, cho dầu, muối, dùng đũa trộn đều là xong nguyên liệu. Công phu then chốt là cán bột. Cao thủ thường cán bột mỏng như giấy trắng, rải sợi củ cải trộn xong lên bánh, gấp thêm hai ba lần, yêu cầu bánh chín vỏ trong suốt, nhìn xuyên vỏ thấy sợi củ cải. Cuối cùng dùng dao cắt thành miếng là xong.", scene: "Cách làm" },
    { who: 'A', name: '课文', hanzi: "接下来，拿一个平底锅，先在锅里淋一圈油，待油锅烫手时，将切好的萝卜饼一块一块地放进锅里。盖锅前须放进一些温水，预防糊底。火最好用文火，等能闻到香味时，便可开锅了。萝卜饼要趁热吃，喜欢口味重的，还可以加少许酱油和醋。刚出锅的萝卜饼，香味扑鼻，外焦里嫩，吃上一口，便让人永远忘不了。如今，美食家们对吃提出了更高的要求。他们不仅要观色、闻香、尝味、赏形，而且还要求食物具有养生方面的特色。我想，家乡的萝卜饼完全具备这几个方面的条件，人们不是常说吗——“鱼生火，肉生痰，青菜萝卜保平安”，养生的功能，让我更加喜爱它了。", pinyin: "", vi: "Tiếp theo lấy chảo đáy phẳng, rưới một vòng dầu, đợi dầu nóng đến mức nóng tay thì cho từng miếng bánh vào. Trước khi đậy nắp cần cho chút nước ấm để tránh khét đáy. Lửa tốt nhất là lửa nhỏ, đến khi ngửi thấy mùi thơm là mở nắp. Bánh ăn lúc nóng, ai thích vị đậm có thể thêm chút xì dầu và giấm. Bánh vừa ra chảo thơm nức mũi, ngoài giòn trong mềm, ăn một miếng là người ta không bao giờ quên. Ngày nay người sành ăn đòi hỏi cao hơn: không chỉ ngắm màu, ngửi hương, nếm vị, thưởng hình mà còn muốn thức ăn có đặc tính dưỡng sinh. Tôi nghĩ bánh củ cải quê tôi đủ các điều kiện này; người ta chẳng nói sao: \"Cá sinh nhiệt, thịt sinh đờm, rau củ cải giữ bình an\", chức năng dưỡng sinh khiến tôi càng thích.", scene: "Cách chiên và thưởng thức" },
  ],
  dialogueTip: "<b>般</b>: như. <b>闻</b>: nghe/ngửi. <b>趁</b>: nhân lúc.",
  slowSay: "家乡的萝卜饼",

  vocab: [
    { hanzi: "家乡", pinyin: "jiāxiāng", pos: "danh từ", meaning: "quê nhà", han_viet: '' },
    { hanzi: "萝卜", pinyin: "luóbo", pos: "danh từ", meaning: "củ cải", han_viet: '' },
    { hanzi: "怀念", pinyin: "huáiniàn", pos: "động từ", meaning: "tưởng nhớ", han_viet: '' },
    { hanzi: "色彩", pinyin: "sècǎi", pos: "danh từ", meaning: "màu sắc", han_viet: '' },
    { hanzi: "想念", pinyin: "xiǎngniàn", pos: "động từ", meaning: "nhớ", han_viet: '' },
    { hanzi: "青", pinyin: "qīng", pos: "tính từ", meaning: "xanh", han_viet: '' },
    { hanzi: "紫", pinyin: "zǐ", pos: "tính từ", meaning: "tím", han_viet: '' },
    { hanzi: "赏心悦目", pinyin: "shǎngxīn yuèmù", pos: "thành ngữ", meaning: "sướng mắt đẹp lòng", han_viet: '' },
    { hanzi: "般", pinyin: "bān", pos: "trợ từ", meaning: "giống như", han_viet: '' },
    { hanzi: "清淡", pinyin: "qīngdàn", pos: "tính từ", meaning: "nhẹ, thanh đạm", han_viet: '' },
    { hanzi: "可口", pinyin: "kěkǒu", pos: "tính từ", meaning: "ngon miệng", han_viet: '' },
    { hanzi: "夸", pinyin: "kuā", pos: "động từ", meaning: "khen", han_viet: '' },
    { hanzi: "橘子", pinyin: "júzi", pos: "danh từ", meaning: "quả quýt", han_viet: '' },
    { hanzi: "梨", pinyin: "lí", pos: "danh từ", meaning: "quả lê", han_viet: '' },
    { hanzi: "炒", pinyin: "chǎo", pos: "động từ", meaning: "xào", han_viet: '' },
    { hanzi: "煮", pinyin: "zhǔ", pos: "động từ", meaning: "nấu", han_viet: '' },
    { hanzi: "油炸", pinyin: "yóuzhá", pos: "động từ", meaning: "chiên rán", han_viet: '' },
    { hanzi: "切", pinyin: "qiē", pos: "động từ", meaning: "cắt", han_viet: '' },
    { hanzi: "丝", pinyin: "sī", pos: "danh từ", meaning: "sợi", han_viet: '' },
    { hanzi: "搅拌", pinyin: "jiǎobàn", pos: "động từ", meaning: "khuấy trộn", han_viet: '' },
    { hanzi: "均匀", pinyin: "jūnyún", pos: "tính từ", meaning: "đều", han_viet: '' },
    { hanzi: "原料", pinyin: "yuánliào", pos: "danh từ", meaning: "nguyên liệu", han_viet: '' },
    { hanzi: "擀", pinyin: "gǎn", pos: "động từ", meaning: "cán", han_viet: '' },
    { hanzi: "薄", pinyin: "báo", pos: "tính từ", meaning: "mỏng", han_viet: '' },
    { hanzi: "折叠", pinyin: "zhédié", pos: "động từ", meaning: "gấp", han_viet: '' },
    { hanzi: "透明", pinyin: "tòumíng", pos: "tính từ", meaning: "trong suốt", han_viet: '' },
    { hanzi: "淋", pinyin: "lín", pos: "động từ", meaning: "rưới", han_viet: '' },
    { hanzi: "圈", pinyin: "quān", pos: "danh từ", meaning: "vòng", han_viet: '' },
    { hanzi: "烫", pinyin: "tàng", pos: "động từ/tính từ", meaning: "làm bỏng", han_viet: '' },
    { hanzi: "盖", pinyin: "gài", pos: "động từ", meaning: "đậy", han_viet: '' },
    { hanzi: "预防", pinyin: "yùfáng", pos: "động từ", meaning: "đề phòng", han_viet: '' },
    { hanzi: "糊", pinyin: "hú", pos: "động từ", meaning: "khét", han_viet: '' },
    { hanzi: "文火", pinyin: "wénhuǒ", pos: "danh từ", meaning: "lửa nhỏ", han_viet: '' },
    { hanzi: "闻", pinyin: "wén", pos: "động từ", meaning: "ngửi", han_viet: '' },
    { hanzi: "趁", pinyin: "chèn", pos: "giới từ", meaning: "nhân lúc", han_viet: '' },
    { hanzi: "口味", pinyin: "kǒuwèi", pos: "danh từ", meaning: "khẩu vị", han_viet: '' },
    { hanzi: "少许", pinyin: "shǎoxǔ", pos: "tính từ", meaning: "một chút", han_viet: '' },
    { hanzi: "酱油", pinyin: "jiàngyóu", pos: "danh từ", meaning: "xì dầu", han_viet: '' },
    { hanzi: "醋", pinyin: "cù", pos: "danh từ", meaning: "giấm", han_viet: '' },
    { hanzi: "焦", pinyin: "jiāo", pos: "tính từ", meaning: "cháy", han_viet: '' },
    { hanzi: "嫩", pinyin: "nèn", pos: "tính từ", meaning: "mềm", han_viet: '' },
    { hanzi: "特色", pinyin: "tèsè", pos: "danh từ", meaning: "đặc sắc", han_viet: '' },
    { hanzi: "痰", pinyin: "tán", pos: "danh từ", meaning: "đờm", han_viet: '' },
    { hanzi: "平安", pinyin: "píng’ān", pos: "tính từ", meaning: "bình an", han_viet: '' },
  ],

  sections: [
    { kind: 'examples', label: "般", title: "般 (giống như)", intro: "般: trợ từ sau danh từ, nghĩa \"一样/似的\", làm định ngữ hoặc trạng ngữ.", groups: [{ label: 'Ví dụ', items: [["紫的像山泉般清淡可口。", "Zǐ de xiàng shānquán bān qīngdàn kěkǒu.", "Loại tím thanh nhạt dễ ăn như nước suối núi."], ["说起那段往事，她的脸上露出了阳光般的笑容。", "Shuō qǐ nà duàn wǎngshì, tā de liǎn shang lùchūle yángguāng bān de xiàoróng.", "Nhắc chuyện cũ, mặt cô nở nụ cười như nắng."]] }] },
    { kind: 'examples', label: "闻", title: "闻 (nghe; ngửi)", intro: "闻 làm ngữ tố: \"nghe thấy\" (百闻不如一见); làm động từ: dùng mũi ngửi.", groups: [{ label: 'Ví dụ', items: [["老话说：百闻不如一见。", "Lǎohuà shuō: bǎi wén bùrú yí jiàn.", "Cổ ngữ: trăm nghe không bằng một thấy."], ["火最好用文火，等能闻到香味时，便可开锅了。", "Huǒ zuì hǎo yòng wénhuǒ, děng néng wéndào xiāngwèi shí, biàn kě kāi guō le.", "Lửa tốt nhất nhỏ, ngửi thấy mùi thơm là mở nắp."]] }] },
    { kind: 'examples', label: "趁", title: "趁 (nhân lúc)", intro: "趁: giới từ \"tận dụng thời gian, cơ hội\"; theo sau danh từ, cụm động từ, tính từ, mệnh đề.", groups: [{ label: 'Ví dụ', items: [["趁电影还没开始，我去买两瓶矿泉水。", "Chèn diànyǐng hái méi kāishǐ, wǒ qù mǎi liǎng píng kuàngquánshuǐ.", "Nhân lúc phim chưa chiếu, tôi đi mua hai chai nước."], ["萝卜饼要趁热吃。", "Luóbo bǐng yào chèn rè chī.", "Bánh củ cải phải ăn lúc nóng."]] }] },
    { kind: 'examples', label: "想念 – 怀念", title: "So sánh 想念 và 怀念", intro: "想念: nhớ người/nơi đang xa, hiện tại; 怀念: tưởng nhớ cái đã qua, người đã mất, cảm xúc sâu hơn.", groups: [{ label: 'Ví dụ', items: [["在国外工作的那段时间，他时时刻刻都在想念着家人。", "Zài guówài gōngzuò de nà duàn shíjiān, tā shíshíkèkè dōu zài xiǎngniànzhe jiārén.", "Lúc làm việc ở nước ngoài anh luôn nhớ gia đình."], ["在楼房里住了十多年后，老李却开始怀念起住在四合院里的生活。", "Zài lóufáng li zhùle shí duō nián hòu, Lǎo Lǐ què kāishǐ huáiniàn qǐ zhù zài sìhéyuàn li de shēnghuó.", "Sống chung cư hơn mười năm, lão Lý lại bắt đầu nhớ cuộc sống ở tứ hợp viện."]] }] },
  ],

  notes: [
    { title: "般", body: "Giống như (sau danh từ).", say: "山泉般清淡" },
    { title: "闻", body: "Nghe / ngửi.", say: "能闻到香味" },
    { title: "趁", body: "Nhân lúc.", say: "趁热吃" },
  ],

  writeChars: ["萝", "卜", "饼", "搅", "均", "匀", "擀", "焦"],

  drills: [],

  qa: [{ title: 'Hoạt động (运用)', items: [{"q": "你喜欢什么口味的菜？", "hint": "……"}, {"q": "介绍一道你会做的中国菜。", "hint": "……"}] }],

  sentences: [],

  dictations: [
    { title: "Giáo trình 练习 1 / 2 / 扩展", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "也许是药物的作用，这一夜他（ ）地度过了。", answer: "平安", gloss: "bình an" },
      { prompt: "用酱油、白糖等做成汁，（ ）地浇在鸡肉上。", answer: "均匀", gloss: "đều" },
      { prompt: "饭菜很（ ）、很平常，却给我留下了极深的印象。", answer: "清淡", gloss: "thanh đạm" },
      { prompt: "请你给我们推荐几个你们这儿的（ ）菜吧。", answer: "特色", gloss: "đặc sắc" },
      { prompt: "常吃胡萝卜能起到保护眼睛、（ ）近视的效果。", answer: "预防", gloss: "phòng" },
      { prompt: "此菜的特点是（ ）美观，咸鲜滑嫩。", answer: "色彩", gloss: "màu sắc" },
      { prompt: "他（ ）着家人。 (想念/怀念)", answer: "想念", gloss: "nhớ" },
      { prompt: "老李开始（ ）起住在四合院里的生活。", answer: "怀念", gloss: "hoài niệm" },
      { prompt: "女儿安静地睡在她身旁，呼吸也很（ ）。", answer: "均匀", gloss: "đều" },
      { prompt: "了解李阳的人都说，李阳最大的（ ）就是胆大、敢干。", answer: "特点", gloss: "đặc điểm" },
      { prompt: "龙井茶冲泡三四遍后颜色和味道就都变（ ）了。", answer: "淡", gloss: "nhạt" },
      { prompt: "这袋已经（ ）好几天了。", answer: "过期", gloss: "quá hạn" },
      { prompt: "你下班时顺路带点儿（ ）吧。", answer: "零食", gloss: "đồ ăn vặt" },
      { prompt: "闻着也有股（ ）味。", answer: "臭", gloss: "thối" },
    ] },
  ],
}
