import type { DayContent, Ex, ErrQ } from './types'

/**
 * Tuần 1 · Thứ Tư: Bổ ngữ số lượng, "得" với bổ ngữ mức độ / tình thái / khả năng, sách trang 31–45.
 * Phần dịch tiếng Việt và pinyin do app tự thêm.
 */

const x = (h: string, p: string, vi: string, note?: string, tag?: string): Ex => ({ h, p, vi, note, tag })
const seg = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'segment', parts, answer, topic, fix, why })
const sen = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'sentence', parts, answer, topic, fix, why })

export const day3: DayContent = {
  intro:
    '"我学习汉语一年多了" là câu sai mà nhiều bạn hay nói. Lỗi nằm ở chỗ chưa rõ quan hệ vị trí giữa thời gian, số lượng và tân ngữ; cách nói đúng là "我学汉语学了一年多了" hoặc "我学了一年多的汉语了". Thật ra quy tắc rất đơn giản, giống như công thức: biết quy tắc rồi thì cứ đặt điều muốn nói vào. Còn 得 thì thầy cô thường bảo nó là dấu hiệu của bổ ngữ, vậy những bổ ngữ nào liên quan đến 得? Cách dùng cố định ở đây rất nhiều, nên mong bạn đừng vội học thuộc, mà đi theo ghi chép của thầy, đọc nhiều câu ví dụ và sắp xếp lại những gì đã học trong đầu. Hãy tin vào trình độ của mình, và tin hơn nữa vào phương pháp của thầy.',

  focusTitle: 'Ba nhóm bổ ngữ hôm nay',
  anatomyTitle: 'Số lượng đứng ở đâu so với tân ngữ?',
  anatomyLead: 'Đây là điều quyết định câu đúng hay sai. Tân ngữ là đại từ hoặc chỉ người, nơi chốn thì đứng TRƯỚC bổ ngữ số lượng. Tân ngữ là sự vật thông thường thì lặp động từ, hoặc đặt sau bổ ngữ (có thể thêm 的).',
  anatomy: [
    { label: 'Tân ngữ sự vật: lặp động từ', chunks: [['我', '主'], ['学', '谓'], ['汉语', '宾'], ['学', '谓'], ['了一年多', '补']] },
    { label: 'Tân ngữ sự vật: bổ ngữ + 的 + tân ngữ', chunks: [['我', '主'], ['学了', '谓'], ['一年多的', '补'], ['汉语', '宾']] },
    { label: 'Tân ngữ là người (thời lượng): tân ngữ trước, bổ ngữ sau', chunks: [['我', '主'], ['等了', '谓'], ['他', '宾'], ['半个小时', '补']] },
    { label: 'Tân ngữ là đại từ (động lượng): tân ngữ trước, bổ ngữ sau', chunks: [['我', '主'], ['看了', '谓'], ['他', '宾'], ['一眼', '补']] },
  ],

  cheat: {
    title: 'Bảng tra nhanh: các cấu trúc cố định với 得 (mức độ)',
    lead: 'Phần này nhiều nhất và dễ nhầm nhất. Đừng học thuộc cả danh sách: chỉ cần nhớ cái nào KHÔNG có dạng phủ định, cái nào không đi với 得, và cái nào chỉ dùng cho điều xấu.',
    head: ['Cấu trúc', 'Phủ định / lưu ý', 'Ví dụ'],
    rows: [
      { key: '得很', cells: ['Không có dạng phủ định', '今天冷得很。'] },
      { key: '得多', cells: ['Không có dạng phủ định · dùng để so sánh', '那间教室比这间大得多。'] },
      { key: '得不得了', cells: ['Không có dạng phủ định', '他们俩关系好得不得了。'] },
      { key: '得慌', cells: ['Không phủ định · khẩu ngữ · chỉ dùng cho điều không tốt', '屋里人太多，闷得慌。'] },
      { key: '得不行', cells: ['Không có dạng khẳng định · mức độ rất sâu, khó chịu nổi', '现在我困得不行。'] },
      { key: '得要死 / 要命', cells: ['Không phủ định · khẩu ngữ', '听了他的话，我气得要命。'] },
      { key: '死 / 坏 / 透了', cells: ['KHÔNG dùng 得 · 透 chỉ dùng cho điều xấu', '快迟到了，我都急死了。'] },
      { key: '极 / 多了', cells: ['KHÔNG dùng 得', '他的病好多了。'] },
    ],
  },

  sections: [
    // ───────────────────────── 数量补语 ─────────────────────────
    {
      id: 'shuliang', hanzi: '数量补语', pinyin: 'shùliàng bǔyǔ', title: 'Bổ ngữ số lượng',
      intro: 'Bổ ngữ số lượng chia thành ba loại: bổ ngữ số lượng so sánh, bổ ngữ động lượng và bổ ngữ thời lượng. Động lượng và thời lượng cách dùng gần như nhau, chỉ cần chú ý tân ngữ là đại từ (hoặc chỉ người, nơi chốn) đứng ở đâu.',
      groups: [
        {
          title: 'Bổ ngữ số lượng so sánh',
          patterns: [
            {
              formula: 'A (比 B) + 〈形〉 (+ 了) + 〈数量〉', title: 'Nói chênh lệch bao nhiêu',
              note: 'Trước tính từ trong câu so sánh không dùng 很 / 非常 / 十分, nhưng phía sau có thể thêm bổ ngữ số lượng.',
              examples: [
                x('姐姐比妹妹[大五岁]。', 'Jiějie bǐ mèimei dà wǔ suì.', 'Chị hơn em gái năm tuổi.'),
                x('小王比小李[高了一头]。', 'Xiǎo Wáng bǐ Xiǎo Lǐ gāo le yì tóu.', 'Tiểu Vương cao hơn Tiểu Lý một cái đầu.'),
                x('一班的学生比二班[多十个]。', 'Yī bān de xuésheng bǐ èr bān duō shí ge.', 'Học sinh lớp 1 nhiều hơn lớp 2 mười người.'),
                x('机场比火车站[远十公里]。', 'Jīchǎng bǐ huǒchēzhàn yuǎn shí gōnglǐ.', 'Sân bay xa ga tàu mười cây số.'),
              ],
            },
          ],
        },
        {
          title: 'Bổ ngữ động lượng (số lần của động tác)',
          patterns: [
            {
              formula: '〈动〉 (+ 了 / 过) + 〈动量词〉', title: 'Không có tân ngữ',
              note: 'Động từ, rồi 了 hoặc 过, rồi động lượng từ.',
              examples: [
                x('这本书我已经看[过一遍]了。', 'Zhè běn shū wǒ yǐjīng kàn guo yí biàn le.', 'Cuốn sách này tôi đã đọc một lượt rồi.'),
                x('我只去[了一趟]。', 'Wǒ zhǐ qù le yí tàng.', 'Tôi chỉ đi một chuyến.'),
                x('你等[一下]，我马上来。', 'Nǐ děng yíxià, wǒ mǎshàng lái.', 'Bạn đợi chút, tôi đến ngay.'),
              ],
            },
            {
              formula: '〈动〉 (+ 了 / 过) + 〈代词〉 + 〈动量〉', title: 'Tân ngữ là đại từ: đứng trước bổ ngữ',
              note: 'Đại từ (我, 你, 他, 那儿…) nhất định đứng trước động lượng. Đây là chỗ HSK hay bẫy.',
              examples: [
                x('我找过你[两次]，你都不在。', 'Wǒ zhǎo guo nǐ liǎng cì, nǐ dōu bú zài.', 'Tôi đã tìm bạn hai lần, bạn đều không ở đó.', 'Sai: 我找过两次你。'),
                x('他很不满地看了我[一眼]。', 'Tā hěn bù mǎn de kàn le wǒ yì yǎn.', 'Anh ấy nhìn tôi một cái đầy bất mãn.', 'Sai: 看了一眼我。'),
                x('颐和园太美了，我去那儿[两趟]都没玩儿够。', 'Yíhéyuán tài měi le, wǒ qù nàr liǎng tàng dōu méi wánr gòu.', 'Di Hòa Viên đẹp quá, tôi đến đó hai lần mà vẫn chưa chơi đã.', 'Sai: 我去两趟那儿。'),
              ],
            },
            {
              formula: '〈动〉 (+ 了 / 过) + 〈动量〉 + 〈名〉　hoặc　〈动〉 + 〈名〉 + 〈动〉 (+ 了 / 过) + 〈动量〉', title: 'Tân ngữ là danh từ sự vật',
              note: 'Hoặc đặt tân ngữ sau bổ ngữ, hoặc lặp động từ.',
              examples: [
                x('来中国后我去了[两次]长城。', 'Lái Zhōngguó hòu wǒ qù le liǎng cì Chángchéng.', 'Sau khi đến Trung Quốc tôi đã đi Vạn Lý Trường Thành hai lần.'),
                x('我去长城去了[两次]。', 'Wǒ qù Chángchéng qù le liǎng cì.', 'Tôi đi Trường Thành đi hai lần.'),
                x('你吃[一口]烤鸭尝尝，这是北京的特色菜。', 'Nǐ chī yì kǒu kǎoyā chángchang, zhè shì Běijīng de tèsè cài.', 'Bạn ăn thử một miếng vịt quay xem, đây là món đặc sắc của Bắc Kinh.'),
              ],
            },
          ],
        },
        {
          title: 'Động lượng từ thường dùng',
          patterns: [
            {
              formula: '〈动〉 + 次 / 回', title: '次, 回: số lần của động tác',
              note: '回 tương đương 次, nhưng khẩu ngữ hơn.',
              examples: [
                x('我跟他见过[一次]面。', 'Wǒ gēn tā jiàn guo yí cì miàn.', 'Tôi đã gặp anh ấy một lần.'),
                x('我去过[一回]上海。', 'Wǒ qù guo yì huí Shànghǎi.', 'Tôi đã đến Thượng Hải một lần.'),
              ],
            },
            {
              formula: '〈动〉 + 趟', title: '趟: chỉ dùng với động từ liên quan đến đi lại',
              note: 'Quãng đường, đi và về.',
              examples: [x('下午我得跑[一趟]图书城买本书。', 'Xiàwǔ wǒ děi pǎo yí tàng túshūchéng mǎi běn shū.', 'Chiều nay tôi phải chạy một chuyến đến nhà sách mua cuốn sách.')],
            },
            {
              formula: '〈动〉 + 遍', title: '遍: một lượt trọn vẹn từ đầu đến cuối',
              note: 'Thường liên quan đến sự lặp lại.',
              examples: [x('我没听清楚，您能再说[一遍]吗？', 'Wǒ méi tīng qīngchu, nín néng zài shuō yí biàn ma?', 'Tôi nghe chưa rõ, bạn có thể nói lại một lần nữa không?')],
            },
            {
              formula: '〈动〉 + 下', title: '下: chỉ dùng cho động tác ngắn, chớp nhoáng',
              note: 'Gõ, chạm, đập… một cái.',
              examples: [x('他"咚咚咚"敲了三[下]门。', 'Tā "dōngdōngdōng" qiāo le sān xià mén.', 'Anh ấy gõ cửa ba cái "cốc cốc cốc".')],
            },
            {
              formula: '〈动〉 + 番', title: '番: ① động tác kéo dài, vất vả; ② sau 翻 nghĩa là "gấp bội"',
              note: 'Nhớ mấy động từ thường đi với 番 ở nghĩa ①. Nghĩa ②: 翻一番 = gấp đôi.',
              verbs: ['教训', '鼓励', '叮嘱', '嘱咐', '劝解', '检讨'],
              examples: [
                x('他鼓励了我[一番]，我心里充满了感激。', 'Tā gǔlì le wǒ yì fān, wǒ xīnlǐ chōngmǎn le gǎnjī.', 'Anh ấy động viên tôi một hồi, lòng tôi đầy biết ơn.'),
                x('今年的产量比去年翻了[一番]。', 'Jīnnián de chǎnliàng bǐ qùnián fān le yì fān.', 'Sản lượng năm nay gấp đôi năm ngoái.', '＝ 是去年的两倍.'),
              ],
            },
            {
              formula: '〈动〉 + 顿', title: '顿: ① đánh, mắng, phê bình; ② bữa ăn',
              note: 'Nghĩa ① đi với những động từ về đánh mắng, phê bình. Nghĩa ② lúc này 顿 là danh lượng từ.',
              verbs: ['打', '骂', '揍 zòu', '批评', '教训'],
              examples: [
                x('这么晚回家，妈妈非得狠狠地骂我[一顿]不可。', 'Zhème wǎn huí jiā, māma fēiděi hěnhěn de mà wǒ yí dùn bùkě.', 'Về muộn thế này, mẹ nhất định mắng cho tôi một trận.'),
                x('当着那么多人的面，受了这[一顿]批评，他觉得抬不起头来。', 'Dāngzhe nàme duō rén de miàn, shòu le zhè yí dùn pīpíng, tā juéde tái bu qǐ tóu lái.', 'Bị phê bình một trận trước bao nhiêu người, anh ấy thấy ngẩng không nổi đầu.'),
                x('为了减肥，她一天只吃[一顿]饭，而且不吃主食。', 'Wèile jiǎnféi, tā yì tiān zhǐ chī yí dùn fàn, érqiě bù chī zhǔshí.', 'Để giảm cân, cô ấy một ngày chỉ ăn một bữa và không ăn cơm.'),
              ],
            },
            {
              formula: '〈动〉 + 〈宾〉 + 〈身体部位量词〉', title: 'Động tác của cơ thể: dùng chính bộ phận cơ thể làm lượng từ',
              note: 'Tân ngữ (đại từ, nơi chốn) vẫn đứng trước.',
              verbs: ['眼', '脚', '拳', '巴掌'],
              examples: [
                x('他朝我看(瞪 / 瞟 / 白)了[一眼]。', 'Tā cháo wǒ kàn (dèng / piǎo / bái) le yì yǎn.', 'Anh ấy nhìn (trừng / liếc / lườm) tôi một cái.'),
                x('他生气地朝门上踢了[一脚]。', 'Tā shēngqì de cháo mén shang tī le yì jiǎo.', 'Anh ấy tức giận đá vào cửa một cái.'),
                x('她不好意思地朝男朋友肩上打了[一拳]。', 'Tā bù hǎoyìsi de cháo nánpéngyou jiān shang dǎ le yì quán.', 'Cô ấy ngượng ngùng đấm vào vai bạn trai một cái.'),
                x('爸爸往儿子的屁股上打了[一巴掌]。', 'Bàba wǎng érzi de pìgu shang dǎ le yì bāzhang.', 'Bố tát vào mông con trai một cái.'),
              ],
            },
          ],
        },
        {
          title: 'Bổ ngữ thời lượng (khoảng thời gian)',
          patterns: [
            {
              formula: '〈动〉 (+ 了 / 过) + 〈时量〉', title: 'Không có tân ngữ',
              note: 'Động từ, 了 hoặc 过, rồi khoảng thời gian.',
              examples: [
                x('我等了[半天]也没看见他。', 'Wǒ děng le bàntiān yě méi kànjiàn tā.', 'Tôi đợi mãi mà không thấy anh ấy.'),
                x('他书房里的灯亮了[一晚上]。', 'Tā shūfáng lǐ de dēng liàng le yì wǎnshang.', 'Đèn trong phòng đọc sách của anh ấy sáng cả đêm.'),
                x('你迟到了[一个小时]。', 'Nǐ chídào le yí ge xiǎoshí.', 'Bạn đến muộn một tiếng.'),
              ],
            },
            {
              formula: '〈动〉 (+ 了 / 过) + 人 / 处所 + 〈时量〉', title: 'Tân ngữ là người hoặc nơi chốn: đứng trước bổ ngữ',
              note: 'Giống động lượng với đại từ: người, nơi chốn đứng trước khoảng thời gian.',
              examples: [
                x('你再等我[十分钟]吧。', 'Nǐ zài děng wǒ shí fēnzhōng ba.', 'Bạn đợi tôi thêm mười phút nữa nhé.', 'Sai: 你再等十分钟我吧。'),
                x('为了办这个手续，我找了王经理[两天]。', 'Wèile bàn zhège shǒuxù, wǒ zhǎo le Wáng jīnglǐ liǎng tiān.', 'Để làm thủ tục này, tôi đã tìm giám đốc Vương hai ngày.', 'Sai: 我找了两天王经理。'),
                x('我来中国[一年多]了。', 'Wǒ lái Zhōngguó yì nián duō le.', 'Tôi đến Trung Quốc hơn một năm rồi.', 'Sai: 我来一年多中国了。'),
              ],
            },
            {
              formula: '〈动〉 + 〈事物名词〉 + 〈动〉 (+ 了 / 过 / 到) + 〈时量〉　hoặc　〈动〉 (+ 了 / 过) + 〈时量〉 (+ 的) + 〈事物名词〉', title: 'Tân ngữ sự vật: lặp động từ hoặc đặt sau (thêm 的)',
              note: 'Nếu sau động từ có 到 thì nhất định phải lặp động từ.',
              examples: [
                x('昨天晚上，我写作业写了[两个小时]。', 'Zuótiān wǎnshang, wǒ xiě zuòyè xiě le liǎng ge xiǎoshí.', 'Tối qua tôi làm bài tập hai tiếng.', 'Cũng nói được: 我写了两个小时作业.'),
                x('他每天看书看到[凌晨两点]。', 'Tā měi tiān kàn shū kàndào língchén liǎng diǎn.', 'Ngày nào anh ấy cũng đọc sách đến hai giờ sáng.'),
                x('观众们鼓了[半天]掌。', 'Guānzhòngmen gǔ le bàntiān zhǎng.', 'Khán giả vỗ tay mãi.'),
                x('爸爸跟我谈了[整整一下午]的话。', 'Bàba gēn wǒ tán le zhěngzhěng yí xiàwǔ de huà.', 'Bố nói chuyện với tôi trọn cả buổi chiều.'),
              ],
            },
          ],
        },
      ],
    },

    // ───────────────────────── 得 + 程度/情态补语 ─────────────────────────
    {
      id: 'chengdu', hanzi: '得 + 程度 / 情态补语', pinyin: 'de + chéngdù / qíngtài bǔyǔ', title: 'Bổ ngữ mức độ và tình thái',
      intro: 'Cấu trúc thường dùng: động từ / tính từ + 得 + bổ ngữ mức độ hoặc tình thái. Bổ ngữ mức độ nói rõ mức độ; còn khi mức độ được diễn tả bằng cả một câu miêu tả tình trạng thì thành bổ ngữ tình thái (高兴得很 → 高兴得跳了起来).',
      groups: [
        {
          title: 'Quy tắc chung',
          patterns: [
            {
              formula: '〈动 / 形〉 + 得 + 〈补语〉', title: 'Cấu trúc và hai điều cấm',
              note: 'Động từ không được lặp lại (không dùng dạng 说说得…) và không mang 了 / 着 / 过.',
              examples: [x('他玩儿[得很高兴]。', 'Tā wánr de hěn gāoxìng.', 'Anh ấy chơi rất vui.')],
            },
            {
              formula: '〈动〉 + 〈宾〉 (+ 状语) + 〈动〉 + 得 + 〈补语〉　hoặc　〈宾〉 (+ 状语) + 〈动〉 + 得 + 〈补语〉', title: 'Có tân ngữ: lặp động từ, hoặc đưa tân ngữ lên trước',
              note: 'Trạng ngữ đặt trước động từ lặp lại. Có thể bỏ lặp, nhưng phải đưa tân ngữ lên trước. Ba cách đặt: 他玩电脑玩得… / 他电脑玩得… / 电脑他玩得…',
              examples: [
                x('他说汉语确实说[得很好]。', 'Tā shuō Hànyǔ quèshí shuō de hěn hǎo.', 'Anh ấy nói tiếng Hán quả thật rất giỏi.', 'Cũng nói được: 他汉语确实说得很好 / 汉语他确实说得很好.'),
                x('我们聊天聊[得忘了时间]。', 'Wǒmen liáotiān liáo de wàng le shíjiān.', 'Chúng tôi trò chuyện đến quên cả thời gian.'),
              ],
            },
            {
              formula: '别 / 不要 + 〈动 / 形〉 + 得 + 〈补语〉', title: 'Cần phủ định thì thêm 别 hoặc 不要 trước động từ, tính từ',
              note: 'Ngoài ra, phủ định và nghi vấn của bổ ngữ tình thái thường đặt ngay trong phần bổ ngữ: 说得很好 / 不好 / 好不好? / 好吗?',
              examples: [
                x('我刚整理好，你[别]搞得乱七八糟的。', 'Wǒ gāng zhěnglǐ hǎo, nǐ bié gǎo de luànqībāzāo de.', 'Tôi vừa dọn xong, bạn đừng làm bừa bộn lên nhé.'),
                x('你[不要]说得太过分了，他还是个孩子。', 'Nǐ búyào shuō de tài guòfèn le, tā háishi ge háizi.', 'Bạn đừng nói quá đáng như vậy, nó vẫn còn là trẻ con.'),
              ],
            },
          ],
        },
        {
          title: 'Cấu trúc cố định',
          patterns: [
            {
              formula: '〈动 / 形〉 + 得 (+ 不) + 〈形〉', title: '① Tính từ làm bổ ngữ phải có phó từ mức độ',
              note: 'Tính từ làm bổ ngữ nên dùng phó từ mức độ bổ nghĩa; không dùng thì mang nghĩa so sánh.',
              examples: [
                x('他说[得很好]。', 'Tā shuō de hěn hǎo.', 'Anh ấy nói rất giỏi.'),
                x('他写汉字写[得好极了]。', 'Tā xiě Hànzì xiě de hǎo jí le.', 'Anh ấy viết chữ Hán đẹp cực kỳ.'),
                x('你写[得不清楚]。', 'Nǐ xiě de bù qīngchu.', 'Bạn viết không rõ.'),
                x('现在雨下[得急]。', 'Xiànzài yǔ xià de jí.', 'Bây giờ mưa xối xả hơn.', 'Không có 很 nên mang nghĩa so sánh (trước đó mưa không gấp).'),
              ],
            },
            {
              formula: '〈动 / 形〉 + 得 + 〈动〉', title: '② Bổ ngữ tình thái là cụm động từ',
              note: 'Không được dùng một động từ đơn lẻ.',
              examples: [
                x('跑[得一个劲儿喘]', 'Pǎo de yí ge jìnr chuǎn', 'chạy đến mức cứ thở dốc'),
                x('高兴[得大声笑着]', 'Gāoxìng de dàshēng xiào zhe', 'vui đến mức cười thật to'),
              ],
            },
            {
              formula: '〈动 / 形〉 + 得 + 〈小句〉', title: '③ Bổ ngữ tình thái là một mệnh đề',
              note: 'Cả một câu nhỏ miêu tả hậu quả hoặc biểu hiện.',
              examples: [
                x('他跑[得满身是汗]。', 'Tā pǎo de mǎnshēn shì hàn.', 'Anh ấy chạy đến mồ hôi đầy người.'),
                x('爸爸气[得手直颤抖]。', 'Bàba qì de shǒu zhí chàndǒu.', 'Bố giận đến tay run bần bật.'),
                x('他伤心[得眼泪围着眼圈儿转]。', 'Tā shāngxīn de yǎnlèi wéi zhe yǎnquānr zhuàn.', 'Anh ấy đau lòng đến nước mắt rưng rưng quanh mắt.'),
              ],
            },
            {
              formula: '〈动 / 形〉 + 得 + 〈四字成语 / 短语〉', title: '④ Bổ ngữ tình thái là thành ngữ bốn chữ hoặc cụm từ',
              note: 'Đã là bốn chữ hoặc cụm thì không thêm phó từ mức độ nữa.',
              examples: [
                x('说[得头头是道]', 'shuō de tóutóu-shìdào', 'nói đâu ra đấy, rành mạch'),
                x('搞[得乱七八糟]', 'gǎo de luànqībāzāo', 'làm cho lộn xộn bừa bãi'),
                x('讨论[得兴高采烈]', 'tǎolùn de xìnggāo-cǎiliè', 'thảo luận hào hứng sôi nổi'),
                x('高兴[得手舞足蹈]', 'gāoxìng de shǒuwǔ-zúdǎo', 'vui đến múa tay múa chân'),
              ],
            },
            {
              formula: '〈动〉 + 得 + 〈名 / 代〉 + 〈动〉', title: '⑤ Sau 得 có tân ngữ rồi mới đến động từ',
              note: 'Không được là một động từ đơn. Danh từ hoặc đại từ tân ngữ cũng có thể dùng 把 đưa lên trước động từ.',
              examples: [
                x('这几天忙[得他团团转]。', 'Zhè jǐ tiān máng de tā tuántuánzhuàn.', 'Mấy hôm nay anh ấy bận xoay như chong chóng.', 'Cũng nói được: 这几天把他忙得团团转.'),
                x('他的话逗[得我们哈哈大笑]。', 'Tā de huà dòu de wǒmen hāhā dà xiào.', 'Lời anh ấy làm chúng tôi cười ha hả.', 'Cũng nói được: 他的话把我们逗得哈哈大笑.'),
                x('这个好消息乐[得他跳了起来]。', 'Zhège hǎo xiāoxi lè de tā tiào le qǐlái.', 'Tin tốt này làm anh ấy vui đến nhảy cẫng lên.', 'Cũng nói được: 这个好消息把他乐得跳了起来.'),
              ],
            },
            {
              formula: '〈形〉 + 得 + 很', title: '⑥ 得很: không có dạng phủ định',
              note: 'Chỉ đi với tính từ.',
              examples: [
                x('春天风大[得很]。', 'Chūntiān fēng dà de hěn.', 'Mùa xuân gió rất lớn.'),
                x('他考了第一名，高兴[得很]。', 'Tā kǎo le dì-yī míng, gāoxìng de hěn.', 'Anh ấy thi được hạng nhất, vui lắm.'),
                x('今天冷[得很]。', 'Jīntiān lěng de hěn.', 'Hôm nay lạnh lắm.'),
              ],
            },
            {
              formula: '〈形〉 + 得 + 多', title: '⑦ 得多: không có dạng phủ định, dùng để so sánh',
              note: 'Hơn nhiều.',
              examples: [
                x('这次考试难[得多]。', 'Zhè cì kǎoshì nán de duō.', 'Kỳ thi lần này khó hơn nhiều.'),
                x('那间教室比这间大[得多]。', 'Nà jiān jiàoshì bǐ zhè jiān dà de duō.', 'Phòng học kia lớn hơn phòng này nhiều.'),
              ],
            },
            {
              formula: '〈动 / 形〉 + 得 + 不得了', title: '⑧ 得不得了: không có dạng phủ định',
              note: 'Rất, cực kỳ.',
              examples: [
                x('他们俩关系好[得不得了]。', 'Tāmen liǎ guānxi hǎo de bùdéliǎo.', 'Hai người họ thân nhau vô cùng.'),
                x('爷爷喘[得不得了]，再也走不动了。', 'Yéye chuǎn de bùdéliǎo, zài yě zǒu bu dòng le.', 'Ông thở hổn hển dữ dội, không đi nổi nữa.'),
              ],
            },
            {
              formula: '〈单音节动 / 形〉 + 得 + 慌', title: '⑨ 得慌: không có dạng phủ định, khẩu ngữ, chỉ điều không tốt',
              note: 'Chỉ dùng cho động từ, tính từ đơn âm tiết.',
              examples: [
                x('屋里人太多，闷[得慌]。', 'Wū lǐ rén tài duō, mēn de huāng.', 'Trong phòng đông người quá, ngột ngạt.'),
                x('等了半天，心里真急[得慌]。', 'Děng le bàntiān, xīnlǐ zhēn jí de huāng.', 'Đợi mãi, trong lòng sốt ruột lắm.'),
                x('整天在家闲[得慌]。', 'Zhěngtiān zài jiā xián de huāng.', 'Cả ngày ở nhà rảnh đến phát chán.'),
              ],
            },
            {
              formula: '〈动 / 形〉 + 得 + 不行', title: '⑩ 得不行: không có dạng khẳng định',
              note: 'Mức độ rất sâu, khiến người ta chịu không nổi.',
              examples: [
                x('这种点心甜[得不行]。', 'Zhè zhǒng diǎnxin tián de bùxíng.', 'Loại bánh này ngọt không chịu nổi.'),
                x('现在我困[得不行]。', 'Xiànzài wǒ kùn de bùxíng.', 'Bây giờ tôi buồn ngủ không chịu nổi.'),
                x('通过了考试，我高兴[得不行]。', 'Tōngguò le kǎoshì, wǒ gāoxìng de bùxíng.', 'Thi đậu rồi, tôi vui không tả nổi.'),
              ],
            },
            {
              formula: '〈动 / 形〉 + 得 + 要死 / 要命', title: '⑪ 得要死 / 要命: không có dạng phủ định, khẩu ngữ',
              note: 'Rất, cực kỳ (khẩu ngữ).',
              examples: [
                x('听了他的话，我气[得要命]。', 'Tīng le tā de huà, wǒ qì de yàomìng.', 'Nghe lời anh ta nói, tôi giận chết đi được.'),
                x('去年夏天热[得要死]。', 'Qùnián xiàtiān rè de yàosǐ.', 'Mùa hè năm ngoái nóng chết người.'),
              ],
            },
            {
              formula: '〈动 / 形〉 + 死 / 坏 / 透 + 了', title: '⑫ 死 / 坏 / 透 + 了: KHÔNG dùng 得',
              note: 'Động từ, tính từ phải là từ khẩu ngữ. 透 chỉ dùng cho điều xấu.',
              examples: [
                x('他这个人，坏[透了]。', 'Tā zhège rén, huài tòu le.', 'Con người anh ta xấu thấu xương.'),
                x('今天的天气糟糕[透了]。', 'Jīntiān de tiānqì zāogāo tòu le.', 'Thời tiết hôm nay tệ hết chỗ nói.', '透 chỉ dùng cho điều không tốt.'),
                x('今天的天气真冷，我都冻[坏了]。', 'Jīntiān de tiānqì zhēn lěng, wǒ dōu dòng huài le.', 'Hôm nay trời lạnh quá, tôi lạnh cóng rồi.', 'Không nói 寒冷坏了.'),
                x('这么久不见，我都快想[死了]。', 'Zhème jiǔ bú jiàn, wǒ dōu kuài xiǎng sǐ le.', 'Lâu thế không gặp, tôi nhớ chết đi được.', 'Không nói 思念死了.'),
                x('快迟到了，我都急[死了]。', 'Kuài chídào le, wǒ dōu jí sǐ le.', 'Sắp muộn rồi, tôi sốt ruột chết mất.'),
                x('听到这个好消息，他高兴[死了]。', 'Tīngdào zhège hǎo xiāoxi, tā gāoxìng sǐ le.', 'Nghe tin vui này, anh ấy vui chết đi được.'),
              ],
            },
            {
              formula: '〈动 / 形〉 + 极 / 多 + 了', title: '⑬ 极 / 多 + 了: KHÔNG dùng 得',
              note: 'Khác với 得多 ở trên: 好多了 (không có 得).',
              examples: [
                x('看到我的大学录取通知书，爸爸高兴[极了]。', 'Kàndào wǒ de dàxué lùqǔ tōngzhīshū, bàba gāoxìng jí le.', 'Thấy giấy báo trúng tuyển đại học của tôi, bố vui vô cùng.'),
                x('他的病好[多了]。', 'Tā de bìng hǎo duō le.', 'Bệnh của anh ấy đỡ nhiều rồi.'),
              ],
            },
          ],
        },
      ],
    },

    // ───────────────────────── 得 + 可能补语 ─────────────────────────
    {
      id: 'keneng', hanzi: '得 + 可能补语', pinyin: 'de + kěnéng bǔyǔ', title: 'Bổ ngữ khả năng',
      intro: 'Thêm 得 / 不 vào giữa động từ và bổ ngữ kết quả hoặc bổ ngữ xu hướng thì thành nghĩa "có thể / không thể". Cấu trúc thường dùng: động từ / tính từ + 得 / 不 + kết quả / xu hướng.',
      groups: [
        {
          title: 'Quy tắc chung',
          patterns: [
            {
              formula: '〈动〉 + 得 / 不 + 〈结果 / 趋向〉', title: 'Không dùng 了 (le), 着, 过',
              note: 'Bổ ngữ khả năng diễn tả tình huống chung nên không cần 了 của sự hoàn thành. So sánh: 我听懂了老师的话 (đã nghe hiểu) / 我听得(不)懂老师的话 (có / không thể nghe hiểu).',
              examples: [
                x('我听[得(不)懂]老师的话。', 'Wǒ tīng de (bu) dǒng lǎoshī de huà.', 'Tôi nghe (không) hiểu lời thầy giáo.'),
                x('我想[得起来]他的名字。', 'Wǒ xiǎng de qǐlái tā de míngzi.', 'Tôi nhớ ra được tên anh ấy.'),
                x('我想[不起来]他的名字。', 'Wǒ xiǎng bu qǐlái tā de míngzi.', 'Tôi không nhớ ra tên anh ấy.'),
              ],
            },
            {
              formula: '〈宾〉 + 〈主〉 + 〈动〉 + 得 / 不 + …', title: 'Tân ngữ đứng đầu câu hoặc cuối câu đều được',
              note: 'Tân ngữ có thể ở cuối câu, cũng có thể đưa lên đầu câu.',
              examples: [
                x('我吃[不了]这些饭。', 'Wǒ chī bu liǎo zhèxiē fàn.', 'Tôi ăn không hết chỗ cơm này.', 'Cũng nói được: 这些饭我吃不了.'),
                x('我看[不清楚]那几个字。', 'Wǒ kàn bu qīngchu nà jǐ ge zì.', 'Tôi nhìn không rõ mấy chữ kia.'),
                x('他五点前回[得来]回[不来]？', 'Tā wǔ diǎn qián huí de lái huí bu lái?', 'Trước năm giờ anh ấy về kịp hay không?'),
              ],
            },
            {
              formula: '〈动〉 得 〈 〉 〈动〉 不 〈 〉　·　〈动〉 不 〈动〉 得 〈 〉', title: 'Câu hỏi chính phản có hai dạng',
              note: 'Hoặc lặp cả bổ ngữ ở hai vế, hoặc rút gọn: động từ + 不 + động từ + 得 + bổ ngữ.',
              examples: [
                x('这么脏的衣服洗[得干净]洗[不干净]？', 'Zhème zāng de yīfu xǐ de gānjìng xǐ bu gānjìng?', 'Quần áo bẩn thế này giặt có sạch được không?'),
                x('这么脏的衣服洗[不]洗[得干净]？', 'Zhème zāng de yīfu xǐ bu xǐ de gānjìng?', 'Quần áo bẩn thế này giặt có sạch được không?'),
              ],
            },
          ],
        },
        {
          title: 'Cấu trúc cố định',
          patterns: [
            {
              formula: '〈动 / 形〉 + 得 / 不 + 了 (liǎo)', title: '① 得了 / 不了: có thể hay không thể làm, hoặc có thể hay không có kết quả đó',
              note: 'Chữ 了 ở đây đọc liǎo.',
              examples: [
                x('天气冷了，这些苹果红[得了]吗？', 'Tiānqì lěng le, zhèxiē píngguǒ hóng de liǎo ma?', 'Trời lạnh rồi, mấy quả táo này chín đỏ được không?'),
                x('他年纪大了，走[不了]那么远的路。', 'Tā niánjì dà le, zǒu bu liǎo nàme yuǎn de lù.', 'Ông ấy lớn tuổi rồi, không đi nổi quãng đường xa thế.'),
              ],
            },
            {
              formula: '〈动 / 形〉 + 得 / 不 + 了 (liǎo)', title: '② 得了 / 不了: có thể hay không thể làm xong, dùng hết',
              note: 'Cùng hình thức với ①, nhưng nghĩa là làm xong, ăn hết, dùng hết.',
              examples: [
                x('点了这么多菜，咱们怎么吃[得了]？', 'Diǎn le zhème duō cài, zánmen zěnme chī de liǎo?', 'Gọi nhiều món thế, chúng ta sao ăn hết nổi?'),
                x('我一个月花[不了]那么多钱。', 'Wǒ yí ge yuè huā bu liǎo nàme duō qián.', 'Một tháng tôi không tiêu hết nhiều tiền như vậy.'),
              ],
            },
            {
              formula: '〈动 / 形〉 + 得 (dé) / 不得', title: '③ 不得: điều kiện khách quan không cho phép, làm sẽ có hậu quả xấu',
              note: 'Dạng phủ định chỉ không được phép, vì làm sẽ có hậu quả không tốt. Dạng khẳng định "động từ đơn âm + 得" chỉ có thể làm, không sao. Chữ 得 ở đây đọc dé.',
              examples: [
                x('这件事很重要，放松[不得]。', 'Zhè jiàn shì hěn zhòngyào, fàngsōng bu dé.', 'Việc này rất quan trọng, không thể lơ là.'),
                x('这些剩菜吃[不得]了，快倒掉吧。', 'Zhèxiē shèngcài chī bu dé le, kuài dàodiào ba.', 'Mấy món thừa này ăn không được nữa rồi, mau đổ đi.'),
                x('路上车多，大意[不得]。', 'Lùshang chē duō, dàyi bu dé.', 'Đường nhiều xe, không được sơ ý.'),
                x('他表扬[不得]，一表扬就骄傲起来了。', 'Tā biǎoyáng bu dé, yì biǎoyáng jiù jiāo\'ào qǐlái le.', 'Cậu ấy không khen được, khen một cái là kiêu ngạo ngay.'),
                x('他身体不好，吹[不得]风。', 'Tā shēntǐ bù hǎo, chuī bu dé fēng.', 'Cơ thể anh ấy không tốt, không được để gió thổi.'),
                x('箱子里有鸡蛋，压[不得]。', 'Xiāngzi lǐ yǒu jīdàn, yā bu dé.', 'Trong thùng có trứng, không được đè.'),
                x('这种恐怖电影是小孩子看[得]的吗？', 'Zhè zhǒng kǒngbù diànyǐng shì xiǎoháizi kàn de de ma?', 'Phim kinh dị thế này mà trẻ con xem được sao?'),
                x('这件衣服放在洗衣机里洗[得]洗[不得]？', 'Zhè jiàn yīfu fàng zài xǐyījī lǐ xǐ de xǐ bu dé?', 'Bộ đồ này bỏ vào máy giặt giặt được không?'),
              ],
            },
            {
              formula: '顾得 / 顾不得 · 舍得 / 舍不得 · 怨不得 · 恨不得 · 巴不得 + 〈宾〉', title: '③ ngoại lệ: các từ cố định này có thể mang tân ngữ',
              note: 'Cách dùng 不得 nói chung không mang tân ngữ. Nhưng những từ cố định này nghĩa đặc biệt nên mang được danh từ hoặc động từ làm tân ngữ.',
              examples: [
                x('最近事情太忙，[顾得]这个，[顾不得]那个。', 'Zuìjìn shìqing tài máng, gù de zhège, gù bu dé nàge.', 'Dạo này bận quá, lo được việc này thì không lo nổi việc kia.'),
                x('只要你[舍得]花时间花精力，就能学好。', 'Zhǐyào nǐ shěde huā shíjiān huā jīnglì, jiù néng xuéhǎo.', 'Chỉ cần bạn chịu bỏ thời gian và công sức thì sẽ học tốt.'),
                x('马上要回国了，我真[舍不得]这里的一切。', 'Mǎshàng yào huíguó le, wǒ zhēn shěbude zhèlǐ de yíqiè.', 'Sắp về nước rồi, tôi thật không nỡ rời mọi thứ ở đây.'),
                x('都怪我没说清楚，也[怨不得]你误会。', 'Dōu guài wǒ méi shuō qīngchu, yě yuànbude nǐ wùhuì.', 'Đều tại tôi nói không rõ, cũng không trách bạn hiểu lầm được.'),
                x('我[恨不得]长出一对翅膀马上飞回去。', 'Wǒ hènbude zhǎngchū yí duì chìbǎng mǎshàng fēi huíqù.', 'Tôi chỉ ước mọc đôi cánh bay về ngay.'),
                x('我也想多玩一会儿，正[巴不得]你说这句话呢。', 'Wǒ yě xiǎng duō wán yíhuìr, zhèng bābude nǐ shuō zhè jù huà ne.', 'Tôi cũng muốn chơi thêm lát nữa, đang mong bạn nói câu này đây.'),
              ],
            },
            {
              formula: '〈动〉 + 得 + 来 (phủ định: 〈动〉 + 不 + 来)', title: '④ 得来 / 不来: có đáng hay không, có quen hay không, có hợp nhau không',
              note: 'Biểu thị đáng hay không đáng, quen hay không quen, hoặc có thể ở bên nhau làm việc không. Hay dùng: 说得来, 谈得来, 吃得来, 住得来, 合得来, 划得来.',
              verbs: ['说得来', '谈得来', '吃得来', '住得来', '合得来', '划得来'],
              examples: [
                x('他们是好朋友，很[合得来]。', 'Tāmen shì hǎo péngyou, hěn hé de lái.', 'Họ là bạn tốt, rất hợp nhau.', 'Có thể ở bên nhau, cùng sở thích.'),
                x('香菜有一种特别的味道，我[吃不来]。', 'Xiāngcài yǒu yì zhǒng tèbié de wèidào, wǒ chī bu lái.', 'Ngò có mùi đặc biệt, tôi ăn không quen.', 'Không quen.'),
                x('花那么多钱买件衣服真[划不来]。', 'Huā nàme duō qián mǎi jiàn yīfu zhēn huá bu lái.', 'Bỏ nhiều tiền mua một bộ đồ thật không đáng.', 'Không đáng.'),
              ],
            },
            {
              formula: '〈动 / 形〉 + 得 + 住 (phủ định: 〈动 / 形〉 + 不 + 住)', title: '⑤ 得住 / 不住: có kiên trì, chịu đựng được không, có thể làm không',
              note: 'Hỏi có chịu nổi, đứng vững, đáng tin hay không.',
              examples: [
                x('没关系，我能忍[得住]。', 'Méi guānxi, wǒ néng rěn de zhù.', 'Không sao, tôi chịu đựng được.'),
                x('他这个人靠[不住]，你别相信他。', 'Tā zhège rén kào bu zhù, nǐ bié xiāngxìn tā.', 'Người này không đáng tin, bạn đừng tin anh ta.'),
                x('不用扶我，我站[得住]。', 'Búyòng fú wǒ, wǒ zhàn de zhù.', 'Không cần đỡ tôi, tôi đứng vững được.'),
              ],
            },
            {
              formula: '〈动〉 + 得 + 着 zháo (phủ định: 〈动〉 + 不 + 着)', title: '⑥ 得着 / 不着: có đạt được kết quả đó không, có đáng làm không',
              note: 'Chữ 着 đọc zháo.',
              examples: [
                x('为这点儿小事，你[犯得着]跟他吵架吗？', 'Wèi zhè diǎnr xiǎo shì, nǐ fàn de zháo gēn tā chǎojià ma?', 'Vì chuyện nhỏ này, bạn có đáng cãi nhau với anh ta không?', 'Hàm ý: không đáng.'),
                x('这本书在哪儿能买[得着]？', 'Zhè běn shū zài nǎr néng mǎi de zháo?', 'Cuốn sách này mua được ở đâu?'),
                x('这家医院在全国都是数[得着]的。', 'Zhè jiā yīyuàn zài quánguó dōu shì shǔ de zháo de.', 'Bệnh viện này thuộc hàng đếm được trên cả nước.'),
              ],
            },
            {
              formula: '〈动 / 形〉 + 得 + 〈趋向补语〉 (phủ định: 〈动 / 形〉 + 不 + 〈趋向补语〉)', title: '⑦ Kèm bổ ngữ xu hướng',
              note: 'Nối với bài hôm qua: bổ ngữ xu hướng cũng có thể thêm 得 / 不.',
              examples: [
                x('刚12点，我还能吃[得上]饭。', "Gāng shí'èr diǎn, wǒ hái néng chī de shàng fàn.", 'Mới 12 giờ, tôi vẫn kịp ăn cơm.'),
                x('这个问题的答案我怎么也想[不出来]。', 'Zhège wèntí de dá\'àn wǒ zěnme yě xiǎng bu chūlái.', 'Đáp án của câu hỏi này tôi nghĩ mãi không ra.'),
              ],
            },
            {
              formula: '吃得消 / 吃不消', title: '⑧ Cách dùng thành ngữ: 吃得消, 吃不消 (chịu nổi, không chịu nổi)',
              note: 'Còn một số cách dùng quen thuộc khác như thế này. Nghĩa là: không chịu đựng nổi.',
              examples: [x('最近每天熬夜，我的身体有些[吃不消]了。', 'Zuìjìn měi tiān áoyè, wǒ de shēntǐ yǒuxiē chī bu xiāo le.', 'Dạo này đêm nào cũng thức khuya, cơ thể tôi hơi chịu không nổi.', '＝ 受不了.')],
            },
          ],
        },
      ],
    },
  ],

  // ───────────────────────── 学习要点 (bảng ghi nhớ) ─────────────────────────
  boards: [
    {
      id: 'shuliang', hanzi: '数量补语', title: 'Bổ ngữ số lượng',
      rows: [
        {
          label: 'Ba loại',
          formulas: ['比较数量补语: A (比 B) + 〈形〉 + 〈数量词〉', '动量补语: 〈动〉 + 〈动量词〉 (一次, 一遍, 一眼…)', '时量补语: 〈动〉 + 〈时间〉'],
        },
        {
          label: '1. So sánh',
          formulas: ['A (比 B) + 〈形〉 + 〈数量词〉'],
          examples: [
            x('他比我[大三岁]。', 'Tā bǐ wǒ dà sān suì.', 'Anh ấy lớn hơn tôi ba tuổi.'),
            x('机场比火车站[远十公里]。', 'Jīchǎng bǐ huǒchēzhàn yuǎn shí gōnglǐ.', 'Sân bay xa ga tàu mười cây số.'),
          ],
          ps: 'Trong câu so sánh, trước tính từ không dùng các phó từ mức độ như "很 / 非常 / 十分", nhưng phía sau có thể thêm bổ ngữ số lượng.',
        },
        {
          label: '2. Động lượng và thời lượng',
          text: 'Cách dùng cơ bản giống nhau, chỉ cần chú ý trường hợp tân ngữ của động lượng là đại từ, và tân ngữ của thời lượng là "nơi chốn / người".',
        },
        {
          label: '① Không có tân ngữ',
          formulas: ['动量: 〈动〉 + 〈动量词〉', '时量: 〈动〉 + 〈时间〉'],
          examples: [
            x('我看了[一遍]。', 'Wǒ kàn le yí biàn.', 'Tôi đã xem một lượt.'),
            x('我看了[一个小时]。', 'Wǒ kàn le yí ge xiǎoshí.', 'Tôi đã xem một tiếng.'),
          ],
        },
        {
          label: '② Tân ngữ thông thường',
          formulas: ['动量: 〈动〉 + 〈宾〉 + 〈动〉 (+ 了 / 过) + 〈动量词〉', '动量: 〈动〉 (+ 了 / 过) + 〈动量词〉 + 〈宾〉', '时量: 〈动〉 + 〈宾〉 + 〈动〉 (+ 了 / 过 / 到) + 〈时间〉', '时量: 〈动〉 (+ 了 / 过) + 〈时间〉 (+ 的) + 〈宾〉'],
          examples: [
            x('我看这本书看了[一遍]。', 'Wǒ kàn zhè běn shū kàn le yí biàn.', 'Tôi xem cuốn sách này một lượt.', 'Cũng nói: 我看了一遍这本书.'),
            x('我看书看了[一个小时]。', 'Wǒ kàn shū kàn le yí ge xiǎoshí.', 'Tôi đọc sách một tiếng.', 'Cũng nói: 我看了一个小时(的)书.'),
          ],
          ps: 'Khi sau động từ của bổ ngữ thời lượng có "到" thì bắt buộc phải lặp lại động từ. Ví dụ: 我看书看到下午六点。',
        },
        {
          label: '③ Tân ngữ đặc biệt',
          formulas: ['动量: 〈动〉 + 〈宾(代词)〉 + 〈动量词〉', '时量: 〈动〉 + 〈宾(处所 / 人)〉 + 〈时间〉'],
          examples: [
            x('我看了[他][一眼]。', 'Wǒ kàn le tā yì yǎn.', 'Tôi nhìn anh ấy một cái.'),
            x('我来[中国][一年多]了。', 'Wǒ lái Zhōngguó yì nián duō le.', 'Tôi đến Trung Quốc hơn một năm rồi.'),
            x('我等了[他][半个小时]。', 'Wǒ děng le tā bàn ge xiǎoshí.', 'Tôi đã đợi anh ấy nửa tiếng.'),
          ],
        },
        {
          label: 'Điểm thi',
          points: [
            { text: 'Đại từ làm tân ngữ phải đứng trước động lượng.', fixes: [{ wrong: '她嗔怪地看了一眼我', right: '她嗔怪地看了我一眼', ref: 'Kiểm tra 4 · A' }] },
            { text: 'Động từ ly hợp: bổ ngữ chen vào giữa động từ và tân ngữ.', fixes: [{ wrong: '便同意见面一下', right: '便同意见一下面', ref: 'Kiểm tra 1 · C' }, { wrong: '也要走路30分钟', right: '也要走30分钟路', ref: 'Kiểm tra 2 · D' }] },
            { text: 'Sau động từ có 到 phải lặp động từ.', fixes: [{ wrong: '小刘每天上网聊天到深夜', right: '小刘每天上网聊天聊到深夜', ref: 'Kiểm tra 3 · A' }] },
          ],
          ps: 'Động từ đã lặp (重叠) thì không thể có thêm bổ ngữ số lượng, kết quả… Ví dụ: 我们商量商量完了再告诉她吧 ✗ → 商量商量 hoặc 商量完了. 他向我点点一下儿头 ✗ → 点点头 hoặc 点一下儿头.',
        },
      ],
    },
    {
      id: 'de', hanzi: '带"得"的补语', title: 'Bổ ngữ có 得: mức độ, tình thái',
      rows: [
        {
          label: 'Cấu trúc',
          formulas: ['〈动 / 形〉 + 得 + 〈怎么样〉'],
          examples: [x('他玩儿得[很高兴]。', 'Tā wánr de hěn gāoxìng.', 'Anh ấy chơi rất vui.')],
        },
        {
          label: 'Có tân ngữ',
          formulas: ['主语 + 〈动〉 + 宾语 + 〈动〉 + 得 + 〈怎么样〉', '主语 + 宾语 + 〈动〉 + 得 + 〈怎么样〉', '宾语 + 主语 + 〈动〉 + 得 + 〈怎么样〉'],
          examples: [
            x('他玩电脑玩得[很高兴]。', 'Tā wán diànnǎo wán de hěn gāoxìng.', 'Anh ấy chơi máy tính rất vui.'),
            x('他电脑玩得[很高兴]。', 'Tā diànnǎo wán de hěn gāoxìng.', 'Máy tính thì anh ấy chơi rất vui.'),
            x('电脑他玩得[很高兴]。', 'Diànnǎo tā wán de hěn gāoxìng.', 'Máy tính, anh ấy chơi rất vui.'),
          ],
          ps: 'Đặc biệt là các động từ ly hợp, nhất định phải chú ý vị trí tân ngữ. Ví dụ: 今天(下)雨得很大 ✗ → 今天雨下得很大.',
        },
        {
          label: 'Mức độ → tình thái',
          text: 'Có bổ ngữ mức độ khi được diễn tả bằng cả câu tình thái thì trở thành bổ ngữ tình thái.',
          examples: [
            x('他高兴得[很]。', 'Tā gāoxìng de hěn.', 'Anh ấy vui lắm.', undefined, 'bổ ngữ mức độ'),
            x('他高兴得[跳了起来]。', 'Tā gāoxìng de tiào le qǐlái.', 'Anh ấy vui đến nhảy cẫng lên.', undefined, 'bổ ngữ tình thái'),
          ],
        },
        {
          label: 'Phủ định, nghi vấn',
          text: 'Phủ định và nghi vấn của bổ ngữ tình thái thường diễn đạt ở phần bổ ngữ.',
          examples: [
            x('他说得[很好]。', 'Tā shuō de hěn hǎo.', 'Anh ấy nói rất giỏi.'),
            x('他说得[不好]。', 'Tā shuō de bù hǎo.', 'Anh ấy nói không giỏi.'),
            x('他说得[好不好]？/ 他说得[好吗]？', 'Tā shuō de hǎo bu hǎo? / Tā shuō de hǎo ma?', 'Anh ấy nói có giỏi không?'),
          ],
        },
        {
          label: 'Điểm thi',
          points: [
            { text: 'Động từ ly hợp (生气, 着急, 生病…) khi theo sau là bổ ngữ thì dùng thẳng phần "气 / 急 / 病".', examples: [x('气得很 · 急得不行 · 病了一个星期', 'Qì de hěn · jí de bùxíng · bìng le yí ge xīngqī', 'giận lắm · sốt ruột không chịu nổi · ốm một tuần')], fixes: [{ wrong: '她回到家，生气得不得了', right: '她回到家，气得不得了', ref: 'Kiểm tra 5 · B', why: '生气 là động từ ly hợp (你生什么气呀).' }] },
            { text: 'Phủ định của bổ ngữ tình thái đặt ở phần bổ ngữ, không đặt trước động từ.', fixes: [{ wrong: '许多外国文艺作品不翻译得好', right: '许多外国文艺作品翻译得不好', ref: 'Kiểm tra 6 · A' }] },
          ],
          ps: 'Tính từ trong bổ ngữ mức độ / tình thái nên dùng phó từ mức độ bổ nghĩa. Nếu tính từ là thành ngữ bốn chữ, cụm từ hoặc dạng láy thì không được thêm phó từ mức độ nữa, tức là mức độ không được lặp lại. 你的汉字写得非常漂亮 ✓ · 房间打扫得很干干净净 ✗ · 他吃得津津有味极了 ✗.',
        },
      ],
    },
    {
      id: 'keneng', hanzi: '可能补语', title: 'Bổ ngữ khả năng',
      rows: [
        {
          label: 'Cấu trúc',
          text: 'Thêm 得 / 不 vào trước bổ ngữ kết quả và bổ ngữ xu hướng để biểu thị "có thể / không thể".',
          examples: [
            x('我听懂了老师的话。', 'Wǒ tīngdǒng le lǎoshī de huà.', 'Tôi đã nghe hiểu lời thầy.', undefined, 'hoàn thành, dùng 了'),
            x('我听[得(不)]懂老师的话。', 'Wǒ tīng de (bu) dǒng lǎoshī de huà.', 'Tôi nghe (không) hiểu được lời thầy.', 'Nói chung, một tình huống thường gặp, nên không cần 了 diễn tả hoàn thành.', 'khả năng'),
            x('我想起来他的名字了。 / 我想得起来 / 我想不起来他的名字。', 'Wǒ xiǎng qǐlái tā de míngzi le. / … xiǎng de qǐlái / … xiǎng bu qǐlái …', 'Tôi nhớ ra tên anh ấy rồi. / nhớ ra được / không nhớ ra.'),
          ],
        },
        {
          label: 'Câu hỏi chính phản',
          formulas: ['〈动〉 + 得 + 〈 〉 + 〈动〉 + 不 + 〈 〉', '〈动〉 + 不 + 〈动〉 + 得 + 〈 〉'],
          examples: [
            x('这么脏的衣服洗[得干净]洗[不干净]？', 'Zhème zāng de yīfu xǐ de gānjìng xǐ bu gānjìng?', 'Quần áo bẩn thế này giặt có sạch được không?'),
            x('这么脏的衣服洗[不]洗[得干净]？', 'Zhème zāng de yīfu xǐ bu xǐ de gānjìng?', 'Quần áo bẩn thế này giặt có sạch được không?'),
          ],
        },
      ],
    },
  ],

  // ───────────────────────── 知识点测试 (6 câu) ─────────────────────────
  test: [
    seg(['三十好几了还不结婚，我不着急家人朋友倒急得很，', '三天两头给我安排约会，我也', '不能不顾大家的热心，便同意见面一下，', '可没想到他们却因此更热心了。'], 2, 'Động lượng + động từ ly hợp',
      '便同意见一下面', '见面 là động từ ly hợp, bổ ngữ động lượng phải chen vào giữa: 见一下面.'),
    seg(['家住齐营的刘女士向记者抱怨，', '她已经等了40分钟了，地铁列车还没来，', '出站换乘公共汽车吧，', '可离这儿最近的公共汽车站也要走路30分钟。'], 3, 'Thời lượng + động từ ly hợp',
      '也要走30分钟路', '走路 là động từ ly hợp, bổ ngữ thời lượng chen giữa: 走30分钟路.'),
    seg(['小刘每天上网聊天到深夜，', '严重影响了正常的生活和工作，', '可小刘自己也管不了自己，', '他说不上网就觉得好像有什么重要的事情没做完一样。'], 0, 'Thời lượng có 到 phải lặp động từ',
      '小刘每天上网聊天聊到深夜', 'Sau động từ có 到 làm bổ ngữ thời lượng thì phải lặp lại động từ: 聊天聊到深夜.'),
    seg(['她嗔怪地看了一眼我，', '什么都没说，', '而我却从她的眼神中感到了压力，', '连忙向她道歉，可是她才等了我五分钟啊。'], 0, 'Động lượng: tân ngữ đại từ đứng trước',
      '她嗔怪地看了我一眼', 'Tân ngữ là đại từ (我) phải đứng trước bổ ngữ động lượng: 看了我一眼.'),
    seg(['她回到家，', '生气得不得了，', '于是千方百计地想找一个办法，', '好好教训一下那不争气的儿子。'], 1, 'Động từ ly hợp + bổ ngữ mức độ',
      '气得不得了', '生气 là động từ ly hợp. Phía sau có bổ ngữ thì dùng thẳng 气: 气得不得了.'),
    seg(['许多外国文艺作品不翻译得好，', '失去了原著的魅力，', '我在为这些名著感到惋惜的同时，', '也对一些翻译工作者的语言素质提出质疑。'], 0, 'Phủ định bổ ngữ tình thái',
      '许多外国文艺作品翻译得不好', 'Phủ định của bổ ngữ tình thái nằm ở phần bổ ngữ: 翻译得不好.'),
  ],

  // ───────────────────────── 新HSK仿真试题 (15 câu) ─────────────────────────
  exam: [
    sen([
      '昨天刮风很大，我一直呆在宿舍没出门。',
      '周末他们去爬山了，所以周一很晚才起床。',
      '农历正月十五是中国传统的元宵节。',
      '京郊小汤山在历史上曾经是一个湖。',
    ], 0, 'Tân ngữ của bổ ngữ tình thái', '昨天风刮得很大', 'Vị trí tân ngữ sai: 风 là chủ thể của 刮, bổ ngữ tình thái nằm sau 得. Phải nói 昨天风刮得很大.'),
    sen([
      '未来一周内，华北地区的气温将会大幅度回升。',
      '高尔基曾经说过："书籍是青年人不可分离的生命伴侣和导师。"',
      '遇到什么困难就跟我说，两个人至少可以商量商量一下儿。',
      '成功的时候不要忘记过去，失败的时候不要忘记还有未来。',
    ], 2, 'Động từ lặp không thêm bổ ngữ', '两个人至少可以商量商量', 'Động từ đã lặp thì không thể có thêm bổ ngữ số lượng. Sửa thành 商量商量 hoặc 商量一下儿.'),
    sen([
      '她把房间整理得井井有条。',
      '来中国以前，他做过推销员三年。',
      '已经等了两个小时了，她今天一定不会来了。',
      '今天夜间到明天白天，北京大部分地区将会出现大到暴雨。',
    ], 1, 'Vị trí của bổ ngữ thời lượng', '他做过三年(的)推销员 / 他做推销员做了三年', '"推销员" ở đây chỉ thân phận công việc, không phải tân ngữ chỉ người. Bổ ngữ thời lượng phải đặt trước (thêm 的) hoặc lặp động từ.'),
    sen([
      '我想来想去也想不通他为什么会这么排斥我。',
      '由于长期见不到阳光和营养不良，他们大都脸色苍白，骨瘦如柴。',
      '通过不断努力，他说汉语越来越地道，我有时候跟他聊天儿，甚至会忘了他是外国人。',
      '经过长期的实践，中国建筑在色彩运用方面积累了丰富的经验，并形成了南北不同的地域色彩风格。',
    ], 2, 'Tân ngữ của bổ ngữ tình thái', '他(说)汉语说得越来越地道', 'Lỗi về tân ngữ của bổ ngữ tình thái: phải lặp động từ 说汉语说得…, hoặc đưa tân ngữ lên trước: 他汉语说得越来越地道.'),
    sen([
      '这场雨断断续续一直下到第二天上午九点左右才结束。',
      '今天是六一儿童节，我们应该带孩子出去好好玩儿一下。',
      '汉字很古老，生命力却很强，是目前世界上使用人口最多的文字。',
      '爸爸每天都很忙，有时甚至到晚上十二点工作，连跟家人在一起吃饭的时间都没有。',
    ], 3, 'Vị trí của bổ ngữ thời lượng', '有时甚至工作到晚上十二点', 'Khoảng thời gian "đến mười hai giờ đêm" là bổ ngữ, phải đặt sau động từ: 工作到晚上十二点.'),
    sen([
      '科学技术的进步会促进生产力的发展。',
      '教室还没有打扫，显得很乱糟糟的。',
      '未来两天北京将会出现沙尘暴天气。',
      '冬冷夏热、四季分明是温带气候的显著特点。',
    ], 1, 'Tính từ láy không thêm phó từ mức độ', '显得乱糟糟的', 'Dạng láy "乱糟糟" đã mang mức độ rồi, không thể thêm 很 nữa.'),
    sen([
      '妈妈每天把房间打扫得一尘不染得干净。',
      '昨天睡得很晚，所以第二天九点多我才醒。',
      '年初，他因为炒股破了产，生活水平一落千丈。',
      '下个周末，我和几个朋友一起去郊区春游。',
    ], 0, 'Bổ ngữ tình thái bị lặp', '妈妈每天把房间打扫得一尘不染 / 打扫得很干净', '"一尘不染" nghĩa là sạch sẽ, nên không thêm "得干净" nữa, bổ ngữ bị lặp.'),
    sen([
      '李芳考上了名牌大学，爸爸妈妈看着录取通知书，高兴得合不拢嘴。',
      '他的记忆力越来越差了，就拿上星期公司的例会来说吧，虽然秘书提醒了三次他，但是他还是忘了参加。',
      '过年张贴年画，既能渲染节日气氛，又能美化环境，同时还可以寄托人们的美好理想和愿望。',
      '悬空寺位于北岳恒山脚下的金龙峡，据说是北魏时一位叫了然的和尚所建，距今已有1500多年的历史。',
    ], 1, 'Động lượng: tân ngữ đại từ đứng trước', '虽然秘书提醒了他三次', 'Tân ngữ là đại từ phải đứng trước bổ ngữ động lượng: 提醒了他三次.'),
    sen([
      '勤俭节约的精神固然重要，然而事情的成败更离不开人们不懈的努力奋斗。',
      '常言道"百闻不如一见"，我们不能随便相信别人，自己的眼睛见到的才是真实的。',
      '地球刚刚诞生的时候，它的表面没有一滴水，当然也不会有任何生命。',
      '相爱多年的女友竟然在订婚当天不辞而别，他生病了一个多星期，人也瘦了一大圈儿，整天关在屋子里一声不吭。',
    ], 3, 'Thời lượng + động từ ly hợp', '他病了一个多星期', '生病 là động từ ly hợp, "病" là tân ngữ, phải đặt sau bổ ngữ thời lượng; "病" cũng có thể trực tiếp làm động từ: 病了一个多星期.'),
    sen([
      '杯水车薪，是说用一杯水去灭一车柴草燃烧的火，比喻力量太小，解决不了问题。',
      '事实表明，人的生存耐力是无法想象的，它有时强大得了不得，对于智残的人来说更是如此。',
      '为什么高山上生长的茶叶质量特别好呢？这与高山上的空气、光照、温度、土壤等自然环境有关。',
      '几乎所有的人都在追求着人生的幸福。其实，每个人都是幸福的。只是，你的幸福，常常在别人眼里。',
    ], 1, 'Cấu trúc cố định của bổ ngữ mức độ', '它有时强大得不得了', 'Cấu trúc cố định đúng là 得不得了 (liǎo), không phải 得了不得.'),
    sen([
      '齐白石是中国近现代杰出的画家。白石老人尤以画虾闻名，他画的虾，通体透明，富有动感。',
      '快餐厅往往采用明快的红色，这样能够调动食欲，并且加快进餐的速度。',
      '一条街上的几家鞋厂都倒闭了，只有那家工厂的效益一直很好，他们家皮鞋做结实，样式也十分新颖，所以鞋一出厂就卖光了。',
      '人生来就会笑，但很少有人知道，笑也是一种很好的健身运动。研究证明，笑与人们的健康有着十分密切的关系。',
    ], 2, 'Bổ ngữ tình thái cần có 得', '他们家皮鞋做得结实', '"结实" là tính từ, làm bổ ngữ tình thái bắt buộc phải có 得: 做得结实.'),
    sen([
      '我至今也不忘了那一幕：母亲的白发，特别是头顶上那几根，在晓风中微微地颤动，颤动得我的心都碎了。',
      '过于追求完美的人对自己要求很高，凡事都要求周密，希望一切事情的进展和变化都在自己的掌握之中。',
      '无论年龄大小、地位高低，每个人都渴望得到他人的肯定，都不会拒绝他人的赞扬。',
      '随着时间的推移，科技带给了我们日新月异的生活体验，笔记本电脑已成为人们生活、工作、娱乐不可或缺的助手。',
    ], 0, 'Bổ ngữ khả năng: 忘不了', '我至今也忘不了那一幕', '"至今" là "từ quá khứ đến hiện tại", trước động từ không dùng 不. Câu muốn nói "đến nay tôi vẫn không thể quên", nên phải dùng 忘不了 (liǎo).'),
    sen([
      '生态文明既追求人与生态的和谐，也追求人与人的和谐。',
      '打哈欠是人类的一种本能行为，非主观意志所能控制。',
      '动漫这个专业现在比较吃得消，国内现在很缺动漫人才，而且国家也在大力扶持这个行业的发展。',
      '2009年7月15日，"姚之队"与上海大鲨鱼俱乐部达成一致，双方正式签订了股权转让框架协议。',
    ], 2, 'Dùng sai cách nói cố định 吃得消', '动漫这个专业现在比较吃香', '"吃得消" nghĩa là chịu nổi, không hợp với ý câu. Câu muốn nói "được ưa chuộng, dễ kiếm sống" nên phải là 吃香.'),
    sen([
      '我们要学会自己控制自己的心情，而不是让别人决定你的心情。',
      '在人生的道路上，总有顺境和逆境、快乐和忧愁，只有保持平和的生活态度，我们才能生活得更轻松。',
      '面试最忌紧张，因为一紧张就什么都乱了，该做好的事情不做得好，该有的水平发挥得不出来，真是越紧张越坏事。',
      '除非在未来十年左右出现突破性的技术进展，否则我们是拿不出什么现实可行的清理太空垃圾的方案的。',
    ], 2, 'Phủ định của bổ ngữ khả năng', '该做好的事情做不好，该有的水平发挥不出来', 'Dạng phủ định của bổ ngữ khả năng là động từ + 不 + bổ ngữ: 做不好, 发挥不出来. Không dùng 不做得好 hay 发挥得不出来.'),
    sen([
      '撒谎是孩子们成长过程中的一个正常现象，家长不要一味地责备和惩罚，而是要注意引导孩子。',
      '在更衣室的一个角落里，站着一个年轻漂亮的姑娘，她满脸焦虑，看样子需要帮助。我正想找一个模特儿谈话谈话，就走过去跟她打招呼："你有什么问题么？"',
      '虽然谦逊是一种美德，但在当今社会对男性不一定适用，女性通常更喜欢自信，甚至有点儿自傲的男性。',
      '人们常说"字如其人"，我认为这的确有道理，字能反映一个人的气质和性格，书写潦草的人可能就是一个"马大哈"，书写工工整整的人做事必定细致，主次分明。',
    ], 1, 'Động từ ly hợp khi lặp', '我正想找一个模特儿谈一下儿话 / 谈谈话', '谈话 là động từ ly hợp, khi lặp phải là 谈谈话 (AAB), hoặc dùng 谈一下儿话; không được nói 谈话谈话.'),
  ],
}
