import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 3, Bài 5: 我最近越来越胖了。 (sách trang 53–60).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách.
 * Nghe: 05-1…05-5. Bài tập: 练习 2–4 của giáo trình, đáp án theo "Đáp án giáo trình HSK 3" trang 9–10.
 */

const A = '/audio/hsk-std3/'

export const hskStd3Lesson5: Lesson = {
  id: 5,
  title: 'Dạo này tôi ngày càng béo',
  hanzi: '我最近越来越胖了。',
  pinyin: 'Wǒ zuìjìn yuè lái yuè pàng le.',
  vi: 'Dạo này tôi ngày càng béo',
  intro: 'Nói về sức khỏe, mùa và sự thay đổi. Học trợ từ 了 chỉ sự thay đổi, cấu trúc 越来越 + tính từ/động từ chỉ trạng thái tâm lý; chữ hội ý (会意字).',

  dialogue: [
    { who: 'A', name: '朋友', hanzi: '我听说你身体不舒服，怎么了？', pinyin: 'Wǒ tīngshuō nǐ shēntǐ bù shūfu, zěnme le?', vi: 'Nghe nói bạn không khỏe, sao vậy?', scene: 'Hội thoại 1 · Tại nhà chị Lệ' },
    { who: 'B', name: '小丽', hanzi: '前几天有点儿发烧，现在好多了。', pinyin: 'Qián jǐ tiān yǒudiǎnr fā shāo, xiànzài hǎo duō le.', vi: 'Mấy hôm trước hơi sốt, giờ đỡ nhiều rồi.' },
    { who: 'A', name: '朋友', hanzi: '喝杯茶吧，这是我为你买的绿茶，很不错。', pinyin: 'Hē bēi chá ba, zhè shì wǒ wèi nǐ mǎi de lǜchá, hěn búcuò.', vi: 'Uống cốc trà đi, đây là trà xanh mình mua cho bạn, ngon lắm.' },
    { who: 'B', name: '小丽', hanzi: '谢谢，我要吃药，不喝茶了。', pinyin: 'Xièxie, wǒ yào chī yào, bù hē chá le.', vi: 'Cảm ơn, mình phải uống thuốc, không uống trà nữa.' },
    { who: 'A', name: '朋友', hanzi: '那喝杯水吧。', pinyin: 'Nà hē bēi shuǐ ba.', vi: 'Vậy uống cốc nước đi.' },
    { who: 'B', name: '小丽', hanzi: '好的。', pinyin: 'Hǎo de.', vi: 'Được.' },
    { who: 'A', name: '周太太', hanzi: '对不起，我明天不能和你们出去玩儿了。', pinyin: 'Duìbuqǐ, wǒ míngtiān bù néng hé nǐmen chūqu wánr le.', vi: 'Xin lỗi, mai tôi không đi chơi với các chị được nữa.', scene: 'Hội thoại 2 · Nói chuyện qua điện thoại' },
    { who: 'B', name: '张太太', hanzi: '为什么？怎么了？', pinyin: 'Wèi shénme? Zěnme le?', vi: 'Tại sao? Có chuyện gì vậy?' },
    { who: 'A', name: '周太太', hanzi: '我儿子生病了，我要在家照顾他。', pinyin: 'Wǒ érzi shēng bìng le, wǒ yào zài jiā zhàogù tā.', vi: 'Con trai tôi bị ốm, tôi phải ở nhà chăm sóc nó.' },
    { who: 'B', name: '张太太', hanzi: '他吃药了吗？要不要去医院？', pinyin: 'Tā chī yào le ma? Yào bu yào qù yīyuàn?', vi: 'Cháu uống thuốc chưa? Có cần đi bệnh viện không?' },
    { who: 'A', name: '周太太', hanzi: '不用去医院，昨天吃了感冒药，现在好一些了。', pinyin: 'Búyòng qù yīyuàn, zuótiān chīle gǎnmào yào, xiànzài hǎo yìxiē le.', vi: 'Không cần đi bệnh viện, hôm qua uống thuốc cảm rồi, giờ đỡ hơn một chút rồi.' },
    { who: 'B', name: '张太太', hanzi: '那我们下次再一起出去玩儿吧。', pinyin: 'Nà wǒmen xià cì zài yìqǐ chūqu wánr ba.', vi: 'Vậy lần sau chúng ta lại cùng đi chơi nhé.' },
    { who: 'A', name: '小丽', hanzi: '你最喜欢哪个季节？', pinyin: 'Nǐ zuì xǐhuan nǎge jìjié?', vi: 'Anh thích mùa nào nhất?', scene: 'Hội thoại 3 · Tại nhà anh Cương' },
    { who: 'B', name: '小刚', hanzi: '当然是春天，天气不那么冷了，草和树都绿了，花也开了。', pinyin: 'Dāngrán shì chūntiān, tiānqì bú nàme lěng le, cǎo hé shù dōu lǜ le, huā yě kāi le.', vi: 'Đương nhiên là mùa xuân, trời không lạnh lắm nữa, cỏ cây đều xanh, hoa cũng nở rồi.' },
    { who: 'A', name: '小丽', hanzi: '我最喜欢夏天，因为我可以穿漂亮的裙子了。', pinyin: 'Wǒ zuì xǐhuan xiàtiān, yīnwèi wǒ kěyǐ chuān piàoliang de qúnzi le.', vi: 'Em thích mùa hè nhất, vì em được mặc váy đẹp.' },
    { who: 'B', name: '小刚', hanzi: '那我也喜欢夏天了。', pinyin: 'Nà wǒ yě xǐhuan xiàtiān le.', vi: 'Vậy anh cũng thích mùa hè rồi.' },
    { who: 'A', name: '小丽', hanzi: '怎么？你也有漂亮的裙子？', pinyin: 'Zěnme? Nǐ yě yǒu piàoliang de qúnzi?', vi: 'Sao? Anh cũng có váy đẹp à?' },
    { who: 'B', name: '小刚', hanzi: '不，我喜欢看你穿漂亮的裙子。', pinyin: 'Bù, wǒ xǐhuan kàn nǐ chuān piàoliang de qúnzi.', vi: 'Không, anh thích ngắm em mặc váy đẹp.' },
    { who: 'A', name: '小丽', hanzi: '我最近越来越胖了。', pinyin: 'Wǒ zuìjìn yuè lái yuè pàng le.', vi: 'Dạo này em ngày càng béo.', scene: 'Hội thoại 4 · Tại nhà anh Cương' },
    { who: 'B', name: '小刚', hanzi: '谁说的？我觉得你越来越漂亮了。', pinyin: 'Shéi shuō de? Wǒ juéde nǐ yuè lái yuè piàoliang le.', vi: 'Ai nói thế? Anh thấy em ngày càng xinh.' },
    { who: 'A', name: '小丽', hanzi: '你看，这条裙子是去年买的，今年就不能穿了。', pinyin: 'Nǐ kàn, zhè tiáo qúnzi shì qùnián mǎi de, jīnnián jiù bù néng chuān le.', vi: 'Anh xem, cái váy này mua năm ngoái, năm nay đã không mặc được nữa rồi.' },
    { who: 'B', name: '小刚', hanzi: '那是因为你吃得太多了，少吃点儿吧。', pinyin: 'Nà shì yīnwèi nǐ chī de tài duō le, shǎo chī diǎnr ba.', vi: 'Đó là vì em ăn nhiều quá, ăn ít đi.' },
    { who: 'A', name: '小丽', hanzi: '我做的饭越来越好吃，我能少吃吗？', pinyin: 'Wǒ zuò de fàn yuè lái yuè hǎochī, wǒ néng shǎo chī ma?', vi: 'Em nấu ăn ngày càng ngon, em ăn ít được sao?' },
  ],
  dialogueClips: [
    { label: '05-1 · Tại nhà chị Lệ', src: A + 'l05-1.mp3' },
    { label: '05-2 · Nói chuyện qua điện thoại', src: A + 'l05-2.mp3' },
    { label: '05-3 · Tại nhà anh Cương', src: A + 'l05-3.mp3' },
    { label: '05-4 · Tại nhà anh Cương', src: A + 'l05-4.mp3' },
  ],
  dialogueTip: '<b>了</b> cuối câu trần thuật chỉ sự thay đổi hoặc tình huống mới (花也开了, 今年就不能穿了). <b>越来越 + tính từ / động từ tâm lý</b>: ngày càng… Lưu ý KHÔNG thêm phó từ mức độ sau 越来越: không nói 越来越很热.',
  slowSay: '我最近越来越胖了',

  vocab: [
    { hanzi: '发烧', pinyin: 'fā shāo', pos: 'động từ', meaning: 'sốt', han_viet: 'phát thiêu' },
    { hanzi: '为', pinyin: 'wèi', pos: 'giới từ', meaning: 'cho', han_viet: 'vị' },
    { hanzi: '照顾', pinyin: 'zhàogù', pos: 'động từ', meaning: 'chăm sóc', han_viet: 'chiếu cố' },
    { hanzi: '用', pinyin: 'yòng', pos: 'động từ', meaning: 'cần', han_viet: 'dụng' },
    { hanzi: '感冒', pinyin: 'gǎnmào', pos: 'động từ', meaning: 'bị cảm', han_viet: 'cảm mạo' },
    { hanzi: '季节', pinyin: 'jìjié', pos: 'danh từ', meaning: 'mùa', han_viet: 'quý tiết' },
    { hanzi: '当然', pinyin: 'dāngrán', pos: 'phó từ', meaning: 'đương nhiên, dĩ nhiên', han_viet: 'đương nhiên' },
    { hanzi: '春(天)', pinyin: 'chūn(tiān)', pos: 'danh từ', meaning: '(mùa) xuân', han_viet: 'xuân thiên' },
    { hanzi: '草', pinyin: 'cǎo', pos: 'danh từ', meaning: 'cỏ', han_viet: 'thảo' },
    { hanzi: '夏(天)', pinyin: 'xià(tiān)', pos: 'danh từ', meaning: '(mùa) hè', han_viet: 'hạ thiên' },
    { hanzi: '裙子', pinyin: 'qúnzi', pos: 'danh từ', meaning: 'váy', han_viet: 'quần tử' },
    { hanzi: '最近', pinyin: 'zuìjìn', pos: 'phó từ', meaning: 'gần đây, dạo này', han_viet: 'tối cận' },
    { hanzi: '越', pinyin: 'yuè', pos: 'phó từ', meaning: 'càng', han_viet: 'việt' },
    { hanzi: '张', pinyin: 'Zhāng', pos: 'danh từ riêng', meaning: 'Trương (họ)', han_viet: 'trương' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Trợ từ 了', title: 'Trợ từ 了 chỉ sự thay đổi',
      intro: 'Trợ từ ngữ khí 了 được dùng ở cuối câu trần thuật để chỉ sự thay đổi trong một tình huống hoặc sự xuất hiện của một tình huống mới. Chẳng hạn câu 我现在没钱了 diễn tả sự thay đổi là trước kia tôi có tiền nhưng hiện giờ thì không còn nữa.',
      groups: [{ label: 'Ví dụ trong sách', items: [['上个月很冷，现在天气不那么冷了。', 'Shàng ge yuè hěn lěng, xiànzài tiānqì bú nàme lěng le.', 'Tháng trước rất lạnh, giờ trời không lạnh lắm nữa.'], ['我前几天有点儿发烧，现在好多了。', 'Wǒ qián jǐ tiān yǒudiǎnr fā shāo, xiànzài hǎo duō le.', 'Mấy hôm trước tôi hơi sốt, giờ đỡ nhiều rồi.'], ['我现在喜欢夏天了。', 'Wǒ xiànzài xǐhuan xiàtiān le.', 'Giờ tôi thích mùa hè rồi.'], ['这条裙子是去年买的，今年就不能穿了。', 'Zhè tiáo qúnzi shì qùnián mǎi de, jīnnián jiù bù néng chuān le.', 'Cái váy này mua năm ngoái, năm nay không mặc được nữa.']] }],
    },
    {
      kind: 'examples', label: '越来越', title: 'Cấu trúc 越来越 + tính từ / động từ chỉ trạng thái tâm lý',
      intro: 'Cấu trúc "越来越 + tính từ/động từ chỉ trạng thái tâm lý" được dùng để chỉ sự thay đổi về mức độ theo thời gian, ví dụ 越来越冷 (ngày càng lạnh), 越来越喜欢 (ngày càng thích). Lưu ý là bạn không được thêm phó từ chỉ mức độ vào trước tính từ hoặc động từ chỉ trạng thái tâm lý (không được nói 越来越很热, 越来越非常想).',
      groups: [{ label: 'Ví dụ trong sách', items: [['我认识的汉字越来越多。', 'Wǒ rènshi de Hànzì yuè lái yuè duō.', 'Chữ Hán tôi biết ngày càng nhiều.'], ['你越来越漂亮。', 'Nǐ yuè lái yuè piàoliang.', 'Em ngày càng xinh.'], ['我越来越喜欢运动。', 'Wǒ yuè lái yuè xǐhuan yùndòng.', 'Tôi ngày càng thích vận động.'], ['我做的饭越来越好吃。', 'Wǒ zuò de fàn yuè lái yuè hǎochī.', 'Cơm tôi nấu ngày càng ngon.']] }],
    },
    {
      kind: 'examples', label: 'Chữ hội ý', title: 'Chữ Hán: chữ hội ý (会意字) và cách thành lập từ mới',
      clip: { label: '05-5 · Đọc to các cụm từ và câu', src: A + 'l05-5.mp3' },
      intro: 'Khi sáng tạo ra chữ Hán, người Trung Hoa cổ còn kết hợp hai chữ đơn hoặc nhiều hơn để tạo thành chữ mới, nghĩa của chữ này chính là sự tổng hợp nghĩa của các chữ đơn. Ghép chữ cũ tạo từ mới: 听 + 说 → 听说, 有 + 一点儿 → 有点儿, 草 + 地方 → 草地.',
      groups: [
        { label: 'Chữ hội ý', items: [['明', 'míng', 'mặt trời và mặt trăng: sáng rực'], ['休', 'xiū', 'người tựa lưng vào cây: nghỉ ngơi'], ['从', 'cóng', 'một người đi theo người khác'], ['看', 'kàn', 'che tay phía trên mắt để nhìn ra xa']] },
        { label: 'Từ mới', items: [['听说', 'tīngshuō', 'nghe nói'], ['有点儿', 'yǒudiǎnr', 'hơi, có chút'], ['草地', 'cǎodì', 'bãi cỏ']] },
      ],
    },
  ],

  notes: [
    {
      title: 'Trợ từ 了 chỉ sự thay đổi',
      body: '了 ở cuối câu trần thuật chỉ sự thay đổi trong một tình huống hoặc sự xuất hiện một tình huống mới: 我现在没钱了 (trước có tiền, giờ không còn). 上个月很冷，现在天气不那么冷了。 这条裙子是去年买的，今年就不能穿了。',
      say: '今年就不能穿了',
    },
    {
      title: 'Cấu trúc 越来越',
      body: '越来越 + tính từ / động từ chỉ trạng thái tâm lý chỉ sự thay đổi về mức độ theo thời gian: 越来越冷, 越来越喜欢. Không thêm phó từ mức độ phía sau: không nói 越来越很热, 越来越非常想.',
      say: '我最近越来越胖了',
    },
    {
      title: 'Tục ngữ: 药到病除',
      body: 'Thuốc uống vào hết bệnh ngay, được dùng để nói về bác sĩ có chuyên môn giỏi, cho thuốc đúng bệnh. Ngày nay câu này còn có hàm ý chỉ một người có thể tìm ra mấu chốt của vấn đề và giải quyết vấn đề một cách nhanh chóng.',
      say: '药到病除',
    },
  ],

  writeChars: ['明', '休', '从', '看', '烧', '季', '草', '裙'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 4)',
      items: [
        { q: '小丽怎么不舒服了？', hint: '小丽有点儿发烧。' },
        { q: '现在小丽要做什么？', hint: '现在小丽要吃药。' },
        { q: '周太太能出去玩儿吗？为什么？', hint: '她不能出去玩儿了，因为她的儿子生病了，她要在家照顾儿子。' },
        { q: '小丽喜欢哪个季节？为什么？', hint: '小丽喜欢夏天，因为她可以穿漂亮的裙子。' },
        { q: '小刚喜欢哪个季节？为什么？', hint: '小刚喜欢春天，因为春天的天气不那么冷了，草和树都绿了，花也开了。' },
        { q: '小丽最近怎么了？为什么？', hint: '小丽最近越来越胖了，因为她吃得太多了。' },
      ],
    },
    {
      title: 'Hoạt động nhóm: thói quen đã thay đổi (运用 2)',
      items: [
        { q: '以前不喜欢喝咖啡，现在喜欢喝咖啡了。', hint: 'Mỗi người kể một thói quen đã thay đổi, dùng 越来越 và 了.' },
      ],
    },
  ],

  sentences: [
    { parts: ['前', '几', '天', '有点儿', '发烧', '，', '现在', '好', '多', '了'], pinyin: 'Qián jǐ tiān yǒudiǎnr fā shāo, xiànzài hǎo duō le.', vi: 'Mấy hôm trước hơi sốt, giờ đỡ nhiều rồi.' },
    { parts: ['这', '是', '我', '为', '你', '买', '的', '绿茶'], pinyin: 'Zhè shì wǒ wèi nǐ mǎi de lǜchá.', vi: 'Đây là trà xanh mình mua cho bạn.' },
    { parts: ['我', '要', '在', '家', '照顾', '他'], pinyin: 'Wǒ yào zài jiā zhàogù tā.', vi: 'Tôi phải ở nhà chăm sóc nó.' },
    { parts: ['草', '和', '树', '都', '绿', '了', '，', '花', '也', '开', '了'], pinyin: 'Cǎo hé shù dōu lǜ le, huā yě kāi le.', vi: 'Cỏ cây đều xanh, hoa cũng nở rồi.' },
    { parts: ['我', '最近', '越来越', '胖', '了'], pinyin: 'Wǒ zuìjìn yuè lái yuè pàng le.', vi: 'Dạo này tôi ngày càng béo.' },
    { parts: ['我', '觉得', '你', '越来越', '漂亮', '了'], pinyin: 'Wǒ juéde nǐ yuè lái yuè piàoliang le.', vi: 'Anh thấy em ngày càng xinh.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 草 · B 最近 · C 为 · D 发烧 · E 裙子. Gõ chữ cái A–E.',
      items: [
        { prompt: '我是不是（ ）了？怎么总是觉得冷？', answer: 'D', gloss: '发烧' }, { prompt: '春天不冷不热，（ ）都是绿的。', answer: 'A', gloss: '草' },
        { prompt: '快来看一下，这是我（ ）你买的衣服。', answer: 'C', gloss: '为' }, { prompt: '这条（ ）真好看，是新买的吗？', answer: 'E', gloss: '裙子' },
        { prompt: '小王在忙什么呢？你（ ）见过他吗？', answer: 'B', gloss: '最近' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 当然 · B 照顾 · C 用 · D 季节 · E 夏天. Gõ chữ cái A–E.',
      items: [
        { prompt: '来一个西瓜。 这个（ ）的西瓜又大又甜，多来几个吧。', answer: 'D', gloss: '季节' }, { prompt: '今年（ ）一点儿也不热。 是吗？我怎么觉得快热死了！', answer: 'E', gloss: '夏天' },
        { prompt: '明天考试，你现在就睡觉了？ 不（ ）看了，我已经复习好了。', answer: 'C', gloss: '用' }, { prompt: '明天阴天，你还去看比赛吗？ 我（ ）要去，这是我最喜欢的比赛！', answer: 'A', gloss: '当然' },
        { prompt: '这是你家的小狗吗？真漂亮！谁（ ）它？ 我妈妈。', answer: 'B', gloss: '照顾' },
      ],
    },
    {
      title: 'Giáo trình 注释 · Hoàn thành câu (gõ cụm còn thiếu)',
      hint: 'Gõ đúng cụm chữ Hán theo đáp án sách.',
      items: [
        { prompt: '昨天腿有点儿疼，今天早上（ ）。', answer: '好多了', gloss: '了 chỉ thay đổi' }, { prompt: '这些水果是我上个星期买的，现在都（ ）。', answer: '快要吃完了', accept: ['吃完了'], gloss: '了 chỉ thay đổi' },
        { prompt: '最近天气（ ）。', answer: '越来越热', accept: ['越来越冷'], gloss: '越来越' }, { prompt: '她每天都运动，现在（ ）。', answer: '越来越瘦了', accept: ['越来越瘦'], gloss: '越来越' },
        { prompt: '快要考试了，我（ ）。', answer: '越来越紧张', gloss: '越来越' }, { prompt: '孩子还没有回来，妈妈（ ）。', answer: '越来越担心', gloss: '越来越' },
      ],
    },
  ],
}
