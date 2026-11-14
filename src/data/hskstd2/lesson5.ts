import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 2, Bài 5: 就买这件吧 (sách trang 33–40).
 * Sách bản Trung–Anh; phần tiếng Việt do app dịch.
 * Nghe: 05-1…05-5. Sách bài tập (trang 47–54, đáp án trang 9–10).
 */

const A = '/audio/hsk-std2/'

export const hskStd2Lesson5: Lesson = {
  id: 5,
  title: 'Mua cái này đi',
  hanzi: '就买这件吧',
  pinyin: 'Jiù mǎi zhè jiàn ba',
  vi: 'Mua cái này đi',
  intro: 'Nhận xét và đưa ra quyết định: 颜色还可以，就是有点儿大。 这件不错，就买这件吧。 Học phó từ 就, phó từ ngữ khí 还 (1), phó từ mức độ 有点儿; trọng âm ngữ pháp trong câu (2); chữ 鱼 và 衣; bộ 子 và 广.',

  dialogue: [
    { who: 'A', hanzi: '晚上我们去饭馆吃饭，怎么样？', pinyin: 'Wǎnshang wǒmen qù fànguǎn chī fàn, zěnmeyàng?', vi: 'Tối nay mình đi nhà hàng ăn nhé, được không?', scene: 'Hội thoại 1 · ở nhà' },
    { who: 'B', hanzi: '我不想去外面吃，我想在家吃。', pinyin: 'Wǒ bù xiǎng qù wàimiàn chī, wǒ xiǎng zài jiā chī.', vi: 'Em không muốn ăn ngoài, em muốn ăn ở nhà.' },
    { who: 'A', hanzi: '那你准备做什么呢？', pinyin: 'Nà nǐ zhǔnbèi zuò shénme ne?', vi: 'Vậy em định nấu gì?' },
    { who: 'B', hanzi: '就做你爱吃的鱼吧。', pinyin: 'Jiù zuò nǐ ài chī de yú ba.', vi: 'Thì nấu món cá anh thích ăn vậy.' },
    { who: 'A', hanzi: '帮我看一下这件衣服怎么样。', pinyin: 'Bāng wǒ kàn yíxià zhè jiàn yīfu zěnmeyàng.', vi: 'Xem giúp mình cái áo này thế nào.', scene: 'Hội thoại 2 · ở cửa hàng' },
    { who: 'B', hanzi: '颜色还可以，就是有点儿大。', pinyin: 'Yánsè hái kěyǐ, jiùshì yǒudiǎnr dà.', vi: 'Màu thì cũng được, chỉ là hơi rộng.' },
    { who: 'A', hanzi: '这件小的怎么样？', pinyin: 'Zhè jiàn xiǎo de zěnmeyàng?', vi: 'Cái nhỏ này thì sao?' },
    { who: 'B', hanzi: '这件不错，就买这件吧。', pinyin: 'Zhè jiàn búcuò, jiù mǎi zhè jiàn ba.', vi: 'Cái này được đấy, mua cái này đi.' },
    { who: 'A', hanzi: '今天去不去打球？', pinyin: 'Jīntiān qù bu qù dǎ qiú?', vi: 'Hôm nay có đi chơi bóng không?', scene: 'Hội thoại 3 · trong lớp học' },
    { who: 'B', hanzi: '这两天有点儿累，不去打球了。', pinyin: 'Zhè liǎng tiān yǒudiǎnr lèi, bú qù dǎ qiú le.', vi: 'Mấy hôm nay hơi mệt, không đi chơi bóng nữa.' },
    { who: 'A', hanzi: '你在做什么呢？是在想昨天的考试吗？', pinyin: 'Nǐ zài zuò shénme ne? Shì zài xiǎng zuótiān de kǎoshì ma?', vi: 'Bạn đang làm gì đấy? Đang nghĩ về bài thi hôm qua à?' },
    { who: 'B', hanzi: '是啊，我觉得听和说还可以，读和写不好，很多字我都不知道是什么意思。', pinyin: 'Shì a, wǒ juéde tīng hé shuō hái kěyǐ, dú hé xiě bù hǎo, hěn duō zì wǒ dōu bù zhīdào shì shénme yìsi.', vi: 'Đúng vậy, mình thấy nghe và nói còn tạm được, đọc và viết không tốt, nhiều chữ mình không biết nghĩa là gì.' },
    { who: 'A', hanzi: '休息一下吧，喝咖啡吗？', pinyin: 'Xiūxi yíxià ba, hē kāfēi ma?', vi: 'Nghỉ một chút đi, uống cà phê không?', scene: 'Hội thoại 4 · ở công ty' },
    { who: 'B', hanzi: '不喝了，我已经喝两杯了。', pinyin: 'Bù hē le, wǒ yǐjīng hē liǎng bēi le.', vi: 'Thôi, mình uống hai cốc rồi.' },
    { who: 'A', hanzi: '是啊，咖啡喝多了对身体不好。', pinyin: 'Shì a, kāfēi hē duō le duì shēntǐ bù hǎo.', vi: 'Đúng đấy, uống nhiều cà phê không tốt cho sức khỏe.' },
    { who: 'B', hanzi: '以后我少喝一点儿，每天喝一杯。', pinyin: 'Yǐhòu wǒ shǎo hē yìdiǎnr, měi tiān hē yì bēi.', vi: 'Từ giờ mình uống ít đi, mỗi ngày một cốc.' },
  ],
  dialogueClips: [
    { label: '05-1 · Hội thoại 1: 那你准备做什么呢？', src: A + 'l05-1.mp3' },
    { label: '05-2 · Hội thoại 2: 就买这件吧', src: A + 'l05-2.mp3' },
    { label: '05-3 · Hội thoại 3: 是在想昨天的考试吗？', src: A + 'l05-3.mp3' },
    { label: '05-4 · Hội thoại 4: 喝咖啡吗？', src: A + 'l05-4.mp3' },
  ],
  dialogueTip: '<b>就 + động từ</b>: rút ra kết luận từ điều vừa nói (就买这件吧). <b>还 + tính từ</b>: tạm được, cũng được (还可以). <b>有点儿 + tính từ</b>: hơi…, thường mang ý không hài lòng (有点儿大). Riêng <b>就是</b> trong câu "颜色还可以，就是有点儿大" nghĩa là "chỉ có điều".',
  slowSay: '就买这件吧',

  vocab: [
    { hanzi: '外面', parts: '外 (ngoại) + 面 (diện)', pinyin: 'wàimiàn', pos: 'danh từ', meaning: 'bên ngoài', han_viet: 'ngoại diện' },
    { hanzi: '准备', parts: '准 (chuẩn) + 备 (bị)', pinyin: 'zhǔnbèi', pos: 'động từ', meaning: 'định, chuẩn bị', han_viet: 'chuẩn bị' },
    { hanzi: '就', parts: '京 + 尤', pinyin: 'jiù', pos: 'phó từ', meaning: 'thì, liền (chỉ kết luận, quyết định)', han_viet: 'tựu' },
    { hanzi: '鱼', pinyin: 'yú', pos: 'danh từ', meaning: 'cá', han_viet: 'ngư' },
    { hanzi: '吧', pinyin: 'ba', pos: 'trợ từ', meaning: 'trợ từ cuối câu: bàn bạc, đề nghị, yêu cầu', han_viet: '' },
    { hanzi: '件', parts: '亻 + 牛', pinyin: 'jiàn', pos: 'lượng từ', meaning: 'chiếc, cái (quần áo, việc…)', han_viet: 'kiện' },
    { hanzi: '还', parts: '辶 + 不', pinyin: 'hái', pos: 'phó từ', meaning: 'còn, tạm (还可以)', han_viet: 'hoàn' },
    { hanzi: '可以', pinyin: 'kěyǐ', pos: 'tính từ', meaning: 'được, khá', han_viet: 'khả dĩ' },
    { hanzi: '不错', parts: '不 + 错 (thác)', pinyin: 'búcuò', pos: 'tính từ', meaning: 'khá tốt, không tệ', han_viet: 'bất thác' },
    { hanzi: '考试', parts: '考 (khảo) + 试 (thí)', pinyin: 'kǎoshì', pos: 'danh từ', meaning: 'kỳ thi, bài thi', han_viet: 'khảo thí' },
    { hanzi: '意思', parts: '意 (ý) + 思 (tư)', pinyin: 'yìsi', pos: 'danh từ', meaning: 'ý nghĩa', han_viet: 'ý tư' },
    { hanzi: '咖啡', pinyin: 'kāfēi', pos: 'danh từ', meaning: 'cà phê', han_viet: '' },
    { hanzi: '对', pinyin: 'duì', pos: 'giới từ', meaning: 'đối với (đặt trước danh từ, đại từ)', han_viet: 'đối' },
    { hanzi: '以后', pinyin: 'yǐhòu', pos: 'danh từ', meaning: 'sau này, từ nay về sau. Từ ngoài đại cương HSK 2 (dấu * trong sách)', han_viet: 'dĩ hậu' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Trọng âm câu (2)', title: 'Trọng âm ngữ pháp trong câu (2)',
      clip: { label: '05-5 · Nghe và đọc theo (trọng âm trong câu)', src: A + 'l05-5.mp3' },
      intro: 'Tiếp bài 4: định ngữ và trạng ngữ cũng thường được đọc nhấn.',
      groups: [
        { label: '(1) Nhấn định ngữ', items: [['那是我妈妈做的中国菜。', 'Nà shì wǒ māma zuò de Zhōngguó cài.', 'nhấn 我妈妈做的'], ['那个学校是李老师工作了很多年的地方。', 'Nàge xuéxiào shì Lǐ lǎoshī gōngzuòle hěn duō nián de dìfang.', 'nhấn 李老师工作了很多年'], ['我最喜欢红色的衣服。', 'Wǒ zuì xǐhuan hóngsè de yīfu.', 'nhấn 红色']] },
        { label: '(2) Nhấn trạng ngữ', items: [['你的杯子就在那儿。', 'Nǐ de bēizi jiù zài nàr.', 'nhấn 就'], ['大卫的狗飞一样地跑了过去。', 'Dàwèi de gǒu fēi yíyàng de pǎole guoqu.', 'nhấn 飞一样'], ['我爸爸是医生，每天从早到晚忙工作。', 'Wǒ bàba shì yīshēng, měi tiān cóng zǎo dào wǎn máng gōngzuò.', 'nhấn 从早到晚']] },
      ],
    },
    {
      kind: 'examples', label: 'Bộ thủ', title: 'Chữ Hán: bộ 子 và 广',
      intro: 'Bộ 子 thường liên quan đến trẻ con; bộ 广 thường liên quan đến nhà cửa, công trình.',
      groups: [{ label: 'Bộ 子 và 广', items: [['孩', 'hái', 'đứa trẻ (bộ 子)'], ['孙', 'sūn', 'cháu (bộ 子)'], ['店', 'diàn', 'cửa hàng (bộ 广)'], ['床', 'chuáng', 'giường (bộ 广)']] }],
    },
    {
      kind: 'examples', label: 'Từ bổ sung', title: 'Từ bổ sung: sở thích (运用 1, sách trang 39)',
      intro: 'Dùng để hỏi nhau thích gì, trả lời bằng 非常 / 还可以 / 有点儿 / 不.',
      groups: [{ label: 'Sở thích', items: [['旅游', 'lǚyóu', 'du lịch'], ['看电影', 'kàn diànyǐng', 'xem phim'], ['打篮球', 'dǎ lánqiú', 'chơi bóng rổ'], ['吃中国菜', 'chī Zhōngguó cài', 'ăn món Trung Quốc'], ['苦', 'kǔ', 'đắng']] }],
    },
  ],

  notes: [
    {
      title: 'Phó từ 就',
      body: '就 + động từ: tiếp ý câu trước, đưa ra kết luận. Ví dụ: 你不想去，就在家休息吧。 这儿的咖啡不错，就喝咖啡吧。 就做你爱吃的鱼吧。 Lưu ý: trong câu "颜色还可以，就是有点儿大", 就是 mang nghĩa nhượng bộ "chỉ có điều".',
      say: '就做你爱吃的鱼吧',
    },
    {
      title: 'Phó từ ngữ khí 还 (1)',
      body: '还 + tính từ: tạm được, chấp nhận được. Ví dụ: 你身体怎么样？ 还好。 这件衣服大吗？ 还行，不太大。 昨天的考试怎么样？ 我觉得听和说还可以，读和写不好。',
      say: '还可以',
    },
    {
      title: 'Phó từ mức độ 有点儿',
      body: '有点儿 + tính từ / động từ: thường diễn tả cảm xúc tiêu cực, không hài lòng của người nói. Ví dụ: 今天天气有点儿冷。 我昨天有点儿累。 （这件衣服）有点儿大。',
      say: '有点儿大',
    },
    {
      title: 'Trọng âm ngữ pháp trong câu (2)',
      body: 'Định ngữ (那是我妈妈做的中国菜) và trạng ngữ (你的杯子就在那儿) thường được đọc nhấn.',
      say: '你的杯子就在那儿',
    },
  ],

  writeChars: ['鱼', '衣', '就', '件', '还', '错'],

  drills: [
    {
      title: 'Hai chữ đơn mới (认识独体字)',
      hint: 'Sách trang 38: nguồn gốc hình chữ. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '鱼', p: 'yú', m: 'hình con cá đủ đầu đuôi, nghĩa là "cá"' },
        { h: '衣', p: 'yī', m: 'hình chiếc áo thời cổ, nay chỉ quần áo nói chung' },
      ],
    },
    {
      title: 'Nhận xét bằng 非常 / 还可以 / 有点儿 (运用 1–2, sách trang 39)',
      hint: 'Mẫu: 你喜欢吃鱼吗？ 还可以。 你喜欢喝咖啡吗？ 不喜欢，咖啡有点儿苦。',
      items: [
        { h: '你喜欢吃鱼吗？', p: 'Nǐ xǐhuan chī yú ma?', m: 'Bạn thích ăn cá không?' },
        { h: '还可以。', p: 'Hái kěyǐ.', m: 'Cũng được.' },
        { h: '不喜欢，咖啡有点儿苦。', p: 'Bù xǐhuan, kāfēi yǒudiǎnr kǔ.', m: 'Không thích, cà phê hơi đắng.' },
        { h: '你觉得这件衣服漂亮吗？', p: 'Nǐ juéde zhè jiàn yīfu piàoliang ma?', m: 'Bạn thấy cái áo này đẹp không?' },
        { h: '非常漂亮。', p: 'Fēicháng piàoliang.', m: 'Rất đẹp.' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 36–37)',
      items: [
        { q: '今天晚上他们在哪儿吃饭？', hint: '他们在家吃饭。' },
        { q: '她觉得那件衣服怎么样？', hint: '颜色还可以，就是有点儿大。' },
        { q: '她今天为什么不去打球了？', hint: '因为这两天有点儿累。' },
        { q: '她觉得昨天的考试怎么样？', hint: '听和说还可以，读和写不好。' },
        { q: '他为什么以后每天就喝一杯咖啡？', hint: '因为咖啡喝多了对身体不好。' },
      ],
    },
  ],

  sentences: [
    { parts: ['我', '不', '想', '去', '外面', '吃'], pinyin: 'Wǒ bù xiǎng qù wàimiàn chī.', vi: 'Em không muốn ăn ngoài.' },
    { parts: ['就', '做', '你', '爱', '吃', '的', '鱼', '吧'], pinyin: 'Jiù zuò nǐ ài chī de yú ba.', vi: 'Thì nấu món cá anh thích ăn vậy.' },
    { parts: ['颜色', '还', '可以', '，', '就是', '有点儿', '大'], pinyin: 'Yánsè hái kěyǐ, jiùshì yǒudiǎnr dà.', vi: 'Màu cũng được, chỉ là hơi rộng.' },
    { parts: ['这', '件', '不错', '，', '就', '买', '这', '件', '吧'], pinyin: 'Zhè jiàn búcuò, jiù mǎi zhè jiàn ba.', vi: 'Cái này được đấy, mua cái này đi.' },
    { parts: ['这', '两', '天', '有点儿', '累'], pinyin: 'Zhè liǎng tiān yǒudiǎnr lèi.', vi: 'Mấy hôm nay hơi mệt.' },
    { parts: ['咖啡', '喝', '多', '了', '对', '身体', '不', '好'], pinyin: 'Kāfēi hē duō le duì shēntǐ bù hǎo.', vi: 'Uống nhiều cà phê không tốt cho sức khỏe.' },
  ],

  dictations: [
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 11–15)',
      hint: 'Nghe đoạn ghi âm (05-1, phần 3), chọn A, B hoặc C. Câu 11: A 外面 · B 咖啡馆 · C 书店. Câu 12: A 鱼 · B 都爱吃 · C 晚饭. Câu 13: A 他儿子不喜欢 · B 椅子有点儿高 · C 一百块钱. Câu 14: A 读和写还不错 · B 说和写还不错 · C 听和说还不错. Câu 15: A 一个 · B 不吃 · C 很多.',
      clip: { label: '05-1 · Sách bài tập, phần nghe', src: A + 'w05-1.mp3' },
      items: [
        { prompt: 'Câu 11', answer: 'B', gloss: '咖啡馆' }, { prompt: 'Câu 12', answer: 'A', gloss: '鱼' },
        { prompt: 'Câu 13', answer: 'B', gloss: '椅子有点儿高' }, { prompt: 'Câu 14', answer: 'C', gloss: '听和说还不错' },
        { prompt: 'Câu 15', answer: 'C', gloss: '很多' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ (câu 21–25)',
      hint: 'A 就 · B 吧 · C 还 · D 对 · E 贵 · F 以后. Gõ chữ cái A–F.',
      items: [
        { prompt: '王方，你去买一点儿水果（ ）。', answer: 'B', gloss: '吧' }, { prompt: '我下午四点考试，考试（ ）给你打电话。', answer: 'F', gloss: '以后' },
        { prompt: '我有两本，你喜欢（ ）送给你一本。', answer: 'A', gloss: '就' }, { prompt: '我太忙了，没时间运动，我知道运动（ ）身体很好。', answer: 'D', gloss: '对' },
        { prompt: '今天的菜（ ）可以，都是我丈夫做的。', answer: 'C', gloss: '还' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, đúng hay sai (câu 26–30)',
      hint: 'Đọc câu cho sẵn rồi xét câu có dấu * đúng (gõ D) hay sai (gõ S).',
      items: [
        { prompt: '三百块钱还可以，你喜欢就买吧。* 她不喜欢这件衣服。', answer: 'S', gloss: 'Sai' },
        { prompt: '我们一起准备晚饭，你做鱼，我做菜。* 他们不去外面吃饭。', answer: 'D', gloss: 'Đúng' },
        { prompt: '昨天的考试读和写不太好。* 他在想昨天的考试呢。', answer: 'D', gloss: 'Đúng' },
        { prompt: '我中午有点儿累，喝了两杯咖啡。* 她累的时候喝咖啡。', answer: 'D', gloss: 'Đúng' },
        { prompt: '你少喝一点儿吧，喝多了对身体不好。* 他的身体不太好。', answer: 'S', gloss: 'Sai' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu (câu 31–35)',
      hint: 'A 我今天早上六点起床的，现在有点儿累。 B 你会做什么菜？ C 明天我去公司，不去打球了。 D 昨天的考试你觉得怎么样？ E 他在哪儿呢？你看见他了吗？ F 你准备去北京旅游的东西了吗？ Gõ chữ cái A–F.',
      items: [
        { prompt: '我会做鱼，你爱吃鱼吗？', answer: 'B', gloss: '你会做什么菜？' }, { prompt: '你休息一下吧。', answer: 'A', gloss: '……现在有点儿累。' },
        { prompt: '我觉得还不错。', answer: 'D', gloss: '昨天的考试你觉得怎么样？' }, { prompt: '我们下个星期去，明天再准备吧。', answer: 'F', gloss: '你准备去北京旅游的东西了吗？' },
        { prompt: '好吧，你明天回家以后给我打电话。', answer: 'C', gloss: '明天我去公司，不去打球了。' },
      ],
    },
  ],
}
