import type { Lesson } from '../types'

/** Giáo trình chuẩn HSK 5 (Thượng), Bài 16: 体重与节食. Nghĩa từ mới và ngữ pháp theo sách; dịch bài khóa do app thêm. Không có file nghe. Đáp án theo HSK5-BH1. */

export const hskStd5Lesson16: Lesson = {
  id: 16,
  title: "Cân nặng và ăn kiêng",
  hanzi: "体重与节食",
  pinyin: "Tǐzhòng yǔ jiéshí",
  vi: "Cân nặng và ăn kiêng",
  intro: "Nghiên cứu về dao động cân nặng trong tuần. Học 即, so sánh 暂时 – 临时 và các từ về cơ thể (打喷嚏, 过敏, 痒, 消化).",

  dialogue: [
    { who: 'A', name: '课文', hanzi: "据报道，医学专家进行了一项新研究，研究发现：由于人们在一周内的营养摄入和饮食模式会影响到他们的体重变化，因此节食者的体重会在一周内上下波动。总共有80名年龄在25-62岁之间的成年人参与了这项研究。研究人员根据他们的相对体重变化将其分为三种类型：体重减轻者、体重增加者和体重保持者。这些成年人在每天起床之后、早餐之前称一下自己的体重，为了保证可靠性，只有那些至少连续7天以上称过体重的人才会被纳入分析。对这些志愿者的跟踪调查时间最短为15天，最长为330天。", pinyin: "", vi: "Theo báo cáo, các chuyên gia y học thực hiện một nghiên cứu mới: do lượng dinh dưỡng nạp vào và mô hình ăn uống trong tuần ảnh hưởng đến cân nặng, cân nặng của người ăn kiêng dao động lên xuống trong tuần. Tổng cộng 80 người trưởng thành 25–62 tuổi tham gia. Các nhà nghiên cứu chia họ theo thay đổi cân nặng tương đối thành ba loại: giảm cân, tăng cân và giữ cân. Họ cân mình mỗi ngày sau khi dậy, trước bữa sáng; để đảm bảo tin cậy, chỉ những người cân liên tục ít nhất 7 ngày mới được phân tích. Thời gian theo dõi ngắn nhất 15 ngày, dài nhất 330 ngày.", scene: "Nghiên cứu" },
    { who: 'A', name: '课文', hanzi: "研究成果显示：这些人的体重变化表现出清晰的模式，即周末之后体重升高，在工作日体重减轻（周五达到最低点）。研究人员还意外地发现，体重减轻者和体重增加者在体重波动模式上存在着明显不同。体重减轻者会表现出较强的补偿模式，即在周末之后体重立即下降，这一下降趋势直至周五结束；而体重增加者每天的体重都会存在差异，他们在工作日的体重并无明显减轻。这项联合多所医学院校所做的研究发现，除了个别人以外，多数人体重的增加会从周六开始，而体重减轻则会从周二开始，特别是对于那些体重减轻者和体重保持者来说更是如此。它表明人们的体重变化在一周内会显示出一种明显的规律，工作日和周末体重的临时变化应该被视为正常现象，而非真正的体重增加，这是由于人们在周末有更多的时间外出就餐。周末对饮食稍微有些放纵影响不大，但为了能成功减轻体重，想要变苗条的节食者应注意到这种变化规律，周末之后不要再找任何吃美食的借口，应及时采取措施阻止这一上升趋势。", pinyin: "", vi: "Kết quả: cân nặng thay đổi theo mô hình rõ ràng: tăng sau cuối tuần, giảm vào ngày làm việc (thấp nhất thứ Sáu). Các nhà nghiên cứu bất ngờ thấy người giảm cân và người tăng cân khác nhau rõ về mô hình dao động. Người giảm cân có mô hình bù trừ mạnh: sau cuối tuần cân giảm ngay, xu hướng này kéo dài đến thứ Sáu; còn người tăng cân mỗi ngày cân đều chênh lệch, ngày làm việc không giảm rõ. Nghiên cứu liên kết nhiều trường y cho thấy, trừ một số ít, phần đông tăng cân từ thứ Bảy còn giảm từ thứ Ba, nhất là với người giảm cân và giữ cân. Nó cho thấy cân nặng trong tuần có quy luật rõ; thay đổi tạm thời giữa ngày làm việc và cuối tuần nên coi là hiện tượng bình thường chứ không phải tăng cân thật, do cuối tuần người ta có nhiều thời gian đi ăn ngoài. Cuối tuần buông thả đôi chút không ảnh hưởng lớn, nhưng để giảm cân thành công, người muốn thon gọn nên chú ý quy luật này, sau cuối tuần đừng tìm cớ ăn ngon, kịp thời có biện pháp chặn xu hướng tăng.", scene: "Kết quả" },
  ],
  dialogueTip: "<b>即</b>: tức là. <b>暂时</b>/<b>临时</b>.",
  slowSay: "体重与节食",

  vocab: [
    { hanzi: "节食", pinyin: "jiéshí", pos: "động từ", meaning: "ăn kiêng", han_viet: '' },
    { hanzi: "报道", pinyin: "bàodào", pos: "động từ/danh từ", meaning: "đưa tin; bài báo", han_viet: '' },
    { hanzi: "营养", pinyin: "yíngyǎng", pos: "danh từ", meaning: "dinh dưỡng", han_viet: '' },
    { hanzi: "摄入", pinyin: "shèrù", pos: "động từ", meaning: "hấp thu", han_viet: '' },
    { hanzi: "模式", pinyin: "móshì", pos: "danh từ", meaning: "mô hình", han_viet: '' },
    { hanzi: "波动", pinyin: "bōdòng", pos: "động từ", meaning: "dao động", han_viet: '' },
    { hanzi: "总共", pinyin: "zǒnggòng", pos: "phó từ", meaning: "tổng cộng", han_viet: '' },
    { hanzi: "参与", pinyin: "cānyù", pos: "động từ", meaning: "tham dự", han_viet: '' },
    { hanzi: "人员", pinyin: "rényuán", pos: "danh từ", meaning: "nhân viên", han_viet: '' },
    { hanzi: "相对", pinyin: "xiāngduì", pos: "tính từ", meaning: "tương đối", han_viet: '' },
    { hanzi: "类型", pinyin: "lèixíng", pos: "danh từ", meaning: "loại", han_viet: '' },
    { hanzi: "称", pinyin: "chēng", pos: "động từ", meaning: "cân", han_viet: '' },
    { hanzi: "可靠", pinyin: "kěkào", pos: "tính từ", meaning: "đáng tin cậy", han_viet: '' },
    { hanzi: "纳入", pinyin: "nàrù", pos: "động từ", meaning: "đưa vào", han_viet: '' },
    { hanzi: "分析", pinyin: "fēnxī", pos: "động từ", meaning: "phân tích", han_viet: '' },
    { hanzi: "志愿者", pinyin: "zhìyuànzhě", pos: "danh từ", meaning: "người tình nguyện", han_viet: '' },
    { hanzi: "跟踪", pinyin: "gēnzōng", pos: "động từ", meaning: "theo dõi", han_viet: '' },
    { hanzi: "成果", pinyin: "chéngguǒ", pos: "danh từ", meaning: "thành quả", han_viet: '' },
    { hanzi: "清晰", pinyin: "qīngxī", pos: "tính từ", meaning: "rõ ràng", han_viet: '' },
    { hanzi: "即", pinyin: "jí", pos: "động từ/phó từ", meaning: "nghĩa là; ngay", han_viet: '' },
    { hanzi: "升", pinyin: "shēng", pos: "động từ", meaning: "lên cao", han_viet: '' },
    { hanzi: "达到", pinyin: "dádào", pos: "động từ", meaning: "đạt đến", han_viet: '' },
    { hanzi: "意外", pinyin: "yìwài", pos: "tính từ/danh từ", meaning: "bất ngờ", han_viet: '' },
    { hanzi: "存在", pinyin: "cúnzài", pos: "động từ", meaning: "tồn tại", han_viet: '' },
    { hanzi: "明显", pinyin: "míngxiǎn", pos: "tính từ", meaning: "rõ ràng", han_viet: '' },
    { hanzi: "补偿", pinyin: "bǔcháng", pos: "động từ", meaning: "đền bù", han_viet: '' },
    { hanzi: "立即", pinyin: "lìjí", pos: "phó từ", meaning: "lập tức", han_viet: '' },
    { hanzi: "趋势", pinyin: "qūshì", pos: "danh từ", meaning: "xu hướng", han_viet: '' },
    { hanzi: "差异", pinyin: "chāyì", pos: "danh từ", meaning: "sự khác biệt", han_viet: '' },
    { hanzi: "联合", pinyin: "liánhé", pos: "động từ", meaning: "liên hợp", han_viet: '' },
    { hanzi: "个别", pinyin: "gèbié", pos: "tính từ", meaning: "riêng lẻ", han_viet: '' },
    { hanzi: "表明", pinyin: "biǎomíng", pos: "động từ", meaning: "chứng tỏ", han_viet: '' },
    { hanzi: "临时", pinyin: "línshí", pos: "phó từ", meaning: "tạm thời", han_viet: '' },
    { hanzi: "现象", pinyin: "xiànxiàng", pos: "danh từ", meaning: "hiện tượng", han_viet: '' },
    { hanzi: "非", pinyin: "fēi", pos: "động từ", meaning: "không phải", han_viet: '' },
    { hanzi: "就餐", pinyin: "jiùcān", pos: "động từ", meaning: "đi ăn", han_viet: '' },
    { hanzi: "放纵", pinyin: "fàngzòng", pos: "động từ", meaning: "buông thả", han_viet: '' },
    { hanzi: "苗条", pinyin: "miáotiao", pos: "tính từ", meaning: "thon thả", han_viet: '' },
    { hanzi: "借口", pinyin: "jièkǒu", pos: "danh từ", meaning: "cớ", han_viet: '' },
    { hanzi: "采取", pinyin: "cǎiqǔ", pos: "động từ", meaning: "áp dụng", han_viet: '' },
    { hanzi: "措施", pinyin: "cuòshī", pos: "danh từ", meaning: "biện pháp", han_viet: '' },
  ],

  sections: [
    { kind: 'examples', label: "即", title: "即 (tức là; liền)", intro: "即: động từ văn viết \"tức là\"; phó từ \"liền, thì\".", groups: [{ label: 'Ví dụ', items: [["这些人的体重变化表现出清晰的模式，即周末之后体重升高，在工作日体重减轻。", "Zhèxiē rén de tǐzhòng biànhuà biǎoxiàn chū qīngxī de móshì, jí zhōumò zhīhòu tǐzhòng shēnggāo, zài gōngzuòrì tǐzhòng jiǎnqīng.", "Cân nặng của họ có mô hình rõ: tức là tăng sau cuối tuần, giảm ngày làm việc."], ["不懂拒绝是他最大的优点，也是他成功的主要原因。", "Bù dǒng jùjué shì tā zuì dà de yōudiǎn, yě shì tā chénggōng de zhǔyào yuányīn.", "Không biết từ chối là ưu điểm lớn nhất và cũng là nguyên nhân thành công chính của anh."]] }] },
    { kind: 'examples', label: "暂时 – 临时", title: "So sánh 暂时 và 临时", intro: "暂时: trong thời gian ngắn (khác về sau); 临时: vào lúc xảy ra việc mới làm, không dự tính trước.", groups: [{ label: 'Ví dụ', items: [["演出结束，我想暂时休息一段时间。", "Yǎnchū jiéshù, wǒ xiǎng zànshí xiūxi yí duàn shíjiān.", "Diễn xong tôi muốn tạm nghỉ một thời gian."], ["工作日和周末体重的临时变化应该被视为正常现象。", "Gōngzuòrì hé zhōumò tǐzhòng de línshí biànhuà yīnggāi bèi shìwéi zhèngcháng xiànxiàng.", "Thay đổi cân nặng tạm thời giữa ngày làm việc và cuối tuần là bình thường."]] }] },
  ],

  notes: [
    { title: "即", body: "Tức là; liền.", say: "即周末之后体重升高" },
    { title: "暂时/临时", body: "Tạm thời.", say: "临时变化" },
  ],

  writeChars: ["节", "食", "营", "养", "波", "动", "模", "式"],

  drills: [],

  qa: [{ title: 'Hoạt động (运用)', items: [{"q": "你知道哪些节食的方法？", "hint": "……"}, {"q": "你认为哪种更有效？", "hint": "……"}] }],

  sentences: [],

  dictations: [
    { title: "Giáo trình 练习 1 / 2 / 扩展", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "教师要让学生主动（ ）班集体管理。", answer: "参与", gloss: "tham gia" },
      { prompt: "几乎（ ）不可一日无茶的程度。", answer: "达到", gloss: "đạt đến" },
      { prompt: "听声音判断水瓶是否保温的方法并不（ ）。", answer: "可靠", gloss: "đáng tin" },
      { prompt: "您（ ）消费了747元。", answer: "总共", gloss: "tổng cộng" },
      { prompt: "他（ ）家里有事，提前离开了会场。", answer: "借口", gloss: "viện cớ" },
      { prompt: "可以（ ）有效措施，最大限度地保护我们的财产。", answer: "采取", gloss: "áp dụng" },
      { prompt: "市民对电子阅读的兴趣（ ）提高了。", answer: "明显", gloss: "rõ rệt" },
      { prompt: "现在报纸、网络上相关的（ ）特别多。", answer: "报道", gloss: "tin bài" },
      { prompt: "演出结束，我想（ ）休息一段时间。 (暂时/临时)", answer: "暂时", gloss: "tạm thời" },
      { prompt: "你是不是着凉了？怎么一直在（ ）？", answer: "打喷嚏", gloss: "hắt hơi" },
      { prompt: "一到春天开花的时候，我的鼻子就（ ）。", answer: "过敏", gloss: "dị ứng" },
      { prompt: "特别（ ）。", answer: "痒", gloss: "ngứa" },
      { prompt: "帮助（ ）食物的。", answer: "消化", gloss: "tiêu hóa" },
    ] },
  ],
}
