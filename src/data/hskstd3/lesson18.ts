import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 3, Bài 18: 我相信他们会同意的。 (sách trang 167–174).
 * LƯU Ý: bản scan thiếu 2 trang bài khóa/từ mới (tr.168–169) nên bài này chưa có văn bản hội thoại;
 * từ vựng lấy theo danh sách trong sách giáo viên (nghĩa do mình tự ghi). Nghe vẫn có đủ file 18-1…18-5.
 * Ngữ pháp, bài tập: giáo trình tr.170–173, đáp án theo "Đáp án giáo trình HSK 3" trang 36–37.
 */

const A = '/audio/hsk-std3/'

export const hskStd3Lesson18: Lesson = {
  id: 18,
  title: 'Tôi tin họ sẽ đồng ý',
  hanzi: '我相信他们会同意的。',
  pinyin: 'Wǒ xiāngxìn tāmen huì tóngyì de.',
  vi: 'Tôi tin họ sẽ đồng ý',
  intro: 'Điều kiện và đối tượng nói đến. Học cấu trúc 只要……就……(điều kiện cần) và giới từ 关于 (liên quan đến…). Bài khóa trong bản scan bị thiếu trang nên hãy nghe file âm thanh 18-1…18-4.',

  dialogue: [],
  dialogueClips: [
    { label: '18-1 · Bài khóa 1', src: A + 'l18-1.mp3' },
    { label: '18-2 · Bài khóa 2', src: A + 'l18-2.mp3' },
    { label: '18-3 · Bài khóa 3', src: A + 'l18-3.mp3' },
    { label: '18-4 · Bài khóa 4', src: A + 'l18-4.mp3' },
  ],
  dialogueTip: '<b>只要……，就……</b>: chỉ cần… thì…. <b>关于 + đối tượng</b>: về…, liên quan đến….',
  slowSay: '我相信他们会同意的',

  vocab: [
    { hanzi: '向', pinyin: 'xiàng', pos: 'giới từ', meaning: 'hướng về, với', han_viet: 'hướng' },
    { hanzi: '万', pinyin: 'wàn', pos: 'số từ', meaning: 'mười nghìn, vạn', han_viet: 'vạn' },
    { hanzi: '只', pinyin: 'zhī', pos: 'lượng từ', meaning: 'con (động vật nhỏ)', han_viet: 'chỉ' },
    { hanzi: '嘴', pinyin: 'zuǐ', pos: 'danh từ', meaning: 'miệng', han_viet: 'chủy' },
    { hanzi: '动物', pinyin: 'dòngwù', pos: 'danh từ', meaning: 'động vật', han_viet: 'động vật' },
    { hanzi: '段', pinyin: 'duàn', pos: 'lượng từ', meaning: 'đoạn, khoảng (thời gian)', han_viet: 'đoạn' },
    { hanzi: '不但……而且……', pinyin: 'búdàn…érqiě…', pos: 'liên từ', meaning: 'không những… mà còn…', han_viet: 'bất đãn nhi thả' },
    { hanzi: '有名', pinyin: 'yǒumíng', pos: 'tính từ', meaning: 'nổi tiếng', han_viet: 'hữu danh' },
    { hanzi: '同意', pinyin: 'tóngyì', pos: 'động từ', meaning: 'đồng ý', han_viet: 'đồng ý' },
    { hanzi: '相信', pinyin: 'xiāngxìn', pos: 'động từ', meaning: 'tin tưởng', han_viet: 'tương tín' },
    { hanzi: '关于', pinyin: 'guānyú', pos: 'giới từ', meaning: 'về, liên quan đến', han_viet: 'quan vu' },
    { hanzi: '机会', pinyin: 'jīhuì', pos: 'danh từ', meaning: 'cơ hội', han_viet: 'cơ hội' },
    { hanzi: '国家', pinyin: 'guójiā', pos: 'danh từ', meaning: 'quốc gia, đất nước', han_viet: 'quốc gia' },
    { hanzi: '种', pinyin: 'zhǒng', pos: 'lượng từ', meaning: 'loại, thứ', han_viet: 'chủng' },
    { hanzi: '特点', pinyin: 'tèdiǎn', pos: 'danh từ', meaning: 'đặc điểm', han_viet: 'đặc điểm' },
    { hanzi: '奇怪', pinyin: 'qíguài', pos: 'tính từ', meaning: 'kỳ lạ', han_viet: 'kỳ quái' },
    { hanzi: '地', pinyin: 'de', pos: 'trợ từ', meaning: 'trợ từ đứng sau trạng ngữ (认真地学习)', han_viet: 'địa' },
  ],

  sections: [
    {
      kind: 'examples', label: '只要…就…', title: 'Cấu trúc 只要……，就……',
      intro: 'Là cấu trúc câu phức chỉ điều kiện. Theo sau 只要 là mệnh đề diễn tả điều kiện cần thiết, theo sau 就 là kết quả tương ứng. Chủ ngữ có thể đặt trước hoặc sau 只要; nếu có chủ ngữ thứ hai thì phải đặt nó trước 就.',
      groups: [{ label: 'Ví dụ', items: [['只要我有时间，就一定跟你去旅游。', 'Zhǐyào wǒ yǒu shíjiān, jiù yídìng gēn nǐ qù lǚyóu.', 'Chỉ cần tôi có thời gian, nhất định sẽ đi du lịch với bạn.'], ['我只要喜欢，就一定会买。', 'Wǒ zhǐyào xǐhuan, jiù yídìng huì mǎi.', 'Tôi chỉ cần thích là nhất định sẽ mua.'], ['只要你想去，我就跟你去。', 'Zhǐyào nǐ xiǎng qù, wǒ jiù gēn nǐ qù.', 'Chỉ cần bạn muốn đi, tôi sẽ đi cùng.'], ['只要你给我买，我就能照顾好它。', 'Zhǐyào nǐ gěi wǒ mǎi, wǒ jiù néng zhàogù hǎo tā.', 'Chỉ cần bạn mua cho tôi, tôi sẽ chăm sóc tốt nó.']] }],
    },
    {
      kind: 'examples', label: '关于', title: 'Giới từ 关于',
      intro: '关于 được dùng trước danh từ để giới thiệu về đối tượng mà người nói muốn đề cập đến.',
      groups: [{ label: 'Ví dụ', items: [['我最近看了一些关于中国文化的电影。', 'Wǒ zuìjìn kànle yìxiē guānyú Zhōngguó wénhuà de diànyǐng.', 'Gần đây tôi xem vài bộ phim về văn hóa Trung Quốc.'], ['关于这件事，我们还没有决定呢。', 'Guānyú zhè jiàn shì, wǒmen hái méiyǒu juédìng ne.', 'Về việc này, chúng tôi chưa quyết định.'], ['关于出国学习的事，妈妈已经同意了。', 'Guānyú chūguó xuéxí de shì, māma yǐjīng tóngyì le.', 'Về việc đi du học, mẹ đã đồng ý rồi.'], ['关于这个工作，还有什么问题吗？', 'Guānyú zhège gōngzuò, hái yǒu shénme wèntí ma?', 'Về công việc này, còn vấn đề gì không?']] }],
    },
    {
      kind: 'examples', label: 'Đọc cụm từ', title: 'Đọc to các cụm từ và câu (练习 1)',
      clip: { label: '18-5 · Đọc to các cụm từ và câu', src: A + 'l18-5.mp3' },
      intro: 'Bấm để nghe từng cụm.',
      groups: [{ label: 'Cụm từ', items: [
        ['一只动物', 'yì zhī dòngwù', 'một con vật'], ['喜欢动物', 'xǐhuan dòngwù', 'thích động vật'], ['动物和小孩儿一样，都需要人照顾', 'dòngwù hé xiǎoháir yíyàng, dōu xūyào rén zhàogù', 'động vật và trẻ con đều cần người chăm sóc'],
        ['不同意', 'bù tóngyì', 'không đồng ý'], ['他同意了', 'tā tóngyì le', 'anh ấy đồng ý rồi'], ['你家人同意吗？', 'nǐ jiārén tóngyì ma?', 'người nhà bạn đồng ý không?'],
        ['有机会', 'yǒu jīhuì', 'có cơ hội'], ['工作机会', 'gōngzuò jīhuì', 'cơ hội việc làm'], ['谢谢您给我这个机会', 'xièxie nín gěi wǒ zhège jīhuì', 'cảm ơn bạn đã cho tôi cơ hội này'],
        ['一种文化', 'yì zhǒng wénhuà', 'một nền văn hóa'], ['每种文化都有自己的特点', 'měi zhǒng wénhuà dōu yǒu zìjǐ de tèdiǎn', 'mỗi nền văn hóa đều có đặc điểm riêng'],
        ['认真地学习', 'rènzhēn de xuéxí', 'học một cách chăm chỉ'], ['热情地回答', 'rèqíng de huídá', 'trả lời nhiệt tình'], ['慢慢地习惯', 'mànmàn de xíguàn', 'dần dần quen'],
      ] }],
    },
  ],

  notes: [
    {
      title: 'Cấu trúc 只要……，就……',
      body: '只要 + điều kiện cần thiết, 就 + kết quả. Chủ ngữ có thể trước hoặc sau 只要; chủ ngữ thứ hai phải đặt trước 就: 只要你想去，我就跟你去。',
      say: '只要你想去，我就跟你去',
    },
    {
      title: 'Giới từ 关于',
      body: '关于 + danh từ: giới thiệu đối tượng được nói đến. 关于这件事，我们还没有决定。',
      say: '关于这个工作，还有什么问题吗',
    },
    {
      title: 'Cách thành lập từ mới (旧字新词)',
      body: '动物 + 公园 = 动物园 (vườn thú); 人 + 名字 = 人名 (tên người); 自己 + 相信 = 自信 (tự tin).',
      say: '动物园',
    },
    {
      title: 'Tục ngữ: 见怪不怪',
      body: 'Đã thấy nhiều điều lạ nên không còn cảm thấy lạ nữa. Chữ 怪 đầu là danh từ (điều kỳ quái), chữ 怪 sau là động từ (cảm thấy kỳ lạ). Khi chứng kiến quá nhiều chuyện lạ thì ta quen và không còn thấy lạ.',
      say: '见怪不怪',
    },
  ],

  writeChars: ['向', '嘴', '段', '同', '信', '关', '机', '特'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi (练习 4)',
      items: [
        { q: '朋友为什么要跟周明借钱？', hint: '因为周明的朋友打算买房子。' },
        { q: '小明想买什么？为什么？', hint: '他想买小狗，因为那只小狗很可爱。' },
        { q: '小明的妈妈同意小明的要求了吗？', hint: '没同意。' },
        { q: '学生愿意来这个公司工作吗？为什么？', hint: '愿意，因为他觉得这个公司不但很有名，而且工作环境好。' },
        { q: '经理觉得这个工作怎么样？', hint: '经理觉得这个工作有点儿累，需要经常去外地。' },
        { q: '为什么有的人到了一个新环境会觉得有些奇怪？', hint: '因为不同的国家有不同的文化，每种文化都有自己的特点。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: 你了解中国历史吗？', hint: 'Mẫu: 关于中国历史，我了解得不多。' },
        { q: 'Theo nhóm: nói điều khiến bạn lo lắng, các bạn khuyên bằng 只要……就……', hint: 'Mẫu: 只要你常去锻炼，身体就会慢慢好的。' },
      ],
    },
  ],

  sentences: [
    { parts: ['只要', '你', '想', '去', '我', '就', '跟', '你', '去'], pinyin: 'Zhǐyào nǐ xiǎng qù, wǒ jiù gēn nǐ qù.', vi: 'Chỉ cần bạn muốn đi, tôi sẽ đi cùng.' },
    { parts: ['关于', '这件', '事', '我们', '还', '没有', '决定'], pinyin: 'Guānyú zhè jiàn shì, wǒmen hái méiyǒu juédìng.', vi: 'Về việc này, chúng tôi chưa quyết định.' },
    { parts: ['每', '种', '文化', '都', '有', '自己', '的', '特点'], pinyin: 'Měi zhǒng wénhuà dōu yǒu zìjǐ de tèdiǎn.', vi: 'Mỗi nền văn hóa đều có đặc điểm riêng.' },
    { parts: ['谢谢', '您', '给', '我', '这个', '机会'], pinyin: 'Xièxie nín gěi wǒ zhège jīhuì.', vi: 'Cảm ơn bạn đã cho tôi cơ hội này.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 动物 · B 国家 · C 地 · D 向 · E 而且. Gõ chữ cái A–E.',
      items: [
        { prompt: '你是从哪个（ ）来的？', answer: 'B', gloss: '国家' }, { prompt: '坐火车的时候，我喜欢（ ）外看。', answer: 'D', gloss: '向' },
        { prompt: '你最喜欢什么（ ）？', answer: 'A', gloss: '动物' }, { prompt: '这家饭馆不但菜很好吃，（ ）环境很好。', answer: 'E', gloss: '而且' },
        { prompt: '小孩子喜欢快乐（ ）学习。', answer: 'C', gloss: '地' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 机会 · B 同意 · C 段 · D 关于 · E 奇怪. Gõ chữ cái A–E.',
      items: [
        { prompt: '你打算现在买房子吗？ 过一（ ）时间以后再说吧。', answer: 'C', gloss: '段' }, { prompt: '你怎么要去北京了？ 那儿的工作（ ）比较多。', answer: 'A', gloss: '机会' },
        { prompt: '真（ ），桌子上的词典怎么不见了？ 刚才马可拿走了。', answer: 'E', gloss: '奇怪' }, { prompt: '你给我介绍几个（ ）中国文化的电影吧。 好，没问题。', answer: 'D', gloss: '关于' },
        { prompt: '我觉得这儿的房子挺便宜的，我们在这儿买吧。 我不（ ），虽然很便宜，但是离公司太远了。', answer: 'B', gloss: '同意' },
      ],
    },
    {
      title: 'Giáo trình 注释 · 只要…就… / 关于 (gõ phần còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: '我觉得只要我对别人好，（ ）。', answer: '别人就一定对我好', gloss: '只要…就' },
        { prompt: '你们玩儿吧，只要你们玩儿得高兴，（ ）。', answer: '妈妈就高兴了', gloss: '只要…就' },
        { prompt: '只要你努力学习，（ ）。', answer: '就会得到好成绩', gloss: '只要…就' },
        { prompt: '我想去图书馆借一些（ ）的书。', answer: '关于历史', gloss: '关于' },
        { prompt: '你去问问体育老师吧，他能告诉你一些（ ）的方法。', answer: '关于减肥', gloss: '关于' },
      ],
    },
    {
      title: 'Giáo trình 练习 3 · Hoàn thành đối thoại (gõ phần còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: 'A: 最近这（ ）时间，你总是迟到。', answer: '段', gloss: '段' },
        { prompt: 'A: 你只要早起一点儿，（ ）。', answer: '就不会迟到', gloss: '只要…就' },
        { prompt: 'B: 好，我（ ）我会（ ）习惯的。', answer: '相信慢慢', accept: ['相信 慢慢'], gloss: '相信 / 慢慢' },
        { prompt: 'B: 只要是（ ），我就喜欢。', answer: '中国的', gloss: '只要是' },
        { prompt: 'B: （ ），我们就去爬山。', answer: '只要天气好', gloss: '只要' },
        { prompt: 'A: 这段时间太忙了，忙得没有（ ）锻炼。', answer: '机会', gloss: '机会' },
        { prompt: 'B: 只要东西好吃，（ ）。', answer: '我就可以吃得特别多', gloss: '只要…就' },
        { prompt: 'A: 你吃得这么多，小心会（ ）的。', answer: '找不到男朋友', gloss: '后果' },
      ],
    },
  ],
}
