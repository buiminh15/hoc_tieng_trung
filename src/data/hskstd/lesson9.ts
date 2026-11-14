import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 1, Bài 9: 你儿子在哪儿工作？ (sách trang 76–83).
 * Nghe: 09-1…09-4 (giáo trình). Sách bài tập (trang 63–70, đáp án trang 16–18): nghe gõ từ hai âm tiết, ghi dấu thanh,
 * nghe chọn đáp án 9–12, nối câu hỏi/đáp 18–22, điền từ 23–30.
 * Phần tiếng Việt do app tự thêm ở những chỗ sách không có.
 */

const A = '/audio/hsk-std1/'

export const hskStd1Lesson9: Lesson = {
  id: 9,
  title: 'Con trai anh làm việc ở đâu?',
  hanzi: '你儿子在哪儿工作？',
  pinyin: 'Nǐ érzi zài nǎr gōngzuò?',
  vi: 'Con trai anh làm việc ở đâu?',
  intro: 'Nói về vị trí và nơi làm việc: 小猫在哪儿？ 你在哪儿工作？ Học động từ 在, giới từ 在, đại từ nghi vấn 哪儿 và trợ từ 呢 hỏi vị trí; thanh 4 + các thanh; kết cấu chữ bao quanh một nửa; bộ 辶 và 门.',

  dialogue: [
    { who: 'A', hanzi: '小猫在哪儿？', pinyin: 'Xiǎo māo zài nǎr?', vi: 'Con mèo đâu rồi?', scene: 'Hội thoại 1 · ở nhà' },
    { who: 'B', hanzi: '小猫在那儿。', pinyin: 'Xiǎo māo zài nàr.', vi: 'Nó ở đó kìa.' },
    { who: 'A', hanzi: '小狗在哪儿？', pinyin: 'Xiǎo gǒu zài nǎr?', vi: 'Còn con chó đâu?' },
    { who: 'B', hanzi: '小狗在椅子下面。', pinyin: 'Xiǎo gǒu zài yǐzi xiàmiàn.', vi: 'Ở dưới ghế dựa.' },
    { who: 'A', hanzi: '你在哪儿工作？', pinyin: 'Nǐ zài nǎr gōngzuò?', vi: 'Anh làm việc ở đâu?', scene: 'Hội thoại 2 · ở bến xe' },
    { who: 'B', hanzi: '我在学校工作。', pinyin: 'Wǒ zài xuéxiào gōngzuò.', vi: 'Tôi làm việc ở trường học.' },
    { who: 'A', hanzi: '你儿子在哪儿工作？', pinyin: 'Nǐ érzi zài nǎr gōngzuò?', vi: 'Vậy còn con trai anh?' },
    { who: 'B', hanzi: '我儿子在医院工作，他是医生。', pinyin: 'Wǒ érzi zài yīyuàn gōngzuò, tā shì yīshēng.', vi: 'Con trai tôi làm việc ở bệnh viện, nó là bác sĩ.' },
    { who: 'A', hanzi: '你爸爸在家吗？', pinyin: 'Nǐ bàba zài jiā ma?', vi: 'Cha cô có ở nhà không?', scene: 'Hội thoại 3 · gọi điện thoại' },
    { who: 'B', hanzi: '不在家。', pinyin: 'Bú zài jiā.', vi: 'Không có.' },
    { who: 'A', hanzi: '他在哪儿呢？', pinyin: 'Tā zài nǎr ne?', vi: 'Ông ấy đâu rồi?' },
    { who: 'B', hanzi: '他在医院。', pinyin: 'Tā zài yīyuàn.', vi: 'Ông ấy ở bệnh viện.' },
  ],
  dialogueClips: [
    { label: '09-1 · Hội thoại 1: 小猫在哪儿？', src: A + 'l09-1.mp3' },
    { label: '09-2 · Hội thoại 2: 你在哪儿工作？', src: A + 'l09-2.mp3' },
    { label: '09-3 · Hội thoại 3: 你爸爸在家吗？', src: A + 'l09-3.mp3' },
  ],
  dialogueTip: '<b>在</b> có hai cách dùng: làm động từ (<b>小狗在椅子下面</b>: ở đâu) và làm giới từ (<b>我在学校工作</b>: làm gì ở đâu, đứng trước động từ). Hỏi vị trí: <b>…… 在哪儿？</b> hoặc <b>…… 呢？</b>',
  slowSay: '你儿子在哪儿工作',

  vocab: [
    { hanzi: '小', pinyin: 'xiǎo', pos: 'tính từ', meaning: 'nhỏ, bé', han_viet: 'tiểu' },
    { hanzi: '猫', parts: '犭 (khuyển) + 苗 (miêu)', pinyin: 'māo', pos: 'danh từ', meaning: 'mèo', han_viet: 'miêu' },
    { hanzi: '在', parts: '土 (thổ) + 才', pinyin: 'zài', pos: 'động từ / giới từ', meaning: 'ở, tại, vào', han_viet: 'tại' },
    { hanzi: '那儿', pinyin: 'nàr', pos: 'đại từ', meaning: 'chỗ đó, chỗ kia', han_viet: '' },
    { hanzi: '狗', parts: '犭 (khuyển) + 句 (cú)', pinyin: 'gǒu', pos: 'danh từ', meaning: 'chó', han_viet: 'cẩu' },
    { hanzi: '椅子', parts: '椅 = 木 (mộc) + 奇; 子 (tử)', pinyin: 'yǐzi', pos: 'danh từ', meaning: 'ghế dựa', han_viet: 'ỷ tử' },
    { hanzi: '下面', parts: '下 (hạ) + 面 (diện)', pinyin: 'xiàmiàn (xià)', pos: 'danh từ', meaning: 'bên dưới, phía dưới', han_viet: 'hạ diện' },
    { hanzi: '哪儿', pinyin: 'nǎr', pos: 'đại từ', meaning: 'đâu', han_viet: '' },
    { hanzi: '工作', parts: '工 (công) + 作 (tác)', pinyin: 'gōngzuò', pos: 'động từ / danh từ', meaning: 'làm việc; công việc', han_viet: 'công tác' },
    { hanzi: '儿子', parts: '儿 (nhi) + 子 (tử)', pinyin: 'érzi', pos: 'danh từ', meaning: 'con trai', han_viet: 'nhi tử' },
    { hanzi: '医院', parts: '医 (y) + 院 (viện)', pinyin: 'yīyuàn', pos: 'danh từ', meaning: 'bệnh viện', han_viet: 'y viện' },
    { hanzi: '医生', parts: '医 (y) + 生 (sinh)', pinyin: 'yīshēng', pos: 'danh từ', meaning: 'bác sĩ', han_viet: 'y sinh' },
    { hanzi: '爸爸', pinyin: 'bàba', pos: 'danh từ', meaning: 'cha, bố', han_viet: '' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Thanh 4 + các thanh', title: 'Sự kết hợp thanh điệu của từ hai âm tiết (4): thanh 4 + thanh 1/2/3/4',
      clip: { label: '09-4 · Nghe và đọc theo (kết hợp thanh điệu)', src: A + 'l09-4.mp3' },
      intro: 'Âm tiết đầu thanh 4 (rơi xuống), âm tiết sau lần lượt thanh 1, 2, 3, 4.',
      groups: [
        { label: 'Bốn ví dụ trong sách', items: [['面包', 'miànbāo', 'bánh mì · 4+1'], ['面条', 'miàntiáo', 'mì sợi · 4+2'], ['电脑', 'diànnǎo', 'máy tính · 4+3'], ['电话', 'diànhuà', 'điện thoại · 4+4']] },
        { label: 'Nghe và đọc theo (09-4)', items: [
          ['夏天', 'xiàtiān', 'mùa hè'], ['去年', 'qùnián', 'năm ngoái'], ['跳舞', 'tiào wǔ', 'khiêu vũ'], ['睡觉', 'shuì jiào', 'ngủ'],
          ['电灯', 'diàndēng', 'đèn điện'], ['电池', 'diànchí', 'pin'], ['电影', 'diànyǐng', 'phim'], ['电视', 'diànshì', 'ti vi'],
          ['唱歌', 'chàng gē', 'hát'], ['复习', 'fùxí', 'ôn tập'], ['汉语', 'Hànyǔ', 'tiếng Hán'], ['汉字', 'Hànzì', 'chữ Hán'],
          ['健康', 'jiànkāng', 'khỏe mạnh'], ['地图', 'dìtú', 'bản đồ'], ['地铁', 'dìtiě', 'tàu điện ngầm'], ['见面', 'jiàn miàn', 'gặp mặt'],
        ] },
      ],
    },
    {
      kind: 'examples', label: 'Cấu trúc chữ Hán', title: 'Cấu trúc của chữ Hán (4): kết cấu bao quanh một nửa',
      intro: 'Chữ có kết cấu tổ hợp còn gồm kết cấu bao quanh một nửa (半包围结构) và bao quanh hoàn toàn (xem bài 10). Kết cấu bao quanh một nửa chia thành bao quanh hai mặt và bao quanh ba mặt.',
      groups: [{ label: 'Kết cấu bao quanh một nửa', items: [['店', 'diàn', 'cửa hàng'], ['习', 'xí', 'học'], ['这', 'zhè', 'này, đây'], ['同', 'tóng', 'giống nhau'], ['凶', 'xiōng', 'hung ác'], ['医', 'yī', 'bác sĩ']] }],
    },
    {
      kind: 'examples', label: 'Bộ 辶 và 门', title: 'Các bộ của chữ Hán: 辶 và 门',
      intro: 'Bộ 辶 liên quan đến việc đi bộ. Bộ 门 thường liên quan đến phòng ốc, cửa ra vào.',
      groups: [
        { label: 'Bộ 辶 (đi bộ)', items: [['这', 'zhè', 'này, đây'], ['送', 'sòng', 'tiễn đưa']] },
        { label: 'Bộ 门 (cửa)', items: [['问', 'wèn', 'hỏi'], ['间', 'jiān', 'phòng, buồng']] },
      ],
    },
  ],

  notes: [
    {
      title: 'Động từ 在',
      body: '在 là động từ. 在 kết hợp với từ chỉ vị trí làm vị ngữ, diễn tả nơi chốn của người và sự vật. Cấu trúc: Chủ ngữ + 在 + từ chỉ vị trí. Ví dụ: 我朋友在学校。 我妈妈在家。 小狗在椅子下面。',
      say: '小狗在椅子下面',
    },
    {
      title: 'Đại từ nghi vấn 哪儿',
      body: '哪儿 dùng để hỏi vị trí của người và sự vật. Ví dụ: 我的杯子在哪儿？ 你的中国朋友在哪儿？ 小猫在哪儿？',
      say: '小猫在哪儿',
    },
    {
      title: 'Giới từ 在',
      body: '在 còn là giới từ. Sau 在 là từ chỉ vị trí, dùng để giới thiệu nơi chốn xảy ra hành động. Cấu trúc: Chủ ngữ + 在 + nơi chốn + động từ. Ví dụ: 我在朋友家喝茶。 他们在学校看书。 我儿子在医院工作。',
      say: '我儿子在医院工作',
    },
    {
      title: 'Trợ từ nghi vấn 呢 (2)',
      body: '呢 đặt cuối câu để hỏi về vị trí của người, sự vật. Ví dụ: 我的小猫呢？ 我的杯子呢？ 他在哪儿呢？',
      say: '他在哪儿呢',
    },
    {
      title: 'Thanh 4 + các thanh',
      body: 'Thanh 4 đứng trước thanh 1, 2, 3, 4: 面包, 面条, 电脑, 电话. Giọng rơi xuống ở âm tiết đầu, sau đó âm tiết thứ hai giữ đúng thanh của nó.',
      say: '电话',
    },
    {
      title: 'Bộ 辶 và 门',
      body: 'Bộ 辶 liên quan đến việc đi: 这, 送. Bộ 门 liên quan đến phòng ốc, cửa ra vào: 问, 间.',
      say: '这',
    },
  ],

  writeChars: ['在', '子', '工', '店', '这', '医'],

  drills: [
    {
      title: 'Ba chữ đơn mới (认识独体字)',
      hint: 'Sách trang 80–81: nguồn gốc hình chữ. Bấm để nghe; tập viết ở tab Tập viết.',
      items: [
        { h: '在', p: 'zài', m: 'ở, tại (hình cây cỏ nhú trên mặt đất, nghĩa gốc là tồn tại)' },
        { h: '子', p: 'zǐ', m: 'gốc là trẻ sơ sinh; nay nhiều nghĩa: 儿子 con trai, 电子 điện tử' },
        { h: '工', p: 'gōng', m: 'hình thước cuộn của thợ thủ công; 工人 công nhân, 工作 làm việc' },
      ],
    },
    {
      title: 'Hỏi vị trí và nơi làm việc',
      hint: 'Bấm để nghe từng câu, tự trả lời bằng thông tin của bạn.',
      items: [
        { h: '你在哪儿工作？', p: 'Nǐ zài nǎr gōngzuò?', m: 'Anh làm việc ở đâu?' },
        { h: '我在学校工作。', p: 'Wǒ zài xuéxiào gōngzuò.', m: 'Tôi làm việc ở trường học.' },
        { h: '他是医生，在医院工作。', p: 'Tā shì yīshēng, zài yīyuàn gōngzuò.', m: 'Anh ấy là bác sĩ, làm việc ở bệnh viện.' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 79)',
      items: [
        { q: '小狗在哪儿？ (Xiǎo gǒu zài nǎr?)', hint: '小狗在椅子下面。' },
        { q: '他在哪儿工作？ (Tā zài nǎr gōngzuò?)', hint: '他在学校工作。' },
        { q: '他儿子在哪儿工作？ (Tā érzi zài nǎr gōngzuò?)', hint: '他儿子在医院工作。' },
        { q: '她爸爸在家吗？ (Tā bàba zài jiā ma?)', hint: '不在家。' },
        { q: '她爸爸在哪儿呢？ (Tā bàba zài nǎr ne?)', hint: '她爸爸在医院。' },
      ],
    },
    {
      title: 'Hoạt động theo cặp (运用 1, sách trang 82)',
      items: [
        { q: 'A: ……在哪儿？  B: ……在……', hint: 'Hỏi vị trí của đồ vật hoặc người trong lớp.' },
        { q: 'A: ……在哪儿工作？  B: ……在……工作，他 / 她是……', hint: 'Mẫu: 李朋在医院工作，他是医生。' },
        { q: 'Hoạt động nhóm: giới thiệu nghề nghiệp và nơi làm việc của bạn bè, bạn cùng lớp và ghi vào bảng.', hint: 'Mẫu của sách: 李朋，是医生，在医院工作。' },
      ],
    },
  ],

  sentences: [
    { parts: ['小猫', '在', '哪儿'], pinyin: 'Xiǎo māo zài nǎr?', vi: 'Con mèo đâu rồi?' },
    { parts: ['小狗', '在', '椅子', '下面'], pinyin: 'Xiǎo gǒu zài yǐzi xiàmiàn.', vi: 'Con chó ở dưới ghế dựa.' },
    { parts: ['你', '在', '哪儿', '工作'], pinyin: 'Nǐ zài nǎr gōngzuò?', vi: 'Anh làm việc ở đâu?' },
    { parts: ['我', '在', '学校', '工作'], pinyin: 'Wǒ zài xuéxiào gōngzuò.', vi: 'Tôi làm việc ở trường học.' },
    { parts: ['我', '儿子', '在', '医院', '工作'], pinyin: 'Wǒ érzi zài yīyuàn gōngzuò.', vi: 'Con trai tôi làm việc ở bệnh viện.' },
    { parts: ['你', '爸爸', '在', '家', '吗'], pinyin: 'Nǐ bàba zài jiā ma?', vi: 'Cha cô có ở nhà không?' },
    { parts: ['他', '在', '医院'], pinyin: 'Tā zài yīyuàn.', vi: 'Ông ấy ở bệnh viện.' },
  ],

  // ───────── Sách bài tập, bài 9 (đáp án: "Đáp án sách bài tập", trang 16–18) ─────────
  dictations: [
    {
      title: 'Sách bài tập · Nghe, gõ pinyin từ hai âm tiết (ngữ âm, câu 1–8)',
      hint: 'Nghe đoạn ghi âm (09-2), gõ lại pinyin của từ bạn nghe được (có thể không cần dấu).',
      clip: { label: '09-2 · Sách bài tập, ngữ âm phần 1', src: A + 'w09-2.mp3' },
      items: [
        { prompt: 'Câu 1', answer: 'bàn tiān', gloss: '半天' }, { prompt: 'Câu 2', answer: 'lùyīn', gloss: '录音' }, { prompt: 'Câu 3', answer: 'hùxiāng', gloss: '互相' }, { prompt: 'Câu 4', answer: 'dànshì', gloss: '但是' },
        { prompt: 'Câu 5', answer: 'jiànkāng', gloss: '健康' }, { prompt: 'Câu 6', answer: 'huàmiàn', gloss: '画面' }, { prompt: 'Câu 7', answer: 'zìjǐ', gloss: '自己' }, { prompt: 'Câu 8', answer: 'yùdào', gloss: '遇到' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, ghi dấu thanh (ngữ âm, câu 9–16)',
      hint: 'Nghe tiếp (09-2), gõ lại từ có đủ dấu thanh. Ví dụ: zaijian → zàijiàn.',
      clip: { label: '09-2 · Sách bài tập, ngữ âm phần 2', src: A + 'w09-2.mp3' },
      needTone: true,
      items: [
        { prompt: 'zaijian', answer: 'zàijiàn', gloss: '再见' }, { prompt: 'zaixian', answer: 'zàixiàn', gloss: '在线' },
        { prompt: 'ban dian', answer: 'bàn diǎn', gloss: '半点' }, { prompt: 'ban nian', answer: 'bàn nián', gloss: '半年' },
        { prompt: 'dianying', answer: 'diànyǐng', gloss: '电影' }, { prompt: 'dianshi', answer: 'diànshì', gloss: '电视' },
        { prompt: 'yundong', answer: 'yùndòng', gloss: '运动' }, { prompt: 'yunxing', answer: 'yùnxíng', gloss: '运行' },
        { prompt: 'huozhe', answer: 'huòzhě', gloss: '或者' }, { prompt: 'huoche', answer: 'huǒchē', gloss: '火车' },
        { prompt: 'shui jiao', answer: 'shuì jiào', gloss: '睡觉' }, { prompt: 'shijie', answer: 'shìjiè', gloss: '世界' },
        { prompt: 'jijie', answer: 'jìjié', gloss: '季节' }, { prompt: 'ditie', answer: 'dìtiě', gloss: '地铁' },
        { prompt: 'banfa', answer: 'bànfǎ', gloss: '办法' }, { prompt: 'bianhua', answer: 'biànhuà', gloss: '变化' },
      ],
    },
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 9–12)',
      hint: 'Nghe đoạn ghi âm (09-1, phần 3), chọn A, B hoặc C. Câu 9: A 椅子上 · B 桌子上 · C 椅子下. Câu 10: A 商店 · B 医院 · C 学校. Câu 11: A 商店 · B 学校 · C 不工作. Câu 12: A 中国 · B 美国 · C 家.',
      clip: { label: '09-1 · Sách bài tập, nghe phần 3 (câu 9–12)', src: A + 'w09-1.mp3' },
      items: [
        { prompt: 'Câu 9', answer: 'C', gloss: '椅子下' }, { prompt: 'Câu 10', answer: 'A', gloss: '商店' },
        { prompt: 'Câu 11', answer: 'C', gloss: '不工作' }, { prompt: 'Câu 12', answer: 'B', gloss: '美国' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu hỏi với câu trả lời (câu 18–22)',
      hint: 'A 我是学生，我不工作。 B 不在，李老师在医院。 C 在那儿，椅子下面。 D 她是老师，在学校工作。 E 杯子在这儿。 F 好的，谢谢！ Gõ chữ cái A–F.',
      items: [
        { prompt: '你在哪儿工作？', answer: 'A', gloss: '我是学生，我不工作。' }, { prompt: '我的小狗在哪儿？', answer: 'C', gloss: '在那儿，椅子下面。' },
        { prompt: '我的杯子呢？', answer: 'E', gloss: '杯子在这儿。' }, { prompt: '你女儿在哪儿工作？', answer: 'D', gloss: '她是老师，在学校工作。' },
        { prompt: '请问，李老师在吗？', answer: 'B', gloss: '不在，李老师在医院。' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ vào chỗ trống (câu 23–30)',
      hint: 'A 在 · B 哪儿 · C 呢 · D 名字 · E 什么 · F 家 · G 学校 · H 医院 · I 商店. Gõ chữ cái A–I. (Câu 23–26 chọn từ A–E, câu 27–30 chọn từ F–I.)',
      items: [
        { prompt: '你爸爸做（ ）工作？', answer: 'E', gloss: '什么' }, { prompt: '你好，请问王老师在（ ）？', answer: 'B', gloss: '哪儿' },
        { prompt: '我儿子是医生，（ ）医院工作。', answer: 'A', gloss: '在' }, { prompt: '你的猫（ ）？', answer: 'C', gloss: '呢' },
        { prompt: '你（ ）有几口人？', answer: 'F', gloss: '家' }, { prompt: '我想去（ ）买一个杯子。', answer: 'I', gloss: '商店' },
        { prompt: '明天下午我想去（ ）看书。', answer: 'G', gloss: '学校' }, { prompt: '他爸爸是医生，在（ ）工作。', answer: 'H', gloss: '医院' },
      ],
    },
  ],
}
