import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 2, Bài 13: 门开着呢 (sách trang 97–104).
 * Sách bản Trung–Anh; phần tiếng Việt do app dịch.
 * Nghe: 13-1…13-5. Sách bài tập (trang 121–128, đáp án trang 25–26).
 */

const A = '/audio/hsk-std2/'

export const hskStd2Lesson13: Lesson = {
  id: 13,
  title: 'Cửa đang mở',
  hanzi: '门开着呢',
  pinyin: 'Mén kāi zhe ne',
  vi: 'Cửa đang mở',
  intro: 'Miêu tả trạng thái và chỉ đường: 门开着呢。 手里拿着铅笔。 从这儿一直往前走。 Học trợ từ động thái 着, câu hỏi phản vấn 不是……吗, giới từ 往; ngữ điệu câu cầu khiến; bộ 斤 và 页.',

  dialogue: [
    { who: 'A', hanzi: '门开着呢，请进。', pinyin: 'Mén kāi zhe ne, qǐng jìn.', vi: 'Cửa đang mở, mời vào.', scene: 'Hội thoại 1 · ở văn phòng' },
    { who: 'B', hanzi: '请问，张先生在吗？', pinyin: 'Qǐngwèn, Zhāng xiānsheng zài ma?', vi: 'Cho hỏi, ông Trương có ở đây không?' },
    { who: 'A', hanzi: '他出去了。你下午再来吧。', pinyin: 'Tā chūqu le. Nǐ xiàwǔ zài lái ba.', vi: 'Ông ấy ra ngoài rồi. Chiều chị quay lại nhé.' },
    { who: 'B', hanzi: '好的，谢谢！', pinyin: 'Hǎo de, xièxie!', vi: 'Vâng, cảm ơn!' },
    { who: 'A', hanzi: '那个正在说话的女孩儿是谁？', pinyin: 'Nàge zhèngzài shuō huà de nǚháir shì shéi?', vi: 'Cô gái đang nói chuyện kia là ai vậy?', scene: 'Hội thoại 2 · ở văn phòng' },
    { who: 'B', hanzi: '我知道她的名字，她姓杨，叫杨笑笑，她姐姐是我同学。', pinyin: 'Wǒ zhīdào tā de míngzi, tā xìng Yáng, jiào Yáng Xiàoxiao, tā jiějie shì wǒ tóngxué.', vi: 'Mình biết tên cô ấy, họ Dương, tên là Dương Tiếu Tiếu, chị cô ấy là bạn học của mình.' },
    { who: 'A', hanzi: '那个手里拿着铅笔的呢？', pinyin: 'Nàge shǒu li ná zhe qiānbǐ de ne?', vi: 'Còn cô đang cầm bút chì trên tay thì sao?' },
    { who: 'B', hanzi: '我不认识。', pinyin: 'Wǒ bú rènshi.', vi: 'Cô ấy thì mình không quen.' },
    { who: 'A', hanzi: '听说你有女朋友了？我认识她吗？', pinyin: 'Tīngshuō nǐ yǒu nǚpéngyou le? Wǒ rènshi tā ma?', vi: 'Nghe nói bạn có bạn gái rồi à? Mình có quen cô ấy không?', scene: 'Hội thoại 3 · ở sân vận động' },
    { who: 'B', hanzi: '就是我们班那个长着两个大眼睛，非常爱笑的女孩儿。', pinyin: 'Jiù shì wǒmen bān nàge zhǎng zhe liǎng ge dà yǎnjing, fēicháng ài xiào de nǚháir.', vi: 'Chính là cô gái lớp mình có đôi mắt to, rất hay cười ấy.' },
    { who: 'A', hanzi: '她不是有男朋友吗？', pinyin: 'Tā bú shì yǒu nánpéngyou ma?', vi: 'Cô ấy chẳng phải có bạn trai rồi sao?' },
    { who: 'B', hanzi: '那个已经是她的前男友了。', pinyin: 'Nàge yǐjīng shì tā de qián nányǒu le.', vi: 'Đó là bạn trai cũ của cô ấy rồi.' },
    { who: 'A', hanzi: '请问，这儿离新京宾馆远吗？', pinyin: 'Qǐngwèn, zhèr lí Xīnjīng Bīnguǎn yuǎn ma?', vi: 'Cho hỏi, từ đây đến khách sạn Tân Kinh có xa không?', scene: 'Hội thoại 4 · trên đường' },
    { who: 'B', hanzi: '不远，走路二十分钟就到。', pinyin: 'Bù yuǎn, zǒu lù èrshí fēnzhōng jiù dào.', vi: 'Không xa, đi bộ hai mươi phút là tới.' },
    { who: 'A', hanzi: '你能告诉我怎么走吗？', pinyin: 'Nǐ néng gàosu wǒ zěnme zǒu ma?', vi: 'Anh chỉ giúp tôi đường đi được không?' },
    { who: 'B', hanzi: '从这儿一直往前走，到了前面的路口再往右走。', pinyin: 'Cóng zhèr yìzhí wǎng qián zǒu, dàole qiánmiàn de lùkǒu zài wǎng yòu zǒu.', vi: 'Từ đây cứ đi thẳng, đến ngã tư phía trước thì rẽ phải.' },
  ],
  dialogueClips: [
    { label: '13-1 · Hội thoại 1: 门开着呢', src: A + 'l13-1.mp3' },
    { label: '13-2 · Hội thoại 2: 手里拿着铅笔的呢？', src: A + 'l13-2.mp3' },
    { label: '13-3 · Hội thoại 3: 她不是有男朋友吗？', src: A + 'l13-3.mp3' },
    { label: '13-4 · Hội thoại 4: 一直往前走', src: A + 'l13-4.mp3' },
  ],
  dialogueTip: '<b>Động từ + 着</b>: trạng thái đang kéo dài (门开着, 拿着铅笔); phủ định <b>没 + động từ + 着</b>; hỏi thêm <b>没有</b> cuối câu. <b>不是……吗？</b>: câu hỏi phản vấn, ý nhắc nhở hoặc ngạc nhiên. <b>往 + phương hướng + động từ</b>: 往前走, 往右走.',
  slowSay: '门开着呢',

  vocab: [
    { hanzi: '着', parts: '⺶ + 目', pinyin: 'zhe', pos: 'trợ từ', meaning: 'chỉ trạng thái đang tiếp diễn', han_viet: 'trước' },
    { hanzi: '手', pinyin: 'shǒu', pos: 'danh từ', meaning: 'tay', han_viet: 'thủ' },
    { hanzi: '拿', parts: '合 + 手', pinyin: 'ná', pos: 'động từ', meaning: 'cầm, lấy. Từ ngoài đại cương HSK 2 (dấu * trong sách)', han_viet: 'nã' },
    { hanzi: '铅笔', parts: '铅 (duyên) + 笔 (bút)', pinyin: 'qiānbǐ', pos: 'danh từ', meaning: 'bút chì', han_viet: 'duyên bút' },
    { hanzi: '班', pinyin: 'bān', pos: 'danh từ', meaning: 'lớp. Từ ngoài đại cương HSK 2 (dấu * trong sách)', han_viet: 'ban' },
    { hanzi: '长', pinyin: 'zhǎng', pos: 'động từ', meaning: 'mọc, lớn lên, có (tướng mạo). Từ ngoài đại cương HSK 2 (dấu * trong sách)', han_viet: 'trưởng' },
    { hanzi: '笑', parts: '⺮ + 夭', pinyin: 'xiào', pos: 'động từ', meaning: 'cười', han_viet: 'tiếu' },
    { hanzi: '宾馆', parts: '宾 (tân) + 馆 (quán)', pinyin: 'bīnguǎn', pos: 'danh từ', meaning: 'khách sạn', han_viet: 'tân quán' },
    { hanzi: '一直', pinyin: 'yìzhí', pos: 'phó từ', meaning: 'thẳng; liên tục. Từ ngoài đại cương HSK 2 (dấu * trong sách)', han_viet: 'nhất trực' },
    { hanzi: '往', parts: '彳 + 主', pinyin: 'wǎng', pos: 'giới từ', meaning: 'về phía, hướng về', han_viet: 'vãng' },
    { hanzi: '路口', pinyin: 'lùkǒu', pos: 'danh từ', meaning: 'ngã tư, giao lộ', han_viet: 'lộ khẩu' },
    { hanzi: '杨笑笑', pinyin: 'Yáng Xiàoxiao', pos: 'danh từ riêng', meaning: 'Dương Tiếu Tiếu (tên người)', han_viet: '' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Trợ từ 着', title: 'Trợ từ động thái 着',
      intro: 'Động từ + 着 chỉ một trạng thái đang kéo dài. Phủ định: thêm 没 trước động từ. Câu hỏi: thêm 没有 ở cuối câu.',
      groups: [
        { label: 'Khẳng định', items: [['门开着。', 'Mén kāi zhe.', 'Cửa đang mở.'], ['他们穿着红色的衣服。', 'Tāmen chuān zhe hóngsè de yīfu.', 'Họ đang mặc áo đỏ.'], ['她拿着铅笔。', 'Tā ná zhe qiānbǐ.', 'Cô ấy đang cầm bút chì.']] },
        { label: 'Phủ định: 没 + động từ + 着', items: [['门没开着。', 'Mén méi kāi zhe.', 'Cửa không mở.'], ['他们没穿着红色的衣服。', 'Tāmen méi chuān zhe hóngsè de yīfu.', 'Họ không mặc áo đỏ.'], ['她没拿着铅笔。', 'Tā méi ná zhe qiānbǐ.', 'Cô ấy không cầm bút chì.']] },
        { label: 'Câu hỏi: …… 没有？', items: [['门开着没有？', 'Mén kāi zhe méiyǒu?', 'Cửa có mở không?'], ['他们穿着红色的衣服没有？', 'Tāmen chuān zhe hóngsè de yīfu méiyǒu?', 'Họ có mặc áo đỏ không?'], ['她手里拿着铅笔没有？', 'Tā shǒu li ná zhe qiānbǐ méiyǒu?', 'Cô ấy có cầm bút chì không?']] },
      ],
    },
    {
      kind: 'examples', label: '不是……吗 · 往', title: 'Câu phản vấn 不是……吗 và giới từ 往',
      intro: '不是……吗 thường dùng để nhắc nhở ai đó, hoặc bày tỏ sự khó hiểu, không hài lòng. 往 thường dùng để chỉ phương hướng.',
      groups: [
        { label: '不是……吗？', items: [['不是说今天有雨吗？怎么没下？', 'Bú shì shuō jīntiān yǒu yǔ ma? Zěnme méi xià?', 'Chẳng phải nói hôm nay có mưa sao? Sao chưa mưa?'], ['你不是北京人吗？怎么不会说北京话？', 'Nǐ bú shì Běijīng rén ma? Zěnme bú huì shuō Běijīng huà?', 'Bạn chẳng phải người Bắc Kinh sao? Sao không nói được giọng Bắc Kinh?'], ['她不是有男朋友了吗？', 'Tā bú shì yǒu nánpéngyou le ma?', 'Cô ấy chẳng phải có bạn trai rồi sao?']] },
        { label: '往 + phương hướng', items: [['从这儿往前走，就是我们学校。', 'Cóng zhèr wǎng qián zǒu, jiù shì wǒmen xuéxiào.', 'Từ đây đi về phía trước là trường chúng tôi.'], ['你看，往左走是医院，往右走是银行。', 'Nǐ kàn, wǎng zuǒ zǒu shì yīyuàn, wǎng yòu zǒu shì yínháng.', 'Bạn xem, rẽ trái là bệnh viện, rẽ phải là ngân hàng.'], ['从这儿一直往前走，到了前面的路口再往右走。', 'Cóng zhèr yìzhí wǎng qián zǒu, dàole qiánmiàn de lùkǒu zài wǎng yòu zǒu.', 'Từ đây đi thẳng, đến ngã tư phía trước thì rẽ phải.']] },
      ],
    },
    {
      kind: 'examples', label: 'Ngữ điệu', title: 'Ngữ điệu câu cầu khiến (祈使句)',
      clip: { label: '13-5 · Nghe và đọc theo (ngữ điệu)', src: A + 'l13-5.mp3' },
      intro: 'Khi ngữ khí nhẹ nhàng, cả câu đọc giọng hơi thấp; cuối vế đầu hơi lên giọng, cuối cả câu hạ giọng từ từ.',
      groups: [{ label: 'Hạ giọng ↘', items: [['让我们休息休息吧。', 'Ràng wǒmen xiūxi xiūxi ba. ↘', 'Để chúng ta nghỉ một chút nhé.'], ['快点儿下课吧。', 'Kuài diǎnr xià kè ba. ↘', 'Tan học nhanh lên đi.'], ['请坐吧。', 'Qǐng zuò ba. ↘', 'Mời ngồi.']] }],
    },
    {
      kind: 'examples', label: 'Bộ thủ', title: 'Chữ Hán: bộ 斤 và 页',
      intro: 'Bộ 斤 (cân) thường liên quan đến rìu và việc chặt, đẽo; bộ 页 (hiệt) thường liên quan đến đầu, mặt người.',
      groups: [{ label: 'Bộ 斤 và 页', items: [['新', 'xīn', 'mới (bộ 斤)'], ['所', 'suǒ', 'nơi (bộ 斤)'], ['颜', 'yán', 'gương mặt (bộ 页)'], ['须', 'xū', 'râu (bộ 页)']] }],
    },
  ],

  notes: [
    {
      title: 'Trợ từ động thái 着',
      body: 'Động từ + 着 chỉ trạng thái đang kéo dài: 门开着。 他们穿着红色的衣服。 Phủ định: 门没开着。 Hỏi: 门开着没有？',
      say: '门开着呢',
    },
    {
      title: 'Câu hỏi phản vấn 不是……吗',
      body: 'Dùng để nhắc nhở, hoặc bày tỏ sự khó hiểu, không hài lòng của người nói: 不是说今天有雨吗？怎么没下？ (她是你的女朋友？) 她不是有男朋友了吗？',
      say: '她不是有男朋友吗',
    },
    {
      title: 'Giới từ 往',
      body: '往 chỉ phương hướng: 从这儿往前走，就是我们学校。 往左走是医院，往右走是银行。',
      say: '一直往前走',
    },
    {
      title: 'Ngữ điệu câu cầu khiến',
      body: 'Ngữ khí nhẹ nhàng thì cả câu giọng thấp, cuối câu hạ giọng từ từ: 请坐吧。↘',
      say: '请坐吧',
    },
  ],

  writeChars: ['着', '拿', '铅', '笑', '往', '直'],

  drills: [
    {
      title: 'Nói và làm theo với 往 (运用 1, sách trang 103)',
      hint: 'Một bạn nói, một bạn làm động tác, rồi đổi vai.',
      items: [
        { h: '往前走', p: 'wǎng qián zǒu', m: 'đi về phía trước' }, { h: '往后跑', p: 'wǎng hòu pǎo', m: 'chạy về phía sau' },
        { h: '往左看', p: 'wǎng zuǒ kàn', m: 'nhìn sang trái' }, { h: '往右走', p: 'wǎng yòu zǒu', m: 'đi sang phải' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 101)',
      items: [
        { q: '张先生去哪儿了？', hint: '他出去了。' },
        { q: '杨笑笑是谁？', hint: '是那个正在说话的女孩儿，她姐姐是他的同学。' },
        { q: '他的女朋友是谁？', hint: '是他们班那个长着两个大眼睛、非常爱笑的女孩儿。' },
        { q: '“前男友”是什么意思？', hint: '以前的男朋友，现在已经不是了。' },
        { q: '去新京宾馆怎么走？', hint: '从这儿一直往前走，到了前面的路口再往右走。' },
      ],
    },
  ],

  sentences: [
    { parts: ['门', '开', '着', '呢', '，', '请', '进'], pinyin: 'Mén kāi zhe ne, qǐng jìn.', vi: 'Cửa đang mở, mời vào.' },
    { parts: ['那', '个', '正在', '说话', '的', '女孩儿', '是', '谁'], pinyin: 'Nàge zhèngzài shuō huà de nǚháir shì shéi?', vi: 'Cô gái đang nói chuyện kia là ai?' },
    { parts: ['那', '个', '手', '里', '拿', '着', '铅笔', '的', '呢'], pinyin: 'Nàge shǒu li ná zhe qiānbǐ de ne?', vi: 'Còn cô đang cầm bút chì thì sao?' },
    { parts: ['她', '不', '是', '有', '男朋友', '吗'], pinyin: 'Tā bú shì yǒu nánpéngyou ma?', vi: 'Cô ấy chẳng phải có bạn trai rồi sao?' },
    { parts: ['从', '这儿', '一直', '往', '前', '走'], pinyin: 'Cóng zhèr yìzhí wǎng qián zǒu.', vi: 'Từ đây đi thẳng.' },
    { parts: ['到', '了', '前面', '的', '路口', '再', '往', '右', '走'], pinyin: 'Dàole qiánmiàn de lùkǒu zài wǎng yòu zǒu.', vi: 'Đến ngã tư phía trước thì rẽ phải.' },
  ],

  dictations: [
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 11–15)',
      hint: 'Nghe đoạn ghi âm (13-1, phần 3), chọn A, B hoặc C. Câu 11: A 在公司 · B 在家里 · C 在外面. Câu 12: A 是 · B 不是 · C 不知道. Câu 13: A 书太大 · B 书太多 · C 书太贵. Câu 14: A 喜欢红色 · B 喜欢衣服 · C 别人说好看. Câu 15: A 男的认识 · B 女的认识 · C 男的和女的都不认识.',
      clip: { label: '13-1 · Sách bài tập, phần nghe', src: A + 'w13-1.mp3' },
      items: [
        { prompt: 'Câu 11', answer: 'C', gloss: '在外面' }, { prompt: 'Câu 12', answer: 'B', gloss: '不是' },
        { prompt: 'Câu 13', answer: 'B', gloss: '书太多' }, { prompt: 'Câu 14', answer: 'C', gloss: '别人说好看' },
        { prompt: 'Câu 15', answer: 'C', gloss: '男的和女的都不认识' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ (câu 21–25)',
      hint: 'A 拿 · B 笑 · C 长 · D 往 · E 贵 · F 一直. Gõ chữ cái A–F.',
      items: [
        { prompt: '妹妹是一个非常爱（ ）的女孩儿。', answer: 'B', gloss: '笑' }, { prompt: '你手里（ ）着的是什么东西，我能看看吗？', answer: 'A', gloss: '拿' },
        { prompt: '从这儿（ ）右走，过一个路口，就是北京医院。', answer: 'D', gloss: '往' }, { prompt: '你们班有没有一个（ ）着大眼睛、爱穿红衣服的学生？', answer: 'C', gloss: '长' },
        { prompt: '从这个路口（ ）走，就能看到你们学校了。', answer: 'F', gloss: '一直' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, đúng hay sai (câu 26–30)',
      hint: 'Đọc câu cho sẵn rồi xét câu có dấu * đúng (gõ D) hay sai (gõ S).',
      items: [
        { prompt: '大卫不是找到新工作了吗？怎么还天天在家玩儿电脑？* 大卫每天工作。', answer: 'S', gloss: 'Sai' },
        { prompt: '我的一个朋友正在找房子，他希望住得离公司近一些。* 他家离公司很远。', answer: 'D', gloss: 'Đúng' },
        { prompt: '妈妈告诉我说，不要开着车听音乐。* 开着车听音乐不好。', answer: 'D', gloss: 'Đúng' },
        { prompt: '从我家到北京，坐火车就5个小时，比坐飞机便宜多了。所以我明天准备坐火车去北京。* 我正在坐火车去北京。', answer: 'S', gloss: 'Sai' },
        { prompt: '李哥，你手里拿着的是电影票吗？我也想跟你一起去看电影。* 李哥可能有电影票。', answer: 'D', gloss: 'Đúng' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu (câu 31–35)',
      hint: 'A 是给我妈妈买的新衣服，明天是她的生日。 B 他开着车出去了，下午可能回来。 C 大卫也想跟我们一起去。 D 不是两年，是一年半。 E 他在哪儿呢？你看见他了吗？ F 教室前面还有一位老师，他正在给学生们上课呢。 Gõ chữ cái A–F.',
      items: [
        { prompt: '我看见在教室里坐着很多学生。', answer: 'F', gloss: '教室前面还有一位老师……' }, { prompt: '你手里拿着什么？', answer: 'A', gloss: '是给我妈妈买的新衣服……' },
        { prompt: '张先生呢？我今天怎么没看见他？', answer: 'B', gloss: '他开着车出去了……' }, { prompt: '下午三点，你在学校门口等我。我们一起去打篮球。', answer: 'C', gloss: '大卫也想跟我们一起去。' },
        { prompt: '你不是学过两年汉语吗？', answer: 'D', gloss: '不是两年，是一年半。' },
      ],
    },
  ],
}
