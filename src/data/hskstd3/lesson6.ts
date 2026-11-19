import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 3, Bài 6: 怎么突然找不到了？ (sách trang 61–70).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách.
 * Nghe: 06-1…06-5. Bài tập: 练习 2–4 của giáo trình, đáp án theo "Đáp án giáo trình HSK 3" trang 11–13.
 */

const A = '/audio/hsk-std3/'

export const hskStd3Lesson6: Lesson = {
  id: 6,
  title: 'Sao bỗng dưng lại không tìm thấy?',
  hanzi: '怎么突然找不到了？',
  pinyin: 'Zěnme tūrán zhǎo bu dào le?',
  vi: 'Sao bỗng dưng lại không tìm thấy?',
  intro: 'Nói về việc có làm được hay không. Học bổ ngữ chỉ khả năng (động từ + 得/不 + bổ ngữ), cấu trúc danh từ + 呢 hỏi vị trí, phân biệt 刚 và 刚才.',

  dialogue: [
    { who: 'A', name: '周明', hanzi: '我的眼镜呢？怎么突然找不到了？你看见了吗？', pinyin: 'Wǒ de yǎnjìng ne? Zěnme tūrán zhǎo bu dào le? Nǐ kànjiàn le ma?', vi: 'Kính của anh đâu? Sao tự nhiên không tìm thấy? Em có thấy không?', scene: 'Hội thoại 1 · Trong phòng khách' },
    { who: 'B', name: '周太太', hanzi: '我没看见啊。', pinyin: 'Wǒ méi kànjiàn a.', vi: 'Em không thấy.' },
    { who: 'A', name: '周明', hanzi: '我离不开眼镜，没有眼镜，我一个字也看不清楚。', pinyin: 'Wǒ lí bu kāi yǎnjìng, méiyǒu yǎnjìng, wǒ yí ge zì yě kàn bu qīngchu.', vi: 'Anh không thể rời kính, không có kính thì anh chẳng nhìn rõ được chữ nào.' },
    { who: 'B', name: '周太太', hanzi: '你去房间找找，是不是刚才放在桌子上了？', pinyin: 'Nǐ qù fángjiān zhǎozhao, shì bu shì gāngcái fàng zài zhuōzi shang le?', vi: 'Anh vào phòng tìm thử xem, có phải lúc nãy để trên bàn không?' },
    { who: 'A', name: '周明', hanzi: '我怎么看得到啊？你快过来帮忙啊。', pinyin: 'Wǒ zěnme kàn de dào a? Nǐ kuài guòlai bāng máng a.', vi: 'Anh làm sao mà thấy được? Em mau lại đây giúp đi.' },
    { who: 'B', name: '周太太', hanzi: '好吧，我帮你去找找。', pinyin: 'Hǎo ba, wǒ bāng nǐ qù zhǎozhao.', vi: 'Được rồi, em đi tìm giúp anh.' },
    { who: 'A', name: '同学', hanzi: '今天的作业你做完了吗？', pinyin: 'Jīntiān de zuòyè nǐ zuòwán le ma?', vi: 'Bài tập hôm nay bạn làm xong chưa?', scene: 'Hội thoại 2 · Nói chuyện qua điện thoại' },
    { who: 'B', name: '儿子', hanzi: '刚做完，你呢？', pinyin: 'Gāng zuòwán, nǐ ne?', vi: 'Vừa làm xong, còn bạn?' },
    { who: 'A', name: '同学', hanzi: '今天这些题特别难，我看不懂，不会做，你能帮我吗？', pinyin: 'Jīntiān zhèxiē tí tèbié nán, wǒ kàn bu dǒng, bú huì zuò, nǐ néng bāng wǒ ma?', vi: 'Bài hôm nay khó lắm, mình đọc không hiểu, không biết làm, bạn giúp mình được không?' },
    { who: 'B', name: '儿子', hanzi: '电话里讲不明白，你来我家吧，我给你讲讲。', pinyin: 'Diànhuà lǐ jiǎng bu míngbai, nǐ lái wǒ jiā ba, wǒ gěi nǐ jiǎngjiang.', vi: 'Qua điện thoại giảng không rõ được, bạn đến nhà mình đi, mình giảng cho.' },
    { who: 'A', name: '同学', hanzi: '好啊，我锻炼完了就过去。', pinyin: 'Hǎo a, wǒ duànliàn wán le jiù guòqu.', vi: 'Được, mình tập thể dục xong là qua.' },
    { who: 'A', name: '同事', hanzi: '你怎么有点儿不高兴？', pinyin: 'Nǐ zěnme yǒudiǎnr bù gāoxìng?', vi: 'Sao anh có vẻ không vui?', scene: 'Hội thoại 3 · Trong phòng giải lao' },
    { who: 'B', name: '小刚', hanzi: '我想请小丽吃饭，但是找不到好饭馆儿。', pinyin: 'Wǒ xiǎng qǐng Xiǎolì chī fàn, dànshì zhǎo bu dào hǎo fànguǎnr.', vi: 'Tôi muốn mời Tiểu Lệ ăn cơm nhưng không tìm được quán ngon.' },
    { who: 'A', name: '同事', hanzi: '那你请她听音乐会吧，她喜欢听音乐。', pinyin: 'Nà nǐ qǐng tā tīng yīnyuèhuì ba, tā xǐhuan tīng yīnyuè.', vi: 'Vậy anh mời cô ấy đi nghe hòa nhạc đi, cô ấy thích nghe nhạc.' },
    { who: 'B', name: '小刚', hanzi: '音乐会人太多，买不到票。', pinyin: 'Yīnyuèhuì rén tài duō, mǎi bu dào piào.', vi: 'Hòa nhạc đông người quá, không mua được vé.' },
    { who: 'A', name: '同事', hanzi: '那去公园走走，聊聊天儿吧。', pinyin: 'Nà qù gōngyuán zǒuzou, liáoliao tiānr ba.', vi: 'Vậy ra công viên đi dạo, tán gẫu đi.' },
    { who: 'B', name: '小刚', hanzi: '公园太大，多累啊。', pinyin: 'Gōngyuán tài dà, duō lèi a.', vi: 'Công viên to quá, mệt lắm.' },
    { who: 'A', name: '周太太', hanzi: '你怎么还喝咖啡？', pinyin: 'Nǐ zěnme hái hē kāfēi?', vi: 'Sao anh vẫn còn uống cà phê?', scene: 'Hội thoại 4 · Trong phòng khách' },
    { who: 'B', name: '周明', hanzi: '怎么了？', pinyin: 'Zěnme le?', vi: 'Sao thế?' },
    { who: 'A', name: '周太太', hanzi: '你不是说晚上睡不着觉吗？', pinyin: 'Nǐ bú shì shuō wǎnshang shuì bu zháo jiào ma?', vi: 'Chẳng phải anh nói tối ngủ không được sao?' },
    { who: 'B', name: '周明', hanzi: '没事，我只喝一杯。', pinyin: 'Méi shì, wǒ zhǐ hē yì bēi.', vi: 'Không sao, anh chỉ uống một cốc.' },
    { who: 'A', name: '周太太', hanzi: '你还是喝杯牛奶吧，可以睡得更好些。', pinyin: 'Nǐ háishi hē bēi niúnǎi ba, kěyǐ shuì de gèng hǎo xiē.', vi: 'Anh uống cốc sữa đi, có thể ngủ ngon hơn.' },
    { who: 'B', name: '周明', hanzi: '好吧，牛奶呢？', pinyin: 'Hǎo ba, niúnǎi ne?', vi: 'Được, sữa đâu?' },
    { who: 'A', name: '周太太', hanzi: '还没买呢。', pinyin: 'Hái méi mǎi ne.', vi: 'Vẫn chưa mua.' },
  ],
  dialogueClips: [
    { label: '06-1 · Trong phòng khách', src: A + 'l06-1.mp3' },
    { label: '06-2 · Nói chuyện qua điện thoại', src: A + 'l06-2.mp3' },
    { label: '06-3 · Trong phòng giải lao', src: A + 'l06-3.mp3' },
    { label: '06-4 · Trong phòng khách', src: A + 'l06-4.mp3' },
  ],
  dialogueTip: '<b>Động từ + 得 / 不 + bổ ngữ</b>: có thể / không thể đạt kết quả (看得清楚 / 看不清楚, 找不到, 睡不着). <b>Danh từ + 呢？</b>: … đâu rồi? (我的眼镜呢？). <b>刚</b> là phó từ, chỉ đứng trước động từ; <b>刚才</b> là danh từ, đứng trước động từ hoặc đầu câu.',
  slowSay: '怎么突然找不到了',

  vocab: [
    { hanzi: '眼镜', pinyin: 'yǎnjìng', pos: 'danh từ', meaning: 'mắt kính. Từ ngoài đại cương HSK 3 (dấu * trong sách)', han_viet: 'nhãn kính' },
    { hanzi: '突然', pinyin: 'tūrán', pos: 'phó từ', meaning: 'bỗng nhiên, bỗng dưng', han_viet: 'đột nhiên' },
    { hanzi: '离开', pinyin: 'lí kāi', pos: 'động từ', meaning: 'rời khỏi, tách khỏi', han_viet: 'ly khai' },
    { hanzi: '清楚', pinyin: 'qīngchu', pos: 'tính từ', meaning: 'rõ ràng', han_viet: 'thanh sở' },
    { hanzi: '刚才', pinyin: 'gāngcái', pos: 'danh từ', meaning: 'lúc này', han_viet: 'cương tài' },
    { hanzi: '帮忙', pinyin: 'bāng máng', pos: 'động từ', meaning: 'giúp, giúp đỡ', han_viet: 'bang mang' },
    { hanzi: '特别', pinyin: 'tèbié', pos: 'phó từ', meaning: 'vô cùng, rất', han_viet: 'đặc biệt' },
    { hanzi: '讲', pinyin: 'jiǎng', pos: 'động từ', meaning: 'giải thích, nói', han_viet: 'giảng' },
    { hanzi: '明白', pinyin: 'míngbai', pos: 'tính từ', meaning: 'rõ ràng, dễ hiểu', han_viet: 'minh bạch' },
    { hanzi: '锻炼', pinyin: 'duànliàn', pos: 'động từ', meaning: 'tập thể dục', han_viet: 'đoán luyện' },
    { hanzi: '音乐', pinyin: 'yīnyuè', pos: 'danh từ', meaning: 'âm nhạc', han_viet: 'âm nhạc' },
    { hanzi: '公园', pinyin: 'gōngyuán', pos: 'danh từ', meaning: 'công viên', han_viet: 'công viên' },
    { hanzi: '聊天(儿)', pinyin: 'liáo tiān(r)', pos: 'động từ', meaning: 'tán gẫu', han_viet: '' },
    { hanzi: '睡着', pinyin: 'shuì zháo', pos: 'động từ', meaning: 'ngủ được. Từ ngoài đại cương HSK 3 (dấu * trong sách)', han_viet: '' },
    { hanzi: '更', pinyin: 'gèng', pos: 'phó từ', meaning: 'càng, hơn nữa', han_viet: 'cánh' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Bổ ngữ khả năng', title: 'Bổ ngữ chỉ khả năng: động từ + 得/不 + bổ ngữ',
      intro: 'Cấu trúc "động từ + 得 + bổ ngữ", "động từ + 不 + bổ ngữ" được dùng để diễn tả rằng một người có thể thu được kết quả hoặc đạt được mục đích nào đó hay không. Bổ ngữ đứng sau 得 thường là bổ ngữ chỉ kết quả, bổ ngữ chỉ phương hướng, một số tính từ hoặc động từ. Hình thức nghi vấn: "động từ + 得 + bổ ngữ + động từ + 不 + bổ ngữ" hoặc "động từ + 得 + bổ ngữ + 吗".',
      groups: [{ label: 'Ví dụ trong sách', items: [['我看得清楚那个汉字。', 'Wǒ kàn de qīngchu nàge Hànzì.', 'Tôi nhìn rõ được chữ Hán đó.'], ['楼太高了，我上不去。', 'Lóu tài gāo le, wǒ shàng bu qù.', 'Tòa nhà cao quá, tôi không lên được.'], ['老师说的话你听得见听不见？', 'Lǎoshī shuō de huà nǐ tīng de jiàn tīng bu jiàn?', 'Lời thầy nói bạn có nghe thấy không?'], ['我找不到好饭馆。', 'Wǒ zhǎo bu dào hǎo fànguǎn.', 'Tôi không tìm được quán ngon.']] }],
    },
    {
      kind: 'examples', label: '呢 · 刚 · 刚才', title: 'Danh từ + 呢 hỏi vị trí; 刚 và 刚才',
      intro: 'Cấu trúc "danh từ + 呢" được dùng để hỏi người hay sự vật nào đó đang ở đâu. 刚 là phó từ, 刚才 là danh từ; cả hai đều chỉ hành động xảy ra cách đây không lâu, nhưng 刚才 thường chỉ cách đây vài phút còn 刚 chỉ thời gian ngắn theo quan điểm của người nói (có thể vài phút, vài ngày, thậm chí vài tháng). 刚 chỉ đứng trước động từ, 刚才 có thể đứng trước động từ hoặc ở đầu câu.',
      groups: [
        { label: 'Danh từ + 呢？', items: [['你的书呢？放在哪儿了？', 'Nǐ de shū ne? Fàng zài nǎr le?', 'Sách của bạn đâu? Để ở đâu rồi?'], ['我的眼镜呢？你看见了吗？', 'Wǒ de yǎnjìng ne? Nǐ kànjiàn le ma?', 'Kính của tôi đâu? Bạn thấy không?']] },
        { label: '刚', items: [['爸爸刚出去。', 'Bàba gāng chūqu.', 'Bố vừa ra ngoài.'], ['我刚喝完一杯咖啡。', 'Wǒ gāng hēwán yì bēi kāfēi.', 'Tôi vừa uống xong một cốc cà phê.'], ['儿子刚做完作业。', 'Érzi gāng zuòwán zuòyè.', 'Con trai vừa làm xong bài tập.']] },
        { label: '刚才', items: [['爸爸刚才出去了。', 'Bàba gāngcái chūqu le.', 'Lúc nãy bố ra ngoài rồi.'], ['刚才我喝了一杯咖啡。', 'Gāngcái wǒ hēle yì bēi kāfēi.', 'Lúc nãy tôi uống một cốc cà phê.'], ['眼镜周明刚才放在桌子上了。', 'Yǎnjìng Zhōu Míng gāngcái fàng zài zhuōzi shang le.', 'Kính thì lúc nãy Châu Minh để trên bàn.']] },
      ],
    },
    {
      kind: 'examples', label: 'Đọc cụm từ', title: 'Đọc to các cụm từ và câu (练习 1)',
      clip: { label: '06-5 · Đọc to các cụm từ và câu', src: A + 'l06-5.mp3' },
      intro: 'Bấm để nghe. Cách thành lập từ mới: 学校 + 公园 → 校园, 吃饭 + 桌子 → 饭桌, 鲜花 + 公园 → 花园.',
      groups: [{ label: 'Cụm từ', items: [
        ['突然下雨了', 'tūrán xià yǔ le', 'bỗng nhiên mưa'], ['离开北京', 'líkāi Běijīng', 'rời Bắc Kinh'],
        ['离不开眼镜', 'lí bu kāi yǎnjìng', 'không rời được kính'], ['帮一个忙', 'bāng yí ge máng', 'giúp một việc'],
        ['讲清楚', 'jiǎng qīngchu', 'giảng rõ ràng'], ['电话里讲不明白', 'diànhuà lǐ jiǎng bu míngbai', 'qua điện thoại giảng không rõ'],
        ['校园', 'xiàoyuán', 'khuôn viên trường'], ['饭桌', 'fànzhuō', 'bàn ăn'], ['花园', 'huāyuán', 'vườn hoa'],
      ] }],
    },
  ],

  notes: [
    {
      title: 'Bổ ngữ chỉ khả năng',
      body: '"Động từ + 得 + bổ ngữ" là khẳng định, "động từ + 不 + bổ ngữ" là phủ định, diễn tả có thể đạt kết quả hay mục đích không: 我看得清楚那个汉字。 楼太高了，我上不去。 Nghi vấn: 你听得见听不见？ hoặc 你听得见吗？',
      say: '我找不到好饭馆',
    },
    {
      title: 'Danh từ + 呢 hỏi vị trí',
      body: 'Cấu trúc "danh từ + 呢" dùng để hỏi người hay sự vật đang ở đâu: 妈妈呢？ (Mẹ đâu rồi?) 小狗呢？ (Con chó đâu rồi?) 我的眼镜呢？你看见了吗？',
      say: '我的眼镜呢',
    },
    {
      title: '刚 và 刚才',
      body: '刚 là phó từ, chỉ đứng trước động từ: 我刚来中国两个月 (hai tháng mà người nói thấy là rất ngắn). 刚才 là danh từ, thường chỉ cách đây vài phút, có thể đứng trước động từ hoặc ở đầu câu: 刚才我喝了一杯咖啡。',
      say: '儿子刚做完作业',
    },
    {
      title: 'Tục ngữ: 万事开头难',
      body: 'Vạn sự khởi đầu nan. Câu này cho chúng ta thấy rằng gặp phải khó khăn khi bắt đầu thực hiện một công việc là điều rất bình thường, nhưng nếu ta không bỏ cuộc và kiên trì theo đuổi thì về sau công việc sẽ trở nên dễ dàng và thu được kết quả tốt đẹp.',
      say: '万事开头难',
    },
  ],

  writeChars: ['突', '然', '清', '楚', '刚', '讲', '锻', '炼'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 4)',
      items: [
        { q: '周明要找什么？为什么？', hint: '周明要找眼镜，因为他离不开眼镜，没有眼镜，他一个字也看不清楚。' },
        { q: '周明的儿子做完作业了吗？', hint: '他刚做完作业。' },
        { q: '周明儿子的同学一会儿要做什么？', hint: '他要去周明家，让周明的儿子帮他讲题。' },
        { q: '小刚今天怎么了？为什么？', hint: '小刚今天有点儿不高兴，因为他想请小丽吃饭，但是找不到好饭馆。想请小丽听音乐会，买不到票。想去公园走走、聊聊天儿，又太累了。' },
        { q: '周明在喝什么？', hint: '周明在喝咖啡。' },
        { q: '周明喝牛奶了吗？为什么？', hint: '周明没有喝牛奶，因为他太太还没买牛奶呢。' },
      ],
    },
    {
      title: 'Hoạt động nhóm: ai giỏi nhất? (运用 2)',
      items: [
        { q: 'A: 马可，你看得懂中国电影吗？  B: 我看得懂中国电影。  A: 你听得懂汉语歌吗？  B: 我听不懂汉语歌。', hint: 'Từ gợi ý: 听懂, 看懂, 吃完, 喝完, 买到.' },
      ],
    },
  ],

  sentences: [
    { parts: ['我', '的', '眼镜', '呢'], pinyin: 'Wǒ de yǎnjìng ne?', vi: 'Kính của tôi đâu?' },
    { parts: ['怎么', '突然', '找', '不', '到', '了'], pinyin: 'Zěnme tūrán zhǎo bu dào le?', vi: 'Sao tự nhiên không tìm thấy?' },
    { parts: ['没有', '眼镜', '，', '我', '一', '个', '字', '也', '看', '不', '清楚'], pinyin: 'Méiyǒu yǎnjìng, wǒ yí ge zì yě kàn bu qīngchu.', vi: 'Không có kính, tôi chẳng nhìn rõ được chữ nào.' },
    { parts: ['电话', '里', '讲', '不', '明白'], pinyin: 'Diànhuà lǐ jiǎng bu míngbai.', vi: 'Qua điện thoại giảng không rõ được.' },
    { parts: ['音乐会', '人', '太', '多', '，', '买', '不', '到', '票'], pinyin: 'Yīnyuèhuì rén tài duō, mǎi bu dào piào.', vi: 'Hòa nhạc đông quá, không mua được vé.' },
    { parts: ['你', '不', '是', '说', '晚上', '睡', '不', '着', '觉', '吗'], pinyin: 'Nǐ bú shì shuō wǎnshang shuì bu zháo jiào ma?', vi: 'Chẳng phải anh nói tối ngủ không được sao?' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 清楚 · B 讲 · C 突然 · D 特别 · E 明白. Gõ chữ cái A–E.',
      items: [
        { prompt: '刚才还是晴天，怎么现在（ ）就下雨了？', answer: 'C', gloss: '突然' }, { prompt: '你的意思我已经听（ ）了。', answer: 'E', gloss: '明白' },
        { prompt: '今天的语法课我没去，你给我（ ）一下吧。', answer: 'B', gloss: '讲' }, { prompt: '今天天气（ ）好，我们去爬山吧。', answer: 'D', gloss: '特别' },
        { prompt: '他说什么？你听（ ）了吗？', answer: 'A', gloss: '清楚' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 刚才 · B 音乐会 · C 公园 · D 离开 · E 聊天儿. Gõ chữ cái A–E.',
      items: [
        { prompt: '今天晚上做什么？ 我跟小丽去听（ ）。', answer: 'B', gloss: '音乐会' }, { prompt: '你什么时候（ ）北京？ 明天的飞机。', answer: 'D', gloss: '离开' },
        { prompt: '请问，去（ ）怎么走？ 一直往前走就是。', answer: 'C', gloss: '公园' }, { prompt: '你最喜欢做什么？ 跟朋友（ ）。', answer: 'E', gloss: '聊天儿' },
        { prompt: '你（ ）做什么去了？ 我帮小丽买了个面包。', answer: 'A', gloss: '刚才' },
      ],
    },
    {
      title: 'Giáo trình 注释 · Hoàn thành câu (gõ cụm còn thiếu)',
      hint: 'Gõ đúng cụm chữ Hán theo đáp án sách.',
      items: [
        { prompt: '你说话说得太快了，我（ ）。', answer: '听不清楚', gloss: 'bổ ngữ khả năng' }, { prompt: '那么多饭你（ ）？', answer: '吃得完吗', gloss: 'bổ ngữ khả năng' },
        { prompt: '今天的作业一点儿也不多，7点以前（ ）。', answer: '一定会做得好', accept: ['做得完', '一定做得完'], gloss: 'bổ ngữ khả năng' },
        { prompt: '（ ）你去哪儿了？', answer: '刚才', gloss: '刚 / 刚才' }, { prompt: '我（ ）做完作业，真累啊！', answer: '刚', gloss: '刚 / 刚才' },
        { prompt: '白先生（ ）到北京，还没休息呢。', answer: '刚', gloss: '刚 / 刚才' },
      ],
    },
  ],
}
