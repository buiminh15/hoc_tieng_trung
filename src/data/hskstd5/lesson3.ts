import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 5 (Thượng), Bài 3: 人生有选择，一切可改变 (sách trang 28–35).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách; dịch bài khóa do app tự thêm.
 * Không có file nghe trong thư mục. Bài tập: 做一做/练习/扩展, đáp án theo "HSK5-BH1" trang 3–4.
 */

export const hskStd5Lesson3: Lesson = {
  id: 3,
  title: 'Đời người có lựa chọn, mọi thứ có thể đổi thay',
  hanzi: '人生有选择，一切可改变',
  pinyin: 'Rénshēng yǒu xuǎnzé, yíqiè kě gǎibiàn',
  vi: 'Đời người có lựa chọn, mọi thứ có thể đổi thay',
  intro: 'Chuyện gia đình Trác Phong bỏ việc đi biển bằng thuyền buồm. Học 各自, 勿, 包括, 时刻 và so sánh 舒适 – 舒服.',

  dialogue: [
    { who: 'A', name: '课文', hanzi: '翟峰和妻子都是铁路工人，工作稳定、待遇不错。他们有房有车，从不用为生活发愁。可翟峰却不想一辈子过这样平静的生活。通过电视，翟峰迷上了帆船，他觉得帆船能带他撞开“世界之门”：只要有一艘船，就能航行在无边无际的海上，到任何自己想去的地方。', pinyin: 'Zhái Fēng hé qīzi dōu shì tiělù gōngrén, gōngzuò wěndìng, dàiyù búcuò. Tāmen yǒu fáng yǒu chē, cóng bú yòng wèi shēnghuó fā chóu. Kě Zhái Fēng què bù xiǎng yíbèizi guò zhèyàng píngjìng de shēnghuó. Tōngguò diànshì, Zhái Fēng mímàile fānchuán, tā juéde fānchuán néng dài tā zhuàngkāi "shìjiè zhī mén": zhǐyào yǒu yì sōu chuán, jiù néng hángxíng zài wúbiān-wújì de hǎi shang, dào rènhé zìjǐ xiǎng qù de dìfang.', vi: 'Trác Phong và vợ đều là công nhân đường sắt, công việc ổn định, đãi ngộ tốt. Họ có nhà có xe, chưa từng lo cuộc sống. Nhưng Trác Phong không muốn cả đời sống bình lặng như vậy. Qua ti vi anh mê thuyền buồm, anh nghĩ thuyền buồm có thể đưa anh đâm mở "cánh cửa thế giới": chỉ cần có một con thuyền là có thể đi trên biển bao la, đến bất cứ nơi nào mình muốn.' },
    { who: 'A', name: '课文', hanzi: '由于翟峰和妻子没有积蓄，于是卖房卖车，买下了一艘二手船，翟峰叫它“彩虹号”。出发前，翟峰自学了航海知识。然而，包括翟峰的父母，所有人都觉得，翟峰“疯了”。', pinyin: 'Yóuyú Zhái Fēng hé qīzi méiyǒu jīxù, yúshì mài fáng mài chē, mǎixiàle yì sōu èrshǒu chuán, Zhái Fēng jiào tā "Cǎihóng Hào". Chūfā qián, Zhái Fēng zìxuéle hánghǎi zhīshi. Rán\'ér, bāokuò Zhái Fēng de fùmǔ, suǒyǒu rén dōu juéde, Zhái Fēng "fēng le".', vi: 'Vì Trác Phong và vợ không có tiền tiết kiệm nên bán nhà bán xe, mua một chiếc thuyền cũ, Trác Phong đặt tên "Thuyền Cầu Vồng". Trước khi đi anh tự học kiến thức hàng hải. Tuy nhiên, kể cả cha mẹ anh, mọi người đều thấy Trác Phong "điên rồi".' },
    { who: 'A', name: '课文', hanzi: '2012年11月24日，辞了职的翟峰和妻子带着休学的女儿，第一次驾驶帆船出海了。白天，翟峰和妻子轮流驾船。女儿在船上看书、学习、画画儿。下午海面平静时，翟峰会和妻子下海游泳或者钓鱼。该吃饭时，妻子会给全家人做一顿美味的海鲜。', pinyin: 'Èr líng yī èr nián shíyī yuè èrshísì rì, cíle zhí de Zhái Fēng hé qīzi dàizhe xiū xué de nǚ\'ér, dì-yī cì jiàshǐ fānchuán chū hǎi le. Báitiān, Zhái Fēng hé qīzi lúnliú jià chuán. Nǚ\'ér zài chuán shang kàn shū, xuéxí, huà huàr. Xiàwǔ hǎimiàn píngjìng shí, Zhái Fēng huì hé qīzi xià hǎi yóu yǒng huòzhě diào yú. Gāi chī fàn shí, qīzi huì gěi quán jiārén zuò yí dùn měiwèi de hǎixiān.', vi: 'Ngày 24/11/2012, Trác Phong đã nghỉ việc cùng vợ và con gái nghỉ học lần đầu lái thuyền buồm ra khơi. Ban ngày vợ chồng thay phiên lái thuyền. Con gái đọc sách, học, vẽ trên thuyền. Chiều biển lặng, Trác Phong cùng vợ xuống biển bơi hoặc câu cá. Đến bữa, vợ nấu cho cả nhà bữa hải sản ngon.' },
    { who: 'A', name: '课文', hanzi: '傍晚是一家人最舒适的时候。干完活儿，一家人坐在一起，用电脑看看电影，或者聊聊天儿。这样的生活，是翟峰盼望已久的。以前陆地上的夜晚，他们在各自的房间，一家人没有更多的交流。', pinyin: 'Bàngwǎn shì yì jiārén zuì shūshì de shíhou. Gānwán huór, yì jiārén zuò zài yìqǐ, yòng diànnǎo kànkan diànyǐng, huòzhě liáoliao tiānr. Zhèyàng de shēnghuó, shì Zhái Fēng pànwàng yǐ jiǔ de. Yǐqián lùdì shang de yèwǎn, tāmen zài gèzì de fángjiān, yì jiārén méiyǒu gèng duō de jiāoliú.', vi: 'Hoàng hôn là lúc cả nhà thoải mái nhất. Làm xong việc, cả nhà ngồi cùng nhau xem phim trên máy tính hoặc trò chuyện. Cuộc sống này là điều Trác Phong mong mỏi từ lâu. Trước đây những đêm trên đất liền, họ ở phòng riêng, cả nhà không có nhiều giao lưu.' },
    { who: 'A', name: '课文', hanzi: '中国有句老话，可上山，勿下海。美好的时刻过去后是一个个紧张的夜晚。一路上，翟峰一家经历了船身着火、漏水等大大小小十多次险情。他们最怕雷电交加的时刻，因为小船随时有可能被下一道闪电击到，一家三口只能紧紧拥抱在一起，希望闪电快快过去。', pinyin: 'Zhōngguó yǒu jù lǎohuà, kě shàng shān, wù xià hǎi. Měihǎo de shíkè guòqù hòu shì yí gègè jǐnzhāng de yèwǎn. Yílù shang, Zhái Fēng yì jiā jīnglìle chuánshēn zháo huǒ, lòu shuǐ děng dàdà-xiǎoxiǎo shí duō cì xiǎnqíng. Tāmen zuì pà léi diàn jiāo jiā de shíkè, yīnwèi xiǎochuán suíshí yǒu kěnéng bèi xià yí dào shǎndiàn jīdào, yì jiā sān kǒu zhǐ néng jǐnjǐn yōngbào zài yìqǐ, xīwàng shǎndiàn kuàikuài guòqù.', vi: 'Trung Quốc có câu cổ ngữ: lên núi được, đừng xuống biển. Sau những khoảnh khắc đẹp là những đêm căng thẳng. Dọc đường gia đình Trác Phong trải qua hơn mười lần nguy hiểm lớn nhỏ như thân thuyền bốc cháy, rò nước. Họ sợ nhất lúc sấm chớp đan xen, vì thuyền nhỏ bất cứ lúc nào có thể bị tia chớp tiếp theo đánh trúng, cả nhà ba người chỉ biết ôm chặt nhau, mong chớp mau qua.' },
    { who: 'A', name: '课文', hanzi: '在经历了八个月、航行了4000多海里之后，翟峰一家终于回到了家。翟峰相信，一切只是开始，航海就是他人生道路上一段长长的台阶，通向他想要的未来。“我和太太想要看看这个时代、这个世界到底是什么样子。人生有选择，一切可改变”。下一站，他们想去澳洲和新西兰。等待今年11月的北风，北风南下之时，他们将再次出发。', pinyin: 'Zài jīnglìle bā ge yuè, hángxíngle sìqiān duō hǎilǐ zhīhòu, Zhái Fēng yì jiā zhōngyú huídàole jiā. Zhái Fēng xiāngxìn, yíqiè zhǐshì kāishǐ, hánghǎi jiù shì tā rénshēng dàolù shang yí duàn chángcháng de táijiē, tōngxiàng tā xiǎng yào de wèilái. "Wǒ hé tàitai xiǎng yào kànkan zhège shídài, zhège shìjiè dàodǐ shì shénme yàngzi. Rénshēng yǒu xuǎnzé, yíqiè kě gǎibiàn". Xià yí zhàn, tāmen xiǎng qù Àozhōu hé Xīnxīlán. Děngdài jīnnián shíyī yuè de běifēng, běifēng nán xià zhī shí, tāmen jiāng zàicì chūfā.', vi: 'Sau tám tháng, hành trình hơn 4000 hải lý, gia đình Trác Phong cuối cùng trở về nhà. Trác Phong tin rằng mọi thứ chỉ mới bắt đầu, hàng hải là một bậc thềm dài trên con đường đời, dẫn đến tương lai anh muốn. "Vợ chồng tôi muốn xem thời đại này, thế giới này rốt cuộc ra sao. Đời người có lựa chọn, mọi thứ có thể thay đổi." Trạm tiếp theo họ muốn đến Úc và New Zealand. Đợi gió Bắc tháng 11 năm nay, khi gió Bắc thổi xuống phía nam, họ sẽ lại lên đường.' },
  ],
  dialogueTip: '<b>各自</b>: mỗi người/bên tự mình. <b>勿</b>: đừng (văn viết). <b>包括</b>: bao gồm, kể cả. <b>时刻</b>: khoảnh khắc; luôn luôn (时时刻刻).',
  slowSay: '人生有选择，一切可改变',

  vocab: [
    { hanzi: '人生', pinyin: 'rénshēng', pos: 'danh từ', meaning: 'đời người', han_viet: 'nhân sinh' },
    { hanzi: '工人', pinyin: 'gōngrén', pos: 'danh từ', meaning: 'công nhân', han_viet: 'công nhân' },
    { hanzi: '稳定', pinyin: 'wěndìng', pos: 'tính từ', meaning: 'ổn định', han_viet: 'ổn định' },
    { hanzi: '待遇', pinyin: 'dàiyù', pos: 'danh từ', meaning: 'sự đãi ngộ', han_viet: 'đãi ngộ' },
    { hanzi: '发愁', pinyin: 'fā chóu', pos: 'động từ', meaning: 'lo âu, buồn rầu', han_viet: 'phát sầu' },
    { hanzi: '平静', pinyin: 'píngjìng', pos: 'tính từ', meaning: 'yên ổn, yên ả', han_viet: 'bình tĩnh' },
    { hanzi: '帆船', pinyin: 'fānchuán', pos: 'danh từ', meaning: 'thuyền buồm', han_viet: 'phàm thuyền' },
    { hanzi: '撞', pinyin: 'zhuàng', pos: 'động từ', meaning: 'đụng, đâm vào', han_viet: 'chàng' },
    { hanzi: '艘', pinyin: 'sōu', pos: 'lượng từ', meaning: 'chiếc (tàu, thuyền)', han_viet: 'tao' },
    { hanzi: '航行', pinyin: 'hángxíng', pos: 'động từ', meaning: 'đi tàu thủy, đi thuyền', han_viet: 'hàng hành' },
    { hanzi: '积蓄', pinyin: 'jīxù', pos: 'danh từ/động từ', meaning: 'tiền để dành; dành dụm', han_viet: 'tích súc' },
    { hanzi: '二手', pinyin: 'èrshǒu', pos: 'tính từ', meaning: 'đã qua sử dụng', han_viet: 'nhị thủ' },
    { hanzi: '彩虹', pinyin: 'cǎihóng', pos: 'danh từ', meaning: 'cầu vồng', han_viet: 'thải hồng' },
    { hanzi: '包括', pinyin: 'bāokuò', pos: 'động từ', meaning: 'bao gồm', han_viet: 'bao quát' },
    { hanzi: '疯', pinyin: 'fēng', pos: 'động từ', meaning: 'phát điên, hóa điên', han_viet: 'phong' },
    { hanzi: '辞职', pinyin: 'cí zhí', pos: 'động từ', meaning: 'từ chức', han_viet: 'từ chức' },
    { hanzi: '驾驶', pinyin: 'jiàshǐ', pos: 'động từ', meaning: 'điều khiển', han_viet: 'giá sử' },
    { hanzi: '轮流', pinyin: 'lúnliú', pos: 'động từ', meaning: 'luân phiên', han_viet: 'luân lưu' },
    { hanzi: '钓', pinyin: 'diào', pos: 'động từ', meaning: 'câu (cá)', han_viet: 'điếu' },
    { hanzi: '顿', pinyin: 'dùn', pos: 'lượng từ', meaning: 'bữa', han_viet: 'đốn' },
    { hanzi: '海鲜', pinyin: 'hǎixiān', pos: 'danh từ', meaning: 'hải sản', han_viet: 'hải tiên' },
    { hanzi: '傍晚', pinyin: 'bàngwǎn', pos: 'danh từ', meaning: 'hoàng hôn', han_viet: 'bàng vãn' },
    { hanzi: '舒适', pinyin: 'shūshì', pos: 'tính từ', meaning: 'dễ chịu, thoải mái', han_viet: 'thư thích' },
    { hanzi: '干活儿', pinyin: 'gàn huór', pos: 'động từ', meaning: 'làm việc', han_viet: 'cán hoạt nhi' },
    { hanzi: '盼望', pinyin: 'pànwàng', pos: 'động từ', meaning: 'trông mong, mong mỏi', han_viet: 'phán vọng' },
    { hanzi: '陆地', pinyin: 'lùdì', pos: 'danh từ', meaning: 'đất liền', han_viet: 'lục địa' },
    { hanzi: '各自', pinyin: 'gèzì', pos: 'đại từ', meaning: 'từng người, riêng mình', han_viet: 'các tự' },
    { hanzi: '勿', pinyin: 'wù', pos: 'phó từ', meaning: 'chớ, đừng', han_viet: 'vật' },
    { hanzi: '时刻', pinyin: 'shíkè', pos: 'danh từ', meaning: 'thời khắc, thời gian', han_viet: 'thời khắc' },
    { hanzi: '着火', pinyin: 'zháo huǒ', pos: 'động từ', meaning: 'bốc cháy, cháy', han_viet: 'trước hỏa' },
    { hanzi: '漏', pinyin: 'lòu', pos: 'động từ', meaning: 'chảy, rỉ', han_viet: 'lậu' },
    { hanzi: '雷', pinyin: 'léi', pos: 'danh từ', meaning: 'sấm', han_viet: 'lôi' },
    { hanzi: '随时', pinyin: 'suíshí', pos: 'phó từ', meaning: 'bất cứ lúc nào', han_viet: 'tùy thời' },
    { hanzi: '闪电', pinyin: 'shǎndiàn', pos: 'danh từ', meaning: 'chớp', han_viet: 'thiểm điện' },
    { hanzi: '击', pinyin: 'jī', pos: 'động từ', meaning: 'đánh', han_viet: 'kích' },
    { hanzi: '拥抱', pinyin: 'yōngbào', pos: 'động từ', meaning: 'ôm chặt', han_viet: 'ủng bão' },
    { hanzi: '海里', pinyin: 'hǎilǐ', pos: 'lượng từ', meaning: 'hải lý', han_viet: 'hải lý' },
    { hanzi: '台阶', pinyin: 'táijiē', pos: 'danh từ', meaning: 'bậc thềm', han_viet: 'đài giai' },
    { hanzi: '未来', pinyin: 'wèilái', pos: 'danh từ', meaning: 'tương lai', han_viet: 'vị lai' },
    { hanzi: '太太', pinyin: 'tàitai', pos: 'danh từ', meaning: 'vợ', han_viet: 'thái thái' },
    { hanzi: '时代', pinyin: 'shídài', pos: 'danh từ', meaning: 'thời đại', han_viet: 'thời đại' },
  ],

  sections: [
    {
      kind: 'examples', label: '各自', title: '各自 (từng người)',
      intro: 'Đại từ 各自 chỉ mỗi người/bên của chính mình, thường làm chủ ngữ hoặc định ngữ cùng với đối tượng được chỉ.',
      groups: [{ label: 'Ví dụ', items: [['中场休息时间到了，比赛双方队员各自回场外休息。', 'Zhōngchǎng xiūxi shíjiān dào le, bǐsài shuāngfāng duìyuán gèzì huí chǎngwài xiūxi.', 'Hết giờ nghỉ giữa trận, cầu thủ hai đội ai về chỗ nghỉ của mình.'], ['刘经理认真看了三家广告公司各自提交的计划。', 'Liú jīnglǐ rènzhēn kànle sān jiā guǎnggào gōngsī gèzì tíjiāo de jìhuà.', 'Giám đốc Lưu xem kỹ kế hoạch riêng của ba công ty quảng cáo nộp.'], ['以前陆地上的夜晚，他们在各自的房间，一家人没有更多的交流。', 'Yǐqián lùdì shang de yèwǎn, tāmen zài gèzì de fángjiān, yì jiārén méiyǒu gèng duō de jiāoliú.', 'Trước đây đêm trên đất liền họ ở phòng riêng, cả nhà ít giao lưu.']] }],
    },
    {
      kind: 'examples', label: '勿', title: '勿 (chớ, đừng)',
      intro: 'Phó từ 勿 biểu thị cấm đoán hoặc khuyên can, dùng trong văn viết, tương đương 不要.',
      groups: [{ label: 'Ví dụ', items: [['非工作人员，请勿入内。', 'Fēi gōngzuò rényuán, qǐng wù rù nèi.', 'Người không phận sự xin chớ vào.'], ['网上购买者须注意网站的安全性，切勿上当受骗。', 'Wǎngshàng gòumǎizhě xū zhùyì wǎngzhàn de ānquánxìng, qiè wù shàngdàng shòupiàn.', 'Người mua trên mạng cần chú ý an toàn trang web, tuyệt đối đừng mắc lừa.'], ['中国有句老话，可上山，勿下海。', 'Zhōngguó yǒu jù lǎohuà, kě shàng shān, wù xià hǎi.', 'Trung Quốc có câu cổ ngữ: lên núi được, đừng xuống biển.']] }],
    },
    {
      kind: 'examples', label: '包括 · 时刻', title: '包括 (bao gồm) và 时刻 (khoảnh khắc)',
      intro: '包括: động từ chỉ bao gồm các phần; còn dùng để nhấn mạnh một phần (kể cả…). 时刻: danh từ "thời điểm"; cũng làm phó từ "luôn luôn", lặp 时时刻刻.',
      groups: [
        { label: '包括', items: [['汉语技能教学包括听、说、读、写四个方面。', 'Hànyǔ jìnéng jiàoxué bāokuò tīng, shuō, dú, xiě sì ge fāngmiàn.', 'Dạy kỹ năng tiếng Hán gồm bốn mặt nghe, nói, đọc, viết.'], ['然而，包括翟峰的父母，所有人都觉得，翟峰“疯了”。', 'Rán\'ér, bāokuò Zhái Fēng de fùmǔ, suǒyǒu rén dōu juéde, Zhái Fēng "fēng le".', 'Tuy nhiên, kể cả cha mẹ Trác Phong, mọi người đều nghĩ anh "điên rồi".'], ['我们班所有人，包括最不爱运动的刘方，也都参加了这次运动会。', 'Wǒmen bān suǒyǒu rén, bāokuò zuì bú ài yùndòng de Liú Fāng, yě dōu cānjiāle zhè cì yùndònghuì.', 'Mọi người lớp tôi, kể cả Lưu Phương ít thích vận động nhất, đều tham gia đại hội thể thao.']] },
        { label: '时刻', items: [['在最后时刻，他为本队踢进了赢得比赛的关键一球。', 'Zài zuìhòu shíkè, tā wèi běn duì tījìnle yíngdé bǐsài de guānjiàn yì qiú.', 'Phút cuối, anh sút vào bàn then chốt giúp đội thắng.'], ['美好的时刻过去后是一个个紧张的夜晚。', 'Měihǎo de shíkè guòqù hòu shì yí gègè jǐnzhāng de yèwǎn.', 'Sau khoảnh khắc đẹp là những đêm căng thẳng.'], ['工作中，他时时刻刻提醒自己：乘客的安全是最重要的。', 'Gōngzuò zhōng, tā shíshíkèkè tíxǐng zìjǐ: chéngkè de ānquán shì zuì zhòngyào de.', 'Trong công việc anh luôn nhắc mình: an toàn của hành khách là quan trọng nhất.']] },
      ],
    },
    {
      kind: 'examples', label: '舒适 – 舒服', title: 'So sánh 舒适 và 舒服',
      intro: 'Giống nhau: đều là tính từ, nghĩa thoải mái dễ chịu. Khác nhau: 舒适 dùng nhiều trong văn viết, thiên về cảm nhận tổng thể về môi trường, hiếm khi lặp; 舒服 dùng nhiều trong khẩu ngữ, thiên về cảm giác chủ quan của thân thể/tinh thần, lặp được (舒舒服服), còn làm động từ (舒服舒服).',
      groups: [{ label: 'Ví dụ', items: [['这款车内部空间大，乘坐舒适。', 'Zhè kuǎn chē nèibù kōngjiān dà, chéngzuò shūshì.', 'Mẫu xe này không gian trong lớn, đi rất thoải mái.'], ['他靠在沙发上舒舒服服地看电视。', 'Tā kào zài shāfā shang shūshūfúfú de kàn diànshì.', 'Anh tựa sofa thoải mái xem ti vi.'], ['听了他的话，我心里很不舒服。', 'Tīngle tā de huà, wǒ xīn li hěn bù shūfu.', 'Nghe lời anh ấy tôi thấy trong lòng rất khó chịu.'], ['踢完球了？洗个热水澡舒服舒服吧。', 'Tīwán qiú le? Xǐ ge rèshuǐ zǎo shūfu shūfu ba.', 'Đá bóng xong rồi? Tắm nước nóng cho dễ chịu đi.']] }],
    },
    {
      kind: 'examples', label: 'Mở rộng: thời tiết, sản xuất', title: 'Từ vựng thời tiết và sản xuất (扩展)',
      intro: '预报, 彩虹, 雷, 闪电, 雾; 零件, 手工, 维修, 机器, 产品, 设备, 设施, 工具.',
      groups: [{ label: 'Ví dụ', items: [['日出后，江面上浓浓的大雾开始慢慢散去。', 'Rìchū hòu, jiāngmiàn shang nóngnóng de dà wù kāishǐ mànmàn sànqù.', 'Sau bình minh, sương mù dày trên mặt sông dần tan.'], ['听天气预报说，明天有雨，要降温。', 'Tīng tiānqì yùbào shuō, míngtiān yǒu yǔ, yào jiàng wēn.', 'Nghe dự báo thời tiết nói mai có mưa, nhiệt độ giảm.'], ['空调一年之内出现质量问题，我们免费维修。', 'Kōngtiáo yì nián zhī nèi chūxiàn zhìliàng wèntí, wǒmen miǎnfèi wéixiū.', 'Điều hòa trong một năm có vấn đề chất lượng, chúng tôi sửa miễn phí.'], ['这些零件检查不合格，让工人们处理了吧。', 'Zhèxiē língjiàn jiǎnchá bù hégé, ràng gōngrénmen chǔlǐ le ba.', 'Những linh kiện này kiểm tra không đạt, để công nhân xử lý đi.']] }],
    },
  ],

  notes: [
    { title: '各自', body: 'Đại từ chỉ mỗi người/mỗi bên của chính mình: 各自的房间.', say: '他们在各自的房间' },
    { title: '勿', body: 'Phó từ cấm/khuyên trong văn viết = 不要: 请勿入内, 可上山，勿下海.', say: '可上山，勿下海' },
    { title: '包括', body: 'Bao gồm; hoặc nhấn mạnh một phần (kể cả…).', say: '包括翟峰的父母，所有人都觉得他疯了' },
    { title: '时刻', body: 'Danh từ: thời khắc; phó từ: luôn luôn (时时刻刻).', say: '美好的时刻过去后是紧张的夜晚' },
  ],

  writeChars: ['稳', '待', '遇', '愁', '帆', '艘', '积', '蓄'],

  drills: [],

  qa: [
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: '翟峰为什么辞职去航海？', hint: '他不想一辈子过平静的生活，迷上了帆船。' },
        { q: '一路上他们遇到了哪些危险？', hint: '船身着火、漏水、雷电……' },
        { q: '如果是你，你会这样选择吗？', hint: '我会/不会，因为……' },
      ],
    },
  ],

  sentences: [
    { parts: ['翟峰', '和', '妻子', '轮流', '驾', '船'], pinyin: 'Zhái Fēng hé qīzi lúnliú jià chuán.', vi: 'Trác Phong và vợ thay phiên lái thuyền.' },
    { parts: ['中国', '有', '句', '老话', '可', '上山', '勿', '下海'], pinyin: 'Zhōngguó yǒu jù lǎohuà, kě shàng shān, wù xià hǎi.', vi: 'Trung Quốc có câu cổ ngữ: lên núi được, đừng xuống biển.' },
    { parts: ['人生', '有', '选择', '一切', '可', '改变'], pinyin: 'Rénshēng yǒu xuǎnzé, yíqiè kě gǎibiàn.', vi: 'Đời người có lựa chọn, mọi thứ có thể đổi thay.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 1 · Điền từ',
      hint: 'Gõ chữ Hán theo đáp án sách.',
      items: [
        { prompt: '由于在个人（ ）上没谈好，他最后拒绝了这家公司的邀请。', answer: '待遇', gloss: 'đãi ngộ' },
        { prompt: '现在，让许多工厂老板（ ）的是有经验的技术工人很难找。', answer: '发愁', gloss: 'lo' },
        { prompt: '丽丽到家才发现刚买的酸奶中有一袋是（ ）的。', answer: '漏', gloss: 'rỉ' },
        { prompt: '您决定了以后，（ ）都可以给我们打电话。', answer: '随时', gloss: 'bất cứ lúc nào' },
        { prompt: '公司已经接受了他的（ ）请求。', answer: '辞职', gloss: 'từ chức' },
        { prompt: '张老师认为王力的成绩一直都很（ ），这次考试应该不会有什么问题。', answer: '稳定', gloss: 'ổn định' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Chọn đáp án',
      hint: 'Gõ từ đúng theo đáp án sách.',
      items: [
        { prompt: '听到这个好消息后，我激动的心情久久不能（ ）。 (冷静/平静)', answer: '平静', gloss: 'bình tĩnh' },
        { prompt: '王奶奶每天都会锻炼，身体好了，自己（ ），也不给儿女添麻烦。 (舒适/舒服)', answer: '舒服', gloss: 'dễ chịu' },
        { prompt: '现在，父母、妻子和孩子都（ ）着他早日学成回国。 (盼望/希望)', answer: '盼望', gloss: 'mong mỏi' },
        { prompt: '21世纪是一个信息（ ）。 (时代/时刻)', answer: '时代', gloss: 'thời đại' },
      ],
    },
    {
      title: 'Giáo trình 做一做 & 扩展',
      hint: 'Gõ từ đúng theo đáp án sách.',
      items: [
        { prompt: '这家餐厅装修精美、环境（ ）。 (舒服/舒适)', answer: '舒适', gloss: 'thoải mái' },
        { prompt: '我今天脖子有点儿不（ ），左右转动时有点儿疼。 (舒服/舒适)', answer: '舒服', gloss: 'dễ chịu' },
        { prompt: '这艘客船除了有（ ）的客舱外，还有餐厅、电影院、商店等。', answer: '舒适', gloss: 'thoải mái' },
        { prompt: '日出后，江面上浓浓的大（ ）开始慢慢散去。', answer: '雾', gloss: 'sương mù' },
        { prompt: '听天气（ ）说，明天有雨，要降温。', answer: '预报', gloss: 'dự báo' },
        { prompt: '空调一年之内出现质量问题，我们免费（ ）。', answer: '维修', gloss: 'sửa chữa' },
        { prompt: '这些（ ）检查不合格，让工人们处理了吧。', answer: '零件', gloss: 'linh kiện' },
      ],
    },
  ],
}
