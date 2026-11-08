import type { Lesson } from './types'

export const lesson2: Lesson = {
  id: 2,
  title: 'Tiếng Hán không khó lắm',
  hanzi: '汉语不太难',
  pinyin: 'Hànyǔ bú tài nán',
  vi: 'Tiếng Hán không khó lắm',
  intro: 'Học hỏi thăm "bận không?", "khó không?"; 5 vần mũi (an en ang eng ong), thanh nhẹ và nửa thanh 3.',
  dialogue: [
    { who: 'A', hanzi: '你忙吗？', pinyin: 'Nǐ máng ma?', vi: 'Bạn bận không?' },
    { who: 'B', hanzi: '很忙。', pinyin: 'Hěn máng.', vi: 'Rất bận.' },
    { who: 'A', hanzi: '汉语难吗？', pinyin: 'Hànyǔ nán ma?', vi: 'Tiếng Hán khó không?' },
    { who: 'B', hanzi: '不太难。', pinyin: 'Bú tài nán.', vi: 'Không khó lắm.' },
  ],
  dialogueTip: 'Cấu trúc cần nhớ: <b>Chủ ngữ + tính từ + 吗?</b> để hỏi có/không (你忙吗?). Trả lời: <b>很 + tính từ</b> (rất…) hoặc <b>不太 + tính từ</b> (không… lắm). Chú ý "不" đứng trước thanh 4 (太 tài) thì đọc thành <b>bú</b>.',
  dialogueAudio: '/audio/ppt/l2-baikhoa.mp3',
  slowSay: '汉语不太难',
  vocab: [
    { hanzi: '忙', parts: '忄 (bộ tâm đứng) + 亡 (vong)', pinyin: 'máng', pos: 'tính từ', meaning: 'bận', han_viet: 'mang' },
    { hanzi: '吗', pinyin: 'ma', pos: 'trợ từ', meaning: 'trợ từ nghi vấn cuối câu (… không?)', han_viet: '' },
    { hanzi: '很', parts: '彳 (bộ xích) + 艮 (cấn)', pinyin: 'hěn', pos: 'phó từ', meaning: 'rất', han_viet: 'ngận' },
    { hanzi: '汉语', parts: '汉 = 氵 (chấm thủy) + 又 (hựu); 语 = 讠 (bộ ngôn) + 吾 (五 ngũ + 口 khẩu)', pinyin: 'Hànyǔ', pos: 'danh từ', meaning: 'tiếng Hán, tiếng Trung', han_viet: 'Hán ngữ' },
    { hanzi: '难', parts: '又 (hựu) + 隹 (chuy, chim đuôi ngắn)', pinyin: 'nán', pos: 'tính từ', meaning: 'khó', han_viet: 'nan' },
    { hanzi: '太', pinyin: 'tài', pos: 'phó từ', meaning: 'quá, lắm', han_viet: 'thái' },
    { hanzi: '爸爸', pinyin: 'bàba', pos: 'danh từ', meaning: 'bố, ba', han_viet: '' },
    { hanzi: '妈妈', pinyin: 'māma', pos: 'danh từ', meaning: 'mẹ', han_viet: '' },
    { hanzi: '他', pinyin: 'tā', pos: 'đại từ', meaning: 'anh ấy, ông ấy, nó (nam)', han_viet: 'tha' },
    { hanzi: '她', pinyin: 'tā', pos: 'đại từ', meaning: 'chị ấy, bà ấy, cô ấy (nữ)', han_viet: 'tha' },
    { hanzi: '男', parts: '田 (bộ điền) + 力 (lực)', pinyin: 'nán', pos: 'tính từ', meaning: 'nam, đàn ông', han_viet: 'nam' },
    { hanzi: '哥哥', pinyin: 'gēge', pos: 'danh từ', meaning: 'anh trai', han_viet: 'ca ca' },
    { hanzi: '弟弟', pinyin: 'dìdi', pos: 'danh từ', meaning: 'em trai', han_viet: 'đệ đệ' },
    { hanzi: '妹妹', parts: '妹 = 女 (nữ) + 未 (vị, chưa)', pinyin: 'mèimei', pos: 'danh từ', meaning: 'em gái', han_viet: 'muội muội' },
  ],
  sections: [
    {
      kind: 'sounds', label: 'Vận mẫu mũi', title: 'Vận mẫu có âm mũi – bấm để nghe',
      list: [
        { s: 'an', audio: '/audio/ppt/an.mp3', say: 'an', tip: 'Gần như "an" tiếng Việt. Kết thúc bằng "n": đầu lưỡi chạm lợi trên (vần mũi trước).' },
        { s: 'en', audio: '/audio/ppt/en.mp3', say: 'en', tip: 'Gần như "ân/ơn": e đọc là [ə] (ơ). Kết thúc bằng "n" (đầu lưỡi chạm lợi trên).' },
        { s: 'ang', audio: '/audio/ppt/ang.mp3', say: 'ang', tip: 'Gần như "ang" tiếng Việt, a đọc ở phía sau miệng. Kết thúc bằng "ng": cuống lưỡi chạm ngạc mềm, KHÔNG chạm lợi (vần mũi sau).' },
        { s: 'eng', audio: '/audio/ppt/eng.mp3', say: 'deng', tip: 'Gần như "âng/ơng": e đọc là [ə] rồi kết thúc "ng" (vần mũi sau).' },
        { s: 'ong', audio: '/audio/ppt/ong.mp3', say: 'dong', tip: 'Gần như "ung": o đọc là [ʊ] (u ngắn) rồi kết thúc "ng" (vần mũi sau). Đừng đọc thành "ong" tiếng Việt!' },
      ],
      note: 'Mẹo phân biệt: vần có "n" (an, en) → đầu lưỡi chạm lợi trên; vần có "ng" (ang, eng, ong) → lưỡi lùi sau, miệng mở, không chạm lợi.',
    },
    {
      kind: 'chart', label: 'Ghép vần', title: 'Bảng ghép vần (vần mũi) – bấm ô để nghe',
      cols: ['an', 'en', 'ang', 'eng', 'ong'],
      rows: {
        b: ['ban', 'ben', 'bang', 'beng', ''],
        p: ['pan', 'pen', 'pang', 'peng', ''],
        m: ['man', 'men', 'mang', 'meng', ''],
        f: ['fan', 'fen', 'fang', 'feng', ''],
        d: ['dan', 'den', 'dang', 'deng', 'dong'],
        t: ['tan', '', 'tang', 'teng', 'tong'],
        n: ['nan', 'nen', 'nang', 'neng', 'nong'],
        l: ['lan', '', 'lang', 'leng', 'long'],
        g: ['gan', 'gen', 'gang', 'geng', 'gong'],
        k: ['kan', 'ken', 'kang', 'keng', 'kong'],
        h: ['han', 'hen', 'hang', 'heng', 'hong'],
      },
    },
    {
      kind: 'examples', label: 'Thanh nhẹ', title: 'Thanh nhẹ (轻声)',
      intro: 'Một số âm tiết đọc nhẹ và ngắn, không mang thanh điệu, gọi là thanh nhẹ. Khi viết pinyin KHÔNG đánh dấu thanh. Độ cao của thanh nhẹ phụ thuộc âm tiết đứng trước: sau thanh 1 hơi thấp, sau thanh 2 trung bình, sau thanh 3 hơi cao, sau thanh 4 thấp nhất.',
      groups: [
        { label: 'Sau thanh 1', items: [['妈妈', 'māma', 'mẹ'], ['哥哥', 'gēge', 'anh trai']] },
        { label: 'Sau thanh 2', items: [['白的', 'bái de', 'cái màu trắng']] },
        { label: 'Sau thanh 3', items: [['你们', 'nǐmen', 'các bạn'], ['奶奶', 'nǎinai', 'bà nội']] },
        { label: 'Sau thanh 4', items: [['爸爸', 'bàba', 'bố'], ['弟弟', 'dìdi', 'em trai'], ['妹妹', 'mèimei', 'em gái']] },
      ],
    },
    {
      kind: 'examples', label: 'Nửa thanh 3', title: 'Nửa thanh 3 (半三声)',
      intro: 'Thanh 3 đứng trước thanh 1, 2, 4 hoặc thanh nhẹ thì chỉ đọc nửa đầu (phần đi xuống, thấp), KHÔNG đọc phần đi lên, rồi chuyển luôn sang âm tiết sau. Hai thanh 3 liền nhau thì vẫn là biến điệu của Bài 1 (nǐ hǎo → ní hǎo).',
      groups: [
        { label: 'Thanh 3 + thanh 1', items: [['雨衣', 'yǔyī', 'áo mưa'], ['很高', 'hěn gāo', 'rất cao']] },
        { label: 'Thanh 3 + thanh 2', items: [['很忙', 'hěn máng', 'rất bận'], ['很难', 'hěn nán', 'rất khó']] },
        { label: 'Thanh 3 + thanh 4', items: [['午饭', 'wǔfàn', 'cơm trưa'], ['很大', 'hěn dà', 'rất to']] },
        { label: 'Thanh 3 + thanh nhẹ', items: [['好吗', 'hǎo ma', 'tốt không?'], ['好吧', 'hǎo ba', 'được thôi']] },
      ],
    },
  ],
  notes: [
    {
      title: 'Vận mẫu mũi: an en ang eng ong',
      body: 'an: a đọc [a]. ang: a đọc [ɑ] (sau, rộng hơn). en/eng: e đọc [ə] (ơ). ong: o đọc [ʊ] (như "u" ngắn). Phân biệt "n" (lưỡi chạm lợi) và "ng" (lưỡi lùi sau) là điều quan trọng nhất. Ví dụ: 难 nán / 忙 máng.',
      say: '难',
    },
    {
      title: 'Thanh nhẹ (轻声)',
      body: 'Âm tiết nhẹ và ngắn, không đánh dấu thanh khi viết pinyin. Thường gặp ở chữ lặp lại trong từ chỉ người thân (妈妈 māma, 哥哥 gēge, 弟弟 dìdi, 妹妹 mèimei), trợ từ 吗 ma, 的 de, và đuôi 们 men. Chú ý: chữ Hán vẫn có thanh gốc, nhưng khi nói thì đọc nhẹ.',
      say: '妈妈',
    },
    {
      title: 'Nửa thanh 3 (半三声)',
      body: 'Khi thanh 3 đứng trước âm tiết thanh 1/2/4 hoặc thanh nhẹ, chỉ đọc phần đi xuống (thấp, ngắn), bỏ phần đi lên. Ví dụ: 很忙 hěn máng, 很大 hěn dà, 好吗 hǎo ma. Dấu thanh vẫn viết là thanh 3.',
      say: '很忙',
    },
    {
      title: 'Ngữ pháp 1: câu hỏi có/không với 吗',
      body: 'Thêm 吗 vào cuối câu trần thuật để tạo câu hỏi có/không. 你忙 (Bạn bận) → 你忙吗? (Bạn bận không?). 汉语难吗? (Tiếng Hán khó không?). Không đổi trật tự từ.',
      say: '你忙吗',
    },
    {
      title: 'Ngữ pháp 2: 很 + tính từ và 不太 + tính từ',
      body: '很 + tính từ = "rất…": 很忙 (rất bận), 很难 (rất khó). 不太 + tính từ = "không… lắm": 不太难 (không khó lắm). Trong tiếng Hán, câu "A + 很 + tính từ" là cách nói bình thường, "很" ở đây thường nhẹ nghĩa chứ không nhất thiết là "rất" mạnh.',
      say: '不太难',
    },
    {
      title: 'Mẹo: 他 và 她, 男 và 难',
      body: '他 (anh ấy) và 她 (chị ấy) đọc giống hệt nhau là tā, 它 (tā) chỉ đồ vật, con vật cũng vậy, chỉ khác chữ viết (bộ 亻 người, bộ 女 nữ). 男 (nam) và 难 (khó) cùng đọc nán nên chỉ phân biệt bằng chữ Hán và ngữ cảnh.',
      say: '他',
    },
    {
      title: 'Mở rộng: 太 + tính từ và các cụm với 妈妈',
      body: '太 + tính từ = quá, lắm: 太好 (tốt quá), 太难 (khó quá), 太大 (to quá), 太忙 (bận quá). Từ chỉ người thân có thể thêm định ngữ: 好妈妈 (người mẹ tốt), 我妈妈 (mẹ tôi). Ghi nhớ: 太…了 diễn tả mức độ cao, còn 不太 + tính từ nghĩa là "không… lắm".',
      say: '太好',
    },
    {
      title: 'Biến điệu của 不 (học sớm để nói 不太难)',
      body: '不 đứng một mình hoặc trước thanh 1, 2, 3 vẫn đọc bù: 不难 bù nán, 不喝 bù hē, 不好 bù hǎo, 不高 bù gāo, 不来 bù lái, 不小 bù xiǎo. Trước thanh 4 thì đọc bú: 不去 bú qù, 不是 bú shì, 不太 bú tài. Bài 3 sẽ học kỹ quy tắc này.',
      say: '不去',
    },
  ],
  sentences: [
    { parts: ['你', '忙', '吗'], pinyin: 'Nǐ máng ma?', vi: 'Bạn bận không?' },
    { parts: ['很', '忙'], pinyin: 'Hěn máng.', vi: 'Rất bận.' },
    { parts: ['汉语', '难', '吗'], pinyin: 'Hànyǔ nán ma?', vi: 'Tiếng Hán khó không?' },
    { parts: ['不', '太', '难'], pinyin: 'Bú tài nán.', vi: 'Không khó lắm.' },
    { parts: ['汉语', '不', '太', '难'], pinyin: 'Hànyǔ bú tài nán.', vi: 'Tiếng Hán không khó lắm.' },
    { parts: ['汉语', '不', '难'], pinyin: 'Hànyǔ bù nán.', vi: 'Tiếng Hán không khó.' },
    { parts: ['你', '好', '吗'], pinyin: 'Nǐ hǎo ma?', vi: 'Bạn khỏe không?' },
    { parts: ['你', '爸爸', '好', '吗'], pinyin: 'Nǐ bàba hǎo ma?', vi: 'Bố bạn có khỏe không?' },
    { parts: ['他', '很', '忙'], pinyin: 'Tā hěn máng.', vi: 'Anh ấy rất bận.' },
  ],
  writeChars: ['太', '汉', '语', '吗', '妈', '爸', '很', '忙', '他', '她', '难'],
  drills: [
    {
      title: 'Thanh nhẹ', hint: 'Đọc nhẹ và ngắn âm tiết thứ hai.',
      items: [
        { h: '妈妈', p: 'māma' }, { h: '哥哥', p: 'gēge' }, { h: '他的', p: 'tā de' }, { h: '他们', p: 'tāmen' },
        { h: '红的', p: 'hóng de' }, { h: '忙吗', p: 'máng ma' }, { h: '来吗', p: 'lái ma' }, { h: '白的', p: 'bái de' },
        { h: '奶奶', p: 'nǎinai' }, { h: '好吗', p: 'hǎo ma' }, { h: '饱了', p: 'bǎo le' }, { h: '跑了', p: 'pǎo le' },
        { h: '弟弟', p: 'dìdi' }, { h: '妹妹', p: 'mèimei' }, { h: '累吗', p: 'lèi ma' }, { h: '累了', p: 'lèi le' },
      ],
    },
    {
      title: 'Nửa thanh 3', hint: 'Thanh 3 đầu chỉ đọc nửa xuống, rồi nối sang âm sau.',
      items: [
        { h: '很高', p: 'hěn gāo' }, { h: '很难', p: 'hěn nán' }, { h: '很大', p: 'hěn dà' }, { h: '好吧', p: 'hǎo ba' },
        { h: '你喝', p: 'nǐ hē' }, { h: '你来', p: 'nǐ lái' }, { h: '米饭', p: 'mǐfàn' }, { h: '好了', p: 'hǎo le' },
        { h: '本班', p: 'běn bān' }, { h: '本来', p: 'běnlái' }, { h: '很棒', p: 'hěn bàng' }, { h: '很胖', p: 'hěn pàng' },
      ],
    },
    {
      title: 'Phân biệt âm và thanh điệu', hint: 'Mỗi cặp/nhóm đọc gần giống nhau, chú ý n/ng và thanh điệu.',
      items: [
        { h: '办公', p: 'bàngōng' }, { h: '半空', p: 'bàn kōng' }, { h: '冻红', p: 'dòng hóng' }, { h: '通红', p: 'tōnghóng' },
        { h: '很难', p: 'hěn nán' }, { h: '很蓝', p: 'hěn lán' }, { h: '寒冷', p: 'hán lěng' }, { h: '可能', p: 'kěnéng' },
        { h: '很忙', p: 'hěn máng' }, { h: '很慢', p: 'hěn màn' }, { h: '南方', p: 'nánfāng' }, { h: '难防', p: 'nán fáng' },
      ],
    },
    {
      title: 'Nhận đọc (认读)', hint: 'Đọc cả cụm. Bấm để nghe đáp án.',
      items: [
        { h: '爸爸', p: 'bàba' }, { h: '妈妈', p: 'māma' }, { h: '好吗', p: 'hǎo ma' }, { h: '忙吗', p: 'máng ma' }, { h: '大吗', p: 'dà ma' },
        { h: '难吗', p: 'nán ma' }, { h: '很好', p: 'hěn hǎo' }, { h: '很忙', p: 'hěn máng' }, { h: '很大', p: 'hěn dà' }, { h: '很难', p: 'hěn nán' },
      ],
    },
    {
      title: 'Nhận biết chữ Hán (từ bài giảng)', hint: 'Đọc to rồi nghe đáp án.',
      items: [
        { h: '爸爸', p: 'bàba' }, { h: '妈妈', p: 'māma' }, { h: '好吗', p: 'hǎo ma' }, { h: '忙吗', p: 'máng ma' }, { h: '大妈', p: 'dàmā', m: 'bác gái' },
        { h: '难吗', p: 'nán ma' }, { h: '很好', p: 'hěn hǎo' }, { h: '很忙', p: 'hěn máng' }, { h: '很大', p: 'hěn dà' }, { h: '很难', p: 'hěn nán' },
      ],
    },
    {
      title: 'Đọc câu (từ bài giảng)', hint: 'Sáu câu cơ bản của bài.',
      items: [
        { h: '哥哥很忙。', p: 'Gēge hěn máng.' }, { h: '你忙吗？', p: 'Nǐ máng ma?' }, { h: '汉语很难。', p: 'Hànyǔ hěn nán.' },
        { h: '汉语不太难。', p: 'Hànyǔ bú tài nán.' }, { h: '爸爸好吗？', p: 'Bàba hǎo ma?' }, { h: '他忙吗？', p: 'Tā máng ma?' },
      ],
    },
  ],
  qa: [
    {
      title: 'Dịch hội thoại sang tiếng Trung (翻译成中文)',
      items: [
        { q: 'A: Xin chào. B: Xin chào. A: Bạn khỏe không? B: Tôi rất khỏe, bạn bận không? A: Tôi không bận lắm.', hint: 'A: 你好！B: 你好！A: 你好吗？B: 我很好，你忙吗？A: 我不太忙。' },
      ],
    },
    {
      title: 'Trả lời câu hỏi (回答问题)',
      items: [
        { q: 'Nǐ máng ma? (你忙吗?)', hint: 'Hěn máng. (很忙。) hoặc Bù máng. (不忙。)' },
        { q: 'Hànyǔ nán ma? (汉语难吗?)', hint: 'Hànyǔ bù nán. (汉语不难。) hoặc Hěn nán. (很难。)' },
        { q: 'Nǐ bàba hǎo ma? (你爸爸好吗?)', hint: 'Hěn hǎo. (很好。)' },
        { q: 'Tā máng ma? (他忙吗?)', hint: 'Tā hěn máng. (他很忙。) hoặc Tā bù máng. (他不忙。)' },
      ],
    },
    {
      title: 'Hoàn thành hội thoại (完成会话)',
      items: [
        { q: 'A: ______ !   B: Nǐ hǎo!', hint: 'A: Nǐ hǎo! (你好!)' },
        { q: 'A: ______ ?   B: Hěn máng.', hint: 'A: Nǐ máng ma? (你忙吗?)' },
        { q: 'A: ______ ?   B: Hànyǔ bù nán.', hint: 'A: Hànyǔ nán ma? (汉语难吗?)' },
      ],
    },
  ],
}
