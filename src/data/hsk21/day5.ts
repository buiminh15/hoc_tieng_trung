import type { DayContent, Ex, ErrQ } from './types'

/**
 * Tuần 1 · Thứ Sáu: Phó từ và dạng phủ định (副词及其否定形式), sách trang 60–74.
 * Phần dịch tiếng Việt và pinyin do app tự thêm. Ví dụ ngoài sách được đánh dấu trong ghi chú.
 */

const x = (h: string, p: string, vi: string, note?: string, tag?: string): Ex => ({ h, p, vi, note, tag })
const e = (h: string, vi: string, note?: string, tag?: string): Ex => ({ h, vi, note, tag })
const seg = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'segment', parts, answer, topic, fix, why })
const sen = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'sentence', parts, answer, topic, fix, why })

export const day5: DayContent = {
  intro:
    'Phó từ làm trạng ngữ là kiến thức ai cũng quen, nhưng từ nào là phó từ, phó từ đứng ở đâu, phân biệt các phó từ ra sao đều không dễ nắm. Thêm nữa, cách dùng hai phó từ phủ định "不" và "没" cũng không đơn giản. Đây là phần ngữ pháp cơ bản bắt buộc phải nắm khi học tiếng Hán, và cũng là một điểm thi của HSK mới. Hôm nay hãy nắm chắc các phó từ quan trọng. Cố lên!',

  focusTitle: 'Ba phần học hôm nay',

  cheat: {
    title: 'Bảng tra nhanh: bảy nhóm phó từ thường dùng',
    lead: 'Phó từ làm trạng ngữ, nói rõ thời gian, phạm vi, mức độ, tần suất, tình trạng, khẳng định/phủ định hoặc ngữ khí của động tác. Dưới đây là danh sách trong sách.',
    head: ['Nhóm', 'Phó từ thường dùng'],
    rows: [
      { key: 'Thời gian', cells: ['将(要), 即将, 快(要), 就(要), 正, 在, 正在, 已经, 曾经, 才, 就, 刚(刚), 立刻, 马上, 向来, 从来, 历来, 一向, 一直, 一贯, 一味, 始终, 一时, 时时, 随时, 偶尔, 老是, 总是, 永远, 忽然, 顿时'] },
      { key: 'Phạm vi', cells: ['都, 全, 统统, 通通, 一概, 一律, 一共, 总共, 一起, 一齐, 一同, 一块儿, 一道, 到处, 处处, 光, 就, 只, 单(单), 仅(仅), 唯独, 偏偏'] },
      { key: 'Mức độ', cells: ['很, 太, 挺, 怪, 好, 老, 可, 真, 最, 极, 极其, 极为, 非常, 特别, 十分, 万分, 格外, 分外, 相当, 比较, 更, 更加, 稍(微), 略(微), 多么, 如此, 越加, 越发, 越来越, 越……越……, 愈加, 愈……愈……'] },
      { key: 'Lặp lại, tần suất', cells: ['再, 又, 还, 也, 一再, 再三, 屡次, 屡屡, 频频, 常(常), 经常, 时常, 往往, 不断, 反复'] },
      { key: 'Tình trạng', cells: ['渐渐, 逐渐, 逐步, 猛然, 依然, 仍然, 悄悄, 亲自, 亲身, 百般, 大肆, 特地, 特意, 专程, 专门, 互相'] },
      { key: 'Khẳng định, phủ định', cells: ['不, 没(有), 未, 未必, 不必, 何必, 不须, 无须, 从未, 未曾, 一定, 肯定, 准, 必然, 必定'] },
      { key: 'Ngữ khí', cells: ['可, 却, 倒, 难道, 竟(然), 居然, 果然, 到底, 究竟, 毕竟, 终究, 终于, 偏(偏), 简直, 彻底, 根本, 反正, 恐怕, 也许, 大约, 几乎, 差点儿, 明(明), 幸亏, 幸好, 好在, 难道, 难怪'] },
    ],
  },

  sections: [
    // ───────────────────────── 副词作状语 ─────────────────────────
    {
      id: 'fuci-zhuangyu', hanzi: '副词作状语', pinyin: 'fùcí zuò zhuàngyǔ', title: 'Phó từ làm trạng ngữ',
      intro: 'Phó từ làm trạng ngữ nói rõ thời gian, phạm vi, mức độ, tần suất, tình trạng, khẳng định/phủ định hay ngữ khí của động tác. Ba quy tắc về vị trí và đối tượng được phó từ bổ nghĩa đáng nhớ nhất.',
      groups: [
        {
          title: 'Mỗi nhóm phó từ nói lên điều gì',
          patterns: [
            { formula: '〈副〉 + 〈动〉', title: 'Thời gian', note: 'Nói thời điểm hoặc quá trình của động tác.', examples: [
              x('我[已经]两年没回家了。', 'Wǒ yǐjīng liǎng nián méi huí jiā le.', 'Tôi đã hai năm không về nhà.'),
              x('他[一直]想来中国看看。', 'Tā yìzhí xiǎng lái Zhōngguó kànkan.', 'Anh ấy luôn muốn đến Trung Quốc xem thử.'),
            ] },
            { formula: '〈副〉 + 〈动〉', title: 'Phạm vi', note: 'Nói động tác bao gồm bao nhiêu người, việc.', examples: [
              x('我们[都]很好。', 'Wǒmen dōu hěn hǎo.', 'Chúng tôi đều khỏe.'),
              x('他的话我[统统]忘了。', 'Tā de huà wǒ tǒngtǒng wàng le.', 'Lời anh ấy tôi quên sạch.'),
              x('[就]我一个人不去。', 'Jiù wǒ yí ge rén bú qù.', 'Chỉ mình tôi không đi.'),
            ] },
            { formula: '〈副〉 + 〈形〉/〈动〉', title: 'Mức độ', note: 'Phó từ mức độ đứng trước tính từ hoặc động từ chỉ tâm lý.', examples: [
              x('今天我的心情[非常]好。', 'Jīntiān wǒ de xīnqíng fēicháng hǎo.', 'Hôm nay tâm trạng tôi rất tốt.'),
              x('人们[极其]重视环保问题。', 'Rénmen jíqí zhòngshì huánbǎo wèntí.', 'Mọi người cực kỳ coi trọng vấn đề môi trường.'),
            ] },
            { formula: '〈副〉 + 〈动〉', title: 'Lặp lại, tần suất', note: 'Nói động tác lặp lại hoặc xảy ra thường xuyên.', examples: [
              x('明天你[再]来吧。', 'Míngtiān nǐ zài lái ba.', 'Ngày mai bạn lại đến nhé.'),
              x('她虽然工作到很晚，[却]依然很精神。', 'Tā suīrán gōngzuò dào hěn wǎn, què yīrán hěn jīngshen.', 'Tuy làm việc đến khuya, cô vẫn rất tỉnh táo.'),
            ] },
            { formula: '〈副〉 + 〈动〉', title: 'Tình trạng', note: 'Nói cách thức, trạng thái của động tác.', examples: [
              x('她虽然年轻，我[逐渐]了解了她。', 'Tā suīrán niánqīng, wǒ zhújiàn liǎojiě le tā.', 'Tuy cô còn trẻ, tôi dần dần hiểu cô.'),
              x('我们[互相]学习。', 'Wǒmen hùxiāng xuéxí.', 'Chúng tôi học hỏi lẫn nhau.'),
            ] },
            { formula: '〈副〉 + 〈动〉', title: 'Khẳng định, phủ định', note: 'Khẳng định hoặc phủ định động tác.', examples: [
              x('我[不]知道。', 'Wǒ bù zhīdào.', 'Tôi không biết.'),
              x('我[一定]努力。', 'Wǒ yídìng nǔlì.', 'Tôi nhất định cố gắng.'),
            ] },
            { formula: '〈副〉 + 〈动〉', title: 'Ngữ khí', note: 'Thể hiện thái độ của người nói.', examples: [
              x('我[简直]不相信这是真的。', 'Wǒ jiǎnzhí bù xiāngxìn zhè shì zhēn de.', 'Tôi thật không tin đây là thật.'),
              x('你[到底]去不去？', 'Nǐ dàodǐ qù bu qù?', 'Rốt cuộc bạn đi hay không?'),
            ] },
          ],
        },
        {
          title: 'Ba chức năng ngữ pháp chính của phó từ',
          patterns: [
            { formula: '〈副〉 + 〈动〉/〈形〉/〈代〉', title: '1. Phó từ + động từ, tính từ, đại từ', note: 'Phó từ mức độ chủ yếu đứng trước tính từ hoặc động từ chỉ tâm lý. Nếu câu có giới từ, giới từ thường đứng sau phó từ. Phó từ cũng có thể đứng trước đại từ thay thế động từ hoặc tính từ.', examples: [
              x('他[十分]喜欢电影。', 'Tā shífēn xǐhuan diànyǐng.', 'Anh ấy rất thích phim.'),
              x('国庆节的北京[更加]美丽了。', 'Guóqìng Jié de Běijīng gèngjiā měilì le.', 'Bắc Kinh ngày Quốc khánh càng đẹp hơn.'),
              x('我下午[又]给妈妈打了个电话。', 'Wǒ xiàwǔ yòu gěi māma dǎ le ge diànhuà.', 'Chiều tôi lại gọi điện cho mẹ.', 'Giới từ đứng sau phó từ.'),
              x('今天风真大，以前春天也[这样]。', 'Jīntiān fēng zhēn dà, yǐqián chūntiān yě zhèyàng.', 'Hôm nay gió thật lớn, trước đây mùa xuân cũng thế.', 'Phó từ 也 đứng trước đại từ 这样.'),
            ] },
            { formula: '〈副〉 + 〈名〉/〈数量〉(làm vị ngữ)', title: '2. Danh từ, số lượng từ làm vị ngữ', note: 'Khi danh từ hoặc số lượng từ làm vị ngữ, phía trước có thể có phó từ chỉ thời gian, phạm vi, tần suất.', examples: [
              x('他[都]六级了，我才四级，差得太远了。', 'Tā dōu liù jí le, wǒ cái sì jí, chà de tài yuǎn le.', 'Anh ấy đã cấp 6 rồi, tôi mới cấp 4, kém xa quá.'),
              x('时间真快，[又]星期六了。', 'Shíjiān zhēn kuài, yòu xīngqīliù le.', 'Thời gian trôi nhanh, lại thứ Bảy rồi.'),
            ] },
            { formula: '〈范围副〉 + 〈主〉 + 〈动〉', title: '3. Phó từ phạm vi + danh từ / đại từ', note: 'Phó từ phạm vi có thể đứng trước danh từ hoặc đại từ, nhưng danh từ đó chỉ làm chủ ngữ, không làm tân ngữ. 就, 仅仅… còn có thể thêm số lượng từ làm vị ngữ.', examples: [
              x('[光]他一个人同意也不行。', 'Guāng tā yí ge rén tóngyì yě bù xíng.', 'Chỉ mình anh đồng ý cũng không được.'),
              x('他[就]一百块钱了。', 'Tā jiù yì bǎi kuài qián le.', 'Anh ấy chỉ còn một trăm đồng.'),
              x('我们组[仅仅]五个人。', 'Wǒmen zǔ jǐnjǐn wǔ ge rén.', 'Nhóm chúng tôi chỉ có năm người.'),
            ] },
          ],
        },
      ],
    },
    // ───────────────────────── 不 / 没(有) ─────────────────────────
    {
      id: 'bu-mei', hanzi: '不·没(有)', pinyin: 'bù · méi(yǒu)', title: 'Phó từ phủ định: 不 và 没(有)',
      intro: 'Cả hai đều đặt trước động từ, tính từ để phủ định động tác hoặc tính chất, nhưng cách dùng khác nhau. 不 thiên về ý chí chủ quan, có thể chỉ hiện tại, tương lai, đôi khi cả quá khứ. 没(有) thiên về kể khách quan, phủ định việc xảy ra hoặc hoàn thành, dùng cho quá khứ, hiện tại, không dùng cho tương lai.',
      groups: [{
        patterns: [
          { formula: '不 + 〈动〉/〈形〉  ↔  没(有) + 〈动〉', title: '1. Chủ quan và khách quan', note: '"不" biểu thị ý chủ quan, "没" biểu thị kể khách quan.', examples: [
            x('上次，这次他都[没]参加，听说下次还[不]想参加。', 'Shàngcì, zhè cì tā dōu méi cānjiā, tīngshuō xiàcì hái bù xiǎng cānjiā.', 'Lần trước, lần này anh đều không tham gia, nghe nói lần sau cũng không muốn.', '没 nói quá khứ khách quan; 不 nói ý muốn, tương lai.'),
            x('我[不]吃早饭了。', 'Wǒ bù chī zǎofàn le.', 'Tôi không ăn sáng nữa.', 'Chủ quan, hiện tại.'),
            x('我[没]吃早饭呢。', 'Wǒ méi chī zǎofàn ne.', 'Tôi chưa ăn sáng đấy.', 'Khách quan, hiện tại.'),
          ] },
          { formula: '不 + 〈动〉 (thói quen, trạng thái, không phải động tác)', title: '2. Thói quen, trạng thái, động từ không phải hành động', note: 'Phủ định động tác mang tính thói quen, tình trạng, hoặc các động từ như 是, 当, 认识, 知道, 像, và động từ năng nguyện thì dùng 不. Động từ năng nguyện chỉ 能, 要, 肯, 敢 mới có thể dùng 没.', examples: [
            x('他从来[不]迟到。', 'Tā cónglái bù chídào.', 'Anh ấy chưa bao giờ đến muộn.'),
            x('他既[不]抽烟，也[不]喝酒。', 'Tā jì bù chōuyān, yě bù hējiǔ.', 'Anh ấy vừa không hút thuốc vừa không uống rượu.'),
            x('我[不]知道这样做对不对。', 'Wǒ bù zhīdào zhèyàng zuò duì bu duì.', 'Tôi không biết làm thế có đúng không.'),
            x('昨天我有急事，[没]能参加朋友的生日晚会。', 'Zuótiān wǒ yǒu jíshì, méi néng cānjiā péngyou de shēngrì wǎnhuì.', 'Hôm qua tôi có việc gấp nên không dự được tiệc sinh nhật bạn.', '没 + 能 nhấn mạnh việc đã qua.'),
          ] },
          { formula: '不 + 〈形〉', title: '3. Tính từ: phủ định tính chất', note: 'Trước tính từ chỉ tính chất thì dùng 不.', examples: [
            x('近来他的身体[不]好，让他休息吧。', 'Jìnlái tā de shēntǐ bù hǎo, ràng tā xiūxi ba.', 'Dạo này sức khỏe anh không tốt, để anh nghỉ đi.'),
            x('这种材料[不]结实，换别的吧。', 'Zhè zhǒng cáiliào bù jiēshi, huàn bié de ba.', 'Loại vật liệu này không chắc, đổi loại khác đi.'),
          ] },
          { formula: '没(有) + 〈形〉', title: '4. Tính từ: trạng thái chưa xuất hiện thay đổi', note: 'Tính từ chỉ trạng thái, chưa xuất hiện sự thay đổi thì dùng 没(有).', examples: [
            x('天还[没]亮，再睡一会儿吧。', 'Tiān hái méi liàng, zài shuì yíhuìr ba.', 'Trời còn chưa sáng, ngủ thêm chút nữa đi.'),
            x('我[没]着急，只是有点儿担心。', 'Wǒ méi zháojí, zhǐshì yǒudiǎnr dānxīn.', 'Tôi không sốt ruột, chỉ hơi lo.'),
          ] },
        ],
      }],
    },
    // ───────────────────────── 搭配 ─────────────────────────
    {
      id: 'fuci-dapei', hanzi: '副词与否定形式的搭配', pinyin: 'fùcí yǔ fǒudìng xíngshì de dāpèi', title: 'Phó từ kết hợp với dạng phủ định',
      intro: 'Có phó từ phải đặt dạng phủ định phía sau, có phó từ phải đặt phía trước, có phó từ đặt trước hay sau đều được nhưng nghĩa khác nhau. Có phó từ chỉ dùng được ở dạng phủ định. Cần nhớ thêm nhóm 几乎, 差点儿, 好容易.',
      groups: [{
        patterns: [
          { formula: '〈副〉(时间/语气/情态) + 不/没', title: '1. Phó từ thời gian, ngữ khí, tình trạng: dạng phủ định đứng sau', note: 'Thông thường dạng phủ định đặt sau các phó từ thời gian, ngữ khí, tình thái.', examples: [
            x('他[一直不]愿意把这件事告诉别人。', 'Tā yìzhí bú yuànyì bǎ zhè jiàn shì gàosu biérén.', 'Anh ấy luôn không muốn kể chuyện này cho người khác.'),
            x('我[简直不]相信这是真的。', 'Wǒ jiǎnzhí bù xiāngxìn zhè shì zhēn de.', 'Tôi thật không tin đây là thật.'),
            x('等了半天，他[仍然没]出现。', 'Děng le bàntiān, tā réngrán méi chūxiàn.', 'Đợi nửa ngày anh ấy vẫn không xuất hiện.'),
          ] },
          { formula: '不/别/没 + 〈副〉(马上, 一起, 一块儿, 光, 净, 曾)', title: '2. Phó từ chỉ đứng sau dạng phủ định', note: 'Một số phó từ chỉ có thể đặt dạng phủ định ở phía trước: 马上, 一起, 一块儿, 光, 净, 曾.', examples: [
            x('我们再等一会儿，[别马上]走。', 'Wǒmen zài děng yíhuìr, bié mǎshàng zǒu.', 'Ta đợi thêm chút, đừng đi ngay.'),
            x('我[不曾]听说过这个人。', 'Wǒ bùcéng tīngshuō guo zhège rén.', 'Tôi chưa từng nghe nói về người này.', 'Ví dụ dạng "không + 曾".'),
          ] },
          { formula: '都/全/很/一定/轻易 (trước hoặc sau phủ định đều được, nghĩa khác nhau)', title: '3. Trước, sau phủ định khác nghĩa', note: '都, 全, 很, 一定, 轻易 đặt trước hoặc sau dạng phủ định đều được, nhưng ý nghĩa khác nhau.', examples: [
            x('他们[都不]喜欢这部电影。', 'Tāmen dōu bù xǐhuan zhè bù diànyǐng.', 'Họ đều không thích phim này.', 'Toàn thể phủ định.'),
            x('他们[不都]喜欢这部电影。', 'Tāmen bù dōu xǐhuan zhè bù diànyǐng.', 'Họ không phải ai cũng thích phim này.', 'Phủ định một phần.'),
            x('他学习[很不]努力。', 'Tā xuéxí hěn bù nǔlì.', 'Anh ấy học rất không chăm.', 'Mức độ cao.'),
            x('他学习[不很]努力。', 'Tā xuéxí bù hěn nǔlì.', 'Anh ấy học không chăm lắm.', 'Mức độ thấp.'),
            x('他今天[一定不]会来。', 'Tā jīntiān yídìng bú huì lái.', 'Hôm nay anh ấy chắc chắn không đến.', 'Có nắm chắc tuyệt đối.'),
            x('他今天[不一定]会来。', 'Tā jīntiān bù yídìng huì lái.', 'Hôm nay anh ấy chưa chắc đến.', 'Không nắm chắc.'),
            x('你不了解情况[不要轻易]发表意见。', 'Nǐ bù liǎojiě qíngkuàng bú yào qīngyì fābiǎo yìjiàn.', 'Bạn không hiểu tình hình thì đừng tùy tiện phát biểu.', 'Không nên tùy tiện.'),
            x('平时他[轻易不]喝酒。', 'Píngshí tā qīngyì bù hējiǔ.', 'Bình thường anh ấy ít khi uống rượu.', 'Hiếm khi.'),
          ] },
          { formula: '几乎/差点儿/好容易 + 〈动〉 (không) ', title: '4. 几乎, 差点儿, 好容易: phủ định và khẳng định cùng nghĩa', note: 'Nếu việc không mong muốn: 几乎(没)A = 差点儿(没)A = đều là phủ định, "suýt nữa thì A, nhưng chưa xảy ra". Nếu việc mong muốn: 几乎没A = 差点儿没A = khẳng định (may là A xảy ra), còn 差点儿A (không dùng 几乎) là phủ định (tiếc là A không xảy ra). 好(不)容易 + 才 + động từ + kết quả: kết quả khó đạt được, 好容易 = 好不容易.', examples: [
            x('这两天太忙了，你托我办的事我[几乎(没)]忘了。', 'Zhè liǎng tiān tài máng le, nǐ tuō wǒ bàn de shì wǒ jīhū (méi) wàng le.', 'Hai ngày nay bận quá, việc bạn nhờ tôi suýt quên.', 'Việc không mong muốn: có hay không 没 đều là "chưa quên".'),
            x('路上堵车，我[几乎没]/[差点儿没]赶上班机。', 'Lùshang dǔ chē, wǒ jīhū méi / chàdiǎnr méi gǎnshàng bānjī.', 'Đường tắc xe, tôi suýt nữa không kịp chuyến bay.', 'Việc mong muốn: nghĩa khẳng định, kịp.'),
            x('那天我出发晚了一会儿，[差点儿]就赶不上火车了。', 'Nà tiān wǒ chūfā wǎn le yíhuìr, chàdiǎnr jiù gǎn bu shàng huǒchē le.', 'Hôm đó tôi xuất phát muộn chút, suýt không kịp tàu.', 'Dạng phủ định (không dùng 几乎).'),
            x('你好(不)容易来，就多坐一会儿再走吧。', 'Nǐ hǎo (bù) róngyì lái, jiù duō zuò yíhuìr zài zǒu ba.', 'Bạn khó khăn lắm mới đến, ngồi thêm chút rồi hãy đi.', 'Nghĩa "khó mới có".'),
            x('我打了几次电话，[好不容易]才找到他。', 'Wǒ dǎ le jǐ cì diànhuà, hǎo bù róngyì cái zhǎodào tā.', 'Tôi gọi mấy lần mới khó khăn lắm tìm được anh.', ''),
          ] },
          { formula: '根本 + 不/没', title: '5. Phó từ chỉ dùng ở dạng phủ định: 根本', note: 'Một số phó từ như 根本 chỉ dùng với dạng phủ định, không thể nói "根本相信".', examples: [
            x('我根本不相信他说的这些话。', 'Wǒ gēnběn bù xiāngxìn tā shuō de zhèxiē huà.', 'Tôi hoàn toàn không tin những lời anh ta nói.'),
          ] },
        ],
      }],
    },
  ],

  boards: [
    {
      id: 'fuci-gongneng', hanzi: '副词的语法功能', title: 'Chức năng ngữ pháp của phó từ',
      rows: [
        { label: '1', formulas: ['〈副〉 + 〈动〉/〈形〉'], examples: [
          e('我们[已经]见过面了。', 'Chúng ta đã gặp nhau rồi.', 'Chủ ngữ + [trạng ngữ] + vị ngữ + tân ngữ.'),
          e('天气[已经]暖和了。', 'Thời tiết đã ấm lên rồi.'),
        ] },
        { label: '2', formulas: ['〈副〉 + 介宾 + 〈动〉', '〈副〉 + 〈动〉 + 〈宾〉'], text: 'Một số phó từ miêu tả động tác, vị trí có thể đứng trước cụm giới-tân, cũng có thể đứng sau tân ngữ, nhưng ngữ khí trước và sau khác nhau.', examples: [
          e('常常我跟他见面。', 'Thường xuyên tôi gặp anh ấy.', '① Ngữ khí chung, chỉ nói chuyện này. ② Nhấn mạnh số lần 见面.'),
          e('好好你跟他说，他会同意的。', 'Bạn nói với anh ấy cho kỹ, anh ấy sẽ đồng ý.', '① Ngữ khí chung. ② Nhấn mạnh thái độ nói.'),
          e('热烈观众们鼓掌。', 'Khán giả vỗ tay nhiệt liệt.', '"热烈" là tính từ miêu tả "khán giả", nên không đặt giữa động từ và tân ngữ, phải đặt trước động từ.'),
        ], points: [{ text: 'Điểm thi: tính từ miêu tả động tác phải đặt trước động từ, không đặt giữa động từ và tân ngữ.', fixes: [{ wrong: '发挥知识分子的充分作用', right: '充分发挥知识分子的作用', why: '"充分" miêu tả động tác 发挥 nên là trạng ngữ, đứng trước động từ.', ref: 'Kiểm tra 1 · D' }] }] },
        { label: '3', formulas: ['〈副〉 + 〈能愿动〉 + 〈动〉'], examples: [
          e('我一直想跟他见面。', 'Tôi luôn muốn gặp anh ấy.'),
          e('上大学以后，我才会游泳。', 'Lên đại học tôi mới biết bơi.'),
        ], ps: 'Miêu tả trạng thái động tác thì cũng có thể dùng "能愿动 + phó từ + động/tính": 妈妈别担心，我会常常给你打电话的 (nhấn mạnh "rất nhiều lần"). 我没听懂，你能再说一遍吗？ (nhấn mạnh "lần thứ hai"). 这么晚回家，妈妈肯定会狠狠批评我的 (nhấn mạnh trạng thái "phê bình").', points: [{ text: 'Điểm thi: 必将 = 一定将要; 更快 là tính từ miêu tả động tác, nên đi cùng "地" làm trạng ngữ trước động từ.', fixes: [{ wrong: '这个社会以后还会将更快地向前发展', right: '这个社会以后还必将更快地向前发展', ref: 'Kiểm tra 2 · D' }] }] },
        { label: '4', formulas: ['〈范围副〉 + 〈主〉 + 〈动〉/〈形〉'], text: '(就, 光, 仅, 只, 偏偏)', examples: [
          e('我们都知道，就你一个人不知道。', 'Chúng tôi đều biết, chỉ mình bạn không biết.'),
        ], ps: 'Phó từ phạm vi thường đứng trước chủ ngữ; nếu muốn đặt trước tân ngữ phải đổi thành "只有/只是": 大家都同意的事，偏偏你一个人反对。→ 通过考试的同学只有他。/ 只他一个人通过了考试 (cách nói khác).' },
      ],
    },
    {
      id: 'fouding', hanzi: '否定副词', title: 'Phó từ phủ định: 不 và 没(有)',
      rows: [
        { label: '不 + ...', points: [
          { text: '1. 不 + 形: phủ định tính chất', examples: [e('今天天气不热。', 'Hôm nay thời tiết không nóng.'), e('她常常说得减肥了，可她并不胖。', 'Cô hay nói giảm cân, nhưng cô đâu có béo.')] },
          { text: '2. 不 + 动: phủ định động tác thường xuyên, thói quen', examples: [e('他是个守时的人，从来不迟到。', 'Anh ấy là người đúng giờ, chưa bao giờ đến muộn.')] },
          { text: '3. 不 + 能愿动: phủ định ý nguyện chủ quan', examples: [e('他不想请我，所以我不想去参加他的晚会。', 'Anh ấy không muốn mời tôi nên tôi không muốn đến dự tiệc của anh.'), e('他不会说汉语。', 'Anh ấy không biết nói tiếng Hán.'), e('昨天我病了，不能来上课。', 'Hôm qua tôi bệnh, không đi học được.')] },
        ] },
        { label: '没(有) + ...', points: [
          { text: '1. 没 + 形: phủ định sự xuất hiện thay đổi', examples: [e('十年不见，她还没老，还是那么漂亮。', 'Mười năm không gặp, cô vẫn chưa già, vẫn đẹp như vậy.'), e('昨天去面试，我没紧张，只是有点儿不好意思。', 'Hôm qua đi phỏng vấn tôi không căng thẳng, chỉ hơi ngại.')] },
          { text: '2. 没 + 动: phủ định động tác xảy ra hoặc hoàn thành; chỉ dùng cho quá khứ, hiện tại, không dùng cho tương lai', examples: [e('今天他没参加考试。', 'Hôm nay anh ấy không tham gia thi.'), e('我没记住他的电话号码。', 'Tôi không nhớ được số điện thoại của anh.')] },
          { text: '3. 没 + một số động từ năng nguyện (能, 想, 肯, 敢…): nhấn mạnh tình huống trong quá khứ', examples: [e('对不起，我没能陪你去，昨天真是太忙了。', 'Xin lỗi, tôi không đi cùng bạn được, hôm qua thật quá bận.', '"我不能陪你去了" thì có nghĩa "việc chưa xảy ra".')], fixes: [{ wrong: '谁没愿意坐着呢', right: '谁不愿意坐着呢', why: 'Động từ năng nguyện "愿意" chỉ phủ định tình huống chung chung, không nhấn mạnh quá khứ, nên dùng 不 chứ không dùng 没.', ref: 'Kiểm tra 3 · A' }] },
        ] },
      ],
    },
    {
      id: 'fuci-fouding', hanzi: '副词和否定', title: 'Phó từ và phủ định',
      rows: [
        { label: '1', text: 'Thông thường: phó từ (thời gian, ngữ khí, tình thái) + 不/没.', examples: [e('他一直不说话，好像在生气。', 'Anh ấy cứ không nói, hình như đang giận.')] },
        { label: '2', text: 'Đặc biệt: 不/没 + phó từ (马上, 一起, 一块儿, 光, 净, 曾/管).' },
        { label: '3', text: 'Còn một số phó từ có dạng phủ định, "不/没" trước hay sau đều được, nhưng nghĩa khác nhau: 都, 全, 太, 很, 一定, 轻易, 再.', points: [{ text: 'Điểm thi: 不过 = có mặt tốt, đồng thời có mặt không tốt. "不过那也都不是轻轻松松的事" là phủ định hoàn toàn, mâu thuẫn; phải nói phủ định một phần là "也不都是".', fixes: [{ wrong: '不过那也都不是轻轻松松的事', right: '不过那也不都是轻轻松松的事', ref: 'Kiểm tra 6 · B' }] }] },
        { label: '4', text: 'Phủ định và khẳng định có nghĩa gần giống nhau: 几乎, 差点儿, 好容易.', points: [{ text: 'Việc không mong muốn A: 几乎没A = 几乎A = 差点儿没A = 差点儿A. Đều nghĩa là "A suýt xảy ra nhưng chưa xảy ra", nghĩa là phủ định.' }, { text: 'Việc mong muốn A: ① 几乎没A = 差点儿没A: nghĩa khẳng định, A xảy ra, may thay. ② 差点儿A (không dùng 几乎): nghĩa phủ định, A không xảy ra, đáng tiếc.' }], examples: [
          e('今天早上我（几乎/差点儿）（没）迟到。', 'Sáng nay tôi suýt nữa thì muộn.', 'Việc không mong muốn: may thay chưa muộn.'),
          e('他（几乎/差点儿）没通过考试。', 'Anh ấy suýt không đỗ.', 'Việc mong muốn: nghĩa khẳng định, anh đã đỗ.'),
          e('他差点儿通过考试。', 'Anh ấy suýt đỗ.', 'Tiếc thay, đã trượt.'),
          e('你好(不)容易来，就多坐一会儿再走吧。', 'Bạn khó khăn lắm mới đến, ngồi thêm chút rồi hãy đi.'),
          e('我打了几次电话才好不容易找到他。', 'Tôi gọi mấy lần mới khó khăn tìm được anh.'),
        ], ps: '"好不容易" là phó từ, nghĩa là "rất khó". Ngoài ra "好不 + tính từ" biểu thị "rất …" , cẩn thận kẻo nhầm lẫn: 王府井大街人来人往，好不热闹！(= 非常热闹); 好朋友一起玩得好不开心啊！(= 非常开心); 她一个人躲在房间里，哭得好不伤心！(= 非常伤心).' },
        { label: '5', text: 'Chú ý: có phó từ chỉ dùng được ở dạng phủ định, ví dụ 根本.', examples: [e('我根本不相信他说的这些话。', 'Tôi hoàn toàn không tin những lời anh ta nói.')], points: [{ text: 'Điểm thi: 根本 chỉ dùng với dạng phủ định.', fixes: [{ wrong: '我根本同意他的意见', right: '我完全同意他的意见', ref: 'Đề mô phỏng 6 · C' }] }] },
      ],
    },
    {
      id: 'zhuyi', hanzi: '注意', title: 'Hai điều cần chú ý',
      rows: [
        { label: '1. Phủ định nhiều lần', text: 'Tiếng Hán quen dùng nhiều lần phủ định để nhấn mạnh, như trong toán học "âm nhân âm ra dương": (−)(−1) = +1.', examples: [
          e('不到长城非好汉。→ 到长城才是好汉。', 'Chưa đến Trường Thành chẳng phải hảo hán. → Đến Trường Thành mới là hảo hán.'),
          e('我不是不喜欢，只是觉得太贵了。→ 我很喜欢，……', 'Tôi không phải không thích, chỉ thấy đắt quá. → Tôi rất thích, …'),
          e('父母不反对我来中国。→ 父母同意我来中国。', 'Bố mẹ không phản đối tôi đến Trung Quốc. → Bố mẹ đồng ý.'),
          e('在学上，最忌讳的是不要有始无终。(×)', 'Học hành, điều tối kỵ là đừng có đầu không có đuôi.', 'Sai: 忌讳 đã mang nghĩa phủ định rồi, không thêm "不要" nữa.'),
          e('有了自信才有动力，否则容易取得成功。(×)', 'Có tự tin mới có động lực, nếu không thì dễ thành công.', 'Sai: 否则 mang nghĩa phủ định, vế sau phải là "不容易".'),
          e('考试前要好好准备，免得考试及格。(×)', 'Trước thi phải chuẩn bị kỹ, kẻo thi đỗ.', 'Sai: 免得 + động từ phủ định; phải là "免得考试不及格".'),
        ], points: [
          { text: 'Điểm thi: "不否认没有续约的可能性" = "承认可能不续约", mâu thuẫn với vế sau nên phải đổi.', fixes: [{ wrong: '但仍然不否认下个赛季没有续约的可能性', right: '但仍然不否认下个赛季有续约的可能性', ref: 'Kiểm tra 5 · C' }] },
          { text: 'Ngoài phó từ phủ định, còn có động từ và liên từ mang nghĩa phủ định: 避免, 防止, 杜绝, 忌讳, 劝阻… (động từ); 否则, 以免, 免得, 省得 (liên từ). Dễ nhầm trong 2 câu sau.' },
        ] },
        { label: '2. Câu hỏi chính-phản', text: 'Một số từ cần nối cả mặt khẳng định và phủ định mới biểu đạt đủ ý: 看看, 想想, 试试, 知道.', examples: [
          e('你去看看他做没做完作业。', 'Bạn đi xem anh ấy làm xong bài chưa.'),
          e('我想知道他是不是真心喜欢我。', 'Tôi muốn biết anh ấy có thật lòng thích tôi không.'),
        ], points: [{ text: 'Điểm thi: 看看 phải đi cùng "有没有".', fixes: [{ wrong: '看看没有过头或失实之处', right: '看看有没有过头或失实之处', ref: 'Kiểm tra 4 · D' }] }], ps: 'Chú ý các từ cần đi cùng nhau ở hai vế: 是否, 能否, 可否, 有没有, A不A (好不好, 做不做). Ví dụ: 明天的活动是否如期进行得看天气好不好。' },
      ],
    },
  ],

  test: [
    seg(['在科教战线上，', '我们应该注意关心知识分子，', '信任知识分子，', '发挥知识分子的充分作用。'], 3, 'Tính từ miêu tả động tác',
      '充分发挥知识分子的作用', '"充分" miêu tả động tác 发挥, là trạng ngữ, phải đứng trước động từ.'),
    seg(['时代不同了，社会进步了，', '人们的许多观念也发生了巨大的变化，', '而且这个社会以', '后还会将更快地向前发展。'], 3, 'Phó từ "必将"',
      '这个社会以后还必将更快地向前发展', 'Phó từ "必将" = 一定将要. "更快" là tính từ miêu tả động tác, nên làm trạng ngữ với 地, đứng trước động từ.'),
    seg(['其实，谁没愿意坐着呢？', '尤其是在劳累困倦的情况下。', '可大家都不愿意去抢那个座位，', '于是都装作没看见似的。'], 0, 'Phủ định động từ năng nguyện',
      '其实，谁不愿意坐着呢？', 'Động từ năng nguyện "愿意" phủ định tình huống chung (không nhấn mạnh quá khứ) nên dùng "不", không dùng "没".'),
    seg(['"吾日三省吾身"是一条古训，', '这反省不是闭门思过，', '而是把一天的所作所为以及所讲的话再想一遍，', '看看没有过头或失实之处。'], 3, 'Câu hỏi chính-phản',
      '看看有没有过头或失实之处', '看看 cần cả hai mặt, phải nói "有没有".'),
    seg(['德国国家队队长巴拉克在上周六说，', '自己和拜仁慕尼黑的合约马上就要到期了，', '但仍然不否认下个赛季没有续约的可能性，', '虽然他非常希望去外国俱乐部踢球。'], 2, 'Phủ định nhiều lần',
      '但仍然不否认下个赛季有续约的可能性', '"不否认没有续约的可能性" = thừa nhận có thể không ký tiếp, mâu thuẫn với ý "虽然非常希望去外国" trong câu. Đổi thành "不否认有续约的可能性".'),
    seg(['回忆起承包煤矿时的日子，', '刘老大憨厚地笑着说，的确挣了钱，不过那也都不是轻轻松松的事，', '煤矿的生活很单调，', '而且还要为矿工的安全负责，压力很大。'], 1, 'Vị trí của 不 và 都',
      '不过那也不都是轻轻松松的事', '"都不是" là phủ định toàn bộ, trái với mạch: "có kiếm được tiền, nhưng cũng không phải việc gì cũng nhẹ nhàng". Phải là phủ định một phần: "不都是".'),
  ],

  exam: [
    sen(['古代诗词是中国文化精髓的一部分。', '为了防止今后不再发生类似问题，学校及时完善了管理措施。', '成功的人是跟别人学习经验，失败的人只跟自己学习经验。', '直到今天，人类还不完全清楚恐龙灭绝的原因。'], 1, 'Phủ định thừa',
      '为了防止今后再发生类似问题', '防止 đã mang nghĩa phủ định, không thêm "不" nữa. Phải là "再发生".'),
    sen(['青春期是人一生中最美好的时光。', '穿衣服不必一味追求名牌，但一定要注意搭配。', '我们公司以后不但会在国内，而且会向海外也推广这些新产品。', '听了总经理的一番话，李科长心服口服，再也不忌妒总经理了。'], 2, 'Vị trí phó từ',
      '而且也会向海外推广这些新产品', 'Phó từ "也" phải đặt trước động từ năng nguyện "会".'),
    sen(['活动结束以后，请务必将展品送回展览馆。', '秋冬是流感高发季节，接种流感疫苗是预防流感最为有效的措施之一。', '胡同是最北京特色的民居之一，起源于元朝，“胡同”一词在蒙古语中是“小街巷”的意思。', '科学发展观是一种注重安全、繁荣、平等、共赢及和谐的观念。'], 2, 'Phó từ mức độ + danh từ',
      '胡同是最具北京特色的民居之一', 'Phó từ mức độ không thể đứng trực tiếp trước danh từ. Phải đổi thành "最具北京特色" hoặc "最有北京特色".'),
    sen(['成功者并不惧怕失败，失败是成功之母。', '即使是伟人，没有经历过失败也不会取得成功。', '遇到困难不要退缩，永远不要放弃自己的理想。', '搜索引擎从1994年诞生开始，一直不停止过技术的发展。经过实践，我们觉得从技术上做到最好，才是树立品牌的最快途径。'], 3, 'Phủ định thời quá khứ',
      '一直没停止过技术的发展', '"停止过" nói chuyện đã qua nên phải phủ định bằng "没", không dùng "不".'),
    sen(['南极洲是目前唯一没有常住居民的大洲。', '老师只能为你指引方向，未来还是要靠你自己。', '美丽的敦煌，是世界艺术宝库里的一颗明珠，是一块神奇的土地。', '刘先生清晨六点多赶到机场搭乘飞机，但差点儿赶上飞机了，好不容易登机了，又饱受六个小时的等候之苦。'], 3, '差点儿 và 好不容易',
      '但差点儿没赶上飞机，好不容易登机了，又饱受六个小时的等候之苦', '"好不容易登机了" nghĩa là cuối cùng đã lên được máy bay; "赶上飞机" là việc mong muốn đã thực hiện, nên phải dùng "差点儿没赶上" (nghĩa khẳng định). "差点儿赶上" lại có nghĩa là không kịp, mâu thuẫn.'),
    sen(['忙碌是一种幸福，让我们没时间去痛苦；奔波是一种快乐，让我们真实地感受生活。', '任何职业都要求劳动者掌握一定的技能，具备一定的能力。', '说实话，我没看出这部电影对电影艺术本身有什么贡献，关于这一点前一位同志已经讲得很清楚了，我根本同意他的意见。', '色彩是人类生活不可缺少的一部分，没有色彩，也就没有丰富多彩的生活。'], 2, 'Phó từ "根本"',
      '我完全同意他的意见', '"根本" chỉ dùng ở dạng phủ định, không thể nói "根本同意".'),
    sen(['这样的开局显然很难让西班牙球迷感到满意。', '获得的未必是最好的，放弃的未必是最差的。', '我们别等他了，他这两天工作挺忙的，我估计他今天可能不会来。', '下课后，我没有理他，径自回了办公室，我一定知道他会跟来的，果然，我刚坐下，就听见他喊“报告”。'], 3, 'Vị trí của 一定',
      '我知道他一定会跟来的', '"一定" đặt sau chủ ngữ ngôi thứ nhất thì có nghĩa kiên quyết, cam đoan. Ở đây nghĩa là suy đoán chắc chắn, nên phải đặt trước động từ năng nguyện "会": 他一定会跟来.'),
    sen(['极昼和极夜是只有在南、北极圈内才能看到的一种奇特的自然现象。', '在正式社交场合，男女须穿西装、礼服，忌衣冠不整、举止失当和大声喧哗。', '“落地雷”有时能击坏房屋，因此高大建筑物上都要安装避雷针，以免雷击造成伤害。', '在全世界，足球几乎成为一种新的信仰：在信上帝的球迷眼中，足球仅次于上帝；在不什么信仰的球迷那里，足球就是上帝。'], 3, 'Vị trí của 不',
      '在没什么信仰的球迷那里', '"信仰" là danh từ, phủ định phải đi với "没(有)": 没什么信仰, không dùng "不".'),
    sen(['川剧的语言具有生活气息浓厚、幽默风趣的特色。', '有没有坚定的意志，是一个人在事业上能够取得成功的关键。', '要学会欣赏别人，就要时刻看到别人的优点。', '许多人一生都在等待一个可以改变命运的机会。事实上，机会无处不在，而关键在于，当机会出现时，你是否已经准备好了。'], 1, 'Chính-phản đối ứng',
      '有没有坚定的意志，是一个人在事业上能否取得成功的关键', '"有没有" phải đối ứng với "能不能 / 能否". Hoặc bỏ "有没有": 坚定的意志，是一个人在事业上能够取得成功的关键.'),
    sen(['“有借有还，再借不难”，这个道理连我那十岁的儿子都懂，他怎么就这么不明白呢？难道是故意装糊涂？', '著名的考古学家威夏劳·勒加博士在埃及尼罗河畔一座从未被人发掘的古墓中竟发现一台完好无损的类似彩色电视机的仪器。', '在这篇篇幅较长的文章中，默读无疑是最有帮助的。这不仅可以节约读书所用的时间，同时也能边读书边思考，提高阅读的效率。', '虽然通过精心设计可以提高该考试的效度和信度，但仍很难达到理想的状态，特别是作文和口试，主观性很强，难免保证评分的一致性和公平性。'], 3, 'Nghĩa của "难免"',
      '很难保证评分的一致性和公平性', '"难免" là phó từ, nghĩa "khó tránh khỏi" (ví dụ: 孩子远在异乡，父母难免担心). Câu này muốn phủ định, nên phải đổi thành "很难保证".'),
    sen(['龙卷风是一种威力十分强大的旋风，虽然它的范围很小，一般只有二三百米，大的也不过两千米，但破坏力却很大。', '当你养成这些良好的习惯并且调整好心情之后，你的心态便会随时处于积极状态。', '现在有了新的政策，不使用政府资金的建设项目，一律没需经过政府审批，政府只对其中的重大项目和限制类项目进行核准，对其他项目进行备案。', '在20世纪60年代以前，世界上发生了八大公害事件，其中烟雾事件占了五起，受害的人很多，影响的范围也很广。'], 2, 'Phó từ + năng nguyện',
      '一律无需经过政府审批', '"需(要)" là động từ năng nguyện, phải dùng "不" phủ định: "不需要", hoặc từ cố định "无需".'),
    sen(['父母在处理自身问题和家庭问题时的乐观态度，对孩子具有重要的示范作用，孩子会通过观察和模仿逐渐形成乐观的性格。', '太阳系究竟是怎样产生的，这个问题直到现在仍然没有令人完全满意的答案。', '岳阳楼与南昌滕王阁、武昌黄鹤楼并称中国三大名楼，自古就有“洞庭天下水，岳阳天下楼”的盛誉。', '我国是世界上第二大赖氨酸消费国，年需求量达到15万吨左右，目前至少全球存在10万吨的供应缺口，赖氨酸大幅涨价，这给国产赖氨酸的销售带来了一个很好的机遇。'], 3, 'Vị trí của "至少"',
      '目前全球至少存在10万吨的供应缺口', '"至少" không thể đứng trước chủ ngữ "全球". Phải là "全球至少存在".'),
    sen(['大气层中含有一定数量的水和各种尘埃杂质，这是形成云、雨、雾、雪的重要物质。', '善于独立思考，是思维能力强的表现，任何知识不经过独立思考，都不可能真正被掌握。', '宽容是一种为人处世的哲学。只有宽恕他人的过错，与他人才能建立起良好的人际关系，赢得别人的钦佩与尊敬。', '随着年龄的增长，美国青少年（8至14岁人群）对看电视越来越没有兴趣，而且在看电视的时候，他们的注意力也越来越分散。'], 2, 'Vị trí của 才',
      '只有宽恕他人的过错，才能与他人建立起良好的人际关系', 'Phó từ "才" phải đặt trước động từ năng nguyện "能", không đặt sau "与他人": "才能与他人建立起…".'),
    sen(['我们完全有理由相信，只要齐心协力，万众一心，我们可能战胜一切艰难险阻。', '受什么样的教育，是人一生的起点、永远的名片。虽然世界上不乏后来居上、自学成才者，但稀里糊涂选择一个比较低的起点，往往让人饱受磨难。', '语文学习是母语的学习，学习的资源无处不在、无时不有。在编写教材时应引导学生在生活中学语文、用语文。', '大学的成功与否，不在于外在的形式，而在于能否通过科学的学术机制、教学机制，提升自身的科研水平和教研水平，造就学术大师，培养优秀学子。'], 0, 'Ngữ khí trước sau không nhất quán',
      '我们就(一定)能战胜一切艰难险阻', 'Vế trước khẳng định "完全相信", vế sau lại là suy đoán "可能战胜", ngữ khí không nhất quán. Phải dùng "我们就(一定)能战胜…".'),
    sen(['无论男女，在20多岁时一定不要轻视财富的积累。否则到了中年，一些很好的投资机会，可能会因为你有资金而与你擦肩而过。', '谁也不能否认，汽车是美国文明的一个缩影，汽车文化在美国更是有着独特的底蕴。生长在这片国土上的人，在童年时就都有长大拿到驾照的梦想。', '我们常说，新疆自古就是多元文化共存繁荣的地方。多元文化在共荣中还必将引起文化融合，事实上，这一直是该地区文化发展的主流。', '国家统计局制定了《中国经济普查年度GDP计算方法》，这个方案规定：2006年之后的年度GDP核算将采取94个行业的分类法，这些行业基本上都是现行国民经济行业分类的大类。'], 0, 'Khẳng định, phủ định lẫn lộn',
      '可能会因为你没有资金而与你擦肩而过', 'Câu khẳng định/phủ định lẫn lộn: nếu có vốn thì không bỏ lỡ cơ hội. Phải là "因为你没有资金而与你擦肩而过".'),
  ],
}
