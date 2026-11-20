import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 3, Bài 15: 其他都没什么问题。 (sách trang 141–150).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách.
 * Nghe: 15-1…15-5. Bài tập: 热身/注释/练习 của giáo trình, đáp án theo "Đáp án giáo trình HSK 3" trang 30–31.
 */

const A = '/audio/hsk-std3/'

export const hskStd3Lesson15: Lesson = {
  id: 15,
  title: 'Những câu khác đều không có vấn đề gì',
  hanzi: '其他都没什么问题。',
  pinyin: 'Qítā dōu méi shénme wèntí.',
  vi: 'Những câu khác đều không có vấn đề gì',
  intro: 'Nhận xét, trao đổi và giới thiệu lễ hội. Học cấu trúc 除了……以外，都/还/也……, cách dùng linh hoạt của đại từ nghi vấn 什么 (2), và cách nói mức độ cao nhất với 极了.',

  dialogue: [
    { who: 'A', name: '大山', hanzi: '老师，我来中国留学两年了，但是我的汉语水平提高得一点儿也不快啊。', pinyin: 'Lǎoshī, wǒ lái Zhōngguó liúxué liǎng nián le, dànshì wǒ de Hànyǔ shuǐpíng tígāo de yìdiǎnr yě bú kuài a.', vi: 'Thưa thầy, em sang Trung Quốc du học hai năm rồi mà trình độ tiếng Hán của em tiến bộ chẳng nhanh chút nào.', scene: 'Hội thoại 1 · Trong văn phòng' },
    { who: 'B', name: '老师', hanzi: '你每天认真学习，做练习，完成作业，一直不错啊。', pinyin: 'Nǐ měi tiān rènzhēn xuéxí, zuò liànxí, wánchéng zuòyè, yìzhí búcuò a.', vi: 'Em ngày nào cũng học chăm chỉ, làm bài tập, hoàn thành bài vở, vẫn luôn tốt mà.' },
    { who: 'A', name: '大山', hanzi: '这是我昨天的作业，您帮我看看对不对。', pinyin: 'Zhè shì wǒ zuótiān de zuòyè, nín bāng wǒ kànkan duì bu duì.', vi: 'Đây là bài tập hôm qua của em, thầy xem giúp em đúng không ạ.' },
    { who: 'B', name: '老师', hanzi: '写得不错，除了这个句子意思有些不清楚外，其他都没什么问题。', pinyin: 'Xiě de búcuò, chúle zhège jùzi yìsi yǒuxiē bù qīngchu wài, qítā dōu méi shénme wèntí.', vi: 'Viết khá tốt, ngoài câu này ý hơi chưa rõ ra thì những câu khác đều không có vấn đề gì.' },
    { who: 'A', name: '大山', hanzi: '谢谢老师！', pinyin: 'Xièxie lǎoshī!', vi: 'Cảm ơn thầy!' },
    { who: 'B', name: '老师', hanzi: '以后有什么不明白的地方，可以给我打电话或者发电子邮件。', pinyin: 'Yǐhòu yǒu shénme bù míngbai de dìfang, kěyǐ gěi wǒ dǎ diànhuà huòzhě fā diànzǐ yóujiàn.', vi: 'Sau này chỗ nào không hiểu, em có thể gọi điện hoặc gửi email cho thầy.' },
    { who: 'A', name: '学生', hanzi: '老师，除了小云，其他人都来了。', pinyin: 'Lǎoshī, chúle Xiǎoyún, qítā rén dōu lái le.', vi: 'Thưa thầy, trừ Tiểu Vân, những người khác đều đến rồi ạ.', scene: 'Hội thoại 2 · Trong lớp học' },
    { who: 'B', name: '老师', hanzi: '比赛马上就要开始了，小云怎么还没来？', pinyin: 'Bǐsài mǎshàng jiù yào kāishǐ le, Xiǎoyún zěnme hái méi lái?', vi: 'Cuộc thi sắp bắt đầu rồi, sao Tiểu Vân vẫn chưa đến?' },
    { who: 'A', name: '学生', hanzi: '刚才给她打电话，她在路上呢。', pinyin: 'Gāngcái gěi tā dǎ diànhuà, tā zài lùshang ne.', vi: 'Vừa nãy gọi điện cho bạn ấy, bạn ấy đang trên đường.' },
    { who: 'B', name: '老师', hanzi: '不等她了，我先给大家讲讲这次比赛的要求和一些需要注意的地方。', pinyin: 'Bù děng tā le, wǒ xiān gěi dàjiā jiǎngjiang zhè cì bǐsài de yāoqiú hé yìxiē xūyào zhùyì de dìfang.', vi: 'Không đợi nữa, thầy nói trước với cả lớp yêu cầu của cuộc thi lần này và vài điều cần chú ý.' },
    { who: 'A', name: '学生', hanzi: '老师，您放心，今天的比赛我们一定能拿第一。', pinyin: 'Lǎoshī, nín fàngxīn, jīntiān de bǐsài wǒmen yídìng néng ná dì-yī.', vi: 'Thưa thầy, thầy yên tâm, cuộc thi hôm nay chúng em nhất định giành hạng nhất.' },
    { who: 'A', name: '同事', hanzi: '现在用电脑上网真方便啊！', pinyin: 'Xiànzài yòng diànnǎo shàng wǎng zhēn fāngbiàn a!', vi: 'Giờ dùng máy tính lên mạng tiện thật!', scene: 'Hội thoại 3 · Trong phòng giải lao' },
    { who: 'B', name: '小刚', hanzi: '是啊，除了看新闻，人们还可以在网上听歌、看电影、买东西。', pinyin: 'Shì a, chúle kàn xīnwén, rénmen hái kěyǐ zài wǎngshang tīng gē, kàn diànyǐng, mǎi dōngxi.', vi: 'Ừ, ngoài xem tin tức, người ta còn có thể nghe nhạc, xem phim, mua đồ trên mạng.' },
    { who: 'A', name: '同事', hanzi: '对了，你从网上买的那件衣服呢？怎么没见你穿？', pinyin: 'Duì le, nǐ cóng wǎngshang mǎi de nà jiàn yīfu ne? Zěnme méi jiàn nǐ chuān?', vi: 'À đúng rồi, cái áo cậu mua trên mạng đâu? Sao không thấy cậu mặc?' },
    { who: 'B', name: '小刚', hanzi: '那件衣服我穿着有点儿小，给我弟弟了。', pinyin: 'Nà jiàn yīfu wǒ chuānzhe yǒudiǎnr xiǎo, gěi wǒ dìdi le.', vi: 'Cái áo đó tớ mặc hơi nhỏ, cho em trai rồi.' },
    { who: 'A', name: '同事', hanzi: '他满意吗？', pinyin: 'Tā mǎnyì ma?', vi: 'Em cậu hài lòng không?' },
    { who: 'B', name: '小刚', hanzi: '不用花钱，还有新衣服穿，他满意极了。', pinyin: 'Búyòng huā qián, hái yǒu xīn yīfu chuān, tā mǎnyì jí le.', vi: 'Không tốn tiền mà còn có áo mới mặc, nó hài lòng cực kỳ.' },
    { who: 'A', name: '短文', hanzi: '除了春节、中秋节以外，啤酒节也是这里很重要的一个节日。这个地方每年夏天都会举行一次啤酒节。在啤酒节上，你可以喝到世界上不同地方的啤酒。除了喝啤酒，你还可以在街道两边看到世界上不同地方的歌舞。你想不想了解世界各个地方的啤酒文化？来这里的啤酒节看看吧。', pinyin: 'Chúle Chūnjié, Zhōngqiū jié yǐwài, píjiǔ jié yě shì zhèlǐ hěn zhòngyào de yí ge jiérì. Zhège dìfang měi nián xiàtiān dōu huì jǔxíng yí cì píjiǔ jié. Zài píjiǔ jié shang, nǐ kěyǐ hē dào shìjiè shang bù tóng dìfang de píjiǔ. Chúle hē píjiǔ, nǐ hái kěyǐ zài jiēdào liǎngbiān kàndào shìjiè shang bù tóng dìfang de gēwǔ. Nǐ xiǎng bu xiǎng liǎojiě shìjiè gègè dìfang de píjiǔ wénhuà? Lái zhèlǐ de píjiǔ jié kànkan ba.', vi: 'Ngoài Tết Xuân và Tết Trung thu, Lễ hội bia cũng là một ngày lễ rất quan trọng ở đây. Mỗi mùa hè nơi này tổ chức một lần lễ hội bia. Ở đó bạn có thể uống bia từ nhiều nơi trên thế giới. Ngoài uống bia, bạn còn có thể xem ca múa nhiều nơi trên thế giới hai bên đường. Bạn có muốn tìm hiểu văn hóa bia các nơi trên thế giới không? Hãy đến lễ hội bia ở đây xem nhé.', scene: 'Bài đọc 4 · Lễ hội bia' },
  ],
  dialogueClips: [
    { label: '15-1 · Trong văn phòng', src: A + 'l15-1.mp3' },
    { label: '15-2 · Trong lớp học', src: A + 'l15-2.mp3' },
    { label: '15-3 · Trong phòng giải lao', src: A + 'l15-3.mp3' },
    { label: '15-4 · Lễ hội bia', src: A + 'l15-4.mp3' },
  ],
  dialogueTip: '<b>除了……以外，都……</b>: trừ… ra thì tất cả đều…. <b>除了……以外，还/也……</b>: ngoài… ra còn…. <b>……极了</b>: cực kỳ (满意极了). <b>什么</b> không xác định: 有什么不明白的地方？ (nhẹ nhàng, lịch sự).',
  slowSay: '其他都没什么问题',

  vocab: [
    { hanzi: '留学', pinyin: 'liúxué', pos: 'động từ', meaning: 'du học', han_viet: 'lưu học' },
    { hanzi: '水平', pinyin: 'shuǐpíng', pos: 'danh từ', meaning: 'trình độ', han_viet: 'thủy bình' },
    { hanzi: '提高', pinyin: 'tígāo', pos: 'động từ', meaning: 'nâng cao, tiến bộ', han_viet: 'đề cao' },
    { hanzi: '练习', pinyin: 'liànxí', pos: 'danh từ', meaning: 'bài tập', han_viet: 'luyện tập' },
    { hanzi: '完成', pinyin: 'wánchéng', pos: 'động từ', meaning: 'hoàn thành', han_viet: 'hoàn thành' },
    { hanzi: '句子', pinyin: 'jùzi', pos: 'danh từ', meaning: 'câu', han_viet: 'cú tử' },
    { hanzi: '其他', pinyin: 'qítā', pos: 'đại từ', meaning: 'cái khác', han_viet: 'kỳ tha' },
    { hanzi: '发', pinyin: 'fā', pos: 'động từ', meaning: 'gửi, gửi đi', han_viet: 'phát' },
    { hanzi: '要求', pinyin: 'yāoqiú', pos: 'danh từ', meaning: 'yêu cầu', han_viet: 'yêu cầu' },
    { hanzi: '注意', pinyin: 'zhùyì', pos: 'động từ', meaning: 'chú ý', han_viet: 'chú ý' },
    { hanzi: '上网', pinyin: 'shàng wǎng', pos: 'động từ', meaning: 'lên mạng', han_viet: 'thượng võng' },
    { hanzi: '除了', pinyin: 'chúle', pos: 'giới từ', meaning: 'ngoài… ra', han_viet: 'trừ liễu' },
    { hanzi: '新闻', pinyin: 'xīnwén', pos: 'danh từ', meaning: 'tin tức', han_viet: 'tân văn' },
    { hanzi: '花', pinyin: 'huā', pos: 'động từ', meaning: 'tốn, tiêu tốn', han_viet: 'hoa' },
    { hanzi: '极(了)', pinyin: 'jí (le)', pos: 'phó từ', meaning: 'hết sức, cực kỳ', han_viet: 'cực' },
    { hanzi: '节日', pinyin: 'jiérì', pos: 'danh từ', meaning: 'ngày lễ', han_viet: 'tiết nhật' },
    { hanzi: '举行', pinyin: 'jǔxíng', pos: 'động từ', meaning: 'tổ chức (hội họp, thi đấu...)', han_viet: 'cử hành' },
    { hanzi: '世界', pinyin: 'shìjiè', pos: 'danh từ', meaning: 'thế giới', han_viet: 'thế giới' },
    { hanzi: '街道', pinyin: 'jiēdào', pos: 'danh từ', meaning: 'đường, đường phố', han_viet: 'nhai đạo' },
    { hanzi: '各', pinyin: 'gè', pos: 'đại từ', meaning: 'mỗi', han_viet: 'các' },
    { hanzi: '文化', pinyin: 'wénhuà', pos: 'danh từ', meaning: 'văn hóa', han_viet: 'văn hóa' },
  ],

  sections: [
    {
      kind: 'examples', label: '除了…以外', title: 'Cấu trúc 除了……以外，都/还/也……',
      intro: '"除了……以外，都……" loại trừ một phần, phần còn lại đều giống nhau; "以外" có thể lược bỏ. "除了……以外，还/也……" loại trừ một phần, bổ sung phần khác; chủ ngữ có thể đặt ở đầu câu hoặc trước 还/也.',
      groups: [
        { label: '除了…以外，都…', items: [['除了这个汉字以外，别的汉字我都认识。', 'Chúle zhège Hànzì yǐwài, bié de Hànzì wǒ dōu rènshi.', 'Ngoài chữ này ra, những chữ khác tôi đều biết.'], ['除了我以外，大家都听懂了。', 'Chúle wǒ yǐwài, dàjiā dōu tīng dǒng le.', 'Trừ tôi ra, mọi người đều hiểu.'], ['除了小云，其他人都来了。', 'Chúle Xiǎoyún, qítā rén dōu lái le.', 'Trừ Tiểu Vân, những người khác đều đến.']] },
        { label: '除了…以外，还/也…', items: [['除了唱歌以外，他还喜欢跳舞。', 'Chúle chàng gē yǐwài, tā hái xǐhuan tiàowǔ.', 'Ngoài hát ra, anh ấy còn thích nhảy.'], ['除了汉语以外，我还会说英语。', 'Chúle Hànyǔ yǐwài, wǒ hái huì shuō Yīngyǔ.', 'Ngoài tiếng Hán, tôi còn nói được tiếng Anh.'], ['上网除了看新闻，还可以听音乐。', 'Shàng wǎng chúle kàn xīnwén, hái kěyǐ tīng yīnyuè.', 'Lên mạng ngoài xem tin còn có thể nghe nhạc.'], ['除了春节、中秋节以外，啤酒节也是这里很重要的一个节日。', 'Chúle Chūnjié, Zhōngqiū jié yǐwài, píjiǔ jié yě shì zhèlǐ hěn zhòngyào de yí ge jiérì.', 'Ngoài Tết Xuân, Trung thu, Lễ hội bia cũng là ngày lễ quan trọng ở đây.']] },
      ],
    },
    {
      kind: 'examples', label: 'Đại từ nghi vấn 2', title: 'Đại từ nghi vấn dùng linh hoạt: 什么',
      intro: '什么 có thể đại diện cho người hoặc vật không xác định, thể hiện thái độ lịch sự, lễ phép hơn. Bỏ 什么 đi thì ý nghĩa câu không đổi.',
      groups: [{ label: 'Ví dụ', items: [['这个饭馆有没有什么特别好吃的菜？', 'Zhège fànguǎn yǒu méiyǒu shénme tèbié hǎochī de cài?', 'Quán này có món nào đặc biệt ngon không?'], ['周末你有没有什么打算？', 'Zhōumò nǐ yǒu méiyǒu shénme dǎsuàn?', 'Cuối tuần bạn có dự định gì không?'], ['你写得很好，没什么问题。', 'Nǐ xiě de hěn hǎo, méi shénme wèntí.', 'Bạn viết rất tốt, không có vấn đề gì.'], ['以后有什么不明白的地方，可以给我打电话或者发电子邮件。', 'Yǐhòu yǒu shénme bù míngbai de dìfang, kěyǐ gěi wǒ dǎ diànhuà huòzhě fā diànzǐ yóujiàn.', 'Sau này chỗ nào không hiểu, có thể gọi điện hoặc gửi email.']] }],
    },
    {
      kind: 'examples', label: 'Mức độ: 极了', title: 'Cách diễn tả mức độ: 极了',
      intro: 'Có thể dùng "tính từ / động từ chỉ trạng thái tâm lý + 极了" để diễn tả mức độ cao nhất.',
      groups: [{ label: 'Ví dụ', items: [['我的小狗可爱极了。', 'Wǒ de xiǎo gǒu kě\'ài jí le.', 'Chú chó nhỏ của tôi cực kỳ đáng yêu.'], ['今天天气冷极了。', 'Jīntiān tiānqì lěng jí le.', 'Hôm nay trời lạnh cực kỳ.'], ['那件衣服我喜欢极了。', 'Nà jiàn yīfu wǒ xǐhuan jí le.', 'Tôi thích cái áo đó cực kỳ.'], ['他满意极了。', 'Tā mǎnyì jí le.', 'Anh ấy hài lòng cực kỳ.']] }],
    },
    {
      kind: 'examples', label: 'Đọc cụm từ', title: 'Đọc to các cụm từ và câu (练习 1)',
      clip: { label: '15-5 · Đọc to các cụm từ và câu', src: A + 'l15-5.mp3' },
      intro: 'Bấm để nghe từng cụm.',
      groups: [{ label: 'Cụm từ', items: [
        ['其他人', 'qítā rén', 'những người khác'], ['其他问题', 'qítā wèntí', 'vấn đề khác'], ['除了小云，其他人都来了', 'chúle Xiǎoyún, qítā rén dōu lái le', 'trừ Tiểu Vân, những người khác đều đến'],
        ['汉语水平', 'Hànyǔ shuǐpíng', 'trình độ tiếng Hán'], ['水平高', 'shuǐpíng gāo', 'trình độ cao'], ['我的汉语水平提高得一点儿也不快', 'wǒ de Hànyǔ shuǐpíng tígāo de yìdiǎnr yě bú kuài', 'trình độ tiếng Hán của tôi tiến bộ chẳng nhanh chút nào'],
        ['完成作业', 'wánchéng zuòyè', 'hoàn thành bài tập'], ['完成工作', 'wánchéng gōngzuò', 'hoàn thành công việc'], ['没完成', 'méi wánchéng', 'chưa hoàn thành'],
        ['上网看电影', 'shàng wǎng kàn diànyǐng', 'lên mạng xem phim'], ['现在用电脑上网真方便', 'xiànzài yòng diànnǎo shàng wǎng zhēn fāngbiàn', 'giờ dùng máy tính lên mạng tiện thật'],
        ['注意身体', 'zhùyì shēntǐ', 'giữ gìn sức khỏe'], ['我给大家讲讲需要注意的地方', 'wǒ gěi dàjiā jiǎngjiang xūyào zhùyì de dìfang', 'tôi nói cho mọi người những điểm cần chú ý'],
      ] }],
    },
  ],

  notes: [
    {
      title: 'Cấu trúc 除了……以外，都/还/也……',
      body: '除了……以外，都……: loại trừ một phần, phần còn lại giống nhau (除了小云，其他人都来了). 除了……以外，还/也……: ngoài phần được nêu còn có thêm phần khác (除了唱歌以外，他还喜欢跳舞). 以外 có thể lược bỏ.',
      say: '除了小云，其他人都来了',
    },
    {
      title: 'Đại từ nghi vấn dùng linh hoạt (2): 什么',
      body: '什么 chỉ người/vật không xác định, giúp lời nói lịch sự hơn; bỏ 什么 thì nghĩa câu không đổi: 以后有什么不明白的地方，可以给我打电话。',
      say: '有什么不明白的地方',
    },
    {
      title: 'Mức độ cao nhất: 极了',
      body: 'Tính từ / động từ tâm lý + 极了: 可爱极了, 冷极了, 喜欢极了, 满意极了.',
      say: '他满意极了',
    },
    {
      title: 'Cách thành lập từ mới (旧字新词)',
      body: '电影 + 节日 = 电影节 (liên hoan phim); 春天 + 节日 = 春节 (Tết Xuân); 文化 + 节日 = 文化节 (lễ hội văn hóa).',
      say: '电影节',
    },
    {
      title: 'Tục ngữ: 一是一，二是二',
      body: 'Một là một, hai là hai. Giữ nguyên hình dáng/bản chất của sự vật, không thay đổi. Câu này dùng chỉ người rất thành thật trong lời nói cũng như trong công việc, không gian dối, không lừa gạt người khác.',
      say: '一是一，二是二',
    },
  ],

  writeChars: ['留', '提', '练', '句', '要', '注', '世', '界'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 4)',
      items: [
        { q: '老师觉得大山的汉语怎么样？', hint: '老师觉得大山的汉语一直不错。' },
        { q: '大家都来参加比赛了吗？谁没来？', hint: '不是，小云没来。' },
        { q: '老师现在在做什么？', hint: '老师现在在给大家讲这次比赛的要求和一些需要注意的地方。' },
        { q: '大家可以上网做什么？', hint: '除了看新闻，还可以听歌、看电影、买东西。' },
        { q: '小刚从网上买的那件衣服怎么了？', hint: '那件衣服有点儿小。' },
        { q: '啤酒节上可以做什么？', hint: '除了可以喝到世界上不同地方的啤酒，还可以看到世界上不同地方的歌舞。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: nói về thái độ của bạn cùng lớp', hint: 'Mẫu: 我们班王美努力极了。她每天下了课就去图书馆学习。' },
        { q: 'Theo nhóm: giới thiệu một ngày lễ của nước bạn', hint: 'Mẫu: 春节是我们国家的重要节日。春节一般在每年的1月或2月。' },
      ],
    },
  ],

  sentences: [
    { parts: ['我', '的', '汉语', '水平', '提高', '得', '一点儿', '也', '不', '快'], pinyin: 'Wǒ de Hànyǔ shuǐpíng tígāo de yìdiǎnr yě bú kuài.', vi: 'Trình độ tiếng Hán của tôi tiến bộ chẳng nhanh chút nào.' },
    { parts: ['除了', '小云', '其他', '人', '都', '来', '了'], pinyin: 'Chúle Xiǎoyún, qítā rén dōu lái le.', vi: 'Trừ Tiểu Vân, những người khác đều đến.' },
    { parts: ['除了', '看', '新闻', '还', '可以', '听', '歌'], pinyin: 'Chúle kàn xīnwén, hái kěyǐ tīng gē.', vi: 'Ngoài xem tin còn có thể nghe nhạc.' },
    { parts: ['不用', '花', '钱', '他', '满意', '极', '了'], pinyin: 'Búyòng huā qián, tā mǎnyì jí le.', vi: 'Không tốn tiền, anh ấy hài lòng cực kỳ.' },
    { parts: ['以后', '有', '什么', '不', '明白', '的', '地方', '可以', '问', '我'], pinyin: 'Yǐhòu yǒu shénme bù míngbai de dìfang kěyǐ wèn wǒ.', vi: 'Sau này chỗ nào không hiểu có thể hỏi tôi.' },
    { parts: ['你', '想', '不', '想', '了解', '世界', '各个', '地方', '的', '文化'], pinyin: 'Nǐ xiǎng bu xiǎng liǎojiě shìjiè gègè dìfang de wénhuà?', vi: 'Bạn có muốn tìm hiểu văn hóa các nơi trên thế giới không?' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 花 · B 发 · C 练习 · D 提高 · E 完成. Gõ chữ cái A–E.',
      items: [
        { prompt: '王经理，电子邮件我已经给您（ ）过去了。', answer: 'B', gloss: '发' }, { prompt: '你每天跟谁（ ）口语？', answer: 'C', gloss: '练习' },
        { prompt: '已经夜里12点多了，但是今天的作业我还没（ ）。', answer: 'E', gloss: '完成' }, { prompt: '这个月我的钱都（ ）完了，不能再买新衣服了。', answer: 'A', gloss: '花' },
        { prompt: '我在这里只学了三个月汉语，但是水平（ ）了不少。', answer: 'D', gloss: '提高' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 文化 · B 句子 · C 新闻 · D 节日 · E 世界. Gõ chữ cái A–E.',
      items: [
        { prompt: '今天听写五个（ ），请大家准备好笔和纸。 五个？老师，太多了！', answer: 'B', gloss: '句子' }, { prompt: '（ ）上有多少个国家？你知道吗？ 这个……，我真不知道。', answer: 'E', gloss: '世界' },
        { prompt: '你为什么想去那个地方旅游？ 我对那儿的（ ）很感兴趣。', answer: 'A', gloss: '文化' }, { prompt: '你们国家最重要的（ ）是什么？ 当然是春节！', answer: 'D', gloss: '节日' },
        { prompt: '刚才电视上的那条（ ）真有意思！ 你快说说。', answer: 'C', gloss: '新闻' },
      ],
    },
    {
      title: 'Giáo trình 注释 · Viết lại câu / hoàn thành (gõ câu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: '我喜欢春天，也喜欢夏天。→ 除了……以外', answer: '除了春天以外，我还喜欢夏天', gloss: '除了…还' },
        { prompt: '我们班只有王老师是中国人，其他人都是外国人。→ 除了……以外', answer: '我们班除了王老师是中国人以外，其他人都是外国人', accept: ['除了王老师是中国人，其他人都是外国人'], gloss: '除了…都' },
        { prompt: '我只想吃西瓜，其他水果都不想吃。→ 除了……', answer: '除了西瓜，其他水果我都不想吃', gloss: '除了…都' },
        { prompt: 'A: （ ）？ B: 周末我跟朋友打算去爬山。', answer: '周末你有没有什么打算', gloss: '什么' },
        { prompt: 'A: 外边（ ），我们别出去了，在家里休息吧。', answer: '热极了', gloss: '极了' },
      ],
    },
    {
      title: 'Giáo trình 练习 3 · Hoàn thành đối thoại (gõ phần còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: 'A: 我们去这家饭馆吧，这儿的服务好（ ）。', answer: '极了', gloss: '极了' },
        { prompt: 'A: 这儿（ ）好吃的菜？', answer: '有什么', gloss: '什么' },
        { prompt: 'A: 我想快点儿提高汉语（ ），应该怎么做呢？', answer: '水平', gloss: '水平' },
        { prompt: 'A: 经理，今天的工作我们已经（ ）了。', answer: '完成', gloss: '完成' },
      ],
    },
  ],
}
