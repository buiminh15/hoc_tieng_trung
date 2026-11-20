import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 4 (Thượng), Bài 8: 生活中不缺少美 (sách trang 98–109).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách, dịch hội thoại do app tự thêm.
 * Nghe: 08-1…08-5. Bài tập: 比一比/练习 2/扩展, đáp án theo "HSK4-1-BT" trang 8–9.
 */

const A = '/audio/hsk-std4/'

export const hskStd4Lesson8: Lesson = {
  id: 8,
  title: 'Cuộc sống không thiếu cái đẹp',
  hanzi: '生活中不缺少美',
  pinyin: 'Shēnghuó zhōng bù quēshǎo měi',
  vi: 'Cuộc sống không thiếu cái đẹp',
  intro: 'Nói về tâm trạng, quà tặng và màu sắc. Học 使, 只要, 可不是, 因此, 往往 (so với 经常).',

  dialogue: [
    { who: 'A', name: '李老师', hanzi: '这种巧克力味道不错，你在哪儿买的？', pinyin: 'Zhè zhǒng qiǎokèlì wèidào búcuò, nǐ zài nǎr mǎi de?', vi: 'Loại sô-cô-la này vị khá ngon, bạn mua ở đâu?', scene: 'Bài 1 · Thầy Lý và cô Cao nói về sô-cô-la' },
    { who: 'B', name: '高老师', hanzi: '不是我买的，是我女儿给我从国外带回来的礼物。', pinyin: 'Bú shì wǒ mǎi de, shì wǒ nǚ\'ér gěi wǒ cóng guówài dài huílai de lǐwù.', vi: 'Không phải tôi mua, là quà con gái mang từ nước ngoài về cho tôi.' },
    { who: 'A', name: '李老师', hanzi: '很多人出国后常常会买外国的巧克力，回来送给亲戚朋友。', pinyin: 'Hěn duō rén chū guó hòu chángcháng huì mǎi wàiguó de qiǎokèlì, huílai sòng gěi qīnqi péngyou.', vi: 'Nhiều người ra nước ngoài thường mua sô-cô-la nước ngoài về tặng họ hàng bạn bè.' },
    { who: 'B', name: '高老师', hanzi: '是啊，因为很多人都爱吃巧克力，尤其是女性。', pinyin: 'Shì a, yīnwèi hěn duō rén dōu ài chī qiǎokèlì, yóuqí shì nǚxìng.', vi: 'Đúng, vì nhiều người thích sô-cô-la, nhất là phụ nữ.' },
    { who: 'A', name: '李老师', hanzi: '这是为什么呢？', pinyin: 'Zhè shì wèi shénme ne?', vi: 'Vì sao vậy?' },
    { who: 'B', name: '高老师', hanzi: '巧克力大多是甜的，而很多女性都喜欢吃甜的。而且，听说伤心难过的时候吃块儿巧克力，还能使人的心情变得愉快。', pinyin: 'Qiǎokèlì dàduō shì tián de, ér hěn duō nǚxìng dōu xǐhuan chī tián de. Érqiě, tīngshuō shāng xīn nánguò de shíhou chī kuàir qiǎokèlì, hái néng shǐ rén de xīnqíng biàn de yúkuài.', vi: 'Sô-cô-la phần lớn ngọt, mà nhiều phụ nữ thích đồ ngọt. Hơn nữa nghe nói lúc buồn ăn miếng sô-cô-la còn làm tâm trạng vui lên.' },
    { who: 'A', name: '小夏', hanzi: '这里的景色真美，空气也好。', pinyin: 'Zhèlǐ de jǐngsè zhēn měi, kōngqì yě hǎo.', vi: 'Phong cảnh ở đây đẹp thật, không khí cũng tốt.', scene: 'Bài 2 · Tiểu Hạ và Mark nói về trận bóng lần trước' },
    { who: 'B', name: '马克', hanzi: '怎么样，心情好些了吗？', pinyin: 'Zěnmeyàng, xīnqíng hǎo xiē le ma?', vi: 'Thế nào, tâm trạng khá hơn chưa?' },
    { who: 'A', name: '小夏', hanzi: '好多了，上次足球比赛后，好久都没这么放松了。', pinyin: 'Hǎo duō le, shàng cì zúqiú bǐsài hòu, hǎojiǔ dōu méi zhème fàngsōng le.', vi: 'Khá hơn nhiều rồi, sau trận bóng lần trước lâu lắm không thư giãn thế này.' },
    { who: 'B', name: '马克', hanzi: '你不要有压力，好好儿准备下次比赛就好了。', pinyin: 'Nǐ búyào yǒu yālì, hǎohāor zhǔnbèi xià cì bǐsài jiù hǎo le.', vi: 'Bạn đừng áp lực, chuẩn bị tốt cho trận sau là được.' },
    { who: 'A', name: '小夏', hanzi: '这段时间我总是一个人坐在房间里回忆那次比赛。如果我们能再努力一点儿，就一定会多进一个球。', pinyin: 'Zhè duàn shíjiān wǒ zǒngshì yí ge rén zuò zài fángjiān li huíyì nà cì bǐsài. Rúguǒ wǒmen néng zài nǔlì yìdiǎnr, jiù yídìng huì duō jìn yí ge qiú.', vi: 'Thời gian qua tôi toàn ngồi một mình trong phòng nhớ lại trận đó. Nếu chúng ta cố gắng thêm chút nữa thì chắc chắn ghi thêm một bàn.' },
    { who: 'B', name: '马克', hanzi: '事情已经发生了，过去的就让它成为过去吧。只要这次你好好儿准备，一定能把比赛踢好。', pinyin: 'Shìqing yǐjīng fāshēng le, guòqù de jiù ràng tā chéngwéi guòqù ba. Zhǐyào zhè cì nǐ hǎohāor zhǔnbèi, yídìng néng bǎ bǐsài tīhǎo.', vi: 'Chuyện đã xảy ra, cái đã qua hãy để nó thành quá khứ. Chỉ cần lần này bạn chuẩn bị tốt, nhất định đá tốt trận đấu.' },
    { who: 'A', name: '马克', hanzi: '师傅，我去大使馆，你是不是走错了？', pinyin: 'Shīfu, wǒ qù dàshǐguǎn, nǐ shì bu shì zǒucuò le?', vi: 'Bác tài, tôi đi đại sứ quán, bác có đi nhầm không?', scene: 'Bài 3 · Mark và tài xế nói chuyện về tắc đường' },
    { who: 'B', name: '师傅', hanzi: '现在是上班时间，前面有点儿堵车，我们走另外一条路，距离差不多。', pinyin: 'Xiànzài shì shàng bān shíjiān, qiánmian yǒudiǎnr dǔ chē, wǒmen zǒu lìngwài yì tiáo lù, jùlí chàbuduō.', vi: 'Giờ là giờ đi làm, phía trước hơi tắc, ta đi đường khác, khoảng cách xấp xỉ.' },
    { who: 'A', name: '马克', hanzi: '那就好，堵车浪费时间，遇到堵车，心情也“堵”。', pinyin: 'Nà jiù hǎo, dǔ chē làngfèi shíjiān, yùdào dǔ chē, xīnqíng yě "dǔ".', vi: 'Thế thì tốt, tắc đường phí thời gian, gặp tắc đường tâm trạng cũng "tắc".' },
    { who: 'B', name: '师傅', hanzi: '可不是！上班堵车怕迟到，下班堵车怕回家晚。每天在马路上开车，要想不遇到堵车，还真难。', pinyin: 'Kěbúshì! Shàng bān dǔ chē pà chídào, xià bān dǔ chē pà huí jiā wǎn. Měi tiān zài mǎlù shang kāi chē, yào xiǎng bú yùdào dǔ chē, hái zhēn nán.', vi: 'Đúng thế! Đi làm tắc sợ muộn, tan làm tắc sợ về muộn. Ngày nào cũng lái xe trên đường, muốn không gặp tắc đường thật khó.' },
    { who: 'A', name: '马克', hanzi: '一遇到堵车，人们就容易变得没有耐心。长期这样，还会影响脾气甚至性格。但是您的心情为什么这么好呢？', pinyin: 'Yí yùdào dǔ chē, rénmen jiù róngyì biàn de méiyǒu nàixīn. Chángqī zhèyàng, hái huì yǐngxiǎng píqi shènzhì xìnggé. Dànshì nín de xīnqíng wèi shénme zhème hǎo ne?', vi: 'Hễ gặp tắc đường người ta dễ mất kiên nhẫn. Lâu dài còn ảnh hưởng tính khí thậm chí tính cách. Nhưng sao tâm trạng bác tốt thế?' },
    { who: 'B', name: '师傅', hanzi: '我们改变不了堵车，但是可以试着改变自己的心情。堵车时正好可以休息一下，还可以听听自己喜欢的音乐。', pinyin: 'Wǒmen gǎibiàn bù liǎo dǔ chē, dànshì kěyǐ shìzhe gǎibiàn zìjǐ de xīnqíng. Dǔ chē shí zhènghǎo kěyǐ xiūxi yíxià, hái kěyǐ tīngting zìjǐ xǐhuan de yīnyuè.', vi: 'Ta không đổi được tắc đường nhưng có thể thử đổi tâm trạng. Lúc tắc đường vừa hay nghỉ ngơi, còn nghe nhạc mình thích.' },
    { who: 'A', name: '短文', hanzi: '草绿了，那是生命的颜色；花开了，那是大自然的礼物。生活中不缺少美，缺少的是发现美的眼睛。只要有心，生活中的美到处都是。生活的态度要自己选择，因此，遇到烦恼时，你应该想一些办法让自己从不高兴的心情中走出来。窗外是什么样子，我们无法改变，但我们可以选择站在哪个窗户前。选择一个能够带给我们快乐的窗户，这样才能选对心情，选对生活的态度。', pinyin: 'Cǎo lǜ le, nà shì shēngmìng de yánsè; huā kāi le, nà shì dàzìrán de lǐwù. Shēnghuó zhōng bù quēshǎo měi, quēshǎo de shì fāxiàn měi de yǎnjing. Zhǐyào yǒuxīn, shēnghuó zhōng de měi dàochù dōu shì. Shēnghuó de tàidù yào zìjǐ xuǎnzé, yīncǐ, yùdào fánnǎo shí, nǐ yīnggāi xiǎng yìxiē bànfǎ ràng zìjǐ cóng bù gāoxìng de xīnqíng zhōng zǒu chūlai. Chuāng wài shì shénme yàngzi, wǒmen wúfǎ gǎibiàn, dàn wǒmen kěyǐ xuǎnzé zhàn zài nǎ ge chuānghu qián. Xuǎnzé yí ge nénggòu dàigěi wǒmen kuàilè de chuānghu, zhèyàng cái néng xuǎnduì xīnqíng, xuǎnduì shēnghuó de tàidù.', vi: 'Cỏ xanh, đó là màu của sự sống; hoa nở, đó là món quà của thiên nhiên. Cuộc sống không thiếu cái đẹp, thiếu là đôi mắt phát hiện cái đẹp. Chỉ cần có tâm, cái đẹp trong cuộc sống ở khắp nơi. Thái độ sống do mình chọn, vì vậy khi gặp phiền muộn bạn nên nghĩ cách thoát khỏi tâm trạng không vui. Ngoài cửa sổ trông thế nào ta không đổi được, nhưng ta có thể chọn đứng trước cửa sổ nào. Chọn một cửa sổ mang lại niềm vui, như vậy mới chọn đúng tâm trạng, đúng thái độ sống.', scene: 'Bài 4 · Cửa sổ của cuộc sống' },
    { who: 'A', name: '短文', hanzi: '科学研究证明，女孩子对衣服颜色的选择往往与她们的性格有关。喜欢穿白色衣服的女孩子性格比较阳光，生活态度积极向上是她们的共同特点；而喜欢穿红色衣服的女孩子性格比较浪漫。颜色也会影响人的心情，不同的颜色会给我们带来不同的感情变化。红色让人变得热情；黄色和白色让人心情愉快；黑色却容易让人感到伤心；人们在看到蓝色时会觉得很舒服，变得安静下来；绿色让我们的眼睛得到休息。', pinyin: 'Kēxué yánjiū zhèngmíng, nǚháizi duì yīfu yánsè de xuǎnzé wǎngwǎng yǔ tāmen de xìnggé yǒuguān. Xǐhuan chuān báisè yīfu de nǚháizi xìnggé bǐjiào yángguāng, shēnghuó tàidù jījí xiàngshàng shì tāmen de gòngtóng tèdiǎn; ér xǐhuan chuān hóngsè yīfu de nǚháizi xìnggé bǐjiào làngmàn. Yánsè yě huì yǐngxiǎng rén de xīnqíng, bù tóng de yánsè huì gěi wǒmen dàilái bù tóng de gǎnqíng biànhuà. Hóngsè ràng rén biàn de rèqíng; huángsè hé báisè ràng rén xīnqíng yúkuài; hēisè què róngyì ràng rén gǎndào shāng xīn; rénmen zài kàndào lánsè shí huì juéde hěn shūfu, biàn de ānjìng xiàlai; lǜsè ràng wǒmen de yǎnjing dédào xiūxi.', vi: 'Nghiên cứu khoa học chứng minh, việc con gái chọn màu quần áo thường liên quan đến tính cách. Cô gái thích mặc đồ trắng tính cách khá lạc quan, thái độ sống tích cực là đặc điểm chung; cô gái thích mặc đồ đỏ tính cách khá lãng mạn. Màu sắc cũng ảnh hưởng tâm trạng, các màu khác nhau mang lại những thay đổi cảm xúc khác nhau. Màu đỏ khiến người ta nhiệt tình; vàng và trắng khiến tâm trạng vui vẻ; đen dễ khiến người ta buồn; nhìn màu xanh dương thấy dễ chịu, trở nên yên tĩnh; xanh lá để mắt được nghỉ ngơi.', scene: 'Bài 5 · Màu sắc và tâm trạng' },
  ],
  dialogueClips: [
    { label: '08-1 · Thầy Lý và cô Cao', src: A + 'l8-1.mp3' },
    { label: '08-2 · Tiểu Hạ và Mark', src: A + 'l8-2.mp3' },
    { label: '08-3 · Mark và tài xế', src: A + 'l8-3.mp3' },
    { label: '08-4 · Cửa sổ của cuộc sống', src: A + 'l8-4.mp3' },
    { label: '08-5 · Màu sắc và tâm trạng', src: A + 'l8-5.mp3' },
  ],
  dialogueTip: '<b>使</b>: khiến cho (văn viết). <b>只要……就……</b>: chỉ cần… thì…. <b>可不是</b>: đúng thế (đồng tình). <b>因此</b>: vì vậy. <b>往往</b>: thường thường (có quy luật).',
  slowSay: '生活中不缺少美',

  vocab: [
    { hanzi: '巧克力', pinyin: 'qiǎokèlì', pos: 'danh từ', meaning: 'sô-cô-la', han_viet: 'xảo khắc lực' },
    { hanzi: '亲戚', pinyin: 'qīnqi', pos: 'danh từ', meaning: 'họ hàng thân thích', han_viet: 'thân thích' },
    { hanzi: '伤心', pinyin: 'shāng xīn', pos: 'tính từ', meaning: 'đau lòng', han_viet: 'thương tâm' },
    { hanzi: '使', pinyin: 'shǐ', pos: 'động từ', meaning: 'khiến cho, làm cho', han_viet: 'sử' },
    { hanzi: '心情', pinyin: 'xīnqíng', pos: 'danh từ', meaning: 'tâm trạng', han_viet: 'tâm tình' },
    { hanzi: '愉快', pinyin: 'yúkuài', pos: 'tính từ', meaning: 'vui vẻ', han_viet: 'du khoái' },
    { hanzi: '景色', pinyin: 'jǐngsè', pos: 'danh từ', meaning: 'phong cảnh, cảnh vật', han_viet: 'cảnh sắc' },
    { hanzi: '放松', pinyin: 'fàngsōng', pos: 'động từ', meaning: 'thả lỏng, thư giãn', han_viet: 'phóng tùng' },
    { hanzi: '压力', pinyin: 'yālì', pos: 'danh từ', meaning: 'áp lực', han_viet: 'áp lực' },
    { hanzi: '回忆', pinyin: 'huíyì', pos: 'động từ', meaning: 'nhớ lại', han_viet: 'hồi ức' },
    { hanzi: '发生', pinyin: 'fāshēng', pos: 'động từ', meaning: 'xảy ra', han_viet: 'phát sinh' },
    { hanzi: '成为', pinyin: 'chéngwéi', pos: 'động từ', meaning: 'trở thành', han_viet: 'thành vi' },
    { hanzi: '只要', pinyin: 'zhǐyào', pos: 'liên từ', meaning: 'chỉ cần, miễn là', han_viet: 'chỉ yếu' },
    { hanzi: '师傅', pinyin: 'shīfu', pos: 'danh từ', meaning: 'sư phụ (cách gọi kính trọng người có tay nghề)', han_viet: 'sư phó' },
    { hanzi: '大使馆', pinyin: 'dàshǐguǎn', pos: 'danh từ', meaning: 'đại sứ quán', han_viet: 'đại sứ quán' },
    { hanzi: '堵车', pinyin: 'dǔ chē', pos: 'động từ', meaning: 'kẹt xe', han_viet: 'đổ xa' },
    { hanzi: '距离', pinyin: 'jùlí', pos: 'danh từ', meaning: 'khoảng cách', han_viet: 'cự ly' },
    { hanzi: '耐心', pinyin: 'nàixīn', pos: 'danh từ', meaning: 'lòng kiên nhẫn', han_viet: 'nại tâm' },
    { hanzi: '生命', pinyin: 'shēngmìng', pos: 'danh từ', meaning: 'sự sống, tính mạng', han_viet: 'sinh mệnh' },
    { hanzi: '缺少', pinyin: 'quēshǎo', pos: 'động từ', meaning: 'thiếu', han_viet: 'khuyết thiểu' },
    { hanzi: '到处', pinyin: 'dàochù', pos: 'phó từ', meaning: 'khắp nơi, đâu đâu', han_viet: 'đáo xứ' },
    { hanzi: '态度', pinyin: 'tàidù', pos: 'danh từ', meaning: 'thái độ', han_viet: 'thái độ' },
    { hanzi: '因此', pinyin: 'yīncǐ', pos: 'liên từ', meaning: 'do đó, vì vậy', han_viet: 'nhân thử' },
    { hanzi: '科学', pinyin: 'kēxué', pos: 'danh từ', meaning: 'khoa học', han_viet: 'khoa học' },
    { hanzi: '证明', pinyin: 'zhèngmíng', pos: 'động từ', meaning: 'chứng minh', han_viet: 'chứng minh' },
    { hanzi: '往往', pinyin: 'wǎngwǎng', pos: 'phó từ', meaning: 'thường thường', han_viet: 'vãng vãng' },
    { hanzi: '阳光', pinyin: 'yángguāng', pos: 'tính từ', meaning: 'lạc quan, vui vẻ', han_viet: 'dương quang' },
    { hanzi: '积极', pinyin: 'jījí', pos: 'tính từ', meaning: 'tích cực', han_viet: 'tích cực' },
    { hanzi: '特点', pinyin: 'tèdiǎn', pos: 'danh từ', meaning: 'đặc điểm', han_viet: 'đặc điểm' },
  ],

  sections: [
    {
      kind: 'examples', label: '使 · 只要', title: '使 (khiến cho) và 只要 (chỉ cần)',
      intro: '使: động từ, nghĩa "khiến cho, làm cho", thường dùng trong văn viết. 只要: liên từ, thường dùng "只要……就……": sau 只要 là điều kiện cần thiết, sau 就 là kết quả do điều kiện đó mang lại.',
      groups: [
        { label: '使', items: [['她看都没看过我一眼，怎么样才能使她喜欢我呢？', 'Tā kàn dōu méi kànguo wǒ yì yǎn, zěnmeyàng cái néng shǐ tā xǐhuan wǒ ne?', 'Cô ấy chưa từng nhìn tôi, làm sao để cô ấy thích tôi?'], ['在中国生活的三年使他在音乐方面有了很多新的想法。', 'Zài Zhōngguó shēnghuó de sān nián shǐ tā zài yīnyuè fāngmiàn yǒule hěn duō xīn de xiǎngfǎ.', 'Ba năm sống ở Trung Quốc làm anh có nhiều ý tưởng mới về âm nhạc.'], ['听说伤心难过的时候吃块儿巧克力，还能使人的心情变得愉快。', 'Tīngshuō shāng xīn nánguò de shíhou chī kuàir qiǎokèlì, hái néng shǐ rén de xīnqíng biàn de yúkuài.', 'Nghe nói lúc buồn ăn miếng sô-cô-la còn làm tâm trạng vui lên.']] },
        { label: '只要……就……', items: [['只要这次你好好儿准备，一定能把比赛踢好。', 'Zhǐyào zhè cì nǐ hǎohāor zhǔnbèi, yídìng néng bǎ bǐsài tīhǎo.', 'Chỉ cần lần này bạn chuẩn bị tốt, nhất định đá tốt trận đấu.'], ['只要你用心就会发现，身边有那么多有意思的事情，有那么多不一样的生活。', 'Zhǐyào nǐ yòngxīn jiù huì fāxiàn, shēnbiān yǒu nàme duō yǒu yìsi de shìqing, yǒu nàme duō bù yíyàng de shēnghuó.', 'Chỉ cần bạn để tâm sẽ thấy xung quanh có bao nhiêu chuyện thú vị, bao nhiêu cuộc sống khác nhau.'], ['对我来说，只要能做自己喜欢的事，就是幸福。', 'Duì wǒ lái shuō, zhǐyào néng zuò zìjǐ xǐhuan de shì, jiù shì xìngfú.', 'Với tôi, chỉ cần làm được việc mình thích là hạnh phúc.']] },
      ],
    },
    {
      kind: 'examples', label: '可不是 · 因此', title: '可不是 (đúng thế) và 因此 (vì vậy)',
      intro: '可不是: phó từ bày tỏ sự tán thành hoặc đồng cảm với điều người khác nói, thường đứng độc lập thành câu (cũng nói 可不). 因此: liên từ nghĩa "vì vậy", gần nghĩa với 所以 nhưng không dùng kết hợp với 因为.',
      groups: [
        { label: '可不是', items: [['没想到咱们毕业都已经十年了。 可不是！时间过得太快了，真想大家。', 'Méi xiǎngdào zánmen bì yè dōu yǐjīng shí nián le. Kěbúshì! Shíjiān guò de tài kuài le, zhēn xiǎng dàjiā.', 'Không ngờ ta tốt nghiệp mười năm rồi. Đúng thế! Thời gian trôi nhanh quá, nhớ mọi người thật.'], ['遇到堵车，心情也“堵”。 可不是！上班堵车怕迟到，下班堵车怕回家晚。', 'Yùdào dǔ chē, xīnqíng yě "dǔ". Kěbúshì! Shàng bān dǔ chē pà chídào, xià bān dǔ chē pà huí jiā wǎn.', 'Gặp tắc đường tâm trạng cũng tắc. Đúng thế! Đi làm tắc sợ muộn, tan làm tắc sợ về muộn.']] },
        { label: '因此', items: [['我认识他很多年，因此，很了解他的性格。', 'Wǒ rènshi tā hěn duō nián, yīncǐ, hěn liǎojiě tā de xìnggé.', 'Tôi quen anh ấy nhiều năm, vì vậy rất hiểu tính cách anh.'], ['每个学生的性格、能力不同，因此，老师要根据学生的特点，用不同的方法。', 'Měi ge xuésheng de xìnggé, nénglì bù tóng, yīncǐ, lǎoshī yào gēnjù xuésheng de tèdiǎn, yòng bù tóng de fāngfǎ.', 'Tính cách, năng lực mỗi học sinh khác nhau, vì vậy thầy cô phải dùng phương pháp khác nhau tùy đặc điểm.'], ['生活的态度要自己选择，因此，遇到烦恼时，你应该想一些办法让自己从不高兴的心情中走出来。', 'Shēnghuó de tàidù yào zìjǐ xuǎnzé, yīncǐ, yùdào fánnǎo shí, nǐ yīnggāi xiǎng yìxiē bànfǎ ràng zìjǐ cóng bù gāoxìng de xīnqíng zhōng zǒu chūlai.', 'Thái độ sống do mình chọn, vì vậy khi gặp phiền muộn nên nghĩ cách thoát khỏi tâm trạng không vui.']] },
      ],
    },
    {
      kind: 'examples', label: '往往 – 经常', title: '往往 và so sánh với 经常',
      intro: '往往: phó từ, dựa theo kinh nghiệm quá khứ, tình huống nào đó thường xảy ra trong điều kiện nhất định, dùng nói về việc có tính quy luật; chỉ dùng cho tình huống đã xảy ra. 经常: chỉ hành động xuất hiện nhiều lần, không nhất thiết có quy luật, có thể dùng cho nguyện vọng chủ quan và việc chưa xảy ra. Câu có 往往 thường nêu rõ tình huống, điều kiện hay kết quả liên quan. 经常 tương đương với 常; 往往 không rút gọn thành 往.',
      groups: [{ label: 'Ví dụ', items: [['女孩子对衣服颜色的选择往往与她们的性格有关。', 'Nǚháizi duì yīfu yánsè de xuǎnzé wǎngwǎng yǔ tāmen de xìnggé yǒuguān.', 'Việc con gái chọn màu áo thường liên quan đến tính cách.'], ['有经验的出租车司机往往对道路情况都非常熟悉，他们知道一天的每个时段什么地方可能堵车。', 'Yǒu jīngyàn de chūzūchē sījī wǎngwǎng duì dàolù qíngkuàng dōu fēicháng shúxī, tāmen zhīdào yì tiān de měi ge shíduàn shénme dìfang kěnéng dǔ chē.', 'Tài xế có kinh nghiệm thường rất quen đường, biết mỗi khung giờ chỗ nào có thể tắc.'], ['吃完晚饭，他们一家往往去附近的公园散步。', 'Chīwán wǎnfàn, tāmen yì jiā wǎngwǎng qù fùjìn de gōngyuán sàn bù.', 'Ăn tối xong cả nhà họ thường ra công viên gần đó đi dạo.'], ['长时间对着电脑工作对身体不好，我们以后也经常去公园散散步吧。', 'Cháng shíjiān duìzhe diànnǎo gōngzuò duì shēntǐ bù hǎo, wǒmen yǐhòu yě jīngcháng qù gōngyuán sànsan bù ba.', 'Làm việc trước máy tính lâu hại sức khỏe, sau này mình cũng thường ra công viên đi dạo nhé.']] }],
    },
    {
      kind: 'examples', label: 'Từ cùng chữ: 要', title: 'Những từ có chữ giống nhau: 要',
      intro: '重要, 主要, 只要, 要是.',
      groups: [{ label: 'Ví dụ', items: [['年轻人最重要的是要对自己有信心。', 'Niánqīng rén zuì zhòngyào de shì yào duì zìjǐ yǒu xìnxīn.', 'Điều quan trọng nhất với người trẻ là tự tin.'], ['这本书主要介绍了中国的文化和历史。', 'Zhè běn shū zhǔyào jièshàole Zhōngguó de wénhuà hé lìshǐ.', 'Cuốn sách này chủ yếu giới thiệu văn hóa và lịch sử Trung Quốc.'], ['只要你打开电视，总能看到那么多的广告，真是浪费时间。', 'Zhǐyào nǐ dǎkāi diànshì, zǒng néng kàndào nàme duō de guǎnggào, zhēn shì làngfèi shíjiān.', 'Chỉ cần mở ti vi là thấy bao nhiêu quảng cáo, thật lãng phí thời gian.'], ['那个电视节目特别有意思，你要是有时间也看看吧。', 'Nàge diànshì jiémù tèbié yǒu yìsi, nǐ yàoshi yǒu shíjiān yě kànkan ba.', 'Chương trình ti vi đó rất thú vị, nếu có thời gian bạn cũng xem thử.']] }],
    },
  ],

  notes: [
    { title: '使', body: 'Động từ 使 = khiến cho, làm cho (tương tự 让), thường dùng trong văn viết: 听说吃块儿巧克力，还能使人的心情变得愉快。', say: '还能使人的心情变得愉快' },
    { title: '只要', body: 'Liên từ trong 只要……就……: vế sau 只要 là điều kiện cần thiết; vế sau 就 là kết quả của điều kiện đó.', say: '只要这次你好好儿准备，一定能把比赛踢好' },
    { title: '可不是', body: 'Phó từ bày tỏ tán thành, đồng cảm với điều người khác nói, thường đứng độc lập; cũng nói 可不: 可不是！时间过得太快了。', say: '可不是！时间过得太快了' },
    { title: '因此', body: 'Liên từ "vì vậy", gần nghĩa với 所以 nhưng không đi kèm 因为: 每个学生的性格不同，因此老师要用不同的方法。', say: '因此，遇到烦恼时，你应该想一些办法' },
    { title: '往往', body: 'Phó từ chỉ việc thường xảy ra trong điều kiện nhất định, có quy luật; chỉ dùng cho tình huống đã xảy ra: 女孩子对衣服颜色的选择往往与她们的性格有关。', say: '往往与她们的性格有关' },
    { title: 'Văn hóa: Màu đỏ và màu trắng trong mắt người Trung Quốc', body: 'Người Trung Quốc thích màu đỏ vì tượng trưng cho may mắn, vui mừng, cuộc sống tốt đẹp, phát đạt; đám cưới khắp nơi đều đỏ nên gọi là "红事儿". Màu trắng ngoài nghĩa sạch sẽ, thuần khiết còn tượng trưng cho đau buồn, chết chóc; nhà có nhiều hoa và vải trắng là nhà có "白事儿" — có người qua đời.', say: '红事儿，白事儿' },
  ],

  writeChars: ['巧', '亲', '戚', '愉', '压', '距', '缺', '态'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa',
      items: [
        { q: '说一说为什么很多人在考试前喜欢吃巧克力。', hint: '巧克力是甜的，吃巧克力能使人的心情变得愉快。' },
        { q: '马克可能因为什么原因带小夏去看那里的景色？', hint: '因为小夏心情不好，想让她放松一下。' },
        { q: '小夏认为上次足球比赛他们踢得怎么样？', hint: '她觉得如果再努力一点儿，就一定会多进一个球。' },
        { q: '出租车司机走错路了吗？为什么？', hint: '没有，前面堵车，他走另外一条路，距离差不多。' },
        { q: '堵车是一件很麻烦的事情，遇到堵车，你会做什么让自己心情变好？', hint: '休息一下，听自己喜欢的音乐。' },
        { q: '怎么理解“生活中的美到处都是”这句话？', hint: '只要有心，就能发现生活中的美。' },
        { q: '从课文可以知道，哪种方法可以让我们了解一个人的性格？', hint: '看她选择什么颜色的衣服。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: hỏi nhau về màu sắc', hint: '你什么颜色的衣服最多？你最喜欢/最不喜欢什么颜色？为什么？你觉得你的生活是什么“颜色”的？' },
        { q: 'Theo nhóm: nói cách làm mình vui khi tâm trạng không tốt, dùng ít nhất 4 cấu trúc', hint: '试着改变自己；遇到烦恼事；影响人的心情；不同的感情变化；事情已经发生；尤其是女性；选对生活的态度；生活中的美到处都是。' },
      ],
    },
  ],

  sentences: [
    { parts: ['这', '种', '巧克力', '味道', '不错'], pinyin: 'Zhè zhǒng qiǎokèlì wèidào búcuò.', vi: 'Loại sô-cô-la này vị khá ngon.' },
    { parts: ['只要', '这次', '你', '好好儿', '准备', '一定', '能', '把', '比赛', '踢好'], pinyin: 'Zhǐyào zhè cì nǐ hǎohāor zhǔnbèi, yídìng néng bǎ bǐsài tīhǎo.', vi: 'Chỉ cần lần này bạn chuẩn bị tốt, nhất định đá tốt.' },
    { parts: ['堵车', '时', '正好', '可以', '休息', '一下'], pinyin: 'Dǔ chē shí zhènghǎo kěyǐ xiūxi yíxià.', vi: 'Lúc tắc đường vừa hay nghỉ một chút.' },
    { parts: ['生活', '中', '不', '缺少', '美', '缺少', '的', '是', '发现', '美', '的', '眼睛'], pinyin: 'Shēnghuó zhōng bù quēshǎo měi, quēshǎo de shì fāxiàn měi de yǎnjing.', vi: 'Cuộc sống không thiếu cái đẹp, thiếu là đôi mắt phát hiện cái đẹp.' },
    { parts: ['颜色', '也', '会', '影响', '人', '的', '心情'], pinyin: 'Yánsè yě huì yǐngxiǎng rén de xīnqíng.', vi: 'Màu sắc cũng ảnh hưởng tâm trạng.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 伤心 · B 放松 · C 只要 · D 积极 · E 证明. Gõ chữ cái A–E.',
      items: [
        { prompt: '有的人认为，心情（ ）、身体健康才是真正的幸福。', answer: 'B', gloss: '放松' }, { prompt: '她听到这个消息后（ ）地哭了。', answer: 'A', gloss: '伤心' },
        { prompt: '这次招聘会提供了差不多1000个工作机会，请同学们（ ）参加。', answer: 'D', gloss: '积极' }, { prompt: '很多小孩子觉得所有东西（ ）一哭就能得到。', answer: 'C', gloss: '只要' },
        { prompt: '他现在已经成为一个有名的律师，终于向所有人（ ）自己的选择是对的。', answer: 'E', gloss: '证明' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 耐心 · B 愉快 · C 到处 · D 缺少 · E 发生. Gõ chữ cái A–E.',
      items: [
        { prompt: '终于爬上来了，累死我了，这山太高了！ 看来你真的是（ ）锻炼，以后每天跟我一块儿跑步吧。', answer: 'D', gloss: '缺少' }, { prompt: '你今天的面试怎么样？ 经理说会认真考虑一下，让我别着急，（ ）等消息。', answer: 'A', gloss: '耐心' },
        { prompt: '不管遇到什么问题、（ ）什么事情，都不要着急。 谢谢您的关心，我记住了。', answer: 'E', gloss: '发生' }, { prompt: '你喜欢听什么样的歌？ 我喜欢那些比较慢，听着让人感觉很浪漫，心情（ ）的歌。', answer: 'B', gloss: '愉快' },
        { prompt: '你的东西怎么（ ）乱放呢？快去打扫一下！ 知道了，我一会儿就去。', answer: 'C', gloss: '到处' },
      ],
    },
    {
      title: 'Giáo trình 比一比 · 往往 / 经常 (gõ từ)',
      hint: 'Gõ 往往 hoặc 经常 theo đáp án sách (câu 5 chấp nhận cả hai).',
      items: [
        { prompt: '那个饭馆的菜不仅好吃，而且价格不贵，以后咱们可以（ ）去。', answer: '经常', gloss: '经常' },
        { prompt: '这个工作（ ）要加班，几乎没时间陪孩子，这个让我受不了。', answer: '经常', gloss: '经常' },
        { prompt: '很多30岁左右的年轻人，平时工作紧张，他们（ ）是饿了才吃饭，渴了才喝水。', answer: '往往', accept: ['经常'], gloss: '往往 / 经常' },
      ],
    },
    {
      title: 'Giáo trình 扩展 · 要 (gõ từ)',
      hint: 'Gõ 重要, 主要, 只要 hoặc 要是.',
      items: [
        { prompt: '我正想找你呢，你说让他学什么专业好？ 这（ ）还得看孩子自己的想法。', answer: '主要', gloss: '主要' },
        { prompt: '上次的事太谢谢你了，（ ）别人，估计就办不成了。', answer: '要是', gloss: '要是' },
        { prompt: '明天的面试很（ ），你最好早点儿出门。', answer: '重要', gloss: '重要' },
        { prompt: '其实做什么工作都一样，（ ）用心，都能做好。', answer: '只要', gloss: '只要' },
      ],
    },
  ],
}
