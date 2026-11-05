import type { Lesson } from './types'

const M = '麦克 Màikè'
const L = '玛丽 Mǎlì'
const W = '王老师 Wáng lǎoshī'
const G = '关经理 Guān jīnglǐ'

export const lesson15: Lesson = {
  id: 15,
  title: 'Công ty các bạn có bao nhiêu nhân viên',
  hanzi: '你们公司有多少职员',
  pinyin: 'Nǐmen gōngsī yǒu duōshao zhíyuán',
  vi: 'Công ty các bạn có bao nhiêu nhân viên',
  intro: 'Hỏi và nói về gia đình, công việc; câu có 有 (sở hữu và tồn tại); cách đếm số; hỏi số lượng bằng 几 và 多少; cụm số + lượng từ + danh từ; 二 và 两; 不都 và 都不.',
  dialogue: [
    { who: 'A', name: M, scene: '(一) 你家有几口人 – Nhà bạn có mấy người (Mike và Mary xem ảnh)', hanzi: '你家有几口人？', pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', vi: 'Nhà bạn có mấy người?' },
    { who: 'B', name: L, hanzi: '我家有五口人，爸爸、妈妈、哥哥、姐姐和我。', pinyin: 'Wǒ jiā yǒu wǔ kǒu rén, bàba, māma, gēge, jiějie hé wǒ.', vi: 'Nhà tôi có năm người: bố, mẹ, anh trai, chị gái và tôi.' },
    { who: 'A', name: M, hanzi: '你有没有全家的照片？', pinyin: 'Nǐ yǒu méiyǒu quán jiā de zhàopiàn?', vi: 'Bạn có ảnh cả nhà không?' },
    { who: 'B', name: L, hanzi: '有一张。你看，这是我们全家的照片。你有哥哥姐姐吗？', pinyin: 'Yǒu yì zhāng. Nǐ kàn, zhè shì wǒmen quán jiā de zhàopiàn. Nǐ yǒu gēge jiějie ma?', vi: 'Có một tấm. Bạn xem, đây là ảnh cả nhà tôi. Bạn có anh chị không?' },
    { who: 'A', name: M, hanzi: '我没有哥哥，也没有姐姐，只有两个弟弟。', pinyin: 'Wǒ méiyǒu gēge, yě méiyǒu jiějie, zhǐ yǒu liǎng ge dìdi.', vi: 'Tôi không có anh, cũng không có chị, chỉ có hai em trai.' },
    { who: 'B', name: L, hanzi: '你爸爸、妈妈做什么工作？', pinyin: 'Nǐ bàba, māma zuò shénme gōngzuò?', vi: 'Bố mẹ bạn làm công việc gì?' },
    { who: 'A', name: M, hanzi: '我妈妈是大夫，在医院工作，爸爸是一家公司的经理。', pinyin: 'Wǒ māma shì dàifu, zài yīyuàn gōngzuò, bàba shì yì jiā gōngsī de jīnglǐ.', vi: 'Mẹ tôi là bác sĩ, làm việc ở bệnh viện, bố tôi là giám đốc một công ty.' },
    { who: 'B', name: L, hanzi: '我妈妈在商店工作，爸爸是律师。', pinyin: 'Wǒ māma zài shāngdiàn gōngzuò, bàba shì lǜshī.', vi: 'Mẹ tôi làm việc ở cửa hàng, bố tôi là luật sư.' },
    { who: 'A', name: W, scene: '(二) 你们公司有多少职员 – Công ty các bạn có bao nhiêu nhân viên (thầy Vương nói chuyện với giám đốc Quan)', hanzi: '你们是一家什么公司？', pinyin: 'Nǐmen shì yì jiā shénme gōngsī?', vi: 'Công ty các ông là loại công ty gì?' },
    { who: 'B', name: G, hanzi: '是一家外贸公司。', pinyin: 'Shì yì jiā wàimào gōngsī.', vi: 'Là một công ty ngoại thương.' },
    { who: 'A', name: W, hanzi: '是一家大公司吗？', pinyin: 'Shì yì jiā dà gōngsī ma?', vi: 'Là một công ty lớn à?' },
    { who: 'B', name: G, hanzi: '不大，是一家比较小的公司。', pinyin: 'Bú dà, shì yì jiā bǐjiào xiǎo de gōngsī.', vi: 'Không lớn, là một công ty khá nhỏ.' },
    { who: 'A', name: W, hanzi: '有多少职员？', pinyin: 'Yǒu duōshao zhíyuán?', vi: 'Có bao nhiêu nhân viên?' },
    { who: 'B', name: G, hanzi: '大概有一百多个职员。', pinyin: 'Dàgài yǒu yì bǎi duō ge zhíyuán.', vi: 'Khoảng hơn một trăm nhân viên.' },
    { who: 'A', name: W, hanzi: '都是中国职员吗？', pinyin: 'Dōu shì Zhōngguó zhíyuán ma?', vi: 'Tất cả đều là nhân viên người Trung Quốc à?' },
    { who: 'B', name: G, hanzi: '不都是中国职员，也有外国职员。', pinyin: 'Bù dōu shì Zhōngguó zhíyuán, yě yǒu wàiguó zhíyuán.', vi: 'Không phải tất cả đều là người Trung Quốc, cũng có nhân viên nước ngoài.' },
  ],
  dialogueTip: '<b>有</b> nói về sở hữu (我有词典) và tồn tại (我家有五口人). Phủ định là <b>没有</b>, hỏi là <b>有没有</b>. Hỏi số lượng nhỏ (1–10) dùng <b>几</b> (几口人), số lớn hoặc chưa đoán được dùng <b>多少</b> (多少职员). <b>一百多个</b> = hơn một trăm.',
  slowSay: '你家有几口人',
  vocab: [
    { hanzi: '全', pinyin: 'quán', pos: 'tính/phó từ', meaning: 'toàn bộ, cả, hoàn toàn', han_viet: 'toàn' },
    { hanzi: '照片', pinyin: 'zhàopiàn', pos: 'danh từ', meaning: 'ảnh, tấm hình', han_viet: 'chiếu phiến' },
    { hanzi: '看', pinyin: 'kàn', pos: 'động từ', meaning: 'nhìn, xem, đọc', han_viet: 'khán' },
    { hanzi: '姐姐', pinyin: 'jiějie', pos: 'danh từ', meaning: 'chị gái', han_viet: 'tỉ tỉ' },
    { hanzi: '只', pinyin: 'zhǐ', pos: 'phó từ', meaning: 'chỉ, mới chỉ', han_viet: 'chỉ' },
    { hanzi: '做', pinyin: 'zuò', pos: 'động từ', meaning: 'làm', han_viet: 'tố' },
    { hanzi: '大夫', pinyin: 'dàifu', pos: 'danh từ', meaning: 'bác sĩ', han_viet: 'đại phu' },
    { hanzi: '医院', pinyin: 'yīyuàn', pos: 'danh từ', meaning: 'bệnh viện', han_viet: 'y viện' },
    { hanzi: '公司', pinyin: 'gōngsī', pos: 'danh từ', meaning: 'công ty', han_viet: 'công ti' },
    { hanzi: '商店', pinyin: 'shāngdiàn', pos: 'danh từ', meaning: 'cửa hàng', han_viet: 'thương điếm' },
    { hanzi: '律师', pinyin: 'lǜshī', pos: 'danh từ', meaning: 'luật sư', han_viet: 'luật sư' },
    { hanzi: '外贸', pinyin: 'wàimào', pos: 'danh từ', meaning: 'ngoại thương', han_viet: 'ngoại mậu' },
    { hanzi: '小', pinyin: 'xiǎo', pos: 'tính từ', meaning: 'nhỏ', han_viet: 'tiểu' },
    { hanzi: '大概', pinyin: 'dàgài', pos: 'phó từ', meaning: 'khoảng, đại khái', han_viet: 'đại khái' },
    { hanzi: '多', pinyin: 'duō', pos: 'số từ', meaning: 'hơn, có lẻ (đứng sau số từ)', han_viet: 'đa' },
    { hanzi: '外国', pinyin: 'wàiguó', pos: 'danh từ', meaning: 'nước ngoài', han_viet: 'ngoại quốc' },
  ],
  sections: [
    {
      kind: 'examples', label: 'Đếm số', title: 'Cách đọc số (称数法)',
      intro: 'Từ 21 đến 99: số chục + 十 + số lẻ (二十一, 三十, 九十九). Trăm: 一百, 二百… Một nghìn 一千, một vạn 一万. Số có số 0 ở giữa phải đọc 零: 108 = 一百零八; 110 đọc 一百一(十); 1018 = 一千零一十八; 1005 = 一千零五; 10890 = 一万零八百九十.',
      groups: [
        { label: 'Trăm, nghìn, vạn', items: [['一百', 'yì bǎi', '100'], ['一千', 'yì qiān', '1.000'], ['一万', 'yí wàn', '10.000']] },
        { label: 'Số có 零', items: [['一百零八', 'yì bǎi líng bā', '108'], ['一百一', 'yì bǎi yī', '110 (cũng nói 一百一十)'], ['一千零一十八', 'yì qiān líng yīshíbā', '1018'], ['一千零五', 'yì qiān líng wǔ', '1005'], ['一万零八百九十', 'yí wàn líng bābǎi jiǔshí', '10890']] },
      ],
    },
    {
      kind: 'examples', label: 'Trọng âm: đại từ, số + lượng', title: 'Trọng âm của câu (句重音 3)',
      intro: 'Đại từ nhân xưng làm định ngữ thường không nhấn, danh từ trung tâm được nhấn: 这是我’爸爸。Khi số từ + lượng từ làm định ngữ thì số từ (trừ 一) được nhấn và lượng từ đọc nhẹ: 我有’两个妹妹。"一" và lượng từ đi với nhau làm định ngữ thì không nhấn: 他有一个姐姐。',
      groups: [
        { label: 'Đại từ làm định ngữ không nhấn, trung tâm ngữ nhấn', items: [['这是我’爸爸。', 'zhè shì wǒ ’bàba', 'nhấn: bàba'], ['那是她’弟弟。', 'nà shì tā ’dìdi', 'nhấn: dìdi']] },
        { label: 'Số từ nhấn, lượng từ nhẹ', items: [['我有’两个妹妹。', 'wǒ yǒu ’liǎng ge mèimei', 'nhấn: liǎng'], ['我有’三个本子。', 'wǒ yǒu ’sān ge běnzi', 'nhấn: sān']] },
        { label: '"一" + lượng từ: không nhấn', items: [['他有一个姐姐。', 'tā yǒu yí ge jiějie', 'không nhấn yí ge']] },
      ],
    },
  ],
  notes: [
    {
      title: '二 và 两: hai cách nói "2"',
      body: '二 và 两 đều là "2" nhưng khác cách dùng. 两 (liǎng): đứng trước lượng từ (两个, 两本, 两件, 两家) và đứng trước 千, 万 (两千, 两万). 二 (èr): khi đếm số 1, 2, 3; số thứ tự (第二), tháng 2 (二月), tầng 2 (二楼); và trước 十, 百 (二十, 二百). Ví dụ đúng: 两个馒头, 两个人, 两国. Sai: *二个馒头, *二个人, *二国.',
      say: '两个馒头',
    },
    {
      title: 'Hơn một trăm: 一百多个',
      body: 'Thêm 多 vào sau số từ để chỉ "hơn", tức nhiều hơn con số được nêu. 一百多个职员 (hơn một trăm nhân viên), 二十多个人 (hơn hai chục người). 多 đứng sau số tròn chục, trăm, nghìn.',
      say: '一百多个职员',
    },
    {
      title: 'Không phải tất cả: 不都是 và 都不是',
      body: '不都是 là phủ định một phần, 都不是 là phủ định toàn bộ. Ví dụ (3 người Nhật + 4 người Mỹ): 他们不都是美国人 (không phải tất cả đều là người Mỹ). Còn (3 người Nhật + 4 người Trung Quốc): 他们都不是美国人 (tất cả đều không phải người Mỹ).',
      say: '他们不都是美国人',
    },
    {
      title: 'Câu có 有 (1): chỉ sở hữu',
      body: 'Khẳng định: A + 有 + B. Phủ định: A + 没有 + B. Hỏi chính phản: A + 有没有 + B? Ví dụ: 你有自行车吗? – 有。你有没有姐姐? – 没有。(我没有姐姐。) 有 KHÔNG dùng với 不, phải là 没有.',
      say: '你有没有姐姐',
    },
    {
      title: 'Câu có 有 (2): chỉ sự tồn tại',
      body: '有 còn diễn tả một nơi hoặc một tập hợp "có" bao nhiêu người, vật: 你家有几口人? – 我家有五口人。你们公司有多少职员? – 大概有一百多职员。Chủ ngữ ở đây thường là nơi chốn, tổ chức.',
      say: '我家有五口人',
    },
    {
      title: 'Hỏi số lượng: 几 và 多少',
      body: 'Khi ước tính số lượng trong khoảng 1–10 thì dùng 几: 你吃几个? – 我吃一个。Khi số lượng trên 10 hoặc không ước tính được thì dùng 多少: 你换多少? – 我换五百美元。Sau 几 luôn có lượng từ (几口人, 几本书); sau 多少 có thể bỏ lượng từ (多少人, 多少钱).',
      say: '你换多少',
    },
    {
      title: 'Số từ + lượng từ + danh từ',
      body: 'Trong tiếng Hán, cụm số từ + lượng từ làm định ngữ cho danh từ để chỉ số lượng; mỗi loại vật có lượng từ riêng: 一位老师, 两本书, 三辆自行车, 四件毛衣, 五口人, 六张照片, 七支笔, 八把椅子, 九个数码相机, 十斤苹果. 口 là lượng từ cho thành viên gia đình (五口人).',
      say: '两本书',
    },
    {
      title: 'Trọng âm của câu (3)',
      body: 'Đại từ nhân xưng làm định ngữ không nhấn, danh từ trung tâm được nhấn: 这是我’爸爸. Cụm số + lượng từ làm định ngữ thì số từ (trừ 一) nhấn, lượng từ nhẹ: 我有’两个妹妹. 一 + lượng từ không nhấn: 他有一个姐姐.',
      say: '我有两个妹妹',
    },
    {
      title: 'Hỏi nghề nghiệp và nơi làm việc',
      body: 'Hỏi nghề: 你爸爸做什么工作? (hoặc 你妈妈做什么工作?) Đáp: 我妈妈是大夫 / 爸爸是律师. Hỏi nơi làm việc: 你爸爸在哪儿工作? Đáp: 在医院工作, 在商店工作. Cấu trúc: 在 + nơi chốn + 工作 (Bài 12).',
      say: '你爸爸做什么工作',
    },
  ],
  sentences: [
    { parts: ['你', '家', '有', '几', '口', '人'], pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', vi: 'Nhà bạn có mấy người?' },
    { parts: ['我', '家', '有', '五', '口', '人'], pinyin: 'Wǒ jiā yǒu wǔ kǒu rén.', vi: 'Nhà tôi có năm người.' },
    { parts: ['你', '有', '没有', '全', '家', '的', '照片'], pinyin: 'Nǐ yǒu méiyǒu quán jiā de zhàopiàn?', vi: 'Bạn có ảnh cả nhà không?' },
    { parts: ['这', '是', '我们', '全', '家', '的', '照片'], pinyin: 'Zhè shì wǒmen quán jiā de zhàopiàn.', vi: 'Đây là ảnh cả nhà chúng tôi.' },
    { parts: ['我', '没有', '哥哥', '也', '没有', '姐姐'], pinyin: 'Wǒ méiyǒu gēge, yě méiyǒu jiějie.', vi: 'Tôi không có anh, cũng không có chị.' },
    { parts: ['我', '只', '有', '两', '个', '弟弟'], pinyin: 'Wǒ zhǐ yǒu liǎng ge dìdi.', vi: 'Tôi chỉ có hai em trai.' },
    { parts: ['你', '爸爸', '做', '什么', '工作'], pinyin: 'Nǐ bàba zuò shénme gōngzuò?', vi: 'Bố bạn làm công việc gì?' },
    { parts: ['我', '妈妈', '在', '医院', '工作'], pinyin: 'Wǒ māma zài yīyuàn gōngzuò.', vi: 'Mẹ tôi làm việc ở bệnh viện.' },
    { parts: ['我', '爸爸', '是', '律师'], pinyin: 'Wǒ bàba shì lǜshī.', vi: 'Bố tôi là luật sư.' },
    { parts: ['你们', '是', '一', '家', '什么', '公司'], pinyin: 'Nǐmen shì yì jiā shénme gōngsī?', vi: 'Công ty các ông là loại công ty gì?' },
    { parts: ['是', '一', '家', '外贸', '公司'], pinyin: 'Shì yì jiā wàimào gōngsī.', vi: 'Là một công ty ngoại thương.' },
    { parts: ['你们', '公司', '有', '多少', '职员'], pinyin: 'Nǐmen gōngsī yǒu duōshao zhíyuán?', vi: 'Công ty các bạn có bao nhiêu nhân viên?' },
    { parts: ['大概', '有', '一', '百', '多', '个', '职员'], pinyin: 'Dàgài yǒu yì bǎi duō ge zhíyuán.', vi: 'Khoảng hơn một trăm nhân viên.' },
    { parts: ['不', '都', '是', '中国', '职员'], pinyin: 'Bù dōu shì Zhōngguó zhíyuán.', vi: 'Không phải tất cả đều là nhân viên Trung Quốc.' },
    { parts: ['也', '有', '外国', '职员'], pinyin: 'Yě yǒu wàiguó zhíyuán.', vi: 'Cũng có nhân viên nước ngoài.' },
    { parts: ['你', '有', '自行车', '吗'], pinyin: 'Nǐ yǒu zìxíngchē ma?', vi: 'Bạn có xe đạp không?' },
    { parts: ['你', '吃', '几', '个'], pinyin: 'Nǐ chī jǐ ge?', vi: 'Bạn ăn mấy cái?' },
    { parts: ['你', '换', '多少'], pinyin: 'Nǐ huàn duōshao?', vi: 'Bạn đổi bao nhiêu?' },
  ],
  writeChars: ['只', '夫', '片', '外', '司', '全', '医', '院', '姐', '哥', '弟', '都', '理'],
  drills: [
    {
      title: 'Phân biệt âm và thanh điệu', hint: 'Đọc từng cặp, chú ý thanh điệu và âm đầu.',
      items: [
        { h: '医院', p: 'yīyuàn' }, { h: '意愿', p: 'yìyuàn' }, { h: '经理', p: 'jīnglǐ' }, { h: '精力', p: 'jīnglì' },
        { h: '律师', p: 'lǜshī' }, { h: '历史', p: 'lìshǐ' }, { h: '公司', p: 'gōngsī' }, { h: '公式', p: 'gōngshì' },
      ],
    },
    {
      title: 'Đọc liền nhiều âm tiết (多音节连读)', hint: 'Từ có đuôi 机 (máy): nhấn âm cuối.',
      items: [
        { h: '照相机', p: 'zhàoxiàngjī' }, { h: '计算机', p: 'jìsuànjī' }, { h: '摄像机', p: 'shèxiàngjī' }, { h: '录像机', p: 'lùxiàngjī' },
        { h: '收音机', p: 'shōuyīnjī' }, { h: '电视机', p: 'diànshìjī' }, { h: '电冰箱', p: 'diànbīngxiāng' }, { h: '洗衣机', p: 'xǐyījī' },
      ],
    },
    {
      title: 'Đọc to các cụm từ (朗读): 有 và 没有', hint: 'Chú ý 有 / 没有 / 有没有.',
      items: [
        { h: '有没有词典', p: 'yǒu méiyǒu cídiǎn' }, { h: '有没有车', p: 'yǒu méiyǒu chē' }, { h: '有没有哥哥', p: 'yǒu méiyǒu gēge' }, { h: '有没有朋友', p: 'yǒu méiyǒu péngyou' },
        { h: '有汉语词典', p: 'yǒu Hànyǔ cídiǎn' }, { h: '有车', p: 'yǒu chē' }, { h: '有哥哥', p: 'yǒu gēge' }, { h: '有朋友', p: 'yǒu péngyou' },
        { h: '没有词典', p: 'méiyǒu cídiǎn' }, { h: '没有车', p: 'méiyǒu chē' }, { h: '没有哥哥', p: 'méiyǒu gēge' }, { h: '没有朋友', p: 'méiyǒu péngyou' },
        { h: '在医院工作', p: 'zài yīyuàn gōngzuò' }, { h: '在大学学习', p: 'zài dàxué xuéxí' }, { h: '在银行换钱', p: 'zài yínháng huàn qián' }, { h: '在食堂吃饭', p: 'zài shítáng chī fàn' },
      ],
    },
    {
      title: 'Đọc to các cụm từ (朗读): hỏi số lượng', hint: 'Bài này có nhiều cụm số + lượng từ.',
      items: [
        { h: '几口人', p: 'jǐ kǒu rén' }, { h: '几个哥哥', p: 'jǐ ge gēge' }, { h: '几本词典', p: 'jǐ běn cídiǎn' }, { h: '几张地图', p: 'jǐ zhāng dìtú' },
        { h: '多少个人', p: 'duōshao ge rén' }, { h: '多少张地图', p: 'duōshao zhāng dìtú' }, { h: '多少辆车', p: 'duōshao liàng chē' }, { h: '多少本书', p: 'duōshao běn shū' },
        { h: '两本书', p: 'liǎng běn shū' }, { h: '三辆车', p: 'sān liàng chē' }, { h: '四把椅子', p: 'sì bǎ yǐzi' }, { h: '五张照片', p: 'wǔ zhāng zhàopiàn' },
        { h: '二十本书', p: 'èrshí běn shū' }, { h: '三十多辆车', p: 'sānshí duō liàng chē' }, { h: '五十多把椅子', p: 'wǔshí duō bǎ yǐzi' }, { h: '一百多张照片', p: 'yì bǎi duō zhāng zhàopiàn' },
      ],
    },
    {
      title: 'Từ bổ sung (补充生词)', hint: 'Dùng để thay thế trong các mẫu câu.',
      items: [
        { h: '画报', p: 'huàbào', m: 'báo ảnh' }, { h: '世界', p: 'shìjiè', m: 'thế giới' }, { h: '数码相机', p: 'shùmǎ xiàngjī', m: 'máy ảnh kỹ thuật số' },
        { h: '家务', p: 'jiāwù', m: 'việc nhà' }, { h: '高兴', p: 'gāoxìng', m: 'vui mừng' },
      ],
    },
    {
      title: 'Thay thế: 你有汉语词典吗? 有', hint: 'Thay danh từ.',
      items: [
        { h: '我有汉语书。', p: 'Wǒ yǒu Hànyǔ shū.' }, { h: '我有中国地图。', p: 'Wǒ yǒu Zhōngguó dìtú.' }, { h: '我有中文杂志。', p: 'Wǒ yǒu Zhōngwén zázhì.' },
        { h: '我有女朋友。', p: 'Wǒ yǒu nǚ péngyou.' }, { h: '我有汉英词典。', p: 'Wǒ yǒu Hàn-Yīng cídiǎn.' }, { h: '我有中文画报。', p: 'Wǒ yǒu Zhōngwén huàbào.' },
      ],
    },
    {
      title: 'Thay thế: 你有几本词典? 我有两本', hint: 'Thay lượng từ và danh từ.',
      items: [
        { h: '我有两个数码相机。', p: 'Wǒ yǒu liǎng ge shùmǎ xiàngjī.' }, { h: '我有两件毛衣。', p: 'Wǒ yǒu liǎng jiàn máoyī.' }, { h: '我有两支笔。', p: 'Wǒ yǒu liǎng zhī bǐ.' },
        { h: '我有两张光盘。', p: 'Wǒ yǒu liǎng zhāng guāngpán.' }, { h: '我有两个本子。', p: 'Wǒ yǒu liǎng ge běnzi.' }, { h: '我有两本杂志。', p: 'Wǒ yǒu liǎng běn zázhì.' },
      ],
    },
    {
      title: 'Thay thế: 你们班有多少学生? 我们班有十八个学生', hint: 'Thay số và danh từ.',
      items: [
        { h: '我们班有十个女同学。', p: 'Wǒmen bān yǒu shí ge nǚ tóngxué.' }, { h: '我们班有八个男同学。', p: 'Wǒmen bān yǒu bā ge nán tóngxué.' },
        { h: '我们班有二十张桌子。', p: 'Wǒmen bān yǒu èrshí zhāng zhuōzi.' }, { h: '我们班有十九把椅子。', p: 'Wǒmen bān yǒu shíjiǔ bǎ yǐzi.' },
        { h: '我们班有十八本词典。', p: 'Wǒmen bān yǒu shíbā běn cídiǎn.' }, { h: '我们班有五十四本汉语书。', p: 'Wǒmen bān yǒu wǔshísì běn Hànyǔ shū.' },
      ],
    },
    {
      title: 'Thay thế: 你爸爸在哪儿工作? 在公司工作', hint: 'Thay nơi làm việc.',
      items: [
        { h: '在医院工作', p: 'zài yīyuàn gōngzuò' }, { h: '在大学工作', p: 'zài dàxué gōngzuò' }, { h: '在银行工作', p: 'zài yínháng gōngzuò' },
        { h: '在邮局工作', p: 'zài yóujú gōngzuò' }, { h: '在书店工作', p: 'zài shūdiàn gōngzuò' }, { h: '在商店工作', p: 'zài shāngdiàn gōngzuò' },
      ],
    },
    {
      title: 'Thay thế: 你妈妈做什么工作? 是大夫', hint: 'Thay nghề nghiệp.',
      items: [
        { h: '是营业员', p: 'shì yíngyèyuán' }, { h: '是老师', p: 'shì lǎoshī' }, { h: '是律师', p: 'shì lǜshī' },
        { h: '是教授', p: 'shì jiàoshòu' }, { h: '是经理', p: 'shì jīnglǐ' }, { h: '是校长', p: 'shì xiàozhǎng' },
      ],
    },
    {
      title: 'Thực hành nói (成段表达): Sơn Bản giới thiệu gia đình', hint: 'Từ bổ sung: 家务 jiāwù, 高兴 gāoxìng. Đọc to cả đoạn.',
      items: [
        { h: '我叫山本。我家有四口人，爸爸、妈妈、姐姐和我。', p: 'Wǒ jiào Shānběn. Wǒ jiā yǒu sì kǒu rén, bàba, māma, jiějie hé wǒ.' },
        { h: '爸爸是一家医院的大夫，他每天工作都很忙。妈妈不工作，在家做家务。姐姐是一家银行的职员，工作也很忙。', p: 'Bàba shì yì jiā yīyuàn de dàifu, tā měitiān gōngzuò dōu hěn máng. Māma bù gōngzuò, zài jiā zuò jiāwù. Jiějie shì yì jiā yínháng de zhíyuán, gōngzuò yě hěn máng.' },
        { h: '我是北京语言大学的留学生，我学习汉语。姐姐有一个男朋友，姐姐说她的男朋友很好，我很高兴。我还没有男朋友，但我有很多朋友，有日本朋友，也有外国朋友。', p: 'Wǒ shì Běijīng Yǔyán Dàxué de liúxuéshēng, wǒ xuéxí Hànyǔ. Jiějie yǒu yí ge nán péngyou, jiějie shuō tā de nán péngyou hěn hǎo, wǒ hěn gāoxìng. Wǒ hái méiyǒu nán péngyou, dàn wǒ yǒu hěn duō péngyou, yǒu Rìběn péngyou, yě yǒu wàiguó péngyou.' },
      ],
    },
  ],
  qa: [
    {
      title: 'Đọc và viết số bằng chữ Hán (读下列数目并用汉字写出来)',
      items: [
        { q: '32', hint: '三十二 (sānshí’èr)' }, { q: '45', hint: '四十五 (sìshíwǔ)' }, { q: '67', hint: '六十七 (liùshíqī)' },
        { q: '99', hint: '九十九 (jiǔshíjiǔ)' }, { q: '100', hint: '一百 (yì bǎi)' }, { q: '166', hint: '一百六十六 (yì bǎi liùshíliù)' },
        { q: '208', hint: '二百零八 (èr bǎi líng bā)' }, { q: '423', hint: '四百二十三 (sì bǎi èrshísān)' }, { q: '911', hint: '九百一十一 (jiǔ bǎi yīshíyī)' },
        { q: '1000', hint: '一千 (yì qiān)' }, { q: '1109', hint: '一千一百零九 (yì qiān yì bǎi líng jiǔ)' }, { q: '6854', hint: '六千八百五十四 (liù qiān bā bǎi wǔshísì)' },
        { q: '7891', hint: '七千八百九十一 (qī qiān bā bǎi jiǔshíyī)' }, { q: '9806', hint: '九千八百零六 (jiǔ qiān bā bǎi líng liù)' }, { q: '10000', hint: '一万 (yí wàn)' },
      ],
    },
    {
      title: 'Điền số và lượng từ (用汉字填写数词和量词)',
      items: [
        { q: 'Ví dụ: 8 ____ 学生 → 八个学生', hint: 'Số + lượng từ + danh từ.' },
        { q: '(1) 2 ____ 箱子', hint: '两个箱子' }, { q: '(2) 7 ____ 书', hint: '七本书' }, { q: '(3) 4 ____ 照片', hint: '四张照片' },
        { q: '(4) 3 ____ 毛衣', hint: '三件毛衣' }, { q: '(5) 1 ____ 自行车', hint: '一辆自行车' }, { q: '(6) 6 ____ 笔', hint: '六支笔' },
        { q: '(7) 5 ____ 本子', hint: '五个本子' }, { q: '(8) 10 ____ 职员', hint: '十个职员' }, { q: '(9) 4 ____ 椅子', hint: '四把椅子' },
        { q: '(10) 2 ____ 啤酒', hint: '两瓶啤酒' },
      ],
    },
    {
      title: 'Đặt câu hỏi theo mẫu (按照例句提问)',
      items: [
        { q: 'Ví dụ: A: 你家有几口人? B: 我家有六口人。', hint: 'Hỏi 几 + lượng từ.' },
        { q: '(1) A: ______ ? B: 我有四本中文书。', hint: '你有几本中文书?' },
        { q: '(2) A: ______ ? B: 他有三个中国朋友。', hint: '他有几个中国朋友?' },
        { q: '(3) A: ______ ? B: 他家有四口人。', hint: '他家有几口人?' },
        { q: '(4) A: ______ ? B: 这个公司有20多个职员。', hint: '这个公司有多少职员?' },
        { q: '(5) A: ______ ? B: 我有一本《英汉词典》。', hint: '你有几本词典? / 你有什么词典?' },
        { q: 'Ví dụ: A: 你有没有《汉英词典》? B: 我没有《汉英词典》。', hint: 'Hỏi 有没有.' },
        { q: '(1) A: ______ ? B: 我没有《英汉词典》。', hint: '你有没有《英汉词典》?' },
        { q: '(2) A: ______ ? B: 这个大学有八千多个留学生。', hint: '这个大学有多少留学生?' },
        { q: '(3) A: ______ ? B: 他有中文杂志。', hint: '他有没有中文杂志?' },
        { q: '(4) A: ______ ? B: 我们班没有美国学生。', hint: '你们班有没有美国学生?' },
        { q: '(5) A: ______ ? B: 她没有世界地图。', hint: '她有没有世界地图?' },
      ],
    },
    {
      title: 'Sắp xếp từ thành câu (组句)',
      items: [
        { q: 'Ví dụ: 有 你 吗 汉语 词典 → 你有汉语词典吗?', hint: 'Mẫu: chủ ngữ + 有 + tân ngữ + 吗.' },
        { q: '(1) 没有 他 哥哥 妹妹 和 →', hint: '他没有哥哥和妹妹。' },
        { q: '(2) 几个 有 你 中国朋友 →', hint: '你有几个中国朋友?' },
        { q: '(3) 你们 有 学生 多少 班 →', hint: '你们班有多少学生?' },
        { q: '(4) 我 有 没 自行车 →', hint: '我没有自行车。' },
        { q: '(5) 你 有 没 中国地图 有 →', hint: '你有没有中国地图?' },
      ],
    },
    {
      title: 'Trả lời theo thực tế của bạn (根据实际情况回答下列问题)',
      items: [
        { q: '(1) 你家有几口人?', hint: '我家有…口人。' },
        { q: '(2) 你爸爸在哪儿工作? 你妈妈呢?', hint: '我爸爸在…工作。我妈妈在…工作。' },
        { q: '(3) 你有没有哥哥/姐姐/弟弟/妹妹?', hint: '有。/ 没有。' },
        { q: '(4) 他们在哪儿工作/学习?', hint: '他们在…工作/学习。' },
        { q: '(5) 你有词典吗?', hint: '有。/ 没有。' },
        { q: '(6) 你有什么词典?', hint: '我有汉英词典。(hoặc từ điển bạn có)' },
        { q: '(7) 你有几本词典?', hint: '我有…本词典。' },
        { q: '(8) 你有没有中国朋友?', hint: '有。/ 没有。' },
        { q: '(9) 你们班有多少学生?', hint: '我们班有…个学生。' },
        { q: '(10) 你们班有几个男同学? 几个女同学?', hint: '有…个男同学，…个女同学。' },
      ],
    },
  ],
}
