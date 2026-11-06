import type { Lesson } from './types'

const M = '玛丽 Mǎlì'
const L = '罗兰 Luólán'
const T = '老师 lǎoshī'

/** Quyển 2, Bài 24. */
export const lesson24: Lesson = {
  id: 24,
  title: 'Tôi muốn học thái cực quyền',
  hanzi: '我想学太极拳',
  pinyin: 'Wǒ xiǎng xué tàijíquán',
  vi: 'Tôi muốn học thái cực quyền',
  intro: 'Động từ năng nguyện (会, 想, 要, 能, 可以); từ…đến… (从…到…); 再; hỏi lý do bằng 怎么 + phủ định; xin nghỉ ốm; trọng âm câu hỏi chính phản có động từ năng nguyện.',
  dialogue: [
    { who: 'A', name: M, scene: '(一) 我想学太极拳 – Tôi muốn học thái cực quyền', hanzi: '你会打太极拳吗？', pinyin: 'Nǐ huì dǎ tàijíquán ma?', vi: 'Bạn biết đánh thái cực quyền không?' },
    { who: 'B', name: L, hanzi: '不会。你呢？', pinyin: 'Bú huì. Nǐ ne?', vi: 'Không biết. Còn bạn?' },
    { who: 'A', name: M, hanzi: '我也不会。你想不想学？', pinyin: 'Wǒ yě bú huì. Nǐ xiǎng bu xiǎng xué?', vi: 'Tôi cũng không biết. Bạn có muốn học không?' },
    { who: 'B', name: L, hanzi: '想学。', pinyin: 'Xiǎng xué.', vi: 'Muốn học.' },
    { who: 'A', name: M, hanzi: '我也想学。听说体育老师下星期教太极拳，我们去报名吧。', pinyin: 'Wǒ yě xiǎng xué. Tīngshuō tǐyù lǎoshī xià xīngqī jiāo tàijíquán, wǒmen qù bào míng ba.', vi: 'Tôi cũng muốn học. Nghe nói thầy thể dục tuần sau dạy thái cực quyền, chúng mình đi đăng ký đi.' },
    { who: 'B', name: L, hanzi: '好。', pinyin: 'Hǎo.', vi: 'Được.' },
    { who: 'A', name: M, scene: '(二) 您能不能再说一遍 – Thầy có thể nói lại một lần nữa không', hanzi: '老师，我们想学太极拳，现在可以报名吗？', pinyin: 'Lǎoshī, wǒmen xiǎng xué tàijíquán, xiànzài kěyǐ bào míng ma?', vi: 'Thưa thầy, chúng em muốn học thái cực quyền, bây giờ có thể đăng ký không ạ?' },
    { who: 'B', name: T, hanzi: '可以。', pinyin: 'Kěyǐ.', vi: 'Được.' },
    { who: 'A', name: M, hanzi: '什么时候开始上课？', pinyin: 'Shénme shíhou kāishǐ shàng kè?', vi: 'Khi nào bắt đầu học ạ?' },
    { who: 'B', name: T, hanzi: '下星期一。', pinyin: 'Xià xīngqīyī.', vi: 'Thứ Hai tuần sau.' },
    { who: 'A', name: M, hanzi: '每天下午都有课吗？', pinyin: 'Měi tiān xiàwǔ dōu yǒu kè ma?', vi: 'Chiều nào cũng có lớp ạ?' },
    { who: 'B', name: T, hanzi: '不，只一三五下午。', pinyin: 'Bù, zhǐ yī sān wǔ xiàwǔ.', vi: 'Không, chỉ chiều thứ Hai, Tư, Sáu.' },
    { who: 'A', name: M, hanzi: '对不起，您能不能再说一遍？我不懂“一三五”是什么意思。', pinyin: 'Duì bu qǐ, nín néng bu néng zài shuō yí biàn? Wǒ bù dǒng “yī sān wǔ” shì shénme yìsi.', vi: 'Xin lỗi, thầy có thể nói lại một lần nữa không? Em không hiểu "một ba năm" nghĩa là gì.' },
    { who: 'B', name: T, hanzi: '就是星期一、星期三、星期五。', pinyin: 'Jiù shì xīngqīyī, xīngqīsān, xīngqīwǔ.', vi: 'Chính là thứ Hai, thứ Tư, thứ Sáu.' },
    { who: 'A', name: M, hanzi: '从几点到几点上课？', pinyin: 'Cóng jǐ diǎn dào jǐ diǎn shàng kè?', vi: 'Học từ mấy giờ đến mấy giờ ạ?' },
    { who: 'B', name: T, hanzi: '四点半到五点半。一次一个小时。', pinyin: 'Sì diǎn bàn dào wǔ diǎn bàn. Yí cì yí ge xiǎoshí.', vi: 'Từ bốn rưỡi đến năm rưỡi. Mỗi buổi một tiếng.' },
    { who: 'A', name: T, scene: '(星期一下午 – Chiều thứ Hai)', hanzi: '玛丽！……玛丽怎么没来？', pinyin: 'Mǎlì! …… Mǎlì zěnme méi lái?', vi: 'Mary! … Sao Mary không đến?' },
    { who: 'B', name: L, hanzi: '老师，玛丽让我给她请个假。她今天有点儿不舒服，头疼，发烧，咳嗽，可能感冒了。她要去医院看病，不能来上课。', pinyin: 'Lǎoshī, Mǎlì ràng wǒ gěi tā qǐng ge jià. Tā jīntiān yǒudiǎnr bù shūfu, tóu téng, fā shāo, késou, kěnéng gǎnmào le. Tā yào qù yīyuàn kàn bìng, bù néng lái shàng kè.', vi: 'Thưa thầy, Mary nhờ em xin nghỉ giúp bạn ấy. Hôm nay bạn hơi khó chịu trong người, đau đầu, sốt, ho, có lẽ bị cảm. Bạn phải đến bệnh viện khám, không đến học được.' },
  ],
  dialogueTip: 'Động từ năng nguyện đứng <b>trước động từ chính</b>: 会 (biết, có kỹ năng), 想 (muốn), 要 (muốn / phải), 能 và 可以 (có thể, được phép). Hỏi chính phản: <b>想不想, 会不会, 能不能</b>. Hỏi lý do: <b>怎么 + 没/不 + động từ</b> (玛丽怎么没来?).',
  slowSay: '你会打太极拳吗',
  vocab: [
    { hanzi: '会', pinyin: 'huì', pos: 'năng nguyện/động từ', meaning: 'biết, có thể (nhờ học)', han_viet: 'hội' },
    { hanzi: '打', pinyin: 'dǎ', pos: 'động từ', meaning: 'đánh, chơi (thể thao)', han_viet: 'đả' },
    { hanzi: '太极拳', pinyin: 'tàijíquán', pos: 'danh từ', meaning: 'thái cực quyền', han_viet: 'thái cực quyền' },
    { hanzi: '听说', pinyin: 'tīngshuō', pos: 'động từ', meaning: 'nghe nói', han_viet: 'thính thuyết' },
    { hanzi: '下', pinyin: 'xià', pos: 'danh từ', meaning: 'sau, tới (tuần sau)', han_viet: 'hạ' },
    { hanzi: '报名', pinyin: 'bào míng', pos: 'động từ', meaning: 'đăng ký', han_viet: 'báo danh' },
    { hanzi: '开始', pinyin: 'kāishǐ', pos: 'động từ', meaning: 'bắt đầu', han_viet: 'khai thủy' },
    { hanzi: '能', pinyin: 'néng', pos: 'năng nguyện', meaning: 'có thể, có khả năng', han_viet: 'năng' },
    { hanzi: '再', pinyin: 'zài', pos: 'phó từ', meaning: 'lại, thêm lần nữa', han_viet: 'tái' },
    { hanzi: '遍', pinyin: 'biàn', pos: 'lượng từ', meaning: 'lần (từ đầu đến cuối)', han_viet: 'biến' },
    { hanzi: '懂', pinyin: 'dǒng', pos: 'động từ', meaning: 'hiểu', han_viet: 'đổng' },
    { hanzi: '舒服', pinyin: 'shūfu', pos: 'tính từ', meaning: 'dễ chịu, khỏe trong người', han_viet: 'thư phục' },
    { hanzi: '意思', pinyin: 'yìsi', pos: 'danh từ', meaning: 'ý nghĩa', han_viet: 'ý tứ' },
    { hanzi: '次', pinyin: 'cì', pos: 'lượng từ', meaning: 'lần, lượt', han_viet: 'thứ' },
    { hanzi: '小时', pinyin: 'xiǎoshí', pos: 'danh từ', meaning: 'giờ (đơn vị thời gian)', han_viet: 'tiểu thời' },
    { hanzi: '请假', pinyin: 'qǐng jià', pos: 'động từ', meaning: 'xin nghỉ phép', han_viet: 'thỉnh giả' },
    { hanzi: '头疼', pinyin: 'tóu téng', pos: 'động từ', meaning: 'đau đầu', han_viet: 'đầu đông' },
    { hanzi: '头', pinyin: 'tóu', pos: 'danh từ', meaning: 'đầu', han_viet: 'đầu' },
    { hanzi: '疼', pinyin: 'téng', pos: 'động từ', meaning: 'đau', han_viet: 'đông' },
    { hanzi: '发烧', pinyin: 'fā shāo', pos: 'động từ', meaning: 'sốt', han_viet: 'phát thiêu' },
    { hanzi: '可能', pinyin: 'kěnéng', pos: 'phó từ', meaning: 'có thể, có lẽ', han_viet: 'khả năng' },
    { hanzi: '咳嗽', pinyin: 'késou', pos: 'động từ', meaning: 'ho', han_viet: 'khái thấu' },
    { hanzi: '感冒', pinyin: 'gǎnmào', pos: 'động/danh từ', meaning: 'cảm lạnh, cảm cúm', han_viet: 'cảm mạo' },
    { hanzi: '了', pinyin: 'le', pos: 'trợ từ', meaning: 'trợ từ ngữ khí chỉ sự thay đổi, tình huống mới', han_viet: 'liễu' },
    { hanzi: '看病', pinyin: 'kàn bìng', pos: 'động từ', meaning: 'khám bệnh', han_viet: 'khán bệnh' },
    { hanzi: '病', pinyin: 'bìng', pos: 'danh/động từ', meaning: 'bệnh; ốm', han_viet: 'bệnh' },
  ],
  sections: [
    {
      kind: 'examples', label: 'Trọng âm: động từ năng nguyện', title: 'Trọng âm của câu (句重音): câu hỏi chính phản với động từ năng nguyện',
      intro: 'Trong câu hỏi chính phản có động từ năng nguyện, vế khẳng định phải được nhấn, vế phủ định đọc nhẹ, cuối câu xuống giọng. Khi trả lời, động từ năng nguyện được nhấn. Dấu ’ đặt trước phần được nhấn.',
      groups: [
        { label: 'Hỏi và trả lời', items: [['A：你’想不想学？', 'A: nǐ ’xiǎng bu xiǎng xué?', 'nhấn: xiǎng (vế khẳng định)'], ['B：’想学。', 'B: ’xiǎng xué.', 'nhấn: xiǎng']] },
      ],
    },
  ],
  notes: [
    {
      title: 'Hỏi bằng 能不能再说一遍; trạng từ 再',
      body: 'Phó từ 再 đứng trước động từ làm trạng ngữ, diễn tả hành động hoặc trạng thái lặp lại hoặc tiếp tục. Sự lặp lại này CHƯA xảy ra. 您再说一遍，好吗? 明天我再来。(Còn 又 là sự lặp lại đã xảy ra, sẽ học sau.)',
      say: '您能不能再说一遍',
    },
    {
      title: '从……到……: từ… đến…',
      body: 'Cấu trúc 从……到…… làm trạng ngữ trong câu, chỉ điểm bắt đầu và điểm kết thúc của thời gian. 我们上午从八点到十二点上课。从七月十号到八月三十一号放假。Hỏi: 从几点到几点上课?',
      say: '从几点到几点上课',
    },
    {
      title: 'Động từ năng nguyện (能愿动词)',
      body: 'Động từ năng nguyện biểu thị khả năng, yêu cầu, nguyện vọng, khả năng xảy ra: 会, 要, 想, 能, 可以… Đứng trước động từ chính. Phủ định bằng 不. Câu hỏi chính phản được tạo bằng cách đặt khẳng định và phủ định của CHÍNH động từ năng nguyện cạnh nhau (想不想, 会不会), không phải của động từ chính. Động từ năng nguyện không lặp được, cuối câu cũng không thêm 了.',
      say: '你想不想学',
    },
    {
      title: '会: biết, có kỹ năng',
      body: '会 biểu thị có năng lực làm việc gì (do học mà biết). Phủ định: 不会 + động từ + tân ngữ. 她会说汉语。A: 你会不会打太极拳? B: 我不会打太极拳。Không nói *你会打不打太极拳?',
      say: '你会不会打太极拳',
    },
    {
      title: '想: muốn, định',
      body: '想 biểu thị nguyện vọng, dự định, yêu cầu: 很多外国学生想来中国留学。你想不想学太极拳? Không nói *你想学不学太极拳?',
      say: '你想不想学太极拳',
    },
    {
      title: '要: muốn, phải; phủ định 不想 hoặc 不愿意',
      body: '要 biểu thị muốn làm việc gì; phủ định dùng 不想 hoặc 不愿意, KHÔNG nói 不要. A: 今天下午你想不想去商店? B: 我要学太极拳，不想去商店。Không nói *我要学太极拳，不要去商店。要 cũng có nghĩa "phải, nên": phủ định là 不要 hoặc 别 (dùng để ngăn cản): 请大家不要说话。(请大家别说话。)',
      say: '请大家不要说话',
    },
    {
      title: '能 / 可以: có thể, được phép',
      body: '能 và 可以 đều chỉ có năng lực hoặc điều kiện làm việc gì. Phủ định dùng 不能. 她不能说汉语。你可以用英语说。Còn chỉ hợp lý, cho phép hoặc hoàn cảnh cho phép: 这儿可以抽烟吗? – 对不起，这儿不能抽烟。下午你能不能跟我一起去? – 对不起，我有事，不能跟你一起去。Không nói *我有事，不会跟你一起去。玛丽感冒了，不能来上课。',
      say: '这儿不能抽烟',
    },
    {
      title: '会, 想, 要 cũng là động từ thường',
      body: 'Chú ý: 会, 想, 要 vẫn có thể là động từ thường. 会 làm động từ: biểu thị thành thạo kỹ năng nào đó (她会英语，不会法语; 她会电脑). 想 làm động từ: "nghĩ, suy nghĩ, nhớ": 你们想想这个问题怎么回答。我有点儿想家。要 làm động từ: "muốn có": A: 你要什么? B: 我要一斤苹果。A: 你要点儿什么? B: 我要一杯咖啡。',
      say: '我有点儿想家',
    },
    {
      title: 'Hỏi lý do: 怎么 + hình thức phủ định của động từ',
      body: '怎么 cộng với hình thức phủ định của động từ để hỏi lý do. A: 玛丽怎么没来? B: 老师，她今天有点儿不舒服，要去医院，不能来上课。A: 昨天你怎么没去学太极拳? B: 昨天我有事。A: 你怎么不喝啤酒? B: 我不喜欢喝啤酒。',
      say: '玛丽怎么没来',
    },
    {
      title: 'Xin nghỉ và nói về bệnh',
      body: '请假 (xin nghỉ): 玛丽让我给她请个假。Triệu chứng: 头疼 (đau đầu), 发烧 (sốt), 咳嗽 (ho), 感冒 (cảm); 不舒服 (khó chịu trong người). 看病 là đi khám bệnh: 她要去医院看病。可能 là "có thể, có lẽ": 可能感冒了。',
      say: '她要去医院看病',
    },
    {
      title: 'Trọng âm: câu hỏi chính phản với động từ năng nguyện',
      body: 'Khi hỏi: vế khẳng định được nhấn, vế phủ định nhẹ, cuối câu xuống giọng. Khi trả lời: động từ năng nguyện được nhấn. A: 你’想不想学? B: ’想学。',
      say: '你想不想学',
    },
  ],
  sentences: [
    { parts: ['你', '会', '打', '太极拳', '吗'], pinyin: 'Nǐ huì dǎ tàijíquán ma?', vi: 'Bạn biết đánh thái cực quyền không?' },
    { parts: ['我', '也', '不', '会'], pinyin: 'Wǒ yě bú huì.', vi: 'Tôi cũng không biết.' },
    { parts: ['你', '想', '不', '想', '学'], pinyin: 'Nǐ xiǎng bu xiǎng xué?', vi: 'Bạn có muốn học không?' },
    { parts: ['我', '也', '想', '学'], pinyin: 'Wǒ yě xiǎng xué.', vi: 'Tôi cũng muốn học.' },
    { parts: ['听说', '体育', '老师', '下', '星期', '教', '太极拳'], pinyin: 'Tīngshuō tǐyù lǎoshī xià xīngqī jiāo tàijíquán.', vi: 'Nghe nói thầy thể dục tuần sau dạy thái cực quyền.' },
    { parts: ['我们', '去', '报名', '吧'], pinyin: 'Wǒmen qù bào míng ba.', vi: 'Chúng mình đi đăng ký đi.' },
    { parts: ['现在', '可以', '报名', '吗'], pinyin: 'Xiànzài kěyǐ bào míng ma?', vi: 'Bây giờ có thể đăng ký không?' },
    { parts: ['什么', '时候', '开始', '上课'], pinyin: 'Shénme shíhou kāishǐ shàng kè?', vi: 'Khi nào bắt đầu học?' },
    { parts: ['每天', '下午', '都', '有', '课', '吗'], pinyin: 'Měi tiān xiàwǔ dōu yǒu kè ma?', vi: 'Chiều nào cũng có lớp à?' },
    { parts: ['您', '能', '不', '能', '再', '说', '一遍'], pinyin: 'Nín néng bu néng zài shuō yí biàn?', vi: 'Thầy có thể nói lại một lần nữa không?' },
    { parts: ['我', '不', '懂', '一三五', '是', '什么', '意思'], pinyin: 'Wǒ bù dǒng “yī sān wǔ” shì shénme yìsi.', vi: 'Em không hiểu "một ba năm" nghĩa là gì.' },
    { parts: ['从', '几', '点', '到', '几', '点', '上课'], pinyin: 'Cóng jǐ diǎn dào jǐ diǎn shàng kè?', vi: 'Học từ mấy giờ đến mấy giờ?' },
    { parts: ['一', '次', '一', '个', '小时'], pinyin: 'Yí cì yí ge xiǎoshí.', vi: 'Mỗi buổi một tiếng.' },
    { parts: ['玛丽', '怎么', '没', '来'], pinyin: 'Mǎlì zěnme méi lái?', vi: 'Sao Mary không đến?' },
    { parts: ['玛丽', '让', '我', '给', '她', '请', '个', '假'], pinyin: 'Mǎlì ràng wǒ gěi tā qǐng ge jià.', vi: 'Mary nhờ em xin nghỉ giúp bạn ấy.' },
    { parts: ['她', '头', '疼', '发烧', '咳嗽', '可能', '感冒', '了'], pinyin: 'Tā tóu téng, fā shāo, késou, kěnéng gǎnmào le.', vi: 'Bạn ấy đau đầu, sốt, ho, có lẽ bị cảm.' },
    { parts: ['她', '要', '去', '医院', '看病'], pinyin: 'Tā yào qù yīyuàn kàn bìng.', vi: 'Bạn ấy phải đến bệnh viện khám.' },
    { parts: ['她', '不', '能', '来', '上课'], pinyin: 'Tā bù néng lái shàng kè.', vi: 'Bạn ấy không thể đến học.' },
    { parts: ['这儿', '不', '能', '抽烟'], pinyin: 'Zhèr bù néng chōu yān.', vi: 'Ở đây không được hút thuốc.' },
  ],
  writeChars: ['会', '次', '极', '能', '舒', '育', '报', '懂', '请', '始', '疼', '病', '意', '思'],
  drills: [
    {
      title: 'Phân biệt âm và thanh điệu', hint: 'Đọc từng cặp, chú ý thanh điệu và âm đầu.',
      items: [
        { h: '舒服', p: 'shūfu' }, { h: '书术', p: 'shūshù' }, { h: '可以', p: 'kěyǐ' }, { h: '可疑', p: 'kěyí' },
        { h: '开始', p: 'kāishǐ' }, { h: '还是', p: 'háishi' }, { h: '意思', p: 'yìsi' }, { h: '一时', p: 'yìshí' },
        { h: '小时', p: 'xiǎoshí' }, { h: '小事', p: 'xiǎoshì' }, { h: '发烧', p: 'fā shāo' }, { h: '花招', p: 'huāzhāo' },
      ],
    },
    {
      title: 'Đọc liền nhiều âm tiết (多音节连读): các sân thể thao', hint: 'Từ có đuôi 场 (sân), 园 (vườn): nhấn âm cuối.',
      items: [
        { h: '羽毛球场', p: 'yǔmáoqiúchǎng' }, { h: '保龄球场', p: 'bǎolíngqiúchǎng' }, { h: '乒乓球场', p: 'pīngpāngqiúchǎng' },
        { h: '运动场', p: 'yùndòngchǎng' }, { h: '菜市场', p: 'càishìchǎng' }, { h: '游乐场', p: 'yóulèchǎng' },
      ],
    },
    {
      title: 'Đọc to các cụm từ (朗读): 想/会/要/能 và 怎么', hint: 'Câu hỏi chính phản và phủ định.',
      items: [
        { h: '想不想学', p: 'xiǎng bu xiǎng xué' }, { h: '会不会说', p: 'huì bu huì shuō' }, { h: '要不要买', p: 'yào bu yào mǎi' }, { h: '能不能来', p: 'néng bu néng lái' },
        { h: '不想学', p: 'bù xiǎng xué' }, { h: '不会说', p: 'bú huì shuō' }, { h: '不想买', p: 'bù xiǎng mǎi' }, { h: '不能来', p: 'bù néng lái' },
        { h: '会不会说汉语', p: 'huì bu huì shuō Hànyǔ' }, { h: '会不会说英语', p: 'huì bu huì shuō Yīngyǔ' }, { h: '会不会打网球', p: 'huì bu huì dǎ wǎngqiú' }, { h: '会不会游泳', p: 'huì bu huì yóuyǒng' },
        { h: '会说汉语', p: 'huì shuō Hànyǔ' }, { h: '会说英语', p: 'huì shuō Yīngyǔ' }, { h: '会打网球', p: 'huì dǎ wǎngqiú' }, { h: '会游泳', p: 'huì yóuyǒng' },
        { h: '不会打太极拳', p: 'bú huì dǎ tàijíquán' }, { h: '不会开汽车', p: 'bú huì kāi qìchē' }, { h: '不会画画', p: 'bú huì huà huà' }, { h: '不会唱歌', p: 'bú huì chàng gē' },
        { h: '要去医院', p: 'yào qù yīyuàn' }, { h: '要回国', p: 'yào huí guó' }, { h: '要看电视', p: 'yào kàn diànshì' }, { h: '要复习语法', p: 'yào fùxí yǔfǎ' },
        { h: '怎么没去', p: 'zěnme méi qù' }, { h: '怎么没来', p: 'zěnme méi lái' }, { h: '怎么不看', p: 'zěnme bú kàn' }, { h: '怎么不说', p: 'zěnme bù shuō' },
      ],
    },
    {
      title: 'Từ bổ sung (补充生词)', hint: 'Dùng để thay thế trong các mẫu câu.',
      items: [
        { h: '开车', p: 'kāi chē', m: 'lái xe' }, { h: '游泳', p: 'yóu yǒng', m: 'bơi' }, { h: '钓鱼', p: 'diào yú', m: 'câu cá' },
        { h: '停车', p: 'tíng chē', m: 'dừng xe, đỗ xe' }, { h: '滑冰', p: 'huá bīng', m: 'trượt băng' }, { h: '拍照', p: 'pāi zhào', m: 'chụp ảnh' },
        { h: '抽/吸烟', p: 'chōu / xī yān', m: 'hút thuốc' }, { h: '唱歌', p: 'chàng gē', m: 'hát' }, { h: '跳舞', p: 'tiào wǔ', m: 'nhảy múa' }, { h: '打篮球', p: 'dǎ lánqiú', m: 'chơi bóng rổ' },
        { h: '护照', p: 'hùzhào', m: 'hộ chiếu' }, { h: '驾照', p: 'jiàzhào', m: 'bằng lái xe' },
      ],
    },
    {
      title: 'Thay thế: 你会打太极拳吗? 不会. 你想不想学? 想', hint: 'Thay hoạt động.',
      items: [
        { h: '开车', p: 'kāi chē' }, { h: '滑冰', p: 'huá bīng' }, { h: '跳舞', p: 'tiào wǔ' }, { h: '唱中文歌', p: 'chàng Zhōngwén gē' }, { h: '游泳', p: 'yóu yǒng' }, { h: '画画儿', p: 'huà huàr' },
      ],
    },
    {
      title: 'Thay thế: 这儿可以抽烟吗? 不能', hint: 'Thay hoạt động (xin phép).',
      items: [
        { h: '滑冰', p: 'huá bīng' }, { h: '打篮球', p: 'dǎ lánqiú' }, { h: '拍照', p: 'pāi zhào' }, { h: '停车', p: 'tíng chē' }, { h: '游泳', p: 'yóu yǒng' }, { h: '钓鱼', p: 'diào yú' },
      ],
    },
    {
      title: 'Thay thế: 今天他能不能来? 他要上课，不能来', hint: 'Thay lý do.',
      items: [
        { h: '去医院 / 学太极拳', p: 'qù yīyuàn / xué tàijíquán' }, { h: '看朋友 / 去老师那儿', p: 'kàn péngyou / qù lǎoshī nàr' }, { h: '看病 / 去银行', p: 'kàn bìng / qù yínháng' },
      ],
    },
    {
      title: 'Thay thế: 你要不要看DVD? 我不想看DVD，我想看电影', hint: 'Thay cặp lựa chọn.',
      items: [
        { h: '喝咖啡 / 喝茶', p: 'hē kāfēi / hē chá' }, { h: '爬山 / 游泳', p: 'pá shān / yóu yǒng' }, { h: '学太极拳 / 学书法', p: 'xué tàijíquán / xué shūfǎ' },
        { h: '吃包子 / 吃饺子', p: 'chī bāozi / chī jiǎozi' }, { h: '去图书馆 / 去公园', p: 'qù túshūguǎn / qù gōngyuán' }, { h: '跳舞 / 唱歌', p: 'tiào wǔ / chàng gē' },
      ],
    },
    {
      title: 'Thực hành nói (成段表达)', hint: 'Từ bổ sung: 护照 hùzhào, 驾照 jiàzhào. Đọc to cả hai đoạn.',
      items: [
        { h: '我不会打太极拳，很想学，玛丽也不会，她也想学。听说体育老师下星期教太极拳，我们就去报名。老师说从下星期一开始上课。我问老师是不是每天下午上课。他说不是每天下午，只一三五下午。我不懂“一三五”是什么意思。老师说，一三五就是星期一、星期三、星期五。', p: 'Wǒ bú huì dǎ tàijíquán, hěn xiǎng xué, Mǎlì yě bú huì, tā yě xiǎng xué. Tīngshuō tǐyù lǎoshī xià xīngqī jiāo tàijíquán, wǒmen jiù qù bào míng. Lǎoshī shuō cóng xià xīngqīyī kāishǐ shàng kè. Wǒ wèn lǎoshī shì bu shì měi tiān xiàwǔ shàng kè. Tā shuō bú shì měi tiān xiàwǔ, zhǐ yī sān wǔ xiàwǔ. Wǒ bù dǒng “yī sān wǔ” shì shénme yìsi. Lǎoshī shuō, yī sān wǔ jiù shì xīngqīyī, xīngqīsān, xīngqīwǔ.' },
        { h: '今天下午我们有太极拳课，玛丽有点儿不舒服，发烧，头疼，可能感冒了，她要去医院看病，让我给她请假。上课的时候，老师问玛丽怎么没来，我告诉老师，她病了，今天不能来上课。', p: 'Jīntiān xiàwǔ wǒmen yǒu tàijíquán kè, Mǎlì yǒudiǎnr bù shūfu, fā shāo, tóu téng, kěnéng gǎnmào le, tā yào qù yīyuàn kàn bìng, ràng wǒ gěi tā qǐng jià. Shàng kè de shíhou, lǎoshī wèn Mǎlì zěnme méi lái, wǒ gàosu lǎoshī, tā bìng le, jīntiān bù néng lái shàng kè.' },
        { h: '一天，我问麦克会不会开车，他说当然会。我说，我朋友有一辆车，我可以借来，星期天我们开他的车去玩儿怎么样。麦克说，不行，我在中国不能开车。我问他：“为什么？”他说，没有开车的护照。我说，那不叫护照，叫驾照。他说：“对，是驾照。我常常错了。”我说：“要说‘常常错’；不能说‘常常错了’，‘常常’后边不能用‘了’。”他说：“是吗？我还没学这个语法呢。”', p: 'Yì tiān, wǒ wèn Màikè huì bu huì kāi chē, tā shuō dāngrán huì. Wǒ shuō, wǒ péngyou yǒu yí liàng chē, wǒ kěyǐ jiè lái, xīngqītiān wǒmen kāi tā de chē qù wánr zěnmeyàng. Màikè shuō, bù xíng, wǒ zài Zhōngguó bù néng kāi chē. Wǒ wèn tā: “Wèi shénme?” Tā shuō, méiyǒu kāi chē de hùzhào. Wǒ shuō, nà bú jiào hùzhào, jiào jiàzhào. Tā shuō: “Duì, shì jiàzhào. Wǒ chángcháng cuò le.” Wǒ shuō: “Yào shuō ‘chángcháng cuò’; bù néng shuō ‘chángcháng cuò le’, ‘chángcháng’ hòubian bù néng yòng ‘le’.” Tā shuō: “Shì ma? Wǒ hái méi xué zhège yǔfǎ ne.”' },
      ],
    },
  ],
  qa: [
    {
      title: 'Chọn từ điền vào chỗ trống (选词填空)',
      items: [
        { q: 'A. Từ cho sẵn: 能 要 想 可以 意思 会', hint: 'Mỗi từ dùng một lần.' },
        { q: '(1) 我不 ______ 说法语，只会说一点儿英语。', hint: '会' },
        { q: '(2) 玛丽 ______ 学太极拳。', hint: '想 / 要' },
        { q: '(3) 他感冒了，今天下午不 ______ 来。', hint: '能' },
        { q: '(4) 我很 ______ 学唱京剧。', hint: '想' },
        { q: '(5) 我现在还不 ______ 看中文报。', hint: '会 / 能' },
        { q: '(6) 老师，我妈妈今天来中国，我 ______ 请假去接她。', hint: '要 / 想' },
        { q: '(7) 这个词是什么 ______ ?', hint: '意思' },
        { q: '(8) 我 ______ 用用你的车吗?', hint: '可以' },
        { q: 'B. Từ cho sẵn: 会 能 要 想', hint: 'Phân biệt động từ năng nguyện.' },
        { q: '(1) 今天下午你 ______ 来吗?', hint: '能 / 想 / 要' },
        { q: '(2) 老师，玛丽不舒服，今天她不 ______ 来上课。', hint: '能' },
        { q: '(3) 我不 ______ 学太极拳。', hint: '想 / 会' },
        { q: '(4) 他不想学法语， ______ 学英语。', hint: '要 / 想' },
        { q: '(5) 你一分钟 ______ 写多少汉字?', hint: '能' },
        { q: '(6) 他喝酒了，不 ______ 开车，你开吧。', hint: '能' },
        { q: '(7) 这儿不 ______ 停车。', hint: '能 / 可以' },
        { q: '(8) 今天晚上我 ______ 去看电影。', hint: '要 / 想' },
      ],
    },
    {
      title: 'Hoàn thành hội thoại (完成会话)',
      items: [
        { q: '(1) A: 你会电脑吗?   B: ______ 。你呢?   A: ______ 。你想不想学?   B: ______ 。   A: 我们一起学，好吗?   B: ______ 。', hint: 'Ví dụ: 会 / 不会。 · 我也会 / 我不会。 · 想学。 · 好。' },
        { q: '(2) A: ______ ?   B: 不能。   A: ______ ?   B: 前边儿有停车场，那儿可以停车。', hint: 'A: 这儿可以停车吗? · 哪儿可以停车?' },
        { q: '(3) A: ______ ?   B: 我不会做中国菜。 ______ ?   A: 我也不会。', hint: 'A: 你会做中国菜吗? · B: 你呢?' },
        { q: '(4) A: ______ ?   B: 今天我不想去，我们明天去吧。', hint: 'A: 今天你想不想去? / 我们今天去，好吗?' },
      ],
    },
    {
      title: 'Sửa câu sai (改错句)',
      items: [
        { q: '(1) 你想买不买词典?', hint: '你想不想买词典?' },
        { q: '(2) 我去图书馆要看书。', hint: '我要去图书馆看书。' },
        { q: '(3) 晚上她能去跟我一起。', hint: '晚上她能跟我一起去。' },
        { q: '(4) 这件大衣太贵了，我不可以买。', hint: '这件大衣太贵了，我不能买 / 我不想买。' },
        { q: '(5) 她头疼，发烧，不会来上课。', hint: '她头疼，发烧，不能来上课。' },
        { q: '(6) 你能去不去旅行?', hint: '你能不能去旅行?' },
      ],
    },
  ],
}
