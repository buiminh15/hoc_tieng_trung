import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 2, Bài 3: 左边那个红色的是我的 (sách trang 17–24).
 * Sách bản Trung–Anh; phần tiếng Việt do app dịch.
 * Nghe: 03-1…03-5. Sách bài tập (trang 27–34, đáp án trang 5–7).
 */

const A = '/audio/hsk-std2/'

export const hskStd2Lesson3: Lesson = {
  id: 3,
  title: 'Cái màu đỏ bên trái là của tôi',
  hanzi: '左边那个红色的是我的',
  pinyin: 'Zuǒbian nàge hóngsè de shì wǒ de',
  vi: 'Cái màu đỏ bên trái là của tôi',
  intro: 'Nói về đồ vật của ai, màu sắc và vị trí: 这块手表是你的吗？ 左边那个红色的是我的。 Học cụm chữ 的, 一下 sau động từ, phó từ ngữ khí 真; trọng âm của từ bốn âm tiết; nét ngang gập nghiêng móc và cong móc; bộ 木 và 刂.',

  dialogue: [
    { who: 'A', hanzi: '这块手表是你的吗？', pinyin: 'Zhè kuài shǒubiǎo shì nǐ de ma?', vi: 'Chiếc đồng hồ này là của bạn à?', scene: 'Hội thoại 1 · trong phòng' },
    { who: 'B', hanzi: '不是我的。是我爸爸的。', pinyin: 'Bú shì wǒ de. Shì wǒ bàba de.', vi: 'Không phải của mình. Là của bố mình.' },
    { who: 'A', hanzi: '多少钱买的？', pinyin: 'Duōshao qián mǎi de?', vi: 'Mua bao nhiêu tiền vậy?' },
    { who: 'B', hanzi: '三千多块。', pinyin: 'Sānqiān duō kuài.', vi: 'Hơn 3.000 tệ.' },
    { who: 'A', hanzi: '这是今天早上的报纸吗？', pinyin: 'Zhè shì jīntiān zǎoshang de bàozhǐ ma?', vi: 'Đây là báo sáng nay à?', scene: 'Hội thoại 2 · ở nhà' },
    { who: 'B', hanzi: '不是，是昨天的。', pinyin: 'Bú shì, shì zuótiān de.', vi: 'Không, là của hôm qua.' },
    { who: 'A', hanzi: '你听，是不是送报纸的来了？', pinyin: 'Nǐ tīng, shì bu shì sòng bàozhǐ de lái le?', vi: 'Nghe kìa, có phải người đưa báo đến không?' },
    { who: 'B', hanzi: '我看一下。不是，是送牛奶的。', pinyin: 'Wǒ kàn yíxià. Bú shì, shì sòng niúnǎi de.', vi: 'Để mình xem. Không phải, là người giao sữa.' },
    { who: 'A', hanzi: '这是谁的房间？', pinyin: 'Zhè shì shéi de fángjiān?', vi: 'Đây là phòng của ai?', scene: 'Hội thoại 3 · ở nhà' },
    { who: 'B', hanzi: '这是我和我丈夫的，旁边那个小的房间是我女儿的。', pinyin: 'Zhè shì wǒ hé wǒ zhàngfu de, pángbiān nàge xiǎo de fángjiān shì wǒ nǚ\'ér de.', vi: 'Đây là phòng của tôi và chồng tôi, căn phòng nhỏ bên cạnh là của con gái tôi.' },
    { who: 'A', hanzi: '你女儿的房间真漂亮！都是粉色的。', pinyin: 'Nǐ nǚ\'ér de fángjiān zhēn piàoliang! Dōu shì fěnsè de.', vi: 'Phòng con gái chị đẹp thật! Toàn màu hồng.' },
    { who: 'B', hanzi: '是啊，粉色是我女儿最喜欢的颜色。', pinyin: 'Shì a, fěnsè shì wǒ nǚ\'ér zuì xǐhuan de yánsè.', vi: 'Đúng vậy, màu hồng là màu con gái tôi thích nhất.' },
    { who: 'A', hanzi: '你看见我的杯子了吗？', pinyin: 'Nǐ kànjiàn wǒ de bēizi le ma?', vi: 'Bạn có thấy cái cốc của mình không?', scene: 'Hội thoại 4 · ở văn phòng' },
    { who: 'B', hanzi: '这里有几个杯子，哪个是你的？', pinyin: 'Zhèli yǒu jǐ ge bēizi, nǎge shì nǐ de?', vi: 'Ở đây có mấy cái cốc, cái nào là của bạn?' },
    { who: 'A', hanzi: '左边那个红色的是我的。', pinyin: 'Zuǒbian nàge hóngsè de shì wǒ de.', vi: 'Cái màu đỏ bên trái là của mình.' },
    { who: 'B', hanzi: '给你。', pinyin: 'Gěi nǐ.', vi: 'Của bạn đây.' },
  ],
  dialogueClips: [
    { label: '03-1 · Hội thoại 1: 这块手表是你的吗？', src: A + 'l03-1.mp3' },
    { label: '03-2 · Hội thoại 2: 这是今天早上的报纸吗？', src: A + 'l03-2.mp3' },
    { label: '03-3 · Hội thoại 3: 这是谁的房间？', src: A + 'l03-3.mp3' },
    { label: '03-4 · Hội thoại 4: 你看见我的杯子了吗？', src: A + 'l03-4.mp3' },
  ],
  dialogueTip: '<b>…… 的</b> thay cho cả cụm danh từ khi đã rõ đang nói về cái gì: 我的 (= 我的书), 红色的 (= 红色的杯子), 送牛奶的 (người giao sữa). <b>动词 + 一下</b>: làm thử, làm một chút (看一下). <b>真 + tính từ</b>: cảm thán "thật là…".',
  slowSay: '左边那个红色的是我的',

  vocab: [
    { hanzi: '手表', parts: '手 (thủ) + 表 (biểu)', pinyin: 'shǒubiǎo', pos: 'danh từ', meaning: 'đồng hồ đeo tay', han_viet: 'thủ biểu' },
    { hanzi: '千', pinyin: 'qiān', pos: 'số từ', meaning: 'nghìn', han_viet: 'thiên' },
    { hanzi: '报纸', parts: '报 (báo) + 纸 = 纟 + 氏', pinyin: 'bàozhǐ', pos: 'danh từ', meaning: 'báo, tờ báo', han_viet: 'báo chỉ' },
    { hanzi: '送', parts: '辶 + 关', pinyin: 'sòng', pos: 'động từ', meaning: 'đưa, giao, tặng', han_viet: 'tống' },
    { hanzi: '一下', pinyin: 'yíxià', pos: 'số lượng từ', meaning: 'một chút, thử (sau động từ)', han_viet: '' },
    { hanzi: '牛奶', parts: '牛 (ngưu) + 奶 (nãi)', pinyin: 'niúnǎi', pos: 'danh từ', meaning: 'sữa bò', han_viet: 'ngưu nãi' },
    { hanzi: '房间', parts: '房 (phòng) + 间 (gian)', pinyin: 'fángjiān', pos: 'danh từ', meaning: 'căn phòng', han_viet: 'phòng gian' },
    { hanzi: '丈夫', parts: '丈 (trượng) + 夫 (phu)', pinyin: 'zhàngfu', pos: 'danh từ', meaning: 'chồng', han_viet: 'trượng phu' },
    { hanzi: '旁边', parts: '旁 (bàng) + 边 (biên)', pinyin: 'pángbiān', pos: 'danh từ', meaning: 'bên cạnh', han_viet: 'bàng biên' },
    { hanzi: '真', pinyin: 'zhēn', pos: 'phó từ', meaning: 'thật, thật là', han_viet: 'chân' },
    { hanzi: '粉色', pinyin: 'fěnsè', pos: 'danh từ', meaning: 'màu hồng. Từ ngoài đại cương HSK 2 (dấu * trong sách)', han_viet: 'phấn sắc' },
    { hanzi: '颜色', parts: '颜 (nhan) + 色 (sắc)', pinyin: 'yánsè', pos: 'danh từ', meaning: 'màu sắc', han_viet: 'nhan sắc' },
    { hanzi: '左边', parts: '左 (tả) + 边 (biên)', pinyin: 'zuǒbian', pos: 'danh từ', meaning: 'bên trái', han_viet: 'tả biên' },
    { hanzi: '红色', parts: '红 = 纟 + 工; 色', pinyin: 'hóngsè', pos: 'danh từ', meaning: 'màu đỏ', han_viet: 'hồng sắc' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Trọng âm 4 âm tiết', title: 'Trọng âm của từ bốn âm tiết',
      clip: { label: '03-5 · Nghe và đọc theo (từ bốn âm tiết)', src: A + 'l03-5.mp3' },
      intro: '(1) Từ bốn âm tiết không có thanh nhẹ: trọng âm thường rơi vào âm tiết thứ tư. (2) Từ bốn âm tiết có thanh nhẹ: thường là tính từ, âm tiết thứ hai đọc nhẹ, âm tiết thứ tư được nhấn.',
      groups: [
        { label: 'Không có thanh nhẹ (nhấn âm tiết 4)', items: [['公共汽车', 'gōnggòng qìchē', 'xe buýt'], ['高速公路', 'gāosù gōnglù', 'đường cao tốc'], ['名胜古迹', 'míngshèng gǔjì', 'danh lam thắng cảnh'], ['爱不释手', 'ài bú shì shǒu', 'mê không rời tay']] },
        { label: 'Có thanh nhẹ (âm tiết 2 nhẹ)', items: [['哆哆嗦嗦', 'duōduosuōsuō', 'run lẩy bẩy'], ['晃晃悠悠', 'huànghuangyōuyōu', 'lắc lư'], ['磨磨唧唧', 'mòmojījī', 'lề mề'], ['噼里啪啦', 'pīlipālā', 'lách tách, đôm đốp']] },
      ],
    },
    {
      kind: 'examples', label: 'Nét · bộ thủ', title: 'Chữ Hán: nét mới và bộ 木, 刂',
      intro: 'Nét (9): ngang gập nghiêng móc (横折斜钩, ví dụ 飞, 风) và cong móc (弯钩, ví dụ 狗, 猫). Bộ 木 thường liên quan đến cây cối; bộ 刂 (đao đứng) thường liên quan đến dao kéo.',
      groups: [
        { label: 'Ví dụ nét mới', items: [['飞', 'fēi', 'bay'], ['风', 'fēng', 'gió'], ['狗', 'gǒu', 'con chó'], ['猫', 'māo', 'con mèo']] },
        { label: 'Bộ 木 và 刂', items: [['杯', 'bēi', 'cốc (bộ 木)'], ['椅', 'yǐ', 'ghế (bộ 木)'], ['别', 'bié', 'rời, chia tay (bộ 刂)'], ['到', 'dào', 'đến (bộ 刂)']] },
      ],
    },
    {
      kind: 'examples', label: 'Màu · vị trí', title: 'Từ bổ sung: màu sắc và vị trí (运用 1, sách trang 23)',
      intro: 'Dùng trong hoạt động theo cặp: đặt đồ của các bạn chung một chỗ rồi hỏi xem đồ nào của ai.',
      groups: [
        { label: 'Vị trí', items: [['左边', 'zuǒbian', 'bên trái'], ['右边', 'yòubian', 'bên phải'], ['前边', 'qiánbian', 'phía trước'], ['后边', 'hòubian', 'phía sau'], ['旁边', 'pángbiān', 'bên cạnh']] },
        { label: 'Màu sắc', items: [['红色', 'hóngsè', 'màu đỏ'], ['粉色', 'fěnsè', 'màu hồng'], ['白色', 'báisè', 'màu trắng'], ['黑色', 'hēisè', 'màu đen'], ['蓝色', 'lánsè', 'màu xanh lam']] },
      ],
    },
  ],

  notes: [
    {
      title: 'Cụm chữ 的',
      body: 'Đại từ, tính từ, động từ… đi với 的 tạo thành cụm từ tương đương một cụm danh từ đã lược bỏ trung tâm ngữ. Ví dụ: 这本书不是我的。 (= 我的书) 这个杯子是昨天买的。 (= 昨天买的杯子) 这块手表是你的吗？ (= 你的手表)',
      say: '这块手表是你的吗',
    },
    {
      title: '一下',
      body: '一下 đứng sau động từ, chỉ một hành động ngắn, giống dạng lặp động từ AA (xem bài 8); tân ngữ có thể lược bỏ. Ví dụ: 我看一下。 你休息一下吧。 我问一下老师。',
      say: '我看一下',
    },
    {
      title: 'Phó từ ngữ khí 真',
      body: '真 + tính từ diễn tả ngữ khí cảm thán, nghĩa là "quả thật, thật sự". Ví dụ: 你真好！ 今天天气真好！ 你女儿的房间真漂亮！',
      say: '你女儿的房间真漂亮',
    },
    {
      title: 'Trọng âm của từ bốn âm tiết',
      body: 'Từ bốn âm tiết không có thanh nhẹ thường nhấn ở âm tiết thứ tư (公共汽车). Từ có thanh nhẹ thường là tính từ, âm tiết thứ hai nhẹ, âm tiết thứ tư nhấn (哆哆嗦嗦).',
      say: '公共汽车',
    },
  ],

  writeChars: ['手', '丈', '夫', '表', '送', '真'],

  drills: [
    {
      title: 'Ba chữ đơn mới (认识独体字)',
      hint: 'Sách trang 22–23: nguồn gốc hình chữ. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '手', p: 'shǒu', m: 'hình bàn tay, nghĩa là "tay"' },
        { h: '丈', p: 'zhàng', m: 'gốc là người già chống gậy, nay là đơn vị đo chiều dài' },
        { h: '夫', p: 'fū', m: 'gốc là người đàn ông trưởng thành, nay thường chỉ nam giới trong nhà, chồng' },
      ],
    },
    {
      title: 'Hỏi đồ vật của ai (运用 1, sách trang 23)',
      hint: 'Mẫu: 这个红色的杯子是你的吗？ 不是我的。 Bấm để nghe.',
      items: [
        { h: '这个红色的杯子是你的吗？', p: 'Zhège hóngsè de bēizi shì nǐ de ma?', m: 'Cái cốc màu đỏ này là của bạn à?' },
        { h: '不是我的。', p: 'Bú shì wǒ de.', m: 'Không phải của mình.' },
        { h: '旁边粉色的杯子是你的吗？', p: 'Pángbiān fěnsè de bēizi shì nǐ de ma?', m: 'Cái cốc màu hồng bên cạnh là của bạn à?' },
        { h: '是我的。', p: 'Shì wǒ de.', m: 'Là của mình.' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 20–21)',
      items: [
        { q: '爸爸的手表多少钱？', hint: '三千多块。' },
        { q: '送报纸的来了吗？', hint: '没来，是送牛奶的来了。' },
        { q: '旁边那个小的房间是谁的？', hint: '是她女儿的。' },
        { q: '她女儿的房间怎么样？', hint: '真漂亮，都是粉色的。' },
        { q: '哪个杯子是她的？', hint: '左边那个红色的是她的。' },
      ],
    },
  ],

  sentences: [
    { parts: ['这', '块', '手表', '是', '你', '的', '吗'], pinyin: 'Zhè kuài shǒubiǎo shì nǐ de ma?', vi: 'Chiếc đồng hồ này là của bạn à?' },
    { parts: ['不', '是', '我', '的', '，', '是', '我', '爸爸', '的'], pinyin: 'Bú shì wǒ de, shì wǒ bàba de.', vi: 'Không phải của mình, là của bố mình.' },
    { parts: ['我', '看', '一下'], pinyin: 'Wǒ kàn yíxià.', vi: 'Để mình xem.' },
    { parts: ['你', '女儿', '的', '房间', '真', '漂亮'], pinyin: 'Nǐ nǚ\'ér de fángjiān zhēn piàoliang!', vi: 'Phòng con gái chị đẹp thật!' },
    { parts: ['粉色', '是', '我', '女儿', '最', '喜欢', '的', '颜色'], pinyin: 'Fěnsè shì wǒ nǚ\'ér zuì xǐhuan de yánsè.', vi: 'Màu hồng là màu con gái tôi thích nhất.' },
    { parts: ['左边', '那', '个', '红色', '的', '是', '我', '的'], pinyin: 'Zuǒbian nàge hóngsè de shì wǒ de.', vi: 'Cái màu đỏ bên trái là của mình.' },
  ],

  dictations: [
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 11–15)',
      hint: 'Nghe đoạn ghi âm (03-1, phần 3), chọn A, B hoặc C. Câu 11: A 左边的 · B 旁边的 · C 右边的. Câu 12: A 昨天的 · B 今天的 · C 明天的. Câu 13: A 送饭的 · B 送牛奶的 · C 送报纸的. Câu 14: A 爸爸妈妈的 · B 丽丽的 · C 哥哥的. Câu 15: A 新的 · B 都不是 · C 都是.',
      clip: { label: '03-1 · Sách bài tập, phần nghe', src: A + 'w03-1.mp3' },
      items: [
        { prompt: 'Câu 11', answer: 'A', gloss: '左边的' }, { prompt: 'Câu 12', answer: 'B', gloss: '今天的' },
        { prompt: 'Câu 13', answer: 'C', gloss: '送报纸的' }, { prompt: 'Câu 14', answer: 'A', gloss: '爸爸妈妈的' },
        { prompt: 'Câu 15', answer: 'B', gloss: '都不是' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ (câu 21–25)',
      hint: 'A 送 · B 真 · C 一下 · D 旁边 · E 贵 · F 千. Gõ chữ cái A–F.',
      items: [
        { prompt: '今天的天气（ ）好，我们出去玩儿玩儿吧。', answer: 'B', gloss: '真' }, { prompt: '我也不知道吃什么，我想（ ）。', answer: 'C', gloss: '一下' },
        { prompt: '我丈夫在医院呢，我要去给他（ ）饭。', answer: 'A', gloss: '送' }, { prompt: '这块手表一（ ）多块钱，我有八百块，你有多少钱？', answer: 'F', gloss: '千' },
        { prompt: '妈妈在做饭呢，爸爸在桌子（ ）看报纸呢。', answer: 'D', gloss: '旁边' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, đúng hay sai (câu 26–30)',
      hint: 'Đọc câu cho sẵn rồi xét câu có dấu * đúng (gõ D) hay sai (gõ S).',
      items: [
        { prompt: '这个房间是丽丽的，她喜欢粉色的房间。* 丽丽的房间是粉色的。', answer: 'D', gloss: 'Đúng' },
        { prompt: '桌子上的报纸是昨天的，今天送报纸的没来。* 桌子上的报纸不是今天的。', answer: 'D', gloss: 'Đúng' },
        { prompt: '你的药在房间里，这是爸爸的。* 房间里的药是爸爸的。', answer: 'S', gloss: 'Sai' },
        { prompt: '这块手表是昨天买的，我很喜欢。* 我昨天买了一块手表。', answer: 'D', gloss: 'Đúng' },
        { prompt: '小王，你喜欢哪个颜色的杯子？给你一个。* 他要给小王一个红色杯子。', answer: 'S', gloss: 'Sai' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu (câu 31–35)',
      hint: 'A 我不认识前边的那两个人，他们是谁？ B 来了，你休息一下吧，看看报纸，喝喝茶。 C 我想给爸爸买一块手表，你觉得这块怎么样？ D 今天我要给儿子、女儿做早饭，要给丈夫做午饭，还要给朋友们做晚饭。 E 他在哪儿呢？你看见他了吗？ F 我的房间太小，住不下两个人。 Gõ chữ cái A–F.',
      items: [
        { prompt: '做三次饭，真累啊！', answer: 'D', gloss: '……还要给朋友们做晚饭。' }, { prompt: '左边的是王老师，旁边的是张老师。', answer: 'A', gloss: '他们是谁？' },
        { prompt: '没关系，我去大卫家，他家很大。', answer: 'F', gloss: '我的房间太小……' }, { prompt: '今天的报纸来了吗？', answer: 'B', gloss: '来了，你休息一下吧……' },
        { prompt: '我觉得这块很漂亮。', answer: 'C', gloss: '你觉得这块怎么样？' },
      ],
    },
  ],
}
