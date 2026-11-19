import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 3, Bài 2: 他什么时候回来？ (sách trang 27–35).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách.
 * Nghe: 02-1…02-5. Bài tập: 练习 2–4 của giáo trình, đáp án theo "Đáp án giáo trình HSK 3" trang 3–4.
 */

const A = '/audio/hsk-std3/'

export const hskStd3Lesson2: Lesson = {
  id: 2,
  title: 'Khi nào anh ấy quay về?',
  hanzi: '他什么时候回来？',
  pinyin: 'Tā shénme shíhou huílai?',
  vi: 'Khi nào anh ấy quay về?',
  intro: 'Nói về phương hướng của hành động và hai việc nối tiếp nhau. Học bổ ngữ chỉ phương hướng đơn giản (动词 + 来/去), cấu trúc 动词1 + 了……就 + 动词2, câu hỏi tu từ 能……吗？',

  dialogue: [
    { who: 'A', name: '小丽', hanzi: '休息一下吧。', pinyin: 'Xiūxi yíxià ba.', vi: 'Nghỉ một chút đi.', scene: 'Hội thoại 1 · Trên đường xuống núi' },
    { who: 'B', name: '小刚', hanzi: '怎么了？', pinyin: 'Zěnme le?', vi: 'Sao thế?' },
    { who: 'A', name: '小丽', hanzi: '我现在腿也疼，脚也疼。', pinyin: 'Wǒ xiànzài tuǐ yě téng, jiǎo yě téng.', vi: 'Bây giờ em vừa đau chân vừa đau bàn chân.' },
    { who: 'B', name: '小刚', hanzi: '好，那边树多，我们过去坐一下吧。', pinyin: 'Hǎo, nàbian shù duō, wǒmen guòqu zuò yíxià ba.', vi: 'Được, bên kia nhiều cây, mình qua đó ngồi một chút.' },
    { who: 'A', name: '小丽', hanzi: '上来的时候我怎么没觉得这么累？', pinyin: 'Shànglai de shíhou wǒ zěnme méi juéde zhème lèi?', vi: 'Lúc đi lên sao em không thấy mệt thế này?' },
    { who: 'B', name: '小刚', hanzi: '上山容易下山难，你不知道？', pinyin: 'Shàng shān róngyì xià shān nán, nǐ bù zhīdào?', vi: 'Lên núi dễ, xuống núi khó, em không biết à?' },
    { who: 'A', name: '周太太', hanzi: '喂，你好，请问周明在吗？', pinyin: 'Wèi, nǐ hǎo, qǐngwèn Zhōu Míng zài ma?', vi: 'A lô, xin chào, cho hỏi Châu Minh có ở đó không?', scene: 'Hội thoại 2 · Đang gọi điện thoại' },
    { who: 'B', name: '秘书', hanzi: '周经理出去了，不在办公室。', pinyin: 'Zhōu jīnglǐ chūqu le, bú zài bàngōngshì.', vi: 'Giám đốc Châu ra ngoài rồi, không có ở văn phòng.' },
    { who: 'A', name: '周太太', hanzi: '他去哪儿了？什么时候回来？', pinyin: 'Tā qù nǎr le? Shénme shíhou huílai?', vi: 'Anh ấy đi đâu? Khi nào về?' },
    { who: 'B', name: '秘书', hanzi: '他出去办事了，下午回来。', pinyin: 'Tā chūqu bàn shì le, xiàwǔ huílai.', vi: 'Anh ấy ra ngoài làm việc, chiều sẽ về.' },
    { who: 'A', name: '周太太', hanzi: '回来了就让他给我打个电话。', pinyin: 'Huílai le jiù ràng tā gěi wǒ dǎ ge diànhuà.', vi: 'Về rồi thì bảo anh ấy gọi điện cho tôi.' },
    { who: 'B', name: '秘书', hanzi: '好的，他到了办公室我就告诉他。', pinyin: 'Hǎo de, tā dàole bàngōngshì wǒ jiù gàosu tā.', vi: 'Vâng, anh ấy đến văn phòng là tôi báo ngay.' },
    { who: 'A', name: '小刚', hanzi: '雨下得真大。你怎么回去？我送你吧。', pinyin: 'Yǔ xià de zhēn dà. Nǐ zěnme huíqu? Wǒ sòng nǐ ba.', vi: 'Mưa to thật. Em về bằng gì? Anh đưa em về nhé.', scene: 'Hội thoại 3 · Tiễn bạn ở trước cửa tòa nhà' },
    { who: 'B', name: '小丽', hanzi: '没事，我出去叫辆出租车就行了。', pinyin: 'Méi shì, wǒ chūqu jiào liàng chūzūchē jiù xíng le.', vi: 'Không sao, em ra gọi một chiếc taxi là được.' },
    { who: 'A', name: '小刚', hanzi: '那你等等，我上楼去给你拿把伞。', pinyin: 'Nà nǐ děngdeng, wǒ shàng lóu qù gěi nǐ ná bǎ sǎn.', vi: 'Vậy em đợi chút, anh lên lầu lấy cho em cái ô.' },
    { who: 'B', name: '小丽', hanzi: '好的。我跟你一起上去吧。', pinyin: 'Hǎo de. Wǒ gēn nǐ yìqǐ shàngqu ba.', vi: 'Vâng. Em lên cùng anh nhé.' },
    { who: 'A', name: '小刚', hanzi: '你在这儿等吧，我拿了伞就下来。', pinyin: 'Nǐ zài zhèr děng ba, wǒ nále sǎn jiù xiàlai.', vi: 'Em đợi ở đây đi, anh lấy ô xong là xuống ngay.' },
    { who: 'A', name: '周太太', hanzi: '你看，我这么胖，怎么办呢？', pinyin: 'Nǐ kàn, wǒ zhème pàng, zěnme bàn ne?', vi: 'Anh xem, em béo thế này, làm sao bây giờ?', scene: 'Hội thoại 4 · Ở nhà' },
    { who: 'B', name: '周明', hanzi: '你每天晚上吃了饭就睡觉，也不出去走走，能不胖吗？', pinyin: 'Nǐ měi tiān wǎnshang chīle fàn jiù shuì jiào, yě bù chūqu zǒuzou, néng bú pàng ma?', vi: 'Tối nào em ăn xong là đi ngủ, cũng không ra ngoài đi dạo, sao mà không béo được?' },
    { who: 'A', name: '周太太', hanzi: '其实我每天都运动。', pinyin: 'Qíshí wǒ měi tiān dōu yùndòng.', vi: 'Thật ra ngày nào em cũng vận động.' },
    { who: 'B', name: '周明', hanzi: '但是你一点儿也没瘦！你做什么运动了？', pinyin: 'Dànshì nǐ yìdiǎnr yě méi shòu! Nǐ zuò shénme yùndòng le?', vi: 'Nhưng em chẳng gầy đi chút nào! Em vận động gì vậy?' },
    { who: 'A', name: '周太太', hanzi: '做饭啊。', pinyin: 'Zuò fàn a.', vi: 'Nấu cơm đó.' },
  ],
  dialogueClips: [
    { label: '02-1 · Trên đường xuống núi', src: A + 'l02-1.mp3' },
    { label: '02-2 · Đang gọi điện thoại', src: A + 'l02-2.mp3' },
    { label: '02-3 · Tiễn bạn ở trước cửa tòa nhà', src: A + 'l02-3.mp3' },
    { label: '02-4 · Ở nhà', src: A + 'l02-4.mp3' },
  ],
  dialogueTip: '<b>Động từ + 来/去</b>: 来 hướng về phía người nói, 去 rời xa người nói. Tân ngữ nơi chốn đặt trước 来/去: 上楼去. <b>Động từ1 + 了……就 + động từ2</b>: làm xong việc này thì làm ngay việc kia. <b>能……吗？</b>: câu hỏi tu từ, khẳng định thành phủ định và ngược lại.',
  slowSay: '他什么时候回来',

  vocab: [
    { hanzi: '腿', pinyin: 'tuǐ', pos: 'danh từ', meaning: 'chân', han_viet: 'thối' },
    { hanzi: '疼', pinyin: 'téng', pos: 'tính từ', meaning: 'đau, nhức', han_viet: 'đông' },
    { hanzi: '脚', pinyin: 'jiǎo', pos: 'danh từ', meaning: 'bàn chân', han_viet: 'cước' },
    { hanzi: '树', pinyin: 'shù', pos: 'danh từ', meaning: 'cây', han_viet: 'thụ' },
    { hanzi: '容易', pinyin: 'róngyì', pos: 'tính từ', meaning: 'dễ, dễ dàng', han_viet: 'dung dị' },
    { hanzi: '难', pinyin: 'nán', pos: 'tính từ', meaning: 'khó, khó khăn', han_viet: 'nan' },
    { hanzi: '太太', pinyin: 'tàitai', pos: 'danh từ', meaning: 'bà. Từ ngoài đại cương HSK 3 (dấu * trong sách)', han_viet: 'thái thái' },
    { hanzi: '秘书', pinyin: 'mìshū', pos: 'danh từ', meaning: 'thư ký. Từ ngoài đại cương HSK 3 (dấu * trong sách)', han_viet: 'bí thư' },
    { hanzi: '经理', pinyin: 'jīnglǐ', pos: 'danh từ', meaning: 'giám đốc', han_viet: 'kinh lý' },
    { hanzi: '办公室', pinyin: 'bàngōngshì', pos: 'danh từ', meaning: 'văn phòng', han_viet: 'biện công thất' },
    { hanzi: '辆', pinyin: 'liàng', pos: 'lượng từ', meaning: 'chiếc (dùng cho xe cộ)', han_viet: 'lượng' },
    { hanzi: '楼', pinyin: 'lóu', pos: 'danh từ', meaning: 'tòa nhà, lầu', han_viet: 'lâu' },
    { hanzi: '拿', pinyin: 'ná', pos: 'động từ', meaning: 'cầm, lấy', han_viet: 'nã' },
    { hanzi: '把', pinyin: 'bǎ', pos: 'lượng từ', meaning: 'dùng cho vật có cán hoặc tay cầm: con, cây', han_viet: 'bả' },
    { hanzi: '伞', pinyin: 'sǎn', pos: 'danh từ', meaning: 'ô (dù)', han_viet: 'tán' },
    { hanzi: '胖', pinyin: 'pàng', pos: 'tính từ', meaning: 'béo', han_viet: 'bàn' },
    { hanzi: '其实', pinyin: 'qíshí', pos: 'phó từ', meaning: 'thật ra', han_viet: 'kỳ thực' },
    { hanzi: '瘦', pinyin: 'shòu', pos: 'tính từ', meaning: 'gầy, gầy còm', han_viet: 'sấu' },
    { hanzi: '周明', pinyin: 'Zhōu Míng', pos: 'danh từ riêng', meaning: 'Châu Minh (tên người); 周 Châu (họ)', han_viet: '' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Bổ ngữ phương hướng', title: 'Bổ ngữ chỉ phương hướng đơn giản: động từ + 来/去',
      intro: '"Động từ + 来/去" chỉ phương hướng của hành động: 来 hướng về phía người nói, 去 rời xa người nói. Động từ thường dùng: 上, 下, 进, 出, 回, 过, 起 và 买, 带, 搬. Tân ngữ là nơi chốn thì đặt trước 来/去; tân ngữ chỉ sự vật thì đặt trước hoặc sau 来/去 đều được.',
      groups: [
        { label: 'Không có tân ngữ', items: [['我们在楼上等你呢，你上来吧。', 'Wǒmen zài lóu shang děng nǐ ne, nǐ shànglai ba.', 'người nói ở trên lầu'], ['谁在外边？你出去看看吧。', 'Shéi zài wàibian? Nǐ chūqu kànkan ba.', '"bạn" ở trong nhà'], ['那边树多，我们过去坐一下吧。', 'Nàbian shù duō, wǒmen guòqu zuò yíxià ba.', 'đi qua bên kia']] },
        { label: 'Tân ngữ nơi chốn: trước 来/去', items: [['小狗下楼来了。', 'Xiǎo gǒu xià lóu lai le.', 'Chó con xuống lầu rồi.'], ['老师进教室来了。', 'Lǎoshī jìn jiàoshì lai le.', 'Thầy vào lớp rồi.'], ['我上楼去。', 'Wǒ shàng lóu qu.', 'Tôi lên lầu.']] },
        { label: 'Tân ngữ sự vật: trước hoặc sau 来/去', items: [['明天要带作业来。', 'Míngtiān yào dài zuòyè lai.', 'Mai phải mang bài tập đến.'], ['帮我买来点儿面包。', 'Bāng wǒ mǎilai diǎnr miànbāo.', 'Mua giúp tôi ít bánh mì về.'], ['这次旅游，我想带去这本书。', 'Zhè cì lǚyóu, wǒ xiǎng dàiqu zhè běn shū.', 'Chuyến này tôi muốn mang theo quyển sách này.']] },
      ],
    },
    {
      kind: 'examples', label: 'Hai hành động', title: 'Hai hành động liên tiếp: động từ1 + 了……就 + động từ2',
      intro: 'Hành động thứ hai nối tiếp ngay sau hành động thứ nhất. Nếu câu có hai chủ ngữ thì đặt chủ ngữ thứ hai trước 就.',
      groups: [
        { label: 'Một chủ ngữ', items: [['我下了课就吃饭。', 'Wǒ xiàle kè jiù chī fàn.', 'Tan học là tôi ăn cơm.'], ['小刚拿了伞就下来。', 'Xiǎogāng nále sǎn jiù xiàlai.', 'Tiểu Cương lấy ô xong là xuống.'], ['你每天晚上吃了饭就睡觉。', 'Nǐ měi tiān wǎnshang chīle fàn jiù shuì jiào.', 'Tối nào em ăn xong là đi ngủ.']] },
        { label: 'Hai chủ ngữ: chủ ngữ 2 trước 就', items: [['你下了课我们就去书店。', 'Nǐ xiàle kè wǒmen jiù qù shūdiàn.', 'Bạn tan học là chúng ta đi hiệu sách.'], ['爸爸回来了我们就吃饭。', 'Bàba huílai le wǒmen jiù chī fàn.', 'Bố về là chúng ta ăn cơm.'], ['他到了办公室我就告诉他。', 'Tā dàole bàngōngshì wǒ jiù gàosu tā.', 'Anh ấy đến văn phòng là tôi báo ngay.']] },
      ],
    },
    {
      kind: 'examples', label: 'Đọc cụm từ', title: 'Đọc to các cụm từ và câu (练习 1)',
      clip: { label: '02-5 · Đọc to các cụm từ và câu', src: A + 'l02-5.mp3' },
      intro: 'Bấm để nghe từng cụm. Cách thành lập từ mới: 办公室 + 大楼 → 办公楼, 外边 + 出去 → 外出, 中午 + 睡觉 → 午觉.',
      groups: [{ label: 'Cụm từ', items: [
        ['上山容易下山难', 'shàng shān róngyì xià shān nán', 'lên núi dễ xuống núi khó'], ['上楼去给你拿把伞', 'shàng lóu qù gěi nǐ ná bǎ sǎn', 'lên lầu lấy cho bạn cái ô'],
        ['你一点儿也没瘦', 'nǐ yìdiǎnr yě méi shòu', 'bạn chẳng gầy đi chút nào'], ['我现在腿也疼，脚也疼', 'wǒ xiànzài tuǐ yě téng, jiǎo yě téng', 'giờ tôi vừa đau chân vừa đau bàn chân'],
        ['我拿了伞就下来', 'wǒ nále sǎn jiù xiàlai', 'tôi lấy ô xong là xuống'], ['办公楼', 'bàngōnglóu', 'tòa văn phòng'], ['外出', 'wàichū', 'ra ngoài'], ['午觉', 'wǔjiào', 'giấc ngủ trưa'],
      ] }],
    },
  ],

  notes: [
    {
      title: 'Bổ ngữ chỉ phương hướng đơn giản',
      body: '"Động từ + 来/去" chỉ phương hướng của hành động: 来 hướng về phía người nói, 去 rời xa người nói. Tân ngữ là danh từ chỉ nơi chốn thì đặt trước 来/去: 老师进教室来了。 我上楼去。 Tân ngữ là danh từ chỉ sự vật thì đặt trước hoặc sau 来/去 đều được: 明天要带作业来。 帮我买来点儿面包。',
      say: '我上楼去给你拿把伞',
    },
    {
      title: 'Hai hành động liên tiếp: động từ1 + 了……就 + động từ2',
      body: 'Hành động thứ hai nối tiếp ngay hành động thứ nhất: 我下了课就吃饭。 妈妈起了床就做早饭。 Nếu câu có hai chủ ngữ thì đặt chủ ngữ thứ hai trước 就: 你下了课我们就去书店。 他到了办公室我就告诉他。',
      say: '我拿了伞就下来',
    },
    {
      title: 'Câu hỏi tu từ: 能……吗？',
      body: 'Nếu thành phần giữa 能 và 吗 ở dạng khẳng định thì câu mang nghĩa phủ định; nếu ở dạng phủ định thì câu mang nghĩa khẳng định. Ví dụ: 你不做作业，也不练习，能学好吗？ (= không thể học tốt). 你每天晚上吃了饭就睡觉，也不出去走走，能不胖吗？ (= chắc chắn béo).',
      say: '能不胖吗',
    },
    {
      title: 'Tục ngữ: 饭后百步走，活到九十九',
      body: 'Đi bộ 100 bước sau bữa ăn sẽ sống đến 99 tuổi. Ngày nay câu này được dùng để diễn tả rằng việc vận động nhẹ nhàng sau khi ăn sẽ rất tốt cho sức khỏe.',
      say: '饭后百步走，活到九十九',
    },
  ],

  writeChars: ['腿', '疼', '脚', '树', '楼', '伞', '胖', '瘦'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 4)',
      items: [
        { q: '小丽现在怎么了？', hint: '她很累，腿和脚都很疼。' },
        { q: '周经理去哪儿了？什么时候回来？', hint: '周经理出去办事了，下午回来。' },
        { q: '小丽怎么回去？', hint: '她坐出租车回去。' },
        { q: '小刚上楼去做什么？', hint: '他上楼去给小丽拿伞。' },
        { q: '周太太为什么这么胖？', hint: '她每天晚上吃了饭就睡觉，也不出去走走。' },
        { q: '周太太每天做运动吗？', hint: '她不做运动（她说的"运动"是做饭）。' },
      ],
    },
    {
      title: 'Hoạt động nhóm: nhà bạn ai bận nhất? (运用 2)',
      items: [
        { q: 'A: 你们家谁最忙？  B: 我们家我最忙。  A: 你每天做什么事？  B: 我每天早上起了床就吃饭，吃了饭就去上课……', hint: 'Dùng cấu trúc 动词1 + 了……就 + 动词2.' },
      ],
    },
  ],

  sentences: [
    { parts: ['我', '现在', '腿', '也', '疼', '，', '脚', '也', '疼'], pinyin: 'Wǒ xiànzài tuǐ yě téng, jiǎo yě téng.', vi: 'Bây giờ em vừa đau chân vừa đau bàn chân.' },
    { parts: ['上', '山', '容易', '下', '山', '难'], pinyin: 'Shàng shān róngyì xià shān nán.', vi: 'Lên núi dễ, xuống núi khó.' },
    { parts: ['他', '什么', '时候', '回来'], pinyin: 'Tā shénme shíhou huílai?', vi: 'Khi nào anh ấy về?' },
    { parts: ['他', '到', '了', '办公室', '我', '就', '告诉', '他'], pinyin: 'Tā dàole bàngōngshì wǒ jiù gàosu tā.', vi: 'Anh ấy đến văn phòng là tôi báo ngay.' },
    { parts: ['我', '上', '楼', '去', '给', '你', '拿', '把', '伞'], pinyin: 'Wǒ shàng lóu qù gěi nǐ ná bǎ sǎn.', vi: 'Anh lên lầu lấy cho em cái ô.' },
    { parts: ['你', '一点儿', '也', '没', '瘦'], pinyin: 'Nǐ yìdiǎnr yě méi shòu.', vi: 'Em chẳng gầy đi chút nào.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 楼 · B 办公室 · C 树 · D 胖 · E 难. Gõ chữ cái A–E.',
      items: [
        { prompt: '这是你的（ ）吗？真大！', answer: 'B', gloss: '办公室' }, { prompt: '今天的考试一点儿也不（ ）。', answer: 'E', gloss: '难' },
        { prompt: '我在505教室上课，我现在要上（ ）去。', answer: 'A', gloss: '楼' }, { prompt: '你看，小狗在（ ）下做什么呢？', answer: 'C', gloss: '树' },
        { prompt: '我太（ ）了，不能吃那么多饭。', answer: 'D', gloss: '胖' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 辆 · B 腿 · C 把 · D 经理 · E 其实. Gõ chữ cái A–E.',
      items: [
        { prompt: 'A: 你真爱看书，买了这么多！ B: （ ）我一点儿也不喜欢看书，这是给我弟弟买的。', answer: 'E', gloss: '其实' },
        { prompt: '我想买这（ ）车。', answer: 'A', gloss: '辆' }, { prompt: '下雨了！我没带伞，怎么办？ 去商店买一（ ）吧。', answer: 'C', gloss: '把' },
        { prompt: '昨天走路走得太多了，左边这条（ ）有点儿疼。', answer: 'B', gloss: '腿' }, { prompt: '（ ），我今天想早一点儿回家，可以吗？', answer: 'D', gloss: '经理' },
      ],
    },
    {
      title: 'Giáo trình 注释 · Hoàn thành câu (gõ cụm còn thiếu)',
      hint: 'Gõ đúng cụm chữ Hán theo đáp án sách.',
      items: [
        { prompt: '你怎么还没（ ）？我都在楼下等你半小时了。', answer: '下来', gloss: 'bổ ngữ phương hướng' }, { prompt: '已经10点半了，快点儿（ ），别睡了。', answer: '起来', gloss: 'bổ ngữ phương hướng' },
        { prompt: '明天去朋友家，我想（ ）一些水果。', answer: '带去', gloss: 'bổ ngữ phương hướng' }, { prompt: '你什么时候走？ 他来了（ ）。', answer: '我就走', gloss: '……了……就……' },
        { prompt: '你今天爬山爬得那么快，（ ）？', answer: '能不累吗', gloss: '能……吗' }, { prompt: '天气这么冷，你穿得这么少，（ ）？', answer: '能不生病吗', gloss: '能……吗' },
        { prompt: '我每天都练习，（ ）？', answer: '能打不好吗', gloss: '能……吗' },
      ],
    },
  ],
}
