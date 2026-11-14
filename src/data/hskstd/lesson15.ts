import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 1, Bài 15: 我是坐飞机来的。 (sách trang 124–130).
 * Nghe: 15-1…15-4 (giáo trình). Sách bài tập (trang 113–119, đáp án trang 29–31): nối câu hỏi/đáp 21–25, điền từ 26–30,
 * nghe 11–15 và 6–10 (ngữ âm) gõ câu trả lời theo văn bản nghe trong file đáp án.
 * Phần tiếng Việt do app tự thêm ở những chỗ sách không có.
 */

const A = '/audio/hsk-std1/'

export const hskStd1Lesson15: Lesson = {
  id: 15,
  title: 'Tôi đáp máy bay đến đây.',
  hanzi: '我是坐飞机来的。',
  pinyin: 'Wǒ shì zuò fēijī lái de.',
  vi: 'Tôi đáp máy bay đến đây.',
  intro: 'Bài cuối của sách: nhấn mạnh thời gian, địa điểm, cách thức: 你们是什么时候认识的？ 你是怎么来饭店的？ Học câu có cấu trúc 是……的, cách nói năm tháng ngày thứ; thanh điệu của từ ba âm tiết (4); bộ 艹 và 宀; chữ 年, 出, 飞.',

  dialogue: [
    { who: 'A', hanzi: '你和李小姐是什么时候认识的？', pinyin: 'Nǐ hé Lǐ xiǎojiě shì shénme shíhou rènshi de?', vi: 'Cô và cô Lý quen nhau khi nào vậy?', scene: 'Hội thoại 1 · ở bàn ăn' },
    { who: 'B', hanzi: '我们是2011年9月认识的。', pinyin: 'Wǒmen shì èr líng yī yī nián jiǔ yuè rènshi de.', vi: 'Chúng tôi quen nhau vào tháng 9 năm 2011.' },
    { who: 'A', hanzi: '你们在哪儿认识的？', pinyin: 'Nǐmen zài nǎr rènshi de?', vi: 'Thế các cô quen nhau ở đâu?' },
    { who: 'B', hanzi: '我们是在学校认识的，她是我大学同学。', pinyin: 'Wǒmen shì zài xuéxiào rènshi de, tā shì wǒ dàxué tóngxué.', vi: 'Ở trường. Cô ấy học chung lớp với tôi ở đại học.' },
    { who: 'A', hanzi: '你们是怎么来饭店的？', pinyin: 'Nǐmen shì zěnme lái fàndiàn de?', vi: 'Anh chị đến khách sạn bằng cách nào?', scene: 'Hội thoại 2 · trước khách sạn' },
    { who: 'B', hanzi: '我们是坐出租车来的。', pinyin: 'Wǒmen shì zuò chūzūchē lái de.', vi: 'Chúng tôi đi taxi đến.' },
    { who: 'A', hanzi: '李先生呢？', pinyin: 'Lǐ xiānsheng ne?', vi: 'Còn ông Lý thì sao?' },
    { who: 'B', hanzi: '他是和朋友一起开车来的。', pinyin: 'Tā shì hé péngyou yìqǐ kāi chē lái de.', vi: 'Ông ấy và bạn cùng lái xe đến đây.' },
    { who: 'A', hanzi: '很高兴认识您！李小姐。', pinyin: 'Hěn gāoxìng rènshi nín! Lǐ xiǎojiě.', vi: 'Cô Lý, rất vui được biết cô.', scene: 'Hội thoại 3 · trong công ty' },
    { who: 'B', hanzi: '认识你我也很高兴！', pinyin: 'Rènshi nǐ wǒ yě hěn gāoxìng!', vi: 'Tôi cũng rất vui được biết anh!' },
    { who: 'A', hanzi: '听张先生说，您是坐飞机来北京的？', pinyin: 'Tīng Zhāng xiānsheng shuō, nín shì zuò fēijī lái Běijīng de?', vi: 'Nghe ông Trương nói cô đáp máy bay đến Bắc Kinh, phải vậy không?' },
    { who: 'B', hanzi: '是的。', pinyin: 'Shì de.', vi: 'Đúng vậy.' },
  ],
  dialogueClips: [
    { label: '15-1 · Hội thoại 1: 你们是什么时候认识的？', src: A + 'l15-1.mp3' },
    { label: '15-2 · Hội thoại 2: 你们是怎么来饭店的？', src: A + 'l15-2.mp3' },
    { label: '15-3 · Hội thoại 3: 很高兴认识您！', src: A + 'l15-3.mp3' },
  ],
  dialogueTip: 'Khi đã biết việc xảy ra, dùng <b>是……的</b> để nhấn mạnh thời gian, địa điểm hoặc cách thức: 我是<b>坐飞机</b>来的. Câu khẳng định có thể bỏ 是; câu phủ định thì giữ nguyên <b>不是……的</b>. Ngày tháng nói từ lớn đến nhỏ: năm → tháng → ngày → thứ.',
  slowSay: '我是坐飞机来的',

  vocab: [
    { hanzi: '认识', parts: '认 = 讠 + 人; 识 = 讠 + 只', pinyin: 'rènshi', pos: 'động từ', meaning: 'quen, biết', han_viet: 'nhận thức' },
    { hanzi: '年', pinyin: 'nián', pos: 'danh từ', meaning: 'năm', han_viet: 'niên' },
    { hanzi: '大学', parts: '大 (đại) + 学 (học)', pinyin: 'dàxué', pos: 'danh từ', meaning: 'đại học', han_viet: 'đại học' },
    { hanzi: '饭店', parts: '饭 (phạn) + 店 (điếm)', pinyin: 'fàndiàn', pos: 'danh từ', meaning: 'khách sạn, nhà hàng', han_viet: 'phạn điếm' },
    { hanzi: '出租车', parts: '出 (xuất) + 租 (tô) + 车 (xa)', pinyin: 'chūzūchē', pos: 'danh từ', meaning: 'taxi', han_viet: 'xuất tô xa' },
    { hanzi: '一起', parts: '一 (nhất) + 起 (khởi)', pinyin: 'yìqǐ', pos: 'phó từ', meaning: 'cùng. Từ ngoài đại cương HSK 1 (dấu * trong sách)', han_viet: 'nhất khởi' },
    { hanzi: '高兴', parts: '高 (cao) + 兴 (hứng)', pinyin: 'gāoxìng', pos: 'tính từ', meaning: 'vui, phấn khởi', han_viet: 'cao hứng' },
    { hanzi: '听', parts: '口 (khẩu) + 斤 (cân)', pinyin: 'tīng', pos: 'động từ', meaning: 'nghe', han_viet: 'thính' },
    { hanzi: '飞机', parts: '飞 (phi) + 机 (cơ)', pinyin: 'fēijī', pos: 'danh từ', meaning: 'máy bay', han_viet: 'phi cơ' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Ngày tháng (2)', title: 'Cách diễn đạt ngày tháng (2): năm, tháng, ngày/号, thứ',
      intro: 'Trong tiếng Trung, ngày tháng được đọc và viết theo trình tự từ đơn vị lớn đến đơn vị nhỏ. Khi đọc năm, phải đọc từng chữ số rồi thêm 年 phía sau. Khi đọc tháng và ngày, đọc cả con số rồi thêm 月 và 日/号 phía sau. Cách đọc các thứ trong tuần là thêm số vào sau 星期.',
      groups: [{ label: 'Ví dụ trong sách', items: [
        ['2008年8月8日，星期五', 'èr líng líng bā nián bā yuè bā hào, xīngqī wǔ', 'thứ sáu, ngày 8 tháng 8 năm 2008'],
        ['2014年5月11号', 'èr líng yī sì nián wǔ yuè shíyī hào', 'ngày 11 tháng 5 năm 2014'],
        ['9月10号，星期三', 'jiǔ yuè shí hào, xīngqī sān', 'thứ tư, ngày 10 tháng 9'],
        ['2011年9月', 'èr líng yī yī nián jiǔ yuè', 'tháng 9 năm 2011'],
      ] }],
    },
    {
      kind: 'examples', label: 'Từ ba âm tiết (4)', title: 'Sự kết hợp thanh điệu của từ có ba âm tiết (4): âm tiết đầu thanh 4',
      clip: { label: '15-4 · Nghe và đọc theo (từ ba âm tiết)', src: A + 'l15-4.mp3' },
      intro: 'Từ ba âm tiết bắt đầu bằng thanh 4, rồi lần lượt kết hợp với các thanh ở hai âm tiết sau.',
      groups: [
        { label: '4 + 1 + (1/2/3/4)', items: [['电冰箱', 'diànbīngxiāng', 'tủ lạnh · 4+1+1'], ['麦当劳', 'Màidāngláo', "McDonald's · 4+1+2"], ['健身馆', 'jiànshēnguǎn', 'phòng tập thể dục · 4+1+3'], ['办公室', 'bàngōngshì', 'văn phòng · 4+1+4']] },
        { label: '4 + 2 + (1/2/3/4)', items: [['唱国歌', 'chàng guógē', 'hát quốc ca · 4+2+1'], ['看足球', 'kàn zúqiú', 'xem bóng đá · 4+2+2'], ['矿泉水', 'kuàngquánshuǐ', 'nước suối · 4+2+3'], ['涮羊肉', 'shuànyángròu', 'thịt cừu nhúng lẩu · 4+2+4']] },
        { label: '4 + 3 + (1/2/3/4)', items: [['密码箱', 'mìmǎxiāng', 'két có mật mã · 4+3+1'], ['气管炎', 'qìguǎnyán', 'viêm khí quản · 4+3+2'], ['大使馆', 'dàshǐguǎn', 'đại sứ quán · 4+3+3'], ['灭火器', 'mièhuǒqì', 'bình chữa cháy · 4+3+4']] },
        { label: '4 + 4 + (1/2/3/4)', items: [['照相机', 'zhàoxiàngjī', 'máy ảnh · 4+4+1'], ['赞助人', 'zànzhùrén', 'nhà tài trợ · 4+4+2'], ['电话卡', 'diànhuàkǎ', 'thẻ điện thoại · 4+4+3'], ['奥运会', 'Àoyùnhuì', 'Thế vận hội Olympic · 4+4+4']] },
      ],
    },
    {
      kind: 'examples', label: 'Bộ 艹 và 宀', title: 'Các bộ của chữ Hán: 艹 và 宀',
      intro: 'Bộ 艹 thường liên quan đến cây cỏ, thực vật. Bộ 宀 thường liên quan đến nhà cửa.',
      groups: [
        { label: 'Bộ 艹 (cây cỏ, thực vật)', items: [['茶', 'chá', 'trà'], ['菜', 'cài', 'rau cải']] },
        { label: 'Bộ 宀 (nhà cửa)', items: [['安', 'ān', 'ổn định'], ['家', 'jiā', 'nhà']] },
      ],
    },
    {
      kind: 'examples', label: 'Từ bổ sung', title: 'Từ vựng bổ sung: tự giới thiệu việc biết làm',
      intro: 'Sách trang 130 bổ sung từ 开始 dùng trong hoạt động nhóm hỏi nhau biết làm gì.',
      groups: [{ label: 'Từ bổ sung', items: [['开始', 'kāishǐ', 'bắt đầu'], ['做中国菜', 'zuò Zhōngguó cài', 'nấu món Trung Quốc (ví dụ của sách: 小王)']] }],
    },
  ],

  notes: [
    {
      title: 'Câu có cấu trúc 是……的: nhấn mạnh thời gian, địa điểm, cách thức',
      body: 'Khi đã biết sự việc xảy ra, có thể dùng 是……的 để nhấn mạnh thời gian, địa điểm, cách thức xảy ra sự việc. 是 có thể được lược bỏ trong câu khẳng định và câu hỏi, nhưng không được lược bỏ trong câu phủ định. Cấu trúc: chủ ngữ + 是 + thời gian/địa điểm/cách thức + động từ + 的. Ví dụ: 我是昨天来的。 这是在北京买的。 你们是怎么来饭店的？ Phủ định: 我不是昨天来的。 这不是在北京买的。 我们不是坐出租车来的。',
      say: '我是昨天来的',
    },
    {
      title: 'Cách diễn đạt ngày tháng (2)',
      body: 'Ngày tháng đọc từ đơn vị lớn đến nhỏ. Đọc năm: đọc từng chữ số rồi thêm 年. Đọc tháng và ngày: đọc cả con số rồi thêm 月 và 日/号. Thứ: 星期 + số. Ví dụ: 2008年8月8日，星期五 đọc là “èr líng líng bā nián bā yuè bā hào, xīngqī wǔ”. 明天是2014年5月11号。 今天几号？星期几？ 今天9月10号，星期三。 我们是2011年9月认识的。',
      say: '二零一一年九月',
    },
    {
      title: 'Thanh điệu của từ ba âm tiết (4)',
      body: 'Từ ba âm tiết bắt đầu bằng thanh 4 có 16 tổ hợp (4+1+1 … 4+4+4). Luyện đọc theo nhóm cùng file nghe 15-4.',
      say: '办公室',
    },
    {
      title: 'Bộ 艹 và 宀',
      body: 'Bộ 艹 liên quan đến cây cỏ, thực vật: 茶, 菜. Bộ 宀 liên quan đến nhà cửa: 安, 家.',
      say: '家',
    },
  ],

  writeChars: ['年', '出', '飞', '茶', '菜', '家'],

  drills: [
    {
      title: 'Ba chữ đơn mới (认识独体字)',
      hint: 'Sách trang 128–129: nguồn gốc hình chữ. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '年', p: 'nián', m: 'gốc là chở thóc lúa đã thu hoạch về nhà; nay là đơn vị thời gian: năm' },
        { h: '出', p: 'chū', m: 'hình bàn chân rời khỏi nơi nào đó; nay nghĩa là ra, đi ra' },
        { h: '飞', p: 'fēi', m: 'hình đôi cánh chim tung bay trên trời; nghĩa gốc là bay lượn, nay là bay trên trời, nhanh chóng' },
      ],
    },
    {
      title: 'Hỏi nhau đã mua đồ khi nào, ở đâu (运用 1, sách trang 129)',
      hint: 'Mẫu: 这个是在哪儿买的？ 在商店买的。 什么时候买的？ 昨天买的。',
      items: [
        { h: '汉语书', p: 'Hànyǔ shū', m: 'sách tiếng Hán' }, { h: '衣服', p: 'yīfu', m: 'quần áo' },
        { h: '杯子', p: 'bēizi', m: 'ly, tách' }, { h: '电脑', p: 'diànnǎo', m: 'máy vi tính' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 127)',
      items: [
        { q: '她们是什么时候认识的？ (Tāmen shì shénme shíhou rènshi de?)', hint: '她们是2011年9月认识的。' },
        { q: '她们是在哪儿认识的？ (Tāmen shì zài nǎr rènshi de?)', hint: '她们是在学校认识的。' },
        { q: '他们是怎么去饭店的？ (Tāmen shì zěnme qù fàndiàn de?)', hint: '他们是坐出租车去的。' },
        { q: '李先生是坐出租车去饭店的吗？ (Lǐ xiānsheng shì zuò chūzūchē qù fàndiàn de ma?)', hint: '不是，他是和朋友一起开车去的。' },
        { q: '李小姐是怎么来北京的？ (Lǐ xiǎojiě shì zěnme lái Běijīng de?)', hint: '她是坐飞机来的。' },
      ],
    },
    {
      title: 'Hoạt động nhóm: hỏi nhau biết làm gì (运用 2, sách trang 130)',
      items: [
        { q: 'A: 你会说汉语吗？  B: 会。', hint: 'Hỏi nhau từng thành viên biết làm gì rồi ghi lại.' },
        { q: 'A: 你是什么时候开始学汉语的？  B: 我是……的。', hint: 'Trả lời bằng thời gian bạn bắt đầu học, ví dụ: 我是今年开始学的。' },
        { q: 'A: 你是在哪儿学的？  B: 我是……的。', hint: 'Mẫu của sách (小王): 会做中国菜，今年，北京。' },
      ],
    },
  ],

  sentences: [
    { parts: ['你', '和', '李', '小姐', '是', '什么', '时候', '认识', '的'], pinyin: 'Nǐ hé Lǐ xiǎojiě shì shénme shíhou rènshi de?', vi: 'Cô và cô Lý quen nhau khi nào?' },
    { parts: ['我们', '是', '2011', '年', '9', '月', '认识', '的'], pinyin: 'Wǒmen shì èr líng yī yī nián jiǔ yuè rènshi de.', vi: 'Chúng tôi quen nhau vào tháng 9 năm 2011.' },
    { parts: ['我们', '是', '在', '学校', '认识', '的'], pinyin: 'Wǒmen shì zài xuéxiào rènshi de.', vi: 'Chúng tôi quen nhau ở trường.' },
    { parts: ['你们', '是', '怎么', '来', '饭店', '的'], pinyin: 'Nǐmen shì zěnme lái fàndiàn de?', vi: 'Anh chị đến khách sạn bằng cách nào?' },
    { parts: ['我们', '是', '坐', '出租车', '来', '的'], pinyin: 'Wǒmen shì zuò chūzūchē lái de.', vi: 'Chúng tôi đi taxi đến.' },
    { parts: ['他', '是', '和', '朋友', '一起', '开车', '来', '的'], pinyin: 'Tā shì hé péngyou yìqǐ kāi chē lái de.', vi: 'Ông ấy và bạn cùng lái xe đến.' },
    { parts: ['我', '是', '坐', '飞机', '来', '北京', '的'], pinyin: 'Wǒ shì zuò fēijī lái Běijīng de.', vi: 'Tôi đáp máy bay đến Bắc Kinh.' },
  ],

  // ───────── Sách bài tập, bài 15 (đáp án: "Đáp án sách bài tập", trang 29–31) ─────────
  dictations: [
    {
      title: 'Sách bài tập · Nghe, gõ từ ba âm tiết (ngữ âm, câu 6–10)',
      hint: 'Nghe đoạn ghi âm (15-2), gõ lại pinyin của từ ba âm tiết bạn nghe được trong câu (có thể không cần dấu). Câu 6: Jiè wǒ nǐ de lùyīnbǐ yòng yong. 7: Míngtiān xiàwǔ wǒmen yìqǐ qù diànyǐngyuàn ba. 8: Nǐ shì shénme shíhou qù jiànshēnfáng de? 9: Wǒ zài xué dǎ tàijíquán ne. 10: Wǒ yào mǎi yì zhāng diànhuàkǎ.',
      clip: { label: '15-2 · Sách bài tập, ngữ âm phần 2', src: A + 'w15-2.mp3' },
      items: [
        { prompt: 'Câu 6', answer: 'lùyīnbǐ', gloss: '录音笔' }, { prompt: 'Câu 7', answer: 'diànyǐngyuàn', gloss: '电影院' }, { prompt: 'Câu 8', answer: 'jiànshēnfáng', gloss: '健身房' },
        { prompt: 'Câu 9', answer: 'tàijíquán', gloss: '太极拳' }, { prompt: 'Câu 10', answer: 'diànhuàkǎ', gloss: '电话卡' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, trả lời câu hỏi (câu 11–15)',
      hint: 'Nghe đoạn ghi âm (15-1, phần 3) rồi gõ câu trả lời ngắn. Câu hỏi: 11 他们是什么时候认识的？ 12 他/她喜欢哪儿的衣服？ 13 王老师是怎么去的？ 14 李老师是什么时候去学校的？ 15 张先生是怎么来的？',
      clip: { label: '15-1 · Sách bài tập, nghe phần 3 (câu 11–15)', src: A + 'w15-1.mp3' },
      items: [
        { prompt: 'Câu 11 · 什么时候认识的？', answer: '2008年', accept: ['2008', '二零零八年', '在北京认识的'], gloss: '我们是2008年在北京认识的。' },
        { prompt: 'Câu 12 · 喜欢哪儿的衣服？', answer: '中国', accept: ['中国的', '中国的衣服'], gloss: '我的衣服都是在中国买的，我喜欢中国的衣服。' },
        { prompt: 'Câu 13 · 王老师是怎么去的？', answer: '不坐出租车', accept: ['不是坐出租车去的', '没坐出租车', '不知道'], gloss: '王老师不是坐出租车去的。' },
        { prompt: 'Câu 14 · 什么时候去学校的？', answer: '八点', accept: ['8点', '八点去的'], gloss: '李老师是八点去学校的，九点前会到。' },
        { prompt: 'Câu 15 · 张先生是怎么来的？', answer: '坐飞机', accept: ['飞机', '坐飞机来的'], gloss: '张先生是坐飞机来的。' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu hỏi với câu trả lời (câu 21–25)',
      hint: 'A 我们是大学同学。 B 我也很高兴。 C 在一个小商店买的。 D 明天吧，小王是今天去的。 E 我看见他开车回家了。 F 好的，谢谢！ Gõ chữ cái A–F.',
      items: [
        { prompt: '你们是怎么认识的？', answer: 'A', gloss: '我们是大学同学。' }, { prompt: '你的衣服是在哪儿买的？', answer: 'C', gloss: '在一个小商店买的。' },
        { prompt: '小王回家了吗？', answer: 'E', gloss: '我看见他开车回家了。' }, { prompt: '我很高兴你来我们学校。', answer: 'B', gloss: '我也很高兴。' },
        { prompt: '你想什么时候去？', answer: 'D', gloss: '明天吧，小王是今天去的。' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ vào chỗ trống (câu 26–30)',
      hint: 'A 认识 · B 坐 · C 一起 · D 名字 · E 高兴 · F 听. Gõ chữ cái A–F.',
      items: [
        { prompt: '（ ）老师说，明天我们去看电影。', answer: 'F', gloss: '听' }, { prompt: '我们是在飞机上（ ）的。', answer: 'A', gloss: '认识' },
        { prompt: '我不喜欢（ ）出租车，我喜欢开车。', answer: 'B', gloss: '坐' }, { prompt: '你想不想和我们（ ）去商店买衣服？', answer: 'C', gloss: '一起' },
        { prompt: '今天天气很好，我很（ ）。', answer: 'E', gloss: '高兴' },
      ],
    },
  ],
}
