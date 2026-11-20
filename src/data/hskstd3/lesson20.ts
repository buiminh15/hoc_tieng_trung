import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 3, Bài 20: 我被他影响了。 (sách trang 184–192).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách.
 * Nghe: 20-1…20-5. Bài tập: 热身/注释/练习 của giáo trình, đáp án theo "Đáp án giáo trình HSK 3" trang 40–41.
 */

const A = '/audio/hsk-std3/'

export const hskStd3Lesson20: Lesson = {
  id: 20,
  title: 'Mình chịu ảnh hưởng từ anh ấy',
  hanzi: '我被他影响了。',
  pinyin: 'Wǒ bèi tā yǐngxiǎng le.',
  vi: 'Mình chịu ảnh hưởng từ anh ấy',
  intro: 'Diễn tả bị động và điều kiện duy nhất. Học câu chữ 被 (A被B + động từ + thành phần khác) và cấu trúc 只有……，才……',

  dialogue: [
    { who: 'A', name: '小丽', hanzi: '我的照相机被谁拿走了？怎么找不到了？', pinyin: 'Wǒ de zhàoxiàngjī bèi shéi názǒu le? Zěnme zhǎo bu dào le?', vi: 'Máy ảnh của tôi bị ai lấy mất rồi? Sao tìm không thấy?', scene: 'Hội thoại 1 · Trong phòng giải lao' },
    { who: 'B', name: '同事', hanzi: '你再找找。是不是没带来？', pinyin: 'Nǐ zài zhǎozhao. Shì bu shì méi dài lai?', vi: 'Bạn tìm lại xem. Có phải không mang theo không?' },
    { who: 'A', name: '小丽', hanzi: '我找了，没找到啊。', pinyin: 'Wǒ zhǎo le, méi zhǎodào a.', vi: 'Tôi tìm rồi, không thấy.' },
    { who: 'B', name: '同事', hanzi: '别难过，再买一个吧，公司东门外不就有一个大商场吗？', pinyin: 'Bié nánguò, zài mǎi yí ge ba, gōngsī dōngmén wài bú jiù yǒu yí ge dà shāngchǎng ma?', vi: 'Đừng buồn, mua cái khác đi, ngoài cổng đông công ty chẳng phải có trung tâm thương mại lớn sao?' },
    { who: 'A', name: '小丽', hanzi: '但是我这个月信用卡里的钱已经花得差不多了。', pinyin: 'Dànshì wǒ zhège yuè xìnyòngkǎ lǐ de qián yǐjīng huā de chà bu duō le.', vi: 'Nhưng tiền trong thẻ tín dụng tháng này của tôi đã tiêu gần hết rồi.' },
    { who: 'A', name: '小明', hanzi: '你怎么突然关心起体育来了？', pinyin: 'Nǐ zěnme tūrán guānxīn qǐ tǐyù lái le?', vi: 'Sao bạn bỗng quan tâm đến thể thao thế?', scene: 'Hội thoại 2 · Trong lớp học' },
    { who: 'B', name: '朋友', hanzi: '我的男朋友喜欢看足球比赛，我被他影响的。', pinyin: 'Wǒ de nánpéngyou xǐhuan kàn zúqiú bǐsài, wǒ bèi tā yǐngxiǎng de.', vi: 'Bạn trai mình thích xem bóng đá, mình bị anh ấy ảnh hưởng.' },
    { who: 'A', name: '小明', hanzi: '看来只有爱，才能让人有变化。', pinyin: 'Kànlái zhǐyǒu ài, cái néng ràng rén yǒu biànhuà.', vi: 'Xem ra chỉ có tình yêu mới khiến con người thay đổi.' },
    { who: 'B', name: '朋友', hanzi: '是啊，为了和他的爱好一样，我天天看球赛。', pinyin: 'Shì a, wèile hé tā de àihào yíyàng, wǒ tiāntiān kàn qiúsài.', vi: 'Ừ, để có cùng sở thích với anh ấy, mình ngày nào cũng xem bóng đá.' },
    { who: 'A', name: '小明', hanzi: '除了足球，他还影响你什么了？', pinyin: 'Chúle zúqiú, tā hái yǐngxiǎng nǐ shénme le?', vi: 'Ngoài bóng đá, anh ấy còn ảnh hưởng đến bạn điều gì nữa?' },
    { who: 'B', name: '朋友', hanzi: '我最近天天上网玩儿游戏，我的成绩差极了。', pinyin: 'Wǒ zuìjìn tiāntiān shàng wǎng wánr yóuxì, wǒ de chéngjì chà jí le.', vi: 'Dạo này ngày nào mình cũng lên mạng chơi game, thành tích của mình tệ cực kỳ.' },
    { who: 'A', name: '朋友', hanzi: '那个拿着碗吃饭的人是你哥哥吗？他和你长得真像。', pinyin: 'Nàge názhe wǎn chī fàn de rén shì nǐ gēge ma? Tā hé nǐ zhǎng de zhēn xiàng.', vi: 'Người cầm bát ăn cơm kia là anh bạn à? Anh ấy giống bạn thật.', scene: 'Hội thoại 3 · Ở quán ăn' },
    { who: 'B', name: '大卫', hanzi: '我们经常被别人认错。', pinyin: 'Wǒmen jīngcháng bèi biérén rèncuò.', vi: 'Chúng tôi thường bị người khác nhận nhầm.' },
    { who: 'A', name: '朋友', hanzi: '只有你们的爸爸妈妈才能分出来哪个是哥哥，哪个是弟弟吧。', pinyin: 'Zhǐyǒu nǐmen de bàba māma cái néng fēn chulai nǎge shì gēge, nǎge shì dìdi ba.', vi: 'Chắc chỉ có bố mẹ các bạn mới phân biệt được ai là anh, ai là em.' },
    { who: 'B', name: '大卫', hanzi: '除了父母以外，还有我们自己也能啊。', pinyin: 'Chúle fùmǔ yǐwài, hái yǒu wǒmen zìjǐ yě néng a.', vi: 'Ngoài bố mẹ ra, còn có chính bọn tôi cũng phân biệt được chứ.' },
    { who: 'A', name: '朋友', hanzi: '你们两个除了长得像，还有什么相同的地方？', pinyin: 'Nǐmen liǎng ge chúle zhǎng de xiàng, hái yǒu shénme xiāngtóng de dìfang?', vi: 'Hai bạn ngoài giống nhau về ngoại hình ra còn gì giống nhau nữa?' },
    { who: 'B', name: '大卫', hanzi: '我们住在同一个楼、同一个房间……', pinyin: 'Wǒmen zhù zài tóng yí ge lóu, tóng yí ge fángjiān……', vi: 'Chúng tôi ở cùng một tòa nhà, cùng một phòng……' },
    { who: 'A', name: '短文', hanzi: '年轻人遇到难题，常常很着急，不知道怎么办。其实，不同的问题有不同的解决办法。有些问题看上去很难，但是做起来非常简单，所以得试着做做。有些问题看上去虽然简单，但是解决起来难极了。所以只有真正做事情的时候，才能了解有多难。不过，我们一定要相信：多么难的问题，都会被解决的。', pinyin: 'Niánqīng rén yùdào nántí, chángcháng hěn zháo jí, bù zhīdào zěnme bàn. Qíshí, bù tóng de wèntí yǒu bù tóng de jiějué bànfǎ. Yǒuxiē wèntí kàn shangqu hěn nán, dànshì zuò qilai fēicháng jiǎndān, suǒyǐ děi shìzhe zuòzuo. Yǒuxiē wèntí kàn shangqu suīrán jiǎndān, dànshì jiějué qilai nán jí le. Suǒyǐ zhǐyǒu zhēnzhèng zuò shìqing de shíhou, cái néng liǎojiě yǒu duō nán. Búguò, wǒmen yídìng yào xiāngxìn: duōme nán de wèntí, dōu huì bèi jiějué de.', vi: 'Người trẻ gặp vấn đề khó thường rất sốt ruột, không biết làm sao. Thật ra mỗi vấn đề có cách giải quyết khác nhau. Có vấn đề trông rất khó nhưng làm lại rất đơn giản, nên phải thử làm. Có vấn đề trông đơn giản nhưng giải quyết lại cực khó. Vì vậy chỉ khi thật sự làm mới biết khó đến đâu. Tuy nhiên chúng ta phải tin rằng: vấn đề khó đến mấy cũng sẽ được giải quyết.', scene: 'Bài đọc 4 · Vấn đề khó' },
  ],
  dialogueClips: [
    { label: '20-1 · Trong phòng giải lao', src: A + 'l20-1.mp3' },
    { label: '20-2 · Trong lớp học', src: A + 'l20-2.mp3' },
    { label: '20-3 · Ở quán ăn', src: A + 'l20-3.mp3' },
    { label: '20-4 · Vấn đề khó', src: A + 'l20-4.mp3' },
  ],
  dialogueTip: '<b>主语 + 被/叫/让 + tân ngữ + động từ + thành phần khác</b>: câu bị động; 被 có thể lược tân ngữ, 叫/让 thì không. Phủ định/năng nguyện đặt trước 被. <b>只有……，才……</b>: chỉ có… mới….',
  slowSay: '我被他影响了',

  vocab: [
    { hanzi: '照相机', pinyin: 'zhàoxiàngjī', pos: 'danh từ', meaning: 'máy chụp ảnh', han_viet: 'chiếu tướng cơ' },
    { hanzi: '被', pinyin: 'bèi', pos: 'giới từ', meaning: 'bị (dùng để chỉ thể bị động)', han_viet: 'bị' },
    { hanzi: '难过', pinyin: 'nánguò', pos: 'tính từ', meaning: 'buồn', han_viet: 'nan quá' },
    { hanzi: '东', pinyin: 'dōng', pos: 'danh từ', meaning: 'phía đông', han_viet: 'đông' },
    { hanzi: '信用卡', pinyin: 'xìnyòngkǎ', pos: 'danh từ', meaning: 'thẻ tín dụng', han_viet: 'tín dụng tạp' },
    { hanzi: '关心', pinyin: 'guānxīn', pos: 'động từ', meaning: 'quan tâm, chú ý', han_viet: 'quan tâm' },
    { hanzi: '只有……才……', pinyin: 'zhǐyǒu…cái…', pos: 'liên từ', meaning: 'chỉ có… (thì) mới…', han_viet: 'chỉ hữu… tài…' },
    { hanzi: '成绩', pinyin: 'chéngjì', pos: 'danh từ', meaning: 'thành tích, kết quả (công tác, học tập)', han_viet: 'thành tích' },
    { hanzi: '碗', pinyin: 'wǎn', pos: 'danh từ', meaning: 'bát', han_viet: 'oản' },
    { hanzi: '分', pinyin: 'fēn', pos: 'động từ', meaning: 'phân biệt', han_viet: 'phân' },
    { hanzi: '解决', pinyin: 'jiějué', pos: 'động từ', meaning: 'giải quyết', han_viet: 'giải quyết' },
    { hanzi: '试', pinyin: 'shì', pos: 'động từ', meaning: 'thử', han_viet: 'thí' },
    { hanzi: '真正', pinyin: 'zhēnzhèng', pos: 'phó từ', meaning: 'thật sự', han_viet: 'chân chính' },
    { hanzi: '多么', pinyin: 'duōme', pos: 'phó từ', meaning: '(mức độ tương đối cao) mấy, bao nhiêu', han_viet: 'đa ma' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Câu chữ 被', title: 'Câu có từ 被',
      intro: 'Câu có 被 diễn tả nghĩa bị động; cấu trúc là "chủ ngữ + 被/叫/让 + tân ngữ + động từ + các thành phần khác". Chủ ngữ là đối tượng chịu tác động, tân ngữ là chủ thể hành động. Tân ngữ sau 被 có thể lược bỏ nhưng tân ngữ sau 叫/让 thì không. Phó từ phủ định, động từ năng nguyện… phải đặt trước 被.',
      groups: [{ label: 'Ví dụ', items: [['我被男朋友影响了。', 'Wǒ bèi nánpéngyou yǐngxiǎng le.', 'Tôi bị bạn trai ảnh hưởng.'], ['帽子被刮跑了。', 'Màozi bèi guā pǎo le.', 'Mũ bị gió thổi bay mất.'], ['蛋糕让弟弟吃完了。', 'Dàngāo ràng dìdi chī wán le.', 'Bánh bị em trai ăn hết rồi.'], ['我的照相机被谁拿走了？', 'Wǒ de zhàoxiàngjī bèi shéi názǒu le?', 'Máy ảnh của tôi bị ai lấy mất rồi?'], ['问题还没有被解决呢。', 'Wèntí hái méiyǒu bèi jiějué ne.', 'Vấn đề vẫn chưa được giải quyết.'], ['我们经常被别人认错。', 'Wǒmen jīngcháng bèi biérén rèncuò.', 'Chúng tôi thường bị người khác nhận nhầm.']] }],
    },
    {
      kind: 'examples', label: '只有…才…', title: 'Cấu trúc 只有……，才……',
      intro: 'Nối hai thành phần của câu phức chỉ điều kiện: thành phần sau 只有 là điều kiện duy nhất, thành phần sau 才 là kết quả chỉ xuất hiện trong điều kiện này.',
      groups: [{ label: 'Ví dụ', items: [['只有写完作业，才能看电视。', 'Zhǐyǒu xiě wán zuòyè, cái néng kàn diànshì.', 'Chỉ có làm xong bài tập mới được xem ti vi.'], ['只有妈妈做的饭，她才爱吃。', 'Zhǐyǒu māma zuò de fàn, tā cái ài chī.', 'Chỉ có cơm mẹ nấu, bé mới thích ăn.'], ['只有爸爸、妈妈才能分出来。', 'Zhǐyǒu bàba, māma cái néng fēn chulai.', 'Chỉ có bố mẹ mới phân biệt được.'], ['看来只有爱，才能让人有变化。', 'Kànlái zhǐyǒu ài, cái néng ràng rén yǒu biànhuà.', 'Xem ra chỉ có tình yêu mới khiến con người thay đổi.']] }],
    },
    {
      kind: 'examples', label: 'Đọc cụm từ', title: 'Đọc to các cụm từ và câu (练习 1)',
      clip: { label: '20-5 · Đọc to các cụm từ và câu', src: A + 'l20-5.mp3' },
      intro: 'Bấm để nghe từng cụm.',
      groups: [{ label: 'Cụm từ', items: [
        ['东边', 'dōngbian', 'phía đông'], ['东门', 'dōng mén', 'cổng đông'], ['中国在东边', 'Zhōngguó zài dōngbian', 'Trung Quốc ở phía đông'], ['公司东门外不就有一个大商场吗？', 'gōngsī dōngmén wài bú jiù yǒu yí ge dà shāngchǎng ma?', 'ngoài cổng đông công ty chẳng phải có trung tâm thương mại lớn sao?'],
        ['不关心', 'bù guānxīn', 'không quan tâm'], ['关心学生', 'guānxīn xuésheng', 'quan tâm học sinh'], ['你怎么突然关心起体育来了？', 'nǐ zěnme tūrán guānxīn qǐ tǐyù lái le?', 'sao bạn bỗng quan tâm đến thể thao?'],
        ['数学成绩', 'shùxué chéngjì', 'điểm toán'], ['考试成绩', 'kǎoshì chéngjì', 'kết quả thi'], ['我的成绩差极了', 'wǒ de chéngjì chà jí le', 'thành tích của tôi tệ cực kỳ'],
        ['容易解决', 'róngyì jiějué', 'dễ giải quyết'], ['解决问题', 'jiějué wèntí', 'giải quyết vấn đề'], ['多么难的问题，都会被解决的', 'duōme nán de wèntí, dōu huì bèi jiějué de', 'vấn đề khó đến mấy cũng sẽ được giải quyết'],
        ['试一试', 'shì yi shì', 'thử xem'], ['试着说一说', 'shìzhe shuō yi shuō', 'thử nói xem'], ['有些问题得试着做做', 'yǒuxiē wèntí děi shìzhe zuòzuo', 'có vấn đề phải thử làm'],
      ] }],
    },
  ],

  notes: [
    {
      title: 'Câu có từ 被',
      body: '主语 + 被/叫/让 + tân ngữ + động từ + thành phần khác. Chủ ngữ là đối tượng chịu tác động; tân ngữ sau 被 có thể lược, sau 叫/让 thì không. Phó từ phủ định và động từ năng nguyện đặt trước 被: 问题还没有被解决, 我们经常被别人认错.',
      say: '我的照相机被谁拿走了',
    },
    {
      title: 'Cấu trúc 只有……，才……',
      body: '只有 + điều kiện duy nhất, 才 + kết quả chỉ có trong điều kiện này: 只有写完作业，才能看电视。',
      say: '只有写完作业，才能看电视',
    },
    {
      title: 'Cách thành lập từ mới (旧字新词)',
      body: '碗 + 筷子 = 碗筷 (bát đũa); 房间 + 信用卡 = 房卡 (thẻ phòng); 东 + 北方 = 东北 (đông bắc).',
      say: '碗筷',
    },
    {
      title: 'Tục ngữ: 车到山前必有路',
      body: 'Xe đến trước núi ắt có đường. 必 nghĩa là chắc chắn. Khi xe chạy đến chân núi, dù đường bị núi chặn nhưng chắc chắn sẽ tìm được lối ra. Câu này khuyên ta đừng hoảng sợ trước khó khăn vì vấn đề nào cũng có cách giải quyết.',
      say: '车到山前必有路',
    },
  ],

  writeChars: ['被', '难', '信', '卡', '关', '绩', '碗', '解'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 4)',
      items: [
        { q: '小丽找不到什么了？', hint: '小丽找不到照相机了。' },
        { q: '小丽现在能买一个新的吗？为什么？', hint: '不能，因为她这个月信用卡里的钱已经花得差不多了。' },
        { q: '小明朋友的成绩为什么很差？', hint: '因为她最近天天上网玩儿游戏。' },
        { q: '大卫和他哥哥有什么相同的地方？', hint: '他们长得很像，而且住在同一个楼、同一个房间。' },
        { q: '年轻人遇到难题时应该怎么办？', hint: '年轻人遇到难题时试着做做。' },
        { q: '我们在解决问题时要相信什么？', hint: '我们一定要相信：多么难的问题，都会被解决的。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: nên chọn ai tham gia các cuộc thi (chạy bộ, bơi, thi chữ Hán, hát, nhảy, leo núi)', hint: 'Mẫu: 只有马可参加，红队才能拿第一名。' },
        { q: 'Theo nhóm: kể một ngày xui xẻo nhất của bạn, dùng câu 被', hint: 'Mẫu: 东西被他忘在超市了。' },
      ],
    },
  ],

  sentences: [
    { parts: ['我', '的', '照相机', '被', '谁', '拿', '走', '了'], pinyin: 'Wǒ de zhàoxiàngjī bèi shéi názǒu le?', vi: 'Máy ảnh của tôi bị ai lấy mất rồi?' },
    { parts: ['我', '被', '他', '影响', '了'], pinyin: 'Wǒ bèi tā yǐngxiǎng le.', vi: 'Tôi bị anh ấy ảnh hưởng.' },
    { parts: ['只有', '爱', '才', '能', '让', '人', '有', '变化'], pinyin: 'Zhǐyǒu ài cái néng ràng rén yǒu biànhuà.', vi: 'Chỉ có tình yêu mới khiến con người thay đổi.' },
    { parts: ['我们', '经常', '被', '别人', '认错'], pinyin: 'Wǒmen jīngcháng bèi biérén rèncuò.', vi: 'Chúng tôi thường bị người khác nhận nhầm.' },
    { parts: ['多么', '难', '的', '问题', '都', '会', '被', '解决', '的'], pinyin: 'Duōme nán de wèntí dōu huì bèi jiějué de.', vi: 'Vấn đề khó đến mấy cũng sẽ được giải quyết.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 成绩 · B 多么 · C 照相机 · D 信用卡 · E 难过. Gõ chữ cái A–E.',
      items: [
        { prompt: '你每个月花多少钱？你有几张（ ）？', answer: 'D', gloss: '信用卡' }, { prompt: '这个地方真漂亮，你带（ ）了吗？', answer: 'C', gloss: '照相机' },
        { prompt: '别（ ）了，手机坏了就再买一个吧。', answer: 'E', gloss: '难过' }, { prompt: '我什么时候能知道这次考试的（ ）？', answer: 'A', gloss: '成绩' },
        { prompt: '今天的天气（ ）好啊！', answer: 'B', gloss: '多么' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 试 · B 只有 · C 碗 · D 东 · E 关心. Gõ chữ cái A–E.',
      items: [
        { prompt: '你想要什么结婚礼物？ 你送给我几个漂亮的（ ）吧。', answer: 'C', gloss: '碗' }, { prompt: '他怎么又看篮球比赛了？ （ ）看球赛，才能让他变得高兴。', answer: 'B', gloss: '只有' },
        { prompt: '我的电脑又坏了。 我（ ）一下，看看有什么问题。', answer: 'A', gloss: '试' }, { prompt: '你觉得周经理怎么样？ 非常好，很（ ）我们。', answer: 'E', gloss: '关心' },
        { prompt: '请问，去中国银行怎么走？ 一直往（ ）走。', answer: 'D', gloss: '东' },
      ],
    },
    {
      title: 'Giáo trình 注释 · Câu 被 / 只有…才… (gõ câu còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: 'A: 你的自行车呢？ B: （ ）。(借走)', answer: '我的自行车被哥哥借走了', gloss: '被' },
        { prompt: 'A: 你怎么没带照相机？ B: （ ）。(用坏)', answer: '照相机被弟弟用坏了', gloss: '被' },
        { prompt: 'A: 我刚买的咖啡呢？ B: （ ）。(喝完)', answer: '你的咖啡被我喝完了', gloss: '被' },
        { prompt: 'B: 妈妈说，只有学得好，才（ ）。', answer: '能考进有名的大学', gloss: '只有…才' },
        { prompt: 'B: 男朋友说，只有（ ），穿衣服才漂亮。', answer: '身材好的人', gloss: '只有…才' },
        { prompt: 'B: 爸爸说，只有常常锻炼，身体（ ）。', answer: '才能健康', gloss: '只有…才' },
      ],
    },
    {
      title: 'Giáo trình 练习 3 · Hoàn thành đối thoại (gõ phần còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: 'B: 我的手机（ ）。', answer: '被妈妈拿走了', gloss: '被' },
        { prompt: 'B: 是啊。她说只有考得好，（ ）。', answer: '才会把手机给我', gloss: '只有…才' },
        { prompt: 'B: 刚被我（ ）。你今天要穿吗？', answer: '洗了', gloss: '被' },
        { prompt: 'A: 只有那件衣服才让我（ ）。', answer: '看上去很好看', gloss: '只有…才' },
        { prompt: 'B: （ ）拿走了。', answer: '被大卫', gloss: '被' },
        { prompt: 'B: 信用卡只有大卫拿着，我才（ ）。', answer: '放心', gloss: '才' },
        { prompt: 'B: 想啊，但是只有买到飞机票，（ ）。', answer: '才能出去旅游', gloss: '只有…才' },
        { prompt: 'B: 对。便宜的飞机票都被大家（ ）。', answer: '上网买走了', gloss: '被' },
      ],
    },
  ],
}
