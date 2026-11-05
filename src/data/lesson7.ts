import type { Lesson } from './types'

const M = '麦克 Màikè'
const L = '玛丽 Mǎlì'

export const lesson7: Lesson = {
  id: 7,
  title: 'Bạn ăn gì',
  hanzi: '你吃什么',
  pinyin: 'Nǐ chī shénme',
  vi: 'Bạn ăn gì',
  intro: 'Hỏi và nói ăn gì, uống gì ở nhà ăn; gọi món bằng 要 + số + lượng từ; 这些/那些; biến điệu của "一".',
  dialogue: [
    { who: 'A', name: M, scene: '(在教室 – Ở lớp học)', hanzi: '中午你去哪儿吃饭？', pinyin: 'Zhōngwǔ nǐ qù nǎr chī fàn?', vi: 'Buổi trưa bạn đi đâu ăn cơm?' },
    { who: 'B', name: L, hanzi: '我去食堂。', pinyin: 'Wǒ qù shítáng.', vi: 'Tôi đi nhà ăn.' },
    { who: 'A', name: M, scene: '(在食堂 – Ở nhà ăn)', hanzi: '你吃什么？', pinyin: 'Nǐ chī shénme?', vi: 'Bạn ăn gì?' },
    { who: 'B', name: L, hanzi: '我吃馒头。', pinyin: 'Wǒ chī mántou.', vi: 'Tôi ăn bánh màn thầu.' },
    { who: 'A', name: M, hanzi: '你要几个？', pinyin: 'Nǐ yào jǐ ge?', vi: 'Bạn lấy mấy cái?' },
    { who: 'B', name: L, hanzi: '一个。你吃吗？', pinyin: 'Yí ge. Nǐ chī ma?', vi: 'Một cái. Bạn ăn không?' },
    { who: 'A', name: M, hanzi: '不吃，我吃米饭。你喝什么？', pinyin: 'Bù chī, wǒ chī mǐfàn. Nǐ hē shénme?', vi: 'Không ăn, tôi ăn cơm. Bạn uống gì?' },
    { who: 'B', name: L, hanzi: '我要一碗鸡蛋汤。你喝吗？', pinyin: 'Wǒ yào yì wǎn jīdàn tāng. Nǐ hē ma?', vi: 'Tôi lấy một bát canh trứng. Bạn uống không?' },
    { who: 'A', name: M, split: true, hanzi: '不喝，我喝啤酒。', pinyin: 'Bù hē, wǒ hē píjiǔ.', vi: 'Không uống, tôi uống bia.' },
    { who: 'B', name: L, split: true, hanzi: '这些是什么？', pinyin: 'Zhèxiē shì shénme?', vi: 'Những thứ này là gì?' },
    { who: 'A', name: M, hanzi: '这是饺子，这是包子，那是面条。', pinyin: 'Zhè shì jiǎozi, zhè shì bāozi, nà shì miàntiáo.', vi: 'Đây là sủi cảo, đây là bánh bao, kia là mì sợi.' },
  ],
  dialogueTip: 'Mẫu mới: <b>要 + số + lượng từ + danh từ</b> để gọi món (我要一碗鸡蛋汤). Hỏi số lượng: <b>几个?</b> Chú ý "一" đổi thanh: <b>yí ge</b> (trước thanh 4) nhưng <b>yì wǎn</b> (trước thanh 3). Hỏi có/không: 你吃吗? – 吃 / 不吃.',
  slowSay: '你吃什么',
  vocab: [
    { hanzi: '中午', pinyin: 'zhōngwǔ', pos: 'danh từ', meaning: 'buổi trưa', han_viet: 'trung ngọ' },
    { hanzi: '吃', pinyin: 'chī', pos: 'động từ', meaning: 'ăn', han_viet: 'ngật' },
    { hanzi: '饭', pinyin: 'fàn', pos: 'danh từ', meaning: 'cơm; bữa ăn', han_viet: 'phạn' },
    { hanzi: '食堂', pinyin: 'shítáng', pos: 'danh từ', meaning: 'nhà ăn, căng tin', han_viet: 'thực đường' },
    { hanzi: '馒头', pinyin: 'mántou', pos: 'danh từ', meaning: 'bánh màn thầu (bánh hấp không nhân)', han_viet: 'man đầu' },
    { hanzi: '米饭', pinyin: 'mǐfàn', pos: 'danh từ', meaning: 'cơm (gạo nấu chín)', han_viet: 'mễ phạn' },
    { hanzi: '米', pinyin: 'mǐ', pos: 'danh từ', meaning: 'gạo', han_viet: 'mễ' },
    { hanzi: '要', pinyin: 'yào', pos: 'động từ', meaning: 'muốn, cần, lấy', han_viet: 'yếu' },
    { hanzi: '个', pinyin: 'gè', pos: 'lượng từ', meaning: 'cái, chiếc, người (lượng từ chung)', han_viet: 'cá' },
    { hanzi: '碗', pinyin: 'wǎn', pos: 'danh từ', meaning: 'bát', han_viet: 'oản' },
    { hanzi: '鸡蛋', pinyin: 'jīdàn', pos: 'danh từ', meaning: 'trứng gà', han_viet: 'kê đản' },
    { hanzi: '鸡', pinyin: 'jī', pos: 'danh từ', meaning: 'gà', han_viet: 'kê' },
    { hanzi: '蛋', pinyin: 'dàn', pos: 'danh từ', meaning: 'trứng', han_viet: 'đản' },
    { hanzi: '汤', pinyin: 'tāng', pos: 'danh từ', meaning: 'canh, súp', han_viet: 'thang' },
    { hanzi: '啤酒', pinyin: 'píjiǔ', pos: 'danh từ', meaning: 'bia', han_viet: 'tì tửu' },
    { hanzi: '酒', pinyin: 'jiǔ', pos: 'danh từ', meaning: 'rượu', han_viet: 'tửu' },
    { hanzi: '这些', pinyin: 'zhèxiē', pos: 'đại từ', meaning: 'những cái này', han_viet: 'giá ta' },
    { hanzi: '些', pinyin: 'xiē', pos: 'lượng từ', meaning: 'một số, những', han_viet: 'ta' },
    { hanzi: '一些', pinyin: 'yìxiē', pos: 'cụm', meaning: 'một vài, một ít', han_viet: 'nhất ta' },
    { hanzi: '那些', pinyin: 'nàxiē', pos: 'đại từ', meaning: 'những cái kia', han_viet: '' },
    { hanzi: '饺子', pinyin: 'jiǎozi', pos: 'danh từ', meaning: 'sủi cảo, bánh chẻo', han_viet: 'giảo tử' },
    { hanzi: '包子', pinyin: 'bāozi', pos: 'danh từ', meaning: 'bánh bao (có nhân)', han_viet: 'bao tử' },
    { hanzi: '面条', pinyin: 'miàntiáo', pos: 'danh từ', meaning: 'mì sợi', han_viet: 'diện điều' },
    { hanzi: '玛丽', pinyin: 'Mǎlì', pos: 'tên riêng', meaning: 'Mary (tên người trong bài)', han_viet: '' },
  ],
  sections: [
    {
      kind: 'examples', label: 'Biến điệu của 一', title: 'Biến điệu của "一" (yī → yì / yí)',
      intro: '"一" vốn là thanh 1 (yī). Khi đứng một mình, khi đếm số, hoặc khi đọc số (số điện thoại, số phòng…) thì đọc đúng thanh gốc yī. Còn khi đứng trước âm tiết khác thì đổi theo thanh của âm tiết đứng sau: trước thanh 1, 2, 3 đọc thành thanh 4 (yì); trước thanh 4 đọc thành thanh 2 (yí). Khi viết pinyin, đánh dấu theo cách đọc thực tế.',
      groups: [
        { label: 'Trước thanh 1 → yì', items: [['一般', 'yìbān', 'bình thường'], ['一天', 'yì tiān', 'một ngày']] },
        { label: 'Trước thanh 2 → yì', items: [['一年', 'yì nián', 'một năm'], ['一元', 'yì yuán', 'một đồng'], ['一时', 'yìshí', 'nhất thời']] },
        { label: 'Trước thanh 3 → yì', items: [['一本', 'yì běn', 'một quyển'], ['一点', 'yì diǎn', 'một chút']] },
        { label: 'Trước thanh 4 → yí', items: [['一个', 'yí ge', 'một cái'], ['一件', 'yí jiàn', 'một chiếc/món']] },
        { label: 'Đọc riêng, đếm số → yī', items: [['一', 'yī', 'một'], ['十一', 'shíyī', 'mười một']] },
      ],
    },
  ],
  notes: [
    {
      title: 'Biến điệu của "一"',
      body: '一 mặc định là yī (thanh 1) khi đứng riêng, khi đếm hoặc đọc số. Trước thanh 1, 2, 3 → yì (thanh 4): 一般 yìbān, 一年 yì nián, 一本 yì běn. Trước thanh 4 → yí (thanh 2): 一个 yí ge, 一件 yí jiàn. Đây là cặp quy tắc song hành với biến điệu của 不 (bù → bú) ở Bài 3.',
      say: '一个',
    },
    {
      title: 'Ôn biến điệu của "不"',
      body: '不 bình thường là bù. Trước thanh 4 đọc thành bú: 不去 bú qù, 不要 bú yào, 不怕 bú pà, 不做 bú zuò. Trước thanh 1, 2, 3 vẫn là bù: 不吃 bù chī, 不来 bù lái, 不好 bù hǎo.',
      say: '不吃',
    },
    {
      title: 'Ngữ pháp 1: động từ + tân ngữ',
      body: 'Trật tự: chủ ngữ + động từ + tân ngữ. 我吃馒头。(Tôi ăn màn thầu.) 我喝啤酒。(Tôi uống bia.) Cụm "吃饭" (ăn cơm) cũng là động từ + tân ngữ: 去食堂吃饭 (đến nhà ăn ăn cơm).',
      say: '我吃馒头',
    },
    {
      title: 'Ngữ pháp 2: 要 + số + lượng từ + danh từ',
      body: 'Gọi món hay nói số lượng: 要 + số từ + lượng từ + danh từ. 我要一碗鸡蛋汤 (tôi lấy một bát canh trứng). 你要几个? – 一个。 Lượng từ 个 dùng chung cho nhiều danh từ; 碗 (bát) vừa là danh từ vừa là lượng từ chỉ "một bát".',
      say: '我要一碗鸡蛋汤',
    },
    {
      title: 'Ngữ pháp 3: hỏi và đáp có/không',
      body: 'Dùng 吗 cuối câu: 你吃吗? 你喝吗? Trả lời ngắn gọn bằng chính động từ: 吃 / 不吃, 喝 / 不喝. Câu trả lời đầy đủ: 不吃，我吃米饭。(Không ăn, tôi ăn cơm.)',
      say: '你喝吗',
    },
    {
      title: 'Ngữ pháp 4: 这些 và 那些 (số nhiều)',
      body: '些 là lượng từ chỉ "một số, những". 这些 (những cái này), 那些 (những cái kia), 一些 (một vài). 这些是什么? – 这是饺子，这是包子，那是面条。',
      say: '这些是什么',
    },
    {
      title: 'Món ăn: 馒头, 包子, 饺子, 面条',
      body: '馒头 là bánh hấp không nhân; 包子 là bánh hấp có nhân (thịt hoặc rau); 饺子 là sủi cảo (bánh chẻo) luộc hoặc hấp; 面条 là mì sợi. 米饭 là cơm (gạo nấu chín), còn 米 là gạo chưa nấu.',
      say: '饺子',
    },
  ],
  sentences: [
    { parts: ['中午', '你', '去', '哪儿', '吃', '饭'], pinyin: 'Zhōngwǔ nǐ qù nǎr chī fàn?', vi: 'Buổi trưa bạn đi đâu ăn cơm?' },
    { parts: ['我', '去', '食堂'], pinyin: 'Wǒ qù shítáng.', vi: 'Tôi đi nhà ăn.' },
    { parts: ['你', '吃', '什么'], pinyin: 'Nǐ chī shénme?', vi: 'Bạn ăn gì?' },
    { parts: ['我', '吃', '馒头'], pinyin: 'Wǒ chī mántou.', vi: 'Tôi ăn bánh màn thầu.' },
    { parts: ['你', '要', '几', '个'], pinyin: 'Nǐ yào jǐ ge?', vi: 'Bạn lấy mấy cái?' },
    { parts: ['我', '要', '一', '碗', '鸡蛋', '汤'], pinyin: 'Wǒ yào yì wǎn jīdàn tāng.', vi: 'Tôi lấy một bát canh trứng.' },
    { parts: ['你', '吃', '吗'], pinyin: 'Nǐ chī ma?', vi: 'Bạn ăn không?' },
    { parts: ['你', '喝', '吗'], pinyin: 'Nǐ hē ma?', vi: 'Bạn uống không?' },
    { parts: ['我', '吃', '米饭'], pinyin: 'Wǒ chī mǐfàn.', vi: 'Tôi ăn cơm.' },
    { parts: ['你', '喝', '什么'], pinyin: 'Nǐ hē shénme?', vi: 'Bạn uống gì?' },
    { parts: ['我', '喝', '啤酒'], pinyin: 'Wǒ hē píjiǔ.', vi: 'Tôi uống bia.' },
    { parts: ['这些', '是', '什么'], pinyin: 'Zhèxiē shì shénme?', vi: 'Những thứ này là gì?' },
    { parts: ['这', '是', '饺子'], pinyin: 'Zhè shì jiǎozi.', vi: 'Đây là sủi cảo.' },
    { parts: ['那', '是', '面条'], pinyin: 'Nà shì miàntiáo.', vi: 'Kia là mì sợi.' },
  ],
  writeChars: ['个', '午', '子', '米', '头', '要', '吃', '饭', '些', '包', '面', '条', '喝', '酒'],
  drills: [
    {
      title: 'Biến điệu của 一', hint: 'Chú ý yī / yì / yí.',
      items: [
        { h: '一封', p: 'yì fēng' }, { h: '一天', p: 'yì tiān' }, { h: '一张', p: 'yì zhāng' }, { h: '一双', p: 'yì shuāng' },
        { h: '一层', p: 'yì céng' }, { h: '一回', p: 'yì huí' }, { h: '一节', p: 'yì jié' }, { h: '一年', p: 'yì nián' },
        { h: '一本', p: 'yì běn' }, { h: '一笔', p: 'yì bǐ' }, { h: '一口', p: 'yì kǒu' }, { h: '一点', p: 'yì diǎn' },
        { h: '一个', p: 'yí ge' }, { h: '一课', p: 'yí kè' }, { h: '一件', p: 'yí jiàn' }, { h: '一片', p: 'yí piàn' },
      ],
    },
    {
      title: 'Biến điệu của 不', hint: 'Chú ý bù / bú.',
      items: [
        { h: '不吃', p: 'bù chī' }, { h: '不喝', p: 'bù hē' }, { h: '不说', p: 'bù shuō' }, { h: '不多', p: 'bù duō' }, { h: '不酸', p: 'bù suān' },
        { h: '不来', p: 'bù lái' }, { h: '不行', p: 'bù xíng' }, { h: '不同', p: 'bù tóng' }, { h: '不能', p: 'bù néng' }, { h: '不甜', p: 'bù tián' },
        { h: '不买', p: 'bù mǎi' }, { h: '不冷', p: 'bù lěng' }, { h: '不打', p: 'bù dǎ' }, { h: '不好', p: 'bù hǎo' }, { h: '不小', p: 'bù xiǎo' },
        { h: '不卖', p: 'bú mài' }, { h: '不去', p: 'bú qù' }, { h: '不怕', p: 'bú pà' }, { h: '不做', p: 'bú zuò' }, { h: '不饿', p: 'bú è' },
      ],
    },
    {
      title: 'Đọc liền nhiều âm tiết (多音节连读)', hint: 'Đọc liền mạch cả cụm.',
      items: [
        { h: '吃馒头', p: 'chī mántou' }, { h: '吃面包', p: 'chī miànbāo' }, { h: '吃米饭', p: 'chī mǐfàn' }, { h: '吃饺子', p: 'chī jiǎozi' }, { h: '吃包子', p: 'chī bāozi' },
        { h: '喝咖啡', p: 'hē kāfēi' }, { h: '喝牛奶', p: 'hē niúnǎi' }, { h: '喝啤酒', p: 'hē píjiǔ' }, { h: '喝茶', p: 'hē chá' }, { h: '喝酸奶', p: 'hē suānnǎi' },
      ],
    },
    {
      title: 'Phân biệt âm và thanh điệu', hint: 'Đọc từng từ, chú ý thanh điệu và âm đầu.',
      items: [
        { h: '头', p: 'tóu' }, { h: '手', p: 'shǒu' }, { h: '鼻', p: 'bí' }, { h: '眼', p: 'yǎn' }, { h: '口', p: 'kǒu' },
        { h: '鸡', p: 'jī' }, { h: '鸭', p: 'yā' }, { h: '牛', p: 'niú' }, { h: '羊', p: 'yáng' }, { h: '狗', p: 'gǒu' },
        { h: '饭', p: 'fàn' }, { h: '菜', p: 'cài' }, { h: '果', p: 'guǒ' }, { h: '茶', p: 'chá' }, { h: '奶', p: 'nǎi' },
        { h: '肉', p: 'ròu' }, { h: '蛋', p: 'dàn' }, { h: '糖', p: 'táng' }, { h: '烟', p: 'yān' }, { h: '酒', p: 'jiǔ' },
        { h: '馒头', p: 'mántou' }, { h: '难受', p: 'nánshòu' }, { h: '包子', p: 'bāozi' }, { h: '袍子', p: 'páozi' },
        { h: '鸡蛋', p: 'jīdàn' }, { h: '期限', p: 'qīxiàn' }, { h: '书包', p: 'shūbāo' }, { h: '书报', p: 'shū bào' },
        { h: '搭车', p: 'dā chē' }, { h: '大车', p: 'dà chē' }, { h: '哪里', p: 'nǎli' }, { h: '那里', p: 'nàli' },
      ],
    },
    {
      title: 'Thanh nhẹ (轻声)', hint: 'Âm tiết sau là "子" hoặc âm nhẹ, đọc nhẹ và ngắn.',
      items: [
        { h: '刀子', p: 'dāozi' }, { h: '叉子', p: 'chāzi' }, { h: '勺子', p: 'sháozi' }, { h: '筷子', p: 'kuàizi' },
        { h: '剪子', p: 'jiǎnzi' }, { h: '屋子', p: 'wūzi' }, { h: '桌子', p: 'zhuōzi' }, { h: '椅子', p: 'yǐzi' },
        { h: '柜子', p: 'guìzi' }, { h: '箱子', p: 'xiāngzi' }, { h: '盒子', p: 'hézi' },
      ],
    },
    {
      title: 'Phối hợp thanh điệu (声调搭配)', hint: 'Đọc to từng từ, giữ đúng thanh của từng âm tiết.',
      items: [
        { h: '房间', p: 'fángjiān' }, { h: '明天', p: 'míngtiān' }, { h: '年轻', p: 'niánqīng' }, { h: '国家', p: 'guójiā' },
        { h: '明年', p: 'míngnián' }, { h: '回答', p: 'huídá' }, { h: '同学', p: 'tóngxué' }, { h: '留学', p: 'liúxué' },
        { h: '牛奶', p: 'niúnǎi' }, { h: '啤酒', p: 'píjiǔ' }, { h: '有用', p: 'yǒuyòng' }, { h: '门口', p: 'ménkǒu' },
        { h: '邮票', p: 'yóupiào' }, { h: '不要', p: 'bú yào' }, { h: '磁带', p: 'cídài' }, { h: '习惯', p: 'xíguàn' },
        { h: '别的', p: 'biéde' }, { h: '朋友', p: 'péngyou' }, { h: '觉得', p: 'juéde' }, { h: '麻烦', p: 'máfan' },
      ],
    },
    {
      title: 'Nhận đọc (认读)', hint: 'Đọc cả cụm. Bấm để nghe đáp án.',
      items: [
        { h: '吃馒头', p: 'chī mántou' }, { h: '吃包子', p: 'chī bāozi' }, { h: '吃米饭', p: 'chī mǐfàn' }, { h: '吃面条', p: 'chī miàntiáo' }, { h: '吃饺子', p: 'chī jiǎozi' },
        { h: '喝什么', p: 'hē shénme' }, { h: '喝汤', p: 'hē tāng' }, { h: '喝茶', p: 'hē chá' }, { h: '喝啤酒', p: 'hē píjiǔ' }, { h: '喝鸡蛋汤', p: 'hē jīdàntāng' },
        { h: '什么汤', p: 'shénme tāng' }, { h: '什么书', p: 'shénme shū' }, { h: '什么人', p: 'shénme rén' }, { h: '什么酒', p: 'shénme jiǔ' }, { h: '什么名字', p: 'shénme míngzi' },
      ],
    },
    {
      title: 'Xem hình hỏi đáp (看图问答): 这是什么? 这是…', hint: 'Sách có hình minh hoạ 10 đồ vật. Học tên từng đồ vật.',
      items: [
        { h: '筷子', p: 'kuàizi', m: 'đũa' }, { h: '碗', p: 'wǎn', m: 'bát' }, { h: '书', p: 'shū', m: 'sách' }, { h: '词典', p: 'cídiǎn', m: 'từ điển' },
        { h: '电脑', p: 'diànnǎo', m: 'máy tính' }, { h: '伞', p: 'sǎn', m: 'ô, dù' }, { h: '汽车', p: 'qìchē', m: 'ô tô' }, { h: '电视', p: 'diànshì', m: 'tivi' },
        { h: '录音机', p: 'lùyīnjī', m: 'máy ghi âm' }, { h: '手机', p: 'shǒujī', m: 'điện thoại di động' },
      ],
    },
    {
      title: 'Thực hành nói (成段表达)', hint: 'Đọc đoạn mẫu rồi kể lại bằng lời của bạn.',
      items: [
        { h: '中午我去食堂吃饭。', p: 'Zhōngwǔ wǒ qù shítáng chī fàn.' },
        { h: '这是馒头，这是包子，那是面条，这些是饺子。', p: 'Zhè shì mántou, zhè shì bāozi, nà shì miàntiáo, zhèxiē shì jiǎozi.' },
        { h: '我吃馒头，喝鸡蛋汤。', p: 'Wǒ chī mántou, hē jīdàn tāng.' },
        { h: '麦克不吃馒头，不喝鸡蛋汤，他吃米饭，喝啤酒。', p: 'Màikè bù chī mántou, bù hē jīdàn tāng, tā chī mǐfàn, hē píjiǔ.' },
      ],
    },
  ],
  qa: [
    {
      title: 'Trả lời câu hỏi (回答问题)',
      items: [
        { q: '(1) Nǐ qù nǎr chī fàn? (你去哪儿吃饭?)', hint: 'Wǒ qù shítáng chī fàn. (我去食堂吃饭。)' },
        { q: '(2) Nǐ chī shénme? (你吃什么?)', hint: 'Wǒ chī mántou. / Wǒ chī mǐfàn. (我吃馒头。/ 我吃米饭。)' },
        { q: '(3) Nǐ chī jǐ ge mántou? (你吃几个馒头?)', hint: 'Wǒ chī yí ge. (我吃一个。) (số khác: 两个 liǎng ge sẽ học sau)' },
        { q: '(4) Nǐ hē shénme? (你喝什么?)', hint: 'Wǒ hē chá. / Wǒ hē píjiǔ. (我喝茶。/ 我喝啤酒。)' },
        { q: '(5) Nǐ hē shénme tāng? (你喝什么汤?)', hint: 'Wǒ hē jīdàn tāng. (我喝鸡蛋汤。)' },
        { q: '(6) Nǐ yào shénme píjiǔ? (你要什么啤酒?)', hint: 'Trả lời tên loại bia mình muốn, hoặc: Wǒ yào yì píng píjiǔ. (chữ "瓶" chưa học). Có thể đáp ngắn: Wǒ bù yào píjiǔ. (我不要啤酒。)' },
      ],
    },
    {
      title: 'Hoàn thành hội thoại (完成会话)',
      items: [
        { q: '(1) A: ______ ?   B: Wǒ qù shítáng chī fàn.', hint: 'A: Nǐ qù nǎr chī fàn? (你去哪儿吃饭?)' },
        { q: '(2) A: ______ ?   B: Zhè shì mántou.   A: ______ ?   B: Nà shì bāozi.   A: ______ ?   B: Nàxiē shì jiǎozi.', hint: 'A: Zhè shì shénme? (这是什么?) · A: Nà shì shénme? (那是什么?) · A: Nàxiē shì shénme? (那些是什么?)' },
        { q: '(3) A: ______ ?   B: Wǒ chī mántou.   A: ______ ?   B: Wǒ chī yí ge. Nǐ chī ma?', hint: 'A: Nǐ chī shénme? (你吃什么?) · A: Nǐ chī jǐ ge? (你吃几个?)' },
        { q: '(4) A: ______ , wǒ chī ______ . Nǐ hē tāng ma?   B: Hē. Wǒ yào yí ge jīdàn tāng. Nǐ hē shénme?   A: Wǒ bù hē ______ . Wǒ hē ______ .', hint: 'Ví dụ: A: Bù chī, wǒ chī mǐfàn. (不吃，我吃米饭。) · A: Wǒ bù hē tāng. Wǒ hē píjiǔ. (我不喝汤。我喝啤酒。)' },
      ],
    },
  ],
}
