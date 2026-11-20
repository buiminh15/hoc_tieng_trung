import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 4 (Hạ), Bài 12: 用心发现世界 (sách trang 23–35).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách, dịch hội thoại do app tự thêm.
 * Nghe: 12-1…12-5. Bài tập: 比一比/练习 2, đáp án theo "HSK4-2-BH" trang 2.
 */

const A = '/audio/hsk-std4/'

export const hskStd4Lesson12: Lesson = {
  id: 12,
  title: 'Dụng tâm khám phá thế giới',
  hanzi: '用心发现世界',
  pinyin: 'Yòngxīn fāxiàn shìjiè',
  vi: 'Dụng tâm khám phá thế giới',
  intro: 'Nói về kinh nghiệm, phương pháp và cách nói chuyện. Học 并且, 再……也……, 对于 (so với 关于), sự lặp lại của danh/lượng từ (AA), 相反.',

  dialogue: [
    { who: 'A', name: '王经理', hanzi: '听说这次生意你到现在还没谈成。', pinyin: 'Tīngshuō zhè cì shēngyi nǐ dào xiànzài hái méi tánchéng.', vi: 'Nghe nói vụ làm ăn lần này đến giờ anh vẫn chưa bàn xong.', scene: 'Bài 1 · Giám đốc Vương gặp khó khăn khi làm ăn' },
    { who: 'B', name: '马经理', hanzi: '按我以前的经验，早应该谈成了，这次我也不知道哪儿出了问题。', pinyin: 'Àn wǒ yǐqián de jīngyàn, zǎo yīnggāi tánchéng le, zhè cì wǒ yě bù zhīdào nǎr chūle wèntí.', vi: 'Theo kinh nghiệm trước của tôi lẽ ra bàn xong từ lâu, lần này tôi cũng không biết chỗ nào có vấn đề.' },
    { who: 'A', name: '王经理', hanzi: '有句话叫“规定和经验是死的，人是活的”。当“规定”和“经验”不能解决问题时，建议你改变一下自己的态度和想法。', pinyin: 'Yǒu jù huà jiào "guīdìng hé jīngyàn shì sǐ de, rén shì huó de". Dāng "guīdìng" hé "jīngyàn" bù néng jiějué wèntí shí, jiànyì nǐ gǎibiàn yíxià zìjǐ de tàidù hé xiǎngfǎ.', vi: 'Có câu "quy định và kinh nghiệm là chết, con người là sống". Khi quy định và kinh nghiệm không giải quyết được vấn đề, khuyên anh đổi thái độ và cách nghĩ.' },
    { who: 'B', name: '马经理', hanzi: '很多时候，我都习惯根据过去的经验做事，可惜，经验不是全部都是对的。', pinyin: 'Hěn duō shíhou, wǒ dōu xíguàn gēnjù guòqù de jīngyàn zuò shì, kěxī, jīngyàn bú shì quánbù dōu shì duì de.', vi: 'Nhiều lúc tôi quen làm việc theo kinh nghiệm quá khứ, đáng tiếc kinh nghiệm không phải toàn đúng.' },
    { who: 'A', name: '王经理', hanzi: '遇到不能解决的问题时，我们应该试着走走以前从来没走过的路，也许这样就能找到解决问题的方法了。', pinyin: 'Yùdào bù néng jiějué de wèntí shí, wǒmen yīnggāi shìzhe zǒuzou yǐqián cónglái méi zǒuguo de lù, yěxǔ zhèyàng jiù néng zhǎodào jiějué wèntí de fāngfǎ le.', vi: 'Gặp vấn đề không giải quyết được, ta nên thử đi con đường trước giờ chưa đi, có lẽ vậy sẽ tìm ra cách.' },
    { who: 'B', name: '马经理', hanzi: '好，我再跟同事商量商量，希望能及时发现问题，并且准确地找到解决问题的方法。', pinyin: 'Hǎo, wǒ zài gēn tóngshì shāngliang shāngliang, xīwàng néng jíshí fāxiàn wèntí, bìngqiě zhǔnquè de zhǎodào jiějué wèntí de fāngfǎ.', vi: 'Được, tôi sẽ bàn bạc thêm với đồng nghiệp, mong kịp thời phát hiện vấn đề và tìm chính xác cách giải quyết.' },
    { who: 'A', name: '女儿', hanzi: '妈，您看我刚买的裤子，洗完以后颜色怎么变得这么难看呢？', pinyin: 'Mā, nín kàn wǒ gāng mǎi de kùzi, xǐwán yǐhòu yánsè zěnme biàn de zhème nánkàn ne?', vi: 'Mẹ, mẹ xem cái quần con mới mua, giặt xong sao màu xấu thế?', scene: 'Bài 2 · Cô Cao nói với con gái cách giặt quần áo' },
    { who: 'B', name: '高老师', hanzi: '看来是掉颜色了，你洗的时候在水里加点儿盐就不会这样了。', pinyin: 'Kànlái shì diào yánsè le, nǐ xǐ de shíhou zài shuǐ li jiā diǎnr yán jiù bú huì zhèyàng le.', vi: 'Xem ra là phai màu, con giặt mà cho chút muối vào nước thì không thế.' },
    { who: 'A', name: '女儿', hanzi: '放盐？！盐不是用来做饭的吗？难道它还能让衣服不掉颜色？', pinyin: 'Fàng yán?! Yán bú shì yòng lái zuò fàn de ma? Nándào tā hái néng ràng yīfu bú diào yánsè?', vi: 'Cho muối ư?! Muối chẳng phải để nấu ăn sao? Chẳng lẽ còn khiến quần áo không phai màu?' },
    { who: 'B', name: '高老师', hanzi: '当然。有些衣服第一次洗的时候会掉颜色，其实，有很多方法可以解决这个问题。在水里加勺盐再洗是最简单的方法。用盐水来洗新衣服，这样穿得再久、洗的次数再多，衣服也不容易掉颜色。', pinyin: 'Dāngrán. Yǒuxiē yīfu dì-yī cì xǐ de shíhou huì diào yánsè, qíshí, yǒu hěn duō fāngfǎ kěyǐ jiějué zhège wèntí. Zài shuǐ li jiā sháo yán zài xǐ shì zuì jiǎndān de fāngfǎ. Yòng yánshuǐ lái xǐ xīn yīfu, zhèyàng chuān de zài jiǔ, xǐ de cìshù zài duō, yīfu yě bù róngyì diào yánsè.', vi: 'Tất nhiên. Có quần áo giặt lần đầu bị phai màu, thật ra có nhiều cách giải quyết. Cho một thìa muối vào nước rồi giặt là cách đơn giản nhất. Dùng nước muối giặt đồ mới, như vậy mặc lâu đến đâu, giặt nhiều lần đến mấy cũng khó phai màu.' },
    { who: 'A', name: '女儿', hanzi: '我第一次听说盐有保护衣服颜色的作用，生活中还真有不少课本上无法学到的知识。', pinyin: 'Wǒ dì-yī cì tīngshuō yán yǒu bǎohù yīfu yánsè de zuòyòng, shēnghuó zhōng hái zhēn yǒu bù shǎo kèběn shang wúfǎ xuédào de zhīshi.', vi: 'Lần đầu con nghe muối có tác dụng bảo vệ màu quần áo, trong đời sống đúng là có nhiều kiến thức sách giáo khoa không học được.' },
    { who: 'B', name: '高老师', hanzi: '实际上，很多问题的答案都可以从生活中找到。但这需要你用眼睛去发现，用心去总结。', pinyin: 'Shíjìshang, hěn duō wèntí de dá\'àn dōu kěyǐ cóng shēnghuó zhōng zhǎodào. Dàn zhè xūyào nǐ yòng yǎnjing qù fāxiàn, yòng xīn qù zǒngjié.', vi: 'Thực ra đáp án của nhiều vấn đề có thể tìm trong đời sống. Nhưng cần bạn dùng mắt phát hiện, dùng tâm tổng kết.' },
    { who: 'A', name: '高老师', hanzi: '王教授，今天听完您的这节课，我终于明白为什么您的课那么受学生欢迎了。', pinyin: 'Wáng jiàoshòu, jīntiān tīngwán nín de zhè jié kè, wǒ zhōngyú míngbai wèi shénme nín de kè nàme shòu xuésheng huānyíng le.', vi: 'Giáo sư Vương, hôm nay nghe xong tiết của thầy, tôi cuối cùng hiểu vì sao lớp thầy được sinh viên yêu thích.', scene: 'Bài 3 · Cô Cao học phương pháp giảng dạy của giáo sư Vương' },
    { who: 'B', name: '王教授', hanzi: '谢谢！您能详细谈谈对我的课的看法吗？', pinyin: 'Xièxie! Nín néng xiángxì tántan duì wǒ de kè de kànfǎ ma?', vi: 'Cảm ơn! Cô có thể nói chi tiết nhận xét về lớp của tôi không?' },
    { who: 'A', name: '高老师', hanzi: '我发现您对学生特别了解，而且总是能用最简单的方法把复杂的问题解释清楚，让每个学生都能听懂，这一点真是值得我们好好儿学习。', pinyin: 'Wǒ fāxiàn nín duì xuésheng tèbié liǎojiě, érqiě zǒngshì néng yòng zuì jiǎndān de fāngfǎ bǎ fùzá de wèntí jiěshì qīngchu, ràng měi ge xuésheng dōu néng tīngdǒng, zhè yì diǎn zhēn shì zhídé wǒmen hǎohāor xuéxí.', vi: 'Tôi thấy thầy rất hiểu sinh viên, luôn dùng cách đơn giản nhất giải thích rõ vấn đề phức tạp để mỗi sinh viên đều hiểu; điều này rất đáng để chúng tôi học.' },
    { who: 'B', name: '王教授', hanzi: '哪里哪里，这只是因为我对每个学生的能力水平比较了解。', pinyin: 'Nǎli nǎli, zhè zhǐshì yīnwèi wǒ duì měi ge xuésheng de nénglì shuǐpíng bǐjiào liǎojiě.', vi: 'Đâu có, chỉ vì tôi khá hiểu năng lực trình độ từng sinh viên.' },
    { who: 'A', name: '高老师', hanzi: '那您认为对于老师来说，什么是最难做到的？', pinyin: 'Nà nín rènwéi duìyú lǎoshī lái shuō, shénme shì zuì nán zuòdào de?', vi: 'Vậy thầy cho rằng đối với giáo viên, điều gì khó làm nhất?' },
    { who: 'B', name: '王教授', hanzi: '世界上没有完全相同的叶子，同样地，世界上也没有完全一样的人。所以，在教育学生时，要根据学生的特点选择不同的方法，我想这应该是最不容易做到的。', pinyin: 'Shìjiè shang méiyǒu wánquán xiāngtóng de yèzi, tóngyàng de, shìjiè shang yě méiyǒu wánquán yíyàng de rén. Suǒyǐ, zài jiàoyù xuésheng shí, yào gēnjù xuésheng de tèdiǎn xuǎnzé bù tóng de fāngfǎ, wǒ xiǎng zhè yīnggāi shì zuì bù róngyì zuòdào de.', vi: 'Trên đời không có hai chiếc lá hoàn toàn giống nhau, cũng vậy không có hai người hoàn toàn giống nhau. Nên khi dạy sinh viên phải chọn phương pháp khác nhau theo đặc điểm, tôi nghĩ đó là điều khó làm nhất.' },
    { who: 'A', name: '短文', hanzi: '人人都会使用语言，但是怎么用语言把话说好却是一门艺术。看一个人怎么说话，往往可以比较准确地判断出他是一个什么样的人。有的人心里怎么想，嘴上就怎么说，即使是别人的缺点，他也会直接说出来，这样的人虽然很诚实，但是可能会引起别人的误会；有的人虽然也看到了别人的缺点，但却不会直接指出来，而是通过别的方法来提醒，让他认识到自己的缺点，这样的人会让人觉得更友好。', pinyin: 'Rénrén dōu huì shǐyòng yǔyán, dànshì zěnme yòng yǔyán bǎ huà shuōhǎo què shì yì mén yìshù. Kàn yí ge rén zěnme shuō huà, wǎngwǎng kěyǐ bǐjiào zhǔnquè de pànduàn chū tā shì yí ge shénmeyàng de rén. Yǒude rén xīnli zěnme xiǎng, zuǐ shang jiù zěnme shuō, jíshǐ shì biérén de quēdiǎn, tā yě huì zhíjiē shuō chūlai, zhèyàng de rén suīrán hěn chéngshí, dànshì kěnéng huì yǐnqǐ biérén de wùhuì; yǒude rén suīrán yě kàndàole biérén de quēdiǎn, dàn què bú huì zhíjiē zhǐ chūlai, érshì tōngguò bié de fāngfǎ lái tíxǐng, ràng tā rènshi dào zìjǐ de quēdiǎn, zhèyàng de rén huì ràng rén juéde gèng yǒuhǎo.', vi: 'Ai cũng biết dùng ngôn ngữ, nhưng dùng ngôn ngữ để nói hay lại là một nghệ thuật. Xem một người nói chuyện thế nào thường có thể đoán khá chính xác họ là người thế nào. Có người trong lòng nghĩ sao miệng nói vậy, dù là khuyết điểm của người khác cũng nói thẳng, người như vậy tuy rất thành thật nhưng có thể gây hiểu lầm; có người tuy cũng thấy khuyết điểm của người khác nhưng không chỉ thẳng ra mà dùng cách khác nhắc nhở, để họ nhận ra khuyết điểm của mình, người như vậy khiến người ta thấy thân thiện hơn.', scene: 'Bài 4 · Nghệ thuật nói chuyện' },
    { who: 'A', name: '短文', hanzi: '无论做什么事情，都要注意方法，学习尤其是这样。使用正确的方法，我们做起事来能“事半功倍”，也就是说，能节约时间，用较少的力气，取得更好的效果。相反，如果方法不对，可能花五倍甚至十倍的时间都不能完成任务，结果变成了“事倍功半”。有一点需要提醒大家，别人的方法也许很有效，但是并不一定适合自己。因此，我们应该在听取别人意见的同时，仔细考虑一下，再根据不同的情况选择不同的方法，这样才能达到最好的效果。', pinyin: 'Wúlùn zuò shénme shìqing, dōu yào zhùyì fāngfǎ, xuéxí yóuqí shì zhèyàng. Shǐyòng zhèngquè de fāngfǎ, wǒmen zuò qǐ shì lái néng "shì bàn gōng bèi", yě jiù shì shuō, néng jiéyuē shíjiān, yòng jiào shǎo de lìqi, qǔdé gèng hǎo de xiàoguǒ. Xiāngfǎn, rúguǒ fāngfǎ bú duì, kěnéng huā wǔ bèi shènzhì shí bèi de shíjiān dōu bù néng wánchéng rènwu, jiéguǒ biànchéngle "shì bèi gōng bàn". Yǒu yì diǎn xūyào tíxǐng dàjiā, biérén de fāngfǎ yěxǔ hěn yǒuxiào, dànshì bìng bù yídìng shìhé zìjǐ. Yīncǐ, wǒmen yīnggāi zài tīngqǔ biérén yìjiàn de tóngshí, zǐxì kǎolǜ yíxià, zài gēnjù bù tóng de qíngkuàng xuǎnzé bù tóng de fāngfǎ, zhèyàng cái néng dádào zuì hǎo de xiàoguǒ.', vi: 'Làm việc gì cũng phải chú ý phương pháp, học tập càng như vậy. Dùng phương pháp đúng, ta làm việc có thể "事半功倍" (làm ít được nhiều), tức tiết kiệm thời gian, dùng ít sức hơn mà hiệu quả tốt hơn. Ngược lại nếu phương pháp sai có thể tốn gấp năm, thậm chí gấp mười thời gian mà không xong, kết quả thành "事倍功半" (làm nhiều được ít). Cần nhắc mọi người: cách của người khác có thể rất hiệu quả nhưng chưa chắc hợp với mình. Vì vậy khi nghe ý kiến người khác ta nên cân nhắc kỹ, rồi tùy tình huống chọn phương pháp khác nhau, như vậy mới đạt hiệu quả tốt nhất.', scene: 'Bài 5 · Làm ít được nhiều' },
  ],
  dialogueClips: [
    { label: '12-1 · Giám đốc Vương và giám đốc Mã', src: A + 'l12-1.mp3' },
    { label: '12-2 · Cô Cao và con gái', src: A + 'l12-2.mp3' },
    { label: '12-3 · Cô Cao và giáo sư Vương', src: A + 'l12-3.mp3' },
    { label: '12-4 · Nghệ thuật nói chuyện', src: A + 'l12-4.mp3' },
    { label: '12-5 · Làm ít được nhiều', src: A + 'l12-5.mp3' },
  ],
  dialogueTip: '<b>并且</b>: hơn nữa, và. <b>再……也……</b>: dù có… đến đâu cũng…. <b>对于</b>: đối với (nhấn mạnh đối tượng). <b>人人 / 件件 / 年年</b>: lặp danh/lượng từ = mỗi. <b>相反</b>: ngược lại.',
  slowSay: '用心发现世界',

  vocab: [
    { hanzi: '规定', pinyin: 'guīdìng', pos: 'danh từ', meaning: 'quy định', han_viet: 'quy định' },
    { hanzi: '死', pinyin: 'sǐ', pos: 'tính từ', meaning: 'cố định, cứng nhắc', han_viet: 'tử' },
    { hanzi: '可惜', pinyin: 'kěxī', pos: 'tính từ', meaning: 'đáng tiếc', han_viet: 'khả tích' },
    { hanzi: '全部', pinyin: 'quánbù', pos: 'danh từ', meaning: 'toàn bộ, tất cả', han_viet: 'toàn bộ' },
    { hanzi: '也许', pinyin: 'yěxǔ', pos: 'phó từ', meaning: 'có lẽ, may ra', han_viet: 'dã hử' },
    { hanzi: '商量', pinyin: 'shāngliang', pos: 'động từ', meaning: 'thương lượng, bàn bạc', han_viet: 'thương lượng' },
    { hanzi: '并且', pinyin: 'bìngqiě', pos: 'liên từ', meaning: 'đồng thời, và', han_viet: 'tịnh thả' },
    { hanzi: '盐', pinyin: 'yán', pos: 'danh từ', meaning: 'muối', han_viet: 'diêm' },
    { hanzi: '勺(子)', pinyin: 'sháo(zi)', pos: 'danh từ', meaning: 'cái muôi, cái thìa', han_viet: 'chước' },
    { hanzi: '保护', pinyin: 'bǎohù', pos: 'động từ', meaning: 'bảo vệ', han_viet: 'bảo hộ' },
    { hanzi: '作用', pinyin: 'zuòyòng', pos: 'danh từ', meaning: 'tác dụng', han_viet: 'tác dụng' },
    { hanzi: '无法', pinyin: 'wúfǎ', pos: 'động từ', meaning: 'không thể, không có cách gì', han_viet: 'vô pháp' },
    { hanzi: '节', pinyin: 'jié', pos: 'lượng từ', meaning: 'tiết (học)', han_viet: 'tiết' },
    { hanzi: '详细', pinyin: 'xiángxì', pos: 'tính từ', meaning: 'chi tiết, tỉ mỉ', han_viet: 'tường tế' },
    { hanzi: '解释', pinyin: 'jiěshì', pos: 'động từ', meaning: 'giải thích', han_viet: 'giải thích' },
    { hanzi: '对于', pinyin: 'duìyú', pos: 'giới từ', meaning: 'đối với', han_viet: 'đối vu' },
    { hanzi: '叶子', pinyin: 'yèzi', pos: 'danh từ', meaning: 'lá cây', han_viet: 'diệp tử' },
    { hanzi: '教育', pinyin: 'jiàoyù', pos: 'động từ', meaning: 'giáo dục, dạy dỗ', han_viet: 'giáo dục' },
    { hanzi: '使用', pinyin: 'shǐyòng', pos: 'động từ', meaning: 'sử dụng', han_viet: 'sử dụng' },
    { hanzi: '语言', pinyin: 'yǔyán', pos: 'danh từ', meaning: 'ngôn ngữ', han_viet: 'ngữ ngôn' },
    { hanzi: '直接', pinyin: 'zhíjiē', pos: 'tính từ', meaning: 'trực tiếp, thẳng', han_viet: 'trực tiếp' },
    { hanzi: '引起', pinyin: 'yǐnqǐ', pos: 'động từ', meaning: 'gây ra, dẫn đến', han_viet: 'dẫn khởi' },
    { hanzi: '误会', pinyin: 'wùhuì', pos: 'danh từ', meaning: 'sự hiểu lầm', han_viet: 'ngộ hội' },
    { hanzi: '友好', pinyin: 'yǒuhǎo', pos: 'tính từ', meaning: 'thân thiện', han_viet: 'hữu hảo' },
    { hanzi: '事半功倍', pinyin: 'shì bàn gōng bèi', pos: 'thành ngữ', meaning: 'làm chơi ăn thật (làm ít hiệu quả nhiều)', han_viet: 'sự bán công bội' },
    { hanzi: '节约', pinyin: 'jiéyuē', pos: 'động từ', meaning: 'tiết kiệm', han_viet: 'tiết ước' },
    { hanzi: '力气', pinyin: 'lìqi', pos: 'danh từ', meaning: 'sức lực, hơi sức', han_viet: 'lực khí' },
    { hanzi: '相反', pinyin: 'xiāngfǎn', pos: 'liên từ/tính từ', meaning: 'trái lại, ngược lại', han_viet: 'tương phản' },
    { hanzi: '任务', pinyin: 'rènwu', pos: 'danh từ', meaning: 'nhiệm vụ', han_viet: 'nhiệm vụ' },
    { hanzi: '意见', pinyin: 'yìjiàn', pos: 'danh từ', meaning: 'ý kiến', han_viet: 'ý kiến' },
    { hanzi: '仔细', pinyin: 'zǐxì', pos: 'tính từ', meaning: 'thận trọng, kỹ lưỡng', han_viet: 'tử tế' },
    { hanzi: '达到', pinyin: 'dádào', pos: 'động từ', meaning: 'đạt được', han_viet: 'đạt đáo' },
  ],

  sections: [
    {
      kind: 'examples', label: '并且', title: '并且 (hơn nữa, và)',
      intro: 'Liên từ 并且 nối các động từ hay tính từ song song, chỉ nhiều hành động đồng thời hoặc nhiều tính chất cùng tồn tại; cũng nối câu và diễn tả ý tiến thêm một bước.',
      groups: [{ label: 'Ví dụ', items: [['他做事很认真，并且有丰富的经验，让他负责很合适。', 'Tā zuò shì hěn rènzhēn, bìngqiě yǒu fēngfù de jīngyàn, ràng tā fùzé hěn héshì.', 'Anh làm việc rất nghiêm túc, hơn nữa có kinh nghiệm phong phú, để anh phụ trách rất hợp.'], ['这种植物开的花比普通的花大很多，并且特别漂亮。', 'Zhè zhǒng zhíwù kāi de huā bǐ pǔtōng de huā dà hěn duō, bìngqiě tèbié piàoliang.', 'Hoa của loại cây này lớn hơn hoa thường nhiều, lại đặc biệt đẹp.'], ['这房子家具全，电视、空调、冰箱都很新，并且价格也便宜，真的很值得考虑。', 'Zhè fángzi jiājù quán, diànshì, kōngtiáo, bīngxiāng dōu hěn xīn, bìngqiě jiàgé yě piányi, zhēn de hěn zhídé kǎolǜ.', 'Nhà này đủ đồ, ti vi, điều hòa, tủ lạnh đều mới, giá lại rẻ, thật đáng cân nhắc.'], ['希望能及时发现问题，并且准确地找到解决问题的方法。', 'Xīwàng néng jíshí fāxiàn wèntí, bìngqiě zhǔnquè de zhǎodào jiějué wèntí de fāngfǎ.', 'Mong kịp thời phát hiện vấn đề và tìm chính xác cách giải quyết.']] }],
    },
    {
      kind: 'examples', label: '再……也……', title: '再……也…… (dù… đến đâu cũng…)',
      intro: 'Cấu trúc thường dùng trong câu giả thiết nhượng bộ. 再 mang nghĩa "dù, dù thế nào đi nữa"; sau nó có thể là động từ, tính từ, câu…',
      groups: [{ label: 'Ví dụ', items: [['事情已经发生了，你再后悔也无法改变，别伤心了。', 'Shìqing yǐjīng fāshēng le, nǐ zài hòuhuǐ yě wúfǎ gǎibiàn, bié shāng xīn le.', 'Việc đã xảy ra, bạn có hối hận đến đâu cũng không đổi được, đừng buồn.'], ['用盐水来洗新衣服，这样穿得再久、洗的次数再多，衣服也不容易掉颜色。', 'Yòng yánshuǐ lái xǐ xīn yīfu, zhèyàng chuān de zài jiǔ, xǐ de cìshù zài duō, yīfu yě bù róngyì diào yánsè.', 'Dùng nước muối giặt đồ mới, mặc lâu đến đâu, giặt nhiều đến mấy cũng khó phai màu.'], ['如果我们有什么看法，不管别人再怎么不同意、不支持，也应该说出来，让别人知道我们的想法和态度。', 'Rúguǒ wǒmen yǒu shénme kànfǎ, bùguǎn biérén zài zěnme bù tóngyì, bù zhīchí, yě yīnggāi shuō chūlai, ràng biérén zhīdào wǒmen de xiǎngfǎ hé tàidù.', 'Nếu ta có quan điểm gì, dù người khác không đồng ý, không ủng hộ đến đâu cũng nên nói ra.']] }],
    },
    {
      kind: 'examples', label: '对于 – 关于', title: '对于 (đối với) và so sánh với 关于',
      intro: '对于: giới từ chỉ đối tượng mà thái độ/tình huống nhắm tới; "对于……" đứng trước hoặc sau chủ ngữ. Khác 关于: 对于 nhấn mạnh đối tượng (thường là bên chịu tác động), 关于 nhấn mạnh phạm vi, giới thiệu sự vật liên quan. 对于 đứng trước hoặc sau chủ ngữ, 关于 chỉ trước chủ ngữ. 关于 có thể xuất hiện trong tên sách/bài báo (《关于中国经济的几个问题》), 对于 thì không.',
      groups: [{ label: 'Ví dụ', items: [['对于这件事，我跟大家的看法不同。', 'Duìyú zhè jiàn shì, wǒ gēn dàjiā de kànfǎ bù tóng.', 'Đối với việc này, quan điểm của tôi khác mọi người.'], ['对于中国人来说，春节是一年之中最重要的节日。', 'Duìyú Zhōngguó rén lái shuō, Chūnjié shì yì nián zhī zhōng zuì zhòngyào de jiérì.', 'Với người Trung Quốc, Tết là ngày lễ quan trọng nhất trong năm.'], ['对于每个需要帮助的人，他都会热情、耐心地提供帮助。', 'Duìyú měi ge xūyào bāngzhù de rén, tā dōu huì rèqíng, nàixīn de tígōng bāngzhù.', 'Đối với mỗi người cần giúp, anh đều nhiệt tình kiên nhẫn giúp đỡ.'], ['关于什么是幸福，每个人都有自己不同的看法。', 'Guānyú shénme shì xìngfú, měi ge rén dōu yǒu zìjǐ bù tóng de kànfǎ.', 'Về việc hạnh phúc là gì, mỗi người có cách nhìn riêng.']] }],
    },
    {
      kind: 'examples', label: 'AA · 相反', title: 'Lặp danh/lượng từ (AA) và 相反',
      intro: 'Danh từ/lượng từ lặp dạng "AA" có nghĩa "mỗi" (人人, 天天, 件件, 年年, 本本); làm chủ ngữ, định ngữ của chủ ngữ và trạng ngữ, không làm tân ngữ. 相反: liên từ ở đầu hoặc giữa vế sau chỉ chuyển ý hoặc tiến thêm; tính từ "trái ngược" (làm vị ngữ, hoặc bổ nghĩa danh từ phải có 的).',
      groups: [
        { label: 'AA', items: [['人人都会使用语言，但是怎么用语言把话说好却是一门艺术。', 'Rénrén dōu huì shǐyòng yǔyán, dànshì zěnme yòng yǔyán bǎ huà shuōhǎo què shì yì mén yìshù.', 'Ai cũng biết dùng ngôn ngữ, nhưng dùng thế nào để nói hay lại là một nghệ thuật.'], ['白先生天天都去那家咖啡馆坐一会儿，因为他觉得，工作了一天，只有安静的地方才能让他得到放松。', 'Bái xiānsheng tiāntiān dōu qù nà jiā kāfēiguǎn zuò yíhuìr, yīnwèi tā juéde, gōngzuòle yì tiān, zhǐyǒu ānjìng de dìfang cái néng ràng tā dédào fàngsōng.', 'Ông Bạch ngày nào cũng đến quán cà phê đó ngồi một lát, vì ông thấy làm việc cả ngày chỉ nơi yên tĩnh mới giúp thư giãn.'], ['做好小事是完成大事的第一步，因此，件件小事都应该被看成是一次学习的机会。', 'Zuòhǎo xiǎo shì shì wánchéng dà shì de dì-yī bù, yīncǐ, jiànjiàn xiǎo shì dōu yīnggāi bèi kànchéng shì yí cì xuéxí de jīhuì.', 'Làm tốt việc nhỏ là bước đầu hoàn thành việc lớn, nên mỗi việc nhỏ đều nên được coi là cơ hội học.']] },
        { label: '相反', items: [['如果还是使用以前的办法，不但不能解决任何问题，相反，会使问题变得更复杂。', 'Rúguǒ háishi shǐyòng yǐqián de bànfǎ, búdàn bù néng jiějué rènhé wèntí, xiāngfǎn, huì shǐ wèntí biàn de gèng fùzá.', 'Nếu vẫn dùng cách cũ thì không những không giải quyết được gì, trái lại làm vấn đề phức tạp hơn.'], ['如果方法不对，可能花五倍甚至十倍的时间都不能完成任务，结果变成了“事倍功半”。', 'Rúguǒ fāngfǎ bú duì, kěnéng huā wǔ bèi shènzhì shí bèi de shíjiān dōu bù néng wánchéng rènwu, jiéguǒ biànchéngle "shì bèi gōng bàn".', 'Nếu phương pháp sai có thể tốn gấp năm gấp mười thời gian cũng không xong, thành "làm nhiều được ít".'], ['调查结果和他们想的几乎完全相反，他们不得不改变原来的计划。', 'Diàochá jiéguǒ hé tāmen xiǎng de jīhū wánquán xiāngfǎn, tāmen bù dé bù gǎibiàn yuánlái de jìhuà.', 'Kết quả khảo sát gần như trái hẳn dự đoán, họ buộc phải đổi kế hoạch.']] },
      ],
    },
  ],

  notes: [
    { title: '并且', body: 'Liên từ nối động từ/tính từ song song hoặc nối câu, diễn tả ý tiến thêm: 他做事很认真，并且有丰富的经验。', say: '并且准确地找到解决问题的方法' },
    { title: '再……也……', body: 'Câu giả thiết nhượng bộ: 再 = dù…đến đâu; sau 也 là kết quả không đổi. 你再后悔也无法改变。', say: '你再后悔也无法改变' },
    { title: '对于', body: 'Giới từ chỉ đối tượng, đứng trước hoặc sau chủ ngữ. So với 关于: 关于 chỉ phạm vi, chỉ đứng trước chủ ngữ và có thể dùng trong tên sách.', say: '对于中国人来说，春节是最重要的节日' },
    { title: 'Lặp danh/lượng từ (AA)', body: 'AA = "mỗi": 人人, 天天, 件件, 年年; làm chủ ngữ, định ngữ của chủ ngữ, trạng ngữ — không làm tân ngữ.', say: '人人都会使用语言' },
    { title: '相反', body: 'Liên từ (ở đầu/giữa vế sau): trái lại. Tính từ: trái ngược, làm vị ngữ hoặc bổ nghĩa danh từ (phải có 的).', say: '相反，会使问题变得更复杂' },
    { title: 'Văn hóa: 孔子“因材施教”', body: 'Khổng Tử dạy theo năng khiếu: dựa vào đặc điểm từng học trò mà chọn cách dạy khác nhau — đúng tinh thần câu "thế giới không có hai chiếc lá giống nhau" trong bài.', say: '因材施教' },
  ],

  writeChars: ['规', '盐', '勺', '护', '释', '叶', '误', '节'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa',
      items: [
        { q: '王经理建议马经理怎么做？', hint: '改变自己的态度和想法，试着走以前没走过的路，找新的方法。' },
        { q: '哪种方法可以保护衣服不掉颜色？', hint: '洗的时候在水里加点儿盐，用盐水洗新衣服。' },
        { q: '高老师从“盐可以保护衣服颜色”想说明什么？', hint: '很多问题的答案可以从生活中找到，需要用眼睛去发现，用心去总结。' },
        { q: '高老师认为王教授上课成功有哪些方面的原因？', hint: '对学生特别了解，能用最简单的方法把复杂的问题解释清楚。' },
        { q: '王教授认为对老师来说什么最难做到？', hint: '根据学生的特点选择不同的方法。' },
        { q: '课文中提到了几种说话方式？', hint: '两种：想什么说什么、直接指出缺点；不直接指出而是用别的方法提醒。' },
        { q: '什么是“事半功倍”？对别人的意见应该是什么态度？', hint: '节约时间、用较少力气取得更好效果；听取意见的同时仔细考虑，再根据情况选择方法。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: kể một kinh nghiệm sống nhỏ mà bạn phát hiện', hint: '用 并且、再……也……、对于、相反、人人/天天 等结构说一件生活中发现的小知识。' },
      ],
    },
  ],

  sentences: [
    { parts: ['规定', '和', '经验', '是', '死', '的', '人', '是', '活', '的'], pinyin: 'Guīdìng hé jīngyàn shì sǐ de, rén shì huó de.', vi: 'Quy định và kinh nghiệm là chết, con người là sống.' },
    { parts: ['在', '水', '里', '加', '勺', '盐', '再', '洗'], pinyin: 'Zài shuǐ li jiā sháo yán zài xǐ.', vi: 'Cho một thìa muối vào nước rồi giặt.' },
    { parts: ['世界', '上', '没有', '完全', '相同', '的', '叶子'], pinyin: 'Shìjiè shang méiyǒu wánquán xiāngtóng de yèzi.', vi: 'Trên đời không có hai chiếc lá hoàn toàn giống nhau.' },
    { parts: ['人人', '都', '会', '使用', '语言'], pinyin: 'Rénrén dōu huì shǐyòng yǔyán.', vi: 'Ai cũng biết dùng ngôn ngữ.' },
    { parts: ['使用', '正确', '的', '方法', '能', '事半功倍'], pinyin: 'Shǐyòng zhèngquè de fāngfǎ néng shì bàn gōng bèi.', vi: 'Dùng phương pháp đúng sẽ làm ít được nhiều.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 引起 · B 也许 · C 仔细 · D 作用 · E 可惜. Gõ chữ cái A–E.',
      items: [
        { prompt: '她表示要放弃这个去国外留学的机会，同学们都觉得很（ ）。', answer: 'E', gloss: '可惜' }, { prompt: '如果你觉得心烦，可以吃点儿蛋糕或者巧克力，这些甜的东西（ ）会给你带来好心情。', answer: 'B', gloss: '也许' },
        { prompt: '现在网上银行的（ ）越来越大。有了它，网上购物就方便多了，还可以在网上交水费、电费等。', answer: 'D', gloss: '作用' }, { prompt: '你现在做出的每一个决定都有可能影响到你的将来。所以，做决定之前最好（ ）考虑一下。', answer: 'C', gloss: '仔细' },
        { prompt: '事情的原因和结果往往是互相联系的。一定的原因会（ ）一定的结果，有时候一件事情的结果可能又是另外一件事情的原因。', answer: 'A', gloss: '引起' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 详细 · B 解释 · C 商量 · D 力气 · E 直接. Gõ chữ cái A–E.',
      items: [
        { prompt: '咱们在这儿休息一会儿吧，我没（ ）爬了。 一看就知道你不经常锻炼。', answer: 'D', gloss: '力气' }, { prompt: '刚才手机没电了，听说你打电话找我了，有什么事吗？ 大家在教室（ ）晚会节目的事情呢，就差你了。', answer: 'C', gloss: '商量' },
        { prompt: '经理，新的计划发您信箱了，您看了吗？ 内容太简单，不够（ ），明天我们得再开会商量商量。', answer: 'A', gloss: '详细' }, { prompt: '你有没有李律师的电话号码？我想问他几个法律方面的问题。 有，我发到你手机上，你（ ）跟他联系就行。', answer: 'E', gloss: '直接' },
        { prompt: '怎么样？事情解决了吧？ 对，我向那位顾客（ ）了这次不能及时送货的原因，她表示可以理解。', answer: 'B', gloss: '解释' },
      ],
    },
    {
      title: 'Giáo trình 比一比 · 对于 / 关于 (gõ từ)',
      hint: 'Gõ 对于 hoặc 关于 theo đáp án sách.',
      items: [
        { prompt: '（ ）怎样提高中文阅读能力，这一学习方法实践证明是有效的。', answer: '关于', gloss: '关于' },
        { prompt: '现在人们（ ）自然环境越来越注意保护了。', answer: '对于', gloss: '对于' },
        { prompt: '昨天在报纸上看到一篇（ ）这位明星的新闻，才知道她竟然还只是一位在校大学生。', answer: '关于', gloss: '关于' },
      ],
    },
  ],
}
