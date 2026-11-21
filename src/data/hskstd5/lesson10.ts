import type { Lesson } from '../types'

/** Giáo trình chuẩn HSK 5 (Thượng), Bài 10: 争论的奇迹. Nghĩa từ mới và ngữ pháp theo sách; dịch bài khóa do app thêm. Không có file nghe. Đáp án theo HSK5-BH1. */

export const hskStd5Lesson10: Lesson = {
  id: 10,
  title: "Kỳ tích của cuộc tranh luận",
  hanzi: "争论的奇迹",
  pinyin: "Zhēnglùn de qíjì",
  vi: "Kỳ tích của cuộc tranh luận",
  intro: "Cuộc tranh luận ngựa phi và sự ra đời của điện ảnh. Học 毕竟, 逐渐, 或许 và so sánh 显示 – 显得.",

  dialogue: [
    { who: 'A', name: '课文', hanzi: "1872年的一天，在美国加利福尼亚州的一个酒店里，斯坦福与科恩围绕“马奔跑时蹄子是否着地”进行了辩论。斯坦福认为，马奔跑得那么快，在跳起时四蹄应该都是不落地的；而科恩认为，马要是四蹄都不着地，那不是成了青蛙啦？应该是始终有一蹄着地。两人各执一词，争论得脸红脖子粗，谁也说服不了谁。于是他们就请摄影师麦布里奇来判断，可麦布里奇也弄不清楚。", pinyin: "", vi: "Một ngày năm 1872, trong khách sạn ở California, Mỹ, Stanford và Cohen tranh luận về việc \"ngựa phi có móng chạm đất không\". Stanford cho rằng ngựa phi nhanh thế, lúc bật lên bốn móng đều không chạm đất; Cohen cho rằng bốn móng không chạm đất thì thành ếch à? Phải luôn có một móng chạm đất. Hai người mỗi người một ý, cãi đỏ mặt tía tai, không ai thuyết phục được ai. Họ mời nhiếp ảnh gia Muybridge phân xử nhưng ông cũng không rõ.", scene: "Cuộc tranh luận" },
    { who: 'A', name: '课文', hanzi: "不过摄影师毕竟是摄影师，主意还是有的。他们一起来到一个操场，在一条跑道的一边等距离放上24个照相机，照相机对准跑道；在跑道另一边打24个洞，分别插进24根木棍，木棍上系着细线，细线穿过跑道，接上相机快门。一切都准备好了，麦布里奇让一匹马从跑道的一头飞奔到另一头，马一边跑，一边按顺序撞断拦路的24根细线，相机连续拍下了24张相片，相邻两张相片的差距都很小。相片显示：马奔跑时始终有一蹄着地，科恩赢了。", pinyin: "", vi: "Nhưng nhiếp ảnh gia rốt cuộc vẫn là nhiếp ảnh gia, có cách. Họ ra sân tập, đặt 24 máy ảnh cách đều một bên đường chạy hướng về đường; bên kia khoét 24 lỗ cắm 24 cây gậy, buộc dây mảnh vắt ngang đường chạy nối vào cò máy ảnh. Mọi thứ xong, Muybridge cho một con ngựa phi từ đầu này sang đầu kia, ngựa vừa chạy vừa lần lượt đứt 24 sợi dây, máy ảnh chụp liên tiếp 24 tấm, hai ảnh kề nhau khác nhau rất ít. Ảnh cho thấy: ngựa phi luôn có một móng chạm đất, Cohen thắng.", scene: "Thí nghiệm" },
    { who: 'A', name: '课文', hanzi: "事后，有人无意识地快速拉动那一长串相片，“奇迹”出现了：各张相片中静止的马连成了一匹运动的马，相片“活”了。这就是电影最早的样子。经过艰苦的试验，电影拍摄技术逐渐改进、成熟。1895年12月28日，法国人卢米埃尔兄弟在巴黎第一次向公众播放了短片《火车到站》，这一天后来成为电影产生的纪念日，兄弟俩也成为历史上最早的电影导演。", pinyin: "", vi: "Sau đó có người vô ý kéo nhanh chuỗi ảnh dài ấy, \"kỳ tích\" xuất hiện: các ảnh ngựa tĩnh nối thành một con ngựa chuyển động, ảnh \"sống\" dậy. Đó là hình hài sớm nhất của điện ảnh. Qua thí nghiệm gian khổ, kỹ thuật quay phim dần cải tiến và chín muồi. Ngày 28/12/1895 anh em Lumière người Pháp lần đầu chiếu cho công chúng ở Paris đoạn phim ngắn \"Tàu đến ga\", ngày này thành ngày kỷ niệm ra đời điện ảnh, hai anh em thành đạo diễn đầu tiên trong lịch sử.", scene: "Điện ảnh ra đời" },
    { who: 'A', name: '课文', hanzi: "留心生活的每一瞬间，并为之争论，适时请求帮助、认真研究，或许重大发现就在你的眼前。", pinyin: "", vi: "Hãy để tâm từng khoảnh khắc cuộc sống, tranh luận vì nó, nhờ giúp đúng lúc, nghiên cứu nghiêm túc, có lẽ phát hiện lớn ngay trước mắt bạn.", scene: "Kết luận" },
  ],
  dialogueTip: "<b>毕竟</b>: dẫu sao. <b>逐渐</b>: dần dần. <b>或许</b>: có lẽ. <b>显示</b>/<b>显得</b>.",
  slowSay: "争论的奇迹",

  vocab: [
    { hanzi: "争论", pinyin: "zhēnglùn", pos: "động từ", meaning: "tranh luận", han_viet: '' },
    { hanzi: "奇迹", pinyin: "qíjì", pos: "danh từ", meaning: "kỳ tích", han_viet: '' },
    { hanzi: "围绕", pinyin: "wéirào", pos: "động từ", meaning: "xoay quanh", han_viet: '' },
    { hanzi: "奔跑", pinyin: "bēnpǎo", pos: "động từ", meaning: "chạy nhanh", han_viet: '' },
    { hanzi: "蹄(子)", pinyin: "tí(zi)", pos: "danh từ", meaning: "móng guốc", han_viet: '' },
    { hanzi: "辩论", pinyin: "biànlùn", pos: "động từ", meaning: "biện luận", han_viet: '' },
    { hanzi: "青蛙", pinyin: "qīngwā", pos: "danh từ", meaning: "ếch nhái", han_viet: '' },
    { hanzi: "始终", pinyin: "shǐzhōng", pos: "phó từ", meaning: "từ đầu đến cuối", han_viet: '' },
    { hanzi: "脖子", pinyin: "bózi", pos: "danh từ", meaning: "cổ", han_viet: '' },
    { hanzi: "说服", pinyin: "shuōfú", pos: "động từ", meaning: "thuyết phục", han_viet: '' },
    { hanzi: "摄影师", pinyin: "shèyǐngshī", pos: "danh từ", meaning: "nhà nhiếp ảnh", han_viet: '' },
    { hanzi: "毕竟", pinyin: "bìjìng", pos: "phó từ", meaning: "rốt cuộc", han_viet: '' },
    { hanzi: "操场", pinyin: "cāochǎng", pos: "danh từ", meaning: "sân thể thao", han_viet: '' },
    { hanzi: "洞", pinyin: "dòng", pos: "danh từ", meaning: "hốc, lỗ", han_viet: '' },
    { hanzi: "插", pinyin: "chā", pos: "động từ", meaning: "cắm", han_viet: '' },
    { hanzi: "棍", pinyin: "gùn", pos: "danh từ", meaning: "gậy", han_viet: '' },
    { hanzi: "系", pinyin: "jì", pos: "động từ", meaning: "cột, buộc", han_viet: '' },
    { hanzi: "匹", pinyin: "pǐ", pos: "lượng từ", meaning: "con (ngựa)", han_viet: '' },
    { hanzi: "拦", pinyin: "lán", pos: "động từ", meaning: "chặn", han_viet: '' },
    { hanzi: "拍", pinyin: "pāi", pos: "động từ", meaning: "chụp, quay", han_viet: '' },
    { hanzi: "差距", pinyin: "chājù", pos: "danh từ", meaning: "sự chênh lệch", han_viet: '' },
    { hanzi: "显示", pinyin: "xiǎnshì", pos: "động từ", meaning: "cho thấy", han_viet: '' },
    { hanzi: "意识", pinyin: "yìshi", pos: "danh từ/động từ", meaning: "ý thức", han_viet: '' },
    { hanzi: "艰苦", pinyin: "jiānkǔ", pos: "tính từ", meaning: "gian khổ", han_viet: '' },
    { hanzi: "试验", pinyin: "shìyàn", pos: "động từ/danh từ", meaning: "thử nghiệm", han_viet: '' },
    { hanzi: "逐渐", pinyin: "zhújiàn", pos: "phó từ", meaning: "dần dần", han_viet: '' },
    { hanzi: "改进", pinyin: "gǎijìn", pos: "động từ", meaning: "cải tiến", han_viet: '' },
    { hanzi: "成熟", pinyin: "chéngshú", pos: "tính từ/động từ", meaning: "chín muồi", han_viet: '' },
    { hanzi: "兄弟", pinyin: "xiōngdì", pos: "danh từ", meaning: "anh em", han_viet: '' },
    { hanzi: "播放", pinyin: "bōfàng", pos: "động từ", meaning: "phát, chiếu", han_viet: '' },
    { hanzi: "纪念", pinyin: "jìniàn", pos: "động từ", meaning: "kỷ niệm", han_viet: '' },
    { hanzi: "导演", pinyin: "dǎoyǎn", pos: "danh từ", meaning: "đạo diễn", han_viet: '' },
    { hanzi: "瞬间", pinyin: "shùnjiān", pos: "danh từ", meaning: "khoảnh khắc", han_viet: '' },
    { hanzi: "请求", pinyin: "qǐngqiú", pos: "động từ/danh từ", meaning: "yêu cầu", han_viet: '' },
    { hanzi: "或许", pinyin: "huòxǔ", pos: "phó từ", meaning: "có lẽ", han_viet: '' },
    { hanzi: "重大", pinyin: "zhòngdà", pos: "tính từ", meaning: "trọng đại", han_viet: '' },
  ],

  sections: [
    { kind: 'examples', label: "毕竟", title: "毕竟 (rốt cuộc)", intro: "毕竟: phó từ \"dẫu sao, cuối cùng\", cũng nhấn mạnh điểm quan trọng nhất.", groups: [{ label: 'Ví dụ', items: [["虽然我们遇到了很多困难，但毕竟完成了任务。", "Suīrán wǒmen yùdàole hěn duō kùnnan, dàn bìjìng wánchéngle rènwu.", "Tuy gặp nhiều khó khăn nhưng rốt cuộc đã hoàn thành nhiệm vụ."], ["不过摄影师毕竟是摄影师，主意还是有的。", "Búguò shèyǐngshī bìjìng shì shèyǐngshī, zhǔyi háishi yǒu de.", "Nhưng nhiếp ảnh gia rốt cuộc vẫn là nhiếp ảnh gia, có cách."]] }] },
    { kind: 'examples', label: "逐渐", title: "逐渐 (dần dần)", intro: "逐渐: phó từ, mức độ/số lượng tăng hoặc giảm từng chút.", groups: [{ label: 'Ví dụ', items: [["食物越来越少，老人不得不逐渐限制猴子的食量。", "Shíwù yuè lái yuè shǎo, lǎorén bùdébù zhújiàn xiànzhì hóuzi de shíliàng.", "Thức ăn ngày càng ít, ông buộc phải dần hạn chế lượng ăn của khỉ."], ["经过艰苦的试验，电影拍摄技术逐渐改进、成熟。", "Jīngguò jiānkǔ de shìyàn, diànyǐng pāishè jìshù zhújiàn gǎijìn, chéngshú.", "Qua thử nghiệm gian khổ, kỹ thuật quay phim dần cải tiến, chín muồi."]] }] },
    { kind: 'examples', label: "或许", title: "或许 (có lẽ)", intro: "或许: phó từ = 也许, có thể.", groups: [{ label: 'Ví dụ', items: [["虽然以前她不支持你，但或许这次会有变化。", "Suīrán yǐqián tā bù zhīchí nǐ, dàn huòxǔ zhè cì huì yǒu biànhuà.", "Tuy trước cô không ủng hộ, nhưng có lẽ lần này sẽ khác."], ["或许重大发现就在你的眼前。", "Huòxǔ zhòngdà fāxiàn jiù zài nǐ de yǎnqián.", "Có lẽ phát hiện lớn ngay trước mắt bạn."]] }] },
    { kind: 'examples', label: "显示 – 显得", title: "So sánh 显示 và 显得", intro: "Đều là \"lộ ra\". 显示: chỉ ra thái độ, năng lực, tình hình; đi với danh từ/câu nhỏ. 显得: chỉ ra đặc tính; đi với tính từ.", groups: [{ label: 'Ví dụ', items: [["相片显示：马奔跑时始终有一蹄着地。", "Xiàngpiàn xiǎnshì: mǎ bēnpǎo shí shǐzhōng yǒu yì tí zhuó dì.", "Ảnh cho thấy: ngựa phi luôn có một móng chạm đất."], ["几年不见，他显得成熟多了。", "Jǐ nián bú jiàn, tā xiǎnde chéngshú duō le.", "Mấy năm không gặp, anh trông chín chắn hơn nhiều."]] }] },
  ],

  notes: [
    { title: "毕竟", body: "Dẫu sao, rốt cuộc.", say: "摄影师毕竟是摄影师" },
    { title: "逐渐", body: "Dần dần.", say: "逐渐改进、成熟" },
    { title: "或许", body: "Có lẽ.", say: "或许重大发现就在眼前" },
  ],

  writeChars: ["争", "论", "奇", "迹", "蹄", "辩", "摄", "显"],

  drills: [],

  qa: [{ title: 'Hoạt động (运用)', items: [{"q": "你认为这个故事说明了什么？", "hint": "……"}, {"q": "你知道哪些与手有关的动词？", "hint": "拍、插、拦、系……"}] }],

  sentences: [],

  dictations: [
    { title: "Giáo trình 练习 1", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "你今天（ ）这条领带吧，比较正式。", answer: "系", gloss: "thắt" },
      { prompt: "地球为什么会（ ）太阳转。", answer: "围绕", gloss: "xoay quanh" },
      { prompt: "如果不是他在中间（ ）了一手，事情不会变成现在这样。", answer: "插", gloss: "xen vào" },
      { prompt: "这位导演（ ）过二十几部电影。", answer: "拍", gloss: "quay" },
      { prompt: "我始终没有办法（ ）他接受这个结论。", answer: "说服", gloss: "thuyết phục" },
      { prompt: "前面不知道发生了什么事，路被（ ）住了。", answer: "拦", gloss: "chặn" },
    ] },
    { title: "Giáo trình 练习 2 / 做一做 / 扩展", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "在昨天举行的（ ）赛上，他的表现得到了大家的好评。 (争论/辩论)", answer: "辩论", gloss: "biện luận" },
      { prompt: "毕业二十年以来，我们（ ）保持着联系。 (始终/终于)", answer: "始终", gloss: "từ đầu đến cuối" },
      { prompt: "我们之间还有很大的（ ），我要向他学习。", answer: "差距", gloss: "chênh lệch" },
      { prompt: "吃中餐（ ）西餐都可以。 (或者/或许)", answer: "或者", gloss: "hoặc" },
      { prompt: "（ ）是秋天了，再热也不会像夏天那样。", answer: "毕竟", gloss: "dẫu sao" },
      { prompt: "这是已经经过很多人证明的（ ）经验。", answer: "成熟", gloss: "chín muồi" },
      { prompt: "真心希望您能同意我的（ ），帮我这个忙！", answer: "请求", gloss: "thỉnh cầu" },
      { prompt: "调查（ ），只有37%的人愿意回到没有手机的时代。", answer: "显示", gloss: "cho thấy" },
      { prompt: "节日的北京（ ）更加美丽。", answer: "显得", gloss: "trông" },
      { prompt: "天气太冷了，你系条（ ）再出去吧。", answer: "围巾", gloss: "khăn quàng" },
      { prompt: "我们去年买的那双（ ）你放在哪儿了？", answer: "手套", gloss: "găng tay" },
      { prompt: "终于可以穿（ ）了。", answer: "牛仔裤", gloss: "quần jean" },
      { prompt: "您觉得这条（ ）怎么样？", answer: "领带", gloss: "cà vạt" },
    ] },
  ],
}
