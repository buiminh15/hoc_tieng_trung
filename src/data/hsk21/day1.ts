import type { DayContent, ErrQ } from './types'

/**
 * Tuần 1 · Thứ Hai: Bổ ngữ kết quả, bổ ngữ giới-tân, bổ ngữ xu hướng (结果补语 介宾补语 趋向补语).
 * Theo sách trang 2–16. Phần dịch tiếng Việt và pinyin do app tự thêm.
 */

const seg = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'segment', parts, answer, topic, fix, why })
const sen = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'sentence', parts, answer, topic, fix, why })

export const day1: DayContent = {
  intro:
    'Ngày đầu tiên đã gặp mấy thuật ngữ ngữ pháp, có bạn bắt đầu sợ. Đừng lo nghĩ nhiều, và nhất là đừng đi tra sách ngữ pháp. Điều quan trọng không phải là khái niệm, mà là bạn nói đúng một câu tiếng Hán và làm đúng một câu đề HSK như thế nào. Cứ yên tâm học từng bước, hai tiếng nữa bạn sẽ tự thấy rõ.',

  focusTitle: 'Ba loại bổ ngữ hôm nay',
  anatomyTitle: 'Bổ ngữ nằm ở đâu trong câu?',
  anatomyLead: 'Trật tự câu tiếng Hán khá cố định, chỉ có vị trí bổ ngữ là không cố định: lúc trước tân ngữ, lúc sau tân ngữ. Đây là chỗ nhiều người nói sai và là một trọng điểm ra đề của HSK 6. Vì vậy cả tuần này bắt đầu từ bổ ngữ.',

  anatomy: [
    { label: 'Câu cơ bản: chủ ngữ + vị ngữ + tân ngữ', chunks: [['妹妹', '主'], ['喜欢', '谓'], ['音乐', '宾']] },
    { label: 'Định ngữ bổ nghĩa cho chủ ngữ hoặc tân ngữ', chunks: [['我的', '定'], ['妹妹', '主'], ['喜欢', '谓'], ['古典', '定'], ['音乐', '宾']] },
    { label: 'Trạng ngữ bổ nghĩa cho vị ngữ', chunks: [['我的', '定'], ['妹妹', '主'], ['从16岁开始就', '状'], ['喜欢', '谓'], ['古典', '定'], ['音乐', '宾']] },
    { label: 'Bổ ngữ bổ sung cho vị ngữ: có loại chỉ đứng sau vị ngữ, trước tân ngữ', chunks: [['从16岁开始，', '状'], ['我的', '定'], ['妹妹', '主'], ['喜欢', '谓'], ['上了', '补'], ['古典', '定'], ['音乐', '宾']] },
    { label: 'Có loại bổ ngữ chỉ đứng sau tân ngữ', chunks: [['我的', '定'], ['妹妹', '主'], ['喜欢', '谓'], ['古典', '定'], ['音乐', '宾'], ['喜欢得不得了', '补']] },
  ],

  sections: [
    // ───────────────────────── 结果补语 ─────────────────────────
    {
      id: 'jieguo', hanzi: '结果补语', pinyin: 'jiéguǒ bǔyǔ', title: 'Bổ ngữ kết quả',
      intro: 'Bổ ngữ kết quả cho biết kết quả mà động tác tạo ra. Nó do động từ hoặc tính từ đảm nhiệm và đứng ngay sau động từ chính của câu. Động từ làm bổ ngữ kết quả thường là một âm tiết; tính từ thì một hoặc hai âm tiết đều được.',
      groups: [{
        patterns: [
          {
            formula: '〈动〉 + 完 / 见 / 到 / 着',
            note: 'Chú ý 着 đọc zháo khi làm bổ ngữ kết quả. Ngoài 睡着 (ngủ thiếp đi), 点着 (châm cháy), 烧着 (đốt cháy) ra, 着 đều dùng như 到: 找着 = 找到, 吃着 = 吃到, 买着 = 买到, 听着 = 听到.',
            examples: [
              { h: '我[做完]了作业。', p: 'Wǒ zuòwán le zuòyè.', vi: 'Tôi làm xong bài tập rồi.' },
              { h: '我[听见]外边有人叫我。', p: 'Wǒ tīngjiàn wàibian yǒu rén jiào wǒ.', vi: 'Tôi nghe thấy bên ngoài có người gọi tôi.' },
              { h: '我在书店[看到]了一本好书。', p: 'Wǒ zài shūdiàn kàndào le yì běn hǎo shū.', vi: 'Tôi thấy một cuốn sách hay ở hiệu sách.' },
              { h: '他不知不觉[睡着]了。', p: 'Tā bùzhī-bùjué shuìzháo le.', vi: 'Anh ấy ngủ thiếp đi lúc nào không hay.' },
              { h: '我在书店[买着]了一本好书。', p: 'Wǒ zài shūdiàn mǎizháo le yì běn hǎo shū.', vi: 'Tôi mua được một cuốn sách hay ở hiệu sách.', note: 'Cũng có thể nói 买到.' },
            ],
          },
          {
            formula: '〈动〉 + 上 / 成',
            note: '上 thường chỉ việc nhờ nỗ lực mà đạt được một mục đích không dễ; cũng có thể chỉ thêm vào hoặc sinh ra kết quả. 成 nghĩa là "thành công", nên thường nói về việc động tác có thực hiện được hay không.',
            examples: [
              { h: '农民们[住上]了高楼，[开上]了汽车，[用上]了电脑。', p: 'Nóngmínmen zhùshàng le gāolóu, kāishàng le qìchē, yòngshàng le diànnǎo.', vi: 'Nông dân đã được ở nhà cao tầng, lái ô tô, dùng máy tính.' },
              { h: '院子里应该[种上]几棵树。', p: 'Yuànzi lǐ yīnggāi zhòngshàng jǐ kē shù.', vi: 'Trong sân nên trồng thêm vài cái cây.' },
              { h: '你别忘了[贴上]邮票。', p: 'Nǐ bié wàng le tiēshàng yóupiào.', vi: 'Bạn đừng quên dán tem.' },
              { h: '两个人每天在一起，日久生情，他[爱上]了她，她也[喜欢上]了他。', p: 'Liǎng ge rén měi tiān zài yìqǐ, rìjiǔ-shēngqíng, tā àishàng le tā, tā yě xǐhuanshàng le tā.', vi: 'Hai người ngày nào cũng bên nhau, lâu ngày sinh tình: anh yêu cô, cô cũng thích anh.' },
              { h: '昨天小王的生日晚会，我因为加班[没去成]。', p: 'Zuótiān Xiǎo Wáng de shēngrì wǎnhuì, wǒ yīnwèi jiābān méi qùchéng.', vi: 'Tiệc sinh nhật Tiểu Vương hôm qua, tôi tăng ca nên không đi được.' },
              { h: '我按照菜谱终于[做成]了宫保鸡丁。', p: 'Wǒ ànzhào càipǔ zhōngyú zuòchéng le gōngbǎo jīdīng.', vi: 'Theo công thức, cuối cùng tôi cũng làm được món gà Cung Bảo.' },
            ],
          },
          {
            formula: '〈动〉 + 走 / 开 / 动 / 住',
            note: '走: rời đi, đi xa. 开: tách ra hoặc rời ra một khoảng ngắn. 动: di chuyển được, hoặc đủ sức (không đủ sức) làm. 住: động tác khiến sự vật dừng lại, giữ chặt.',
            examples: [
              { h: '朋友[借走]了我的书。', p: 'Péngyou jièzǒu le wǒ de shū.', vi: 'Bạn mượn mang đi cuốn sách của tôi.' },
              { h: '公共汽车刚刚[开走]了。', p: 'Gōnggòng qìchē gānggāng kāizǒu le.', vi: 'Xe buýt vừa chạy mất rồi.' },
              { h: '我给朋友的圣诞卡还[没寄走]。', p: 'Wǒ gěi péngyou de shèngdànkǎ hái méi jìzǒu.', vi: 'Thiệp Giáng sinh gửi bạn tôi vẫn chưa gửi đi.' },
              { h: '他在这儿看了一会儿，又[跑开]了。', p: 'Tā zài zhèr kàn le yíhuìr, yòu pǎokāi le.', vi: 'Anh ấy đứng xem ở đây một lúc rồi lại chạy đi.' },
              { h: '我们[搬开]桌椅打扫一下儿。', p: 'Wǒmen bānkāi zhuōyǐ dǎsǎo yíxiàr.', vi: 'Chúng ta dọn bàn ghế ra để quét dọn một chút.' },
              { h: '这些家具都[挪动]了位置。', p: 'Zhèxiē jiājù dōu nuódòng le wèizhi.', vi: 'Mấy món đồ này đều bị xê dịch chỗ.' },
              { h: '我[咬不动]牛排。', p: 'Wǒ yǎobudòng niúpái.', vi: 'Tôi cắn không nổi miếng bít tết.' },
              { h: '听见叫声，他[停住]了脚步。', p: 'Tīngjiàn jiàoshēng, tā tíngzhù le jiǎobù.', vi: 'Nghe tiếng gọi, anh ấy dừng bước.' },
              { h: '你一定要[记住]这件事。', p: 'Nǐ yídìng yào jìzhù zhè jiàn shì.', vi: 'Bạn nhất định phải nhớ kỹ chuyện này.' },
              { h: '我终于[抓住]了机会。', p: 'Wǒ zhōngyú zhuāzhù le jīhuì.', vi: 'Cuối cùng tôi cũng nắm được cơ hội.' },
            ],
          },
          {
            formula: '〈动〉 + 好 / 对 / 错',
            note: 'Tính từ cũng làm được bổ ngữ kết quả. Nghĩa của tính từ chính là kết quả của động tác.',
            examples: [
              { h: '我和朋友[说好]了周末去郊游。', p: 'Wǒ hé péngyou shuōhǎo le zhōumò qù jiāoyóu.', vi: 'Tôi và bạn đã hẹn xong cuối tuần đi dã ngoại.' },
              { h: '这道题我们都[做对]了。', p: 'Zhè dào tí wǒmen dōu zuòduì le.', vi: 'Câu này chúng tôi đều làm đúng.' },
              { h: '你[写错]了号码。', p: 'Nǐ xiěcuò le hàomǎ.', vi: 'Bạn viết sai số rồi.' },
            ],
          },
          {
            formula: '〈动〉 + 清楚 / 干净',
            note: '干净 làm bổ ngữ kết quả, ngoài nghĩa "sạch, không bẩn" còn có nghĩa "không còn chút nào", tương đương 没了, 光了.',
            examples: [
              { h: '我的手机信号不好，没[听清楚]你说什么。', p: 'Wǒ de shǒujī xìnhào bù hǎo, méi tīngqīngchu nǐ shuō shénme.', vi: 'Điện thoại tôi sóng kém, không nghe rõ bạn nói gì.' },
              { h: '房间[打扫干净]了。', p: 'Fángjiān dǎsǎo gānjìng le.', vi: 'Phòng đã quét dọn sạch sẽ.' },
              { h: '以前学的内容都快[忘干净]了。', p: 'Yǐqián xué de nèiróng dōu kuài wànggānjìng le.', vi: 'Những gì học trước đây sắp quên sạch rồi.', note: 'Cũng có thể nói 忘光了.' },
            ],
          },
        ],
      }],
    },

    // ───────────────────────── 介宾补语 ─────────────────────────
    {
      id: 'jiebin', hanzi: '介宾补语', pinyin: 'jièbīn bǔyǔ', title: 'Bổ ngữ giới-tân',
      intro: 'Cụm giới từ (giới từ + tân ngữ) thường đứng trước động từ làm trạng ngữ, nhưng một số ít có thể đứng sau động từ làm bổ ngữ, bổ sung thời gian, nơi chốn, nguồn gốc, đối tượng, phương hướng hoặc kết quả của động tác. Một vài giới từ (như 于) còn đứng được sau tính từ. Các giới từ dùng trong bổ ngữ giới-tân: 在、到、给、成、为、向、往、自、于.',
      groups: [{
        patterns: [
          {
            formula: '〈动〉 + 在 / 到 / 成 / 为 + 〈宾〉',
            note: 'Tân ngữ của 在 và 到 phần lớn là từ chỉ nơi chốn hoặc thời gian; sau 成 và 为 phần lớn là sự vật.',
            examples: [
              { h: '这件事[发生在] 1980 年。', p: 'Zhè jiàn shì fāshēng zài yī jiǔ bā líng nián.', vi: 'Việc này xảy ra năm 1980.' },
              { h: '鲁迅先生的故居[坐落在]阜成门的一个小胡同内。', p: 'Lǔ Xùn xiānsheng de gùjū zuòluò zài Fùchéngmén de yí ge xiǎo hútòng nèi.', vi: 'Nhà cũ của Lỗ Tấn nằm trong một ngõ nhỏ ở Phụ Thành Môn.' },
              { h: '他把我[送到]家。', p: 'Tā bǎ wǒ sòngdào jiā.', vi: 'Anh ấy đưa tôi về đến nhà.' },
              { h: '他每天[学到]凌晨。', p: 'Tā měi tiān xuédào língchén.', vi: 'Ngày nào anh ấy cũng học đến rạng sáng.' },
              { h: '玛丽常把左[读成]右。', p: 'Mǎlì cháng bǎ zuǒ dúchéng yòu.', vi: 'Mary hay đọc "trái" thành "phải".' },
              { h: '人们还是会把好的成绩[看成]优秀的标准。', p: 'Rénmen háishi huì bǎ hǎo de chéngjì kànchéng yōuxiù de biāozhǔn.', vi: 'Người ta vẫn coi thành tích tốt là tiêu chuẩn của xuất sắc.' },
              { h: '杭州西湖美景如画，被人们[称为]天堂。', p: 'Hángzhōu Xīhú měijǐng rú huà, bèi rénmen chēngwéi tiāntáng.', vi: 'Tây Hồ Hàng Châu đẹp như tranh, được người ta gọi là thiên đường.' },
            ],
          },
          {
            formula: '〈动〉 + 给 + 〈宾〉',
            note: 'Tân ngữ của 给 thường là người, cũng có thể là địa điểm gắn với người, như 办公室 (văn phòng), 图书馆 (thư viện).',
            examples: [
              { h: '我的自行车[借给]朋友了。', p: 'Wǒ de zìxíngchē jiègěi péngyou le.', vi: 'Xe đạp của tôi cho bạn mượn rồi.' },
              { h: '我的调查报告[交给]办公室了。', p: 'Wǒ de diàochá bàogào jiāogěi bàngōngshì le.', vi: 'Báo cáo khảo sát của tôi đã nộp cho văn phòng.' },
              { h: '这本书明天要[还给]图书馆。', p: 'Zhè běn shū míngtiān yào huángěi túshūguǎn.', vi: 'Cuốn sách này mai phải trả cho thư viện.' },
            ],
          },
          {
            formula: '〈动〉 + 向 / 往 + 〈宾〉',
            note: 'Tân ngữ của 向 và 往 phần nhiều là từ chỉ phương hướng, nơi chốn, nhất là tên nước, tên vùng. Riêng sau 向 đôi khi là người, hoặc danh từ khá trừu tượng.',
            examples: [
              { h: '飞机[飞往]东京。', p: 'Fēijī fēiwǎng Dōngjīng.', vi: 'Máy bay bay đi Tokyo.' },
              { h: '这些农产品[销往]世界各地。', p: 'Zhèxiē nóngchǎnpǐn xiāowǎng shìjiè gèdì.', vi: 'Nông sản này bán đi khắp thế giới.' },
              { h: '救援队被[派往]灾区。', p: 'Jiùyuánduì bèi pàiwǎng zāiqū.', vi: 'Đội cứu hộ được cử đến vùng thiên tai.' },
              { h: '火车[开向]南方。', p: 'Huǒchē kāixiàng nánfāng.', vi: 'Tàu chạy về phương Nam.' },
              { h: '我们[走向]未来。', p: 'Wǒmen zǒuxiàng wèilái.', vi: 'Chúng ta bước tới tương lai.' },
              { h: '人们的目光都[转向]他。', p: 'Rénmen de mùguāng dōu zhuǎnxiàng tā.', vi: 'Ánh mắt mọi người đều hướng về anh ấy.' },
            ],
          },
          {
            formula: '〈动〉 + 自 + 〈宾〉',
            note: 'Động từ ở đây thường là một âm tiết. Tân ngữ sau 自 phần nhiều chỉ thời gian, nơi chốn, có khi khá trừu tượng. Dùng nhiều trong văn viết.',
            examples: [
              { h: '我[来自]美国。', p: 'Wǒ láizì Měiguó.', vi: 'Tôi đến từ Mỹ.' },
              { h: '这种优质的大米[产自]东北地区。', p: 'Zhè zhǒng yōuzhì de dàmǐ chǎnzì Dōngběi dìqū.', vi: 'Loại gạo ngon này sản xuất ở vùng Đông Bắc.' },
              { h: '过年的习俗[源自]何时何处很难查考。', p: 'Guònián de xísú yuánzì héshí héchù hěn nán chákǎo.', vi: 'Tục ăn Tết bắt nguồn từ khi nào, ở đâu rất khó tra cứu.' },
              { h: '这幅《八骏图》[出自]著名画家徐悲鸿之手。', p: 'Zhè fú "Bā Jùn Tú" chūzì zhùmíng huàjiā Xú Bēihóng zhī shǒu.', vi: 'Bức "Bát Tuấn Đồ" này do họa sĩ nổi tiếng Từ Bi Hồng vẽ.' },
              { h: '赞美应[发自]内心。', p: 'Zànměi yīng fāzì nèixīn.', vi: 'Lời khen nên xuất phát từ đáy lòng.' },
            ],
          },
          {
            formula: '〈动 / 形〉 + 于 + 〈宾〉',
            note: '于 dùng nhiều trong văn viết, tùy câu mà tương đương 在, 从, 跟, 比, 对. Đây là giới từ duy nhất trong nhóm đứng được sau tính từ (高于, 不同于).',
            examples: [
              { tag: '于 = 在', h: '中华人民共和国[成立于] 1949 年。', p: 'Zhōnghuá Rénmín Gònghéguó chénglì yú yī jiǔ sì jiǔ nián.', vi: 'Nước Cộng hòa Nhân dân Trung Hoa thành lập năm 1949.' },
              { tag: '于 = 在', h: '龙井茶[闻名于]世。', p: 'Lóngjǐng chá wénmíng yú shì.', vi: 'Trà Long Tỉnh nổi tiếng khắp thế giới.' },
              { tag: '于 = 从', h: '他[毕业于]名牌大学。', p: 'Tā bìyè yú míngpái dàxué.', vi: 'Anh ấy tốt nghiệp từ một đại học danh tiếng.' },
              { tag: '于 = 从', h: '黄河[发源于]青海。', p: 'Huáng Hé fāyuán yú Qīnghǎi.', vi: 'Hoàng Hà bắt nguồn từ Thanh Hải.' },
              { tag: '于 = 跟', h: '老师的年龄[相当于]我的两倍。', p: 'Lǎoshī de niánlíng xiāngdāng yú wǒ de liǎng bèi.', vi: 'Tuổi của thầy gấp đôi tuổi tôi.' },
              { tag: '于 = 跟', h: '他的观点[不同于]其他同学。', p: 'Tā de guāndiǎn bùtóng yú qítā tóngxué.', vi: 'Quan điểm của cậu ấy khác với các bạn khác.' },
              { tag: '于 = 比', h: '今年的物价明显[高于]去年。', p: 'Jīnnián de wùjià míngxiǎn gāo yú qùnián.', vi: 'Giá cả năm nay cao hơn hẳn năm ngoái.' },
              { tag: '于 = 比', h: '这座写字楼[高于] 400 米。', p: 'Zhè zuò xiězìlóu gāo yú sì bǎi mǐ.', vi: 'Tòa văn phòng này cao hơn 400 mét.' },
              { tag: '于 = 对', h: '运动[有利于]健康。', p: 'Yùndòng yǒulì yú jiànkāng.', vi: 'Vận động có lợi cho sức khỏe.' },
              { tag: '于 = 对', h: '这种方法[有助于]提高学习效率。', p: 'Zhè zhǒng fāngfǎ yǒuzhù yú tígāo xuéxí xiàolǜ.', vi: 'Phương pháp này giúp nâng cao hiệu quả học tập.' },
            ],
          },
        ],
      }],
    },

    // ───────────────────────── 趋向补语 ─────────────────────────
    {
      id: 'quxiang', hanzi: '趋向补语', pinyin: 'qūxiàng bǔyǔ', title: 'Bổ ngữ xu hướng',
      intro: 'Bổ ngữ xu hướng đơn: động từ + 来/去, hoặc động từ + 上/下/进/出/回/过/起/到. Bổ ngữ xu hướng kép: (động từ hoặc tính từ +) 上/下/进/出/回/过/起/到 + 来/去. Bảng dưới là toàn bộ các tổ hợp kép, lưu ý không có 起去.',
      table: {
        head: ['', '上', '下', '进', '出', '回', '过', '起', '到'],
        rows: [
          ['来', '上来', '下来', '进来', '出来', '回来', '过来', '起来', '到……来'],
          ['去', '上去', '下去', '进去', '出去', '回去', '过去', '—', '到……去'],
        ],
      },
      groups: [
        {
          title: 'Quy tắc đặt tân ngữ',
          patterns: [
            {
              formula: '〈动〉 + 〈宾〉 + 来 / 去　hoặc　〈动〉 + 来 / 去 + 〈宾〉',
              title: 'Tân ngữ là danh từ thường: trước hay sau 来/去 đều được',
              note: 'Với danh từ thông thường, tân ngữ đặt trước hay sau 来/去 đều đúng.',
              examples: [
                { h: '我[买来]了两斤水果。', p: 'Wǒ mǎilái le liǎng jīn shuǐguǒ.', vi: 'Tôi mua về hai cân hoa quả.', note: 'Cũng có thể nói 我买了两斤水果来.' },
                { h: '他们[搬进]一张桌子[来]。', p: 'Tāmen bānjìn yì zhāng zhuōzi lái.', vi: 'Họ khiêng một cái bàn vào.', note: 'Cũng có thể nói 他们搬进来一张桌子.' },
              ],
            },
            {
              formula: '〈动〉 + 〈宾〉 + 来 / 去',
              title: 'Động tác chưa xảy ra: tân ngữ thường đứng trước 来/去',
              note: 'Khi động tác còn chưa diễn ra (sắp, muốn, sẽ…), ta thường chỉ dùng dạng động từ + tân ngữ + 来/去.',
              examples: [
                { h: '晚上朋友聚会，我想[带]一些巧克力[去]。', p: 'Wǎnshang péngyou jùhuì, wǒ xiǎng dài yìxiē qiǎokèlì qù.', vi: 'Tối nay họp mặt bạn bè, tôi muốn mang ít sô-cô-la đi.' },
                { h: '周末妈妈会[打]电话[来]。', p: 'Zhōumò māma huì dǎ diànhuà lái.', vi: 'Cuối tuần mẹ sẽ gọi điện đến.' },
              ],
            },
            {
              formula: '〈动〉 + 来 / 去 + 〈宾〉',
              title: 'Tân ngữ trừu tượng: chỉ đứng sau 来/去',
              note: 'Tân ngữ chỉ sự vật trừu tượng (khó khăn, ấm áp, hy vọng…) chỉ được đặt sau 来/去.',
              examples: [
                { h: '语言不通，会[带来]很多困难。', p: 'Yǔyán bù tōng, huì dàilái hěn duō kùnnan.', vi: 'Bất đồng ngôn ngữ sẽ mang lại nhiều khó khăn.' },
                { h: '希望这封信能给你[带去]一些温暖。', p: 'Xīwàng zhè fēng xìn néng gěi nǐ dàiqù yìxiē wēnnuǎn.', vi: 'Mong lá thư này mang đến cho bạn chút ấm áp.' },
              ],
            },
            {
              formula: '〈动〉 + 〈处所〉 + 来 / 去',
              title: 'Tân ngữ chỉ nơi chốn: nhất định đứng trước 来/去',
              note: 'Đây là quy tắc hay bị hỏi nhất trong đề thi: nơi chốn (房间, 教室, 国, 山, 美国…) luôn đứng trước 来/去, không bao giờ đứng sau.',
              examples: [
                { h: '外边很冷，你们都[进]房间[去]吧。', p: 'Wàibian hěn lěng, nǐmen dōu jìn fángjiān qù ba.', vi: 'Ngoài trời lạnh lắm, các bạn vào phòng đi.' },
                { h: '老师[走进]教室[来]。', p: 'Lǎoshī zǒujìn jiàoshì lái.', vi: 'Thầy giáo bước vào lớp.' },
                { h: '他[回]国[去]了。', p: 'Tā huí guó qù le.', vi: 'Anh ấy về nước rồi.' },
              ],
            },
            {
              formula: '〈动〉 + 趋向动词 + 〈宾〉 + 来 / 去',
              title: 'Động từ ly hợp: phần danh từ đứng trước 来/去',
              note: 'Với động từ ly hợp (聊天, 低头, 鼓掌, 唱歌, 下雨…), phần danh từ phải tách ra và đặt trước 来/去.',
              examples: [
                { h: '他俩一见面就没完没了地[聊起]天儿[来]。', p: 'Tā liǎ yí jiànmiàn jiù méiwán-méiliǎo de liáoqǐ tiānr lái.', vi: 'Hai người vừa gặp nhau là trò chuyện không dứt.' },
                { h: '她不好意思地[低下]头[去]。', p: 'Tā bù hǎoyìsi de dīxià tóu qù.', vi: 'Cô ấy ngượng ngùng cúi đầu xuống.' },
              ],
            },
            {
              formula: '〈动〉 + 〈宾〉 + 趋向补语',
              title: 'Câu mệnh lệnh, yêu cầu: tân ngữ có thể chen giữa động từ và bổ ngữ',
              note: 'Khi ra lệnh hoặc yêu cầu, tân ngữ cũng có thể đặt giữa động từ và bổ ngữ xu hướng.',
              examples: [
                { h: '我渴死了，快[倒]水[来]。', p: 'Wǒ kě sǐ le, kuài dào shuǐ lái.', vi: 'Tôi khát chết mất, mau rót nước đến đây.' },
                { h: '你们[搬]一张桌子[进来]！', p: 'Nǐmen bān yì zhāng zhuōzi jìnlái!', vi: 'Các cậu khiêng một cái bàn vào đây!' },
              ],
            },
            {
              formula: '〈动〉 + 上 / 下 / 进 / 出 / 回 / 过 / 起 + 〈宾〉',
              title: 'Bổ ngữ đơn không phải 来/去: tân ngữ nhất định đứng sau',
              note: 'Với 上/下/进/出/回/过/起 làm bổ ngữ đơn, tân ngữ luôn đứng sau bổ ngữ.',
              examples: [
                { h: '小王[买回]了一本新书。', p: 'Xiǎo Wáng mǎihuí le yì běn xīn shū.', vi: 'Tiểu Vương mua về một cuốn sách mới.' },
                { h: '我突然[想起]一件事情。', p: 'Wǒ tūrán xiǎngqǐ yí jiàn shìqing.', vi: 'Tôi chợt nhớ ra một chuyện.' },
              ],
            },
            {
              formula: '〈宾〉 + … + 〈动〉 + 下去',
              title: '下去 không mang tân ngữ phía sau: đưa tân ngữ lên trước',
              note: 'Bổ ngữ kép 下去 không cho tân ngữ đứng sau; lúc này tân ngữ thường được đưa lên đầu câu hoặc dùng câu chữ 把.',
              examples: [
                { h: '汉语我还要[学下去]。', p: 'Hànyǔ wǒ hái yào xué xiàqù.', vi: 'Tiếng Hán tôi vẫn còn phải học tiếp.', note: 'Sai: 我还要学下去汉语。' },
                { h: '经理把这些工作都[安排下去]了。', p: 'Jīnglǐ bǎ zhèxiē gōngzuò dōu ānpái xiàqù le.', vi: 'Giám đốc đã giao hết các việc này xuống.', note: 'Sai: 经理都安排下去这些工作了。' },
              ],
            },
            {
              formula: '〈动〉 + 起 + 〈宾〉 + 来',
              title: '起来: tân ngữ chen giữa 起 và 来',
              note: 'Tân ngữ của bổ ngữ kép 起来 thường đặt giữa 起 và 来.',
              examples: [
                { h: '他[抽起]烟[来]。', p: 'Tā chōuqǐ yān lái.', vi: 'Anh ấy bắt đầu hút thuốc.', note: 'Sai: 他抽烟起来。' },
                { h: '突然[下起]雨[来]了。', p: 'Tūrán xiàqǐ yǔ lái le.', vi: 'Bỗng nhiên trời đổ mưa.', note: 'Sai: 突然下雨起来了。' },
              ],
            },
          ],
        },
        {
          title: 'Vị trí của 了',
          patterns: [
            {
              formula: '〈动〉 + 了 + 趋向补语　hoặc　〈动〉 + 趋向补语 + 了',
              title: 'Không có tân ngữ: 了 sau động từ hoặc cuối câu đều được',
              note: 'Nếu động từ không mang tân ngữ, 了 có thể đứng sau động từ (trước bổ ngữ) hoặc ở cuối câu.',
              examples: [
                { h: '看见老师，我们都[站了起来]。', p: 'Kànjiàn lǎoshī, wǒmen dōu zhàn le qǐlái.', vi: 'Thấy thầy giáo, chúng tôi đều đứng dậy.', note: 'Cũng có thể nói 站起来了.' },
                { h: '经他一提醒，我马上[想了起来]。', p: 'Jīng tā yì tíxǐng, wǒ mǎshàng xiǎng le qǐlái.', vi: 'Được anh ấy nhắc, tôi nhớ ra ngay.', note: 'Cũng có thể nói 想起来了.' },
              ],
            },
            {
              formula: '〈动〉 + 〈处所〉 + 来 / 去 + 了',
              title: 'Có tân ngữ nơi chốn: 了 ở cuối câu',
              note: 'Khi sau động từ có tân ngữ chỉ nơi chốn, 了 phải đặt ở cuối câu.',
              examples: [
                { h: '他们都[爬上]山[去了]。', p: 'Tāmen dōu páshàng shān qù le.', vi: 'Họ đều leo lên núi rồi.' },
                { h: '一下课，同学们就都[走出]教室[来了]。', p: 'Yí xiàkè, tóngxuémen jiù dōu zǒuchū jiàoshì lái le.', vi: 'Vừa tan học, các bạn đều ra khỏi lớp.' },
              ],
            },
            {
              formula: '〈动〉 + 趋向补语 + 了 + 〈宾〉',
              title: 'Có tân ngữ sự vật: 了 sau bổ ngữ kép, trước tân ngữ',
              note: 'Khi sau động từ có tân ngữ chỉ sự vật, 了 đặt ngay sau bổ ngữ xu hướng kép và trước tân ngữ.',
              examples: [
                { h: '他[买回来了]一本介绍北京的书。', p: 'Tā mǎi huílái le yì běn jièshào Běijīng de shū.', vi: 'Anh ấy mua về một cuốn sách giới thiệu Bắc Kinh.' },
                { h: '我给妈妈[寄回去了]很多照片。', p: 'Wǒ gěi māma jì huíqù le hěn duō zhàopiàn.', vi: 'Tôi gửi về cho mẹ rất nhiều ảnh.' },
              ],
            },
          ],
        },
        {
          title: 'Phủ định và câu hỏi',
          patterns: [
            {
              formula: '没 + 〈动〉 + 趋向补语　·　不 + 〈动〉 + 趋向补语 (giả thiết)　·　〈动〉 + 不 + 趋向补语 (khả năng)',
              title: 'Phủ định',
              note: 'Thường dùng 没. Khi nêu giả thiết thì dùng 不. Khi là bổ ngữ khả năng thì dùng dạng động từ + 不 + bổ ngữ xu hướng.',
              examples: [
                { h: '我想跟他打招呼，可[没想起来]他的名字。', p: 'Wǒ xiǎng gēn tā dǎ zhāohu, kě méi xiǎng qǐlái tā de míngzi.', vi: 'Tôi muốn chào anh ấy, nhưng không nhớ ra tên.' },
                { h: '我们都[没想出]什么好办法。', p: 'Wǒmen dōu méi xiǎngchū shénme hǎo bànfǎ.', vi: 'Chúng tôi đều chưa nghĩ ra cách nào hay.' },
                { h: '你[不坚持下去]就不会成功。', p: 'Nǐ bù jiānchí xiàqù jiù bú huì chénggōng.', vi: 'Bạn không kiên trì tiếp thì sẽ không thành công.', tag: 'giả thiết' },
                { h: '我想了半天还是[想不起来]。', p: 'Wǒ xiǎng le bàntiān háishi xiǎng bu qǐlái.', vi: 'Tôi nghĩ mãi vẫn không nhớ ra.', tag: 'bổ ngữ khả năng' },
              ],
            },
            {
              formula: '…… 了吗？　·　…… 了没有？　·　〈动〉 + 没 + 〈动〉 + 〈宾〉 + 趋向补语？',
              title: 'Câu hỏi',
              note: 'Thường dùng ……了吗? hoặc ……了没有?. Câu hỏi chính phản cũng hay dùng dạng động từ + 没 + động từ + tân ngữ + bổ ngữ xu hướng.',
              examples: [
                { h: '这篇文章你[交上去了吗]？', p: 'Zhè piān wénzhāng nǐ jiāo shàngqù le ma?', vi: 'Bài viết này bạn nộp lên chưa?' },
                { h: '这个词老师昨天讲过了，你[想起来了没有]？', p: 'Zhège cí lǎoshī zuótiān jiǎngguo le, nǐ xiǎng qǐlái le méiyǒu?', vi: 'Từ này hôm qua thầy giảng rồi, bạn nhớ ra chưa?' },
                { h: '你[带没带]字典[来]？', p: 'Nǐ dài méi dài zìdiǎn lái?', vi: 'Bạn có mang từ điển đến không?' },
              ],
            },
          ],
        },
      ],
    },
  ],

  // ───────────────────────── 学习要点 (bảng ghi nhớ) ─────────────────────────
  boards: [
    {
      id: 'jieguo', hanzi: '结果补语', title: 'Bổ ngữ kết quả',
      rows: [
        {
          label: 'Cấu trúc',
          formulas: ['〈动〉 + 〈结果〉 (+ 〈宾〉)', '结果 = 动 / 形'],
          examples: [
            { h: '我一下飞机就[看见]他了。', p: 'Wǒ yí xià fēijī jiù kànjiàn tā le.', vi: 'Vừa xuống máy bay tôi đã thấy anh ấy.' },
            { h: '我已经[听明白]了。', p: 'Wǒ yǐjīng tīng míngbai le.', vi: 'Tôi đã nghe hiểu rồi.' },
          ],
        },
        { label: 'Ý nghĩa', text: 'Bổ ngữ kết quả là kết quả thay đổi sau khi động tác xảy ra.' },
        {
          label: 'Phủ định',
          formulas: ['① 没 + 〈动〉 + 〈结果〉', '② (如果) 不 + 〈动〉 + 〈结果〉', '③ 〈动〉 + 不 + 〈结果〉'],
          examples: [
            { h: '我[没]听懂你的话。', p: 'Wǒ méi tīngdǒng nǐ de huà.', vi: 'Tôi không nghe hiểu lời bạn nói.', tag: '①' },
            { h: '我[不]做完作业就不出去玩。', p: 'Wǒ bú zuòwán zuòyè jiù bù chūqù wán.', vi: 'Tôi không làm xong bài tập thì không đi chơi.', tag: '②' },
            { h: '我看[不]见黑板上的字。', p: 'Wǒ kàn bu jiàn hēibǎn shàng de zì.', vi: 'Tôi không nhìn thấy chữ trên bảng.', tag: '③' },
          ],
          ps: 'Phủ định của bổ ngữ kết quả thường dùng ①, nghĩa là sau động tác không có thay đổi gì. ② là một giả thiết: không đạt điều kiện này thì không làm việc kia. ③ là phủ định của bổ ngữ khả năng "động + 得 + kết quả", nghĩa là không thể có kết quả; cấu trúc này bài sau sẽ nói.',
        },
        {
          label: 'Câu hỏi',
          formulas: ['〈动〉 + 〈结果〉 + 了吗？', '〈动〉 + 〈结果〉 + 了没有？', '〈动〉 + 没 + 〈动〉 + 〈结果〉？'],
          examples: [{ h: '你听懂[了吗]？／你听懂[了没有]？／你听[没]听懂？', p: 'Nǐ tīngdǒng le ma? / Nǐ tīngdǒng le méiyǒu? / Nǐ tīng méi tīngdǒng?', vi: 'Bạn nghe hiểu chưa?' }],
        },
        {
          label: 'Điểm thi',
          points: [
            {
              text: 'Chỉ có động tác mà không nói kết quả thì ý câu không rõ.',
              fixes: [{ wrong: '她的病终于治了。', right: '她的病终于治好了。', why: 'Phải nói rõ kết quả của 治 (chữa) là 好了 (khỏi).' }],
            },
            {
              text: 'Giữa động từ và bổ ngữ kết quả không chen bất cứ thành phần nào; 了/过 và tân ngữ đều đứng sau bổ ngữ.',
              fixes: [
                { wrong: '我读过错这个字。', right: '我读错过这个字。' },
                { wrong: '我做了作业。', right: '我做完了作业。', why: 'Muốn nói "làm xong" thì 完 phải đứng ngay sau 做, rồi mới đến 了.' },
                { wrong: '她洗澡完出来的时候', right: '她洗完澡出来的时候', ref: 'Kiểm tra 1 · A' },
              ],
            },
            {
              text: '没 + động từ + kết quả + 了 là sai: 了 mang nghĩa hoàn thành nên không đi cùng 没. Khi học 了 sẽ nói kỹ hơn.',
              fixes: [{ wrong: '我没听见了你叫我。', right: '我没听见你叫我。' }],
            },
            {
              text: '着 (zhe) chỉ động tác đang tiến hành, còn bổ ngữ kết quả chỉ tình trạng hoàn thành, nên hai cái không dùng chung.',
              fixes: [{ wrong: '忙了一下午，才准备好着晚饭。', right: '忙了一下午，才准备好晚饭。' }],
            },
          ],
        },
      ],
    },
    {
      id: 'jiebin', hanzi: '介宾补语', title: 'Bổ ngữ giới-tân',
      rows: [
        {
          label: 'Cấu trúc',
          formulas: ['〈动 / 形〉 + 〈介 + 宾〉', '〈介 + 宾〉 tương đương 〈结果〉'],
          examples: [
            { h: '他[走到]我面前。', p: 'Tā zǒudào wǒ miànqián.', vi: 'Anh ấy đi đến trước mặt tôi.' },
            { h: '他[借给]我一本书。', p: 'Tā jiègěi wǒ yì běn shū.', vi: 'Anh ấy cho tôi mượn một cuốn sách.' },
            { h: '他每天[忙到]半夜。', p: 'Tā měi tiān mángdào bànyè.', vi: 'Ngày nào anh ấy cũng bận đến nửa đêm.' },
          ],
        },
        { label: 'Ý nghĩa', text: 'Bổ ngữ giới-tân chỉ thời gian, nơi chốn, đối tượng, so sánh… nhưng về bản chất giống bổ ngữ kết quả: đều là kết quả thay đổi sau khi động tác xảy ra. Vì ý nghĩa ngữ pháp giống nhau nên cách phủ định, cách hỏi và điểm thi về cơ bản cũng giống bổ ngữ kết quả.' },
        {
          label: 'Phủ định',
          text: 'So sánh với ba dạng phủ định của bổ ngữ kết quả:',
          examples: [
            { h: '我昨天的作业还[没]交给老师呢。', p: 'Wǒ zuótiān de zuòyè hái méi jiāogěi lǎoshī ne.', vi: 'Bài tập hôm qua tôi vẫn chưa nộp cho thầy.', tag: '①' },
            { h: '你[不]还给我钱就不要离开。', p: 'Nǐ bù huángěi wǒ qián jiù búyào líkāi.', vi: 'Bạn không trả tiền cho tôi thì đừng đi.', tag: '②' },
            { h: '他今天身体状态不好，恐怕坚持[不]到最后了。', p: 'Tā jīntiān shēntǐ zhuàngtài bù hǎo, kǒngpà jiānchí bu dào zuìhòu le.', vi: 'Hôm nay anh ấy không khỏe, e là không trụ được đến cuối.', tag: '③' },
          ],
        },
        {
          label: 'Câu hỏi',
          text: 'Giống hệt bổ ngữ kết quả:',
          examples: [{ h: '作业交给老师[了吗]？／作业交给老师[了没有]？／作业交[没]交给老师？', p: 'Zuòyè jiāogěi lǎoshī le ma? / … le méiyǒu? / Zuòyè jiāo méi jiāogěi lǎoshī?', vi: 'Bài tập nộp cho thầy chưa?' }],
        },
        {
          label: 'Điểm thi',
          points: [
            {
              text: 'Thiếu giới từ thì ý không rõ.',
              fixes: [
                { wrong: '箱子忘出租车上了。', right: '箱子忘在出租车上了。' },
                { wrong: '发生北京的房地产法律纠纷', right: '发生在北京的房地产法律纠纷', ref: 'Kiểm tra 5 · C' },
              ],
            },
            {
              text: '了/过 và tân ngữ đều đứng sau giới từ.',
              fixes: [
                { wrong: '这些产品都出口国外。', right: '这些产品都出口到了国外。' },
                { wrong: '他的钱捐给许多有困难的人。', right: '他的钱捐给过许多有困难的人。', why: 'Muốn nói "đã từng quyên góp" thì 过 đặt sau 给.' },
              ],
            },
            {
              text: 'Phủ định: 没 + động từ + giới từ + tân ngữ. Dùng 没 thì bỏ 了.',
              examples: [{ h: '我的手机[没]忘在火车上。', p: 'Wǒ de shǒujī méi wàng zài huǒchē shàng.', vi: 'Điện thoại tôi không bị quên trên tàu.' }],
            },
            {
              text: 'Không dùng chung với 着.',
              fixes: [{ wrong: '他吃了饭就躺着在床上。', right: '他吃了饭就躺在床上。' }],
            },
            {
              text: '"在……" làm bổ ngữ có hai điều nhất định phải nhớ. (I) Khi 在…… chỉ nơi động tác xảy ra hoặc nơi sự vật tồn tại thì đặt TRƯỚC động từ; khi chỉ nơi sinh ra, sản xuất, cư trú thì đặt trước hay sau động từ đều được.',
              examples: [
                { h: '我[在教室]学习。', p: 'Wǒ zài jiàoshì xuéxí.', vi: 'Tôi học ở lớp.', note: 'Sai: 我学习在教室。— 在教室 là nơi diễn ra động tác 学习.' },
                { h: '他出生[在北京]。＝ 他[在北京]出生。', p: 'Tā chūshēng zài Běijīng. = Tā zài Běijīng chūshēng.', vi: 'Anh ấy sinh ở Bắc Kinh.', note: '在北京 là nơi anh ấy sinh ra, nên trước sau đều được.' },
              ],
              fixes: [{ wrong: '牛街礼拜寺就在这条街上坐落。', right: '牛街礼拜寺就坐落在这条街上。', ref: 'Kiểm tra 3 · D', why: '坐落 (tọa lạc) là sự vật tồn tại ở nơi nào, nơi chốn đứng sau động từ.' }],
            },
            {
              text: '(II) Tân ngữ sau 在 nếu chưa chỉ rõ nơi chốn thì phải thêm phương vị từ 上 / 里 / 外 / 下 / 中… vào sau.',
              examples: [{ h: '他晕倒在路[上]。', p: 'Tā yūndǎo zài lù shàng.', vi: 'Anh ấy ngất xỉu trên đường.' }],
              fixes: [{ wrong: '把家中的钥匙挂在腰带', right: '把家中的钥匙挂在腰带上', ref: 'Kiểm tra 2 · C' }],
            },
          ],
        },
      ],
    },
    {
      id: 'quxiang', hanzi: '趋向补语', title: 'Bổ ngữ xu hướng',
      rows: [
        {
          label: 'Cấu trúc',
          formulas: ['Đơn: 〈动〉 + 来 / 去', 'Đơn: 〈动〉 + 上 / 下 / 进 / 出 / 回 / 过 / 起 / 倒', 'Kép: 〈动〉 + 上 / 下 / 进 / 出 / 回 / 过 / 起 / 到 + 来 / 去'],
          text: 'Ý nghĩa ngữ pháp về cơ bản giống bổ ngữ kết quả, nên không nói thêm nhiều.',
        },
        {
          label: 'Điểm thi',
          points: [
            {
              text: 'Tân ngữ (I): tân ngữ chỉ nơi chốn đứng trước 来/去; các tân ngữ khác đứng trước hay sau đều được.',
              examples: [
                { h: '他回[国]去了。', p: 'Tā huí guó qù le.', vi: 'Anh ấy về nước rồi.', tag: '动 + 处所 + 来/去' },
                { h: '我跑下[楼]去。', p: 'Wǒ pǎoxià lóu qù.', vi: 'Tôi chạy xuống lầu.', tag: '动 + 下 + 处所 + 去' },
              ],
            },
            {
              text: 'Tân ngữ (II): phần danh từ của động từ ly hợp cũng đứng trước 来/去. Với 起来 thường nói động từ + 起 + tân ngữ + 来.',
              examples: [
                { h: '下雨 → 下起[雨]来', vi: 'trời bắt đầu mưa' },
                { h: '聊天 → 聊起[天]来', vi: 'bắt đầu trò chuyện' },
              ],
              fixes: [{ wrong: '大家便热烈地鼓掌起来', right: '大家便热烈地鼓起掌来', ref: 'Kiểm tra 4 · B' }],
            },
            {
              text: 'Tân ngữ (III): động từ + 下去 + tân ngữ là sai; lúc này tân ngữ thường được đưa lên trước.',
              fixes: [{ wrong: '我的水平还不太高，我明年还要学下去汉语。', right: '我的水平还不太高，汉语我明年还要学下去。' }],
            },
            {
              text: 'Cách dùng: bổ ngữ xu hướng có nghĩa gốc và nghĩa mở rộng, khá phức tạp, tốt nhất là dùng sơ đồ để hiểu và nhớ. Bài sau sẽ học kỹ.',
              examples: [
                { h: '他在楼下等你，你快点[下去]吧。', p: 'Tā zài lóuxià děng nǐ, nǐ kuài diǎn xiàqù ba.', vi: 'Anh ấy đợi bạn dưới lầu, bạn mau xuống đi.', tag: 'nghĩa gốc' },
                { h: '你[说下去]，我想知道更多情况。', p: 'Nǐ shuō xiàqù, wǒ xiǎng zhīdào gèng duō qíngkuàng.', vi: 'Bạn nói tiếp đi, tôi muốn biết thêm tình hình.', tag: 'nghĩa mở rộng: 说下去 = nói tiếp' },
              ],
            },
          ],
          ps: 'Sau động từ hoặc tính từ làm vị ngữ không được dùng hai bổ ngữ cùng lúc, tức là không được nói trùng lặp. Kiểm tra 6 · D: 我没记住在本子上 ✗ → 我没记住，也没记在本子上。',
        },
      ],
    },
  ],

  // ───────────────────────── 知识点测试 (6 câu, tìm đoạn sai) ─────────────────────────
  test: [
    seg(['她洗澡完出来的时候，', '我还没想好该怎么告诉她，', '在妻子的一再催促下，', '我一声不吭地把通知书递到了她的手里。'], 0, 'Bổ ngữ kết quả',
      '她洗完澡出来的时候', '完 là bổ ngữ kết quả, phải đứng ngay sau động từ 洗; tân ngữ 澡 đứng sau bổ ngữ: 洗完澡.'),
    seg(['在一些傣族村寨，', '分辨已婚和未婚女子可以看她们的腰带：', '凡是已婚妇女都会把家中的钥匙挂在腰带，', '而没挂钥匙的则大多是未婚女子。'], 2, 'Bổ ngữ giới-tân',
      '挂在腰带上', '腰带 (thắt lưng) chưa chỉ rõ nơi chốn, sau 在 + danh từ như vậy phải thêm phương vị từ: 挂在腰带上.'),
    seg(['牛街是北京一条古老的街巷，', '也是北京城区最具特色的回民居住区，', '已经有1000多年的历史了，', '闻名遐迩的牛街礼拜寺就在这条街上坐落。'], 3, 'Bổ ngữ giới-tân',
      '坐落在这条街上', '在…… chỉ nơi sự vật tồn tại (坐落 = tọa lạc) thì phải đứng sau động từ làm bổ ngữ: 坐落在这条街上.'),
    seg(['一看到她风度翩翩地走上舞台，', '大家便热烈地鼓掌起来，', '她一连唱了三首歌，', '每一首都赢得了热烈的掌声。'], 1, 'Bổ ngữ xu hướng',
      '鼓起掌来', '鼓掌 là động từ ly hợp, tân ngữ 掌 phải tách ra và đặt giữa 起 và 来: 鼓起掌来.'),
    seg(['据了解，不仅是银领国际，', '北京的其他高档小区也发生过类似的诉讼，', '而发生北京的房地产法律纠纷中，', '许多业主败诉。'], 2, 'Bổ ngữ giới-tân',
      '发生在北京的房地产法律纠纷', 'Thiếu giới từ của bổ ngữ giới-tân. Phải là 发生在北京.'),
    seg(['在中国期间，张老师给了我很多帮助，', '回国后我一直很想和她联系，', '但是张老师的电话号码我忘了，', '因为我没记住在本子上。'], 3, 'Hai bổ ngữ trùng lặp',
      '我没记住，也没记在本子上', 'Sau một động từ không được dùng hai bổ ngữ cùng lúc (住 và 在本子上). Phải tách thành hai vế.'),
  ],

  // ───────────────────────── 新HSK仿真试题 (15 câu, chọn câu có lỗi) ─────────────────────────
  exam: [
    sen([
      '索尼公司最新推出的一款笔记本电脑，外形小巧轻薄，甚至可以放文件袋里。',
      '艺术家总是先在生活中寻找美，然后创造出艺术美。',
      '居住在国外的中国人通常都会将自己的孩子送到华语学校学习汉语。',
      '孔子说"己所不欲，勿施于人"，意思是自己不愿意做的事，也不要强加给别人。',
    ], 0, 'Bổ ngữ giới-tân', '甚至可以放在文件袋里', 'Thiếu giới từ của bổ ngữ giới-tân: 放 + 在 + 文件袋里.'),
    sen([
      '人们都喜爱蜜蜂，赞美蜜蜂的辛勤劳动。',
      '父亲对我要求特别严格，他的全部希望都寄托我身上。',
      '每个人都有选择自己生活道路、决定自己生活方式的权利。',
      '明代四大奇书包括《三国演义》、《水浒传》、《西游记》和《金瓶梅》。',
    ], 1, 'Bổ ngữ giới-tân', '他的全部希望都寄托在我身上', 'Thiếu giới từ của bổ ngữ giới-tân: 寄托 + 在 + 我身上.'),
    sen([
      '天很黑，又有雾，尽管有路灯，还是看不清。',
      '近年来，这些环保志愿者积极投入到各项环保活动。',
      '总经理打算明天去北京参加一个新产品展览会。',
      '父母的年纪越来越大了，你要多回家看看他们。',
    ], 1, 'Bổ ngữ giới-tân', '积极投入到各项环保活动中', 'Cấu trúc 到 + từ chỉ phạm vi, nơi chốn làm bổ ngữ giới-tân. 环保活动 là danh từ chỉ sự vật, phải thêm phương vị từ 中 mới chỉ được phạm vi.'),
    sen([
      '昨天下班的时候，外面突然下起大雨来了，我一直到晚上九点多才能回到家。',
      '在危险的情况下，人的嗅觉会变灵敏，并向大脑发出避开危险的"警报"。',
      '近年来，扬州通过持续的城市森林建设，成为名副其实的"绿杨城郭"。',
      '我大约从两三岁起，就一个人睡一个房间，渐渐养成了独立的个性。',
    ], 0, 'Bổ ngữ kết quả', '我一直到晚上九点多才回到家', 'Ý nghĩa bổ ngữ kết quả bị rối: 回到家 là kết quả đã hoàn thành, không đi với động từ năng nguyện 能 chỉ phỏng đoán, khả năng.'),
    sen([
      '他毕业名牌大学，虽然对工作充满热情，但还是不如其他工程师经验丰富。',
      '这次比赛，他连进三个球，出乎教练和队员的意料。',
      '即使是婴儿也能分辨出友好和不友好的伙伴，并且知道该和谁一起玩。',
      '睡眠关系到儿童的健康，影响着他们的身体发育。',
    ], 0, 'Bổ ngữ giới-tân', '他毕业于名牌大学', '名牌大学 là nơi tốt nghiệp, sau động từ 毕业 phải thêm giới từ: 毕业于名牌大学.'),
    sen([
      '要学会快乐，必须始终保持一颗童心。',
      '对肥胖症患者来说，最重要的是控制饮食和进行适当的锻炼。',
      '俗话说："不养儿不知父母恩。"没有成为一个真正的父亲时，是很难体会到父亲的责任与压力的。',
      '西安最有名的是兵马俑、华清池和碑林。大家游览这些地方完以后，可以再去参观西安最繁华的街道。',
    ], 3, 'Bổ ngữ kết quả', '大家游览完这些地方以后', 'Vị trí tân ngữ của bổ ngữ kết quả sai. Trật tự đúng là động từ vị ngữ + bổ ngữ kết quả + tân ngữ: 游览完这些地方.'),
    sen([
      '假设有人像对待成功人士那样对待一个普通人，那么这个普通人也会表现出与成功者一样的能力。',
      '走进乌镇，走在那用青石板铺成的街道上，看着两边的民居和乡民，我感到格外亲切。',
      '我们当警察的没有什么上下班的时间，常常是回到家刚端起饭碗，就接到队里的电话，不吃完饭就得赶往案发现场。',
      '七夕节是中国传统节日中最具浪漫色彩的一个。相传，每逢七月初七，人间的喜鹊就要飞上天去，在银河上为牛郎织女相会搭起鹊桥。',
    ], 2, 'Bổ ngữ kết quả', '没吃完饭就得赶往案发现场', 'Phủ định bổ ngữ kết quả sai: ở đây nói sự việc chưa xảy ra (chưa ăn xong), phải dùng 没 chứ không phải 不.'),
    sen([
      '自然界有许多生物靠保护色躲避敌人，从而在恶劣的环境中生存。',
      '幽默是一种乐观的人生态度、机智的思维方式、轻松的心态和宽容的胸怀。',
      '直到学会如何传球，如何与队友全力配合后，姚明才真正享受到了篮球的乐趣。',
      '童话可以培养成儿童的阅读兴趣，而兴趣是儿童最好的老师，因此童话是儿童最佳的阅读选择。',
    ], 3, 'Bổ ngữ kết quả', '童话可以培养儿童的阅读兴趣', 'Lạm dụng bổ ngữ kết quả. Sau động từ năng nguyện 可以 chỉ cần động từ 培养 là đủ, thêm 成 là thừa.'),
    sen([
      '科幻小说的情节不可能发生在人们已知的世界里。',
      '荠菜为"十字花科"植物，它的营养价值很高，不仅可以做到美味食品，还具有很高的药用价值。',
      '他无意中在晚报上看到一则招聘启事，一家房地产公司招聘一名销售主管，开出的待遇相当诱人。',
      '我们的过去不复存在，我们的未来不见踪影，所以我们不必为过去和未来而愁苦，我们只需认真地活在现在。',
    ], 1, 'Bổ ngữ kết quả', '不仅可以做成美味食品', 'Dùng sai bổ ngữ kết quả. Sau 到 thường là từ chỉ thời gian, nơi chốn hoặc mức độ. Muốn nói "làm thành một thứ gì" phải dùng 成.'),
    sen([
      '竞争，其实也是一种友谊，在对手的帮助下，你会变得更聪明，而害怕竞争的人已经输给了对手。',
      '有些企业的员工看到的只是自己的工资待遇和发展前途，而不是公司的整体运行和未来发展情况。',
      '他已经回国两个月了，我很想给他写封信，却不想出如何下笔，想打个电话问候一下，却又不知如何开口。',
      '他在我们班汉语说得最流利，又特别有人缘，当老师问谁可以当班长时，同学们的目光都不约而同地转向了他。',
    ], 2, 'Bổ ngữ xu hướng', '却想不出如何下笔', 'Phủ định bổ ngữ xu hướng sai. Ở đây là "không nghĩ ra được" (không có khả năng), phải dùng dạng động từ + 不 + bổ ngữ: 想不出.'),
    sen([
      '这是影响人类与自然环境关系的两个重要方面，缺少一个就会给人类带来灾难。',
      '她有很长一段时间睡不着，后来她发现，客厅里的灯开着，这影响了她的睡眠。',
      '颐和园是中国现存规模最大、保存最完整的皇家园林，每年春天都会有大批游客前来观赏、游玩，双休日游客人数最多，如果双休日前往最好避交通高峰时段。',
      '天津剪纸可谓历史悠久，兴起于清朝光绪末年，后在不断汲取和发扬中国传统剪纸工艺的基础上发展到今天。',
    ], 2, 'Bổ ngữ kết quả', '最好避开交通高峰时段', 'Thiếu bổ ngữ kết quả. Chỉ có động tác 避 mà không nói kết quả thì ý không rõ; phải là 避开 (tránh ra, tránh được).'),
    sen([
      '每次付出不一定都会有收获，但是不付出一定不会有收获。',
      '新加坡现有居民基本都是外来移民，华人占居民的大多数，另外还有马来人、印度人、英国人等。',
      '在北京，每天早晨都有一些玩鸟的老头儿提着一只只鸟笼子来到公园里，聚集在一起，把鸟笼子往树杈上一挂，揭下罩在鸟笼上的布罩，于是各种鸟雀唱歌起来。',
      '请看，这就是我们生活的地球！事实就在我们的眼前，我们应该能够清楚地看到，解决环境污染问题已经刻不容缓了。',
    ], 2, 'Bổ ngữ xu hướng', '于是各种鸟雀唱起歌来', 'Tân ngữ của bổ ngữ xu hướng đặt sai. 唱歌 là động từ ly hợp, động từ và tân ngữ phải tách ra: 唱起歌来.'),
    sen([
      '他们俩是孪生兄弟，长相、个头都差不多，就连性格、气质也极为相似，我总是分他们不出来谁是哥哥谁是弟弟。',
      '谦虚是中华民族的传统美德之一，是使人不断进步、获得成功的一个重要的内在因素。',
      '《清明上河图》是中国十大传世名画之一，作品以长卷形式生动地记录了中国12世纪城市生活的面貌。',
      '1997年著名导演冯小刚拍出了中国内地第一部贺岁片《甲方乙方》，开启了中国内地的贺岁片市场。',
    ], 0, 'Bổ ngữ xu hướng', '我总是分不出他们谁是哥哥谁是弟弟来 / 分不出来他们谁是哥哥谁是弟弟', 'Tân ngữ của bổ ngữ xu hướng kép phải đứng trước hoặc sau 来, không được chen vào giữa động từ và bổ ngữ như 分他们不出来.'),
    sen([
      '树村坐落在北京北郊一个叫做"上地"的地方，那儿聚集了数百名来自全国各地的摇滚乐手。',
      '古人云："一室不扫何以扫天下？"你连自己的宿舍都没打扫干净了，怎能让别人相信你可以胜任大事呢？',
      '泼水节是傣族最重要的传统节日，每逢傣历六七月，人们聚在一起互相泼水，祝福吉祥、幸福和健康。',
      '通常人们把在书法和绘画艺术方面有杰出成就、作品有独特风格的人称为书画家。有时也分别称作书法家和画家。',
    ], 1, 'Bổ ngữ kết quả', '你连自己的宿舍都没打扫干净', 'Bổ ngữ kết quả phủ định bằng 没 thì phía sau không được thêm 了; phải bỏ 了 đi.'),
    sen([
      '在一个阴雨连绵的夜晚，我急切地读着远方的来信，才知道在风雪中行进的汽车掉入山谷，我亲爱的姐姐永远地留在昆仑山了。',
      '李时珍出生在湖北一个贫苦的医生家庭，他从小立志从医，继承祖业，为我国的医药学做出了巨大贡献。',
      '得知美国分公司要召开紧急会议，王洪焦急万分，他马上向家人告别，因为只有尽快赶回去美国，才能防止公司陷入财务危机。',
      '"世博会"被誉为世界经济、科技、文化的"奥林匹克"盛会，其特点是举办时间长、展出规模大、参展国家多、影响深远。',
    ], 2, 'Bổ ngữ xu hướng', '只有尽快赶回美国去', 'Tân ngữ chỉ nơi chốn (美国) phải đứng trước 来/去: 赶回美国去.'),
  ],
}
