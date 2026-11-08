import type { Lesson } from './types'

const S = '秘书 mìshū'
const X = '校长 xiàozhǎng'
const W = '王教授 Wáng jiàoshòu'
const E = '爱德华 Àidéhuá'
const L = '李昌浩 Lǐ Chānghào'

export const lesson11: Lesson = {
  id: 11,
  dialogueAudio: '/audio/ppt/l11-baikhoa.mp3',
  title: 'Chúng tôi đều là lưu học sinh',
  hanzi: '我们都是留学生',
  pinyin: 'Wǒmen dōu shì liúxuéshēng',
  vi: 'Chúng tôi đều là lưu học sinh',
  intro: 'Giới thiệu người, hỏi "…là … phải không", dùng 也 (cũng) và 都 (đều); trạng ngữ; trọng âm của câu và ngữ điệu lên xuống.',
  dialogue: [
    { who: 'A', name: S, scene: '(一) 这是王教授 – Đây là giáo sư Vương (thư ký giới thiệu giáo sư Vương với hiệu trưởng)', hanzi: '我先介绍一下儿，这位是王教授。这是马校长。', pinyin: 'Wǒ xiān jièshào yíxiàr, zhè wèi shì Wáng jiàoshòu. Zhè shì Mǎ xiàozhǎng.', vi: 'Tôi xin giới thiệu một chút: vị này là giáo sư Vương. Đây là hiệu trưởng Mã.' },
    { who: 'B', name: X, hanzi: '欢迎您，王教授。', pinyin: 'Huānyíng nín, Wáng jiàoshòu.', vi: 'Hoan nghênh ngài, giáo sư Vương.' },
    { who: 'C', name: W, hanzi: '谢谢！', pinyin: 'Xièxie!', vi: 'Cảm ơn!' },
    { who: 'A', scene: '(二) 我们都是留学生 – Chúng tôi đều là lưu học sinh', hanzi: '你是留学生吗？', pinyin: 'Nǐ shì liúxuéshēng ma?', vi: 'Bạn là lưu học sinh phải không?' },
    { who: 'B', hanzi: '是。', pinyin: 'Shì.', vi: 'Phải.' },
    { who: 'A', hanzi: '罗兰也是留学生吗？', pinyin: 'Luólán yě shì liúxuéshēng ma?', vi: 'La Lan cũng là lưu học sinh à?' },
    { who: 'B', hanzi: '她也是留学生。我们都是留学生。', pinyin: 'Tā yě shì liúxuéshēng. Wǒmen dōu shì liúxuéshēng.', vi: 'Cô ấy cũng là lưu học sinh. Chúng tôi đều là lưu học sinh.' },
    { who: 'A', hanzi: '张东和田芳也都是留学生吗？', pinyin: 'Zhāng Dōng hé Tián Fāng yě dōu shì liúxuéshēng ma?', vi: 'Trương Đông và Điền Phương cũng đều là lưu học sinh à?' },
    { who: 'B', hanzi: '不，他们俩不是留学生。他们都是中国学生。', pinyin: 'Bù, tāmen liǎ bú shì liúxuéshēng. Tāmen dōu shì Zhōngguó xuésheng.', vi: 'Không, hai bạn ấy không phải lưu học sinh. Họ đều là học sinh Trung Quốc.' },
    { who: 'A', name: E, scene: '(三) 你也是中国人吗 – Bạn cũng là người Trung Quốc à', hanzi: '他是中国人吗？', pinyin: 'Tā shì Zhōngguó rén ma?', vi: 'Anh ấy là người Trung Quốc phải không?' },
    { who: 'B', name: L, hanzi: '是。', pinyin: 'Shì.', vi: 'Phải.' },
    { who: 'A', name: E, hanzi: '你也是中国人吗？', pinyin: 'Nǐ yě shì Zhōngguó rén ma?', vi: 'Bạn cũng là người Trung Quốc à?' },
    { who: 'B', name: L, hanzi: '不是。我是韩国人。', pinyin: 'Bú shì. Wǒ shì Hánguó rén.', vi: 'Không phải. Tôi là người Hàn Quốc.' },
    { who: 'A', name: E, hanzi: '对不起。', pinyin: 'Duì bu qǐ.', vi: 'Xin lỗi.' },
    { who: 'B', name: L, hanzi: '没什么。', pinyin: 'Méi shénme.', vi: 'Không sao.' },
  ],
  dialogueTip: 'Cấu trúc cần nhớ: <b>…也是…</b> (cũng là), <b>…都是…</b> (đều là), <b>…也都是…</b> (cũng đều là). 也 và 都 luôn đứng <b>trước động từ</b> hoặc tính từ, và sau chủ ngữ. Giới thiệu: <b>我先介绍一下儿，这位是…</b>. Đáp lại lời xin lỗi: <b>没什么</b>.',
  slowSay: '我们都是留学生',
  vocab: [
    { hanzi: '秘书', pinyin: 'mìshū', pos: 'danh từ', meaning: 'thư ký', han_viet: 'bí thư' },
    { hanzi: '先', pinyin: 'xiān', pos: 'phó từ', meaning: 'trước, trước hết', han_viet: 'tiên' },
    { hanzi: '介绍', pinyin: 'jièshào', pos: 'động từ', meaning: 'giới thiệu', han_viet: 'giới thiệu' },
    { hanzi: '一下儿', pinyin: 'yíxiàr', pos: 'số lượng từ', meaning: 'một chút, thử một lần (đứng sau động từ)', han_viet: 'nhất hạ nhi' },
    { hanzi: '位', pinyin: 'wèi', pos: 'lượng từ', meaning: 'vị (lượng từ lịch sự cho người)', han_viet: 'vị' },
    { hanzi: '教授', pinyin: 'jiàoshòu', pos: 'danh từ', meaning: 'giáo sư', han_viet: 'giáo thụ' },
    { hanzi: '校长', pinyin: 'xiàozhǎng', pos: 'danh từ', meaning: 'hiệu trưởng', han_viet: 'hiệu trưởng' },
    { hanzi: '欢迎', pinyin: 'huānyíng', pos: 'động từ', meaning: 'hoan nghênh, chào đón', han_viet: 'hoan nghênh' },
    { hanzi: '留学生', pinyin: 'liúxuéshēng', pos: 'danh từ', meaning: 'lưu học sinh, du học sinh', han_viet: 'lưu học sinh' },
    { hanzi: '留学', pinyin: 'liúxué', pos: 'động từ', meaning: 'du học', han_viet: 'lưu học' },
    { hanzi: '也', pinyin: 'yě', pos: 'phó từ', meaning: 'cũng', han_viet: 'dã' },
    { hanzi: '我们', pinyin: 'wǒmen', pos: 'đại từ', meaning: 'chúng tôi, chúng ta', han_viet: 'ngã môn' },
    { hanzi: '你们', pinyin: 'nǐmen', pos: 'đại từ', meaning: 'các bạn', han_viet: 'nễ môn' },
    { hanzi: '他们', pinyin: 'tāmen', pos: 'đại từ', meaning: 'họ, các anh ấy', han_viet: 'tha môn' },
    { hanzi: '都', pinyin: 'dōu', pos: 'phó từ', meaning: 'đều, tất cả', han_viet: 'đô' },
    { hanzi: '和', pinyin: 'hé', pos: 'liên từ', meaning: 'và', han_viet: 'hòa' },
    { hanzi: '俩', pinyin: 'liǎ', pos: 'số từ', meaning: 'hai (người), cả hai', han_viet: 'lưỡng' },
    { hanzi: '学生', pinyin: 'xuésheng', pos: 'danh từ', meaning: 'học sinh, sinh viên', han_viet: 'học sinh' },
    { hanzi: '没什么', pinyin: 'méi shénme', pos: 'cụm', meaning: 'không có gì, không sao', han_viet: '' },
    { hanzi: '马', pinyin: 'Mǎ', pos: 'tên riêng', meaning: 'Mã (họ của người Trung Quốc)', han_viet: 'Mã' },
    { hanzi: '田芳', pinyin: 'Tián Fāng', pos: 'tên riêng', meaning: 'Điền Phương (tên một người Trung Quốc)', han_viet: 'Điền Phương' },
    { hanzi: '罗兰', pinyin: 'Luólán', pos: 'tên riêng', meaning: 'La Lan (Roland)', han_viet: 'La Lan' },
    { hanzi: '爱德华', pinyin: 'Àidéhuá', pos: 'tên riêng', meaning: 'Ái Đức Hoa (Edward)', han_viet: 'Ái Đức Hoa' },
  ],
  sections: [
    {
      kind: 'examples', label: 'Trọng âm của câu', title: 'Trọng âm của câu (句重音 1)',
      intro: 'Trong một câu luôn có một thành phần quan trọng hơn trong mắt người nói nên được đọc nặng hơn. Đó là trọng âm câu. Dấu phẩy trên (’) đặt trước thành phần được nhấn. Quy tắc: câu chủ vị đơn giản thì nhấn vị ngữ; chủ ngữ là đại từ nghi vấn thì nhấn đại từ đó; câu có tân ngữ thì nhấn tân ngữ; câu có định ngữ hoặc trạng ngữ thì thường nhấn định ngữ, trạng ngữ. Định ngữ gồm số từ "一" + lượng từ thì không nhấn.',
      groups: [
        { label: 'Câu chủ vị đơn giản: nhấn vị ngữ', items: [['我’吃。', 'wǒ ’chī', 'nhấn: chī'], ['爸爸’很忙。', 'bàba ’hěn máng', 'nhấn: hěn máng']] },
        { label: 'Chủ ngữ là đại từ nghi vấn: nhấn đại từ', items: [['’谁去？', '’shéi qù?', 'nhấn: shéi'], ['’哪儿是邮局？', '’nǎr shì yóujú?', 'nhấn: nǎr']] },
        { label: 'Câu có tân ngữ: nhấn tân ngữ', items: [['我学习’汉语。', 'wǒ xuéxí ’Hànyǔ', 'nhấn: Hànyǔ'], ['他买’苹果。', 'tā mǎi ’píngguǒ', 'nhấn: píngguǒ']] },
        { label: 'Có định ngữ, trạng ngữ: nhấn chúng', items: [['我是’中国人。', 'wǒ shì ’Zhōngguó rén', 'nhấn: Zhōngguó (định ngữ)'], ['他’也是留学生。', 'tā ’yě shì liúxuéshēng', 'nhấn: yě (trạng ngữ)']] },
        { label: '"一" + lượng từ không nhấn', items: [['我吃一个’包子。', 'wǒ chī yí ge ’bāozi', 'nhấn: bāozi, không nhấn yí ge']] },
      ],
    },
    {
      kind: 'examples', label: 'Ngữ điệu', title: 'Ngữ điệu (语调 1): lên giọng và xuống giọng',
      intro: 'Tiếng Hán có hai kiểu ngữ điệu: lên giọng và xuống giọng. Lên xuống thể hiện chủ yếu ở âm tiết được nhấn cuối cùng của câu, các âm sau đó cũng lên hoặc xuống theo. Sự lên xuống mang tính tương đối, dựa trên thanh điệu gốc của từ. Nói chung câu hỏi (có/không) lên giọng, câu trần thuật xuống giọng.',
      groups: [
        { label: 'Câu hỏi: lên giọng ↗', items: [['你是留学生吗？', 'nǐ shì liúxuéshēng ma?', 'lên giọng ở cuối câu']] },
        { label: 'Câu trần thuật: xuống giọng ↘', items: [['我是留学生。', 'wǒ shì liúxuéshēng.', 'xuống giọng ở cuối câu']] },
      ],
    },
  ],
  notes: [
    {
      title: 'Xin giới thiệu: 我先介绍一下儿',
      body: '我先介绍一下儿 nghĩa là "xin cho tôi giới thiệu một chút trước". 先 là "trước, trước hết", 一下儿 đứng sau động từ làm lời nói nhẹ nhàng, gần "một chút, thử xem". Dùng để mở đầu khi giới thiệu hai người với nhau.',
      say: '我先介绍一下儿',
    },
    {
      title: 'Mở rộng: 我来介绍一下儿 và 首先',
      body: 'Ngoài 我先介绍一下儿, còn nói 我来介绍一下儿 ("để tôi giới thiệu một chút"). Tự giới thiệu: 我来介绍一下儿我自己 (自己 zìjǐ = bản thân mình). 先 còn gặp trong 首先 (shǒuxiān) = trước tiên, đầu tiên.',
      say: '我来介绍一下儿我自己',
    },
    {
      title: 'Giới thiệu người: 这位是…, 这是…',
      body: '位 là lượng từ lịch sự dùng cho người: 这位是王教授 (vị này là giáo sư Vương). Với người thân thiết hoặc đồng trang lứa thì dùng 这是…: 这是马校长. Gọi chức danh sau họ: 王教授, 马校长.',
      say: '这位是王教授',
    },
    {
      title: 'Ngữ pháp: câu hỏi có/không với 吗 (……吗?)',
      body: 'Thêm 吗 vào cuối câu trần thuật là thành câu hỏi có/không. 你是中国人吗? – 是。(我是中国人。) 你是老师吗? – 不是。我是学生。 他们都是留学生吗? – 他们都是留学生。Trả lời ngắn bằng 是 / 不是, hoặc nhắc lại cả câu.',
      say: '你是留学生吗',
    },
    {
      title: 'Trạng ngữ (状语): đứng trước động từ, tính từ',
      body: 'Thành phần đứng trước động từ hoặc tính từ để bổ nghĩa gọi là trạng ngữ. Phó từ, tính từ… đều có thể làm trạng ngữ. 爸爸妈妈都很好 (cả bố mẹ đều rất khỏe: 都 và 很 là trạng ngữ), 汉字很难, 语法不太难. Trạng ngữ luôn đứng sau chủ ngữ và trước vị ngữ.',
      say: '爸爸妈妈都很好',
    },
    {
      title: 'Phó từ 也: cũng',
      body: '也 đặt trước động từ hoặc tính từ, sau chủ ngữ: 玛丽也是留学生 (Mary cũng là lưu học sinh). Với phủ định đặt 也 trước 不: 张东也不是留学生. Không đặt 也 ở đầu câu trước chủ ngữ: KHÔNG nói *也玛丽是留学生.',
      say: '玛丽也是留学生',
    },
    {
      title: 'Phó từ 都: đều',
      body: '都 chỉ tổng quát nhiều người hoặc nhiều vật (từ hai trở lên), đứng trước động từ hoặc tính từ: 麦克和玛丽都是留学生 (Mike và Mary đều là lưu học sinh). KHÔNG đặt 都 trước chủ ngữ: *都麦克和玛丽是留学生. 都 thường đi với 我们, 你们, 他们 hoặc hai chủ ngữ nối bằng 和.',
      say: '我们都是留学生',
    },
    {
      title: 'Dùng 也 và 都 cùng nhau; 和 và 俩',
      body: 'Khi cần cả hai ý "cũng" và "đều" thì nói 也都 (也 đứng trước 都): 张东和田芳也都是留学生吗? 和 nối hai danh từ: 张东和田芳. 俩 nghĩa là "hai người": 他们俩 = hai người họ (俩 đã có nghĩa "hai", không thêm 二 hay 两).',
      say: '张东和田芳也都是留学生吗',
    },
    {
      title: 'Trọng âm của câu (句重音 1)',
      body: 'Mỗi câu có một thành phần được đọc nặng nhất: câu chủ vị đơn giản nhấn vị ngữ (爸爸很忙), đại từ nghi vấn làm chủ ngữ thì nhấn nó (谁去?), có tân ngữ thì nhấn tân ngữ (他买苹果), có định ngữ hoặc trạng ngữ thì nhấn chúng (我是中国人, 他也是留学生). Số từ "一" + lượng từ làm định ngữ thì không nhấn.',
      say: '我学习汉语',
    },
    {
      title: 'Ngữ điệu (语调 1): lên giọng, xuống giọng',
      body: 'Câu hỏi có/không lên giọng ở cuối: 你是留学生吗? ↗. Câu trần thuật xuống giọng: 我是留学生。 ↘. Sự lên xuống dựa trên thanh điệu gốc của âm tiết được nhấn cuối cùng, nên không phá thanh điệu của từ.',
      say: '你是留学生吗',
    },
    {
      title: 'Xin lỗi và đáp lại: 对不起 – 没什么',
      body: '对不起 (xin lỗi) – 没什么 (không sao, không có gì). Cặp này giống 对不起 – 没关系 của Bài 4. 没什么 còn dùng để đáp lại lời cảm ơn nhẹ nhàng.',
      say: '没什么',
    },
  ],
  sentences: [
    { parts: ['我', '先', '介绍', '一下儿'], pinyin: 'Wǒ xiān jièshào yíxiàr.', vi: 'Tôi xin giới thiệu một chút trước.' },
    { parts: ['这', '位', '是', '王', '教授'], pinyin: 'Zhè wèi shì Wáng jiàoshòu.', vi: 'Vị này là giáo sư Vương.' },
    { parts: ['这', '是', '马', '校长'], pinyin: 'Zhè shì Mǎ xiàozhǎng.', vi: 'Đây là hiệu trưởng Mã.' },
    { parts: ['欢迎', '您'], pinyin: 'Huānyíng nín.', vi: 'Hoan nghênh ngài.' },
    { parts: ['你', '是', '留学生', '吗'], pinyin: 'Nǐ shì liúxuéshēng ma?', vi: 'Bạn là lưu học sinh phải không?' },
    { parts: ['她', '也', '是', '留学生'], pinyin: 'Tā yě shì liúxuéshēng.', vi: 'Cô ấy cũng là lưu học sinh.' },
    { parts: ['我们', '都', '是', '留学生'], pinyin: 'Wǒmen dōu shì liúxuéshēng.', vi: 'Chúng tôi đều là lưu học sinh.' },
    { parts: ['他们', '都', '是', '中国', '学生'], pinyin: 'Tāmen dōu shì Zhōngguó xuésheng.', vi: 'Họ đều là học sinh Trung Quốc.' },
    { parts: ['张东', '和', '田芳', '也', '都', '是', '留学生', '吗'], pinyin: 'Zhāng Dōng hé Tián Fāng yě dōu shì liúxuéshēng ma?', vi: 'Trương Đông và Điền Phương cũng đều là lưu học sinh à?' },
    { parts: ['他们', '俩', '不', '是', '留学生'], pinyin: 'Tāmen liǎ bú shì liúxuéshēng.', vi: 'Hai bạn ấy không phải lưu học sinh.' },
    { parts: ['他', '是', '中国', '人', '吗'], pinyin: 'Tā shì Zhōngguó rén ma?', vi: 'Anh ấy là người Trung Quốc phải không?' },
    { parts: ['你', '也', '是', '中国', '人', '吗'], pinyin: 'Nǐ yě shì Zhōngguó rén ma?', vi: 'Bạn cũng là người Trung Quốc à?' },
    { parts: ['我', '不', '是', '日本', '人'], pinyin: 'Wǒ bú shì Rìběn rén.', vi: 'Tôi không phải người Nhật.' },
    { parts: ['你', '也', '是', '老师', '吗'], pinyin: 'Nǐ yě shì lǎoshī ma?', vi: 'Bạn cũng là giáo viên à?' },
    { parts: ['他', '是', '校长', '吗'], pinyin: 'Tā shì xiàozhǎng ma?', vi: 'Ông ấy là hiệu trưởng phải không?' },
    { parts: ['她', '也', '是', '中国', '学生'], pinyin: 'Tā yě shì Zhōngguó xuésheng.', vi: 'Cô ấy cũng là học sinh Trung Quốc.' },
    { parts: ['我们', '都', '不', '是', '留学生'], pinyin: 'Wǒmen dōu bú shì liúxuéshēng.', vi: 'Chúng tôi đều không phải lưu học sinh.' },
  ],
  writeChars: ['先', '介', '绍', '留', '也', '和', '们', '长', '起', '没', '系'],
  drills: [
    {
      title: 'Phân biệt âm và thanh điệu', hint: 'Đọc từng từ, chú ý thanh điệu và âm đầu.',
      items: [
        { h: '他们', p: 'tāmen' }, { h: '大门', p: 'dà mén' }, { h: '教授', p: 'jiàoshòu' }, { h: '教书', p: 'jiāo shū' },
        { h: '大夫', p: 'dàifu' }, { h: '态度', p: 'tàidu' }, { h: '护士', p: 'hùshì' }, { h: '忽视', p: 'hūshì' },
        { h: '经理', p: 'jīnglǐ' }, { h: '经历', p: 'jīnglì' }, { h: '律师', p: 'lǜshī' }, { h: '历史', p: 'lìshǐ' },
      ],
    },
    {
      title: 'Đọc liền nhiều âm tiết (多音节连读)', hint: 'Từ nhiều âm tiết: đọc rõ, nhấn âm cuối.',
      items: [
        { h: '服务员', p: 'fúwùyuán' }, { h: '售票员', p: 'shòupiàoyuán' }, { h: '售货员', p: 'shòuhuòyuán' }, { h: '列车员', p: 'lièchēyuán' },
        { h: '工程师', p: 'gōngchéngshī' }, { h: '摄影师', p: 'shèyǐngshī' }, { h: '设计师', p: 'shèjìshī' }, { h: '建筑师', p: 'jiànzhùshī' },
        { h: '中文软件', p: 'Zhōngwén ruǎnjiàn' }, { h: '汉英词典', p: 'Hàn-Yīng cídiǎn' }, { h: '学生食堂', p: 'xuésheng shítáng' }, { h: '新华书店', p: 'Xīnhuá shūdiàn' },
        { h: '改革开放', p: 'gǎigé kāifàng' }, { h: '繁荣富强', p: 'fánróng fùqiáng' }, { h: '人民幸福', p: 'rénmín xìngfú' }, { h: '美好理想', p: 'měihǎo lǐxiǎng' },
        { h: '山明水秀', p: 'shānmíng shuǐxiù' }, { h: '风景美丽', p: 'fēngjǐng měilì' }, { h: '保护环境', p: 'bǎohù huánjìng' }, { h: '发展经济', p: 'fāzhǎn jīngjì' },
        { h: '了解中国', p: 'liǎojiě Zhōngguó' }, { h: '学习汉语', p: 'xuéxí Hànyǔ' }, { h: '加强团结', p: 'jiāqiáng tuánjié' }, { h: '增进友谊', p: 'zēngjìn yǒuyì' },
      ],
    },
    {
      title: 'Nhận đọc (认读): 不, 也, 都, 先', hint: 'Đọc cả cụm. Bấm để nghe đáp án.',
      items: [
        { h: '不是', p: 'bú shì' }, { h: '不去', p: 'bú qù' }, { h: '不好', p: 'bù hǎo' }, { h: '不难', p: 'bù nán' },
        { h: '也是', p: 'yě shì' }, { h: '也去', p: 'yě qù' }, { h: '也买', p: 'yě mǎi' }, { h: '也要', p: 'yě yào' },
        { h: '都是', p: 'dōu shì' }, { h: '都去', p: 'dōu qù' }, { h: '都要', p: 'dōu yào' }, { h: '都吃', p: 'dōu chī' },
        { h: '先去', p: 'xiān qù' }, { h: '先吃', p: 'xiān chī' }, { h: '先买', p: 'xiān mǎi' }, { h: '先介绍', p: 'xiān jièshào' },
        { h: '也是留学生', p: 'yě shì liúxuéshēng' }, { h: '都是老师', p: 'dōu shì lǎoshī' }, { h: '都是朋友', p: 'dōu shì péngyou' }, { h: '都是学生', p: 'dōu shì xuésheng' },
      ],
    },
    {
      title: 'Từ bổ sung: nghề nghiệp (补充生词)', hint: 'Dùng để thay thế vào mẫu 你是…吗? / 她也是…',
      items: [
        { h: '大夫', p: 'dàifu', m: 'bác sĩ' }, { h: '医生', p: 'yīshēng', m: 'bác sĩ (cách nói chung)' }, { h: '护士', p: 'hùshi', m: 'y tá' }, { h: '经理', p: 'jīnglǐ', m: 'giám đốc' },
        { h: '律师', p: 'lǜshī', m: 'luật sư' }, { h: '记者', p: 'jìzhě', m: 'phóng viên' }, { h: '意大利', p: 'Yìdàlì', m: 'nước Ý' },
      ],
    },
    {
      title: 'Thay thế: 你是留学生吗?', hint: 'Thay nghề nghiệp vào chỗ "留学生".',
      items: [
        { h: '我是老师。', p: 'Wǒ shì lǎoshī.' }, { h: '我是校长。', p: 'Wǒ shì xiàozhǎng.' }, { h: '我是教授。', p: 'Wǒ shì jiàoshòu.' },
        { h: '我是经理。', p: 'Wǒ shì jīnglǐ.' }, { h: '我是护士。', p: 'Wǒ shì hùshi.' }, { h: '我是律师。', p: 'Wǒ shì lǜshī.' },
      ],
    },
    {
      title: 'Thay thế: 你也是中国人吗? 不是', hint: 'Thay tên nước vào chỗ "中国".',
      items: [
        { h: '我不是美国人。', p: 'Wǒ bú shì Měiguó rén.' }, { h: '我不是法国人。', p: 'Wǒ bú shì Fǎguó rén.' }, { h: '我不是韩国人。', p: 'Wǒ bú shì Hánguó rén.' },
        { h: '我不是德国人。', p: 'Wǒ bú shì Déguó rén.' }, { h: '我不是日本人。', p: 'Wǒ bú shì Rìběn rén.' }, { h: '我不是意大利人。', p: 'Wǒ bú shì Yìdàlì rén.' },
      ],
    },
    {
      title: 'Thực hành nói (成段表达)', hint: 'Điền thông tin của bạn vào chỗ trống rồi đọc to.',
      items: [
        { h: '你们好！我先介绍一下儿，我叫……，……人，是留学生。', p: 'Nǐmen hǎo! Wǒ xiān jièshào yíxiàr, wǒ jiào……, ……rén, shì liúxuéshēng.' },
        { h: '这两位是中国人，他叫张东，她叫田芳，他们都学习英语，我们都是好朋友。', p: 'Zhè liǎng wèi shì Zhōngguó rén, tā jiào Zhāng Dōng, tā jiào Tián Fāng, tāmen dōu xuéxí Yīngyǔ, wǒmen dōu shì hǎo péngyou.' },
      ],
    },
  ],
  qa: [
    {
      title: 'Trả lời câu hỏi (回答问题)',
      items: [
        { q: 'Ví dụ: A: 你是中国人吗? B: 不是，我是韩国人。', hint: 'Mẫu: Bú shì, wǒ shì … rén. (不是，我是…人。)' },
        { q: '(1) 你是美国人吗?', hint: 'Shì, wǒ shì Měiguó rén. / Bú shì, wǒ shì … rén. (是，我是美国人。/ 不是，我是…人。)' },
        { q: '(2) 你是老师吗?', hint: 'Shì, wǒ shì lǎoshī. / Bú shì, wǒ shì xuésheng. (是，我是老师。/ 不是，我是学生。)' },
        { q: '(3) 田芳是留学生吗?', hint: 'Bú shì, tā shì Zhōngguó xuésheng. (不是，她是中国学生。)' },
        { q: '(4) 你学习英语吗?', hint: 'Xuéxí. / Bù xuéxí. Wǒ xuéxí Hànyǔ. (学习。/ 不学习，我学习汉语。)' },
        { q: '(5) 你们的老师是王老师吗?', hint: 'Shì. / Bú shì. (是。/ 不是。)' },
      ],
    },
    {
      title: 'Hoàn thành hội thoại (完成会话)',
      items: [
        { q: 'Ví dụ: A: 你是老师吗? B: 是。 A: 他也是老师吗? B: 他也是老师。', hint: 'Mẫu: 也 + 是 + nghề nghiệp.' },
        { q: '(1) A: 他是教授吗? B: ______ 。 A: ______ ? B: 她也是教授。', hint: 'B: Shì. (是。) · A: Tā yě shì jiàoshòu ma? (她也是教授吗?)' },
        { q: '(2) A: 麦克是留学生吗? B: ______ 。 A: ______ ? B: 玛丽也是留学生。', hint: 'B: Shì. (是。) · A: Mǎlì yě shì liúxuéshēng ma? (玛丽也是留学生吗?)' },
        { q: '(3) A: 田芳是中国学生吗? B: ______ 。 A: ______ ? B: 张东也是中国学生。', hint: 'B: Shì. · A: Zhāng Dōng yě shì Zhōngguó xuésheng ma? (张东也是中国学生吗?)' },
        { q: '(4) A: 你爸爸是大夫吗? B: ______ 。 A: ______ ? B: 我妈妈也是大夫。', hint: 'B: Shì. · A: Nǐ māma yě shì dàifu ma? (你妈妈也是大夫吗?)' },
        { q: '(5) A: 她们是老师吗? B: ______ 。 A: ______ ? B: 我们也是老师。', hint: 'B: Shì. · A: Nǐmen yě shì lǎoshī ma? (你们也是老师吗?)' },
        { q: '(6) A: 你朋友是律师吗? B: ______ 。 A: ______ ? B: 我也是律师。', hint: 'B: Shì. · A: Nǐ yě shì lǜshī ma? (你也是律师吗?)' },
      ],
    },
    {
      title: 'Viết lại câu với 都 (用"都"改写句子)',
      items: [
        { q: 'Ví dụ: 他是留学生，我也是留学生。 →', hint: '我们都是留学生。' },
        { q: '(1) 麦克是留学生，玛丽也是留学生。 →', hint: '麦克和玛丽都是留学生。' },
        { q: '(2) 张东是中国人，田芳也是中国人。 →', hint: '张东和田芳都是中国人。' },
        { q: '(3) 你是老师，他也是老师。 →', hint: '你们都是老师。' },
        { q: '(4) 爸爸是大夫，妈妈也是大夫。 →', hint: '爸爸妈妈都是大夫。' },
        { q: '(5) 他是教授，她也是教授。 →', hint: '他们都是教授。' },
        { q: '(6) 他是律师，他朋友也是律师。 →', hint: '他和他朋友都是律师。' },
      ],
    },
    {
      title: 'Sắp xếp từ thành câu (组句)',
      items: [
        { q: 'Ví dụ: 留学生 他们 是 都 →', hint: '他们都是留学生。' },
        { q: '(1) 是 我 不 日本 人 →', hint: '我不是日本人。' },
        { q: '(2) 吗 老师 是 你 也 →', hint: '你也是老师吗?' },
        { q: '(3) 是 校长 他 吗 →', hint: '他是校长吗?' },
        { q: '(4) 也 学生 她 是 中国 →', hint: '她也是中国学生。' },
        { q: '(5) 都 不 我们 留学生 是 →', hint: '我们都不是留学生。' },
        { q: '(6) 大夫 我爸爸 都 妈妈 是 →', hint: '我爸爸妈妈都是大夫。' },
      ],
    },
  ],
}
