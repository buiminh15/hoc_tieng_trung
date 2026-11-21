import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 4 (Hạ), Bài 17: 人与自然 (sách trang 94–106).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách, dịch hội thoại do app tự thêm.
 * Nghe: 17-1…17-5. Bài tập: 比一比/练习 2/扩展, đáp án theo "HSK4-2-BH" trang 7–8.
 */

const A = '/audio/hsk-std4/'

export const hskStd4Lesson17: Lesson = {
  id: 17,
  title: 'Con người và thiên nhiên',
  hanzi: '人与自然',
  pinyin: 'Rén yǔ zìrán',
  vi: 'Con người và thiên nhiên',
  intro: 'Nói về thời tiết, động vật, thực vật và đại dương. Học 倒, 干, 趟 (so với 次), 为了……而……, 仍然.',

  dialogue: [
    { who: 'A', name: '小夏', hanzi: '最近天气越来越凉快了，风一刮，草地上就会有一层厚厚的黄叶，看来秋天已经到了。', pinyin: 'Zuìjìn tiānqì yuè lái yuè liángkuai le, fēng yí guā, cǎodì shang jiù huì yǒu yì céng hòuhòu de huángyè, kànlái qiūtiān yǐjīng dào le.', vi: 'Dạo này trời ngày càng mát, gió thổi là trên bãi cỏ có một lớp lá vàng dày, xem ra mùa thu đã đến.', scene: 'Bài 1 · Tiểu Hạ và Anna nói chuyện thời tiết' },
    { who: 'B', name: '安娜', hanzi: '这几天香山特别热闹，随着气温的降低，那里许多植物的叶子都由绿变黄或者变红，吸引了很多游客参观，咱们今天也去看看吧。', pinyin: 'Zhè jǐ tiān Xiāng Shān tèbié rènao, suízhe qìwēn de jiàngdī, nàli xǔduō zhíwù de yèzi dōu yóu lǜ biàn huáng huòzhě biàn hóng, xīyǐnle hěn duō yóukè cānguān, zánmen jīntiān yě qù kànkan ba.', vi: 'Mấy hôm nay Hương Sơn rất náo nhiệt, theo nhiệt độ giảm, lá nhiều cây ở đó chuyển từ xanh sang vàng hoặc đỏ, thu hút nhiều du khách, hôm nay mình cũng đi xem nhé.' },
    { who: 'A', name: '小夏', hanzi: '你看天上的云，今天肯定有大雨。再说，香山上看红叶的人太多了。咱们改天去长城吧，广播里说那里也有不少专门看红叶的好地方。', pinyin: 'Nǐ kàn tiānshang de yún, jīntiān kěndìng yǒu dà yǔ. Zàishuō, Xiāng Shān shang kàn hóngyè de rén tài duō le. Zánmen gǎitiān qù Chángchéng ba, guǎngbō li shuō nàli yě yǒu bù shǎo zhuānmén kàn hóngyè de hǎo dìfang.', vi: 'Bạn nhìn mây trên trời, hôm nay chắc chắn mưa lớn. Hơn nữa Hương Sơn quá đông người ngắm lá đỏ. Hôm khác mình đi Trường Thành, radio nói ở đó cũng có nhiều chỗ ngắm lá đỏ.' },
    { who: 'B', name: '安娜', hanzi: '真可惜，我还想多照点儿香山的照片呢。去长城倒是一个好主意，那我们明天去吧。', pinyin: 'Zhēn kěxī, wǒ hái xiǎng duō zhào diǎnr Xiāng Shān de zhàopiàn ne. Qù Chángchéng dào shì yí ge hǎo zhǔyi, nà wǒmen míngtiān qù ba.', vi: 'Tiếc thật, tôi còn muốn chụp nhiều ảnh Hương Sơn. Đi Trường Thành thì lại là ý hay, vậy mai mình đi.' },
    { who: 'A', name: '小夏', hanzi: '明天恐怕也不行，明天是我爸的生日。', pinyin: 'Míngtiān kǒngpà yě bù xíng, míngtiān shì wǒ bà de shēngrì.', vi: 'Mai e cũng không được, mai là sinh nhật bố tôi.' },
    { who: 'B', name: '安娜', hanzi: '没关系，那我们再约时间。', pinyin: 'Méi guānxi, nà wǒmen zài yuē shíjiān.', vi: 'Không sao, vậy mình hẹn lại.' },
    { who: 'A', name: '小林', hanzi: '你的这只大黑狗毛真漂亮，而且这么聪明，每次见了都想抱一抱它。', pinyin: 'Nǐ de zhè zhī dà hēi gǒu máo zhēn piàoliang, érqiě zhème cōngming, měi cì jiànle dōu xiǎng bào yi bào tā.', vi: 'Con chó đen to này của bạn lông đẹp thật, lại thông minh, lần nào thấy cũng muốn ôm nó.', scene: 'Bài 2 · Tiểu Lâm và Tiểu Lý nói về con chó của Tiểu Lý' },
    { who: 'B', name: '小李', hanzi: '狗是很聪明的动物，只要稍微花点儿时间教教它，它就能学会很多东西。', pinyin: 'Gǒu shì hěn cōngming de dòngwù, zhǐyào shāowēi huā diǎnr shíjiān jiāojiao tā, tā jiù néng xuéhuì hěn duō dōngxi.', vi: 'Chó là động vật rất thông minh, chỉ cần bỏ chút thời gian dạy là nó học được nhiều thứ.' },
    { who: 'A', name: '小林', hanzi: '听你这么一说，我现在也想养一只狗了。每次你让它干什么，它就像能听懂你的话一样去做。你教它是不是用了什么特别的方法？', pinyin: 'Tīng nǐ zhème yì shuō, wǒ xiànzài yě xiǎng yǎng yì zhī gǒu le. Měi cì nǐ ràng tā gàn shénme, tā jiù xiàng néng tīngdǒng nǐ de huà yíyàng qù zuò. Nǐ jiāo tā shì bu shì yòngle shénme tèbié de fāngfǎ?', vi: 'Nghe bạn nói vậy giờ tôi cũng muốn nuôi một con. Lần nào bạn bảo nó làm gì nó cũng làm như hiểu lời bạn. Bạn dạy nó có dùng cách đặc biệt gì không?' },
    { who: 'B', name: '小李', hanzi: '要让它完成一些任务，只教一次是不够的，应该耐心地一遍一遍地教给它，使它熟悉，然后它就会严格按照你的要求做了。', pinyin: 'Yào ràng tā wánchéng yìxiē rènwu, zhǐ jiāo yí cì shì bú gòu de, yīnggāi nàixīn de yí biàn yí biàn de jiāo gěi tā, shǐ tā shúxī, ránhòu tā jiù huì yángé ànzhào nǐ de yāoqiú zuò le.', vi: 'Muốn nó hoàn thành nhiệm vụ, chỉ dạy một lần là không đủ, phải kiên nhẫn dạy từng lần để nó quen, rồi nó sẽ làm nghiêm theo yêu cầu của bạn.' },
    { who: 'A', name: '小林', hanzi: '看来没有想的那么容易。', pinyin: 'Kànlái méiyǒu xiǎng de nàme róngyì.', vi: 'Xem ra không dễ như tôi nghĩ.' },
    { who: 'B', name: '小李', hanzi: '狗是我们的好朋友，它能听懂人的话，明白人的心情。在你心里难受的时候，它会一直陪着你。', pinyin: 'Gǒu shì wǒmen de hǎo péngyou, tā néng tīngdǒng rén de huà, míngbai rén de xīnqíng. Zài nǐ xīnli nánshòu de shíhou, tā huì yìzhí péizhe nǐ.', vi: 'Chó là bạn tốt của chúng ta, nó nghe hiểu lời người, hiểu tâm trạng người. Lúc bạn buồn trong lòng, nó luôn ở bên bạn.' },
    { who: 'A', name: '马克', hanzi: '上个月我去了趟北京动物园，那里约有500种动物，听导游说北京动物园是亚洲最大的动物园之一。', pinyin: 'Shàng ge yuè wǒ qùle tàng Běijīng Dòngwùyuán, nàli yuē yǒu wǔbǎi zhǒng dòngwù, tīng dǎoyóu shuō Běijīng Dòngwùyuán shì Yàzhōu zuì dà de dòngwùyuán zhī yī.', vi: 'Tháng trước tôi đi Sở thú Bắc Kinh, ở đó có khoảng 500 loài, nghe hướng dẫn viên nói đây là một trong những sở thú lớn nhất châu Á.', scene: 'Bài 3 · Mark và Tiểu Hạ nói về động vật' },
    { who: 'B', name: '小夏', hanzi: '去年放暑假的时候，我也去过一次，我在那儿看了马、熊猫、老虎等动物。我特别喜欢熊猫，可惜它们当时大多在睡觉。', pinyin: 'Qùnián fàng shǔjià de shíhou, wǒ yě qùguo yí cì, wǒ zài nàr kànle mǎ, xióngmāo, lǎohǔ děng dòngwù. Wǒ tèbié xǐhuan xióngmāo, kěxī tāmen dāngshí dàduō zài shuì jiào.', vi: 'Hè năm ngoái tôi cũng đi một lần, xem ngựa, gấu trúc, hổ… Tôi đặc biệt thích gấu trúc, tiếc lúc đó chúng phần lớn đang ngủ.' },
    { who: 'A', name: '马克', hanzi: '我去的那天正赶上六一儿童节，许多父母带着孩子去动物园。入口处排队的人很多，动物园里热闹极了。熊猫们也变得特别活泼，我还给它们照了不少照片呢。', pinyin: 'Wǒ qù de nà tiān zhèng gǎnshang Liù-Yī Értóngjié, xǔduō fùmǔ dàizhe háizi qù dòngwùyuán. Rùkǒu chù pái duì de rén hěn duō, dòngwùyuán li rènao jí le. Xióngmāomen yě biàn de tèbié huópō, wǒ hái gěi tāmen zhàole bù shǎo zhàopiàn ne.', vi: 'Hôm tôi đi đúng Quốc tế Thiếu nhi 1/6, nhiều cha mẹ dẫn con đến sở thú. Cổng vào xếp hàng đông, trong sở thú náo nhiệt cực kỳ. Gấu trúc cũng trở nên rất hoạt bát, tôi chụp cho chúng khá nhiều ảnh.' },
    { who: 'B', name: '小夏', hanzi: '大熊猫身子胖胖的，样子可爱极了。', pinyin: 'Dà xióngmāo shēnzi pàngpàng de, yàngzi kě\'ài jí le.', vi: 'Gấu trúc lớn thân mập mạp, trông đáng yêu cực kỳ.' },
    { who: 'A', name: '马克', hanzi: '不过，它们数量不多，现在全世界一共才有一千多只吧。', pinyin: 'Búguò, tāmen shùliàng bù duō, xiànzài quán shìjiè yígòng cái yǒu yì qiān duō zhī ba.', vi: 'Nhưng số lượng không nhiều, giờ cả thế giới chỉ có hơn nghìn con.' },
    { who: 'B', name: '小夏', hanzi: '以前只有中国有大熊猫，为了表示友好，从1957年开始，中国把大熊猫作为礼物送给其他一些国家。现在，很多国家的人们在本国都能看到大熊猫了。', pinyin: 'Yǐqián zhǐyǒu Zhōngguó yǒu dà xióngmāo, wèile biǎoshì yǒuhǎo, cóng yī jiǔ wǔ qī nián kāishǐ, Zhōngguó bǎ dà xióngmāo zuòwéi lǐwù sòng gěi qítā yìxiē guójiā. Xiànzài, hěn duō guójiā de rénmen zài běnguó dōu néng kàndào dà xióngmāo le.', vi: 'Trước đây chỉ Trung Quốc có gấu trúc, để thể hiện hữu nghị, từ năm 1957 Trung Quốc tặng gấu trúc cho một số nước. Nay người dân nhiều nước có thể xem gấu trúc ngay trong nước.' },
    { who: 'A', name: '短文', hanzi: '不仅社会上的人与人之间有竞争，森林里的各种植物之间也有竞争，这一点儿也不奇怪。植物会为了阳光、空气和水而竞争。一些高大的植物往往能获得更多的阳光、空气和水，而剩下的一些比较低矮的植物就只能长在这些高大植物的下面。由于气候条件不同，世界各地植物叶子的样子也很不相同。在暖和、水分比较多的地方，叶子往往长得又大又厚；在阳光特别厉害、水分少的地方，叶子就会长得又细又长。', pinyin: 'Bùjǐn shèhuì shang de rén yǔ rén zhījiān yǒu jìngzhēng, sēnlín li de gè zhǒng zhíwù zhījiān yě yǒu jìngzhēng, zhè yìdiǎnr yě bù qíguài. Zhíwù huì wèile yángguāng, kōngqì hé shuǐ ér jìngzhēng. Yìxiē gāodà de zhíwù wǎngwǎng néng huòdé gèng duō de yángguāng, kōngqì hé shuǐ, ér shèngxià de yìxiē bǐjiào dī\'ǎi de zhíwù jiù zhǐ néng zhǎng zài zhèxiē gāodà zhíwù de xiàmiàn. Yóuyú qìhòu tiáojiàn bù tóng, shìjiè gèdì zhíwù yèzi de yàngzi yě hěn bù xiāngtóng. Zài nuǎnhuo, shuǐfèn bǐjiào duō de dìfang, yèzi wǎngwǎng zhǎng de yòu dà yòu hòu; zài yángguāng tèbié lìhai, shuǐfèn shǎo de dìfang, yèzi jiù huì zhǎng de yòu xì yòu cháng.', vi: 'Không chỉ giữa người với người trong xã hội có cạnh tranh, giữa các loài thực vật trong rừng cũng có, điều này không lạ. Thực vật cạnh tranh vì ánh sáng, không khí và nước. Cây cao lớn thường nhận được nhiều hơn, còn cây thấp bé còn lại chỉ mọc dưới tán cây cao. Do điều kiện khí hậu khác nhau, hình dạng lá khắp nơi cũng khác nhau. Nơi ấm, nhiều nước lá thường to và dày; nơi nắng gắt, ít nước lá mọc nhỏ và dài.', scene: 'Bài 4 · Cạnh tranh giữa thực vật' },
    { who: 'A', name: '短文', hanzi: '地球上大约71%的地方是蓝色的海洋，在美丽的海底世界里，生活着各种各样的植物和动物。我们小时候都听过美人鱼的故事，其实真正的海底世界比故事里写的更美。科学研究发现，海洋底部看上去非常安静，然而却不是一点儿声音也没有，海底的动物们一直在“说话”，只不过人的耳朵是听不到的。另外，就算在几公里深的海底也仍然能看到东西，许多鱼会发出各种颜色的亮光，像一个个排列起来的灯，美极了，就像在梦里一样。', pinyin: 'Dìqiú shang dàyuē bǎi fēn zhī qīshíyī de dìfang shì lánsè de hǎiyáng, zài měilì de hǎidǐ shìjiè li, shēnghuózhe gè zhǒng gè yàng de zhíwù hé dòngwù. Wǒmen xiǎo shíhou dōu tīngguo Měirényú de gùshi, qíshí zhēnzhèng de hǎidǐ shìjiè bǐ gùshi li xiě de gèng měi. Kēxué yánjiū fāxiàn, hǎiyáng dǐbù kàn shangqu fēicháng ānjìng, rán\'ér què bú shì yìdiǎnr shēngyīn yě méiyǒu, hǎidǐ de dòngwùmen yìzhí zài "shuō huà", zhǐ bùguò rén de ěrduo shì tīng bu dào de. Lìngwài, jiùsuàn zài jǐ gōnglǐ shēn de hǎidǐ yě réngrán néng kàndào dōngxi, xǔduō yú huì fāchū gè zhǒng yánsè de liàngguāng, xiàng yí gège páiliè qilai de dēng, měi jí le, jiù xiàng zài mèng li yíyàng.', vi: 'Khoảng 71% Trái Đất là đại dương xanh, trong thế giới đáy biển tuyệt đẹp có đủ loại động thực vật sinh sống. Hồi nhỏ ai cũng nghe chuyện nàng tiên cá, thật ra thế giới đáy biển thật còn đẹp hơn trong truyện. Nghiên cứu khoa học thấy đáy đại dương trông rất yên tĩnh nhưng không phải không có tiếng, động vật đáy biển luôn "nói chuyện", chỉ là tai người không nghe được. Ngoài ra, dù ở đáy biển sâu mấy km vẫn thấy được đồ vật, nhiều loài cá phát ra ánh sáng đủ màu như những ngọn đèn xếp hàng, đẹp cực kỳ, như trong mơ.', scene: 'Bài 5 · Thế giới đáy biển' },
  ],
  dialogueClips: [
    { label: '17-1 · Tiểu Hạ và Anna', src: A + 'l17-1.mp3' },
    { label: '17-2 · Tiểu Lâm và Tiểu Lý', src: A + 'l17-2.mp3' },
    { label: '17-3 · Mark và Tiểu Hạ', src: A + 'l17-3.mp3' },
    { label: '17-4 · Cạnh tranh giữa thực vật', src: A + 'l17-4.mp3' },
    { label: '17-5 · Thế giới đáy biển', src: A + 'l17-5.mp3' },
  ],
  dialogueTip: '<b>倒</b>: rót; trái dự đoán / nhượng bộ (倒是). <b>干</b> (gàn): làm. <b>趟</b>: lượt đi–về (一趟); <b>次</b>: lần (chung). <b>为了……而……</b>: vì… mà…. <b>仍然</b>: vẫn.',
  slowSay: '人与自然',

  vocab: [
    { hanzi: '凉快', pinyin: 'liángkuai', pos: 'tính từ', meaning: 'mát mẻ', han_viet: 'lương khoái' },
    { hanzi: '热闹', pinyin: 'rènao', pos: 'tính từ', meaning: 'náo nhiệt', han_viet: 'nhiệt náo' },
    { hanzi: '云', pinyin: 'yún', pos: 'danh từ', meaning: 'mây', han_viet: 'vân' },
    { hanzi: '广播', pinyin: 'guǎngbō', pos: 'danh từ', meaning: 'chương trình phát thanh', han_viet: 'quảng bá' },
    { hanzi: '照', pinyin: 'zhào', pos: 'động từ', meaning: 'chụp (ảnh)', han_viet: 'chiếu' },
    { hanzi: '倒', pinyin: 'dào', pos: 'phó từ', meaning: 'nhưng, lại (trái dự đoán)', han_viet: 'đảo' },
    { hanzi: '毛', pinyin: 'máo', pos: 'danh từ', meaning: 'lông', han_viet: 'mao' },
    { hanzi: '抱', pinyin: 'bào', pos: 'động từ', meaning: 'bế, bồng, ôm', han_viet: 'bão' },
    { hanzi: '干', pinyin: 'gàn', pos: 'động từ', meaning: 'làm', han_viet: 'cán' },
    { hanzi: '严格', pinyin: 'yángé', pos: 'tính từ', meaning: 'nghiêm khắc, nghiêm ngặt', han_viet: 'nghiêm cách' },
    { hanzi: '难受', pinyin: 'nánshòu', pos: 'tính từ', meaning: 'bực bội, buồn rầu', han_viet: 'nan thụ' },
    { hanzi: '趟', pinyin: 'tàng', pos: 'lượng từ', meaning: 'lần, chuyến (đi lại)', han_viet: 'thang' },
    { hanzi: '放暑假', pinyin: 'fàng shǔjià', pos: 'cụm', meaning: 'nghỉ hè', han_viet: 'phóng thử giả' },
    { hanzi: '老虎', pinyin: 'lǎohǔ', pos: 'danh từ', meaning: 'hổ, cọp', han_viet: 'lão hổ' },
    { hanzi: '入口', pinyin: 'rùkǒu', pos: 'danh từ', meaning: 'cổng vào', han_viet: 'nhập khẩu' },
    { hanzi: '排队', pinyin: 'pái duì', pos: 'động từ', meaning: 'xếp hàng', han_viet: 'bài đội' },
    { hanzi: '活泼', pinyin: 'huópō', pos: 'tính từ', meaning: 'hoạt bát, nhanh nhẹn', han_viet: 'hoạt bát' },
    { hanzi: '社会', pinyin: 'shèhuì', pos: 'danh từ', meaning: 'xã hội', han_viet: 'xã hội' },
    { hanzi: '竞争', pinyin: 'jìngzhēng', pos: 'động từ', meaning: 'cạnh tranh', han_viet: 'cạnh tranh' },
    { hanzi: '森林', pinyin: 'sēnlín', pos: 'danh từ', meaning: 'rừng rậm', han_viet: 'sâm lâm' },
    { hanzi: '剩', pinyin: 'shèng', pos: 'động từ', meaning: 'còn lại', han_viet: 'thặng' },
    { hanzi: '暖和', pinyin: 'nuǎnhuo', pos: 'tính từ', meaning: 'ấm áp', han_viet: 'noãn hòa' },
    { hanzi: '海洋', pinyin: 'hǎiyáng', pos: 'danh từ', meaning: 'biển, đại dương', han_viet: 'hải dương' },
    { hanzi: '底', pinyin: 'dǐ', pos: 'danh từ', meaning: 'đáy', han_viet: 'để' },
    { hanzi: '公里', pinyin: 'gōnglǐ', pos: 'lượng từ', meaning: 'ki-lô-mét', han_viet: 'công lý' },
    { hanzi: '仍然', pinyin: 'réngrán', pos: 'phó từ', meaning: 'vẫn', han_viet: 'nhưng nhiên' },
    { hanzi: '排列', pinyin: 'páiliè', pos: 'động từ', meaning: 'sắp xếp (theo thứ tự)', han_viet: 'bài liệt' },
    { hanzi: '梦', pinyin: 'mèng', pos: 'danh từ', meaning: 'giấc mơ', han_viet: 'mộng' },
  ],

  sections: [
    {
      kind: 'examples', label: '倒', title: '倒 (rót; nhưng/lại)',
      intro: 'Động từ 倒 (dào): nghiêng vật chứa để đổ/rót ra. Phó từ 倒: trái với dự đoán, hàm ý trách móc hoặc nhượng bộ; đôi khi nói 倒是.',
      groups: [{ label: 'Ví dụ', items: [['麻烦你给我倒杯咖啡吧，困死我了。', 'Máfan nǐ gěi wǒ dào bēi kāfēi ba, kùn sǐ wǒ le.', 'Phiền bạn rót giúp tôi cốc cà phê, buồn ngủ chết đi được.'], ['我以为坐出租车会快些，没想到倒比骑车还慢。', 'Wǒ yǐwéi zuò chūzūchē huì kuài xiē, méi xiǎngdào dào bǐ qí chē hái màn.', 'Tôi tưởng đi taxi nhanh hơn, không ngờ lại chậm hơn đạp xe.'], ['你说得倒是容易，做起来可就难了！', 'Nǐ shuō de dào shì róngyì, zuò qilai kě jiù nán le!', 'Bạn nói thì dễ, làm mới khó!'], ['去长城倒是一个好主意，就是太远了。', 'Qù Chángchéng dào shì yí ge hǎo zhǔyi, jiù shì tài yuǎn le.', 'Đi Trường Thành thì là ý hay, chỉ là xa quá.']] }],
    },
    {
      kind: 'examples', label: '干', title: '干 (gàn: làm)',
      intro: 'Động từ 干 (gàn) = làm (việc), dấn thân vào công việc, hoạt động. Đọc gān thì là tính từ "khô"; 干(儿) (gānr) là thực phẩm khô.',
      groups: [{ label: 'Ví dụ', items: [['每次你让它干什么，它就像能听懂你的话一样去做。', 'Měi cì nǐ ràng tā gàn shénme, tā jiù xiàng néng tīngdǒng nǐ de huà yíyàng qù zuò.', 'Lần nào bạn bảo nó làm gì nó cũng làm như hiểu lời bạn.'], ['干工作的时候一定要认真、仔细，要注意到计划上的每一个地方，否则很容易出问题。', 'Gàn gōngzuò de shíhou yídìng yào rènzhēn, zǐxì, yào zhùyì dào jìhuà shang de měi yí ge dìfang, fǒuzé hěn róngyì chū wèntí.', 'Làm việc phải nghiêm túc, kỹ lưỡng, chú ý từng chỗ trong kế hoạch, nếu không dễ có vấn đề.'], ['先把头发擦干，别感冒了。', 'Xiān bǎ tóufa cāgān, bié gǎnmào le.', 'Lau khô tóc trước, đừng để cảm.']] }],
    },
    {
      kind: 'examples', label: '趟 – 次', title: '趟 (lượt đi–về) và so sánh với 次',
      intro: '趟: lượng từ chỉ số lần đi và về. Giống 次: đều chỉ số lần xảy ra của hành động, dùng với động từ đi lại (来, 去, 走, 跑, 接, 送) và thường thay nhau được. Khác: 趟 nhấn mạnh "một đi một về", chỉ dùng với hành động đi lại; 次 dùng cả cho 问/说/看/讨论…; 趟 còn dùng cho chuyến xe buýt/tàu theo lịch (tương đương 辆/列), 次 không.',
      groups: [{ label: 'Ví dụ', items: [['上个月我去了趟北京动物园，那里约有500种动物。', 'Shàng ge yuè wǒ qùle tàng Běijīng Dòngwùyuán, nàli yuē yǒu wǔbǎi zhǒng dòngwù.', 'Tháng trước tôi đi Sở thú Bắc Kinh một chuyến, ở đó có khoảng 500 loài.'], ['回来的路上我顺便去了趟银行。', 'Huílái de lùshang wǒ shùnbiàn qùle tàng yínháng.', 'Trên đường về tôi tiện ghé ngân hàng.'], ['小时候，爷爷差不多每个月都带我去看一次京剧。', 'Xiǎo shíhou, yéye chàbuduō měi ge yuè dōu dài wǒ qù kàn yí cì jīngjù.', 'Hồi nhỏ, ông gần như mỗi tháng đưa tôi đi xem Kinh kịch một lần.'], ['附近有好几趟公共汽车都能到我工作的公司。', 'Fùjìn yǒu hǎo jǐ tàng gōnggòng qìchē dōu néng dào wǒ gōngzuò de gōngsī.', 'Gần đây có mấy tuyến xe buýt đều đến được công ty tôi.']] }],
    },
    {
      kind: 'examples', label: '为了…而… · 仍然', title: '为了……而…… và 仍然',
      intro: '为了……而……: vế trước nêu mục đích của hành động ở vế sau; sau 为了 là từ hoặc cụm từ. 仍然: phó từ, chỉ tình huống như cũ, không thay đổi.',
      groups: [
        { label: '为了……而……', items: [['植物会为了阳光、空气和水而竞争。', 'Zhíwù huì wèile yángguāng, kōngqì hé shuǐ ér jìngzhēng.', 'Thực vật cạnh tranh vì ánh sáng, không khí và nước.'], ['北风与南风为了比谁更有能力而吵了起来。', 'Běifēng yǔ nánfēng wèile bǐ shéi gèng yǒu nénglì ér chǎole qilai.', 'Gió Bắc và gió Nam cãi nhau để xem ai có năng lực hơn.'], ['不少动物和植物为了保护自己而改变身体的颜色或样子。', 'Bù shǎo dòngwù hé zhíwù wèile bǎohù zìjǐ ér gǎibiàn shēntǐ de yánsè huò yàngzi.', 'Nhiều động thực vật đổi màu sắc hoặc hình dạng cơ thể để tự bảo vệ.']] },
        { label: '仍然', items: [['就算在几公里深的海底也仍然能看到东西。', 'Jiùsuàn zài jǐ gōnglǐ shēn de hǎidǐ yě réngrán néng kàndào dōngxi.', 'Dù ở đáy biển sâu mấy km vẫn thấy được đồ vật.'], ['人比动物聪明，但动物仍然有很多值得人学习的地方。', 'Rén bǐ dòngwù cōngming, dàn dòngwù réngrán yǒu hěn duō zhídé rén xuéxí de dìfang.', 'Người thông minh hơn động vật, nhưng động vật vẫn có nhiều điều đáng để người học.'], ['足球决赛时，如果90分钟后仍然是0比0，可以进行加时赛来决定输赢。', 'Zúqiú juésài shí, rúguǒ jiǔshí fēnzhōng hòu réngrán shì líng bǐ líng, kěyǐ jìnxíng jiāshísài lái juédìng shūyíng.', 'Chung kết bóng đá, nếu sau 90 phút vẫn 0–0 thì đá hiệp phụ quyết định.']] },
      ],
    },
    {
      kind: 'examples', label: 'Từ cùng chữ: 然', title: 'Những từ có chữ giống nhau: 然',
      intro: '既然, 竟然, 仍然, 突然.',
      groups: [{ label: 'Ví dụ', items: [['既然知道是你错了，那你就该主动向他道歉。', 'Jìrán zhīdào shì nǐ cuò le, nà nǐ jiù gāi zhǔdòng xiàng tā dào qiàn.', 'Đã biết là bạn sai thì nên chủ động xin lỗi anh ấy.'], ['让人吃惊的是，这本小说的作者竟然是个十几岁的中学生。', 'Ràng rén chī jīng de shì, zhè běn xiǎoshuō de zuòzhě jìngrán shì ge shí jǐ suì de zhōngxuéshēng.', 'Đáng ngạc nhiên là tác giả cuốn tiểu thuyết này lại là học sinh mười mấy tuổi.'], ['那天的事情太突然了，李先生也没想到会弄成这个样子。', 'Nà tiān de shìqing tài tūrán le, Lǐ xiānsheng yě méi xiǎngdào huì nòngchéng zhège yàngzi.', 'Chuyện hôm đó quá đột ngột, ông Lý cũng không ngờ thành ra thế này.']] }],
    },
  ],

  notes: [
    { title: '倒', body: 'Động từ dào: rót, đổ. Phó từ dào: trái dự đoán / trách móc / nhượng bộ (倒是): 去长城倒是一个好主意，就是太远了。', say: '去长城倒是一个好主意' },
    { title: '干 (gàn)', body: 'Động từ "làm": 你让它干什么. Đọc gān: khô (擦干), 干(儿): thực phẩm khô.', say: '你让它干什么' },
    { title: '趟 và 次', body: '趟 nhấn mạnh một đi một về, dùng với động từ đi lại và cho chuyến xe theo lịch; 次 chung hơn, dùng cả với 问/说/看/讨论.', say: '上个月我去了趟北京动物园' },
    { title: '为了……而……', body: 'Vế trước nêu mục đích, vế sau là hành động: 植物会为了阳光、空气和水而竞争。', say: '植物会为了阳光、空气和水而竞争' },
    { title: '仍然', body: 'Phó từ chỉ tình huống như cũ: 就算在几公里深的海底也仍然能看到东西。', say: '海底也仍然能看到东西' },
    { title: 'Văn hóa: 大熊猫', body: 'Gấu trúc lớn hiện toàn thế giới chỉ có hơn nghìn con; từ năm 1957 Trung Quốc bắt đầu tặng gấu trúc làm quà hữu nghị cho một số nước.', say: '大熊猫' },
  ],

  writeChars: ['凉', '闹', '云', '广', '播', '抱', '趟', '竞'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa',
      items: [
        { q: '现在是什么季节？天气怎么样？', hint: '秋天，天气越来越凉快。' },
        { q: '安娜打算做什么？小夏为什么不同意？有什么建议？', hint: '去香山看红叶；人太多、可能有大雨；建议改天去长城。' },
        { q: '小林为什么喜欢小李的狗？教狗完成任务可以用什么方法？', hint: '狗聪明漂亮；耐心地一遍一遍教，使它熟悉。' },
        { q: '马克什么时候去的北京动物园？', hint: '上个月，正好是六一儿童节。' },
        { q: '植物之间会竞争吗？为什么世界各地植物叶子的样子不同？', hint: '会，为了阳光、空气和水而竞争；气候条件不同，暖和水多处叶子大厚，阳光强水少处叶子细长。' },
        { q: '海洋占地球多大比例？科学研究发现海底有什么？', hint: '约71%；动物们一直在“说话”人听不到，鱼会发出各种颜色的亮光。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: nói về con vật bạn thích nhất', hint: '你最喜欢什么动物？它的样子、特点？你喜欢它的原因？' },
      ],
    },
  ],

  sentences: [
    { parts: ['去', '长城', '倒', '是', '一个', '好', '主意'], pinyin: 'Qù Chángchéng dào shì yí ge hǎo zhǔyi.', vi: 'Đi Trường Thành thì là ý hay.' },
    { parts: ['上个月', '我', '去', '了', '趟', '北京', '动物园'], pinyin: 'Shàng ge yuè wǒ qùle tàng Běijīng Dòngwùyuán.', vi: 'Tháng trước tôi đi Sở thú Bắc Kinh một chuyến.' },
    { parts: ['植物', '会', '为了', '阳光', '空气', '和', '水', '而', '竞争'], pinyin: 'Zhíwù huì wèile yángguāng, kōngqì hé shuǐ ér jìngzhēng.', vi: 'Thực vật cạnh tranh vì ánh sáng, không khí và nước.' },
    { parts: ['海底', '也', '仍然', '能', '看到', '东西'], pinyin: 'Hǎidǐ yě réngrán néng kàndào dōngxi.', vi: 'Đáy biển vẫn thấy được đồ vật.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 广播 · B 尊重 · C 剩 · D 照 · E 底. Gõ chữ cái A–E.',
      items: [
        { prompt: '这本小说就（ ）十几页了，我想看看最后到底怎么样了。', answer: 'C', gloss: '剩' }, { prompt: '刚才听（ ）说明天可能会下大雨，足球比赛恐怕要推迟了。', answer: 'A', gloss: '广播' },
        { prompt: '您看这个沙发怎么样？我们年（ ）有活动，正在打折，比平时便宜了一千块。', answer: 'E', gloss: '底' }, { prompt: '不管男人还是女人，只要能在自己的工作中取得好的成绩，都应该赢得（ ）。', answer: 'B', gloss: '尊重' },
        { prompt: '很多自行车后面都有一个灯，虽然小，但用处却很大。每当后面汽车的灯光（ ）到它时，它就会反光，这样就能提醒司机前方有人。', answer: 'D', gloss: '照' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 难受 · B 暖和 · C 活泼 · D 凉快 · E 热闹. Gõ chữ cái A–E.',
      items: [
        { prompt: '下了雨，（ ）多了，前几天实在是太热了。 是啊，前两天晚上热得都睡不着，今天终于能睡个好觉了。', answer: 'D', gloss: '凉快' }, { prompt: '你经常参加学校举办的舞会吗？ 不，我从来没参加过，我不太喜欢（ ）。', answer: 'E', gloss: '热闹' },
        { prompt: '工作半天了，起来活动活动。 好，坐久了确实有些（ ）。', answer: 'A', gloss: '难受' }, { prompt: '小李，我给你介绍个女朋友吧，说说你有什么条件。 我，我喜欢（ ）可爱的女孩子。', answer: 'C', gloss: '活泼' },
        { prompt: '今天很（ ），外面一点儿也不冷，你不用穿这么多衣服。 好的，那我脱掉一件。', answer: 'B', gloss: '暖和' },
      ],
    },
    {
      title: 'Giáo trình 比一比 · 趟 / 次 (gõ từ)',
      hint: 'Gõ 趟 hoặc 次 theo đáp án sách.',
      items: [
        { prompt: '中午我给你打了好几（ ）电话，你怎么都不接呢？', answer: '次', gloss: '次' },
        { prompt: '他没赶上最后一（ ）公共汽车，只好坐出租车回家了。', answer: '趟', gloss: '趟' },
        { prompt: '西红柿鸡蛋汤的做法很简单，我保证你一（ ）就能学会。', answer: '次', gloss: '次' },
      ],
    },
    {
      title: 'Giáo trình 扩展 · 然 (gõ từ)',
      hint: 'Gõ 既然, 竟然, 仍然 hoặc 突然.',
      items: [
        { prompt: '真是没想到，四年的大学生活（ ）这么快就结束了！', answer: '竟然', gloss: '竟然' },
        { prompt: '刚才太危险了，那辆车怎么回事？ 不知道，（ ）加速，估计是新手，刚学会开车。', answer: '突然', gloss: '突然' },
        { prompt: '只要你不放弃努力，就（ ）有希望。你总会找到一条合适的路，通往成功的目的地。', answer: '仍然', gloss: '仍然' },
        { prompt: '有些事情过去了就是过去了，再也不能回头。（ ）不能重新来过，那么就把那些过去的事情放在心里，当成一种回忆。', answer: '既然', gloss: '既然' },
      ],
    },
  ],
}
