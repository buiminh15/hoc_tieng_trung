import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 4 (Hạ), Bài 19: 生活的味道 (sách trang 122–134).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách, dịch hội thoại do app tự thêm.
 * Nghe: 19-1…19-5. Bài tập: 比一比/练习 2/扩展, đáp án theo "HSK4-2-BH" trang 9–10.
 */

const A = '/audio/hsk-std4/'

export const hskStd4Lesson19: Lesson = {
  id: 19,
  title: 'Hương vị của cuộc sống',
  hanzi: '生活的味道',
  pinyin: 'Shēnghuó de wèidào',
  vi: 'Hương vị của cuộc sống',
  intro: 'Nói về những việc nhỏ hằng ngày. Học đại từ nghi vấn phiếm chỉ, 上 (bổ ngữ), 出来 (so với 起来), 总的来说, 在于.',

  dialogue: [
    { who: 'A', name: '马克', hanzi: '老师，您好！我希望下个学期在这里继续学习，请问还需要重新申请吗？', pinyin: 'Lǎoshī, nín hǎo! Wǒ xīwàng xià ge xuéqī zài zhèlǐ jìxù xuéxí, qǐngwèn hái xūyào chóngxīn shēnqǐng ma?', vi: 'Thưa cô, em muốn học tiếp ở đây học kỳ sau, xin hỏi còn phải đăng ký lại không?', scene: 'Bài 1 · Mark xin học tiếp học kỳ sau' },
    { who: 'B', name: '高老师', hanzi: '是的。给你表格，出生年月、性别、护照号码都要填，还有联系地址、联系电话。', pinyin: 'Shì de. Gěi nǐ biǎogé, chūshēng nián yuè, xìngbié, hùzhào hàomǎ dōu yào tián, hái yǒu liánxì dìzhǐ, liánxì diànhuà.', vi: 'Đúng. Đưa em mẫu đơn, ngày tháng năm sinh, giới tính, số hộ chiếu đều phải điền, còn địa chỉ và số điện thoại liên lạc.' },
    { who: 'A', name: '马克', hanzi: '真抱歉，我不小心把护照号码填错了，您能再给我一份新的申请表吗？', pinyin: 'Zhēn bàoqiàn, wǒ bù xiǎoxīn bǎ hùzhào hàomǎ tiáncuò le, nín néng zài gěi wǒ yí fèn xīn de shēnqǐngbiǎo ma?', vi: 'Thật xin lỗi, em lỡ điền sai số hộ chiếu, cô cho em một đơn mới được không?' },
    { who: 'B', name: '高老师', hanzi: '没关系，不用道歉，谁都有粗心填错的时候。申请表都被别人拿走了，我给你重新打印一份，你等一下。', pinyin: 'Méi guānxi, búyòng dào qiàn, shéi dōu yǒu cūxīn tiáncuò de shíhou. Shēnqǐngbiǎo dōu bèi biérén názǒu le, wǒ gěi nǐ chóngxīn dǎyìn yí fèn, nǐ děng yíxià.', vi: 'Không sao, đừng xin lỗi, ai cũng có lúc điền sai do cẩu thả. Đơn đều bị người khác lấy hết, cô in lại cho em một bản, em đợi chút.' },
    { who: 'A', name: '马克', hanzi: '这次我按照要求都填写完了，请问还需要做别的事情吗？', pinyin: 'Zhè cì wǒ ànzhào yāoqiú dōu tiánxiě wán le, qǐngwèn hái xūyào zuò bié de shìqing ma?', vi: 'Lần này em đã điền xong theo yêu cầu, xin hỏi còn cần làm gì khác không?' },
    { who: 'B', name: '高老师', hanzi: '请把你的护照给我，我们要把护照复印一下。', pinyin: 'Qǐng bǎ nǐ de hùzhào gěi wǒ, wǒmen yào bǎ hùzhào fùyìn yíxià.', vi: 'Em đưa hộ chiếu cho cô, chúng tôi phải photocopy hộ chiếu.' },
    { who: 'A', name: '李进', hanzi: '呀，你的手怎么流血了？等一下，我给你包起来。', pinyin: 'Ya, nǐ de shǒu zěnme liú xiě le? Děng yíxià, wǒ gěi nǐ bāo qilai.', vi: 'Ôi, tay em sao chảy máu? Đợi chút, anh băng lại cho.', scene: 'Bài 2 · Vương Tĩnh làm sủi cảo bị thương tay' },
    { who: 'B', name: '王静', hanzi: '没关系，我想给你做点儿羊肉饺子，刚才用刀切肉的时候把手弄破了。', pinyin: 'Méi guānxi, wǒ xiǎng gěi nǐ zuò diǎnr yángròu jiǎozi, gāngcái yòng dāo qiē ròu de shíhou bǎ shǒu nòngpò le.', vi: 'Không sao, em muốn làm chút sủi cảo thịt cừu cho anh, vừa dùng dao thái thịt làm rách tay.' },
    { who: 'A', name: '李进', hanzi: '你也太不小心了，不过好像不太严重，过几天就好了。衣服上也有一点儿血，你把衣服脱下来，我给你洗洗。', pinyin: 'Nǐ yě tài bù xiǎoxīn le, búguò hǎoxiàng bú tài yánzhòng, guò jǐ tiān jiù hǎo le. Yīfu shang yě yǒu yìdiǎnr xiě, nǐ bǎ yīfu tuō xialai, wǒ gěi nǐ xǐxi.', vi: 'Em cũng bất cẩn quá, nhưng có vẻ không nặng, vài hôm là khỏi. Áo cũng dính chút máu, em cởi áo ra anh giặt cho.' },
    { who: 'B', name: '王静', hanzi: '看来今天吃不上羊肉饺子了。', pinyin: 'Kànlái jīntiān chī bu shàng yángròu jiǎozi le.', vi: 'Xem ra hôm nay không ăn được sủi cảo thịt cừu rồi.' },
    { who: 'A', name: '李进', hanzi: '那我们就吃点儿别的。我常去的那家理发店附近有个餐厅，那里的包子很好吃，我一会儿去买一点儿。', pinyin: 'Nà wǒmen jiù chī diǎnr bié de. Wǒ cháng qù de nà jiā lǐfàdiàn fùjìn yǒu ge cāntīng, nàli de bāozi hěn hǎochī, wǒ yíhuìr qù mǎi yìdiǎnr.', vi: 'Vậy mình ăn món khác. Gần tiệm cắt tóc anh hay đến có nhà hàng, bánh bao ở đó ngon lắm, lát anh đi mua một ít.' },
    { who: 'B', name: '王静', hanzi: '好吧，我衣服口袋里有十几块零钱，买包子应该够。', pinyin: 'Hǎo ba, wǒ yīfu kǒudài li yǒu shí jǐ kuài língqián, mǎi bāozi yīnggāi gòu.', vi: 'Được, trong túi áo em có mười mấy tệ tiền lẻ, mua bánh bao chắc đủ.' },
    { who: 'A', name: '马克', hanzi: '我早上跟你打招呼，你没看见。想不到又在这儿碰见你了。', pinyin: 'Wǒ zǎoshang gēn nǐ dǎ zhāohu, nǐ méi kànjiàn. Xiǎng bu dào yòu zài zhèr pèngjiàn nǐ le.', vi: 'Sáng nay tôi chào bạn, bạn không thấy. Không ngờ lại gặp bạn ở đây.', scene: 'Bài 3 · Anna giúp Mark luyện động tác múa' },
    { who: 'B', name: '安娜', hanzi: '真是对不起，我不是故意的，今天早上我忘戴眼镜了，看不清楚。', pinyin: 'Zhēn shì duìbuqǐ, wǒ bú shì gùyì de, jīntiān zǎoshang wǒ wàng dài yǎnjìng le, kàn bu qīngchu.', vi: 'Thật xin lỗi, tôi không cố ý, sáng nay tôi quên đeo kính, nhìn không rõ.' },
    { who: 'A', name: '马克', hanzi: '刚才我在旁边看到你跳中国舞了，没看出来你跳得这么好！难道你以前在你们国家就学过中国舞蹈吗？', pinyin: 'Gāngcái wǒ zài pángbiān kàndào nǐ tiào Zhōngguó wǔ le, méi kàn chulai nǐ tiào de zhème hǎo! Nándào nǐ yǐqián zài nǐmen guójiā jiù xuéguo Zhōngguó wǔdǎo ma?', vi: 'Vừa nãy tôi đứng bên xem bạn nhảy múa Trung Quốc, không ngờ bạn nhảy giỏi vậy! Chẳng lẽ trước đây ở nước bạn bạn đã học múa Trung Quốc?' },
    { who: 'B', name: '安娜', hanzi: '我小时候妈妈教我跳过两年的舞，所以稍微有点儿基础。再说，舞蹈不仅是一门艺术，也是一种“语言”，这种语言与国籍无关，无论哪个国家的人都能看懂。', pinyin: 'Wǒ xiǎo shíhou māma jiāo wǒ tiàoguo liǎng nián de wǔ, suǒyǐ shāowēi yǒudiǎnr jīchǔ. Zàishuō, wǔdǎo bùjǐn shì yì mén yìshù, yě shì yì zhǒng "yǔyán", zhè zhǒng yǔyán yǔ guójí wúguān, wúlùn nǎ ge guójiā de rén dōu néng kàndǒng.', vi: 'Hồi nhỏ mẹ dạy tôi múa hai năm nên có chút nền tảng. Hơn nữa múa không chỉ là nghệ thuật mà còn là một "ngôn ngữ", ngôn ngữ này không liên quan quốc tịch, người nước nào cũng xem hiểu.' },
    { who: 'A', name: '马克', hanzi: '太好了！我刚学习跳这种舞没多久，你帮我看看，我的这个动作对不对。', pinyin: 'Tài hǎo le! Wǒ gāng xuéxí tiào zhè zhǒng wǔ méi duō jiǔ, nǐ bāng wǒ kànkan, wǒ de zhège dòngzuò duì bu duì.', vi: 'Tuyệt quá! Tôi mới học nhảy điệu này chưa lâu, bạn xem giúp động tác này của tôi đúng không.' },
    { who: 'B', name: '安娜', hanzi: '你这个动作做得还是不太标准，我给你跳一遍。你仔细看着，应该像我这样：先抬胳膊，然后抬腿，最后头再向右转一下。', pinyin: 'Nǐ zhège dòngzuò zuò de háishi bú tài biāozhǔn, wǒ gěi nǐ tiào yí biàn. Nǐ zǐxì kànzhe, yīnggāi xiàng wǒ zhèyàng: xiān tái gēbo, ránhòu tái tuǐ, zuìhòu tóu zài xiàng yòu zhuǎn yíxià.', vi: 'Động tác này bạn vẫn chưa chuẩn, tôi nhảy một lượt cho bạn. Bạn nhìn kỹ, phải như tôi: trước nhấc cánh tay, rồi nhấc chân, cuối cùng quay đầu sang phải một chút.' },
    { who: 'A', name: '短文', hanzi: '马克去年租的房子离马路很近，对面有大大小小的商店，周围环境非常吵。所以，房子还没到期，马克就开始着急换房子了。有一天，他在小区门口看到一个租房子的广告。广告上说房子交通方便，周围很安静，厨房很大。总的来说，这套房子他很满意，于是他就记下了房东的手机号码。可回家后打电话，电话总是占线。第二天，他路过小区门口时，又仔细看了一下广告，原来在记号码的时候写错了一个数字。', pinyin: 'Mǎkè qùnián zū de fángzi lí mǎlù hěn jìn, duìmiàn yǒu dàdà xiǎoxiǎo de shāngdiàn, zhōuwéi huánjìng fēicháng chǎo. Suǒyǐ, fángzi hái méi dào qī, Mǎkè jiù kāishǐ zháojí huàn fángzi le. Yǒu yì tiān, tā zài xiǎoqū ménkǒu kàndào yí ge zū fángzi de guǎnggào. Guǎnggào shang shuō fángzi jiāotōng fāngbiàn, zhōuwéi hěn ānjìng, chúfáng hěn dà. Zǒng de lái shuō, zhè tào fángzi tā hěn mǎnyì, yúshì tā jiù jìxiàle fángdōng de shǒujī hàomǎ. Kě huí jiā hòu dǎ diànhuà, diànhuà zǒngshì zhànxiàn. Dì-èr tiān, tā lùguò xiǎoqū ménkǒu shí, yòu zǐxì kànle yíxià guǎnggào, yuánlái zài jì hàomǎ de shíhou xiěcuòle yí ge shùzì.', vi: 'Nhà Mark thuê năm ngoái gần đường lớn, đối diện có đủ loại cửa hàng, môi trường xung quanh rất ồn. Vì vậy nhà chưa hết hạn Mark đã sốt ruột đổi nhà. Một hôm anh thấy ở cổng khu dân cư một quảng cáo cho thuê nhà. Quảng cáo nói nhà giao thông thuận tiện, xung quanh yên tĩnh, bếp rộng. Nói chung anh rất hài lòng căn này nên ghi số di động chủ nhà. Nhưng về nhà gọi thì máy luôn bận. Hôm sau đi qua cổng khu anh xem kỹ lại quảng cáo, hóa ra lúc ghi số đã ghi sai một chữ số.', scene: 'Bài 4 · Nhà cho thuê' },
    { who: 'A', name: '短文', hanzi: '很多外国人认为所有中国人都会功夫和乒乓球，其实只是喜爱这两种运动的中国人比较多。中国人特别喜欢打乒乓球，在中国你会发现到处都有乒乓球桌。像乒乓球、羽毛球、跑步等运动对条件要求不高，所以它们都成为人们运动不错的选择。人们常说“生命在于运动”，所以很多人一到周末就会到体育馆打几场球。“乒乓球”这个名字也很有意思，“乒”和“乓”就是打球时发出的声音。在看乒乓球比赛时，尤其是在运动员发球的时候，观众要安静，禁止大声讲话或者离开座位随便走动。', pinyin: 'Hěn duō wàiguó rén rènwéi suǒyǒu Zhōngguó rén dōu huì gōngfu hé pīngpāngqiú, qíshí zhǐshì xǐ\'ài zhè liǎng zhǒng yùndòng de Zhōngguó rén bǐjiào duō. Zhōngguó rén tèbié xǐhuan dǎ pīngpāngqiú, zài Zhōngguó nǐ huì fāxiàn dàochù dōu yǒu pīngpāngqiú zhuō. Xiàng pīngpāngqiú, yǔmáoqiú, pǎo bù děng yùndòng duì tiáojiàn yāoqiú bù gāo, suǒyǐ tāmen dōu chéngwéi rénmen yùndòng búcuò de xuǎnzé. Rénmen cháng shuō "shēngmìng zàiyú yùndòng", suǒyǐ hěn duō rén yí dào zhōumò jiù huì dào tǐyùguǎn dǎ jǐ chǎng qiú. "Pīngpāngqiú" zhège míngzi yě hěn yǒu yìsi, "pīng" hé "pāng" jiù shì dǎ qiú shí fāchū de shēngyīn. Zài kàn pīngpāngqiú bǐsài shí, yóuqí shì zài yùndòngyuán fā qiú de shíhou, guānzhòng yào ānjìng, jìnzhǐ dàshēng jiǎng huà huòzhě líkāi zuòwèi suíbiàn zǒudòng.', vi: 'Nhiều người nước ngoài cho rằng người Trung Quốc ai cũng biết võ thuật và bóng bàn, thật ra chỉ là số người Trung Quốc yêu hai môn này khá nhiều. Người Trung Quốc đặc biệt thích chơi bóng bàn, ở Trung Quốc bạn sẽ thấy khắp nơi có bàn bóng bàn. Bóng bàn, cầu lông, chạy bộ… không đòi hỏi điều kiện cao nên đều là lựa chọn vận động tốt. Người ta hay nói "sinh mệnh ở vận động", nên nhiều người cứ đến cuối tuần là ra nhà thi đấu chơi vài trận. Tên "乒乓球" cũng thú vị, "乒" và "乓" chính là tiếng phát ra khi đánh bóng. Khi xem thi đấu bóng bàn, nhất là lúc vận động viên giao bóng, khán giả phải yên lặng, cấm nói to hoặc rời ghế đi lại tùy tiện.', scene: 'Bài 5 · Bóng bàn' },
  ],
  dialogueClips: [
    { label: '19-1 · Mark và cô Cao', src: A + 'l19-1.mp3' },
    { label: '19-2 · Vương Tĩnh và Lý Tiến', src: A + 'l19-2.mp3' },
    { label: '19-3 · Mark và Anna', src: A + 'l19-3.mp3' },
    { label: '19-4 · Nhà cho thuê', src: A + 'l19-4.mp3' },
    { label: '19-5 · Bóng bàn', src: A + 'l19-5.mp3' },
  ],
  dialogueTip: '<b>谁/什么/怎么/哪儿 + 都/也</b>: bất kỳ. <b>上</b> (bổ ngữ): đạt được (吃不上). <b>出来</b>: lộ ra / hiện ra; <b>起来</b>: bắt đầu / nhớ lại. <b>总的来说</b>: nói chung. <b>在于</b>: ở chỗ.',
  slowSay: '生活的味道',

  vocab: [
    { hanzi: '学期', pinyin: 'xuéqī', pos: 'danh từ', meaning: 'học kỳ', han_viet: 'học kỳ' },
    { hanzi: '出生', pinyin: 'chūshēng', pos: 'động từ', meaning: 'ra đời, sinh ra', han_viet: 'xuất sinh' },
    { hanzi: '性别', pinyin: 'xìngbié', pos: 'danh từ', meaning: 'giới tính', han_viet: 'tính biệt' },
    { hanzi: '道歉', pinyin: 'dào qiàn', pos: 'động từ', meaning: 'xin lỗi', han_viet: 'đạo khiểm' },
    { hanzi: '打印', pinyin: 'dǎyìn', pos: 'động từ', meaning: 'in', han_viet: 'đả ấn' },
    { hanzi: '复印', pinyin: 'fùyìn', pos: 'động từ', meaning: 'photocopy, sao chụp', han_viet: 'phục ấn' },
    { hanzi: '饺子', pinyin: 'jiǎozi', pos: 'danh từ', meaning: 'bánh chéo, sủi cảo', han_viet: 'giảo tử' },
    { hanzi: '刀', pinyin: 'dāo', pos: 'danh từ', meaning: 'con dao', han_viet: 'đao' },
    { hanzi: '破', pinyin: 'pò', pos: 'tính từ', meaning: 'bị đứt, bị thủng', han_viet: 'phá' },
    { hanzi: '脱', pinyin: 'tuō', pos: 'động từ', meaning: 'cởi ra', han_viet: 'thoát' },
    { hanzi: '理发', pinyin: 'lǐ fà', pos: 'động từ', meaning: 'cắt tóc', han_viet: 'lý phát' },
    { hanzi: '包子', pinyin: 'bāozi', pos: 'danh từ', meaning: 'bánh bao', han_viet: 'bao tử' },
    { hanzi: '零钱', pinyin: 'língqián', pos: 'danh từ', meaning: 'tiền lẻ', han_viet: 'linh tiền' },
    { hanzi: '打招呼', pinyin: 'dǎ zhāohu', pos: 'cụm', meaning: 'chào hỏi, chào', han_viet: 'đả chiêu hô' },
    { hanzi: '戴', pinyin: 'dài', pos: 'động từ', meaning: 'đeo, mang', han_viet: 'đới' },
    { hanzi: '眼镜', pinyin: 'yǎnjìng', pos: 'danh từ', meaning: 'mắt kính', han_viet: 'nhãn kính' },
    { hanzi: '舞蹈', pinyin: 'wǔdǎo', pos: 'danh từ', meaning: 'điệu múa', han_viet: 'vũ đạo' },
    { hanzi: '国籍', pinyin: 'guójí', pos: 'danh từ', meaning: 'quốc tịch', han_viet: 'quốc tịch' },
    { hanzi: '抬', pinyin: 'tái', pos: 'động từ', meaning: 'giơ lên, đưa lên', han_viet: 'đài' },
    { hanzi: '胳膊', pinyin: 'gēbo', pos: 'danh từ', meaning: 'cánh tay', han_viet: 'các bạc' },
    { hanzi: '转', pinyin: 'zhuǎn', pos: 'động từ', meaning: 'quay, xoay', han_viet: 'chuyển' },
    { hanzi: '租', pinyin: 'zū', pos: 'động từ', meaning: 'thuê, cho thuê', han_viet: 'tô' },
    { hanzi: '吵', pinyin: 'chǎo', pos: 'tính từ', meaning: 'ồn ào', han_viet: 'sảo' },
    { hanzi: '厨房', pinyin: 'chúfáng', pos: 'danh từ', meaning: 'nhà bếp', han_viet: 'trù phòng' },
    { hanzi: '房东', pinyin: 'fángdōng', pos: 'danh từ', meaning: 'chủ nhà cho thuê', han_viet: 'phòng đông' },
    { hanzi: '占线', pinyin: 'zhàn xiàn', pos: 'động từ', meaning: '(đường dây điện thoại) bận', han_viet: 'chiếm tuyến' },
    { hanzi: '功夫', pinyin: 'gōngfu', pos: 'danh từ', meaning: 'võ thuật, kung fu', han_viet: 'công phu' },
    { hanzi: '乒乓球', pinyin: 'pīngpāngqiú', pos: 'danh từ', meaning: 'bóng bàn', han_viet: 'binh bàng cầu' },
    { hanzi: '羽毛球', pinyin: 'yǔmáoqiú', pos: 'danh từ', meaning: 'cầu lông', han_viet: 'vũ mao cầu' },
    { hanzi: '场', pinyin: 'chǎng', pos: 'lượng từ', meaning: 'trận (thể thao, giải trí…)', han_viet: 'trường' },
    { hanzi: '禁止', pinyin: 'jìnzhǐ', pos: 'động từ', meaning: 'cấm', han_viet: 'cấm chỉ' },
    { hanzi: '座位', pinyin: 'zuòwèi', pos: 'danh từ', meaning: 'chỗ ngồi', han_viet: 'tọa vị' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Đại từ nghi vấn phiếm chỉ', title: 'Đại từ nghi vấn chỉ bất kỳ (什么/谁/哪儿/怎么…)',
      intro: 'Các đại từ nghi vấn 什么, 谁, 哪, 哪儿, 哪里, 怎么… có thể chỉ bất kỳ người/vật nào; thường dùng kết hợp với 都/也 trong câu. 什么 chỉ bất kỳ thứ gì, 谁 chỉ bất kỳ ai.',
      groups: [{ label: 'Ví dụ', items: [['没关系，不用道歉，谁都有粗心填错的时候。', 'Méi guānxi, búyòng dào qiàn, shéi dōu yǒu cūxīn tiáncuò de shíhou.', 'Không sao, đừng xin lỗi, ai cũng có lúc điền sai do cẩu thả.'], ['昨天我做了一个奇怪的梦，但是早上起来怎么想都想不起来。', 'Zuótiān wǒ zuòle yí ge qíguài de mèng, dànshì zǎoshang qǐlai zěnme xiǎng dōu xiǎng bu qǐlai.', 'Hôm qua tôi mơ một giấc lạ, nhưng sáng dậy nghĩ thế nào cũng không nhớ ra.'], ['“世界上没有免费的午餐”这句话是说，什么东西都要通过努力才能得到。', '"Shìjiè shang méiyǒu miǎnfèi de wǔcān" zhè jù huà shì shuō, shénme dōngxi dōu yào tōngguò nǔlì cái néng dédào.', 'Câu "không có bữa trưa miễn phí" nghĩa là thứ gì cũng phải nhờ nỗ lực mới có được.']] }],
    },
    {
      kind: 'examples', label: '上 · 出来', title: '上 (bổ ngữ) và 出来 (bổ ngữ xu hướng)',
      intro: '上 sau động từ làm bổ ngữ xu hướng (mở rộng: mục đích đã đạt được) hoặc bổ ngữ khả năng (có đạt được mục đích không). 出来 sau động từ làm bổ ngữ xu hướng, nghĩa mở rộng: sự vật từ không thành có, từ bị che khuất thành lộ rõ.',
      groups: [
        { label: '上', items: [['看来今天吃不上羊肉饺子了。', 'Kànlái jīntiān chī bu shàng yángròu jiǎozi le.', 'Xem ra hôm nay không ăn được sủi cảo thịt cừu.'], ['现在堵车这么厉害，看来今天坐不上8点那趟去上海的飞机了。', 'Xiànzài dǔ chē zhème lìhai, kànlái jīntiān zuò bu shàng bā diǎn nà tàng qù Shànghǎi de fēijī le.', 'Giờ tắc đường dữ vậy, xem ra hôm nay không kịp chuyến bay 8 giờ đi Thượng Hải.'], ['一听到哥哥考上了经济专业的博士，我们全家都特别高兴。', 'Yì tīngdào gēge kǎoshàngle jīngjì zhuānyè de bóshì, wǒmen quán jiā dōu tèbié gāoxìng.', 'Vừa nghe anh thi đỗ tiến sĩ ngành kinh tế cả nhà đều rất vui.']] },
        { label: '出来', items: [['有的人心里有什么看法或意见，嘴上就会直接说出来。', 'Yǒude rén xīnli yǒu shénme kànfǎ huò yìjiàn, zuǐ shang jiù huì zhíjiē shuō chulai.', 'Có người trong lòng có ý kiến gì thì nói thẳng ra.'], ['你要的那篇文章我已经翻译出来了，你方便的时候就来取吧。', 'Nǐ yào de nà piān wénzhāng wǒ yǐjīng fānyì chulai le, nǐ fāngbiàn de shíhou jiù lái qǔ ba.', 'Bài văn bạn cần tôi dịch xong rồi, tiện thì đến lấy.'], ['刚才我在旁边看到你跳中国舞了，没看出来你跳得这么好！', 'Gāngcái wǒ zài pángbiān kàndào nǐ tiào Zhōngguó wǔ le, méi kàn chulai nǐ tiào de zhème hǎo!', 'Vừa nãy tôi thấy bạn nhảy múa Trung Quốc, không ngờ bạn nhảy giỏi thế!']] },
      ],
    },
    {
      kind: 'examples', label: '出来 – 起来', title: 'So sánh 出来 và 起来',
      intro: '(1) 出来: hướng hành động từ trong ra ngoài; 起来: từ dưới lên. (2) 出来 nghĩa mở rộng: từ không thành có, từ che khuất thành lộ; 起来 nghĩa mở rộng: hành động bắt đầu và tiếp diễn. (3) 想出来: thông tin vốn không có trong đầu nay nghĩ ra; 想起来: thông tin vốn có nhưng quên, nhớ lại được.',
      groups: [{ label: 'Ví dụ', items: [['我的日记本掉到沙发后面了，拿不出来了，你来帮我抬一下沙发吧。', 'Wǒ de rìjìběn diàodào shāfā hòumiàn le, ná bu chūlai le, nǐ lái bāng wǒ tái yíxià shāfā ba.', 'Quyển nhật ký rơi ra sau sofa, lấy không ra, bạn giúp nhấc sofa lên nhé.'], ['早上六点，他还睡着，电话突然响了，他连忙坐起来接电话。', 'Zǎoshang liù diǎn, tā hái shuìzhe, diànhuà tūrán xiǎng le, tā liánmáng zuò qilai jiē diànhuà.', '6 giờ sáng anh còn ngủ, điện thoại bỗng reo, anh vội ngồi dậy nghe máy.'], ['你能算出来这两个地方之间的距离是多少公里吗？', 'Nǐ néng suàn chulai zhè liǎng ge dìfang zhījiān de jùlí shì duōshao gōnglǐ ma?', 'Bạn tính ra khoảng cách giữa hai nơi là bao nhiêu km không?'], ['尽管现在才4月，天气已经开始慢慢热起来。', 'Jǐnguǎn xiànzài cái sì yuè, tiānqì yǐjīng kāishǐ mànmàn rè qilai.', 'Dù mới tháng 4 trời đã dần nóng lên.'], ['有几个选择题，实在想不出来该选哪个，只好随便选一个。', 'Yǒu jǐ ge xuǎnzé tí, shízài xiǎng bu chūlai gāi xuǎn nǎge, zhǐhǎo suíbiàn xuǎn yí ge.', 'Có mấy câu trắc nghiệm thật không nghĩ ra chọn cái nào, đành chọn bừa.'], ['我想起来了，那个唱歌的男孩子是高老师的孙子。', 'Wǒ xiǎng qilai le, nàge chàng gē de nánháizi shì Gāo lǎoshī de sūnzi.', 'Tôi nhớ ra rồi, cậu bé hát kia là cháu của cô Cao.']] }],
    },
    {
      kind: 'examples', label: '总的来说 · 在于', title: '总的来说 (nói chung) và 在于 (ở chỗ)',
      intro: '总的来说: thành phần xen kẽ, nhận xét từ tổng thể hoặc tình hình chủ yếu. 在于: động từ trong văn viết, chỉ bản chất sự vật, nghĩa "chính là, ở chỗ"; sau nó phải là danh từ, động từ hoặc câu ngắn làm tân ngữ.',
      groups: [
        { label: '总的来说', items: [['广告上说房子交通方便，周围很安静，厨房很大。总的来说，这套房子他很满意。', 'Guǎnggào shang shuō fángzi jiāotōng fāngbiàn, zhōuwéi hěn ānjìng, chúfáng hěn dà. Zǒng de lái shuō, zhè tào fángzi tā hěn mǎnyì.', 'Quảng cáo nói nhà giao thông thuận tiện, yên tĩnh, bếp rộng. Nói chung anh rất hài lòng căn này.'], ['这个公司的工资虽然不算很高，但是奖金很多，所以总的来说收入还不错。', 'Zhège gōngsī de gōngzī suīrán bú suàn hěn gāo, dànshì jiǎngjīn hěn duō, suǒyǐ zǒng de lái shuō shōurù hái búcuò.', 'Lương công ty này không cao nhưng thưởng nhiều, nói chung thu nhập khá.']] },
        { label: '在于', items: [['人们常说“生命在于运动”，所以很多人一到周末就会到体育馆打几场球。', 'Rénmen cháng shuō "shēngmìng zàiyú yùndòng", suǒyǐ hěn duō rén yí dào zhōumò jiù huì dào tǐyùguǎn dǎ jǐ chǎng qiú.', 'Người ta hay nói "sinh mệnh ở vận động" nên nhiều người cuối tuần ra nhà thi đấu chơi vài trận.'], ['选择职业的关键在于兴趣，当你喜欢做一件事情的时候，你会带着热情去工作。', 'Xuǎnzé zhíyè de guānjiàn zàiyú xìngqù, dāng nǐ xǐhuan zuò yí jiàn shìqing de shíhou, nǐ huì dàizhe rèqíng qù gōngzuò.', 'Then chốt chọn nghề ở chỗ hứng thú, khi thích việc đó bạn sẽ làm với nhiệt huyết.'], ['没有人能一生都顺顺利利、没有失败。区别在于有的人能接受失败，找到原因并继续努力。', 'Méiyǒu rén néng yìshēng dōu shùnshun lìlì, méiyǒu shībài. Qūbié zàiyú yǒude rén néng jiēshòu shībài, zhǎodào yuányīn bìng jìxù nǔlì.', 'Không ai cả đời suôn sẻ không thất bại. Khác biệt ở chỗ có người chấp nhận thất bại, tìm nguyên nhân và tiếp tục cố gắng.']] },
      ],
    },
    {
      kind: 'examples', label: 'Từ cùng chữ: 发', title: 'Những từ có chữ giống nhau: 发',
      intro: '发生, 沙发, 发展, 理发.',
      groups: [{ label: 'Ví dụ', items: [['注意速度，我们又不赶时间，太快了容易发生危险。', 'Zhùyì sùdù, wǒmen yòu bù gǎn shíjiān, tài kuài le róngyì fāshēng wēixiǎn.', 'Chú ý tốc độ, ta không vội, quá nhanh dễ xảy ra nguy hiểm.'], ['帮助别人可以积累人际关系，为自己的职业发展打下基础。', 'Bāngzhù biérén kěyǐ jīlěi rénjì guānxì, wèi zìjǐ de zhíyè fāzhǎn dǎxià jīchǔ.', 'Giúp người khác có thể tích lũy quan hệ, đặt nền tảng cho phát triển nghề nghiệp.'], ['出了南门向左走大约五百米，就能看到一个黄色的二层小楼，理发店就在一层。', 'Chūle nánmén xiàng zuǒ zǒu dàyuē wǔbǎi mǐ, jiù néng kàndào yí ge huángsè de èr céng xiǎolóu, lǐfàdiàn jiù zài yī céng.', 'Ra cổng nam rẽ trái đi khoảng 500m sẽ thấy tòa nhà hai tầng màu vàng, tiệm cắt tóc ở tầng một.']] }],
    },
  ],

  notes: [
    { title: 'Đại từ nghi vấn phiếm chỉ', body: '什么/谁/哪儿/怎么… + 都/也 chỉ bất kỳ: 谁都有粗心填错的时候, 怎么想都想不起来, 什么东西都要通过努力才能得到.', say: '谁都有粗心填错的时候' },
    { title: '上 (bổ ngữ)', body: 'Bổ ngữ xu hướng mở rộng: mục đích đã đạt (考上); bổ ngữ khả năng: có đạt được không (吃不上, 坐不上).', say: '看来今天吃不上羊肉饺子了' },
    { title: '出来 và 起来', body: '出来: từ trong ra ngoài, từ không thành có, từ che khuất thành lộ (想出来, 看出来). 起来: từ dưới lên, bắt đầu và tiếp diễn, nhớ lại (想起来).', say: '我想起来了' },
    { title: '总的来说', body: 'Thành phần xen kẽ, đánh giá từ tổng thể hoặc tình hình chủ yếu.', say: '总的来说，这套房子他很满意' },
    { title: '在于', body: 'Động từ văn viết: "ở chỗ, chính là"; chủ ngữ thường là cụm danh từ; sau 在于 là danh từ/động từ/câu ngắn: 生命在于运动.', say: '生命在于运动' },
    { title: 'Văn hóa: 乒乓球', body: 'Bóng bàn là môn thể thao được yêu thích ở Trung Quốc, bàn bóng bàn có ở khắp nơi. Tên 乒乓 mô phỏng tiếng bóng chạm vợt và bàn; khi xem thi đấu, nhất là lúc giao bóng, khán giả phải yên lặng.', say: '乒乓球' },
  ],

  writeChars: ['性', '歉', '印', '饺', '脱', '戴', '舞', '禁'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa',
      items: [
        { q: '填写申请表格时，应该提供哪些方面的信息？', hint: '出生年月、性别、护照号码、联系地址、联系电话。' },
        { q: '马克把申请表填错后，高老师批评他了吗？为什么？', hint: '没有，因为谁都有粗心填错的时候。' },
        { q: '王静的手是怎么弄破的？严重吗？', hint: '用刀切肉做羊肉饺子时弄破的；不太严重。' },
        { q: '今天他们能吃到羊肉饺子吗？如果吃不到，他们会怎么办？', hint: '吃不上；去买包子。' },
        { q: '马克认为安娜中国舞跳得好的原因可能是什么？', hint: '他以为安娜以前在国家学过中国舞；其实小时候妈妈教过两年。' },
        { q: '马克现在租的房子和广告上的房子各有哪些特点？马克为什么一直没联系上房东？', hint: '现在的离马路近、很吵；广告上的交通方便、安静、厨房大；记错了一个数字。' },
        { q: '很多外国人对中国人有什么印象？“乒乓球”这个名字怎么来的？', hint: '以为中国人都会功夫和乒乓球；名字来自打球时发出的声音。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: điền thông tin cá nhân vào mẫu đơn', hint: '姓名、年龄、性别、出生年月、联系地址、联系电话、护照号码。' },
      ],
    },
  ],

  sentences: [
    { parts: ['谁', '都', '有', '粗心', '填', '错', '的', '时候'], pinyin: 'Shéi dōu yǒu cūxīn tiáncuò de shíhou.', vi: 'Ai cũng có lúc điền sai do cẩu thả.' },
    { parts: ['看来', '今天', '吃', '不', '上', '羊肉', '饺子', '了'], pinyin: 'Kànlái jīntiān chī bu shàng yángròu jiǎozi le.', vi: 'Xem ra hôm nay không ăn được sủi cảo thịt cừu.' },
    { parts: ['没', '看', '出来', '你', '跳', '得', '这么', '好'], pinyin: 'Méi kàn chulai nǐ tiào de zhème hǎo.', vi: 'Không ngờ bạn nhảy giỏi thế.' },
    { parts: ['总的来说', '这套', '房子', '他', '很', '满意'], pinyin: 'Zǒng de lái shuō, zhè tào fángzi tā hěn mǎnyì.', vi: 'Nói chung anh rất hài lòng căn này.' },
    { parts: ['生命', '在于', '运动'], pinyin: 'Shēngmìng zàiyú yùndòng.', vi: 'Sinh mệnh ở vận động.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 打招呼 · B 场 · C 性别 · D 吵 · E 禁止. Gõ chữ cái A–E.',
      items: [
        { prompt: '请在表格上填好姓名、（ ）、年龄、职业等，然后再给我们传真过来。', answer: 'C', gloss: '性别' }, { prompt: '我觉得咱们还是换个地方住吧。这个小区太（ ）了，我怕影响孩子学习和休息。', answer: 'D', gloss: '吵' },
        { prompt: '抽烟不但污染空气，影响身体健康，而且在加油站这样的地方抽烟非常危险，因此，很多地方都（ ）抽烟。', answer: 'E', gloss: '禁止' }, { prompt: '要想更快适应新环境，其实有很多办法。比如，多和周围的人（ ），在别人遇到麻烦的时候去帮一把，等等。', answer: 'A', gloss: '打招呼' },
        { prompt: '这个京剧我一直想看，下星期六是他们在这儿的最后一（ ）演出。中午你记得提醒我去买票，否则我就没有机会看了。', answer: 'B', gloss: '场' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 零钱 · B 座位 · C 打印 · D 道歉 · E 占线. Gõ chữ cái A–E.',
      items: [
        { prompt: '先生，一共二百三十九块七。您付现金还是刷卡？ 现金。我带的（ ）应该够了。', answer: 'A', gloss: '零钱' }, { prompt: '请问，您一共几位？ 我们一共四个人，麻烦你给我们找个安静点儿的（ ）。', answer: 'B', gloss: '座位' },
        { prompt: '明天几点到？八点来得及来不及？ 提前点儿吧，咱们还得负责（ ）会议材料呢。', answer: 'C', gloss: '打印' }, { prompt: '我是专门来向您（ ）的，我真的觉得很对不起您。 没关系，过去的事情就让它过去吧，你也别太放在心上。', answer: 'D', gloss: '道歉' },
        { prompt: '李经理的电话一直（ ），去办公室找他，敲了半天门，也没人开。 他刚出去开会了，可能下午才能回来。', answer: 'E', gloss: '占线' },
      ],
    },
    {
      title: 'Giáo trình 比一比 · 出来 / 起来 (gõ từ)',
      hint: 'Gõ 出来 hoặc 起来 theo đáp án sách.',
      items: [
        { prompt: '声音听着挺熟悉的，不过我一下子想不（ ）了。', answer: '起来', gloss: '起来' },
        { prompt: '遇到烦恼事时，你应该想一些办法让自己从不高兴的心情中走（ ）。', answer: '出来', gloss: '出来' },
        { prompt: '你回去后把今天大家在会上提的意见都整理（ ）。', answer: '出来', gloss: '出来' },
      ],
    },
    {
      title: 'Giáo trình 扩展 · 发 (gõ từ)',
      hint: 'Gõ 发生, 沙发, 发展 hoặc 理发.',
      items: [
        { prompt: '注意速度，我们又不赶时间，太快了容易（ ）危险。', answer: '发生', gloss: '发生' },
        { prompt: '商场年底有活动，正在打折，这个黑色的（ ）比平时便宜了一千块。', answer: '沙发', gloss: '沙发' },
        { prompt: '帮助别人可以积累人际关系，为自己的职业（ ）打下基础。', answer: '发展', gloss: '发展' },
        { prompt: '出了南门向左走大约五百米，就能看到一个黄色的二层小楼，（ ）店就在一层。', answer: '理发', gloss: '理发' },
      ],
    },
  ],
}
