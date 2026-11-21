import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 5 (Thượng), Bài 4: 子路背米 (sách trang 38–45).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách; dịch bài khóa do app tự thêm.
 * Không có file nghe trong thư mục. Bài tập: 做一做/练习/扩展, đáp án theo "HSK5-BH1" trang 5–6.
 */

export const hskStd5Lesson4: Lesson = {
  id: 4,
  title: 'Tử Lộ vác gạo',
  hanzi: '子路背米',
  pinyin: 'Zǐlù bēi mǐ',
  vi: 'Tử Lộ vác gạo',
  intro: 'Câu chuyện hiếu thảo của Tử Lộ, học trò của Khổng Tử. Học 至今, 顶, ……得不行, 反而 và so sánh 满足 – 满意.',

  dialogue: [
    { who: 'A', name: '课文', hanzi: '从前，大概在距今两千五百多年前的春秋时期，有一个人叫子路，他是孔子最年长的学生。流传至今的“百里背米”讲的就是他孝敬父母的故事。', pinyin: 'Cóngqián, dàgài zài jù jīn liǎngqiān wǔbǎi duō nián qián de Chūnqiū shíqī, yǒu yí ge rén jiào Zǐlù, tā shì Kǒngzǐ zuì niánzhǎng de xuésheng. Liúchuán zhìjīn de "bǎi lǐ bēi mǐ" jiǎng de jiù shì tā xiàojìng fùmǔ de gùshi.', vi: 'Ngày xưa, khoảng hơn 2500 năm trước, thời Xuân Thu, có người tên Tử Lộ, là học trò lớn tuổi nhất của Khổng Tử. "Vác gạo trăm dặm" lưu truyền đến nay kể chính là chuyện anh hiếu kính cha mẹ.' },
    { who: 'A', name: '课文', hanzi: '子路的父母都是农民。由于连年的战争，家里生活非常困难。一天，子路从外面回来，听到父母在屋里说话：“活了大半辈子了，别说鱼肉，只要能饱饱地吃上一顿米饭，也就满足啦！”子路听了，心里觉得十分惭愧。他暗下决心：“一定要让父母吃上米饭，不能再委屈他们了！”', pinyin: 'Zǐlù de fùmǔ dōu shì nóngmín. Yóuyú liánnián de zhànzhēng, jiā li shēnghuó fēicháng kùnnan. Yì tiān, Zǐlù cóng wàimiàn huílai, tīngdào fùmǔ zài wū li shuō huà: "Huóle dà bàn bèizi le, bié shuō yú ròu, zhǐyào néng bǎobǎo de chīshàng yí dùn mǐfàn, yě jiù mǎnzú la!" Zǐlù tīngle, xīn li juéde shífēn cánkuì. Tā ànxià juéxīn: "Yídìng yào ràng fùmǔ chīshàng mǐfàn, bù néng zài wěiqu tāmen le!"', vi: 'Cha mẹ Tử Lộ đều là nông dân. Do chiến tranh liên miên, cuộc sống rất khó khăn. Một hôm Tử Lộ từ ngoài về nghe cha mẹ nói trong nhà: "Sống quá nửa đời rồi, đừng nói cá thịt, chỉ cần được ăn no một bữa cơm gạo cũng mãn nguyện rồi!" Tử Lộ nghe xong rất hổ thẹn. Anh âm thầm quyết tâm: "Nhất định phải cho cha mẹ ăn cơm gạo, không thể để họ chịu thiệt thòi nữa!"' },
    { who: 'A', name: '课文', hanzi: '子路打听到百里之外有个有钱人，家里缺干活儿的人，决定去试一试。那家主人见他身体结实，就留下了他。子路干起活来十分勤奋，主人很喜欢这个小伙子。半年后，当子路要回家时，发现主人给的银子比他应该得到的多了许多，子路老老实实地告诉了主人。主人笑着说：“孩子，工钱没算错，你做事勤快，这是我给你加的奖金。”', pinyin: 'Zǐlù dǎtīng dào bǎi lǐ zhī wài yǒu ge yǒu qián rén, jiā li quē gàn huór de rén, juédìng qù shì yi shì. Nà jiā zhǔrén jiàn tā shēntǐ jiēshi, jiù liúxiàle tā. Zǐlù gàn qǐ huó lái shífēn qínfèn, zhǔrén hěn xǐhuan zhège xiǎohuǒzi. Bàn nián hòu, dāng Zǐlù yào huí jiā shí, fāxiàn zhǔrén gěi de yínzi bǐ tā yīnggāi dédào de duōle xǔduō, Zǐlù lǎolǎo-shíshí de gàosule zhǔrén. Zhǔrén xiàozhe shuō: "Háizi, gōngqián méi suàncuò, nǐ zuò shì qínkuài, zhè shì wǒ gěi nǐ jiā de jiǎngjīn."', vi: 'Tử Lộ nghe ngóng ở ngoài trăm dặm có nhà giàu thiếu người làm, quyết định đến thử. Chủ nhà thấy anh khỏe mạnh bèn nhận. Tử Lộ làm việc rất siêng năng, chủ rất thích chàng trai này. Nửa năm sau khi Tử Lộ về nhà, thấy bạc chủ đưa nhiều hơn mình đáng được nhiều lắm, Tử Lộ thật thà nói với chủ. Chủ cười nói: "Con ơi, tiền công không tính sai, con làm việc chăm chỉ, đây là tiền thưởng ta thêm cho con."' },
    { who: 'A', name: '课文', hanzi: '谢过主人，子路高兴地上路了。路过镇上，他买了一袋米、一块肉、两条鱼，背在后背上。天气非常寒冷，雪地很滑，子路不小心滑了一下，背上的米袋差点儿被甩出去。他顶着大雪往前走，扶着米袋的双手冻得不行，就停下来暖暖，再继续赶路。终于到家了，见到父母，子路把给他们买的东西及剩下的工钱都交给了他们。一家人高高兴兴地生火做饭，饱饱地吃了顿团圆饭。', pinyin: 'Xièguo zhǔrén, Zǐlù gāoxìng de shàng lù le. Lùguò zhèn shang, tā mǎile yí dài mǐ, yí kuài ròu, liǎng tiáo yú, bēi zài hòubèi shang. Tiānqì fēicháng hánlěng, xuědì hěn huá, Zǐlù bù xiǎoxīn huále yíxià, bèi shang de mǐdài chàdiǎnr bèi shuǎi chūqu. Tā dǐngzhe dà xuě wǎng qián zǒu, fúzhe mǐdài de shuāngshǒu dòng de bùxíng, jiù tíngxialai nuǎnnuan, zài jìxù gǎn lù. Zhōngyú dào jiā le, jiàndào fùmǔ, Zǐlù bǎ gěi tāmen mǎi de dōngxi jí shèngxià de gōngqián dōu jiāogěile tāmen. Yì jiārén gāogāo-xìngxìng de shēng huǒ zuò fàn, bǎobǎo de chīle dùn tuányuán fàn.', vi: 'Tạ ơn chủ, Tử Lộ vui vẻ lên đường. Qua thị trấn anh mua một bao gạo, một miếng thịt, hai con cá, vác trên lưng. Trời rất lạnh, tuyết trơn, Tử Lộ không cẩn thận trượt một cái, bao gạo suýt văng ra. Anh đội tuyết lớn đi tới, đôi tay đỡ bao gạo cóng đến chịu không nổi bèn dừng lại sưởi ấm rồi tiếp tục đi. Cuối cùng về đến nhà, gặp cha mẹ, Tử Lộ đưa hết đồ mua và tiền công còn lại. Cả nhà vui vẻ nhóm lửa nấu cơm, ăn no bữa cơm đoàn viên.' },
    { who: 'A', name: '课文', hanzi: '后来子路的父母去世了，他也南下到了楚国。楚国国君觉得他很有本领，是个人才，就留他做了官，并给了他很优厚的待遇。但他并没有因为物质条件好而感到欢喜，反而常常诚恳地说：“多么希望父母能和我一起过好日子！我现在有了一点儿成就，可他们已经不在了，即使再想背米百里去孝敬双亲，也不可能了。”', pinyin: 'Hòulái Zǐlù de fùmǔ qùshì le, tā yě nánxià dàole Chǔguó. Chǔguó guójūn juéde tā hěn yǒu běnlǐng, shì ge réncái, jiù liú tā zuòle guān, bìng gěile tā hěn yōuhòu de dàiyù. Dàn tā bìng méiyǒu yīnwèi wùzhì tiáojiàn hǎo ér gǎndào huānxǐ, fǎn\'ér chángcháng chéngkěn de shuō: "Duōme xīwàng fùmǔ néng hé wǒ yìqǐ guò hǎo rìzi! Wǒ xiànzài yǒule yìdiǎnr chéngjiù, kě tāmen yǐjīng bú zài le, jíshǐ zài xiǎng bēi mǐ bǎi lǐ qù xiàojìng shuāngqīn, yě bù kěnéng le."', vi: 'Sau này cha mẹ Tử Lộ qua đời, anh cũng xuôi nam đến nước Sở. Vua Sở thấy anh có bản lĩnh, là nhân tài nên giữ lại làm quan và cho đãi ngộ rất hậu. Nhưng anh không vì điều kiện vật chất tốt mà vui mừng, trái lại thường chân thành nói: "Mong biết bao cha mẹ có thể cùng ta sống những ngày tốt đẹp! Nay tôi có chút thành tựu thì họ đã không còn, dù có muốn vác gạo trăm dặm hiếu kính song thân cũng không thể nữa."' },
    { who: 'A', name: '课文', hanzi: '中国古代有句话叫“百善孝为先”，意思是说，孝顺父母是各种美德中占第一位的。子路为了让父母吃到较好的食物，不怕辛苦，这种做法确实值得我们学习。', pinyin: 'Zhōngguó gǔdài yǒu jù huà jiào "bǎi shàn xiào wéi xiān", yìsi shì shuō, xiàoshùn fùmǔ shì gè zhǒng měidé zhōng zhàn dì-yī wèi de. Zǐlù wèile ràng fùmǔ chīdào jiào hǎo de shíwù, bú pà xīnkǔ, zhè zhǒng zuòfǎ quèshí zhídé wǒmen xuéxí.', vi: 'Thời cổ Trung Quốc có câu "bách thiện hiếu vi tiên", nghĩa là hiếu thuận cha mẹ chiếm vị trí số một trong các đức tính tốt. Tử Lộ vì để cha mẹ ăn được thức ăn tốt hơn mà không ngại vất vả, cách làm này thật đáng để ta học.' },
  ],
  dialogueTip: '<b>至今</b>: cho đến nay. <b>顶</b>: đỉnh; đội, đi ngược; lượng từ (mũ). <b>……得不行</b>: … đến chịu không nổi. <b>反而</b>: trái lại. <b>满足</b>: thỏa mãn; <b>满意</b>: hài lòng.',
  slowSay: '子路背米',

  vocab: [
    { hanzi: '背', pinyin: 'bēi', pos: 'động từ', meaning: 'vác, cõng', han_viet: 'bối' },
    { hanzi: '从前', pinyin: 'cóngqián', pos: 'danh từ', meaning: 'trước đây, ngày xưa', han_viet: 'tòng tiền' },
    { hanzi: '时期', pinyin: 'shíqī', pos: 'danh từ', meaning: 'thời kỳ', han_viet: 'thời kỳ' },
    { hanzi: '流传', pinyin: 'liúchuán', pos: 'động từ', meaning: 'lưu truyền', han_viet: 'lưu truyền' },
    { hanzi: '至今', pinyin: 'zhìjīn', pos: 'phó từ', meaning: 'đến nay, đến bây giờ', han_viet: 'chí kim' },
    { hanzi: '孝敬', pinyin: 'xiàojìng', pos: 'động từ', meaning: 'hiếu kính', han_viet: 'hiếu kính' },
    { hanzi: '农民', pinyin: 'nóngmín', pos: 'danh từ', meaning: 'nông dân', han_viet: 'nông dân' },
    { hanzi: '战争', pinyin: 'zhànzhēng', pos: 'danh từ', meaning: 'chiến tranh', han_viet: 'chiến tranh' },
    { hanzi: '满足', pinyin: 'mǎnzú', pos: 'động từ', meaning: 'thỏa mãn, hài lòng', han_viet: 'mãn túc' },
    { hanzi: '惭愧', pinyin: 'cánkuì', pos: 'tính từ', meaning: 'hổ thẹn', han_viet: 'tàm quý' },
    { hanzi: '决心', pinyin: 'juéxīn', pos: 'động từ/danh từ', meaning: 'quyết tâm', han_viet: 'quyết tâm' },
    { hanzi: '委屈', pinyin: 'wěiqu', pos: 'động từ/tính từ', meaning: 'để ai chịu thiệt thòi; tủi thân', han_viet: 'ủy khuất' },
    { hanzi: '打听', pinyin: 'dǎting', pos: 'động từ', meaning: 'hỏi thăm, nghe ngóng', han_viet: 'đả thính' },
    { hanzi: '主人', pinyin: 'zhǔrén', pos: 'danh từ', meaning: 'người chủ', han_viet: 'chủ nhân' },
    { hanzi: '结实', pinyin: 'jiēshi', pos: 'tính từ', meaning: 'cường tráng, khỏe mạnh', han_viet: 'kết thực' },
    { hanzi: '勤奋', pinyin: 'qínfèn', pos: 'tính từ', meaning: 'siêng năng, cần cù', han_viet: 'cần phấn' },
    { hanzi: '银(子)', pinyin: 'yín(zi)', pos: 'danh từ', meaning: 'bạc', han_viet: 'ngân' },
    { hanzi: '老实', pinyin: 'lǎoshi', pos: 'tính từ', meaning: 'trung thực, thật thà', han_viet: 'lão thực' },
    { hanzi: '镇', pinyin: 'zhèn', pos: 'danh từ', meaning: 'thị trấn', han_viet: 'trấn' },
    { hanzi: '后背', pinyin: 'hòubèi', pos: 'danh từ', meaning: 'lưng (người)', han_viet: 'hậu bối' },
    { hanzi: '滑', pinyin: 'huá', pos: 'tính từ/động từ', meaning: 'trơn; trượt', han_viet: 'hoạt' },
    { hanzi: '甩', pinyin: 'shuǎi', pos: 'động từ', meaning: 'vung, quăng, ném', han_viet: 'suất' },
    { hanzi: '顶', pinyin: 'dǐng', pos: 'động từ', meaning: 'đi ngược, đội', han_viet: 'đỉnh' },
    { hanzi: '扶', pinyin: 'fú', pos: 'động từ', meaning: 'đỡ, vịn', han_viet: 'phù' },
    { hanzi: '不行', pinyin: 'bùxíng', pos: 'tính từ', meaning: '(chỉ mức độ) ghê gớm, cực kỳ', han_viet: 'bất hành' },
    { hanzi: '团圆', pinyin: 'tuányuán', pos: 'động từ', meaning: 'sum họp, đoàn tụ', han_viet: 'đoàn viên' },
    { hanzi: '去世', pinyin: 'qùshì', pos: 'động từ', meaning: 'qua đời, từ trần', han_viet: 'khứ thế' },
    { hanzi: '国君', pinyin: 'guójūn', pos: 'danh từ', meaning: 'vua', han_viet: 'quốc quân' },
    { hanzi: '本领', pinyin: 'běnlǐng', pos: 'danh từ', meaning: 'bản lĩnh, năng lực', han_viet: 'bản lĩnh' },
    { hanzi: '人才', pinyin: 'réncái', pos: 'danh từ', meaning: 'người có tài', han_viet: 'nhân tài' },
    { hanzi: '官', pinyin: 'guān', pos: 'danh từ', meaning: 'quan', han_viet: 'quan' },
    { hanzi: '物质', pinyin: 'wùzhì', pos: 'danh từ', meaning: 'vật chất', han_viet: 'vật chất' },
    { hanzi: '反而', pinyin: 'fǎn\'ér', pos: 'phó từ', meaning: 'trái lại, ngược lại', han_viet: 'phản nhi' },
    { hanzi: '诚恳', pinyin: 'chéngkěn', pos: 'tính từ', meaning: 'thành khẩn', han_viet: 'thành khẩn' },
    { hanzi: '成就', pinyin: 'chéngjiù', pos: 'danh từ', meaning: 'thành tựu', han_viet: 'thành tựu' },
    { hanzi: '古代', pinyin: 'gǔdài', pos: 'danh từ', meaning: 'ngày xưa, thời cổ', han_viet: 'cổ đại' },
    { hanzi: '孝顺', pinyin: 'xiàoshùn', pos: 'động từ/tính từ', meaning: 'hiếu thuận', han_viet: 'hiếu thuận' },
    { hanzi: '美德', pinyin: 'měidé', pos: 'danh từ', meaning: 'phẩm chất tốt', han_viet: 'mỹ đức' },
    { hanzi: '占', pinyin: 'zhàn', pos: 'động từ', meaning: 'chiếm, giữ', han_viet: 'chiếm' },
    { hanzi: '食物', pinyin: 'shíwù', pos: 'danh từ', meaning: 'thức ăn', han_viet: 'thực vật' },
  ],

  sections: [
    {
      kind: 'examples', label: '至今', title: '至今 (cho đến nay)',
      intro: 'Phó từ 至今: cho đến bây giờ, thường đứng đầu mệnh đề nhỏ hoặc trước động từ; cũng tạo cấu trúc cố định như 从古至今, 流传至今.',
      groups: [{ label: 'Ví dụ', items: [['我在北京出生、长大，至今还没离开过呢。', 'Wǒ zài Běijīng chūshēng, zhǎngdà, zhìjīn hái méi líkāiguo ne.', 'Tôi sinh ra, lớn lên ở Bắc Kinh, đến nay vẫn chưa rời đi.'], ['至今，很多国家并没有规定什么才是健康食品。', 'Zhìjīn, hěn duō guójiā bìng méiyǒu guīdìng shénme cái shì jiànkāng shípǐn.', 'Đến nay nhiều nước vẫn chưa quy định thế nào là thực phẩm sạch.'], ['流传至今的“百里背米”讲的就是他孝敬父母的故事。', 'Liúchuán zhìjīn de "bǎi lǐ bēi mǐ" jiǎng de jiù shì tā xiàojìng fùmǔ de gùshi.', '"Vác gạo trăm dặm" lưu truyền đến nay kể chuyện anh hiếu kính cha mẹ.']] }],
    },
    {
      kind: 'examples', label: '顶', title: '顶 (đỉnh; đội, đi ngược; lượng từ)',
      intro: 'Danh từ: phần cao nhất (头顶, 山顶). Động từ: dùng đầu đội, húc; "迎着, 抵挡" (đi ngược). Lượng từ: dùng cho mũ, dù…',
      groups: [{ label: 'Ví dụ', items: [['请把手举过头顶。', 'Qǐng bǎ shǒu jǔguò tóudǐng.', 'Hãy giơ tay qua đỉnh đầu.'], ['他能用头顶起20斤重的东西。', 'Tā néng yòng tóu dǐngqǐ èrshí jīn zhòng de dōngxi.', 'Anh có thể dùng đầu đội vật nặng 10 kg.'], ['天气非常寒冷，子路顶着大雪往前走。', 'Tiānqì fēicháng hánlěng, Zǐlù dǐngzhe dà xuě wǎng qián zǒu.', 'Trời rất lạnh, Tử Lộ đội tuyết lớn đi tới.'], ['我这顶新帽子怎么样？', 'Wǒ zhè dǐng xīn màozi zěnmeyàng?', 'Chiếc mũ mới này của tôi thế nào?']] }],
    },
    {
      kind: 'examples', label: '得不行 · 反而', title: '……得不行 và 反而',
      intro: '……得 + 不行: biểu thị mức độ rất cao (cũng 得很, 得不得了). 反而: phó từ dùng giữa hai mệnh đề, biểu thị trái với dự đoán.',
      groups: [
        { label: '得不行', items: [['扶着米袋的双手冻得不行，就停下来暖暖。', 'Fúzhe mǐdài de shuāngshǒu dòng de bùxíng, jiù tíngxialai nuǎnnuan.', 'Đôi tay đỡ bao gạo cóng không chịu nổi, bèn dừng lại sưởi.'], ['这个地方这么热闹，孩子们高兴得不得了！', 'Zhège dìfang zhème rènao, háizimen gāoxìng de bùdéliǎo!', 'Nơi này náo nhiệt thế, bọn trẻ vui khôn xiết!'], ['他心里烦得很，自言自语地抱怨：“怎么还有那么远！”', 'Tā xīn li fán de hěn, zìyán-zìyǔ de bàoyuàn: "Zěnme hái yǒu nàme yuǎn!"', 'Anh phiền lòng lắm, tự lẩm bẩm: "Sao còn xa thế!"']] },
        { label: '反而', items: [['这样不但不能提高他们的阅读能力，反而有可能降低他们的阅读兴趣和热情。', 'Zhèyàng búdàn bù néng tígāo tāmen de yuèdú nénglì, fǎn\'ér yǒu kěnéng jiàngdī tāmen de yuèdú xìngqù hé rèqíng.', 'Làm vậy không những không nâng cao khả năng đọc mà còn có thể giảm hứng thú.'], ['大城市的生活虽然精彩，但一辈子生活在农村的父母反而会不适应。', 'Dà chéngshì de shēnghuó suīrán jīngcǎi, dàn yíbèizi shēnghuó zài nóngcūn de fùmǔ fǎn\'ér huì bú shìyìng.', 'Cuộc sống thành phố tuy đặc sắc nhưng cha mẹ cả đời ở quê lại không quen.'], ['但他并没有因为物质条件好而感到欢喜，反而常常诚恳地说……', 'Dàn tā bìng méiyǒu yīnwèi wùzhì tiáojiàn hǎo ér gǎndào huānxǐ, fǎn\'ér chángcháng chéngkěn de shuō……', 'Nhưng anh không vì vật chất tốt mà vui, trái lại thường chân thành nói……']] },
      ],
    },
    {
      kind: 'examples', label: '满足 – 满意', title: 'So sánh 满足 và 满意',
      intro: 'Giống nhau: đều là động từ, có ý "cảm thấy đủ, nguyện vọng được thực hiện". Khác nhau: 满足 nhấn mạnh không đòi hỏi gì thêm, thường không làm định ngữ/trạng ngữ, kết hợp với 需要, 要求, 条件, 愿望; 满意 nhấn mạnh phù hợp với ý mình, làm được định ngữ/trạng ngữ, ít mang tân ngữ trực tiếp.',
      groups: [{ label: 'Ví dụ', items: [['我对现在的生活感到非常满足/满意。', 'Wǒ duì xiànzài de shēnghuó gǎndào fēicháng mǎnzú/mǎnyì.', 'Tôi cảm thấy rất hài lòng với cuộc sống hiện tại.'], ['只要能饱饱地吃上一顿米饭，也就满足啦！', 'Zhǐyào néng bǎobǎo de chīshàng yí dùn mǐfàn, yě jiù mǎnzú la!', 'Chỉ cần được ăn no một bữa cơm gạo là mãn nguyện rồi!'], ['这个我不想要，它不能满足我们的需要。', 'Zhège wǒ bù xiǎng yào, tā bù néng mǎnzú wǒmen de xūyào.', 'Cái này tôi không muốn, nó không đáp ứng nhu cầu của ta.'], ['他找到了一份满意的工作。', 'Tā zhǎodàole yí fèn mǎnyì de gōngzuò.', 'Anh tìm được một công việc vừa lòng.']] }],
    },
    {
      kind: 'examples', label: 'Mở rộng: xưng hô xã giao', title: 'Từ vựng xưng hô xã giao (扩展)',
      intro: '国王, 王子, 公主, 总理, 总统, 主席, 总裁, 主任, 老板, 领导.',
      groups: [{ label: 'Ví dụ', items: [['美国正在进行四年一次的总统大选。', 'Měiguó zhèngzài jìnxíng sì nián yí cì de zǒngtǒng dàxuǎn.', 'Mỹ đang tiến hành cuộc bầu cử tổng thống bốn năm một lần.'], ['这是我们办公室新来的领导，大家可以叫他王主任。', 'Zhè shì wǒmen bàngōngshì xīn lái de lǐngdǎo, dàjiā kěyǐ jiào tā Wáng zhǔrèn.', 'Đây là lãnh đạo mới của văn phòng, mọi người gọi là chủ nhiệm Vương.']] }],
    },
  ],

  notes: [
    { title: '至今', body: 'Phó từ: cho đến nay. Hay dùng trong 流传至今, 从古至今.', say: '流传至今的故事' },
    { title: '顶', body: 'Danh từ (đỉnh), động từ (đội, đi ngược 顶着大雪), lượng từ (一顶帽子).', say: '子路顶着大雪往前走' },
    { title: '……得不行', body: 'Chỉ mức độ cao: 冻得不行, 累得不行.', say: '双手冻得不行' },
    { title: '反而', body: 'Phó từ giữa hai mệnh đề, kết quả trái với dự đoán.', say: '他反而常常诚恳地说' },
    { title: 'Văn hóa: 百善孝为先', body: 'Trong trăm điều thiện, hiếu là đầu: hiếu thuận cha mẹ đứng đầu mọi đức tính.', say: '百善孝为先' },
  ],

  writeChars: ['孝', '敬', '惭', '愧', '委', '屈', '勤', '诚'],

  drills: [],

  qa: [
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: '中国人说的“孝”是什么意思？', hint: '孝顺父母、爱兄弟。' },
        { q: '你认为应该如何去关爱你的父母？', hint: '多陪伴、多联系……' },
        { q: '如果有一天你的父母身体不好，需要有人照顾时，你会怎么做？', hint: '我会……' },
      ],
    },
  ],

  sentences: [
    { parts: ['子路', '顶', '着', '大雪', '往前', '走'], pinyin: 'Zǐlù dǐngzhe dà xuě wǎng qián zǒu.', vi: 'Tử Lộ đội tuyết lớn đi tới.' },
    { parts: ['他', '的', '双手', '冻', '得', '不行'], pinyin: 'Tā de shuāngshǒu dòng de bùxíng.', vi: 'Đôi tay anh cóng chịu không nổi.' },
    { parts: ['孝顺', '父母', '是', '各种', '美德', '中', '占', '第一位', '的'], pinyin: 'Xiàoshùn fùmǔ shì gè zhǒng měidé zhōng zhàn dì-yī wèi de.', vi: 'Hiếu thuận cha mẹ chiếm vị trí số một trong các đức tính.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 1 · Điền từ',
      hint: 'Gõ chữ Hán theo đáp án sách.',
      items: [
        { prompt: '（ ）有个人叫乐广，他有个好朋友，一有空儿就到他家来聊天儿。', answer: '从前', gloss: 'ngày xưa' },
        { prompt: '你去教室自习的时候，帮我（ ）个座位，好吗？', answer: '占', gloss: 'chiếm' },
        { prompt: '请您先在这儿（ ）一晚，明天我们就给您换个好的房间。', answer: '委屈', gloss: 'chịu thiệt' },
        { prompt: '邻居家有一条（ ）高强的小狗，能看门，能送报，还能买菜。', answer: '本领', gloss: 'bản lĩnh' },
        { prompt: '他把那位老爷爷（ ）过了马路。', answer: '扶', gloss: 'đỡ' },
        { prompt: '我下（ ）从明天开始早睡早起，每天锻炼身体。', answer: '决心', gloss: 'quyết tâm' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Chọn đáp án',
      hint: 'Gõ từ đúng theo đáp án sách.',
      items: [
        { prompt: '昨天打不到车，是他（ ）着我去的医院。 (背/后背)', answer: '背', gloss: 'cõng' },
        { prompt: '我跟爸爸妈妈说好了，会在10点（ ）回家。 (从前/以前)', answer: '以前', gloss: 'trước' },
        { prompt: '这是在警察局，你给我（ ）点！别乱动！ (老实/诚实)', answer: '老实', gloss: 'thật thà' },
        { prompt: '他没有接受那份优厚的待遇，（ ）辞职了。 (而且/反而)', answer: '反而', gloss: 'trái lại' },
      ],
    },
    {
      title: 'Giáo trình 做一做 & 扩展',
      hint: 'Gõ từ đúng theo đáp án sách.',
      items: [
        { prompt: '父母总是会想办法（ ）孩子的要求。 (满足/满意)', answer: '满足', gloss: 'đáp ứng' },
        { prompt: '听到这个消息，他（ ）地笑了。 (满足/满意)', answer: '满意', gloss: 'hài lòng' },
        { prompt: '你不能仅仅通过考试就（ ）了，要努力取得最好的成绩。', answer: '满足', gloss: 'thỏa mãn' },
        { prompt: '美国正在进行四年一次的（ ）大选。', answer: '总统', gloss: 'tổng thống' },
        { prompt: '他手里有了一些钱，想自己开公司，自己做（ ）。', answer: '老板', gloss: 'ông chủ' },
        { prompt: '这是我们办公室新来的领导，大家可以叫他王（ ）。', answer: '主任', gloss: 'chủ nhiệm' },
        { prompt: '有些国家既有总统也有（ ），有些国家只有其中一个。', answer: '总理', gloss: 'thủ tướng' },
      ],
    },
  ],
}
