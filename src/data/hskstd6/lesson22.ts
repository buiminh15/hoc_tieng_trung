import type { Lesson } from '../types'

/** Giáo trình chuẩn HSK 6 (Hạ), Bài 22: 2050年的汽车什么样？. Nghĩa từ mới và ngữ pháp theo sách; dịch bài khóa do app thêm. Không có file nghe. Đáp án theo HSK6-BH-T2-DA. */

export const hskStd6Lesson22: Lesson = {
  id: 22,
  title: "Xe hơi năm 2050 sẽ thế nào?",
  hanzi: "2050年的汽车什么样？",
  pinyin: "Èr líng wǔ líng nián de qìchē shénme yàng?",
  vi: "Xe hơi năm 2050 sẽ thế nào?",
  intro: "Bốn dự báo về ô tô năm 2050: sạch hơn, tự lái, số hóa, đường dài vẫn dùng xăng. Học 动不动, 甲乙丙丁 và so sánh 担保 – 保证.",

  dialogue: [
    { who: 'A', name: '课文', hanzi: "每次遇到交通堵塞，那些滞留在路上，被堵车折磨得心烦意乱的人们就会想：汽车要是也有双翼，能飞起来就好了。人们的期盼，有可能变为现实吗？2050年，汽车会是什么样？别的不敢担保，以下四点大体为我们勾画出了2050年汽车的轮廓。", pinyin: "", vi: "Mỗi lần gặp tắc đường, những người kẹt lại trên đường, bị tắc giày vò đến bực bội rối trí đều nghĩ: ô tô mà có đôi cánh bay lên được thì tốt. Mong đợi của con người liệu có thành hiện thực? Năm 2050 ô tô sẽ ra sao? Cái khác không dám bảo đảm, bốn điểm sau đại thể phác họa đường nét xe hơi năm 2050.", scene: "Mở đầu" },
    { who: 'A', name: '课文', hanzi: "甲 更加清洁、安全。我们首先要问的是，2050年汽车还会存在吗？我们常常听到这样的指责：北极冰川在融化；空气质量在下降；石油资源日益紧缺；每年全球一百多万人死于交通事故，都是汽车惹的祸。鉴于以上劣迹，人类会不会忍痛割爱？根据优胜劣汰的原则，汽车会不会被取代？一切皆有可能，但作为一种将人解放出来的灵活的交通工具，动不动就要将其淘汰，似乎不是明智之举，根本出路还是要在清洁环保、规范驾车出行上下功夫。谋求这一交通工具的清洁、安全，是2050年对汽车最起码的要求。", pinyin: "", vi: "Giáp: sạch và an toàn hơn. Điều ta hỏi trước tiên là năm 2050 ô tô còn tồn tại không? Ta thường nghe lời chỉ trích: băng Bắc Cực đang tan; chất lượng không khí giảm; dầu mỏ ngày càng khan; mỗi năm hơn một triệu người toàn cầu chết vì tai nạn giao thông, đều do ô tô gây họa. Xét những tì vết trên, nhân loại có nén đau cắt ái không? Theo nguyên tắc ưu thắng liệt bại, ô tô có bị thay thế không? Mọi thứ đều có thể, nhưng là phương tiện linh hoạt giải phóng con người, hơi tí là đào thải nó dường như không phải việc khôn ngoan; lối thoát căn bản vẫn là dồn công vào sạch môi trường và lái xe đúng quy phạm. Tìm cách làm phương tiện này sạch và an toàn là yêu cầu tối thiểu với ô tô năm 2050.", scene: "Giáp: sạch, an toàn" },
    { who: 'A', name: '课文', hanzi: "乙 能自动行驶。2050年，无人干预，能够自动在平坦的高速路上奔驰的车辆将会走进家庭。欧洲正试图实现由一名职业司机引导一长串汽车前行，它们是一条线上的珍珠，在路上移动。被引导车辆的驾驶者可以工作，也可以休息，职业司机的工作效益也将大大提高。汽车抵达终点后，车上配备的高科技系统能使车辆自动停泊入位。这就是人类力求实现的汽车自动行驶。", pinyin: "", vi: "Ất: có thể tự lái. Năm 2050, không cần người can thiệp, xe tự chạy băng băng trên đường cao tốc bằng phẳng sẽ vào gia đình. Châu Âu đang thử để một tài xế chuyên nghiệp dẫn một đoàn xe dài đi phía trước, chúng như chuỗi ngọc trai trên một sợi dây, di chuyển trên đường. Người lái xe được dẫn có thể làm việc hoặc nghỉ ngơi, hiệu quả công việc tài xế chuyên nghiệp cũng tăng lớn. Sau khi xe đến đích, hệ thống công nghệ cao trên xe giúp xe tự đỗ vào vị trí. Đó là xe tự lái mà con người cố gắng thực hiện.", scene: "Ất: tự lái" },
    { who: 'A', name: '课文', hanzi: "丙 融合数字生活方式。某家著名的搜索引擎公司意识到，为个人驾驶提供服务蕴藏着巨大的商机，于是，他们迫不及待地加入到汽车研发的行列，车企与电脑公司合作几乎成了无法阻挡的潮流。创造虚拟个人助理，为汽车用户提供路线、交通信息和日程安排等方面的帮助，在2050年将会是必然的服务，而非锦上添花。数字生活方式将完全与汽车融为一体，为汽车的方便、安全使用提供保障。", pinyin: "", vi: "Bính: hòa nhập lối sống số. Một công ty công cụ tìm kiếm nổi tiếng nhận ra việc phục vụ lái xe cá nhân ẩn chứa cơ hội kinh doanh lớn, nên họ nóng lòng gia nhập hàng ngũ nghiên cứu phát triển ô tô; hãng xe hợp tác công ty máy tính gần như thành trào lưu không thể ngăn. Tạo trợ lý cá nhân ảo, giúp người dùng xe về lộ trình, thông tin giao thông, sắp xếp lịch trình… năm 2050 sẽ là dịch vụ tất yếu chứ không phải \"thêu hoa trên gấm\". Lối sống số sẽ hòa làm một với ô tô, bảo đảm cho việc sử dụng xe tiện lợi, an toàn.", scene: "Bính: số hóa" },
    { who: 'A', name: '课文', hanzi: "丁 长途行车仍靠汽油。2050年的汽车动力是什么？电力？风力？还是依然用汽油和柴油？有人会说，清洁能源的开发就是要遏制汽油、柴油的使用。没错，作为日常交通工具，电动汽车的比重一定会提高，可是跑长途呢？电动汽车也许能承受超远距离行驶，但电池可能很重，造价可能很昂贵，充电的时间可能很长，这些都可能成为阻碍人们选择电动汽车的理由，所以，不排除长距离行车还用汽油或柴油，因此为了确保减少污染，燃料的使用效率必须提高，废气的排放必须减少。", pinyin: "", vi: "Đinh: đường dài vẫn dựa vào xăng. Động lực xe năm 2050 là gì? Điện? Gió? Hay vẫn dùng xăng và dầu diesel? Có người nói phát triển năng lượng sạch là để kiềm chế dùng xăng, diesel. Đúng, làm phương tiện thường ngày, tỷ trọng xe điện chắc chắn tăng, nhưng đi đường dài thì sao? Xe điện có lẽ chịu được đi quãng cực xa, nhưng pin có thể rất nặng, giá thành có thể rất đắt, sạc có thể rất lâu, những điều này đều có thể thành lý do cản người ta chọn xe điện, nên không loại trừ việc đi đường dài vẫn dùng xăng hoặc diesel; vì vậy để bảo đảm giảm ô nhiễm, hiệu suất dùng nhiên liệu phải nâng cao, lượng khí thải phải giảm.", scene: "Đinh: đường dài" },
    { who: 'A', name: '课文', hanzi: "长久以来，汽车作为人类重要的交通工具与我们相伴相随，人类也为此付出了巨大的代价。2050年，如果汽车还是我们生活中不可缺少的伴侣，它在我们的经济生活中还扮演支柱产业的角色，它必须是清洁的、安全的，它必须符合可持续发展的原则。", pinyin: "", vi: "Từ lâu nay ô tô là phương tiện quan trọng đồng hành cùng ta, nhân loại cũng vì thế trả cái giá lớn. Năm 2050, nếu ô tô vẫn là bạn đồng hành không thể thiếu trong đời sống, còn đóng vai ngành trụ cột trong kinh tế, thì nó phải sạch, an toàn, phải phù hợp nguyên tắc phát triển bền vững.", scene: "Kết" },
  ],
  dialogueTip: "<b>动不动</b>. <b>甲乙丙丁</b>. <b>担保</b>/<b>保证</b>.",
  slowSay: "2050年的汽车什么样？",

  vocab: [
    { hanzi: "堵塞", pinyin: "dǔsè", pos: "động từ", meaning: "tắc nghẽn", han_viet: '' },
    { hanzi: "滞留", pinyin: "zhìliú", pos: "động từ", meaning: "ngưng lại, dừng lại", han_viet: '' },
    { hanzi: "折磨", pinyin: "zhémó", pos: "động từ", meaning: "giày vò", han_viet: '' },
    { hanzi: "担保", pinyin: "dānbǎo", pos: "động từ", meaning: "bảo đảm", han_viet: '' },
    { hanzi: "大体", pinyin: "dàtǐ", pos: "phó từ", meaning: "đại thể, đại khái", han_viet: '' },
    { hanzi: "勾画", pinyin: "gōuhuà", pos: "động từ", meaning: "phác họa", han_viet: '' },
    { hanzi: "轮廓", pinyin: "lúnkuò", pos: "danh từ", meaning: "hình dáng, nét khái quát", han_viet: '' },
    { hanzi: "指责", pinyin: "zhǐzé", pos: "động từ", meaning: "chỉ trích", han_viet: '' },
    { hanzi: "融化", pinyin: "rónghuà", pos: "động từ", meaning: "tan chảy", han_viet: '' },
    { hanzi: "石油", pinyin: "shíyóu", pos: "danh từ", meaning: "dầu mỏ", han_viet: '' },
    { hanzi: "事故", pinyin: "shìgù", pos: "danh từ", meaning: "tai nạn", han_viet: '' },
    { hanzi: "优胜劣汰", pinyin: "yōushèng-liètài", pos: "thành ngữ", meaning: "ưu thắng liệt bại", han_viet: '' },
    { hanzi: "明智", pinyin: "míngzhì", pos: "tính từ", meaning: "sáng suốt", han_viet: '' },
    { hanzi: "出路", pinyin: "chūlù", pos: "danh từ", meaning: "lối thoát", han_viet: '' },
    { hanzi: "规范", pinyin: "guīfàn", pos: "tính từ", meaning: "hợp quy phạm", han_viet: '' },
    { hanzi: "谋求", pinyin: "móuqiú", pos: "động từ", meaning: "tìm kiếm", han_viet: '' },
    { hanzi: "干预", pinyin: "gānyù", pos: "động từ", meaning: "can thiệp", han_viet: '' },
    { hanzi: "平坦", pinyin: "píngtǎn", pos: "tính từ", meaning: "bằng phẳng", han_viet: '' },
    { hanzi: "奔驰", pinyin: "bēnchí", pos: "động từ", meaning: "chạy băng băng", han_viet: '' },
    { hanzi: "试图", pinyin: "shìtú", pos: "động từ", meaning: "thử, định", han_viet: '' },
    { hanzi: "引导", pinyin: "yǐndǎo", pos: "động từ", meaning: "dẫn dắt", han_viet: '' },
    { hanzi: "效益", pinyin: "xiàoyì", pos: "danh từ", meaning: "hiệu quả", han_viet: '' },
    { hanzi: "抵达", pinyin: "dǐdá", pos: "động từ", meaning: "đến, tới", han_viet: '' },
    { hanzi: "配备", pinyin: "pèibèi", pos: "động từ", meaning: "trang bị", han_viet: '' },
    { hanzi: "停泊", pinyin: "tíngbó", pos: "động từ", meaning: "đỗ, cập bến", han_viet: '' },
    { hanzi: "力求", pinyin: "lìqiú", pos: "động từ", meaning: "cố gắng đạt tới", han_viet: '' },
    { hanzi: "融合", pinyin: "rónghé", pos: "động từ", meaning: "hòa nhập", han_viet: '' },
    { hanzi: "潮流", pinyin: "cháoliú", pos: "danh từ", meaning: "trào lưu", han_viet: '' },
    { hanzi: "锦上添花", pinyin: "jǐnshàng-tiānhuā", pos: "thành ngữ", meaning: "thêu hoa trên gấm", han_viet: '' },
    { hanzi: "保障", pinyin: "bǎozhàng", pos: "động từ", meaning: "bảo đảm", han_viet: '' },
    { hanzi: "遏制", pinyin: "èzhì", pos: "động từ", meaning: "ngăn chặn", han_viet: '' },
    { hanzi: "昂贵", pinyin: "ángguì", pos: "tính từ", meaning: "đắt đỏ", han_viet: '' },
    { hanzi: "阻碍", pinyin: "zǔ’ài", pos: "động từ", meaning: "ngăn cản", han_viet: '' },
    { hanzi: "排除", pinyin: "páichú", pos: "động từ", meaning: "loại trừ", han_viet: '' },
    { hanzi: "排放", pinyin: "páifàng", pos: "động từ", meaning: "thải ra", han_viet: '' },
    { hanzi: "代价", pinyin: "dàijià", pos: "danh từ", meaning: "giá phải trả", han_viet: '' },
    { hanzi: "支柱", pinyin: "zhīzhù", pos: "danh từ", meaning: "trụ cột", han_viet: '' },
  ],

  sections: [
    { kind: 'examples', label: "动不动", title: "动不动 (hơi tí là …)", intro: "动不动: biểu thị dễ dàng có phản ứng hoặc hành động nào đó, thường dùng cho việc không mong muốn; thường đi với 就.", groups: [{ label: 'Ví dụ', items: [["他最近工作忙、压力大，动不动就着急、发脾气。", "Tā zuìjìn gōngzuò máng, yālì dà, dòngbudòng jiù zháojí, fā píqi.", "Dạo này anh bận, áp lực lớn, hơi tí là sốt ruột, nổi nóng."], ["对孩子要耐心，不要动不动就训斥。", "Duì háizi yào nàixīn, bú yào dòngbudòng jiù xùnchì.", "Với trẻ phải kiên nhẫn, đừng hơi tí là quở trách."]] }] },
    { kind: 'examples', label: "甲乙丙丁", title: "甲乙丙丁… (liệt kê theo thứ tự)", intro: "甲、乙、丙、丁 (Giáp, Ất, Bính, Đinh): dùng để đánh số thứ tự mục, điểm, nhân vật; trong bài là bốn điểm 甲 乙 丙 丁.", groups: [{ label: 'Ví dụ', items: [["以下四点大体为我们勾画出了2050年汽车的轮廓：甲、乙、丙、丁。", "Yǐxià sì diǎn dàtǐ wèi wǒmen gōuhuà chūle èr líng wǔ líng nián qìchē de lúnkuò: jiǎ, yǐ, bǐng, dīng.", "Bốn điểm sau đại thể phác họa xe năm 2050: Giáp, Ất, Bính, Đinh."], ["甲方、乙方在合同上签了字。", "Jiǎfāng, yǐfāng zài hétong shang qiānle zì.", "Bên A, bên B đã ký vào hợp đồng."]] }] },
    { kind: 'examples', label: "担保 – 保证", title: "So sánh 担保 và 保证", intro: "Giống: động từ, bảo đảm. 保证: động từ + danh từ, nhẹ hơn, dùng với lời hứa; 担保: động từ + danh từ \"sự bảo lãnh\", có tính trách nhiệm pháp lý/cam đoan mạnh, dùng cho việc, vật; 保证 còn là danh từ \"điều bảo đảm\".", groups: [{ label: 'Ví dụ', items: [["他的能力很强，这件棘手的事情交给他办，保证错不了。", "Tā de nénglì hěn qiáng, zhè jiàn jíshǒu de shìqing jiāogěi tā bàn, bǎozhèng cuò bù liǎo.", "Anh ấy năng lực mạnh, việc nan giải này giao anh làm, bảo đảm không sai."], ["他语气坚定地对将军说：“保证圆满完成任务！”", "Tā yǔqì jiāndìng de duì jiāngjūn shuō: “Bǎozhèng yuánmǎn wánchéng rènwu!”", "Anh nói giọng kiên quyết với tướng quân: \"Bảo đảm hoàn thành xuất sắc nhiệm vụ!\""]] }] },
  ],

  notes: [
    { title: "动不动", body: "Hơi tí là.", say: "动不动就要将其淘汰" },
    { title: "甲乙丙丁", body: "Giáp Ất Bính Đinh.", say: "甲、乙、丙、丁" },
    { title: "担保 – 保证", body: "Bảo đảm.", say: "别的不敢担保" },
  ],

  writeChars: ["堵", "塞", "折", "磨", "勾", "轮", "廓", "谋"],

  drills: [],

  qa: [{ title: 'Hoạt động (运用)', items: [{"q": "你觉得2050年的汽车会是什么样？", "hint": "……"}, {"q": "你愿意让自动驾驶汽车载你吗？", "hint": "……"}] }],

  sentences: [],

  dictations: [
    { title: "Giáo trình 练一练 / 练习 2 / 3", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "他身体很弱，（ ）。", answer: "动不动就生病", gloss: "hơi tí là bệnh" },
      { prompt: "你的电脑该换了，（ ），多耽误事啊。", answer: "动不动就死机", gloss: "hơi tí là treo" },
      { prompt: "对孩子要耐心，（ ）。", answer: "不要动不动就训斥", gloss: "đừng hơi tí quở" },
      { prompt: "因为恶劣的天气，机场（ ）。", answer: "滞留了大量旅客", gloss: "kẹt nhiều khách" },
      { prompt: "对于这个高精尖的专业，我（ ）。", answer: "只大体了解了一下", gloss: "chỉ biết đại khái" },
      { prompt: "看到她伤心欲绝的样子，我（ ）。", answer: "试图安慰", gloss: "định an ủi" },
      { prompt: "经过十几个小时的漫长飞行，我们终于（ ）。", answer: "抵达了目的地", gloss: "đến nơi" },
      { prompt: "为了提高工作效率，公司（ ）。", answer: "为员工配备了最新的办公设备", gloss: "trang bị" },
      { prompt: "演出前我们认真排练，（ ）。", answer: "力求达到最好的演出效果", gloss: "cố đạt tốt nhất" },
      { prompt: "谁出行时没遇到过交通（ ）呢？", answer: "堵塞", gloss: "tắc" },
      { prompt: "经常被堵车（ ）的你。", answer: "折磨", gloss: "giày vò" },
      { prompt: "是否也（ ）过日益糟糕的交通状况？", answer: "指责", gloss: "chỉ trích" },
      { prompt: "（ ）出行顺利通畅，除了加快道路建设以外。", answer: "保障", gloss: "bảo đảm" },
      { prompt: "每位司机（ ）操作也是非常重要的。", answer: "规范", gloss: "quy phạm" },
      { prompt: "高速（ ）的汽车拉近了我们的距离。", answer: "奔驰", gloss: "băng băng" },
      { prompt: "人类也付出了巨大的（ ）。", answer: "代价", gloss: "giá" },
      { prompt: "（ ）资源日益减少。", answer: "石油", gloss: "dầu mỏ" },
      { prompt: "越来越多的人死于交通（ ）。", answer: "事故", gloss: "tai nạn" },
      { prompt: "人类已开始（ ）更清洁、环保的能源。", answer: "谋求", gloss: "tìm kiếm" },
    ] },
  ],
}
