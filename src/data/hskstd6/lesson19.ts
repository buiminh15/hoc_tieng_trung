import type { Lesson } from '../types'

/** Giáo trình chuẩn HSK 6 (Thượng), Bài 19: 无阳光的深海世界. Nghĩa từ mới và ngữ pháp theo sách; dịch bài khóa do app thêm. Không có file nghe. Đáp án theo HSK6-BH-T1-DA. */

export const hskStd6Lesson19: Lesson = {
  id: 19,
  title: "Thế giới biển sâu không ánh nắng",
  hanzi: "无阳光的深海世界",
  pinyin: "Wú yángguāng de shēnhǎi shìjiè",
  vi: "Thế giới biển sâu không ánh nắng",
  intro: "Sự sống nảy nở nơi đáy biển không có nắng. Học 进而, 得以, 偏偏 và so sánh 历来 – 从来.",

  dialogue: [
    { who: 'A', name: '课文', hanzi: "俗话说万物生长靠太阳。人们之所以这样说，是因为历来植物生长离不开阳光，而动物又靠植物维持生命，所以没有阳光，就没有万物，这是众所周知的真理。然而科学家们的深海考察，却向人类早已认定为准则的定义提出了质疑。", pinyin: "", vi: "Tục ngữ nói vạn vật sinh trưởng nhờ mặt trời. Người ta nói vậy vì xưa nay thực vật không rời được ánh nắng, còn động vật lại nhờ thực vật duy trì sự sống, nên không có nắng thì không có vạn vật, đó là chân lý ai cũng biết. Thế nhưng khảo sát biển sâu của các nhà khoa học đã đặt nghi vấn với định nghĩa mà con người từ lâu coi là chuẩn tắc.", scene: "Vạn vật nhờ mặt trời" },
    { who: 'A', name: '课文', hanzi: "潜水到几千米深海底的科学家发现了一个繁殖生命的场所，那里的生物长相古怪，蛤、蚌、蟹、贝壳、红冠蠕虫等等，什么都有。科学家深感诧异：在没有阳光，没有食物，压力又很大的海底，怎么会有这么多生物？它们靠什么生存呢？", pinyin: "", vi: "Các nhà khoa học lặn xuống đáy biển sâu mấy nghìn mét phát hiện một nơi sinh sôi sự sống, sinh vật ở đó hình dạng kỳ quái: ngao, trai, cua, vỏ sò, giun mào đỏ… gì cũng có. Họ vô cùng kinh ngạc: ở đáy biển không nắng, không thức ăn, áp lực lại lớn, sao có nhiều sinh vật thế? Chúng dựa vào đâu để sống?", scene: "Phát hiện" },
    { who: 'A', name: '课文', hanzi: "回到地面后，科学家取出从深海带回的样品，一股带有刺鼻臭蛋气味的硫化氢气体立即冲了出来，科学家恍然大悟，进而提出了这样的假说——当海水从地壳分裂而成的裂缝渗透到地下时，在高温和高压的作用下，水里所含的硫酸盐转化成了硫化氢，某些细菌借硫化氢代谢变化，吸收温泉的热量得以繁殖。一些小动物靠过滤细菌维持生命，而小动物又成了大动物的食物来源，这样，就构成了一个新的“食物链”。", pinyin: "", vi: "Về mặt đất, nhà khoa học lấy mẫu vật mang từ biển sâu ra, một luồng khí hydro sunfua nồng mùi trứng thối xộc ra ngay; họ chợt hiểu ra, rồi đề xuất giả thuyết: khi nước biển thấm xuống lòng đất qua khe nứt của vỏ Trái Đất, dưới nhiệt độ và áp suất cao, sunfat trong nước chuyển thành hydro sunfua, một số vi khuẩn nhờ hydro sunfua chuyển hóa, hấp thụ nhiệt suối nước nóng mà sinh sôi. Một số động vật nhỏ lọc vi khuẩn để sống, còn động vật nhỏ lại thành nguồn thức ăn của động vật lớn, như vậy hình thành một \"chuỗi thức ăn\" mới.", scene: "Giả thuyết" },
    { who: 'A', name: '课文', hanzi: "它们靠来自地球内部的热能维持生命，这种程序叫“化学合成”，是生物科学史上的第一次发现。它告诉人类，在没有阳光的条件下，也可能有生命；它启发人们，要解放思想，迈向地球以外，探索生命存在的新路。", pinyin: "", vi: "Chúng dựa vào nhiệt năng từ trong lòng Trái Đất để duy trì sự sống, quá trình này gọi là \"tổng hợp hóa học\", là phát hiện lần đầu trong lịch sử sinh vật học. Nó cho loài người biết ở điều kiện không có ánh nắng cũng có thể có sự sống; nó gợi ý con người cần giải phóng tư tưởng, bước ra ngoài Trái Đất, tìm con đường mới cho sự tồn tại của sự sống.", scene: "Hóa tổng hợp" },
    { who: 'A', name: '课文', hanzi: "据悉，这种细菌忍受高温的本领远远超越了我们的想象，它们能在250摄氏度的环境下生存。一般情况下，高于40℃，大部分植物和动物就无法成活；高于65℃，多数细菌会丧失生命，可是，为什么偏偏这种细菌能够存活下来？其中的奥秘到底是什么呢？有人迫不及待地想探究其真相，有人却说，与其把精力用来探索耐高温细菌生命存在的秘密，不如去探索高温和高压下的金星或其他星球上，是否也有生物存在。", pinyin: "", vi: "Nghe nói khả năng chịu nhiệt của loại vi khuẩn này vượt xa tưởng tượng của ta, chúng sống được ở môi trường 250 độ C. Thông thường, trên 40℃ phần lớn động thực vật không sống nổi; trên 65℃ đa số vi khuẩn mất mạng, vậy sao đúng loại vi khuẩn này lại sống sót? Bí mật rốt cuộc là gì? Có người nóng lòng tìm hiểu sự thật, có người lại nói, thay vì dốc sức tìm bí mật sự sống của vi khuẩn chịu nhiệt, chi bằng đi khám phá xem trên Sao Kim hay các hành tinh khác ở nhiệt độ và áp suất cao có sinh vật tồn tại không.", scene: "Câu hỏi bí ẩn" },
    { who: 'A', name: '课文', hanzi: "不管人类怎么想，这些深海生物依然保持着它们强大而华丽的阵容，有条不紊地过着自己的日子，展现着他们独特的精彩：一丛丛红冠蠕虫，把白色外套管固定在岩石上，保护着自己柔软的身体。它们没有嘴，没有眼，甚至消化系统也不存在，仅靠伸出套管顶端的身体过滤海水中的食物，它们是怎么繁殖后代的呢？体积庞大的巨蛤，造型奇特的白蚌，它们的生理结构，食物基础，甚至它们的门类归属，都使人迷惑不解。这片神秘而广阔的深海世界能为我们提供新的食物资源，成为奇妙的科学研究基地吗？", pinyin: "", vi: "Dù con người nghĩ gì, các sinh vật biển sâu vẫn giữ đội hình mạnh mẽ và lộng lẫy, sống ngăn nắp ngày tháng của mình, phô bày vẻ đặc sắc riêng: từng cụm giun mào đỏ cố định ống bọc trắng lên đá, bảo vệ thân mềm. Chúng không miệng, không mắt, thậm chí không có hệ tiêu hóa, chỉ nhờ phần thân thò ra đầu ống để lọc thức ăn trong nước biển; chúng sinh sản hậu duệ thế nào? Ngao khổng lồ, trai trắng hình dạng kỳ lạ, cấu tạo sinh lý, nền tảng thức ăn, thậm chí phân loại của chúng đều khiến người ta khó hiểu. Thế giới biển sâu huyền bí và bao la này có thể cung cấp nguồn thức ăn mới, trở thành cơ sở nghiên cứu khoa học kỳ diệu không?", scene: "Đội hình biển sâu" },
  ],
  dialogueTip: "<b>进而</b>. <b>得以</b>. <b>偏偏</b>. <b>历来</b>/<b>从来</b>.",
  slowSay: "无阳光的深海世界",

  vocab: [
    { hanzi: "俗话", pinyin: "súhuà", pos: "danh từ", meaning: "tục ngữ", han_viet: '' },
    { hanzi: "历来", pinyin: "lìlái", pos: "phó từ", meaning: "xưa nay", han_viet: '' },
    { hanzi: "维持", pinyin: "wéichí", pos: "động từ", meaning: "duy trì", han_viet: '' },
    { hanzi: "众所周知", pinyin: "zhòngsuǒzhōuzhī", pos: "thành ngữ", meaning: "mọi người đều biết", han_viet: '' },
    { hanzi: "真理", pinyin: "zhēnlǐ", pos: "danh từ", meaning: "chân lý", han_viet: '' },
    { hanzi: "认定", pinyin: "rèndìng", pos: "động từ", meaning: "nhận định", han_viet: '' },
    { hanzi: "准则", pinyin: "zhǔnzé", pos: "danh từ", meaning: "nguyên tắc", han_viet: '' },
    { hanzi: "潜水", pinyin: "qiánshuǐ", pos: "động từ", meaning: "lặn", han_viet: '' },
    { hanzi: "繁殖", pinyin: "fánzhí", pos: "động từ", meaning: "sinh sôi", han_viet: '' },
    { hanzi: "场所", pinyin: "chǎngsuǒ", pos: "danh từ", meaning: "nơi chốn", han_viet: '' },
    { hanzi: "古怪", pinyin: "gǔguài", pos: "tính từ", meaning: "kỳ quái", han_viet: '' },
    { hanzi: "诧异", pinyin: "chàyì", pos: "tính từ", meaning: "rất kinh ngạc", han_viet: '' },
    { hanzi: "样品", pinyin: "yàngpǐn", pos: "danh từ", meaning: "hàng mẫu", han_viet: '' },
    { hanzi: "恍然大悟", pinyin: "huǎngrán dà wù", pos: "thành ngữ", meaning: "bỗng nhiên tỉnh ngộ", han_viet: '' },
    { hanzi: "进而", pinyin: "jìn’ér", pos: "liên từ", meaning: "sau đó, tiến tới", han_viet: '' },
    { hanzi: "渗透", pinyin: "shèntòu", pos: "động từ", meaning: "thấm", han_viet: '' },
    { hanzi: "过滤", pinyin: "guòlǜ", pos: "động từ", meaning: "lọc", han_viet: '' },
    { hanzi: "来源", pinyin: "láiyuán", pos: "danh từ", meaning: "nguồn gốc", han_viet: '' },
    { hanzi: "解放", pinyin: "jiěfàng", pos: "động từ", meaning: "giải phóng", han_viet: '' },
    { hanzi: "迈", pinyin: "mài", pos: "động từ", meaning: "bước", han_viet: '' },
    { hanzi: "探索", pinyin: "tànsuǒ", pos: "động từ", meaning: "thám hiểm", han_viet: '' },
    { hanzi: "据悉", pinyin: "jùxī", pos: "động từ", meaning: "theo nguồn tin", han_viet: '' },
    { hanzi: "忍受", pinyin: "rěnshòu", pos: "động từ", meaning: "chịu đựng", han_viet: '' },
    { hanzi: "超越", pinyin: "chāoyuè", pos: "động từ", meaning: "vượt qua", han_viet: '' },
    { hanzi: "丧失", pinyin: "sàngshī", pos: "động từ", meaning: "mất đi", han_viet: '' },
    { hanzi: "偏偏", pinyin: "piānpiān", pos: "phó từ", meaning: "lại, vẫn cứ", han_viet: '' },
    { hanzi: "真相", pinyin: "zhēnxiàng", pos: "danh từ", meaning: "sự thật", han_viet: '' },
    { hanzi: "阵容", pinyin: "zhènróng", pos: "danh từ", meaning: "thế trận", han_viet: '' },
    { hanzi: "有条不紊", pinyin: "yǒutiáo-bùwěn", pos: "thành ngữ", meaning: "gọn gàng ngăn nắp", han_viet: '' },
    { hanzi: "展现", pinyin: "zhǎnxiàn", pos: "động từ", meaning: "bày ra, hiện ra", han_viet: '' },
    { hanzi: "迷惑", pinyin: "míhuò", pos: "tính từ", meaning: "mê muội, mơ hồ", han_viet: '' },
    { hanzi: "广阔", pinyin: "guǎngkuò", pos: "tính từ", meaning: "bao la", han_viet: '' },
    { hanzi: "奇妙", pinyin: "qímiào", pos: "tính từ", meaning: "kỳ diệu", han_viet: '' },
    { hanzi: "基地", pinyin: "jīdì", pos: "danh từ", meaning: "căn cứ", han_viet: '' },
  ],

  sections: [
    { kind: 'examples', label: "进而", title: "进而 (tiến tới)", intro: "进而: liên từ, dùng ở vế sau, chỉ tiến thêm một bước trên cơ sở đã có; dùng văn viết.", groups: [{ label: 'Ví dụ', items: [["科学家恍然大悟，进而提出了这样的假说。", "Kēxuéjiā huǎngrán-dàwù, jìn’ér tíchūle zhèyàng de jiǎshuō.", "Nhà khoa học chợt hiểu ra, rồi tiến tới đưa ra giả thuyết như vậy."], ["想象有减轻心理压力，维持心理平衡，进而促进心理健康的作用。", "Xiǎngxiàng yǒu jiǎnqīng xīnlǐ yālì, wéichí xīnlǐ pínghéng, jìn’ér cùjìn xīnlǐ jiànkāng de zuòyòng.", "Tưởng tượng có tác dụng giảm áp lực tâm lý, giữ cân bằng tâm lý, từ đó thúc đẩy sức khỏe tinh thần."]] }] },
    { kind: 'examples', label: "得以", title: "得以 (nhờ đó mà có thể)", intro: "得以: động từ, \"nhờ đó đạt được, có thể\"; văn cảnh thường nêu điều kiện, sau 得以 là kết quả thực hiện được hoặc dự kiến; chủ yếu bổ nghĩa động từ; dùng văn viết.", groups: [{ label: 'Ví dụ', items: [["某些细菌借硫化氢代谢变化，吸收温泉的热量得以繁殖。", "Mǒuxiē xìjūn jiè liúhuàqīng dàixiè biànhuà, xīshōu wēnquán de rèliàng déyǐ fánzhí.", "Một số vi khuẩn nhờ hydro sunfua chuyển hóa, hấp thụ nhiệt suối nóng mà sinh sôi được."], ["幸亏列车上有位经验丰富的医生，使他得以清醒过来。", "Xìngkuī lièchē shang yǒu wèi jīngyàn fēngfù de yīshēng, shǐ tā déyǐ qīngxǐng guòlái.", "May nhờ trên tàu có bác sĩ giàu kinh nghiệm, anh mới tỉnh lại được."]] }] },
    { kind: 'examples', label: "偏偏", title: "偏偏 (lại, cứ cố tình)", intro: "偏偏: phó từ. ① cố ý làm trái yêu cầu khách quan (thường với 要, 不); ② sự thật trái với mong muốn, lẽ thường.", groups: [{ label: 'Ví dụ', items: [["那里太危险了，大家都劝他不要去，他偏偏要去。", "Nàlǐ tài wēixiǎn le, dàjiā dōu quàn tā bú yào qù, tā piānpiān yào qù.", "Chỗ đó nguy hiểm quá, mọi người khuyên anh đừng đi, anh lại cứ đòi đi."], ["为什么偏偏这种细菌能够存活下来？", "Wèishénme piānpiān zhè zhǒng xìjūn nénggòu cúnhuó xiàlái?", "Vì sao đúng loại vi khuẩn này lại sống sót được?"]] }] },
    { kind: 'examples', label: "历来 – 从来", title: "So sánh 历来 và 从来", intro: "Giống: phó từ, từ quá khứ đến nay đều như thế. 历来: thường dùng văn viết, không dùng trong câu phủ định, bổ nghĩa động từ/tính từ hai âm tiết. 从来: thường dùng trong câu phủ định, dùng ở câu khẳng định thì bổ nghĩa cụm, không bổ nghĩa động/tính từ đơn.", groups: [{ label: 'Ví dụ', items: [["我们历来提倡艰苦朴素，反对铺张浪费。", "Wǒmen lìlái tíchàng jiānkǔ pǔsù, fǎnduì pūzhāng làngfèi.", "Xưa nay chúng ta đề xướng gian khổ giản dị, phản đối phô trương lãng phí."], ["我从来不隐瞒自己的观点。", "Wǒ cónglái bù yǐnmán zìjǐ de guāndiǎn.", "Tôi xưa nay không giấu quan điểm của mình."]] }] },
  ],

  notes: [
    { title: "进而", body: "Tiến tới.", say: "进而提出了假说" },
    { title: "得以", body: "Nhờ đó có thể.", say: "得以繁殖" },
    { title: "偏偏", body: "Lại cứ.", say: "偏偏这种细菌能够存活" },
    { title: "历来 – 从来", body: "Xưa nay.", say: "历来植物生长离不开阳光" },
  ],

  writeChars: ["蛤", "蚌", "蟹", "恍", "渗", "透", "迈", "探"],

  drills: [],

  qa: [{ title: 'Hoạt động (运用)', items: [{"q": "你觉得别的星球上有生命吗？", "hint": "……"}, {"q": "你对深海有什么好奇？", "hint": "……"}] }],

  sentences: [],

  dictations: [
    { title: "Giáo trình 做一做 / 练习 3 / 4", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "爷爷（ ）没有浪费过一点儿粮食。", answer: "从来", gloss: "xưa nay" },
      { prompt: "中国西北地区雨量（ ）稀少。", answer: "历来", gloss: "xưa nay" },
      { prompt: "他（ ）心直口快，有什么说什么。", answer: "历来", gloss: "xưa nay" },
      { prompt: "她总是无忧无虑，好像（ ）不知道什么叫烦恼。", answer: "从来", gloss: "chưa từng" },
      { prompt: "（ ）说：“独木不成林”。", answer: "俗话", gloss: "tục ngữ" },
      { prompt: "（ ），一根筷子很容易折断，可一把筷子就很难折断了。", answer: "众所周知", gloss: "ai cũng biết" },
      { prompt: "团结能使我们（ ）自身的局限。", answer: "超越", gloss: "vượt" },
      { prompt: "人们（ ）都认可的真理。", answer: "历来", gloss: "xưa nay" },
      { prompt: "周末，可经理（ ）让我去加班。", answer: "偏偏", gloss: "lại cứ" },
      { prompt: "我很（ ），问：“周末怎么还有这么多人来上班？”", answer: "诧异", gloss: "ngạc nhiên" },
      { prompt: "他们看到我，神情都有些（ ）。", answer: "古怪", gloss: "lạ" },
      { prompt: "鲜花和蛋糕（ ）在我眼前。", answer: "展现", gloss: "hiện ra" },
      { prompt: "我才（ ），原来今天是我的生日。", answer: "恍然大悟", gloss: "chợt hiểu" },
      { prompt: "只有不断努力，梦想才能（ ）实现。", answer: "得以", gloss: "có thể" },
      { prompt: "通过调查研究发现问题，（ ）找到解决问题的方法。", answer: "进而", gloss: "rồi tiến tới" },
      { prompt: "大家的意见都统一了，可（ ）他不同意。", answer: "偏偏", gloss: "lại cứ" },
      { prompt: "老校长（ ）重视学生们的素质教育。", answer: "历来", gloss: "xưa nay" },
      { prompt: "（ ）今年入境旅游观光的人数已超过千万。", answer: "据悉", gloss: "nghe nói" },
    ] },
  ],
}
