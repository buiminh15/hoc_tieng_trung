import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 4 (Hạ), Bài 20: 路上的风景 (sách trang 135–146).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách, dịch hội thoại do app tự thêm.
 * Nghe: 20-1…20-5. Bài tập: 比一比/练习 2/扩展, đáp án theo "HSK4-2-BH" trang 10–11.
 */

const A = '/audio/hsk-std4/'

export const hskStd4Lesson20: Lesson = {
  id: 20,
  title: 'Quang cảnh dọc đường',
  hanzi: '路上的风景',
  pinyin: 'Lù shang de fēngjǐng',
  vi: 'Quang cảnh dọc đường',
  intro: 'Nói về đi lại, du lịch và ẩm thực. Học động từ + 着 + động từ + 着, 一……就……, 究竟 (so với 到底), 起来, động từ + 起.',

  dialogue: [
    { who: 'A', name: '朋友', hanzi: '该加油了，去机场的路上有加油站吗？', pinyin: 'Gāi jiā yóu le, qù jīchǎng de lùshang yǒu jiāyóuzhàn ma?', vi: 'Đến lúc đổ xăng rồi, trên đường ra sân bay có trạm xăng không?', scene: 'Bài 1 · Tiểu Trương đi Bắc Kinh, bạn đưa ra sân bay' },
    { who: 'B', name: '小张', hanzi: '我记得过了长江大桥往右一拐就有一个，大概有四五公里远。', pinyin: 'Wǒ jìde guòle Chángjiāng Dàqiáo wǎng yòu yì guǎi jiù yǒu yí ge, dàgài yǒu sì-wǔ gōnglǐ yuǎn.', vi: 'Tôi nhớ qua cầu Trường Giang rẽ phải là có một trạm, chừng bốn năm cây số.' },
    { who: 'A', name: '朋友', hanzi: '好，那我就放心了，别开着开着没油了。你去北京的航班是几点的？时间来得及吗？', pinyin: 'Hǎo, nà wǒ jiù fàng xīn le, bié kāizhe kāizhe méi yóu le. Nǐ qù Běijīng de hángbān shì jǐ diǎn de? Shíjiān láidejí ma?', vi: 'Được, vậy tôi yên tâm, đừng lái lái rồi hết xăng. Chuyến bay đi Bắc Kinh của bạn mấy giờ? Kịp không?' },
    { who: 'B', name: '小张', hanzi: '航班本来是十点的，后来机场网站上通知推迟了一个小时，所以九点半以前到就应该没问题。', pinyin: 'Hángbān běnlái shì shí diǎn de, hòulái jīchǎng wǎngzhàn shang tōngzhī tuīchíle yí ge xiǎoshí, suǒyǐ jiǔ diǎn bàn yǐqián dào jiù yīnggāi méi wèntí.', vi: 'Chuyến bay vốn 10 giờ, sau trang web sân bay thông báo hoãn một giờ, nên trước 9 rưỡi đến là không vấn đề.' },
    { who: 'A', name: '朋友', hanzi: '刚才我还有点儿担心来不及呢。一会儿加完油，往西走五百米就能上高速公路。走高速公路大约半个小时就到了。', pinyin: 'Gāngcái wǒ hái yǒudiǎnr dānxīn láibují ne. Yíhuìr jiāwán yóu, wǎng xī zǒu wǔbǎi mǐ jiù néng shàng gāosù gōnglù. Zǒu gāosù gōnglù dàyuē bàn ge xiǎoshí jiù dào le.', vi: 'Vừa nãy tôi còn hơi lo không kịp. Lát đổ xăng xong đi về phía tây 500m là lên đường cao tốc. Đi cao tốc chừng nửa giờ là đến.' },
    { who: 'B', name: '小张', hanzi: '一会儿我自己进去换登机牌，你就不用送我了，等我到了首都机场再给你发短信。', pinyin: 'Yíhuìr wǒ zìjǐ jìnqu huàn dēngjīpái, nǐ jiù búyòng sòng wǒ le, děng wǒ dàole Shǒudū Jīchǎng zài gěi nǐ fā duǎnxìn.', vi: 'Lát tôi tự vào đổi thẻ lên máy bay, bạn không cần tiễn, đợi tôi đến sân bay Thủ Đô sẽ nhắn tin cho bạn.' },
    { who: 'A', name: '孙月', hanzi: '女儿下个星期就要放寒假了，到时候咱们带她去旅游，放松放松，怎么样？', pinyin: 'Nǚ\'ér xià ge xīngqī jiù yào fàng hánjià le, dào shíhou zánmen dài tā qù lǚyóu, fàngsōng fàngsōng, zěnmeyàng?', vi: 'Tuần sau con gái nghỉ đông, lúc đó mình dẫn con đi du lịch thư giãn nhé?', scene: 'Bài 2 · Tôn Nguyệt và chồng định dẫn con gái đi du lịch' },
    { who: 'B', name: '丈夫', hanzi: '平时女儿那么多课，总是说想去旅行，但是没时间，怪可怜的。这次放假咱们带她去哪儿玩儿比较好呢？', pinyin: 'Píngshí nǚ\'ér nàme duō kè, zǒngshì shuō xiǎng qù lǚxíng, dànshì méi shíjiān, guài kělián de. Zhè cì fàng jià zánmen dài tā qù nǎr wánr bǐjiào hǎo ne?', vi: 'Ngày thường con nhiều tiết học, luôn nói muốn đi du lịch mà không có thời gian, thật đáng thương. Kỳ nghỉ này mình dẫn con đi đâu chơi thì hay?' },
    { who: 'A', name: '孙月', hanzi: '去年我同事带她儿子去广西玩儿了一趟，听说很不错，我们就去广西吧。', pinyin: 'Qùnián wǒ tóngshì dài tā érzi qù Guǎngxī wánr le yí tàng, tīngshuō hěn búcuò, wǒmen jiù qù Guǎngxī ba.', vi: 'Năm ngoái đồng nghiệp tôi dẫn con trai đi Quảng Tây chơi một chuyến, nghe nói rất tốt, mình đi Quảng Tây nhé.' },
    { who: 'B', name: '丈夫', hanzi: '好啊，那里的气候和北方很不同，即使是冬天，也非常暖和，还能吃到许多新鲜的水果。等女儿一回来我就告诉她这个好消息。', pinyin: 'Hǎo a, nàli de qìhòu hé běifāng hěn bù tóng, jíshǐ shì dōngtiān, yě fēicháng nuǎnhuo, hái néng chīdào xǔduō xīnxiān de shuǐguǒ. Děng nǚ\'ér yì huílai wǒ jiù gàosu tā zhège hǎo xiāoxi.', vi: 'Được, khí hậu ở đó rất khác miền Bắc, dù mùa đông cũng rất ấm, còn ăn được nhiều trái cây tươi. Con vừa về là anh báo tin vui này.' },
    { who: 'A', name: '孙月', hanzi: '先别着急说。中午我们不是要去对面的饭店吃烤鸭，祝贺她考试成绩都合格吗？那时候再告诉她，不是更好吗？', pinyin: 'Xiān bié zháojí shuō. Zhōngwǔ wǒmen bú shì yào qù duìmiàn de fàndiàn chī kǎoyā, zhùhè tā kǎoshì chéngjì dōu hégé ma? Nà shíhou zài gàosu tā, bú shì gèng hǎo ma?', vi: 'Đừng vội nói. Trưa mình chẳng định đi nhà hàng đối diện ăn vịt quay chúc mừng con thi đạt hết sao? Lúc đó báo tin chẳng phải hay hơn?' },
    { who: 'B', name: '丈夫', hanzi: '好主意，到时她知道了肯定特别开心。', pinyin: 'Hǎo zhǔyi, dào shí tā zhīdàole kěndìng tèbié kāixīn.', vi: 'Ý hay, lúc đó con biết chắc rất vui.' },
    { who: 'A', name: '马克', hanzi: '这么多照片，都是你这次去丽江旅行时照的吗？那里的自然风景可真美！', pinyin: 'Zhème duō zhàopiàn, dōu shì nǐ zhè cì qù Lìjiāng lǚxíng shí zhào de ma? Nàli de zìrán fēngjǐng kě zhēn měi!', vi: 'Nhiều ảnh thế, đều là bạn chụp lần đi Lệ Giang à? Phong cảnh thiên nhiên ở đó đẹp thật!', scene: 'Bài 3 · Anna kể với Mark kinh nghiệm đi Lệ Giang' },
    { who: 'B', name: '安娜', hanzi: '是啊，小城四季的风景都很美，而且环境保护得也很好，因此每年都吸引着成千上万的游客去那儿旅游。', pinyin: 'Shì a, xiǎo chéng sìjì de fēngjǐng dōu hěn měi, érqiě huánjìng bǎohù de yě hěn hǎo, yīncǐ měi nián dōu xīyǐnzhe chéngqiān-shàngwàn de yóukè qù nàr lǚyóu.', vi: 'Đúng, thị trấn nhỏ bốn mùa phong cảnh đều đẹp, môi trường bảo vệ cũng tốt nên mỗi năm thu hút hàng nghìn hàng vạn du khách đến đó.' },
    { who: 'A', name: '马克', hanzi: '这张照片上和你干杯的那个人是少数民族吗？她打扮得真漂亮。', pinyin: 'Zhè zhāng zhàopiàn shang hé nǐ gān bēi de nàge rén shì shǎoshù mínzú ma? Tā dǎban de zhēn piàoliang.', vi: 'Người cụng ly với bạn trong ảnh này là dân tộc thiểu số à? Cô ấy trang điểm đẹp thật.' },
    { who: 'B', name: '安娜', hanzi: '她是我们的导游，不是少数民族。一路上她给我们讲了很多有趣的笑话。有一次我把存包的钥匙丢了，最后还是她帮我找到的。这张照片就是找到钥匙后，我们一起照的。', pinyin: 'Tā shì wǒmen de dǎoyóu, bú shì shǎoshù mínzú. Yílù shang tā gěi wǒmen jiǎngle hěn duō yǒuqù de xiàohua. Yǒu yí cì wǒ bǎ cún bāo de yàoshi diū le, zuìhòu háishi tā bāng wǒ zhǎodào de. Zhè zhāng zhàopiàn jiù shì zhǎodào yàoshi hòu, wǒmen yìqǐ zhào de.', vi: 'Cô ấy là hướng dẫn viên của chúng tôi, không phải dân tộc thiểu số. Dọc đường cô kể nhiều chuyện cười thú vị. Có lần tôi làm mất chìa khóa tủ gửi túi, cuối cùng vẫn là cô giúp tôi tìm thấy. Ảnh này chụp sau khi tìm thấy chìa khóa.' },
    { who: 'A', name: '马克', hanzi: '明年我有机会也去那儿看看，到时把你的导游介绍给我吧。究竟哪个季节去丽江旅游比较好呢？', pinyin: 'Míngnián wǒ yǒu jīhuì yě qù nàr kànkan, dào shí bǎ nǐ de dǎoyóu jièshào gěi wǒ ba. Jiūjìng nǎge jìjié qù Lìjiāng lǚyóu bǐjiào hǎo ne?', vi: 'Năm sau có dịp tôi cũng đến đó xem, lúc đó giới thiệu hướng dẫn viên của bạn cho tôi nhé. Rốt cuộc mùa nào đi Lệ Giang thì tốt?' },
    { who: 'B', name: '安娜', hanzi: '那儿最美的季节是春天和秋天，不过那时候人比较多。稍微好一点儿的时间是每年12月到第二年3月。这段时间去丽江的话，无论交通还是吃、住都很便宜。', pinyin: 'Nàr zuì měi de jìjié shì chūntiān hé qiūtiān, búguò nà shíhou rén bǐjiào duō. Shāowēi hǎo yìdiǎnr de shíjiān shì měi nián shí\'èr yuè dào dì-èr nián sān yuè. Zhè duàn shíjiān qù Lìjiāng de huà, wúlùn jiāotōng háishi chī, zhù dōu hěn piányi.', vi: 'Mùa đẹp nhất ở đó là xuân và thu, nhưng lúc đó đông người. Thời gian khá hơn một chút là từ tháng 12 đến tháng 3 năm sau. Đi Lệ Giang lúc này thì giao thông, ăn, ở đều rẻ.' },
    { who: 'A', name: '短文', hanzi: '中国南北距离约5500公里，因此南北气候有很大区别。每年三四月份的时候，如果从北方坐火车到南方去旅游，一路上你会发现，不同的地方有不同的风景：窗外的树一棵一棵地变绿，北方也许还下着雪，南方却已经到处都是绿色了。南方菜很有特点，特别是汤，味道鲜美，很多北方人都喜欢喝。另外，南方和北方的语言也有很大不同。比如你跟上海人对话时，会发现上海话听起来就像外语一样。虽然上海人也会讲普通话，可是仔细听，还是有上海味儿。', pinyin: 'Zhōngguó nán běi jùlí yuē wǔqiān wǔbǎi gōnglǐ, yīncǐ nán běi qìhòu yǒu hěn dà qūbié. Měi nián sān-sì yuèfèn de shíhou, rúguǒ cóng běifāng zuò huǒchē dào nánfāng qù lǚyóu, yílù shang nǐ huì fāxiàn, bù tóng de dìfang yǒu bù tóng de fēngjǐng: chuāng wài de shù yì kē yì kē de biàn lǜ, běifāng yěxǔ hái xiàzhe xuě, nánfāng què yǐjīng dàochù dōu shì lǜsè le. Nánfāng cài hěn yǒu tèdiǎn, tèbié shì tāng, wèidào xiānměi, hěn duō běifāngrén dōu xǐhuan hē. Lìngwài, nánfāng hé běifāng de yǔyán yě yǒu hěn dà bù tóng. Bǐrú nǐ gēn Shànghǎi rén duìhuà shí, huì fāxiàn Shànghǎihuà tīng qilai jiù xiàng wàiyǔ yíyàng. Suīrán Shànghǎi rén yě huì jiǎng pǔtōnghuà, kěshì zǐxì tīng, háishi yǒu Shànghǎi wèir.', vi: 'Khoảng cách Nam–Bắc Trung Quốc khoảng 5500 km nên khí hậu hai miền khác nhau rất nhiều. Vào tháng 3–4 hằng năm nếu đi tàu từ miền Bắc xuống miền Nam du lịch, dọc đường bạn sẽ thấy mỗi nơi một phong cảnh: cây ngoài cửa sổ xanh dần từng cây, miền Bắc có thể còn đang tuyết rơi, miền Nam đã khắp nơi xanh mướt. Món ăn miền Nam rất đặc sắc, nhất là canh, vị tươi ngon, nhiều người miền Bắc thích uống. Ngoài ra ngôn ngữ hai miền cũng khác nhiều. Ví dụ nói chuyện với người Thượng Hải bạn sẽ thấy tiếng Thượng Hải nghe như ngoại ngữ. Tuy người Thượng Hải cũng nói được tiếng phổ thông, nhưng nghe kỹ vẫn có giọng Thượng Hải.', scene: 'Bài 4 · Nam Bắc Trung Quốc' },
    { who: 'A', name: '短文', hanzi: '一个人有时间一定要去旅行，旅行不仅能丰富一个人的经历，而且是很好的减压方法。但对我来说，最重要的是旅行能让我有机会尝到各地有名的小吃。放假的时候，我会收拾好行李，带上地图，买张火车票，向目的地出发。说起吃的东西，给我印象最深的是湖南菜。湖南菜的特点就是辣，与其他地方的辣不同，湖南菜的辣主要是咸辣、香辣和酸辣。虽然全国各地都有湖南饭馆儿，但最好还是直接去那里尝一尝。每次旅行结束后，我都会精神百倍地开始我的工作。', pinyin: 'Yí ge rén yǒu shíjiān yídìng yào qù lǚxíng, lǚxíng bùjǐn néng fēngfù yí ge rén de jīnglì, érqiě shì hěn hǎo de jiǎn yā fāngfǎ. Dàn duì wǒ lái shuō, zuì zhòngyào de shì lǚxíng néng ràng wǒ yǒu jīhuì chángdào gèdì yǒumíng de xiǎochī. Fàng jià de shíhou, wǒ huì shōushi hǎo xíngli, dàishang dìtú, mǎi zhāng huǒchēpiào, xiàng mùdìdì chūfā. Shuōqǐ chī de dōngxi, gěi wǒ yìnxiàng zuì shēn de shì Húnán cài. Húnán cài de tèdiǎn jiù shì là, yǔ qítā dìfang de là bù tóng, Húnán cài de là zhǔyào shì xián là, xiāng là hé suān là. Suīrán quánguó gèdì dōu yǒu Húnán fànguǎnr, dàn zuìhǎo háishi zhíjiē qù nàli cháng yi cháng. Měi cì lǚxíng jiéshù hòu, wǒ dōu huì jīngshén bǎi bèi de kāishǐ wǒ de gōngzuò.', vi: 'Người có thời gian nhất định phải đi du lịch, du lịch không chỉ làm giàu trải nghiệm mà còn là cách giảm stress tốt. Nhưng với tôi, quan trọng nhất là du lịch cho tôi cơ hội nếm các món ăn vặt nổi tiếng khắp nơi. Kỳ nghỉ tôi sắp xếp hành lý, mang bản đồ, mua vé tàu, lên đường đến nơi cần đến. Nói đến món ăn, ấn tượng sâu nhất là món Hồ Nam. Đặc điểm món Hồ Nam là cay, khác cay nơi khác: chủ yếu cay mặn, cay thơm, cay chua. Tuy khắp nước đều có quán Hồ Nam, nhưng tốt nhất vẫn nên đến tận nơi nếm thử. Mỗi lần du lịch xong, tôi đều bắt đầu công việc với tinh thần gấp trăm lần.', scene: 'Bài 5 · Du lịch và đồ ăn vặt' },
  ],
  dialogueClips: [
    { label: '20-1 · Tiểu Trương và bạn', src: A + 'l20-1.mp3' },
    { label: '20-2 · Tôn Nguyệt và chồng', src: A + 'l20-2.mp3' },
    { label: '20-3 · Anna và Mark', src: A + 'l20-3.mp3' },
    { label: '20-4 · Nam Bắc Trung Quốc', src: A + 'l20-4.mp3' },
    { label: '20-5 · Du lịch và đồ ăn vặt', src: A + 'l20-5.mp3' },
  ],
  dialogueTip: '<b>V着V着</b>: đang V thì bỗng… (开着开着没油了). <b>一……就……</b>: vừa… là…; hoặc "hễ… thì…". <b>究竟</b>: rốt cuộc (văn viết); <b>到底</b>: còn là "đến cùng". <b>起来</b>: nghĩa mở rộng (nghe có vẻ…). <b>V+起</b>: 说起, 聊起, 问起.',
  slowSay: '路上的风景',

  vocab: [
    { hanzi: '加油站', pinyin: 'jiāyóuzhàn', pos: 'danh từ', meaning: 'trạm xăng dầu', han_viet: 'gia du trạm' },
    { hanzi: '航班', pinyin: 'hángbān', pos: 'danh từ', meaning: 'chuyến bay', han_viet: 'hàng ban' },
    { hanzi: '推迟', pinyin: 'tuīchí', pos: 'động từ', meaning: 'hoãn lại', han_viet: 'thôi trì' },
    { hanzi: '高速公路', pinyin: 'gāosù gōnglù', pos: 'danh từ', meaning: 'đường cao tốc', han_viet: 'cao tốc công lộ' },
    { hanzi: '登机牌', pinyin: 'dēngjīpái', pos: 'danh từ', meaning: 'thẻ lên máy bay', han_viet: 'đăng cơ bài' },
    { hanzi: '首都', pinyin: 'shǒudū', pos: 'danh từ', meaning: 'thủ đô', han_viet: 'thủ đô' },
    { hanzi: '旅行', pinyin: 'lǚxíng', pos: 'động từ', meaning: 'du lịch', han_viet: 'lữ hành' },
    { hanzi: '怪', pinyin: 'guài', pos: 'phó từ', meaning: 'rất, vô cùng', han_viet: 'quái' },
    { hanzi: '可怜', pinyin: 'kělián', pos: 'tính từ', meaning: 'đáng thương, tội nghiệp', han_viet: 'khả liên' },
    { hanzi: '对面', pinyin: 'duìmiàn', pos: 'danh từ', meaning: 'đối diện, trước mặt', han_viet: 'đối diện' },
    { hanzi: '烤鸭', pinyin: 'kǎoyā', pos: 'danh từ', meaning: 'vịt quay', han_viet: 'khảo áp' },
    { hanzi: '祝贺', pinyin: 'zhùhè', pos: 'động từ', meaning: 'chúc mừng', han_viet: 'chúc hạ' },
    { hanzi: '合格', pinyin: 'hégé', pos: 'tính từ', meaning: 'đạt tiêu chuẩn, đạt yêu cầu', han_viet: 'hợp cách' },
    { hanzi: '干杯', pinyin: 'gān bēi', pos: 'động từ', meaning: 'cạn ly', han_viet: 'can bôi' },
    { hanzi: '民族', pinyin: 'mínzú', pos: 'danh từ', meaning: 'dân tộc', han_viet: 'dân tộc' },
    { hanzi: '打扮', pinyin: 'dǎban', pos: 'động từ', meaning: 'trang điểm', han_viet: 'đả bạn' },
    { hanzi: '笑话', pinyin: 'xiàohua', pos: 'danh từ', meaning: 'truyện cười', han_viet: 'tiếu thoại' },
    { hanzi: '存', pinyin: 'cún', pos: 'động từ', meaning: 'gửi', han_viet: 'tồn' },
    { hanzi: '钥匙', pinyin: 'yàoshi', pos: 'danh từ', meaning: 'chìa khóa', han_viet: 'thược thi' },
    { hanzi: '究竟', pinyin: 'jiūjìng', pos: 'phó từ', meaning: 'rốt cuộc', han_viet: 'cứu cánh' },
    { hanzi: '棵', pinyin: 'kē', pos: 'lượng từ', meaning: 'cây, ngọn (cho thực vật)', han_viet: 'khỏa' },
    { hanzi: '汤', pinyin: 'tāng', pos: 'danh từ', meaning: 'canh, súp', han_viet: 'thang' },
    { hanzi: '对话', pinyin: 'duìhuà', pos: 'động từ', meaning: 'đối thoại, tiếp xúc', han_viet: 'đối thoại' },
    { hanzi: '普通话', pinyin: 'pǔtōnghuà', pos: 'danh từ', meaning: 'tiếng phổ thông', han_viet: 'phổ thông thoại' },
    { hanzi: '小吃', pinyin: 'xiǎochī', pos: 'danh từ', meaning: 'món ăn vặt', han_viet: 'tiểu ngật' },
    { hanzi: '收拾', pinyin: 'shōushi', pos: 'động từ', meaning: 'thu dọn, thu xếp', han_viet: 'thu thập' },
    { hanzi: '出发', pinyin: 'chūfā', pos: 'động từ', meaning: 'xuất phát, khởi hành', han_viet: 'xuất phát' },
    { hanzi: '辣', pinyin: 'là', pos: 'tính từ', meaning: 'cay', han_viet: 'lạt' },
    { hanzi: '香', pinyin: 'xiāng', pos: 'tính từ', meaning: 'thơm', han_viet: 'hương' },
    { hanzi: '酸', pinyin: 'suān', pos: 'tính từ', meaning: 'chua', han_viet: 'toan' },
  ],

  sections: [
    {
      kind: 'examples', label: 'V着V着', title: 'Động từ + 着 + động từ + 着',
      intro: 'Cấu trúc dùng cùng một động từ (thường đơn âm tiết). Sau cấu trúc này thường có một động từ khác, chỉ hành động khác xuất hiện khi hành động trước đang tiếp diễn.',
      groups: [{ label: 'Ví dụ', items: [['好，那我就放心了，别开着开着没油了。', 'Hǎo, nà wǒ jiù fàng xīn le, bié kāizhe kāizhe méi yóu le.', 'Được, vậy tôi yên tâm, đừng lái lái rồi hết xăng.'], ['她讲着讲着自己就先笑了，而大家却不明白她到底为什么笑。', 'Tā jiǎngzhe jiǎngzhe zìjǐ jiù xiān xiào le, ér dàjiā què bù míngbai tā dàodǐ wèi shénme xiào.', 'Cô nói nói rồi tự cười trước, mà mọi người không hiểu cô cười vì gì.'], ['晚上躺在草地上看星星的感觉非常棒，有时候躺着躺着就安静地睡着了。', 'Wǎnshang tǎng zài cǎodì shang kàn xīngxing de gǎnjué fēicháng bàng, yǒushíhou tǎngzhe tǎngzhe jiù ānjìng de shuìzháo le.', 'Tối nằm trên bãi cỏ ngắm sao cảm giác rất tuyệt, đôi khi nằm nằm rồi lặng lẽ ngủ quên.']] }],
    },
    {
      kind: 'examples', label: '一…就…', title: '一……就……',
      intro: 'Cấu trúc biểu thị hai việc xảy ra nối tiếp nhau; chủ ngữ hai việc có thể giống hoặc khác. Còn mang nghĩa "hễ… thì…": 一 sau là điều kiện, 就 sau là tình huống phát sinh trong điều kiện đó.',
      groups: [{ label: 'Ví dụ', items: [['100年前，塑料一出现就受到人们的普遍欢迎。', 'Yībǎi nián qián, sùliào yì chūxiàn jiù shòudào rénmen de pǔbiàn huānyíng.', '100 năm trước, nhựa vừa xuất hiện đã được mọi người ưa chuộng.'], ['等女儿一回来我就告诉她这个好消息。', 'Děng nǚ\'ér yì huílai wǒ jiù gàosu tā zhège hǎo xiāoxi.', 'Con vừa về là anh báo tin vui này.'], ['儿子小时候一说话就脸红，回答老师问题的时候声音也很小，我当时很为他担心。', 'Érzi xiǎo shíhou yì shuō huà jiù liǎn hóng, huídá lǎoshī wèntí de shíhou shēngyīn yě hěn xiǎo, wǒ dāngshí hěn wèi tā dānxīn.', 'Hồi nhỏ con hễ nói là đỏ mặt, trả lời cô giáo giọng cũng rất nhỏ, tôi lúc đó rất lo.'], ['妈妈一进房间，他就把手机装了起来。', 'Māma yí jìn fángjiān, tā jiù bǎ shǒujī zhuāngle qilai.', 'Mẹ vừa vào phòng, cậu liền cất điện thoại đi.']] }],
    },
    {
      kind: 'examples', label: '究竟', title: '究竟 (rốt cuộc)',
      intro: '究竟: phó từ dùng trong câu hỏi hoặc câu có đại từ nghi vấn, nhằm truy vấn và làm mạnh ngữ khí nghi vấn; dùng nhiều trong văn viết. Nếu chủ ngữ là đại từ nghi vấn thì 究竟 chỉ được đặt trước chủ ngữ.',
      groups: [{ label: 'Ví dụ', items: [['究竟哪个季节去丽江旅游比较好呢？', 'Jiūjìng nǎge jìjié qù Lìjiāng lǚyóu bǐjiào hǎo ne?', 'Rốt cuộc mùa nào đi Lệ Giang thì tốt?'], ['随着科学技术的发展，很多问题已经得到解决。但有些问题我们仍然无法回答，例如，生命究竟从哪里来？', 'Suízhe kēxué jìshù de fāzhǎn, hěn duō wèntí yǐjīng dédào jiějué. Dàn yǒuxiē wèntí wǒmen réngrán wúfǎ huídá, lìrú, shēngmìng jiūjìng cóng nǎli lái?', 'Cùng sự phát triển khoa học nhiều vấn đề đã giải quyết. Nhưng có vấn đề vẫn chưa trả lời được, như: sự sống rốt cuộc từ đâu đến?'], ['学习时，不仅要知道答案是什么，还要弄清楚答案究竟是怎么得来的，只有这样，才能把问题真正弄懂。', 'Xuéxí shí, bùjǐn yào zhīdào dá\'àn shì shénme, hái yào nòng qīngchu dá\'àn jiūjìng shì zěnme délái de, zhǐyǒu zhèyàng, cái néng bǎ wèntí zhēnzhèng nòngdǒng.', 'Khi học không chỉ biết đáp án là gì mà còn phải rõ đáp án rốt cuộc từ đâu ra, như vậy mới hiểu thật sự.']] }],
    },
    {
      kind: 'examples', label: '究竟 – 到底', title: 'So sánh 究竟 và 到底',
      intro: 'Giống nhau: đều là phó từ dùng trong câu hỏi hoặc câu có đại từ nghi vấn để truy vấn, làm mạnh ngữ khí nghi vấn; nếu chủ ngữ là đại từ nghi vấn thì chỉ đặt trước chủ ngữ. Khác nhau: 到底 còn làm động từ nghĩa "liên tục đến khi kết thúc / điểm cuối"; 究竟 không có cách dùng này.',
      groups: [{ label: 'Ví dụ', items: [['无论做什么事情，只有试过才知道究竟/到底能不能成功。', 'Wúlùn zuò shénme shìqing, zhǐyǒu shìguo cái zhīdào jiūjìng/dàodǐ néng bu néng chénggōng.', 'Làm việc gì, chỉ có thử mới biết rốt cuộc có thành công không.'], ['人的一生中，究竟什么是最重要的？', 'Rén de yìshēng zhōng, jiūjìng shénme shì zuì zhòngyào de?', 'Trong đời người, rốt cuộc điều gì quan trọng nhất?'], ['你耐心点儿！这个电影得看到底，才能知道那件事情的原因。', 'Nǐ nàixīn diǎnr! Zhège diànyǐng děi kàn dàodǐ, cái néng zhīdào nà jiàn shìqing de yuányīn.', 'Bạn kiên nhẫn chút! Phim này phải xem đến cùng mới biết nguyên nhân chuyện đó.']] }],
    },
    {
      kind: 'examples', label: '起来 · V+起', title: '起来 (nghĩa mở rộng) và Động từ + 起',
      intro: '起来: bổ ngữ xu hướng "từ dưới lên"; nghĩa mở rộng: hành động bắt đầu và tiếp diễn, hoặc người nói đánh giá người/vật từ một phương diện. Động từ + 起: hành động liên quan đến sự vật nào đó, động từ thường là 说, 谈, 讲, 问, 提, 聊, 回忆… và theo sau thường là danh từ.',
      groups: [
        { label: '起来', items: [['你先把桌子上的东西拿起来，我擦完之后你再放下来。', 'Nǐ xiān bǎ zhuōzi shang de dōngxi ná qilai, wǒ cāwán zhīhòu nǐ zài fàng xialai.', 'Bạn nhấc đồ trên bàn lên, tôi lau xong bạn đặt xuống.'], ['邻居小王最近一定遇到了很多开心的事，你听，他又唱起来了。', 'Línjū Xiǎo Wáng zuìjìn yídìng yùdàole hěn duō kāixīn de shì, nǐ tīng, tā yòu chàng qilai le.', 'Hàng xóm Tiểu Vương dạo này chắc gặp nhiều chuyện vui, bạn nghe, anh ấy lại hát rồi.'], ['比如你跟上海人对话时，会发现上海话听起来就像外语一样。', 'Bǐrú nǐ gēn Shànghǎi rén duìhuà shí, huì fāxiàn Shànghǎihuà tīng qilai jiù xiàng wàiyǔ yíyàng.', 'Ví dụ nói chuyện với người Thượng Hải bạn sẽ thấy tiếng Thượng Hải nghe như ngoại ngữ.']] },
        { label: 'V + 起', items: [['说起吃的东西，给我印象最深的是湖南菜。', 'Shuōqǐ chī de dōngxi, gěi wǒ yìnxiàng zuì shēn de shì Húnán cài.', 'Nói đến món ăn, ấn tượng sâu nhất với tôi là món Hồ Nam.'], ['聊起那场网球比赛，他们俩就兴奋得停不下来了。', 'Liáoqǐ nà chǎng wǎngqiú bǐsài, tāmen liǎ jiù xīngfèn de tíng bu xialai le.', 'Nói đến trận tennis đó, hai người phấn khích không dừng được.'], ['要是有人问起那件事，你就告诉他你还没接到通知，也不清楚怎么回事。', 'Yàoshi yǒu rén wènqǐ nà jiàn shì, nǐ jiù gàosu tā nǐ hái méi jiēdào tōngzhī, yě bù qīngchu zěnme huí shì.', 'Nếu có người hỏi đến việc đó, bạn cứ nói chưa nhận thông báo, cũng không rõ sao.']] },
      ],
    },
    {
      kind: 'examples', label: 'Từ cùng chữ: 格', title: 'Những từ có chữ giống nhau: 格',
      intro: '性格, 价格, 表格, 合格, 严格.',
      groups: [{ label: 'Ví dụ', items: [['我的性格很像我父亲，我的理想就是做一个像父亲那样的医生。', 'Wǒ de xìnggé hěn xiàng wǒ fùqin, wǒ de lǐxiǎng jiù shì zuò yí ge xiàng fùqin nàyàng de yīshēng.', 'Tính cách tôi rất giống bố, lý tưởng của tôi là làm bác sĩ như bố.'], ['如果您想办信用卡的话，得先填一下这张表格。', 'Rúguǒ nín xiǎng bàn xìnyòngkǎ de huà, děi xiān tián yíxià zhè zhāng biǎogé.', 'Nếu bạn muốn làm thẻ tín dụng, phải điền mẫu này trước.'], ['一个合格的公司管理者，一定要允许其他人有反对意见。', 'Yí ge hégé de gōngsī guǎnlǐzhě, yídìng yào yǔnxǔ qítā rén yǒu fǎnduì yìjiàn.', 'Một nhà quản lý công ty đạt chuẩn nhất định phải cho phép người khác có ý kiến phản đối.'], ['严格地说，地球应该叫“水球”，这是因为从地图上看，大约71%的地方都是蓝色的海洋。', 'Yángé de shuō, dìqiú yīnggāi jiào "shuǐqiú", zhè shì yīnwèi cóng dìtú shang kàn, dàyuē bǎi fēn zhī qīshíyī de dìfang dōu shì lánsè de hǎiyáng.', 'Nói nghiêm khắc, Trái Đất nên gọi là "hành tinh nước" vì trên bản đồ khoảng 71% là đại dương xanh.']] }],
    },
  ],

  notes: [
    { title: 'Động từ + 着 + động từ + 着', body: 'Cùng một động từ (thường đơn âm tiết) lặp lại; sau đó có hành động khác xuất hiện bất ngờ: 开着开着没油了, 躺着躺着就睡着了.', say: '别开着开着没油了' },
    { title: '一……就……', body: 'Hai việc nối tiếp ngay (chủ ngữ giống hoặc khác); còn nghĩa "hễ… thì…": 一说话就脸红.', say: '等女儿一回来我就告诉她这个好消息' },
    { title: '究竟 / 到底', body: 'Phó từ truy vấn trong câu hỏi, làm mạnh ngữ khí; chủ ngữ là đại từ nghi vấn thì đặt trước chủ ngữ. 到底 còn là động từ "đến cùng" (坚持到底), 究竟 thì không.', say: '究竟哪个季节去丽江旅游比较好' },
    { title: '起来 / V+起', body: '起来 nghĩa mở rộng: bắt đầu & tiếp diễn (唱起来), hoặc đánh giá từ một phương diện (听起来像外语). V+起: 说起, 聊起, 问起 + danh từ.', say: '说起吃的东西' },
    { title: 'Văn hóa: Bánh chéo (饺子)', body: 'Với nhiều gia đình Trung Quốc, nhất là miền Bắc, gói và ăn sủi cảo là hoạt động quan trọng đón Tết. Sủi cảo thường gói trước giờ Tý đêm 30, đợi đến giờ Tý mới ăn; 饺 gần âm 交 (giao thừa), tượng trưng vui vẻ, sum họp; hình dáng giống thỏi vàng nên gói sủi cảo hàm ý cầu may.', say: '饺子' },
  ],

  writeChars: ['航', '班', '推', '迟', '旅', '祝', '贺', '究'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa',
      items: [
        { q: '朋友因为什么事情担心？他和小张是怎么解决的？', hint: '担心汽车没油；过长江大桥右拐有加油站，加完油再走高速公路。' },
        { q: '小张坐的航班时间发生了什么变化？她和朋友大约多长时间能到达机场？', hint: '本来十点，推迟了一个小时；大约半个多小时能到机场。' },
        { q: '孙月和丈夫为什么想带女儿去旅行？他们准备去哪儿旅行？', hint: '女儿平时课多、想旅行没时间；准备去广西。' },
        { q: '他们想在什么时候告诉女儿去旅行这个消息？为什么？', hint: '中午去吃烤鸭祝贺她考试成绩合格的时候，到时她会更开心。' },
        { q: '安娜这次去丽江找的那个导游怎么样？', hint: '不是少数民族，很会讲笑话，还帮她找到了丢的钥匙。' },
        { q: '为什么丽江值得去旅游？什么时候去那里旅游最好？', hint: '四季风景都美，环境保护好；春秋最美但人多，12月到3月便宜些。' },
        { q: '要是你三四月份从北方坐火车到南方旅行，路上的风景会有哪些变化？为什么？', hint: '窗外的树一棵一棵变绿；南北气候区别大。' },
        { q: '对“我”来说，旅行有哪些好处？旅行中什么东西给“我”的印象最深？它有哪些特点？', hint: '丰富经历、减压、尝小吃；湖南菜，特点是辣：咸辣、香辣、酸辣。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: bàn về cách du lịch lý tưởng', hint: '跟谁一起、旅行方式、出发时间、旅行内容、多长时间；说明你的理由。' },
      ],
    },
  ],

  sentences: [
    { parts: ['别', '开', '着', '开', '着', '没', '油', '了'], pinyin: 'Bié kāizhe kāizhe méi yóu le.', vi: 'Đừng lái lái rồi hết xăng.' },
    { parts: ['等', '女儿', '一', '回来', '我', '就', '告诉', '她', '这个', '好', '消息'], pinyin: 'Děng nǚ\'ér yì huílai wǒ jiù gàosu tā zhège hǎo xiāoxi.', vi: 'Con vừa về là anh báo tin vui này.' },
    { parts: ['究竟', '哪个', '季节', '去', '丽江', '旅游', '比较', '好', '呢'], pinyin: 'Jiūjìng nǎge jìjié qù Lìjiāng lǚyóu bǐjiào hǎo ne?', vi: 'Rốt cuộc mùa nào đi Lệ Giang tốt?' },
    { parts: ['说起', '吃', '的', '东西', '给', '我', '印象', '最', '深', '的', '是', '湖南', '菜'], pinyin: 'Shuōqǐ chī de dōngxi, gěi wǒ yìnxiàng zuì shēn de shì Húnán cài.', vi: 'Nói đến món ăn, ấn tượng sâu nhất là món Hồ Nam.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 合格 · B 航班 · C 对话 · D 可怜 · E 旅行. Gõ chữ cái A–E.',
      items: [
        { prompt: '乘客，您好！我们很抱歉地通知您，由于天气原因，您乘坐的CA1864（ ）推迟起飞。', answer: 'B', gloss: '航班' }, { prompt: '我走在回家的路上，突然发现商店门口有一只（ ）的小狗，我心里一软，就把它抱回了家。', answer: 'D', gloss: '可怜' },
        { prompt: '欢迎大家来到美丽的海南，（ ）中有任何事您都可以找我商量，希望我的服务能让您满意。', answer: 'E', gloss: '旅行' }, { prompt: '“活到老，学到老”。在现代社会中，我们必须坚持学习。努力获得新的知识，才能适应社会的发展速度，做一个（ ）的现代人。', answer: 'A', gloss: '合格' },
        { prompt: '上午来应聘的那个小伙子是学电子技术的，成绩很优秀，通过面试时和他的（ ），感觉他的性格也不错，我觉得他挺适合这份工作的。', answer: 'C', gloss: '对话' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 祝贺 · B 笑话 · C 打扮 · D 普通话 · E 推迟. Gõ chữ cái A–E.',
      items: [
        { prompt: '你的（ ）水平考试考得怎么样？ 我这次没考，因为我错过了报名时间，只能等下次了。', answer: 'D', gloss: '普通话' }, { prompt: '今晚我穿这条裙子怎么样？今年最流行的。 很漂亮，不过我觉得这种（ ）参加正式的舞会可能还是不太合适。', answer: 'C', gloss: '打扮' },
        { prompt: '小高，听说你出国的时间（ ）了？ 是的，我的签证还没有办好，大概得10月底才能走。', answer: 'E', gloss: '推迟' }, { prompt: '这次活动非常成功，我们顺利完成了公司交给的任务。 辛苦了，（ ）你们！来，干一杯！', answer: 'A', gloss: '祝贺' },
        { prompt: '你这一肚子的（ ），都是从哪儿听来的？ 有个网站上有很多，看到有趣的我就记下来。我把网址发给你，你也去看看吧。', answer: 'B', gloss: '笑话' },
      ],
    },
    {
      title: 'Giáo trình 比一比 · 究竟 / 到底 (gõ từ)',
      hint: 'Gõ 究竟 hoặc 到底 theo đáp án sách (câu 1 và 3, 5 chấp nhận cả hai).',
      items: [
        { prompt: '这场比赛太精彩了，你猜（ ）谁能先进球？', answer: '究竟', accept: ['到底'], gloss: '究竟 / 到底' },
        { prompt: '她决心一定要将减肥进行（ ）。', answer: '到底', gloss: '到底' },
        { prompt: '这个题我做了三遍，可每次算出来的答案都不一样，真奇怪，（ ）是哪儿出问题了？', answer: '究竟', accept: ['到底'], gloss: '究竟 / 到底' },
        { prompt: '无论做什么事情都不会很容易就成功，只有坚持（ ），才会有希望。', answer: '到底', gloss: '到底' },
        { prompt: '生气多是由误会引起的，因此当你觉得自己要生气的时候，最好先弄清楚（ ）是怎么回事。', answer: '究竟', accept: ['到底'], gloss: '究竟 / 到底' },
      ],
    },
    {
      title: 'Giáo trình 扩展 · 格 (gõ từ)',
      hint: 'Gõ 严格, 表格, 合格, 性格 hoặc 价格.',
      items: [
        { prompt: '抱歉，这张（ ）您填得不对，请稍等一下，我再拿一张新的给您，请您重新填写一下。', answer: '表格', gloss: '表格' },
        { prompt: '只要他这次考试的成绩都（ ），就可以进入高级班学习。', answer: '合格', gloss: '合格' },
        { prompt: '这家酒店除了房间有点儿小以外，其他方面都还不错，房间里很干净，可以免费上网，（ ）也比较低，对学生来说非常合适。', answer: '价格', gloss: '价格' },
        { prompt: '他平时就对自己要求很（ ），尤其是赛前那个星期，他每天都会把全部动作练习好几遍，希望在比赛中做到最好。', answer: '严格', gloss: '严格' },
        { prompt: '他们两个是在国外旅游的时候认识的，他们俩的（ ）都差不多，聊天儿也挺聊得来，所以很快就成了好朋友。', answer: '性格', gloss: '性格' },
      ],
    },
  ],
}
