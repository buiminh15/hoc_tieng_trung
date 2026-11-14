import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 2, Bài 12: 你穿得太少了 (sách trang 89–96).
 * Sách bản Trung–Anh; phần tiếng Việt do app dịch.
 * Nghe: 12-1…12-5. Sách bài tập (trang 113–120, đáp án trang 23–24).
 */

const A = '/audio/hsk-std2/'

export const hskStd2Lesson12: Lesson = {
  id: 12,
  title: 'Bạn mặc ít quá',
  hanzi: '你穿得太少了',
  pinyin: 'Nǐ chuān de tài shǎo le',
  vi: 'Bạn mặc ít quá',
  intro: 'Nhận xét về cách làm việc gì: 我睡得也早。 你穿得太少了。 Học bổ ngữ trạng thái với 得 (khẳng định, phủ định, câu hỏi, có tân ngữ), câu chữ 比 (2) với bổ ngữ trạng thái; ngữ điệu câu hỏi lựa chọn (还是); bộ 止 và 冂.',

  dialogue: [
    { who: 'A', hanzi: '你每天早上几点起床？', pinyin: 'Nǐ měi tiān zǎoshang jǐ diǎn qǐ chuáng?', vi: 'Sáng nào bạn cũng dậy lúc mấy giờ?', scene: 'Hội thoại 1 · trong lớp học' },
    { who: 'B', hanzi: '六点多。', pinyin: 'Liù diǎn duō.', vi: 'Hơn sáu giờ.' },
    { who: 'A', hanzi: '你比我早起一个小时。', pinyin: 'Nǐ bǐ wǒ zǎo qǐ yí ge xiǎoshí.', vi: 'Bạn dậy sớm hơn mình một tiếng.' },
    { who: 'B', hanzi: '我睡得也早，我每天晚上十点就睡觉。早睡早起身体好。', pinyin: 'Wǒ shuì de yě zǎo, wǒ měi tiān wǎnshang shí diǎn jiù shuì jiào. Zǎo shuì zǎo qǐ shēntǐ hǎo.', vi: 'Mình cũng ngủ sớm, tối nào 10 giờ là đi ngủ. Ngủ sớm dậy sớm thì khỏe.' },
    { who: 'A', hanzi: '再来点儿米饭吧，你吃得太少了。', pinyin: 'Zài lái diǎnr mǐfàn ba, nǐ chī de tài shǎo le.', vi: 'Ăn thêm chút cơm đi, anh ăn ít quá.', scene: 'Hội thoại 2 · ở nhà bạn' },
    { who: 'B', hanzi: '不少了，今天吃得很好，太谢谢你了。', pinyin: 'Bù shǎo le, jīntiān chī de hěn hǎo, tài xièxie nǐ le.', vi: 'Không ít đâu, hôm nay ăn ngon lắm, cảm ơn chị nhiều.' },
    { who: 'A', hanzi: '你做饭做得怎么样？', pinyin: 'Nǐ zuò fàn zuò de zěnmeyàng?', vi: 'Anh nấu ăn thế nào?' },
    { who: 'B', hanzi: '不怎么样，我妻子比我做得好。', pinyin: 'Bù zěnmeyàng, wǒ qīzi bǐ wǒ zuò de hǎo.', vi: 'Không giỏi lắm, vợ tôi nấu ngon hơn tôi.' },
    { who: 'A', hanzi: '下雪了，今天真冷。', pinyin: 'Xià xuě le, jīntiān zhēn lěng.', vi: 'Tuyết rơi rồi, hôm nay lạnh thật.', scene: 'Hội thoại 3 · trước cửa nhà' },
    { who: 'B', hanzi: '有零下10度吧？', pinyin: 'Yǒu líng xià shí dù ba?', vi: 'Chắc âm 10 độ nhỉ?' },
    { who: 'A', hanzi: '是啊，你穿得太少了，我们进房间吧。', pinyin: 'Shì a, nǐ chuān de tài shǎo le, wǒmen jìn fángjiān ba.', vi: 'Đúng vậy, anh mặc ít quá, mình vào phòng đi.' },
    { who: 'B', hanzi: '好吧。', pinyin: 'Hǎo ba.', vi: 'Được.' },
    { who: 'A', hanzi: '你在忙什么呢？', pinyin: 'Nǐ zài máng shénme ne?', vi: 'Bạn đang bận gì thế?', scene: 'Hội thoại 4 · ở nhà' },
    { who: 'B', hanzi: '我弟弟让我帮他找个房子，现在他家离公司有点儿远。', pinyin: 'Wǒ dìdi ràng wǒ bāng tā zhǎo ge fángzi, xiànzài tā jiā lí gōngsī yǒudiǎnr yuǎn.', vi: 'Em trai mình nhờ tìm giúp một căn nhà, nhà nó bây giờ hơi xa công ty.' },
    { who: 'A', hanzi: '住得远真的很累！', pinyin: 'Zhù de yuǎn zhēn de hěn lèi!', vi: 'Ở xa đúng là mệt thật!' },
    { who: 'B', hanzi: '是啊，他也希望能住得近一点儿。', pinyin: 'Shì a, tā yě xīwàng néng zhù de jìn yìdiǎnr.', vi: 'Đúng vậy, nó cũng mong ở gần hơn một chút.' },
  ],
  dialogueClips: [
    { label: '12-1 · Hội thoại 1: 我睡得也早', src: A + 'l12-1.mp3' },
    { label: '12-2 · Hội thoại 2: 你吃得太少了', src: A + 'l12-2.mp3' },
    { label: '12-3 · Hội thoại 3: 你穿得太少了', src: A + 'l12-3.mp3' },
    { label: '12-4 · Hội thoại 4: 住得远真的很累', src: A + 'l12-4.mp3' },
  ],
  dialogueTip: '<b>Động từ + 得 + tính từ</b>: nhận xét cách làm (说得很好, 起得很早). Có tân ngữ thì lặp động từ hoặc đưa tân ngữ lên trước: <b>(说)汉语说得很好</b>. Phủ định đặt <b>不</b> sau 得: 说得不好. Hỏi: <b>得 + tính từ + 不 + tính từ</b>: 说得好不好？',
  slowSay: '你穿得太少了',

  vocab: [
    { hanzi: '得', pinyin: 'de', pos: 'trợ từ', meaning: 'dùng sau động từ / tính từ để nối bổ ngữ trạng thái, mức độ', han_viet: 'đắc' },
    { hanzi: '妻子', parts: '妻 (thê) + 子', pinyin: 'qīzi', pos: 'danh từ', meaning: 'vợ', han_viet: 'thê tử' },
    { hanzi: '雪', parts: '雨 + 彐', pinyin: 'xuě', pos: 'danh từ', meaning: 'tuyết', han_viet: 'tuyết' },
    { hanzi: '零', parts: '雨 + 令', pinyin: 'líng', pos: 'số từ', meaning: 'không (số 0)', han_viet: 'linh' },
    { hanzi: '度', pinyin: 'dù', pos: 'lượng từ', meaning: 'độ. Từ ngoài đại cương HSK 2 (dấu * trong sách)', han_viet: 'độ' },
    { hanzi: '穿', parts: '穴 + 牙', pinyin: 'chuān', pos: 'động từ', meaning: 'mặc, đi (giày)', han_viet: 'xuyên' },
    { hanzi: '进', parts: '辶 + 井', pinyin: 'jìn', pos: 'động từ', meaning: 'vào', han_viet: 'tiến' },
    { hanzi: '弟弟', pinyin: 'dìdi', pos: 'danh từ', meaning: 'em trai', han_viet: 'đệ đệ' },
    { hanzi: '近', parts: '辶 + 斤', pinyin: 'jìn', pos: 'tính từ', meaning: 'gần', han_viet: 'cận' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Bổ ngữ trạng thái', title: 'Bổ ngữ trạng thái (状态补语)',
      intro: 'Bổ ngữ trạng thái miêu tả hoặc đánh giá kết quả, mức độ, trạng thái của hành động; thường nối với động từ bằng trợ từ kết cấu 得.',
      groups: [
        { label: 'Động từ + 得 + tính từ', items: [['他说得很好。', 'Tā shuō de hěn hǎo.', 'Anh ấy nói rất giỏi.'], ['我起得很早。', 'Wǒ qǐ de hěn zǎo.', 'Tôi dậy rất sớm.'], ['我睡得也早。', 'Wǒ shuì de yě zǎo.', 'Tôi cũng ngủ sớm.']] },
        { label: 'Có tân ngữ: (động từ +) tân ngữ + động từ + 得', items: [['他（说）汉语说得很好。', 'Tā (shuō) Hànyǔ shuō de hěn hǎo.', 'Anh ấy nói tiếng Hán rất giỏi.'], ['我（写）汉字写得很好。', 'Wǒ (xiě) Hànzì xiě de hěn hǎo.', 'Tôi viết chữ Hán rất đẹp.'], ['姐姐（唱）歌唱得不错。', 'Jiějie (chàng) gē chàng de búcuò.', 'Chị hát khá hay.']] },
        { label: 'Phủ định: 得 + 不 + tính từ', items: [['他说得不好。', 'Tā shuō de bù hǎo.', 'Anh ấy nói không giỏi.'], ['我起得不早。', 'Wǒ qǐ de bù zǎo.', 'Tôi dậy không sớm.'], ['我住得不远。', 'Wǒ zhù de bù yuǎn.', 'Tôi ở không xa.']] },
        { label: 'Câu hỏi: 得 + tính từ + 不 + tính từ', items: [['他说得好不好？', 'Tā shuō de hǎo bu hǎo?', 'Anh ấy nói có giỏi không?'], ['姐姐起得早不早？', 'Jiějie qǐ de zǎo bu zǎo?', 'Chị dậy có sớm không?'], ['你住得远不远？', 'Nǐ zhù de yuǎn bu yuǎn?', 'Bạn ở có xa không?']] },
      ],
    },
    {
      kind: 'examples', label: 'Câu chữ 比 (2)', title: 'Câu chữ 比 (2): với bổ ngữ trạng thái',
      intro: 'Khi động từ mang bổ ngữ trạng thái, 比 có thể đặt trước động từ hoặc trước bổ ngữ.',
      groups: [
        { label: 'A 比 B + động từ + 得 + tính từ', items: [['他比我学得好。', 'Tā bǐ wǒ xué de hǎo.', 'Anh ấy học tốt hơn tôi.'], ['姐姐比我跑得快。', 'Jiějie bǐ wǒ pǎo de kuài.', 'Chị chạy nhanh hơn tôi.'], ['我妻子比我做得好。', 'Wǒ qīzi bǐ wǒ zuò de hǎo.', 'Vợ tôi nấu ngon hơn tôi.']] },
        { label: 'A + động từ + 得 + 比 B + tính từ', items: [['他学得比我好。', 'Tā xué de bǐ wǒ hǎo.', 'Anh ấy học tốt hơn tôi.'], ['姐姐跑得比我快。', 'Jiějie pǎo de bǐ wǒ kuài.', 'Chị chạy nhanh hơn tôi.'], ['我妻子做得比我好。', 'Wǒ qīzi zuò de bǐ wǒ hǎo.', 'Vợ tôi nấu ngon hơn tôi.']] },
      ],
    },
    {
      kind: 'examples', label: 'Ngữ điệu', title: 'Ngữ điệu câu hỏi lựa chọn (选择问句)',
      clip: { label: '12-5 · Nghe và đọc theo (ngữ điệu)', src: A + 'l12-5.mp3' },
      intro: 'Các phần để lựa chọn được nhấn; phần trước đọc hơi lên giọng, chậm; phần sau xuống giọng.',
      groups: [{ label: '…… 还是 ……？', items: [['你喜欢吃米饭还是吃面条？', 'Nǐ xǐhuan chī mǐfàn háishi chī miàntiáo? ↘', 'nhấn 米饭 / 面条'], ['你想今天去还是明天去？', 'Nǐ xiǎng jīntiān qù háishi míngtiān qù? ↘', 'nhấn 今天 / 明天'], ['你去学校是开车还是坐车？', 'Nǐ qù xuéxiào shì kāi chē háishi zuò chē? ↘', 'nhấn 开车 / 坐车']] }],
    },
    {
      kind: 'examples', label: 'Bộ thủ', title: 'Chữ Hán: bộ 止 và 冂',
      intro: 'Bộ 止 (chỉ) thường liên quan đến ngón chân, bàn chân; bộ 冂 (quynh) thường liên quan đến quan hệ hoặc hình dạng của sự vật.',
      groups: [{ label: 'Bộ 止 và 冂', items: [['趾', 'zhǐ', 'ngón chân (bộ 止)'], ['步', 'bù', 'bước (bộ 止)'], ['同', 'tóng', 'giống (bộ 冂)'], ['网', 'wǎng', 'lưới (bộ 冂)']] }],
    },
  ],

  notes: [
    {
      title: 'Bổ ngữ trạng thái với 得',
      body: 'Động từ + 得 + tính từ miêu tả hoặc đánh giá hành động: 他说得很好。 Có tân ngữ thì lặp động từ hoặc đưa tân ngữ lên trước: 他（说）汉语说得很好。 Phủ định đặt 不 sau 得: 他说得不好。 Hỏi: 他说得好不好？',
      say: '他汉语说得很好',
    },
    {
      title: 'Câu chữ 比 (2)',
      body: 'Với bổ ngữ trạng thái, 比 đứng trước động từ (他比我学得好) hoặc trước bổ ngữ (他学得比我好), nghĩa như nhau.',
      say: '我妻子比我做得好',
    },
    {
      title: 'Ngữ điệu câu hỏi lựa chọn',
      body: 'Câu hỏi dùng 还是: nhấn các phần lựa chọn, phần trước hơi lên giọng và chậm, phần sau xuống giọng.',
      say: '你喜欢吃米饭还是吃面条',
    },
  ],

  writeChars: ['得', '雪', '零', '穿', '进', '近'],

  drills: [
    {
      title: 'Nói câu với 得 (运用 1, sách trang 95)',
      hint: 'Mẫu: 他跑得很快。 我跑得不快。 Dùng động từ 学 走 写 读 下 起床 睡觉 准备 và tính từ 好 快 漂亮 不错 慢 大.',
      items: [
        { h: '他跑得很快。', p: 'Tā pǎo de hěn kuài.', m: 'Anh ấy chạy rất nhanh.' },
        { h: '我跑得不快。', p: 'Wǒ pǎo de bú kuài.', m: 'Tôi chạy không nhanh.' },
        { h: '她写得很漂亮。', p: 'Tā xiě de hěn piàoliang.', m: 'Cô ấy viết rất đẹp.' },
        { h: '雪下得很大。', p: 'Xuě xià de hěn dà.', m: 'Tuyết rơi rất dày.' },
        { h: '他走得很慢。', p: 'Tā zǒu de hěn màn.', m: 'Anh ấy đi rất chậm.' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 94)',
      items: [
        { q: '她为什么每天晚上十点就睡觉？', hint: '因为早睡早起身体好。' },
        { q: '他们家谁做饭做得好？', hint: '他妻子做饭做得好。' },
        { q: '今天天气怎么样？', hint: '下雪了，很冷，有零下10度。' },
        { q: '她这两天在忙什么呢？', hint: '在帮弟弟找房子。' },
        { q: '她弟弟为什么要找新的房子？', hint: '因为现在他家离公司有点儿远。' },
      ],
    },
  ],

  sentences: [
    { parts: ['你', '比', '我', '早', '起', '一', '个', '小时'], pinyin: 'Nǐ bǐ wǒ zǎo qǐ yí ge xiǎoshí.', vi: 'Bạn dậy sớm hơn mình một tiếng.' },
    { parts: ['我', '睡', '得', '也', '早'], pinyin: 'Wǒ shuì de yě zǎo.', vi: 'Mình cũng ngủ sớm.' },
    { parts: ['你', '吃', '得', '太', '少', '了'], pinyin: 'Nǐ chī de tài shǎo le.', vi: 'Anh ăn ít quá.' },
    { parts: ['我', '妻子', '比', '我', '做', '得', '好'], pinyin: 'Wǒ qīzi bǐ wǒ zuò de hǎo.', vi: 'Vợ tôi nấu ngon hơn tôi.' },
    { parts: ['你', '穿', '得', '太', '少', '了'], pinyin: 'Nǐ chuān de tài shǎo le.', vi: 'Anh mặc ít quá.' },
    { parts: ['他', '也', '希望', '能', '住', '得', '近', '一点儿'], pinyin: 'Tā yě xīwàng néng zhù de jìn yìdiǎnr.', vi: 'Nó cũng mong ở gần hơn một chút.' },
  ],

  dictations: [
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 11–15)',
      hint: 'Nghe đoạn ghi âm (12-1, phần 3), chọn A, B hoặc C. Câu 11: A 学习好 · B 太累了 · C 对身体好. Câu 12: A 很冷 · B 不太冷 · C 很热. Câu 13: A 男的 · B 男的的妻子 · C 女的. Câu 14: A 离公司远 · B 工作太累 · C 离家有点儿远. Câu 15: A 不太好 · B 非常好 · C 还可以.',
      clip: { label: '12-1 · Sách bài tập, phần nghe', src: A + 'w12-1.mp3' },
      items: [
        { prompt: 'Câu 11', answer: 'C', gloss: '对身体好' }, { prompt: 'Câu 12', answer: 'A', gloss: '很冷' },
        { prompt: 'Câu 13', answer: 'B', gloss: '男的的妻子' }, { prompt: 'Câu 14', answer: 'A', gloss: '离公司远' },
        { prompt: 'Câu 15', answer: 'C', gloss: '还可以' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ (câu 21–25)',
      hint: 'A 穿 · B 进 · C 近 · D 让 · E 贵 · F 希望. Gõ chữ cái A–F.',
      items: [
        { prompt: '他的家比我的家离公司（ ）一点儿。', answer: 'C', gloss: '近' }, { prompt: '我（ ）找一个比现在钱多一点儿的工作。', answer: 'F', gloss: '希望' },
        { prompt: '外面太冷了，快请（ ）房间里来吧。', answer: 'B', gloss: '进' }, { prompt: '明天有一个新年晚会，我想（ ）得漂亮一点儿。', answer: 'A', gloss: '穿' },
        { prompt: '大卫生病了，他（ ）我告诉王老师。', answer: 'D', gloss: '让' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, đúng hay sai (câu 26–30)',
      hint: 'Đọc câu cho sẵn rồi xét câu có dấu * đúng (gõ D) hay sai (gõ S).',
      items: [
        { prompt: '今年没有去年冷，北京到现在还没下雪呢。去年这个时候已经下雪了。* 北京今年比去年冷。', answer: 'S', gloss: 'Sai' },
        { prompt: '你上个月没有怎么运动吧？明天和我一起去踢足球怎么样？打篮球也可以。* 他们可能明天一起运动。', answer: 'D', gloss: 'Đúng' },
        { prompt: '妻子每天睡觉前都要喝一杯牛奶，她说这样可以睡得好一些。* 妻子起床后要喝牛奶。', answer: 'S', gloss: 'Sai' },
        { prompt: '谢谢你，没有您的帮助，这件事情可能到今天晚上也做不完。* 事情已经做完了。', answer: 'D', gloss: 'Đúng' },
        { prompt: '慢一点儿，你走得太快了，我们去那个茶馆喝杯茶好不好？* 他想去喝茶。', answer: 'D', gloss: 'Đúng' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu (câu 31–35)',
      hint: 'A 路上车太多，坐公共汽车还没有走路快呢。 B 上个星期怎么没看到你？ C 天气太冷了，都零下十度了。 D 他比我游得快，但是没有大卫游得快。 E 他在哪儿呢？你看见他了吗？ F 住得远真的很累。 Gõ chữ cái A–F.',
      items: [
        { prompt: '你今天怎么穿得这么多？', answer: 'C', gloss: '天气太冷了，都零下十度了。' }, { prompt: '我每天要坐一个多小时的公共汽车去上班。', answer: 'F', gloss: '住得远真的很累。' },
        { prompt: '小王每天都游泳，他游得快吗？', answer: 'D', gloss: '他比我游得快……' }, { prompt: '你每天坐公共汽车去学校吗？', answer: 'A', gloss: '路上车太多……' },
        { prompt: '我和妻子一起去北京旅游了几天。', answer: 'B', gloss: '上个星期怎么没看到你？' },
      ],
    },
  ],
}
