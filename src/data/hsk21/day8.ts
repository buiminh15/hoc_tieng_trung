import type { DayContent, Ex, ErrQ } from './types'

/**
 * Tuần 2 · Thứ Tư: Giới từ (2) (介词二), sách trang 125–144.
 * Phần dịch tiếng Việt và pinyin do app tự thêm.
 */

const x = (h: string, p: string, vi: string, note?: string, tag?: string): Ex => ({ h, p, vi, note, tag })
const e = (h: string, vi: string, note?: string, tag?: string): Ex => ({ h, vi, note, tag })
const seg = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'segment', parts, answer, topic, fix, why })
const sen = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'sentence', parts, answer, topic, fix, why })

export const day8: DayContent = {
  intro:
    'Hôm nay ta phân biệt một loạt giới từ có chênh lệch rất nhỏ. Ví dụ "问" và "说" đều là mở miệng nói, nhưng giới từ đi cùng lại khác: "我向老师问" và "我对老师说". Tuy vậy nhiều khi hai giới từ dùng thay được cho nhau, nên người học khá khó. Cách nhớ: mỗi giới từ đều có nghĩa gốc; hiểu nghĩa gốc rồi hãy hiểu các cách dùng khác, sẽ dễ nhớ hơn nhiều. Quan trọng là phải kiên nhẫn, cẩn thận cảm nhận chỗ khác nhau về nghĩa gốc.',

  focusTitle: 'Tám nhóm giới từ hôm nay',

  cheat: {
    title: 'Bảng tra nhanh: các nhóm giới từ hôm nay',
    lead: 'Dựa vào nghĩa gốc của từng giới từ: đối tượng (对, 跟, 给, 向), phương hướng (朝, 向, 往), mục đích và nguyên nhân (为了, 为, 以), căn cứ (根据, 据, 按, 照, 凭, 靠), con đường (经过, 通过).',
    head: ['Nhóm', 'Điểm chốt'],
    rows: [
      { key: '对/对于/关于/至于', cells: ['对: người với người đều dùng được. 对于: chỉ dùng với sự vật. 关于: phạm vi. 至于: đưa ra chủ đề khác.'] },
      { key: '对/跟/给', cells: ['对: đối tượng, nhấn mạnh thái độ. 跟: cùng làm. 给: người nhận, được lợi hoặc chịu hại.'] },
      { key: '对/朝/向/往', cells: ['对 = đối đãi. 朝/向/往 chỉ hướng. 向 và 往 đứng sau động từ, 朝 thì không. 向 còn dùng với động từ trừu tượng (说明, 表示).'] },
      { key: '为了/为/以', cells: ['为了: mục đích. 为: "cho, thay" hoặc nguyên nhân. 以: dùng văn viết; 以……为……; "dùng, bằng".'] },
      { key: '根据/据/按/照/凭/靠', cells: ['根据: danh từ, động từ, giới từ. 据: đi với từ đơn âm tiết. 按/按照: tuân theo. 照: khẩu ngữ. 凭: dựa vào điều kiện bản thân. 靠: dựa vào điều kiện bản thân hoặc bên ngoài.'] },
      { key: '经过/通过', cells: ['经过: lộ trình, quá trình, thời gian. 通过: phương pháp, thông qua. 通过 còn là "thông qua (đề án)".'] },
    ],
  },

  sections: [
    // ───────────────────────── 对/对于/对……来说/关于/至于 ─────────────────────────
    {
      id: 'dui-guanyu-zhiyu', hanzi: '对·对于·对……来说·关于·至于', pinyin: 'duì · duìyú · … láishuō · guānyú · zhìyú', title: 'Phân biệt 对 / 对于 / 对……来说 / 关于 / 至于',
      intro: 'Đây là nhóm giới từ nêu đối tượng hoặc chủ đề. Câu hỏi chính: người với người, sự vật với sự vật, chủ đề có liên quan hay chủ đề mới được đưa ra.',
      groups: [
        {
          title: '1. 对 và 对于',
          patterns: [
            { formula: '对 / 对于 + 〈宾〉 + 〈动〉/〈形〉', title: 'Biểu thị quan hệ đối đãi', note: 'Đều có thể biểu thị quan hệ đối đãi giữa người, sự vật, hành vi. Dùng "对于" thì cũng dùng "对" được; nhưng dùng "对" không nhất thiết dùng "对于". Danh từ biểu thị sự vật dùng "对于"; quan hệ giữa người với người chỉ dùng "对".', examples: [
              x('[对于]这起交通事故，一定要进行详细的调查。(也可以用“对”)', 'Duìyú zhè qǐ jiāotōng shìgù, yídìng yào jìnxíng xiángxì de diàochá.', 'Với vụ tai nạn giao thông này, nhất định phải điều tra kỹ.'),
              x('她[对]孩子要求很严格。', 'Tā duì háizi yāoqiú hěn yángé.', 'Cô ấy yêu cầu con rất nghiêm.', 'Không dùng "对于".'),
            ] },
            { formula: '能愿动/副词 + 对 …  ;  对于 + (chủ ngữ) …', title: 'Vị trí so với động từ năng nguyện, phó từ', note: '"对" có thể dùng trước hoặc sau động từ năng nguyện, phó từ; cũng có thể dùng trước chủ ngữ. "对于" không thể đứng sau động từ năng nguyện, phó từ; nó chỉ đứng trước chúng.', examples: [
              x('我们会[对]这件事做出安排的。', 'Wǒmen huì duì zhè jiàn shì zuòchū ānpái de.', 'Chúng tôi sẽ có sắp xếp cho việc này.', 'Không nói "会对于".'),
              x('我们[对/对于]这件事会做出安排的。', 'Wǒmen duì / duìyú zhè jiàn shì huì zuòchū ānpái de.', 'Việc này chúng tôi sẽ có sắp xếp.'),
              x('[对/对于]这件事，我们会做出安排的。', 'Duì / duìyú zhè jiàn shì, wǒmen huì zuòchū ānpái de.', 'Về việc này, chúng tôi sẽ có sắp xếp.'),
            ] },
            { formula: '对(于) + 〈A〉 + 来说', title: '对(于)……来说: từ góc nhìn của ai/sự việc', note: '"对(于)……来说" biểu thị nhìn từ góc độ của người hay việc nào đó. A là người: nghĩa "A cho rằng…", A phải là đối tượng liên quan đến câu sau. A là việc: "với việc A, người nói cho rằng…".', examples: [
              x('[对(/对于)]学习外语来说，语言环境真是太重要了。', 'Duì (/ duìyú) xuéxí wàiyǔ láishuō, yǔyán huánjìng zhēnshi tài zhòngyào le.', 'Với việc học ngoại ngữ, môi trường ngôn ngữ thật quá quan trọng.'),
              x('[对于(/对)]我们来说，没有克服不了的困难。', 'Duìyú (/ duì) wǒmen láishuō, méiyǒu kèfú bù liǎo de kùnnan.', 'Đối với chúng tôi, không có khó khăn nào không vượt nổi.'),
            ] },
          ],
        },
        {
          title: '2. 关于 và 对于',
          patterns: [
            { formula: '关于 + phạm vi  /  对于 + đối tượng', title: 'Phạm vi và đối tượng', note: '"关于" biểu thị phạm vi động tác liên quan; "对于" chỉ rõ đối tượng. Khi hai ý nghĩa đều có, có thể thay nhau.', examples: [
              x('[关于]这个问题，你直接跟老王联系。', 'Guānyú zhège wèntí, nǐ zhíjiē gēn Lǎo Wáng liánxì.', 'Về vấn đề này, bạn liên hệ thẳng với lão Vương.'),
              x('[对于]这个问题，我们一定要讨论清楚。', 'Duìyú zhège wèntí, wǒmen yídìng yào tǎolùn qīngchu.', 'Với vấn đề này, ta nhất định phải thảo luận cho rõ.'),
            ] },
            { formula: '关于……，主语 + …  ;  主语 + 对于 + …', title: 'Vị trí làm trạng ngữ', note: 'Khi làm trạng ngữ, "关于" chỉ dùng trước chủ ngữ; "对于" dùng trước hay sau chủ ngữ đều được.', examples: [
              x('[关于]今年的工作安排，我们下次讨论。', 'Guānyú jīnnián de gōngzuò ānpái, wǒmen xiàcì tǎolùn.', 'Về sắp xếp công việc năm nay, lần sau ta thảo luận.', 'Không nói "我们关于今年的工作安排下次讨论".'),
              x('[对于]中国的风俗，我还不很熟悉。(= 我对于中国的风俗还不很熟悉)', 'Duìyú Zhōngguó de fēngsú, wǒ hái bù hěn shúxī.', 'Về phong tục Trung Quốc, tôi chưa quen lắm.'),
            ] },
          ],
        },
        {
          title: '3. 至于',
          patterns: [
            { formula: '……，至于 + 〈话题〉', title: 'Đưa ra chủ đề khác', note: '"对于", "关于" chỉ cùng một chủ đề gốc; còn "至于" đưa ra chủ đề khác ngoài chủ đề gốc.', examples: [
              x('这只是我个人的想法，[至于]行不行，还得看大家的意见。', 'Zhè zhǐ shì wǒ gèrén de xiǎngfǎ, zhìyú xíng bù xíng, hái děi kàn dàjiā de yìjiàn.', 'Đây chỉ là ý nghĩ riêng của tôi, còn có được không thì phải xem ý kiến mọi người.'),
              x('我们班周末去春游，[至于]具体计划，同学们研究一下吧。', 'Wǒmen bān zhōumò qù chūnyóu, zhìyú jùtǐ jìhuà, tóngxuémen yánjiū yíxià ba.', 'Lớp mình cuối tuần đi dã ngoại, còn kế hoạch cụ thể các bạn nghiên cứu chút nhé.'),
            ] },
            { formula: '不至于 + 〈不希望的情况〉  ;  至于……吗？', title: '不至于 và 至于……吗?', note: '"至于" ở dạng phủ định "不至于" và dạng phản vấn "至于……吗" nhấn mạnh việc không thể xảy ra, không thể đạt tới mức nghiêm trọng như vậy. Trước "不至于" hay thêm "才", "还", "总", "也", "该", "倒", sau thường là động từ có tân ngữ.', examples: [
              x('今天努力，才[不至于]明天后悔。', 'Jīntiān nǔlì, cái bú zhìyú míngtiān hòuhuǐ.', 'Hôm nay cố gắng mới không đến nỗi mai hối hận.'),
              x('我眼睛是不太好，但是这么大的字还[不至于]看不清。', 'Wǒ yǎnjing shì bú tài hǎo, dànshì zhème dà de zì hái bú zhìyú kàn bu qīng.', 'Mắt tôi không tốt lắm nhưng chữ lớn thế này chưa đến nỗi không nhìn rõ.'),
              x('你们闹着玩儿的，你该[不至于]生气了吧。', 'Nǐmen nào zhe wánr de, nǐ gāi bú zhìyú shēngqì le ba.', 'Họ đùa thôi, bạn chắc không đến nỗi giận chứ.'),
              x('要是早去医院看看，[至于]病成这样吗？', 'Yàoshi zǎo qù yīyuàn kànkan, zhìyú bìng chéng zhèyàng ma?', 'Giá sớm đi viện khám thì đâu đến nỗi bệnh thế này?'),
            ] },
          ],
        },
      ],
    },
    // ───────────────────────── 对/跟/给 ─────────────────────────
    {
      id: 'dui-gen-gei', hanzi: '对·跟·给', pinyin: 'duì · gēn · gěi', title: 'Phân biệt 对 / 跟 / 给',
      intro: 'Cả ba đều dẫn ra đối tượng của hành động, có lúc dùng thay nhau. Nghĩa chính: 对 chỉ đối tượng của hành động, nhấn mạnh thái độ; 跟 chỉ người cùng làm hoặc người liên quan; 给 dẫn ra người tiếp nhận, người được lợi hay người chịu hại.',
      groups: [{
        patterns: [
          { formula: '对 / 跟 / 给 + 〈宾〉 + 〈动〉', title: '1. Dùng thay nhau', note: 'Ba giới từ đều dẫn đối tượng của hành động, khi chỉ người liên quan đến hành động, đôi khi có thể thay nhau.', examples: [
            x('他[给/对/跟]大家说了他的想法。', 'Tā gěi / duì / gēn dàjiā shuō le tā de xiǎngfǎ.', 'Anh ấy nói với mọi người ý nghĩ của mình.'),
            x('小王[给/对/跟]我使了个眼色，让我不要说。', 'Xiǎo Wáng gěi / duì / gēn wǒ shǐ le ge yǎnsè, ràng wǒ bú yào shuō.', 'Tiểu Vương nháy mắt với tôi, bảo tôi đừng nói.'),
            x('这是你的错，你应该[给/对/跟]他道歉。', 'Zhè shì nǐ de cuò, nǐ yīnggāi gěi / duì / gēn tā dàoqiàn.', 'Đây là lỗi của bạn, bạn nên xin lỗi anh ấy.'),
          ] },
          { formula: '对 + 人/事 (态度)  ;  跟 + 人 (cùng làm)  ;  给 + 人 (người nhận)', title: '2. Khác biệt chính', note: '对: chỉ đối tượng của động tác, nhấn mạnh thái độ. 跟: chỉ người cùng làm, hoặc người/việc có liên quan đến động tác. 给: dẫn ra người nhận, người được lợi hoặc người bị hại.', examples: [
            x('大家都[对]我很热情。', 'Dàjiā dōu duì wǒ hěn rèqíng.', 'Mọi người đều rất nhiệt tình với tôi.', 'Thái độ.'),
            x('我[跟]他一起去。', 'Wǒ gēn tā yìqǐ qù.', 'Tôi đi cùng anh ấy.', 'Người cùng làm.'),
            x('我[给]妈妈打了个电话。', 'Wǒ gěi māma dǎ le ge diànhuà.', 'Tôi gọi điện cho mẹ.', 'Người nhận.'),
          ] },
          { formula: '对 + 〈宾〉 + 〈动/形〉 (chỉ trước động từ, tính từ, hoặc trước chủ ngữ)', title: '3a. "对": chỉ đứng trước động từ, tính từ, hoặc đầu câu', note: '"对" chỉ có thể dùng trước động từ hoặc tính từ; có thể dùng trước hoặc sau động từ năng nguyện, phó từ, cũng có thể dùng trước chủ ngữ.', examples: [
            x('大家[对我]都很热情。(不能说“大家都很热情对我”)', 'Dàjiā duì wǒ dōu hěn rèqíng.', 'Mọi người đều rất nhiệt tình với tôi.'),
            x('这段时间的学习会[对你]很有帮助的。(也可以说“对你会很有帮助的”)', 'Zhè duàn shíjiān de xuéxí huì duì nǐ hěn yǒu bāngzhù de.', 'Việc học thời gian này sẽ rất có ích cho bạn.'),
            x('我们都[对这本书]很感兴趣。(也可以说“对这本书都很感兴趣”)', 'Wǒmen dōu duì zhè běn shū hěn gǎn xìngqù.', 'Chúng tôi đều rất hứng thú với cuốn sách này.'),
            x('[对老师]，我完全信任。', 'Duì lǎoshī, wǒ wánquán xìnrèn.', 'Với thầy, tôi hoàn toàn tin tưởng.'),
          ] },
          { formula: '跟 + 〈宾〉 + 〈动〉  ;  跟……比 ;  跟……打听/借', title: '3b. "跟": chỉ dùng trước động từ', note: '"跟" chỉ có thể dùng trước động từ, có thể dùng trước hoặc sau động từ năng nguyện, phó từ. Còn tạo thành cấu trúc "跟……比", và biểu thị "从……那里", "向".', examples: [
            x('他不想[跟]我见面。', 'Tā bù xiǎng gēn wǒ jiànmiàn.', 'Anh ấy không muốn gặp tôi.'),
            x('我[跟]他不认识。("不" ở trước nói chủ quan, ở sau nói khách quan)', 'Wǒ gēn tā bú rènshi.', 'Tôi không quen anh ấy.'),
            x('这件事需要[跟]大家商量商量。', 'Zhè jiàn shì xūyào gēn dàjiā shāngliang shāngliang.', 'Việc này cần bàn với mọi người.'),
            x('他[跟]这件事没关系。', 'Tā gēn zhè jiàn shì méi guānxi.', 'Anh ấy không liên quan đến việc này.'),
            x('[跟]去年比，今天气温下降了十度。', 'Gēn qùnián bǐ, jīntiān qìwēn xiàjiàng le shí dù.', 'So với năm ngoái, nhiệt độ hôm nay giảm mười độ.'),
            x('这本书你[跟]谁借的？', 'Zhè běn shū nǐ gēn shéi jiè de?', 'Cuốn sách này bạn mượn của ai?', 'Nghĩa "从……那里".'),
            x('我[跟]你打听一件事。', 'Wǒ gēn nǐ dǎtīng yí jiàn shì.', 'Tôi hỏi bạn một việc.', 'Nghĩa "向".'),
          ] },
          { formula: '给 + 〈宾〉 + 〈动〉  /  〈动〉 + 给 + 〈宾〉', title: '3c. "给": trước và sau động từ', note: '(1) Thường dùng trước tân ngữ, hoặc sau động từ năng nguyện, phó từ, không dùng trước chủ ngữ. (2) Dùng được trước hoặc sau động từ nhưng nghĩa khác khi trước động từ. (3) "给我 + động từ" trong câu mệnh lệnh có hai nghĩa: a) "vì tôi, thay tôi"; b) nhấn mạnh ngữ khí mệnh lệnh, có thể bỏ. (4) "给" còn có nghĩa "被". (5) Trong câu "把", "被" làm trợ từ: "把/将……给……", "被/叫/让……给……".', examples: [
            x('我[给]妈妈打了个电话。', 'Wǒ gěi māma dǎ le ge diànhuà.', 'Tôi gọi điện cho mẹ.'),
            x('我可以[给]你当翻译。', 'Wǒ kěyǐ gěi nǐ dāng fānyì.', 'Tôi có thể làm phiên dịch cho bạn.'),
            x('对不起，这本书都[给]你弄脏了。', 'Duìbuqǐ, zhè běn shū dōu gěi nǐ nòng zāng le.', 'Xin lỗi, cuốn sách này bị tôi làm bẩn rồi.', 'Giúp nhấn mạnh, nghĩa gần "被/把".'),
            x('这是他留[给]你的信。', 'Zhè shì tā liú gěi nǐ de xìn.', 'Đây là thư anh ấy để lại cho bạn.'),
            x('他正在[给]病人看病。', 'Tā zhèngzài gěi bìngrén kànbìng.', 'Anh ấy đang khám bệnh cho bệnh nhân.', '"给" trước động từ: nghĩa "为病人看病".'),
            x('你[给]他打个电话，让他马上到这儿来。', 'Nǐ gěi tā dǎ ge diànhuà, ràng tā mǎshàng dào zhèr lái.', 'Bạn gọi điện cho anh ấy bảo anh đến ngay.'),
            x('我的帽子不知哪儿去了，你[给我]找一找。', 'Wǒ de màozi bù zhī nǎr qù le, nǐ gěi wǒ zhǎo yi zhǎo.', 'Mũ tôi không biết đi đâu, bạn tìm giúp tôi.', 'a) thay tôi.'),
            x('你[给我]走开！我不想见到你。("给我" có thể bỏ)', 'Nǐ gěi wǒ zǒukāi! Wǒ bù xiǎng jiàndào nǐ.', 'Bạn cút đi! Tôi không muốn thấy bạn.', 'b) nhấn mạnh mệnh lệnh.'),
            x('门[给]风吹开了。', 'Mén gěi fēng chuī kāi le.', 'Cửa bị gió thổi mở.', 'Nghĩa "被".'),
            x('我的书叫朋友[给]借走了。', 'Wǒ de shū jiào péngyou gěi jiè zǒu le.', 'Sách tôi bị bạn mượn đi mất.'),
            x('他把我的电脑[给]弄坏了。', 'Tā bǎ wǒ de diànnǎo gěi nòng huài le.', 'Anh ta làm hỏng máy tính của tôi.'),
          ] },
        ],
      }],
    },
    // ───────────────────────── 对/朝/向/往 ─────────────────────────
    {
      id: 'dui-chao-xiang-wang', hanzi: '对·朝·向·往', pinyin: 'duì · cháo · xiàng · wǎng', title: 'Phân biệt 对 / 朝 / 向 / 往',
      intro: '对, 朝, 向 đều có thể chỉ đối tượng của hành động; 朝, 向, 往 đều có thể chỉ phương hướng.',
      groups: [{
        patterns: [
          { formula: '对 / 朝 / 向 + 〈宾〉 + 〈动〉', title: '1. Chỉ đối tượng hành động', note: 'Về chỉ đối tượng của động tác, "对", "朝", "向" có lúc có thể thay nhau.', examples: [
            x('他[对](/朝/向)我挥了挥手。', 'Tā duì (/ cháo / xiàng) wǒ huī le huīshǒu.', 'Anh ấy vẫy tay với tôi.'),
          ] },
          { formula: '朝 / 向 / 往 + phương hướng', title: '2. Chỉ phương hướng', note: '"朝", "向", "往" đều có thể chỉ hướng của hành động.', examples: [
            x('火车[朝](/向/往)北京开去。', 'Huǒchē cháo (/ xiàng / wǎng) Běijīng kāi qù.', 'Tàu chạy về phía Bắc Kinh.'),
          ] },
          { formula: '对 ≠ 朝 / 向', title: '3. "对" còn có nghĩa "đối xử"', note: '"对" còn biểu thị nghĩa "đối đãi" (thái độ), "朝", "向" không có nghĩa này.', examples: [
            x('她[对]我非常热情。(不能用“朝/向”)', 'Tā duì wǒ fēicháng rèqíng.', 'Cô ấy rất nhiệt tình với tôi.'),
          ] },
          { formula: '〈动〉 + 向 (không dùng 朝)', title: '4. 向 và 朝', note: '(1) "向" có thể dùng sau động từ, "朝" không thể. Các động từ thường gặp: 走, 奔, 冲, 飞, 流, 飘, 滚, 转, 通, 指, 投, 引, 推, 偏. (2) "向" có thể dùng với động từ trừu tượng ("说明", "表示", "解释", "介绍"…), "朝" thì không; "朝" chỉ đi cùng động từ liên quan đến cơ thể.', verbs: ['走', '奔', '冲', '飞', '流', '飘', '滚', '转', '通', '指', '投', '引', '推', '偏'], examples: [
            x('这一班次的飞机是飞[向]东京的。(不能用“朝”)', 'Zhè yì bāncì de fēijī shì fēi xiàng Dōngjīng de.', 'Chuyến bay này bay đến Tokyo.'),
            x('我[向]大家表示感谢。(不能用“朝”)', 'Wǒ xiàng dàjiā biǎoshì gǎnxiè.', 'Tôi bày tỏ lời cảm ơn với mọi người.'),
            x('导游小姐[向]我们介绍了这里的情况。(不能用“往”“朝”)', 'Dǎoyóu xiǎojiě xiàng wǒmen jièshào le zhèlǐ de qíngkuàng.', 'Cô hướng dẫn viên giới thiệu với chúng tôi tình hình ở đây.'),
          ] },
          { formula: '往 + chỉ nơi chốn  ;  朝 / 向 + người hoặc nơi chốn', title: '5. 往 – 朝 – 向', note: '"朝", "向" có thể chỉ đối tượng của động tác cũng có thể chỉ phương hướng, nên phía sau có thể là người hoặc danh từ chỉ nơi chốn. "往" chỉ biểu thị phương hướng, chỉ đi cùng danh từ chỉ nơi chốn.', examples: [
            x('他[朝](/向)我招招手。(không dùng "往")', 'Tā cháo (/ xiàng) wǒ zhāozhao shǒu.', 'Anh ấy vẫy tay với tôi.'),
            x('他[往](/朝/向)窗外望去。', 'Tā wǎng (/ cháo / xiàng) chuāngwài wàng qù.', 'Anh ấy nhìn ra ngoài cửa sổ.'),
          ] },
        ],
      }],
    },
    // ───────────────────────── 为了/为/以 ─────────────────────────
    {
      id: 'weile-wei-yi', hanzi: '为了·为·以', pinyin: 'wèile · wèi · yǐ', title: 'Phân biệt 为了 / 为 / 以',
      intro: 'Cả ba đều biểu thị mục đích. Phân biệt ở vị trí trong câu, đối tượng đi sau, và văn phong.',
      groups: [
        {
          title: '1. Biểu thị mục đích',
          patterns: [
            { formula: '为了/为 + 目的, 主 + 〈动〉  ;  主 + 〈动〉, 以 + 〈动〉', title: '为了 và 为 đứng đầu câu; 以 đứng đầu vế sau', note: '"为了": thường ở đầu câu hoặc trước chủ ngữ làm trạng ngữ, cũng có thể thêm "是为了". Giống "为". "以": dùng giữa hai cụm động từ, hoặc đầu vế sau, theo sau là động từ, hay dùng văn viết. Lúc này "以" là liên từ.', examples: [
              x('[为(了)]学好汉语，他想了不少办法。', 'Wèi (le) xuéhǎo Hànyǔ, tā xiǎng le bù shǎo bànfǎ.', 'Để học tốt tiếng Hán, anh đã nghĩ không ít cách.'),
              x('我[为(了)]提高作文水平看了很多文学杂志。', 'Wǒ wèi (le) tígāo zuòwén shuǐpíng kàn le hěn duō wénxué zázhì.', 'Tôi đọc nhiều tạp chí văn học để nâng cao trình độ viết.'),
              x('他搬家不仅仅是[为(了)]工作，也是[为(了)]你。', 'Tā bānjiā bù jǐnjǐn shì wèi (le) gōngzuò, yě shì wèi (le) nǐ.', 'Anh ấy chuyển nhà không chỉ vì công việc mà còn vì bạn.'),
              x('广泛开展科学实验活动，[以]促进现代技术的发展。', 'Guǎngfàn kāizhǎn kēxué shíyàn huódòng, yǐ cùjìn xiàndài jìshù de fāzhǎn.', 'Mở rộng hoạt động thí nghiệm khoa học để thúc đẩy phát triển kỹ thuật hiện đại.'),
              x('我们要节约开支[以]降低生产成本。', 'Wǒmen yào jiéyuē kāizhī yǐ jiàngdī shēngchǎn chéngběn.', 'Chúng ta phải tiết kiệm chi tiêu để hạ giá thành sản xuất.'),
            ] },
          ],
        },
        {
          title: '2. 为了 và 为',
          patterns: [
            { formula: '为 + 〈名〉/〈代〉 + 〈动〉 (nghĩa "cho, thay")', title: '(1) "为" nghĩa "给, 替"', note: '"为" có thể biểu thị "给, 替" (cho, thay), sau đó thêm danh từ, đại từ, động từ hoặc câu nhỏ. "为了" không thể dùng nghĩa này.', examples: [
              x('他每天[为]报社写一篇文章。(不能用“为了”)', 'Tā měitiān wèi bàoshè xiě yì piān wénzhāng.', 'Mỗi ngày anh viết một bài cho tòa báo.'),
              x('我在这儿一切都好，不用[为]我担心。(不能用“为了”)', 'Wǒ zài zhèr yíqiè dōu hǎo, bú yòng wèi wǒ dānxīn.', 'Ở đây mọi thứ đều tốt, không cần lo cho tôi.'),
              x('语言复读机[为]学习语言、纠正发音提供了良好的条件。(不能用“为了”)', 'Yǔyán fùdújī wèi xuéxí yǔyán, jiūzhèng fāyīn tígōng le liánghǎo de tiáojiàn.', 'Máy đọc lại ngôn ngữ tạo điều kiện tốt cho học ngôn ngữ, sửa phát âm.'),
            ] },
            { formula: '为 + 原因  (为了 không dùng)', title: '(2) "为" chỉ nguyên nhân', note: '"为" có thể biểu thị nguyên nhân, "为了" không thể.', examples: [
              x('大家都[为]这个好消息高兴。(不能用“为了”)', 'Dàjiā dōu wèi zhège hǎo xiāoxi gāoxìng.', 'Mọi người đều vui mừng vì tin tốt này.'),
            ] },
            { formula: '为……而……  ;  为了……而……', title: '(3) 为……而……: nguyên nhân hoặc mục đích', note: '"为……而……" biểu thị nguyên nhân hoặc mục đích: "为" sau đi cùng danh từ, động từ hoặc câu nhỏ, "而" sau đi cùng động từ hoặc tính từ. "为了……而……" chỉ biểu thị mục đích; trước "而" phải là từ có nghĩa tương phản.', examples: [
              x('[为]美好的前途[而]努力学习。(mục đích)', 'Wèi měihǎo de qiántú ér nǔlì xuéxí.', 'Chăm chỉ học vì tương lai tươi đẹp.'),
              x('年轻的母亲[为]有了孩子[而]高兴，但又[为]无法照顾[而]苦恼。(nguyên nhân)', 'Niánqīng de mǔqīn wèi yǒu le háizi ér gāoxìng, dàn yòu wèi wúfǎ zhàogù ér kǔnǎo.', 'Người mẹ trẻ vui vì có con nhưng lại phiền não vì không thể chăm sóc.'),
              x('我们必须[为了]享受日后成功的甜蜜[而]忍耐今日失败的苦涩。(mục đích)', 'Wǒmen bìxū wèile xiǎngshòu rìhòu chénggōng de tiánmì ér rěnnài jīnrì shībài de kǔsè.', 'Chúng ta phải chịu đựng cay đắng thất bại hôm nay để hưởng ngọt ngào thành công mai sau.'),
            ] },
          ],
        },
        {
          title: '3. 以',
          patterns: [
            { formula: '以 + 〈名〉 + 为 + ……', title: '(1) "以……为……": lấy … làm …', note: '"以……为……" = "把……作为……", hoặc "认为……是……".', examples: [
              x('北京[以]故宫[为]中心。', 'Běijīng yǐ Gùgōng wéi zhōngxīn.', 'Bắc Kinh lấy Cố Cung làm trung tâm.'),
              x('参加课外活动要[以]不妨碍学习[为]原则。', 'Cānjiā kèwài huódòng yào yǐ bù fáng’ài xuéxí wéi yuánzé.', 'Tham gia hoạt động ngoại khóa phải lấy việc không cản trở học tập làm nguyên tắc.'),
              x('学汉语最好[以]多听多说[为]主。', 'Xué Hànyǔ zuìhǎo yǐ duō tīng duō shuō wéi zhǔ.', 'Học tiếng Hán tốt nhất lấy nghe nhiều nói nhiều làm chính.'),
            ] },
            { formula: '以 + 〈名〉 + 〈动〉  (nghĩa "dùng, bằng")', title: '(2) "以" là động từ nghĩa "dùng, lấy"', note: '"以……+ động từ": "dùng …". Ví dụ: 以一当十.', examples: [
              x('以一当十。', 'Yǐ yī dāng shí.', 'Một địch mười.'),
            ] },
            { formula: '以 + 凭借 (nghĩa "dùng, lấy")  /  以 + căn cứ', title: '(3) "以" là giới từ', note: '① Chỉ chỗ dựa, nghĩa "用, 拿". Chú ý: "以……而论" = "拿……来说". ② Chỉ phương thức, nghĩa "按照, 根据".', examples: [
              x('我[以]老朋友的身份劝你不要这样固执。', 'Wǒ yǐ lǎo péngyou de shēnfèn quàn nǐ bú yào zhèyàng gùzhi.', 'Với tư cách người bạn cũ, tôi khuyên bạn đừng cố chấp thế.'),
              x('[以]我个人[而论]，力量是微小的，这事得靠大家的共同努力。', 'Yǐ wǒ gèrén ér lùn, lìliàng shì wēixiǎo de, zhè shì děi kào dàjiā de gòngtóng nǔlì.', 'Xét riêng tôi, sức lực nhỏ bé, việc này phải nhờ mọi người cùng nỗ lực.'),
              x('[以]写文章[而论]，小王的能力比小张更强一些。', 'Yǐ xiě wénzhāng ér lùn, Xiǎo Wáng de nénglì bǐ Xiǎo Zhāng gèng qiáng yìxiē.', 'Xét về viết văn, Tiểu Vương giỏi hơn Tiểu Trương một chút.'),
              x('[以]每月500元计算。', 'Yǐ měi yuè wǔbǎi yuán jìsuàn.', 'Tính theo 500 đồng mỗi tháng.'),
              x('[以]高标准严格要求。', 'Yǐ gāo biāozhǔn yángé yāoqiú.', 'Yêu cầu nghiêm ngặt theo tiêu chuẩn cao.'),
            ] },
            { formula: '以 + 为 + (形容词)', title: '"为" + tính từ: so sánh', note: '"为" phía sau là tính từ thì biểu thị "so ra thì thế nào".', examples: [
              x('这种药[以]饭后吃[为]宜。', 'Zhè zhǒng yào yǐ fàn hòu chī wéi yí.', 'Loại thuốc này uống sau bữa ăn là thích hợp.'),
            ] },
          ],
        },
      ],
    },
    // ───────────────────────── 根据/据/按/按照/照 ─────────────────────────
    {
      id: 'genju-an-zhao', hanzi: '根据·据·按·按照·照', pinyin: 'gēnjù · jù · àn · ànzhào · zhào', title: 'Phân biệt 根据 / 据 / 按 / 按照 / 照',
      intro: 'Đều biểu thị căn cứ. Cần nhớ: 根据 có ba chức năng (danh từ, động từ, giới từ); 据 đi với từ một âm tiết; 按/按照 có nghĩa tuân theo; 照 mang tính khẩu ngữ.',
      groups: [
        {
          title: '1. 根据',
          patterns: [
            { formula: '根据 (名词/动词/介词)', title: 'Ba chức năng', note: '(1) Danh từ: cơ sở hoặc nguyên nhân khi nói, làm việc, rút kết luận. Làm chủ ngữ; thường dùng sau "有", "没". (2) Động từ: nghĩa "以……为根据", bắt buộc mang tân ngữ, không mang bổ ngữ, không dùng "了, 着, 过", không lặp. (3) Giới từ: lấy việc nào đó làm cơ sở, phía sau là danh từ hoặc động từ dùng như danh từ.', examples: [
              x('简化汉字的[根据]是什么，你清楚吗？', 'Jiǎnhuà Hànzì de gēnjù shì shénme, nǐ qīngchu ma?', 'Căn cứ của chữ Hán giản thể là gì, bạn rõ không?', 'Danh từ.'),
              x('他说的话总是有[根据]，你不能不信。(“有根有据”更有强调意味)', 'Tā shuō de huà zǒngshì yǒu gēnjù, nǐ bù néng bú xìn.', 'Lời anh nói luôn có căn cứ, bạn không thể không tin.'),
              x('选班长也应该[根据]公平、公开的原则。', 'Xuǎn bānzhǎng yě yīnggāi gēnjù gōngpíng, gōngkāi de yuánzé.', 'Chọn lớp trưởng cũng nên dựa theo nguyên tắc công bằng, công khai.', 'Động từ.'),
              x('[根据]大家的意见，我们又修改了原来的计划。', 'Gēnjù dàjiā de yìjiàn, wǒmen yòu xiūgǎi le yuánlái de jìhuà.', 'Dựa theo ý kiến mọi người, chúng tôi đã sửa lại kế hoạch ban đầu.', 'Giới từ.'),
              x('[根据]我们(的)了解，这件事与他无关。', 'Gēnjù wǒmen (de) liǎojiě, zhè jiàn shì yǔ tā wúguān.', 'Theo hiểu biết của chúng tôi, việc này không liên quan anh ấy.'),
            ] },
          ],
        },
        {
          title: '2. 根据 và 据',
          patterns: [
            { formula: '据 + 单音节名词  ;  据 + 说/报/闻/传', title: '据: đi với từ đơn âm tiết', note: '(1) "据" phía sau có thể đi với danh từ một âm tiết, "根据" thì không. (2) "据" có thể đi với động từ một âm tiết như "说", "报", "闻", "传"; "根据" thì không. (3) "据" thường đi với "某人说", "某人看来" thành một câu nhỏ; nếu dùng "根据", phải đổi câu nhỏ thành cụm danh từ.', examples: [
              x('[据]实报告 / [根据]事实报告', 'Jù shí bàogào / gēnjù shìshí bàogào', 'Báo cáo theo sự thật.'),
              x('[据]说他回国了。(不能说“根据说”)', 'Jù shuō tā huí guó le.', 'Nghe nói anh ấy về nước rồi.'),
              x('[据]报明天有雨。(不能说“根据报”)', 'Jù bào míngtiān yǒu yǔ.', 'Theo dự báo ngày mai có mưa.'),
              x('[据]我看来(/根据我的看法)，情况并不严重。', 'Jù wǒ kànlái (/ gēnjù wǒ de kànfǎ), qíngkuàng bìng bù yánzhòng.', 'Theo tôi thấy, tình hình không nghiêm trọng.'),
              x('[据]新闻上的说法(/根据新闻的说法)，美国总统将访问中国。', 'Jù xīnwén shang de shuōfǎ, Měiguó zǒngtǒng jiāng fǎngwèn Zhōngguó.', 'Theo cách nói trên tin tức, tổng thống Mỹ sắp thăm Trung Quốc.'),
            ] },
          ],
        },
        {
          title: '3. 按, 按照, 照',
          patterns: [
            { formula: '按/按照 + 双音节名词 (động từ)  ;  按/按照 + 标准 + 〈动〉 (giới từ)', title: '按, 按照', note: '(1) Động từ: phía sau đều mang danh từ hai âm tiết, nghĩa "遵从". (2) Giới từ: đưa ra một tiêu chuẩn, biểu thị làm theo tiêu chuẩn đó, không chống, không trái. Có thể mang danh từ, động từ, câu nhỏ; nhưng sau là danh từ một âm tiết thì không dùng "按照".', examples: [
              x('办事情要有计划，而且要[按(照)]制度、规定来办。', 'Bàn shìqing yào yǒu jìhuà, érqiě yào àn (zhào) zhìdù, guīdìng lái bàn.', 'Làm việc phải có kế hoạch, hơn nữa phải làm theo chế độ, quy định.', 'Động từ.'),
              x('会议[按]期举行。(không nói "按照期")', 'Huìyì àn qī jǔxíng.', 'Hội nghị tổ chức đúng kỳ hạn.'),
              x('[按(照)]现在的速度，我们三点前可以到达。', 'Àn (zhào) xiànzài de sùdù, wǒmen sān diǎn qián kěyǐ dàodá.', 'Với tốc độ hiện nay, trước ba giờ chúng ta có thể đến.'),
              x('一切都[按(照)]计划顺利进行。', 'Yíqiè dōu àn (zhào) jìhuà shùnlì jìnxíng.', 'Mọi thứ đều tiến hành thuận lợi theo kế hoạch.'),
              x('你[按(照)]我说的做吧。', 'Nǐ àn (zhào) wǒ shuō de zuò ba.', 'Bạn làm theo lời tôi đi.'),
              x('[按(照)]他前天离开北京计算，现在他已经到了桂林。', 'Àn (zhào) tā qiántiān líkāi Běijīng jìsuàn, xiànzài tā yǐjīng dào le Guìlín.', 'Tính từ hôm kia anh rời Bắc Kinh, giờ chắc đã đến Quế Lâm.'),
            ] },
            { formula: '照 (介词)', title: '照', note: '(1) Nghĩa "按照", khẩu ngữ hơn. Thường dùng trong cấu trúc cố định "照猫画虎", "照葫芦画瓢", "照章办事". (2) Nghĩa "对着, 向着".', examples: [
              x('对于这件事的处理，应当[照]多数人的意见办。', 'Duìyú zhè jiàn shì de chǔlǐ, yīngdāng zhào duōshù rén de yìjiàn bàn.', 'Xử lý việc này nên làm theo ý kiến đa số.'),
              x('你怎么连[照]猫画虎的事都不会干。', 'Nǐ zěnme lián zhào māo huà hǔ de shì dōu bú huì gàn.', 'Sao bạn đến việc bắt chước cũng không làm được.'),
              x('妈妈生气地[照]孩子屁股打了两下。', 'Māma shēngqì de zhào háizi pìgu dǎ le liǎng xià.', 'Mẹ tức giận đánh vào mông con hai cái.', 'Nghĩa "对着, 向着".'),
            ] },
          ],
        },
      ],
    },
    // ───────────────────────── 凭/靠 ─────────────────────────
    {
      id: 'ping-kao', hanzi: '凭·靠', pinyin: 'píng · kào', title: 'Phân biệt 凭 / 靠',
      intro: 'Cả hai đều chỉ "dựa vào", nhưng 凭 nhấn mạnh điều kiện của bản thân, còn 靠 có thể dựa vào cả điều kiện của bản thân lẫn bên ngoài.',
      groups: [{
        patterns: [
          { formula: '凭 (着) + 〈名〉', title: '1. 凭: giới từ', note: 'Giới từ dẫn ra chỗ dựa hoặc căn cứ của hành động. Khi cụm danh từ phía sau dài, có thể thêm "着".', examples: [
            x('请父母[凭]票入场。', 'Qǐng fùmǔ píng piào rùchǎng.', 'Mời phụ huynh cầm vé vào cửa.'),
            x('他[凭着]自己的实力进入了决赛，有望成为这届比赛的冠军。', 'Tā píngzhe zìjǐ de shílì jìnrù le juésài, yǒuwàng chéngwéi zhè jiè bǐsài de guànjūn.', 'Anh dựa vào thực lực mình vào chung kết, có hy vọng vô địch.'),
            x('不能[凭(着)]一时的热情办事。', 'Bù néng píng(zhe) yìshí de rèqíng bànshì.', 'Không thể làm việc chỉ dựa vào nhiệt tình nhất thời.'),
          ] },
          { formula: '凭 + điều kiện bản thân  ;  靠 + điều kiện bản thân hoặc bên ngoài', title: '2. So sánh 凭 — 靠', note: 'Đều chỉ chỗ dựa, nhưng "凭" nhấn mạnh điều kiện của chính mình; "靠" không giới hạn điều kiện, bản thân hay ngoại lực đều được.', examples: [
            x('[靠]父母的资助，我才来到中国留学。(không dùng "凭")', 'Kào fùmǔ de zīzhù, wǒ cái láidào Zhōngguó liúxué.', 'Nhờ bố mẹ tài trợ tôi mới đến Trung Quốc du học.'),
            x('[凭](/靠)自己的努力，我才有了今天的成就。', 'Píng (/ kào) zìjǐ de nǔlì, wǒ cái yǒu le jīntiān de chéngjiù.', 'Nhờ nỗ lực của chính mình tôi mới có thành tựu hôm nay.'),
          ] },
        ],
      }],
    },
    // ───────────────────────── 经过/通过 ─────────────────────────
    {
      id: 'jingguo-tongguo', hanzi: '经过·通过', pinyin: 'jīngguò · tōngguò', title: 'Phân biệt 经过 / 通过',
      intro: 'Cả hai đều có nghĩa động từ "đi qua" và giới từ "thông qua". Tóm tắt: 通过 + phương pháp, mục đích nhất định; 经过 + quá trình, mục đích nhất định.',
      groups: [{
        patterns: [
          { formula: '经过 (đi ngang qua)  /  通过 (xuyên qua)', title: '1. Động từ: đi qua', note: 'Đều biểu thị đi qua từ nơi nào đó, nhưng "经过" là "đi ngang qua (đường)", "通过" nhấn mạnh "xuyên qua từ giữa".', examples: [
            x('轮船[经过]武汉到达上海。', 'Lúnchuán jīngguò Wǔhàn dàodá Shànghǎi.', 'Tàu thủy đi qua Vũ Hán tới Thượng Hải.'),
            x('火车[通过]13个长长的隧道后终于到达北京。', 'Huǒchē tōngguò shísān ge chángcháng de suìdào hòu zhōngyú dàodá Běijīng.', 'Tàu xuyên 13 đường hầm dài rồi cuối cùng tới Bắc Kinh.'),
          ] },
          { formula: '经过 + 活动/事件  ;  通过 + 动作的方式/手段', title: '2. Giới từ: hoạt động, phương thức', note: 'Đều dùng như giới từ. "经过" chỉ nói rõ hoạt động, sự việc đã trải qua; "通过" nhấn mạnh phương thức, thủ đoạn của động tác.', examples: [
            x('[经过]有关部门批准审核，我们工厂开始生产保健美食品。', 'Jīngguò yǒuguān bùmén pīzhǔn shěnhé, wǒmen gōngchǎng kāishǐ shēngchǎn bǎojiàn měishípǐn.', 'Qua cơ quan chức năng phê duyệt, xưởng chúng tôi bắt đầu sản xuất thực phẩm chức năng.'),
            x('[通过]学习，我加深了对中国历史文化的了解。', 'Tōngguò xuéxí, wǒ jiāshēn le duì Zhōngguó lìshǐ wénhuà de liǎojiě.', 'Qua học tập, tôi hiểu sâu hơn lịch sử văn hóa Trung Quốc.'),
            x('我希望[通过]您向贵国人民表示美好的祝愿。', 'Wǒ xīwàng tōngguò nín xiàng guìguó rénmín biǎoshì měihǎo de zhùyuàn.', 'Tôi mong thông qua ngài gửi lời chúc tốt đẹp tới nhân dân quý quốc.'),
          ] },
          { formula: '通过 (议案, 考试)', title: '3. 通过: "được thông qua, đạt"', note: '"通过" có thể làm động từ, nghĩa đề án, bài biện luận, thi cử được thông qua, hợp cách; "经过" không có cách dùng này.', examples: [
            x('大会一致[通过]了政府工作报告。(không dùng "经过")', 'Dàhuì yízhì tōngguò le zhèngfǔ gōngzuò bàogào.', 'Đại hội nhất trí thông qua báo cáo công tác chính phủ.'),
            x('她这次考试没[通过]，还要参加补考。', 'Tā zhè cì kǎoshì méi tōngguò, hái yào cānjiā bǔkǎo.', 'Cô lần này thi không đạt, phải thi lại.'),
          ] },
          { formula: '经过 + thời gian  ;  经过 (danh từ: quá trình)', title: '4. 经过: thời gian kéo dài; quá trình', note: '"经过" có thể chỉ thời gian kéo dài, "通过" thì không. "经过" còn làm danh từ, chỉ nguyên do, quá trình sự việc; "通过" thì không.', examples: [
            x('[经过]一年的时间，才查清了事情的真相。(không dùng "通过")', 'Jīngguò yì nián de shíjiān, cái chá qīng le shìqing de zhēnxiàng.', 'Trải qua một năm mới làm rõ sự thật.'),
            x('请你谈一下这起交通事故的[经过]。(không dùng "通过")', 'Qǐng nǐ tán yíxià zhè qǐ jiāotōng shìgù de jīngguò.', 'Xin bạn kể qua diễn biến vụ tai nạn giao thông này.', 'Danh từ.'),
          ] },
        ],
      }],
    },
  ],

  boards: [
    {
      id: 'dui-guanyu-board', hanzi: '辨析：对、对于、对(于)……来说、关于、至于', title: 'Phân biệt 对, 对于, 对(于)……来说, 关于, 至于',
      rows: [
        { label: '1. 对 và 对于', text: '对 > 对于 (khoảng dùng rộng hơn): chỗ nào dùng được 对于 thì dùng được 对. Hai tình huống 对 không thể đổi 对于: (1) quan hệ người với người chỉ dùng 对; (2) 对 có thể đứng trước hoặc sau động từ năng nguyện, phó từ, còn 对于 chỉ đứng trước.', examples: [e('朋友的妈妈对我很热情。', 'Mẹ của bạn rất nhiệt tình với tôi.', 'Người → người: chỉ dùng 对.'), e('我们都对这次考试充满信心。', 'Chúng tôi đều đầy tự tin với kỳ thi này.', 'Phó từ đứng trước 对.'), e('这本书会对提高语法水平有帮助。', 'Cuốn sách này sẽ có ích cho việc nâng cao trình độ ngữ pháp.', 'Động từ năng nguyện đứng trước 对.')],
          points: [{ text: 'Điểm thi: 对于 không đứng sau phó từ "都", phải dùng 对.', fixes: [{ wrong: '都对于自己的"饭碗"满怀忧虑', right: '都对自己的"饭碗"满怀忧虑', why: 'Sách chấp nhận sửa thành "都对自己的饭碗…" hoặc "对于自己的饭碗，都…": 对于 không đứng sau phó từ 都.', ref: 'Kiểm tra 3 · D' }] }] },
        { label: '2. 对(于)……来说', text: 'A là người: "A cho rằng...", A phải là đối tượng liên quan đến vế sau. A là việc: "Với việc A, người nói cho rằng...".', examples: [e('对韩国学生来说，学习汉语语法很困难。', 'Với học sinh Hàn Quốc, học ngữ pháp tiếng Hán rất khó.', 'A là người.'), e('对于新HSK考试来说，技巧和实力同等重要。', 'Với kỳ thi HSK mới, kỹ năng và thực lực quan trọng như nhau.', 'A là việc.')],
          points: [{ text: 'Điểm thi: "高校扩招" nói về tuyển sinh, người nói không phải đối tượng. Nên sửa thành "我认为" hoặc "在我看来".', fixes: [{ wrong: '对我来说，这几年高校扩招的幅度太大', right: '在我看来，这几年高校扩招的幅度太大', ref: 'Kiểm tra 2 · A' }] }] },
        { label: 'Cách nói quan điểm', text: 'Nhớ cách nói quan điểm: 从……来说/说来/来看 (人/事); 从……上看 (事); 在……看来 (人). Cẩn thận "对……来说" nối với 拿, 以, 就.', examples: [e('从我个人来说，我更喜欢北京传统的一面。', 'Với riêng tôi, tôi thích mặt truyền thống của Bắc Kinh hơn.'), e('从他的成绩上看，他应该能通过这次考试。', 'Nhìn thành tích của anh, anh nên đỗ kỳ thi này.'), e('在我看来，提高汉语实力远比单纯提高分数重要。', 'Theo tôi, nâng cao thực lực tiếng Hán quan trọng hơn nhiều so với chỉ nâng điểm.'), e('拿人们的性格来说，南方人比较精明，而北方人则比较粗放。', 'Lấy tính cách mà nói, người miền Nam khá tinh khôn, người miền Bắc thì phóng khoáng.'), e('就我个人而言，参加新HSK是为了证明自己的实力。', 'Với bản thân tôi, thi HSK mới là để chứng minh thực lực.')] },
        { label: '3. 关于, 对于', text: '(1) "关于……的" làm định ngữ. Câu có tân ngữ đảo lên đầu (宾语提前) thì dùng làm trạng ngữ. (2) "对于……" làm trạng ngữ, đứng trước hoặc sau chủ ngữ. Chỉ khi "对于" dẫn ra đối tượng của động tác và đứng trước chủ ngữ mới thay được cho "关于".', examples: [e('关于下周工作的具体安排，我们来讨论一下。', 'Về sắp xếp cụ thể công việc tuần sau, chúng ta thảo luận chút.'), e('对于下周工作的具体安排，我们来讨论一下。', 'Với sắp xếp công việc tuần sau, chúng ta bàn một chút.'), e('对于中国文化，我很感兴趣。(= 我对于中国文化很感兴趣)', 'Với văn hóa Trung Quốc, tôi rất hứng thú.')] },
        { label: '4. 至于', text: '至于: nêu thêm một chủ đề khác. 不至于 + tình huống không mong muốn A: nghĩa "không thể là A". "至于" có tính liên từ, nối hai phân câu, vế B là bước sâu hơn của vế A.', examples: [e('他会打网球，至于打得怎么样我不太清楚。', 'Anh biết đánh tennis, còn đánh thế nào tôi không rõ lắm.'), e('我只是有点儿感冒，还不至于住院。', 'Tôi chỉ hơi cảm, chưa đến nỗi phải nhập viện.')],
          points: [{ text: 'Điểm thi: "至于" không đi với "来说". "至于读者来说" sai, phải là "对于读者来说".', fixes: [{ wrong: '至于读者来说，这份报纸是公平和正义的象征', right: '对于读者来说，这份报纸是公平和正义的象征', ref: 'Kiểm tra 1 · A' }] }] },
      ],
    },
    {
      id: 'dui-gen-gei-board', hanzi: '辨析：对、跟、给、向、为', title: 'Phân biệt 对, 跟, 给, 向, 为',
      rows: [
        { label: 'Cấu trúc thường dùng', formulas: ['对 + 宾 + 动 (thái độ, hoạt động tâm lý chủ quan)', '向 + 宾 + 动 (động tác khách quan, có phương hướng)', '给 + 宾 + 动 (tân ngữ nhận được kết quả tốt/không tốt)', '为 + 宾 + 动 (tân ngữ nhận được kết quả tốt)', '主 + 跟 + 宾 + 动 (chủ ngữ và tân ngữ cùng làm)'], examples: [e('老师对我们要求严格。', 'Thầy yêu cầu chúng tôi nghiêm.'), e('服务员向我要小费。', 'Nhân viên phục vụ đòi tôi tiền boa.'), e('父母离婚给他的心灵带来了很大的伤害。', 'Bố mẹ ly hôn gây tổn thương lớn cho tâm hồn anh.'), e('大自然为人类提供了很多有价值的东西。', 'Thiên nhiên cung cấp cho loài người nhiều thứ có giá trị.'), e('我跟他商量一下再做决定。', 'Tôi bàn với anh ấy rồi mới quyết định.')] },
        { label: 'Cấu trúc đặc biệt', formulas: ['动 + 向/给 + 宾', '主 + 对/跟/向/给/为 + 代/名 + 动'], examples: [e('他的目光转向我，眼里充满了感激。', 'Ánh mắt anh chuyển sang tôi, trong mắt đầy cảm kích.'), e('大自然提供给人类很多有价值的东西。', 'Thiên nhiên cung cấp cho loài người nhiều thứ có giá trị.'), e('我对你完全信任。(对他)', 'Tôi hoàn toàn tin tưởng bạn.'), e('我的汉语还差得远。(跟你比)', 'Tiếng Hán của tôi còn kém xa (so với bạn).'), e('我来到中国，为(了)提高汉语水平。', 'Tôi đến Trung Quốc để nâng cao trình độ tiếng Hán.')],
          points: [{ text: 'Điểm thi: "变化" ở đây là mặt không tốt (环境危机, 信用危机, 家庭危机), nên dùng "给" chứ không dùng "为".', fixes: [{ wrong: '这些都是经济发展为现代社会带来的变化', right: '这些都是经济发展给现代社会带来的变化', ref: 'Kiểm tra 4 · C' }] }] },
      ],
    },
    {
      id: 'chao-xiang-wang-board', hanzi: '辨析：朝、向、往', title: 'Phân biệt 朝, 向, 往',
      rows: [
        { label: 'Sơ đồ', text: '向 là vòng lớn nhất: dùng sau động từ, trước động từ, với người hoặc nơi chốn, với động từ trừu tượng. 朝 chỉ trước động từ, với phương hướng hoặc động tác cơ thể. 往 chỉ phương hướng, chỉ đi với nơi chốn.' },
        { label: 'Ví dụ', examples: [e('飞机飞往北京。', 'Máy bay bay đến Bắc Kinh.', '(书) động + 向/往 + địa điểm'), e('一直走到路口，向(/朝/往)左转就到了。', 'Cứ đi thẳng đến ngã tư, rẽ trái là tới.', 'Động từ vận động: 向/往/朝 + phương hướng.'), e('他的家门朝(/向)南开。', 'Cửa nhà anh quay về hướng nam.', '向/朝 + hướng + động từ thường.'), e('他朝(/向)我点点头。', 'Anh gật đầu với tôi.', '向/朝 + người + động tác cơ thể (点头, 招手, 微笑).'), e('中国正向繁荣富强发展。', 'Trung Quốc đang phát triển hướng tới phồn vinh giàu mạnh.', '向 + hướng + động từ trừu tượng.'), e('他向我们介绍了他的女朋友。', 'Anh giới thiệu với chúng tôi bạn gái mình.', '向 + người + động từ trừu tượng (说明, 表示, 解释, 介绍).')] },
      ],
    },
    {
      id: 'wei-board', hanzi: '辨析：为、为了、以', title: 'Phân biệt 为, 为了, 以',
      rows: [
        { label: '1', formulas: ['为了/为 + 目的(句子), 主 + 动  →  主 + 动, 以 + A'], text: 'Nghĩa: "是为了/为的是".', examples: [e('为了孩子健康成长，父母不辞辛苦。', 'Để con lớn lên khỏe mạnh, bố mẹ không quản gian khổ.'), e('父母不辞辛苦，是为了孩子健康成长。', 'Bố mẹ không quản gian khổ là để con lớn lên khỏe mạnh.')] },
        { label: '2', formulas: ['为了 + 代/名 (目的 A của chủ ngữ), 主 + 动'], examples: [e('为了孩子，父母不辞辛苦。', 'Vì con, bố mẹ không quản gian khổ.', '(×) 为孩子 không dùng ở đây vì "为" nghĩa là "给"')] },
        { label: '3', formulas: ['主 + 为 + 代/名 + 动'], examples: [e('父母为孩子不辞辛苦。(为了)', 'Bố mẹ vì con không quản gian khổ.'), e('我们都为这个好消息高兴。(因为)', 'Chúng tôi đều vui vì tin tốt này.'), e('他为我买来蛋糕，庆祝生日。(给)', 'Anh mua bánh cho tôi mừng sinh nhật.')] },
        { label: '4. 以', text: '① 以……为……: = 把……作为/认为……是. ② 意为 "用, 凭借". ③ 意为 "按照, 根据".', examples: [e('老师让我们以"我的金钱观"为题写了一篇文章。', 'Thầy cho chúng tôi viết một bài với đề "Quan niệm tiền bạc của tôi".'), e('以他的实力，通过考试不成问题。', 'Với thực lực của anh, thi đỗ không thành vấn đề.'), e('他总以最高的标准严格要求自己。', 'Anh luôn yêu cầu bản thân nghiêm ngặt theo tiêu chuẩn cao nhất.')] },
      ],
    },
    {
      id: 'genju-board', hanzi: '辨析：根据、按照、凭、靠', title: 'Phân biệt 根据, 按照, 凭, 靠',
      rows: [
        { label: '1. 根据', text: 'Danh từ: 中国现有人口约14亿，这个数字是有根据的. Giới từ: 根据……, ……: vế sau dựa vào vế trước. 根据 chỉ nguồn/nguyên nhân: "这个数字的根据是调查结果".', examples: [e('根据一项调查结果，中国现有人口约14亿。', 'Theo một kết quả điều tra, dân số Trung Quốc hiện khoảng 1,4 tỷ.', '因为有A，所以B (A là căn cứ).')], points: [{ text: 'Điểm thi: "凭" nhấn mạnh điều kiện bản thân, còn ở đây là "nguồn / nguyên nhân" nên dùng "根据".', fixes: [{ wrong: '凭史料记载，太湖湿地公园目前所在的位置…', right: '根据史料记载，太湖湿地公园目前所在的位置…', ref: 'Đề mô phỏng 12 · A' }] }] },
        { label: '2. 按照', text: '动词: 我们得按照公司规定做事. 介词: 按照……, ……: vế sau là nội dung nằm trong vế trước.', examples: [e('按照规定，我们得8点到学校。', 'Theo quy định, chúng ta phải 8 giờ đến trường.', '"8点到学校" là nội dung của "规定".')], points: [{ text: 'Điểm thi: "按照他的说法" khác "根据她的说法"; ở câu kiểm tra 5, nên dùng "按照" hoặc cách nói cố định "用她的话说".', fixes: [{ wrong: '根据她的说法，这是为生个胖宝宝做准备', right: '按照她的说法，这是为生个胖宝宝做准备', ref: 'Kiểm tra 5 · C' }] }] },
        { label: '3. 凭', text: '凭 + 自身条件, 一定的结果.', examples: [e('他凭(着)自己的实力，找到了一份好工作。', 'Anh nhờ thực lực của mình tìm được công việc tốt.')] },
        { label: '4. 靠', text: '靠 + 条件(自身/外界), 一定的结果.', examples: [e('靠父母的资助，我来到中国留学。', 'Nhờ bố mẹ tài trợ tôi đến Trung Quốc du học.', '(×) 凭父母的资助')] },
      ],
    },
    {
      id: 'jingguo-board', hanzi: '辨析：经过、通过', title: 'Phân biệt 经过, 通过',
      rows: [
        { label: 'Sơ đồ', text: '通过 + 方法, 一定的目的 (nhìn như xuyên qua một cổng). 经过 + 过程, 一定的结果.', examples: [e('通过查字典，可以扫除生词障碍。', 'Qua tra từ điển có thể xóa trở ngại từ mới.', '通过 + phương pháp'), e('经过一年的学习，他的汉语进步很大。', 'Sau một năm học, tiếng Hán của anh tiến bộ nhiều.', '经过 + quá trình')],
          points: [{ text: 'Điểm thi: "经过自然现象、谚语和经验来预知" là dùng phương pháp để biết trước, nên phải dùng "通过".', fixes: [{ wrong: '那时老百姓大都经过自然现象、谚语和经验来预知天气变化', right: '那时老百姓大都通过自然现象、谚语和经验来预知天气变化', ref: 'Kiểm tra 6 · A' }] }] },
      ],
    },
  ],

  test: [
    seg(['至于读者来说，', '这份报纸是公平和正义的象征，', '因而记者和编辑们必须牢记这一点，', '不能欺骗或糊弄我们的读者。'], 0, 'Dùng 至于 sai',
      '对于读者来说', '"至于" không đi với "来说". Ở đây cần "对于……来说" (từ góc nhìn của người đọc).'),
    seg(['对我来说，这几年高校扩招的幅度太大，', '新生住不上学校里的宿舍，', '毕业生工作也不好找。'], 0, '对……来说 và 在我看来',
      '在我看来，这几年高校扩招的幅度太大', '"对……来说" cần "A" là người liên quan; ở đây "高校扩招" là việc về tuyển sinh, "我" không phải đối tượng, phải dùng "我认为" hoặc "在我看来".'),
    seg(['听到公司即将裁员的消息，', '办公室里上上下下——', '无论是经理、秘书还是会计，', '都对于自己的"饭碗"满怀忧虑。'], 3, '对于 sau phó từ',
      '都对自己的"饭碗"满怀忧虑', '"对于" không thể đứng sau phó từ "都"; chỉ "对" mới đứng sau phó từ được. Sửa: 都对自己的"饭碗"… hoặc 对于自己的"饭碗"，都…'),
    seg(['当然，还有环境危机、信用危机甚至家庭危机，', '这些都是经济发展', '为现代社会带来的变化，', '它们更加不容忽视。'], 2, '给 và 为',
      '这些都是经济发展给现代社会带来的变化', '"变化" ở đây là mặt không tốt (các loại khủng hoảng) nên dùng "给", không dùng "为" (dành cho kết quả tốt).'),
    seg(['她结婚后日渐发福，但她对此毫不在意，', '根据她的说法，', '这是为生个胖宝宝做准备。'], 1, 'Nhầm 根据 và 按照',
      '按照她的说法 (或: 用她的话说)', '"根据" chỉ nguồn gốc/căn cứ; ở đây là theo cách nói của cô ấy, nên dùng "按照".'),
    seg(['那时老百姓大都经过自然现象、谚语和经验来预知天气变化和自然灾害，', '有时候，', '这比气象台发布的气象预报还要准确些，', '特别是在地震预报这一方面。'], 0, '经过 và 通过',
      '那时老百姓大都通过自然现象、谚语和经验来预知', '"通过" nhấn mạnh phương pháp, phương thức; nghĩa "dùng … để biết trước".'),
  ],

  exam: [
    sen(['大学对于我来说，是人生的一个转折点。', '关于父母的身体健康，他一直非常关心。', '最后，他以领先对手0.1秒的优势成功地闯进了决赛。', '年画是用来祈福迎新的民间工艺品，承载了人们对未来的美好憧憬。'], 1, '关于 và 对于',
      '对于父母的身体健康，他一直非常关心', '"关心" mang tính chủ quan (thái độ), phải dùng "对于", không dùng "关于".'),
    sen(['对于大多数人来说，你认为自己有多幸福，就有多幸福。', '瑜伽进入中国已有多年，人们对瑜伽的认识却仍然存在误区。', '不同的声音会产生不同的心理刺激，从而对健康造成积极的影响。', '对一个人来说，他所期望的不是别的，而是能全力以赴地献身于一种美好的事业。'], 2, 'Ngữ nghĩa không nhất quán',
      '从而对健康造成消极的影响 (hoặc: 给健康带来积极的影响)', '"造成" và "积极" sắc thái ngữ nghĩa không hợp: "造成" dùng cho kết quả xấu, "积极" là tốt. Sửa thành "造成消极" hoặc "带来积极".'),
    sen(['创造力与一般能力的区别在于它的新颖性和独创性。', '幸福不在于拥有金钱，而在于获得成就时的喜悦以及产生创造力的激情。', '"地球村"之所以成为现实，主要出于互联网技术的迅猛发展。', '非常讲究家庭教育一直是中国的传统观念之一，因此教育一直是件非常个人化的事情。'], 2, '出于 và 由于',
      '主要是由于互联网技术的迅猛发展', '"出于" là động từ, nghĩa là xuất phát từ góc độ, loại nguyên nhân; không thay cho "由于/因为". Phải dùng cấu trúc "之所以……是由于/是因为……".'),
    sen(['最后，他以92分的好成绩获得了本季度的冠军。', '生活最大的乐趣在于通过奋斗去获得你想要的东西。', '作为21世纪的年轻一代，我们不仅要有创新意识，而且要有创新的勇气和信心，为把中国建设成为创新型国家。', '读者通过作品的语言，经过一番理解、感受和再创造，就会在自己头脑中形成作品中人物的文学形象。'], 2, '为了 trong vế đầu',
      '以把中国建设成为创新型国家', '"为" thêm câu dẫn mục đích ở đầu câu; ở nửa sau dùng "以" mới đúng (nối hai cụm động từ).'),
    sen(['经考古专家鉴定，这是中国迄今为止发现年代最早的龙凤结合玉雕。', '现代社会面临的一个重要课题，是如何让低收入阶层从经济的发展中获得收益，如何更有效地保护他们的权益。', '很多年轻人在大学里谈恋爱，父母对于此并不赞成，他们认为谈恋爱影响学习，更重要的是双方还没有踏入社会，还没有明确的职业定位。', '企业经济能不能成功很大程度上取决于它的文化形象，企业家能否达到很高的档次，也取决于企业家的文化素质。'], 2, '对 và 对于',
      '父母对此并不赞成', '"对于此" nhầm: "对" mới đứng được ở vị trí này (trước/sau phó từ, người với việc). Dùng "对此" đã đủ nghĩa.'),
    sen(['纸的发明，促进了印刷术的发展，对人类文明的进步也起到了很大的推动作用。', '汽车为城市带来了繁荣，为人们带来了极大的方便，但也给人类造成了灾难。', '地球重力是指地球引力与地球离心力的合力。地球的重力值会随地球纬度的增加而增加，赤道处最小，两极最大。', '莫高窟处于甘肃省敦煌市东南25公里处，它背靠鸣沙山，面对三危峰，现存洞窟492个。它是中国现存规模最大、内容最丰富的古典文化艺术宝库，也是举世瞩目的佛教艺术中心。'], 3, '处于 và 位于',
      '莫高窟位于甘肃省敦煌市东南25公里处', '"处于" biểu thị ở vào một giai đoạn, tình huống, trạng thái, không dùng chỉ nơi chốn. Chỉ nơi chốn phải dùng "位于" hoặc "地处".'),
    sen(['万一碰上生气的事，要自己给自己消气，使不良情绪得到疏导，不至于气出病来。', '我们坐汽车去参观灵隐寺景区，导游在汽车上就介绍灵隐寺给我们，使我们对它的历史和特色有了一个初步的了解。', '随着改革开放的深入，中国人对文化节日的质量要求越来越高，春节联欢晚会的节目也在与时俱进。', '九寨沟是四川著名的景点，慕名前来旅游的中外游客络绎不绝。九寨沟位于四川省九寨沟县中部，素有"人间仙境"、"童话世界"的美誉。'], 1, 'Vị trí của giới từ',
      '导游在汽车上就向我们介绍灵隐寺', 'Giới từ "向" dẫn ra người, đặt trước động từ "介绍", không đặt tân ngữ chỉ người sau "介绍".'),
    sen(['自然是神圣伟大的，生活在这万能自然之神庇护下的人类本身就需要很强的能力，我们如果不能改变自然，就只有适应自然。', '环境污染带来的后果给人们敲响了警钟，我们呼吁大家：珍爱我们的地球。', '人们之所以看不到这种变化，是因为这种变化非常缓慢，而人的生命又极其短暂。', '人们总以为年轻女人向往浪漫的爱情，不会计较现实生活的种种限制；事实上，她们更善于在务实的角度来选择婚姻伴侣。'], 3, '从……角度',
      '更善于从务实的角度来选择婚姻伴侣', 'Cách nói cố định là "从……的角度", không dùng "在".'),
    sen(['从一个成功者的角度来说，天赋是很重要的因素，但勤能补拙，只要你辛勤耕耘，就能收获成功的果实。', '关于垃圾处理情况的调查报告还在进行中，结果还没有出来，但我统计的几个数据可以看出，公众的垃圾分类意识已经得到了增强。', '素质可以理解为人们在先天条件的基础上，在家庭、社会的影响下，通过后天教育所形成的稳定的心理品格。', '我对整个过程还算满意，但后半程的战术安排不够合理，尤其是在冲刺阶段，感觉有些急躁，打乱了自己的节奏。'], 1, 'Thiếu giới từ 从',
      '但从我统计的几个数据可以看出', 'Thiếu giới từ: "从……可以看出" biểu thị từ tình hình hiện có rút ra kết luận.'),
    sen(['气质是人们在先天素质的基础上通过实践活动，在后天生活条件的影响下逐渐形成的。', '观点在四面银幕的环抱中，随意欣赏不同角度的画面，仿佛置身于真实的环境之中。', '泥河湾是世界上最早的人类发源地之一，泥河湾遗址群主要位于河北省阳原县境内桑干河两岸区域内。', '父母得明白年轻人是爱赶潮流的，因此对潮流有所认识和了解，是子女沟通的一道桥梁，也是理解他们行为方式、价值观念的必要手段。'], 3, 'Chủ ngữ và tân ngữ',
      '是与子女沟通的一道桥梁', 'Chủ ngữ là "父母", "子女" là tân ngữ nên phải dùng giới từ "与": "是与子女沟通的一道桥梁".'),
    sen(['他们的收藏品不仅在数量上，而且在价格上也越来越具竞争力。', '蜻蜓的翅膀末端有一个比周围略重的厚斑点，可以防止飞行时翅膀颤抖。科学家们据此改进了飞机的机翼，减轻机翼的抖动。', '童话总是通过曲折动人的故事情节来反映现实生活，揭示某种道理，对儿童进行多方面的教育。', '儿童文学在开发儿童智力、促进儿童成长方面功不可没，为下一代，请关注儿童文学的创作和出版。'], 3, '为 và 为了',
      '为了下一代，请关注儿童文学的创作和出版', '"下一代" là danh từ, "为" nghĩa "给"; để biểu thị mục đích phải dùng "为了", hoặc "为了下一代能聪明健康地成长".'),
    sen(['凭史料记载，太湖湿地公园目前所在的位置，原本为太湖的一处湖湾，因当年夫差和西施常来此地游湖而得名"游湖"。', '对于工作繁忙的人来说，时间似乎总是不够，因此如何合理安排、控制时间成为许多人需要学习的内容。', '香港是我非常喜爱的一个城市，我在踏上香港的土地的时候觉得很亲切，突然觉得这个城市和我有一种很深的联系。', '北京人爱吃炸酱面由来已久，炸酱面是一道简单的面食，也是老北京人一张不折不扣的美食名片。所以如果您到北京来，想感受地道的北京味，炸酱面绝对不可不尝。'], 0, '凭 và 根据',
      '根据史料记载', '"凭" nhấn mạnh điều kiện của bản thân, còn ở đây là "nguồn" tư liệu lịch sử, nên dùng "根据".'),
    sen(['作为一种十分有效的抗氧化剂，维生素E在对抗自由基、延缓人体衰老方面，会起到和运动相似的作用。', '在炎热干燥的沙漠中，人如果24小时不喝水将会因脱水死亡，而骆驼长达一周不喝一滴水也能生存下来。', '张大千是具有世界影响的中国画大师。他在创作上的卓越成就，与他高深的学术修养、厚重的生活积累以及他广结师友，与人取长补短密不可分。', '作为第一个上春节联欢晚会的外国人，大山的名字在中国早已家喻户晓，至于碰到汉语说得很溜的外国人，中国人总拿他们跟大山比。'], 3, '至于 và 以至于',
      '以至于碰到汉语说得很溜的外国人，中国人总拿他们跟大山比', '"至于" nêu thêm chủ đề khác; ở đây cần biểu thị kết quả, phải dùng "以至(于)".'),
    sen(['北京市市长与伦敦市市长在北京签订了《友好城市合作关系协议》，这意味着北京与伦敦缔结为友好城市。', '热气球的操作员能做的，只是捕捉不同的风向以调整气球的高度而已。至于气球的具体航线和落点，就只能听天由命了。', '北京是我梦想开始的地方，面对这个高楼林立、车水马龙的大都市，我虽然举目无亲，却踌躇满志，梦想着在这里创造些什么。', '老人公寓是介在老人住宅与养老院之间的一种住宅，它既保护了老人的隐私，照顾了老人的心理需求，又可以使老人得到专门而细心的照顾，分担独生子女的重担。'], 3, 'Cấu trúc 介于……与……之间',
      '老人公寓是介于老人住宅与养老院之间的一种住宅', 'Cấu trúc cố định "介于……与……之间", không dùng "介在".'),
    sen(['微笑是向别人传递温和、友善的信号。笑容会直接影响人们的判断，所以当陌生人接近时，人们会根据对方的笑容来辨别是敌还是友。', '宋代的建筑风格与汉代和唐代相比，发生了巨大的变化，由汉唐的宏伟大气转变为宋代的柔丽纤巧，这是中国建筑史上最重要的一次转型。', '造纸术和印刷术对人类政治、经济、文化等诸多方面产生了重要影响，为世界文明的传播与发展做出了巨大贡献。', '政府应进行年轻父母心理学教育，教他们怎样去跟孩子交流，怎样正确地培养和发展孩子的能力，以使孩子的身心得到健康的发展。'], 3, 'Động từ 进行 + tân ngữ',
      '政府应对年轻父母进行心理学教育', '"进行" phía sau không thể mang trực tiếp tân ngữ chỉ người, phải dùng cấu trúc "对……进行……".'),
  ],
}
