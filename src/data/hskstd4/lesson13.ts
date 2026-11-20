import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 4 (Hạ), Bài 13: 喝着茶看京剧 (sách trang 36–48).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách, dịch hội thoại do app tự thêm.
 * Nghe: 13-1…13-5. Bài tập: 比一比/练习 2/扩展, đáp án theo "HSK4-2-BH" trang 3–4.
 */

const A = '/audio/hsk-std4/'

export const hskStd4Lesson13: Lesson = {
  id: 13,
  title: 'Uống trà trong lúc xem Kinh kịch',
  hanzi: '喝着茶看京剧',
  pinyin: 'Hēzhe chá kàn jīngjù',
  vi: 'Uống trà trong lúc xem Kinh kịch',
  intro: 'Nói về Kinh kịch, đũa và trà. Học 大概 (so với 也许), 偶尔, 由, 进行, 随着.',

  dialogue: [
    { who: 'A', name: '小雨', hanzi: '小夏，你爷爷京剧唱得真专业，我还以为他是京剧演员呢。', pinyin: 'Xiǎo Xià, nǐ yéye jīngjù chàng de zhēn zhuānyè, wǒ hái yǐwéi tā shì jīngjù yǎnyuán ne.', vi: 'Tiểu Hạ, ông bạn hát Kinh kịch chuyên nghiệp thật, tôi còn tưởng ông là diễn viên Kinh kịch.', scene: 'Bài 1 · Tiểu Vũ và Tiểu Hạ nói về ông của Tiểu Hạ biểu diễn Kinh kịch' },
    { who: 'B', name: '小夏', hanzi: '对啊，他本来就是京剧演员，年轻时在我们那儿很有名，深受观众们的喜爱。', pinyin: 'Duì a, tā běnlái jiù shì jīngjù yǎnyuán, niánqīng shí zài wǒmen nàr hěn yǒumíng, shēnshòu guānzhòngmen de xǐ\'ài.', vi: 'Đúng, ông vốn là diễn viên Kinh kịch, thời trẻ rất nổi ở chỗ chúng tôi, được khán giả yêu mến.' },
    { who: 'A', name: '小雨', hanzi: '你爷爷一定对京剧有着很深厚的感情。', pinyin: 'Nǐ yéye yídìng duì jīngjù yǒuzhe hěn shēnhòu de gǎnqíng.', vi: 'Ông bạn chắc có tình cảm sâu đậm với Kinh kịch.' },
    { who: 'B', name: '小夏', hanzi: '是呀，他8岁就开始上台演出，到现在大概唱了60多年了，他对这门艺术的喜爱从来没有改变过。', pinyin: 'Shì ya, tā bā suì jiù kāishǐ shàng tái yǎnchū, dào xiànzài dàgài chàngle liùshí duō nián le, tā duì zhè mén yìshù de xǐ\'ài cónglái méiyǒu gǎibiànguo.', vi: 'Đúng, ông 8 tuổi đã lên sân khấu, đến giờ chừng hát hơn 60 năm, tình yêu với nghệ thuật này chưa từng đổi.' },
    { who: 'A', name: '小雨', hanzi: '这么说你喜欢听京剧也是受了你爷爷的影响？', pinyin: 'Zhème shuō nǐ xǐhuan tīng jīngjù yě shì shòule nǐ yéye de yǐngxiǎng?', vi: 'Vậy bạn thích nghe Kinh kịch cũng do ảnh hưởng của ông?' },
    { who: 'B', name: '小夏', hanzi: '我小时候经常去看他的演出。平时他还给我讲很多京剧里的历史故事，让我学到了很多知识。', pinyin: 'Wǒ xiǎo shíhou jīngcháng qù kàn tā de yǎnchū. Píngshí tā hái gěi wǒ jiǎng hěn duō jīngjù li de lìshǐ gùshi, ràng wǒ xuédàole hěn duō zhīshi.', vi: 'Hồi nhỏ tôi thường đi xem ông diễn. Ngày thường ông còn kể nhiều chuyện lịch sử trong Kinh kịch, giúp tôi học nhiều kiến thức.' },
    { who: 'A', name: '小雨', hanzi: '真没想到你一个来自美国的外国留学生，能把京剧唱得这么好。', pinyin: 'Zhēn méi xiǎngdào nǐ yí ge láizì Měiguó de wàiguó liúxuéshēng, néng bǎ jīngjù chàng de zhème hǎo.', vi: 'Thật không ngờ bạn là du học sinh đến từ Mỹ mà hát Kinh kịch hay thế.', scene: 'Bài 2 · Tiểu Vũ và Mark nói về Kinh kịch' },
    { who: 'B', name: '马克', hanzi: '我常常跟着电视学唱京剧，然后一遍一遍地练习，偶尔跟中国人一起唱上几句。', pinyin: 'Wǒ chángcháng gēnzhe diànshì xué chàng jīngjù, ránhòu yí biàn yí biàn de liànxí, ǒu\'ěr gēn Zhōngguó rén yìqǐ chàngshang jǐ jù.', vi: 'Tôi hay theo ti vi học hát Kinh kịch, rồi luyện từng lần một, thỉnh thoảng hát vài câu với người Trung Quốc.' },
    { who: 'A', name: '小雨', hanzi: '难道你从来没有接受过京剧方面的专门教育吗？', pinyin: 'Nándào nǐ cónglái méiyǒu jiēshòuguo jīngjù fāngmiàn de zhuānmén jiàoyù ma?', vi: 'Chẳng lẽ bạn chưa từng được đào tạo chuyên về Kinh kịch?' },
    { who: 'B', name: '马克', hanzi: '别吃惊，因为我以前学习过音乐，有一些音乐基础，又对京剧这种表演艺术非常感兴趣，所以能比较容易地学会它的唱法。', pinyin: 'Bié chī jīng, yīnwèi wǒ yǐqián xuéxíguo yīnyuè, yǒu yìxiē yīnyuè jīchǔ, yòu duì jīngjù zhè zhǒng biǎoyǎn yìshù fēicháng gǎn xìngqù, suǒyǐ néng bǐjiào róngyì de xuéhuì tā de chàngfǎ.', vi: 'Đừng ngạc nhiên, vì trước đây tôi học nhạc, có chút nền tảng, lại rất hứng thú với nghệ thuật biểu diễn này nên học cách hát khá dễ.' },
    { who: 'A', name: '小雨', hanzi: '你真厉害！竟然连很多中国人都听不懂的京剧也能学会。我还是比较喜欢听流行音乐。', pinyin: 'Nǐ zhēn lìhai! Jìngrán lián hěn duō Zhōngguó rén dōu tīngbudǒng de jīngjù yě néng xuéhuì. Wǒ háishi bǐjiào xǐhuan tīng liúxíng yīnyuè.', vi: 'Bạn giỏi thật! Vậy mà cả Kinh kịch nhiều người Trung Quốc cũng không hiểu bạn học được. Tôi vẫn thích nhạc pop hơn.' },
    { who: 'B', name: '马克', hanzi: '那是你不了解京剧的唱法。在音乐方面，京剧给了我很多新的想法。我还把京剧的一些特点增加到了自己的音乐中，达到了很好的效果。', pinyin: 'Nà shì nǐ bù liǎojiě jīngjù de chàngfǎ. Zài yīnyuè fāngmiàn, jīngjù gěile wǒ hěn duō xīn de xiǎngfǎ. Wǒ hái bǎ jīngjù de yìxiē tèdiǎn zēngjiādàole zìjǐ de yīnyuè zhōng, dádàole hěn hǎo de xiàoguǒ.', vi: 'Đó là vì bạn chưa hiểu cách hát Kinh kịch. Về âm nhạc Kinh kịch cho tôi nhiều ý tưởng mới. Tôi còn thêm một số đặc điểm của Kinh kịch vào nhạc của mình, đạt hiệu quả rất tốt.' },
    { who: 'A', name: '李老师', hanzi: '校长，因为外国留学生不了解中国文化，有时候会影响他们和中国人之间的正常交流，甚至还可能引起误会，带来麻烦，所以我们想申请举办一次中国传统文化节活动。', pinyin: 'Xiàozhǎng, yīnwèi wàiguó liúxuéshēng bù liǎojiě Zhōngguó wénhuà, yǒushíhou huì yǐngxiǎng tāmen hé Zhōngguó rén zhījiān de zhèngcháng jiāoliú, shènzhì hái kěnéng yǐnqǐ wùhuì, dàilái máfan, suǒyǐ wǒmen xiǎng shēnqǐng jǔbàn yí cì Zhōngguó chuántǒng wénhuàjié huódòng.', vi: 'Thưa hiệu trưởng, vì lưu học sinh nước ngoài không hiểu văn hóa Trung Quốc, đôi khi ảnh hưởng giao tiếp bình thường với người Trung Quốc, thậm chí gây hiểu lầm, rắc rối, nên chúng tôi muốn xin tổ chức một lễ hội văn hóa truyền thống Trung Quốc.', scene: 'Bài 3 · Thầy Lý và hiệu trưởng nói chuyện công việc' },
    { who: 'B', name: '校长', hanzi: '你们的想法很好，举办文化节活动，一方面能让各国学生更好地了解中国，另一方面也能为学生们提供互相交流和学习的机会。', pinyin: 'Nǐmen de xiǎngfǎ hěn hǎo, jǔbàn wénhuàjié huódòng, yì fāngmiàn néng ràng gè guó xuésheng gèng hǎo de liǎojiě Zhōngguó, lìng yì fāngmiàn yě néng wèi xuéshengmen tígōng hùxiāng jiāoliú hé xuéxí de jīhuì.', vi: 'Ý tưởng của các thầy rất hay, tổ chức lễ hội văn hóa một mặt giúp sinh viên các nước hiểu Trung Quốc hơn, mặt khác cho sinh viên cơ hội giao lưu học hỏi lẫn nhau.' },
    { who: 'A', name: '李老师', hanzi: '谢谢您的支持！', pinyin: 'Xièxie nín de zhīchí!', vi: 'Cảm ơn sự ủng hộ của thầy!' },
    { who: 'B', name: '校长', hanzi: '上次的春游活动你们办得非常有趣，大家都玩儿得很开心，这次活动继续由你负责，相信也一定会很成功。', pinyin: 'Shàng cì de chūnyóu huódòng nǐmen bàn de fēicháng yǒuqù, dàjiā dōu wánr de hěn kāixīn, zhè cì huódòng jìxù yóu nǐ fùzé, xiāngxìn yě yídìng huì hěn chénggōng.', vi: 'Hoạt động dã ngoại mùa xuân lần trước các thầy tổ chức rất thú vị, mọi người đều vui, lần này tiếp tục do thầy phụ trách, tin cũng sẽ thành công.' },
    { who: 'A', name: '李老师', hanzi: '我们回去就开会讨论，星期五之前把详细的计划书发给您。', pinyin: 'Wǒmen huíqu jiù kāi huì tǎolùn, xīngqīwǔ zhīqián bǎ xiángxì de jìhuàshū fāgěi nín.', vi: 'Chúng tôi về sẽ họp bàn, trước thứ Sáu gửi kế hoạch chi tiết cho thầy.' },
    { who: 'B', name: '校长', hanzi: '好的，准备过程中有什么问题，你们可以直接来找我。', pinyin: 'Hǎo de, zhǔnbèi guòchéng zhōng yǒu shénme wèntí, nǐmen kěyǐ zhíjiē lái zhǎo wǒ.', vi: 'Được, trong quá trình chuẩn bị có vấn đề gì các thầy cứ đến tìm tôi.' },
    { who: 'A', name: '短文', hanzi: '筷子在中国大约已经有3000多年的历史了。对外国人来说，使用筷子吃饭并不容易，所以，国外的一些中国餐厅在放筷子的纸袋上会提供使用筷子的详细说明。不过，如果你认为每个中国人都会正确使用筷子，那就错了。有人在互联网上专门进行过调查，结果发现每六个中国人中就有一个使用筷子的方法是错误的。如果你想正确使用筷子，那就好好练习吧。', pinyin: 'Kuàizi zài Zhōngguó dàyuē yǐjīng yǒu sānqiān duō nián de lìshǐ le. Duì wàiguó rén lái shuō, shǐyòng kuàizi chī fàn bìng bù róngyì, suǒyǐ, guówài de yìxiē Zhōngguó cāntīng zài fàng kuàizi de zhǐdài shang huì tígōng shǐyòng kuàizi de xiángxì shuōmíng. Búguò, rúguǒ nǐ rènwéi měi ge Zhōngguó rén dōu huì zhèngquè shǐyòng kuàizi, nà jiù cuò le. Yǒu rén zài hùliánwǎng shang zhuānmén jìnxíngguo diàochá, jiéguǒ fāxiàn měi liù ge Zhōngguó rén zhōng jiù yǒu yí ge shǐyòng kuàizi de fāngfǎ shì cuòwù de. Rúguǒ nǐ xiǎng zhèngquè shǐyòng kuàizi, nà jiù hǎohāor liànxí ba.', vi: 'Đũa ở Trung Quốc đã có lịch sử khoảng hơn 3000 năm. Với người nước ngoài dùng đũa ăn không dễ, nên một số nhà hàng Trung Quốc ở nước ngoài in hướng dẫn chi tiết cách dùng đũa trên túi giấy đựng đũa. Nhưng nếu bạn cho rằng người Trung Quốc nào cũng dùng đũa đúng thì sai rồi. Có người chuyên khảo sát trên Internet, kết quả cứ sáu người Trung Quốc lại có một người dùng đũa sai. Nếu bạn muốn dùng đũa đúng thì hãy luyện tập kỹ.', scene: 'Bài 4 · Đũa' },
    { who: 'A', name: '短文', hanzi: '茶在中国有几千年的历史，是中国最常见的饮料。最早的时候，茶只是被当作一种药，而不是饮料。后来，随着人们对茶的认识的加深，慢慢开始把它当作解渴的饮料，这才慢慢有了中国的茶文化。在中国，喝茶是一种十分普遍的生活习惯。对很多中国人来说，喝茶已成为他们生活中不可缺少的一部分。但是有的饮料虽然名字叫“茶”，却并不是真正的茶。比如广东省的人爱喝的“凉茶”，它的味道稍微有点儿苦，其实是一种用中药做成的饮料。', pinyin: 'Chá zài Zhōngguó yǒu jǐ qiān nián de lìshǐ, shì Zhōngguó zuì chángjiàn de yǐnliào. Zuì zǎo de shíhou, chá zhǐshì bèi dàngzuò yì zhǒng yào, ér bú shì yǐnliào. Hòulái, suízhe rénmen duì chá de rènshi de jiāshēn, màn màn kāishǐ bǎ tā dàngzuò jiěkě de yǐnliào, zhè cái mànmàn yǒule Zhōngguó de chá wénhuà. Zài Zhōngguó, hē chá shì yì zhǒng shífēn pǔbiàn de shēnghuó xíguàn. Duì hěn duō Zhōngguó rén lái shuō, hē chá yǐ chéngwéi tāmen shēnghuó zhōng bù kě quēshǎo de yí bùfen. Dànshì yǒude yǐnliào suīrán míngzi jiào "chá", què bìng bú shì zhēnzhèng de chá. Bǐrú Guǎngdōng Shěng de rén ài hē de "liángchá", tā de wèidào shāowēi yǒudiǎnr kǔ, qíshí shì yì zhǒng yòng zhōngyào zuòchéng de yǐnliào.', vi: 'Trà ở Trung Quốc có lịch sử mấy nghìn năm, là đồ uống phổ biến nhất. Thời xa xưa trà chỉ được coi là một loại thuốc chứ không phải đồ uống. Sau đó, theo sự hiểu biết về trà ngày càng sâu, dần dần người ta coi nó là đồ uống giải khát, từ đó mới dần có văn hóa trà Trung Quốc. Ở Trung Quốc, uống trà là thói quen sinh hoạt rất phổ biến. Với nhiều người Trung Quốc, uống trà đã thành một phần không thể thiếu của cuộc sống. Nhưng có loại đồ uống tuy tên là "trà" lại không phải trà thật. Chẳng hạn "trà thanh nhiệt" người tỉnh Quảng Đông thích uống, vị hơi đắng, thật ra là đồ uống làm từ thuốc Đông y.', scene: 'Bài 5 · Trà' },
  ],
  dialogueClips: [
    { label: '13-1 · Tiểu Vũ và Tiểu Hạ', src: A + 'l13-1.mp3' },
    { label: '13-2 · Tiểu Vũ và Mark', src: A + 'l13-2.mp3' },
    { label: '13-3 · Thầy Lý và hiệu trưởng', src: A + 'l13-3.mp3' },
    { label: '13-4 · Đũa', src: A + 'l13-4.mp3' },
    { label: '13-5 · Trà', src: A + 'l13-5.mp3' },
  ],
  dialogueTip: '<b>大概 / 也许</b>: chừng, có lẽ. <b>偶尔</b>: thỉnh thoảng. <b>由 + người</b>: do… (phụ trách). <b>进行</b>: tiến hành (trước động từ 2 âm tiết, trang trọng). <b>随着</b>: cùng với, theo sự…',
  slowSay: '喝着茶看京剧',

  vocab: [
    { hanzi: '京剧', pinyin: 'jīngjù', pos: 'danh từ', meaning: 'Kinh kịch', han_viet: 'kinh kịch' },
    { hanzi: '演员', pinyin: 'yǎnyuán', pos: 'danh từ', meaning: 'diễn viên', han_viet: 'diễn viên' },
    { hanzi: '观众', pinyin: 'guānzhòng', pos: 'danh từ', meaning: 'khán giả', han_viet: 'quan chúng' },
    { hanzi: '厚', pinyin: 'hòu', pos: 'tính từ', meaning: 'dày, sâu nặng', han_viet: 'hậu' },
    { hanzi: '演出', pinyin: 'yǎnchū', pos: 'động từ', meaning: 'biểu diễn', han_viet: 'diễn xuất' },
    { hanzi: '大概', pinyin: 'dàgài', pos: 'phó từ', meaning: 'khoảng chừng, có lẽ', han_viet: 'đại khái' },
    { hanzi: '来自', pinyin: 'láizì', pos: 'động từ', meaning: 'đến từ', han_viet: 'lai tự' },
    { hanzi: '遍', pinyin: 'biàn', pos: 'lượng từ', meaning: 'lần, lượt (từ đầu đến cuối một hành động)', han_viet: 'biến' },
    { hanzi: '偶尔', pinyin: 'ǒu\'ěr', pos: 'phó từ', meaning: 'thỉnh thoảng', han_viet: 'ngẫu nhĩ' },
    { hanzi: '吃惊', pinyin: 'chī jīng', pos: 'động từ', meaning: 'kinh ngạc', han_viet: 'ngật kinh' },
    { hanzi: '基础', pinyin: 'jīchǔ', pos: 'danh từ', meaning: 'nền tảng, căn bản', han_viet: 'cơ sở' },
    { hanzi: '表演', pinyin: 'biǎoyǎn', pos: 'động từ', meaning: 'biểu diễn, trình diễn', han_viet: 'biểu diễn' },
    { hanzi: '正常', pinyin: 'zhèngcháng', pos: 'tính từ', meaning: 'bình thường, thông thường', han_viet: 'chính thường' },
    { hanzi: '申请', pinyin: 'shēnqǐng', pos: 'động từ', meaning: 'xin', han_viet: 'thân thỉnh' },
    { hanzi: '有趣', pinyin: 'yǒuqù', pos: 'tính từ', meaning: 'thú vị, lý thú', han_viet: 'hữu thú' },
    { hanzi: '开心', pinyin: 'kāixīn', pos: 'tính từ', meaning: 'vui vẻ', han_viet: 'khai tâm' },
    { hanzi: '继续', pinyin: 'jìxù', pos: 'động từ', meaning: 'tiếp tục', han_viet: 'kế tục' },
    { hanzi: '由', pinyin: 'yóu', pos: 'giới từ', meaning: 'do', han_viet: 'do' },
    { hanzi: '讨论', pinyin: 'tǎolùn', pos: 'động từ', meaning: 'thảo luận, bàn bạc', han_viet: 'thảo luận' },
    { hanzi: '大约', pinyin: 'dàyuē', pos: 'phó từ', meaning: 'khoảng chừng, ước chừng', han_viet: 'đại ước' },
    { hanzi: '餐厅', pinyin: 'cāntīng', pos: 'danh từ', meaning: 'nhà hàng', han_viet: 'xan sảnh' },
    { hanzi: '纸袋', pinyin: 'zhǐdài', pos: 'danh từ', meaning: 'túi giấy', han_viet: 'chỉ đại' },
    { hanzi: '互联网', pinyin: 'hùliánwǎng', pos: 'danh từ', meaning: 'mạng Internet', han_viet: 'hỗ liên võng' },
    { hanzi: '进行', pinyin: 'jìnxíng', pos: 'động từ', meaning: 'tiến hành, thực hiện', han_viet: 'tiến hành' },
    { hanzi: '错误', pinyin: 'cuòwù', pos: 'tính từ', meaning: 'sai', han_viet: 'thác ngộ' },
    { hanzi: '随着', pinyin: 'suízhe', pos: 'giới từ', meaning: 'cùng với', han_viet: 'tùy trước' },
    { hanzi: '十分', pinyin: 'shífēn', pos: 'phó từ', meaning: 'rất, vô cùng', han_viet: 'thập phân' },
    { hanzi: '普遍', pinyin: 'pǔbiàn', pos: 'tính từ', meaning: 'phổ biến', han_viet: 'phổ biến' },
    { hanzi: '部分', pinyin: 'bùfen', pos: 'danh từ', meaning: 'phần, bộ phận', han_viet: 'bộ phận' },
    { hanzi: '稍微', pinyin: 'shāowēi', pos: 'phó từ', meaning: 'hơi', han_viet: 'sảo vi' },
    { hanzi: '苦', pinyin: 'kǔ', pos: 'tính từ', meaning: 'đắng', han_viet: 'khổ' },
    { hanzi: '省', pinyin: 'shěng', pos: 'danh từ', meaning: 'tỉnh', han_viet: 'tỉnh' },
  ],

  sections: [
    {
      kind: 'examples', label: '大概', title: '大概 (khoảng chừng, có lẽ)',
      intro: 'Phó từ 大概 chỉ sự ước lượng không chính xác về số lượng, thời gian, hoặc suy đoán tình huống có khả năng rất cao. 大概 còn là tính từ nghĩa "không chính xác lắm, chung chung".',
      groups: [{ label: 'Ví dụ', items: [['他8岁就开始上台演出，到现在大概唱了60多年了，他对这门艺术的喜爱从来没有改变过。', 'Tā bā suì jiù kāishǐ shàng tái yǎnchū, dào xiànzài dàgài chàngle liùshí duō nián le, tā duì zhè mén yìshù de xǐ\'ài cónglái méiyǒu gǎibiànguo.', 'Ông 8 tuổi đã lên sân khấu, đến giờ chừng hát hơn 60 năm, tình yêu nghệ thuật này chưa từng đổi.'], ['你的这个关于举办传统文化节活动的计划，我想校长大概会同意。', 'Nǐ de zhège guānyú jǔbàn chuántǒng wénhuàjié huódòng de jìhuà, wǒ xiǎng xiàozhǎng dàgài huì tóngyì.', 'Kế hoạch tổ chức lễ hội văn hóa truyền thống này của bạn, tôi nghĩ hiệu trưởng có lẽ sẽ đồng ý.'], ['不管做什么事情，最好提前做计划，不用安排得特别详细，但必须有一个大概的想法。', 'Bùguǎn zuò shénme shìqing, zuìhǎo tíqián zuò jìhuà, búyòng ānpái de tèbié xiángxì, dàn bìxū yǒu yí ge dàgài de xiǎngfǎ.', 'Làm việc gì tốt nhất lên kế hoạch trước, không cần chi tiết nhưng phải có ý tưởng đại khái.']] }],
    },
    {
      kind: 'examples', label: '大概 – 也许', title: 'So sánh 大概 và 也许',
      intro: 'Giống nhau: đều là phó từ chỉ suy đoán, ước lượng. Khác nhau: (1) 大概 phán đoán mạnh hơn, mang ý khẳng định nhiều hơn; 也许 chỉ phỏng đoán, mức chắc chắn thấp hơn. (2) 大概 dùng cho ước lượng số lượng, 也许 không dùng. (3) 也许 có thể diễn tả dự định tương lai chưa chắc chắn của người nói, 大概 không. (4) 大概 còn là tính từ "chung chung", 也许 không.',
      groups: [{ label: 'Ví dụ', items: [['老张这个人一直很准时，开会从来不迟到。今天到现在还没来，大概是有什么事情，你打个电话问问他吧。', 'Lǎo Zhāng zhège rén yìzhí hěn zhǔnshí, kāi huì cónglái bù chídào. Jīntiān dào xiànzài hái méi lái, dàgài shì yǒu shénme shìqing, nǐ dǎ ge diànhuà wènwen tā ba.', 'Lão Trương luôn đúng giờ, họp chưa từng muộn. Hôm nay giờ vẫn chưa đến, chắc có việc gì, bạn gọi hỏi nhé.'], ['这次电影艺术节也许会在北京举行。', 'Zhè cì diànyǐng yìshùjié yěxǔ huì zài Běijīng jǔxíng.', 'Liên hoan điện ảnh lần này có lẽ sẽ tổ chức ở Bắc Kinh.'], ['大概有三分之二的人反对这样做。', 'Dàgài yǒu sān fēn zhī èr de rén fǎnduì zhèyàng zuò.', 'Chừng hai phần ba số người phản đối làm vậy.'], ['我原来想学习法律，不过后来我发现自己对新闻更感兴趣，也许以后我会成为一名记者。', 'Wǒ yuánlái xiǎng xuéxí fǎlǜ, búguò hòulái wǒ fāxiàn zìjǐ duì xīnwén gèng gǎn xìngqù, yěxǔ yǐhòu wǒ huì chéngwéi yì míng jìzhě.', 'Trước tôi muốn học luật, nhưng sau thấy mình thích báo chí hơn, có lẽ sau này tôi thành phóng viên.']] }],
    },
    {
      kind: 'examples', label: '偶尔 · 由', title: '偶尔 (thỉnh thoảng) và 由 (do)',
      intro: '偶尔: phó từ chỉ tình huống xảy ra với tần suất rất thấp. 由: giới từ dẫn ra người đảm nhận việc nào đó.',
      groups: [
        { label: '偶尔', items: [['我常常跟着电视学唱京剧，然后一遍一遍地练习，偶尔跟中国人一起唱上几句。', 'Wǒ chángcháng gēnzhe diànshì xué chàng jīngjù, ránhòu yí biàn yí biàn de liànxí, ǒu\'ěr gēn Zhōngguó rén yìqǐ chàngshang jǐ jù.', 'Tôi hay theo ti vi học hát Kinh kịch, luyện từng lần, thỉnh thoảng hát vài câu với người Trung Quốc.'], ['我们调查的近7000名上班族中，有64%的人经常加班，28%偶尔加班，而每次加班时间超过两小时的竟然有59%。', 'Wǒmen diàochá de jìn qīqiān míng shàng bān zú zhōng, yǒu liùshísì fēn zhī de rén jīngcháng jiā bān, èrshíbā fēn zhī ǒu\'ěr jiā bān, ér měi cì jiā bān shíjiān chāoguò liǎng xiǎoshí de jìngrán yǒu wǔshíjiǔ fēn zhī.', 'Trong gần 7000 nhân viên văn phòng khảo sát, 64% thường tăng ca, 28% thỉnh thoảng tăng ca, và 59% mỗi lần tăng ca quá hai tiếng.']] },
        { label: '由', items: [['按照规定，这件事情应该由王大夫负责。', 'Ànzhào guīdìng, zhè jiàn shìqing yīnggāi yóu Wáng dàifu fùzé.', 'Theo quy định, việc này nên do bác sĩ Vương phụ trách.'], ['“幽默”这个词最早是由林语堂先生翻译过来的。', '"Yōumò" zhège cí zuì zǎo shì yóu Lín Yǔtáng xiānsheng fānyì guòlai de.', 'Từ "幽默" lần đầu do ông Lâm Ngữ Đường dịch sang.'], ['上次的春游活动你们办得非常有趣，这次活动继续由你负责，相信也一定会很成功。', 'Shàng cì de chūnyóu huódòng nǐmen bàn de fēicháng yǒuqù, zhè cì huódòng jìxù yóu nǐ fùzé, xiāngxìn yě yídìng huì hěn chénggōng.', 'Hoạt động mùa xuân lần trước các bạn tổ chức rất thú vị, lần này tiếp tục do bạn phụ trách, tin sẽ thành công.']] },
      ],
    },
    {
      kind: 'examples', label: '进行 · 随着', title: '进行 (tiến hành) và 随着 (cùng với)',
      intro: '进行: động từ "thực hiện hoạt động/công việc"; thường đứng trước động từ hai âm tiết diễn tả hành động chính thức, nghiêm túc; hành động tạm thời hay đời thường không dùng 进行. 随着: giới từ chỉ một sự việc là điều kiện cho việc khác xảy ra; theo sau thường là động từ hai âm tiết kèm bổ nghĩa.',
      groups: [
        { label: '进行', items: [['大家请注意，现在休息十五分钟，十点半会议继续进行。', 'Dàjiā qǐng zhùyì, xiànzài xiūxi shíwǔ fēnzhōng, shí diǎn bàn huìyì jìxù jìnxíng.', 'Mọi người chú ý, giờ nghỉ 15 phút, 10 rưỡi hội nghị tiếp tục.'], ['有人在互联网上专门进行过调查，结果发现每六个中国人中就有一个使用筷子的方法是错误的。', 'Yǒu rén zài hùliánwǎng shang zhuānmén jìnxíngguo diàochá, jiéguǒ fāxiàn měi liù ge Zhōngguó rén zhōng jiù yǒu yí ge shǐyòng kuàizi de fāngfǎ shì cuòwù de.', 'Có người chuyên khảo sát trên Internet, thấy cứ sáu người Trung Quốc thì một người dùng đũa sai.'], ['成功的语言学习者，在学习方面往往都是积极主动的，他们会主动与他人进行交流，并且请别人帮助他们改错。', 'Chénggōng de yǔyán xuéxízhě, zài xuéxí fāngmiàn wǎngwǎng dōu shì jījí zhǔdòng de, tāmen huì zhǔdòng yǔ tārén jìnxíng jiāoliú, bìngqiě qǐng biérén bāngzhù tāmen gǎi cuò.', 'Người học ngôn ngữ thành công thường chủ động tích cực, họ chủ động giao lưu với người khác và nhờ sửa lỗi.']] },
        { label: '随着', items: [['随着社会的发展，京剧也在改变，以适应不同年龄观众的需要。', 'Suízhe shèhuì de fāzhǎn, jīngjù yě zài gǎibiàn, yǐ shìyìng bù tóng niánlíng guānzhòng de xūyào.', 'Cùng với sự phát triển xã hội, Kinh kịch cũng đang thay đổi để thích ứng nhu cầu khán giả mọi lứa tuổi.'], ['有些人喜欢为自己的生活做长远的计划。但是，随着年龄的增长，他们会发现生活总是在不停地变化。', 'Yǒuxiē rén xǐhuan wèi zìjǐ de shēnghuó zuò chángyuǎn de jìhuà. Dànshì, suízhe niánlíng de zēngzhǎng, tāmen huì fāxiàn shēnghuó zǒngshì zài bù tíng de biànhuà.', 'Có người thích lập kế hoạch dài hạn cho cuộc sống. Nhưng cùng với tuổi tăng họ nhận ra cuộc sống luôn không ngừng thay đổi.'], ['最早的时候，茶只是被当作一种药。后来，随着人们对茶的认识的加深，慢慢开始把它当作解渴的饮料。', 'Zuì zǎo de shíhou, chá zhǐshì bèi dàngzuò yì zhǒng yào. Hòulái, suízhe rénmen duì chá de rènshi de jiāshēn, mànmàn kāishǐ bǎ tā dàngzuò jiěkě de yǐnliào.', 'Thuở đầu trà chỉ được coi là thuốc. Sau đó theo hiểu biết về trà sâu hơn, dần được coi là đồ uống giải khát.']] },
      ],
    },
    {
      kind: 'examples', label: 'Từ cùng chữ: 量', title: 'Những từ có chữ giống nhau: 量',
      intro: '商量, 数量, 质量.',
      groups: [{ label: 'Ví dụ', items: [['我认真考虑了一个晚上，也打电话和父母商量过了，最后还是决定不去那家公司了。', 'Wǒ rènzhēn kǎolǜle yí ge wǎnshang, yě dǎ diànhuà hé fùmǔ shāngliang guo le, zuìhòu háishi juédìng bú qù nà jiā gōngsī le.', 'Tôi cân nhắc cả tối, gọi điện bàn với bố mẹ, cuối cùng quyết định không đến công ty đó.'], ['大熊猫样子非常可爱，深受人们喜爱。但是数量不多，全世界一共大约有一千多只。', 'Dàxióngmāo yàngzi fēicháng kě\'ài, shēnshòu rénmen xǐ\'ài. Dànshì shùliàng bù duō, quán shìjiè yígòng dàyuē yǒu yì qiān duō zhī.', 'Gấu trúc rất đáng yêu, được yêu mến. Nhưng số lượng không nhiều, toàn thế giới có khoảng hơn nghìn con.']] }],
    },
  ],

  notes: [
    { title: '大概', body: 'Phó từ: ước lượng số lượng/thời gian không chính xác hoặc suy đoán khả năng cao (大概唱了60多年, 大概会同意). Tính từ: chung chung (一个大概的想法). So với 也许: 大概 chắc chắn hơn, dùng được cho số lượng; 也许 dùng cho dự định chưa chắc.', say: '到现在大概唱了六十多年了' },
    { title: '偶尔', body: 'Phó từ chỉ tần suất rất thấp: 偶尔跟中国人一起唱上几句。', say: '偶尔跟中国人一起唱上几句' },
    { title: '由', body: 'Giới từ dẫn ra người phụ trách: 这次活动继续由你负责。', say: '这次活动继续由你负责' },
    { title: '进行', body: 'Động từ "thực hiện", thường đứng trước động từ hai âm tiết chỉ hành động chính thức, nghiêm túc; hành động tạm thời, đời thường không dùng 进行.', say: '有人在互联网上专门进行过调查' },
    { title: '随着', body: 'Giới từ: một sự việc làm điều kiện cho việc khác; theo sau thường là động từ hai âm tiết có bổ nghĩa: 随着社会的发展.', say: '随着社会的发展，京剧也在改变' },
    { title: 'Văn hóa: Đũa và trà', body: 'Đũa Trung Quốc có hơn 3000 năm lịch sử; trà được dùng làm thuốc trước, sau mới thành đồ uống giải khát và hình thành văn hóa trà. Kinh kịch là nghệ thuật biểu diễn truyền thống nổi tiếng của Bắc Kinh.', say: '筷子，茶，京剧' },
  ],

  writeChars: ['京', '剧', '演', '员', '观', '众', '偶', '筷'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa',
      items: [
        { q: '小夏的爷爷多大年纪了？京剧唱得怎么样？唱了多长时间了？', hint: '他唱得很专业，8岁开始演出，大概唱了60多年。' },
        { q: '小夏受了爷爷哪些影响？', hint: '喜欢听京剧，小时候常去看演出，还学到很多历史知识。' },
        { q: '马克学过京剧吗？他怎么学的？为什么唱得那么好？', hint: '没有专门学过；跟着电视学，一遍一遍练习；他有音乐基础，又对京剧感兴趣。' },
        { q: '京剧给了马克哪些新的想法？', hint: '他把京剧的一些特点增加到自己的音乐中，效果很好。' },
        { q: '为什么李老师想申请举办中国传统文化节活动？', hint: '因为外国留学生不了解中国文化，会影响交流甚至引起误会。' },
        { q: '为什么校长决定这次活动继续由李老师负责？', hint: '因为上次春游活动办得非常有趣，大家都很开心。' },
        { q: '关于中国人使用筷子的调查结果是什么？', hint: '每六个中国人中就有一个使用筷子的方法是错误的。' },
        { q: '茶开始时被用来做什么？后来呢？广东人爱喝的凉茶是什么样的饮料？', hint: '先当作药，后来当作解渴的饮料；凉茶味道稍微有点苦，是用中药做成的饮料。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: nói về Kinh kịch hoặc nghệ thuật truyền thống của nước bạn', hint: '你喜欢看京剧吗？你觉得京剧怎么样？你们国家有什么传统表演艺术？' },
        { q: 'Theo nhóm: giới thiệu văn hóa trà hoặc đũa, dùng ít nhất 4 cấu trúc', hint: '大概；偶尔；由；进行；随着；普遍；稍微；十分。' },
      ],
    },
  ],

  sentences: [
    { parts: ['你', '爷爷', '京剧', '唱', '得', '真', '专业'], pinyin: 'Nǐ yéye jīngjù chàng de zhēn zhuānyè.', vi: 'Ông bạn hát Kinh kịch chuyên nghiệp thật.' },
    { parts: ['他', '8', '岁', '就', '开始', '上', '台', '演出'], pinyin: 'Tā bā suì jiù kāishǐ shàng tái yǎnchū.', vi: 'Ông 8 tuổi đã bắt đầu lên sân khấu.' },
    { parts: ['我', '偶尔', '跟', '中国', '人', '一起', '唱', '上', '几', '句'], pinyin: 'Wǒ ǒu\'ěr gēn Zhōngguó rén yìqǐ chàngshang jǐ jù.', vi: 'Thỉnh thoảng tôi hát vài câu với người Trung Quốc.' },
    { parts: ['这', '次', '活动', '继续', '由', '你', '负责'], pinyin: 'Zhè cì huódòng jìxù yóu nǐ fùzé.', vi: 'Lần này hoạt động tiếp tục do bạn phụ trách.' },
    { parts: ['随着', '社会', '的', '发展', '京剧', '也', '在', '改变'], pinyin: 'Suízhe shèhuì de fāzhǎn, jīngjù yě zài gǎibiàn.', vi: 'Cùng với sự phát triển xã hội, Kinh kịch cũng đang thay đổi.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 演出 · B 演员 · C 表演 · D 普遍 · E 苦. Gõ chữ cái A–E.',
      items: [
        { prompt: '今天的晚会太精彩了，特别是那些外国留学生（ ）的中国功夫，动作既标准又好看，非常棒。', answer: 'C', gloss: '表演' }, { prompt: '这次（ ）举办得非常成功，吸引了不少当地的观众。', answer: 'A', gloss: '演出' },
        { prompt: '凉茶虽然味道（ ），但对身体很有好处。另外，凉茶热着喝效果也很不错。', answer: 'E', gloss: '苦' }, { prompt: '每天晚上，公园里都有一群老人在唱京剧。他们很喜欢唱京剧，虽然不是专业的（ ），不过，他们唱得不错，听起来很有味道。', answer: 'B', gloss: '演员' },
        { prompt: '很多大学生毕业后，选择的第一个职业，往往和自己的专业没什么关系，这种情况现在越来越（ ）。', answer: 'D', gloss: '普遍' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 稍微 · B 基础 · C 厚 · D 遍 · E 继续. Gõ chữ cái A–E.',
      items: [
        { prompt: '这本小说这么（ ），什么时候才能看完啊？ 每天晚上看十几页，差不多一个月就可以看完。', answer: 'C', gloss: '厚' }, { prompt: '你学得可真快！ 我小时候学过两年的舞，有点儿（ ）。', answer: 'B', gloss: '基础' },
        { prompt: '材料整理好了没？ 差不多了，我再检查一（ ）就给您送过去。', answer: 'D', gloss: '遍' }, { prompt: '你想好了没？是（ ）读书还是参加工作？ 我考虑过了，我想先工作两年，然后再考研究生。', answer: 'E', gloss: '继续' },
        { prompt: '孙小姐，我们大概什么时候出发？ 大家先回房间（ ）休息一下，半个小时后我们楼下集合。', answer: 'A', gloss: '稍微' },
      ],
    },
    {
      title: 'Giáo trình 比一比 · 大概 / 也许 (gõ từ)',
      hint: 'Gõ 大概 hoặc 也许 theo đáp án sách (câu 1 chấp nhận cả hai).',
      items: [
        { prompt: '这次调查发现，超过70%的儿童更愿意让爸爸给自己读书。为什么会出现这种情况？（ ）是因为父亲平时陪孩子玩儿的时间太少。', answer: '大概', accept: ['也许'], gloss: '大概 / 也许' },
        { prompt: '穷人的孩子早当家，他们（ ）没有很多钱，却可能比富人家的孩子经历得更多。', answer: '也许', gloss: '也许' },
        { prompt: '师傅，我去机场。（ ）要多长时间？半小时能到吗？', answer: '大概', gloss: '大概' },
        { prompt: '小孩儿的脾气变化很快。刚才还对你哭个不停，（ ）一下子就没事了，好像什么都没发生过。', answer: '也许', gloss: '也许' },
        { prompt: '您最近在拍哪部电影？能谈谈电影的（ ）内容吗？', answer: '大概', gloss: '大概' },
      ],
    },
    {
      title: 'Giáo trình 扩展 · 量 (gõ từ)',
      hint: 'Gõ 商量, 数量 hoặc 质量.',
      items: [
        { prompt: '大熊猫样子非常可爱，深受人们喜爱。但是（ ）不多，全世界一共大约有一千多只。', answer: '数量', gloss: '数量' },
        { prompt: '了解顾客的实际需要十分重要，一样东西，不管它（ ）多好、多便宜，如果顾客完全不需要它，我们就很难把它卖出去。', answer: '质量', gloss: '质量' },
        { prompt: '你们两个怎么样了？打算什么时候结婚？ 我们（ ）过了，就明年十月一号。', answer: '商量', gloss: '商量' },
      ],
    },
  ],
}
