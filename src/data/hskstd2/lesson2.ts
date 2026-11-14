import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 2, Bài 2: 我每天六点起床 (sách trang 9–16).
 * Sách bản Trung–Anh; phần tiếng Việt do app dịch.
 * Nghe: 02-1…02-5 (giáo trình). Sách bài tập (trang 17–24, đáp án trang 3–5): nghe chọn đáp án 11–15,
 * điền từ 21–25, đúng/sai 26–30, nối câu 31–35, nghe gõ pinyin.
 */

const A = '/audio/hsk-std2/'

export const hskStd2Lesson2: Lesson = {
  id: 2,
  title: 'Hằng ngày tôi thức dậy lúc 6 giờ',
  hanzi: '我每天六点起床',
  pinyin: 'Wǒ měi tiān liù diǎn qǐ chuáng',
  vi: 'Hằng ngày tôi thức dậy lúc 6 giờ',
  intro: 'Nói về sinh hoạt hằng ngày và sức khỏe: 你每天几点起床？ 现在身体怎么样？ Học câu hỏi với 是不是, đại từ 每, đại từ nghi vấn 多 + tính từ; trọng âm của từ ba âm tiết; nét ngang phẩy cong móc và ngang gập gập phẩy; bộ ⺮ và 欠.',

  dialogue: [
    { who: 'A', hanzi: '你很少生病，是不是喜欢运动？', pinyin: 'Nǐ hěn shǎo shēng bìng, shì bu shì xǐhuan yùndòng?', vi: 'Bạn ít khi ốm, chắc là thích thể thao phải không?', scene: 'Hội thoại 1 · ở sân vận động' },
    { who: 'B', hanzi: '是啊，我每天早上都要出去跑步。', pinyin: 'Shì a, wǒ měi tiān zǎoshang dōu yào chūqu pǎo bù.', vi: 'Đúng vậy, sáng nào mình cũng ra ngoài chạy bộ.' },
    { who: 'A', hanzi: '你每天几点起床？', pinyin: 'Nǐ měi tiān jǐ diǎn qǐ chuáng?', vi: 'Hằng ngày bạn mấy giờ dậy?' },
    { who: 'B', hanzi: '我每天六点起床。', pinyin: 'Wǒ měi tiān liù diǎn qǐ chuáng.', vi: 'Hằng ngày mình dậy lúc 6 giờ.' },
    { who: 'A', hanzi: '吃药了吗？现在身体怎么样？', pinyin: 'Chī yào le ma? Xiànzài shēntǐ zěnmeyàng?', vi: 'Bác uống thuốc chưa? Bây giờ thấy trong người thế nào?', scene: 'Hội thoại 2 · ở bệnh viện' },
    { who: 'B', hanzi: '吃了。现在好多了。', pinyin: 'Chī le. Xiànzài hǎo duō le.', vi: 'Uống rồi. Giờ đỡ nhiều rồi.' },
    { who: 'A', hanzi: '什么时候能出院？', pinyin: 'Shénme shíhou néng chū yuàn?', vi: 'Khi nào bác được xuất viện?' },
    { who: 'B', hanzi: '医生说下个星期。', pinyin: 'Yīshēng shuō xià ge xīngqī.', vi: 'Bác sĩ nói tuần sau.' },
    { who: 'A', hanzi: '大卫今年多大？', pinyin: 'Dàwèi jīnnián duō dà?', vi: 'Năm nay David bao nhiêu tuổi?', scene: 'Hội thoại 3 · ở sân thể thao' },
    { who: 'B', hanzi: '二十多岁。', pinyin: 'Èrshí duō suì.', vi: 'Hơn hai mươi tuổi.' },
    { who: 'A', hanzi: '他多高？', pinyin: 'Tā duō gāo?', vi: 'Anh ấy cao bao nhiêu?' },
    { who: 'B', hanzi: '一米八几。', pinyin: 'Yì mǐ bā jǐ.', vi: 'Một mét tám mấy.' },
    { who: 'A', hanzi: '你怎么知道这么多啊？', pinyin: 'Nǐ zěnme zhīdào zhème duō a?', vi: 'Sao bạn biết nhiều về anh ấy vậy?' },
    { who: 'B', hanzi: '他是我同学。', pinyin: 'Tā shì wǒ tóngxué.', vi: 'Anh ấy là bạn cùng lớp của mình.' },
    { who: 'A', hanzi: '张老师星期六也不休息啊？', pinyin: 'Zhāng lǎoshī xīngqī liù yě bù xiūxi a?', vi: 'Thầy Trương thứ bảy cũng không nghỉ à?', scene: 'Hội thoại 4 · trong phòng' },
    { who: 'B', hanzi: '是啊，他这几天很忙，没有时间休息。', pinyin: 'Shì a, tā zhè jǐ tiān hěn máng, méiyǒu shíjiān xiūxi.', vi: 'Đúng vậy, mấy hôm nay thầy rất bận, không có thời gian nghỉ.' },
    { who: 'A', hanzi: '那会很累吧？', pinyin: 'Nà huì hěn lèi ba?', vi: 'Vậy chắc mệt lắm nhỉ?' },
    { who: 'B', hanzi: '他每天回来都很累。', pinyin: 'Tā měi tiān huílai dōu hěn lèi.', vi: 'Ngày nào thầy về cũng rất mệt.' },
  ],
  dialogueClips: [
    { label: '02-1 · Hội thoại 1: 我每天六点起床', src: A + 'l02-1.mp3' },
    { label: '02-2 · Hội thoại 2: 现在身体怎么样？', src: A + 'l02-2.mp3' },
    { label: '02-3 · Hội thoại 3: 他多高？', src: A + 'l02-3.mp3' },
    { label: '02-4 · Hội thoại 4: 张老师星期六也不休息啊？', src: A + 'l02-4.mp3' },
  ],
  dialogueTip: 'Khi đã đoán khá chắc và muốn xác nhận, hỏi bằng <b>是不是</b>: 你是不是喜欢运动？ <b>每 + lượng từ</b>: mỗi (每天, 每个星期), thường đi với <b>都</b>. Hỏi mức độ: <b>多 + tính từ</b> (多大, 多高), trả lời bằng con số cụ thể.',
  slowSay: '我每天六点起床',

  vocab: [
    { hanzi: '生病', parts: '生 (sinh) + 病 (bệnh)', pinyin: 'shēng bìng', pos: 'động từ', meaning: 'ốm, bị bệnh', han_viet: 'sinh bệnh' },
    { hanzi: '每', pinyin: 'měi', pos: 'đại từ', meaning: 'mỗi', han_viet: 'mỗi' },
    { hanzi: '早上', parts: '早 (tảo) + 上 (thượng)', pinyin: 'zǎoshang', pos: 'danh từ', meaning: 'buổi sáng', han_viet: '' },
    { hanzi: '跑步', parts: '跑 = 足 + 包; 步 (bộ)', pinyin: 'pǎo bù', pos: 'động từ', meaning: 'chạy bộ', han_viet: 'bào bộ' },
    { hanzi: '起床', parts: '起 (khởi) + 床 (sàng)', pinyin: 'qǐ chuáng', pos: 'động từ', meaning: 'thức dậy, ra khỏi giường', han_viet: 'khởi sàng' },
    { hanzi: '药', parts: '艹 (thảo) + 约 (ước)', pinyin: 'yào', pos: 'danh từ', meaning: 'thuốc', han_viet: 'dược' },
    { hanzi: '身体', parts: '身 (thân) + 体 (thể)', pinyin: 'shēntǐ', pos: 'danh từ', meaning: 'cơ thể, sức khỏe', han_viet: 'thân thể' },
    { hanzi: '出院', parts: '出 (xuất) + 院 (viện)', pinyin: 'chū yuàn', pos: 'động từ', meaning: 'xuất viện', han_viet: 'xuất viện' },
    { hanzi: '高', pinyin: 'gāo', pos: 'tính từ', meaning: 'cao', han_viet: 'cao' },
    { hanzi: '米', pinyin: 'mǐ', pos: 'lượng từ', meaning: 'mét. Từ ngoài đại cương HSK 2 (dấu * trong sách)', han_viet: 'mễ' },
    { hanzi: '知道', parts: '知 (tri) + 道 (đạo)', pinyin: 'zhīdào', pos: 'động từ', meaning: 'biết', han_viet: 'tri đạo' },
    { hanzi: '休息', parts: '休 = 亻 + 木; 息 = 自 + 心', pinyin: 'xiūxi', pos: 'động từ', meaning: 'nghỉ ngơi', han_viet: 'hưu tức' },
    { hanzi: '忙', parts: '忄 (tâm) + 亡 (vong)', pinyin: 'máng', pos: 'tính từ', meaning: 'bận', han_viet: 'mang' },
    { hanzi: '时间', parts: '时 (thời) + 间 (gian)', pinyin: 'shíjiān', pos: 'danh từ', meaning: 'thời gian', han_viet: 'thời gian' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Trọng âm 3 âm tiết', title: 'Trọng âm của từ ba âm tiết',
      clip: { label: '02-5 · Nghe và đọc theo (trọng âm từ ba âm tiết)', src: A + 'l02-5.mp3' },
      intro: '(1) Vừa + nhẹ + nặng: phần lớn từ ba âm tiết, âm tiết cuối nhấn và dài nhất. (2) Vừa + nặng + nhẹ: không nhiều, âm tiết giữa nhấn, âm tiết cuối nhẹ. (3) Nặng + nhẹ + nhẹ: rất ít, đa số là từ khẩu ngữ, âm tiết đầu nhấn, hai âm tiết sau nhẹ.',
      groups: [
        { label: 'Vừa + nhẹ + nặng', items: [['收音机', 'shōuyīnjī', 'đài radio'], ['新加坡', 'Xīnjiāpō', 'Singapore'], ['好莱坞', 'Hǎoláiwù', 'Hollywood'], ['电视剧', 'diànshìjù', 'phim truyền hình']] },
        { label: 'Vừa + nặng + nhẹ', items: [['胡萝卜', 'húluóbo', 'cà rốt'], ['没关系', 'méi guānxi', 'không sao'], ['老狐狸', 'lǎo húli', 'cáo già'], ['毛孩子', 'máoháizi', 'đứa trẻ non nớt']] },
        { label: 'Nặng + nhẹ + nhẹ', items: [['什么的', 'shénmede', 'vân vân'], ['怪不得', 'guàibude', 'thảo nào'], ['姑娘家', 'gūniangjia', 'con gái'], ['好着呢', 'hǎo zhe ne', 'tốt lắm']] },
      ],
    },
    {
      kind: 'examples', label: 'Nét · bộ thủ', title: 'Chữ Hán: nét mới và bộ ⺮, 欠',
      intro: 'Nét (8): ngang phẩy cong móc (横撇弯钩, ví dụ 队, 阵) và ngang gập gập phẩy (横折折撇, ví dụ 及, 级). Bộ ⺮ (trúc) thường liên quan đến tre trúc; bộ 欠 thường liên quan đến hoạt động của miệng.',
      groups: [
        { label: 'Ví dụ nét mới', items: [['队', 'duì', 'đội'], ['阵', 'zhèn', 'trận'], ['及', 'jí', 'kịp; và'], ['级', 'jí', 'cấp, lớp']] },
        { label: 'Bộ ⺮ và 欠', items: [['篮', 'lán', 'cái giỏ (bộ ⺮)'], ['笔', 'bǐ', 'cây bút (bộ ⺮)'], ['歌', 'gē', 'bài hát (bộ 欠)'], ['吹', 'chuī', 'thổi (bộ 欠)']] },
      ],
    },
  ],

  notes: [
    {
      title: 'Câu hỏi với 是不是',
      body: 'Khi người hỏi đã đoán khá chắc về một việc và muốn xác nhận thì dùng 是不是. 是不是 thường đứng trước vị ngữ, cũng có thể đứng đầu hoặc cuối câu. Ví dụ: 你很少生病，是不是喜欢运动？ 是不是明天爸爸休息？ 我们星期一去北京，是不是？',
      say: '你是不是喜欢运动',
    },
    {
      title: 'Đại từ 每',
      body: 'Sau 每 là lượng từ, chỉ bất kỳ một cá thể hoặc một nhóm nào trong toàn thể: 每天, 每年, 每个月, 每个星期. Ví dụ: 山姆每年都去中国旅游。 你每个星期六都工作吗？ 我每天六点起床。',
      say: '我每天六点起床',
    },
    {
      title: 'Đại từ nghi vấn 多',
      body: '多 đứng trước tính từ để hỏi về mức độ; khi trả lời phải nói con số cụ thể. Ví dụ: 你多大？ 我16岁。 王医生的儿子多高？ 他儿子一米七。 他多高？ 一米八几。',
      say: '他多高',
    },
    {
      title: 'Trọng âm của từ ba âm tiết',
      body: 'Phần lớn nhấn âm tiết cuối (收音机, 电视剧). Một số nhấn âm tiết giữa, âm tiết cuối nhẹ (没关系). Rất ít từ, chủ yếu khẩu ngữ, nhấn âm tiết đầu và hai âm tiết sau nhẹ (什么的).',
      say: '没关系',
    },
  ],

  writeChars: ['生', '高', '每', '药', '忙', '笔'],

  drills: [
    {
      title: 'Hai chữ đơn mới (认识独体字)',
      hint: 'Sách trang 15: nguồn gốc hình chữ. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '生', p: 'shēng', m: 'hình mầm cây nhú lên khỏi mặt đất; nghĩa gốc là mọc, nay nhiều nghĩa: 生病, 生活' },
        { h: '高', p: 'gāo', m: 'hình ngôi lầu cao, nghĩa là "cao"' },
      ],
    },
    {
      title: 'Hỏi về sinh hoạt hằng ngày (运用 1–2, sách trang 16)',
      hint: 'Bấm để nghe, rồi tự trả lời.',
      items: [
        { h: '你每天几点吃早饭？', p: 'Nǐ měi tiān jǐ diǎn chī zǎofàn?', m: 'Hằng ngày bạn ăn sáng lúc mấy giờ?' },
        { h: '你每天什么时候运动？', p: 'Nǐ měi tiān shénme shíhou yùndòng?', m: 'Hằng ngày bạn tập thể thao lúc nào?' },
        { h: '你多大？', p: 'Nǐ duō dà?', m: 'Bạn bao nhiêu tuổi?' },
        { h: '你多高？', p: 'Nǐ duō gāo?', m: 'Bạn cao bao nhiêu?' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 13)',
      items: [
        { q: '他为什么很少生病？', hint: '因为他每天早上都出去跑步。' },
        { q: '他每天几点起床？', hint: '他每天六点起床。' },
        { q: '她现在身体怎么样？', hint: '她现在好多了。' },
        { q: '大卫今年多高？多大？', hint: '大卫一米八几，二十多岁。' },
        { q: '张老师星期六休息吗？', hint: '他星期六也不休息，这几天很忙。' },
      ],
    },
    {
      title: 'Hoạt động nhóm: hỏi thông tin cơ bản và thể thao (运用 2, sách trang 16)',
      items: [
        { q: 'A: 你多大？你多高？你每天做什么运动？', hint: 'Mẫu của sách (小王): 18岁，1米75，每天早上跑步，每个星期六踢足球。' },
      ],
    },
  ],

  sentences: [
    { parts: ['你', '很', '少', '生病', '，', '是不是', '喜欢', '运动'], pinyin: 'Nǐ hěn shǎo shēng bìng, shì bu shì xǐhuan yùndòng?', vi: 'Bạn ít ốm, có phải thích thể thao không?' },
    { parts: ['我', '每', '天', '早上', '都', '要', '出去', '跑步'], pinyin: 'Wǒ měi tiān zǎoshang dōu yào chūqu pǎo bù.', vi: 'Sáng nào tôi cũng ra ngoài chạy bộ.' },
    { parts: ['我', '每', '天', '六', '点', '起床'], pinyin: 'Wǒ měi tiān liù diǎn qǐ chuáng.', vi: 'Hằng ngày tôi dậy lúc 6 giờ.' },
    { parts: ['现在', '身体', '怎么样'], pinyin: 'Xiànzài shēntǐ zěnmeyàng?', vi: 'Bây giờ sức khỏe thế nào?' },
    { parts: ['医生', '说', '下', '个', '星期'], pinyin: 'Yīshēng shuō xià ge xīngqī.', vi: 'Bác sĩ nói tuần sau.' },
    { parts: ['他', '多', '高'], pinyin: 'Tā duō gāo?', vi: 'Anh ấy cao bao nhiêu?' },
    { parts: ['他', '这', '几', '天', '很', '忙', '，', '没有', '时间', '休息'], pinyin: 'Tā zhè jǐ tiān hěn máng, méiyǒu shíjiān xiūxi.', vi: 'Mấy hôm nay anh ấy rất bận, không có thời gian nghỉ.' },
  ],

  // ───────── Sách bài tập, bài 2 (đáp án: "Đáp án sách bài tập HSK 2", trang 3–5) ─────────
  dictations: [
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 11–15)',
      hint: 'Nghe đoạn ghi âm (02-1, phần 3), chọn A, B hoặc C. Câu 11: A 能 · B 不能 · C 不知道. Câu 12: A 六点多 · B 七点多 · C 十点多. Câu 13: A 不累 · B 很累 · C 累. Câu 14: A 工作了 · B 在学习 · C 在找工作. Câu 15: A 去医院了 · B 病了 · C 身体好多了.',
      clip: { label: '02-1 · Sách bài tập, phần nghe', src: A + 'w02-1.mp3' },
      items: [
        { prompt: 'Câu 11', answer: 'B', gloss: '不能' }, { prompt: 'Câu 12', answer: 'C', gloss: '十点多' },
        { prompt: 'Câu 13', answer: 'A', gloss: '不累' }, { prompt: 'Câu 14', answer: 'A', gloss: '工作了' },
        { prompt: 'Câu 15', answer: 'B', gloss: '病了' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, gõ từ (ngữ âm, câu 1)',
      hint: 'Nghe đoạn ghi âm (02-2), gõ lại pinyin của từ bạn nghe được (có thể không cần dấu, viết liền).',
      clip: { label: '02-2 · Sách bài tập, ngữ âm', src: A + 'w02-2.mp3' },
      items: [
        { prompt: '(1)', answer: 'huǒchēzhàn', gloss: '火车站' }, { prompt: '(2)', answer: 'dàxuéshēng', gloss: '大学生' }, { prompt: '(3)', answer: 'fāngbiànmiàn', gloss: '方便面' }, { prompt: '(4)', answer: 'diànyǐngyuàn', gloss: '电影院' },
        { prompt: '(5)', answer: 'nǚpéngyou', gloss: '女朋友' }, { prompt: '(6)', answer: 'yǒuyìsi', accept: ['yǒu yìsi'], gloss: '有意思' }, { prompt: '(7)', answer: 'mángzhene', accept: ['máng zhe ne'], gloss: '忙着呢' }, { prompt: '(8)', answer: 'rénjiade', accept: ['rénjia de'], gloss: '人家的' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ (câu 21–25)',
      hint: 'A 出去 · B 每 · C 忙 · D 知道 · E 贵 · F 生病. Gõ chữ cái A–F.',
      items: [
        { prompt: '我们（ ）个星期六都工作。', answer: 'B', gloss: '每' }, { prompt: '对不起，我很（ ），没时间去看电影。', answer: 'C', gloss: '忙' },
        { prompt: '他不在家，下午四点（ ）买东西了。', answer: 'A', gloss: '出去' }, { prompt: '我的小猫不想吃东西，我觉得它（ ）了。', answer: 'F', gloss: '生病' },
        { prompt: '我也不（ ）北京的天气，你问问小李，他是北京人。', answer: 'D', gloss: '知道' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, đúng hay sai (câu 26–30)',
      hint: 'Đọc câu cho sẵn rồi xét câu có dấu * đúng (gõ D) hay sai (gõ S).',
      items: [
        { prompt: '医生说我要住两天院，明天能出院。* 我今天不能出院。', answer: 'D', gloss: 'Đúng' },
        { prompt: '我的小猫生病了，你知道去哪个医院好吗？* 我的小猫现在好多了。', answer: 'S', gloss: 'Sai' },
        { prompt: '你星期天也去学校吗？太忙了！* 他星期天不休息。', answer: 'D', gloss: 'Đúng' },
        { prompt: '这个药每天中午吃，晚饭后不要吃。* 每天晚饭后吃药。', answer: 'S', gloss: 'Sai' },
        { prompt: '我儿子不太高，他今年十四岁，一米五几。* 他儿子今年十多岁。', answer: 'D', gloss: 'Đúng' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu (câu 31–35)',
      hint: 'A 他儿子今年八岁了。 B 星期六也不休息，你工作累不累？ C 我不喜欢早上运动，我喜欢下午和朋友一起踢足球。 D 医生说他不能出院。 E 他在哪儿呢？你看见他了吗？ F 你每天什么时候睡觉？ Gõ chữ cái A–F.',
      items: [
        { prompt: '什么？已经三天了，为什么？', answer: 'D', gloss: '医生说他不能出院。' }, { prompt: '我也不喜欢，我早上没时间。', answer: 'C', gloss: '我不喜欢早上运动……' },
        { prompt: '是啊，已经一米四了。', answer: 'A', gloss: '他儿子今年八岁了。' }, { prompt: '没关系，星期天我有不少时间休息。', answer: 'B', gloss: '你工作累不累？' },
        { prompt: '九点多吧，很早。我早上起床也很早。', answer: 'F', gloss: '你每天什么时候睡觉？' },
      ],
    },
  ],
}
