import type { Lesson } from './types'

const G = '关经理 Guān jīngli'
const W = '王老师 Wáng lǎoshī'
const T = '田芳 Tián Fāng'
const Z = '张东 Zhāng Dōng'

export const lesson14: Lesson = {
  id: 14,
  title: 'Xe của bạn mới hay cũ',
  hanzi: '你的车是新的还是旧的',
  pinyin: 'Nǐ de chē shì xīn de háishi jiù de',
  vi: 'Xe của bạn mới hay cũ',
  intro: 'Hỏi thăm sức khỏe và công việc; câu chủ vị làm vị ngữ; câu hỏi lựa chọn (…还是…?); câu hỏi rút gọn (…呢?); 有点儿; màu sắc và phương tiện; ngữ điệu câu hỏi lựa chọn và câu hỏi 呢.',
  dialogue: [
    { who: 'A', name: G, scene: '(一) 您身体好吗 – Sức khỏe của thầy có tốt không', hanzi: '王老师，好久不见了。', pinyin: 'Wáng lǎoshī, hǎojiǔ bú jiàn le.', vi: 'Thầy Vương, lâu lắm không gặp.' },
    { who: 'B', name: W, hanzi: '啊！关经理，欢迎，欢迎！', pinyin: 'À! Guān jīnglǐ, huānyíng, huānyíng!', vi: 'À! Giám đốc Quan, hoan nghênh, hoan nghênh!' },
    { who: 'A', name: G, hanzi: '您身体好吗？', pinyin: 'Nín shēntǐ hǎo ma?', vi: 'Sức khỏe của thầy có tốt không?' },
    { who: 'B', name: W, hanzi: '很好。您身体怎么样？', pinyin: 'Hěn hǎo. Nín shēntǐ zěnmeyàng?', vi: 'Rất tốt. Sức khỏe của ông thế nào?' },
    { who: 'A', name: G, hanzi: '马马虎虎。', pinyin: 'Mǎmahūhū.', vi: 'Tàm tạm.' },
    { who: 'B', name: W, hanzi: '最近工作忙不忙？', pinyin: 'Zuìjìn gōngzuò máng bu máng?', vi: 'Gần đây công việc có bận không?' },
    { who: 'A', name: G, hanzi: '不太忙，您呢？', pinyin: 'Bú tài máng, nín ne?', vi: 'Không bận lắm, còn thầy?' },
    { who: 'B', name: W, hanzi: '刚开学，有点儿忙。喝点儿什么？茶还是咖啡？', pinyin: 'Gāng kāi xué, yǒudiǎnr máng. Hē diǎnr shénme? Chá háishi kāfēi?', vi: 'Mới khai giảng, hơi bận. Ông uống gì? Trà hay cà phê?' },
    { who: 'A', name: G, hanzi: '喝杯茶吧！', pinyin: 'Hē bēi chá ba!', vi: 'Cho tôi một tách trà nhé!' },
    { who: 'A', name: T, scene: '(二) 你的自行车是新的还是旧的 – Xe đạp của bạn mới hay cũ (dưới tòa nhà có rất nhiều xe đạp, sau giờ học Điền Phương tìm xe của mình)', hanzi: '我的车呢？', pinyin: 'Wǒ de chē ne?', vi: 'Xe của tôi đâu rồi nhỉ?' },
    { who: 'B', name: Z, hanzi: '你的车是什么颜色的？', pinyin: 'Nǐ de chē shì shénme yánsè de?', vi: 'Xe của bạn màu gì?' },
    { who: 'A', name: T, hanzi: '蓝的。', pinyin: 'Lán de.', vi: 'Màu xanh dương.' },
    { who: 'B', name: Z, hanzi: '是新的还是旧的？', pinyin: 'Shì xīn de háishi jiù de?', vi: 'Mới hay cũ?' },
    { who: 'A', name: T, hanzi: '新的。', pinyin: 'Xīn de.', vi: 'Mới.' },
    { who: 'B', name: Z, hanzi: '那辆蓝的是不是你的？', pinyin: 'Nà liàng lán de shì bu shì nǐ de?', vi: 'Chiếc màu xanh kia có phải của bạn không?' },
    { who: 'A', name: T, hanzi: '哪辆？', pinyin: 'Nǎ liàng?', vi: 'Chiếc nào?' },
    { who: 'B', name: Z, hanzi: '那辆。', pinyin: 'Nà liàng.', vi: 'Chiếc kia.' },
    { who: 'A', name: T, hanzi: '不是。……啊，我的车在那儿呢。', pinyin: 'Bú shì. ……À, wǒ de chē zài nàr ne.', vi: 'Không phải. … À, xe của tôi ở đằng kia kìa.' },
  ],
  dialogueTip: 'Hỏi lựa chọn: <b>A 还是 B?</b> (A hay B?), chỉ đáp một trong hai, không đáp 是/不是. Hỏi rút gọn: <b>您呢?</b> (còn bạn thì sao?), <b>我的车呢?</b> (xe của tôi đâu?). <b>有点儿 + tính từ</b> = hơi… (thường chê nhẹ). <b>啊</b> đọc thanh 4 nghĩa "à, hiểu rồi".',
  slowSay: '你的车是新的还是旧的',
  vocab: [
    { hanzi: '经理', pinyin: 'jīnglǐ', pos: 'danh từ', meaning: 'giám đốc, quản lý', han_viet: 'kinh lý' },
    { hanzi: '好久', pinyin: 'hǎojiǔ', pos: 'danh từ', meaning: 'rất lâu', han_viet: 'hảo cửu' },
    { hanzi: '啊', pinyin: 'à', pos: 'thán từ', meaning: 'à (chợt hiểu ra)', han_viet: '' },
    { hanzi: '马马虎虎', pinyin: 'mǎmahūhū', pos: 'tính từ', meaning: 'tàm tạm, qua loa', han_viet: 'mã mã hổ hổ' },
    { hanzi: '最近', pinyin: 'zuìjìn', pos: 'danh từ', meaning: 'gần đây', han_viet: 'tối cận' },
    { hanzi: '刚', pinyin: 'gāng', pos: 'phó từ', meaning: 'vừa mới', han_viet: 'cương' },
    { hanzi: '开学', pinyin: 'kāi xué', pos: 'động từ', meaning: 'khai giảng, vào học kỳ mới', han_viet: 'khai học' },
    { hanzi: '开', pinyin: 'kāi', pos: 'động từ', meaning: 'mở, bắt đầu', han_viet: 'khai' },
    { hanzi: '有点儿', pinyin: 'yǒudiǎnr', pos: 'phó từ', meaning: 'hơi, một chút (thường điều không như ý)', han_viet: '' },
    { hanzi: '点儿', pinyin: 'diǎnr', pos: 'lượng từ', meaning: 'một chút, một ít', han_viet: '' },
    { hanzi: '还是', pinyin: 'háishi', pos: 'liên từ', meaning: 'hay là (trong câu hỏi lựa chọn)', han_viet: 'hoàn thị' },
    { hanzi: '咖啡', pinyin: 'kāfēi', pos: 'danh từ', meaning: 'cà phê', han_viet: 'già phê' },
    { hanzi: '杯', pinyin: 'bēi', pos: 'danh/lượng từ', meaning: 'tách, cốc, ly', han_viet: 'bôi' },
    { hanzi: '车', pinyin: 'chē', pos: 'danh từ', meaning: 'xe', han_viet: 'xa' },
    { hanzi: '自行车', pinyin: 'zìxíngchē', pos: 'danh từ', meaning: 'xe đạp', han_viet: 'tự hành xa' },
    { hanzi: '汽车', pinyin: 'qìchē', pos: 'danh từ', meaning: 'ô tô', han_viet: 'khí xa' },
    { hanzi: '摩托车', pinyin: 'mótuōchē', pos: 'danh từ', meaning: 'xe máy', han_viet: 'ma thác xa' },
    { hanzi: '出租车', pinyin: 'chūzūchē', pos: 'danh từ', meaning: 'taxi', han_viet: 'xuất tô xa' },
    { hanzi: '颜色', pinyin: 'yánsè', pos: 'danh từ', meaning: 'màu sắc', han_viet: 'nhan sắc' },
    { hanzi: '蓝', pinyin: 'lán', pos: 'tính từ', meaning: 'xanh dương', han_viet: 'lam' },
    { hanzi: '辆', pinyin: 'liàng', pos: 'lượng từ', meaning: 'chiếc (xe)', han_viet: 'lượng' },
    { hanzi: '关', pinyin: 'Guān', pos: 'tên riêng', meaning: 'Quan (họ của người Trung Quốc)', han_viet: 'Quan' },
  ],
  sections: [
    {
      kind: 'examples', label: 'Ngữ điệu câu hỏi lựa chọn', title: 'Ngữ điệu câu hỏi lựa chọn (选择问句的语调)',
      intro: 'Câu hỏi lựa chọn có giọng điệu tương đối cao, tốc độ chậm; hai phần để chọn đều được nhấn; từ nối 还是 đọc nhẹ. Trước 还是 lên giọng, sau 还是 xuống giọng. Dấu ’ đặt trước thành phần được nhấn.',
      groups: [
        { label: 'Nhấn hai vế, 还是 đọc nhẹ; vế đầu lên, vế sau xuống', items: [['你的车是’新的还是’旧的？', 'nǐ de chē shì ’xīn de háishi ’jiù de?', 'lên giọng trước 还是, xuống giọng cuối câu'], ['你’今天去还是’明天去？', 'nǐ ’jīntiān qù háishi ’míngtiān qù?', 'lên giọng trước 还是, xuống giọng cuối câu']] },
      ],
    },
    {
      kind: 'examples', label: 'Ngữ điệu câu hỏi 呢', title: 'Ngữ điệu câu hỏi rút gọn với 呢 (省略问句的语调)',
      intro: 'Trong câu hỏi rút gọn với 呢, từ đơn âm tiết đứng trước 呢 được nhấn, cuối câu xuống giọng.',
      groups: [
        { label: 'Nhấn từ trước 呢, xuống giọng cuối câu', items: [['’笔呢？', '’bǐ ne?', 'nhấn: bǐ (bút đâu?)'], ['我去银行，’你呢？', 'wǒ qù yínháng, ’nǐ ne?', 'nhấn: nǐ']] },
      ],
    },
  ],
  notes: [
    {
      title: 'Hơi, hơi hơi: 有(一)点儿',
      body: '有(一)点儿 + tính từ nghĩa là "hơi…, một chút…", thường dùng cho điều không như ý. 我最近有点儿忙 (gần đây tôi hơi bận), 这个箱子有点儿大 (cái vali này hơi to). Khác với 一点儿 đứng sau động từ hoặc tính từ: 喝点儿什么 (uống chút gì).',
      say: '我最近有点儿忙',
    },
    {
      title: 'Thán từ 啊 và trợ từ 呢 xác nhận',
      body: '啊 có nhiều nghĩa tùy thanh điệu. Đọc thanh 4 (à) biểu thị "à, hiểu rồi, nhớ ra rồi": 啊，知道了 (à, biết rồi). 呢 đứng cuối câu trần thuật để xác nhận: 我的车在那儿呢 (xe của tôi ở đằng kia đấy).',
      say: '啊，我的车在那儿呢',
    },
    {
      title: 'Câu chủ vị làm vị ngữ (主谓谓语句)',
      body: 'Khi cụm chủ vị làm vị ngữ để nói rõ hoặc miêu tả chủ ngữ lớn thì gọi là câu chủ vị làm vị ngữ. 你身体怎么样? – 我身体很好。她工作忙不忙? – 她工作不忙。Cấu trúc: chủ ngữ lớn (我, 她) + [chủ ngữ nhỏ (身体, 工作) + vị ngữ nhỏ (很好, 忙)]. Tiếng Việt cũng nói "tôi sức khỏe rất tốt", nên dễ làm quen.',
      say: '我身体很好',
    },
    {
      title: 'Câu hỏi lựa chọn: A 还是 B',
      body: 'Khi đáp án có hai khả năng trở lên thì dùng 还是 để hỏi: 你的车是新的还是旧的? – 我的车是新的。你今天去还是明天去? – 我明天去。你喝点儿什么，茶还是咖啡? – 喝点儿茶吧。Trả lời bằng cách chọn một vế, không đáp 是/不是 và không thêm 吗.',
      say: '你今天去还是明天去',
    },
    {
      title: 'Câu hỏi rút gọn: …呢? (1) hỏi nơi chốn',
      body: 'Khi không có ngữ cảnh, "danh từ + 呢?" là hỏi nơi chốn: 我的书呢? (= 我的书在哪儿?), 我的自行车呢? (= 我的自行车在哪儿?).',
      say: '我的自行车呢',
    },
    {
      title: 'Câu hỏi rút gọn: …呢? (2) theo ngữ cảnh',
      body: 'Khi có ngữ cảnh thì nghĩa hiểu theo ngữ cảnh. 这是谁的包? – 我的。那个呢? (= 那个包是谁的?) – 我朋友的。你是哪国人? – 我是英国人。你呢? (= 你是哪国人?) – 我是日本人。最近工作忙不忙? – 不太忙，您呢? (= 您忙吗?)',
      say: '我是英国人，你呢',
    },
    {
      title: 'Trọng âm và ngữ điệu: câu hỏi lựa chọn và 呢',
      body: 'Câu hỏi lựa chọn: giọng cao, chậm, hai vế để chọn đều nhấn, 还是 đọc nhẹ (trước 还是 lên, sau 还是 xuống). Câu hỏi 呢: từ đơn âm tiết trước 呢 nhấn, cuối câu xuống giọng.',
      say: '你的车是新的还是旧的',
    },
    {
      title: 'Lượng từ 辆 và các loại xe',
      body: '辆 là lượng từ cho xe: 一辆车, 那辆蓝的, 一辆新车. Các loại xe: 自行车 (xe đạp), 汽车 (ô tô), 摩托车 (xe máy), 出租车 (taxi). Hỏi màu: 你的车是什么颜色的? Đáp: 蓝的 (dùng cụm 的, Bài 13).',
      say: '那辆蓝的是不是你的',
    },
    {
      title: 'Lời chào lâu ngày gặp và đáp tạm ổn',
      body: '好久不见了 nghĩa là "lâu lắm không gặp" (了 chỉ sự thay đổi tình trạng). Hỏi thăm: 您身体好吗? 您身体怎么样? Đáp thông thường: 很好, hoặc 马马虎虎 (tàm tạm, không tốt cũng không xấu).',
      say: '马马虎虎',
    },
  ],
  sentences: [
    { parts: ['王', '老师', '好久', '不', '见', '了'], pinyin: 'Wáng lǎoshī, hǎojiǔ bú jiàn le.', vi: 'Thầy Vương, lâu lắm không gặp.' },
    { parts: ['您', '身体', '好', '吗'], pinyin: 'Nín shēntǐ hǎo ma?', vi: 'Sức khỏe của thầy có tốt không?' },
    { parts: ['您', '身体', '怎么样'], pinyin: 'Nín shēntǐ zěnmeyàng?', vi: 'Sức khỏe của ông thế nào?' },
    { parts: ['最近', '工作', '忙', '不', '忙'], pinyin: 'Zuìjìn gōngzuò máng bu máng?', vi: 'Gần đây công việc có bận không?' },
    { parts: ['刚', '开学', '有点儿', '忙'], pinyin: 'Gāng kāi xué, yǒudiǎnr máng.', vi: 'Mới khai giảng, hơi bận.' },
    { parts: ['茶', '还是', '咖啡'], pinyin: 'Chá háishi kāfēi?', vi: 'Trà hay cà phê?' },
    { parts: ['喝', '杯', '茶', '吧'], pinyin: 'Hē bēi chá ba!', vi: 'Cho tôi một tách trà nhé!' },
    { parts: ['我', '的', '车', '呢'], pinyin: 'Wǒ de chē ne?', vi: 'Xe của tôi đâu?' },
    { parts: ['你', '的', '车', '是', '什么', '颜色', '的'], pinyin: 'Nǐ de chē shì shénme yánsè de?', vi: 'Xe của bạn màu gì?' },
    { parts: ['是', '新', '的', '还是', '旧', '的'], pinyin: 'Shì xīn de háishi jiù de?', vi: 'Mới hay cũ?' },
    { parts: ['那', '辆', '蓝', '的', '是', '不', '是', '你', '的'], pinyin: 'Nà liàng lán de shì bu shì nǐ de?', vi: 'Chiếc màu xanh kia có phải của bạn không?' },
    { parts: ['我', '的', '车', '在', '那儿', '呢'], pinyin: 'Wǒ de chē zài nàr ne.', vi: 'Xe của tôi ở đằng kia kìa.' },
    { parts: ['你', '今天', '去', '还是', '明天', '去'], pinyin: 'Nǐ jīntiān qù háishi míngtiān qù?', vi: 'Hôm nay bạn đi hay ngày mai đi?' },
    { parts: ['他', '是', '日本', '学生', '还是', '韩国', '学生'], pinyin: 'Tā shì Rìběn xuésheng háishi Hánguó xuésheng?', vi: 'Anh ấy là học sinh Nhật hay học sinh Hàn?' },
    { parts: ['你', '喝', '茶', '还是', '喝', '咖啡'], pinyin: 'Nǐ hē chá háishi hē kāfēi?', vi: 'Bạn uống trà hay uống cà phê?' },
    { parts: ['我', '身体', '很', '好'], pinyin: 'Wǒ shēntǐ hěn hǎo.', vi: 'Sức khỏe của tôi rất tốt.' },
    { parts: ['她', '工作', '不', '忙'], pinyin: 'Tā gōngzuò bù máng.', vi: 'Công việc của cô ấy không bận.' },
  ],
  writeChars: ['刚', '近', '欢', '迎', '开', '点', '儿', '喝', '自', '车', '色', '蓝'],
  drills: [
    {
      title: 'Phân biệt âm và thanh điệu', hint: 'Đọc từng cặp, chú ý thanh điệu và âm đầu.',
      items: [
        { h: '工作', p: 'gōngzuò' }, { h: '动作', p: 'dòngzuò' }, { h: '汽车', p: 'qìchē' }, { h: '骑车', p: 'qí chē' },
        { h: '还是', p: 'háishi' }, { h: '孩子', p: 'háizi' }, { h: '最近', p: 'zuìjìn' }, { h: '水晶', p: 'shuǐjīng' },
        { h: '颜色', p: 'yánsè' }, { h: '眼色', p: 'yǎnsè' }, { h: '或者', p: 'huòzhě' }, { h: '火车', p: 'huǒchē' },
      ],
    },
    {
      title: 'Đọc liền nhiều âm tiết (多音节连读)', hint: 'Đọc to các từ về xe cộ.',
      items: [
        { h: '自行车', p: 'zìxíngchē' }, { h: '出租车', p: 'chūzūchē' }, { h: '吉普车', p: 'jípǔchē' }, { h: '摩托车', p: 'mótuōchē' },
        { h: '公共汽车', p: 'gōnggòng qìchē' }, { h: '无轨电车', p: 'wúguǐ diànchē' }, { h: '轻轨电车', p: 'qīngguǐ diànchē' },
      ],
    },
    {
      title: 'Đọc to các cụm từ (朗读): mới, cũ và 有点儿', hint: 'So sánh 新 và 旧; 有点儿 + tính từ.',
      items: [
        { h: '新书', p: 'xīn shū' }, { h: '新车', p: 'xīn chē' }, { h: '新词典', p: 'xīn cídiǎn' }, { h: '新地图', p: 'xīn dìtú' }, { h: '新毛衣', p: 'xīn máoyī' }, { h: '新雨伞', p: 'xīn yǔsǎn' },
        { h: '旧书', p: 'jiù shū' }, { h: '旧车', p: 'jiù chē' }, { h: '旧词典', p: 'jiù cídiǎn' }, { h: '旧地图', p: 'jiù dìtú' }, { h: '旧毛衣', p: 'jiù máoyī' }, { h: '旧雨伞', p: 'jiù yǔsǎn' },
        { h: '有点儿大', p: 'yǒudiǎnr dà' }, { h: '有点儿小', p: 'yǒudiǎnr xiǎo' }, { h: '有点儿重', p: 'yǒudiǎnr zhòng' }, { h: '有点儿轻', p: 'yǒudiǎnr qīng' },
        { h: '有点儿贵', p: 'yǒudiǎnr guì' }, { h: '有点儿难', p: 'yǒudiǎnr nán' }, { h: '有点儿多', p: 'yǒudiǎnr duō' }, { h: '有点儿少', p: 'yǒudiǎnr shǎo' },
      ],
    },
    {
      title: 'Từ bổ sung: trạng thái, quần áo, màu sắc (补充生词)', hint: 'Dùng để thay thế trong các mẫu câu bên dưới.',
      items: [
        { h: '累', p: 'lèi', m: 'mệt' }, { h: '困', p: 'kùn', m: 'buồn ngủ' }, { h: '饿', p: 'è', m: 'đói' }, { h: '冷', p: 'lěng', m: 'lạnh' }, { h: '渴', p: 'kě', m: 'khát' },
        { h: '衬衣', p: 'chènyī', m: 'áo sơ mi' }, { h: '毛衣', p: 'máoyī', m: 'áo len' }, { h: '黄', p: 'huáng', m: 'vàng' }, { h: '灰', p: 'huī', m: 'xám' }, { h: '绿', p: 'lǜ', m: 'xanh lá' },
        { h: '照相机', p: 'zhàoxiàngjī', m: 'máy ảnh' },
      ],
    },
    {
      title: 'Thay thế: 你身体怎么样? 很好', hint: 'Thay người được hỏi.',
      items: [
        { h: '她身体很好。', p: 'Tā shēntǐ hěn hǎo.' }, { h: '爸爸身体很好。', p: 'Bàba shēntǐ hěn hǎo.' }, { h: '妈妈身体很好。', p: 'Māma shēntǐ hěn hǎo.' },
        { h: '王老师身体很好。', p: 'Wáng lǎoshī shēntǐ hěn hǎo.' }, { h: '你妈妈身体很好。', p: 'Nǐ māma shēntǐ hěn hǎo.' }, { h: '我朋友身体很好。', p: 'Wǒ péngyou shēntǐ hěn hǎo.' },
      ],
    },
    {
      title: 'Thay thế: 忙不忙? 很忙', hint: 'Thay tính từ trạng thái.',
      items: [
        { h: '我很累。', p: 'Wǒ hěn lèi.' }, { h: '我很困。', p: 'Wǒ hěn kùn.' }, { h: '我很饿。', p: 'Wǒ hěn è.' }, { h: '我很冷。', p: 'Wǒ hěn lěng.' }, { h: '我很渴。', p: 'Wǒ hěn kě.' },
      ],
    },
    {
      title: 'Thay thế: 你的自行车是什么颜色的? 蓝的', hint: 'Thay đồ vật và màu sắc.',
      items: [
        { h: '我的衬衣是白的。', p: 'Wǒ de chènyī shì bái de.' }, { h: '我的毛衣是红的。', p: 'Wǒ de máoyī shì hóng de.' }, { h: '我的包是灰的。', p: 'Wǒ de bāo shì huī de.' },
        { h: '我的雨伞是黄的。', p: 'Wǒ de yǔsǎn shì huáng de.' }, { h: '我的箱子是绿的。', p: 'Wǒ de xiāngzi shì lǜ de.' }, { h: '我的鞋是黑的。', p: 'Wǒ de xié shì hēi de.' },
      ],
    },
    {
      title: 'Thay thế: 你喝茶还是喝咖啡? 咖啡', hint: 'Thay cặp lựa chọn.',
      items: [
        { h: '吃米饭还是吃馒头', p: 'chī mǐfàn háishi chī mántou' }, { h: '喝啤酒还是喝水', p: 'hē píjiǔ háishi hē shuǐ' }, { h: '去邮局还是去银行', p: 'qù yóujú háishi qù yínháng' },
        { h: '买苹果还是买橘子', p: 'mǎi píngguǒ háishi mǎi júzi' }, { h: '买杂志还是买报纸', p: 'mǎi zázhì háishi mǎi bàozhǐ' },
      ],
    },
    {
      title: 'Thực hành nói (成段表达): Điền Phương tìm xe', hint: 'Đọc đoạn mẫu, có từ bổ sung: 忽然 hūrán, 看见 kànjiàn, 它 tā, 送 sòng, 好看 hǎokàn, 骑 qí, 每天 měitiān, 来 lái.',
      items: [
        { h: '教学楼前边的自行车很多。田芳下课后要找自己的自行车。田芳的自行车是新的。', p: 'Jiàoxuélóu qiánbian de zìxíngchē hěn duō. Tián Fāng xià kè hòu yào zhǎo zìjǐ de zìxíngchē. Tián Fāng de zìxíngchē shì xīn de.' },
        { h: '张东问她，你的自行车是什么颜色的？田芳说是蓝的。张东说，那辆蓝车是不是你的？田芳说，我的自行车是新的，不是旧的，那辆不是我的。', p: 'Zhāng Dōng wèn tā, nǐ de zìxíngchē shì shénme yánsè de? Tián Fāng shuō shì lán de. Zhāng Dōng shuō, nà liàng lán chē shì bu shì nǐ de? Tián Fāng shuō, wǒ de zìxíngchē shì xīn de, bú shì jiù de, nà liàng bú shì wǒ de.' },
        { h: '忽然，田芳看见了自己的自行车，她说，啊，我的车在那儿呢。', p: 'Hūrán, Tián Fāng kànjiàn le zìjǐ de zìxíngchē, tā shuō, à, wǒ de chē zài nàr ne.' },
        { h: '我也有一辆自行车，但不是蓝的，是黑的。我的车不新，是一辆旧车。它不是我买的，是一个朋友送的。这辆车不好看，但是很轻，很好骑，我每天骑车来学校。', p: 'Wǒ yě yǒu yí liàng zìxíngchē, dàn bú shì lán de, shì hēi de. Wǒ de chē bù xīn, shì yí liàng jiù chē. Tā bú shì wǒ mǎi de, shì yí ge péngyou sòng de. Zhè liàng chē bù hǎokàn, dànshì hěn qīng, hěn hǎo qí, wǒ měitiān qí chē lái xuéxiào.' },
      ],
    },
  ],
  qa: [
    {
      title: 'Hỏi với 还是 (用"还是"提问)',
      items: [
        { q: 'Ví dụ: 买苹果 / 买橘子 → 你买苹果还是买橘子?', hint: 'Mẫu: A 还是 B?' },
        { q: '(1) 去银行 / 去邮局 →', hint: '你去银行还是去邮局?' },
        { q: '(2) 蓝自行车 / 黑自行车 →', hint: '你要蓝自行车还是黑自行车?' },
        { q: '(3) 喝水 / 喝啤酒 →', hint: '你喝水还是喝啤酒?' },
        { q: '(4) 学习英语 / 学习法语 →', hint: '你学习英语还是学习法语?' },
        { q: '(5) 是学生 / 是老师 →', hint: '你是学生还是老师?' },
        { q: '(6) 新照相机 / 旧照相机 →', hint: '你要新照相机还是旧照相机?' },
      ],
    },
    {
      title: 'Hỏi với 呢 (用"……呢"提问)',
      items: [
        { q: 'Ví dụ: A: 我喝茶，你呢? B: 我也喝茶。', hint: '你呢 = 你喝什么?' },
        { q: '(1) A: 麦克是美国人，______ ? B: 玛丽是英国人。', hint: '玛丽呢?' },
        { q: '(2) A: 这是我的词典，______ ? B: 我的在这儿呢。', hint: '你的呢?' },
        { q: '(3) A: 田芳学习英语，______ ? B: 张东也学习英语。', hint: '张东呢?' },
        { q: '(4) A: 我骑车去学校，______ ? B: 我也骑车去。', hint: '你呢?' },
        { q: '(5) A: 这些是中药，______ ? B: 那些是酒。', hint: '那些呢?' },
        { q: '(6) A: 我的车是蓝的。______ ? B: 黑的。', hint: '你的呢?' },
      ],
    },
    {
      title: 'Sắp xếp từ thành câu (组句)',
      items: [
        { q: 'Ví dụ: 他 日本 是 韩国 学生 还是 →', hint: '他是日本学生还是韩国学生?' },
        { q: '(1) 你的 蓝的 车 是还是 红的 →', hint: '你的车是蓝的还是红的?' },
        { q: '(2) 这辆 车 是 还是 你的 田芳的 →', hint: '这辆车是你的还是田芳的?' },
        { q: '(3) 张东 日语 英语 学习 还是 →', hint: '张东学习日语还是英语?' },
        { q: '(4) 还是 他的 自行车 旧的 新的 是 →', hint: '他的自行车是新的还是旧的?' },
        { q: '(5) 你 喝 茶 咖啡 喝 还是 →', hint: '你喝茶还是喝咖啡?' },
      ],
    },
    {
      title: 'Viết lại câu theo mẫu (按照例句作练习)',
      items: [
        { q: 'Ví dụ: 这是我的箱子。→ 这个箱子是我的。', hint: 'Mẫu: 这是 + định ngữ + danh từ → 这个/件/本… + danh từ + 是 + …的.' },
        { q: '(1) 这是一件红毛衣。→', hint: '这件毛衣是红的。' },
        { q: '(2) 这是王老师的书。→', hint: '这本书是王老师的。' },
        { q: '(3) 这是一本法文词典。→', hint: '这本词典是法文的。' },
        { q: '(4) 这是一辆新车。→', hint: '这辆车是新的。' },
        { q: '(5) 那是田芳的手机。→', hint: '那个手机是田芳的。' },
        { q: '(6) 这是一个旧照相机。→', hint: '这个照相机是旧的。' },
      ],
    },
  ],
}
