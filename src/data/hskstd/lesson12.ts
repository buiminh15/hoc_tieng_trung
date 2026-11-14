import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 1, Bài 12: 明天天气怎么样？ (sách trang 102–109).
 * Nghe: 12-1…12-4 (giáo trình). Sách bài tập (trang 87–94, đáp án trang 22–24): nghe chọn âm tiết, nối câu hỏi/đáp 21–25,
 * điền từ 26–30; nghe 11–15 gõ câu trả lời theo văn bản nghe trong file đáp án.
 * Phần tiếng Việt do app tự thêm ở những chỗ sách không có.
 */

const A = '/audio/hsk-std1/'

export const hskStd1Lesson12: Lesson = {
  id: 12,
  title: 'Ngày mai thời tiết thế nào?',
  hanzi: '明天天气怎么样？',
  pinyin: 'Míngtiān tiānqì zěnmeyàng?',
  vi: 'Ngày mai thời tiết thế nào?',
  intro: 'Nói về thời tiết và sức khỏe: 明天天气怎么样？ 你身体怎么样？ Học đại từ nghi vấn 怎么样, câu có vị ngữ là cụm chủ-vị, phó từ mức độ 太, động từ năng nguyện 会 (2); thanh điệu của từ ba âm tiết (từ bắt đầu bằng thanh 1); bộ 女 và 饣; chữ 天, 气, 雨.',

  dialogue: [
    { who: 'A', hanzi: '昨天北京的天气怎么样？', pinyin: 'Zuótiān Běijīng de tiānqì zěnmeyàng?', vi: 'Hôm qua thời tiết ở Bắc Kinh thế nào?', scene: 'Hội thoại 1 · trên đường' },
    { who: 'B', hanzi: '太热了。', pinyin: 'Tài rè le.', vi: 'Nóng lắm.' },
    { who: 'A', hanzi: '明天呢？明天天气怎么样？', pinyin: 'Míngtiān ne? Míngtiān tiānqì zěnmeyàng?', vi: 'Còn ngày mai thì sao? Thời tiết thế nào?' },
    { who: 'B', hanzi: '明天天气很好，不冷不热。', pinyin: 'Míngtiān tiānqì hěn hǎo, bù lěng bú rè.', vi: 'Ngày mai thời tiết rất đẹp, không lạnh cũng không nóng.' },
    { who: 'A', hanzi: '今天会下雨吗？', pinyin: 'Jīntiān huì xià yǔ ma?', vi: 'Hôm nay có mưa không nhỉ?', scene: 'Hội thoại 2 · ở phòng tập thể dục' },
    { who: 'B', hanzi: '今天不会下雨。', pinyin: 'Jīntiān bú huì xià yǔ.', vi: 'Hôm nay không mưa đâu.' },
    { who: 'A', hanzi: '王小姐今天会来吗？', pinyin: 'Wáng xiǎojiě jīntiān huì lái ma?', vi: 'Hôm nay cô Vương có đến không nhỉ?' },
    { who: 'B', hanzi: '不会来，天气太冷了。', pinyin: 'Bú huì lái, tiānqì tài lěng le.', vi: 'Cô ấy không đến đâu, trời lạnh quá mà.' },
    { who: 'A', hanzi: '你身体怎么样？', pinyin: 'Nǐ shēntǐ zěnmeyàng?', vi: 'Sức khỏe của anh thế nào?', scene: 'Hội thoại 3 · trong phòng bệnh' },
    { who: 'B', hanzi: '我身体不太好。天气太热了，不爱吃饭。', pinyin: 'Wǒ shēntǐ bú tài hǎo. Tiānqì tài rè le, bú ài chī fàn.', vi: 'Tôi không được khỏe lắm. Trời nóng quá, tôi chẳng muốn ăn cơm.' },
    { who: 'A', hanzi: '你多吃些水果，多喝水。', pinyin: 'Nǐ duō chī xiē shuǐguǒ, duō hē shuǐ.', vi: 'Anh hãy ăn thêm một ít trái cây và uống thêm nước nhé.' },
    { who: 'B', hanzi: '谢谢你，医生。', pinyin: 'Xièxie nǐ, yīshēng.', vi: 'Cảm ơn bác sĩ.' },
  ],
  dialogueClips: [
    { label: '12-1 · Hội thoại 1: 明天天气怎么样？', src: A + 'l12-1.mp3' },
    { label: '12-2 · Hội thoại 2: 今天会下雨吗？', src: A + 'l12-2.mp3' },
    { label: '12-3 · Hội thoại 3: 你身体怎么样？', src: A + 'l12-3.mp3' },
  ],
  dialogueTip: '<b>怎么样</b> hỏi tình hình, tình trạng. <b>太 …… 了</b>: quá, lắm (太热了); phủ định thì KHÔNG dùng 了: 不太好. <b>会</b> (2) chỉ khả năng xảy ra: 今天会下雨吗？ Chú ý <b>不冷不热</b>: 热 là thanh 4 nên 不 đọc <b>bú</b> (bù lěng bú rè).',
  slowSay: '明天天气怎么样',

  vocab: [
    { hanzi: '天气', parts: '天 (thiên) + 气 (khí)', pinyin: 'tiānqì', pos: 'danh từ', meaning: 'thời tiết', han_viet: 'thiên khí' },
    { hanzi: '怎么样', parts: '怎 (chẩm) + 么 + 样 (dạng)', pinyin: 'zěnmeyàng', pos: 'đại từ', meaning: 'như thế nào (hỏi tính chất, tình trạng, cách thức)', han_viet: '' },
    { hanzi: '太', pinyin: 'tài', pos: 'phó từ', meaning: 'quá, lắm (太……了)', han_viet: 'thái' },
    { hanzi: '热', parts: '执 + 灬 (hỏa)', pinyin: 'rè', pos: 'tính từ', meaning: 'nóng', han_viet: 'nhiệt' },
    { hanzi: '冷', parts: '冫 (băng) + 令 (lệnh)', pinyin: 'lěng', pos: 'tính từ', meaning: 'lạnh', han_viet: 'lãnh' },
    { hanzi: '下雨', parts: '下 (hạ) + 雨 (vũ)', pinyin: 'xià yǔ', pos: 'động từ', meaning: 'có mưa, đổ mưa', han_viet: 'hạ vũ' },
    { hanzi: '小姐', parts: '小 (tiểu) + 姐 (thư)', pinyin: 'xiǎojiě', pos: 'danh từ', meaning: 'cô, cô gái trẻ', han_viet: 'tiểu thư' },
    { hanzi: '来', parts: '木 (mộc) + 䒑', pinyin: 'lái', pos: 'động từ', meaning: 'đến, tới', han_viet: 'lai' },
    { hanzi: '身体', parts: '身 (thân) + 体 (thể)', pinyin: 'shēntǐ', pos: 'danh từ', meaning: 'sức khỏe, cơ thể. Từ ngoài đại cương HSK 1 (dấu * trong sách)', han_viet: 'thân thể' },
    { hanzi: '爱', parts: '爪 + 冖 + 友', pinyin: 'ài', pos: 'động từ', meaning: 'yêu, thích', han_viet: 'ái' },
    { hanzi: '些', parts: '此 (thử) + 二', pinyin: 'xiē', pos: 'lượng từ', meaning: 'một ít, một vài', han_viet: 'ta' },
    { hanzi: '水果', parts: '水 (thủy) + 果 (quả)', pinyin: 'shuǐguǒ', pos: 'danh từ', meaning: 'trái cây', han_viet: 'thủy quả' },
    { hanzi: '水', pinyin: 'shuǐ', pos: 'danh từ', meaning: 'nước', han_viet: 'thủy' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Từ ba âm tiết (1)', title: 'Sự kết hợp thanh điệu của từ có ba âm tiết (1): âm tiết đầu thanh 1',
      clip: { label: '12-4 · Nghe và đọc theo (từ ba âm tiết)', src: A + 'l12-4.mp3' },
      intro: 'Từ ba âm tiết bắt đầu bằng thanh 1, rồi lần lượt kết hợp với các thanh ở hai âm tiết sau. Bảng chia thành các nhóm 1+1+x, 1+2+x, 1+3+x, 1+4+x.',
      groups: [
        { label: '1 + 1 + (1/2/3/4)', items: [['星期一', 'xīngqī yī', 'thứ hai · 1+1+1'], ['冰激凌', 'bīngjīlíng', 'kem · 1+1+2'], ['星期五', 'xīngqī wǔ', 'thứ sáu · 1+1+3'], ['星期六', 'xīngqī liù', 'thứ bảy · 1+1+4']] },
        { label: '1 + 2 + (1/2/3/4)', items: [['清洁工', 'qīngjiégōng', 'nhân viên vệ sinh · 1+2+1'], ['捉迷藏', 'zhuōmícáng', 'trò chơi trốn tìm · 1+2+2'], ['吃苹果', 'chī píngguǒ', 'ăn táo · 1+2+3'], ['加拿大', 'Jiānádà', 'Canada · 1+2+4']] },
        { label: '1 + 3 + (1/2/3/4)', items: [['高脚杯', 'gāojiǎobēi', 'ly có chân · 1+3+1'], ['堆雪人', 'duī xuěrén', 'đắp người tuyết · 1+3+2'], ['花雨伞', 'huā yǔsǎn', 'dù che mưa nhiều màu · 1+3+3'], ['吃米饭', 'chī mǐfàn', 'ăn cơm · 1+3+4']] },
        { label: '1 + 4 + (1/2/3/4)', items: [['哈密瓜', 'hāmìguā', 'dưa vàng Hami · 1+4+1'], ['机器人', 'jīqìrén', 'người máy · 1+4+2'], ['拨浪鼓', 'bōlànggǔ', 'trống lắc · 1+4+3'], ['医务室', 'yīwùshì', 'phòng y tế · 1+4+4']] },
      ],
    },
    {
      kind: 'examples', label: 'Bộ 女 và 饣', title: 'Các bộ của chữ Hán: 女 và 饣',
      intro: 'Bộ 女 thường liên quan đến phụ nữ. Bộ 饣 thường liên quan đến thức ăn.',
      groups: [
        { label: 'Bộ 女 (phụ nữ)', items: [['姐', 'jiě', 'chị'], ['妈', 'mā', 'mẹ']] },
        { label: 'Bộ 饣 (thức ăn)', items: [['饭', 'fàn', 'cơm'], ['饮', 'yǐn', 'uống']] },
      ],
    },
  ],

  notes: [
    {
      title: 'Đại từ nghi vấn 怎么样',
      body: '怎么样 dùng để hỏi tình hình hoặc tình trạng. Ví dụ: 你的汉语怎么样？ 你妈妈身体怎么样？ 明天天气怎么样？',
      say: '明天天气怎么样',
    },
    {
      title: 'Câu có vị ngữ là cụm chủ-vị',
      body: 'Vị ngữ của loại câu này là một cụm từ có cấu trúc chủ-vị. Cấu trúc: chủ ngữ của cả câu + (chủ ngữ + vị ngữ). Chủ ngữ trong cụm chủ-vị thường là một bộ phận thuộc chủ ngữ của cả câu hoặc có liên quan đến nó. Ví dụ: 我身体不太好。 明天天气很好。 你身体怎么样？',
      say: '我身体不太好',
    },
    {
      title: 'Phó từ chỉ mức độ 太',
      body: '太 diễn tả mức độ cao hơn thông thường. Khi câu có 太 ở thể khẳng định, người ta thường dùng 了 ở cuối câu (太……了); khi ở thể phủ định, người ta không dùng 了. Ví dụ: 太热了。 天气太冷了。 我身体不太好。',
      say: '太热了',
    },
    {
      title: 'Động từ năng nguyện 会 (2)',
      body: '会 còn diễn tả một tình huống có khả năng xảy ra. Ví dụ: 爸爸八点前会回家吗？ 会。 明天她会来吗？ 她会来。 今天会下雨吗？ 今天不会下雨。',
      say: '今天会下雨吗',
    },
    {
      title: 'Thanh điệu của từ ba âm tiết',
      body: 'Từ ba âm tiết bắt đầu bằng thanh 1 có 16 tổ hợp (1+1+1 … 1+4+4), tùy thanh của hai âm tiết sau. Luyện đọc theo nhóm để quen.',
      say: '星期五',
    },
    {
      title: 'Bộ 女 và 饣',
      body: 'Bộ 女 liên quan đến phụ nữ: 姐, 妈. Bộ 饣 liên quan đến thức ăn: 饭, 饮.',
      say: '饭',
    },
  ],

  writeChars: ['天', '气', '雨', '水', '热', '冷'],

  drills: [
    {
      title: 'Ba chữ đơn mới (认识独体字)',
      hint: 'Sách trang 106–107: nguồn gốc hình chữ. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '天', p: 'tiān', m: 'gốc là đỉnh đầu; sau chỉ bầu trời, trái nghĩa 地 (mặt đất)' },
        { h: '气', p: 'qì', m: 'hình gần giống chữ 三; khí là vật chất không có hình dạng cố định' },
        { h: '雨', p: 'yǔ', m: 'hình những giọt nước từ trên trời rơi xuống' },
      ],
    },
    {
      title: 'Dùng 太……了 để nhận xét (运用 1, sách trang 108)',
      hint: 'Mẫu: 她的汉语怎么样？ 不太好 / 太好了。 Bấm để nghe.',
      items: [
        { h: '北京的天气太冷了 / 太热了。', p: 'Běijīng de tiānqì tài lěng le / tài rè le.', m: 'Thời tiết Bắc Kinh lạnh quá / nóng quá.' },
        { h: '中国菜太好吃了。', p: 'Zhōngguó cài tài hǎochī le.', m: 'Món ăn Trung Quốc ngon quá.' },
        { h: '那个电影太好看了。', p: 'Nàge diànyǐng tài hǎokàn le.', m: 'Bộ phim đó hay quá.' },
        { h: '王老师写的汉字太好了。', p: 'Wáng lǎoshī xiě de Hànzì tài hǎo le.', m: 'Chữ Hán thầy Vương viết đẹp quá.' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 105)',
      items: [
        { q: '昨天北京的天气怎么样？ (Zuótiān Běijīng de tiānqì zěnmeyàng?)', hint: '昨天北京的天气太热了。' },
        { q: '明天天气怎么样？ (Míngtiān tiānqì zěnmeyàng?)', hint: '明天天气很好，不冷不热。' },
        { q: '今天会下雨吗？ (Jīntiān huì xià yǔ ma?)', hint: '今天不会下雨。' },
        { q: '王小姐会来吗？ (Wáng xiǎojiě huì lái ma?)', hint: '她不会来，天气太冷了。' },
        { q: '他的身体怎么样？ (Tā de shēntǐ zěnmeyàng?)', hint: '他身体不太好，不爱吃饭。' },
      ],
    },
    {
      title: 'Hoạt động nhóm: hỏi thời tiết (运用 2, sách trang 108)',
      items: [
        { q: 'A: 昨天北京天气好吗？  B: 昨天很好。不冷不热。', hint: 'Hỏi nhau thời tiết các thành phố mấy ngày gần đây và ghi lại.' },
        { q: 'A: 明天会下雨吗？  B: 明天不会下雨。', hint: 'Hỏi và trả lời dự báo thời tiết ngày mai.' },
      ],
    },
  ],

  sentences: [
    { parts: ['昨天', '北京', '的', '天气', '怎么样'], pinyin: 'Zuótiān Běijīng de tiānqì zěnmeyàng?', vi: 'Hôm qua thời tiết Bắc Kinh thế nào?' },
    { parts: ['明天', '天气', '很', '好', '，', '不', '冷', '不', '热'], pinyin: 'Míngtiān tiānqì hěn hǎo, bù lěng bú rè.', vi: 'Ngày mai thời tiết rất đẹp, không lạnh không nóng.' },
    { parts: ['今天', '会', '下雨', '吗'], pinyin: 'Jīntiān huì xià yǔ ma?', vi: 'Hôm nay có mưa không?' },
    { parts: ['今天', '不', '会', '下雨'], pinyin: 'Jīntiān bú huì xià yǔ.', vi: 'Hôm nay không mưa đâu.' },
    { parts: ['你', '身体', '怎么样'], pinyin: 'Nǐ shēntǐ zěnmeyàng?', vi: 'Sức khỏe của anh thế nào?' },
    { parts: ['我', '身体', '不', '太', '好'], pinyin: 'Wǒ shēntǐ bú tài hǎo.', vi: 'Tôi không được khỏe lắm.' },
    { parts: ['你', '多', '吃', '些', '水果', '，', '多', '喝', '水'], pinyin: 'Nǐ duō chī xiē shuǐguǒ, duō hē shuǐ.', vi: 'Anh hãy ăn thêm trái cây và uống thêm nước.' },
  ],

  // ───────── Sách bài tập, bài 12 (đáp án: "Đáp án sách bài tập", trang 22–24) ─────────
  dictations: [
    {
      title: 'Sách bài tập · Nghe, gõ từ ba âm tiết (ngữ âm, câu 6–10)',
      hint: 'Nghe đoạn ghi âm (12-2), gõ lại pinyin của từ ba âm tiết bạn nghe được trong câu (có thể không cần dấu). Câu 6: Wǒ měi tiān xiàwǔ shàng shūfǎkè. 7: Māma xià ge yuè qù Jiānádà. 8: Jīntiān shì xīngqīwǔ, míngtiān shì zhōumò. 9: Wǒ zuì xǐhuan tiào bālěiwǔ. 10: Tā méi qù guo Xībānyá.',
      clip: { label: '12-2 · Sách bài tập, ngữ âm phần 2', src: A + 'w12-2.mp3' },
      items: [
        { prompt: 'Câu 6', answer: 'shūfǎkè', gloss: '书法课' }, { prompt: 'Câu 7', answer: 'Jiānádà', gloss: '加拿大' }, { prompt: 'Câu 8', answer: 'xīngqīwǔ', gloss: '星期五' },
        { prompt: 'Câu 9', answer: 'bālěiwǔ', gloss: '芭蕾舞' }, { prompt: 'Câu 10', answer: 'Xībānyá', gloss: '西班牙' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, trả lời câu hỏi (câu 11–15)',
      hint: 'Nghe đoạn ghi âm (12-1, phần 3) rồi gõ câu trả lời ngắn bằng chữ Hán. Câu hỏi: 11 星期五天气怎么样？ 12 今天天气怎么样？ 13 明天什么时候会下雨？ 14 王小姐什么时候会来？ 15 他/她爸爸这个星期身体怎么样？',
      clip: { label: '12-1 · Sách bài tập, nghe phần 3 (câu 11–15)', src: A + 'w12-1.mp3' },
      items: [
        { prompt: 'Câu 11 · 星期五天气怎么样？', answer: '很好', accept: ['天气很好', '好'], gloss: '星期五天气很好，星期六会下雨。' },
        { prompt: 'Câu 12 · 今天天气怎么样？', answer: '太冷了', accept: ['很冷', '冷'], gloss: '今天太冷了，我不想去了。' },
        { prompt: 'Câu 13 · 明天什么时候会下雨？', answer: '下午', accept: ['下午会下雨'], gloss: '明天上午不会下雨，下午会下雨。' },
        { prompt: 'Câu 14 · 王小姐什么时候会来？', answer: '八点前', accept: ['8点前', '八点'], gloss: '王小姐八点前会来。' },
        { prompt: 'Câu 15 · 爸爸这个星期身体怎么样？', answer: '不太好', accept: ['不好'], gloss: '我爸爸这个星期身体不太好。' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ vào chỗ trống (câu 26–30)',
      hint: 'A 太……了 · B 多 · C 爱 · D 名字 · E 些 · F 怎么样. Gõ chữ cái A–F.',
      items: [
        { prompt: '北京的天气（ ）？', answer: 'F', gloss: '怎么样' }, { prompt: '你（ ）喝水，天气太热了。', answer: 'B', gloss: '多' },
        { prompt: '他们不想住这儿，这儿（ ）冷（ ）。', answer: 'A', gloss: '太……了' }, { prompt: '这个星期我身体不太好，不（ ）吃饭。', answer: 'C', gloss: '爱' },
        { prompt: '天气很好，你多吃（ ）水果。', answer: 'E', gloss: '些' },
      ],
    },
  ],
}
