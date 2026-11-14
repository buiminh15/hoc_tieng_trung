import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 1, Bài 13: 他在学做中国菜呢。 (sách trang 110–115).
 * Nghe: 13-1…13-4 (giáo trình). Sách bài tập (trang 95–102, đáp án trang 25–27): nối câu hỏi/đáp 21–25, điền từ 26–35,
 * nghe 11–15 và 6–10 (ngữ âm) gõ câu trả lời theo văn bản nghe trong file đáp án.
 * Phần tiếng Việt do app tự thêm ở những chỗ sách không có.
 */

const A = '/audio/hsk-std1/'

export const hskStd1Lesson13: Lesson = {
  id: 13,
  title: 'Anh ấy đang học nấu món ăn Trung Quốc.',
  hanzi: '他在学做中国菜呢。',
  pinyin: 'Tā zài xué zuò Zhōngguó cài ne.',
  vi: 'Anh ấy đang học nấu món ăn Trung Quốc.',
  intro: 'Nói về việc đang làm và gọi điện thoại: 你在做什么呢？ 我在看书呢。 Học thán từ 喂, cấu trúc 在……呢 chỉ hành động đang diễn ra, cách đọc số điện thoại, trợ từ ngữ khí 吧; thanh điệu của từ ba âm tiết (2); bộ 日 và 目; chữ 日, 目, 习.',

  dialogue: [
    { who: 'A', hanzi: '喂，你在做什么呢？', pinyin: 'Wèi, nǐ zài zuò shénme ne?', vi: 'A lô, anh đang làm gì vậy?', scene: 'Hội thoại 1 · gọi điện thoại' },
    { who: 'B', hanzi: '我在看书呢。', pinyin: 'Wǒ zài kàn shū ne.', vi: 'Tôi đang đọc sách.' },
    { who: 'A', hanzi: '大卫也在看书吗？', pinyin: 'Dàwèi yě zài kàn shū ma?', vi: 'David cũng đang đọc sách à?' },
    { who: 'B', hanzi: '他没看书，他在学做中国菜呢。', pinyin: 'Tā méi kàn shū, tā zài xué zuò Zhōngguó cài ne.', vi: 'Không phải, anh ấy đang học nấu món ăn Trung Quốc.' },
    { who: 'A', hanzi: '昨天上午你在做什么呢？', pinyin: 'Zuótiān shàngwǔ nǐ zài zuò shénme ne?', vi: 'Chị làm gì vào sáng hôm qua vậy?', scene: 'Hội thoại 2 · ở quán cà phê' },
    { who: 'B', hanzi: '我在睡觉呢。你呢？', pinyin: 'Wǒ zài shuì jiào ne. Nǐ ne?', vi: 'Tôi ngủ. Còn cô?' },
    { who: 'A', hanzi: '我在家看电视呢。你喜欢看电视吗？', pinyin: 'Wǒ zài jiā kàn diànshì ne. Nǐ xǐhuan kàn diànshì ma?', vi: 'Tôi xem tivi ở nhà. Chị có thích xem tivi không?' },
    { who: 'B', hanzi: '我不喜欢看电视，我喜欢看电影。', pinyin: 'Wǒ bù xǐhuan kàn diànshì, wǒ xǐhuan kàn diànyǐng.', vi: 'Không, tôi thích xem phim.' },
    { who: 'A', hanzi: '82304155，这是李老师的电话吗？', pinyin: 'Bā èr sān líng sì yāo wǔ wǔ, zhè shì Lǐ lǎoshī de diànhuà ma?', vi: '82304155, đây là số điện thoại của cô Lý phải không?', scene: 'Hội thoại 3 · trong văn phòng của trường' },
    { who: 'B', hanzi: '不是。她的电话是82304156。', pinyin: 'Bú shì. Tā de diànhuà shì bā èr sān líng sì yāo wǔ liù.', vi: 'Không phải. Số của cô ấy là 82304156.' },
    { who: 'A', hanzi: '好，我现在给她打电话。', pinyin: 'Hǎo, wǒ xiànzài gěi tā dǎ diànhuà.', vi: 'Bây giờ tôi gọi điện cho cô ấy đây.' },
    { who: 'B', hanzi: '她在工作呢，你下午打吧。', pinyin: 'Tā zài gōngzuò ne, nǐ xiàwǔ dǎ ba.', vi: 'Cô ấy đang làm việc, buổi chiều anh hãy gọi.' },
  ],
  dialogueClips: [
    { label: '13-1 · Hội thoại 1: 你在做什么呢？', src: A + 'l13-1.mp3' },
    { label: '13-2 · Hội thoại 2: 昨天上午你在做什么呢？', src: A + 'l13-2.mp3' },
    { label: '13-3 · Hội thoại 3: 这是李老师的电话吗？', src: A + 'l13-3.mp3' },
  ],
  dialogueTip: '<b>在 + động từ (+ 呢)</b> diễn tả hành động đang diễn ra: 我在看书呢. Phủ định là <b>没(在) + động từ</b>, và không dùng 呢: 他没看书. Khi đọc số điện thoại, đọc từng chữ số và số <b>1</b> đọc là <b>yāo</b>.',
  slowSay: '你在做什么呢',

  vocab: [
    { hanzi: '喂', parts: '口 (khẩu) + 畏 (úy)', pinyin: 'wèi', pos: 'thán từ', meaning: 'a lô, này', han_viet: '' },
    { hanzi: '也', pinyin: 'yě', pos: 'phó từ', meaning: 'cũng. Từ ngoài đại cương HSK 1 (dấu * trong sách)', han_viet: 'dã' },
    { hanzi: '学习', parts: '学 (học) + 习 (tập)', pinyin: 'xuéxí (xué)', pos: 'động từ', meaning: 'học', han_viet: 'học tập' },
    { hanzi: '上午', parts: '上 (thượng) + 午 (ngọ)', pinyin: 'shàngwǔ', pos: 'danh từ', meaning: 'buổi sáng', han_viet: 'thượng ngọ' },
    { hanzi: '睡觉', parts: '睡 = 目 + 垂; 觉', pinyin: 'shuì jiào', pos: 'động từ', meaning: 'ngủ', han_viet: 'thụy giác' },
    { hanzi: '电视', parts: '电 (điện) + 视 (thị)', pinyin: 'diànshì', pos: 'danh từ', meaning: 'tivi', han_viet: 'điện thị' },
    { hanzi: '喜欢', parts: '喜 (hỷ) + 欢 (hoan)', pinyin: 'xǐhuan', pos: 'động từ', meaning: 'thích', han_viet: 'hỷ hoan' },
    { hanzi: '给', parts: '纟 (mịch) + 合 (hợp)', pinyin: 'gěi', pos: 'giới từ', meaning: 'cho. Từ ngoài đại cương HSK 1 (dấu * trong sách)', han_viet: 'cấp' },
    { hanzi: '打电话', parts: '打 = 扌 + 丁; 电话', pinyin: 'dǎ diànhuà', pos: 'động từ', meaning: 'gọi điện thoại. Từ ngoài đại cương HSK 1 (dấu * trong sách)', han_viet: '' },
    { hanzi: '吧', parts: '口 (khẩu) + 巴 (ba)', pinyin: 'ba', pos: 'trợ từ', meaning: 'trợ từ ngữ khí cuối câu: đề nghị, thương lượng, mệnh lệnh nhẹ. Từ ngoài đại cương HSK 1 (dấu * trong sách)', han_viet: '' },
    { hanzi: '大卫', pinyin: 'Dàwèi', pos: 'danh từ riêng', meaning: 'David (tên người)', han_viet: '' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Số điện thoại', title: 'Cách đọc số điện thoại',
      intro: 'Số điện thoại phải đọc từng chữ số một. Số 1 trong số điện thoại được đọc là “yāo”.',
      groups: [{ label: 'Ví dụ trong sách', items: [['8069478', 'bā líng liù jiǔ sì qī bā', '8069478'], ['13851897623', 'yāo sān bā wǔ yāo bā jiǔ qī liù èr sān', '13851897623'], ['82304156', 'bā èr sān líng sì yāo wǔ liù', '82304156']] }],
    },
    {
      kind: 'examples', label: 'Từ ba âm tiết (2)', title: 'Sự kết hợp thanh điệu của từ có ba âm tiết (2): âm tiết đầu thanh 2',
      clip: { label: '13-4 · Nghe và đọc theo (từ ba âm tiết)', src: A + 'l13-4.mp3' },
      intro: 'Từ ba âm tiết bắt đầu bằng thanh 2, rồi lần lượt kết hợp với các thanh ở hai âm tiết sau.',
      groups: [
        { label: '2 + 1 + (1/2/3/4)', items: [['研究生', 'yánjiūshēng', 'nghiên cứu sinh · 2+1+1'], ['弹吉他', 'tán gāngqín', 'chơi đàn guitar · 2+1+2'], ['图书馆', 'túshūguǎn', 'thư viện · 2+1+3'], ['维生素', 'wéishēngsù', 'vitamin · 2+1+4']] },
        { label: '2 + 2 + (1/2/3/4)', items: [['银行家', 'yínhángjiā', 'chủ ngân hàng · 2+2+1'], ['韩国人', 'Hánguó rén', 'người Hàn Quốc · 2+2+2'], ['韩国语', 'Hánguó yǔ', 'tiếng Hàn Quốc · 2+2+3'], ['人民币', 'rénmínbì', 'nhân dân tệ · 2+2+4']] },
        { label: '2 + 3 + (1/2/3/4)', items: [['游泳衣', 'yóuyǒngyī', 'đồ bơi · 2+3+1'], ['游泳池', 'yóuyǒngchí', 'hồ bơi · 2+3+2'], ['游泳馆', 'yóuyǒngguǎn', 'bể bơi · 2+3+3'], ['牛仔裤', 'niúzǎikù', 'quần jean · 2+3+4']] },
        { label: '2 + 4 + (1/2/3/4)', items: [['魔术师', 'móshùshī', 'nhà ảo thuật · 2+4+1'], ['服务员', 'fúwùyuán', 'nhân viên phục vụ · 2+4+2'], ['博物馆', 'bówùguǎn', 'bảo tàng · 2+4+3'], ['明信片', 'míngxìnpiàn', 'bưu thiếp · 2+4+4']] },
      ],
    },
    {
      kind: 'examples', label: 'Bộ 日 và 目', title: 'Các bộ của chữ Hán: 日 và 目',
      intro: 'Bộ 日 thường liên quan đến thời gian. Bộ 目 thường liên quan đến đôi mắt.',
      groups: [
        { label: 'Bộ 日 (thời gian)', items: [['明', 'míng', 'sáng, tới'], ['时', 'shí', 'thời gian']] },
        { label: 'Bộ 目 (đôi mắt)', items: [['眼', 'yǎn', 'mắt'], ['睡', 'shuì', 'ngủ']] },
      ],
    },
  ],

  notes: [
    {
      title: 'Thán từ 喂',
      body: '喂 là từ thường dùng để mở đầu khi gọi điện thoại hoặc trả lời điện thoại. Ví dụ: 喂，李老师在家吗？ 她不在家，去学校了。 喂，你是张小姐吗？ 对，您是？ 喂，你在做什么呢？ 我在看书呢。',
      say: '喂，你在做什么呢',
    },
    {
      title: '在……呢: hành động đang diễn ra',
      body: 'Thêm phó từ 在 trước động từ, hoặc dùng trợ từ ngữ khí 呢 ở cuối câu, để diễn tả hành động đang diễn ra. Cấu trúc: 在 + động từ + tân ngữ (+ 呢). Ví dụ: 我在睡觉呢。 你在做什么呢？ 小王在学习汉语。 Dạng phủ định: 没(在) + động từ (không dùng 呢): 我没在看电视。 他们没在工作。 他没看书。',
      say: '我在看书呢',
    },
    {
      title: 'Cách đọc số điện thoại',
      body: 'Số điện thoại đọc từng chữ số một. Số 1 đọc là yāo (để không lẫn với 7 qī): 8069478 → bā líng liù jiǔ sì qī bā; 82304156 → bā èr sān líng sì yāo wǔ liù.',
      say: '八二三零四一五六',
    },
    {
      title: 'Trợ từ ngữ khí 吧',
      body: '吧 đặt cuối câu cầu khiến để diễn đạt đề nghị hay mệnh lệnh và làm cho câu nhẹ nhàng hơn. Ví dụ: 这儿没有人，请坐吧。 今天我们在家吃饭吧。 她在工作呢，你下午打吧。',
      say: '今天我们在家吃饭吧',
    },
    {
      title: 'Thanh điệu của từ ba âm tiết (2)',
      body: 'Từ ba âm tiết bắt đầu bằng thanh 2 có 16 tổ hợp (2+1+1 … 2+4+4). Luyện đọc theo nhóm cùng file nghe 13-4.',
      say: '图书馆',
    },
    {
      title: 'Bộ 日 và 目',
      body: 'Bộ 日 liên quan đến thời gian: 明, 时. Bộ 目 liên quan đến đôi mắt: 眼, 睡.',
      say: '睡',
    },
  ],

  writeChars: ['日', '目', '习', '喜', '给', '吧'],

  drills: [
    {
      title: 'Ba chữ đơn mới (认识独体字)',
      hint: 'Sách trang 114: nguồn gốc hình chữ. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '日', p: 'rì', m: 'mặt trời (hình mặt trời), nghĩa gốc là mặt trời' },
        { h: '目', p: 'mù', m: 'con mắt (hình con mắt), nghĩa gốc là mắt' },
        { h: '习', p: 'xí', m: 'luyện tập, ôn luyện nhiều lần sau khi học (学) cho thành thạo' },
      ],
    },
    {
      title: 'Nói về hoạt động hôm qua (运用 1, sách trang 115)',
      hint: 'Mẫu: 昨天下午五点，你在做什么呢？ 昨天下午五点，我在学习呢。',
      items: [
        { h: '吃饭', p: 'chī fàn', m: 'ăn cơm' }, { h: '买东西', p: 'mǎi dōngxi', m: 'mua đồ' },
        { h: '看电视', p: 'kàn diànshì', m: 'xem tivi' }, { h: '打电话', p: 'dǎ diànhuà', m: 'gọi điện thoại' },
        { h: '睡觉', p: 'shuì jiào', m: 'ngủ' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 113)',
      items: [
        { q: '大卫在做什么呢？ (Dàwèi zài zuò shénme ne?)', hint: '大卫在学做中国菜呢。' },
        { q: '昨天上午他在看书吗？ (Zuótiān shàngwǔ tā zài kàn shū ma?)', hint: '他没看书，他在睡觉呢。' },
        { q: '他们都喜欢看电视吗？ (Tāmen dōu xǐhuan kàn diànshì ma?)', hint: '不都喜欢：一个喜欢看电视，一个喜欢看电影。' },
        { q: '李老师的电话号码是多少？ (Lǐ lǎoshī de diànhuà hàomǎ shì duōshao?)', hint: '82304156。' },
        { q: '李老师在做什么呢？ (Lǐ lǎoshī zài zuò shénme ne?)', hint: '她在工作呢。' },
      ],
    },
    {
      title: 'Hoạt động nhóm: hỏi số điện thoại (运用 2, sách trang 115)',
      items: [
        { q: 'A: 你的电话号码是多少？  B: 139-0135-1290。', hint: 'Hỏi số điện thoại của từng bạn trong nhóm và ghi lại (nhớ đọc 1 là yāo).' },
      ],
    },
  ],

  sentences: [
    { parts: ['你', '在', '做', '什么', '呢'], pinyin: 'Nǐ zài zuò shénme ne?', vi: 'Anh đang làm gì vậy?' },
    { parts: ['我', '在', '看', '书', '呢'], pinyin: 'Wǒ zài kàn shū ne.', vi: 'Tôi đang đọc sách.' },
    { parts: ['他', '在', '学', '做', '中国', '菜', '呢'], pinyin: 'Tā zài xué zuò Zhōngguó cài ne.', vi: 'Anh ấy đang học nấu món Trung Quốc.' },
    { parts: ['你', '喜欢', '看', '电视', '吗'], pinyin: 'Nǐ xǐhuan kàn diànshì ma?', vi: 'Chị có thích xem tivi không?' },
    { parts: ['我', '现在', '给', '她', '打', '电话'], pinyin: 'Wǒ xiànzài gěi tā dǎ diànhuà.', vi: 'Bây giờ tôi gọi điện cho cô ấy.' },
    { parts: ['你', '下午', '打', '吧'], pinyin: 'Nǐ xiàwǔ dǎ ba.', vi: 'Buổi chiều anh hãy gọi.' },
  ],

  // ───────── Sách bài tập, bài 13 (đáp án: "Đáp án sách bài tập", trang 25–27) ─────────
  dictations: [
    {
      title: 'Sách bài tập · Nghe, gõ từ ba âm tiết (ngữ âm, câu 6–10)',
      hint: 'Nghe đoạn ghi âm (13-2), gõ lại pinyin của từ ba âm tiết bạn nghe được trong câu (có thể không cần dấu). Câu 6: Wǒ měi tiān xiàwǔ zài túshūguǎn xuéxí. 7: Māma zuótiān mǎile yì tiáo niúzǎikù. 8: Nǐ hǎo, wǒ xiǎng huàn Rénmínbì. 9: Fúwùyuán, wǒ yào liǎng bēi kāfēi. 10: Tā hé gēge dōu xǐhuan cānguān bówùguǎn.',
      clip: { label: '13-2 · Sách bài tập, ngữ âm phần 2', src: A + 'w13-2.mp3' },
      items: [
        { prompt: 'Câu 6', answer: 'túshūguǎn', gloss: '图书馆' }, { prompt: 'Câu 7', answer: 'niúzǎikù', gloss: '牛仔裤' }, { prompt: 'Câu 8', answer: 'Rénmínbì', gloss: '人民币' },
        { prompt: 'Câu 9', answer: 'fúwùyuán', gloss: '服务员' }, { prompt: 'Câu 10', answer: 'bówùguǎn', gloss: '博物馆' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, trả lời câu hỏi (câu 11–15)',
      hint: 'Nghe đoạn ghi âm (13-1, phần 3) rồi gõ câu trả lời ngắn. Câu hỏi: 11 “我”和朋友在哪儿喝茶？ 12 今天天气怎么样？ 13 张老师的电话是多少？ 14 他/她在做什么呢？ 15 她在做什么呢？',
      clip: { label: '13-1 · Sách bài tập, nghe phần 3 (câu 11–15)', src: A + 'w13-1.mp3' },
      items: [
        { prompt: 'Câu 11 · 在哪儿喝茶？', answer: '家里', accept: ['在家里', '家'], gloss: '下午我和朋友在家里喝茶。' },
        { prompt: 'Câu 12 · 今天天气怎么样？', answer: '不好', accept: ['天气不好'], gloss: '今天天气不好，我们在家吃饭吧。' },
        { prompt: 'Câu 13 · 张老师的电话是多少？', answer: '88302755', gloss: '88302755是张老师的电话。' },
        { prompt: 'Câu 14 · 在做什么？', answer: '学习', accept: ['在学习', '在学习呢'], gloss: '我没看电视，我在学习呢。' },
        { prompt: 'Câu 15 · 在做什么？', answer: '睡觉', accept: ['在睡觉', '在睡觉呢'], gloss: '她没在打电话，她在睡觉呢。' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu hỏi với câu trả lời (câu 21–25)',
      hint: 'A 在下雨呢。 B 我和朋友在看书呢。 C 我没看电视，我在学习呢。 D 在家吃吧。 E 我喜欢喝水。 F 好的，谢谢！ Gõ chữ cái A–F.',
      items: [
        { prompt: '今天我们去哪儿吃饭？', answer: 'D', gloss: '在家吃吧。' }, { prompt: '昨天下午你在家做什么呢？', answer: 'B', gloss: '我和朋友在看书呢。' },
        { prompt: '你喜欢喝茶吗？', answer: 'E', gloss: '我喜欢喝水。' }, { prompt: '今天天气怎么样？', answer: 'A', gloss: '在下雨呢。' },
        { prompt: '你在看电视吗？', answer: 'C', gloss: '我没看电视，我在学习呢。' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ vào chỗ trống (câu 26–35)',
      hint: 'A 在 · B 呢 · C 没 · D 名字 · E 也 · F 吧 · G 喜欢 · H 看 · I 做 · J 电话 · K 会. Gõ chữ cái A–K. (Câu 26–30 chọn từ A–E, câu 31–35 chọn từ G–K.)',
      items: [
        { prompt: '我（ ）打电话呢。', answer: 'A', gloss: '在' }, { prompt: '爸爸（ ）看电视，他在工作呢。', answer: 'C', gloss: '没' },
        { prompt: '我家的小狗在吃饭（ ）。', answer: 'B', gloss: '呢' }, { prompt: '中国菜很好吃，我们做中国菜（ ）。', answer: 'F', gloss: '吧' },
        { prompt: '我会写汉字，我妈妈（ ）会写汉字。', answer: 'E', gloss: '也' }, { prompt: '我想学习（ ）中国菜。', answer: 'I', gloss: '做' },
        { prompt: '我没有你的（ ）。', answer: 'J', gloss: '电话' }, { prompt: '我不（ ）看电影。', answer: 'G', gloss: '喜欢' },
        { prompt: '我昨天下午四点在家（ ）电视呢。', answer: 'H', gloss: '看' }, { prompt: '我不（ ）写汉字，我很想学。', answer: 'K', gloss: '会' },
      ],
    },
  ],
}
