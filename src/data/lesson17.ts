import type { Lesson } from './types'

const L = '玛丽 Mǎlì'
const M = '麦克 Màikè'
const E = '爱德华 Àidéhuá'
const T = '田芳 Tián Fāng'

/** Quyển 2, Bài 17. */
export const lesson17: Lesson = {
  id: 17,
  title: 'Anh ấy đang làm gì thế',
  hanzi: '他在做什么呢',
  pinyin: 'Tā zài zuò shénme ne',
  vi: 'Anh ấy đang làm gì thế',
  intro: 'Hành động đang diễn ra (在/正/正在 + động từ + 呢); câu có hai tân ngữ (教我们语法); hỏi cách thức (怎么 + động từ); trợ từ 呢 làm dịu câu hỏi; trọng âm tân ngữ trực tiếp.',
  dialogue: [
    { who: 'A', name: L, scene: '(一) 他在做什么呢 – Anh ấy đang làm gì thế (Mary đến tìm Mike, hỏi bạn cùng phòng Edward)', hanzi: '麦克在宿舍吗？', pinyin: 'Màikè zài sùshè ma?', vi: 'Mike có ở ký túc xá không?' },
    { who: 'B', name: E, hanzi: '在。', pinyin: 'Zài.', vi: 'Có.' },
    { who: 'A', name: L, hanzi: '他在做什么呢？', pinyin: 'Tā zài zuò shénme ne?', vi: 'Anh ấy đang làm gì thế?' },
    { who: 'B', name: E, hanzi: '我出来的时候，他正在听音乐呢。', pinyin: 'Wǒ chūlai de shíhou, tā zhèngzài tīng yīnyuè ne.', vi: 'Lúc tôi ra, anh ấy đang nghe nhạc.' },
    { who: 'A', name: L, scene: '(Mary vào ký túc xá của Mike)', hanzi: '你是不是在听音乐呢？', pinyin: 'Nǐ shì bu shì zài tīng yīnyuè ne?', vi: 'Có phải bạn đang nghe nhạc không?' },
    { who: 'B', name: M, hanzi: '没有，我正听课文录音呢。', pinyin: 'Méiyǒu, wǒ zhèng tīng kèwén lùyīn ne.', vi: 'Không, tôi đang nghe băng bài khóa.' },
    { who: 'A', name: L, hanzi: '下午你有事儿吗？', pinyin: 'Xiàwǔ nǐ yǒu shìr ma?', vi: 'Chiều nay bạn có việc không?' },
    { who: 'B', name: M, hanzi: '没有事儿。', pinyin: 'Méiyǒu shìr.', vi: 'Không có việc gì.' },
    { who: 'A', name: L, hanzi: '我们一起去书店，好吗？', pinyin: 'Wǒmen yìqǐ qù shūdiàn, hǎo ma?', vi: 'Chúng ta cùng đi hiệu sách nhé?' },
    { who: 'B', name: M, hanzi: '你要买什么书？', pinyin: 'Nǐ yào mǎi shénme shū?', vi: 'Bạn muốn mua sách gì?' },
    { who: 'A', name: L, hanzi: '我想买一本《汉英词典》。', pinyin: 'Wǒ xiǎng mǎi yì běn《Hàn-Yīng Cídiǎn》.', vi: 'Tôi muốn mua một quyển Từ điển Hán-Anh.' },
    { who: 'B', name: M, hanzi: '咱们怎么去呢？', pinyin: 'Zánmen zěnme qù ne?', vi: 'Chúng mình đi bằng cách nào nhỉ?' },
    { who: 'A', name: L, hanzi: '坐车去吧。', pinyin: 'Zuò chē qù ba.', vi: 'Đi xe nhé.' },
    { who: 'B', name: M, hanzi: '今天星期六，坐车太挤，骑车去怎么样？', pinyin: 'Jīntiān xīngqīliù, zuò chē tài jǐ, qí chē qù zěnmeyàng?', vi: 'Hôm nay thứ Bảy, đi xe buýt đông quá, đi xe đạp thì sao?' },
    { who: 'A', name: L, hanzi: '行。', pinyin: 'Xíng.', vi: 'Được.' },
    { who: 'A', name: T, scene: '(二) 谁教你们语法 – Ai dạy các bạn ngữ pháp', hanzi: '玛丽，你们有几门课？', pinyin: 'Mǎlì, nǐmen yǒu jǐ mén kè?', vi: 'Mary, các bạn có mấy môn học?' },
    { who: 'B', name: L, hanzi: '现在只有四门课：综合课、口语课、听力课和阅读课。', pinyin: 'Xiànzài zhǐ yǒu sì mén kè: zōnghé kè, kǒuyǔ kè, tīnglì kè hé yuèdú kè.', vi: 'Bây giờ chỉ có bốn môn: môn tổng hợp, khẩu ngữ, nghe và đọc.' },
    { who: 'A', name: T, hanzi: '有文化课和体育课吗？', pinyin: 'Yǒu wénhuà kè hé tǐyù kè ma?', vi: 'Có môn văn hóa và thể dục không?' },
    { who: 'B', name: L, hanzi: '没有。', pinyin: 'Méiyǒu.', vi: 'Không có.' },
    { who: 'A', name: T, hanzi: '林老师教你们什么？', pinyin: 'Lín lǎoshī jiāo nǐmen shénme?', vi: 'Thầy Lâm dạy các bạn môn gì?' },
    { who: 'B', name: L, hanzi: '她教我们听力和阅读。', pinyin: 'Tā jiāo wǒmen tīnglì hé yuèdú.', vi: 'Cô ấy dạy chúng tôi nghe và đọc.' },
    { who: 'A', name: T, hanzi: '谁教你们综合课和口语课？', pinyin: 'Shéi jiāo nǐmen zōnghé kè hé kǒuyǔ kè?', vi: 'Ai dạy các bạn môn tổng hợp và khẩu ngữ?' },
    { who: 'B', name: L, hanzi: '王老师。', pinyin: 'Wáng lǎoshī.', vi: 'Thầy Vương.' },
  ],
  dialogueTip: '<b>在/正在/正 + động từ (+ 呢)</b> = đang làm gì. Hỏi cách thức: <b>怎么 + động từ?</b> (怎么去?), đáp <b>坐车去 / 骑车去</b>. Khi hỏi, <b>呢</b> ở cuối câu làm giọng mềm đi (咱们怎么去呢?). <b>教</b> có hai tân ngữ: 林老师教我们听力. <b>行</b> = được, đồng ý.',
  slowSay: '他在做什么呢',
  vocab: [
    { hanzi: '在', pinyin: 'zài', pos: 'phó từ', meaning: 'đang (diễn ra)', han_viet: 'tại' },
    { hanzi: '出来', pinyin: 'chūlai', pos: 'động từ', meaning: 'ra, đi ra (từ trong ra ngoài)', han_viet: 'xuất lai' },
    { hanzi: '来', pinyin: 'lái', pos: 'động từ', meaning: 'đến, tới', han_viet: 'lai' },
    { hanzi: '正在', pinyin: 'zhèngzài', pos: 'phó từ', meaning: 'đang (đúng lúc diễn ra)', han_viet: 'chính tại' },
    { hanzi: '音乐', pinyin: 'yīnyuè', pos: 'danh từ', meaning: 'âm nhạc', han_viet: 'âm nhạc' },
    { hanzi: '没有', pinyin: 'méiyǒu', pos: 'phó từ', meaning: 'chưa, không (phủ định động tác đang diễn ra)', han_viet: '' },
    { hanzi: '正', pinyin: 'zhèng', pos: 'phó từ', meaning: 'đang, vừa đúng lúc', han_viet: 'chính' },
    { hanzi: '录音', pinyin: 'lùyīn', pos: 'danh/động từ', meaning: 'ghi âm; băng ghi âm', han_viet: 'lục âm' },
    { hanzi: '事', pinyin: 'shì', pos: 'danh từ', meaning: 'việc, sự việc (事儿 shìr)', han_viet: 'sự' },
    { hanzi: '书店', pinyin: 'shūdiàn', pos: 'danh từ', meaning: 'hiệu sách', han_viet: 'thư điếm' },
    { hanzi: '想', pinyin: 'xiǎng', pos: 'động/trợ động từ', meaning: 'nghĩ; muốn', han_viet: 'tưởng' },
    { hanzi: '汉英', pinyin: 'Hàn-Yīng', pos: 'định ngữ', meaning: 'Hán – Anh', han_viet: 'Hán Anh' },
    { hanzi: '坐', pinyin: 'zuò', pos: 'động từ', meaning: 'đi bằng (xe, tàu); ngồi', han_viet: 'tọa' },
    { hanzi: '挤', pinyin: 'jǐ', pos: 'tính/động từ', meaning: 'đông đúc, chen chúc', han_viet: 'tễ' },
    { hanzi: '骑', pinyin: 'qí', pos: 'động từ', meaning: 'cưỡi, đi (xe đạp, xe máy)', han_viet: 'kỵ' },
    { hanzi: '行', pinyin: 'xíng', pos: 'động từ', meaning: 'được, đồng ý, ổn', han_viet: 'hành' },
    { hanzi: '门', pinyin: 'mén', pos: 'lượng từ', meaning: 'môn (học)', han_viet: 'môn' },
    { hanzi: '课', pinyin: 'kè', pos: 'danh từ', meaning: 'bài học, môn học', han_viet: 'khóa' },
    { hanzi: '综合', pinyin: 'zōnghé', pos: 'động từ', meaning: 'tổng hợp', han_viet: 'tổng hợp' },
    { hanzi: '口语', pinyin: 'kǒuyǔ', pos: 'danh từ', meaning: 'khẩu ngữ, tiếng nói', han_viet: 'khẩu ngữ' },
    { hanzi: '听力', pinyin: 'tīnglì', pos: 'danh từ', meaning: 'khả năng nghe; môn nghe', han_viet: 'thính lực' },
    { hanzi: '阅读', pinyin: 'yuèdú', pos: 'danh từ', meaning: 'đọc hiểu, môn đọc', han_viet: 'duyệt độc' },
    { hanzi: '文化', pinyin: 'wénhuà', pos: 'danh từ', meaning: 'văn hóa', han_viet: 'văn hóa' },
    { hanzi: '体育', pinyin: 'tǐyù', pos: 'danh từ', meaning: 'thể dục, thể thao', han_viet: 'thể dục' },
    { hanzi: '教', pinyin: 'jiāo', pos: 'động từ', meaning: 'dạy', han_viet: 'giáo' },
  ],
  sections: [
    {
      kind: 'examples', label: 'Trọng âm và ngữ điệu', title: 'Trọng âm tân ngữ trực tiếp, ngữ điệu câu có 吧',
      intro: 'Trong câu có hai tân ngữ, tân ngữ trực tiếp (chỉ sự vật, đứng sau) thường được nhấn. Câu hỏi hoặc câu cầu khiến có 吧 ở cuối thì xuống giọng. Dấu ’ đặt trước thành phần được nhấn.',
      groups: [
        { label: 'Câu hai tân ngữ: nhấn tân ngữ trực tiếp', items: [['林老师教我们’听力。', 'Lín lǎoshī jiāo wǒmen ’tīnglì', 'nhấn: tīnglì'], ['姐姐给我一本’词典。', 'jiějie gěi wǒ yì běn ’cídiǎn', 'nhấn: cídiǎn']] },
        { label: 'Câu có 吧 ở cuối: xuống giọng ↘', items: [['我们走吧。', 'wǒmen zǒu ba', 'xuống giọng'], ['你跟我一起去吧。', 'nǐ gēn wǒ yìqǐ qù ba', 'xuống giọng']] },
      ],
    },
  ],
  notes: [
    {
      title: 'Trợ từ 呢 trong câu hỏi: làm giọng mềm',
      body: 'Khi 呢 đứng cuối câu hỏi, nó làm giọng câu hỏi nhẹ nhàng, bớt cứng. 咱们怎么去呢? – 骑车去吧。他去不去呢? 你上午去还是下午去呢? Đây là cách dùng khác với 呢 ở Bài 10 (xác nhận sự việc) và 呢 hỏi rút gọn ở Bài 14.',
      say: '咱们怎么去呢',
    },
    {
      title: 'Đồng ý: 行',
      body: 'Để biểu thị đồng ý có thể nói 行 (được, ổn). A: 坐车去吧。B: 行。Gần nghĩa với 好 và 好吧 ở Bài 16.',
      say: '行',
    },
    {
      title: 'Hành động đang diễn ra: 在 / 正 / 正在 + động từ + (呢)',
      body: 'Đặt phó từ 在, 正在 hoặc 正 trước động từ, hoặc thêm 呢 cuối câu, để diễn tả hành động đang tiến hành. 在, 正在, 正 cũng có thể dùng đồng thời với 呢. Ví dụ: 麦克正在做什么呢? – 他正在看电视呢。你在做什么呢? – 我在听录音呢。他们正做什么呢? – 他们正上课呢。',
      say: '他正在看电视呢',
    },
    {
      title: 'Khác nhau giữa 正, 在 và 正在',
      body: '正 nhấn mạnh hành động đang xảy ra đúng vào một thời điểm nào đó. 在 nhấn mạnh trạng thái hành động đang diễn ra. 正在 nhấn mạnh cả hai. Phủ định dùng 没(有): 麦克，你是不是在听音乐呢? – 我没有听音乐，我在听课文录音呢。他们在上课吗? – 他们没在上课。',
      say: '我没有听音乐，我在听课文录音呢',
    },
    {
      title: 'Động từ không dùng với 正/在/正在',
      body: 'Một số động từ không thể kết hợp với 正, 在, 正在: 是, 在, 有, 来, 去, 认识… Không nói: *正在是留学生呢. Chúng chỉ trạng thái, không phải hành động kéo dài.',
      say: '他在宿舍',
    },
    {
      title: 'Câu có hai tân ngữ (双宾语句)',
      body: 'Một số động từ mang được hai tân ngữ: tân ngữ thứ nhất (gián tiếp) thường chỉ người, tân ngữ thứ hai (trực tiếp) thường chỉ vật. Trật tự: chủ ngữ + động từ + người + vật. 王老师教我们课文和语法。玛丽给我一本英文杂志。我问老师一个问题。Động từ hay gặp: 教, 给, 借, 还, 问, 回答, 告诉. Phần lớn động từ khác KHÔNG mang hai tân ngữ.',
      say: '王老师教我们课文和语法',
    },
    {
      title: 'Hỏi cách thức: 怎么 + động từ',
      body: '怎么 + động từ dùng để hỏi cách thức, phương pháp làm việc gì, mời người nghe giải thích cách làm. 咱们怎么去? – 骑车去吧。你怎么去公园? – 我坐车去。Với phương tiện, dùng 坐 (xe buýt, tàu, máy bay) hoặc 骑 (xe đạp, xe máy) đứng trước 车: 坐车, 骑车.',
      say: '你怎么去公园',
    },
    {
      title: 'Trọng âm và ngữ điệu',
      body: 'Câu hai tân ngữ: nhấn tân ngữ trực tiếp, ví dụ 林老师教我们’听力. Câu hỏi hay cầu khiến có 吧 ở cuối thì xuống giọng: 我们走吧↘, 你跟我一起去吧↘.',
      say: '林老师教我们听力',
    },
    {
      title: 'Các môn học trong trường',
      body: '综合课 (môn tổng hợp), 口语课 (khẩu ngữ), 听力课 (nghe), 阅读课 (đọc), 文化课 (văn hóa), 体育课 (thể dục). Đếm môn học dùng lượng từ 门: 四门课. Hỏi: 你们有几门课?',
      say: '你们有几门课',
    },
  ],
  sentences: [
    { parts: ['麦克', '在', '宿舍', '吗'], pinyin: 'Màikè zài sùshè ma?', vi: 'Mike có ở ký túc xá không?' },
    { parts: ['他', '在', '做', '什么', '呢'], pinyin: 'Tā zài zuò shénme ne?', vi: 'Anh ấy đang làm gì thế?' },
    { parts: ['他', '正在', '听', '音乐', '呢'], pinyin: 'Tā zhèngzài tīng yīnyuè ne.', vi: 'Anh ấy đang nghe nhạc.' },
    { parts: ['我', '正', '听', '课文', '录音', '呢'], pinyin: 'Wǒ zhèng tīng kèwén lùyīn ne.', vi: 'Tôi đang nghe băng bài khóa.' },
    { parts: ['下午', '你', '有', '事儿', '吗'], pinyin: 'Xiàwǔ nǐ yǒu shìr ma?', vi: 'Chiều nay bạn có việc không?' },
    { parts: ['我们', '一起', '去', '书店', '好', '吗'], pinyin: 'Wǒmen yìqǐ qù shūdiàn, hǎo ma?', vi: 'Chúng ta cùng đi hiệu sách nhé?' },
    { parts: ['你', '要', '买', '什么', '书'], pinyin: 'Nǐ yào mǎi shénme shū?', vi: 'Bạn muốn mua sách gì?' },
    { parts: ['咱们', '怎么', '去', '呢'], pinyin: 'Zánmen zěnme qù ne?', vi: 'Chúng mình đi bằng cách nào nhỉ?' },
    { parts: ['坐', '车', '去', '吧'], pinyin: 'Zuò chē qù ba.', vi: 'Đi xe nhé.' },
    { parts: ['坐', '车', '太', '挤'], pinyin: 'Zuò chē tài jǐ.', vi: 'Đi xe buýt đông quá.' },
    { parts: ['骑', '车', '去', '怎么样'], pinyin: 'Qí chē qù zěnmeyàng?', vi: 'Đi xe đạp thì sao?' },
    { parts: ['你们', '有', '几', '门', '课'], pinyin: 'Nǐmen yǒu jǐ mén kè?', vi: 'Các bạn có mấy môn học?' },
    { parts: ['现在', '只', '有', '四', '门', '课'], pinyin: 'Xiànzài zhǐ yǒu sì mén kè.', vi: 'Bây giờ chỉ có bốn môn.' },
    { parts: ['林', '老师', '教', '你们', '什么'], pinyin: 'Lín lǎoshī jiāo nǐmen shénme?', vi: 'Thầy Lâm dạy các bạn môn gì?' },
    { parts: ['她', '教', '我们', '听力', '和', '阅读'], pinyin: 'Tā jiāo wǒmen tīnglì hé yuèdú.', vi: 'Cô ấy dạy chúng tôi nghe và đọc.' },
    { parts: ['谁', '教', '你们', '口语', '课'], pinyin: 'Shéi jiāo nǐmen kǒuyǔ kè?', vi: 'Ai dạy các bạn khẩu ngữ?' },
    { parts: ['王', '老师', '教', '我们', '课文', '和', '语法'], pinyin: 'Wáng lǎoshī jiāo wǒmen kèwén hé yǔfǎ.', vi: 'Thầy Vương dạy chúng tôi bài khóa và ngữ pháp.' },
    { parts: ['玛丽', '给', '我', '一', '本', '英文', '杂志'], pinyin: 'Mǎlì gěi wǒ yì běn Yīngwén zázhì.', vi: 'Mary đưa cho tôi một quyển tạp chí tiếng Anh.' },
    { parts: ['我', '问', '老师', '一', '个', '问题'], pinyin: 'Wǒ wèn lǎoshī yí ge wèntí.', vi: 'Tôi hỏi thầy một câu hỏi.' },
  ],
  writeChars: ['舍', '正', '录', '教', '乐', '事', '想'],
  drills: [
    {
      title: 'Phân biệt âm và thanh điệu', hint: 'Đọc từng cặp, chú ý thanh điệu và âm đầu.',
      items: [
        { h: '怎么', p: 'zěnme' }, { h: '这么', p: 'zhème' }, { h: '时候', p: 'shíhou' }, { h: '石头', p: 'shítou' },
        { h: '音乐', p: 'yīnyuè' }, { h: '英语', p: 'Yīngyǔ' }, { h: '书店', p: 'shūdiàn' }, { h: '水电', p: 'shuǐ diàn' },
        { h: '现在', p: 'xiànzài' }, { h: '刚才', p: 'gāngcái' }, { h: '体育', p: 'tǐyù' }, { h: '地理', p: 'dìlǐ' },
      ],
    },
    {
      title: 'Đọc liền nhiều âm tiết (多音节连读)', hint: 'Từ bắt đầu bằng 公共 / 公用 / 公关: nhấn âm cuối.',
      items: [
        { h: '公共厕所', p: 'gōnggòng cèsuǒ' }, { h: '公共交通', p: 'gōnggòng jiāotōng' }, { h: '公用电话', p: 'gōngyòng diànhuà' }, { h: '公关小姐', p: 'gōngguān xiǎojiě' },
      ],
    },
    {
      title: 'Đọc to các cụm từ (朗读): 怎么 + động từ', hint: 'Hỏi cách thức.',
      items: [
        { h: '怎么去', p: 'zěnme qù' }, { h: '怎么走', p: 'zěnme zǒu' }, { h: '怎么写', p: 'zěnme xiě' },
        { h: '怎么读', p: 'zěnme dú' }, { h: '怎么用', p: 'zěnme yòng' }, { h: '怎么坐车', p: 'zěnme zuò chē' },
      ],
    },
    {
      title: 'Đọc to các cụm từ (朗读): hành động đang diễn ra', hint: 'Dạng 在/正/正在 + động từ + 呢.',
      items: [
        { h: '他在听音乐', p: 'tā zài tīng yīnyuè' }, { h: '我在看信', p: 'wǒ zài kàn xìn' }, { h: '他在看电视', p: 'tā zài kàn diànshì' },
        { h: '正看电视呢', p: 'zhèng kàn diànshì ne' }, { h: '正听录音呢', p: 'zhèng tīng lùyīn ne' }, { h: '正跟朋友聊天呢', p: 'zhèng gēn péngyou liáotiān ne' },
        { h: '正在写信呢', p: 'zhèngzài xiě xìn ne' }, { h: '正在打电话呢', p: 'zhèngzài dǎ diànhuà ne' }, { h: '正在买东西呢', p: 'zhèngzài mǎi dōngxi ne' },
        { h: '王老师教我们语法', p: 'Wáng lǎoshī jiāo wǒmen yǔfǎ' }, { h: '我问你一个问题', p: 'wǒ wèn nǐ yí ge wèntí' }, { h: '姐姐给我一本词典', p: 'jiějie gěi wǒ yì běn cídiǎn' },
      ],
    },
    {
      title: 'Từ bổ sung (补充生词)', hint: 'Dùng để thay thế trong các mẫu câu bên dưới.',
      items: [
        { h: '打电话', p: 'dǎ diànhuà', m: 'gọi điện thoại' }, { h: '飞机', p: 'fēijī', m: 'máy bay' }, { h: '火车', p: 'huǒchē', m: 'tàu hỏa' },
        { h: '走路', p: 'zǒu lù', m: 'đi bộ' }, { h: '打的', p: 'dǎ dī', m: 'đi taxi' },
      ],
    },
    {
      title: 'Thay thế: 他在做什么呢? 他在听录音呢', hint: 'Thay hoạt động.',
      items: [
        { h: '他在听音乐呢。', p: 'Tā zài tīng yīnyuè ne.' }, { h: '他在看电视呢。', p: 'Tā zài kàn diànshì ne.' }, { h: '他在读课文呢。', p: 'Tā zài dú kèwén ne.' },
        { h: '他在预习生词呢。', p: 'Tā zài yùxí shēngcí ne.' }, { h: '他在写汉字呢。', p: 'Tā zài xiě Hànzì ne.' }, { h: '他在复习语法呢。', p: 'Tā zài fùxí yǔfǎ ne.' },
      ],
    },
    {
      title: 'Thay thế: 你去的时候，他正在做什么呢?', hint: 'Thay hoạt động của người kia.',
      items: [
        { h: '我去的时候，他正在看照片呢。', p: 'Wǒ qù de shíhou, tā zhèngzài kàn zhàopiàn ne.' }, { h: '我去的时候，他正在聊天儿呢。', p: 'Wǒ qù de shíhou, tā zhèngzài liáotiānr ne.' },
        { h: '我去的时候，他正在听音乐呢。', p: 'Wǒ qù de shíhou, tā zhèngzài tīng yīnyuè ne.' }, { h: '我去的时候，他正在读课文呢。', p: 'Wǒ qù de shíhou, tā zhèngzài dú kèwén ne.' },
        { h: '我去的时候，他正在做练习呢。', p: 'Wǒ qù de shíhou, tā zhèngzài zuò liànxí ne.' }, { h: '我去的时候，他正在写汉字呢。', p: 'Wǒ qù de shíhou, tā zhèngzài xiě Hànzì ne.' },
      ],
    },
    {
      title: 'Thay thế: 我们怎么去? 骑车去吧', hint: 'Thay phương tiện.',
      items: [
        { h: '坐车去吧。', p: 'Zuò chē qù ba.' }, { h: '坐火车去吧。', p: 'Zuò huǒchē qù ba.' }, { h: '坐飞机去吧。', p: 'Zuò fēijī qù ba.' },
        { h: '走路去吧。', p: 'Zǒu lù qù ba.' }, { h: '打的去吧。', p: 'Dǎ dī qù ba.' },
      ],
    },
    {
      title: 'Thay thế: 林老师教你们什么? 她教我们听力', hint: 'Thay thầy cô và môn học.',
      items: [
        { h: '王老师教我们语法。', p: 'Wáng lǎoshī jiāo wǒmen yǔfǎ.' }, { h: '谢老师教我们口语。', p: 'Xiè lǎoshī jiāo wǒmen kǒuyǔ.' },
        { h: '马老师教我们阅读。', p: 'Mǎ lǎoshī jiāo wǒmen yuèdú.' }, { h: '张老师教我们汉字。', p: 'Zhāng lǎoshī jiāo wǒmen Hànzì.' },
      ],
    },
    {
      title: 'Từ trong hình (看图说话)', hint: 'Sách có 10 hình: hỏi 他/她(们)正在做什么? Từ bổ sung: 跳舞, 唱歌, 照相, 游泳.',
      items: [
        { h: '跳舞', p: 'tiào wǔ', m: 'nhảy múa' }, { h: '唱歌', p: 'chàng gē', m: 'hát' }, { h: '照相', p: 'zhào xiàng', m: 'chụp ảnh' }, { h: '游泳', p: 'yóu yǒng', m: 'bơi' },
      ],
    },
    {
      title: 'Thực hành nói (成段表达)', hint: 'Từ bổ sung: 电话卡 diànhuàkǎ, 服务员 fúwùyuán. Đọc to cả đoạn.',
      items: [
        { h: '玛丽来找我的时候，我正在听课文录音呢。我问她有什么事，她说，下午要去书店买书，问我想不想跟她一起去。我也正想去书店。我问她要买什么书，她说，她没有《汉英词典》，想买一本。我也想买一本《汉英词典》。我问她怎么去，她说坐车去，我说，今天星期六，坐车太挤，书店不太远，骑车去比较好。她说行，下午，我们一起骑车去书店。', p: 'Mǎlì lái zhǎo wǒ de shíhou, wǒ zhèngzài tīng kèwén lùyīn ne. Wǒ wèn tā yǒu shénme shì, tā shuō, xiàwǔ yào qù shūdiàn mǎi shū, wèn wǒ xiǎng bu xiǎng gēn tā yìqǐ qù. Wǒ yě zhèng xiǎng qù shūdiàn. Wǒ wèn tā yào mǎi shénme shū, tā shuō, tā méiyǒu《Hàn-Yīng Cídiǎn》, xiǎng mǎi yì běn. Wǒ yě xiǎng mǎi yì běn《Hàn-Yīng Cídiǎn》. Wǒ wèn tā zěnme qù, tā shuō zuò chē qù, wǒ shuō, jīntiān xīngqīliù, zuò chē tài jǐ, shūdiàn bú tài yuǎn, qí chē qù bǐjiào hǎo. Tā shuō xíng, xiàwǔ, wǒmen yìqǐ qí chē qù shūdiàn.' },
        { h: '玛丽要买电话卡，她问服务员：“小姐，有电话卡吗？”小姐问：“你要100块的还是要50块的？”玛丽说：“我要100块的。”小姐问：“要几张？”玛丽说：“只要一张。”', p: 'Mǎlì yào mǎi diànhuàkǎ, tā wèn fúwùyuán: “Xiǎojiě, yǒu diànhuàkǎ ma?” Xiǎojiě wèn: “Nǐ yào yì bǎi kuài de háishi yào wǔshí kuài de?” Mǎlì shuō: “Wǒ yào yì bǎi kuài de.” Xiǎojiě wèn: “Yào jǐ zhāng?” Mǎlì shuō: “Zhǐ yào yì zhāng.”' },
      ],
    },
  ],
  qa: [
    {
      title: 'Sắp xếp từ thành câu (组句)',
      items: [
        { q: '(1) 教 阅读 林老师 和 我们 听力 →', hint: '林老师教我们听力和阅读。' },
        { q: '(2) 给 一本 我爸爸 我 词典 →', hint: '我爸爸给我一本词典。' },
        { q: '(3) 问题 老师 我们 常常 问 →', hint: '我们常常问老师问题。' },
        { q: '(4) 常常 我 老师 问题 的 回答 →', hint: '我常常回答老师的问题。' },
        { q: '(5) 我 中文 图书馆 一本 借 书 →', hint: '我借了/借一本中文书 (我在图书馆借一本中文书)。' },
        { q: '(6) 买 《汉英词典》 他 想 正 书店 去 呢 →', hint: '他正想去书店买《汉英词典》呢。' },
      ],
    },
    {
      title: 'Thêm tân ngữ phù hợp cho động từ (给下列动词加上适当的宾语)',
      items: [
        { q: 'Ví dụ: 去 → 去哪儿 / 去书店 / 去教室 / 去邮局', hint: 'Mẫu của sách.' },
        { q: '(1) 复习: ______ , ______ , ______ , ______', hint: '复习课文 / 生词 / 语法 / 汉字' },
        { q: '(2) 预习: ______ , ______ , ______ , ______', hint: '预习课文 / 生词 / 语法 / 汉字' },
        { q: '(3) 看: ______ , ______ , ______ , ______', hint: '看书 / 电影 / 电视 / 照片' },
        { q: '(4) 教: ______ , ______ , ______ , ______', hint: '教语法 / 口语 / 听力 / 阅读' },
        { q: '(5) 喝: ______ , ______ , ______ , ______', hint: '喝茶 / 咖啡 / 啤酒 / 水' },
        { q: '(6) 坐: ______ , ______ , ______ , ______', hint: '坐车 / 火车 / 飞机 / 出租车' },
      ],
    },
    {
      title: 'Xem hình nói chuyện (看图说话)',
      items: [
        { q: 'Mẫu: A: 他/她(们)正在做什么? B: ______ 。', hint: 'B: 他正在… (看书 / 看报 / 跳舞 / 唱歌 / 喝茶 / 睡觉 / 照相 / 游泳 / 买东西 / 吃饭)' },
        { q: '(3) 跳舞 (tiào wǔ)', hint: '他们正在跳舞。' },
        { q: '(4) 唱歌 (chàng gē)', hint: '她正在唱歌。' },
        { q: '(7) 照相 (zhào xiàng)', hint: '他正在照相。' },
        { q: '(8) 游泳 (yóu yǒng)', hint: '他正在游泳。' },
      ],
    },
    {
      title: 'Trả lời theo thực tế của bạn (根据实际情况回答下列问题)',
      items: [
        { q: '(1) 这个星期六你去哪儿?', hint: '我去… (书店 / 公园 / 超市)' },
        { q: '(2) 你什么时候去?', hint: '我上午/下午/晚上去。' },
        { q: '(3) 你怎么去?', hint: '我坐车去 / 骑车去 / 走路去。' },
        { q: '(4) 你跟谁一起去?', hint: '我跟朋友一起去。' },
        { q: '(5) 晚上你在哪儿吃饭?', hint: '我在食堂 / 宿舍 / 家吃饭。' },
        { q: '(6) 你现在在哪儿学习汉语?', hint: '我在…学习汉语。' },
        { q: '(7) 你们有几个老师?', hint: '我们有…个老师。' },
        { q: '(8) 谁教你们课文和语法?', hint: '…老师教我们课文和语法。' },
      ],
    },
  ],
}
