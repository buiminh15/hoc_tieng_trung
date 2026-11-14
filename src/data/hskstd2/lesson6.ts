import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 2, Bài 6: 你怎么不吃了 (sách trang 41–48).
 * Sách bản Trung–Anh; phần tiếng Việt do app dịch.
 * Nghe: 06-1…06-5. Sách bài tập (trang 57–64, đáp án trang 11–13).
 */

const A = '/audio/hsk-std2/'

export const hskStd2Lesson6: Lesson = {
  id: 6,
  title: 'Sao bạn không ăn nữa',
  hanzi: '你怎么不吃了',
  pinyin: 'Nǐ zěnme bù chī le',
  vi: 'Sao bạn không ăn nữa',
  intro: 'Hỏi nguyên nhân và nói lý do: 你怎么不吃了？ 因为下雨，所以我们都没去。 Học 怎么 hỏi nguyên nhân, lặp lượng từ (个个, 件件, 天天), cặp liên từ 因为……所以……; trọng âm logic trong câu; chữ 门 và 羊; bộ 犭 và 心.',

  dialogue: [
    { who: 'A', hanzi: '你知道小王今天什么时候来学校吗？', pinyin: 'Nǐ zhīdào Xiǎo Wáng jīntiān shénme shíhou lái xuéxiào ma?', vi: 'Bạn có biết hôm nay Tiểu Vương lúc nào đến trường không?', scene: 'Hội thoại 1 · ở trường' },
    { who: 'B', hanzi: '他已经来了。', pinyin: 'Tā yǐjīng lái le.', vi: 'Cậu ấy đến rồi.' },
    { who: 'A', hanzi: '你怎么知道他来了？', pinyin: 'Nǐ zěnme zhīdào tā lái le?', vi: 'Sao bạn biết cậu ấy đến rồi?' },
    { who: 'B', hanzi: '我在门外看见他的自行车了。', pinyin: 'Wǒ zài mén wài kànjiàn tā de zìxíngchē le.', vi: 'Mình thấy xe đạp của cậu ấy ngoài cửa.' },
    { who: 'A', hanzi: '今天的羊肉很好吃，你怎么不吃了？', pinyin: 'Jīntiān de yángròu hěn hǎochī, nǐ zěnme bù chī le?', vi: 'Thịt cừu hôm nay ngon lắm, sao bạn không ăn nữa?', scene: 'Hội thoại 2 · ở nhà hàng' },
    { who: 'B', hanzi: '这个星期天天都吃羊肉，不想吃了。', pinyin: 'Zhège xīngqī tiāntiān dōu chī yángròu, bù xiǎng chī le.', vi: 'Tuần này ngày nào cũng ăn thịt cừu, không muốn ăn nữa.' },
    { who: 'A', hanzi: '那你还想吃什么？', pinyin: 'Nà nǐ hái xiǎng chī shénme?', vi: 'Vậy bạn còn muốn ăn gì?' },
    { who: 'B', hanzi: '来一点儿面条吧。', pinyin: 'Lái yìdiǎnr miàntiáo ba.', vi: 'Cho một ít mì đi.' },
    { who: 'A', hanzi: '昨天你们怎么都没去打篮球？', pinyin: 'Zuótiān nǐmen zěnme dōu méi qù dǎ lánqiú?', vi: 'Hôm qua sao các bạn đều không đi chơi bóng rổ?', scene: 'Hội thoại 3 · ở phòng tập' },
    { who: 'B', hanzi: '因为昨天下雨，所以我们都没去。我去游泳了。', pinyin: 'Yīnwèi zuótiān xià yǔ, suǒyǐ wǒmen dōu méi qù. Wǒ qù yóu yǒng le.', vi: 'Vì hôm qua mưa nên bọn mình không đi. Mình đi bơi.' },
    { who: 'A', hanzi: '你经常游泳吗？', pinyin: 'Nǐ jīngcháng yóu yǒng ma?', vi: 'Bạn có hay bơi không?' },
    { who: 'B', hanzi: '这个月我天天游泳，我现在七十公斤了。', pinyin: 'Zhège yuè wǒ tiāntiān yóu yǒng, wǒ xiànzài qīshí gōngjīn le.', vi: 'Tháng này ngày nào mình cũng bơi, giờ mình nặng 70 cân rồi.' },
    { who: 'A', hanzi: '这两天怎么没看见小张？', pinyin: 'Zhè liǎng tiān zěnme méi kànjiàn Xiǎo Zhāng?', vi: 'Mấy hôm nay sao không thấy Tiểu Trương?', scene: 'Hội thoại 4 · ở văn phòng' },
    { who: 'B', hanzi: '他去北京了。', pinyin: 'Tā qù Běijīng le.', vi: 'Cậu ấy đi Bắc Kinh rồi.' },
    { who: 'A', hanzi: '去北京了？是去旅游吗？', pinyin: 'Qù Běijīng le? Shì qù lǚyóu ma?', vi: 'Đi Bắc Kinh à? Đi du lịch à?' },
    { who: 'B', hanzi: '不是，听说是去看他姐姐。', pinyin: 'Bú shì, tīngshuō shì qù kàn tā jiějie.', vi: 'Không, nghe nói là đi thăm chị gái.' },
  ],
  dialogueClips: [
    { label: '06-1 · Hội thoại 1: 你怎么知道他来了？', src: A + 'l06-1.mp3' },
    { label: '06-2 · Hội thoại 2: 你怎么不吃了？', src: A + 'l06-2.mp3' },
    { label: '06-3 · Hội thoại 3: 因为下雨，所以我们都没去', src: A + 'l06-3.mp3' },
    { label: '06-4 · Hội thoại 4: 这两天怎么没看见小张？', src: A + 'l06-4.mp3' },
  ],
  dialogueTip: '<b>怎么 + động từ / tính từ</b> hỏi nguyên nhân, thường kèm ý ngạc nhiên: 你怎么不吃了？ (khác với 怎么 + động từ hỏi cách làm ở HSK 1). <b>Lặp lượng từ</b> = "mỗi", hay đi với 都: 天天都吃. <b>因为……所以……</b>: vì… nên…, có thể bỏ một vế.',
  slowSay: '你怎么不吃了',

  vocab: [
    { hanzi: '门', pinyin: 'mén', pos: 'danh từ', meaning: 'cửa', han_viet: 'môn' },
    { hanzi: '外', parts: '夕 + 卜', pinyin: 'wài', pos: 'danh từ', meaning: 'ngoài, bên ngoài', han_viet: 'ngoại' },
    { hanzi: '自行车', pinyin: 'zìxíngchē', pos: 'danh từ', meaning: 'xe đạp. Từ ngoài đại cương HSK 2 (dấu * trong sách)', han_viet: 'tự hành xa' },
    { hanzi: '羊肉', parts: '羊 (dương) + 肉 (nhục)', pinyin: 'yángròu', pos: 'danh từ', meaning: 'thịt cừu', han_viet: 'dương nhục' },
    { hanzi: '好吃', pinyin: 'hǎochī', pos: 'tính từ', meaning: 'ngon', han_viet: '' },
    { hanzi: '面条', parts: '面 (diện) + 条 (điều)', pinyin: 'miàntiáo', pos: 'danh từ', meaning: 'mì sợi', han_viet: 'diện điều' },
    { hanzi: '打篮球', pinyin: 'dǎ lánqiú', pos: 'cụm', meaning: 'chơi bóng rổ', han_viet: '' },
    { hanzi: '因为', pinyin: 'yīnwèi', pos: 'liên từ', meaning: 'vì, bởi vì', han_viet: 'nhân vị' },
    { hanzi: '所以', pinyin: 'suǒyǐ', pos: 'liên từ', meaning: 'nên, cho nên', han_viet: 'sở dĩ' },
    { hanzi: '游泳', parts: '游 (du) + 泳 (vịnh)', pinyin: 'yóu yǒng', pos: 'động từ', meaning: 'bơi', han_viet: 'du vịnh' },
    { hanzi: '经常', pinyin: 'jīngcháng', pos: 'phó từ', meaning: 'thường, thường xuyên. Từ ngoài đại cương HSK 2 (dấu * trong sách)', han_viet: 'kinh thường' },
    { hanzi: '公斤', pinyin: 'gōngjīn', pos: 'lượng từ', meaning: 'ki-lô-gam, cân. Từ ngoài đại cương HSK 2 (dấu * trong sách)', han_viet: 'công cân' },
    { hanzi: '姐姐', pinyin: 'jiějie', pos: 'danh từ', meaning: 'chị gái', han_viet: 'thư thư' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Trọng âm logic', title: 'Trọng âm logic trong câu',
      clip: { label: '06-5 · Nghe và đọc theo (trọng âm logic)', src: A + 'l06-5.mp3' },
      intro: 'Trong câu, phần thông tin người nói muốn nhấn mạnh thường được đọc nặng hơn, gọi là trọng âm logic (hay trọng âm nhấn mạnh). Tùy ngữ cảnh mà vị trí nhấn khác nhau, và cùng một câu nhấn ở chỗ khác thì trọng tâm nghĩa cũng khác.',
      groups: [
        { label: 'Theo câu hỏi', items: [['谁在房间学习汉语呢？', 'Shéi zài fángjiān xuéxí Hànyǔ ne?', 'Ai đang học tiếng Hán trong phòng?'], ['他在房间学习汉语呢。', 'Tā zài fángjiān xuéxí Hànyǔ ne.', 'nhấn 他'], ['他在哪儿学习汉语呢？', 'Tā zài nǎr xuéxí Hànyǔ ne?', 'Anh ấy học tiếng Hán ở đâu?'], ['他在房间学习汉语呢。', 'Tā zài fángjiān xuéxí Hànyǔ ne.', 'nhấn 房间']] },
        { label: 'Cùng câu, nhấn khác, nghĩa khác', items: [['他（nhấn）在房间学习汉语呢。', 'Tā zài fángjiān…', 'Là anh ấy học, không phải người khác'], ['他在房间（nhấn）学习汉语呢。', '…zài fángjiān…', 'Học trong phòng, không phải ở chỗ khác']] },
      ],
    },
    {
      kind: 'examples', label: 'Bộ thủ', title: 'Chữ Hán: bộ 犭 và 心',
      intro: 'Bộ 犭 (khuyển) thường liên quan đến động vật; bộ 心 (tâm, nằm dưới) thường liên quan đến suy nghĩ và tình cảm.',
      groups: [{ label: 'Bộ 犭 và 心', items: [['猫', 'māo', 'mèo (bộ 犭)'], ['狗', 'gǒu', 'chó (bộ 犭)'], ['想', 'xiǎng', 'nghĩ (bộ 心)'], ['念', 'niàn', 'nhớ (bộ 心)']] }],
    },
  ],

  notes: [
    {
      title: 'Đại từ nghi vấn 怎么 (hỏi nguyên nhân)',
      body: '怎么 + động từ / tính từ hỏi nguyên nhân, phần nhiều mang ngữ khí lạ lùng, ngạc nhiên. Ví dụ: 你怎么不高兴？ 今天怎么这么热？ 昨天你们怎么都没去打篮球？',
      say: '你怎么不吃了',
    },
    {
      title: 'Lặp lượng từ',
      body: 'Lượng từ lặp lại mang nghĩa "mỗi", nhấn mạnh mọi thành viên trong phạm vi đều có đặc điểm nào đó, phía sau thường dùng 都. Ví dụ: 同学们个个都很高兴。 这个商店的衣服件件都很漂亮。 这个星期（我）天天都吃羊肉。',
      say: '天天都吃羊肉',
    },
    {
      title: 'Cặp liên từ 因为……，所以……',
      body: 'Nối hai vế câu có quan hệ nhân quả: vế trước nói nguyên nhân, vế sau nói kết quả. Có thể dùng cả cặp hoặc bỏ một từ. Ví dụ: 因为他生病了，所以没去学校。 因为他每天跑步，所以身体很好。 因为昨天下雨，所以我们都没去（打篮球）。',
      say: '因为昨天下雨，所以我们都没去',
    },
    {
      title: 'Trọng âm logic',
      body: 'Phần thông tin quan trọng được đọc nhấn. Câu trả lời cho "谁" nhấn chủ ngữ, câu trả lời cho "哪儿" nhấn nơi chốn.',
      say: '他在房间学习汉语呢',
    },
  ],

  writeChars: ['门', '羊', '外', '游', '泳', '经'],

  drills: [
    {
      title: 'Hai chữ đơn mới (认识独体字)',
      hint: 'Sách trang 46–47: nguồn gốc hình chữ. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '门', p: 'mén', m: 'gốc là hai cánh cửa ở lối ra vào của nhà' },
        { h: '羊', p: 'yáng', m: 'hình đầu con cừu nhìn chính diện, nghĩa là "cừu"' },
      ],
    },
    {
      title: 'Nói câu với 因为……所以…… (运用 1, sách trang 47)',
      hint: 'Mẫu: A 因为天气不好，B 所以我没去商店。 Bấm để nghe các vế gợi ý.',
      items: [
        { h: '工作太忙', p: 'gōngzuò tài máng', m: 'công việc quá bận' }, { h: '不能去跑步', p: 'bù néng qù pǎo bù', m: 'không đi chạy bộ được' },
        { h: '汉字太难了', p: 'Hànzì tài nán le', m: 'chữ Hán khó quá' }, { h: '我不喜欢写汉字', p: 'wǒ bù xǐhuan xiě Hànzì', m: 'tôi không thích viết chữ Hán' },
        { h: '下雨了', p: 'xià yǔ le', m: 'trời mưa rồi' }, { h: '不能去旅游', p: 'bù néng qù lǚyóu', m: 'không đi du lịch được' },
        { h: '身体不好', p: 'shēntǐ bù hǎo', m: 'sức khỏe không tốt' }, { h: '天天吃药', p: 'tiāntiān chī yào', m: 'ngày nào cũng uống thuốc' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 45)',
      items: [
        { q: '小王今天来学校了吗？', hint: '来了，他已经来了。' },
        { q: '他看见小王了没有？', hint: '没有，他在门外看见小王的自行车了。' },
        { q: '为什么他今天不想吃羊肉？', hint: '因为这个星期天天都吃羊肉。' },
        { q: '为什么昨天他们都没去打篮球？', hint: '因为昨天下雨。' },
        { q: '小张为什么去北京？', hint: '听说是去看他姐姐。' },
      ],
    },
  ],

  sentences: [
    { parts: ['你', '怎么', '知道', '他', '来', '了'], pinyin: 'Nǐ zěnme zhīdào tā lái le?', vi: 'Sao bạn biết cậu ấy đến rồi?' },
    { parts: ['我', '在', '门', '外', '看见', '他', '的', '自行车', '了'], pinyin: 'Wǒ zài mén wài kànjiàn tā de zìxíngchē le.', vi: 'Mình thấy xe đạp của cậu ấy ngoài cửa.' },
    { parts: ['你', '怎么', '不', '吃', '了'], pinyin: 'Nǐ zěnme bù chī le?', vi: 'Sao bạn không ăn nữa?' },
    { parts: ['这', '个', '星期', '天天', '都', '吃', '羊肉'], pinyin: 'Zhège xīngqī tiāntiān dōu chī yángròu.', vi: 'Tuần này ngày nào cũng ăn thịt cừu.' },
    { parts: ['因为', '昨天', '下雨', '，', '所以', '我们', '都', '没', '去'], pinyin: 'Yīnwèi zuótiān xià yǔ, suǒyǐ wǒmen dōu méi qù.', vi: 'Vì hôm qua mưa nên bọn mình không đi.' },
    { parts: ['这', '两', '天', '怎么', '没', '看见', '小张'], pinyin: 'Zhè liǎng tiān zěnme méi kànjiàn Xiǎo Zhāng?', vi: 'Mấy hôm nay sao không thấy Tiểu Trương?' },
  ],

  dictations: [
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 11–15)',
      hint: 'Nghe đoạn ghi âm (06-1, phần 3), chọn A, B hoặc C. Câu 11: A 女的 · B 男的 · C 没有人看见小卫. Câu 12: A 羊肉不好吃 · B 羊肉太贵了 · C 每天都吃. Câu 13: A 天气不好 · B 天气太冷了 · C 工作太忙了. Câu 14: A 八十公斤 · B 六十五公斤 · C 七十公斤. Câu 15: A 小王 · B 小张 · C 姐姐.',
      clip: { label: '06-1 · Sách bài tập, phần nghe', src: A + 'w06-1.mp3' },
      items: [
        { prompt: 'Câu 11', answer: 'C', gloss: '没有人看见小卫' }, { prompt: 'Câu 12', answer: 'C', gloss: '每天都吃' },
        { prompt: 'Câu 13', answer: 'A', gloss: '天气不好' }, { prompt: 'Câu 14', answer: 'A', gloss: '八十公斤' },
        { prompt: 'Câu 15', answer: 'B', gloss: '小张' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ (câu 21–25)',
      hint: 'A 件件 · B 因为 · C 打 · D 经常 · E 贵 · F 公斤. Gõ chữ cái A–F.',
      items: [
        { prompt: '昨天下雨了，所以我们都没去（ ）篮球。', answer: 'C', gloss: '打' }, { prompt: '这家商店的衣服（ ）都漂亮。', answer: 'A', gloss: '件件' },
        { prompt: '我（ ）跟同学们一起学习汉语。', answer: 'D', gloss: '经常' }, { prompt: '（ ）工作很忙，所以我没有时间运动。', answer: 'B', gloss: '因为' },
        { prompt: '你知道一（ ）苹果多少钱吗？', answer: 'F', gloss: '公斤' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, đúng hay sai (câu 26–30)',
      hint: 'Đọc câu cho sẵn rồi xét câu có dấu * đúng (gõ D) hay sai (gõ S).',
      items: [
        { prompt: '我在门外看见小王的自行车了。* 小王来了，我看见他了。', answer: 'S', gloss: 'Sai' },
        { prompt: '天天都吃羊肉，有鸡蛋面条吗？* 我不想吃羊肉了。', answer: 'D', gloss: 'Đúng' },
        { prompt: '因为昨天下雨，所以我们都没去打篮球。* 昨天天气不好。', answer: 'D', gloss: 'Đúng' },
        { prompt: '听说小王去北京看他姐姐了，所以没来学校。* 小王现在在北京呢。', answer: 'D', gloss: 'Đúng' },
        { prompt: '爸爸在医院工作，他每天都很忙，所以很少有时间休息。* 爸爸是大夫，他在医院工作。', answer: 'S', gloss: 'Sai' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu (câu 31–35)',
      hint: 'A 是啊，下雨了。 B 他已经来了，你没看见他吗？ C 他今天身体不太好。 D 天天吃米饭，我想来点儿面条。 E 他在哪儿呢？你看见他了吗？ F 昨天下雨了。 Gõ chữ cái A–F.',
      items: [
        { prompt: '小王今天怎么没来学校？', answer: 'C', gloss: '他今天身体不太好。' }, { prompt: '你们昨天怎么没去打篮球？', answer: 'F', gloss: '昨天下雨了。' },
        { prompt: '大卫什么时候来学校？', answer: 'B', gloss: '他已经来了，你没看见他吗？' }, { prompt: '你还想吃什么？', answer: 'D', gloss: '天天吃米饭，我想来点儿面条。' },
        { prompt: '今天天气很冷。', answer: 'A', gloss: '是啊，下雨了。' },
      ],
    },
  ],
}
