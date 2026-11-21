import type { Lesson } from '../types'

/** Giáo trình chuẩn HSK 5 (Thượng), Bài 6: 除夕的由来. Nghĩa từ mới và ngữ pháp theo sách; dịch bài khóa do app thêm. Không có file nghe. Đáp án theo HSK5-BH1. */

export const hskStd5Lesson6: Lesson = {
  id: 6,
  title: "Nguồn gốc đêm giao thừa",
  hanzi: "除夕的由来",
  pinyin: "Chúxī de yóulái",
  vi: "Nguồn gốc đêm giao thừa",
  intro: "Truyền thuyết quái vật \"Tịch\" và tục thức đêm, đốt pháo. Học 替, 说不定, 似的, 纷纷 và so sánh 打听 – 询问.",

  dialogue: [
    { who: 'A', name: '课文', hanzi: "在中国，人们把农历十二月三十日这一年中的最后一天叫作除夕，这一天，全家人会一起吃年夜饭，守岁。但是，人们为什么要把年三十叫作除夕呢？", pinyin: "Zài Zhōngguó, rénmen bǎ nónglì shí’èr yuè sānshí rì zhè yì nián zhōng de zuìhòu yì tiān jiàozuò chúxī, zhè yì tiān, quán jiārén huì yìqǐ chī niányèfàn, shǒu suì. Dànshì, rénmen wèi shénme yào bǎ nián sānshí jiàozuò chúxī ne?", vi: "Ở Trung Quốc, người ta gọi ngày 30 tháng Chạp âm lịch, ngày cuối cùng trong năm, là đêm giao thừa; hôm đó cả nhà ăn bữa cơm tất niên và thức đón năm mới. Nhưng vì sao ngày 30 Tết lại gọi là \"trừ tịch\"?", scene: "Mở đầu" },
    { who: 'A', name: '课文', hanzi: "传说在很久以前，有个叫作“夕”的怪物，经常出来伤害百姓，百姓对其恨之入骨，但是又十分无奈。当时有个英雄叫作七郎，他英俊高大、力大无比。七郎还有一条狗，这条狗非常勇敢，无论咬住什么都不会松口。", pinyin: "Chuánshuō zài hěn jiǔ yǐqián, yǒu ge jiàozuò \"Xī\" de guàiwù, jīngcháng chūlai shānghài bǎixìng, bǎixìng duì qí hèn zhī rù gǔ, dànshì yòu shífēn wúnài. Dāngshí yǒu ge yīngxióng jiàozuò Qīláng, tā yīngjùn gāodà, lì dà wúbǐ. Qīláng hái yǒu yì tiáo gǒu, zhè tiáo gǒu fēicháng yǒnggǎn, wúlùn yǎozhù shénme dōu bú huì sōng kǒu.", vi: "Tương truyền rất xa xưa có quái vật tên \"Tịch\" thường ra hại dân, dân căm hận thấu xương nhưng bất lực. Lúc đó có anh hùng tên Thất Lang, anh tuấn cao lớn, sức mạnh vô song. Thất Lang có một con chó rất dũng cảm, cắn vào gì cũng không buông.", scene: "Quái vật Tịch" },
    { who: 'A', name: '课文', hanzi: "一天，七郎从外边回来，看到邻居女孩的外公坐在路边哭，于是上前询问，一问才知道，原来天真可爱的女孩被“夕”吃掉了。七郎暗暗下定决心一定要杀死“夕”，替百姓除掉这个制造灾害的东西。于是七郎带着他的狗出发了，他到处打听“夕”的消息，但是一直找不到它。", pinyin: "Yì tiān, Qīláng cóng wàibian huílai, kàndào línjū nǚhái de wàigōng zuò zài lù biān kū, yúshì shàngqián xúnwèn, yì wèn cái zhīdào, yuánlái tiānzhēn kě’ài de nǚhái bèi \"Xī\" chīdiào le. Qīláng àn’àn xiàdìng juéxīn yídìng yào shāsǐ \"Xī\", tì bǎixìng chúdiào zhège zhìzào zāihài de dōngxi. Yúshì Qīláng dàizhe tā de gǒu chūfā le, tā dàochù dǎting \"Xī\" de xiāoxi, dànshì yìzhí zhǎo bu dào tā.", vi: "Một hôm Thất Lang từ ngoài về thấy ông ngoại cô bé hàng xóm ngồi khóc bên đường, bèn hỏi thăm mới biết cô bé hồn nhiên đáng yêu đã bị \"Tịch\" ăn mất. Thất Lang âm thầm quyết giết \"Tịch\", thay dân diệt trừ thứ gây tai họa. Anh dắt chó lên đường, đi đâu cũng dò la tin \"Tịch\" nhưng mãi không tìm thấy.", scene: "Thất Lang lên đường" },
    { who: 'A', name: '课文', hanzi: "这样过了差不多一年，这天正好是大年三十，七郎来到了一个热闹的城镇。这一年来，七郎虽然没有找到“夕”，但是了解到了很多关于“夕”的情况：它一般在太阳落山后出来害人，到天亮前又会逃得连影子都找不着了；此外，它还特别害怕声响。于是七郎告诉这里的百姓，“夕”说不定晚上要出来伤害大家，让大家今晚熬夜等着，一见到“夕”就赶紧敲打东西，大家一起把“夕”杀掉。", pinyin: "Zhèyàng guòle chàbuduō yì nián, zhè tiān zhènghǎo shì dànián sānshí, Qīláng láidàole yí ge rènao de chéngzhèn. Zhè yì nián lái, Qīláng suīrán méiyǒu zhǎodào \"Xī\", dànshì liǎojiědàole hěn duō guānyú \"Xī\" de qíngkuàng: tā yìbān zài tàiyáng luò shān hòu chūlai hài rén, dào tiānliàng qián yòu huì táo de lián yǐngzi dōu zhǎo bu zháo le; cǐwài, tā hái tèbié hàipà shēngxiǎng. Yúshì Qīláng gàosu zhèlǐ de bǎixìng, \"Xī\" shuōbudìng wǎnshang yào chūlai shānghài dàjiā, ràng dàjiā jīn wǎn áo yè děngzhe, yí jiàndào \"Xī\" jiù gǎnjǐn qiāodǎ dōngxi, dàjiā yìqǐ bǎ \"Xī\" shādiào.", vi: "Gần một năm trôi qua, đúng đêm 30 Tết, Thất Lang đến một thị trấn náo nhiệt. Năm qua tuy chưa tìm được \"Tịch\" nhưng anh biết nhiều về nó: thường ra hại người sau khi mặt trời lặn, trước sáng lại trốn mất cả bóng; ngoài ra nó đặc biệt sợ tiếng động. Thế là Thất Lang bảo dân ở đây \"Tịch\" có thể tối nay ra hại, mọi người thức đêm chờ, vừa thấy \"Tịch\" thì mau gõ đồ vật, cùng nhau giết nó.", scene: "Kế hoạch" },
    { who: 'A', name: '课文', hanzi: "太阳很快落山了，到了晚上，“夕”果然出来了。它想吃一户人家的姑娘，被这家人发现了，于是他们立刻敲响了家中的锅和盆子，跟着整个镇子都响了起来。“夕”吓得什么似的，急忙往外逃。七郎的狗追上了“夕”，并死死地咬住了它。七郎跑上前去，一箭射死了“夕”。", pinyin: "Tàiyáng hěn kuài luò shān le, dào le wǎnshang, \"Xī\" guǒrán chūlai le. Tā xiǎng chī yí hù rénjiā de gūniang, bèi zhè jiārén fāxiàn le, yúshì tāmen lìkè qiāoxiǎngle jiā zhōng de guō hé pénzi, gēnzhe zhěnggè zhènzi dōu xiǎng le qilai. \"Xī\" xià de shénme shìde, jímáng wǎng wài táo. Qīláng de gǒu zhuīshàngle \"Xī\", bìng sǐsǐ de yǎozhùle tā. Qīláng pǎo shàng qián qù, yí jiàn shèsǐle \"Xī\".", vi: "Mặt trời lặn nhanh, tối đến \"Tịch\" quả nhiên xuất hiện. Nó định ăn cô gái một nhà, bị phát hiện, họ lập tức gõ nồi chậu, cả thị trấn vang theo. \"Tịch\" sợ hết hồn vội chạy ra ngoài. Chó Thất Lang đuổi kịp, cắn chặt nó. Thất Lang chạy đến, một mũi tên bắn chết \"Tịch\".", scene: "Diệt Tịch" },
    { who: 'A', name: '课文', hanzi: "除掉“夕”以后，百姓纷纷对七郎表达谢意。由于这一天很有意义，于是人们就在每年的年三十这天晚上，仍然像那天一样整晚不睡觉，敲打出响声。就这样一代代传下来，形成了除夕夜守岁、放鞭炮的风俗。", pinyin: "Chúdiào \"Xī\" yǐhòu, bǎixìng fēnfēn duì Qīláng biǎodá xièyì. Yóuyú zhè yì tiān hěn yǒu yìyì, yúshì rénmen jiù zài měi nián de nián sānshí zhè tiān wǎnshang, réngrán xiàng nà tiān yíyàng zhěng wǎn bù shuì jiào, qiāodǎ chū xiǎngshēng. Jiù zhèyàng yí dài dài chuán xialai, xíngchéngle chúxī yè shǒu suì, fàng biānpào de fēngsú.", vi: "Diệt \"Tịch\" xong, dân chúng nhao nhao tỏ lòng cảm ơn Thất Lang. Vì ngày này rất có ý nghĩa nên mỗi tối 30 Tết người ta vẫn như hôm đó thức trắng đêm, gõ ra tiếng động. Cứ thế đời này truyền đời khác, hình thành tục thức đêm giao thừa, đốt pháo.", scene: "Tục lệ" },
  ],
  dialogueTip: "<b>替</b>: thay/giúp. <b>说不定</b>: có thể. <b>似的</b>: dường như. <b>纷纷</b>: nhao nhao.",
  slowSay: "除夕的由来",

  vocab: [
    { hanzi: "除夕", pinyin: "chúxī", pos: "danh từ", meaning: "đêm giao thừa", han_viet: '' },
    { hanzi: "由来", pinyin: "yóulái", pos: "danh từ", meaning: "nguồn gốc", han_viet: '' },
    { hanzi: "农历", pinyin: "nónglì", pos: "danh từ", meaning: "âm lịch", han_viet: '' },
    { hanzi: "守岁", pinyin: "shǒusuì", pos: "động từ", meaning: "đón giao thừa", han_viet: '' },
    { hanzi: "怪物", pinyin: "guàiwù", pos: "danh từ", meaning: "quái vật", han_viet: '' },
    { hanzi: "伤害", pinyin: "shānghài", pos: "động từ", meaning: "làm hại", han_viet: '' },
    { hanzi: "恨", pinyin: "hèn", pos: "động từ", meaning: "oán hận", han_viet: '' },
    { hanzi: "无奈", pinyin: "wúnài", pos: "động từ", meaning: "đành chịu", han_viet: '' },
    { hanzi: "英雄", pinyin: "yīngxióng", pos: "danh từ", meaning: "anh hùng", han_viet: '' },
    { hanzi: "英俊", pinyin: "yīngjùn", pos: "tính từ", meaning: "anh tuấn", han_viet: '' },
    { hanzi: "咬", pinyin: "yǎo", pos: "động từ", meaning: "cắn", han_viet: '' },
    { hanzi: "外公", pinyin: "wàigōng", pos: "danh từ", meaning: "ông ngoại", han_viet: '' },
    { hanzi: "询问", pinyin: "xúnwèn", pos: "động từ", meaning: "hỏi thăm", han_viet: '' },
    { hanzi: "天真", pinyin: "tiānzhēn", pos: "tính từ", meaning: "ngây thơ", han_viet: '' },
    { hanzi: "杀", pinyin: "shā", pos: "động từ", meaning: "giết", han_viet: '' },
    { hanzi: "(代)替", pinyin: "(dài)tì", pos: "động từ", meaning: "thay thế", han_viet: '' },
    { hanzi: "除", pinyin: "chú", pos: "động từ", meaning: "trừ khử", han_viet: '' },
    { hanzi: "制造", pinyin: "zhìzào", pos: "động từ", meaning: "gây ra, sản xuất", han_viet: '' },
    { hanzi: "灾害", pinyin: "zāihài", pos: "danh từ", meaning: "tai họa", han_viet: '' },
    { hanzi: "逃", pinyin: "táo", pos: "động từ", meaning: "chạy trốn", han_viet: '' },
    { hanzi: "影子", pinyin: "yǐngzi", pos: "danh từ", meaning: "bóng dáng", han_viet: '' },
    { hanzi: "此外", pinyin: "cǐwài", pos: "liên từ", meaning: "ngoài ra", han_viet: '' },
    { hanzi: "说不定", pinyin: "shuōbudìng", pos: "phó từ", meaning: "có lẽ, có thể", han_viet: '' },
    { hanzi: "熬夜", pinyin: "áo yè", pos: "động từ", meaning: "thức khuya", han_viet: '' },
    { hanzi: "赶紧", pinyin: "gǎnjǐn", pos: "phó từ", meaning: "ngay lập tức", han_viet: '' },
    { hanzi: "果然", pinyin: "guǒrán", pos: "phó từ", meaning: "quả nhiên", han_viet: '' },
    { hanzi: "姑娘", pinyin: "gūniang", pos: "danh từ", meaning: "cô gái", han_viet: '' },
    { hanzi: "锅", pinyin: "guō", pos: "danh từ", meaning: "nồi", han_viet: '' },
    { hanzi: "盆(子)", pinyin: "pén(zi)", pos: "danh từ", meaning: "chậu", han_viet: '' },
    { hanzi: "整个", pinyin: "zhěnggè", pos: "tính từ", meaning: "cả", han_viet: '' },
    { hanzi: "吓", pinyin: "xià", pos: "động từ", meaning: "làm khiếp sợ", han_viet: '' },
    { hanzi: "似的", pinyin: "shìde", pos: "trợ từ", meaning: "dường như", han_viet: '' },
    { hanzi: "追", pinyin: "zhuī", pos: "động từ", meaning: "đuổi theo", han_viet: '' },
    { hanzi: "箭", pinyin: "jiàn", pos: "danh từ", meaning: "mũi tên", han_viet: '' },
    { hanzi: "射(击)", pinyin: "shè(jī)", pos: "động từ", meaning: "bắn", han_viet: '' },
    { hanzi: "纷纷", pinyin: "fēnfēn", pos: "tính từ/phó từ", meaning: "tới tấp, nhao nhao", han_viet: '' },
    { hanzi: "表达", pinyin: "biǎodá", pos: "động từ", meaning: "bày tỏ", han_viet: '' },
    { hanzi: "意义", pinyin: "yìyì", pos: "danh từ", meaning: "ý nghĩa", han_viet: '' },
    { hanzi: "鞭炮", pinyin: "biānpào", pos: "danh từ", meaning: "pháo", han_viet: '' },
    { hanzi: "风俗", pinyin: "fēngsú", pos: "danh từ", meaning: "phong tục", han_viet: '' },
  ],

  sections: [
    { kind: 'examples', label: "替", title: "替 (thay, giúp)", intro: "替: động từ \"thay\"; giới từ \"giúp, vì\".", groups: [{ label: 'Ví dụ', items: [["见了外公，你替我向他问好。", "Jiàn le wàigōng, nǐ tì wǒ xiàng tā wèn hǎo.", "Gặp ông ngoại, bạn thay tôi hỏi thăm ông nhé."], ["七郎暗暗下定决心一定要杀死“夕”，替百姓除掉这个制造灾害的东西。", "Qīláng àn’àn xiàdìng juéxīn yídìng yào shāsǐ \"Xī\", tì bǎixìng chúdiào zhège zhìzào zāihài de dōngxi.", "Thất Lang quyết giết \"Tịch\", thay dân trừ thứ gây tai họa này."]] }] },
    { kind: 'examples', label: "说不定", title: "说不定 (có thể)", intro: "说不定: động từ \"không nói chắc được\"; phó từ \"ước đoán, khả năng lớn\".", groups: [{ label: 'Ví dụ', items: [["这事儿经理已经同意了，只是出发的时间还说不定。", "Zhè shìr jīnglǐ yǐjīng tóngyì le, zhǐshì chūfā de shíjiān hái shuōbudìng.", "Giám đốc đã đồng ý, chỉ là giờ xuất phát chưa chắc."], ["周末他起得晚，这会儿说不定还在睡觉呢。", "Zhōumò tā qǐ de wǎn, zhè huìr shuōbudìng hái zài shuì jiào ne.", "Cuối tuần anh dậy muộn, giờ có thể còn đang ngủ."]] }] },
    { kind: 'examples', label: "似的", title: "似的 (dường như)", intro: "似的: trợ từ, 像/跟/好像……似的 biểu thị giống sự việc nào đó; trong \"……得什么似的\" chỉ mức độ phóng đại.", groups: [{ label: 'Ví dụ', items: [["我不敢相信这是真的，好像做梦似的。", "Wǒ bù gǎn xiāngxìn zhè shì zhēn de, hǎoxiàng zuò mèng shìde.", "Tôi không dám tin đây là thật, như đang mơ."], ["“夕”吓得什么似的，急忙往外逃。", "\"Xī\" xià de shénme shìde, jímáng wǎng wài táo.", "\"Tịch\" sợ hết hồn vội chạy ra ngoài."]] }] },
    { kind: 'examples', label: "纷纷", title: "纷纷 (nhao nhao)", intro: "纷纷: tính từ \"nhiều và rối\" (落叶纷纷); phó từ \"lần lượt nhiều người/vật\" (纷纷表示谢意).", groups: [{ label: 'Ví dụ', items: [["秋风刮起，落叶纷纷。", "Qiūfēng guāqǐ, luòyè fēnfēn.", "Gió thu nổi, lá rụng tơi bời."], ["除掉“夕”以后，百姓纷纷对七郎表达谢意。", "Chúdiào \"Xī\" yǐhòu, bǎixìng fēnfēn duì Qīláng biǎodá xièyì.", "Diệt \"Tịch\" xong dân nhao nhao cảm tạ Thất Lang."]] }] },
    { kind: 'examples', label: "打听 – 询问", title: "So sánh 打听 và 询问", intro: "Cùng là \"hỏi\". 打听 khẩu ngữ, dùng để tìm tin, có thể + 到; 询问 văn viết, không + 到, còn nghĩa hỏi ý kiến.", groups: [{ label: 'Ví dụ', items: [["我跟您打听一下，附近有邮局吗？", "Wǒ gēn nín dǎting yíxià, fùjìn yǒu yóujú ma?", "Cho tôi hỏi thăm, gần đây có bưu điện không?"], ["他仔细地询问了公司近年来的发展情况。", "Tā zǐxì de xúnwènle gōngsī jìnnián lái de fāzhǎn qíngkuàng.", "Anh hỏi kỹ tình hình phát triển của công ty những năm gần đây."]] }] },
  ],

  notes: [
    { title: "替", body: "Thay/giúp/vì ai.", say: "替百姓除掉灾害" },
    { title: "说不定", body: "Có thể, chưa chắc.", say: "说不定晚上要出来" },
    { title: "似的", body: "Giống như; mức độ cao.", say: "吓得什么似的" },
  ],

  writeChars: ["除", "夕", "守", "怪", "恨", "咬", "杀", "逃"],

  drills: [],

  qa: [{ title: 'Hoạt động (运用)', items: [{"q": "你们国家过新年有哪些传统食物和风俗？", "hint": "饺子……"}, {"q": "除夕为什么要守岁、放鞭炮？", "hint": "为了赶走“夕”……"}] }],

  sentences: [],

  dictations: [
    { title: "Giáo trình 练习 1 · Điền từ", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "还真让你说对了，他（ ）还不知道这件事。", answer: "果然", gloss: "quả nhiên" },
      { prompt: "两岁的果果是我们家最能（ ）麻烦的人。", answer: "制造", gloss: "gây ra" },
      { prompt: "姑娘脸上表现出很（ ）的样子。", answer: "无奈", gloss: "bất lực" },
      { prompt: "他喜欢音乐、电影、运动，（ ）还喜欢旅行。", answer: "此外", gloss: "ngoài ra" },
      { prompt: "不用送了，（ ）回去吧，家里还有别的客人呢。", answer: "赶紧", gloss: "mau" },
      { prompt: "经常熬夜对身体的（ ）极大。", answer: "伤害", gloss: "tổn hại" },
    ] },
    { title: "Giáo trình 练习 2 / 做一做 / 扩展", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "她（ ）到北京有位医生能治这个病，就带着孩子来了。 (打听/询问)", answer: "打听", gloss: "dò hỏi" },
      { prompt: "我（ ）了几个修过机器的顾客。 (打听/询问)", answer: "询问", gloss: "hỏi" },
      { prompt: "你（ ）给他回个电话，他好像有什么急事找你。", answer: "赶紧", gloss: "mau" },
      { prompt: "我们还是先（ ）好宾馆吧。", answer: "预订", gloss: "đặt trước" },
      { prompt: "你好，我要退房，现在可以（ ）吗？", answer: "结账", gloss: "thanh toán" },
      { prompt: "我昨天刚从英国回来，（ ）还没倒过来。", answer: "时差", gloss: "lệch múi giờ" },
      { prompt: "这里的各大（ ）我都看遍了。", answer: "名胜古迹", gloss: "danh lam thắng cảnh" },
    ] },
  ],
}
