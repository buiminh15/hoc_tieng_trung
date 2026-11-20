import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 4 (Thượng), Bài 6: 一分钱一分货 (sách trang 74–84).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách, dịch hội thoại do app tự thêm.
 * Nghe: 06-1…06-5. Bài tập: 热身/比一比/练习 2/扩展, đáp án theo "HSK4-1-BT" trang 6.
 */

const A = '/audio/hsk-std4/'

export const hskStd4Lesson6: Lesson = {
  id: 6,
  title: 'Tiền nào của nấy',
  hanzi: '一分钱一分货',
  pinyin: 'Yì fēn qián yì fēn huò',
  vi: 'Tiền nào của nấy',
  intro: 'Nói về mua sắm, giá cả và khuyến mãi. Học 竟然, 倍, 值得 (so với 值), 其中, (在)……下.',

  dialogue: [
    { who: 'A', name: '张远', hanzi: '昨天晚上我给你打电话一直没人接，你忙什么呢？', pinyin: 'Zuótiān wǎnshang wǒ gěi nǐ dǎ diànhuà yìzhí méi rén jiē, nǐ máng shénme ne?', vi: 'Tối qua tôi gọi điện cho bạn mãi không ai nghe, bạn bận gì thế?', scene: 'Bài 1 · Trương Viễn và Lý Tiến nói về chuyện mua sắm tối qua' },
    { who: 'B', name: '李进', hanzi: '昨天妻子让我陪她去超市买果汁。我把手机忘在家里了。', pinyin: 'Zuótiān qīzi ràng wǒ péi tā qù chāoshì mǎi guǒzhī. Wǒ bǎ shǒujī wàng zài jiā li le.', vi: 'Hôm qua vợ bảo tôi đi cùng cô ấy mua nước ép ở siêu thị. Tôi để quên điện thoại ở nhà.' },
    { who: 'A', name: '张远', hanzi: '买这么点儿东西也用不了那么长时间啊！', pinyin: 'Mǎi zhème diǎnr dōngxi yě yòng bu liǎo nàme cháng shíjiān a!', vi: 'Mua chút đồ thế mà cũng không mất lâu thế chứ!' },
    { who: 'B', name: '李进', hanzi: '我们先去逛了会儿商场。一进门，售货员就热情地为我们介绍这、介绍那，她买了一条裤子、一件衬衫、两双袜子，然后我们就高高兴兴地回家了。', pinyin: 'Wǒmen xiān qù guàngle huìr shāngchǎng. Yí jìn mén, shòuhuòyuán jiù rèqíng de wèi wǒmen jièshào zhè, jièshào nà, tā mǎile yì tiáo kùzi, yí jiàn chènshān, liǎng shuāng wàzi, ránhòu wǒmen jiù gāogāoxìngxìng de huí jiā le.', vi: 'Bọn tôi đi dạo trung tâm thương mại trước. Vừa vào cửa nhân viên đã nhiệt tình giới thiệu này nọ, cô ấy mua một cái quần, một cái áo sơ mi, hai đôi tất, rồi bọn tôi vui vẻ về nhà.' },
    { who: 'A', name: '张远', hanzi: '买东西时我只看自己想买的，而且喜欢自己看、自己选，不希望被别人打扰。', pinyin: 'Mǎi dōngxi shí wǒ zhǐ kàn zìjǐ xiǎng mǎi de, érqiě xǐhuan zìjǐ kàn, zìjǐ xuǎn, bú xīwàng bèi biérén dǎrǎo.', vi: 'Khi mua đồ tôi chỉ nhìn cái mình muốn, lại thích tự xem tự chọn, không muốn bị người khác làm phiền.' },
    { who: 'B', name: '李进', hanzi: '是啊！回家以后，我才发现，竟然忘了去商场的超市买果汁！', pinyin: 'Shì a! Huí jiā yǐhòu, wǒ cái fāxiàn, jìngrán wàngle qù shāngchǎng de chāoshì mǎi guǒzhī!', vi: 'Đúng vậy! Về nhà rồi tôi mới phát hiện, vậy mà quên đi siêu thị của trung tâm mua nước ép!' },
    { who: 'A', name: '王静', hanzi: '西红柿新鲜吗？怎么卖？', pinyin: 'Xīhóngshì xīnxiān ma? Zěnme mài?', vi: 'Cà chua có tươi không? Bán thế nào?', scene: 'Bài 2 · Vương Tĩnh mua cà chua ở cửa hàng' },
    { who: 'B', name: '售货员', hanzi: '七块钱一斤，您放心，保证百分之百新鲜。', pinyin: 'Qī kuài qián yì jīn, nín fàng xīn, bǎozhèng bǎi fēn zhī bǎi xīnxiān.', vi: '7 tệ một cân, chị yên tâm, bảo đảm tươi trăm phần trăm.' },
    { who: 'A', name: '王静', hanzi: '怎么这么贵啊！我记得昨天才三块五一斤，今天的价格是昨天的两倍。', pinyin: 'Zěnme zhème guì a! Wǒ jìde zuótiān cái sān kuài wǔ yì jīn, jīntiān de jiàgé shì zuótiān de liǎng bèi.', vi: 'Sao đắt thế! Tôi nhớ hôm qua mới 3,5 tệ một cân, giá hôm nay gấp đôi hôm qua.' },
    { who: 'B', name: '售货员', hanzi: '您问的这种是“绿色”的。一分钱一分货。每天吃一两个这种新鲜的西红柿，对皮肤有好处。', pinyin: 'Nín wèn de zhè zhǒng shì "lǜsè" de. Yì fēn qián yì fēn huò. Měi tiān chī yì liǎng ge zhè zhǒng xīnxiān de xīhóngshì, duì pífū yǒu hǎochù.', vi: 'Loại chị hỏi là loại "xanh" (sạch). Tiền nào của nấy. Mỗi ngày ăn một hai quả cà chua tươi này tốt cho da.' },
    { who: 'A', name: '王静', hanzi: '好，那我先买几个尝尝。', pinyin: 'Hǎo, nà wǒ xiān mǎi jǐ ge chángchang.', vi: 'Được, vậy tôi mua vài quả nếm thử trước.' },
    { who: 'B', name: '售货员', hanzi: '好的，给您西红柿，一共两斤，十四块。', pinyin: 'Hǎo de, gěi nín xīhóngshì, yígòng liǎng jīn, shísì kuài.', vi: 'Vâng, cà chua đây ạ, tổng cộng hai cân, 14 tệ.' },
    { who: 'A', name: '售货员', hanzi: '先生，我们店的行李箱都在这里，请问您要什么样的？', pinyin: 'Xiānsheng, wǒmen diàn de xínglixiāng dōu zài zhèli, qǐngwèn nín yào shénme yàng de?', vi: 'Thưa ông, vali cửa hàng chúng tôi đều ở đây, ông cần loại thế nào?', scene: 'Bài 3 · Lý Tiến mua vali ở trung tâm thương mại' },
    { who: 'B', name: '李进', hanzi: '我想买一个轻一点儿的。', pinyin: 'Wǒ xiǎng mǎi yí ge qīng yìdiǎnr de.', vi: 'Tôi muốn mua cái nhẹ hơn một chút.' },
    { who: 'A', name: '售货员', hanzi: '您看看这个，不管从价格方面看，还是从质量上看，都是值得考虑的。', pinyin: 'Nín kànkan zhège, bùguǎn cóng jiàgé fāngmiàn kàn, háishi cóng zhìliàng shang kàn, dōu shì zhídé kǎolǜ de.', vi: 'Ông xem cái này, dù xét về giá hay chất lượng đều đáng cân nhắc.' },
    { who: 'B', name: '李进', hanzi: '质量是不错。请问这个多少钱？', pinyin: 'Zhìliàng shì búcuò. Qǐngwèn zhège duōshao qián?', vi: 'Chất lượng đúng là tốt. Xin hỏi cái này bao nhiêu tiền?' },
    { who: 'A', name: '售货员', hanzi: '现在我们商场正好有打折活动，打完折是999。另外，一年内我们都负责免费修理。', pinyin: 'Xiànzài wǒmen shāngchǎng zhènghǎo yǒu dǎ zhé huódòng, dǎwán zhé shì jiǔbǎi jiǔshí jiǔ. Lìngwài, yì nián nèi wǒmen dōu fùzé miǎnfèi xiūlǐ.', vi: 'Hiện trung tâm đúng lúc có khuyến mãi, sau giảm giá là 999. Ngoài ra trong một năm chúng tôi bảo hành sửa chữa miễn phí.' },
    { who: 'B', name: '李进', hanzi: '你们的服务不错，价格也可以，就买这个吧。', pinyin: 'Nǐmen de fúwù búcuò, jiàgé yě kěyǐ, jiù mǎi zhège ba.', vi: 'Dịch vụ của các bạn tốt, giá cũng được, mua cái này nhé.' },
    { who: 'A', name: '短文', hanzi: '顾客朋友们，为了感谢大家的支持，我们书店今天举行“购书送好礼”活动，购书满100元送一个笔记本，满200元送一本词典。另外，一些图书还有打折活动，其中，小说7.5折，地图8折，留学考试用书6折。如果购书满500元可免费办会员卡，以后购书可打8折。今天过生日的朋友和所有的小朋友还可以获得一份小礼物。欢迎大家选购！', pinyin: 'Gùkè péngyoumen, wèile gǎnxiè dàjiā de zhīchí, wǒmen shūdiàn jīntiān jǔxíng "gòu shū sòng hǎo lǐ" huódòng, gòu shū mǎn yìbǎi yuán sòng yí ge bǐjìběn, mǎn èrbǎi yuán sòng yì běn cídiǎn. Lìngwài, yìxiē túshū hái yǒu dǎ zhé huódòng, qízhōng, xiǎoshuō qī diǎn wǔ zhé, dìtú bā zhé, liúxué kǎoshì yòngshū liù zhé. Rúguǒ gòu shū mǎn wǔbǎi yuán kě miǎnfèi bàn huìyuánkǎ, yǐhòu gòu shū kě dǎ bā zhé. Jīntiān guò shēngrì de péngyou hé suǒyǒu de xiǎopéngyou hái kěyǐ huòdé yí fèn xiǎo lǐwù. Huānyíng dàjiā xuǎngòu!', vi: 'Quý khách, để cảm ơn sự ủng hộ, hôm nay hiệu sách tổ chức "mua sách tặng quà": mua đủ 100 tệ tặng một quyển sổ, đủ 200 tệ tặng một cuốn từ điển. Ngoài ra một số sách giảm giá, trong đó tiểu thuyết giảm 25%, bản đồ giảm 20%, sách thi du học giảm 40%. Mua đủ 500 tệ được làm thẻ hội viên miễn phí, sau này mua sách giảm 20%. Bạn có sinh nhật hôm nay và các bé còn nhận được một món quà nhỏ. Mời quý khách chọn mua!', scene: 'Bài 4 · Thông báo của hiệu sách' },
    { who: 'A', name: '短文', hanzi: '人们常说“一分钱一分货”，意思是东西的质量和价格有很大的关系，也可以说“便宜没好货，好货不便宜”，一般情况下，你花的钱越多，买的东西也就越好。其实也不一定都是这样的。有的时候，质量很好的东西也会很便宜。例如，春天来了，冬天的衣服就会打折，质量很好，还很便宜，花很少的钱就可以买到。一到节日，商场也会举办各种各样的活动，降低价格，这时候我们也可以买到又便宜又好的东西。', pinyin: 'Rénmen cháng shuō "yì fēn qián yì fēn huò", yìsi shì dōngxi de zhìliàng hé jiàgé yǒu hěn dà de guānxi, yě kěyǐ shuō "piányi méi hǎo huò, hǎo huò bù piányi", yìbān qíngkuàng xià, nǐ huā de qián yuè duō, mǎi de dōngxi yě jiù yuè hǎo. Qíshí yě bù yídìng dōu shì zhèyàng de. Yǒu de shíhou, zhìliàng hěn hǎo de dōngxi yě huì hěn piányi. Lìrú, chūntiān lái le, dōngtiān de yīfu jiù huì dǎ zhé, zhìliàng hěn hǎo, hái hěn piányi, huā hěn shǎo de qián jiù kěyǐ mǎidào. Yí dào jiérì, shāngchǎng yě huì jǔbàn gè zhǒng gè yàng de huódòng, jiàngdī jiàgé, zhè shíhou wǒmen yě kěyǐ mǎidào yòu piányi yòu hǎo de dōngxi.', vi: 'Người ta hay nói "tiền nào của nấy", nghĩa là chất lượng và giá cả có quan hệ lớn, cũng có thể nói "rẻ không có hàng tốt, hàng tốt không rẻ"; thông thường bạn tiêu càng nhiều tiền thì đồ mua càng tốt. Thật ra cũng không nhất định như vậy. Có khi hàng chất lượng rất tốt cũng rất rẻ. Ví dụ xuân đến, quần áo mùa đông giảm giá, chất lượng tốt lại rẻ, tốn ít tiền là mua được. Đến ngày lễ, trung tâm thương mại tổ chức đủ loại hoạt động giảm giá, lúc đó ta cũng mua được đồ vừa rẻ vừa tốt.', scene: 'Bài 5 · Tiền nào của nấy' },
  ],
  dialogueClips: [
    { label: '06-1 · Trương Viễn và Lý Tiến', src: A + 'l6-1.mp3' },
    { label: '06-2 · Vương Tĩnh mua cà chua', src: A + 'l6-2.mp3' },
    { label: '06-3 · Lý Tiến mua vali', src: A + 'l6-3.mp3' },
    { label: '06-4 · Thông báo của hiệu sách', src: A + 'l6-4.mp3' },
    { label: '06-5 · Tiền nào của nấy', src: A + 'l6-5.mp3' },
  ],
  dialogueTip: '<b>竟然</b>: vậy mà (ngoài dự đoán). <b>倍</b>: lần (两倍). <b>值得</b>: đáng. <b>其中</b>: trong đó. <b>(在)……下</b>: trong điều kiện… (在老师的帮助下).',
  slowSay: '一分钱一分货',

  vocab: [
    { hanzi: '果汁', pinyin: 'guǒzhī', pos: 'danh từ', meaning: 'nước trái cây', han_viet: 'quả trấp' },
    { hanzi: '售货员', pinyin: 'shòuhuòyuán', pos: 'danh từ', meaning: 'nhân viên bán hàng', han_viet: 'thụ hóa viên' },
    { hanzi: '袜子', pinyin: 'wàzi', pos: 'danh từ', meaning: 'tất, vớ', han_viet: 'miệt tử' },
    { hanzi: '打扰', pinyin: 'dǎrǎo', pos: 'động từ', meaning: 'quấy rầy, làm phiền', han_viet: 'đả nhiễu' },
    { hanzi: '竟然', pinyin: 'jìngrán', pos: 'phó từ', meaning: 'không ngờ, mà, vậy mà', han_viet: 'cánh nhiên' },
    { hanzi: '西红柿', pinyin: 'xīhóngshì', pos: 'danh từ', meaning: 'cà chua', han_viet: 'tây hồng thị' },
    { hanzi: '百分之', pinyin: 'bǎi fēn zhī', pos: 'cụm', meaning: 'phần trăm', han_viet: 'bách phân chi' },
    { hanzi: '倍', pinyin: 'bèi', pos: 'lượng từ', meaning: 'lần', han_viet: 'bội' },
    { hanzi: '皮肤', pinyin: 'pífū', pos: 'danh từ', meaning: 'da', han_viet: 'bì phu' },
    { hanzi: '好处', pinyin: 'hǎochù', pos: 'danh từ', meaning: 'lợi ích, điều tốt', han_viet: 'hảo xứ' },
    { hanzi: '尝', pinyin: 'cháng', pos: 'động từ', meaning: 'thưởng thức, nếm', han_viet: 'thường' },
    { hanzi: '轻', pinyin: 'qīng', pos: 'tính từ', meaning: 'nhẹ', han_viet: 'khinh' },
    { hanzi: '方面', pinyin: 'fāngmiàn', pos: 'danh từ', meaning: 'khía cạnh, phương diện', han_viet: 'phương diện' },
    { hanzi: '值得', pinyin: 'zhídé', pos: 'động từ', meaning: 'đáng', han_viet: 'trị đắc' },
    { hanzi: '活动', pinyin: 'huódòng', pos: 'danh từ', meaning: 'hoạt động', han_viet: 'hoạt động' },
    { hanzi: '内', pinyin: 'nèi', pos: 'danh từ', meaning: '(bên) trong', han_viet: 'nội' },
    { hanzi: '免费', pinyin: 'miǎn fèi', pos: 'động từ', meaning: 'miễn phí', han_viet: 'miễn phí' },
    { hanzi: '修理', pinyin: 'xiūlǐ', pos: 'động từ', meaning: 'sửa chữa', han_viet: 'tu lý' },
    { hanzi: '支持', pinyin: 'zhīchí', pos: 'động từ', meaning: 'ủng hộ', han_viet: 'chi trì' },
    { hanzi: '举行', pinyin: 'jǔxíng', pos: 'động từ', meaning: 'tổ chức (hội họp, thi đấu…)', han_viet: 'cử hành' },
    { hanzi: '满', pinyin: 'mǎn', pos: 'động từ', meaning: '(đạt đến một chỉ tiêu hay giới hạn) đủ, đầy, tròn', han_viet: 'mãn' },
    { hanzi: '其中', pinyin: 'qízhōng', pos: 'danh từ', meaning: 'trong đó', han_viet: 'kỳ trung' },
    { hanzi: '小说', pinyin: 'xiǎoshuō', pos: 'danh từ', meaning: 'tiểu thuyết', han_viet: 'tiểu thuyết' },
    { hanzi: '会员卡', pinyin: 'huìyuánkǎ', pos: 'danh từ', meaning: 'thẻ hội viên', han_viet: 'hội viên tạp' },
    { hanzi: '所有', pinyin: 'suǒyǒu', pos: 'tính từ', meaning: 'tất cả, toàn bộ', han_viet: 'sở hữu' },
    { hanzi: '获得', pinyin: 'huòdé', pos: 'động từ', meaning: 'được, lấy được', han_viet: 'hoạch đắc' },
    { hanzi: '情况', pinyin: 'qíngkuàng', pos: 'danh từ', meaning: 'tình hình, tình huống', han_viet: 'tình huống' },
    { hanzi: '例如', pinyin: 'lìrú', pos: 'động từ', meaning: 'lấy ví dụ', han_viet: 'lệ như' },
    { hanzi: '举办', pinyin: 'jǔbàn', pos: 'động từ', meaning: 'tổ chức, tiến hành', han_viet: 'cử biện' },
    { hanzi: '各', pinyin: 'gè', pos: 'đại từ', meaning: 'các, mọi', han_viet: 'các' },
    { hanzi: '降低', pinyin: 'jiàngdī', pos: 'động từ', meaning: 'giảm, hạ', han_viet: 'giáng đê' },
  ],

  sections: [
    {
      kind: 'examples', label: '竟然', title: '竟然 (không ngờ, vậy mà)',
      intro: 'Phó từ 竟然 dùng trước động từ hoặc tính từ để chỉ sự việc không ngờ, nằm ngoài dự đoán.',
      groups: [{ label: 'Ví dụ', items: [['这个歌特别好听，最近很流行，你竟然没听过？', 'Zhège gē tèbié hǎotīng, zuìjìn hěn liúxíng, nǐ jìngrán méi tīngguo?', 'Bài này rất hay, dạo này thịnh hành, vậy mà bạn chưa nghe?'], ['来这家饭馆吃饭的人竟然这么多，排队都排到门口外边去了！', 'Lái zhè jiā fànguǎn chī fàn de rén jìngrán zhème duō, pái duì dōu pái dào ménkǒu wàibian qù le!', 'Người đến quán này ăn mà nhiều thế, xếp hàng ra tận ngoài cửa!'], ['回家以后，我才发现，竟然忘了去商场的超市买果汁！', 'Huí jiā yǐhòu, wǒ cái fāxiàn, jìngrán wàngle qù shāngchǎng de chāoshì mǎi guǒzhī!', 'Về nhà tôi mới thấy vậy mà quên đi siêu thị mua nước ép!']] }],
    },
    {
      kind: 'examples', label: '倍', title: '倍 (lần)',
      intro: 'Lượng từ 倍 chỉ số lần, là lượng từ độc lập, thông thường sau nó không có danh từ.',
      groups: [{ label: 'Ví dụ', items: [['二的五倍是十。', 'Èr de wǔ bèi shì shí.', 'Gấp năm lần hai là mười.'], ['我的工资是每月5000块，他的工资是我的两倍。', 'Wǒ de gōngzī shì měi yuè wǔqiān kuài, tā de gōngzī shì wǒ de liǎng bèi.', 'Lương tôi 5000 tệ/tháng, lương anh ấy gấp đôi tôi.'], ['我记得昨天才三块五一斤，今天的价格是昨天的两倍。', 'Wǒ jìde zuótiān cái sān kuài wǔ yì jīn, jīntiān de jiàgé shì zuótiān de liǎng bèi.', 'Tôi nhớ hôm qua mới 3,5 tệ một cân, hôm nay gấp đôi.']] }],
    },
    {
      kind: 'examples', label: '值得', title: '值得 (đáng)',
      intro: 'Động từ 值得 diễn tả việc đáng thực hiện và sẽ mang lại kết quả tốt.',
      groups: [{ label: 'Ví dụ', items: [['您看看这个，不管从价格方面看，还是从质量上看，都是值得考虑的。', 'Nín kànkan zhège, bùguǎn cóng jiàgé fāngmiàn kàn, háishi cóng zhìliàng shang kàn, dōu shì zhídé kǎolǜ de.', 'Ông xem cái này, dù xét về giá hay chất lượng đều đáng cân nhắc.'], ['你应该改改自己的脾气，别总是为一点儿小事生气，不值得。', 'Nǐ yīnggāi gǎigai zìjǐ de píqi, bié zǒngshì wèi yìdiǎnr xiǎo shì shēng qì, bù zhídé.', 'Bạn nên sửa tính khí, đừng lúc nào cũng giận vì chuyện nhỏ, không đáng.'], ['我们总是很容易看到一个人的缺点，但是别忘了，他身上的优点更值得我们去发现、去学习。', 'Wǒmen zǒngshì hěn róngyì kàndào yí ge rén de quēdiǎn, dànshì bié wàngle, tā shēn shang de yōudiǎn gèng zhídé wǒmen qù fāxiàn, qù xuéxí.', 'Ta dễ thấy khuyết điểm của người khác, nhưng đừng quên ưu điểm của họ càng đáng để ta khám phá và học hỏi.']] }],
    },
    {
      kind: 'examples', label: '值得 – 值', title: 'So sánh 值得 và 值',
      intro: 'Giống nhau: đều diễn tả làm việc gì đó có ý nghĩa hay có giá trị. Khác nhau: 值得 là động từ, theo sau có thể là động từ hoặc một vế câu; 值 là tính từ, thông thường theo sau không có thành phần khác. Cả hai cũng làm động từ nhưng nghĩa khác: 值得 = giá tiền hợp lý, theo sau là động từ/cụm động từ; 值 = hàng hóa tương đương với giá tiền, theo sau là số tiền.',
      groups: [{ label: 'Ví dụ', items: [['这个调查对今后的工作很有用，花再多时间也值得/值。', 'Zhège diàochá duì jīnhòu de gōngzuò hěn yǒuyòng, huā zài duō shíjiān yě zhídé/zhí.', 'Khảo sát này rất có ích cho công việc sau, tốn bao nhiêu thời gian cũng đáng.'], ['别生气了，咱们不值得为这么点儿小事生气。', 'Bié shēng qì le, zánmen bù zhídé wèi zhème diǎnr xiǎo shì shēng qì.', 'Đừng giận, mình không đáng giận vì chút chuyện nhỏ này.'], ['这个沙发价钱不贵，质量又好，值得买。', 'Zhège shāfā jiàqián bú guì, zhìliàng yòu hǎo, zhídé mǎi.', 'Sofa này giá không đắt, chất lượng tốt, đáng mua.'], ['这个手机值五千块。', 'Zhège shǒujī zhí wǔqiān kuài.', 'Chiếc điện thoại này đáng giá 5000 tệ.']] }],
    },
    {
      kind: 'examples', label: '其中 · (在)……下', title: '其中 (trong đó) và (在)……下',
      intro: '其中: danh từ "trong đó, trong số đó", chỉ phạm vi hay vị trí. (在)……下: thành phần ở giữa thường là danh từ hoặc động từ hai âm tiết kèm từ bổ nghĩa, chỉ điều kiện, tình huống.',
      groups: [
        { label: '其中', items: [['我们不仅要会读书，还要会选择其中的好书来读。', 'Wǒmen bùjǐn yào huì dú shū, hái yào huì xuǎnzé qízhōng de hǎo shū lái dú.', 'Ta không chỉ biết đọc mà còn phải biết chọn sách hay trong đó.'], ['一些图书还有打折活动，其中，小说7.5折，地图8折，留学考试用书6折。', 'Yìxiē túshū hái yǒu dǎ zhé huódòng, qízhōng, xiǎoshuō qī diǎn wǔ zhé, dìtú bā zhé, liúxué kǎoshì yòngshū liù zhé.', 'Một số sách giảm giá, trong đó tiểu thuyết 7.5 chiết, bản đồ 8 chiết, sách thi du học 6 chiết.']] },
        { label: '(在)……下', items: [['一般情况下，你花的钱越多，买的东西也就越好。', 'Yìbān qíngkuàng xià, nǐ huā de qián yuè duō, mǎi de dōngxi yě jiù yuè hǎo.', 'Thông thường bạn tiêu càng nhiều thì đồ mua càng tốt.'], ['在冬天比较冷的情况下，吃碗热面条会让人觉得很舒服。', 'Zài dōngtiān bǐjiào lěng de qíngkuàng xià, chī wǎn rè miàntiáo huì ràng rén juéde hěn shūfu.', 'Khi mùa đông khá lạnh, ăn bát mì nóng khiến người ta thấy dễ chịu.'], ['在老师和同学们的帮助下，他的汉语提高得非常快。', 'Zài lǎoshī hé tóngxuémen de bāngzhù xià, tā de Hànyǔ tígāo de fēicháng kuài.', 'Dưới sự giúp đỡ của thầy cô và bạn bè, tiếng Hán của anh ấy tiến bộ rất nhanh.']] },
      ],
    },
    {
      kind: 'examples', label: 'Từ cùng chữ: 其', title: 'Những từ có chữ giống nhau: 其',
      intro: '其次, 其中, 其实, 其他, 尤其.',
      groups: [{ label: 'Ví dụ', items: [['能谈谈你为什么会选择这份工作吗？ 首先，我对这份工作很感兴趣，其次，我学的也是这个专业，比较熟悉。', 'Néng tántan nǐ wèi shénme huì xuǎnzé zhè fèn gōngzuò ma? Shǒuxiān, wǒ duì zhè fèn gōngzuò hěn gǎn xìngqù, qícì, wǒ xué de yě shì zhège zhuānyè, bǐjiào shúxī.', 'Bạn nói vì sao chọn việc này? Trước hết tôi rất quan tâm, thứ hai tôi học đúng chuyên ngành này nên khá quen.'], ['这个电影讲的是一个浪漫的爱情故事，但是我觉得其中人与动物之间的友谊更感人。', 'Zhège diànyǐng jiǎng de shì yí ge làngmàn de àiqíng gùshi, dànshì wǒ juéde qízhōng rén yǔ dòngwù zhījiān de yǒuyì gèng gǎnrén.', 'Phim kể chuyện tình lãng mạn nhưng tôi thấy tình bạn giữa người và động vật trong đó cảm động hơn.'], ['生活中有这样两种人：一种总是看别人怎么生活，另一种喜欢生活给别人看。其实，各人有各人的生活，不用羡慕别人。', 'Shēnghuó zhōng yǒu zhèyàng liǎng zhǒng rén: yì zhǒng zǒngshì kàn biérén zěnme shēnghuó, lìng yì zhǒng xǐhuan shēnghuó gěi biérén kàn. Qíshí, gè rén yǒu gè rén de shēnghuó, búyòng xiànmù biérén.', 'Có hai loại người: một loại luôn nhìn người khác sống thế nào, loại kia thích sống cho người khác xem. Thật ra mỗi người có cuộc sống riêng, không cần ngưỡng mộ người khác.']] }],
    },
  ],

  notes: [
    { title: '竟然', body: 'Phó từ dùng trước động từ hoặc tính từ, chỉ việc không ngờ: 你竟然没听过？ 竟然忘了去超市买果汁！', say: '回家以后，我才发现，竟然忘了买果汁' },
    { title: '倍', body: 'Lượng từ 倍 chỉ số lần, theo sau thường không có danh từ: 今天的价格是昨天的两倍。', say: '今天的价格是昨天的两倍' },
    { title: '值得', body: 'Động từ: việc đáng làm và mang lại kết quả tốt (值得考虑, 不值得生气). 值得 khác 值: 值 đi với số tiền (值五千块).', say: '都是值得考虑的' },
    { title: '其中', body: 'Danh từ "trong đó, trong số đó", chỉ phạm vi hay vị trí: 其中，小说7.5折，地图8折。', say: '其中，小说七点五折' },
    { title: '(在)……下', body: 'Thành phần giữa thường là danh từ hoặc động từ hai âm tiết kèm từ bổ nghĩa, chỉ điều kiện/tình huống: 一般情况下, 在老师的帮助下.', say: '在老师和同学们的帮助下' },
    { title: 'Văn hóa: 一分钱一分货', body: 'Một đồng một món hàng — giá và chất lượng có quan hệ lớn. Cũng nói "便宜没好货，好货不便宜". Nhưng không phải lúc nào cũng vậy: hàng chất lượng tốt đôi khi cũng rất rẻ, nhất là lúc giảm giá theo mùa hay dịp lễ.', say: '便宜没好货，好货不便宜' },
  ],

  writeChars: ['袜', '竟', '倍', '皮', '肤', '值', '修', '理'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa',
      items: [
        { q: '昨天晚上李进为什么没接张远的电话？', hint: '因为他把手机忘在家里了，陪妻子去超市买东西。' },
        { q: '李进夫妻俩都买什么了？', hint: '她买了一条裤子、一件衬衫、两双袜子，却忘了买果汁。' },
        { q: '昨天西红柿多少钱一斤？今天呢？', hint: '昨天三块五一斤，今天七块钱一斤。' },
        { q: '王静买的西红柿怎么样？', hint: '是“绿色”的，保证百分之百新鲜，买了两斤，十四块。' },
        { q: '李进想买什么样的行李箱？花了多少钱买的？', hint: '想买轻一点儿的；打完折是999。' },
        { q: '这个店的售后服务怎么样？', hint: '一年内负责免费修理。' },
        { q: '书店今天有什么活动？怎么才能免费办会员卡？', hint: '“购书送好礼”，购书满500元可免费办会员卡。' },
        { q: '“一分钱一分货”是什么意思？一般什么时候商场会降价？', hint: '质量和价格有很大关系；春天换季、过节日时。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: hỏi nhau về thói quen mua sắm', hint: '你会货比三家吗？你喜欢自己选还是售货员为你介绍？你相信“一分钱一分货”吗？你喜欢“购物送好礼”还是打折活动？价格、服务、质量，哪个最重要？' },
        { q: 'Theo nhóm: kể một lần mua sắm khó quên, dùng ít nhất 4 cấu trúc', hint: '正好打折；是今年最流行的；看起来不错；带的现金不够；经常有它的广告；并不像广告上说的那么好；只买对的，不买贵的；对我来说。' },
      ],
    },
  ],

  sentences: [
    { parts: ['买', '东西', '时', '我', '只', '看', '自己', '想', '买', '的'], pinyin: 'Mǎi dōngxi shí wǒ zhǐ kàn zìjǐ xiǎng mǎi de.', vi: 'Khi mua đồ tôi chỉ nhìn cái mình muốn.' },
    { parts: ['竟然', '忘', '了', '去', '超市', '买', '果汁'], pinyin: 'Jìngrán wàngle qù chāoshì mǎi guǒzhī.', vi: 'Vậy mà quên đi siêu thị mua nước ép.' },
    { parts: ['今天', '的', '价格', '是', '昨天', '的', '两', '倍'], pinyin: 'Jīntiān de jiàgé shì zuótiān de liǎng bèi.', vi: 'Giá hôm nay gấp đôi hôm qua.' },
    { parts: ['一', '年', '内', '我们', '都', '负责', '免费', '修理'], pinyin: 'Yì nián nèi wǒmen dōu fùzé miǎnfèi xiūlǐ.', vi: 'Trong một năm chúng tôi đều bảo hành sửa miễn phí.' },
    { parts: ['不管', '从', '价格', '方面', '看', '还是', '从', '质量', '上', '看', '都', '值得', '考虑'], pinyin: 'Bùguǎn cóng jiàgé fāngmiàn kàn, háishi cóng zhìliàng shang kàn, dōu zhídé kǎolǜ.', vi: 'Dù xét giá hay chất lượng đều đáng cân nhắc.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 支持 · B 打扰 · C 皮肤 · D 百分之 · E 售货员. Gõ chữ cái A–E.',
      items: [
        { prompt: '喂，孙阿姨吗？我是小周。不好意思这么晚（ ）您。', answer: 'B', gloss: '打扰' }, { prompt: '谢谢大家这一年来对我的（ ）和帮助，能和大家一起工作，我感到非常高兴。', answer: 'A', gloss: '支持' },
        { prompt: '王小姐在商场买裙子。她从试衣间出来后，（ ）说：“您穿这条裙子有点儿大。”', answer: 'E', gloss: '售货员' }, { prompt: '我们调查的近七千名上班族中，有（ ）六十四的人经常加班。', answer: 'D', gloss: '百分之' },
        { prompt: '这种水不仅很好喝，用它来洗脸对（ ）也很有好处，所以价格要比其他水贵一些。', answer: 'C', gloss: '皮肤' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 轻 · B 内 · C 尝 · D 满 · E 各. Gõ chữ cái A–E.',
      items: [
        { prompt: '你（ ）了吗？这次蛋糕做得怎么样？ 很好吃，没想到你水平提高了这么多。', answer: 'C', gloss: '尝' }, { prompt: '计划书你看了没？ 看了，（ ）方面都介绍得挺不错。', answer: 'E', gloss: '各' },
        { prompt: '这个纸箱里面是酒，麻烦您搬的时候（ ）一点儿。 好的，我会注意的。', answer: 'A', gloss: '轻' }, { prompt: '现在买沙发，能免费送货上门吗？ 可以，我们三日（ ）给您送到。', answer: 'B', gloss: '内' },
        { prompt: '今天购物（ ）四百元的顾客可以免费获得一份小礼物。 咱们已经买了三百八十多了，再买两双袜子就够了。', answer: 'D', gloss: '满' },
      ],
    },
    {
      title: 'Giáo trình 比一比 · 值得 / 值 (gõ từ)',
      hint: 'Gõ 值得 hoặc 值 theo đáp án sách.',
      items: [
        { prompt: '这瓶葡萄酒（ ）一千块。', answer: '值', gloss: '值' },
        { prompt: '这个问题（ ）大家注意。', answer: '值得', gloss: '值得' },
        { prompt: '一件毛衣不（ ）花两千块。', answer: '值得', gloss: '值得' },
      ],
    },
    {
      title: 'Giáo trình 扩展 · 其 (gõ từ)',
      hint: 'Gõ 其次, 其中, 其实, 其他 hoặc 尤其.',
      items: [
        { prompt: '小时候，大家都说我长得像我妈，（ ）是眼睛和鼻子。', answer: '尤其', gloss: '尤其' },
        { prompt: '他和弟弟虽然是同一天出生的，但是他们俩除了长得很像外，几乎再找不到（ ）共同点。', answer: '其他', gloss: '其他' },
        { prompt: '为了找到最美丽的地方，有些人总是不停地去找，却从不注意身边的地方。（ ），如果他能停下来，也许就会发现最美的地方就在身边。', answer: '其实', gloss: '其实' },
        { prompt: '大学毕业前找工作时，首先，要知道自己想干什么；（ ），还要知道自己能干什么。', answer: '其次', gloss: '其次' },
        { prompt: '8小时内，共有1620个女人经过这面镜子，（ ）1/3的人花很短的时间看镜子中的自己。', answer: '其中', gloss: '其中' },
      ],
    },
  ],
}
