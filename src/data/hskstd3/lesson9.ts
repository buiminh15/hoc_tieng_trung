import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 3, Bài 9: 她的汉语说得跟中国人一样好。 (sách trang 88–96).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách.
 * Nghe: 09-1…09-5. Bài tập: 练习 2 của giáo trình, đáp án giải theo ngữ cảnh.
 */

const A = '/audio/hsk-std3/'

export const hskStd3Lesson9: Lesson = {
  id: 9,
  title: 'Cô ấy nói tiếng Trung hay như người Trung Quốc vậy',
  hanzi: '她的汉语说得跟中国人一样好。',
  pinyin: 'Tā de Hànyǔ shuō de gēn Zhōngguórén yíyàng hǎo.',
  vi: 'Cô ấy nói tiếng Trung hay như người Trung Quốc vậy',
  intro: 'Nói về trình độ tiếng Trung, ăn uống và leo núi. Học cấu trúc 越A越B (A càng… B càng…) và câu so sánh A 跟 B 一样 (+ tính từ) để nói hai sự vật giống nhau.',

  dialogue: [
    { who: 'A', name: '大山', hanzi: '马可，你的中文越说越好了！', pinyin: 'Mǎkě, nǐ de Zhōngwén yuè shuō yuè hǎo le!', vi: 'Mã Khả, tiếng Trung của bạn càng nói càng giỏi!', scene: 'Hội thoại 1 · Trong lớp học' },
    { who: 'B', name: '马可', hanzi: '哪里哪里，我们班李静说得更好。', pinyin: 'Nǎli nǎli, wǒmen bān Lǐ Jìng shuō de gèng hǎo.', vi: 'Đâu có đâu có, Lý Tịnh lớp mình nói còn giỏi hơn.' },
    { who: 'A', name: '大山', hanzi: '怎么好？', pinyin: 'Zěnme hǎo?', vi: 'Giỏi như thế nào?' },
    { who: 'B', name: '马可', hanzi: '她的汉语说得跟中国人一样好。', pinyin: 'Tā de Hànyǔ shuō de gēn Zhōngguórén yíyàng hǎo.', vi: 'Cô ấy nói tiếng Trung giỏi như người Trung Quốc vậy.' },
    { who: 'A', name: '大山', hanzi: '李静？我怎么没听说过这个名字？', pinyin: 'Lǐ Jìng? Wǒ zěnme méi tīngshuōguo zhège míngzi?', vi: 'Lý Tịnh? Sao mình chưa nghe qua cái tên này nhỉ?' },
    { who: 'B', name: '马可', hanzi: '她是我们的汉语老师。', pinyin: 'Tā shì wǒmen de Hànyǔ lǎoshī.', vi: 'Cô ấy là giáo viên tiếng Trung của chúng mình.' },
    { who: 'A', name: '小丽', hanzi: '别吃了，你已经吃了三块蛋糕了。', pinyin: 'Bié chī le, nǐ yǐjīng chīle sān kuài dàngāo le.', vi: 'Đừng ăn nữa, anh đã ăn ba miếng bánh kem rồi.', scene: 'Hội thoại 2 · Ở cửa hàng bánh kem' },
    { who: 'B', name: '小刚', hanzi: '这是最后一块。', pinyin: 'Zhè shì zuìhòu yí kuài.', vi: 'Đây là miếng cuối cùng.' },
    { who: 'A', name: '小丽', hanzi: '你总是吃甜的东西，会越吃越胖。', pinyin: 'Nǐ zǒngshì chī tián de dōngxi, huì yuè chī yuè pàng.', vi: 'Anh toàn ăn đồ ngọt, sẽ càng ăn càng béo.' },
    { who: 'B', name: '小刚', hanzi: '你放心，我一定不会变胖。', pinyin: 'Nǐ fàng xīn, wǒ yídìng bú huì biàn pàng.', vi: 'Em yên tâm, anh nhất định sẽ không béo lên.' },
    { who: 'A', name: '小丽', hanzi: '为什么？', pinyin: 'Wèi shénme?', vi: 'Tại sao?' },
    { who: 'B', name: '小刚', hanzi: '我们家的人都很瘦，吃不胖。', pinyin: 'Wǒmen jiā de rén dōu hěn shòu, chī bu pàng.', vi: 'Người nhà anh đều gầy, ăn không béo được.' },
    { who: 'A', name: '小丽', hanzi: '我有点儿害怕。', pinyin: 'Wǒ yǒudiǎnr hàipà.', vi: 'Em hơi sợ.', scene: 'Hội thoại 3 · Ở trên núi' },
    { who: 'B', name: '小刚', hanzi: '怎么了？', pinyin: 'Zěnme le?', vi: 'Sao vậy?' },
    { who: 'A', name: '小丽', hanzi: '山越高，路越难走。我也越爬越冷。', pinyin: 'Shān yuè gāo, lù yuè nán zǒu. Wǒ yě yuè pá yuè lěng.', vi: 'Núi càng cao, đường càng khó đi. Em cũng càng leo càng lạnh.' },
    { who: 'B', name: '小刚', hanzi: '不用担心，有我呢，我对这儿比较了解。', pinyin: 'Bú yòng dān xīn, yǒu wǒ ne, wǒ duì zhèr bǐjiào liǎojiě.', vi: 'Không cần lo, có anh đây, anh khá hiểu nơi này.' },
    { who: 'A', name: '小丽', hanzi: '那我们先休息一下，一会儿再爬。', pinyin: 'Nà wǒmen xiān xiūxi yíxià, yíhuìr zài pá.', vi: 'Vậy chúng ta nghỉ một lát trước, lát nữa leo tiếp.' },
    { who: 'B', name: '小刚', hanzi: '好，一会儿我们可以从中间这条路上去。', pinyin: 'Hǎo, yíhuìr wǒmen kěyǐ cóng zhōngjiān zhè tiáo lù shang qù.', vi: 'Được, lát nữa chúng ta có thể đi lên từ con đường ở giữa này.' },
    { who: 'A', name: '同学', hanzi: '小明，你的眼睛怎么跟大熊猫一样了？', pinyin: 'Xiǎo Míng, nǐ de yǎnjing zěnme gēn dà xióngmāo yíyàng le?', vi: 'Tiểu Minh, sao mắt bạn giống gấu trúc thế?', scene: 'Hội thoại 4 · Ở nhà bạn Minh' },
    { who: 'B', name: '小明', hanzi: '我这几天脚疼，没休息好。', pinyin: 'Wǒ zhè jǐ tiān jiǎo téng, méi xiūxi hǎo.', vi: 'Mấy hôm nay chân mình đau, nghỉ ngơi không tốt.' },
    { who: 'A', name: '同学', hanzi: '去医院了吗？医生说什么？', pinyin: 'Qù yīyuàn le ma? Yīshēng shuō shénme?', vi: 'Đi bệnh viện chưa? Bác sĩ nói gì?' },
    { who: 'B', name: '小明', hanzi: '他说我多休息。休息得越多，好得越快。', pinyin: 'Tā shuō wǒ duō xiūxi. Xiūxi de yuè duō, hǎo de yuè kuài.', vi: 'Ông ấy bảo mình nghỉ nhiều vào. Nghỉ càng nhiều, khỏi càng nhanh.' },
    { who: 'A', name: '同学', hanzi: '下个月的篮球比赛，你能参加吗？', pinyin: 'Xià ge yuè de lánqiú bǐsài, nǐ néng cānjiā ma?', vi: 'Giải bóng rổ tháng sau, bạn tham gia được không?' },
    { who: 'B', name: '小明', hanzi: '一定能参加，一点儿影响也没有。', pinyin: 'Yídìng néng cānjiā, yìdiǎnr yǐngxiǎng yě méiyǒu.', vi: 'Chắc chắn tham gia được, không ảnh hưởng chút nào.' },
  ],
  dialogueClips: [
    { label: '09-1 · Trong lớp học', src: A + 'l09-1.mp3' },
    { label: '09-2 · Ở cửa hàng bánh kem', src: A + 'l09-2.mp3' },
    { label: '09-3 · Ở trên núi', src: A + 'l09-3.mp3' },
    { label: '09-4 · Ở nhà bạn Minh', src: A + 'l09-4.mp3' },
  ],
  dialogueTip: '<b>越A越B</b>: B thay đổi theo sự biến đổi của A (越说越好, 山越高路越难走). <b>A 跟 B 一样 (+ tính từ)</b>: A và B giống nhau; phủ định thêm <b>不</b> trước 一样 (跟那辆车不一样).',
  slowSay: '她的汉语说得跟中国人一样好',

  vocab: [
    { hanzi: '中文', pinyin: 'Zhōngwén', pos: 'danh từ', meaning: 'tiếng Trung Quốc', han_viet: 'trung văn' },
    { hanzi: '班', pinyin: 'bān', pos: 'danh từ', meaning: 'lớp', han_viet: 'ban' },
    { hanzi: '一样', pinyin: 'yíyàng', pos: 'tính từ', meaning: 'giống nhau, như nhau', han_viet: 'nhất dạng' },
    { hanzi: '最后', pinyin: 'zuìhòu', pos: 'danh từ', meaning: '(cái) cuối cùng', han_viet: 'tối hậu' },
    { hanzi: '放心', pinyin: 'fàng xīn', pos: 'động từ', meaning: 'yên tâm', han_viet: 'phóng tâm' },
    { hanzi: '一定', pinyin: 'yídìng', pos: 'phó từ', meaning: 'nhất định, chắc chắn', han_viet: 'nhất định' },
    { hanzi: '担心', pinyin: 'dān xīn', pos: 'động từ', meaning: 'lo lắng', han_viet: 'đảm tâm' },
    { hanzi: '比较', pinyin: 'bǐjiào', pos: 'phó từ', meaning: 'tương đối, khá', han_viet: 'tỉ giảo' },
    { hanzi: '了解', pinyin: 'liǎojiě', pos: 'động từ', meaning: 'hiểu rõ', han_viet: 'liễu giải' },
    { hanzi: '先', pinyin: 'xiān', pos: 'phó từ', meaning: 'trước, trước hết', han_viet: 'tiên' },
    { hanzi: '中间', pinyin: 'zhōngjiān', pos: 'danh từ', meaning: 'giữa, chính giữa', han_viet: 'trung gian' },
    { hanzi: '参加', pinyin: 'cānjiā', pos: 'động từ', meaning: 'tham gia', han_viet: 'tham gia' },
    { hanzi: '影响', pinyin: 'yǐngxiǎng', pos: 'động từ', meaning: 'ảnh hưởng', han_viet: 'ảnh hưởng' },
  ],

  sections: [
    {
      kind: 'examples', label: '越A越B', title: 'Cấu trúc: 越A越B',
      intro: 'Cấu trúc “越A越B” diễn tả B thay đổi theo sự biến đổi của A: A càng… thì B càng….',
      groups: [
        { label: 'Ví dụ', items: [['雨越下越大。', 'Yǔ yuè xià yuè dà.', 'Mưa càng rơi càng lớn.'], ['你的中文越说越好。', 'Nǐ de Zhōngwén yuè shuō yuè hǎo.', 'Tiếng Trung của bạn càng nói càng giỏi.'], ['越往南，天气越热。', 'Yuè wǎng nán, tiānqì yuè rè.', 'Càng đi về phía nam, thời tiết càng nóng.'], ['山越高，路越难走。', 'Shān yuè gāo, lù yuè nán zǒu.', 'Núi càng cao, đường càng khó đi.'], ['你总是吃甜的东西，会越吃越胖。', 'Nǐ zǒngshì chī tián de dōngxi, huì yuè chī yuè pàng.', 'Bạn toàn ăn đồ ngọt, sẽ càng ăn càng béo.']] },
      ],
    },
    {
      kind: 'examples', label: 'A 跟 B 一样', title: 'Câu so sánh (1): A 跟 B 一样 (+ tính từ)',
      intro: '“A 跟 B 一样” diễn tả A và B giống nhau. Nếu muốn chỉ rõ khía cạnh được so sánh, thêm tính từ vào sau cấu trúc này, chẳng hạn 一样大 là kích cỡ như nhau. Dạng phủ định thêm 不 vào trước 一样.',
      groups: [
        { label: 'Ví dụ', items: [['这本书跟那本书一样。', 'Zhè běn shū gēn nà běn shū yíyàng.', 'Cuốn sách này giống cuốn sách kia.'], ['儿子跟爸爸一样高。', 'Érzi gēn bàba yíyàng gāo.', 'Con trai cao bằng bố.'], ['这辆车的颜色跟那辆车不一样。', 'Zhè liàng chē de yánsè gēn nà liàng chē bù yíyàng.', 'Màu của chiếc xe này không giống chiếc xe kia.'], ['她的汉语说得跟中国人一样好。', 'Tā de Hànyǔ shuō de gēn Zhōngguórén yíyàng hǎo.', 'Cô ấy nói tiếng Trung giỏi như người Trung Quốc.']] },
      ],
    },
    {
      kind: 'examples', label: 'Đọc cụm từ', title: 'Đọc to các cụm từ và câu (练习 1)',
      clip: { label: '09-5 · Đọc to các cụm từ và câu', src: A + 'l09-5.mp3' },
      intro: 'Bấm để nghe từng cụm.',
      groups: [{ label: 'Cụm từ', items: [
        ['不一样', 'bù yíyàng', 'không giống nhau'], ['一样好', 'yíyàng hǎo', 'tốt như nhau'], ['这两件衣服一样', 'zhè liǎng jiàn yīfu yíyàng', 'hai cái áo này giống nhau'],
        ['一定来', 'yídìng lái', 'nhất định đến'], ['不一定能考好', 'bù yídìng néng kǎo hǎo', 'chưa chắc thi tốt'], ['这次我不一定能考好，我一定不会变胖', 'zhè cì wǒ bù yídìng néng kǎo hǎo, wǒ yídìng bú huì biàn pàng', 'lần này tôi chưa chắc thi tốt, tôi nhất định không béo lên'],
        ['比较了解', 'bǐjiào liǎojiě', 'khá hiểu rõ'], ['我很了解他', 'wǒ hěn liǎojiě tā', 'tôi rất hiểu anh ấy'], ['我对这儿比较了解', 'wǒ duì zhèr bǐjiào liǎojiě', 'tôi khá hiểu nơi này'],
        ['参加比赛', 'cānjiā bǐsài', 'tham gia thi đấu'], ['参加考试', 'cānjiā kǎoshì', 'tham gia kỳ thi'], ['你能参加吗？', 'Nǐ néng cānjiā ma?', 'Bạn tham gia được không?'],
        ['没有影响', 'méiyǒu yǐngxiǎng', 'không có ảnh hưởng'], ['影响很大', 'yǐngxiǎng hěn dà', 'ảnh hưởng rất lớn'], ['他影响了我', 'tā yǐngxiǎngle wǒ', 'anh ấy ảnh hưởng đến tôi'], ['一点儿影响也没有', 'yìdiǎnr yǐngxiǎng yě méiyǒu', 'không ảnh hưởng chút nào'],
      ] }],
    },
  ],

  notes: [
    {
      title: 'Cấu trúc 越A越B',
      body: '“越A越B” diễn tả B thay đổi theo sự biến đổi của A: 雨越下越大, 你的中文越说越好, 山越高，路越难走. Cũng có thể đặt 越 trước cụm giới từ: 越往南，天气越热.',
      say: '山越高，路越难走',
    },
    {
      title: 'Câu so sánh: A 跟 B 一样 (+ tính từ)',
      body: '“A 跟 B 一样” cho biết A và B giống nhau. Thêm tính từ để chỉ rõ khía cạnh so sánh: 儿子跟爸爸一样高. Phủ định thêm 不 trước 一样: 这辆车的颜色跟那辆车不一样.',
      say: '她的汉语说得跟中国人一样好',
    },
    {
      title: 'Chữ hình thanh (形声字) (1)',
      body: 'Khoảng 70% chữ Hán hiện đại là chữ hình thanh, gồm phần hình (gợi ý nghĩa) và phần thanh (gợi ý cách đọc). Loại “trái hình – phải thanh”: 妈 (mā) có 马 (mǎ) là phần thanh, 女 là phần hình; 住 (zhù) có 主 (zhǔ) là phần thanh, 亻 là phần hình. Loại “phải hình – trái thanh”: 放 (fàng) có 方 (fāng) là phần thanh, 攵 là phần hình; 邻 (lín) có 令 (lìng) là phần thanh, 阝 là phần hình.',
      say: '放',
    },
    {
      title: 'Cách thành lập từ mới',
      body: '上课 + 中间 → 课间 (giờ giải lao giữa các tiết); 爬山 + 路上 → 山路 (đường núi); 参加 + 比赛 → 参赛 (tham gia thi đấu).',
      say: '参加比赛',
    },
    {
      title: 'Tục ngữ: 三人行，必有我师',
      body: 'Ba người cùng đi ắt có người là thầy ta. Khi ta đi cùng hai người nữa thì trong đó chắc chắn có một người có thể là thầy ta. Hàm ý: người khác có thể có những ưu điểm mà chúng ta không có, nên chúng ta cần học hỏi điều đó ở họ.',
      say: '三人行，必有我师',
    },
  ],

  writeChars: ['班', '样', '块', '担', '较', '解', '参', '响'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 4)',
      items: [
        { q: '李静的汉语说得怎么样？为什么？', hint: '李静的汉语说得跟中国人一样好，因为她是汉语老师。' },
        { q: '小刚一共吃了几块蛋糕？', hint: '小刚一共吃了四块蛋糕。' },
        { q: '小丽觉得小刚会越来越胖吗？为什么？', hint: '会，因为小刚总是吃甜的东西，会越吃越胖。' },
        { q: '小丽为什么害怕了？小刚害怕吗？', hint: '山越高，路越难走，小丽越爬越冷，所以害怕。小刚不害怕，他对这儿比较了解。' },
        { q: '小明怎么了？', hint: '小明这几天脚疼，没休息好，眼睛跟大熊猫一样。' },
        { q: '小明能参加篮球比赛吗？为什么？', hint: '能。医生说多休息，休息得越多好得越快，一点儿影响也没有。' },
      ],
    },
    {
      title: 'Hoạt động nhóm: hỏi về cuộc sống hằng ngày (运用 2)',
      items: [
        { q: '几点起床？早上吃什么？中午去哪儿吃饭？', hint: '他7:00起床，我跟他不一样，我8:00起床.' },
        { q: '怎么锻炼身体？对什么感兴趣？每天复习多长时间？', hint: 'Hỏi bạn bè rồi dùng 我跟他(不)一样 để so sánh.' },
      ],
    },
  ],

  sentences: [
    { parts: ['你', '的', '中文', '越', '说', '越', '好', '了'], pinyin: 'Nǐ de Zhōngwén yuè shuō yuè hǎo le.', vi: 'Tiếng Trung của bạn càng nói càng giỏi.' },
    { parts: ['她', '的', '汉语', '说', '得', '跟', '中国人', '一样', '好'], pinyin: 'Tā de Hànyǔ shuō de gēn Zhōngguórén yíyàng hǎo.', vi: 'Cô ấy nói tiếng Trung giỏi như người Trung Quốc.' },
    { parts: ['山', '越', '高', '，', '路', '越', '难', '走'], pinyin: 'Shān yuè gāo, lù yuè nán zǒu.', vi: 'Núi càng cao, đường càng khó đi.' },
    { parts: ['你', '总是', '吃', '甜', '的', '东西', '，', '会', '越', '吃', '越', '胖'], pinyin: 'Nǐ zǒngshì chī tián de dōngxi, huì yuè chī yuè pàng.', vi: 'Bạn toàn ăn đồ ngọt, sẽ càng ăn càng béo.' },
    { parts: ['我', '对', '这儿', '比较', '了解'], pinyin: 'Wǒ duì zhèr bǐjiào liǎojiě.', vi: 'Tôi khá hiểu nơi này.' },
    { parts: ['一定', '能', '参加', '，', '一点儿', '影响', '也', '没有'], pinyin: 'Yídìng néng cānjiā, yìdiǎnr yǐngxiǎng yě méiyǒu.', vi: 'Chắc chắn tham gia được, không ảnh hưởng chút nào.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 参加 · B 班 · C 担心 · D 影响 · E 比较. Gõ chữ cái A–E.',
      items: [
        { prompt: '你在哪个（ ）学习汉语？', answer: 'B', gloss: '班' }, { prompt: '别（ ），他马上就到家了。', answer: 'C', gloss: '担心' },
        { prompt: '这件事（ ）难，你再给我几天时间。', answer: 'E', gloss: '比较' }, { prompt: '你想不想去（ ）爬山比赛？', answer: 'A', gloss: '参加' },
        { prompt: '少玩儿一会儿电子游戏吧，别（ ）了学习。', answer: 'D', gloss: '影响' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 放心 · B 最后 · C 先 · D 中间 · E 了解. Gõ chữ cái A–E.',
      items: [
        { prompt: '你怎么又迟到了？ 对不起，这是（ ）一次，以后一定不迟到了。', answer: 'B', gloss: '最后' }, { prompt: '你吃这么多，会越来越胖。 （ ），我每天都运动。', answer: 'A', gloss: '放心' },
        { prompt: '你怎么知道她会来？ 我很（ ）她，她每天都在这儿吃饭。', answer: 'E', gloss: '了解' }, { prompt: '你想要哪本书？ （ ）的那本。', answer: 'D', gloss: '中间' },
        { prompt: '下午你打算做什么？ 我想（ ）去超市买点儿东西。', answer: 'C', gloss: '先' },
      ],
    },
    {
      title: 'Giáo trình 注释 · Hoàn thành câu với 越A越B (gõ chữ Hán)',
      hint: 'Gõ phần còn thiếu, ví dụ 越……越……',
      items: [
        { prompt: '这个电影越看（ ）。', answer: '越有意思', accept: ['越有意思了', '越好看', '越想看'], gloss: '越A越B' },
        { prompt: '我们越聊（ ）。', answer: '越高兴', accept: ['越开心', '越多', '越有意思'], gloss: '越A越B' },
        { prompt: '她（ ），我越担心。', answer: '越不说话', accept: ['越不吃饭', '越不高兴', '越爬越高'], gloss: '越A越B' },
      ],
    },
    {
      title: 'Giáo trình 注释 · A 跟 B 一样 (gõ chữ Hán)',
      hint: 'Gõ câu hoàn chỉnh theo cấu trúc 跟……一样.',
      items: [
        { prompt: '我的杯子（ ）。（giống cốc của bạn)', answer: '跟你的一样', accept: ['跟你的杯子一样', '跟他的一样'], gloss: 'A 跟 B 一样' },
        { prompt: '（ ）一样聪明。(Anh ấy và em trai)', answer: '他跟他弟弟', accept: ['他跟弟弟', '哥哥跟弟弟'], gloss: 'A 跟 B 一样' },
      ],
    },
  ],
}
