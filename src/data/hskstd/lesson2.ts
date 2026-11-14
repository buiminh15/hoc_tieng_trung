import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 1, Bài 2: 谢谢你！ (sách trang 20–25).
 * Nghe: 02-1…02-10 (giáo trình). Bài nghe chép: 02-3, 02-4, 02-5 của sách bài tập (trang 11–13, đáp án trang 2–3).
 * Phần tiếng Việt do app tự thêm ở những chỗ sách không có.
 */

const A = '/audio/hsk-std1/'

export const hskStd1Lesson2: Lesson = {
  id: 2,
  title: 'Cảm ơn anh!',
  hanzi: '谢谢你！',
  pinyin: 'Xièxie nǐ!',
  vi: 'Cảm ơn anh!',
  intro: 'Lời cảm ơn và tạm biệt (谢谢, 不客气, 再见), thanh mẫu và vận mẫu phần 2, thanh nhẹ, quy tắc ghi dấu thanh và cách viết giản lược, các nét ngang gập, sổ gập, sổ móc.',

  dialogue: [
    { who: 'A', hanzi: '谢谢！', pinyin: 'Xièxie!', vi: 'Cảm ơn!', scene: 'Hội thoại 1 · cảm ơn' },
    { who: 'B', hanzi: '不谢！', pinyin: 'Bú xiè!', vi: 'Không cần cảm ơn đâu!' },
    { who: 'A', hanzi: '谢谢你！', pinyin: 'Xièxie nǐ!', vi: 'Cảm ơn cô!', scene: 'Hội thoại 2 · cảm ơn lịch sự' },
    { who: 'B', hanzi: '不客气！', pinyin: 'Bú kèqi!', vi: 'Đừng khách sáo!' },
    { who: 'A', hanzi: '再见！', pinyin: 'Zàijiàn!', vi: 'Tạm biệt!', scene: 'Hội thoại 3 · tạm biệt' },
    { who: 'B', hanzi: '再见！', pinyin: 'Zàijiàn!', vi: 'Tạm biệt!' },
  ],
  dialogueClips: [
    { label: '02-1 · Hội thoại 1: 谢谢！/ 不谢！', src: A + 'l02-1.mp3' },
    { label: '02-2 · Hội thoại 2: 谢谢你！/ 不客气！', src: A + 'l02-2.mp3' },
    { label: '02-3 · Hội thoại 3: 再见！', src: A + 'l02-3.mp3' },
  ],
  dialogueTip: 'Đáp lại lời cảm ơn có hai cách: <b>不谢</b> (không cần cảm ơn) và <b>不客气</b> (đừng khách sáo). Chú ý <b>不</b> đứng trước thanh 4 thì đọc thành thanh 2: <b>bú</b> xiè, <b>bú</b> kèqi (viết vẫn là bù).',
  slowSay: '谢谢你',

  vocab: [
    { hanzi: '谢谢', parts: '谢 = 讠 (bộ ngôn) + 身 (thân) + 寸 (thốn)', pinyin: 'xièxie', pos: 'động từ', meaning: 'cảm ơn', han_viet: 'tạ tạ' },
    { hanzi: '不', pinyin: 'bù', pos: 'phó từ', meaning: 'không cần, không, đừng', han_viet: 'bất' },
    { hanzi: '不客气', parts: '客 = 宀 (bộ miên) + 各 (các)', pinyin: 'bú kèqi', pos: 'cụm', meaning: 'đừng khách sáo', han_viet: 'bất khách khí' },
    { hanzi: '再见', parts: '见 = 目 (mục, con mắt) + 儿', pinyin: 'zàijiàn', pos: 'động từ', meaning: 'tạm biệt', han_viet: 'tái kiến' },
  ],

  sections: [
    {
      kind: 'sounds', label: 'Thanh mẫu 2', title: 'Thanh mẫu phần 2 (zh ch sh r z c s) – bấm để nghe',
      clip: { label: '02-4 · Thanh mẫu và vận mẫu phần 2 (giọng thật)', src: A + 'l02-4.mp3' },
      note: 'Nhóm zh ch sh r là âm cuốn lưỡi (đầu lưỡi cong lên ngạc cứng), nhóm z c s là âm đầu lưỡi phẳng (đầu lưỡi gần chân răng trên). Khung vàng là âm bật hơi.',
      list: [
        { s: 'zh', say: 'zhi', tip: 'Cuốn đầu lưỡi lên chạm ngạc cứng rồi bật nhẹ ra, gần "tr" tiếng Việt nhưng lưỡi cong hơn. KHÔNG bật hơi.' },
        { s: 'ch', say: 'chi', tip: 'Vị trí như zh nhưng BẬT HƠI mạnh.', aspirated: true },
        { s: 'sh', say: 'shi', tip: 'Cuốn lưỡi, hơi xát qua khe giữa lưỡi và ngạc cứng: gần "s" cuốn lưỡi (giống "sh" trong "ship").' },
        { s: 'r', say: 'ri', tip: 'Vị trí như sh nhưng dây thanh RUNG: giống "r" cuốn lưỡi nhẹ, hơi như "d" mềm.' },
        { s: 'z', say: 'zi', tip: 'Đầu lưỡi phẳng đặt sau răng cửa trên rồi bật nhẹ, gần "tz/ts" không bật hơi.' },
        { s: 'c', say: 'ci', tip: 'Vị trí như z nhưng BẬT HƠI mạnh, gần "tsh".', aspirated: true },
        { s: 's', say: 'si', tip: 'Đầu lưỡi phẳng, hơi xát qua khe giữa lưỡi và răng, gần "x" tiếng Việt (xì nhẹ).' },
      ],
    },
    {
      kind: 'sounds', label: 'Vận mẫu 2', title: 'Vận mẫu phần 2 (vần mũi) – bấm để nghe',
      clip: { label: '02-4 · Thanh mẫu và vận mẫu phần 2 (giọng thật)', src: A + 'l02-4.mp3' },
      note: 'Vận mẫu: ou iou(iu) · an ian uan üan · en in uen(un) ün · ang iang uang · eng ing ueng · ong iong. Ba nhóm cuối là vần mũi sau (kết thúc bằng ng), còn an en in ün là vần mũi trước (kết thúc bằng n).',
      list: [
        { s: 'ou', say: 'ou', tip: 'Gần như "âu".' },
        { s: 'iou (iu)', say: 'you', tip: 'Gần "iêu" nhanh. Khi có thanh mẫu đứng trước thì viết rút gọn là iu: 九 jiǔ.' },
        { s: 'an', say: 'an', tip: 'Gần "an" tiếng Việt, kết thúc bằng n (đầu lưỡi chạm lợi trên).' },
        { s: 'ian', say: 'yan', tip: 'Đọc gần "ien/iên", ví dụ 先 xiān.' },
        { s: 'uan', say: 'wan', tip: 'Đọc gần "oan", ví dụ 船 chuán.' },
        { s: 'üan', say: 'yuan', tip: 'ü lướt sang an: gần "uyên", ví dụ 远 yuǎn.' },
        { s: 'en', say: 'en', tip: 'Gần "ân/ơn" rồi kết thúc bằng n.' },
        { s: 'in', say: 'yin', tip: 'Gần "in" tiếng Việt.' },
        { s: 'uen (un)', say: 'wen', tip: 'Gần "uân". Khi có thanh mẫu đứng trước thì viết rút gọn là un: 困 kùn.' },
        { s: 'ün', say: 'yun', tip: 'ü lướt sang n: gần "uyn". Tự thành âm tiết viết là yun: 云 yún.' },
        { s: 'ang', say: 'ang', tip: 'Gần "ang", kết thúc bằng ng (cuống lưỡi chạm ngạc mềm).' },
        { s: 'iang', say: 'yang', tip: 'Gần "iang/ương", ví dụ 想 xiǎng.' },
        { s: 'uang', say: 'wang', tip: 'Gần "oang", ví dụ 床 chuáng.' },
        { s: 'eng', say: 'eng', tip: 'Gần "âng/ơng", ví dụ 能 néng.' },
        { s: 'ing', say: 'ying', tip: 'Gần "inh/ing", ví dụ 星 xīng.' },
        { s: 'ueng', say: 'weng', tip: 'Gần "uâng/uơng". Chỉ đứng một mình, viết là weng.' },
        { s: 'ong', say: 'ong', tip: 'Gần "ung/ông" kéo dài, ví dụ 中 zhōng.' },
        { s: 'iong', say: 'yong', tip: 'Gần "iung/yông", ví dụ 熊 xióng.' },
      ],
    },
    {
      kind: 'examples', label: 'Từ 1 âm tiết', title: 'Xem hình, đọc các từ có một âm tiết',
      clip: { label: '02-5 · Từ một âm tiết (giọng thật)', src: A + 'l02-5.mp3' },
      intro: 'Sách cho hình và pinyin; chữ Hán và nghĩa tiếng Việt do app thêm. Bấm để nghe.',
      groups: [{
        label: '16 từ',
        items: [
          ['三', 'sān', 'ba (số 3)'], ['山', 'shān', 'núi'], ['钟', 'zhōng', 'đồng hồ'], ['羊', 'yáng', 'con cừu, dê'],
          ['零', 'líng', 'không (số 0)'], ['菜', 'cài', 'món ăn, rau'], ['手', 'shǒu', 'bàn tay'], ['熊', 'xióng', 'con gấu'],
          ['云', 'yún', 'mây'], ['星', 'xīng', 'ngôi sao'], ['元', 'yuán', 'đồng (tiền)'], ['人', 'rén', 'người'],
          ['船', 'chuán', 'thuyền'], ['床', 'chuáng', 'giường'], ['吃', 'chī', 'ăn'], ['热', 'rè', 'nóng'],
        ],
      }],
    },
    {
      kind: 'examples', label: 'Từ 2 âm tiết', title: 'Xem hình, đọc các từ có hai âm tiết',
      clip: { label: '02-6 · Từ hai âm tiết (giọng thật)', src: A + 'l02-6.mp3' },
      intro: 'Chữ Hán và nghĩa tiếng Việt do app thêm. Bấm để nghe.',
      groups: [{
        label: '8 từ',
        items: [
          ['冰箱', 'bīngxiāng', 'tủ lạnh'], ['鸡蛋', 'jīdàn', 'trứng gà'], ['司机', 'sījī', 'tài xế'], ['足球', 'zúqiú', 'bóng đá'],
          ['机场', 'jīchǎng', 'sân bay'], ['爬山', 'pá shān', 'leo núi'], ['手表', 'shǒubiǎo', 'đồng hồ đeo tay'], ['熊猫', 'xióngmāo', 'gấu trúc'],
        ],
      }],
    },
    {
      kind: 'examples', label: 'Thanh nhẹ', title: 'Thanh nhẹ (轻声)',
      clip: { label: '02-7 · Đọc to, chú ý cách phát âm thanh nhẹ', src: A + 'l02-7.mp3' },
      intro: 'Ngoài bốn thanh cơ bản còn có thanh nhẹ: đọc vừa ngắn vừa nhẹ, KHÔNG ghi dấu thanh. Thanh nhẹ thường rơi vào âm tiết thứ hai của từ lặp (妈妈) hoặc các hậu tố như 们, 子.',
      groups: [
        { label: 'Bốn từ ví dụ trong sách', items: [['妈妈', 'māma', 'mẹ'], ['爷爷', 'yéye', 'ông nội'], ['奶奶', 'nǎinai', 'bà nội'], ['爸爸', 'bàba', 'bố']] },
        { label: 'Đọc to theo sách', items: [
          ['桌子', 'zhuōzi', 'cái bàn'], ['房子', 'fángzi', 'ngôi nhà'], ['椅子', 'yǐzi', 'cái ghế'], ['柜子', 'guìzi', 'cái tủ'],
          ['他们', 'tāmen', 'họ'], ['人们', 'rénmen', 'mọi người'], ['我们', 'wǒmen', 'chúng tôi'], ['弟弟', 'dìdi', 'em trai'],
          ['衣服', 'yīfu', 'quần áo'], ['儿子', 'érzi', 'con trai'], ['喜欢', 'xǐhuan', 'thích'], ['认识', 'rènshi', 'quen biết'],
          ['先生', 'xiānsheng', 'ông, ngài'], ['朋友', 'péngyou', 'bạn bè'], ['晚上', 'wǎnshang', 'buổi tối'], ['漂亮', 'piàoliang', 'xinh đẹp'],
        ] },
      ],
    },
    {
      kind: 'examples', label: 'Ghi dấu thanh', title: 'Quy tắc ghép âm (1): cách ghi dấu thanh điệu',
      clip: { label: '02-8 · Đọc to, chú ý vị trí của dấu thanh điệu', src: A + 'l02-8.mp3' },
      intro: 'Dấu thanh điệu ghi trên nguyên âm. Nếu vận mẫu có từ hai nguyên âm trở lên thì ghi trên nguyên âm cần mở miệng rộng hơn, theo thứ tự: a, o, e, i, u, ü. Ngoại lệ iu (rút gọn của iou): ghi dấu trên u. Âm tiết thanh nhẹ không ghi dấu.',
      groups: [{
        label: 'Đọc to, nhìn vị trí dấu thanh',
        items: [
          ['学校', 'xuéxiào', 'trường học'], ['帮忙', 'bāng máng', 'giúp đỡ'], ['篮球', 'lánqiú', 'bóng rổ'], ['女儿', "nǚ'ér", 'con gái'],
          ['游泳', 'yóu yǒng', 'bơi lội'], ['手表', 'shǒubiǎo', 'đồng hồ đeo tay'], ['终于', 'zhōngyú', 'cuối cùng'], ['公司', 'gōngsī', 'công ty'],
          ['时间', 'shíjiān', 'thời gian'], ['身体', 'shēntǐ', 'cơ thể'], ['考试', 'kǎoshì', 'thi'], ['国家', 'guójiā', 'quốc gia'],
          ['报纸', 'bàozhǐ', 'báo'], ['好吃', 'hǎochī', 'ngon'], ['谢谢', 'xièxie', 'cảm ơn'], ['客气', 'kèqi', 'khách sáo'],
        ],
      }],
    },
    {
      kind: 'examples', label: 'Viết giản lược', title: 'Quy tắc ghép âm (1): cách viết giản lược',
      clip: { label: '02-9 · Đọc to, chú ý các vận mẫu viết giản lược', src: A + 'l02-9.mp3' },
      intro: 'Khi thanh mẫu đứng trước iou, uei, uen thì các vận mẫu này viết giản lược thành iu, ui, un. Ví dụ: niu, gui, lun.',
      groups: [{
        label: 'Đọc to, chú ý iu · ui · un',
        items: [
          ['休息', 'xiūxi', 'nghỉ ngơi'], ['睡觉', 'shuì jiào', 'ngủ'], ['轮船', 'lúnchuán', 'tàu thủy'], ['牛奶', 'niúnǎi', 'sữa bò'],
          ['啤酒', 'píjiǔ', 'bia'], ['昂贵', 'ángguì', 'đắt đỏ'], ['留言', 'liúyán', 'để lại lời nhắn'], ['开会', 'kāi huì', 'họp'],
          ['讨论', 'tǎolùn', 'thảo luận'], ['足球', 'zúqiú', 'bóng đá'], ['伦敦', 'Lúndūn', 'Luân Đôn'], ['湿润', 'shīrùn', 'ẩm ướt'],
          ['惭愧', 'cánkuì', 'xấu hổ'], ['水果', 'shuǐguǒ', 'hoa quả'], ['陶醉', 'táozuì', 'say mê'], ['顺利', 'shùnlì', 'thuận lợi'],
        ],
      }],
    },
  ],

  notes: [
    {
      title: 'Quy tắc ghi dấu thanh điệu',
      body: 'Dấu thanh ghi trên nguyên âm. Vận mẫu có nhiều nguyên âm thì ghi trên nguyên âm cần mở miệng rộng hơn, theo thứ tự a, o, e, i, u, ü: hǎo, duō, méi, guì. Ngoại lệ iu: ghi trên u (jiǔ). Âm tiết thanh nhẹ không ghi dấu: māma.',
      say: '好',
    },
    {
      title: 'Thanh nhẹ',
      body: 'Ngoài bốn thanh còn có thanh nhẹ: đọc vừa ngắn vừa nhẹ, không ghi dấu thanh. Gặp ở âm tiết thứ hai của từ lặp (妈妈, 爸爸) và hậu tố (桌子, 我们).',
      say: '妈妈',
    },
    {
      title: 'Viết giản lược iu, ui, un',
      body: 'Khi iou, uei, uen có thanh mẫu đứng trước thì viết rút gọn thành iu, ui, un: niu (牛), gui (贵), lun (轮). Khi đứng một mình thì viết đầy đủ: you, wei, wen.',
      say: '牛奶',
    },
    {
      title: '不 đọc bú khi đứng trước thanh 4',
      body: 'Chữ 不 vốn đọc bù (thanh 4). Khi đứng trước một âm tiết thanh 4 thì đọc thành bú (thanh 2): 不谢 bú xiè, 不客气 bú kèqi. Khi ghi pinyin trong sách này vẫn ghi theo cách đọc: bú.',
      say: '不谢',
    },
    {
      title: 'Đáp lại lời cảm ơn',
      body: 'Sau 谢谢 (cảm ơn) có thể đáp 不谢 (không cần cảm ơn) hoặc 不客气 (đừng khách sáo). Thêm 你 để nói lịch sự hơn: 谢谢你. Tạm biệt: 再见.',
      say: '不客气',
    },
  ],

  writeChars: ['口', '日', '山', '出', '丁', '小', '见', '不'],

  drills: [
    {
      title: 'Mẫu câu dùng trong lớp (课堂用语)',
      hint: 'Sách trang 24. Bấm để nghe, rồi nghe cả đoạn ghi âm.',
      clip: { label: '02-10 · Mẫu câu dùng trong lớp', src: A + 'l02-10.mp3' },
      items: [
        { h: '打开书。', p: 'Dǎkāi shū.', m: 'Hãy mở sách ra.' },
        { h: '请大声读。', p: 'Qǐng dà shēng dú.', m: 'Hãy đọc to lên.' },
        { h: '再读一遍。', p: 'Zài dú yí biàn.', m: 'Hãy đọc lại lần nữa.' },
        { h: '一起读。', p: 'Yìqǐ dú.', m: 'Hãy cùng đọc nào.' },
        { h: '有问题吗？', p: 'Yǒu wèntí ma?', m: 'Có thắc mắc gì không?' },
      ],
    },
    {
      title: 'Ba nét cơ bản mới (笔画 2)',
      hint: 'Sách trang 24. Mỗi nét kèm chữ ví dụ.',
      items: [
        { h: '乛', p: 'héngzhé · nét ngang gập', m: 'ví dụ: 口 kǒu, 日 rì' },
        { h: 'ㄥ', p: 'shùzhé · nét sổ gập', m: 'ví dụ: 山 shān, 出 chū' },
        { h: '亅', p: 'shùgōu · nét sổ móc', m: 'ví dụ: 丁 dīng, 小 xiǎo' },
      ],
    },
    {
      title: 'Năm chữ đơn mới (认识独体字)',
      hint: 'Sách trang 24–25: nguồn gốc hình chữ. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '口', p: 'kǒu', m: 'miệng (hình cái miệng mở to)' },
        { h: '见', p: 'jiàn', m: 'nhìn, thấy (目 con mắt trên 人 người)' },
        { h: '山', p: 'shān', m: 'núi (hình đỉnh núi nhấp nhô)' },
        { h: '小', p: 'xiǎo', m: 'nhỏ (hình hạt cát nhỏ), trái nghĩa 大' },
        { h: '不', p: 'bù', m: 'không (phó từ phủ định)' },
      ],
    },
  ],

  sentences: [
    { parts: ['谢谢', '你'], pinyin: 'Xièxie nǐ!', vi: 'Cảm ơn cô!' },
    { parts: ['不', '客气'], pinyin: 'Bú kèqi!', vi: 'Đừng khách sáo!' },
    { parts: ['不', '谢'], pinyin: 'Bú xiè!', vi: 'Không cần cảm ơn đâu!' },
    { parts: ['再', '见'], pinyin: 'Zàijiàn!', vi: 'Tạm biệt!' },
  ],

  // ───────── Sách bài tập, bài 2: nghe chép (đáp án theo "Đáp án sách bài tập", trang 2–3) ─────────
  dictations: [
    {
      title: 'Sách bài tập 四 · Nghe, viết thanh mẫu',
      hint: 'Nghe đoạn ghi âm (02-3), điền thanh mẫu còn thiếu vào chỗ trống rồi đọc to. Gõ chữ cái, ví dụ zh.',
      clip: { label: '02-3 · Sách bài tập, mục 四', src: A + 'w02-3.mp3' },
      items: [
        { prompt: '＿én', answer: 'r', gloss: '人' }, { prompt: '＿én', answer: 'sh', gloss: '神' }, { prompt: '＿āng', answer: 'zh', gloss: '张' }, { prompt: '＿āng', answer: 'z', gloss: '脏' },
        { prompt: '＿ǒu', answer: 'sh', gloss: '手' }, { prompt: '＿uō', answer: 'zh', gloss: '桌' }, { prompt: '＿uò', answer: 'z', gloss: '做' }, { prompt: '＿àn', answer: 'zh', gloss: '站' },
        { prompt: '＿ì', answer: 'z', gloss: '字' }, { prompt: '＿ān', answer: 's', gloss: '三' }, { prompt: '＿ì', answer: 's', gloss: '四' }, { prompt: '＿án', answer: 'z', gloss: '咱' },
        { prompt: '＿á', answer: 'ch', gloss: '茶' }, { prompt: '＿áng', answer: 'ch', gloss: '常' }, { prompt: '＿ǒu', answer: 'z', gloss: '走' }, { prompt: '＿ōu', answer: 'zh', gloss: '周' },
        { prompt: '＿ōng', answer: 'zh', gloss: '中' }, { prompt: '＿ài', answer: 'c', gloss: '菜' }, { prompt: '＿è', answer: 'r', gloss: '热' }, { prompt: '＿ē', answer: 'ch', gloss: '车' },
      ],
    },
    {
      title: 'Sách bài tập 五 · Nghe, viết vận mẫu',
      hint: 'Nghe đoạn ghi âm (02-4), điền vận mẫu còn thiếu. Gõ không dấu cũng được (ví dụ en), nhưng nên nhớ dấu thanh đúng: én.',
      clip: { label: '02-4 · Sách bài tập, mục 五', src: A + 'w02-4.mp3' },
      items: [
        { prompt: 'm＿', answer: 'én', gloss: '门' }, { prompt: 'sh＿', answer: 'ān', gloss: '山' }, { prompt: 'x＿', answer: 'ióng', gloss: '熊' }, { prompt: 'y＿', answer: 'òng', gloss: '用' },
        { prompt: 'sh＿', answer: 'uāng', gloss: '双' }, { prompt: 'x＿', answer: 'iǎng', gloss: '想' }, { prompt: 'x＿', answer: 'īn', gloss: '新' }, { prompt: 'ch＿', answer: 'àng', gloss: '唱' },
        { prompt: 'n＿', answer: 'éng', gloss: '能' }, { prompt: 'k＿', answer: 'ùn', gloss: '困' }, { prompt: 'f＿', answer: 'ēng', gloss: '风' }, { prompt: 'l＿', answer: 'íng', gloss: '零' },
        { prompt: 'g＿', answer: 'uān', gloss: '关' }, { prompt: 'y＿', answer: 'uǎn', gloss: '远' }, { prompt: 'h＿', answer: 'uàn', gloss: '换' }, { prompt: 'sh＿', answer: 'ǒu', gloss: '手' },
        { prompt: 'ch＿', answer: 'uán', gloss: '船' }, { prompt: 'ch＿', answer: 'uáng', gloss: '床' }, { prompt: 'x＿', answer: 'iān', gloss: '先' }, { prompt: 'j＿', answer: 'iǔ', gloss: '酒' },
      ],
    },
    {
      title: 'Sách bài tập 六 · Nghe, viết thanh điệu',
      hint: 'Nghe đoạn ghi âm (02-5), cho biết mỗi âm tiết mang thanh nào. Gõ số 1, 2, 3 hoặc 4 (1 = ā, 2 = á, 3 = ǎ, 4 = à), hoặc gõ cả âm tiết có dấu.',
      clip: { label: '02-5 · Sách bài tập, mục 六', src: A + 'w02-5.mp3' },
      needTone: true,
      items: [
        { prompt: 'zhong', answer: 'zhōng', accept: ['1'], gloss: '中' }, { prompt: 'mian', answer: 'miàn', accept: ['4'], gloss: '面' }, { prompt: 'fan', answer: 'fàn', accept: ['4'], gloss: '饭' }, { prompt: 'cai', answer: 'cài', accept: ['4'], gloss: '菜' },
        { prompt: 'neng', answer: 'néng', accept: ['2'], gloss: '能' }, { prompt: 'zhan', answer: 'zhàn', accept: ['4'], gloss: '站' }, { prompt: 'chang', answer: 'chǎng', accept: ['3'], gloss: '场' }, { prompt: 'shou', answer: 'shǒu', accept: ['3'], gloss: '手' },
        { prompt: 'shui', answer: 'shuǐ', accept: ['3'], gloss: '水' }, { prompt: 'qing', answer: 'qīng', accept: ['1'], gloss: '清' }, { prompt: 'sheng', answer: 'shěng', accept: ['3'], gloss: '省' }, { prompt: 'huang', answer: 'huáng', accept: ['2'], gloss: '黄' },
        { prompt: 'hong', answer: 'hóng', accept: ['2'], gloss: '红' }, { prompt: 'lan', answer: 'lán', accept: ['2'], gloss: '蓝' }, { prompt: 're', answer: 'rè', accept: ['4'], gloss: '热' }, { prompt: 'rou', answer: 'ròu', accept: ['4'], gloss: '肉' },
        { prompt: 'cha', answer: 'chá', accept: ['2'], gloss: '茶' }, { prompt: 'xiang', answer: 'xiǎng', accept: ['3'], gloss: '想' }, { prompt: 'cao', answer: 'cāo', accept: ['1'], gloss: '操' }, { prompt: 'suan', answer: 'suàn', accept: ['4'], gloss: '算' },
      ],
    },
  ],
}
