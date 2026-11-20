/** Mã quyển của Giáo trình chuẩn HSK 1 (các quyển 1-6 là bộ Hán ngữ). */
export const HSK_STD_ID = 7
/** Mã quyển của Giáo trình chuẩn HSK 2. */
export const HSK_STD2_ID = 8
/** Mã quyển của Giáo trình chuẩn HSK 3. */
export const HSK_STD3_ID = 9
/** Mã quyển của Giáo trình chuẩn HSK 4 (Thượng). */
export const HSK_STD4_ID = 10

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

// Giáo trình chuẩn HSK 2 (标准教程 2): 15 bài, mục lục lấy từ sách. Tên tiếng Việt do app dịch.
const hskStd2: LessonStub[] = [
  { id: 1, hanzi: '九月去北京旅游最好', pinyin: 'Jiǔ yuè qù Běijīng lǚyóu zuì hǎo', vi: 'Tháng 9 đi Bắc Kinh du lịch là đẹp nhất' },
  { id: 2, hanzi: '我每天六点起床', pinyin: 'Wǒ měi tiān liù diǎn qǐ chuáng', vi: 'Hằng ngày tôi thức dậy lúc 6 giờ' },
  { id: 3, hanzi: '左边那个红色的是我的', pinyin: 'Zuǒbian nàge hóngsè de shì wǒ de', vi: 'Cái màu đỏ bên trái là của tôi' },
  { id: 4, hanzi: '这个工作是他帮我介绍的', pinyin: 'Zhège gōngzuò shì tā bāng wǒ jièshào de', vi: 'Công việc này là anh ấy giới thiệu giúp tôi' },
  { id: 5, hanzi: '就买这件吧', pinyin: 'Jiù mǎi zhè jiàn ba', vi: 'Mua cái này đi' },
  { id: 6, hanzi: '你怎么不吃了', pinyin: 'Nǐ zěnme bù chī le', vi: 'Sao bạn không ăn nữa' },
  { id: 7, hanzi: '你家离公司远吗', pinyin: 'Nǐ jiā lí gōngsī yuǎn ma', vi: 'Nhà bạn có xa công ty không' },
  { id: 8, hanzi: '让我想想再告诉你', pinyin: 'Ràng wǒ xiǎngxiang zài gàosu nǐ', vi: 'Để tôi nghĩ đã rồi nói với bạn' },
  { id: 9, hanzi: '题太多，我没做完', pinyin: 'Tí tài duō, wǒ méi zuò wán', vi: 'Bài nhiều quá, tôi làm không xong' },
  { id: 10, hanzi: '别找了，手机在桌子上呢', pinyin: 'Bié zhǎo le, shǒujī zài zhuōzi shang ne', vi: 'Đừng tìm nữa, điện thoại ở trên bàn kìa' },
  { id: 11, hanzi: '他比我大三岁', pinyin: 'Tā bǐ wǒ dà sān suì', vi: 'Anh ấy lớn hơn tôi ba tuổi' },
  { id: 12, hanzi: '你穿得太少了', pinyin: 'Nǐ chuān de tài shǎo le', vi: 'Bạn mặc ít quá' },
  { id: 13, hanzi: '门开着呢', pinyin: 'Mén kāi zhe ne', vi: 'Cửa đang mở' },
  { id: 14, hanzi: '你看过那个电影吗', pinyin: 'Nǐ kàn guo nàge diànyǐng ma', vi: 'Bạn đã xem bộ phim đó chưa' },
  { id: 15, hanzi: '新年就要到了', pinyin: 'Xīnnián jiù yào dào le', vi: 'Năm mới sắp đến rồi' },
]

// Giáo trình chuẩn HSK 3: 20 bài, mục lục lấy từ sách giáo viên; tên tiếng Việt theo sách giáo khoa (bài 1–3) hoặc app dịch.
const hskStd3: LessonStub[] = [
  { id: 1, hanzi: '周末你有什么打算？', pinyin: 'Zhōumò nǐ yǒu shénme dǎsuàn?', vi: 'Anh dự định làm gì vào cuối tuần vậy?' },
  { id: 2, hanzi: '他什么时候回来？', pinyin: 'Tā shénme shíhou huílai?', vi: 'Khi nào anh ấy quay về?' },
  { id: 3, hanzi: '桌子上放着很多饮料。', pinyin: 'Zhuōzi shang fàngzhe hěn duō yǐnliào.', vi: 'Trên bàn có rất nhiều thức uống.' },
  { id: 4, hanzi: '她总是笑着跟客人说话。', pinyin: 'Tā zǒngshì xiàozhe gēn kèrén shuō huà.', vi: 'Cô ấy luôn mỉm cười nói chuyện với khách' },
  { id: 5, hanzi: '我最近越来越胖了。', pinyin: 'Wǒ zuìjìn yuè lái yuè pàng le.', vi: 'Dạo này tôi ngày càng béo' },
  { id: 6, hanzi: '怎么突然找不到了？', pinyin: 'Zěnme tūrán zhǎo bu dào le?', vi: 'Sao tự nhiên lại không tìm thấy?' },
  { id: 7, hanzi: '我跟她都认识五年了。', pinyin: 'Wǒ gēn tā dōu rènshi wǔ nián le.', vi: 'Tôi và cô ấy đã quen nhau năm năm rồi' },
  { id: 8, hanzi: '你去哪儿我就去哪儿。', pinyin: 'Nǐ qù nǎr wǒ jiù qù nǎr.', vi: 'Bạn đi đâu tôi đi đó' },
  { id: 9, hanzi: '她的汉语说得跟中国人一样好。', pinyin: 'Tā de Hànyǔ shuō de gēn Zhōngguó rén yíyàng hǎo.', vi: 'Cô ấy nói tiếng Hán giỏi như người Trung Quốc' },
  { id: 10, hanzi: '数学比历史难多了。', pinyin: 'Shùxué bǐ lìshǐ nán duō le.', vi: 'Toán khó hơn sử nhiều' },
  { id: 11, hanzi: '别忘了把空调关了。', pinyin: 'Bié wàng le bǎ kōngtiáo guān le.', vi: 'Đừng quên tắt điều hòa' },
  { id: 12, hanzi: '把重要的东西放在我这儿吧。', pinyin: 'Bǎ zhòngyào de dōngxi fàng zài wǒ zhèr ba.', vi: 'Để đồ quan trọng ở chỗ tôi đi' },
  { id: 13, hanzi: '我是走回来的。', pinyin: 'Wǒ shì zǒu huílai de.', vi: 'Tôi đi bộ về' },
  { id: 14, hanzi: '你把水果拿过来。', pinyin: 'Nǐ bǎ shuǐguǒ ná guolai.', vi: 'Bạn mang hoa quả lại đây' },
  { id: 15, hanzi: '其他都没什么问题。', pinyin: 'Qítā dōu méi shénme wèntí.', vi: 'Những cái khác đều không có vấn đề gì' },
  { id: 16, hanzi: '我现在累得下了班就想睡觉。', pinyin: 'Wǒ xiànzài lèi de xià le bān jiù xiǎng shuì jiào.', vi: 'Giờ tôi mệt đến mức tan làm là muốn ngủ' },
  { id: 17, hanzi: '谁都有办法看好你的"病"。', pinyin: 'Shéi dōu yǒu bànfǎ kànhǎo nǐ de "bìng".', vi: 'Ai cũng có cách chữa khỏi "bệnh" của bạn' },
  { id: 18, hanzi: '我相信他们会同意的。', pinyin: 'Wǒ xiāngxìn tāmen huì tóngyì de.', vi: 'Tôi tin họ sẽ đồng ý' },
  { id: 19, hanzi: '你没看出来吗？', pinyin: 'Nǐ méi kàn chulai ma?', vi: 'Bạn không nhận ra sao?' },
  { id: 20, hanzi: '我被他影响了。', pinyin: 'Wǒ bèi tā yǐngxiǎng le.', vi: 'Tôi bị anh ấy ảnh hưởng' },
]

// Giáo trình chuẩn HSK 4 (Thượng, bài 1–10): bài 1–10; tên tiếng Việt theo sách giáo khoa.
const hskStd4: LessonStub[] = [
  { id: 1, hanzi: '简单的爱情', pinyin: 'Jiǎndān de àiqíng', vi: 'Tình yêu đơn giản' },
  { id: 2, hanzi: '真正的朋友', pinyin: 'Zhēnzhèng de péngyou', vi: 'Người bạn chân chính' },
  { id: 3, hanzi: '经理对我印象不错', pinyin: 'Jīnglǐ duì wǒ yìnxiàng búcuò', vi: 'Giám đốc có ấn tượng tốt về tôi' },
  { id: 4, hanzi: '不要太着急赚钱', pinyin: 'Búyào tài zháojí zhuàn qián', vi: 'Đừng quá nôn nóng kiếm tiền' },
  { id: 5, hanzi: '只买对的，不买贵的', pinyin: 'Zhǐ mǎi duì de, bù mǎi guì de', vi: 'Chỉ mua đồ đúng, không mua đồ đắt' },
  { id: 6, hanzi: '一分钱一分货', pinyin: 'Yì fēn qián yì fēn huò', vi: 'Tiền nào của nấy' },
  { id: 7, hanzi: '最好的医生是自己', pinyin: 'Zuì hǎo de yīshēng shì zìjǐ', vi: 'Bác sĩ tốt nhất là bản thân' },
  { id: 8, hanzi: '生活中不缺少美', pinyin: 'Shēnghuó zhōng bù quēshǎo měi', vi: 'Cuộc sống không thiếu cái đẹp' },
  { id: 9, hanzi: '阳光总在风雨后', pinyin: 'Yángguāng zǒng zài fēngyǔ hòu', vi: 'Sau cơn mưa trời lại sáng' },
  { id: 10, hanzi: '幸福的标准', pinyin: 'Xìngfú de biāozhǔn', vi: 'Tiêu chuẩn của hạnh phúc' },
]

// Quyển 3-6: chưa có mục lục (chưa có file sách), sẽ bổ sung khi có.
export const books: Book[] = [
  { id: 1, title: 'Quyển 1', lessons: book1 },
  { id: 2, title: 'Quyển 2', lessons: book2 },
  ...[3, 4, 5, 6].map(id => ({ id, title: `Quyển ${id}`, lessons: [] as LessonStub[] })),
  { id: HSK_STD_ID, title: 'Giáo trình chuẩn HSK 1', lessons: hskStd1 },
  { id: HSK_STD2_ID, title: 'Giáo trình chuẩn HSK 2', lessons: hskStd2 },
  { id: HSK_STD3_ID, title: 'Giáo trình chuẩn HSK 3', lessons: hskStd3 },
  { id: HSK_STD4_ID, title: 'Giáo trình chuẩn HSK 4', lessons: hskStd4 },
]

export const getBook = (id: number) => books.find(b => b.id === id)

/** Tên quyển để hiện trên giao diện: "Quyển 1" hoặc "Giáo trình chuẩn HSK 1". */
export const bookLabel = (id: number) => getBook(id)?.title ?? `Quyển ${id}`
