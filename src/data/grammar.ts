/** Ngữ pháp HSK 1, theo tài liệu "Ngữ pháp hsk1 (1).pdf". Phiên âm đã được rà lại so với bản gốc. */

export interface Example { h: string; p: string; vi: string }
export interface Point { title: string; body: string; examples?: Example[]; table?: { head: string[]; rows: string[][] } }
export type Exercise =
  | { type: 'choice'; q: string; options: string[]; answer: string; why: string }
  | { type: 'order'; vi: string; parts: string[]; why: string }

export interface GrammarTopic {
  id: string
  no: number
  title: string
  glyph: string
  summary: string
  points: Point[]
  exercises: Exercise[]
}

const c = (q: string, options: string[], answer: string, why: string): Exercise => ({ type: 'choice', q, options, answer, why })
const o = (vi: string, parts: string[], why: string): Exercise => ({ type: 'order', vi, parts, why })

export const GRAMMAR: GrammarTopic[] = [
  {
    id: 'dai-tu', no: 1, title: 'Đại từ', glyph: '代', summary: 'Đại từ nhân xưng, chỉ định và nghi vấn.',
    points: [
      {
        title: 'Đại từ nhân xưng',
        body: 'Thêm 们 sau đại từ để chỉ số nhiều. 他 (nam), 她 (nữ) và 它 (vật, con vật) đều đọc là tā, chỉ khác chữ viết. 咱们 gồm cả người nghe, 我们 có thể không gồm người nghe.',
        table: {
          head: ['Ngôi', 'Số ít', 'Số nhiều'],
          rows: [['Thứ nhất', '我 wǒ (tôi)', '我们 wǒmen (chúng tôi) · 咱们 zánmen (chúng ta)'], ['Thứ hai', '你 nǐ (bạn)', '你们 nǐmen (các bạn)'], ['Thứ ba', '他 tā (anh ấy) · 她 tā (cô ấy) · 它 tā (nó)', '他们 · 她们 · 它们 tāmen']],
        },
      },
      {
        title: 'Đại từ chỉ định',
        body: '这 (đây, này) chỉ vật gần, 那 (kia, đó) chỉ vật xa. Cấu trúc: 这/那 + 是 + danh từ (Đây là… / Kia là…); 这/那 + lượng từ + danh từ (cái… này / cái… kia). 这儿 và 那儿 chỉ nơi chốn. Gắn sau đại từ nhân xưng hoặc danh từ chỉ người để chỉ chỗ của người đó.',
        examples: [
          { h: '这是王老师。', p: 'Zhè shì Wáng lǎoshī.', vi: 'Đây là thầy Vương.' },
          { h: '那本书是他的。', p: 'Nà běn shū shì tā de.', vi: 'Quyển sách kia là của anh ấy.' },
          { h: '我这儿有很多书。', p: 'Wǒ zhèr yǒu hěn duō shū.', vi: 'Chỗ của tôi có rất nhiều sách.' },
          { h: '王老师那儿有你的笔记本。', p: 'Wáng lǎoshī nàr yǒu nǐ de bǐjìběn.', vi: 'Chỗ thầy Vương có vở của bạn.' },
        ],
      },
      {
        title: 'Đại từ nghi vấn',
        body: 'Từ hỏi đứng đúng vị trí của thông tin cần hỏi, không đổi trật tự câu và KHÔNG thêm 吗.',
        table: {
          head: ['Từ hỏi', 'Nghĩa', 'Ví dụ'],
          rows: [
            ['谁 shéi', 'ai', '那个人是谁？'], ['哪 nǎ (+ lượng từ + danh từ)', 'nào', '哪条裙子是你的？'], ['哪儿 nǎr', 'ở đâu', '你在哪儿？'],
            ['几 jǐ (+ lượng từ + danh từ)', 'mấy (số nhỏ)', '你有几本书？'], ['什么 shénme', 'cái gì', '你说什么？'], ['多少 duōshao', 'bao nhiêu', '你有多少钱？'],
            ['怎么 zěnme (+ động từ)', 'làm sao, bằng cách nào', '这个字怎么读？'], ['怎么样 zěnmeyàng', 'thế nào (hỏi tình hình, ý kiến)', '明天早上八点见，怎么样？'],
          ],
        },
      },
    ],
    exercises: [
      c('Chọn đại từ đúng: "…… (các bạn) là lưu học sinh."', ['你们', '你', '我们', '他们'], '你们', '你们 là ngôi thứ hai số nhiều.'),
      c('Chữ nào dùng cho vật hoặc con vật? (đều đọc tā)', ['它', '他', '她', '你'], '它', '它 chỉ đồ vật, con vật; 他 là nam; 她 là nữ.'),
      c('Câu hỏi nào đúng ngữ pháp?', ['你有几本书？', '你有几本书吗？', '你有书几本？', '你几有本书？'], '你有几本书？', 'Câu có từ nghi vấn 几 thì không thêm 吗, và 几 + lượng từ + danh từ.'),
      c('"这个字怎么读？" hỏi gì?', ['Cách đọc', 'Ai đọc', 'Đọc ở đâu', 'Đọc bao nhiêu'], 'Cách đọc', '怎么 + động từ hỏi cách thức.'),
      c('Điền từ hỏi: "你的书包 ______ ?" (cái này thế nào / ra sao)', ['怎么样', '怎么', '什么', '哪儿'], '怎么样', '怎么样 hỏi tình trạng hoặc ý kiến, thường đứng cuối câu.'),
      c('"Chỗ của thầy Vương" nói là:', ['王老师那儿', '王老师那', '王老师的那', '那王老师'], '王老师那儿', 'Sau danh từ chỉ người phải thêm 这儿/那儿 mới thành nơi chốn.'),
      o('Đây là sách của tôi.', ['这', '是', '我', '的', '书'], '这 + 是 + định ngữ + 的 + danh từ.'),
      o('Bạn có bao nhiêu tiền?', ['你', '有', '多少', '钱'], 'Từ hỏi 多少 đứng đúng vị trí của số tiền.'),
    ],
  },
  {
    id: 'chu-so', no: 2, title: 'Số, thời gian, tuổi, tiền', glyph: '数', summary: 'Cách nói giờ, ngày, tuổi, tiền và dãy số.',
    points: [
      {
        title: 'Thời gian: từ lớn đến nhỏ',
        body: 'Thứ tự biểu đạt thời gian: năm, tháng, ngày, giờ, phút. Ngày nói bằng 号 (khẩu ngữ) hoặc 日 (văn viết).',
        examples: [
          { h: '八点四十分', p: 'bā diǎn sìshí fēn', vi: '8 giờ 40 phút' },
          { h: '二零二二年一月十八日', p: 'èr líng èr èr nián yī yuè shíbā rì', vi: 'Ngày 18 tháng 1 năm 2022' },
        ],
      },
      {
        title: 'Tuổi và tiền',
        body: 'Tuổi: số + 岁. Tiền: 块 (= 元) và 毛 (= 角), 1 块 = 10 毛. Người Trung Quốc ngắt số theo nhóm 4 chữ số (万 = 10.000), nên 100.000 nói là 十万.',
        examples: [
          { h: '她今年三十岁。', p: 'Tā jīnnián sānshí suì.', vi: 'Cô ấy năm nay 30 tuổi.' },
          { h: '十块', p: 'shí kuài', vi: '10 đồng (tệ)' },
          { h: '五毛', p: 'wǔ máo', vi: '5 hào' },
          { h: '十万', p: 'shí wàn', vi: '100.000' },
        ],
      },
      {
        title: 'Dãy số: đọc từng số, 1 đọc yāo',
        body: 'Số nhà, số điện thoại, số chứng minh… đọc từng chữ số từ trái sang phải. Riêng số 1 thường đọc là yāo.',
        examples: [{ h: '我的电话是九四二九零零零幺。', p: 'Wǒ de diànhuà shì jiǔ sì èr jiǔ líng líng líng yāo.', vi: 'Số điện thoại của tôi là 94290001.' }],
      },
    ],
    exercises: [
      c('"Ngày 5 tháng 10" nói là:', ['十月五号', '五号十月', '十五月号', '五月十号'], '十月五号', 'Tháng trước, ngày sau.'),
      c('Thứ tự đúng khi nói thời gian đầy đủ:', ['年, 月, 日, 点, 分', '分, 点, 日, 月, 年', '日, 月, 年, 点, 分', '点, 分, 年, 月, 日'], '年, 月, 日, 点, 分', 'Đi từ đơn vị lớn đến nhỏ.'),
      c('Số 1 trong số điện thoại thường đọc là:', ['yāo', 'yī', 'liǎng', 'èr'], 'yāo', 'Dãy số đọc 1 là yāo để không nhầm với 7.'),
      c('"十万" là bao nhiêu?', ['100.000', '10.000', '1.000.000', '1.000'], '100.000', '万 = 10.000, nên 十万 = 100.000.'),
      c('Điền: "她今年二十 ______ 。"', ['岁', '块', '号', '个'], '岁', 'Tuổi dùng 岁.'),
      o('Cô ấy năm nay 30 tuổi.', ['她', '今年', '三十', '岁'], 'Chủ ngữ + thời gian + số + 岁 (không cần 是).'),
    ],
  },
  {
    id: 'lien-tu-gioi-tu', no: 3, title: 'Liên từ 和 và giới từ 在', glyph: '和', summary: 'Nối từ bằng 和; nói làm gì ở đâu bằng 在.',
    points: [
      {
        title: 'Liên từ 和 (và, với)',
        body: '和 chỉ nối hai danh từ, hai chủ ngữ hoặc hai động từ đơn. KHÔNG dùng để nối hai vế câu.',
        examples: [{ h: '我和你', p: 'wǒ hé nǐ', vi: 'Tôi và bạn' }, { h: '爸爸和妈妈都是大夫。', p: 'Bàba hé māma dōu shì dàifu.', vi: 'Bố và mẹ đều là bác sĩ.' }],
      },
      {
        title: 'Giới từ 在: ai làm gì ở đâu',
        body: 'Cấu trúc: Chủ ngữ + 在 + nơi chốn + động từ + thành phần khác. Nơi chốn đứng TRƯỚC động từ, khác với tiếng Việt.',
        examples: [{ h: '我昨天在家看电影。', p: 'Wǒ zuótiān zài jiā kàn diànyǐng.', vi: 'Hôm qua tôi ở nhà xem phim.' }, { h: '她在北京学习汉语。', p: 'Tā zài Běijīng xuéxí Hànyǔ.', vi: 'Cô ấy học tiếng Hán ở Bắc Kinh.' }],
      },
    ],
    exercises: [
      c('Chọn câu đúng:', ['我在图书馆看书。', '我看书在图书馆。', '在我图书馆看书。', '我看在图书馆书。'], '我在图书馆看书。', 'Nơi chốn đứng trước động từ.'),
      c('Điền: "我 ______ 你都是学生。"', ['和', '在', '的', '吗'], '和', '和 nối hai danh từ/đại từ.'),
      c('Câu nào dùng 和 SAI?', ['我吃饭和他看电视。', '我和他是朋友。', '苹果和香蕉很好吃。', '她和我去商店。'], '我吃饭和他看电视。', '和 không nối hai vế câu.'),
      c('"Hôm qua tôi ở nhà xem phim" là:', ['我昨天在家看电影。', '我在家昨天看电影。', '昨天看电影我在家。', '我看电影在家昨天。'], '我昨天在家看电影。', 'Thời gian đứng trước nơi chốn, nơi chốn đứng trước động từ.'),
      o('Anh ấy học tiếng Hán ở Bắc Kinh.', ['他', '在', '北京', '学习', '汉语'], '在 + nơi chốn đặt trước động từ.'),
      o('Tôi và bạn đều là sinh viên.', ['我', '和', '你', '都', '是', '学生'], '和 nối hai đại từ, 都 đứng trước 是.'),
    ],
  },
  {
    id: 'luong-tu', no: 4, title: 'Lượng từ', glyph: '量', summary: 'Số từ + lượng từ + danh từ.',
    points: [
      {
        title: 'Hai cách dùng',
        body: 'Sau số từ: số từ + lượng từ + danh từ. Sau 这, 那, 几: 这/那/几 + lượng từ + danh từ. Mỗi loại vật có lượng từ riêng; 个 là lượng từ chung dùng khi chưa biết lượng từ riêng. Số 2 trước lượng từ đọc là 两.',
        examples: [
          { h: '一碗面条', p: 'yì wǎn miàntiáo', vi: '1 bát mì' }, { h: '三本书', p: 'sān běn shū', vi: '3 quyển sách' },
          { h: '这个椅子', p: 'zhège yǐzi', vi: 'cái ghế này' }, { h: '那些年', p: 'nàxiē nián', vi: 'những năm tháng đó' }, { h: '几条裤子', p: 'jǐ tiáo kùzi', vi: 'mấy chiếc quần' },
          { h: '那个人是他爸爸。', p: 'Nàge rén shì tā bàba.', vi: 'Người kia là bố của anh ấy.' },
        ],
      },
    ],
    exercises: [
      c('Lượng từ cho sách:', ['本', '张', '件', '支'], '本', '本 dùng cho sách, vở.'),
      c('Lượng từ cho quần áo (áo):', ['件', '本', '把', '碗'], '件', '件 dùng cho quần áo.'),
      c('Điền: "我有 ______ 个哥哥。" (hai)', ['两', '二', '双', '俩个'], '两', 'Số 2 trước lượng từ đọc là 两.'),
      c('"Mấy chiếc quần" nói là:', ['几条裤子', '几裤子条', '条几裤子', '几个条裤子'], '几条裤子', '几 + lượng từ + danh từ.'),
      c('Câu nào đúng?', ['这个人是我朋友。', '这人个是我朋友。', '个这人是我朋友。', '这是个人我朋友。'], '这个人是我朋友。', '这 + lượng từ + danh từ.'),
      o('Tôi ăn một bát mì.', ['我', '吃', '一', '碗', '面条'], 'Số từ + lượng từ + danh từ.'),
    ],
  },
  {
    id: 'tro-dong-tu', no: 5, title: 'Trợ động từ 会 và 能', glyph: '会', summary: 'Biết làm (会) và có thể làm (能).',
    points: [
      {
        title: '会 và 能',
        body: '会 = biết, nhờ học tập và rèn luyện mà có kỹ năng. 能 = có thể (có khả năng hoặc điều kiện cho phép). Phủ định của cả hai là 不会 / 不能. Trợ động từ đứng trước động từ chính.',
        examples: [
          { h: '我会做饭。', p: 'Wǒ huì zuò fàn.', vi: 'Tôi biết nấu cơm.' },
          { h: '你现在能过来吗？', p: 'Nǐ xiànzài néng guòlai ma?', vi: 'Bây giờ bạn có thể qua đây không?' },
          { h: '我不会游泳。', p: 'Wǒ bú huì yóuyǒng.', vi: 'Tôi không biết bơi.' },
          { h: '他感冒了，不能来。', p: 'Tā gǎnmào le, bù néng lái.', vi: 'Anh ấy bị cảm, không thể đến.' },
        ],
      },
    ],
    exercises: [
      c('Điền: "我 ______ 说汉语。" (biết nhờ học)', ['会', '能', '想', '要'], '会', 'Kỹ năng học được dùng 会.'),
      c('Điền: "明天你 ______ 来吗?" (có thể, điều kiện cho phép)', ['能', '会', '懂', '是'], '能', 'Hỏi có thể đến được không dùng 能.'),
      c('Phủ định của 会 là:', ['不会', '没会', '不有', '没有'], '不会', '会 phủ định bằng 不会.'),
      c('Vị trí của 会 trong câu:', ['我会做饭。', '我做会饭。', '会我做饭。', '我做饭会。'], '我会做饭。', 'Trợ động từ đứng trước động từ chính.'),
      o('Bây giờ bạn có thể qua đây không?', ['你', '现在', '能', '过来', '吗'], '能 đứng trước động từ, 吗 ở cuối.'),
    ],
  },
  {
    id: 'pho-tu', no: 6, title: 'Phó từ: phủ định và mức độ', glyph: '不', summary: '不, 没(有), 很, 太…了, 非常.',
    points: [
      {
        title: 'Phó từ phủ định: 不 và 没',
        body: '不 phủ định hành động ở hiện tại, tương lai và phủ định sự thật (我不是老师). 没 phủ định hành động đã xảy ra trong quá khứ. 没有 là "không có" (phủ định của 有), cũng dùng như 没.',
        examples: [
          { h: '我不是老师。', p: 'Wǒ bú shì lǎoshī.', vi: 'Tôi không phải là giáo viên.' },
          { h: '她没有告诉我。', p: 'Tā méiyǒu gàosu wǒ.', vi: 'Cô ấy đã không nói với tôi.' },
        ],
      },
      {
        title: 'Phó từ chỉ mức độ',
        body: '很 (rất), 太…了 (quá, lắm), 非常 (rất nhiều, vô cùng). Đứng trước tính từ.',
        table: { head: ['Phó từ', 'Nghĩa', 'Ví dụ'], rows: [['很 hěn', 'rất', '我很难过。'], ['太…了 tài…le', 'quá, lắm', '太好了！'], ['非常 fēicháng', 'vô cùng', '非常好。']] },
      },
    ],
    exercises: [
      c('Điền: "他 ______ 是我的哥哥。" (không phải)', ['不', '没', '很', '太'], '不', '不 phủ định 是.'),
      c('Điền: "昨天她 ______ 来。" (đã không đến)', ['没', '不', '很', '非常'], '没', '没 phủ định hành động đã xảy ra trong quá khứ.'),
      c('"Không có" nói là:', ['没有', '不有', '不是', '没是'], '没有', '有 chỉ phủ định bằng 没有.'),
      c('Chọn câu có mức độ cao nhất ("tuyệt quá"):', ['太好了！', '好', '不好', '很好'], '太好了！', '太…了 diễn tả mức độ rất cao.'),
      c('Câu nào đúng?', ['她非常漂亮。', '她漂亮非常。', '非常她漂亮。', '她漂亮很。'], '她非常漂亮。', 'Phó từ đứng trước tính từ.'),
      o('Cô ấy đã không đi xem phim truyền hình.', ['她', '没', '去', '看', '电视剧'], '没 đứng trước động từ để phủ định quá khứ.'),
    ],
  },
  {
    id: 'de', no: 7, title: 'Trợ từ kết cấu 的', glyph: '的', summary: 'Nối định ngữ với danh từ trung tâm.',
    points: [
      {
        title: 'Định ngữ + 的 + trung tâm ngữ',
        body: 'Định ngữ bổ nghĩa cho danh từ và đứng trước danh từ. BẮT BUỘC có 的 khi: (1) danh từ hoặc đại từ làm định ngữ chỉ sở hữu; (2) cụm tính từ làm định ngữ; (3) cụm chủ vị làm định ngữ.',
        examples: [
          { h: '我的书', p: 'wǒ de shū', vi: 'Sách của tôi' },
          { h: '漂亮的裙子', p: 'piàoliang de qúnzi', vi: 'Cái váy rất đẹp' },
          { h: '我买的东西', p: 'wǒ mǎi de dōngxi', vi: 'Đồ mà tôi mua' },
        ],
      },
    ],
    exercises: [
      c('Điền: "这是我 ______ 书。"', ['的', '得', '地', '了'], '的', '的 nối đại từ sở hữu với danh từ.'),
      c('"Cái váy rất đẹp":', ['漂亮的裙子', '漂亮裙子的', '的漂亮裙子', '裙子漂亮的'], '漂亮的裙子', 'Tính từ + 的 + danh từ.'),
      c('"Đồ mà tôi mua":', ['我买的东西', '我的买东西', '买我的东西', '东西我买的'], '我买的东西', 'Cụm chủ vị + 的 + danh từ.'),
      o('Sách của tôi ở đây.', ['我', '的', '书', '在', '这儿'], 'Đại từ + 的 + danh từ.'),
    ],
  },
  {
    id: 'tro-tu-ngu-khi', no: 8, title: 'Trợ từ ngữ khí: 了, 吗, 呢', glyph: '了', summary: 'Cuối câu: đã xảy ra, câu hỏi, câu hỏi tỉnh lược.',
    points: [
      {
        title: '了, 吗, 呢',
        body: '了 thường đứng cuối câu, biểu thị ngữ khí khẳng định hoặc động tác đã xảy ra. 吗 đứng cuối câu hỏi có/không. 呢 đứng cuối câu làm câu nói mềm hơn, hoặc dùng cho câu hỏi tỉnh lược.',
        examples: [
          { h: '他去公园了。', p: 'Tā qù gōngyuán le.', vi: 'Anh ta đến công viên rồi.' },
          { h: '他是老师吗？', p: 'Tā shì lǎoshī ma?', vi: 'Anh ấy là giáo viên à?' },
          { h: '你在哪儿呢？', p: 'Nǐ zài nǎr ne?', vi: 'Bạn ở đâu vậy?' },
        ],
      },
    ],
    exercises: [
      c('Điền: "他是老师 ______ ?"', ['吗', '了', '的', '得'], '吗', '吗 tạo câu hỏi có/không.'),
      c('Điền: "他去公园 ______ 。" (đã đi)', ['了', '吗', '呢', '吧'], '了', '了 ở cuối biểu thị hành động đã xảy ra.'),
      c('Câu nào dùng 吗 SAI?', ['你是谁吗？', '你是老师吗？', '这是书吗？', '你好吗？'], '你是谁吗？', 'Câu có từ nghi vấn 谁 thì không thêm 吗.'),
      c('"Tôi là giáo viên, còn bạn?" là:', ['我是老师，你呢？', '我是老师，你吗？', '我是老师，你了？', '我是老师，你的？'], '我是老师，你呢？', '呢 dùng cho câu hỏi tỉnh lược.'),
      o('Anh ấy là giáo viên à?', ['他', '是', '老师', '吗'], '吗 đặt ở cuối câu trần thuật.'),
    ],
  },
  {
    id: 'cau-hoi-cau-khien', no: 9, title: 'Câu nghi vấn và câu cầu khiến', glyph: '问', summary: 'Hỏi bằng 吗, 呢; mời bằng 请.',
    points: [
      {
        title: 'Câu nghi vấn',
        body: '吗: thêm vào cuối câu trần thuật để hỏi có/không. 呢: hỏi tỉnh lược, lặp lại câu hỏi với đối tượng khác.',
        examples: [
          { h: '这是你的书吗？', p: 'Zhè shì nǐ de shū ma?', vi: 'Đây là sách của bạn à?' },
          { h: '我是老师，你呢？', p: 'Wǒ shì lǎoshī, nǐ ne?', vi: 'Tôi là giáo viên, còn bạn?' },
        ],
      },
      { title: 'Câu cầu khiến: 请', body: '请 + động từ để mời hoặc đề nghị lịch sự.', examples: [{ h: '请进！', p: 'Qǐng jìn!', vi: 'Mời vào!' }, { h: '请坐！', p: 'Qǐng zuò!', vi: 'Mời ngồi!' }] },
    ],
    exercises: [
      c('"Mời vào!" nói là:', ['请进！', '进请！', '请你进吗？', '进了！'], '请进！', '请 + động từ.'),
      c('Hỏi tỉnh lược "Còn bạn?":', ['你呢？', '你吗？', '你的？', '你了？'], '你呢？', '呢 dùng cho câu hỏi tỉnh lược.'),
      c('Câu nào là câu hỏi đúng?', ['这是你的书吗？', '这是你的书。', '这吗是你的书？', '吗这是你的书？'], '这是你的书吗？', '吗 ở cuối.'),
      o('Mời ngồi!', ['请', '坐'], '请 + động từ.'),
    ],
  },
  {
    id: 'cau-tran-thuat', no: 10, title: 'Câu trần thuật và các câu đặc biệt', glyph: '句', summary: 'Khẳng định, phủ định, 在…呢, câu 是 và câu 有.',
    points: [
      {
        title: 'Câu khẳng định và phủ định',
        body: 'Khẳng định: nói thẳng sự việc. Phủ định bằng 不 (hiện tại, tương lai) hoặc 没 (quá khứ).',
        examples: [
          { h: '明天是星期三。', p: 'Míngtiān shì xīngqīsān.', vi: 'Ngày mai là thứ Tư.' },
          { h: '我喜欢他。', p: 'Wǒ xǐhuan tā.', vi: 'Tôi thích anh ấy.' },
          { h: '天气很热。', p: 'Tiānqì hěn rè.', vi: 'Thời tiết rất nóng.' },
          { h: '他不是我的哥哥。', p: 'Tā bú shì wǒ de gēge.', vi: 'Anh ấy không phải anh trai tôi.' },
          { h: '她没去看电视剧。', p: 'Tā méi qù kàn diànshìjù.', vi: 'Cô ấy đã không đi xem phim truyền hình.' },
        ],
      },
      {
        title: 'Hành động đang diễn ra: 在……呢',
        body: 'Dùng 在 trước động từ và 呢 cuối câu để diễn tả hành động đang tiếp diễn.',
        examples: [{ h: '他们在学习呢。', p: 'Tāmen zài xuéxí ne.', vi: 'Họ đang học bài.' }],
      },
      {
        title: 'Câu chữ 是 và câu chữ 有',
        body: 'Câu 是: A + 是 + B (A là B). Câu 有: chỉ sở hữu hoặc tồn tại.',
        examples: [{ h: '他是我的同学。', p: 'Tā shì wǒ de tóngxué.', vi: 'Anh ấy là bạn học của tôi.' }, { h: '一个星期有七天。', p: 'Yí ge xīngqī yǒu qī tiān.', vi: 'Một tuần có bảy ngày.' }],
      },
    ],
    exercises: [
      c('Điền: "他们 ______ 学习呢。" (đang học)', ['在', '不', '没', '的'], '在', '在…呢 diễn tả hành động đang diễn ra.'),
      c('Phủ định "她去看电视剧" trong quá khứ:', ['她没去看电视剧。', '她不去看电视剧了。', '她没有是去看。', '她不看没电视剧。'], '她没去看电视剧。', 'Quá khứ dùng 没.'),
      c('"Một tuần có bảy ngày":', ['一个星期有七天。', '一个星期是七天有。', '一个星期七天有。', '有一个星期七天。'], '一个星期有七天。', '有 chỉ tồn tại, nằm giữa chủ ngữ và tân ngữ.'),
      c('Câu nào là câu chữ 是?', ['他是我的同学。', '他有我的同学。', '他在我的同学。', '他的我同学。'], '他是我的同学。', 'A + 是 + B.'),
      o('Họ đang học bài.', ['他们', '在', '学习', '呢'], '在 trước động từ, 呢 cuối câu.'),
      o('Anh ấy không phải anh trai tôi.', ['他', '不', '是', '我', '的', '哥哥'], '不 đứng trước 是.'),
    ],
  },
]

export const getGrammar = (id: string) => GRAMMAR.find(t => t.id === id)
export const allExercises = () => GRAMMAR.flatMap(t => t.exercises.map(e => ({ ...e, topic: t.id })))
