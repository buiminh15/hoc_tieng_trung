import type { Lesson } from './types'

const T = '田芳 Tián Fāng'
const Z = '张东 Zhāng Dōng'
const J = '珍妮 Zhēnnī'
const M = '玛丽 Mǎlì'

/** Quyển 2, Bài 18. */
export const lesson18: Lesson = {
  id: 18,
  title: 'Tôi đến bưu điện gửi bưu kiện',
  hanzi: '我去邮局寄包裹',
  pinyin: 'Wǒ qù yóujú jì bāoguǒ',
  vi: 'Tôi đến bưu điện gửi bưu kiện',
  intro: 'Nhờ giúp đỡ (替我…, 帮我…, 给我…, 行吗?); câu liên động (去/来 + nơi chốn + làm gì; cách làm + động từ); trọng âm logic.',
  dialogue: [
    { who: 'A', name: T, scene: '(一) 我去邮局寄包裹 – Tôi đến bưu điện gửi bưu kiện (Điền Phương gặp Trương Đông ở cổng tòa nhà)', hanzi: '张东，你要去哪儿？', pinyin: 'Zhāng Dōng, nǐ yào qù nǎr?', vi: 'Trương Đông, bạn định đi đâu?' },
    { who: 'B', name: Z, hanzi: '我去邮局寄包裹，顺便去书店买一本书。你去吗？', pinyin: 'Wǒ qù yóujú jì bāoguǒ, shùnbiàn qù shūdiàn mǎi yì běn shū. Nǐ qù ma?', vi: 'Tôi đến bưu điện gửi bưu kiện, tiện thể ghé hiệu sách mua một quyển sách. Bạn có đi không?' },
    { who: 'A', name: T, hanzi: '不去，一会儿玛丽来找我。你顺便替我买几张邮票和一份《青年报》吧。', pinyin: 'Bú qù, yíhuìr Mǎlì lái zhǎo wǒ. Nǐ shùnbiàn tì wǒ mǎi jǐ zhāng yóupiào hé yí fèn《Qīngniánbào》ba.', vi: 'Không đi, lát nữa Mary đến tìm tôi. Bạn tiện thể mua giúp tôi vài con tem và một tờ Báo Thanh niên nhé.' },
    { who: 'B', name: Z, hanzi: '好的。', pinyin: 'Hǎo de.', vi: 'Được.' },
    { who: 'A', name: T, hanzi: '我给你拿钱。', pinyin: 'Wǒ gěi nǐ ná qián.', vi: 'Tôi lấy tiền đưa bạn.' },
    { who: 'B', name: Z, hanzi: '不用，先用我的钱买吧。', pinyin: 'Búyòng, xiān yòng wǒ de qián mǎi ba.', vi: 'Không cần, cứ dùng tiền của tôi mua trước đi.' },
    { who: 'A', name: J, scene: '(二) 外贸代表团明天去上海参观 – Đoàn đại biểu ngoại thương ngày mai đi Thượng Hải tham quan (Janet đến ký túc xá tìm Mary)', hanzi: '玛丽，我明天去上海。', pinyin: 'Mǎlì, wǒ míngtiān qù Shànghǎi.', vi: 'Mary, ngày mai tôi đi Thượng Hải.' },
    { who: 'B', name: M, hanzi: '你去上海旅行吗？', pinyin: 'Nǐ qù Shànghǎi lǚxíng ma?', vi: 'Bạn đi Thượng Hải du lịch à?' },
    { who: 'A', name: J, hanzi: '不，明天一个外贸代表团去上海参观，我去给他们当翻译。', pinyin: 'Bù, míngtiān yí ge wàimào dàibiǎotuán qù Shànghǎi cānguān, wǒ qù gěi tāmen dāng fānyì.', vi: 'Không, ngày mai một đoàn đại biểu ngoại thương đi Thượng Hải tham quan, tôi đi làm phiên dịch cho họ.' },
    { who: 'B', name: M, hanzi: '坐飞机去还是坐火车去？', pinyin: 'Zuò fēijī qù háishi zuò huǒchē qù?', vi: 'Đi máy bay hay đi tàu hỏa?' },
    { who: 'A', name: J, hanzi: '坐飞机去。', pinyin: 'Zuò fēijī qù.', vi: 'Đi máy bay.' },
    { who: 'B', name: M, hanzi: '什么时候回来？', pinyin: 'Shénme shíhou huílai?', vi: 'Khi nào về?' },
    { who: 'A', name: J, hanzi: '八号回来。替我办一件事，行吗？', pinyin: 'Bā hào huílai. Tì wǒ bàn yí jiàn shì, xíng ma?', vi: 'Mùng tám về. Làm giúp tôi một việc được không?' },
    { who: 'B', name: M, hanzi: '什么事？你说吧。', pinyin: 'Shénme shì? Nǐ shuō ba.', vi: 'Việc gì? Bạn nói đi.' },
    { who: 'A', name: J, hanzi: '帮我浇一下儿花。', pinyin: 'Bāng wǒ jiāo yíxiàr huā.', vi: 'Tưới giúp tôi mấy chậu hoa nhé.' },
    { who: 'B', name: M, hanzi: '行，没问题。', pinyin: 'Xíng, méi wèntí.', vi: 'Được, không vấn đề gì.' },
  ],
  dialogueTip: 'Nhờ giúp: <b>替我 / 帮我 / 给我 + việc</b> rồi hỏi <b>行吗?</b>. Nhận lời: <b>行 / 好的 / 没问题</b>. <b>顺便</b> = tiện thể. Câu liên động: <b>去/来 + nơi chốn + làm gì</b> (去邮局寄包裹) và <b>cách làm + động từ</b> (坐飞机去). <b>不用</b> = không cần.',
  slowSay: '我去邮局寄包裹',
  vocab: [
    { hanzi: '包裹', pinyin: 'bāoguǒ', pos: 'danh từ', meaning: 'bưu kiện, gói hàng', han_viet: 'bao khỏa' },
    { hanzi: '顺便', pinyin: 'shùnbiàn', pos: 'phó từ', meaning: 'tiện thể, nhân tiện', han_viet: 'thuận tiện' },
    { hanzi: '替', pinyin: 'tì', pos: 'giới từ', meaning: 'thay, giúp (làm thay)', han_viet: 'thế' },
    { hanzi: '邮票', pinyin: 'yóupiào', pos: 'danh từ', meaning: 'tem thư', han_viet: 'bưu phiếu' },
    { hanzi: '份', pinyin: 'fèn', pos: 'lượng từ', meaning: 'tờ, bản, phần (báo, tài liệu…)', han_viet: 'phần' },
    { hanzi: '青年', pinyin: 'qīngnián', pos: 'danh từ', meaning: 'thanh niên', han_viet: 'thanh niên' },
    { hanzi: '报', pinyin: 'bào', pos: 'danh từ', meaning: 'báo', han_viet: 'báo' },
    { hanzi: '报纸', pinyin: 'bàozhǐ', pos: 'danh từ', meaning: 'tờ báo', han_viet: 'báo chỉ' },
    { hanzi: '拿', pinyin: 'ná', pos: 'động từ', meaning: 'cầm, lấy', han_viet: 'nã' },
    { hanzi: '不用', pinyin: 'búyòng', pos: 'phó từ', meaning: 'không cần', han_viet: 'bất dụng' },
    { hanzi: '用', pinyin: 'yòng', pos: 'động từ', meaning: 'dùng', han_viet: 'dụng' },
    { hanzi: '旅行', pinyin: 'lǚxíng', pos: 'động từ', meaning: 'du lịch', han_viet: 'lữ hành' },
    { hanzi: '代表', pinyin: 'dàibiǎo', pos: 'danh/động từ', meaning: 'đại biểu; đại diện', han_viet: 'đại biểu' },
    { hanzi: '团', pinyin: 'tuán', pos: 'danh/lượng từ', meaning: 'đoàn, nhóm', han_viet: 'đoàn' },
    { hanzi: '参观', pinyin: 'cānguān', pos: 'động từ', meaning: 'tham quan', han_viet: 'tham quan' },
    { hanzi: '当', pinyin: 'dāng', pos: 'động từ', meaning: 'làm, đảm nhận (vai trò)', han_viet: 'đương' },
    { hanzi: '翻译', pinyin: 'fānyì', pos: 'danh/động từ', meaning: 'phiên dịch; dịch', han_viet: 'phiên dịch' },
    { hanzi: '飞机', pinyin: 'fēijī', pos: 'danh từ', meaning: 'máy bay', han_viet: 'phi cơ' },
    { hanzi: '飞', pinyin: 'fēi', pos: 'động từ', meaning: 'bay', han_viet: 'phi' },
    { hanzi: '火车', pinyin: 'huǒchē', pos: 'danh từ', meaning: 'tàu hỏa', han_viet: 'hỏa xa' },
    { hanzi: '回来', pinyin: 'huílai', pos: 'động từ', meaning: 'trở về, quay lại', han_viet: 'hồi lai' },
    { hanzi: '办', pinyin: 'bàn', pos: 'động từ', meaning: 'làm, xử lý, lo liệu', han_viet: 'biện' },
    { hanzi: '帮', pinyin: 'bāng', pos: 'động từ', meaning: 'giúp', han_viet: 'bang' },
    { hanzi: '浇', pinyin: 'jiāo', pos: 'động từ', meaning: 'tưới, rót', han_viet: 'kiêu' },
    { hanzi: '花', pinyin: 'huā', pos: 'danh từ', meaning: 'hoa', han_viet: 'hoa' },
    { hanzi: '没问题', pinyin: 'méi wèntí', pos: 'cụm', meaning: 'không vấn đề gì', han_viet: '' },
    { hanzi: '问题', pinyin: 'wèntí', pos: 'danh từ', meaning: 'câu hỏi, vấn đề', han_viet: 'vấn đề' },
    { hanzi: '上海', pinyin: 'Shànghǎi', pos: 'tên riêng', meaning: 'Thượng Hải (thành phố lớn của Trung Quốc)', han_viet: 'Thượng Hải' },
    { hanzi: '珍妮', pinyin: 'Zhēnnī', pos: 'tên riêng', meaning: 'Janet (tên người)', han_viet: '' },
  ],
  sections: [
    {
      kind: 'examples', label: 'Trọng âm logic', title: 'Trọng âm logic (逻辑重音)',
      intro: 'Khi nói, để nhấn mạnh một ý đặc biệt, người nói đọc nặng một từ hoặc cụm từ nào đó. Đó là trọng âm logic. Nó không có vị trí cố định, thay đổi theo ý người nói. Cùng một câu "珍妮明天坐飞机去上海参观", mỗi câu hỏi khác nhau thì phần được nhấn khác nhau: nhấn đúng phần mà câu hỏi muốn biết. Dấu ’ đặt trước phần được nhấn.',
      groups: [
        { label: 'Hỏi ai: nhấn chủ ngữ', items: [['A：谁明天坐飞机去上海参观？B：’珍妮明天坐飞机去上海参观。', 'shéi míngtiān zuò fēijī qù Shànghǎi cānguān? ’Zhēnnī míngtiān zuò fēijī qù Shànghǎi cānguān.', 'nhấn: Zhēnnī']] },
        { label: 'Hỏi khi nào: nhấn thời gian', items: [['A：珍妮什么时候坐飞机去上海参观？B：珍妮’明天坐飞机去上海参观。', 'Zhēnnī shénme shíhou zuò fēijī qù Shànghǎi cānguān? Zhēnnī ’míngtiān zuò fēijī qù Shànghǎi cānguān.', 'nhấn: míngtiān']] },
        { label: 'Hỏi bằng cách nào: nhấn phương tiện', items: [['A：珍妮明天怎么去上海？B：珍妮明天’坐飞机去上海。', 'Zhēnnī míngtiān zěnme qù Shànghǎi? Zhēnnī míngtiān ’zuò fēijī qù Shànghǎi.', 'nhấn: zuò fēijī']] },
        { label: 'Hỏi đi đâu: nhấn nơi chốn', items: [['A：珍妮明天坐飞机去哪儿参观？B：珍妮明天坐飞机去’上海参观。', 'Zhēnnī míngtiān zuò fēijī qù nǎr cānguān? Zhēnnī míngtiān zuò fēijī qù ’Shànghǎi cānguān.', 'nhấn: Shànghǎi']] },
        { label: 'Hỏi làm gì: nhấn mục đích', items: [['A：珍妮明天坐飞机去上海做什么？B：珍妮明天坐飞机去上海’参观。', 'Zhēnnī míngtiān zuò fēijī qù Shànghǎi zuò shénme? Zhēnnī míngtiān zuò fēijī qù Shànghǎi ’cānguān.', 'nhấn: cānguān']] },
      ],
    },
  ],
  notes: [
    {
      title: 'Nhờ giúp đỡ: 顺便替我买几张邮票吧',
      body: '你顺便替我买几张邮票和一份《青年报》吧 nghĩa là "nhân tiện, bạn mua giúp tôi vài con tem và một tờ Báo Thanh niên nhé". 顺便 = tiện thể; 替我 = làm thay tôi; 份 là lượng từ cho báo. Mẫu nhờ vả: 替我 / 帮我 / 给我 + việc + 吧 hoặc + 行吗?',
      say: '你顺便替我买几张邮票吧',
    },
    {
      title: 'Nhận lời: 没问题',
      body: '没问题 (không vấn đề gì) dùng để trả lời lời nhờ vả, tỏ ý sẵn sàng giúp. A: 帮我浇一下儿花，行吗? B: 行，没问题。Gần nghĩa với 行 và 好的.',
      say: '行，没问题',
    },
    {
      title: 'Câu liên động (连动句)',
      body: 'Vị ngữ gồm hai hay nhiều động từ (hoặc cụm động từ) xếp liền nhau gọi là câu liên động, dùng để nói mục đích hoặc cách thức của hành động. Dạng 1, nêu mục đích: 去/来 + (nơi chốn) + làm gì. 外贸代表团明天去上海参观。我来中国学汉语。Dạng 2, nêu cách làm: 我们坐飞机去上海。他骑车去寄包裹。我们用汉语聊天儿。',
      say: '我们坐飞机去上海',
    },
    {
      title: 'Trật tự trong câu liên động',
      body: 'Các động từ xếp theo thứ tự thực hiện, không đảo vị trí. 去邮局寄包裹 (đi bưu điện rồi gửi bưu kiện), 来中国学汉语 (đến Trung Quốc để học tiếng Hán). Khi nói cách thức, cách làm đứng trước động từ chính: 坐飞机去, 用电脑写信.',
      say: '我去邮局寄包裹',
    },
    {
      title: 'Làm thay và giúp: 替, 帮, 给',
      body: '替我买: mua thay tôi (tôi không phải đi). 帮我浇花: giúp tôi tưới hoa (cùng làm hoặc làm giúp). 给我拿钱: đưa/lấy tiền cho tôi. 给他们当翻译: làm phiên dịch cho họ. Dùng 给 khi nói người nhận lợi ích, 替 khi làm thay, 帮 khi giúp.',
      say: '给他们当翻译',
    },
    {
      title: 'Hai nghĩa của 不用',
      body: '不用 nghĩa là "không cần" (= 不需要): 不用，先用我的钱买吧 (không cần, cứ dùng tiền của tôi mua trước). Chú ý khác 不用 với 没用 (vô ích).',
      say: '不用',
    },
    {
      title: 'Đi bằng gì: 坐飞机, 坐火车, 骑车',
      body: '坐飞机去 (đi máy bay), 坐火车去 (đi tàu hỏa), 骑车去 (đi xe đạp), 坐车去 (đi xe buýt). Hỏi lựa chọn: 坐飞机去还是坐火车去? Trả lời: 坐飞机去.',
      say: '坐飞机去还是坐火车去',
    },
    {
      title: 'Ngày trong tháng: 八号',
      body: 'Nói ngày bằng số + 号: 八号回来 (mùng tám về). 号 là cách nói thông thường, văn viết trang trọng dùng 日. Hỏi: 什么时候回来?',
      say: '八号回来',
    },
    {
      title: 'Trọng âm logic (逻辑重音)',
      body: 'Trọng âm logic nhấn mạnh phần người nói muốn làm nổi bật, không cố định vị trí. Câu hỏi hỏi gì thì câu trả lời nhấn đúng phần đó: hỏi ai nhấn chủ ngữ, hỏi khi nào nhấn thời gian, hỏi bằng gì nhấn phương tiện, hỏi đi đâu nhấn nơi chốn, hỏi làm gì nhấn mục đích.',
      say: '珍妮明天坐飞机去上海参观',
    },
  ],
  sentences: [
    { parts: ['你', '要', '去', '哪儿'], pinyin: 'Nǐ yào qù nǎr?', vi: 'Bạn định đi đâu?' },
    { parts: ['我', '去', '邮局', '寄', '包裹'], pinyin: 'Wǒ qù yóujú jì bāoguǒ.', vi: 'Tôi đến bưu điện gửi bưu kiện.' },
    { parts: ['顺便', '去', '书店', '买', '一', '本', '书'], pinyin: 'Shùnbiàn qù shūdiàn mǎi yì běn shū.', vi: 'Tiện thể ghé hiệu sách mua một quyển sách.' },
    { parts: ['你', '顺便', '替', '我', '买', '几', '张', '邮票'], pinyin: 'Nǐ shùnbiàn tì wǒ mǎi jǐ zhāng yóupiào.', vi: 'Bạn tiện thể mua giúp tôi vài con tem.' },
    { parts: ['不用', '先', '用', '我', '的', '钱', '买', '吧'], pinyin: 'Búyòng, xiān yòng wǒ de qián mǎi ba.', vi: 'Không cần, cứ dùng tiền của tôi mua trước đi.' },
    { parts: ['我', '明天', '去', '上海'], pinyin: 'Wǒ míngtiān qù Shànghǎi.', vi: 'Ngày mai tôi đi Thượng Hải.' },
    { parts: ['你', '去', '上海', '旅行', '吗'], pinyin: 'Nǐ qù Shànghǎi lǚxíng ma?', vi: 'Bạn đi Thượng Hải du lịch à?' },
    { parts: ['我', '去', '给', '他们', '当', '翻译'], pinyin: 'Wǒ qù gěi tāmen dāng fānyì.', vi: 'Tôi đi làm phiên dịch cho họ.' },
    { parts: ['坐', '飞机', '去', '还是', '坐', '火车', '去'], pinyin: 'Zuò fēijī qù háishi zuò huǒchē qù?', vi: 'Đi máy bay hay đi tàu hỏa?' },
    { parts: ['什么', '时候', '回来'], pinyin: 'Shénme shíhou huílai?', vi: 'Khi nào về?' },
    { parts: ['替', '我', '办', '一', '件', '事', '行', '吗'], pinyin: 'Tì wǒ bàn yí jiàn shì, xíng ma?', vi: 'Làm giúp tôi một việc được không?' },
    { parts: ['帮', '我', '浇', '一下儿', '花'], pinyin: 'Bāng wǒ jiāo yíxiàr huā.', vi: 'Tưới giúp tôi mấy chậu hoa nhé.' },
    { parts: ['行', '没', '问题'], pinyin: 'Xíng, méi wèntí.', vi: 'Được, không vấn đề gì.' },
    { parts: ['我们', '坐', '飞机', '去', '上海'], pinyin: 'Wǒmen zuò fēijī qù Shànghǎi.', vi: 'Chúng tôi đi máy bay đến Thượng Hải.' },
    { parts: ['他', '骑', '车', '去', '寄', '包裹'], pinyin: 'Tā qí chē qù jì bāoguǒ.', vi: 'Anh ấy đạp xe đi gửi bưu kiện.' },
    { parts: ['我', '来', '中国', '学', '汉语'], pinyin: 'Wǒ lái Zhōngguó xué Hànyǔ.', vi: 'Tôi đến Trung Quốc học tiếng Hán.' },
    { parts: ['我们', '用', '汉语', '聊天儿'], pinyin: 'Wǒmen yòng Hànyǔ liáotiānr.', vi: 'Chúng tôi trò chuyện bằng tiếng Hán.' },
  ],
  writeChars: ['飞', '火', '寄', '代', '表', '团', '参', '观', '当', '顺', '便', '替', '拿', '帮'],
  drills: [
    {
      title: 'Phân biệt âm và thanh điệu', hint: 'Đọc từng cặp, chú ý thanh điệu và âm đầu.',
      items: [
        { h: '顺便', p: 'shùnbiàn' }, { h: '随便', p: 'suíbiàn' }, { h: '浇花', p: 'jiāo huā' }, { h: '教化', p: 'jiàohuà' },
        { h: '旅行', p: 'lǚxíng' }, { h: '礼性', p: 'lǐxìng' }, { h: '火车', p: 'huǒchē' }, { h: '货车', p: 'huòchē' },
      ],
    },
    {
      title: 'Đọc liền nhiều âm tiết (多音节连读)', hint: 'Từ có đuôi 团 (đoàn): nhấn âm cuối.',
      items: [
        { h: '参观团', p: 'cānguāntuán' }, { h: '代表团', p: 'dàibiǎotuán' }, { h: '旅游团', p: 'lǚyóutuán' }, { h: '主席团', p: 'zhǔxítuán' },
      ],
    },
    {
      title: 'Đọc to các cụm từ (朗读): 当, 替, 给, 寄', hint: 'Cụm với 当 (làm), 替/给 (làm thay, cho) và 寄 (gửi).',
      items: [
        { h: '当老师', p: 'dāng lǎoshī' }, { h: '当大夫', p: 'dāng dàifu' }, { h: '当翻译', p: 'dāng fānyì' }, { h: '当律师', p: 'dāng lǜshī' },
        { h: '替朋友借书', p: 'tì péngyou jiè shū' }, { h: '替我还书', p: 'tì wǒ huán shū' }, { h: '给妈妈打电话', p: 'gěi māma dǎ diànhuà' }, { h: '给代表团当翻译', p: 'gěi dàibiǎotuán dāng fānyì' },
        { h: '寄书', p: 'jì shū' }, { h: '寄光盘', p: 'jì guāngpán' }, { h: '寄包裹', p: 'jì bāoguǒ' }, { h: '寄中药', p: 'jì zhōngyào' },
      ],
    },
    {
      title: 'Thay thế: 外贸代表团明天去哪儿? 去长城', hint: 'Thay chủ thể đi.',
      items: [
        { h: '经济代表团明天去长城。', p: 'Jīngjì dàibiǎotuán míngtiān qù Chángchéng.' }, { h: '参观团明天去长城。', p: 'Cānguāntuán míngtiān qù Chángchéng.' },
        { h: '旅行团明天去长城。', p: 'Lǚxíngtuán míngtiān qù Chángchéng.' }, { h: '玛丽和麦克明天去长城。', p: 'Mǎlì hé Màikè míngtiān qù Chángchéng.' },
        { h: '留学生明天去长城。', p: 'Liúxuéshēng míngtiān qù Chángchéng.' },
      ],
    },
    {
      title: 'Thay thế: 你去上海做什么? 参观', hint: 'Thay nơi chốn và mục đích.',
      items: [
        { h: '我去中国留学。', p: 'Wǒ qù Zhōngguó liúxué.' }, { h: '我去邮局寄包裹。', p: 'Wǒ qù yóujú jì bāoguǒ.' }, { h: '我去图书馆查资料。', p: 'Wǒ qù túshūguǎn chá zīliào.' },
        { h: '我去银行换钱。', p: 'Wǒ qù yínháng huàn qián.' }, { h: '我去书店买词典。', p: 'Wǒ qù shūdiàn mǎi cídiǎn.' },
      ],
    },
    {
      title: 'Thay thế: 你们怎么去上海? 坐飞机去', hint: 'Thay phương tiện và cách làm.',
      items: [
        { h: '去书店 / 坐车去', p: 'qù shūdiàn / zuò chē qù' }, { h: '去食堂 / 骑车去', p: 'qù shítáng / qí chē qù' },
        { h: '写信 / 用伊妹儿写信', p: 'xiě xìn / yòng yīmèir xiě xìn' }, { h: '练听力 / 听录音练', p: 'liàn tīnglì / tīng lùyīn liàn' },
        { h: '工作 / 用电脑工作', p: 'gōngzuò / yòng diànnǎo gōngzuò' },
      ],
    },
    {
      title: 'Thay thế: 给我买一张青年报，行吗? 没问题', hint: 'Thay lời nhờ.',
      items: [
        { h: '帮我买几张邮票', p: 'bāng wǒ mǎi jǐ zhāng yóupiào' }, { h: '给我借一本书', p: 'gěi wǒ jiè yì běn shū' }, { h: '帮我浇一下儿花', p: 'bāng wǒ jiāo yíxiàr huā' },
        { h: '给我查一份资料', p: 'gěi wǒ chá yí fèn zīliào' }, { h: '给我们当一下儿翻译', p: 'gěi wǒmen dāng yíxiàr fānyì' },
      ],
    },
    {
      title: 'Thay thế: 老师用汉语讲课还是用英语讲课? 用汉语讲课', hint: 'Thay cặp lựa chọn.',
      items: [
        { h: '你用电脑写信还是用笔写信？', p: 'Nǐ yòng diànnǎo xiě xìn háishi yòng bǐ xiě xìn?' },
        { h: '你回宿舍还是去图书馆？', p: 'Nǐ huí sùshè háishi qù túshūguǎn?' },
        { h: '她用汉语翻译还是用英语翻译？', p: 'Tā yòng Hànyǔ fānyì háishi yòng Yīngyǔ fānyì?' },
      ],
    },
    {
      title: 'Thực hành nói (成段表达)', hint: 'Đọc to cả đoạn.',
      items: [
        { h: '一个外贸代表团来中国。明天他们要去上海参观。我跟他们一起去，给他们当翻译。我们坐飞机去，八号回来。我对玛丽说：“帮我浇一下儿花，行吗？”玛丽说：“行，没问题。”', p: 'Yí ge wàimào dàibiǎotuán lái Zhōngguó. Míngtiān tāmen yào qù Shànghǎi cānguān. Wǒ gēn tāmen yìqǐ qù, gěi tāmen dāng fānyì. Wǒmen zuò fēijī qù, bā hào huílai. Wǒ duì Mǎlì shuō: “Bāng wǒ jiāo yíxiàr huā, xíng ma?” Mǎlì shuō: “Xíng, méi wèntí.”' },
      ],
    },
  ],
  qa: [
    {
      title: 'Chọn từ điền vào chỗ trống (选词填空)',
      items: [
        { q: 'Từ cho sẵn: 给 当 寄 顺便 代表 花 用 坐', hint: 'Mỗi từ dùng một lần.' },
        { q: '(1) 我去邮局 ______ 包裹。', hint: '寄: 我去邮局寄包裹。' },
        { q: '(2) 下午老师来 ______ 我辅导。', hint: '给: 下午老师来给我辅导。' },
        { q: '(3) 你 ______ 给我买个本子，好吗?', hint: '顺便: 你顺便给我买个本子，好吗?' },
        { q: '(4) 我 ______ 伊妹儿给爸爸妈妈写信。', hint: '用: 我用伊妹儿给爸爸妈妈写信。' },
        { q: '(5) 这些 ______ 很香。', hint: '花: 这些花很香。' },
        { q: '(6) 我跟 ______ 团一起去上海参观。', hint: '代表: 我跟代表团一起去上海参观。' },
        { q: '(7) 他们 ______ 飞机去北京旅行。', hint: '坐: 他们坐飞机去北京旅行。' },
        { q: '(8) 我给代表团 ______ 翻译。', hint: '当: 我给代表团当翻译。' },
      ],
    },
    {
      title: 'Sắp xếp từ thành câu (组句)',
      items: [
        { q: 'Ví dụ: 请 给 你 一下儿 我 浇 花 → 请你给我浇一下儿花。', hint: 'Mẫu của sách.' },
        { q: '(1) 跟 我 朋友 去 东西 买 商店 一起 下午 →', hint: '下午我跟朋友一起去商店买东西。' },
        { q: '(2) 代表团 飞机 去 坐 参观 上海 明天 →', hint: '代表团明天坐飞机去上海参观。' },
        { q: '(3) 代表团 她 翻译 给 当 →', hint: '她给代表团当翻译。' },
        { q: '(4) 我 上海 一个 朋友 去 看 →', hint: '我去上海看一个朋友。' },
        { q: '(5) 常 查 上网 资料 田芳 →', hint: '田芳常上网查资料。' },
        { q: '(6) 她 用 伊妹儿 写 朋友 给 信 →', hint: '她用伊妹儿给朋友写信。' },
        { q: '(7) 我 上网 常 聊天儿 跟 朋友 →', hint: '我常上网跟朋友聊天儿。' },
        { q: '(8) 我 张东 和 骑车 去 书店 →', hint: '我和张东骑车去书店。' },
      ],
    },
    {
      title: 'Sửa câu sai (改错句)',
      items: [
        { q: '(1) 她借书去图书馆。', hint: '她去图书馆借书。(động từ đi trước, mục đích sau)' },
        { q: '(2) 我们跟中国同学聊天儿用汉语。', hint: '我们跟中国同学用汉语聊天儿。' },
        { q: '(3) 我找王老师去办公室。', hint: '我去办公室找王老师。' },
        { q: '(4) 你去看电影哪儿?', hint: '你去哪儿看电影?' },
        { q: '(5) 我们都学习汉语来中国。', hint: '我们都来中国学习汉语。' },
        { q: '(6) 珍妮去上海坐火车。', hint: '珍妮坐火车去上海。' },
      ],
    },
    {
      title: 'Nối A và B thành câu (将下列A和B两部分连成一个句子)',
      items: [
        { q: 'Ví dụ: 我去老师家 → 问问题', hint: '我去老师家问问题。' },
        { q: '(1) 麦克不常去图书馆 → 借书', hint: '麦克不常去图书馆借书。' },
        { q: '(2) 她来中国 → 学习汉语', hint: '她来中国学习汉语。' },
        { q: '(3) 我们常常去超市 → 买东西', hint: '我们常常去超市买东西。' },
        { q: '(4) 我跟玛丽去书店 → 买《汉英词典》', hint: '我跟玛丽去书店买《汉英词典》。' },
        { q: '(5) 山本想去北京 → 旅行', hint: '山本想去北京旅行。' },
        { q: '(6) 玛丽中午要去银行 → 换钱', hint: '玛丽中午要去银行换钱。' },
        { q: '(7) 我要去办公室 → 找老师', hint: '我要去办公室找老师。' },
        { q: '(8) 田芳上网收发 → 伊妹儿', hint: '田芳上网收发伊妹儿。' },
        { q: '(9) 张东要去邮局 → 寄包裹', hint: '张东要去邮局寄包裹。' },
        { q: '(10) 明天留学生去博物馆 → 参观', hint: '明天留学生去博物馆参观。' },
      ],
    },
    {
      title: 'Hoàn thành hội thoại (完成会话)',
      items: [
        { q: '(1) A: 顺便替我办件事，行吗?   B: ______ ? 你说吧。   A: 帮我买一本杂志。   B: ______ 。', hint: 'B: 什么事? · B: 行，没问题。 (hoặc 好的)' },
        { q: '(2) A: ______ ?   B: 我明天去北京。   A: ______ ?   B: 坐飞机去。   A: ______ ?   B: 不，我跟代表团一起去，我给他们当翻译。   A: ______ ?   B: 星期一回来。', hint: 'A: 你什么时候去北京? · A: 你怎么去? · A: 你去北京旅行吗? · A: 你什么时候回来?' },
      ],
    },
  ],
}
