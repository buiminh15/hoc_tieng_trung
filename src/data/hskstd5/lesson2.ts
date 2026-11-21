import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 5 (Thượng), Bài 2: 留串钥匙给父母 (sách trang 21–27).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách; dịch bài khóa do app tự thêm.
 * Không có file nghe trong thư mục. Bài tập: 做一做/练习/扩展, đáp án theo "HSK5-BH1" trang 2–3.
 */

export const hskStd5Lesson2: Lesson = {
  id: 2,
  title: 'Để chùm chìa khóa cho bố mẹ',
  hanzi: '留串钥匙给父母',
  pinyin: 'Liú chuàn yàoshi gěi fùmǔ',
  vi: 'Để chùm chìa khóa cho bố mẹ',
  intro: 'Tình cảm của cha mẹ với con cái. Học 以来, 临, 立刻, 悄悄 (so với 偷偷) và từ xưng hô họ hàng.',

  dialogue: [
    { who: 'A', name: '课文', hanzi: '父母一辈子住在农村老家，对老屋的感情，就像没断奶的孩子对母亲一样。因此长年以来，父母很少离开老屋，尽管姥姥、舅舅和姑姑都在城里，父母也坚决不在城里住。', pinyin: 'Fùmǔ yíbèizi zhù zài nóngcūn lǎojiā, duì lǎowū de gǎnqíng, jiù xiàng méi duàn nǎi de háizi duì mǔqin yíyàng. Yīncǐ cháng nián yǐlái, fùmǔ hěn shǎo líkāi lǎowū, jǐnguǎn lǎolao, jiùjiu hé gūgu dōu zài chéng li, fùmǔ yě jiānjué bú zài chéng li zhù.', vi: 'Cha mẹ cả đời sống ở quê, tình cảm với căn nhà cũ giống như đứa trẻ chưa cai sữa với mẹ. Vì thế nhiều năm nay cha mẹ ít khi rời nhà cũ, dù bà ngoại, cậu và cô đều ở thành phố, cha mẹ vẫn kiên quyết không ở thành phố.' },
    { who: 'A', name: '课文', hanzi: '去年，在我和妻子的努力下，我们终于用打工挣的钱，在县里买了一套新房。新房装修完，父母第一次走进新房时，高兴得不得了。妻子提出留一串钥匙给父母，可他们拒绝了。那天，父亲喝醉了，等他醒时，天色已晚。我和妻子强烈留父母在新房住一夜，第二天再回，但他们仍坚持坐上了最后一趟回老家的车。', pinyin: 'Qùnián, zài wǒ hé qīzi de nǔlì xià, wǒmen zhōngyú yòng dǎ gōng zhèng de qián, zài xiàn li mǎile yí tào xīnfáng. Xīnfáng zhuāngxiū wán, fùmǔ dì-yī cì zǒujìn xīnfáng shí, gāoxìng de bùdéliǎo. Qīzi tíchū liú yí chuàn yàoshi gěi fùmǔ, kě tāmen jùjué le. Nà tiān, fùqin hēzuì le, děng tā xǐng shí, tiānsè yǐ wǎn. Wǒ hé qīzi qiángliè liú fùmǔ zài xīnfáng zhù yí yè, dì-èr tiān zài huí, dàn tāmen réng jiānchí zuòshàngle zuìhòu yí tàng huí lǎojiā de chē.', vi: 'Năm ngoái, nhờ nỗ lực của tôi và vợ, chúng tôi cuối cùng dùng tiền đi làm thuê dành dụm mua được một căn nhà mới trong huyện. Sửa sang xong, lần đầu cha mẹ bước vào nhà mới, vui khôn xiết. Vợ đề nghị để lại một chùm chìa khóa cho cha mẹ nhưng họ từ chối. Hôm đó cha uống say, đến khi tỉnh trời đã tối. Vợ chồng tôi hết sức giữ cha mẹ ở lại nhà mới một đêm, hôm sau về, nhưng họ vẫn khăng khăng lên chuyến xe cuối cùng về quê.' },
    { who: 'A', name: '课文', hanzi: '一段时间后，我和妻子又准备去外地打工，新房只能上锁空着。临走那天，父亲从老家赶来送我们。父亲悄悄把我拉到一边说：“你妈说了，你还是留一串新房的钥匙给我们，要是我和你妈什么时候想来了，就来住上几天，顺便给你们晒晒被子，打扫打扫卫生。”父亲说这话时，轻声细语，还红着脸，像个害羞的孩子。', pinyin: 'Yí duàn shíjiān hòu, wǒ hé qīzi yòu zhǔnbèi qù wàidì dǎ gōng, xīnfáng zhǐ néng shàng suǒ kōngzhe. Lín zǒu nà tiān, fùqin cóng lǎojiā gǎnlái sòng wǒmen. Fùqin qiāoqiāo bǎ wǒ lā dào yì biān shuō: "Nǐ mā shuō le, nǐ háishi liú yí chuàn xīnfáng de yàoshi gěi wǒmen, yàoshi wǒ hé nǐ mā shénme shíhou xiǎng lái le, jiù lái zhùshang jǐ tiān, shùnbiàn gěi nǐmen shàishai bèizi, dǎsǎo dǎsǎo wèishēng." Fùqin shuō zhè huà shí, qīngshēng-xìyǔ, hái hóngzhe liǎn, xiàng ge hàixiū de háizi.', vi: 'Một thời gian sau, vợ chồng tôi lại chuẩn bị đi làm xa, nhà mới đành khóa bỏ trống. Hôm sắp đi, cha từ quê tới tiễn. Cha lặng lẽ kéo tôi sang một bên: "Mẹ con nói rồi, con vẫn để lại cho bố mẹ một chùm chìa khóa nhà mới, nếu bố mẹ lúc nào muốn đến thì đến ở vài ngày, tiện phơi chăn, dọn dẹp giúp các con." Lúc nói câu này, cha nói nhỏ nhẹ, còn đỏ mặt như đứa trẻ thẹn thùng.' },
    { who: 'A', name: '课文', hanzi: '转眼又是半年，我们回家时是一个深冬的夜里。下了长途车，儿子被冻得大哭。我和妻子想象着打开家门满是灰尘、冷冷清清的景象，觉得心里发寒。来到楼下，抬头一看，却发现自家亮着灯光。上了楼，开门的竟是微笑着的父母，温暖的气息立刻扑面而来：室内打扫得干干净净，暖气开着，水已温热，卧室床上的被子已铺好，厨房里飘来阵阵饭菜香……', pinyin: 'Zhuǎnyǎn yòu shì bàn nián, wǒmen huí jiā shí shì yí ge shēndōng de yè li. Xiàle chángtú chē, érzi bèi dòng de dà kū. Wǒ hé qīzi xiǎngxiàngzhe dǎkāi jiāmén mǎn shì huīchén, lěnglěng-qīngqīng de jǐngxiàng, juéde xīn li fāhán. Láidào lóu xià, táitóu yí kàn, què fāxiàn zìjiā liàngzhe dēngguāng. Shàngle lóu, kāi mén de jìng shì wēixiàozhe de fùmǔ, wēnnuǎn de qìxī lìkè pūmiàn ér lái: shìnèi dǎsǎo de gāngān-jìngjìng, nuǎnqì kāizhe, shuǐ yǐ wēnrè, wòshì chuáng shang de bèizi yǐ pū hǎo, chúfáng li piāolái zhènzhèn fàncài xiāng……', vi: 'Thoắt cái đã nửa năm, chúng tôi về nhà vào một đêm giữa đông. Xuống xe đường dài, con trai bị lạnh khóc lớn. Vợ chồng tôi tưởng tượng cảnh mở cửa nhà đầy bụi bặm, lạnh lẽo, trong lòng thấy lạnh. Đến dưới lầu ngẩng nhìn, lại thấy nhà mình sáng đèn. Lên lầu, người mở cửa lại là cha mẹ đang mỉm cười, hơi ấm lập tức phả vào mặt: trong nhà quét dọn sạch sẽ, lò sưởi bật, nước đã ấm, chăn trên giường phòng ngủ đã trải sẵn, trong bếp thoảng mùi cơm thơm……' },
    { who: 'A', name: '课文', hanzi: '父亲说：“你妈昨天接到电话，知道你们今晚回来，今天来新房忙了一天了。”原来父母要我留下串钥匙，只是为了让我们回来时，能立刻感受到家的温暖！我鼻子一酸，流下了热泪……', pinyin: 'Fùqin shuō: "Nǐ mā zuótiān jiēdào diànhuà, zhīdào nǐmen jīn wǎn huílai, jīntiān lái xīnfáng mángle yì tiān le." Yuánlái fùmǔ yào wǒ liúxià chuàn yàoshi, zhǐshì wèile ràng wǒmen huílai shí, néng lìkè gǎnshòu dào jiā de wēnnuǎn! Wǒ bízi yì suān, liúxiàle rè lèi……', vi: 'Cha nói: "Mẹ con hôm qua nhận điện thoại biết tối nay các con về, hôm nay đã đến nhà mới bận cả ngày." Hóa ra cha mẹ bắt tôi để lại chùm chìa khóa chỉ để lúc chúng tôi về có thể lập tức cảm nhận hơi ấm của gia đình! Tôi chua xót nơi sống mũi, nước mắt nóng tuôn rơi……' },
  ],
  dialogueTip: '<b>……以来</b>: từ… đến nay. <b>临</b>: gần, sắp (临走). <b>立刻</b>: lập tức. <b>悄悄</b>: lặng lẽ (tiếng nhỏ); <b>偷偷</b>: lén (không muốn ai biết).',
  slowSay: '留串钥匙给父母',

  vocab: [
    { hanzi: '串', pinyin: 'chuàn', pos: 'lượng từ', meaning: 'xâu, chuỗi, đời', han_viet: 'xuyến' },
    { hanzi: '一辈子', pinyin: 'yíbèizi', pos: 'danh từ', meaning: 'suốt đời, cả đời', han_viet: 'nhất bối tử' },
    { hanzi: '农村', pinyin: 'nóngcūn', pos: 'danh từ', meaning: 'nông thôn', han_viet: 'nông thôn' },
    { hanzi: '屋(子)', pinyin: 'wū(zi)', pos: 'danh từ', meaning: 'nhà', han_viet: 'ốc' },
    { hanzi: '断', pinyin: 'duàn', pos: 'động từ', meaning: 'cai, dứt', han_viet: 'đoạn' },
    { hanzi: '以来', pinyin: 'yǐlái', pos: 'danh từ', meaning: 'đến nay, bấy lâu', han_viet: 'dĩ lai' },
    { hanzi: '姥姥', pinyin: 'lǎolao', pos: 'danh từ', meaning: 'bà ngoại', han_viet: 'mỗ mỗ' },
    { hanzi: '舅舅', pinyin: 'jiùjiu', pos: 'danh từ', meaning: 'cậu', han_viet: 'cữu cữu' },
    { hanzi: '姑姑', pinyin: 'gūgu', pos: 'danh từ', meaning: 'cô', han_viet: 'cô cô' },
    { hanzi: '坚决', pinyin: 'jiānjué', pos: 'tính từ', meaning: 'kiên quyết', han_viet: 'kiên quyết' },
    { hanzi: '打工', pinyin: 'dǎ gōng', pos: 'động từ', meaning: 'làm thuê, làm công', han_viet: 'đả công' },
    { hanzi: '挣', pinyin: 'zhèng', pos: 'động từ', meaning: 'kiếm (tiền)', han_viet: 'tránh' },
    { hanzi: '县', pinyin: 'xiàn', pos: 'danh từ', meaning: 'huyện', han_viet: 'huyện' },
    { hanzi: '套', pinyin: 'tào', pos: 'lượng từ', meaning: 'bộ, căn, cái', han_viet: 'sáo' },
    { hanzi: '装修', pinyin: 'zhuāngxiū', pos: 'động từ', meaning: 'sửa sang, trang hoàng', han_viet: 'trang tu' },
    { hanzi: '不得了', pinyin: 'bùdéliǎo', pos: 'tính từ', meaning: 'cực kỳ, vô cùng', han_viet: 'bất đắc liễu' },
    { hanzi: '醉', pinyin: 'zuì', pos: 'động từ', meaning: 'say (rượu)', han_viet: 'túy' },
    { hanzi: '强烈', pinyin: 'qiángliè', pos: 'tính từ', meaning: 'mãnh liệt, hết sức', han_viet: 'cường liệt' },
    { hanzi: '夜', pinyin: 'yè', pos: 'danh từ', meaning: 'ban đêm', han_viet: 'dạ' },
    { hanzi: '锁', pinyin: 'suǒ', pos: 'danh từ/động từ', meaning: 'cái khóa; khóa', han_viet: 'tỏa' },
    { hanzi: '临', pinyin: 'lín', pos: 'giới từ', meaning: 'sắp, gần', han_viet: 'lâm' },
    { hanzi: '悄悄', pinyin: 'qiāoqiāo', pos: 'phó từ', meaning: 'lặng lẽ, nhẹ nhàng', han_viet: 'tiễu tiễu' },
    { hanzi: '晒', pinyin: 'shài', pos: 'động từ', meaning: 'phơi', han_viet: 'sái' },
    { hanzi: '被子', pinyin: 'bèizi', pos: 'danh từ', meaning: 'mền, chăn', han_viet: 'bị tử' },
    { hanzi: '长途', pinyin: 'chángtú', pos: 'tính từ', meaning: 'đường dài', han_viet: 'trường đồ' },
    { hanzi: '冻', pinyin: 'dòng', pos: 'động từ', meaning: 'bị cóng, rét', han_viet: 'đống' },
    { hanzi: '想象', pinyin: 'xiǎngxiàng', pos: 'động từ', meaning: 'tưởng tượng', han_viet: 'tưởng tượng' },
    { hanzi: '灰尘', pinyin: 'huīchén', pos: 'danh từ', meaning: 'bụi bặm', han_viet: 'hôi trần' },
    { hanzi: '亮', pinyin: 'liàng', pos: 'tính từ/động từ', meaning: 'sáng; tỏa sáng', han_viet: 'lượng' },
    { hanzi: '微笑', pinyin: 'wēixiào', pos: 'động từ/danh từ', meaning: 'mỉm cười; nụ cười', han_viet: 'vi tiếu' },
    { hanzi: '温暖', pinyin: 'wēnnuǎn', pos: 'tính từ/động từ', meaning: 'ấm áp; sưởi ấm', han_viet: 'ôn noãn' },
    { hanzi: '立刻', pinyin: 'lìkè', pos: 'phó từ', meaning: 'lập tức', han_viet: 'lập khắc' },
    { hanzi: '扑', pinyin: 'pū', pos: 'động từ', meaning: 'bổ nhào, (mùi) phả vào', han_viet: 'phốc' },
    { hanzi: '卧室', pinyin: 'wòshì', pos: 'danh từ', meaning: 'phòng ngủ', han_viet: 'ngọa thất' },
    { hanzi: '铺', pinyin: 'pū', pos: 'động từ', meaning: 'trải', han_viet: 'phô' },
    { hanzi: '飘', pinyin: 'piāo', pos: 'động từ', meaning: 'thoảng đưa, thoang thoảng', han_viet: 'phiêu' },
    { hanzi: '阵', pinyin: 'zhèn', pos: 'lượng từ', meaning: 'trận, cơn, làn', han_viet: 'trận' },
    { hanzi: '感受', pinyin: 'gǎnshòu', pos: 'động từ/danh từ', meaning: 'cảm nhận; sự cảm nhận', han_viet: 'cảm thụ' },
    { hanzi: '流泪', pinyin: 'liú lèi', pos: 'động từ', meaning: 'chảy nước mắt', han_viet: 'lưu lệ' },
  ],

  sections: [
    {
      kind: 'examples', label: '以来', title: '……以来 (từ… đến nay)',
      intro: 'Danh từ: "……以来" chỉ khoảng thời gian từ một lúc trong quá khứ đến hiện tại.',
      groups: [{ label: 'Ví dụ', items: [['改革开放以来，中国发生了巨大的变化。', 'Gǎigé kāifàng yǐlái, Zhōngguó fāshēngle jùdà de biànhuà.', 'Từ cải cách mở cửa đến nay Trung Quốc đã có thay đổi to lớn.'], ['因此长年以来，父母很少离开老屋。', 'Yīncǐ cháng nián yǐlái, fùmǔ hěn shǎo líkāi lǎowū.', 'Vì vậy nhiều năm nay cha mẹ ít rời nhà cũ.'], ['一直以来，“80后”这个词儿都含有年轻的味道。', 'Yìzhí yǐlái, "bālíng hòu" zhège cír dōu hán yǒu niánqīng de wèidào.', 'Bấy lâu nay từ "thế hệ 8X" luôn mang hơi hướng trẻ trung.']] }],
    },
    {
      kind: 'examples', label: '临', title: '临 (gần, sắp)',
      intro: '临: động từ "gần, đối diện"; giới từ "临……(时/前)" chỉ sắp đến lúc một hành động xảy ra.',
      groups: [{ label: 'Ví dụ', items: [['我想买一套不临街的房子，这样不会太吵。', 'Wǒ xiǎng mǎi yí tào bù lín jiē de fángzi, zhèyàng bú huì tài chǎo.', 'Tôi muốn mua căn nhà không sát đường, như vậy không ồn quá.'], ['临江新修了一条路，晚饭后很多人都去那儿散步。', 'Línjiāng xīn xiūle yì tiáo lù, wǎnfàn hòu hěn duō rén dōu qù nàr sàn bù.', 'Ven sông mới làm con đường, sau bữa tối nhiều người ra đó đi dạo.'], ['这是我临离开北京的时候买的。', 'Zhè shì wǒ lín líkāi Běijīng de shíhou mǎi de.', 'Cái này tôi mua lúc sắp rời Bắc Kinh.'], ['临走那天，父亲从老家赶来送我们。', 'Lín zǒu nà tiān, fùqin cóng lǎojiā gǎnlái sòng wǒmen.', 'Hôm sắp đi, cha từ quê vội đến tiễn chúng tôi.']] }],
    },
    {
      kind: 'examples', label: '立刻', title: '立刻 (lập tức)',
      intro: '立刻 + động từ: ngay lập tức, nhấn mạnh hành động sau xảy ra liền sau hành động trước.',
      groups: [{ label: 'Ví dụ', items: [['开门的竟是微笑着的父母，温暖的气息立刻扑面而来。', 'Kāi mén de jìng shì wēixiàozhe de fùmǔ, wēnnuǎn de qìxī lìkè pūmiàn ér lái.', 'Người mở cửa lại là cha mẹ đang mỉm cười, hơi ấm lập tức phả vào mặt.'], ['原来父母要我留下串钥匙，只是为了让我们回来时，能立刻感受到家的温暖！', 'Yuánlái fùmǔ yào wǒ liúxià chuàn yàoshi, zhǐshì wèile ràng wǒmen huílai shí, néng lìkè gǎnshòu dào jiā de wēnnuǎn!', 'Hóa ra cha mẹ bắt để lại chìa khóa chỉ để lúc về cảm nhận ngay hơi ấm gia đình!'], ['那两只羊一见到青草，就立刻去吃草了，哪还有心思打架呢？', 'Nà liǎng zhī yáng yí jiàndào qīngcǎo, jiù lìkè qù chī cǎo le, nǎ hái yǒu xīnsi dǎ jià ne?', 'Hai con dê vừa thấy cỏ xanh là lập tức đi ăn, đâu còn tâm trí đánh nhau?']] }],
    },
    {
      kind: 'examples', label: '悄悄 – 偷偷', title: 'So sánh 悄悄 và 偷偷',
      intro: 'Giống nhau: đều là phó từ, có nghĩa làm việc không để người ta phát hiện (他悄悄/偷偷地走了出去). Khác nhau: 悄悄 nhấn mạnh âm thanh rất nhỏ; 偷偷 nhấn mạnh hành vi không muốn người khác biết.',
      groups: [{ label: 'Ví dụ', items: [['父亲悄悄把我拉到一边说话。', 'Fùqin qiāoqiāo bǎ wǒ lādào yì biān shuō huà.', 'Cha lặng lẽ kéo tôi sang một bên nói chuyện.'], ['他谁也没告诉，偷偷去旅行了。', 'Tā shéi yě méi gàosu, tōutōu qù lǚxíng le.', 'Anh chẳng nói với ai, lén đi du lịch.'], ['别人都不知道，她只是偷偷地把这件事告诉了我。', 'Biérén dōu bù zhīdào, tā zhǐshì tōutōu de bǎ zhè jiàn shì gàosu le wǒ.', 'Người khác đều không biết, cô chỉ lén nói với tôi.']] }],
    },
    {
      kind: 'examples', label: 'Mở rộng: xưng hô', title: 'Xưng hô họ hàng & giao tiếp (扩展)',
      intro: '外公, 姥姥, 姑姑, 舅舅, 老婆, 太太, 兄弟; 小气, 周到, 坦率.',
      groups: [{ label: 'Ví dụ', items: [['妈妈说她哥哥明天会从老家来，我还从来没见过这个舅舅呢。', 'Māma shuō tā gēge míngtiān huì cóng lǎojiā lái, wǒ hái cónglái méi jiànguo zhège jiùjiu ne.', 'Mẹ nói anh trai mẹ mai từ quê lên, tôi chưa từng gặp cậu này.'], ['坦率地说，我觉得你不应该这么做。', 'Tǎnshuài de shuō, wǒ juéde nǐ bù yīnggāi zhème zuò.', 'Nói thẳng, tôi thấy bạn không nên làm vậy.'], ['你怎么这么小气啊？好朋友借点儿钱都不愿意。', 'Nǐ zěnme zhème xiǎoqi a? Hǎo péngyou jiè diǎnr qián dōu bú yuànyì.', 'Sao bạn keo kiệt thế? Bạn thân mượn chút tiền cũng không chịu.']] }],
    },
  ],

  notes: [
    { title: '以来', body: 'Danh từ chỉ khoảng thời gian từ quá khứ đến nay: 改革开放以来, 长年以来.', say: '因此长年以来，父母很少离开老屋' },
    { title: '临', body: 'Động từ: gần, đối diện (临街); giới từ: sắp (临走, 临离开).', say: '临走那天，父亲从老家赶来送我们' },
    { title: '立刻', body: 'Phó từ + động từ: lập tức.', say: '温暖的气息立刻扑面而来' },
    { title: '悄悄 / 偷偷', body: '悄悄 nhấn mạnh tiếng rất nhỏ; 偷偷 nhấn mạnh hành vi không muốn ai biết.', say: '父亲悄悄把我拉到一边说' },
  ],

  writeChars: ['串', '钥', '匙', '装', '修', '锁', '临', '晒'],

  drills: [],

  qa: [
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: '你同意“父母对子女的爱是无私和伟大的”这种说法吗？', hint: '我同意/不同意，因为……' },
        { q: '你觉得课文中的这对父母一开始拒绝接受孩子新房钥匙的原因是什么？', hint: '他们不想给孩子添麻烦……' },
        { q: '请说说你记得最清楚的父母关心你、爱你的一件事。', hint: '有一次……' },
      ],
    },
  ],

  sentences: [
    { parts: ['父母', '坚决', '不', '在', '城里', '住'], pinyin: 'Fùmǔ jiānjué bú zài chéng li zhù.', vi: 'Cha mẹ kiên quyết không ở thành phố.' },
    { parts: ['临', '走', '那天', '父亲', '从', '老家', '赶来', '送', '我们'], pinyin: 'Lín zǒu nà tiān, fùqin cóng lǎojiā gǎnlái sòng wǒmen.', vi: 'Hôm sắp đi cha từ quê vội đến tiễn.' },
    { parts: ['温暖', '的', '气息', '立刻', '扑面', '而来'], pinyin: 'Wēnnuǎn de qìxī lìkè pūmiàn ér lái.', vi: 'Hơi ấm lập tức phả vào mặt.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 1 · Điền từ',
      hint: 'Gõ chữ Hán theo đáp án sách.',
      items: [
        { prompt: '你觉得我穿这（ ）西服去电视台参加节目怎么样？', answer: '套', gloss: 'bộ' },
        { prompt: '我不能（ ）她喝醉了会是什么样子。', answer: '想象', gloss: 'tưởng tượng' },
        { prompt: '国际（ ）电话很贵，现在我们一般上网聊天儿。', answer: '长途', gloss: 'đường dài' },
        { prompt: '因为同学们（ ）要求，我们决定这个周末出去活动。', answer: '强烈', gloss: 'mãnh liệt' },
        { prompt: '房门被反（ ）上了，他从窗户里跳出来，把腿摔断了。', answer: '锁', gloss: 'khóa' },
        { prompt: '暑假的时候我想去（ ）两个月工，挣点儿钱。', answer: '打', gloss: 'làm thuê' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Chọn đáp án',
      hint: 'Gõ từ đúng theo đáp án sách.',
      items: [
        { prompt: '他的态度很（ ），恐怕不会改变主意了。 (坚决/坚持)', answer: '坚决', gloss: 'kiên quyết' },
        { prompt: '只有一个星期了，春节（ ）就要到了。 (立刻/马上)', answer: '马上', gloss: 'sắp' },
        { prompt: '最近气温太低，河里的水都被（ ）住了。 (冻/冷)', answer: '冻', gloss: 'đóng băng' },
        { prompt: '女服务员给了我一个（ ）的微笑。 (暖和/温暖)', answer: '温暖', gloss: 'ấm áp' },
      ],
    },
    {
      title: 'Giáo trình 做一做 & 扩展',
      hint: 'Gõ từ đúng theo đáp án sách.',
      items: [
        { prompt: '考试已经开始了，他才（ ）走进来。 (悄悄/偷偷)', answer: '悄悄', gloss: 'lặng lẽ' },
        { prompt: '孩子睡着了，爸爸在妈妈耳边（ ）说了几句话。', answer: '悄悄', gloss: 'lặng lẽ' },
        { prompt: '别人都不知道，她只是（ ）地把这件事告诉了我。', answer: '偷偷', gloss: 'lén' },
        { prompt: '妈妈说她哥哥明天会从老家来，我还从来没见过这个（ ）呢。', answer: '舅舅', gloss: 'cậu' },
        { prompt: '（ ）地说，我觉得你不应该这么做。', answer: '坦率', gloss: 'thẳng thắn' },
        { prompt: '你怎么这么（ ）啊？好朋友借点儿钱都不愿意。', answer: '小气', gloss: 'keo kiệt' },
        { prompt: '你们照顾得非常（ ），非常感谢！', answer: '周到', gloss: 'chu đáo' },
      ],
    },
  ],
}
