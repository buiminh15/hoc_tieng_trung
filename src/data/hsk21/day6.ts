import type { DayContent, Ex, ErrQ } from './types'

/**
 * Tuần 2 · Thứ Hai: Phân biệt phó từ (副词辨析), sách trang 94–111.
 * Phần dịch tiếng Việt và pinyin do app tự thêm.
 */

const x = (h: string, p: string, vi: string, note?: string, tag?: string): Ex => ({ h, p, vi, note, tag })
const e = (h: string, vi: string, note?: string, tag?: string): Ex => ({ h, vi, note, tag })
const seg = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'segment', parts, answer, topic, fix, why })
const sen = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'sentence', parts, answer, topic, fix, why })

export const day6: DayContent = {
  intro:
    'Phó từ làm trạng ngữ đều có ý nghĩa ngữ pháp rất rõ ràng. Ví dụ ai cũng biết "才" chỉ điều không mong muốn, muộn, chậm, còn "就" ngược lại: chỉ điều mong muốn, nhanh, sớm. Vì vậy khi học phân biệt phó từ, nhất định phải chú ý cả vị trí ngữ pháp lẫn ý nghĩa ngữ pháp của phó từ. Khi phân tích câu cũng phải tìm từ khóa, hiểu và quen với cách phó từ kết hợp với các từ khóa đó.',

  focusTitle: 'Sáu nhóm phó từ hôm nay',

  cheat: {
    title: 'Bảng tra nhanh: 再 / 又 / 还 / 也',
    lead: 'Bốn từ này đều nói việc "lặp lại, tiếp tục, thêm vào". Phân biệt bằng ba câu hỏi: việc đã xảy ra hay chưa, kéo dài từ quá khứ hay sang tương lai, chủ ngữ giống hay khác.',
    head: ['Từ', 'Điểm chốt', 'Ví dụ'],
    rows: [
      { key: '再', cells: ['Chưa xảy ra, sắp lặp lại. Chủ quan, đi sau động từ năng nguyện. Dùng được trong câu cầu khiến.', '我没听清楚，老师再说一遍吧。'] },
      { key: '又', cells: ['Đã xảy ra, lặp lại. Khách quan. Đi sau động từ năng nguyện; không dùng trong câu cầu khiến.', '我没听清楚，老师又说了一遍。'] },
      { key: '还', cells: ['Việc kéo dài từ quá khứ đến hiện tại; hoặc thêm cái khác. Không dùng trong câu cầu khiến.', '都12点了，他还在学习。'] },
      { key: '也', cells: ['Chủ ngữ khác nhau, cùng hành động ("tôi cũng"). Dùng được trong câu cầu khiến.', '他去，我也去。'] },
    ],
  },

  sections: [
    // ───────────────────────── 再/又/还/也 ─────────────────────────
    {
      id: 'zai-you-hai-ye', hanzi: '再·又·还·也', pinyin: 'zài · yòu · hái · yě', title: 'Phân biệt 再 / 又 / 还 / 也',
      intro: 'Cả bốn từ đều chỉ việc lặp lại hoặc bổ sung. Sách chia thành ba cặp so sánh: 再—又, 还—再, 也—又.',
      groups: [
        {
          title: '1. 再 và 又',
          patterns: [
            { formula: '再 + 〈动〉 (chưa xảy ra)  /  又 + 〈动〉 (đã xảy ra)', title: 'Chủ quan hay khách quan', note: '"再" mang tính chủ quan, hay dùng cho việc chưa hoàn thành, đợi xảy ra. "又" mang tính khách quan, hay dùng cho việc đã hoàn thành, hoặc thêm "要……了", "该……了" để ước đoán hay chỉ việc sắp xuất hiện.', examples: [
              x('这部电影很有意思，我想[再]看一遍。', 'Zhè bù diànyǐng hěn yǒu yìsi, wǒ xiǎng zài kàn yí biàn.', 'Phim này rất hay, tôi muốn xem thêm một lần.', 'Chủ quan, chưa xem.'),
              x('他[又]看了一遍那部电影。', 'Tā yòu kàn le yí biàn nà bù diànyǐng.', 'Anh ấy lại xem phim đó một lần nữa.', 'Khách quan, đã xem.'),
              x('天阴了，看来[又]要下雨了。', 'Tiān yīn le, kànlái yòu yào xià yǔ le.', 'Trời âm u rồi, xem ra lại sắp mưa.', 'Ước đoán: hiện tại chưa mưa.'),
              x('回去这么晚，妈妈肯定[又]该骂我了。', 'Huíqù zhème wǎn, māma kěndìng yòu gāi mà wǒ le.', 'Về muộn thế này, mẹ chắc lại sắp mắng tôi.', 'Ước đoán, sắp xảy ra.'),
            ] },
            { formula: '再 + ... (câu cầu khiến, giả thiết)', title: 'Câu cầu khiến, giả thiết', note: '"再" dùng được trong câu cầu khiến, câu giả thiết; "又" thì không.', examples: [
              x('这件事不着急，过两天[再]说吧。', 'Zhè jiàn shì bù zháojí, guò liǎng tiān zài shuō ba.', 'Việc này không gấp, vài hôm nữa hãy nói.', 'Không nói "过两天又说吧".'),
              x('你要是[再]这么不讲理，我就不客气了。', 'Nǐ yàoshi zài zhème bù jiǎnglǐ, wǒ jiù bú kèqi le.', 'Nếu bạn còn vô lý như vậy, tôi không khách khí nữa.', 'Không nói "你要是又这么不讲理".'),
            ] },
            { formula: '能愿动 + 再  /  又 + 能愿动', title: 'Vị trí so với động từ năng nguyện', note: '"再" chỉ đứng sau động từ năng nguyện; "又" chỉ đứng trước động từ năng nguyện.', examples: [
              x('你能[再]帮帮他吗？', 'Nǐ néng zài bāngbang tā ma?', 'Bạn có thể giúp anh ấy thêm không?', 'Không nói "你再能帮帮他吗".'),
              x('我[又]能听到你的歌声了。', 'Wǒ yòu néng tīngdào nǐ de gēshēng le.', 'Tôi lại nghe được tiếng hát của bạn rồi.', 'Không nói "我能又听到你的歌声了".'),
            ] },
            { formula: '再也 + 没(有)/不', title: '再也没(有)/不: "mãi mãi không" hoặc "đến nay chưa"', note: '"再也没(有)/不" biểu thị "vĩnh viễn không" hoặc "đến giờ vẫn chưa".', examples: [
              x('那个鬼地方，我[再也不]去了。', 'Nà ge guǐ dìfang, wǒ zài yě bú qù le.', 'Cái nơi quỷ quái ấy, tôi không bao giờ đến nữa.'),
              x('大学毕业以后，我[再也没(有)]见过她。', 'Dàxué bìyè yǐhòu, wǒ zài yě méi(yǒu) jiàn guo tā.', 'Sau khi tốt nghiệp đại học, tôi không còn gặp cô ấy nữa.'),
            ] },
          ],
        },
        {
          title: '2. 还 và 再',
          patterns: [
            { formula: '还 (đã có sẵn ý)  /  再 (ý mới lúc nói)', title: 'Ý định có sẵn hay ý định nảy ra lúc nói', note: 'Khi chỉ việc lặp lại, liên tục: "还" chủ yếu dùng khi trước lúc nói đã có ý định; "再" chủ yếu dùng khi ý mới hình thành ngay lúc nói.', examples: [
              x('A：实在对不起，明天我还得让你跑一趟。B：没关系，明天我还要来这儿办事。', 'A: Shízài duìbuqǐ, míngtiān wǒ hái děi ràng nǐ pǎo yí tàng. B: Méi guānxi, míngtiān wǒ hái yào lái zhèr bàn shì.', 'A: Thật xin lỗi, mai tôi còn phải để bạn chạy thêm một chuyến. B: Không sao, mai tôi vẫn phải đến đây làm việc.', 'Vốn đã định đến.'),
              x('没关系，明天我[再]来一趟吧。', 'Méi guānxi, míngtiān wǒ zài lái yí tàng ba.', 'Không sao, mai tôi lại đến một chuyến vậy.', 'Quyết định tạm thời.'),
            ] },
            { formula: '还 + ... (kéo dài đến nay)  /  再 + ... (kéo dài tiếp sang sau)', title: 'Kéo dài đến nay hay kéo dài sang sau', note: 'Diễn tả tình huống "kéo dài không đổi", "还" nhấn mạnh kéo dài đến lúc nói; "再" nhấn mạnh tiếp tục về sau.', examples: [
              x('你怎么[还]看呢，都12点了。', 'Nǐ zěnme hái kàn ne, dōu shí’èr diǎn le.', 'Sao bạn còn xem nữa, đã 12 giờ rồi.'),
              x('你[再]不说，我就不理你了。', 'Nǐ zài bù shuō, wǒ jiù bù lǐ nǐ le.', 'Bạn mà còn không nói, tôi sẽ không để ý bạn nữa.'),
            ] },
            { formula: '再 + ... (câu cầu khiến)', title: '"再" dùng trong câu cầu khiến, "还" thì không', note: '"再" dùng được trong câu cầu khiến, "还" thường không.', examples: [
              x('咱们[再]玩一会儿吧！', 'Zánmen zài wán yíhuìr ba!', 'Chúng ta chơi thêm chút nữa nhé!', 'Không nói "咱们还玩一会儿吧".'),
              x('北京真好，我[还想再]去一次。', 'Běijīng zhēn hǎo, wǒ hái xiǎng zài qù yí cì.', 'Bắc Kinh thật đẹp, tôi còn muốn đến một lần nữa.', '还 và 再 đi cùng nhau: nhấn mạnh lặp lại, tiếp tục.'),
            ] },
          ],
        },
        {
          title: '3. 也 và 又',
          patterns: [
            { formula: '主语₁……，主语₂ + 也……  /  主语 (……), 又……', title: 'Chủ ngữ khác hay cùng một chủ ngữ', note: 'Cả hai đều chỉ tình huống giống nhau. "也" nhiều khi chỉ động tác của người khác giống mình: "chủ ngữ₁ …, chủ ngữ₂ cũng …". "又" nhiều khi chỉ động tác trước đây của chính mình giống nhau: "chủ ngữ …, lại …".', examples: [
              x('小王病了，小李[也]病了。', 'Xiǎo Wáng bìng le, Xiǎo Lǐ yě bìng le.', 'Tiểu Vương bệnh rồi, Tiểu Lý cũng bệnh rồi.'),
              x('小王不是前些日子病了一次吗，怎么[又]病了？', 'Xiǎo Wáng bú shì qián xiē rìzi bìng le yí cì ma, zěnme yòu bìng le?', 'Tiểu Vương chẳng phải mấy hôm trước vừa bệnh một lần sao, sao lại bệnh nữa?', 'Hàm ý trước đó từng bệnh.'),
              x('你[也]去了。', 'Nǐ yě qù le.', 'Bạn cũng đi rồi.', 'Hàm ý trước đó đã có người khác đi cùng một hành động.'),
              x('他[又]去了。', 'Tā yòu qù le.', 'Anh ấy lại đi rồi.', 'Hàm ý trước đó anh ấy cũng đã đi.'),
            ] },
          ],
        },
      ],
    },
    // ───────────────────────── 才/都/就 ─────────────────────────
    {
      id: 'cai-dou-jiu', hanzi: '才·都·就', pinyin: 'cái · dōu · jiù', title: 'Phân biệt 才 / 都 / 就',
      intro: 'Về mặt "sớm, muộn, dài, ngắn, nhỏ tuổi, lớn tuổi, số lượng ít, nhiều", ba từ này đều mang đánh giá chủ quan của người nói. "才" có hai cách dùng, kí hiệu 才₁ và 才₂.',
      groups: [{
        patterns: [
          { formula: '时间/数量 + 才₁/就 + 〈动〉', title: '1. 才₁ và 就: thời gian, số lượng đặt trước', note: '"才₁" cho rằng thời gian muộn, dài, tuổi lớn, số lượng nhiều. "就" cho rằng thời gian sớm, ngắn, tuổi nhỏ, số lượng ít. Dùng để nói về điều không mong muốn / mong muốn.', examples: [
            x('8点[才]上课，你怎么7点[就]来了？', 'Bā diǎn cái shàngkè, nǐ zěnme qī diǎn jiù lái le?', 'Tám giờ mới vào học, sao bạn bảy giờ đã đến?'),
            x('真了不起！25岁[就]当经理了。我25岁[才]大学毕业。', 'Zhēn liǎobuqǐ! Èrshíwǔ suì jiù dāng jīnglǐ le. Wǒ èrshíwǔ suì cái dàxué bìyè.', 'Giỏi thật! 25 tuổi đã làm giám đốc. Tôi 25 tuổi mới tốt nghiệp đại học.'),
            x('我跑了好几趟[才]找到他。', 'Wǒ pǎo le hǎo jǐ tàng cái zhǎodào tā.', 'Tôi chạy mấy chuyến mới tìm được anh ấy.'),
            x('这么多生词，他背了两遍[就]记住了。', 'Zhème duō shēngcí, tā bèi le liǎng biàn jiù jìzhù le.', 'Nhiều từ mới thế, anh đọc hai lần là nhớ.'),
          ] },
          { formula: '才₂/都 + 时间/数量', title: '2. 才₂ và 都: thời gian, số lượng đặt sau', note: '"才₂" cho rằng thời gian sớm, ngắn, tuổi nhỏ, số lượng ít. "都" cho rằng thời gian muộn, dài, tuổi lớn, số lượng nhiều.', examples: [
            x('你看人家孩子，[才]14岁就上了大学，你都18岁了，还在读初二。', 'Nǐ kàn rénjia háizi, cái shísì suì jiù shàng le dàxué, nǐ dōu shíbā suì le, hái zài dú chū’èr.', 'Nhìn con người ta, mới 14 tuổi đã vào đại học, bạn đã 18 rồi mà còn học lớp 8.'),
            x('[才]五点，你怎么就起床了？', 'Cái wǔ diǎn, nǐ zěnme jiù qǐchuáng le?', 'Mới năm giờ, sao bạn đã dậy rồi?'),
            x('[都]凌晨两点了，快睡吧！', 'Dōu língchén liǎng diǎn le, kuài shuì ba!', 'Đã hai giờ sáng rồi, mau ngủ đi!'),
            x('[才]两个菜，不够吃吧，再点两个！', 'Cái liǎng ge cài, bú gòu chī ba, zài diǎn liǎng ge!', 'Mới hai món, không đủ ăn, gọi thêm hai món!'),
            x('[都]35万字了，太多了，最好在30万字以内。', 'Dōu sānshíwǔ wàn zì le, tài duō le, zuìhǎo zài sānshí wàn zì yǐnèi.', 'Đã 350 nghìn chữ rồi, nhiều quá, tốt nhất trong 300 nghìn chữ.'),
          ] },
          { formula: '都……了，才……  /  都……了，还……？  /  才……，就……  等', title: '3. Các cách dùng cố định thường gặp', note: '(1) "都……，才₁……": rất muộn. (2) "都……，还……?": câu hỏi tu từ, rất muộn, hàm ý "không nên". (3) "才₂……，就……": rất sớm. (4) "……了……就……": làm xong việc đầu thì ngay lập tức làm việc sau. (5) "光……就……": số lượng rất nhiều hoặc thời gian rất dài. (6) "不知(道)……才好": rất khó, không biết nên làm thế nào, thường dùng để làm khách sáo.', examples: [
            x('他都38岁了，才结婚。', 'Tā dōu sānshíbā suì le, cái jiéhūn.', 'Anh ấy đã 38 tuổi mới kết hôn.'),
            x('都六七十岁的人了，还跳什么舞？', 'Dōu liù qī shí suì de rén le, hái tiào shénme wǔ?', 'Đã 60, 70 tuổi rồi mà còn nhảy múa gì?'),
            x('爷爷当年才12岁，就承担起了家庭的重任。', 'Yéye dāngnián cái shí’èr suì, jiù chéngdān qǐ le jiātíng de zhòngrèn.', 'Ông nội năm đó mới 12 tuổi đã gánh vác trọng trách gia đình.'),
            x('他打算看了电影就回家。', 'Tā dǎsuàn kàn le diànyǐng jiù huí jiā.', 'Anh ấy định xem phim xong là về nhà.'),
            x('他一个月光房租就要3000块。', 'Tā yí ge yuè guāng fángzū jiù yào sānqiān kuài.', 'Anh ấy chỉ riêng tiền thuê nhà một tháng đã 3000 đồng.', 'Số lượng rất nhiều.'),
            x('今天不能出去玩了，光写作业就得写三个小时。', 'Jīntiān bù néng chūqù wán le, guāng xiě zuòyè jiù děi xiě sān ge xiǎoshí.', 'Hôm nay không đi chơi được, riêng làm bài tập phải mất ba tiếng.', 'Thời gian rất dài.'),
            x('你帮了我大忙，我真不知该怎么感谢你才好。', 'Nǐ bāng le wǒ dàmáng, wǒ zhēn bù zhī gāi zěnme gǎnxiè nǐ cái hǎo.', 'Bạn giúp tôi việc lớn, tôi thật không biết cảm ơn bạn thế nào cho phải.'),
          ] },
          { formula: '只有……才……  /  只要……就……', title: '4. 才 và 就 chỉ điều kiện', note: '"才" chỉ điều kiện nghiêm, khó đạt nhưng bắt buộc có; "就" chỉ điều kiện đủ là sẽ có kết quả nhất định.', examples: [
            x('只有经历过苦难的人，[才]更懂得苦尽甘来的含义。', 'Zhǐyǒu jīnglì guo kǔnàn de rén, cái gèng dǒngde kǔ jìn gān lái de hányì.', 'Chỉ người từng trải khổ nạn mới hiểu hơn ý nghĩa khổ tận cam lai.'),
            x('有人认为，只要经常吃水果，[就]不会缺乏维生素C，这种看法其实是片面的。', 'Yǒu rén rènwéi, zhǐyào jīngcháng chī shuǐguǒ, jiù bú huì quēfá wéishēngsù C, zhè zhǒng kànfǎ qíshí shì piànmiàn de.', 'Có người cho rằng chỉ cần thường xuyên ăn trái cây thì không thiếu vitamin C, cách nhìn này thật ra phiến diện.'),
            x('全班同学中，[就]他通过了考试。', 'Quán bān tóngxué zhōng, jiù tā tōngguò le kǎoshì.', 'Trong cả lớp, chỉ có anh ấy thi đỗ.', '就 + chủ ngữ, nghĩa "chỉ có".'),
          ] },
        ],
      }],
    },
    // ───────────────────────── 到底/究竟/毕竟/终究/终于 ─────────────────────────
    {
      id: 'daodi-group', hanzi: '到底·究竟·毕竟·终究·终于', pinyin: 'dàodǐ · jiūjìng · bìjìng · zhōngjiū · zhōngyú', title: 'Phân biệt 到底 / 究竟 / 毕竟 / 终究 / 终于',
      intro: 'Năm từ này đều có thể diễn tả "cuối cùng, rốt cuộc", nhưng mỗi từ còn mang vai trò riêng: chất vấn (到底, 究竟), nhấn mạnh bản chất (毕竟, 终究), kết quả cuối (终于, 到底).',
      groups: [{
        patterns: [
          { formula: '到底 (副词)', title: '1. 到底', note: '(1) Tương đương "究竟", dùng trong câu hỏi để truy vấn, nhiều trong khẩu ngữ, cuối câu không dùng "吗". Chủ ngữ là đại từ nghi vấn thì "到底" chỉ đứng trước chủ ngữ. (2) Nhấn mạnh bản chất hay đặc điểm sự vật, tương đương "毕竟". (3) Tương đương "终于", "最终": sau một thời gian cuối cùng xuất hiện tình huống hoặc kết quả nào đó.', examples: [
            x('和你一起走的女孩子[到底]是谁？', 'Hé nǐ yìqǐ zǒu de nǚháizi dàodǐ shì shéi?', 'Cô gái đi cùng bạn rốt cuộc là ai?'),
            x('我们[到底]是今天去还是明天去？', 'Wǒmen dàodǐ shì jīntiān qù háishi míngtiān qù?', 'Rốt cuộc chúng ta đi hôm nay hay ngày mai?'),
            x('[到底]什么才是好的学习方法？', 'Dàodǐ shénme cái shì hǎo de xuéxí fāngfǎ?', 'Rốt cuộc cái gì mới là phương pháp học tốt?', 'Chủ ngữ là đại từ nghi vấn: 到底 đứng trước chủ ngữ.'),
            x('我等了你好久，你[到底]来了。', 'Wǒ děng le nǐ hǎojiǔ, nǐ dàodǐ lái le.', 'Tôi đợi bạn lâu lắm, bạn cuối cùng đã đến.'),
            x('他[到底]也没答应我的请求。', 'Tā dàodǐ yě méi dāying wǒ de qǐngqiú.', 'Rốt cuộc anh ấy cũng không nhận lời yêu cầu của tôi.'),
          ] },
          { formula: '究竟 (副词/名词)', title: '2. 究竟', note: '(1) Phó từ ngữ khí, tương đương "到底", dùng để truy vấn trong câu hỏi, nhiều trong văn viết, cuối câu không dùng "吗". (2) Danh từ: lý do thật sự hoặc tình hình thật sự.', examples: [
            x('这件事[究竟]怎么办，咱们好好商量一下吧。', 'Zhè jiàn shì jiūjìng zěnme bàn, zánmen hǎohǎo shāngliang yíxià ba.', 'Việc này rốt cuộc làm sao, chúng ta bàn kỹ chút.'),
            x('今天的会议你[究竟]参加呢，还是不参加？', 'Jīntiān de huìyì nǐ jiūjìng cānjiā ne, háishi bù cānjiā?', 'Cuộc họp hôm nay rốt cuộc bạn có tham dự hay không?'),
            x('那边围了好些人，我也想去看个[究竟]。', 'Nàbiān wéi le hǎoxiē rén, wǒ yě xiǎng qù kàn ge jiūjìng.', 'Bên kia vây nhiều người, tôi cũng muốn đi xem rốt cuộc là gì.', 'Danh từ.'),
          ] },
          { formula: '毕竟 (副词)', title: '3. 毕竟', note: '(1) Khẳng định và nhấn mạnh bản chất, đặc điểm sự vật, tương đương "到底", "究竟", "终归", đầy đủ khẳng định sự thật quan trọng hoặc đúng đắn, ngầm phủ định kết luận khác không quan trọng hay sai. Từ hoặc cụm trước/sau "毕竟" có thể lặp lại: "AB毕竟是AB". (2) Nhấn mạnh bản chất sự vật không đổi vì yếu tố khác, có ý "dù thế nào cuối cùng vẫn thế này", mang giọng nhượng bộ.', examples: [
            x('留学生[毕竟]不同于中国学生，他们出门在外，家人、朋友都不在身边。', 'Liúxuéshēng bìjìng bù tóngyú Zhōngguó xuésheng, tāmen chūmén zàiwài, jiārén, péngyou dōu bú zài shēnbiān.', 'Du học sinh rốt cuộc không giống học sinh Trung Quốc, họ xa nhà, người thân bạn bè không ở bên.'),
            x('孩子[毕竟]还小，不能要求大人那样去要求他。', 'Háizi bìjìng hái xiǎo, bù néng yāoqiú dàrén nàyàng qù yāoqiú tā.', 'Trẻ con rốt cuộc còn nhỏ, không thể yêu cầu như người lớn.'),
            x('年轻人[毕竟]是年轻人，干一天活，晚上也不觉得累。', 'Niánqīng rén bìjìng shì niánqīng rén, gàn yì tiān huó, wǎnshang yě bù juéde lèi.', 'Người trẻ rốt cuộc vẫn là người trẻ, làm cả ngày tối cũng không thấy mệt.', 'Dạng AB毕竟是AB.'),
            x('计算机可以帮助人工作，但它[毕竟]不是人，没有感情，没有独立的思维。', 'Jìsuànjī kěyǐ bāngzhù rén gōngzuò, dàn tā bìjìng bú shì rén, méiyǒu gǎnqíng, méiyǒu dúlì de sīwéi.', 'Máy tính giúp người làm việc, nhưng nó rốt cuộc không phải người, không có tình cảm, không có tư duy độc lập.'),
            x('中国的经济还不够发达，但它[毕竟]在发展、在提高。', 'Zhōngguó de jīngjì hái bú gòu fādá, dàn tā bìjìng zài fāzhǎn, zài tígāo.', 'Kinh tế Trung Quốc chưa đủ phát triển, nhưng rốt cuộc nó đang phát triển, đang nâng lên.'),
          ] },
          { formula: '终究 (副词)', title: '4. 终究', note: '(1) Tương đương "最终", "终(总)归"; thường đứng trước động từ năng nguyện, biểu thị mong đợi, dự đoán hoặc việc nào đó nhất định sẽ xảy ra. (2) Tương đương "毕竟", xác nhận hoặc nhấn mạnh bản chất sự vật.', examples: [
            x('只要努力，我[终究]有一天能成为“中国通”。', 'Zhǐyào nǔlì, wǒ zhōngjiū yǒu yì tiān néng chéngwéi “Zhōngguótōng”.', 'Chỉ cần cố gắng, sớm muộn tôi cũng thành "chuyên gia Trung Quốc".'),
            x('大家[终究]会明白事情的真相。', 'Dàjiā zhōngjiū huì míngbai shìqing de zhēnxiàng.', 'Mọi người rốt cuộc sẽ hiểu sự thật.'),
          ] },
          { formula: '终于 · 到底 · 终究 (so sánh)', title: '5. So sánh 终于 — 到底 — 终究', note: '(1) "终于" nhiều dùng văn viết; động từ phía sau ít nhất phải có hai âm tiết, còn có thể bổ nghĩa cho tính từ chỉ trạng thái thay đổi. (2) "到底" dùng cả văn viết và khẩu ngữ; động từ phía sau bắt buộc thêm "了". (3) "终究" chỉ kết quả sẽ xảy ra trong tương lai, đi cùng "会", "要".', examples: [
            x('风雨[终于](/到底)过去了。', 'Fēngyǔ zhōngyú (/ dàodǐ) guòqù le.', 'Mưa gió cuối cùng cũng qua rồi.'),
            x('问题[终于]解决了，我们都可以安心了。', 'Wèntí zhōngyú jiějué le, wǒmen dōu kěyǐ ānxīn le.', 'Vấn đề cuối cùng đã giải quyết, chúng ta đều yên tâm.'),
            x('忙了一整天，他[终于]疲倦了。', 'Máng le yì zhěng tiān, tā zhōngyú píjuàn le.', 'Bận cả ngày, anh ấy cuối cùng cũng mệt.'),
            x('人[终究]会死。', 'Rén zhōngjiū huì sǐ.', 'Con người rốt cuộc rồi sẽ chết.'),
          ] },
          { formula: '毕竟 — 到底 · 毕竟 — 终究 · 究竟 — 毕竟', title: '6. So sánh các cặp còn lại', note: '毕竟 — 到底: đều nhấn mạnh bản chất, đều có nghĩa "终于", "最终", nhưng "毕竟" không hay dùng nghĩa "终于". "到底" dùng được trong câu hỏi để truy vấn; "毕竟" không. "毕竟" nhiều dùng văn viết; "到底" nhiều dùng khẩu ngữ. 毕竟 — 终究: đều nhấn mạnh sự thật không thể phủ nhận; nhưng "终究" có thể mang nghĩa "最终, 终归", còn "毕竟" thì không. 究竟 — 毕竟: "究竟" có nghĩa của "毕竟" nhưng thường không biểu thị giọng nhượng bộ; "毕竟" đứng trước hoặc sau chủ ngữ đều được; "究竟" dùng trong câu hỏi, có cách dùng danh từ; "毕竟" không có.', examples: [
            x('你说的话[到底]是真是假？', 'Nǐ shuō de huà dàodǐ shì zhēn shì jiǎ?', 'Lời bạn nói rốt cuộc là thật hay giả?', 'Không nói "你说的话毕竟是真是假".'),
            x('一个人的力量[毕竟](/终究)有限，虽然他努力了，但也没能挽回大局。', 'Yí ge rén de lìliàng bìjìng (/ zhōngjiū) yǒuxiàn, suīrán tā nǔlì le, dàn yě méi néng wǎnhuí dàjú.', 'Sức một người rốt cuộc có hạn, dù anh cố gắng nhưng cũng không cứu vãn được đại cuộc.'),
            x('你们对工作这么不负责任，[终究]会出问题的。', 'Nǐmen duì gōngzuò zhème bú fù zérèn, zhōngjiū huì chū wèntí de.', 'Các bạn vô trách nhiệm với công việc thế này, rốt cuộc sẽ có vấn đề.', 'Không dùng "毕竟".'),
            x('这件事[究竟]怎么办？', 'Zhè jiàn shì jiūjìng zěnme bàn?', 'Việc này rốt cuộc làm sao?', 'Không nói "毕竟怎么办".'),
          ] },
        ],
      }],
    },
    // ───────────────────────── 曾经/已经 ─────────────────────────
    {
      id: 'cengjing-yijing', hanzi: '曾经·已经', pinyin: 'céngjīng · yǐjīng', title: 'Phân biệt 曾经 / 已经',
      intro: 'Cả hai đều là phó từ thời gian, diễn tả động tác hoặc trạng thái xảy ra ở quá khứ hay sớm hơn; cũng có thể dùng một âm tiết: "曾", "已". Điểm khác: 已经 là quá khứ gần, còn ảnh hưởng đến hiện tại; 曾经 là quá khứ xa, đã chấm dứt.',
      groups: [{
        patterns: [
          { formula: '已经 + 〈动〉/〈形〉 + 了  /  曾经 + 〈动〉/〈形〉 + 过', title: '1. Cấu trúc ngữ pháp', note: 'Động từ, tính từ sau "已经" thường thêm "了"; sau "曾经" thường thêm "过".', examples: [
            x('天气[已经]暖和了，把冬天的衣服都收起来吧。', 'Tiānqì yǐjīng nuǎnhuo le, bǎ dōngtiān de yīfu dōu shōu qǐlái ba.', 'Thời tiết đã ấm rồi, cất hết quần áo mùa đông đi.'),
            x('当年，她也[曾(经)]漂亮过，也曾(经)有过花样的年华。', 'Dāngnián, tā yě céng(jīng) piàoliang guo, yě céng(jīng) yǒu guo huāyàng de niánhuá.', 'Năm đó, cô cũng từng xinh đẹp, cũng từng có tuổi xuân rực rỡ.'),
          ] },
          { formula: '已经 (còn kéo dài đến nay)  /  曾经 (đã chấm dứt)', title: '2. Ý nghĩa: gần và xa', note: 'Thời gian hai từ chỉ khác nhau: "已经" chỉ quá khứ gần nhất, động tác hoặc thay đổi có thể kéo dài đến hiện tại; "曾经" chỉ quá khứ xa hơn, đến nay động tác đã kết thúc, trạng thái không còn nữa. Ngoài ra, "已经" có thể chỉ thời gian tương lai, "曾经" không.', examples: [
            x('我[已经]学了两年汉语了。', 'Wǒ yǐjīng xué le liǎng nián Hànyǔ le.', 'Tôi đã học tiếng Hán hai năm rồi.', 'Hiện giờ vẫn đang học.'),
            x('我[曾经]学过两年汉语。', 'Wǒ céngjīng xué guo liǎng nián Hànyǔ.', 'Tôi từng học tiếng Hán hai năm.', 'Hiện giờ không học nữa.'),
            x('他[已经]结了婚。', 'Tā yǐjīng jié le hūn.', 'Anh ấy đã kết hôn.', 'Hiện giờ có vợ.'),
            x('他[曾经]结过婚。', 'Tā céngjīng jié guo hūn.', 'Anh ấy từng kết hôn.', 'Hiện giờ không còn vợ.'),
            x('明天的这个时候我[已经]到家了。', 'Míngtiān de zhège shíhou wǒ yǐjīng dào jiā le.', 'Giờ này ngày mai tôi đã về đến nhà.', 'Chỉ 已经 chỉ tương lai.'),
          ] },
          { formula: '已经 + 不/没  ;  不曾/未曾 + 〈动〉', title: '3. Dạng phủ định', note: '"已经" phủ định bằng cách thêm "不" hoặc "没" phía sau; "曾经" bắt buộc phải dùng "不曾" hoặc "未曾", cũng có thể dùng "曾经 + thời gian + 不/没". Dùng "没" phủ định thì sau "已经" phải có từ chỉ thời gian.', examples: [
            x('我现在[已经不]抽烟了。', 'Wǒ xiànzài yǐjīng bù chōuyān le.', 'Bây giờ tôi không hút thuốc nữa.', 'Trước đây hút, hiện không. Không nói "不已经".'),
            x('他[已经]两天没来上课了。', 'Tā yǐjīng liǎng tiān méi lái shàngkè le.', 'Anh ấy đã hai ngày không đến học.'),
            x('他18岁，[不曾](/未曾)体验过爱情。', 'Tā shíbā suì, bùcéng (/ wèicéng) tǐyàn guo àiqíng.', 'Anh 18 tuổi, chưa từng trải tình yêu.', 'Không nói "不曾经" hay "曾经没".'),
            x('他[曾经]三年没回国。', 'Tā céngjīng sān nián méi huíguó.', 'Anh từng ba năm không về nước.', 'Từng có ba năm không về.'),
          ] },
        ],
      }],
    },
    // ───────────────────────── 正在/正/在 ─────────────────────────
    {
      id: 'zhengzai', hanzi: '正在·正·在', pinyin: 'zhèngzài · zhèng · zài', title: 'Phân biệt 正在 / 正 / 在',
      intro: 'Cả ba đều biểu thị động tác đang tiến hành hoặc trạng thái đang kéo dài trong một thời điểm. Cuối câu thường có 着, 呢; "正在" thường không cần các từ đó. Cả ba đều không đi cùng "了", "过".',
      groups: [{
        patterns: [
          { formula: '正在/正/在 + 〈动〉 (+ 着/呢)', title: '1. Biểu thị đang tiến hành', note: 'Biểu thị đang tiến hành, nên không đi chung với "了", "过". Cuối câu thường có "着", "呢".', examples: [
            x('外边[正下]着雨，我们等一会儿再走吧。', 'Wàibian zhèng xià zhe yǔ, wǒmen děng yíhuìr zài zǒu ba.', 'Bên ngoài đang mưa, ta đợi chút rồi hãy đi.'),
            x('下班后，她得马上回家，孩子还[在]等着妈妈做晚饭呢。', 'Xiàbān hòu, tā děi mǎshàng huí jiā, háizi hái zài děng zhe māma zuò wǎnfàn ne.', 'Tan làm, cô phải về nhà ngay, con còn đang chờ mẹ nấu cơm.'),
            x('我去他家时，他[正在]写作业。', 'Wǒ qù tā jiā shí, tā zhèngzài xiě zuòyè.', 'Khi tôi đến nhà anh, anh đang làm bài tập.'),
          ] },
          { formula: '在 + nơi chốn (không thay bằng 正)', title: '2. "在" còn mang nghĩa nơi chốn', note: '"在" còn mang nghĩa chỉ nơi chốn, lúc đó cũng có thể đồng thời chỉ trạng thái kéo dài, nhưng không thể dùng "正" thay.', examples: [
            x('她找了半天，最后发现钥匙[在]桌子上放着呢。', 'Tā zhǎo le bàntiān, zuìhòu fāxiàn yàoshi zài zhuōzi shang fàng zhe ne.', 'Cô tìm nửa ngày, cuối cùng phát hiện chìa khóa đang đặt trên bàn.', 'Không nói "正桌子上".'),
          ] },
          { formula: '一直/经常 + 在 + 〈动〉', title: '3. Phó từ đứng trước "在"', note: 'Trước "在" có thể có phó từ như "一直", "经常"; "正在", "正" thì không.', examples: [
            x('他的发音很地道，我常听见他[在]大声朗读。', 'Tā de fāyīn hěn dìdao, wǒ cháng tīngjiàn tā zài dàshēng lǎngdú.', 'Phát âm anh rất chuẩn, tôi thường nghe anh đọc to.'),
            x('刚才我[一直在]听录音，没听见你叫我。', 'Gāngcái wǒ yìzhí zài tīng lùyīn, méi tīngjiàn nǐ jiào wǒ.', 'Vừa rồi tôi cứ nghe băng, không nghe bạn gọi.'),
          ] },
        ],
      }],
    },
    // ───────────────────────── 将(要)/快(要)/就(要) ─────────────────────────
    {
      id: 'jiang-kuai-jiu', hanzi: '将(要)·快(要)·就(要)', pinyin: 'jiāng(yào) · kuài(yào) · jiù(yào)', title: 'Phân biệt 将(要) / 快(要) / 就(要)',
      intro: 'Bốn dạng "将(要)……了", "快(要)……了", "就(要)……了", "要……了" đều diễn tả việc sắp xảy ra. Điểm phân biệt: có dùng được với từ chỉ thời gian hay không, và có thêm "了" hay không.',
      groups: [{
        patterns: [
          { formula: '将(要)/快(要)/就(要)/要 + 〈动〉 + 了', title: '1. Sắp xảy ra', note: 'Biểu thị không lâu nữa sẽ có tình huống hoặc động tác nào đó xảy ra.', examples: [
            x('儿子[将要]远行，母亲的脸上满是牵挂。', 'Érzi jiāngyào yuǎnxíng, mǔqīn de liǎn shang mǎn shì qiānguà.', 'Con trai sắp đi xa, trên mặt mẹ đầy nỗi lo.'),
            x('火车[快要]开了，我们马上就要分手了。', 'Huǒchē kuàiyào kāi le, wǒmen mǎshàng jiùyào fēnshǒu le.', 'Tàu sắp chạy rồi, chúng ta sắp chia tay.'),
          ] },
          { formula: '将 + 〈动〉 (không "了")  /  即将 + 〈动〉', title: '2. 将 thường dùng 即将, không thêm 了', note: '"将" cũng hay dùng "即将", phía sau thường không dùng "了".', examples: [
            x('儿子[即将]远行，母亲的脸上满是牵挂。', 'Érzi jíjiāng yuǎnxíng, mǔqīn de liǎn shang mǎn shì qiānguà.', 'Con trai sắp đi xa, trên mặt mẹ đầy nỗi lo.'),
          ] },
          { formula: '快/快要/就/就快要 + 〈动〉 + 了 (không thêm từ chỉ thời gian)', title: '3. 快, 快要, 就(要), 就快要: không thêm từ chỉ thời gian', note: 'Phía trước "快……了", "快要……了", "就快要……了" không được thêm từ chỉ thời gian như "马上", "立刻", "一会儿".', examples: [
            x('火车[快]开了，我们马上就要分手了。', 'Huǒchē kuài kāi le, wǒmen mǎshàng jiù yào fēnshǒu le.', 'Tàu sắp chạy, ta sắp chia tay.', 'Không nói "马上快开了".'),
            x('还有五分钟，电影[就快要]开演了。', 'Hái yǒu wǔ fēnzhōng, diànyǐng jiù kuàiyào kāiyǎn le.', 'Còn năm phút nữa phim sắp bắt đầu.'),
          ] },
          { formula: '就 + 〈动〉 (không "了")  /  就 + 〈动〉 + 了', title: '4. 就: có "了" và không "了" khác nghĩa', note: 'Phía sau "就" thường không thêm "了"; nếu có "了", nghĩa là "đã xảy ra, rất nhanh".', examples: [
            x('今天的作业我一会儿[就]做完。', 'Jīntiān de zuòyè wǒ yíhuìr jiù zuòwán.', 'Bài tập hôm nay một lát tôi làm xong.', 'Chưa làm xong.'),
            x('今天的作业我一会儿[就]做完了。', 'Jīntiān de zuòyè wǒ yíhuìr jiù zuòwán le.', 'Bài tập hôm nay một lát tôi đã làm xong.', 'Đã làm xong, rất nhanh.'),
          ] },
        ],
      }],
    },
  ],

  boards: [
    {
      id: 'zai-you-hai-ye-board', hanzi: '辨析：再、又、还、也', title: 'Phân biệt 再, 又, 还, 也',
      rows: [
        { label: 'Thời gian', text: '再: tương lai, chưa hoàn thành. 又: đã hoàn thành.', examples: [e('我没听清楚，老师[再]说一遍吧。', 'Tôi chưa nghe rõ, thầy nói lại một lần nhé.', '再 (chưa xảy ra)'), e('我没听清楚，老师[又]说了一遍。', 'Tôi chưa nghe rõ, thầy lại nói một lần nữa.', '又 (đã xảy ra)')], ps: '又 + 能愿动: biểu thị ước đoán, khả năng, có nghĩa "将要". Ví dụ: 天阴了，又要下雨了 (可能将要下雨).' },
        { label: 'Tính kéo dài', text: '还: từ quá khứ kéo dài đến nay. 再: nhấn mạnh kéo dài sang tương lai.', examples: [e('已经12点了，他[还]在学习。', 'Đã 12 giờ rồi, anh ấy còn đang học.', '还'), e('现在12点了，他[再]玩下去，明天能起床吗？', 'Bây giờ 12 giờ rồi, anh chơi tiếp thì mai dậy nổi không?', '再')] },
        { label: 'Chủ ngữ', text: '也: hai chủ ngữ khác nhau. 又: một chủ ngữ (trước đây ...), nay lại ...', examples: [e('他去，我[也]去。', 'Anh đi, tôi cũng đi.', '也'), e('他昨天去过，今天[又]去了。', 'Hôm qua anh đã đi, hôm nay lại đi.', '又')] },
        { label: 'Ngữ pháp', text: '能愿动 + 再 ; 又/还/也 + 能愿动. "再/也" dùng được trong câu cầu khiến; "又/还" thì không.', examples: [e('你休息吧，明天我会[再]来看你的。', 'Bạn nghỉ đi, mai tôi sẽ lại đến thăm bạn.'), e('路上堵车，我[又]迟到了。', 'Đường tắc xe, tôi lại đến muộn.'), e('我[还]要学习一年汉语。', 'Tôi còn phải học tiếng Hán một năm nữa.'), e('他[也]会说汉语。', 'Anh ấy cũng biết nói tiếng Hán.'), e('请你[再]说一遍。', 'Xin bạn nói lại một lần.', '(×) 请你又说一遍'), e('我们都去，你[也]去吧。', 'Chúng ta đều đi, bạn cũng đi nhé.', '(×) 你还去吧')],
          points: [{ text: 'Điểm thi: "想" là động từ năng nguyện, phải đặt sau "再" thì không đúng; "再" phải đứng sau động từ năng nguyện: 我想再去那个酒吧坐坐.', fixes: [{ wrong: '我再想去那个酒吧坐坐', right: '我想再去那个酒吧坐坐', ref: 'Kiểm tra 1 · A' }] }] },
        { label: '再 + phủ định', text: '再 + 不/没; 再 + (也) + 不/没: nhấn mạnh ngữ khí. 又不/又没: nhấn mạnh "thật sự không", "thật sự chưa". 还不/还没: nhấn mạnh "đến giờ vẫn chưa". 也不/也没: nhấn mạnh "giống người khác, không làm".', examples: [e('大学毕业后我[再(也)没]见过他。', 'Sau khi tốt nghiệp đại học tôi không còn gặp anh nữa.'), e('我们去跳舞不必叫他，他[又]不喜欢跳。', 'Chúng ta đi nhảy không cần gọi anh, anh đâu có thích nhảy.'), e('都12点了，他[还]不起床。', 'Đã 12 giờ rồi mà anh ấy vẫn chưa dậy.'), e('明天的课我[还没]预习呢。', 'Bài ngày mai tôi vẫn chưa chuẩn bị đấy.'), e('大家都不去，我[也]不想去了。', 'Mọi người đều không đi, tôi cũng không muốn đi nữa.'), e('你没看过，我[也]没看过。', 'Bạn chưa xem, tôi cũng chưa xem.')] },
        { label: 'Cấu trúc cố định', formulas: ['(即使)再……也……', '还 + 能愿动 + 再', '既……又/也……', '又……又……', '不但……(而且)也/还……', '除了……(以外)，也/还……'], examples: [e('雨下得再大，我也得去。', 'Mưa lớn mấy tôi cũng phải đi.'), e('这个电影很好，我还想再看一遍。', 'Phim này rất hay, tôi còn muốn xem thêm lần nữa.'), e('既要苦干，又要巧干。', 'Vừa phải làm chăm vừa phải làm khéo.'), e('他每天又忙工作，又忙学习，真够辛苦的。', 'Mỗi ngày anh vừa bận việc vừa bận học, thật vất vả.'), e('这儿不但风景美，而且气候也很好。', 'Ở đây không chỉ cảnh đẹp mà khí hậu cũng rất tốt.'), e('除了汉语以外，他也学过英语、法语。', 'Ngoài tiếng Hán, anh ấy cũng học tiếng Anh, tiếng Pháp.')] },
      ],
    },
    {
      id: 'cai-dou-jiu-board', hanzi: '辨析：才、都、就', title: 'Phân biệt 才, 都, 就',
      rows: [
        { label: '1. Thời gian, số lượng đặt trước', text: 'Thời gian, số lượng đặt trước, động tác đặt sau: 才 (không mong muốn, tiêu cực) / 就 (mong muốn, tích cực).', examples: [e('他12点[才]起床。', 'Anh ấy 12 giờ mới dậy.', '晚'), e('他每天6点[就]起床。', 'Mỗi ngày anh 6 giờ đã dậy.', '早'), e('我想了半天[才]想起来。', 'Tôi nghĩ nửa ngày mới nhớ ra.', '慢'), e('老师一说，我[就]明白了。', 'Thầy vừa nói là tôi hiểu ngay.', '快')], points: [{ text: 'Điểm thi: "10岁说话" là quá muộn, không thể dùng "就", phải dùng "才".', fixes: [{ wrong: '到了四岁就会说话', right: '到了四岁才会说话', ref: 'Kiểm tra 2 · D' }] }] },
        { label: '2. Thời gian, số lượng đặt sau', text: 'Thời gian, số lượng đặt sau: 才/就 (sớm, ngắn, nhỏ, ít) / 都 (muộn, dài, lớn, nhiều).', examples: [e('[才]一个小时，他就做完了所有的作业。', 'Mới một tiếng, anh đã làm xong mọi bài tập.', '短'), e('[都]两个小时了，他还没等到朋友。', 'Đã hai tiếng rồi, anh vẫn chưa đợi được bạn.', '长'), e('他[才]十岁。', 'Anh mới mười tuổi.', '小'), e('他[都]十岁了。', 'Anh đã mười tuổi rồi.', '大')] },
        { label: '3. Cách dùng cố định', text: '都……了，才……(muộn). 都……了，还……(muộn, không nên). 才……就……(sớm, nhanh). 光……就……(nhiều, dài). 只有……才……(khó). 只要……就……(dễ).', examples: [e('老师都说过五遍了，我才记住。', 'Thầy đã nói năm lần rồi, tôi mới nhớ.'), e('都10点了，你还不起床？', 'Đã 10 giờ rồi mà bạn còn chưa dậy?'), e('今天没时间玩儿，光作业就得写三个小时。', 'Hôm nay không có thời gian chơi, chỉ bài tập đã phải làm ba tiếng.'), e('学习汉语很难，只有多练习，才能掌握。', 'Học tiếng Hán khó, chỉ có luyện nhiều mới nắm được.'), e('学习汉语很有意思，只要方法好，进步就很快。', 'Học tiếng Hán rất thú vị, chỉ cần phương pháp tốt thì tiến bộ rất nhanh.'), e('全班同学中，就他通过了考试。', 'Trong cả lớp chỉ có anh thi đỗ.', '就 + chủ ngữ = "只有".')], points: [{ text: 'Điểm thi: "就" + chủ ngữ nghĩa là "只有", phải đặt trước chủ ngữ: 别人都不知道我的事情，就她一个人知道.', fixes: [{ wrong: '她就一个人知道', right: '就她一个人知道', ref: 'Kiểm tra 3 · B' }] }] },
      ],
    },
    {
      id: 'daodi-board', hanzi: '辨析：究竟、毕竟、终究、终于、到底', title: 'Phân biệt 究竟, 毕竟, 终究, 终于, 到底',
      rows: [
        { label: 'Sơ đồ nhớ', text: 'Cả năm từ chồng lên nhau: 终于 và 到底 chỉ "cuối cùng đã xảy ra"; 毕竟 và 终究 nhấn mạnh bản chất không đổi (毕竟 có thể thêm giọng nhượng bộ "让步"); 究竟 và 到底 dùng trong câu hỏi; 究竟 còn là danh từ; 终究 hướng về tương lai ("会").' },
        { label: 'Ví dụ', examples: [e('那儿死了很多人，可能出了什么事，我去看个[究竟]。', 'Ở đó chết nhiều người, có thể xảy ra chuyện gì, tôi đi xem rốt cuộc là gì.', '(到底) — 究竟 ở đây là danh từ.'), e('明天的晚会，你[究竟]参加不参加？', 'Buổi tối mai bạn rốt cuộc có tham gia không?', '(到底)'), e('学生[毕竟]是学生，总是害怕考试。', 'Học sinh rốt cuộc vẫn là học sinh, luôn sợ thi.', '(到底 / 终究)'), e('不管怎么说，你这样做[毕竟]不对。', 'Dù nói thế nào thì bạn làm như vậy rốt cuộc là không đúng.', '(究竟 / 终究 / 到底)'), e('我等了两个小时，他[终于]来了。', 'Tôi đợi hai tiếng, cuối cùng anh đã đến.', '(到底)'), e('人[终究]会死。', 'Con người rốt cuộc sẽ chết.', '(到底)')],
          points: [{ text: 'Điểm thi: "毕竟 có bao xa" là câu hỏi truy vấn, phải dùng "到底" hoặc "究竟", không dùng "毕竟".', fixes: [{ wrong: '诺贝尔奖离我们毕竟有多远', right: '诺贝尔奖离我们到底有多远', ref: 'Kiểm tra 4 · A' }] }] },
      ],
    },
    {
      id: 'cengjing-board', hanzi: '辨析：曾经、已经', title: 'Phân biệt 曾经, 已经',
      rows: [
        { label: 'Sơ đồ thời gian', text: '曾经: quá khứ xa, đã chấm dứt (đến nay không còn). 已经: quá khứ gần, còn ảnh hưởng đến nay; hoặc việc đã hoàn thành. 已经 còn dùng cho tương lai ("下个月的今天我已经工作了").', examples: [e('我曾经来过一次中国。', 'Tôi từng đến Trung Quốc một lần.', 'Giờ không phải lần đầu.'), e('我已经做完作业了。', 'Tôi đã làm xong bài tập rồi.', 'Động tác đã kết thúc.'), e('下个月的今天我已经工作了。', 'Ngày này tháng sau tôi đã đi làm rồi.', 'Chỉ tương lai.')] },
        { label: 'Phủ định', formulas: ['不(未)曾 + 〈动〉/〈形〉 + 过', '曾(经) + 时间 + 不/没', '已(经) + 不 + 〈动〉/〈形〉', '已经 + 时间 + 没 + ……了'], examples: [e('我不曾去过法国。', 'Tôi chưa từng đến Pháp.'), e('我未曾经历过浪漫的爱情。', 'Tôi chưa từng trải tình yêu lãng mạn.', '"未曾" nghiêng về văn viết.'), e('为了考上大学，他曾半年不出门，每天只是学习。', 'Để thi đỗ đại học, anh từng nửa năm không ra khỏi nhà, ngày nào cũng chỉ học.'), e('生病后，他已经不喝酒了。', 'Từ khi bệnh, anh đã không uống rượu nữa.'), e('她已经不胖了，可她还继续节食减肥。', 'Cô đã không còn béo mà vẫn tiếp tục ăn kiêng giảm cân.'), e('她已经一年没见到爸爸了。', 'Cô đã một năm không gặp bố.')] },
      ],
    },
    {
      id: 'zhengzai-board', hanzi: '辨析：正在、正、在', title: 'Phân biệt 正在, 正, 在',
      rows: [
        { label: 'Đang tiến hành', text: '正在/正/在 đều biểu thị "đang tiến hành" trong một khoảng thời gian, nên không thể đi với từ chỉ hoàn thành. Phía sau không thể có bổ ngữ kết quả, cũng không đi với "了", "过".', examples: [e('昨天我去找他，他[正]看书呢。', 'Hôm qua tôi đi tìm anh, anh đang đọc sách.'), e('A：你干什么呢？B：我[正]学习语法呢。', 'A: Bạn đang làm gì? B: Tôi đang học ngữ pháp.'), e('到家就能看到她[正在]等我呢。', 'Về nhà là thấy cô ấy đang đợi tôi.')], points: [{ text: 'Điểm thi: "还在向人们诉说过" sai vì "过". Phải là "着": 好像还在向人们诉说着它们当年的雄伟.', fixes: [{ wrong: '好像还在向人们诉说过它们当年的雄伟', right: '好像还在向人们诉说着它们当年的雄伟', ref: 'Kiểm tra 5 · C' }] }] },
        { label: 'Lỗi hay gặp', examples: [e('我正在找我的护照，我忘记放在哪儿了。(×)', 'Tôi đang tìm hộ chiếu, tôi quên để ở đâu rồi.', 'Sai: "找到" là kết quả, không đi với 正在.'), e('去年这时候，我正忙着准备毕业论文呢。', 'Thời gian này năm ngoái tôi đang bận chuẩn bị luận văn tốt nghiệp.', 'Đúng (quá khứ).')], ps: 'Khi "在" chỉ nơi chốn cũng có thể đồng thời chỉ tiến hành, hoặc dùng "正在", nhưng không thể chỉ dùng "正": 他在床上躺着看书 (在 = nơi chốn). 我去找他时，他在看书呢 (在 = đang). Công thức "正在 + 进行 + 处所": 他正在床上躺着看书。' },
      ],
    },
    {
      id: 'jiang-kuai-board', hanzi: '辨析：就要、快要、将要', title: 'Phân biệt 就要, 快要, 将要',
      rows: [
        { label: 'Bảng nhớ', text: 'Ba nhóm: 将……/将要……(了): dùng từ chỉ thời gian được. 就……了, 要……了: dùng từ chỉ thời gian được. 快……了, 快要……了, 就快要……了: phía trước không thêm từ chỉ thời gian.', examples: [e('大会将于下个月举行。', 'Đại hội sẽ tổ chức vào tháng sau.'), e('大会将要于下个月举行(了)。', 'Đại hội sắp tổ chức vào tháng sau.'), e('他下个月就要回国了。', 'Tháng sau anh sẽ về nước.'), e('还有五分钟，电影就快要开演了。', 'Còn năm phút, phim sắp bắt đầu.', 'Không nói "马上快开了".')], points: [{ text: 'Điểm thi: Dạng "就要……了" không thêm "的": nên sửa thành "它可能就要蜕皮了".', fixes: [{ wrong: '它可能就要蜕皮的了', right: '它可能就要蜕皮了', ref: 'Kiểm tra 6 · B' }] }] },
      ],
    },
  ],

  test: [
    seg(['我再想去那个酒吧坐坐，', '因为我喜欢那里的气氛，', '尤其是那几位来自菲律宾的歌手，', '更是深深地吸引了我。'], 0, '再 và động từ năng nguyện',
      '我想再去那个酒吧坐坐', '"想" là động từ năng nguyện, "再" phải đứng sau động từ năng nguyện, trước động từ: 想再去.'),
    seg(['李梅的孩子生下来就是一个弱智儿童，', '孩子的各方面发育都比同龄儿童晚，', '尤其是语言方面，', '到了四岁就会说话。'], 3, '才 và 就',
      '到了四岁才会说话', 'Ý nói chậm, muộn (không mong muốn), thời gian đặt trước động tác nên dùng "才".'),
    seg(['别人都不知道我的事情，', '她就一个人知道，', '如今泄露出来弄得满城风雨，', '你说我不找她找谁。'], 1, '就 + chủ ngữ',
      '就她一个人知道', '"就" nghĩa là "只有", phải đứng trước chủ ngữ: 就她一个人知道.'),
    seg(['诺贝尔奖离我们毕竟有多远？', '这是中国人一直以来十分关注的问题。', '前不久，一位诺贝尔物理学奖得主来北京接受记者采访时称：', '"在20年内一定会有中国本土出来的诺贝尔奖级别的工作者。"'], 0, '到底 và 毕竟',
      '诺贝尔奖离我们到底有多远', '"有多远" là câu hỏi truy vấn nên dùng "到底" hoặc "究竟", không dùng "毕竟".'),
    seg(['现在元大都城垣遗址已开辟为人们休息游览的公园，', '那高高的山坡、茂密的树林、清清的护城河，', '好像还在向人们诉说过它们当年的雄伟，', '映衬出那座古城的杰出建筑艺术。'], 2, '正在, 在 và 过',
      '好像还在向人们诉说着它们当年的雄伟', '"在" chỉ đang tiến hành, không đi với "过"; phải dùng "着".'),
    seg(['当你看到蚕不吃不动的时候，', '它可能就要蜕皮的了。', '请你仔细观察蚕蜕皮后有什么变化，', '并记录蜕皮的次数和日期。'], 1, '就要……了',
      '它可能就要蜕皮了', '"就要……了" chỉ sắp xảy ra, giữa không thêm "的".'),
  ],

  exam: [
    sen(['只有创新才是未来的绝对优势。', '平行四边形是两组对边分别平行的四边形。', '自古英雄多磨难，挫折和失败往往是成功者的摇篮。', '在发展中国家，化肥对提高农产品的产量起了重要作用，也中国不例外。'], 3, 'Vị trí của 也',
      '中国也不例外', '"也" phải đặt sau chủ ngữ, trước vị ngữ: 中国也不例外.'),
    sen(['灾区重建工作都正在按部就班地进行，一切进展顺利。', '从普通朋友到至亲，都必须相互尊重，没有相互尊重就容易发生矛盾。', '据报告说，该公司第四季度盈利达18.6亿元，远远超出了分析人士此前的预期。', '据初步估计，中国风能总储量约为16亿千瓦，其中可利用的就有10%。'], 0, '正在 và 都',
      '灾区重建工作都在按部就班地进行', '"正在" và "正" trước phải không có phó từ, "在" thì được. Sửa: "灾区重建工作都在按部就班地进行" hoặc "灾区重建工作正在按部就班地进行".'),
    sen(['孟子名轲，是继孔子之后的又一位儒学大师。', '人真正的使命是生活，而不是单纯地活着。', '这儿的冬天一点儿也不冷，下雪天更是罕见。', '听说林芳搬家了，我以为以后就难再见到她了，没想到仅仅一个月以后，我再见到了她。'], 3, '再 và 又',
      '我又见到了她', '"再" chỉ việc sẽ lặp lại, "又" chỉ việc đã lặp lại. Việc đã xảy ra phải dùng "又".'),
    sen(['毛主席说："我们的目的一定要达到，我们的目的一定能够达到。"', '中国是茶叶大国，其中的一个表现就是茶的品种特别多。', '人到了中年，对成功有了理性的认识。到了这个年龄，就应该清楚自己真正想要的毕竟是什么了。', '关于手机是否影响健康的争论其实一直都未真正停止过，论辩双方似乎都有着确凿的证据。'], 2, '究竟 và 毕竟',
      '就应该清楚自己真正想要的究竟是什么了', '"究竟" dùng trong câu hỏi để truy vấn; "毕竟" không dùng được. Nhầm "究竟" và "毕竟".'),
    sen(['营养学家认为青虾肉质细嫩鲜美、营养丰富，有一定的补脑功能。', '过去的成功只代表他曾经辉煌过，并不代表他会一直辉煌。', '省长在接受记者采访时表示，所有的善款，哪怕是一元钱，我们都在人民网上进行了公示，接受社会的监督。', '尽管春运期间火车票仍然短缺，但根据目前的趋势，一票难求的现象终于会有结束的一天。'], 3, '终于 và 终究',
      '一票难求的现象终究会有结束的一天', '"终于" chỉ kết quả đã xảy ra; còn đây là điều chưa xảy ra, hiện chưa có kết quả, nên phải dùng "终究".'),
    sen(['世界总是一样的，只是我们的心情和遭遇不一样而已。', '我们为自己设定了目标，只要有信念和毅力，就能实现它。', '经济增长是指一个国家或地区的物质产品和服务的持续增加，它意味着经济规模的扩大和生产能力的提高。', '我从上海回来已经三天了，去上海之前我已经担心不能再见到您，回来后听说您还在中国，所以今天专程赶来看望您。'], 3, '已经 và 曾经',
      '我曾经担心不能再见到您', '"担心" là trạng thái đã kết thúc, không dùng "已经", có thể dùng "曾经".'),
    sen(['从根本上说，内心丑恶的人是不美的，而外貌不美却可以通过美的心灵和行为加以弥补。', '成功固然可喜，失败也未必可悲，关键是要从中吸取教训。', '避孕是中国古代社会的一种习俗，也是一种特有的文化现象。', '从孔雀舞到云南印象系列，还到西藏系列，作为一名舞蹈家，杨丽萍对艺术创作的追求、创新从未停止过。'], 3, 'Cấu trúc "从……到……再到……"',
      '从孔雀舞到云南印象系列，再到西藏系列', '"还" biểu thị thêm tình huống khác; câu muốn nói loại hình múa khác nhau phải dùng cấu trúc cố định "从……到……再到……".'),
    sen(['成功的喜悦促使人们充分挖掘自己的潜能去克服一切困难，进而达到目标。', '华罗庚14岁时就开始自学数学，每天坚持10个小时。', '两天之内完成任务不仅仅对你是个挑战，对我们还是个挑战，只要我们齐心协力、努力克服困难，就能按时完成。', '一个人能征服世界，并不伟大；能征服自己，才是世界上最伟大的人。'], 2, 'Lặp lại với đối tượng khác',
      '不仅仅对你是个挑战，对我们也是个挑战', 'Đối tượng khác nhau, cùng một tình huống: dùng "也", không dùng "还".'),
    sen(['成功需要成本，时间也是一种成本，对时间的珍惜就是对成本的节约。', '如果你想筹集资金，艺术品是很难迅速出手的，究竟全球的艺术品市场还是比较小的，精明的收藏家只出价购买稀有作品。', '大气不是绝对透明的，所以我们在地面透过它来看星星，就会感觉星星好像在闪烁。', '在烈日炎炎的夏天，除了防晒霜、太阳镜这些防晒用品，很多食物也具有防晒功能。'], 1, 'Nhầm 究竟 và 毕竟',
      '毕竟全球的艺术品市场还是比较小的', 'Từ khóa "是……的" nhấn mạnh bản chất "市场小", nên dùng "毕竟", không dùng "究竟".'),
    sen(['我的父亲是一家报社的副刊部主任，他曾经出过一本中篇小说集。', '你努力了，不见得能得到你想要的成功。但在努力的过程中，你一定会有所收获。', '古人云："三思而后行。"这是教我们做事不能太鲁莽，做任何事情都要想好了再去做。', '如果教师能够把小游戏融入到教学中，就不仅能让学生在玩中学到知识，让学生发挥自己的充分想象力，还能调动学生学习的积极性。'], 3, 'Tính từ miêu tả động tác',
      '让学生充分发挥自己的想象力', '"充分" miêu tả động tác "发挥", nên làm trạng ngữ trước động từ.'),
    sen(['蜜蜂能够随时辨别太阳的方位，以此来确定自身运动的方向，从而准确无误地找到蜜源。', '自由职业是一种全新的生活方式，最大的特点就是可以自由安排自己的时间，没有那么多的制度规定。', '在2008年的奥运会上，菲尔普斯打破世界纪录屡次，不可思议地一人独得8枚金牌，开创了奥运会的历史。', '代沟是指两代人因价值观念、思维方式、行为方式、道德标准等方面的不同而产生的思想与行为的差异。'], 2, 'Vị trí phó từ 屡次',
      '菲尔普斯屡次打破世界纪录', '"屡次" là phó từ chỉ "rất nhiều lần", phải đứng trước động từ.'),
    sen(['感冒是由病毒引起的，病症通常要持续两三天，逐渐在其后的三到七天内减退。冬季是感冒的高发季，在这个季节里，以风寒感冒和风热感冒居多。', '最早的冰制冷饮起源于中国，制造冰激凌的方法直到13世纪才被意大利的旅行家马可·波罗带到意大利。', '青藏铁路即将迎来全线通车运营一周年。一年来，这条雪域"天路"的沿线生态环境状况一直备受关注。', '据科学家们预计，目前世界上已探明的石油储量将于2020年左右被采尽，人类将面临能源危机的挑战。'], 0, 'Vị trí của 逐渐',
      '在其后的三到七天内逐渐减退', '"逐渐" là phó từ tình trạng, miêu tả sự thay đổi của động tác, phải đứng trước động từ.'),
    sen(['幸福总围绕在别人身边，烦恼总纠缠在自己心里。这是大多数人对幸福和烦恼的理解。', '丽江古城位于中国西南部云南省的丽江市，它是中国历史文化名城中唯一没有城墙的古城。', '终年冰封的极地地区，到处都是一片白茫茫的雪原，风几乎成年累月正在呼叫着，气温经常降到零下十几度。', '每个人都渴望成功，成功能让我们看到自己的社会价值。但是，冰冻三尺非一日之寒，没有人能随随便便成功。'], 2, '正在 và 在',
      '风几乎成年累月(都)在呼叫着', '"正在", "正" phía trước không thể có phó từ; phải dùng "在".'),
    sen(['中国是世界上老年人口最多的国家。目前中国60岁以上的老年人已达到1.4亿，占全球老年人口总量的1/5。', '随着"娱乐时代"的来临，普遍人们关注主持人，主持人这个职业也成为越来越多的年轻人的选择，然而并不是每个人都适合做主持人。', '书信作为中国人传统的情感沟通交流方式存在了几千年。然而，随着时代的变迁和技术的进步，手写书信却与现代人渐行渐远。', '景德镇制瓷业从五代到清代历经千年而长盛不衰，它集历代名窑之大成，以精湛的制瓷技艺，当之无愧地成为中国陶瓷最杰出的代表。'], 1, 'Vị trí của 普遍',
      '人们普遍关注主持人', '"普遍" là phó từ, không đứng trước danh từ chủ ngữ, phải đặt trước động từ.'),
    sen(['自然界里，行动缓慢的动物寿命往往较长，从科学角度分析，是因为它们消耗少、新陈代谢慢，从而节省了能量。', '在"八小时之外"，假如能习惯性地坐下来多读几页书，多考虑一些问题，其他的应酬自然会减少许多。', '星期六，我本来想美美地睡一个懒觉，谁知一大早电话铃就响了，只好我痛苦地从被窝里爬出来，拿起话筒，没想到竟是对方打错了。', '在日常的教学中，对那些长期受到表扬的学生，不妨设置一点小小的障碍，施以"挫折教育"，几经锻炼，其心理会更加成熟，心理承受能力会更强。'], 2, 'Vị trí của 只好',
      '我只好痛苦地从被窝里爬出来', '"只好" là phó từ, không đứng trước chủ ngữ, phải đặt trước động từ.'),
  ],
}
