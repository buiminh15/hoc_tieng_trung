import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 1, Bài 14: 她买了不少衣服。 (sách trang 116–123).
 * Nghe: 14-1…14-4 (giáo trình). Sách bài tập (trang 103–111, đáp án trang 27–29): nối câu hỏi/đáp 21–25, điền từ 26–30,
 * nghe 11–15 và 6–10 (ngữ âm) gõ câu trả lời theo văn bản nghe trong file đáp án.
 * Phần tiếng Việt do app tự thêm ở những chỗ sách không có.
 */

const A = '/audio/hsk-std1/'

export const hskStd1Lesson14: Lesson = {
  id: 14,
  title: 'Cô ấy đã mua nhiều quần áo.',
  hanzi: '她买了不少衣服。',
  pinyin: 'Tā mǎi le bù shǎo yīfu.',
  vi: 'Cô ấy đã mua nhiều quần áo.',
  intro: 'Nói về việc đã xảy ra: 你买什么了？ 我买了一点儿苹果。 Học trợ từ 了 chỉ sự việc đã xảy ra hoặc hoàn thành, danh từ 后, trợ từ ngữ khí 啊, phó từ 都; thanh điệu của từ ba âm tiết (3); bộ 月 và 扌; chữ 开, 车, 回.',

  dialogue: [
    { who: 'A', hanzi: '昨天上午你去哪儿了？', pinyin: 'Zuótiān shàngwǔ nǐ qù nǎr le?', vi: 'Sáng hôm qua bạn đi đâu vậy?', scene: 'Hội thoại 1 · ở ký túc xá' },
    { who: 'B', hanzi: '我去商店买东西了。', pinyin: 'Wǒ qù shāngdiàn mǎi dōngxi le.', vi: 'Mình đến cửa hàng để mua đồ.' },
    { who: 'A', hanzi: '你买什么了？', pinyin: 'Nǐ mǎi shénme le?', vi: 'Bạn mua gì vậy?' },
    { who: 'B', hanzi: '我买了一点儿苹果。', pinyin: 'Wǒ mǎi le yìdiǎnr píngguǒ.', vi: 'Mình mua một ít táo.' },
    { who: 'A', hanzi: '你看见张先生了吗？', pinyin: 'Nǐ kànjiàn Zhāng xiānsheng le ma?', vi: 'Anh có thấy ông Trương không?', scene: 'Hội thoại 2 · trong công ty' },
    { who: 'B', hanzi: '看见了，他去学开车了。', pinyin: 'Kànjiàn le, tā qù xué kāi chē le.', vi: 'Có, ông ấy đi học lái xe rồi.' },
    { who: 'A', hanzi: '他什么时候能回来？', pinyin: 'Tā shénme shíhou néng huílai?', vi: 'Khi nào ông ấy quay lại?' },
    { who: 'B', hanzi: '40分钟后回来。', pinyin: 'Sìshí fēnzhōng hòu huílai.', vi: '40 phút nữa.' },
    { who: 'A', hanzi: '王方的衣服太漂亮了！', pinyin: 'Wáng Fāng de yīfu tài piàoliang le!', vi: 'Quần áo của Vương Phương đẹp quá!', scene: 'Hội thoại 3 · trước cửa hàng' },
    { who: 'B', hanzi: '是啊，她买了不少衣服。', pinyin: 'Shì a, tā mǎi le bù shǎo yīfu.', vi: 'Đúng vậy. Cô ấy mua nhiều quần áo lắm.' },
    { who: 'A', hanzi: '你买什么了？', pinyin: 'Nǐ mǎi shénme le?', vi: 'Còn bạn mua những gì?' },
    { who: 'B', hanzi: '我没买，这些都是王方的东西。', pinyin: 'Wǒ méi mǎi, zhèxiē dōu shì Wáng Fāng de dōngxi.', vi: 'Mình không mua gì cả, những thứ này đều là đồ của Vương Phương.' },
  ],
  dialogueClips: [
    { label: '14-1 · Hội thoại 1: 昨天上午你去哪儿了？', src: A + 'l14-1.mp3' },
    { label: '14-2 · Hội thoại 2: 你看见张先生了吗？', src: A + 'l14-2.mp3' },
    { label: '14-3 · Hội thoại 3: 王方的衣服太漂亮了！', src: A + 'l14-3.mp3' },
  ],
  dialogueTip: '<b>了</b> cuối câu hoặc sau động từ chỉ việc đã xảy ra: 我去商店了 / 我买了苹果. Sau <b>了</b> có tân ngữ thì tân ngữ phải có định ngữ (一点儿, 不少): 买了<b>不少</b>衣服. Phủ định dùng <b>没</b> và bỏ 了: 我没买.',
  slowSay: '她买了不少衣服',

  vocab: [
    { hanzi: '东西', parts: '东 (đông) + 西 (tây)', pinyin: 'dōngxi', pos: 'danh từ', meaning: 'đồ, đồ đạc', han_viet: 'đông tây' },
    { hanzi: '一点儿', pinyin: 'yìdiǎnr', pos: 'số lượng', meaning: 'một ít, một chút', han_viet: '' },
    { hanzi: '苹果', parts: '苹 = 艹 + 平; 果 (quả)', pinyin: 'píngguǒ', pos: 'danh từ', meaning: 'táo', han_viet: 'bình quả' },
    { hanzi: '看见', parts: '看 (khán) + 见 (kiến)', pinyin: 'kànjiàn', pos: 'động từ', meaning: 'nhìn thấy', han_viet: 'khán kiến' },
    { hanzi: '先生', parts: '先 (tiên) + 生 (sinh)', pinyin: 'xiānsheng', pos: 'danh từ', meaning: 'ông, ngài', han_viet: 'tiên sinh' },
    { hanzi: '开', parts: '门 (môn) lược + 廾', pinyin: 'kāi', pos: 'động từ', meaning: 'lái (xe), mở', han_viet: 'khai' },
    { hanzi: '车', pinyin: 'chē', pos: 'danh từ', meaning: 'xe', han_viet: 'xa' },
    { hanzi: '回来', parts: '回 (hồi) + 来 (lai)', pinyin: 'huílai', pos: 'động từ', meaning: 'quay về, trở lại', han_viet: 'hồi lai' },
    { hanzi: '分钟', parts: '分 (phân) + 钟 (chung)', pinyin: 'fēnzhōng', pos: 'danh từ', meaning: 'phút', han_viet: 'phân chung' },
    { hanzi: '后', pinyin: 'hòu', pos: 'danh từ', meaning: 'sau', han_viet: 'hậu' },
    { hanzi: '衣服', parts: '衣 (y) + 服 (phục)', pinyin: 'yīfu', pos: 'danh từ', meaning: 'quần áo', han_viet: 'y phục' },
    { hanzi: '漂亮', parts: '漂 = 氵 + 票; 亮 (lượng)', pinyin: 'piàoliang', pos: 'tính từ', meaning: 'đẹp', han_viet: 'phiêu lượng' },
    { hanzi: '啊', parts: '口 (khẩu) + 阿 (a)', pinyin: 'a', pos: 'trợ từ', meaning: 'trợ từ ngữ khí cuối câu: khẳng định hay biện hộ. Từ ngoài đại cương HSK 1 (dấu * trong sách)', han_viet: '' },
    { hanzi: '不少', parts: '不 (bất) + 少 (thiểu)', pinyin: 'bù shǎo', pos: 'tính từ', meaning: 'nhiều', han_viet: 'bất thiểu' },
    { hanzi: '这些', parts: '这 (giá) + 些 (ta)', pinyin: 'zhèxiē', pos: 'đại từ', meaning: 'những thứ này, những điều này', han_viet: '' },
    { hanzi: '都', parts: '者 (giả) + 阝', pinyin: 'dōu', pos: 'phó từ', meaning: 'đều', han_viet: 'đô' },
    { hanzi: '张', pinyin: 'Zhāng', pos: 'danh từ riêng', meaning: 'Trương (họ của người Trung Quốc)', han_viet: 'trương' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Từ ba âm tiết (3)', title: 'Sự kết hợp thanh điệu của từ có ba âm tiết (3): âm tiết đầu thanh 3',
      clip: { label: '14-4 · Nghe và đọc theo (từ ba âm tiết)', src: A + 'l14-4.mp3' },
      intro: 'Từ ba âm tiết bắt đầu bằng thanh 3, rồi lần lượt kết hợp với các thanh ở hai âm tiết sau.',
      groups: [
        { label: '3 + 1 + (1/2/3/4)', items: [['洗衣机', 'xǐyījī', 'máy giặt · 3+1+1'], ['普通人', 'pǔtōng rén', 'người thường · 3+1+2'], ['总经理', 'zǒngjīnglǐ', 'tổng giám đốc · 3+1+3'], ['火车票', 'huǒchē piào', 'vé tàu hỏa · 3+1+4']] },
        { label: '3 + 2 + (1/2/3/4)', items: [['史学家', 'shǐxuéjiā', 'nhà sử học · 3+2+1'], ['警察局', 'jǐngchájú', 'đồn cảnh sát · 3+2+2'], ['美男子', 'měinánzǐ', 'người đàn ông đẹp trai · 3+2+3'], ['美容院', 'měiróngyuàn', 'thẩm mỹ viện · 3+2+4']] },
        { label: '3 + 3 + (1/2/3/4)', items: [['表演家', 'biǎoyǎnjiā', 'nghệ sĩ biểu diễn · 3+3+1'], ['小演员', 'xiǎo yǎnyuán', 'diễn viên nhí · 3+3+2'], ['米老鼠', 'Mǐlǎoshǔ', 'chuột Mickey · 3+3+3'], ['演唱会', 'yǎnchànghuì', 'buổi hòa nhạc · 3+3+4']] },
        { label: '3 + 4 + (1/2/3/4)', items: [['打字机', 'dǎzìjī', 'máy đánh chữ · 3+4+1'], ['跑步鞋', 'pǎobù xié', 'giày chạy bộ · 3+4+2'], ['美术馆', 'měishùguǎn', 'phòng triển lãm nghệ thuật · 3+4+3'], ['打电话', 'dǎ diànhuà', 'gọi điện thoại · 3+4+4']] },
      ],
    },
    {
      kind: 'examples', label: 'Bộ 月 và 扌', title: 'Các bộ của chữ Hán: 月 và 扌',
      intro: 'Bộ 月 (nhục) thường liên quan đến thân thể, thịt. Bộ 扌 thường chỉ hành động có liên quan đến tay.',
      groups: [
        { label: 'Bộ 月 (thân thể, thịt)', items: [['服', 'fú', 'quần áo'], ['胖', 'pàng', 'béo']] },
        { label: 'Bộ 扌 (hành động của tay)', items: [['打', 'dǎ', 'đánh'], ['找', 'zhǎo', 'tìm']] },
      ],
    },
  ],

  notes: [
    {
      title: 'Trợ từ 了: sự việc đã xảy ra hoặc hoàn thành',
      body: '了 dùng ở cuối câu: 我去商店了。 他去学开车了。 你买什么了？ 了 cũng đứng giữa động từ và tân ngữ. Khi đó trước tân ngữ thường phải có định ngữ (số lượng từ, tính từ, đại từ): 她买了一点儿苹果。 我买了不少衣服。 你看见了几个人？ Phủ định của cả hai cách dùng là 没 + động từ (+ tân ngữ), và 了 được bỏ đi: 她没去商店。 我没买。 我没看见张先生。',
      say: '我买了一点儿苹果',
    },
    {
      title: 'Danh từ 后',
      body: '后 chỉ khoảng thời gian sau thời điểm hiện tại hoặc sau một thời điểm được đề cập. Ví dụ: 五点后, 40分钟后, 星期三后。 你几点去工作？ 八点后。 你什么时候回家？ 五点后。 他什么时候能回来？ 40分钟后回来。',
      say: '四十分钟后回来',
    },
    {
      title: 'Trợ từ ngữ khí 啊',
      body: '啊 dùng ở cuối câu trần thuật để thêm sắc thái biểu cảm. Tùy âm cuối của chữ đứng trước mà 啊 đọc thành ya, wa, na, nga, za, ra. Ví dụ: 你是王小姐吗？ 是啊。 你想去吃中国菜吗？ 好啊。 王方的衣服太漂亮了！ 是啊，她买了不少衣服。',
      say: '是啊',
    },
    {
      title: 'Phó từ 都',
      body: '都 có nghĩa bao gồm toàn bộ; đối tượng được bao gồm phải đặt trước 都. Ví dụ: 我们都是中国人。 他们都喜欢喝茶。 这些都是王方的东西。',
      say: '这些都是王方的东西',
    },
    {
      title: 'Thanh điệu của từ ba âm tiết (3)',
      body: 'Từ ba âm tiết bắt đầu bằng thanh 3 có 16 tổ hợp (3+1+1 … 3+4+4). Luyện đọc theo nhóm cùng file nghe 14-4.',
      say: '洗衣机',
    },
    {
      title: 'Bộ 月 và 扌',
      body: 'Bộ 月 liên quan đến thân thể, thịt: 服, 胖. Bộ 扌 chỉ hành động của tay: 打, 找.',
      say: '打',
    },
  ],

  writeChars: ['开', '车', '回', '衣', '服', '打'],

  drills: [
    {
      title: 'Ba chữ đơn mới (认识独体字)',
      hint: 'Sách trang 121–122: nguồn gốc hình chữ. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '开', p: 'kāi', m: 'gốc là hai tay kéo chốt cửa; nay nhiều nghĩa: 开车 lái xe, 开花 ra hoa' },
        { h: '车', p: 'chē', m: 'hình chiếc xe có bánh ở hai bên; nay chỉ phương tiện trên đất liền: 出租车 taxi, 火车 tàu hỏa' },
        { h: '回', p: 'huí', m: 'hình dòng nước xoáy; nghĩa gốc là xoay tròn, sau là về, trở về' },
      ],
    },
    {
      title: 'Hỏi nhau đã mua gì (运用 1, sách trang 122)',
      hint: 'Mẫu: 你去商店买什么了？ 我买了……',
      items: [
        { h: '苹果', p: 'píngguǒ', m: 'táo' }, { h: '衣服', p: 'yīfu', m: 'quần áo' }, { h: '杯子', p: 'bēizi', m: 'ly, tách' },
        { h: '桌子', p: 'zhuōzi', m: 'cái bàn' }, { h: '书', p: 'shū', m: 'sách' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 120)',
      items: [
        { q: '昨天上午她去哪儿了？ (Zuótiān shàngwǔ tā qù nǎr le?)', hint: '她去商店了。' },
        { q: '她买什么了？ (Tā mǎi shénme le?)', hint: '她买了一点儿苹果。' },
        { q: '张先生什么时候能回来？ (Zhāng xiānsheng shénme shíhou néng huílai?)', hint: '40分钟后回来。' },
        { q: '王方买什么了？ (Wáng Fāng mǎi shénme le?)', hint: '她买了不少衣服。' },
        { q: '王方的朋友买什么了？ (Wáng Fāng de péngyou mǎi shénme le?)', hint: '她没买，这些都是王方的东西。' },
      ],
    },
    {
      title: 'Hoạt động nhóm: hỏi hoạt động trong một ngày (运用 2, sách trang 123)',
      items: [
        { q: 'A: 星期一上午你做什么了？  B: 我去电影院了。', hint: 'Hỏi nhau: thời gian, địa điểm, đã làm gì.' },
        { q: 'A: 你看什么了？  B: 我看了一个中国电影。', hint: 'Mẫu của sách (小王): 星期一上午, 电影院, 看了一个电影。' },
      ],
    },
  ],

  sentences: [
    { parts: ['昨天', '上午', '你', '去', '哪儿', '了'], pinyin: 'Zuótiān shàngwǔ nǐ qù nǎr le?', vi: 'Sáng hôm qua bạn đi đâu?' },
    { parts: ['我', '去', '商店', '买', '东西', '了'], pinyin: 'Wǒ qù shāngdiàn mǎi dōngxi le.', vi: 'Mình đến cửa hàng mua đồ.' },
    { parts: ['我', '买', '了', '一点儿', '苹果'], pinyin: 'Wǒ mǎi le yìdiǎnr píngguǒ.', vi: 'Mình mua một ít táo.' },
    { parts: ['他', '去', '学', '开车', '了'], pinyin: 'Tā qù xué kāi chē le.', vi: 'Ông ấy đi học lái xe rồi.' },
    { parts: ['四十', '分钟', '后', '回来'], pinyin: 'Sìshí fēnzhōng hòu huílai.', vi: '40 phút nữa quay lại.' },
    { parts: ['她', '买', '了', '不少', '衣服'], pinyin: 'Tā mǎi le bù shǎo yīfu.', vi: 'Cô ấy mua nhiều quần áo.' },
    { parts: ['这些', '都', '是', '王方', '的', '东西'], pinyin: 'Zhèxiē dōu shì Wáng Fāng de dōngxi.', vi: 'Những thứ này đều là đồ của Vương Phương.' },
  ],

  // ───────── Sách bài tập, bài 14 (đáp án: "Đáp án sách bài tập", trang 27–29) ─────────
  dictations: [
    {
      title: 'Sách bài tập · Nghe, gõ từ ba âm tiết (ngữ âm, câu 6–10)',
      hint: 'Nghe đoạn ghi âm (14-2), gõ lại pinyin của từ ba âm tiết bạn nghe được trong câu (có thể không cần dấu). Câu 6: Māma yòng xǐyījī xǐ yīfu. 7: Jīntiān Běijīng de tiānqì zěnmeyàng? 8: Xuéxiào lǐ yǒu yì jiā shuǐguǒdiàn. 9: Xiǎo Zhāng qù shāngdiàn mǎi dōngxi le. 10: Tāmen qù huǒchēzhàn mǎi piào le.',
      clip: { label: '14-2 · Sách bài tập, ngữ âm phần 2', src: A + 'w14-2.mp3' },
      items: [
        { prompt: 'Câu 6', answer: 'xǐyījī', gloss: '洗衣机' }, { prompt: 'Câu 7', answer: 'zěnmeyàng', gloss: '怎么样' }, { prompt: 'Câu 8', answer: 'shuǐguǒdiàn', gloss: '水果店' },
        { prompt: 'Câu 9', answer: 'mǎidōngxi', gloss: '买东西' }, { prompt: 'Câu 10', answer: 'huǒchēzhàn', gloss: '火车站' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, trả lời câu hỏi (câu 11–15)',
      hint: 'Nghe đoạn ghi âm (14-1, phần 3) rồi gõ câu trả lời ngắn. Câu hỏi: 11 他/她上午做什么了？ 12 这些衣服都是谁的？ 13 王老师什么时候能回来？ 14 下午大卫做什么了？ 15 他/她不爱吃什么？',
      clip: { label: '14-1 · Sách bài tập, nghe phần 3 (câu 11–15)', src: A + 'w14-1.mp3' },
      items: [
        { prompt: 'Câu 11 · 上午做什么了？', answer: '买菜', accept: ['买了不少菜', '买了菜'], gloss: '我上午买了不少菜，中午做饭。' },
        { prompt: 'Câu 12 · 这些衣服都是谁的？', answer: '张小姐', accept: ['张小姐的', '是张小姐的'], gloss: '这些衣服很漂亮，都是张小姐的。' },
        { prompt: 'Câu 13 · 什么时候能回来？', answer: '三点后', accept: ['3点后'], gloss: '王老师去学校了，她三点后能回来。' },
        { prompt: 'Câu 14 · 大卫做什么了？', answer: '学开车', accept: ['去学开车', '去学开车了', '学开车了'], gloss: '下午我和大卫去学开车了。' },
        { prompt: 'Câu 15 · 不爱吃什么？', answer: '水果', accept: ['不爱吃水果'], gloss: '我不爱喝水，不爱吃水果。' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu hỏi với câu trả lời (câu 21–25)',
      hint: 'A 我去了。 B 我买了一点儿苹果。 C 是，这些都是她的东西。 D 谢谢，我喜欢买漂亮的衣服。 E 看见了，他开车去学校了。 F 好的，谢谢！ Gõ chữ cái A–F.',
      items: [
        { prompt: '昨天下午你去商店了吗？', answer: 'A', gloss: '我去了。' }, { prompt: '我没买水果，你呢？', answer: 'B', gloss: '我买了一点儿苹果。' },
        { prompt: '你看见小王了吗？', answer: 'E', gloss: '看见了，他开车去学校了。' }, { prompt: '你的衣服太漂亮了！', answer: 'D', gloss: '谢谢，我喜欢买漂亮的衣服。' },
        { prompt: '这些东西是王老师的吗？', answer: 'C', gloss: '是，这些都是她的东西。' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ vào chỗ trống (câu 26–30)',
      hint: 'A 一点儿 · B 不少 · C 都 · D 名字 · E 回来 · F 看见. Gõ chữ cái A–F.',
      items: [
        { prompt: '你们都来我家吃饭吧，我做了（ ）菜。', answer: 'B', gloss: '不少' }, { prompt: '今天星期五，我想看电影，你什么时候（ ）？', answer: 'E', gloss: '回来' },
        { prompt: '我没（ ）王老师的女朋友，很漂亮吧？', answer: 'F', gloss: '看见' }, { prompt: '张小姐住在这儿，小猫和小狗（ ）是她的。', answer: 'C', gloss: '都' },
        { prompt: '你吃得太少了，多吃（ ）吧。', answer: 'A', gloss: '一点儿' },
      ],
    },
  ],
}
