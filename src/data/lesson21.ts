import type { Lesson } from './types'

const T = '老师 lǎoshī'
const S = '山本 Shānběn'

/** Quyển 2, Bài 21. */
export const lesson21: Lesson = {
  id: 21,
  title: 'Ngày mai bảy giờ mười lăm chúng ta xuất phát',
  hanzi: '我们明天七点一刻出发',
  pinyin: 'Wǒmen míngtiān qī diǎn yí kè chūfā',
  vi: 'Ngày mai bảy giờ mười lăm chúng ta xuất phát',
  intro: 'Nói giờ giấc (点, 刻, 半, 差); thứ tự trong biểu đạt thời gian; thời gian đứng trước nơi chốn; hậu tố 们; 去/来 + 这儿/那儿; trọng âm số từ + lượng từ, trọng âm của 几.',
  dialogue: [
    { who: 'A', scene: '(一) 我的一天 – Một ngày của tôi (bài đọc)', hanzi: '我每天早上六点半起床，七点吃早饭。差十分八点去教室，八点上课。上午我们有四节课，十二点下课。中午我去食堂吃午饭。午饭以后，我常常去朋友那儿聊天儿。下午没有课的时候，我去图书馆看书，或者跟中国朋友一起练习口语。有时候在宿舍看电影光盘。', pinyin: 'Wǒ měi tiān zǎoshang liù diǎn bàn qǐ chuáng, qī diǎn chī zǎofàn. Chà shí fēn bā diǎn qù jiàoshì, bā diǎn shàng kè. Shàngwǔ wǒmen yǒu sì jié kè, shí’èr diǎn xià kè. Zhōngwǔ wǒ qù shítáng chī wǔfàn. Wǔfàn yǐhòu, wǒ chángchang qù péngyou nàr liáo tiānr. Xiàwǔ méiyǒu kè de shíhou, wǒ qù túshūguǎn kàn shū, huòzhě gēn Zhōngguó péngyou yìqǐ liànxí kǒuyǔ. Yǒu shíhou zài sùshè kàn diànyǐng guāngpán.', vi: 'Mỗi ngày tôi dậy lúc sáu giờ rưỡi, bảy giờ ăn sáng. Tám giờ kém mười đến lớp, tám giờ vào học. Buổi sáng chúng tôi có bốn tiết, mười hai giờ tan học. Buổi trưa tôi đến nhà ăn ăn cơm trưa. Sau bữa trưa, tôi thường đến chỗ bạn trò chuyện. Chiều lúc không có tiết, tôi đến thư viện đọc sách, hoặc cùng bạn người Trung Quốc luyện khẩu ngữ. Đôi khi xem đĩa phim ở ký túc xá.' },
    { who: 'A', hanzi: '四点我去操场锻炼身体。五点回宿舍洗澡，洗衣服，六点半或者七点吃晚饭。晚上我做练习、写汉字、预习课文和生词，然后看看电视、听听音乐，十一点睡觉。', pinyin: 'Sì diǎn wǒ qù cāochǎng duànliàn shēntǐ. Wǔ diǎn huí sùshè xǐzǎo, xǐ yīfu, liù diǎn bàn huòzhě qī diǎn chī wǎnfàn. Wǎnshang wǒ zuò liànxí, xiě Hànzì, yùxí kèwén hé shēngcí, ránhòu kànkan diànshì, tīngting yīnyuè, shíyī diǎn shuì jiào.', vi: 'Bốn giờ tôi ra sân tập thể dục. Năm giờ về ký túc xá tắm, giặt quần áo, sáu giờ rưỡi hoặc bảy giờ ăn tối. Buổi tối tôi làm bài tập, viết chữ Hán, chuẩn bị bài khóa và từ mới, rồi xem tivi, nghe nhạc, mười một giờ đi ngủ.' },
    { who: 'A', name: T, scene: '(二) 明天早上七点一刻出发 – Sáng mai bảy giờ mười lăm xuất phát', hanzi: '同学们，明天我们去爬山。', pinyin: 'Tóngxuémen, míngtiān wǒmen qù pá shān.', vi: 'Các em, ngày mai chúng ta đi leo núi.' },
    { who: 'B', name: S, hanzi: '太好了！老师，您去吗？', pinyin: 'Tài hǎo le! Lǎoshī, nín qù ma?', vi: 'Tuyệt quá! Thưa thầy, thầy có đi không?' },
    { who: 'A', name: T, hanzi: '去。一年级的老师和学生都去。', pinyin: 'Qù. Yī niánjí de lǎoshī hé xuésheng dōu qù.', vi: 'Có. Thầy cô và học sinh năm thứ nhất đều đi.' },
    { who: 'B', name: S, hanzi: '明天什么时候出发？', pinyin: 'Míngtiān shénme shíhou chūfā?', vi: 'Ngày mai khi nào xuất phát?' },
    { who: 'A', name: T, hanzi: '明天早上七点在楼前集合上车，七点一刻准时出发。', pinyin: 'Míngtiān zǎoshang qī diǎn zài lóu qián jíhé shàng chē, qī diǎn yí kè zhǔnshí chūfā.', vi: 'Sáng mai bảy giờ tập trung trước tòa nhà để lên xe, bảy giờ mười lăm đúng giờ xuất phát.' },
    { who: 'B', name: S, hanzi: '中午回来吗？', pinyin: 'Zhōngwǔ huílai ma?', vi: 'Trưa có về không ạ?' },
    { who: 'A', name: T, hanzi: '不回来，要带午饭。', pinyin: 'Bù huílai, yào dài wǔfàn.', vi: 'Không về, phải mang cơm trưa.' },
    { who: 'B', name: S, hanzi: '什么时候回来？', pinyin: 'Shénme shíhou huílai?', vi: 'Khi nào về ạ?' },
    { who: 'A', name: T, hanzi: '下午四点。', pinyin: 'Xiàwǔ sì diǎn.', vi: 'Bốn giờ chiều.' },
  ],
  dialogueTip: 'Giờ: <b>点</b> (giờ), <b>刻</b> (một khắc = 15 phút), <b>半</b> (rưỡi), <b>差</b> (kém). Hỏi giờ: <b>现在几点?</b>. Từ chỉ thời gian đứng <b>trước</b> động từ và trước nơi chốn: 明天早上七点在楼前集合. <b>要带午饭</b> = phải mang theo cơm trưa.',
  slowSay: '我们明天七点一刻出发',
  vocab: [
    { hanzi: '每', pinyin: 'měi', pos: 'đại từ', meaning: 'mỗi, mọi', han_viet: 'mỗi' },
    { hanzi: '早上', pinyin: 'zǎoshang', pos: 'danh từ', meaning: 'buổi sáng sớm', han_viet: 'tảo thượng' },
    { hanzi: '半', pinyin: 'bàn', pos: 'số từ', meaning: 'nửa, rưỡi', han_viet: 'bán' },
    { hanzi: '起床', pinyin: 'qǐ chuáng', pos: 'động từ', meaning: 'thức dậy', han_viet: 'khởi sàng' },
    { hanzi: '床', pinyin: 'chuáng', pos: 'danh từ', meaning: 'giường', han_viet: 'sàng' },
    { hanzi: '早饭', pinyin: 'zǎofàn', pos: 'danh từ', meaning: 'bữa sáng', han_viet: 'tảo phạn' },
    { hanzi: '午饭', pinyin: 'wǔfàn', pos: 'danh từ', meaning: 'bữa trưa', han_viet: 'ngọ phạn' },
    { hanzi: '晚饭', pinyin: 'wǎnfàn', pos: 'danh từ', meaning: 'bữa tối', han_viet: 'vãn phạn' },
    { hanzi: '以后', pinyin: 'yǐhòu', pos: 'danh từ', meaning: 'sau đó, về sau', han_viet: 'dĩ hậu' },
    { hanzi: '差', pinyin: 'chà', pos: 'động/tính từ', meaning: 'kém, thiếu', han_viet: 'sai' },
    { hanzi: '分(钟)', pinyin: 'fēn(zhōng)', pos: 'danh/lượng từ', meaning: 'phút', han_viet: 'phân (chung)' },
    { hanzi: '上课', pinyin: 'shàng kè', pos: 'động từ', meaning: 'lên lớp, vào học', han_viet: 'thượng khóa' },
    { hanzi: '节', pinyin: 'jié', pos: 'lượng từ', meaning: 'tiết (học)', han_viet: 'tiết' },
    { hanzi: '教室', pinyin: 'jiàoshì', pos: 'danh từ', meaning: 'phòng học', han_viet: 'giáo thất' },
    { hanzi: '操场', pinyin: 'cāochǎng', pos: 'danh từ', meaning: 'sân tập, sân vận động', han_viet: 'thao trường' },
    { hanzi: '锻炼', pinyin: 'duànliàn', pos: 'động từ', meaning: 'rèn luyện, tập thể dục', han_viet: 'đoán luyện' },
    { hanzi: '洗澡', pinyin: 'xǐ zǎo', pos: 'động từ', meaning: 'tắm', han_viet: 'tẩy tảo' },
    { hanzi: '洗', pinyin: 'xǐ', pos: 'động từ', meaning: 'giặt, rửa', han_viet: 'tẩy' },
    { hanzi: '然后', pinyin: 'ránhòu', pos: 'phó từ', meaning: 'sau đó, rồi', han_viet: 'nhiên hậu' },
    { hanzi: '睡觉', pinyin: 'shuì jiào', pos: 'động từ', meaning: 'ngủ', han_viet: 'thụy giác' },
    { hanzi: '爬', pinyin: 'pá', pos: 'động từ', meaning: 'leo, trèo', han_viet: 'ba' },
    { hanzi: '们', pinyin: 'men', pos: 'hậu tố', meaning: 'hậu tố số nhiều chỉ người', han_viet: 'môn' },
    { hanzi: '山', pinyin: 'shān', pos: 'danh từ', meaning: 'núi', han_viet: 'sơn' },
    { hanzi: '年级', pinyin: 'niánjí', pos: 'danh từ', meaning: 'lớp, năm học', han_viet: 'niên cấp' },
    { hanzi: '出发', pinyin: 'chūfā', pos: 'động từ', meaning: 'xuất phát', han_viet: 'xuất phát' },
    { hanzi: '前', pinyin: 'qián', pos: 'danh từ', meaning: 'phía trước', han_viet: 'tiền' },
    { hanzi: '集合', pinyin: 'jíhé', pos: 'động từ', meaning: 'tập hợp, tập trung', han_viet: 'tập hợp' },
    { hanzi: '刻', pinyin: 'kè', pos: 'lượng từ', meaning: 'khắc (15 phút)', han_viet: 'khắc' },
    { hanzi: '上车', pinyin: 'shàng chē', pos: 'động từ', meaning: 'lên xe', han_viet: 'thượng xa' },
    { hanzi: '下车', pinyin: 'xià chē', pos: 'động từ', meaning: 'xuống xe', han_viet: 'hạ xa' },
    { hanzi: '准时', pinyin: 'zhǔnshí', pos: 'tính từ', meaning: 'đúng giờ', han_viet: 'chuẩn thời' },
    { hanzi: '带', pinyin: 'dài', pos: 'động từ', meaning: 'mang, đem theo', han_viet: 'đới' },
    { hanzi: '山本', pinyin: 'Shānběn', pos: 'tên riêng', meaning: 'Sơn Bản (tên người Nhật)', han_viet: 'Sơn Bản' },
  ],
  sections: [
    {
      kind: 'examples', label: 'Trọng âm từ', title: 'Trọng âm của từ (词重音): số từ + lượng từ',
      intro: 'Trong cụm số từ + lượng từ, số từ được nhấn, lượng từ đọc nhẹ. Chấm dưới chữ trong sách chỉ chữ được nhấn.',
      groups: [
        { label: 'Số từ nhấn, lượng từ nhẹ', items: [['五本词典', 'wǔ běn cídiǎn', 'nhấn: wǔ'], ['三本书', 'sān běn shū', 'nhấn: sān'], ['六个学生', 'liù ge xuésheng', 'nhấn: liù'], ['七件毛衣', 'qī jiàn máoyī', 'nhấn: qī']] },
      ],
    },
    {
      kind: 'examples', label: 'Trọng âm câu: 几', title: 'Trọng âm của câu (句重音): từ hỏi 几',
      intro: 'Trong câu hỏi, 几 được nhấn. Dấu ’ đặt trước phần được nhấn.',
      groups: [
        { label: '几 được nhấn', items: [['你’几点起床？', 'nǐ ’jǐ diǎn qǐ chuáng?', 'nhấn: jǐ'], ['你有’几本词典？', 'nǐ yǒu ’jǐ běn cídiǎn?', 'nhấn: jǐ']] },
      ],
    },
  ],
  notes: [
    {
      title: 'Đến chỗ ai: 去朋友那儿, 来我这儿',
      body: 'Sau 来, 去, 在, 从, 到… cần có từ chỉ nơi chốn. Nếu tân ngữ là danh từ chỉ người hoặc đại từ nhân xưng thì phải thêm 这儿 (ở đây) hoặc 那儿 (ở đó) phía sau để thành nơi chốn: 她明天来我这儿。我去王老师那儿。Không nói *我去王老师.',
      say: '我去王老师那儿',
    },
    {
      title: 'Hậu tố 们 (同学们)',
      body: '们 thêm sau đại từ hoặc danh từ chỉ người để biểu thị số nhiều: 你们, 我们, 他们, 咱们, 老师们, 同学们, 朋友们. Nhưng khi danh từ đã có số từ hoặc từ chỉ số nhiều đứng trước thì KHÔNG thêm 们: không nói *三个留学生们, *我有很多朋友们.',
      say: '同学们',
    },
    {
      title: 'Biểu đạt giờ giấc (1): giờ chính, 刻, 半, 差',
      body: 'Từ chỉ thời điểm: 点(钟) giờ, 刻 khắc (15 phút), 分(钟) phút. Hỏi giờ: 现在几点? Đáp: 现在八点。8:00 八点; 8:05 八点零五(分); 8:15 八点一刻 / 八点十五(分); 8:30 八点半 / 八点三十(分); 8:45 八点三刻 / 八点四十五(分) / 差一刻九点; 8:55 八点五十五(分) / 差五分九点.',
      say: '差一刻九点',
    },
    {
      title: 'Biểu đạt giờ giấc (2): thứ tự và vai trò trong câu',
      body: 'Thứ tự biểu đạt thời gian từ đơn vị lớn đến nhỏ: năm, tháng, ngày, giờ, phút. 1949年10月1日上午八点二十分; 2008年10月25日晚上十点半. Từ chỉ thời gian có thể làm chủ ngữ (现在八点半), vị ngữ (今天星期五), định ngữ (我看晚上七点一刻的电影) và trạng ngữ (我明天上午有课).',
      say: '我明天上午有课',
    },
    {
      title: 'Thời gian đứng trước nơi chốn',
      body: 'Nếu câu vừa có trạng ngữ thời gian vừa có trạng ngữ nơi chốn thì trạng ngữ thời gian thường đứng TRƯỚC nơi chốn. Nói: 我晚上在宿舍看书 / 晚上我在宿舍看书. Không nói: *我在宿舍晚上看书. Nói: 去年我在北京学习 / 我去年在北京学习. Không nói: *我在北京去年学习.',
      say: '我晚上在宿舍看书',
    },
    {
      title: 'Các bữa ăn và hoạt động trong ngày',
      body: '早饭 (sáng), 午饭 (trưa), 晚饭 (tối). Việc trong ngày: 起床 (dậy), 上课 (vào học), 下课 (tan học), 锻炼身体 (tập thể dục), 洗澡 (tắm), 洗衣服 (giặt đồ), 睡觉 (đi ngủ). Nối các việc: 然后 (sau đó), 以后 (sau khi).',
      say: '十一点睡觉',
    },
    {
      title: 'Số từ + lượng từ: trọng âm từ',
      body: 'Trong cụm số từ + lượng từ, số từ được nhấn còn lượng từ đọc nhẹ: 五本词典, 三本书, 六个学生, 七件毛衣.',
      say: '六个学生',
    },
    {
      title: 'Trọng âm câu: từ hỏi 几',
      body: 'Trong câu hỏi dùng 几 thì 几 được nhấn: 你几点起床? 你有几本词典?',
      say: '你几点起床',
    },
    {
      title: 'Hai nghĩa của 点 và cách nói rưỡi, kém',
      body: '半 là rưỡi: 六点半 (6 giờ rưỡi). 差 là kém, thiếu: 差十分八点 (8 giờ kém 10, tức 7:50). 一刻 là 15 phút, 三刻 là 45 phút: 七点一刻 (7:15). Muốn nói chính xác thì đọc số phút: 七点十五分.',
      say: '差十分八点',
    },
  ],
  sentences: [
    { parts: ['我', '每天', '早上', '六点', '半', '起床'], pinyin: 'Wǒ měi tiān zǎoshang liù diǎn bàn qǐ chuáng.', vi: 'Mỗi ngày tôi dậy lúc sáu giờ rưỡi.' },
    { parts: ['差', '十', '分', '八点', '去', '教室'], pinyin: 'Chà shí fēn bā diǎn qù jiàoshì.', vi: 'Tám giờ kém mười đến lớp.' },
    { parts: ['八点', '上课'], pinyin: 'Bā diǎn shàng kè.', vi: 'Tám giờ vào học.' },
    { parts: ['上午', '我们', '有', '四', '节', '课'], pinyin: 'Shàngwǔ wǒmen yǒu sì jié kè.', vi: 'Buổi sáng chúng tôi có bốn tiết.' },
    { parts: ['十二点', '下课'], pinyin: 'Shí’èr diǎn xià kè.', vi: 'Mười hai giờ tan học.' },
    { parts: ['午饭', '以后', '我', '去', '朋友', '那儿', '聊天儿'], pinyin: 'Wǔfàn yǐhòu, wǒ qù péngyou nàr liáo tiānr.', vi: 'Sau bữa trưa tôi đến chỗ bạn trò chuyện.' },
    { parts: ['四点', '我', '去', '操场', '锻炼', '身体'], pinyin: 'Sì diǎn wǒ qù cāochǎng duànliàn shēntǐ.', vi: 'Bốn giờ tôi ra sân tập thể dục.' },
    { parts: ['五点', '回', '宿舍', '洗澡'], pinyin: 'Wǔ diǎn huí sùshè xǐ zǎo.', vi: 'Năm giờ về ký túc xá tắm.' },
    { parts: ['十一点', '睡觉'], pinyin: 'Shíyī diǎn shuì jiào.', vi: 'Mười một giờ đi ngủ.' },
    { parts: ['明天', '我们', '去', '爬山'], pinyin: 'Míngtiān wǒmen qù pá shān.', vi: 'Ngày mai chúng ta đi leo núi.' },
    { parts: ['老师', '您', '去', '吗'], pinyin: 'Lǎoshī, nín qù ma?', vi: 'Thưa thầy, thầy có đi không?' },
    { parts: ['明天', '什么', '时候', '出发'], pinyin: 'Míngtiān shénme shíhou chūfā?', vi: 'Ngày mai khi nào xuất phát?' },
    { parts: ['七点', '在', '楼', '前', '集合', '上车'], pinyin: 'Qī diǎn zài lóu qián jíhé shàng chē.', vi: 'Bảy giờ tập trung trước tòa nhà để lên xe.' },
    { parts: ['七点', '一刻', '准时', '出发'], pinyin: 'Qī diǎn yí kè zhǔnshí chūfā.', vi: 'Bảy giờ mười lăm đúng giờ xuất phát.' },
    { parts: ['中午', '不', '回来', '要', '带', '午饭'], pinyin: 'Zhōngwǔ bù huílai, yào dài wǔfàn.', vi: 'Trưa không về, phải mang cơm trưa.' },
    { parts: ['现在', '几点'], pinyin: 'Xiànzài jǐ diǎn?', vi: 'Bây giờ mấy giờ?' },
    { parts: ['我', '晚上', '在', '宿舍', '看', '书'], pinyin: 'Wǒ wǎnshang zài sùshè kàn shū.', vi: 'Buổi tối tôi đọc sách ở ký túc xá.' },
    { parts: ['她', '明天', '来', '我', '这儿'], pinyin: 'Tā míngtiān lái wǒ zhèr.', vi: 'Ngày mai cô ấy đến chỗ tôi.' },
  ],
  writeChars: ['早', '半', '床', '洗', '澡', '操', '场', '锻', '炼', '睡', '觉', '山', '级', '前'],
  drills: [
    {
      title: 'Phân biệt âm và thanh điệu', hint: 'Đọc từng cặp, chú ý thanh điệu và âm đầu.',
      items: [
        { h: '每天', p: 'měitiān' }, { h: '明天', p: 'míngtiān' }, { h: '起床', p: 'qǐchuáng' }, { h: '气窗', p: 'qìchuāng' },
        { h: '出发', p: 'chūfā' }, { h: '书法', p: 'shūfǎ' }, { h: '教室', p: 'jiàoshì' }, { h: '教师', p: 'jiàoshī' },
        { h: '洗澡', p: 'xǐzǎo' }, { h: '起早', p: 'qǐ zǎo' }, { h: '睡觉', p: 'shuìjiào' }, { h: '水稻', p: 'shuǐdào' },
      ],
    },
    {
      title: 'Đọc liền nhiều âm tiết (多音节连读)', hint: 'Cụm có "一" đọc yì/yí.',
      items: [
        { h: '一片好心', p: 'yí piàn hǎoxīn' }, { h: '一帆风顺', p: 'yì fān fēng shùn' }, { h: '一五一十', p: 'yì wǔ yì shí' }, { h: '一心一意', p: 'yì xīn yí yì' },
        { h: '一言为定', p: 'yì yán wéi dìng' }, { h: '一切顺利', p: 'yíqiè shùnlì' },
      ],
    },
    {
      title: 'Đọc to các cụm từ (朗读): 每, 半, 上, 带', hint: 'Chú ý lượng từ đọc nhẹ.',
      items: [
        { h: '每天', p: 'měi tiān' }, { h: '每星期', p: 'měi xīngqī' }, { h: '每月', p: 'měi yuè' }, { h: '每年', p: 'měi nián' },
        { h: '每个同学', p: 'měi ge tóngxué' }, { h: '每件大衣', p: 'měi jiàn dàyī' }, { h: '每个老师', p: 'měi ge lǎoshī' },
        { h: '八点半', p: 'bā diǎn bàn' }, { h: '十点半', p: 'shí diǎn bàn' }, { h: '半天', p: 'bàn tiān' }, { h: '半月', p: 'bàn yuè' }, { h: '半年', p: 'bàn nián' }, { h: '半个', p: 'bàn ge' },
        { h: '上课', p: 'shàng kè' }, { h: '上车', p: 'shàng chē' }, { h: '上学', p: 'shàng xué' },
        { h: '带午饭', p: 'dài wǔfàn' }, { h: '带词典', p: 'dài cídiǎn' }, { h: '带钱', p: 'dài qián' },
      ],
    },
    {
      title: 'Từ bổ sung (补充生词)', hint: 'Dùng để thay thế trong các mẫu câu.',
      items: [
        { h: '课间', p: 'kèjiān', m: 'giờ giải lao' }, { h: '上班', p: 'shàng bān', m: 'đi làm' }, { h: '下班', p: 'xià bān', m: 'tan làm' },
      ],
    },
    {
      title: 'Thay thế: 现在几点? 七点半', hint: 'Thay giờ.',
      items: [
        { h: '八点一刻', p: 'bā diǎn yí kè' }, { h: '十二点', p: 'shí’èr diǎn' }, { h: '差十分十点', p: 'chà shí fēn shí diǎn' },
        { h: '两点', p: 'liǎng diǎn' }, { h: '十一点', p: 'shíyī diǎn' }, { h: '十二点', p: 'shí’èr diǎn' },
      ],
    },
    {
      title: 'Thay thế: 你每天几点上课? 八点上课', hint: 'Thay hoạt động và giờ (giờ theo bảng của sách).',
      items: [
        { h: '起床 六点半', p: 'qǐ chuáng liù diǎn bàn' }, { h: '吃早饭 七点', p: 'chī zǎofàn qī diǎn' }, { h: '下课 十二点', p: 'xià kè shí’èr diǎn' },
        { h: '吃午饭 十二点一刻', p: 'chī wǔfàn shí’èr diǎn yí kè' }, { h: '锻炼身体 下午四点', p: 'duànliàn shēntǐ xiàwǔ sì diǎn' }, { h: '吃晚饭 六点', p: 'chī wǎnfàn liù diǎn' },
      ],
    },
    {
      title: 'Thay thế: 什么时候出发? 七点一刻出发', hint: 'Thay hoạt động và thời gian.',
      items: [
        { h: '上课 八点', p: 'shàng kè bā diǎn' }, { h: '下课 十二点', p: 'xià kè shí’èr diǎn' }, { h: '去商店 下午四点', p: 'qù shāngdiàn xiàwǔ sì diǎn' },
        { h: '看电影 晚上七点', p: 'kàn diànyǐng wǎnshang qī diǎn' }, { h: '做练习 晚上七点半', p: 'zuò liànxí wǎnshang qī diǎn bàn' }, { h: '睡觉 十点半', p: 'shuì jiào shí diǎn bàn' },
      ],
    },
    {
      title: 'Thay thế: 你六点半起床还是七点起床? 我六点半起床', hint: 'Thay hoạt động và hai mốc giờ.',
      items: [
        { h: '出发 7:00 / 7:30', p: 'chūfā qī diǎn / qī diǎn bàn' }, { h: '上课 8:00 / 9:00', p: 'shàng kè bā diǎn / jiǔ diǎn' }, { h: '下课 12:00 / 1:00', p: 'xià kè shí’èr diǎn / yì diǎn' },
        { h: '吃晚饭 6:30 / 7:00', p: 'chī wǎnfàn liù diǎn bàn / qī diǎn' }, { h: '睡觉 10:00 / 11:00', p: 'shuì jiào shí diǎn / shíyī diǎn' },
      ],
    },
    {
      title: 'Thay thế: 你要什么? 你要几瓶? 两瓶', hint: 'Lượng từ đi với số.',
      items: [
        { h: '两斤苹果', p: 'liǎng jīn píngguǒ' }, { h: '四杯咖啡', p: 'sì bēi kāfēi' }, { h: '八张邮票', p: 'bā zhāng yóupiào' },
        { h: '两个馒头', p: 'liǎng ge mántou' }, { h: '一碗米饭', p: 'yì wǎn mǐfàn' }, { h: '三本杂志', p: 'sān běn zázhì' },
      ],
    },
    {
      title: 'Thực hành nói (成段表达): Một ngày của Edward', hint: 'Từ bổ sung: 但是 dànshì. Đọc to cả đoạn.',
      items: [
        { h: '爱德华是加拿大留学生，现在在我们大学学习汉语。他学习很努力。每天差十分七点起床，早上他不锻炼身体，也不吃早饭。他读课文、记生词、复习语法。他七点三刻去教室，八点上课。上午有四节课。休息的时候，他去喝一杯咖啡，吃一点儿东西。十二点下课。下课以后他去食堂吃午饭。中午他不睡觉，常常看书或者跟朋友聊天儿。', p: 'Àidéhuá shì Jiānádà liúxuéshēng, xiànzài zài wǒmen dàxué xuéxí Hànyǔ. Tā xuéxí hěn nǔlì. Měi tiān chà shí fēn qī diǎn qǐ chuáng, zǎoshang tā bù duànliàn shēntǐ, yě bù chī zǎofàn. Tā dú kèwén, jì shēngcí, fùxí yǔfǎ. Tā qī diǎn sān kè qù jiàoshì, bā diǎn shàng kè. Shàngwǔ yǒu sì jié kè. Xiūxi de shíhou, tā qù hē yì bēi kāfēi, chī yìdiǎnr dōngxi. Shí’èr diǎn xià kè. Xià kè yǐhòu tā qù shítáng chī wǔfàn. Zhōngwǔ tā bù shuì jiào, chángcháng kàn shū huòzhě gēn péngyou liáo tiānr.' },
        { h: '每天四点半，他去操场锻炼身体，跑步、打球，五点半回宿舍，洗澡、洗衣服。七点钟吃晚饭。晚上他看电视、听音乐、写汉字、做练习、预习生词和课文，十一点多睡觉。', p: 'Měi tiān sì diǎn bàn, tā qù cāochǎng duànliàn shēntǐ, pǎo bù, dǎ qiú, wǔ diǎn bàn huí sùshè, xǐ zǎo, xǐ yīfu. Qī diǎn zhōng chī wǎnfàn. Wǎnshang tā kàn diànshì, tīng yīnyuè, xiě Hànzì, zuò liànxí, yùxí shēngcí hé kèwén, shíyī diǎn duō shuì jiào.' },
        { h: '爱德华每天都很忙。他说，学习汉语比较难，但是很有意思。', p: 'Àidéhuá měi tiān dōu hěn máng. Tā shuō, xuéxí Hànyǔ bǐjiào nán, dànshì hěn yǒu yìsi.' },
      ],
    },
  ],
  qa: [
    {
      title: 'Chọn từ điền vào chỗ trống (选词填空)',
      items: [
        { q: 'Từ cho sẵn: 看看 每 点 刻 晚上 睡觉 年 早上', hint: 'Mỗi từ dùng một lần.' },
        { q: '(1) 现在几 ______ ?', hint: '点' },
        { q: '(2) 现在八点一 ______ 。', hint: '刻' },
        { q: '(3) 我 ______ 天下午都去操场锻炼身体。', hint: '每' },
        { q: '(4) 我每天 ______ 七点半起床，八点吃早饭，八点四十五去教室。', hint: '早上' },
        { q: '(5) 每 ______ 都有很多留学生来中国学习。', hint: '年' },
        { q: '(6) 晚上，我散散步， ______ 电视或者跟朋友一起聊聊天儿。', hint: '看看' },
        { q: '(7) 你 ______ 几点睡觉?', hint: '晚上' },
        { q: '(8) 晚上我十一点半 ______ 。', hint: '睡觉' },
      ],
    },
    {
      title: 'Hoàn thành hội thoại (完成会话)',
      items: [
        { q: '(1) A: ______ ?   B: 我明天早上六点起床。', hint: '你明天早上几点起床?' },
        { q: '(2) A: ______ ?   B: 七点半吃早饭。', hint: '你几点吃早饭? / 什么时候吃早饭?' },
        { q: '(3) A: ______ ?   B: 我们每天九点上课。', hint: '你们每天几点上课?' },
        { q: '(4) A: ______ ?   B: 明天下午四点下课。', hint: '明天下午几点下课?' },
        { q: '(5) A: ______ ?   B: 我下午四点半锻炼身体。', hint: '你下午几点锻炼身体?' },
        { q: '(6) A: ______ ?   B: 我晚上看电视。', hint: '你晚上做什么?' },
        { q: '(7) A: ______ ?   B: 我十一点半睡觉。', hint: '你几点睡觉?' },
      ],
    },
    {
      title: 'Trả lời theo thực tế của bạn (根据实际情况回答下列问题)',
      items: [
        { q: '(1) 你几点起床?', hint: '我…点起床。' },
        { q: '(2) 早上吃早饭吗?', hint: '吃。/ 不吃。' },
        { q: '(3) 上午几点上课(班)?', hint: '我…点上课。' },
        { q: '(4) 几点下课(班)?', hint: '我…点下课。' },
        { q: '(5) 什么时候吃午饭?', hint: '我…点吃午饭。' },
        { q: '(6) 下午几点下课(班)?', hint: '下午…点下课。' },
        { q: '(7) 你什么时候锻炼身体?', hint: '我…锻炼身体。' },
        { q: '(8) 几点吃晚饭?', hint: '…点吃晚饭。' },
        { q: '(9) 晚上你常做什么?', hint: '我常…' },
        { q: '(10) 你常看电视吗?', hint: '常看。/ 很少看。' },
        { q: '(11) 什么时候做作业?', hint: '我…做作业。' },
        { q: '(12) 几点睡觉?', hint: '…点睡觉。' },
      ],
    },
    {
      title: 'Đọc giờ trên đồng hồ (读出下列时刻)',
      items: [
        { q: 'Sách có 16 đồng hồ vẽ sẵn (không có chữ). Nhìn kim giờ và kim phút rồi đọc.', hint: 'Ví dụ: 八点 / 八点一刻 / 八点半 / 差一刻九点 / 十二点 / 两点五十五分.' },
      ],
    },
  ],
}
