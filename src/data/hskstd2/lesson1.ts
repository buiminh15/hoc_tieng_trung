import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 2 (标准教程 2), Bài 1: 九月去北京旅游最好 (sách trang 1–8).
 * Sách bản Trung–Anh; phần tiếng Việt do app dịch.
 * Nghe: 01-1…01-5 (giáo trình). Sách bài tập (trang 7–14, đáp án trang 1–3): nghe chọn đáp án 11–15,
 * điền từ 21–25, đúng/sai 26–30, nối câu 31–35, nghe gõ pinyin.
 */

const A = '/audio/hsk-std2/'

export const hskStd2Lesson1: Lesson = {
  id: 1,
  title: 'Tháng 9 đi Bắc Kinh du lịch là đẹp nhất',
  hanzi: '九月去北京旅游最好',
  pinyin: 'Jiǔ yuè qù Běijīng lǚyóu zuì hǎo',
  vi: 'Tháng 9 đi Bắc Kinh du lịch là đẹp nhất',
  intro: 'Nói về sở thích và dự định: 你觉得什么时候去最好？ 你喜欢什么运动？ Học động từ năng nguyện 要, phó từ mức độ 最, cách nói số ước lượng với 几 và 多; trọng âm của từ hai âm tiết; nét ngang gập hất và ngang gập gập gập móc; bộ 王 (玉) và 足.',

  dialogue: [
    { who: 'A', hanzi: '我要去北京旅游，你觉得什么时候去最好？', pinyin: 'Wǒ yào qù Běijīng lǚyóu, nǐ juéde shénme shíhou qù zuì hǎo?', vi: 'Mình muốn đi Bắc Kinh du lịch, bạn thấy đi lúc nào là đẹp nhất?', scene: 'Hội thoại 1 · ở trường' },
    { who: 'B', hanzi: '九月去北京旅游最好。', pinyin: 'Jiǔ yuè qù Běijīng lǚyóu zuì hǎo.', vi: 'Tháng 9 đi Bắc Kinh du lịch là đẹp nhất.' },
    { who: 'A', hanzi: '为什么？', pinyin: 'Wèi shénme?', vi: 'Tại sao?' },
    { who: 'B', hanzi: '九月的北京天气不冷也不热。', pinyin: 'Jiǔ yuè de Běijīng tiānqì bù lěng yě bú rè.', vi: 'Vì tháng 9 thời tiết Bắc Kinh không lạnh cũng không nóng.' },
    { who: 'A', hanzi: '你喜欢什么运动？', pinyin: 'Nǐ xǐhuan shénme yùndòng?', vi: 'Bạn thích môn thể thao nào?', scene: 'Hội thoại 2 · xem ảnh' },
    { who: 'B', hanzi: '我最喜欢踢足球。', pinyin: 'Wǒ zuì xǐhuan tī zúqiú.', vi: 'Mình thích đá bóng nhất.' },
    { who: 'A', hanzi: '下午我们一起去踢足球吧。', pinyin: 'Xiàwǔ wǒmen yìqǐ qù tī zúqiú ba.', vi: 'Chiều nay chúng mình cùng đi đá bóng nhé.' },
    { who: 'B', hanzi: '好啊！', pinyin: 'Hǎo a!', vi: 'Được đấy!' },
    { who: 'A', hanzi: '我们要不要买几个新的椅子？', pinyin: 'Wǒmen yào bu yào mǎi jǐ ge xīn de yǐzi?', vi: 'Mình có nên mua vài cái ghế mới không?', scene: 'Hội thoại 3 · ở nhà' },
    { who: 'B', hanzi: '好啊。什么时候去买？', pinyin: 'Hǎo a. Shénme shíhou qù mǎi?', vi: 'Được. Khi nào đi mua?' },
    { who: 'A', hanzi: '明天下午怎么样？你明天几点能回来？', pinyin: 'Míngtiān xiàwǔ zěnmeyàng? Nǐ míngtiān jǐ diǎn néng huílai?', vi: 'Chiều mai được không? Mai mấy giờ anh về được?' },
    { who: 'B', hanzi: '三点多。', pinyin: 'Sān diǎn duō.', vi: 'Hơn ba giờ.' },
    { who: 'A', hanzi: '桌子下面有个猫。', pinyin: 'Zhuōzi xiàmiàn yǒu ge māo.', vi: 'Dưới bàn có một con mèo.', scene: 'Hội thoại 4 · ở nhà' },
    { who: 'B', hanzi: '那是我的猫，它叫花花。', pinyin: 'Nà shì wǒ de māo, tā jiào Huāhua.', vi: 'Đó là mèo của tôi, nó tên là Hoa Hoa.' },
    { who: 'A', hanzi: '它很漂亮。', pinyin: 'Tā hěn piàoliang.', vi: 'Nó đẹp quá.' },
    { who: 'B', hanzi: '是啊，我觉得它的眼睛最漂亮。', pinyin: 'Shì a, wǒ juéde tā de yǎnjing zuì piàoliang.', vi: 'Đúng vậy, tôi thấy đôi mắt nó đẹp nhất.' },
    { who: 'A', hanzi: '它多大了？', pinyin: 'Tā duō dà le?', vi: 'Nó bao nhiêu tuổi rồi?' },
    { who: 'B', hanzi: '六个多月。', pinyin: 'Liù ge duō yuè.', vi: 'Hơn sáu tháng.' },
  ],
  dialogueClips: [
    { label: '01-1 · Hội thoại 1: 九月去北京旅游最好', src: A + 'l01-1.mp3' },
    { label: '01-2 · Hội thoại 2: 你喜欢什么运动？', src: A + 'l01-2.mp3' },
    { label: '01-3 · Hội thoại 3: 要不要买几个新的椅子？', src: A + 'l01-3.mp3' },
    { label: '01-4 · Hội thoại 4: 桌子下面有个猫。', src: A + 'l01-4.mp3' },
  ],
  dialogueTip: '<b>要 + động từ</b>: muốn làm gì; phủ định thường dùng <b>不想</b> (không nói 不要 với nghĩa này). <b>最</b> đứng trước tính từ, động từ: nhất. <b>几</b> và <b>多</b> chỉ số ước lượng: 几个 (vài cái), 三点多 (hơn ba giờ), 六个多月 (hơn sáu tháng).',
  slowSay: '九月去北京旅游最好',

  vocab: [
    { hanzi: '旅游', parts: '旅 (lữ) + 游 (du)', pinyin: 'lǚyóu', pos: 'động từ', meaning: 'du lịch', han_viet: 'lữ du' },
    { hanzi: '觉得', parts: '觉 (giác) + 得 (đắc)', pinyin: 'juéde', pos: 'động từ', meaning: 'thấy, cảm thấy, nghĩ rằng', han_viet: 'giác đắc' },
    { hanzi: '最', parts: '日 + 取 (thủ)', pinyin: 'zuì', pos: 'phó từ', meaning: 'nhất', han_viet: 'tối' },
    { hanzi: '为什么', parts: '为 (vị) + 什么', pinyin: 'wèi shénme', pos: 'cụm', meaning: 'tại sao', han_viet: '' },
    { hanzi: '也', pinyin: 'yě', pos: 'phó từ', meaning: 'cũng', han_viet: 'dã' },
    { hanzi: '运动', parts: '运 (vận) + 动 (động)', pinyin: 'yùndòng', pos: 'danh từ / động từ', meaning: 'thể thao; vận động, tập thể dục', han_viet: 'vận động' },
    { hanzi: '踢足球', parts: '踢 = 足 + 易; 足球', pinyin: 'tī zúqiú', pos: 'cụm', meaning: 'đá bóng', han_viet: '' },
    { hanzi: '一起', pinyin: 'yìqǐ', pos: 'phó từ', meaning: 'cùng nhau', han_viet: 'nhất khởi' },
    { hanzi: '要', pinyin: 'yào', pos: 'động từ năng nguyện', meaning: 'muốn, cần', han_viet: 'yếu' },
    { hanzi: '新', parts: '亲 + 斤 (cân)', pinyin: 'xīn', pos: 'tính từ', meaning: 'mới', han_viet: 'tân' },
    { hanzi: '它', parts: '宀 + 匕', pinyin: 'tā', pos: 'đại từ', meaning: 'nó (chỉ vật, con vật)', han_viet: 'tha' },
    { hanzi: '眼睛', parts: '眼 = 目 + 艮; 睛 = 目 + 青', pinyin: 'yǎnjing', pos: 'danh từ', meaning: 'mắt', han_viet: 'nhãn tình' },
    { hanzi: '花花', pinyin: 'Huāhua', pos: 'danh từ riêng', meaning: 'Hoa Hoa (tên con mèo)', han_viet: '' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Trọng âm 2 âm tiết', title: 'Trọng âm của từ hai âm tiết',
      clip: { label: '01-5 · Nghe và đọc theo (trọng âm từ hai âm tiết)', src: A + 'l01-5.mp3' },
      intro: '(1) Kiểu "vừa + nặng": phần lớn từ hai âm tiết thuộc kiểu này, âm tiết thứ hai được nhấn và kéo dài hơn. (2) Kiểu "nặng + nhẹ": một số ít từ có âm tiết đầu nhấn và dài, âm tiết sau đọc nhẹ và ngắn (thanh nhẹ).',
      groups: [
        { label: 'Vừa + nặng (nhấn âm tiết thứ hai)', items: [['冰箱', 'bīngxiāng', 'tủ lạnh'], ['帮忙', 'bāng máng', 'giúp đỡ'], ['打扰', 'dǎrǎo', 'làm phiền'], ['高兴', 'gāoxìng', 'vui'], ['旅游', 'lǚyóu', 'du lịch'], ['可能', 'kěnéng', 'có thể'], ['开始', 'kāishǐ', 'bắt đầu'], ['考试', 'kǎo shì', 'thi']] },
        { label: 'Nặng + nhẹ (nhấn âm tiết đầu)', items: [['东西', 'dōngxi', 'đồ vật'], ['窗户', 'chuānghu', 'cửa sổ'], ['萝卜', 'luóbo', 'củ cải'], ['时候', 'shíhou', 'lúc, khi'], ['枕头', 'zhěntou', 'cái gối'], ['你们', 'nǐmen', 'các bạn'], ['告诉', 'gàosu', 'nói cho biết'], ['故事', 'gùshi', 'câu chuyện']] },
      ],
    },
    {
      kind: 'examples', label: 'Nét · bộ thủ', title: 'Chữ Hán: nét mới và bộ 王 (玉), 足',
      intro: 'Nét (7): ngang gập hất (横折提, ví dụ 话, 说) và ngang gập gập gập móc (横折折折钩, ví dụ 奶, 场). Bộ 王 (còn gọi "ngọc nghiêng") thường liên quan đến ngọc; bộ 足 thường liên quan đến bàn chân.',
      groups: [
        { label: 'Ví dụ nét mới', items: [['话', 'huà', 'lời nói'], ['说', 'shuō', 'nói'], ['奶', 'nǎi', 'sữa'], ['场', 'chǎng', 'sân, bãi']] },
        { label: 'Bộ 王 và 足', items: [['现', 'xiàn', 'hiện nay (bộ 王)'], ['球', 'qiú', 'quả bóng (bộ 王)'], ['跑', 'pǎo', 'chạy (bộ 足)'], ['踢', 'tī', 'đá (bộ 足)']] },
      ],
    },
  ],

  notes: [
    {
      title: 'Động từ năng nguyện 要',
      body: 'Đặt trước động từ, chỉ mong muốn làm việc gì. Ví dụ: 王方要学习英语。 我要吃米饭。 我们要不要买几个新的椅子？ Dạng phủ định thường là 不想: 小王要去，我不想去。 你要吃米饭吗？ 我不想吃米饭。',
      say: '我要吃米饭',
    },
    {
      title: 'Phó từ mức độ 最',
      body: '最 chỉ đứng đầu trong các sự vật cùng loại hoặc về một mặt nào đó. Ví dụ: 大卫的汉语最好。 我最喜欢吃米饭。 它的眼睛最漂亮。',
      say: '它的眼睛最漂亮',
    },
    {
      title: 'Số ước lượng với 几',
      body: '几 có thể chỉ một số không xác định dưới 10, phía sau phải có lượng từ: 几个人, 几本书, 几个新的椅子. Đứng sau 十: số từ 11 đến 19 (十几个人, khoảng mười mấy người). Đứng trước 十: số từ 20 đến 99 (几十个人, vài chục người). Ví dụ: 车上有几个人。 我想买几本书。',
      say: '我们要不要买几个新的椅子',
    },
    {
      title: 'Số ước lượng với 多',
      body: 'Số dưới 10: 多 đứng SAU lượng từ: 三个多星期 (hơn ba tuần), 五年多 (hơn năm năm), 六个多月 (hơn sáu tháng). Số tròn chục từ 10 trở lên: 多 đứng TRƯỚC lượng từ, lúc này 多 và 几 dùng thay nhau được: 十多个月, 二十多块钱, 八十多个人.',
      say: '六个多月',
    },
    {
      title: 'Trọng âm của từ hai âm tiết',
      body: 'Phần lớn từ hai âm tiết nhấn ở âm tiết thứ hai (冰箱, 旅游, 考试). Một số ít nhấn ở âm tiết đầu, âm tiết sau đọc nhẹ (东西, 时候, 你们).',
      say: '旅游',
    },
  ],

  writeChars: ['为', '也', '最', '新', '踢', '球'],

  drills: [
    {
      title: 'Hai chữ đơn mới (认识独体字)',
      hint: 'Sách trang 7: nguồn gốc hình chữ. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '为', p: 'wéi / wèi', m: 'dạng phồn thể 爲 trông như bàn tay dắt voi đi làm; nghĩa gốc là "làm"' },
        { h: '也', p: 'yě', m: 'dạng cổ như con rắn đầu nhọn thân dài; nay mất nghĩa gốc, thành phó từ "cũng"' },
      ],
    },
    {
      title: 'Nói về sở thích (运用 1, sách trang 8)',
      hint: 'Mẫu: 你最喜欢吃什么？最不喜欢吃什么？ 我最…… Bấm để nghe.',
      items: [
        { h: '你最喜欢吃什么？', p: 'Nǐ zuì xǐhuan chī shénme?', m: 'Bạn thích ăn gì nhất?' },
        { h: '你最不喜欢吃什么？', p: 'Nǐ zuì bù xǐhuan chī shénme?', m: 'Bạn ghét ăn gì nhất?' },
        { h: '你最喜欢什么运动？', p: 'Nǐ zuì xǐhuan shénme yùndòng?', m: 'Bạn thích môn thể thao nào nhất?' },
        { h: '你最想去什么地方旅游？', p: 'Nǐ zuì xiǎng qù shénme dìfang lǚyóu?', m: 'Bạn muốn đi du lịch ở đâu nhất?' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 5)',
      items: [
        { q: '什么时候去北京旅游最好？为什么？', hint: '九月去北京旅游最好，因为九月的北京天气不冷也不热。' },
        { q: '他们下午要做什么？', hint: '他们下午要一起去踢足球。' },
        { q: '他们想什么时候去买椅子？', hint: '他们想明天下午去买椅子。' },
        { q: '花花在哪儿？', hint: '花花在桌子下面。' },
        { q: '花花多大了？', hint: '花花六个多月了。' },
      ],
    },
    {
      title: 'Hoạt động nhóm: nơi muốn và không muốn đi du lịch (运用 2, sách trang 8)',
      items: [
        { q: 'A: 你最想去什么地方旅游？为什么？  B: 我最想去……', hint: 'Mẫu của sách (小王): 最想去北京，他想学汉语，想吃中国菜。' },
        { q: 'A: 你最不想去什么地方旅游？为什么？  B: ……', hint: 'Nói nơi bạn không muốn đi và lý do.' },
      ],
    },
  ],

  sentences: [
    { parts: ['九月', '去', '北京', '旅游', '最', '好'], pinyin: 'Jiǔ yuè qù Běijīng lǚyóu zuì hǎo.', vi: 'Tháng 9 đi Bắc Kinh du lịch là đẹp nhất.' },
    { parts: ['你', '觉得', '什么', '时候', '去', '最', '好'], pinyin: 'Nǐ juéde shénme shíhou qù zuì hǎo?', vi: 'Bạn thấy đi lúc nào là đẹp nhất?' },
    { parts: ['九月', '的', '北京', '天气', '不', '冷', '也', '不', '热'], pinyin: 'Jiǔ yuè de Běijīng tiānqì bù lěng yě bú rè.', vi: 'Tháng 9 thời tiết Bắc Kinh không lạnh cũng không nóng.' },
    { parts: ['我', '最', '喜欢', '踢', '足球'], pinyin: 'Wǒ zuì xǐhuan tī zúqiú.', vi: 'Mình thích đá bóng nhất.' },
    { parts: ['我们', '要不要', '买', '几', '个', '新', '的', '椅子'], pinyin: 'Wǒmen yào bu yào mǎi jǐ ge xīn de yǐzi?', vi: 'Mình có nên mua vài cái ghế mới không?' },
    { parts: ['我', '觉得', '它', '的', '眼睛', '最', '漂亮'], pinyin: 'Wǒ juéde tā de yǎnjing zuì piàoliang.', vi: 'Tôi thấy đôi mắt nó đẹp nhất.' },
  ],

  // ───────── Sách bài tập, bài 1 (đáp án: "Đáp án sách bài tập HSK 2", trang 1–3) ─────────
  dictations: [
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 11–15)',
      hint: 'Nghe đoạn ghi âm (01-1, phần 3), chọn A, B hoặc C. Câu 11: A 八月 · B 几个月 · C 九月. Câu 12: A 太远了 · B 太冷了 · C 太热了. Câu 13: A 桌子 · B 椅子 · C 杯子. Câu 14: A 不到十岁 · B 四十岁 · C 十多岁. Câu 15: A 杯子 · B 北京 · C 茶杯.',
      clip: { label: '01-1 · Sách bài tập, phần nghe', src: A + 'w01-1.mp3' },
      items: [
        { prompt: 'Câu 11', answer: 'C', gloss: '九月' }, { prompt: 'Câu 12', answer: 'B', gloss: '太冷了' },
        { prompt: 'Câu 13', answer: 'B', gloss: '椅子' }, { prompt: 'Câu 14', answer: 'C', gloss: '十多岁' },
        { prompt: 'Câu 15', answer: 'A', gloss: '杯子' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, gõ từ (ngữ âm, câu 1)',
      hint: 'Nghe đoạn ghi âm (01-2), gõ lại pinyin của từ bạn nghe được (có thể không cần dấu).',
      clip: { label: '01-2 · Sách bài tập, ngữ âm', src: A + 'w01-2.mp3' },
      items: [
        { prompt: '(1)', answer: 'shíjiān', gloss: '时间' }, { prompt: '(2)', answer: 'Běijīng', gloss: '北京' }, { prompt: '(3)', answer: 'luóbo', gloss: '萝卜' }, { prompt: '(4)', answer: 'gùshi', gloss: '故事' },
        { prompt: '(5)', answer: 'lǎohǔ', gloss: '老虎' }, { prompt: '(6)', answer: 'xuésheng', gloss: '学生' }, { prompt: '(7)', answer: 'shítou', gloss: '石头' }, { prompt: '(8)', answer: 'chǎndì', gloss: '产地' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ (câu 21–25)',
      hint: 'A 为什么 · B 要 · C 最 · D 觉得 · E 贵 · F 也. Gõ chữ cái A–F.',
      items: [
        { prompt: '王方（ ）买一个新杯子。', answer: 'B', gloss: '要' }, { prompt: '昨天你（ ）没来我家吃饭？', answer: 'A', gloss: '为什么' },
        { prompt: '我（ ）这个衣服太大了，你看看那个吧。', answer: 'D', gloss: '觉得' }, { prompt: '我的小猫两岁多了，大卫的小猫（ ）两岁多了。', answer: 'F', gloss: '也' },
        { prompt: '王老师（ ）喜欢吃苹果。', answer: 'C', gloss: '最' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, đúng hay sai (câu 26–30)',
      hint: 'Đọc câu cho sẵn rồi xét câu có dấu * đúng (gõ D) hay sai (gõ S).',
      items: [
        { prompt: '她喜欢在家看电影，也喜欢睡觉，不喜欢出去。* 她最喜欢运动。', answer: 'S', gloss: 'Sai' },
        { prompt: '王小姐的小猫在我家，我的小猫在我妈妈家。* 我有一只小猫。', answer: 'D', gloss: 'Đúng' },
        { prompt: '我不想买桌子，我要买几个新椅子。* 我要去商店买桌子。', answer: 'S', gloss: 'Sai' },
        { prompt: '听说你在学做中国菜呢，我们一起做吧。* 他们要一起做中国菜。', answer: 'D', gloss: 'Đúng' },
        { prompt: '八月北京很热，九月天气好，你九月来吧。* 八月去北京旅游最好。', answer: 'S', gloss: 'Sai' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu (câu 31–35)',
      hint: 'A 桌子上有一本新书。那是你的书吗？ B 王老师什么时候能到？ C 他们都去踢足球了，你去不去？ D 这个小猫很漂亮。它多大了？ E 他在哪儿呢？你看见他了吗？ F 你为什么不开车去学校？ Gõ chữ cái A–F.',
      items: [
        { prompt: '不是我的，我没买书。', answer: 'A', gloss: '桌子上有一本新书。那是你的书吗？' }, { prompt: '三岁多。', answer: 'D', gloss: '它多大了？' },
        { prompt: '他已经走了，十分钟后能到。', answer: 'B', gloss: '王老师什么时候能到？' }, { prompt: '我没时间，明天吧。', answer: 'C', gloss: '你去不去？' },
        { prompt: '我不想开，我觉得坐出租车很好。', answer: 'F', gloss: '你为什么不开车去学校？' },
      ],
    },
  ],
}
