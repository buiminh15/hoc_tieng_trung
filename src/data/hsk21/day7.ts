import type { DayContent, Ex, ErrQ } from './types'

/**
 * Tuần 2 · Thứ Ba: Giới từ (1) (介词一), sách trang 112–124.
 * Phần dịch tiếng Việt và pinyin do app tự thêm.
 */

const x = (h: string, p: string, vi: string, note?: string, tag?: string): Ex => ({ h, p, vi, note, tag })
const e = (h: string, vi: string, note?: string, tag?: string): Ex => ({ h, vi, note, tag })
const seg = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'segment', parts, answer, topic, fix, why })
const sen = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'sentence', parts, answer, topic, fix, why })

export const day7: DayContent = {
  intro:
    'Giới từ là phần ngữ pháp rất quan trọng và cũng dễ sai nhất trong tiếng Hán. Dùng thiếu, dùng thừa hay dùng sai giới từ đều tạo thành câu sai. Hôm nay học cấu trúc cơ bản "giới từ + tân ngữ + động/tính từ", giới từ "在" đi với phương vị từ, và nhóm 从 / 自 / 自从 / 由 / 于. Nhớ rằng giới từ và tân ngữ phía sau nó là một khối, đề thi hay hỏi xem tân ngữ đó đã đủ chưa.',

  focusTitle: 'Ba phần học hôm nay',

  cheat: {
    title: 'Bảng tra nhanh: các nhóm giới từ thường dùng',
    lead: 'Giới từ giúp động từ hoặc tính từ dẫn ra tân ngữ. Cách nhớ: xem giới từ dẫn ra thời gian, nơi chốn, hướng, đối tượng, căn cứ hay nguyên nhân.',
    head: ['Chức năng', 'Giới từ thường dùng'],
    rows: [
      { key: 'Thời gian', cells: ['从, 自, 由, 打, 自从, 在, 于, 当, 离, 距'] },
      { key: 'Nơi chốn', cells: ['从, 自, 由, 打, 在, 于, 离, 距'] },
      { key: 'Phương hướng', cells: ['朝, 向, 往, 沿(着), 顺(着)'] },
      { key: 'Đối tượng', cells: ['和, 跟, 同, 与, 把, 将, 被, 叫, 让, 对, 对于, 关于, 给, 为, 替, 朝, 向, 比, 就, 连, 除了, 除'] },
      { key: 'Căn cứ', cells: ['按, 按照, 依, 依照, 照, 据, 根据, 以, 凭, 由, 拿, 趁'] },
      { key: 'Nguyên nhân, mục đích', cells: ['为了, 为, 由, 以'] },
    ],
  },

  sections: [
    // ───────────────────────── 介词的语法结构 ─────────────────────────
    {
      id: 'jieci-jiegou', hanzi: '介词的语法结构', pinyin: 'jiècí de yǔfǎ jiégòu', title: 'Cấu trúc ngữ pháp của giới từ',
      intro: 'Cấu trúc: 介词 + 宾语 + 动/形. Trong cấu trúc này "động/tính từ" có bốn trường hợp. Ba trường hợp đầu bắt buộc phải dùng giới từ để dẫn tân ngữ; chỉ trường hợp thứ tư là không bắt buộc.',
      groups: [{
        patterns: [
          { formula: '〈介〉 + 〈宾〉 + 〈动〉(不能带宾语的动词)', title: '1. Động từ không mang được tân ngữ', note: 'Ví dụ: 合作, 着想, 旅行. Muốn nói đối tượng phải dùng giới từ.', verbs: ['合作', '着想', '旅行'], examples: [
            x('我[跟]他合作很多年了。', 'Wǒ gēn tā hézuò hěn duō nián le.', 'Tôi hợp tác với anh ấy nhiều năm rồi.'),
            x('他很会[为]别人着想。', 'Tā hěn huì wèi biérén zhuóxiǎng.', 'Anh ấy rất biết nghĩ cho người khác.'),
            x('他[到]上海旅行去了。', 'Tā dào Shànghǎi lǚxíng qù le.', 'Anh ấy đi du lịch Thượng Hải rồi.'),
          ] },
          { formula: '〈介〉 + 〈宾〉 + 〈形〉(tính từ không mang tân ngữ)', title: '2. Tính từ không mang được tân ngữ', note: 'Ví dụ: 满意, 积极. Muốn nói đối tượng phải dùng giới từ.', verbs: ['满意', '积极'], examples: [
            x('我很满意[这件衣服]。→ 我[对]这件衣服很满意。', 'Wǒ duì zhè jiàn yīfu hěn mǎnyì.', 'Tôi rất hài lòng với bộ quần áo này.'),
            x('他[对]这种事很积极。', 'Tā duì zhè zhǒng shì hěn jījí.', 'Anh ấy rất tích cực với việc này.'),
          ] },
          { formula: '〈介〉 + 〈宾〉 + 离合词', title: '3. Động từ ly hợp', note: 'Ví dụ: 见面, 说话, 结婚. Đối tượng phải dùng giới từ như 跟, 和, 同.', verbs: ['见面', '说话', '结婚'], examples: [
            x('昨天我[跟]他见了面。', 'Zuótiān wǒ gēn tā jiàn le miàn.', 'Hôm qua tôi đã gặp anh ấy.'),
          ] },
          { formula: '〈动〉 + 〈宾〉₁ + 〈宾〉₂  /  〈介〉 + 〈宾〉', title: '4. Động từ nhấn mạnh tân ngữ, hoặc mang hai tân ngữ', note: 'Khi động từ cần nhấn mạnh tân ngữ, hoặc mang hai tân ngữ, có thể dùng giới từ, nhưng không bắt buộc.', examples: [
            x('我们[对]公司招聘员工的条件讨论一下。', 'Wǒmen duì gōngsī zhāopìn yuángōng de tiáojiàn tǎolùn yíxià.', 'Chúng ta thảo luận một chút về điều kiện tuyển nhân viên của công ty.', 'Nhấn mạnh đối tượng.'),
            x('他[把]这本书送给了我。', 'Tā bǎ zhè běn shū sòng gěi le wǒ.', 'Anh ấy tặng tôi cuốn sách này.'),
          ] },
        ],
      }],
    },
    // ───────────────────────── 在 + 方位词 ─────────────────────────
    {
      id: 'zai-fangwei', hanzi: '"在"与方位词', pinyin: '“zài” yǔ fāngwèicí', title: 'Giới từ 在 và phương vị từ',
      intro: '"在" là giới từ dùng nhiều nhất. Cách dùng: "在" + nơi chốn hoặc phạm vi. Khi tân ngữ phía sau không phải danh từ chỉ nơi chốn thì phải có thêm phương vị từ (上, 下, 中, 里, 内, 外, 前, 后, 中间, 之间, 之前, 之后…), biểu thị thời gian, nơi chốn, phạm vi, điều kiện, phương diện.',
      groups: [
        {
          title: '1. "在" + nơi chốn, phương vị từ',
          patterns: [
            { formula: '在 + 〈处所〉/〈范围〉', title: 'Chỉ nơi chốn, phạm vi', note: 'Nếu danh từ sau "在" là danh từ chỉ nơi chốn thì dùng "在 + nơi chốn". Nếu không phải thì phải thêm phương vị từ.', examples: [
              x('大家先[在这儿]休息一下。', 'Dàjiā xiān zài zhèr xiūxi yíxià.', 'Mọi người nghỉ một chút ở đây trước.'),
              x('她[在同学中]很有人缘。', 'Tā zài tóngxué zhōng hěn yǒu rényuán.', 'Cô ấy rất được lòng bạn học.', 'Phạm vi.'),
              x('这件事你一定要记[在脑子里]，千万别忘了。', 'Zhè jiàn shì nǐ yídìng yào jì zài nǎozi lǐ, qiānwàn bié wàng le.', 'Việc này bạn nhất định phải khắc ghi trong đầu, đừng quên.'),
            ] },
            { formula: '在 + 〈名〉 + 方位词 (上/下/中/里/内/外/前/后/之前/之后/中间/之间)', title: 'Cùng phương vị từ: thời gian, nơi chốn, phạm vi, điều kiện', note: '"在" thường cùng phương vị từ "上, 下, 中, 里, 内, 外, 前, 后, 中间, 之间, 之前, 之后" biểu thị thời gian, nơi chốn, phạm vi, điều kiện, phương diện.', examples: [
              x('[在回国之前]，我们还见过面。', 'Zài huíguó zhīqián, wǒmen hái jiàn guo miàn.', 'Trước khi về nước chúng tôi còn gặp nhau.', 'Thời gian.'),
              x('他们俩[在阅览室里]整整看了一天的书。', 'Tāmen liǎ zài yuèlǎnshì lǐ zhěngzhěng kàn le yì tiān de shū.', 'Hai người họ đọc sách cả ngày trong phòng đọc.', 'Nơi chốn.'),
              x('[在众多朋友之中]，我们俩最要好。', 'Zài zhòngduō péngyou zhī zhōng, wǒmen liǎ zuì yàohǎo.', 'Trong rất nhiều bạn, hai chúng tôi thân nhất.', 'Phạm vi.'),
            ] },
          ],
        },
        {
          title: '2. "在" trước và sau động từ',
          patterns: [
            { formula: '在 + nơi chốn + 〈动〉  /  〈动〉 + 在 + nơi chốn', title: 'Vị trí trước/sau động từ', note: '"在" dùng trước hoặc sau động từ đều được. Các động từ thường đi cùng: 出生, 生长, 住, 发生 (đều được: trước hoặc sau).', verbs: ['出生', '生长', '住', '发生'], examples: [
              x('他出生[在]韩国。(= 他[在]韩国出生)', 'Tā chūshēng zài Hánguó. (= Tā zài Hánguó chūshēng.)', 'Anh ấy sinh ở Hàn Quốc.'),
              x('万物都生长[在]阳光下。(= 万物都[在]阳光下生长)', 'Wànwù dōu shēngzhǎng zài yángguāng xià.', 'Vạn vật đều sinh trưởng dưới ánh nắng.'),
              x('这件事发生[在]去年冬天。(= 这件事[在]去年冬天发生)', 'Zhè jiàn shì fāshēng zài qùnián dōngtiān.', 'Việc này xảy ra vào mùa đông năm ngoái.'),
            ] },
            { formula: '〈动〉 + 在 + nơi chốn (bổ ngữ)', title: 'Chỉ đứng sau động từ: bổ ngữ', note: '"在" có lúc chỉ đứng sau động từ, làm bổ ngữ. Động từ thường đi cùng: 掉, 扔, 打, 泡, 照, 沉浸, 坐落.', verbs: ['掉', '扔', '打', '泡', '照', '沉浸', '坐落'], examples: [
              x('你的钱掉[在地上]了。', 'Nǐ de qián diào zài dìshang le.', 'Tiền của bạn rơi xuống đất rồi.'),
              x('他把书都扔[在地上]了。', 'Tā bǎ shū dōu rēng zài dìshang le.', 'Anh ta ném hết sách xuống đất.'),
              x('爸爸一巴掌打[在孩子屁股上]。', 'Bàba yì bāzhang dǎ zài háizi pìgu shang.', 'Bố tát một cái vào mông con.'),
              x('阳光照[在身上]暖洋洋的。', 'Yángguāng zhào zài shēnshang nuǎnyángyáng de.', 'Ánh nắng chiếu lên người ấm áp.'),
              x('观众们沉浸[在优美的音乐声中]。', 'Guānzhòngmen chénjìn zài yōuměi de yīnyuè shēng zhōng.', 'Khán giả đắm chìm trong tiếng nhạc du dương.'),
              x('我们学校就坐落[在市中心]。', 'Wǒmen xuéxiào jiù zuòluò zài shì zhōngxīn.', 'Trường chúng tôi nằm ngay trung tâm thành phố.'),
            ] },
          ],
        },
        {
          title: '3. Ba cấu trúc cố định với "在"',
          patterns: [
            { formula: '在……上 / 方面', title: '在……上 / 方面: phương diện, phạm vi', note: 'Chủ yếu biểu thị phương diện, phạm vi. Trong cấu trúc thường có các động từ như "学习", "工作", "生活", cũng có thể thêm các danh từ "基础", "问题", "事情", "会议", "课堂", "历史".', examples: [
              x('他[在椅子上]坐着。', 'Tā zài yǐzi shang zuò zhe.', 'Anh ấy ngồi trên ghế.', 'Phạm vi nơi chốn.'),
              x('这种事[在历史上]很常见。', 'Zhè zhǒng shì zài lìshǐ shang hěn chángjiàn.', 'Việc này rất thường gặp trong lịch sử.', 'Phạm vi thời gian.'),
              x('他[在对外汉语教学方面]是个专家。', 'Tā zài duìwài Hànyǔ jiàoxué fāngmiàn shì ge zhuānjiā.', 'Anh ấy là chuyên gia về dạy tiếng Hán cho người nước ngoài.'),
            ] },
            { formula: '在……中', title: '在……中: môi trường, phạm vi hoặc quá trình', note: 'Chủ yếu biểu thị môi trường, phạm vi hoặc quá trình hoạt động. Thường gặp động từ "交往", "交谈", "讨论", "调查" và danh từ "心目", "印象", "脑海".', examples: [
              x('青年人要[在艰苦中]奋斗，[在奋斗中]创业，[在创业中]成长。', 'Qīngnián rén yào zài jiānkǔ zhōng fèndòu, zài fèndòu zhōng chuàngyè, zài chuàngyè zhōng chéngzhǎng.', 'Người trẻ phải phấn đấu trong gian khổ, lập nghiệp trong phấn đấu, trưởng thành trong lập nghiệp.', 'Môi trường.'),
              x('[在我们班的同学中]，他最努力。', 'Zài wǒmen bān de tóngxué zhōng, tā zuì nǔlì.', 'Trong số bạn học lớp chúng tôi, anh ấy chăm chỉ nhất.', 'Phạm vi.'),
              x('[在留学生活中]，我遇到过很多困难。', 'Zài liúxué shēnghuó zhōng, wǒ yùdào guo hěn duō kùnnan.', 'Trong cuộc sống du học, tôi gặp rất nhiều khó khăn.', 'Quá trình.'),
              x('[在会议进行的过程中]，不能接听电话。', 'Zài huìyì jìnxíng de guòchéng zhōng, bù néng jiētīng diànhuà.', 'Trong quá trình diễn ra cuộc họp không được nghe điện thoại.', 'Quá trình.'),
            ] },
            { formula: '在……下', title: '在……下: nơi chốn, điều kiện tiên quyết', note: 'Chủ yếu biểu thị nơi chốn, tiền đề hoặc tình huống. Động từ thường gặp: 帮助, 照顾, 关心, 关怀, 鼓励, 支持, 关照, 努力, 督促, 抚养, 培养, 教育, 指导, 指点. Danh từ thường gặp: 前提, 条件, 环境, 背景, 情况, 状况, 趋势.', verbs: ['帮助', '照顾', '关心', '鼓励', '支持', '指导', '培养'], examples: [
              x('我在[楼下]等你。', 'Wǒ zài lóuxià děng nǐ.', 'Tôi đợi bạn ở dưới lầu.', 'Nơi chốn.'),
              x('[在大家的帮助下]，他很快就适应了这里的生活。', 'Zài dàjiā de bāngzhù xià, tā hěn kuài jiù shìyìng le zhèlǐ de shēnghuó.', 'Nhờ sự giúp đỡ của mọi người, anh nhanh chóng thích nghi cuộc sống ở đây.', 'Điều kiện.'),
              x('[在困难的情况下]，一个人往往能发挥出最大的潜力。', 'Zài kùnnan de qíngkuàng xià, yí ge rén wǎngwǎng néng fāhuī chū zuìdà de qiánlì.', 'Trong hoàn cảnh khó khăn, con người thường phát huy được tiềm năng lớn nhất.', 'Tình huống.'),
            ] },
          ],
        },
      ],
    },
    // ───────────────────────── 从/自/自从/由/于 ─────────────────────────
    {
      id: 'cong-zi-you-yu', hanzi: '从·自·自从·由·于', pinyin: 'cóng · zì · zìcóng · yóu · yú', title: 'Phân biệt 从 / 自 / 自从 / 由 / 于',
      intro: 'Nhóm giới từ chỉ điểm bắt đầu, nguồn gốc, căn cứ. Điểm khác nằm ở văn phong (khẩu ngữ hay văn viết) và ở những cụm cố định như "由……组成", "于 + thời gian/nơi chốn".',
      groups: [
        {
          title: '1. 从',
          patterns: [
            { formula: '从 + điểm bắt đầu (+ 到/往/向/以后)', title: '(1) Điểm bắt đầu', note: 'Biểu thị điểm bắt đầu. Hay đi với "到", "往", "向", "以后". Chỉ nơi chốn, nguồn gốc, thời gian, phạm vi, phát triển, thay đổi.', examples: [
              x('郝局[从]这儿往南走。', 'Dōu jú cóng zhèr wǎng nán zǒu.', 'Đi từ đây về phía nam.'),
              x('这本书我[从头到尾]都看完了。', 'Zhè běn shū wǒ cóng tóu dào wěi dōu kàn wán le.', 'Cuốn sách này tôi đọc hết từ đầu đến cuối.'),
              x('[从]不会到会，我付出了很多努力。', 'Cóng bú huì dào huì, wǒ fùchū le hěn duō nǔlì.', 'Từ chưa biết đến biết, tôi đã bỏ nhiều công sức.'),
            ] },
            { formula: '从 + nơi chốn (đi qua)', title: '(2) Đường đi, địa điểm đi qua', note: 'Chỉ tuyến đường, nơi đi ngang qua.', examples: [
              x('[从]小路走比较近。', 'Cóng xiǎolù zǒu bǐjiào jìn.', 'Đi đường nhỏ thì gần hơn.'),
              x('去学校一定要[从]这儿经过。', 'Qù xuéxiào yídìng yào cóng zhèr jīngguò.', 'Đến trường nhất định phải đi qua đây.'),
              x('列车[从]隧道里穿过。', 'Lièchē cóng suìdào lǐ chuānguò.', 'Tàu chạy xuyên qua đường hầm.'),
            ] },
            { formula: '从 + nguồn', title: '(3) Nguồn gốc', note: 'Biểu thị nguồn gốc.', examples: [
              x('我[从]他的话中明白了很多人生的道理。', 'Wǒ cóng tā de huà zhōng míngbai le hěn duō rénshēng de dàolǐ.', 'Từ lời anh ấy tôi hiểu nhiều đạo lý cuộc sống.'),
            ] },
            { formula: '从 + căn cứ + 〈动〉', title: '(4) Căn cứ, dựa vào', note: 'Biểu thị chỗ dựa, căn cứ.', examples: [
              x('[从]脚步声就能听出是你。', 'Cóng jiǎobù shēng jiù néng tīng chū shì nǐ.', 'Nghe tiếng bước chân là biết ngay bạn.'),
              x('[从]实际情况出发，解决问题。', 'Cóng shíjì qíngkuàng chūfā, jiějué wèntí.', 'Xuất phát từ tình hình thực tế để giải quyết vấn đề.'),
              x('[从]工作上考虑，你搬到那儿比较方便。', 'Cóng gōngzuò shang kǎolǜ, nǐ bān dào nàr bǐjiào fāngbiàn.', 'Xét về công việc, bạn dọn đến đó tiện hơn.'),
              x('[从]气象云图来看，近期没有降水。', 'Cóng qìxiàng yúntú lái kàn, jìnqī méiyǒu jiàngshuǐ.', 'Nhìn từ bản đồ mây khí tượng, gần đây không có mưa.'),
            ] },
          ],
        },
        {
          title: '2. 由 so với 从',
          patterns: [
            { formula: '由 + điểm bắt đầu / tuyến / nguồn  (văn viết)', title: '(1) Cách dùng gần giống 从, nghiêng văn viết', note: 'Khi biểu thị "điểm bắt đầu, tuyến đường, nguồn gốc" thì cách dùng cơ bản như nhau, nhưng "由" thường dùng trong văn viết hơn, nên hay tạo thành cấu trúc cố định "由……组成/构成/双音节动词 + 而成".', examples: [
              x('F4乐队[由]四个帅气的大男孩组成。', 'F4 yuèduì yóu sì ge shuàiqì de dà nánhái zǔchéng.', 'Nhóm F4 gồm bốn chàng trai đẹp trai.'),
              x('幸福的家庭[由]爱、理解和信任构成。', 'Xìngfú de jiātíng yóu ài, lǐjiě hé xìnrèn gòuchéng.', 'Gia đình hạnh phúc được cấu thành bởi tình yêu, sự thấu hiểu và tin tưởng.'),
              x('汉字是[由]图画文字演变而成的。', 'Hànzì shì yóu túhuà wénzì yǎnbiàn ér chéng de.', 'Chữ Hán do chữ tượng hình diễn biến mà thành.'),
            ] },
            { formula: '由 + 〈人〉 + 〈动〉 (主持, 负责, 出版, 翻译, 编著, 改编, 设计, 决定)', title: '(2a) Nhấn mạnh việc do ai đảm nhiệm', note: '"由" nhấn mạnh việc đó do ai làm. Động từ thường đi cùng: 主持, 负责, 出版, 翻译, 编著, 改编, 设计, 决定. Những trường hợp này không thể dùng "从".', verbs: ['主持', '负责', '出版', '翻译', '编著', '设计', '决定'], examples: [
              x('这次会议[由]我主持。', 'Zhè cì huìyì yóu wǒ zhǔchí.', 'Cuộc họp lần này do tôi chủ trì.'),
              x('我的事[由]我自己决定。', 'Wǒ de shì yóu wǒ zìjǐ juédìng.', 'Việc của tôi do tự tôi quyết định.'),
            ] },
            { formula: '由 + ……引起 / 导致 / 所致 / 造成 / 而起', title: '(2b) Nguyên nhân', note: '"由" biểu thị nguyên nhân. Thường đi với "引起", "导致", "所致", "造成", "而起".', examples: [
              x('[由]环境污染导致的问题越来越多，越来越严重。', 'Yóu huánjìng wūrǎn dǎozhì de wèntí yuè lái yuè duō, yuè lái yuè yánzhòng.', 'Các vấn đề do ô nhiễm môi trường gây ra ngày càng nhiều, ngày càng nghiêm trọng.'),
            ] },
            { formula: '由此可见 / 由此可知', title: '(2c) Từ điều trước rút ra kết luận', note: '"由此可见", "由此可知" biểu thị từ điều vừa nói rút ra một kết luận.', examples: [
              x('“不到长城非好汉”，[由此可见]人们对长城的向往与崇敬。', '“Bú dào Chángchéng fēi hǎohàn”, yóu cǐ kějiàn rénmen duì Chángchéng de xiàngwǎng yǔ chóngjìng.', '"Không đến Trường Thành không phải hảo hán", từ đó thấy người ta ngưỡng mộ và tôn kính Trường Thành.'),
            ] },
          ],
        },
        {
          title: '3. 自, 自从, 于',
          patterns: [
            { formula: '自 + nơi chốn/thời gian (văn viết)', title: '自: tương đương 从, thường dùng văn viết', note: '(1) Biểu thị điểm bắt đầu của nơi chốn, đi cùng từ chỉ nơi chốn, phương vị. ① Đặt trước động từ. ② Đặt sau động từ, thường đi với: 寄, 来, 选, 出, 抄, 录, 摘, 译, 引. ③ Dùng trong cấu trúc "自……而……", biểu thị sự thay đổi trạng thái. (2) Biểu thị điểm bắt đầu của thời gian; phía sau hay có danh từ, động từ hoặc câu nhỏ.', examples: [
              x('本次列车[自]北京开往上海。', 'Běn cì lièchē zì Běijīng kāi wǎng Shànghǎi.', 'Chuyến tàu này chạy từ Bắc Kinh tới Thượng Hải.'),
              x('这封信寄[自]上海。', 'Zhè fēng xìn jì zì Shànghǎi.', 'Lá thư này gửi từ Thượng Hải.'),
              x('这句话引[自]《论语》。', 'Zhè jù huà yǐn zì 《Lúnyǔ》.', 'Câu này trích từ "Luận Ngữ".'),
              x('声音[自]远而近，越来越大。', 'Shēngyīn zì yuǎn ér jìn, yuè lái yuè dà.', 'Âm thanh từ xa đến gần, càng lúc càng to.'),
              x('[自]古以来，[自]此以后，[自]明天起，[自]他走后', 'Zì gǔ yǐlái, zì cǐ yǐhòu, zì míngtiān qǐ, zì tā zǒu hòu', 'Từ xưa đến nay, từ đó về sau, từ ngày mai, từ khi anh đi', 'Thời gian.'),
            ] },
            { formula: '自从 + 〈过去时间〉', title: '自从: điểm bắt đầu thời gian trong quá khứ', note: 'Biểu thị điểm bắt đầu thời gian trong quá khứ.', examples: [
              x('[自从]他离开北京，我们就没有联系过。', 'Zìcóng tā líkāi Běijīng, wǒmen jiù méiyǒu liánxì guo.', 'Từ khi anh rời Bắc Kinh, chúng tôi không liên lạc nữa.'),
              x('[自从]大学毕业以后，我们就没见过面。', 'Zìcóng dàxué bìyè yǐhòu, wǒmen jiù méi jiàn guo miàn.', 'Từ sau khi tốt nghiệp đại học, chúng tôi không gặp nhau.'),
            ] },
            { formula: '于 + 〈名〉/〈代〉 + 〈动〉  (trước động từ)', title: '于 (1): đứng trước động từ', note: '① Biểu thị thời gian, tương đương "在". ② Biểu thị phạm vi, tương đương "在", đi cùng phương vị từ, đặt trước động từ hoặc chủ ngữ. ③ Biểu thị đối tượng, tương đương "对". Cấu trúc thường gặp: "于 + danh từ / đại từ + động từ".', examples: [
              x('他已[于]三日前离开北京。', 'Tā yǐ yú sān rì qián líkāi Běijīng.', 'Anh ấy đã rời Bắc Kinh ba ngày trước.'),
              x('他总[于]无意中流露出对家乡的怀念。', 'Tā zǒng yú wúyì zhōng liúlù chū duì jiāxiāng de huáiniàn.', 'Anh luôn vô tình bộc lộ nỗi nhớ quê.'),
              x('现在的情况[于]我们有利。', 'Xiànzài de qíngkuàng yú wǒmen yǒulì.', 'Tình hình hiện nay có lợi cho chúng tôi.'),
              x('环保[于]公于私都有好处。', 'Huánbǎo yú gōng yú sī dōu yǒu hǎochu.', 'Bảo vệ môi trường có lợi cả công lẫn tư.'),
            ] },
            { formula: '〈动〉/〈形〉 + 于 + ……  (sau động từ, tính từ)', title: '于 (2): đứng sau động từ, tính từ', note: '① Nơi chốn, nguồn gốc (= 在, 从, 自) + nơi chốn. ② Thời gian (= 在). ③ Phương hướng, mục tiêu, sau thường là danh từ, động từ hoặc tính từ. ④ Đối tượng (= 对), sau là danh từ hoặc đại từ. ⑤ Phương diện, nguyên nhân, mục đích, thường dạng "tính từ / động từ + 于 + động từ". ⑥ Bị động. ⑦ So sánh.', examples: [
              x('他1996年毕业[于]北京大学。', 'Tā yī jiǔ jiǔ liù nián bìyè yú Běijīng Dàxué.', 'Anh tốt nghiệp Đại học Bắc Kinh năm 1996.', 'Nơi chốn.'),
              x('中华人民共和国成立[于]1949年。', 'Zhōnghuá Rénmín Gònghéguó chénglì yú yī jiǔ sì jiǔ nián.', 'Nước Cộng hòa Nhân dân Trung Hoa thành lập năm 1949.', 'Thời gian.'),
              x('气候趋向[于]温暖。', 'Qìhòu qūxiàng yú wēnnuǎn.', 'Khí hậu có xu hướng ấm lên.', 'Hướng.'),
              x('不要满足[于]现状，要继续努力。', 'Bú yào mǎnzú yú xiànzhuàng, yào jìxù nǔlì.', 'Đừng thỏa mãn với hiện trạng, hãy tiếp tục cố gắng.', 'Đối tượng.'),
              x('为了便[于]计算，小数点后的数字省略。', 'Wèile biàn yú jìsuàn, xiǎoshùdiǎn hòu de shùzì shěnglüè.', 'Để tiện tính toán, bỏ các chữ số sau dấu thập phân.', 'Mục đích.'),
              x('这次比赛，主队败[于]客队。', 'Zhè cì bǐsài, zhǔduì bài yú kèduì.', 'Trận này đội nhà thua đội khách.', 'Bị động.'),
              x('今年春季气温高[于]往年。', 'Jīnnián chūnjì qìwēn gāo yú wǎngnián.', 'Nhiệt độ mùa xuân năm nay cao hơn năm trước.', 'So sánh.'),
            ] },
          ],
        },
      ],
    },
  ],

  boards: [
    {
      id: 'jieci-jiegou-board', hanzi: '介词的语法结构', title: 'Cấu trúc ngữ pháp của giới từ',
      rows: [
        { label: 'Công thức', formulas: ['〈介〉 + 〈宾〉 + 〈动〉/〈形〉'], text: 'Trong cấu trúc này, động từ/tính từ có bốn trường hợp: (1) động từ không mang tân ngữ: 合作, 着想, 旅行; (2) tính từ không mang tân ngữ: 满意, 积极; (3) động từ ly hợp: 见面, 说话, 结婚; (4) động từ nhấn mạnh tân ngữ hoặc mang hai tân ngữ. Trừ trường hợp 4, các trường hợp còn lại đều bắt buộc dùng giới từ.', examples: [e('我[跟]他合作很多年了。', 'Tôi hợp tác với anh ấy nhiều năm.'), e('他很会[为]别人着想。', 'Anh ấy rất biết nghĩ cho người khác.'), e('他[到]上海旅行去了。', 'Anh ấy đi du lịch Thượng Hải.'), e('我[对]这件衣服很满意。', 'Tôi rất hài lòng bộ này.'), e('他[对]这种事很积极。', 'Anh ấy rất tích cực với việc này.'), e('昨天我[跟]他见了面。', 'Hôm qua tôi đã gặp anh ấy.'), e('我们[对]公司招聘员工的条件讨论一下。', 'Ta thảo luận về điều kiện tuyển người.'), e('他[把]这本书送给了我。', 'Anh ấy tặng tôi cuốn sách này.')],
          points: [{ text: 'Điểm thi: giới từ và tân ngữ của nó là một khối; "满意" là tính từ không mang tân ngữ, "毕业" là động từ không mang tân ngữ, "介绍" khi nói với ai phải dùng "向".', fixes: [{ wrong: '从来不想添麻烦别人', right: '从来不想给别人添麻烦', why: '"添麻烦" không thể trực tiếp mang tân ngữ chỉ người, phải dùng giới từ "给".', ref: 'Kiểm tra 1 · D' }, { wrong: '我介绍(田丽)他们说', right: '我向他们介绍说', why: 'Đối tượng của "介绍" (nói với ai) phải dùng giới từ "向".', ref: 'Kiểm tra 2 · C' }] }],
        },
        { label: 'Điểm thi', text: 'Giới từ dẫn tân ngữ và giới từ là một khối. Trong đề thi phải chú ý tân ngữ sau giới từ có đủ không.' },
        { label: 'Ví dụ khác', points: [{ text: 'Cấu trúc "以……的方式" nghĩa là "用……的办法"; thiếu "的方式" thì câu bị cụt.', fixes: [{ wrong: '以从中国引进师资，开始发展汉语教学', right: '以从中国引进师资的方式开始发展汉语教学', ref: 'Kiểm tra 3 · D' }] }] },
      ],
    },
    {
      id: 'zai-board', hanzi: '介词"在"', title: 'Giới từ 在',
      rows: [
        { label: 'Điểm thi 1', formulas: ['在 + 处所/范围'], text: 'Nếu danh từ sau "在" là danh từ chỉ nơi chốn thì dùng trực tiếp "在 + nơi chốn". Nếu không phải danh từ chỉ nơi chốn thì phải thêm phương vị từ.', examples: [e('我住[在]北京。', 'Tôi sống ở Bắc Kinh.'), e('这件事你一定要记[在脑子里]，千万别忘了。', 'Việc này bạn nhất định phải ghi vào đầu.')] },
        { label: 'Điểm thi 2', text: '"在……" có thể làm trạng ngữ trước động từ, cũng có thể làm bổ ngữ sau động từ. Có động từ cho phép cả trước lẫn sau: 生长, 出生, 住, 发生. Có động từ chỉ đứng sau: 掉, 扔, 打, 映射, 沉浸, 坐落.' },
        { label: 'Cố định', formulas: ['在……方面/上', '在……(过程)中', '在……(条件/情况)下'], examples: [e('我希望相关技术的发展能为中国乃至亚洲在气候环境保护方面做出贡献。', 'Tôi hy vọng sự phát triển của công nghệ liên quan có thể đóng góp cho Trung Quốc và cả châu Á về bảo vệ môi trường khí hậu.', '在……方面 (phương diện, phạm vi)'), e('我跟中国同学在学习、玩耍、交流的过程中建立了深厚的友谊。', 'Tôi cùng bạn học Trung Quốc trong quá trình học, chơi, giao lưu đã xây dựng tình bạn sâu sắc.', '在……中 (quá trình, phạm vi)'), e('非语言沟通包括眼神、表情、手势、姿态等，在不同文化背景下差异很大。', 'Giao tiếp phi ngôn ngữ gồm ánh mắt, nét mặt, cử chỉ, tư thế…, khác nhau rất nhiều trong bối cảnh văn hóa khác nhau.', '在……下 (điều kiện, tình huống)')],
          points: [{ text: 'Điểm thi: "在 + 情况" phải có phương vị từ "下".', fixes: [{ wrong: '在身体不舒服的情况，坚持为余先生的书写完了序言', right: '在身体不舒服的情况下，坚持为余先生的书写完了序言', ref: 'Kiểm tra 4 · C' }] }] },
      ],
    },
    {
      id: 'cong-board', hanzi: '辨析：从、自、自从、由、于', title: 'Phân biệt 从, 自, 自从, 由, 于',
      rows: [
        { label: '从', text: 'Cách dùng rộng nhất: từ A đến B (nơi chốn, thời gian, phạm vi, nguồn gốc, căn cứ).', examples: [e('[从]我家到学校需要十分钟。', 'Từ nhà tôi đến trường mất mười phút.')] },
        { label: '自从', text: '自从: chỉ giới hạn dùng để biểu thị điểm bắt đầu thời gian trong quá khứ.', examples: [e('[自从]到中国留学以来，我一直没和家人团聚过。', 'Từ khi du học Trung Quốc đến nay, tôi chưa đoàn tụ với gia đình.')] },
        { label: '自', text: '自: nghiêng văn viết, như 从. 自 + 书面语.' },
        { label: '由', text: '由 + người + động từ (主持, 负责…). 由……组成/构成. 由 + nguyên nhân (引起, 导致…).', examples: [e('地球围绕太阳[由]西向东转。(从)', 'Trái đất quay quanh mặt trời từ tây sang đông.', '由 + điểm bắt đầu, tuyến đường (dùng như 从)'), e('这个小组[由]五个人组成。(×从)', 'Nhóm này gồm năm người.', 'Cố định "由……组成", không dùng 从'), e('我的事[由]我自己决定。(×从)', 'Việc của tôi do tự tôi quyết định.', 'Người chịu trách nhiệm: dùng 由, không dùng 从')],
          points: [{ text: 'Điểm thi: "胚是由胚根、胚芽、胚轴和子叶组成的" — "组成" phải có "由".', fixes: [{ wrong: '胚是从胚根、胚芽、胚轴和子叶组成的', right: '胚是由胚根、胚芽、胚轴和子叶组成的', ref: 'Kiểm tra 5 · B' }] }] },
        { label: '于', formulas: ['于 + 时间/处所 + 〈动〉', '〈动〉/〈形〉 + 于 + 宾语'], examples: [e('我于2000年来到中国。', 'Tôi đến Trung Quốc năm 2000.'), e('我们公司成立于2003年。', 'Công ty chúng tôi thành lập năm 2003.', '= 在……时间'), e('他出生于军人家庭。', 'Anh sinh ra trong gia đình quân nhân.', '= 在……处所'), e('他来自于韩国。', 'Anh đến từ Hàn Quốc.', '= 从……'), e('继续努力，别满足于这次考试的成绩。', 'Hãy tiếp tục cố gắng, đừng thỏa mãn với thành tích kỳ thi này.', '= 对……'), e('整天忙于考试，口语能力就很糟。', 'Cả ngày bận thi nên khẩu ngữ rất kém.', '= 在……方面'), e('主队败于客队。', 'Đội nhà thua đội khách.', '= 被'), e('今年产量高于去年。', 'Sản lượng năm nay cao hơn năm ngoái.', '= 比')],
          points: [{ text: 'Điểm thi: tính từ + 于 + (đối tượng so sánh): "落后于时代的发展".', fixes: [{ wrong: '自己已落后时代的发展', right: '自己已落后于时代的发展', ref: 'Kiểm tra 6 · D' }] }] },
      ],
    },
  ],

  test: [
    seg(['在一次车祸中，他的腿受了伤，', '从此生活不能自理，', '但他非常顽强，自己的事情总是自己去做，', '从来不想添麻烦别人。'], 3, 'Giới từ dẫn tân ngữ',
      '从来不想给别人添麻烦', '"添麻烦" là động từ không trực tiếp mang tân ngữ chỉ người, phải dùng giới từ "给".'),
    seg(['昨天是小田第一次来我家作客，', '我家里人还不认识她，', '我介绍他们说：', '"这就是我常提起的田丽，清华大学的高材生。"'], 2, 'Giới từ "向"',
      '我向他们介绍说', '"介绍" nói với ai phải dùng giới từ "向", không đặt tân ngữ trực tiếp sau "介绍".'),
    seg(['随着中国综合国力的提高，', '世界上学习汉语的人越来越多，', '许多国家都注意到了这股新的潮流，', '以从中国引进师资开始发展汉语教学。'], 3, 'Cấu trúc "以……的方式"',
      '以从中国引进师资的方式开始发展汉语教学', '"以……的方式" nghĩa "用……的办法", nên cần có "的方式".'),
    seg(['在余秋雨和叶圣陶两位作家的交往中，', '有一件很感人的事情，', '那就是叶先生在身体不舒服的情况，', '坚持为余先生的书写完了序言。'], 2, '在……下',
      '在身体不舒服的情况下', '"在 + tình huống" phải có phương vị từ "下" để chỉ điều kiện.'),
    seg(['种子里最主要的部分是胚，', '胚是从胚根、胚芽、胚轴和子叶组成的，', '它是有生命的，', '可以发育成一棵植物。'], 1, '由……组成',
      '胚是由胚根、胚芽、胚轴和子叶组成的', '"组成" cố định đi với "由", không dùng "从".'),
    seg(['如果你还不熟悉怎样使用因特网，', '如果不会利用因特网扩充知识、信息和解决自己的难题，', '那么，要不了多久你可能会发现，', '自己已落后时代的发展。'], 3, 'Tính từ + 于',
      '自己已落后于时代的发展', '"落后" là tính từ không mang tân ngữ trực tiếp, phải dùng giới từ "于".'),
  ],

  exam: [
    sen(['希望能带给人们无穷的力量，激励人们去克服困难。', '关于汉语方面的能力，我有自信肯定能满意贵公司。', '蓝鲸的力气很大，大约相当于一台中型火车头的拉力。', '北斗七星由七颗星组成，连在一起时形状像一个勺子。'], 1, 'Tính từ không mang tân ngữ',
      '我有自信肯定能令贵公司满意', '"满意" là tính từ, không mang tân ngữ. Phải dùng "令贵公司满意" hoặc "让/使".'),
    sen(['我总是能从父母得到鼓励和支持。', '只要你敢于尝试，成功就在你的面前。', '你热爱生命吗？那么，别浪费时间，因为生命是由时间组成的。', '来到北大，我不禁感叹：我心目中理想的大学，应该就是这样的。'], 0, 'Giới từ + nơi chốn',
      '我总是能从父母那儿得到鼓励和支持', '"从" + tân ngữ phải là nơi chốn; "父母" không phải danh từ chỉ nơi chốn nên cần thêm "那儿/这儿".'),
    sen(['在西周时代，中国的音乐和诗歌都达到了相当高的水平。', '他去年刚毕业学校，所以不如其他老师经验丰富。', '普通话的推广和普及，在汉族和少数民族之间架起了一座友谊的桥梁。', '网络语言，顾名思义，就是由网民创造、在网络上流行的语言，是网民约定俗成的表达方式。'], 1, 'Động từ không mang tân ngữ',
      '他去年刚从学校毕业', '"毕业" là động từ không mang được tân ngữ trực tiếp, phải thêm giới từ "从".'),
    sen(['在很多外国人的眼中，旗袍、唐装就是中国的象征。', '东方人和西方人在性格上存在着一定的差异。', '从地图上，黄河干流就像一个巨大的"几"字。', '在标准大气压下，气温低于0℃时，水就会结成冰。'], 2, 'Giới từ chỉ vị trí',
      '从地图上看, 或 在地图上', '"从" chỉ điểm bắt đầu; muốn nói "nhìn trên bản đồ" phải là "从地图上看" hoặc "在地图上" (sách sửa theo hướng này).'),
    sen(['喝茶能静心、静神，有助于陶冶情操、去除杂念，有助于修身养性。', '我最欣赏他的勇气，在他眼中，仿佛世界上任何困难都不足为惧。', '在这些教材中，基本可以分为三大类：口语、阅读、写作。', '每座城市都有它的文化记忆，这种记忆也在老建筑上体现得尤为明显。'], 2, '在……中',
      '这些教材基本可以分为三大类', '"在……中" biểu thị phạm vi, dùng làm trạng ngữ, không thể trực tiếp làm chủ ngữ.'),
    sen(['作为倾听对象，我们不需要发表自己的观点，认真倾听就够了。', '这场中国首次以科学发展观为主题的展览向参观者带来了深刻的反思。', '在短暂的一生中，其言其行，都饱含着深沉的爱国情怀。', '秦始皇陵及兵马俑坑自发现以来，已经吸引了成千上万的中外游客前来参观。'], 1, 'Giới từ "给"',
      '给参观者带来了深刻的反思', 'Cấu trúc cố định "给……带来", không dùng "向".'),
    sen(['对于环境保护这个全球性的问题，每个人都有责任。', '她总是默默忍受着病痛的折磨，不愿添麻烦他们。', '从最基层做起，对刚踏入社会的年轻人来说是一个很好的锻炼。', '俗话说："文如其人。"风格在很大程度上是由作家、艺术家的主观因素决定的。'], 1, 'Giới từ + 添麻烦',
      '不愿给他们添麻烦', '"添麻烦" sau không thể mang tân ngữ trực tiếp, nên dùng giới từ "给".'),
    sen(['自然是神圣伟大的，生活在这万能自然之神庇护下的人类本身就需要很强的能力，我们如果不能改变自然，就只有适应自然。', '环境污染带来的后果给人们敲响了警钟，我们呼吁大家：珍爱我们的地球。', '人们之所以看不到这种变化，是因为这种变化非常缓慢，而人的生命又极其短暂。', '人们总以为年轻女人向往浪漫的爱情，不会计较现实生活的种种限制；事实上，她们更善于在务实的角度来选择婚姻伴侣。'], 3, 'Giới từ 从……角度',
      '更善于从务实的角度来选择婚姻伴侣', '"从……的角度" là cách nói cố định biểu thị điểm xuất phát khi xem xét vấn đề; không dùng "在".'),
    sen(['从一个成功者的角度来说，天赋是很重要的因素，但勤能补拙，只要你辛勤耕耘，就能收获成功的果实。', '关于垃圾处理情况的调查报告还在进行中，结果还没有出来，但我统计的几个数据可以看出，公众的垃圾分类意识已经得到了增强。', '素质可以理解为人们在先天条件的基础上，在家庭、社会的影响下，通过后天教育所形成的稳定的心理品格。', '我对整个过程还算满意，但后半程的战术安排不够合理，尤其是在冲刺阶段，感觉有些急躁，打乱了自己的节奏。'], 1, '从……可以看出',
      '但从我统计的几个数据可以看出', '"从……可以看出" biểu thị rút kết luận từ tình hình hiện có, thiếu giới từ "从".'),
    sen(['气质是人们在先天素质的基础上通过实践活动，在后天生活条件的影响下逐渐形成的。', '观点在四面银幕的环抱中，随意欣赏不同角度的画面，仿佛置身于真实的环境之中。', '泥河湾是世界上最早的人类发源地之一，泥河湾遗址群主要位于河北省阳原县境内桑干河两岸区域内。', '父母得明白年轻人是爱赶潮流的，因此对潮流有所认识和了解，是子女沟通的一道桥梁，也是理解他们行为方式、价值观念的必要手段。'], 3, 'Giới từ "与"',
      '是与子女沟通的一道桥梁', 'Chủ ngữ là "父母", "子女" là tân ngữ, nên phải dùng giới từ "与": 是与子女沟通的一道桥梁.'),
    sen(['A 对自己所喜欢的人，要看到他的短处；对自己所厌恶的人，要看到他的长处。', '朋友听说我春节要去哈尔滨看冰灯，特意打电话来给我提醒要穿足衣服。', '在千家万户的欢声笑语中，在千言万语的祝福声中，我们迎来了兔年春节。', '雪中送炭，是说在下雪天给人送炭取暖，比喻在别人急需时给以物质上或精神上的帮助。'], 1, 'Động từ không cần giới từ',
      '特意打电话来提醒我要穿足衣服', '"提醒" không cần giới từ, có thể trực tiếp: 提醒 + người + sự việc.'),
    sen(['长时间的高温酷热给人们的生产、生活带来诸多不便。', '正像人们经常说的那样，有一千个观众，就有一千个哈姆雷特，对这本书每个人都有不同的理解。', '中国的日晷是最早报"标准时"的仪器，它一般从晷盘和晷针两部分组成，晷盘是一个标有刻度的圆盘，其中央装有一根与盘面垂直的晷针。', '从心理学的角度看，一个人只要体验一次成功的欢乐，便会激起他追求无休止的成功的力量和信心。'], 2, '由……组成',
      '它一般由晷盘和晷针两部分组成', 'Cố định "由……组成", không dùng "从".'),
    sen(['因为世界各国的制瓷技术都是从中国传入的，所以直到现在，许多国家都把瓷器称为"中国"。', '当双方的意见僵持不下时，你就应该明白，再这样下去对双方都没有好处，争取形成一个双方都能接受的方案是最好的选择。', '王永民发明的"五笔字型"汉字输入法，在古老的汉字和现代化计算机之间架起了一座畅通无阻的桥梁。', '大家都认为，民间的美容偏方正逐渐让位于现代技术，可事实却远非如此，一些在美容方面颇有研究的人甚至都会对这些民间流传的方法津津乐道。'], 1, 'Vị trí của giới từ 对',
      '再这样下去对双方都没有好处', 'Giới từ "对" chỉ có thể đặt trước vị ngữ, không đặt trước "再这样下去".'),
    sen(['布达拉宫是神圣的代名词，素有"高原圣殿"的美誉。它是西藏的象征，也是中华民族团结的象征。', '寓言，就是"寓教于言"，在具体的故事里寄托一些话，这些话是讲某种道理或教训的。寓言从结构上看，大多分为故事和教训两部分。', '埃亚菲亚德拉冰川火山自从1823年到现在以来有过3次喷发，尤其是2010年3月至4月接连两次爆发，给当地民众的生活造成了严重影响，全球气候和人体健康均受到长期影响。', '人们常常从好的方面来看待自己，当取得一些成就时，常常容易归功于自己，而做了错事之后则怨天尤人，把它归咎于外在因素，即把功劳归于自己，把错误推给别人。'], 2, 'Giới từ "自……以来"',
      '自1823年以来有过3次喷发', 'Cấu trúc "自……以来" đã có nghĩa "từ (quá khứ) đến nay", không cần lặp thêm "到现在".'),
    sen(['小孩子的学习能力、生活能力、环境适应能力都不成熟，过早到国外读书不利于他们的成长。', '西迁节是锡伯族的传统节日，每年的农历四月十八日，人们都会开展各种活动，以纪念祖先的英雄业绩。', '作为中国古代文学著作的奇迹之一，《红楼梦》在诗词、戏曲、绘画、建筑、园林等许多方面都有很高的美学价值。', '当你遇到困难时，他们会帮助你；当你心情不好时，他们会开心你；当你生病时，他们会安慰你。他们就是你真正的朋友。'], 3, 'Động từ 开心',
      '他们会让你开心(开导你)', '"开心" là tính từ không mang tân ngữ, có thể dùng giới từ dẫn tân ngữ: "让/使你开心"; hoặc đổi thành động từ "开导": 他们会开导你.'),
  ],
}
