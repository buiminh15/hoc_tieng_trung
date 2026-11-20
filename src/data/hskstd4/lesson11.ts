import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 4 (Hạ), Bài 11: 读书好，读好书，好读书 (sách trang 10–22).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách, dịch hội thoại do app tự thêm.
 * Nghe: 11-1…11-5. Bài tập: 比一比/练习 2/扩展, đáp án theo "HSK4-2-BH" trang 1.
 * Lưu ý: quyển Hạ đánh số bài tiếp từ 11 (sách gốc in là bài 11–20 của HSK 4 Hạ).
 */

const A = '/audio/hsk-std4/'

export const hskStd4Lesson11: Lesson = {
  id: 11,
  title: 'Đọc sách có lợi, đọc sách hay, thích đọc sách',
  hanzi: '读书好，读好书，好读书',
  pinyin: 'Dú shū hǎo, dú hǎo shū, hào dú shū',
  vi: 'Đọc sách có rất nhiều lợi ích, đọc sách hay, thích đọc sách',
  intro: 'Nói về đọc sách và thi cử. Học 连……也/都……, 否则, 无论 (so với 不管), 然而, 同时.',

  dialogue: [
    { who: 'A', name: '大卫', hanzi: '你来中国才一年，汉语就说得这么流利，真厉害！', pinyin: 'Nǐ lái Zhōngguó cái yì nián, Hànyǔ jiù shuō de zhème liúlì, zhēn lìhai!', vi: 'Bạn đến Trung Quốc mới một năm mà nói tiếng Hán lưu loát thế, giỏi thật!', scene: 'Bài 1 · Mark giới thiệu cách học tiếng Hán' },
    { who: 'B', name: '马克', hanzi: '谢谢！其实我的语法不太好，很多句子说得都不太准确。', pinyin: 'Xièxie! Qíshí wǒ de yǔfǎ bú tài hǎo, hěn duō jùzi shuō de dōu bú tài zhǔnquè.', vi: 'Cảm ơn! Thật ra ngữ pháp của tôi không tốt, nhiều câu nói chưa chính xác.' },
    { who: 'A', name: '大卫', hanzi: '但是我看你跟中国人交流没什么问题，你是怎么做到的？', pinyin: 'Dànshì wǒ kàn nǐ gēn Zhōngguó rén jiāoliú méi shénme wèntí, nǐ shì zěnme zuòdào de?', vi: 'Nhưng tôi thấy bạn giao tiếp với người Trung Quốc không vấn đề gì, bạn làm thế nào?' },
    { who: 'B', name: '马克', hanzi: '平时多交一些中国朋友，经常和他们聊天儿，听说能力自然就能得到很大的提高。另外，我建议你坚持看中文报纸，这样能学到很多新词语。', pinyin: 'Píngshí duō jiāo yìxiē Zhōngguó péngyou, jīngcháng hé tāmen liáo tiānr, tīngshuō nénglì zìrán jiù néng dédào hěn dà de tígāo. Lìngwài, wǒ jiànyì nǐ jiānchí kàn Zhōngwén bàozhǐ, zhèyàng néng xuédào hěn duō xīn cíyǔ.', vi: 'Ngày thường kết bạn Trung Quốc nhiều, thường trò chuyện, khả năng nghe nói tự nhiên tiến bộ lớn. Ngoài ra tôi khuyên bạn kiên trì đọc báo tiếng Trung, như vậy học được nhiều từ mới.' },
    { who: 'A', name: '大卫', hanzi: '你太厉害了！连中文报纸都看得懂。', pinyin: 'Nǐ tài lìhai le! Lián Zhōngwén bàozhǐ dōu kàn de dǒng.', vi: 'Bạn giỏi quá! Ngay cả báo tiếng Trung cũng đọc hiểu.' },
    { who: 'B', name: '马克', hanzi: '刚开始肯定有困难，不过遇到不认识的词语，你可以查词典，然后写在本子上，有空儿就拿出来复习一下，慢慢地就会发现中文报纸也没那么难了。', pinyin: 'Gāng kāishǐ kěndìng yǒu kùnnan, búguò yùdào bú rènshi de cíyǔ, nǐ kěyǐ chá cídiǎn, ránhòu xiě zài běnzi shang, yǒu kòngr jiù ná chūlai fùxí yíxià, mànmàn de jiù huì fāxiàn Zhōngwén bàozhǐ yě méi nàme nán le.', vi: 'Lúc đầu chắc chắn khó, nhưng gặp từ chưa biết bạn có thể tra từ điển, ghi vào vở, rảnh thì lấy ra ôn, dần dần sẽ thấy báo tiếng Trung cũng không khó thế.' },
    { who: 'A', name: '小夏', hanzi: '考试结束了，你对自己的成绩满意吗？', pinyin: 'Kǎoshì jiéshù le, nǐ duì zìjǐ de chéngjì mǎnyì ma?', vi: 'Thi xong rồi, bạn hài lòng với điểm của mình không?', scene: 'Bài 2 · Tiểu Hạ và Tiểu Vũ nói chuyện thi cử' },
    { who: 'B', name: '小雨', hanzi: '说真的，我不太满意。这次阅读考试的题太多了，我没做完。', pinyin: 'Shuō zhēn de, wǒ bú tài mǎnyì. Zhè cì yuèdú kǎoshì de tí tài duō le, wǒ méi zuòwán.', vi: 'Nói thật, tôi không hài lòng lắm. Đề đọc lần này nhiều quá, tôi không làm xong.' },
    { who: 'A', name: '小夏', hanzi: '两个小时的时间应该来得及吧？', pinyin: 'Liǎng ge xiǎoshí de shíjiān yīnggāi láidejí ba?', vi: 'Hai tiếng chắc kịp chứ?' },
    { who: 'B', name: '小雨', hanzi: '这次主要是因为我先做了比较难、比较复杂的题，结果花了太多时间，后面简单的题我虽然会，可是时间来不及，最后只好放弃了。', pinyin: 'Zhè cì zhǔyào shì yīnwèi wǒ xiān zuòle bǐjiào nán, bǐjiào fùzá de tí, jiéguǒ huāle tài duō shíjiān, hòumiàn jiǎndān de tí wǒ suīrán huì, kěshì shíjiān láibují, zuìhòu zhǐhǎo fàngqì le.', vi: 'Lần này chủ yếu vì tôi làm câu khó, phức tạp trước, kết quả tốn quá nhiều thời gian, câu đơn giản phía sau tôi tuy biết nhưng không kịp, đành bỏ.' },
    { who: 'A', name: '小夏', hanzi: '其实我考得也不怎么样。有几个填空题不会做，有几个选择题，实在想不出来该选哪个，就随便猜了一个答案，结果一个都没猜对。', pinyin: 'Qíshí wǒ kǎo de yě bù zěnmeyàng. Yǒu jǐ ge tiánkòng tí bú huì zuò, yǒu jǐ ge xuǎnzé tí, shízài xiǎng bu chūlai gāi xuǎn nǎge, jiù suíbiàn cāile yí ge dá\'àn, jiéguǒ yí ge dōu méi cāiduì.', vi: 'Thật ra tôi thi cũng không ra sao. Có mấy câu điền chỗ trống không biết làm, mấy câu trắc nghiệm thật sự không nghĩ ra chọn cái nào, bèn đoán đại một đáp án, kết quả không câu nào đúng.' },
    { who: 'B', name: '小雨', hanzi: '看来要想考好，不但要认真复习，还得注意考试的方法，否则，会做的题也没时间做了。', pinyin: 'Kànlái yào xiǎng kǎohǎo, búdàn yào rènzhēn fùxí, hái děi zhùyì kǎoshì de fāngfǎ, fǒuzé, huì zuò de tí yě méi shíjiān zuò le.', vi: 'Xem ra muốn thi tốt không những phải ôn kỹ mà còn phải chú ý phương pháp làm bài, nếu không câu biết làm cũng hết thời gian làm.' },
    { who: 'A', name: '小林', hanzi: '你的客厅里怎么到处是书啊？这些书你都喜欢看吗？', pinyin: 'Nǐ de kètīng li zěnme dàochù shì shū a? Zhèxiē shū nǐ dōu xǐhuan kàn ma?', vi: 'Phòng khách của bạn sao đâu đâu cũng sách? Những sách này bạn đều thích đọc à?', scene: 'Bài 3 · Tiểu Lý nói với Tiểu Lâm về lợi ích của việc đọc' },
    { who: 'B', name: '小李', hanzi: '当然，我每天都要看书。无论是普通杂志，还是著名小说，只要打开它们，就会发现，世界上有那么多有意思的事情，有那么多不一样的生活。', pinyin: 'Dāngrán, wǒ měi tiān dōu yào kàn shū. Wúlùn shì pǔtōng zázhì, háishi zhùmíng xiǎoshuō, zhǐyào dǎkāi tāmen, jiù huì fāxiàn, shìjiè shang yǒu nàme duō yǒu yìsi de shìqing, yǒu nàme duō bù yíyàng de shēnghuó.', vi: 'Tất nhiên, ngày nào tôi cũng đọc sách. Dù là tạp chí thường hay tiểu thuyết nổi tiếng, chỉ cần mở ra sẽ thấy thế giới có bao điều thú vị, bao cuộc sống khác nhau.' },
    { who: 'A', name: '小林', hanzi: '想不到你工作那么忙，还能每天坚持阅读。', pinyin: 'Xiǎngbudào nǐ gōngzuò nàme máng, hái néng měi tiān jiānchí yuèdú.', vi: 'Không ngờ bạn bận thế mà vẫn kiên trì đọc mỗi ngày.' },
    { who: 'B', name: '小李', hanzi: '如果3分钟读一页书，半个小时就可以读10页。每天花半个小时来读书，一个月就可以读300页，差不多就是一本书了。', pinyin: 'Rúguǒ sān fēnzhōng dú yí yè shū, bàn ge xiǎoshí jiù kěyǐ dú shí yè. Měi tiān huā bàn ge xiǎoshí lái dú shū, yí ge yuè jiù kěyǐ dú sānbǎi yè, chàbuduō jiù shì yì běn shū le.', vi: 'Nếu 3 phút đọc một trang, nửa giờ đọc được 10 trang. Mỗi ngày dành nửa giờ, một tháng đọc 300 trang, gần bằng một cuốn.' },
    { who: 'A', name: '小林', hanzi: '是啊，一个真正爱看书的人总能找出时间来阅读。', pinyin: 'Shì a, yí ge zhēnzhèng ài kàn shū de rén zǒng néng zhǎochū shíjiān lái yuèdú.', vi: 'Đúng, người thật sự thích đọc luôn tìm ra thời gian để đọc.' },
    { who: 'B', name: '小李', hanzi: '坚持阅读，除了能增加知识外，还能帮助我减轻压力，人也会变得轻松起来。', pinyin: 'Jiānchí yuèdú, chúle néng zēngjiā zhīshi wài, hái néng bāngzhù wǒ jiǎnqīng yālì, rén yě huì biàn de qīngsōng qilai.', vi: 'Kiên trì đọc, ngoài tăng kiến thức còn giúp tôi giảm áp lực, người cũng thấy nhẹ nhàng hơn.' },
    { who: 'A', name: '短文', hanzi: '根据调查，阅读能力好的人，不但容易找到工作，而且工资也比较高。怎么才能有效提高自己的阅读能力呢？做读书笔记就是其中一种好方法。读书笔记有很多种，最简单的就是把自己喜欢或者觉得有用的词语和句子记下来。另外，在看完一篇文章或一本书之后，还可以把它的主要内容和自己的想法写下来。然而，你不能完全相信书本上的内容，要有自己的看法和判断。坚持做读书笔记，对提高阅读能力有很大帮助。', pinyin: 'Gēnjù diàochá, yuèdú nénglì hǎo de rén, búdàn róngyì zhǎodào gōngzuò, érqiě gōngzī yě bǐjiào gāo. Zěnme cái néng yǒuxiào tígāo zìjǐ de yuèdú nénglì ne? Zuò dúshū bǐjì jiù shì qízhōng yì zhǒng hǎo fāngfǎ. Dúshū bǐjì yǒu hěn duō zhǒng, zuì jiǎndān de jiù shì bǎ zìjǐ xǐhuan huòzhě juéde yǒuyòng de cíyǔ hé jùzi jì xiàlai. Lìngwài, zài kànwán yì piān wénzhāng huò yì běn shū zhīhòu, hái kěyǐ bǎ tā de zhǔyào nèiróng hé zìjǐ de xiǎngfǎ xiě xiàlai. Rán\'ér, nǐ bù néng wánquán xiāngxìn shūběn shang de nèiróng, yào yǒu zìjǐ de kànfǎ hé pànduàn. Jiānchí zuò dúshū bǐjì, duì tígāo yuèdú nénglì yǒu hěn dà bāngzhù.', vi: 'Theo khảo sát, người có khả năng đọc tốt không những dễ tìm việc mà lương cũng cao hơn. Làm sao nâng cao hiệu quả khả năng đọc? Ghi chú đọc sách là một cách hay. Ghi chú có nhiều loại, đơn giản nhất là ghi lại từ và câu mình thích hoặc thấy hữu ích. Ngoài ra, sau khi đọc xong một bài hay một cuốn sách còn có thể ghi nội dung chính và suy nghĩ của mình. Tuy nhiên, bạn không thể hoàn toàn tin nội dung trong sách, phải có quan điểm và phán đoán riêng. Kiên trì ghi chú giúp ích nhiều cho khả năng đọc.', scene: 'Bài 4 · Ghi chú đọc sách' },
    { who: 'A', name: '短文', hanzi: '“读书好(hǎo)，读好(hǎo)书，好(hào)读书”。虽然这句话只用了三个相同的汉字，但是不同的顺序却表示了不同的意思。首先，“读书好”说的是读书有很多好处；其次，每个人的时间都是有限的，不可能把世界上每一本书都读完，所以要读好的书；最后，“好读书”就是要养成阅读的习惯，使读书真正成为自己的兴趣爱好。阅读有许多好处，它能丰富你的知识，让你找到解决问题的办法；同时，它还会丰富你的情感，使你的生活更精彩。所以，让阅读成为你的习惯吧！', pinyin: '"Dú shū hǎo, dú hǎo shū, hào dú shū". Suīrán zhè jù huà zhǐ yòngle sān ge xiāngtóng de Hànzì, dànshì bù tóng de shùnxù què biǎoshìle bù tóng de yìsi. Shǒuxiān, "dú shū hǎo" shuō de shì dú shū yǒu hěn duō hǎochù; qícì, měi ge rén de shíjiān dōu shì yǒuxiàn de, bù kěnéng bǎ shìjiè shang měi yì běn shū dōu dúwán, suǒyǐ yào dú hǎo de shū; zuìhòu, "hào dú shū" jiù shì yào yǎngchéng yuèdú de xíguàn, shǐ dú shū zhēnzhèng chéngwéi zìjǐ de xìngqù àihào. Yuèdú yǒu xǔduō hǎochù, tā néng fēngfù nǐ de zhīshi, ràng nǐ zhǎodào jiějué wèntí de bànfǎ; tóngshí, tā hái huì fēngfù nǐ de qínggǎn, shǐ nǐ de shēnghuó gèng jīngcǎi. Suǒyǐ, ràng yuèdú chéngwéi nǐ de xíguàn ba!', vi: '"Đọc sách có lợi, đọc sách hay, thích đọc sách". Tuy câu chỉ dùng ba chữ giống nhau nhưng thứ tự khác nhau biểu thị ý khác nhau. Trước hết "读书好" nói đọc sách có nhiều lợi ích; thứ hai, thời gian ai cũng có hạn, không thể đọc hết mọi cuốn sách trên đời nên phải đọc sách hay; cuối cùng "好读书" là phải hình thành thói quen đọc, khiến đọc sách thực sự thành sở thích. Đọc sách có nhiều lợi ích, làm giàu kiến thức, giúp tìm cách giải quyết vấn đề; đồng thời làm phong phú tình cảm, khiến cuộc sống thêm đặc sắc. Vậy hãy để đọc sách thành thói quen của bạn!', scene: 'Bài 5 · Đọc sách có lợi, đọc sách hay, thích đọc sách' },
  ],
  dialogueClips: [
    { label: '11-1 · Mark và David', src: A + 'l11-1.mp3' },
    { label: '11-2 · Tiểu Hạ và Tiểu Vũ', src: A + 'l11-2.mp3' },
    { label: '11-3 · Tiểu Lý và Tiểu Lâm', src: A + 'l11-3.mp3' },
    { label: '11-4 · Ghi chú đọc sách', src: A + 'l11-4.mp3' },
    { label: '11-5 · Đọc sách có lợi, đọc sách hay, thích đọc sách', src: A + 'l11-5.mp3' },
  ],
  dialogueTip: '<b>连……也/都……</b>: ngay cả… cũng…. <b>否则</b>: nếu không thì…. <b>无论……都……</b>: dù… cũng… (văn viết). <b>然而</b>: tuy nhiên. <b>同时</b>: đồng thời, hơn nữa.',
  slowSay: '读书好，读好书，好读书',

  vocab: [
    { hanzi: '流利', pinyin: 'liúlì', pos: 'tính từ', meaning: 'lưu loát, trôi chảy', han_viet: 'lưu lợi' },
    { hanzi: '厉害', pinyin: 'lìhai', pos: 'tính từ', meaning: 'lợi hại', han_viet: 'lệ hại' },
    { hanzi: '语法', pinyin: 'yǔfǎ', pos: 'danh từ', meaning: 'ngữ pháp', han_viet: 'ngữ pháp' },
    { hanzi: '准确', pinyin: 'zhǔnquè', pos: 'tính từ', meaning: 'chính xác, đúng', han_viet: 'chuẩn xác' },
    { hanzi: '词语', pinyin: 'cíyǔ', pos: 'danh từ', meaning: 'từ ngữ, cách diễn đạt', han_viet: 'từ ngữ' },
    { hanzi: '连', pinyin: 'lián', pos: 'giới từ', meaning: 'ngay cả', han_viet: 'liên' },
    { hanzi: '阅读', pinyin: 'yuèdú', pos: 'động từ', meaning: 'đọc', han_viet: 'duyệt độc' },
    { hanzi: '来得及', pinyin: 'láidejí', pos: 'động từ', meaning: 'kịp, còn kịp', han_viet: 'lai đắc cập' },
    { hanzi: '复杂', pinyin: 'fùzá', pos: 'tính từ', meaning: 'phức tạp, rắc rối', han_viet: 'phức tạp' },
    { hanzi: '只好', pinyin: 'zhǐhǎo', pos: 'phó từ', meaning: 'đành phải, buộc phải', han_viet: 'chỉ hảo' },
    { hanzi: '填空', pinyin: 'tián kòng', pos: 'động từ', meaning: 'điền vào chỗ trống', han_viet: 'điền không' },
    { hanzi: '猜', pinyin: 'cāi', pos: 'động từ', meaning: 'đoán', han_viet: 'sai' },
    { hanzi: '否则', pinyin: 'fǒuzé', pos: 'liên từ', meaning: 'nếu không thì, bằng không', han_viet: 'phủ tắc' },
    { hanzi: '客厅', pinyin: 'kètīng', pos: 'danh từ', meaning: 'phòng khách', han_viet: 'khách sảnh' },
    { hanzi: '无论', pinyin: 'wúlùn', pos: 'liên từ', meaning: 'bất kể', han_viet: 'vô luận' },
    { hanzi: '杂志', pinyin: 'zázhì', pos: 'danh từ', meaning: 'tạp chí', han_viet: 'tạp chí' },
    { hanzi: '著名', pinyin: 'zhùmíng', pos: 'tính từ', meaning: 'nổi tiếng', han_viet: 'trứ danh' },
    { hanzi: '页', pinyin: 'yè', pos: 'lượng từ', meaning: 'trang', han_viet: 'hiệt' },
    { hanzi: '增加', pinyin: 'zēngjiā', pos: 'động từ', meaning: 'tăng thêm', han_viet: 'tăng gia' },
    { hanzi: '文章', pinyin: 'wénzhāng', pos: 'danh từ', meaning: 'bài văn, bài báo', han_viet: 'văn chương' },
    { hanzi: '之', pinyin: 'zhī', pos: 'trợ từ', meaning: 'dùng để nối từ bổ nghĩa và từ được bổ nghĩa', han_viet: 'chi' },
    { hanzi: '内容', pinyin: 'nèiróng', pos: 'danh từ', meaning: 'nội dung', han_viet: 'nội dung' },
    { hanzi: '然而', pinyin: 'rán\'ér', pos: 'liên từ', meaning: 'nhưng, song', han_viet: 'nhiên nhi' },
    { hanzi: '看法', pinyin: 'kànfǎ', pos: 'danh từ', meaning: 'quan điểm, cách nhìn', han_viet: 'khán pháp' },
    { hanzi: '相同', pinyin: 'xiāngtóng', pos: 'tính từ', meaning: 'giống nhau, như nhau', han_viet: 'tương đồng' },
    { hanzi: '顺序', pinyin: 'shùnxù', pos: 'danh từ', meaning: 'trật tự, thứ tự', han_viet: 'thuận tự' },
    { hanzi: '表示', pinyin: 'biǎoshì', pos: 'động từ', meaning: 'có nghĩa, biểu thị', han_viet: 'biểu thị' },
    { hanzi: '养成', pinyin: 'yǎngchéng', pos: 'động từ', meaning: 'hình thành, tạo (thói quen)', han_viet: 'dưỡng thành' },
    { hanzi: '同时', pinyin: 'tóngshí', pos: 'liên từ', meaning: 'đồng thời, hơn nữa', han_viet: 'đồng thời' },
    { hanzi: '精彩', pinyin: 'jīngcǎi', pos: 'tính từ', meaning: 'tuyệt vời, xuất sắc', han_viet: 'tinh thái' },
  ],

  sections: [
    {
      kind: 'examples', label: '连', title: '连……也/都…… (ngay cả… cũng…)',
      intro: 'Giới từ 连 thường dùng trong cấu trúc "连……也/都……" để nhấn mạnh. Người nói giải thích tình huống khác bằng cách nhấn mạnh một ví dụ cực đoan. Sau 连 có thể là chủ ngữ hoặc tân ngữ đặt trước.',
      groups: [{ label: 'Ví dụ', items: [['如果连你自己都不喜欢自己，又怎么能让别人喜欢你呢？', 'Rúguǒ lián nǐ zìjǐ dōu bù xǐhuan zìjǐ, yòu zěnme néng ràng biérén xǐhuan nǐ ne?', 'Nếu ngay cả bạn cũng không thích mình thì sao khiến người khác thích bạn?'], ['广告越来越多，几乎无处不在。不只是电视上有广告，公共汽车、地铁上也有很多广告，连我住的楼的电梯里都有三个广告。', 'Guǎnggào yuè lái yuè duō, jīhū wú chù bú zài. Bù zhǐ shì diànshì shang yǒu guǎnggào, gōnggòng qìchē, dìtiě shang yě yǒu hěn duō guǎnggào, lián wǒ zhù de lóu de diàntī li dōu yǒu sān ge guǎnggào.', 'Quảng cáo ngày càng nhiều, hầu như nơi nào cũng có. Không chỉ ti vi mà xe buýt, tàu điện cũng nhiều, ngay cả thang máy tòa nhà tôi ở cũng có ba quảng cáo.'], ['你太厉害了！连中文报纸都看得懂。', 'Nǐ tài lìhai le! Lián Zhōngwén bàozhǐ dōu kàn de dǒng.', 'Bạn giỏi quá! Ngay cả báo tiếng Trung cũng đọc hiểu.']] }],
    },
    {
      kind: 'examples', label: '否则', title: '否则 (nếu không thì)',
      intro: 'Liên từ 否则 nghĩa là "nếu không phải thế thì". Câu sau 否则 chỉ kết quả suy ra từ câu trước, hoặc đưa ra lựa chọn khác.',
      groups: [{ label: 'Ví dụ', items: [['他一定有重要的事找你，否则不会打这么多次电话来。', 'Tā yídìng yǒu zhòngyào de shì zhǎo nǐ, fǒuzé bú huì dǎ zhème duō cì diànhuà lái.', 'Anh ấy chắc có việc quan trọng tìm bạn, nếu không sẽ không gọi nhiều thế.'], ['你最好下午四点前去公司找她，否则就明天早上再去。', 'Nǐ zuìhǎo xiàwǔ sì diǎn qián qù gōngsī zhǎo tā, fǒuzé jiù míngtiān zǎoshang zài qù.', 'Bạn nên đến công ty tìm cô ấy trước 4 giờ chiều, nếu không thì sáng mai đi.'], ['看来要想考好，不但要认真复习，还得注意考试的方法，否则会做的题也没时间做了。', 'Kànlái yào xiǎng kǎohǎo, búdàn yào rènzhēn fùxí, hái děi zhùyì kǎoshì de fāngfǎ, fǒuzé huì zuò de tí yě méi shíjiān zuò le.', 'Xem ra muốn thi tốt phải ôn kỹ và chú ý phương pháp, nếu không câu biết làm cũng hết giờ.']] }],
    },
    {
      kind: 'examples', label: '无论 · 不管', title: '无论 (bất kể) và so sánh với 不管',
      intro: '无论: liên từ, trong mọi điều kiện kết quả không đổi, hay dùng "无论……都/也……"; sau nó có thể là thành phần lựa chọn hoặc đại từ nghi vấn phiếm chỉ. Giống 不管: cùng chỉ kết quả không đổi, thường đi với 都/也. Khác: 不管 dùng nhiều trong khẩu ngữ, sau nó không dùng được 如何, 是否; 无论 thiên về văn viết, có thể đi với 如何, 是否. Với dạng khẳng định-phủ định, sau 无论 thường thêm 还是/跟/与 ở giữa (无论热还是不热).',
      groups: [{ label: 'Ví dụ', items: [['无论是普通杂志，还是著名小说，只要打开它们，就会发现，世界上有那么多有意思的事情。', 'Wúlùn shì pǔtōng zázhì, háishi zhùmíng xiǎoshuō, zhǐyào dǎkāi tāmen, jiù huì fāxiàn, shìjiè shang yǒu nàme duō yǒu yìsi de shìqing.', 'Dù là tạp chí thường hay tiểu thuyết nổi tiếng, chỉ cần mở ra sẽ thấy thế giới có bao điều thú vị.'], ['无论做什么事都要注意方法，正确的方法可以让我们做得更好。', 'Wúlùn zuò shénme shì dōu yào zhùyì fāngfǎ, zhèngquè de fāngfǎ kěyǐ ràng wǒmen zuò de gèng hǎo.', 'Làm việc gì cũng phải chú ý phương pháp, phương pháp đúng giúp ta làm tốt hơn.'], ['无论如何，我都不会离开你。', 'Wúlùn rúhé, wǒ dōu bú huì líkāi nǐ.', 'Dù thế nào tôi cũng không rời bạn.'], ['无论/不管热还是不热，他总是穿这么多。', 'Wúlùn/bùguǎn rè háishi bú rè, tā zǒngshì chuān zhème duō.', 'Nóng hay không nóng, anh ấy luôn mặc nhiều thế.']] }],
    },
    {
      kind: 'examples', label: '然而 · 同时', title: '然而 (tuy nhiên) và 同时 (đồng thời)',
      intro: '然而: liên từ chuyển ý ở đầu vế sau, thường dùng trong văn viết. 同时: liên từ "hơn nữa", hay dùng với 又/也/还; cũng là danh từ chỉ hành động xảy ra cùng lúc, thường trong cấu trúc "在……(的)同时".',
      groups: [
        { label: '然而', items: [['他虽然失败了很多次，然而一直没有放弃。', 'Tā suīrán shībàile hěn duō cì, rán\'ér yìzhí méiyǒu fàngqì.', 'Tuy anh ấy thất bại nhiều lần, nhưng luôn không bỏ cuộc.'], ['很多人觉得自己的生活是幸福的，然而每个人对幸福的看法却不完全相同。', 'Hěn duō rén juéde zìjǐ de shēnghuó shì xìngfú de, rán\'ér měi ge rén duì xìngfú de kànfǎ què bù wánquán xiāngtóng.', 'Nhiều người thấy cuộc sống mình hạnh phúc, nhưng cách nhìn hạnh phúc của mỗi người không hoàn toàn giống nhau.']] },
        { label: '同时', items: [['因为小孩子的想法没有那么复杂，所以他们总是很快乐。同时，小孩子也是最诚实的。', 'Yīnwèi xiǎo háizi de xiǎngfǎ méiyǒu nàme fùzá, suǒyǐ tāmen zǒngshì hěn kuàilè. Tóngshí, xiǎo háizi yě shì zuì chéngshí de.', 'Vì suy nghĩ của trẻ không phức tạp nên chúng luôn vui. Đồng thời trẻ cũng thành thật nhất.'], ['阅读有许多好处，它能丰富你的知识，让你找到解决问题的办法；同时，它还会丰富你的情感，使你的生活更精彩。', 'Yuèdú yǒu xǔduō hǎochù, tā néng fēngfù nǐ de zhīshi, ràng nǐ zhǎodào jiějué wèntí de bànfǎ; tóngshí, tā hái huì fēngfù nǐ de qínggǎn, shǐ nǐ de shēnghuó gèng jīngcǎi.', 'Đọc có nhiều lợi, làm giàu kiến thức, giúp tìm cách giải quyết; đồng thời làm phong phú tình cảm, cuộc sống đặc sắc hơn.'], ['在学习汉语的同时，我还了解了中国文化、认识了很多中国朋友。', 'Zài xuéxí Hànyǔ de tóngshí, wǒ hái liǎojiěle Zhōngguó wénhuà, rènshile hěn duō Zhōngguó péngyou.', 'Trong lúc học tiếng Hán, tôi còn hiểu văn hóa Trung Quốc, quen nhiều bạn Trung Quốc.']] },
      ],
    },
    {
      kind: 'examples', label: 'Từ cùng chữ: 同', title: 'Những từ có chữ giống nhau: 同',
      intro: '同意, 共同, 相同, 同时.',
      groups: [{ label: 'Ví dụ', items: [['如果她再坚持一次请我帮忙，我就同意了，可是她没有。', 'Rúguǒ tā zài jiānchí yí cì qǐng wǒ bāng máng, wǒ jiù tóngyì le, kěshì tā méiyǒu.', 'Nếu cô ấy kiên trì nhờ thêm lần nữa tôi đã đồng ý, nhưng cô ấy không.'], ['夫妻之间只有浪漫的爱情是不够的，共同的理想和爱好也很重要。', 'Fūqī zhījiān zhǐyǒu làngmàn de àiqíng shì bú gòu de, gòngtóng de lǐxiǎng hé àihào yě hěn zhòngyào.', 'Vợ chồng chỉ có tình yêu lãng mạn là không đủ, lý tưởng và sở thích chung cũng quan trọng.'], ['他很年轻，可是遇到问题时，却比相同年龄的人更冷静。', 'Tā hěn niánqīng, kěshì yùdào wèntí shí, què bǐ xiāngtóng niánlíng de rén gèng lěngjìng.', 'Anh ấy rất trẻ nhưng gặp vấn đề lại bình tĩnh hơn người cùng tuổi.'], ['我哥哥今年26岁，在读硕士研究生的同时，还在一家公司工作。', 'Wǒ gēge jīnnián èrshíliù suì, zài dú shuòshì yánjiūshēng de tóngshí, hái zài yì jiā gōngsī gōngzuò.', 'Anh trai tôi 26 tuổi, vừa học thạc sĩ vừa làm việc ở một công ty.']] }],
    },
  ],

  notes: [
    { title: '连……也/都……', body: 'Giới từ 连 nhấn mạnh bằng ví dụ cực đoan: 连中文报纸都看得懂。', say: '连中文报纸都看得懂' },
    { title: '否则', body: 'Liên từ "nếu không thì": vế sau là kết quả suy ra từ vế trước hoặc một lựa chọn khác.', say: '否则，会做的题也没时间做了' },
    { title: '无论', body: 'Liên từ, kết quả không đổi trong mọi điều kiện, hay đi với 都/也. So với 不管: 无论 thiên về văn viết, có thể đi 如何, 是否; 不管 thiên về khẩu ngữ.', say: '无论是普通杂志，还是著名小说' },
    { title: '然而', body: 'Liên từ chuyển ý ở đầu vế sau, thường dùng trong văn viết: 他虽然失败了很多次，然而一直没有放弃。', say: '然而，你不能完全相信书本上的内容' },
    { title: '同时', body: 'Liên từ "đồng thời, hơn nữa" (dùng với 又/也/还); danh từ "cùng lúc" trong 在……(的)同时.', say: '同时，它还会丰富你的情感' },
    { title: 'Văn hóa: 《西游记》', body: 'Tây Du Ký là một trong bốn danh tác văn học cổ điển của Trung Quốc, kể chuyện Đường Tăng thầy trò sang Tây Thiên thỉnh kinh.', say: '西游记' },
  ],

  writeChars: ['流', '厉', '语', '复', '杂', '猜', '著', '增'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa',
      items: [
        { q: '马克为什么能顺利地跟中国人交流？他有哪些建议？', hint: '多交中国朋友、经常聊天儿；坚持看中文报纸，查词典、写在本子上并复习。' },
        { q: '小雨这次阅读考试为什么没考好？', hint: '她先做了难的复杂的题，花了太多时间，后面简单的题来不及做。' },
        { q: '要想考好，应该注意哪些方面？', hint: '不但要认真复习，还得注意考试的方法，否则会做的题也没时间做。' },
        { q: '小李家的客厅有什么特点？小李有什么好习惯？', hint: '客厅里到处是书；他每天坚持阅读。' },
        { q: '坚持阅读能给人带来哪些好处？', hint: '增加知识，减轻压力，让人轻松起来。' },
        { q: '“书里的知识都是正确的”，这句话对吗？为什么？', hint: '不对，不能完全相信书本上的内容，要有自己的看法和判断。' },
        { q: '“读书好，读好书，好读书”三句话各是什么意思？', hint: '读书有很多好处；要读好的书；要养成阅读的习惯，爱读书。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: hỏi nhau về việc đọc báo tiếng Trung', hint: '你看过中文报纸吗？你为什么选择看中文报纸？你遇到过哪些困难？你通过什么方式提高中文阅读能力？' },
        { q: 'Theo nhóm: giới thiệu nhà văn bạn thích, dùng ít nhất 4 cấu trúc', hint: '得到很大的提高；只要打开就会发现；能帮助我减轻压力；有用的词语和句子；自己的看法和判断；时间都是有限的；使生活更精彩。' },
      ],
    },
  ],

  sentences: [
    { parts: ['你', '来', '中国', '才', '一', '年', '汉语', '就', '说', '得', '这么', '流利'], pinyin: 'Nǐ lái Zhōngguó cái yì nián, Hànyǔ jiù shuō de zhème liúlì.', vi: 'Bạn đến Trung Quốc mới một năm mà nói lưu loát thế.' },
    { parts: ['连', '中文', '报纸', '都', '看', '得', '懂'], pinyin: 'Lián Zhōngwén bàozhǐ dōu kàn de dǒng.', vi: 'Ngay cả báo tiếng Trung cũng đọc hiểu.' },
    { parts: ['时间', '来不及', '我', '最后', '只好', '放弃', '了'], pinyin: 'Shíjiān láibují, wǒ zuìhòu zhǐhǎo fàngqì le.', vi: 'Không kịp thời gian, cuối cùng đành bỏ.' },
    { parts: ['无论', '是', '杂志', '还是', '小说', '只要', '打开', '就', '会', '发现'], pinyin: 'Wúlùn shì zázhì háishi xiǎoshuō, zhǐyào dǎkāi jiù huì fāxiàn.', vi: 'Dù là tạp chí hay tiểu thuyết chỉ cần mở ra sẽ thấy.' },
    { parts: ['让', '阅读', '成为', '你', '的', '习惯', '吧'], pinyin: 'Ràng yuèdú chéngwéi nǐ de xíguàn ba.', vi: 'Hãy để đọc sách thành thói quen của bạn.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 著名 · B 有限 · C 复杂 · D 顺序 · E 增加. Gõ chữ cái A–E.',
      items: [
        { prompt: '为了保证您和他人的安全，请您按照“先下后上”的（ ）上下车。', answer: 'D', gloss: '顺序' }, { prompt: '科学的发展确实给生活带来了许多方便，但也给我们（ ）了不少烦恼。', answer: 'E', gloss: '增加' },
        { prompt: '虽然身高只有一米六零，但他却是世界上（ ）的篮球运动员。', answer: 'A', gloss: '著名' }, { prompt: '这个问题有点儿（ ），你耐心听我给你解释一下，好吗？', answer: 'C', gloss: '复杂' },
        { prompt: '一个人的知识是（ ）的，所以人与人之间需要交流，交流能使我们丰富知识、提高能力。', answer: 'B', gloss: '有限' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 准确 · B 只好 · C 厉害 · D 词语 · E 内容. Gõ chữ cái A–E.',
      items: [
        { prompt: '大夫，我的牙最近疼得（ ），不知道是怎么回事。 你先躺这儿，张开嘴我看看。', answer: 'C', gloss: '厉害' }, { prompt: '你家的孩子真可爱，会说话了吗？ 会叫“爸爸”“妈妈”了，也能说一些简单的（ ）。', answer: 'D', gloss: '词语' },
        { prompt: '这是复习材料，复习要注意方法，要复习重要内容。 时间可能来不及，不过（ ）这样了，这些语法知识太难了。', answer: 'B', gloss: '只好' }, { prompt: '听说公司明年要搬，到时候我又得重新找房子了。 这个消息（ ）吗？我怎么不知道？', answer: 'A', gloss: '准确' },
        { prompt: '你看过那位作家的小说吗？他的小说语言幽默，（ ）丰富。 那当然了，他在国内很受欢迎，他的小说已经被翻译成了好几种语言。', answer: 'E', gloss: '内容' },
      ],
    },
    {
      title: 'Giáo trình 比一比 · 无论 / 不管 (gõ từ)',
      hint: 'Gõ 无论 hoặc 不管 theo đáp án sách (câu 1, 2, 3, 5 chấp nhận cả hai trừ khi sách ghi khác).',
      items: [
        { prompt: '（ ）是工作还是学习，“光说不练”都是不行的。', answer: '无论', accept: ['不管'], gloss: '无论 / 不管' },
        { prompt: '虽然压力很大，但是为了我们共同的理想，（ ）如何一定不能放弃。', answer: '无论', gloss: '无论' },
        { prompt: '阳光、空气和水，（ ）是对动植物，还是对人来说，这三样东西都是不可缺少的。', answer: '无论', accept: ['不管'], gloss: '无论 / 不管' },
      ],
    },
    {
      title: 'Giáo trình 扩展 · 同 (gõ từ)',
      hint: 'Gõ 同意, 共同, 相同 hoặc 同时.',
      items: [
        { prompt: '幽默是成功者的（ ）特点之一，也是值得我们好好学习的一种生活态度。', answer: '共同', gloss: '共同' },
        { prompt: '网上买衣服没法试穿，大小不合适怎么办？ 没关系，号码不合适的话，店家一般都会（ ）换的。', answer: '同意', gloss: '同意' },
        { prompt: '医生建议大家冬季在选择合适的锻炼方法的（ ），应该注意运动量不要太大。', answer: '同时', gloss: '同时' },
      ],
    },
  ],
}
