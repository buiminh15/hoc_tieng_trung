import type { Lesson } from '../types'

/** Giáo trình chuẩn HSK 6 (Thượng), Bài 17: 小动物眼中的慢世界. Nghĩa từ mới và ngữ pháp theo sách; dịch bài khóa do app thêm. Không có file nghe. Đáp án theo HSK6-BH-T1-DA. */

export const hskStd6Lesson17: Lesson = {
  id: 17,
  title: "Thế giới chậm trong mắt động vật nhỏ",
  hanzi: "小动物眼中的慢世界",
  pinyin: "Xiǎo dòngwù yǎn zhōng de màn shìjiè",
  vi: "Thế giới chậm trong mắt động vật nhỏ",
  intro: "Vì sao đập ruồi khó thế: trong mắt ruồi, thế giới trôi chậm. Học 东A西B, 中, 姑且 và so sánh 势必 – 一定.",

  dialogue: [
    { who: 'A', name: '课文', hanzi: "你见过这样的场面吗？有人端来一个盛着菜的盘子，立刻飞来一只东张西望的苍蝇，企图落在盘子上，人动手去打，却总是打不中。有人纳闷儿，猫为什么能快速跳跃起来，瞄准都不用，一下就能拍到苍蝇？科学家这样解释：在苍蝇眼里，人类自认为闪电般快速的一拍，只是个慢动作而已。", pinyin: "", vi: "Bạn từng thấy cảnh này chưa? Có người bưng đĩa thức ăn, lập tức một con ruồi đảo mắt nhìn quanh bay tới, định đậu xuống đĩa, người ra tay đập mà luôn không trúng. Có người thắc mắc, sao mèo nhảy vọt nhanh, chẳng cần ngắm mà một vồ là chụp được ruồi? Nhà khoa học giải thích: trong mắt ruồi, cú đập nhanh như chớp mà con người tự cho là, chỉ là một động tác chậm.", scene: "Cảnh đập ruồi" },
    { who: 'A', name: '课文', hanzi: "有研究表明，昆虫这样的小动物，一秒钟之内接收的信息量，比人类等体型大的生物多得多。如果你观察一下鸽子就会发现，当它的视线扫过周边时，它在微微颤抖，看上去好像体内有另外一个钟表，走得比我们快好几倍。确切地说，在小动物眼里，人类反应迟钝、动作迟缓，它们看人类，就像人类看庞大、笨拙的大象。", pinyin: "", vi: "Nghiên cứu cho thấy động vật nhỏ như côn trùng, trong một giây tiếp nhận lượng thông tin nhiều hơn hẳn sinh vật cỡ người. Quan sát chim bồ câu sẽ thấy, khi tầm nhìn quét qua xung quanh, nó run nhẹ, trông như bên trong có một chiếc đồng hồ khác chạy nhanh hơn ta mấy lần. Nói chính xác, trong mắt động vật nhỏ, con người phản ứng chậm chạp, động tác ì ạch; chúng nhìn người như người nhìn con voi to lớn, vụng về.", scene: "Tốc độ cảm nhận" },
    { who: 'A', name: '课文', hanzi: "为了量化这种看不见、摸不着的视觉感知，科研人员采用了临界闪光频率的办法。“临界闪光频率”简称“CFF (Critical Flicker Frequency)”，比方说，当一个间隔频率较低的光刺激我们的眼睛时，我们看到的是一明一暗的闪烁，随着光刺激间隔的缩短，我们的视力感到的就会是一个连续的光。CFF值反映的就是眼睛处理光线的速度。处理速度越快，CFF值就越高。", pinyin: "", vi: "Để lượng hóa cảm nhận thị giác vô hình vô ảnh này, các nhà nghiên cứu dùng tần số nhấp nháy tới hạn. \"Tần số nhấp nháy tới hạn\" gọi tắt là CFF; chẳng hạn khi ánh sáng kích thích tần số cách quãng thấp chiếu vào mắt, ta thấy lúc sáng lúc tối nhấp nháy, khi khoảng cách kích thích rút ngắn, thị giác cảm nhận thành một luồng sáng liên tục. Giá trị CFF phản ánh tốc độ mắt xử lý ánh sáng. Xử lý càng nhanh, CFF càng cao.", scene: "CFF" },
    { who: 'A', name: '课文', hanzi: "人眼的CFF为60HZ左右，狗，哦，我们姑且换一个文雅的称呼吧，犬的CFF为80HZ。在犬的眼里，电视画面不是连续的，而是一系列静止图像的迅速变换。苍蝇的CFF高达250HZ，对视觉刺激的反应速度是人眼的4倍。", pinyin: "", vi: "CFF của mắt người khoảng 60HZ; chó, ồ, tạm đổi cách gọi nho nhã hơn, \"khuyển\" có CFF 80HZ. Trong mắt chó, hình ảnh TV không liên tục mà là chuỗi ảnh tĩnh chuyển nhanh. CFF của ruồi cao tới 250HZ, tốc độ phản ứng với kích thích thị giác gấp 4 lần mắt người.", scene: "Con số" },
    { who: 'A', name: '课文', hanzi: "有科学家推论，物种的CFF与其本身的体重和新陈代谢速率有关。体型越小，信号传达到大脑所需时间越短；新陈代谢速率越高，说明传递过程有更充足的能量支持。在论证这一推论时，科学家筛选出34种动物，把它们的典型体重、代谢速率和CFF标记在同一张图表中，变量显示出了显著的相关性。在科学家的研究中，CFF值名次最靠前的是松鼠。", pinyin: "", vi: "Có nhà khoa học suy luận CFF của loài có liên quan đến trọng lượng và tốc độ trao đổi chất của bản thân. Thể hình càng nhỏ, tín hiệu truyền đến não càng ít thời gian; trao đổi chất càng cao, chứng tỏ quá trình truyền có năng lượng dồi dào hơn hỗ trợ. Khi chứng minh suy luận này, nhà khoa học sàng lọc 34 loài, đánh dấu trọng lượng điển hình, tốc độ trao đổi chất và CFF vào cùng một biểu đồ, các biến số cho thấy tương quan rõ rệt. Trong nghiên cứu, loài có CFF xếp đầu là sóc.", scene: "Suy luận" },
    { who: 'A', name: '课文', hanzi: "我们也许曾经发出过这样的感慨：看似渺小的苍蝇既然能躲过人类的攻击，势必有其过人之处。确实，它们没有博大精深的思想，不能进行深奥的思考，对强大的对手无能为力，但对外部环境能迅速做出判断，使它们有了更多的生存机会，这一优势真的实惠极了。信息处理速度上的差别，也是小动物看上去更敏捷的原因。小猫小狗甚至小孩儿，总显得比成年个体更为好动和焦急，其实对于他们，这只是个悠闲的速度。", pinyin: "", vi: "Có lẽ ta từng cảm thán: con ruồi trông nhỏ bé đã tránh được đòn tấn công của loài người, ắt có chỗ hơn người. Đúng vậy, chúng không có tư tưởng uyên bác, không suy nghĩ sâu xa, bất lực trước đối thủ mạnh, nhưng phán đoán nhanh môi trường bên ngoài, giúp chúng có thêm cơ hội sống, ưu thế này thật thiết thực. Chênh lệch tốc độ xử lý thông tin cũng là lý do động vật nhỏ trông nhanh nhẹn hơn. Mèo con, chó con, thậm chí trẻ nhỏ, luôn có vẻ hiếu động và nôn nóng hơn cá thể trưởng thành, thật ra với chúng đây chỉ là tốc độ thong thả.", scene: "Ưu thế" },
  ],
  dialogueTip: "<b>东A西B</b>. <b>中 (zhòng)</b>. <b>姑且</b>. <b>势必</b>/<b>一定</b>.",
  slowSay: "小动物眼中的慢世界",

  vocab: [
    { hanzi: "场面", pinyin: "chǎngmiàn", pos: "danh từ", meaning: "cảnh (tượng)", han_viet: '' },
    { hanzi: "端", pinyin: "duān", pos: "động từ", meaning: "bưng", han_viet: '' },
    { hanzi: "东张西望", pinyin: "dōngzhāng-xīwàng", pos: "thành ngữ", meaning: "nhìn ngang nhìn dọc", han_viet: '' },
    { hanzi: "企图", pinyin: "qǐtú", pos: "động từ", meaning: "mưu tính, định", han_viet: '' },
    { hanzi: "动手", pinyin: "dòngshǒu", pos: "động từ", meaning: "ra tay", han_viet: '' },
    { hanzi: "纳闷儿", pinyin: "nàmènr", pos: "động từ", meaning: "thắc mắc, khó hiểu", han_viet: '' },
    { hanzi: "瞄准", pinyin: "miáozhǔn", pos: "động từ", meaning: "nhắm đúng", han_viet: '' },
    { hanzi: "视线", pinyin: "shìxiàn", pos: "danh từ", meaning: "tầm nhìn", han_viet: '' },
    { hanzi: "周边", pinyin: "zhōubiān", pos: "danh từ", meaning: "xung quanh", han_viet: '' },
    { hanzi: "确切", pinyin: "quèqiè", pos: "tính từ", meaning: "chính xác", han_viet: '' },
    { hanzi: "迟钝", pinyin: "chídùn", pos: "tính từ", meaning: "chậm chạp, không nhạy", han_viet: '' },
    { hanzi: "迟缓", pinyin: "chíhuǎn", pos: "tính từ", meaning: "chậm rãi", han_viet: '' },
    { hanzi: "笨拙", pinyin: "bènzhuō", pos: "tính từ", meaning: "vụng về", han_viet: '' },
    { hanzi: "比方", pinyin: "bǐfang", pos: "động từ", meaning: "ví dụ như", han_viet: '' },
    { hanzi: "姑且", pinyin: "gūqiě", pos: "phó từ", meaning: "tạm thời", han_viet: '' },
    { hanzi: "推论", pinyin: "tuīlùn", pos: "động từ", meaning: "suy luận", han_viet: '' },
    { hanzi: "本身", pinyin: "běnshēn", pos: "danh từ", meaning: "bản thân", han_viet: '' },
    { hanzi: "新陈代谢", pinyin: "xīnchén-dàixiè", pos: "thành ngữ", meaning: "trao đổi chất", han_viet: '' },
    { hanzi: "论证", pinyin: "lùnzhèng", pos: "động từ", meaning: "chứng minh", han_viet: '' },
    { hanzi: "筛选", pinyin: "shāixuǎn", pos: "động từ", meaning: "sàng lọc", han_viet: '' },
    { hanzi: "标记", pinyin: "biāojì", pos: "động từ", meaning: "đánh dấu", han_viet: '' },
    { hanzi: "感慨", pinyin: "gǎnkǎi", pos: "động từ", meaning: "cảm khái", han_viet: '' },
    { hanzi: "渺小", pinyin: "miǎoxiǎo", pos: "tính từ", meaning: "nhỏ bé", han_viet: '' },
    { hanzi: "势必", pinyin: "shìbì", pos: "phó từ", meaning: "tất phải", han_viet: '' },
    { hanzi: "无能为力", pinyin: "wúnéngwéilì", pos: "thành ngữ", meaning: "bất lực", han_viet: '' },
    { hanzi: "实惠", pinyin: "shíhuì", pos: "tính từ", meaning: "thiết thực", han_viet: '' },
    { hanzi: "焦急", pinyin: "jiāojí", pos: "tính từ", meaning: "nôn nóng", han_viet: '' },
  ],

  sections: [
    { kind: 'examples', label: "东A西B", title: "东A西B (cấu trúc “đông… tây…”)", intro: "东张西望 hình thành từ \"东A西B\", nghĩa \"chỗ này …, chỗ kia …\"; A, B thường là từ gần nghĩa. Ví dụ khác: 东拉西扯, 东躲西藏.", groups: [{ label: 'Ví dụ', items: [["有人端来一个盛着菜的盘子，立刻飞来一只东张西望的苍蝇。", "Yǒu rén duānlái yí gè chéngzhe cài de pánzi, lìkè fēilái yì zhī dōngzhāng-xīwàng de cāngying.", "Có người bưng đĩa thức ăn, lập tức một con ruồi đảo mắt nhìn quanh bay tới."], ["大家吃完饭没事干，只好东拉西扯地闲聊天儿。", "Dàjiā chīwán fàn méi shì gàn, zhǐhǎo dōnglā-xīchě de xiánliáo tiānr.", "Ăn cơm xong chẳng có việc gì, mọi người đành nói chuyện phiếm linh tinh."]] }] },
    { kind: 'examples', label: "中", title: "中 (zhòng)", intro: "中 (zhòng): động từ. ① \"trúng, đúng vào\"; ② \"bị, mắc\" (trúng nắng, trúng độc).", groups: [{ label: 'Ví dụ', items: [["人动手去打，却总是打不中。", "Rén dòngshǒu qù dǎ, què zǒngshì dǎ bú zhòng.", "Người ra tay đập mà luôn không trúng."], ["中午太热，小心出门中暑。", "Zhōngwǔ tài rè, xiǎoxīn chūmén zhòngshǔ.", "Buổi trưa nóng, ra ngoài cẩn thận kẻo trúng nắng."]] }] },
    { kind: 'examples', label: "姑且", title: "姑且 (tạm thời)", intro: "姑且: phó từ, chỉ trong tình huống bất đắc dĩ tạm làm như vậy, sau này sẽ tính khác; hàm ý miễn cưỡng, nhượng bộ.", groups: [{ label: 'Ví dụ', items: [["狗，哦，我们姑且换一个文雅的称呼吧，犬的CFF为80HZ。", "Gǒu, ò, wǒmen gūqiě huàn yí gè wényǎ de chēnghu ba, quǎn de CFF wéi bāshí HZ.", "Chó, ồ, ta tạm đổi cách gọi nho nhã hơn, CFF của khuyển là 80HZ."], ["别让你妈妈着急了，你姑且按她说的做吧。", "Bié ràng nǐ māma zháojí le, nǐ gūqiě àn tā shuō de zuò ba.", "Đừng để mẹ bạn sốt ruột, tạm cứ làm theo lời bà đi."]] }] },
    { kind: 'examples', label: "势必 – 一定", title: "So sánh 势必 và 一定", intro: "Giống: phó từ, \"ắt sẽ như thế\". 势必: suy đoán theo diễn biến, kết quả thường bất lợi; chỉ làm phó từ. 一定: suy đoán nhưng không nhất thiết bất lợi; còn chỉ thái độ kiên quyết (一定要/得), và làm tính từ \"nhất định, quy định\".", groups: [{ label: 'Ví dụ', items: [["人口过度增长势必影响经济水平的提高。", "Rénkǒu guòdù zēngzhǎng shìbì yǐngxiǎng jīngjì shuǐpíng de tígāo.", "Dân số tăng quá mức ắt ảnh hưởng đến việc nâng cao trình độ kinh tế."], ["要想学好汉语，一定得努力。", "Yào xiǎng xuéhǎo Hànyǔ, yídìng děi nǔlì.", "Muốn học tốt tiếng Hán nhất định phải cố gắng."]] }] },
  ],

  notes: [
    { title: "东A西B", body: "Đông A tây B.", say: "东张西望 / 东拉西扯" },
    { title: "中 (zhòng)", body: "Trúng; bị.", say: "打不中 / 中暑" },
    { title: "姑且", body: "Tạm thời.", say: "姑且换一个称呼" },
    { title: "势必 – 一定", body: "Ắt sẽ / nhất định.", say: "势必有其过人之处" },
  ],

  writeChars: ["苍", "蝇", "瞄", "颤", "迟", "钝", "缓", "拙"],

  drills: [],

  qa: [{ title: 'Hoạt động (运用)', items: [{"q": "你觉得动物眼里的世界是什么样的？", "hint": "……"}, {"q": "你有没有被苍蝇“耍”过？", "hint": "……"}] }],

  sentences: [],

  dictations: [
    { title: "Giáo trình 做一做 / 练一练 / 练习 3", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "那孩子像是找不到家了，站在路口，（ ），显得有些着急。", answer: "东张西望", gloss: "đảo mắt" },
      { prompt: "黑猫被打败了，被大黄猫追得（ ），跳上跳下。", answer: "东躲西藏", gloss: "trốn đông trốn tây" },
      { prompt: "坐在火车上，大家都没事，便天南海北，（ ）地闲聊起来。", answer: "东拉西扯", gloss: "nói linh tinh" },
      { prompt: "人人都不遵守交通规则，（ ）会导致交通混乱。", answer: "势必", gloss: "ắt sẽ" },
      { prompt: "这件事就交给你了，你（ ）要把它办好。", answer: "一定", gloss: "nhất định" },
      { prompt: "他学习这么好，（ ）能考上名牌大学。", answer: "一定", gloss: "chắc chắn" },
      { prompt: "他没日没夜地工作，吃饭睡觉都没有（ ）的时间。", answer: "一定", gloss: "cố định" },
      { prompt: "小偷在（ ）偷东西时，总是先东张西望。", answer: "企图", gloss: "định" },
      { prompt: "看看（ ）有没有人注意自己。", answer: "周边", gloss: "xung quanh" },
      { prompt: "当（ ）知道没人注意时，他们再动手偷。", answer: "确切", gloss: "chắc chắn" },
      { prompt: "他们再（ ）偷。", answer: "动手", gloss: "ra tay" },
      { prompt: "随着年龄的增长，反应越来越（ ），行动越来越迟缓。", answer: "迟钝", gloss: "chậm chạp" },
      { prompt: "随着年龄的增长，行动越来越（ ）。", answer: "迟缓", gloss: "chậm" },
      { prompt: "我们（ ）的新陈代谢也逐渐变慢。", answer: "本身", gloss: "bản thân" },
      { prompt: "我们本身的（ ）也逐渐变慢。", answer: "新陈代谢", gloss: "trao đổi chất" },
      { prompt: "年轻时轻而易举就能做到的动作，到了老年却（ ）了。", answer: "无能为力", gloss: "bất lực" },
    ] },
  ],
}
