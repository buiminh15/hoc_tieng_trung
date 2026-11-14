import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 2, Bài 4: 这个工作是他帮我介绍的 (sách trang 25–32).
 * Sách bản Trung–Anh; phần tiếng Việt do app dịch.
 * Nghe: 04-1…04-5. Sách bài tập (trang 37–44, đáp án trang 7–9).
 */

const A = '/audio/hsk-std2/'

export const hskStd2Lesson4: Lesson = {
  id: 4,
  title: 'Công việc này là anh ấy giới thiệu giúp tôi',
  hanzi: '这个工作是他帮我介绍的',
  pinyin: 'Zhège gōngzuò shì tā bāng wǒ jièshào de',
  vi: 'Công việc này là anh ấy giới thiệu giúp tôi',
  intro: 'Nói về việc ai đã làm và từ khi nào: 这本书是我写的。 你是什么时候开始踢足球的？ Học câu 是……的 nhấn mạnh người làm, ……的时候 chỉ thời gian, phó từ 已经; trọng âm ngữ pháp trong câu (1); nét sổ hất và sổ gập gập móc; bộ 纟 và 忄.',

  dialogue: [
    { who: 'A', hanzi: '生日快乐！这是送给你的！', pinyin: 'Shēngrì kuàilè! Zhè shì sòng gěi nǐ de!', vi: 'Chúc mừng sinh nhật! Cái này tặng bạn!', scene: 'Hội thoại 1 · trong lớp học' },
    { who: 'B', hanzi: '是什么？是一本书吗？', pinyin: 'Shì shénme? Shì yì běn shū ma?', vi: 'Là gì vậy? Một quyển sách à?' },
    { who: 'A', hanzi: '对，这本书是我写的。', pinyin: 'Duì, zhè běn shū shì wǒ xiě de.', vi: 'Đúng, quyển sách này là mình viết.' },
    { who: 'B', hanzi: '太谢谢你了！', pinyin: 'Tài xièxie nǐ le!', vi: 'Cảm ơn bạn nhiều lắm!' },
    { who: 'A', hanzi: '早上有你一个电话。', pinyin: 'Zǎoshang yǒu nǐ yí ge diànhuà.', vi: 'Sáng nay có người gọi điện cho anh.', scene: 'Hội thoại 2 · ở nhà' },
    { who: 'B', hanzi: '电话是谁打的？', pinyin: 'Diànhuà shì shéi dǎ de?', vi: 'Ai gọi vậy?' },
    { who: 'A', hanzi: '不知道，是儿子接的。', pinyin: 'Bù zhīdào, shì érzi jiē de.', vi: 'Không biết, con trai nghe máy.' },
    { who: 'B', hanzi: '好，晚上我问一下儿子。', pinyin: 'Hǎo, wǎnshang wǒ wèn yíxià érzi.', vi: 'Được, tối nay anh hỏi con.' },
    { who: 'A', hanzi: '你喜欢踢足球吗？', pinyin: 'Nǐ xǐhuan tī zúqiú ma?', vi: 'Bạn thích đá bóng không?', scene: 'Hội thoại 3 · ở sân vận động' },
    { who: 'B', hanzi: '非常喜欢。', pinyin: 'Fēicháng xǐhuan.', vi: 'Rất thích.' },
    { who: 'A', hanzi: '你是什么时候开始踢足球的？', pinyin: 'Nǐ shì shénme shíhou kāishǐ tī zúqiú de?', vi: 'Bạn bắt đầu đá bóng từ khi nào?' },
    { who: 'B', hanzi: '我十一岁的时候开始踢足球，已经踢了十年了。', pinyin: 'Wǒ shíyī suì de shíhou kāishǐ tī zúqiú, yǐjīng tī le shí nián le.', vi: 'Mình bắt đầu đá bóng năm 11 tuổi, đá được mười năm rồi.' },
    { who: 'A', hanzi: '你在这儿工作多长时间了？', pinyin: 'Nǐ zài zhèr gōngzuò duō cháng shíjiān le?', vi: 'Anh làm ở đây bao lâu rồi?', scene: 'Hội thoại 4 · ở công ty' },
    { who: 'B', hanzi: '已经两年多了，我是2011年来的。', pinyin: 'Yǐjīng liǎng nián duō le, wǒ shì èr líng yī yī nián lái de.', vi: 'Hơn hai năm rồi, tôi đến từ năm 2011.' },
    { who: 'A', hanzi: '你认识谢先生吗？', pinyin: 'Nǐ rènshi Xiè xiānsheng ma?', vi: 'Anh có quen ông Tạ không?' },
    { who: 'B', hanzi: '认识，我们是大学同学，这个工作是他帮我介绍的。', pinyin: 'Rènshi, wǒmen shì dàxué tóngxué, zhège gōngzuò shì tā bāng wǒ jièshào de.', vi: 'Quen, chúng tôi là bạn đại học, công việc này là anh ấy giới thiệu giúp tôi.' },
  ],
  dialogueClips: [
    { label: '04-1 · Hội thoại 1: 生日快乐！', src: A + 'l04-1.mp3' },
    { label: '04-2 · Hội thoại 2: 电话是谁打的？', src: A + 'l04-2.mp3' },
    { label: '04-3 · Hội thoại 3: 你是什么时候开始踢足球的？', src: A + 'l04-3.mp3' },
    { label: '04-4 · Hội thoại 4: 这个工作是他帮我介绍的', src: A + 'l04-4.mp3' },
  ],
  dialogueTip: 'Khi đã biết việc xảy ra, dùng <b>是 + người + động từ + 的</b> để nhấn mạnh <b>ai</b> làm: 这本书是我写的. Phủ định thêm 不 trước 是. <b>…… 的时候</b>: khi, lúc. <b>已经 …… 了</b>: đã (hoàn thành, đạt tới).',
  slowSay: '这个工作是他帮我介绍的',

  vocab: [
    { hanzi: '生日', parts: '生 (sinh) + 日 (nhật)', pinyin: 'shēngrì', pos: 'danh từ', meaning: 'sinh nhật', han_viet: 'sinh nhật' },
    { hanzi: '快乐', parts: '快 (khoái) + 乐 (lạc)', pinyin: 'kuàilè', pos: 'tính từ', meaning: 'vui vẻ, hạnh phúc', han_viet: 'khoái lạc' },
    { hanzi: '给', parts: '纟 + 合', pinyin: 'gěi', pos: 'giới từ', meaning: 'cho (dùng sau động từ: 送给)', han_viet: 'cấp' },
    { hanzi: '接', parts: '扌 + 妾', pinyin: 'jiē', pos: 'động từ', meaning: 'nhận, nghe (máy), đón. Từ ngoài đại cương HSK 2 (dấu * trong sách)', han_viet: 'tiếp' },
    { hanzi: '晚上', parts: '晚 (vãn) + 上', pinyin: 'wǎnshang', pos: 'danh từ', meaning: 'buổi tối', han_viet: '' },
    { hanzi: '问', parts: '门 + 口', pinyin: 'wèn', pos: 'động từ', meaning: 'hỏi', han_viet: 'vấn' },
    { hanzi: '非常', parts: '非 (phi) + 常 (thường)', pinyin: 'fēicháng', pos: 'phó từ', meaning: 'rất, vô cùng', han_viet: 'phi thường' },
    { hanzi: '开始', parts: '开 (khai) + 始 (thủy)', pinyin: 'kāishǐ', pos: 'động từ', meaning: 'bắt đầu', han_viet: 'khai thủy' },
    { hanzi: '已经', parts: '已 (dĩ) + 经 (kinh)', pinyin: 'yǐjīng', pos: 'phó từ', meaning: 'đã', han_viet: 'dĩ kinh' },
    { hanzi: '长', pinyin: 'cháng', pos: 'tính từ', meaning: 'dài, lâu', han_viet: 'trường' },
    { hanzi: '两', pinyin: 'liǎng', pos: 'số từ', meaning: 'hai', han_viet: 'lưỡng' },
    { hanzi: '帮', parts: '邦 + 巾', pinyin: 'bāng', pos: 'động từ', meaning: 'giúp', han_viet: 'bang' },
    { hanzi: '介绍', parts: '介 (giới) + 绍 (thiệu)', pinyin: 'jièshào', pos: 'động từ', meaning: 'giới thiệu', han_viet: 'giới thiệu' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Trọng âm câu (1)', title: 'Trọng âm ngữ pháp trong câu (1)',
      clip: { label: '04-5 · Nghe và đọc theo (trọng âm trong câu)', src: A + 'l04-5.mp3' },
      intro: 'Khi không mang tư tưởng hay tình cảm đặc biệt, một số thành phần câu được đọc nhấn chỉ vì đặc điểm ngữ pháp, gọi là trọng âm ngữ pháp. Quy luật thường gặp: nhấn vị ngữ, nhấn bổ ngữ, nhấn định ngữ, nhấn trạng ngữ. Bài này học nhấn vị ngữ và nhấn bổ ngữ.',
      groups: [
        { label: '(1) Nhấn vị ngữ', items: [['我学习汉语。', 'Wǒ xuéxí Hànyǔ.', 'nhấn 学习'], ['他哥哥是一名医生。', 'Tā gēge shì yì míng yīshēng.', 'nhấn 是'], ['王小姐买了几件衣服。', 'Wáng xiǎojiě mǎile jǐ jiàn yīfu.', 'nhấn 买']] },
        { label: '(2) Nhấn bổ ngữ', items: [['他们高兴得跳了起来。', 'Tāmen gāoxìng de tiàole qǐlai.', 'nhấn 跳了起来'], ['大卫打篮球打得非常好。', 'Dàwèi dǎ lánqiú dǎ de fēicháng hǎo.', 'nhấn 非常好'], ['今天的羊肉做得很好吃。', 'Jīntiān de yángròu zuò de hěn hǎochī.', 'nhấn 很好吃']] },
      ],
    },
    {
      kind: 'examples', label: 'Nét · bộ thủ', title: 'Chữ Hán: nét mới và bộ 纟, 忄',
      intro: 'Nét (10): sổ hất (竖提, ví dụ 长, 民) và sổ gập gập móc (竖折折钩, ví dụ 马, 写). Bộ 纟 (mịch, sợi tơ) thường liên quan đến tơ sợi; bộ 忄 (tâm đứng) thường liên quan đến tâm lý con người.',
      groups: [
        { label: 'Ví dụ nét mới', items: [['长', 'cháng', 'dài'], ['民', 'mín', 'dân'], ['马', 'mǎ', 'ngựa'], ['写', 'xiě', 'viết']] },
        { label: 'Bộ 纟 và 忄', items: [['给', 'gěi', 'cho (bộ 纟)'], ['结', 'jié', 'buộc, thắt (bộ 纟)'], ['忙', 'máng', 'bận (bộ 忄)'], ['快', 'kuài', 'nhanh (bộ 忄)']] },
      ],
    },
  ],

  notes: [
    {
      title: 'Câu 是……的: nhấn mạnh người thực hiện',
      body: 'Khi đã biết việc xảy ra, dùng 是……的 để nhấn mạnh người thực hiện hành động. Cấu trúc: tân ngữ + 是 + ai + động từ + 的. Ví dụ: 这本书是我买的。 晚饭是妈妈做的。 电话是谁打的？ Phủ định thêm 不 trước 是: 这个汉字不是大卫写的。 苹果不是王方买的。 电话不是我接的。',
      say: '这本书是我写的',
    },
    {
      title: 'Chỉ thời gian: ……的时候',
      body: '"Số lượng + 的时候" chỉ thời gian: 今天早上八点的时候我没在家。 我十八岁的时候一个人来到北京。 我十一岁的时候开始踢足球。 "Động từ + 的时候" cũng chỉ thời gian: 我睡觉的时候，我妈妈在做饭。 麦克到学校的时候下雨了。',
      say: '我十一岁的时候开始踢足球',
    },
    {
      title: 'Phó từ chỉ thời gian 已经',
      body: '已经 chỉ hành động đã hoàn thành hoặc đã đạt tới một mức độ nhất định. Ví dụ: 王老师已经回家了。 我的身体已经好了。 （足球我）已经踢了十年了。',
      say: '我已经踢了十年了',
    },
    {
      title: 'Trọng âm ngữ pháp trong câu (1)',
      body: 'Vị ngữ thường được đọc nhấn (我学习汉语). Bổ ngữ sau 得 cũng được đọc nhấn (大卫打篮球打得非常好).',
      say: '我学习汉语',
    },
  ],

  writeChars: ['两', '乐', '长', '帮', '介', '绍'],

  drills: [
    {
      title: 'Ba chữ đơn mới (认识独体字)',
      hint: 'Sách trang 31: nguồn gốc hình chữ. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '两', p: 'liǎng', m: 'hình cái ách trên cổ hai con ngựa và hai yên ngựa, nghĩa là "hai", "đôi"' },
        { h: '乐', p: 'yuè / lè', m: 'gốc là nhạc cụ, âm nhạc (yuè); sau mở rộng thành vui vẻ (lè)' },
        { h: '长', p: 'zhǎng / cháng', m: 'gốc là người già chống gậy; nay là "lớn tuổi" (zhǎng) và "dài" (cháng)' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 29)',
      items: [
        { q: '这本书是谁写的？', hint: '这本书是他写的。' },
        { q: '早上的电话是谁接的？', hint: '是儿子接的。' },
        { q: '他是什么时候开始踢足球的？', hint: '他十一岁的时候开始踢足球。' },
        { q: '他在那儿工作多长时间了？', hint: '已经两年多了。' },
        { q: '工作是谁帮他介绍的？', hint: '是谢先生帮他介绍的。' },
      ],
    },
  ],

  sentences: [
    { parts: ['这', '本', '书', '是', '我', '写', '的'], pinyin: 'Zhè běn shū shì wǒ xiě de.', vi: 'Quyển sách này là mình viết.' },
    { parts: ['电话', '是', '谁', '打', '的'], pinyin: 'Diànhuà shì shéi dǎ de?', vi: 'Ai gọi điện vậy?' },
    { parts: ['你', '是', '什么', '时候', '开始', '踢', '足球', '的'], pinyin: 'Nǐ shì shénme shíhou kāishǐ tī zúqiú de?', vi: 'Bạn bắt đầu đá bóng từ khi nào?' },
    { parts: ['我', '十一', '岁', '的', '时候', '开始', '踢', '足球'], pinyin: 'Wǒ shíyī suì de shíhou kāishǐ tī zúqiú.', vi: 'Mình bắt đầu đá bóng năm 11 tuổi.' },
    { parts: ['已经', '两', '年', '多', '了'], pinyin: 'Yǐjīng liǎng nián duō le.', vi: 'Đã hơn hai năm rồi.' },
    { parts: ['这', '个', '工作', '是', '他', '帮', '我', '介绍', '的'], pinyin: 'Zhège gōngzuò shì tā bāng wǒ jièshào de.', vi: 'Công việc này là anh ấy giới thiệu giúp tôi.' },
  ],

  dictations: [
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 11–15)',
      hint: 'Nghe đoạn ghi âm (04-1, phần 3), chọn A, B hoặc C. Câu 11: A 张老师 · B 小王 · C 王老师. Câu 12: A 大卫 · B 李先生 · C 不知道. Câu 13: A 一年前 · B 一年多了 · C 两年前. Câu 14: A 很不喜欢 · B 非常喜欢 · C 不太喜欢. Câu 15: A 十年 · B 不到十年 · C 十几年.',
      clip: { label: '04-1 · Sách bài tập, phần nghe', src: A + 'w04-1.mp3' },
      items: [
        { prompt: 'Câu 11', answer: 'A', gloss: '张老师' }, { prompt: 'Câu 12', answer: 'B', gloss: '李先生' },
        { prompt: 'Câu 13', answer: 'C', gloss: '两年前' }, { prompt: 'Câu 14', answer: 'B', gloss: '非常喜欢' },
        { prompt: 'Câu 15', answer: 'A', gloss: '十年' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ (câu 21–25)',
      hint: 'A 介绍 · B 帮 · C 给 · D 非常 · E 贵 · F 已经. Gõ chữ cái A–F.',
      items: [
        { prompt: '我身体不好，不能去学校，你（ ）我给王老师打个电话吧。', answer: 'B', gloss: '帮' }, { prompt: '明天是丽丽的生日，你想送（ ）她什么？', answer: 'C', gloss: '给' },
        { prompt: '这本书（ ）好，我们都看了，你也看看吧。', answer: 'D', gloss: '非常' }, { prompt: '医生说你的病（ ）好了，明天开始不吃这个药了。', answer: 'F', gloss: '已经' },
        { prompt: '你认识李先生吗？能不能给我（ ）一下。', answer: 'A', gloss: '介绍' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, đúng hay sai (câu 26–30)',
      hint: 'Đọc câu cho sẵn rồi xét câu có dấu * đúng (gõ D) hay sai (gõ S).',
      items: [
        { prompt: '妈妈做晚饭了，晚上我们回家吃饭吧。* 他们晚上不出去吃饭。', answer: 'D', gloss: 'Đúng' },
        { prompt: '下午我睡觉的时候有一个电话，我没接。* 我不知道电话是谁打的。', answer: 'D', gloss: 'Đúng' },
        { prompt: '明天是你的生日，明天晚上我不工作。* 他明天晚上没有时间。', answer: 'S', gloss: 'Sai' },
        { prompt: '你问一下爸爸什么时候去踢足球。* 爸爸要踢足球。', answer: 'D', gloss: 'Đúng' },
        { prompt: '山姆，我给你介绍一下，这是我的大学同学谢力。* 我和谢力是大学的时候认识的。', answer: 'D', gloss: 'Đúng' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu (câu 31–35)',
      hint: 'A 这本书是你什么时候写的？ B 昨天晚上的电话是谁打的？ C 你的汉字非常漂亮！ D 今天我非常高兴，你们多吃点儿。 E 他在哪儿呢？你看见他了吗？ F 这几天我不想吃饭，觉得很累。 Gõ chữ cái A–F.',
      items: [
        { prompt: '王方打的，她说今天不能去学校了。', answer: 'B', gloss: '昨天晚上的电话是谁打的？' }, { prompt: '谢谢！我是大学的时候开始学的。', answer: 'C', gloss: '你的汉字非常漂亮！' },
        { prompt: '是不是病了？你问一下医生吧。', answer: 'F', gloss: '这几天我不想吃饭……' }, { prompt: '2011年吧，已经两年了。', answer: 'A', gloss: '这本书是你什么时候写的？' },
        { prompt: '我们也很高兴，生日快乐！', answer: 'D', gloss: '今天我非常高兴……' },
      ],
    },
  ],
}
