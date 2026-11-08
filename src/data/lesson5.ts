import type { Lesson } from './types'

export const lesson5: Lesson = {
  id: 5,
  title: 'Đây là thầy Vương',
  hanzi: '这是王老师',
  pinyin: 'Zhè shì Wáng lǎoshī',
  vi: 'Đây là thầy Vương',
  intro: 'Thanh mẫu cuốn lưỡi zh ch sh r, vần -i thứ hai; giới thiệu người, mời khách, cảm ơn, hỏi thăm công việc và sức khỏe; đếm 1–10.',
  dialogue: [
    { who: 'A', scene: '(一) Giới thiệu và mời khách', hanzi: '这是王老师，这是我爸爸。', pinyin: 'Zhè shì Wáng lǎoshī, zhè shì wǒ bàba.', vi: 'Đây là thầy Vương, đây là bố tôi.' },
    { who: 'B', hanzi: '王老师，您好！', pinyin: 'Wáng lǎoshī, nín hǎo!', vi: 'Chào thầy Vương ạ!' },
    { who: 'C', hanzi: '您好！请进！请坐！请喝茶！', pinyin: 'Nín hǎo! Qǐng jìn! Qǐng zuò! Qǐng hē chá!', vi: 'Chào ông! Mời vào! Mời ngồi! Mời uống trà!' },
    { who: 'B', hanzi: '谢谢！', pinyin: 'Xièxie!', vi: 'Cảm ơn ạ!' },
    { who: 'C', hanzi: '不客气！', pinyin: 'Bú kèqi!', vi: 'Đừng khách sáo!' },
    { who: 'C', scene: '(二) Hỏi thăm sau đó', hanzi: '工作忙吗？', pinyin: 'Gōngzuò máng ma?', vi: 'Công việc có bận không?' },
    { who: 'B', hanzi: '不太忙。', pinyin: 'Bú tài máng.', vi: 'Không bận lắm.' },
    { who: 'C', hanzi: '身体好吗？', pinyin: 'Shēntǐ hǎo ma?', vi: 'Sức khỏe có tốt không?' },
    { who: 'B', hanzi: '很好！', pinyin: 'Hěn hǎo!', vi: 'Rất tốt!' },
  ],
  dialogueTip: 'Bài khóa có 3 người nói (A, B, C). <b>您 nín</b> là cách nói "ông/bà/ngài" lịch sự của 你. Câu mời dùng <b>请 + động từ</b> (请进 mời vào, 请坐 mời ngồi). Đáp lại lời cảm ơn: <b>不客气</b>.',
  slowSay: '这是王老师',
  vocab: [
    { hanzi: '这', pinyin: 'zhè', pos: 'đại từ', meaning: 'đây, này', han_viet: 'giá' },
    { hanzi: '是', pinyin: 'shì', pos: 'động từ', meaning: 'là', han_viet: 'thị' },
    { hanzi: '老师', pinyin: 'lǎoshī', pos: 'danh từ', meaning: 'thầy giáo, cô giáo', han_viet: 'lão sư' },
    { hanzi: '您', parts: '你 (nǐ) + 心 (tâm): "bạn" thêm lòng kính trọng', pinyin: 'nín', pos: 'đại từ', meaning: 'ông, bà, ngài (kính ngữ của 你)', han_viet: '' },
    { hanzi: '请', pinyin: 'qǐng', pos: 'động từ', meaning: 'mời, xin', han_viet: 'thỉnh' },
    { hanzi: '进', pinyin: 'jìn', pos: 'động từ', meaning: 'vào', han_viet: 'tiến' },
    { hanzi: '坐', pinyin: 'zuò', pos: 'động từ', meaning: 'ngồi', han_viet: 'tọa' },
    { hanzi: '喝', pinyin: 'hē', pos: 'động từ', meaning: 'uống', han_viet: 'hát' },
    { hanzi: '茶', pinyin: 'chá', pos: 'danh từ', meaning: 'trà', han_viet: 'trà' },
    { hanzi: '谢谢', parts: '讠 (bộ ngôn) + 射 (xạ)', pinyin: 'xièxie', pos: 'động từ', meaning: 'cảm ơn', han_viet: 'tạ tạ' },
    { hanzi: '不客气', pinyin: 'bú kèqi', pos: 'cụm', meaning: 'đừng khách sáo, không có gì', han_viet: '' },
    { hanzi: '客气', pinyin: 'kèqi', pos: 'tính từ', meaning: 'khách sáo, lịch sự', han_viet: 'khách khí' },
    { hanzi: '工作', pinyin: 'gōngzuò', pos: 'danh/động từ', meaning: 'công việc; làm việc', han_viet: 'công tác' },
    { hanzi: '身体', pinyin: 'shēntǐ', pos: 'danh từ', meaning: 'sức khỏe, cơ thể', han_viet: 'thân thể' },
    { hanzi: '十', pinyin: 'shí', pos: 'số từ', meaning: 'mười', han_viet: 'thập' },
    { hanzi: '日', pinyin: 'rì', pos: 'danh từ', meaning: 'mặt trời; ngày', han_viet: 'nhật' },
    { hanzi: '王', pinyin: 'Wáng', pos: 'tên riêng', meaning: 'Vương (họ của người Trung Quốc)', han_viet: 'vương' },
  ],
  sections: [
    {
      kind: 'sounds', label: 'Thanh mẫu zh ch sh r', title: 'Thanh mẫu cuốn lưỡi zh ch sh r – bấm để nghe',
      list: [
        { s: 'zh', audio: '/audio/ppt/l5-zh.mp3', tech: 'Âm đầu lưỡi quặt, không bật hơi, xát-tắc, trong. Đầu lưỡi cong lên chạm ngạc cứng, hơi ma sát bật ra. Dây thanh không rung.', say: 'zhi', tip: 'Cuốn đầu lưỡi lên chạm ngạc cứng, rồi hạ xuống cho hơi xát qua khe. KHÔNG bật hơi. Gần "tr" của giọng miền Bắc nhưng lưỡi cuốn lên mạnh hơn.' },
        { s: 'ch', audio: '/audio/ppt/l5-ch.mp3', tech: 'Âm đầu lưỡi quặt, BẬT HƠI, xát-tắc, trong. Vị trí như zh, bật hơi mạnh ra.', say: 'chi', aspirated: true, tip: 'Vị trí như zh nhưng BẬT HƠI mạnh, gần "trh". Thử thổi tờ giấy: đọc ch giấy bay, đọc zh giấy đứng yên.' },
        { s: 'sh', audio: '/audio/ppt/l5-sh.mp3', tech: 'Âm đầu lưỡi quặt, xát, trong. Đầu lưỡi cong lên gần ngạc cứng, hơi ma sát thoát ra qua khe giữa. Dây thanh không rung.', say: 'shi', tip: 'Cuốn đầu lưỡi lên gần ngạc cứng, hơi xát qua khe: gần "s" cuốn lưỡi (giống "sh" trong "ship" nhưng lưỡi cong). Dây thanh KHÔNG rung.' },
        { s: 'r', audio: '/audio/ppt/l5-r.mp3', tech: 'Âm đầu lưỡi quặt, xát, ĐỤC. Vị trí như sh nhưng dây thanh rung.', say: 'ri', tip: 'Vị trí như sh nhưng dây thanh RUNG (âm hữu thanh): gần "r" miền Bắc cuốn lưỡi hoặc "zh" trong "measure" của tiếng Anh.' },
      ],
      note: 'zh ch sh r phát bằng đầu lưỡi CUỐN LÊN, khác z c s (Bài 4) đầu lưỡi phẳng, và khác j q x (Bài 3) phát bằng mặt lưỡi. Cặp dễ nhầm: zh/ch (không bật hơi / bật hơi) và zh/z, ch/c, sh/s.',
    },
    {
      kind: 'sounds', label: 'Vần -i (sau zh ch sh r)', title: 'Vần -i thứ hai – bấm để nghe',
      list: [
        { s: '-i', say: 'zhi', tip: 'Chỉ có sau zh, ch, sh, r (zhi, chi, shi, ri). Đọc như kéo dài phụ âm cuốn lưỡi, gần "ư" với lưỡi cuốn. KHÔNG đọc thành "i" như trong bi, mi.' },
      ],
      note: 'Bài 4 đã học vần -i [ɿ] sau z c s. Bài này là vần -i [ʅ] sau zh ch sh r, ký hiệu cũng là chữ i nhưng khác âm. Cả hai đều không đọc là [i].',
    },
    {
      kind: 'chart', label: 'Ghép vần (1)', title: 'zh ch sh r ghép với a e -i ai ei ao ou',
      cols: ['a', 'e', '-i', 'ai', 'ei', 'ao', 'ou'],
      rows: {
        zh: ['zha', 'zhe', 'zhi', 'zhai', 'zhei', 'zhao', 'zhou'],
        ch: ['cha', 'che', 'chi', 'chai', '', 'chao', 'chou'],
        sh: ['sha', 'she', 'shi', 'shai', 'shei', 'shao', 'shou'],
        r: ['', 're', 'ri', '', '', 'rao', 'rou'],
      },
    },
    {
      kind: 'chart', label: 'Ghép vần (2)', title: 'zh ch sh r ghép với an en ang eng ong',
      cols: ['an', 'en', 'ang', 'eng', 'ong'],
      rows: {
        zh: ['zhan', 'zhen', 'zhang', 'zheng', 'zhong'],
        ch: ['chan', 'chen', 'chang', 'cheng', 'chong'],
        sh: ['shan', 'shen', 'shang', 'sheng', ''],
        r: ['ran', 'ren', 'rang', 'reng', 'rong'],
      },
    },
    {
      kind: 'chart', label: 'Ghép vần (3)', title: 'zh ch sh r ghép với u ua uo uai ui uan un uang',
      cols: ['u', 'ua', 'uo', 'uai', 'ui', 'uan', 'un', 'uang'],
      rows: {
        zh: ['zhu', 'zhua', 'zhuo', 'zhuai', 'zhui', 'zhuan', 'zhun', 'zhuang'],
        ch: ['chu', 'chua', 'chuo', 'chuai', 'chui', 'chuan', 'chun', 'chuang'],
        sh: ['shu', 'shua', 'shuo', 'shuai', 'shui', 'shuan', 'shun', 'shuang'],
        r: ['ru', 'rua', 'ruo', '', 'rui', 'ruan', 'run', ''],
      },
      note: 'Bảng tổng hợp đầy đủ thanh mẫu và vận mẫu (phụ lục của sách) bạn có thể xem ở mục Pinyin trên thanh menu: tất cả bảng ghép vần của các bài được gom về đó.',
    },
    {
      kind: 'examples', label: 'Đếm 1–10', title: 'Đếm từ một đến mười (数字)',
      intro: 'Sách minh hoạ cách đếm bằng ngón tay. Hôm nay bạn đã biết đủ 1–10: 一 二 三 四 五 六 七 八 九 十. Chủ nhật có hai cách nói: 星期天 và 星期日 (日 và 天 đều có nghĩa "ngày").',
      groups: [
        { label: '1 – 5', items: [['一', 'yī', '1'], ['二', 'èr', '2'], ['三', 'sān', '3'], ['四', 'sì', '4'], ['五', 'wǔ', '5']] },
        { label: '6 – 10', items: [['六', 'liù', '6'], ['七', 'qī', '7'], ['八', 'bā', '8'], ['九', 'jiǔ', '9'], ['十', 'shí', '10']] },
        { label: 'Chủ nhật', items: [['星期天', 'xīngqītiān', 'Chủ nhật'], ['星期日', 'xīngqīrì', 'Chủ nhật']] },
      ],
    },
  ],
  notes: [
    {
      title: 'Thanh mẫu cuốn lưỡi zh, ch, sh, r',
      body: 'zh [tʂ] không bật hơi, ch [tʂʰ] bật hơi mạnh, sh [ʂ] xát vô thanh, r [ʐ] xát hữu thanh (dây thanh rung). Cả bốn phát âm bằng đầu lưỡi cuốn lên ngạc cứng. Phân biệt với z c s (đầu lưỡi phẳng, Bài 4): 自 zì ≠ 治 zhì, 四 sì ≠ 是 shì.',
      say: '是',
    },
    {
      title: 'Vần -i trong zhi, chi, shi, ri',
      body: 'Trong tiếng phổ thông, [i] không bao giờ đứng ngay sau zh, ch, sh, r. Vì vậy chữ "i" trong zhi, chi, shi, ri là vần riêng -i [ʅ] (kéo dài âm phụ âm cuốn lưỡi), không đọc là [i]. Ví dụ: 十 shí, 吃 chī, 日 rì, 知 zhī.',
      say: '十',
    },
    {
      title: 'Họ tên và chức danh',
      body: 'Họ đứng trước chức danh: 王老师 (thầy/cô Vương). Trong lời chào, gọi họ + chức danh rồi mới chào: 王老师，您好! Khác với tiếng Việt thường gọi "thầy Vương" (chức danh trước, tên sau).',
      say: '王老师您好',
    },
    {
      title: 'Ngữ pháp 1: câu có 是 (…là…)',
      body: 'A + 是 + B: 这是王老师。 (Đây là thầy Vương.) 这是我爸爸。 (Đây là bố tôi.) 是 là động từ nối, đứng giữa hai danh từ; không cần thêm "là" nào khác.',
      say: '这是我爸爸',
    },
    {
      title: 'Ngữ pháp 2: 请 + động từ (mời…)',
      body: '请 đặt trước động từ để mời hoặc đề nghị lịch sự: 请进 (mời vào), 请坐 (mời ngồi), 请喝茶 (mời uống trà). Muốn cảm ơn thì nói 谢谢, người kia đáp 不客气.',
      say: '请喝茶',
    },
    {
      title: 'Ngữ pháp 3: 您 và 你; hỏi thăm bằng 吗',
      body: '您 là cách nói kính trọng của 你, dùng với người lớn tuổi hoặc cần lịch sự: 您好, 您身体好吗? Câu hỏi thăm dùng mẫu quen thuộc: danh từ + tính từ + 吗: 工作忙吗? 身体好吗? Trả lời: 不太忙 / 很好.',
      say: '您好',
    },
    {
      title: 'Biến điệu thanh 3 (ôn tập)',
      body: 'Bài tập của sách ôn lại biến điệu thanh 3: hai thanh 3 liền nhau thì âm đầu đọc thành thanh 2 (语法 yǔfǎ → yúfǎ, 可以 kěyǐ → kéyǐ). Khi có ba thanh 3 liền nhau, cách đọc sẽ học kỹ ở Bài 9.',
      say: '语法',
    },
  ],
  sentences: [
    { parts: ['这', '是', '王', '老师'], pinyin: 'Zhè shì Wáng lǎoshī.', vi: 'Đây là thầy (cô) Vương.' },
    { parts: ['这', '是', '我', '爸爸'], pinyin: 'Zhè shì wǒ bàba.', vi: 'Đây là bố tôi.' },
    { parts: ['王', '老师', '您', '好'], pinyin: 'Wáng lǎoshī, nín hǎo!', vi: 'Chào thầy (cô) Vương ạ!' },
    { parts: ['请', '进'], pinyin: 'Qǐng jìn!', vi: 'Mời vào!' },
    { parts: ['请', '坐'], pinyin: 'Qǐng zuò!', vi: 'Mời ngồi!' },
    { parts: ['请', '喝', '茶'], pinyin: 'Qǐng hē chá!', vi: 'Mời uống trà!' },
    { parts: ['不', '客气'], pinyin: 'Bú kèqi!', vi: 'Đừng khách sáo!' },
    { parts: ['工作', '忙', '吗'], pinyin: 'Gōngzuò máng ma?', vi: 'Công việc có bận không?' },
    { parts: ['身体', '好', '吗'], pinyin: 'Shēntǐ hǎo ma?', vi: 'Sức khỏe có tốt không?' },
  ],
  writeChars: ['十', '工', '作', '日', '是', '这', '进', '老', '师', '身', '体', '谢'],
  drills: [
    {
      title: 'Thanh điệu (声调)', hint: 'Mỗi chữ đọc đúng thanh điệu. Bấm để nghe.',
      items: [
        { h: '这', p: 'zhè' }, { h: '十', p: 'shí' }, { h: '是', p: 'shì' }, { h: '书', p: 'shū' },
        { h: '杂志', p: 'zázhì' }, { h: '水', p: 'shuǐ' }, { h: '老师', p: 'lǎoshī' }, { h: '人', p: 'rén' },
        { h: '身', p: 'shēn' }, { h: '作', p: 'zuò' }, { h: '坐', p: 'zuò' },
      ],
    },
    {
      title: 'Phân biệt zh / ch / sh / r', hint: 'Nghe và đọc theo từng hàng: zh không bật hơi, ch bật hơi, sh xát, r hữu thanh.',
      items: ['zhi', 'chi', 'shi', 'ri', 'zhe', 'che', 'she', 're', 'zhan', 'chan', 'shan', 'ran', 'zhang', 'chang', 'shang', 'rang', 'zhen', 'chen', 'shen', 'ren', 'zheng', 'cheng', 'sheng', 'reng'].map(s => ({ p: s, syl: s })),
    },
    {
      title: 'Phân biệt z c s và zh ch sh', hint: 'Đầu lưỡi phẳng (z c s) và đầu lưỡi cuốn (zh ch sh).',
      items: ['za', 'zha', 'ca', 'cha', 'sa', 'sha', 'ze', 'zhe', 'ce', 'che', 'se', 'she', 'zi', 'zhi', 'ci', 'chi', 'si', 'shi'].map(s => ({ p: s, syl: s })),
    },
    {
      title: 'Phân biệt âm và thanh điệu', hint: 'Đọc cả từ, chú ý zh/ch/sh/r và thanh điệu.',
      items: [
        { h: '四十', p: 'sìshí' }, { h: '十四', p: 'shísì' }, { h: '休息', p: 'xiūxi' }, { h: '消息', p: 'xiāoxi' },
        { h: '知道', p: 'zhīdào' }, { h: '迟到', p: 'chídào' }, { h: '真诚', p: 'zhēnchéng' }, { h: '真正', p: 'zhēnzhèng' },
        { h: '长城', p: 'Chángchéng' }, { h: '中文', p: 'Zhōngwén' }, { h: '充分', p: 'chōngfèn' }, { h: '车站', p: 'chēzhàn' },
        { h: '期限', p: 'qīxiàn' }, { h: '春天', p: 'chūntiān' }, { h: '秋天', p: 'qiūtiān' }, { h: '成年', p: 'chéngnián' },
        { h: '青年', p: 'qīngnián' }, { h: '船上', p: 'chuán shang' }, { h: '床上', p: 'chuáng shang' }, { h: '失望', p: 'shīwàng' },
        { h: '希望', p: 'xīwàng' }, { h: '伤心', p: 'shāngxīn' }, { h: '相信', p: 'xiāngxìn' }, { h: '知己', p: 'zhījǐ' },
        { h: '时机', p: 'shíjī' }, { h: '胜利', p: 'shènglì' }, { h: '经理', p: 'jīnglǐ' }, { h: '生活', p: 'shēnghuó' },
        { h: '商店', p: 'shāngdiàn' }, { h: '见面', p: 'jiànmiàn' }, { h: '认识', p: 'rènshi' }, { h: '临时', p: 'línshí' },
        { h: '人力', p: 'rénlì' }, { h: '日历', p: 'rìlì' },
      ],
    },
    {
      title: 'Biến điệu thanh 3 (三声变调)', hint: 'Hai thanh 3 liền nhau: âm đầu đọc thành thanh 2; thanh 3 trước thanh khác chỉ đọc nửa xuống.',
      items: [
        { h: '简单', p: 'jiǎndān' }, { h: '海边', p: 'hǎi biān' }, { h: '海鲜', p: 'hǎixiān' }, { h: '好吃', p: 'hǎo chī' },
        { h: '表扬', p: 'biǎoyáng' }, { h: '感觉', p: 'gǎnjué' }, { h: '检查', p: 'jiǎnchá' }, { h: '旅行', p: 'lǚxíng' },
        { h: '语法', p: 'yǔfǎ' }, { h: '厂长', p: 'chǎngzhǎng' }, { h: '表演', p: 'biǎoyǎn' }, { h: '可以', p: 'kěyǐ' },
        { h: '比赛', p: 'bǐsài' }, { h: '等待', p: 'děngdài' }, { h: '表示', p: 'biǎoshì' }, { h: '感谢', p: 'gǎnxiè' },
        { h: '奶奶', p: 'nǎinai' }, { h: '耳朵', p: 'ěrduo' }, { h: '椅子', p: 'yǐzi' }, { h: '嗓子', p: 'sǎngzi' },
      ],
    },
    {
      title: 'Nhận đọc (认读): số đếm', hint: 'Đọc từ một đến mười.',
      items: [
        { h: '一', p: 'yī' }, { h: '二', p: 'èr' }, { h: '三', p: 'sān' }, { h: '四', p: 'sì' }, { h: '五', p: 'wǔ' },
        { h: '六', p: 'liù' }, { h: '七', p: 'qī' }, { h: '八', p: 'bā' }, { h: '九', p: 'jiǔ' }, { h: '十', p: 'shí' },
      ],
    },
    {
      title: 'Nhận đọc (认读): thứ và cụm từ', hint: 'Bấm để nghe đáp án.',
      items: [
        { h: '星期一', p: 'xīngqīyī' }, { h: '星期二', p: 'xīngqī’èr' }, { h: '星期三', p: 'xīngqīsān' }, { h: '星期四', p: 'xīngqīsì' },
        { h: '星期五', p: 'xīngqīwǔ' }, { h: '星期六', p: 'xīngqīliù' }, { h: '星期天', p: 'xīngqītiān' }, { h: '星期日', p: 'xīngqīrì' },
        { h: '您好', p: 'nín hǎo' }, { h: '请进', p: 'qǐng jìn' }, { h: '请坐', p: 'qǐng zuò' }, { h: '请喝茶', p: 'qǐng hē chá' },
        { h: '谢谢', p: 'xièxie' }, { h: '不客气', p: 'bú kèqi' }, { h: '工作忙', p: 'gōngzuò máng' }, { h: '身体好', p: 'shēntǐ hǎo' },
      ],
    },
    {
      title: 'Đồ uống (từ mới bổ sung của bài giảng)', hint: 'Dùng với 喝: 喝茶, 喝咖啡…',
      items: [
        { h: '水果汁', p: 'shuǐguǒzhī', m: 'nước ép trái cây' }, { h: '可乐', p: 'kělè', m: 'coca' }, { h: '奶茶', p: 'nǎichá', m: 'trà sữa' }, { h: '奶昔', p: 'nǎixī', m: 'sữa lắc (milkshake)' },
        { h: '酒', p: 'jiǔ', m: 'rượu' }, { h: '咖啡', p: 'kāfēi', m: 'cà phê' }, { h: '啤酒', p: 'píjiǔ', m: 'bia' }, { h: '白水', p: 'báishuǐ', m: 'nước lọc' },
      ],
    },
    {
      title: 'Hội thoại mở rộng (từ bài giảng)', hint: 'Mẫu chào hỏi khi lâu không gặp.',
      items: [
        { h: '好久不见，你最近工作忙吗？', p: 'Hǎojiǔ bújiàn, nǐ zuìjìn gōngzuò máng ma?', m: 'Lâu rồi không gặp, dạo này công việc bạn bận không?' },
        { h: '不太忙，你呢？', p: 'Bú tài máng, nǐ ne?', m: 'Không bận lắm, còn bạn?' },
        { h: '很忙。', p: 'Hěn máng.', m: 'Rất bận.' },
      ],
    },
  ],
  qa: [
    {
      title: 'Hoàn thành hội thoại (完成会话)',
      items: [
        { q: '(1) A: Zhè shì Wáng lǎoshī, zhè shì wǒ bàba.   B: ______ , ______ .   C: Nín hǎo! Qǐng jìn! Qǐng zuò! Qǐng hē chá!   B: ______ !   C: Bú kèqi!', hint: 'B: Wáng lǎoshī, nín hǎo! (王老师，您好！) · B: Xièxie! (谢谢！)' },
        { q: '(2) A: Gōngzuò máng ma?   B: ______ .   A: Shēntǐ hǎo ma?   B: ______ !', hint: 'B: Bú tài máng. (不太忙。) hoặc Hěn máng. (很忙。) · B: Hěn hǎo! (很好！)' },
        { q: '(3) A: ______ , ______ .   B: Wáng lǎoshī, nín hǎo!   C: ______ ! ______ ! ______ ! ______ !   B: Xièxie!   C: ______ !', hint: 'A: Zhè shì Wáng lǎoshī, zhè shì wǒ bàba. (这是王老师，这是我爸爸。) · C: Nín hǎo! Qǐng jìn! Qǐng zuò! Qǐng hē chá! (您好！请进！请坐！请喝茶！) · C: Bú kèqi! (不客气！)' },
        { q: '(4) A: ______ ?   B: Bú tài máng.   A: ______ ?   B: Hěn hǎo!', hint: 'A: Gōngzuò máng ma? (工作忙吗?) · A: Shēntǐ hǎo ma? (身体好吗?)' },
      ],
    },
  ],
}
