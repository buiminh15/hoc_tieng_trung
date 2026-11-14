import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 2, Bài 14: 你看过那个电影吗 (sách trang 105–112).
 * Sách bản Trung–Anh; phần tiếng Việt do app dịch.
 * Nghe: 14-1…14-5. Sách bài tập (trang 129–136, đáp án trang 26–28).
 */

const A = '/audio/hsk-std2/'

export const hskStd2Lesson14: Lesson = {
  id: 14,
  title: 'Bạn đã xem bộ phim đó chưa',
  hanzi: '你看过那个电影吗',
  pinyin: 'Nǐ kànguo nàge diànyǐng ma',
  vi: 'Bạn đã xem bộ phim đó chưa',
  intro: 'Nói về trải nghiệm đã từng có: 你看过那个电影没有？ 我去过好几次。 Học trợ từ động thái 过, cặp liên từ 虽然……但是……, bổ ngữ động lượng 次; ngữ điệu câu cảm thán; bộ ⻗ và 贝.',

  dialogue: [
    { who: 'A', hanzi: '你看过那个电影没有？', pinyin: 'Nǐ kànguo nàge diànyǐng méiyǒu?', vi: 'Bạn xem bộ phim đó chưa?', scene: 'Hội thoại 1 · trong lớp học' },
    { who: 'B', hanzi: '没看过，听说很有意思。', pinyin: 'Méi kànguo, tīngshuō hěn yǒu yìsi.', vi: 'Chưa xem, nghe nói hay lắm.' },
    { who: 'A', hanzi: '那我们下个星期一起去看吧？', pinyin: 'Nà wǒmen xià ge xīngqī yìqǐ qù kàn ba?', vi: 'Vậy tuần sau mình cùng đi xem nhé?' },
    { who: 'B', hanzi: '可以，但是我女朋友也想去。', pinyin: 'Kěyǐ, dànshì wǒ nǚpéngyou yě xiǎng qù.', vi: 'Được, nhưng bạn gái mình cũng muốn đi.' },
    { who: 'A', hanzi: '听说你去过中国，还想去吗？', pinyin: 'Tīngshuō nǐ qùguo Zhōngguó, hái xiǎng qù ma?', vi: 'Nghe nói anh từng đi Trung Quốc, còn muốn đi nữa không?', scene: 'Hội thoại 2 · ở văn phòng' },
    { who: 'B', hanzi: '我虽然去过好几次，但是还想再去玩儿玩儿。', pinyin: 'Wǒ suīrán qùguo hǎo jǐ cì, dànshì hái xiǎng zài qù wánrwanr.', vi: 'Tuy tôi đã đi mấy lần rồi, nhưng vẫn muốn đi chơi nữa.' },
    { who: 'A', hanzi: '那我们一起去吧。', pinyin: 'Nà wǒmen yìqǐ qù ba.', vi: 'Vậy chúng ta cùng đi nhé.' },
    { who: 'B', hanzi: '好啊，到时候我给你打电话。', pinyin: 'Hǎo a, dào shíhou wǒ gěi nǐ dǎ diànhuà.', vi: 'Được, đến lúc đó tôi gọi điện cho anh.' },
    { who: 'A', hanzi: '明天天气怎么样？', pinyin: 'Míngtiān tiānqì zěnmeyàng?', vi: 'Ngày mai thời tiết thế nào?', scene: 'Hội thoại 3 · trong phòng' },
    { who: 'B', hanzi: '虽然是晴天，但是很冷。', pinyin: 'Suīrán shì qíngtiān, dànshì hěn lěng.', vi: 'Tuy trời nắng nhưng rất lạnh.' },
    { who: 'A', hanzi: '那还能去跑步吗？', pinyin: 'Nà hái néng qù pǎo bù ma?', vi: 'Vậy còn đi chạy bộ được không?' },
    { who: 'B', hanzi: '可以，但是你自己去吧，我还有很多事情要做。', pinyin: 'Kěyǐ, dànshì nǐ zìjǐ qù ba, wǒ hái yǒu hěn duō shìqing yào zuò.', vi: 'Được, nhưng em tự đi nhé, anh còn nhiều việc phải làm.' },
    { who: 'A', hanzi: '你在这个商店买过东西没有？', pinyin: 'Nǐ zài zhège shāngdiàn mǎiguo dōngxi méiyǒu?', vi: 'Bạn đã mua đồ ở cửa hàng này chưa?', scene: 'Hội thoại 4 · ở cửa hàng' },
    { who: 'B', hanzi: '买过一次，这儿的东西还可以，就是不便宜。', pinyin: 'Mǎiguo yí cì, zhèr de dōngxi hái kěyǐ, jiùshì bù piányi.', vi: 'Mua một lần rồi, đồ ở đây cũng được, chỉ là không rẻ.' },
    { who: 'A', hanzi: '我喜欢这件衣服，但是觉得有点儿贵。', pinyin: 'Wǒ xǐhuan zhè jiàn yīfu, dànshì juéde yǒudiǎnr guì.', vi: 'Mình thích cái áo này, nhưng thấy hơi đắt.' },
    { who: 'B', hanzi: '两百块还可以，喜欢就买吧。', pinyin: 'Liǎngbǎi kuài hái kěyǐ, xǐhuan jiù mǎi ba.', vi: 'Hai trăm tệ cũng được mà, thích thì mua đi.' },
  ],
  dialogueClips: [
    { label: '14-1 · Hội thoại 1: 你看过那个电影没有？', src: A + 'l14-1.mp3' },
    { label: '14-2 · Hội thoại 2: 我虽然去过好几次', src: A + 'l14-2.mp3' },
    { label: '14-3 · Hội thoại 3: 虽然是晴天，但是很冷', src: A + 'l14-3.mp3' },
    { label: '14-4 · Hội thoại 4: 买过一次', src: A + 'l14-4.mp3' },
  ],
  dialogueTip: '<b>Động từ + 过</b>: đã từng làm gì (trải nghiệm trong quá khứ, không kéo dài đến hiện tại). Phủ định <b>没(有) + động từ + 过</b>; hỏi thêm <b>没有</b> cuối câu. <b>虽然……，但是……</b>: tuy… nhưng…. <b>Động từ + 过 + số + 次</b>: đã làm mấy lần.',
  slowSay: '你看过那个电影吗',

  vocab: [
    { hanzi: '过', pinyin: 'guo', pos: 'trợ từ', meaning: 'đã từng (chỉ trải nghiệm)', han_viet: 'quá' },
    { hanzi: '有意思', pinyin: 'yǒu yìsi', pos: 'tính từ', meaning: 'thú vị, hay', han_viet: '' },
    { hanzi: '但是', pinyin: 'dànshì', pos: 'liên từ', meaning: 'nhưng', han_viet: 'đãn thị' },
    { hanzi: '虽然', pinyin: 'suīrán', pos: 'liên từ', meaning: 'tuy, mặc dù', han_viet: 'tuy nhiên' },
    { hanzi: '次', parts: '冫 + 欠', pinyin: 'cì', pos: 'lượng từ', meaning: 'lần', han_viet: 'thứ' },
    { hanzi: '玩儿', pinyin: 'wánr', pos: 'động từ', meaning: 'chơi', han_viet: '' },
    { hanzi: '晴', parts: '日 + 青', pinyin: 'qíng', pos: 'tính từ', meaning: 'nắng, trời quang', han_viet: 'tình' },
    { hanzi: '百', pinyin: 'bǎi', pos: 'số từ', meaning: 'trăm', han_viet: 'bách' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Trợ từ 过', title: 'Trợ từ động thái 过',
      intro: 'Động từ + 过 thường chỉ một trải nghiệm đã có trong quá khứ, hành động không kéo dài đến hiện tại. Phủ định: thêm 没(有) trước động từ. Câu hỏi: thêm 没有 ở cuối câu.',
      groups: [
        { label: 'Khẳng định', items: [['他们来过我家。', 'Tāmen láiguo wǒ jiā.', 'Họ đã từng đến nhà tôi.'], ['我看过那个电影。', 'Wǒ kànguo nàge diànyǐng.', 'Tôi đã xem bộ phim đó.'], ['我去过中国。', 'Wǒ qùguo Zhōngguó.', 'Tôi đã từng đi Trung Quốc.']] },
        { label: 'Phủ định: 没(有) + động từ + 过', items: [['他们没（有）来过我家。', 'Tāmen méi(yǒu) láiguo wǒ jiā.', 'Họ chưa từng đến nhà tôi.'], ['我没（有）看过那个电影。', 'Wǒ méi(yǒu) kànguo nàge diànyǐng.', 'Tôi chưa xem bộ phim đó.'], ['我没（有）去过中国。', 'Wǒ méi(yǒu) qùguo Zhōngguó.', 'Tôi chưa từng đi Trung Quốc.']] },
        { label: 'Câu hỏi: …… 没有？', items: [['他们来过你家没有？', 'Tāmen láiguo nǐ jiā méiyǒu?', 'Họ đã đến nhà bạn chưa?'], ['你看过那个电影没有？', 'Nǐ kànguo nàge diànyǐng méiyǒu?', 'Bạn đã xem bộ phim đó chưa?'], ['你去过中国没有？', 'Nǐ qùguo Zhōngguó méiyǒu?', 'Bạn đã từng đi Trung Quốc chưa?']] },
      ],
    },
    {
      kind: 'examples', label: 'Bổ ngữ 次', title: 'Bổ ngữ động lượng 次',
      intro: '次 đặt sau động từ vị ngữ để chỉ số lần hành động xảy ra. Tân ngữ chỉ nơi chốn: 次 đứng trước hoặc sau tân ngữ đều được. Tân ngữ là đại từ nhân xưng: 次 phải đứng sau tân ngữ.',
      groups: [
        { label: 'Động từ + 过 + số + 次 + tân ngữ', items: [['我们看过三次电影。', 'Wǒmen kànguo sān cì diànyǐng.', 'Chúng tôi đã xem phim ba lần.'], ['他们坐过一次飞机。', 'Tāmen zuòguo yí cì fēijī.', 'Họ đã đi máy bay một lần.'], ['（我）（在这个商店）买过一次（东西）。', '(Wǒ) (zài zhège shāngdiàn) mǎiguo yí cì (dōngxi).', 'Tôi đã mua (đồ ở cửa hàng này) một lần.']] },
        { label: 'Tân ngữ nơi chốn: trước hay sau đều được', items: [['我们去过三次北京。', 'Wǒmen qùguo sān cì Běijīng.', 'Chúng tôi đã đi Bắc Kinh ba lần.'], ['我们去过北京三次。', 'Wǒmen qùguo Běijīng sān cì.', 'Chúng tôi đã đi Bắc Kinh ba lần.'], ['我（上星期）去过医院一次。', 'Wǒ (shàng xīngqī) qùguo yīyuàn yí cì.', 'Tôi (tuần trước) đã đến bệnh viện một lần.']] },
        { label: 'Tân ngữ là đại từ: 次 đứng sau', items: [['我们找过他三次。', 'Wǒmen zhǎoguo tā sān cì.', 'Chúng tôi đã tìm anh ấy ba lần.'], ['他们看过我一次。', 'Tāmen kànguo wǒ yí cì.', 'Họ đã đến thăm tôi một lần.'], ['老师叫过我两次。', 'Lǎoshī jiàoguo wǒ liǎng cì.', 'Thầy đã gọi tôi hai lần.']] },
      ],
    },
    {
      kind: 'examples', label: 'Ngữ điệu', title: 'Ngữ điệu câu cảm thán (感叹句)',
      clip: { label: '14-5 · Nghe và đọc theo (ngữ điệu)', src: A + 'l14-5.mp3' },
      intro: 'Câu cảm thán tiếng Hán thường hạ giọng ở cuối.',
      groups: [{ label: 'Hạ giọng ↘', items: [['今天天气真好啊！', 'Jīntiān tiānqì zhēn hǎo a! ↘', 'Hôm nay trời đẹp quá!'], ['这个汉字真难写啊！', 'Zhège Hànzì zhēn nán xiě a! ↘', 'Chữ Hán này khó viết thật!'], ['这件衣服太漂亮了！', 'Zhè jiàn yīfu tài piàoliang le! ↘', 'Cái áo này đẹp quá!']] }],
    },
    {
      kind: 'examples', label: 'Bộ thủ', title: 'Chữ Hán: bộ ⻗ và 贝',
      intro: 'Bộ ⻗ (vũ, mưa) thường liên quan đến hiện tượng thời tiết như mây, mưa; bộ 贝 (bối) thường liên quan đến tiền bạc, của cải.',
      groups: [{ label: 'Bộ ⻗ và 贝', items: [['雪', 'xuě', 'tuyết (bộ ⻗)'], ['雾', 'wù', 'sương mù (bộ ⻗)'], ['财', 'cái', 'của cải (bộ 贝)'], ['货', 'huò', 'hàng hóa (bộ 贝)']] }],
    },
  ],

  notes: [
    {
      title: 'Trợ từ động thái 过',
      body: 'Động từ + 过 chỉ trải nghiệm trong quá khứ, hành động không kéo dài đến hiện tại: 我看过那个电影。 Phủ định: 我没（有）看过那个电影。 Hỏi: 你看过那个电影没有？',
      say: '你看过那个电影没有',
    },
    {
      title: 'Cặp liên từ 虽然……，但是……',
      body: 'Nối hai vế câu tạo quan hệ chuyển ngoặt: 虽然外面很冷，但是房间里很热。 虽然汉字很难，但是我很喜欢写汉字。 虽然是晴天，但是很冷。',
      say: '虽然是晴天，但是很冷',
    },
    {
      title: 'Bổ ngữ động lượng 次',
      body: 'Động từ + 过 + số + 次 chỉ số lần: 我们看过三次电影。 Tân ngữ nơi chốn: 去过三次北京 / 去过北京三次. Tân ngữ là đại từ: 次 đứng sau đại từ: 找过他三次.',
      say: '我们去过北京三次',
    },
    {
      title: 'Ngữ điệu câu cảm thán',
      body: 'Câu cảm thán thường hạ giọng ở cuối: 今天天气真好啊！↘',
      say: '今天天气真好啊',
    },
  ],

  writeChars: ['过', '虽', '然', '但', '次', '晴'],

  drills: [
    {
      title: 'Nói về trải nghiệm (练习 3, sách trang 110–111)',
      hint: 'Bấm để nghe, rồi tự đặt câu tương tự.',
      items: [
        { h: '你以前吃过这种水果吗？', p: 'Nǐ yǐqián chīguo zhè zhǒng shuǐguǒ ma?', m: 'Trước đây bạn đã ăn loại quả này chưa?' },
        { h: '我去年见过你姐姐一次。', p: 'Wǒ qùnián jiànguo nǐ jiějie yí cì.', m: 'Năm ngoái tôi đã gặp chị bạn một lần.' },
        { h: '虽然天气很冷，但是他还去游泳。', p: 'Suīrán tiānqì hěn lěng, dànshì tā hái qù yóu yǒng.', m: 'Tuy trời lạnh nhưng anh ấy vẫn đi bơi.' },
        { h: '虽然英语很难，但是他很喜欢。', p: 'Suīrán Yīngyǔ hěn nán, dànshì tā hěn xǐhuan.', m: 'Tuy tiếng Anh khó nhưng anh ấy rất thích.' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 110)',
      items: [
        { q: '他们看过那个电影吗？', hint: '没看过，听说很有意思。' },
        { q: '他们想几个人去看电影？', hint: '三个人（还有他的女朋友）。' },
        { q: '他们想来中国做什么？', hint: '想再去中国玩儿玩儿。' },
        { q: '为什么她明天不能去跑步？', hint: '因为她还有很多事情要做。' },
        { q: '女的觉得这个商店的东西怎么样？', hint: '还可以，就是不便宜。' },
      ],
    },
  ],

  sentences: [
    { parts: ['你', '看', '过', '那', '个', '电影', '没有'], pinyin: 'Nǐ kànguo nàge diànyǐng méiyǒu?', vi: 'Bạn xem bộ phim đó chưa?' },
    { parts: ['没', '看', '过', '，', '听说', '很', '有意思'], pinyin: 'Méi kànguo, tīngshuō hěn yǒu yìsi.', vi: 'Chưa xem, nghe nói hay lắm.' },
    { parts: ['我', '虽然', '去', '过', '好', '几', '次', '，', '但是', '还', '想', '再', '去'], pinyin: 'Wǒ suīrán qùguo hǎo jǐ cì, dànshì hái xiǎng zài qù.', vi: 'Tuy tôi đã đi mấy lần nhưng vẫn muốn đi nữa.' },
    { parts: ['虽然', '是', '晴天', '，', '但是', '很', '冷'], pinyin: 'Suīrán shì qíngtiān, dànshì hěn lěng.', vi: 'Tuy trời nắng nhưng rất lạnh.' },
    { parts: ['买', '过', '一', '次', '，', '就是', '不', '便宜'], pinyin: 'Mǎiguo yí cì, jiùshì bù piányi.', vi: 'Mua một lần rồi, chỉ là không rẻ.' },
    { parts: ['两', '百', '块', '还', '可以', '，', '喜欢', '就', '买', '吧'], pinyin: 'Liǎngbǎi kuài hái kěyǐ, xǐhuan jiù mǎi ba.', vi: 'Hai trăm tệ cũng được, thích thì mua đi.' },
  ],

  dictations: [
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 11–15)',
      hint: 'Nghe đoạn ghi âm (14-1, phần 3), chọn A, B hoặc C. Câu 11: A 一次 · B 两次 · C 三次. Câu 12: A 东西好，便宜 · B 东西不好，便宜 · C 东西好，不便宜. Câu 13: A 太忙 · B 太累 · C 不喜欢跑步. Câu 14: A 前天的 · B 今天的 · C 昨天的. Câu 15: A 不想让女的买 · B 想让女的买 · C 两百多块太贵了.',
      clip: { label: '14-1 · Sách bài tập, phần nghe', src: A + 'w14-1.mp3' },
      items: [
        { prompt: 'Câu 11', answer: 'B', gloss: '两次' }, { prompt: 'Câu 12', answer: 'C', gloss: '东西好，不便宜' },
        { prompt: 'Câu 13', answer: 'A', gloss: '太忙' }, { prompt: 'Câu 14', answer: 'C', gloss: '昨天的' },
        { prompt: 'Câu 15', answer: 'B', gloss: '想让女的买' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ (câu 21–25)',
      hint: 'A 有意思 · B 但是 · C 意思 · D 过 · E 贵 · F 听说. Gõ chữ cái A–F.',
      items: [
        { prompt: '老师的话是什么（ ），我没听懂。', answer: 'C', gloss: '意思' }, { prompt: '我（ ）这本书非常好看，但是我还没看过。', answer: 'F', gloss: '听说' },
        { prompt: '那个电影太（ ）了，我已经看过两次了。', answer: 'A', gloss: '有意思' }, { prompt: '虽然工作很忙，（ ）我每个星期都要运动。', answer: 'B', gloss: '但是' },
        { prompt: '我已经去（ ）北京好几次了，但是还想再去玩儿玩儿。', answer: 'D', gloss: '过' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, đúng hay sai (câu 26–30)',
      hint: 'Đọc câu cho sẵn rồi xét câu có dấu * đúng (gõ D) hay sai (gõ S).',
      items: [
        { prompt: '昨天和朋友们在外面玩儿了一个晚上，很累，但是非常高兴。* 昨天玩儿得不好。', answer: 'S', gloss: 'Sai' },
        { prompt: '他做的菜比我做的好吃，但是因为工作忙，他很少做。* 他不会做菜。', answer: 'S', gloss: 'Sai' },
        { prompt: '我和朋友们去过这家商店，还在这儿买过两次东西。* 这个商店他去过两次。', answer: 'S', gloss: 'Sai' },
        { prompt: '从学校到机场，坐出租车要一个小时，我们10点的飞机，8点从学校走可以吗？* 他们要坐8点的飞机。', answer: 'S', gloss: 'Sai' },
        { prompt: '小李说这个电影很有意思，但是他没看过。* 小李看过这个电影。', answer: 'D', gloss: 'Đúng (theo đáp án sách)' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu (câu 31–35)',
      hint: 'A 你出去的时候多穿些衣服。 B 你在那个商店买过东西没有？ C 妈妈告诉过我很多次，长时间玩儿电脑和手机对眼睛不好。 D 没学过，听说很难，但是很有意思。 E 他在哪儿呢？你看见他了吗？ F 没关系，喜欢就买吧。 Gõ chữ cái A–F.',
      items: [
        { prompt: '你学过汉语吗？', answer: 'D', gloss: '没学过，听说很难，但是很有意思。' }, { prompt: '今天真冷，第一次到了零下10度。', answer: 'A', gloss: '你出去的时候多穿些衣服。' },
        { prompt: '所以我现在很少玩儿电脑和手机了。', answer: 'C', gloss: '妈妈告诉过我很多次……' }, { prompt: '我很喜欢这件衣服，但是觉得有点儿贵。', answer: 'F', gloss: '没关系，喜欢就买吧。' },
        { prompt: '东西还可以，而且很便宜。', answer: 'B', gloss: '你在那个商店买过东西没有？' },
      ],
    },
  ],
}
