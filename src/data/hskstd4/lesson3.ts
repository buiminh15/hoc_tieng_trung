import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 4 (Thượng), Bài 3: 经理对我印象不错 (sách trang 34–46).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách, dịch hội thoại do app tự thêm.
 * Nghe: 03-1…03-5. Bài tập: 热身/比一比/练习/扩展, đáp án theo "HSK4-1-BT" trang 3.
 */

const A = '/audio/hsk-std4/'

export const hskStd4Lesson3: Lesson = {
  id: 3,
  title: 'Giám đốc có ấn tượng tốt về tôi',
  hanzi: '经理对我印象不错',
  pinyin: 'Jīnglǐ duì wǒ yìnxiàng búcuò',
  vi: 'Giám đốc có ấn tượng tốt về tôi',
  intro: 'Nói về tuyển dụng, phỏng vấn và ấn tượng đầu tiên. Học 挺……的, 本来, 另外 (và so sánh với 另), 首先……其次……, 不管……都…….',

  dialogue: [
    { who: 'A', name: '小夏', hanzi: '你上午的面试怎么样？', pinyin: 'Nǐ shàngwǔ de miànshì zěnmeyàng?', vi: 'Buổi phỏng vấn sáng nay của bạn thế nào?', scene: 'Bài 1 · Tiểu Hạ và Tiểu Vũ nói về buổi phỏng vấn' },
    { who: 'B', name: '小雨', hanzi: '还可以，他们问的问题都挺容易的，就是我有点儿紧张。', pinyin: 'Hái kěyǐ, tāmen wèn de wèntí dōu tǐng róngyì de, jiù shì wǒ yǒudiǎnr jǐnzhāng.', vi: 'Cũng được, câu hỏi họ hỏi đều khá dễ, chỉ là mình hơi căng thẳng.' },
    { who: 'A', name: '小夏', hanzi: '面试的时候，一定要对自己有信心，要相信自己的能力。', pinyin: 'Miànshì de shíhou, yídìng yào duì zìjǐ yǒu xìnxīn, yào xiāngxìn zìjǐ de nénglì.', vi: 'Khi phỏng vấn nhất định phải tự tin, phải tin vào năng lực của mình.' },
    { who: 'B', name: '小雨', hanzi: '你说得对！3月15号上午8点在学校体育馆还有一个招聘会，你去吗？', pinyin: 'Nǐ shuō de duì! Sān yuè shíwǔ hào shàngwǔ bā diǎn zài xuéxiào tǐyùguǎn hái yǒu yí ge zhāopìnhuì, nǐ qù ma?', vi: 'Bạn nói đúng! 8 giờ sáng ngày 15/3 ở nhà thi đấu trường còn có một hội chợ tuyển dụng, bạn đi không?' },
    { who: 'A', name: '小夏', hanzi: '我还没决定呢。', pinyin: 'Wǒ hái méi juédìng ne.', vi: 'Mình chưa quyết định.' },
    { who: 'B', name: '小雨', hanzi: '听说这次招聘会提供的工作机会很多，我们一起去看看吧。', pinyin: 'Tīngshuō zhè cì zhāopìnhuì tígōng de gōngzuò jīhuì hěn duō, wǒmen yìqǐ qù kànkan ba.', vi: 'Nghe nói hội chợ lần này có nhiều cơ hội việc làm, chúng mình cùng đi xem nhé.' },
    { who: 'A', name: '马经理', hanzi: '小林，这次招聘不是小李负责吗？', pinyin: 'Xiǎo Lín, zhè cì zhāopìn bú shì Xiǎo Lǐ fùzé ma?', vi: 'Tiểu Lâm, lần tuyển dụng này chẳng phải Tiểu Lý phụ trách sao?', scene: 'Bài 2 · Giám đốc Mã và Tiểu Lâm nói chuyện tuyển dụng' },
    { who: 'B', name: '小林', hanzi: '本来是小李负责的，但是他突然生病住院了，所以就交给我来办了。', pinyin: 'Běnlái shì Xiǎo Lǐ fùzé de, dànshì tā tūrán shēng bìng zhù yuàn le, suǒyǐ jiù jiāogěi wǒ lái bàn le.', vi: 'Vốn là Tiểu Lý phụ trách, nhưng anh ấy đột nhiên bệnh phải nằm viện nên giao cho tôi làm.' },
    { who: 'A', name: '马经理', hanzi: '哦，这次应聘的人多吗？', pinyin: 'Ò, zhè cì yìngpìn de rén duō ma?', vi: 'À, lần này người ứng tuyển nhiều không?' },
    { who: 'B', name: '小林', hanzi: '经理，这次来应聘的一共有15人。经过笔试和面试，有两个不错。这是他们的材料，您看看。', pinyin: 'Jīnglǐ, zhè cì lái yìngpìn de yígòng yǒu shíwǔ rén. Jīngguò bǐshì hé miànshì, yǒu liǎng ge búcuò. Zhè shì tāmen de cáiliào, nín kànkan.', vi: 'Thưa giám đốc, lần này tổng cộng có 15 người ứng tuyển. Qua thi viết và phỏng vấn có hai người khá tốt. Đây là hồ sơ của họ, ông xem.' },
    { who: 'A', name: '马经理', hanzi: '这两个人的能力都比较符合我们的要求。你通知他们下周一上午九点来我办公室吧。', pinyin: 'Zhè liǎng ge rén de nénglì dōu bǐjiào fúhé wǒmen de yāoqiú. Nǐ tōngzhī tāmen xià Zhōuyī shàngwǔ jiǔ diǎn lái wǒ bàngōngshì ba.', vi: 'Năng lực của hai người này khá phù hợp yêu cầu của chúng ta. Cậu thông báo họ 9 giờ sáng thứ Hai tuần sau đến văn phòng tôi.' },
    { who: 'B', name: '小林', hanzi: '好的，那我马上跟他们联系。', pinyin: 'Hǎo de, nà wǒ mǎshàng gēn tāmen liánxì.', vi: 'Vâng, vậy tôi liên hệ với họ ngay.' },
    { who: 'A', name: '小林', hanzi: '王静，好久不见了！大学毕业后就没联系了，你现在在哪儿工作呢？', pinyin: 'Wáng Jìng, hǎojiǔ bú jiàn le! Dàxué bì yè hòu jiù méi liánxì le, nǐ xiànzài zài nǎr gōngzuò ne?', vi: 'Vương Tĩnh, lâu quá không gặp! Tốt nghiệp đại học là mất liên lạc, giờ bạn làm ở đâu?', scene: 'Bài 3 · Tiểu Lâm và Vương Tĩnh nói về công việc' },
    { who: 'B', name: '王静', hanzi: '我一毕业就去上海当律师了。', pinyin: 'Wǒ yí bì yè jiù qù Shànghǎi dāng lǜshī le.', vi: 'Mình vừa tốt nghiệp là đi Thượng Hải làm luật sư.' },
    { who: 'A', name: '小林', hanzi: '你对现在的工作一定非常满意吧？', pinyin: 'Nǐ duì xiànzài de gōngzuò yídìng fēicháng mǎnyì ba?', vi: 'Bạn chắc rất hài lòng với công việc hiện tại nhỉ?' },
    { who: 'B', name: '王静', hanzi: '我很喜欢现在的工作，因为我学的就是法律专业，而且同事们都很喜欢我。另外，收入也不错。', pinyin: 'Wǒ hěn xǐhuan xiànzài de gōngzuò, yīnwèi wǒ xué de jiù shì fǎlǜ zhuānyè, érqiě tóngshìmen dōu hěn xǐhuan wǒ. Lìngwài, shōurù yě búcuò.', vi: 'Mình rất thích công việc hiện tại, vì mình học đúng chuyên ngành luật, hơn nữa các đồng nghiệp đều quý mình. Ngoài ra thu nhập cũng khá.' },
    { who: 'A', name: '小林', hanzi: '星期天咱们同学聚会，你能来参加吗？', pinyin: 'Xīngqītiān zánmen tóngxué jùhuì, nǐ néng lái cānjiā ma?', vi: 'Chủ nhật họp lớp chúng ta, bạn đến tham gia được không?' },
    { who: 'B', name: '王静', hanzi: '能来。虽然这次来北京，时间安排得很紧张，但我一定借这次机会去跟大家见见面。', pinyin: 'Néng lái. Suīrán zhè cì lái Běijīng, shíjiān ānpái de hěn jǐnzhāng, dàn wǒ yídìng jiè zhè cì jīhuì qù gēn dàjiā jiànjian miàn.', vi: 'Được. Tuy lần này đến Bắc Kinh lịch trình rất gấp, nhưng mình nhất định tranh thủ dịp này gặp mọi người.' },
    { who: 'A', name: '短文', hanzi: '面试的时候，经理对我印象不错，还通知我明天就可以上班了。真没想到，找工作这么顺利。你想知道面试需要注意什么吗？首先，要穿正式的衣服，这会给面试者留下一个好的印象，让他觉得你是一个认真的人。其次，应聘时不要紧张。回答问题时，说得不要太快，声音也不要太小，要相信自己有能力做好。当然，最重要的是回答问题要诚实。', pinyin: 'Miànshì de shíhou, jīnglǐ duì wǒ yìnxiàng búcuò, hái tōngzhī wǒ míngtiān jiù kěyǐ shàng bān le. Zhēn méi xiǎngdào, zhǎo gōngzuò zhème shùnlì. Nǐ xiǎng zhīdào miànshì xūyào zhùyì shénme ma? Shǒuxiān, yào chuān zhèngshì de yīfu, zhè huì gěi miànshìzhě liúxià yí ge hǎo de yìnxiàng, ràng tā juéde nǐ shì yí ge rènzhēn de rén. Qícì, yìngpìn shí búyào jǐnzhāng. Huídá wèntí shí, shuō de búyào tài kuài, shēngyīn yě búyào tài xiǎo, yào xiāngxìn zìjǐ yǒu nénglì zuò hǎo. Dāngrán, zuì zhòngyào de shì huídá wèntí yào chéngshí.', vi: 'Khi phỏng vấn, giám đốc có ấn tượng tốt về tôi, còn thông báo ngày mai tôi có thể đi làm. Thật không ngờ tìm việc lại thuận lợi thế. Bạn muốn biết phỏng vấn cần chú ý gì không? Trước hết phải mặc trang phục trang trọng, điều này để lại ấn tượng tốt cho người phỏng vấn, khiến họ thấy bạn là người nghiêm túc. Thứ hai, khi ứng tuyển đừng căng thẳng. Khi trả lời đừng nói quá nhanh, giọng cũng đừng quá nhỏ, phải tin mình có năng lực làm tốt. Dĩ nhiên quan trọng nhất là trả lời phải thành thật.', scene: 'Bài 4 · Cần chú ý gì khi phỏng vấn' },
    { who: 'A', name: '短文', hanzi: '第一印象就是在第一次见面时给别人留下的印象。虽然第一印象不总是对的，但如果想改变却很困难。你给别人的第一印象会影响他们以后对你的感觉和判断。所以，给第一次见面的同事留下好的印象，以后的工作可能会更顺利；给第一次见面的顾客留下好的印象，你可能会卖出更多的东西。但是，如果第一次见面给别人留下像不准时这样的坏印象，那么以后就很难让别人相信你。所以不管是上课、上班，还是与别人约会，准时都非常重要。', pinyin: 'Dì yī yìnxiàng jiù shì zài dì yī cì jiàn miàn shí gěi biérén liúxià de yìnxiàng. Suīrán dì yī yìnxiàng bù zǒng shì duì de, dàn rúguǒ xiǎng gǎibiàn què hěn kùnnan. Nǐ gěi biérén de dì yī yìnxiàng huì yǐngxiǎng tāmen yǐhòu duì nǐ de gǎnjué hé pànduàn. Suǒyǐ, gěi dì yī cì jiàn miàn de tóngshì liúxià hǎo de yìnxiàng, yǐhòu de gōngzuò kěnéng huì gèng shùnlì; gěi dì yī cì jiàn miàn de gùkè liúxià hǎo de yìnxiàng, nǐ kěnéng huì màichū gèng duō de dōngxi. Dànshì, rúguǒ dì yī cì jiàn miàn gěi biérén liúxià xiàng bù zhǔnshí zhèyàng de huài yìnxiàng, nàme yǐhòu jiù hěn nán ràng biérén xiāngxìn nǐ. Suǒyǐ bùguǎn shì shàng kè, shàng bān, háishi yǔ biérén yuēhuì, zhǔnshí dōu fēicháng zhòngyào.', vi: 'Ấn tượng đầu tiên là ấn tượng ta để lại cho người khác lần gặp đầu. Tuy ấn tượng đầu không phải lúc nào cũng đúng, nhưng muốn thay đổi lại rất khó. Ấn tượng đầu bạn để lại sẽ ảnh hưởng đến cảm nhận và đánh giá của họ về bạn sau này. Vì vậy để lại ấn tượng tốt cho đồng nghiệp lần đầu gặp, công việc sau này có thể thuận lợi hơn; để lại ấn tượng tốt cho khách hàng lần đầu gặp, bạn có thể bán được nhiều hàng hơn. Nhưng nếu lần đầu gặp để lại ấn tượng xấu như không đúng giờ thì sau này rất khó khiến người ta tin bạn. Vì vậy dù là đi học, đi làm hay hẹn hò, đúng giờ đều rất quan trọng.', scene: 'Bài 5 · Ấn tượng đầu tiên' },
  ],
  dialogueClips: [
    { label: '03-1 · Tiểu Hạ và Tiểu Vũ', src: A + 'l3-1.mp3' },
    { label: '03-2 · Giám đốc Mã và Tiểu Lâm', src: A + 'l3-2.mp3' },
    { label: '03-3 · Tiểu Lâm và Vương Tĩnh', src: A + 'l3-3.mp3' },
    { label: '03-4 · Cần chú ý gì khi phỏng vấn', src: A + 'l3-4.mp3' },
    { label: '03-5 · Ấn tượng đầu tiên', src: A + 'l3-5.mp3' },
  ],
  dialogueTip: '<b>挺……的</b>: rất…. <b>本来</b>: vốn dĩ / đáng lẽ. <b>另外</b>: ngoài ra; (một) cái khác. <b>首先……其次……</b>: trước hết… thứ hai…. <b>不管……都……</b>: bất kể… đều….',
  slowSay: '经理对我印象不错',

  vocab: [
    { hanzi: '挺', pinyin: 'tǐng', pos: 'phó từ', meaning: 'rất', han_viet: 'đĩnh' },
    { hanzi: '紧张', pinyin: 'jǐnzhāng', pos: 'tính từ', meaning: 'hồi hộp, căng thẳng', han_viet: 'khẩn trương' },
    { hanzi: '信心', pinyin: 'xìnxīn', pos: 'danh từ', meaning: 'lòng tin, sự tự tin', han_viet: 'tín tâm' },
    { hanzi: '能力', pinyin: 'nénglì', pos: 'danh từ', meaning: 'năng lực, khả năng', han_viet: 'năng lực' },
    { hanzi: '招聘', pinyin: 'zhāopìn', pos: 'động từ', meaning: 'tuyển dụng', han_viet: 'chiêu sính' },
    { hanzi: '提供', pinyin: 'tígōng', pos: 'động từ', meaning: 'cung cấp', han_viet: 'đề cung' },
    { hanzi: '负责', pinyin: 'fùzé', pos: 'động từ', meaning: 'phụ trách, chịu trách nhiệm', han_viet: 'phụ trách' },
    { hanzi: '本来', pinyin: 'běnlái', pos: 'phó từ', meaning: 'lúc đầu, trước đây', han_viet: 'bản lai' },
    { hanzi: '应聘', pinyin: 'yìngpìn', pos: 'động từ', meaning: 'xin việc, ứng tuyển', han_viet: 'ứng sính' },
    { hanzi: '材料', pinyin: 'cáiliào', pos: 'danh từ', meaning: 'tư liệu, tài liệu', han_viet: 'tài liệu' },
    { hanzi: '符合', pinyin: 'fúhé', pos: 'động từ', meaning: 'phù hợp', han_viet: 'phù hợp' },
    { hanzi: '通知', pinyin: 'tōngzhī', pos: 'động từ', meaning: 'báo tin, thông báo', han_viet: 'thông tri' },
    { hanzi: '律师', pinyin: 'lǜshī', pos: 'danh từ', meaning: 'luật sư', han_viet: 'luật sư' },
    { hanzi: '专业', pinyin: 'zhuānyè', pos: 'danh từ', meaning: 'chuyên ngành', han_viet: 'chuyên nghiệp' },
    { hanzi: '另外', pinyin: 'lìngwài', pos: 'liên từ', meaning: 'ngoài ra', han_viet: 'lánh ngoại' },
    { hanzi: '收入', pinyin: 'shōurù', pos: 'danh từ', meaning: 'thu nhập', han_viet: 'thu nhập' },
    { hanzi: '咱们', pinyin: 'zánmen', pos: 'đại từ', meaning: 'chúng ta, chúng mình', han_viet: 'ta môn' },
    { hanzi: '安排', pinyin: 'ānpái', pos: 'động từ', meaning: 'sắp xếp', han_viet: 'an bài' },
    { hanzi: '首先', pinyin: 'shǒuxiān', pos: 'danh từ', meaning: 'trước hết, trước tiên', han_viet: 'thủ tiên' },
    { hanzi: '正式', pinyin: 'zhèngshì', pos: 'tính từ', meaning: 'chính thức, trang trọng', han_viet: 'chính thức' },
    { hanzi: '留', pinyin: 'liú', pos: 'động từ', meaning: 'để lại', han_viet: 'lưu' },
    { hanzi: '其次', pinyin: 'qícì', pos: 'danh từ', meaning: 'thứ hai, sau đó', han_viet: 'kỳ thứ' },
    { hanzi: '诚实', pinyin: 'chéngshí', pos: 'tính từ', meaning: 'thành thật', han_viet: 'thành thực' },
    { hanzi: '改变', pinyin: 'gǎibiàn', pos: 'động từ', meaning: 'thay đổi', han_viet: 'cải biến' },
    { hanzi: '感觉', pinyin: 'gǎnjué', pos: 'danh từ', meaning: 'cảm giác, cảm nghĩ', han_viet: 'cảm giác' },
    { hanzi: '判断', pinyin: 'pànduàn', pos: 'động từ', meaning: 'nhận xét, đánh giá', han_viet: 'phán đoán' },
    { hanzi: '顾客', pinyin: 'gùkè', pos: 'danh từ', meaning: 'khách hàng', han_viet: 'cố khách' },
    { hanzi: '准时', pinyin: 'zhǔnshí', pos: 'tính từ', meaning: 'đúng giờ', han_viet: 'chuẩn thời' },
    { hanzi: '不管', pinyin: 'bùguǎn', pos: 'liên từ', meaning: 'bất kể, bất luận', han_viet: 'bất quản' },
    { hanzi: '与', pinyin: 'yǔ', pos: 'giới từ', meaning: 'với, và', han_viet: 'dữ' },
    { hanzi: '约会', pinyin: 'yuēhuì', pos: 'động từ', meaning: 'hẹn gặp, hẹn hò', han_viet: 'ước hội' },
  ],

  sections: [
    {
      kind: 'examples', label: '挺……的 · 本来', title: '挺……的 (rất…) và 本来 (vốn dĩ)',
      intro: '挺 là phó từ nghĩa là "rất", thường dùng trong cấu trúc 挺……的. 本来 là phó từ: diễn tả tình huống/sự việc đáng lẽ phải như vậy; cũng mang nghĩa "lúc đầu, trước đây".',
      groups: [
        { label: '挺……的', items: [['他们问的问题都挺容易的。', 'Tāmen wèn de wèntí dōu tǐng róngyì de.', 'Câu hỏi họ hỏi đều khá dễ.'], ['这家店的东西挺好的，我经常来这儿买东西。', 'Zhè jiā diàn de dōngxi tǐng hǎo de, wǒ jīngcháng lái zhèr mǎi dōngxi.', 'Đồ ở tiệm này khá tốt, tôi thường đến đây mua.'], ['我挺喜欢这个地方的，周围环境比以前住的地方安静很多。', 'Wǒ tǐng xǐhuan zhège dìfang de, zhōuwéi huánjìng bǐ yǐqián zhù de dìfang ānjìng hěn duō.', 'Tôi khá thích nơi này, môi trường xung quanh yên tĩnh hơn nhiều so với chỗ ở trước.']] },
        { label: '本来', items: [['这件事本来应该听他的。', 'Zhè jiàn shì běnlái yīnggāi tīng tā de.', 'Việc này đáng lẽ phải nghe theo anh ấy.'], ['我本来不会开车，但现在开得特别好。', 'Wǒ běnlái bú huì kāi chē, dàn xiànzài kāi de tèbié hǎo.', 'Trước tôi không biết lái xe, nhưng giờ lái rất giỏi.'], ['(这次招聘)本来是小李负责的。', '(Zhè cì zhāopìn) běnlái shì Xiǎo Lǐ fùzé de.', '(Lần tuyển dụng này) vốn là Tiểu Lý phụ trách.']] },
      ],
    },
    {
      kind: 'examples', label: '另外', title: '另外 (ngoài ra, cái khác)',
      intro: '另外 làm đại từ: người/vật ngoài phạm vi đã nói, thường dùng "另外(+的)+số lượng(+danh từ)" hoặc "另外+的(+danh từ)". Làm phó từ: ngoài phạm vi đã nói, hay đi cùng 还/再/又. Làm liên từ: "ngoài ra", nối các vế câu hoặc các câu.',
      groups: [{ label: 'Ví dụ', items: [['前面车有点儿多，我们走另外一条路，不会迟到的。', 'Qiánmian chē yǒudiǎnr duō, wǒmen zǒu lìngwài yì tiáo lù, bú huì chídào de.', 'Phía trước hơi nhiều xe, chúng ta đi con đường khác, sẽ không muộn.'], ['除了她说的，我另外又补充了几条意见。', 'Chúle tā shuō de, wǒ lìngwài yòu bǔchōngle jǐ tiáo yìjiàn.', 'Ngoài những điều cô ấy nói, tôi bổ sung thêm vài ý kiến.'], ['家里的空调坏了，咱们另外再买一个吧。', 'Jiā li de kōngtiáo huài le, zánmen lìngwài zài mǎi yí ge ba.', 'Điều hòa trong nhà hỏng rồi, chúng ta mua thêm cái khác nhé.'], ['我学的就是法律专业，而且同事们都很喜欢我。另外，收入也不错。', 'Wǒ xué de jiù shì fǎlǜ zhuānyè, érqiě tóngshìmen dōu hěn xǐhuan wǒ. Lìngwài, shōurù yě búcuò.', 'Tôi học đúng chuyên ngành luật, đồng nghiệp đều quý tôi. Ngoài ra thu nhập cũng khá.']] }],
    },
    {
      kind: 'examples', label: '另外 – 另', title: 'So sánh 另外 và 另',
      intro: 'Giống nhau: cả hai đều có thể là đại từ (ngoài phạm vi đã nói) hoặc phó từ. Khác nhau: 另外 thường dùng "另外(+的)+số lượng(+danh từ)" (的 có thể có hoặc không), còn 另 dùng "另+số lượng(+danh từ)" không có 的. 另 thường bổ nghĩa cho động từ đơn âm tiết; 另外 không bị hạn chế này. 另外 còn làm liên từ, 另 thì không.',
      groups: [{ label: 'Ví dụ', items: [['刚才马克把车借走了，你骑另外/另一辆吧。', 'Gāngcái Mǎkè bǎ chē jièzǒu le, nǐ qí lìngwài/lìng yí liàng ba.', 'Vừa nãy Mark mượn xe rồi, bạn đi chiếc khác đi.'], ['刚才马克把车借走了，你骑另外的一辆吧。', 'Gāngcái Mǎkè bǎ chē jièzǒu le, nǐ qí lìngwài de yí liàng ba.', 'Vừa nãy Mark mượn xe rồi, bạn đi một chiếc khác đi.'], ['我今天晚上另外/另有安排，我们明天再一起吃饭吧。', 'Wǒ jīntiān wǎnshang lìngwài/lìng yǒu ānpái, wǒmen míngtiān zài yìqǐ chī fàn ba.', 'Tối nay tôi có sắp xếp khác, mai chúng ta ăn cơm cùng nhé.'], ['冬季应该注意多吃水果。另外，还要记得多喝水。', 'Dōngjì yīnggāi zhùyì duō chī shuǐguǒ. Lìngwài, hái yào jìde duō hē shuǐ.', 'Mùa đông nên chú ý ăn nhiều trái cây. Ngoài ra còn nhớ uống nhiều nước.']] }],
    },
    {
      kind: 'examples', label: '首先…其次… · 不管', title: '首先……其次…… và 不管……都……',
      intro: '首先 và 其次 là đại từ, dùng kết hợp trong văn viết để liệt kê sự việc theo trình tự. 首先 còn là phó từ nghĩa "đầu tiên, sớm nhất". 不管 là liên từ: trong mọi giả thiết kết luận đều không đổi; thường đi với 什么/怎么/谁/哪儿/多(么), hoặc 还是 / mẫu chính phản; vế sau có 都.',
      groups: [
        { label: '首先……其次……', items: [['不管做什么事情，首先应该明白你为什么要做，其次要知道怎么做。', 'Bùguǎn zuò shénme shìqing, shǒuxiān yīnggāi míngbai nǐ wèi shénme yào zuò, qícì yào zhīdào zěnme zuò.', 'Dù làm việc gì, trước hết phải hiểu vì sao làm, sau đó phải biết làm thế nào.'], ['首先，要穿正式的衣服。其次，应聘时不要紧张。', 'Shǒuxiān, yào chuān zhèngshì de yīfu. Qícì, yìngpìn shí búyào jǐnzhāng.', 'Trước hết phải mặc trang phục trang trọng. Thứ hai, khi ứng tuyển đừng căng thẳng.'], ['很多人遇到不明白的地方，首先想到的是上网查一查。', 'Hěn duō rén yùdào bù míngbai de dìfang, shǒuxiān xiǎngdào de shì shàng wǎng chá yi chá.', 'Nhiều người gặp chỗ không hiểu, điều đầu tiên nghĩ đến là lên mạng tra.']] },
        { label: '不管……都……', items: [['山本不管做什么事都非常认真。', 'Shānběn bùguǎn zuò shénme shì dōu fēicháng rènzhēn.', 'Sơn Bản làm việc gì cũng rất nghiêm túc.'], ['不管是上课、上班，还是与别人约会，准时都非常重要。', 'Bùguǎn shì shàng kè, shàng bān, háishi yǔ biérén yuēhuì, zhǔnshí dōu fēicháng zhòngyào.', 'Dù là đi học, đi làm hay hẹn hò, đúng giờ đều rất quan trọng.'], ['不管忙不忙，他每天都要锻炼一个小时身体。', 'Bùguǎn máng bu máng, tā měi tiān dōu yào duànliàn yí ge xiǎoshí shēntǐ.', 'Bận hay không, ngày nào anh ấy cũng tập thể dục một tiếng.']] },
      ],
    },
    {
      kind: 'examples', label: 'Từ cùng chữ: 时', title: 'Những từ có chữ giống nhau: 时',
      intro: '时候, 时间, 及时, 平时, 准时.',
      groups: [{ label: 'Ví dụ', items: [['他特别幽默，跟他在一起的时候，总是感觉时间过得很快。', 'Tā tèbié yōumò, gēn tā zài yìqǐ de shíhou, zǒngshì gǎnjué shíjiān guò de hěn kuài.', 'Anh ấy rất hài hước, ở bên anh luôn thấy thời gian trôi nhanh.'], ['在你遇到困难的时候，真正的朋友会站出来，及时给你帮助。', 'Zài nǐ yùdào kùnnan de shíhou, zhēnzhèng de péngyou huì zhàn chūlai, jíshí gěi nǐ bāngzhù.', 'Khi bạn gặp khó khăn, người bạn chân chính sẽ đứng ra giúp bạn kịp thời.'], ['平时安娜总是在学校上课，学习很紧张，很少有时间出去玩儿。', 'Píngshí Ānnà zǒngshì zài xuéxiào shàng kè, xuéxí hěn jǐnzhāng, hěn shǎo yǒu shíjiān chūqu wánr.', 'Ngày thường Anna luôn học ở trường, học căng thẳng, ít có thời gian đi chơi.'], ['明天上午8点50我们在学校西门见，9点咱们准时出发。', 'Míngtiān shàngwǔ bā diǎn wǔshí wǒmen zài xuéxiào xīmén jiàn, jiǔ diǎn zánmen zhǔnshí chūfā.', '8 giờ 50 sáng mai gặp ở cổng tây trường, 9 giờ chúng ta xuất phát đúng giờ.']] }],
    },
  ],

  notes: [
    {
      title: '挺……的',
      body: '挺: phó từ nghĩa là "rất", thường dùng trong cấu trúc 挺……的: 他们问的问题都挺容易的。',
      say: '我挺喜欢这个地方的',
    },
    {
      title: '本来',
      body: '本来: phó từ, chỉ tình huống đáng lẽ phải như vậy (这件事本来应该听他的), cũng nghĩa là "lúc đầu, trước đây" (本来是小李负责的).',
      say: '本来是小李负责的',
    },
    {
      title: '另外',
      body: '另外 có ba cách dùng: đại từ (走另外一条路), phó từ đi cùng 还/再/又 (另外再买一个), liên từ "ngoài ra" (另外，收入也不错).',
      say: '另外，收入也不错',
    },
    {
      title: '首先……其次……',
      body: '首先 và 其次 dùng kết hợp trong văn viết để liệt kê theo trình tự. 首先 còn là phó từ nghĩa "đầu tiên, sớm nhất": 你首先应该有一个好身体。',
      say: '首先，要穿正式的衣服',
    },
    {
      title: '不管',
      body: '不管: liên từ, trong mọi giả thiết kết luận không đổi. Hay dùng với 什么/怎么/谁/哪儿/多(么), 还是, hoặc mẫu chính phản (忙不忙); vế sau có 都.',
      say: '不管是上课、上班，还是与别人约会，准时都非常重要',
    },
  ],

  writeChars: ['挺', '紧', '招', '聘', '律', '符', '诚', '顾'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (根据课文内容回答问题)',
      items: [
        { q: '小雨面试时紧张吗？面试时应该怎么样？', hint: '有点儿紧张；面试时要对自己有信心，要相信自己的能力。' },
        { q: '体育馆的招聘会是在什么时候？', hint: '3月15号上午8点。' },
        { q: '谁负责过这次招聘工作？', hint: '本来是小李负责的，后来他生病住院了，小林接着负责。' },
        { q: '参加应聘的两个人适合不适合这个工作？为什么？', hint: '适合，因为他们的能力都比较符合公司的要求。' },
        { q: '王静为什么很喜欢她现在的工作？', hint: '因为她学的就是法律专业，同事们都很喜欢她，收入也不错。' },
        { q: '王静这次来北京是为了参加同学聚会吗？为什么？', hint: '不是，她这次来北京有别的事情，只是借这次机会跟大家见面。' },
        { q: '面试时如果穿正式的衣服，会给人带来什么好处？回答问题时应该注意哪些问题？', hint: '给面试者留下好印象，觉得你很认真；不要太紧张，说话不要太快，声音不要太小，要诚实。' },
        { q: '第一印象是什么意思？你给别人的第一印象对你有哪些影响？', hint: '第一次见面时留给别人的印象；会影响别人以后对你的感觉和判断。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: hỏi nhau về chuyện xin việc', hint: '你找过工作吗？你应聘的是什么工作？那份工作有什么招聘要求？你在面试时紧张吗？为什么？你认为自己适合什么工作？' },
        { q: 'Theo nhóm: giới thiệu người để lại ấn tượng đầu sâu nhất, dùng ít nhất 4 cấu trúc', hint: '留下的印象；对自己有信心；挺容易的；借这次机会；安排得很紧张；最重要的是；穿正式的衣服；感觉和判断。' },
      ],
    },
  ],

  sentences: [
    { parts: ['他们', '问', '的', '问题', '都', '挺', '容易', '的'], pinyin: 'Tāmen wèn de wèntí dōu tǐng róngyì de.', vi: 'Câu hỏi họ hỏi đều khá dễ.' },
    { parts: ['面试', '的', '时候', '一定', '要', '对', '自己', '有', '信心'], pinyin: 'Miànshì de shíhou yídìng yào duì zìjǐ yǒu xìnxīn.', vi: 'Khi phỏng vấn nhất định phải tự tin.' },
    { parts: ['本来', '是', '小李', '负责', '的'], pinyin: 'Běnlái shì Xiǎo Lǐ fùzé de.', vi: 'Vốn là Tiểu Lý phụ trách.' },
    { parts: ['这', '两个', '人', '的', '能力', '都', '符合', '我们', '的', '要求'], pinyin: 'Zhè liǎng ge rén de nénglì dōu fúhé wǒmen de yāoqiú.', vi: 'Năng lực của hai người này đều phù hợp yêu cầu của chúng ta.' },
    { parts: ['不管', '是', '上课', '上班', '还是', '约会', '准时', '都', '非常', '重要'], pinyin: 'Bùguǎn shì shàng kè, shàng bān, háishi yuēhuì, zhǔnshí dōu fēicháng zhòngyào.', vi: 'Dù đi học, đi làm hay hẹn hò, đúng giờ đều rất quan trọng.' },
    { parts: ['最', '重要', '的', '是', '回答', '问题', '要', '诚实'], pinyin: 'Zuì zhòngyào de shì huídá wèntí yào chéngshí.', vi: 'Quan trọng nhất là trả lời phải thành thật.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 紧张 · B 提供 · C 符合 · D 安排 · E 判断. Gõ chữ cái A–E.',
      items: [
        { prompt: '他们这次招聘的要求虽然高，但是那些要求你都（ ），你应该去试试。', answer: 'C', gloss: '符合' }, { prompt: '看一个人怎么说话，常可以比较容易地（ ）出他是一个什么样的人。', answer: 'E', gloss: '判断' },
        { prompt: '第一次跟女朋友见面的时候，他（ ）得脸和耳朵都红了。', answer: 'A', gloss: '紧张' }, { prompt: '她想借这次机会去长城看看，可是公司的事情很多，时间（ ）得很紧张。', answer: 'D', gloss: '安排' },
        { prompt: '这里（ ）的工作机会是最多的，每天都有很多公司在上面发招聘通知。', answer: 'B', gloss: '提供' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 感觉 · B 材料 · C 咱们 · D 准时 · E 留. Gõ chữ cái A–E.',
      items: [
        { prompt: '走，（ ）一起去跑步吧，锻炼锻炼身体。 好主意，我很久没去运动了。你等我几分钟，我去换双运动鞋。', answer: 'C', gloss: '咱们' }, { prompt: '这次工作虽然时间非常紧张，但是（ ）不是很难。 一开始还担心完不成呢，现在好了，可以休息一下了。', answer: 'A', gloss: '感觉' },
        { prompt: '校长，这份（ ）我已经按照您的要求改好了。 好的，先放我办公桌上吧，你再帮我发一份电子邮件。', answer: 'B', gloss: '材料' }, { prompt: '你不是去打篮球了吗？怎么还在上网？ 外面刮大风了，现在只好（ ）在家里上网了。', answer: 'E', gloss: '留' },
        { prompt: '王老师真是一个特别（ ）的人。 对，我还从来没见他迟到过呢。', answer: 'D', gloss: '准时' },
      ],
    },
    {
      title: 'Giáo trình 比一比 · 另外 / 另 (gõ từ)',
      hint: 'Gõ 另外 hoặc 另 theo đáp án sách.',
      items: [
        { prompt: '上个月经理去上海参加了（ ）的一个重要会议。', answer: '另外', gloss: '另外' },
        { prompt: '等一会儿吧，我先看看菜单。（ ），给我来杯绿茶。', answer: '另外', gloss: '另外' },
        { prompt: '衬衫没问题，但是裤子颜色不太好，你（ ）换一条吧。', answer: '另外', accept: ['另'], gloss: '另外 / 另' },
      ],
    },
    {
      title: 'Giáo trình 扩展 · Từ có chữ 时 (câu 1–5)',
      hint: 'A 时候 · B 时间 · C 及时 · D 平时 · E 准时. Gõ chữ cái A–E.',
      items: [
        { prompt: '午饭后不要马上睡午觉，另外，午睡的（ ）太长也会影响健康。', answer: 'B', gloss: '时间' }, { prompt: '（ ）我骑自行车上下班，可是今天起晚了，所以就打车来公司了。', answer: 'D', gloss: '平时' },
        { prompt: '当你想发脾气的（ ），试试在心里数数。从1数到10，之后你会发现自己没有那么生气了。', answer: 'A', gloss: '时候' }, { prompt: '每个人都有缺点，但我们应该努力发现自己的缺点，（ ）去改。', answer: 'C', gloss: '及时' },
        { prompt: '上个星期去北京，飞机不仅（ ）起飞，而且还早到了十分钟。', answer: 'E', gloss: '准时' },
      ],
    },
  ],
}
