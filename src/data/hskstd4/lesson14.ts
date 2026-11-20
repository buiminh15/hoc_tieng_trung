import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 4 (Hạ), Bài 14: 保护地球母亲 (sách trang 50–61).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách, dịch hội thoại do app tự thêm.
 * Nghe: 14-1…14-5. Bài tập: 比一比/练习 2/扩展, đáp án theo "HSK4-2-BH" trang 4–5.
 */

const A = '/audio/hsk-std4/'

export const hskStd4Lesson14: Lesson = {
  id: 14,
  title: 'Bảo vệ Mẹ Trái đất',
  hanzi: '保护地球母亲',
  pinyin: 'Bǎohù dìqiú mǔqīn',
  vi: 'Bảo vệ Mẹ Trái đất',
  intro: 'Nói về bảo vệ môi trường. Học 够, 以, 既然, 于是 (so với 因此), 什么的.',

  dialogue: [
    { who: 'A', name: '王静', hanzi: '这是明天你出差要带的毛巾、牙膏和牙刷，把它们放到箱子里吧。', pinyin: 'Zhè shì míngtiān nǐ chū chāi yào dài de máojīn, yágāo hé yáshuā, bǎ tāmen fàngdào xiāngzi li ba.', vi: 'Đây là khăn mặt, kem và bàn chải đánh răng mai anh đi công tác cần mang, bỏ vào vali nhé.', scene: 'Bài 1 · Vương Tĩnh và Lý Tiến nói chuyện trước chuyến công tác' },
    { who: 'B', name: '李进', hanzi: '不用拿这些，宾馆都会免费提供的。再说，箱子已经够重的了！', pinyin: 'Búyòng ná zhèxiē, bīnguǎn dōu huì miǎnfèi tígōng de. Zàishuō, xiāngzi yǐjīng gòu zhòng de le!', vi: 'Không cần mang, khách sạn đều cung cấp miễn phí. Hơn nữa vali đã khá nặng rồi!' },
    { who: 'A', name: '王静', hanzi: '我当然知道宾馆里有。你不是一直说要保护环境吗？现在就从身边的小事做起吧。', pinyin: 'Wǒ dāngrán zhīdào bīnguǎn li yǒu. Nǐ bú shì yìzhí shuō yào bǎohù huánjìng ma? Xiànzài jiù cóng shēnbiān de xiǎo shì zuòqǐ ba.', vi: 'Em đương nhiên biết khách sạn có. Anh chẳng luôn nói phải bảo vệ môi trường sao? Giờ bắt đầu từ việc nhỏ quanh mình đi.' },
    { who: 'B', name: '李进', hanzi: '行，没问题。我明天上午10点的飞机，你能开车把我送到机场吗？', pinyin: 'Xíng, méi wèntí. Wǒ míngtiān shàngwǔ shí diǎn de fēijī, nǐ néng kāi chē bǎ wǒ sòngdào jīchǎng ma?', vi: 'Được, không vấn đề. Mai 10 giờ sáng anh bay, em lái xe đưa anh ra sân bay được không?' },
    { who: 'A', name: '王静', hanzi: '那个时间路上堵车多严重啊！你还是坐地铁去机场吧。这样不仅省油钱，而且还不会污染空气。', pinyin: 'Nàge shíjiān lùshang dǔ chē duō yánzhòng a! Nǐ háishi zuò dìtiě qù jīchǎng ba. Zhèyàng bùjǐn shěng yóu qián, érqiě hái bú huì wūrǎn kōngqì.', vi: 'Giờ đó tắc đường nghiêm trọng lắm! Anh đi tàu điện ra sân bay đi. Vậy không những tiết kiệm tiền xăng mà còn không gây ô nhiễm không khí.' },
    { who: 'B', name: '李进', hanzi: '好，那就听你的。', pinyin: 'Hǎo, nà jiù tīng nǐ de.', vi: 'Được, vậy nghe em.' },
    { who: 'A', name: '经理', hanzi: '小王，卫生间怎么那么脏啊？这会给客人留下不好的印象，快去打扫一下。', pinyin: 'Xiǎo Wáng, wèishēngjiān zěnme nàme zāng a? Zhè huì gěi kèrén liúxià bù hǎo de yìnxiàng, kuài qù dǎsǎo yíxià.', vi: 'Tiểu Vương, nhà vệ sinh sao bẩn thế? Điều này để lại ấn tượng xấu cho khách, mau đi dọn.', scene: 'Bài 2 · Quản lý và nhân viên nói chuyện công việc' },
    { who: 'B', name: '服务员', hanzi: '经理，实在抱歉。今天店里太忙了，我还没来得及打扫。', pinyin: 'Jīnglǐ, shízài bàoqiàn. Jīntiān diàn li tài máng le, wǒ hái méi láidejí dǎsǎo.', vi: 'Quản lý, thật xin lỗi. Hôm nay quán bận quá, em chưa kịp dọn.' },
    { who: 'A', name: '经理', hanzi: '那张桌子下面还有一些空饮料瓶子和纸盒子。', pinyin: 'Nà zhāng zhuōzi xiàmian hái yǒu yìxiē kōng yǐnliào píngzi hé zhǐ hézi.', vi: 'Dưới bàn kia còn vài chai nước rỗng và hộp giấy.' },
    { who: 'B', name: '服务员', hanzi: '好的，我马上就去把它们扔掉。', pinyin: 'Hǎo de, wǒ mǎshàng jiù qù bǎ tāmen rēngdiào.', vi: 'Vâng, em đi vứt ngay.' },
    { who: 'A', name: '经理', hanzi: '以后你一定得注意这个问题，不管客人多多，生意多忙，我们都要保证餐厅干净卫生。', pinyin: 'Yǐhòu nǐ yídìng děi zhùyì zhège wèntí, bùguǎn kèrén duōduō, shēngyi duō máng, wǒmen dōu yào bǎozhèng cāntīng gānjìng wèishēng.', vi: 'Sau này em nhất định phải chú ý, dù khách đông, làm ăn bận đến đâu cũng phải bảo đảm nhà hàng sạch sẽ.' },
    { who: 'B', name: '服务员', hanzi: '经理您放心，我一定以最快的速度完成。不过咱们真的应该再多招聘几个服务员了。', pinyin: 'Jīnglǐ nín fàng xīn, wǒ yídìng yǐ zuì kuài de sùdù wánchéng. Búguò zánmen zhēn de yīnggāi zài duō zhāopìn jǐ ge fúwùyuán le.', vi: 'Quản lý yên tâm, em nhất định hoàn thành với tốc độ nhanh nhất. Nhưng chúng ta thật sự nên tuyển thêm vài nhân viên.' },
    { who: 'A', name: '孙月', hanzi: '早上听新闻说明天有一个叫“地球一小时”的活动，你对这个活动了解吗？', pinyin: 'Zǎoshang tīng xīnwén shuō míngtiān yǒu yí ge jiào "Dìqiú Yì Xiǎoshí" de huódòng, nǐ duì zhège huódòng liǎojiě ma?', vi: 'Sáng nay nghe tin mai có hoạt động tên "Giờ Trái Đất", bạn hiểu về hoạt động này không?', scene: 'Bài 3 · Tôn Nguyệt và Vương Tĩnh nói về bảo vệ môi trường' },
    { who: 'B', name: '王静', hanzi: '这个活动年年都有，最早是从2007年开始的。明天晚上很多人都会关灯一小时，支持这个活动。你没看到门口的通知吗？我们公司也参加。', pinyin: 'Zhège huódòng niánnián dōu yǒu, zuì zǎo shì cóng èr líng líng qī nián kāishǐ de. Míngtiān wǎnshang hěn duō rén dōu huì guān dēng yì xiǎoshí, zhīchí zhège huódòng. Nǐ méi kàndào ménkǒu de tōngzhī ma? Wǒmen gōngsī yě cānjiā.', vi: 'Hoạt động này năm nào cũng có, sớm nhất từ năm 2007. Tối mai nhiều người sẽ tắt đèn một giờ ủng hộ. Bạn không thấy thông báo ở cửa à? Công ty mình cũng tham gia.' },
    { who: 'A', name: '孙月', hanzi: '真的吗？太好了！既然明天晚上公司会关灯停电，那么我们肯定不用加班了。', pinyin: 'Zhēn de ma? Tài hǎo le! Jìrán míngtiān wǎnshang gōngsī huì guān dēng tíng diàn, nàme wǒmen kěndìng búyòng jiā bān le.', vi: 'Thật à? Tuyệt quá! Đã tối mai công ty tắt đèn cắt điện thì chắc chắn bọn mình không phải tăng ca.' },
    { who: 'B', name: '王静', hanzi: '看你得意的样子！还以为你高兴是为了支持环保，原来是因为不用加班啊！', pinyin: 'Kàn nǐ déyì de yàngzi! Hái yǐwéi nǐ gāoxìng shì wèile zhīchí huánbǎo, yuánlái shì yīnwèi búyòng jiā bān a!', vi: 'Nhìn bạn hể hả kìa! Tôi còn tưởng bạn vui vì ủng hộ môi trường, hóa ra vì không phải tăng ca!' },
    { who: 'A', name: '孙月', hanzi: '环境保护我当然也支持了！对了，为什么会有这么一个活动啊？', pinyin: 'Huánjìng bǎohù wǒ dāngrán yě zhīchí le! Duì le, wèi shénme huì yǒu zhème yí ge huódòng a?', vi: 'Bảo vệ môi trường tôi tất nhiên cũng ủng hộ! À, sao lại có hoạt động này?' },
    { who: 'B', name: '王静', hanzi: '其实目的挺简单的，就是提醒人们节约用电，希望引起人们对气候变暖问题的关注。', pinyin: 'Qíshí mùdì tǐng jiǎndān de, jiù shì tíxǐng rénmen jiéyuē yòng diàn, xīwàng yǐnqǐ rénmen duì qìhòu biànnuǎn wèntí de guānzhù.', vi: 'Thật ra mục đích khá đơn giản, là nhắc mọi người tiết kiệm điện, hy vọng khơi dậy sự quan tâm đến biến đổi khí hậu nóng lên.' },
    { who: 'A', name: '短文', hanzi: '塑料袋给人们的生活带来方便，受到人们的普遍欢迎，可是，它的大量使用也带来了严重的环境污染问题。于是，一些国家规定，超市、商场不能为顾客提供免费塑料袋，并且鼓励大家购买可以多次使用的购物袋。我们每个人都有责任保护环境，因此，请大家节约使用塑料袋，或者购物时自备购物袋，甚至拒绝使用塑料袋。虽然这是一件很小的事，但这样做可以减少塑料袋的使用数量，对环境保护有很大的作用。', pinyin: 'Sùliàodài gěi rénmen de shēnghuó dàilái fāngbiàn, shòudào rénmen de pǔbiàn huānyíng, kěshì, tā de dàliàng shǐyòng yě dàiláile yánzhòng de huánjìng wūrǎn wèntí. Yúshì, yìxiē guójiā guīdìng, chāoshì, shāngchǎng bù néng wèi gùkè tígōng miǎnfèi sùliàodài, bìngqiě gǔlì dàjiā gòumǎi kěyǐ duō cì shǐyòng de gòuwùdài. Wǒmen měi ge rén dōu yǒu zérèn bǎohù huánjìng, yīncǐ, qǐng dàjiā jiéyuē shǐyòng sùliàodài, huòzhě gòuwù shí zìbèi gòuwùdài, shènzhì jùjué shǐyòng sùliàodài. Suīrán zhè shì yí jiàn hěn xiǎo de shì, dàn zhèyàng zuò kěyǐ jiǎnshǎo sùliàodài de shǐyòng shùliàng, duì huánjìng bǎohù yǒu hěn dà de zuòyòng.', vi: 'Túi nilông mang lại tiện lợi cho cuộc sống, được ưa chuộng rộng rãi, nhưng việc dùng nhiều cũng gây ô nhiễm môi trường nghiêm trọng. Vì vậy một số nước quy định siêu thị, trung tâm thương mại không được phát túi nilông miễn phí và khuyến khích mua túi dùng nhiều lần. Mỗi người đều có trách nhiệm bảo vệ môi trường, nên xin mọi người tiết kiệm túi nilông, hoặc tự mang túi khi mua sắm, thậm chí từ chối dùng. Tuy là việc rất nhỏ nhưng làm vậy giảm số lượng túi nilông, rất có tác dụng bảo vệ môi trường.', scene: 'Bài 4 · Túi nilông' },
    { who: 'A', name: '短文', hanzi: '保护地球环境，并不是一件离我们很远、很难做到的事情。实际上，我们只需注意一下身边的小事就可以。例如，夏天把空调的温度开得高一些，出门时记得关空调和电脑，这样可以节约用电；少开车，多骑车或者乘坐地铁和公共汽车，这样能降低空气污染；还有养成把垃圾丢进垃圾桶的习惯什么的。这些是我们每个人都能够做到的小事，但却有实实在在的效果。地球是我们共同的家，只有大家共同努力，减少污染、保护环境，才能使我们的家变得更美丽。', pinyin: 'Bǎohù dìqiú huánjìng, bìng bú shì yí jiàn lí wǒmen hěn yuǎn, hěn nán zuòdào de shìqing. Shíjìshang, wǒmen zhǐ xū zhùyì yíxià shēnbiān de xiǎo shì jiù kěyǐ. Lìrú, xiàtiān bǎ kōngtiáo de wēndù kāi de gāo yìxiē, chū mén shí jìde guān kōngtiáo hé diànnǎo, zhèyàng kěyǐ jiéyuē yòng diàn; shǎo kāi chē, duō qí chē huòzhě chéngzuò dìtiě hé gōnggòng qìchē, zhèyàng néng jiàngdī kōngqì wūrǎn; hái yǒu yǎngchéng bǎ lājī diūjìn lājītǒng de xíguàn shénme de. Zhèxiē shì wǒmen měi ge rén dōu nénggòu zuòdào de xiǎo shì, dàn què yǒu shíshízàizài de xiàoguǒ. Dìqiú shì wǒmen gòngtóng de jiā, zhǐyǒu dàjiā gòngtóng nǔlì, jiǎnshǎo wūrǎn, bǎohù huánjìng, cái néng shǐ wǒmen de jiā biànde gèng měilì.', vi: 'Bảo vệ môi trường Trái Đất không phải việc xa vời, khó làm. Thực ra chỉ cần chú ý việc nhỏ quanh mình. Ví dụ mùa hè chỉnh nhiệt độ điều hòa cao hơn, ra khỏi nhà nhớ tắt điều hòa và máy tính để tiết kiệm điện; ít lái xe, đi xe đạp nhiều hoặc đi tàu điện, xe buýt để giảm ô nhiễm không khí; còn tạo thói quen bỏ rác vào thùng rác v.v. Những việc nhỏ ai cũng làm được nhưng hiệu quả thật sự. Trái Đất là ngôi nhà chung, chỉ khi mọi người cùng nỗ lực giảm ô nhiễm, bảo vệ môi trường mới làm ngôi nhà của ta đẹp hơn.', scene: 'Bài 5 · Làm gì để bảo vệ Trái Đất' },
  ],
  dialogueClips: [
    { label: '14-1 · Vương Tĩnh và Lý Tiến', src: A + 'l14-1.mp3' },
    { label: '14-2 · Quản lý và nhân viên', src: A + 'l14-2.mp3' },
    { label: '14-3 · Tôn Nguyệt và Vương Tĩnh', src: A + 'l14-3.mp3' },
    { label: '14-4 · Túi nilông', src: A + 'l14-4.mp3' },
    { label: '14-5 · Làm gì để bảo vệ Trái Đất', src: A + 'l14-5.mp3' },
  ],
  dialogueTip: '<b>够</b>: đủ (động từ) / khá, đủ (phó từ: 够重的). <b>以</b>: dựa vào, bằng (以最快的速度); 以……为……: xem… là…; để. <b>既然……就/也/还……</b>: đã… thì…. <b>于是</b>: thế là. <b>什么的</b>: vân vân.',
  slowSay: '保护地球母亲',

  vocab: [
    { hanzi: '出差', pinyin: 'chū chāi', pos: 'động từ', meaning: 'đi công tác', han_viet: 'xuất sai' },
    { hanzi: '毛巾', pinyin: 'máojīn', pos: 'danh từ', meaning: 'khăn lau', han_viet: 'mao cân' },
    { hanzi: '牙膏', pinyin: 'yágāo', pos: 'danh từ', meaning: 'kem đánh răng', han_viet: 'nha cao' },
    { hanzi: '重', pinyin: 'zhòng', pos: 'tính từ', meaning: 'nặng', han_viet: 'trọng' },
    { hanzi: '行', pinyin: 'xíng', pos: 'động từ', meaning: 'được, đồng ý', han_viet: 'hành' },
    { hanzi: '省', pinyin: 'shěng', pos: 'động từ', meaning: 'tiết kiệm', han_viet: 'tỉnh' },
    { hanzi: '污染', pinyin: 'wūrǎn', pos: 'động từ', meaning: 'làm ô nhiễm', han_viet: 'ô nhiễm' },
    { hanzi: '卫生间', pinyin: 'wèishēngjiān', pos: 'danh từ', meaning: 'nhà vệ sinh', han_viet: 'vệ sinh gian' },
    { hanzi: '脏', pinyin: 'zāng', pos: 'tính từ', meaning: 'bẩn, bẩn thỉu', han_viet: 'tang' },
    { hanzi: '抱歉', pinyin: 'bàoqiàn', pos: 'động từ', meaning: 'xin lỗi', han_viet: 'bão khiểm' },
    { hanzi: '空', pinyin: 'kōng', pos: 'tính từ', meaning: 'trống, rỗng, không', han_viet: 'không' },
    { hanzi: '盒子', pinyin: 'hézi', pos: 'danh từ', meaning: 'hộp', han_viet: 'hạp tử' },
    { hanzi: '扔', pinyin: 'rēng', pos: 'động từ', meaning: 'vứt bỏ', han_viet: 'nhưng' },
    { hanzi: '以', pinyin: 'yǐ', pos: 'giới từ', meaning: 'dựa vào, bằng', han_viet: 'dĩ' },
    { hanzi: '速度', pinyin: 'sùdù', pos: 'danh từ', meaning: 'tốc độ', han_viet: 'tốc độ' },
    { hanzi: '地球', pinyin: 'dìqiú', pos: 'danh từ', meaning: 'Trái Đất', han_viet: 'địa cầu' },
    { hanzi: '既然', pinyin: 'jìrán', pos: 'liên từ', meaning: 'đã… thì…', han_viet: 'ký nhiên' },
    { hanzi: '停', pinyin: 'tíng', pos: 'động từ', meaning: 'ngừng, cúp, cắt', han_viet: 'đình' },
    { hanzi: '得意', pinyin: 'déyì', pos: 'tính từ', meaning: 'hể hả, đắc chí', han_viet: 'đắc ý' },
    { hanzi: '目的', pinyin: 'mùdì', pos: 'danh từ', meaning: 'mục đích', han_viet: 'mục đích' },
    { hanzi: '暖', pinyin: 'nuǎn', pos: 'tính từ', meaning: 'ấm, ấm áp', han_viet: 'noãn' },
    { hanzi: '塑料袋', pinyin: 'sùliàodài', pos: 'danh từ', meaning: 'túi nilông, túi nhựa', han_viet: 'tố liệu đại' },
    { hanzi: '于是', pinyin: 'yúshì', pos: 'liên từ', meaning: 'thế là', han_viet: 'vu thị' },
    { hanzi: '鼓励', pinyin: 'gǔlì', pos: 'động từ', meaning: 'khuyến khích', han_viet: 'cổ lệ' },
    { hanzi: '拒绝', pinyin: 'jùjué', pos: 'động từ', meaning: 'từ chối', han_viet: 'cự tuyệt' },
    { hanzi: '减少', pinyin: 'jiǎnshǎo', pos: 'động từ', meaning: 'giảm bớt', han_viet: 'giảm thiểu' },
    { hanzi: '数量', pinyin: 'shùliàng', pos: 'danh từ', meaning: 'số lượng', han_viet: 'số lượng' },
    { hanzi: '温度', pinyin: 'wēndù', pos: 'danh từ', meaning: 'nhiệt độ', han_viet: 'ôn độ' },
    { hanzi: '乘坐', pinyin: 'chéngzuò', pos: 'động từ', meaning: 'đi, đáp (xe buýt…)', han_viet: 'thừa tọa' },
    { hanzi: '丢', pinyin: 'diū', pos: 'động từ', meaning: 'ném, vứt', han_viet: 'đâu' },
    { hanzi: '垃圾桶', pinyin: 'lājītǒng', pos: 'danh từ', meaning: 'thùng rác', han_viet: 'lạp cấp dũng' },
    { hanzi: '美丽', pinyin: 'měilì', pos: 'tính từ', meaning: 'đẹp', han_viet: 'mỹ lệ' },
  ],

  sections: [
    {
      kind: 'examples', label: '够', title: '够 (đủ)',
      intro: '够: động từ "đủ về số lượng"; phó từ "mức độ đã đạt tiêu chuẩn nhất định". Cấu trúc "够 + tính từ" dùng trong câu khẳng định, sau tính từ thường có 的.',
      groups: [{ label: 'Ví dụ', items: [['客人来了，中国人一定要把家里最好吃的东西拿出来请客人吃，并且让客人吃够、吃饱。', 'Kèrén lái le, Zhōngguó rén yídìng yào bǎ jiā li zuì hǎochī de dōngxi ná chūlai qǐng kèrén chī, bìngqiě ràng kèrén chīgòu, chībǎo.', 'Khách đến, người Trung Quốc nhất định mang món ngon nhất ra mời và để khách ăn đủ, ăn no.'], ['医生提醒我们，睡觉时间太长并不好，有时甚至会引起头疼，一般睡够八小时就可以了。', 'Yīshēng tíxǐng wǒmen, shuì jiào shíjiān tài cháng bìng bù hǎo, yǒushí shènzhì huì yǐnqǐ tóuténg, yìbān shuìgòu bā xiǎoshí jiù kěyǐ le.', 'Bác sĩ nhắc ngủ quá lâu không tốt, đôi khi còn gây đau đầu, thường ngủ đủ tám tiếng là được.'], ['不用拿这些，宾馆都会免费提供的。再说，箱子已经够重的了！', 'Búyòng ná zhèxiē, bīnguǎn dōu huì miǎnfèi tígōng de. Zàishuō, xiāngzi yǐjīng gòu zhòng de le!', 'Không cần mang, khách sạn cung cấp miễn phí. Hơn nữa vali đã khá nặng rồi!'], ['有的人害怕失败，无法接受失败。这不仅是因为他们不够勇敢，还因为他们对自己要求太高。', 'Yǒu de rén hàipà shībài, wúfǎ jiēshòu shībài. Zhè bùjǐn shì yīnwèi tāmen bú gòu yǒnggǎn, hái yīnwèi tāmen duì zìjǐ yāoqiú tài gāo.', 'Có người sợ thất bại, không chấp nhận được. Điều này không chỉ vì họ chưa đủ dũng cảm mà còn vì đòi hỏi bản thân quá cao.']] }],
    },
    {
      kind: 'examples', label: '以', title: '以 (dựa vào, bằng; để)',
      intro: '以: giới từ "dựa vào, bằng, lấy", thường trong "以……+ động từ". Cấu trúc "以……为……" = "xem… như…, xem… là…". 以 còn là liên từ chỉ mục đích "để, nhằm", đặt đầu vế sau và chủ ngữ hai vế phải giống nhau.',
      groups: [{ label: 'Ví dụ', items: [['经理您放心，我一定以最快的速度完成。', 'Jīnglǐ nín fàng xīn, wǒ yídìng yǐ zuì kuài de sùdù wánchéng.', 'Quản lý yên tâm, tôi nhất định hoàn thành với tốc độ nhanh nhất.'], ['事情做到“差不多”就觉得满意的人往往不会成功，只有以严格的标准来要求自己才会让自己变得更优秀。', 'Shìqing zuòdào "chàbuduō" jiù juéde mǎnyì de rén wǎngwǎng bú huì chénggōng, zhǐyǒu yǐ yángé de biāozhǔn lái yāoqiú zìjǐ cái huì ràng zìjǐ biàn de gèng yōuxiù.', 'Người làm việc "tạm được" đã hài lòng thường khó thành công, chỉ có đặt tiêu chuẩn nghiêm ngặt mới giỏi hơn.'], ['我们应该以那些敢说真话的人为镜子，这样才能及时发现自己的缺点。', 'Wǒmen yīnggāi yǐ nàxiē gǎn shuō zhēnhuà de rén wéi jìngzi, zhèyàng cái néng jíshí fāxiàn zìjǐ de quēdiǎn.', 'Ta nên lấy những người dám nói thật làm tấm gương, như vậy mới kịp thấy khuyết điểm.'], ['如果是十分重要的朋友，中国人往往会请他们去饭店或餐厅吃饭，以表示对客人的尊重和礼貌。', 'Rúguǒ shì shífēn zhòngyào de péngyou, Zhōngguó rén wǎngwǎng huì qǐng tāmen qù fàndiàn huò cāntīng chī fàn, yǐ biǎoshì duì kèrén de zūnzhòng hé lǐmào.', 'Nếu là bạn rất quan trọng, người Trung Quốc thường mời ra nhà hàng để tỏ sự tôn trọng và lịch sự.']] }],
    },
    {
      kind: 'examples', label: '既然', title: '既然 (đã… thì…)',
      intro: '既然: liên từ ở vế đầu, nghĩa "vì sự thật đã như vậy". Vế sau thường có 就/也/还 hô ứng, nêu kết luận suy ra từ tình huống đã nêu.',
      groups: [{ label: 'Ví dụ', items: [['你既然不愿意打球，为什么还要打？ 我是不得不打啊，因为这些天我又胖了好几斤。', 'Nǐ jìrán bú yuànyì dǎ qiú, wèi shénme hái yào dǎ? Wǒ shì bù dé bù dǎ a, yīnwèi zhè xiē tiān wǒ yòu pàngle hǎo jǐ jīn.', 'Đã không muốn chơi bóng sao còn chơi? Tôi bắt buộc phải chơi vì mấy hôm nay lại béo lên mấy cân.'], ['真抱歉，明天我得出差，不能参加明天的会议了。 既然这样，就只好安排在下周了。', 'Zhēn bàoqiàn, míngtiān wǒ děi chū chāi, bù néng cānjiā míngtiān de huìyì le. Jìrán zhèyàng, jiù zhǐhǎo ānpái zài xià zhōu le.', 'Xin lỗi, mai tôi phải đi công tác, không dự họp được. Đã vậy đành sắp xếp sang tuần sau.'], ['既然明天晚上公司会关灯停电，那么我们肯定不用加班了。', 'Jìrán míngtiān wǎnshang gōngsī huì guān dēng tíng diàn, nàme wǒmen kěndìng búyòng jiā bān le.', 'Đã tối mai công ty tắt đèn cắt điện thì chắc chắn bọn mình không phải tăng ca.']] }],
    },
    {
      kind: 'examples', label: '于是 · 什么的', title: '于是 (thế là) và 什么的 (vân vân)',
      intro: '于是: liên từ ở vế sau của câu phức, chỉ việc xảy ra ngay sau việc nêu ở vế trước, thường có quan hệ tiếp nối. 什么的: trợ từ đặt sau các ví dụ liệt kê, nghĩa "còn có những thứ tương tự"; dùng trong khẩu ngữ.',
      groups: [
        { label: '于是', items: [['听爷爷奶奶说，我妹妹出生那天，正好下了一场大雪，于是我爸妈就给她取名叫夏雪。', 'Tīng yéye nǎinai shuō, wǒ mèimei chūshēng nà tiān, zhènghǎo xiàle yì chǎng dàxuě, yúshì wǒ bà mā jiù gěi tā qǔ míng jiào Xiàxuě.', 'Nghe ông bà kể, hôm em gái sinh trời đổ tuyết lớn, thế là bố mẹ đặt tên em là Hạ Tuyết.'], ['一些国家规定，超市、商场不能为顾客提供免费塑料袋，并且鼓励大家购买可以多次使用的购物袋。', 'Yìxiē guójiā guīdìng, chāoshì, shāngchǎng bù néng wèi gùkè tígōng miǎnfèi sùliàodài, bìngqiě gǔlì dàjiā gòumǎi kěyǐ duō cì shǐyòng de gòuwùdài.', 'Một số nước quy định siêu thị không được phát túi nilông miễn phí và khuyến khích mua túi dùng nhiều lần.']] },
        { label: '什么的', items: [['既然你不喜欢新闻专业，那就考虑考虑其他专业吧，中文、国际关系什么的，我和你爸都不反对。', 'Jìrán nǐ bù xǐhuan xīnwén zhuānyè, nà jiù kǎolǜ kǎolǜ qítā zhuānyè ba, Zhōngwén, guójì guānxì shénme de, wǒ hé nǐ bà dōu bù fǎnduì.', 'Đã không thích ngành báo chí thì cân nhắc ngành khác, tiếng Trung, quan hệ quốc tế gì đó, mẹ với bố đều không phản đối.'], ['我们去趟超市吧，明天出去玩儿得买点儿饼干和面包。 好，还有矿泉水、果汁什么的。', 'Wǒmen qù tàng chāoshì ba, míngtiān chūqu wánr děi mǎi diǎnr bǐnggān hé miànbāo. Hǎo, hái yǒu kuàngquánshuǐ, guǒzhī shénme de.', 'Mình đi siêu thị, mai đi chơi cần mua bánh quy, bánh mì. Được, còn nước khoáng, nước ép gì đó.']] },
      ],
    },
    {
      kind: 'examples', label: '于是 – 因此', title: 'So sánh 于是 và 因此',
      intro: 'Giống nhau: đều là liên từ, dùng trong "A，于是/因此 B" chỉ A dẫn đến B. Khác nhau: 于是 nhấn mạnh A xảy ra trước, B xảy ra sau; 因此 nhấn mạnh A là nguyên nhân, B là kết quả.',
      groups: [{ label: 'Ví dụ', items: [['小时候，他经常生病，于是/因此每天都去跑步锻炼身体。', 'Xiǎo shíhou, tā jīngcháng shēng bìng, yúshì/yīncǐ měi tiān dōu qù pǎobù duànliàn shēntǐ.', 'Hồi nhỏ anh hay ốm, nên ngày nào cũng chạy bộ tập thể dục.'], ['大家都同意寒假去旅行，于是，我们开始讨论去哪里旅行的问题。', 'Dàjiā dōu tóngyì hánjià qù lǚxíng, yúshì, wǒmen kāishǐ tǎolùn qù nǎlǐ lǚxíng de wèntí.', 'Mọi người đều đồng ý nghỉ đông đi du lịch, thế là bọn tôi bắt đầu bàn đi đâu.'], ['他三岁跟父亲母亲一起来到这儿，就再也没离开过这里。因此，他对这个地方感情很深。', 'Tā sān suì gēn fùqin mǔqin yìqǐ láidào zhèr, jiù zài yě méi líkāiguo zhèlǐ. Yīncǐ, tā duì zhège dìfang gǎnqíng hěn shēn.', 'Anh ba tuổi cùng bố mẹ đến đây, từ đó chưa rời nơi này. Vì vậy anh rất có tình cảm với nơi này.']] }],
    },
    {
      kind: 'examples', label: 'Từ cùng chữ: 度', title: 'Những từ có chữ giống nhau: 度',
      intro: '速度, 温度, 态度.',
      groups: [{ label: 'Ví dụ', items: [['现在火车的速度非常快，有时乘坐火车甚至比乘坐飞机更节约时间。', 'Xiànzài huǒchē de sùdù fēicháng kuài, yǒushí chéngzuò huǒchē shènzhì bǐ chéngzuò fēijī gèng jiéyuē shíjiān.', 'Tốc độ tàu hỏa nay rất nhanh, đôi khi đi tàu còn tiết kiệm thời gian hơn máy bay.'], ['室外锻炼并不是越早越好，尤其是冬天，日出前温度较低，并不适合运动。', 'Shìwài duànliàn bìng bú shì yuè zǎo yuè hǎo, yóuqí shì dōngtiān, rìchū qián wēndù jiào dī, bìng bú shìhé yùndòng.', 'Tập ngoài trời không phải càng sớm càng tốt, nhất là mùa đông, trước bình minh nhiệt độ thấp, không hợp tập.'], ['人们都希望生活会向着好的方向变化，当我们开始改变自己的态度时，这种变化就开始发生了。', 'Rénmen dōu xīwàng shēnghuó huì xiàngzhe hǎo de fāngxiàng biànhuà, dāng wǒmen kāishǐ gǎibiàn zìjǐ de tàidù shí, zhè zhǒng biànhuà jiù kāishǐ fāshēng le.', 'Ai cũng mong cuộc sống đổi tốt hơn, khi ta bắt đầu đổi thái độ thì sự thay đổi ấy bắt đầu.']] }],
    },
  ],

  notes: [
    { title: '够', body: 'Động từ: đủ về số lượng (睡够八小时). Phó từ: mức độ đạt tiêu chuẩn nhất định, "够 + tính từ + 的" (箱子已经够重的了).', say: '箱子已经够重的了' },
    { title: '以', body: 'Giới từ: dựa vào, bằng, lấy (以最快的速度完成). 以……为……: xem… là…. Liên từ: để, nhằm (以表示对客人的尊重); hai vế phải cùng chủ ngữ.', say: '我一定以最快的速度完成' },
    { title: '既然', body: 'Liên từ ở vế đầu: đã (là sự thật) như vậy; vế sau thường có 就/也/还 nêu kết luận.', say: '既然明天晚上公司会关灯停电' },
    { title: '于是', body: 'Liên từ ở vế sau: việc xảy ra ngay sau việc trước, có quan hệ tiếp nối. So với 因此: 于是 nhấn mạnh trình tự, 因此 nhấn mạnh nguyên nhân – kết quả.', say: '于是，一些国家规定' },
    { title: '什么的', body: 'Trợ từ đặt sau ví dụ liệt kê, chỉ còn những thứ tương tự, dùng trong khẩu ngữ: 矿泉水、果汁什么的.', say: '养成把垃圾丢进垃圾桶的习惯什么的' },
    { title: 'Văn hóa: 地球一小时', body: '"Giờ Trái Đất" (Earth Hour) là hoạt động tắt đèn một giờ vào tối thứ Bảy cuối tháng 3 hằng năm, nhằm nhắc mọi người tiết kiệm điện và quan tâm đến biến đổi khí hậu.', say: '地球一小时' },
  ],

  writeChars: ['毛', '膏', '脏', '歉', '扔', '鼓', '励', '拒'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa',
      items: [
        { q: '李进开始为什么不想带毛巾、牙膏和牙刷？后来为什么又带了？', hint: '因为宾馆有免费提供的；后来王静说要保护环境，从身边小事做起。' },
        { q: '王静为什么建议李进坐地铁去机场？', hint: '那个时间堵车严重；坐地铁既省油钱又不污染空气。' },
        { q: '经理希望小王做什么？店里哪些地方需要打扫？', hint: '打扫卫生间，还有桌子下面的空饮料瓶子和纸盒子。' },
        { q: '明天晚上孙月的公司会做什么？孙月为什么很高兴？', hint: '关灯停电参加“地球一小时”；因为不用加班了。' },
        { q: '“地球一小时”是个什么活动？这个活动的目的是什么？', hint: '一小时关灯；提醒人们节约用电，引起人们对气候变暖问题的关注。' },
        { q: '塑料袋有什么好处？有什么坏处？怎样解决？', hint: '方便；大量使用造成污染；节约使用、自备购物袋、甚至拒绝使用。' },
        { q: '我们需要注意哪些事情来保护地球环境？', hint: '夏天空调温度调高、出门关空调和电脑；少开车多乘地铁公交；把垃圾丢进垃圾桶。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: trao đổi về môi trường quanh bạn', hint: '你身边的环境污染情况怎么样？你认为环境污染的主要问题有哪些？你经常使用一次性饭盒吗？' },
        { q: 'Theo nhóm: nói những việc nhỏ bạn làm để bảo vệ môi trường, dùng ít nhất 4 cấu trúc', hint: '够；以；既然；于是；什么的；节约用电；降低空气污染；减少数量。' },
      ],
    },
  ],

  sentences: [
    { parts: ['不用', '拿', '这些', '宾馆', '都', '会', '免费', '提供', '的'], pinyin: 'Búyòng ná zhèxiē, bīnguǎn dōu huì miǎnfèi tígōng de.', vi: 'Không cần mang, khách sạn cung cấp miễn phí.' },
    { parts: ['我', '一定', '以', '最', '快', '的', '速度', '完成'], pinyin: 'Wǒ yídìng yǐ zuì kuài de sùdù wánchéng.', vi: 'Tôi nhất định hoàn thành với tốc độ nhanh nhất.' },
    { parts: ['既然', '公司', '会', '关', '灯', '停', '电', '我们', '肯定', '不用', '加班'], pinyin: 'Jìrán gōngsī huì guān dēng tíng diàn, wǒmen kěndìng búyòng jiā bān.', vi: 'Đã công ty tắt đèn cắt điện thì chắc không phải tăng ca.' },
    { parts: ['于是', '一些', '国家', '规定', '超市', '不能', '提供', '免费', '塑料袋'], pinyin: 'Yúshì yìxiē guójiā guīdìng chāoshì bù néng tígōng miǎnfèi sùliàodài.', vi: 'Thế là một số nước quy định siêu thị không phát túi nilông miễn phí.' },
    { parts: ['地球', '是', '我们', '共同', '的', '家'], pinyin: 'Dìqiú shì wǒmen gòngtóng de jiā.', vi: 'Trái Đất là ngôi nhà chung của chúng ta.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 拒绝 · B 鼓励 · C 得意 · D 省 · E 重 (zhòng). Gõ chữ cái A–E.',
      items: [
        { prompt: '为了（ ）大家少抽烟，人们将每年的4月7日定为“世界无烟日”。', answer: 'B', gloss: '鼓励' }, { prompt: '有的人总是不好意思（ ）朋友的要求，害怕这样会影响两个人的感情。', answer: 'A', gloss: '拒绝' },
        { prompt: '按照规定，您只能免费带20公斤的行李，超（ ）的部分每公斤加收全部票价的1.5%。', answer: 'E', gloss: '重' }, { prompt: '不要因一时的成功而（ ），也不要因一时的失败而伤心，因为那些都已经过去，重要的是怎样过好将来的生活。', answer: 'C', gloss: '得意' },
        { prompt: '山东（ ）烟台市是中国著名的“苹果之都”。由于气候等自然条件较好，那儿的苹果个儿大，味道香甜，颜色也漂亮。', answer: 'D', gloss: '省' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 扔 · B 丢 · C 行 · D 出差 · E 抱歉. Gõ chữ cái A–E.',
      items: [
        { prompt: '打扰一下，请问李老师在吗？ 他（ ）了。你找他有事吗？', answer: 'D', gloss: '出差' }, { prompt: '喂，你还在逛街吗？我的钥匙（ ）了，进不了门，你快回来吧。 好，我马上就回去。', answer: 'B', gloss: '丢' },
        { prompt: '实在（ ），我来晚了。今天路上有点儿堵。 没关系，请坐。你喝果汁还是咖啡？', answer: 'E', gloss: '抱歉' }, { prompt: '垃圾桶又满了，你去（ ）一下垃圾吧。 好的，看完这个节目我就去。', answer: 'A', gloss: '扔' },
        { prompt: '马上就要毕业了，你准备在学校附近租房子吗？ 学校附近房子太贵。离学校远点儿没关系，只要离地铁或者公交车站近就（ ）。', answer: 'C', gloss: '行' },
      ],
    },
    {
      title: 'Giáo trình 比一比 · 于是 / 因此 (gõ từ)',
      hint: 'Gõ 于是 hoặc 因此 theo đáp án sách (câu 3 chấp nhận cả hai).',
      items: [
        { prompt: '习惯是不容易改变的，（ ），在孩子小的时候，父母要帮他们养成好的生活、学习习惯。', answer: '因此', gloss: '因此' },
        { prompt: '不少人刚开始运动时，会感到十分无聊，（ ）很快就放弃了。', answer: '于是', accept: ['因此'], gloss: '于是 / 因此' },
        { prompt: '那是1994年的冬天，那场雪下得特别大。大家都很激动，（ ）都跑到外面去玩儿雪了。', answer: '于是', gloss: '于是' },
        { prompt: '生活往往不会按照我们的计划来进行。（ ），光有计划还不行，还需要我们能及时地对原来的计划做出改变。', answer: '因此', gloss: '因此' },
      ],
    },
    {
      title: 'Giáo trình 扩展 · 度 (gõ từ)',
      hint: 'Gõ 速度, 温度 hoặc 态度.',
      items: [
        { prompt: '这个月底，我和丈夫准备开车去长白山，那边（ ）比较低，所以要提前准备几件厚一些的衣服。', answer: '温度', gloss: '温度' },
        { prompt: '小张，你有什么意见？ 按照现在的（ ），想要在规定时间内完成计划，好像有点儿困难。', answer: '速度', gloss: '速度' },
        { prompt: '幽默是一种积极的生活（ ），不但可以减轻你工作上的压力，还可以拉近人与人之间的距离。', answer: '态度', gloss: '态度' },
      ],
    },
  ],
}
