import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 1 (标准教程 1), Bài 1: 你好！ (sách trang 14–19).
 * Nghe: 01-1…01-9 (giáo trình). Bài nghe chép: 01-3, 01-4, 01-5 của sách bài tập (trang 7–10, đáp án trang 1–2).
 * Phần tiếng Việt do app tự thêm ở những chỗ sách không có.
 */

const A = '/audio/hsk-std1/'

export const hskStd1Lesson1: Lesson = {
  id: 1,
  title: 'Chào anh!',
  hanzi: '你好！',
  pinyin: 'Nǐ hǎo!',
  vi: 'Chào anh!',
  intro: 'Ba câu chào đầu tiên (你好, 您好, 对不起 / 没关系), thanh mẫu và vận mẫu phần 1, bốn thanh điệu, cấu tạo âm tiết, biến điệu hai thanh 3, và các nét cơ bản của chữ Hán.',

  dialogue: [
    { who: 'A', hanzi: '你好！', pinyin: 'Nǐ hǎo!', vi: 'Chào anh!', scene: 'Hội thoại 1 · hai người gặp nhau' },
    { who: 'B', hanzi: '你好！', pinyin: 'Nǐ hǎo!', vi: 'Chào anh!' },
    { who: 'A', hanzi: '您好！', pinyin: 'Nín hǎo!', vi: 'Chào ông!', scene: 'Hội thoại 2 · chào người lớn tuổi (您) và nhiều người (你们)' },
    { who: 'B', hanzi: '你们好！', pinyin: 'Nǐmen hǎo!', vi: 'Chào anh chị!' },
    { who: 'A', hanzi: '对不起！', pinyin: 'Duìbuqǐ!', vi: 'Xin lỗi!', scene: 'Hội thoại 3 · xin lỗi' },
    { who: 'B', hanzi: '没关系！', pinyin: 'Méi guānxi!', vi: 'Không sao đâu!' },
  ],
  dialogueClips: [
    { label: '01-1 · Hội thoại 1: 你好！', src: A + 'l01-1.mp3' },
    { label: '01-2 · Hội thoại 2: 您好！/ 你们好！', src: A + 'l01-2.mp3' },
    { label: '01-3 · Hội thoại 3: 对不起！/ 没关系！', src: A + 'l01-3.mp3' },
  ],
  dialogueTip: '<b>你好</b> viết là nǐ hǎo nhưng khi nói đọc thành <b>ní hǎo</b> (hai thanh 3 liền nhau thì âm đầu đọc thành thanh 2). <b>您</b> là cách nói lịch sự với người lớn tuổi hoặc người cần tôn trọng. Thêm <b>们</b> sau đại từ để chỉ số nhiều: 你 → 你们.',
  slowSay: '你好',

  vocab: [
    { hanzi: '你', parts: '亻 (bộ nhân đứng) + 尔 (nhĩ)', pinyin: 'nǐ', pos: 'đại từ', meaning: 'anh, chị, bạn (ngôi 2 số ít)', han_viet: 'nễ' },
    { hanzi: '好', parts: '女 (bộ nữ) + 子 (bộ tử)', pinyin: 'hǎo', pos: 'tính từ', meaning: 'khỏe, tốt', han_viet: 'hảo' },
    { hanzi: '您', parts: '你 (nễ) + 心 (bộ tâm)', pinyin: 'nín', pos: 'đại từ', meaning: 'ông, bà, ngài (cách nói lịch sự). Từ ngoài đại cương HSK 1 (dấu * trong sách)', han_viet: '' },
    { hanzi: '你们', pinyin: 'nǐmen', pos: 'đại từ', meaning: 'các anh, các chị, các bạn (số nhiều)', han_viet: 'nễ môn' },
    { hanzi: '对不起', pinyin: 'duìbuqǐ', pos: 'động từ', meaning: 'xin lỗi', han_viet: 'đối bất khởi' },
    { hanzi: '没关系', pinyin: 'méi guānxi', pos: 'cụm', meaning: 'không sao đâu, không có vấn đề gì đâu', han_viet: 'một quan hệ' },
  ],

  sections: [
    {
      kind: 'sounds', label: 'Thanh mẫu', title: 'Thanh mẫu phần 1 (b p m f d t n l g k h j q x) – bấm để nghe',
      clip: { label: '01-4 · Thanh mẫu và vận mẫu (giọng thật)', src: A + 'l01-4.mp3' },
      note: 'Khung vàng là âm bật hơi. Cặp b/p, d/t, g/k, j/q khác nhau ở chỗ bật hơi: thử cầm tờ giấy trước miệng, đọc p thì giấy bay, đọc b thì giấy đứng yên.',
      list: [
        { s: 'b', say: 'bo', tip: 'Giống "p" trong "pa" tiếng Việt, hai môi khép rồi bật ra, KHÔNG bật hơi.' },
        { s: 'p', say: 'po', tip: 'Vị trí như b nhưng BẬT HƠI mạnh.', aspirated: true },
        { s: 'm', say: 'mo', tip: 'Giống "m" tiếng Việt.' },
        { s: 'f', say: 'fo', tip: 'Giống "ph" tiếng Việt: răng trên chạm môi dưới.' },
        { s: 'd', say: 'de', tip: 'Giống "t" tiếng Việt, đầu lưỡi chạm lợi trên, KHÔNG bật hơi.' },
        { s: 't', say: 'te', tip: 'Vị trí như d nhưng BẬT HƠI, gần giống "th".', aspirated: true },
        { s: 'n', say: 'ne', tip: 'Giống "n" tiếng Việt.' },
        { s: 'l', say: 'le', tip: 'Giống "l" tiếng Việt.' },
        { s: 'g', say: 'ge', tip: 'Giống "c/k" tiếng Việt, cuống lưỡi chạm ngạc mềm, KHÔNG bật hơi.' },
        { s: 'k', say: 'ke', tip: 'Vị trí như g nhưng BẬT HƠI, gần giống "kh".', aspirated: true },
        { s: 'h', say: 'he', tip: 'Âm xát cuống lưỡi, gần giống "kh/h" nhẹ.' },
        { s: 'j', say: 'ji', tip: 'Mặt lưỡi nâng lên sát ngạc cứng, gần giống "ch" nhẹ và mềm, KHÔNG bật hơi. Chỉ ghép với i, ü và các vần bắt đầu bằng i, ü.' },
        { s: 'q', say: 'qi', tip: 'Vị trí như j nhưng BẬT HƠI mạnh, gần "ch" bật hơi.', aspirated: true },
        { s: 'x', say: 'xi', tip: 'Mặt lưỡi gần ngạc cứng, hơi xát qua khe, gần giống "x" tiếng Việt (nhẹ, mỏng).' },
      ],
    },
    {
      kind: 'sounds', label: 'Vận mẫu', title: 'Vận mẫu phần 1 – bấm để nghe',
      clip: { label: '01-4 · Thanh mẫu và vận mẫu (giọng thật)', src: A + 'l01-4.mp3' },
      note: 'Vận mẫu: i u ü er · a ia ua · o uo · e ie üe · ai uai · ei uei(ui) · ao iao. Khi i, u, ü tự thành âm tiết thì viết yi, wu, yu.',
      list: [
        { s: 'i', say: 'yi', tip: 'Môi dẹt, miệng hẹp: "i".' },
        { s: 'u', say: 'wu', tip: 'Môi tròn nhỏ, lưỡi lùi sau: "u".' },
        { s: 'ü', say: 'yu', tip: 'Lưỡi như phát "i" nhưng tròn môi: giống "uy" kéo dài. Tự thành âm tiết viết là yu.' },
        { s: 'er', say: 'er', tip: 'Âm cuốn lưỡi: đọc "e" rồi cuốn đầu lưỡi lên. Ví dụ 二 èr (hai).' },
        { s: 'a', say: 'a', tip: 'Miệng mở to nhất, lưỡi thấp: "a".' },
        { s: 'ia', say: 'ya', tip: 'i lướt nhanh sang a: "ia" (như "gia").' },
        { s: 'ua', say: 'wa', tip: 'u lướt nhanh sang a: "oa".' },
        { s: 'o', say: 'o', tip: 'Môi tròn, miệng mở vừa: giống "ô".' },
        { s: 'uo', say: 'wo', tip: 'u lướt sang o: "uô". Ví dụ 火 huǒ (lửa).' },
        { s: 'e', say: 'e', tip: 'Miệng mở vừa, môi không tròn, lưỡi lùi sau: giống "ơ" kéo về cổ họng.' },
        { s: 'ie', say: 'ye', tip: 'i lướt sang e: gần "ia" nhưng cuối là "ê". Ví dụ 姐 jiě.' },
        { s: 'üe', say: 'yue', tip: 'ü lướt sang e: gần "uê". Ví dụ 月 yuè (tháng, mặt trăng).' },
        { s: 'ai', say: 'ai', tip: 'Đọc "ai" như tiếng Việt.' },
        { s: 'uai', say: 'wai', tip: 'u lướt sang ai: "oai". Ví dụ 坏 huài (xấu).' },
        { s: 'ei', say: 'ei', tip: 'Đọc gần như "ây". Ví dụ 飞 fēi (bay).' },
        { s: 'uei (ui)', say: 'wei', tip: 'Khi có thanh mẫu đứng trước thì viết rút gọn thành ui. Ví dụ 回 huí (về).' },
        { s: 'ao', say: 'ao', tip: 'Đọc gần như "ao". Ví dụ 好 hǎo.' },
        { s: 'iao', say: 'yao', tip: 'i lướt sang ao: "eo". Ví dụ 小 xiǎo (nhỏ).' },
      ],
    },
    {
      kind: 'tones', label: 'Thanh điệu',
      clip: { label: '01-5 · Đọc to các âm tiết, chú ý khác biệt giữa các thanh', src: A + 'l01-5.mp3' },
    },
    {
      kind: 'examples', label: 'Âm tiết', title: 'Cấu tạo âm tiết tiếng Hán',
      intro: 'Âm tiết thường gồm thanh mẫu (phụ âm đầu) + vận mẫu (vần) + thanh điệu. Một chữ Hán tương ứng một âm tiết. Âm tiết CÓ THỂ không có thanh mẫu, nhưng BẮT BUỘC có vận mẫu và thanh điệu.',
      groups: [{
        label: 'Bốn ví dụ trong sách',
        items: [
          ['猫', 'māo', 'm + ao + thanh 1 (mèo)'],
          ['鱼', 'yú', 'ü + thanh 2, không có thanh mẫu (cá)'],
          ['姐', 'jiě', 'j + ie + thanh 3 (chị)'],
          ['二', 'èr', 'er + thanh 4, không có thanh mẫu (hai)'],
        ],
      }],
    },
    {
      kind: 'examples', label: 'Từ 1 âm tiết', title: 'Xem hình, đọc các từ có một âm tiết',
      clip: { label: '01-6 · Từ một âm tiết (giọng thật)', src: A + 'l01-6.mp3' },
      intro: 'Sách cho hình và pinyin; chữ Hán và nghĩa tiếng Việt do app thêm để bạn đối chiếu. Bấm để nghe.',
      groups: [{
        label: '12 từ',
        items: [
          ['衣', 'yī', 'áo'], ['五', 'wǔ', 'năm (số 5)'], ['鱼', 'yú', 'cá'], ['耳', 'ěr', 'tai'],
          ['笔', 'bǐ', 'bút'], ['猫', 'māo', 'mèo'], ['岛', 'dǎo', 'đảo'], ['花', 'huā', 'hoa'],
          ['鸡', 'jī', 'gà'], ['七', 'qī', 'bảy (số 7)'], ['鞋', 'xié', 'giày'], ['雪', 'xuě', 'tuyết'],
        ],
      }],
    },
    {
      kind: 'examples', label: 'Từ 2 âm tiết', title: 'Xem hình, đọc các từ có hai âm tiết',
      clip: { label: '01-7 · Từ hai âm tiết (giọng thật)', src: A + 'l01-7.mp3' },
      intro: 'Chữ Hán và nghĩa tiếng Việt do app thêm. Bấm để nghe.',
      groups: [{
        label: '8 từ',
        items: [
          ['咖啡', 'kāfēi', 'cà phê'], ['可乐', 'kělè', 'cô-ca'], ['烤鸭', 'kǎoyā', 'vịt quay'], ['火锅', 'huǒguō', 'lẩu'],
          ['地图', 'dìtú', 'bản đồ'], ['飞机', 'fēijī', 'máy bay'], ['毛笔', 'máobǐ', 'bút lông'], ['耳机', 'ěrjī', 'tai nghe'],
        ],
      }],
    },
    {
      kind: 'examples', label: 'Biến điệu thanh 3', title: 'Hai thanh 3 đi liền nhau',
      clip: { label: '01-8 · Đọc to các từ, chú ý cách đọc âm tiết thanh 3', src: A + 'l01-8.mp3' },
      intro: 'Khi hai âm tiết thanh 3 đi liền nhau, âm tiết đầu đọc thành thanh 2 (3 + 3 → 2 + 3). Nhưng khi ghi pinyin, vẫn ghi thanh gốc.',
      groups: [
        { label: 'Ba ví dụ chính: viết một đằng, đọc một nẻo', items: [['你好', 'nǐ hǎo → ní hǎo', 'xin chào'], ['可以', 'kěyǐ → kéyǐ', 'có thể'], ['辅导', 'fǔdǎo → fúdǎo', 'kèm cặp, phụ đạo']] },
        { label: 'Đọc to theo sách', items: [['小姐', 'xiǎojiě', 'tiểu thư, cô'], ['口语', 'kǒuyǔ', 'khẩu ngữ'], ['语法', 'yǔfǎ', 'ngữ pháp'], ['法语', 'Fǎyǔ', 'tiếng Pháp'], ['讨好', 'tǎo hǎo', 'lấy lòng'], ['了解', 'liǎojiě', 'hiểu rõ'], ['友好', 'yǒuhǎo', 'thân thiện'], ['雨伞', 'yǔsǎn', 'ô, dù'], ['手表', 'shǒubiǎo', 'đồng hồ đeo tay']] },
      ],
    },
  ],

  notes: [
    {
      title: 'Cấu tạo âm tiết',
      body: 'Âm tiết = thanh mẫu + vận mẫu + thanh điệu. Một chữ Hán đọc thành một âm tiết. Âm tiết có thể thiếu thanh mẫu (như yú, èr) nhưng luôn có vận mẫu và thanh điệu.',
    },
    {
      title: 'i, ü, u đứng một mình thì viết y, w',
      body: 'Khi âm tiết chỉ có vận mẫu i hoặc ü thì thêm y phía trước (yī, yú), và hai dấu chấm trên ü được bỏ (yu, không viết ǖ). Khi chỉ có vận mẫu u thì thêm w (wǔ).',
      say: '五',
    },
    {
      title: 'Biến điệu: hai thanh 3 liền nhau',
      body: 'Khi hai âm tiết thanh 3 đọc liền, âm tiết thứ nhất chuyển sang thanh 2. Ví dụ nǐ (你) + hǎo (好) đọc thành ní hǎo. Nhưng khi ghi pinyin vẫn ghi thanh gốc: nǐ hǎo.',
      say: '你好',
    },
    {
      title: 'Cách chào: 你好, 您好, 你们好',
      body: 'Chào bình thường: 你好. Chào lịch sự với người lớn tuổi hoặc cần tôn trọng: 您好. Chào nhiều người: 你们好 (们 thêm sau đại từ để chỉ số nhiều). Xin lỗi thì nói 对不起, đáp lại 没关系.',
      say: '您好',
    },
  ],

  writeChars: ['一', '二', '三', '十', '八', '六', '人', '不', '大', '天', '工'],

  drills: [
    {
      title: 'Mẫu câu dùng trong lớp (课堂用语)',
      hint: 'Sách trang 18. Bấm để nghe, rồi nghe cả đoạn ghi âm.',
      clip: { label: '01-9 · Mẫu câu dùng trong lớp', src: A + 'l01-9.mp3' },
      items: [
        { h: '上课！', p: 'Shàng kè!', m: 'Vào học đi!' },
        { h: '下课！', p: 'Xià kè!', m: 'Đã hết giờ học rồi!' },
        { h: '现在休息！', p: 'Xiànzài xiūxi!', m: 'Nghỉ giải lao nhé!' },
        { h: '看黑板！', p: 'Kàn hēibǎn!', m: 'Hãy nhìn lên bảng!' },
        { h: '跟我读！', p: 'Gēn wǒ dú!', m: 'Hãy đọc theo tôi!' },
      ],
    },
    {
      title: 'Năm nét cơ bản của chữ Hán (笔画)',
      hint: 'Sách trang 18. Mỗi nét kèm chữ ví dụ.',
      items: [
        { h: '一', p: 'héng · nét ngang', m: 'ví dụ: 一 yī, 二 èr' },
        { h: '丨', p: 'shù · nét sổ', m: 'ví dụ: 十 shí, 工 gōng' },
        { h: '丿', p: 'piě · nét phẩy', m: 'ví dụ: 人 rén, 八 bā' },
        { h: '丶', p: 'diǎn · nét chấm', m: 'ví dụ: 不 bù, 六 liù' },
        { h: '乀', p: 'nà · nét mác', m: 'ví dụ: 大 dà, 天 tiān' },
      ],
    },
    {
      title: 'Sáu chữ đơn: các số (认识独体字)',
      hint: 'Sách trang 18–19. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '一', p: 'yī', m: 'số 1' }, { h: '二', p: 'èr', m: 'số 2' }, { h: '三', p: 'sān', m: 'số 3' },
        { h: '十', p: 'shí', m: 'số 10' }, { h: '八', p: 'bā', m: 'số 8' }, { h: '六', p: 'liù', m: 'số 6' },
      ],
    },
  ],

  sentences: [
    { parts: ['你', '好'], pinyin: 'Nǐ hǎo!', vi: 'Chào anh!' },
    { parts: ['您', '好'], pinyin: 'Nín hǎo!', vi: 'Chào ông!' },
    { parts: ['你们', '好'], pinyin: 'Nǐmen hǎo!', vi: 'Chào các anh chị!' },
  ],

  // ───────── Sách bài tập, bài 1: nghe chép (đáp án theo "Đáp án sách bài tập", trang 1–2) ─────────
  dictations: [
    {
      title: 'Sách bài tập 四 · Nghe, viết thanh mẫu',
      hint: 'Nghe đoạn ghi âm (01-3), điền thanh mẫu còn thiếu vào chỗ trống rồi đọc to. Chỉ cần gõ chữ cái, ví dụ b.',
      clip: { label: '01-3 · Sách bài tập, mục 四', src: A + 'w01-3.mp3' },
      items: [
        { prompt: '＿āi', answer: 'b', gloss: '掰' }, { prompt: '＿uài', answer: 'h', gloss: '坏' }, { prompt: '＿iào', answer: 'j', gloss: '叫' }, { prompt: '＿í', answer: 'p', gloss: '皮' },
        { prompt: '＿ǎn', answer: 'm', gloss: '满' }, { prompt: '＿uǒ', answer: 'h', gloss: '火' }, { prompt: '＿ù', answer: 'q', gloss: '去' }, { prompt: '＿iǎo', answer: 'x', gloss: '小' },
        { prompt: '＿uè', answer: 'q', gloss: '却' }, { prompt: '＿ià', answer: 'x', gloss: '下' }, { prompt: '＿ǎo', answer: 'k', gloss: '考' }, { prompt: '＿āo', answer: 'd', gloss: '刀' },
        { prompt: '＿ǎi', answer: 'n', gloss: '奶' }, { prompt: '＿ǎi', answer: 'm', gloss: '买' }, { prompt: '＿è', answer: 'g', gloss: '个' }, { prompt: '＿ǎo', answer: 'k', gloss: '考' },
        { prompt: '＿ái', answer: 'l', gloss: '来' }, { prompt: '＿ǎi', answer: 'h', gloss: '海' }, { prompt: '＿ào', answer: 'p', gloss: '炮' }, { prompt: '＿ēi', answer: 'f', gloss: '飞' },
      ],
    },
    {
      title: 'Sách bài tập 五 · Nghe, viết vận mẫu',
      hint: 'Nghe đoạn ghi âm (01-4), điền vận mẫu còn thiếu. Gõ không dấu cũng được (ví dụ ua), nhưng nên nhớ dấu thanh đúng: uā.',
      clip: { label: '01-4 · Sách bài tập, mục 五', src: A + 'w01-4.mp3' },
      items: [
        { prompt: 'h＿', answer: 'uā', gloss: '花' }, { prompt: 'h＿', answer: 'uǒ', gloss: '火' }, { prompt: 'h＿', answer: 'uí', gloss: '回' }, { prompt: 'm＿', answer: 'éi', gloss: '没' },
        { prompt: 'f＿', answer: 'ú', gloss: '服' }, { prompt: 'h＿', answer: 'ǎo', gloss: '好' }, { prompt: 'n＿', answer: 'ǐ', gloss: '你' }, { prompt: 'w＿', answer: 'èi', gloss: '喂' },
        { prompt: 'b＿', answer: 'āo', gloss: '包' }, { prompt: 'j＿', answer: 'iào', gloss: '叫' }, { prompt: 'j＿', answer: 'iě', gloss: '姐' }, { prompt: 'd＿', answer: 'ì', gloss: '第' },
        { prompt: 'g＿', answer: 'ē', gloss: '哥' }, { prompt: 'g＿', answer: 'āi', gloss: '该' }, { prompt: 'p＿', answer: 'iě', gloss: '撇' }, { prompt: 'h＿', answer: 'uài', gloss: '坏' },
        { prompt: 'y＿', answer: 'uè', gloss: '月' }, { prompt: 'h＿', answer: 'ēi', gloss: '黑' }, { prompt: 'g＿', answer: 'uó', gloss: '国' }, { prompt: 'l＿', answer: 'ǜ', gloss: '绿' },
      ],
    },
    {
      title: 'Sách bài tập 六 · Nghe, viết thanh điệu',
      hint: 'Nghe đoạn ghi âm (01-5), cho biết mỗi âm tiết mang thanh nào. Gõ số 1, 2, 3 hoặc 4 (1 = ā, 2 = á, 3 = ǎ, 4 = à), hoặc gõ cả âm tiết có dấu.',
      clip: { label: '01-5 · Sách bài tập, mục 六', src: A + 'w01-5.mp3' },
      needTone: true,
      items: [
        { prompt: 'bu', answer: 'bù', accept: ['4'], gloss: '不' }, { prompt: 'hao', answer: 'hǎo', accept: ['3'], gloss: '好' }, { prompt: 'ke', answer: 'kè', accept: ['4'], gloss: '课' }, { prompt: 'qi', answer: 'qī', accept: ['1'], gloss: '七' },
        { prompt: 'mei', answer: 'méi', accept: ['2'], gloss: '没' }, { prompt: 'you', answer: 'yǒu', accept: ['3'], gloss: '有' }, { prompt: 'ma', answer: 'mā', accept: ['1'], gloss: '妈' }, { prompt: 'jie', answer: 'jiě', accept: ['3'], gloss: '姐' },
        { prompt: 'ge', answer: 'gè', accept: ['4'], gloss: '个' }, { prompt: 'ge', answer: 'gē', accept: ['1'], gloss: '哥' }, { prompt: 'di', answer: 'dì', accept: ['4'], gloss: '弟' }, { prompt: 'nü', answer: 'nǚ', accept: ['3'], gloss: '女' },
        { prompt: 'tiao', answer: 'tiáo', accept: ['2'], gloss: '条' }, { prompt: 'mai', answer: 'mǎi', accept: ['3'], gloss: '买' }, { prompt: 'hui', answer: 'huī', accept: ['1'], gloss: '灰' }, { prompt: 'hua', answer: 'huà', accept: ['4'], gloss: '话' },
        { prompt: 'na', answer: 'nǎ', accept: ['3'], gloss: '哪' }, { prompt: 'guo', answer: 'guó', accept: ['2'], gloss: '国' }, { prompt: 'jiao', answer: 'jiào', accept: ['4'], gloss: '叫' }, { prompt: 'er', answer: 'ér', accept: ['2'], gloss: '儿' },
      ],
    },
  ],
}
