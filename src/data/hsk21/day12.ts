import type { DayContent, Ex, ErrQ } from './types'

/**
 * Tuần 3 · Thứ Ba: Câu so sánh (比较句), sách trang 211–224.
 * Phần dịch tiếng Việt và pinyin do app tự thêm.
 */

const x = (h: string, p: string, vi: string, note?: string, tag?: string): Ex => ({ h, p, vi, note, tag })
const e = (h: string, vi: string, note?: string, tag?: string): Ex => ({ h, vi, note, tag })
const seg = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'segment', parts, answer, topic, fix, why })
const sen = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'sentence', parts, answer, topic, fix, why })

export const day12: DayContent = {
  intro:
    'Câu so sánh là một kiểu câu đặc biệt rất đơn giản. Nhưng chính vì đơn giản, thí sinh lại càng dễ bỏ qua chi tiết. Hôm nay ta hệ thống lại kiến thức ngữ pháp liên quan đến câu so sánh, để nắm chắc và dùng đúng, giúp tiếng Hán của bạn chuẩn hơn, tự nhiên hơn. Đặc biệt nhớ: khi làm đề, mấu chốt là tìm ra hai phương diện được so sánh, tức là cái gì so với cái gì.',

  focusTitle: 'Ba phần học hôm nay',

  cheat: {
    title: 'Bảng tra nhanh: các kiểu câu so sánh',
    lead: 'Phân loại theo hai cách: so hơn (比), so không bằng (没有, 不如, 不比), giống nhau (跟……一样, 像), và các cấu trúc dần dần (一天比一天, 越来越).',
    head: ['Kiểu', 'Công thức', 'Ví dụ'],
    rows: [
      { key: 'A比B…', cells: ['A + 比 + B + 形/动 (+ 差量)', '他比我大两岁。'] },
      { key: 'Phủ định', cells: ['A 没有 B (+ 这么/那么) + 形 ;  A 不如 B (+ 形) ;  A 不比 B + 形', '他的水平没有你高。'] },
      { key: 'Giống nhau', cells: ['A 跟/和/同/与 B 一样/相似/差不多 ;  A 像/如 B 这么/那么/这样/那样', '她长得跟妈妈一样。'] },
      { key: 'Dần dần', cells: ['一天比一天…; 一次比一次…; 越来越…; 越……越……', '天气一天比一天暖和。'] },
      { key: 'Cố định', cells: ['A 于 B; A 过 B; A 似 B; A 与 B 比起来 / A 比起 B 来', '他的散文胜过小说。'] },
    ],
  },

  sections: [
    // ───────────────────────── A 比 B ─────────────────────────
    {
      id: 'bi-ju', hanzi: 'A比B+形/动', pinyin: 'A bǐ B + xíng/dòng', title: 'Cấu trúc A 比 B + tính/động từ',
      intro: 'Dạng chính: A + 比 + B + tính từ/động từ (biểu thị chênh lệch). Có nhiều kiểu thành phần sau tính từ: bổ ngữ số lượng, 多了/得多, bổ ngữ mức độ.',
      groups: [
        {
          title: '1. Thành phần cơ bản',
          patterns: [
            { formula: 'A 比 B + 〈形〉', title: '(1) A 比 B + tính từ', note: 'Trước tính từ không thể thêm phó từ mức độ (很, 挺, 大, 怪, 极, 最, 非常, 十分, 格外, 极其, 相当, 比较, 多么, 越加, 越发…), cũng không thêm "不". Nhưng "更, 更加, 还, 再, 稍微, 略微" là ngoại lệ, có thể đặt trước tính từ.', examples: [
              x('他今天[比]我还冷。', 'Tā jīntiān bǐ wǒ hái lěng.', 'Hôm nay anh còn lạnh hơn tôi.'),
              x('这件比那件[略微]便宜一点儿。', 'Zhè jiàn bǐ nà jiàn lüèwēi piányi yìdiǎnr.', 'Cái này rẻ hơn cái kia chút ít.'),
              x('我认识的人里没有比她[更](/再)漂亮的了。', 'Wǒ rènshi de rén lǐ méiyǒu bǐ tā gèng (/ zài) piàoliang de le.', 'Trong những người tôi quen không có ai đẹp hơn cô ấy.'),
            ] },
            { formula: 'A 比 B + 〈形〉 + 多了 / 得多 / 得远', title: '(2) 多了, 得多, 得远', note: 'Biểu thị chênh lệch rất lớn.', examples: [
              x('他的房间比我的大[多了]。', 'Tā de fángjiān bǐ wǒ de dà duō le.', 'Phòng anh to hơn phòng tôi nhiều.'),
              x('他的个子比我高[得多]。', 'Tā de gèzi bǐ wǒ gāo de duō.', 'Anh cao hơn tôi nhiều.'),
              x('我的汉语比他还差[得远]呢。', 'Wǒ de Hànyǔ bǐ tā hái chà de yuǎn ne.', 'Tiếng Hán của tôi còn kém anh xa.'),
            ] },
            { formula: 'A 比 B + 〈形〉 + 数量补语 (一点儿 / 一些)', title: '(3) Bổ ngữ số lượng', note: 'Biểu thị chênh lệch cụ thể.', examples: [
              x('我比他早来了[半个小时]。', 'Wǒ bǐ tā zǎo lái le bàn ge xiǎoshí.', 'Tôi đến sớm hơn anh nửa tiếng.'),
              x('首尔的天气比这儿暖和[一些]。', 'Shǒu’ěr de tiānqì bǐ zhèr nuǎnhuo yìxiē.', 'Thời tiết Seoul ấm hơn ở đây một chút.'),
            ] },
            { formula: 'A 比 B + 〈动〉 + 得 + 〈形〉(程度补语)', title: '(4) Bổ ngữ mức độ', note: 'A 比 B + động từ + 得 + tính từ.', examples: [
              x('他比我跑得[快]。', 'Tā bǐ wǒ pǎo de kuài.', 'Anh chạy nhanh hơn tôi.'),
            ] },
            { formula: 'A + 〈动〉 + 〈宾〉 + 〈动〉 + 得 + 比 + B + 〈形〉  /  A + 〈动〉 + 〈宾〉 + 比 + B + 〈动〉 + 得 + 〈形〉', title: '(5) Có tân ngữ: hai cách nói', note: 'Khi động từ có tân ngữ, có hai cách: lặp động từ rồi "得 + 比 + B + 形", hoặc "比 + B + 动 + 得 + 形".', examples: [
              x('你写汉字比我写得好多了。= 你汉字写得比我好多了。', 'Nǐ xiě Hànzì bǐ wǒ xiě de hǎo duō le. = Nǐ Hànzì xiě de bǐ wǒ hǎo duō le.', 'Bạn viết chữ Hán giỏi hơn tôi nhiều.'),
            ] },
          ],
        },
        {
          title: '2. Dạng phủ định',
          patterns: [
            { formula: 'A 不如 B  ;  A 不比 B  ;  A 没有 B', title: '(1) 不如, 不比, 没有', note: '(1) "不如" chỉ có dạng phủ định: "A 不如 B" = "A 不如 B 好". (2) "不比" + tính từ tích cực hay tiêu cực đều được, thường nhấn mạnh ngữ khí. (3) "A 不比 B + 形 + 多少": nhấn mạnh "B không + tính từ, A cũng không + tính từ". (4) Phủ định của "不比" là "比不上/比不过".', examples: [
              x('他的汉语水平[不如]他的妹妹。', 'Tā de Hànyǔ shuǐpíng bùrú tā de mèimei.', 'Trình độ tiếng Hán của anh không bằng em gái.'),
              x('他今天来得[不比]我早。', 'Tā jīntiān lái de bù bǐ wǒ zǎo.', 'Hôm nay anh đến không sớm hơn tôi.'),
              x('他也不比我来得晚。(Anh ấy cũng không đến muộn hơn tôi.)', 'Tā yě bù bǐ wǒ lái de wǎn.', 'Anh cũng không đến muộn hơn tôi.', 'Tính từ tiêu cực dùng được.'),
              x('广州的天气不比上海好多少。', 'Guǎngzhōu de tiānqì bù bǐ Shànghǎi hǎo duōshao.', 'Thời tiết Quảng Châu không tốt hơn Thượng Hải là bao.', '"上海的天气不好, 广州也不好".'),
              x('他的汉语比不上我。(= 他的汉语比我差)', 'Tā de Hànyǔ bǐ bú shàng wǒ.', 'Tiếng Hán của anh không bằng tôi.'),
            ] },
            { formula: 'A 没有 B (+ 这么/那么/这样/那样) + 〈形〉  ;  A 不如 B (+ 形)  ;  A 不比 B (+ 形)', title: '(2) Bốn dạng phủ định thường gặp', note: '"没有" và "不如" thường so sánh với mặt tích cực, tính từ không thể mang nghĩa tiêu cực. "不比" nghĩa là "gần như nhau", nên cả mặt tích cực và tiêu cực đều dùng được. Trong câu phủ định so sánh thường không dùng phó từ mức độ; nếu dùng, chỉ có thể đặt trước "没有/不如".', examples: [
              x('他的水平[没有]你高。', 'Tā de shuǐpíng méiyǒu nǐ gāo.', 'Trình độ anh không cao bằng bạn.'),
              x('这件衣服的质量[不如]那件(好)。', 'Zhè jiàn yīfu de zhìliàng bùrú nà jiàn (hǎo).', 'Chất lượng bộ này không bằng bộ kia.'),
              x('弟弟[不比]哥哥矮(/高)。', 'Dìdi bù bǐ gēge ǎi (/ gāo).', 'Em không thấp hơn / không cao hơn anh.'),
              x('首尔的夏天[没有]北京这么热。', 'Shǒu’ěr de xiàtiān méiyǒu Běijīng zhème rè.', 'Mùa hè Seoul không nóng như Bắc Kinh.'),
              x('他说汉语说得[还不如]我呢。', 'Tā shuō Hànyǔ shuō de hái bùrú wǒ ne.', 'Anh nói tiếng Hán còn không bằng tôi.'),
              x('我对北京的了解[也不比]你多多少。', 'Wǒ duì Běijīng de liǎojiě yě bù bǐ nǐ duō duōshao.', 'Tôi hiểu về Bắc Kinh cũng không nhiều hơn bạn bao nhiêu.'),
              x('他的个子比我还高。→ 他的个子没有我还高。(×) → 他的个子[还]没有我高。(✓)', 'Tā de gèzi bǐ wǒ hái gāo.', 'Anh cao hơn tôi nữa. → Anh còn không cao bằng tôi.', 'Phó từ mức độ đặt trước 没有.'),
            ] },
          ],
        },
        {
          title: '3. Các kiểu so sánh thường gặp khác',
          patterns: [
            { formula: '一天比一天 / 一年比一年 / 一个比一个 + 〈形〉', title: '(1) Dần dần: 一……比一……', note: 'Chủ ngữ nhất định đứng trước; kiểu câu này không có dạng phủ định.', examples: [
              x('他的汉语一天比一天进步。', 'Tā de Hànyǔ yì tiān bǐ yì tiān jìnbù.', 'Tiếng Hán của anh tiến bộ từng ngày.'),
              x('人们的生活一年比一年好。', 'Rénmen de shēnghuó yì nián bǐ yì nián hǎo.', 'Cuộc sống của người dân năm sau tốt hơn năm trước.'),
              x('这些苹果一个比一个大。', 'Zhèxiē píngguǒ yí ge bǐ yí ge dà.', 'Những quả táo này quả nào cũng to hơn quả trước.'),
            ] },
            { formula: '越来越 + 〈形〉/〈动〉  ;  A 越……越……', title: '(2) 越来越, 越……越……', note: '"越来越 + 形/动" (không dùng với động từ, tính từ biểu thị thay đổi như 改变, 增加, 提高, 降低, 形容词 + 起来). "A越……越……": hai động/tính từ cùng tăng.', examples: [
              x('他的汉语[越来越]好。', 'Tā de Hànyǔ yuè lái yuè hǎo.', 'Tiếng Hán của anh ngày càng tốt.'),
              x('天气越来越热。', 'Tiānqì yuè lái yuè rè.', 'Thời tiết ngày càng nóng.'),
              x('他[越]说[越]高兴，竟手舞足蹈起来。', 'Tā yuè shuō yuè gāoxìng, jìng shǒuwǔ-zúdǎo qǐlái.', 'Anh càng nói càng vui, thậm chí múa tay múa chân.'),
              x('他越说，我[越]生气。', 'Tā yuè shuō, wǒ yuè shēngqì.', 'Anh càng nói tôi càng tức.'),
            ] },
            { formula: 'A 有/没有 B (+ 这么/那么/这样/那样) + 〈形〉  ;  A (不) 像 B + 这么/那么/这样/那样 + 〈形〉', title: '(3) 有/没有 và 像', note: '"有" phủ định là "没有"; "像" phủ định là "不像". Trong câu có "有", "这么/那么/这样/那样" trước tính từ có thể lược; còn trong câu có "像" thì không thể lược. "这么/这样" chỉ vật gần, "那么/那样" chỉ vật xa; khi A, B đều ở gần, có thể dùng cả "那么".', examples: [
              x('儿子快有爸爸[那么]高了。', 'Érzi kuài yǒu bàba nàme gāo le.', 'Con trai sắp cao bằng bố rồi.'),
              x('北京的水果[没有]广州那么多。', 'Běijīng de shuǐguǒ méiyǒu Guǎngzhōu nàme duō.', 'Trái cây Bắc Kinh không nhiều bằng Quảng Châu.'),
              x('他有你高吗？', 'Tā yǒu nǐ gāo ma?', 'Anh ấy có cao bằng bạn không?'),
              x('我不像哥哥那么高。', 'Wǒ bú xiàng gēge nàme gāo.', 'Tôi không cao như anh.'),
              x('他像爸爸那么聪明。', 'Tā xiàng bàba nàme cōngmíng.', 'Anh thông minh như bố.'),
            ] },
            { formula: 'A 和/同/与 B + 一样/相似/差不多  ;  A 和/同/与 B + 〈动〉 + 这么/那么', title: '(4) 一样 / 相似 / 差不多', note: 'Phủ định: "A 和/同/与 B + 不一样". Dạng "A 和/同/与 B + 动词 + 这么/那么 + ……": phủ định thêm "不" ở trước "……"; đây không phải so sánh thật mà chỉ là bổ ngữ mức độ, nên "不/没" đặt trước "这么/那么".', examples: [
              x('她的长相跟她姐姐的[几乎一样]。→ 她的长相跟她姐姐的不一样。', 'Tā de zhǎngxiàng gēn tā jiějie de jīhū yíyàng.', 'Dáng vẻ cô gần giống chị.'),
              x('北京的气候和天津的[差不多]。→ 北京的气候和天津的差不多。', 'Běijīng de qìhòu hé Tiānjīn de chàbuduō.', 'Khí hậu Bắc Kinh và Thiên Tân gần như nhau.'),
              x('小张跟小王合作得[这么好]。', 'Xiǎo Zhāng gēn Xiǎo Wáng hézuò de zhème hǎo.', 'Tiểu Trương hợp tác với Tiểu Vương tốt thế.'),
              x('女儿同妈妈长得[那么像]。', 'Nǚ’ér tóng māma zhǎng de nàme xiàng.', 'Con gái giống mẹ thế.'),
              x('他跟爸爸长得那么像。→ 他跟爸爸长得[不]那么像。', 'Tā gēn bàba zhǎng de nàme xiàng.', 'Anh giống bố thế. → Anh không giống bố lắm.'),
              x('我和他聊得那么开心。→ 我和他聊得[没]那么开心。', 'Wǒ hé tā liáo de nàme kāixīn.', 'Tôi và anh trò chuyện vui. → Tôi và anh trò chuyện không vui lắm.'),
            ] },
            { formula: 'A 跟/同/和/与 B 一样 (+ 形/动)', title: '(5) 跟……一样', note: 'Phủ định: A 跟 B 不一样. Có thể mở rộng: 差不多/几乎一样, 完全一样, 相同/相等/相似.', examples: [
              x('中国有很多风俗习惯和我们国家[一样]。', 'Zhōngguó yǒu hěn duō fēngsú xíguàn hé wǒmen guójiā yíyàng.', 'Trung Quốc có nhiều phong tục giống nước chúng tôi.'),
              x('中国书法用的笔、墨、纸与中国画用的[完全一样]，运笔方式也差不多。', 'Zhōngguó shūfǎ yòng de bǐ, mò, zhǐ yǔ Zhōngguó huà yòng de wánquán yíyàng, yùnbǐ fāngshì yě chàbuduō.', 'Bút, mực, giấy của thư pháp giống hệt tranh Trung Quốc, cách vận bút cũng gần như nhau.'),
              x('这幅画与那幅画[几乎一样]。', 'Zhè fú huà yǔ nà fú huà jīhū yíyàng.', 'Bức tranh này gần như giống bức kia.'),
              x('3乘以2的结果与10减4的结果[相等]。', 'Sān chéngyǐ èr de jiéguǒ yǔ shí jiǎn sì de jiéguǒ xiāngděng.', 'Kết quả 3 nhân 2 bằng kết quả 10 trừ 4.'),
              x('这幅画中的人物与真人极为[相似]。', 'Zhè fú huà zhōng de rénwù yǔ zhēnrén jíwéi xiāngsì.', 'Nhân vật trong tranh cực giống người thật.'),
            ] },
            { formula: 'A 于 B ; A 过 B ; A 似 B ; A 与/跟/和 B 比起来 / A 比起 B 来', title: '(6) Cách nói cố định', note: '① A……于 B: A + 动/形 + 于 + B. ② A……过 B. ③ A……似 B. ④ A 与 (/跟/同/和) B 比起来 (/相比)、A 比起 B (来): A cũng có thể đặt sau, thống nhất so sánh kết quả, làm chủ ngữ. Trong cấu trúc này A thường là cụm dài hơn.', examples: [
              x('西部地区的经济发展水平落后[于]东部地区。', 'Xībù dìqū de jīngjì fāzhǎn shuǐpíng luòhòu yú dōngbù dìqū.', 'Trình độ phát triển kinh tế vùng Tây kém hơn vùng Đông.'),
              x('他写的散文[胜过]小说。', 'Tā xiě de sǎnwén shèng guò xiǎoshuō.', 'Văn xuôi anh viết hay hơn tiểu thuyết.'),
              x('我们不是亲人，感情却[胜似]亲人。', 'Wǒmen bú shì qīnrén, gǎnqíng què shèng sì qīnrén.', 'Chúng tôi không phải ruột thịt, nhưng tình cảm hơn cả ruột thịt.'),
              x('人们现在的生活水平[比起]20世纪80年代[来]提高了很多。', 'Rénmen xiànzài de shēnghuó shuǐpíng bǐqǐ èrshí shìjì bāshí niándài lái tígāo le hěn duō.', 'So với thập niên 80 thế kỷ 20, mức sống hiện nay nâng cao nhiều.'),
              x('[比起]20世纪80年代，人们现在的生活水平提高了很多。', 'Bǐqǐ èrshí shìjì bāshí niándài, rénmen xiànzài de shēnghuó shuǐpíng tígāo le hěn duō.', 'So với thập niên 80, mức sống hiện nay nâng cao nhiều.'),
            ] },
          ],
        },
      ],
    },
    // ───────────────────────── 程度副词 ─────────────────────────
    {
      id: 'chengdu-fuci', hanzi: '形容词前后的程度词', pinyin: 'xíngróngcí qiánhòu de chéngdùcí', title: 'Từ chỉ mức độ trước và sau tính từ',
      intro: 'Trong câu "A 比 B + tính từ" không thể dùng phó từ mức độ thông thường như 很, 非常, 极… Nhưng có bốn từ: 还, 再, 更, 稍(微), 略(微) là ngoại lệ, và sau tính từ có thể có một số bổ ngữ mức độ.',
      groups: [{
        patterns: [
          { formula: 'A 比 B + 还/更/再/稍(微)/略(微) + 〈形〉  ;  A 比 B + 〈形〉 + 一点儿/一些/得多/多了/数量词', title: 'Từ chỉ mức độ trước và sau tính từ', note: '(1) "更" thường không đi với số lượng từ, ví dụ không nói "今天的气温比昨天还高2℃" với "更"; "还" thì được. (2) "再" biểu thị giả thiết. (3) "稍微/略微" thường đi cùng "一点儿/一些". (4) "多了/得多" không thể nói "得多了". (5) Khi tính từ là "差", "得多/多了" có thể đổi thành "远了/得远".', examples: [
            x('他的汉语发音比一些中国南方人[还]好得多。', 'Tā de Hànyǔ fāyīn bǐ yìxiē Zhōngguó nánfāngrén hái hǎo de duō.', 'Phát âm tiếng Hán của anh còn tốt hơn nhiều người miền Nam Trung Quốc.'),
            x('你的成绩(比别人)[再]好，你也不要骄傲。', 'Nǐ de chéngjì (bǐ biérén) zài hǎo, nǐ yě bú yào jiāo’ào.', 'Thành tích bạn có tốt hơn người khác thế nào cũng đừng kiêu ngạo.', '"再" biểu thị giả thiết.'),
            x('这部电影比那部[更]有意思。', 'Zhè bù diànyǐng bǐ nà bù gèng yǒu yìsi.', 'Bộ phim này thú vị hơn bộ kia.', '"更" thường không đi với số lượng từ.'),
            x('今天的气温比昨天[还]高2℃。', 'Jīntiān de qìwēn bǐ zuótiān hái gāo liǎng dù.', 'Nhiệt độ hôm nay còn cao hơn hôm qua 2℃.'),
            x('这件衣服比那件[稍微]贵[一点儿]。', 'Zhè jiàn yīfu bǐ nà jiàn shāowēi guì yìdiǎnr.', 'Bộ này đắt hơn bộ kia chút ít.'),
            x('这种方法比那种方法方便[多了]。', 'Zhè zhǒng fāngfǎ bǐ nà zhǒng fāngfǎ fāngbiàn duō le.', 'Cách này tiện hơn cách kia nhiều.', 'Không nói "得多了".'),
            x('他的汉语水平比我差[远了]。', 'Tā de Hànyǔ shuǐpíng bǐ wǒ chà yuǎn le.', 'Trình độ tiếng Hán của anh kém tôi xa.'),
            x('他今天比平时早起了[30分钟]。', 'Tā jīntiān bǐ píngshí zǎo qǐ le sānshí fēnzhōng.', 'Hôm nay anh dậy sớm hơn thường lệ 30 phút.'),
          ] },
        ],
      }],
    },
    // ───────────────────────── 像 vs 比喻 ─────────────────────────
    {
      id: 'xiang-biyu', hanzi: '像/如 与 比喻句', pinyin: 'xiàng/rú yǔ bǐyùjù', title: 'So sánh với 像/如 và câu ví von',
      intro: 'Câu có "像/如" có hai loại: câu so sánh (hai chủ thể cùng loại) và câu ví von (hai chủ thể khác loại nhưng có điểm tương đồng).',
      groups: [{
        patterns: [
          { formula: 'A 像/如 B + 那样 / 这样 / 这么 / 那么 + 〈形〉  ;  A 像 B 一样', title: '像 / 如: so sánh hay ví von', note: 'Câu so sánh: hai chủ thể trước và sau "像/如" cùng loại; thường dùng "像/如……那样". Câu ví von: hai chủ thể khác loại, nhưng có điểm giống nhau; thường dùng "像/如……一样". Điều quan trọng là hai bên khác loại hay cùng loại.', examples: [
            x('他有远大的理想，不想[像]普通人[那样]平凡地生活。', 'Tā yǒu yuǎndà de lǐxiǎng, bù xiǎng xiàng pǔtōng rén nàyàng píngfán de shēnghuó.', 'Anh có lý tưởng lớn, không muốn sống bình thường như người thường.', 'Câu so sánh: "他" và "普通人" cùng loại.'),
            x('两杯酒下肚，他的脸红得[像]熟透的苹果[一样]。', 'Liǎng bēi jiǔ xià dù, tā de liǎn hóng de xiàng shú tòu de píngguǒ yíyàng.', 'Hai ly rượu vào bụng, mặt anh đỏ như quả táo chín.', 'Câu ví von: "mặt" và "táo" khác loại.'),
          ] },
          { formula: 'A 跟(同/和/与) B + 〈动〉 + 得 + 那么/这么/怎么 + 〈形〉/〈动〉', title: 'Dạng "跟 … 得 那么 …"', note: 'Về nghiêm ngặt, hình thức này không phải câu so sánh, chỉ là bổ ngữ mức độ. Nên khi phủ định, phải đặt "不/没" trước "这么 (那么)".', examples: [
            x('他跟爸爸长得那么像。→ 他跟爸爸长得[不]那么像。', 'Tā gēn bàba zhǎng de nàme xiàng.', 'Anh giống bố thế.'),
            x('我和他聊得那么开心，不过和姐姐聊天倒很愉快。→ 我和他聊得[没]那么开心。', 'Wǒ hé tā liáo de nàme kāixīn.', 'Tôi và anh trò chuyện vui thế.'),
          ] },
        ],
      }],
    },
  ],

  boards: [
    {
      id: 'bi-board', hanzi: '比较句的常用结构', title: 'Cấu trúc thường dùng của câu so sánh',
      rows: [
        { label: 'Cấu trúc', formulas: ['A + 比 + B + 形/动 (biểu thị chênh lệch)'], text: 'Trong cấu trúc này, động từ có đặc điểm: ① Động từ hoạt động tâm lý (喜欢, 想念, 了解, 熟悉…). ② Động từ biểu thị tăng giảm (增加, 减少, 提高, 降低, 涨…). ③ 多/少/早/晚 + 动 (trạng ngữ trước động từ có nghĩa kết quả so sánh).', examples: [e('我的女朋友比我还喜欢足球。', 'Bạn gái tôi còn thích bóng đá hơn tôi.'), e('他的成绩比上次提高了一些。', 'Thành tích của anh nâng cao hơn lần trước một chút.'), e('现在这种商品的价格比以前涨了一倍还多。', 'Giá mặt hàng này nay tăng hơn gấp đôi so với trước.'), e('他比其他同龄人多读了不少书。', 'Anh đọc nhiều sách hơn các bạn cùng tuổi.')] },
        { label: 'Điểm thi 1: A và B', text: '① A, B là danh từ hoặc đại từ. ② A, B có phần giống nhau thì có thể lược phần đó ở B. (Khi danh từ cụ thể + "的", "的" phải giữ lại; khi danh từ trừu tượng, "的" có thể lược.)', examples: [e('他的房间比我的(房间)大。', 'Phòng anh to hơn phòng tôi.'), e('今天的气温比昨天的(气温)高。', 'Nhiệt độ hôm nay cao hơn hôm qua.'), e('北京秋天的天气比北京春天的天气好多了。', 'Thời tiết mùa thu Bắc Kinh tốt hơn mùa xuân Bắc Kinh nhiều.'), e('他今天来得比他昨天来得早。', 'Hôm nay anh đến sớm hơn hôm qua.')],
          points: [{ text: 'Điểm thi: "更" thường chỉ mức độ, không đi cùng số lượng từ; muốn nói "hơn gấp đôi" thì dùng "还" hoặc bỏ phó từ.', fixes: [{ wrong: '2002年的木浆进口量比1998年翻了一番更多', right: '2002年的木浆进口量比1998年翻了一番还多', ref: 'Kiểm tra 1 · D' }, { wrong: '有什么比亲情很可贵的呢', right: '有什么比亲情更(/还)可贵的呢', why: 'Trước tính từ trong câu so sánh không dùng "很"; dùng "更/还".', ref: 'Kiểm tra 2 · B' }] }] },
        { label: 'Điểm thi 2: phó từ mức độ', text: 'Trong A + 比 + B + 形: trước tính từ chỉ dùng được 还, 再, 更, 稍(微), 略(微); sau tính từ có thể dùng 一点儿, 一些, 得多, 多了, 数量词. 更 không nói số lượng, 还 thì được. 稍微/略微 hay dùng với 一点儿/一些. 再 biểu thị giả thiết.', examples: [e('他的汉语发音比一些中国南方人还好得多。', 'Phát âm tiếng Hán của anh còn tốt hơn nhiều người miền Nam Trung Quốc.'), e('你的成绩(比别人)再好，你也不要骄傲。', 'Dù thành tích bạn tốt hơn người khác cũng đừng kiêu ngạo.'), e('这部电影比那部更有意思。', 'Phim này hay hơn phim kia.'), e('这件衣服比那件稍微贵一点儿。', 'Bộ này đắt hơn bộ kia chút ít.'), e('这种方法比那种方法方便多了。', 'Cách này tiện hơn nhiều.'), e('他今天比平时早起了30分钟。', 'Hôm nay anh dậy sớm hơn thường lệ 30 phút.')] },
      ],
    },
    {
      id: 'bi-fouding', hanzi: '比较句的否定', title: 'Phủ định của câu so sánh',
      rows: [
        { label: 'Ba dạng', text: 'A 没有 B + 形 (A < B, nghiêng về tích cực). A 不如 B (+ 形) (A < B). A 不比 B + 形 (A ≈ B). "没有" và "不如" thường so sánh mặt tích cực, tính từ không thể mang nghĩa tiêu cực. "不比" có nghĩa "gần như nhau", nên tính từ tích cực, tiêu cực đều được.', examples: [e('他的水平没有你高。', 'Trình độ anh không cao bằng bạn.'), e('这件衣服的质量不如那件(好)。', 'Chất lượng bộ này không bằng bộ kia.'), e('弟弟不比哥哥矮(/高)。', 'Em không thấp (/cao) hơn anh.')] },
        { label: 'Điểm thi', text: 'Từ đi cùng dạng phủ định: A + 没有 + B + (这样/那样/这么/那么) + 形. A + (还) 不如 + B + (形). A + (也) 不比 + B + (形) + 多少. Chú ý: trong so sánh, phó từ mức độ (还/更…) đặt trước tính từ hoặc động từ, nhưng trong dạng phủ định thường không dùng phó từ mức độ; nếu dùng cũng chỉ đặt trước "没有/不如".', examples: [e('首尔的夏天没有北京这么热。', 'Mùa hè Seoul không nóng như Bắc Kinh.'), e('他说汉语说得还不如我呢。', 'Anh nói tiếng Hán còn không bằng tôi.'), e('我对北京的了解也不比你多多少。', 'Tôi hiểu về Bắc Kinh cũng không nhiều hơn bạn bao nhiêu.'), e('他的个子比我还高。→ 他的个子还没有我高。', 'Anh còn cao hơn tôi. → Anh còn không cao bằng tôi.')] },
      ],
    },
    {
      id: 'bi-qita', hanzi: '比较句的其他形式', title: 'Các hình thức khác của câu so sánh',
      rows: [
        { label: '1. 一天比一天', formulas: ['一天比一天 / 一年比一年 / 一个比一个 + 形'], examples: [e('他的汉语一天比一天进步。', 'Tiếng Hán của anh tiến bộ từng ngày.'), e('人们的生活一年比一年好。', 'Cuộc sống người dân năm sau tốt hơn năm trước.'), e('这些苹果一个比一个大。', 'Những quả táo này quả sau to hơn quả trước.')] },
        { label: '2. 越来越', text: '越来越 + 形/动 (không dùng với động từ, tính từ biểu thị thay đổi như 改变, 增加, 提高, 降低; tính từ + 起来).', examples: [e('他的汉语越来越好。', 'Tiếng Hán của anh ngày càng tốt.'), e('天气越来越热。', 'Thời tiết ngày càng nóng.')],
          points: [{ text: 'Điểm thi: "越来越" không đi cùng động từ, tính từ biểu thị thay đổi, và phía sau không dùng phó từ mức độ như "更", "很".', fixes: [{ wrong: '国家越经济发达', right: '国家经济越发达', ref: 'Kiểm tra 6 · C' }, { wrong: '受到的威胁越来越很大', right: '受到的威胁越来越大', ref: 'Đề mô phỏng 9 · B' }, { wrong: '我们享受生活的机会也越来越减少', right: '我们享受生活的机会也越来越少', ref: 'Đề mô phỏng 10 · B' }] }] },
        { label: '3. A 越……越……', examples: [e('他越说越高兴，竟手舞足蹈起来。', 'Anh càng nói càng vui, thậm chí múa may.'), e('他越说，我越生气。', 'Anh càng nói tôi càng tức.')] },
        { label: '4. 有/没有, 像/不像', formulas: ['A + 有/没有 + B + (这么/那么/这样/那样) + 形', 'A + (不)像 + B + 这么/那么/这样/那样 + 形'], text: '"有" phủ định là "没有", "像" phủ định là "不像". Trong câu "有", "这么/那么/这样/那样" trước tính từ có thể lược; trong câu "像" thì không thể lược.', examples: [e('我没有哥哥(那么/那样)高。', 'Tôi không cao bằng anh.'), e('我不像哥哥那么(/那样)高。', 'Tôi không cao như anh.')] },
        { label: '5. 像 và 比喻', text: 'Phân biệt câu so sánh và câu ví von: Câu so sánh: hai chủ thể trước và sau "像/如" cùng loại, thường dùng "像/如……那样". Câu ví von: hai chủ thể khác loại nhưng có điểm giống nhau; thường dùng "像/如……一样".', examples: [e('他有远大的理想，不想像普通人那样平凡地生活。', 'Anh có lý tưởng lớn, không muốn sống bình thường như người thường.', 'So sánh.'), e('两杯酒下肚，他的脸红得像熟透的苹果一样。', 'Hai ly rượu vào bụng, mặt anh đỏ như quả táo chín.', 'Ví von.')],
          points: [{ text: 'Điểm thi: "正如一位哲人所说的一样" — "正如……所说的那样"; "像……一样" so sánh vật khác loại, còn ở đây là cùng loại nên dùng "那样". "不像以前爱她了" cần "那样".', fixes: [{ wrong: '正如一位哲人所说的一样', right: '正如一位哲人所说的那样', ref: 'Kiểm tra 3 · C' }, { wrong: '觉得我不像以前爱她了', right: '觉得我不像以前那样爱她了', ref: 'Kiểm tra 4 · C' }] }] },
        { label: '6. 跟……一样', text: 'A 跟 (同/和/与) B 一样. Phủ định: A 跟 B 不一样. Có thể mở rộng: 差不多/几乎一样/完全一样/相同/相等/相似.', examples: [e('中国有很多风俗习惯和我们国家一样。', 'Trung Quốc có nhiều phong tục giống nước chúng tôi.'), e('这幅画与那幅画几乎一样。', 'Bức tranh này gần giống bức kia.')] },
        { label: '7. Hình thức cố định', text: '① A……于 B. ② A……过 B. ③ A……似 B. ④ A 与 (/跟/同/和) B 比起来 (/相比), A 比起 B (来). Trong ④, A cũng có thể đặt sau, thống nhất so sánh kết quả, làm chủ ngữ. Trong cấu trúc này A thường là cụm dài.', examples: [e('西部地区的经济发展水平落后于东部地区。', 'Trình độ phát triển kinh tế vùng Tây kém hơn vùng Đông.'), e('他写的散文胜过小说。', 'Văn xuôi anh viết hay hơn tiểu thuyết.'), e('我们不是亲人，感情却胜似亲人。', 'Chúng tôi không phải ruột thịt, tình cảm hơn cả ruột thịt.'), e('比起20世纪80年代，人们现在的生活水平提高了很多。', 'So với thập niên 80, mức sống hiện nay nâng cao nhiều.')],
          points: [{ text: 'Điểm thi: "汤的营养比肉丰富" ngụ ý hơn; sách sửa: "汤比肉的营养丰富" hoặc "和肉相比，汤的营养更丰富".', fixes: [{ wrong: '汤相比肉的营养丰富', right: '汤比肉的营养丰富 (hoặc: 和肉相比，汤的营养更丰富)', ref: 'Kiểm tra 5 · C' }] }] },
      ],
    },
  ],

  test: [
    seg(['自1993年以来，中国木浆、纸和纸板的进口量持续增长，', '进口量仅次于石油和钢材，', '2002年的木浆进口量比1998年', '翻了一番更多。'], 3, 'Phó từ mức độ sau 比',
      '2002年的木浆进口量比1998年翻了一番还多', '"更" thường chỉ mức độ, không đi cùng số lượng từ; muốn nói số lượng phải dùng "还".'),
    seg(['如果知道自己错了，就尽力去弥补吧，', '有什么比亲情很可贵的呢？', '是你先开口还是爸爸先开口，', '又有什么关系呢？'], 1, 'Phó từ mức độ trong câu 比',
      '有什么比亲情更(/还)可贵的呢', 'Trước tính từ trong câu so sánh không thể dùng "很"; chỉ dùng "更/还".'),
    seg(['通过上郑老师的课，我看到了自己的很多不足，', '正如一位哲人所说的一样：', '所学的东西越多，', '接触到的未知东西就越多。'], 1, 'Chính như ... nói',
      '正如一位哲人所说的那样', '"正如……所说的那样" là cấu trúc cố định; "一样" dùng khi so sánh/ví von hai vật khác loại.'),
    seg(['每次我发完脾气，', '她都一个人哭，', '觉得我不像以前爱她了。', '其实，她哭的时候我也很难受。'], 2, 'Thiếu "那样"',
      '觉得我不像以前那样爱她了', '"像" phía trước là "我", phía sau "以前(的我)" cùng loại, là câu so sánh; phải thêm "那样".'),
    seg(['鸡肉与鸡汤哪个营养价值高？', '这是一个很多人都提过的问题。', '有人认为，汤相比肉的营养丰富，', '为了滋补就只喝汤不吃肉。'], 2, 'Cấu trúc 相比',
      '汤比肉的营养丰富 (hoặc: 和肉相比，汤的营养更丰富)', 'Trong cấu trúc "A 与 B 相比" thì A không thể trực tiếp nối với 的营养丰富; phải dùng "和肉相比".'),
    seg(['世界卫生组织顾问亚瑟博士发现：', '精神疾病有个怪特点——', '国家越经济发达，', '精神疾病的负担就越重。'], 2, 'Vị trí của 越',
      '国家经济越发达', '"越" phải đặt ngay trước tính từ/động từ; phải là "国家经济越发达".'),
  ],

  exam: [
    sen(['人世间所有的荣华富贵都不如一个好朋友重要。', '他虽然才19岁，但比同龄人，他更显成熟、稳重。', '天生的才干如同天生的植物一样，需要靠学习来修剪。', '19日是父亲节，香港不少子女以各种方式为父亲庆祝节日，茶楼生意较平日火爆。'], 1, 'Cố định "比起……来"',
      '比起同龄人来，他更显成熟、稳重', 'Cấu trúc phải là "比起……来" hoặc "跟/和/同……相比/比起来".'),
    sen(['他从这部电影比上一部电影精彩多了。', '也许，在这个世界上，再也没有比它更大的坟墓了。', '你来这儿工作，至少可以积累一些管理方面的经验，总比在学校好。', '文学的衰落表明一个民族的衰落，这两者走下坡路的时候是不分先后的。'], 2, 'Phó từ trước tính từ',
      '总比在学校强 (hoặc bỏ "比较")', 'Trong câu so sánh, trước tính từ không thể dùng phó từ mức độ "比较". Sửa: "总比在学校好".'),
    sen(['大多数生意人认为自己比一般生意人更道德。', '有时候，一个人做事比三个人一起做一件事情做起来十分容易。', '蜻蜓还能像直升机那样拍打着翅膀一动不动地停留在空中。', '据调查，产生心理问题时，选择求医的男性比例明显小于女性。'], 1, 'Phó từ "十分" trong câu 比',
      '一个人做事比三个人一起做一件事情更容易', 'Trong câu so sánh, trước tính từ không thể dùng "十分"; thay bằng "更".'),
    sen(['最近这些年城市里过年的气氛没有农村那么热闹。', '据统计，长期饮酒的人比不饮酒的人平均寿命要短15年左右。', '卡明斯基花了七年时间了解中国的富人，声称：中国的超级富豪不同其他地方的富人。', '正像我们无权只享受财富而不创造财富一样，我们也无权只享受幸福而不创造幸福。'], 2, 'Cấu trúc "不同于" / "与……不同"',
      '中国的超级富豪不同于其他地方的富人', '"不同" sau không trực tiếp mang tân ngữ; dùng "与/和/跟……不同" hoặc "不同于".'),
    sen(['呼伦贝尔市总面积26.3万平方公里，相当于山东与江苏两省面积之和。', '荀慧生是京剧四大名旦之一，他功底深厚，有自己独特的艺术风格，是"荀派"艺术的创始人。', '火星与地球相比，有许多相似的地方，火星上既有春夏秋冬四季的变化，也有白天和黑夜的交替。', '对像我一般的年轻人来讲，从农民到城市居民的这一身份转变，虽已没有了制度障碍，但高房价又使我们的进城之路困难了许多。'], 3, 'Câu so sánh "像……一般"',
      '对和我一样的年轻人来讲 (hoặc: 对像我那样的年轻人来讲)', '"像……一般" biểu thị ví von; câu này cần so sánh, nên dùng "和……一样" hoặc "像……那样".'),
    sen(['臭氧层好比是地球的"保护伞"，它阻挡了99%的紫外线辐射，保护着地球上的生物。', '人生就像一个舞台，我不在乎这个舞台有多华丽，只在乎为观众带来了多少欢乐。', '大部分人觉得自己比周围的普通人更聪明、更英俊、更没有偏见。当有人超过自己时，人们则倾向于把对方看成天才。', '巧克力品尝师是个令人向往的工作。他们的工作告诉我们，没有什么精密仪器比我们的舌头对巧克力的味道更敏感了。'], 2, '比……更 / 与……相比',
      '大部分人觉得自己已比周围的普通人更聪明 (hoặc: 与周围的普通人相比更聪明)', '"比……更" hoặc "与……相比" chỉ dùng một trong hai, không trộn lẫn.'),
    sen(['大多数外科医生认为自己患者的死亡率要低于平均水平。', '中华武术流传了几千年，绘画、戏曲、诗歌一样，是中国文化的重要组成部分。', '大约在公元11世纪宋朝的时候，人们开始玩一种叫做"蹴鞠"的游戏，它很像现代的足球。', '天上飘着几朵白云，这些云好像高原上一群群洁白的羊群，在肥美的草地上跳动。'], 1, 'Thiếu giới từ so sánh',
      '中华武术流传了几千年，和绘画、戏曲、诗歌一样', 'Thiếu giới từ biểu thị so sánh (和/跟/与).'),
    sen(['科学家发现，将土豆整个烹煮比切块烹煮能多保留50%的钾元素。', '地球直径目前为1.2756274万公里，跟5年前测量时短了5毫米。', '环境和教育是成功的重要因素，但自身的努力更是不可缺少的条件。', '我觉得从工作中学到的知识，有时候比从书本中学到的还有用。'], 1, 'Giới từ so sánh hai thời điểm',
      '比5年前测量时短了5毫米', 'So sánh sự chênh lệch giữa hai điểm thời gian dùng "比", không dùng "跟".'),
    sen(['只要你平时注意多收集一些资料，写作时就不会没话可说。', '手机也和电脑一样，成了病毒攻击的对象，而且受到的威胁越来越很大。', '许多国家的人口统计显示，女性的平均寿命通常要比男性长5至10年。', '玫瑰喜阳、耐旱、耐涝，也能耐寒冷，大多露地栽植的花卉都比不过它。'], 1, 'Phó từ trong 越来越',
      '受到的威胁越来越大', 'Sau "越来越" không dùng phó từ mức độ như "很".'),
    sen(['我那时好像，根本没有想到要发表，也从没想过将来要成为一个作家。', '随着生活节奏的加快和工作压力的加大，我们享受生活的机会也越来越减少，享受亲情似乎成为一件奢侈的事情。', '相比两个月前，他的身体状况有了很大的改善，他对自己这段时间的恢复情况还是十分满意的。', '长江长达6300千米，仅次于非洲的尼罗河和南美洲的亚马逊河，居世界第三位，是中国的第一大河。'], 1, '越来越 + động từ thay đổi',
      '我们享受生活的机会也越来越少', 'Sau "越来越" động từ, tính từ biểu thị thay đổi (减少, 降低, 提高, 增加, 发展, 变化) không dùng được.'),
    sen(['子女们要关心老人健康，多陪父母聊天比送任何营养品都有效。', '越来越多的人开始尝试租车，特别是一线城市，租车公司的业务量明显增大了。', '在"桑拿天"里，虽然气温比往常，但空气湿度很大，人体大量汗液难以排出，体内热量散发不畅，极易导致中暑。', '我想揭示大自然的秘密，用来造福人类。我认为，在我们短暂的一生中，最好的贡献莫过于此了。'], 2, 'Cấu trúc A 比 B + 形',
      '虽然气温比往常高 / 气温比往常更高', 'Câu so sánh thiếu thành phần: "A 比 B + 形", cần có tính từ.'),
    sen(['A 如果孩子无法像成年人一样思考，父母不妨让孩子按自己的想法尝试一下，等到结果出乎孩子预料的时候，孩子就会反省自己的行为了。', '七夕节是一个极具浪漫色彩的节日，也是古代女子们最为重视的日子，是中国传统的情人节。', '唐太宗李世民认识到人民是国家的根本，他说，君王好比是舟，人民好比是水，水能载舟，也能覆舟。', '如果孩子无法好像成年人一样思考，父母不妨让孩子按自己的想法尝试一下，等到结果出乎孩子预料的时候，孩子就会反省自己的行为了。'], 3, '好像……一样',
      '如果孩子无法像成年人那样思考', '"好像……一样" biểu thị ví von; ở đây là câu so sánh nên dùng "和……一样" hoặc "像……这样/那样".'),
    sen(['网络传播能够得到迅猛发展，主要是由其不同于传统媒体的优势特点决定的。', '有人认为是日新月异的现代医学促使人类个子增高，婴儿一代比一代长得高。', '蓝色钻石是彩色钻石的一种。天然蓝色钻石十分罕见，价值也较白色钻石相当高，由于价格昂贵且十分稀有，大部分被珠宝商或收藏家所典藏。', '许多能力很强的人，因过于追求完美，事必躬亲，最后只能做最好的公关人员、销售代表，成不了优秀的领导。'], 2, 'Phó từ mức độ trước tính từ',
      '价值也较白色钻石(更)高', 'Trong câu so sánh, trước tính từ không thể dùng "相当", nên bỏ đi, dùng "更".'),
    sen(['最近有科学家认为，狗比猫聪明，因为前者需要处理更复杂的社会交往问题。', '我们中的大多数人都认为我们比别人更了解他人。我们也认为比起别人来，我们更了解自己。', '风能发电可以减少二氧化碳排放，减缓气候变化，也不产生其他化石燃料和核能会产生的污染物，因此越来越更受到人们的重视。目前风能是在中国最受关注的可再生能源之一。', '我们都明白，价格贵的东西并不一定比便宜的东西质量更好。但是，在内心深处，价格却影响着我们的感觉。'], 2, '越来越 + 更',
      '因此越来越受到人们的重视', 'Sau "越来越" không dùng "更", bỏ "更".'),
    sen(['像俗话说的那样，"养儿方知父母恩"，等到我有了女儿，我终于读懂了我的母亲。', '思想的表达和信息的相互交流，使得人类的思想认识水平不断提高。这种思想表达和信息交流的范围越广，涉及的领域越多，则人类的思想认识水平就越提高。', '科学家发现，像狗这样友好的、社会性的动物会比猫那样喜欢独处的动物进化出更大的大脑，即脑容量更大。', '法国文学家雨果说过：世界上最宽阔的是海洋，比海洋更宽阔的是天空，比天空还要宽阔的是人的心灵。心理学就是研究人的心灵的科学。'], 1, '越……越 + động từ thay đổi',
      '则人类的思想认识水平就越高', 'Trong cấu trúc "越……越……", từ thứ hai không thể là động từ biểu thị thay đổi như "提高"; phải dùng "高".'),
  ],
}
