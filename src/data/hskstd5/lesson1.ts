import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 5 (Thượng), Bài 1: 爱的细节 (sách trang 14–20).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách; dịch bài khóa do app tự thêm.
 * Không có file nghe trong thư mục. Bài tập: 做一做/练习/扩展, đáp án theo "HSK5-BH1" trang 1–2.
 */

export const hskStd5Lesson1: Lesson = {
  id: 1,
  title: 'Những điều nhỏ nhặt trong tình yêu',
  hanzi: '爱的细节',
  pinyin: 'Ài de xìjié',
  vi: 'Những điều nhỏ nhặt trong tình yêu',
  intro: 'Đài phát thanh bình chọn cặp vợ chồng ân ái nhất. Học 如何 (so với 怎么), 靠, 居然 và các từ chỉ bộ phận cơ thể.',

  dialogue: [
    { who: 'A', name: '课文', hanzi: '电台要选出一对最恩爱的夫妻。对比后，有三对夫妻入围。评委叫第一对夫妻说说他俩是如何恩爱的。妻子说，前几年她全身瘫痪了，医生说她站起来的可能性很小。别人都觉得她的丈夫会跟她离婚，她也想过要自杀。但丈夫一直鼓励她，为她不知找了多少家医院，并且几年如一日地照顾她，从不抱怨。在丈夫的爱护和努力下，她终于又站了起来。她的故事十分感人，评委们听了都很感动。', pinyin: "Diàntái yào xuǎn chū yí duì zuì ēn'ài de fūqī. Duìbǐ hòu, yǒu sān duì fūqī rùwéi. Píngwěi jiào dì-yī duì fūqī shuōshuo tāliǎ shì rúhé ēn'ài de. Qīzi shuō, qián jǐ nián tā quánshēn tānhuàn le, yīshēng shuō tā zhàn qilai de kěnéngxìng hěn xiǎo. Biérén dōu juéde tā de zhàngfu huì gēn tā líhūn, tā yě xiǎngguo yào zìshā. Dàn zhàngfu yìzhí gǔlì tā, wèi tā bù zhī zhǎole duōshao jiā yīyuàn, bìngqiě jǐ nián rú yí rì de zhàogù tā, cóng bù bàoyuàn. Zài zhàngfu de àihù hé nǔlì xià, tā zhōngyú yòu zhàn qilai le. Tā de gùshi shífēn gǎnrén, píngwěimen tīngle dōu hěn gǎndòng.", vi: 'Đài phát thanh muốn chọn ra cặp vợ chồng ân ái nhất. Sau khi so sánh có ba cặp lọt vào vòng trong. Ban giám khảo mời cặp thứ nhất nói họ ân ái thế nào. Người vợ kể mấy năm trước chị bị liệt toàn thân, bác sĩ nói khả năng đứng dậy rất nhỏ. Ai cũng nghĩ chồng sẽ ly hôn, chị cũng từng nghĩ đến tự tử. Nhưng chồng luôn động viên, tìm không biết bao nhiêu bệnh viện, mấy năm như một ngày chăm sóc, chưa từng oán trách. Nhờ sự yêu thương và nỗ lực của chồng, chị cuối cùng đã đứng dậy được. Câu chuyện rất cảm động, ban giám khảo nghe đều xúc động.', scene: 'Cặp thứ nhất' },
    { who: 'A', name: '课文', hanzi: '随后进来的是第二对夫妻，他俩说，十几年的婚姻生活中，他们从来没为任何事红过脸、吵过架，一直相亲相爱、相敬如宾。评委们听了暗暗点头。', pinyin: "Suíhòu jìnlái de shì dì-èr duì fūqī, tāliǎ shuō, shí jǐ nián de hūnyīn shēnghuó zhōng, tāmen cónglái méi wèi rènhé shì hóngguo liǎn, chǎoguo jià, yìzhí xiāngqīn-xiāng'ài, xiāngjìng-rúbīn. Píngwěimen tīngle àn'àn diǎntóu.", vi: 'Tiếp theo vào là cặp thứ hai, họ nói trong mười mấy năm hôn nhân chưa từng vì chuyện gì mà đỏ mặt, cãi nhau, luôn thương yêu và kính trọng nhau như khách. Ban giám khảo nghe âm thầm gật đầu.', scene: 'Cặp thứ hai' },
    { who: 'A', name: '课文', hanzi: '轮到第三对夫妻了，却很长时间不见人。评委们等得有些不耐烦，就走出来看个究竟。只见第三对夫妻仍然坐在门口，男人的头靠在女人的肩膀上，睡着了。一个评委要上前喊醒那个男的，女的却伸出手指做了个小声的动作，然后小心地从包里拿出纸笔，用左手歪歪扭扭写下一行字递给评委，而她的右肩一直让丈夫的脑袋靠着。评委们看那纸条上面写着：别出声，他昨晚没睡好。一个评委提起笔在后面续写了一句话：但是女士，我们得听听你们夫妻俩的叙述啊！女人又写：那我们就不参加了。', pinyin: 'Lúndào dì-sān duì fūqī le, què hěn cháng shíjiān bú jiàn rén. Píngwěimen děng de yǒuxiē bú nàifán, jiù zǒu chūlai kàn ge jiūjìng. Zhǐ jiàn dì-sān duì fūqī réngrán zuò zài ménkǒu, nánrén de tóu kào zài nǚrén de jiānbǎng shang, shuìzháo le. Yí ge píngwěi yào shàngqián hǎnxǐng nàge nán de, nǚ de què shēnchū shǒuzhǐ zuòle ge xiǎoshēng de dòngzuò, ránhòu xiǎoxīn de cóng bāo li náchū zhǐ bǐ, yòng zuǒshǒu wāiwāi-niǔniǔ xiěxià yì háng zì dìgěi píngwěi, ér tā de yòu jiān yìzhí ràng zhàngfu de nǎodai kàozhe. Píngwěimen kàn nà zhǐtiáo shàngmiàn xiězhe: bié chūshēng, tā zuówǎn méi shuì hǎo. Yí ge píngwěi tíqǐ bǐ zài hòumiàn xùxiěle yí jù huà: dànshì nǚshì, wǒmen děi tīngting nǐmen fūqī liǎ de xùshù a! Nǚrén yòu xiě: nà wǒmen jiù bù cānjiā le.', vi: 'Đến lượt cặp thứ ba nhưng rất lâu không thấy người. Ban giám khảo đợi hơi sốt ruột bèn ra xem rốt cuộc. Chỉ thấy cặp thứ ba vẫn ngồi ở cửa, đầu người đàn ông tựa vào vai người phụ nữ, ngủ rồi. Một giám khảo định tiến lên gọi dậy, người vợ lại giơ ngón tay làm động tác nhỏ tiếng, rồi cẩn thận lấy giấy bút trong túi, dùng tay trái viết nguệch ngoạc một dòng đưa cho giám khảo, còn vai phải vẫn để đầu chồng tựa. Giám khảo thấy tờ giấy viết: đừng lên tiếng, đêm qua anh ấy ngủ không ngon. Một giám khảo cầm bút viết tiếp: nhưng thưa bà, chúng tôi phải nghe lời kể của hai vợ chồng! Người phụ nữ lại viết: vậy chúng tôi không tham gia nữa.', scene: 'Cặp thứ ba' },
    { who: 'A', name: '课文', hanzi: '大家很吃惊，这个女人为了不影响丈夫睡觉，居然放弃这次机会！但评委们还是决定先不催他们，而是再等待一段时间。过了一会儿，男人醒了。评委们问他怎么那么累。男人不好意思地笑笑说：“我家住一楼，蚊子多。昨晚半夜我被蚊子叮醒了，我怕我老婆再被吵醒，所以后半夜就在为她赶蚊子。”', pinyin: 'Dàjiā hěn chī jīng, zhège nǚrén wèile bù yǐngxiǎng zhàngfu shuì jiào, jūrán fàngqì zhè cì jīhuì! Dàn píngwěimen háishi juédìng xiān bù cuī tāmen, érshì zài děngdài yí duàn shíjiān. Guòle yíhuìr, nánrén xǐng le. Píngwěimen wèn tā zěnme nàme lèi. Nánrén bù hǎoyìsi de xiàoxiao shuō: "Wǒ jiā zhù yī lóu, wénzi duō. Zuówǎn bànyè wǒ bèi wénzi dīngxǐng le, wǒ pà wǒ lǎopo zài bèi chǎoxǐng, suǒyǐ hòu bànyè jiù zài wèi tā gǎn wénzi."', vi: 'Mọi người rất ngạc nhiên, người phụ nữ này vì không muốn ảnh hưởng giấc ngủ của chồng mà lại bỏ cơ hội! Nhưng ban giám khảo quyết định chưa thúc giục, mà chờ thêm một lúc. Một lát sau người đàn ông tỉnh dậy. Giám khảo hỏi sao anh mệt thế. Anh ngượng cười nói: "Nhà tôi ở tầng một, muỗi nhiều. Đêm qua nửa đêm tôi bị muỗi đốt tỉnh, sợ vợ cũng bị đánh thức nên nửa đêm sau tôi đuổi muỗi cho cô ấy."', scene: 'Người chồng thức đuổi muỗi' },
    { who: 'A', name: '课文', hanzi: '最后的结果是，电台增加了两项奖项，将第一对夫妻评为“患难与共夫妻”，将第二对夫妻评为“相敬如宾夫妻”，而真正的“最恩爱夫妻”奖，却给了第三对夫妻。', pinyin: "Zuìhòu de jiéguǒ shì, diàntái zēngjiāle liǎng xiàng jiǎngxiàng, jiāng dì-yī duì fūqī píngwéi \"huànnàn yǔ gòng fūqī\", jiāng dì-èr duì fūqī píngwéi \"xiāngjìng-rúbīn fūqī\", ér zhēnzhèng de \"zuì ēn'ài fūqī\" jiǎng, què gěile dì-sān duì fūqī.", vi: 'Kết quả cuối cùng: đài thêm hai giải, xếp cặp thứ nhất là "vợ chồng hoạn nạn có nhau", cặp thứ hai là "vợ chồng tương kính như tân", còn giải "vợ chồng ân ái nhất" thực sự lại trao cho cặp thứ ba.', scene: 'Kết quả' },
  ],
  dialogueTip: '<b>如何</b>: như thế nào (văn viết). <b>靠</b>: tựa, dựa vào, gần. <b>居然</b>: lại có thể (ngoài dự đoán).',
  slowSay: '爱的细节',

  vocab: [
    { hanzi: '细节', pinyin: 'xìjié', pos: 'danh từ', meaning: 'chi tiết', han_viet: 'tế tiết' },
    { hanzi: '电台', pinyin: 'diàntái', pos: 'danh từ', meaning: 'đài phát thanh', han_viet: 'điện đài' },
    { hanzi: '恩爱', pinyin: "ēn'ài", pos: 'tính từ', meaning: 'ân ái, đằm thắm (vợ chồng)', han_viet: 'ân ái' },
    { hanzi: '对比', pinyin: 'duìbǐ', pos: 'động từ', meaning: 'so sánh', han_viet: 'đối tỉ' },
    { hanzi: '入围', pinyin: 'rùwéi', pos: 'động từ', meaning: 'vượt qua sơ tuyển', han_viet: 'nhập vi' },
    { hanzi: '评委', pinyin: 'píngwěi', pos: 'danh từ', meaning: 'ban giám khảo', han_viet: 'bình ủy' },
    { hanzi: '如何', pinyin: 'rúhé', pos: 'đại từ', meaning: 'như thế nào', han_viet: 'như hà' },
    { hanzi: '瘫痪', pinyin: 'tānhuàn', pos: 'động từ', meaning: 'bị liệt', han_viet: 'than hoán' },
    { hanzi: '离婚', pinyin: 'lí hūn', pos: 'động từ', meaning: 'ly hôn', han_viet: 'ly hôn' },
    { hanzi: '自杀', pinyin: 'zìshā', pos: 'động từ', meaning: 'tự tử', han_viet: 'tự sát' },
    { hanzi: '抱怨', pinyin: 'bàoyuàn', pos: 'động từ', meaning: 'oán trách, phàn nàn', han_viet: 'bão oán' },
    { hanzi: '爱护', pinyin: 'àihù', pos: 'động từ', meaning: 'yêu quý, quý trọng', han_viet: 'ái hộ' },
    { hanzi: '婚姻', pinyin: 'hūnyīn', pos: 'danh từ', meaning: 'hôn nhân', han_viet: 'hôn nhân' },
    { hanzi: '吵架', pinyin: 'chǎo jià', pos: 'động từ', meaning: 'cãi nhau', han_viet: 'sảo giá' },
    { hanzi: '相敬如宾', pinyin: 'xiāngjìng rúbīn', pos: 'thành ngữ', meaning: 'tương kính như tân', han_viet: 'tương kính như tân' },
    { hanzi: '暗暗', pinyin: "àn'àn", pos: 'phó từ', meaning: 'thầm, ngấm ngầm', han_viet: 'ám ám' },
    { hanzi: '轮', pinyin: 'lún', pos: 'động từ', meaning: 'luân phiên, thay phiên', han_viet: 'luân' },
    { hanzi: '不耐烦', pinyin: 'bú nàifán', pos: 'tính từ', meaning: 'sốt ruột, bực mình', han_viet: 'bất nại phiền' },
    { hanzi: '靠', pinyin: 'kào', pos: 'động từ', meaning: 'dựa, tựa', han_viet: 'kháo' },
    { hanzi: '肩膀', pinyin: 'jiānbǎng', pos: 'danh từ', meaning: 'bờ vai, vai', han_viet: 'kiên bảng' },
    { hanzi: '喊', pinyin: 'hǎn', pos: 'động từ', meaning: 'kêu, gọi', han_viet: 'hám' },
    { hanzi: '伸', pinyin: 'shēn', pos: 'động từ', meaning: 'duỗi, chìa', han_viet: 'thân' },
    { hanzi: '手指', pinyin: 'shǒuzhǐ', pos: 'danh từ', meaning: 'ngón tay', han_viet: 'thủ chỉ' },
    { hanzi: '歪歪扭扭', pinyin: 'wāiwāiniǔniǔ', pos: 'tính từ', meaning: 'xiêu vẹo, nguệch ngoạc', han_viet: 'oai oai nữu nữu' },
    { hanzi: '递', pinyin: 'dì', pos: 'động từ', meaning: 'đưa, chuyển', han_viet: 'đệ' },
    { hanzi: '脑袋', pinyin: 'nǎodai', pos: 'danh từ', meaning: 'đầu', han_viet: 'não đại' },
    { hanzi: '女士', pinyin: 'nǚshì', pos: 'danh từ', meaning: 'bà, quý bà', han_viet: 'nữ sĩ' },
    { hanzi: '叙述', pinyin: 'xùshù', pos: 'động từ', meaning: 'thuật lại', han_viet: 'tự thuật' },
    { hanzi: '居然', pinyin: 'jūrán', pos: 'phó từ', meaning: '(chỉ sự bất ngờ) lại có thể', han_viet: 'cư nhiên' },
    { hanzi: '催', pinyin: 'cuī', pos: 'động từ', meaning: 'thúc giục, hối thúc', han_viet: 'thôi' },
    { hanzi: '等待', pinyin: 'děngdài', pos: 'động từ', meaning: 'đợi, chờ', han_viet: 'đẳng đãi' },
    { hanzi: '蚊子', pinyin: 'wénzi', pos: 'danh từ', meaning: 'con muỗi', han_viet: 'văn tử' },
    { hanzi: '半夜', pinyin: 'bànyè', pos: 'danh từ', meaning: 'nửa đêm', han_viet: 'bán dạ' },
    { hanzi: '叮', pinyin: 'dīng', pos: 'động từ', meaning: 'đốt, chích', han_viet: 'đinh' },
    { hanzi: '老婆', pinyin: 'lǎopo', pos: 'danh từ', meaning: 'vợ', han_viet: 'lão bà' },
    { hanzi: '吵', pinyin: 'chǎo', pos: 'động từ/tính từ', meaning: 'làm ồn; ồn ào', han_viet: 'sảo' },
    { hanzi: '项', pinyin: 'xiàng', pos: 'lượng từ', meaning: 'hạng mục, mục', han_viet: 'hạng' },
    { hanzi: '患难与共', pinyin: 'huànnàn yǔgòng', pos: 'thành ngữ', meaning: 'hoạn nạn có nhau', han_viet: 'hoạn nạn dữ cộng' },
  ],

  sections: [
    {
      kind: 'examples', label: '如何', title: '如何 (như thế nào)',
      intro: 'Đại từ 如何 dùng để hỏi cách thức; cũng hay đặt cuối câu để xin ý kiến hoặc hỏi tình trạng.',
      groups: [{ label: 'Ví dụ', items: [['我们明天举行会议，讨论这个问题该如何解决。', 'Wǒmen míngtiān jǔxíng huìyì, tǎolùn zhège wèntí gāi rúhé jiějué.', 'Mai chúng ta họp, bàn vấn đề này nên giải quyết thế nào.'], ['评委叫第一对夫妻说说他俩是如何恩爱的。', "Píngwěi jiào dì-yī duì fūqī shuōshuo tāliǎ shì rúhé ēn'ài de.", 'Ban giám khảo mời cặp thứ nhất nói họ ân ái thế nào.'], ['我们希望由你来负责解决这个问题，如何？', 'Wǒmen xīwàng yóu nǐ lái fùzé jiějué zhège wèntí, rúhé?', 'Chúng tôi mong bạn phụ trách giải quyết vấn đề này, thế nào?'], ['“80后”们月收入情况如何？', '"Bālíng hòu" men yuè shōurù qíngkuàng rúhé?', 'Thu nhập hàng tháng của thế hệ 8X thế nào?']] }],
    },
    {
      kind: 'examples', label: '靠', title: '靠 (tựa, dựa, gần)',
      intro: '靠: động từ, thường dạng "靠着/在……": đưa một phần cơ thể dựa vào người/vật; cũng nghĩa "dựa vào, nhờ"; và "gần, sát".',
      groups: [{ label: 'Ví dụ', items: [['王老师喜欢靠着桌子讲课。', 'Wáng lǎoshī xǐhuan kàozhe zhuōzi jiǎng kè.', 'Thầy Vương thích tựa vào bàn để giảng bài.'], ['“在家靠父母，出门靠朋友”，有什么事情我能帮忙的，你们尽管开口。', '"Zài jiā kào fùmǔ, chū mén kào péngyou", yǒu shénme shìqing wǒ néng bāng máng de, nǐmen jǐnguǎn kāi kǒu.', '"Ở nhà nhờ cha mẹ, ra ngoài nhờ bạn", có việc gì tôi giúp được cứ nói.'], ['没有一个人可以完全不靠别人而生活。', 'Méiyǒu yí ge rén kěyǐ wánquán bú kào biérén ér shēnghuó.', 'Không ai có thể sống hoàn toàn không dựa vào người khác.'], ['我的座位是17号，是靠窗的座位。', 'Wǒ de zuòwèi shì shíqī hào, shì kào chuāng de zuòwèi.', 'Chỗ tôi số 17, là chỗ gần cửa sổ.']] }],
    },
    {
      kind: 'examples', label: '居然', title: '居然 (lại có thể, không ngờ)',
      intro: 'Phó từ 居然 nghĩa là không ngờ, ngoài dự đoán.',
      groups: [{ label: 'Ví dụ', items: [['这么简单的题，你居然也不会做？上课时都干什么去了？', 'Zhème jiǎndān de tí, nǐ jūrán yě bú huì zuò? Shàng kè shí dōu gàn shénme qù le?', 'Đề đơn giản thế mà bạn cũng không làm được? Lúc học làm gì thế?'], ['没想到居然在这儿碰到你！你也去上海？', 'Méi xiǎngdào jūrán zài zhèr pèngdào nǐ! Nǐ yě qù Shànghǎi?', 'Không ngờ lại gặp bạn ở đây! Bạn cũng đi Thượng Hải?'], ['这个女人为了不影响丈夫睡觉，居然放弃这次机会！', 'Zhège nǚrén wèile bù yǐngxiǎng zhàngfu shuì jiào, jūrán fàngqì zhè cì jīhuì!', 'Người phụ nữ này vì không muốn ảnh hưởng chồng ngủ mà lại bỏ cơ hội!']] }],
    },
    {
      kind: 'examples', label: '如何 – 怎么', title: 'So sánh 如何 và 怎么',
      intro: 'Giống nhau: đều là đại từ hỏi cách thức. Khác nhau: 如何 dùng nhiều trong văn viết, không dùng để hỏi nguyên nhân, có thể đặt cuối câu hỏi tình trạng/xin ý kiến; 怎么 dùng được trong khẩu ngữ, hỏi được nguyên nhân, đặt đầu câu biểu thị ngạc nhiên.',
      groups: [{ label: 'Ví dụ', items: [['只有知道如何/怎么停止的人，才知道如何/怎么高速前进。', 'Zhǐyǒu zhīdào rúhé/zěnme tíngzhǐ de rén, cái zhīdào rúhé/zěnme gāosù qiánjìn.', 'Chỉ người biết dừng thế nào mới biết tiến nhanh thế nào.'], ['该如何爱护我们的地球？', 'Gāi rúhé àihù wǒmen de dìqiú?', 'Nên bảo vệ Trái Đất của chúng ta thế nào?'], ['今天怎么这么冷？', 'Jīntiān zěnme zhème lěng?', 'Hôm nay sao lạnh thế?'], ['最近身体如何？', 'Zuìjìn shēntǐ rúhé?', 'Dạo này sức khỏe thế nào?']] }],
    },
    {
      kind: 'examples', label: 'Mở rộng: cơ thể', title: 'Từ vựng về cơ thể (扩展)',
      intro: '脑袋, 脖子, 肩膀, 胸, 腰, 后背, 手指, 眉毛, 嗓子, 牙齿.',
      groups: [{ label: 'Ví dụ', items: [['你的肩膀好像一边高一边低，我建议你去买个双肩包。', 'Nǐ de jiānbǎng hǎoxiàng yì biān gāo yì biān dī, wǒ jiànyì nǐ qù mǎi ge shuāngjiānbāo.', 'Vai bạn hình như bên cao bên thấp, tôi khuyên bạn mua balo hai quai.'], ['早上起来，伸个懒腰，真舒服！', 'Zǎoshang qǐlai, shēn ge lǎnyāo, zhēn shūfu!', 'Sáng dậy vươn vai, thật dễ chịu!'], ['他长着两条又黑又粗的眉毛，一双大大的眼睛。', 'Tā zhǎngzhe liǎng tiáo yòu hēi yòu cū de méimao, yì shuāng dàdà de yǎnjing.', 'Anh có hai hàng lông mày đen đậm và đôi mắt to.']] }],
    },
  ],

  notes: [
    { title: '如何', body: 'Đại từ hỏi cách thức (văn viết); đặt cuối câu để xin ý kiến hoặc hỏi tình trạng.', say: '该如何爱护我们的地球' },
    { title: '靠', body: 'Dựa, tựa (靠着桌子); nhờ vào (靠父母); gần, sát (靠窗的座位).', say: '男人的头靠在女人的肩膀上' },
    { title: '居然', body: 'Phó từ chỉ sự bất ngờ, ngoài dự đoán.', say: '她居然放弃了这次机会' },
    { title: 'Thành ngữ trong bài', body: '相敬如宾: vợ chồng kính trọng nhau như khách; 患难与共: cùng chia sẻ hoạn nạn; 几年如一日: mấy năm như một ngày.', say: '相敬如宾' },
  ],

  writeChars: ['恩', '婚', '姻', '肩', '膀', '催', '叮', '吵'],

  drills: [],

  qa: [
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: '本文提到的三对夫妻中，哪对夫妻给你留下的印象最深？', hint: '第三对夫妻……' },
        { q: '这对夫妻的什么地方让你感动？为什么？', hint: '丈夫为了让妻子睡好觉，整夜赶蚊子……' },
        { q: '你认为理想的夫妻关系应该是什么样的？', hint: '理想的夫妻关系是……' },
      ],
    },
  ],

  sentences: [
    { parts: ['评委', '叫', '第一对', '夫妻', '说说', '他俩', '是', '如何', '恩爱', '的'], pinyin: "Píngwěi jiào dì-yī duì fūqī shuōshuo tāliǎ shì rúhé ēn'ài de.", vi: 'Giám khảo mời cặp thứ nhất nói họ ân ái thế nào.' },
    { parts: ['男人', '的', '头', '靠', '在', '女人', '的', '肩膀', '上'], pinyin: 'Nánrén de tóu kào zài nǚrén de jiānbǎng shang.', vi: 'Đầu người đàn ông tựa vào vai người phụ nữ.' },
    { parts: ['这个', '女人', '居然', '放弃', '这次', '机会'], pinyin: 'Zhège nǚrén jūrán fàngqì zhè cì jīhuì.', vi: 'Người phụ nữ này lại bỏ cơ hội này.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 1 · Điền từ',
      hint: 'Gõ chữ Hán theo đáp án sách.',
      items: [
        { prompt: '她从小就（ ）小动物。', answer: '爱护', gloss: 'yêu quý' },
        { prompt: '关于这段对话，下面哪（ ）是正确的？', answer: '项', gloss: 'mục' },
        { prompt: '请大家耐心地（ ）一会儿。', answer: '等待', gloss: 'chờ' },
        { prompt: '请大家耐心地等待一会儿，不要（ ）他。', answer: '催', gloss: 'thúc' },
        { prompt: '请把那本杂志（ ）给我。', answer: '递', gloss: 'đưa' },
        { prompt: '火车快到的时候你（ ）我一声。', answer: '喊', gloss: 'gọi' },
        { prompt: '不要总是（ ）别人，要想想能不能改变自己。', answer: '抱怨', gloss: 'oán trách' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Chọn đáp án',
      hint: 'Gõ từ đúng theo đáp án sách.',
      items: [
        { prompt: '你的病都好了吗？现在感觉（ ）？ (如何/怎么)', answer: '如何', gloss: 'như thế nào' },
        { prompt: '电视里广告太多让观众感到很不（ ）。 (耐心/耐烦)', answer: '耐烦', gloss: 'sốt ruột' },
        { prompt: '这儿太（ ）了，我们换个地方吧。 (吵/吵架)', answer: '吵', gloss: 'ồn' },
        { prompt: '他这么年轻，没想到（ ）是一位著名的作家。 (居然/仍然)', answer: '居然', gloss: 'lại có thể' },
      ],
    },
    {
      title: 'Giáo trình 做一做 & 扩展',
      hint: 'Gõ từ đúng theo đáp án sách.',
      items: [
        { prompt: '你（ ）这么不耐烦？ (如何/怎么)', answer: '怎么', gloss: 'sao' },
        { prompt: '听说你去电台工作了？情况（ ）？ (如何/怎么)', answer: '如何', gloss: 'như thế nào' },
        { prompt: '你的（ ）好像一边高一边低，我建议你去买个双肩包。', answer: '肩膀', gloss: 'vai' },
        { prompt: '早上起来，伸个懒（ ），真舒服！', answer: '腰', gloss: 'eo' },
        { prompt: '他长着两条又黑又粗的（ ），一双大大的眼睛。', answer: '眉毛', gloss: 'lông mày' },
        { prompt: '讲了一天的课，老师的（ ）都疼了。', answer: '嗓子', gloss: 'cổ họng' },
      ],
    },
  ],
}
