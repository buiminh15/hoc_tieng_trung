import type { Lesson } from '../types'

/** Giáo trình chuẩn HSK 6 (Hạ), Bài 24: 体育明星们的离奇遭遇. Nghĩa từ mới và ngữ pháp theo sách; dịch bài khóa do app thêm. Không có file nghe. Đáp án theo HSK6-BH-T2-DA. */

export const hskStd6Lesson24: Lesson = {
  id: 24,
  title: "Những tai nạn kỳ quặc của các ngôi sao thể thao",
  hanzi: "体育明星们的离奇遭遇",
  pinyin: "Tǐyù míngxīngmen de líqí zāoyù",
  vi: "Những tai nạn kỳ quặc của các ngôi sao thể thao",
  intro: "Những chấn thương và tai nạn dở khóc dở cười của vận động viên. Học 紧缩句, 特意 và so sánh 特意 – 故意.",

  dialogue: [
    { who: 'A', name: '课文', hanzi: "每次看到我们崇拜的体育明星在赛场上冲击奖牌，大家都深信，他们身上的每一处伤疤都是奋力拼搏的标记。可是你知道吗，明星们受伤，有时竟也荒谬得不可思议。", pinyin: "", vi: "Mỗi lần thấy ngôi sao thể thao mình ngưỡng mộ lao vào tranh huy chương trên sân, mọi người đều tin rằng mỗi vết sẹo trên người họ là dấu ấn của nỗ lực chiến đấu. Nhưng bạn có biết, các ngôi sao bị thương có khi lại hoang đường đến khó tin.", scene: "Mở đầu" },
    { who: 'A', name: '课文', hanzi: "曾经有一名足球门将正在比赛中聚精会神地防守，突然，一只狗以火箭般的速度冲了进来，横着冲向他的膝盖，然后向他发起进攻。人们惊呆了，这是阴谋，还是离奇的巧合？门将当场倒地，身受重伤，经久不愈，最后竟因此告别了他心爱的职业。", pinyin: "", vi: "Từng có một thủ môn bóng đá đang tập trung phòng thủ trong trận, bỗng một con chó lao vào với tốc độ như tên lửa, xông ngang vào đầu gối anh rồi tấn công anh. Mọi người sững sờ: đây là âm mưu hay trùng hợp kỳ lạ? Thủ môn ngã ngay tại chỗ, bị thương nặng, lâu không lành, cuối cùng vì thế phải chia tay nghề yêu quý.", scene: "Thủ môn và con chó" },
    { who: 'A', name: '课文', hanzi: "南美足球赛场上的猫头鹰事件，赛后成了头条新闻。事情是这样的，球赛进行得正激烈时，一只很可能是因受伤而“迫降”球场的猫头鹰遮挡住了球员的视线，主裁判出于保护动物的目的，决定中断比赛，可是一名球员已经刹不住车，一只大脚踢向了毫无防御的猫头鹰。可怜的猫头鹰，抢救两天后不治身亡。没想到一场道德讨论就此开始：有人认为想赢球也不能置猫头鹰的生命于不顾，这种只想赢球的心态和比赛精神南辕北辙。一时间，只注重胜负，却将猫头鹰残酷“射杀”致死的行为是否应该被原谅，引起了广泛的争议。人们结结实实地打了一场嘴仗，动物保护组织甚至要和球员打官司；一些球迷认为猫头鹰是球场的守护神，甚至谴责球员就是凶手；被称为“凶手”的球员一定在心中大呼冤枉，但他还是为自己的行为诚恳道歉，道歉之余却也没忘了为自己辩解——他不是成心的。", pinyin: "", vi: "Sự kiện cú mèo trên sân bóng Nam Mỹ sau trận thành tin hàng đầu. Chuyện như sau: khi trận đấu đang kịch liệt, một con cú mèo rất có thể bị thương nên \"hạ cánh khẩn cấp\" xuống sân che mất tầm nhìn cầu thủ; trọng tài chính vì mục đích bảo vệ động vật quyết định dừng trận, nhưng một cầu thủ đã không phanh kịp, đá một cú chân to vào con cú không phòng bị. Con cú đáng thương, cứu chữa hai ngày không qua khỏi. Không ngờ một cuộc thảo luận đạo đức bắt đầu: có người cho rằng muốn thắng cũng không thể bỏ mặc mạng cú, tâm lý chỉ muốn thắng này trái ngược tinh thần thi đấu. Nhất thời, hành vi chỉ chú trọng thắng thua mà tàn nhẫn \"bắn giết\" cú mèo có nên được tha thứ không gây tranh cãi rộng rãi. Mọi người cãi nhau một trận, tổ chức bảo vệ động vật còn đòi kiện cầu thủ; một số cổ động viên cho cú mèo là thần hộ mệnh của sân, thậm chí lên án cầu thủ là hung thủ; cầu thủ bị gọi là \"hung thủ\" hẳn trong lòng kêu oan, nhưng vẫn chân thành xin lỗi hành vi của mình, và ngoài xin lỗi cũng không quên biện hộ — anh không cố ý.", scene: "Con cú mèo" },
    { who: 'A', name: '课文', hanzi: "明星们遭受的伤害有时出人意料。因赛事频繁，航空旅行成了运动员的家常便饭。你相信吗？登机牌也可能成为凶器。曾有运动员在机场被登机牌击中眼睛，并因此错过部分比赛。我们每个人都有过粗心大意的时候，令人悲哀的是，这也可能成为被伤害的原因。一次赛前热身，主办方特意做了警示牌，警告运动员不要在球门里训练，有位运动员一时疏忽正好踩在了警示牌上，由于重心不稳，以致扭伤了脚；还有位同样疏忽的运动员，在折叠熨衣板时肩膀受伤；某国国脚有一次不仅磕破了嘴唇，还磕掉了门牙，当时他仅仅是想从汽车里拽出高尔夫球具。", pinyin: "", vi: "Chấn thương các ngôi sao gặp đôi khi ngoài dự đoán. Vì giải đấu dày, đi máy bay thành chuyện cơm bữa của vận động viên. Bạn tin không? Thẻ lên máy bay cũng có thể thành hung khí. Từng có vận động viên bị thẻ lên máy bay trúng mắt ở sân bay, vì thế bỏ lỡ một phần trận đấu. Ai trong ta cũng có lúc bất cẩn, điều đáng buồn là điều này cũng có thể thành nguyên nhân bị thương. Một lần khởi động trước trận, ban tổ chức đặc biệt làm biển cảnh báo, cảnh báo vận động viên đừng tập trong khung thành; có vận động viên nhất thời sơ suất đạp đúng lên biển cảnh báo, do trọng tâm không vững nên bị bong gân chân; có vận động viên cũng sơ suất, khi gấp bàn ủi bị thương vai; một tuyển thủ quốc gia có lần không chỉ va rách môi mà còn va gãy răng cửa, khi đó anh chỉ muốn kéo bộ gậy golf ra khỏi xe.", scene: "Thẻ lên máy bay" },
    { who: 'A', name: '课文', hanzi: "汉语有个词叫乐极生悲，说的就应该是下面这位球员：在打进一球后，他冲入观众席和球迷一起庆祝，结果结婚戒指连同他的手指一起挂在了围栏上，手指受重伤。更让他恼火的是，不了解情况的主裁判还给了他一张黄牌，真可谓雪上加霜！最荒唐的受伤当属某国国脚。他的脚指甲旁边长了个血泡，他决定自己处置。各种工具他都看不上，最后选中的竟然是电钻，由于用力过猛，把脚弄破了，以致感染，遭受了难以想象的痛苦。看来医生也不是谁想当就能当的，虽然在真正的医生眼里这只是个微不足道的小手术。", pinyin: "", vi: "Tiếng Hán có từ \"vui quá hóa buồn\", nói đúng cầu thủ sau đây: sau khi ghi bàn, anh lao vào khán đài ăn mừng cùng cổ động viên, kết quả nhẫn cưới cùng ngón tay mắc vào hàng rào, ngón tay bị thương nặng. Điều khiến anh tức hơn là trọng tài chính không hiểu tình hình còn rút cho anh thẻ vàng, thật đúng là họa vô đơn chí! Chấn thương hoang đường nhất phải kể đến một tuyển thủ quốc gia. Cạnh móng chân anh mọc một bọng máu, anh quyết định tự xử lý. Anh chê mọi dụng cụ, cuối cùng chọn lại là máy khoan điện, do dùng sức quá mạnh làm rách chân, dẫn đến nhiễm trùng, chịu đau đớn khó tưởng tượng. Xem ra bác sĩ không phải ai muốn làm cũng làm được, dù trong mắt bác sĩ thật sự đây chỉ là tiểu phẫu không đáng kể.", scene: "Vui quá hóa buồn" },
    { who: 'A', name: '课文', hanzi: "其实离奇伤害不仅存在于运动员当中，它也紧紧跟随着我们每一个人，只要你疏忽、大意。", pinyin: "", vi: "Thật ra thương tích kỳ quặc không chỉ có ở vận động viên, nó cũng bám sát mỗi người chúng ta, chỉ cần bạn sơ suất, chủ quan.", scene: "Kết" },
  ],
  dialogueTip: "<b>紧缩句</b>. <b>特意</b>. <b>特意</b>/<b>故意</b>.",
  slowSay: "体育明星们的离奇遭遇",

  vocab: [
    { hanzi: "离奇", pinyin: "líqí", pos: "tính từ", meaning: "ly kỳ, lạ lùng", han_viet: '' },
    { hanzi: "崇拜", pinyin: "chóngbài", pos: "động từ", meaning: "sùng bái", han_viet: '' },
    { hanzi: "冲击", pinyin: "chōngjī", pos: "động từ", meaning: "tấn công, xông tới", han_viet: '' },
    { hanzi: "拼搏", pinyin: "pīnbó", pos: "động từ", meaning: "dốc sức chiến đấu", han_viet: '' },
    { hanzi: "聚精会神", pinyin: "jùjīng-huìshén", pos: "thành ngữ", meaning: "tập trung tinh thần", han_viet: '' },
    { hanzi: "防守", pinyin: "fángshǒu", pos: "động từ", meaning: "phòng ngự", han_viet: '' },
    { hanzi: "进攻", pinyin: "jìngōng", pos: "động từ", meaning: "tấn công", han_viet: '' },
    { hanzi: "阴谋", pinyin: "yīnmóu", pos: "danh từ", meaning: "âm mưu", han_viet: '' },
    { hanzi: "当场", pinyin: "dāngchǎng", pos: "phó từ", meaning: "ngay tại chỗ", han_viet: '' },
    { hanzi: "事件", pinyin: "shìjiàn", pos: "danh từ", meaning: "sự kiện", han_viet: '' },
    { hanzi: "遮挡", pinyin: "zhēdǎng", pos: "động từ", meaning: "che, ngăn che", han_viet: '' },
    { hanzi: "裁判", pinyin: "cáipàn", pos: "danh từ", meaning: "trọng tài", han_viet: '' },
    { hanzi: "中断", pinyin: "zhōngduàn", pos: "động từ", meaning: "gián đoạn", han_viet: '' },
    { hanzi: "刹车", pinyin: "shā chē", pos: "động từ", meaning: "phanh lại", han_viet: '' },
    { hanzi: "心态", pinyin: "xīntài", pos: "danh từ", meaning: "trạng thái tâm lý", han_viet: '' },
    { hanzi: "南辕北辙", pinyin: "nányuán-běizhé", pos: "thành ngữ", meaning: "hoàn toàn trái ngược", han_viet: '' },
    { hanzi: "注重", pinyin: "zhùzhòng", pos: "động từ", meaning: "chú trọng", han_viet: '' },
    { hanzi: "胜负", pinyin: "shèngfù", pos: "danh từ", meaning: "sự thắng bại", han_viet: '' },
    { hanzi: "争议", pinyin: "zhēngyì", pos: "động từ", meaning: "bàn cãi", han_viet: '' },
    { hanzi: "打官司", pinyin: "dǎ guānsi", pos: "động từ", meaning: "kiện tụng", han_viet: '' },
    { hanzi: "谴责", pinyin: "qiǎnzé", pos: "động từ", meaning: "khiển trách, lên án", han_viet: '' },
    { hanzi: "冤枉", pinyin: "yuānwang", pos: "động từ", meaning: "đổ oan", han_viet: '' },
    { hanzi: "辩解", pinyin: "biànjiě", pos: "động từ", meaning: "bào chữa", han_viet: '' },
    { hanzi: "成心", pinyin: "chéngxīn", pos: "phó từ", meaning: "cố ý, cố tình", han_viet: '' },
    { hanzi: "意料", pinyin: "yìliào", pos: "động từ", meaning: "dự đoán", han_viet: '' },
    { hanzi: "频繁", pinyin: "pínfán", pos: "tính từ", meaning: "thường xuyên", han_viet: '' },
    { hanzi: "大意", pinyin: "dàyi", pos: "tính từ", meaning: "chủ quan", han_viet: '' },
    { hanzi: "悲哀", pinyin: "bēi’āi", pos: "tính từ", meaning: "xót xa, buồn đau", han_viet: '' },
    { hanzi: "特意", pinyin: "tèyì", pos: "phó từ", meaning: "đặc biệt, cố ý", han_viet: '' },
    { hanzi: "警告", pinyin: "jǐnggào", pos: "động từ", meaning: "cảnh báo", han_viet: '' },
    { hanzi: "疏忽", pinyin: "shūhu", pos: "động từ", meaning: "lơ là, sơ ý", han_viet: '' },
    { hanzi: "重心", pinyin: "zhòngxīn", pos: "danh từ", meaning: "trọng tâm", han_viet: '' },
    { hanzi: "乐极生悲", pinyin: "lèjí-shēngbēi", pos: "thành ngữ", meaning: "vui quá hóa buồn", han_viet: '' },
    { hanzi: "恼火", pinyin: "nǎohuǒ", pos: "tính từ", meaning: "nổi nóng", han_viet: '' },
    { hanzi: "雪上加霜", pinyin: "xuěshàng-jiāshuāng", pos: "thành ngữ", meaning: "họa vô đơn chí", han_viet: '' },
    { hanzi: "荒唐", pinyin: "huāngtáng", pos: "tính từ", meaning: "hoang đường", han_viet: '' },
    { hanzi: "处置", pinyin: "chǔzhì", pos: "động từ", meaning: "xử lý", han_viet: '' },
    { hanzi: "遭受", pinyin: "zāoshòu", pos: "động từ", meaning: "bị, chịu", han_viet: '' },
    { hanzi: "微不足道", pinyin: "wēibùzúdào", pos: "thành ngữ", meaning: "không đáng kể", han_viet: '' },
  ],

  sections: [
    { kind: 'examples', label: "紧缩句", title: "紧缩句 (câu rút gọn)", intro: "紧缩句: dùng hình thức câu đơn để biểu đạt nội dung câu phức; bỏ ngắt nghỉ giữa các vế, từ nối, có khi cả thành phần.", groups: [{ label: 'Ví dụ', items: [["想赢球也不能置猫头鹰的生命于不顾。", "Xiǎng yíng qiú yě bù néng zhì māotóuyīng de shēngmìng yú bú gù.", "Muốn thắng bóng cũng không thể bỏ mặc mạng con cú. (= 即使想赢球，也不能……)"], ["她一回来我就告诉你。", "Tā yì huílái wǒ jiù gàosu nǐ.", "Cô ấy vừa về là tôi báo cho bạn. (= 只要她一回来，我就告诉你)"]] }] },
    { kind: 'examples', label: "特意", title: "特意 (đặc biệt, cố ý vì)", intro: "特意: phó từ, vì một mục đích nào đó mà đặc biệt làm việc gì, thường vì người khác, mang nghĩa tốt.", groups: [{ label: 'Ví dụ', items: [["主办方特意做了警示牌，警告运动员不要在球门里训练。", "Zhǔbànfāng tèyì zuòle jǐngshìpái, jǐnggào yùndòngyuán bú yào zài qiúmén lǐ xùnliàn.", "Ban tổ chức đặc biệt làm biển cảnh báo, nhắc vận động viên đừng tập trong khung thành."], ["这是我特意为你准备的房间，知道你换了地方睡不好觉。", "Zhè shì wǒ tèyì wèi nǐ zhǔnbèi de fángjiān, zhīdào nǐ huànle dìfang shuì bù hǎo jiào.", "Đây là phòng tôi đặc biệt chuẩn bị cho bạn, biết bạn đổi chỗ ngủ không ngon."]] }] },
    { kind: 'examples', label: "特意 – 故意", title: "So sánh 特意 và 故意", intro: "Giống: phó từ, có chủ ý. 特意: nhấn mạnh vì mục đích đặc biệt, nghĩa tốt, không dùng làm danh từ. 故意: cố tình làm điều nên tránh hoặc không nên làm, thường nghĩa xấu, còn làm tính từ, danh từ.", groups: [{ label: 'Ví dụ', items: [["对不起，我不是故意弄坏你的手表的。", "Duìbuqǐ, wǒ bú shì gùyì nònghuài nǐ de shǒubiǎo de.", "Xin lỗi, tôi không cố ý làm hỏng đồng hồ của bạn."], ["听说我马上要回国，妈妈特意准备了我爱吃的家乡菜。", "Tīngshuō wǒ mǎshàng yào huíguó, māma tèyì zhǔnbèile wǒ ài chī de jiāxiāngcài.", "Nghe nói tôi sắp về nước, mẹ đặc biệt chuẩn bị món quê tôi thích."]] }] },
  ],

  notes: [
    { title: "紧缩句", body: "Câu rút gọn.", say: "想赢球也不能……" },
    { title: "特意", body: "Đặc biệt vì.", say: "特意做了警示牌" },
    { title: "特意 – 故意", body: "Đặc biệt / cố tình.", say: "不是成心的" },
  ],

  writeChars: ["崇", "拜", "拼", "搏", "谴", "责", "疏", "忽"],

  drills: [],

  qa: [{ title: 'Hoạt động (运用)', items: [{"q": "你听说过哪些运动员的离奇受伤事件？", "hint": "……"}, {"q": "你有没有因为粗心而受过伤？", "hint": "……"}] }],

  sentences: [],

  dictations: [
    { title: "Giáo trình 练一练 / 练习 3", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "即使得罪他，咱也不怕。→ 紧缩句：（ ）咱也不怕。", answer: "得罪他", gloss: "dù đắc tội" },
      { prompt: "就算你不说，我也能知道。→ 紧缩句：（ ）我也能知道。", answer: "你不说", gloss: "dù bạn không nói" },
      { prompt: "如果你不喜欢，咱们就不买。→ 紧缩句：（ ）就不买。", answer: "要是你不喜欢", gloss: "nếu không thích" },
      { prompt: "为了完成这次采访，（ ）。", answer: "我特意查阅了被采访者的资料", gloss: "đặc biệt tra tư liệu" },
      { prompt: "在动笔写这本书之前，（ ）。", answer: "我特意调查了相关数据", gloss: "đặc biệt điều tra" },
      { prompt: "这是（ ），知道你换了地方睡不好觉。", answer: "我特意为你准备的房间", gloss: "đặc biệt chuẩn bị" },
      { prompt: "这所远近闻名的学校非常（ ）。", answer: "注重学生素质教育的培养", gloss: "chú trọng" },
      { prompt: "听说那个孩子常被养父母虐待，大家纷纷（ ）。", answer: "谴责他们", gloss: "lên án" },
      { prompt: "在这个以精细著称的行业中，（ ）。", answer: "大意是最不能出现的错误", gloss: "chủ quan là lỗi tối kỵ" },
      { prompt: "听说我马上要回国，妈妈（ ）。", answer: "特意准备了我爱吃的家乡菜", gloss: "đặc biệt chuẩn bị" },
      { prompt: "我们之所以（ ）体育明星，是因为他们是奋力拼搏的象征。", answer: "崇拜", gloss: "sùng bái" },
      { prompt: "他们是奋力（ ）的象征。", answer: "拼搏", gloss: "chiến đấu" },
      { prompt: "比赛并不只注重（ ），我们更看重的是运动员们的精神。", answer: "胜负", gloss: "thắng thua" },
      { prompt: "运动员们在（ ）奖牌时表现出来的永不放弃的精神。", answer: "冲击", gloss: "xông tới" },
      { prompt: "永不放弃的精神和良好的（ ）。", answer: "心态", gloss: "tâm lý" },
      { prompt: "大家一致（ ）电梯生产厂家粗制滥造。", answer: "谴责", gloss: "lên án" },
      { prompt: "虽然不是（ ）的，但因为工作人员的疏忽而造成一人死亡。", answer: "成心", gloss: "cố ý" },
      { prompt: "因为工作人员的（ ）而造成一人死亡的后果。", answer: "疏忽", gloss: "sơ suất" },
      { prompt: "他们肯定要面临一场（ ）。", answer: "官司", gloss: "kiện tụng" },
    ] },
  ],
}
