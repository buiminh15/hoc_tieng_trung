import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 2, Bài 9: 题太多，我没做完 (sách trang 65–72).
 * Sách bản Trung–Anh; phần tiếng Việt do app dịch.
 * Nghe: 09-1…09-5. Sách bài tập (trang 85–92, đáp án trang 17–19).
 */

const A = '/audio/hsk-std2/'

export const hskStd2Lesson9: Lesson = {
  id: 9,
  title: 'Bài nhiều quá, tôi làm không xong',
  hanzi: '题太多，我没做完',
  pinyin: 'Tí tài duō, wǒ méi zuò wán',
  vi: 'Bài nhiều quá, tôi làm không xong',
  intro: 'Nói về kết quả của hành động: 你都听懂了吗？ 题太多，我没做完。 Học bổ ngữ kết quả (看见, 听懂, 做完, 找到), giới từ 从, 第 chỉ thứ tự; ngữ điệu câu hỏi có/không; bộ 土 và 灬.',

  dialogue: [
    { who: 'A', hanzi: '你好！请问张欢在吗？', pinyin: 'Nǐ hǎo! Qǐngwèn Zhāng Huān zài ma?', vi: 'Xin chào! Cho hỏi Trương Hoan có ở đó không?', scene: 'Hội thoại 1 · gọi điện thoại' },
    { who: 'B', hanzi: '你打错了，我们这儿没有叫张欢的。', pinyin: 'Nǐ dǎ cuò le, wǒmen zhèr méiyǒu jiào Zhāng Huān de.', vi: 'Anh gọi nhầm rồi, ở đây không có ai tên Trương Hoan.' },
    { who: 'A', hanzi: '对不起。', pinyin: 'Duìbuqǐ.', vi: 'Xin lỗi.' },
    { who: 'A', hanzi: '您从几岁开始学习跳舞？', pinyin: 'Nín cóng jǐ suì kāishǐ xuéxí tiào wǔ?', vi: 'Cô bắt đầu học múa từ mấy tuổi?', scene: 'Hội thoại 2 · ở trường' },
    { who: 'B', hanzi: '我第一次跳舞是在七岁的时候。', pinyin: 'Wǒ dì-yī cì tiào wǔ shì zài qī suì de shíhou.', vi: 'Lần đầu tôi múa là năm bảy tuổi.' },
    { who: 'A', hanzi: '我女儿今年也七岁了。我希望她能跟您学跳舞，可以吗？', pinyin: 'Wǒ nǚ\'ér jīnnián yě qī suì le. Wǒ xīwàng tā néng gēn nín xué tiào wǔ, kěyǐ ma?', vi: 'Con gái tôi năm nay cũng bảy tuổi. Tôi mong cháu được học múa với cô, được không ạ?' },
    { who: 'B', hanzi: '没问题，非常欢迎。', pinyin: 'Méi wèntí, fēicháng huānyíng.', vi: 'Không vấn đề gì, rất hoan nghênh.' },
    { who: 'A', hanzi: '你知道吗？大卫找到工作了。', pinyin: 'Nǐ zhīdào ma? Dàwèi zhǎodào gōngzuò le.', vi: 'Bạn biết chưa? David tìm được việc rồi.', scene: 'Hội thoại 3 · ở nhà' },
    { who: 'B', hanzi: '太好了！他从什么时候开始上班？', pinyin: 'Tài hǎo le! Tā cóng shénme shíhou kāishǐ shàng bān?', vi: 'Tốt quá! Từ khi nào cậu ấy bắt đầu đi làm?' },
    { who: 'A', hanzi: '从下个星期一开始。', pinyin: 'Cóng xià ge xīngqī yī kāishǐ.', vi: 'Từ thứ hai tuần sau.' },
    { who: 'B', hanzi: '这是他的第一个工作，希望他能喜欢。', pinyin: 'Zhè shì tā de dì-yī ge gōngzuò, xīwàng tā néng xǐhuan.', vi: 'Đây là công việc đầu tiên của cậu ấy, mong là cậu ấy thích.' },
    { who: 'A', hanzi: '昨天的考试怎么样？你都听懂了吗？', pinyin: 'Zuótiān de kǎoshì zěnmeyàng? Nǐ dōu tīngdǒng le ma?', vi: 'Bài thi hôm qua thế nào? Bạn nghe hiểu hết không?', scene: 'Hội thoại 4 · trong lớp học' },
    { who: 'B', hanzi: '听懂了。', pinyin: 'Tīngdǒng le.', vi: 'Nghe hiểu rồi.' },
    { who: 'A', hanzi: '你都做完了没有？', pinyin: 'Nǐ dōu zuòwán le méiyǒu?', vi: 'Bạn làm xong hết chưa?' },
    { who: 'B', hanzi: '题太多，我没做完。', pinyin: 'Tí tài duō, wǒ méi zuòwán.', vi: 'Bài nhiều quá, mình làm không xong.' },
  ],
  dialogueClips: [
    { label: '09-1 · Hội thoại 1: 你打错了', src: A + 'l09-1.mp3' },
    { label: '09-2 · Hội thoại 2: 您从几岁开始学习跳舞？', src: A + 'l09-2.mp3' },
    { label: '09-3 · Hội thoại 3: 大卫找到工作了', src: A + 'l09-3.mp3' },
    { label: '09-4 · Hội thoại 4: 题太多，我没做完', src: A + 'l09-4.mp3' },
  ],
  dialogueTip: '<b>Động từ + bổ ngữ kết quả</b>: 看见, 听懂, 做完, 找到, 打错. Phủ định: <b>没(有) + động từ + bổ ngữ</b>, KHÔNG có 了 ở cuối (我没做完). Hỏi: thêm <b>(了)没有？</b> ở cuối. <b>从……(到……)</b>: từ… (đến…). <b>第 + số + lượng từ</b>: thứ tự.',
  slowSay: '题太多，我没做完',

  vocab: [
    { hanzi: '错', parts: '钅 + 昔', pinyin: 'cuò', pos: 'tính từ', meaning: 'sai, nhầm', han_viet: 'thác' },
    { hanzi: '从', pinyin: 'cóng', pos: 'giới từ', meaning: 'từ', han_viet: 'tòng' },
    { hanzi: '跳舞', parts: '跳 (khiêu) + 舞 (vũ)', pinyin: 'tiào wǔ', pos: 'động từ', meaning: 'múa, nhảy', han_viet: 'khiêu vũ' },
    { hanzi: '第一', pinyin: 'dì-yī', pos: 'số từ', meaning: 'thứ nhất, đầu tiên', han_viet: 'đệ nhất' },
    { hanzi: '希望', parts: '希 (hy) + 望 (vọng)', pinyin: 'xīwàng', pos: 'động từ', meaning: 'hy vọng, mong', han_viet: 'hy vọng' },
    { hanzi: '问题', parts: '问 (vấn) + 题 (đề)', pinyin: 'wèntí', pos: 'danh từ', meaning: 'vấn đề, câu hỏi', han_viet: 'vấn đề' },
    { hanzi: '欢迎', pinyin: 'huānyíng', pos: 'động từ', meaning: 'hoan nghênh, chào mừng. Từ ngoài đại cương HSK 2 (dấu * trong sách)', han_viet: 'hoan nghênh' },
    { hanzi: '上班', pinyin: 'shàng bān', pos: 'động từ', meaning: 'đi làm', han_viet: 'thượng ban' },
    { hanzi: '懂', parts: '忄 + 董', pinyin: 'dǒng', pos: 'động từ', meaning: 'hiểu', han_viet: 'đổng' },
    { hanzi: '完', parts: '宀 + 元', pinyin: 'wán', pos: 'động từ', meaning: 'xong, hết', han_viet: 'hoàn' },
    { hanzi: '题', parts: '是 + 页', pinyin: 'tí', pos: 'danh từ', meaning: 'đề, câu hỏi (bài tập)', han_viet: 'đề' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Bổ ngữ kết quả', title: 'Bổ ngữ kết quả',
      intro: 'Một số động từ hoặc tính từ đặt sau động từ để bổ sung, nói rõ kết quả của hành động, gọi là bổ ngữ kết quả.',
      groups: [
        { label: 'Khẳng định', items: [['我看见你的女朋友了。', 'Wǒ kànjiàn nǐ de nǚpéngyou le.', 'Tôi thấy bạn gái của bạn rồi.'], ['我听懂今天的汉语课了。', 'Wǒ tīngdǒng jīntiān de Hànyǔ kè le.', 'Tôi nghe hiểu bài tiếng Hán hôm nay rồi.'], ['我做好饭了。', 'Wǒ zuòhǎo fàn le.', 'Tôi nấu cơm xong rồi.'], ['大卫找到工作了。', 'Dàwèi zhǎodào gōngzuò le.', 'David tìm được việc rồi.']] },
        { label: 'Phủ định: 没(有) + động từ + bổ ngữ, không có 了', items: [['我没有看见你的女朋友。', 'Wǒ méiyǒu kànjiàn nǐ de nǚpéngyou.', 'Tôi không thấy bạn gái của bạn.'], ['我没听懂他说的话。', 'Wǒ méi tīngdǒng tā shuō de huà.', 'Tôi không nghe hiểu lời anh ấy.'], ['我没做完（考试题）。', 'Wǒ méi zuòwán (kǎoshì tí).', 'Tôi không làm xong (bài thi).']] },
        { label: 'Câu hỏi: ……(了)没有？', items: [['你看见我的女朋友了没有？', 'Nǐ kànjiàn wǒ de nǚpéngyou le méiyǒu?', 'Bạn có thấy bạn gái tôi không?'], ['你听懂他说的话没有？', 'Nǐ tīngdǒng tā shuō de huà méiyǒu?', 'Bạn nghe hiểu lời anh ấy không?'], ['你（都）做完（考试题）了没有？', 'Nǐ (dōu) zuòwán (kǎoshì tí) le méiyǒu?', 'Bạn làm xong (bài thi) chưa?']] },
      ],
    },
    {
      kind: 'examples', label: 'Ngữ điệu câu hỏi', title: 'Ngữ điệu câu hỏi có/không (是非疑问句)',
      clip: { label: '09-5 · Nghe và đọc theo (ngữ điệu câu hỏi)', src: A + 'l09-5.mp3' },
      intro: 'Phần vị ngữ được đọc nhấn, cuối câu lên giọng.',
      groups: [{ label: 'Lên giọng ↗', items: [['你明天去学校吗？', 'Nǐ míngtiān qù xuéxiào ma? ↗', 'nhấn 去'], ['他们都知道这件事吗？', 'Tāmen dōu zhīdào zhè jiàn shì ma? ↗', 'nhấn 知道'], ['你都听懂了吗？', 'Nǐ dōu tīngdǒng le ma? ↗', 'nhấn 听懂']] }],
    },
    {
      kind: 'examples', label: 'Bộ thủ', title: 'Chữ Hán: bộ 土 và 灬',
      intro: 'Bộ 土 (thổ) phần lớn liên quan đến đất, bùn, công trình; bộ 灬 (bốn chấm hỏa) liên quan đến lửa và việc dùng lửa.',
      groups: [{ label: 'Bộ 土 và 灬', items: [['块', 'kuài', 'khối, miếng (bộ 土)'], ['地', 'dì', 'đất (bộ 土)'], ['热', 'rè', 'nóng (bộ 灬)'], ['黑', 'hēi', 'đen (bộ 灬)']] }],
    },
  ],

  notes: [
    {
      title: 'Bổ ngữ kết quả',
      body: 'Động từ hoặc tính từ đặt sau động từ để nói kết quả hành động: 看见, 听懂, 做好, 找到, 做完, 打错. Phủ định thêm 没(有) trước động từ và cuối câu KHÔNG dùng 了: 我没做完。 Hỏi thì thêm (了)没有 ở cuối: 你都做完了没有？',
      say: '题太多，我没做完',
    },
    {
      title: 'Giới từ 从',
      body: '从 dẫn ra điểm bắt đầu của một khoảng thời gian, quãng đường, quá trình hay thứ tự, thường đi với 到. Ví dụ: 从北京到上海要坐几个小时的飞机？ 从老人到孩子都喜欢吃苹果。 从下个星期一开始（上班）。',
      say: '从下个星期一开始',
    },
    {
      title: '第 chỉ thứ tự',
      body: '第 đặt trước cụm số lượng để chỉ thứ tự: 第一本书, 第二个工作, 第一次跳舞.',
      say: '第一次',
    },
    {
      title: 'Ngữ điệu câu hỏi có/không',
      body: 'Câu hỏi với 吗: nhấn phần vị ngữ, cuối câu lên giọng: 你明天去学校吗？↗',
      say: '你都听懂了吗',
    },
  ],

  writeChars: ['错', '从', '懂', '完', '题', '希'],

  drills: [
    {
      title: 'Nói câu với bổ ngữ kết quả (运用 2, sách trang 72)',
      hint: 'Dùng 看见, 听见, 写完, 看完, 听懂, 写错, 买到. Bấm để nghe.',
      items: [
        { h: '今天上午你看见大卫了吗？', p: 'Jīntiān shàngwǔ nǐ kànjiàn Dàwèi le ma?', m: 'Sáng nay bạn thấy David không?' },
        { h: '我没听见。', p: 'Wǒ méi tīngjiàn.', m: 'Tôi không nghe thấy.' },
        { h: '这本书我看完了。', p: 'Zhè běn shū wǒ kànwán le.', m: 'Quyển sách này tôi đọc xong rồi.' },
        { h: '这个字你写错了。', p: 'Zhège zì nǐ xiěcuò le.', m: 'Chữ này bạn viết sai rồi.' },
        { h: '我买到电影票了。', p: 'Wǒ mǎidào diànyǐng piào le.', m: 'Tôi mua được vé xem phim rồi.' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 69)',
      items: [
        { q: '老师从几岁开始学跳舞？', hint: '她从七岁开始学跳舞。' },
        { q: '老师想教她的女儿跳舞吗？', hint: '想，没问题，非常欢迎。' },
        { q: '大卫什么时候去工作？', hint: '从下个星期一开始。' },
        { q: '这次考试她都听懂了吗？', hint: '听懂了。' },
        { q: '她考试为什么没做完？', hint: '因为题太多。' },
      ],
    },
  ],

  sentences: [
    { parts: ['你', '打', '错', '了'], pinyin: 'Nǐ dǎ cuò le.', vi: 'Anh gọi nhầm rồi.' },
    { parts: ['您', '从', '几', '岁', '开始', '学习', '跳舞'], pinyin: 'Nín cóng jǐ suì kāishǐ xuéxí tiào wǔ?', vi: 'Cô bắt đầu học múa từ mấy tuổi?' },
    { parts: ['我', '第一', '次', '跳舞', '是', '在', '七', '岁', '的', '时候'], pinyin: 'Wǒ dì-yī cì tiào wǔ shì zài qī suì de shíhou.', vi: 'Lần đầu tôi múa là năm bảy tuổi.' },
    { parts: ['大卫', '找', '到', '工作', '了'], pinyin: 'Dàwèi zhǎodào gōngzuò le.', vi: 'David tìm được việc rồi.' },
    { parts: ['你', '都', '听', '懂', '了', '吗'], pinyin: 'Nǐ dōu tīngdǒng le ma?', vi: 'Bạn nghe hiểu hết không?' },
    { parts: ['题', '太', '多', '，', '我', '没', '做', '完'], pinyin: 'Tí tài duō, wǒ méi zuòwán.', vi: 'Bài nhiều quá, tôi làm không xong.' },
  ],

  dictations: [
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 11–15)',
      hint: 'Nghe đoạn ghi âm (09-1, phần 3), chọn A, B hoặc C. Câu 11: A 想找女的 · B 想找张欢 · C 想去看看张欢. Câu 12: A 昨天 · B 今天 · C 明天. Câu 13: A 医院 · B 学校 · C 公司. Câu 14: A 没看见 · B 看见了 · C 没有报纸. Câu 15: A 没听懂 · B 不会做 · C 没做完.',
      clip: { label: '09-1 · Sách bài tập, phần nghe', src: A + 'w09-1.mp3' },
      items: [
        { prompt: 'Câu 11', answer: 'B', gloss: '想找张欢' }, { prompt: 'Câu 12', answer: 'C', gloss: '明天' },
        { prompt: 'Câu 13', answer: 'A', gloss: '医院' }, { prompt: 'Câu 14', answer: 'A', gloss: '没看见' },
        { prompt: 'Câu 15', answer: 'C', gloss: '没做完' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ (câu 21–25)',
      hint: 'A 上班 · B 从 · C 希望 · D 问题 · E 贵 · F 懂. Gõ chữ cái A–F.',
      items: [
        { prompt: '我每天（ ）八点到十二点都在公司工作。', answer: 'B', gloss: '从' }, { prompt: '我家离公司不太远，所以每天走路去（ ）。', answer: 'A', gloss: '上班' },
        { prompt: '今天的课你都听（ ）了没有？', answer: 'F', gloss: '懂' }, { prompt: '你有什么（ ）都可以问老师。', answer: 'D', gloss: '问题' },
        { prompt: '我（ ）能找到一个好的工作。', answer: 'C', gloss: '希望' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, đúng hay sai (câu 26–30)',
      hint: 'Đọc câu cho sẵn rồi xét câu có dấu * đúng (gõ D) hay sai (gõ S).',
      items: [
        { prompt: '我女儿已经六岁了，我希望她能跟您学唱歌。* 她女儿唱歌非常好。', answer: 'S', gloss: 'Sai' },
        { prompt: '这是他的第一个工作，从下个星期开始上班，希望他能喜欢这个工作。* 他还没有上班呢。', answer: 'D', gloss: 'Đúng' },
        { prompt: '昨天的考试不太难，题很多，我有两个题没有做完。* 这次考试题很多，很难。', answer: 'S', gloss: 'Sai' },
        { prompt: '今天是9月20号，还有三天就是爸爸的生日了。我想送他一个新手机。* 9月23号是我的生日。', answer: 'S', gloss: 'Sai' },
        { prompt: '我的一个朋友正在找房子，希望离公司近一些，这样他每天七点起床就可以了。* 他的朋友现在每天七点起床。', answer: 'S', gloss: 'Sai' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu (câu 31–35)',
      hint: 'A 就在前面，你还没看见吗？ B 非常好，我想明年再来一次。 C 还可以，都做完了。 D 这些衣服你一个人能洗完吗？ E 他在哪儿呢？你看见他了吗？ F 等等我，我也想去。 Gõ chữ cái A–F.',
      items: [
        { prompt: '昨天的考试怎么样？题都做完了吗？', answer: 'C', gloss: '还可以，都做完了。' }, { prompt: '没关系，今天洗一些，明天再洗一些。', answer: 'D', gloss: '这些衣服你一个人能洗完吗？' },
        { prompt: '你看见我哥哥了吗？', answer: 'A', gloss: '就在前面，你还没看见吗？' }, { prompt: '羊肉吃完了，我再去商店买一些吧。', answer: 'F', gloss: '等等我，我也想去。' },
        { prompt: '第一次来北京吧？北京漂亮吗？', answer: 'B', gloss: '非常好，我想明年再来一次。' },
      ],
    },
  ],
}
