import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 1, Bài 11: 现在几点？ (sách trang 92–101).
 * Nghe: 11-1…11-4 (giáo trình). Sách bài tập (trang 79–86, đáp án trang 20–22): nghe chọn âm tiết, nối câu hỏi/đáp 21–25,
 * điền từ 26–30; nghe 11–15 gõ câu trả lời theo văn bản nghe trong file đáp án.
 * Phần tiếng Việt do app tự thêm ở những chỗ sách không có.
 */

const A = '/audio/hsk-std1/'

export const hskStd1Lesson11: Lesson = {
  id: 11,
  title: 'Bây giờ là mấy giờ?',
  hanzi: '现在几点？',
  pinyin: 'Xiànzài jǐ diǎn?',
  vi: 'Bây giờ là mấy giờ?',
  intro: 'Nói về giờ giấc: 现在几点？ 什么时候回家？ Học cách nói giờ (点, 分), từ chỉ thời gian làm trạng ngữ, danh từ 前; chức năng phân biệt nghĩa của thanh nhẹ; bộ 阝 và 亻; chữ 午 và 电.',

  dialogue: [
    { who: 'A', hanzi: '现在几点？', pinyin: 'Xiànzài jǐ diǎn?', vi: 'Bây giờ là mấy giờ rồi?', scene: 'Hội thoại 1 · ở thư viện' },
    { who: 'B', hanzi: '现在十点十分。', pinyin: 'Xiànzài shí diǎn shí fēn.', vi: '10 giờ 10 phút.' },
    { who: 'A', hanzi: '中午几点吃饭？', pinyin: 'Zhōngwǔ jǐ diǎn chī fàn?', vi: 'Mấy giờ thì ăn cơm trưa vậy?' },
    { who: 'B', hanzi: '十二点吃饭。', pinyin: "Shí'èr diǎn chī fàn.", vi: '12 giờ.' },
    { who: 'A', hanzi: '爸爸什么时候回家？', pinyin: 'Bàba shénme shíhou huí jiā?', vi: 'Chừng nào cha mới về đến nhà?', scene: 'Hội thoại 2 · ở nhà' },
    { who: 'B', hanzi: '下午五点。', pinyin: 'Xiàwǔ wǔ diǎn.', vi: '5 giờ chiều.' },
    { who: 'A', hanzi: '我们什么时候去看电影？', pinyin: 'Wǒmen shénme shíhou qù kàn diànyǐng?', vi: 'Khi nào chúng ta đi xem phim?' },
    { who: 'B', hanzi: '六点三十分。', pinyin: 'Liù diǎn sānshí fēn.', vi: '6 giờ rưỡi.' },
    { who: 'A', hanzi: '我星期一去北京。', pinyin: 'Wǒ xīngqī yī qù Běijīng.', vi: 'Thứ hai anh sẽ đi Bắc Kinh.', scene: 'Hội thoại 3 · ở nhà' },
    { who: 'B', hanzi: '你想在北京住几天？', pinyin: 'Nǐ xiǎng zài Běijīng zhù jǐ tiān?', vi: 'Anh định ở Bắc Kinh mấy ngày?' },
    { who: 'A', hanzi: '住三天。', pinyin: 'Zhù sān tiān.', vi: 'Ba ngày.' },
    { who: 'B', hanzi: '星期五前能回家吗？', pinyin: 'Xīngqī wǔ qián néng huí jiā ma?', vi: 'Anh có thể về nhà trước thứ sáu được không?' },
    { who: 'A', hanzi: '能。', pinyin: 'Néng.', vi: 'Chắc là được.' },
  ],
  dialogueClips: [
    { label: '11-1 · Hội thoại 1: 现在几点？', src: A + 'l11-1.mp3' },
    { label: '11-2 · Hội thoại 2: 爸爸什么时候回家？', src: A + 'l11-2.mp3' },
    { label: '11-3 · Hội thoại 3: 我星期一去北京。', src: A + 'l11-3.mp3' },
  ],
  dialogueTip: 'Giờ chẵn: <b>số + 点</b>. Có phút: <b>…… 点 …… 分</b>. Nói <b>2 giờ</b> là <b>两点</b>, KHÔNG nói 二点. Thời gian đứng sau chủ ngữ hoặc trước chủ ngữ: 爸爸五点回家 / 五点爸爸回家. <b>前</b> chỉ khoảng thời gian trước một mốc: 星期五前.',
  slowSay: '现在几点',

  vocab: [
    { hanzi: '现在', parts: '现 = 王 + 见; 在', pinyin: 'xiànzài', pos: 'danh từ', meaning: 'bây giờ, hiện tại', han_viet: 'hiện tại' },
    { hanzi: '点', parts: '占 (chiếm) + 灬 (hỏa)', pinyin: 'diǎn', pos: 'lượng từ', meaning: 'giờ', han_viet: 'điểm' },
    { hanzi: '分', parts: '八 (bát) + 刀 (đao)', pinyin: 'fēn', pos: 'lượng từ', meaning: 'phút', han_viet: 'phân' },
    { hanzi: '中午', parts: '中 (trung) + 午 (ngọ)', pinyin: 'zhōngwǔ', pos: 'danh từ', meaning: 'buổi trưa', han_viet: 'trung ngọ' },
    { hanzi: '吃饭', parts: '吃 (ngật) + 饭 (phạn)', pinyin: 'chī fàn', pos: 'động từ', meaning: 'ăn cơm', han_viet: '' },
    { hanzi: '时候', parts: '时 = 日 + 寸; 候 (hậu)', pinyin: 'shíhou', pos: 'danh từ', meaning: 'lúc, khi', han_viet: 'thời hậu' },
    { hanzi: '回', pinyin: 'huí', pos: 'động từ', meaning: 'về, trở về', han_viet: 'hồi' },
    { hanzi: '我们', pinyin: 'wǒmen', pos: 'đại từ', meaning: 'chúng ta, chúng tôi', han_viet: 'ngã môn' },
    { hanzi: '电影', parts: '电 (điện) + 影 (ảnh)', pinyin: 'diànyǐng', pos: 'danh từ', meaning: 'phim', han_viet: 'điện ảnh' },
    { hanzi: '住', parts: '亻 (nhân) + 主 (chủ)', pinyin: 'zhù', pos: 'động từ', meaning: 'ở, cư trú', han_viet: 'trú' },
    { hanzi: '前', parts: '䒑 + 月 + 刂', pinyin: 'qián', pos: 'danh từ', meaning: 'trước', han_viet: 'tiền' },
    { hanzi: '北京', pinyin: 'Běijīng', pos: 'danh từ riêng', meaning: 'Bắc Kinh (thủ đô Trung Quốc)', han_viet: 'Bắc Kinh' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Cách nói giờ', title: 'Cách diễn đạt thời gian',
      intro: 'Để nói giờ, dùng 点 và 分 theo thứ tự từ đơn vị lớn đến nhỏ. Giờ chẵn dùng 点. Khi không phải giờ chẵn, dùng cấu trúc …… 点 …… 分. Để phân biệt sáng hay chiều, dùng 上午 …… 点 hoặc 下午 …… 点. Chú ý: nói 2 giờ là 两点 (liǎng diǎn), không dùng 二点.',
      groups: [
        { label: 'Giờ chẵn', items: [['九点', 'jiǔ diǎn', '9:00'], ['十一点', 'shíyī diǎn', '11:00'], ['两点', 'liǎng diǎn', '2:00 (không nói 二点)']] },
        { label: 'Có phút', items: [['五点三十分', 'wǔ diǎn sānshí fēn', '5:30'], ['十一点十分', 'shíyī diǎn shí fēn', '11:10'], ['两点零五分', 'liǎng diǎn líng wǔ fēn', '2:05 (零 khi phút dưới 10)']] },
        { label: 'Phân biệt sáng · chiều', items: [['上午八点', 'shàngwǔ bā diǎn', '8:00 sáng'], ['下午三点十分', 'xiàwǔ sān diǎn shí fēn', '3:10 chiều'], ['下午五点二十五分', 'xiàwǔ wǔ diǎn èrshíwǔ fēn', '5:25 chiều']] },
      ],
    },
    {
      kind: 'examples', label: 'Thanh nhẹ phân biệt nghĩa', title: 'Chức năng của thanh nhẹ',
      clip: { label: '11-4 · Nghe và đọc theo (thanh nhẹ)', src: A + 'l11-4.mp3' },
      intro: 'Thanh nhẹ không chỉ là hiện tượng biến đổi âm mà còn có chức năng phân biệt nghĩa của từ. Ví dụ 东西 đọc dōngxī (thanh gốc) chỉ hướng đông và tây, nhưng đọc dōngxi (thanh nhẹ) lại là đồ vật.',
      groups: [{ label: 'Cặp từ trong sách', items: [
        ['老子 lǎozi', 'lǎozi', 'bố, cha (danh từ)'], ['老子 Lǎozǐ', 'Lǎozǐ', 'Lão Tử (nhà tư tưởng thời cổ đại)'],
        ['买卖 mǎimai', 'mǎimai', 'việc buôn bán (danh từ)'], ['买卖 mǎimài', 'mǎimài', 'mua và bán (động từ)'],
        ['大意 dàyi', 'dàyi', 'lơ là (tính từ)'], ['大意 dàyì', 'dàyì', 'đại ý (danh từ)'],
      ] }],
    },
    {
      kind: 'examples', label: 'Bộ 阝 và 亻', title: 'Các bộ của chữ Hán: 阝 và 亻',
      intro: 'Bộ 阝 thường liên quan đến địa hình hay vị trí. Bộ 亻 thường liên quan đến con người.',
      groups: [
        { label: 'Bộ 阝 (địa hình, vị trí)', items: [['院', 'yuàn', 'sân, viện'], ['阳', 'yáng', 'mặt trời']] },
        { label: 'Bộ 亻 (con người)', items: [['你', 'nǐ', 'anh, chị, bạn'], ['他', 'tā', 'anh ấy, ông ấy']] },
      ],
    },
    {
      kind: 'examples', label: 'Từ bổ sung', title: 'Từ vựng bổ sung: vị trí ngồi',
      intro: 'Sách trang 92 bổ sung các từ chỉ vị trí dùng trong hoạt động nhóm giới thiệu chỗ ngồi.',
      groups: [{ label: 'Từ bổ sung', items: [['后面', 'hòumiàn', 'phía sau'], ['左边', 'zuǒbian', 'bên trái'], ['右边', 'yòubian', 'bên phải']] }],
    },
  ],

  notes: [
    {
      title: 'Cách diễn đạt thời gian',
      body: 'Dùng 点 (giờ) và 分 (phút) theo thứ tự từ đơn vị lớn đến nhỏ. Giờ chẵn: 九点, 十一点, 两点. Có phút: 五点三十分, 十一点十分, 两点零五分. Phân biệt sáng chiều: 上午八点, 下午三点十分. Lưu ý 2 giờ nói là 两点, không nói 二点.',
      say: '下午三点十分',
    },
    {
      title: 'Từ chỉ thời gian làm trạng ngữ',
      body: 'Từ chỉ thời gian làm trạng ngữ thường đứng sau chủ ngữ, đôi khi cũng có thể đứng trước chủ ngữ. Ví dụ: 妈妈六点做饭。 李老师上午八点去学校。 我星期一去北京。 / 七点我吃饭。 中午十二点我们回家。 下午五点他们去看电影。',
      say: '我星期一去北京',
    },
    {
      title: 'Danh từ 前',
      body: '前 chỉ khoảng thời gian trước hiện tại hay trước thời điểm được đề cập. Ví dụ: 三天前, 一个星期前, 四点前, 星期五前。 你什么时候去学校？ 八点前。 你星期五前能回家吗？ 能。',
      say: '星期五前',
    },
    {
      title: 'Thanh nhẹ phân biệt nghĩa',
      body: 'Thanh nhẹ không chỉ là hiện tượng biến âm mà còn phân biệt nghĩa của từ: 东西 dōngxī (hướng đông tây) và dōngxi (đồ vật); 买卖 mǎimai (việc buôn bán) và mǎimài (mua và bán).',
      say: '东西',
    },
    {
      title: 'Bộ 阝 và 亻',
      body: 'Bộ 阝 liên quan đến địa hình hay vị trí: 院, 阳. Bộ 亻 liên quan đến con người: 你, 他.',
      say: '你他',
    },
    {
      title: 'Văn hóa: họ tên của người Trung Quốc',
      body: 'Họ tên của người Trung Quốc thường được viết theo trình tự họ đứng trước, tên đứng sau: 李月, 谢朋, 王方 (李, 谢, 王 là họ; 月, 朋, 方 là tên). Người Trung Quốc có trên 5.000 họ, hiện nay phổ biến khoảng 200 họ, trong đó 张, 王, 李 và 赵 là các họ thường gặp nhất. Họ chỉ có một chữ gọi là họ đơn (đa số người Trung Quốc có họ đơn), họ gồm hai chữ hoặc nhiều hơn gọi là họ kép: 欧阳, 上官, 诸葛. Khi xưng hô có thể thêm họ trước nghề nghiệp: 李老师 (cô Lý), 王医生 (bác sĩ Vương).',
      say: '李老师',
    },
  ],

  writeChars: ['午', '电', '现', '分', '点', '前'],

  drills: [
    {
      title: 'Hai chữ đơn mới (认识独体字)',
      hint: 'Sách trang 99: nguồn gốc hình chữ. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '午', p: 'wǔ', m: 'khoảng thời gian từ 11 giờ đến 13 giờ (buổi trưa)' },
        { h: '电', p: 'diàn', m: 'gốc là tia chớp ngoằn ngoèo trên trời khi mưa; nay là điện' },
      ],
    },
    {
      title: 'Đọc to giờ giấc (运用 1, sách trang 100)',
      hint: 'Mẫu: 现在几点？ 现在八点十八分。 Bấm để nghe và tập đọc các mốc giờ.',
      items: [
        { h: '三点三十分', p: 'sān diǎn sānshí fēn', m: '3:30' }, { h: '十一点二十三分', p: 'shíyī diǎn èrshísān fēn', m: '11:23' },
        { h: '十点四十三分', p: 'shí diǎn sìshísān fēn', m: '10:43' }, { h: '四点十五分', p: 'sì diǎn shíwǔ fēn', m: '4:15' },
        { h: '五点五十八分', p: 'wǔ diǎn wǔshíbā fēn', m: '5:58' }, { h: '一点二十七分', p: 'yī diǎn èrshíqī fēn', m: '1:27' },
        { h: '十二点二十七分', p: "shí'èr diǎn èrshíqī fēn", m: '12:27' }, { h: '两点三十四分', p: 'liǎng diǎn sānshísì fēn', m: '2:34' },
        { h: '七点四十五分', p: 'qī diǎn sìshíwǔ fēn', m: '7:45' }, { h: '十点零五分', p: 'shí diǎn líng wǔ fēn', m: '10:05' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 97)',
      items: [
        { q: '现在几点？ (Xiànzài jǐ diǎn?)', hint: '现在十点十分。' },
        { q: '他们几点吃饭？ (Tāmen jǐ diǎn chī fàn?)', hint: '他们十二点吃饭。' },
        { q: '爸爸什么时候回家？ (Bàba shénme shíhou huí jiā?)', hint: '爸爸下午五点回家。' },
        { q: '他们什么时候去看电影？ (Tāmen shénme shíhou qù kàn diànyǐng?)', hint: '他们六点三十分去看电影。' },
        { q: '他去哪儿？什么时候能回家？ (Tā qù nǎr? Shénme shíhou néng huí jiā?)', hint: '他去北京，星期五前能回家。' },
      ],
    },
    {
      title: 'Hoạt động nhóm: thói quen sinh hoạt trong ngày (运用 2, sách trang 100–101)',
      items: [
        { q: 'A: 你几点吃早饭？  B: 我七点吃早饭。', hint: 'Hỏi nhau giờ ăn sáng, đến trường, đọc sách, về nhà, xem tivi và ghi vào bảng.' },
        { q: 'Mẫu của sách (小王): 吃早饭 7:00 · 来学校 8:20 · 看书 15:00 · 回家 18:00前 · 看电视 晚上20:00', hint: 'Nói lại thời gian biểu của Tiểu Vương, rồi nói thời gian biểu của bạn.' },
      ],
    },
  ],

  sentences: [
    { parts: ['现在', '几', '点'], pinyin: 'Xiànzài jǐ diǎn?', vi: 'Bây giờ là mấy giờ?' },
    { parts: ['现在', '十', '点', '十', '分'], pinyin: 'Xiànzài shí diǎn shí fēn.', vi: 'Bây giờ là 10 giờ 10 phút.' },
    { parts: ['中午', '几', '点', '吃饭'], pinyin: 'Zhōngwǔ jǐ diǎn chī fàn?', vi: 'Trưa mấy giờ ăn cơm?' },
    { parts: ['爸爸', '什么', '时候', '回家'], pinyin: 'Bàba shénme shíhou huí jiā?', vi: 'Khi nào bố về nhà?' },
    { parts: ['我们', '什么', '时候', '去', '看', '电影'], pinyin: 'Wǒmen shénme shíhou qù kàn diànyǐng?', vi: 'Khi nào chúng ta đi xem phim?' },
    { parts: ['我', '星期', '一', '去', '北京'], pinyin: 'Wǒ xīngqī yī qù Běijīng.', vi: 'Thứ hai tôi đi Bắc Kinh.' },
    { parts: ['星期', '五', '前', '能', '回家', '吗'], pinyin: 'Xīngqī wǔ qián néng huí jiā ma?', vi: 'Trước thứ sáu có thể về nhà không?' },
  ],

  // ───────── Sách bài tập, bài 11 (đáp án: "Đáp án sách bài tập", trang 20–22) ─────────
  dictations: [
    {
      title: 'Sách bài tập · Nghe, gõ pinyin (ngữ âm, câu 1–5)',
      hint: 'Nghe đoạn ghi âm (11-2), gõ lại pinyin của từ bạn nghe được (có thể không cần dấu, có thể viết liền hoặc cách).',
      clip: { label: '11-2 · Sách bài tập, ngữ âm', src: A + 'w11-2.mp3' },
      items: [
        { prompt: 'Câu 1', answer: 'gūgu', gloss: '姑姑' }, { prompt: 'Câu 2', answer: 'Tiān Shān', accept: ['tiānshān'], gloss: '天山' }, { prompt: 'Câu 3', answer: 'kànkan', gloss: '看看' },
        { prompt: 'Câu 4', answer: 'tā de', accept: ['tāde'], gloss: '他的' }, { prompt: 'Câu 5', answer: 'nǐmen', gloss: '你们' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, trả lời câu hỏi (câu 11–15)',
      hint: 'Nghe đoạn ghi âm (11-1, phần 3) rồi gõ câu trả lời ngắn bằng chữ Hán (ví dụ 十点, 看书). Câu hỏi: 11 他/她几点工作？ 12 他们几点前去看电影？ 13 他/她十二点做什么？ 14 他/她什么时候喝茶？ 15 他什么时候回家？',
      clip: { label: '11-1 · Sách bài tập, nghe phần 3 (câu 11–15)', src: A + 'w11-1.mp3' },
      items: [
        { prompt: 'Câu 11 · 几点工作？', answer: '十点', accept: ['10点', '十点工作'], gloss: '我十点去工作，现在在家。' },
        { prompt: 'Câu 12 · 几点前去看电影？', answer: '九点', accept: ['9点', '九点前', '9点前'], gloss: '现在八点，我们九点前去看电影。' },
        { prompt: 'Câu 13 · 十二点做什么？', answer: '看书', gloss: '我中午十二点看书。' },
        { prompt: 'Câu 14 · 什么时候喝茶？', answer: '下午', accept: ['下午喝茶'], gloss: '我下午喝茶，中午十二点前不喝茶。' },
        { prompt: 'Câu 15 · 什么时候回家？', answer: '星期五', accept: ['星期五回家'], gloss: '他在北京住三天，星期五回家。' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu hỏi với câu trả lời (câu 21–25)',
      hint: 'A 不去，我不去学校，我在家。 B 我不去，没有时间。 C 不工作，你12点来吧。 D 星期五前。 E 他不想去。 F 好的，谢谢！ Gõ chữ cái A–F.',
      items: [
        { prompt: '下午三点你去学校吗？', answer: 'A', gloss: '不去，我不去学校，我在家。' }, { prompt: '你什么时候回北京？', answer: 'D', gloss: '星期五前。' },
        { prompt: '中午你工作吗？', answer: 'C', gloss: '不工作，你12点来吧。' }, { prompt: '你中午去吃饭吗？', answer: 'B', gloss: '我不去，没有时间。' },
        { prompt: '大卫去看电影吗？', answer: 'E', gloss: '他不想去。' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ vào chỗ trống (câu 26–30)',
      hint: 'A 点 · B 分 · C 时候 · D 名字 · E 前 · F 住. Gõ chữ cái A–F.',
      items: [
        { prompt: '我在王方家（ ）一个星期，星期六回家。', answer: 'F', gloss: '住' }, { prompt: '你什么（ ）有时间？我们去看电影。', answer: 'C', gloss: '时候' },
        { prompt: '现在中午十二（ ），你去吃饭吗？', answer: 'A', gloss: '点' }, { prompt: '我现在工作，十二点十（ ）去吃饭。', answer: 'B', gloss: '分' },
        { prompt: '我八点（ ）在家。', answer: 'E', gloss: '前' },
      ],
    },
  ],
}
