import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 3, Bài 17: 谁都有办法看好你的“病”。 (sách trang 159–166).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách.
 * Nghe: 17-1…17-5. Bài tập: 热身/注释/练习 của giáo trình, đáp án theo "Đáp án giáo trình HSK 3" trang 34–35.
 */

const A = '/audio/hsk-std3/'

export const hskStd3Lesson17: Lesson = {
  id: 17,
  title: 'Ai cũng có cách chữa khỏi "bệnh" của em',
  hanzi: '谁都有办法看好你的“病”。',
  pinyin: 'Shéi dōu yǒu bànfǎ kànhǎo nǐ de "bìng".',
  vi: 'Ai cũng có cách chữa khỏi "bệnh" của em',
  intro: 'Xin nghỉ, sở thích và sức khỏe. Học động từ hai âm tiết lặp lại (ABAB), và đại từ nghi vấn dùng linh hoạt (3): 谁/什么/怎么/哪儿 + 都 chỉ "bất kỳ ai, bất kỳ cái gì".',

  dialogue: [
    { who: 'A', name: '小丽', hanzi: '周经理，下个星期我可以请几天假吗？', pinyin: 'Zhōu jīnglǐ, xià ge xīngqī wǒ kěyǐ qǐng jǐ tiān jià ma?', vi: 'Giám đốc Chu, tuần sau tôi có thể xin nghỉ mấy ngày không ạ?', scene: 'Hội thoại 1 · Trong công ty' },
    { who: 'B', name: '周明', hanzi: '你有什么事？', pinyin: 'Nǐ yǒu shénme shì?', vi: 'Cô có việc gì?' },
    { who: 'A', name: '小丽', hanzi: '我的一个老朋友结婚，我跟他两年没见了。', pinyin: 'Wǒ de yí ge lǎo péngyou jié hūn, wǒ gēn tā liǎng nián méi jiàn le.', vi: 'Một người bạn cũ của tôi kết hôn, tôi với anh ấy hai năm không gặp rồi.' },
    { who: 'B', name: '周明', hanzi: '你一共想请几天假？', pinyin: 'Nǐ yígòng xiǎng qǐng jǐ tiān jià?', vi: 'Tổng cộng cô muốn xin nghỉ mấy ngày?' },
    { who: 'A', name: '小丽', hanzi: '三天。', pinyin: 'Sān tiān.', vi: 'Ba ngày.' },
    { who: 'A', name: '同事', hanzi: '小丽，那个高高的男人是你们公司的吗？你对他了解吗？', pinyin: 'Xiǎolì, nàge gāogāo de nánrén shì nǐmen gōngsī de ma? Nǐ duì tā liǎojiě ma?', vi: 'Tiểu Lệ, người đàn ông cao cao kia là người công ty cậu à? Cậu hiểu anh ấy không?', scene: 'Hội thoại 2 · Trong công ty' },
    { who: 'B', name: '小丽', hanzi: '我们过去是邻居，后来是大学同学，关系一直很不错。', pinyin: 'Wǒmen guòqù shì línjū, hòulái shì dàxué tóngxué, guānxì yìzhí hěn búcuò.', vi: 'Chúng tôi trước là hàng xóm, sau là bạn đại học, quan hệ luôn rất tốt.' },
    { who: 'A', name: '同事', hanzi: '他一般喜欢做什么？', pinyin: 'Tā yìbān xǐhuan zuò shénme?', vi: 'Anh ấy thường thích làm gì?' },
    { who: 'B', name: '小丽', hanzi: '他有很多爱好，唱歌、画画儿、踢足球，什么都会。', pinyin: 'Tā yǒu hěn duō àihào, chàng gē, huà huàr, tī zúqiú, shénme dōu huì.', vi: 'Anh ấy có nhiều sở thích: hát, vẽ, đá bóng, cái gì cũng biết.' },
    { who: 'A', name: '同事', hanzi: '真的？那你介绍我们认识认识吧。', pinyin: 'Zhēn de? Nà nǐ jièshào wǒmen rènshi rènshi ba.', vi: 'Thật à? Vậy cậu giới thiệu để chúng tôi làm quen nhé.' },
    { who: 'B', name: '小丽', hanzi: '不行，现在他是我丈夫。', pinyin: 'Bù xíng, xiànzài tā shì wǒ zhàngfu.', vi: 'Không được, giờ anh ấy là chồng tôi rồi.' },
    { who: 'A', name: '周太太', hanzi: '最近我觉得哪儿都不舒服，你带我去医院检查检查吧。', pinyin: 'Zuìjìn wǒ juéde nǎr dōu bù shūfu, nǐ dài wǒ qù yīyuàn jiǎnchá jiǎnchá ba.', vi: 'Dạo này em thấy chỗ nào cũng khó chịu, anh đưa em đến bệnh viện kiểm tra đi.', scene: 'Hội thoại 3 · Ở nhà' },
    { who: 'B', name: '周明', hanzi: '不用去医院，谁都有办法看好你的“病”。我问你，你多久没运动了？', pinyin: 'Búyòng qù yīyuàn, shéi dōu yǒu bànfǎ kànhǎo nǐ de "bìng". Wǒ wèn nǐ, nǐ duō jiǔ méi yùndòng le?', vi: 'Không cần đến bệnh viện, ai cũng có cách chữa "bệnh" của em. Anh hỏi, em bao lâu không vận động rồi?' },
    { who: 'A', name: '周太太', hanzi: '我三年没运动了。', pinyin: 'Wǒ sān nián méi yùndòng le.', vi: 'Em ba năm không vận động rồi.' },
    { who: 'B', name: '周明', hanzi: '谁都知道运动对身体好。但是你吃饱了就睡。', pinyin: 'Shéi dōu zhīdào yùndòng duì shēntǐ hǎo. Dànshì nǐ chībǎo le jiù shuì.', vi: 'Ai cũng biết vận động tốt cho cơ thể. Nhưng em ăn no là ngủ.' },
    { who: 'A', name: '周太太', hanzi: '为了健康，我真应该多锻炼锻炼了。从明天起，我决定每天去长跑。', pinyin: 'Wèile jiànkāng, wǒ zhēn yīnggāi duō duànliàn duànliàn le. Cóng míngtiān qǐ, wǒ juédìng měi tiān qù chángpǎo.', vi: 'Vì sức khỏe, em thật sự nên tập luyện nhiều hơn. Từ ngày mai em quyết định mỗi ngày chạy bộ đường dài.' },
    { who: 'A', name: '短文', hanzi: '“运动很重要”这句话谁都懂。但是你知道怎么运动吗？第一，要选择“对”的时间。一般来说，早上9点是最好的时间，冬天要再晚一些。第二，要选择“对”的地点，公园、山上、游泳馆，这些地方都可以运动。第三，必须要根据自己的健康情况运动。如果你很久没爬山或者游泳了，运动一会儿就一定要休息休息。还要记得刚运动完口渴的时候，不要马上喝水。', pinyin: '"Yùndòng hěn zhòngyào" zhè jù huà shéi dōu dǒng. Dànshì nǐ zhīdào zěnme yùndòng ma? Dì yī, yào xuǎnzé "duì" de shíjiān. Yìbān lái shuō, zǎoshang jiǔ diǎn shì zuì hǎo de shíjiān, dōngtiān yào zài wǎn yìxiē. Dì èr, yào xuǎnzé "duì" de dìdiǎn, gōngyuán, shānshang, yóuyǒngguǎn, zhèxiē dìfang dōu kěyǐ yùndòng. Dì sān, bìxū yào gēnjù zìjǐ de jiànkāng qíngkuàng yùndòng. Rúguǒ nǐ hěn jiǔ méi pá shān huòzhě yóu yǒng le, yùndòng yíhuìr jiù yídìng yào xiūxi xiūxi. Hái yào jìde gāng yùndòng wán kǒu kě de shíhou, búyào mǎshàng hē shuǐ.', vi: 'Câu "vận động rất quan trọng" ai cũng hiểu. Nhưng bạn có biết vận động thế nào không? Thứ nhất, phải chọn thời gian "đúng": nói chung 9 giờ sáng là tốt nhất, mùa đông muộn hơn một chút. Thứ hai, phải chọn địa điểm "đúng": công viên, trên núi, bể bơi đều được. Thứ ba, nhất định phải dựa vào tình trạng sức khỏe của mình. Nếu đã lâu không leo núi hay bơi, vận động một lúc phải nghỉ ngơi. Nhớ rằng khi vừa vận động xong khát nước thì đừng uống nước ngay.', scene: 'Bài đọc 4 · Vận động thế nào' },
  ],
  dialogueClips: [
    { label: '17-1 · Trong công ty', src: A + 'l17-1.mp3' },
    { label: '17-2 · Trong công ty', src: A + 'l17-2.mp3' },
    { label: '17-3 · Ở nhà', src: A + 'l17-3.mp3' },
    { label: '17-4 · Vận động thế nào', src: A + 'l17-4.mp3' },
  ],
  dialogueTip: '<b>ABAB</b>: động từ hai âm tiết lặp lại (休息休息, 检查检查) — hành động ngắn, thử làm. <b>谁/什么/怎么/哪儿 + 都</b>: mọi đối tượng trong phạm vi đều như nhau, không có ngoại lệ (谁都知道, 什么都会, 哪儿都不舒服).',
  slowSay: '谁都有办法看好你的病',

  vocab: [
    { hanzi: '请假', pinyin: 'qǐng jià', pos: 'động từ', meaning: 'xin nghỉ phép', han_viet: 'thỉnh giả' },
    { hanzi: '一共', pinyin: 'yígòng', pos: 'phó từ', meaning: 'tổng cộng', han_viet: 'nhất cộng' },
    { hanzi: '邻居', pinyin: 'línjū', pos: 'danh từ', meaning: 'láng giềng', han_viet: 'lân cư' },
    { hanzi: '后来', pinyin: 'hòulái', pos: 'danh từ', meaning: 'sau này, sau đó', han_viet: 'hậu lai' },
    { hanzi: '爱好', pinyin: 'àihào', pos: 'danh từ', meaning: 'sở thích', han_viet: 'ái hiếu' },
    { hanzi: '办法', pinyin: 'bànfǎ', pos: 'danh từ', meaning: 'cách, biện pháp', han_viet: 'biện pháp' },
    { hanzi: '饱', pinyin: 'bǎo', pos: 'tính từ', meaning: 'no', han_viet: 'bão' },
    { hanzi: '为了', pinyin: 'wèile', pos: 'giới từ', meaning: 'để, vì', han_viet: 'vi liễu' },
    { hanzi: '决定', pinyin: 'juédìng', pos: 'động từ', meaning: 'quyết định', han_viet: 'quyết định' },
    { hanzi: '选择', pinyin: 'xuǎnzé', pos: 'động từ', meaning: 'lựa chọn', han_viet: 'tuyển trạch' },
    { hanzi: '冬(天)', pinyin: 'dōng(tiān)', pos: 'danh từ', meaning: '(mùa) đông', han_viet: 'đông' },
    { hanzi: '必须', pinyin: 'bìxū', pos: 'phó từ', meaning: 'cần phải', han_viet: 'tất tu' },
    { hanzi: '根据', pinyin: 'gēnjù', pos: 'giới từ', meaning: 'căn cứ vào, dựa vào', han_viet: 'căn cứ' },
    { hanzi: '情况', pinyin: 'qíngkuàng', pos: 'danh từ', meaning: 'tình hình, tình trạng', han_viet: 'tình huống' },
    { hanzi: '口', pinyin: 'kǒu', pos: 'danh từ', meaning: 'miệng', han_viet: 'khẩu' },
    { hanzi: '渴', pinyin: 'kě', pos: 'tính từ', meaning: 'khát', han_viet: 'khát' },
  ],

  sections: [
    {
      kind: 'examples', label: 'ABAB', title: 'Động từ hai âm tiết lặp lại (ABAB)',
      intro: 'Hình thức lặp lại ABAB (chẳng hạn 休息休息) dùng khi muốn diễn tả hành động xảy ra trong thời gian ngắn, hoặc cho biết ai đó thử làm việc gì.',
      groups: [{ label: 'Ví dụ', items: [['他是谁？你介绍我们认识认识吧。', 'Tā shì shéi? Nǐ jièshào wǒmen rènshi rènshi ba.', 'Anh ấy là ai? Bạn giới thiệu để chúng tôi làm quen nhé.'], ['他是新来的，有时间你帮助帮助他吧。', 'Tā shì xīn lái de, yǒu shíjiān nǐ bāngzhù bāngzhù tā ba.', 'Anh ấy mới đến, có thời gian bạn giúp đỡ anh ấy nhé.'], ['这是本新书，你学习学习吧。', 'Zhè shì běn xīn shū, nǐ xuéxí xuéxí ba.', 'Đây là sách mới, bạn học thử đi.'], ['我真应该多锻炼锻炼了。', 'Wǒ zhēn yīnggāi duō duànliàn duànliàn le.', 'Tôi thật sự nên tập luyện nhiều hơn.']] }],
    },
    {
      kind: 'examples', label: 'Đại từ nghi vấn 3', title: 'Đại từ nghi vấn dùng linh hoạt (3): 谁/什么/怎么/哪儿 + 都',
      intro: 'Các đại từ nghi vấn 谁, 什么, 怎么, 哪儿 có thể thay thế mọi đối tượng trong một phạm vi nào đó; các đối tượng này đều có đặc điểm giống nhau, không có trường hợp ngoại lệ.',
      groups: [{ label: 'Ví dụ', items: [['谁都喜欢小丽。', 'Shéi dōu xǐhuan Xiǎolì.', 'Ai cũng thích Tiểu Lệ.'], ['小刚什么都喜欢吃。', 'Xiǎogāng shénme dōu xǐhuan chī.', 'Tiểu Cương món gì cũng thích ăn.'], ['我们怎么去公园都可以。', 'Wǒmen zěnme qù gōngyuán dōu kěyǐ.', 'Chúng ta đi công viên bằng cách nào cũng được.'], ['最近我觉得哪儿都不舒服。', 'Zuìjìn wǒ juéde nǎr dōu bù shūfu.', 'Dạo này tôi thấy chỗ nào cũng khó chịu.']] }],
    },
    {
      kind: 'examples', label: 'Đọc cụm từ', title: 'Đọc to các cụm từ và câu (练习 1)',
      clip: { label: '17-5 · Đọc to các cụm từ và câu', src: A + 'l17-5.mp3' },
      intro: 'Bấm để nghe từng cụm.',
      groups: [{ label: 'Cụm từ', items: [
        ['请病假', 'qǐng bìngjià', 'xin nghỉ ốm'], ['请事假', 'qǐng shìjià', 'xin nghỉ việc riêng'], ['请两天假', 'qǐng liǎng tiān jià', 'xin nghỉ hai ngày'], ['下个星期我可以请几天假吗？', 'xià ge xīngqī wǒ kěyǐ qǐng jǐ tiān jià ma?', 'tuần sau tôi có thể xin nghỉ mấy ngày không?'],
        ['很多爱好', 'hěn duō àihào', 'nhiều sở thích'], ['我的爱好是游泳', 'wǒ de àihào shì yóu yǒng', 'sở thích của tôi là bơi'], ['他有很多爱好', 'tā yǒu hěn duō àihào', 'anh ấy có nhiều sở thích'],
        ['好办法', 'hǎo bànfǎ', 'cách hay'], ['没有办法', 'méiyǒu bànfǎ', 'hết cách'], ['谁都有办法看好你的“病”', 'shéi dōu yǒu bànfǎ kànhǎo nǐ de "bìng"', 'ai cũng có cách chữa "bệnh" của bạn'],
        ['选择题', 'xuǎnzé tí', 'câu hỏi trắc nghiệm'], ['选择时间', 'xuǎnzé shíjiān', 'chọn thời gian'], ['应该选择“对”的时间锻炼', 'yīnggāi xuǎnzé "duì" de shíjiān duànliàn', 'nên chọn thời gian "đúng" để tập'],
        ['很渴', 'hěn kě', 'rất khát'], ['不渴', 'bù kě', 'không khát'], ['口渴了', 'kǒu kě le', 'khát nước rồi'], ['刚运动完口渴的时候，不要马上喝水', 'gāng yùndòng wán kǒu kě de shíhou, búyào mǎshàng hē shuǐ', 'vừa vận động xong khát nước thì đừng uống nước ngay'],
      ] }],
    },
  ],

  notes: [
    {
      title: 'Động từ hai âm tiết lặp lại (ABAB)',
      body: 'ABAB (休息休息, 检查检查, 认识认识, 帮助帮助): hành động diễn ra trong thời gian ngắn, hoặc thử làm một việc nào đó. Thường dùng trong lời đề nghị: 你介绍我们认识认识吧。',
      say: '我真应该多锻炼锻炼了',
    },
    {
      title: 'Đại từ nghi vấn dùng linh hoạt (3)',
      body: '谁/什么/怎么/哪儿 + 都: chỉ mọi đối tượng trong phạm vi, không có ngoại lệ: 谁都知道运动对身体好, 他什么都会, 我们怎么去都可以, 我哪儿都不舒服.',
      say: '谁都知道运动对身体好',
    },
    {
      title: 'Chữ hình thanh (3): trong - ngoài',
      body: 'Chữ hình thanh cấu trúc trong-ngoài có hai loại: "外形内声" (phần hình ở ngoài, phần thanh ở trong), ví dụ 园 (yuán, thanh 元, hình 囗), 病 (bìng, thanh 丙, hình 疒); và "内形外声" (phần hình ở trong, phần thanh ở ngoài), ví dụ 问 (wèn, thanh 门 mén, hình 口), 闻 (wén, thanh 门, hình 耳).',
      say: '问',
    },
    {
      title: 'Cách thành lập từ mới (旧字新词)',
      body: '结婚 + 请假 = 婚假 (nghỉ cưới); 怎么 + 办法 = 怎么办 (làm sao đây); 喜欢 + 爱好 = 喜爱 (yêu thích).',
      say: '婚假',
    },
    {
      title: 'Tục ngữ: 早睡早起身体好',
      body: 'Ngủ sớm dậy sớm tốt cho sức khỏe. Buổi tối đi ngủ sớm một chút và sáng thức dậy sớm một chút sẽ rất có lợi cho sức khỏe. Câu này nhắc chúng ta nếu tạo được thói quen tốt trong giờ giấc làm việc cũng như nghỉ ngơi thì sẽ có một cơ thể khỏe mạnh.',
      say: '早睡早起身体好',
    },
  ],

  writeChars: ['假', '邻', '居', '爱', '办', '饱', '择', '渴'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 4)',
      items: [
        { q: '小丽为什么要请假？请几天假？', hint: '她的一个老朋友要结婚，她要请三天假。' },
        { q: '小丽的丈夫有什么爱好？', hint: '唱歌、画画儿、踢足球。' },
        { q: '周太太为什么不舒服？', hint: '因为她三年没运动了。' },
        { q: '周太太有什么打算？', hint: '她决定从明天开始，每天去长跑。' },
        { q: '什么时间运动最好？', hint: '早上9点。' },
        { q: '运动的时候要注意什么问题？', hint: '选择“对”的时间；选择“对”的地方；根据自己的健康情况运动；刚运动完口渴的时候，不能马上喝水。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: một người nói cảm nhận khi mới đến nơi lạ, người kia nói khi đã quen', hint: 'Mẫu: A: 我刚到这里，谁都不认识。 B: 我的朋友都在这里，我谁都认识。' },
        { q: 'Theo nhóm: viết các động từ hai âm tiết có thể lặp lại và đặt câu', hint: 'Mẫu: 打扫——打扫打扫——客人要来了，我要打扫打扫房间。' },
      ],
    },
  ],

  sentences: [
    { parts: ['下个', '星期', '我', '可以', '请', '几', '天', '假', '吗'], pinyin: 'Xià ge xīngqī wǒ kěyǐ qǐng jǐ tiān jià ma?', vi: 'Tuần sau tôi có thể xin nghỉ mấy ngày không?' },
    { parts: ['你', '一共', '想', '请', '几', '天', '假'], pinyin: 'Nǐ yígòng xiǎng qǐng jǐ tiān jià?', vi: 'Tổng cộng bạn muốn xin nghỉ mấy ngày?' },
    { parts: ['他', '有', '很', '多', '爱好', '什么', '都', '会'], pinyin: 'Tā yǒu hěn duō àihào, shénme dōu huì.', vi: 'Anh ấy có nhiều sở thích, gì cũng biết.' },
    { parts: ['谁', '都', '有', '办法', '看好', '你', '的', '病'], pinyin: 'Shéi dōu yǒu bànfǎ kànhǎo nǐ de bìng.', vi: 'Ai cũng có cách chữa bệnh của bạn.' },
    { parts: ['为了', '健康', '我', '应该', '多', '锻炼', '锻炼'], pinyin: 'Wèile jiànkāng, wǒ yīnggāi duō duànliàn duànliàn.', vi: 'Vì sức khỏe tôi nên tập luyện nhiều.' },
    { parts: ['从', '明天', '起', '我', '决定', '每天', '去', '长跑'], pinyin: 'Cóng míngtiān qǐ, wǒ juédìng měi tiān qù chángpǎo.', vi: 'Từ ngày mai tôi quyết định mỗi ngày chạy bộ.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 为了 · B 请假 · C 后来 · D 爱好 · E 冬天. Gõ chữ cái A–E.',
      items: [
        { prompt: '老师，我不舒服，我想跟您（ ）。', answer: 'B', gloss: '请假' }, { prompt: '（ ）了解中国文化，我常常去旅行。', answer: 'A', gloss: '为了' },
        { prompt: '我以前在美国学习，（ ）来中国留学。', answer: 'C', gloss: '后来' }, { prompt: '我最喜欢的季节是（ ）。', answer: 'E', gloss: '冬天' },
        { prompt: '我的（ ）跟你的不一样，我更喜欢游泳。', answer: 'D', gloss: '爱好' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 一共 · B 饱 · C 邻居 · D 决定 · E 办法. Gõ chữ cái A–E.',
      items: [
        { prompt: '你认识那个人吗？ 认识，他是我的新（ ）。', answer: 'C', gloss: '邻居' }, { prompt: '这次HSK你考得怎么样？ 好极了，（ ）考了280分。', answer: 'A', gloss: '一共' },
        { prompt: '我的口语不太好，你帮我想想（ ）吧。 你最好多跟中国人聊聊天儿。', answer: 'E', gloss: '办法' }, { prompt: '吃（ ）了吗？ 当然了，你看我们点了这么多菜。', answer: 'B', gloss: '饱' },
        { prompt: '明年你打算回国吗？ 我还没（ ）呢。', answer: 'D', gloss: '决定' },
      ],
    },
    {
      title: 'Giáo trình 注释 · ABAB và đại từ nghi vấn (gõ phần còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: '我不太舒服，我想去医院（ ）。', answer: '检查检查', gloss: 'ABAB' },
        { prompt: '太累了，我们（ ）吧。', answer: '休息休息', gloss: 'ABAB' },
        { prompt: '房间不太干净，我们（ ）吧。', answer: '打扫打扫', gloss: 'ABAB' },
        { prompt: 'A: 你喜欢吃什么菜？ B: （ ）。', answer: '我什么菜都喜欢吃', gloss: '什么…都' },
        { prompt: 'A: 我们什么时候去看电影？ B: （ ）。', answer: '什么时候都可以', gloss: '什么时候…都' },
        { prompt: 'A: 我们星期天去哪儿玩儿？ B: （ ）。', answer: '我哪儿都不去', gloss: '哪儿…都' },
      ],
    },
    {
      title: 'Giáo trình 练习 3 · Hoàn thành đối thoại (gõ phần còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: 'A: 老师，您可以帮我（ ）口语吗？', answer: '练习练习', gloss: 'ABAB' },
        { prompt: 'A: （ ）都可以。', answer: '什么时候', gloss: '什么时候…都' },
        { prompt: 'A: 快考试了，你（ ）吧？', answer: '都复习了', gloss: 'ôn tập' },
        { prompt: 'A: 今天天气不错，我们出去（ ）吧。', answer: '锻炼锻炼', gloss: 'ABAB' },
        { prompt: 'B: 我们去哪个公园呢？ A: （ ）。', answer: '哪个公园都可以', gloss: '哪个…都' },
        { prompt: 'B: 我打算在家里（ ）。', answer: '打扫打扫房间', gloss: 'ABAB' },
      ],
    },
  ],
}
