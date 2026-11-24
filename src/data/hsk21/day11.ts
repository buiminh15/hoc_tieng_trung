import type { DayContent, Ex, ErrQ } from './types'

/**
 * Tuần 3 · Thứ Hai: Câu chữ 把, câu bị động, 受 使 令 让 ("把"字句 被动句 受 使 令 让), sách trang 194–210.
 * Phần dịch tiếng Việt và pinyin do app tự thêm.
 */

const x = (h: string, p: string, vi: string, note?: string, tag?: string): Ex => ({ h, p, vi, note, tag })
const e = (h: string, vi: string, note?: string, tag?: string): Ex => ({ h, vi, note, tag })
const seg = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'segment', parts, answer, topic, fix, why })
const sen = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'sentence', parts, answer, topic, fix, why })

export const day11: DayContent = {
  intro:
    'Câu chữ 把 và câu bị động là hai kiểu câu đặc biệt: lúc nào dùng 把, 被, lúc nào không cần? Hôm nay ta học lại một lượt để mạch ngữ pháp trong đầu rõ hơn. Thêm nữa, 受, 使, 令, 让 đều liên quan đến 把, 被, đề thi cũng hay hỏi phân biệt chúng. Phần này quy luật rất rõ, cách dùng cố định, nên hôm nay ta học trọn vẹn một lượt.',

  focusTitle: 'Ba phần học hôm nay',

  cheat: {
    title: 'Bảng tra nhanh: 把, 被, 受, 使',
    lead: 'Bốn kiểu này khác nhau ở chỗ chủ ngữ là ai và nhấn mạnh gì. Ví dụ cả bốn đều lấy một câu: 老师批评他，他哭了.',
    head: ['Kiểu', 'Công thức', 'Nhấn mạnh', 'Ví dụ'],
    rows: [
      { key: '把', cells: ['主A + 把 + 宾B + 动 + 其他', 'Biến đổi, kết quả sau động tác của tân ngữ', '老师把他批评哭了。'] },
      { key: '被', cells: ['主B + 被 + 宾A + 动 + 其他', 'Biến đổi, kết quả của chủ ngữ do hành động', '他被老师批评哭了。'] },
      { key: '受', cells: ['主B + 受(到/了/着/过) + 宾(A的)动', 'Chủ ngữ chịu hành động của A', '他受到了老师的批评。'] },
      { key: '使', cells: ['主A(行为) + 使 + 宾B + 其他', 'Nguyên nhân A, nên B có kết quả; không nhấn mạnh xử lý', '老师的批评使他哭了。'] },
    ],
  },

  sections: [
    // ───────────────────────── 把字句 ─────────────────────────
    {
      id: 'ba-ju', hanzi: '"把"字句', pinyin: '“bǎ” zìjù', title: 'Câu chữ 把',
      intro: 'Cấu trúc: 主语 + 把/将 + 宾语 + 谓语 + 其他. Ý nghĩa: nhấn mạnh sự xử trí, ảnh hưởng và kết quả đối với tân ngữ. Câu chữ 把 có năm hình thức thành phần "其他".',
      groups: [
        {
          title: '1. Cấu trúc và vị trí các thành phần',
          patterns: [
            { formula: '主语 + 把/将 + 宾语 + 谓语 + 其他', title: 'Cấu trúc cơ bản', note: 'Nếu có động từ năng nguyện, phó từ phủ định hoặc từ chỉ thời gian, các từ này thường đặt trước "把".', examples: [
              x('我想[把]花盆搬到阳台上。', 'Wǒ xiǎng bǎ huāpén bān dào yángtái shang.', 'Tôi muốn chuyển chậu hoa ra ban công.'),
              x('他没[把]照相机带来。', 'Tā méi bǎ zhàoxiàngjī dài lái.', 'Anh ấy không mang máy ảnh đến.'),
              x('你别[把]衣服弄脏了。', 'Nǐ bié bǎ yīfu nòng zāng le.', 'Đừng làm bẩn quần áo.'),
              x('我昨天刚[把]书借给同学了。', 'Wǒ zuótiān gāng bǎ shū jiè gěi tóngxué le.', 'Hôm qua tôi vừa cho bạn mượn sách.'),
              x('演员们已经[将]这次义演的收入捐献给了灾区人民。', 'Yǎnyuánmen yǐjīng jiāng zhè cì yìyǎn de shōurù juānxiàn gěi le zāiqū rénmín.', 'Các diễn viên đã quyên góp thu nhập buổi biểu diễn từ thiện cho người dân vùng thiên tai.'),
            ] },
            { formula: '都/全/一齐/统统 → sau 把 ;  只/仅仅/单/光 → trước 把', title: 'Vị trí của phó từ phạm vi', note: 'Nếu vị ngữ có tân ngữ, phó từ biểu thị toàn bộ phạm vi (都, 全, 一齐, 统统) đứng sau "把", trước động từ vị ngữ; phó từ phạm vi loại trừ (只, 仅仅, 单, 光) phải đứng trước "把".', examples: [
              x('他把那些书[全]买下来了。', 'Tā bǎ nàxiē shū quán mǎi xiàlái le.', 'Anh ấy mua hết những cuốn sách đó.'),
              x('你把钱[都]花完了吗？', 'Nǐ bǎ qián dōu huā wán le ma?', 'Bạn tiêu hết tiền rồi à?'),
              x('我[只]把冰箱擦了。', 'Wǒ zhǐ bǎ bīngxiāng cā le.', 'Tôi chỉ lau tủ lạnh.'),
            ] },
          ],
        },
        {
          title: '2. Năm hình thức của "其他" (thành phần sau động từ)',
          patterns: [
            { formula: '主 + 把 + 宾 + 〈动〉 + 补语 (结果/趋向/时量/动量)', title: '(1) Động từ mang bổ ngữ', note: 'Bổ ngữ có thể là bổ ngữ kết quả, xu hướng, tình thái, thời lượng/động lượng; không thể là bổ ngữ mức độ hay khả năng. Vì bổ ngữ mức độ và khả năng chỉ nói tình hình chủ ngữ, không nhấn mạnh sự biến đổi của tân ngữ.', examples: [
              x('我把自行车修[好]了。', 'Wǒ bǎ zìxíngchē xiū hǎo le.', 'Tôi sửa xong xe đạp.', 'Bổ ngữ kết quả.'),
              x('他把作业本拿[出来]，开始写作业。', 'Tā bǎ zuòyèběn ná chūlái, kāishǐ xiě zuòyè.', 'Anh lấy vở bài tập ra bắt đầu làm bài.', 'Bổ ngữ xu hướng.'),
              x('那件事把他气[坏]了。', 'Nà jiàn shì bǎ tā qì huài le.', 'Chuyện đó làm anh ta tức điên.', 'Bổ ngữ kết quả (tình thái).'),
              x('他把试卷检查了[一遍]，才交给老师。', 'Tā bǎ shìjuàn jiǎnchá le yí biàn, cái jiāo gěi lǎoshī.', 'Anh kiểm tra bài thi một lượt rồi mới nộp thầy.', 'Bổ ngữ động lượng.'),
              x('他把汉语说得很好。(×) 我把老师的话听得懂。(×)', 'Tā bǎ Hànyǔ shuō de hěn hǎo. (×)', 'Không dùng 把 với bổ ngữ mức độ, khả năng.', 'Sai.'),
            ] },
            { formula: '主 + 把 + 宾₁ + 〈动〉 + 在/到/上/给/成/为/作 + 宾₂', title: '(2) Động từ mang giới từ + tân ngữ', note: '在/到/上: tân ngữ₂ là nơi chốn (đổi vị trí). 给: tân ngữ₂ là người (đổi quyền sở hữu). 成/为/作: tân ngữ₂ là một dạng khác của tân ngữ₁ (đổi hình thức). Có hai tân ngữ, động từ sau lại có "在/到/上/给/成/为/作" thì nhất định phải dùng câu chữ 把.', examples: [
              x('你把书放[在]桌子上。', 'Nǐ bǎ shū fàng zài zhuōzi shang.', 'Bạn đặt sách lên bàn.', 'Nơi chốn.'),
              x('服务员把酒送[到]客人面前。', 'Fúwùyuán bǎ jiǔ sòng dào kèrén miànqián.', 'Nhân viên mang rượu đến trước mặt khách.'),
              x('他把朋友送[上]了火车。', 'Tā bǎ péngyou sòng shàng le huǒchē.', 'Anh tiễn bạn lên tàu.'),
              x('我把作业交[给]了老师。', 'Wǒ bǎ zuòyè jiāo gěi le lǎoshī.', 'Tôi nộp bài tập cho thầy.', 'Người nhận.'),
              x('你把这句话翻译[成]英文。', 'Nǐ bǎ zhè jù huà fānyì chéng Yīngwén.', 'Bạn dịch câu này sang tiếng Anh.', 'Đổi hình thức.'),
              x('她把老人[当成]自己的亲生母亲。(把……当作/看作/当成/看成/比作)', 'Tā bǎ lǎorén dāngchéng zìjǐ de qīnshēng mǔqīn.', 'Cô coi cụ già như mẹ ruột của mình.'),
              x('人们常把祖国比作母亲。', 'Rénmen cháng bǎ zǔguó bǐ zuò mǔqīn.', 'Người ta thường ví tổ quốc như mẹ.'),
            ] },
            { formula: '主 + 把 + 宾 + 〈动〉 (AA / A一A / A了A / ABAB / A一下)', title: '(3) Động từ lặp', note: 'Khi động từ chính không có thành phần nào khác, bản thân nó phải lặp lại một chút. Lặp có thể chen "一" hoặc "了": "主 + 把 + 宾 + 动 + (一/了) + 动". Có ý "làm cho tân ngữ thay đổi".', examples: [
              x('咱们把教室[打扫打扫]。', 'Zánmen bǎ jiàoshì dǎsǎo dǎsǎo.', 'Chúng ta quét dọn lớp một chút.'),
              x('请你把课文[读一读]。', 'Qǐng nǐ bǎ kèwén dú yi dú.', 'Mời bạn đọc bài khóa một lượt.'),
              x('我把学过的生词又[看了看]。', 'Wǒ bǎ xué guo de shēngcí yòu kàn le kàn.', 'Tôi lại xem qua từ mới đã học.'),
            ] },
            { formula: '主 + 把 + 宾 + 〈动〉 + 了 / 着', title: '(4) Động từ mang 了, 着', note: 'Động từ + "了/着": biểu thị kết quả của động tác. Dùng "了" với 扔, 丢, 忘…; dùng "着" với 拿, 带, 留…', examples: [
              x('天阴了，你把雨伞[带着]吧。', 'Tiān yīn le, nǐ bǎ yǔsǎn dài zhe ba.', 'Trời âm u rồi, bạn mang ô theo đi.'),
              x('他把钱包[丢了]。', 'Tā bǎ qiánbāo diū le.', 'Anh làm mất ví.'),
              x('你去把这些垃圾[扔了]。', 'Nǐ qù bǎ zhèxiē lājī rēng le.', 'Bạn đi vứt đống rác này đi.', 'Vứt xong là rác không còn.'),
              x('他把每天打工挣来的钱都[留着]，想以后去旅行。', 'Tā bǎ měitiān dǎgōng zhèng lái de qián dōu liú zhe, xiǎng yǐhòu qù lǚxíng.', 'Anh giữ lại tất cả tiền làm thêm mỗi ngày, muốn sau này đi du lịch.', '"着" nhấn mạnh động tác tiếp tục.'),
            ] },
            { formula: '把 + 宾 (xác định)', title: '(5) Tân ngữ sau 把 phải xác định', note: 'Sự vật sau "把" phải xác định. Phía trước danh từ thường có từ hạn chế (这/那, 这本…). Dù "把" + danh từ trơ trọi, danh từ không có số lượng từ hạn chế cũng chỉ sự vật xác định.', examples: [
              x('请把[那本书]拿过来。(không nói "把有的书拿过来")', 'Qǐng bǎ nà běn shū ná guòlái.', 'Hãy đưa cuốn sách đó đây.'),
              x('他把[两本书]都看完了。', 'Tā bǎ liǎng běn shū dōu kàn wán le.', 'Anh đã đọc xong cả hai cuốn sách.', 'Chắc chắn là hai cuốn đã đề cập.'),
              x('请你把书拿来。', 'Qǐng nǐ bǎ shū ná lái.', 'Bạn mang sách đến.', 'Người nói biết là sách nào.'),
            ] },
          ],
        },
        {
          title: '3. Động từ không dùng được trong câu chữ 把',
          patterns: [
            { formula: '不能用于 "把"字句 的谓语动词', title: 'Năm nhóm động từ', note: '(1) Động từ không thể mang tân ngữ (旅行, 合作). (2) Động từ biểu thị phán đoán, trạng thái (是, 有, 像, 在, 等). (3) Động từ hoạt động tâm lý/cảm giác (喜欢, 讨厌, 知道, 认识, 同意, 觉得, 希望, 要求, 看见). (4) Động từ xu hướng (上, 下, 进, 出, 回, 过, 起, 到). (5) Sự vật vốn không tồn tại, nhờ động tác mới sinh ra (她把女孩生了 ×, 她生了一个女孩 ✓).', examples: [
              x('她生了一个女孩。(不能说“她把女孩生了”)', 'Tā shēng le yí ge nǚhái.', 'Cô ấy sinh một bé gái.'),
            ] },
            { formula: '谓语动词 = 及物 + 有支配能力', title: 'Điều kiện của động từ vị ngữ', note: 'Động từ vị ngữ của câu 把 thường phải là động từ chuyển tiếp, có thể chi phối và ảnh hưởng tân ngữ sau "把".', examples: [] },
          ],
        },
      ],
    },
    // ───────────────────────── 被动句 ─────────────────────────
    {
      id: 'beidong-ju', hanzi: '被动句', pinyin: 'bèidòngjù', title: 'Câu bị động',
      intro: 'Cấu trúc: 主语 + 被/叫/让/给 + 宾语 (+ 给) + 动词 + 其他. Tân ngữ sau "被/给" có thể lược; sau "让/叫" thì phải có tân ngữ (nếu không cần nói rõ có thể dùng "人" thay).',
      groups: [
        {
          title: '1. Cấu trúc',
          patterns: [
            { formula: '主 + 被/叫/让/给₁ + 宾 (+ 给₂) + 〈动〉 + 其他', title: '被/叫/让/给', note: '"被/给₁" sau tân ngữ có thể lược; "让/叫" sau nhất định phải có tân ngữ. "给₂" là trợ từ kết cấu, có thể dùng trước động từ vị ngữ để tăng ngữ khí.', examples: [
              x('门[被](风)吹开了。', 'Mén bèi (fēng) chuī kāi le.', 'Cửa bị gió thổi mở.'),
              x('火车票早[给](人)订光了。', 'Huǒchēpiào zǎo gěi (rén) dìng guāng le.', 'Vé tàu sớm đã bị người ta đặt hết.'),
              x('我的笔[让]弟弟弄坏了。', 'Wǒ de bǐ ràng dìdi nòng huài le.', 'Bút của tôi bị em trai làm hỏng.'),
              x('他的自行车[叫]人偷走了。', 'Tā de zìxíngchē jiào rén tōu zǒu le.', 'Xe đạp của anh bị người ta trộm mất.'),
              x('很久没说汉语了，好多生词都[给]我忘记了。', 'Hěn jiǔ méi shuō Hànyǔ le, hǎo duō shēngcí dōu gěi wǒ wàngjì le.', 'Lâu rồi không nói tiếng Hán, nhiều từ mới tôi đã quên.', '"给" là trợ từ, tăng ngữ khí.'),
            ] },
            { formula: '介词"给₁" ≠ 助词"给₂" (không dùng cùng lúc)', title: '2. Chú ý: không dùng chung 给₁ và 给₂', note: 'Giới từ "给₁" không thể dùng cùng trợ từ "给₂".', examples: [
              x('时间[给]你耽误了。(✓)', 'Shíjiān gěi nǐ dānwu le.', 'Thời gian bị bạn làm lỡ.'),
              x('时间让你[给]耽误了。(✓)', 'Shíjiān ràng nǐ gěi dānwu le.', 'Thời gian bị bạn làm lỡ.'),
              x('时间给你给耽误了。(×)', 'Shíjiān gěi nǐ gěi dānwu le.', 'Sai: hai "给" liền.'),
            ] },
            { formula: '被 / 为 + 宾 + 所 + 〈动〉', title: '3. Cấu trúc cố định 被/为……所……', note: 'Sau "被" nhất định có tân ngữ, sau "所" thường là động từ hai âm tiết.', examples: [
              x('同学们[被]他乐于助人的精神[所]感动。', 'Tóngxuémen bèi tā lèyú zhùrén de jīngshén suǒ gǎndòng.', 'Các bạn học bị tinh thần vui vẻ giúp người của anh làm cảm động.'),
              x('“安乐死”[为]越来越多的人[所]接受。', '“Ānlèsǐ” wèi yuè lái yuè duō de rén suǒ jiēshòu.', '"Chết êm ái" được ngày càng nhiều người chấp nhận.'),
            ] },
          ],
        },
        {
          title: '4. So sánh câu bị động và câu chữ 把',
          patterns: [
            { formula: 'Giống nhau', title: 'Giống nhau', note: '(1) Động từ trong câu thường là động từ chuyển tiếp. (2) Từ trước vị ngữ động từ đều có liên hệ logic; sau thường là bổ ngữ, tân ngữ, "着" hoặc "了"; trước là trạng ngữ, trạng ngữ toàn câu nhất định đặt trước "被/把". (3) Động từ năng nguyện và phó từ phủ định chỉ có thể đặt trước "把/被". (4) Trợ từ "给" dùng như nhau trong câu bị động và câu chữ 把.', examples: [
              x('你能[把]窗户打开吗？', 'Nǐ néng bǎ chuānghu dǎkāi ma?', 'Bạn mở cửa sổ giúp được không?'),
              x('他没有[被]困难吓倒。', 'Tā méiyǒu bèi kùnnan xià dǎo.', 'Anh không bị khó khăn dọa sợ.'),
              x('他把这么重要的事都给忘了。 / 这么重要的事都被他给忘了。', 'Tā bǎ zhème zhòngyào de shì dōu gěi wàng le.', 'Việc quan trọng thế mà anh cũng quên.'),
            ] },
            { formula: 'Khác nhau', title: 'Khác nhau', note: '(1) "被" có thể lược tân ngữ, "把" thì không. (2) "把" có thể dùng trong câu cầu khiến: "被" thì không. (3) "把" biểu thị xử trí, tân ngữ là bị xử trí; "被" chủ yếu biểu thị gặp phải, tân ngữ là chủ động. (4) "被" thường biểu thị việc không như ý, không mong muốn; truyền thống còn ảnh hưởng; "把" không có hạn chế đó.', examples: [
              x('老师把我们表扬了一番。', 'Lǎoshī bǎ wǒmen biǎoyáng le yì fān.', 'Thầy khen chúng tôi một trận.', '"把": không hạn chế tốt xấu.'),
              x('我们被老师批评了一番。', 'Wǒmen bèi lǎoshī pīpíng le yì fān.', 'Chúng tôi bị thầy phê bình một trận.', '"被": thường việc không mong muốn.'),
            ] },
          ],
        },
      ],
    },
    // ───────────────────────── 受 使 令 让 ─────────────────────────
    {
      id: 'shou-shi-ling-rang', hanzi: '受·使·令·让', pinyin: 'shòu · shǐ · lìng · ràng', title: 'Phân biệt 受 / 使 / 令 / 让',
      intro: '受: gặp, nhận. 使: khiến, làm cho. 令: khiến (cho tâm lý). 让: khiến, cho phép, hoặc bị.',
      groups: [
        {
          title: '1. 受',
          patterns: [
            { formula: '主语 + 受(到/了/着/过) + 宾语 + 〈动〉', title: '受: chịu, nhận', note: 'Nghĩa "遭受, 接受". Mang "了", "着", "过". Tân ngữ có thể là danh từ, động từ hoặc câu nhỏ. Khi "受" có "欢迎, 鼓舞, 感动, 称赞, 教育, 启发" đi sau, phía trước dùng được "很".', examples: [
              x('他因为迟到[受了]老师批评。', 'Tā yīnwèi chídào shòu le lǎoshī pīpíng.', 'Anh vì đến muộn bị thầy phê bình.'),
              x('与其年轻人整天[受着]老板的气，不如自己开公司。', 'Yǔqí niánqīng rén zhěngtiān shòu zhe lǎobǎn de qì, bùrú zìjǐ kāi gōngsī.', 'Thay vì người trẻ suốt ngày chịu bực của sếp, chi bằng tự mở công ty.'),
              x('他在课堂上[受过]多次表扬。', 'Tā zài kètáng shang shòu guo duō cì biǎoyáng.', 'Anh đã nhiều lần được khen trên lớp.'),
              x('听到这个好消息，大家都很[受鼓舞]。', 'Tīngdào zhège hǎo xiāoxi, dàjiā dōu hěn shòu gǔwǔ.', 'Nghe tin tốt này, mọi người đều rất phấn chấn.'),
              x('这种新产品很[受消费者欢迎]。', 'Zhè zhǒng xīn chǎnpǐn hěn shòu xiāofèizhě huānyíng.', 'Sản phẩm mới này rất được người tiêu dùng chào đón.'),
            ] },
          ],
        },
        {
          title: '2. 使',
          patterns: [
            { formula: 'A + 使 + B + 〈动〉/〈形〉', title: '使: khiến, làm cho', note: 'Dẫn đến kết quả nào đó. Chủ ngữ là người hoặc vật; sau bắt buộc có tân ngữ kiêm ngữ. "A使B + động/tính từ": A khiến B làm hành động hoặc sinh biến đổi, kết quả nào đó.', examples: [
              x('他的才能[使]我佩服。', 'Tā de cáinéng shǐ wǒ pèifú.', 'Tài năng của anh làm tôi khâm phục.'),
              x('紧张的工作[使]他更加消瘦了。', 'Jǐnzhāng de gōngzuò shǐ tā gèngjiā xiāoshòu le.', 'Công việc căng thẳng khiến anh gầy hơn.'),
              x('咱们想一个[使]大家满意的好办法。', 'Zánmen xiǎng yí ge shǐ dàjiā mǎnyì de hǎo bànfǎ.', 'Ta nghĩ một cách hay khiến mọi người hài lòng.'),
              x('改革开放[使]中国变得富强起来。', 'Gǎigé kāifàng shǐ Zhōngguó biàn de fùqiáng qǐlái.', 'Cải cách mở cửa khiến Trung Quốc trở nên giàu mạnh.'),
            ] },
          ],
        },
        {
          title: '3. 令',
          patterns: [
            { formula: '令 + 〈人〉 + 心理活动', title: '令: khiến cho (cảm xúc)', note: '(1) "致使, 使得": do nguyên nhân hay điều kiện nào đó mà dẫn đến trạng thái tâm lý. Sau phải có "人": "令人 + từ chỉ hoạt động tâm lý". (2) Biểu thị mệnh lệnh, thường là cấp trên với cấp dưới. Phủ định dùng "没", không dùng "不". Phải có tân ngữ kiêm ngữ: "(没)令 + 人 + động từ".', examples: [
              x('这个消息[令人]兴奋。', 'Zhège xiāoxi lìng rén xīngfèn.', 'Tin này làm người ta phấn khởi.'),
              x('你的回答[令人]失望。', 'Nǐ de huídá lìng rén shīwàng.', 'Câu trả lời của bạn làm người ta thất vọng.'),
              x('这样的成绩真[令人]很泄气。(×，“令人”后不能有程度副词)', 'Zhèyàng de chéngjì zhēn lìng rén hěn xièqì.', 'Sai: sau "令人" không có phó từ mức độ.', 'Sai.'),
              x('因严重违反纪律，学校[令]他退学。', 'Yīn yánzhòng wéifǎn jìlǜ, xuéxiào lìng tā tuìxué.', 'Do vi phạm kỷ luật nghiêm trọng, nhà trường ra lệnh cho anh thôi học.', 'Mệnh lệnh.'),
            ] },
          ],
        },
        {
          title: '4. 让',
          patterns: [
            { formula: '让 (使/令)  ;  让 (容许/命令)  ;  让 (叫/被)', title: '让: ba nghĩa', note: '(1) "使, 令, 致使": có thể mang kiêm ngữ, phó từ mức độ; không mang bổ ngữ. (2) "容许, 命令": có thể mang tân ngữ động từ, kiêm ngữ, phó từ; không mang bổ ngữ. Khi không cho phép, trước "让" dùng "不" hoặc "别". (3) "叫, 被": biểu thị bị động, tân ngữ không thể lược.', examples: [
              x('对不起，我来晚了，[让]你久等了。', 'Duìbuqǐ, wǒ lái wǎn le, ràng nǐ jiǔ děng le.', 'Xin lỗi, tôi đến muộn, để bạn đợi lâu.'),
              x('天空中的太阳[让](使)我流出很多汗来。', 'Tiānkōng zhōng de tàiyáng ràng (shǐ) wǒ liúchū hěn duō hàn lái.', 'Mặt trời trên trời khiến tôi đổ nhiều mồ hôi.', '(使 = 让)'),
              x('他留我在他家吃饭，说什么也[不让]走。', 'Tā liú wǒ zài tā jiā chīfàn, shuō shénme yě bú ràng zǒu.', 'Anh giữ tôi ăn cơm ở nhà anh, nói gì cũng không cho đi.', 'Không cho phép.'),
              x('你[让]他好好想想再决定。', 'Nǐ ràng tā hǎohāo xiǎngxiang zài juédìng.', 'Bạn để anh nghĩ kỹ rồi hãy quyết.'),
              x('别[让]孩子老玩电子游戏。', 'Bié ràng háizi lǎo wán diànzǐ yóuxì.', 'Đừng để con chơi game điện tử mãi.'),
              x('我的衬衫[让]钉子刮了个口子。', 'Wǒ de chènshān ràng dīngzi guā le ge kǒuzi.', 'Áo sơ mi của tôi bị đinh móc rách một lỗ.', 'Bị động.'),
            ] },
          ],
        },
      ],
    },
  ],

  boards: [
    {
      id: 'ba-bei-board', hanzi: '把、被、受、使', title: 'Phân biệt 把, 被, 受, 使',
      rows: [
        { label: 'Sơ đồ', text: 'Cùng một nội dung "老师批评他，他哭了": 把: 老师把他批评哭了 (nhấn mạnh biến đổi, kết quả của tân ngữ sau động tác). 被: 他被老师批评哭了 (nhấn mạnh biến đổi, kết quả của chủ ngữ). 受: 他受到了老师的批评 (chủ ngữ chịu hành động). 使: 老师的批评使他哭了 (nguyên nhân A, nên B có biến đổi, kết quả).',
          points: [{ text: 'Điểm thi: ba biện pháp A, B, C đều dẫn đến kết quả "局面有所好转", nên dùng "使" chứ không dùng "把".', fixes: [{ wrong: '把学生就餐难的局面有所好转', right: '使学生就餐难的局面有所好转', ref: 'Kiểm tra 6 · D' }] }] },
      ],
    },
    {
      id: 'ba-kaodian', hanzi: '"把"字句的考点', title: 'Điểm thi của câu chữ 把',
      rows: [
        { label: 'Điểm thi 1', text: 'Thành phần "其他" sau vị ngữ không được lược! Gồm: bổ ngữ (kết quả, xu hướng, tình thái, thời lượng/động lượng, không phải mức độ/khả năng); giới-tân; động từ lặp; 了/着; 在/到/给/成.', examples: [e('我把自行车修好了。', 'Tôi sửa xong xe đạp.', 'Bổ ngữ kết quả.'), e('你把这篇文章翻译成英文。', 'Bạn dịch bài này sang tiếng Anh.', 'Giới-tân.'), e('我们把房间打扫一下。', 'Chúng ta dọn phòng một chút.', 'Động từ lặp.'), e('他把钱包丢了。', 'Anh làm mất ví.', '了.')],
          points: [{ text: 'Điểm thi: "停" cần bổ ngữ xu hướng "下来".', fixes: [{ wrong: '建议我们先把机器停，打开机箱', right: '建议我们先把机器停下来，打开机箱', ref: 'Kiểm tra 1 · B' }, { wrong: '他把课文既多读又多背', right: '他把课文读了又读，背了又背 (hoặc: 他多读、多背课文)', why: 'Cấu trúc "既……又……" kết hợp tính từ, động từ chưa đủ "其他", không phù hợp "把".', ref: 'Kiểm tra 2 · A' }] }] },
        { label: 'Điểm thi 2', text: 'Tân ngữ sau "把" thường là sự vật xác định: 主语 + 把 + (这/那) 宾语 + 动 + 其他. Thường không nói "我把一本书放进书架".', examples: [e('我把这/那本书放进书架。', 'Tôi bỏ cuốn sách này/đó vào giá.')] },
        { label: 'Điểm thi 3', text: 'Trước "把" thường có động từ năng nguyện hoặc phó từ phủ định (别, 不, 没, 未, 勿, 未免) / 能愿动.', examples: [e('你把钥匙弄丢了。→ 你别把钥匙弄丢了。', 'Đừng làm mất chìa khóa.'), e('你把这件事想得太简单了。→ 你未免把这件事想得太简单了。', 'Bạn đã nghĩ chuyện này quá đơn giản.'), e('我得把今天的作业做完，否则老师又该批评我了。', 'Tôi phải làm xong bài hôm nay, nếu không thầy lại phê bình.')],
          points: [{ text: 'Điểm thi: phủ định, phó từ phải đặt trước "把".', fixes: [{ wrong: '一位司机把汽车停在停车场没有', right: '一位司机把汽车没有停在停车场', ref: 'Kiểm tra 3 · A' }] }] },
        { label: 'Điểm thi 4', text: 'Động từ vị ngữ của câu 把 phải mang nghĩa "xử trí", tức là làm cho tân ngữ thay đổi.', examples: [e('我认识了很多中国朋友。(×把很多中国朋友认识了)', 'Tôi quen nhiều bạn Trung Quốc.', '"认识" là việc của "tôi", "中国朋友" không đổi.')] },
      ],
    },
    {
      id: 'bei-kaodian', hanzi: '被动句的考点', title: 'Điểm thi của câu bị động',
      rows: [
        { label: 'Điểm thi 1', text: 'Cách dùng giống 把: có phủ định hoặc năng nguyện: 主 + 被 + 宾 + 动 + 其他. "其他" không được lược. Động từ vị ngữ phải có nghĩa "xử trí".', examples: [e('我的自行车被朋友弄坏了。', 'Xe đạp của tôi bị bạn làm hỏng.', 'Trung tâm ngữ đưa lên đầu nên cần "被".')] },
        { label: 'Điểm thi 2', text: '"被……" thường làm định ngữ: "被(+ 宾₁) + 动 + 的 + 名" để nhấn mạnh trung tâm ngữ.', examples: [e('被(公司)录取的员工都将得到高薪。', 'Nhân viên được công ty tuyển dụng đều được lương cao.')] },
        { label: 'Điểm thi 3', text: '"被" thường dùng cho việc không tốt, còn "把" không có thói quen đó.', examples: [e('老师把我们表扬了一番。', 'Thầy khen chúng tôi.'), e('我们被老师批评了一番。', 'Chúng tôi bị thầy phê bình.')] },
        { label: 'Điểm thi 4', text: 'Cấu trúc "被/为……所 + 动" (động từ thường hai âm tiết).', examples: [e('他见义勇为的行为被(/为)大家所称道。', 'Hành động dũng cảm của anh được mọi người ca ngợi.')],
          points: [{ text: 'Điểm thi: "继承" là động từ hai âm tiết; "被……所" thiếu "被".', fixes: [{ wrong: '"天人合一"的思想不仅会东方人所继承', right: '"天人合一"的思想不仅会被东方人所继承', ref: 'Kiểm tra 4 · C' }] }] },
        { label: 'Điểm thi 5', text: 'Trong câu bị động, tân ngữ sau "被/给" có thể lược; còn "叫/让" thì không. Sau "被/叫/让" đều có thể thêm "给"; còn "给" thì không.', examples: [e('帽子被(风)吹跑了。', 'Mũ bị gió thổi bay.'), e('帽子给(风)吹跑了。', 'Mũ bị gió thổi bay.'), e('帽子叫/让风给吹跑了。', 'Mũ bị gió thổi bay.'), e('帽子给(风)给吹跑了。(×)', 'Sai: hai "给".')] },
      ],
    },
    {
      id: 'shou-shi-board', hanzi: '"受"字句、"使"字句', title: 'Câu chữ 受, câu chữ 使',
      rows: [
        { label: '受', formulas: ['主语 + 受(到/了/着/过) + 宾语 + 动'], text: '"受" mang nghĩa: tân ngữ làm động tác bị chủ ngữ chịu. "受" có tính động từ, sau có thể dùng "到" biểu thị kết quả hoặc "了/着/过". Khi đó "宾语 + 动" tương đương tân ngữ của "受". Có thể thêm "的" trước động từ; động từ đơn âm tiết thì thêm "之": "主语 + 受(到/了/着/过) + 宾语 + 的/之 + 动".', examples: [e('数码产品受到年轻人的欢迎。', 'Sản phẩm kỹ thuật số được người trẻ chào đón.'), e('我受他人之托，来办这件事。', 'Tôi được người khác nhờ đến lo việc này.')],
          points: [{ text: 'Điểm thi: "受" nhưng "表扬" là mặt tốt, mà "挨" mới dùng cho mặt xấu. "受" có thể dùng cả hai mặt, nhưng "到" phải đúng. Câu 5: "不少人挨到表扬" sai; phải là "受到".', fixes: [{ wrong: '不少人挨到表扬', right: '不少人受到表扬', why: '"挨" chỉ dùng cho mặt không tốt; "受" dùng được cho cả tốt và xấu.', ref: 'Kiểm tra 5 · B' }] }] },
        { label: '使', formulas: ['A + 使 + B + 动/形'], text: '"使" nghĩa: "A khiến B làm hành vi hay sinh biến đổi, kết quả nào đó", tức "do A mà B có kết quả". "把" nhấn mạnh sau xử trí tân ngữ có kết quả; còn "使" chỉ nêu nguyên nhân của chủ ngữ, tân ngữ có kết quả; hành động xử trí không được nhấn mạnh.', examples: [e('吃巧克力使人发胖。', 'Ăn sô-cô-la làm người ta béo.')] },
        { label: '令/使/让', text: '令/使/让 + 人 + hoạt động tâm lý. 使 + 人 + động/tính từ (+ bổ ngữ). 让 + 人 + động + bổ ngữ.', examples: [e('他的成绩令(使/让)父母很失望。', 'Thành tích của anh khiến bố mẹ rất thất vọng.'), e('改革开放使中国富强起来。', 'Cải cách mở cửa khiến Trung Quốc giàu mạnh.'), e('他让我站在这儿等着。', 'Anh bảo tôi đứng đây đợi.')] },
      ],
    },
  ],

  test: [
    seg(['他看到我们手忙脚乱的阵势，', '建议我们先把机器停，', '打开机箱，拆下风扇，', '看看CPU的编号再说。'], 1, 'Thiếu thành phần "其他"',
      '建议我们先把机器停下来', 'Câu chữ 把 phải có thành phần "其他" sau động từ; "停" cần bổ ngữ xu hướng "下来".'),
    seg(['他把课文既多读又多背，', '好词语、好句子都记在心里，', '用的时候就像泉水一样汩汩地冒出来，', '根本不愁无话可说。'], 0, '把 với 既……又……',
      '他把课文读了又读，背了又背 (hoặc: 他多读、多背课文)', 'Thiếu "其他"; sau "既……又……" thường là tính từ, không hợp với "把". Có thể sửa "读了又读，背了又背" hoặc trực tiếp "他多读、多背课文".'),
    seg(['一位司机把汽车没有停在停车场，', '他十分钟后回来，', '发现车窗上已经被贴上了一张红黄相间的罚款单，', '怎么也撕不掉。'], 0, 'Vị trí của phủ định',
      '一位司机把汽车没有停在停车场 → 一位司机没有把汽车停在停车场', 'Phủ định "没有" phải đặt trước "把": "没有把汽车停在停车场".'),
    seg(['东方文化在21世纪显示出独特的魅力，', '我们甚至可以预言，', '"天人合一"的思想不仅会东方人所继承，', '还会受到西方学者的瞩目。'], 2, 'Cấu trúc 被……所……',
      '不仅会被东方人所继承', 'Cấu trúc "被……所……" cần "被"; thiếu "被".'),
    seg(['在国际生物学奥林匹克竞赛志愿者工作总结会上，', '不少人挨到表扬，', '其中数学系04级的学生杨娜被评为"星光志愿者"，', '另外20名志愿者也获得了不同级别的奖励。'], 1, '挨 và 受',
      '不少人受到表扬', '"挨" chỉ dùng cho mặt không tốt; "表扬" là mặt tốt nên phải dùng "受".'),
    seg(['学校延长了食堂开放的时间，', '把每个食堂的窗口数增加到15个，', '同时严格限制校外人员来本校就餐，', '把学生就餐难的局面有所好转。'], 3, '把 và 使',
      '使学生就餐难的局面有所好转', 'Ba biện pháp A, B, C là nguyên nhân, "局面有所好转" là kết quả, nên phải dùng "使", không dùng "把".'),
  ],

  exam: [
    sen(['会议期间，总经理将所有人的提案认真分析了一下。', '白天从事各种工作，晚上停止工作保证睡眠，体力、脑力得到恢复。', '世界杯期间，一些公司采取了人性化的措施，将上班时间延后一小时。', '据统计，美国有1/3的地区是被森林树木所覆盖。'], 1, 'Thiếu "使"',
      '停止工作保证睡眠，使体力、脑力得到恢复', '"停止工作，保证睡眠" là nguyên nhân, "体力、脑力得到恢复" là kết quả, nên phải dùng "使".'),
    sen(['幽默被人正确地解释为"以诚挚表达感受，寓深思于嬉笑"。', '李白是中国唐代伟大的浪漫主义诗人，被后人尊称为"诗仙"。', '大自然为人类生存提供了许多有益的东西，阳光、空气、水等都为生命所必需。', '我看到一部好的电影，把它然后介绍给朋友，与朋友分享观看电影的快乐，并与朋友一起探讨我们对电影的感悟。'], 3, 'Vị trí phó từ, năng nguyện',
      '然后把它介绍给朋友', 'Phó từ, động từ năng nguyện phải đặt trước "把": "……然后把它介绍给朋友".'),
    sen(['到中国旅游的外国游客通常都会将西安列入他们的行程表。', '礼貌使有礼貌的人喜悦，也使那些受人以礼貌相待的人们喜悦。', '"走向森林，回归大自然"越来越多地被城市人接受和追求，并成为一种代表时尚的娱乐方式。', '现在网上购物的不仅有年轻人还有很多中年人，网上购物越来越多的人认可。'], 3, 'Thiếu 被/所',
      '网上购物越来越多的人认可 → 网上购物被(/为)越来越多的人(所)认可', '"认可" ở đây mang nghĩa bị động nên cần "被" hoặc "为……所".'),
    sen(['参加活动的读者请在2010年9月1日之前，将《读者调查表》寄回本社。', '独叶草自1914年在云南的高山上被发现之日起，就引起了国内外学者的兴趣。', '当你感到悲哀痛苦时，最好是去学些什么东西，学习会使你永远立于不败之地。', '通过参加这次为玉树灾区捐购捐款活动，让我领会了"同舟共济"的精神内涵。'], 3, 'Thiếu chủ ngữ do 通过 và 让',
      '通过参加这次……活动，我领会了…… (hoặc: 参加这次……活动，让我领会了……)', '"通过" kết hợp "让" làm câu thiếu chủ ngữ. Bỏ "让" hoặc bỏ "通过".'),
    sen(['保持愉悦的心情，能激发人们探求新事物的热情。', '每个人从生到死的距离，都叫一生。人生的区别，在于如何走过这段距离。', '书就是社会，一本好书就好比一个好的社会，它能陶冶人的感情和气质，使人变得高尚。', '昨天晚上熬夜写计划书，本来打算睡一上午，可是还不到八点，一阵电话铃声使我吵醒。'], 3, '把/使 lẫn lộn',
      '一阵电话铃声把我吵醒了', '"使" không dùng khi nhấn mạnh xử trí tân ngữ; cần "把".'),
    sen(['阅读教学的重要目标之一就是使学生具有独立阅读的能力，为他们的终身学习打下基础。', '随着人们环保意识的提高，越来越多的人在购买家电产品时，把节能做重要的衡量标准，绿色家电成为新的时尚选择。', '在森林中，老虎是最凶猛的，另外，它额头上的花纹很像一个"王"字，因此，人们称老虎为"百兽之王"。', '如果你想走到高处，就要使用自己的两条腿！不要让别人把你抬到高处；不要坐在别人的背上和头上。'], 1, 'Giới từ + tân ngữ sau 把',
      '把节能作为重要的衡量标准', 'Động từ sau "把" có tân ngữ nên phải mang "到/上/在/给/成/为/作": "把节能作为重要的衡量标准".'),
    sen(['丽江的自然景观美丽眩目，具有"北半球最南端的现代冰川"之称，其中最负盛名的是被誉为我国"冰川博物馆"及"植物王国"的玉龙雪山。', '两三岁的孩子可能不喜欢吃蔬菜，于是有些父母就把水果来代替蔬菜。但水果和蔬菜提供的营养并不相同，所以不能互相替代。', '情侣之间产生执着的主要原因，是他们把爱当成一把雕刻刀，时时刻刻都想用这把刀对方塑造成符合自己心理想的样子。', '有些儿童文学作品偏重于理性教育，过多地注入了成人的思想，孩子天性中爱游戏、爱兴趣、爱幻想的成分却被忽略了。'], 1, '用……来代替',
      '于是有些父母就用水果来代替蔬菜', 'Cấu trúc cố định "用……来代替", không thể dùng "把".'),
    sen(['雨花石是南京的特产，几乎成了南京的象征，去南京玩的人都把它当作旅游纪念品带回家。', '人的美，最重要的是内在美，即"心灵美"，中国古代把心灵美称为"内秀"、"慧中"。', '把小女儿每次抱在怀里，喂她吃东西，我都有一种很满足的感觉，好像外出觅食的雌鸟把虫子放进小鸟的嘴里。', '对联，俗称对子，由上下两联组成。讲究对仗工整，平仄协调。对联是中国特有的一种语言艺术，被国务院列入国家非物质文化遗产。'], 2, 'Vị trí của "每次"',
      '每次把小女儿抱在怀里', 'Trạng ngữ "每次" phải đặt trước "把".'),
    sen(['造纸术的发明，带来了书写材料的根本性变革，更为印刷术的发明提供了重要的承印材料。', '牛郎织女的传说历经千年而不衰，让被称为"东方情人节"的七夕成为最具浪漫色彩的中国传统节日。', '草婴，原名盛峻峰，文学翻译家，是世界上唯一的一位把俄国著名作家托尔斯泰的全部小说都翻译成本国语言的人。', '疏散星团中恒星的数量较少，一般被十几颗到几百颗恒星组成，具有不规则的外形结构，多分布在银河系的银盘内。'], 3, '由……组成',
      '一般由十几颗到几百颗恒星组成', 'Cấu trúc cố định "由……组成", không dùng "被".'),
    sen(['一项对来自132个国家136,000人的调查结果表明，幸福更多来自于被尊重、对生活有控制感两方面。', '李嘉诚从小受到家庭环境的熏陶，3岁就开始读唐诗，到小学毕业时，已经能读《红楼梦》、《老残游记》和《资治通鉴》了。', '作为一种影响深远的建筑艺术，宫殿建筑体现了中国古代建筑师们富于想象、善于创新的独特风格，至今仍为中外工程师所赞赏和借鉴。', '陈先生是中国著名的儿童教育专家，从事儿童心理学和儿童教育的科学研究，发表了诸多影响深远的学术论文，他常被应邀到世界各地进行讲学。'], 3, '应邀 đã mang nghĩa bị động',
      '他常应邀到世界各地进行讲学', '"应邀" đã có nghĩa "被邀请", không cần thêm "被".'),
    sen(['黄河，又被中国人称为"母亲河"。它是中国第二长河，世界第五长河，是世界上含沙量最大的河流。', '当俯卧睡眠时，胸部和腹部的肌肉会受到压迫，使心脏和肺部不能得到很好的休息，而且头部也常常会陷到较软的枕头里，这样呼吸也会被很大影响。', '赤壁之战是中国古代以少胜众、智取强敌的著名战役，被罗贯中写入《三国演义》后，更是家喻户晓，影响深远。', '从铁路部门获悉，《京沪高铁VIP旅客服务标准(试行)》已经制定完成，VIP旅客将享受到如在飞机上一样的免费餐饮服务。'], 1, 'Dùng 受 thay 被',
      '这样呼吸也会受到很大的影响', 'Câu bị động cần thành phần kết quả; ở đây nên dùng "受到" chứ không dùng "被".'),
    sen(['"概念车"是一种在设想和现实之间的产物，可以为新型汽车的研发提供可靠的科学依据。', '鸽子是一种常见的鸟类。它们有较强的飞翔能力和辨别方向的本领，因此从古代起，人们就把鸽子作为通信工具来传递信息。', '我们买回来的小鸟当天就被白猫吃，只剩下那个卖鸟人精心编织的铁丝笼，真后悔没有把笼子挂起来，这次算是一个惨痛的教训吧。', '童话最大的特点就是运用丰富的想象力，让动物和植物都具有了人的感情，它们的内容都非常有趣，很容易让儿童接受。'], 2, 'Thiếu kết quả sau 被',
      '小鸟当天就被白猫吃了', 'Câu bị động cần có thành phần chỉ kết quả; "被白猫吃" thiếu "了".'),
    sen(['品牌传播的目的就是提高知名度，产品尽快成为名牌，因为消费者都喜欢买牌子响的产品。', '到上海不去城隍庙，等于没有到过上海。它将许多有中国特色的东西浓缩其中，只有亲临其境，才能细细品味。', '古代甲骨上的刻划痕迹——甲骨文，被确认为是商代文字，是19世纪末、20世纪初中国考古的三大发现之一。', '人类只有懂得如何善待自然，对自然的开发和利用才会有良性的成果，自然才会把美好的礼物奉献给人类。'], 0, '使',
      '提高知名度，使产品尽快成为名牌', 'Nguyên nhân dẫn đến kết quả cần dùng "使".'),
    sen(['广东人对点心有着特殊的感情，就算是到大酒楼吃盛宴，最后都会用几种点心作为漂亮的"闭幕曲"。', '兴隆街道是南京在城区西移中，以原江东镇5个行政村为主体组建而成的。3年来的城市化改造实施，给这里的面貌发生了深刻的变化。', '南宋四大家之一马远的作品《寒江独钓图》，把"千山鸟飞绝，万径人踪灭，孤舟蓑笠翁，独钓寒江雪"的意境描绘得淋漓尽致。', '奇瑞在媒体报道中被称为"黑马"，因为这个生产自主品牌汽车的企业好像是突然从地下冒出来的，一出世就开始了爆炸式的成长。'], 1, '给 và 使',
      '使这里的面貌发生了深刻的变化', '"3年来的城市化改造实施" là nguyên nhân dẫn đến kết quả, nên dùng "使", không dùng "给".'),
    sen(['黄山确实不同寻常，它兼有泰山的雄伟、华山的俊俏、庐山的瀑瀑、衡山的烟云，以奇松、怪石、云海、温泉"四绝"闻名于世，被誉为"天下第一奇山"。', '1925年3月12日，孙中山先生与世长辞。为了纪念一贯倡导植树造林的孙中山先生，我国政府将每年的3月12日定为"植树节"。', '兰花幽香袭人，令人陶醉，有"香祖"、"天下第一香"之称，人们把它比为君子，作为高洁、清雅的象征。', '阳光虽然为生命所必需，但是阳光中的紫外线却有扼杀原生命的"本领"。水能有效地吸收紫外线，因而为原始生命所提供了天然的"屏障"。'], 3, 'Nhầm 为……所 và 给',
      '因而为(/给)原始生命提供了天然的"屏障"', '"为……所……" cần "为" nghĩa là "被"; nếu nghĩa "给" thì phải bỏ "所".'),
  ],
}
