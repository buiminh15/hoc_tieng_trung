import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 2, Bài 15: 新年就要到了 (sách trang 113–119).
 * Sách bản Trung–Anh; phần tiếng Việt do app dịch.
 * Nghe: 15-1…15-5. Sách bài tập (trang 139–146, đáp án trang 28–29).
 */

const A = '/audio/hsk-std2/'

export const hskStd2Lesson15: Lesson = {
  id: 15,
  title: 'Năm mới sắp đến rồi',
  hanzi: '新年就要到了',
  pinyin: 'Xīnnián jiù yào dào le',
  vi: 'Năm mới sắp đến rồi',
  intro: 'Nói về việc sắp xảy ra và dự định năm mới: 新年就要到了。 快要下雨了。 都等她半个小时了！ Học cấu trúc 快要/快/就要/要……了, cấu trúc 都……了; ngữ điệu câu hỏi kết thúc bằng 吧 và 吗; bộ 山 và 大.',

  dialogue: [
    { who: 'A', hanzi: '今天是12月20日，新年就要到了。', pinyin: 'Jīntiān shì shí\'èr yuè èrshí rì, xīnnián jiù yào dào le.', vi: 'Hôm nay là ngày 20 tháng 12, năm mới sắp đến rồi.', scene: 'Hội thoại 1 · ở nhà bạn' },
    { who: 'B', hanzi: '新年你准备做什么？', pinyin: 'Xīnnián nǐ zhǔnbèi zuò shénme?', vi: 'Năm mới bạn định làm gì?' },
    { who: 'A', hanzi: '我想去北京旅游，北京很不错，我去过一次。', pinyin: 'Wǒ xiǎng qù Běijīng lǚyóu, Běijīng hěn búcuò, wǒ qùguo yí cì.', vi: 'Mình muốn đi Bắc Kinh du lịch, Bắc Kinh rất được, mình đi một lần rồi.' },
    { who: 'B', hanzi: '你买票了吗？', pinyin: 'Nǐ mǎi piào le ma?', vi: 'Bạn mua vé chưa?' },
    { who: 'A', hanzi: '还没有呢，明天就去火车站买票。', pinyin: 'Hái méiyǒu ne, míngtiān jiù qù huǒchēzhàn mǎi piào.', vi: 'Chưa, mai mình ra ga mua vé.' },
    { who: 'A', hanzi: '时间过得真快，新的一年快要到了！', pinyin: 'Shíjiān guò de zhēn kuài, xīn de yì nián kuài yào dào le!', vi: 'Thời gian trôi nhanh thật, một năm mới sắp đến rồi!', scene: 'Hội thoại 2 · ở công ty' },
    { who: 'B', hanzi: '是啊，谢谢大家这一年对我的帮助！', pinyin: 'Shì a, xièxie dàjiā zhè yì nián duì wǒ de bāngzhù!', vi: 'Đúng vậy, cảm ơn mọi người đã giúp đỡ tôi trong năm qua!' },
    { who: 'C', hanzi: '希望我们的公司明年更好！', pinyin: 'Xīwàng wǒmen de gōngsī míngnián gèng hǎo!', vi: 'Mong công ty chúng ta năm sau tốt hơn nữa!' },
    { who: 'A', hanzi: '你妹妹怎么还没来？都八点四十了！', pinyin: 'Nǐ mèimei zěnme hái méi lái? Dōu bā diǎn sìshí le!', vi: 'Sao em gái bạn vẫn chưa đến? Đã tám giờ bốn mươi rồi!', scene: 'Hội thoại 3 · ở bến xe' },
    { who: 'B', hanzi: '我们再等她几分钟吧。', pinyin: 'Wǒmen zài děng tā jǐ fēnzhōng ba.', vi: 'Mình đợi em ấy thêm vài phút nữa nhé.' },
    { who: 'A', hanzi: '都等她半个小时了！', pinyin: 'Dōu děng tā bàn ge xiǎoshí le!', vi: 'Đã đợi em ấy nửa tiếng rồi!' },
    { who: 'B', hanzi: '她来了，我听见她说话了。', pinyin: 'Tā lái le, wǒ tīngjiàn tā shuō huà le.', vi: 'Em ấy đến rồi, mình nghe thấy tiếng em ấy rồi.' },
    { who: 'A', hanzi: '天阴了，我要回去了。', pinyin: 'Tiān yīn le, wǒ yào huíqu le.', vi: 'Trời âm u rồi, mình phải về đây.', scene: 'Hội thoại 4 · trước quán cà phê' },
    { who: 'B', hanzi: '好的。快要下雨了，你路上慢点儿。', pinyin: 'Hǎo de. Kuài yào xià yǔ le, nǐ lùshang màn diǎnr.', vi: 'Được. Sắp mưa rồi, bạn đi đường cẩn thận nhé.' },
    { who: 'A', hanzi: '没关系，我坐公共汽车。', pinyin: 'Méi guānxi, wǒ zuò gōnggòng qìchē.', vi: 'Không sao, mình đi xe buýt.' },
    { who: 'B', hanzi: '好的。再见。', pinyin: 'Hǎo de. Zàijiàn.', vi: 'Được. Tạm biệt.' },
  ],
  dialogueClips: [
    { label: '15-1 · Hội thoại 1: 新年就要到了', src: A + 'l15-1.mp3' },
    { label: '15-2 · Hội thoại 2: 新的一年快要到了', src: A + 'l15-2.mp3' },
    { label: '15-3 · Hội thoại 3: 都等她半个小时了', src: A + 'l15-3.mp3' },
    { label: '15-4 · Hội thoại 4: 快要下雨了', src: A + 'l15-4.mp3' },
  ],
  dialogueTip: '<b>快要 / 快 / 就要 / 要 + động từ + 了</b>: việc sắp xảy ra. Nếu câu có trạng ngữ thời gian (下个月, 明天) thì chỉ dùng được <b>就要……了</b>. <b>都……了</b>: "đã… rồi", thường mang ý nhấn mạnh hoặc phàn nàn.',
  slowSay: '新年就要到了',

  vocab: [
    { hanzi: '日', pinyin: 'rì', pos: 'danh từ', meaning: 'ngày', han_viet: 'nhật' },
    { hanzi: '新年', pinyin: 'xīnnián', pos: 'danh từ', meaning: 'năm mới', han_viet: 'tân niên' },
    { hanzi: '票', parts: '覀 + 示', pinyin: 'piào', pos: 'danh từ', meaning: 'vé', han_viet: 'phiếu' },
    { hanzi: '火车站', pinyin: 'huǒchēzhàn', pos: 'danh từ', meaning: 'ga tàu hỏa', han_viet: 'hỏa xa trạm' },
    { hanzi: '大家', pinyin: 'dàjiā', pos: 'đại từ', meaning: 'mọi người', han_viet: 'đại gia' },
    { hanzi: '更', pinyin: 'gèng', pos: 'phó từ', meaning: 'càng, hơn nữa. Từ ngoài đại cương HSK 2 (dấu * trong sách)', han_viet: 'cánh' },
    { hanzi: '妹妹', pinyin: 'mèimei', pos: 'danh từ', meaning: 'em gái', han_viet: 'muội muội' },
    { hanzi: '阴', parts: '阝 + 月', pinyin: 'yīn', pos: 'tính từ', meaning: 'âm u, nhiều mây', han_viet: 'âm' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Sắp xảy ra', title: 'Trạng thái của hành động: 要……了',
      intro: 'Dùng 快要 / 快 / 就要 / 要……了 để chỉ việc gì đó sắp xảy ra. Nếu trong câu có trạng ngữ chỉ thời gian thì chỉ dùng được 就要……了.',
      groups: [
        { label: '快要 / 快 / 就要 / 要 + động từ + 了', items: [['火车快要来了。', 'Huǒchē kuài yào lái le.', 'Tàu sắp đến rồi.'], ['要下雨了。', 'Yào xià yǔ le.', 'Sắp mưa rồi.'], ['新的一年快要到了。', 'Xīn de yì nián kuài yào dào le.', 'Một năm mới sắp đến rồi.']] },
        { label: 'Có trạng ngữ thời gian: chỉ dùng 就要……了', items: [['下个月我们就要回国了。', 'Xià ge yuè wǒmen jiù yào huíguó le.', 'Tháng sau chúng tôi sắp về nước rồi.'], ['明天姐姐就要走了。', 'Míngtiān jiějie jiù yào zǒu le.', 'Ngày mai chị sắp đi rồi.'], ['下个星期我们就要考试了。', 'Xià ge xīngqī wǒmen jiù yào kǎo shì le.', 'Tuần sau chúng tôi sắp thi rồi.']] },
      ],
    },
    {
      kind: 'examples', label: '都……了', title: 'Cấu trúc 都……了',
      intro: '都……了 mang nghĩa "đã… rồi", thường kèm ngữ khí nhấn mạnh hoặc không hài lòng.',
      groups: [{ label: '都……了', items: [['都8点了，快点儿起床吧。', 'Dōu bā diǎn le, kuài diǎnr qǐ chuáng ba.', 'Đã 8 giờ rồi, dậy nhanh lên đi.'], ['你都十岁了，可以自己洗衣服了。', 'Nǐ dōu shí suì le, kěyǐ zìjǐ xǐ yīfu le.', 'Con đã mười tuổi rồi, tự giặt quần áo được rồi.'], ['都等她半个小时了。', 'Dōu děng tā bàn ge xiǎoshí le.', 'Đã đợi cô ấy nửa tiếng rồi.']] }],
    },
    {
      kind: 'examples', label: 'Ngữ điệu', title: 'Ngữ điệu câu hỏi kết thúc bằng 吧 và 吗',
      clip: { label: '15-5 · Nghe và đọc theo (ngữ điệu)', src: A + 'l15-5.mp3' },
      intro: 'Câu hỏi kết thúc bằng 吧 hạ giọng (người hỏi đã đoán khá chắc); câu hỏi kết thúc bằng 吗 lên giọng.',
      groups: [{ label: '吧 ↘ và 吗 ↗', items: [['这本书是你的吧？', 'Zhè běn shū shì nǐ de ba? ↘', 'Sách này của bạn nhỉ?'], ['这本书是你的吗？', 'Zhè běn shū shì nǐ de ma? ↗', 'Sách này của bạn à?'], ['明天是星期二吧？', 'Míngtiān shì xīngqī èr ba? ↘', 'Mai là thứ ba nhỉ?'], ['明天是星期二吗？', 'Míngtiān shì xīngqī èr ma? ↗', 'Mai là thứ ba à?'], ['你买票了吧？', 'Nǐ mǎi piào le ba? ↘', 'Bạn mua vé rồi nhỉ?'], ['你买票了吗？', 'Nǐ mǎi piào le ma? ↗', 'Bạn mua vé chưa?']] }],
    },
    {
      kind: 'examples', label: 'Bộ thủ', title: 'Chữ Hán: bộ 山 và 大',
      intro: 'Bộ 山 (sơn) thường liên quan đến tên, loại, hình dạng của núi hoặc đảo; bộ 大 (đại) thường liên quan đến con người.',
      groups: [{ label: 'Bộ 山 và 大', items: [['岭', 'lǐng', 'dãy núi (bộ 山)'], ['岖', 'qū', 'gập ghềnh (bộ 山)'], ['天', 'tiān', 'trời (bộ 大)'], ['夫', 'fū', 'chồng (bộ 大)']] }],
    },
  ],

  notes: [
    {
      title: '快要 / 快 / 就要 / 要……了',
      body: 'Diễn tả việc sắp xảy ra: 火车快要来了。 要下雨了。 新的一年快要到了。 Nếu câu có trạng ngữ thời gian thì chỉ dùng 就要……了: 下个月我们就要回国了。 明天姐姐就要走了。',
      say: '新年就要到了',
    },
    {
      title: 'Cấu trúc 都……了',
      body: '都……了 nghĩa là "đã… rồi", thường mang ngữ khí nhấn mạnh hoặc không hài lòng: 都8点了，快点儿起床吧。 都等她半个小时了。',
      say: '都等她半个小时了',
    },
    {
      title: 'Ngữ điệu câu hỏi với 吧 và 吗',
      body: 'Câu hỏi với 吧 hạ giọng, thể hiện người hỏi đã đoán khá chắc; câu hỏi với 吗 lên giọng: 你买票了吧？↘ / 你买票了吗？↗',
      say: '你买票了吧',
    },
  ],

  writeChars: ['新', '票', '站', '更', '阴', '妹'],

  drills: [
    {
      title: 'Hỏi nhau về kế hoạch năm mới (运用 1, sách trang 119)',
      hint: 'Bấm để nghe, rồi tự trả lời.',
      items: [
        { h: '新年你想在哪儿过？', p: 'Xīnnián nǐ xiǎng zài nǎr guò?', m: 'Năm mới bạn muốn đón ở đâu?' },
        { h: '你想和谁一起过新年？', p: 'Nǐ xiǎng hé shéi yìqǐ guò xīnnián?', m: 'Bạn muốn đón năm mới cùng ai?' },
        { h: '你想送给朋友什么新年礼物？', p: 'Nǐ xiǎng sòng gěi péngyou shénme xīnnián lǐwù?', m: 'Bạn muốn tặng bạn bè quà năm mới gì?' },
        { h: '下个月5号是弟弟的生日，他快要15岁了。', p: 'Xià ge yuè wǔ hào shì dìdi de shēngrì, tā kuài yào shíwǔ suì le.', m: 'Ngày 5 tháng sau là sinh nhật em trai, nó sắp 15 tuổi rồi.' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 117)',
      items: [
        { q: '新年的时候他准备做什么？', hint: '他想去北京旅游。' },
        { q: '明天他有什么事要做？', hint: '明天他要去火车站买票。' },
        { q: '他们两个人在等谁呢？', hint: '在等她妹妹。' },
        { q: '他们等的人来了没有？', hint: '来了，她听见妹妹说话了。' },
        { q: '外面的天气怎么样？', hint: '天阴了，快要下雨了。' },
      ],
    },
  ],

  sentences: [
    { parts: ['今天', '是', '12', '月', '20', '日', '，', '新年', '就要', '到', '了'], pinyin: 'Jīntiān shì shí\'èr yuè èrshí rì, xīnnián jiù yào dào le.', vi: 'Hôm nay là ngày 20 tháng 12, năm mới sắp đến rồi.' },
    { parts: ['明天', '就', '去', '火车站', '买', '票'], pinyin: 'Míngtiān jiù qù huǒchēzhàn mǎi piào.', vi: 'Mai ra ga mua vé.' },
    { parts: ['时间', '过', '得', '真', '快'], pinyin: 'Shíjiān guò de zhēn kuài.', vi: 'Thời gian trôi nhanh thật.' },
    { parts: ['希望', '我们', '的', '公司', '明年', '更', '好'], pinyin: 'Xīwàng wǒmen de gōngsī míngnián gèng hǎo.', vi: 'Mong công ty chúng ta năm sau tốt hơn nữa.' },
    { parts: ['都', '等', '她', '半', '个', '小时', '了'], pinyin: 'Dōu děng tā bàn ge xiǎoshí le.', vi: 'Đã đợi cô ấy nửa tiếng rồi.' },
    { parts: ['快要', '下雨', '了', '，', '你', '路上', '慢', '点儿'], pinyin: 'Kuài yào xià yǔ le, nǐ lùshang màn diǎnr.', vi: 'Sắp mưa rồi, bạn đi đường cẩn thận.' },
  ],

  dictations: [
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 11–15)',
      hint: 'Nghe đoạn ghi âm (15-1, phần 3), chọn A, B hoặc C. Câu 11: A 去过 · B 没有 · C 去过很多次. Câu 12: A 飞机票 · B 汽车票 · C 火车票. Câu 13: A 来了 · B 还没来 · C 不知道. Câu 14: A 不太好 · B 下雨了 · C 下雪了. Câu 15: A 饭馆 · B 学校 · C 家里.',
      clip: { label: '15-1 · Sách bài tập, phần nghe', src: A + 'w15-1.mp3' },
      items: [
        { prompt: 'Câu 11', answer: 'B', gloss: '没有' }, { prompt: 'Câu 12', answer: 'C', gloss: '火车票' },
        { prompt: 'Câu 13', answer: 'B', gloss: '还没来' }, { prompt: 'Câu 14', answer: 'A', gloss: '不太好' },
        { prompt: 'Câu 15', answer: 'C', gloss: '家里' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ (câu 21–25)',
      hint: 'A 新年 · B 更 · C 大家 · D 帮助 · E 贵 · F 阴. Gõ chữ cái A–F.',
      items: [
        { prompt: '天（ ）了，可能要下雨了，我们快点儿回家吧。', answer: 'F', gloss: '阴' }, { prompt: '我喜欢吃苹果，但是我（ ）喜欢吃西瓜。', answer: 'B', gloss: '更' },
        { prompt: '听说北京很漂亮，（ ）都想去北京旅行。', answer: 'C', gloss: '大家' }, { prompt: '谢谢大家这一年对我的（ ）。', answer: 'D', gloss: '帮助' },
        { prompt: '今天是12月28号了，（ ）快要到了。', answer: 'A', gloss: '新年' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, đúng hay sai (câu 26–30)',
      hint: 'Đọc câu cho sẵn rồi xét câu có dấu * đúng (gõ D) hay sai (gõ S).',
      items: [
        { prompt: '我看过这个电影，还不错，但是我更喜欢今天这个电影，太有意思了。* 今天的电影更好。', answer: 'D', gloss: 'Đúng' },
        { prompt: '我弟弟在一家电脑公司找了个工作。今天是他第一天上班，他早上六点就起床了。* 弟弟今天开始上班。', answer: 'D', gloss: 'Đúng' },
        { prompt: '我每天早上都出去跑步。昨天天气不太好，是阴天。等我跑完回家时，天晴了。* 昨天下雨了。', answer: 'S', gloss: 'Sai' },
        { prompt: '火车站前面有个"一元店"，在那儿一块钱就可以买一件东西。我都去过很多次了。* "一元店"的东西很贵。', answer: 'S', gloss: 'Sai' },
        { prompt: '我来北京已经三个多月了，下个月我就要回国了。* 他可能在北京住四个月。', answer: 'D', gloss: 'Đúng' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu (câu 31–35)',
      hint: 'A 我想新年的时候休息休息，你们自己去玩儿吧。 B 这件衣服的颜色我不喜欢。 C 你的生日是几月几号？我们一起吃饭吧。 D 这是我第二次来北京。 E 他在哪儿呢？你看见他了吗？ F 十分钟以后就要开始了。 Gõ chữ cái A–F.',
      items: [
        { prompt: '希望这次你能在这儿多住几天。', answer: 'D', gloss: '这是我第二次来北京。' }, { prompt: '电影什么时候开始？', answer: 'F', gloss: '十分钟以后就要开始了。' },
        { prompt: '我的生日快要到了。', answer: 'C', gloss: '你的生日是几月几号？……' }, { prompt: '新年快要到了，你想和大家一起去旅游吗？', answer: 'A', gloss: '我想新年的时候休息休息……' },
        { prompt: '没关系，我们再去别的商店看看吧。', answer: 'B', gloss: '这件衣服的颜色我不喜欢。' },
      ],
    },
  ],
}
