import type { DayContent, Ex, ErrQ } from './types'

/**
 * Tuần 1 · Thứ Năm: Trạng ngữ, định ngữ, lượng từ thường dùng (状语 定语 常用量词), sách trang 46–59.
 * Phần dịch tiếng Việt và pinyin do app tự thêm.
 */

const x = (h: string, p: string, vi: string, note?: string, tag?: string): Ex => ({ h, p, vi, note, tag })
const seg = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'segment', parts, answer, topic, fix, why })
const sen = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'sentence', parts, answer, topic, fix, why })

export const day4: DayContent = {
  intro:
    '"我够吃了" và "我吃够了" có giống nhau không? "她一直到12点都在学习" và "她一直学到12点" khác nhau ở đâu? Học xong bổ ngữ, nhiều bạn hay hỏi: vì sao phần đứng sau tính từ hoặc động từ làm bổ ngữ, có lúc lại đứng được ở phía trước? Đó chính là vấn đề phân biệt trạng ngữ và bổ ngữ, và đề HSK cũng hay ra dạng này. Trạng ngữ và định ngữ trong ngữ pháp đều gọi là thành phần tu sức, đều dùng để miêu tả, nói rõ trung tâm ngữ ở phía sau. Qua bài hôm nay, bạn sẽ biết cách biến một câu rất dài thành một câu ngắn, tức là tìm nhanh phần lõi của câu. Điều này vừa giúp thi tốt vừa nâng trình độ tiếng Hán. Ngoài ra, hôm qua đã học vài động lượng từ, hôm nay bổ sung các danh lượng từ thường dùng và quy tắc biểu đạt số lượng trong tiếng Hán.',

  focusTitle: 'Ba phần học hôm nay',
  anatomyTitle: 'Tìm trục câu: ai làm gì?',
  anatomyLead: 'Việc đầu tiên là tìm trung tâm của câu (chủ ngữ, vị ngữ, tân ngữ), rồi xem định ngữ, trạng ngữ, bổ ngữ bám vào đâu. Sách khuyên dùng bút màu gạch dưới phần trục câu. Làm quen được thì câu dài đến đâu cũng thành câu ngắn.',
  anatomy: [
    { label: 'Định ngữ: bổ nghĩa cho chủ ngữ "我"', chunks: [['刚来中国的', '定'], ['我', '主'], ['对一切都', '状'], ['感到', '谓'], ['很新鲜', '宾']] },
    { label: 'Trạng ngữ: bổ nghĩa cho vị ngữ (thời gian xảy ra)', chunks: [['刚来中国时，', '状'], ['我', '主'], ['对一切都', '状'], ['感到', '谓'], ['很新鲜', '宾']] },
    { label: 'Trạng ngữ đứng trước vị ngữ: việc sắp làm, đang làm', chunks: [['他', '主'], ['高兴地', '状'], ['告诉', '谓'], ['我', '宾'], ['这个好消息', '宾']] },
    { label: 'Bổ ngữ đứng sau vị ngữ: tình trạng sau động tác', chunks: [['他', '主'], ['听到这个好消息，', '状'], ['高兴', '谓'], ['得手舞足蹈', '补']] },
    { label: 'Câu dài: tìm ra "世界各国 … 关注 … 发展"', chunks: [['世界各国', '主'], ['都十分', '状'], ['关注', '谓'], ['中国的', '定'], ['发展', '宾']] },
  ],

  cheat: {
    title: 'Bảng tra nhanh: định ngữ, trạng ngữ, bổ ngữ',
    lead: 'Cả ngày hôm nay xoay quanh một câu hỏi: phần này bám vào đâu? Nhìn vị trí và dấu hiệu 的 / 地 / 得 là phân biệt được. Trạng ngữ nói việc sắp, đang, chưa làm; bổ ngữ nói điều đã xong.',
    head: ['Thành phần', 'Vị trí và dấu hiệu', 'Diễn tả gì · ví dụ'],
    rows: [
      { key: '定语', cells: ['Đứng trước chủ ngữ hoặc tân ngữ · thường có 的', 'Miêu tả, giới hạn danh từ. 世界各国都十分关注中国的发展。'] },
      { key: '状语', cells: ['Đứng trước vị ngữ · thường có 地', 'Cách làm, thời gian, nơi chốn; hay chỉ việc sắp, đang, chưa làm. 他高兴地告诉我这个好消息。'] },
      { key: '补语', cells: ['Đứng sau vị ngữ · thường có 得', 'Kết quả, mức độ, tình trạng sau động tác; hay chỉ việc đã xong. 他听到这个好消息，高兴得手舞足蹈。'] },
    ],
  },

  sections: [
    // ───────────────────────── 状语 ─────────────────────────
    {
      id: 'zhuangyu', hanzi: '状语', pinyin: 'zhuàngyǔ', title: 'Trạng ngữ',
      intro: 'Trạng ngữ đứng trước vị ngữ, mô tả hoặc nói rõ động tác. Sách dặn: hãy dùng bút màu gạch ra trung tâm ngữ, tức là trục của câu, trước khi đọc ví dụ. Dưới đây là 10 ý nghĩa của trạng ngữ và bảng quy tắc khi nào dùng 地.',
      table: {
        head: ['Loại từ làm trạng ngữ', 'Không dùng 地', 'Dùng 地'],
        rows: [
          ['Phó từ', '单音节副词、大部分双音节副词: 常来、特漂亮、偏要去、刚刚走、曾经去过、时刻想念、早来、完全明白', '少数双音节副词 (勉强, 故意, 迅速, 特别, 非常) khi nhấn mạnh: 勉强(地)同意、非常(地)喜欢'],
          ['Tính từ', '一般形容词: 多吃、少喝酒、晚下班、正式出版', 'Tính từ láy, tính từ bốn chữ, tính từ chỉ mức độ, tính từ miêu tả: 静静地坐着、很生气地说、兴高采烈地出发、耐心地讲解'],
          ['Cụm giới từ', '介词短语: 往前走、为孩子辛苦、比我好', 'Cụm so sánh "像……一样", "如……一般", "……似的", "好似": 像孩子一样(地)笑了、发疯般(地)叫着'],
          ['Số lượng từ', '数量词: 一把拉住、一眼看到', 'Số lượng từ lặp lại: 一本一本地看、两个两个地数'],
          ['Danh từ', '时间名词: 现在进行、刚才走了', 'Danh từ (bắt buộc phải mang tính chất của tính từ, nếu không không làm trạng ngữ được): 科学地计划、理性地分析、习惯性地点头'],
          ['Cụm động từ', '—', '动词短语: 说说笑笑地走着、一闪一闪地亮着、打扮得漂漂亮亮地参加晚会'],
        ],
      },
      groups: [{
        title: 'Mười ý nghĩa của trạng ngữ',
        patterns: [
          {
            formula: '〈状〉 + 〈谓〉', title: '① Thời gian, tần suất',
            note: 'Danh từ thời gian, phó từ hoặc cụm giới từ làm trạng ngữ.',
            examples: [
              x('我[明年]回国。', 'Wǒ míngnián huíguó.', 'Sang năm tôi về nước.'),
              x('他[常常]去旅行。', 'Tā chángcháng qù lǚxíng.', 'Anh ấy thường đi du lịch.'),
              x('我[在两个小时内]完成了作业。', 'Wǒ zài liǎng ge xiǎoshí nèi wánchéng le zuòyè.', 'Tôi hoàn thành bài tập trong hai tiếng.'),
            ],
          },
          {
            formula: '〈状〉 + 〈谓〉', title: '② Nơi chốn, phương hướng',
            note: 'Cụm giới từ làm trạng ngữ.',
            examples: [
              x('他[在图书馆]看书呢。', 'Tā zài túshūguǎn kàn shū ne.', 'Anh ấy đang đọc sách ở thư viện.'),
              x('他[顺着这条路往北]走了。', 'Tā shùnzhe zhè tiáo lù wǎng běi zǒu le.', 'Anh ấy men theo con đường này đi về phía bắc.'),
            ],
          },
          {
            formula: '〈状〉 + 〈谓〉', title: '③ Trạng thái, cách thức',
            note: 'Phó từ, tính từ, cụm động từ hoặc từ bốn chữ làm trạng ngữ.',
            examples: [
              x('他[认真地]看着书。', 'Tā rènzhēn de kànzhe shū.', 'Anh ấy chăm chú đọc sách.'),
              x('孩子[一蹦一跳地]跑过来。', 'Háizi yí bèng yí tiào de pǎo guòlái.', 'Đứa bé vừa nhảy vừa chạy lại.'),
              x('我们[恋恋不舍地]离开了。', 'Wǒmen liànliàn-bùshě de líkāi le.', 'Chúng tôi lưu luyến rời đi.'),
              x('很多中国人[骑自行车]上下班。', 'Hěn duō Zhōngguó rén qí zìxíngchē shàng-xiàbān.', 'Rất nhiều người Trung Quốc đi làm bằng xe đạp.'),
            ],
          },
          {
            formula: '〈状〉 + 〈谓〉', title: '④ Đối tượng, mục đích',
            note: 'Cụm giới từ làm trạng ngữ.',
            examples: [
              x('他[对中国历史文化]很感兴趣。', 'Tā duì Zhōngguó lìshǐ wénhuà hěn gǎn xìngqù.', 'Anh ấy rất hứng thú với lịch sử và văn hóa Trung Quốc.'),
              x('[为了学好汉语]，我来到中国。', 'Wèile xuéhǎo Hànyǔ, wǒ láidào Zhōngguó.', 'Để học tốt tiếng Hán, tôi đã đến Trung Quốc.'),
            ],
          },
          {
            formula: '〈状〉 + 〈谓〉', title: '⑤ Số lượng',
            note: 'Phó từ hoặc số lượng từ làm trạng ngữ.',
            examples: [
              x('老师[至少]讲过三遍。', 'Lǎoshī zhìshǎo jiǎng guo sān biàn.', 'Thầy giảng ít nhất ba lượt.'),
              x('他[屡次]打破世界纪录。', 'Tā lǚcì dǎpò shìjiè jìlù.', 'Anh ấy nhiều lần phá kỷ lục thế giới.'),
              x('他[一巴掌]打在儿子屁股上。', 'Tā yì bāzhang dǎ zài érzi pìgu shang.', 'Anh ấy tát một cái vào mông con trai.'),
            ],
          },
          {
            formula: '〈状〉 + 〈谓〉', title: '⑥ Phạm vi',
            note: 'Phó từ làm trạng ngữ.',
            examples: [
              x('我们班同学[都]参加新HSK考试。', 'Wǒmen bān tóngxué dōu cānjiā xīn HSK kǎoshì.', 'Bạn học lớp chúng tôi đều thi HSK mới.'),
              x('在这几个城市中，他[就]去过北京。', 'Zài zhè jǐ ge chéngshì zhōng, tā jiù qù guo Běijīng.', 'Trong mấy thành phố này, anh ấy chỉ từng đến Bắc Kinh.'),
              x('把不愉快的事[统统]忘掉吧。', 'Bǎ bù yúkuài de shì tǒngtǒng wàngdiào ba.', 'Quên hết mọi chuyện không vui đi.'),
            ],
          },
          {
            formula: '〈状〉 + 〈谓〉', title: '⑦ Lặp lại',
            note: 'Phó từ làm trạng ngữ.',
            examples: [
              x('你[再]复习复习语法。', 'Nǐ zài fùxí fùxí yǔfǎ.', 'Bạn ôn lại ngữ pháp thêm lần nữa đi.'),
              x('我[重新]选择了专业。', 'Wǒ chóngxīn xuǎnzé le zhuānyè.', 'Tôi chọn lại chuyên ngành.'),
            ],
          },
          {
            formula: '〈状〉 + 〈谓〉', title: '⑧ Mức độ',
            note: 'Phó từ làm trạng ngữ.',
            examples: [
              x('汉语[很]有意思。', 'Hànyǔ hěn yǒu yìsi.', 'Tiếng Hán rất thú vị.'),
              x('今天[稍微]暖和一点儿了。', 'Jīntiān shāowēi nuǎnhuo yìdiǎnr le.', 'Hôm nay ấm hơn một chút rồi.'),
            ],
          },
          {
            formula: '〈状〉 + 〈谓〉', title: '⑨ Phủ định',
            note: 'Phó từ làm trạng ngữ.',
            examples: [
              x('我[不]认识他。', 'Wǒ bú rènshi tā.', 'Tôi không quen anh ấy.'),
              x('他[没]骗我们。', 'Tā méi piàn wǒmen.', 'Anh ấy không lừa chúng tôi.'),
              x('我[从未]喜欢过他。', 'Wǒ cóngwèi xǐhuan guo tā.', 'Tôi chưa từng thích anh ấy.'),
            ],
          },
          {
            formula: '〈状〉 + 〈谓〉', title: '⑩ Ngữ khí',
            note: 'Phó từ làm trạng ngữ: nhấn mạnh, ước đoán, khẳng định.',
            examples: [
              x('他[偏]要去。', 'Tā piān yào qù.', 'Anh ấy cứ khăng khăng muốn đi.', undefined, 'nhấn mạnh'),
              x('我们[恐怕]去不了了。', 'Wǒmen kǒngpà qù bu liǎo le.', 'Chúng tôi e là không đi được rồi.', undefined, 'ước đoán'),
              x('不愿付出汗水的人[必定]失败。', 'Bú yuàn fùchū hànshuǐ de rén bìdìng shībài.', 'Người không chịu đổ mồ hôi chắc chắn thất bại.', undefined, 'khẳng định'),
            ],
          },
        ],
      }],
    },

    // ───────────────────────── 定语 ─────────────────────────
    {
      id: 'dingyu', hanzi: '定语', pinyin: 'dìngyǔ', title: 'Định ngữ',
      intro: 'Định ngữ bổ nghĩa cho chủ ngữ hoặc tân ngữ. Bảng dưới trả lời câu hỏi muôn thuở: khi nào cần 的, khi nào không.',
      table: {
        head: ['Điều kiện', 'Không cần 的', 'Cần 的'],
        rows: [
          ['Họ hàng', '代词 + 亲属 (đại từ + từ chỉ họ hàng): 我妈妈、你叔叔', 'Định ngữ không phải đại từ, hoặc phía sau không phải họ hàng: 小王的妈妈、他的汽车'],
          ['Tập thể', '复数代词 + 集体名词 (người / đơn vị): 我们老师、他们公司', 'Định ngữ không phải đại từ số nhiều, hoặc phía sau không phải danh từ tập thể: 他的老师、我们的成绩'],
          ['Tính từ', '单音节形容词 + 名词: 白衬衫、新书包', 'Định ngữ không phải tính từ đơn âm: 红红的脸、雪白的衬衫、很新的书包、热乎乎的饭菜、名副其实的画家'],
          ['Động từ', '—', 'Định ngữ là động từ, thường dùng "所 + động từ + 的": 我(所)认识的朋友'],
          ['Cụm giới từ', '—', 'Định ngữ là cụm giới từ: 关于经济的书、在桌子上的书'],
          ['Chất liệu hay công dụng', 'Nói chất liệu, tính chất, nghề nghiệp: 塑料杯子、少数民族、中国地图、汉语老师', 'Nói công dụng: 学习汉语的方法、装书的箱子'],
          ['Lượng từ', 'Lượng từ hạn định + danh từ: 一个学生、三件事、两条狗', 'Lượng từ miêu tả + 的 + danh từ: 一屋子的人、一头的汗、一桌子的书'],
        ],
      },
      groups: [{
        title: 'Tám ý nghĩa của định ngữ',
        patterns: [
          {
            formula: '〈定〉 + (的) + 〈名〉', title: '① Số lượng',
            note: 'Số lượng từ làm định ngữ.',
            examples: [
              x('我有[两个]中国朋友。', 'Wǒ yǒu liǎng ge Zhōngguó péngyou.', 'Tôi có hai người bạn Trung Quốc.'),
              x('她买了[五个]苹果。', 'Tā mǎi le wǔ ge píngguǒ.', 'Cô ấy mua năm quả táo.'),
              x('妈妈做了[一桌子]的菜。', 'Māma zuò le yì zhuōzi de cài.', 'Mẹ nấu cả một bàn thức ăn.'),
            ],
          },
          {
            formula: '〈定〉 + (的) + 〈名〉', title: '② Sở hữu, nguồn gốc',
            note: 'Danh từ, đại từ hoặc động từ làm định ngữ.',
            examples: [
              x('他是[上海]人。', 'Tā shì Shànghǎi rén.', 'Anh ấy là người Thượng Hải.'),
              x('[你]的房间最大。', 'Nǐ de fángjiān zuì dà.', 'Phòng của bạn là lớn nhất.'),
              x('[借来]的书看得最快。', 'Jièlái de shū kàn de zuì kuài.', 'Sách mượn về thì đọc nhanh nhất.'),
            ],
          },
          {
            formula: '〈定〉 + (的) + 〈名〉', title: '③ Phạm vi',
            note: 'Danh từ, đại từ, cụm chủ-vị hoặc tính từ làm định ngữ.',
            examples: [
              x('老师邀请了[全班]同学去他家做客。', 'Lǎoshī yāoqǐng le quán bān tóngxué qù tā jiā zuòkè.', 'Thầy mời cả lớp đến nhà làm khách.'),
              x('[任何]困难都会过去。', 'Rènhé kùnnan dōu huì guòqù.', 'Khó khăn nào rồi cũng sẽ qua.'),
              x('我不明白[她说]的话。', 'Wǒ bù míngbai tā shuō de huà.', 'Tôi không hiểu lời cô ấy nói.'),
            ],
          },
          {
            formula: '〈定〉 + (的) + 〈名〉', title: '④ Thời gian',
            note: 'Danh từ thời gian làm định ngữ.',
            examples: [
              x('[昨天]的事是我不对。', 'Zuótiān de shì shì wǒ bú duì.', 'Chuyện hôm qua là tôi sai.'),
              x('我们是[多年]的朋友。', 'Wǒmen shì duō nián de péngyou.', 'Chúng tôi là bạn nhiều năm.'),
            ],
          },
          {
            formula: '〈定〉 + (的) + 〈名〉', title: '⑤ Nơi chốn',
            note: 'Danh từ, đại từ hoặc cụm phương vị làm định ngữ.',
            examples: [
              x('[北京]的天气很干燥。', 'Běijīng de tiānqì hěn gānzào.', 'Thời tiết Bắc Kinh rất khô.'),
              x('我喜欢[这里]的一切。', 'Wǒ xǐhuan zhèlǐ de yíqiè.', 'Tôi thích mọi thứ ở đây.'),
              x('[路上]的行人不多了。', 'Lùshang de xíngrén bù duō le.', 'Người đi đường không còn nhiều.'),
            ],
          },
          {
            formula: '〈定〉 + 〈名〉', title: '⑥ Chất liệu',
            note: 'Danh từ làm định ngữ.',
            examples: [
              x('[实木]地板比较受欢迎。', 'Shímù dìbǎn bǐjiào shòu huānyíng.', 'Sàn gỗ thật khá được ưa chuộng.'),
              x('我买了一件[真丝]衬衫。', 'Wǒ mǎi le yí jiàn zhēnsī chènshān.', 'Tôi mua một chiếc áo sơ mi lụa thật.'),
            ],
          },
          {
            formula: '〈定〉 + 的 + 〈名〉', title: '⑦ Công dụng',
            note: 'Động từ hoặc cụm động từ làm định ngữ.',
            examples: [
              x('[洗澡]水凉了。', 'Xǐzǎo shuǐ liáng le.', 'Nước tắm nguội rồi.'),
              x('这是个[装书]的箱子。', 'Zhè shì ge zhuāng shū de xiāngzi.', 'Đây là cái thùng đựng sách.'),
            ],
          },
          {
            formula: '〈定〉 + (的) + 〈名〉', title: '⑧ Tính chất, đặc điểm',
            note: 'Tính từ, cụm giới từ hoặc từ bốn chữ làm định ngữ.',
            examples: [
              x('[红]衣服不适合我。', 'Hóng yīfu bú shìhé wǒ.', 'Áo màu đỏ không hợp với tôi.'),
              x('我看过一些[关于他]的报道。', 'Wǒ kàn guo yìxiē guānyú tā de bàodào.', 'Tôi đã đọc một số bài viết về anh ấy.'),
              x('他是一个[朝气蓬勃]的青年。', 'Tā shì yí ge zhāoqì-péngbó de qīngnián.', 'Anh ấy là một thanh niên đầy sức sống.'),
            ],
          },
        ],
      }],
    },

    // ───────────────────────── 常用量词 ─────────────────────────
    {
      id: 'liangci', hanzi: '常用量词', pinyin: 'chángyòng liàngcí', title: 'Danh lượng từ thường dùng',
      intro: 'Hôm qua đã học động lượng từ, hôm nay là danh lượng từ. Mỗi danh từ đi với một lượng từ riêng nên không có quy tắc chung, chỉ có thể học theo cụm. Bấm vào từng hàng để nghe.',
      table: {
        head: ['Lượng từ', 'Cụm thường gặp'],
        rows: [
          ['身', '一身本领、一身汗、一身正气'],
          ['番', '一番工夫、一番事业、一番话、一番思考、讨论了一番、别有一番情趣'],
          ['串', '一串银铃般的笑声、一串脚印、眼泪一串一串地流下来'],
          ['缕', '一缕阳光、一缕炊烟、一缕青丝、一缕乡愁'],
          ['丝', '一丝笑容'],
          ['线', '一线希望、一线生机'],
          ['份', '一份礼物、一份心情、一份爱、一份心意'],
          ['团', '一团火、一团糟、一团麻、乱作一团'],
          ['项', '一项任务、一项法规、一项工作、一项研究、一项调查'],
          ['起', '一起车祸、一起事故、一起案件'],
          ['场 (cháng)', '一场雨、一场雪、虚惊一场'],
          ['场 (chǎng)', '一场电影、一场比赛、一场风波、一场革命'],
          ['股', '一股味道、一股暖流、一股热浪、一股热潮、一股劲儿、拧成一股绳'],
          ['桩', '一桩事情、一桩心事'],
          ['把', '一把伞、一把椅子、一把扇子、大把大把地花钱、哭得一把鼻涕一把泪'],
          ['顶', '一顶帐篷、一顶帽子'],
          ['面', '一面墙、一面鼓、一面旗(帜)、一面镜子'],
          ['条', '一条路、一条规定、一条消息、一条命令、一条狗、救了他一条命'],
          ['撮 (cuō)', '一撮土、一小撮敌人'],
          ['副', '一副笑容、一副可怜的样子、一副学生打扮、一副碗筷、一副眼镜、一副春联'],
          ['幅', '一幅画、一幅地图'],
          ['打 (dá, "12 cái")', '一打笔、半打啤酒'],
          ['人次 (车次, 架次, 场次)', '一人次'],
          ['家', '一家报社、一家饭店、一家企业、一家医院、一家银行、一家剧院'],
          ['所', '一所学校'],
          ['座', '一座教学楼、一座山、一座宫殿、一座桥、一座塑像'],
          ['扇', '一扇门、一扇窗'],
        ],
      },
      groups: [{
        patterns: [{
          formula: '〈数〉 + 〈量〉 + 〈名〉', title: 'Lượng từ đi theo danh từ',
          note: 'Mỗi danh từ có lượng từ riêng: ô, ghế, quạt là 把; đường, quy định, con chó là 条; cặp kính, đôi đũa là 副; trường học là 所.',
          examples: [
            x('一[把]伞', 'yì bǎ sǎn', 'một chiếc ô'),
            x('一[条]路', 'yì tiáo lù', 'một con đường'),
            x('一[副]眼镜', 'yí fù yǎnjìng', 'một cặp kính'),
            x('一[所]学校', 'yì suǒ xuéxiào', 'một ngôi trường'),
          ],
        }],
      }],
    },
  ],

  // ───────────────────────── 学习要点 (bảng ghi nhớ) ─────────────────────────
  boards: [
    {
      id: 'zhuang-bu', hanzi: '状语与补语', title: 'Trạng ngữ và bổ ngữ',
      rows: [
        { label: 'Phân biệt', text: 'Bổ nghĩa TRƯỚC vị ngữ là 状语. Bổ nghĩa SAU vị ngữ là 补语.' },
        {
          label: 'So sánh 1',
          examples: [
            x('他通过了新HSK 4级，马上[高兴地]给父母打电话。', 'Tā tōngguò le xīn HSK sì jí, mǎshàng gāoxìng de gěi fùmǔ dǎ diànhuà.', 'Anh ấy đỗ HSK 4, lập tức vui vẻ gọi điện cho bố mẹ.', 'Vì đỗ nên đi gọi điện.', '状语'),
            x('他通过了新HSK 4级，高兴[得跳了起来]。', 'Tā tōngguò le xīn HSK sì jí, gāoxìng de tiào le qǐlái.', 'Anh ấy đỗ HSK 4, vui đến nhảy cẫng lên.', 'Vì đỗ nên vui.', '补语'),
          ],
        },
        {
          label: 'So sánh 2',
          examples: [
            x('我们两个人做这些菜[够]吃了。', 'Wǒmen liǎng ge rén zuò zhèxiē cài gòu chī le.', 'Hai người chúng ta nấu mấy món này đủ ăn rồi.', 'Còn chưa ăn, số lượng đã đủ.', '状语'),
            x('每天吃一样的菜，我吃[够]了。', 'Měi tiān chī yíyàng de cài, wǒ chī gòu le.', 'Ngày nào cũng ăn một món, tôi ăn chán rồi.', 'Ăn nhiều quá, thấy ngán: "够了".', '补语'),
          ],
          points: [{ text: 'Điểm thi: ăn đến chán thì 够 là bổ ngữ, đứng sau 吃.', fixes: [{ wrong: '清朝一位皇帝每天美味佳肴够吃了', right: '清朝一位皇帝每天美味佳肴吃够了', ref: 'Kiểm tra 1 · B' }] }],
          ps: 'Nói đơn giản: trạng ngữ đứng trước trung tâm ngữ (vị ngữ), dùng để bổ nghĩa và nói rõ tình hình của động tác cũng như cách làm, nên hay biểu thị việc "sẽ" làm, đang làm hoặc chưa làm. Bổ ngữ đứng sau trung tâm ngữ, bổ sung tình hình, kết quả sau động tác, nên hay biểu thị việc đã hoàn thành.',
        },
        {
          label: 'Thêm một cặp',
          examples: [
            x('他[认真地]写作业。', 'Tā rènzhēn de xiě zuòyè.', 'Anh ấy chăm chú làm bài tập.', 'Tình trạng "đang viết".', '状语'),
            x('他写作业写[得很认真]。', 'Tā xiě zuòyè xiě de hěn rènzhēn.', 'Anh ấy làm bài tập rất chăm chú.', 'Đánh giá tình trạng của việc "viết".', '补语'),
          ],
        },
        {
          label: 'Điểm thi',
          points: [{ text: 'Cụm "在 + nơi chốn" chỉ nơi động tác xảy ra thì đứng trước động từ.', fixes: [{ wrong: '并且打算度过一个晚上在黄山顶峰', right: '并且打算在黄山顶峰度过一个晚上', ref: 'Kiểm tra 2 · D' }] }],
        },
        {
          label: 'Thói quen dùng',
          text: '"在" hay đứng sau các động từ 放, 摆, 排, 安排, 确定, 固定, 布置, 生, 诞生, 出生, 死, 定, 处, 改, 发生, 出现 để làm bổ ngữ. Còn 多, 少, 快, 慢, 早, 晚 thường đứng trước động từ làm trạng ngữ.',
          examples: [
            x('放[在桌子上]，发生[在去年]，改[在下周]。', 'Fàng zài zhuōzi shang, fāshēng zài qùnián, gǎi zài xiàzhōu.', 'Đặt trên bàn, xảy ra vào năm ngoái, đổi sang tuần sau.', undefined, 'bổ ngữ'),
            x('你[多]吃点儿。', 'Nǐ duō chī diǎnr.', 'Bạn ăn nhiều chút đi.', undefined, 'trạng ngữ'),
            x('你[晚]来一会儿，我就走了。', 'Nǐ wǎn lái yíhuìr, wǒ jiù zǒu le.', 'Bạn đến muộn một chút là tôi đi mất rồi.', undefined, 'trạng ngữ'),
          ],
        },
      ],
    },
    {
      id: 'zhuang-pos', hanzi: '状语的位置', title: 'Vị trí của trạng ngữ',
      rows: [
        {
          label: 'Quy tắc',
          text: 'Đứng trước vị ngữ, thường sau chủ ngữ. Nhưng danh từ thời gian hoặc cụm giới-tân làm trạng ngữ có thể đứng trước chủ ngữ.',
          examples: [
            x('他[现在]正在做作业呢。', 'Tā xiànzài zhèngzài zuò zuòyè ne.', 'Bây giờ anh ấy đang làm bài tập.', undefined, 'danh từ thời gian'),
            x('[现在]他正在做作业呢。', 'Xiànzài tā zhèngzài zuò zuòyè ne.', 'Bây giờ anh ấy đang làm bài tập.'),
            x('我[对中国历史文化]很感兴趣。', 'Wǒ duì Zhōngguó lìshǐ wénhuà hěn gǎn xìngqù.', 'Tôi rất hứng thú với lịch sử văn hóa Trung Quốc.', undefined, 'cụm giới-tân'),
            x('[对中国历史文化]我很感兴趣。', 'Duì Zhōngguó lìshǐ wénhuà wǒ hěn gǎn xìngqù.', 'Với lịch sử văn hóa Trung Quốc, tôi rất hứng thú.'),
          ],
          ps: 'Phó từ thường không được đặt trước chủ ngữ.',
        },
      ],
    },
    {
      id: 'ding-zhuang', hanzi: '定语与状语', title: 'Định ngữ và trạng ngữ',
      rows: [
        {
          label: 'Bổ nghĩa chủ ngữ hay vị ngữ',
          examples: [
            x('[刚来中国的]我对一切都感到很新鲜。', 'Gāng lái Zhōngguó de wǒ duì yíqiè dōu gǎndào hěn xīnxiān.', 'Tôi vừa đến Trung Quốc thấy cái gì cũng mới mẻ.', 'Miêu tả, nói rõ chủ ngữ "我".', '定语'),
            x('[刚来中国时]，我对一切都感到很新鲜。', 'Gāng lái Zhōngguó shí, wǒ duì yíqiè dōu gǎndào hěn xīnxiān.', 'Lúc mới đến Trung Quốc, tôi thấy cái gì cũng mới mẻ.', 'Nói rõ thời gian xảy ra vị ngữ.', '状语'),
          ],
        },
        {
          label: 'Bổ nghĩa tân ngữ hay vị ngữ',
          examples: [
            x('他收到了一份[神秘的]礼物。', 'Tā shōudào le yí fèn shénmì de lǐwù.', 'Anh ấy nhận được một món quà bí ẩn.', 'Nói rõ tân ngữ "礼物".', '定语'),
            x('他[神秘地]看着我。', 'Tā shénmì de kànzhe wǒ.', 'Anh ấy nhìn tôi một cách bí ẩn.', 'Nói rõ trạng thái của vị ngữ.', '状语'),
          ],
          ps: 'Có thể nói: định ngữ bổ nghĩa, nói rõ chủ ngữ hoặc tân ngữ; trạng ngữ bổ nghĩa động từ vị ngữ, cũng tức là nói rõ tình hình của cả câu.',
        },
        {
          label: 'Điểm thi',
          points: [{ text: 'Phía sau có động từ đã làm vị ngữ thì từ miêu tả danh từ phải là định ngữ + 的, không dùng 地.', fixes: [{ wrong: '在世界各地强烈地引起了反响', right: '在世界各地引起了强烈的反响', ref: 'Kiểm tra 3 · C', why: '"反响" là tân ngữ, "强烈" miêu tả nó nên dùng 强烈的.' }] }],
        },
      ],
    },
    {
      id: 'ding-order', hanzi: '定语的顺序', title: 'Thứ tự các định ngữ',
      rows: [
        {
          label: 'Nguyên tắc 1',
          text: 'Phạm vi lớn đứng trước, phạm vi nhỏ đứng sau.',
          points: [{ text: 'Điểm thi: "中国" (lớn) phải đứng trước "西北部" (nhỏ).', fixes: [{ wrong: '位于西北部中国的戈壁沙漠', right: '位于中国西北部的戈壁沙漠', ref: 'Kiểm tra 4 · A' }] }],
        },
        {
          label: 'Nguyên tắc 2',
          text: 'Định ngữ hạn định (thời gian, địa điểm, phạm vi) đứng trước, định ngữ miêu tả đứng sau, số lượng ở giữa.',
          examples: [x('我昨天在王府井买的那件红色长风衣送给了姐姐。', 'Wǒ zuótiān zài Wángfǔjǐng mǎi de nà jiàn hóngsè cháng fēngyī sònggěi le jiějie.', 'Chiếc áo khoác dài màu đỏ hôm qua tôi mua ở Vương Phủ Tỉnh, tôi đã tặng chị.', 'Thứ tự: 昨天在王府井买的 (hạn định) → 那件 (số lượng) → 红色 长 (miêu tả) → 风衣.')],
          points: [{ text: 'Điểm thi: số lượng "一个" đứng trước định ngữ miêu tả "不成文的".', fixes: [{ wrong: '大多数中国家庭不成文的一个规矩', right: '大多数中国家庭一个不成文的规矩', ref: 'Kiểm tra 5 · D' }] }],
        },
        {
          label: 'Ba dấu hiệu: 的 · 地 · 得',
          formulas: ['(〈定语〉) 的 + 主语 / 宾语', '[〈状语〉] 地 + 谓语', '谓语 + 得 〈补语〉'],
          examples: [
            x('世界各国都十分关注[中国的]发展。', 'Shìjiè gèguó dōu shífēn guānzhù Zhōngguó de fāzhǎn.', 'Các nước trên thế giới đều rất quan tâm đến sự phát triển của Trung Quốc.', undefined, '定语 + 的'),
            x('他[高兴地]告诉我这个好消息。', 'Tā gāoxìng de gàosu wǒ zhège hǎo xiāoxi.', 'Anh ấy vui vẻ báo cho tôi tin tốt này.', undefined, '状语 + 地'),
            x('他听到这个好消息，高兴[得手舞足蹈]。', 'Tā tīngdào zhège hǎo xiāoxi, gāoxìng de shǒuwǔ-zúdǎo.', 'Nghe tin tốt này, anh ấy vui đến múa tay múa chân.', undefined, '谓语 + 得 + 补语'),
          ],
        },
      ],
    },
    {
      id: 'shuliangci', hanzi: '数量词', title: 'Số lượng từ',
      rows: [
        {
          label: '1. Số nhiều',
          text: '"人" có dạng số nhiều, nhưng từ biểu thị số nhiều thì không đi cùng 们. "事物" đều không thêm 们, chỉ có thể thêm từ chỉ số nhiều ở phía trước.',
          examples: [
            x('人们，我们，朋友们，[两个朋友们 ✗]，[所有人们 ✗]，[桌子们 ✗]（三张桌子）', 'rénmen, wǒmen, péngyoumen', 'ta nói được: 人们, 我们, 朋友们; không nói: 两个朋友们, 所有人们, 桌子们.'),
          ],
          points: [{ text: 'Điểm thi: từ số nhiều (许多) không đi với 们.', fixes: [{ wrong: '古往今来许多人们梦想当皇帝', right: '古往今来许多人梦想当皇帝', ref: 'Kiểm tra 6 · A' }] }],
        },
        {
          label: '2. Danh từ tập hợp',
          text: 'Đại diện cho một loại sự vật hoặc người, bản thân đã là số nhiều, nên phía trước không dùng từ chỉ số lượng cụ thể. Gồm: 人口, 车辆, 书籍, 书本…',
          points: [{ text: 'Điểm thi: "书籍" là danh từ tập hợp, không đi với "数千册".', fixes: [{ wrong: '数千册书籍', right: '数千册图书 / 数千册书', why: 'Có thể bỏ 籍, hoặc đổi thành 图书.' }] }],
        },
        {
          label: '3. Vị trí lượng từ',
          text: 'Lượng từ giống như dấu thập phân.',
          examples: [
            x('1.5个小时 → 一个[半]小时', 'yí ge bàn xiǎoshí', 'một tiếng rưỡi'),
            x('一元[多]', 'yì yuán duō', 'hơn một đồng'),
            x('五十[多]元', 'wǔshí duō yuán', 'hơn năm mươi đồng'),
          ],
        },
        {
          label: '4. Danh từ kiêm lượng từ',
          text: 'Một số danh từ (分钟, 天, 周, 年…) cũng có thể kiêm làm lượng từ.',
          examples: [x('一天、一周、一年……', 'yì tiān, yì zhōu, yì nián', 'một ngày, một tuần, một năm')],
        },
      ],
    },
    {
      id: 'gaishu', hanzi: '常用的概数', title: 'Số ước lượng thường dùng',
      rows: [
        {
          label: 'Cấu trúc',
          formulas: ['(大概 / 大约 / 差不多 / (将)近 / 不到 / 达(到) / (多 / 高 / 长)达) + 〈数词〉 + 〈量词〉 + (多 / 余 / 来) + (左右 / 前后 / 上下 / 以下 / 以内 / 以上)'],
          text: 'Mỗi nhóm lấy một từ. "前后" dùng với thời gian. Các từ ở hai đầu không đi cùng nhau nếu nghĩa mâu thuẫn.',
          examples: [x('参加这次考试的学生[多达]上千人。', 'Cānjiā zhè cì kǎoshì de xuésheng duō dá shàng qiān rén.', 'Số học sinh dự kỳ thi này lên tới hàng nghìn người.')],
        },
        {
          label: 'Điểm thi',
          points: [
            { text: '将近 nghĩa là "chưa tới", mâu thuẫn với 以上 (vượt).', fixes: [{ wrong: '汽车销售总量的将近80%以上', right: '汽车销售总量的80%以上', ref: 'Đề mô phỏng · 7A' }] },
            { text: '快 nghĩa là "sắp tới", mâu thuẫn với 多 (đã vượt).', fixes: [{ wrong: '距今已有快1400多年的历史了', right: '距今已有1400多年的历史了', ref: 'Đề mô phỏng · 6B' }] },
          ],
        },
      ],
    },
  ],

  // ───────────────────────── 知识点测试 (6 câu) ─────────────────────────
  test: [
    seg(['我听说过"都一处"的来历：', '清朝一位皇帝每天美味佳肴够吃了，于是夜里溜出宫，', '到了那家饭馆儿，因为吃得很满意，', '便提笔写下"都一处"，意为"京都第一处美食"。'], 1, 'Trạng ngữ hay bổ ngữ?',
      '清朝一位皇帝每天美味佳肴吃够了', 'Hoàng đế ăn chán các món ngon, nên "够" là bổ ngữ chỉ kết quả, phải đứng sau 吃: 吃够了.'),
    seg(['"五岳归来不看山，黄山归来不看岳。"', '由此可见，黄山的风景应该是最美的了。', '于是我和马超决定先去登黄山，', '并且打算度过一个晚上在黄山顶峰。'], 3, 'Vị trí của "在 + nơi chốn"',
      '并且打算在黄山顶峰度过一个晚上', 'Nơi chốn xảy ra động tác (在黄山顶峰) làm trạng ngữ, phải đứng trước động từ 度过.'),
    seg(['美国作家出版了一本书，名为《寂静的春天》，', '书中披露了用农药消灭榆树甲虫的恶果，', '在世界各地强烈地引起了反响，', '并由此掀起了现代农业的绿色革命。'], 2, 'Định ngữ hay trạng ngữ?',
      '在世界各地引起了强烈的反响', '"强烈" miêu tả danh từ "反响" (tân ngữ) nên là định ngữ, dùng 强烈的 chứ không dùng 强烈地.'),
    seg(['酒泉卫星发射中心位于西北部中国的戈壁沙漠，', '是中国建设最早、规模最大的卫星发射场。', '该中心最近又成功地发射了两颗卫星，', '有关人士专程前来观看了发射情况。'], 0, 'Thứ tự định ngữ: lớn trước, nhỏ sau',
      '酒泉卫星发射中心位于中国西北部的戈壁沙漠', 'Phạm vi lớn (中国) đứng trước, phạm vi nhỏ (西北部) đứng sau.'),
    seg(['吃团圆饭，可以说是中国人过春节的头等大事。', '除夕之夜，全家人围坐在一起，', '团团圆圆地享用丰盛的年夜饭，', '一直是大多数中国家庭不成文的一个规矩。'], 3, 'Thứ tự định ngữ: số lượng ở giữa',
      '一直是大多数中国家庭一个不成文的规矩', 'Định ngữ hạn định (大多数中国家庭) đứng trước, số lượng (一个) ở giữa, định ngữ miêu tả (不成文的) đứng sau.'),
    seg(['古往今来许多人们梦想当皇帝，', '可传说清朝的顺治当了皇帝以后却又非要当和尚，', '这究竟是为什么？', '该书从不同的角度回答了这一问题。'], 0, 'Số nhiều không thêm 们',
      '古往今来许多人梦想当皇帝', 'Từ biểu thị số nhiều (许多) không dùng cùng 们.'),
  ],

  // ───────────────────────── 新HSK仿真试题 (15 câu) ─────────────────────────
  exam: [
    sen([
      '天凉了，你要穿多点儿衣服。',
      '据调查，全国各地不同式样的亭子多达一百余种。',
      '未来三天内，北方大部分地区将会出现低温天气。',
      '长期生活在被这种涂料包围的狭小空间里，无异于慢性自杀。',
    ], 0, 'Trạng ngữ hay bổ ngữ?', '天凉了，你要多穿点儿衣服', '"穿" là động tác còn chưa làm (lời khuyên), "多" không thể làm bổ ngữ kết quả. Phải làm trạng ngữ: 多穿点儿衣服.'),
    sen([
      '要想赢得比赛，关键是要有一个良好的心态。',
      '残疾人奥林匹克运动会简称"残奥会"。',
      '这就是我的理由为什么我很欣赏他。',
      '美酒配佳肴，古来有之，酒是节日餐桌上的必备品。',
    ], 2, 'Vị trí của định ngữ', '这就是我为什么很欣赏他的理由', '"理由" là tân ngữ, phần phía sau phải làm định ngữ và đặt trước tân ngữ: 我为什么很欣赏他的理由.'),
    sen([
      '世界上第一个发明麻醉术的人是华佗。',
      '她很脆弱，遇到一点儿困难就会失去信心，一蹶不振。',
      '上个季度，人民币汇率连连破关再创新高，升值步伐加快明显起来。',
      '绍兴鲁迅故居是鲁迅的出生地，他回故乡任教时也基本上居住在此。',
    ], 2, 'Trạng ngữ hay bổ ngữ?', '升值步伐明显加快起来', '"加快" là vị ngữ, "起来" là bổ ngữ phía sau, nên "明显" phải làm trạng ngữ, đặt trước động từ.'),
    sen([
      '困难里包含着胜利，失败里孕育着成功。',
      '地震给灾区人民的生活造成了很大的损失严重。',
      '你不能改变社会，但你可以改变自己的生活态度。',
      '许多成功人士都具有坚持不懈的毅力和克服困难的勇气。',
    ], 1, 'Định ngữ bị lặp', '地震给灾区人民的生活造成了很严重的损失', 'Trục câu là "造成损失". "很大" và "严重" đều làm định ngữ được, nhưng không thể dùng cả hai: 很严重的损失 hoặc 很大的损失.'),
    sen([
      '谚语"一山有四季"说明小气候特征在山区表现得特别明显。',
      '葡萄酒中含有多种对人体有益的成分，目前已知的就有600多种。',
      '生活就是一把镜子，真实地反映着一切。无论你做了什么，即使别人看不到，生活也都会真实地反映。',
      '当一个人真正觉悟的时候，他会放弃追寻外在世界的财富，而开始追寻他内心世界的真正财富。',
    ], 2, 'Lượng từ', '生活就是一面镜子', 'Lượng từ của 镜子 là 面, không phải 把.'),
    sen([
      '皮影戏是一种民间艺术，在中国已有两千多年的历史。',
      '赵州桥建于隋代，距今已有快1400多年的历史了，是世界上现存的最早、保存最完善的古代石拱桥。',
      '气功在中国有3000年以上的历史了，是中国文化的珍宝。',
      '这里的松鼠一点儿也不怕人，站在人的肩膀上更是常见的事。',
    ], 1, 'Số ước lượng', '距今已有约1400年的历史了 / 距今已有1400多年的历史了', '"多" nghĩa là vượt quá 1400, mâu thuẫn với "快" (sắp tới). Phải bỏ một trong hai.'),
    sen([
      '北京私人购买汽车的数量已经占到汽车销售总量的将近80%以上。',
      '我是《人民日报》的一名记者，去年一年我采访了十位新闻人物。',
      '展销会以后，该公司的产品在市场上的销售量迅速增加。',
      '诺贝尔奖是当今科学界的最高奖项，是以瑞典化学家诺贝尔的遗产作为基金创立的。',
    ], 0, 'Số ước lượng', '已经占到汽车销售总量的80%以上', '"将近" nghĩa là "không tới", mâu thuẫn với "以上". Bỏ 以上 hoặc đổi thành 80%以上.'),
    sen([
      '中国的书法、绘画、砚台、瓷器，简直就是一座座取之不尽的思想文化和艺术的宝库。',
      '四年级学生的汉语水平显然高出一筹，他们已经能在联欢会上较为详细地介绍中国的情况了。',
      '由于物价是一国商品价值的货币表现，通货膨胀也就意味着该个国家货币代表的价值量下降。',
      '香格里拉是一片人间净土，也是我们心中一直向往的净土，在这里，我们看到了大自然与人的和谐。',
    ], 2, 'Lượng từ thừa', '通货膨胀也就意味着该国货币代表的价值量下降', '"该, 本, 此" đều có nghĩa là "这个", nên phía sau thêm thẳng danh từ, không cần thêm lượng từ nữa.'),
    sen([
      '他是一名有着战地采访经验的年轻记者。',
      '中国是最早种植梨树的国家，至少有4000多年的栽培梨树的历史。',
      '我从杭州买来了一面扇子，扇面上画的是"西湖美景"。',
      '笔墨纸砚，又称"文房四宝"，是古代文人书房中必备的四件物品。',
    ], 2, 'Lượng từ', '我从杭州买来了一把扇子', 'Lượng từ của 扇子 là 把.'),
    sen([
      '善于赞赏别人常会使一个领导者具有神奇的力量。',
      '快乐是一种流动的空气，你自私时，它便停止流通了。',
      '生活中，常常有人感叹自己不够幸运，看着别人创造出一个又一个奇迹，总是羡慕至极却又无可奈何。',
      '外国人和中国人打过交道普遍觉得中国人热情好客，中国人常常对客人说："来家玩儿。"当客人来家里时，一定要留客人吃饭，而且要做很多菜。',
    ], 3, 'Định ngữ và trung tâm ngữ', '和中国人打过交道的外国人普遍觉得中国人热情好客', 'Trung tâm ngữ không rõ. Chủ ngữ của "觉得" là "外国人", nên cụm "和中国人打过交道" phải làm định ngữ cho nó.'),
    sen([
      '据科学家估算，地球表层的总水量约为14亿立方千米，其中海洋水量占97.3%。',
      '在中国，每逢春节，无论城市还是农村，家家户户都要精选一幅大红春联贴在门上，为春节增加喜庆气氛。',
      '专家指出，其实颜色对我们影响至深，看到喜欢的颜色，我们会感到舒适和宁静。相反，不喜欢的颜色则让人很不舒服。',
      '许多时候奇迹的出现很简单，只不过是一个有心人在一个司空见惯的事物上加了一份丰富的想象而已。',
    ], 1, 'Lượng từ', '家家户户都要精选一副大红春联贴在门上', 'Lượng từ của 春联 là 副.'),
    sen([
      '龙血树属于百合科，它的生长十分缓慢，几百年才能成熟，几十年才开一次花，因此十分稀有。',
      '看着聋哑姑娘们美妙绝伦的表演，我突然不知不觉得流下了眼泪，她们无法听到音乐的声音，却能天衣无缝地配合节奏翩翩起舞，可想而知，台下她们流过多少汗水啊！',
      '施工队在挖路时损伤了三棵法国梧桐的根部，园林局的工作人员表示，他们会对这三棵树加强养护，尽量多浇水，树木将会很快恢复生机。',
      '电的发明和应用在工业领域形成了一种新态势，以发电、输电、配电为主要内容的电力工业和电器设备工业迅速发展起来，人类社会由蒸汽时代进入了电气时代。',
    ], 1, 'Lẫn 得 và 地', '我突然不知不觉地流下了眼泪', 'Trung tâm là "我流下了眼泪", còn "不知不觉" làm trạng ngữ nên phải dùng 地, không dùng 得.'),
    sen([
      '春秋战国时代，出现了"诸子蜂起"、"百家争鸣"的局面，各家学派都开始著书立说，法家自然也不例外。',
      '世界上最具有经济活力的亚洲地区与世界上最大的区域贸易集团欧盟之间，正在形成一种新型的伙伴关系，它植根于历史，顺应着时代大潮，掀开了历史新的一页。',
      '常言道："生命在于运动。"然而工作繁忙的现代人却越来越懒于运动，从广义上说，这种可怕的人们的不良习惯，将会对整个社会造成危害。',
      '世界贸易组织的前身成立于1948年，现有成员国100多个，它与国际货币基金组织、世界银行并称为战后世界经济三大支柱，这一点不见得所有人都知道。',
    ], 2, 'Thứ tự định ngữ', '从广义上说，人们的这种可怕的不良习惯，将会对整个社会造成危害', '"人们" là định ngữ sở hữu hạn định, phải đứng trước đại từ chỉ thị: 人们的这种可怕的不良习惯.'),
    sen([
      '建工金源公司何以能稳步发展？许总经理认为，今天的成就已是过去，企业必须更多地在市场和资本方面高瞻远瞩。',
      '1988年，我第一次来到中国，旅行了两个多月，如诗如画的山水和热情好客的中国人吸引了我，我无法忘记亲身经历的每一件事。',
      '正式的书籍是在春秋战国时代两千多年前出现的。人们把竹子、木板劈成一样长和宽的细条，在上面刻字或写字。这些竹片或木片叫"简"或"牍"。',
      '那天夜里，我和马申住在同一顶帐篷里，夜越深越觉得冷，穿了很多但还是冷得无法入睡，最后我们索性坐起来，聊了一夜。',
    ], 2, 'Thứ tự định ngữ', '正式的书籍是在两千多年前的春秋战国时代出现的', 'Thứ tự định ngữ sai: cụm thời gian "两千多年前的" phải đứng trước "春秋战国时代", và 在 đi liền sau 是.'),
    sen([
      '商贸国际交流，会在更广泛的意义上促进文化的繁荣，无论人们是否愿意，都必须重视这种发展的大趋势，在这种条件下，国际间的交流成为经济发展所必需的条件。',
      '桃是中国人较早发现的野生可食用植物果实。它味美色鲜，深得人们的喜爱，逐渐在人们心目中成为长寿、多福的象征。',
      '据一位公关公司的职员分析，这家企业之所以沦落到这个地步，已经离职的前任副总经理余秋萍负有不可推卸的责任，是她的错误决策导致了今天的局面。',
      '这已经是王芳第三次结婚了，第一次婚姻因丈夫的突然去世而结束，没想到第二次婚姻又以失败告终，但愿这第三次婚姻能给她带来永久的幸福。',
    ], 2, 'Thứ tự định ngữ', '据公关公司的一位职员分析', '"公关公司" là định ngữ hạn chế, phải đứng trước số lượng từ. Nhìn lượng từ cũng thấy "一位" không phải lượng từ của "公司".'),
  ],
}
