import type { Lesson } from '../types'

/** Giáo trình chuẩn HSK 6 (Hạ), Bài 23: 大数据时代. Nghĩa từ mới và ngữ pháp theo sách; dịch bài khóa do app thêm. Không có file nghe. Đáp án theo HSK6-BH-T2-DA. */

export const hskStd6Lesson23: Lesson = {
  id: 23,
  title: "Thời đại dữ liệu lớn",
  hanzi: "大数据时代",
  pinyin: "Dà shùjù shídài",
  vi: "Thời đại dữ liệu lớn",
  intro: "Dữ liệu lớn là gì, dự đoán World Cup và chăm sóc sức khỏe. Học 加以, 大大/远远 và so sánh 万分 – 十分.",

  dialogue: [
    { who: 'A', name: '课文', hanzi: "什么是大数据？枯燥的名词解释会让“科盲”们更加摸不着头脑，有学者以通俗的例子这样告诉我们，“每个人乘飞机时，都是自己选择航线，这是人的智慧，当人们的选择结果反映到具体的航程中来，就会有大量的数据被记录下来。我们根据这些原始的、堆积如山的记录梳理出的航程设计方案，将是最卓越的。这就是大数据的方法。”", pinyin: "", vi: "Dữ liệu lớn là gì? Cách giải thích khô khan khiến người mù khoa học càng không hiểu, có học giả dùng ví dụ thông tục nói: \"Mỗi người đi máy bay đều tự chọn đường bay, đó là trí tuệ con người; khi kết quả lựa chọn phản ánh vào các chuyến bay cụ thể sẽ có lượng lớn dữ liệu được ghi lại. Phương án thiết kế lộ trình ta rút ra từ những ghi chép nguyên thủy, chất đống như núi này sẽ là xuất sắc nhất. Đó chính là phương pháp của dữ liệu lớn.\"", scene: "Dữ liệu lớn là gì" },
    { who: 'A', name: '课文', hanzi: "大数据有什么用？举例来说，百度在2014年世界杯期间准确预测德国夺冠，就是大数据的功劳。百度的做法是：派遣数据专家全面搜索5年来全世界987支球队3.7万场比赛的数据，并与彩票中心等占有大量数据的相关机构建立战略合作伙伴关系，将各类数据融入预测模型中。这一海量数据库共计涉及19972名球员和1.12亿条相关数据。之后，百度对2006年和2010年世界杯的淘汰赛进行了结果验证，准确率接近75%，这一结果令大数据研究者万分振奋。", pinyin: "", vi: "Dữ liệu lớn có tác dụng gì? Ví dụ Baidu dự đoán chính xác Đức vô địch World Cup 2014 là công của dữ liệu lớn. Cách Baidu làm là: cử chuyên gia dữ liệu tìm toàn diện dữ liệu 37 nghìn trận của 987 đội trên thế giới trong 5 năm, đồng thời lập quan hệ đối tác chiến lược với các cơ quan giữ nhiều dữ liệu như trung tâm xổ số, đưa các loại dữ liệu vào mô hình dự đoán. Kho dữ liệu khổng lồ này tổng cộng liên quan 19972 cầu thủ và 112 triệu dữ liệu. Sau đó Baidu kiểm chứng kết quả vòng loại trực tiếp World Cup 2006 và 2010, độ chính xác gần 75%, kết quả này khiến các nhà nghiên cứu dữ liệu lớn vô cùng phấn khởi.", scene: "Dự đoán World Cup" },
    { who: 'A', name: '课文', hanzi: "那么，大数据如何连接未来？我们不妨以大数据与健康为例加以说明。人们公认“医疗”和“健康”分属两个完全不同的领域，有了大数据，它们不仅相通相融，还有可能彻底扭转先前陈旧而被动的有病治病方式，改为积极防治，甚至把疾病消灭在萌芽状态中的想法也不显得荒谬了。", pinyin: "", vi: "Vậy dữ liệu lớn kết nối tương lai thế nào? Ta thử lấy dữ liệu lớn và sức khỏe làm ví dụ để giải thích. Mọi người công nhận \"y tế\" và \"sức khỏe\" thuộc hai lĩnh vực hoàn toàn khác; có dữ liệu lớn, chúng không chỉ thông nhau, hòa nhau mà còn có thể xoay chuyển triệt để lối có bệnh chữa bệnh cũ kỹ, bị động trước kia, chuyển sang phòng chữa chủ động, thậm chí ý tưởng dập bệnh từ trong trứng nước cũng không còn phi lý.", scene: "Sức khỏe" },
    { who: 'A', name: '课文', hanzi: "做进一步讨论之前，有一个前提必须交代清楚：每一次疾病的发生都不是偶然的，追究原因，无非是基因、遗传、环境、生活习惯等。虽非偶然，却无法预料，因此，传统医疗只能帮你治病。如果能找出病因呢？消除隐患就成为了可能，“健康大数据”就是要做这件事。比如心脏病，病人发病常常是有预兆的，如果对患者的心跳数据有足够长时间的持续积累，就可能预测病人发病的时机；对于心脏病突发致死的案例，如果能提前24小时监测到零星先兆，甚至可以挽救患者的生命。", pinyin: "", vi: "Trước khi bàn sâu hơn có một tiền đề phải nói rõ: mỗi lần mắc bệnh đều không ngẫu nhiên, truy nguyên nhân chẳng qua là gen, di truyền, môi trường, thói quen sinh hoạt… Tuy không ngẫu nhiên nhưng không thể lường trước, vì vậy y tế truyền thống chỉ giúp bạn chữa bệnh. Nếu tìm ra nguyên nhân bệnh thì sao? Loại trừ mầm họa thành có thể, \"dữ liệu lớn sức khỏe\" chính là để làm việc này. Ví dụ bệnh tim, bệnh nhân phát bệnh thường có điềm báo; nếu dữ liệu nhịp tim bệnh nhân được tích lũy liên tục đủ lâu thì có thể dự đoán thời điểm phát bệnh; với các ca tim đột tử, nếu theo dõi được dấu hiệu lẻ tẻ trước 24 giờ, thậm chí có thể cứu mạng bệnh nhân.", scene: "Phòng bệnh" },
    { who: 'A', name: '课文', hanzi: "利用大数据对一个病种进行细致的监测，意义是不言而喻的。中国血压有问题的人不在少数，其中高血压患者有1亿人，潜在患者还有1亿人，如果这2亿人都能通过“高血压手表”或者什么先进器材进行监测，对他们的健康进行人为管理，将会是非常有前景的尝试。", pinyin: "", vi: "Dùng dữ liệu lớn giám sát tỉ mỉ một loại bệnh, ý nghĩa không cần nói cũng hiểu. Ở Trung Quốc người có vấn đề huyết áp không ít, trong đó người cao huyết áp có 100 triệu, bệnh nhân tiềm ẩn còn 100 triệu; nếu 200 triệu người này đều giám sát qua \"đồng hồ huyết áp\" hay thiết bị tiên tiến nào đó, quản lý sức khỏe của họ bằng con người, sẽ là thử nghiệm rất có triển vọng.", scene: "Huyết áp" },
    { who: 'A', name: '课文', hanzi: "在未来医疗模式中，临床会尽量减少对人的依赖，因为医生是切切实实的稀缺资源，大数据的优越之处就在于，能够大大提高医生的工作效率，将医生的能量发挥到最大。因为大数据的健康维护不是得了病之后再采集数据，而是平时就在一些特殊设备的协助下，把人所有的生理数据攒起来，对其进行分析处理后，发给医生，远程医疗服务将会变得可行而且优质。实事求是地讲，即使仅仅做到这一点，大数据为人类做出的贡献也远远超出了我们的期盼。展望未来，大数据将会走进我们生活的各个领域，有人这样定位大数据时代的意义：“拥有知识曾意味着掌握过去，现在它更意味着预测未来。”", pinyin: "", vi: "Trong mô hình y tế tương lai, lâm sàng sẽ cố giảm phụ thuộc vào người, vì bác sĩ là nguồn lực khan hiếm thực sự; ưu việt của dữ liệu lớn là có thể nâng lớn hiệu suất công việc bác sĩ, phát huy tối đa năng lượng của họ. Vì duy trì sức khỏe bằng dữ liệu lớn không phải mắc bệnh rồi mới thu thập dữ liệu mà thường ngày nhờ thiết bị đặc biệt gom mọi dữ liệu sinh lý, phân tích xử lý rồi gửi bác sĩ, dịch vụ y tế từ xa sẽ trở nên khả thi và chất lượng. Nói thực sự cầu thị, dù chỉ làm được điểm này, đóng góp của dữ liệu lớn cho nhân loại cũng vượt xa mong đợi. Nhìn về tương lai, dữ liệu lớn sẽ vào mọi lĩnh vực đời sống; có người định vị ý nghĩa thời đại dữ liệu lớn: \"Có tri thức từng nghĩa là nắm quá khứ, nay nó còn nghĩa là dự đoán tương lai.\"", scene: "Tương lai" },
  ],
  dialogueTip: "<b>加以</b>. <b>大大</b>/<b>远远</b>. <b>万分</b>/<b>十分</b>.",
  slowSay: "大数据时代",

  vocab: [
    { hanzi: "通俗", pinyin: "tōngsú", pos: "tính từ", meaning: "thông thường", han_viet: '' },
    { hanzi: "堆积", pinyin: "duījī", pos: "động từ", meaning: "chồng chất", han_viet: '' },
    { hanzi: "卓越", pinyin: "zhuóyuè", pos: "tính từ", meaning: "xuất sắc", han_viet: '' },
    { hanzi: "预测", pinyin: "yùcè", pos: "động từ", meaning: "dự đoán", han_viet: '' },
    { hanzi: "功劳", pinyin: "gōngláo", pos: "danh từ", meaning: "công lao", han_viet: '' },
    { hanzi: "派遣", pinyin: "pàiqiǎn", pos: "động từ", meaning: "cử đi", han_viet: '' },
    { hanzi: "战略", pinyin: "zhànlüè", pos: "danh từ", meaning: "chiến lược", han_viet: '' },
    { hanzi: "模型", pinyin: "móxíng", pos: "danh từ", meaning: "mô hình", han_viet: '' },
    { hanzi: "共计", pinyin: "gòngjì", pos: "động từ", meaning: "tổng cộng", han_viet: '' },
    { hanzi: "验证", pinyin: "yànzhèng", pos: "động từ", meaning: "nghiệm chứng", han_viet: '' },
    { hanzi: "万分", pinyin: "wànfēn", pos: "phó từ", meaning: "hết sức", han_viet: '' },
    { hanzi: "振奋", pinyin: "zhènfèn", pos: "tính từ", meaning: "phấn chấn", han_viet: '' },
    { hanzi: "公认", pinyin: "gōngrèn", pos: "động từ", meaning: "công nhận", han_viet: '' },
    { hanzi: "扭转", pinyin: "niǔzhuǎn", pos: "động từ", meaning: "xoay chuyển", han_viet: '' },
    { hanzi: "先前", pinyin: "xiānqián", pos: "danh từ", meaning: "trước kia", han_viet: '' },
    { hanzi: "陈旧", pinyin: "chénjiù", pos: "tính từ", meaning: "cũ kỹ", han_viet: '' },
    { hanzi: "被动", pinyin: "bèidòng", pos: "tính từ", meaning: "bị động", han_viet: '' },
    { hanzi: "防治", pinyin: "fángzhì", pos: "động từ", meaning: "phòng và chữa", han_viet: '' },
    { hanzi: "消灭", pinyin: "xiāomiè", pos: "động từ", meaning: "tiêu diệt", han_viet: '' },
    { hanzi: "萌芽", pinyin: "méngyá", pos: "động từ", meaning: "nảy mầm", han_viet: '' },
    { hanzi: "荒谬", pinyin: "huāngmiù", pos: "tính từ", meaning: "hoang đường", han_viet: '' },
    { hanzi: "前提", pinyin: "qiántí", pos: "danh từ", meaning: "tiền đề", han_viet: '' },
    { hanzi: "追究", pinyin: "zhuījiū", pos: "động từ", meaning: "truy cứu", han_viet: '' },
    { hanzi: "预料", pinyin: "yùliào", pos: "động từ", meaning: "lường trước", han_viet: '' },
    { hanzi: "隐患", pinyin: "yǐnhuàn", pos: "danh từ", meaning: "mầm họa", han_viet: '' },
    { hanzi: "预兆", pinyin: "yùzhào", pos: "danh từ", meaning: "điềm báo", han_viet: '' },
    { hanzi: "挽救", pinyin: "wǎnjiù", pos: "động từ", meaning: "cứu vãn", han_viet: '' },
    { hanzi: "不言而喻", pinyin: "bùyán’éryù", pos: "thành ngữ", meaning: "không nói cũng hiểu", han_viet: '' },
    { hanzi: "前景", pinyin: "qiánjǐng", pos: "danh từ", meaning: "triển vọng", han_viet: '' },
    { hanzi: "依赖", pinyin: "yīlài", pos: "động từ", meaning: "dựa vào", han_viet: '' },
    { hanzi: "切实", pinyin: "qièshí", pos: "tính từ", meaning: "thiết thực", han_viet: '' },
    { hanzi: "优越", pinyin: "yōuyuè", pos: "tính từ", meaning: "ưu việt", han_viet: '' },
    { hanzi: "维护", pinyin: "wéihù", pos: "động từ", meaning: "duy trì", han_viet: '' },
    { hanzi: "协助", pinyin: "xiézhù", pos: "động từ", meaning: "giúp đỡ", han_viet: '' },
    { hanzi: "可行", pinyin: "kěxíng", pos: "tính từ", meaning: "khả thi", han_viet: '' },
    { hanzi: "实事求是", pinyin: "shíshì-qiúshì", pos: "thành ngữ", meaning: "thực sự cầu thị", han_viet: '' },
    { hanzi: "展望", pinyin: "zhǎnwàng", pos: "động từ", meaning: "nhìn về tương lai", han_viet: '' },
  ],

  sections: [
    { kind: 'examples', label: "加以", title: "加以 (tiến hành … đối với)", intro: "加以: động từ hình thức, biểu thị thái độ, cách xử lý đối với sự việc trước đó; sau bắt buộc là động từ song âm tiết làm tân ngữ; động từ thật sự chỉ hành động là động từ phía sau.", groups: [{ label: 'Ví dụ', items: [["大数据如何连接未来？我们不妨以大数据与健康为例加以说明。", "Dà shùjù rúhé liánjiē wèilái? Wǒmen bùfáng yǐ dà shùjù yǔ jiànkāng wéi lì jiāyǐ shuōmíng.", "Dữ liệu lớn kết nối tương lai thế nào? Ta thử lấy dữ liệu lớn và sức khỏe làm ví dụ để giải thích."], ["对于你的意见和建议，我们会认真加以研究。", "Duìyú nǐ de yìjiàn hé jiànyì, wǒmen huì rènzhēn jiāyǐ yánjiū.", "Với ý kiến và đề nghị của bạn, chúng tôi sẽ nghiêm túc nghiên cứu."]] }] },
    { kind: 'examples', label: "大大 / 远远", title: "大大, 远远 (nhấn mạnh mức độ)", intro: "大大: phó từ, mức độ sâu, phạm vi lớn (大大增加, 大大提高). 远远: phó từ, chênh lệch lớn, thường đi với 超过/不够/不能… (远远超出, 远远不能).", groups: [{ label: 'Ví dụ', items: [["大数据能够大大提高医生的工作效率。", "Dà shùjù nénggòu dàdà tígāo yīshēng de gōngzuò xiàolǜ.", "Dữ liệu lớn có thể nâng lớn hiệu suất công việc bác sĩ."], ["大数据为人类做出的贡献也远远超出了我们的期盼。", "Dà shùjù wèi rénlèi zuòchū de gòngxiàn yě yuǎnyuǎn chāochūle wǒmen de qīpàn.", "Đóng góp của dữ liệu lớn cho nhân loại vượt xa mong đợi của ta."]] }] },
    { kind: 'examples', label: "万分 – 十分", title: "So sánh 万分 và 十分", intro: "Giống: phó từ, \"rất, hết sức\". 万分: mức độ cao hơn, chỉ đi với một số động từ/tính từ song âm tiết chỉ tâm lý, cảm xúc (万分紧张, 万分感谢), dùng văn viết, không đi trước tính từ chỉ tình trạng khách quan. 十分: dùng rộng với tính từ, động từ chỉ tâm lý.", groups: [{ label: 'Ví dụ', items: [["这一结果令大数据研究者万分振奋。", "Zhè yī jiéguǒ lìng dà shùjù yánjiūzhě wànfēn zhènfèn.", "Kết quả này khiến nhà nghiên cứu dữ liệu lớn vô cùng phấn khởi."], ["这里的风景十分优美，令人流连忘返。", "Zhèlǐ de fēngjǐng shífēn yōuměi, lìng rén liúlián-wàngfǎn.", "Phong cảnh ở đây rất đẹp, khiến người ta lưu luyến quên về."]] }] },
  ],

  notes: [
    { title: "加以", body: "Tiến hành.", say: "加以说明" },
    { title: "大大 / 远远", body: "Rất nhiều / xa hơn hẳn.", say: "大大提高 / 远远超出" },
    { title: "万分 – 十分", body: "Hết sức.", say: "万分振奋" },
  ],

  writeChars: ["枯", "燥", "堆", "卓", "越", "验", "挽", "荒"],

  drills: [],

  qa: [{ title: 'Hoạt động (运用)', items: [{"q": "你觉得大数据会怎样改变你的生活？", "hint": "……"}, {"q": "你愿意戴“健康手表”吗？为什么？", "hint": "……"}] }],

  sentences: [],

  dictations: [
    { title: "Giáo trình 练一练 / 练习 2 / 3", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "下面这些句子都有问题，请（ ）。", answer: "加以改正", gloss: "sửa" },
      { prompt: "为什么男生没有学习健美操的兴趣？应采取什么措施（ ）。", answer: "加以培养", gloss: "bồi dưỡng" },
      { prompt: "大家都根据自身不同的需求（ ），使读书进入真正的理性时代。", answer: "加以选择", gloss: "lựa chọn" },
      { prompt: "散步时，身体挺直，胳膊自由摆动，能使肺的换气量（ ）。", answer: "大大增加", gloss: "tăng nhiều" },
      { prompt: "我们之间的共同点（ ）分歧。", answer: "大大避免了", gloss: "tránh nhiều" },
      { prompt: "运输量大大增加，这条道路原有的运输能力已（ ）满足要求。", answer: "远远不能", gloss: "xa mới" },
      { prompt: "近期，我国政府将（ ）代表团出访欧洲。", answer: "派遣", gloss: "cử" },
      { prompt: "几项支出（ ）是三千万元。", answer: "共计", gloss: "tổng cộng" },
      { prompt: "他的敬业是大家（ ）的。", answer: "公认", gloss: "công nhận" },
      { prompt: "（ ）我和他在一个单位共事，后来他跳槽走了。", answer: "先前", gloss: "trước kia" },
      { prompt: "他为学校做出的贡献（ ），大家心里都清楚。", answer: "不言而喻", gloss: "rõ ràng" },
      { prompt: "成年以后要独立生活，不能再（ ）父母了。", answer: "依赖", gloss: "dựa" },
      { prompt: "今天我在报纸上看到一则令人（ ）的消息。", answer: "振奋", gloss: "phấn chấn" },
      { prompt: "可以预测病人发病的时机，消除疾病（ ）。", answer: "隐患", gloss: "mầm họa" },
      { prompt: "（ ）患者生命。", answer: "挽救", gloss: "cứu" },
      { prompt: "把疾病消灭在（ ）状态。", answer: "萌芽", gloss: "trứng nước" },
      { prompt: "该公司取得如此（ ）的成就。", answer: "卓越", gloss: "xuất sắc" },
      { prompt: "建立了（ ）合作伙伴关系。", answer: "战略", gloss: "chiến lược" },
      { prompt: "（ ）了过去单打独斗的局面。", answer: "扭转", gloss: "xoay chuyển" },
      { prompt: "在各方面人才的（ ）下，制定切实可行的方案。", answer: "协助", gloss: "giúp đỡ" },
      { prompt: "制定（ ）可行的方案。", answer: "切实", gloss: "thiết thực" },
    ] },
  ],
}
