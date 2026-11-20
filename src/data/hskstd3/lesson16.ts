import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 3, Bài 16: 我现在累得下了班就想睡觉。 (sách trang 151–158).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách.
 * Nghe: 16-1…16-5. Bài tập: 热身/注释/练习 của giáo trình, đáp án theo "Đáp án giáo trình HSK 3" trang 32–33.
 */

const A = '/audio/hsk-std3/'

export const hskStd3Lesson16: Lesson = {
  id: 16,
  title: 'Bây giờ tôi mệt đến nỗi hết giờ làm là chỉ muốn đi ngủ',
  hanzi: '我现在累得下了班就想睡觉。',
  pinyin: 'Wǒ xiànzài lèi de xiàle bān jiù xiǎng shuì jiào.',
  vi: 'Bây giờ tôi mệt đến nỗi hết giờ làm là chỉ muốn đi ngủ',
  intro: 'Giả thiết và miêu tả trạng thái. Học cấu trúc 如果……(的话)，(chủ ngữ)就……, bổ ngữ trạng thái phức tạp có 得 và tính từ một âm tiết lặp lại "AA的".',

  dialogue: [
    { who: 'A', name: '小丽', hanzi: '我不喜欢一直住在同一个城市，想去其他城市看一看。', pinyin: 'Wǒ bù xǐhuan yìzhí zhù zài tóng yí ge chéngshì, xiǎng qù qítā chéngshì kàn yi kàn.', vi: 'Tôi không thích cứ sống mãi ở một thành phố, muốn đến các thành phố khác xem thử.', scene: 'Hội thoại 1 · Trong công ty' },
    { who: 'B', name: '周明', hanzi: '我年轻的时候也这么想，但是那时候没有钱，如果有钱，就去了。', pinyin: 'Wǒ niánqīng de shíhou yě zhème xiǎng, dànshì nà shíhou méiyǒu qián, rúguǒ yǒu qián, jiù qù le.', vi: 'Hồi trẻ tôi cũng nghĩ vậy, nhưng lúc đó không có tiền, nếu có tiền thì đã đi rồi.' },
    { who: 'A', name: '小丽', hanzi: '那您现在为什么不去？', pinyin: 'Nà nín xiànzài wèi shénme bú qù?', vi: 'Vậy bây giờ sao anh không đi?' },
    { who: 'B', name: '周明', hanzi: '现在钱不是问题了，主要是没有时间。', pinyin: 'Xiànzài qián bú shì wèntí le, zhǔyào shì méiyǒu shíjiān.', vi: 'Bây giờ tiền không phải vấn đề, chủ yếu là không có thời gian.' },
    { who: 'A', name: '小丽', hanzi: '我认为现在您有时间也不会出去玩儿。', pinyin: 'Wǒ rènwéi xiànzài nín yǒu shíjiān yě bú huì chūqu wánr.', vi: 'Tôi nghĩ bây giờ anh có thời gian cũng sẽ không đi chơi.' },
    { who: 'B', name: '周明', hanzi: '你说得对，我现在累得下了班就想睡觉。', pinyin: 'Nǐ shuō de duì, wǒ xiànzài lèi de xiàle bān jiù xiǎng shuì jiào.', vi: 'Cô nói đúng, giờ tôi mệt đến nỗi hết giờ làm là chỉ muốn đi ngủ.' },
    { who: 'A', name: '同事', hanzi: '谢谢你们来看我女儿。你送的小皮鞋和小帽子真漂亮！', pinyin: 'Xièxie nǐmen lái kàn wǒ nǚ\'ér. Nǐ sòng de xiǎo píxié hé xiǎo màozi zhēn piàoliang!', vi: 'Cảm ơn các bạn đến thăm con gái tôi. Giày da nhỏ và mũ nhỏ bạn tặng đẹp quá!', scene: 'Hội thoại 2 · Tại nhà đồng nghiệp' },
    { who: 'B', name: '小丽', hanzi: '别客气，你女儿长得白白的、胖胖的，真可爱！现在多高了？', pinyin: 'Bié kèqi, nǐ nǚ\'ér zhǎng de báibái de, pàngpàng de, zhēn kě\'ài! Xiànzài duō gāo le?', vi: 'Đừng khách sáo, con gái bạn trắng trẻo, mập mạp, đáng yêu thật! Giờ cao bao nhiêu rồi?' },
    { who: 'A', name: '同事', hanzi: '快1米了，25公斤。', pinyin: 'Kuài yì mǐ le, èrshíwǔ gōngjīn.', vi: 'Sắp một mét rồi, 25 ki-lô-gam.' },
    { who: 'B', name: '小丽', hanzi: '你看她鼻子小小的，头发黑黑的，长得像谁？', pinyin: 'Nǐ kàn tā bízi xiǎoxiǎo de, tóufa hēihēi de, zhǎng de xiàng shéi?', vi: 'Nhìn mũi con bé nhỏ nhỏ, tóc đen đen, giống ai nhỉ?' },
    { who: 'A', name: '同事', hanzi: '像她爸爸，刚出生时她爸爸高兴得一个晚上都没睡着。', pinyin: 'Xiàng tā bàba, gāng chūshēng shí tā bàba gāoxìng de yí ge wǎnshang dōu méi shuìzháo.', vi: 'Giống bố nó, lúc mới sinh bố nó vui đến nỗi cả đêm không ngủ được.' },
    { who: 'A', name: '小刚', hanzi: '我的牙还是很疼。', pinyin: 'Wǒ de yá háishi hěn téng.', vi: 'Răng tôi vẫn rất đau.', scene: 'Hội thoại 3 · Trong công ty' },
    { who: 'B', name: '同事', hanzi: '如果不舒服，就去医院检查一下吧。', pinyin: 'Rúguǒ bù shūfu, jiù qù yīyuàn jiǎnchá yíxià ba.', vi: 'Nếu khó chịu thì đến bệnh viện kiểm tra một chút đi.' },
    { who: 'A', name: '小刚', hanzi: '检查好几次了，但是没什么用。', pinyin: 'Jiǎnchá hǎo jǐ cì le, dànshì méi shénme yòng.', vi: 'Kiểm tra mấy lần rồi, nhưng chẳng ích gì.' },
    { who: 'B', name: '同事', hanzi: '大夫怎么说的？', pinyin: 'Dàifu zěnme shuō de?', vi: 'Bác sĩ nói sao?' },
    { who: 'A', name: '小刚', hanzi: '每次医生都告诉我，回家好好儿刷牙。', pinyin: 'Měi cì yīshēng dōu gàosu wǒ, huí jiā hǎohāor shuā yá.', vi: 'Lần nào bác sĩ cũng bảo tôi về nhà đánh răng cho kỹ.' },
    { who: 'A', name: '短文', hanzi: '很多人都觉得现在人和人的关系冷冷的，这可能是因为工作太忙，忙得没时间跟别人见面，累得不愿意和别人多说话。其实，我们应该多对别人笑笑，说话时如果能多用一些“您好”“谢谢”这样的词语，和别人的关系就会变得更好。', pinyin: 'Hěn duō rén dōu juéde xiànzài rén hé rén de guānxì lěnglěng de, zhè kěnéng shì yīnwèi gōngzuò tài máng, máng de méi shíjiān gēn biérén jiàn miàn, lèi de bú yuànyì hé biérén duō shuō huà. Qíshí, wǒmen yīnggāi duō duì biérén xiàoxiao, shuō huà shí rúguǒ néng duō yòng yìxiē "nín hǎo" "xièxie" zhèyàng de cíyǔ, hé biérén de guānxì jiù huì biàn de gèng hǎo.', vi: 'Nhiều người cảm thấy quan hệ giữa người với người ngày nay lạnh nhạt, có thể vì công việc quá bận, bận đến nỗi không có thời gian gặp người khác, mệt đến nỗi không muốn nói chuyện nhiều. Thật ra chúng ta nên cười với người khác nhiều hơn, khi nói chuyện nếu dùng nhiều những từ như "xin chào", "cảm ơn" thì quan hệ với người khác sẽ tốt hơn.', scene: 'Bài đọc 4 · Quan hệ giữa người với người' },
  ],
  dialogueClips: [
    { label: '16-1 · Trong công ty', src: A + 'l16-1.mp3' },
    { label: '16-2 · Tại nhà đồng nghiệp', src: A + 'l16-2.mp3' },
    { label: '16-3 · Trong công ty', src: A + 'l16-3.mp3' },
    { label: '16-4 · Quan hệ giữa người với người', src: A + 'l16-4.mp3' },
  ],
  dialogueTip: '<b>如果……(的话)，(chủ ngữ)就……</b>: giả thiết và kết quả; chủ ngữ của vế sau đặt trước 就. <b>Tính từ/động từ + 得 + cụm động từ</b>: 累得下了班就想睡觉. <b>AA的</b>: 白白的, 胖胖的, 长长的 — tăng mức độ.',
  slowSay: '我现在累得下了班就想睡觉',

  vocab: [
    { hanzi: '城市', pinyin: 'chéngshì', pos: 'danh từ', meaning: 'thành phố', han_viet: 'thành thị' },
    { hanzi: '如果', pinyin: 'rúguǒ', pos: 'liên từ', meaning: 'nếu', han_viet: 'như quả' },
    { hanzi: '认为', pinyin: 'rènwéi', pos: 'động từ', meaning: 'cho rằng', han_viet: 'nhận vi' },
    { hanzi: '皮鞋', pinyin: 'píxié', pos: 'danh từ', meaning: 'giày da', han_viet: 'bì hài' },
    { hanzi: '帽子', pinyin: 'màozi', pos: 'danh từ', meaning: 'mũ, nón', han_viet: 'mạo tử' },
    { hanzi: '长', pinyin: 'zhǎng', pos: 'động từ', meaning: 'trưởng thành, lớn lên', han_viet: 'trưởng' },
    { hanzi: '可爱', pinyin: 'kě\'ài', pos: 'tính từ', meaning: 'đáng yêu, dễ thương', han_viet: 'khả ái' },
    { hanzi: '米', pinyin: 'mǐ', pos: 'danh từ', meaning: 'mét', han_viet: 'mễ' },
    { hanzi: '公斤', pinyin: 'gōngjīn', pos: 'danh từ', meaning: 'ki-lô-gam', han_viet: 'công cân' },
    { hanzi: '鼻子', pinyin: 'bízi', pos: 'danh từ', meaning: 'mũi', han_viet: 'tị tử' },
    { hanzi: '头发', pinyin: 'tóufa', pos: 'danh từ', meaning: 'tóc', han_viet: 'đầu phát' },
    { hanzi: '检查', pinyin: 'jiǎnchá', pos: 'động từ', meaning: 'kiểm tra, khám', han_viet: 'kiểm tra' },
    { hanzi: '刷牙', pinyin: 'shuā yá', pos: 'động từ', meaning: 'chải răng', han_viet: 'loát nha' },
    { hanzi: '关系', pinyin: 'guānxì', pos: 'danh từ', meaning: 'quan hệ', han_viet: 'quan hệ' },
    { hanzi: '别人', pinyin: 'biérén', pos: 'danh từ', meaning: 'người khác', han_viet: 'biệt nhân' },
    { hanzi: '词语', pinyin: 'cíyǔ', pos: 'danh từ', meaning: 'từ ngữ', han_viet: 'từ ngữ' },
  ],

  sections: [
    {
      kind: 'examples', label: '如果…就…', title: 'Cấu trúc 如果……(的话)，(chủ ngữ)就……',
      intro: 'Mệnh đề sau 如果 là một giả thuyết, mệnh đề sau 就 là kết quả có được dựa trên giả thuyết đó. Lưu ý chủ ngữ của mệnh đề thứ hai phải được đặt trước 就.',
      groups: [{ label: 'Ví dụ', items: [['如果你太累了，就休息一会儿。', 'Rúguǒ nǐ tài lèi le, jiù xiūxi yíhuìr.', 'Nếu bạn mệt quá thì nghỉ một lát.'], ['如果你喜欢，我就给你买。', 'Rúguǒ nǐ xǐhuan, wǒ jiù gěi nǐ mǎi.', 'Nếu bạn thích thì tôi mua cho.'], ['如果有钱的话，我就去旅游。', 'Rúguǒ yǒu qián de huà, wǒ jiù qù lǚyóu.', 'Nếu có tiền thì tôi đi du lịch.'], ['如果不舒服，就去医院检查一下吧。', 'Rúguǒ bù shūfu, jiù qù yīyuàn jiǎnchá yíxià ba.', 'Nếu khó chịu thì đến bệnh viện kiểm tra đi.']] }],
    },
    {
      kind: 'examples', label: 'Bổ ngữ trạng thái 得', title: 'Bổ ngữ chỉ trạng thái có 得 (phức tạp)',
      intro: 'Dùng 得 tạo thành bổ ngữ chỉ trạng thái nhằm miêu tả trạng thái nào đó. Thường trước 得 là tính từ hoặc động từ, sau 得 là cụm động từ.',
      groups: [{ label: 'Ví dụ', items: [['孩子们玩儿得不想回家。', 'Háizimen wánr de bù xiǎng huí jiā.', 'Bọn trẻ chơi đến nỗi không muốn về nhà.'], ['弟弟高兴得跳了起来。', 'Dìdi gāoxìng de tiàole qǐlai.', 'Em trai vui đến nỗi nhảy cẫng lên.'], ['儿子累得下了班就想睡觉了。', 'Érzi lèi de xiàle bān jiù xiǎng shuì jiào le.', 'Con trai mệt đến nỗi hết giờ làm chỉ muốn ngủ.'], ['人们忙得没时间跟别人见面。', 'Rénmen máng de méi shíjiān gēn biérén jiàn miàn.', 'Mọi người bận đến nỗi không có thời gian gặp người khác.']] }],
    },
    {
      kind: 'examples', label: 'AA的', title: 'Tính từ một âm tiết lặp lại: AA的',
      intro: 'Tính từ một âm tiết lặp lại thành "tính từ + tính từ + 的" để miêu tả đặc trưng của người hay sự vật với mức độ tăng thêm.',
      groups: [{ label: 'Ví dụ', items: [['你送的花红红的，我很喜欢。', 'Nǐ sòng de huā hónghóng de, wǒ hěn xǐhuan.', 'Hoa bạn tặng đỏ thắm, tôi rất thích.'], ['这些草绿绿的，真漂亮。', 'Zhèxiē cǎo lǜlǜ de, zhēn piàoliang.', 'Cỏ này xanh mướt, đẹp thật.'], ['他鼻子小小的，长得像谁？', 'Tā bízi xiǎoxiǎo de, zhǎng de xiàng shéi?', 'Mũi anh ấy nhỏ nhỏ, trông giống ai nhỉ?'], ['你女儿长得白白的、胖胖的，真可爱！', 'Nǐ nǚ\'ér zhǎng de báibái de, pàngpàng de, zhēn kě\'ài!', 'Con gái bạn trắng trẻo, mập mạp, đáng yêu thật!']] }],
    },
    {
      kind: 'examples', label: 'Đọc cụm từ', title: 'Đọc to các cụm từ và câu (练习 1)',
      clip: { label: '16-5 · Đọc to các cụm từ và câu', src: A + 'l16-5.mp3' },
      intro: 'Bấm để nghe từng cụm.',
      groups: [{ label: 'Cụm từ', items: [
        ['一个城市', 'yí ge chéngshì', 'một thành phố'], ['大城市', 'dà chéngshì', 'thành phố lớn'], ['旅游城市', 'lǚyóu chéngshì', 'thành phố du lịch'], ['我想去其他城市看一看', 'wǒ xiǎng qù qítā chéngshì kàn yi kàn', 'tôi muốn đến thành phố khác xem thử'],
        ['一双皮鞋', 'yì shuāng píxié', 'một đôi giày da'], ['买皮鞋', 'mǎi píxié', 'mua giày da'], ['你送的小皮鞋和小帽子真漂亮', 'nǐ sòng de xiǎo píxié hé xiǎo màozi zhēn piàoliang', 'giày da nhỏ và mũ nhỏ bạn tặng đẹp quá'],
        ['长大了', 'zhǎng dà le', 'lớn rồi'], ['长得胖胖的', 'zhǎng de pàngpàng de', 'mập mạp'], ['长得很可爱', 'zhǎng de hěn kě\'ài', 'trông rất đáng yêu'], ['她长得像谁？', 'tā zhǎng de xiàng shéi?', 'cô bé giống ai?'],
        ['检查作业', 'jiǎnchá zuòyè', 'kiểm tra bài tập'], ['检查一下', 'jiǎnchá yíxià', 'kiểm tra một chút'], ['你去医院检查一下吧', 'nǐ qù yīyuàn jiǎnchá yíxià ba', 'bạn đến bệnh viện kiểm tra đi'],
        ['师生关系', 'shī-shēng guānxì', 'quan hệ thầy trò'], ['朋友关系', 'péngyou guānxì', 'quan hệ bạn bè'], ['人和人的关系冷冷的', 'rén hé rén de guānxì lěnglěng de', 'quan hệ giữa người với người lạnh nhạt'],
      ] }],
    },
  ],

  notes: [
    {
      title: 'Cấu trúc 如果……(的话)，(chủ ngữ)就……',
      body: 'Vế sau 如果 là giả thuyết; vế sau 就 là kết quả dựa trên giả thuyết đó. Chủ ngữ của vế thứ hai đặt trước 就: 如果有钱的话，我就去旅游。',
      say: '如果有钱的话，我就去旅游',
    },
    {
      title: 'Bổ ngữ trạng thái có 得 (phức tạp)',
      body: 'Trước 得 thường là tính từ hoặc động từ, sau 得 là cụm động từ: 孩子们玩儿得不想回家, 弟弟高兴得跳了起来, 人们忙得没时间跟别人见面.',
      say: '我累得下了班就想睡觉',
    },
    {
      title: 'Tính từ một âm tiết lặp lại: AA的',
      body: 'Tính từ + tính từ + 的 miêu tả đặc điểm với mức độ tăng thêm: 红红的, 绿绿的, 小小的, 白白的, 胖胖的.',
      say: '白白的，胖胖的，真可爱',
    },
    {
      title: 'Cách thành lập từ mới (旧字新词)',
      body: '词典 + 汉语 = 词语 (từ ngữ); 运动 + 皮鞋 = 运动鞋 (giày thể thao); 身体 + 检查 = 体检 (khám sức khỏe).',
      say: '运动鞋',
    },
    {
      title: 'Tục ngữ: 钱不是万能的',
      body: 'Tiền không phải là vạn năng. Tiền tuy rất quan trọng nhưng không thể giải quyết mọi vấn đề. Câu này nhắc chúng ta phải có nhận thức đúng đắn về tiền bạc: trong cuộc sống lúc nào cũng cần tiền nhưng có tiền chưa chắc làm được mọi việc.',
      say: '钱不是万能的',
    },
  ],

  writeChars: ['城', '如', '果', '认', '帽', '鼻', '检', '查'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 4)',
      items: [
        { q: '周明年轻的时候为什么没去旅行？', hint: '他年轻的时候没有钱。' },
        { q: '现在周明为什么不能去旅行？', hint: '他现在没有时间。' },
        { q: '同事的女儿长得怎么样？', hint: '同事的女儿长得白白的、胖胖的，很可爱。' },
        { q: '小刚为什么牙疼？', hint: '因为他没有好好儿刷牙。' },
        { q: '为什么现在人和人之间的关系冷冷的？', hint: '因为工作太忙，忙得没时间跟别人见面，累得不愿意和别人多说话。' },
        { q: '我们怎么做才能让关系变得更好？', hint: '我们应该多对别人笑笑，说话时多用一些“您好”“谢谢”这样的词语。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: 如果有很多钱，你会做什么？', hint: 'Mẫu: 如果有钱，我就买一辆车。' },
        { q: 'Theo nhóm: miêu tả một bạn trong lớp bằng "AA的", mọi người đoán là ai', hint: 'Mẫu: 他个子高高的，眼睛大大的……' },
      ],
    },
  ],

  sentences: [
    { parts: ['我', '年轻', '的', '时候', '也', '这么', '想'], pinyin: 'Wǒ niánqīng de shíhou yě zhème xiǎng.', vi: 'Hồi trẻ tôi cũng nghĩ vậy.' },
    { parts: ['如果', '有', '钱', '就', '去', '了'], pinyin: 'Rúguǒ yǒu qián jiù qù le.', vi: 'Nếu có tiền thì đã đi rồi.' },
    { parts: ['我', '现在', '累', '得', '下', '了', '班', '就', '想', '睡觉'], pinyin: 'Wǒ xiànzài lèi de xiàle bān jiù xiǎng shuì jiào.', vi: 'Giờ tôi mệt đến nỗi hết giờ làm chỉ muốn ngủ.' },
    { parts: ['你', '女儿', '长', '得', '白白', '的', '胖胖', '的'], pinyin: 'Nǐ nǚ\'ér zhǎng de báibái de pàngpàng de.', vi: 'Con gái bạn trắng trẻo mập mạp.' },
    { parts: ['如果', '不', '舒服', '就', '去', '医院', '检查', '一下'], pinyin: 'Rúguǒ bù shūfu jiù qù yīyuàn jiǎnchá yíxià.', vi: 'Nếu khó chịu thì đến bệnh viện kiểm tra.' },
    { parts: ['回', '家', '好好儿', '刷牙'], pinyin: 'Huí jiā hǎohāor shuā yá.', vi: 'Về nhà đánh răng cho kỹ.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 关系 · B 可爱 · C 鼻子 · D 城市 · E 如果. Gõ chữ cái A–E.',
      items: [
        { prompt: '（ ）我的丈夫能少一些会议，他就会多跟我和孩子在一起了。', answer: 'E', gloss: '如果' }, { prompt: '你觉得哪个（ ）最好玩儿？', answer: 'D', gloss: '城市' },
        { prompt: '我和同屋的（ ）不太好，怎么办？', answer: 'A', gloss: '关系' }, { prompt: '我女朋友（ ）高高的、头发长长的，非常好看。', answer: 'C', gloss: '鼻子' },
        { prompt: '那个小狗真（ ），我们把它带回家吧。', answer: 'B', gloss: '可爱' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 米 · B 检查 · C 公斤 · D 认为 · E 刷牙. Gõ chữ cái A–E.',
      items: [
        { prompt: '今天下午你去哪儿了？ 我的车总是有问题，我去（ ）了一下。', answer: 'B', gloss: '检查' }, { prompt: '你想买点儿什么？ 给我来一（ ）苹果。', answer: 'C', gloss: '公斤' },
        { prompt: '你有多高？ 1（ ）75。', answer: 'A', gloss: '米' }, { prompt: '你怎么刚吃饭？ 今天起晚了，（ ）以后就来上课了。', answer: 'E', gloss: '刷牙' },
        { prompt: '咱们去南方玩儿玩儿吧。 我（ ），还是北方更好玩儿一些。', answer: 'D', gloss: '认为' },
      ],
    },
    {
      title: 'Giáo trình 注释 · Hoàn thành câu (gõ phần còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: '如果明天下雨的话，（ ）。', answer: '我们就不能出去玩儿了', gloss: '如果…就' },
        { prompt: '如果考试考得好的话，（ ）。', answer: '妈妈就买给我一部新手机', gloss: '如果…就' },
        { prompt: '（ ），我就跟朋友去踢足球。', answer: '如果明天天气好', gloss: '如果' },
        { prompt: '我牙疼得（ ）。', answer: '睡不着', gloss: '得' },
        { prompt: '今天天气热得（ ）。', answer: '不想出去', gloss: '得' },
        { prompt: '看了这个电影，她笑得（ ）。', answer: '说不出话来', gloss: '得' },
        { prompt: '她的男朋友个子（ ），真帅。', answer: '高高的', gloss: 'AA的' },
        { prompt: '他的女朋友头发（ ），看起来很温柔。', answer: '长长的', gloss: 'AA的' },
        { prompt: '这个蛋糕（ ），真好吃。', answer: '甜甜的', gloss: 'AA的' },
      ],
    },
    {
      title: 'Giáo trình 练习 3 · Hoàn thành đối thoại (gõ phần còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: 'A: 这条裙子（ ），真好看。', answer: '的颜色是你喜欢的', gloss: 'màu sắc' },
        { prompt: 'B: 是啊。但是太贵了，（ ），我就买。', answer: '如果便宜一些', gloss: '如果' },
        { prompt: 'A: 你怎么还不学习？ B: 我现在累得（ ）。', answer: '只想睡觉', gloss: '得' },
        { prompt: 'A: 如果你考试考得好，我就（ ）。', answer: '带你去旅游', gloss: '就' },
        { prompt: 'A: （ ），就帮我做饭吧。', answer: '如果你不累的话', gloss: '如果' },
        { prompt: 'B: 今天我忙得（ ），让我休息一下吧。', answer: '没有时间吃午饭', gloss: '得' },
        { prompt: 'A: 你看，那个女孩个子（ ），头发（ ），眼睛（ ），真漂亮。', answer: '高高的，长长的，大大的', accept: ['高高的长长的大大的'], gloss: 'AA的' },
        { prompt: 'B: 你如果喜欢她的话，（ ）。', answer: '就去问她愿意不愿意做你的女朋友吧', gloss: '如果…就' },
      ],
    },
  ],
}
