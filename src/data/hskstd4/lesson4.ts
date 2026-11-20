import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 4 (Thượng), Bài 4: 不要太着急赚钱 (sách trang 48–58).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách, dịch hội thoại do app tự thêm.
 * Nghe: 04-1…04-5. Bài tập: 比一比/练习 2/扩展, đáp án theo "HSK4-1-BT" trang 4.
 */

const A = '/audio/hsk-std4/'

export const hskStd4Lesson4: Lesson = {
  id: 4,
  title: 'Đừng quá nôn nóng kiếm tiền',
  hanzi: '不要太着急赚钱',
  pinyin: 'Búyào tài zháojí zhuàn qián',
  vi: 'Đừng quá nôn nóng kiếm tiền',
  intro: 'Nói về công việc, kế hoạch và trách nhiệm. Học 以为, 原来 (so với 本来), 并, 按照, 甚至.',

  dialogue: [
    { who: 'A', name: '小林', hanzi: '听说你又换工作了？今年已经换了三次工作了吧？', pinyin: 'Tīngshuō nǐ yòu huàn gōngzuò le? Jīnnián yǐjīng huànle sān cì gōngzuò le ba?', vi: 'Nghe nói bạn lại đổi việc? Năm nay đã đổi ba lần rồi nhỉ?', scene: 'Bài 1 · Tiểu Lâm và Tiểu Lý nói về công việc của Tiểu Lý' },
    { who: 'B', name: '小李', hanzi: '别提了！我以为新工作比以前的好，没想到还没有以前好呢。', pinyin: 'Biétí le! Wǒ yǐwéi xīn gōngzuò bǐ yǐqián de hǎo, méi xiǎngdào hái méiyǒu yǐqián hǎo ne.', vi: 'Đừng nhắc nữa! Tôi tưởng việc mới tốt hơn trước, không ngờ còn chưa bằng trước.' },
    { who: 'A', name: '小林', hanzi: '上次那份工作你只做了两个月就离开了，其实，完全适应一个新的工作需要一年时间，所以，经常换工作不一定好。', pinyin: 'Shàng cì nà fèn gōngzuò nǐ zhǐ zuòle liǎng ge yuè jiù líkāi le, qíshí, wánquán shìyìng yí ge xīn de gōngzuò xūyào yì nián shíjiān, suǒyǐ, jīngcháng huàn gōngzuò bù yídìng hǎo.', vi: 'Công việc lần trước bạn chỉ làm hai tháng đã nghỉ; thật ra thích nghi hoàn toàn với việc mới cần một năm, nên hay đổi việc chưa chắc tốt.' },
    { who: 'B', name: '小李', hanzi: '我也明白。但是那份工作的收入太少了！', pinyin: 'Wǒ yě míngbai. Dànshì nà fèn gōngzuò de shōurù tài shǎo le!', vi: 'Tôi cũng hiểu. Nhưng thu nhập của việc đó ít quá!' },
    { who: 'A', name: '小林', hanzi: '你才到新公司，不要太着急赚钱，多学习才是最重要的。', pinyin: 'Nǐ cái dào xīn gōngsī, búyào tài zháojí zhuàn qián, duō xuéxí cái shì zuì zhòngyào de.', vi: 'Bạn mới đến công ty mới, đừng quá nôn nóng kiếm tiền, học nhiều mới là quan trọng nhất.' },
    { who: 'B', name: '小李', hanzi: '好。我一定会努力把现在这份工作做好。', pinyin: 'Hǎo. Wǒ yídìng huì nǔlì bǎ xiànzài zhè fèn gōngzuò zuòhǎo.', vi: 'Được. Tôi nhất định sẽ cố gắng làm tốt công việc này.' },
    { who: 'A', name: '王经理', hanzi: '那份调查还要多长时间才能做完？', pinyin: 'Nà fèn diàochá hái yào duō cháng shíjiān cái néng zuòwán?', vi: 'Bản khảo sát đó còn cần bao lâu mới làm xong?', scene: 'Bài 2 · Giám đốc Vương và Tiểu Lý nói về công việc' },
    { who: 'B', name: '小李', hanzi: '按原来的计划应该是两周，但是我们可以提前完成，周末保证做完。', pinyin: 'Àn yuánlái de jìhuà yīnggāi shì liǎng zhōu, dànshì wǒmen kěyǐ tíqián wánchéng, zhōumò bǎozhèng zuòwán.', vi: 'Theo kế hoạch ban đầu là hai tuần, nhưng chúng tôi có thể hoàn thành sớm, cuối tuần cam đoan xong.' },
    { who: 'A', name: '王经理', hanzi: '虽然最近工作很忙，但你们也要注意身体啊。', pinyin: 'Suīrán zuìjìn gōngzuò hěn máng, dàn nǐmen yě yào zhùyì shēntǐ a.', vi: 'Dù dạo này công việc bận, các bạn cũng phải chú ý sức khỏe nhé.' },
    { who: 'B', name: '小李', hanzi: '谢谢您！现在有很多事情等着我做，真不知道该先做哪个好。', pinyin: 'Xièxie nín! Xiànzài yǒu hěn duō shìqing děngzhe wǒ zuò, zhēn bù zhīdào gāi xiān zuò nǎge hǎo.', vi: 'Cảm ơn ông! Giờ có nhiều việc đang chờ tôi, thật không biết nên làm việc nào trước.' },
    { who: 'A', name: '王经理', hanzi: '每天早上我都把当天计划要做的事情写在笔记本上，提醒自己安排好时间。你也可以试试这样做。', pinyin: 'Měi tiān zǎoshang wǒ dōu bǎ dàngtiān jìhuà yào zuò de shìqing xiě zài bǐjìběn shang, tíxǐng zìjǐ ānpái hǎo shíjiān. Nǐ yě kěyǐ shìshi zhèyàng zuò.', vi: 'Mỗi sáng tôi đều ghi việc dự định làm trong ngày vào sổ, nhắc mình sắp xếp thời gian. Bạn cũng có thể thử.' },
    { who: 'B', name: '小李', hanzi: '这个办法真不错！这样我就不会手忙脚乱了。', pinyin: 'Zhège bànfǎ zhēn búcuò! Zhèyàng wǒ jiù bú huì shǒumáng-jiǎoluàn le.', vi: 'Cách này hay thật! Như vậy tôi sẽ không cuống cuồng nữa.' },
    { who: 'A', name: '王经理', hanzi: '什么事让你这么高兴啊？', pinyin: 'Shénme shì ràng nǐ zhème gāoxìng a?', vi: 'Chuyện gì khiến anh vui vậy?', scene: 'Bài 3 · Giám đốc Vương và giám đốc Mã nói về công việc' },
    { who: 'B', name: '马经理', hanzi: '我们和上次那个公司的生意终于谈成了。', pinyin: 'Wǒmen hé shàng cì nàge gōngsī de shēngyi zhōngyú tánchéng le.', vi: 'Việc làm ăn với công ty lần trước cuối cùng đã bàn xong.' },
    { who: 'A', name: '王经理', hanzi: '太好了！你工作那么努力，公司会越来越好的。', pinyin: 'Tài hǎo le! Nǐ gōngzuò nàme nǔlì, gōngsī huì yuè lái yuè hǎo de.', vi: 'Tốt quá! Anh làm việc chăm chỉ thế, công ty sẽ ngày càng tốt.' },
    { who: 'B', name: '马经理', hanzi: '我原来以为做生意很简单，后来才发现其实并不容易，现在赚钱越来越难了。', pinyin: 'Wǒ yuánlái yǐwéi zuò shēngyi hěn jiǎndān, hòulái cái fāxiàn qíshí bìng bù róngyì, xiànzài zhuàn qián yuè lái yuè nán le.', vi: 'Trước tôi tưởng kinh doanh đơn giản, sau mới thấy thật ra không dễ, giờ kiếm tiền càng ngày càng khó.' },
    { who: 'A', name: '王经理', hanzi: '慢慢来，万事开头难，重要的是要多积累经验。', pinyin: 'Mànmàn lái, wànshì kāitóu nán, zhòngyào de shì yào duō jīlěi jīngyàn.', vi: 'Từ từ thôi, vạn sự khởi đầu nan, quan trọng là tích lũy nhiều kinh nghiệm.' },
    { who: 'B', name: '马经理', hanzi: '我相信经过我们大家的努力，公司的生意会越做越大，一切都会好的。', pinyin: 'Wǒ xiāngxìn jīngguò wǒmen dàjiā de nǔlì, gōngsī de shēngyi huì yuè zuò yuè dà, yíqiè dōu huì hǎo de.', vi: 'Tôi tin nhờ nỗ lực của mọi người, việc kinh doanh của công ty sẽ ngày càng lớn, mọi thứ sẽ tốt.' },
    { who: 'A', name: '短文', hanzi: '我们今年的工作都已经按照计划完成了。这一段时间，尽管工作很紧张，中间也遇到了很多困难，但是因为有大家的努力，我们成功地解决了问题，顺利地完成了工作，非常感谢大家对我的帮助！另外，马经理让我告诉大家一个好消息，因为大家按时完成了工作，公司决定这个月给每人多发三千元奖金。感谢大家这三个多月的努力工作，希望明年能有更大的成绩！', pinyin: 'Wǒmen jīnnián de gōngzuò dōu yǐjīng ànzhào jìhuà wánchéng le. Zhè yí duàn shíjiān, jǐnguǎn gōngzuò hěn jǐnzhāng, zhōngjiān yě yùdàole hěn duō kùnnan, dànshì yīnwèi yǒu dàjiā de nǔlì, wǒmen chénggōng de jiějué le wèntí, shùnlì de wánchéngle gōngzuò, fēicháng gǎnxiè dàjiā duì wǒ de bāngzhù! Lìngwài, Mǎ jīnglǐ ràng wǒ gàosu dàjiā yí ge hǎo xiāoxi, yīnwèi dàjiā ànshí wánchéngle gōngzuò, gōngsī juédìng zhège yuè gěi měi rén duō fā sānqiān yuán jiǎngjīn. Gǎnxiè dàjiā zhè sān ge duō yuè de nǔlì gōngzuò, xīwàng míngnián néng yǒu gèng dà de chéngjì!', vi: 'Công việc năm nay của chúng ta đều đã hoàn thành theo kế hoạch. Thời gian qua, dù công việc căng thẳng, giữa chừng cũng gặp nhiều khó khăn, nhưng nhờ nỗ lực của mọi người, chúng ta đã giải quyết thành công vấn đề, hoàn thành suôn sẻ công việc, rất cảm ơn mọi người đã giúp đỡ tôi! Ngoài ra, giám đốc Mã bảo tôi báo một tin vui: vì mọi người hoàn thành đúng hạn, công ty quyết định tháng này phát thêm cho mỗi người 3000 tệ tiền thưởng. Cảm ơn nỗ lực hơn ba tháng qua, mong năm sau có thành tích lớn hơn!', scene: 'Bài 4 · Thông báo công việc' },
    { who: 'A', name: '短文', hanzi: '年轻人刚开始工作的时候，不要太急着赚钱，不要眼睛里只有工资和奖金。在工作的前几年，重要的是丰富自己的工作经验，学习与同事交流的方法，积累专业知识，这些比收入重要多了。但是很多时候，我们不得不去做一些自己不愿意做甚至是非常不喜欢的工作。这时，我们最需要的就是对工作的责任心。一个人即使能力再高，经验再丰富，如果对工作没有责任心，也很难把工作做好。', pinyin: 'Niánqīng rén gāng kāishǐ gōngzuò de shíhou, búyào tài jízhe zhuàn qián, búyào yǎnjing li zhǐyǒu gōngzī hé jiǎngjīn. Zài gōngzuò de qián jǐ nián, zhòngyào de shì fēngfù zìjǐ de gōngzuò jīngyàn, xuéxí yǔ tóngshì jiāoliú de fāngfǎ, jīlěi zhuānyè zhīshi, zhèxiē bǐ shōurù zhòngyào duō le. Dànshì hěn duō shíhou, wǒmen bù dé bú qù zuò yìxiē zìjǐ bú yuànyì zuò shènzhì shì fēicháng bù xǐhuan de gōngzuò. Zhè shí, wǒmen zuì xūyào de jiù shì duì gōngzuò de zérènxīn. Yí ge rén jíshǐ nénglì zài gāo, jīngyàn zài fēngfù, rúguǒ duì gōngzuò méiyǒu zérènxīn, yě hěn nán bǎ gōngzuò zuòhǎo.', vi: 'Khi người trẻ mới đi làm, đừng quá nôn nóng kiếm tiền, đừng chỉ để mắt đến lương thưởng. Vài năm đầu quan trọng là làm giàu kinh nghiệm, học cách giao lưu với đồng nghiệp, tích lũy kiến thức chuyên môn, những thứ này quan trọng hơn thu nhập nhiều. Nhưng nhiều lúc ta buộc phải làm những việc mình không muốn, thậm chí rất không thích. Lúc đó ta cần nhất là tinh thần trách nhiệm với công việc. Một người dù năng lực cao, kinh nghiệm phong phú, nếu không có trách nhiệm với công việc thì cũng khó làm tốt.', scene: 'Bài 5 · Người trẻ và công việc' },
  ],
  dialogueClips: [
    { label: '04-1 · Tiểu Lâm và Tiểu Lý', src: A + 'l4-1.mp3' },
    { label: '04-2 · Giám đốc Vương và Tiểu Lý', src: A + 'l4-2.mp3' },
    { label: '04-3 · Giám đốc Vương và giám đốc Mã', src: A + 'l4-3.mp3' },
    { label: '04-4 · Thông báo công việc', src: A + 'l4-4.mp3' },
    { label: '04-5 · Người trẻ và công việc', src: A + 'l4-5.mp3' },
  ],
  dialogueTip: '<b>以为</b>: tưởng rằng (không đúng sự thật). <b>原来</b>: ban đầu; hóa ra. <b>并</b> + phủ định: nhấn mạnh phủ định (并不容易). <b>按照</b>: theo, căn cứ. <b>甚至</b>: thậm chí.',
  slowSay: '不要太着急赚钱',

  vocab: [
    { hanzi: '提', pinyin: 'tí', pos: 'động từ', meaning: 'nhắc đến', han_viet: 'đề' },
    { hanzi: '以为', pinyin: 'yǐwéi', pos: 'động từ', meaning: 'cho rằng, tưởng là', han_viet: 'dĩ vi' },
    { hanzi: '份', pinyin: 'fèn', pos: 'lượng từ', meaning: '(dùng cho công việc, báo chí…) tờ, bản', han_viet: 'phần' },
    { hanzi: '完全', pinyin: 'wánquán', pos: 'phó từ', meaning: 'hoàn toàn', han_viet: 'hoàn toàn' },
    { hanzi: '赚', pinyin: 'zhuàn', pos: 'động từ', meaning: 'kiếm (tiền)', han_viet: 'trám' },
    { hanzi: '调查', pinyin: 'diàochá', pos: 'động từ', meaning: 'điều tra, khảo sát', han_viet: 'điều tra' },
    { hanzi: '原来', pinyin: 'yuánlái', pos: 'tính từ', meaning: 'ban đầu', han_viet: 'nguyên lai' },
    { hanzi: '计划', pinyin: 'jìhuà', pos: 'danh từ/động từ', meaning: 'kế hoạch; vạch kế hoạch', han_viet: 'kế hoạch' },
    { hanzi: '提前', pinyin: 'tíqián', pos: 'động từ', meaning: 'làm việc gì đó sớm hơn quy định', han_viet: 'đề tiền' },
    { hanzi: '保证', pinyin: 'bǎozhèng', pos: 'động từ', meaning: 'cam đoan, bảo đảm', han_viet: 'bảo chứng' },
    { hanzi: '提醒', pinyin: 'tí xǐng', pos: 'động từ', meaning: 'nhắc nhở', han_viet: 'đề tỉnh' },
    { hanzi: '乱', pinyin: 'luàn', pos: 'tính từ', meaning: 'lộn xộn, lung tung', han_viet: 'loạn' },
    { hanzi: '生意', pinyin: 'shēngyi', pos: 'danh từ', meaning: 'việc kinh doanh, buôn bán', han_viet: 'sinh ý' },
    { hanzi: '谈', pinyin: 'tán', pos: 'động từ', meaning: 'nói chuyện, thảo luận', han_viet: 'đàm' },
    { hanzi: '并', pinyin: 'bìng', pos: 'phó từ', meaning: 'dùng trước từ phủ định để nhấn mạnh', han_viet: 'tịnh' },
    { hanzi: '积累', pinyin: 'jīlěi', pos: 'động từ', meaning: 'tích lũy', han_viet: 'tích lũy' },
    { hanzi: '经验', pinyin: 'jīngyàn', pos: 'danh từ', meaning: 'kinh nghiệm', han_viet: 'kinh nghiệm' },
    { hanzi: '一切', pinyin: 'yíqiè', pos: 'đại từ', meaning: 'tất cả', han_viet: 'nhất thiết' },
    { hanzi: '按照', pinyin: 'ànzhào', pos: 'giới từ', meaning: 'theo', han_viet: 'án chiếu' },
    { hanzi: '成功', pinyin: 'chénggōng', pos: 'tính từ', meaning: 'thành công', han_viet: 'thành công' },
    { hanzi: '顺利', pinyin: 'shùnlì', pos: 'tính từ', meaning: 'thuận lợi, suôn sẻ', han_viet: 'thuận lợi' },
    { hanzi: '感谢', pinyin: 'gǎnxiè', pos: 'động từ', meaning: 'cảm ơn', han_viet: 'cảm tạ' },
    { hanzi: '消息', pinyin: 'xiāoxi', pos: 'danh từ', meaning: 'tin tức', han_viet: 'tiêu tức' },
    { hanzi: '按时', pinyin: 'ànshí', pos: 'phó từ', meaning: 'đúng hạn', han_viet: 'án thời' },
    { hanzi: '奖金', pinyin: 'jiǎngjīn', pos: 'danh từ', meaning: 'tiền thưởng', han_viet: 'thưởng kim' },
    { hanzi: '工资', pinyin: 'gōngzī', pos: 'danh từ', meaning: 'tiền lương', han_viet: 'công tư' },
    { hanzi: '方法', pinyin: 'fāngfǎ', pos: 'danh từ', meaning: 'phương pháp, cách thức', han_viet: 'phương pháp' },
    { hanzi: '知识', pinyin: 'zhīshi', pos: 'danh từ', meaning: 'kiến thức', han_viet: 'tri thức' },
    { hanzi: '不得不', pinyin: 'bù dé bù', pos: 'cụm', meaning: 'phải, không thể không', han_viet: 'bất đắc bất' },
    { hanzi: '甚至', pinyin: 'shènzhì', pos: 'liên từ', meaning: 'thậm chí', han_viet: 'thậm chí' },
    { hanzi: '责任', pinyin: 'zérèn', pos: 'danh từ', meaning: 'trách nhiệm', han_viet: 'trách nhiệm' },
  ],

  sections: [
    {
      kind: 'examples', label: '以为', title: '以为 (cho rằng, tưởng là)',
      intro: 'Động từ 以为 thường dùng để chỉ việc gì đó không phải là sự thật.',
      groups: [{ label: 'Ví dụ', items: [['她汉语说得那么好，我还以为她是中国人。', 'Tā Hànyǔ shuō de nàme hǎo, wǒ hái yǐwéi tā shì Zhōngguó rén.', 'Cô ấy nói tiếng Hán giỏi thế, tôi còn tưởng cô ấy là người Trung Quốc.'], ['马克以为今天是星期一，到了学校一看，没人来上课，才发现今天是星期天。', 'Mǎkè yǐwéi jīntiān shì xīngqīyī, dàole xuéxiào yí kàn, méi rén lái shàng kè, cái fāxiàn jīntiān shì xīngqītiān.', 'Mark tưởng hôm nay thứ Hai, đến trường không ai đi học mới biết là Chủ nhật.'], ['我以为新工作比以前的好，没想到还没有以前好呢。', 'Wǒ yǐwéi xīn gōngzuò bǐ yǐqián de hǎo, méi xiǎngdào hái méiyǒu yǐqián hǎo ne.', 'Tôi tưởng việc mới tốt hơn trước, không ngờ chưa bằng trước.']] }],
    },
    {
      kind: 'examples', label: '原来', title: '原来 (ban đầu, trước đây; hóa ra)',
      intro: 'Danh từ: ban đầu, trước đây (tình huống ở vế sau khác với trước). Tính từ: đầu tiên, không thay đổi (khi bổ nghĩa danh từ phải có 的). Phó từ: một thời kỳ trước đây, nay không còn thế; hoặc phát hiện ra tình huống trước đây không biết (đứng trước hoặc sau chủ ngữ).',
      groups: [{ label: 'Ví dụ', items: [['坐火车从北京到上海，原来最快差不多需要12个小时，现在有了高铁，5个小时就能到。', 'Zuò huǒchē cóng Běijīng dào Shànghǎi, yuánlái zuì kuài chàbuduō xūyào shí\'èr ge xiǎoshí, xiànzài yǒule gāotiě, wǔ ge xiǎoshí jiù néng dào.', 'Đi tàu từ Bắc Kinh đến Thượng Hải trước nhanh nhất cũng gần 12 tiếng, giờ có tàu cao tốc 5 tiếng là tới.'], ['按原来的计划应该是两周，但是我们可以提前完成。', 'Àn yuánlái de jìhuà yīnggāi shì liǎng zhōu, dànshì wǒmen kěyǐ tíqián wánchéng.', 'Theo kế hoạch ban đầu là hai tuần, nhưng chúng tôi có thể hoàn thành sớm.'], ['她原来是汉语老师，现在已经成了一名律师。', 'Tā yuánlái shì Hànyǔ lǎoshī, xiànzài yǐjīng chéngle yì míng lǜshī.', 'Trước cô ấy là giáo viên tiếng Hán, giờ đã thành luật sư.'], ['马克一直等李明回电话，可是电话一晚上都没来，原来李明把马克的电话号码记错了。', 'Mǎkè yìzhí děng Lǐ Míng huí diànhuà, kěshì diànhuà yì wǎnshang dōu méi lái, yuánlái Lǐ Míng bǎ Mǎkè de diànhuà hàomǎ jìcuò le.', 'Mark chờ Lý Minh gọi lại cả tối không thấy, hóa ra Lý Minh nhớ nhầm số của Mark.']] }],
    },
    {
      kind: 'examples', label: '原来 – 本来', title: 'So sánh 原来 và 本来',
      intro: 'Giống nhau: đều là tính từ (đầu tiên, không thay đổi) và phó từ (tình huống trước đây khác hiện nay). Khác nhau: 原来 làm phó từ còn chỉ việc phát hiện ra tình huống trước đây không biết; 本来 làm phó từ còn diễn tả điều lẽ ra phải như vậy.',
      groups: [{ label: 'Ví dụ', items: [['这是它原来/本来的颜色，不过现在已经穿了好几年，颜色都变了。', 'Zhè shì tā yuánlái/běnlái de yánsè, búguò xiànzài yǐjīng chuānle hǎo jǐ nián, yánsè dōu biàn le.', 'Đây là màu ban đầu của nó, nhưng giờ mặc mấy năm rồi màu đã đổi.'], ['我家原来/本来住这儿附近，不过这里以前不像现在有这么多楼房。', 'Wǒ jiā yuánlái/běnlái zhù zhèr fùjìn, búguò zhèlǐ yǐqián bú xiàng xiànzài yǒu zhème duō lóufáng.', 'Nhà tôi trước ở gần đây, nhưng trước kia không có nhiều nhà cao tầng như bây giờ.'], ['我还以为是谁帮我打扫房间呢，原来是你啊！', 'Wǒ hái yǐwéi shì shéi bāng wǒ dǎsǎo fángjiān ne, yuánlái shì nǐ a!', 'Tôi còn tưởng ai dọn phòng giúp tôi, hóa ra là bạn!'], ['这本书本来应该昨天还给你，真不好意思。', 'Zhè běn shū běnlái yīnggāi zuótiān huán gěi nǐ, zhēn bù hǎoyìsi.', 'Quyển sách này lẽ ra hôm qua phải trả bạn, thật ngại quá.']] }],
    },
    {
      kind: 'examples', label: '并 · 按照 · 甚至', title: '并, 按照, 甚至',
      intro: '并: phó từ, dùng trước 不/没(有) để nhấn mạnh phủ định, thường trong câu chuyển ý nhằm bác bỏ một quan điểm. 按照: giới từ, nghĩa "theo, căn cứ vào". 甚至: phó từ nhấn mạnh một ví dụ nổi bật, đặt trước mục cuối cùng của các danh từ, động từ hay câu đồng đẳng.',
      groups: [
        { label: '并', items: [['其实，人们将来做什么工作可能和上学的专业并没有太大关系。', 'Qíshí, rénmen jiānglái zuò shénme gōngzuò kěnéng hé shàng xué de zhuānyè bìng méiyǒu tài dà guānxi.', 'Thật ra công việc tương lai của người ta có thể không liên quan nhiều đến chuyên ngành đã học.'], ['我原来以为做生意很简单，后来才发现其实并不容易。', 'Wǒ yuánlái yǐwéi zuò shēngyi hěn jiǎndān, hòulái cái fāxiàn qíshí bìng bù róngyì.', 'Trước tôi tưởng kinh doanh đơn giản, sau mới thấy thật ra không dễ.'], ['根据调查，人每天晚上最少应该睡7个小时，但是这并不适合每一个人。', 'Gēnjù diàochá, rén měi tiān wǎnshang zuìshǎo yīnggāi shuì qī ge xiǎoshí, dànshì zhè bìng bú shìhé měi yí ge rén.', 'Theo khảo sát, mỗi tối nên ngủ ít nhất 7 tiếng, nhưng điều này không hợp với mọi người.']] },
        { label: '按照', items: [['我们今年的工作都已经按照计划完成了。', 'Wǒmen jīnnián de gōngzuò dōu yǐjīng ànzhào jìhuà wánchéng le.', 'Công việc năm nay của chúng ta đã hoàn thành theo kế hoạch.'], ['这回材料都按照银行的要求准备好了吧？', 'Zhè huí cáiliào dōu ànzhào yínháng de yāoqiú zhǔnbèi hǎo le ba?', 'Lần này hồ sơ đã chuẩn bị theo yêu cầu của ngân hàng rồi chứ?'], ['按照经验，这个问题应该可以很快解决，请大家放心。', 'Ànzhào jīngyàn, zhège wèntí yīnggāi kěyǐ hěn kuài jiějué, qǐng dàjiā fàng xīn.', 'Theo kinh nghiệm, vấn đề này sẽ giải quyết nhanh, mọi người yên tâm.']] },
        { label: '甚至', items: [['这个房子离您公司也不远，您可以坐公共汽车甚至可以骑自行车上班。', 'Zhège fángzi lí nín gōngsī yě bù yuǎn, nín kěyǐ zuò gōnggòng qìchē shènzhì kěyǐ qí zìxíngchē shàng bān.', 'Nhà này cũng không xa công ty, bạn có thể đi xe buýt thậm chí đạp xe đi làm.'], ['很多时候，我们不得不去做一些自己不愿意做甚至是非常不喜欢的工作。', 'Hěn duō shíhou, wǒmen bù dé bú qù zuò yìxiē zìjǐ bú yuànyì zuò shènzhì shì fēicháng bù xǐhuan de gōngzuò.', 'Nhiều lúc ta buộc phải làm việc mình không muốn, thậm chí rất không thích.'], ['迟到会让别人觉得你没有责任心，使你错过重要的机会，甚至会让别人不再相信你。', 'Chídào huì ràng biérén juéde nǐ méiyǒu zérènxīn, shǐ nǐ cuòguò zhòngyào de jīhuì, shènzhì huì ràng biérén bú zài xiāngxìn nǐ.', 'Đến muộn khiến người khác thấy bạn thiếu trách nhiệm, bỏ lỡ cơ hội, thậm chí họ không còn tin bạn.']] },
      ],
    },
    {
      kind: 'examples', label: 'Từ cùng chữ: 法', title: 'Những từ có chữ giống nhau: 法',
      intro: '办法 (cách làm), 法律 (pháp luật), 方法 (phương pháp).',
      groups: [{ label: 'Ví dụ', items: [['要想完全解决这个难题，还需要找更好的办法。', 'Yào xiǎng wánquán jiějué zhège nántí, hái xūyào zhǎo gèng hǎo de bànfǎ.', 'Muốn giải quyết hoàn toàn khó khăn này cần tìm cách tốt hơn.'], ['我希望能够用法律来帮助别人，所以上大学的时候，我选择了法律专业。', 'Wǒ xīwàng nénggòu yòng fǎlǜ lái bāngzhù biérén, suǒyǐ shàng dàxué de shíhou, wǒ xuǎnzéle fǎlǜ zhuānyè.', 'Tôi mong dùng pháp luật giúp người khác nên khi học đại học tôi chọn ngành luật.'], ['在工作中，应该根据不同的人、不同的事选择不同的方法。', 'Zài gōngzuò zhōng, yīnggāi gēnjù bù tóng de rén, bù tóng de shì xuǎnzé bù tóng de fāngfǎ.', 'Trong công việc nên chọn phương pháp khác nhau tùy người và việc.']] }],
    },
  ],

  notes: [
    { title: '以为', body: 'Động từ 以为 chỉ điều người nói cho là như vậy nhưng không phải sự thật: 我以为新工作比以前的好，没想到还没有以前好呢。', say: '我以为新工作比以前的好' },
    { title: '原来', body: 'Danh từ "ban đầu", tính từ "đầu tiên, không đổi" (按原来的计划), phó từ "trước đây khác nay" (她原来是老师), và phó từ "hóa ra, phát hiện ra" (原来是你啊).', say: '按原来的计划应该是两周' },
    { title: '并', body: 'Phó từ 并 dùng trước 不/没(有) để nhấn mạnh phủ định và bác bỏ quan điểm: 其实并不容易。', say: '其实并不容易' },
    { title: '按照', body: 'Giới từ 按照 = theo, căn cứ vào: 按照计划, 按照银行的要求, 按照经验.', say: '我们今年的工作都已经按照计划完成了' },
    { title: '甚至', body: 'Phó từ 甚至 nhấn mạnh ví dụ nổi bật, thường đặt trước mục cuối cùng trong chuỗi liệt kê: 我们不得不去做一些自己不愿意做甚至是非常不喜欢的工作。', say: '甚至会让别人不再相信你' },
    { title: 'Văn hóa: 万事开头难', body: 'Vạn sự khởi đầu nan: làm việc gì lúc mới bắt đầu cũng khó, nhưng chỉ cần kiên trì sẽ dần quen và thuận lợi. Câu này thường dùng để động viên người mới bắt đầu.', say: '万事开头难' },
  ],

  writeChars: ['赚', '调', '查', '提', '积', '累', '责', '任'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa',
      items: [
        { q: '你觉得小李为什么总是换工作？', hint: '因为他觉得原来的工作收入太少。' },
        { q: '“如果认为新工作不适合你，就应该马上换。”这句话对吗？为什么？', hint: '不对，完全适应一个新的工作需要一年时间。' },
        { q: '那份调查的完成时间有什么变化？最晚什么时候可以完成？', hint: '原来的计划是两周，现在可以提前，周末保证做完。' },
        { q: '每天把计划要做的事情记下来有什么好处？', hint: '提醒自己安排好时间，不会手忙脚乱。' },
        { q: '马经理觉得做生意容易吗？为什么？', hint: '不容易，现在赚钱越来越难。' },
        { q: '他们今年的工作完成情况怎么样？公司用什么方法感谢大家？', hint: '按照计划完成了；这个月每人多发三千元奖金。' },
        { q: '刚开始工作的时候，什么最重要？遇到不愿意做的工作时应该怎么办？', hint: '丰富自己的工作经验最重要；要对工作有责任心。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: hỏi nhau về thái độ với công việc', hint: '你最希望做哪种工作？你想自己开公司还是想找工作？你觉得做生意容易吗？为什么？你认为工作时什么最重要？如果工资比较低，你会换工作吗？' },
      ],
    },
  ],

  sentences: [
    { parts: ['我', '以为', '新', '工作', '比', '以前', '的', '好'], pinyin: 'Wǒ yǐwéi xīn gōngzuò bǐ yǐqián de hǎo.', vi: 'Tôi tưởng việc mới tốt hơn trước.' },
    { parts: ['按', '原来', '的', '计划', '应该', '是', '两', '周'], pinyin: 'Àn yuánlái de jìhuà yīnggāi shì liǎng zhōu.', vi: 'Theo kế hoạch ban đầu là hai tuần.' },
    { parts: ['其实', '做', '生意', '并', '不', '容易'], pinyin: 'Qíshí zuò shēngyi bìng bù róngyì.', vi: 'Thật ra kinh doanh không dễ.' },
    { parts: ['我们', '的', '工作', '已经', '按照', '计划', '完成', '了'], pinyin: 'Wǒmen de gōngzuò yǐjīng ànzhào jìhuà wánchéng le.', vi: 'Công việc của chúng ta đã hoàn thành theo kế hoạch.' },
    { parts: ['万事', '开头', '难', '重要', '的', '是', '多', '积累', '经验'], pinyin: 'Wànshì kāitóu nán, zhòngyào de shì duō jīlěi jīngyàn.', vi: 'Vạn sự khởi đầu nan, quan trọng là tích lũy kinh nghiệm.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 完全 · B 责任 · C 顺利 · D 按时 · E 不得不. Gõ chữ cái A–E.',
      items: [
        { prompt: '飞机10点（ ）起飞，请大家不要着急。', answer: 'D', gloss: '按时' }, { prompt: '她们虽然是姐妹，但是性格（ ）不一样。', answer: 'A', gloss: '完全' },
        { prompt: '我本来以为这件事会很（ ），没想到遇到这么多困难。', answer: 'C', gloss: '顺利' }, { prompt: '没想到那天突然下起了大雨，所以他（ ）又在这里住了一晚上。', answer: 'E', gloss: '不得不' },
        { prompt: '两个人在一起生活，都要对家有（ ）感。', answer: 'B', gloss: '责任' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 提前 · B 一切 · C 积累 · D 提醒 · E 保证. Gõ chữ cái A–E.',
      items: [
        { prompt: '希望我们的工作能让您满意。 我非常满意，（ ）都安排得很好。', answer: 'B', gloss: '一切' }, { prompt: '这份调查明天上午交，你写好了吗？ 还差一点儿，您放心，我（ ）明天9点前给您。', answer: 'E', gloss: '保证' },
        { prompt: '今天下午的会议（ ）一个小时，改在两点开。 我已经看到通知了，谢谢你。', answer: 'A', gloss: '提前' }, { prompt: '听说你大学二年级的时候就开始在这个公司工作了。 是的，这让我（ ）了很多工作经验。', answer: 'C', gloss: '积累' },
        { prompt: '今天是王红的生日，记得给她打个电话。 谢谢你的（ ），我差点儿忘记了。', answer: 'D', gloss: '提醒' },
      ],
    },
    {
      title: 'Giáo trình 比一比 · 原来 / 本来 (gõ từ)',
      hint: 'Gõ 原来 hoặc 本来 theo đáp án sách.',
      items: [
        { prompt: '我（ ）星期二就能回来，但是公司让我再调查一下，所以我就留下继续工作了。', answer: '本来', gloss: '本来' },
        { prompt: '我在后面叫她，可她一直没回头。等到了她身边，才发现（ ）我认错人了。', answer: '原来', gloss: '原来' },
      ],
    },
    {
      title: 'Giáo trình 扩展 · 办法 / 法律 / 方法 (gõ từ)',
      hint: 'Gõ 办法, 法律 hoặc 方法.',
      items: [
        { prompt: '如果你在（ ）上有什么问题，我可以给你介绍一位律师。', answer: '法律', gloss: '法律' },
        { prompt: '关于这件事情，你有没有去问问叔叔？可能他有好（ ）。', answer: '办法', gloss: '办法' },
        { prompt: '要了解每个人的脾气、性格、能力等，这样才能在他们出错时选择合适的（ ）帮助他们解决问题。', answer: '方法', gloss: '方法' },
      ],
    },
  ],
}
