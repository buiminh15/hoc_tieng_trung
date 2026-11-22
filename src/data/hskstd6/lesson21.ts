import type { Lesson } from '../types'

/** Giáo trình chuẩn HSK 6 (Hạ), Bài 21: 未来商店. Nghĩa từ mới và ngữ pháp theo sách; dịch bài khóa do app thêm. Không có file nghe. Đáp án theo HSK6-BH-T2-DA. */

export const hskStd6Lesson21: Lesson = {
  id: 21,
  title: "Cửa hàng tương lai",
  hanzi: "未来商店",
  pinyin: "Wèilái shāngdiàn",
  vi: "Cửa hàng tương lai",
  intro: "Mua sắm tương lai: tự thanh toán, tự thiết kế, tương tác với người bán. Học 以免, 嫌 và so sánh 不免 – 未免.",

  dialogue: [
    { who: 'A', name: '课文', hanzi: "如今喜欢网络购物的人急剧增加，买东西不用在川流不息的人群中奔走，仅需登录网站，动几下手指，下几道指令就可以把东西买回家，人类根深蒂固的购物习惯正在改变。我们不免要问：网上购物如此方便，未来实体商店还会存在吗？有人这样预言：实体商店若想存在，必须进行根本性的革命，而不是改良，否则实体商店昔日的欣欣向荣终将一去不复还。", pinyin: "", vi: "Nay người thích mua sắm trực tuyến tăng vọt, mua đồ không cần chen trong dòng người tấp nập, chỉ cần đăng nhập website, động vài ngón tay, ra vài lệnh là mua được hàng về nhà; thói quen mua sắm ăn sâu bám rễ của con người đang thay đổi. Ta không khỏi hỏi: mua sắm online tiện thế, cửa hàng thực tương lai còn tồn tại không? Có người dự đoán: cửa hàng thực nếu muốn tồn tại phải cách mạng từ gốc chứ không phải cải thiện, nếu không sự thịnh vượng ngày xưa sẽ một đi không trở lại.", scene: "Mua sắm đang đổi thay" },
    { who: 'A', name: '课文', hanzi: "有人这样描述未来商店：那里的仓库货物储备管理、销售结算、客户关系管理等，全部实现电子化。在那儿几乎见不到工作人员，顾客可以自己动手完成整个购物过程。未来商店实行的将是一种全新的商业模式。", pinyin: "", vi: "Có người mô tả cửa hàng tương lai thế này: ở đó quản lý dự trữ hàng kho, thanh toán bán hàng, quản lý quan hệ khách hàng… đều điện tử hóa. Ở đó gần như không thấy nhân viên, khách tự tay hoàn thành toàn bộ quá trình mua sắm. Cửa hàng tương lai thực hiện một mô hình kinh doanh hoàn toàn mới.", scene: "Mô hình mới" },
    { who: 'A', name: '课文', hanzi: "未来商店的购物车把手上装有购物助手——一个可随意装卸的无线电脑工具。消费者想买哪种商品，小屏幕上就会显示商品所在的位置，当消费者走到相应货架时，仪器会发出提示音，以免消费者错过商品。如果你想吃鲜鱼，又嫌腥，不愿自己加工，可以在触摸屏上留言，等店员把鱼清理好后，再去领取，不必排队等候。如果想买手机，又不了解哪一款性能更适合自己，也无须烦恼，电子便利站会为你把关，在那儿一系列选择题会为你提供决策支持和购买建议。", pinyin: "", vi: "Tay cầm xe đẩy của cửa hàng tương lai gắn trợ lý mua sắm, một công cụ máy tính không dây tháo lắp tùy ý. Khách muốn mua loại hàng nào, màn hình nhỏ sẽ hiện vị trí hàng; khi khách đi đến kệ tương ứng, thiết bị phát âm báo, để khách khỏi bỏ lỡ hàng. Nếu bạn muốn ăn cá tươi, lại chê tanh, không muốn tự sơ chế, có thể nhắn trên màn hình cảm ứng, đợi nhân viên làm sạch cá rồi đến lấy, không cần xếp hàng chờ. Muốn mua điện thoại mà không biết mẫu nào hợp mình cũng khỏi lo, trạm tiện lợi điện tử sẽ kiểm định giúp bạn, một loạt câu hỏi lựa chọn sẽ hỗ trợ quyết định và đề xuất mua.", scene: "Xe đẩy thông minh" },
    { who: 'A', name: '课文', hanzi: "购物完毕，该结账了，未来商店无须人工过秤，带有摄像头的结账系统可以识别商品的重量和体积，迅速运算，之后给出消费钱数的总和，自动收款机则可接受现金和刷卡支付。", pinyin: "", vi: "Mua xong, đến lúc thanh toán, cửa hàng tương lai không cần người cân; hệ thống thanh toán có camera nhận diện trọng lượng và thể tích hàng, tính nhanh rồi đưa tổng tiền, máy thu tiền tự động nhận tiền mặt và quẹt thẻ.", scene: "Thanh toán" },
    { who: 'A', name: '课文', hanzi: "消费者加入设计队伍，是未来商店着重推荐的服务，譬如，你想买衣服，可是你觉得市场上的几款都不太满意，那就参与设计吧。你登录到虚拟设计室，进入设计过程，对颜色、外观等设计内容进行投票，这样设计出来的衣服保管你满意。", pinyin: "", vi: "Người tiêu dùng gia nhập đội thiết kế là dịch vụ cửa hàng tương lai nhấn mạnh giới thiệu; chẳng hạn bạn muốn mua quần áo mà thấy vài mẫu trên thị trường đều chưa vừa ý thì hãy tham gia thiết kế. Bạn đăng nhập phòng thiết kế ảo, vào quá trình thiết kế, bỏ phiếu về màu sắc, kiểu dáng…; quần áo thiết kế như vậy bảo đảm bạn hài lòng.", scene: "Tự thiết kế" },
    { who: 'A', name: '课文', hanzi: "在未来商店，商家和消费者的互动非常活跃。不管你是想买样式新颖的羽绒服、旗袍，还是想买你中意的音响、收音机、水龙头或者只是几枚纽扣儿、一个插座，再或者是勘探矿产的工具，你只要把照片发送到专门的网站，就能得到反馈：“您查询的商品在某某店有售，那里有多种款式供您选购。”这样的互动方便了顾客，也为商家带来了生意。未来商店对消费者的关怀可谓无微不至，他们根据消费者的个人生活习惯，把握消费者的需求，将商店变为以消费者为主导的店铺。努力使整个购物过程轻松、快捷、便利，是未来商店每一项设计的宗旨。试想，这样的商店怎么能不生意兴隆呢！", pinyin: "", vi: "Ở cửa hàng tương lai, tương tác giữa người bán và khách rất sôi nổi. Dù bạn muốn mua áo lông vũ, sườn xám kiểu mới, hay loa, radio vừa ý, vòi nước, hoặc chỉ vài cái cúc, một ổ cắm, hay cả dụng cụ thăm dò khoáng sản, chỉ cần gửi ảnh lên website chuyên dụng là nhận phản hồi: \"Hàng bạn tra có bán ở cửa hàng nào đó, ở đó có nhiều mẫu cho bạn chọn mua.\" Tương tác này tiện cho khách, cũng mang lại việc kinh doanh cho người bán. Sự quan tâm của cửa hàng tương lai đối với khách có thể nói là chu đáo từng li từng tí, họ dựa vào thói quen sinh hoạt cá nhân của khách, nắm nhu cầu, biến cửa hàng thành cửa hàng do khách làm chủ đạo. Cố gắng làm cho toàn bộ quá trình mua sắm nhẹ nhàng, nhanh gọn, tiện lợi là tôn chỉ của mỗi thiết kế. Thử nghĩ xem, cửa hàng như thế sao lại không làm ăn phát đạt!", scene: "Tương tác" },
  ],
  dialogueTip: "<b>以免</b>. <b>嫌</b>. <b>不免</b>/<b>未免</b>.",
  slowSay: "未来商店",

  vocab: [
    { hanzi: "急剧", pinyin: "jíjù", pos: "tính từ", meaning: "nhanh chóng", han_viet: '' },
    { hanzi: "川流不息", pinyin: "chuānliú-bùxī", pos: "thành ngữ", meaning: "qua lại như nước chảy", han_viet: '' },
    { hanzi: "登录", pinyin: "dēnglù", pos: "động từ", meaning: "đăng nhập", han_viet: '' },
    { hanzi: "指令", pinyin: "zhǐlìng", pos: "danh từ", meaning: "mệnh lệnh", han_viet: '' },
    { hanzi: "根深蒂固", pinyin: "gēnshēn-dìgù", pos: "thành ngữ", meaning: "ăn sâu bám rễ", han_viet: '' },
    { hanzi: "不免", pinyin: "bùmiǎn", pos: "phó từ", meaning: "khó tránh được", han_viet: '' },
    { hanzi: "预言", pinyin: "yùyán", pos: "động từ", meaning: "tiên đoán", han_viet: '' },
    { hanzi: "革命", pinyin: "gémìng", pos: "động từ", meaning: "cải cách triệt để", han_viet: '' },
    { hanzi: "改良", pinyin: "gǎiliáng", pos: "động từ", meaning: "cải tiến", han_viet: '' },
    { hanzi: "欣欣向荣", pinyin: "xīnxīn-xiàngróng", pos: "thành ngữ", meaning: "thịnh vượng", han_viet: '' },
    { hanzi: "仓库", pinyin: "cāngkù", pos: "danh từ", meaning: "kho", han_viet: '' },
    { hanzi: "储备", pinyin: "chǔbèi", pos: "động từ", meaning: "dự trữ", han_viet: '' },
    { hanzi: "结算", pinyin: "jiésuàn", pos: "động từ", meaning: "kết toán", han_viet: '' },
    { hanzi: "模式", pinyin: "móshì", pos: "danh từ", meaning: "mô hình", han_viet: '' },
    { hanzi: "装卸", pinyin: "zhuāngxiè", pos: "động từ", meaning: "lắp ráp, tháo lắp", han_viet: '' },
    { hanzi: "屏幕", pinyin: "píngmù", pos: "danh từ", meaning: "màn hình", han_viet: '' },
    { hanzi: "相应", pinyin: "xiāngyìng", pos: "động từ", meaning: "tương ứng", han_viet: '' },
    { hanzi: "以免", pinyin: "yǐmiǎn", pos: "liên từ", meaning: "để tránh", han_viet: '' },
    { hanzi: "嫌", pinyin: "xián", pos: "động từ", meaning: "chê, không thích", han_viet: '' },
    { hanzi: "性能", pinyin: "xìngnéng", pos: "danh từ", meaning: "tính năng", han_viet: '' },
    { hanzi: "便利", pinyin: "biànlì", pos: "tính từ", meaning: "tiện lợi", han_viet: '' },
    { hanzi: "运算", pinyin: "yùnsuàn", pos: "động từ", meaning: "tính toán", han_viet: '' },
    { hanzi: "着重", pinyin: "zhuózhòng", pos: "động từ", meaning: "nhấn mạnh", han_viet: '' },
    { hanzi: "虚拟", pinyin: "xūnǐ", pos: "tính từ", meaning: "ảo", han_viet: '' },
    { hanzi: "保管", pinyin: "bǎoguǎn", pos: "động từ", meaning: "bảo đảm", han_viet: '' },
    { hanzi: "新颖", pinyin: "xīnyǐng", pos: "tính từ", meaning: "mới mẻ", han_viet: '' },
    { hanzi: "反馈", pinyin: "fǎnkuì", pos: "động từ", meaning: "phản hồi", han_viet: '' },
    { hanzi: "无微不至", pinyin: "wúwēi-bùzhì", pos: "thành ngữ", meaning: "chu đáo từng li từng tí", han_viet: '' },
    { hanzi: "需求", pinyin: "xūqiú", pos: "danh từ", meaning: "nhu cầu", han_viet: '' },
    { hanzi: "兴隆", pinyin: "xīnglóng", pos: "tính từ", meaning: "phát đạt", han_viet: '' },
  ],

  sections: [
    { kind: 'examples', label: "以免", title: "以免 (để tránh)", intro: "以免: liên từ, chỉ tránh xảy ra tình huống không mong muốn; thường mở đầu vế sau; chủ yếu dùng văn viết.", groups: [{ label: 'Ví dụ', items: [["消费者走到相应货架时，仪器会发出提示音，以免消费者错过商品。", "Xiāofèizhě zǒudào xiāngyìng huòjià shí, yíqì huì fāchū tíshìyīn, yǐmiǎn xiāofèizhě cuòguò shāngpǐn.", "Khi khách đến kệ tương ứng, thiết bị phát âm báo để khách khỏi bỏ lỡ hàng."], ["感冒时应尽量少去公共场所，以免传染别人。", "Gǎnmào shí yīng jǐnliàng shǎo qù gōnggòng chǎngsuǒ, yǐmiǎn chuánrǎn biérén.", "Bị cảm nên hạn chế đến nơi công cộng, để khỏi lây cho người khác."]] }] },
    { kind: 'examples', label: "嫌", title: "嫌 (chê, không thích)", intro: "嫌: động từ, thấy không đủ tốt, không hài lòng vì một điểm nào đó; sau thường là tính từ hoặc cụm động từ.", groups: [{ label: 'Ví dụ', items: [["如果你想吃鲜鱼，又嫌腥，不愿自己加工。", "Rúguǒ nǐ xiǎng chī xiānyú, yòu xián xīng, bú yuàn zìjǐ jiāgōng.", "Nếu bạn muốn ăn cá tươi mà chê tanh, không muốn tự sơ chế."], ["她嫌宿舍条件太差，决定搬出学校。", "Tā xián sùshè tiáojiàn tài chà, juédìng bānchū xuéxiào.", "Cô chê ký túc xá điều kiện quá kém, quyết định dọn ra khỏi trường."]] }] },
    { kind: 'examples', label: "不免 – 未免", title: "So sánh 不免 và 未免", intro: "不免: phó từ, \"khó tránh khỏi\" (kết quả tất nhiên). 未免: phó từ, \"hơi quá\", hàm ý không đồng tình, đánh giá hơi quá mức; không có nghĩa \"khó tránh\".", groups: [{ label: 'Ví dụ', items: [["旧地重游，感慨万千，让人不免想起往事。", "Jiù dì chóng yóu, gǎnkǎi wàn qiān, ràng rén bùmiǎn xiǎngqǐ wǎngshì.", "Thăm lại chốn cũ, cảm khái muôn vàn, khiến người ta khó tránh nhớ chuyện xưa."], ["他未免太不会关心人了。", "Tā wèimiǎn tài bú huì guānxīn rén le.", "Anh ta thật hơi quá kém quan tâm người khác."]] }] },
  ],

  notes: [
    { title: "以免", body: "Để tránh.", say: "以免消费者错过商品" },
    { title: "嫌", body: "Chê.", say: "又嫌腥" },
    { title: "不免 – 未免", body: "Khó tránh / hơi quá.", say: "不免要问 / 未免太……" },
  ],

  writeChars: ["储", "备", "算", "卸", "屏", "幕", "嫌", "腥"],

  drills: [],

  qa: [{ title: 'Hoạt động (运用)', items: [{"q": "你喜欢网上购物还是去实体店？为什么？", "hint": "……"}, {"q": "你希望未来商店有什么功能？", "hint": "……"}] }],

  sentences: [],

  dictations: [
    { title: "Giáo trình 练一练 / 练习 2 / 3", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "机动车和非机动车应该各行其道，以免（ ）。", answer: "发生交通事故", gloss: "tránh tai nạn" },
      { prompt: "使用电脑工作时，不要忘了经常保存你的文件，以免（ ）。", answer: "丢失", gloss: "tránh mất" },
      { prompt: "我们必须不断地看书、学习、充实自己，以免（ ）。", answer: "被社会淘汰", gloss: "khỏi bị đào thải" },
      { prompt: "她喜欢为大家做事，从不嫌（ ）。", answer: "麻烦", gloss: "phiền" },
      { prompt: "他嫌（ ），衣服送来以后就放在那儿，一次都没穿过。", answer: "衣服款式过时", gloss: "kiểu cũ" },
      { prompt: "她嫌（ ），决定搬出学校，和朋友一块儿在外面合租房子。", answer: "宿舍条件太差", gloss: "ký túc kém" },
      { prompt: "最近几十年，世界人口（ ）增加，给地球造成了巨大压力。", answer: "急剧", gloss: "nhanh" },
      { prompt: "他前一天晚上定好了闹钟，（ ）耽误第二天的考试。", answer: "以免", gloss: "để tránh" },
      { prompt: "我（ ）食堂的饭菜太油腻，所以自己动手做饭。", answer: "嫌", gloss: "chê" },
      { prompt: "今天的会议上，总经理（ ）强调了以下几个问题。", answer: "着重", gloss: "nhấn mạnh" },
      { prompt: "这是一家百年老店了，饭菜（ ）让你满意。", answer: "保管", gloss: "bảo đảm" },
      { prompt: "他们（ ）的服务让顾客有回家的感觉。", answer: "无微不至", gloss: "chu đáo" },
      { prompt: "最近我买了一台（ ）很好的电脑。", answer: "性能", gloss: "tính năng" },
      { prompt: "（ ）很大，运算速度超级快。", answer: "屏幕", gloss: "màn hình" },
      { prompt: "运算速度超级快，还有多种开机（ ）可供选择。", answer: "模式", gloss: "chế độ" },
      { prompt: "满足了我多方面的（ ）。", answer: "需求", gloss: "nhu cầu" },
      { prompt: "投票站里参加选举的人总是（ ）。", answer: "川流不息", gloss: "tấp nập" },
      { prompt: "选民们只需登录（ ）的网站，根据指令投票即可。", answer: "相应", gloss: "tương ứng" },
      { prompt: "根据（ ）投票即可。", answer: "指令", gloss: "chỉ dẫn" },
      { prompt: "最后还能在电脑上看到（ ）意见。", answer: "反馈", gloss: "phản hồi" },
    ] },
  ],
}
