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

// Quyển 3-6: chưa có mục lục (chưa có file sách), sẽ bổ sung khi có.
export const books: Book[] = [
  { id: 1, title: 'Quyển 1', lessons: book1 },
  { id: 2, title: 'Quyển 2', lessons: book2 },
  ...[3, 4, 5, 6].map(id => ({ id, title: `Quyển ${id}`, lessons: [] as LessonStub[] })),
]

export const getBook = (id: number) => books.find(b => b.id === id)
