import type { Lesson } from './types'

const M = '玛丽 Mǎlì'
const S = '售货员 shòuhuòyuán'

/** Quyển 2, Bài 19. */
export const lesson19: Lesson = {
  id: 19,
  title: 'Có thể thử được không',
  hanzi: '可以试试吗',
  pinyin: 'Kěyǐ shìshi ma',
  vi: 'Có thể thử được không',
  intro: 'Mua quần áo và mặc cả; lặp động từ (试试, 看一看); 又…又…; 一点儿 và 有(一)点儿; 太…了; đơn vị tiền tệ 元 角 分 (块 毛 分); trọng âm từ lặp và câu cảm thán.',
  dialogue: [
    { who: 'A', name: M, scene: '(一) 可以试试吗 – Có thể thử được không (Mary mua áo lông vũ ở cửa hàng)', hanzi: '我看看羽绒服。', pinyin: 'Wǒ kànkan yǔróngfú.', vi: 'Tôi xem áo lông vũ một chút.' },
    { who: 'B', name: S, hanzi: '你看看这件怎么样？又好又便宜。', pinyin: 'Nǐ kànkan zhè jiàn zěnmeyàng? Yòu hǎo yòu piányi.', vi: 'Bạn xem chiếc này thế nào? Vừa đẹp vừa rẻ.' },
    { who: 'A', name: M, hanzi: '这件有一点儿长。有短一点儿的吗？', pinyin: 'Zhè jiàn yǒu yìdiǎnr cháng. Yǒu duǎn yìdiǎnr de ma?', vi: 'Chiếc này hơi dài. Có chiếc ngắn hơn một chút không?' },
    { who: 'B', name: S, hanzi: '你要深颜色的还是要浅颜色的？', pinyin: 'Nǐ yào shēn yánsè de háishi yào qiǎn yánsè de?', vi: 'Bạn lấy màu đậm hay màu nhạt?' },
    { who: 'A', name: M, hanzi: '浅颜色的。……我试试可以吗？', pinyin: 'Qiǎn yánsè de. …… Wǒ shìshi kěyǐ ma?', vi: 'Màu nhạt. … Tôi mặc thử được không?' },
    { who: 'B', name: S, hanzi: '当然可以。', pinyin: 'Dāngrán kěyǐ.', vi: 'Tất nhiên là được.' },
    { who: 'A', name: M, hanzi: '这件太肥了，有没有瘦一点儿的？', pinyin: 'Zhè jiàn tài féi le, yǒu méiyǒu shòu yìdiǎnr de?', vi: 'Chiếc này rộng quá, có chiếc ôm hơn một chút không?' },
    { who: 'B', name: S, hanzi: '你再试试这一件。', pinyin: 'Nǐ zài shìshi zhè yí jiàn.', vi: 'Bạn thử thêm chiếc này nữa.' },
    { who: 'A', name: M, hanzi: '这件不大不小，正合适，颜色也很好看。', pinyin: 'Zhè jiàn bú dà bù xiǎo, zhèng héshì, yánsè yě hěn hǎokàn.', vi: 'Chiếc này không to không nhỏ, vừa vặn, màu cũng rất đẹp.' },
    { who: 'A', name: M, scene: '(二) 便宜一点儿吧 – Rẻ hơn một chút đi', hanzi: '这种羽绒服怎么卖？', pinyin: 'Zhè zhǒng yǔróngfú zěnme mài?', vi: 'Loại áo lông vũ này bán thế nào?' },
    { who: 'B', name: S, hanzi: '一件四百块。', pinyin: 'Yí jiàn sìbǎi kuài.', vi: 'Một chiếc bốn trăm đồng.' },
    { who: 'A', name: M, hanzi: '太贵了。便宜一点儿吧，二百怎么样？', pinyin: 'Tài guì le. Piányi yìdiǎnr ba, èrbǎi zěnmeyàng?', vi: 'Đắt quá. Rẻ hơn một chút đi, hai trăm thế nào?' },
    { who: 'B', name: S, hanzi: '二百太少了，不卖。可以打八折，你给三百二吧。', pinyin: 'Èrbǎi tài shǎo le, bú mài. Kěyǐ dǎ bā zhé, nǐ gěi sānbǎi èr ba.', vi: 'Hai trăm ít quá, không bán. Có thể giảm hai mươi phần trăm, bạn đưa ba trăm hai nhé.' },
    { who: 'A', name: M, hanzi: '三百行不行？', pinyin: 'Sānbǎi xíng bu xíng?', vi: 'Ba trăm được không?' },
    { who: 'B', name: S, hanzi: '给你吧。', pinyin: 'Gěi nǐ ba.', vi: 'Bán cho bạn đấy.' },
  ],
  dialogueTip: '<b>V + V</b> (看看, 试试) = làm thử một chút, giọng nhẹ nhàng. <b>又 A 又 B</b> = vừa A vừa B (又好又便宜). <b>一点儿</b> đứng sau tính từ để so sánh (短一点儿的), còn <b>有(一)点儿</b> đứng trước tính từ, thường chê nhẹ (有点儿长). <b>打八折</b> = giảm 20%.',
  slowSay: '这件不大不小，正合适',
  vocab: [
    { hanzi: '羽绒服', pinyin: 'yǔróngfú', pos: 'danh từ', meaning: 'áo lông vũ', han_viet: 'vũ nhung phục' },
    { hanzi: '又…又…', pinyin: 'yòu…yòu…', pos: 'cấu trúc', meaning: 'vừa… vừa…, vừa… lại…', han_viet: 'hựu' },
    { hanzi: '便宜', pinyin: 'piányi', pos: 'tính từ', meaning: 'rẻ', han_viet: 'tiện nghi' },
    { hanzi: '长', pinyin: 'cháng', pos: 'tính từ', meaning: 'dài', han_viet: 'trường' },
    { hanzi: '一点儿', pinyin: 'yìdiǎnr', pos: 'số lượng từ', meaning: 'một chút, hơi', han_viet: '' },
    { hanzi: '短', pinyin: 'duǎn', pos: 'tính từ', meaning: 'ngắn', han_viet: 'đoản' },
    { hanzi: '深', pinyin: 'shēn', pos: 'tính từ', meaning: 'đậm (màu); sâu', han_viet: 'thâm' },
    { hanzi: '浅', pinyin: 'qiǎn', pos: 'tính từ', meaning: 'nhạt (màu); nông', han_viet: 'thiển' },
    { hanzi: '试', pinyin: 'shì', pos: 'động từ', meaning: 'thử', han_viet: 'thí' },
    { hanzi: '可以', pinyin: 'kěyǐ', pos: 'trợ động từ', meaning: 'có thể, được phép', han_viet: 'khả dĩ' },
    { hanzi: '当然', pinyin: 'dāngrán', pos: 'phó từ', meaning: 'tất nhiên, dĩ nhiên', han_viet: 'đương nhiên' },
    { hanzi: '肥', pinyin: 'féi', pos: 'tính từ', meaning: 'rộng, to (quần áo); béo', han_viet: 'phì' },
    { hanzi: '胖', pinyin: 'pàng', pos: 'tính từ', meaning: 'béo, mập', han_viet: 'bàn' },
    { hanzi: '瘦', pinyin: 'shòu', pos: 'tính từ', meaning: 'gầy; chật, ôm (quần áo)', han_viet: 'sấu' },
    { hanzi: '合适', pinyin: 'héshì', pos: 'tính từ', meaning: 'vừa vặn, phù hợp', han_viet: 'hợp thích' },
    { hanzi: '好看', pinyin: 'hǎokàn', pos: 'tính từ', meaning: 'đẹp, dễ coi', han_viet: 'hảo khán' },
    { hanzi: '种', pinyin: 'zhǒng', pos: 'lượng từ', meaning: 'loại, thứ', han_viet: 'chủng' },
    { hanzi: '打折', pinyin: 'dǎ zhé', pos: 'động từ', meaning: 'giảm giá', han_viet: 'đả triết' },
  ],
  sections: [
    {
      kind: 'examples', label: 'Trọng âm từ lặp', title: 'Trọng âm của từ (词重音): động từ lặp',
      intro: 'Động từ đơn âm tiết lặp lại: âm tiết đầu đọc rõ, âm tiết thứ hai và chữ "一" ở giữa đọc nhẹ. Động từ hai âm tiết lặp theo dạng ABAB thì A được nhấn (âm tiết đầu của mỗi lần lặp).',
      groups: [
        { label: 'Đơn âm tiết: AA và A一A', items: [['试试', 'shìshi', 'nhấn âm đầu'], ['看看', 'kànkan', 'nhấn âm đầu'], ['听听', 'tīngting', 'nhấn âm đầu'], ['读读', 'dúdu', 'nhấn âm đầu'], ['试一试', 'shì yi shì', '一 đọc nhẹ'], ['看一看', 'kàn yi kàn', '一 đọc nhẹ'], ['写一写', 'xiě yi xiě', '一 đọc nhẹ'], ['听一听', 'tīng yi tīng', '一 đọc nhẹ']] },
        { label: 'Hai âm tiết: ABAB, nhấn A', items: [['介绍介绍', 'jièshào jièshao', 'nhấn jiè'], ['休息休息', 'xiūxi xiūxi', 'nhấn xiū'], ['复习复习', 'fùxí fùxi', 'nhấn fù']] },
      ],
    },
    {
      kind: 'examples', label: 'Ngữ điệu: câu cảm thán', title: 'Ngữ điệu (语调): câu cảm thán',
      intro: 'Câu cảm thán xuống giọng ở cuối câu. Ví dụ 太好了！ và 太贵了！ khi nói thì hạ giọng ở "了".',
      groups: [
        { label: 'Câu cảm thán: xuống giọng ↘', items: [['太好了！', 'tài hǎo le!', 'xuống giọng'], ['太贵了！', 'tài guì le!', 'xuống giọng']] },
      ],
    },
  ],
  notes: [
    {
      title: 'Đơn vị tiền tệ: 元, 角, 分 (块, 毛, 分)',
      body: 'Đơn vị tính của nhân dân tệ là 元, 角, 分; khẩu ngữ nói 块, 毛, 分. 31,89元 → 三十一块八毛九(分). 46,50元 → 四十六块五(毛). 898,40元 → 八百九十八块四(毛). Đơn vị cuối cùng có thể bỏ khi nói. Nếu giữa số có hai chữ số 0 trở lên thì chỉ đọc một 零: 100,50元 → 一百块零五毛. Nếu chỉ có một đơn vị (块, 毛 hoặc 分) thì khẩu ngữ hay thêm 钱 ở cuối: 20元 → 二十块(钱); 0,50元 → 五毛(钱); 0,05元 → 五分(钱).',
      say: '三十一块八毛九',
    },
    {
      title: '太……了 (1): chê quá mức; (2): khen',
      body: '太 + tính từ + 了 diễn tả mức độ quá cao. Khi không hài lòng: 太大了, 太小了, 太肥了, 太瘦了 (quá to, quá nhỏ, quá rộng, quá chật). Khi khen ngợi, cảm thán: 太好了, 太合适了. Cùng một khung nhưng ý chê hay khen tùy từ đứng giữa. Nói câu cảm thán thì xuống giọng.',
      say: '太合适了',
    },
    {
      title: 'Động từ lặp (动词重叠): V V',
      body: 'Để diễn tả hành động diễn ra ngắn, thử xem, hoặc nhẹ nhàng, dùng dạng lặp: V + V. Giọng nói nhẹ nhàng, khách khí, thường dùng trong khẩu ngữ. Động từ lặp thường đọc nhẹ âm thứ hai. Đơn âm tiết: AA hoặc A一A (试试, 试一试). Hai âm tiết: ABAB, không chèn 一 ở giữa (预习预习, 复习复习, 休息休息). Ví dụ: 你看看这本词典怎么样? 你听听这个句子是什么意思? 我试一试，可以吗?',
      say: '你看看这本词典怎么样',
    },
    {
      title: 'Động từ lặp khi hành động đã xảy ra: A了A',
      body: 'Nếu hành động đã xảy ra hoặc hoàn thành thì dạng lặp là A + 了 + A hoặc AB 了 AB: 试试 → 试了试, 看看 → 看了看, 复习 → 复习了复习, 预习 → 预习了预习.',
      say: '我试了试',
    },
    {
      title: 'Động từ không lặp được',
      body: 'Các động từ không biểu thị hành động như 有, 在, 是 thì không lặp được. Động từ biểu thị hành động đang tiến hành cũng không lặp được. Không nói: *我正在听听录音呢.',
      say: '我听听录音',
    },
    {
      title: '又……又…… : vừa… vừa…',
      body: '又……又…… nối các tính từ, động từ hoặc cụm tính từ để nói hai tình trạng hay hai tính chất cùng tồn tại. 这件羽绒服又好又便宜。我们教室又安静又干净。那个箱子又小又旧。他去银行又取钱又换钱。',
      say: '这件羽绒服又好又便宜',
    },
    {
      title: '一点儿 và 有(一)点儿',
      body: '一点儿 có thể làm định ngữ: 他会一点儿汉语; 请给我(一)点儿啤酒吧. Đứng SAU tính từ thì biểu thị so sánh: 有没有长一点儿的? 这件颜色有点儿深，我要浅一点儿的. 有(一)点儿 làm trạng ngữ, đứng TRƯỚC tính từ, thường nói điều không như ý: 这件有(一)点儿短; 这件羽绒服有点儿不合适. Không nói *这件羽绒服有点儿合适 (vì "hợp" là điều tốt).',
      say: '这件有一点儿长',
    },
    {
      title: 'Hỏi và đáp về giá: 打折',
      body: '打八折 là giảm giá còn 80%, tức giảm 20%. 四百块打八折是三百二十块. Mặc cả: 太贵了，便宜一点儿吧。Người bán đáp: 可以打八折，你给三百二吧。Hỏi chốt giá: 三百行不行? Đồng ý bán: 给你吧.',
      say: '可以打八折',
    },
    {
      title: 'Mô tả quần áo: kích cỡ, độ dài, màu',
      body: '肥 (rộng) và 瘦 (ôm, chật) nói về kích cỡ vừa hay không. 大 / 小, 长 / 短, 深 / 浅 (màu đậm / nhạt). 合适 là vừa vặn, 不大不小 là không to không nhỏ. Hỏi lựa chọn màu: 你要深颜色的还是要浅颜色的?',
      say: '你要深颜色的还是要浅颜色的',
    },
    {
      title: 'Trọng âm từ lặp và ngữ điệu câu cảm thán',
      body: 'Động từ đơn âm tiết lặp: âm đầu nhấn, âm sau và 一 đọc nhẹ (试试, 看一看). ABAB: A được nhấn (介绍介绍). Câu cảm thán xuống giọng: 太好了↘ 太贵了↘.',
      say: '太好了',
    },
  ],
  sentences: [
    { parts: ['我', '看看', '羽绒服'], pinyin: 'Wǒ kànkan yǔróngfú.', vi: 'Tôi xem áo lông vũ một chút.' },
    { parts: ['你', '看看', '这', '件', '怎么样'], pinyin: 'Nǐ kànkan zhè jiàn zěnmeyàng?', vi: 'Bạn xem chiếc này thế nào?' },
    { parts: ['又', '好', '又', '便宜'], pinyin: 'Yòu hǎo yòu piányi.', vi: 'Vừa đẹp vừa rẻ.' },
    { parts: ['这', '件', '有', '一点儿', '长'], pinyin: 'Zhè jiàn yǒu yìdiǎnr cháng.', vi: 'Chiếc này hơi dài.' },
    { parts: ['有', '短', '一点儿', '的', '吗'], pinyin: 'Yǒu duǎn yìdiǎnr de ma?', vi: 'Có chiếc ngắn hơn một chút không?' },
    { parts: ['你', '要', '深', '颜色', '的', '还是', '要', '浅', '颜色', '的'], pinyin: 'Nǐ yào shēn yánsè de háishi yào qiǎn yánsè de?', vi: 'Bạn lấy màu đậm hay màu nhạt?' },
    { parts: ['我', '试试', '可以', '吗'], pinyin: 'Wǒ shìshi kěyǐ ma?', vi: 'Tôi mặc thử được không?' },
    { parts: ['当然', '可以'], pinyin: 'Dāngrán kěyǐ.', vi: 'Tất nhiên là được.' },
    { parts: ['这', '件', '太', '肥', '了'], pinyin: 'Zhè jiàn tài féi le.', vi: 'Chiếc này rộng quá.' },
    { parts: ['有', '没有', '瘦', '一点儿', '的'], pinyin: 'Yǒu méiyǒu shòu yìdiǎnr de?', vi: 'Có chiếc ôm hơn một chút không?' },
    { parts: ['这', '件', '不', '大', '不', '小'], pinyin: 'Zhè jiàn bú dà bù xiǎo.', vi: 'Chiếc này không to không nhỏ.' },
    { parts: ['颜色', '也', '很', '好看'], pinyin: 'Yánsè yě hěn hǎokàn.', vi: 'Màu cũng rất đẹp.' },
    { parts: ['这', '种', '羽绒服', '怎么', '卖'], pinyin: 'Zhè zhǒng yǔróngfú zěnme mài?', vi: 'Loại áo lông vũ này bán thế nào?' },
    { parts: ['一', '件', '四百', '块'], pinyin: 'Yí jiàn sìbǎi kuài.', vi: 'Một chiếc bốn trăm đồng.' },
    { parts: ['便宜', '一点儿', '吧'], pinyin: 'Piányi yìdiǎnr ba.', vi: 'Rẻ hơn một chút đi.' },
    { parts: ['可以', '打', '八', '折'], pinyin: 'Kěyǐ dǎ bā zhé.', vi: 'Có thể giảm 20%.' },
    { parts: ['我们', '教室', '又', '安静', '又', '干净'], pinyin: 'Wǒmen jiàoshì yòu ānjìng yòu gānjìng.', vi: 'Phòng học của chúng tôi vừa yên tĩnh vừa sạch.' },
    { parts: ['他', '会', '一点儿', '汉语'], pinyin: 'Tā huì yìdiǎnr Hànyǔ.', vi: 'Anh ấy biết một chút tiếng Hán.' },
  ],
  writeChars: ['又', '可', '以', '试', '羽', '然', '适', '短', '种', '贵', '宜', '深', '浅', '肥'],
  drills: [
    {
      title: 'Phân biệt âm và thanh điệu', hint: 'Đọc từng cặp, chú ý thanh điệu và âm đầu.',
      items: [
        { h: '当然', p: 'dāngrán' }, { h: '坦然', p: 'tǎnrán' }, { h: '适时', p: 'shìshí' }, { h: '实时', p: 'shíshí' },
        { h: '合适', p: 'héshì' }, { h: '何时', p: 'héshí' }, { h: '便宜', p: 'piányi' }, { h: '方便', p: 'fāngbiàn' },
      ],
    },
    {
      title: 'Đọc liền nhiều âm tiết (多音节连读): 太…了', hint: 'Câu cảm thán: xuống giọng ở 了.',
      items: [
        { h: '太贵了', p: 'tài guì le' }, { h: '太对了', p: 'tài duì le' }, { h: '太好了', p: 'tài hǎo le' }, { h: '太美了', p: 'tài měi le' },
        { h: '太瘦了', p: 'tài shòu le' }, { h: '太肥了', p: 'tài féi le' }, { h: '太远了', p: 'tài yuǎn le' }, { h: '太大了', p: 'tài dà le' },
      ],
    },
    {
      title: 'Đọc to các cụm từ (朗读): động từ lặp và 又…又…', hint: 'Động từ lặp đọc nhẹ âm sau; 不 A 不 B.',
      items: [
        { h: '试试', p: 'shìshi' }, { h: '看看', p: 'kànkan' }, { h: '听听', p: 'tīngting' }, { h: '读读', p: 'dúdu' },
        { h: '试一试', p: 'shì yi shì' }, { h: '看一看', p: 'kàn yi kàn' }, { h: '听一听', p: 'tīng yi tīng' }, { h: '读一读', p: 'dú yi dú' },
        { h: '又饿又渴', p: 'yòu è yòu kě' }, { h: '又冷又累', p: 'yòu lěng yòu lèi' }, { h: '又好又便宜', p: 'yòu hǎo yòu piányi' }, { h: '又贵又不好', p: 'yòu guì yòu bù hǎo' },
        { h: '不大不小', p: 'bú dà bù xiǎo' }, { h: '不肥不瘦', p: 'bù féi bú shòu' }, { h: '不深不浅', p: 'bù shēn bù qiǎn' }, { h: '不长不短', p: 'bù cháng bù duǎn' },
      ],
    },
    {
      title: 'Từ bổ sung (补充生词)', hint: 'Dùng để thay thế trong các mẫu câu bên dưới.',
      items: [
        { h: '面包', p: 'miànbāo', m: 'bánh mì' }, { h: '鞋', p: 'xié', m: 'giày' }, { h: '双', p: 'shuāng', m: 'đôi (lượng từ)' }, { h: '毛衣', p: 'máoyī', m: 'áo len' },
      ],
    },
    {
      title: 'Thay thế: 我试试可以吗? 可以', hint: 'Thay động từ lặp.',
      items: [
        { h: '我看看可以吗？', p: 'Wǒ kànkan kěyǐ ma?' }, { h: '我听听可以吗？', p: 'Wǒ tīngting kěyǐ ma?' }, { h: '我用用可以吗？', p: 'Wǒ yòngyong kěyǐ ma?' }, { h: '我换换可以吗？', p: 'Wǒ huànhuan kěyǐ ma?' },
      ],
    },
    {
      title: 'Thay thế: 这种羽绒服怎么卖? 一件三百二十块', hint: 'Thay đồ vật, lượng từ và giá (giá bên dưới theo sách).',
      items: [
        { h: '毛衣一件一百二十块。', p: 'Máoyī yí jiàn yìbǎi èrshí kuài.' }, { h: '苹果一斤三块五。', p: 'Píngguǒ yì jīn sān kuài wǔ.' }, { h: '面包一个一块八。', p: 'Miànbāo yí ge yí kuài bā.' },
        { h: '咖啡一杯二十八块。', p: 'Kāfēi yì bēi èrshíbā kuài.' }, { h: '鞋一双二百三十五块。', p: 'Xié yì shuāng èrbǎi sānshíwǔ kuài.' }, { h: '自行车一辆九百五十块。', p: 'Zìxíngchē yí liàng jiǔbǎi wǔshí kuài.' },
      ],
    },
    {
      title: 'Thay thế: 这件有(一)点儿长，有没有短一点儿的?', hint: 'Thay cặp tính từ đối nghĩa.',
      items: [
        { h: '这件有点儿贵，有没有便宜一点儿的？', p: 'Zhè jiàn yǒudiǎnr guì, yǒu méiyǒu piányi yìdiǎnr de?' }, { h: '这件有点儿肥，有没有瘦一点儿的？', p: 'Zhè jiàn yǒudiǎnr féi, yǒu méiyǒu shòu yìdiǎnr de?' },
        { h: '这件有点儿大，有没有小一点儿的？', p: 'Zhè jiàn yǒudiǎnr dà, yǒu méiyǒu xiǎo yìdiǎnr de?' }, { h: '这件有点儿深，有没有浅一点儿的？', p: 'Zhè jiàn yǒudiǎnr shēn, yǒu méiyǒu qiǎn yìdiǎnr de?' },
      ],
    },
    {
      title: 'Thay thế: 你要白的还是要红的? 我要白的', hint: 'Thay hai màu.',
      items: [
        { h: '你要便宜的还是要贵的？', p: 'Nǐ yào piányi de háishi yào guì de?' }, { h: '你要大的还是要小的？', p: 'Nǐ yào dà de háishi yào xiǎo de?' },
        { h: '你要深的还是要浅的？', p: 'Nǐ yào shēn de háishi yào qiǎn de?' }, { h: '你要长的还是要短的？', p: 'Nǐ yào cháng de háishi yào duǎn de?' },
        { h: '你要肥的还是要瘦的？', p: 'Nǐ yào féi de háishi yào shòu de?' },
      ],
    },
    {
      title: 'Đọc số tiền (读下列钱数)', hint: '元 = 块. Bài tập của sách chỉ in số; cách đọc dưới đây do app thêm để bạn đối chiếu.',
      items: [
        { h: '五分', p: '0,05元 · wǔ fēn' }, { h: '两毛六', p: '0,26元 · liǎng máo liù' }, { h: '九毛八', p: '0,98元 · jiǔ máo bā' },
        { h: '三块零八分', p: '3,08元 · sān kuài líng bā fēn' }, { h: '八块八毛八', p: '8,88元 · bā kuài bā máo bā' }, { h: '十块零五分', p: '10,05元 · shí kuài líng wǔ fēn' },
        { h: '三十五块', p: '35,00元 · sānshíwǔ kuài' }, { h: '四十六块零五分', p: '46,05元 · sìshíliù kuài líng wǔ fēn' }, { h: '五十六块九毛', p: '56,90元 · wǔshíliù kuài jiǔ máo' },
        { h: '七十七块五毛五', p: '77,55元 · qīshíqī kuài wǔ máo wǔ' }, { h: '八十九块五毛', p: '89,50元 · bāshíjiǔ kuài wǔ máo' }, { h: '一百零五块九毛', p: '105,90元 · yì bǎi líng wǔ kuài jiǔ máo' },
        { h: '一百一十七块八毛', p: '117,80元 · yì bǎi yīshíqī kuài bā máo' }, { h: '二百零六块零二分', p: '206,02元 · èr bǎi líng liù kuài líng èr fēn' }, { h: '五百五十八块四毛', p: '558,40元 · wǔ bǎi wǔshíbā kuài sì máo' },
        { h: '八百八十块', p: '880,00元 · bā bǎi bāshí kuài' }, { h: '九百九十七块四毛四', p: '997,44元 · jiǔ bǎi jiǔshíqī kuài sì máo sì' }, { h: '一千零三十八块九毛五', p: '1038,95元 · yì qiān líng sānshíbā kuài jiǔ máo wǔ' },
      ],
    },
    {
      title: 'Thực hành nói (成段表达): 去商店买衣服', hint: 'Từ bổ sung: 听说 tīngshuō, 冬天 dōngtiān, 冷 lěng, 机场 jīchǎng, 接 jiē, 能 néng, 展览 zhǎnlǎn. Đọc to cả đoạn.',
      items: [
        { h: '听说这里的冬天很冷，我还没有羽绒服呢，想去买一件。麦克说，有一家商店，那里的衣服又好又便宜。我说，明天我们一起去吧。麦克说：“对不起，明天我一个朋友来中国旅行，我要去机场接他，不能跟你一起去。”我说：“没关系。我可以一个人去。”', p: 'Tīngshuō zhèlǐ de dōngtiān hěn lěng, wǒ hái méiyǒu yǔróngfú ne, xiǎng qù mǎi yí jiàn. Màikè shuō, yǒu yì jiā shāngdiàn, nàlǐ de yīfu yòu hǎo yòu piányi. Wǒ shuō, míngtiān wǒmen yìqǐ qù ba. Màikè shuō: “Duìbuqǐ, míngtiān wǒ yí ge péngyou lái Zhōngguó lǚxíng, wǒ yào qù jīchǎng jiē tā, bù néng gēn nǐ yìqǐ qù.” Wǒ shuō: “Méi guānxi. Wǒ kěyǐ yí ge rén qù.”' },
        { h: '玛丽听说我要去买衣服，说：“我也想买羽绒服。我跟你一起去，好吗？”我说：“当然好啊！我正想找人跟我一起去呢。”', p: 'Mǎlì tīngshuō wǒ yào qù mǎi yīfu, shuō: “Wǒ yě xiǎng mǎi yǔróngfú. Wǒ gēn nǐ yìqǐ qù, hǎo ma?” Wǒ shuō: “Dāngrán hǎo a! Wǒ zhèng xiǎng zhǎo rén gēn wǒ yìqǐ qù ne.”' },
        { h: '我问玛丽：“明天我们几点出发？”玛丽说：“明天是星期天，坐车的人一定很多，我们早点儿去吧。八点走怎么样？”我说：“好吧。那个商店离学校不太远，我们不用坐车去，可以骑车去。”', p: 'Wǒ wèn Mǎlì: “Míngtiān wǒmen jǐ diǎn chūfā?” Mǎlì shuō: “Míngtiān shì xīngqītiān, zuò chē de rén yídìng hěn duō, wǒmen zǎo diǎnr qù ba. Bā diǎn zǒu zěnmeyàng?” Wǒ shuō: “Hǎo ba. Nà ge shāngdiàn lí xuéxiào bú tài yuǎn, wǒmen búyòng zuò chē qù, kěyǐ qí chē qù.”' },
      ],
    },
  ],
  qa: [
    {
      title: 'Chọn từ điền vào chỗ trống (选词填空)',
      items: [
        { q: 'A. Từ cho sẵn: 当然 件 种 胖 深 又…又… 便宜', hint: 'Mỗi từ dùng một lần.' },
        { q: '(1) A: 我试试这 ______ 羽绒服可以吗?  B: ______ 可以。', hint: '件 / 当然' },
        { q: '(2) 这 ______ 羽绒服多少钱一件?', hint: '种' },
        { q: '(3) 我太 ______ 了，这件衣服有点儿瘦，不太合适。', hint: '胖' },
        { q: '(4) 有没有颜色浅一点儿的? 这件颜色有点儿 ______ 。', hint: '深' },
        { q: '(5) ______ 一点儿怎么样?', hint: '便宜' },
        { q: '(6) 这件毛衣 ______ 便宜 ______ 好。', hint: '又 / 又' },
        { q: 'B. 有点儿 / 一点儿', hint: 'Đứng trước tính từ là 有点儿, đứng sau là 一点儿.' },
        { q: '(1) 这件衣服 ______ 肥，有没有瘦 ______ 的?', hint: '有点儿 / 一点儿' },
        { q: '(2) 这本书 ______ 难，那本容易 ______ 。', hint: '有点儿 / 一点儿' },
        { q: '(3) 这课的生词 ______ 多。', hint: '有点儿' },
        { q: '(4) 这个房间 ______ 小。', hint: '有点儿' },
        { q: '(5) 这件 ______ 贵，那件便宜 ______ 。', hint: '有点儿 / 一点儿' },
        { q: '(6) 这双鞋 ______ 大，我想看小 ______ 的。', hint: '有点儿 / 一点儿' },
        { q: 'C. 怎么 / 怎么样', hint: '怎么 + động từ (cách làm); 怎么样 hỏi tình trạng.' },
        { q: '(1) 我们明天 ______ 去?', hint: '怎么' },
        { q: '(2) 这本词典 ______ ?', hint: '怎么样' },
        { q: '(3) 老师，这个词 ______ 读?', hint: '怎么' },
        { q: '(4) 你试试这件 ______ ?', hint: '怎么样' },
        { q: '(5) 她的学习 ______ ?', hint: '怎么样' },
        { q: '(6) 这个字 ______ 写?', hint: '怎么' },
        { q: '(7) 我们骑车去，______ ?', hint: '怎么样' },
        { q: '(8) 苹果 ______ 卖?', hint: '怎么' },
      ],
    },
    {
      title: 'Nhờ người khác đồng ý, nên nói thế nào (你是A，请求B同意自己的要求，应该怎么说?)',
      items: [
        { q: '(1) A: ______ ? (看看)   B: 你看吧。', hint: '我看看可以吗?' },
        { q: '(2) A: ______ ? (用用)   B: 你用吧。', hint: '我用用可以吗?' },
        { q: '(3) A: ______ ? (试试)   B: 当然可以。', hint: '我试试可以吗?' },
        { q: '(4) A: ______ ? (听听)   B: 好吧。', hint: '我听听可以吗?' },
        { q: '(5) A: ______ ? (骑骑)   B: 可以。', hint: '我骑骑可以吗?' },
      ],
    },
    {
      title: 'Sửa câu sai (改错句)',
      items: [
        { q: '(1) 你试试的这件衣服怎么样?', hint: '你试试这件衣服怎么样?' },
        { q: '(2) 我觉得写写汉字很难。', hint: '我觉得写汉字很难。(không lặp động từ khi là chủ đề chung)' },
        { q: '(3) 这课课文一点儿难。', hint: '这课课文有点儿难。' },
        { q: '(4) 我去商店买买一件衣服。', hint: '我去商店买一件衣服。 / 我去商店买买衣服。' },
        { q: '(5) 这件衣服一点儿深颜色，我不喜欢。', hint: '这件衣服颜色有点儿深，我不喜欢。' },
        { q: '(6) 你应该写信你妈妈。', hint: '你应该给你妈妈写信。' },
      ],
    },
  ],
}
