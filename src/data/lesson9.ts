import type { Lesson } from './types'

const L = '玛丽 Mǎlì'
const M = '麦克 Màikè'
const C = '营业员 yíngyèyuán'

export const lesson9: Lesson = {
  id: 9,
  title: 'Tôi đổi nhân dân tệ',
  hanzi: '我换人民币',
  pinyin: 'Wǒ huàn rénmínbì',
  vi: 'Tôi đổi nhân dân tệ',
  intro: 'Đổi tiền ở ngân hàng: nói giờ trong ngày, 要 + động từ, tên các loại tiền, số trăm nghìn vạn; cách gọi 先生 và 小姐; cách đọc ba thanh 3 liền nhau.',
  dialogue: [
    { who: 'A', name: L, scene: '(一) Buổi chiều đi đâu', hanzi: '下午我去图书馆，你去不去？', pinyin: 'Xiàwǔ wǒ qù túshūguǎn, nǐ qù bu qù?', vi: 'Buổi chiều tôi đi thư viện, bạn có đi không?' },
    { who: 'B', name: M, hanzi: '我不去。我要去银行换钱。', pinyin: 'Wǒ bú qù. Wǒ yào qù yínháng huàn qián.', vi: 'Tôi không đi. Tôi định đến ngân hàng đổi tiền.' },
    { who: 'B', name: M, scene: '(在中国银行换钱 – Đổi tiền ở Ngân hàng Trung Quốc)', hanzi: '小姐，我换钱。', pinyin: 'Xiǎojiě, wǒ huàn qián.', vi: 'Cô ơi, tôi đổi tiền.' },
    { who: 'C', name: C, hanzi: '您换什么钱？', pinyin: 'Nín huàn shénme qián?', vi: 'Ông đổi loại tiền gì?' },
    { who: 'B', name: M, hanzi: '我换人民币。', pinyin: 'Wǒ huàn rénmínbì.', vi: 'Tôi đổi nhân dân tệ.' },
    { who: 'C', name: C, hanzi: '换多少？', pinyin: 'Huàn duōshao?', vi: 'Đổi bao nhiêu?' },
    { who: 'B', name: M, hanzi: '二百美元。', pinyin: 'Èr bǎi měiyuán.', vi: 'Hai trăm đô la Mỹ.' },
    { who: 'C', name: C, hanzi: '请等一会儿……先生，给您钱。请数数。', pinyin: 'Qǐng děng yíhuìr…… Xiānsheng, gěi nín qián. Qǐng shǔshu.', vi: 'Xin đợi một lát… Thưa ông, tiền của ông đây. Xin ông đếm lại.' },
    { who: 'B', name: M, hanzi: '对了。谢谢！', pinyin: 'Duì le. Xièxie!', vi: 'Đúng rồi. Cảm ơn!' },
    { who: 'C', name: C, hanzi: '不客气！', pinyin: 'Bú kèqi!', vi: 'Đừng khách sáo!' },
  ],
  dialogueTip: 'Gọi người lạ lịch sự: <b>小姐</b> (cô, người nữ trẻ chưa kết hôn) và <b>先生</b> (ông, người nam). <b>要 + động từ</b> nghĩa là "muốn, định" (我要去银行换钱). Đổi tiền: <b>换 + loại tiền</b> (我换人民币). Ba thanh 3 liền nhau như 五百美元 có cách đọc riêng, xem tab Ngữ âm.',
  slowSay: '我换人民币',
  vocab: [
    { hanzi: '下午', pinyin: 'xiàwǔ', pos: 'danh từ', meaning: 'buổi chiều', han_viet: 'hạ ngọ' },
    { hanzi: '上午', pinyin: 'shàngwǔ', pos: 'danh từ', meaning: 'buổi sáng', han_viet: 'thượng ngọ' },
    { hanzi: '图书馆', pinyin: 'túshūguǎn', pos: 'danh từ', meaning: 'thư viện', han_viet: 'đồ thư quán' },
    { hanzi: '要', pinyin: 'yào', pos: 'trợ động từ', meaning: 'muốn, định (làm gì)', han_viet: 'yếu' },
    { hanzi: '换', pinyin: 'huàn', pos: 'động từ', meaning: 'đổi', han_viet: 'hoán' },
    { hanzi: '小姐', pinyin: 'xiǎojiě', pos: 'danh từ', meaning: 'cô, tiểu thư (nữ trẻ chưa kết hôn)', han_viet: 'tiểu thư' },
    { hanzi: '营业员', pinyin: 'yíngyèyuán', pos: 'danh từ', meaning: 'nhân viên bán hàng, giao dịch', han_viet: 'doanh nghiệp viên' },
    { hanzi: '人民币', pinyin: 'rénmínbì', pos: 'danh từ', meaning: 'nhân dân tệ', han_viet: 'nhân dân tệ' },
    { hanzi: '人民', pinyin: 'rénmín', pos: 'danh từ', meaning: 'nhân dân', han_viet: 'nhân dân' },
    { hanzi: '百', pinyin: 'bǎi', pos: 'số từ', meaning: 'trăm', han_viet: 'bách' },
    { hanzi: '千', pinyin: 'qiān', pos: 'số từ', meaning: 'nghìn', han_viet: 'thiên' },
    { hanzi: '万', pinyin: 'wàn', pos: 'số từ', meaning: 'vạn (mười nghìn)', han_viet: 'vạn' },
    { hanzi: '美元', pinyin: 'měiyuán', pos: 'danh từ', meaning: 'đô la Mỹ', han_viet: 'mỹ nguyên' },
    { hanzi: '港币', pinyin: 'gǎngbì', pos: 'danh từ', meaning: 'đô la Hồng Kông', han_viet: 'cảng tệ' },
    { hanzi: '日元', pinyin: 'rìyuán', pos: 'danh từ', meaning: 'yên Nhật', han_viet: 'nhật nguyên' },
    { hanzi: '欧元', pinyin: 'ōuyuán', pos: 'danh từ', meaning: 'euro', han_viet: 'âu nguyên' },
    { hanzi: '等', pinyin: 'děng', pos: 'động từ', meaning: 'đợi, chờ', han_viet: 'đẳng' },
    { hanzi: '一会儿', pinyin: 'yíhuìr', pos: 'danh/phó từ', meaning: 'một lát', han_viet: 'nhất hội nhi' },
    { hanzi: '先生', pinyin: 'xiānsheng', pos: 'danh từ', meaning: 'ông, ngài (nam giới); thầy', han_viet: 'tiên sinh' },
    { hanzi: '数', pinyin: 'shǔ', pos: 'động từ', meaning: 'đếm', han_viet: 'số' },
  ],
  sections: [
    {
      kind: 'examples', label: 'Ba thanh 3 liền nhau', title: 'Ba thanh 3 đứng liền nhau (三个三声)',
      intro: 'Thông thường, hai âm tiết thanh 3 đầu đọc thành thanh 2, âm tiết thứ ba giữ thanh 3 (hoặc nửa thanh 3). Nhưng nếu âm tiết đầu cần nhấn mạnh, hoặc sau nó có chỗ ngừng, thì âm tiết đầu đọc nửa thanh 3, âm tiết thứ hai đọc thanh 2, âm tiết thứ ba đọc thanh 3. Sách minh hoạ bằng hai ví dụ dưới đây.',
      groups: [
        { label: 'Hai thanh đầu → thanh 2, thanh cuối → thanh 3', items: [['五百美元', 'wǔ bǎi měiyuán', '五 và 百 đọc thanh 2; 美 đọc thanh 3 (nửa thanh 3)']] },
        { label: 'Âm đầu nhấn mạnh hoặc có chỗ ngừng', items: [['我很好', 'wǒ hěn hǎo', '我 đọc nửa thanh 3, 很 đọc thanh 2, 好 đọc thanh 3']] },
      ],
    },
  ],
  notes: [
    {
      title: 'Cách gọi: 先生 và 小姐',
      body: '先生 dùng để gọi nam giới, 小姐 dùng để gọi phụ nữ trẻ chưa kết hôn. Có thể đứng một mình khi gọi người lạ (先生，给您钱) hoặc đứng sau họ: 王小姐, 张先生 (họ + 小姐/先生). Trong tiếng Việt tương đương "ông", "cô", nhưng thường thêm họ ở trước.',
      say: '王小姐',
    },
    {
      title: 'Xin đợi một lát: 请等一会儿',
      body: '请等一会儿 nghĩa là "xin đợi một lát". 一会儿 là một khoảng thời gian ngắn; 儿 hoá nên đọc yíhuìr (一 đọc yí vì đứng trước thanh 4). 等 là đợi, chờ: 请等一会儿 là cách nhân viên nói lịch sự với khách.',
      say: '请等一会儿',
    },
    {
      title: 'Ba thanh 3 liền nhau (三个三声)',
      body: 'Khi ba âm tiết thanh 3 đứng liền nhau, thường hai âm đầu đọc thanh 2 và âm cuối giữ thanh 3 (hoặc nửa thanh 3): 五百美元 → wú bái měi yuán. Nếu âm tiết đầu được nhấn mạnh hoặc có chỗ ngừng sau nó thì đọc: nửa thanh 3, thanh 2, thanh 3: 我很好 → wǒ(nửa 3) hén hǎo. Cách nhớ: hai thanh 3 liền thành thanh 2 + thanh 3, kéo dài đến ba thanh.',
      say: '我很好',
    },
    {
      title: 'Từ chỉ buổi: 上午 và 下午',
      body: '上午 (buổi sáng) và 下午 (buổi chiều) là từ chỉ thời gian, đứng trước động từ hoặc đầu câu: 下午我去图书馆 (buổi chiều tôi đi thư viện). Có thể ghép với ngày: 今天下午, 明天下午, 星期三下午.',
      say: '明天下午',
    },
    {
      title: 'Ngữ pháp: 要 + động từ (muốn, định)',
      body: '要 + động từ diễn tả ý muốn hoặc dự định: 我要去银行换钱 (tôi định đến ngân hàng đổi tiền). Ở Bài 7, 要 là "lấy, gọi (món)": 我要一碗汤. Cùng một chữ nhưng đứng trước động từ thì là "muốn/định", đứng trước danh từ thì là "lấy/cần".',
      say: '我要去银行换钱',
    },
    {
      title: 'Đổi tiền: 换 và tên các loại tiền',
      body: '换 là đổi. Mẫu nói: 我换 + loại tiền: 我换人民币 (tôi đổi nhân dân tệ), 您换什么钱? (ông đổi loại tiền gì?). Tên các loại tiền: 人民币 (nhân dân tệ), 美元 (đô la Mỹ), 日元 (yên Nhật), 欧元 (euro), 港币 (đô la Hồng Kông). Hỏi số lượng: 换多少?',
      say: '我换人民币',
    },
    {
      title: 'Số lớn: 百, 千, 万',
      body: '百 = 100, 千 = 1.000, 万 = 10.000. Đọc: 一百, 二百 (cũng nói 两百), 三百, 五百; 五万 = 50.000. Ví dụ trong bài: 二百美元 (200 đô la), 五万日元 (50.000 yên). Khác với 块 (đơn vị tiền), 百 là số nên thường vẫn dùng 二百 bên cạnh 两百.',
      say: '二百美元',
    },
    {
      title: 'Lặp động từ: 数数',
      body: 'Lặp động từ làm lời nói nhẹ nhàng, mang nghĩa "thử… xem, … một chút": 请数数 (xin đếm thử xem), tương đương 请数一数. Nhân viên dùng khi đưa tiền cho khách kiểm lại.',
      say: '请数数',
    },
    {
      title: 'Ôn biến điệu của "不"',
      body: '不 đọc bú trước thanh 4 và bù ở các trường hợp khác. Trong bài: 我不去 đọc wǒ bú qù (不 trước 去, thanh 4). Ôn: 不说 bù shuō, 不多 bù duō, 不能 bù néng, 不来 bù lái, 不好 bù hǎo, 不买 bù mǎi, 不借 bú jiè, 不谢 bú xiè.',
      say: '不去',
    },
  ],
  sentences: [
    { parts: ['下午', '我', '去', '图书馆'], pinyin: 'Xiàwǔ wǒ qù túshūguǎn.', vi: 'Buổi chiều tôi đi thư viện.' },
    { parts: ['我', '要', '去', '银行', '换', '钱'], pinyin: 'Wǒ yào qù yínháng huàn qián.', vi: 'Tôi định đến ngân hàng đổi tiền.' },
    { parts: ['小姐', '我', '换', '钱'], pinyin: 'Xiǎojiě, wǒ huàn qián.', vi: 'Cô ơi, tôi đổi tiền.' },
    { parts: ['您', '换', '什么', '钱'], pinyin: 'Nín huàn shénme qián?', vi: 'Ông đổi loại tiền gì?' },
    { parts: ['我', '换', '人民币'], pinyin: 'Wǒ huàn rénmínbì.', vi: 'Tôi đổi nhân dân tệ.' },
    { parts: ['换', '多少'], pinyin: 'Huàn duōshao?', vi: 'Đổi bao nhiêu?' },
    { parts: ['二百', '美元'], pinyin: 'Èr bǎi měiyuán.', vi: 'Hai trăm đô la Mỹ.' },
    { parts: ['请', '等', '一会儿'], pinyin: 'Qǐng děng yíhuìr.', vi: 'Xin đợi một lát.' },
    { parts: ['先生', '给', '您', '钱'], pinyin: 'Xiānsheng, gěi nín qián.', vi: 'Thưa ông, tiền của ông đây.' },
    { parts: ['请', '数', '数'], pinyin: 'Qǐng shǔshu.', vi: 'Xin đếm lại.' },
  ],
  writeChars: ['上', '下', '午', '小', '百', '千', '万', '美', '民', '先', '生', '客', '气'],
  drills: [
    {
      title: 'Phân biệt âm và thanh điệu', hint: 'Đọc từng từ, chú ý thanh điệu và âm đầu.',
      items: [
        { h: '换钱', p: 'huàn qián' }, { h: '饭钱', p: 'fàn qián' }, { h: '美元', p: 'měiyuán' }, { h: '每年', p: 'měi nián' },
        { h: '先生', p: 'xiānsheng' }, { h: '山上', p: 'shān shang' }, { h: '客气', p: 'kèqi' },
        { h: '兑换', p: 'duìhuàn' }, { h: '退换', p: 'tuìhuàn' }, { h: '一般', p: 'yìbān' }, { h: '一半', p: 'yíbàn' },
        ...['shang', 'xia', 'hui', 'guo', 'qi', 'lai', 'qu', 'jin', 'chu', 'huan', 'ting', 'shuo', 'du', 'xie', 'yi', 'jiang', 'jie', 'wen', 'da', 'lian'].map(s => ({ p: s, syl: s })),
      ],
    },
    {
      title: 'Đọc liền nhiều âm tiết (多音节连读)', hint: 'Đọc liền mạch cả cụm.',
      items: [
        { h: '有时候', p: 'yǒu shíhou' }, { h: '去银行', p: 'qù yínháng' }, { h: '换美元', p: 'huàn měiyuán' },
        { h: '去商店', p: 'qù shāngdiàn' }, { h: '买东西', p: 'mǎi dōngxi' }, { h: '找零钱', p: 'zhǎo língqián' },
        { h: '五百元', p: 'wǔbǎi yuán' }, { h: '展览馆', p: 'zhǎnlǎnguǎn' }, { h: '很好看', p: 'hěn hǎokàn' },
        { h: '开玩笑', p: 'kāi wánxiào' }, { h: '没关系', p: 'méi guānxi' }, { h: '有意思', p: 'yǒu yìsi' },
      ],
    },
    {
      title: 'Biến điệu của 不', hint: 'Chú ý bù / bú.',
      items: [
        { h: '不说', p: 'bù shuō' }, { h: '不多', p: 'bù duō' }, { h: '不能', p: 'bù néng' }, { h: '不来', p: 'bù lái' },
        { h: '不好', p: 'bù hǎo' }, { h: '不买', p: 'bù mǎi' }, { h: '不借', p: 'bú jiè' }, { h: '不谢', p: 'bú xiè' },
      ],
    },
    {
      title: 'Phối hợp thanh điệu (声调搭配)', hint: 'Đọc to từng từ, giữ đúng thanh của từng âm tiết.',
      items: [
        { h: '电车', p: 'diànchē' }, { h: '面包', p: 'miànbāo' }, { h: '大声', p: 'dàshēng' }, { h: '电灯', p: 'diàndēng' },
        { h: '复习', p: 'fùxí' }, { h: '课文', p: 'kèwén' }, { h: '练习', p: 'liànxí' }, { h: '问题', p: 'wèntí' },
        { h: '汉语', p: 'Hànyǔ' }, { h: '外语', p: 'wàiyǔ' }, { h: '这里', p: 'zhèlǐ' }, { h: '那里', p: 'nàlǐ' },
        { h: '贵姓', p: 'guìxìng' }, { h: '运动', p: 'yùndòng' }, { h: '宴会', p: 'yànhuì' }, { h: '看病', p: 'kàn bìng' },
        { h: '月亮', p: 'yuèliang' }, { h: '漂亮', p: 'piàoliang' }, { h: '谢谢', p: 'xièxie' }, { h: '大夫', p: 'dàifu' },
      ],
    },
    {
      title: 'Nhận đọc (认读): 给 và số trăm', hint: 'Đọc cả cụm. Bấm để nghe đáp án.',
      items: [
        { h: '给你', p: 'gěi nǐ' }, { h: '给我', p: 'gěi wǒ' }, { h: '给他', p: 'gěi tā' }, { h: '给你们', p: 'gěi nǐmen' }, { h: '给他们', p: 'gěi tāmen' }, { h: '给老师', p: 'gěi lǎoshī' },
        { h: '一百', p: 'yì bǎi' }, { h: '二百', p: 'èr bǎi' }, { h: '三百', p: 'sān bǎi' }, { h: '五百', p: 'wǔ bǎi' }, { h: '六百', p: 'liù bǎi' }, { h: '八百', p: 'bā bǎi' },
        { h: '今天下午', p: 'jīntiān xiàwǔ' }, { h: '明天下午', p: 'míngtiān xiàwǔ' }, { h: '星期三下午', p: 'xīngqīsān xiàwǔ' },
      ],
    },
    {
      title: 'Nhận đọc (认读): hội thoại đổi tiền', hint: 'Bài đọc thêm của sách. Bấm từng câu để nghe.',
      items: [
        { h: '先生，我要换钱。', p: 'Xiānsheng, wǒ yào huàn qián.', m: 'Thưa ông, tôi muốn đổi tiền.' },
        { h: '您换什么钱？', p: 'Nín huàn shénme qián?', m: 'Ông đổi loại tiền gì?' },
        { h: '我换五万日元的人民币。', p: 'Wǒ huàn wǔ wàn rìyuán de rénmínbì.', m: 'Tôi đổi nhân dân tệ trị giá 50.000 yên.' },
        { h: '请等一会儿……小姐，给您钱。您数数。', p: 'Qǐng děng yíhuìr…… Xiǎojiě, gěi nín qián. Nín shǔshu.', m: 'Xin đợi một lát… Cô ơi, tiền của cô đây. Cô đếm thử nhé.' },
        { h: '对了。谢谢！', p: 'Duì le. Xièxie!', m: 'Đúng rồi. Cảm ơn!' },
        { h: '不客气！', p: 'Bú kèqi!', m: 'Đừng khách sáo!' },
      ],
    },
    {
      title: 'Thực hành nói (成段表达)', hint: 'Đọc đoạn mẫu rồi kể lại bằng lời của bạn.',
      items: [
        { h: '玛丽问我去不去图书馆，我说，不去，我要去银行换钱。', p: 'Mǎlì wèn wǒ qù bu qù túshūguǎn, wǒ shuō, bú qù, wǒ yào qù yínháng huàn qián.' },
        { h: '银行的小姐问我换什么钱，我说，换五百美元的人民币。', p: 'Yínháng de xiǎojiě wèn wǒ huàn shénme qián, wǒ shuō, huàn wǔ bǎi měiyuán de rénmínbì.' },
      ],
    },
  ],
  qa: [
    {
      title: 'Hoàn thành hội thoại (完成会话)',
      items: [
        { q: '(1) A: Nín huàn shénme qián?   B: ______ .   A: Qǐng děng yíhuìr… Gěi nín qián.   B: ______ !   A: Bú kèqi!', hint: 'B: Wǒ huàn rénmínbì. (我换人民币。) · B: Xièxie! (谢谢！)' },
        { q: '(2) A: ______ ?   B: Bú qù, wǒ qù yínháng.', hint: 'Ví dụ: A: Xiàwǔ nǐ qù túshūguǎn ma? (下午你去图书馆吗?)' },
        { q: '(3) A: ______ , ______ .   B: Wǒ huàn rénmínbì.   A: ______ , ______ .   B: Xièxie!', hint: 'Ví dụ: A: Xiānsheng, nín huàn shénme qián? (先生，您换什么钱?) · A: Qǐng děng yíhuìr, gěi nín qián. (请等一会儿，给您钱。)' },
        { q: '(4) A: ______ !', hint: 'Ví dụ: Bú kèqi! (不客气！) hoặc Xièxie! (谢谢！) tuỳ ngữ cảnh.' },
      ],
    },
  ],
}
