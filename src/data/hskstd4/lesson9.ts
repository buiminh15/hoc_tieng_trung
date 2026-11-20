import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 4 (Thượng), Bài 9: 阳光总在风雨后 (sách trang 110–121).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách, dịch hội thoại do app tự thêm.
 * Nghe: 09-1…09-5. Bài tập: 比一比/练习 2/扩展, đáp án theo "HSK4-1-BT" trang 9–10.
 */

const A = '/audio/hsk-std4/'

export const hskStd4Lesson9: Lesson = {
  id: 9,
  title: 'Sau cơn mưa trời lại sáng',
  hanzi: '阳光总在风雨后',
  pinyin: 'Yángguāng zǒng zài fēngyǔ hòu',
  vi: 'Sau cơn mưa trời lại sáng',
  intro: 'Nói về thành công, kiên trì và từ bỏ. Học 难道, 通过 (so với 经过), 可是, 结果, 上.',

  dialogue: [
    { who: 'A', name: '王静', hanzi: '怎么又买了这么多饼干和巧克力？难道你不减肥了？', pinyin: 'Zěnme yòu mǎile zhème duō bǐnggān hé qiǎokèlì? Nándào nǐ bù jiǎn féi le?', vi: 'Sao lại mua nhiều bánh quy và sô-cô-la thế? Chẳng lẽ bạn không giảm cân nữa?', scene: 'Bài 1 · Vương Tĩnh và Tôn Nguyệt nói chuyện giảm cân' },
    { who: 'B', name: '孙月', hanzi: '减了一个月都没瘦下来，我实在没有信心了。', pinyin: 'Jiǎnle yí ge yuè dōu méi shòu xiàlai, wǒ shízài méiyǒu xìnxīn le.', vi: 'Giảm một tháng mà không gầy đi, tôi thật sự hết tự tin.' },
    { who: 'A', name: '王静', hanzi: '如果你想减肥，就得少吃东西，而且要多运动。', pinyin: 'Rúguǒ nǐ xiǎng jiǎn féi, jiù děi shǎo chī dōngxi, érqiě yào duō yùndòng.', vi: 'Nếu bạn muốn giảm cân phải ăn ít lại, hơn nữa phải vận động nhiều.' },
    { who: 'B', name: '孙月', hanzi: '我就是这么做的，但这一个月下来，我只轻了一公斤。', pinyin: 'Wǒ jiùshì zhème zuò de, dàn zhè yí ge yuè xiàlai, wǒ zhǐ qīngle yì gōngjīn.', vi: 'Tôi chính là làm thế, nhưng cả tháng nay tôi chỉ nhẹ đi một ký.' },
    { who: 'A', name: '王静', hanzi: '一个月太短了。要想减肥成功，只能坚持，才会慢慢有效果。', pinyin: 'Yí ge yuè tài duǎn le. Yào xiǎng jiǎn féi chénggōng, zhǐ néng jiānchí, cái huì mànmàn yǒu xiàoguǒ.', vi: 'Một tháng quá ngắn. Muốn giảm cân thành công chỉ có kiên trì mới dần có hiệu quả.' },
    { who: 'B', name: '孙月', hanzi: '我本来已经打算放弃了，但是你刚才的话让我改变了主意。这些饼干和巧克力送给你了。', pinyin: 'Wǒ běnlái yǐjīng dǎsuàn fàngqì le, dànshì nǐ gāngcái de huà ràng wǒ gǎibiànle zhǔyi. Zhèxiē bǐnggān hé qiǎokèlì sònggěi nǐ le.', vi: 'Tôi vốn đã định từ bỏ, nhưng lời bạn vừa nói làm tôi đổi ý. Bánh quy và sô-cô-la này tặng bạn.' },
    { who: 'A', name: '李进', hanzi: '你网球打得真好，还得过那么多国际大奖！每次看你比赛，感觉你轻轻松松就赢了。', pinyin: 'Nǐ wǎngqiú dǎ de zhēn hǎo, hái déguo nàme duō guójì dà jiǎng! Měi cì kàn nǐ bǐsài, gǎnjué nǐ qīngqīngsōngsōng jiù yíng le.', vi: 'Bạn chơi tennis giỏi thật, còn đoạt nhiều giải quốc tế! Mỗi lần xem bạn thi đấu thấy bạn thắng nhẹ nhàng.', scene: 'Bài 2 · Lý Tiến và Trương Viễn nói về con đường thành công' },
    { who: 'B', name: '张远', hanzi: '哪里啊！那是你没看到我辛苦练习的一面，没有人随随便便就能成功的。', pinyin: 'Nǎli a! Nà shì nǐ méi kàndào wǒ xīnkǔ liànxí de yí miàn, méiyǒu rén suísuíbiànbiàn jiù néng chénggōng de.', vi: 'Đâu có! Đó là vì bạn không thấy mặt vất vả luyện tập của tôi, không ai tùy tiện mà thành công.' },
    { who: 'A', name: '李进', hanzi: '我从小也对网球感兴趣，但是到现在还是打得不怎么样。', pinyin: 'Wǒ cóngxiǎo yě duì wǎngqiú gǎn xìngqù, dànshì dào xiànzài háishi dǎ de bù zěnmeyàng.', vi: 'Tôi từ nhỏ cũng thích tennis, nhưng đến giờ vẫn chơi không ra sao.' },
    { who: 'B', name: '张远', hanzi: '你知道吗？不管春夏秋冬，我练球从来没有休息过一天。', pinyin: 'Nǐ zhīdào ma? Bùguǎn chūn xià qiū dōng, wǒ liàn qiú cónglái méiyǒu xiūxiguo yì tiān.', vi: 'Bạn biết không? Bất kể xuân hạ thu đông, tôi tập bóng chưa từng nghỉ một ngày.' },
    { who: 'A', name: '李进', hanzi: '真是不容易啊！看来我只看到了你成功时获得的鲜花，却没注意到你成功前流下的汗水。', pinyin: 'Zhēn shì bù róngyì a! Kànlái wǒ zhǐ kàndàole nǐ chénggōng shí huòdé de xiānhuā, què méi zhùyì dào nǐ chénggōng qián liúxià de hànshuǐ.', vi: 'Thật không dễ! Xem ra tôi chỉ thấy hoa tươi bạn nhận lúc thành công mà không để ý đến mồ hôi bạn đổ trước đó.' },
    { who: 'B', name: '张远', hanzi: '任何成功都要通过努力才能得到。只要你坚持练习，我相信你也会越打越好的。', pinyin: 'Rènhé chénggōng dōu yào tōngguò nǔlì cái néng dédào. Zhǐyào nǐ jiānchí liànxí, wǒ xiāngxìn nǐ yě huì yuè dǎ yuè hǎo de.', vi: 'Mọi thành công đều phải nhờ nỗ lực mới có. Chỉ cần bạn kiên trì luyện tập, tôi tin bạn cũng sẽ càng chơi càng giỏi.' },
    { who: 'A', name: '小林', hanzi: '你还记得王红吗？我在报纸上看到一篇关于她的新闻，她现在已经是一个有名的作家了。', pinyin: 'Nǐ hái jìde Wáng Hóng ma? Wǒ zài bàozhǐ shang kàndào yì piān guānyú tā de xīnwén, tā xiànzài yǐjīng shì yí ge yǒumíng de zuòjiā le.', vi: 'Bạn còn nhớ Vương Hồng không? Tôi thấy trên báo một bài về cô ấy, giờ cô ấy là nhà văn nổi tiếng.', scene: 'Bài 3 · Tiểu Lâm và Tiểu Lý nói về thành công của Vương Hồng' },
    { who: 'B', name: '小李', hanzi: '听说她毕业后放弃了律师的工作，开始专门写小说，没想到她竟然成功了。', pinyin: 'Tīngshuō tā bì yè hòu fàngqìle lǜshī de gōngzuò, kāishǐ zhuānmén xiě xiǎoshuō, méi xiǎngdào tā jìngrán chénggōng le.', vi: 'Nghe nói sau tốt nghiệp cô ấy bỏ nghề luật sư, bắt đầu chuyên viết tiểu thuyết, không ngờ cô ấy thành công.' },
    { who: 'A', name: '小林', hanzi: '当时她的父母和亲戚都不支持她，可是她坚持自己的选择，现在终于向所有人证明了她的选择是正确的。', pinyin: 'Dāngshí tā de fùmǔ hé qīnqi dōu bù zhīchí tā, kěshì tā jiānchí zìjǐ de xuǎnzé, xiànzài zhōngyú xiàng suǒyǒu rén zhèngmíngle tā de xuǎnzé shì zhèngquè de.', vi: 'Lúc đó cha mẹ và họ hàng đều không ủng hộ, nhưng cô kiên trì lựa chọn, giờ cuối cùng đã chứng minh với mọi người lựa chọn đó đúng.' },
    { who: 'B', name: '小李', hanzi: '看来为了自己的理想，放弃一些东西也是值得的。', pinyin: 'Kànlái wèile zìjǐ de lǐxiǎng, fàngqì yìxiē dōngxi yě shì zhídé de.', vi: 'Xem ra vì lý tưởng của mình, từ bỏ một số thứ cũng đáng.' },
    { who: 'A', name: '小林', hanzi: '一个人只有两只手，不可能得到所有想要的东西，所以有时候放弃是一种聪明的选择。', pinyin: 'Yí ge rén zhǐyǒu liǎng zhī shǒu, bù kěnéng dédào suǒyǒu xiǎng yào de dōngxi, suǒyǐ yǒu shíhou fàngqì shì yì zhǒng cōngming de xuǎnzé.', vi: 'Một người chỉ có hai tay, không thể có mọi thứ mình muốn, nên đôi khi từ bỏ là một lựa chọn thông minh.' },
    { who: 'B', name: '小李', hanzi: '是啊，只有学会放弃，才能把自己的能力用到最该做的事情上，最后获得成功。', pinyin: 'Shì a, zhǐyǒu xuéhuì fàngqì, cái néng bǎ zìjǐ de nénglì yòngdào zuì gāi zuò de shìqing shang, zuìhòu huòdé chénggōng.', vi: 'Đúng, chỉ khi học được cách từ bỏ mới dùng được năng lực vào việc nên làm nhất và cuối cùng thành công.' },
    { who: 'A', name: '短文', hanzi: '如果你想做什么事情，那就勇敢地去做，不要担心结果，不要考虑会不会失败。要是太看重结果，失败就会给人们带来很多烦恼。我们应该把注意力放在做事情的过程上，这样你会在做的过程中发现解决问题的快乐，这是其他任何东西都给不了的。即使最后失败了也没有关系，因为至少你已经努力过，而且我们还可以从失败中总结出有用的经验，有了这些积累，成功自然离我们越来越近。', pinyin: 'Rúguǒ nǐ xiǎng zuò shénme shìqing, nà jiù yǒnggǎn de qù zuò, búyào dān xīn jiéguǒ, búyào kǎolǜ huì bu huì shībài. Yàoshi tài kànzhòng jiéguǒ, shībài jiù huì gěi rénmen dàilái hěn duō fánnǎo. Wǒmen yīnggāi bǎ zhùyìlì fàngzài zuò shìqing de guòchéng shang, zhèyàng nǐ huì zài zuò de guòchéng zhōng fāxiàn jiějué wèntí de kuàilè, zhè shì qítā rènhé dōngxi dōu gěi bu liǎo de. Jíshǐ zuìhòu shībài le yě méiyǒu guānxi, yīnwèi zhìshǎo nǐ yǐjīng nǔlìguo, érqiě wǒmen hái kěyǐ cóng shībài zhōng zǒngjié chū yǒuyòng de jīngyàn, yǒule zhèxiē jīlěi, chénggōng zìrán lí wǒmen yuè lái yuè jìn.', vi: 'Nếu bạn muốn làm việc gì thì cứ dũng cảm làm, đừng lo kết quả, đừng nghĩ có thất bại hay không. Nếu quá coi trọng kết quả, thất bại sẽ đem lại nhiều phiền muộn. Ta nên đặt sự chú ý vào quá trình làm việc, như vậy bạn sẽ thấy niềm vui giải quyết vấn đề, điều mà không gì khác mang lại được. Dù cuối cùng thất bại cũng không sao, vì ít nhất bạn đã nỗ lực, và ta còn rút ra kinh nghiệm hữu ích từ thất bại; có những tích lũy này, thành công tự nhiên càng gần.', scene: 'Bài 4 · Quá trình và kết quả' },
    { who: 'A', name: '短文', hanzi: '每一个人都希望成功，可是很多时候，在成功之前会遇到很多困难。有些人遇到困难就放弃，而有些人遇到困难却想办法解决它。对困难的态度不同，结果也是不一样的。爱迪生就是在找了上千种材料后才找到了能点亮电灯的材料。取得成功的人往往都经历过许多失败，他们和普通人的区别就是他们都坚持了下来。所以就算只有1%的希望，我们也要做出100%的努力。困难只是暂时的，“阳光总在风雨后”，只有我们勇敢地面对困难，才能有希望取得成功。', pinyin: 'Měi yí ge rén dōu xīwàng chénggōng, kěshì hěn duō shíhou, zài chénggōng zhīqián huì yùdào hěn duō kùnnan. Yǒuxiē rén yùdào kùnnan jiù fàngqì, ér yǒuxiē rén yùdào kùnnan què xiǎng bànfǎ jiějué tā. Duì kùnnan de tàidù bù tóng, jiéguǒ yě shì bù yíyàng de. Àidíshēng jiù shì zài zhǎole shàng qiān zhǒng cáiliào hòu cái zhǎodàole néng diǎnliàng diàndēng de cáiliào. Qǔdé chénggōng de rén wǎngwǎng dōu jīnglìguo xǔduō shībài, tāmen hé pǔtōng rén de qūbié jiù shì tāmen dōu jiānchí le xiàlai. Suǒyǐ jiùsuàn zhǐyǒu bǎi fēn zhī yī de xīwàng, wǒmen yě yào zuòchū bǎi fēn zhī bǎi de nǔlì. Kùnnan zhǐ shì zànshí de, "Yángguāng zǒng zài fēngyǔ hòu", zhǐyǒu wǒmen yǒnggǎn de miànduì kùnnan, cái néng yǒu xīwàng qǔdé chénggōng.', vi: 'Ai cũng mong thành công, nhưng nhiều khi trước thành công sẽ gặp nhiều khó khăn. Có người gặp khó là bỏ, còn có người gặp khó lại tìm cách giải quyết. Thái độ với khó khăn khác nhau thì kết quả cũng khác. Edison đã tìm hàng nghìn loại vật liệu mới tìm ra vật liệu làm sáng bóng đèn. Người thành công thường từng trải qua nhiều thất bại, điểm khác với người thường là họ đã kiên trì. Vì vậy dù chỉ có 1% hy vọng, ta cũng phải nỗ lực 100%. Khó khăn chỉ là tạm thời, "sau cơn mưa trời lại sáng", chỉ khi dũng cảm đối mặt khó khăn mới có hy vọng thành công.', scene: 'Bài 5 · Khó khăn chỉ là tạm thời' },
  ],
  dialogueClips: [
    { label: '09-1 · Vương Tĩnh và Tôn Nguyệt', src: A + 'l9-1.mp3' },
    { label: '09-2 · Lý Tiến và Trương Viễn', src: A + 'l9-2.mp3' },
    { label: '09-3 · Tiểu Lâm và Tiểu Lý', src: A + 'l9-3.mp3' },
    { label: '09-4 · Quá trình và kết quả', src: A + 'l9-4.mp3' },
    { label: '09-5 · Khó khăn chỉ là tạm thời', src: A + 'l9-5.mp3' },
  ],
  dialogueTip: '<b>难道</b>: chẳng lẽ (câu hỏi tu từ). <b>通过</b>: thông qua / đi qua / đạt (kỳ thi). <b>可是</b>: nhưng (hay đi với 虽然). <b>结果</b>: kết quả (danh từ) / kết cục là (liên từ). <b>上</b>: đạt tới (số lượng).',
  slowSay: '阳光总在风雨后',

  vocab: [
    { hanzi: '饼干', pinyin: 'bǐnggān', pos: 'danh từ', meaning: 'bánh quy', han_viet: 'bính can' },
    { hanzi: '难道', pinyin: 'nándào', pos: 'phó từ', meaning: 'chẳng lẽ (dùng trong câu hỏi tu từ để nhấn mạnh)', han_viet: 'nan đạo' },
    { hanzi: '得', pinyin: 'děi', pos: 'động từ năng nguyện', meaning: 'phải', han_viet: 'đắc' },
    { hanzi: '坚持', pinyin: 'jiānchí', pos: 'động từ', meaning: 'kiên trì, khăng khăng giữ', han_viet: 'kiên trì' },
    { hanzi: '放弃', pinyin: 'fàngqì', pos: 'động từ', meaning: 'từ bỏ, bỏ', han_viet: 'phóng khí' },
    { hanzi: '主意', pinyin: 'zhǔyi', pos: 'danh từ', meaning: 'ý định, ý kiến', han_viet: 'chủ ý' },
    { hanzi: '网球', pinyin: 'wǎngqiú', pos: 'danh từ', meaning: 'quần vợt', han_viet: 'võng cầu' },
    { hanzi: '国际', pinyin: 'guójì', pos: 'danh từ', meaning: 'quốc tế', han_viet: 'quốc tế' },
    { hanzi: '轻松', pinyin: 'qīngsōng', pos: 'tính từ', meaning: 'nhẹ nhàng, dễ dàng', han_viet: 'khinh tùng' },
    { hanzi: '赢', pinyin: 'yíng', pos: 'động từ', meaning: 'thắng', han_viet: 'doanh' },
    { hanzi: '随便', pinyin: 'suíbiàn', pos: 'tính từ', meaning: 'tình cờ, tùy tiện', han_viet: 'tùy tiện' },
    { hanzi: '汗', pinyin: 'hàn', pos: 'danh từ', meaning: 'mồ hôi', han_viet: 'hãn' },
    { hanzi: '通过', pinyin: 'tōngguò', pos: 'giới từ', meaning: 'qua, nhờ vào', han_viet: 'thông quá' },
    { hanzi: '篇', pinyin: 'piān', pos: 'lượng từ', meaning: '(dùng cho bài văn, giấy…) bài, tờ', han_viet: 'thiên' },
    { hanzi: '作家', pinyin: 'zuòjiā', pos: 'danh từ', meaning: 'nhà văn', han_viet: 'tác gia' },
    { hanzi: '当时', pinyin: 'dāngshí', pos: 'danh từ', meaning: 'lúc đó', han_viet: 'đương thời' },
    { hanzi: '可是', pinyin: 'kěshì', pos: 'liên từ', meaning: 'nhưng', han_viet: 'khả thị' },
    { hanzi: '正确', pinyin: 'zhèngquè', pos: 'tính từ', meaning: 'đúng, chính xác', han_viet: 'chính xác' },
    { hanzi: '理想', pinyin: 'lǐxiǎng', pos: 'danh từ', meaning: 'lý tưởng', han_viet: 'lý tưởng' },
    { hanzi: '勇敢', pinyin: 'yǒnggǎn', pos: 'tính từ', meaning: 'dũng cảm, gan dạ', han_viet: 'dũng cảm' },
    { hanzi: '结果', pinyin: 'jiéguǒ', pos: 'danh từ', meaning: 'kết quả', han_viet: 'kết quả' },
    { hanzi: '失败', pinyin: 'shībài', pos: 'động từ', meaning: 'thất bại', han_viet: 'thất bại' },
    { hanzi: '过程', pinyin: 'guòchéng', pos: 'danh từ', meaning: 'quá trình', han_viet: 'quá trình' },
    { hanzi: '至少', pinyin: 'zhìshǎo', pos: 'phó từ', meaning: 'ít nhất', han_viet: 'chí thiểu' },
    { hanzi: '总结', pinyin: 'zǒngjié', pos: 'động từ', meaning: 'tổng kết', han_viet: 'tổng kết' },
    { hanzi: '取', pinyin: 'qǔ', pos: 'động từ', meaning: 'đạt được', han_viet: 'thủ' },
    { hanzi: '经历', pinyin: 'jīnglì', pos: 'động từ', meaning: 'trải qua', han_viet: 'kinh lịch' },
    { hanzi: '许多', pinyin: 'xǔduō', pos: 'số từ', meaning: 'rất nhiều', han_viet: 'hứa đa' },
    { hanzi: '区别', pinyin: 'qūbié', pos: 'danh từ', meaning: 'sự khác biệt', han_viet: 'khu biệt' },
    { hanzi: '暂时', pinyin: 'zànshí', pos: 'danh từ', meaning: 'tạm thời, nhất thời', han_viet: 'tạm thời' },
    { hanzi: '面对', pinyin: 'miànduì', pos: 'động từ', meaning: 'đương đầu, đối mặt', han_viet: 'diện đối' },
  ],

  sections: [
    {
      kind: 'examples', label: '难道', title: '难道 (chẳng lẽ)',
      intro: 'Phó từ 难道 nhấn mạnh ngữ khí câu hỏi tu từ. Dùng trong câu hỏi tu từ khẳng định thì câu mang nghĩa phủ định và ngược lại; ví dụ 难道汉语真的这么难吗？ có hàm ý người nói nhấn mạnh tiếng Hán không khó.',
      groups: [{ label: 'Ví dụ', items: [['怎么又买了这么多饼干和巧克力？难道你不减肥了？', 'Zěnme yòu mǎile zhème duō bǐnggān hé qiǎokèlì? Nándào nǐ bù jiǎn féi le?', 'Sao lại mua nhiều bánh quy và sô-cô-la thế? Chẳng lẽ bạn không giảm cân nữa?'], ['喂，都十点了，你怎么还不来？ 难道你没看短信？我今天有事去不了了。', 'Wèi, dōu shí diǎn le, nǐ zěnme hái bù lái? Nándào nǐ méi kàn duǎnxìn? Wǒ jīntiān yǒu shì qù bu liǎo le.', 'Alô, 10 giờ rồi sao bạn chưa đến? Chẳng lẽ bạn không đọc tin nhắn? Hôm nay tôi có việc không đi được.'], ['你不是两点就出发了吗？难道路上花了两个多小时？ 我那辆车出了点儿问题，刚才把车送去修了。', 'Nǐ bú shì liǎng diǎn jiù chūfā le ma? Nándào lùshang huāle liǎng ge duō xiǎoshí? Wǒ nà liàng chē chūle diǎnr wèntí, gāngcái bǎ chē sòng qù xiū le.', 'Chẳng phải bạn 2 giờ đã đi sao? Chẳng lẽ đi đường mất hơn hai tiếng? Xe tôi có chút vấn đề, vừa mang đi sửa.']] }],
    },
    {
      kind: 'examples', label: '通过', title: '通过 (thông qua, đi qua, đạt)',
      intro: 'Giới từ: đạt được mục đích nhất định nhờ người/phương tiện/cách thức nào đó. Động từ: đi qua nơi nào từ đầu này sang đầu kia; hoặc phù hợp tiêu chuẩn/đạt yêu cầu.',
      groups: [{ label: 'Ví dụ', items: [['任何成功都要通过努力才能得到。', 'Rènhé chénggōng dōu yào tōngguò nǔlì cái néng dédào.', 'Mọi thành công đều phải nhờ nỗ lực mới có.'], ['这个节目我一直在看，它介绍了很多生活中的小知识。很多以前我没有注意到的问题，现在通过它了解了不少。', 'Zhège jiémù wǒ yìzhí zài kàn, tā jièshàole hěn duō shēnghuó zhōng de xiǎo zhīshi. Hěn duō yǐqián wǒ méiyǒu zhùyì dào de wèntí, xiànzài tōngguò tā liǎojiěle bù shǎo.', 'Chương trình này tôi luôn xem, giới thiệu nhiều kiến thức nhỏ trong cuộc sống. Nhiều vấn đề trước không để ý, giờ nhờ nó mà hiểu thêm.'], ['这条街只能步行通过。', 'Zhè tiáo jiē zhǐ néng bùxíng tōngguò.', 'Con đường này chỉ đi bộ qua được.'], ['我通过那家公司的面试了。经理对我印象不错，他要我明天就正式去上班。', 'Wǒ tōngguò nà jiā gōngsī de miànshì le. Jīnglǐ duì wǒ yìnxiàng búcuò, tā yào wǒ míngtiān jiù zhèngshì qù shàng bān.', 'Tôi đã qua vòng phỏng vấn công ty đó. Giám đốc có ấn tượng tốt, bảo tôi mai đi làm chính thức.']] }],
    },
    {
      kind: 'examples', label: '通过 – 经过', title: 'So sánh 通过 và 经过',
      intro: 'Giống nhau: đều diễn tả đạt mục đích nhờ người/phương tiện nào đó. Khác nhau: (1) 通过 là giới từ nhấn mạnh phương pháp, phương tiện; 经过 là động từ nhấn mạnh quá trình. (2) Làm động từ, 通过 là đi xuyên qua từ đầu này sang đầu kia; 经过 là đi ngang qua nơi nào đó, không xuyên qua. (3) 经过 còn là danh từ chỉ quá trình diễn biến của sự việc; 通过 không có cách dùng này.',
      groups: [{ label: 'Ví dụ', items: [['通过/经过大家的努力，公司的生意越做越大。', 'Tōngguò/jīngguò dàjiā de nǔlì, gōngsī de shēngyi yuè zuò yuè dà.', 'Nhờ sự nỗ lực của mọi người, việc kinh doanh của công ty ngày càng lớn.'], ['希望通过这次活动引起大家的兴趣，让大家更了解我们公司。', 'Xīwàng tōngguò zhè cì huódòng yǐnqǐ dàjiā de xìngqù, ràng dàjiā gèng liǎojiě wǒmen gōngsī.', 'Hy vọng qua hoạt động này gây hứng thú, để mọi người hiểu công ty hơn.'], ['经过一次次失败之后，他终于成功了。', 'Jīngguò yí cì cì shībài zhīhòu, tā zhōngyú chénggōng le.', 'Sau từng lần thất bại, cuối cùng anh ấy thành công.'], ['这里正在修路，汽车无法通过。', 'Zhèlǐ zhèngzài xiū lù, qìchē wúfǎ tōngguò.', 'Ở đây đang sửa đường, ô tô không qua được.'], ['我正好经过这儿，顺便过来看看你。', 'Wǒ zhènghǎo jīngguò zhèr, shùnbiàn guòlai kànkan nǐ.', 'Tôi vừa đi ngang đây, tiện ghé thăm bạn.'], ['小王把事情的经过告诉我了，原来这件事真的跟你没关系。', 'Xiǎo Wáng bǎ shìqing de jīngguò gàosu wǒ le, yuánlái zhè jiàn shì zhēn de gēn nǐ méi guānxi.', 'Tiểu Vương kể cho tôi diễn biến sự việc, hóa ra việc này thật sự không liên quan đến bạn.']] }],
    },
    {
      kind: 'examples', label: '可是 · 结果 · 上', title: '可是, 结果 và 上',
      intro: '可是: liên từ chuyển ý ở vế sau của câu phức; vế trước thường có 虽然. 结果: danh từ = trạng thái cuối cùng của diễn biến; liên từ = kết quả ở vế sau của quan hệ nhân quả. 上: động từ nghĩa "đạt tới, đủ (số lượng hay mức độ)", theo sau thường là tân ngữ chỉ số lượng.',
      groups: [
        { label: '可是', items: [['你怎么又想换工作了，这儿的收入不是挺高的吗？ 虽然收入高，可是经常要加班，很少有时间和家人在一起。', 'Nǐ zěnme yòu xiǎng huàn gōngzuò le, zhèr de shōurù bú shì tǐng gāo de ma? Suīrán shōurù gāo, kěshì chángcháng yào jiā bān, hěn shǎo yǒu shíjiān hé jiārén zài yìqǐ.', 'Sao bạn lại muốn đổi việc, thu nhập ở đây chẳng phải cao sao? Tuy thu nhập cao nhưng hay phải tăng ca, ít thời gian bên gia đình.'], ['当时她的父母和亲戚都不支持她，可是她坚持自己的选择，现在终于向所有人证明了她的选择是正确的。', 'Dāngshí tā de fùmǔ hé qīnqi dōu bù zhīchí tā, kěshì tā jiānchí zìjǐ de xuǎnzé, xiànzài zhōngyú xiàng suǒyǒu rén zhèngmíngle tā de xuǎnzé shì zhèngquè de.', 'Lúc đó cha mẹ họ hàng đều không ủng hộ, nhưng cô kiên trì lựa chọn, giờ chứng minh lựa chọn đúng.']] },
        { label: '结果', items: [['小张，你这份计划书写得不错，就按照这个计划去做市场调查吧。下个月把调查结果交上来。', 'Xiǎo Zhāng, nǐ zhè fèn jìhuàshū xiě de búcuò, jiù ànzhào zhège jìhuà qù zuò shìchǎng diàochá ba. Xià ge yuè bǎ diàochá jiéguǒ jiāo shànglai.', 'Tiểu Trương, kế hoạch này viết tốt, cứ theo đó khảo sát thị trường nhé. Tháng sau nộp kết quả khảo sát.'], ['我妻子想减肥，所以她每天早上都去骑马。结果马竟然在一个月之内瘦了二十斤。', 'Wǒ qīzi xiǎng jiǎn féi, suǒyǐ tā měi tiān zǎoshang dōu qù qí mǎ. Jiéguǒ mǎ jìngrán zài yí ge yuè zhīnèi shòule èrshí jīn.', 'Vợ tôi muốn giảm cân nên sáng nào cũng đi cưỡi ngựa. Kết quả con ngựa lại gầy đi 20 cân trong một tháng.'], ['有些人爱说“差不多”。每天的工作都是完成得差不多，结果，积累下来，就变成差很多了。', 'Yǒuxiē rén ài shuō "chàbuduō". Měi tiān de gōngzuò dōu shì wánchéng de chàbuduō, jiéguǒ, jīlěi xiàlai, jiù biànchéng chà hěn duō le.', 'Có người hay nói "gần được". Việc mỗi ngày hoàn thành gần xong, kết quả tích lại thành kém rất nhiều.']] },
        { label: '上', items: [['这个城市的地铁已经有上百年的历史了。', 'Zhège chéngshì de dìtiě yǐjīng yǒu shàng bǎi nián de lìshǐ le.', 'Tàu điện ngầm của thành phố này đã có lịch sử hàng trăm năm.'], ['每年有成千上万的高中毕业生参加艺术考试。', 'Měi nián yǒu chéngqiān shàngwàn de gāozhōng bìyèshēng cānjiā yìshù kǎoshì.', 'Mỗi năm có hàng nghìn hàng vạn học sinh tốt nghiệp cấp ba thi nghệ thuật.'], ['爱迪生就是在找了上千种材料后才找到了能点亮电灯的材料。', 'Àidíshēng jiùshì zài zhǎole shàng qiān zhǒng cáiliào hòu cái zhǎodàole néng diǎnliàng diàndēng de cáiliào.', 'Edison tìm hàng nghìn loại vật liệu mới tìm ra vật liệu thắp sáng bóng đèn.']] },
      ],
    },
  ],

  notes: [
    { title: '难道', body: 'Phó từ nhấn mạnh ngữ khí câu hỏi tu từ: câu hỏi tu từ khẳng định mang nghĩa phủ định và ngược lại. 难道你不减肥了？', say: '难道你不减肥了' },
    { title: '通过', body: 'Giới từ: nhờ người/phương tiện/cách thức (通过努力). Động từ: đi qua từ đầu này sang đầu kia (步行通过); hoặc đạt yêu cầu (通过面试). So với 经过: 经过 nhấn mạnh quá trình, đi ngang qua, và còn là danh từ "diễn biến".', say: '任何成功都要通过努力才能得到' },
    { title: '可是', body: 'Liên từ chuyển ý ở vế sau câu phức; vế đầu thường có 虽然.', say: '可是她坚持自己的选择' },
    { title: '结果', body: 'Danh từ: trạng thái cuối cùng của sự việc (调查结果). Liên từ: ở vế sau quan hệ nhân quả, nêu kết cục (结果马竟然瘦了二十斤).', say: '不要担心结果' },
    { title: '上', body: 'Động từ 上 = đạt tới, đủ (số lượng/mức độ), theo sau thường là tân ngữ chỉ số lượng: 上百年, 上千种材料, 成千上万.', say: '找了上千种材料' },
    { title: 'Văn hóa: 阳光总在风雨后', body: '"Sau cơn mưa trời lại sáng": khó khăn chỉ là tạm thời, dũng cảm đối mặt thì mới có hy vọng thành công. Bài còn nhắc Edison đã thử hàng nghìn loại vật liệu mới làm ra bóng đèn.', say: '阳光总在风雨后' },
  ],

  writeChars: ['饼', '坚', '放', '弃', '赢', '汗', '勇', '敢'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa',
      items: [
        { q: '孙月买了些什么？她为什么不想减肥了？', hint: '饼干和巧克力；一个月只轻了一公斤，没有信心了。' },
        { q: '怎样减肥才能有效果？', hint: '少吃东西、多运动，还要坚持。' },
        { q: '张远的网球为什么打得那么好？', hint: '他不管春夏秋冬，练球从来没有休息过一天。' },
        { q: '为什么说没有人能随随便便成功？', hint: '任何成功都要通过努力才能得到。' },
        { q: '王红是干什么的？她是怎样获得成功的？', hint: '作家；她放弃律师工作，专门写小说，坚持自己的选择。' },
        { q: '为什么说有时候放弃是一种聪明的选择？', hint: '一个人只有两只手，不可能得到所有想要的东西。' },
        { q: '过程和结果，哪个更重要？为什么说失败了也没关系？', hint: '过程更重要；因为至少已经努力过，还能总结有用的经验。' },
        { q: '爱迪生是怎样成功发明电灯的？“阳光总在风雨后”是什么意思？', hint: '找了上千种材料；困难只是暂时的，勇敢面对才有希望成功。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: nói về suy nghĩ của bạn về thành công', hint: '你眼中成功的人是谁？他/她多大年龄？你认为他/她成功的原因是什么？你认为成功是什么样的？' },
        { q: 'Theo nhóm: chia sẻ một lần kiên trì thành công, dùng ít nhất 4 cấu trúc', hint: '难道；通过；可是；结果；至少；放弃；坚持；勇敢地面对。' },
      ],
    },
  ],

  sentences: [
    { parts: ['难道', '你', '不', '减肥', '了'], pinyin: 'Nándào nǐ bù jiǎn féi le?', vi: 'Chẳng lẽ bạn không giảm cân nữa?' },
    { parts: ['要', '想', '减肥', '成功', '只能', '坚持'], pinyin: 'Yào xiǎng jiǎn féi chénggōng zhǐ néng jiānchí.', vi: 'Muốn giảm cân thành công chỉ có kiên trì.' },
    { parts: ['任何', '成功', '都', '要', '通过', '努力', '才', '能', '得到'], pinyin: 'Rènhé chénggōng dōu yào tōngguò nǔlì cái néng dédào.', vi: 'Mọi thành công đều phải nhờ nỗ lực.' },
    { parts: ['不要', '担心', '结果', '不要', '考虑', '会', '不会', '失败'], pinyin: 'Búyào dān xīn jiéguǒ, búyào kǎolǜ huì bu huì shībài.', vi: 'Đừng lo kết quả, đừng nghĩ có thất bại hay không.' },
    { parts: ['阳光', '总', '在', '风雨', '后'], pinyin: 'Yángguāng zǒng zài fēngyǔ hòu.', vi: 'Sau cơn mưa trời lại sáng.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 过程 · B 至少 · C 区别 · D 正确 · E 暂时. Gõ chữ cái A–E.',
      items: [
        { prompt: '我住的地方离地铁站有点儿远，走路（ ）要三十分钟。', answer: 'B', gloss: '至少' }, { prompt: '所有的困难都是（ ）的，要有信心，我相信你一定会成功。', answer: 'E', gloss: '暂时' },
        { prompt: '“爱”和“喜欢”有什么（ ）？我认为“爱”比“喜欢”的感情更深。', answer: 'C', gloss: '区别' }, { prompt: '其实，只要我们真正努力过了，就不需要太关心结果。因为不管最后是成功还是失败，在努力的（ ）中，我们已经学到了很多东西。', answer: 'A', gloss: '过程' },
        { prompt: '减肥不只是为了瘦，更是为了健康。（ ）的减肥方法是按时吃饭，多吃水果，多运动，而不是饿肚子。', answer: 'D', gloss: '正确' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 汗 · B 得 (děi) · C 取 · D 理想 · E 放弃. Gõ chữ cái A–E.',
      items: [
        { prompt: '师傅，麻烦您快点儿行吗？我（ ）在九点之前到大使馆。 不用担心，保证按时把您送到。', answer: 'B', gloss: '得' }, { prompt: '你哥不是说三点到吗？都过去半个小时了，怎么还没出来？ 他还得去（ ）行李箱，您别担心，我打个电话问问。', answer: 'C', gloss: '取' },
        { prompt: '外面热吗？你怎么满头大（ ）？ 电梯坏了，我爬楼梯上来的。', answer: 'A', gloss: '汗' }, { prompt: '你考虑清楚了？真的要（ ）这次机会？ 是的，我妈妈身体不太好，我决定留下来照顾她。', answer: 'E', gloss: '放弃' },
        { prompt: '你研究生考试考得怎么样？ 数学可能考得不太（ ）。', answer: 'D', gloss: '理想' },
      ],
    },
    {
      title: 'Giáo trình 比一比 · 通过 / 经过 (gõ từ)',
      hint: 'Gõ 通过 hoặc 经过 theo đáp án sách (câu 4 chấp nhận cả hai).',
      items: [
        { prompt: '我不了解这件事情的（ ），你问问其他人吧。', answer: '经过', gloss: '经过' },
        { prompt: '（ ）这段时间的学习，他的汉语水平提高了不少。', answer: '通过', accept: ['经过'], gloss: '通过 / 经过' },
        { prompt: '有些人（ ）节食的方法来减肥，虽然有效，但是时间长了对身体没有好处。', answer: '通过', gloss: '通过' },
      ],
    },
    {
      title: 'Giáo trình 扩展 · 结果 / 如果 / 效果 (gõ từ)',
      hint: 'Gõ 结果, 如果 hoặc 效果.',
      items: [
        { prompt: '做事情，不要一开始就考虑过多：会不会很难，（ ）会怎么样……这些其实都不重要，关键是要勇敢地去做，只有去做，一切才有可能。', answer: '结果', gloss: '结果' },
        { prompt: '春天天气时冷时热，容易感冒，医生提醒人们要注意室内空气质量，早上起床后应该打开窗户换换空气。（ ）感冒了，要及时去医院。', answer: '如果', gloss: '如果' },
        { prompt: '水果减肥法是指通过每天只吃水果而不再吃别的东西来减肥的一种方法。这样减肥虽然有一定的（ ），却很不健康。', answer: '效果', gloss: '效果' },
      ],
    },
  ],
}
