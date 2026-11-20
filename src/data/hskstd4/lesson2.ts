import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 4 (Thượng), Bài 2: 真正的朋友 (sách trang 22–33).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách, dịch hội thoại do app tự thêm.
 * Nghe: 02-1…02-5. Bài tập: 热身/比一比/练习/扩展, đáp án theo "HSK4-1-BT" trang 2.
 */

const A = '/audio/hsk-std4/'

export const hskStd4Lesson2: Lesson = {
  id: 2,
  title: 'Người bạn chân chính',
  hanzi: '真正的朋友',
  pinyin: 'Zhēnzhèng de péngyou',
  vi: 'Người bạn chân chính',
  intro: 'Nói về bạn bè và giao tiếp. Học 正好, 差不多 (và so sánh với 几乎), 尽管……但是/可是/却……, 却 và 而.',

  dialogue: [
    { who: 'A', name: '小夏', hanzi: '来中国快一年了，你适应这儿的生活了吗？', pinyin: 'Lái Zhōngguó kuài yì nián le, nǐ shìyìng zhèr de shēnghuó le ma?', vi: 'Đến Trung Quốc sắp một năm rồi, bạn thích nghi với cuộc sống ở đây chưa?', scene: 'Bài 1 · Tiểu Hạ và Mark nói về bạn Trung Quốc của Mark' },
    { who: 'B', name: '马克', hanzi: '开始有点儿不习惯，后来就慢慢适应了，最近我还交了一个中国朋友。', pinyin: 'Kāishǐ yǒudiǎnr bù xíguàn, hòulái jiù mànmàn shìyìng le, zuìjìn wǒ hái jiāole yí ge Zhōngguó péngyou.', vi: 'Lúc đầu hơi chưa quen, sau dần thích nghi, gần đây mình còn kết bạn với một người Trung Quốc.' },
    { who: 'A', name: '小夏', hanzi: '那就好，快给我讲讲你新交的中国朋友。', pinyin: 'Nà jiù hǎo, kuài gěi wǒ jiǎngjiang nǐ xīn jiāo de Zhōngguó péngyou.', vi: 'Thế thì tốt, mau kể cho mình nghe về người bạn Trung Quốc mới của bạn.' },
    { who: 'B', name: '马克', hanzi: '我们是在图书馆认识的。平时我们常常一起看书、逛街、踢足球。有时候他还给我发一些幽默短信。', pinyin: 'Wǒmen shì zài túshūguǎn rènshi de. Píngshí wǒmen chángcháng yìqǐ kàn shū, guàng jiē, tī zúqiú. Yǒu shíhou tā hái gěi wǒ fā yìxiē yōumò duǎnxìn.', vi: 'Bọn mình quen nhau ở thư viện. Ngày thường hay cùng đọc sách, dạo phố, đá bóng. Đôi khi cậu ấy còn gửi cho mình vài tin nhắn hài hước.' },
    { who: 'A', name: '小夏', hanzi: '你的这个朋友真不错！下次介绍我们认识认识，怎么样？', pinyin: 'Nǐ de zhège péngyou zhēn búcuò! Xià cì jièshào wǒmen rènshi rènshi, zěnmeyàng?', vi: 'Người bạn này của bạn tuyệt thật! Lần sau giới thiệu cho bọn mình làm quen nhé?' },
    { who: 'B', name: '马克', hanzi: '没问题！我们下午要去踢足球，正好一起去吧。', pinyin: 'Méi wèntí! Wǒmen xiàwǔ yào qù tī zúqiú, zhènghǎo yìqǐ qù ba.', vi: 'Không vấn đề! Chiều bọn mình đi đá bóng, vừa vặn đi cùng nhé.' },
    { who: 'A', name: '小李', hanzi: '星期天同学聚会，你能来吗？', pinyin: 'Xīngqītiān tóngxué jùhuì, nǐ néng lái ma?', vi: 'Chủ nhật họp lớp, bạn đến được không?', scene: 'Bài 2 · Tiểu Lý và Tiểu Lâm nói chuyện họp lớp' },
    { who: 'B', name: '小林', hanzi: '能来。班里同学你联系得怎么样了？来多少人？', pinyin: 'Néng lái. Bān li tóngxué nǐ liánxì de zěnmeyàng le? Lái duōshao rén?', vi: 'Đến được. Bạn liên hệ các bạn trong lớp thế nào rồi? Bao nhiêu người đến?' },
    { who: 'A', name: '小李', hanzi: '差不多一半儿吧，张远还专门从国外飞回来呢。', pinyin: 'Chàbuduō yíbànr ba, Zhāng Yuǎn hái zhuānmén cóng guówài fēi huílai ne.', vi: 'Khoảng một nửa, Trương Viễn còn đặc biệt bay từ nước ngoài về.' },
    { who: 'B', name: '小林', hanzi: '是吗？毕业都快十年了，真想大家啊！对了，今天早上，我在地铁站遇到了王静，她毕业后就去上海工作了，她这次是来旅游的。', pinyin: 'Shì ma? Bì yè dōu kuài shí nián le, zhēn xiǎng dàjiā a! Duìle, jīntiān zǎoshang, wǒ zài dìtiě zhàn yùdàole Wáng Jìng, tā bì yè hòu jiù qù Shànghǎi gōngzuò le, tā zhè cì shì lái lǚyóu de.', vi: 'Vậy à? Tốt nghiệp sắp mười năm rồi, nhớ mọi người quá! À, sáng nay mình gặp Vương Tĩnh ở ga tàu điện, sau tốt nghiệp cô ấy đi Thượng Hải làm việc, lần này đến du lịch.' },
    { who: 'A', name: '小李', hanzi: '那太好了！麻烦你跟她联系一下，请她一起来参加同学聚会。聚会就在学校门口那个饭店，六点半。别迟到啊！', pinyin: 'Nà tài hǎo le! Máfan nǐ gēn tā liánxì yíxià, qǐng tā yìqǐ lái cānjiā tóngxué jùhuì. Jùhuì jiù zài xuéxiào ménkǒu nàge fàndiàn, liù diǎn bàn. Bié chídào a!', vi: 'Tốt quá! Phiền bạn liên hệ với cô ấy, mời cô ấy cùng đến họp lớp. Buổi họp ở khách sạn/nhà hàng ngay cổng trường, 6 rưỡi. Đừng đến muộn nhé!' },
    { who: 'B', name: '小林', hanzi: '放心吧。星期天六点半见！', pinyin: 'Fàng xīn ba. Xīngqītiān liù diǎn bàn jiàn!', vi: 'Yên tâm đi. Chủ nhật 6 rưỡi gặp!' },
    { who: 'A', name: '孙月', hanzi: '这是什么时候的照片？你真年轻！', pinyin: 'Zhè shì shénme shíhou de zhàopiàn? Nǐ zhēn niánqīng!', vi: 'Đây là ảnh hồi nào? Bạn trẻ thật!', scene: 'Bài 3 · Tôn Nguyệt và Vương Tĩnh nói về bạn bè' },
    { who: 'B', name: '王静', hanzi: '这是上大学时的照片。一看到这张照片，我就想起过去那段快乐的日子，好像重新回到了校园。', pinyin: 'Zhè shì shàng dàxué shí de zhàopiàn. Yí kàndào zhè zhāng zhàopiàn, wǒ jiù xiǎngqǐ guòqù nà duàn kuàilè de rìzi, hǎoxiàng chóngxīn huídàole xiàoyuán.', vi: 'Đây là ảnh hồi đại học. Vừa nhìn thấy tấm ảnh này, tôi nhớ lại quãng ngày vui vẻ ấy, như thể lại trở về trường.' },
    { who: 'A', name: '孙月', hanzi: '旁边这个人一定是你的好朋友吧？你们现在还联系吗？', pinyin: 'Pángbiān zhège rén yídìng shì nǐ de hǎo péngyou ba? Nǐmen xiànzài hái liánxì ma?', vi: 'Người bên cạnh chắc chắn là bạn tốt của bạn nhỉ? Giờ hai người còn liên lạc không?' },
    { who: 'B', name: '王静', hanzi: '当然了，尽管已经毕业这么多年，我们还是经常联系的，每次都有说不完的话。', pinyin: 'Dāngrán le, jǐnguǎn yǐjīng bì yè zhème duō nián, wǒmen háishi jīngcháng liánxì de, měi cì dōu yǒu shuō bu wán de huà.', vi: 'Tất nhiên rồi, dù đã tốt nghiệp nhiều năm, chúng tôi vẫn thường liên lạc, lần nào cũng có chuyện nói không hết.' },
    { who: 'A', name: '孙月', hanzi: '真羡慕你！我上大学时最好的朋友去了南方工作，我们俩已经好久没联系了。我一会儿就给她打个电话。', pinyin: 'Zhēn xiànmù nǐ! Wǒ shàng dàxué shí zuì hǎo de péngyou qùle nánfāng gōngzuò, wǒmen liǎ yǐjīng hǎojiǔ méi liánxì le. Wǒ yíhuìr jiù gěi tā dǎ ge diànhuà.', vi: 'Thật ngưỡng mộ bạn! Bạn thân nhất hồi đại học của tôi đi miền Nam làm việc, hai đứa đã lâu không liên lạc. Lát nữa tôi sẽ gọi cho cô ấy.' },
    { who: 'B', name: '王静', hanzi: '对。要知道，能有一个真正的朋友，有一段真正的友谊，是多么不容易！', pinyin: 'Duì. Yào zhīdào, néng yǒu yí ge zhēnzhèng de péngyou, yǒu yí duàn zhēnzhèng de yǒuyì, shì duōme bù róngyì!', vi: 'Đúng. Phải biết rằng, có được một người bạn chân chính, một tình bạn chân chính, khó biết bao!' },
    { who: 'A', name: '短文', hanzi: '每个人都需要朋友，朋友可以丰富我们的生活。离开朋友，我们的生活一定会非常无聊。那么，怎样才能交到更多的朋友呢？当然，要有好脾气。一个脾气不好的人虽然不一定让人讨厌，但是却很难跟人交朋友。因为没有人会喜欢跟一个总是容易生气的人在一起。我们还要经常跟周围的人交流。交流能让人们互相了解，如果有共同的兴趣、爱好或者习惯，就更容易成为朋友了。', pinyin: 'Měi ge rén dōu xūyào péngyou, péngyou kěyǐ fēngfù wǒmen de shēnghuó. Líkāi péngyou, wǒmen de shēnghuó yídìng huì fēicháng wúliáo. Nàme, zěnyàng cái néng jiāodào gèng duō de péngyou ne? Dāngrán, yào yǒu hǎo píqi. Yí ge píqi bù hǎo de rén suīrán bù yídìng ràng rén tǎoyàn, dànshì què hěn nán gēn rén jiāo péngyou. Yīnwèi méiyǒu rén huì xǐhuan gēn yí ge zǒngshì róngyì shēng qì de rén zài yìqǐ. Wǒmen hái yào jīngcháng gēn zhōuwéi de rén jiāoliú. Jiāoliú néng ràng rénmen hùxiāng liǎojiě, rúguǒ yǒu gòngtóng de xìngqù, àihào huòzhě xíguàn, jiù gèng róngyì chéngwéi péngyou le.', vi: 'Ai cũng cần bạn bè, bạn bè làm phong phú cuộc sống của ta. Rời xa bạn bè, cuộc sống nhất định sẽ rất nhàm chán. Vậy làm sao kết được nhiều bạn hơn? Tất nhiên phải có tính tình tốt. Người tính khí không tốt tuy chưa chắc khiến người ta ghét nhưng lại rất khó kết bạn, vì không ai thích ở cùng người luôn dễ nổi giận. Ta còn phải thường xuyên giao lưu với người xung quanh. Giao lưu giúp mọi người hiểu nhau; nếu có chung sở thích hay thói quen thì càng dễ trở thành bạn.', scene: 'Bài 4 · Làm sao kết được nhiều bạn' },
    { who: 'A', name: '短文', hanzi: '人的一生可以什么也没有，但不能没有朋友，而且必须要有自己真正的朋友。什么是真正的朋友？不同的人会有不同的理解。有些人觉得朋友就是能和自己一起快乐的人；有些人觉得朋友应该像镜子，能帮自己看到缺点。而我的理解是：当你遇到困难的时候，真正的朋友会站出来，及时给你帮助；当你无聊或者难过的时候，真正的朋友会陪在你身边，想办法让你感到幸福。', pinyin: 'Rén de yìshēng kěyǐ shénme yě méiyǒu, dàn bù néng méiyǒu péngyou, érqiě bìxū yào yǒu zìjǐ zhēnzhèng de péngyou. Shénme shì zhēnzhèng de péngyou? Bù tóng de rén huì yǒu bù tóng de lǐjiě. Yǒuxiē rén juéde péngyou jiù shì néng hé zìjǐ yìqǐ kuàilè de rén; yǒuxiē rén juéde péngyou yīnggāi xiàng jìngzi, néng bāng zìjǐ kàndào quēdiǎn. Ér wǒ de lǐjiě shì: Dāng nǐ yùdào kùnnan de shíhou, zhēnzhèng de péngyou huì zhàn chūlai, jíshí gěi nǐ bāngzhù; dāng nǐ wúliáo huòzhě nánguò de shíhou, zhēnzhèng de péngyou huì péi zài nǐ shēnbiān, xiǎng bànfǎ ràng nǐ gǎndào xìngfú.', vi: 'Cuộc đời một người có thể không có gì nhưng không thể không có bạn, hơn nữa phải có người bạn chân chính của mình. Bạn chân chính là gì? Mỗi người hiểu khác nhau. Có người cho rằng bạn là người có thể cùng mình vui; có người cho rằng bạn phải như tấm gương, giúp mình thấy khuyết điểm. Còn cách hiểu của tôi: khi bạn gặp khó khăn, người bạn chân chính sẽ đứng ra, giúp bạn kịp thời; khi bạn buồn chán hay buồn bã, người bạn chân chính sẽ ở bên cạnh, tìm cách làm bạn cảm thấy hạnh phúc.', scene: 'Bài 5 · Người bạn chân chính' },
  ],
  dialogueClips: [
    { label: '02-1 · Tiểu Hạ và Mark', src: A + 'l2-1.mp3' },
    { label: '02-2 · Tiểu Lý và Tiểu Lâm', src: A + 'l2-2.mp3' },
    { label: '02-3 · Tôn Nguyệt và Vương Tĩnh', src: A + 'l2-3.mp3' },
    { label: '02-4 · Làm sao kết được nhiều bạn', src: A + 'l2-4.mp3' },
    { label: '02-5 · Người bạn chân chính', src: A + 'l2-5.mp3' },
  ],
  dialogueTip: '<b>正好</b>: vừa vặn / đúng lúc. <b>差不多</b>: xấp xỉ, gần bằng. <b>尽管……但是/可是/却/还是……</b>: dù… nhưng…. <b>却</b>: phó từ chuyển ý, đứng sau chủ ngữ. <b>而</b>: liên từ nối hai vế đồng đẳng hoặc chuyển ý.',
  slowSay: '尽管已经毕业这么多年，我们还是经常联系的',

  vocab: [
    { hanzi: '适应', pinyin: 'shìyìng', pos: 'động từ', meaning: 'thích nghi', han_viet: 'thích ứng' },
    { hanzi: '交', pinyin: 'jiāo', pos: 'động từ', meaning: 'kết giao', han_viet: 'giao' },
    { hanzi: '平时', pinyin: 'píngshí', pos: 'danh từ', meaning: 'lúc thường, ngày thường', han_viet: 'bình thời' },
    { hanzi: '逛', pinyin: 'guàng', pos: 'động từ', meaning: 'đi dạo', han_viet: 'cuống' },
    { hanzi: '短信', pinyin: 'duǎnxìn', pos: 'danh từ', meaning: 'tin nhắn', han_viet: 'đoản tín' },
    { hanzi: '正好', pinyin: 'zhènghǎo', pos: 'phó từ', meaning: 'đúng lúc, gặp dịp', han_viet: 'chính hảo' },
    { hanzi: '聚会', pinyin: 'jùhuì', pos: 'động từ/danh từ', meaning: 'gặp gỡ; cuộc họp mặt', han_viet: 'tụ hội' },
    { hanzi: '联系', pinyin: 'liánxì', pos: 'động từ', meaning: 'liên hệ', han_viet: 'liên hệ' },
    { hanzi: '差不多', pinyin: 'chàbuduō', pos: 'phó từ', meaning: 'gần như, hầu như', han_viet: 'sai bất đa' },
    { hanzi: '专门', pinyin: 'zhuānmén', pos: 'phó từ', meaning: 'đặc biệt, riêng biệt', han_viet: 'chuyên môn' },
    { hanzi: '毕业', pinyin: 'bì yè', pos: 'động từ', meaning: 'tốt nghiệp', han_viet: 'tất nghiệp' },
    { hanzi: '麻烦', pinyin: 'máfan', pos: 'động từ', meaning: 'làm phiền', han_viet: 'ma phiền' },
    { hanzi: '好像', pinyin: 'hǎoxiàng', pos: 'phó từ', meaning: 'giống như, dường như', han_viet: 'hảo tượng' },
    { hanzi: '重新', pinyin: 'chóngxīn', pos: 'phó từ', meaning: 'lần nữa, lại một lần nữa', han_viet: 'trùng tân' },
    { hanzi: '尽管', pinyin: 'jǐnguǎn', pos: 'liên từ', meaning: 'cho dù, mặc dù', han_viet: 'tẫn quản' },
    { hanzi: '真正', pinyin: 'zhēnzhèng', pos: 'tính từ', meaning: 'chân chính, thật sự', han_viet: 'chân chính' },
    { hanzi: '友谊', pinyin: 'yǒuyì', pos: 'danh từ', meaning: 'tình bạn', han_viet: 'hữu nghị' },
    { hanzi: '丰富', pinyin: 'fēngfù', pos: 'động từ', meaning: 'làm phong phú', han_viet: 'phong phú' },
    { hanzi: '无聊', pinyin: 'wúliáo', pos: 'tính từ', meaning: 'vô vị, nhàm chán', han_viet: 'vô liêu' },
    { hanzi: '讨厌', pinyin: 'tǎoyàn', pos: 'động từ', meaning: 'ghét, không thích', han_viet: 'thảo yếm' },
    { hanzi: '却', pinyin: 'què', pos: 'phó từ', meaning: 'lại, nhưng mà', han_viet: 'khước' },
    { hanzi: '周围', pinyin: 'zhōuwéi', pos: 'danh từ', meaning: 'xung quanh', han_viet: 'chu vi' },
    { hanzi: '交流', pinyin: 'jiāoliú', pos: 'động từ', meaning: 'giao lưu, trao đổi', han_viet: 'giao lưu' },
    { hanzi: '理解', pinyin: 'lǐjiě', pos: 'động từ', meaning: 'hiểu', han_viet: 'lý giải' },
    { hanzi: '镜子', pinyin: 'jìngzi', pos: 'danh từ', meaning: 'gương, gương soi', han_viet: 'kính tử' },
    { hanzi: '而', pinyin: 'ér', pos: 'liên từ', meaning: '(chỉ sự tương phản) trong khi đó, mà', han_viet: 'nhi' },
    { hanzi: '当', pinyin: 'dāng', pos: 'giới từ', meaning: 'khi', han_viet: 'đương' },
    { hanzi: '困难', pinyin: 'kùnnan', pos: 'tính từ/danh từ', meaning: 'khó khăn', han_viet: 'khốn nan' },
    { hanzi: '及时', pinyin: 'jíshí', pos: 'phó từ', meaning: 'đúng lúc, kịp thời', han_viet: 'cập thời' },
    { hanzi: '陪', pinyin: 'péi', pos: 'động từ', meaning: 'đi cùng, ở bên cạnh', han_viet: 'bồi' },
  ],

  sections: [
    {
      kind: 'examples', label: '正好 · 差不多', title: '正好 (vừa vặn) và 差不多 (gần như)',
      intro: '正好 làm tính từ: vừa vặn (thời gian, vị trí, thể tích, số lượng, mức độ… thỏa mãn điều kiện nào đó); làm phó từ: đúng lúc, gặp dịp để làm việc gì. 差不多 làm tính từ: xấp xỉ, khác biệt rất nhỏ; làm phó từ: rất gần về mức độ, phạm vi, thời gian, khoảng cách, số lượng.',
      groups: [
        { label: '正好', items: [['苹果八块五，西瓜十一块五，正好二十块。', 'Píngguǒ bā kuài wǔ, xīguā shíyī kuài wǔ, zhènghǎo èrshí kuài.', 'Táo 8,5 tệ, dưa hấu 11,5 tệ, vừa đúng 20 tệ.'], ['你来得正好，我的钱包不见了，借我点儿钱吧。', 'Nǐ lái de zhènghǎo, wǒ de qiánbāo bú jiàn le, jiè wǒ diǎnr qián ba.', 'Bạn đến đúng lúc, ví tôi mất rồi, cho tôi mượn ít tiền.'], ['我们下午要去踢足球，正好一起去吧。', 'Wǒmen xiàwǔ yào qù tī zúqiú, zhènghǎo yìqǐ qù ba.', 'Chiều bọn mình đi đá bóng, tiện thể đi cùng nhé.'], ['我妹妹出生那天，正好下雪，所以爸爸妈妈叫她“小雪”。', 'Wǒ mèimei chūshēng nà tiān, zhènghǎo xià xuě, suǒyǐ bàba māma jiào tā "Xiǎoxuě".', 'Hôm em gái tôi sinh vừa đúng có tuyết rơi, nên bố mẹ gọi em là "Tiểu Tuyết".']] },
        { label: '差不多', items: [['这两个电子词典看上去差不多，左边这个怎么这么贵？', 'Zhè liǎng ge diànzǐ cídiǎn kàn shangqu chàbuduō, zuǒbian zhège zěnme zhème guì?', 'Hai cái từ điển điện tử này trông giống nhau, sao cái bên trái đắt vậy?'], ['他们俩性格差不多，所以很快就成了好朋友。', 'Tāmen liǎ xìnggé chàbuduō, suǒyǐ hěn kuài jiù chéngle hǎo péngyou.', 'Hai người tính cách giống nhau nên nhanh chóng thành bạn tốt.'], ['班里同学你联系得怎么样了？来多少人？差不多一半儿吧。', 'Bān li tóngxué nǐ liánxì de zěnmeyàng le? Lái duōshao rén? Chàbuduō yíbànr ba.', 'Bạn liên hệ các bạn trong lớp thế nào? Bao nhiêu người đến? Khoảng một nửa.'], ['女儿快一米七了，差不多跟我一样高了。', 'Nǚ\'ér kuài yì mǐ qī le, chàbuduō gēn wǒ yíyàng gāo le.', 'Con gái sắp 1m7, gần cao bằng tôi rồi.']] },
      ],
    },
    {
      kind: 'examples', label: '差不多 – 几乎', title: 'So sánh 差不多 và 几乎',
      intro: 'Giống nhau: đều là phó từ, diễn tả sự việc rất gần, xấp xỉ; đều làm trạng ngữ (他汉语说得很好，差不多/几乎跟中国人一样). Khác nhau: 差不多 dùng trực tiếp trước tính từ đơn âm tiết (差不多高), 几乎 cần thêm từ khác trước/sau tính từ; 差不多 dùng được trước số lượng từ (差不多六十岁), 几乎 thì không; 差不多 còn là tính từ làm vị ngữ (性格差不多), 几乎 không; 几乎 có thể diễn tả việc không mong muốn suýt xảy ra nhưng rốt cuộc không (几乎忘了告诉你), 差不多 không.',
      groups: [{ label: 'Ví dụ', items: [['他们俩差不多高。', 'Tāmen liǎ chàbuduō gāo.', 'Hai người cao xấp xỉ nhau.'], ['他们俩几乎一样高。', 'Tāmen liǎ jīhū yíyàng gāo.', 'Hai người gần như cao bằng nhau.'], ['李老师差不多六十岁了。', 'Lǐ lǎoshī chàbuduō liùshí suì le.', 'Thầy Lý gần sáu mươi tuổi rồi.'], ['这件事我几乎忘了告诉你了。', 'Zhè jiàn shì wǒ jīhū wàngle gàosu nǐ le.', 'Việc này tôi suýt quên nói với bạn.']] }],
    },
    {
      kind: 'examples', label: '尽管 · 却', title: '尽管……但是/可是/却/还是…… và 却',
      intro: '尽管 (liên từ) dùng ở vế trước của câu phức, đưa ra một sự thật; vế sau là kết quả không như thường lệ, kết hợp với 但是/可是/却/还是. 却 là phó từ, đứng sau chủ ngữ, trước động từ, biểu thị chuyển ý với ngữ khí nhẹ nhàng.',
      groups: [
        { label: '尽管', items: [['尽管已经毕业这么多年，我们还是经常联系的。', 'Jǐnguǎn yǐjīng bì yè zhème duō nián, wǒmen háishi jīngcháng liánxì de.', 'Dù đã tốt nghiệp nhiều năm, chúng tôi vẫn thường liên lạc.'], ['男朋友送给我的这份礼物尽管不贵，但却让我非常感动。', 'Nán péngyou sòng gěi wǒ de zhè fèn lǐwù jǐnguǎn bú guì, dàn què ràng wǒ fēicháng gǎndòng.', 'Món quà bạn trai tặng dù không đắt nhưng khiến tôi rất cảm động.'], ['尽管现在工作很忙，可到了周末他还是会跟朋友去打球。', 'Jǐnguǎn xiànzài gōngzuò hěn máng, kě dàole zhōumò tā háishi huì gēn péngyou qù dǎ qiú.', 'Dù giờ công việc bận, đến cuối tuần anh ấy vẫn đi đánh bóng với bạn.']] },
        { label: '却', items: [['有人觉得有房子和汽车就是幸福，有人却认为找到真正的爱情才是幸福。', 'Yǒu rén juéde yǒu fángzi hé qìchē jiù shì xìngfú, yǒu rén què rènwéi zhǎodào zhēnzhèng de àiqíng cái shì xìngfú.', 'Có người cho có nhà có xe là hạnh phúc, có người lại cho tìm được tình yêu thật mới là hạnh phúc.'], ['一个脾气不好的人虽然不一定让人讨厌，但是却很难跟人交朋友。', 'Yí ge píqi bù hǎo de rén suīrán bù yídìng ràng rén tǎoyàn, dànshì què hěn nán gēn rén jiāo péngyou.', 'Người tính khí không tốt tuy chưa chắc bị ghét nhưng lại rất khó kết bạn.'], ['现在很多人虽然住在同一个楼里，但是却从没说过话。', 'Xiànzài hěn duō rén suīrán zhù zài tóng yí ge lóu li, dànshì què cóng méi shuōguo huà.', 'Bây giờ nhiều người tuy ở cùng một tòa nhà nhưng lại chưa từng nói chuyện.']] },
      ],
    },
    {
      kind: 'examples', label: '而', title: 'Liên từ 而',
      intro: '而 dùng trong câu phức để nối hai vế, có thể biểu thị quan hệ đồng đẳng, cũng có thể biểu thị chuyển ý.',
      groups: [{ label: 'Ví dụ', items: [['“明”字，左边的“日”意思是太阳，而右边的“月”意思是月亮。', '"Míng" zì, zuǒbian de "rì" yìsi shì tàiyáng, ér yòubian de "yuè" yìsi shì yuèliang.', 'Chữ "明", bên trái "日" nghĩa mặt trời, còn bên phải "月" nghĩa mặt trăng.'], ['结婚前，我们都要清楚自己想要的是什么，而不要被别人对幸福的看法影响。', 'Jié hūn qián, wǒmen dōu yào qīngchu zìjǐ xiǎng yào de shì shénme, ér bú yào bèi biérén duì xìngfú de kànfǎ yǐngxiǎng.', 'Trước khi cưới phải rõ mình muốn gì, chứ đừng để bị ảnh hưởng bởi cách nhìn của người khác về hạnh phúc.'], ['在工作中遇到了问题，男人回到家不喜欢跟妻子说，而女人喜欢跟丈夫说。', 'Zài gōngzuò zhōng yùdàole wèntí, nánrén huídào jiā bù xǐhuan gēn qīzi shuō, ér nǚrén xǐhuan gēn zhàngfu shuō.', 'Gặp vấn đề trong công việc, đàn ông về nhà không thích nói với vợ, còn phụ nữ thích nói với chồng.']] }],
    },
    {
      kind: 'examples', label: 'Từ cùng chữ: 系', title: 'Những từ có chữ giống nhau: 系',
      intro: '联系 (liên hệ), 关系 (quan hệ), 没关系 (không sao).',
      groups: [{ label: 'Ví dụ', items: [['我现在在火车站，人太多了，过会儿我再跟你联系吧。', 'Wǒ xiànzài zài huǒchē zhàn, rén tài duō le, guò huìr wǒ zài gēn nǐ liánxì ba.', 'Tôi đang ở ga tàu, đông người quá, lát nữa tôi liên lạc lại với bạn.'], ['你和她关系那么好，能帮我介绍一下吗？', 'Nǐ hé tā guānxì nàme hǎo, néng bāng wǒ jièshào yíxià ma?', 'Bạn với cô ấy thân vậy, giúp tôi giới thiệu được không?'], ['我可能有点儿发烧，没关系，休息一下就好了。', 'Wǒ kěnéng yǒudiǎnr fā shāo, méi guānxi, xiūxi yíxià jiù hǎo le.', 'Tôi có thể hơi sốt, không sao, nghỉ chút là khỏi.']] }],
    },
  ],

  notes: [
    {
      title: '正好',
      body: 'Tính từ: vừa vặn (苹果八块五，西瓜十一块五，正好二十块). Phó từ: đúng lúc, gặp dịp làm việc gì (我们下午要去踢足球，正好一起去吧).',
      say: '我们下午要去踢足球，正好一起去吧',
    },
    {
      title: '差不多',
      body: 'Tính từ: xấp xỉ, khác biệt không lớn (性格差不多). Phó từ: gần như, rất gần về mức độ/phạm vi/thời gian/khoảng cách/số lượng (差不多一半儿). So với 几乎: 差不多 đứng trực tiếp trước tính từ đơn âm tiết và trước số lượng từ; 几乎 có thể nói việc không mong muốn suýt xảy ra.',
      say: '差不多一半儿吧',
    },
    {
      title: '尽管……但是/可是/却/还是……',
      body: '尽管 ở vế trước nêu một sự thật, vế sau là kết quả không như thường lệ, dùng với 但是/可是/却/还是. 尽管已经毕业这么多年，我们还是经常联系的。',
      say: '尽管已经毕业这么多年，我们还是经常联系的',
    },
    {
      title: '却',
      body: '却: phó từ, dùng sau chủ ngữ trước động từ, biểu thị chuyển ý với ngữ khí khá nhẹ. 有人觉得有房子和汽车就是幸福，有人却认为找到真正的爱情才是幸福。',
      say: '有人却认为找到真正的爱情才是幸福',
    },
    {
      title: '而',
      body: '而: liên từ nối hai vế, biểu thị quan hệ đồng đẳng (左边的“日”是太阳，而右边的“月”是月亮) hoặc chuyển ý (男人不喜欢说，而女人喜欢说).',
      say: '而我的理解是',
    },
    {
      title: 'Văn hóa: 在家靠父母，出门靠朋友',
      body: 'Ở nhà nhờ cha mẹ, ra ngoài nhờ bạn bè. Quan điểm kết bạn của người Trung Quốc được thể hiện qua tám chữ: 有福同享，有难同当 (có phúc cùng hưởng, có họa cùng chia). Có chuyện vui hay tốt đẹp thì chia sẻ với bạn bè; khi gặp khó khăn thì nói ra và cùng bạn nghĩ cách giải quyết.',
      say: '在家靠父母，出门靠朋友',
    },
  ],

  writeChars: ['适', '应', '逛', '聚', '联', '系', '镜', '陪'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (根据课文内容回答问题)',
      items: [
        { q: '马克刚来中国的时候适应这儿的生活吗？现在呢？', hint: '开始有点儿不习惯，现在慢慢适应了。' },
        { q: '马克新交的中国朋友怎么样？', hint: '他们平时常常一起看书、逛街、踢足球，朋友有时还给他发幽默短信。' },
        { q: '小李为什么给小林打电话？', hint: '因为要告诉他星期天同学聚会。' },
        { q: '他们什么时候聚会？在哪儿聚会？', hint: '星期天六点半，在学校门口那个饭店。' },
        { q: '王静看到上大学时的照片会想起什么？', hint: '会想起过去那段快乐的日子。' },
        { q: '毕业以后，孙月跟她上大学时最好的朋友还经常联系吗？', hint: '不，她们已经好久没联系了。' },
        { q: '如果没有朋友，我们的生活会怎么样？怎样才能交到更多的朋友？', hint: '会非常无聊；要有好脾气，还要经常跟周围的人交流。' },
        { q: '什么是真正的朋友？', hint: '你遇到困难时能站出来及时帮助你，你无聊或难过时能陪在你身边。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: hỏi nhau về việc kết bạn', hint: '你有中国朋友吗？你们是怎么认识的？他/她的性格怎么样？你们经常一起做什么？' },
        { q: 'Theo nhóm: giới thiệu người bạn tốt nhất, dùng ít nhất 4 cấu trúc', hint: '共同的爱好和习惯；想起过去那段快乐的日子；我们还是经常联系的；当我遇到困难的时候；及时给我帮助；真正的友谊。' },
      ],
    },
  ],

  sentences: [
    { parts: ['你', '适应', '这儿', '的', '生活', '了', '吗'], pinyin: 'Nǐ shìyìng zhèr de shēnghuó le ma?', vi: 'Bạn đã thích nghi với cuộc sống ở đây chưa?' },
    { parts: ['我们', '下午', '要', '去', '踢', '足球', '正好', '一起', '去', '吧'], pinyin: 'Wǒmen xiàwǔ yào qù tī zúqiú, zhènghǎo yìqǐ qù ba.', vi: 'Chiều bọn mình đi đá bóng, tiện thể đi cùng nhé.' },
    { parts: ['差不多', '一半儿', '张远', '还', '专门', '从', '国外', '飞', '回来'], pinyin: 'Chàbuduō yíbànr, Zhāng Yuǎn hái zhuānmén cóng guówài fēi huílai.', vi: 'Khoảng một nửa, Trương Viễn còn đặc biệt bay từ nước ngoài về.' },
    { parts: ['尽管', '已经', '毕业', '这么', '多', '年', '我们', '还是', '经常', '联系'], pinyin: 'Jǐnguǎn yǐjīng bì yè zhème duō nián, wǒmen háishi jīngcháng liánxì.', vi: 'Dù đã tốt nghiệp nhiều năm, chúng tôi vẫn thường liên lạc.' },
    { parts: ['能', '有', '一个', '真正', '的', '朋友', '是', '多么', '不', '容易'], pinyin: 'Néng yǒu yí ge zhēnzhèng de péngyou shì duōme bù róngyì.', vi: 'Có được một người bạn chân chính khó biết bao.' },
    { parts: ['朋友', '可以', '丰富', '我们', '的', '生活'], pinyin: 'Péngyou kěyǐ fēngfù wǒmen de shēnghuó.', vi: 'Bạn bè có thể làm phong phú cuộc sống của chúng ta.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 周围 · B 理解 · C 无聊 · D 适应 · E 镜子. Gõ chữ cái A–E.',
      items: [
        { prompt: '每个人对幸福都有不同的（ ）。', answer: 'B', gloss: '理解' }, { prompt: '我喜欢现在住的地方，很方便。不像以前住的地方，（ ）一个超市都没有。', answer: 'A', gloss: '周围' },
        { prompt: '生活就像（ ），你对它笑，它也对你笑；如果你对它哭，它也对你哭。', answer: 'E', gloss: '镜子' }, { prompt: '周末总是一个人在家太（ ）了，你应该找朋友出去逛逛街、看看电影、吃吃饭。', answer: 'C', gloss: '无聊' },
        { prompt: '我刚来这儿的时候很不（ ），后来慢慢习惯了，也交到了很多朋友，我越来越喜欢这儿的生活了。', answer: 'D', gloss: '适应' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 好像 · B 麻烦 · C 联系 · D 平时 · E 陪. Gõ chữ cái A–E.',
      items: [
        { prompt: '上车吧，我送你。 不（ ）你了，我坐出租车回去。', answer: 'B', gloss: '麻烦' }, { prompt: '周末的同学聚会你参加吗？ 当然，有几个同学毕业后就没（ ）了，正好借这个机会见见。', answer: 'C', gloss: '联系' },
        { prompt: '都九点了，你怎么还不起床？ 昨晚看足球比赛看到两点半，这不是周六吗？（ ）哪能睡到九点？', answer: 'D', gloss: '平时' }, { prompt: '小李，那个女孩儿是谁啊？你认识？ 应该不认识，但是（ ）在哪儿见过。', answer: 'A', gloss: '好像' },
        { prompt: '经理，我丈夫生病了。我想请一天假，（ ）他去医院看看。 好，你先把家里照顾好，工作的事别担心。', answer: 'E', gloss: '陪' },
      ],
    },
    {
      title: 'Giáo trình 比一比 · 差不多 / 几乎 (gõ từ)',
      hint: 'Gõ 差不多 hoặc 几乎 theo đáp án sách.',
      items: [
        { prompt: '今天早上起床晚了，上课（ ）迟到了。', answer: '几乎', gloss: '几乎' },
        { prompt: '我的房间跟这个教室（ ）大。', answer: '差不多', gloss: '差不多' },
        { prompt: '要不是你给我打电话，我（ ）忘了咱俩见面的事。', answer: '几乎', gloss: '几乎' },
      ],
    },
    {
      title: 'Giáo trình 扩展 · 联系 / 关系 / 没关系 (câu 1–3)',
      hint: 'A 联系 · B 关系 · C 没关系. Gõ chữ cái A–C.',
      items: [
        { prompt: '奇怪，我记得这条街上有一个咖啡馆的。 （ ），我们找个地方坐坐就行。', answer: 'C', gloss: '没关系' }, { prompt: '那我过一会儿再（ ）他吧，谢谢，再见。', answer: 'A', gloss: '联系' },
        { prompt: '你们两个的（ ）很不错？ 是，在我们班里，她是我最好的朋友。', answer: 'B', gloss: '关系' },
      ],
    },
  ],
}
