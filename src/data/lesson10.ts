import type { Lesson } from './types'

const L = '李昌浩 Lǐ Chānghào'
const Z = '职员 zhíyuán'

export const lesson10: Lesson = {
  id: 10,
  dialogueAudio: '/audio/ppt/l10-baikhoa.mp3',
  title: 'Anh ấy ở đâu',
  hanzi: '他住哪儿',
  pinyin: 'Tā zhù nǎr',
  vi: 'Anh ấy ở đâu',
  intro: 'Hỏi người ở đâu, tìm ai, hỏi số phòng và số điện thoại; trật tự câu tiếng Hán; câu vị ngữ động từ; cách đọc số hiệu (một đọc là yāo).',
  dialogue: [
    { who: 'A', name: L, hanzi: '请问，这是办公室吗？', pinyin: 'Qǐngwèn, zhè shì bàngōngshì ma?', vi: 'Xin hỏi, đây là văn phòng phải không?' },
    { who: 'B', name: Z, hanzi: '是。你找谁？', pinyin: 'Shì. Nǐ zhǎo shéi?', vi: 'Phải. Bạn tìm ai?' },
    { who: 'A', name: L, hanzi: '王老师在吗？我是他的学生。', pinyin: 'Wáng lǎoshī zài ma? Wǒ shì tā de xuésheng.', vi: 'Thầy Vương có ở đây không? Em là học sinh của thầy.' },
    { who: 'B', name: Z, hanzi: '他不在。他在家呢。', pinyin: 'Tā bú zài. Tā zài jiā ne.', vi: 'Thầy không có ở đây. Thầy đang ở nhà.' },
    { who: 'A', name: L, hanzi: '他住哪儿？', pinyin: 'Tā zhù nǎr?', vi: 'Thầy ở đâu ạ?' },
    { who: 'B', name: Z, hanzi: '他住十八楼一门，房间号是 6 0 1。', pinyin: 'Tā zhù shíbā lóu yī mén, fángjiān hào shì liù líng yāo.', vi: 'Thầy ở tòa 18, cửa số 1, phòng số 601.' },
    { who: 'A', name: L, hanzi: '您知道他的电话号码吗？', pinyin: 'Nín zhīdào tā de diànhuà hàomǎ ma?', vi: 'Bác có biết số điện thoại của thầy không?' },
    { who: 'B', name: Z, hanzi: '知道，6 2 9 3 1 0 7 4。', pinyin: 'Zhīdào, liù èr jiǔ sān yāo líng qī sì.', vi: 'Biết, 62931074.' },
    { who: 'A', name: L, hanzi: '他的手机号码是多少？', pinyin: 'Tā de shǒujī hàomǎ shì duōshao?', vi: 'Số di động của thầy là bao nhiêu ạ?' },
    { who: 'B', name: Z, hanzi: '不知道。', pinyin: 'Bù zhīdào.', vi: 'Không biết.' },
    { who: 'A', name: L, hanzi: '谢谢您。', pinyin: 'Xièxie nín.', vi: 'Cảm ơn bác.' },
    { who: 'B', name: Z, hanzi: '不客气。', pinyin: 'Bú kèqi.', vi: 'Đừng khách sáo.' },
  ],
  dialogueTip: 'Hỏi người lạ bắt đầu bằng <b>请问，…?</b>. Hỏi chỗ ở: <b>他住哪儿?</b>. Hỏi có mặt không: <b>王老师在吗?</b>. Khi đọc số điện thoại, số phòng thì đọc từng chữ số, và <b>一 đọc là yāo</b> (601 = liù líng yāo).',
  slowSay: '他住哪儿',
  vocab: [
    { hanzi: '办公室', pinyin: 'bàngōngshì', pos: 'danh từ', meaning: 'văn phòng', han_viet: 'biện công thất' },
    { hanzi: '办公', pinyin: 'bàngōng', pos: 'động từ', meaning: 'làm việc (ở văn phòng)', han_viet: 'biện công' },
    { hanzi: '职员', pinyin: 'zhíyuán', pos: 'danh từ', meaning: 'nhân viên văn phòng', han_viet: 'chức viên' },
    { hanzi: '找', pinyin: 'zhǎo', pos: 'động từ', meaning: 'tìm', han_viet: 'trảo' },
    { hanzi: '在', pinyin: 'zài', pos: 'động/giới từ', meaning: 'ở, tại, có mặt ở', han_viet: 'tại' },
    { hanzi: '家', pinyin: 'jiā', pos: 'danh/lượng từ', meaning: 'nhà; (lượng từ cho gia đình, công ty, cửa hàng)', han_viet: 'gia' },
    { hanzi: '呢', pinyin: 'ne', pos: 'trợ từ', meaning: 'trợ từ cuối câu (xác nhận một sự việc, một tình trạng)', han_viet: '' },
    { hanzi: '住', pinyin: 'zhù', pos: 'động từ', meaning: 'ở, sống, trọ', han_viet: 'trú' },
    { hanzi: '楼', pinyin: 'lóu', pos: 'danh từ', meaning: 'toà nhà, tầng', han_viet: 'lâu' },
    { hanzi: '门', pinyin: 'mén', pos: 'danh từ', meaning: 'cửa, cổng (lối vào)', han_viet: 'môn' },
    { hanzi: '房间', pinyin: 'fángjiān', pos: 'danh từ', meaning: 'phòng', han_viet: 'phòng gian' },
    { hanzi: '号', pinyin: 'hào', pos: 'danh từ', meaning: 'số (số nhà, số phòng, ngày)', han_viet: 'hiệu' },
    { hanzi: '知道', pinyin: 'zhīdào', pos: 'động từ', meaning: 'biết', han_viet: 'tri đạo' },
    { hanzi: '电话', pinyin: 'diànhuà', pos: 'danh từ', meaning: 'điện thoại', han_viet: 'điện thoại' },
    { hanzi: '电', pinyin: 'diàn', pos: 'danh từ', meaning: 'điện', han_viet: 'điện' },
    { hanzi: '话', pinyin: 'huà', pos: 'danh từ', meaning: 'lời nói', han_viet: 'thoại' },
    { hanzi: '号码', pinyin: 'hàomǎ', pos: 'danh từ', meaning: 'số hiệu (số điện thoại, số phòng…)', han_viet: 'hiệu mã' },
    { hanzi: '零', pinyin: 'líng', pos: 'số từ', meaning: 'số không (cũng viết 〇)', han_viet: 'linh' },
    { hanzi: '手机', pinyin: 'shǒujī', pos: 'danh từ', meaning: 'điện thoại di động', han_viet: 'thủ cơ' },
    { hanzi: '手', pinyin: 'shǒu', pos: 'danh từ', meaning: 'tay', han_viet: 'thủ' },
    { hanzi: '李昌浩', pinyin: 'Lǐ Chānghào', pos: 'tên riêng', meaning: 'Lý Xương Hạo (tên một người Hàn Quốc)', han_viet: 'Lý Xương Hạo' },
  ],
  sections: [
    {
      kind: 'examples', label: 'Đọc số hiệu', title: 'Đọc số hiệu: số phòng, số điện thoại (号码)',
      intro: 'Số hiệu (số điện thoại, số phòng, số xe, số hộ chiếu) được đọc từng chữ số một, dù có bao nhiêu chữ số. Hai điểm hay sai: chữ số 1 thường đọc là yāo (không đọc yī), và chữ số 2 đọc là èr (không đọc liǎng). Chữ số trùng nhau thì đọc lần lượt từng chữ. Ở đây chữ 幺 là cách viết của yāo để máy đọc đúng.',
      groups: [
        { label: '1 đọc yāo', items: [['幺八幺号', 'yāo bā yāo hào', 'số 181']] },
        { label: '2 đọc èr, không đọc liǎng', items: [['二幺二号', 'èr yāo èr hào', 'số 212']] },
        { label: 'Chữ số trùng nhau đọc từng chữ', items: [['六六零零四幺幺二', 'liù liù líng líng sì yāo yāo èr', 'số điện thoại 66004112']] },
        { label: 'Số điện thoại trong bài', items: [['六二九三幺零七四', 'liù èr jiǔ sān yāo líng qī sì', 'số điện thoại 62931074'], ['六零幺号', 'liù líng yāo hào', 'phòng 601']] },
        { label: 'Địa chỉ: tòa, cửa, số', items: [['十八楼四门八号', 'shíbā lóu sì mén bā hào', 'tòa 18, cửa 4, số 8 (số tòa đọc như số bình thường)']] },
      ],
    },
  ],
  notes: [
    {
      title: 'Xin hỏi: 请问',
      body: 'Khi hỏi người lạ một việc gì, thường mở đầu bằng 请问，……? (Xin hỏi, …?). 请问，这是办公室吗? (Xin hỏi, đây là văn phòng phải không?) Đây là cách mở lời lịch sự, dùng được ở mọi nơi.',
      say: '请问，这是办公室吗',
    },
    {
      title: 'Trợ từ 呢: xác nhận sự việc',
      body: '呢 đứng cuối câu trần thuật, mang giọng khẳng định để xác nhận một sự việc hay tình trạng đang diễn ra: 他在家呢 (thầy đang ở nhà đấy). Không biến câu thành câu hỏi. Khác với 吗 (hỏi có/không) và 吧 (đề nghị).',
      say: '他在家呢',
    },
    {
      title: 'Ôn: 您 – kính ngữ của 你',
      body: '您 là cách nói kính trọng của 你, dùng với người lớn tuổi hoặc người cần tôn trọng: 您知道他的电话号码吗? 谢谢您。 Với bạn bè, đồng trang lứa thì dùng 你.',
      say: '谢谢您',
    },
    {
      title: 'Số 0: 零 (〇)',
      body: 'Số 0 đọc là líng, khi viết bằng chữ Hán là 零 hoặc 〇. Trong số điện thoại, số phòng chữ số 0 vẫn đọc líng: 601 đọc là liù líng yāo.',
      say: '零',
    },
    {
      title: 'Trật tự câu tiếng Hán (语序)',
      body: 'Tiếng Hán không biến đổi hình thức từ, nên trật tự từ là phương tiện ngữ pháp chính. Câu có sáu thành phần: chủ ngữ, vị ngữ, tân ngữ, định ngữ, trạng ngữ, bổ ngữ. Chủ ngữ đứng trước, vị ngữ đứng sau; vị ngữ thường là động từ; tân ngữ theo sau động từ; trạng ngữ bổ nghĩa cho động từ hoặc tính từ và đứng trước chúng; định ngữ đứng trước danh từ. Ví dụ: 我朋友 (định + danh) 下午 (trạng ngữ) 去 (động từ) 银行 (tân ngữ): "Bạn tôi chiều nay đi ngân hàng". 汉语 不太 难: chủ ngữ + trạng ngữ + tính từ.',
      say: '我朋友下午去银行',
    },
    {
      title: 'Câu vị ngữ động từ: chủ ngữ + động từ + tân ngữ',
      body: 'Câu có động từ làm thành phần chính của vị ngữ, có trật tự: chủ ngữ + vị ngữ (động từ) + tân ngữ. 我学习汉语。她吃米饭。王老师住十八楼。我不去图书馆。Chú ý từ phủ định 不 đứng ngay trước động từ.',
      say: '王老师住十八楼',
    },
    {
      title: 'Cách đọc số hiệu: số điện thoại, số phòng (号码)',
      body: 'Số hiệu đọc từng chữ số một. Một ở số hiệu thường đọc yāo: 181 号 → yāo bā yāo hào. Hai đọc èr, không đọc liǎng: 212 号 → èr yāo èr hào. Chữ số giống nhau đọc lần lượt: 66004112 → liù liù líng líng sì yāo yāo èr. Hỏi số: 你住几号? hoặc 你的电话号码是多少?',
      say: '你的电话号码是多少',
    },
    {
      title: 'Động từ 在 và 找: ở đâu, tìm ai',
      body: '在 là động từ "ở, có mặt": 他在家 (anh ấy ở nhà), 王老师在吗? (thầy có đó không?). Phủ định: 不在 (他不在). 在 cũng làm giới từ chỉ nơi chốn. 找 là "tìm": 找老师, 找同学, 找朋友. Ở Bài 8, 找 còn có nghĩa "thối tiền".',
      say: '王老师在吗',
    },
    {
      title: 'Nói nơi ở: 住 + tòa, cửa, phòng',
      body: '住 + nơi chốn: 他住十八楼 (anh ấy ở tòa 18). Địa chỉ đi từ lớn đến nhỏ: 十八楼 (tòa số 18) → 一门 (cửa số 1) → 房间号是 601 (phòng số 601). Hỏi nơi ở: 他住哪儿? hoặc 你住几号?',
      say: '他住十八楼一门',
    },
  ],
  sentences: [
    { parts: ['请问', '这', '是', '办公室', '吗'], pinyin: 'Qǐngwèn, zhè shì bàngōngshì ma?', vi: 'Xin hỏi, đây là văn phòng phải không?' },
    { parts: ['你', '找', '谁'], pinyin: 'Nǐ zhǎo shéi?', vi: 'Bạn tìm ai?' },
    { parts: ['王', '老师', '在', '吗'], pinyin: 'Wáng lǎoshī zài ma?', vi: 'Thầy Vương có ở đây không?' },
    { parts: ['我', '是', '他', '的', '学生'], pinyin: 'Wǒ shì tā de xuésheng.', vi: 'Em là học sinh của thầy.' },
    { parts: ['他', '不', '在'], pinyin: 'Tā bú zài.', vi: 'Thầy không có ở đây.' },
    { parts: ['他', '在', '家', '呢'], pinyin: 'Tā zài jiā ne.', vi: 'Thầy đang ở nhà.' },
    { parts: ['他', '住', '哪儿'], pinyin: 'Tā zhù nǎr?', vi: 'Thầy ở đâu ạ?' },
    { parts: ['他', '住', '十八', '楼'], pinyin: 'Tā zhù shíbā lóu.', vi: 'Thầy ở tòa 18.' },
    { parts: ['您', '知道', '他', '的', '电话', '号码', '吗'], pinyin: 'Nín zhīdào tā de diànhuà hàomǎ ma?', vi: 'Bác có biết số điện thoại của thầy không?' },
    { parts: ['他', '的', '手机', '号码', '是', '多少'], pinyin: 'Tā de shǒujī hàomǎ shì duōshao?', vi: 'Số di động của thầy là bao nhiêu?' },
    { parts: ['不', '知道'], pinyin: 'Bù zhīdào.', vi: 'Không biết.' },
    { parts: ['她', '吃', '米饭'], pinyin: 'Tā chī mǐfàn.', vi: 'Cô ấy ăn cơm.' },
    { parts: ['王', '老师', '住', '十八', '楼'], pinyin: 'Wáng lǎoshī zhù shíbā lóu.', vi: 'Thầy Vương ở tòa 18.' },
  ],
  writeChars: ['住', '办', '公', '室', '在', '家', '呢', '知', '道', '电', '话', '号', '手', '机'],
  drills: [
    {
      title: 'Phân biệt âm và thanh điệu', hint: 'Đọc từng từ, chú ý thanh điệu và âm đầu.',
      items: [
        { h: '读书', p: 'dú shū' }, { h: '图书', p: 'túshū' }, { h: '借书', p: 'jiè shū' }, { h: '写书', p: 'xiě shū' },
        { h: '敲门', p: 'qiāo mén' }, { h: '叫人', p: 'jiào rén' }, { h: '不可', p: 'bù kě' }, { h: '补课', p: 'bǔ kè' },
        { h: '客气', p: 'kèqi' }, { h: '不过', p: 'búguò' },
      ],
    },
    {
      title: 'Vần 儿 hoá (儿化韵)', hint: 'Cuốn nhẹ đầu lưỡi ở cuối âm tiết.',
      items: [
        { h: '一点儿', p: 'yìdiǎnr' }, { h: '一下儿', p: 'yíxiàr' }, { h: '差点儿', p: 'chàdiǎnr' }, { h: '有点儿', p: 'yǒudiǎnr' },
        { h: '住哪儿', p: 'zhù nǎr' }, { h: '住这儿', p: 'zhù zhèr' }, { h: '旁边儿', p: 'pángbiānr' }, { h: '好点儿', p: 'hǎo diǎnr' },
      ],
    },
    {
      title: 'Biến điệu của 一', hint: 'Chú ý yī / yì / yí.',
      items: [
        { h: '一只', p: 'yì zhī' }, { h: '一包', p: 'yì bāo' }, { h: '一把', p: 'yì bǎ' }, { h: '一碗', p: 'yì wǎn' },
        { h: '一课', p: 'yí kè' }, { h: '一件', p: 'yí jiàn' }, { h: '一次', p: 'yí cì' }, { h: '一片', p: 'yí piàn' },
      ],
    },
    {
      title: 'Thanh nhẹ (轻声)', hint: 'Âm tiết sau đọc nhẹ và ngắn.',
      items: [
        { h: '鼻子', p: 'bízi' }, { h: '嗓子', p: 'sǎngzi' }, { h: '肚子', p: 'dùzi' }, { h: '裤子', p: 'kùzi' },
        { h: '裙子', p: 'qúnzi' }, { h: '被子', p: 'bèizi' }, { h: '本子', p: 'běnzi' },
        { h: '累吗', p: 'lèi ma' }, { h: '饿吗', p: 'è ma' }, { h: '饿了', p: 'è le' }, { h: '渴吗', p: 'kě ma' }, { h: '渴了', p: 'kě le' },
        { h: '冷了', p: 'lěng le' }, { h: '冻了', p: 'dòng le' }, { h: '小了', p: 'xiǎo le' }, { h: '少了', p: 'shǎo le' },
        { h: '多了', p: 'duō le' }, { h: '跑了', p: 'pǎo le' }, { h: '哭了', p: 'kū le' }, { h: '笑了', p: 'xiào le' },
      ],
    },
    {
      title: 'Biến điệu thanh 3 (三声变调)', hint: 'Hai thanh 3 liền nhau: âm đầu đọc thành thanh 2; thanh 3 trước thanh khác đọc nửa xuống.',
      items: [
        { h: '请喝', p: 'qǐng hē' }, { h: '你听', p: 'nǐ tīng' }, { h: '可能', p: 'kěnéng' }, { h: '很疼', p: 'hěn téng' },
        { h: '好冷', p: 'hǎo lěng' }, { h: '美好', p: 'měihǎo' }, { h: '手表', p: 'shǒubiǎo' }, { h: '很大', p: 'hěn dà' },
        { h: '可怕', p: 'kěpà' }, { h: '很慢', p: 'hěn màn' }, { h: '好看', p: 'hǎokàn' },
      ],
    },
    {
      title: 'Đọc liền nhiều âm tiết (多音节连读)', hint: 'Đọc liền mạch cả cụm.',
      items: [
        { h: '记生词', p: 'jì shēngcí' }, { h: '写汉字', p: 'xiě Hànzì' }, { h: '读课文', p: 'dú kèwén' },
        { h: '听录音', p: 'tīng lùyīn' }, { h: '听音乐', p: 'tīng yīnyuè' }, { h: '做练习', p: 'zuò liànxí' },
        { h: '去商店', p: 'qù shāngdiàn' }, { h: '买东西', p: 'mǎi dōngxi' }, { h: '看电影', p: 'kàn diànyǐng' },
        { h: '看电视', p: 'kàn diànshì' }, { h: '打网球', p: 'dǎ wǎngqiú' }, { h: '踢足球', p: 'tī zúqiú' },
      ],
    },
    {
      title: 'Phối hợp thanh điệu (声调搭配)', hint: 'Đọc to từng từ, giữ đúng thanh của từng âm tiết.',
      items: [
        { h: '先生', p: 'xiānsheng' }, { h: '姑娘', p: 'gūniang' }, { h: '干净', p: 'gānjing' }, { h: '清楚', p: 'qīngchu' },
        { h: '什么', p: 'shénme' }, { h: '时候', p: 'shíhou' }, { h: '凉快', p: 'liángkuai' }, { h: '名字', p: 'míngzi' },
        { h: '你们', p: 'nǐmen' }, { h: '我们', p: 'wǒmen' }, { h: '早上', p: 'zǎoshang' }, { h: '晚上', p: 'wǎnshang' },
        { h: '这个', p: 'zhège' }, { h: '地方', p: 'dìfang' }, { h: '这么', p: 'zhème' }, { h: '漂亮', p: 'piàoliang' },
      ],
    },
    {
      title: 'Nhận đọc (认读): 找, 在, 知道', hint: 'Đọc cả cụm. Bấm để nghe đáp án.',
      items: [
        { h: '找老师', p: 'zhǎo lǎoshī' }, { h: '找同学', p: 'zhǎo tóngxué' }, { h: '找朋友', p: 'zhǎo péngyou' }, { h: '找书', p: 'zhǎo shū' }, { h: '找食堂', p: 'zhǎo shítáng' },
        { h: '在家', p: 'zài jiā' }, { h: '在学校', p: 'zài xuéxiào' }, { h: '在食堂', p: 'zài shítáng' }, { h: '在八楼', p: 'zài bā lóu' }, { h: '在办公室', p: 'zài bàngōngshì' },
        { h: '我知道', p: 'wǒ zhīdào' }, { h: '你知道', p: 'nǐ zhīdào' }, { h: '他知道', p: 'tā zhīdào' }, { h: '不知道', p: 'bù zhīdào' }, { h: '知道吗', p: 'zhīdào ma' },
      ],
    },
    {
      title: 'Số điện thoại thường dùng (常用电话号码)', hint: 'Phụ lục của sách. Nhớ 1 đọc yāo, 0 đọc líng. Chữ 幺 là yāo để máy đọc đúng.',
      items: [
        { h: '查号台：幺幺四', p: 'chá hào tái: yāo yāo sì', m: 'Tổng đài tra số · 114' },
        { h: '匪警电话：幺幺零', p: 'fěijǐng diànhuà: yāo yāo líng', m: 'Báo cảnh sát · 110' },
        { h: '天气预报：幺二幺', p: 'tiānqì yùbào: yāo èr yāo', m: 'Dự báo thời tiết · 121' },
        { h: '火警电话：幺幺九', p: 'huǒjǐng diànhuà: yāo yāo jiǔ', m: 'Báo cháy · 119' },
        { h: '急救电话：幺二零', p: 'jíjiù diànhuà: yāo èr líng', m: 'Cấp cứu · 120' },
      ],
    },
    {
      title: 'Thực hành nói (成段表达)', hint: 'Đọc đoạn mẫu rồi kể lại bằng lời của bạn.',
      items: [
        { h: '我去办公室找王老师，办公室的老师说，王老师不在，他在家呢。', p: 'Wǒ qù bàngōngshì zhǎo Wáng lǎoshī, bàngōngshì de lǎoshī shuō, Wáng lǎoshī bú zài, tā zài jiā ne.' },
        { h: '王老师住十八楼一门六零一号，他家的电话是六二九三幺零七四。', p: 'Wáng lǎoshī zhù shíbā lóu yī mén liù líng yāo hào, tā jiā de diànhuà shì liù èr jiǔ sān yāo líng qī sì.' },
      ],
    },
  ],
  qa: [
    {
      title: 'Trả lời câu hỏi (回答问题)',
      items: [
        { q: '(1) Nǐ shì liúxuéshēng ma? (你是留学生吗?)', hint: 'Shì, wǒ shì liúxuéshēng. / Bú shì. (是，我是留学生。/ 不是。)' },
        { q: '(2) Nǐ xuéxí shénme? (你学习什么?)', hint: 'Wǒ xuéxí Hànyǔ. (我学习汉语。)' },
        { q: '(3) Nǐ zhù nǎr? (你住哪儿?)', hint: 'Wǒ zhù + địa chỉ của bạn, ví dụ: Wǒ zhù shíbā lóu. (我住十八楼。)' },
        { q: '(4) Nǐ zhù duōshao hào? (你住多少号?)', hint: 'Wǒ zhù + số phòng, đọc từng chữ số, ví dụ: liù líng yāo hào (601 号).' },
        { q: '(5) Nǐ de shǒujī hàomǎ shì duōshao? (你的手机号码是多少?)', hint: 'Đọc từng chữ số của số điện thoại bạn, nhớ 1 đọc yāo.' },
      ],
    },
  ],
}
