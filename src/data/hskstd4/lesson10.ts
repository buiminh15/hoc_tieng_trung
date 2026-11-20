import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 4 (Thượng), Bài 10: 幸福的标准 (sách trang 124–135).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách, dịch hội thoại do app tự thêm.
 * Nghe: 10-1…10-5. Bài tập: 比一比/练习 2/扩展, đáp án theo "HSK4-1-BT" trang 10–11.
 */

const A = '/audio/hsk-std4/'

export const hskStd4Lesson10: Lesson = {
  id: 10,
  title: 'Tiêu chuẩn của hạnh phúc',
  hanzi: '幸福的标准',
  pinyin: 'Xìngfú de biāozhǔn',
  vi: 'Tiêu chuẩn của hạnh phúc',
  intro: 'Nói về hạnh phúc, nghề nghiệp và tiền bạc. Học 不过 (so với 但是), 确实, 在……看来, 由于, 比如.',

  dialogue: [
    { who: 'A', name: '孙月', hanzi: '礼拜天有空儿吗？陪我去逛街怎么样？我想去给丈夫买个生日礼物。', pinyin: 'Lǐbàitiān yǒu kòngr ma? Péi wǒ qù guàng jiē zěnmeyàng? Wǒ xiǎng qù gěi zhàngfu mǎi ge shēngrì lǐwù.', vi: 'Chủ nhật rảnh không? Đi dạo phố với tôi nhé? Tôi muốn mua quà sinh nhật cho chồng.', scene: 'Bài 1 · Tôn Nguyệt và Vương Tĩnh nói về cuộc sống của Vương Tĩnh' },
    { who: 'B', name: '王静', hanzi: '我可能去不了，最近事情多。', pinyin: 'Wǒ kěnéng qù bu liǎo, zuìjìn shìqing duō.', vi: 'Có lẽ tôi không đi được, dạo này nhiều việc.' },
    { who: 'A', name: '孙月', hanzi: '你最近是不是工作特别忙？', pinyin: 'Nǐ zuìjìn shì bu shì gōngzuò tèbié máng?', vi: 'Dạo này bạn có phải công việc đặc biệt bận?' },
    { who: 'B', name: '王静', hanzi: '我现在上有老，下有小。除了工作以外，家里还有母亲和儿子需要照顾。', pinyin: 'Wǒ xiànzài shàng yǒu lǎo, xià yǒu xiǎo. Chúle gōngzuò yǐwài, jiā li hái yǒu mǔqin hé érzi xūyào zhàogù.', vi: 'Giờ tôi trên có già, dưới có trẻ. Ngoài công việc, ở nhà còn mẹ và con trai cần chăm sóc.' },
    { who: 'A', name: '孙月', hanzi: '真是辛苦啊！你最近脸色不太好，是不是哪儿不舒服啊？要注意身体啊。', pinyin: 'Zhēn shì xīnkǔ a! Nǐ zuìjìn liǎnsè bú tài hǎo, shì bu shì nǎr bù shūfu a? Yào zhùyì shēntǐ a.', vi: 'Vất vả thật! Dạo này sắc mặt bạn không tốt, có phải khó chịu chỗ nào không? Phải chú ý sức khỏe.' },
    { who: 'B', name: '王静', hanzi: '没事儿，谢谢！不过现在我很幸福，因为在母亲面前我可以做一个永远长不大的孩子；在孩子面前我又是个能照顾他的母亲，这让我有了努力的方向。', pinyin: 'Méi shìr, xièxie! Búguò xiànzài wǒ hěn xìngfú, yīnwèi zài mǔqin miànqián wǒ kěyǐ zuò yí ge yǒngyuǎn zhǎng bu dà de háizi; zài háizi miànqián wǒ yòu shì ge néng zhàogù tā de mǔqin, zhè ràng wǒ yǒule nǔlì de fāngxiàng.', vi: 'Không sao, cảm ơn! Nhưng giờ tôi rất hạnh phúc, vì trước mẹ tôi có thể làm đứa trẻ mãi không lớn; trước con tôi lại là người mẹ chăm sóc con, điều này cho tôi phương hướng để cố gắng.' },
    { who: 'A', name: '高老师', hanzi: '你看人家王老师，刚来这儿工作三年就当了教授，还有个好妻子，真让人羡慕！', pinyin: 'Nǐ kàn rénjiā Wáng lǎoshī, gāng lái zhèr gōngzuò sān nián jiù dāngle jiàoshòu, hái yǒu ge hǎo qīzi, zhēn ràng rén xiànmù!', vi: 'Bạn xem thầy Vương, mới đến làm ba năm đã làm giáo sư, còn có vợ tốt, thật đáng ngưỡng mộ!', scene: 'Bài 2 · Cô Cao và thầy Lý nói về hạnh phúc' },
    { who: 'B', name: '李老师', hanzi: '其实，你在别人眼中也是很幸福的，只是你自己没有发现。', pinyin: 'Qíshí, nǐ zài biérén yǎn zhōng yě shì hěn xìngfú de, zhǐshì nǐ zìjǐ méiyǒu fāxiàn.', vi: 'Thật ra trong mắt người khác bạn cũng rất hạnh phúc, chỉ là bạn tự không nhận ra.' },
    { who: 'A', name: '高老师', hanzi: '是吗？我哪能跟王老师比啊？', pinyin: 'Shì ma? Wǒ nǎ néng gēn Wáng lǎoshī bǐ a?', vi: 'Vậy sao? Tôi đâu so được với thầy Vương?' },
    { who: 'B', name: '李老师', hanzi: '你有一个漂亮的女儿，还那么优秀，硕士毕业后就当了翻译。', pinyin: 'Nǐ yǒu yí ge piàoliang de nǚ\'ér, hái nàme yōuxiù, shuòshì bì yè hòu jiù dāngle fānyì.', vi: 'Bạn có cô con gái xinh đẹp, lại xuất sắc, tốt nghiệp thạc sĩ là làm phiên dịch.' },
    { who: 'A', name: '高老师', hanzi: '我女儿确实不错，记得她刚拿到第一个月工资时，就兴奋地拉着我和她爸俩去商场，给我们买礼物，那时我和她爸心里别提多美了！', pinyin: 'Wǒ nǚ\'ér quèshí búcuò, jìde tā gāng nádào dì-yī ge yuè gōngzī shí, jiù xīngfèn de lāzhe wǒ hé tā bà liǎ qù shāngchǎng, gěi wǒmen mǎi lǐwù, nà shí wǒ hé tā bà xīnli biétí duō měi le!', vi: 'Con gái tôi đúng là không tệ, nhớ lúc nhận lương tháng đầu, con háo hức kéo hai vợ chồng tôi đến trung tâm thương mại mua quà cho chúng tôi, lúc ấy trong lòng tôi và bố nó sướng vô cùng!' },
    { who: 'B', name: '李老师', hanzi: '所以说每个人有每个人的生活，不用羡慕别人。你羡慕别人的时候，他们可能也正在羡慕你呢。', pinyin: 'Suǒyǐ shuō měi ge rén yǒu měi ge rén de shēnghuó, búyòng xiànmù biérén. Nǐ xiànmù biérén de shíhou, tāmen kěnéng yě zhèngzài xiànmù nǐ ne.', vi: 'Nên nói mỗi người có cuộc sống riêng, không cần ngưỡng mộ người khác. Khi bạn ngưỡng mộ người ta, họ có thể cũng đang ngưỡng mộ bạn.' },
    { who: 'A', name: '小雨', hanzi: '时间过得真快，马上就要毕业了。毕业后你打算做什么？', pinyin: 'Shíjiān guò de zhēn kuài, mǎshàng jiù yào bì yè le. Bì yè hòu nǐ dǎsuàn zuò shénme?', vi: 'Thời gian trôi nhanh thật, sắp tốt nghiệp rồi. Tốt nghiệp bạn định làm gì?', scene: 'Bài 3 · Tiểu Vũ và Tiểu Hạ nói chuyện tìm việc' },
    { who: 'B', name: '小夏', hanzi: '我还没想好呢，正想听听你的建议。你觉得在选择职业时，收入重要吗？', pinyin: 'Wǒ hái méi xiǎnghǎo ne, zhèng xiǎng tīngting nǐ de jiànyì. Nǐ juéde zài xuǎnzé zhíyè shí, shōurù zhòngyào ma?', vi: 'Tôi chưa nghĩ kỹ, đang muốn nghe ý kiến bạn. Bạn thấy khi chọn nghề thu nhập quan trọng không?' },
    { who: 'A', name: '小雨', hanzi: '在我看来，赚钱多少不是最重要的，兴趣才是关键。只有做自己喜欢的事，才会觉得幸福，将来也会有更好的发展。', pinyin: 'Zài wǒ kànlái, zhuàn qián duōshao bú shì zuì zhòngyào de, xìngqù cái shì guānjiàn. Zhǐyǒu zuò zìjǐ xǐhuan de shì, cái huì juéde xìngfú, jiānglái yě huì yǒu gèng hǎo de fāzhǎn.', vi: 'Theo tôi, kiếm được bao nhiêu không quan trọng nhất, hứng thú mới là then chốt. Chỉ khi làm điều mình thích mới thấy hạnh phúc, tương lai cũng phát triển tốt hơn.' },
    { who: 'B', name: '小夏', hanzi: '我也这么想。如果我带着热情去做自己喜欢的工作，就不会感到累。不过，现在什么东西都那么贵，生活压力太大了，没有钱也不会过得幸福啊！', pinyin: 'Wǒ yě zhème xiǎng. Rúguǒ wǒ dàizhe rèqíng qù zuò zìjǐ xǐhuan de gōngzuò, jiù bú huì gǎndào lèi. Búguò, xiànzài shénme dōngxi dōu nàme guì, shēnghuó yālì tài dà le, méiyǒu qián yě bú huì guò de xìngfú a!', vi: 'Tôi cũng nghĩ vậy. Nếu tôi làm công việc mình thích với nhiệt huyết thì sẽ không thấy mệt. Nhưng giờ cái gì cũng đắt, áp lực cuộc sống lớn quá, không có tiền cũng không hạnh phúc được!' },
    { who: 'A', name: '小雨', hanzi: '幸福其实很简单，它不是只要有钱就能买到的。我觉得工作结束回家后，洗个热水澡，然后躺在床上看看书、听听音乐，困了睡睡觉，就很幸福。', pinyin: 'Xìngfú qíshí hěn jiǎndān, tā bú shì zhǐyào yǒu qián jiù néng mǎidào de. Wǒ juéde gōngzuò jiéshù huí jiā hòu, xǐ ge rè shuǐ zǎo, ránhòu tǎng zài chuáng shang kànkan shū, tīngting yīnyuè, kùnle shuìshui jiào, jiù hěn xìngfú.', vi: 'Hạnh phúc thật ra rất đơn giản, không phải chỉ có tiền là mua được. Tôi thấy làm việc xong về nhà, tắm nước nóng rồi nằm trên giường đọc sách nghe nhạc, buồn ngủ thì ngủ là rất hạnh phúc.' },
    { who: 'B', name: '小夏', hanzi: '你说的也对。如果能找到一份自己既感兴趣，收入又不错的工作，那就最好了。', pinyin: 'Nǐ shuō de yě duì. Rúguǒ néng zhǎodào yí fèn zìjǐ jì gǎn xìngqù, shōurù yòu búcuò de gōngzuò, nà jiù zuì hǎo le.', vi: 'Bạn nói cũng đúng. Nếu tìm được việc vừa thích vừa thu nhập khá thì tốt nhất.' },
    { who: 'A', name: '短文', hanzi: '有的人希望穿得再好一些，房子再大一些，认为经济条件越好人就越幸福。其实有很多富人过得并不愉快，而有些穷人却过得很快乐。有钱不一定幸福，因为很多东西都是不能用钱买到的，例如时间、感情、生活经历等。但是，从另外一个方面看，如果没钱，也很难过得幸福。当你生病了，如果由于缺钱而不能及时去看医生，你的健康都很难得到保证，就更别说幸福了。', pinyin: 'Yǒude rén xīwàng chuān de zài hǎo yìxiē, fángzi zài dà yìxiē, rènwéi jīngjì tiáojiàn yuè hǎo rén jiù yuè xìngfú. Qíshí yǒu hěn duō fùrén guò de bìng bù yúkuài, ér yǒuxiē qióngrén què guò de hěn kuàilè. Yǒu qián bù yídìng xìngfú, yīnwèi hěn duō dōngxi dōu shì bù néng yòng qián mǎidào de, lìrú shíjiān, gǎnqíng, shēnghuó jīnglì děng. Dànshì, cóng lìngwài yí ge fāngmiàn kàn, rúguǒ méi qián, yě hěn nán guò de xìngfú. Dāng nǐ shēng bìng le, rúguǒ yóuyú quē qián ér bù néng jíshí qù kàn yīshēng, nǐ de jiànkāng dōu hěn nán dédào bǎozhèng, jiù gèng bié shuō xìngfú le.', vi: 'Có người mong mặc đẹp hơn, nhà to hơn, cho rằng điều kiện kinh tế càng tốt người càng hạnh phúc. Thật ra nhiều người giàu sống không vui, còn có người nghèo lại sống rất vui. Có tiền chưa chắc hạnh phúc vì nhiều thứ không mua được bằng tiền như thời gian, tình cảm, trải nghiệm sống. Nhưng nhìn từ mặt khác, không có tiền cũng khó hạnh phúc. Khi bạn bệnh, nếu vì thiếu tiền mà không kịp đi khám thì sức khỏe còn khó bảo đảm, huống chi hạnh phúc.', scene: 'Bài 4 · Tiền và hạnh phúc' },
    { who: 'A', name: '短文', hanzi: '什么是幸福？有的人认为，工资高、能赚钱就是幸福；有的人认为，心情放松、身体健康才是幸福；也有人认为，能帮助别人就是一种幸福。还有人说，小时候幸福是一件东西，比如一块橡皮、一块糖，得到了就很幸福；长大后幸福是一种态度，生活的态度决定了我们幸福感的高低。那怎样才算是真正的幸福？其实，幸福并没有一个标准答案，每个人对幸福都有不同的理解。不管你认为幸福是什么，只要你用心去找，就一定能发现它。', pinyin: 'Shénme shì xìngfú? Yǒude rén rènwéi, gōngzī gāo, néng zhuàn qián jiù shì xìngfú; yǒude rén rènwéi, xīnqíng fàngsōng, shēntǐ jiànkāng cái shì xìngfú; yě yǒu rén rènwéi, néng bāngzhù biérén jiù shì yì zhǒng xìngfú. Hái yǒu rén shuō, xiǎo shíhou xìngfú shì yí jiàn dōngxi, bǐrú yí kuài xiàngpí, yí kuài táng, dédàole jiù hěn xìngfú; zhǎngdà hòu xìngfú shì yì zhǒng tàidù, shēnghuó de tàidù juédìngle wǒmen xìngfúgǎn de gāodī. Nà zěnyàng cái suàn shì zhēnzhèng de xìngfú? Qíshí, xìngfú bìng méiyǒu yí ge biāozhǔn dá\'àn, měi ge rén duì xìngfú dōu yǒu bù tóng de lǐjiě. Bùguǎn nǐ rènwéi xìngfú shì shénme, zhǐyào nǐ yòngxīn qù zhǎo, jiù yídìng néng fāxiàn tā.', vi: 'Hạnh phúc là gì? Có người cho rằng lương cao, kiếm được tiền là hạnh phúc; có người cho rằng tâm trạng thư giãn, sức khỏe tốt mới là hạnh phúc; cũng có người cho giúp đỡ người khác là một loại hạnh phúc. Lại có người nói hồi nhỏ hạnh phúc là một món đồ, như cục tẩy, viên kẹo, có được là hạnh phúc; lớn lên hạnh phúc là một thái độ, thái độ sống quyết định mức độ hạnh phúc. Vậy thế nào mới là hạnh phúc thật? Thật ra hạnh phúc không có đáp án chuẩn, mỗi người hiểu khác nhau. Dù bạn cho hạnh phúc là gì, chỉ cần dụng tâm tìm thì nhất định sẽ thấy.', scene: 'Bài 5 · Hạnh phúc là gì' },
  ],
  dialogueClips: [
    { label: '10-1 · Tôn Nguyệt và Vương Tĩnh', src: A + 'l10-1.mp3' },
    { label: '10-2 · Cô Cao và thầy Lý', src: A + 'l10-2.mp3' },
    { label: '10-3 · Tiểu Vũ và Tiểu Hạ', src: A + 'l10-3.mp3' },
    { label: '10-4 · Tiền và hạnh phúc', src: A + 'l10-4.mp3' },
    { label: '10-5 · Hạnh phúc là gì', src: A + 'l10-5.mp3' },
  ],
  dialogueTip: '<b>不过</b>: nhưng (nhẹ hơn 但是, hay dùng trong văn nói) / chỉ (+ số). <b>确实</b>: quả thật. <b>在……看来</b>: theo… thì. <b>由于</b>: do, vì. <b>比如</b>: ví dụ.',
  slowSay: '幸福的标准',

  vocab: [
    { hanzi: '礼拜天', pinyin: 'lǐbàitiān', pos: 'danh từ', meaning: 'chủ nhật', han_viet: 'lễ bái thiên' },
    { hanzi: '空儿', pinyin: 'kòngr', pos: 'danh từ', meaning: 'thời gian rỗi', han_viet: 'không nhi' },
    { hanzi: '母亲', pinyin: 'mǔqin', pos: 'danh từ', meaning: 'mẹ', han_viet: 'mẫu thân' },
    { hanzi: '不过', pinyin: 'búguò', pos: 'liên từ', meaning: 'nhưng, song', han_viet: 'bất quá' },
    { hanzi: '永远', pinyin: 'yǒngyuǎn', pos: 'phó từ', meaning: 'vĩnh viễn, mãi mãi', han_viet: 'vĩnh viễn' },
    { hanzi: '方向', pinyin: 'fāngxiàng', pos: 'danh từ', meaning: 'phương hướng, sự định hướng', han_viet: 'phương hướng' },
    { hanzi: '优秀', pinyin: 'yōuxiù', pos: 'tính từ', meaning: 'xuất sắc, ưu tú', han_viet: 'ưu tú' },
    { hanzi: '硕士', pinyin: 'shuòshì', pos: 'danh từ', meaning: 'thạc sĩ', han_viet: 'thạc sĩ' },
    { hanzi: '翻译', pinyin: 'fānyì', pos: 'danh từ/động từ', meaning: 'phiên dịch viên; dịch', han_viet: 'phiên dịch' },
    { hanzi: '确实', pinyin: 'quèshí', pos: 'phó từ', meaning: 'thực sự', han_viet: 'xác thực' },
    { hanzi: '兴奋', pinyin: 'xīngfèn', pos: 'tính từ', meaning: 'hăng hái, phấn khởi', han_viet: 'hưng phấn' },
    { hanzi: '拉', pinyin: 'lā', pos: 'động từ', meaning: 'kéo, lôi, dắt', han_viet: 'lạp' },
    { hanzi: '建议', pinyin: 'jiànyì', pos: 'danh từ', meaning: 'kiến nghị, sự đề nghị', han_viet: 'kiến nghị' },
    { hanzi: '职业', pinyin: 'zhíyè', pos: 'danh từ', meaning: 'nghề nghiệp', han_viet: 'chức nghiệp' },
    { hanzi: '关键', pinyin: 'guānjiàn', pos: 'danh từ', meaning: 'điều quan trọng, điểm mấu chốt', han_viet: 'quan kiện' },
    { hanzi: '将来', pinyin: 'jiānglái', pos: 'danh từ', meaning: 'tương lai', han_viet: 'tương lai' },
    { hanzi: '发展', pinyin: 'fāzhǎn', pos: 'động từ', meaning: 'phát triển', han_viet: 'phát triển' },
    { hanzi: '躺', pinyin: 'tǎng', pos: 'động từ', meaning: 'nằm', han_viet: 'thảng' },
    { hanzi: '困', pinyin: 'kùn', pos: 'tính từ', meaning: 'buồn ngủ', han_viet: 'khốn' },
    { hanzi: '经济', pinyin: 'jīngjì', pos: 'danh từ', meaning: 'kinh tế', han_viet: 'kinh tế' },
    { hanzi: '条件', pinyin: 'tiáojiàn', pos: 'danh từ', meaning: 'điều kiện', han_viet: 'điều kiện' },
    { hanzi: '富', pinyin: 'fù', pos: 'tính từ', meaning: 'giàu', han_viet: 'phú' },
    { hanzi: '穷', pinyin: 'qióng', pos: 'tính từ', meaning: 'nghèo', han_viet: 'cùng' },
    { hanzi: '等', pinyin: 'děng', pos: 'trợ từ', meaning: 'vân vân', han_viet: 'đẳng' },
    { hanzi: '由于', pinyin: 'yóuyú', pos: 'liên từ', meaning: 'vì, bởi vì', han_viet: 'do vu' },
    { hanzi: '比如', pinyin: 'bǐrú', pos: 'động từ', meaning: 'ví dụ, chẳng hạn', han_viet: 'tỉ như' },
    { hanzi: '橡皮', pinyin: 'xiàngpí', pos: 'danh từ', meaning: '(cục) gôm, tẩy', han_viet: 'tượng bì' },
    { hanzi: '糖', pinyin: 'táng', pos: 'danh từ', meaning: 'kẹo', han_viet: 'đường' },
    { hanzi: '低', pinyin: 'dī', pos: 'tính từ', meaning: 'thấp', han_viet: 'đê' },
    { hanzi: '答案', pinyin: 'dá\'àn', pos: 'danh từ', meaning: 'đáp án, câu trả lời, lời giải', han_viet: 'đáp án' },
  ],

  sections: [
    {
      kind: 'examples', label: '不过', title: '不过 (nhưng / chỉ)',
      intro: '不过: liên từ, đặt ở đầu vế sau để chuyển ý, bổ sung và điều chỉnh ý vế trước. Cũng là phó từ nghĩa "chỉ", nhấn mạnh số lượng hay phạm vi nhỏ.',
      groups: [{ label: 'Ví dụ', items: [['我现在上有老，下有小。除了工作以外，家里还有母亲和儿子需要照顾。不过现在我很幸福。', 'Wǒ xiànzài shàng yǒu lǎo, xià yǒu xiǎo. Chúle gōngzuò yǐwài, jiā li hái yǒu mǔqin hé érzi xūyào zhàogù. Búguò xiànzài wǒ hěn xìngfú.', 'Giờ tôi trên có già dưới có trẻ. Ngoài công việc còn mẹ và con cần chăm sóc. Nhưng giờ tôi rất hạnh phúc.'], ['你再早来一会儿就好了，那辆车刚开走，你只能等下一辆了。不过也不用多长时间，估计十几分钟就来了。', 'Nǐ zài zǎo lái yíhuìr jiù hǎo le, nà liàng chē gāng kāi zǒu, nǐ zhǐ néng děng xià yí liàng le. Búguò yě búyòng duō cháng shíjiān, gūjì shí jǐ fēnzhōng jiù lái le.', 'Bạn đến sớm chút thì tốt, xe vừa chạy, chỉ đợi chuyến sau. Nhưng cũng không lâu, chắc mười mấy phút là tới.'], ['我们不过谈了点儿工作方面的问题，别的都没谈。', 'Wǒmen búguò tánle diǎnr gōngzuò fāngmiàn de wèntí, bié de dōu méi tán.', 'Chúng tôi chỉ bàn vài vấn đề công việc, những chuyện khác không bàn.'], ['你太客气了，我不过是给了些建议，这一切都是你们辛苦努力的结果。', 'Nǐ tài kèqi le, wǒ búguò shì gěile xiē jiànyì, zhè yíqiè dōu shì nǐmen xīnkǔ nǔlì de jiéguǒ.', 'Bạn khách sáo quá, tôi chỉ góp vài ý kiến, tất cả là kết quả nỗ lực vất vả của các bạn.']] }],
    },
    {
      kind: 'examples', label: '不过 – 但是', title: 'So sánh 不过 và 但是',
      intro: 'Giống nhau: đều chỉ chuyển ý, dùng ở đầu vế sau. Khác nhau: (1) 不过 thường dùng trong văn nói để đưa ra ý kiến hay lời từ chối nhẹ nhàng, lịch sự; 但是 có ngữ khí chuyển ý mạnh hơn. (2) 不过 còn là phó từ nghĩa "chỉ", theo sau thường là con số; 但是 không có cách dùng này.',
      groups: [{ label: 'Ví dụ', items: [['我本来想当律师，不过/但是后来我发现自己对新闻更感兴趣。', 'Wǒ běnlái xiǎng dāng lǜshī, búguò/dànshì hòulái wǒ fāxiàn zìjǐ duì xīnwén gèng gǎn xìngqù.', 'Tôi vốn muốn làm luật sư, nhưng sau thấy mình thích báo chí hơn.'], ['对不起，先生，那种蛋糕已经卖完了，不过，您可以尝一下这种饼干，味道也很不错。', 'Duìbuqǐ, xiānsheng, nà zhǒng dàngāo yǐjīng màiwán le, búguò, nín kěyǐ cháng yíxià zhè zhǒng bǐnggān, wèidào yě hěn búcuò.', 'Xin lỗi, loại bánh đó đã bán hết, nhưng ông có thể nếm bánh quy này, vị cũng rất ngon.'], ['别人的方法也许很有效，但是并不一定适合你。', 'Biérén de fāngfǎ yěxǔ hěn yǒuxiào, dànshì bìng bù yídìng shìhé nǐ.', 'Cách của người khác có thể rất hiệu quả, nhưng chưa chắc hợp với bạn.'], ['去年我不过50公斤，今年怎么这么胖了？', 'Qùnián wǒ búguò wǔshí gōngjīn, jīnnián zěnme zhème pàng le?', 'Năm ngoái tôi chỉ 50 ký, sao năm nay béo thế?']] }],
    },
    {
      kind: 'examples', label: '确实 · 在…看来', title: '确实 (quả thật) và 在……看来 (theo… thì)',
      intro: '确实: phó từ, khẳng định tính xác thực của một tình huống khách quan. 在……看来: thành phần chen ngang, chỉ nội dung tiếp theo là ý kiến hay quan điểm.',
      groups: [
        { label: '确实', items: [['爱情确实是结婚的重要原因，但仅有爱情是不够的。', 'Àiqíng quèshí shì jié hūn de zhòngyào yuányīn, dàn jǐn yǒu àiqíng shì bú gòu de.', 'Tình yêu quả thật là lý do quan trọng để kết hôn, nhưng chỉ có tình yêu thì không đủ.'], ['好几年没见，你还是这么爱开玩笑，我哪儿有你说的那么年轻。 我说的是真的，你确实比以前更年轻、更漂亮了。', 'Hǎo jǐ nián méi jiàn, nǐ háishi zhème ài kāi wánxiào, wǒ nǎr yǒu nǐ shuō de nàme niánqīng. Wǒ shuō de shì zhēn de, nǐ quèshí bǐ yǐqián gèng niánqīng, gèng piàoliang le.', 'Mấy năm không gặp bạn vẫn hay đùa, tôi đâu trẻ như bạn nói. Tôi nói thật, bạn đúng là trẻ và đẹp hơn trước.'], ['我女儿确实不错，记得她刚拿到第一个月工资时，就兴奋地拉着我和她爸俩去商场，给我们买礼物。', 'Wǒ nǚ\'ér quèshí búcuò, jìde tā gāng nádào dì-yī ge yuè gōngzī shí, jiù xīngfèn de lāzhe wǒ hé tā bà liǎ qù shāngchǎng, gěi wǒmen mǎi lǐwù.', 'Con gái tôi đúng là không tệ, nhớ lúc nhận lương tháng đầu, con háo hức kéo vợ chồng tôi đi mua quà.']] },
        { label: '在……看来', items: [['在很多人看来，听流行音乐仅仅是年轻人的爱好，其实现在不少中老年人对流行歌曲也很感兴趣。', 'Zài hěn duō rén kànlái, tīng liúxíng yīnyuè jǐnjǐn shì niánqīng rén de àihào, qíshí xiànzài bù shǎo zhōng lǎonián rén duì liúxíng gēqǔ yě hěn gǎn xìngqù.', 'Theo nhiều người, nghe nhạc pop chỉ là sở thích của người trẻ, thật ra không ít người trung niên cao tuổi cũng thích.'], ['在我看来，比赛结果并不是最重要的，在参加比赛的过程中使自己获得提高更重要。', 'Zài wǒ kànlái, bǐsài jiéguǒ bìng bú shì zuì zhòngyào de, zài cānjiā bǐsài de guòchéng zhōng shǐ zìjǐ huòdé tígāo gèng zhòngyào.', 'Theo tôi kết quả thi đấu không quan trọng nhất, quan trọng hơn là tiến bộ trong quá trình tham gia.'], ['你觉得在选择职业时，收入重要吗？ 在我看来，赚钱多少不是最重要的，兴趣才是关键。', 'Nǐ juéde zài xuǎnzé zhíyè shí, shōurù zhòngyào ma? Zài wǒ kànlái, zhuàn qián duōshao bú shì zuì zhòngyào de, xìngqù cái shì guānjiàn.', 'Bạn thấy chọn nghề thu nhập quan trọng không? Theo tôi, kiếm bao nhiêu không quan trọng nhất, hứng thú mới là then chốt.']] },
      ],
    },
    {
      kind: 'examples', label: '由于 · 比如', title: '由于 (do) và 比如 (ví dụ)',
      intro: '由于: liên từ chỉ nguyên nhân, theo sau là một câu, thường ở vế đầu câu phức; cũng là giới từ chỉ nguyên nhân, theo sau là cụm danh từ. 比如: động từ, dẫn ra ví dụ giải thích sự vật hay tình huống.',
      groups: [
        { label: '由于', items: [['今年春节他们本来打算出国去逛逛，但是由于家里的老人突然生病了，所以他们只好放弃了这个计划。', 'Jīnnián Chūnjié tāmen běnlái dǎsuàn chū guó qù guàngguang, dànshì yóuyú jiā li de lǎorén tūrán shēng bìng le, suǒyǐ tāmen zhǐhǎo fàngqìle zhège jìhuà.', 'Tết năm nay họ vốn định ra nước ngoài chơi, nhưng do người già trong nhà đột nhiên ốm nên đành bỏ kế hoạch.'], ['由于种种原因，我们不得不改变原来的计划。', 'Yóuyú zhǒngzhǒng yuányīn, wǒmen bù dé bù gǎibiàn yuánlái de jìhuà.', 'Do nhiều lý do, chúng tôi buộc phải đổi kế hoạch ban đầu.'], ['由于工作的需要，我去年十月去了趟上海，跟一家公司去谈生意。', 'Yóuyú gōngzuò de xūyào, wǒ qùnián shí yuè qùle tàng Shànghǎi, gēn yì jiā gōngsī qù tán shēngyi.', 'Do nhu cầu công việc, tháng 10 năm ngoái tôi đi Thượng Hải bàn làm ăn với một công ty.']] },
        { label: '比如', items: [['还有人说，小时候幸福是一件东西，比如一块橡皮、一块糖，得到了就很幸福。', 'Hái yǒu rén shuō, xiǎo shíhou xìngfú shì yí jiàn dōngxi, bǐrú yí kuài xiàngpí, yí kuài táng, dédàole jiù hěn xìngfú.', 'Lại có người nói hồi nhỏ hạnh phúc là một món đồ, ví dụ cục tẩy, viên kẹo, có là hạnh phúc.'], ['每个人都有自己特别感兴趣的东西，比如，作家爱写小说，画家爱画画儿。', 'Měi ge rén dōu yǒu zìjǐ tèbié gǎn xìngqù de dōngxi, bǐrú, zuòjiā ài xiě xiǎoshuō, huàjiā ài huà huàr.', 'Mỗi người đều có thứ mình đặc biệt thích, ví dụ nhà văn thích viết tiểu thuyết, họa sĩ thích vẽ.'], ['旅游前最好做个计划，比如要去几个地方，怎么坐车，带哪些东西，一共要玩儿多少天等。', 'Lǚyóu qián zuìhǎo zuò ge jìhuà, bǐrú yào qù jǐ ge dìfang, zěnme zuò chē, dài nǎxiē dōngxi, yígòng yào wánr duōshao tiān děng.', 'Trước khi du lịch nên lập kế hoạch, ví dụ đi mấy nơi, đi xe thế nào, mang gì, chơi bao nhiêu ngày.']] },
      ],
    },
    {
      kind: 'examples', label: 'Từ cùng chữ: 经', title: 'Những từ có chữ giống nhau: 经',
      intro: '经历, 经济, 经验, 经常, 经过.',
      groups: [{ label: 'Ví dụ', items: [['取得成功的人都经历过很多失败，他们和普通人的区别是，他们坚持了下来。', 'Qǔdé chénggōng de rén dōu jīnglìguo hěn duō shībài, tāmen hé pǔtōng rén de qūbié shì, tāmen jiānchí le xiàlai.', 'Người thành công đều từng trải qua nhiều thất bại, điểm khác người thường là họ đã kiên trì.'], ['我哥哥今年26岁，现在正在读硕士研究生，学的是经济法专业。', 'Wǒ gēge jīnnián èrshíliù suì, xiànzài zhèngzài dú shuòshì yánjiūshēng, xué de shì jīngjìfǎ zhuānyè.', 'Anh trai tôi năm nay 26 tuổi, đang học thạc sĩ ngành luật kinh tế.'], ['我们长大的过程，就是解决一个又一个问题，在失败中慢慢积累经验，在成功中慢慢获得信心的过程。', 'Wǒmen zhǎngdà de guòchéng, jiù shì jiějué yí ge yòu yí ge wèntí, zài shībài zhōng mànmàn jīlěi jīngyàn, zài chénggōng zhōng mànmàn huòdé xìnxīn de guòchéng.', 'Quá trình lớn lên là giải quyết hết vấn đề này đến vấn đề khác, tích kinh nghiệm trong thất bại, lấy dần tự tin trong thành công.']] }],
    },
  ],

  notes: [
    { title: '不过', body: 'Liên từ chuyển ý, bổ sung/điều chỉnh vế trước (不过现在我很幸福); phó từ "chỉ" + số lượng nhỏ (我们不过谈了点儿工作方面的问题). So với 但是: 不过 nhẹ nhàng, hay dùng trong văn nói để đề xuất ý kiến hoặc từ chối lịch sự.', say: '不过现在我很幸福' },
    { title: '确实', body: 'Phó từ khẳng định tính xác thực của tình huống khách quan: 我女儿确实不错。', say: '我女儿确实不错' },
    { title: '在……看来', body: 'Thành phần chen vào câu, chỉ nội dung sau là quan điểm: 在我看来，赚钱多少不是最重要的，兴趣才是关键。', say: '在我看来，兴趣才是关键' },
    { title: '由于', body: 'Liên từ: theo sau là một câu, thường ở vế đầu câu phức (由于家里的老人突然生病了，所以……). Giới từ: theo sau là cụm danh từ (由于种种原因).', say: '由于种种原因，我们不得不改变原来的计划' },
    { title: '比如', body: 'Động từ dẫn ví dụ giải thích sự vật/tình huống: 小时候幸福是一件东西，比如一块橡皮、一块糖。', say: '比如一块橡皮、一块糖' },
    { title: 'Văn hóa: 幸福没有标准答案', body: 'Bài kết luận: hạnh phúc không có đáp án chuẩn, mỗi người hiểu khác nhau; chỉ cần dụng tâm đi tìm, nhất định sẽ phát hiện ra nó.', say: '幸福并没有一个标准答案' },
  ],

  writeChars: ['陪', '母', '优', '秀', '硕', '翻', '译', '躺'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa',
      items: [
        { q: '孙月让王静陪她去做什么？王静为什么去不了？', hint: '陪她去逛街买礼物；因为王静最近事情多，要照顾母亲和儿子。' },
        { q: '王静为什么很辛苦？她为什么也觉得很幸福？', hint: '上有老下有小，要工作又要照顾家人；她在母亲面前是孩子，在孩子面前是母亲，有了努力的方向。' },
        { q: '高老师为什么羡慕王老师？', hint: '王老师来这儿工作三年就当了教授，还有个好妻子。' },
        { q: '为什么说高老师在别人眼中也是很幸福的？', hint: '她有一个漂亮又优秀的女儿，硕士毕业后就当了翻译。' },
        { q: '小雨对选择职业有什么建议？', hint: '赚钱多少不是最重要的，兴趣才是关键。' },
        { q: '在小雨看来，什么是幸福？小夏呢？', hint: '工作结束回家洗热水澡、看书听音乐、困了睡觉就很幸福；小夏希望找到既感兴趣收入又不错的工作。' },
        { q: '为什么说有钱不一定幸福？为什么说没钱也很难过得幸福？', hint: '很多东西不能用钱买到；没钱生病不能及时看医生，健康都难保证。' },
        { q: '关于幸福，人们有哪些不同的看法？怎样才算是真正的幸福？', hint: '有人认为工资高、有人认为放松健康、有人认为帮助别人；幸福没有标准答案。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: trao đổi quan điểm về hạnh phúc', hint: '你认为什么是幸福？现在你感到幸福吗？什么会影响你的幸福感？' },
        { q: 'Theo nhóm: nói về hạnh phúc của bạn, dùng ít nhất 4 cấu trúc', hint: '不过；确实；在我看来；由于；比如；永远；关键；将来的发展。' },
      ],
    },
  ],

  sentences: [
    { parts: ['我', '现在', '上', '有', '老', '下', '有', '小'], pinyin: 'Wǒ xiànzài shàng yǒu lǎo, xià yǒu xiǎo.', vi: 'Giờ tôi trên có già dưới có trẻ.' },
    { parts: ['每', '个', '人', '有', '每', '个', '人', '的', '生活', '不用', '羡慕', '别人'], pinyin: 'Měi ge rén yǒu měi ge rén de shēnghuó, búyòng xiànmù biérén.', vi: 'Mỗi người có cuộc sống riêng, không cần ngưỡng mộ người khác.' },
    { parts: ['在', '我', '看来', '兴趣', '才', '是', '关键'], pinyin: 'Zài wǒ kànlái, xìngqù cái shì guānjiàn.', vi: 'Theo tôi hứng thú mới là then chốt.' },
    { parts: ['有', '钱', '不', '一定', '幸福'], pinyin: 'Yǒu qián bù yídìng xìngfú.', vi: 'Có tiền chưa chắc hạnh phúc.' },
    { parts: ['幸福', '并', '没有', '一个', '标准', '答案'], pinyin: 'Xìngfú bìng méiyǒu yí ge biāozhǔn dá\'àn.', vi: 'Hạnh phúc không có đáp án chuẩn.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 低 · B 困 · C 拉 · D 永远 · E 建议. Gõ chữ cái A–E.',
      items: [
        { prompt: '一个不知道自己缺点的人，（ ）都不会想要去改变。', answer: 'D', gloss: '永远' }, { prompt: '他们两个人打球的水平差不多，很难分出高（ ）。', answer: 'A', gloss: '低' },
        { prompt: '我刚学会开车，水平一般，还经常走错路。朋友（ ）我平时多开车出去走走，熟悉一下道路情况，这样慢慢就好了。', answer: 'E', gloss: '建议' }, { prompt: '解决问题时，一个人的知识常常是不够的，所以人与人之间需要交流。在交流过程中，一方面，丰富了知识，提高了能力，另一方面，又（ ）近了人们之间的距离。', answer: 'C', gloss: '拉' },
        { prompt: '人比动物聪明，但动物仍然有很多值得人学习的地方。拿狮子来说，它们（ ）的时候才睡觉，饿的时候才吃东西，永远不为昨天的事烦恼，也不为明天的事担心。', answer: 'B', gloss: '困' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 空儿 · B 答案 · C 礼拜天 · D 关键 · E 躺. Gõ chữ cái A–E.',
      items: [
        { prompt: '你最近忙吗？哪天有（ ）？ 干什么？又想让我陪你去逛街呀？', answer: 'A', gloss: '空儿' }, { prompt: '（ ）我们去学校的体育馆打网球吧？ 好啊，不过周末人会不会很多？', answer: 'C', gloss: '礼拜天' },
        { prompt: '房间里这么暗，怎么不开灯呀？你身体不舒服？ 没有，我本来（ ）在沙发上看书，结果睡着了。', answer: 'E', gloss: '躺' }, { prompt: '很多女孩子都希望找一个个子高的男朋友，你呢？ 高矮没太大关系，（ ）是我得喜欢他、爱他。', answer: 'D', gloss: '关键' },
        { prompt: '怎么了？什么事这么不高兴？ 别提了，今天考试写（ ）写到最后，发现少了一个，又来不及改了。', answer: 'B', gloss: '答案' },
      ],
    },
    {
      title: 'Giáo trình 比一比 · 不过 / 但是 (gõ từ)',
      hint: 'Gõ 不过 hoặc 但是 theo đáp án sách (câu 3 chấp nhận cả hai).',
      items: [
        { prompt: '大部分人每天晚上至少应该睡7个小时，（ ）这个标准并不适合每一个人。', answer: '不过', accept: ['但是'], gloss: '不过 / 但是' },
        { prompt: '对不起，先生，我们店的刷卡机坏了，只能用现金。（ ）商场附近有家银行，您出了门右转，走到头儿就能看到。', answer: '不过', gloss: '不过' },
        { prompt: '这次亲戚来北京（ ）住两三天，就让他来家里住吧，不用住宾馆了。', answer: '不过', gloss: '不过' },
      ],
    },
    {
      title: 'Giáo trình 扩展 · 经 (gõ từ)',
      hint: 'Gõ 经历, 经济 hoặc 经验.',
      items: [
        { prompt: '取得成功的人都（ ）过很多失败，他们和普通人的区别是，他们坚持了下来，正是这种坚持，使他们从失败走向了成功。', answer: '经历', gloss: '经历' },
        { prompt: '我哥哥今年26岁，现在正在读硕士研究生，学的是（ ）法专业。', answer: '经济', gloss: '经济' },
        { prompt: '我们长大的过程，就是解决一个又一个问题，在失败中慢慢积累（ ），在成功中慢慢获得信心的过程。', answer: '经验', gloss: '经验' },
      ],
    },
  ],
}
