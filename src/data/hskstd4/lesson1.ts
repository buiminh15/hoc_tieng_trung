import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 4 (Thượng), Bài 1: 简单的爱情 (sách trang 10–21).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách, dịch hội thoại do app tự thêm.
 * Nghe: 01-1…01-5. Bài tập: 热身/比一比/练习/扩展, đáp án theo "HSK4-1-BT" trang 1.
 */

const A = '/audio/hsk-std4/'

export const hskStd4Lesson1: Lesson = {
  id: 1,
  title: 'Tình yêu đơn giản',
  hanzi: '简单的爱情',
  pinyin: 'Jiǎndān de àiqíng',
  vi: 'Tình yêu đơn giản',
  intro: 'Nói về tình yêu, hôn nhân và tính cách. Học 不仅……也/还/而且……, 从来 (xưa nay chưa từng), 刚 (vừa mới), 即使……也……, (在)……上 và phân biệt 刚 – 刚才.',

  dialogue: [
    { who: 'A', name: '孙月', hanzi: '听说你男朋友李进跟你是一个学校的，是你同学吗？', pinyin: 'Tīngshuō nǐ nánpéngyou Lǐ Jìn gēn nǐ shì yí ge xuéxiào de, shì nǐ tóngxué ma?', vi: 'Nghe nói bạn trai bạn Lý Tiến học cùng trường với bạn, là bạn học à?', scene: 'Bài 1 · Tôn Nguyệt và Vương Tĩnh nói về bạn trai của Vương Tĩnh' },
    { who: 'B', name: '王静', hanzi: '是的，他学的是新闻，我学的是法律，我和他不是一个班。', pinyin: 'Shì de, tā xué de shì xīnwén, wǒ xué de shì fǎlǜ, wǒ hé tā bú shì yí ge bān.', vi: 'Đúng, anh ấy học báo chí, tôi học luật, tôi với anh ấy không cùng lớp.' },
    { who: 'A', name: '孙月', hanzi: '那你们俩是怎么认识的？', pinyin: 'Nà nǐmen liǎ shì zěnme rènshi de?', vi: 'Vậy hai người quen nhau thế nào?' },
    { who: 'B', name: '王静', hanzi: '我们是在一次足球比赛中认识的。我们班跟他们班比赛，他一个人踢进两个球，我对他印象很深，后来就慢慢熟悉了。', pinyin: 'Wǒmen shì zài yí cì zúqiú bǐsài zhōng rènshi de. Wǒmen bān gēn tāmen bān bǐsài, tā yí ge rén tījìn liǎng ge qiú, wǒ duì tā yìnxiàng hěn shēn, hòulái jiù mànmàn shúxī le.', vi: 'Bọn tôi quen nhau trong một trận bóng đá. Lớp tôi đấu với lớp anh ấy, anh một mình ghi hai bàn, tôi ấn tượng rất sâu, sau đó dần dần quen thân.' },
    { who: 'A', name: '孙月', hanzi: '你为什么喜欢他？', pinyin: 'Nǐ wèi shénme xǐhuan tā?', vi: 'Sao bạn thích anh ấy?' },
    { who: 'B', name: '王静', hanzi: '他不仅足球踢得好，性格也不错。', pinyin: 'Tā bùjǐn zúqiú tī de hǎo, xìnggé yě búcuò.', vi: 'Anh ấy không những đá bóng giỏi mà tính cách cũng tốt.' },
    { who: 'A', name: '王静', hanzi: '李老师，我下个月5号就要结婚了。', pinyin: 'Lǐ lǎoshī, wǒ xià ge yuè wǔ hào jiù yào jié hūn le.', vi: 'Thầy Lý, mùng 5 tháng sau em sắp kết hôn rồi.', scene: 'Bài 2 · Vương Tĩnh nói với thầy Lý chuyện sắp cưới' },
    { who: 'B', name: '李老师', hanzi: '你是在开玩笑吧？你们不是才认识一个月？', pinyin: 'Nǐ shì zài kāi wánxiào ba? Nǐmen bú shì cái rènshi yí ge yuè?', vi: 'Em đang nói đùa à? Chẳng phải các em mới quen nhau một tháng sao?' },
    { who: 'A', name: '王静', hanzi: '虽然我们认识的时间不长，但我从来没这么快乐过。', pinyin: 'Suīrán wǒmen rènshi de shíjiān bù cháng, dàn wǒ cónglái méi zhème kuàilè guo.', vi: 'Tuy chúng em quen nhau chưa lâu nhưng em chưa từng vui như thế.' },
    { who: 'B', name: '李老师', hanzi: '两个人在一起，最好能有共同的兴趣和爱好。', pinyin: 'Liǎng ge rén zài yìqǐ, zuìhǎo néng yǒu gòngtóng de xìngqù hé àihào.', vi: 'Hai người ở bên nhau, tốt nhất có sở thích chung.' },
    { who: 'A', name: '王静', hanzi: '我们有很多共同的爱好，经常一起打球、唱歌、做菜。', pinyin: 'Wǒmen yǒu hěn duō gòngtóng de àihào, jīngcháng yìqǐ dǎ qiú, chàng gē, zuò cài.', vi: 'Chúng em có nhiều sở thích chung, thường cùng nhau chơi bóng, hát, nấu ăn.' },
    { who: 'B', name: '李老师', hanzi: '看来你真的找到适合你的人了。祝你们幸福！', pinyin: 'Kànlái nǐ zhēn de zhǎodào shìhé nǐ de rén le. Zhù nǐmen xìngfú!', vi: 'Xem ra em thật sự tìm được người hợp với em rồi. Chúc hai em hạnh phúc!' },
    { who: 'A', name: '高老师', hanzi: '听说您跟妻子结婚快二十年了？', pinyin: 'Tīngshuō nín gēn qīzi jié hūn kuài èrshí nián le?', vi: 'Nghe nói thầy với vợ kết hôn sắp hai mươi năm rồi?', scene: 'Bài 3 · Thầy Cao và thầy Lý nói về cuộc sống sau hôn nhân' },
    { who: 'B', name: '李老师', hanzi: '到6月9号，我们就结婚二十年了。这么多年，我们的生活一直挺幸福的。', pinyin: 'Dào liù yuè jiǔ hào, wǒmen jiù jié hūn èrshí nián le. Zhème duō nián, wǒmen de shēnghuó yìzhí tǐng xìngfú de.', vi: 'Đến ngày 9 tháng 6, chúng tôi cưới nhau hai mươi năm. Bao năm nay cuộc sống của chúng tôi vẫn khá hạnh phúc.' },
    { who: 'A', name: '高老师', hanzi: '我和丈夫刚结婚的时候，每天都觉得很新鲜，在一起有说不完的话。但是现在……', pinyin: 'Wǒ hé zhàngfu gāng jié hūn de shíhou, měi tiān dōu juéde hěn xīnxiān, zài yìqǐ yǒu shuō bu wán de huà. Dànshì xiànzài……', vi: 'Hồi mới cưới chồng, ngày nào tôi cũng thấy mới mẻ, ở bên nhau có nói không hết chuyện. Nhưng bây giờ……' },
    { who: 'B', name: '李老师', hanzi: '两个人共同生活，只有浪漫和新鲜感是不够的。', pinyin: 'Liǎng ge rén gòngtóng shēnghuó, zhǐyǒu làngmàn hé xīnxiāngǎn shì bú gòu de.', vi: 'Hai người cùng sống chung, chỉ có lãng mạn và cảm giác mới mẻ là không đủ.' },
    { who: 'A', name: '高老师', hanzi: '您说得对！我现在每天看到的都是他的缺点。', pinyin: 'Nín shuō de duì! Wǒ xiànzài měi tiān kàndào de dōu shì tā de quēdiǎn.', vi: 'Thầy nói đúng! Giờ ngày nào tôi cũng chỉ thấy khuyết điểm của chồng.' },
    { who: 'B', name: '李老师', hanzi: '两个人在一起时间长了，就会有很多问题。只有接受了他的缺点，你们才能更好地一起生活。', pinyin: 'Liǎng ge rén zài yìqǐ shíjiān cháng le, jiù huì yǒu hěn duō wèntí. Zhǐyǒu jiēshòu le tā de quēdiǎn, nǐmen cái néng gèng hǎo de yìqǐ shēnghuó.', vi: 'Hai người ở bên nhau lâu sẽ có nhiều vấn đề. Chỉ khi chấp nhận khuyết điểm của anh ấy, hai người mới có thể sống bên nhau tốt hơn.' },
    { who: 'A', name: '短文', hanzi: '很多女孩子羡慕浪漫的爱情。那什么是浪漫呢？年轻人说：浪漫是她想要月亮时，你不会给她星星；中年人说：浪漫是即使晚上加班到零点，到家时，自己家里也还亮着灯；老年人说：浪漫其实就像歌中唱的那样，“我能想到最浪漫的事，就是和你一起慢慢变老。”其实，让我们感动的，就是生活中简单的爱情。有时候，简单就是最大的幸福。', pinyin: 'Hěn duō nǚháizi xiànmù làngmàn de àiqíng. Nà shénme shì làngmàn ne? Niánqīng rén shuō: Làngmàn shì tā xiǎng yào yuèliang shí, nǐ bú huì gěi tā xīngxing; zhōngnián rén shuō: Làngmàn shì jíshǐ wǎnshang jiā bān dào líng diǎn, dào jiā shí, zìjǐ jiā li yě hái liàngzhe dēng; lǎonián rén shuō: Làngmàn qíshí jiù xiàng gē zhōng chàng de nàyàng, "Wǒ néng xiǎngdào zuì làngmàn de shì, jiù shì hé nǐ yìqǐ mànmàn biàn lǎo." Qíshí, ràng wǒmen gǎndòng de, jiù shì shēnghuó zhōng jiǎndān de àiqíng. Yǒu shíhou, jiǎndān jiù shì zuì dà de xìngfú.', vi: 'Nhiều cô gái ngưỡng mộ tình yêu lãng mạn. Vậy lãng mạn là gì? Người trẻ nói: lãng mạn là khi cô ấy muốn mặt trăng thì anh không đưa sao; người trung niên nói: lãng mạn là dù tăng ca đến nửa đêm, về đến nhà vẫn thấy đèn nhà sáng; người già nói: lãng mạn thật ra như lời bài hát, "Điều lãng mạn nhất em có thể nghĩ đến là cùng anh từ từ già đi." Thật ra, điều làm ta cảm động chính là tình yêu giản dị trong cuộc sống. Có lúc, giản dị chính là hạnh phúc lớn nhất.', scene: 'Bài 4 · Lãng mạn là gì' },
    { who: 'A', name: '短文', hanzi: '说到结婚，人们就会很自然地想起爱情。爱情是结婚的重要原因，但两个人共同生活，不仅需要浪漫的爱情，更需要性格上互相吸引。我丈夫是个很幽默的人。即使是很普通的事情，从他嘴里说出来也会变得很有意思。在我难过的时候，他总是有办法让我高兴起来。而且他的脾气也不错，结婚快十年了，我们俩几乎没因为什么事红过脸，很多人都特别羡慕我们。', pinyin: 'Shuōdào jié hūn, rénmen jiù huì hěn zìrán de xiǎngqǐ àiqíng. Àiqíng shì jié hūn de zhòngyào yuányīn, dàn liǎng ge rén gòngtóng shēnghuó, bùjǐn xūyào làngmàn de àiqíng, gèng xūyào xìnggé shang hùxiāng xīyǐn. Wǒ zhàngfu shì ge hěn yōumò de rén. Jíshǐ shì hěn pǔtōng de shìqing, cóng tā zuǐ li shuō chūlai yě huì biàn de hěn yǒu yìsi. Zài wǒ nánguò de shíhou, tā zǒngshì yǒu bànfǎ ràng wǒ gāoxìng qǐlai. Érqiě tā de píqi yě búcuò, jié hūn kuài shí nián le, wǒmen liǎ jīhū méi yīnwèi shénme shì hóng guo liǎn, hěn duō rén dōu tèbié xiànmù wǒmen.', vi: 'Nói đến kết hôn, người ta rất tự nhiên nghĩ đến tình yêu. Tình yêu là lý do quan trọng để kết hôn, nhưng hai người sống chung không chỉ cần tình yêu lãng mạn mà còn cần hấp dẫn nhau về tính cách. Chồng tôi là người rất hài hước. Dù là chuyện rất bình thường, từ miệng anh nói ra cũng trở nên thú vị. Lúc tôi buồn, anh luôn có cách làm tôi vui lên. Hơn nữa tính khí anh cũng tốt, cưới gần mười năm, hai chúng tôi hầu như chưa từng cãi nhau vì chuyện gì, nhiều người đặc biệt ngưỡng mộ chúng tôi.', scene: 'Bài 5 · Chồng tôi' },
  ],
  dialogueClips: [
    { label: '01-1 · Tôn Nguyệt và Vương Tĩnh', src: A + 'l1-1.mp3' },
    { label: '01-2 · Vương Tĩnh và thầy Lý', src: A + 'l1-2.mp3' },
    { label: '01-3 · Thầy Cao và thầy Lý', src: A + 'l1-3.mp3' },
    { label: '01-4 · Lãng mạn là gì', src: A + 'l1-4.mp3' },
    { label: '01-5 · Chồng tôi', src: A + 'l1-5.mp3' },
  ],
  dialogueTip: '<b>不仅……，也/还/而且……</b>: không những… mà còn…. <b>从来</b> + phủ định: xưa nay chưa từng. <b>刚</b>: vừa mới (đứng sau chủ ngữ). <b>即使……也……</b>: dù… cũng…. <b>(在)……上</b>: xét về mặt… (性格上互相吸引).',
  slowSay: '他不仅足球踢得好，性格也不错',

  vocab: [
    { hanzi: '法律', pinyin: 'fǎlǜ', pos: 'danh từ', meaning: 'pháp luật, luật', han_viet: 'pháp luật' },
    { hanzi: '俩', pinyin: 'liǎ', pos: 'số lượng từ', meaning: 'hai (người)', han_viet: 'lưỡng' },
    { hanzi: '印象', pinyin: 'yìnxiàng', pos: 'danh từ', meaning: 'ấn tượng', han_viet: 'ấn tượng' },
    { hanzi: '深', pinyin: 'shēn', pos: 'tính từ', meaning: 'sâu sắc', han_viet: 'thâm' },
    { hanzi: '熟悉', pinyin: 'shúxī', pos: 'động từ', meaning: 'hiểu rõ, quen thuộc', han_viet: 'thục tất' },
    { hanzi: '不仅', pinyin: 'bùjǐn', pos: 'liên từ', meaning: 'không những, chẳng những', han_viet: 'bất cận' },
    { hanzi: '性格', pinyin: 'xìnggé', pos: 'danh từ', meaning: 'tính cách, tính nết', han_viet: 'tính cách' },
    { hanzi: '开玩笑', pinyin: 'kāi wánxiào', pos: 'động từ', meaning: 'nói đùa, đùa', han_viet: 'khai ngoạn tiếu' },
    { hanzi: '从来', pinyin: 'cónglái', pos: 'phó từ', meaning: 'từ trước đến nay, từ trước đến giờ', han_viet: 'tòng lai' },
    { hanzi: '最好', pinyin: 'zuìhǎo', pos: 'phó từ', meaning: 'tốt nhất', han_viet: 'tối hảo' },
    { hanzi: '共同', pinyin: 'gòngtóng', pos: 'tính từ', meaning: 'chung, cùng', han_viet: 'cộng đồng' },
    { hanzi: '适合', pinyin: 'shìhé', pos: 'động từ', meaning: 'phù hợp', han_viet: 'thích hợp' },
    { hanzi: '幸福', pinyin: 'xìngfú', pos: 'tính từ', meaning: 'hạnh phúc', han_viet: 'hạnh phúc' },
    { hanzi: '生活', pinyin: 'shēnghuó', pos: 'danh từ/động từ', meaning: 'cuộc sống; sống', han_viet: 'sinh hoạt' },
    { hanzi: '刚', pinyin: 'gāng', pos: 'phó từ', meaning: 'vừa, vừa mới', han_viet: 'cương' },
    { hanzi: '浪漫', pinyin: 'làngmàn', pos: 'tính từ', meaning: 'lãng mạn', han_viet: 'lãng mạn' },
    { hanzi: '够', pinyin: 'gòu', pos: 'động từ', meaning: 'đủ', han_viet: 'cấu' },
    { hanzi: '缺点', pinyin: 'quēdiǎn', pos: 'danh từ', meaning: 'khuyết điểm, thiếu sót', han_viet: 'khuyết điểm' },
    { hanzi: '接受', pinyin: 'jiēshòu', pos: 'động từ', meaning: 'chấp nhận', han_viet: 'tiếp thụ' },
    { hanzi: '羡慕', pinyin: 'xiànmù', pos: 'động từ', meaning: 'ước ao, ngưỡng mộ', han_viet: 'tiện mộ' },
    { hanzi: '爱情', pinyin: 'àiqíng', pos: 'danh từ', meaning: 'tình yêu (giữa nam và nữ)', han_viet: 'ái tình' },
    { hanzi: '星星', pinyin: 'xīngxing', pos: 'danh từ', meaning: 'ngôi sao', han_viet: 'tinh tinh' },
    { hanzi: '即使', pinyin: 'jíshǐ', pos: 'liên từ', meaning: 'cho dù', han_viet: 'tức sử' },
    { hanzi: '加班', pinyin: 'jiā bān', pos: 'động từ', meaning: 'tăng ca, làm thêm giờ', han_viet: 'gia ban' },
    { hanzi: '亮', pinyin: 'liàng', pos: 'động từ', meaning: 'chiếu sáng, tỏa sáng', han_viet: 'lượng' },
    { hanzi: '感动', pinyin: 'gǎndòng', pos: 'động từ', meaning: 'cảm động, làm xúc động', han_viet: 'cảm động' },
    { hanzi: '自然', pinyin: 'zìrán', pos: 'phó từ', meaning: 'đương nhiên, hiển nhiên', han_viet: 'tự nhiên' },
    { hanzi: '原因', pinyin: 'yuányīn', pos: 'danh từ', meaning: 'nguyên nhân', han_viet: 'nguyên nhân' },
    { hanzi: '互相', pinyin: 'hùxiāng', pos: 'phó từ', meaning: 'lẫn nhau, qua lại', han_viet: 'hỗ tương' },
    { hanzi: '吸引', pinyin: 'xīyǐn', pos: 'động từ', meaning: 'hấp dẫn, thu hút', han_viet: 'hấp dẫn' },
    { hanzi: '幽默', pinyin: 'yōumò', pos: 'tính từ', meaning: 'hóm hỉnh, khôi hài', han_viet: 'u mặc' },
    { hanzi: '脾气', pinyin: 'píqi', pos: 'danh từ', meaning: 'tính tình, tính khí', han_viet: 'tì khí' },
  ],

  sections: [
    {
      kind: 'examples', label: '不仅…也/还/而且', title: 'Cấu trúc 不仅……也/还/而且……',
      intro: 'Liên từ 不仅 dùng trong vế đầu; vế sau thường dùng 也/还/而且 hô ứng để thêm thông tin bổ sung. Khi chủ ngữ hai vế giống nhau, 不仅 đặt sau chủ ngữ; khi khác nhau, 不仅 đặt trước chủ ngữ.',
      groups: [{ label: 'Ví dụ', items: [['他不仅足球踢得好，性格也不错。', 'Tā bùjǐn zúqiú tī de hǎo, xìnggé yě búcuò.', 'Anh ấy không những đá bóng giỏi mà tính cách cũng tốt.'], ['他不仅身体健康，还成了一名长跑运动员。', 'Tā bùjǐn shēntǐ jiànkāng, hái chéngle yì míng chángpǎo yùndòngyuán.', 'Anh ấy không những khỏe mạnh mà còn thành vận động viên chạy đường dài.'], ['听说那边不仅很美，而且人也非常热情。', 'Tīngshuō nàbiān bùjǐn hěn měi, érqiě rén yě fēicháng rèqíng.', 'Nghe nói nơi đó không những đẹp mà người cũng rất nhiệt tình.']] }],
    },
    {
      kind: 'examples', label: '从来 · 刚', title: '从来 (xưa nay) và 刚 (vừa mới)',
      intro: '从来 là phó từ, thường dùng trong câu phủ định, diễn tả sự việc luôn có đặc điểm như vậy từ trước đến nay. 刚 là phó từ, diễn tả hành động hoặc tình huống xảy ra cách đây không lâu, đặt sau chủ ngữ, trước động từ.',
      groups: [
        { label: '从来', items: [['老张开会从来不迟到。', 'Lǎo Zhāng kāi huì cónglái bù chídào.', 'Lão Trương họp xưa nay không đến muộn.'], ['虽然我们认识的时间不长，但我从来没这么快乐过。', 'Suīrán wǒmen rènshi de shíjiān bù cháng, dàn wǒ cónglái méi zhème kuàilè guo.', 'Tuy quen chưa lâu nhưng tôi chưa từng vui như thế.'], ['这家面馆从来只卖一种东西：牛肉面。', 'Zhè jiā miànguǎn cónglái zhǐ mài yì zhǒng dōngxi: niúròu miàn.', 'Quán mì này xưa nay chỉ bán một món: mì bò.']] },
        { label: '刚', items: [['我上午刚借的那本书，怎么找不到了？', 'Wǒ shàngwǔ gāng jiè de nà běn shū, zěnme zhǎo bu dào le?', 'Quyển sách sáng nay tôi vừa mượn sao lại tìm không thấy?'], ['我和丈夫刚结婚的时候，每天都觉得很新鲜。', 'Wǒ hé zhàngfu gāng jié hūn de shíhou, měi tiān dōu juéde hěn xīnxiān.', 'Hồi mới cưới chồng, ngày nào tôi cũng thấy mới mẻ.'], ['他刚来一会儿。', 'Tā gāng lái yíhuìr.', 'Anh ấy vừa đến một lúc.']] },
      ],
    },
    {
      kind: 'examples', label: '即使…也… · …上', title: '即使……也…… và (在)……上',
      intro: '即使……也……: dù… cũng… (nhượng bộ giả thiết, hoặc sự việc đã xảy ra). (在)……上: danh từ phương vị 上 dùng sau danh từ để chỉ "trong phạm vi nào đó, xét về khía cạnh nào đó".',
      groups: [
        { label: '即使……也……', items: [['即使是跟他们吃吃饭、聊聊天，他们也会觉得很幸福。', 'Jíshǐ shì gēn tāmen chīchi fàn, liáoliao tiān, tāmen yě huì juéde hěn xìngfú.', 'Dù chỉ là cùng họ ăn cơm trò chuyện, họ cũng thấy rất hạnh phúc.'], ['有些人即使只睡5个小时也没问题。', 'Yǒuxiē rén jíshǐ zhǐ shuì wǔ ge xiǎoshí yě méi wèntí.', 'Có người dù chỉ ngủ 5 tiếng cũng không sao.'], ['浪漫是即使晚上加班到零点，到家时，自己家里也还亮着灯。', 'Làngmàn shì jíshǐ wǎnshang jiā bān dào líng diǎn, dào jiā shí, zìjǐ jiā li yě hái liàngzhe dēng.', 'Lãng mạn là dù tăng ca đến nửa đêm, về nhà vẫn thấy đèn nhà sáng.']] },
        { label: '(在)……上', items: [['今天的作业是复习生词，明天课上听写。', 'Jīntiān de zuòyè shì fùxí shēngcí, míngtiān kè shang tīngxiě.', 'Bài tập hôm nay là ôn từ mới, ngày mai trên lớp nghe viết.'], ['你觉得北方和南方在饮食上有什么不同？', 'Nǐ juéde běifāng hé nánfāng zài yǐnshí shang yǒu shénme bù tóng?', 'Bạn thấy miền Bắc và miền Nam khác nhau thế nào về ăn uống?'], ['两个人共同生活，更需要性格上互相吸引。', 'Liǎng ge rén gòngtóng shēnghuó, gèng xūyào xìnggé shang hùxiāng xīyǐn.', 'Hai người sống chung càng cần hấp dẫn nhau về tính cách.']] },
      ],
    },
    {
      kind: 'examples', label: '比一比 刚—刚才', title: 'So sánh 刚 và 刚才',
      intro: 'Giống nhau: đều chỉ hành động/tình huống xảy ra cách đây không lâu, đều làm trạng ngữ. Khác nhau: 刚 là phó từ, chỉ đứng sau chủ ngữ; 刚才 là danh từ thời gian, đứng trước hoặc sau chủ ngữ. Trước 刚 có thể có từ chỉ thời gian, trước 刚才 thì không. Sau 刚 có thể có thời lượng (他刚来一会儿), 刚才 không. Sau 刚才 có thể dùng phủ định, 刚 thì không (你为什么刚才不说，现在才说？).',
      groups: [{ label: 'Ví dụ', items: [['你叔叔刚/刚才打电话来说给你发了个电子邮件。', 'Nǐ shūshu gāng/gāngcái dǎ diànhuà lái shuō gěi nǐ fāle ge diànzǐ yóujiàn.', 'Chú bạn vừa gọi điện nói đã gửi cho bạn một email.'], ['我刚看了邮箱，没有新邮件。', 'Wǒ gāng kànle yóuxiāng, méiyǒu xīn yóujiàn.', 'Tôi vừa xem hộp thư, không có thư mới.'], ['刚才我去洗手间了，你给我打电话了？', 'Gāngcái wǒ qù xǐshǒujiān le, nǐ gěi wǒ dǎ diànhuà le?', 'Vừa nãy tôi đi vệ sinh, bạn gọi điện cho tôi à?'], ['我上个月刚结婚。', 'Wǒ shàng ge yuè gāng jié hūn.', 'Tháng trước tôi vừa cưới.']] }],
    },
    {
      kind: 'examples', label: 'Từ cùng chữ: 感', title: 'Những từ có chữ giống nhau: 感',
      intro: '感到 (cảm thấy), 感动 (cảm động), 感冒 (cảm cúm), 感兴趣 (có hứng thú).',
      groups: [{ label: 'Ví dụ', items: [['他的话让我感到事情有点儿不对。', 'Tā de huà ràng wǒ gǎndào shìqing yǒudiǎnr bú duì.', 'Lời anh ấy làm tôi cảm thấy sự việc hơi không ổn.'], ['这部电影讲的是一个浪漫的爱情故事，很多人都被感动得哭了。', 'Zhè bù diànyǐng jiǎng de shì yí ge làngmàn de àiqíng gùshi, hěn duō rén dōu bèi gǎndòng de kū le.', 'Bộ phim kể một chuyện tình lãng mạn, nhiều người xúc động đến khóc.'], ['有点儿发烧，还有点儿头疼，可能是感冒了。', 'Yǒudiǎnr fā shāo, hái yǒudiǎnr tóu téng, kěnéng shì gǎnmào le.', 'Hơi sốt, lại hơi đau đầu, có thể là cảm rồi.'], ['很多留学生对中国文化感兴趣。', 'Hěn duō liúxuéshēng duì Zhōngguó wénhuà gǎn xìngqù.', 'Nhiều du học sinh có hứng thú với văn hóa Trung Quốc.']] }],
    },
  ],

  notes: [
    {
      title: '不仅……也/还/而且……',
      body: '不仅 đứng ở vế thứ nhất, vế thứ hai dùng 也/还/而且 để bổ sung thông tin. Chủ ngữ hai vế giống nhau: 不仅 đặt sau chủ ngữ; chủ ngữ khác nhau: 不仅 đặt trước chủ ngữ. Ví dụ: 他不仅足球踢得好，性格也不错。',
      say: '他不仅足球踢得好，性格也不错',
    },
    {
      title: '从来',
      body: '从来 là phó từ, thường dùng trong câu phủ định: 从来不/没/都. Diễn tả từ xưa đến nay luôn như vậy. 虽然我们认识的时间不长，但我从来没这么快乐过。',
      say: '我从来没这么快乐过',
    },
    {
      title: '刚',
      body: '刚: phó từ, hành động/tình huống xảy ra cách đây không lâu; dùng sau chủ ngữ, trước động từ. 我和丈夫刚结婚的时候，每天都觉得很新鲜。',
      say: '我刚搬来一个星期',
    },
    {
      title: '即使……也……',
      body: '即使 là liên từ dùng trong vế đầu, vế sau thường dùng 也 hô ứng; biểu thị quan hệ nhượng bộ có giả thiết, cũng có thể chỉ việc đã xảy ra hoặc đang tồn tại. 即使 có thể đứng trước hoặc sau chủ ngữ của vế đầu.',
      say: '即使是很普通的事情，也会变得很有意思',
    },
    {
      title: '(在)……上',
      body: '上: danh từ phương vị, ngoài chỉ bề mặt vật thể còn chỉ "trong phạm vi nào đó, xét về khía cạnh nào đó": 课上听写, 饮食上, 性格上互相吸引.',
      say: '性格上互相吸引',
    },
    {
      title: 'Văn hóa: Lễ Thất Tịch (七夕节)',
      body: 'Mồng bảy tháng bảy âm lịch hằng năm là ngày lễ truyền thống của dân tộc Hán. Người tham gia chủ yếu là các thiếu nữ, nội dung chủ yếu là cầu xin tài khéo léo (xỏ chỉ luồn kim, làm đồ nhỏ, bày trái cây), nên còn gọi là lễ Khất xảo hay lễ nữ nhi. Bắt nguồn từ chuyện tình Ngưu Lang – Chức Nữ, đây là ngày lễ lãng mạn nhất của Trung Quốc, cũng được xem là "ngày lễ Tình nhân của Trung Quốc".',
      say: '七夕节',
    },
  ],

  writeChars: ['法', '律', '印', '象', '熟', '悉', '羡', '慕'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (根据课文内容回答问题)',
      items: [
        { q: '王静跟李进是怎么认识的？', hint: '他们是在一次足球比赛中认识的。' },
        { q: '王静为什么喜欢李进？', hint: '因为他不仅足球踢得好，性格也不错。' },
        { q: '王静什么时候结婚？她跟李进认识多长时间了？', hint: '下个月5号结婚，他们才认识一个月。' },
        { q: '王静和李进有哪些共同的爱好？', hint: '打球、唱歌、做菜。' },
        { q: '李老师和爱人的关系怎么样？高老师呢？', hint: '李老师和爱人生活一直挺幸福；高老师现在每天看到的都是丈夫的缺点。' },
        { q: '夫妻两个人怎样才能很好地生活在一起？', hint: '要接受对方的缺点。' },
        { q: '关于浪漫，年轻人、中年人、老年人有什么不同的看法？', hint: '年轻人：想要月亮时不给星星；中年人：加班到零点家里还亮着灯；老年人：和你一起慢慢变老。' },
        { q: '“我”的丈夫是个什么样的人？', hint: '很幽默，脾气也不错。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: hỏi nhau về chuyện tình cảm', hint: '你有男/女朋友吗？你们是怎么认识的？你们在一起多长时间了？你为什么喜欢他/她？' },
        { q: 'Theo nhóm: kể một câu chuyện tình yêu, dùng ít nhất 4 cấu trúc', hint: '对他/她印象很深；而且性格也不错；从来没有这么快乐过；共同的兴趣和爱好；接受缺点；羡慕浪漫的爱情；在性格上互相吸引；最大的幸福。' },
      ],
    },
  ],

  sentences: [
    { parts: ['我', '对', '他', '印象', '很', '深'], pinyin: 'Wǒ duì tā yìnxiàng hěn shēn.', vi: 'Tôi ấn tượng rất sâu về anh ấy.' },
    { parts: ['他', '不仅', '足球', '踢', '得', '好', '性格', '也', '不错'], pinyin: 'Tā bùjǐn zúqiú tī de hǎo, xìnggé yě búcuò.', vi: 'Anh ấy không những đá bóng giỏi mà tính cách cũng tốt.' },
    { parts: ['我', '从来', '没', '这么', '快乐', '过'], pinyin: 'Wǒ cónglái méi zhème kuàilè guo.', vi: 'Tôi chưa từng vui như thế.' },
    { parts: ['你', '真的', '找到', '适合', '你', '的', '人', '了'], pinyin: 'Nǐ zhēn de zhǎodào shìhé nǐ de rén le.', vi: 'Bạn thật sự tìm được người hợp với bạn rồi.' },
    { parts: ['即使', '晚上', '加班', '到', '零点', '家里', '也', '还', '亮着', '灯'], pinyin: 'Jíshǐ wǎnshang jiā bān dào líng diǎn, jiā li yě hái liàngzhe dēng.', vi: 'Dù tăng ca đến nửa đêm, nhà vẫn sáng đèn.' },
    { parts: ['简单', '就', '是', '最', '大', '的', '幸福'], pinyin: 'Jiǎndān jiù shì zuì dà de xìngfú.', vi: 'Giản dị chính là hạnh phúc lớn nhất.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 印象 · B 接受 · C 熟悉 · D 共同 · E 吸引. Gõ chữ cái A–E.',
      items: [
        { prompt: '他们两个人（ ）努力，终于完成了工作。', answer: 'D', gloss: '共同' }, { prompt: '那个地方特别漂亮，每年都会（ ）很多国内外的游客。', answer: 'E', gloss: '吸引' },
        { prompt: '在我的（ ）中，他一直是个很幽默的人。', answer: 'A', gloss: '印象' }, { prompt: '我是一个南方人，很难（ ）每天吃面条。', answer: 'B', gloss: '接受' },
        { prompt: '这个事你最好先问一下李老师，这方面他比我（ ）。', answer: 'C', gloss: '熟悉' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 脾气 · B 从来 · C 感动 · D 羡慕 · E 开玩笑. Gõ chữ cái A–E.',
      items: [
        { prompt: '下个星期的游泳比赛你参加吗？ 你别跟我（ ）了，我没学过游泳，怎么参加比赛啊？', answer: 'E', gloss: '开玩笑' }, { prompt: '小李这个人怎么样？ 他虽然（ ）很大，但工作很认真。', answer: 'A', gloss: '脾气' },
        { prompt: '真（ ）你，找了个那么漂亮的女朋友！ 她不仅长得漂亮，也很聪明。', answer: 'D', gloss: '羡慕' }, { prompt: '都这么晚了，他怎么还没到？ 他以前（ ）不迟到，今天是怎么了？', answer: 'B', gloss: '从来' },
        { prompt: '这个电影讲了一个爱情故事，很浪漫，让人特别（ ）。', answer: 'C', gloss: '感动' },
      ],
    },
    {
      title: 'Giáo trình 比一比 · 刚 / 刚才 (gõ từ)',
      hint: 'Gõ 刚 hoặc 刚才 theo đáp án sách.',
      items: [
        { prompt: '你（ ）不在办公室，我把东西给你同事了。', answer: '刚才', gloss: '刚才' },
        { prompt: '不好意思，（ ）我太忙了，没时间跟你说话。', answer: '刚才', gloss: '刚才' },
        { prompt: '我（ ）搬来一个星期，对这儿的环境还不太熟悉。', answer: '刚', gloss: '刚' },
      ],
    },
    {
      title: 'Giáo trình 扩展 · Từ có chữ 感 (câu 1–4)',
      hint: 'A 感到 · B 感动 · C 感冒 · D 感兴趣. Gõ chữ cái A–D.',
      items: [
        { prompt: '我（ ）了，明天想请一天假。', answer: 'C', gloss: '感冒' }, { prompt: '张老师上课时经常讲有趣的故事，让一年级的学生们对历史越来越（ ）了。', answer: 'D', gloss: '感兴趣' },
        { prompt: '虽然不长，但是让我很（ ）。', answer: 'B', gloss: '感动' }, { prompt: '当你帮助别人时，不但会让别人（ ）被关心，你自己也会更快乐。', answer: 'A', gloss: '感到' },
      ],
    },
  ],
}
