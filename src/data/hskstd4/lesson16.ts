import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 4 (Hạ), Bài 16: 生活可以更美好 (sách trang 80–92).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách, dịch hội thoại do app tự thêm.
 * Nghe: 16-1…16-5. Bài tập: 比一比/练习 2/扩展, đáp án theo "HSK4-2-BH" trang 6–7.
 */

const A = '/audio/hsk-std4/'

export const hskStd4Lesson16: Lesson = {
  id: 16,
  title: 'Cuộc sống có thể tốt đẹp hơn',
  hanzi: '生活可以更美好',
  pinyin: 'Shēnghuó kěyǐ gèng měihǎo',
  vi: 'Cuộc sống có thể tốt đẹp hơn',
  intro: 'Nói về học hành, thành công và cách từ chối. Học 可, 恐怕 (so với 怕), 到底, 拿……来说, 敢.',

  dialogue: [
    { who: 'A', name: '小雨', hanzi: '你马上就要硕士毕业了吧？将来有什么打算？', pinyin: 'Nǐ mǎshàng jiù yào shuòshì bì yè le ba? Jiānglái yǒu shénme dǎsuàn?', vi: 'Bạn sắp tốt nghiệp thạc sĩ rồi nhỉ? Sau này có dự định gì?', scene: 'Bài 1 · Tiểu Hạ gặp vấn đề khi đi du học' },
    { who: 'B', name: '小夏', hanzi: '我想出国读博士，一直在准备办签证需要的材料。', pinyin: 'Wǒ xiǎng chū guó dú bóshì, yìzhí zài zhǔnbèi bàn qiānzhèng xūyào de cáiliào.', vi: 'Tôi muốn ra nước ngoài học tiến sĩ, đang chuẩn bị tài liệu cần để làm visa.' },
    { who: 'A', name: '小雨', hanzi: '现在材料准备得怎么样了？', pinyin: 'Xiànzài cáiliào zhǔnbèi de zěnmeyàng le?', vi: 'Giờ tài liệu chuẩn bị thế nào rồi?' },
    { who: 'B', name: '小夏', hanzi: '成绩证明和护照已经准备好了，另外，还跟国外的大学取得了联系，填写了报名表格。', pinyin: 'Chéngjì zhèngmíng hé hùzhào yǐjīng zhǔnbèihǎo le, lìngwài, hái gēn guówài de dàxué qǔdéle liánxì, tiánxiěle bàomíng biǎogé.', vi: 'Bảng điểm và hộ chiếu đã chuẩn bị xong, ngoài ra còn liên hệ với trường nước ngoài, điền xong mẫu đăng ký.' },
    { who: 'A', name: '小雨', hanzi: '还应该有国外大学给你的邀请信吧？他们把邀请信传真给你了吗？', pinyin: 'Hái yīnggāi yǒu guówài dàxué gěi nǐ de yāoqǐngxìn ba? Tāmen bǎ yāoqǐngxìn chuánzhēn gěi nǐ le ma?', vi: 'Còn phải có thư mời của trường nước ngoài chứ? Họ đã fax thư mời cho bạn chưa?' },
    { who: 'B', name: '小夏', hanzi: '没有啊，下个星期我就要去使馆办签证了，这可怎么办？', pinyin: 'Méiyǒu a, xià ge xīngqī wǒ jiù yào qù shǐguǎn bàn qiānzhèng le, zhè kě zěnme bàn?', vi: 'Chưa, tuần sau tôi đã đi đại sứ quán làm visa, thế này biết làm sao?' },
    { who: 'A', name: '小雨', hanzi: '这可是个大问题，我也不太清楚。我帮你查一下学校的电话号码，你打电话问一下吧。', pinyin: 'Zhè kě shì ge dà wèntí, wǒ yě bú tài qīngchu. Wǒ bāng nǐ chá yíxià xuéxiào de diànhuà hàomǎ, nǐ dǎ diànhuà wèn yíxià ba.', vi: 'Đây là vấn đề lớn, tôi cũng không rõ lắm. Tôi giúp bạn tra số điện thoại của trường, bạn gọi hỏi nhé.' },
    { who: 'A', name: '李进', hanzi: '谢谢您带我参观您的公司。在参观过程中我很激动，有个问题一直想问您。', pinyin: 'Xièxie nín dài wǒ cānguān nín de gōngsī. Zài cānguān guòchéng zhōng wǒ hěn jīdòng, yǒu ge wèntí yìzhí xiǎng wèn nín.', vi: 'Cảm ơn ông dẫn tôi tham quan công ty. Trong lúc tham quan tôi rất xúc động, có một câu hỏi luôn muốn hỏi ông.', scene: 'Bài 2 · Ông chủ Vương kể kinh nghiệm thành công cho Lý Tiến' },
    { who: 'B', name: '王老板', hanzi: '好啊！小伙子，咱们一边吃西瓜，一边聊。', pinyin: 'Hǎo a! Xiǎohuǒzi, zánmen yìbiān chī xīguā, yìbiān liáo.', vi: 'Được! Chàng trai, mình vừa ăn dưa hấu vừa trò chuyện.' },
    { who: 'A', name: '李进', hanzi: '您从大学毕业开始工作，到现在才十年时间，怎么给公司赚了这么多钱？这让我非常吃惊。我想向您学习一下成功的经验。', pinyin: 'Nín cóng dàxué bì yè kāishǐ gōngzuò, dào xiànzài cái shí nián shíjiān, zěnme gěi gōngsī zhuànle zhème duō qián? Zhè ràng wǒ fēicháng chī jīng. Wǒ xiǎng xiàng nín xuéxí yíxià chénggōng de jīngyàn.', vi: 'Ông tốt nghiệp đại học đi làm, đến giờ mới mười năm, sao kiếm được cho công ty nhiều tiền thế? Điều này làm tôi rất ngạc nhiên. Tôi muốn học kinh nghiệm thành công của ông.' },
    { who: 'B', name: '王老板', hanzi: '这个问题以前一个记者也问过我。做生意时虽然会遇到各种压力和困难，但是大家的机会都是相同的。你看，这里有三块大小不同的西瓜，我们用西瓜的大小代表钱的多少，要是我们一起开始吃，你会先选哪块？', pinyin: 'Zhège wèntí yǐqián yí ge jìzhě yě wènguo wǒ. Zuò shēngyi shí suīrán huì yùdào gè zhǒng yālì hé kùnnan, dànshì dàjiā de jīhuì dōu shì xiāngtóng de. Nǐ kàn, zhèlǐ yǒu sān kuài dà xiǎo bù tóng de xīguā, wǒmen yòng xīguā de dàxiǎo dàibiǎo qián de duōshao, yàoshi wǒmen yìqǐ kāishǐ chī, nǐ huì xiān xuǎn nǎ kuài?', vi: 'Câu hỏi này trước đây một nhà báo cũng hỏi tôi. Làm ăn tuy gặp đủ loại áp lực khó khăn nhưng cơ hội của mọi người đều như nhau. Anh xem, ở đây có ba miếng dưa to nhỏ khác nhau, ta lấy kích cỡ dưa tượng trưng cho số tiền, nếu cùng bắt đầu ăn, anh sẽ chọn miếng nào trước?' },
    { who: 'A', name: '李进', hanzi: '我肯定先吃最大的一块了，难道您会先吃小的，放弃吃大块的机会吗？', pinyin: 'Wǒ kěndìng xiān chī zuì dà de yí kuài le, nándào nín huì xiān chī xiǎo de, fàngqì chī dà kuài de jīhuì ma?', vi: 'Tôi chắc chắn ăn miếng to nhất trước, chẳng lẽ ông sẽ ăn miếng nhỏ trước, bỏ cơ hội ăn miếng lớn?' },
    { who: 'B', name: '王老板', hanzi: '我会先吃最小的一块，因为在你没吃完最大的那块时，我还有时间再多吃一块，最后一定比你吃的西瓜多。听完我的回答，恐怕你已经知道我的答案了吧。', pinyin: 'Wǒ huì xiān chī zuì xiǎo de yí kuài, yīnwèi zài nǐ méi chīwán zuì dà de nà kuài shí, wǒ hái yǒu shíjiān zài duō chī yí kuài, zuìhòu yídìng bǐ nǐ chī de xīguā duō. Tīngwán wǒ de huídá, kǒngpà nǐ yǐjīng zhīdào wǒ de dá\'àn le ba.', vi: 'Tôi sẽ ăn miếng nhỏ nhất trước, vì khi anh chưa ăn hết miếng lớn nhất tôi còn thời gian ăn thêm một miếng nữa, cuối cùng chắc chắn ăn nhiều hơn anh. Nghe xong câu trả lời của tôi chắc anh đã biết đáp án của tôi.' },
    { who: 'A', name: '小林', hanzi: '今年放假我又回不了家了，这次我父母又要失望了。你有什么计划？', pinyin: 'Jīnnián fàng jià wǒ yòu huí bu liǎo jiā le, zhè cì wǒ fùmǔ yòu yào shīwàng le. Nǐ yǒu shénme jìhuà?', vi: 'Nghỉ năm nay tôi lại không về nhà được, lần này bố mẹ lại thất vọng. Bạn có kế hoạch gì?', scene: 'Bài 3 · Tiểu Lâm ngại từ chối bạn' },
    { who: 'B', name: '小李', hanzi: '我计划去郊区住一个月。你不是已经买好火车票了吗？你到底怎么打算的呀？', pinyin: 'Wǒ jìhuà qù jiāoqū zhù yí ge yuè. Nǐ bú shì yǐjīng mǎihǎo huǒchēpiào le ma? Nǐ dàodǐ zěnme dǎsuàn de ya?', vi: 'Tôi định ra ngoại ô ở một tháng. Bạn chẳng đã mua vé tàu rồi sao? Rốt cuộc bạn tính thế nào?' },
    { who: 'A', name: '小林', hanzi: '昨天一个外地的好朋友打电话说要来旅游，让我当导游，我实在不好意思拒绝。', pinyin: 'Zuótiān yí ge wàidì de hǎo péngyou dǎ diànhuà shuō yào lái lǚyóu, ràng wǒ dāng dǎoyóu, wǒ shízài bù hǎoyìsi jùjué.', vi: 'Hôm qua một người bạn thân ở tỉnh khác gọi điện nói muốn đến du lịch, bảo tôi làm hướng dẫn viên, tôi thật ngại từ chối.' },
    { who: 'B', name: '小李', hanzi: '其实拒绝并不表示不愿意帮忙。遇到解决不了的问题或者无法完成的任务时，拒绝正好说明你对朋友负责。这也是对你父母负责的态度。', pinyin: 'Qíshí jùjué bìng bù biǎoshì bú yuànyì bāng máng. Yùdào jiějué bù liǎo de wèntí huòzhě wúfǎ wánchéng de rènwu shí, jùjué zhènghǎo shuōmíng nǐ duì péngyou fùzé. Zhè yě shì duì nǐ fùmǔ fùzé de tàidù.', vi: 'Thật ra từ chối không có nghĩa là không muốn giúp. Gặp vấn đề không giải quyết được hoặc nhiệm vụ không thể hoàn thành, từ chối chính là chứng tỏ bạn có trách nhiệm với bạn bè. Đó cũng là thái độ có trách nhiệm với bố mẹ bạn.' },
    { who: 'A', name: '小林', hanzi: '既然别人找我帮忙，说明他真的很需要我的帮助。我担心要是说“不”的话，会让他误会和伤心。', pinyin: 'Jìrán biérén zhǎo wǒ bāng máng, shuōmíng tā zhēn de hěn xūyào wǒ de bāngzhù. Wǒ dānxīn yàoshi shuō "bù" de huà, huì ràng tā wùhuì hé shāng xīn.', vi: 'Đã người ta tìm tôi giúp thì chứng tỏ họ thật sự cần tôi giúp. Tôi lo nếu nói "không" sẽ làm họ hiểu lầm và buồn.' },
    { who: 'B', name: '小李', hanzi: '别担心！如果你用一个既合适又礼貌的方法告诉朋友，他一定会原谅你的。', pinyin: 'Bié dānxīn! Rúguǒ nǐ yòng yí ge jì héshì yòu lǐmào de fāngfǎ gàosu péngyou, tā yídìng huì yuánliàng nǐ de.', vi: 'Đừng lo! Nếu bạn dùng cách vừa thích hợp vừa lịch sự nói với bạn, họ nhất định tha thứ cho bạn.' },
    { who: 'A', name: '短文', hanzi: '有些同学经常把“明天”和“将来”挂在嘴边，常说作业明天再完成，下次考试一定好好儿复习，等等。这种态度会浪费时间，不但会让你到最后什么事情都做不成，而且还得不到别人的同情。所以不要把什么事情都推到“明天”，一切从现在做起。就拿学汉语来说吧，首先要注意课前预习，找出第二天要学习的重点；其次，上课时要认真听，不能马虎；最后，课后要记得复习。只要这样，汉语就能越学越好，越说越自信。', pinyin: 'Yǒuxiē tóngxué jīngcháng bǎ "míngtiān" hé "jiānglái" guà zài zuǐ biān, cháng shuō zuòyè míngtiān zài wánchéng, xià cì kǎoshì yídìng hǎohāor fùxí, děngděng. Zhè zhǒng tàidù huì làngfèi shíjiān, búdàn huì ràng nǐ dào zuìhòu shénme shìqing dōu zuò bu chéng, érqiě hái dé bu dào biérén de tóngqíng. Suǒyǐ búyào bǎ shénme shìqing dōu tuīdào "míngtiān", yíqiè cóng xiànzài zuòqǐ. Jiù ná xué Hànyǔ lái shuō ba, shǒuxiān yào zhùyì kè qián yùxí, zhǎochū dì-èr tiān yào xuéxí de zhòngdiǎn; qícì, shàng kè shí yào rènzhēn tīng, bù néng mǎhu; zuìhòu, kè hòu yào jìde fùxí. Zhǐyào zhèyàng, Hànyǔ jiù néng yuè xué yuè hǎo, yuè shuō yuè zìxìn.', vi: 'Có bạn học hay treo "ngày mai" và "tương lai" trên miệng, thường nói bài tập mai làm, lần thi sau nhất định ôn kỹ… Thái độ này lãng phí thời gian, không những cuối cùng việc gì cũng không xong mà còn không nhận được sự đồng cảm của người khác. Vì vậy đừng đẩy việc gì cũng sang "ngày mai", mọi việc bắt đầu từ bây giờ. Lấy việc học tiếng Hán mà nói: trước hết phải chú ý chuẩn bị bài trước, tìm ra trọng điểm học ngày hôm sau; thứ hai, lên lớp nghe nghiêm túc, không được cẩu thả; cuối cùng sau giờ học nhớ ôn tập. Chỉ cần vậy, tiếng Hán sẽ càng học càng tốt, càng nói càng tự tin.', scene: 'Bài 4 · Đừng đẩy sang ngày mai' },
    { who: 'A', name: '短文', hanzi: '当你认为自己在哪方面很优秀时，千万要冷静，不要骄傲。因为这个世界很大，“天外有天，人外有人”，很可能有人在这方面比你更厉害。你现在是第一，并不表示你永远都是第一。就像比赛一样，没有人会永远输，也没有人会一直赢。我们知道的越多，就会发现自己不懂的也越多。我们应该重视平时的积累，多向周围的人学习。如果你敢诚实地说出自己对哪方面不了解，并不说明自己比别人差，相反，这样做更能得到别人的尊重。', pinyin: 'Dāng nǐ rènwéi zìjǐ zài nǎ fāngmiàn hěn yōuxiù shí, qiānwàn yào lěngjìng, búyào jiāo\'ào. Yīnwèi zhège shìjiè hěn dà, "tiān wài yǒu tiān, rén wài yǒu rén", hěn kěnéng yǒu rén zài zhè fāngmiàn bǐ nǐ gèng lìhai. Nǐ xiànzài shì dì-yī, bìng bù biǎoshì nǐ yǒngyuǎn dōu shì dì-yī. Jiù xiàng bǐsài yíyàng, méiyǒu rén huì yǒngyuǎn shū, yě méiyǒu rén huì yìzhí yíng. Wǒmen zhīdào de yuè duō, jiù huì fāxiàn zìjǐ bù dǒng de yě yuè duō. Wǒmen yīnggāi zhòngshì píngshí de jīlěi, duō xiàng zhōuwéi de rén xuéxí. Rúguǒ nǐ gǎn chéngshí de shuōchū zìjǐ duì nǎ fāngmiàn bù liǎojiě, bìng bù shuōmíng zìjǐ bǐ biérén chà, xiāngfǎn, zhèyàng zuò gèng néng dédào biérén de zūnzhòng.', vi: 'Khi bạn cho rằng mình xuất sắc ở lĩnh vực nào, nhất định phải bình tĩnh, đừng kiêu ngạo. Vì thế giới rất lớn, "trời ngoài có trời, người ngoài có người", rất có thể có người giỏi hơn bạn ở lĩnh vực này. Bạn hiện là số một không có nghĩa mãi mãi là số một. Như thi đấu, không ai thua mãi, cũng không ai thắng mãi. Càng biết nhiều càng thấy mình không hiểu cũng nhiều. Ta nên coi trọng tích lũy hằng ngày, học hỏi người xung quanh. Nếu bạn dám thành thật nói mình chưa hiểu mặt nào, không có nghĩa mình kém người khác, ngược lại làm vậy càng được người khác tôn trọng.', scene: 'Bài 5 · Trời ngoài có trời' },
  ],
  dialogueClips: [
    { label: '16-1 · Tiểu Hạ và Tiểu Vũ', src: A + 'l16-1.mp3' },
    { label: '16-2 · Ông chủ Vương và Lý Tiến', src: A + 'l16-2.mp3' },
    { label: '16-3 · Tiểu Lâm và Tiểu Lý', src: A + 'l16-3.mp3' },
    { label: '16-4 · Đừng đẩy sang ngày mai', src: A + 'l16-4.mp3' },
    { label: '16-5 · Trời ngoài có trời', src: A + 'l16-5.mp3' },
  ],
  dialogueTip: '<b>可</b>: nhấn mạnh (这可是个大问题). <b>恐怕</b>: e rằng, có lẽ (lo lắng). <b>到底</b>: rốt cuộc (câu hỏi) / đến cùng. <b>拿……来说</b>: lấy… mà nói. <b>敢</b>: dám.',
  slowSay: '生活可以更美好',

  vocab: [
    { hanzi: '博士', pinyin: 'bóshì', pos: 'danh từ', meaning: 'tiến sĩ', han_viet: 'bác sĩ' },
    { hanzi: '签证', pinyin: 'qiānzhèng', pos: 'danh từ', meaning: 'thị thực, visa', han_viet: 'thiêm chứng' },
    { hanzi: '报名', pinyin: 'bào míng', pos: 'động từ', meaning: 'ghi danh, đăng ký', han_viet: 'báo danh' },
    { hanzi: '表格', pinyin: 'biǎogé', pos: 'danh từ', meaning: 'bản khai, mẫu đơn', han_viet: 'biểu cách' },
    { hanzi: '传真', pinyin: 'chuánzhēn', pos: 'động từ', meaning: 'gửi fax', han_viet: 'truyền chân' },
    { hanzi: '号码', pinyin: 'hàomǎ', pos: 'danh từ', meaning: 'số', han_viet: 'hiệu mã' },
    { hanzi: '参观', pinyin: 'cānguān', pos: 'động từ', meaning: 'tham quan, đi thăm', han_viet: 'tham quan' },
    { hanzi: '激动', pinyin: 'jīdòng', pos: 'tính từ', meaning: 'cảm động, xúc động', han_viet: 'kích động' },
    { hanzi: '小伙子', pinyin: 'xiǎohuǒzi', pos: 'danh từ', meaning: 'chàng trai', han_viet: 'tiểu hỏa tử' },
    { hanzi: '记者', pinyin: 'jìzhě', pos: 'danh từ', meaning: 'phóng viên, nhà báo', han_viet: 'ký giả' },
    { hanzi: '代表', pinyin: 'dàibiǎo', pos: 'động từ', meaning: 'đại diện, thay mặt', han_viet: 'đại biểu' },
    { hanzi: '恐怕', pinyin: 'kǒngpà', pos: 'phó từ', meaning: 'e rằng, có lẽ', han_viet: 'khủng phạ' },
    { hanzi: '失望', pinyin: 'shīwàng', pos: 'động từ', meaning: 'thất vọng', han_viet: 'thất vọng' },
    { hanzi: '郊区', pinyin: 'jiāoqū', pos: 'danh từ', meaning: 'vùng ngoại ô', han_viet: 'giao khu' },
    { hanzi: '到底', pinyin: 'dàodǐ', pos: 'phó từ', meaning: '(nhấn mạnh trong câu hỏi) rốt cuộc', han_viet: 'đáo để' },
    { hanzi: '导游', pinyin: 'dǎoyóu', pos: 'danh từ', meaning: 'hướng dẫn viên du lịch', han_viet: 'đạo du' },
    { hanzi: '礼貌', pinyin: 'lǐmào', pos: 'tính từ', meaning: 'lễ phép, lịch sự', han_viet: 'lễ mạo' },
    { hanzi: '原谅', pinyin: 'yuánliàng', pos: 'động từ', meaning: 'tha thứ', han_viet: 'nguyên lượng' },
    { hanzi: '挂', pinyin: 'guà', pos: 'động từ', meaning: 'treo, móc', han_viet: 'quải' },
    { hanzi: '同情', pinyin: 'tóngqíng', pos: 'động từ', meaning: 'thông cảm, đồng tình', han_viet: 'đồng tình' },
    { hanzi: '推', pinyin: 'tuī', pos: 'động từ', meaning: 'hoãn lại, đẩy, triển khai', han_viet: 'thôi' },
    { hanzi: '预习', pinyin: 'yùxí', pos: 'động từ', meaning: 'chuẩn bị bài', han_viet: 'dự tập' },
    { hanzi: '重点', pinyin: 'zhòngdiǎn', pos: 'danh từ', meaning: 'trọng điểm, trọng tâm', han_viet: 'trọng điểm' },
    { hanzi: '马虎', pinyin: 'mǎhu', pos: 'tính từ', meaning: 'cẩu thả, lơ đễnh', han_viet: 'mã hổ' },
    { hanzi: '自信', pinyin: 'zìxìn', pos: 'tính từ', meaning: 'tự tin', han_viet: 'tự tín' },
    { hanzi: '冷静', pinyin: 'lěngjìng', pos: 'tính từ', meaning: 'bình tĩnh, điềm tĩnh', han_viet: 'lãnh tĩnh' },
    { hanzi: '输', pinyin: 'shū', pos: 'động từ', meaning: 'thua', han_viet: 'thâu' },
    { hanzi: '重视', pinyin: 'zhòngshì', pos: 'động từ', meaning: 'xem trọng, chú trọng', han_viet: 'trọng thị' },
    { hanzi: '敢', pinyin: 'gǎn', pos: 'động từ', meaning: 'dám', han_viet: 'cảm' },
    { hanzi: '尊重', pinyin: 'zūnzhòng', pos: 'động từ', meaning: 'tôn trọng', han_viet: 'tôn trọng' },
  ],

  sections: [
    {
      kind: 'examples', label: '可', title: '可 (nhấn mạnh)',
      intro: 'Phó từ 可 dùng để nhấn mạnh; cũng dùng trong câu hỏi để làm ngữ khí mạnh hơn.',
      groups: [{ label: 'Ví dụ', items: [['这可是个大问题，我也不太清楚。', 'Zhè kě shì ge dà wèntí, wǒ yě bú tài qīngchu.', 'Đây là vấn đề lớn đấy, tôi cũng không rõ lắm.'], ['下个星期我就要去使馆办签证了，这可怎么办？', 'Xià ge xīngqī wǒ jiù yào qù shǐguǎn bàn qiānzhèng le, zhè kě zěnme bàn?', 'Tuần sau tôi đã đi đại sứ quán làm visa, thế này biết làm sao?'], ['我办了一张那个理发店的会员卡，理发可节约了不少钱。', 'Wǒ bànle yì zhāng nàge lǐfàdiàn de huìyuánkǎ, lǐfà kě jiéyuēle bù shǎo qián.', 'Tôi làm thẻ hội viên tiệm cắt tóc đó, cắt tóc tiết kiệm được khối tiền.']] }],
    },
    {
      kind: 'examples', label: '恐怕', title: '恐怕 (e rằng, lo)',
      intro: '恐怕: động từ "lo lắng"; phó từ "phỏng đoán và có phần lo lắng"; cũng có nghĩa "có lẽ, có thể" (大概、也许).',
      groups: [{ label: 'Ví dụ', items: [['我的工作经验还比较少，那份工作我恐怕完成不了。', 'Wǒ de gōngzuò jīngyàn hái bǐjiào shǎo, nà fèn gōngzuò wǒ kǒngpà wánchéng bu liǎo.', 'Kinh nghiệm làm việc của tôi còn ít, e rằng không hoàn thành được việc đó.'], ['这个会议室的座位恐怕不够，还是换到旁边那个大的吧。', 'Zhège huìyìshì de zuòwèi kǒngpà bú gòu, háishi huàndào pángbiān nàge dà de ba.', 'Chỗ ngồi phòng họp này e không đủ, đổi sang phòng lớn bên cạnh đi.'], ['听完我的回答，恐怕你已经知道我的答案了吧。', 'Tīngwán wǒ de huídá, kǒngpà nǐ yǐjīng zhīdào wǒ de dá\'àn le ba.', 'Nghe xong câu trả lời, chắc anh đã biết đáp án của tôi.'], ['京剧演出7点就开始了，现在恐怕已经结束了。', 'Jīngjù yǎnchū qī diǎn jiù kāishǐ le, xiànzài kǒngpà yǐjīng jiéshù le.', 'Kinh kịch 7 giờ đã bắt đầu, giờ có lẽ đã kết thúc.']] }],
    },
    {
      kind: 'examples', label: '恐怕 – 怕', title: 'So sánh 恐怕 và 怕',
      intro: 'Giống nhau: đều là động từ "lo lắng" và phó từ phỏng đoán, hàm ý lo. Khác nhau: (1) nghĩa "lo lắng": 恐怕 chỉ đứng trước động từ; 怕 đứng trước động từ lẫn danh từ. (2) nghĩa phỏng đoán: 恐怕 đứng trước hoặc sau chủ ngữ; 怕 chỉ sau chủ ngữ. (3) 怕 là động từ có thể mang tân ngữ chỉ "sợ"; 恐怕 không. (4) 恐怕 còn thay được bằng 也许/大概; 怕 không.',
      groups: [{ label: 'Ví dụ', items: [['从这儿坐地铁到那儿至少得五十分钟，马克恐怕/怕来不及了。', 'Cóng zhèr zuò dìtiě dào nàr zhìshǎo děi wǔshí fēnzhōng, Mǎkè kǒngpà/pà láibují le.', 'Từ đây đi tàu điện đến đó ít nhất 50 phút, Mark e không kịp.'], ['刚才听广播说明天可能会下大雨，恐怕足球比赛不能举行了。', 'Gāngcái tīng guǎngbō shuō míngtiān kěnéng huì xià dàyǔ, kǒngpà zúqiú bǐsài bù néng jǔxíng le.', 'Vừa nghe phát thanh mai có thể mưa lớn, e trận bóng không tổ chức được.'], ['我怕你忘了这件事，所以打电话提醒你一下。', 'Wǒ pà nǐ wàngle zhè jiàn shì, suǒyǐ dǎ diànhuà tíxǐng nǐ yíxià.', 'Tôi sợ bạn quên chuyện này nên gọi điện nhắc.'], ['找工作关键还是看能力，有能力的人不怕找不到好工作。', 'Zhǎo gōngzuò guānjiàn háishi kàn nénglì, yǒu nénglì de rén bú pà zhǎo bu dào hǎo gōngzuò.', 'Tìm việc then chốt vẫn là năng lực, người có năng lực không sợ không tìm được việc tốt.']] }],
    },
    {
      kind: 'examples', label: '到底', title: '到底 (rốt cuộc, đến cùng)',
      intro: '到底: động từ "đến cùng"; phó từ dùng trong câu hỏi hoặc câu có đại từ nghi vấn để tìm tòi thêm ("rốt cuộc"). Không dùng trong câu hỏi dùng 吗. Nếu chủ ngữ là đại từ nghi vấn thì 到底 chỉ đặt trước chủ ngữ.',
      groups: [{ label: 'Ví dụ', items: [['今天我一定陪你逛街逛到底，保证让你买到合适的衣服。', 'Jīntiān wǒ yídìng péi nǐ guàng jiē guàng dàodǐ, bǎozhèng ràng nǐ mǎidào héshì de yīfu.', 'Hôm nay tôi nhất định đi dạo phố với bạn đến cùng, đảm bảo bạn mua được đồ vừa ý.'], ['你不是已经买好火车票了吗？你到底怎么打算的呀？', 'Nǐ bú shì yǐjīng mǎihǎo huǒchēpiào le ma? Nǐ dàodǐ zěnme dǎsuàn de ya?', 'Bạn chẳng đã mua vé tàu rồi sao? Rốt cuộc bạn tính thế nào?'], ['我给他打了好几次电话了，可是一直没人接，也不知道他到底是怎么回事。', 'Wǒ gěi tā dǎle hǎo jǐ cì diànhuà le, kěshì yìzhí méi rén jiē, yě bù zhīdào tā dàodǐ shì zěnme huí shì.', 'Tôi gọi cho anh ấy mấy lần mà không ai nghe, không biết rốt cuộc anh ấy sao.'], ['到底谁去参加比赛，大家还没决定。', 'Dàodǐ shéi qù cānjiā bǐsài, dàjiā hái méi juédìng.', 'Rốt cuộc ai đi thi đấu, mọi người vẫn chưa quyết định.']] }],
    },
    {
      kind: 'examples', label: '拿…来说 · 敢', title: '拿……来说 (lấy… mà nói) và 敢 (dám)',
      intro: '拿……来说: 拿 là giới từ dùng để đưa ra sự vật/tình huống cần nói rõ. 敢: động từ năng nguyện đặt trước động từ, diễn tả sự tự tin làm việc gì.',
      groups: [
        { label: '拿……来说', items: [['这次招聘很多人符合公司的要求，拿他来说，他不仅专业符合职业要求，而且还有工作经验。', 'Zhè cì zhāopìn hěn duō rén fúhé gōngsī de yāoqiú, ná tā lái shuō, tā bùjǐn zhuānyè fúhé zhíyè yāoqiú, érqiě hái yǒu gōngzuò jīngyàn.', 'Lần tuyển dụng này nhiều người đáp ứng yêu cầu, lấy anh ấy mà nói, không những chuyên ngành phù hợp mà còn có kinh nghiệm.'], ['就拿学汉语来说吧，首先要注意课前预习，找出第二天要学习的重点……', 'Jiù ná xué Hànyǔ lái shuō ba, shǒuxiān yào zhùyì kè qián yùxí, zhǎochū dì-èr tiān yào xuéxí de zhòngdiǎn……', 'Cứ lấy việc học tiếng Hán mà nói, trước hết chú ý chuẩn bị bài, tìm trọng điểm hôm sau……']] },
        { label: '敢', items: [['我们应该把那些敢说真话的人当成“镜子”，这样才能及时发现自己的缺点。', 'Wǒmen yīnggāi bǎ nàxiē gǎn shuō zhēnhuà de rén dàngchéng "jìngzi", zhèyàng cái néng jíshí fāxiàn zìjǐ de quēdiǎn.', 'Ta nên coi những người dám nói thật là "tấm gương", như vậy mới kịp thấy khuyết điểm.'], ['小时候我总喜欢躺在床上看书，结果眼睛越来越不好，所以从那儿以后我就不敢再躺着看书了。', 'Xiǎo shíhou wǒ zǒng xǐhuan tǎng zài chuáng shang kàn shū, jiéguǒ yǎnjing yuè lái yuè bù hǎo, suǒyǐ cóng nàr yǐhòu wǒ jiù bù gǎn zài tǎngzhe kàn shū le.', 'Hồi nhỏ tôi hay nằm đọc sách, kết quả mắt ngày càng kém nên từ đó không dám nằm đọc nữa.'], ['如果你敢诚实地说出自己对哪方面不了解，并不说明自己比别人差，相反，这样做更能得到别人的尊重。', 'Rúguǒ nǐ gǎn chéngshí de shuōchū zìjǐ duì nǎ fāngmiàn bù liǎojiě, bìng bù shuōmíng zìjǐ bǐ biérén chà, xiāngfǎn, zhèyàng zuò gèng néng dédào biérén de zūnzhòng.', 'Nếu bạn dám thành thật nói mình chưa hiểu mặt nào, không có nghĩa mình kém người khác, ngược lại càng được tôn trọng.']] },
      ],
    },
    {
      kind: 'examples', label: 'Từ cùng chữ: 重', title: 'Những từ có chữ giống nhau: 重',
      intro: '严重, 重点, 重视, 尊重.',
      groups: [{ label: 'Ví dụ', items: [['塑料袋确实很方便，但是它的大量使用也带来了严重的环境污染问题。', 'Sùliàodài quèshí hěn fāngbiàn, dànshì tā de dàliàng shǐyòng yě dàiláile yánzhòng de huánjìng wūrǎn wèntí.', 'Túi nilông đúng là tiện, nhưng dùng nhiều gây ô nhiễm môi trường nghiêm trọng.'], ['解决这个任务没有那么困难，但关键是我们要弄清楚工作的主要目的，找到重点。', 'Jiějué zhège rènwu méiyǒu nàme kùnnan, dàn guānjiàn shì wǒmen yào nòng qīngchu gōngzuò de zhǔyào mùdì, zhǎodào zhòngdiǎn.', 'Giải quyết nhiệm vụ này không quá khó, then chốt là làm rõ mục đích chính và tìm trọng điểm.'], ['她一直都很重视这个机会，最后竟然放弃了，这让我们非常吃惊。', 'Tā yìzhí dōu hěn zhòngshì zhège jīhuì, zuìhòu jìngrán fàngqì le, zhè ràng wǒmen fēicháng chī jīng.', 'Cô luôn rất coi trọng cơ hội này mà cuối cùng bỏ, điều này khiến chúng tôi ngạc nhiên.'], ['如果是十分重要的朋友，中国人往往会请他们去饭店或餐厅吃，以表示对客人的尊重和礼貌。', 'Rúguǒ shì shífēn zhòngyào de péngyou, Zhōngguó rén wǎngwǎng huì qǐng tāmen qù fàndiàn huò cāntīng chī, yǐ biǎoshì duì kèrén de zūnzhòng hé lǐmào.', 'Nếu là bạn rất quan trọng, người Trung Quốc thường mời ra nhà hàng để tỏ sự tôn trọng, lịch sự.']] }],
    },
  ],

  notes: [
    { title: '可', body: 'Phó từ nhấn mạnh; cũng dùng trong câu hỏi để làm ngữ khí mạnh hơn: 这可是个大问题; 这可怎么办？', say: '这可怎么办' },
    { title: '恐怕', body: 'Động từ: lo lắng. Phó từ: phỏng đoán có phần lo; cũng nghĩa "có lẽ" (大概/也许). So với 怕: 怕 mang được tân ngữ chỉ "sợ", 恐怕 thì không.', say: '恐怕你已经知道我的答案了吧' },
    { title: '到底', body: 'Động từ "đến cùng" (逛到底). Phó từ trong câu hỏi: "rốt cuộc" (你到底怎么打算的呀？). Không dùng trong câu hỏi với 吗; chủ ngữ là đại từ nghi vấn thì 到底 đặt trước chủ ngữ.', say: '你到底怎么打算的呀' },
    { title: '拿……来说', body: '拿 là giới từ, đưa ra sự vật/tình huống cần nói rõ: 就拿学汉语来说吧……', say: '就拿学汉语来说吧' },
    { title: '敢', body: 'Động từ năng nguyện đặt trước động từ, diễn tả tự tin làm việc gì: 敢说真话, 不敢再躺着看书.', say: '敢说真话的人' },
    { title: 'Văn hóa: 天外有天，人外有人', body: '"Trời ngoài có trời, người ngoài có người": luôn có người giỏi hơn mình, vì vậy cần bình tĩnh, không kiêu ngạo, dám thừa nhận điều chưa biết để được tôn trọng.', say: '天外有天，人外有人' },
  ],

  writeChars: ['博', '签', '证', '激', '记', '者', '郊', '礼'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa',
      items: [
        { q: '小夏毕业后计划做什么？顺利吗？为什么？', hint: '出国读博士；不太顺利，因为国外大学还没传真邀请信，下周就要办签证。' },
        { q: '根据课文，如果想出国留学可能需要准备哪些材料？', hint: '成绩证明、护照、报名表格、邀请信。' },
        { q: '王老板怎么介绍自己的成功经验？', hint: '用三块大小不同的西瓜做比喻，先吃最小的，这样最后能吃得比别人多。' },
        { q: '小林放假后本来有什么打算？他可能因为什么事情改变计划？', hint: '本来打算去郊区住一个月；因为外地朋友要来旅游，让他当导游。' },
        { q: '小李和小林对“拒绝别人”有哪些不同的理解？', hint: '小李认为拒绝正说明对朋友负责；小林担心拒绝会让朋友误会和伤心。' },
        { q: '对于“有什么事情明天再说”这句话，你认为正确吗？为什么？', hint: '不对，会浪费时间，什么事情都做不成，还得不到别人的同情。' },
        { q: '根据课文，学汉语应该注意哪些方面？', hint: '课前预习找重点；上课认真听不马虎；课后复习。' },
        { q: '怎么理解“天外有天，人外有人”这句话？', hint: '世界很大，总有人在某方面比你更厉害，所以不要骄傲，要冷静，多向别人学习。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: bạn có từ chối khi gặp các tình huống sau không? Vì sao?', hint: '好朋友生病向你借钱；刚得到读博士机会同时又通过面试；父母来看你但你想出国旅行；同学没复习希望你考试时帮助他。' },
      ],
    },
  ],

  sentences: [
    { parts: ['这', '可', '是', '个', '大', '问题', '我', '也', '不', '太', '清楚'], pinyin: 'Zhè kě shì ge dà wèntí, wǒ yě bú tài qīngchu.', vi: 'Đây là vấn đề lớn đấy, tôi cũng không rõ lắm.' },
    { parts: ['你', '到底', '怎么', '打算', '的', '呀'], pinyin: 'Nǐ dàodǐ zěnme dǎsuàn de ya?', vi: 'Rốt cuộc bạn tính thế nào?' },
    { parts: ['听', '完', '我', '的', '回答', '恐怕', '你', '已经', '知道', '我', '的', '答案', '了'], pinyin: 'Tīngwán wǒ de huídá, kǒngpà nǐ yǐjīng zhīdào wǒ de dá\'àn le.', vi: 'Nghe xong câu trả lời chắc anh đã biết đáp án của tôi.' },
    { parts: ['不要', '什么', '事情', '都', '推', '到', '明天'], pinyin: 'Búyào shénme shìqing dōu tuīdào míngtiān.', vi: 'Đừng đẩy việc gì cũng sang ngày mai.' },
    { parts: ['天外', '有', '天', '人外', '有', '人'], pinyin: 'Tiān wài yǒu tiān, rén wài yǒu rén.', vi: 'Trời ngoài có trời, người ngoài có người.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 同情 · B 参观 · C 输 · D 郊区 · E 原谅. Gõ chữ cái A–E.',
      items: [
        { prompt: '虽然得到别人的（ ）很容易，但要重新让别人再相信你却很难。', answer: 'E', gloss: '原谅' }, { prompt: '爱批评人或者没有（ ）心的人是最不受欢迎的，这样的人即使很成功，朋友也很少。', answer: 'A', gloss: '同情' },
        { prompt: '各位朋友大家好！欢迎来到美丽的海南，这几天就由我带着大家（ ）。', answer: 'B', gloss: '参观' }, { prompt: '现在城市里越来越多的人喜欢到（ ）过周末。他们想找一个空气新鲜、安静的地方好好放松一下。', answer: 'D', gloss: '郊区' },
        { prompt: '生活的关键就是：只要你努力做了，不管是（ ）是赢，都一样精彩。', answer: 'C', gloss: '输' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 报名 · B 预习 · C 尊重 · D 推 · E 号码. Gõ chữ cái A–E.',
      items: [
        { prompt: '你们这个月空调卖得怎么样？ 不错，我们现在（ ）出了“以旧换新”的活动，吸引了不少顾客。', answer: 'D', gloss: '推' }, { prompt: '他什么时候能和我玩儿？ 等他（ ）完课文再跟你玩儿，奶奶先陪你做游戏吧。', answer: 'B', gloss: '预习' },
        { prompt: '我考虑了很久，还是决定离开现在的公司。 既然这样，那我们（ ）你的选择。', answer: 'C', gloss: '尊重' }, { prompt: '我记得上次关教授把他的手机（ ）给我了，可是不知道写哪儿了。 你当时好像写在本子上了，你看看上面有没有。', answer: 'E', gloss: '号码' },
        { prompt: '我想（ ）参加一万米长跑比赛，你参加不参加？ 恐怕不行，我下星期要考试了。', answer: 'A', gloss: '报名' },
      ],
    },
    {
      title: 'Giáo trình 比一比 · 恐怕 / 怕 (gõ từ)',
      hint: 'Gõ 恐怕 hoặc 怕 theo đáp án sách.',
      items: [
        { prompt: '如果你们今晚还想看节目的话，最好现在就出发，再晚了（ ）就没座位了。', answer: '恐怕', gloss: '恐怕' },
        { prompt: '我本来想放假就走，但（ ）现在走不了，老师让我翻译几篇文章。', answer: '恐怕', gloss: '恐怕' },
        { prompt: '遇到任何困难都不要（ ），只要你努力，成功就离你越来越近。', answer: '怕', gloss: '怕' },
      ],
    },
    {
      title: 'Giáo trình 扩展 · 重 (gõ từ)',
      hint: 'Gõ 严重, 重点, 重视 hoặc 尊重.',
      items: [
        { prompt: '我们的车出了点儿问题，但并不是特别（ ），很快就能解决，所以请大家放心，我们还是按照原计划出发。', answer: '严重', gloss: '严重' },
        { prompt: '讲话应先讲（ ），这样才能使别人更快地了解你想说的意思。', answer: '重点', gloss: '重点' },
        { prompt: '有些问题虽然看起来很小，但是如果没有引起（ ），很可能会发展成大麻烦。', answer: '重视', gloss: '重视' },
        { prompt: '他这些年做生意赚了不少钱，还拿出很大一部分去帮助那些经济有困难的人，所以获得了大家的（ ）。', answer: '尊重', gloss: '尊重' },
      ],
    },
  ],
}
