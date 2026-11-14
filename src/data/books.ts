/** Mã quyển của Giáo trình chuẩn HSK 1 (các quyển 1-6 là bộ Hán ngữ). */
export const HSK_STD_ID = 7

export interface LessonStub { id: number; hanzi: string; pinyin: string; vi: string }
export interface Book { id: number; title: string; lessons: LessonStub[] }

// Mục lục lấy từ sách (Quyển 1: 15 bài). Phần dịch tiếng Việt của tên bài do app tự thêm.
const book1: LessonStub[] = [
  { id: 1, hanzi: '你好', pinyin: 'Nǐ hǎo', vi: 'Xin chào' },
  { id: 2, hanzi: '汉语不太难', pinyin: 'Hànyǔ bú tài nán', vi: 'Tiếng Hán không khó lắm' },
  { id: 3, hanzi: '明天见', pinyin: 'Míngtiān jiàn', vi: 'Ngày mai gặp' },
  { id: 4, hanzi: '你去哪儿', pinyin: 'Nǐ qù nǎr', vi: 'Bạn đi đâu' },
  { id: 5, hanzi: '这是王老师', pinyin: 'Zhè shì Wáng lǎoshī', vi: 'Đây là thầy Vương' },
  { id: 6, hanzi: '我学习汉语', pinyin: 'Wǒ xuéxí Hànyǔ', vi: 'Tôi học tiếng Hán' },
  { id: 7, hanzi: '你吃什么', pinyin: 'Nǐ chī shénme', vi: 'Bạn ăn gì' },
  { id: 8, hanzi: '苹果一斤多少钱', pinyin: 'Píngguǒ yì jīn duōshao qián', vi: 'Táo một cân bao nhiêu tiền' },
  { id: 9, hanzi: '我换人民币', pinyin: 'Wǒ huàn rénmínbì', vi: 'Tôi đổi nhân dân tệ' },
  { id: 10, hanzi: '他住哪儿', pinyin: 'Tā zhù nǎr', vi: 'Anh ấy ở đâu' },
  { id: 11, hanzi: '我们都是留学生', pinyin: 'Wǒmen dōu shì liúxuéshēng', vi: 'Chúng tôi đều là lưu học sinh' },
  { id: 12, hanzi: '你在哪儿学习', pinyin: 'Nǐ zài nǎr xuéxí', vi: 'Bạn học ở đâu' },
  { id: 13, hanzi: '这是不是中药', pinyin: 'Zhè shì bu shì zhōngyào', vi: 'Đây có phải thuốc bắc không' },
  { id: 14, hanzi: '你的车是新的还是旧的', pinyin: 'Nǐ de chē shì xīn de háishi jiù de', vi: 'Xe của bạn mới hay cũ' },
  { id: 15, hanzi: '你们公司有多少职员', pinyin: 'Nǐmen gōngsī yǒu duōshao zhíyuán', vi: 'Công ty các bạn có bao nhiêu nhân viên' },
]

const book2: LessonStub[] = [
  { id: 16, hanzi: '你常去图书馆吗', pinyin: 'Nǐ cháng qù túshūguǎn ma', vi: 'Bạn có thường đi thư viện không' },
  { id: 17, hanzi: '他在做什么呢', pinyin: 'Tā zài zuò shénme ne', vi: 'Anh ấy đang làm gì thế' },
  { id: 18, hanzi: '我去邮局寄包裹', pinyin: 'Wǒ qù yóujú jì bāoguǒ', vi: 'Tôi đến bưu điện gửi bưu kiện' },
  { id: 19, hanzi: '可以试试吗', pinyin: 'Kěyǐ shìshi ma', vi: 'Có thể thử được không' },
  { id: 20, hanzi: '祝你生日快乐', pinyin: 'Zhù nǐ shēngrì kuàilè', vi: 'Chúc bạn sinh nhật vui vẻ' },
  { id: 21, hanzi: '我们明天七点一刻出发', pinyin: 'Wǒmen míngtiān qī diǎn yí kè chūfā', vi: 'Ngày mai bảy giờ mười lăm chúng ta xuất phát' },
  { id: 22, hanzi: '我打算请老师教我京剧', pinyin: 'Wǒ dǎsuàn qǐng lǎoshī jiāo wǒ jīngjù', vi: 'Tôi định nhờ thầy dạy tôi kinh kịch' },
  { id: 23, hanzi: '学校里边有邮局吗', pinyin: 'Xuéxiào lǐbian yǒu yóujú ma', vi: 'Trong trường có bưu điện không' },
  { id: 24, hanzi: '我想学太极拳', pinyin: 'Wǒ xiǎng xué tàijíquán', vi: 'Tôi muốn học thái cực quyền' },
  { id: 25, hanzi: '她学得很好', pinyin: 'Tā xué de hěn hǎo', vi: 'Cô ấy học rất tốt' },
  { id: 26, hanzi: '田芳去哪儿了', pinyin: 'Tián Fāng qù nǎr le', vi: 'Điền Phương đi đâu rồi' },
  { id: 27, hanzi: '玛丽哭了', pinyin: 'Mǎlì kū le', vi: 'Mary khóc rồi' },
  { id: 28, hanzi: '我吃了早饭就来了', pinyin: 'Wǒ chī le zǎofàn jiù lái le', vi: 'Ăn sáng xong tôi đến ngay' },
  { id: 29, hanzi: '我都做对了', pinyin: 'Wǒ dōu zuò duì le', vi: 'Tôi làm đúng hết rồi' },
  { id: 30, hanzi: '我来了两个多月了', pinyin: 'Wǒ lái le liǎng ge duō yuè le', vi: 'Tôi đến được hơn hai tháng rồi' },
]

// Giáo trình chuẩn HSK 1 (标准教程 1, 姜丽萍): 15 bài, mục lục lấy từ sách.
const hskStd1: LessonStub[] = [
  { id: 1, hanzi: '你好！', pinyin: 'Nǐ hǎo!', vi: 'Chào anh!' },
  { id: 2, hanzi: '谢谢你！', pinyin: 'Xièxie nǐ!', vi: 'Cảm ơn anh!' },
  { id: 3, hanzi: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', vi: 'Cô tên gì?' },
  { id: 4, hanzi: '她是我的汉语老师。', pinyin: 'Tā shì wǒ de Hànyǔ lǎoshī.', vi: 'Cô ấy là cô giáo dạy tôi tiếng Trung Quốc.' },
  { id: 5, hanzi: '她女儿今年二十岁。', pinyin: "Tā nǚ'ér jīnnián èrshí suì.", vi: 'Con gái của cô ấy năm nay 20 tuổi.' },
  { id: 6, hanzi: '我会说汉语。', pinyin: 'Wǒ huì shuō Hànyǔ.', vi: 'Tôi biết nói tiếng Trung Quốc.' },
  { id: 7, hanzi: '今天几号？', pinyin: 'Jīntiān jǐ hào?', vi: 'Hôm nay là ngày mấy?' },
  { id: 8, hanzi: '我想喝茶。', pinyin: 'Wǒ xiǎng hē chá.', vi: 'Tôi muốn uống trà.' },
  { id: 9, hanzi: '你儿子在哪儿工作？', pinyin: 'Nǐ érzi zài nǎr gōngzuò?', vi: 'Con trai anh làm việc ở đâu?' },
  { id: 10, hanzi: '我能坐这儿吗？', pinyin: 'Wǒ néng zuò zhèr ma?', vi: 'Tôi có thể ngồi ở đây được không?' },
  { id: 11, hanzi: '现在几点？', pinyin: 'Xiànzài jǐ diǎn?', vi: 'Bây giờ là mấy giờ?' },
  { id: 12, hanzi: '明天天气怎么样？', pinyin: 'Míngtiān tiānqì zěnmeyàng?', vi: 'Ngày mai thời tiết thế nào?' },
  { id: 13, hanzi: '他在学做中国菜呢。', pinyin: 'Tā zài xué zuò Zhōngguó cài ne.', vi: 'Anh ấy đang học nấu món ăn Trung Quốc.' },
  { id: 14, hanzi: '她买了不少衣服。', pinyin: 'Tā mǎi le bù shǎo yīfu.', vi: 'Cô ấy đã mua nhiều quần áo.' },
  { id: 15, hanzi: '我是坐飞机来的。', pinyin: 'Wǒ shì zuò fēijī lái de.', vi: 'Tôi đáp máy bay bay đến đây.' },
]

// Quyển 3-6: chưa có mục lục (chưa có file sách), sẽ bổ sung khi có.
export const books: Book[] = [
  { id: 1, title: 'Quyển 1', lessons: book1 },
  { id: 2, title: 'Quyển 2', lessons: book2 },
  ...[3, 4, 5, 6].map(id => ({ id, title: `Quyển ${id}`, lessons: [] as LessonStub[] })),
  { id: HSK_STD_ID, title: 'Giáo trình chuẩn HSK 1', lessons: hskStd1 },
]

export const getBook = (id: number) => books.find(b => b.id === id)

/** Tên quyển để hiện trên giao diện: "Quyển 1" hoặc "Giáo trình chuẩn HSK 1". */
export const bookLabel = (id: number) => getBook(id)?.title ?? `Quyển ${id}`
