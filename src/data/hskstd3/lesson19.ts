import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 3, Bài 19: 你没看出来吗？ (sách trang 175–183).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách.
 * Nghe: 19-1…19-5. Bài tập: 热身/注释/练习 của giáo trình, đáp án theo "Đáp án giáo trình HSK 3" trang 38–39.
 */

const A = '/audio/hsk-std3/'

export const hskStd3Lesson19: Lesson = {
  id: 19,
  title: 'Anh không nhìn ra được à?',
  hanzi: '你没看出来吗？',
  pinyin: 'Nǐ méi kàn chūlai ma?',
  vi: 'Anh không nhìn ra được à?',
  intro: 'Nhận xét ngoại hình, thay đổi và du lịch. Học nghĩa mở rộng của bổ ngữ phương hướng (出来, 下来, 起来, 上去) và các từ 使 / 叫 / 让 (khiến cho).',

  dialogue: [
    { who: 'A', name: '爸爸', hanzi: '女儿最近喜欢把头发放在耳朵后面，你知道为什么吗？', pinyin: 'Nǚ\'ér zuìjìn xǐhuan bǎ tóufa fàng zài ěrduo hòumiàn, nǐ zhīdào wèi shénme ma?', vi: 'Con gái dạo này thích vén tóc ra sau tai, em biết vì sao không?', scene: 'Hội thoại 1 · Ở nhà' },
    { who: 'B', name: '妈妈', hanzi: '这样可以使她的脸看上去漂亮一些。', pinyin: 'Zhèyàng kěyǐ shǐ tā de liǎn kàn shangqu piàoliang yìxiē.', vi: 'Làm vậy có thể khiến khuôn mặt con trông đẹp hơn.' },
    { who: 'A', name: '爸爸', hanzi: '我最近觉得她和以前不太一样了。', pinyin: 'Wǒ zuìjìn juéde tā hé yǐqián bú tài yíyàng le.', vi: 'Dạo này anh thấy con không giống trước nữa.' },
    { who: 'B', name: '妈妈', hanzi: '女儿变化不小，她小时候喜欢短头发，像男孩子一样。', pinyin: 'Nǚ\'ér biànhuà bù xiǎo, tā xiǎo shíhou xǐhuan duǎn tóufa, xiàng nán háizi yíyàng.', vi: 'Con thay đổi không ít, hồi nhỏ con thích tóc ngắn, giống con trai.' },
    { who: 'A', name: '爸爸', hanzi: '我也想起来了。她现在慢慢地开始像个女孩子了。', pinyin: 'Wǒ yě xiǎng qilai le. Tā xiànzài mànmàn de kāishǐ xiàng ge nǚ háizi le.', vi: 'Anh cũng nhớ ra rồi. Giờ con dần dần bắt đầu giống con gái rồi.' },
    { who: 'A', name: '小丽', hanzi: '上次我们参加骑马比赛的照片，我选了几张洗出来了。', pinyin: 'Shàng cì wǒmen cānjiā qí mǎ bǐsài de zhàopiàn, wǒ xuǎnle jǐ zhāng xǐ chulai le.', vi: 'Ảnh lần trước chúng ta thi cưỡi ngựa, tôi chọn vài tấm rửa ra rồi.', scene: 'Hội thoại 2 · Đang xem ảnh' },
    { who: 'B', name: '同事', hanzi: '快给我看看。骑得最快的这位是谁？', pinyin: 'Kuài gěi wǒ kànkan. Qí de zuì kuài de zhè wèi shì shéi?', vi: 'Mau cho tôi xem. Người cưỡi nhanh nhất này là ai?' },
    { who: 'A', name: '小丽', hanzi: '你没看出来吗？他是小刚啊。', pinyin: 'Nǐ méi kàn chulai ma? Tā shì Xiǎogāng a.', vi: 'Anh không nhìn ra à? Anh ấy là Tiểu Cương đấy.' },
    { who: 'B', name: '同事', hanzi: '怎么看上去跟现在不太一样？', pinyin: 'Zěnme kàn shangqu gēn xiànzài bú tài yíyàng?', vi: 'Sao trông không giống bây giờ lắm?' },
    { who: 'A', name: '小丽', hanzi: '他上班穿西服、衬衫，比赛的时候穿的是运动服。', pinyin: 'Tā shàng bān chuān xīfú, chènshān, bǐsài de shíhou chuān de shì yùndòngfú.', vi: 'Đi làm anh ấy mặc vest, sơ mi, lúc thi thì mặc đồ thể thao.' },
    { who: 'B', name: '同事', hanzi: '他今天穿蓝西服，看上去像40多岁，还是穿运动服让他更年轻。', pinyin: 'Tā jīntiān chuān lán xīfú, kàn shangqu xiàng sìshí duō suì, háishi chuān yùndòngfú ràng tā gèng niánqīng.', vi: 'Hôm nay anh ấy mặc vest xanh, trông như hơn 40 tuổi, vẫn là mặc đồ thể thao khiến anh ấy trẻ hơn.' },
    { who: 'A', name: '朋友', hanzi: '我们一年没见面了吧？', pinyin: 'Wǒmen yì nián méi jiàn miàn le ba?', vi: 'Chúng ta một năm không gặp rồi nhỉ?', scene: 'Hội thoại 3 · Tại nhà chị Lệ' },
    { who: 'B', name: '小丽', hanzi: '听说你都有女儿了？她多大了？', pinyin: 'Tīngshuō nǐ dōu yǒu nǚ\'ér le? Tā duō dà le?', vi: 'Nghe nói bạn có con gái rồi? Bé bao nhiêu tuổi?' },
    { who: 'A', name: '朋友', hanzi: '她去年秋天出生的，刚过完一岁生日。', pinyin: 'Tā qùnián qiūtiān chūshēng de, gāng guòwán yí suì shēngrì.', vi: 'Bé sinh mùa thu năm ngoái, vừa qua sinh nhật một tuổi.' },
    { who: 'B', name: '小丽', hanzi: '她喜欢什么？我送给她。', pinyin: 'Tā xǐhuan shénme? Wǒ sònggěi tā.', vi: 'Bé thích gì? Tôi tặng bé.' },
    { who: 'A', name: '朋友', hanzi: '她就喜欢听她爸爸学鸟叫。哭的时候，只要她爸爸学小鸟叫，她马上就安静下来了。', pinyin: 'Tā jiù xǐhuan tīng tā bàba xué niǎo jiào. Kū de shíhou, zhǐyào tā bàba xué xiǎo niǎo jiào, tā mǎshàng jiù ānjìng xiàlai le.', vi: 'Bé chỉ thích nghe bố bắt chước tiếng chim. Lúc khóc, chỉ cần bố bắt chước chim hót là bé im ngay.' },
    { who: 'B', name: '小丽', hanzi: '啊？这个礼物我没办法送。', pinyin: 'Á? Zhège lǐwù wǒ méi bànfǎ sòng.', vi: 'Hả? Món quà này tôi không có cách nào tặng.' },
    { who: 'A', name: '短文', hanzi: '这次旅游，我去了不少地方，每个地方都让我非常难忘。我先去看了黄河，黄河是中国有名的大河，我坐在船上，一边看一边照相。一路上经过了很多地方，每个地方都不一样。我想快点儿把照片发给大家，叫朋友们也高兴高兴。', pinyin: 'Zhè cì lǚyóu, wǒ qùle bù shǎo dìfang, měi ge dìfang dōu ràng wǒ fēicháng nánwàng. Wǒ xiān qù kànle Huáng Hé, Huáng Hé shì Zhōngguó yǒumíng de dà hé, wǒ zuò zài chuán shang, yìbiān kàn yìbiān zhào xiàng. Yílù shang jīngguòle hěn duō dìfang, měi ge dìfang dōu bù yíyàng. Wǒ xiǎng kuài diǎnr bǎ zhàopiàn fāgěi dàjiā, jiào péngyoumen yě gāoxìng gāoxìng.', vi: 'Chuyến du lịch này tôi đã đến không ít nơi, nơi nào cũng khiến tôi rất khó quên. Tôi đến xem sông Hoàng Hà trước, Hoàng Hà là con sông lớn nổi tiếng của Trung Quốc, tôi ngồi trên thuyền vừa ngắm vừa chụp ảnh. Dọc đường đi qua nhiều nơi, mỗi nơi một vẻ. Tôi muốn nhanh chóng gửi ảnh cho mọi người để các bạn cũng vui.', scene: 'Bài đọc 4 · Chuyến du lịch' },
  ],
  dialogueClips: [
    { label: '19-1 · Ở nhà', src: A + 'l19-1.mp3' },
    { label: '19-2 · Đang xem ảnh', src: A + 'l19-2.mp3' },
    { label: '19-3 · Tại nhà chị Lệ', src: A + 'l19-3.mp3' },
    { label: '19-4 · Chuyến du lịch', src: A + 'l19-4.mp3' },
  ],
  dialogueTip: '<b>出来</b> (xuất hiện / nhận ra), <b>下来</b> (từ động → tĩnh, mạnh → yếu), <b>起来</b> (nhớ lại), <b>看上去/看起来</b> (xem ra). <b>使/叫/让</b> + người + trạng thái: khiến cho… (使 dùng văn viết, 叫 dùng văn nói).',
  slowSay: '你没看出来吗',

  vocab: [
    { hanzi: '耳朵', pinyin: 'ěrduo', pos: 'danh từ', meaning: 'tai', han_viet: 'nhĩ đóa' },
    { hanzi: '脸', pinyin: 'liǎn', pos: 'danh từ', meaning: 'mặt, khuôn mặt', han_viet: 'kiểm' },
    { hanzi: '短', pinyin: 'duǎn', pos: 'tính từ', meaning: 'ngắn', han_viet: 'đoản' },
    { hanzi: '马', pinyin: 'mǎ', pos: 'danh từ', meaning: 'ngựa', han_viet: 'mã' },
    { hanzi: '张', pinyin: 'zhāng', pos: 'lượng từ', meaning: 'tờ, tấm (giấy, ảnh…)', han_viet: 'trương' },
    { hanzi: '位', pinyin: 'wèi', pos: 'lượng từ', meaning: 'vị (người, hàm ý kính trọng)', han_viet: 'vị' },
    { hanzi: '蓝', pinyin: 'lán', pos: 'tính từ', meaning: 'có màu xanh da trời', han_viet: 'lam' },
    { hanzi: '秋(天)', pinyin: 'qiū(tiān)', pos: 'danh từ', meaning: '(mùa) thu', han_viet: 'thu' },
    { hanzi: '过', pinyin: 'guò', pos: 'động từ', meaning: 'ăn (mừng), trải qua', han_viet: 'quá' },
    { hanzi: '鸟', pinyin: 'niǎo', pos: 'danh từ', meaning: 'chim', han_viet: 'điểu' },
    { hanzi: '哭', pinyin: 'kū', pos: 'động từ', meaning: 'khóc', han_viet: 'khốc' },
    { hanzi: '黄河', pinyin: 'Huáng Hé', pos: 'danh từ', meaning: 'Hoàng Hà (con sông lớn thứ hai ở Trung Quốc)', han_viet: 'Hoàng Hà' },
    { hanzi: '船', pinyin: 'chuán', pos: 'danh từ', meaning: 'thuyền, tàu', han_viet: 'thuyền' },
    { hanzi: '经过', pinyin: 'jīngguò', pos: 'động từ', meaning: 'đi ngang qua', han_viet: 'kinh quá' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Nghĩa mở rộng', title: 'Nghĩa mở rộng của bổ ngữ chỉ phương hướng',
      intro: 'Bổ ngữ chỉ phương hướng có thể dùng sau động từ hoặc tính từ và mang nghĩa khác. 出来: sự xuất hiện của sự vật mới, hoặc phân biệt/nhận ra (từ ẩn đến hiện). 下来: chuyển từ động sang tĩnh, mạnh sang yếu, nhanh sang chậm. 起来: nhớ lại được điều gì. 看起来/看上去: đánh giá, ước lượng bằng cách nhìn.',
      groups: [
        { label: '出来', items: [['照片我选了几张洗出来了。', 'Zhàopiàn wǒ xuǎnle jǐ zhāng xǐ chulai le.', 'Ảnh tôi chọn vài tấm rửa ra rồi.'], ['朋友想出来一个学汉语的好办法。', 'Péngyou xiǎng chulai yí ge xué Hànyǔ de hǎo bànfǎ.', 'Bạn nghĩ ra một cách hay học tiếng Hán.'], ['你听出来了吗？这是谁的声音？', 'Nǐ tīng chulai le ma? Zhè shì shéi de shēngyīn?', 'Bạn nghe ra chưa? Đây là giọng ai?'], ['你没看出来吗？他是小刚啊。', 'Nǐ méi kàn chulai ma? Tā shì Xiǎogāng a.', 'Bạn không nhìn ra à? Anh ấy là Tiểu Cương mà.']] },
        { label: '下来 · 起来', items: [['前边的车越开越慢，停下来了。', 'Qiánbian de chē yuè kāi yuè màn, tíng xiàlai le.', 'Xe phía trước chạy chậm dần rồi dừng lại.'], ['天黑下来了，孩子们要回家了。', 'Tiān hēi xiàlai le, háizimen yào huí jiā le.', 'Trời tối dần, bọn trẻ phải về nhà.'], ['只要他爸爸学小鸟叫，她马上就安静下来了。', 'Zhǐyào tā bàba xué xiǎo niǎo jiào, tā mǎshàng jiù ānjìng xiàlai le.', 'Chỉ cần bố bắt chước chim hót, bé liền im ngay.'], ['我想起来了，她小时候像个男孩子。', 'Wǒ xiǎng qilai le, tā xiǎo shíhou xiàng ge nán háizi.', 'Tôi nhớ ra rồi, hồi nhỏ cô bé giống con trai.']] },
        { label: '看上去 / 看起来', items: [['把头发放在耳朵后边，可以使脸看上去漂亮一些。', 'Bǎ tóufa fàng zài ěrduo hòubian, kěyǐ shǐ liǎn kàn shangqu piàoliang yìxiē.', 'Vén tóc ra sau tai khiến mặt trông đẹp hơn.'], ['他今天穿蓝西服，看上去像40多岁。', 'Tā jīntiān chuān lán xīfú, kàn shangqu xiàng sìshí duō suì.', 'Hôm nay anh ấy mặc vest xanh, trông như hơn 40 tuổi.'], ['这是你做的饭吗？看起来很好吃。', 'Zhè shì nǐ zuò de fàn ma? Kàn qilai hěn hǎochī.', 'Đây là cơm bạn nấu à? Trông ngon quá.'], ['他今天一句话也没说，看起来有点儿不高兴。', 'Tā jīntiān yí jù huà yě méi shuō, kàn qilai yǒudiǎnr bù gāoxìng.', 'Hôm nay anh ấy không nói câu nào, trông có vẻ không vui.']] },
      ],
    },
    {
      kind: 'examples', label: '使 · 叫 · 让', title: '"使", "叫", "让" (khiến cho)',
      intro: 'Dùng kết hợp với thành phần kiêm ngữ để diễn tả ý khiến cho. Về cơ bản ba từ có nghĩa giống nhau nhưng 使 thường dùng trong văn viết, còn 叫 thường dùng trong văn nói.',
      groups: [{ label: 'Ví dụ', items: [['读书使我快乐。', 'Dú shū shǐ wǒ kuàilè.', 'Đọc sách khiến tôi vui.'], ['考试让我很紧张。', 'Kǎoshì ràng wǒ hěn jǐnzhāng.', 'Kỳ thi khiến tôi rất căng thẳng.'], ['穿运动服让他更年轻。', 'Chuān yùndòngfú ràng tā gèng niánqīng.', 'Mặc đồ thể thao khiến anh ấy trẻ hơn.'], ['我想快点儿把照片发给大家，叫朋友们也高兴高兴。', 'Wǒ xiǎng kuài diǎnr bǎ zhàopiàn fāgěi dàjiā, jiào péngyoumen yě gāoxìng gāoxìng.', 'Tôi muốn gửi ảnh cho mọi người để bạn bè cũng vui.']] }],
    },
    {
      kind: 'examples', label: 'Đọc cụm từ', title: 'Đọc to các cụm từ và câu (练习 1)',
      clip: { label: '19-5 · Đọc to các cụm từ và câu', src: A + 'l19-5.mp3' },
      intro: 'Bấm để nghe từng cụm.',
      groups: [{ label: 'Cụm từ', items: [
        ['很短', 'hěn duǎn', 'rất ngắn'], ['短头发', 'duǎn tóufa', 'tóc ngắn'], ['她小时候喜欢短头发', 'tā xiǎo shíhou xǐhuan duǎn tóufa', 'hồi nhỏ cô ấy thích tóc ngắn'],
        ['蓝色', 'lán sè', 'màu xanh'], ['蓝衬衫', 'lán chènshān', 'áo sơ mi xanh'], ['他今天穿蓝西服，看上去像40多岁', 'tā jīntiān chuān lán xīfú, kàn shangqu xiàng sìshí duō suì', 'hôm nay anh ấy mặc vest xanh, trông hơn 40 tuổi'],
        ['过生日', 'guò shēngrì', 'mừng sinh nhật'], ['过节', 'guò jié', 'ăn Tết / ngày lễ'], ['过周末', 'guò zhōumò', 'trải qua cuối tuần'], ['她刚过完一岁生日', 'tā gāng guòwán yí suì shēngrì', 'bé vừa qua sinh nhật một tuổi'],
        ['一条船', 'yì tiáo chuán', 'một chiếc thuyền'], ['坐船', 'zuò chuán', 'đi thuyền'], ['我坐在船上，一边看一边照相', 'wǒ zuò zài chuán shang, yìbiān kàn yìbiān zhào xiàng', 'tôi ngồi trên thuyền vừa ngắm vừa chụp ảnh'],
        ['经过超市', 'jīngguò chāoshì', 'đi ngang siêu thị'], ['经过一条河', 'jīngguò yì tiáo hé', 'đi qua một con sông'], ['一路上经过了很多地方', 'yílù shang jīngguòle hěn duō dìfang', 'dọc đường đi qua nhiều nơi'],
      ] }],
    },
  ],

  notes: [
    {
      title: 'Nghĩa mở rộng của bổ ngữ phương hướng',
      body: '出来: xuất hiện cái mới (想出来, 洗出来) hoặc nhận ra, phân biệt (看出来, 听出来). 下来: từ động sang tĩnh, mạnh sang yếu, nhanh sang chậm (停下来, 安静下来, 慢下来). 起来: nhớ lại được (想起来, 记起来). 看上去/看起来: xem ra, trông có vẻ.',
      say: '你没看出来吗',
    },
    {
      title: '"使", "叫", "让"',
      body: 'Ba từ cùng diễn tả ý "khiến cho"; 使 thường dùng trong văn viết, 叫 trong văn nói: 读书使我快乐, 考试让我很紧张, 叫朋友们也高兴高兴.',
      say: '穿运动服让他更年轻',
    },
    {
      title: 'Cách thành lập từ mới (旧字新词)',
      body: '以前 + 年 = 前年 (năm kia); 走路 + 经过 = 路过 (đi ngang qua); 运动 + 衣服 = 运动服 (đồ thể thao).',
      say: '运动服',
    },
    {
      title: 'Tục ngữ: 百闻不如一见',
      body: 'Trăm nghe không bằng một thấy. 闻 nghĩa là nghe nói, nghe thấy. Nghe nói chuyện gì một trăm lần cũng không bằng tận mắt chứng kiến một lần; những điều ta nhìn thấy luôn đáng tin cậy hơn điều nghe người khác nói.',
      say: '百闻不如一见',
    },
  ],

  writeChars: ['耳', '脸', '短', '蓝', '秋', '鸟', '哭', '船'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 4)',
      items: [
        { q: '女儿最近有什么变化？', hint: '女儿最近喜欢把头发放在耳朵后面。' },
        { q: '同事为什么没看出来照片里的小刚？', hint: '因为照片里的小刚看上去跟现在不太一样，他穿的是运动服。' },
        { q: '小刚上班穿什么？看上去怎么样？', hint: '小刚上班穿西服、衬衫，看上去像40多岁。' },
        { q: '小丽为什么说她不能送朋友女儿喜欢的礼物？', hint: '因为朋友女儿喜欢听爸爸学鸟叫，这个礼物她没办法送。' },
        { q: '“我”觉得这次旅行怎么样？', hint: '每个地方都让“我”非常难忘。' },
        { q: '“我”想给大家看什么？为什么？', hint: '想给大家看“我”经过的地方的照片，因为这样可以叫朋友也高兴高兴。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: nối động từ 看/听/想/黑/吃/瘦 với 起来/出来/下来/上去 rồi đặt câu', hint: 'Mẫu: 天黑下来了。' },
        { q: 'Theo nhóm: kể một việc gần đây ảnh hưởng đến bạn, dùng 使/叫/让', hint: 'Mẫu: 妈妈送给我一个照相机，让我很高兴。' },
      ],
    },
  ],

  sentences: [
    { parts: ['这样', '可以', '使', '她', '的', '脸', '看', '上去', '漂亮', '一些'], pinyin: 'Zhèyàng kěyǐ shǐ tā de liǎn kàn shangqu piàoliang yìxiē.', vi: 'Làm vậy khiến mặt cô ấy trông đẹp hơn.' },
    { parts: ['你', '没', '看', '出来', '吗'], pinyin: 'Nǐ méi kàn chulai ma?', vi: 'Bạn không nhìn ra à?' },
    { parts: ['他', '今天', '穿', '蓝', '西服', '看', '上去', '像', '40', '多', '岁'], pinyin: 'Tā jīntiān chuān lán xīfú, kàn shangqu xiàng sìshí duō suì.', vi: 'Hôm nay anh ấy mặc vest xanh, trông hơn 40 tuổi.' },
    { parts: ['她', '马上', '就', '安静', '下来', '了'], pinyin: 'Tā mǎshàng jiù ānjìng xiàlai le.', vi: 'Bé liền im ngay.' },
    { parts: ['我', '坐', '在', '船', '上', '一边', '看', '一边', '照相'], pinyin: 'Wǒ zuò zài chuán shang yìbiān kàn yìbiān zhào xiàng.', vi: 'Tôi ngồi trên thuyền vừa ngắm vừa chụp ảnh.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 秋天 · B 过 · C 鸟 · D 船 · E 张. Gõ chữ cái A–E.',
      items: [
        { prompt: '帮我把这几（ ）照片洗出来吧。', answer: 'E', gloss: '张' }, { prompt: '你还记得18岁生日是在哪儿（ ）的吗？', answer: 'B', gloss: '过' },
        { prompt: '（ ）是北京最好的季节。', answer: 'A', gloss: '秋天' }, { prompt: '她真爱说话，像只小（ ）一样。', answer: 'C', gloss: '鸟' },
        { prompt: '我希望能坐（ ）去旅行一次。', answer: 'D', gloss: '船' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 位 · B 经过 · C 马 · D 哭 · E 耳朵. Gõ chữ cái A–E.',
      items: [
        { prompt: '你怎么又（ ）了？ 我想家了。', answer: 'D', gloss: '哭' }, { prompt: '你一会儿（ ）超市吗？帮我买瓶水吧。 行，没问题。', answer: 'B', gloss: '经过' },
        { prompt: '你怎么了？ 我（ ）里边有点儿疼。', answer: 'E', gloss: '耳朵' }, { prompt: '您好，欢迎，请问您几（ ）？ 您好，我们一共是五个人。', answer: 'A', gloss: '位' },
        { prompt: '你会骑（ ）吗？ 不会，我从来没骑过。', answer: 'C', gloss: '马' },
      ],
    },
    {
      title: 'Giáo trình 注释 · Bổ ngữ phương hướng & 使/叫/让 (gõ từ còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: '雨下了三个小时，现在终于小了（ ）。 (下来/出来/起来)', answer: '下来', gloss: '下来' },
        { prompt: '你能看（ ）谁是哥哥，谁是弟弟吗？', answer: '出来', gloss: '出来' },
        { prompt: '穿了这条裙子，你看（ ）只有18岁。 (上去)', answer: '上去', gloss: '上去' },
        { prompt: '他学习不努力，这让妈妈（ ）。', answer: '很担心', gloss: '让' },
        { prompt: '这双皮鞋有点儿小，让他（ ）。', answer: '穿得不舒服', gloss: '让' },
        { prompt: '她又聪明又热情，叫人（ ）。', answer: '很喜爱', gloss: '叫' },
      ],
    },
    {
      title: 'Giáo trình 练习 3 · Hoàn thành đối thoại (gõ từ còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: 'A: 你（ ）不太舒服。', answer: '看上去', gloss: '看上去' },
        { prompt: 'A: 复习考试真让我（ ）！', answer: '着急', gloss: '让' },
        { prompt: 'A: 天黑（ ）了。', answer: '下来', gloss: '下来' },
        { prompt: 'B: 没问题。是不是黑天让你（ ）？', answer: '害怕', gloss: '让' },
        { prompt: 'A: 阿姨，我是大卫啊！您（ ）了吗？', answer: '看不出来', gloss: '出来' },
        { prompt: 'B: 是吗？这话真让我（ ）。', answer: '高兴', gloss: '让' },
        { prompt: 'A: 外边雨那么大，你怎么才回来？真让我（ ）。', answer: '担心', gloss: '让' },
        { prompt: 'B: 别担心，雨已经小（ ）了。', answer: '下来', gloss: '下来' },
      ],
    },
  ],
}
