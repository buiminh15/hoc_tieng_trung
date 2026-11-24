import type { DayContent, Ex, ErrQ } from './types'

/**
 * Tuần 2 · Thứ Sáu: Cách dùng thường gặp của 的 · câu chữ 是 · câu chữ 有 ("的"的常见用法 "是"字句 "有"字句), sách trang 161–172.
 * Phần dịch tiếng Việt và pinyin do app tự thêm.
 */

const x = (h: string, p: string, vi: string, note?: string, tag?: string): Ex => ({ h, p, vi, note, tag })
const e = (h: string, vi: string, note?: string, tag?: string): Ex => ({ h, vi, note, tag })
const seg = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'segment', parts, answer, topic, fix, why })
const sen = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'sentence', parts, answer, topic, fix, why })

export const day10: DayContent = {
  intro:
    'Khi học định ngữ ta đã nhắc rằng "的" ngoài việc là dấu hiệu của định ngữ còn có vài cách dùng cố định. Về mặt ngữ pháp, "的" vừa là trợ từ kết cấu, vừa biểu thị thể của động tác, cần phân biệt với "了". Câu chữ "是" và câu chữ "有" cũng là phần quan trọng của kỳ thi, năm nào cũng có đề. Hôm nay ta gộp mấy hình thức này lại để bạn có một khái niệm chung.',

  focusTitle: 'Ba phần học hôm nay',

  cheat: {
    title: 'Bảng tra nhanh: 的 · 是 · 有',
    lead: 'Cả ba đều xoay quanh câu hỏi: phần nào là chủ ngữ, vị ngữ, tân ngữ, và có thiếu thành phần không.',
    head: ['Cấu trúc', 'Điểm chốt', 'Ví dụ'],
    rows: [
      { key: '的字结构', cells: ['Từ/cụm + 的 = thay danh từ lược bỏ', '我是个教书的。'] },
      { key: '所……的', cells: ['所 + động từ + 的 (+ danh từ), làm định ngữ', '他所期待的爱。'] },
      { key: '(是)……的', cells: ['Nhấn mạnh thời gian, nơi chốn, người, cách thức, nguyên nhân, điều kiện của việc đã xảy ra; hoặc nhấn mạnh quan điểm. Phủ định dùng 不是……的.', '我是坐地铁来的。'] },
      { key: 'A是B', cells: ['A và B phải là danh từ; 是 sau không thêm 了, 着, 过', '北京是中国的首都。'] },
      { key: 'A有B', cells: ['Tồn tại, sở hữu, đạt tới; 有 không đi với 了/过 (trừ miêu tả thì dùng 着)', '北京有很多名牌大学。'] },
    ],
  },

  sections: [
    // ───────────────────────── "的"的常见用法 ─────────────────────────
    {
      id: 'de-yongfa', hanzi: '"的"的常见用法', pinyin: '“de” de chángjiàn yòngfǎ', title: 'Cách dùng thường gặp của 的',
      intro: '"的" thường làm dấu hiệu của định ngữ: danh từ / đại từ / tính từ / động từ + 的 + danh từ. Ngoài ra có: 的字结构, "名词 + 的 + 形容词 / 动词" làm chủ ngữ hoặc tân ngữ, "所……的", và (是)……的.',
      groups: [
        {
          title: 'Ôn lại: 的 làm dấu hiệu định ngữ',
          patterns: [
            { formula: '〈名〉/〈代〉/〈形〉/〈动〉 + 的 + 〈名〉', title: 'Định ngữ + 的 + trung tâm ngữ', note: 'Danh từ, đại từ, tính từ, động từ + 的 + danh từ.', examples: [
              x('[昨天的]电影很有意思。', 'Zuótiān de diànyǐng hěn yǒu yìsi.', 'Phim hôm qua rất hay.'),
              x('他就是[我的]老师。', 'Tā jiù shì wǒ de lǎoshī.', 'Anh ấy chính là thầy của tôi.'),
              x('这件[红色的]毛衣你穿上真漂亮。', 'Zhè jiàn hóngsè de máoyī nǐ chuān shàng zhēn piàoliang.', 'Chiếc áo len đỏ này bạn mặc lên thật đẹp.'),
              x('门口那辆就是[他新买的]汽车。', 'Ménkǒu nà liàng jiù shì tā xīn mǎi de qìchē.', 'Chiếc xe ở cửa là xe anh ấy mới mua.'),
            ] },
          ],
        },
        {
          title: '1. 的字结构',
          patterns: [
            { formula: '〈名〉/〈代〉/〈形〉/〈动〉 + 的  =  thay danh từ bị lược', title: '(1) Thay thế danh từ bị lược', note: 'Danh từ / đại từ / tính từ / động từ + 的: thay thế danh từ đã được lược bỏ.', examples: [
              x('今天的电影比[昨天的](电影)好看。', 'Jīntiān de diànyǐng bǐ zuótiān de (diànyǐng) hǎokàn.', 'Phim hôm nay hay hơn phim hôm qua.'),
              x('我的房间比[你的](房间)大一点儿。', 'Wǒ de fángjiān bǐ nǐ de (fángjiān) dà yìdiǎnr.', 'Phòng tôi to hơn phòng bạn một chút.'),
              x('考试时太紧张了，[简单的](题)都不会做了。', 'Kǎoshì shí tài jǐnzhāng le, jiǎndān de (tí) dōu bú huì zuò le.', 'Lúc thi căng thẳng quá, câu dễ cũng không làm được.'),
              x('你[说的](话)不对。', 'Nǐ shuō de (huà) bú duì.', 'Điều bạn nói không đúng.'),
            ] },
            { formula: '〈名〉+ 的 + 〈形〉 / 〈动〉 ;  〈名〉/〈代〉 + 〈动〉 + 的 + 〈名〉', title: '(2) Biến câu thành cụm: danh từ tính chất', note: '"名词 + 的 + 形容词", "名词/代词 + 的 + 动词", "名词/代词 + 动词 + 的 + 名词" tương đương cụm danh từ, làm chủ ngữ hoặc tân ngữ trong câu.', examples: [
              x('[经济的繁荣]使人民的生活水平提高了。', 'Jīngjì de fánróng shǐ rénmín de shēnghuó shuǐpíng tígāo le.', 'Kinh tế thịnh vượng khiến mức sống nhân dân nâng cao.'),
              x('我始终不能理解[他的出走]。', 'Wǒ shǐzhōng bù néng lǐjiě tā de chūzǒu.', 'Tôi mãi không hiểu việc anh ấy bỏ đi.'),
              x('我最喜欢吃[妈妈炒的菜]。', 'Wǒ zuì xǐhuan chī māma chǎo de cài.', 'Tôi thích nhất ăn món mẹ xào.'),
            ] },
            { formula: '所 + 〈动〉 + 的 (+ 〈名〉)', title: '(3) "所……的"', note: '"所……的": làm định ngữ trong câu. "所" có tác dụng nhấn mạnh, làm câu đầy đủ; có thể lược nhưng ngữ khí và ngữ nghĩa yếu đi.', examples: [
              x('我[所认识的]朋友都是留学生。', 'Wǒ suǒ rènshi de péngyou dōu shì liúxuéshēng.', 'Bạn bè tôi quen đều là du học sinh.'),
              x('环境污染[所引起的]气候变化越来越大。', 'Huánjìng wūrǎn suǒ yǐnqǐ de qìhòu biànhuà yuè lái yuè dà.', 'Biến đổi khí hậu do ô nhiễm môi trường ngày càng lớn.'),
              x('他讲的内容都是我以前[所不了解的]。', 'Tā jiǎng de nèiróng dōu shì wǒ yǐqián suǒ bù liǎojiě de.', 'Nội dung anh nói đều là điều trước đây tôi chưa biết.'),
              x('这件事是大家[所没有想到的]。', 'Zhè jiàn shì shì dàjiā suǒ méiyǒu xiǎngdào de.', 'Việc này là điều mọi người không nghĩ tới.'),
            ] },
          ],
        },
        {
          title: '2. (是)……的',
          patterns: [
            { formula: '是 + 时间/处所/人物/方式/原因/条件 + 〈动〉 + 的', title: '(1) Nhấn mạnh hành động đã xảy ra', note: '是……的 + động tác trong quá khứ: nhấn mạnh thời gian, nơi chốn, người, cách thức, nguyên nhân, điều kiện của hành động đã xảy ra. Phủ định dùng "不是……的" hoặc "没", không dùng "的" lần nữa.', examples: [
              x('我(是)一年前认识他的。', 'Wǒ (shì) yì nián qián rènshi tā de.', 'Tôi quen anh ấy từ một năm trước.', 'Nhấn mạnh thời gian.'),
              x('他(是)在日本学的日语。——昨天(是)你找他的吧？——我没找他。', 'Tā (shì) zài Rìběn xué de Rìyǔ.', 'Anh ấy học tiếng Nhật ở Nhật.', 'Nhấn mạnh nơi chốn; phủ định "我没找他" (không nói "我没找他的").'),
              x('我(是)坐飞机来的。/ 我不是坐飞机来的，是坐火车来的。', 'Wǒ (shì) zuò fēijī lái de. / Wǒ bú shì zuò fēijī lái de, shì zuò huǒchē lái de.', 'Tôi đi máy bay đến. / Tôi không đi máy bay mà đi tàu.', 'Phương thức.'),
              x('衣服(是)可能是风吹的。', 'Yīfu (shì) kěnéng shì fēng chuī de.', 'Quần áo có lẽ do gió thổi.', 'Nguyên nhân.'),
              x('我的作业是在辅导老师的帮助下完成的。', 'Wǒ de zuòyè shì zài fǔdǎo lǎoshī de bāngzhù xià wánchéng de.', 'Bài tập của tôi hoàn thành nhờ sự giúp đỡ của thầy phụ đạo.', 'Điều kiện.'),
            ] },
            { formula: '是 + 〈形〉 + 的', title: '(2) Nhấn mạnh quan điểm của người nói', note: '是 + tính từ + 的: nhấn mạnh quan điểm người nói, một định nhận khẳng định, dùng để chắc chắn thêm; không được lược "的". Trước tính từ có thể thêm phó từ mức độ (很, 非常, 特别, 十分, 最), nhưng không thể thêm 可, 太, 真, 好(不), 多(么).', examples: [
              x('北京的发展是非常迅速的。', 'Běijīng de fāzhǎn shì fēicháng xùnsù de.', 'Sự phát triển của Bắc Kinh rất nhanh.', 'Biểu đạt cách nhìn.'),
              x('杭州的风景是很美的，和我听说过的一样。', 'Hángzhōu de fēngjǐng shì hěn měi de, hé wǒ tīngshuō guo de yíyàng.', 'Phong cảnh Hàng Châu rất đẹp, giống điều tôi nghe nói.'),
              x('他是非常聪明的，你不用对他说得太多。', 'Tā shì fēicháng cōngmíng de, nǐ bú yòng duì tā shuō de tài duō.', 'Anh ấy rất thông minh, bạn không cần nói nhiều với anh.', 'Không nói "他是多聪明的".'),
              x('新HSK综合性强，通过考试是很不容易的。', 'Xīn HSK zōnghéxìng qiáng, tōngguò kǎoshì shì hěn bù róngyì de.', 'HSK mới có tính tổng hợp cao, thi đỗ rất không dễ.'),
              x('抽烟是有害身体健康的。', 'Chōuyān shì yǒuhài shēntǐ jiànkāng de.', 'Hút thuốc có hại sức khỏe.'),
            ] },
          ],
        },
      ],
    },
    // ───────────────────────── "是"字句 ─────────────────────────
    {
      id: 'shi-ju', hanzi: '"是"字句', pinyin: '“shì” zìjù', title: 'Câu chữ 是',
      intro: 'Công thức: A 是 B. Có hai kiểu: A = B (có thể nói ngược "B 是 A") và A ∈ B (A thuộc B, không đảo được).',
      groups: [{
        patterns: [
          { formula: 'A = B  ;  A ∈ B', title: '1. Hai loại quan hệ', note: 'A = B, cũng có thể nói "B 是 A". A ∈ B (A thuộc B) thì không thể nói "B 是 A".', examples: [
            x('北京是中国的首都。(也可以说“中国的首都是北京”)', 'Běijīng shì Zhōngguó de shǒudū.', 'Bắc Kinh là thủ đô Trung Quốc.', 'A = B.'),
            x('几年不见，他已经是总经理了。(不能说“总经理已经是他了”)', 'Jǐ nián bú jiàn, tā yǐjīng shì zǒngjīnglǐ le.', 'Mấy năm không gặp, anh đã là tổng giám đốc.', 'A ∈ B.'),
          ] },
          { formula: 'A (名) + 是 + B (名)', title: '2. A và B phải là danh từ', note: 'A và B phải là danh từ; nếu không phải danh từ thì dùng "的" biến thành cấu trúc danh từ. "是" phủ định là "不是". Sau "是" không thể thêm "了₁ / 着 / 过", nhưng có thể thêm "了₂" biểu thị thay đổi.', examples: [
            x('他是[负责管理的]。', 'Tā shì fùzé guǎnlǐ de.', 'Anh ấy là người phụ trách quản lý.'),
            x('贵的不一定是[好东西]。', 'Guì de bù yídìng shì hǎo dōngxi.', 'Đắt chưa chắc là đồ tốt.'),
            x('他不是孩子，已经是男子汉了。', 'Tā bú shì háizi, yǐjīng shì nánzǐhàn le.', 'Cậu không phải trẻ con, đã là đàn ông rồi.'),
          ] },
          { formula: 'A 是属于 B', title: '3. 是属于', note: 'Khi "是属于" đi cùng nhau, chủ ngữ là một phần được bao gồm trong tân ngữ; câu hỏi về "属于" thể hiện A thuộc B. "是" sau không thêm 了, 着, 过.', examples: [
            x('香港是属于中国的一个特别行政区。', 'Xiānggǎng shì shǔyú Zhōngguó de yí ge tèbié xíngzhèngqū.', 'Hồng Kông thuộc Trung Quốc, là một đặc khu hành chính.'),
          ] },
        ],
      }],
    },
    // ───────────────────────── "有"字句 ─────────────────────────
    {
      id: 'you-ju', hanzi: '"有"字句', pinyin: '“yǒu” zìjù', title: 'Câu chữ 有',
      intro: 'A有B có ba nghĩa: biểu thị tồn tại, biểu thị sở hữu, biểu thị đạt tới hoặc có (một kết quả, một mức độ).',
      groups: [{
        patterns: [
          { formula: '处所/时间〈名〉 + 有 + 〈名〉(人、事物)', title: '1. Biểu thị tồn tại', note: 'Nơi chốn/thời gian + 有 + danh từ (người, vật).', examples: [
            x('北京有很多名牌大学。', 'Běijīng yǒu hěn duō míngpái dàxué.', 'Bắc Kinh có nhiều đại học danh tiếng.'),
            x('唐代有位著名的诗人叫李白。', 'Tángdài yǒu wèi zhùmíng de shīrén jiào Lǐ Bái.', 'Đời Đường có một thi nhân nổi tiếng tên Lý Bạch.'),
          ] },
          { formula: '〈名〉(有生命的) + 有 + 〈名〉', title: '2. Biểu thị sở hữu', note: 'Danh từ (có sự sống) + 有 + danh từ.', examples: [
            x('我有很多中国朋友。', 'Wǒ yǒu hěn duō Zhōngguó péngyou.', 'Tôi có nhiều bạn Trung Quốc.'),
            x('小狗有灵敏的嗅觉。', 'Xiǎo gǒu yǒu língmǐn de xiùjué.', 'Con chó nhỏ có khứu giác nhạy.'),
          ] },
          { formula: '〈名〉 + 有 + (了) + 〈动〉/〈名〉', title: '3. Biểu thị đạt tới, có (kết quả)', note: 'Danh từ + 有 + (了) + động/danh từ.', examples: [
            x('他的汉语有了很大的进步。', 'Tā de Hànyǔ yǒu le hěn dà de jìnbù.', 'Tiếng Hán của anh đã tiến bộ nhiều.'),
          ] },
          { formula: '有 + (không 了/过); 有着 (miêu tả); 有了……; 没有……了', title: '4. Lưu ý với 了, 过, 着', note: 'Sau "有" thường không thêm "了/过"; chỉ khi miêu tả mới dùng "着". "有了……" biểu thị xuất hiện tình huống mới, "了" thường không đứng cuối câu. Dạng phủ định "没有……了", "了" có thể đứng cuối câu biểu thị thay đổi.', examples: [
            x('她有着一双美丽迷人的大眼睛。', 'Tā yǒu zhe yì shuāng měilì mírén de dà yǎnjing.', 'Cô có đôi mắt to đẹp quyến rũ.'),
            x('他做生意成功后，有了很多钱。', 'Tā zuò shēngyì chénggōng hòu, yǒu le hěn duō qián.', 'Sau khi làm ăn thành công, anh có rất nhiều tiền.'),
            x('他做生意失败后，没有钱了。', 'Tā zuò shēngyì shībài hòu, méiyǒu qián le.', 'Sau khi làm ăn thất bại, anh không còn tiền.', '"没有" + danh từ, thường không nói số lượng.'),
          ] },
          { formula: '有 + 名词 (không nối với chủ vị)', title: '5. Tân ngữ của 有 là danh từ hoặc cụm danh từ', note: 'Tân ngữ sau "有" phải là danh từ hoặc cụm danh từ. Nếu muốn tả chủ vị thì dùng câu chủ vị hoặc "名 + 主谓短语".', examples: [
            x('它有灵活的四肢。(×它有四肢灵活。)', 'Tā yǒu línghuó de sìzhī.', 'Nó có tứ chi linh hoạt.', 'Có thể nói "它有灵活的四肢" hoặc "它四肢灵活".'),
          ] },
        ],
      }],
    },
  ],

  boards: [
    {
      id: 'de-board', hanzi: '"的"的常见用法', title: 'Cách dùng thường gặp của 的',
      rows: [
        { label: 'Ôn tập', formulas: ['定语 + 的 + 主语/宾语'], examples: [e('我最喜欢的韩国电影明星是张娜拉。', 'Ngôi sao điện ảnh Hàn Quốc tôi thích nhất là Jang Na-ra.', 'Định ngữ + 的 + chủ ngữ.'), e('我给你介绍一位来自德国的朋友。', 'Tôi giới thiệu cho bạn một người bạn đến từ Đức.', 'Định ngữ + 的 + tân ngữ.')] },
        { label: '1', text: 'Chủ ngữ, tân ngữ thường là danh từ, nhưng đôi khi là động từ hoặc tính từ; khi đó cần "的" biến chúng thành danh từ.', examples: [e('他的善良感动了我。', 'Sự lương thiện của anh làm tôi cảm động.'), e('我听懂了他的解释。', 'Tôi nghe hiểu lời giải thích của anh.')] },
        { label: '2', text: 'Nếu chủ ngữ/tân ngữ đứng sau "的" chỉ rõ là ai, ta có thể bỏ nó, nghĩa là "……的(名)". Về mặt ngữ pháp gọi là "的字结构".', examples: [e('我得找个懂电脑的帮我修理一下。("懂电脑的" = "懂电脑的人")', 'Tôi phải tìm người biết máy tính sửa giúp.'), e('我是个教书的。("教书的" = "教书的人")', 'Tôi là người dạy học.')] },
        { label: '3. 所……的', text: 'Nếu phần định ngữ là động từ, ta cũng có thể thêm "所" trước động từ: "所 + 动 + 的". Ngữ pháp gọi là cấu trúc "所".', examples: [e('我所说的(话)都是真实情况。("所说的" = "所说的话")', 'Điều tôi nói đều là sự thật.'), e('他给予我的爱正是我所期待的。', 'Tình yêu anh trao cho tôi đúng là điều tôi mong chờ.')] },
        { label: '4. 是……的', text: '(1) Nhấn mạnh quan điểm người nói.', examples: [e('抽烟是有害身体健康的。', 'Hút thuốc có hại sức khỏe.')], ps: '① "是……的" có thể lược "是", nhưng khi có tác dụng nhấn mạnh thì không thể lược "的". ② Trong "是……(形)的", trước tính từ có thể thêm phó từ mức độ, nhưng phó từ mang ngữ khí cảm thán (可, 太, 真, 好(不), 多(么)) thì không được dùng trong "是……(形)的". Ví dụ: 新HSK综合性强，通过考试是很不容易的。作为老师，他是非常好的。',
          points: [{ text: 'Điểm thi: "是……的" nhấn mạnh quan điểm, không thể lược "的".', fixes: [{ wrong: '要做到严格的定时定量是困难', right: '要做到严格的定时定量是困难的', ref: 'Kiểm tra 2 · B' }, { wrong: '而这是有损消费者利益', right: '而这是有损消费者利益的', ref: 'Kiểm tra 4 · D' }] }] },
        { label: '4. (2)', text: 'Nhấn mạnh thời gian, nơi chốn, người, cách thức, nguyên nhân, mục đích, điều kiện của hành động đã xảy ra. Cấu trúc: 是 + thời gian / nơi chốn / người / cách thức / nguyên nhân / điều kiện + 动 + 的.', examples: [e('我是一年前认识我现在的男朋友的。', 'Tôi quen bạn trai hiện giờ từ một năm trước.', 'Thời gian'), e('我是在街上碰见他的。', 'Tôi gặp anh ấy trên đường.', 'Nơi chốn'), e('昨天是李老师批评他的。', 'Hôm qua là thầy Lý phê bình anh ấy.', 'Người'), e('他是骑着自行车来的。', 'Anh ấy đi xe đạp đến.', 'Cách thức'), e('我是为了学好汉语请辅导老师的。', 'Tôi mời gia sư để học tốt tiếng Hán.', 'Nguyên nhân, mục đích'), e('他是在朋友的帮助下克服困难的。', 'Anh vượt khó nhờ sự giúp đỡ của bạn.', 'Điều kiện')],
          ps: '"动 + 了 + 宾语" là kể khách quan một việc đã làm. Đổi "了" thành "的" thì biểu thị ngữ khí nhấn mạnh. "是" phía trước cũng có thể lược, nhưng phủ định phải dùng "不是", không được lược "是". Ví dụ: 我(是)坐地铁去的，不是坐公共汽车去的. Nếu tân ngữ sau động từ là người, nó bắt buộc đặt sau động từ, "的" đứng trước; nếu không phải người, tân ngữ đặt trước hoặc sau "的" đều được.',
          points: [{ text: 'Điểm thi: nhấn mạnh thời gian đã xảy ra phải dùng "是……的".', fixes: [{ wrong: '我是2005年从爱尔兰来到中国', right: '我是2005年从爱尔兰来到中国的', ref: 'Kiểm tra 1 · A' }] }] },
      ],
    },
    {
      id: 'shi-board', hanzi: '"是"字句', title: 'Câu chữ 是',
      rows: [
        { label: 'A 是 B', text: 'A = B (có thể nói B 是 A). A ∈ B (A thuộc B) thì không thể nói B 是 A.', examples: [e('北京是中国的首都。(中国的首都是北京)', 'Bắc Kinh là thủ đô Trung Quốc.', 'A = B'), e('几年不见，他已经是总经理了。(×总经理已经是他了)', 'Mấy năm không gặp, anh đã là tổng giám đốc.', 'A ∈ B')] },
        { label: 'Lưu ý', text: 'A và B phải là danh từ; nếu không phải thì dùng "的" chuyển thành cấu trúc danh từ. Phủ định của "是" là "不是". Sau "是" không thể thêm "了₁/着/过", nhưng có thể dùng "了₂" biểu thị thay đổi.', examples: [e('他是负责管理的。贵的不一定是好东西。', 'Anh ấy là người phụ trách quản lý. Đắt chưa chắc là đồ tốt.'), e('他不是孩子，已经是男子汉了。', 'Cậu không còn là trẻ con, đã là đàn ông rồi.')],
          points: [{ text: 'Điểm thi: "太平天国起义" là một sự kiện, không thể trực tiếp làm vị ngữ "广西最大规模的农民起义". Câu thiếu "是".', fixes: [{ wrong: '太平天国起义广西最大规模的农民起义', right: '太平天国起义是广西最大规模的农民起义', ref: 'Kiểm tra 3 · A' }] }] },
      ],
    },
    {
      id: 'you-board', hanzi: '"有"字句', title: 'Câu chữ 有',
      rows: [
        { label: 'A 有 B', text: 'Tồn tại (处所/时间 + 有 + 名). Sở hữu (名(有生命) + 有 + 名). Đạt đến (名 + 有(了) + 动/名).', examples: [e('北京有很多名牌大学。', 'Bắc Kinh có nhiều đại học danh tiếng.'), e('唐代有位著名的诗人叫李白。', 'Đời Đường có một thi nhân nổi tiếng tên Lý Bạch.'), e('我有很多中国朋友。', 'Tôi có nhiều bạn Trung Quốc.'), e('他的汉语有了很大的进步。', 'Tiếng Hán của anh tiến bộ nhiều.')] },
        { label: 'Lưu ý', text: 'Sau "有" thường không đi với "了/过", chỉ khi miêu tả mới dùng "着". "有了……" biểu thị xuất hiện tình huống mới, thường "了" không đứng cuối câu. Phủ định: "没有……了", "了" đứng cuối câu biểu thị thay đổi.', examples: [e('她有着一双美丽迷人的大眼睛。', 'Cô ấy có đôi mắt to đẹp quyến rũ.'), e('他做生意成功后，有了很多钱。', 'Sau khi làm ăn thành công anh có nhiều tiền.'), e('他做生意失败后，没有钱了。', 'Sau khi làm ăn thất bại anh không còn tiền.')],
          points: [{ text: 'Điểm thi: tân ngữ của "有" phải là danh từ hoặc cụm danh từ, không thể là chủ vị.', fixes: [{ wrong: '它有四肢灵活', right: '它有灵活的四肢 (hoặc: 它四肢灵活)', ref: 'Kiểm tra 5 · C' }, { wrong: '我国的综合国力有很大的增强', right: '我国的综合国力有了很大的增强', why: 'Biểu thị tình huống mới xuất hiện nên cần "有了".', ref: 'Kiểm tra 6 · D' }] }] },
      ],
    },
  ],

  test: [
    seg(['我是2005年从爱尔兰来到中国，', '我的爸爸是中国人，', '常常给我讲中国的故事，', '所以我对中国的一切都非常熟悉。'], 0, '是……的 nhấn mạnh thời gian',
      '我是2005年从爱尔兰来到中国的', 'Nhấn mạnh thời gian hành động đã xảy ra: cấu trúc "是……的" không thể thiếu "的".'),
    seg(['对于大多数孩子来说，', '要做到严格的定时定量是困难，', '有时可以说是不可能的。', '在饮食上，孩子和成人一样，个体之间存在差异。'], 1, '是……的 nhấn mạnh quan điểm',
      '要做到严格的定时定量是困难的', '"是……(形)的" nhấn mạnh quan điểm, không thể lược "的".'),
    seg(['太平天国起义广西最大规模的农民起义，', '也是中国近代规模最大的农民起义。', '太平天国运动始于公元1851年，', '持续14年之久，波及全国18个省。'], 0, 'Thiếu 是',
      '太平天国起义是广西最大规模的农民起义', 'Câu thiếu động từ "是": phải có "是" nối chủ ngữ và vị ngữ.'),
    seg(['一味地降价，在当前利润很薄的情况下，', '只能用降低原材料品质的方法减少成本，', '而这是有损消费者利益。'], 2, 'Thiếu 的 sau tính từ',
      '而这是有损消费者利益的', '"是……的" nhấn mạnh quan điểm cần giữ "的".'),
    seg(['松鼠是一种美丽的小动物，', '很讨人喜欢，', '它有四肢灵活，', '行动敏捷。'], 2, 'Tân ngữ của 有',
      '它有灵活的四肢', 'Tân ngữ của "有" phải là danh từ hoặc cụm danh từ. Có thể nói "它有灵活的四肢" hoặc "它四肢灵活".'),
    seg(['帮助困难群众解决问题，', '是党和政府义不容辞的重要职责。', '经过20多年的改革开放，', '我国的综合国力有很大的增强了。'], 3, '有 và 了',
      '我国的综合国力有了很大的增强', '"有了……" biểu thị tình huống mới xuất hiện; "了" đặt sau "有", không đứng cuối câu.'),
  ],

  exam: [
    sen(['泰山日出是泰山最壮观的奇景之一。', '利用植物来装饰居室是非常简单易行的。', '做学问要学以致用，将知识转化为效益，闭门造车是没有出路的。', '四川江油市境内的景点是属于以唐代大诗人——"诗仙"李白的故居为主的人文景观长廊。'], 3, '是 + 属于',
      '四川江油市境内的景点是以唐代大诗人"诗仙"李白的故居为主的人文景观长廊', '"是属于" không đi cùng nhau khi chủ ngữ là một phần của tân ngữ. Sửa: "…景点属于…" hoặc bỏ "是".'),
    sen(['世界上第一台监测地震的地动仪是张衡发明的。', '著名京剧表演艺术家梅兰芳先生的祖籍是江苏泰州人。', '儿童的语言学习能力较强，所以学习一门外语的最佳年龄是三周岁。', '很多人拥有时不懂得珍惜，当懂得珍惜时，却失去了珍惜的机会。'], 1, 'Chủ ngữ và tân ngữ của 是 không khớp',
      '梅兰芳先生的祖籍是江苏泰州', '"祖籍" (quê quán) không thể ứng với "人". Hoặc: "梅兰芳先生是江苏泰州人".'),
    sen(['地震的发生具有许多不确定以及不可预知的因素。', '书中的经验和知识对我们来说取之不尽、用之不竭的源泉。', '如果你无法入睡，那就起床做点儿别的事，要不睡意再辗回床上。', '现在的手机除了通话、收发短信外，还有很多让人意想不到的功能。'], 1, 'Thiếu vị ngữ 是',
      '书中的经验和知识对我们来说是取之不尽、用之不竭的源泉', 'Câu thiếu vị ngữ "是".'),
    sen(['大学毕业以后，我在北京一家贸易公司工作了两年多。', '有一位哲学家曾经说过："金钱是最好的仆人，也是最坏的主人。"', '5年前，这家公司就已经在国外建立分公司并开展了一系列的贸易活动。', '夏天的白马水库碧波荡漾，绿树葱茏，风景如画，是一个旅游的好季节。'], 3, 'Chủ ngữ, tân ngữ của 是 không khớp',
      '夏天的白马水库……是一个旅游的好地方', '"水库" không thể đối ứng "季节". Sửa thành "是一个旅游的好地方".'),
    sen(['沉睡了2000多年的秦始皇陵兵马俑是1974年3月陕西农民挖井时偶然发现了。', '绿茶是中国产量最多的一类茶叶，也是中国最主要的出口茶类。', '公司调来一位新主管，听说他很有能力，是被派来整顿公司业务的。', '嵩山少林寺是中国北魏时为接待印度高僧修建的，距今已有近1500年的历史。'], 0, '是……的',
      '兵马俑是1974年3月陕西农民挖井时偶然发现的', 'Nhấn mạnh thời gian, nơi chốn của hành động đã xảy ra: "是……的", không dùng "了".'),
    sen(['秦陵兵马俑被认为是古代的奇迹，是当代最重要的考古发现之一。', '个性化教学在实施上充分显示了其灵活性、针对性、实时性和自主性的特征，这是传统语言教学所不具备。', '作为总经理，我清楚地知道，公司的迅速发展，与每个员工的辛勤努力是分不开的。', '日常生活中，冷与热都会造成身体的不舒适。人体感到舒适的气温是夏季19℃-24℃，冬季12℃-22℃。'], 1, 'Thiếu 的',
      '这是传统语言教学所不具备的', '"所……的" kết cấu hoàn chỉnh: "这是传统语言教学所不具备的".'),
    sen(['如果一个人不读书，他接受的东西往往就是从众的、被动的、缺乏分析的。', '童话里的人物往往是现实中不存在的，它所讲述的故事在生活中几乎不可能发生。', '在社交应酬中，如果是主人自驾车陪客人出去游玩，那么副驾驶座就是最有礼貌的座位。', '早在20亿年前，现在喜马拉雅山脉所处的广大地区是过一片汪洋大海，被称为古地中海。'], 3, '是 không đi với 过',
      '是一片汪洋大海', '"是" sau không thể thêm "了, 着, 过".'),
    sen(['虽然童话主要是写给孩子的，不过，有童心的成年人同样能够在童话中找到快乐。', '在中学推广研究性学习课程以来，各中学都热烈响应、积极推广，研究最深入、成果最丰盛，当然首推黄冈中学。', '生命在海洋里出现绝不是偶然的，海洋的物理和化学性质，使它成为孕育原始生命的摇篮。', '《黄帝内经》是中国传统医学四大经典著作之一，是我国医学宝库中现存成书最早的一部医学典籍。'], 1, 'Cấu trúc 的 làm chủ ngữ',
      '研究最深入、成果最丰盛的，当然首推黄冈中学', '"的" tạo thành cụm danh từ làm chủ ngữ: "研究最深入、成果最丰盛的".'),
    sen(['我很喜欢旅游，最大的心愿就是在回国之前游遍中国的名胜古迹。', '一个有生活情趣的人，是能够不断发现生活中的新乐趣，并且分享和感染身边其他人。', '"逆商"是人们在逆境中成长的能力商数，用来描述人们面对逆境时的应变和适应能力。', '室内绿化不仅能使人赏心悦目，消除疲劳，还能够愉悦情绪，影响和改变人们的心态。'], 1, 'Vị ngữ lẫn lộn',
      '一个有生活情趣的人，能够不断发现生活中的新乐趣', 'Vị ngữ "是" ở đây lẫn với "能够", nên bỏ "是".'),
    sen(['鸽子是和平的象征，在重大比赛和节日时，人们喜欢放飞群鸽，表达对和平的向往之情。', '4500年前大汶口文化遗址出土的陶器文字，是已知的最早的汉字。', '如今，手机已成为人们生活中不可缺少的物品之一。有人甚至患上了"手机依赖症"，如果哪天忘了带手机就会浑身不自在。', '在对干部的考察使用方面，国家一整套严格的制度和规定，各级党组织对干部的考察是严肃认真的，使用调配也是很得当的。'], 3, 'Thiếu vị ngữ 有',
      '国家有一整套严格的制度和规定', 'Chủ ngữ "国家" thiếu vị ngữ; phải thêm "有".'),
    sen(['地球上的生命有30多亿年的发展史，其中85%以上的时间是在海洋中度过的。', '有关电影的最大话题大概莫过于票房，票房是衡量影片的一种尺度，却不是唯一的尺度。', '上周末我陪朋友看了一部电影，是在万达电影城看的，电影的名字是《生活》，那是一部真有意思的电影。', '炎热的夏季来了，很多人习惯到海边游泳。但是在海边游泳有很多注意事项，最为重要的一点就是选择好时间。'], 2, 'Vị trí phó từ 真',
      '那是一部有意思的电影 / 那真是一部有意思的电影', '"真" làm trạng ngữ phải đứng trước vị ngữ "是".'),
    sen(['文化是一个城市的根本，突出本地特色，发展自己的特色文化，会让城市变得更加迷人。', '暴雨是指在短时间内出现的大量降水。暴雨的发生和大气环流的季节性变化有密切关系。', '她对于所有唱歌的人来说，都是无法超越的。她和她属的时代紧紧地扣在一起，她是在那个比较从容、耐心、细致的年代诞生的歌手。', '生活中许多人会犯这样的错误，他们努力追求的，往往是一个没有任何意义的目标。'], 2, 'Cấu trúc 所属',
      '她和她所属的时代紧紧地扣在一起', '"属" là động từ làm định ngữ nên cần "所属的" để nhấn mạnh trung tâm ngữ "时代".'),
    sen(['多掌握一种知识或是一门技术，在众多的竞争中手上面前就多了一份取胜的机会。', '我们并不是刻意要爬到哪里，一路上走走停停、看看风景、吹吹清风，心灵在放松中得到某种满足。', '在市场竞争激烈的21世纪，人们普遍认为男性压力比女性压力大，其实女性也是一样的情况，女性的压力不仅来自工作还来自家庭。', '爱因斯坦在谈到他成功的秘密时说："我没什么特殊的才能，我只是保持了我的好奇心。"'], 2, 'Thiếu vị ngữ',
      '其实女性的压力也是一样的', '"是" ở đây thiếu thành phần; có thể bỏ "是" và dùng "一样" làm vị ngữ: 女性的情况也一样.'),
    sen(['海带是很高营养价值的食品，与陆地上的蔬菜相比，除了维生素C的含量稍低外，其他维生素含量大致相同。', '人的一生有超过三分之一的时间是在床上度过的，在影响人类寿命的各种因素中，睡眠是重要的一项。', '记住别人的名字是一种礼貌，也是一种感情投资，如果你能叫出对方的名字，他一定会吃惊和感动。', '牡丹是中国的传统名花，品种繁多，姿态优美，颜色鲜艳，号称"花中之王"。长期以来，中国人把牡丹作为幸福、美好、繁荣的象征。'], 0, 'Thiếu thành phần',
      '海带是具有很高营养价值的食品 (hoặc: 海带是营养价值很高的食品)', 'Tân ngữ của "是" là danh từ: cần định ngữ đầy đủ "具有很高营养价值的食品".'),
    sen(['21世纪是一个知识爆炸的时代，知识和技能成为一个人生存的必要条件。', '工作中那些不懂装懂的人，喜欢说："这些工作真无聊。"但他们内心的真正感觉是："我做不好任何工作。"', '所谓可再生资源，指的是在自然界中可以不断再生、持续利用的能源，主要包括太阳能、风能、水能、地热能和海洋能等。', '温室效应、臭氧层破坏和酸雨是当今全球性的三大环境问题，这些问题已经引起世界各国的高度关注，但是如果人们不提高保护环境的意识，建设"生态家园"的愿望是难以实现。'], 3, '是……的 giữ "的"',
      '建设"生态家园"的愿望是难以实现的', '"是……的" nhấn mạnh quan điểm người nói, không thể lược "的".'),
  ],
}
