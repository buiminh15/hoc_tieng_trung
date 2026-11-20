import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 3, Bài 12: 把重要的东西放在我这儿吧。 (sách trang 114–122).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách.
 * Nghe: 12-1…12-5. Bài tập: 热身/注释/练习 của giáo trình, đáp án theo "Đáp án giáo trình HSK 3" trang 24–25.
 */

const A = '/audio/hsk-std3/'

export const hskStd3Lesson12: Lesson = {
  id: 12,
  title: 'Để đồ quan trọng ở chỗ tôi đi',
  hanzi: '把重要的东西放在我这儿吧。',
  pinyin: 'Bǎ zhòngyào de dōngxi fàng zài wǒ zhèr ba.',
  vi: 'Để đồ quan trọng ở chỗ tôi đi',
  intro: 'Nói về việc sắp xếp, cất đồ và thói quen. Học 才 và 就 (phản ánh quan điểm người nói), câu chữ 把 (2) "A把B + động từ + 在/到/给 + ……".',

  dialogue: [
    { who: 'A', name: '小丽', hanzi: '今天太阳从西边出来了吗？', pinyin: 'Jīntiān tàiyáng cóng xībian chūlái le ma?', vi: 'Hôm nay mặt trời mọc ở đằng tây à?', scene: 'Hội thoại 1 · Ở nhà' },
    { who: 'B', name: '小刚', hanzi: '怎么了？', pinyin: 'Zěnme le?', vi: 'Sao thế?' },
    { who: 'A', name: '小丽', hanzi: '你怎么这么早就要睡觉了？以前都是12点以后才睡觉。', pinyin: 'Nǐ zěnme zhème zǎo jiù yào shuì jiào le? Yǐqián dōu shì shí\'èr diǎn yǐhòu cái shuì jiào.', vi: 'Sao anh đi ngủ sớm vậy? Trước đây toàn sau 12 giờ mới ngủ.' },
    { who: 'B', name: '小刚', hanzi: '我明天8点就要到公司。', pinyin: 'Wǒ míngtiān bā diǎn jiù yào dào gōngsī.', vi: 'Mai anh phải đến công ty lúc 8 giờ.' },
    { who: 'A', name: '小丽', hanzi: '有事吗？', pinyin: 'Yǒu shì ma?', vi: 'Có việc à?' },
    { who: 'B', name: '小刚', hanzi: '经理生气了，他告诉我，明天8点不到，以后就别来了。', pinyin: 'Jīnglǐ shēng qì le, tā gàosu wǒ, míngtiān bā diǎn bú dào, yǐhòu jiù bié lái le.', vi: 'Giám đốc giận rồi, ông bảo anh mai 8 giờ không có mặt thì sau này đừng đến nữa.' },
    { who: 'A', name: '小刚', hanzi: '我要跟周经理去外地办事，明天的飞机。', pinyin: 'Wǒ yào gēn Zhōu jīnglǐ qù wàidì bàn shì, míngtiān de fēijī.', vi: 'Anh phải cùng giám đốc Chu đi công tác tỉnh khác, mai bay.', scene: 'Hội thoại 2 · Ở nhà' },
    { who: 'B', name: '小丽', hanzi: '那我帮你把衣服放到行李箱里吧。什么时候回来？', pinyin: 'Nà wǒ bāng nǐ bǎ yīfu fàngdào xínglixiāng lǐ ba. Shénme shíhou huílai?', vi: 'Vậy em giúp anh bỏ quần áo vào vali nhé. Khi nào anh về?' },
    { who: 'A', name: '小刚', hanzi: '一个星期就回来。', pinyin: 'Yí ge xīngqī jiù huílai.', vi: 'Một tuần là về.' },
    { who: 'B', name: '小丽', hanzi: '啊？一个星期以后才回来？', pinyin: 'Á? Yí ge xīngqī yǐhòu cái huílai?', vi: 'Hả? Một tuần sau mới về à?' },
    { who: 'A', name: '小刚', hanzi: '你要自己照顾好自己，我已经给你准备好吃的和喝的了。', pinyin: 'Nǐ yào zìjǐ zhàogù hǎo zìjǐ, wǒ yǐjīng gěi nǐ zhǔnbèi hǎo chī de hé hē de le.', vi: 'Em phải tự chăm sóc bản thân nhé, anh đã chuẩn bị sẵn đồ ăn thức uống cho em rồi.' },
    { who: 'B', name: '小丽', hanzi: '好吧。我已经把我的照片放在你的包里了。', pinyin: 'Hǎo ba. Wǒ yǐjīng bǎ wǒ de zhàopiàn fàngzài nǐ de bāo lǐ le.', vi: 'Được rồi. Em đã bỏ ảnh của em vào túi anh rồi.' },
    { who: 'A', name: '周明', hanzi: '你怎么才来？', pinyin: 'Nǐ zěnme cái lái?', vi: 'Sao anh mới đến?', scene: 'Hội thoại 3 · Ở sân bay' },
    { who: 'B', name: '小刚', hanzi: '对不起，周经理，来机场的路上我才发现忘记带护照了。', pinyin: 'Duìbuqǐ, Zhōu jīnglǐ, lái jīchǎng de lùshang wǒ cái fāxiàn wàngjì dài hùzhào le.', vi: 'Xin lỗi giám đốc Chu, trên đường ra sân bay tôi mới phát hiện quên mang hộ chiếu.' },
    { who: 'A', name: '周明', hanzi: '快点吧，飞机就要起飞了。', pinyin: 'Kuài diǎn ba, fēijī jiù yào qǐfēi le.', vi: 'Nhanh lên, máy bay sắp cất cánh rồi.' },
    { who: 'B', name: '小刚', hanzi: '您有钱吗？司机把我送到机场的时候，我才发现忘记带钱包了。', pinyin: 'Nín yǒu qián ma? Sījī bǎ wǒ sòngdào jīchǎng de shíhou, wǒ cái fāxiàn wàngjì dài qiánbāo le.', vi: 'Ông có tiền không? Lúc tài xế đưa tôi đến sân bay tôi mới phát hiện quên mang ví.' },
    { who: 'A', name: '周明', hanzi: '我看你还是把重要的东西放在我这儿吧。', pinyin: 'Wǒ kàn nǐ háishi bǎ zhòngyào de dōngxi fàng zài wǒ zhèr ba.', vi: 'Tôi thấy anh nên để những thứ quan trọng ở chỗ tôi đi.' },
    { who: 'A', name: '短文', hanzi: '我是一个中学老师，教学生画画儿。每次下课前，我都会把下次学生需要带的东西写在黑板上，但是每次上课时，总会有学生忘了拿铅笔，所以我有点儿生气，不是因为他们没带铅笔，是因为他们没有好的学习习惯。', pinyin: 'Wǒ shì yí ge zhōngxué lǎoshī, jiāo xuésheng huà huàr. Měi cì xià kè qián, wǒ dōu huì bǎ xià cì xuésheng xūyào dài de dōngxi xiě zài hēibǎn shang, dànshì měi cì shàng kè shí, zǒng huì yǒu xuésheng wàngle ná qiānbǐ, suǒyǐ wǒ yǒudiǎnr shēng qì, bú shì yīnwèi tāmen méi dài qiānbǐ, shì yīnwèi tāmen méiyǒu hǎo de xuéxí xíguàn.', vi: 'Tôi là giáo viên cấp hai, dạy học sinh vẽ tranh. Mỗi lần trước khi tan lớp, tôi đều viết lên bảng những thứ lần sau học sinh cần mang, nhưng lần nào lên lớp cũng có học sinh quên bút chì, nên tôi hơi giận, không phải vì họ không mang bút chì, mà vì họ không có thói quen học tập tốt.', scene: 'Bài đọc 4 · Giáo viên mỹ thuật' },
  ],
  dialogueClips: [
    { label: '12-1 · Ở nhà', src: A + 'l12-1.mp3' },
    { label: '12-2 · Ở nhà', src: A + 'l12-2.mp3' },
    { label: '12-3 · Ở sân bay', src: A + 'l12-3.mp3' },
    { label: '12-4 · Giáo viên mỹ thuật', src: A + 'l12-4.mp3' },
  ],
  dialogueTip: '<b>就</b>: người nói thấy việc xảy ra sớm, nhanh, thuận lợi; <b>才</b>: thấy việc xảy ra muộn, chậm, không thuận lợi (八点上课，他九点才起床). <b>A把B + động từ + 在/到/给 + ……</b>: cho biết vị trí hay người nhận của B sau hành động (把书放在桌子上, 把花送给老师).',
  slowSay: '把重要的东西放在我这儿吧',

  vocab: [
    { hanzi: '太阳', pinyin: 'tàiyáng', pos: 'danh từ', meaning: 'mặt trời', han_viet: 'thái dương' },
    { hanzi: '西', pinyin: 'xī', pos: 'danh từ', meaning: 'phía tây, hướng tây', han_viet: 'tây' },
    { hanzi: '生气', pinyin: 'shēng qì', pos: 'động từ', meaning: 'giận, tức giận', han_viet: 'sinh khí' },
    { hanzi: '行李箱', pinyin: 'xínglixiāng', pos: 'danh từ', meaning: 'hành lý, vali', han_viet: 'hành lý tương' },
    { hanzi: '自己', pinyin: 'zìjǐ', pos: 'đại từ', meaning: 'tự mình, bản thân', han_viet: 'tự kỷ' },
    { hanzi: '包', pinyin: 'bāo', pos: 'danh từ', meaning: 'cặp, túi', han_viet: 'bao' },
    { hanzi: '发现', pinyin: 'fāxiàn', pos: 'động từ', meaning: 'phát hiện', han_viet: 'phát hiện' },
    { hanzi: '护照', pinyin: 'hùzhào', pos: 'danh từ', meaning: 'hộ chiếu', han_viet: 'hộ chiếu' },
    { hanzi: '起飞', pinyin: 'qǐfēi', pos: 'động từ', meaning: 'cất cánh (máy bay)', han_viet: 'khởi phi' },
    { hanzi: '司机', pinyin: 'sījī', pos: 'danh từ', meaning: 'tài xế', han_viet: 'tư cơ' },
    { hanzi: '教', pinyin: 'jiāo', pos: 'động từ', meaning: 'dạy', han_viet: 'giáo' },
    { hanzi: '画', pinyin: 'huà', pos: 'động từ/danh từ', meaning: 'vẽ; tranh', han_viet: 'họa' },
    { hanzi: '需要', pinyin: 'xūyào', pos: 'động từ', meaning: 'cần', han_viet: 'nhu yếu' },
    { hanzi: '黑板', pinyin: 'hēibǎn', pos: 'danh từ', meaning: 'bảng đen', han_viet: 'hắc bản' },
  ],

  sections: [
    {
      kind: 'examples', label: '才 và 就', title: '"才" và "就"',
      intro: '才 và 就 đều đặt trước động từ làm trạng ngữ. 就 diễn tả theo quan điểm người nói, hành động xảy ra sớm hoặc thực hiện nhanh chóng, thuận lợi. 才 diễn tả hành động xảy ra muộn hoặc thực hiện chậm trễ, không thuận lợi.',
      groups: [
        { label: '就 · sớm, nhanh, thuận lợi', items: [['我早上五点就起床了。', 'Wǒ zǎoshang wǔ diǎn jiù qǐ chuáng le.', 'Tôi năm giờ sáng đã dậy rồi.'], ['坐飞机一个小时就到了。', 'Zuò fēijī yí ge xiǎoshí jiù dào le.', 'Đi máy bay một tiếng là đến.'], ['我很容易就找到了他的家。', 'Wǒ hěn róngyì jiù zhǎodàole tā de jiā.', 'Tôi tìm được nhà anh ấy rất dễ dàng.'], ['你怎么这么早就要睡觉了？', 'Nǐ zěnme zhème zǎo jiù yào shuì jiào le?', 'Sao bạn đi ngủ sớm thế?']] },
        { label: '才 · muộn, chậm, không thuận lợi', items: [['八点上课，他九点才起床。', 'Bā diǎn shàng kè, tā jiǔ diǎn cái qǐ chuáng.', 'Tám giờ học, chín giờ anh ấy mới dậy.'], ['坐火车八个小时才能到。', 'Zuò huǒchē bā ge xiǎoshí cái néng dào.', 'Đi tàu hỏa tám tiếng mới đến.'], ['弟弟第三个小时才做完作业。', 'Dìdi dì-sān ge xiǎoshí cái zuò wán zuòyè.', 'Em trai ba tiếng sau mới làm xong bài tập.'], ['来机场的路上我才发现忘记带护照了。', 'Lái jīchǎng de lùshang wǒ cái fāxiàn wàngjì dài hùzhào le.', 'Trên đường ra sân bay tôi mới phát hiện quên mang hộ chiếu.']] },
      ],
    },
    {
      kind: 'examples', label: 'Câu chữ 把 (2)', title: 'Câu chữ 把: A把B + động từ + 在/到/给 + ……',
      intro: 'Biểu thị sự thay đổi vị trí của người hay vật chịu tác động: "A把B + động từ + 在/到 + vị trí". Biểu thị sự chuyển giao quan hệ sở hữu: "A把B + động từ + 给 + người nào đó".',
      groups: [
        { label: '在 / 到', items: [['我把照片放在你包里了。', 'Wǒ bǎ zhàopiàn fàngzài nǐ bāo lǐ le.', 'Tôi để ảnh vào túi bạn rồi.'], ['老师把作业放在桌子上了。', 'Lǎoshī bǎ zuòyè fàngzài zhuōzi shang le.', 'Cô giáo để bài tập lên bàn rồi.'], ['我没把裤子放到椅子上。', 'Wǒ méi bǎ kùzi fàngdào yǐzi shang.', 'Tôi không để quần lên ghế.'], ['我帮你把衣服放到行李箱里吧。', 'Wǒ bāng nǐ bǎ yīfu fàngdào xínglixiāng lǐ ba.', 'Tôi giúp bạn bỏ quần áo vào vali nhé.']] },
        { label: '给', items: [['我把鲜花送给老师了。', 'Wǒ bǎ xiānhuā sònggěi lǎoshī le.', 'Tôi tặng hoa cho cô giáo rồi.'], ['我朋友把书借给我了。', 'Wǒ péngyou bǎ shū jiègěi wǒ le.', 'Bạn tôi cho tôi mượn sách rồi.'], ['弟弟没把钱还给哥哥。', 'Dìdi méi bǎ qián huángěi gēge.', 'Em trai chưa trả tiền cho anh.'], ['你帮我把这本书带给小刚。', 'Nǐ bāng wǒ bǎ zhè běn shū dàigěi Xiǎogāng.', 'Bạn mang quyển sách này cho Tiểu Cương giúp tôi.']] },
      ],
    },
    {
      kind: 'examples', label: 'Đọc cụm từ', title: 'Đọc to các cụm từ và câu (练习 1)',
      clip: { label: '12-5 · Đọc to các cụm từ và câu', src: A + 'l12-5.mp3' },
      intro: 'Bấm để nghe từng cụm.',
      groups: [{ label: 'Cụm từ', items: [
        ['很生气', 'hěn shēng qì', 'rất giận'], ['不生气', 'bù shēng qì', 'không giận'], ['别生气了', 'bié shēng qì le', 'đừng giận nữa'],
        ['自己', 'zìjǐ', 'tự mình'], ['我自己去吧', 'wǒ zìjǐ qù ba', 'tôi tự đi nhé'], ['你要自己照顾好自己', 'nǐ yào zìjǐ zhàogù hǎo zìjǐ', 'em phải tự chăm sóc tốt bản thân'],
        ['一本护照', 'yì běn hùzhào', 'một quyển hộ chiếu'], ['办护照', 'bàn hùzhào', 'làm hộ chiếu'], ['来机场的路上我才发现忘记带护照了', 'lái jīchǎng de lùshang wǒ cái fāxiàn wàngjì dài hùzhào le', 'trên đường ra sân bay tôi mới phát hiện quên hộ chiếu'],
        ['教汉语', 'jiāo Hànyǔ', 'dạy tiếng Hán'], ['教了十年', 'jiāole shí nián', 'đã dạy mười năm'], ['我教学生画画儿', 'wǒ jiāo xuésheng huà huàr', 'tôi dạy học sinh vẽ tranh'],
        ['不需要', 'bù xūyào', 'không cần'], ['需要休息', 'xūyào xiūxi', 'cần nghỉ ngơi'], ['我把需要带的东西写在黑板上', 'wǒ bǎ xūyào dài de dōngxi xiě zài hēibǎn shang', 'tôi viết những thứ cần mang lên bảng'],
      ] }],
    },
  ],

  notes: [
    {
      title: '"才" và "就"',
      body: '就: người nói cho rằng hành động xảy ra sớm, nhanh, thuận lợi (我早上五点就起床了)。才: người nói cho rằng hành động xảy ra muộn, chậm, không thuận lợi (八点上课，他九点才起床)。',
      say: '八点上课，他九点才起床',
    },
    {
      title: 'Câu chữ 把 (2): 在 / 到 / 给',
      body: 'A把B + động từ + 在/到/给 + ……. 在/到 + vị trí: sự thay đổi vị trí của B (我把书放在桌子上). 给 + người: sự chuyển giao sở hữu (我把鲜花送给老师了). Chữ 把 dùng khi B xác định.',
      say: '我把照片放在你的包里了',
    },
    {
      title: 'Cách thành lập từ mới (旧字新词)',
      body: '钱 + 包 = 钱包 (ví); 电子邮件 + 行李箱 = 电子邮箱 (hộp thư điện tử); 行李箱 + 杯子 = 箱子 (cái vali/thùng) — đoán nghĩa từ mới từ các chữ đã học.',
      say: '钱包',
    },
    {
      title: 'Tục ngữ: 习惯成自然',
      body: 'Việc đã quen làm trở thành việc tự nhiên. "成" nghĩa là trở thành. Khi đã quen với cách thức làm việc gì thì dần dần việc ấy trở thành tự nhiên và rất khó thay đổi. Lời khuyên: hãy tập những thói quen tốt; thói quen xấu nếu không chú ý sẽ dần thành tự nhiên và đến lúc đó khó nhận ra cũng như khó thay đổi.',
      say: '习惯成自然',
    },
  ],

  writeChars: ['太', '阳', '护', '照', '包', '画', '需', '黑'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 4)',
      items: [
        { q: '小刚平时几点睡觉？今天呢？', hint: '小刚平时12点以后才睡觉，今天很早就睡觉了。' },
        { q: '小刚什么时候出差回来？', hint: '小刚一个星期以后回来。' },
        { q: '小刚给小丽准备了什么？小丽呢？', hint: '小刚给小丽准备了吃的和喝的，小丽把她的照片放在小刚的包里了。' },
        { q: '小刚今天忘带什么了？', hint: '小刚今天忘带护照和钱包了。' },
        { q: '每次下课以前，老师会做什么？', hint: '老师会把下次学生需要带的东西写在黑板上。' },
        { q: '老师为什么有点儿生气？', hint: '因为学生没有好的学习习惯。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: 起床, 到教室, 学汉语, 睡觉, 做完作业, 吃晚饭 — so sánh với bạn', hint: 'Mẫu: 我每天早上6点就起床。/ 我每天早上8点才起床。' },
        { q: 'Theo nhóm: 用“把”字句说说每个人平时把日常用品放在哪儿', hint: 'Mẫu: 我把电脑放在桌子上。' },
      ],
    },
  ],

  sentences: [
    { parts: ['你', '怎么', '这么', '早', '就', '要', '睡觉', '了'], pinyin: 'Nǐ zěnme zhème zǎo jiù yào shuì jiào le?', vi: 'Sao bạn đi ngủ sớm thế?' },
    { parts: ['以前', '都', '是', '12', '点', '以后', '才', '睡觉'], pinyin: 'Yǐqián dōu shì shí\'èr diǎn yǐhòu cái shuì jiào.', vi: 'Trước đây đều sau 12 giờ mới ngủ.' },
    { parts: ['我', '帮', '你', '把', '衣服', '放', '到', '行李箱', '里'], pinyin: 'Wǒ bāng nǐ bǎ yīfu fàngdào xínglixiāng lǐ.', vi: 'Tôi giúp bạn bỏ quần áo vào vali.' },
    { parts: ['我', '已经', '把', '照片', '放', '在', '你', '的', '包', '里', '了'], pinyin: 'Wǒ yǐjīng bǎ zhàopiàn fàngzài nǐ de bāo lǐ le.', vi: 'Em đã để ảnh vào túi anh rồi.' },
    { parts: ['飞机', '就', '要', '起飞', '了'], pinyin: 'Fēijī jiù yào qǐfēi le.', vi: 'Máy bay sắp cất cánh rồi.' },
    { parts: ['把', '重要', '的', '东西', '放', '在', '我', '这儿', '吧'], pinyin: 'Bǎ zhòngyào de dōngxi fàng zài wǒ zhèr ba.', vi: 'Để đồ quan trọng ở chỗ tôi đi.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 黑板 · B 司机 · C 画 · D 包 · E 护照. Gõ chữ cái A–E.',
      items: [
        { prompt: '这张（ ）真漂亮！是你的吗？', answer: 'C', gloss: '画' }, { prompt: '教室后边的那块（ ）上写着几个字，你看得见吗？', answer: 'A', gloss: '黑板' },
        { prompt: '你看，就是那位（ ）找到了我的手机。', answer: 'B', gloss: '司机' }, { prompt: '桌子上有一本（ ），是谁的？', answer: 'E', gloss: '护照' },
        { prompt: '请问，这个小（ ）能带上飞机吗？', answer: 'D', gloss: '包' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 发现 · B 生气 · C 自己 · D 行李箱 · E 起飞. Gõ chữ cái A–E.',
      items: [
        { prompt: '我现在能去一下洗手间吗？ 对不起，飞机就要（ ）了，请您坐好。', answer: 'E', gloss: '起飞' }, { prompt: '你怎么了？ 今天我又迟到了，老师都（ ）了。', answer: 'B', gloss: '生气' },
        { prompt: '我（ ）公司楼下那家店的蛋糕特别好吃。 是吗？今天我也去买一块。', answer: 'A', gloss: '发现' }, { prompt: '我的衣服太多了！ 你把衣服放在我的（ ）里吧，我的箱子大。', answer: 'D', gloss: '行李箱' },
        { prompt: '我出国一个星期，你怎么办？ 不用担心，我可以照顾好（ ）。', answer: 'C', gloss: '自己' },
      ],
    },
    {
      title: 'Giáo trình 注释 · 才 / 就 (gõ phần còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: 'A: 你昨天几点回家的？ B: （ ）。', answer: '我昨天六点就回家了', gloss: '就' },
        { prompt: 'A: 昨天的作业你多长时间写完的？ B: （ ）。', answer: '我写了两个小时才能写完', gloss: '才' },
        { prompt: 'A: 你昨天睡了几个小时？ B: （ ）。', answer: '我昨天才睡了四个小时', gloss: '才' },
      ],
    },
    {
      title: 'Giáo trình 注释 · Câu chữ 把 (gõ phần còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: '我把书（ ）。 (动词在)', answer: '放在桌子上', gloss: '把 + 在' },
        { prompt: '司机把我（ ）。 (动词到)', answer: '送到机场去', gloss: '把 + 到' },
        { prompt: '我想把这些吃的（ ）。 (动词给)', answer: '送给朋友', gloss: '把 + 给' },
      ],
    },
    {
      title: 'Giáo trình 练习 3 · Hoàn thành đối thoại (gõ phần còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: 'A: 你怎么不上飞机？ B: 我（ ）发现忘了带护照了。', answer: '才', gloss: '才' },
        { prompt: 'A: 那怎么办？ B: 我让妈妈把（ ）。', answer: '护照送到机场', gloss: '把 + 到' },
        { prompt: 'A: 你的车呢？ B: 我把（ ）。', answer: '车借给朋友了', gloss: '把 + 给' },
        { prompt: 'A: 9点半了，你怎么（ ）来？ B: 起晚了，还等了半天公共汽车。', answer: '才', gloss: '才' },
        { prompt: 'A: 你带我们去游泳吧。 B: 好，我一会儿就把（ ）游泳馆。', answer: '你们送到', gloss: '把 + 到' },
        { prompt: 'A: 那我先起来了。我的眼镜呢？ B: 昨天晚上我把（ ）。', answer: '眼镜放在电脑旁边了', gloss: '把 + 在' },
      ],
    },
  ],
}
