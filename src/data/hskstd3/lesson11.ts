import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 3, Bài 11: 别忘了把空调关了。 (sách trang 106–113).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách.
 * Nghe: 11-1…11-5. Bài tập: 热身/注释/练习 của giáo trình, đáp án theo "Đáp án giáo trình HSK 3" trang 22–23.
 */

const A = '/audio/hsk-std3/'

export const hskStd3Lesson11: Lesson = {
  id: 11,
  title: 'Đừng quên tắt điều hòa nhé',
  hanzi: '别忘了把空调关了。',
  pinyin: 'Bié wàng le bǎ kōngtiáo guān le.',
  vi: 'Đừng quên tắt điều hòa nhé',
  intro: 'Nhờ vả, dặn dò và nhắc nhở. Học câu chữ 把 (1) "A把B + động từ + ……" dùng để đề nghị, ra lệnh, và cách nói số ước lượng với 左右.',

  dialogue: [
    { who: 'A', name: '小明', hanzi: '我先走了。', pinyin: 'Wǒ xiān zǒu le.', vi: 'Tớ đi trước đây.', scene: 'Hội thoại 1 · Trong lớp học' },
    { who: 'B', name: '同学', hanzi: '你去哪儿？', pinyin: 'Nǐ qù nǎr?', vi: 'Cậu đi đâu?' },
    { who: 'A', name: '小明', hanzi: '我去图书馆借本书。', pinyin: 'Wǒ qù túshūguǎn jiè běn shū.', vi: 'Tớ đến thư viện mượn quyển sách.' },
    { who: 'B', name: '同学', hanzi: '帮我把这本词典还了吧。', pinyin: 'Bāng wǒ bǎ zhè běn cídiǎn huán le ba.', vi: 'Giúp tớ trả quyển từ điển này nhé.' },
    { who: 'A', name: '小明', hanzi: '好，等一会儿你离开教室的时候，记得把灯关了。', pinyin: 'Hǎo, děng yíhuìr nǐ líkāi jiàoshì de shíhou, jìde bǎ dēng guān le.', vi: 'Được, lát nữa lúc cậu rời lớp nhớ tắt đèn nhé.' },
    { who: 'B', name: '同学', hanzi: '好的，放心吧。', pinyin: 'Hǎo de, fàng xīn ba.', vi: 'Được rồi, yên tâm đi.' },
    { who: 'A', name: '周明', hanzi: '会议结束后，别忘记把空调关了。', pinyin: 'Huìyì jiéshù hòu, bié wàngjì bǎ kōngtiáo guān le.', vi: 'Họp xong, đừng quên tắt điều hòa nhé.', scene: 'Hội thoại 2 · Trong phòng họp' },
    { who: 'B', name: '小丽', hanzi: '好的。王经理两点左右来了个电话。', pinyin: 'Hǎo de. Wáng jīnglǐ liǎng diǎn zuǒyòu láile ge diànhuà.', vi: 'Vâng. Khoảng hai giờ giám đốc Vương có gọi điện.' },
    { who: 'A', name: '周明', hanzi: '他已经到北京了？', pinyin: 'Tā yǐjīng dào Běijīng le?', vi: 'Anh ấy đã đến Bắc Kinh rồi à?' },
    { who: 'B', name: '小丽', hanzi: '是的，他正坐着地铁来我们公司呢。', pinyin: 'Shì de, tā zhèng zuòzhe dìtiě lái wǒmen gōngsī ne.', vi: 'Vâng, anh ấy đang ngồi tàu điện ngầm đến công ty mình.' },
    { who: 'A', name: '周明', hanzi: '等他到了就告诉我。', pinyin: 'Děng tā dào le jiù gàosu wǒ.', vi: 'Anh ấy đến thì báo tôi nhé.' },
    { who: 'A', name: '妈妈', hanzi: '还差一双筷子，你去拿一下。', pinyin: 'Hái chà yì shuāng kuàizi, nǐ qù ná yíxià.', vi: 'Còn thiếu một đôi đũa, con đi lấy đi.', scene: 'Hội thoại 3 · Trong phòng khách' },
    { who: 'B', name: '儿子', hanzi: '今天怎么做了这么多菜？', pinyin: 'Jīntiān zěnme zuòle zhème duō cài?', vi: 'Hôm nay sao mẹ nấu nhiều món thế?' },
    { who: 'A', name: '妈妈', hanzi: '今天是你爸爸的生日。', pinyin: 'Jīntiān shì nǐ bàba de shēngrì.', vi: 'Hôm nay là sinh nhật bố con.' },
    { who: 'B', name: '儿子', hanzi: '真的啊？我把爸爸的生日忘了。那我们今天喝点儿啤酒吧。', pinyin: 'Zhēn de a? Wǒ bǎ bàba de shēngrì wàng le. Nà wǒmen jīntiān hē diǎnr píjiǔ ba.', vi: 'Thật à? Con quên sinh nhật bố mất. Vậy hôm nay chúng ta uống chút bia nhé.' },
    { who: 'A', name: '妈妈', hanzi: '医生说你爸爸一口酒都不能喝，别让他看见酒瓶子。', pinyin: 'Yīshēng shuō nǐ bàba yì kǒu jiǔ dōu bù néng hē, bié ràng tā kànjiàn jiǔ píngzi.', vi: 'Bác sĩ nói bố con một ngụm rượu cũng không được uống, đừng để ông thấy chai rượu.' },
    { who: 'A', name: '短文', hanzi: '这个笔记本电脑我去年买的时候要五千块左右，现在便宜多了。我想把这个电脑卖了，再买一个更好的。现在我每天起床后的第一件事就是打开电脑，看电子邮件。我已经很少写信，也很少用笔写字，已经习惯用电脑来学习和工作了。哪一天突然没有了电脑，我们怎么办呢？', pinyin: 'Zhège bǐjìběn diànnǎo wǒ qùnián mǎi de shíhou yào wǔqiān kuài zuǒyòu, xiànzài piányi duō le. Wǒ xiǎng bǎ zhège diànnǎo mài le, zài mǎi yí ge gèng hǎo de. Xiànzài wǒ měi tiān qǐ chuáng hòu de dì-yī jiàn shì jiù shì dǎkāi diànnǎo, kàn diànzǐ yóujiàn. Wǒ yǐjīng hěn shǎo xiě xìn, yě hěn shǎo yòng bǐ xiě zì, yǐjīng xíguàn yòng diànnǎo lái xuéxí hé gōngzuò le. Nǎ yì tiān tūrán méiyǒule diànnǎo, wǒmen zěnme bàn ne?', vi: 'Máy tính xách tay này năm ngoái tôi mua hết khoảng năm nghìn tệ, giờ rẻ hơn nhiều. Tôi muốn bán nó rồi mua cái tốt hơn. Bây giờ việc đầu tiên mỗi sáng thức dậy là bật máy tính xem email. Tôi đã rất ít viết thư, cũng rất ít viết chữ bằng bút, đã quen dùng máy tính để học và làm việc. Một ngày nào đó đột nhiên không có máy tính thì chúng ta làm sao đây?', scene: 'Bài đọc 4 · Máy tính xách tay' },
  ],
  dialogueClips: [
    { label: '11-1 · Trong lớp học', src: A + 'l11-1.mp3' },
    { label: '11-2 · Trong phòng họp', src: A + 'l11-2.mp3' },
    { label: '11-3 · Trong phòng khách', src: A + 'l11-3.mp3' },
    { label: '11-4 · Đoạn văn về máy tính', src: A + 'l11-4.mp3' },
  ],
  dialogueTip: '<b>A把B + động từ + ……</b>: dùng khi đề nghị, ra lệnh; B phải là cái đã xác định. Phủ định và động từ năng nguyện đặt <b>trước 把</b> (别把手机忘了, 你可以把空调关了吗？). <b>左右</b> đặt sau số để nói ước lượng (两点左右).',
  slowSay: '别忘了把空调关了',

  vocab: [
    { hanzi: '图书馆', pinyin: 'túshūguǎn', pos: 'danh từ', meaning: 'thư viện', han_viet: 'đồ thư quán' },
    { hanzi: '借', pinyin: 'jiè', pos: 'động từ', meaning: 'mượn, vay', han_viet: 'tá' },
    { hanzi: '词典', pinyin: 'cídiǎn', pos: 'danh từ', meaning: 'từ điển', han_viet: 'từ điển' },
    { hanzi: '还', pinyin: 'huán', pos: 'động từ', meaning: 'trả', han_viet: 'hoàn' },
    { hanzi: '灯', pinyin: 'dēng', pos: 'danh từ', meaning: 'đèn', han_viet: 'đăng' },
    { hanzi: '会议', pinyin: 'huìyì', pos: 'danh từ', meaning: 'hội nghị, cuộc họp', han_viet: 'hội nghị' },
    { hanzi: '结束', pinyin: 'jiéshù', pos: 'động từ', meaning: 'kết thúc, chấm dứt', han_viet: 'kết thúc' },
    { hanzi: '忘记', pinyin: 'wàngjì', pos: 'động từ', meaning: 'quên', han_viet: 'vong ký' },
    { hanzi: '空调', pinyin: 'kōngtiáo', pos: 'danh từ', meaning: 'máy điều hòa không khí', han_viet: 'không điều' },
    { hanzi: '关', pinyin: 'guān', pos: 'động từ', meaning: 'tắt, đóng', han_viet: 'quan' },
    { hanzi: '地铁', pinyin: 'dìtiě', pos: 'danh từ', meaning: 'tàu điện ngầm', han_viet: 'địa thiết' },
    { hanzi: '双', pinyin: 'shuāng', pos: 'lượng từ', meaning: 'đôi', han_viet: 'song' },
    { hanzi: '筷子', pinyin: 'kuàizi', pos: 'danh từ', meaning: 'đũa', han_viet: 'khoái tử' },
    { hanzi: '啤酒', pinyin: 'píjiǔ', pos: 'danh từ', meaning: 'bia, rượu bia', han_viet: 'tỳ tửu' },
    { hanzi: '口', pinyin: 'kǒu', pos: 'lượng từ', meaning: 'miếng, ngụm, hớp', han_viet: 'khẩu' },
    { hanzi: '瓶子', pinyin: 'píngzi', pos: 'danh từ', meaning: 'lọ, bình, chai', han_viet: 'bình tử' },
    { hanzi: '笔记本电脑', pinyin: 'bǐjìběn diànnǎo', pos: 'danh từ', meaning: 'máy tính xách tay', han_viet: 'bút ký bản điện não' },
    { hanzi: '电子邮件', pinyin: 'diànzǐ yóujiàn', pos: 'danh từ', meaning: 'email', han_viet: 'điện tử bưu kiện' },
    { hanzi: '习惯', pinyin: 'xíguàn', pos: 'động từ/danh từ', meaning: 'quen; thói quen', han_viet: 'tập quán' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Câu chữ 把 (1)', title: 'Câu chữ 把: A把B + động từ + ……',
      intro: 'Trong tiếng Trung, khi đối tượng đã xác định chịu một tác động nhất định, dùng câu chữ 把: "A把B + động từ + ……". Thường dùng khi đề nghị hay ra lệnh. A là chủ thể hành động, B là đối tượng chịu tác động, B phải là cái cụ thể hoặc cả hai bên đều biết. Phó từ phủ định và động từ năng nguyện phải đặt trước 把.',
      groups: [
        { label: 'A把B + động từ', items: [['请你把衣服洗了。', 'Qǐng nǐ bǎ yīfu xǐ le.', 'Hãy giặt quần áo đi.'], ['帮我把这本词典还了。', 'Bāng wǒ bǎ zhè běn cídiǎn huán le.', 'Giúp tôi trả quyển từ điển này.'], ['你把灯关了吧。', 'Nǐ bǎ dēng guān le ba.', 'Bạn tắt đèn đi.'], ['我把爸爸的生日忘了。', 'Wǒ bǎ bàba de shēngrì wàng le.', 'Tôi quên sinh nhật bố rồi.']] },
        { label: 'Phủ định · động từ năng nguyện đặt trước 把', items: [['你没把书给我。', 'Nǐ méi bǎ shū gěi wǒ.', 'Bạn chưa đưa sách cho tôi.'], ['你别把手机忘了。', 'Nǐ bié bǎ shǒujī wàng le.', 'Đừng quên điện thoại.'], ['我不能把电脑给你。', 'Wǒ bù néng bǎ diànnǎo gěi nǐ.', 'Tôi không thể đưa máy tính cho bạn.'], ['你可以把空调关了吗？', 'Nǐ kěyǐ bǎ kōngtiáo guān le ma?', 'Bạn tắt điều hòa được không?']] },
      ],
    },
    {
      kind: 'examples', label: 'Số ước lượng 2', title: 'Cách diễn tả số ước lượng: 左右',
      intro: '左右 đặt sau số để chỉ số ước lượng: 三点左右 (khoảng ba giờ), 五个左右 (khoảng năm cái), 十年左右 (khoảng mười năm).',
      groups: [{ label: 'Ví dụ', items: [['周末我一般十点左右起床。', 'Zhōumò wǒ yìbān shí diǎn zuǒyòu qǐ chuáng.', 'Cuối tuần tôi thường dậy khoảng mười giờ.'], ['我们公司有五百人左右。', 'Wǒmen gōngsī yǒu wǔbǎi rén zuǒyòu.', 'Công ty chúng tôi có khoảng năm trăm người.'], ['王经理两点左右来了个电话。', 'Wáng jīnglǐ liǎng diǎn zuǒyòu láile ge diànhuà.', 'Khoảng hai giờ giám đốc Vương có gọi điện.'], ['这个笔记本电脑我去年买的时候要五千块左右。', 'Zhège bǐjìběn diànnǎo wǒ qùnián mǎi de shíhou yào wǔqiān kuài zuǒyòu.', 'Máy tính này năm ngoái tôi mua hết khoảng năm nghìn tệ.']] }],
    },
    {
      kind: 'examples', label: 'Đọc cụm từ', title: 'Đọc to các cụm từ và câu (练习 1)',
      clip: { label: '11-5 · Đọc to các cụm từ và câu', src: A + 'l11-5.mp3' },
      intro: 'Bấm để nghe từng cụm.',
      groups: [{ label: 'Cụm từ', items: [
        ['关灯', 'guān dēng', 'tắt đèn'], ['关门', 'guān mén', 'đóng cửa'], ['关电视', 'guān diànshì', 'tắt ti vi'], ['离开教室的时候，记得把灯关了', 'líkāi jiàoshì de shíhou, jìde bǎ dēng guān le', 'khi rời lớp nhớ tắt đèn'],
        ['借书', 'jiè shū', 'mượn sách'], ['借钱', 'jiè qián', 'mượn tiền'], ['我去图书馆借本书', 'wǒ qù túshūguǎn jiè běn shū', 'tôi đến thư viện mượn quyển sách'],
        ['学期结束', 'xuéqī jiéshù', 'kết thúc học kỳ'], ['会议结束后，别忘了把空调关了', 'huìyì jiéshù hòu, bié wàngle bǎ kōngtiáo guān le', 'họp xong đừng quên tắt điều hòa'],
        ['一口水', 'yì kǒu shuǐ', 'một ngụm nước'], ['你爸爸一口酒都不能喝', 'nǐ bàba yì kǒu jiǔ dōu bù néng hē', 'bố bạn một ngụm rượu cũng không được uống'],
        ['好习惯', 'hǎo xíguàn', 'thói quen tốt'], ['我已经习惯用电脑来学习和工作了', 'wǒ yǐjīng xíguàn yòng diànnǎo lái xuéxí hé gōngzuò le', 'tôi đã quen dùng máy tính để học và làm việc'],
      ] }],
    },
  ],

  notes: [
    {
      title: 'Câu chữ 把 (1): A把B + động từ + ……',
      body: 'Dùng để đề nghị hay ra lệnh; B phải là cái xác định (特指/已知). Phó từ phủ định (没, 别) và động từ năng nguyện (可以, 不能) đặt trước 把: 你别把手机忘了 / 你可以把空调关了吗？',
      say: '你可以把空调关了吗',
    },
    {
      title: 'Số ước lượng: 左右',
      body: '左右 đặt sau số: 三点左右, 五个左右, 十年左右. Ví dụ: 我每天十点左右睡觉。',
      say: '我十点左右睡觉',
    },
    {
      title: 'Cách thành lập từ mới (旧字新词)',
      body: '字 + 词典 = 字典 (từ điển chữ); 运动 + 会议 = 运动会 (đại hội thể thao); 开 + 会议 = 开会 (họp).',
      say: '开会',
    },
    {
      title: 'Tục ngữ: 贵人多忘事',
      body: 'Người sang thường hay quên. "贵人" là người làm quan to hay làm ăn lớn. Câu này nghĩa là người có địa vị cao hay bận nên hay quên những việc nhỏ; trong đối thoại thường dùng như lời khách sáo để nói người ta bận rộn, quên chút chuyện nhỏ là dễ hiểu, có khi mang ý châm biếm.',
      say: '贵人多忘事',
    },
  ],

  writeChars: ['图', '借', '词', '典', '灯', '议', '结', '束'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 4)',
      items: [
        { q: '小明要帮同学做什么？', hint: '小明要帮同学还词典。' },
        { q: '小明告诉同学做什么？', hint: '小明告诉同学离开教室的时候，记得把灯关了。' },
        { q: '王经理现在在哪儿？', hint: '王经理现在在北京。' },
        { q: '妈妈今天为什么做了那么多的菜？', hint: '因为今天是爸爸的生日。' },
        { q: '爸爸能喝酒吗？为什么？', hint: '爸爸不能喝酒，因为医生不让他喝酒。' },
        { q: '“我”现在每天用电脑做什么？', hint: '“我”现在每天用电脑学习和工作。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: 在你们国家，一个手机多少钱？', hint: 'Mẫu: 在我们国家，一个手机2000块左右。' },
        { q: 'Theo nhóm: 今天的计划 (什么时候、在什么地方、做什么)', hint: 'Mẫu: 今天下了课我要去图书馆把书还了。' },
      ],
    },
  ],

  sentences: [
    { parts: ['帮', '我', '把', '这', '本', '词典', '还', '了'], pinyin: 'Bāng wǒ bǎ zhè běn cídiǎn huán le.', vi: 'Giúp tôi trả quyển từ điển này.' },
    { parts: ['记得', '把', '灯', '关', '了'], pinyin: 'Jìde bǎ dēng guān le.', vi: 'Nhớ tắt đèn nhé.' },
    { parts: ['别', '忘记', '把', '空调', '关', '了'], pinyin: 'Bié wàngjì bǎ kōngtiáo guān le.', vi: 'Đừng quên tắt điều hòa.' },
    { parts: ['王', '经理', '两', '点', '左右', '来', '了', '个', '电话'], pinyin: 'Wáng jīnglǐ liǎng diǎn zuǒyòu láile ge diànhuà.', vi: 'Khoảng hai giờ giám đốc Vương có gọi điện.' },
    { parts: ['我', '把', '爸爸', '的', '生日', '忘', '了'], pinyin: 'Wǒ bǎ bàba de shēngrì wàng le.', vi: 'Tôi quên sinh nhật bố rồi.' },
    { parts: ['你', '爸爸', '一', '口', '酒', '都', '不', '能', '喝'], pinyin: 'Nǐ bàba yì kǒu jiǔ dōu bù néng hē.', vi: 'Bố con một ngụm rượu cũng không được uống.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 瓶子 · B 空调 · C 词典 · D 双 · E 口. Gõ chữ cái A–E.',
      items: [
        { prompt: '拿两（ ）筷子就可以了，今天爸爸不回来吃晚饭。', answer: 'D', gloss: '双' }, { prompt: '这本（ ）是我朋友的，不是我的。', answer: 'C', gloss: '词典' },
        { prompt: '这种咖啡特别好喝，你快来喝一（ ）吧。', answer: 'E', gloss: '口' }, { prompt: '桌子上有一个（ ），是谁的？', answer: 'A', gloss: '瓶子' },
        { prompt: '你怎么没开（ ）？太热了！', answer: 'B', gloss: '空调' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 习惯 · B 结束 · C 关 · D 还 (huán) · E 会议. Gõ chữ cái A–E.',
      items: [
        { prompt: '你把灯（ ）了吧，我要睡觉了。 好，我马上就去。', answer: 'C', gloss: '关' }, { prompt: '你可以帮我把书（ ）了吗？ 明天下午可以吗？', answer: 'D', gloss: '还' },
        { prompt: '音乐会（ ）以后，我们一起去饭馆吃饭吧。 还是回家吃吧。', answer: 'B', gloss: '结束' }, { prompt: '你下课以后常常做什么？ 我下了汉语课（ ）去图书馆。', answer: 'A', gloss: '习惯' },
        { prompt: '今天的（ ）是几点的？ 下午两点半。', answer: 'E', gloss: '会议' },
      ],
    },
    {
      title: 'Giáo trình 注释 · Hoàn thành câu với 把 (gõ phần còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: '房间里有点儿冷，你可以（ ）？', answer: '把门关上吗', gloss: '把 + 关' },
        { prompt: '你发烧还没好，快（ ）吧。', answer: '把药吃完', gloss: '把 + 吃' },
        { prompt: '吃饭以前别忘了（ ）。', answer: '把手洗干净', gloss: '把 + 洗' },
      ],
    },
    {
      title: 'Giáo trình 练习 3 · Hoàn thành đối thoại (gõ phần còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: 'A: 音乐会就要开始了，先生，请您（ ）。', answer: '把手机关了', gloss: '把 + 关' },
        { prompt: 'A: 还有五分钟（ ）。', answer: '左右', gloss: '左右' },
        { prompt: 'A: 睡觉以前别忘了（ ）。', answer: '喝牛奶', gloss: 'nhắc nhở' },
        { prompt: 'A: 你是不是忘了（ ）？', answer: '关灯', gloss: 'quên' },
        { prompt: 'A: 你可以帮我（ ）？ B: 没问题，我帮你还他。', answer: '把这些钱还给他吗', gloss: '把 + 还给' },
      ],
    },
  ],
}
