import type { Lesson } from './types'

/** Quyển 2, Bài 20. */
export const lesson20: Lesson = {
  id: 20,
  title: 'Chúc bạn sinh nhật vui vẻ',
  hanzi: '祝你生日快乐',
  pinyin: 'Zhù nǐ shēngrì kuàilè',
  vi: 'Chúc bạn sinh nhật vui vẻ',
  intro: 'Hỏi tuổi, tuổi con giáp, ngày sinh; cách đọc năm, tháng, ngày; câu vị ngữ danh từ; câu hỏi bằng ngữ điệu; mời dự tiệc sinh nhật và lời chúc.',
  dialogue: [
    { who: 'A', scene: '(一) 你哪一年大学毕业 – Bạn tốt nghiệp đại học năm nào', hanzi: '你哪一年大学毕业？', pinyin: 'Nǐ nǎ yì nián dàxué bìyè?', vi: 'Bạn tốt nghiệp đại học năm nào?' },
    { who: 'B', hanzi: '明年。你呢？', pinyin: 'Míngnián. Nǐ ne?', vi: 'Sang năm. Còn bạn?' },
    { who: 'A', hanzi: '我后年。你今年多大？', pinyin: 'Wǒ hòunián. Nǐ jīnnián duō dà?', vi: 'Tôi năm sau nữa. Năm nay bạn bao nhiêu tuổi?' },
    { who: 'B', hanzi: '我二十一岁。', pinyin: 'Wǒ èrshíyī suì.', vi: 'Tôi hai mươi mốt tuổi.' },
    { who: 'A', hanzi: '属什么的？', pinyin: 'Shǔ shénme de?', vi: 'Bạn tuổi con gì?' },
    { who: 'B', hanzi: '属狗的。', pinyin: 'Shǔ gǒu de.', vi: 'Tuổi Tuất (con chó).' },
    { who: 'A', scene: '(二) 祝你生日快乐 – Chúc bạn sinh nhật vui vẻ', hanzi: '你的生日是几月几号？', pinyin: 'Nǐ de shēngrì shì jǐ yuè jǐ hào?', vi: 'Sinh nhật bạn là ngày mấy tháng mấy?' },
    { who: 'B', hanzi: '我的生日是十月十八号，正好是星期六。', pinyin: 'Wǒ de shēngrì shì shí yuè shíbā hào, zhènghǎo shì xīngqīliù.', vi: 'Sinh nhật tôi là ngày 18 tháng 10, đúng thứ Bảy.' },
    { who: 'A', hanzi: '是吗？你打算怎么过？', pinyin: 'Shì ma? Nǐ dǎsuan zěnme guò?', vi: 'Thế à? Bạn định đón sinh nhật thế nào?' },
    { who: 'B', hanzi: '我准备举行一个生日晚会。你也来参加，好吗？', pinyin: 'Wǒ zhǔnbèi jǔxíng yí ge shēngrì wǎnhuì. Nǐ yě lái cānjiā, hǎo ma?', vi: 'Tôi định tổ chức một buổi tiệc sinh nhật. Bạn cũng đến dự nhé?' },
    { who: 'A', hanzi: '什么时间举行？', pinyin: 'Shénme shíjiān jǔxíng?', vi: 'Tổ chức lúc nào?' },
    { who: 'B', hanzi: '星期六晚上七点。', pinyin: 'Xīngqīliù wǎnshang qī diǎn.', vi: 'Bảy giờ tối thứ Bảy.' },
    { who: 'A', hanzi: '在哪儿？', pinyin: 'Zài nǎr?', vi: 'Ở đâu?' },
    { who: 'B', hanzi: '就在我的房间。', pinyin: 'Jiù zài wǒ de fángjiān.', vi: 'Ngay trong phòng tôi.' },
    { who: 'A', hanzi: '好。我一定去。祝你生日快乐！', pinyin: 'Hǎo. Wǒ yídìng qù. Zhù nǐ shēngrì kuàilè!', vi: 'Được. Tôi nhất định đến. Chúc bạn sinh nhật vui vẻ!' },
    { who: 'B', hanzi: '谢谢！', pinyin: 'Xièxie!', vi: 'Cảm ơn!' },
  ],
  dialogueTip: 'Hỏi tuổi: <b>你今年多大?</b> (đáp 我二十一岁). Hỏi con giáp: <b>属什么的?</b> (属狗的). Ngày sinh: <b>几月几号?</b>. Mời: <b>你也来参加，好吗?</b>. Chúc: <b>祝你生日快乐!</b>. <b>就在我的房间</b>: 就 nhấn mạnh "ngay tại".',
  slowSay: '祝你生日快乐',
  vocab: [
    { hanzi: '年', pinyin: 'nián', pos: 'danh từ', meaning: 'năm', han_viet: 'niên' },
    { hanzi: '今年', pinyin: 'jīnnián', pos: 'danh từ', meaning: 'năm nay', han_viet: 'kim niên' },
    { hanzi: '明年', pinyin: 'míngnián', pos: 'danh từ', meaning: 'sang năm', han_viet: 'minh niên' },
    { hanzi: '后年', pinyin: 'hòunián', pos: 'danh từ', meaning: 'năm sau nữa', han_viet: 'hậu niên' },
    { hanzi: '去年', pinyin: 'qùnián', pos: 'danh từ', meaning: 'năm ngoái', han_viet: 'khứ niên' },
    { hanzi: '毕业', pinyin: 'bì yè', pos: 'động từ', meaning: 'tốt nghiệp', han_viet: 'tất nghiệp' },
    { hanzi: '多', pinyin: 'duō', pos: 'phó từ', meaning: 'bao nhiêu, đến mức nào (dùng khi hỏi)', han_viet: 'đa' },
    { hanzi: '多大', pinyin: 'duō dà', pos: 'cụm', meaning: 'bao nhiêu tuổi', han_viet: '' },
    { hanzi: '岁', pinyin: 'suì', pos: 'lượng từ', meaning: 'tuổi', han_viet: 'tuế' },
    { hanzi: '属', pinyin: 'shǔ', pos: 'động từ', meaning: 'tuổi (con giáp), thuộc', han_viet: 'thuộc' },
    { hanzi: '狗', pinyin: 'gǒu', pos: 'danh từ', meaning: 'chó', han_viet: 'cẩu' },
    { hanzi: '月', pinyin: 'yuè', pos: 'danh từ', meaning: 'tháng; mặt trăng', han_viet: 'nguyệt' },
    { hanzi: '号', pinyin: 'hào', pos: 'lượng từ', meaning: 'ngày (trong tháng)', han_viet: 'hiệu' },
    { hanzi: '生日', pinyin: 'shēngrì', pos: 'danh từ', meaning: 'sinh nhật', han_viet: 'sinh nhật' },
    { hanzi: '正好', pinyin: 'zhènghǎo', pos: 'phó/tính từ', meaning: 'đúng lúc, vừa khéo', han_viet: 'chính hảo' },
    { hanzi: '打算', pinyin: 'dǎsuan', pos: 'động/danh từ', meaning: 'dự định, kế hoạch', han_viet: 'đả toán' },
    { hanzi: '过', pinyin: 'guò', pos: 'động từ', meaning: 'đón (lễ, sinh nhật); trải qua', han_viet: 'quá' },
    { hanzi: '准备', pinyin: 'zhǔnbèi', pos: 'động từ', meaning: 'chuẩn bị', han_viet: 'chuẩn bị' },
    { hanzi: '举行', pinyin: 'jǔxíng', pos: 'động từ', meaning: 'tổ chức, cử hành', han_viet: 'cử hành' },
    { hanzi: '晚会', pinyin: 'wǎnhuì', pos: 'danh từ', meaning: 'dạ hội, tiệc tối', han_viet: 'vãn hội' },
    { hanzi: '参加', pinyin: 'cānjiā', pos: 'động từ', meaning: 'tham gia, dự', han_viet: 'tham gia' },
    { hanzi: '时间', pinyin: 'shíjiān', pos: 'danh từ', meaning: 'thời gian', han_viet: 'thời gian' },
    { hanzi: '点', pinyin: 'diǎn', pos: 'lượng từ', meaning: 'giờ (cũng nói 点钟)', han_viet: 'điểm' },
    { hanzi: '就', pinyin: 'jiù', pos: 'phó từ', meaning: 'chính là, ngay (nhấn mạnh)', han_viet: 'tựu' },
    { hanzi: '一定', pinyin: 'yídìng', pos: 'phó từ', meaning: 'nhất định, chắc chắn', han_viet: 'nhất định' },
    { hanzi: '祝', pinyin: 'zhù', pos: 'động từ', meaning: 'chúc', han_viet: 'chúc' },
    { hanzi: '快乐', pinyin: 'kuàilè', pos: 'tính từ', meaning: 'vui vẻ, hạnh phúc', han_viet: 'khoái lạc' },
    { hanzi: '祝你生日快乐', pinyin: 'zhù nǐ shēngrì kuàilè', pos: 'câu chúc', meaning: 'chúc bạn sinh nhật vui vẻ', han_viet: '' },
  ],
  sections: [
    {
      kind: 'examples', label: 'Ngữ điệu: câu hỏi', title: 'Ngữ điệu câu hỏi bằng giọng nói (疑问语调)',
      intro: 'Khi dùng giọng nghi vấn để hỏi, cuối câu lên giọng. Không cần thêm 吗 hay từ nghi vấn: chỉ cần lên giọng ở cuối câu trần thuật.',
      groups: [
        { label: 'Lên giọng ở cuối câu ↗', items: [['你属狗？', 'nǐ shǔ gǒu?', 'lên giọng'], ['你今年二十岁？', 'nǐ jīnnián èrshí suì?', 'lên giọng'], ['他也去？', 'tā yě qù?', 'lên giọng']] },
      ],
    },
    {
      kind: 'examples', label: 'Mười hai con giáp', title: 'Cửa sổ văn hóa: 12 con giáp (十二生肖)',
      intro: 'Người Trung Quốc dùng 12 con vật (十二属相) để tính năm sinh: chuột, trâu, hổ, thỏ, rồng, rắn, ngựa, dê, khỉ, gà, chó, lợn. Hỏi con giáp: 你属什么? Đáp: 我属狗.',
      groups: [
        { label: 'Mười hai con giáp', items: [['鼠', 'shǔ', 'chuột'], ['牛', 'niú', 'trâu'], ['虎', 'hǔ', 'hổ'], ['兔', 'tù', 'thỏ'], ['龙', 'lóng', 'rồng'], ['蛇', 'shé', 'rắn'], ['马', 'mǎ', 'ngựa'], ['羊', 'yáng', 'dê, cừu'], ['猴', 'hóu', 'khỉ'], ['鸡', 'jī', 'gà'], ['狗', 'gǒu', 'chó'], ['猪', 'zhū', 'lợn']] },
      ],
    },
  ],
  notes: [
    {
      title: 'Tuổi con giáp: 属狗',
      body: '属 nghĩa là tính theo mười hai con giáp để ghi năm sinh. Mười hai con giáp là: 鼠 (chuột), 牛 (trâu), 虎 (hổ), 兔 (thỏ), 龙 (rồng), 蛇 (rắn), 马 (ngựa), 羊 (dê), 猴 (khỉ), 鸡 (gà), 狗 (chó), 猪 (lợn). Hỏi: 你属什么的? Đáp: 我属狗的.',
      say: '你属什么的',
    },
    {
      title: '是吗? (thế à?)',
      body: '是吗? thể hiện sự ngạc nhiên hoặc thích thú: A: 我的生日是十月十八号。B: 是吗? Khi nói, lên giọng ở cuối.',
      say: '是吗',
    },
    {
      title: '就 nhấn mạnh: 就在我的房间',
      body: 'Phó từ 就 ở đây dùng để nhấn mạnh, nghĩa là "ngay, chính là". 就在我的房间 = ngay trong phòng tôi. 就在这儿 = ngay ở đây.',
      say: '就在我的房间',
    },
    {
      title: 'Câu vị ngữ danh từ (名词谓语句)',
      body: 'Câu có danh từ, cụm danh từ, số lượng từ hoặc từ chỉ thời gian làm vị ngữ gọi là câu vị ngữ danh từ. Trật tự: chủ ngữ + vị ngữ (danh từ), nghĩa là "S là P" nhưng trước vị ngữ KHÔNG dùng 是. Phủ định dùng 不是 + danh từ. Loại câu này dùng để nói thời gian, giá cả, ngày tháng, số lượng, thời tiết, tuổi, quê quán. 今天几号? – 今天十月八号。今天星期几? – 今天星期二。苹果一斤多少钱? – 一斤两块五。他二十岁。明天阴天。现在几点? – 现在八点半。',
      say: '今天十月八号',
    },
    {
      title: 'Năm, tháng, ngày (年、月、日)',
      body: 'Đọc năm: đọc từng chữ số rồi thêm 年. 1840年 yī bā sì líng nián; 1949年 yī jiǔ sì jiǔ nián; 1978年 yī jiǔ qī bā nián; 2008年 èr líng líng bā nián. 12 tháng: 一月, 二月… 十二月. Ngày: 一日(号), 二日(号)… 三十一日(号). Thứ tự khi nói ngày: năm, tháng, ngày: 1919年5月4日(号), 1949年10月1日. 日 dùng trong văn viết, 号 dùng trong khẩu ngữ.',
      say: '二零零八年',
    },
    {
      title: 'Câu vị ngữ danh từ và câu có 是 đều nói được ngày tháng',
      body: 'Nói ngày, thứ có thể dùng câu vị ngữ danh từ hoặc câu có 是: 今天十月二十七号 = 今天是十月二十七号。今天星期三 = 今天是星期三。Cả hai đều đúng, câu có 是 trang trọng hơn một chút.',
      say: '今天是星期三',
    },
    {
      title: 'Câu hỏi bằng giọng nghi vấn (怎么问 6)',
      body: 'Câu trần thuật chỉ cần dùng giọng nghi vấn (lên giọng cuối câu) là thành câu hỏi: 你属狗? 你今年二十岁? 他也参加? Cách này dùng nhiều trong khẩu ngữ, khi người nói đã đoán được phần nào đáp án và muốn xác nhận.',
      say: '你今年二十岁',
    },
    {
      title: 'Hỏi tuổi: 多大 và 几岁',
      body: 'Hỏi tuổi người lớn dùng 多大: 你今年多大? – 我二十一岁. Với trẻ em dưới 10 tuổi hỏi 几岁? Tuổi: số + 岁, ví dụ 十八岁, 二十五岁. Trả lời đầy đủ: 他今年十八岁.',
      say: '你今年多大',
    },
    {
      title: 'Lời chúc',
      body: '祝你生日快乐! là lời chúc sinh nhật. Cách chúc khác: 新年快乐, 春节快乐, 圣诞快乐, 身体健康. Người được chúc đáp: 谢谢! Lời mời đi liền: 你也来参加，好吗?',
      say: '祝你生日快乐',
    },
  ],
  sentences: [
    { parts: ['你', '哪', '一', '年', '大学', '毕业'], pinyin: 'Nǐ nǎ yì nián dàxué bìyè?', vi: 'Bạn tốt nghiệp đại học năm nào?' },
    { parts: ['我', '明年', '大学', '毕业'], pinyin: 'Wǒ míngnián dàxué bìyè.', vi: 'Tôi sang năm tốt nghiệp đại học.' },
    { parts: ['你', '今年', '多', '大'], pinyin: 'Nǐ jīnnián duō dà?', vi: 'Năm nay bạn bao nhiêu tuổi?' },
    { parts: ['我', '二十一', '岁'], pinyin: 'Wǒ èrshíyī suì.', vi: 'Tôi hai mươi mốt tuổi.' },
    { parts: ['你', '属', '什么', '的'], pinyin: 'Nǐ shǔ shénme de?', vi: 'Bạn tuổi con gì?' },
    { parts: ['我', '属', '狗', '的'], pinyin: 'Wǒ shǔ gǒu de.', vi: 'Tôi tuổi con chó.' },
    { parts: ['你', '的', '生日', '是', '几', '月', '几', '号'], pinyin: 'Nǐ de shēngrì shì jǐ yuè jǐ hào?', vi: 'Sinh nhật bạn là ngày mấy tháng mấy?' },
    { parts: ['我', '的', '生日', '是', '十', '月', '十八', '号'], pinyin: 'Wǒ de shēngrì shì shí yuè shíbā hào.', vi: 'Sinh nhật tôi là ngày 18 tháng 10.' },
    { parts: ['你', '打算', '怎么', '过'], pinyin: 'Nǐ dǎsuan zěnme guò?', vi: 'Bạn định đón thế nào?' },
    { parts: ['我', '准备', '举行', '一', '个', '生日', '晚会'], pinyin: 'Wǒ zhǔnbèi jǔxíng yí ge shēngrì wǎnhuì.', vi: 'Tôi định tổ chức một buổi tiệc sinh nhật.' },
    { parts: ['你', '也', '来', '参加', '好', '吗'], pinyin: 'Nǐ yě lái cānjiā, hǎo ma?', vi: 'Bạn cũng đến dự nhé?' },
    { parts: ['什么', '时间', '举行'], pinyin: 'Shénme shíjiān jǔxíng?', vi: 'Tổ chức lúc nào?' },
    { parts: ['就', '在', '我', '的', '房间'], pinyin: 'Jiù zài wǒ de fángjiān.', vi: 'Ngay trong phòng tôi.' },
    { parts: ['我', '一定', '去'], pinyin: 'Wǒ yídìng qù.', vi: 'Tôi nhất định đến.' },
    { parts: ['祝', '你', '生日', '快乐'], pinyin: 'Zhù nǐ shēngrì kuàilè!', vi: 'Chúc bạn sinh nhật vui vẻ!' },
    { parts: ['今天', '星期', '二'], pinyin: 'Jīntiān xīngqī’èr.', vi: 'Hôm nay thứ Ba.' },
    { parts: ['他', '二十', '岁'], pinyin: 'Tā èrshí suì.', vi: 'Anh ấy hai mươi tuổi.' },
  ],
  writeChars: ['年', '月', '岁', '祝', '快', '过', '定', '毕', '业', '举', '出', '打', '准', '备', '加'],
  drills: [
    {
      title: 'Phân biệt âm và thanh điệu', hint: 'Đọc từng cặp, chú ý thanh điệu và âm đầu.',
      items: [
        { h: '生日', p: 'shēngrì' }, { h: '胜利', p: 'shènglì' }, { h: '今年', p: 'jīnnián' }, { h: '青年', p: 'qīngnián' },
        { h: '快乐', p: 'kuàilè' }, { h: '快了', p: 'kuài le' }, { h: '正好', p: 'zhènghǎo' }, { h: '真好', p: 'zhēn hǎo' },
        { h: '时间', p: 'shíjiān' }, { h: '世间', p: 'shìjiān' }, { h: '一定', p: 'yídìng' }, { h: '预定', p: 'yùdìng' },
      ],
    },
    {
      title: 'Đọc liền nhiều âm tiết (多音节连读): các ngày lễ', hint: 'Từ có đuôi 节 (lễ, tết): nhấn âm cuối.',
      items: [
        { h: '国庆节', p: 'Guóqìng Jié' }, { h: '中秋节', p: 'Zhōngqiū Jié' }, { h: '教师节', p: 'Jiàoshī Jié' },
        { h: '劳动节', p: 'Láodòng Jié' }, { h: '妇女节', p: 'Fùnǚ Jié' }, { h: '圣诞节', p: 'Shèngdàn Jié' },
      ],
    },
    {
      title: 'Đọc to các cụm từ (朗读): lời chúc, 过, 一定', hint: 'Cụm lời chúc và dự định.',
      items: [
        { h: '祝你生日快乐', p: 'zhù nǐ shēngrì kuàilè' }, { h: '祝你新年快乐', p: 'zhù nǐ xīnnián kuàilè' }, { h: '祝你圣诞快乐', p: 'zhù nǐ Shèngdàn kuàilè' }, { h: '祝你春节快乐', p: 'zhù nǐ Chūn Jié kuàilè' },
        { h: '过生日', p: 'guò shēngrì' }, { h: '过新年', p: 'guò xīnnián' }, { h: '过圣诞节', p: 'guò Shèngdàn Jié' }, { h: '过春节', p: 'guò Chūn Jié' },
        { h: '一定去', p: 'yídìng qù' }, { h: '一定来', p: 'yídìng lái' }, { h: '一定买', p: 'yídìng mǎi' }, { h: '一定学', p: 'yídìng xué' },
        { h: '打算怎么去', p: 'dǎsuan zěnme qù' }, { h: '打算怎么来', p: 'dǎsuan zěnme lái' }, { h: '打算怎么过', p: 'dǎsuan zěnme guò' }, { h: '打算怎么做', p: 'dǎsuan zěnme zuò' },
      ],
    },
    {
      title: 'Từ bổ sung (补充生词)', hint: 'Dùng để thay thế trong các mẫu câu.',
      items: [
        { h: '新年', p: 'xīnnián', m: 'năm mới' }, { h: '春节', p: 'Chūn Jié', m: 'Tết Nguyên đán' }, { h: '圣诞节', p: 'Shèngdàn Jié', m: 'Giáng sinh' },
        { h: '健康', p: 'jiànkāng', m: 'khỏe mạnh' }, { h: '大后年', p: 'dàhòunián', m: 'ba năm nữa' },
        { h: '礼物', p: 'lǐwù', m: 'quà tặng' }, { h: '玩具', p: 'wánjù', m: 'đồ chơi' }, { h: '有意思', p: 'yǒu yìsi', m: 'thú vị' },
        { h: '出生', p: 'chūshēng', m: 'ra đời, sinh ra' }, { h: '唱歌', p: 'chàng gē', m: 'hát' }, { h: '蛋糕', p: 'dàngāo', m: 'bánh gato' },
      ],
    },
    {
      title: 'Thay thế: 你哪年大学毕业? 我明年大学毕业', hint: 'Thay hành động và năm.',
      items: [
        { h: '我今年去留学。', p: 'Wǒ jīnnián qù liúxué.' }, { h: '我明年出国。', p: 'Wǒ míngnián chūguó.' }, { h: '我后年去中国。', p: 'Wǒ hòunián qù Zhōngguó.' }, { h: '我大后年回国。', p: 'Wǒ dàhòunián huíguó.' },
      ],
    },
    {
      title: 'Thay thế: 你的生日是几月几号? 十月二十五号', hint: 'Thay ngày lễ và ngày.',
      items: [
        { h: '国庆节是十月一号。', p: 'Guóqìng Jié shì shí yuè yī hào.' }, { h: '圣诞节是十二月二十五号。', p: 'Shèngdàn Jié shì shí’èr yuè èrshíwǔ hào.' },
        { h: '她的生日是六月八号。', p: 'Tā de shēngrì shì liù yuè bā hào.' }, { h: '今年的春节是一月二十八号。', p: 'Jīnnián de Chūn Jié shì yī yuè èrshíbā hào.' },
      ],
    },
    {
      title: 'Thay thế: 你星期一去还是星期二去? 我星期二去', hint: 'Thay thời gian.',
      items: [
        { h: '今天去还是明天去', p: 'jīntiān qù háishi míngtiān qù' }, { h: '今年去还是明年去', p: 'jīnnián qù háishi míngnián qù' },
        { h: '这个星期去还是下个星期去', p: 'zhège xīngqī qù háishi xià ge xīngqī qù' }, { h: '这个月去还是下个月去', p: 'zhège yuè qù háishi xià ge yuè qù' },
      ],
    },
    {
      title: 'Thay thế: 祝你生日快乐!', hint: 'Các lời chúc khác.',
      items: [
        { h: '新年快乐！', p: 'Xīnnián kuàilè!' }, { h: '春节快乐！', p: 'Chūn Jié kuàilè!' }, { h: '圣诞快乐！', p: 'Shèngdàn kuàilè!' }, { h: '身体健康！', p: 'Shēntǐ jiànkāng!' },
      ],
    },
    {
      title: 'Thay thế: 他今年多大? 十八岁', hint: 'Thay số tuổi.',
      items: [
        { h: '他今年十九岁。', p: 'Tā jīnnián shíjiǔ suì.' }, { h: '他今年二十岁。', p: 'Tā jīnnián èrshí suì.' }, { h: '他今年二十二岁。', p: 'Tā jīnnián èrshí’èr suì.' }, { h: '他今年二十五岁。', p: 'Tā jīnnián èrshíwǔ suì.' },
      ],
    },
    {
      title: 'Đọc năm tháng ngày (读出下列年月日)', hint: 'Sách chỉ in số; cách đọc dưới đây do app thêm.',
      items: [
        { h: '一九一九年五月四日', p: '1919年5月4日 · yī jiǔ yī jiǔ nián wǔ yuè sì rì' }, { h: '一九四九年十月一日', p: '1949年10月1日 · yī jiǔ sì jiǔ nián shí yuè yī rì' },
        { h: '一九九七年七月一日', p: '1997年7月1日 · yī jiǔ jiǔ qī nián qī yuè yī rì' }, { h: '二零零八年八月十五日', p: '2008年8月15日 · èr líng líng bā nián bā yuè shíwǔ rì' },
        { h: '二零一零年一月一日', p: '2010年1月1日 · èr líng yī líng nián yī yuè yī rì' },
      ],
    },
    {
      title: 'Thực hành nói (成段表达): Lá thư của Mary', hint: 'Đọc to cả bức thư.',
      items: [
        { h: '爸爸妈妈：好久没有给你们写信了，你们身体好吗？我很好。你们给我寄的生日礼物很好看。谢谢！', p: 'Bàba māma: Hǎojiǔ méiyǒu gěi nǐmen xiě xìn le, nǐmen shēntǐ hǎo ma? Wǒ hěn hǎo. Nǐmen gěi wǒ jì de shēngrì lǐwù hěn hǎokàn. Xièxie!' },
        { h: '今天我在宿舍举行生日晚会。我们班的同学和几个中国朋友都来参加。同学们送我很多礼物。中国朋友田芳送我一只玩具小狗，她说我是属狗的。我不懂什么是“属狗的”，田芳说，我是狗年出生的，所以属狗。我觉得很有意思。', p: 'Jīntiān wǒ zài sùshè jǔxíng shēngrì wǎnhuì. Wǒmen bān de tóngxué hé jǐ ge Zhōngguó péngyou dōu lái cānjiā. Tóngxuémen sòng wǒ hěn duō lǐwù. Zhōngguó péngyou Tián Fāng sòng wǒ yì zhī wánjù xiǎo gǒu, tā shuō wǒ shì shǔ gǒu de. Wǒ bù dǒng shénme shì “shǔ gǒu de”, Tián Fāng shuō, wǒ shì gǒu nián chūshēng de, suǒyǐ shǔ gǒu. Wǒ juéde hěn yǒu yìsi.' },
        { h: '晚会上，我们一起唱歌，吃蛋糕，玩得都很高兴。能在中国跟同学们一起过生日，我觉得很快乐。祝爸爸妈妈好！玛丽 十月十八', p: 'Wǎnhuì shang, wǒmen yìqǐ chàng gē, chī dàngāo, wán de dōu hěn gāoxìng. Néng zài Zhōngguó gēn tóngxuémen yìqǐ guò shēngrì, wǒ juéde hěn kuàilè. Zhù bàba māma hǎo! Mǎlì, shí yuè shíbā.' },
      ],
    },
  ],
  qa: [
    {
      title: 'Chọn từ điền vào chỗ trống (选词填空)',
      items: [
        { q: 'Từ cho sẵn: 参加 打算 号 在 正好 快乐', hint: 'Mỗi từ dùng một lần.' },
        { q: '(1) 你的生日是几月几 ______ ?', hint: '号' },
        { q: '(2) 祝你生日 ______ !', hint: '快乐' },
        { q: '(3) 她的生日 ______ 是星期六。', hint: '正好' },
        { q: '(4) 我 ______ 毕业后当翻译。', hint: '打算' },
        { q: '(5) 我一定 ______ 你的生日晚会。', hint: '参加' },
        { q: '(6) 晚上七点 ______ 学校举行欢迎会。', hint: '在' },
      ],
    },
    {
      title: 'Hỏi bằng giọng nghi vấn (用疑问语气提问)',
      items: [
        { q: '(1) A: ______ ?   B: 他是中国人。', hint: '他是中国人? (lên giọng cuối câu)' },
        { q: '(2) A: ______ ?   B: 这是我的。', hint: '这是你的?' },
        { q: '(3) A: ______ ?   B: 我去上海。', hint: '你去上海?' },
        { q: '(4) A: ______ ?   B: 一件四百块。', hint: '一件四百块?' },
        { q: '(5) A: ______ ?   B: 今天十八号。', hint: '今天十八号?' },
        { q: '(6) A: ______ ?   B: 对，明天是我的生日。', hint: '明天是你的生日?' },
      ],
    },
    {
      title: 'Trả lời theo thực tế của bạn (根据实际情况回答下列问题)',
      items: [
        { q: '(1) 今天是几月几号? 星期几?', hint: '今天是…月…号，星期…。' },
        { q: '(2) 你的生日是几月几号?', hint: '我的生日是…月…号。' },
        { q: '(3) 你怎么过生日?', hint: '我打算 / 我准备…' },
        { q: '(4) 生日晚会在哪儿举行?', hint: '在我的房间 / 在…举行。' },
        { q: '(5) 谁来参加你的生日晚会?', hint: '…和…来参加。' },
        { q: '(6) 你今年多大?', hint: '我今年…岁。' },
      ],
    },
  ],
}
