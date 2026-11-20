import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 4 (Thượng), Bài 5: 只买对的，不买贵的 (sách trang 60–72).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách, dịch hội thoại do app tự thêm.
 * Nghe: 05-1…05-5. Bài tập: 比一比/练习 2/扩展, đáp án theo "HSK4-1-BT" trang 5.
 */

const A = '/audio/hsk-std4/'

export const hskStd4Lesson5: Lesson = {
  id: 5,
  title: 'Chỉ mua đồ đúng, không mua đồ đắt',
  hanzi: '只买对的，不买贵的',
  pinyin: 'Zhǐ mǎi duì de, bù mǎi guì de',
  vi: 'Chỉ mua đồ đúng, không mua đồ đắt',
  intro: 'Nói về mua sắm, giảm giá và quảng cáo. Học 肯定, 再说, 实际 (实际上), 对……来说, 尤其 (so với 特别).',

  dialogue: [
    { who: 'A', name: '售货员', hanzi: '小姐，您好！您想买什么家具？需要我为您介绍一下吗？', pinyin: 'Xiǎojiě, nín hǎo! Nín xiǎng mǎi shénme jiājù? Xūyào wǒ wèi nín jièshào yíxià ma?', vi: 'Chào chị! Chị muốn mua đồ nội thất gì? Cần tôi giới thiệu không?', scene: 'Bài 1 · Vương Tĩnh mua sofa ở cửa hàng nội thất' },
    { who: 'B', name: '王静', hanzi: '谢谢，我想买沙发。', pinyin: 'Xièxie, wǒ xiǎng mǎi shāfā.', vi: 'Cảm ơn, tôi muốn mua sofa.' },
    { who: 'A', name: '售货员', hanzi: '您看这个沙发怎么样？现在正在打折，比平时便宜了一千块。', pinyin: 'Nín kàn zhège shāfā zěnmeyàng? Xiànzài zhèngzài dǎ zhé, bǐ píngshí piányi le yìqiān kuài.', vi: 'Chị xem sofa này thế nào? Giờ đang giảm giá, rẻ hơn ngày thường một nghìn.' },
    { who: 'B', name: '王静', hanzi: '价格还可以，就是不知道质量有没有保证。', pinyin: 'Jiàgé hái kěyǐ, jiùshì bù zhīdào zhìliàng yǒu méiyǒu bǎozhèng.', vi: 'Giá cũng được, chỉ không biết chất lượng có đảm bảo không.' },
    { who: 'A', name: '售货员', hanzi: '您放心，质量肯定不“打折”，这种沙发是今年最流行的。有很多种颜色可以选择，您可以看一下。', pinyin: 'Nín fàng xīn, zhìliàng kěndìng bù "dǎ zhé", zhè zhǒng shāfā shì jīnnián zuì liúxíng de. Yǒu hěn duō zhǒng yánsè kěyǐ xuǎnzé, nín kěyǐ kàn yíxià.', vi: 'Chị yên tâm, chất lượng chắc chắn không "giảm giá", loại sofa này thịnh hành nhất năm nay. Có nhiều màu để chọn, chị xem thử.' },
    { who: 'B', name: '王静', hanzi: '这个蓝色的看上去不错，就要这个吧。', pinyin: 'Zhège lánsè de kàn shangqu búcuò, jiù yào zhège ba.', vi: 'Cái màu xanh này trông ổn, lấy cái này đi.' },
    { who: 'A', name: '王静', hanzi: '咱家的冰箱太旧了，商场正好打折，我们顺便也买一台吧。', pinyin: 'Zán jiā de bīngxiāng tài jiù le, shāngchǎng zhènghǎo dǎ zhé, wǒmen shùnbiàn yě mǎi yì tái ba.', vi: 'Tủ lạnh nhà mình cũ quá, trung tâm đang giảm giá, tiện thể mình mua một cái nhé.', scene: 'Bài 2 · Vương Tĩnh và Lý Tiến mua đồ ở trung tâm thương mại' },
    { who: 'B', name: '李进', hanzi: '今天买的东西太多了。再说，这个月家里已经花了五千多了。', pinyin: 'Jīntiān mǎi de dōngxi tài duō le. Zàishuō, zhège yuè jiā li yǐjīng huāle wǔqiān duō le.', vi: 'Hôm nay mua nhiều đồ quá. Hơn nữa tháng này nhà đã tiêu hơn năm nghìn rồi.' },
    { who: 'A', name: '王静', hanzi: '这么多？你不会是记错了吧？', pinyin: 'Zhème duō? Nǐ bú huì shì jìcuò le ba?', vi: 'Nhiều vậy sao? Anh không nhớ nhầm chứ?' },
    { who: 'B', name: '李进', hanzi: '没错。上个星期光买沙发就花了两千多。', pinyin: 'Méi cuò. Shàng ge xīngqī guāng mǎi shāfā jiù huāle liǎngqiān duō.', vi: 'Không nhầm. Tuần trước chỉ mua sofa đã tốn hơn hai nghìn.' },
    { who: 'A', name: '王静', hanzi: '但是咱家的冰箱实在太旧了，制冷效果也不太好了，还是买个新的吧。', pinyin: 'Dànshì zán jiā de bīngxiāng shízài tài jiù le, zhìlěng xiàoguǒ yě bú tài hǎo le, háishi mǎi ge xīn de ba.', vi: 'Nhưng tủ lạnh nhà mình thật sự quá cũ, làm lạnh cũng không tốt, vẫn nên mua cái mới.' },
    { who: 'B', name: '李进', hanzi: '那好吧，我带的现金不够，用你的信用卡吧。', pinyin: 'Nà hǎo ba, wǒ dài de xiànjīn bú gòu, yòng nǐ de xìnyòngkǎ ba.', vi: 'Thế được, tiền mặt anh mang không đủ, dùng thẻ tín dụng của em nhé.' },
    { who: 'A', name: '李进', hanzi: '李老师邀请咱们去他家做客，给他带点儿什么礼物好呢？', pinyin: 'Lǐ lǎoshī yāoqǐng zánmen qù tā jiā zuò kè, gěi tā dài diǎnr shénme lǐwù hǎo ne?', vi: 'Thầy Lý mời chúng ta đến nhà chơi, mang quà gì cho thầy nhỉ?', scene: 'Bài 3 · Lý Tiến và Vương Tĩnh mua quà ở siêu thị' },
    { who: 'B', name: '王静', hanzi: '他很喜欢葡萄酒，我们就给他买两瓶葡萄酒吧。', pinyin: 'Tā hěn xǐhuan pútaojiǔ, wǒmen jiù gěi tā mǎi liǎng píng pútaojiǔ ba.', vi: 'Thầy rất thích rượu vang, mình mua cho thầy hai chai nhé.' },
    { who: 'A', name: '李进', hanzi: '可是这里有这么多种，你知道哪种好吗？', pinyin: 'Kěshì zhèlǐ yǒu zhème duō zhǒng, nǐ zhīdào nǎ zhǒng hǎo ma?', vi: 'Nhưng ở đây nhiều loại thế, em biết loại nào ngon không?' },
    { who: 'B', name: '王静', hanzi: '我觉得这种不错，你看它酒瓶做得都这么艺术。而且电视上经常有它的广告，我想味道应该不错。', pinyin: 'Wǒ juéde zhè zhǒng búcuò, nǐ kàn tā jiǔpíng zuò de dōu zhème yìshù. Érqiě diànshì shang jīngcháng yǒu tā de guǎnggào, wǒ xiǎng wèidào yīnggāi búcuò.', vi: 'Em thấy loại này ổn, anh xem chai làm nghệ thuật thế. Hơn nữa trên ti vi hay có quảng cáo của nó, em nghĩ vị chắc không tệ.' },
    { who: 'A', name: '李进', hanzi: '广告只会介绍优点，却不会说它的缺点。实际上，很多东西并不像广告上说的那么好，所以不能完全相信广告。', pinyin: 'Guǎnggào zhǐ huì jièshào yōudiǎn, què bú huì shuō tā de quēdiǎn. Shíjìshang, hěn duō dōngxi bìng bú xiàng guǎnggào shang shuō de nàme hǎo, suǒyǐ bù néng wánquán xiāngxìn guǎnggào.', vi: 'Quảng cáo chỉ nói ưu điểm, không nói khuyết điểm. Thực ra nhiều thứ không tốt như quảng cáo nói nên không thể hoàn toàn tin quảng cáo.' },
    { who: 'B', name: '王静', hanzi: '你说的也对。', pinyin: 'Nǐ shuō de yě duì.', vi: 'Anh nói cũng đúng.' },
    { who: 'A', name: '短文', hanzi: '买衣服只考虑价格当然不好，但是只考虑买好看的也不一定对。我买衣服的标准是“只买对的，不买贵的”。第一，自己穿着舒服；第二，衣服的质量要好，而且又不能太贵。对我来说，衣服的样子流行不流行并不是很重要。很多年龄大的人喜欢在打折的时候买便宜的衣服，但对那些衣服是不是适合自己却考虑得不多。这点是我理解不了的，因为如果不适合自己，即使花钱很少，也是一种浪费。', pinyin: 'Mǎi yīfu zhǐ kǎolǜ jiàgé dāngrán bù hǎo, dànshì zhǐ kǎolǜ mǎi hǎokàn de yě bù yídìng duì. Wǒ mǎi yīfu de biāozhǔn shì "zhǐ mǎi duì de, bù mǎi guì de". Dì yī, zìjǐ chuānzhe shūfu; dì èr, yīfu de zhìliàng yào hǎo, érqiě yòu bù néng tài guì. Duì wǒ lái shuō, yīfu de yàngzi liúxíng bu liúxíng bìng bú shì hěn zhòngyào. Hěn duō niánlíng dà de rén xǐhuan zài dǎ zhé de shíhou mǎi piányi de yīfu, dàn duì nàxiē yīfu shì bu shì shìhé zìjǐ què kǎolǜ de bù duō. Zhè diǎn shì wǒ lǐjiě bù liǎo de, yīnwèi rúguǒ bú shìhé zìjǐ, jíshǐ huā qián hěn shǎo, yě shì yì zhǒng làngfèi.', vi: 'Mua quần áo chỉ xét giá thì dĩ nhiên không tốt, nhưng chỉ xét cái đẹp cũng chưa chắc đúng. Tiêu chuẩn mua quần áo của tôi là "chỉ mua đồ đúng, không mua đồ đắt": một, mặc thoải mái; hai, chất lượng tốt mà không quá đắt. Với tôi kiểu dáng có thịnh hành hay không không quan trọng. Nhiều người lớn tuổi thích mua đồ rẻ lúc giảm giá nhưng ít cân nhắc có hợp mình không. Điều này tôi không hiểu nổi, vì nếu không hợp thì dù tốn ít tiền cũng là lãng phí.', scene: 'Bài 4 · Tiêu chuẩn mua quần áo' },
    { who: 'A', name: '短文', hanzi: '现在网上购物变得越来越流行了，年轻人尤其喜欢在网上买东西。在网上几乎什么都可以买到，你可以上网买书、买衣服、买包，还可以买家具、买手机。网上购物能够受到人们的喜爱，原因主要有两个：首先，网上的东西很多，而且比去商店买便宜，这是吸引人们购买的主要原因。其次，人们可以在任何时间上网购买自己喜欢的东西，卖家可以把你买的东西寄到你办公室或者家里，非常方便。', pinyin: 'Xiànzài wǎng shang gòu wù biàn de yuè lái yuè liúxíng le, niánqīng rén yóuqí xǐhuan zài wǎng shang mǎi dōngxi. Zài wǎng shang jīhū shénme dōu kěyǐ mǎidào, nǐ kěyǐ shàng wǎng mǎi shū, mǎi yīfu, mǎi bāo, hái kěyǐ mǎi jiājù, mǎi shǒujī. Wǎng shang gòu wù nénggòu shòudào rénmen de xǐ\'ài, yuányīn zhǔyào yǒu liǎng ge: Shǒuxiān, wǎng shang de dōngxi hěn duō, érqiě bǐ qù shāngdiàn mǎi piányi, zhè shì xīyǐn rénmen gòumǎi de zhǔyào yuányīn. Qícì, rénmen kěyǐ zài rènhé shíjiān shàng wǎng gòumǎi zìjǐ xǐhuan de dōngxi, màijiā kěyǐ bǎ nǐ mǎi de dōngxi jìdào nǐ bàngōngshì huòzhě jiā li, fēicháng fāngbiàn.', vi: 'Giờ mua sắm trực tuyến ngày càng phổ biến, giới trẻ đặc biệt thích mua đồ trên mạng. Trên mạng hầu như cái gì cũng mua được: sách, quần áo, túi, đồ nội thất, điện thoại. Mua sắm trực tuyến được yêu thích vì hai lý do chính: thứ nhất, hàng trên mạng nhiều lại rẻ hơn đến cửa hàng; thứ hai, có thể mua bất cứ lúc nào, người bán gửi hàng đến văn phòng hoặc nhà, rất tiện.', scene: 'Bài 5 · Mua sắm trực tuyến' },
  ],
  dialogueClips: [
    { label: '05-1 · Vương Tĩnh mua sofa', src: A + 'l5-1.mp3' },
    { label: '05-2 · Vương Tĩnh và Lý Tiến', src: A + 'l5-2.mp3' },
    { label: '05-3 · Lý Tiến và Vương Tĩnh', src: A + 'l5-3.mp3' },
    { label: '05-4 · Tiêu chuẩn mua quần áo', src: A + 'l5-4.mp3' },
    { label: '05-5 · Mua sắm trực tuyến', src: A + 'l5-5.mp3' },
  ],
  dialogueTip: '<b>肯定</b>: chắc chắn. <b>再说</b>: hơn nữa / để sau. <b>实际上</b>: thực ra (chuyển ý). <b>对……来说</b>: đối với…. <b>尤其</b>: đặc biệt là (nêu khía cạnh nổi bật).',
  slowSay: '只买对的，不买贵的',

  vocab: [
    { hanzi: '家具', pinyin: 'jiājù', pos: 'danh từ', meaning: 'đồ dùng trong nhà', han_viet: 'gia cụ' },
    { hanzi: '沙发', pinyin: 'shāfā', pos: 'danh từ', meaning: 'ghế sô-pha', han_viet: 'sa phát' },
    { hanzi: '打折', pinyin: 'dǎ zhé', pos: 'động từ', meaning: 'giảm giá', han_viet: 'đả chiết' },
    { hanzi: '价格', pinyin: 'jiàgé', pos: 'danh từ', meaning: 'giá cả', han_viet: 'giá cách' },
    { hanzi: '质量', pinyin: 'zhìliàng', pos: 'danh từ', meaning: 'chất lượng', han_viet: 'chất lượng' },
    { hanzi: '肯定', pinyin: 'kěndìng', pos: 'phó từ', meaning: 'chắc chắn, nhất định', han_viet: 'khẳng định' },
    { hanzi: '流行', pinyin: 'liúxíng', pos: 'động từ', meaning: 'được nhiều người ưa chuộng', han_viet: 'lưu hành' },
    { hanzi: '顺便', pinyin: 'shùnbiàn', pos: 'phó từ', meaning: 'nhân tiện', han_viet: 'thuận tiện' },
    { hanzi: '台', pinyin: 'tái', pos: 'lượng từ', meaning: '(dùng cho máy móc) cái, chiếc', han_viet: 'đài' },
    { hanzi: '光', pinyin: 'guāng', pos: 'phó từ', meaning: 'chỉ', han_viet: 'quang' },
    { hanzi: '实在', pinyin: 'shízài', pos: 'phó từ', meaning: 'kỳ thực, quả thực', han_viet: 'thực tại' },
    { hanzi: '制冷', pinyin: 'zhìlěng', pos: 'động từ', meaning: 'làm lạnh, ướp lạnh', han_viet: 'chế lãnh' },
    { hanzi: '效果', pinyin: 'xiàoguǒ', pos: 'danh từ', meaning: 'hiệu quả', han_viet: 'hiệu quả' },
    { hanzi: '现金', pinyin: 'xiànjīn', pos: 'danh từ', meaning: 'tiền mặt', han_viet: 'hiện kim' },
    { hanzi: '邀请', pinyin: 'yāoqǐng', pos: 'động từ', meaning: 'mời', han_viet: 'yêu thỉnh' },
    { hanzi: '葡萄', pinyin: 'pútao', pos: 'danh từ', meaning: 'quả nho', han_viet: 'bồ đào' },
    { hanzi: '艺术', pinyin: 'yìshù', pos: 'danh từ/tính từ', meaning: 'nghệ thuật; có tính nghệ thuật', han_viet: 'nghệ thuật' },
    { hanzi: '广告', pinyin: 'guǎnggào', pos: 'danh từ', meaning: 'quảng cáo', han_viet: 'quảng cáo' },
    { hanzi: '味道', pinyin: 'wèidào', pos: 'danh từ', meaning: 'mùi vị', han_viet: 'vị đạo' },
    { hanzi: '优点', pinyin: 'yōudiǎn', pos: 'danh từ', meaning: 'ưu điểm', han_viet: 'ưu điểm' },
    { hanzi: '实际', pinyin: 'shíjì', pos: 'danh từ/tính từ', meaning: 'thực tế; cụ thể', han_viet: 'thực tế' },
    { hanzi: '考虑', pinyin: 'kǎolǜ', pos: 'động từ', meaning: 'suy xét, cân nhắc', han_viet: 'khảo lự' },
    { hanzi: '标准', pinyin: 'biāozhǔn', pos: 'danh từ', meaning: 'tiêu chuẩn, chuẩn mực', han_viet: 'tiêu chuẩn' },
    { hanzi: '样子', pinyin: 'yàngzi', pos: 'danh từ', meaning: 'kiểu dáng', han_viet: 'dạng tử' },
    { hanzi: '年龄', pinyin: 'niánlíng', pos: 'danh từ', meaning: 'tuổi', han_viet: 'niên linh' },
    { hanzi: '浪费', pinyin: 'làngfèi', pos: 'động từ', meaning: 'lãng phí, hoang phí', han_viet: 'lãng phí' },
    { hanzi: '购物', pinyin: 'gòu wù', pos: 'động từ', meaning: 'mua sắm, mua hàng', han_viet: 'cấu vật' },
    { hanzi: '尤其', pinyin: 'yóuqí', pos: 'phó từ', meaning: 'đặc biệt là, nhất là', han_viet: 'vưu kỳ' },
    { hanzi: '受到', pinyin: 'shòudào', pos: 'động từ', meaning: 'nhận được', han_viet: 'thụ đáo' },
    { hanzi: '任何', pinyin: 'rènhé', pos: 'đại từ', meaning: 'bất cứ, bất kỳ', han_viet: 'nhiệm hà' },
    { hanzi: '寄', pinyin: 'jì', pos: 'động từ', meaning: 'gửi', han_viet: 'ký' },
  ],

  sections: [
    {
      kind: 'examples', label: '肯定 · 再说', title: '肯定 (chắc chắn) và 再说 (hơn nữa)',
      intro: '肯定: phó từ = nhất định, không nghi ngờ; tính từ = chắc chắn, rõ ràng, hoặc "thừa nhận, đúng". 再说: động từ = gác lại để giải quyết hay xét sau; liên từ = bổ sung thêm một tình huống cho điều đã nói.',
      groups: [
        { label: '肯定', items: [['您放心，质量肯定不“打折”。', 'Nín fàng xīn, zhìliàng kěndìng bù "dǎ zhé".', 'Chị yên tâm, chất lượng chắc chắn không "giảm giá".'], ['每天喝一点儿葡萄酒，对身体是有好处的。但是不能喝太多，喝太多酒肯定对身体不好。', 'Měi tiān hē yìdiǎnr pútaojiǔ, duì shēntǐ shì yǒu hǎochù de. Dànshì bù néng hē tài duō, hē tài duō jiǔ kěndìng duì shēntǐ bù hǎo.', 'Mỗi ngày uống chút rượu vang tốt cho cơ thể. Nhưng không uống nhiều, uống nhiều chắc chắn hại sức khỏe.'], ['不能肯定的事、没发生过的事，最好不要说。', 'Bù néng kěndìng de shì, méi fāshēng guo de shì, zuìhǎo búyào shuō.', 'Chuyện không chắc chắn, chưa từng xảy ra thì tốt nhất đừng nói.']] },
        { label: '再说', items: [['现在的事，做了再说；以后的事，以后再说。', 'Xiànzài de shì, zuòle zàishuō; yǐhòu de shì, yǐhòu zàishuō.', 'Việc bây giờ làm trước rồi tính; việc sau này để sau tính.'], ['今天买的东西太多了。再说，这个月家里已经花了五千多了。', 'Jīntiān mǎi de dōngxi tài duō le. Zàishuō, zhège yuè jiā li yǐjīng huāle wǔqiān duō le.', 'Hôm nay mua quá nhiều. Hơn nữa tháng này nhà đã tiêu hơn năm nghìn.'], ['晚上八点的，不用急，再说，我就去几天，不用带多少东西。', 'Wǎnshang bā diǎn de, búyòng jí, zàishuō, wǒ jiù qù jǐ tiān, búyòng dài duōshao dōngxi.', '8 giờ tối, không cần vội, hơn nữa tôi chỉ đi vài ngày, không cần mang nhiều đồ.']] },
      ],
    },
    {
      kind: 'examples', label: '实际 · 对…来说', title: '实际 (thực tế) và 对……来说 (đối với…)',
      intro: '实际: danh từ = sự vật/tình huống tồn tại khách quan; tính từ = thực tế, cụ thể; 实际上 là phó từ "trong thực tế", thường mang nghĩa chuyển ý. 对……来说: nhìn nhận vấn đề từ góc độ nào đó.',
      groups: [
        { label: '实际', items: [['你们做计划应该联系实际。', 'Nǐmen zuò jìhuà yīnggāi liánxì shíjì.', 'Các bạn lập kế hoạch nên gắn với thực tế.'], ['我认为不会，实际工作能让我更理解书本上的知识。', 'Wǒ rènwéi bú huì, shíjì gōngzuò néng ràng wǒ gèng lǐjiě shūběn shang de zhīshi.', 'Tôi nghĩ không, công việc thực tế giúp tôi hiểu rõ hơn kiến thức trong sách.'], ['要想别人对你好，你得先对别人好。实际上，我们很多人做不到这一点。', 'Yào xiǎng biérén duì nǐ hǎo, nǐ děi xiān duì biérén hǎo. Shíjìshang, wǒmen hěn duō rén zuò bú dào zhè yì diǎn.', 'Muốn người khác tốt với mình phải tốt với họ trước. Thực ra nhiều người không làm được điều này.']] },
        { label: '对……来说', items: [['对我来说，衣服的样子流行不流行并不是很重要。', 'Duì wǒ lái shuō, yīfu de yàngzi liúxíng bu liúxíng bìng bú shì hěn zhòngyào.', 'Với tôi, kiểu dáng quần áo có thịnh hành hay không không quan trọng.'], ['对一个女人来说，漂亮、聪明都很重要，但其实更重要的是快乐。', 'Duì yí ge nǚrén lái shuō, piàoliang, cōngming dōu hěn zhòngyào, dàn qíshí gèng zhòngyào de shì kuàilè.', 'Với phụ nữ, đẹp và thông minh đều quan trọng nhưng quan trọng hơn là vui vẻ.'], ['一杯水，对一条小鱼来说，可能很有帮助；但是，对一条大鱼来说，一杯水是没有什么帮助的，它需要的是一条河。', 'Yì bēi shuǐ, duì yì tiáo xiǎo yú lái shuō, kěnéng hěn yǒu bāngzhù; dànshì, duì yì tiáo dà yú lái shuō, yì bēi shuǐ shì méiyǒu shénme bāngzhù de, tā xūyào de shì yì tiáo hé.', 'Một cốc nước với con cá nhỏ có thể có ích; nhưng với con cá lớn thì không ích gì, nó cần một con sông.']] },
      ],
    },
    {
      kind: 'examples', label: '尤其 – 特别', title: '尤其 và so sánh với 特别',
      intro: '尤其: phó từ, mức độ tăng thêm; vế đầu nêu tình huống tổng thể, vế sau dùng 尤其 chỉ khía cạnh nổi bật nhất. Giống 特别: đều là phó từ chỉ khía cạnh nổi bật trong tổng thể, thường đứng ở nửa sau câu. Khác: sau 尤其 có thể có hoặc không có 是, sau 特别 thường có 是; 特别 còn nghĩa "vô cùng, rất" (尤其 không có); 特别 còn là tính từ "đặc biệt, khác thường" (尤其 không).',
      groups: [{ label: 'Ví dụ', items: [['您女儿真可爱，长得真像您，尤其是眼睛。', 'Nín nǚ\'ér zhēn kě\'ài, zhǎng de zhēn xiàng nín, yóuqí shì yǎnjing.', 'Con gái bạn đáng yêu thật, giống bạn, nhất là đôi mắt.'], ['现在网上购物变得越来越流行了，年轻人尤其喜欢在网上买东西。', 'Xiànzài wǎng shang gòu wù biàn de yuè lái yuè liúxíng le, niánqīng rén yóuqí xǐhuan zài wǎng shang mǎi dōngxi.', 'Giờ mua sắm trực tuyến ngày càng phổ biến, giới trẻ đặc biệt thích.'], ['我对音乐很感兴趣，尤其/特别是贝多芬的音乐，我喜欢极了。', 'Wǒ duì yīnyuè hěn gǎn xìngqù, yóuqí/tèbié shì Bèiduōfēn de yīnyuè, wǒ xǐhuan jí le.', 'Tôi rất thích âm nhạc, nhất là nhạc của Beethoven.'], ['那本小说讲了一个爱情故事，很浪漫，让人特别感动。', 'Nà běn xiǎoshuō jiǎngle yí ge àiqíng gùshi, hěn làngmàn, ràng rén tèbié gǎndòng.', 'Cuốn tiểu thuyết kể chuyện tình lãng mạn, khiến người ta rất cảm động.']] }],
    },
    {
      kind: 'examples', label: 'Từ cùng chữ: 准', title: 'Những từ có chữ giống nhau: 准',
      intro: '准时 (đúng giờ), 准备 (chuẩn bị), 标准 (tiêu chuẩn).',
      groups: [{ label: 'Ví dụ', items: [['明天早上八点半在东门见，别迟到啊！ 放心吧，我一定准时到。', 'Míngtiān zǎoshang bā diǎn bàn zài dōngmén jiàn, bié chídào a! Fàng xīn ba, wǒ yídìng zhǔnshí dào.', '8 giờ rưỡi sáng mai gặp ở cổng đông, đừng muộn nhé! Yên tâm, tôi chắc chắn đến đúng giờ.'], ['同学们正在教室里学习，准备下星期的考试。', 'Tóngxuémen zhèngzài jiàoshì li xuéxí, zhǔnbèi xià xīngqī de kǎoshì.', 'Các bạn đang học trong lớp, chuẩn bị cho kỳ thi tuần sau.'], ['幸福的标准是不同的。有人觉得有房子和汽车就是幸福，有人认为找到真正的爱情就是幸福。', 'Xìngfú de biāozhǔn shì bù tóng de. Yǒu rén juéde yǒu fángzi hé qìchē jiù shì xìngfú, yǒu rén rènwéi zhǎodào zhēnzhèng de àiqíng jiù shì xìngfú.', 'Tiêu chuẩn hạnh phúc khác nhau. Có người cho có nhà có xe là hạnh phúc, có người cho tìm được tình yêu thật mới là hạnh phúc.']] }],
    },
  ],

  notes: [
    { title: '肯定', body: 'Phó từ: nhất định, không nghi ngờ (质量肯定不“打折”). Tính từ: chắc chắn, rõ ràng (不能肯定的事); còn nghĩa "thừa nhận, đúng" (回答都是肯定的).', say: '质量肯定不打折' },
    { title: '再说', body: 'Động từ: gác lại việc để xử lý sau (做了再说). Liên từ: bổ sung thêm tình huống cho điều đã nói (今天买的东西太多了。再说，这个月已经花了五千多了).', say: '再说，这个月家里已经花了五千多了' },
    { title: '实际 / 实际上', body: 'Danh từ: sự thật khách quan (联系实际). Tính từ: thực tế, cụ thể. 实际上: phó từ "trong thực tế", thường mang nghĩa chuyển ý.', say: '实际上，很多东西并不像广告上说的那么好' },
    { title: '对……来说', body: 'Dùng để nhìn nhận vấn đề từ một góc độ: 对我来说，衣服的样子流行不流行并不是很重要。', say: '对我来说，衣服的样子并不是很重要' },
    { title: '尤其', body: 'Phó từ chỉ mức độ tăng thêm: vế đầu nêu tình hình chung, vế sau 尤其 nêu khía cạnh nổi bật nhất. 年轻人尤其喜欢在网上买东西。', say: '年轻人尤其喜欢在网上买东西' },
    { title: 'Văn hóa: 一分钱一分货', body: 'Tiền nào của nấy — một đồng một món hàng; chất lượng thường tỷ lệ với giá. Câu này sẽ được học kỹ hơn ở bài 6.', say: '一分钱一分货' },
  ],

  writeChars: ['沙', '发', '折', '价', '格', '质', '邀', '请'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa',
      items: [
        { q: '沙发的价格和质量怎么样？', hint: '现在正在打折，比平时便宜了一千块；质量肯定不“打折”。' },
        { q: '王静决定买哪个沙发？为什么？', hint: '蓝色的，因为看上去不错。' },
        { q: '王静为什么想买冰箱？', hint: '因为家里的冰箱太旧了，制冷效果也不太好。' },
        { q: '李进开始为什么不同意买冰箱？后来为什么又同意了？', hint: '因为今天买的东西太多、这个月已花了五千多；后来同意是因为冰箱实在太旧。' },
        { q: '王静和李进打算给李老师买什么礼物？王静为什么觉得“这种”不错？', hint: '葡萄酒；酒瓶很艺术，而且电视上经常有它的广告。' },
        { q: '为什么不能完全相信广告？', hint: '广告只会介绍优点，却不会说缺点；很多东西并不像广告上说的那么好。' },
        { q: '买衣服要考虑什么？“我”买衣服的标准是什么？', hint: '“只买对的，不买贵的”：自己穿着舒服，质量要好又不能太贵。' },
        { q: '人们为什么喜欢在网上购物？', hint: '东西多又便宜，可以任何时间购买，还能寄到家里。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: hỏi nhau về thói quen mua sắm', hint: '你经常购物吗？你一般在哪儿购物？你在网上买过东西吗？你认为哪些东西适合在网上买？你买衣服的标准是什么？' },
      ],
    },
  ],

  sentences: [
    { parts: ['质量', '肯定', '不', '打', '折'], pinyin: 'Zhìliàng kěndìng bù dǎ zhé.', vi: 'Chất lượng chắc chắn không giảm giá.' },
    { parts: ['今天', '买', '的', '东西', '太', '多', '了', '再说'], pinyin: 'Jīntiān mǎi de dōngxi tài duō le, zàishuō.', vi: 'Hôm nay mua quá nhiều, hơn nữa.' },
    { parts: ['实际上', '很多', '东西', '并', '不', '像', '广告', '说', '的', '那么', '好'], pinyin: 'Shíjìshang hěn duō dōngxi bìng bú xiàng guǎnggào shuō de nàme hǎo.', vi: 'Thực ra nhiều thứ không tốt như quảng cáo nói.' },
    { parts: ['对', '我', '来', '说', '样子', '流行', '不', '流行', '并', '不', '重要'], pinyin: 'Duì wǒ lái shuō yàngzi liúxíng bu liúxíng bìng bù zhòngyào.', vi: 'Với tôi kiểu dáng có thịnh hành hay không không quan trọng.' },
    { parts: ['年轻', '人', '尤其', '喜欢', '在', '网上', '买', '东西'], pinyin: 'Niánqīng rén yóuqí xǐhuan zài wǎng shang mǎi dōngxi.', vi: 'Giới trẻ đặc biệt thích mua đồ trên mạng.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 受到 · B 邀请 · C 考虑 · D 效果 · E 任何. Gõ chữ cái A–E.',
      items: [
        { prompt: '（ ）别人吃饭，最好提前几天联系。', answer: 'B', gloss: '邀请' }, { prompt: '女儿喜欢在电脑上看电影，可我还是更愿意去电影院看，因为我觉得电影院的（ ）更好，那儿更吸引我。', answer: 'D', gloss: '效果' },
        { prompt: '调查发现：购买我们电脑的人中，有75%是因为（ ）我们广告的影响，有11%的人从来没看过我们的广告。', answer: 'A', gloss: '受到' }, { prompt: '我把我的手机号写给你，以后遇到（ ）问题，你都可以和我联系，我会想办法帮你解决。', answer: 'E', gloss: '任何' },
        { prompt: '我认真（ ）了一个晚上，最后还是决定不去那家公司了。', answer: 'C', gloss: '考虑' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 顺便 · B 打折 · C 流行 · D 台 · E 家具. Gõ chữ cái A–E.',
      items: [
        { prompt: '这条红裙子你穿着挺好看的。 不过今年不怎么（ ）这个颜色。', answer: 'C', gloss: '流行' }, { prompt: '小王，又去逛街了？买什么东西了？ 现在正是换季，好多商店都在（ ），你看，这些东西都比平时便宜了一半还多。', answer: 'B', gloss: '打折' },
        { prompt: '我想换一（ ）笔记本电脑，你知道哪种好吗？', answer: 'D', gloss: '台' }, { prompt: '他搬新家了，晚上请老同学们去家里吃饭、（ ）看看他的新房子。', answer: 'A', gloss: '顺便' },
        { prompt: '咱们这些（ ）都旧了，这次搬家，我们换新的。', answer: 'E', gloss: '家具' },
      ],
    },
    {
      title: 'Giáo trình 比一比 · 尤其 / 特别 (gõ từ)',
      hint: 'Gõ 尤其 hoặc 特别 theo đáp án sách.',
      items: [
        { prompt: '这家饭馆的面味道很（ ），在当地非常受欢迎。', answer: '特别', gloss: '特别' },
        { prompt: '她换上了新买的那双鞋，穿了一条裙子，看上去（ ）好看，又说又笑，好像变了一个人。', answer: '特别', gloss: '特别' },
        { prompt: '现在对历史感兴趣的人越来越少了，所以我写了几本书，希望能引起人们的注意，（ ）年轻人。', answer: '尤其', gloss: '尤其' },
      ],
    },
    {
      title: 'Giáo trình 扩展 · 准时 / 准备 / 标准 (gõ từ)',
      hint: 'Gõ 准时, 准备 hoặc 标准.',
      items: [
        { prompt: '美女的（ ）一直在变，但是不管什么时候，最重要的都是健康。', answer: '标准', gloss: '标准' },
        { prompt: '现在有个通知，十一月七日上午八点在图书馆三楼会议室开会，希望大家（ ）参加。', answer: '准时', gloss: '准时' },
        { prompt: '各位乘客，前方到站是西直门。换乘车站乘客较多，请下车的乘客提前做好（ ）。', answer: '准备', gloss: '准备' },
      ],
    },
  ],
}
