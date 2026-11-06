import type { Lesson } from './types'

const T = '老师 lǎoshī'
const M = '玛丽 Mǎlì'
const K = '麦克 Màikè'
const L = '罗兰 Luólán'
const Z = '田中 Tiánzhōng'

/** Quyển 2, Bài 22. */
export const lesson22: Lesson = {
  id: 22,
  title: 'Tôi định nhờ thầy dạy tôi kinh kịch',
  hanzi: '我打算请老师教我京剧',
  pinyin: 'Wǒ dǎsuan qǐng lǎoshī jiāo wǒ jīngjù',
  vi: 'Tôi định nhờ thầy dạy tôi kinh kịch',
  intro: 'Nói về sở thích; câu kiêm ngữ (请 / 叫 / 让 + người + làm gì); 对…感兴趣; 以前 và 以后; biến âm của 啊; trọng âm trong câu kiêm ngữ.',
  dialogue: [
    { who: 'A', name: T, scene: '(课上 – Trong giờ học, thầy Vương bảo các bạn nói về sở thích của mình)', hanzi: '今天想请大家谈谈自己的爱好。谁先说？', pinyin: 'Jīntiān xiǎng qǐng dàjiā tántan zìjǐ de àihào. Shéi xiān shuō?', vi: 'Hôm nay muốn mời cả lớp nói về sở thích của mình. Ai nói trước?' },
    { who: 'B', name: M, hanzi: '老师，让我先说吧。', pinyin: 'Lǎoshī, ràng wǒ xiān shuō ba.', vi: 'Thưa thầy, để em nói trước ạ.' },
    { who: 'A', name: T, hanzi: '好，你说吧。你有什么爱好？', pinyin: 'Hǎo, nǐ shuō ba. Nǐ yǒu shénme àihào?', vi: 'Được, em nói đi. Em có sở thích gì?' },
    { who: 'B', name: M, hanzi: '我的爱好是看京剧。', pinyin: 'Wǒ de àihào shì kàn jīngjù.', vi: 'Sở thích của em là xem kinh kịch.' },
    { who: 'A', name: T, hanzi: '你喜欢看京剧？', pinyin: 'Nǐ xǐhuan kàn jīngjù?', vi: 'Em thích xem kinh kịch à?' },
    { who: 'B', name: M, hanzi: '是啊，非常喜欢。我还想学唱京剧，打算请一个老师教我。', pinyin: 'Shì a, fēicháng xǐhuan. Wǒ hái xiǎng xué chàng jīngjù, dǎsuan qǐng yí ge lǎoshī jiāo wǒ.', vi: 'Vâng, em rất thích. Em còn muốn học hát kinh kịch, định mời một thầy dạy em.' },
    { who: 'A', name: T, hanzi: '麦克，你喜欢做什么？', pinyin: 'Màikè, nǐ xǐhuan zuò shénme?', vi: 'Mike, em thích làm gì?' },
    { who: 'B', name: K, hanzi: '我喜欢玩电脑。', pinyin: 'Wǒ xǐhuan wán diànnǎo.', vi: 'Em thích chơi máy tính.' },
    { who: 'A', name: T, hanzi: '罗兰呢？', pinyin: 'Luólán ne?', vi: 'Còn La Lan?' },
    { who: 'B', name: L, hanzi: '我喜欢听音乐，下课以后，听听音乐或者跟朋友聊聊天儿，感到心情很愉快。', pinyin: 'Wǒ xǐhuan tīng yīnyuè, xià kè yǐhòu, tīngting yīnyuè huòzhě gēn péngyou liáoliao tiānr, gǎndào xīnqíng hěn yúkuài.', vi: 'Em thích nghe nhạc. Sau giờ học, nghe nhạc hoặc trò chuyện với bạn bè, em cảm thấy tâm trạng rất vui.' },
    { who: 'A', name: T, hanzi: '田中，业余时间常常做什么？', pinyin: 'Tiánzhōng, yèyú shíjiān chángcháng zuò shénme?', vi: 'Tanaka, lúc rảnh em thường làm gì?' },
    { who: 'B', name: Z, hanzi: '我来中国以前就对书法特别感兴趣。', pinyin: 'Wǒ lái Zhōngguó yǐqián jiù duì shūfǎ tèbié gǎn xìngqù.', vi: 'Trước khi đến Trung Quốc em đã đặc biệt hứng thú với thư pháp.' },
    { who: 'B', name: Z, hanzi: '今年公司派我来中国，我非常高兴。', pinyin: 'Jīnnián gōngsī pài wǒ lái Zhōngguó, wǒ fēicháng gāoxìng.', vi: 'Năm nay công ty cử em sang Trung Quốc, em rất vui.' },
    { who: 'B', name: Z, hanzi: '现在我正跟一个老师学书法，还学画中国画儿。', pinyin: 'Xiànzài wǒ zhèng gēn yí ge lǎoshī xué shūfǎ, hái xué huà Zhōngguó huàr.', vi: 'Bây giờ em đang theo một thầy học thư pháp, còn học vẽ tranh Trung Quốc.' },
  ],
  dialogueTip: 'Câu kiêm ngữ: <b>请/叫/让 + người + làm gì</b> (请老师教我京剧, 让我先说). <b>对 + việc + 感兴趣</b> = hứng thú với (对书法感兴趣). <b>是啊</b> = vâng/đúng thế. <b>以前 / 以后</b> đứng một mình hoặc sau cụm từ (来中国以前, 下课以后).',
  slowSay: '我打算请老师教我京剧',
  vocab: [
    { hanzi: '叫', pinyin: 'jiào', pos: 'động từ', meaning: 'gọi; bảo, sai bảo', han_viet: 'khiếu' },
    { hanzi: '让', pinyin: 'ràng', pos: 'động từ', meaning: 'để cho, bảo (ai làm gì)', han_viet: 'nhượng' },
    { hanzi: '大家', pinyin: 'dàjiā', pos: 'đại từ', meaning: 'mọi người, cả lớp', han_viet: 'đại gia' },
    { hanzi: '谈', pinyin: 'tán', pos: 'động từ', meaning: 'nói chuyện, bàn', han_viet: 'đàm' },
    { hanzi: '自己', pinyin: 'zìjǐ', pos: 'đại từ', meaning: 'tự mình, bản thân', han_viet: 'tự kỷ' },
    { hanzi: '爱好', pinyin: 'àihào', pos: 'danh/động từ', meaning: 'sở thích; thích', han_viet: 'ái hiếu' },
    { hanzi: '京剧', pinyin: 'jīngjù', pos: 'danh từ', meaning: 'kinh kịch (Bắc Kinh)', han_viet: 'kinh kịch' },
    { hanzi: '喜欢', pinyin: 'xǐhuan', pos: 'động từ', meaning: 'thích', han_viet: 'hỉ hoan' },
    { hanzi: '非常', pinyin: 'fēicháng', pos: 'phó từ', meaning: 'rất, vô cùng', han_viet: 'phi thường' },
    { hanzi: '唱', pinyin: 'chàng', pos: 'động từ', meaning: 'hát', han_viet: 'xướng' },
    { hanzi: '玩', pinyin: 'wán', pos: 'động từ', meaning: 'chơi', han_viet: 'ngoạn' },
    { hanzi: '电脑', pinyin: 'diànnǎo', pos: 'danh từ', meaning: 'máy tính', han_viet: 'điện não' },
    { hanzi: '下课', pinyin: 'xià kè', pos: 'động từ', meaning: 'tan học', han_viet: 'hạ khóa' },
    { hanzi: '感到', pinyin: 'gǎndào', pos: 'động từ', meaning: 'cảm thấy', han_viet: 'cảm đáo' },
    { hanzi: '心情', pinyin: 'xīnqíng', pos: 'danh từ', meaning: 'tâm trạng', han_viet: 'tâm tình' },
    { hanzi: '愉快', pinyin: 'yúkuài', pos: 'tính từ', meaning: 'vui vẻ', han_viet: 'du khoái' },
    { hanzi: '业余', pinyin: 'yèyú', pos: 'danh từ', meaning: 'lúc rảnh, ngoài giờ', han_viet: 'nghiệp dư' },
    { hanzi: '以前', pinyin: 'yǐqián', pos: 'danh từ', meaning: 'trước đây, trước khi', han_viet: 'dĩ tiền' },
    { hanzi: '就', pinyin: 'jiù', pos: 'phó từ', meaning: 'đã (từ sớm)', han_viet: 'tựu' },
    { hanzi: '对', pinyin: 'duì', pos: 'giới từ', meaning: 'đối với', han_viet: 'đối' },
    { hanzi: '书法', pinyin: 'shūfǎ', pos: 'danh từ', meaning: 'thư pháp', han_viet: 'thư pháp' },
    { hanzi: '特别', pinyin: 'tèbié', pos: 'phó từ', meaning: 'đặc biệt', han_viet: 'đặc biệt' },
    { hanzi: '感兴趣', pinyin: 'gǎn xìngqù', pos: 'cụm', meaning: 'hứng thú, quan tâm', han_viet: 'cảm hứng thú' },
    { hanzi: '兴趣', pinyin: 'xìngqù', pos: 'danh từ', meaning: 'hứng thú', han_viet: 'hứng thú' },
    { hanzi: '派', pinyin: 'pài', pos: 'động từ', meaning: 'cử, phái', han_viet: 'phái' },
    { hanzi: '高兴', pinyin: 'gāoxìng', pos: 'tính từ', meaning: 'vui, mừng', han_viet: 'cao hứng' },
    { hanzi: '画', pinyin: 'huà', pos: 'động từ', meaning: 'vẽ', han_viet: 'họa' },
    { hanzi: '画儿', pinyin: 'huàr', pos: 'danh từ', meaning: 'bức tranh', han_viet: 'họa nhi' },
    { hanzi: '田中', pinyin: 'Tiánzhōng', pos: 'tên riêng', meaning: 'Điền Trung/Tanaka (tên người Nhật)', han_viet: 'Điền Trung' },
  ],
  sections: [
    {
      kind: 'examples', label: 'Trọng âm câu kiêm ngữ', title: 'Trọng âm trong câu kiêm ngữ (兼语句的句重音)',
      intro: 'Trong cấu trúc "kiêm ngữ + động từ", động từ được nhấn. Trong cấu trúc "kiêm ngữ + động từ + tân ngữ", tân ngữ được nhấn. Dấu ’ đặt trước phần được nhấn.',
      groups: [
        { label: 'Kiêm ngữ + động từ: nhấn động từ', items: [['请你’回答。', 'qǐng nǐ ’huídá', 'nhấn: huídá'], ['请你’参加。', 'qǐng nǐ ’cānjiā', 'nhấn: cānjiā']] },
        { label: 'Kiêm ngữ + động từ + tân ngữ: nhấn tân ngữ', items: [['公司派我来’中国。', 'gōngsī pài wǒ lái ’Zhōngguó', 'nhấn: Zhōngguó'], ['请老师教’书法。', 'qǐng lǎoshī jiāo ’shūfǎ', 'nhấn: shūfǎ']] },
      ],
    },
  ],
  notes: [
    {
      title: '你喜欢看京剧? 是啊: biến âm của 啊',
      body: '是啊 biểu thị ngữ khí khẳng định. 啊 có thể đổi âm do âm cuối của âm tiết đứng trước: (1) sau a, e, i, o, ü thì đọc ya, có thể viết 呀; (2) sau u, ou, ao thì đọc wa, có thể viết 哇; (3) sau n thì đọc na, có thể viết 哪; (4) sau ng thì đọc nga. Khi viết có thể viết hết thành 啊.',
      say: '是啊',
    },
    {
      title: '以前 và 以后',
      body: '以前, 以后 có thể dùng một mình: 以前我是公司职员，现在是留学生。现在他是学生，以后想当老师。Cũng có thể đứng sau một cụm từ làm trạng ngữ thời gian: 来中国以前我是公司职员。我一个星期以后回来。',
      say: '来中国以前我是公司职员',
    },
    {
      title: 'Giới từ 对: 我对书法感兴趣',
      body: 'Cụm giới từ "对 + danh từ" làm trạng ngữ, chỉ đối tượng của hành động. 我对书法感兴趣 (tôi hứng thú với thư pháp). 她对这件事不感兴趣. Không nói *我感兴趣书法.',
      say: '我对书法感兴趣',
    },
    {
      title: 'Câu kiêm ngữ (兼语句)',
      body: 'Câu diễn đạt ý "bảo, mời ai làm việc gì". Vị ngữ gồm hai cụm động từ - tân ngữ; tân ngữ của động từ thứ nhất đồng thời là chủ ngữ của động từ thứ hai. Động từ thứ nhất thường là động từ sai khiến như 请, 叫, 让. Trật tự: chủ ngữ + động từ sai khiến (叫/让/请) + kiêm ngữ + động từ + tân ngữ. Ví dụ: 请你们谈谈自己的爱好。老师叫大家回答问题。公司派他来中国。我想请一个老师教我书法。',
      say: '老师叫大家回答问题',
    },
    {
      title: 'Hỏi sở thích và thể hiện hứng thú',
      body: 'Hỏi: 你有什么爱好? 业余时间你常常做什么? 你对什么感兴趣? Đáp: 我的爱好是看京剧。我喜欢玩电脑。我对书法感兴趣。',
      say: '你对什么感兴趣',
    },
    {
      title: 'Phân biệt 还是 và 或者 (ôn)',
      body: '还是 dùng trong câu hỏi lựa chọn (你喝茶还是喝咖啡?). 或者 dùng trong câu trần thuật (我预习生词或者复习课文). Đây là bài tập chọn từ trong phần luyện tập của bài.',
      say: '我预习生词或者复习课文',
    },
    {
      title: 'Trọng âm trong câu kiêm ngữ',
      body: 'Kiêm ngữ + động từ: nhấn động từ (请你’回答). Kiêm ngữ + động từ + tân ngữ: nhấn tân ngữ (公司派我来’中国, 请老师教’书法).',
      say: '请老师教书法',
    },
    {
      title: 'Sở thích và từ tương quan',
      body: '爱好: 京剧, 音乐, 体育, 运动. Hoạt động: 看京剧 (xem kinh kịch), 听音乐 (nghe nhạc), 玩电脑 (chơi máy tính), 练书法 (tập thư pháp), 画画儿 (vẽ tranh), 唱歌 (hát). Từ mức độ: 非常, 特别, 比较, 很.',
      say: '我非常喜欢京剧',
    },
  ],
  sentences: [
    { parts: ['今天', '想', '请', '大家', '谈谈', '自己', '的', '爱好'], pinyin: 'Jīntiān xiǎng qǐng dàjiā tántan zìjǐ de àihào.', vi: 'Hôm nay muốn mời cả lớp nói về sở thích của mình.' },
    { parts: ['老师', '让', '我', '先', '说', '吧'], pinyin: 'Lǎoshī, ràng wǒ xiān shuō ba.', vi: 'Thưa thầy, để em nói trước ạ.' },
    { parts: ['你', '有', '什么', '爱好'], pinyin: 'Nǐ yǒu shénme àihào?', vi: 'Em có sở thích gì?' },
    { parts: ['我', '的', '爱好', '是', '看', '京剧'], pinyin: 'Wǒ de àihào shì kàn jīngjù.', vi: 'Sở thích của em là xem kinh kịch.' },
    { parts: ['我', '还', '想', '学', '唱', '京剧'], pinyin: 'Wǒ hái xiǎng xué chàng jīngjù.', vi: 'Em còn muốn học hát kinh kịch.' },
    { parts: ['打算', '请', '一', '个', '老师', '教', '我'], pinyin: 'Dǎsuan qǐng yí ge lǎoshī jiāo wǒ.', vi: 'Định mời một thầy dạy em.' },
    { parts: ['我', '喜欢', '玩', '电脑'], pinyin: 'Wǒ xǐhuan wán diànnǎo.', vi: 'Em thích chơi máy tính.' },
    { parts: ['我', '喜欢', '听', '音乐'], pinyin: 'Wǒ xǐhuan tīng yīnyuè.', vi: 'Em thích nghe nhạc.' },
    { parts: ['业余', '时间', '你', '常常', '做', '什么'], pinyin: 'Yèyú shíjiān nǐ chángcháng zuò shénme?', vi: 'Lúc rảnh bạn thường làm gì?' },
    { parts: ['我', '对', '书法', '感', '兴趣'], pinyin: 'Wǒ duì shūfǎ gǎn xìngqù.', vi: 'Tôi hứng thú với thư pháp.' },
    { parts: ['今年', '公司', '派', '我', '来', '中国'], pinyin: 'Jīnnián gōngsī pài wǒ lái Zhōngguó.', vi: 'Năm nay công ty cử tôi sang Trung Quốc.' },
    { parts: ['现在', '我', '正', '跟', '一', '个', '老师', '学', '书法'], pinyin: 'Xiànzài wǒ zhèng gēn yí ge lǎoshī xué shūfǎ.', vi: 'Bây giờ tôi đang theo một thầy học thư pháp.' },
    { parts: ['来', '中国', '以前', '我', '是', '公司', '职员'], pinyin: 'Lái Zhōngguó yǐqián wǒ shì gōngsī zhíyuán.', vi: 'Trước khi đến Trung Quốc tôi là nhân viên công ty.' },
    { parts: ['我', '一', '个', '星期', '以后', '回来'], pinyin: 'Wǒ yí ge xīngqī yǐhòu huílai.', vi: 'Một tuần sau tôi quay về.' },
    { parts: ['老师', '叫', '大家', '回答', '问题'], pinyin: 'Lǎoshī jiào dàjiā huídá wèntí.', vi: 'Thầy bảo cả lớp trả lời câu hỏi.' },
    { parts: ['请', '你们', '谈谈', '自己', '的', '爱好'], pinyin: 'Qǐng nǐmen tántan zìjǐ de àihào.', vi: 'Mời các bạn nói về sở thích của mình.' },
  ],
  writeChars: ['己', '爱', '非', '特', '让', '谈', '喜', '剧', '高', '感', '兴', '趣', '地', '派', '余'],
  drills: [
    {
      title: 'Phân biệt âm và thanh điệu', hint: 'Đọc từng cặp, chú ý thanh điệu và âm đầu.',
      items: [
        { h: '自己', p: 'zìjǐ' }, { h: '之际', p: 'zhījì' }, { h: '京剧', p: 'jīngjù' }, { h: '经济', p: 'jīngjì' },
        { h: '业余', p: 'yèyú' }, { h: '也许', p: 'yěxǔ' }, { h: '非常', p: 'fēicháng' }, { h: '赔偿', p: 'péicháng' },
        { h: '兴趣', p: 'xìngqù' }, { h: '星期', p: 'xīngqī' }, { h: '以前', p: 'yǐqián' }, { h: '一年', p: 'yì nián' },
      ],
    },
    {
      title: 'Đọc liền nhiều âm tiết (多音节连读): 不…', hint: 'Chú ý bù / bú trước thanh 4.',
      items: [
        { h: '不懂外语', p: 'bù dǒng wàiyǔ' }, { h: '不必客气', p: 'bú bì kèqi' }, { h: '不要旷课', p: 'bú yào kuàng kè' },
        { h: '不怕困难', p: 'bú pà kùnnan' }, { h: '不难学会', p: 'bù nán xuéhuì' }, { h: '不要后退', p: 'bú yào hòutuì' },
      ],
    },
    {
      title: 'Đọc to các cụm từ (朗读): 啊 biến âm', hint: 'Chú ý cách đọc 啊 theo âm đứng trước.',
      items: [
        { h: '来啊', p: 'lái a' }, { h: '去啊', p: 'qù a' }, { h: '跑啊', p: 'pǎo a' }, { h: '走啊', p: 'zǒu a' },
        { h: '好啊', p: 'hǎo a' }, { h: '是啊', p: 'shì a' }, { h: '看啊', p: 'kàn a' }, { h: '想啊', p: 'xiǎng a' },
      ],
    },
    {
      title: 'Đọc to các cụm từ (朗读): 喜欢, 爱好, 以前/以后, 对…感兴趣, 请/派/让', hint: 'Các cụm cốt lõi của bài.',
      items: [
        { h: '喜欢汉语', p: 'xǐhuan Hànyǔ' }, { h: '喜欢音乐', p: 'xǐhuan yīnyuè' }, { h: '喜欢学习', p: 'xǐhuan xuéxí' }, { h: '喜欢看电视', p: 'xǐhuan kàn diànshì' },
        { h: '爱好京剧', p: 'àihào jīngjù' }, { h: '爱好音乐', p: 'àihào yīnyuè' }, { h: '爱好体育', p: 'àihào tǐyù' }, { h: '爱好运动', p: 'àihào yùndòng' },
        { h: '上课以前', p: 'shàng kè yǐqián' }, { h: '睡觉以前', p: 'shuì jiào yǐqián' }, { h: '下课以后', p: 'xià kè yǐhòu' }, { h: '回家以后', p: 'huí jiā yǐhòu' },
        { h: '对玩电脑感兴趣', p: 'duì wán diànnǎo gǎn xìngqù' }, { h: '对京剧感兴趣', p: 'duì jīngjù gǎn xìngqù' }, { h: '对这个不感兴趣', p: 'duì zhège bù gǎn xìngqù' },
        { h: '请你说', p: 'qǐng nǐ shuō' }, { h: '请大家看', p: 'qǐng dàjiā kàn' }, { h: '请你们读', p: 'qǐng nǐmen dú' },
        { h: '派我来中国', p: 'pài wǒ lái Zhōngguó' }, { h: '派他去上海', p: 'pài tā qù Shànghǎi' }, { h: '让我们谈爱好', p: 'ràng wǒmen tán àihào' },
        { h: '请老师教书法', p: 'qǐng lǎoshī jiāo shūfǎ' }, { h: '请老师教英语', p: 'qǐng lǎoshī jiāo Yīngyǔ' }, { h: '请老师教京剧', p: 'qǐng lǎoshī jiāo jīngjù' },
      ],
    },
    {
      title: 'Từ bổ sung (补充生词)', hint: 'Dùng để thay thế trong các mẫu câu.',
      items: [
        { h: '歌', p: 'gē', m: 'bài hát' }, { h: '太极拳', p: 'tàijíquán', m: 'thái cực quyền' }, { h: '足球', p: 'zúqiú', m: 'bóng đá' },
        { h: '比赛', p: 'bǐsài', m: 'trận đấu' }, { h: '网球', p: 'wǎngqiú', m: 'quần vợt' }, { h: '武术', p: 'wǔshù', m: 'võ thuật' },
        { h: '惊讶', p: 'jīngyà', m: 'ngạc nhiên' }, { h: '老外', p: 'lǎowài', m: 'người nước ngoài (khẩu ngữ)' }, { h: '笔记本', p: 'bǐjìběn', m: 'sổ tay; laptop' },
        { h: '希望', p: 'xīwàng', m: 'hy vọng' }, { h: '演出', p: 'yǎnchū', m: 'biểu diễn' },
      ],
    },
    {
      title: 'Thay thế: 你请老师教什么? 我请老师教京剧', hint: 'Thay môn học.',
      items: [
        { h: '汉语', p: 'Hànyǔ' }, { h: '英语', p: 'Yīngyǔ' }, { h: '电脑', p: 'diànnǎo' }, { h: '书法', p: 'shūfǎ' }, { h: '语法', p: 'yǔfǎ' }, { h: '画画儿', p: 'huà huàr' },
      ],
    },
    {
      title: 'Thay thế: 公司派他做什么? 公司派他去中国学习汉语', hint: 'Thay chủ thể và hành động: 让 / 请.',
      items: [
        { h: '老师让我回答问题。', p: 'Lǎoshī ràng wǒ huídá wèntí.' }, { h: '他让我帮他借书。', p: 'Tā ràng wǒ bāng tā jiè shū.' }, { h: '她让我帮她买邮票。', p: 'Tā ràng wǒ bāng tā mǎi yóupiào.' },
        { h: '他请我教京剧。', p: 'Tā qǐng wǒ jiāo jīngjù.' }, { h: '他请我喝咖啡。', p: 'Tā qǐng wǒ hē kāfēi.' }, { h: '她请我跳舞。', p: 'Tā qǐng wǒ tiào wǔ.' },
      ],
    },
    {
      title: 'Thay thế: 你有什么爱好? 我喜欢看京剧', hint: 'Thay sở thích.',
      items: [
        { h: '练书法', p: 'liàn shūfǎ' }, { h: '听音乐', p: 'tīng yīnyuè' }, { h: '看电视', p: 'kàn diànshì' },
        { h: '唱中文歌', p: 'chàng Zhōngwén gē' }, { h: '看足球比赛', p: 'kàn zúqiú bǐsài' }, { h: '爬山', p: 'pá shān' },
      ],
    },
    {
      title: 'Thay thế: 你对什么感兴趣? 我对书法感兴趣', hint: 'Thay đối tượng quan tâm.',
      items: [
        { h: '太极拳', p: 'tàijíquán' }, { h: '京剧', p: 'jīngjù' }, { h: '武术', p: 'wǔshù' }, { h: '中国画', p: 'Zhōngguó huà' }, { h: '上网', p: 'shàng wǎng' }, { h: '玩电脑', p: 'wán diànnǎo' },
      ],
    },
    {
      title: 'Thực hành nói (成段表达): Nhật ký của Mary', hint: 'Từ bổ sung: 惊讶, 老外, 笔记本, 希望, 演出. Đọc to cả nhật ký.',
      items: [
        { h: '十月八日 星期三 晴。今天上课的时候，老师让我们谈谈自己的爱好。老师让我先说。我说我非常喜欢看京剧。老师感到很惊讶。她问：“你喜欢看京剧？”我说我非常喜欢。我知道，在中国，有不少年轻人不喜欢看京剧。我这个“老外”这么喜欢看京剧，老师当然感到很惊讶。', p: 'Shí yuè bā rì, xīngqīsān, qíng. Jīntiān shàng kè de shíhou, lǎoshī ràng wǒmen tántan zìjǐ de àihào. Lǎoshī ràng wǒ xiān shuō. Wǒ shuō wǒ fēicháng xǐhuan kàn jīngjù. Lǎoshī gǎndào hěn jīngyà. Tā wèn: “Nǐ xǐhuan kàn jīngjù?” Wǒ shuō wǒ fēicháng xǐhuan. Wǒ zhīdào, zài Zhōngguó, yǒu bù shǎo niánqīngrén bù xǐhuan kàn jīngjù. Wǒ zhè ge “lǎowài” zhème xǐhuan kàn jīngjù, lǎoshī dāngrán gǎndào hěn jīngyà.' },
        { h: '我们班的同学谈了自己的爱好。麦克说他喜欢玩电脑。他有一个笔记本电脑，业余时间他常常练习在电脑上用汉语写东西。罗兰喜欢音乐。她说下课以后听听音乐，跟朋友聊聊天，感到心情很愉快。田中同学说，他来中国以前就对书法很感兴趣。他现在正跟一个老师学习书法。我也打算学唱京剧，想请一个老师教我。我希望以后能参加演出。', p: 'Wǒmen bān de tóngxué tánle zìjǐ de àihào. Màikè shuō tā xǐhuan wán diànnǎo. Tā yǒu yí ge bǐjìběn diànnǎo, yèyú shíjiān tā chángcháng liànxí zài diànnǎo shang yòng Hànyǔ xiě dōngxi. Luólán xǐhuan yīnyuè. Tā shuō xià kè yǐhòu tīngting yīnyuè, gēn péngyou liáoliao tiān, gǎndào xīnqíng hěn yúkuài. Tiánzhōng tóngxué shuō, tā lái Zhōngguó yǐqián jiù duì shūfǎ hěn gǎn xìngqù. Tā xiànzài zhèng gēn yí ge lǎoshī xuéxí shūfǎ. Wǒ yě dǎsuan xué chàng jīngjù, xiǎng qǐng yí ge lǎoshī jiāo wǒ. Wǒ xīwàng yǐhòu néng cānjiā yǎnchū.' },
      ],
    },
  ],
  qa: [
    {
      title: 'Chọn từ điền vào chỗ trống (选词填空)',
      items: [
        { q: 'A. Từ cho sẵn: 唱 对 让 爱好 以前 喜欢', hint: 'Mỗi từ dùng một lần.' },
        { q: '(1) 我 ______ 中国文化非常感兴趣。', hint: '对' },
        { q: '(2) 我来中国 ______ 是公司职员。', hint: '以前' },
        { q: '(3) 老师 ______ 我们谈谈自己的爱好。', hint: '让' },
        { q: '(4) 我 ______ 吃中国菜。', hint: '喜欢' },
        { q: '(5) A: 你有什么 ______ ?   B: 我的 ______ 是画画儿。', hint: '爱好 / 爱好' },
        { q: '(6) 她非常喜欢 ______ 京剧。', hint: '唱' },
        { q: 'B. 还是 / 或者', hint: 'Câu hỏi dùng 还是, câu trần thuật dùng 或者.' },
        { q: '(1) A: 你喝茶 ______ 喝咖啡?   B: 我喝茶。', hint: '还是' },
        { q: '(2) A: 下午你去书店 ______ 去商店?   B: 我去书店。', hint: '还是' },
        { q: '(3) A: 晚上你做什么?   B: 我预习生词 ______ 复习课文。', hint: '或者' },
        { q: '(4) A: 你喜欢吃米饭 ______ 喜欢吃馒头?   B: 都不喜欢。我喜欢吃面包。', hint: '还是' },
        { q: '(5) A: 你们怎么去?   B: 我们坐车去 ______ 骑车去。', hint: '或者' },
      ],
    },
    {
      title: 'Làm bài tập theo mẫu (按照例句做练习)',
      items: [
        { q: 'Ví dụ: A: 你喜欢唱歌吗? B: 喜欢。A: 你喜欢跳舞吗? B: 不喜欢。你呢? A: 我喜欢唱歌，也喜欢跳舞。', hint: 'Mẫu: 喜欢 + hoạt động. Dùng các cặp: 听音乐 / 看京剧; 看足球 / 看乒乓球; 吃米饭 / 吃馒头; 打太极拳 / 跑步; 游泳 / 爬山.' },
        { q: '(1) 听音乐 / 看京剧', hint: '我喜欢听音乐，也喜欢看京剧。' },
        { q: '(2) 看足球 / 看乒乓球', hint: '我喜欢看足球，也喜欢看乒乓球。' },
        { q: '(3) 吃米饭 / 吃馒头', hint: '我喜欢吃米饭，也喜欢吃馒头。' },
        { q: '(4) 打太极拳 / 跑步', hint: '我喜欢打太极拳，也喜欢跑步。' },
        { q: '(5) 游泳 / 爬山', hint: '我喜欢游泳，也喜欢爬山。' },
      ],
    },
    {
      title: 'Đặt từ trong ngoặc vào vị trí thích hợp (把括号里的词填入适当的位置)',
      items: [
        { q: '(1) 我 A 很少看电视，有时候我 B 看 C 天气预报 D。（只）', hint: 'D: 我很少看电视，有时候我只看天气预报。 (hoặc B: 我只…)' },
        { q: '(2) 星期六 A 和星期日 B 我 C 常 D 看足球比赛。（也）', hint: 'C: 星期六和星期日我也常看足球比赛。' },
        { q: '(3) A 她 B 喜欢 C 看 D 京剧。（非常）', hint: 'B: 她非常喜欢看京剧。' },
        { q: '(4) A 业余时间 B 你们 C 做 D 什么?（常）', hint: 'C: 业余时间你们常做什么?' },
        { q: '(5) A 业余时间 B 我们 C 喜欢 D 看电视。（都）', hint: 'B: 业余时间我们都喜欢看电视。' },
      ],
    },
    {
      title: 'Hoàn thành hội thoại (完成会话)',
      items: [
        { q: '(1) A: 休息的时候你们常做什么?   B: ______ 。', hint: '我们常听音乐 / 看电视 / 聊天儿。' },
        { q: '(2) A: 你喜欢看电视吗?   B: ______ 。', hint: '喜欢。/ 不太喜欢。' },
        { q: '(3) A: 喜欢看什么节目?   B: ______ 。   A: ______ ?   B: 这个节目很好。', hint: 'B: 我喜欢看京剧 (节目 jiémù: chương trình). A: 这个节目怎么样?' },
        { q: '(4) A: 星期六和星期日常去旅行吗?   B: ______ 。   A: 你喜欢自己一个人去还是和朋友一起去?   B: ______ 。', hint: 'B: 常去 / 不常去。 B: 我喜欢和朋友一起去。' },
      ],
    },
    {
      title: 'Sửa câu sai (改错句)',
      items: [
        { q: '(1) 老师给我们去参观。', hint: '老师让/带我们去参观。' },
        { q: '(2) 我非常感兴趣书法。', hint: '我对书法非常感兴趣。' },
        { q: '(3) 她请我吃饭去饭店。', hint: '她请我去饭店吃饭。' },
        { q: '(4) 请大家不要抽烟在楼里。', hint: '请大家不要在楼里抽烟。' },
        { q: '(5) 我们去香港坐飞机。', hint: '我们坐飞机去香港。' },
        { q: '(6) 请明天你来我的宿舍吧。', hint: '请你明天来我的宿舍吧。' },
      ],
    },
  ],
}
