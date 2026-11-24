import type { DayContent, Ex, ErrQ } from './types'

/**
 * Tuần 2 · Thứ Năm: Trợ từ 了, 过, 着 (助词"了""过""着"), sách trang 145–160.
 * Phần dịch tiếng Việt và pinyin do app tự thêm.
 */

const x = (h: string, p: string, vi: string, note?: string, tag?: string): Ex => ({ h, p, vi, note, tag })
const e = (h: string, vi: string, note?: string, tag?: string): Ex => ({ h, vi, note, tag })
const seg = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'segment', parts, answer, topic, fix, why })
const sen = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'sentence', parts, answer, topic, fix, why })

export const day9: DayContent = {
  intro:
    'Ngoài các phó từ thời gian đã học như 曾经, 已经, 正在, 将要, tiếng Hán còn dùng trợ từ 了, 过, 着 để biểu thị thể của động từ. Lúc nào dùng, dùng thế nào là điều nhiều bạn đau đầu. Thật ra chúng có quy luật. Hãy nắm quy luật trước, rồi dùng chúng kiểm tra những câu bạn thường dùng. Chỉ cần thường xuyên để ý, các quy tắc này sẽ dần thành cảm giác ngôn ngữ, bạn sẽ dùng đúng một cách tự nhiên.',

  focusTitle: 'Ba trợ từ hôm nay',

  cheat: {
    title: 'Bảng tra nhanh: 了₁, 了₂, 过, 着',
    lead: '了₁ đứng sau động từ, nói hành động hoàn thành. 了₂ đứng cuối câu, nói thay đổi hoặc ngữ khí xác định. 过 nói từng có trải nghiệm hoặc hành động đã kết thúc. 着 nói đang tiến hành hoặc trạng thái kéo dài.',
    head: ['Trợ từ', 'Vị trí', 'Ý nghĩa chính', 'Ví dụ'],
    rows: [
      { key: '了₁', cells: ['Sau động từ', 'Hoàn thành, thực hiện', '他买了一本书。'] },
      { key: '了₂', cells: ['Cuối câu', 'Thay đổi tình trạng; ngữ khí xác định', '苹果已经红了。'] },
      { key: '过', cells: ['Sau động từ, tính từ', 'Từng có (trải nghiệm); đã kết thúc', '我去过一次上海。'] },
      { key: '着', cells: ['Sau động từ, tính từ', 'Đang tiến hành; trạng thái kéo dài; tồn tại', '外边下着雨呢。'] },
    ],
  },

  sections: [
    // ───────────────────────── 了 ─────────────────────────
    {
      id: 'le', hanzi: '助词"了"', pinyin: 'zhùcí “le”', title: 'Trợ từ 了',
      intro: '了₁: biểu thị động tác hoàn thành hay thực hiện, dùng sau động từ. 了₂: biểu thị tình hình thay đổi và ngữ khí xác định, dùng cuối câu.',
      groups: [
        {
          title: '1. 了₁ (đứng sau động từ)',
          patterns: [
            { formula: '〈动〉 + 了₁ (+ bổ ngữ kết quả/xu hướng + 了₁)', title: '(1) Cách dùng thông thường', note: 'Biểu thị hoàn thành của động tác, chủ yếu đứng sau động từ. Nếu sau động từ có bổ ngữ kết quả hoặc xu hướng thì "了₁" đặt sau chúng.', examples: [
              x('他买[了]一本书。', 'Tā mǎi le yì běn shū.', 'Anh ấy đã mua một cuốn sách.'),
              x('上午我发出去[了]一封信。', 'Shàngwǔ wǒ fā chūqù le yì fēng xìn.', 'Sáng nay tôi đã gửi đi một lá thư.'),
              x('我终于看到[了]长城。', 'Wǒ zhōngyú kàndào le Chángchéng.', 'Cuối cùng tôi đã nhìn thấy Vạn Lý Trường Thành.'),
              x('明天下[了]课，我去找你。', 'Míngtiān xià le kè, wǒ qù zhǎo nǐ.', 'Ngày mai tan học tôi đến tìm bạn.', '"了₁" chủ yếu chỉ hoàn thành, có thể dùng cho cả tương lai.'),
            ] },
            { formula: '必须用 "了₁"', title: '(2) Bốn trường hợp bắt buộc dùng 了₁', note: '① Hành động hoàn thành, thực hiện tại một thời điểm (câu có thời gian cụ thể). ② Biểu thị thứ tự trước sau, hoặc điều kiện giả thiết: "动₁ + 了₁ + (宾语 + 就/再/才) + 动₂". ③ Câu liên động, câu kiêm ngữ: "了₁" dùng sau động từ phía sau. ④ Trong điều kiện, phương thức hay nguyên nhân nào đó, đạt kết quả nhất định.', examples: [
              x('昨晚，我给妈妈打[了]电话。', 'Zuówǎn, wǒ gěi māma dǎ le diànhuà.', 'Tối qua tôi gọi điện cho mẹ.', 'Có thời gian cụ thể.'),
              x('看[了]她的信，我就伤心得流下泪来。', 'Kàn le tā de xìn, wǒ jiù shāngxīn de liúxià lèi lái.', 'Đọc thư cô ấy, tôi đau lòng đến chảy nước mắt.', 'Thứ tự.'),
              x('下[了]课咱们再去图书馆吧。', 'Xià le kè zánmen zài qù túshūguǎn ba.', 'Tan học ta lại đến thư viện nhé.', 'Thứ tự.'),
              x('努力[了]才能成功。', 'Nǔlì le cái néng chénggōng.', 'Cố gắng rồi mới thành công.', 'Điều kiện giả thiết.'),
              x('昨天我请张老师给我辅导[了]一次语法。', 'Zuótiān wǒ qǐng Zhāng lǎoshī gěi wǒ fǔdǎo le yí cì yǔfǎ.', 'Hôm qua tôi nhờ thầy Trương kèm tôi một buổi ngữ pháp.', 'Câu kiêm ngữ.'),
              x('他说到伤心处，禁不住叹[了]一口气。', 'Tā shuō dào shāngxīn chù, jīn bú zhù tàn le yì kǒu qì.', 'Nói đến chỗ đau lòng, anh không kìm được thở dài một hơi.', 'Câu liên động.'),
              x('在他的帮助下，困难很快解决[了]。', 'Zài tā de bāngzhù xià, kùnnan hěn kuài jiějué le.', 'Nhờ sự giúp đỡ của anh, khó khăn nhanh chóng được giải quyết.', 'Điều kiện, kết quả.'),
              x('经过研究，我们同意[了]你的建议。', 'Jīngguò yánjiū, wǒmen tóngyì le nǐ de jiànyì.', 'Sau nghiên cứu, chúng tôi đồng ý với đề nghị của bạn.', 'Phương thức, kết quả.'),
            ] },
            { formula: '可以省掉 "了₁"', title: '(3) Trường hợp có thể bỏ 了₁', note: '① Động tác liên tiếp (nhất là khi không có ngắt giọng): để thể hiện sự liên tục có thể bỏ. ② Sau động từ có bổ ngữ kết quả, xu hướng và nhấn mạnh trạng thái. ③ Khi cần nhấn mạnh trạng ngữ, sau động từ không dùng "了".', examples: [
              x('他披上(了)衣服拉开(了)门，轻松地走出去了。', 'Tā pī shàng (le) yīfu lākāi (le) mén, qīngsōng de zǒu chūqù le.', 'Anh khoác áo, mở cửa, thong thả đi ra.', 'Động tác liên tiếp.'),
              x('老李赶忙握住(了)他的手说：“谢谢你！”', 'Lǎo Lǐ gǎnmáng wò zhù (le) tā de shǒu shuō: “Xièxie nǐ!”', 'Lão Lý vội nắm tay anh nói: "Cảm ơn anh!"'),
              x('看着这些照片，我好像又回到(了)20年前。', 'Kàn zhe zhèxiē zhàopiàn, wǒ hǎoxiàng yòu huídào (le) èrshí nián qián.', 'Nhìn những tấm ảnh này tôi như quay về 20 năm trước.', 'Có bổ ngữ kết quả, nhấn mạnh trạng thái.'),
              x('上次他照顾(了)我，这次我照顾他，我们俩互相照顾。', 'Shàngcì tā zhàogù le wǒ, zhècì wǒ zhàogù tā, wǒmen liǎ hùxiāng zhàogù.', 'Lần trước anh chăm tôi, lần này tôi chăm anh, hai ta chăm nhau.'),
            ] },
            { formula: 'không dùng "了₁"', title: '(4) Trường hợp KHÔNG dùng 了₁', note: '① Hành động mang tính thói quen, thường xuyên, có quy luật: 常常, 总是, 每(天/月/年/逢/次), 偶尔, 很少. ② Động từ chỉ hoạt động tâm lý: 感觉, 希望, 决定, 决心, 打算, 喜欢, 爱等. ③ Động từ năng nguyện. ④ Động tác, trạng thái đang tiếp diễn: dùng "着". ⑤ Tân ngữ là câu nhỏ hoặc kết cấu động-tân.', examples: [
              x('他刚来中国时学习很努力，每天都去图书馆看书。', 'Tā gāng lái Zhōngguó shí xuéxí hěn nǔlì, měitiān dōu qù túshūguǎn kàn shū.', 'Khi mới đến Trung Quốc anh học rất chăm, ngày nào cũng đến thư viện đọc sách.', 'Không nói "每天都去了图书馆看书".'),
              x('最近他工作很忙，偶尔回家吃饭。', 'Zuìjìn tā gōngzuò hěn máng, ǒu’ěr huí jiā chīfàn.', 'Dạo này anh bận, thỉnh thoảng mới về nhà ăn cơm.', 'Không nói "偶尔回了家吃饭".'),
              x('我打算这周末去旅行。', 'Wǒ dǎsuàn zhè zhōumò qù lǚxíng.', 'Tôi định cuối tuần này đi du lịch.', 'Không nói "我打算了".'),
              x('现在我能用汉语表达我的想法了。', 'Xiànzài wǒ néng yòng Hànyǔ biǎodá wǒ de xiǎngfǎ le.', 'Giờ tôi đã có thể dùng tiếng Hán diễn đạt ý nghĩ.', 'Không nói "能了用".'),
              x('昨天我一直在家等着你，哪儿都没去。', 'Zuótiān wǒ yìzhí zài jiā děng zhe nǐ, nǎr dōu méi qù.', 'Hôm qua tôi cứ ở nhà đợi bạn, đâu cũng không đi.'),
              x('我以为他不来，没想到他竟是第一个到的。', 'Wǒ yǐwéi tā bù lái, méi xiǎngdào tā jìng shì dì-yī ge dào de.', 'Tôi tưởng anh không đến, không ngờ anh lại đến đầu tiên.', 'Tân ngữ là câu nhỏ.'),
              x('我去年开始学习汉语。', 'Wǒ qùnián kāishǐ xuéxí Hànyǔ.', 'Tôi bắt đầu học tiếng Hán từ năm ngoái.', 'Tân ngữ là kết cấu động-tân.'),
            ] },
            { formula: '没(有) + 〈动〉 (bỏ 了₁)', title: '(5) Phủ định', note: 'Phủ định của "了₁": trước động từ thêm "没", sau động từ "了₁" phải bỏ.', examples: [
              x('上个月，他去了一趟上海，我没去。', 'Shàng ge yuè, tā qù le yí tàng Shànghǎi, wǒ méi qù.', 'Tháng trước anh đi một chuyến Thượng Hải, tôi không đi.'),
              x('昨天我出去玩儿了，他没出去。', 'Zuótiān wǒ chūqù wánr le, tā méi chūqù.', 'Hôm qua tôi ra ngoài chơi, anh ấy không đi.'),
            ] },
          ],
        },
        {
          title: '2. 了₂ (đứng cuối câu)',
          patterns: [
            { formula: '句子 + 了₂', title: '(1) Biểu thị tình huống thay đổi', note: 'Biểu thị sự thay đổi tình huống, trạng thái; có tác dụng làm câu đầy đủ hơn hoặc biểu đạt một ngữ khí nào đó, thường dùng cuối câu.', examples: [
              x('他不再是我的朋友[了]。', 'Tā bú zài shì wǒ de péngyou le.', 'Anh ấy không còn là bạn tôi nữa.', 'Thay đổi thân phận.'),
              x('下雨[了]，回屋里去吧。', 'Xià yǔ le, huí wū lǐ qù ba.', 'Mưa rồi, vào nhà đi.', 'Tình hình thay đổi.'),
              x('苹果已经红[了]，可以吃了。', 'Píngguǒ yǐjīng hóng le, kěyǐ chī le.', 'Táo đã chín đỏ rồi, ăn được rồi.', 'Tính chất, trạng thái thay đổi.'),
              x('他三年没回家[了]。', 'Tā sān nián méi huí jiā le.', 'Anh ấy ba năm không về nhà rồi.', 'Tình huống thời gian kéo dài.'),
              x('小红今年16岁[了]。', 'Xiǎohóng jīnnián shíliù suì le.', 'Tiểu Hồng năm nay 16 tuổi rồi.', 'Đạt số lượng nào đó.'),
              x('我去图书馆看书[了]。', 'Wǒ qù túshūguǎn kàn shū le.', 'Tôi đi thư viện đọc sách rồi.', 'Ngữ khí kể, giải thích.'),
              x('他的性格已经不像从前[了]。', 'Tā de xìnggé yǐjīng bú xiàng cóngqián le.', 'Tính cách anh đã không còn như xưa.', 'Ngữ khí xác định.'),
            ] },
            { formula: '没 / 没……呢  ;  不……了₂', title: '(2) Phủ định của 了₂', note: 'Phủ định tình huống mới đã xuất hiện dùng "没" hoặc "没……呢", câu không còn "了₂". Phủ định tình huống mới sắp xuất hiện (ý nguyện, nơi chốn, tính chất thay đổi) dùng "不……了₂".', examples: [
              x('我昨天没参加他的生日晚会。', 'Wǒ zuótiān méi cānjiā tā de shēngrì wǎnhuì.', 'Hôm qua tôi không dự tiệc sinh nhật anh ấy.'),
              x('我才上三年级，还没毕业呢。', 'Wǒ cái shàng sān niánjí, hái méi bìyè ne.', 'Tôi mới học năm ba, chưa tốt nghiệp đâu.'),
              x('身体有点儿不舒服，不想去看电影了。', 'Shēntǐ yǒudiǎnr bù shūfu, bù xiǎng qù kàn diànyǐng le.', 'Người hơi khó chịu, không muốn đi xem phim nữa.'),
              x('水不热了，可以喝了。', 'Shuǐ bú rè le, kěyǐ hē le.', 'Nước không còn nóng, uống được rồi.'),
            ] },
          ],
        },
        {
          title: '3. 了₁ và 了₂ dùng cùng nhau',
          patterns: [
            { formula: '〈动〉 + 了₁ + 数量词 (+ 名词) + 了₂', title: 'Hoàn thành đến nay, và còn đang tiếp diễn', note: 'Câu vừa biểu thị hoàn thành vừa biểu thị thay đổi. (1) Nói rõ hành động hoàn thành đến hiện tại. (2) Nói rõ thời gian đã kéo dài hay số lượng đã đạt, hành động nhìn chung vẫn đang tiếp diễn. Hình thức thường gặp: "động từ + 了₁ + số lượng từ (+ danh từ) + 了₂".', examples: [
              x('我已经给朋友写[了]回信[了]。', 'Wǒ yǐjīng gěi péngyou xiě le huíxìn le.', 'Tôi đã viết thư trả lời bạn rồi.'),
              x('我在这儿住[了]三年[了]。', 'Wǒ zài zhèr zhù le sān nián le.', 'Tôi sống ở đây ba năm rồi.', 'Vẫn còn sống.'),
              x('他买[了]十几套邮票[了]。', 'Tā mǎi le shí jǐ tào yóupiào le.', 'Anh ấy đã mua hơn mười bộ tem rồi.'),
              x('为了买到那本书，他已经去[了]三次书店[了]。', 'Wèile mǎidào nà běn shū, tā yǐjīng qù le sān cì shūdiàn le.', 'Để mua được cuốn sách đó, anh đã đi hiệu sách ba lần rồi.'),
            ] },
          ],
        },
      ],
    },
    // ───────────────────────── 过 ─────────────────────────
    {
      id: 'guo', hanzi: '助词"过"', pinyin: 'zhùcí “guo”', title: 'Trợ từ 过',
      intro: '过 đứng sau động từ hoặc tính từ, nói trải nghiệm đã có hoặc sự việc đã kết thúc, thường dùng để so sánh quá khứ với hiện tại.',
      groups: [{
        patterns: [
          { formula: '〈动〉 + 过 (+ 宾语)', title: '1. Động từ + 过', note: '(1) Biểu thị trước đây từng có một trải nghiệm. Tân ngữ đứng sau "过"; bổ ngữ kết quả đứng trước "过". (2) Biểu thị động tác hoặc trạng thái đã kết thúc, sau câu có thể có "了₂". Chú ý: khi "过" dùng với động từ ly hợp, phải đặt "过" ở giữa (见面, 爬山, 洗澡, 结婚, 离婚, 道歉).', examples: [
            x('昨天，我找[过]你两次。', 'Zuótiān, wǒ zhǎo guo nǐ liǎng cì.', 'Hôm qua tôi đã tìm bạn hai lần.'),
            x('我也曾经做[过]当明星的梦。', 'Wǒ yě céngjīng zuò guo dāng míngxīng de mèng.', 'Tôi cũng từng mơ làm minh tinh.', 'Tân ngữ sau 过.'),
            x('我没看完[过]一部电视连续剧。', 'Wǒ méi kàn wán guo yí bù diànshì liánxùjù.', 'Tôi chưa từng xem hết một bộ phim truyền hình nhiều tập.', 'Bổ ngữ kết quả đứng trước 过.'),
            x('我上星期去[过]长城。', 'Wǒ shàng xīngqī qù guo Chángchéng.', 'Tuần trước tôi đã đến Trường Thành.', 'Đã kết thúc.'),
            x('我吃[过]饭了。', 'Wǒ chī guo fàn le.', 'Tôi ăn cơm rồi.'),
            x('我们俩见[过]面。', 'Wǒmen liǎ jiàn guo miàn.', 'Hai chúng tôi từng gặp nhau.', 'Động từ ly hợp: 过 ở giữa. Không nói "见面过".'),
          ] },
          { formula: '〈形〉 + 过', title: '2. Tính từ + 过', note: 'Thường biểu thị "đã từng có … nhưng nay thì khác", so sánh quá khứ và hiện tại.', examples: [
            x('这屋子从来也没这么干净[过]。', 'Zhè wūzi cónglái yě méi zhème gānjìng guo.', 'Căn phòng này chưa bao giờ sạch như thế.', 'Trước bẩn, nay sạch.'),
            x('她的病好[过]一段时间，后来又加重了。', 'Tā de bìng hǎo guo yí duàn shíjiān, hòulái yòu jiāzhòng le.', 'Bệnh cô đã tốt một thời gian rồi sau lại nặng hơn.'),
          ] },
          { formula: '没(有) + 〈动〉 + 过  ;  未曾/不曾 + 〈动〉 + 过', title: '3. Phủ định', note: 'Phủ định dùng "没(有)……过". Nếu dùng "曾", văn viết hay dùng "未曾" hoặc "不曾".', examples: [
            x('我没在别人背后说过闲话。', 'Wǒ méi zài biérén bèihòu shuō guo xiánhuà.', 'Tôi chưa từng nói xấu sau lưng người khác.'),
            x('这是历史上未曾有过的奇迹。', 'Zhè shì lìshǐ shang wèicéng yǒu guo de qíjì.', 'Đây là kỳ tích chưa từng có trong lịch sử.'),
            x('他的病都没好过。', 'Tā de bìng dōu méi hǎo guo.', 'Bệnh anh chưa từng khỏi.'),
          ] },
          { formula: '〈动〉/〈形〉 + 过 + 没有？  ;  〈动〉 + 没 + 〈动〉 + 过？', title: '4. Câu hỏi chính phản', note: 'Nếu động từ hoặc tính từ trước "过" là đơn âm tiết, thường dùng: "动/形 + 过 + 没有?" hoặc "动/形 + 没 + 动/形 + 过?". Nếu là hai âm tiết, thường dùng "动/形 + 过 + 没有?".', examples: [
            x('你去过长城没有？', 'Nǐ qù guo Chángchéng méiyǒu?', 'Bạn đã đến Trường Thành chưa?'),
            x('你去没去过长城？', 'Nǐ qù méi qù guo Chángchéng?', 'Bạn có từng đến Trường Thành không?'),
            x('这件衣服洗过没有？', 'Zhè jiàn yīfu xǐ guo méiyǒu?', 'Bộ quần áo này giặt chưa?'),
            x('他给你介绍过没有？', 'Tā gěi nǐ jièshào guo méiyǒu?', 'Anh ấy giới thiệu cho bạn chưa?', 'Động từ hai âm tiết.'),
          ] },
        ],
      }],
    },
    // ───────────────────────── 着 ─────────────────────────
    {
      id: 'zhe', hanzi: '助词"着"', pinyin: 'zhùcí “zhe”', title: 'Trợ từ 着',
      intro: '着 có nhiều chức năng: động tác đang tiến hành, trạng thái kéo dài, cách tồn tại trong câu tồn tại, hai động tác đồng thời, nhấn mạnh ngữ khí, và các cấu trúc 着点儿, 来着.',
      groups: [{
        patterns: [
          { formula: '(正)+ 〈动〉 + 着 (+ 名词)', title: '1. Động tác đang tiến hành', note: '(1) Chỉ thêm tân ngữ, không thêm bổ ngữ hoặc "了", "过". (2) Có thể thêm "正", "在", "呢".', examples: [
            x('孩子们一路上都唱[着]歌。', 'Háizimen yílù shang dōu chàng zhe gē.', 'Bọn trẻ hát suốt dọc đường.'),
            x('外边正下[着]雪呢。', 'Wàibian zhèng xià zhe xuě ne.', 'Bên ngoài đang tuyết rơi.'),
            x('昨天我去他家时，他正看[着]电视。', 'Zuótiān wǒ qù tā jiā shí, tā zhèng kàn zhe diànshì.', 'Hôm qua khi tôi đến nhà anh, anh đang xem TV.'),
          ] },
          { formula: '(没+) 〈动〉/〈形〉 + 着 (+ 名词)', title: '2. Trạng thái kéo dài', note: '(1) Nếu trạng thái là kết quả của sự kéo dài thì không thêm "正". (2) Nếu kết quả hành động không còn kéo dài, dùng được "正". Phủ định dùng "没".', examples: [
            x('图书馆的灯还亮[着]。', 'Túshūguǎn de dēng hái liàng zhe.', 'Đèn thư viện còn sáng.'),
            x('房间的窗户没开[着]。', 'Fángjiān de chuānghu méi kāi zhe.', 'Cửa sổ phòng không mở.'),
            x('他穿[着]一身新衣服。', 'Tā chuān zhe yì shēn xīn yīfu.', 'Anh mặc một bộ quần áo mới.', 'So sánh: 他正穿着衣服 (đang mặc).'),
            x('教室的门开[着]呢。', 'Jiàoshì de mén kāi zhe ne.', 'Cửa lớp học đang mở.', 'So sánh: 他正开着门 (đang mở cửa).'),
          ] },
          { formula: '名词(处所) + 〈动〉 + 着 + 名词(施事/受事)', title: '3. Câu tồn tại', note: 'Dùng trong câu tồn tại, biểu thị tồn tại theo một tư thế. (1) Danh từ (nơi chốn) + động từ + 着 + danh từ (chủ thể hành động). (2) Danh từ (nơi chốn) + động từ + 着 + danh từ (đối tượng chịu).', examples: [
            x('门口围[着]一群人。', 'Ménkǒu wéi zhe yì qún rén.', 'Ở cửa có một đám người vây quanh.'),
            x('外面下[着]雨。', 'Wàimiàn xià zhe yǔ.', 'Bên ngoài trời đang mưa.'),
            x('椅子上坐[着]一对恋人。', 'Yǐzi shang zuò zhe yí duì liànrén.', 'Trên ghế có một đôi tình nhân ngồi.'),
            x('墙上挂[着]一幅画。', 'Qiáng shang guà zhe yì fú huà.', 'Trên tường treo một bức tranh.'),
            x('他手里拿[着]一本书。', 'Tā shǒu lǐ ná zhe yì běn shū.', 'Trong tay anh cầm một cuốn sách.'),
          ] },
          { formula: '〈动〉₁ + 着 + 〈动〉₂', title: '4. 动₁ + 着 + 动₂', note: '(1) 动₁ và 动₂ cùng tiến hành, hoặc 动₁ là cách thức của 动₂. (2) Giữa 动₁ và 动₂ có quan hệ mục đích.', examples: [
            x('叫着笑着跳进了游泳池。', 'Jiào zhe xiào zhe tiào jìn le yóuyǒngchí.', 'Vừa hét vừa cười nhảy xuống bể bơi.', 'Đồng thời.'),
            x('争着抢着回答问题。', 'Zhēng zhe qiǎng zhe huídá wèntí.', 'Tranh nhau trả lời câu hỏi.'),
            x('坐着讲 / 冒着大雪来学校。', 'Zuò zhe jiǎng / mào zhe dàxuě lái xuéxiào.', 'Ngồi giảng / đội tuyết lớn đến trường.', '动₁ là cách thức của 动₂.'),
            x('急着上班；忙着准备考试；这个留着给妈妈。', 'Jí zhe shàngbān; máng zhe zhǔnbèi kǎoshì; zhège liú zhe gěi māma.', 'Vội đi làm; bận ôn thi; cái này để dành cho mẹ.', 'Quan hệ mục đích.'),
          ] },
          { formula: '〈动〉₁ + 着 + 〈动〉₁ + 着 (+ 就) + 〈动〉₂', title: '5. 动₁着动₁着就动₂', note: 'Trong quá trình 动₁ tiến hành, xuất hiện tình huống 动₂.', examples: [
            x('想着想着笑了起来。', 'Xiǎng zhe xiǎng zhe xiào le qǐlái.', 'Nghĩ mãi nghĩ mãi rồi bật cười.'),
            x('看着看着书就睡着了。', 'Kàn zhe kàn zhe shū jiù shuìzháo le.', 'Đọc mãi đọc mãi sách rồi ngủ thiếp.'),
          ] },
          { formula: '〈形〉 + 着 + 数量词  ;  〈形〉 + 着 + 呢  ;  〈动〉/〈形〉 + 着点儿', title: '6–8. 形着数量词, 形着呢, 着点儿', note: '6) "形容词 + 着 + 数量词": ngữ khí cường điệu, "着" có thể bỏ. 7) "形容词 + 着 + 呢": khẳng định tính chất, trạng thái nào đó, ngữ khí khoa trương, nghĩa "rất, vô cùng". 8) "动/形 + 着 + 点儿": dùng trong mệnh lệnh, nhắc nhở.', examples: [
            x('那儿的气温比这儿高(着)两三度呢！', 'Nàr de qìwēn bǐ zhèr gāo (zhe) liǎng sān dù ne!', 'Nhiệt độ ở đó cao hơn ở đây hai ba độ đấy!'),
            x('这部电影好看着呢。', 'Zhè bù diànyǐng hǎokàn zhe ne.', 'Bộ phim này hay lắm đấy.'),
            x('爷爷的身体结实着呢。', 'Yéye de shēntǐ jiēshi zhe ne.', 'Sức khỏe ông nội rất cứng cáp.'),
            x('过马路看着点儿。', 'Guò mǎlù kàn zhe diǎnr.', 'Qua đường nhớ nhìn chút.'),
            x('要迟到了，快着点儿。', 'Yào chídào le, kuài zhe diǎnr.', 'Sắp muộn rồi, nhanh lên chút.'),
          ] },
          { formula: '…… 来着', title: '9. 来着', note: '(1) "来着" biểu thị sự việc mới xảy ra không lâu, chỉ dùng cuối câu. (2) "来着" còn biểu thị nhất thời không nhớ ra, quên.', examples: [
            x('刚才小李找我借书来着。', 'Gāngcái Xiǎo Lǐ zhǎo wǒ jiè shū láizhe.', 'Vừa nãy Tiểu Lý đến mượn sách tôi.'),
            x('他一个小时前还发烧来着。', 'Tā yí ge xiǎoshí qián hái fāshāo láizhe.', 'Một tiếng trước anh còn sốt.'),
            x('这个人我见过，他叫什么来着？', 'Zhège rén wǒ jiàn guo, tā jiào shénme láizhe?', 'Người này tôi từng gặp, anh ta tên gì nhỉ?', 'Không nhớ ra.'),
            x('你的电话号码是多少来着？', 'Nǐ de diànhuà hàomǎ shì duōshao láizhe?', 'Số điện thoại bạn là bao nhiêu nhỉ?'),
          ] },
        ],
      }],
    },
  ],

  boards: [
    {
      id: 'le-board', hanzi: '"了"', title: 'Trợ từ 了',
      rows: [
        { label: '了₁ và 了₂', text: '了₁: 动 + 了₁ → hoàn thành. 了₂: câu + 了₂ → thay đổi.' },
        { label: '1. 动 + 了₁', formulas: ['〈动〉 + 了₁ + 〈宾〉'], text: '① Hành động hoàn thành trong quá khứ: 我昨天买了一本语法书. Câu liên động: 主 + 动₁ + (宾) + 动₂ + 了₁ + (宾). Câu kiêm ngữ: 主 + 动₁ + 宾 + 动₂ + 了₁ + 宾. ② Thứ tự: 动₁ + 了 + (宾) + (再/又/就) + 动₂. ③ Điều kiện: "在……下, 动 + 了₁ + 宾" hoặc "因为A, 才 + 动 + 了₁ + 宾". ④ Giả thiết: "如果 + 动 + 了₁ + (宾), 就……".', examples: [e('我昨天去A书店买了一本语法书。', 'Hôm qua tôi đi hiệu sách A mua một cuốn sách ngữ pháp.', 'Câu liên động: 了 đặt sau động từ cuối.'), e('老师辅导我学了两个小时汉语。', 'Thầy kèm tôi học tiếng Hán hai tiếng.', 'Câu kiêm ngữ.'), e('明天咱们做了作业再复习一下语法吧。', 'Mai ta làm bài xong rồi ôn lại ngữ pháp.', 'Thứ tự.'), e('在朋友的帮助下，我克服了这个困难。', 'Nhờ bạn giúp, tôi đã vượt qua khó khăn này.', 'Điều kiện.'), e('因为方法正确，他才通过了这个考试。', 'Vì phương pháp đúng, anh mới đỗ kỳ thi này.'), e('这个沙发的确好，可是如果买了它，房间就会显得更小。', 'Sofa này đúng là tốt, nhưng nếu mua thì phòng sẽ có vẻ nhỏ hơn.', 'Giả thiết.')] },
        { label: '2. Không dùng 了₁', text: '① Động từ chỉ hoạt động thường xuyên, thói quen (去年我在中国留学时，常常去图书馆看书). ② Động từ tâm lý (上星期我们就打算这周末去旅行). ③ Động từ năng nguyện (妈妈工作忙，所以我很小就会自己照顾自己). ④ Động từ đang tiếp diễn có "着" (雨一直不停地下着(了)). ⑤ Tân ngữ là câu nhỏ hoặc cấu trúc động-tân (我以为他不来, 我去年开始学习汉语).',
          points: [{ text: 'Điểm thi: "打算" là động từ tâm lý nên không thêm 了.', fixes: [{ wrong: '留在教室里上课的同学都是打算了考研究生的', right: '留在教室里上课的同学都是打算考研究生的', ref: 'Kiểm tra 3 · D' }] }] },
        { label: '3. Lưu ý cấu trúc', text: '① Nếu động từ có bổ ngữ kết quả/xu hướng thì bổ ngữ đặt giữa động từ và "了": 我已经学了这个词的用法; 妈妈给我寄了一个包裹. ② Phủ định: 没(有) + 动 (bỏ 了). ③ Câu hỏi chính phản: 动 + 宾 + 了 + 没有?', examples: [e('我最近太忙，没给家里打电话。', 'Dạo này tôi bận quá, không gọi điện về nhà.'), e('你昨天参加他的生日晚会了没有？', 'Hôm qua bạn có dự tiệc sinh nhật anh ấy không?')],
          points: [{ text: 'Điểm thi: bổ ngữ kết quả "清楚" đứng giữa động từ và 了: "早已看清楚了".', fixes: [{ wrong: '精明的商家早已看了清楚奥运会所蕴含的巨大商机', right: '精明的商家早已看清楚了奥运会所蕴含的巨大商机', ref: 'Kiểm tra 2 · D' }, { wrong: '在我还没学会了走路时', right: '在我还没学会走路时', why: 'Phủ định bằng "没" thì bỏ "了".', ref: 'Kiểm tra 1 · B' }] }] },
        { label: '4. 句子 + 了₂', text: 'Biểu thị thay đổi: ① Trạng thái (天气一天比一天暖和了). ② Vị trí (他不在，吃完饭去图书馆了). ③ Thời gian, số lượng (我学了两年汉语了, 还差得很远, 得要继续努力: vẫn tiếp tục học; 我学了两年汉语，这个月就要回国了: không tiếp tục).', examples: [e('我去了两次那家书店，都没买到你说的那本书。', 'Tôi đã đến hiệu sách đó hai lần, đều không mua được cuốn bạn nói.', 'Không đi nữa.'), e('我去了两次那家书店了，老板让我下午再去，他会给我找那本书。', 'Tôi đã đến hiệu sách đó hai lần rồi, ông chủ bảo chiều lại đến, ông sẽ tìm cuốn đó cho tôi.', 'Vẫn sẽ đi.')] },
        { label: '5. Cấu trúc cố định', formulas: ['就要/快要……了', '太……了', '可……了'], examples: [e('就要下雨了。', 'Sắp mưa rồi.'), e('你的话太没礼貌了。', 'Lời bạn quá vô lễ.'), e('那个电影可有意思了。', 'Phim đó thú vị lắm.')] },
      ],
    },
    {
      id: 'guo-board', hanzi: '"过"', title: 'Trợ từ 过',
      rows: [
        { label: 'Cấu trúc', formulas: ['〈动〉 + 过 + 宾语'], text: 'Biểu thị trải nghiệm từng có trong quá khứ.', examples: [e('我去过一次上海。', 'Tôi từng đến Thượng Hải một lần.')], ps: '"过" và "了₁" về ngữ pháp cơ bản giống nhau, như: 动 + 了₁/过 + 宾语. Khác nhau: "没(有) + 动 + 了₁" thì sai, còn "没(有) + 动 + 过" thì đúng. Ví dụ: 我没去过上海. Hình thức câu hỏi cũng khác: "动 + 宾 + 了₁ + 没有?" và "动 + 过 + 宾 + 没有?". Ví dụ: 你参观北京动物园了没有？/ 你参观过北京动物园没有？' },
        { label: 'Điểm thi 1', formulas: ['曾经 + 动 + 过 + 宾语  →  不曾/未曾 + 动 + 过 + 宾语'], examples: [e('我曾经做过当明星的梦。→ 我不曾(/未曾)做过当明星的梦。', 'Tôi từng mơ làm minh tinh. → Tôi chưa từng mơ làm minh tinh.', 'Không nói "曾经没做过".')] },
        { label: 'Điểm thi 2', text: 'Động từ ly hợp khi dùng "过" phải đặt "过" ở giữa: 见面, 爬山, 洗澡, 结婚.', examples: [e('她曾经向我道过歉。', 'Cô ấy từng xin lỗi tôi.')], points: [{ text: 'Điểm thi: "遇到" không thể thêm 过 ở cuối cả khối; phải đặt "过" ngay sau động từ chính.', fixes: [{ wrong: '许多女性都碰到睡眠困难的问题过', right: '许多女性都碰到过睡眠困难的问题', ref: 'Kiểm tra 4 · C' }, { wrong: '过去我从来没有过登山', right: '过去我从来没有登山过', why: 'Sách sửa thành "没有登山过" (过 ngay sau động từ).', ref: 'Kiểm tra 5 · C' }] }] },
      ],
    },
    {
      id: 'zhe-board', hanzi: '"着"', title: 'Trợ từ 着',
      rows: [
        { label: '1. Miêu tả trạng thái (tĩnh)', text: '① Nơi chốn + 动 + 着 + tân ngữ. ② Từ miêu tả, tính từ + 着.', examples: [e('桌子上放着一盆花。', 'Trên bàn đặt một chậu hoa.'), e('他目不转睛地看着我。', 'Anh nhìn tôi không chớp mắt.')] },
        { label: '2. Miêu tả động tác (động)', text: '① 主 + 动₁ + 着 + (宾₁) + 谓语动₂ + (宾₂). ② 主 + 动₁ + 着 + 动₂ + 着 + 谓语动₃. ③ 主 + 动₁ + 着 + 动₁ + 着 + (宾₁) + 就 + 谓语动₂: biểu thị khi 动₁ xảy ra, xuất hiện tình huống mới (动₂).', examples: [e('老师站着讲课。', 'Thầy đứng giảng bài.'), e('孩子跳着叫着跑到妈妈面前。', 'Đứa trẻ vừa nhảy vừa kêu chạy tới trước mặt mẹ.'), e('他看着看着书就睡着了。', 'Anh đọc mãi đọc mãi sách rồi ngủ thiếp.')],
          points: [{ text: 'Điểm thi: "动 + 着" biểu thị trạng thái đang tiến hành, động tác chưa xong, nên không dùng cùng "了", "过", hoặc bổ ngữ. "病着了一个多星期了" sai.', fixes: [{ wrong: '他病着了一个多星期了', right: '他病了一个多星期了', why: '"着" không đi cùng bổ ngữ thời lượng; dùng "了" + bổ ngữ.', ref: 'Kiểm tra 6 · A' }] }] },
      ],
    },
  ],

  test: [
    seg(['父亲是国家队的滑雪运动员，', '在我还没学会了走路时，', '就带我去滑雪场，', '毫不夸张地说，我小时候滑雪的时间可比走路的时间多得多。'], 1, 'Phủ định của 了₁',
      '在我还没学会走路时', 'Phủ định bằng "没" thì bỏ "了₁".'),
    seg(['从场馆建设到后勤保障，', '从技术支持到商家赞助，', '奥运会给企业和商家提供了无法拒绝的优厚条件。', '精明的商家早已看了清楚奥运会所蕴含的巨大商机。'], 3, 'Vị trí của 了 với bổ ngữ kết quả',
      '精明的商家早已看清楚了奥运会所蕴含的巨大商机', 'Động từ có bổ ngữ kết quả "清楚" thì "了" đặt sau bổ ngữ.'),
    seg(['在严峻的就业形势面前，', '一进入大学四年级，学生们就整天忙于找工作，', '留在教室里上课的同学都是', '打算了考研究生的。'], 3, 'Động từ tâm lý + 了',
      '打算考研究生', '"打算" là động từ tâm lý, sau không thêm "了₁".'),
    seg(['专家称，失眠的严重性已到了被视为流行病的地步，', '对于女性尤其如此。', '许多女性都碰到睡眠困难的问题过，', '约有四分之三的职业女性总是感到疲倦。'], 2, 'Vị trí của 过',
      '许多女性都碰到过睡眠困难的问题', '"过" phải đặt ngay sau động từ "碰到", trước tân ngữ.'),
    seg(['登山是一项危险的运动，', '尤其是在这样恶劣的天气里，', '过去我从来没有登山过，', '第一次登山，不免有些紧张。'], 2, 'Vị trí 过 trong câu phủ định',
      '过去我从来没有登过山', '"登山" là động từ ly hợp, nên "过" đặt giữa: "登过山".'),
    seg(['他病着了一个多星期了，', '一直烧得很厉害，', '昨天我们把他送进了医院，', '医生说他得了肺炎，需要住院治疗。'], 0, '着 không đi với 了',
      '他病了一个多星期了', '"着" biểu thị trạng thái đang kéo dài, không đi cùng "了" và bổ ngữ thời lượng.'),
  ],

  exam: [
    sen(['我出生在漠河，那里每年有半年的时间被冰雪覆盖着。', '他是个电影爱好者，只要平时一有空儿，他就会买了很多资料来研究。', '有了出租车票，即使你在车上丢了东西，也有可能找回来。', '每到农历新年，小孩子们就期盼着得到长辈们的压岁钱。'], 1, '了 với hành động thường xuyên',
      '只要平时一有空儿，他就会买很多资料来研究', 'Hành động thường xuyên, có quy luật không dùng "了₁".'),
    sen(['今天早上下雨着，我们就出发去香山了，也正是这样我们才有幸看到了雨后的香山红叶。', '9月22日是"世界无车日"，形式多样的无车日活动在世界各地紧锣密鼓地进行着。', '她养成了阅读和写作的好习惯，为以后的事业打下了坚实的基础。', '面对危险环境，很多人早就失去了平静的心态，产生了消极的心理暗示，以致在精神上败下阵来。'], 0, 'Vị trí của 着',
      '今天早上下着雨', '"着" phải đặt ngay sau động từ, trước tân ngữ.'),
    sen(['从小学到现在，你一定有过被小说的情节深深吸引的时候。', '嘉欣跳槽的主要原因是她的管理理念跟老板的不同，为此两人严重分歧了，她无可奈何地离开了公司。', '长时间或大音量地听音乐，不仅会使听力下降，甚至还会导致"噪声性耳聋"。', '儿童在游戏中尝试体验他们未来的角色，并学习遵守社会生活的要求与规则。'], 1, 'Danh từ không thêm 了',
      '为此两人产生了严重的分歧', '"分歧" là danh từ nên không dùng như động từ "分歧了". Cách nói đúng: "产生了严重的分歧".'),
    sen(['我读小学的时候，学校离家近，我都是走着上学的。', '双方关系尽管出现了一些问题，但还没到不可挽回的地步。', '学习就是艰苦的劳动，只要刻苦钻研，没有解决不了的困难。', '听到他出车祸的消息，我马上向学校请了假，赶到医院后，朋友告诉我他已经被医生推进了手术室了。'], 3, 'Hai 了 trùng nhau',
      '朋友告诉我他已经被医生推进手术室了', '"了₁" và "了₂" dùng chung thường để nói thời gian hay số lượng thay đổi, hành động còn tiếp diễn. Ở đây không có số lượng, nên chỉ cần một "了".'),
    sen(['自从有了电脑，人们用笔写字的机会就越来越少了。', '海洋不仅是生命的发源地，而且孕育着丰富多彩的生物种类。', '小汽车使市民的出行更加便利，但也给城市带来了一系列问题。', '是考研还是找工作？我想很多人都碰到了这个问题吧。其实无论是继续求学还是找工作，只要信念坚定，做什么事都会成功。'], 3, 'Vị trí của 过',
      '我想很多人都碰到过这个问题', 'Kinh nghiệm từng gặp cần dùng "过" chứ không dùng "了".'),
    sen(['机器人一词最早出现于科幻小说之中，人们对机器人充满了幻想。', '人人都需要关爱，适度的关爱能够增加了深厚的感情，拉近两个人的距离。', '这种作文题目给了学生自由发挥的空间，可以让学生充分展示自己的知识积累和语言表达能力。', '水是新陈代谢的重要媒介，没有它，人体内一系列生理化学反应就无法进行，生命也就停止了。'], 1, 'Động từ năng nguyện + 了',
      '适度的关爱能够增加深厚的感情', '"能够" biểu thị khả năng, nên động từ sau không dùng "了₁" chỉ hoàn thành.'),
    sen(['大学毕业后，他们的工作都很忙，很久没见面了，只是偶尔通过电话联系。', '草地上盛开着各种各样的野花，红的、白的、粉的……真像个美丽的大花坛。', '我和妻子商量很长时间，经过认真分析之后，我们最后决定采用方案一。', '我自己做了父亲，才体会到父亲的心情，才惭愧地意识到他其实一直有想和我亲近一些的愿望。'], 2, 'Thiếu 了 sau 商量',
      '我和妻子商量了很长时间', '"商量" là hành động đã hoàn thành, sau phải thêm "了₁".'),
    sen(['我们住的宾馆靠近马路，车来车往的，直到深夜才稍稍安静下来。', '这幅画出自中国现代著名画家徐悲鸿之手，有着很高的收藏价值。', '城市出台了一系列措施，鼓励市民采取步行、骑自行车或乘公共交通等方式出行。', '自从那次离别后直到他出国，我再也没有去过拜访他，一是距离太远，二是我找不出见他的理由。'], 3, 'Vị trí của 过 trong câu liên động',
      '我再也没有去拜访过他', 'Trong câu liên động, "过" phải đặt sau động từ thứ hai.'),
    sen(['看到孩子哭了，年轻的妈妈立刻放下手中的活儿，把孩子抱了起来。', '公司从2003年创建开始，就在不断地摸索了自己的商业模式。', '有关专家预测，老年人口比重的上升必然会引起社会消费结构的变化。', '实验表明，6个月到10个月大的婴儿，在会说话之前就已经表现出了至关重要的社会判断技巧。'], 1, '不断 và 了',
      '就在不断地摸索自己的商业模式', '"不断" biểu thị liên tục, không dùng "了₁" biểu thị hoàn thành cùng lúc.'),
    sen(['现代社会，人们不但追求健康，而且追求美丽。因此，健美的体型就成人们追求的目标之一。', '春天，树木都长出了新叶子，山上的积雪融化了，雪水汇成小溪，欢快地流着。', '人到中年，对成功有了理性的认识。到了这个年龄，就应该清楚自己真正想要的是什么了。', '旗袍源于满族女性传统服装，在20世纪上半叶由民国汉族女性改进。'], 0, 'Thiếu 了 sau 成',
      '因此，健美的体型就成了人们追求的目标之一', 'Động từ "成" biểu thị kết quả do nguyên nhân nào đó, cần thêm "了₁".'),
    sen(['人参是珍贵的中药材，在中国药用历史悠久。早在战国时代，良医扁鹊对人参的药性和疗效已有了了解。', '在长期的历史发展过程中，苏绣在艺术上形成了图案秀丽、色彩和谐、线条明快、针法活泼、绣工精细的地方风格，被誉为"东方明珠"。', '4月28日，首届"钱江源文化旅游节"在衢州市开化县拉开帷幕，著名主持人王小丫、李咏主持了当晚的文艺晚会。', '唐代陆羽写的《茶经》，是中国最早的一部茶书专著，它总结了唐代以前人们种茶、制茶、贮茶、饮茶的经验，开创着中国为茶著书立说的先河。'], 3, '着 trái với hành động đã hoàn thành',
      '开创了中国为茶著书立说的先河', '"着" biểu thị tiến hành; ở đây là việc đã hoàn thành, nên dùng "了".'),
    sen(['11月7日是农历立冬，标志冬季正式开始了，秋季作物收晒完毕，收藏入库，一些动物也准备冬眠了。', '中国各地四合院很多，北京是元明清三代王朝的首都，因而这里的四合院形式最为丰富，形成了北京四合院的独有特色。', '对一个人的成长来说，吃苦是一种磨炼，是一种财富，到艰苦环境中锻炼是年轻人成才的必修课。', '归国之前，他在欧洲一流乐团担任首席大提琴手了，2004年回到祖国，任中央音乐学院大提琴教授，开始了普通教师的生活。'], 3, 'Không cần 了₂',
      '他在欧洲一流乐团担任首席大提琴手', '"了₂" biểu thị thay đổi; ở đây không có ý thay đổi, nên bỏ.'),
    sen(['作为中国十大传世名画之一，《清明上河图》生动地记录了中国12世纪城市生活的面貌。', '发现有天赋的儿童，并且帮助他们发挥才智、增强好奇心和求知的欲望，这都是非常重要的。', '自然界中有许多有毛的动物，当它们的毛发长到可以保持体温的适当长度后，就不再继续长了。', '在地震或台风来临之前，有些动物会表现出异样，好像它们预感到灾难快要降临着，这是因为它们听到了地震、台风发出的次声波，这种声波人耳是听不到的。'], 3, '快要……了',
      '好像它们预感到灾难快要降临了', 'Cấu trúc cố định "快要……了" biểu thị sắp xảy ra, nên dùng "了", không dùng "着".'),
    sen(['两年前，我在北京外国语大学开始了学习法语，我的老师是一名加拿大人，他既懂英语又懂法语，就是不懂汉语。', '在现实生活中，有许多人总是十分自负，想要的东西就一定要拥有。一旦遭遇失败，身心长时间内都无法恢复。', '做什么事有了计划就容易取得好结果，学习也是这样，毫无计划地学习是散漫的、松松垮垮的，很容易被外界影响。', '在南京上大学的时候，我非常喜欢处处游玩。到了节假日就乘车到周围的扬州、镇江、无锡等地去旅游。'], 0, 'Động từ 开始 + tân ngữ động-tân',
      '我在北京外国语大学开始学习法语', '"开始" có tân ngữ là kết cấu động-tân, nên động từ phía sau không dùng "了".'),
    sen(['10年前我去过上海，今年我再去的时候，发现上海的变化真大啊！', '人们通常都能集中精力和时间，去克服一个个大难关，去实现一个个大目标，却经常对身边手到擒来的事情一拖再拖。', '随着电脑的广泛应用，很多人已写不出美观大方的汉字了。有专家认为，过于依赖电脑、短信带来的便利，将使汉字书写面临尴尬处境了。', '京剧是地地道道的中国国粹，因形成于北京而得名。京剧集歌唱、舞蹈、音乐、美术、文学等艺术形式于一体，成为中国经典文化的代表。'], 2, 'Trợ từ 将 + 了₂',
      '将使汉字书写面临尴尬处境', '"将" biểu thị tương lai, nên sau không dùng "了₁" biểu thị hoàn thành hay "了₂" biểu thị thay đổi.'),
  ],
}
