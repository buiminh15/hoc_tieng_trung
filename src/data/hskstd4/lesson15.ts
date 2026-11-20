import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 4 (Hạ), Bài 15: 教育孩子的艺术 (sách trang 64–75).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách, dịch hội thoại do app tự thêm.
 * Nghe: 15-1…15-5. Bài tập: 比一比/练习 2/扩展, đáp án theo "HSK4-2-BH" trang 5–6.
 */

const A = '/audio/hsk-std4/'

export const hskStd4Lesson15: Lesson = {
  id: 15,
  title: 'Nghệ thuật giáo dục con cái',
  hanzi: '教育孩子的艺术',
  pinyin: 'Jiàoyù háizi de yìshù',
  vi: 'Nghệ thuật giáo dục con cái',
  intro: 'Nói về dạy con, khen ngợi và phê bình. Học 想起来 (起来), 弄, 千万 (so với 一定).',

  dialogue: [
    { who: 'A', name: '王静', hanzi: '那个一边弹钢琴一边唱歌的男孩子是谁？表演得真棒！', pinyin: 'Nàge yìbiān tán gāngqín yìbiān chàng gē de nánháizi shì shéi? Biǎoyǎn de zhēn bàng!', vi: 'Cậu bé vừa đàn piano vừa hát kia là ai? Biểu diễn hay thật!', scene: 'Bài 1 · Thầy Lý khuyên Vương Tĩnh giúp con hình thành thói quen tốt' },
    { who: 'B', name: '李老师', hanzi: '是我孙子。去年寒假前的新年晚会他也表演过一次。', pinyin: 'Shì wǒ sūnzi. Qùnián hánjià qián de xīnnián wǎnhuì tā yě biǎoyǎnguo yí cì.', vi: 'Là cháu nội tôi. Tiệc năm mới trước kỳ nghỉ đông năm ngoái cháu cũng biểu diễn một lần.' },
    { who: 'A', name: '王静', hanzi: '我想起来了，这孩子又聪明又可爱，你们教育得真好！', pinyin: 'Wǒ xiǎng qilai le, zhè háizi yòu cōngming yòu kě\'ài, nǐmen jiàoyù de zhēn hǎo!', vi: 'Tôi nhớ ra rồi, đứa trẻ vừa thông minh vừa đáng yêu, các thầy dạy tốt thật!' },
    { who: 'B', name: '李老师', hanzi: '是他父母教育得好。父母是孩子最重要的老师，他父母不仅教他知识，而且还花了很长时间帮助他养成了非常好的习惯，现在他每天都自己练习弹钢琴。', pinyin: 'Shì tā fùmǔ jiàoyù de hǎo. Fùmǔ shì háizi zuì zhòngyào de lǎoshī, tā fùmǔ bùjǐn jiāo tā zhīshi, érqiě hái huāle hěn cháng shíjiān bāngzhù tā yǎngchéngle fēicháng hǎo de xíguàn, xiànzài tā měi tiān dōu zìjǐ liànxí tán gāngqín.', vi: 'Là do bố mẹ cháu dạy tốt. Bố mẹ là người thầy quan trọng nhất của trẻ, họ không chỉ dạy kiến thức mà còn dành nhiều thời gian giúp cháu hình thành thói quen rất tốt, giờ ngày nào cháu cũng tự tập đàn.' },
    { who: 'A', name: '王静', hanzi: '让孩子养成一个好习惯实在太重要了，看来我得向他父母好好儿学习。', pinyin: 'Ràng háizi yǎngchéng yí ge hǎo xíguàn shízài tài zhòngyào le, kànlái wǒ děi xiàng tā fùmǔ hǎohāor xuéxí.', vi: 'Giúp trẻ hình thành thói quen tốt thật quá quan trọng, xem ra tôi phải học hỏi bố mẹ cháu.' },
    { who: 'B', name: '李老师', hanzi: '对。如果希望有一个优秀的孩子，你就要先成为一位优秀的父亲或者母亲。', pinyin: 'Duì. Rúguǒ xīwàng yǒu yí ge yōuxiù de háizi, nǐ jiù yào xiān chéngwéi yí wèi yōuxiù de fùqin huòzhě mǔqin.', vi: 'Đúng. Nếu mong có đứa con xuất sắc, bạn phải trước hết thành một người cha hoặc người mẹ xuất sắc.' },
    { who: 'A', name: '王静', hanzi: '看你脸色不太好，是不是昨晚没休息好？', pinyin: 'Kàn nǐ liǎnsè bú tài hǎo, shì bu shì zuówǎn méi xiūxi hǎo?', vi: 'Thấy sắc mặt bạn không tốt, có phải tối qua nghỉ không đủ?', scene: 'Bài 2 · Vương Tĩnh khuyên Tôn Nguyệt dạy con biết sắp xếp thời gian' },
    { who: 'B', name: '孙月', hanzi: '别提了。我女儿昨晚做作业又做到11点。', pinyin: 'Biétí le. Wǒ nǚ\'ér zuówǎn zuò zuòyè yòu zuòdào shíyī diǎn.', vi: 'Đừng nhắc. Con gái tôi tối qua làm bài lại đến 11 giờ.' },
    { who: 'A', name: '王静', hanzi: '睡觉太晚对孩子的身体没有好处。最近孩子作业是不是太多了？', pinyin: 'Shuì jiào tài wǎn duì háizi de shēntǐ méiyǒu hǎochù. Zuìjìn háizi zuòyè shì bu shì tài duō le?', vi: 'Ngủ quá muộn không tốt cho cơ thể trẻ. Dạo này bài tập của con có nhiều quá không?' },
    { who: 'B', name: '孙月', hanzi: '主要是她做事情比较慢，比如早上闹钟响了她不醒，我赶时间送她上学，她又急着上厕所。每天因为这些小事批评她，弄得我俩心情都不好。', pinyin: 'Zhǔyào shì tā zuò shìqing bǐjiào màn, bǐrú zǎoshang nàozhōng xiǎngle tā bù xǐng, wǒ gǎn shíjiān sòng tā shàng xué, tā yòu jízhe shàng cèsuǒ. Měi tiān yīnwèi zhèxiē xiǎo shì pīpíng tā, nòngde wǒ liǎ xīnqíng dōu bù hǎo.', vi: 'Chủ yếu là con làm việc chậm, ví dụ sáng chuông reo không dậy, tôi vội đưa con đi học thì con lại vội đi vệ sinh. Ngày nào cũng vì việc nhỏ này mà phê bình con, làm hai mẹ con đều không vui.' },
    { who: 'A', name: '王静', hanzi: '孩子做事慢，往往是因为他们不会安排自己的时间。你应该让孩子学会管理时间。', pinyin: 'Háizi zuò shì màn, wǎngwǎng shì yīnwèi tāmen bú huì ānpái zìjǐ de shíjiān. Nǐ yīnggāi ràng háizi xuéhuì guǎnlǐ shíjiān.', vi: 'Trẻ làm việc chậm thường vì không biết sắp xếp thời gian. Bạn nên để con học cách quản lý thời gian.' },
    { who: 'B', name: '孙月', hanzi: '看来还是我的教育方法有问题。平时看她做事情慢，总想替她做，以后得让她学会安排时间，自己的事情自己做。', pinyin: 'Kànlái háishi wǒ de jiàoyù fāngfǎ yǒu wèntí. Píngshí kàn tā zuò shìqing màn, zǒng xiǎng tì tā zuò, yǐhòu děi ràng tā xuéhuì ānpái shíjiān, zìjǐ de shìqing zìjǐ zuò.', vi: 'Xem ra vẫn là phương pháp dạy của tôi có vấn đề. Thường thấy con làm chậm tôi luôn muốn làm thay, sau này phải để con học sắp xếp thời gian, việc của mình tự làm.' },
    { who: 'A', name: '王静', hanzi: '明天又要带我儿子去医院打针，想想我就头疼。他就怕打针，每次打针都哭得特别厉害。', pinyin: 'Míngtiān yòu yào dài wǒ érzi qù yīyuàn dǎ zhēn, xiǎngxiang wǒ jiù tóuténg. Tā jiù pà dǎ zhēn, měi cì dǎ zhēn dōu kū de tèbié lìhai.', vi: 'Mai lại phải đưa con trai đi bệnh viện tiêm, nghĩ đã đau đầu. Cháu sợ tiêm, lần nào cũng khóc dữ.', scene: 'Bài 3 · Vương Tĩnh và Tôn Nguyệt bàn cách khen ngợi trẻ' },
    { who: 'B', name: '孙月', hanzi: '记得我女儿小时候，带她去医院打针，刚开始，她害怕得要哭。我就小声地和护士说我女儿很勇敢，一点儿也不怕打针，女儿听了以后马上就不哭了。', pinyin: 'Jìde wǒ nǚ\'ér xiǎo shíhou, dài tā qù yīyuàn dǎ zhēn, gāng kāishǐ, tā hàipà de yào kū. Wǒ jiù xiǎo shēng de hé hùshi shuō wǒ nǚ\'ér hěn yǒnggǎn, yìdiǎnr yě bú pà dǎ zhēn, nǚ\'ér tīngle yǐhòu mǎshàng jiù bù kū le.', vi: 'Nhớ hồi nhỏ đưa con gái đi tiêm, lúc đầu con sợ đến muốn khóc. Tôi nhỏ giọng nói với y tá con gái tôi rất dũng cảm, không sợ tiêm chút nào, con nghe xong liền thôi khóc.' },
    { who: 'A', name: '王静', hanzi: '原来鼓励和表扬对小孩儿挺有用的，下次我也试试。', pinyin: 'Yuánlái gǔlì hé biǎoyáng duì xiǎoháir tǐng yǒuyòng de, xià cì wǒ yě shìshi.', vi: 'Hóa ra khích lệ và khen ngợi khá có ích với trẻ, lần sau tôi cũng thử.' },
    { who: 'B', name: '孙月', hanzi: '不过表扬也是一门艺术，表扬千万不要太多，过多的表扬可能会给孩子带来压力。不仅起不到鼓励的作用，还可能让孩子怀疑自己的能力，变得没有信心。', pinyin: 'Búguò biǎoyáng yě shì yì mén yìshù, biǎoyáng qiānwàn búyào tài duō, guò duō de biǎoyáng kěnéng huì gěi háizi dàilái yālì. Bùjǐn qǐ bu dào gǔlì de zuòyòng, hái kěnéng ràng háizi huáiyí zìjǐ de nénglì, biàn de méiyǒu xìnxīn.', vi: 'Nhưng khen cũng là một nghệ thuật, tuyệt đối đừng khen quá nhiều, khen quá mức có thể gây áp lực cho trẻ. Không những không khích lệ được mà còn làm trẻ nghi ngờ năng lực của mình, mất tự tin.' },
    { who: 'A', name: '王静', hanzi: '那怎么表扬孩子才会更有效果呢？', pinyin: 'Nà zěnme biǎoyáng háizi cái huì gèng yǒu xiàoguǒ ne?', vi: 'Vậy khen trẻ thế nào mới hiệu quả hơn?' },
    { who: 'B', name: '孙月', hanzi: '我认为表扬要及时，而且表扬不仅仅要看结果，更要看过程，这样才能鼓励他的积极性，让他变得勇敢，不怕困难。', pinyin: 'Wǒ rènwéi biǎoyáng yào jíshí, érqiě biǎoyáng bù jǐnjǐn yào kàn jiéguǒ, gèng yào kàn guòchéng, zhèyàng cái néng gǔlì tā de jījíxìng, ràng tā biàn de yǒnggǎn, bú pà kùnnan.', vi: 'Tôi cho rằng khen phải kịp thời, hơn nữa không chỉ xem kết quả mà còn xem quá trình, như vậy mới khích lệ tính tích cực, khiến trẻ dũng cảm, không sợ khó.' },
    { who: 'A', name: '短文', hanzi: '有的孩子在得不到自己想要的东西的时候，会通过哭、扔东西或者故意敲打来引起父母的注意。在这种情况下，建议父母先不要生气，应该停下手中的事情，陪孩子整理整理东西，和他们聊聊天儿，弄清楚他们的问题。父母的关心，可以让孩子心情愉快起来。教育孩子应该选择合适的教育方法，最好不要为了解决问题而骗孩子，这是因为儿童缺少判断能力，看到父母骗人，他们也会学着说假话。', pinyin: 'Yǒude háizi zài dé bu dào zìjǐ xiǎng yào de dōngxi de shíhou, huì tōngguò kū, rēng dōngxi huòzhě gùyì qiāodǎ lái yǐnqǐ fùmǔ de zhùyì. Zài zhè zhǒng qíngkuàng xià, jiànyì fùmǔ xiān búyào shēng qì, yīnggāi tíngxià shǒu zhōng de shìqing, péi háizi zhěnglǐ zhěnglǐ dōngxi, hé tāmen liáoliao tiānr, nòng qīngchu tāmen de wèntí. Fùmǔ de guānxīn, kěyǐ ràng háizi xīnqíng yúkuài qilai. Jiàoyù háizi yīnggāi xuǎnzé héshì de jiàoyù fāngfǎ, zuìhǎo búyào wèile jiějué wèntí ér piàn háizi, zhè shì yīnwèi értóng quēshǎo pànduàn nénglì, kàndào fùmǔ piàn rén, tāmen yě huì xuézhe shuō jiǎhuà.', vi: 'Có đứa trẻ khi không có được thứ muốn sẽ khóc, ném đồ hoặc cố ý đập gõ để gây chú ý của cha mẹ. Trong tình huống này, đề nghị cha mẹ đừng vội giận, nên dừng việc đang làm, cùng con dọn đồ, trò chuyện, làm rõ vấn đề của con. Sự quan tâm của cha mẹ làm tâm trạng trẻ vui lên. Dạy con nên chọn phương pháp phù hợp, tốt nhất đừng vì giải quyết vấn đề mà lừa trẻ, vì trẻ em thiếu khả năng phán đoán, thấy cha mẹ lừa người cũng sẽ học nói dối.', scene: 'Bài 4 · Khi trẻ khóc và đòi hỏi' },
    { who: 'A', name: '短文', hanzi: '七岁左右的儿童普遍好动，坐不住，所以老师在教这个年龄段的孩子时，一定要想办法引起他们的兴趣。只有让他们觉得你教的内容有趣，他们才会愿意努力学习。当孩子不明白时，应该多鼓励他，不要用“懒”“笨”“粗心”这种词批评他，这样对他们的正常发展不好。而且，对不同性格的孩子要使用不同的教育方法。如果孩子比较骄傲，应该让他明白还有很多知识需要学习；要是孩子性格有些害羞，就要经常鼓励他说出自己的看法，这样才能让每一个孩子都健康地发展。', pinyin: 'Qī suì zuǒyòu de értóng pǔbiàn hào dòng, zuò bu zhù, suǒyǐ lǎoshī zài jiāo zhège niánlíng duàn de háizi shí, yídìng yào xiǎng bànfǎ yǐnqǐ tāmen de xìngqù. Zhǐyǒu ràng tāmen juéde nǐ jiāo de nèiróng yǒuqù, tāmen cái huì yuànyì nǔlì xuéxí. Dāng háizi bù míngbai shí, yīnggāi duō gǔlì tā, búyào yòng "lǎn" "bèn" "cūxīn" zhè zhǒng cí pīpíng tā, zhèyàng duì tāmen de zhèngcháng fāzhǎn bù hǎo. Érqiě, duì bù tóng xìnggé de háizi yào shǐyòng bù tóng de jiàoyù fāngfǎ. Rúguǒ háizi bǐjiào jiāo\'ào, yīnggāi ràng tā míngbai hái yǒu hěn duō zhīshi xūyào xuéxí; yàoshi háizi xìnggé yǒuxiē hàixiū, jiù yào jīngcháng gǔlì tā shuōchū zìjǐ de kànfǎ, zhèyàng cái néng ràng měi yí ge háizi dōu jiànkāng de fāzhǎn.', vi: 'Trẻ khoảng 7 tuổi thường hiếu động, ngồi không yên, nên khi dạy lứa tuổi này nhất định phải tìm cách khơi gợi hứng thú. Chỉ khi trẻ thấy nội dung thú vị mới chịu cố gắng học. Khi trẻ chưa hiểu nên khích lệ nhiều, đừng dùng các từ như "lười", "ngốc", "cẩu thả" để phê bình, như vậy không tốt cho sự phát triển bình thường. Hơn nữa, với trẻ tính cách khác nhau phải dùng cách dạy khác nhau. Nếu trẻ khá kiêu ngạo nên để trẻ hiểu còn nhiều kiến thức cần học; nếu trẻ hơi nhút nhát thì thường khích lệ nói ra suy nghĩ, như vậy mới giúp mỗi trẻ phát triển lành mạnh.', scene: 'Bài 5 · Dạy trẻ khoảng 7 tuổi' },
  ],
  dialogueClips: [
    { label: '15-1 · Vương Tĩnh và thầy Lý', src: A + 'l15-1.mp3' },
    { label: '15-2 · Vương Tĩnh và Tôn Nguyệt', src: A + 'l15-2.mp3' },
    { label: '15-3 · Cách khen ngợi trẻ', src: A + 'l15-3.mp3' },
    { label: '15-4 · Khi trẻ khóc và đòi hỏi', src: A + 'l15-4.mp3' },
    { label: '15-5 · Dạy trẻ khoảng 7 tuổi', src: A + 'l15-5.mp3' },
  ],
  dialogueTip: '<b>想起来</b>: nhớ ra (起来 = từ dưới lên / nhớ lại). <b>弄</b>: làm (khẩu ngữ, thay nhiều động từ). <b>千万</b> + phủ định: nhất định đừng (nhẹ nhàng, dặn dò); <b>一定</b> mạnh hơn, có ý ra lệnh.',
  slowSay: '教育孩子的艺术',

  vocab: [
    { hanzi: '弹钢琴', pinyin: 'tán gāngqín', pos: 'cụm', meaning: 'chơi đàn piano', han_viet: 'đàn cương cầm' },
    { hanzi: '棒', pinyin: 'bàng', pos: 'tính từ', meaning: 'xuất sắc, hay, giỏi', han_viet: 'bổng' },
    { hanzi: '孙子', pinyin: 'sūnzi', pos: 'danh từ', meaning: 'cháu nội trai', han_viet: 'tôn tử' },
    { hanzi: '寒假', pinyin: 'hánjià', pos: 'danh từ', meaning: 'kỳ nghỉ đông', han_viet: 'hàn giả' },
    { hanzi: '父亲', pinyin: 'fùqin', pos: 'danh từ', meaning: 'cha, bố', han_viet: 'phụ thân' },
    { hanzi: '闹钟', pinyin: 'nàozhōng', pos: 'danh từ', meaning: 'đồng hồ báo thức', han_viet: 'náo chung' },
    { hanzi: '响', pinyin: 'xiǎng', pos: 'động từ', meaning: 'reo, vang lên', han_viet: 'hưởng' },
    { hanzi: '醒', pinyin: 'xǐng', pos: 'động từ', meaning: 'thức dậy, tỉnh dậy', han_viet: 'tỉnh' },
    { hanzi: '赶', pinyin: 'gǎn', pos: 'động từ', meaning: 'vội, gấp rút', han_viet: 'cản' },
    { hanzi: '厕所', pinyin: 'cèsuǒ', pos: 'danh từ', meaning: 'nhà vệ sinh', han_viet: 'xí sở' },
    { hanzi: '批评', pinyin: 'pīpíng', pos: 'động từ', meaning: 'phê bình', han_viet: 'phê bình' },
    { hanzi: '弄', pinyin: 'nòng', pos: 'động từ', meaning: 'làm', han_viet: 'lộng' },
    { hanzi: '管理', pinyin: 'guǎnlǐ', pos: 'động từ', meaning: 'quản lý', han_viet: 'quản lý' },
    { hanzi: '打针', pinyin: 'dǎ zhēn', pos: 'động từ', meaning: 'tiêm, chích', han_viet: 'đả châm' },
    { hanzi: '护士', pinyin: 'hùshi', pos: 'danh từ', meaning: 'y tá', han_viet: 'hộ sĩ' },
    { hanzi: '表扬', pinyin: 'biǎoyáng', pos: 'động từ', meaning: 'khen ngợi, biểu dương', han_viet: 'biểu dương' },
    { hanzi: '千万', pinyin: 'qiānwàn', pos: 'phó từ', meaning: 'nhất định, nhất thiết phải', han_viet: 'thiên vạn' },
    { hanzi: '怀疑', pinyin: 'huáiyí', pos: 'động từ', meaning: 'nghi ngờ, hoài nghi', han_viet: 'hoài nghi' },
    { hanzi: '故意', pinyin: 'gùyì', pos: 'phó từ', meaning: 'cố tình, cố ý', han_viet: 'cố ý' },
    { hanzi: '敲', pinyin: 'qiāo', pos: 'động từ', meaning: 'gõ, khua', han_viet: 'xao' },
    { hanzi: '整理', pinyin: 'zhěnglǐ', pos: 'động từ', meaning: 'thu dọn, dọn dẹp', han_viet: 'chỉnh lý' },
    { hanzi: '合适', pinyin: 'héshì', pos: 'tính từ', meaning: 'thích hợp', han_viet: 'hợp thích' },
    { hanzi: '骗', pinyin: 'piàn', pos: 'động từ', meaning: 'lừa gạt', han_viet: 'phiến' },
    { hanzi: '儿童', pinyin: 'értóng', pos: 'danh từ', meaning: 'trẻ em', han_viet: 'nhi đồng' },
    { hanzi: '假', pinyin: 'jiǎ', pos: 'tính từ', meaning: 'giả dối, không thật', han_viet: 'giả' },
    { hanzi: '左右', pinyin: 'zuǒyòu', pos: 'danh từ', meaning: 'khoảng, khoảng chừng', han_viet: 'tả hữu' },
    { hanzi: '懒', pinyin: 'lǎn', pos: 'tính từ', meaning: 'lười, lười nhác', han_viet: 'lãn' },
    { hanzi: '笨', pinyin: 'bèn', pos: 'tính từ', meaning: 'đần, ngốc', han_viet: 'bổn' },
    { hanzi: '粗心', pinyin: 'cūxīn', pos: 'tính từ', meaning: 'cẩu thả', han_viet: 'thô tâm' },
    { hanzi: '骄傲', pinyin: 'jiāo\'ào', pos: 'tính từ', meaning: 'kiêu ngạo', han_viet: 'kiêu ngạo' },
    { hanzi: '害羞', pinyin: 'hàixiū', pos: 'động từ', meaning: 'ngượng ngùng, thẹn thùng', han_viet: 'hại tu' },
  ],

  sections: [
    {
      kind: 'examples', label: '想起来', title: '起来 và 想起来 (nhớ ra)',
      intro: '起来: động từ làm bổ ngữ xu hướng hoặc bổ ngữ khả năng sau động từ, diễn tả hướng hành động đi từ dưới lên. Cấu trúc 想起来 nghĩa là nhớ lại người/việc nào đó trong quá khứ.',
      groups: [{ label: 'Ví dụ', items: [['你这样躺着看书对眼睛不好，快坐起来！', 'Nǐ zhèyàng tǎngzhe kàn shū duì yǎnjing bù hǎo, kuài zuò qilai!', 'Bạn nằm đọc sách thế này hại mắt, mau ngồi dậy!'], ['需要长时间坐着工作的人，一小时左右一定要站起来活动活动。', 'Xūyào cháng shíjiān zuòzhe gōngzuò de rén, yì xiǎoshí zuǒyòu yídìng yào zhàn qilai huódòng huodong.', 'Người ngồi làm việc lâu, khoảng một giờ nhất định phải đứng dậy vận động.'], ['我突然想起来得去银行，所以不能陪你去大使馆了。', 'Wǒ tūrán xiǎng qilai děi qù yínháng, suǒyǐ bù néng péi nǐ qù dàshǐguǎn le.', 'Tôi chợt nhớ phải đi ngân hàng nên không đi đại sứ quán với bạn được.'], ['我想起来了，这孩子又聪明又可爱，你们教育得真好！', 'Wǒ xiǎng qilai le, zhè háizi yòu cōngming yòu kě\'ài, nǐmen jiàoyù de zhēn hǎo!', 'Tôi nhớ ra rồi, đứa trẻ vừa thông minh vừa đáng yêu, các thầy dạy tốt thật!']] }],
    },
    {
      kind: 'examples', label: '弄', title: '弄 (làm)',
      intro: 'Động từ 弄 nghĩa là "làm", thường dùng trong khẩu ngữ, có thể thay thế một số động từ khác (弄好 = 准备好, 弄坏 = 碰坏, 弄得…= 批评得…).',
      groups: [{ label: 'Ví dụ', items: [['关于那个新闻的材料你准备好了吗？ 都弄(准备)好了，马上给您送过去。', 'Guānyú nàge xīnwén de cáiliào nǐ zhǔnbèi hǎo le ma? Dōu nònghǎo le, mǎshàng gěi nín sòng guoqu.', 'Tài liệu về tin đó bạn chuẩn bị chưa? Làm xong cả rồi, mang cho ông ngay.'], ['一会儿搬沙发的时候要小心点儿，别弄(碰)坏了。', 'Yíhuìr bān shāfā de shíhou yào xiǎoxīn diǎnr, bié nòng(pèng)huài le.', 'Lát nữa chuyển sofa cẩn thận, đừng làm hỏng.'], ['每天因为这些小事批评她，弄(批评)得我俩心情都不好。', 'Měi tiān yīnwèi zhèxiē xiǎo shì pīpíng tā, nòngde wǒ liǎ xīnqíng dōu bù hǎo.', 'Ngày nào cũng vì việc nhỏ phê bình con, làm hai mẹ con đều không vui.']] }],
    },
    {
      kind: 'examples', label: '千万', title: '千万 (nhất định phải)',
      intro: '千万: phó từ, nghĩa "nhất định, nhất thiết", theo sau thường là cấu trúc phủ định.',
      groups: [{ label: 'Ví dụ', items: [['表扬千万不要太多，过多的表扬可能会给孩子带来压力。', 'Biǎoyáng qiānwàn búyào tài duō, guò duō de biǎoyáng kěnéng huì gěi háizi dàilái yālì.', 'Tuyệt đối đừng khen quá nhiều, khen quá mức có thể gây áp lực cho trẻ.'], ['我要等她生日那天再送给她这个礼物，你现在千万别告诉她。', 'Wǒ yào děng tā shēngrì nà tiān zài sòng gěi tā zhège lǐwù, nǐ xiànzài qiānwàn bié gàosu tā.', 'Tôi định đợi sinh nhật cô ấy mới tặng quà này, giờ bạn nhất định đừng nói với cô ấy.'], ['每个人都应该记住这句话：“开车千万别喝酒，喝酒千万别开车。”', 'Měi ge rén dōu yīnggāi jìzhù zhè jù huà: "Kāi chē qiānwàn bié hē jiǔ, hē jiǔ qiānwàn bié kāi chē."', 'Ai cũng nên nhớ câu: "Lái xe tuyệt đối đừng uống rượu, uống rượu tuyệt đối đừng lái xe."']] }],
    },
    {
      kind: 'examples', label: '千万 – 一定', title: 'So sánh 千万 và 一定',
      intro: 'Giống nhau: đều là phó từ, dùng để đưa ra yêu cầu hay lời dặn dò. Khác nhau: (1) 千万 thường dùng trong câu phủ định (với 别, 要/不要, 不能); 一定 thường trong câu khẳng định (với 要/不要, 能/不能). (2) 千万 nhẹ nhàng, tha thiết, hàm ý "hy vọng"; 一定 mạnh hơn, có ý ra lệnh. (3) 一定 dùng với 会/不会/能 ở ngôi thứ nhất để nói quyết tâm; 千万 không. (4) 一定 còn nghĩa "chắc chắn" (phủ định 不一定: chưa chắc), "ở mức độ nào đó" (tính từ) và có thể dùng độc lập để đáp lời; 千万 không có các cách dùng này.',
      groups: [{ label: 'Ví dụ', items: [['通过失败你能获得别人没有的经验，千万/一定不要因为失败就不努力了。', 'Tōngguò shībài nǐ néng huòdé biérén méiyǒu de jīngyàn, qiānwàn/yídìng búyào yīnwèi shībài jiù bù nǔlì le.', 'Qua thất bại bạn có kinh nghiệm người khác không có, nhất định đừng vì thất bại mà ngừng cố gắng.'], ['工作只是生活的一部分，因此，千万不要把工作中的不愉快带到生活中来。', 'Gōngzuò zhǐshì shēnghuó de yí bùfen, yīncǐ, qiānwàn búyào bǎ gōngzuò zhōng de bù yúkuài dài dào shēnghuó zhōng lái.', 'Công việc chỉ là một phần cuộc sống, nên tuyệt đối đừng mang chuyện không vui ở công việc về cuộc sống.'], ['这几个动作你做得还是不太标准，在正式比赛前一定要练好。', 'Zhè jǐ ge dòngzuò nǐ zuò de háishi bú tài biāozhǔn, zài zhèngshì bǐsài qián yídìng yào liànhǎo.', 'Mấy động tác này bạn làm vẫn chưa chuẩn, trước thi đấu chính thức nhất định phải luyện tốt.'], ['感谢您的支持和鼓励，我一定会继续努力。', 'Gǎnxiè nín de zhīchí hé gǔlì, wǒ yídìng huì jìxù nǔlì.', 'Cảm ơn sự ủng hộ khích lệ, tôi nhất định tiếp tục cố gắng.'], ['便宜没好货，好货不便宜。其实不一定都是这样，有时候质量很好的东西也会很便宜。', 'Piányi méi hǎo huò, hǎo huò bù piányi. Qíshí bù yídìng dōu shì zhèyàng, yǒushíhou zhìliàng hěn hǎo de dōngxi yě huì hěn piányi.', 'Rẻ không có hàng tốt. Thật ra không nhất định thế, đôi khi hàng chất lượng tốt cũng rẻ.']] }],
    },
    {
      kind: 'examples', label: 'Từ cùng chữ: 护', title: 'Những từ có chữ giống nhau: 护',
      intro: '保护, 护士, 护照.',
      groups: [{ label: 'Ví dụ', items: [['冬天皮肤往往容易变得干燥，女性朋友尤其应该注意保护皮肤，要多吃水果，比如香蕉、苹果等等。', 'Dōngtiān pífū wǎngwǎng róngyì biàn de gānzào, nǚxìng péngyou yóuqí yīnggāi zhùyì bǎohù pífū, yào duō chī shuǐguǒ, bǐrú xiāngjiāo, píngguǒ děngděng.', 'Mùa đông da dễ khô, chị em nhất là nên chú ý bảo vệ da, ăn nhiều trái cây như chuối, táo.'], ['爸爸说我小时候特别害怕打针，一看见医生就哭，他怎么都没想到，我长大后竟然会成为一名护士。', 'Bàba shuō wǒ xiǎo shíhou tèbié hàipà dǎ zhēn, yí kànjiàn yīshēng jiù kū, tā zěnme dōu méi xiǎngdào, wǒ zhǎngdà hòu jìngrán huì chéngwéi yì míng hùshi.', 'Bố nói hồi nhỏ tôi rất sợ tiêm, thấy bác sĩ là khóc, bố không ngờ lớn lên tôi lại thành y tá.'], ['因为要申请去国外留学，她最近特别忙。一方面她要准备成绩证明、办护照，一方面还要跟国外的大学联系。', 'Yīnwèi yào shēnqǐng qù guówài liúxué, tā zuìjìn tèbié máng. Yì fāngmiàn tā yào zhǔnbèi chéngjì zhèngmíng, bàn hùzhào, yì fāngmiàn hái yào gēn guówài de dàxué liánxì.', 'Vì xin du học nước ngoài, cô dạo này rất bận. Một mặt chuẩn bị bảng điểm, làm hộ chiếu, mặt khác liên hệ trường nước ngoài.']] }],
    },
  ],

  notes: [
    { title: '起来 / 想起来', body: '起来 là bổ ngữ xu hướng "từ dưới lên" (坐起来, 站起来). 想起来: nhớ lại người/việc trong quá khứ: 我想起来了。', say: '我想起来了' },
    { title: '弄', body: 'Động từ khẩu ngữ "làm", thay nhiều động từ: 弄好 (准备好), 弄坏 (碰坏), 弄得我俩心情都不好, 弄清楚.', say: '弄清楚他们的问题' },
    { title: '千万', body: 'Phó từ "nhất định, nhất thiết", theo sau thường là phủ định, ngữ khí nhẹ nhàng lịch sự: 表扬千万不要太多. 一定 mạnh hơn, có ý ra lệnh và còn dùng được để tỏ quyết tâm.', say: '表扬千万不要太多' },
    { title: '以……为…… trong dạy con', body: 'Khen phải kịp thời, không chỉ xem kết quả mà càng xem quá trình; với từng tính cách (kiêu ngạo, nhút nhát) dùng cách dạy khác nhau.', say: '表扬不仅仅要看结果，更要看过程' },
    { title: 'Văn hóa: 家教', body: 'Bài học nhấn mạnh "cha mẹ là người thầy quan trọng nhất của trẻ": muốn con xuất sắc, cha mẹ phải xuất sắc trước.', say: '父母是孩子最重要的老师' },
  ],

  writeChars: ['钢', '孙', '寒', '醒', '赶', '厕', '评', '扬'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa',
      items: [
        { q: '王静以前看过李老师孙子的表演吗？你是怎么知道的？', hint: '看过，她说“我想起来了”，去年新年晚会他表演过。' },
        { q: '怎么理解“父母是孩子最重要的老师”这句话？', hint: '父母不仅教知识，还帮助孩子养成好习惯。' },
        { q: '孙月常因为什么事情心情不好？', hint: '女儿做事慢，早上不起床、急着上厕所，作业做到很晚，她常批评女儿。' },
        { q: '怎么做可以帮助孩子学会安排自己的事情？', hint: '让孩子学会管理时间，自己的事情自己做。' },
        { q: '哪种教育方式对孙月的女儿比较有效？', hint: '鼓励和表扬。' },
        { q: '用表扬这种方式教育孩子时，应该注意哪些问题？', hint: '不要太多；要及时；不仅看结果，更要看过程。' },
        { q: '孩子哭闹引起注意时，父母应该怎么做？', hint: '先不要生气，停下手中的事，陪孩子整理东西、聊天儿，弄清楚问题，不要骗孩子。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: nói về cách bố mẹ dạy bạn thuở nhỏ', hint: '小时候父母会因为什么和你生气？他们怎么表扬或批评你？你认为怎样教育孩子更好？' },
      ],
    },
  ],

  sentences: [
    { parts: ['我', '想', '起来', '了', '这', '孩子', '又', '聪明', '又', '可爱'], pinyin: 'Wǒ xiǎng qilai le, zhè háizi yòu cōngming yòu kě\'ài.', vi: 'Tôi nhớ ra rồi, đứa trẻ vừa thông minh vừa đáng yêu.' },
    { parts: ['父母', '是', '孩子', '最', '重要', '的', '老师'], pinyin: 'Fùmǔ shì háizi zuì zhòngyào de lǎoshī.', vi: 'Cha mẹ là người thầy quan trọng nhất của trẻ.' },
    { parts: ['每天', '批评', '她', '弄', '得', '我', '俩', '心情', '都', '不', '好'], pinyin: 'Měi tiān pīpíng tā, nòngde wǒ liǎ xīnqíng dōu bù hǎo.', vi: 'Ngày nào cũng phê bình con làm hai mẹ con đều không vui.' },
    { parts: ['表扬', '千万', '不要', '太', '多'], pinyin: 'Biǎoyáng qiānwàn búyào tài duō.', vi: 'Tuyệt đối đừng khen quá nhiều.' },
    { parts: ['表扬', '要', '及时', '更', '要', '看', '过程'], pinyin: 'Biǎoyáng yào jíshí, gèng yào kàn guòchéng.', vi: 'Khen phải kịp thời, càng phải xem quá trình.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 批评 · B 整理 · C 寒假 · D 粗心 · E 表扬. Gõ chữ cái A–E.',
      items: [
        { prompt: '已经放（ ）了，去打球的人肯定不多，星期天我们去学校的体育馆打网球吧。', answer: 'C', gloss: '寒假' }, { prompt: '这些只有三分之一吧，还有很多东西没来得及（ ）呢，下周再搬。', answer: 'B', gloss: '整理' },
        { prompt: '如果遇到不得不（ ）别人的时候，态度要友好一点儿，不要让别人听了心里不舒服。', answer: 'A', gloss: '批评' }, { prompt: '他的优点是有礼貌、诚实，能吃苦，就是太（ ）了，不适合我们这儿的工作。', answer: 'D', gloss: '粗心' },
        { prompt: '孩子在受到（ ）时，往往会对自己更有信心，对学习的兴趣也会更大，成绩当然会提高。', answer: 'E', gloss: '表扬' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 故意 · B 害羞 · C 赶 · D 响 · E 管理. Gõ chữ cái A–E.',
      items: [
        { prompt: '因为那件事，她特别生我的气。 放心吧，你也不是（ ）的，去跟她解释一下，她会理解的。', answer: 'A', gloss: '故意' }, { prompt: '你妹妹很可爱，但是好像不太爱说话。 她只是有点儿（ ），等跟大家熟悉了就好了。', answer: 'B', gloss: '害羞' },
        { prompt: '这次大学同学聚会你联系得怎么样了？能来多少人？ 大约有一半吧，李进还专门从国外（ ）回来呢。', answer: 'C', gloss: '赶' }, { prompt: '桌子上那个一直在（ ）的手机是谁的？可能找他有什么急事。 那是张经理的，他在会议室开会呢，你快把手机给他拿过去吧。', answer: 'D', gloss: '响' },
        { prompt: '听说昨天那个招聘会提供了很多工作机会，你找到合适的公司了吗？ 这个招聘会主要是为经济和（ ）专业的学生举办的，所以没几个合适的。', answer: 'E', gloss: '管理' },
      ],
    },
    {
      title: 'Giáo trình 比一比 · 千万 / 一定 (gõ từ)',
      hint: 'Gõ 千万 hoặc 一定 theo đáp án sách.',
      items: [
        { prompt: '这次你一定要按照要求认真填写，小心一点儿，（ ）别写错了。', answer: '千万', gloss: '千万' },
        { prompt: '兴趣是最好的老师，如果孩子对一件事情感兴趣，那他（ ）会努力地去学习，效果也会更好。', answer: '一定', gloss: '一定' },
        { prompt: '事情的原因和结果往往是互相联系的。（ ）的原因会引起一定的结果，有时候一件事情的结果可能又是另一件事情的原因。', answer: '一定', gloss: '一定' },
      ],
    },
    {
      title: 'Giáo trình 扩展 · 护 (gõ từ)',
      hint: 'Gõ 保护, 护士 hoặc 护照.',
      items: [
        { prompt: '冬天皮肤往往容易变得干燥，女性朋友尤其应该注意（ ）皮肤，要多吃水果，比如香蕉、苹果等等。', answer: '保护', gloss: '保护' },
        { prompt: '爸爸说我小时候特别害怕打针，一看见医生就哭，他怎么都没想到，我长大后竟然会成为一名（ ）。', answer: '护士', gloss: '护士' },
        { prompt: '因为要申请去国外留学，她最近特别忙。一方面她要准备成绩证明、办（ ），一方面还要跟国外的大学联系。', answer: '护照', gloss: '护照' },
      ],
    },
  ],
}
