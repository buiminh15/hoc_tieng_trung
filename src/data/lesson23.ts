import type { Lesson } from './types'

const S = '山本 Shānběn'
const Z = '张东 Zhāng Dōng'
const M = '玛丽 Mǎlì'
const P = '路人 lùrén'

/** Quyển 2, Bài 23. */
export const lesson23: Lesson = {
  id: 23,
  title: 'Trong trường có bưu điện không',
  hanzi: '学校里边有邮局吗',
  pinyin: 'Xuéxiào lǐbian yǒu yóujú ma',
  vi: 'Trong trường có bưu điện không',
  intro: 'Hỏi đường và chỉ đường; từ chỉ phương vị (东边, 里边…); ba câu chỉ sự tồn tại (在 / 有 / 是); giới từ 离, 从, 往; hỏi khoảng cách 多远 và số ước lượng; trọng âm của 有 và 是.',
  dialogue: [
    { who: 'A', name: S, scene: '(一) 学校里边有邮局吗 – Trong trường có bưu điện không', hanzi: '学校里边有邮局吗？', pinyin: 'Xuéxiào lǐbian yǒu yóujú ma?', vi: 'Trong trường có bưu điện không?' },
    { who: 'B', name: Z, hanzi: '有。', pinyin: 'Yǒu.', vi: 'Có.' },
    { who: 'A', name: S, hanzi: '邮局在哪儿？', pinyin: 'Yóujú zài nǎr?', vi: 'Bưu điện ở đâu?' },
    { who: 'B', name: Z, hanzi: '在图书馆西边。', pinyin: 'Zài túshūguǎn xībian.', vi: 'Ở phía tây thư viện.' },
    { who: 'A', name: S, hanzi: '离这儿远吗？', pinyin: 'Lí zhèr yuǎn ma?', vi: 'Cách đây có xa không?' },
    { who: 'B', name: Z, hanzi: '不远。很近。', pinyin: 'Bù yuǎn. Hěn jìn.', vi: 'Không xa. Rất gần.' },
    { who: 'A', name: S, hanzi: '图书馆东边是什么地方？', pinyin: 'Túshūguǎn dōngbian shì shénme dìfang?', vi: 'Phía đông thư viện là chỗ nào?' },
    { who: 'B', name: Z, hanzi: '图书馆东边是一个足球场。', pinyin: 'Túshūguǎn dōngbian shì yí ge zúqiúchǎng.', vi: 'Phía đông thư viện là một sân bóng đá.' },
    { who: 'A', name: M, scene: '(二) 从这儿到博物馆有多远 – Từ đây đến bảo tàng bao xa', hanzi: '劳驾，我打听一下儿，博物馆在哪儿？', pinyin: 'Láojià, wǒ dǎting yíxiàr, bówùguǎn zài nǎr?', vi: 'Xin lỗi, cho tôi hỏi một chút, bảo tàng ở đâu ạ?' },
    { who: 'B', name: P, hanzi: '博物馆在东边，在和平公园和人民广场中间。', pinyin: 'Bówùguǎn zài dōngbian, zài Hépíng Gōngyuán hé Rénmín Guǎngchǎng zhōngjiān.', vi: 'Bảo tàng ở phía đông, nằm giữa Công viên Hòa Bình và Quảng trường Nhân Dân.' },
    { who: 'A', name: M, hanzi: '离这儿有多远？', pinyin: 'Lí zhèr yǒu duō yuǎn?', vi: 'Cách đây bao xa ạ?' },
    { who: 'B', name: P, hanzi: '从这儿到那儿大概有七八百米。', pinyin: 'Cóng zhèr dào nàr dàgài yǒu qī bā bǎi mǐ.', vi: 'Từ đây đến đó chừng bảy tám trăm mét.' },
    { who: 'A', name: M, hanzi: '怎么走呢？', pinyin: 'Zěnme zǒu ne?', vi: 'Đi thế nào ạ?' },
    { who: 'B', name: P, hanzi: '你从这儿一直往东走，到红绿灯那儿往左拐，马路东边有一座白色的大楼，那就是博物馆。', pinyin: 'Nǐ cóng zhèr yìzhí wǎng dōng zǒu, dào hónglǜdēng nàr wǎng zuǒ guǎi, mǎlù dōngbian yǒu yí zuò báisè de dàlóu, nà jiù shì bówùguǎn.', vi: 'Bạn đi thẳng về phía đông từ đây, đến chỗ đèn xanh đèn đỏ thì rẽ trái, phía đông đường có một tòa nhà màu trắng, đó chính là bảo tàng.' },
    { who: 'A', name: M, hanzi: '谢谢您！', pinyin: 'Xièxie nín!', vi: 'Cảm ơn bác!' },
    { who: 'B', name: P, hanzi: '不客气。', pinyin: 'Bú kèqi.', vi: 'Không có gì.' },
  ],
  dialogueTip: 'Hỏi có hay không: <b>…里边有…吗?</b>. Hỏi chỗ: <b>…在哪儿?</b>, đáp <b>在 + phương vị</b>. Hỏi là gì ở đó: <b>…是什么地方?</b>, đáp <b>…是 + danh từ</b>. Cách xa: <b>离</b>, xuất phát: <b>从</b>, hướng: <b>往</b>. <b>劳驾</b> = xin làm phiền (mở lời hỏi đường).',
  slowSay: '学校里边有邮局吗',
  vocab: [
    { hanzi: '…边', pinyin: '…bian', pos: 'danh từ', meaning: 'phía, bên', han_viet: 'biên' },
    { hanzi: '东边', pinyin: 'dōngbian', pos: 'danh từ', meaning: 'phía đông', han_viet: 'đông biên' },
    { hanzi: '西边', pinyin: 'xībian', pos: 'danh từ', meaning: 'phía tây', han_viet: 'tây biên' },
    { hanzi: '南边', pinyin: 'nánbian', pos: 'danh từ', meaning: 'phía nam', han_viet: 'nam biên' },
    { hanzi: '北边', pinyin: 'běibian', pos: 'danh từ', meaning: 'phía bắc', han_viet: 'bắc biên' },
    { hanzi: '前边', pinyin: 'qiánbian', pos: 'danh từ', meaning: 'phía trước', han_viet: 'tiền biên' },
    { hanzi: '后边', pinyin: 'hòubian', pos: 'danh từ', meaning: 'phía sau', han_viet: 'hậu biên' },
    { hanzi: '左边', pinyin: 'zuǒbian', pos: 'danh từ', meaning: 'bên trái', han_viet: 'tả biên' },
    { hanzi: '右边', pinyin: 'yòubian', pos: 'danh từ', meaning: 'bên phải', han_viet: 'hữu biên' },
    { hanzi: '里边', pinyin: 'lǐbian', pos: 'danh từ', meaning: 'bên trong', han_viet: 'lý biên' },
    { hanzi: '外边', pinyin: 'wàibian', pos: 'danh từ', meaning: 'bên ngoài', han_viet: 'ngoại biên' },
    { hanzi: '上边', pinyin: 'shàngbian', pos: 'danh từ', meaning: 'phía trên', han_viet: 'thượng biên' },
    { hanzi: '下边', pinyin: 'xiàbian', pos: 'danh từ', meaning: 'phía dưới', han_viet: 'hạ biên' },
    { hanzi: '离', pinyin: 'lí', pos: 'giới từ', meaning: 'cách (khoảng cách)', han_viet: 'ly' },
    { hanzi: '远', pinyin: 'yuǎn', pos: 'tính từ', meaning: 'xa', han_viet: 'viễn' },
    { hanzi: '近', pinyin: 'jìn', pos: 'tính từ', meaning: 'gần', han_viet: 'cận' },
    { hanzi: '地方', pinyin: 'dìfang', pos: 'danh từ', meaning: 'nơi, chỗ', han_viet: 'địa phương' },
    { hanzi: '足球场', pinyin: 'zúqiúchǎng', pos: 'danh từ', meaning: 'sân bóng đá', han_viet: 'túc cầu trường' },
    { hanzi: '足球', pinyin: 'zúqiú', pos: 'danh từ', meaning: 'bóng đá', han_viet: 'túc cầu' },
    { hanzi: '劳驾', pinyin: 'láojià', pos: 'cụm', meaning: 'xin làm phiền, làm ơn', han_viet: 'lao giá' },
    { hanzi: '打听', pinyin: 'dǎting', pos: 'động từ', meaning: 'hỏi thăm, dò hỏi', han_viet: 'đả thính' },
    { hanzi: '博物馆', pinyin: 'bówùguǎn', pos: 'danh từ', meaning: 'bảo tàng', han_viet: 'bác vật quán' },
    { hanzi: '和平', pinyin: 'hépíng', pos: 'danh từ', meaning: 'hòa bình', han_viet: 'hòa bình' },
    { hanzi: '广场', pinyin: 'guǎngchǎng', pos: 'danh từ', meaning: 'quảng trường', han_viet: 'quảng trường' },
    { hanzi: '中间', pinyin: 'zhōngjiān', pos: 'danh từ', meaning: 'ở giữa', han_viet: 'trung gian' },
    { hanzi: '从', pinyin: 'cóng', pos: 'giới từ', meaning: 'từ (nơi, lúc)', han_viet: 'tòng' },
    { hanzi: '到', pinyin: 'dào', pos: 'động từ', meaning: 'đến', han_viet: 'đáo' },
    { hanzi: '米', pinyin: 'mǐ', pos: 'lượng từ', meaning: 'mét', han_viet: 'mễ' },
    { hanzi: '一直', pinyin: 'yìzhí', pos: 'phó từ', meaning: 'thẳng một mạch', han_viet: 'nhất trực' },
    { hanzi: '红绿灯', pinyin: 'hónglǜdēng', pos: 'danh từ', meaning: 'đèn giao thông', han_viet: 'hồng lục đăng' },
    { hanzi: '绿', pinyin: 'lǜ', pos: 'tính từ', meaning: 'xanh lá', han_viet: 'lục' },
    { hanzi: '灯', pinyin: 'dēng', pos: 'danh từ', meaning: 'đèn', han_viet: 'đăng' },
    { hanzi: '往', pinyin: 'wǎng', pos: 'giới từ', meaning: 'hướng về, về phía', han_viet: 'vãng' },
    { hanzi: '左', pinyin: 'zuǒ', pos: 'danh từ', meaning: 'trái', han_viet: 'tả' },
    { hanzi: '右', pinyin: 'yòu', pos: 'danh từ', meaning: 'phải', han_viet: 'hữu' },
    { hanzi: '拐', pinyin: 'guǎi', pos: 'động từ', meaning: 'rẽ', han_viet: 'quải' },
    { hanzi: '马路', pinyin: 'mǎlù', pos: 'danh từ', meaning: 'đường phố', han_viet: 'mã lộ' },
    { hanzi: '路', pinyin: 'lù', pos: 'danh từ', meaning: 'đường', han_viet: 'lộ' },
    { hanzi: '座', pinyin: 'zuò', pos: 'lượng từ', meaning: 'tòa, ngọn (nhà, núi)', han_viet: 'tòa' },
    { hanzi: '白色', pinyin: 'báisè', pos: 'tính từ', meaning: 'màu trắng', han_viet: 'bạch sắc' },
  ],
  sections: [
    {
      kind: 'examples', label: 'Trọng âm: 有 và 是', title: 'Trọng âm của câu (句重音): 有, 是 chỉ tồn tại',
      intro: 'Khi 有 và 是 biểu thị sự tồn tại thì đọc nhẹ, tân ngữ phía sau được nhấn. Dấu ’ đặt trước phần được nhấn.',
      groups: [
        { label: '有 / 是 đọc nhẹ, nhấn danh từ phía sau', items: [['学校里边有’邮局吗？', 'xuéxiào lǐbian yǒu ’yóujú ma?', 'nhấn: yóujú'], ['学校里边有’邮局。', 'xuéxiào lǐbian yǒu ’yóujú', 'nhấn: yóujú'], ['宿舍楼东边儿是’什么地方？', 'sùshèlóu dōngbiānr shì ’shénme dìfang?', 'nhấn: shénme dìfang'], ['宿舍楼东边儿是一个’足球场。', 'sùshèlóu dōngbiānr shì yí ge ’zúqiúchǎng', 'nhấn: zúqiúchǎng']] },
      ],
    },
  ],
  notes: [
    {
      title: '离这儿有多远? (有 chỉ ước lượng)',
      body: 'Trong câu này, 有 biểu thị sự ước lượng. 她有二十岁了。从这儿到博物馆有两三公里。Khi nói "ước chừng" thì thêm 有 trước số.',
      say: '离这儿有多远',
    },
    {
      title: 'Hai số liền nhau: 七八百米',
      body: 'Hai số từ liền kề nhau (thường là hai số liên tiếp) dùng ghép lại để chỉ số ước chừng: 五六百米 (khoảng 500–600 mét), 三四公里, 十七八个, 二十三四岁. Dùng cho người, đồ vật, khoảng cách, thời gian.',
      say: '七八百米',
    },
    {
      title: '多 + 远 / 高 / 大 / 重 / 长: hỏi mức độ',
      body: 'Dùng "多 + tính từ" để hỏi khoảng cách, chiều cao, tuổi/diện tích, cân nặng, chiều dài. Hỏi khoảng cách: 从学校到博物馆(有)多远? – 有五六公里。Hỏi chiều cao: 你多高? – 一米七八。Hỏi tuổi: 小王多大? – 他二十岁。Hỏi cân nặng: 这个箱子多重? – 20公斤。Hỏi chiều dài: 长江有多长? – 6300多公里。',
      say: '你多高',
    },
    {
      title: 'Từ chỉ phương vị (方位词)',
      body: 'Danh từ chỉ phương hướng, vị trí. 东/西/南/北/前/后/左/右/上/下/里/外 thêm 边: 东边, 西边, 南边, 北边, 前边, 后边, 左边, 右边, 上边, 下边, 里边, 外边. Chúng làm chủ ngữ, tân ngữ, định ngữ, trung tâm ngữ: 里边有个人。邮局在西边。左边的椅子是我的。前边的学生是我们班的。图书馆里边有很多阅览室。',
      say: '邮局在西边',
    },
    {
      title: 'Phương vị từ và 的; bỏ 边',
      body: 'Phương vị từ làm định ngữ thì sau phải thêm 的: 外边儿的教室, 里边儿的房间, 前边儿的同学. Làm trung tâm ngữ thì phía trước thường không có 的: 教室里边, 学校外边, 邮局东边. 里边, 上边 sau danh từ thường bỏ 边: 屋子里有很多人, 桌子上有很多书. Sau tên nước, tên địa danh không thêm 里: không nói *在中国里, *在北京里.',
      say: '桌子上有很多书',
    },
    {
      title: 'Câu tồn tại (1): 在 chỉ vị trí',
      body: 'Danh từ (người hoặc vật) + 在 + phương vị từ / từ chỉ nơi chốn. 邮局在东边。食堂在那边。玛丽在教室里(边). Dùng khi biết rõ là cái gì, người nào và hỏi chỗ của nó.',
      say: '邮局在东边',
    },
    {
      title: 'Câu tồn tại (2): 有 chỉ nơi có người, vật',
      body: 'Từ chỉ phương vị / nơi chốn + 有 + danh từ (người hoặc vật). 学校里边有一个邮局。邮局旁边有一个商店。门前有很多自行车。我的宿舍里没有电话。Phủ định: 没有.',
      say: '学校里边有一个邮局',
    },
    {
      title: 'Câu tồn tại (3): 是 khi muốn biết cụ thể',
      body: 'Biết ở đó có người hay vật nhưng muốn hỏi chính xác là gì, là ai thì dùng: từ phương vị / nơi chốn + 是 + danh từ. 这个包里是什么东西? – 是书和词典。玛丽前边是麦克。图书馆东边是什么地方? – 是一个足球场。',
      say: '图书馆东边是什么地方',
    },
    {
      title: 'Giới từ 离, 从, 往',
      body: '离, 从, 往 đều đặt cùng từ chỉ nơi chốn trước động từ làm trạng ngữ. 离 + nơi: chỉ khoảng cách giữa hai nơi (北京离上海1462公里 = 上海离北京1462公里). Không nói *北京从上海1462公里. 从 + nơi/thời gian: điểm xuất phát (太阳从东边升起; 他从美国来中国; 我们从八点开始上课; 玛丽从学校去大使馆). 往 + phương vị/nơi: hướng đi (从这儿往东走; 我要往那边去; 往前一直走就是博物馆).',
      say: '从这儿往东走',
    },
    {
      title: 'Hỏi và chỉ đường',
      body: 'Mở lời: 劳驾，我打听一下儿… Hỏi: …在哪儿? 离这儿有多远? 怎么走? Chỉ đường: 从这儿一直往东走，到红绿灯那儿往左拐, rồi 那就是…. Cảm ơn: 谢谢您! Đáp: 不客气.',
      say: '劳驾，我打听一下儿，博物馆在哪儿',
    },
  ],
  sentences: [
    { parts: ['学校', '里边', '有', '邮局', '吗'], pinyin: 'Xuéxiào lǐbian yǒu yóujú ma?', vi: 'Trong trường có bưu điện không?' },
    { parts: ['邮局', '在', '哪儿'], pinyin: 'Yóujú zài nǎr?', vi: 'Bưu điện ở đâu?' },
    { parts: ['邮局', '在', '图书馆', '西边'], pinyin: 'Yóujú zài túshūguǎn xībian.', vi: 'Bưu điện ở phía tây thư viện.' },
    { parts: ['离', '这儿', '远', '吗'], pinyin: 'Lí zhèr yuǎn ma?', vi: 'Cách đây có xa không?' },
    { parts: ['不', '远', '很', '近'], pinyin: 'Bù yuǎn. Hěn jìn.', vi: 'Không xa. Rất gần.' },
    { parts: ['图书馆', '东边', '是', '什么', '地方'], pinyin: 'Túshūguǎn dōngbian shì shénme dìfang?', vi: 'Phía đông thư viện là chỗ nào?' },
    { parts: ['图书馆', '东边', '是', '一', '个', '足球场'], pinyin: 'Túshūguǎn dōngbian shì yí ge zúqiúchǎng.', vi: 'Phía đông thư viện là một sân bóng đá.' },
    { parts: ['劳驾', '我', '打听', '一下儿'], pinyin: 'Láojià, wǒ dǎting yíxiàr.', vi: 'Xin lỗi, cho tôi hỏi một chút.' },
    { parts: ['博物馆', '在', '哪儿'], pinyin: 'Bówùguǎn zài nǎr?', vi: 'Bảo tàng ở đâu?' },
    { parts: ['离', '这儿', '有', '多', '远'], pinyin: 'Lí zhèr yǒu duō yuǎn?', vi: 'Cách đây bao xa?' },
    { parts: ['从', '这儿', '到', '那儿', '大概', '有', '七八', '百', '米'], pinyin: 'Cóng zhèr dào nàr dàgài yǒu qī bā bǎi mǐ.', vi: 'Từ đây đến đó chừng bảy tám trăm mét.' },
    { parts: ['你', '从', '这儿', '一直', '往', '东', '走'], pinyin: 'Nǐ cóng zhèr yìzhí wǎng dōng zǒu.', vi: 'Bạn đi thẳng về phía đông từ đây.' },
    { parts: ['到', '红绿灯', '那儿', '往', '左', '拐'], pinyin: 'Dào hónglǜdēng nàr wǎng zuǒ guǎi.', vi: 'Đến chỗ đèn giao thông thì rẽ trái.' },
    { parts: ['马路', '东边', '有', '一', '座', '白色', '的', '大楼'], pinyin: 'Mǎlù dōngbian yǒu yí zuò báisè de dàlóu.', vi: 'Phía đông đường có một tòa nhà màu trắng.' },
    { parts: ['那', '就', '是', '博物馆'], pinyin: 'Nà jiù shì bówùguǎn.', vi: 'Đó chính là bảo tàng.' },
    { parts: ['屋子', '里', '有', '很', '多', '人'], pinyin: 'Wūzi lǐ yǒu hěn duō rén.', vi: 'Trong phòng có rất nhiều người.' },
    { parts: ['桌子', '上', '有', '很', '多', '书'], pinyin: 'Zhuōzi shàng yǒu hěn duō shū.', vi: 'Trên bàn có rất nhiều sách.' },
    { parts: ['北京', '离', '上海', '一千四百六十二', '公里'], pinyin: 'Běijīng lí Shànghǎi yìqiān sìbǎi liùshí’èr gōnglǐ.', vi: 'Bắc Kinh cách Thượng Hải 1462 km.' },
  ],
  writeChars: ['从', '到', '直', '里', '左', '右', '南', '边', '间', '足', '球', '远', '红', '灯', '往', '路'],
  drills: [
    {
      title: 'Phân biệt âm và thanh điệu', hint: 'Đọc từng cặp, chú ý thanh điệu và âm đầu.',
      items: [
        { h: '地方', p: 'dìfang' }, { h: '地方', p: 'dìfāng' }, { h: '足球', p: 'zúqiú' }, { h: '出球', p: 'chū qiú' },
        { h: '公里', p: 'gōnglǐ' }, { h: '空气', p: 'kōngqì' }, { h: '中间', p: 'zhōngjiān' }, { h: '重点', p: 'zhòngdiǎn' },
        { h: '一直', p: 'yìzhí' }, { h: '一只', p: 'yì zhī' }, { h: '大楼', p: 'dàlóu' }, { h: '打球', p: 'dǎ qiú' },
      ],
    },
    {
      title: 'Đọc liền nhiều âm tiết (多音节连读): phương vị từ', hint: 'Chú ý âm tiết 边 đọc nhẹ.',
      items: [
        { h: '东边', p: 'dōngbian' }, { h: '西边', p: 'xībian' }, { h: '南边', p: 'nánbian' }, { h: '北边', p: 'běibian' },
        { h: '上边', p: 'shàngbian' }, { h: '下边', p: 'xiàbian' }, { h: '左边', p: 'zuǒbian' }, { h: '右边', p: 'yòubian' },
        { h: '里边', p: 'lǐbian' }, { h: '外边', p: 'wàibian' }, { h: '前边', p: 'qiánbian' }, { h: '后边', p: 'hòubian' },
      ],
    },
    {
      title: 'Đọc to các cụm từ (朗读): 往, …在哪儿, 到, 离', hint: 'Cụm chỉ hướng, nơi chốn, khoảng cách.',
      items: [
        { h: '往前走', p: 'wǎng qián zǒu' }, { h: '往后走', p: 'wǎng hòu zǒu' }, { h: '往左走', p: 'wǎng zuǒ zǒu' }, { h: '往右走', p: 'wǎng yòu zǒu' },
        { h: '往东跑', p: 'wǎng dōng pǎo' }, { h: '往西开', p: 'wǎng xī kāi' }, { h: '往南看', p: 'wǎng nán kàn' }, { h: '往北去', p: 'wǎng běi qù' },
        { h: '往里坐', p: 'wǎng lǐ zuò' }, { h: '往外坐', p: 'wǎng wài zuò' }, { h: '往左拐', p: 'wǎng zuǒ guǎi' }, { h: '往右拐', p: 'wǎng yòu guǎi' },
        { h: '食堂在哪儿', p: 'shítáng zài nǎr' }, { h: '图书馆在哪儿', p: 'túshūguǎn zài nǎr' }, { h: '医院在哪儿', p: 'yīyuàn zài nǎr' },
        { h: '邮局在哪儿', p: 'yóujú zài nǎr' }, { h: '博物馆在哪儿', p: 'bówùguǎn zài nǎr' }, { h: '银行在哪儿', p: 'yínháng zài nǎr' },
        { h: '到学校', p: 'dào xuéxiào' }, { h: '到医院', p: 'dào yīyuàn' }, { h: '到北京', p: 'dào Běijīng' },
        { h: '到红绿灯那儿', p: 'dào hónglǜdēng nàr' }, { h: '去朋友那儿', p: 'qù péngyou nàr' }, { h: '在老师那儿', p: 'zài lǎoshī nàr' },
        { h: '离家不远', p: 'lí jiā bù yuǎn' }, { h: '离学校很近', p: 'lí xuéxiào hěn jìn' }, { h: '离这儿很远', p: 'lí zhèr hěn yuǎn' },
        { h: '有多长', p: 'yǒu duō cháng' }, { h: '有多远', p: 'yǒu duō yuǎn' }, { h: '有多大', p: 'yǒu duō dà' },
      ],
    },
    {
      title: 'Từ bổ sung (补充生词)', hint: 'Dùng để thay thế trong các mẫu câu.',
      items: [
        { h: '平方米', p: 'píngfāngmǐ', m: 'mét vuông' }, { h: '高', p: 'gāo', m: 'cao' },
        { h: '迷路', p: 'mí lù', m: 'lạc đường' }, { h: '公共汽车', p: 'gōnggòng qìchē', m: 'xe buýt' }, { h: '出租车', p: 'chūzūchē', m: 'taxi' },
        { h: '司机', p: 'sījī', m: 'tài xế' }, { h: '算了吧', p: 'suàn le ba', m: 'thôi bỏ đi' },
      ],
    },
    {
      title: 'Thay thế: 这个包里有什么? 有一些书和一本词典', hint: 'Thay các món đồ.',
      items: [
        { h: '一个手机 / 两本书', p: 'yí ge shǒujī / liǎng běn shū' }, { h: '一件毛衣 / 一些日用品', p: 'yí jiàn máoyī / yìxiē rìyòngpǐn' },
        { h: '两本杂志 / 一些照片', p: 'liǎng běn zázhì / yìxiē zhàopiàn' }, { h: '几个橘子 / 一些中药', p: 'jǐ ge júzi / yìxiē zhōngyào' },
      ],
    },
    {
      title: 'Thay thế: 学校里边有邮局吗? 有', hint: 'Thay nơi chốn.',
      items: [
        { h: '银行', p: 'yínháng' }, { h: '医院', p: 'yīyuàn' }, { h: '书店', p: 'shūdiàn' }, { h: '饭店', p: 'fàndiàn' },
      ],
    },
    {
      title: 'Thay thế: 邮局在哪儿? 在东边. 离这儿远不远?', hint: 'Thay phương vị.',
      items: [
        { h: '西边', p: 'xībian' }, { h: '前边', p: 'qiánbian' }, { h: '南边', p: 'nánbian' }, { h: '后边', p: 'hòubian' }, { h: '北边', p: 'běibian' }, { h: '里边', p: 'lǐbian' },
      ],
    },
    {
      title: 'Thay thế: 去邮局怎么走? 从这儿一直往东走，到红绿灯那儿往右拐', hint: 'Thay hướng đi.',
      items: [
        { h: '西', p: 'xī' }, { h: '南', p: 'nán' }, { h: '北', p: 'běi' }, { h: '前', p: 'qián' },
      ],
    },
    {
      title: 'Thay thế: 学校西边是什么地方? 西边是一个超市', hint: 'Thay địa điểm.',
      items: [
        { h: '医院', p: 'yīyuàn' }, { h: '书店', p: 'shūdiàn' }, { h: '邮局', p: 'yóujú' }, { h: '博物馆', p: 'bówùguǎn' },
      ],
    },
    {
      title: 'Thay thế: 博物馆有多远? 大概七八百米', hint: 'Hỏi bằng 多 + tính từ.',
      items: [
        { h: '这个房间多大？二三十平方米。', p: 'Zhège fángjiān duō dà? Èr sān shí píngfāngmǐ.' },
        { h: '那个楼多高？三四百米。', p: 'Nàge lóu duō gāo? Sān sì bǎi mǐ.' },
        { h: '这个箱子多重？二三十公斤。', p: 'Zhège xiāngzi duō zhòng? Èr sān shí gōngjīn.' },
        { h: '那条河多长？四五千公里。', p: 'Nà tiáo hé duō cháng? Sì wǔ qiān gōnglǐ.' },
      ],
    },
    {
      title: 'Thực hành nói (成段表达): 我迷路了 (Tôi lạc đường)', hint: 'Từ bổ sung: 迷路, 公共汽车, 出租车, 司机, 算了吧. Đọc to cả đoạn.',
      items: [
        { h: '星期天，我一个人去城里玩儿。要回学校的时候，已经很晚了。我迷路了，不知道公共汽车站在哪儿。我问一个人，去语言大学怎么坐车，那个人说，他不是北京人，不知道。这时候来了一辆出租车。', p: 'Xīngqītiān, wǒ yí ge rén qù chéng li wánr. Yào huí xuéxiào de shíhou, yǐjīng hěn wǎn le. Wǒ mí lù le, bù zhīdào gōnggòng qìchē zhàn zài nǎr. Wǒ wèn yí ge rén, qù Yǔyán Dàxué zěnme zuò chē, nàge rén shuō, tā bú shì Běijīng rén, bù zhīdào. Zhè shíhou lái le yí liàng chūzūchē.' },
        { h: '司机问：“小姐，你去哪儿？”“回学校，”我说：“能告诉我去语言大学怎么走吗？”他说：“上车吧，我送你回学校。”我说：“对不起，我不坐出租车，我要坐公共汽车。”', p: 'Sījī wèn: “Xiǎojiě, nǐ qù nǎr?” “Huí xuéxiào,” wǒ shuō: “Néng gàosu wǒ qù Yǔyán Dàxué zěnme zǒu ma?” Tā shuō: “Shàng chē ba, wǒ sòng nǐ huí xuéxiào.” Wǒ shuō: “Duìbuqǐ, wǒ bú zuò chūzūchē, wǒ yào zuò gōnggòng qìchē.”' },
        { h: '这时候，前边有几个学生，我问他们去语言大学怎么走。一个男生说：“你是留学生吧？”我说：“是，我是语言大学的学生。”他说：“你跟我们一起走吧，我们是北京大学的。你们学校就在我们学校东边。”', p: 'Zhè shíhou, qiánbian yǒu jǐ ge xuésheng, wǒ wèn tāmen qù Yǔyán Dàxué zěnme zǒu. Yí ge nánshēng shuō: “Nǐ shì liúxuéshēng ba?” Wǒ shuō: “Shì, wǒ shì Yǔyán Dàxué de xuésheng.” Tā shuō: “Nǐ gēn wǒmen yìqǐ zǒu ba, wǒmen shì Běijīng Dàxué de. Nǐmen xuéxiào jiù zài wǒmen xuéxiào dōngbian.”' },
        { h: '我跟他们一起到了车站。他们对我说：“从这儿坐375路车，就可以到你们学校。”上车以后，他们给我买票，我给他们钱，他们不要。那个男生说：“算了吧，才一块钱。”车到了学校门口，我要下车的时候，想对他们说很多话，可是我只会说“谢谢、再见”。', p: 'Wǒ gēn tāmen yìqǐ dào le chēzhàn. Tāmen duì wǒ shuō: “Cóng zhèr zuò sān qī wǔ lù chē, jiù kěyǐ dào nǐmen xuéxiào.” Shàng chē yǐhòu, tāmen gěi wǒ mǎi piào, wǒ gěi tāmen qián, tāmen bú yào. Nàge nánshēng shuō: “Suàn le ba, cái yí kuài qián.” Chē dào le xuéxiào ménkǒu, wǒ yào xià chē de shíhou, xiǎng duì tāmen shuō hěn duō huà, kěshì wǒ zhǐ huì shuō “xièxie, zàijiàn”.' },
      ],
    },
  ],
  qa: [
    {
      title: 'Chọn từ điền vào chỗ trống (选词填空)',
      items: [
        { q: '(1) ______ 这儿一直往前走，到红绿灯那儿往左拐。 (A. 在 B. 离 C. 从 D. 到)', hint: 'C. 从' },
        { q: '(2) 我们学校就 ______ 公园东边。 (A. 是 B. 在 C. 有 D. 从)', hint: 'B. 在' },
        { q: '(3) 我 ______ 学校去公园，她 ______ 家去。 (A. 在 B. 离 C. 往 D. 从)', hint: 'D. 从 / C. 往 (hoặc 从 … 往)' },
        { q: '(4) 邮局东边 ______ 中国银行。 (A. 有 B. 在 C. 是 D. 到)', hint: 'C. 是' },
        { q: '(5) 学校西边 ______ 超市、公园和书店，还 ______ 一个电影院。 (A. 是 B. 在 C. 有 D. 往)', hint: 'C. 有 / C. 有' },
        { q: '(6) 我先去上海，再 ______ 上海去广州。 (A. 在 B. 离 C. 从 D. 给)', hint: 'C. 从' },
        { q: '(7) 我常 ______ 爸爸妈妈打电话，不常写信。 (A. 跟 B. 往 C. 给 D. 到)', hint: 'C. 给' },
        { q: '(8) 明天我 ______ 朋友一起去商店买东西。 (A. 跟 B. 给 C. 从 D. 在)', hint: 'A. 跟' },
      ],
    },
    {
      title: 'Hoàn thành hội thoại (完成会话)',
      items: [
        { q: 'A: ______ ?   B: 这是我的书包。   A: ______ ?   B: 里边有一个手机。   A: ______ ?   B: 我的手机是新的。   A: ______ ?   B: 还有一个钱包 (qiánbāo: ví)。   A: ______ ?   B: 我的钱包是黑色的。   A: ______ ?   B: 钱包里有五百多块钱。   A: ______ ?   B: 还有一本汉语词典。', hint: 'A: 这是什么? · 里边有什么? · 你的手机是新的还是旧的? · 还有什么? · 你的钱包是什么颜色的? · 钱包里有多少钱? · 还有什么?' },
      ],
    },
    {
      title: 'Sửa câu sai (改错句)',
      items: [
        { q: '(1) 博物馆是马路的东边。', hint: '博物馆在马路的东边。 / 马路东边是博物馆。' },
        { q: '(2) 你喝咖啡或者喝茶?', hint: '你喝咖啡还是喝茶?' },
        { q: '(3) 我们学校图书馆很多有中文书。', hint: '我们学校图书馆有很多中文书。' },
        { q: '(4) 我们班有十七、十八个学生。', hint: '我们班有十七八个学生。' },
        { q: '(5) 桌子上有些本书。', hint: '桌子上有一些书。' },
        { q: '(6) 今天的天气一点儿冷。', hint: '今天的天气有点儿冷。' },
      ],
    },
    {
      title: 'Trả lời theo thực tế của bạn (根据实际情况回答下列问题)',
      items: [
        { q: '(1) 你住哪儿?', hint: '我住…' },
        { q: '(2) 你住的地方离学校远吗?', hint: '很远。/ 不远。/ 很近。' },
        { q: '(3) 你每天怎么来学校?', hint: '我坐车来 / 骑车来 / 走路来。' },
        { q: '(4) 你住的地方有书店吗?', hint: '有。/ 没有。' },
        { q: '(5) 你常去书店买书吗?', hint: '常去。/ 很少去。' },
        { q: '(6) 你骑车去还是坐车去?', hint: '我骑车去。 / 我坐车去。' },
        { q: '(7) 你一个人去还是跟朋友一起去?', hint: '我一个人去。 / 我跟朋友一起去。' },
        { q: '(8) 你喜欢看什么书?', hint: '我喜欢看…' },
      ],
    },
    {
      title: 'Xem hình nói chuyện (看图说话)',
      items: [
        { q: 'Mẫu: A: 车站在哪儿? B: 车站在北边。A: 车站西边是什么地方? B: 是旅馆。', hint: 'Sách có bản đồ một khu phố và một hình người trên xe, bạn thay địa điểm vào mẫu.' },
      ],
    },
  ],
}
