import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 4 (Thượng), Bài 7: 最好的医生是自己 (sách trang 86–96).
 * Nghĩa từ mới và giải thích ngữ pháp lấy theo sách, dịch hội thoại do app tự thêm.
 * Nghe: 07-1…07-5. Bài tập: 热身/比一比/练习 2/扩展, đáp án theo "HSK4-1-BT" trang 7–8.
 */

const A = '/audio/hsk-std4/'

export const hskStd4Lesson7: Lesson = {
  id: 7,
  title: 'Bác sĩ tốt nhất là bản thân',
  hanzi: '最好的医生是自己',
  pinyin: 'Zuì hǎo de yīshēng shì zìjǐ',
  vi: 'Bác sĩ tốt nhất là bản thân',
  intro: 'Nói về sức khỏe, hút thuốc, làm việc với máy tính và tập luyện. Học 估计 (so với 可能), 来不及, sự lặp lại của từ ly hợp (AAB), 要是, 既……又/也/还……',

  dialogue: [
    { who: 'A', name: '小李', hanzi: '你的鼻子怎么流血了？快用纸擦擦。', pinyin: 'Nǐ de bízi zěnme liú xiě le? Kuài yòng zhǐ cācā.', vi: 'Mũi bạn sao chảy máu? Mau dùng giấy lau đi.', scene: 'Bài 1 · Tiểu Lý và Tiểu Lâm nói về thời tiết và sức khỏe' },
    { who: 'B', name: '小林', hanzi: '我还不习惯北方的气候，估计是天气太干。今天天气不是很冷，你怎么穿这么多？', pinyin: 'Wǒ hái bù xíguàn běifāng de qìhòu, gūjì shì tiānqì tài gān. Jīntiān tiānqì bú shì hěn lěng, nǐ zěnme chuān zhème duō?', vi: 'Tôi chưa quen khí hậu miền Bắc, chắc do trời quá khô. Hôm nay không lạnh lắm, sao bạn mặc nhiều thế?' },
    { who: 'A', name: '小李', hanzi: '就是因为昨天穿得太少，我都感冒了。', pinyin: 'Jiùshì yīnwèi zuótiān chuān de tài shǎo, wǒ dōu gǎnmào le.', vi: 'Chính vì hôm qua mặc quá ít nên tôi bị cảm.' },
    { who: 'B', name: '小林', hanzi: '最近感冒的人特别多。你去看医生了吗？', pinyin: 'Zuìjìn gǎnmào de rén tèbié duō. Nǐ qù kàn yīshēng le ma?', vi: 'Dạo này người cảm đặc biệt nhiều. Bạn đi khám bác sĩ chưa?' },
    { who: 'A', name: '小李', hanzi: '没有，我只是咳嗽，有点儿头疼，不严重，多喝点儿水就好了。', pinyin: 'Méiyǒu, wǒ zhǐshì késou, yǒudiǎnr tóu téng, bù yánzhòng, duō hē diǎnr shuǐ jiù hǎo le.', vi: 'Chưa, tôi chỉ ho, hơi đau đầu, không nặng, uống nhiều nước là khỏi.' },
    { who: 'B', name: '小林', hanzi: '春天天气时冷时热，特别容易感冒。这时候一定要多注意保暖，另外，最好经常打开窗户换换空气。', pinyin: 'Chūntiān tiānqì shí lěng shí rè, tèbié róngyì gǎnmào. Zhè shíhou yídìng yào duō zhùyì bǎonuǎn, lìngwài, zuìhǎo jīngcháng dǎkāi chuānghu huànhuan kōngqì.', vi: 'Mùa xuân thời tiết lúc lạnh lúc nóng, rất dễ cảm. Lúc này nhất định phải giữ ấm, ngoài ra tốt nhất thường mở cửa sổ thay không khí.' },
    { who: 'A', name: '小夏', hanzi: '你咳嗽好点儿了吗？医生怎么说的？', pinyin: 'Nǐ késou hǎo diǎnr le ma? Yīshēng zěnme shuō de?', vi: 'Bạn ho đỡ chưa? Bác sĩ nói sao?', scene: 'Bài 2 · Tiểu Hạ và Tiểu Vũ nói chuyện hút thuốc' },
    { who: 'B', name: '小雨', hanzi: '还是老样子，他让我以后不要再抽烟了。', pinyin: 'Háishi lǎo yàngzi, tā ràng wǒ yǐhòu búyào zài chōu yān le.', vi: 'Vẫn như cũ, ông bảo tôi sau này đừng hút thuốc nữa.' },
    { who: 'A', name: '小夏', hanzi: '抽烟对身体一点儿好处也没有。', pinyin: 'Chōu yān duì shēntǐ yìdiǎnr hǎochù yě méiyǒu.', vi: 'Hút thuốc chẳng có chút lợi gì cho cơ thể.' },
    { who: 'B', name: '小雨', hanzi: '我也知道，可是我觉得抽烟这个动作看上去很帅。', pinyin: 'Wǒ yě zhīdào, kěshì wǒ juéde chōu yān zhège dòngzuò kàn shangqu hěn shuài.', vi: 'Tôi cũng biết, nhưng tôi thấy động tác hút thuốc trông rất ngầu.' },
    { who: 'A', name: '小夏', hanzi: '等你身体出现问题了，后悔就来不及了。', pinyin: 'Děng nǐ shēntǐ chūxiàn wèntí le, hòuhuǐ jiù láibují le.', vi: 'Đợi cơ thể có vấn đề, hối hận cũng không kịp.' },
    { who: 'B', name: '小雨', hanzi: '其实家人也一直反对我抽烟，我自己却觉得没什么。但最近总是咳嗽，所以我有些担心了。', pinyin: 'Qíshí jiārén yě yìzhí fǎnduì wǒ chōu yān, wǒ zìjǐ què juéde méi shénme. Dàn zuìjìn zǒngshì késou, suǒyǐ wǒ yǒuxiē dān xīn le.', vi: 'Thật ra người nhà cũng luôn phản đối tôi hút thuốc, tôi lại thấy không sao. Nhưng dạo này hay ho nên tôi hơi lo.' },
    { who: 'A', name: '小夏', hanzi: '抽烟不仅对自己没好处，还会影响周围人的身体健康。为了你和你的家人，别再抽了。', pinyin: 'Chōu yān bùjǐn duì zìjǐ méi hǎochù, hái huì yǐngxiǎng zhōuwéi rén de shēntǐ jiànkāng. Wèile nǐ hé nǐ de jiārén, bié zài chōu le.', vi: 'Hút thuốc không những vô ích cho bản thân mà còn ảnh hưởng sức khỏe người xung quanh. Vì bạn và gia đình, đừng hút nữa.' },
    { who: 'A', name: '小李', hanzi: '我最近眼睛总是跳，大夫说是因为我长时间看电脑，眼睛太累。', pinyin: 'Wǒ zuìjìn yǎnjing zǒngshì tiào, dàifu shuō shì yīnwèi wǒ cháng shíjiān kàn diànnǎo, yǎnjing tài lèi.', vi: 'Dạo này mắt tôi hay giật, bác sĩ nói do tôi nhìn máy tính lâu, mắt mệt quá.', scene: 'Bài 3 · Tiểu Lý và Tiểu Lâm nói về ảnh hưởng của máy tính' },
    { who: 'B', name: '小林', hanzi: '长时间坐在电脑前面工作，眼睛很容易累。最好是每过一小时就休息休息，然后再开始工作。', pinyin: 'Cháng shíjiān zuò zài diànnǎo qiánmian gōngzuò, yǎnjing hěn róngyì lèi. Zuìhǎo shì měi guò yì xiǎoshí jiù xiūxi xiūxi, ránhòu zài kāishǐ gōngzuò.', vi: 'Ngồi làm việc trước máy tính lâu, mắt rất dễ mệt. Tốt nhất mỗi giờ nghỉ một chút rồi làm tiếp.' },
    { who: 'A', name: '小李', hanzi: '医生也这么说，他还告诉我要多向远处看看，尤其是多看看绿色的植物。', pinyin: 'Yīshēng yě zhème shuō, tā hái gàosu wǒ yào duō xiàng yuǎnchù kànkan, yóuqí shì duō kànkan lǜsè de zhíwù.', vi: 'Bác sĩ cũng nói vậy, còn bảo tôi nhìn xa nhiều hơn, nhất là nhìn cây xanh.' },
    { who: 'B', name: '小林', hanzi: '长时间对着电脑不仅对眼睛不好，身体也会不舒服。研究发现，如果人一天静坐超过6小时，就会影响身体健康。', pinyin: 'Cháng shíjiān duìzhe diànnǎo bùjǐn duì yǎnjing bù hǎo, shēntǐ yě huì bù shūfu. Yánjiū fāxiàn, rúguǒ rén yì tiān jìngzuò chāoguò liù xiǎoshí, jiù huì yǐngxiǎng shēntǐ jiànkāng.', vi: 'Nhìn máy tính lâu không chỉ hại mắt mà cơ thể cũng khó chịu. Nghiên cứu cho thấy nếu một người ngồi yên quá 6 tiếng mỗi ngày sẽ ảnh hưởng sức khỏe.' },
    { who: 'A', name: '小李', hanzi: '是啊！像咱们这些久坐办公室的人要注意，有时间应该多站起来活动活动。', pinyin: 'Shì a! Xiàng zánmen zhèxiē jiǔ zuò bàngōngshì de rén yào zhùyì, yǒu shíjiān yīnggāi duō zhàn qilai huódòng huodong.', vi: 'Đúng! Những người ngồi văn phòng lâu như chúng ta phải chú ý, có thời gian nên đứng lên vận động nhiều.' },
    { who: 'B', name: '小林', hanzi: '好，咱们午饭后就去附近的公园散散步吧。', pinyin: 'Hǎo, zánmen wǔfàn hòu jiù qù fùjìn de gōngyuán sànsan bù ba.', vi: 'Được, sau bữa trưa mình ra công viên gần đây đi dạo nhé.' },
    { who: 'A', name: '短文', hanzi: '每个人都希望自己健康，那么什么才是健康呢？过去，人们认为健康就是指身体不生病。但是，现在人们认识到，健康还指精神上的健康。只有身体和精神都健康，才算是真正的健康。有一位教授用数字来说明健康有多么重要：要是健康是1，其他都是1后面的0；如果没有1，不管有多少0也没用。所以我们平时一定要注意锻炼，别等健康出问题了才后悔。', pinyin: 'Měi ge rén dōu xīwàng zìjǐ jiànkāng, nàme shénme cái shì jiànkāng ne? Guòqù, rénmen rènwéi jiànkāng jiù shì zhǐ shēntǐ bù shēng bìng. Dànshì, xiànzài rénmen rènshi dào, jiànkāng hái zhǐ jīngshén shang de jiànkāng. Zhǐyǒu shēntǐ hé jīngshén dōu jiànkāng, cái suàn shì zhēnzhèng de jiànkāng. Yǒu yí wèi jiàoshòu yòng shùzì lái shuōmíng jiànkāng yǒu duōme zhòngyào: Yàoshi jiànkāng shì yī, qítā dōu shì yī hòumiàn de líng; rúguǒ méiyǒu yī, bùguǎn yǒu duōshao líng yě méi yòng. Suǒyǐ wǒmen píngshí yídìng yào zhùyì duànliàn, bié děng jiànkāng chū wèntí le cái hòuhuǐ.', vi: 'Ai cũng mong mình khỏe mạnh, vậy thế nào mới là khỏe mạnh? Trước đây người ta cho rằng khỏe mạnh là cơ thể không bệnh. Nhưng giờ người ta nhận ra khỏe mạnh còn là sức khỏe tinh thần. Chỉ khi thân thể và tinh thần đều khỏe mới là khỏe mạnh thật sự. Một vị giáo sư dùng con số để nói sức khỏe quan trọng thế nào: nếu sức khỏe là số 1, những thứ khác là các số 0 phía sau; không có số 1 thì có bao nhiêu số 0 cũng vô ích. Vì vậy bình thường nhất định phải chú ý tập luyện, đừng đợi sức khỏe có vấn đề mới hối hận.', scene: 'Bài 4 · Thế nào là khỏe mạnh' },
    { who: 'A', name: '短文', hanzi: '我听一位医生说过一句话：“最好的医生是自己，最好的药是时间，最好的运动是散步。”前两条我理解得不深，最后一条我完全同意。散步是生活中最简单的锻炼方法，既可以活动身体，又可以减肥，而且不会像跑步那样辛苦。晚饭后，一家人一起出去散散步，是一件很幸福的事情。肚子吃饱了需要活动，家人忙了一天需要交流，夫妻说说一天的工作能加深感情，听孩子谈谈学校里有意思的事，一天的烦恼就都跑掉了。', pinyin: 'Wǒ tīng yí wèi yīshēng shuōguo yí jù huà: "Zuì hǎo de yīshēng shì zìjǐ, zuì hǎo de yào shì shíjiān, zuì hǎo de yùndòng shì sàn bù." Qián liǎng tiáo wǒ lǐjiě de bù shēn, zuìhòu yì tiáo wǒ wánquán tóngyì. Sàn bù shì shēnghuó zhōng zuì jiǎndān de duànliàn fāngfǎ, jì kěyǐ huódòng shēntǐ, yòu kěyǐ jiǎn féi, érqiě bú huì xiàng pǎo bù nàyàng xīnkǔ. Wǎnfàn hòu, yì jiā rén yìqǐ chūqu sànsan bù, shì yí jiàn hěn xìngfú de shìqing. Dùzi chībǎo le xūyào huódòng, jiārén mángle yì tiān xūyào jiāoliú, fūqī shuōshuo yì tiān de gōngzuò néng jiāshēn gǎnqíng, tīng háizi tántan xuéxiào li yǒu yìsi de shì, yì tiān de fánnǎo jiù dōu pǎodiào le.', vi: 'Tôi từng nghe một bác sĩ nói: "Bác sĩ tốt nhất là bản thân, thuốc tốt nhất là thời gian, môn vận động tốt nhất là đi dạo." Hai câu đầu tôi hiểu chưa sâu, câu cuối tôi hoàn toàn đồng ý. Đi dạo là cách tập đơn giản nhất, vừa vận động cơ thể vừa giảm cân, lại không vất vả như chạy bộ. Sau bữa tối cả nhà cùng đi dạo là chuyện rất hạnh phúc. Bụng no cần vận động, người nhà bận cả ngày cần trò chuyện, vợ chồng kể chuyện công việc tăng tình cảm, nghe con kể chuyện thú vị ở trường, phiền muộn cả ngày bay hết.', scene: 'Bài 5 · Đi dạo' },
  ],
  dialogueClips: [
    { label: '07-1 · Tiểu Lý và Tiểu Lâm', src: A + 'l7-1.mp3' },
    { label: '07-2 · Tiểu Hạ và Tiểu Vũ', src: A + 'l7-2.mp3' },
    { label: '07-3 · Máy tính và cơ thể', src: A + 'l7-3.mp3' },
    { label: '07-4 · Thế nào là khỏe mạnh', src: A + 'l7-4.mp3' },
    { label: '07-5 · Đi dạo', src: A + 'l7-5.mp3' },
  ],
  dialogueTip: '<b>估计</b>: đoán chừng. <b>来不及</b>: không kịp. <b>散散步 / 帮帮忙</b> (AAB): từ ly hợp lặp lại, chỉ thời gian ngắn/thử làm. <b>要是……就……</b>: nếu… thì…. <b>既……又/也/还……</b>: vừa… vừa….',
  slowSay: '最好的医生是自己',

  vocab: [
    { hanzi: '流血', pinyin: 'liú xiě', pos: 'động từ', meaning: 'chảy máu', han_viet: 'lưu huyết' },
    { hanzi: '擦', pinyin: 'cā', pos: 'động từ', meaning: 'lau, chùi', han_viet: 'sát' },
    { hanzi: '气候', pinyin: 'qìhòu', pos: 'danh từ', meaning: 'khí hậu', han_viet: 'khí hậu' },
    { hanzi: '估计', pinyin: 'gūjì', pos: 'động từ', meaning: 'đoán chừng, dự đoán', han_viet: 'cổ kế' },
    { hanzi: '咳嗽', pinyin: 'késou', pos: 'động từ', meaning: 'ho', han_viet: 'khái thấu' },
    { hanzi: '严重', pinyin: 'yánzhòng', pos: 'tính từ', meaning: 'nghiêm trọng', han_viet: 'nghiêm trọng' },
    { hanzi: '窗户', pinyin: 'chuānghu', pos: 'danh từ', meaning: 'cửa sổ', han_viet: 'song hộ' },
    { hanzi: '空气', pinyin: 'kōngqì', pos: 'danh từ', meaning: 'không khí', han_viet: 'không khí' },
    { hanzi: '抽烟', pinyin: 'chōu yān', pos: 'động từ', meaning: 'hút thuốc', han_viet: 'trừu yên' },
    { hanzi: '动作', pinyin: 'dòngzuò', pos: 'danh từ', meaning: 'động tác, hành động', han_viet: 'động tác' },
    { hanzi: '帅', pinyin: 'shuài', pos: 'tính từ', meaning: 'đẹp', han_viet: 'soái' },
    { hanzi: '出现', pinyin: 'chūxiàn', pos: 'động từ', meaning: 'xuất hiện, nảy sinh', han_viet: 'xuất hiện' },
    { hanzi: '后悔', pinyin: 'hòuhuǐ', pos: 'động từ', meaning: 'ân hận', han_viet: 'hậu hối' },
    { hanzi: '来不及', pinyin: 'láibují', pos: 'động từ', meaning: 'không kịp', han_viet: 'lai bất cập' },
    { hanzi: '反对', pinyin: 'fǎnduì', pos: 'động từ', meaning: 'phản đối', han_viet: 'phản đối' },
    { hanzi: '大夫', pinyin: 'dàifu', pos: 'danh từ', meaning: 'bác sĩ', han_viet: 'đại phu' },
    { hanzi: '植物', pinyin: 'zhíwù', pos: 'danh từ', meaning: 'thực vật', han_viet: 'thực vật' },
    { hanzi: '研究', pinyin: 'yánjiū', pos: 'động từ', meaning: 'nghiên cứu', han_viet: 'nghiên cứu' },
    { hanzi: '超过', pinyin: 'chāoguò', pos: 'động từ', meaning: 'vượt quá', han_viet: 'siêu quá' },
    { hanzi: '散步', pinyin: 'sàn bù', pos: 'động từ', meaning: 'đi dạo', han_viet: 'tản bộ' },
    { hanzi: '指', pinyin: 'zhǐ', pos: 'động từ', meaning: 'chỉ về, nói đến', han_viet: 'chỉ' },
    { hanzi: '精神', pinyin: 'jīngshén', pos: 'danh từ', meaning: 'tinh thần', han_viet: 'tinh thần' },
    { hanzi: '教授', pinyin: 'jiàoshòu', pos: 'danh từ', meaning: 'giáo sư', han_viet: 'giáo thụ' },
    { hanzi: '数字', pinyin: 'shùzì', pos: 'danh từ', meaning: 'con số', han_viet: 'số tự' },
    { hanzi: '说明', pinyin: 'shuōmíng', pos: 'động từ', meaning: 'giải thích rõ, nói rõ', han_viet: 'thuyết minh' },
    { hanzi: '要是', pinyin: 'yàoshi', pos: 'liên từ', meaning: 'nếu như, nếu', han_viet: 'yếu thị' },
    { hanzi: '既', pinyin: 'jì', pos: 'phó từ', meaning: '(dùng kết hợp với 又) đã… lại…, vừa… vừa…', han_viet: 'ký' },
    { hanzi: '减肥', pinyin: 'jiǎn féi', pos: 'động từ', meaning: 'giảm cân', han_viet: 'giảm phì' },
    { hanzi: '辛苦', pinyin: 'xīnkǔ', pos: 'tính từ', meaning: 'vất vả, cực nhọc', han_viet: 'tân khổ' },
    { hanzi: '肚子', pinyin: 'dùzi', pos: 'danh từ', meaning: 'bụng', han_viet: 'đỗ tử' },
    { hanzi: '感情', pinyin: 'gǎnqíng', pos: 'danh từ', meaning: 'tình cảm', han_viet: 'cảm tình' },
    { hanzi: '烦恼', pinyin: 'fánnǎo', pos: 'tính từ', meaning: 'phiền muộn, buồn phiền', han_viet: 'phiền não' },
    { hanzi: '掉', pinyin: 'diào', pos: 'động từ', meaning: '(sau động từ, chỉ kết quả) mất, đi, hết', han_viet: 'điệu' },
  ],

  sections: [
    {
      kind: 'examples', label: '估计', title: '估计 (đoán chừng)',
      intro: 'Động từ 估计 đưa ra suy đoán chung chung về sự vật dựa vào những điều kiện nào đó.',
      groups: [{ label: 'Ví dụ', items: [['我还不习惯北方的气候，估计是天气太干。', 'Wǒ hái bù xíguàn běifāng de qìhòu, gūjì shì tiānqì tài gān.', 'Tôi chưa quen khí hậu miền Bắc, chắc do trời quá khô.'], ['你有没有去问问小王？估计他应该有办法。', 'Nǐ yǒu méiyǒu qù wènwen Xiǎo Wáng? Gūjì tā yīnggāi yǒu bànfǎ.', 'Bạn đã hỏi Tiểu Vương chưa? Chắc anh ấy có cách.'], ['机场通知飞机晚点一个小时，估计他下午六点才能到上海。', 'Jīchǎng tōngzhī fēijī wǎn diǎn yí ge xiǎoshí, gūjì tā xiàwǔ liù diǎn cái néng dào Shànghǎi.', 'Sân bay thông báo máy bay trễ một giờ, chắc 6 giờ chiều anh ấy mới tới Thượng Hải.']] }],
    },
    {
      kind: 'examples', label: '估计 – 可能', title: 'So sánh 估计 và 可能',
      intro: 'Giống nhau: cả hai đều đưa ra suy đoán chung chung dựa vào điều kiện nào đó. Khác nhau: 估计 là động từ, có thể làm vị ngữ trực tiếp, theo sau là động từ hoặc vế câu; 可能 là động từ năng nguyện, chỉ đứng trước động từ. 可能 còn là tính từ (điều có thể thành sự thật: 最可能的原因); 可能 có thể thêm 很 thành 很可能, đứng trước hoặc sau chủ ngữ; 估计 không có các cách dùng này.',
      groups: [{ label: 'Ví dụ', items: [['今天的工作估计/可能完不成了，因为出了点儿问题。', 'Jīntiān de gōngzuò gūjì/kěnéng wán bu chéng le, yīnwèi chūle diǎnr wèntí.', 'Công việc hôm nay có lẽ không xong, vì có chút vấn đề.'], ['明天就可以上网查成绩了，我估计这次考试考得不错。', 'Míngtiān jiù kěyǐ shàng wǎng chá chéngjì le, wǒ gūjì zhè cì kǎoshì kǎo de búcuò.', 'Mai là có thể tra điểm online, tôi đoán lần này thi tốt.'], ['他这么多天没来上课，最可能的原因就是他回国了。', 'Tā zhème duō tiān méi lái shàng kè, zuì kěnéng de yuányīn jiù shì tā huí guó le.', 'Anh ấy nhiều ngày không đi học, lý do có thể nhất là về nước.'], ['很可能他还不知道这件事。', 'Hěn kěnéng tā hái bù zhīdào zhè jiàn shì.', 'Rất có thể anh ấy chưa biết chuyện này.']] }],
    },
    {
      kind: 'examples', label: '来不及', title: '来不及 (không kịp)',
      intro: 'Động từ 来不及 diễn tả do thời gian ngắn nên không kịp làm việc gì. Có thể dùng độc lập hoặc có động từ theo sau.',
      groups: [{ label: 'Ví dụ', items: [['等你身体出现问题了，后悔就来不及了。', 'Děng nǐ shēntǐ chūxiàn wèntí le, hòuhuǐ jiù láibují le.', 'Đợi cơ thể có vấn đề, hối hận cũng không kịp.'], ['今天来不及开会了，明天我们再找时间说这个问题吧。', 'Jīntiān láibují kāi huì le, míngtiān wǒmen zài zhǎo shíjiān shuō zhège wèntí ba.', 'Hôm nay không kịp họp, mai tìm thời gian bàn vấn đề này.'], ['你不是和同学约了下午两点见面吗？再不走就来不及了。', 'Nǐ bú shì hé tóngxué yuēle xiàwǔ liǎng diǎn jiàn miàn ma? Zài bù zǒu jiù láibují le.', 'Bạn chẳng hẹn bạn học 2 giờ chiều gặp sao? Không đi nữa là không kịp.']] }],
    },
    {
      kind: 'examples', label: 'Từ ly hợp lặp lại', title: 'Sự lặp lại của từ ly hợp (AAB)',
      intro: 'Từ ly hợp lặp lại diễn tả ý như thời gian ngắn, việc làm thử, sự nhẹ nhàng, tùy tiện. Hình thức lặp lại là "AAB", chẳng hạn: 散散步, 帮帮忙, 睡睡觉, 游游泳.',
      groups: [{ label: 'Ví dụ', items: [['咱们午饭后就去附近的公园散散步吧。', 'Zánmen wǔfàn hòu jiù qù fùjìn de gōngyuán sànsan bù ba.', 'Sau bữa trưa mình ra công viên gần đây đi dạo nhé.'], ['行李箱怎么这么重啊！你快来帮帮我的忙。', 'Xínglixiāng zěnme zhème zhòng a! Nǐ kuài lái bāngbang wǒ de máng.', 'Vali sao nặng thế! Bạn mau đến giúp tôi một tay.'], ['周末马克一般在宿舍看看书、听听音乐、睡睡觉。', 'Zhōumò Mǎkè yìbān zài sùshè kànkan shū, tīngting yīnyuè, shuìshui jiào.', 'Cuối tuần Mark thường ở ký túc xá đọc sách, nghe nhạc, ngủ.']] }],
    },
    {
      kind: 'examples', label: '要是 · 既…又/也/还', title: '要是 và 既……又/也/还……',
      intro: '要是: liên từ "nếu", thường dùng trong cấu trúc "要是……(的话)，就……". 既……又/也/还……: nối các cấu trúc động từ hoặc tính từ (hai cấu trúc thường giống nhau), diễn tả hai tình huống tồn tại đồng thời; có thể đều tích cực hoặc đều tiêu cực.',
      groups: [
        { label: '要是', items: [['要是健康是1，其他都是1后面的0。', 'Yàoshi jiànkāng shì yī, qítā dōu shì yī hòumiàn de líng.', 'Nếu sức khỏe là số 1, những thứ khác đều là số 0 phía sau.'], ['要是你想来中国的大学留学，和中国学生一起学习专业课，那么就需要做好这些准备。', 'Yàoshi nǐ xiǎng lái Zhōngguó de dàxué liúxué, hé Zhōngguó xuésheng yìqǐ xuéxí zhuānyè kè, nàme jiù xūyào zuòhǎo zhèxiē zhǔnbèi.', 'Nếu bạn muốn du học đại học Trung Quốc, học chuyên ngành cùng sinh viên Trung Quốc thì cần chuẩn bị những điều này.'], ['要是质量比别人的好的话，那么价格贵一点儿也是可以接受的。', 'Yàoshi zhìliàng bǐ biérén de hǎo de huà, nàme jiàgé guì yìdiǎnr yě shì kěyǐ jiēshòu de.', 'Nếu chất lượng tốt hơn của người khác thì giá đắt hơn chút cũng chấp nhận được.']] },
        { label: '既……又/也/还……', items: [['散步是生活中最简单的锻炼方法，既可以活动身体，又可以减肥。', 'Sàn bù shì shēnghuó zhōng zuì jiǎndān de duànliàn fāngfǎ, jì kěyǐ huódòng shēntǐ, yòu kěyǐ jiǎn féi.', 'Đi dạo là cách tập đơn giản nhất, vừa vận động cơ thể vừa giảm cân.'], ['会说话的人既容易交到朋友，也容易获得成功。', 'Huì shuō huà de rén jì róngyì jiāodào péngyou, yě róngyì huòdé chénggōng.', 'Người biết nói chuyện vừa dễ kết bạn vừa dễ thành công.'], ['他那个人做事既不认真，动作还慢，这个工作这么重要，还是让别人做吧。', 'Tā nàge rén zuò shì jì bú rènzhēn, dòngzuò hái màn, zhège gōngzuò zhème zhòngyào, háishi ràng biérén zuò ba.', 'Anh ấy làm việc vừa không nghiêm túc vừa chậm, việc này quan trọng nên để người khác làm.']] },
      ],
    },
    {
      kind: 'examples', label: 'Từ cùng chữ: 气', title: 'Những từ có chữ giống nhau: 气',
      intro: '生气, 脾气, 空气, 气候.',
      groups: [{ label: 'Ví dụ', items: [['别生气了，我刚才真的是跟你开玩笑的。', 'Bié shēng qì le, wǒ gāngcái zhēn de shì gēn nǐ kāi wánxiào de.', 'Đừng giận, vừa nãy tôi thật sự nói đùa với bạn.'], ['他不但能力强，而且脾气好，毕业后一定能找到一份好工作。', 'Tā búdàn nénglì qiáng, érqiě píqi hǎo, bì yè hòu yídìng néng zhǎodào yí fèn hǎo gōngzuò.', 'Anh ấy không những năng lực mạnh mà tính tình tốt, tốt nghiệp chắc chắn tìm được việc tốt.'], ['因为太高，这里空气比别的地方少，刚到这里的人会感觉身体不舒服。', 'Yīnwèi tài gāo, zhèlǐ kōngqì bǐ bié de dìfang shǎo, gāng dào zhèlǐ de rén huì gǎnjué shēntǐ bù shūfu.', 'Vì quá cao, không khí ở đây ít hơn nơi khác, người mới đến cảm thấy khó chịu.'], ['这次活动是从2007年开始的，它使人们更加关心世界气候变化的问题了。', 'Zhè cì huódòng shì cóng èr líng líng qī nián kāishǐ de, tā shǐ rénmen gèngjiā guānxīn shìjiè qìhòu biànhuà de wèntí le.', 'Hoạt động này bắt đầu từ năm 2007, khiến người ta quan tâm hơn đến biến đổi khí hậu thế giới.']] }],
    },
  ],

  notes: [
    { title: '估计', body: 'Động từ: suy đoán chung chung dựa vào điều kiện nào đó: 估计是天气太干; 估计他下午六点才能到上海. So với 可能: 估计 có thể làm vị ngữ trực tiếp, 可能 là động từ năng nguyện (và còn có thể làm tính từ, 很可能).', say: '估计是天气太干' },
    { title: '来不及', body: 'Động từ: do thời gian ngắn nên không kịp làm việc gì: 后悔就来不及了。Có thể dùng độc lập hoặc kèm động từ (来不及开会).', say: '后悔就来不及了' },
    { title: 'Từ ly hợp lặp lại (AAB)', body: 'AAB: 散散步, 帮帮忙, 睡睡觉, 游游泳 — chỉ thời gian ngắn, thử, nhẹ nhàng. Hình thức này khác với động từ thường (AA hay ABAB).', say: '咱们午饭后就去公园散散步吧' },
    { title: '要是', body: 'Liên từ "nếu", thường dùng trong 要是……(的话)，就……: vế đầu giả thiết, vế sau hành động/kết quả khi giả thiết xảy ra.', say: '要是健康是一，其他都是一后面的零' },
    { title: '既……又/也/还……', body: 'Nối hai cấu trúc động từ hoặc tính từ (thường giống nhau), diễn tả hai tình huống đồng thời tồn tại; đều tích cực hoặc đều tiêu cực: 既可以活动身体，又可以减肥.', say: '既可以活动身体，又可以减肥' },
    { title: 'Văn hóa: 最好的医生是自己', body: 'Một bác sĩ từng nói: "最好的医生是自己，最好的药是时间，最好的运动是散步" — bác sĩ tốt nhất là bản thân, thuốc tốt nhất là thời gian, môn thể thao tốt nhất là đi bộ. Câu nói nhấn mạnh chăm sóc sức khỏe bằng thói quen tốt hơn là chỉ dựa vào thuốc.', say: '最好的医生是自己，最好的药是时间，最好的运动是散步' },
  ],

  writeChars: ['擦', '估', '咳', '嗽', '严', '悔', '研', '究'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa',
      items: [
        { q: '小林可能是中国哪里人？为什么？', hint: '可能是南方人，因为他还不习惯北方的气候。' },
        { q: '春天的时候怎么才能少感冒？', hint: '多注意保暖，经常打开窗户换换空气。' },
        { q: '小雨为什么喜欢抽烟？你同意小雨的想法吗？为什么？', hint: '因为他觉得抽烟的动作看上去很帅；抽烟对身体一点儿好处也没有。' },
        { q: '长时间坐在电脑前面工作好不好？为什么？', hint: '不好，眼睛容易累，身体也会不舒服。' },
        { q: '怎样才能保护自己的眼睛和身体？', hint: '每过一小时就休息休息，多向远处看看，多站起来活动活动。' },
        { q: '过去和现在的人们对健康的认识有哪些不同？', hint: '过去认为健康是身体不生病；现在认为健康还包括精神上的健康。' },
        { q: '“我”是怎么理解“最好的运动是散步”这句话的？', hint: '散步是最简单的锻炼方法，既可以活动身体，又可以减肥，而且不辛苦。' },
        { q: '晚饭后和家人一起去散散步有哪几个方面的好处？', hint: '活动身体、家人交流、加深夫妻感情、听孩子聊学校的事、让烦恼跑掉。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: hỏi nhau về việc thích nghi với khí hậu', hint: '你对现在生活的地方的气候习惯吗？说说这里的气候有什么特点。要是有重新选择的机会，你会选择在什么样气候的地方生活？为什么？' },
        { q: 'Theo nhóm: giới thiệu môn thể thao bạn thích nhất, dùng ít nhất 4 cấu trúc', hint: '既……又……；估计；来不及；要是……就……；散散步；超过；辛苦；减肥。' },
      ],
    },
  ],

  sentences: [
    { parts: ['我', '还', '不', '习惯', '北方', '的', '气候', '估计', '是', '天气', '太', '干'], pinyin: 'Wǒ hái bù xíguàn běifāng de qìhòu, gūjì shì tiānqì tài gān.', vi: 'Tôi chưa quen khí hậu miền Bắc, chắc do trời quá khô.' },
    { parts: ['等', '你', '身体', '出现', '问题', '了', '后悔', '就', '来不及', '了'], pinyin: 'Děng nǐ shēntǐ chūxiàn wèntí le, hòuhuǐ jiù láibují le.', vi: 'Đợi cơ thể có vấn đề, hối hận cũng không kịp.' },
    { parts: ['长', '时间', '对着', '电脑', '不仅', '对', '眼睛', '不', '好', '身体', '也', '会', '不', '舒服'], pinyin: 'Cháng shíjiān duìzhe diànnǎo bùjǐn duì yǎnjing bù hǎo, shēntǐ yě huì bù shūfu.', vi: 'Nhìn máy tính lâu không chỉ hại mắt mà cơ thể cũng khó chịu.' },
    { parts: ['散步', '既', '可以', '活动', '身体', '又', '可以', '减肥'], pinyin: 'Sàn bù jì kěyǐ huódòng shēntǐ, yòu kěyǐ jiǎn féi.', vi: 'Đi dạo vừa vận động cơ thể vừa giảm cân.' },
    { parts: ['最', '好', '的', '医生', '是', '自己'], pinyin: 'Zuì hǎo de yīshēng shì zìjǐ.', vi: 'Bác sĩ tốt nhất là bản thân.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 后悔 · B 擦 · C 反对 · D 动作 · E 指. Gõ chữ cái A–E.',
      items: [
        { prompt: '经理让服务员把所有桌子都（ ）干净。', answer: 'B', gloss: '擦' }, { prompt: '第一印象是（ ）在第一次见面时给别人留下的印象。', answer: 'E', gloss: '指' },
        { prompt: '生气时不要急着做决定，因为这个时候做的决定可能让你（ ）。', answer: 'A', gloss: '后悔' }, { prompt: '他对自己的要求很高，希望比赛的时候把每个（ ）都做好。', answer: 'D', gloss: '动作' },
        { prompt: '我本来以为她会（ ）我这么做，没想到她竟然支持我。', answer: 'C', gloss: '反对' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 严重 · B 研究 · C 辛苦 · D 超过 · E 出现. Gõ chữ cái A–E.',
      items: [
        { prompt: '你的腿怎么了？快坐下休息一会儿吧。 没事儿，大夫说不（ ）。', answer: 'A', gloss: '严重' }, { prompt: '你看一下，现在有多少人同意这个计划？ 一共有十五个人，（ ）了三分之二。', answer: 'D', gloss: '超过' },
        { prompt: '今天的晚饭怎么样？ 特别好吃，（ ）你了，一会儿我来洗碗。', answer: 'C', gloss: '辛苦' }, { prompt: '你觉得老孙这个人怎么样？ 老孙是个非常热情的人，他总是能在第一时间（ ），帮助大家解决问题。', answer: 'E', gloss: '出现' },
        { prompt: '你毕业后有什么打算？留北京还是回江西？ 还没决定，我在考虑要不要读（ ）生。', answer: 'B', gloss: '研究' },
      ],
    },
    {
      title: 'Giáo trình 比一比 · 估计 / 可能 (gõ từ)',
      hint: 'Gõ 估计 hoặc 可能 theo đáp án sách (câu 3 chấp nhận cả hai).',
      items: [
        { prompt: '已经这么晚了，老师（ ）休息了，你别打电话了。', answer: '估计', accept: ['可能'], gloss: '估计 / 可能' },
        { prompt: '我看这是不（ ）的事情，网上的消息可不能全信。', answer: '可能', gloss: '可能' },
        { prompt: '你看，那个人最（ ）想做什么？', answer: '可能', gloss: '可能' },
      ],
    },
    {
      title: 'Giáo trình 扩展 · 气 (gõ từ)',
      hint: 'Gõ 空气, 脾气, 气候 hoặc 生气.',
      items: [
        { prompt: '听说你去丽江玩儿了？那儿怎么样？ 那里特别美，（ ）也很新鲜。', answer: '空气', gloss: '空气' },
        { prompt: '为什么有的孩子喜欢发（ ）呢？ 他们主要是想从爸妈那里得到一些好处。', answer: '脾气', gloss: '脾气' },
        { prompt: '来北方好几年了吧？你觉得北方和南方的（ ）一样吗？ 夏天差不多，但是冬天北方比较干。', answer: '气候', gloss: '气候' },
        { prompt: '你怎么还没到啊！我已经等了你一个小时了。 别（ ），我马上就到门口了。', answer: '生气', gloss: '生气' },
      ],
    },
  ],
}
