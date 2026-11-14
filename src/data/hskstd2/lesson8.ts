import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 2, Bài 8: 让我想想再告诉你 (sách trang 57–64).
 * Sách bản Trung–Anh; phần tiếng Việt do app dịch.
 * Nghe: 08-1…08-5. Sách bài tập (trang 77–84, đáp án trang 15–17).
 */

const A = '/audio/hsk-std2/'

export const hskStd2Lesson8: Lesson = {
  id: 8,
  title: 'Để tôi nghĩ đã rồi nói với bạn',
  hanzi: '让我想想再告诉你',
  pinyin: 'Ràng wǒ xiǎngxiang zài gàosu nǐ',
  vi: 'Để tôi nghĩ đã rồi nói với bạn',
  intro: 'Rủ rê, đề nghị và nhờ việc: 我们下午去看电影，好吗？ 让我想想再告诉你。 Học câu hỏi ……，好吗, phó từ 再, câu kiêm ngữ (请/让/叫), lặp động từ; ngữ điệu câu trần thuật; bộ 又 và 巾.',

  dialogue: [
    { who: 'A', hanzi: '我们下午去看电影，好吗？', pinyin: 'Wǒmen xiàwǔ qù kàn diànyǐng, hǎo ma?', vi: 'Chiều nay mình đi xem phim nhé, được không?', scene: 'Hội thoại 1 · trong lớp học' },
    { who: 'B', hanzi: '今天下午我没有时间，明天下午再去吧。', pinyin: 'Jīntiān xiàwǔ wǒ méiyǒu shíjiān, míngtiān xiàwǔ zài qù ba.', vi: 'Chiều nay mình không rảnh, chiều mai hãy đi.' },
    { who: 'A', hanzi: '你想看什么电影？', pinyin: 'Nǐ xiǎng kàn shénme diànyǐng?', vi: 'Bạn muốn xem phim gì?' },
    { who: 'B', hanzi: '让我想想再告诉你。', pinyin: 'Ràng wǒ xiǎngxiang zài gàosu nǐ.', vi: 'Để mình nghĩ đã rồi nói với bạn.' },
    { who: 'A', hanzi: '外边天气很好，我们出去运动运动吧！', pinyin: 'Wàibian tiānqì hěn hǎo, wǒmen chūqu yùndòng yùndòng ba!', vi: 'Bên ngoài trời đẹp lắm, mình ra ngoài vận động chút đi!', scene: 'Hội thoại 2 · ở ký túc xá' },
    { who: 'B', hanzi: '你等等我，好吗？王老师让我给大卫打个电话。', pinyin: 'Nǐ děngdeng wǒ, hǎo ma? Wáng lǎoshī ràng wǒ gěi Dàwèi dǎ ge diànhuà.', vi: 'Bạn đợi mình chút được không? Thầy Vương bảo mình gọi điện cho David.' },
    { who: 'A', hanzi: '回来再打吧。找大卫有什么事情吗？', pinyin: 'Huílai zài dǎ ba. Zhǎo Dàwèi yǒu shénme shìqing ma?', vi: 'Về rồi hãy gọi. Tìm David có việc gì à?' },
    { who: 'B', hanzi: '听说大卫病了，我想找时间去看看他。', pinyin: 'Tīngshuō Dàwèi bìng le, wǒ xiǎng zhǎo shíjiān qù kànkan tā.', vi: 'Nghe nói David ốm, mình muốn tìm lúc đi thăm cậu ấy.' },
    { who: 'A', hanzi: '服务员，我房间的门打不开了。', pinyin: 'Fúwùyuán, wǒ fángjiān de mén dǎ bu kāi le.', vi: 'Anh phục vụ ơi, cửa phòng tôi không mở được.', scene: 'Hội thoại 3 · ở quầy lễ tân khách sạn' },
    { who: 'B', hanzi: '您住哪个房间？', pinyin: 'Nín zhù nǎge fángjiān?', vi: 'Ông ở phòng nào ạ?' },
    { who: 'A', hanzi: '317。', pinyin: 'Sān yāo qī.', vi: 'Phòng 317.' },
    { who: 'B', hanzi: '好的，我叫人去看看。', pinyin: 'Hǎo de, wǒ jiào rén qù kànkan.', vi: 'Vâng, tôi sẽ cho người đi xem.' },
    { who: 'A', hanzi: '你看看这几件衣服怎么样。', pinyin: 'Nǐ kànkan zhè jǐ jiàn yīfu zěnmeyàng.', vi: 'Chị xem mấy bộ quần áo này thế nào.', scene: 'Hội thoại 4 · ở cửa hàng' },
    { who: 'B', hanzi: '这件白的有点儿长，那件黑的有点儿贵。', pinyin: 'Zhè jiàn bái de yǒudiǎnr cháng, nà jiàn hēi de yǒudiǎnr guì.', vi: 'Cái trắng này hơi dài, cái đen kia hơi đắt.' },
    { who: 'A', hanzi: '这件红的呢？这是今天新来的。', pinyin: 'Zhè jiàn hóng de ne? Zhè shì jīntiān xīn lái de.', vi: 'Còn cái đỏ này thì sao? Hàng mới về hôm nay đấy.' },
    { who: 'B', hanzi: '让我再看看。', pinyin: 'Ràng wǒ zài kànkan.', vi: 'Để tôi xem thêm đã.' },
  ],
  dialogueClips: [
    { label: '08-1 · Hội thoại 1: 让我想想再告诉你', src: A + 'l08-1.mp3' },
    { label: '08-2 · Hội thoại 2: 你等等我，好吗？', src: A + 'l08-2.mp3' },
    { label: '08-3 · Hội thoại 3: 我叫人去看看', src: A + 'l08-3.mp3' },
    { label: '08-4 · Hội thoại 4: 让我再看看', src: A + 'l08-4.mp3' },
  ],
  dialogueTip: '<b>……，好吗？</b> hỏi ý kiến người khác. <b>再</b>: lại, nữa, hoặc "rồi mới…" (明天下午再去吧). <b>请 / 让 / 叫 + người + làm gì</b>: mời / để / bảo ai làm gì (câu kiêm ngữ). Lặp động từ <b>AA, A一A, ABAB</b> làm câu nhẹ nhàng: 想想, 看一看, 运动运动.',
  slowSay: '让我想想再告诉你',

  vocab: [
    { hanzi: '再', pinyin: 'zài', pos: 'phó từ', meaning: 'lại, nữa; rồi mới', han_viet: 'tái' },
    { hanzi: '让', parts: '讠 + 上', pinyin: 'ràng', pos: 'động từ', meaning: 'để, cho phép, bảo', han_viet: 'nhượng' },
    { hanzi: '告诉', parts: '告 (cáo) + 诉 (tố)', pinyin: 'gàosu', pos: 'động từ', meaning: 'nói cho biết', han_viet: 'cáo tố' },
    { hanzi: '等', parts: '⺮ + 寺', pinyin: 'děng', pos: 'động từ', meaning: 'đợi, chờ', han_viet: 'đẳng' },
    { hanzi: '找', parts: '扌 + 戈', pinyin: 'zhǎo', pos: 'động từ', meaning: 'tìm', han_viet: 'trảo' },
    { hanzi: '事情', parts: '事 (sự) + 情 (tình)', pinyin: 'shìqing', pos: 'danh từ', meaning: 'việc, sự việc', han_viet: 'sự tình' },
    { hanzi: '服务员', parts: '服 (phục) + 务 (vụ) + 员 (viên)', pinyin: 'fúwùyuán', pos: 'danh từ', meaning: 'nhân viên phục vụ', han_viet: 'phục vụ viên' },
    { hanzi: '白', pinyin: 'bái', pos: 'tính từ', meaning: 'trắng', han_viet: 'bạch' },
    { hanzi: '黑', pinyin: 'hēi', pos: 'tính từ', meaning: 'đen', han_viet: 'hắc' },
    { hanzi: '贵', parts: '中 + 一 + 贝', pinyin: 'guì', pos: 'tính từ', meaning: 'đắt', han_viet: 'quý' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Lặp động từ', title: 'Lặp động từ (动词的重叠)',
      intro: 'Dạng lặp của động từ diễn tả thời gian ngắn, số lượng ít, mức độ nhẹ hoặc ý làm thử; ngữ khí nhẹ nhàng, tùy ý, dùng nhiều trong khẩu ngữ. Động từ một âm tiết: A → AA hoặc A一A. Động từ hai âm tiết: AB → ABAB.',
      groups: [
        { label: 'Động từ một âm tiết: AA · A一A', items: [['说说', 'shuōshuo', 'nói thử / 说一说'], ['听听', 'tīngting', 'nghe thử / 听一听'], ['看看', 'kànkan', 'xem thử / 看一看']] },
        { label: 'Động từ hai âm tiết: ABAB', items: [['学习学习', 'xuéxí xuéxí', 'học một chút'], ['准备准备', 'zhǔnbèi zhǔnbèi', 'chuẩn bị một chút'], ['运动运动', 'yùndòng yùndòng', 'vận động một chút']] },
      ],
    },
    {
      kind: 'examples', label: 'Ngữ điệu trần thuật', title: 'Ngữ điệu câu trần thuật',
      clip: { label: '08-5 · Nghe và đọc theo (ngữ điệu câu trần thuật)', src: A + 'l08-5.mp3' },
      intro: 'Câu trần thuật tiếng Hán thường đọc xuống giọng ở cuối câu.',
      groups: [{ label: 'Xuống giọng ↘', items: [['我学习汉语。', 'Wǒ xuéxí Hànyǔ. ↘', 'Tôi học tiếng Hán.'], ['他是我的老师。', 'Tā shì wǒ de lǎoshī. ↘', 'Anh ấy là thầy giáo của tôi.'], ['外边天气很好。', 'Wàibian tiānqì hěn hǎo. ↘', 'Bên ngoài trời rất đẹp.']] }],
    },
    {
      kind: 'examples', label: 'Bộ thủ', title: 'Chữ Hán: bộ 又 và 巾',
      intro: 'Bộ 又 có khá nhiều nghĩa; bộ 巾 (cân) phần lớn liên quan đến vải vóc, hàng dệt.',
      groups: [{ label: 'Bộ 又 và 巾', items: [['欢', 'huān', 'vui (bộ 又)'], ['对', 'duì', 'đúng (bộ 又)'], ['帮', 'bāng', 'giúp (bộ 巾)'], ['帽', 'mào', 'mũ (bộ 巾)']] }],
    },
  ],

  notes: [
    {
      title: 'Câu hỏi ……，好吗？',
      body: 'Thường dùng để hỏi ý kiến, quan điểm của người khác. Ví dụ: 我们一起去吃饭，好吗？ 你明天下午给我打电话，好吗？ 我们下午去看电影，好吗？',
      say: '我们下午去看电影，好吗',
    },
    {
      title: 'Phó từ 再',
      body: '再 chỉ một hành động hay trạng thái lặp lại hoặc tiếp tục, cũng có thể chỉ hành động sẽ xảy ra trong một điều kiện nào đó. Ví dụ: 你再看看这本书吧。 你（明天）再给我打电话吧。 （你）（让我想想）再告诉你。',
      say: '让我想想再告诉你',
    },
    {
      title: 'Câu kiêm ngữ',
      body: 'Vị ngữ gồm hai cụm động từ, tân ngữ của động từ trước là chủ ngữ của động từ sau. Động từ trước thường là 请, 让, 叫. Ví dụ: 我请你吃饭。 你让我再想想。 我叫人去看看。',
      say: '我叫人去看看',
    },
    {
      title: 'Lặp động từ',
      body: 'AA / A一A (说说, 看一看) và ABAB (学习学习, 运动运动): diễn tả làm ngắn, làm thử, ngữ khí thoải mái, hay dùng trong khẩu ngữ.',
      say: '运动运动',
    },
  ],

  writeChars: ['再', '让', '告', '诉', '等', '找'],

  drills: [
    {
      title: 'Ghi lại động từ lặp được (运用 1, sách trang 63)',
      hint: 'Mẫu: 看看 / 看一看, 读读 / 读一读. Bấm để nghe.',
      items: [
        { h: '看看', p: 'kànkan', m: '看一看' }, { h: '读读', p: 'dúdu', m: '读一读' }, { h: '想想', p: 'xiǎngxiang', m: '想一想' },
        { h: '等等', p: 'děngdeng', m: '等一等' }, { h: '休息休息', p: 'xiūxi xiūxi', m: 'nghỉ một chút' }, { h: '介绍介绍', p: 'jièshào jièshào', m: 'giới thiệu một chút' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 61)',
      items: [
        { q: '他们为什么今天下午不去看电影？', hint: '因为今天下午他没有时间。' },
        { q: '王老师为什么让他给大卫打电话？', hint: '因为听说大卫病了。' },
        { q: '大卫怎么了？', hint: '大卫病了。' },
        { q: '她为什么给服务员打电话？', hint: '因为她房间的门打不开了。' },
        { q: '她为什么不喜欢那件黑的？', hint: '因为那件黑的有点儿贵。' },
      ],
    },
  ],

  sentences: [
    { parts: ['我们', '下午', '去', '看', '电影', '，', '好', '吗'], pinyin: 'Wǒmen xiàwǔ qù kàn diànyǐng, hǎo ma?', vi: 'Chiều nay mình đi xem phim nhé?' },
    { parts: ['明天', '下午', '再', '去', '吧'], pinyin: 'Míngtiān xiàwǔ zài qù ba.', vi: 'Chiều mai hãy đi.' },
    { parts: ['让', '我', '想想', '再', '告诉', '你'], pinyin: 'Ràng wǒ xiǎngxiang zài gàosu nǐ.', vi: 'Để mình nghĩ đã rồi nói với bạn.' },
    { parts: ['王', '老师', '让', '我', '给', '大卫', '打', '个', '电话'], pinyin: 'Wáng lǎoshī ràng wǒ gěi Dàwèi dǎ ge diànhuà.', vi: 'Thầy Vương bảo mình gọi điện cho David.' },
    { parts: ['我', '叫', '人', '去', '看看'], pinyin: 'Wǒ jiào rén qù kànkan.', vi: 'Tôi sẽ cho người đi xem.' },
    { parts: ['这', '件', '白', '的', '有点儿', '长'], pinyin: 'Zhè jiàn bái de yǒudiǎnr cháng.', vi: 'Cái trắng này hơi dài.' },
  ],

  dictations: [
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 11–15)',
      hint: 'Nghe đoạn ghi âm (08-1, phần 3), chọn A, B hoặc C. Câu 11: A 手机 · B 手表 · C 自行车. Câu 12: A 想唱歌 · B 想看电影 · C 想看电视. Câu 13: A 踢足球 · B 跑步 · C 打篮球. Câu 14: A 老师 · B 医生 · C 服务员. Câu 15: A 都不好 · B 黑的 · C 白的.',
      clip: { label: '08-1 · Sách bài tập, phần nghe', src: A + 'w08-1.mp3' },
      items: [
        { prompt: 'Câu 11', answer: 'A', gloss: '手机' }, { prompt: 'Câu 12', answer: 'B', gloss: '想看电影' },
        { prompt: 'Câu 13', answer: 'C', gloss: '打篮球' }, { prompt: 'Câu 14', answer: 'C', gloss: '服务员' },
        { prompt: 'Câu 15', answer: 'A', gloss: '都不好' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ (câu 21–25)',
      hint: 'A 等 · B 让 · C 再 · D 事情 · E 贵 · F 找. Gõ chữ cái A–F.',
      items: [
        { prompt: '我这个星期太忙了，下个星期再（ ）时间一起去看电影吧。', answer: 'F', gloss: '找' }, { prompt: '张老师在上课呢，他让你（ ）一会儿。', answer: 'A', gloss: '等' },
        { prompt: '王老师（ ）我告诉你，明天他有事，不能来上课了。', answer: 'B', gloss: '让' }, { prompt: '大卫今天不在家，你明天（ ）给他打电话吧。', answer: 'C', gloss: '再' },
        { prompt: '请问，你找服务员有什么（ ）？', answer: 'D', gloss: '事情' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, đúng hay sai (câu 26–30)',
      hint: 'Đọc câu cho sẵn rồi xét câu có dấu * đúng (gõ D) hay sai (gõ S).',
      items: [
        { prompt: '王老师让我给大卫打个电话。* 王老师给大卫打电话。', answer: 'S', gloss: 'Sai' },
        { prompt: '今天下午我没有时间，明天再去看电影吧。* 今天不能去看电影。', answer: 'D', gloss: 'Đúng' },
        { prompt: '这件白的有点儿长，那件黑的有点儿贵。* 两件衣服，我都不喜欢。', answer: 'D', gloss: 'Đúng' },
        { prompt: '今天天气不太好，等天气好的时候再去给你买自行车吧。* 外面正在下雨。', answer: 'S', gloss: 'Sai' },
        { prompt: '你看，这是我们家的猫，眼睛漂亮吧？是我姐姐送给我的。* 猫不是我家的。', answer: 'S', gloss: 'Sai' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu (câu 31–35)',
      hint: 'A 这件白的有点儿长，这件黑的我也不太喜欢，我再看看吧。 B 服务员，我想要点儿热水。 C 明天要考试，考试后再去看吧。 D 让我想想再告诉你。 E 他在哪儿呢？你看见他了吗？ F 听说他生病了，我想去医院看看他。 Gõ chữ cái A–F.',
      items: [
        { prompt: '你想看什么电影？', answer: 'D', gloss: '让我想想再告诉你。' }, { prompt: '你找大卫有什么事情吗？', answer: 'F', gloss: '听说他生病了……' },
        { prompt: '这些都是今天新来的衣服。', answer: 'A', gloss: '……我再看看吧。' }, { prompt: '好的，请问您住哪个房间？', answer: 'B', gloss: '服务员，我想要点儿热水。' },
        { prompt: '晚上去看电影，好吗？', answer: 'C', gloss: '明天要考试，考试后再去看吧。' },
      ],
    },
  ],
}
