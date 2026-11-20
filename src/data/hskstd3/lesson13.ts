import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 3, Bài 13: 我是走回来的。 (sách trang 123–131).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách.
 * Nghe: 13-1…13-5. Bài tập: 热身/注释/练习 của giáo trình, đáp án theo "Đáp án giáo trình HSK 3" trang 26–27.
 */

const A = '/audio/hsk-std3/'

export const hskStd3Lesson13: Lesson = {
  id: 13,
  title: 'Anh đi bộ về',
  hanzi: '我是走回来的。',
  pinyin: 'Wǒ shì zǒu huílai de.',
  vi: 'Anh đi bộ về',
  intro: 'Nói về việc đi lại, quà tặng và thói quen sinh hoạt. Học bổ ngữ chỉ phương hướng dạng kết hợp (上来, 下去, 进来, 出去, 回来, 过去, 起来) và cấu trúc 一边……一边…… diễn tả hai hành động đồng thời.',

  dialogue: [
    { who: 'A', name: '小丽', hanzi: '你终于回来了！从哪儿买回来这么多东西啊？', pinyin: 'Nǐ zhōngyú huílai le! Cóng nǎr mǎi huílai zhème duō dōngxi a?', vi: 'Cuối cùng anh cũng về! Mua ở đâu mà nhiều đồ thế?', scene: 'Hội thoại 1 · Ở nhà' },
    { who: 'B', name: '小刚', hanzi: '都是从那边的商店买回来的。', pinyin: 'Dōu shì cóng nàbiān de shāngdiàn mǎi huílai de.', vi: 'Đều mua ở cửa hàng bên kia mang về.' },
    { who: 'A', name: '小丽', hanzi: '怎么还买红酒回来了？谁喝啊？', pinyin: 'Zěnme hái mǎi hóngjiǔ huílai le? Shéi hē a?', vi: 'Sao còn mua cả rượu vang về? Ai uống thế?' },
    { who: 'B', name: '小刚', hanzi: '这是给爷爷的礼物，明天我们一起送过去，看看爷爷奶奶。', pinyin: 'Zhè shì gěi yéye de lǐwù, míngtiān wǒmen yìqǐ sòng guòqu, kànkan yéye nǎinai.', vi: 'Đây là quà cho ông, mai chúng ta cùng mang sang thăm ông bà.' },
    { who: 'A', name: '小丽', hanzi: '那我的礼物呢？快拿出来让我看看。', pinyin: 'Nà wǒ de lǐwù ne? Kuài ná chūlái ràng wǒ kànkan.', vi: 'Vậy quà của em đâu? Mau lấy ra cho em xem.' },
    { who: 'B', name: '小刚', hanzi: '我不是已经回来了吗？', pinyin: 'Wǒ bú shì yǐjīng huílai le ma?', vi: 'Chẳng phải anh đã về rồi sao?' },
    { who: 'A', name: '小刚', hanzi: '我今天看见你和一个女的进了咖啡店，她是谁啊？', pinyin: 'Wǒ jīntiān kànjiàn nǐ hé yí ge nǚ de jìnle kāfēidiàn, tā shì shéi a?', vi: 'Hôm nay anh thấy em đi vào quán cà phê với một cô gái, cô ấy là ai?', scene: 'Hội thoại 2 · Ở nhà' },
    { who: 'B', name: '小丽', hanzi: '她是我今天在路上遇到的一个老同学。', pinyin: 'Tā shì wǒ jīntiān zài lùshang yùdào de yí ge lǎo tóngxué.', vi: 'Cô ấy là bạn học cũ em gặp trên đường hôm nay.' },
    { who: 'A', name: '小刚', hanzi: '你们就一起去喝咖啡了？', pinyin: 'Nǐmen jiù yìqǐ qù hē kāfēi le?', vi: 'Hai người đi uống cà phê cùng nhau luôn à?' },
    { who: 'B', name: '小丽', hanzi: '是啊，一边喝咖啡一边说了些过去的事。', pinyin: 'Shì a, yìbiān hē kāfēi yìbiān shuōle xiē guòqù de shì.', vi: 'Vâng, vừa uống cà phê vừa nói chuyện ngày xưa.' },
    { who: 'A', name: '小刚', hanzi: '你回来得这么晚，是说了很多过去的事的吗？', pinyin: 'Nǐ huílai de zhème wǎn, shì shuōle hěn duō guòqù de shì de ma?', vi: 'Em về muộn thế, là do nói nhiều chuyện ngày xưa à?' },
    { who: 'B', name: '小丽', hanzi: '不是。没有公共汽车了，我是走回来的。', pinyin: 'Bú shì. Méiyǒu gōnggòng qìchē le, wǒ shì zǒu huílai de.', vi: 'Không phải. Hết xe buýt rồi, em đi bộ về.' },
    { who: 'A', name: '同事', hanzi: '小丽，周末你一般跟小刚出去看电影吗？', pinyin: 'Xiǎolì, zhōumò nǐ yìbān gēn Xiǎogāng chūqu kàn diànyǐng ma?', vi: 'Tiểu Lệ, cuối tuần cậu thường đi xem phim với Tiểu Cương à?', scene: 'Hội thoại 3 · Nói chuyện qua điện thoại' },
    { who: 'B', name: '小丽', hanzi: '我很少去电影院看电影，我更愿意在家看电视。', pinyin: 'Wǒ hěn shǎo qù diànyǐngyuàn kàn diànyǐng, wǒ gèng yuànyì zài jiā kàn diànshì.', vi: 'Mình rất ít đi rạp, mình thích ở nhà xem ti vi hơn.' },
    { who: 'A', name: '同事', hanzi: '看电视有什么意思啊？', pinyin: 'Kàn diànshì yǒu shénme yìsi a?', vi: 'Xem ti vi thì có gì thú vị?' },
    { who: 'B', name: '小丽', hanzi: '可以一边吃一边看，坐久了还可以站起来休息一会儿。', pinyin: 'Kěyǐ yìbiān chī yìbiān kàn, zuò jiǔ le hái kěyǐ zhàn qǐlai xiūxi yíhuìr.', vi: 'Có thể vừa ăn vừa xem, ngồi lâu còn có thể đứng dậy nghỉ một lát.' },
    { who: 'A', name: '同事', hanzi: '你应该多出去走走，这样你们的生活会更有意思。', pinyin: 'Nǐ yīnggāi duō chūqu zǒuzou, zhèyàng nǐmen de shēnghuó huì gèng yǒu yìsi.', vi: 'Cậu nên ra ngoài đi dạo nhiều hơn, như vậy cuộc sống của hai người sẽ thú vị hơn.' },
    { who: 'B', name: '小丽', hanzi: '有他在，我的生活已经很有意思了。', pinyin: 'Yǒu tā zài, wǒ de shēnghuó yǐjīng hěn yǒu yìsi le.', vi: 'Có anh ấy rồi, cuộc sống của mình đã rất thú vị.' },
    { who: 'A', name: '短文', hanzi: '刚结婚的时候，我丈夫是中学老师，他喜欢每天早上起床后，一边吃早饭一边看报纸。十年过去了，现在他已经是校长了，因为太忙，每天早上起床后都看不到他，晚上很晚他才回到家。我真怕他累坏了。希望他能少开一些会议，多一些休息，可以经常和我还有孩子在一起。', pinyin: 'Gāng jié hūn de shíhou, wǒ zhàngfu shì zhōngxué lǎoshī, tā xǐhuan měi tiān zǎoshang qǐ chuáng hòu, yìbiān chī zǎofàn yìbiān kàn bàozhǐ. Shí nián guòqu le, xiànzài tā yǐjīng shì xiàozhǎng le, yīnwèi tài máng, měi tiān zǎoshang qǐ chuáng hòu dōu kàn bu dào tā, wǎnshang hěn wǎn tā cái huídào jiā. Wǒ zhēn pà tā lèihuài le. Xīwàng tā néng shǎo kāi yìxiē huìyì, duō yìxiē xiūxi, kěyǐ jīngcháng hé wǒ hái yǒu háizi zài yìqǐ.', vi: 'Lúc mới cưới, chồng tôi là giáo viên cấp hai, anh thích mỗi sáng thức dậy vừa ăn sáng vừa đọc báo. Mười năm trôi qua, nay anh đã là hiệu trưởng, vì quá bận nên mỗi sáng thức dậy đều không thấy anh, tối rất muộn anh mới về nhà. Tôi thật sợ anh mệt quá. Mong anh họp ít đi, nghỉ ngơi nhiều hơn, có thể thường xuyên ở bên tôi và các con.', scene: 'Bài đọc 4 · Người vợ của hiệu trưởng' },
  ],
  dialogueClips: [
    { label: '13-1 · Ở nhà', src: A + 'l13-1.mp3' },
    { label: '13-2 · Ở nhà', src: A + 'l13-2.mp3' },
    { label: '13-3 · Nói chuyện qua điện thoại', src: A + 'l13-3.mp3' },
    { label: '13-4 · Người vợ của hiệu trưởng', src: A + 'l13-4.mp3' },
  ],
  dialogueTip: '<b>Bổ ngữ phương hướng kết hợp</b>: 上/下/进/出/回/过/起 + 来/去 (买回来, 送过去, 站起来). Tân ngữ nơi chốn đặt <b>trước 来/去</b> (走进教室来). <b>一边……一边……</b>: hai hành động xảy ra cùng lúc.',
  slowSay: '我是走回来的',

  vocab: [
    { hanzi: '终于', pinyin: 'zhōngyú', pos: 'phó từ', meaning: 'cuối cùng', han_viet: 'chung vu' },
    { hanzi: '爷爷', pinyin: 'yéye', pos: 'danh từ', meaning: 'ông nội', han_viet: 'gia gia' },
    { hanzi: '礼物', pinyin: 'lǐwù', pos: 'danh từ', meaning: 'quà biếu, quà tặng', han_viet: 'lễ vật' },
    { hanzi: '奶奶', pinyin: 'nǎinai', pos: 'danh từ', meaning: 'bà nội', han_viet: 'nãi nãi' },
    { hanzi: '遇到', pinyin: 'yùdào', pos: 'động từ', meaning: 'tình cờ gặp', han_viet: 'ngộ đáo' },
    { hanzi: '一边', pinyin: 'yìbiān', pos: 'phó từ', meaning: 'vừa… (dùng để liên kết hai hành động xảy ra cùng lúc)', han_viet: 'nhất biên' },
    { hanzi: '过去', pinyin: 'guòqù', pos: 'danh từ', meaning: 'quá khứ', han_viet: 'quá khứ' },
    { hanzi: '一般', pinyin: 'yībān', pos: 'tính từ', meaning: 'thông thường', han_viet: 'nhất ban' },
    { hanzi: '愿意', pinyin: 'yuànyì', pos: 'động từ', meaning: 'muốn', han_viet: 'nguyện ý' },
    { hanzi: '起来', pinyin: 'qǐlai', pos: 'động từ', meaning: '(chỉ sự chuyển hướng) lên', han_viet: 'khởi lai' },
    { hanzi: '应该', pinyin: 'yīnggāi', pos: 'động từ', meaning: 'nên, cần phải', han_viet: 'ứng cai' },
    { hanzi: '生活', pinyin: 'shēnghuó', pos: 'danh từ', meaning: 'đời sống, cuộc sống', han_viet: 'sinh hoạt' },
    { hanzi: '校长', pinyin: 'xiàozhǎng', pos: 'danh từ', meaning: 'hiệu trưởng', han_viet: 'hiệu trưởng' },
    { hanzi: '坏', pinyin: 'huài', pos: 'tính từ', meaning: 'quá, quá mức (vd: 累坏了 = mệt quá)', han_viet: 'hoại' },
    { hanzi: '经常', pinyin: 'jīngcháng', pos: 'phó từ', meaning: 'thường xuyên', han_viet: 'kinh thường' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Phương hướng kết hợp', title: 'Bổ ngữ chỉ phương hướng dạng kết hợp',
      intro: 'Thêm 来 hoặc 去 vào các động từ chỉ phương hướng đơn giản 上, 下, 进, 出, 回, 过, 起 thành bổ ngữ phương hướng kết hợp: 上来 上去 下来 下去 进来 进去 出来 出去 回来 回去 过来 过去 起来. Khi tân ngữ là nơi chốn, phải đặt trước 来/去. Tân ngữ thông thường có thể đặt trước hoặc sau 来/去.',
      groups: [
        { label: 'Động từ + bổ ngữ phương hướng', items: [['老师拿出一本书来。', 'Lǎoshī ná chū yì běn shū lái.', 'Thầy lấy ra một quyển sách.'], ['小狗从房间跑出去。', 'Xiǎo gǒu cóng fángjiān pǎo chūqu.', 'Con chó chạy ra khỏi phòng.'], ['我给你拿过去吧。', 'Wǒ gěi nǐ ná guòqu ba.', 'Tôi mang sang cho bạn nhé.'], ['坐久了还可以站起来休息一会儿。', 'Zuò jiǔ le hái kěyǐ zhàn qǐlai xiūxi yíhuìr.', 'Ngồi lâu còn có thể đứng dậy nghỉ một lát.']] },
        { label: 'Tân ngữ nơi chốn · tân ngữ thường', items: [['老师走进教室来。', 'Lǎoshī zǒujìn jiàoshì lái.', 'Thầy giáo đi vào lớp.'], ['周太太走进咖啡店去。', 'Zhōu tàitai zǒujìn kāfēidiàn qù.', 'Bà Chu đi vào quán cà phê.'], ['哥哥买回一个西瓜来。= 哥哥买回来一个西瓜。', 'Gēge mǎihuí yí ge xīguā lái. = Gēge mǎi huílai yí ge xīguā.', 'Anh trai mua về một quả dưa hấu.'], ['爸爸从国外带回一些礼物来。', 'Bàba cóng guówài dài huí yìxiē lǐwù lái.', 'Bố mang từ nước ngoài về một ít quà.']] },
      ],
    },
    {
      kind: 'examples', label: '一边……一边……', title: 'Cấu trúc 一边……一边……',
      intro: 'Dùng để diễn tả hai hành động được thực hiện cùng lúc: 一边听音乐一边做作业 = vừa nghe nhạc vừa làm bài tập. "一" có thể bị lược bỏ.',
      groups: [{ label: 'Ví dụ', items: [['妈妈一边唱歌一边做饭。', 'Māma yìbiān chàng gē yìbiān zuò fàn.', 'Mẹ vừa hát vừa nấu cơm.'], ['老师一边说一边笑。', 'Lǎoshī yìbiān shuō yìbiān xiào.', 'Cô giáo vừa nói vừa cười.'], ['小丽和老同学边喝咖啡边聊天儿。', 'Xiǎolì hé lǎo tóngxué biān hē kāfēi biān liáo tiānr.', 'Tiểu Lệ và bạn học cũ vừa uống cà phê vừa trò chuyện.'], ['我丈夫喜欢一边吃早饭一边看报纸。', 'Wǒ zhàngfu xǐhuan yìbiān chī zǎofàn yìbiān kàn bàozhǐ.', 'Chồng tôi thích vừa ăn sáng vừa đọc báo.']] }],
    },
    {
      kind: 'examples', label: 'Đọc cụm từ', title: 'Đọc to các cụm từ và câu (练习 1)',
      clip: { label: '13-5 · Đọc to các cụm từ và câu', src: A + 'l13-5.mp3' },
      intro: 'Bấm để nghe từng cụm.',
      groups: [{ label: 'Cụm từ', items: [
        ['没遇到', 'méi yùdào', 'không gặp'], ['遇到校长', 'yùdào xiàozhǎng', 'gặp hiệu trưởng'], ['她是我今天在路上遇到的一个老同学', 'tā shì wǒ jīntiān zài lùshang yùdào de yí ge lǎo tóngxué', 'cô ấy là bạn học cũ tôi gặp trên đường hôm nay'],
        ['不愿意帮人', 'bú yuànyì bāng rén', 'không muốn giúp người'], ['我更愿意在家看电视', 'wǒ gèng yuànyì zài jiā kàn diànshì', 'tôi thích ở nhà xem ti vi hơn'],
        ['站起来', 'zhàn qǐlai', 'đứng dậy'], ['拿起来', 'ná qǐlai', 'cầm lên'], ['坐久了还可以站起来休息一会儿', 'zuò jiǔ le hái kěyǐ zhàn qǐlai xiūxi yíhuìr', 'ngồi lâu còn có thể đứng dậy nghỉ một lát'],
        ['一件礼物', 'yí jiàn lǐwù', 'một món quà'], ['买礼物', 'mǎi lǐwù', 'mua quà'], ['送礼物', 'sòng lǐwù', 'tặng quà'], ['这是给爷爷的礼物', 'zhè shì gěi yéye de lǐwù', 'đây là quà cho ông'],
        ['累坏了', 'lèihuài le', 'mệt quá'], ['忙坏了', 'mánghuài le', 'bận quá'], ['饿坏了', 'èhuài le', 'đói quá'], ['我真怕他累坏了', 'wǒ zhēn pà tā lèihuài le', 'tôi thật sợ anh ấy mệt quá'],
      ] }],
    },
  ],

  notes: [
    {
      title: 'Bổ ngữ chỉ phương hướng dạng kết hợp',
      body: 'Động từ + (上/下/进/出/回/过/起) + (来/去): 上来 上去 下来 下去 进来 进去 出来 出去 回来 回去 过来 过去 起来. Tân ngữ nơi chốn phải đặt trước 来/去 (老师走进教室来). Tân ngữ thường đặt trước hoặc sau 来/去 (哥哥买回来一个西瓜 = 哥哥买回一个西瓜来). Nếu hành động đã hoàn thành thì tân ngữ thường đặt sau 来/去: 爸爸回来了一些礼物 → 爸爸带回来了一些礼物.',
      say: '我是走回来的',
    },
    {
      title: 'Cấu trúc 一边……一边……',
      body: 'Diễn tả hai hành động đồng thời: 妈妈一边唱歌一边做饭. "一" có thể lược bỏ: 边唱歌边做饭.',
      say: '一边吃一边看',
    },
    {
      title: 'Cách thành lập từ mới (旧字新词)',
      body: '红 + 啤酒 = 红酒 (rượu vang); 班 + 校长 = 班长 (lớp trưởng); 遇到 + 看见 = 遇见 (gặp).',
      say: '红酒',
    },
    {
      title: 'Chữ Hán: chữ hình thanh (2)',
      body: 'Chữ hình thanh cấu trúc trên-dưới có hai loại: "上形下声" (phần hình ở trên, phần thanh ở dưới), ví dụ 爸 (bà, phần thanh 巴 bā), 苹 (píng, phần thanh 平 píng); và "下形上声" (phần hình ở dưới, phần thanh ở trên), ví dụ 想 (xiǎng, phần thanh 相 xiāng), 努 (nǔ, phần thanh 奴 nú).',
      say: '想',
    },
    {
      title: 'Tục ngữ: 礼轻情意重',
      body: 'Của ít lòng nhiều. Quà tuy rất nhẹ nhưng tình cảm gửi gắm rất sâu nặng. Ngày nay, câu này dùng để diễn tả điều quan trọng nhất khi tặng quà là tình cảm chân thành chứ không phải giá trị của món quà.',
      say: '礼轻情意重',
    },
  ],

  writeChars: ['终', '爷', '奶', '遇', '礼', '般', '愿', '校'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 4)',
      items: [
        { q: '小刚买了什么礼物回来？', hint: '红酒。' },
        { q: '小刚今天做什么了？', hint: '他遇到了一个老同学，和这个老同学去了咖啡店，一边喝咖啡一边说了些过去的事。' },
        { q: '小刚为什么很晚才回家？', hint: '因为没有公共汽车了，他是走回来的。' },
        { q: '小丽更喜欢看电视还是看电影？为什么？', hint: '小丽更喜欢看电视，因为可以一边吃一边看，坐久了还可以站起来休息一会儿。' },
        { q: '刚结婚的时候，丈夫习惯做什么？', hint: '丈夫习惯一边吃早饭一边看报纸。' },
        { q: '现在丈夫的生活怎么样？', hint: '现在丈夫非常忙，早上很早起床，晚上很晚回家。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: dùng 一边……一边…… nói thói quen của mình, bạn nhắc nhở nếu là thói quen xấu', hint: 'Mẫu: A: 我经常一边开车一边打电话。 B: 你不能一边开车一边打电话。' },
        { q: 'Theo nhóm: nếu đi du lịch nước ngoài sẽ mang quà gì về cho người thân?', hint: 'Mẫu: 我会给妈妈带回来一条红色的裙子，因为她最喜欢红色。' },
      ],
    },
  ],

  sentences: [
    { parts: ['你', '终于', '回来', '了'], pinyin: 'Nǐ zhōngyú huílai le.', vi: 'Cuối cùng anh cũng về rồi.' },
    { parts: ['都', '是', '从', '那边', '的', '商店', '买', '回来', '的'], pinyin: 'Dōu shì cóng nàbiān de shāngdiàn mǎi huílai de.', vi: 'Đều mua ở cửa hàng bên kia mang về.' },
    { parts: ['明天', '我们', '一起', '送', '过去'], pinyin: 'Míngtiān wǒmen yìqǐ sòng guòqu.', vi: 'Mai chúng ta cùng mang sang.' },
    { parts: ['一边', '喝', '咖啡', '一边', '说', '过去', '的', '事'], pinyin: 'Yìbiān hē kāfēi yìbiān shuō guòqù de shì.', vi: 'Vừa uống cà phê vừa nói chuyện ngày xưa.' },
    { parts: ['没有', '公共汽车', '了', '我', '是', '走', '回来', '的'], pinyin: 'Méiyǒu gōnggòng qìchē le, wǒ shì zǒu huílai de.', vi: 'Hết xe buýt rồi, tôi đi bộ về.' },
    { parts: ['我', '真', '怕', '他', '累', '坏', '了'], pinyin: 'Wǒ zhēn pà tā lèihuài le.', vi: 'Tôi thật sợ anh ấy mệt quá.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 一般 · B 经常 · C 终于 · D 应该 · E 愿意. Gõ chữ cái A–E.',
      items: [
        { prompt: '周末你们（ ）在哪儿吃饭？在家吃还是出去吃？', answer: 'A', gloss: '一般' }, { prompt: '（ ）考完试了，我们去哪儿玩儿玩儿？', answer: 'C', gloss: '终于' },
        { prompt: '你（ ）早睡早起，别睡得那么晚。', answer: 'D', gloss: '应该' }, { prompt: '我不（ ）去那个公司工作，太远，也太累。', answer: 'E', gloss: '愿意' },
        { prompt: '那个饭馆离我们学校很近，我们（ ）去。', answer: 'B', gloss: '经常' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 过去 · B 起来 · C 遇到 · D 校长 · E 礼物. Gõ chữ cái A–E.',
      items: [
        { prompt: '一会儿周经理走进来的时候，请大家站（ ）。 好，我们知道了。', answer: 'B', gloss: '起来' }, { prompt: '我忘了把这本书还给他了。 没关系，明天我帮你送（ ）吧。', answer: 'A', gloss: '过去' },
        { prompt: '前边那位老人是谁？ 他是我们的（ ）。', answer: 'D', gloss: '校长' }, { prompt: '你怎么回来这么晚？ 回家的路上（ ）张老师了，跟他聊了一会儿。', answer: 'C', gloss: '遇到' },
        { prompt: '下个月是爷爷的生日，你有什么打算？ 我要送他一件特别的（ ）。', answer: 'E', gloss: '礼物' },
      ],
    },
    {
      title: 'Giáo trình 注释 · Hoàn thành câu (gõ phần còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: '小刚（ ）几瓶饮料。 (回来)', answer: '带回来', gloss: 'phương hướng' },
        { prompt: '周明（ ）办公室。 (进去)', answer: '走进去', gloss: 'phương hướng' },
        { prompt: '我们（ ）一件衣服。 (过去)', answer: '拿过去', gloss: 'phương hướng' },
        { prompt: 'A: 周末你和小丽去哪儿了？ B: 我跟她去饭馆了，我们（ ），很高兴。', answer: '一边吃一边聊', gloss: '一边…一边…' },
        { prompt: 'A: 你们爬山很累吗？ B: 我们（ ）边爬，一点儿也不累。', answer: '说话', gloss: '边…边…' },
      ],
    },
    {
      title: 'Giáo trình 练习 3 · Hoàn thành đối thoại (gõ phần còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: 'A: 你去商店买点儿蛋糕和饮料（ ）吧。', answer: '回来', gloss: 'phương hướng' },
        { prompt: 'A: 是的，一会儿我们（ ）。', answer: '一边吃一边聊', gloss: '一边…一边…' },
        { prompt: 'A: 累（ ）了吧？ B: 跟你一起边（ ）边（ ），一点儿也不累。', answer: '坏', gloss: '坏' },
        { prompt: 'A: 我们给楼下的朋友（ ）一些，怎么样？', answer: '送过去', gloss: 'phương hướng' },
        { prompt: 'A: 这么多礼物，都是你丈夫（ ）的？ B: 对，他刚从国外回来。', answer: '带回来', gloss: 'phương hướng' },
        { prompt: 'A: 太累了，我们别跑了，走（ ）吧。', answer: '回去', gloss: 'phương hướng' },
        { prompt: 'A: 你（ ）跑步吗？ B: 对，我（ ）每天早上都出来跑一会儿。', answer: '经常', gloss: '经常' },
      ],
    },
  ],
}
