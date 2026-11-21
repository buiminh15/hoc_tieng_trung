import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 4 (Hạ), Bài 18: 科技与世界 (sách trang 108–120).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách, dịch hội thoại do app tự thêm.
 * Nghe: 18-1…18-5. Bài tập: 比一比/练习 2/扩展, đáp án theo "HSK4-2-BH" trang 8–9.
 */

const A = '/audio/hsk-std4/'

export const hskStd4Lesson18: Lesson = {
  id: 18,
  title: 'Khoa học công nghệ và thế giới',
  hanzi: '科技与世界',
  pinyin: 'Kējì yǔ shìjiè',
  vi: 'Khoa học công nghệ và thế giới',
  intro: 'Nói về sách khoa học, máy tính, điện thoại và giấc mơ. Học 是否, 受不了, 接着 (so với 然后), 除此以外, 把……叫作……',

  dialogue: [
    { who: 'A', name: '孙月', hanzi: '上次女儿问我飞机是怎么起飞和降落的，真不知道该怎么回答她，她现在总是有各种各样的“为什么”。', pinyin: 'Shàng cì nǚ\'ér wèn wǒ fēijī shì zěnme qǐfēi hé jiàngluò de, zhēn bù zhīdào gāi zěnme huídá tā, tā xiànzài zǒngshì yǒu gè zhǒng gè yàng de "wèi shénme".', vi: 'Lần trước con gái hỏi tôi máy bay cất và hạ cánh thế nào, thật không biết trả lời ra sao, giờ con luôn có đủ loại "tại sao".', scene: 'Bài 1 · Vương Tĩnh giới thiệu cho Tôn Nguyệt một cuốn sách' },
    { who: 'B', name: '王静', hanzi: '孩子眼中的世界是美丽和奇特的。有一本书叫《新十万个为什么》，现在卖得非常火。书里的内容都是儿童想知道的科学知识，相信你女儿一定喜欢读。', pinyin: 'Háizi yǎnzhōng de shìjiè shì měilì hé qítè de. Yǒu yì běn shū jiào "Xīn Shíwàn Ge Wèi Shénme", xiànzài mài de fēicháng huǒ. Shū li de nèiróng dōu shì értóng xiǎng zhīdào de kēxué zhīshi, xiāngxìn nǐ nǚ\'ér yídìng xǐhuan dú.', vi: 'Thế giới trong mắt trẻ đẹp và kỳ lạ. Có cuốn "Mười vạn câu hỏi vì sao mới", giờ bán rất chạy. Nội dung đều là kiến thức khoa học trẻ muốn biết, tin con bạn chắc thích đọc.' },
    { who: 'A', name: '孙月', hanzi: '难道它和我们小时候看的《十万个为什么》不一样吗？作者是谁啊？', pinyin: 'Nándào tā hé wǒmen xiǎo shíhou kàn de "Shíwàn Ge Wèi Shénme" bù yíyàng ma? Zuòzhě shì shéi a?', vi: 'Chẳng lẽ nó khác "Mười vạn câu hỏi vì sao" hồi nhỏ ta đọc? Tác giả là ai?' },
    { who: 'B', name: '王静', hanzi: '作者的名字我没记住。《新十万个为什么》的内容更新，介绍了各种科学知识，包括地球、动物、植物、交通、科学技术、社会和文化等很多方面。', pinyin: 'Zuòzhě de míngzi wǒ méi jìzhù. "Xīn Shíwàn Ge Wèi Shénme" de nèiróng gèng xīn, jièshàole gè zhǒng kēxué zhīshi, bāokuò dìqiú, dòngwù, zhíwù, jiāotōng, kēxué jìshù, shèhuì hé wénhuà děng hěn duō fāngmiàn.', vi: 'Tên tác giả tôi không nhớ. "Mười vạn câu hỏi vì sao mới" nội dung mới hơn, giới thiệu đủ kiến thức khoa học gồm Trái Đất, động vật, thực vật, giao thông, khoa học kỹ thuật, xã hội và văn hóa.' },
    { who: 'A', name: '孙月', hanzi: '太好了！不过她这么小，我不知道她是否能读懂。', pinyin: 'Tài hǎo le! Búguò tā zhème xiǎo, wǒ bù zhīdào tā shìfǒu néng dúdǒng.', vi: 'Tuyệt quá! Nhưng con còn nhỏ, tôi không biết con có đọc hiểu không.' },
    { who: 'B', name: '王静', hanzi: '放心吧，这本书的语言简单易懂，一定能增长孩子的科学知识。', pinyin: 'Fàngxīn ba, zhè běn shū de yǔyán jiǎndān yì dǒng, yídìng néng zēngzhǎng háizi de kēxué zhīshi.', vi: 'Yên tâm, ngôn ngữ cuốn sách đơn giản dễ hiểu, nhất định tăng kiến thức khoa học cho trẻ.' },
    { who: 'A', name: '李老师', hanzi: '现在的大学生一遇到不明白的问题，可以马上在网上查找答案，几秒钟就把问题解决了，这比我们上学的时候方便多了。', pinyin: 'Xiànzài de dàxuéshēng yí yùdào bù míngbai de wèntí, kěyǐ mǎshàng zài wǎngshang cházhǎo dá\'àn, jǐ miǎo zhōng jiù bǎ wèntí jiějué le, zhè bǐ wǒmen shàng xué de shíhou fāngbiàn duō le.', vi: 'Sinh viên giờ gặp vấn đề không hiểu có thể tra đáp án trên mạng ngay, vài giây là giải quyết, tiện hơn nhiều so với lúc chúng ta đi học.', scene: 'Bài 2 · Thầy Lý và cô Cao nói về sự phát triển của máy tính và Internet' },
    { who: 'B', name: '高老师', hanzi: '现在的人们，尤其是大学生开始普遍使用电脑，他们的生活已经离不开电脑。据调查，70%的人遇到问题时，首先想到的就是上网找答案。', pinyin: 'Xiànzài de rénmen, yóuqí shì dàxuéshēng kāishǐ pǔbiàn shǐyòng diànnǎo, tāmen de shēnghuó yǐjīng lí bu kāi diànnǎo. Jù diàochá, bǎi fēn zhī qīshí de rén yùdào wèntí shí, shǒuxiān xiǎngdào de jiù shì shàng wǎng zhǎo dá\'àn.', vi: 'Người ngày nay, nhất là sinh viên bắt đầu dùng máy tính phổ biến, cuộc sống họ không thể thiếu máy tính. Theo khảo sát, 70% người gặp vấn đề thì điều đầu tiên nghĩ đến là lên mạng tìm đáp án.' },
    { who: 'A', name: '李老师', hanzi: '电脑和互联网技术的发展使学生们的学习方式发生了很多变化，不过天天对着电脑看，眼睛实在受不了。', pinyin: 'Diànnǎo hé hùliánwǎng jìshù de fāzhǎn shǐ xuéshengmen de xuéxí fāngshì fāshēngle hěn duō biànhuà, búguò tiāntiān duìzhe diànnǎo kàn, yǎnjing shízài shòubuliǎo.', vi: 'Sự phát triển máy tính và Internet khiến cách học của sinh viên thay đổi nhiều, nhưng ngày nào cũng nhìn máy tính thì mắt thật chịu không nổi.' },
    { who: 'B', name: '高老师', hanzi: '不仅是学习方式，而且连生活方式也发生了很大改变。现在越来越多的学生喜欢在网上写日记，他们说这样可以让朋友及时了解自己的生活。', pinyin: 'Bùjǐn shì xuéxí fāngshì, érqiě lián shēnghuó fāngshì yě fāshēngle hěn dà gǎibiàn. Xiànzài yuè lái yuè duō de xuésheng xǐhuan zài wǎngshang xiě rìjì, tāmen shuō zhèyàng kěyǐ ràng péngyou jíshí liǎojiě zìjǐ de shēnghuó.', vi: 'Không chỉ cách học mà cả cách sống cũng đổi lớn. Giờ ngày càng nhiều sinh viên thích viết nhật ký trên mạng, họ nói vậy bạn bè kịp thời biết cuộc sống của mình.' },
    { who: 'A', name: '李老师', hanzi: '这个办法不错，既能方便大家的交流，还能节约用纸，保护环境。但是如果别人都能看到我的日记的话，多不安全啊！', pinyin: 'Zhège bànfǎ búcuò, jì néng fāngbiàn dàjiā de jiāoliú, hái néng jiéyuē yòng zhǐ, bǎohù huánjìng. Dànshì rúguǒ biérén dōu néng kàndào wǒ de rìjì de huà, duō bù ānquán a!', vi: 'Cách này hay, vừa tiện giao lưu vừa tiết kiệm giấy, bảo vệ môi trường. Nhưng nếu ai cũng xem được nhật ký của tôi thì thật không an toàn!' },
    { who: 'B', name: '高老师', hanzi: '放心吧，可以给网上的日记加密码，那样只有得到了允许，别人才能看到。', pinyin: 'Fàngxīn ba, kěyǐ gěi wǎngshang de rìjì jiā mìmǎ, nàyàng zhǐyǒu dédàole yǔnxǔ, biérén cái néng kàndào.', vi: 'Yên tâm, có thể đặt mật mã cho nhật ký trên mạng, như vậy chỉ khi được cho phép người khác mới xem được.' },
    { who: 'A', name: '王静', hanzi: '我昨天晚上做了一个特别奇怪的梦，梦到自己正在一座桥上走，走着走着，突然开过来一辆车，非常危险，接着又梦见我跳到车上，跟警察一起抓住了一个坏人。', pinyin: 'Wǒ zuótiān wǎnshang zuòle yí ge tèbié qíguài de mèng, mèngdào zìjǐ zhèngzài yí zuò qiáo shang zǒu, zǒuzhe zǒuzhe, tūrán kāi guòlai yí liàng chē, fēicháng wēixiǎn, jiēzhe yòu mèngjiàn wǒ tiàodào chē shang, gēn jǐngchá yìqǐ zhuāzhùle yí ge huàirén.', vi: 'Tối qua tôi mơ một giấc rất lạ, mơ mình đang đi trên cầu, đi đi bỗng một chiếc xe lao tới, rất nguy hiểm, rồi lại mơ mình nhảy lên xe cùng cảnh sát bắt một kẻ xấu.', scene: 'Bài 3 · Vương Tĩnh và Tôn Nguyệt nói về giấc mơ' },
    { who: 'B', name: '孙月', hanzi: '奇怪，你怎么总能记住自己做了什么梦？我好像从来没做过梦。', pinyin: 'Qíguài, nǐ zěnme zǒng néng jìzhù zìjǐ zuòle shénme mèng? Wǒ hǎoxiàng cónglái méi zuòguo mèng.', vi: 'Lạ thật, sao bạn luôn nhớ được mình mơ gì? Tôi hình như chưa từng mơ.' },
    { who: 'A', name: '王静', hanzi: '每个人都会做梦，区别只是有多有少。有的人睡醒之后还记得梦里的事情，有的人却记不清楚了。你之所以觉得从来没做过梦，只不过是忘记了。', pinyin: 'Měi ge rén dōu huì zuò mèng, qūbié zhǐshì yǒu duō yǒu shǎo. Yǒude rén shuìxǐng zhīhòu hái jìde mèng li de shìqing, yǒude rén què jì bu qīngchu le. Nǐ zhīsuǒyǐ juéde cónglái méi zuòguo mèng, zhǐ búguò shì wàngjì le.', vi: 'Ai cũng mơ, khác nhau chỉ là nhiều hay ít. Có người tỉnh dậy vẫn nhớ chuyện trong mơ, có người lại không nhớ rõ. Bạn thấy chưa từng mơ chỉ là quên thôi.' },
    { who: 'B', name: '孙月', hanzi: '你说的有道理，我一般都是一觉睡到天亮。很多人认为做梦是上天要告诉他们将来会发生的一些事情，可能上天不想让我知道吧。', pinyin: 'Nǐ shuō de yǒu dàolǐ, wǒ yìbān dōu shì yí jiào shuìdào tiānliàng. Hěn duō rén rènwéi zuò mèng shì shàngtiān yào gàosu tāmen jiānglái huì fāshēng de yìxiē shìqing, kěnéng shàngtiān bù xiǎng ràng wǒ zhīdào ba.', vi: 'Bạn nói có lý, tôi thường ngủ một mạch đến sáng. Nhiều người cho rằng mơ là trời báo trước chuyện sẽ xảy ra, có lẽ trời không muốn tôi biết.' },
    { who: 'A', name: '王静', hanzi: '一般晚上睡觉时，身体感觉到什么，人就容易梦到什么内容。记得有一次，我晚饭吃得太咸，那天晚上就梦见自己到处找商店买矿泉水。', pinyin: 'Yìbān wǎnshang shuì jiào shí, shēntǐ gǎnjuédào shénme, rén jiù róngyì mèngdào shénme nèiróng. Jìde yǒu yí cì, wǒ wǎnfàn chī de tài xián, nà tiān wǎnshang jiù mèngjiàn zìjǐ dàochù zhǎo shāngdiàn mǎi kuàngquánshuǐ.', vi: 'Thường khi ngủ cơ thể cảm thấy gì thì dễ mơ thấy nội dung đó. Nhớ có lần tôi ăn tối quá mặn, đêm đó mơ mình khắp nơi tìm cửa hàng mua nước suối.' },
    { who: 'B', name: '孙月', hanzi: '很多人都试着对梦进行解释，有些人甚至专门写过这方面的书，可惜到现在仍然没有一个科学的说法。', pinyin: 'Hěn duō rén dōu shìzhe duì mèng jìnxíng jiěshì, yǒuxiē rén shènzhì zhuānmén xiěguo zhè fāngmiàn de shū, kěxī dào xiànzài réngrán méiyǒu yí ge kēxué de shuōfǎ.', vi: 'Nhiều người thử giải thích giấc mơ, có người còn viết sách chuyên về mặt này, tiếc là đến giờ vẫn chưa có cách nói khoa học.' },
    { who: 'A', name: '短文', hanzi: '现在手机不但价格降低了，而且作用也越来越大，打电话、发短信已经成了人们普遍使用的联系方法。除此以外，你还可以用它来听音乐、看电影、阅读、玩儿游戏、付款购物等，这大大方便了人们的生活。举一个例子，迷路时，只要用手机地图查一下地址，马上就能知道怎么去那个地点。现在的手机更像是一部可以拿在手中的电脑，现代人的生活已经越来越离不开手机了。', pinyin: 'Xiànzài shǒujī búdàn jiàgé jiàngdī le, érqiě zuòyòng yě yuè lái yuè dà, dǎ diànhuà, fā duǎnxìn yǐjīng chéngle rénmen pǔbiàn shǐyòng de liánxì fāngfǎ. Chú cǐ yǐwài, nǐ hái kěyǐ yòng tā lái tīng yīnyuè, kàn diànyǐng, yuèdú, wánr yóuxì, fù kuǎn gòuwù děng, zhè dàdà fāngbiànle rénmen de shēnghuó. Jǔ yí ge lìzi, mí lù shí, zhǐyào yòng shǒujī dìtú chá yíxià dìzhǐ, mǎshàng jiù néng zhīdào zěnme qù nàge dìdiǎn. Xiànzài de shǒujī gèng xiàng shì yí bù kěyǐ ná zài shǒu zhōng de diànnǎo, xiàndài rén de shēnghuó yǐjīng yuè lái yuè lí bu kāi shǒujī le.', vi: 'Điện thoại nay không chỉ giá giảm mà tác dụng cũng ngày càng lớn, gọi điện, nhắn tin đã thành cách liên lạc phổ biến. Ngoài ra còn nghe nhạc, xem phim, đọc, chơi game, thanh toán mua sắm… rất tiện cho cuộc sống. Ví dụ khi lạc đường chỉ cần tra địa chỉ trên bản đồ điện thoại là biết đường đến đó ngay. Điện thoại giờ giống một chiếc máy tính cầm tay, cuộc sống người hiện đại ngày càng không rời điện thoại.', scene: 'Bài 4 · Điện thoại di động' },
    { who: 'A', name: '短文', hanzi: '21世纪，我们的生活发生了巨大变化。几千公里以外的国家，以前坐船需要几个月，现在乘坐飞机不过十几个小时。原来寄信需要好几天，现在连邮局都不用去，只要在家里上网发个电子邮件，用不了一分钟，远处的朋友就能收到，比写信封用的时间都短。以前外地的新闻要几天后才能知道，现在只要打开网站，任何信息都可以在第一时间获得。现代科学技术的发展让世界变得越来越小，所以现在人们都把地球叫作“地球村”。', pinyin: 'Èrshíyī shìjì, wǒmen de shēnghuó fāshēngle jùdà biànhuà. Jǐ qiān gōnglǐ yǐwài de guójiā, yǐqián zuò chuán xūyào jǐ ge yuè, xiànzài chéngzuò fēijī búguò shí jǐ ge xiǎoshí. Yuánlái jì xìn xūyào hǎo jǐ tiān, xiànzài lián yóujú dōu bú yòng qù, zhǐyào zài jiā li shàng wǎng fā ge diànzǐ yóujiàn, yòng bu liǎo yì fēnzhōng, yuǎnchù de péngyou jiù néng shōudào, bǐ xiě xìnfēng yòng de shíjiān dōu duǎn. Yǐqián wàidì de xīnwén yào jǐ tiān hòu cái néng zhīdào, xiànzài zhǐyào dǎkāi wǎngzhàn, rènhé xìnxī dōu kěyǐ zài dì-yī shíjiān huòdé. Xiàndài kēxué jìshù de fāzhǎn ràng shìjiè biàn de yuè lái yuè xiǎo, suǒyǐ xiànzài rénmen dōu bǎ dìqiú jiàozuò "dìqiú cūn".', vi: 'Thế kỷ 21 cuộc sống chúng ta thay đổi to lớn. Nước cách hàng nghìn km trước đi thuyền mấy tháng, nay đi máy bay chỉ mười mấy tiếng. Trước gửi thư mất mấy ngày, nay không cần ra bưu điện, ở nhà gửi email chưa đến một phút bạn xa đã nhận, còn ngắn hơn lúc viết phong bì. Trước tin tức nơi khác phải mấy ngày mới biết, nay mở trang web là có mọi thông tin ngay lập tức. Khoa học công nghệ làm thế giới ngày càng nhỏ, nên người ta gọi Trái Đất là "ngôi làng toàn cầu".', scene: 'Bài 5 · Làng toàn cầu' },
  ],
  dialogueClips: [
    { label: '18-1 · Vương Tĩnh và Tôn Nguyệt', src: A + 'l18-1.mp3' },
    { label: '18-2 · Thầy Lý và cô Cao', src: A + 'l18-2.mp3' },
    { label: '18-3 · Giấc mơ', src: A + 'l18-3.mp3' },
    { label: '18-4 · Điện thoại di động', src: A + 'l18-4.mp3' },
    { label: '18-5 · Làng toàn cầu', src: A + 'l18-5.mp3' },
  ],
  dialogueTip: '<b>是否</b>: có… hay không (văn viết). <b>受不了</b>: chịu không nổi. <b>接着</b>: ngay sau đó. <b>除此以外</b>: ngoài ra. <b>把……叫作……</b>: gọi… là….',
  slowSay: '科技与世界',

  vocab: [
    { hanzi: '降落', pinyin: 'jiàngluò', pos: 'động từ', meaning: 'đáp xuống, hạ cánh', han_viet: 'giáng lạc' },
    { hanzi: '火', pinyin: 'huǒ', pos: 'tính từ', meaning: 'chạy, đắt hàng', han_viet: 'hỏa' },
    { hanzi: '作者', pinyin: 'zuòzhě', pos: 'danh từ', meaning: 'tác giả', han_viet: 'tác giả' },
    { hanzi: '交通', pinyin: 'jiāotōng', pos: 'danh từ', meaning: 'giao thông', han_viet: 'giao thông' },
    { hanzi: '技术', pinyin: 'jìshù', pos: 'danh từ', meaning: 'kỹ thuật, công nghệ', han_viet: 'kỹ thuật' },
    { hanzi: '是否', pinyin: 'shìfǒu', pos: 'phó từ', meaning: 'có hay không', han_viet: 'thị phủ' },
    { hanzi: '秒', pinyin: 'miǎo', pos: 'lượng từ', meaning: 'giây', han_viet: 'miểu' },
    { hanzi: '方式', pinyin: 'fāngshì', pos: 'danh từ', meaning: 'phương thức, cách thức', han_viet: 'phương thức' },
    { hanzi: '受不了', pinyin: 'shòubuliǎo', pos: 'cụm', meaning: 'chịu không nổi', han_viet: 'thụ bất liễu' },
    { hanzi: '日记', pinyin: 'rìjì', pos: 'danh từ', meaning: 'nhật ký', han_viet: 'nhật ký' },
    { hanzi: '安全', pinyin: 'ānquán', pos: 'tính từ', meaning: 'an toàn', han_viet: 'an toàn' },
    { hanzi: '密码', pinyin: 'mìmǎ', pos: 'danh từ', meaning: 'mật mã', han_viet: 'mật mã' },
    { hanzi: '允许', pinyin: 'yǔnxǔ', pos: 'động từ', meaning: 'cho phép', han_viet: 'duẫn hứa' },
    { hanzi: '座', pinyin: 'zuò', pos: 'lượng từ', meaning: 'tòa, hòn, cây (cầu, núi…)', han_viet: 'tọa' },
    { hanzi: '桥', pinyin: 'qiáo', pos: 'danh từ', meaning: 'cầu', han_viet: 'kiều' },
    { hanzi: '危险', pinyin: 'wēixiǎn', pos: 'tính từ', meaning: 'nguy hiểm', han_viet: 'nguy hiểm' },
    { hanzi: '接着', pinyin: 'jiēzhe', pos: 'phó từ', meaning: 'ngay sau đó', han_viet: 'tiếp trước' },
    { hanzi: '警察', pinyin: 'jǐngchá', pos: 'danh từ', meaning: 'cảnh sát', han_viet: 'cảnh sát' },
    { hanzi: '抓', pinyin: 'zhuā', pos: 'động từ', meaning: 'bắt, túm', han_viet: 'trảo' },
    { hanzi: '咸', pinyin: 'xián', pos: 'tính từ', meaning: 'mặn', han_viet: 'hàm' },
    { hanzi: '矿泉水', pinyin: 'kuàngquánshuǐ', pos: 'danh từ', meaning: 'nước suối', han_viet: 'khoáng tuyền thủy' },
    { hanzi: '付款', pinyin: 'fù kuǎn', pos: 'động từ', meaning: 'trả tiền', han_viet: 'phó khoản' },
    { hanzi: '举', pinyin: 'jǔ', pos: 'động từ', meaning: 'nêu, đưa ra', han_viet: 'cử' },
    { hanzi: '迷路', pinyin: 'mí lù', pos: 'động từ', meaning: 'lạc đường', han_viet: 'mê lộ' },
    { hanzi: '地址', pinyin: 'dìzhǐ', pos: 'danh từ', meaning: 'địa chỉ', han_viet: 'địa chỉ' },
    { hanzi: '地点', pinyin: 'dìdiǎn', pos: 'danh từ', meaning: 'địa điểm, nơi', han_viet: 'địa điểm' },
    { hanzi: '世纪', pinyin: 'shìjì', pos: 'danh từ', meaning: 'thế kỷ', han_viet: 'thế kỷ' },
    { hanzi: '邮局', pinyin: 'yóujú', pos: 'danh từ', meaning: 'bưu điện', han_viet: 'bưu cục' },
    { hanzi: '收', pinyin: 'shōu', pos: 'động từ', meaning: 'nhận', han_viet: 'thu' },
    { hanzi: '信封', pinyin: 'xìnfēng', pos: 'danh từ', meaning: 'phong thư, bì thư', han_viet: 'tín phong' },
    { hanzi: '网站', pinyin: 'wǎngzhàn', pos: 'danh từ', meaning: 'trang web', han_viet: 'võng trạm' },
    { hanzi: '信息', pinyin: 'xìnxī', pos: 'danh từ', meaning: 'tin tức, thông tin', han_viet: 'tín tức' },
  ],

  sections: [
    {
      kind: 'examples', label: '是否 · 受不了', title: '是否 (có hay không) và 受不了 (chịu không nổi)',
      intro: '是否: phó từ "có hay không", thường dùng trong văn viết. 受不了: chịu không nổi (đau đớn, áp lực, thái độ, tính khí…), thường đặt trước danh từ hoặc cụm danh từ.',
      groups: [
        { label: '是否', items: [['不过她这么小，这本书我不知道她是否能读懂。', 'Búguò tā zhème xiǎo, zhè běn shū wǒ bù zhīdào tā shìfǒu néng dúdǒng.', 'Nhưng con còn nhỏ, tôi không biết con có đọc hiểu cuốn này không.'], ['有人认为有“夫妻相”的夫妻家庭生活幸福，实际上，婚姻是否幸福跟这个没有关系。', 'Yǒu rén rènwéi yǒu "fūqī xiàng" de fūqī jiātíng shēnghuó xìngfú, shíjìshang, hūnyīn shìfǒu xìngfú gēn zhège méiyǒu guānxi.', 'Có người cho rằng cặp có "tướng vợ chồng" thì hạnh phúc, thực ra hôn nhân có hạnh phúc hay không không liên quan.']] },
        { label: '受不了', items: [['我真的受不了你了，你到底还要逛多久？', 'Wǒ zhēn de shòubuliǎo nǐ le, nǐ dàodǐ hái yào guàng duōjiǔ?', 'Tôi thật chịu không nổi bạn, rốt cuộc còn đi dạo bao lâu?'], ['不过天天对着电脑看，眼睛实在受不了。', 'Búguò tiāntiān duìzhe diànnǎo kàn, yǎnjing shízài shòubuliǎo.', 'Nhưng ngày nào cũng nhìn máy tính thì mắt thật chịu không nổi.'], ['真受不了这样的老师！一个简单的动作让我们练二三十遍。', 'Zhēn shòubuliǎo zhèyàng de lǎoshī! Yí ge jiǎndān de dòngzuò ràng wǒmen liàn èr-sānshí biàn.', 'Thật chịu không nổi thầy như vậy! Một động tác đơn giản bắt luyện hai ba chục lần.']] },
      ],
    },
    {
      kind: 'examples', label: '接着', title: '接着 (ngay sau đó)',
      intro: '接着: phó từ, (về thời gian) nối tiếp ngay, chỉ tình huống khác xảy ra liền sau tình huống nêu trước.',
      groups: [{ label: 'Ví dụ', items: [['这本书的内容非常有趣，你看完以后先不要还，我接着看。', 'Zhè běn shū de nèiróng fēicháng yǒuqù, nǐ kànwán yǐhòu xiān búyào huán, wǒ jiēzhe kàn.', 'Nội dung cuốn sách rất thú vị, bạn đọc xong đừng trả vội, tôi đọc tiếp.'], ['我梦到自己正在桥上走，突然开过来一辆车，非常危险，接着又梦见我跳到车上，跟警察一起抓住了一个坏人。', 'Wǒ mèngdào zìjǐ zhèngzài qiáo shang zǒu, tūrán kāi guòlai yí liàng chē, fēicháng wēixiǎn, jiēzhe yòu mèngjiàn wǒ tiàodào chē shang, gēn jǐngchá yìqǐ zhuāzhùle yí ge huàirén.', 'Tôi mơ đang đi trên cầu, bỗng xe lao tới rất nguy hiểm, rồi lại mơ nhảy lên xe cùng cảnh sát bắt kẻ xấu.']] }],
    },
    {
      kind: 'examples', label: '接着 – 然后', title: 'So sánh 接着 và 然后',
      intro: 'Giống nhau: đều chỉ việc khác xảy ra ngay sau việc nêu trước. Khác nhau: 接着 là phó từ, nhấn mạnh nối tiếp ngay về thời gian; 然后 là liên từ, thường dùng trong "先……然后(再)……". Chủ ngữ của 接着 có thể giống hoặc khác chủ ngữ trước; của 然后 thường giống.',
      groups: [{ label: 'Ví dụ', items: [['他毕业后在老家工作了一年，接着/然后又考上了北京大学，读研究生。', 'Tā bì yè hòu zài lǎojiā gōngzuòle yì nián, jiēzhe/ránhòu yòu kǎoshàngle Běijīng Dàxué, dú yánjiūshēng.', 'Anh tốt nghiệp làm ở quê một năm, rồi lại thi đỗ Đại học Bắc Kinh học cao học.'], ['这本书你看完了我接着看吧。', 'Zhè běn shū nǐ kànwánle wǒ jiēzhe kàn ba.', 'Sách này bạn đọc xong tôi đọc tiếp.'], ['遇到不认识的词语，我会马上查词典，然后写在本子上。', 'Yùdào bú rènshi de cíyǔ, wǒ huì mǎshàng chá cídiǎn, ránhòu xiě zài běnzi shang.', 'Gặp từ chưa biết tôi tra từ điển ngay rồi ghi vào vở.']] }],
    },
    {
      kind: 'examples', label: '除此以外 · 把…叫作…', title: '除此以外 và 把……叫作……',
      intro: '除此以外 = 除了这个以外 (ngoài điều này ra), dùng trong văn viết. 把……叫作……: phần sau là tên gọi của phần trước; sau 把 thường là danh từ, đại từ hoặc cụm danh từ.',
      groups: [
        { label: '除此以外', items: [['打电话、发短信已经成了人们普遍使用的联系方法。除此以外，你还可以用它来听音乐、看电影、阅读。', 'Dǎ diànhuà, fā duǎnxìn yǐjīng chéngle rénmen pǔbiàn shǐyòng de liánxì fāngfǎ. Chú cǐ yǐwài, nǐ hái kěyǐ yòng tā lái tīng yīnyuè, kàn diànyǐng, yuèdú.', 'Gọi điện, nhắn tin là cách liên lạc phổ biến. Ngoài ra còn nghe nhạc, xem phim, đọc.'], ['他和弟弟同一天出生，兄弟俩长得很像，但除此以外几乎再找不到其他共同点。', 'Tā hé dìdi tóng yì tiān chūshēng, xiōngdì liǎ zhǎng de hěn xiàng, dàn chú cǐ yǐwài jīhū zài zhǎo bu dào qítā gòngtóngdiǎn.', 'Anh và em cùng ngày sinh, giống nhau, nhưng ngoài ra hầu như không có điểm chung.']] },
        { label: '把……叫作……', items: [['现代科学技术的发展让世界变得越来越小，所以现在人们都把地球叫作“地球村”。', 'Xiàndài kēxué jìshù de fāzhǎn ràng shìjiè biàn de yuè lái yuè xiǎo, suǒyǐ xiànzài rénmen dōu bǎ dìqiú jiàozuò "dìqiú cūn".', 'Khoa học công nghệ làm thế giới ngày càng nhỏ nên người ta gọi Trái Đất là "ngôi làng toàn cầu".'], ['黄河是中国第二大河，人们把它叫作“母亲河”。', 'Huáng Hé shì Zhōngguó dì-èr dà hé, rénmen bǎ tā jiàozuò "mǔqīn hé".', 'Hoàng Hà là sông lớn thứ hai Trung Quốc, người ta gọi là "sông Mẹ".'], ['中国人搬了新家后，邀请亲戚朋友到家里吃顿饭，人们把这个习惯叫作“暖房”。', 'Zhōngguó rén bānle xīn jiā hòu, yāoqǐng qīnqi péngyou dào jiā li chī dùn fàn, rénmen bǎ zhège xíguàn jiàozuò "nuǎnfáng".', 'Người Trung Quốc chuyển nhà mới mời họ hàng bạn bè ăn cơm, thói quen này gọi là "ấm nhà".']] },
      ],
    },
    {
      kind: 'examples', label: 'Từ cùng chữ: 点', title: 'Những từ có chữ giống nhau: 点',
      intro: '地点, 重点, 特点, 优点, 缺点.',
      groups: [{ label: 'Ví dụ', items: [['教育学生时，要根据学生的特点选择不同的方法。', 'Jiàoyù xuésheng shí, yào gēnjù xuésheng de tèdiǎn xuǎnzé bù tóng de fāngfǎ.', 'Khi dạy học sinh phải chọn phương pháp khác nhau theo đặc điểm.'], ['他的优点是有礼貌、诚实、能吃苦，缺点是太马虎、太粗心了，不适合我们的工作。', 'Tā de yōudiǎn shì yǒu lǐmào, chéngshí, néng chī kǔ, quēdiǎn shì tài mǎhu, tài cūxīn le, bú shìhé wǒmen de gōngzuò.', 'Ưu điểm của anh là lễ phép, thành thật, chịu khổ; khuyết điểm là cẩu thả, bất cẩn, không hợp công việc chúng tôi.']] }],
    },
  ],

  notes: [
    { title: '是否', body: 'Phó từ "có hay không", dùng trong văn viết: 我不知道她是否能读懂。', say: '我不知道她是否能读懂' },
    { title: '受不了', body: 'Chịu không nổi (đau, áp lực, thái độ, tính khí…), thường đặt trước danh từ: 眼睛实在受不了。', say: '眼睛实在受不了' },
    { title: '接着 / 然后', body: '接着: phó từ, nối tiếp ngay (chủ ngữ có thể khác). 然后: liên từ, hay dùng trong 先……然后(再)……, chủ ngữ thường giống.', say: '接着又梦见我跳到车上' },
    { title: '除此以外', body: 'Ngoài điều này ra (chỉ nội dung vừa nêu), dùng trong văn viết.', say: '除此以外，你还可以用它来听音乐' },
    { title: '把……叫作……', body: 'Cấu trúc đặt tên: 人们都把地球叫作“地球村”。', say: '人们都把地球叫作地球村' },
    { title: 'Văn hóa: 地球村', body: 'Khoa học công nghệ khiến thế giới ngày càng "nhỏ": thư điện tử, trang web, điện thoại di động giúp liên lạc và nhận tin ngay lập tức, nên Trái Đất được gọi là "ngôi làng toàn cầu".', say: '地球村' },
  ],

  writeChars: ['降', '落', '技', '术', '密', '桥', '危', '险'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa',
      items: [
        { q: '王静给孙月推荐了一本什么书？为什么给她推荐这本书？', hint: '《新十万个为什么》；内容是儿童想知道的科学知识。' },
        { q: '孙月担心什么？王静觉得这本书怎么样？', hint: '担心女儿是否能读懂；语言简单易懂，一定能增长科学知识。' },
        { q: '现在的大学生遇到不明白的问题怎么办？调查结果是什么？', hint: '上网查答案；70%的人首先想到上网找答案。' },
        { q: '网上写日记有哪些好处？', hint: '方便交流、节约用纸保护环境、让朋友及时了解自己的生活。' },
        { q: '王静昨天晚上做了个什么样的梦？会有人从来没做过梦吗？', hint: '梦到在桥上走，车开来，接着跳上车和警察抓坏人；每个人都做梦，只是忘了。' },
        { q: '现在的手机有哪些作用？为什么叫“地球村”？', hint: '打电话、发短信、听音乐、看电影、付款购物、查地图；科技使世界越来越小。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: hỏi nhau về cách dùng điện thoại', hint: '你一般用手机做什么？每个月手机话费多少？选择手机最看重什么？最喜欢的其他功能是什么？' },
      ],
    },
  ],

  sentences: [
    { parts: ['我', '不', '知道', '她', '是否', '能', '读', '懂'], pinyin: 'Wǒ bù zhīdào tā shìfǒu néng dúdǒng.', vi: 'Tôi không biết con có đọc hiểu không.' },
    { parts: ['天天', '对着', '电脑', '看', '眼睛', '实在', '受不了'], pinyin: 'Tiāntiān duìzhe diànnǎo kàn, yǎnjing shízài shòubuliǎo.', vi: 'Ngày nào cũng nhìn máy tính mắt thật chịu không nổi.' },
    { parts: ['除此', '以外', '你', '还', '可以', '用', '它', '听', '音乐'], pinyin: 'Chú cǐ yǐwài, nǐ hái kěyǐ yòng tā tīng yīnyuè.', vi: 'Ngoài ra bạn còn dùng nó nghe nhạc.' },
    { parts: ['人们', '都', '把', '地球', '叫作', '地球村'], pinyin: 'Rénmen dōu bǎ dìqiú jiàozuò "dìqiú cūn".', vi: 'Người ta gọi Trái Đất là "ngôi làng toàn cầu".' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 座 · B 安全 · C 危险 · D 收 · E 降落. Gõ chữ cái A–E.',
      items: [
        { prompt: '北京有一（ ）山，叫香山，非常有名。每到秋天，满山都是红叶，风景特别漂亮。', answer: 'A', gloss: '座' }, { prompt: '有些人直接拿自己的生日当银行卡或信用卡的密码。其实，这样做很不（ ）。', answer: 'B', gloss: '安全' },
        { prompt: '无论对自己还是对其他人来说，喝完酒开车都是极其（ ）的。', answer: 'C', gloss: '危险' }, { prompt: '说出去的话很难（ ）回。因此，生气时不要随便说话，这时候说的一般都是气话，会给别人留下不好的印象，甚至会伤害别人。', answer: 'D', gloss: '收' },
        { prompt: '各位乘客，大家好，感谢大家乘坐此次航班，我们的飞机将于20分钟后（ ）在北京首都国际机场。', answer: 'E', gloss: '降落' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 咸 · B 技术 · C 迷路 · D 地址 · E 地点. Gõ chữ cái A–E.',
      items: [
        { prompt: '饺子很香，不过鸡蛋汤稍微有点儿（ ）。 那我下次少放点儿盐。', answer: 'A', gloss: '咸' }, { prompt: '对面那条街上新开了一家理发店，听说那儿的理发师（ ）还不错。 是吗？正好我也该理发了，那明天下班后我去试试。', answer: 'B', gloss: '技术' },
        { prompt: '我怎么觉得咱们好像（ ）了？ 没有，我以前来过这儿，前面路口左转就到了。', answer: 'C', gloss: '迷路' }, { prompt: '能把照片发到我邮箱里吗？ 没问题，把你的邮箱（ ）告诉我，我整理好了就发给你。', answer: 'D', gloss: '地址' },
        { prompt: '今天下午我们还是两点在东门集合吗？ 时间不变，（ ）改在西门了。快去整理一下东西吧，我们马上出发。', answer: 'E', gloss: '地点' },
      ],
    },
    {
      title: 'Giáo trình 比一比 · 然后 / 接着 (gõ từ)',
      hint: 'Gõ 然后 hoặc 接着 theo đáp án sách.',
      items: [
        { prompt: '你先上网看看吧，多比较比较，（ ）再做决定。', answer: '然后', gloss: '然后' },
        { prompt: '进了商店，妻子先买了一件衬衫，（ ）又买了一条裤子。', answer: '接着', gloss: '接着' },
        { prompt: '今天的课就到这儿，下节课（ ）讲这个问题。', answer: '接着', gloss: '接着' },
      ],
    },
    {
      title: 'Giáo trình 扩展 · 点 (gõ từ)',
      hint: 'Gõ 特点, 地点, 重点, 优点 hoặc 缺点.',
      items: [
        { prompt: '教育学生时，要根据学生的（ ）选择不同的方法。', answer: '特点', gloss: '特点' },
        { prompt: '现在有个通知，十一月七日上午八点有中国文化研讨会，（ ）在图书馆三楼会议室，希望大家准时参加。', answer: '地点', gloss: '地点' },
        { prompt: '由于时间限制，这份材料我就不向大家详细介绍了，我只对其中的（ ）简单说明一下。', answer: '重点', gloss: '重点' },
        { prompt: '他的（ ）是有礼貌，诚实，能吃苦，缺点是太马虎、太粗心了，不适合我们的工作。', answer: '优点', gloss: '优点' },
      ],
    },
  ],
}
