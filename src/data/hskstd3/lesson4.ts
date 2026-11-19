import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 3, Bài 4: 她总是笑着跟客人说话。 (sách trang 45–52).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách.
 * Nghe: 04-1…04-5. Bài tập: 练习 2–4 của giáo trình, đáp án theo "Đáp án giáo trình HSK 3" trang 7–8.
 */

const A = '/audio/hsk-std3/'

export const hskStd3Lesson4: Lesson = {
  id: 4,
  title: 'Cô ấy luôn mỉm cười nói chuyện với khách',
  hanzi: '她总是笑着跟客人说话。',
  pinyin: 'Tā zǒngshì xiàozhe gēn kèrén shuō huà.',
  vi: 'Cô ấy luôn mỉm cười nói chuyện với khách',
  intro: 'Miêu tả người và hành động đi kèm. Học cấu trúc 又……又……, cấu trúc động từ1 + 着 (+ tân ngữ1) + động từ2 (+ tân ngữ2) chỉ hành động diễn ra cùng lúc.',

  dialogue: [
    { who: 'A', name: '小明', hanzi: '这是你们比赛的照片吗？', pinyin: 'Zhè shì nǐmen bǐsài de zhàopiàn ma?', vi: 'Đây là ảnh cuộc thi của các bạn à?', scene: 'Hội thoại 1 · Trong lớp học' },
    { who: 'B', name: '马可', hanzi: '是，这是我们比赛后照的。', pinyin: 'Shì, zhè shì wǒmen bǐsài hòu zhào de.', vi: 'Đúng, đây là ảnh chụp sau cuộc thi.' },
    { who: 'A', name: '小明', hanzi: '照得不错，你们都是一个年级的吗？', pinyin: 'Zhào de búcuò, nǐmen dōu shì yí ge niánjí de ma?', vi: 'Chụp đẹp đấy, các bạn đều cùng một lớp à?' },
    { who: 'B', name: '马可', hanzi: '不是。那个又高又漂亮的女孩儿是二年级的。', pinyin: 'Bú shì. Nàge yòu gāo yòu piàoliang de nǚháir shì èr niánjí de.', vi: 'Không. Cô gái vừa cao vừa xinh kia học năm hai.' },
    { who: 'A', name: '小明', hanzi: '旁边那个拿着书笑的人是谁？', pinyin: 'Pángbiān nàge názhe shū xiào de rén shì shéi?', vi: 'Người cầm sách cười bên cạnh là ai?' },
    { who: 'B', name: '马可', hanzi: '那是我！', pinyin: 'Nà shì wǒ!', vi: 'Đó là tôi!' },
    { who: 'A', name: '小丽', hanzi: '你觉得小红怎么样？', pinyin: 'Nǐ juéde Xiǎohóng zěnmeyàng?', vi: 'Bạn thấy Tiểu Hồng thế nào?', scene: 'Hội thoại 2 · Trong lớp học' },
    { who: 'B', name: '同学', hanzi: '她又聪明又热情，也很努力。', pinyin: 'Tā yòu cōngming yòu rèqíng, yě hěn nǔlì.', vi: 'Cô ấy vừa thông minh vừa nhiệt tình, cũng rất chăm chỉ.' },
    { who: 'A', name: '小丽', hanzi: '我看她总是笑着回答老师的问题。', pinyin: 'Wǒ kàn tā zǒngshì xiàozhe huídá lǎoshī de wèntí.', vi: 'Mình thấy cô ấy luôn mỉm cười trả lời câu hỏi của thầy cô.' },
    { who: 'B', name: '同学', hanzi: '她对每个人都笑，也常常对我笑。', pinyin: 'Tā duì měi ge rén dōu xiào, yě chángcháng duì wǒ xiào.', vi: 'Cô ấy cười với mọi người, cũng hay cười với mình.' },
    { who: 'A', name: '小丽', hanzi: '你是不是喜欢她啊？', pinyin: 'Nǐ shì bu shì xǐhuan tā a?', vi: 'Bạn có phải thích cô ấy không?' },
    { who: 'B', name: '同学', hanzi: '喜欢她的人太多了，你看那些拿着鲜花站在门口的，都是等她的。', pinyin: 'Xǐhuan tā de rén tài duō le, nǐ kàn nàxiē názhe xiānhuā zhàn zài ménkǒu de, dōu shì děng tā de.', vi: 'Người thích cô ấy nhiều lắm, bạn xem những người cầm hoa đứng ở cửa kia, đều là đợi cô ấy đấy.' },
    { who: 'A', name: '小刚', hanzi: '我有点儿饿了，我们进超市买点儿东西吧。', pinyin: 'Wǒ yǒudiǎnr è le, wǒmen jìn chāoshì mǎi diǎnr dōngxi ba.', vi: 'Anh hơi đói rồi, mình vào siêu thị mua ít đồ nhé.', scene: 'Hội thoại 3 · Ở trước cửa siêu thị' },
    { who: 'B', name: '小丽', hanzi: '好啊，这家超市的蛋糕又便宜又好吃，一块只要2.99元。', pinyin: 'Hǎo a, zhè jiā chāoshì de dàngāo yòu piányi yòu hǎochī, yí kuài zhǐ yào 2.99 yuán.', vi: 'Được, bánh kem siêu thị này vừa rẻ vừa ngon, một miếng chỉ 2,99 tệ.' },
    { who: 'A', name: '小刚', hanzi: '我们买两块儿，回家吃着蛋糕看电视，怎么样？', pinyin: 'Wǒmen mǎi liǎng kuàir, huí jiā chīzhe dàngāo kàn diànshì, zěnmeyàng?', vi: 'Mình mua hai miếng, về nhà vừa ăn bánh vừa xem ti vi, được không?' },
    { who: 'B', name: '小丽', hanzi: '好啊，我再去买一些喝的。', pinyin: 'Hǎo a, wǒ zài qù mǎi yìxiē hē de.', vi: 'Được, em đi mua thêm ít đồ uống.' },
    { who: 'A', name: '小刚', hanzi: '喝着咖啡吃蛋糕，太好了！', pinyin: 'Hēzhe kāfēi chī dàngāo, tài hǎo le!', vi: 'Vừa uống cà phê vừa ăn bánh, tuyệt quá!' },
    { who: 'A', name: '经理', hanzi: '您好！您找谁？', pinyin: 'Nín hǎo! Nín zhǎo shéi?', vi: 'Xin chào! Ông tìm ai ạ?', scene: 'Hội thoại 4 · Ở quán ăn' },
    { who: 'B', name: '客人', hanzi: '你们这儿是不是有一个又年轻又漂亮的服务员？', pinyin: 'Nǐmen zhèr shì bu shì yǒu yí ge yòu niánqīng yòu piàoliang de fúwùyuán?', vi: 'Ở đây có phải có một cô phục vụ vừa trẻ vừa xinh không?' },
    { who: 'A', name: '经理', hanzi: '我们这里年轻、漂亮的服务员有很多。', pinyin: 'Wǒmen zhèlǐ niánqīng, piàoliang de fúwùyuán yǒu hěn duō.', vi: 'Ở đây chúng tôi có nhiều cô phục vụ trẻ đẹp lắm.' },
    { who: 'B', name: '客人', hanzi: '她工作又认真又热情。', pinyin: 'Tā gōngzuò yòu rènzhēn yòu rèqíng.', vi: 'Cô ấy làm việc vừa chăm chỉ vừa nhiệt tình.' },
    { who: 'A', name: '经理', hanzi: '您能再说说吗？', pinyin: 'Nín néng zài shuōshuo ma?', vi: 'Ông có thể nói thêm được không?' },
    { who: 'B', name: '客人', hanzi: '她总是笑着跟客人说话。', pinyin: 'Tā zǒngshì xiàozhe gēn kèrén shuō huà.', vi: 'Cô ấy luôn mỉm cười nói chuyện với khách.' },
    { who: 'A', name: '经理', hanzi: '啊，我知道了，你说的是李小美吧？', pinyin: 'À, wǒ zhīdào le, nǐ shuō de shì Lǐ Xiǎoměi ba?', vi: 'À, tôi biết rồi, ông nói Lý Tiểu Mỹ phải không?' },
  ],
  dialogueClips: [
    { label: '04-1 · Trong lớp học (1)', src: A + 'l04-1.mp3' },
    { label: '04-2 · Trong lớp học (2)', src: A + 'l04-2.mp3' },
    { label: '04-3 · Ở trước cửa siêu thị', src: A + 'l04-3.mp3' },
    { label: '04-4 · Ở quán ăn', src: A + 'l04-4.mp3' },
  ],
  dialogueTip: '<b>又 + tính từ1 + 又 + tính từ2</b>: vừa… vừa… (又高又漂亮). <b>Động từ1 + 着 + động từ2</b>: hai hành động cùng lúc, động từ1 chỉ cách thức hoặc trạng thái của động từ2 (笑着说话, 拿着书笑).',
  slowSay: '她总是笑着跟客人说话',

  vocab: [
    { hanzi: '比赛', pinyin: 'bǐsài', pos: 'danh từ', meaning: 'cuộc thi đấu', han_viet: 'tỷ tái' },
    { hanzi: '照片', pinyin: 'zhàopiàn', pos: 'danh từ', meaning: 'bức ảnh', han_viet: 'chiếu phiến' },
    { hanzi: '年级', pinyin: 'niánjí', pos: 'danh từ', meaning: 'lớp, năm học', han_viet: 'niên cấp' },
    { hanzi: '又', pinyin: 'yòu', pos: 'phó từ', meaning: 'vừa', han_viet: 'hựu' },
    { hanzi: '聪明', pinyin: 'cōngming', pos: 'tính từ', meaning: 'thông minh', han_viet: 'thông minh' },
    { hanzi: '热情', pinyin: 'rèqíng', pos: 'tính từ', meaning: 'nhiệt tình', han_viet: 'nhiệt tình' },
    { hanzi: '努力', pinyin: 'nǔlì', pos: 'tính từ', meaning: 'hăng hái, tích cực làm việc', han_viet: 'nỗ lực' },
    { hanzi: '总是', pinyin: 'zǒngshì', pos: 'phó từ', meaning: 'luôn luôn', han_viet: 'tổng thị' },
    { hanzi: '回答', pinyin: 'huídá', pos: 'động từ', meaning: 'trả lời', han_viet: 'hồi đáp' },
    { hanzi: '站', pinyin: 'zhàn', pos: 'động từ', meaning: 'đứng', han_viet: 'trạm' },
    { hanzi: '饿', pinyin: 'è', pos: 'tính từ', meaning: 'đói', han_viet: 'ngạ' },
    { hanzi: '超市', pinyin: 'chāoshì', pos: 'danh từ', meaning: 'siêu thị', han_viet: 'siêu thị' },
    { hanzi: '蛋糕', pinyin: 'dàngāo', pos: 'danh từ', meaning: 'bánh kem', han_viet: 'đản cao' },
    { hanzi: '年轻', pinyin: 'niánqīng', pos: 'tính từ', meaning: 'trẻ tuổi', han_viet: 'niên khinh' },
    { hanzi: '认真', pinyin: 'rènzhēn', pos: 'tính từ', meaning: 'nghiêm túc, chăm chỉ', han_viet: 'nhận chân' },
    { hanzi: '客人', pinyin: 'kèrén', pos: 'danh từ', meaning: 'khách, khách hàng', han_viet: 'khách nhân' },
    { hanzi: '小明', pinyin: 'Xiǎomíng', pos: 'danh từ riêng', meaning: 'bạn Minh (tên người)', han_viet: '' },
    { hanzi: '马可', pinyin: 'Mǎkě', pos: 'danh từ riêng', meaning: 'Marco', han_viet: '' },
    { hanzi: '李小美', pinyin: 'Lǐ Xiǎoměi', pos: 'danh từ riêng', meaning: 'Lý Tiểu Mỹ (tên người)', han_viet: '' },
  ],

  sections: [
    {
      kind: 'examples', label: '又……又……', title: 'Cấu trúc 又 + tính từ1 + 又 + tính từ2',
      intro: 'Cấu trúc "又 + tính từ 1 + 又 + tính từ 2" được dùng để nói về hai đặc điểm cùng tồn tại ở một người hay sự vật. Chẳng hạn 又高又漂亮 diễn tả rằng người nào đó vừa cao và rất đẹp.',
      groups: [{ label: 'Ví dụ trong sách', items: [['这个西瓜又大又甜。', 'Zhège xīguā yòu dà yòu tián.', 'Quả dưa này vừa to vừa ngọt.'], ['外边又黑又冷。', 'Wàibian yòu hēi yòu lěng.', 'Bên ngoài vừa tối vừa lạnh.'], ['服务员又年轻又漂亮。', 'Fúwùyuán yòu niánqīng yòu piàoliang.', 'Cô phục vụ vừa trẻ vừa xinh.'], ['她工作又认真又热情。', 'Tā gōngzuò yòu rènzhēn yòu rèqíng.', 'Cô ấy làm việc vừa chăm chỉ vừa nhiệt tình.']] }],
    },
    {
      kind: 'examples', label: 'Động từ + 着', title: 'Cấu trúc: động từ1 + 着 (+ tân ngữ1) + động từ2 (+ tân ngữ2)',
      intro: 'Cấu trúc này được dùng để diễn tả hai hành động xảy ra cùng lúc, trong đó hành động thứ nhất là hành động đi kèm hoặc cho biết phương thức thực hiện hành động thứ hai. Chẳng hạn 他们站着聊天儿 có nghĩa là họ đang nói chuyện phiếm trong lúc đứng chứ không phải ngồi.',
      groups: [{ label: 'Ví dụ trong sách', items: [['弟弟吃着苹果写作业。', 'Dìdi chīzhe píngguǒ xiě zuòyè.', 'Em trai vừa ăn táo vừa làm bài tập.'], ['周先生和周太太坐着看电视。', 'Zhōu xiānsheng hé Zhōu tàitai zuòzhe kàn diànshì.', 'Ông bà Châu ngồi xem ti vi.'], ['很多人拿着鲜花站在门口。', 'Hěn duō rén názhe xiānhuā zhàn zài ménkǒu.', 'Nhiều người cầm hoa đứng ở cửa.'], ['她总是笑着跟客人说话。', 'Tā zǒngshì xiàozhe gēn kèrén shuō huà.', 'Cô ấy luôn mỉm cười nói chuyện với khách.']] }],
    },
    {
      kind: 'examples', label: 'Đọc cụm từ', title: 'Đọc to các cụm từ và câu (练习 1)',
      clip: { label: '04-5 · Đọc to các cụm từ và câu', src: A + 'l04-5.mp3' },
      intro: 'Bấm để nghe. Cách thành lập từ mới: 女 + 孩子 → 女孩, 做 + 客人 → 做客, 新鲜 + 花 → 鲜花.',
      groups: [{ label: 'Cụm từ', items: [
        ['总是下雨', 'zǒngshì xià yǔ', 'mưa suốt'], ['她总是笑着跟客人说话', 'tā zǒngshì xiàozhe gēn kèrén shuō huà', 'cô ấy luôn cười nói với khách'],
        ['笑着回答', 'xiàozhe huídá', 'cười trả lời'], ['我有点儿饿了', 'wǒ yǒudiǎnr è le', 'tôi hơi đói'],
        ['年轻人', 'niánqīng rén', 'người trẻ'], ['这是你们比赛的照片吗？', 'Zhè shì nǐmen bǐsài de zhàopiàn ma?', 'Đây là ảnh cuộc thi của các bạn à?'],
        ['女孩', 'nǚhái', 'cô gái'], ['做客', 'zuò kè', 'làm khách'], ['鲜花', 'xiānhuā', 'hoa tươi'],
      ] }],
    },
  ],

  notes: [
    {
      title: 'Cấu trúc 又……又……',
      body: 'Cấu trúc "又 + tính từ 1 + 又 + tính từ 2" được dùng để nói về hai đặc điểm cùng tồn tại ở một người hay sự vật: 这个西瓜又大又甜。 外边又黑又冷。 她工作又认真又热情。',
      say: '又高又漂亮',
    },
    {
      title: 'Hành động đi kèm: động từ1 + 着 + động từ2',
      body: 'Diễn tả hai hành động xảy ra cùng lúc, hành động thứ nhất đi kèm hoặc cho biết phương thức thực hiện hành động thứ hai: 他们站着聊天儿 (đứng nói chuyện, không phải ngồi). 弟弟吃着苹果写作业。 她总是笑着跟客人说话。',
      say: '她总是笑着跟客人说话',
    },
    {
      title: 'Tục ngữ: 五十步笑百步',
      body: 'Chó chê mèo lắm lông (Lươn ngắn còn chê chạch dài, thờn bơn méo miệng chê trai lệch mồm). Nghĩa gốc là người chạy 50 bước cười người chạy 100 bước: hai người lính bỏ chạy khi thua trận, người chạy 50 bước cười người chạy 100 bước là nhát gan, dù cả hai đều bỏ chạy. Ngày nay câu này được dùng để phê bình những người có khuyết điểm giống người khác nhưng lại cười nhạo người khác.',
      say: '五十步笑百步',
    },
  ],

  writeChars: ['又', '照', '聪', '努', '站', '饿', '蛋', '糕'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 4)',
      items: [
        { q: '那张照片是什么时候照的？', hint: '那张照片是马可比赛后照的。' },
        { q: '照片里马可在做什么？', hint: '马可在拿着书笑。' },
        { q: '喜欢小红的人多不多？她怎么样？', hint: '喜欢小红的人很多，她又聪明又热情，也很努力。' },
        { q: '小刚和小丽打算买什么？', hint: '他们打算买蛋糕和咖啡。' },
        { q: '小刚和小丽回家后打算做什么？', hint: '他们打算喝着咖啡、吃着蛋糕看电视。' },
        { q: '客人要找谁？她怎么样？', hint: '客人要找李小美，她又年轻又漂亮，总是笑着跟客人说话。' },
      ],
    },
    {
      title: 'Hoạt động theo cặp: trả lời bằng 又……又…… (运用 1)',
      items: [
        { q: '你喜欢你的老师吗？为什么？', hint: 'Dùng 又……又…… để trả lời.' },
        { q: '你喜欢你住的地方吗？为什么？', hint: '' },
        { q: '你的好朋友是谁？他/她是什么样的人？', hint: '' },
        { q: '你喜欢去商店买衣服还是喜欢上网买衣服？为什么？', hint: '' },
      ],
    },
  ],

  sentences: [
    { parts: ['那', '个', '又', '高', '又', '漂亮', '的', '女孩儿', '是', '二', '年级', '的'], pinyin: 'Nàge yòu gāo yòu piàoliang de nǚháir shì èr niánjí de.', vi: 'Cô gái vừa cao vừa xinh kia học năm hai.' },
    { parts: ['她', '又', '聪明', '又', '热情'], pinyin: 'Tā yòu cōngming yòu rèqíng.', vi: 'Cô ấy vừa thông minh vừa nhiệt tình.' },
    { parts: ['她', '总是', '笑', '着', '回答', '老师', '的', '问题'], pinyin: 'Tā zǒngshì xiàozhe huídá lǎoshī de wèntí.', vi: 'Cô ấy luôn cười trả lời câu hỏi của thầy cô.' },
    { parts: ['这', '家', '超市', '的', '蛋糕', '又', '便宜', '又', '好吃'], pinyin: 'Zhè jiā chāoshì de dàngāo yòu piányi yòu hǎochī.', vi: 'Bánh kem siêu thị này vừa rẻ vừa ngon.' },
    { parts: ['喝', '着', '咖啡', '吃', '蛋糕'], pinyin: 'Hēzhe kāfēi chī dàngāo.', vi: 'Vừa uống cà phê vừa ăn bánh.' },
    { parts: ['她', '总是', '笑', '着', '跟', '客人', '说话'], pinyin: 'Tā zǒngshì xiàozhe gēn kèrén shuō huà.', vi: 'Cô ấy luôn mỉm cười nói chuyện với khách.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 比赛 · B 超市 · C 客人 · D 饿 · E 认真. Gõ chữ cái A–E.',
      items: [
        { prompt: '（ ）快到了，快去洗水果。', answer: 'C', gloss: '客人' }, { prompt: '工作到下午三点的时候，我常常很（ ）。', answer: 'D', gloss: '饿' },
        { prompt: '这个孩子工作的时候很（ ），大家都喜欢他。', answer: 'E', gloss: '认真' }, { prompt: '这是什么（ ）？你能给我介绍一下吗？', answer: 'A', gloss: '比赛' },
        { prompt: '我下楼去（ ）买点儿东西。', answer: 'B', gloss: '超市' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 年级 · B 照片 · C 蛋糕 · D 总是 · E 努力. Gõ chữ cái A–E.',
      items: [
        { prompt: '你怎么还看电视？不（ ）学习，怎么能找到好工作呢？', answer: 'E', gloss: '努力' }, { prompt: '这张（ ）是什么时候的？ 是我妈妈小时候的。', answer: 'B', gloss: '照片' },
        { prompt: '你怎么（ ）想睡觉？ 我工作太累了，起得早，睡得晚。', answer: 'D', gloss: '总是' }, { prompt: '这位老人是谁？ 她是我一（ ）时候的老师。', answer: 'A', gloss: '年级' },
        { prompt: '您来几块（ ）？ 两块。', answer: 'C', gloss: '蛋糕' },
      ],
    },
    {
      title: 'Giáo trình 注释 · Hoàn thành câu (gõ cụm còn thiếu)',
      hint: 'Gõ đúng cụm chữ Hán theo đáp án sách.',
      items: [
        { prompt: '这家超市的东西（ ）。', answer: '又好又便宜', accept: ['又便宜又好'], gloss: '又……又……' }, { prompt: '他做饭做得（ ）。', answer: '又快又好吃', accept: ['又好吃又快'], gloss: '又……又……' },
        { prompt: '我喜欢（ ）的衣服。', answer: '又便宜又漂亮', accept: ['又漂亮又便宜'], gloss: '又……又……' }, { prompt: '我喜欢听着歌（ ）。', answer: '上网', gloss: 'động từ + 着' },
        { prompt: '我们不能（ ）开车。', answer: '玩着手机', gloss: 'động từ + 着' }, { prompt: '我们的老师（ ）上课。', answer: '站着', gloss: 'động từ + 着' },
      ],
    },
  ],
}
