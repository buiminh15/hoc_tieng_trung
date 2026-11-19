import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 3, Bài 8: 你去哪儿我就去哪儿。 (sách trang 80–87).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách.
 * Nghe: 08-1…08-5. Bài tập: 练习 2 của giáo trình, đáp án giải theo ngữ cảnh.
 */

const A = '/audio/hsk-std3/'

export const hskStd3Lesson8: Lesson = {
  id: 8,
  title: 'Em đi đâu thì anh đi đến đó',
  hanzi: '你去哪儿我就去哪儿。',
  pinyin: 'Nǐ qù nǎr wǒ jiù qù nǎr.',
  vi: 'Em đi đâu thì anh đi đến đó',
  intro: 'Nói về việc mua nhà, tạm biệt và chọn chỗ ngồi. Học phân biệt 又 và 再 (hành động lặp lại đã xảy ra / chưa xảy ra) và cách dùng linh hoạt đại từ nghi vấn với 就 (你去哪儿我就去哪儿).',

  dialogue: [
    { who: 'A', name: '同事', hanzi: '听说你最近打算买房子？', pinyin: 'Tīngshuō nǐ zuìjìn dǎsuàn mǎi fángzi?', vi: 'Nghe nói dạo này cô định mua nhà?', scene: 'Hội thoại 1 · Trong phòng giải lao' },
    { who: 'B', name: '小丽', hanzi: '是，昨天去看了看，今天又去看了看，明天还要再去看看。', pinyin: 'Shì, zuótiān qù kànle kàn, jīntiān yòu qù kànle kàn, míngtiān hái yào zài qù kànkan.', vi: 'Vâng, hôm qua đi xem, hôm nay lại đi xem, ngày mai còn phải đi xem nữa.' },
    { who: 'A', name: '同事', hanzi: '都不满意吗？', pinyin: 'Dōu bù mǎnyì ma?', vi: 'Đều không vừa ý à?' },
    { who: 'B', name: '小丽', hanzi: '一个没有电梯，不方便。一个有电梯，但是在二十层。', pinyin: 'Yí ge méiyǒu diàntī, bù fāngbiàn. Yí ge yǒu diàntī, dànshì zài èrshí céng.', vi: 'Một căn không có thang máy, bất tiện. Một căn có thang máy nhưng ở tầng hai mươi.' },
    { who: 'A', name: '同事', hanzi: '二十层怎么了？', pinyin: 'Èrshí céng zěnme le?', vi: 'Tầng hai mươi thì sao?' },
    { who: 'B', name: '小丽', hanzi: '太高了，往下看多害怕啊！', pinyin: 'Tài gāo le, wǎng xià kàn duō hàipà a!', vi: 'Cao quá, nhìn xuống sợ biết bao!' },
    { who: 'A', name: '小明', hanzi: '听说你下个星期就要回国了？', pinyin: 'Tīngshuō nǐ xià ge xīngqī jiù yào huí guó le?', vi: 'Nghe nói tuần sau bạn sắp về nước à?', scene: 'Hội thoại 2 · Ở trường' },
    { who: 'B', name: '马可', hanzi: '是啊，真不想离开北京。', pinyin: 'Shì a, zhēn bù xiǎng líkāi Běijīng.', vi: 'Đúng vậy, thật không muốn rời Bắc Kinh.' },
    { who: 'A', name: '小明', hanzi: '我下个星期不在北京，不能去机场送你了。', pinyin: 'Wǒ xià ge xīngqī bú zài Běijīng, bù néng qù jīchǎng sòng nǐ le.', vi: 'Tuần sau mình không ở Bắc Kinh, không thể ra sân bay tiễn bạn được.' },
    { who: 'B', name: '马可', hanzi: '没关系，你忙吧。', pinyin: 'Méi guānxi, nǐ máng ba.', vi: 'Không sao, bạn cứ bận đi.' },
    { who: 'A', name: '小明', hanzi: '这个小熊猫送给你，欢迎你以后再到中国来。', pinyin: 'Zhège xiǎo xióngmāo sòng gěi nǐ, huānyíng nǐ yǐhòu zài dào Zhōngguó lái.', vi: 'Tặng bạn chú gấu trúc nhỏ này, hoan nghênh sau này bạn lại đến Trung Quốc.' },
    { who: 'B', name: '马可', hanzi: '谢谢。希望以后能再见面。', pinyin: 'Xièxie. Xīwàng yǐhòu néng zài jiàn miàn.', vi: 'Cảm ơn. Hy vọng sau này có thể gặp lại.' },
    { who: 'A', name: '小丽', hanzi: '小刚，我们坐哪儿？', pinyin: 'Xiǎogāng, wǒmen zuò nǎr?', vi: 'Tiểu Cương, chúng ta ngồi đâu?', scene: 'Hội thoại 3 · Ở quán cà phê' },
    { who: 'B', name: '小刚', hanzi: '你坐哪儿我就坐哪儿。', pinyin: 'Nǐ zuò nǎr wǒ jiù zuò nǎr.', vi: 'Em ngồi đâu anh ngồi đó.' },
    { who: 'A', name: '小丽', hanzi: '坐这儿吧，这儿安静。你想喝什么饮料？', pinyin: 'Zuò zhèr ba, zhèr ānjìng. Nǐ xiǎng hē shénme yǐnliào?', vi: 'Ngồi đây đi, ở đây yên tĩnh. Anh muốn uống nước gì?' },
    { who: 'B', name: '小刚', hanzi: '你喝什么我就喝什么。', pinyin: 'Nǐ hē shénme wǒ jiù hē shénme.', vi: 'Em uống gì anh uống nấy.' },
    { who: 'A', name: '小丽', hanzi: '喝可乐吧。你等我一会儿，我马上回来。', pinyin: 'Hē kělè ba. Nǐ děng wǒ yíhuìr, wǒ mǎshàng huílai.', vi: 'Uống coca đi. Anh đợi em một lát, em quay lại ngay.' },
    { who: 'B', name: '小刚', hanzi: '小丽，你去哪儿？你去哪儿我就去哪儿。', pinyin: 'Xiǎolì, nǐ qù nǎr? Nǐ qù nǎr wǒ jiù qù nǎr.', vi: 'Tiểu Lệ, em đi đâu? Em đi đâu anh đi đó.' },
    { who: 'A', name: '小丽', hanzi: '我去洗手间。', pinyin: 'Wǒ qù xǐshǒujiān.', vi: 'Em đi nhà vệ sinh.' },
    { who: 'A', name: '老同学', hanzi: '快五年了，你几乎没变化。', pinyin: 'Kuài wǔ nián le, nǐ jīhū méi biànhuà.', vi: 'Sắp năm năm rồi, bạn gần như không thay đổi.', scene: 'Hội thoại 4 · Ở nhà Châu Minh' },
    { who: 'B', name: '周太太', hanzi: '谁说的？我胖了，以前的衣服都不能穿了。', pinyin: 'Shéi shuō de? Wǒ pàng le, yǐqián de yīfu dōu bù néng chuān le.', vi: 'Ai nói vậy? Tôi béo lên rồi, quần áo trước đây đều không mặc được nữa.' },
    { who: 'A', name: '老同学', hanzi: '健康最重要，胖瘦没关系。', pinyin: 'Jiànkāng zuì zhòngyào, pàngshòu méi guānxi.', vi: 'Sức khỏe quan trọng nhất, béo gầy không sao.' },
    { who: 'B', name: '周太太', hanzi: '是呀，想吃什么就吃什么。', pinyin: 'Shì ya, xiǎng chī shénme jiù chī shénme.', vi: 'Đúng vậy, muốn ăn gì thì ăn nấy.' },
    { who: 'A', name: '老同学', hanzi: '你做饭还是周明做饭？', pinyin: 'Nǐ zuò fàn háishi Zhōu Míng zuò fàn?', vi: 'Bạn nấu cơm hay Châu Minh nấu?' },
    { who: 'B', name: '周太太', hanzi: '我做，我想吃什么就做什么，想吃多少就做多少。', pinyin: 'Wǒ zuò, wǒ xiǎng chī shénme jiù zuò shénme, xiǎng chī duōshao jiù zuò duōshao.', vi: 'Tôi nấu, tôi muốn ăn gì thì nấu nấy, muốn ăn bao nhiêu thì nấu bấy nhiêu.' },
  ],
  dialogueClips: [
    { label: '08-1 · Trong phòng giải lao', src: A + 'l08-1.mp3' },
    { label: '08-2 · Ở trường', src: A + 'l08-2.mp3' },
    { label: '08-3 · Ở quán cà phê', src: A + 'l08-3.mp3' },
    { label: '08-4 · Ở nhà Châu Minh', src: A + 'l08-4.mp3' },
  ],
  dialogueTip: '<b>又</b> + động từ: việc <i>đã</i> lặp lại (今天又去看了看). <b>再</b> + động từ: việc <i>chưa</i> xảy ra mà sẽ lặp lại (明天再去). <b>Đại từ nghi vấn + 就 + đại từ nghi vấn</b>: hai đại từ cùng chỉ một đối tượng, không còn là câu hỏi (你坐哪儿我就坐哪儿).',
  slowSay: '你去哪儿我就去哪儿',

  vocab: [
    { hanzi: '又', pinyin: 'yòu', pos: 'phó từ', meaning: 'lại', han_viet: 'hựu' },
    { hanzi: '满意', pinyin: 'mǎnyì', pos: 'động từ', meaning: 'hài lòng, vừa ý', han_viet: 'mãn ý' },
    { hanzi: '电梯', pinyin: 'diàntī', pos: 'danh từ', meaning: 'thang máy', han_viet: 'điện thê' },
    { hanzi: '层', pinyin: 'céng', pos: 'lượng từ', meaning: 'tầng', han_viet: 'tằng' },
    { hanzi: '害怕', pinyin: 'hàipà', pos: 'động từ', meaning: 'sợ', han_viet: 'hại phạ' },
    { hanzi: '熊猫', pinyin: 'xióngmāo', pos: 'danh từ', meaning: 'gấu trúc, panda', han_viet: 'hùng miêu' },
    { hanzi: '见面', pinyin: 'jiàn miàn', pos: 'động từ', meaning: 'gặp, gặp nhau', han_viet: 'kiến diện' },
    { hanzi: '安静', pinyin: 'ānjìng', pos: 'tính từ', meaning: 'yên tĩnh', han_viet: 'an tĩnh' },
    { hanzi: '可乐', pinyin: 'kělè', pos: 'danh từ', meaning: 'coca-cola', han_viet: 'khả lạc' },
    { hanzi: '一会儿', pinyin: 'yíhuìr', pos: 'danh từ', meaning: 'chốc lát, một lát', han_viet: 'nhất hội nhi' },
    { hanzi: '马上', pinyin: 'mǎshàng', pos: 'phó từ', meaning: 'liền, ngay lập tức', han_viet: 'mã thượng' },
    { hanzi: '洗手间', pinyin: 'xǐshǒujiān', pos: 'danh từ', meaning: 'nhà vệ sinh', han_viet: 'tẩy thủ gian' },
    { hanzi: '老', pinyin: 'lǎo', pos: 'tính từ', meaning: 'già, cũ', han_viet: 'lão' },
    { hanzi: '几乎', pinyin: 'jīhū', pos: 'phó từ', meaning: 'hầu như, gần như', han_viet: 'cơ hồ' },
    { hanzi: '变化', pinyin: 'biànhuà', pos: 'động từ', meaning: 'thay đổi', han_viet: 'biến hóa' },
    { hanzi: '健康', pinyin: 'jiànkāng', pos: 'tính từ', meaning: 'khỏe mạnh', han_viet: 'kiện khang' },
    { hanzi: '重要', pinyin: 'zhòngyào', pos: 'tính từ', meaning: 'quan trọng', han_viet: 'trọng yếu' },
  ],

  sections: [
    {
      kind: 'examples', label: '又 và 再', title: '“又” và “再”',
      intro: 'Phó từ 又 và 再 đều đặt trước động từ để chỉ hành động/tình huống được lặp lại. “又 + động từ” thường cho biết hành động/tình huống đã xảy ra; “再 + động từ” cho biết hành động/tình huống đó vẫn chưa xảy ra.',
      groups: [
        { label: '又 (đã lặp lại)', items: [['上个星期我买了一条裤子，昨天又买了一条。', 'Shàng ge xīngqī wǒ mǎile yì tiáo kùzi, zuótiān yòu mǎile yì tiáo.', 'Tuần trước tôi mua một cái quần, hôm qua lại mua một cái.'], ['你上午已经喝了一杯咖啡，下午怎么又喝了一杯？', 'Nǐ shàngwǔ yǐjīng hēle yì bēi kāfēi, xiàwǔ zěnme yòu hēle yì bēi?', 'Sáng bạn đã uống một ly cà phê, chiều sao lại uống một ly?'], ['小刚，你前天迟到，昨天迟到，今天怎么又迟到了？', 'Xiǎogāng, nǐ qiántiān chídào, zuótiān chídào, jīntiān zěnme yòu chídào le?', 'Tiểu Cương, hôm kia bạn đến muộn, hôm qua đến muộn, hôm nay sao lại đến muộn?'], ['我昨天看了一个电影，今天又看了一个。', 'Wǒ zuótiān kànle yí ge diànyǐng, jīntiān yòu kànle yí ge.', 'Hôm qua tôi xem một bộ phim, hôm nay lại xem một bộ.']] },
        { label: '再 (chưa xảy ra)', items: [['你只吃了一点儿饭，再吃一点儿吧。', 'Nǐ zhǐ chīle yìdiǎnr fàn, zài chī yìdiǎnr ba.', 'Bạn chỉ ăn một chút cơm, ăn thêm chút nữa đi.'], ['家里只有一个面包了，我们再买一些吧。', 'Jiā li zhǐ yǒu yí ge miànbāo le, wǒmen zài mǎi yìxiē ba.', 'Trong nhà chỉ còn một cái bánh mì, chúng ta mua thêm một ít nhé.'], ['那个饭馆我昨天去了一次，明天还想再去一次。', 'Nàge fànguǎn wǒ zuótiān qùle yí cì, míngtiān hái xiǎng zài qù yí cì.', 'Quán đó hôm qua tôi đã đến một lần, ngày mai còn muốn đến thêm lần nữa.'], ['昨天去看了看，今天又去看了看，明天还要再去看看。', 'Zuótiān qù kànle kàn, jīntiān yòu qù kànle kàn, míngtiān hái yào zài qù kànkan.', 'Hôm qua đi xem, hôm nay lại đi xem, ngày mai còn phải đi xem nữa.']] },
      ],
    },
    {
      kind: 'examples', label: 'Đại từ nghi vấn + 就', title: 'Đại từ nghi vấn được sử dụng linh hoạt (1)',
      intro: 'Trong tiếng Hán, 就 có thể dùng ở giữa hai đại từ nghi vấn giống nhau. Khi đó hai đại từ không diễn tả nghi vấn mà cùng chỉ một đối tượng không xác định (người, sự vật hay cách thức). Khi hai mệnh đề có cùng chủ ngữ thì có thể lược chủ ngữ ở mệnh đề sau; khi chủ ngữ khác nhau thì chủ ngữ thứ hai phải đặt trước 就.',
      groups: [
        { label: 'Ví dụ', items: [['什么东西便宜我就买什么。', 'Shénme dōngxi piányi wǒ jiù mǎi shénme.', 'Thứ gì rẻ tôi mua thứ đó.'], ['你哪天有时间就哪天来我家吧。', 'Nǐ nǎ tiān yǒu shíjiān jiù nǎ tiān lái wǒ jiā ba.', 'Bạn có thời gian ngày nào thì ngày đó đến nhà tôi nhé.'], ['谁喜欢他他就喜欢谁。', 'Shéi xǐhuan tā tā jiù xǐhuan shéi.', 'Ai thích anh ấy thì anh ấy thích người đó.'], ['你坐哪儿我就坐哪儿。', 'Nǐ zuò nǎr wǒ jiù zuò nǎr.', 'Bạn ngồi đâu tôi ngồi đó.'], ['想吃多少就做多少。', 'Xiǎng chī duōshao jiù zuò duōshao.', 'Muốn ăn bao nhiêu thì nấu bấy nhiêu.']] },
      ],
    },
    {
      kind: 'examples', label: 'Đọc cụm từ', title: 'Đọc to các cụm từ và câu (练习 1)',
      clip: { label: '08-5 · Đọc to các cụm từ và câu', src: A + 'l08-5.mp3' },
      intro: 'Bấm để nghe từng cụm.',
      groups: [{ label: 'Cụm từ', items: [
        ['很满意', 'hěn mǎnyì', 'rất hài lòng'], ['不满意', 'bù mǎnyì', 'không hài lòng'], ['对服务员很满意', 'duì fúwùyuán hěn mǎnyì', 'rất hài lòng với nhân viên phục vụ'], ['那些房子你都不满意吗？', 'Nàxiē fángzi nǐ dōu bù mǎnyì ma?', 'Những căn nhà đó bạn đều không vừa ý à?'],
        ['不害怕', 'bú hàipà', 'không sợ'], ['别害怕', 'bié hàipà', 'đừng sợ'], ['我害怕他', 'wǒ hàipà tā', 'tôi sợ anh ấy'], ['往下看多害怕啊', 'wǎng xià kàn duō hàipà a', 'nhìn xuống sợ biết bao'],
        ['见个面', 'jiàn ge miàn', 'gặp một lần'], ['跟朋友见面', 'gēn péngyou jiàn miàn', 'gặp bạn bè'], ['希望以后能再见面', 'xīwàng yǐhòu néng zài jiàn miàn', 'hy vọng sau này có thể gặp lại'],
        ['玩儿一会儿', 'wánr yíhuìr', 'chơi một lát'], ['你等我一会儿', 'nǐ děng wǒ yíhuìr', 'bạn đợi tôi một lát'],
        ['没变化', 'méi biànhuà', 'không thay đổi'], ['变化很大', 'biànhuà hěn dà', 'thay đổi rất lớn'], ['变化太快', 'biànhuà tài kuài', 'thay đổi quá nhanh'], ['你几乎没变化', 'nǐ jīhū méi biànhuà', 'bạn gần như không thay đổi'],
      ] }],
    },
  ],

  notes: [
    {
      title: '“又” và “再”',
      body: 'Cả 又 và 再 đều đặt trước động từ để chỉ một hành động/tình huống được lặp lại. “又 + động từ” thường cho biết hành động đã xảy ra: 我昨天看了一个电影，今天又看了一个。 “再 + động từ” cho biết hành động vẫn chưa xảy ra: 明天还想再去一次。',
      say: '昨天去看了看，今天又去看了看，明天还要再去看看',
    },
    {
      title: 'Đại từ nghi vấn được sử dụng linh hoạt (1)',
      body: 'Hai đại từ nghi vấn giống nhau nối bằng 就 không còn là câu hỏi mà cùng chỉ một đối tượng không xác định: 什么东西便宜我就买什么, 你坐哪儿我就坐哪儿. Hai mệnh đề cùng chủ ngữ thì có thể lược chủ ngữ ở mệnh đề sau; khác chủ ngữ thì chủ ngữ thứ hai đặt trước 就.',
      say: '你去哪儿我就去哪儿',
    },
    {
      title: 'Tục ngữ: 站得高，看得远',
      body: 'Đứng càng cao, nhìn càng xa. Người ta sẽ có tầm nhìn rộng hơn nếu đứng ở chỗ cao hơn. Câu này còn dùng với hàm ý: khi đối mặt với một vấn đề, ta nên xem xét từ nhiều khía cạnh chứ không phải chỉ một khía cạnh, điều này giúp có được hiểu biết toàn diện hơn về vấn đề đó.',
      say: '站得高，看得远',
    },
  ],

  writeChars: ['满', '层', '怕', '猫', '静', '乐', '变', '健'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 4)',
      items: [
        { q: '小丽最近在做什么？', hint: '小丽最近在看房子，她打算买房子。' },
        { q: '小丽为什么不满意？', hint: '一个房子没有电梯，不方便；一个有电梯，但是在二十层，太高了，往下看害怕。' },
        { q: '小明送给了马可什么东西？他为什么送马可东西？', hint: '小明送给了马可一个小熊猫，因为马可下个星期要回国，小明不能去机场送他。' },
        { q: '小丽和小刚在哪儿？做什么？', hint: '他们在咖啡厅，在选座位、点饮料。' },
        { q: '小丽要去哪儿？小刚也去吗？', hint: '小丽要去洗手间。小刚说“你去哪儿我就去哪儿”。' },
        { q: '周太太为什么说自己胖了？', hint: '因为她以前的衣服都不能穿了。' },
      ],
    },
    {
      title: 'Hoạt động theo cặp: kế hoạch du lịch (运用 1)',
      items: [
        { q: '你打算去哪儿旅游？', hint: '哪儿好玩儿我就去哪儿。' },
        { q: '什么时候去？怎么去？', hint: 'Dùng cấu trúc: 哪天有时间我就哪天去 / 怎么方便我就怎么去.' },
        { q: '跟谁一起去？住在哪儿？到了旅游的地方吃什么？', hint: '谁想去我就跟谁一起去 / 哪儿便宜我就住哪儿 / 什么好吃我就吃什么.' },
      ],
    },
  ],

  sentences: [
    { parts: ['昨天', '去', '看', '了', '看', '，', '今天', '又', '去', '看', '了', '看'], pinyin: 'Zuótiān qù kànle kàn, jīntiān yòu qù kànle kàn.', vi: 'Hôm qua đi xem, hôm nay lại đi xem.' },
    { parts: ['明天', '还', '要', '再', '去', '看看'], pinyin: 'Míngtiān hái yào zài qù kànkan.', vi: 'Ngày mai còn phải đi xem nữa.' },
    { parts: ['你', '坐', '哪儿', '我', '就', '坐', '哪儿'], pinyin: 'Nǐ zuò nǎr wǒ jiù zuò nǎr.', vi: 'Em ngồi đâu anh ngồi đó.' },
    { parts: ['你', '喝', '什么', '我', '就', '喝', '什么'], pinyin: 'Nǐ hē shénme wǒ jiù hē shénme.', vi: 'Em uống gì anh uống nấy.' },
    { parts: ['希望', '以后', '能', '再', '见面'], pinyin: 'Xīwàng yǐhòu néng zài jiàn miàn.', vi: 'Hy vọng sau này có thể gặp lại.' },
    { parts: ['你', '几乎', '没', '变化'], pinyin: 'Nǐ jīhū méi biànhuà.', vi: 'Bạn gần như không thay đổi.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 层 · B 几乎 · C 洗手间 · D 电梯 · E 害怕. Gõ chữ cái A–E.',
      items: [
        { prompt: '（ ）里人太多了，我们走上去吧。', answer: 'D', gloss: '电梯' }, { prompt: '你家住几（ ）？', answer: 'A', gloss: '层' },
        { prompt: '没事儿，我一点儿也不（ ）。', answer: 'E', gloss: '害怕' }, { prompt: '我去一下（ ），马上回来。', answer: 'C', gloss: '洗手间' },
        { prompt: '我现在（ ）每天都要用电脑。', answer: 'B', gloss: '几乎' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 见面 · B 变化 · C 重要 · D 熊猫 · E 满意. Gõ chữ cái A–E.',
      items: [
        { prompt: '您对我们的服务（ ）吗？ 不错，我玩儿得很高兴。', answer: 'E', gloss: '满意' }, { prompt: '周末你做什么了？ 我去看（ ）了。', answer: 'D', gloss: '熊猫' },
        { prompt: '我们几点（ ）？ 三点半吧。', answer: 'A', gloss: '见面' }, { prompt: '你看你，这几年一点儿（ ）都没有。 是啊，我每天都运动。', answer: 'B', gloss: '变化' },
        { prompt: '这件衣服太贵了，别买了。 贵不贵不（ ），你喜欢就行。', answer: 'C', gloss: '重要' },
      ],
    },
    {
      title: 'Giáo trình 注释 · 又 hay 再? (gõ chữ Hán)',
      hint: 'Điền 又 hoặc 再.',
      items: [
        { prompt: '我上个星期去了那个中国饭馆，明天想（ ）去一次。', answer: '再', gloss: 'chưa xảy ra' },
        { prompt: '你怎么（ ）买了一条裤子？不是已经有一条了吗？', answer: '又', gloss: 'đã xảy ra' },
        { prompt: '刚才我去找他，他没在办公室，我一会儿（ ）去。', answer: '再', gloss: 'chưa xảy ra' },
      ],
    },
    {
      title: 'Giáo trình 注释 · Hoàn thành mẫu đối thoại (gõ câu còn thiếu)',
      hint: 'Dùng 疑问代词 + 就 + 疑问代词.',
      items: [
        { prompt: 'A: 你想喝点儿什么？ B: （ ）。', answer: '有什么我就喝什么', accept: ['你喝什么我就喝什么', '什么好喝我就喝什么'], gloss: 'cái gì…' },
        { prompt: 'A: 我们什么时候去爬山？ B: （ ）。', answer: '你什么时候有时间我们就什么时候去', accept: ['哪天有时间就哪天去', '什么时候有时间就什么时候去'], gloss: 'lúc nào…' },
        { prompt: 'A: 你想跟谁一起去旅游？ B: （ ）。', answer: '谁想去我就跟谁一起去', accept: ['谁有时间我就跟谁一起去'], gloss: 'ai…' },
      ],
    },
  ],
}
