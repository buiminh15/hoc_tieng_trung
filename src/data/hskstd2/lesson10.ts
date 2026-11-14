import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 2, Bài 10: 别找了，手机在桌子上呢 (sách trang 73–80).
 * Sách bản Trung–Anh; phần tiếng Việt do app dịch.
 * Nghe: 10-1…10-5. Sách bài tập (trang 95–102, đáp án trang 19–20).
 */

const A = '/audio/hsk-std2/'

export const hskStd2Lesson10: Lesson = {
  id: 10,
  title: 'Đừng tìm nữa, điện thoại ở trên bàn kìa',
  hanzi: '别找了，手机在桌子上呢',
  pinyin: 'Bié zhǎo le, shǒujī zài zhuōzi shang ne',
  vi: 'Đừng tìm nữa, điện thoại ở trên bàn kìa',
  intro: 'Khuyên ngăn và nói về tác dụng: 不要看电视了。 别找了。 看电视对学汉语有帮助。 Học câu cầu khiến 不要……了 / 别……了, giới từ 对; ngữ điệu câu hỏi có từ để hỏi; bộ 走 và 穴.',

  dialogue: [
    { who: 'A', hanzi: '不要看电视了，明天上午还有汉语课呢。', pinyin: 'Búyào kàn diànshì le, míngtiān shàngwǔ hái yǒu Hànyǔ kè ne.', vi: 'Đừng xem ti vi nữa, sáng mai còn có giờ tiếng Hán đấy.', scene: 'Hội thoại 1 · ở nhà' },
    { who: 'B', hanzi: '看电视对学汉语有帮助。', pinyin: 'Kàn diànshì duì xué Hànyǔ yǒu bāngzhù.', vi: 'Xem ti vi giúp ích cho việc học tiếng Hán mà.' },
    { who: 'A', hanzi: '明天的课你都准备好了吗？', pinyin: 'Míngtiān de kè nǐ dōu zhǔnbèi hǎo le ma?', vi: 'Bài ngày mai con chuẩn bị xong hết chưa?' },
    { who: 'B', hanzi: '都准备好了。', pinyin: 'Dōu zhǔnbèi hǎo le.', vi: 'Xong hết rồi ạ.' },
    { who: 'A', hanzi: '别看报纸了，医生说你要多休息。', pinyin: 'Bié kàn bàozhǐ le, yīshēng shuō nǐ yào duō xiūxi.', vi: 'Đừng đọc báo nữa, bác sĩ nói anh phải nghỉ ngơi nhiều.', scene: 'Hội thoại 2 · ở bệnh viện' },
    { who: 'B', hanzi: '好，不看了。给我一杯茶吧。', pinyin: 'Hǎo, bú kàn le. Gěi wǒ yì bēi chá ba.', vi: 'Được, không đọc nữa. Cho anh một cốc trà đi.' },
    { who: 'A', hanzi: '医生说吃药后两个小时不要喝茶。', pinyin: 'Yīshēng shuō chī yào hòu liǎng ge xiǎoshí búyào hē chá.', vi: 'Bác sĩ nói uống thuốc xong hai tiếng thì đừng uống trà.' },
    { who: 'B', hanzi: '医生还说什么了？', pinyin: 'Yīshēng hái shuō shénme le?', vi: 'Bác sĩ còn nói gì nữa?' },
    { who: 'A', hanzi: '医生让你听我的。', pinyin: 'Yīshēng ràng nǐ tīng wǒ de.', vi: 'Bác sĩ bảo anh nghe lời em.' },
    { who: 'A', hanzi: '你怎么买了这么多东西啊？', pinyin: 'Nǐ zěnme mǎile zhème duō dōngxi a?', vi: 'Sao em mua nhiều đồ thế?', scene: 'Hội thoại 3 · ở nhà' },
    { who: 'B', hanzi: '哥哥今天中午回来吃饭。', pinyin: 'Gēge jīntiān zhōngwǔ huílai chī fàn.', vi: 'Trưa nay anh trai về ăn cơm.' },
    { who: 'A', hanzi: '我看看买了什么了。羊肉、鸡蛋、面条、西瓜……真不少！妈妈呢？', pinyin: 'Wǒ kànkan mǎile shénme le. Yángròu, jīdàn, miàntiáo, xīguā…… zhēn bù shǎo! Māma ne?', vi: 'Để anh xem mua gì nào. Thịt cừu, trứng, mì, dưa hấu… nhiều thật! Mẹ đâu?' },
    { who: 'B', hanzi: '正在准备午饭呢！', pinyin: 'Zhèngzài zhǔnbèi wǔfàn ne!', vi: 'Mẹ đang chuẩn bị cơm trưa!' },
    { who: 'A', hanzi: '你在找什么？', pinyin: 'Nǐ zài zhǎo shénme?', vi: 'Anh đang tìm gì vậy?', scene: 'Hội thoại 4 · ở nhà' },
    { who: 'B', hanzi: '你看见我的手机了吗？白色的。', pinyin: 'Nǐ kànjiàn wǒ de shǒujī le ma? Báisè de.', vi: 'Em có thấy điện thoại của anh không? Màu trắng.' },
    { who: 'A', hanzi: '别找了，手机在桌子上呢，电脑旁边。', pinyin: 'Bié zhǎo le, shǒujī zài zhuōzi shang ne, diànnǎo pángbiān.', vi: 'Đừng tìm nữa, điện thoại ở trên bàn kìa, cạnh máy tính.' },
    { who: 'B', hanzi: '你看见我的衣服了吗？红色的那件。', pinyin: 'Nǐ kànjiàn wǒ de yīfu le ma? Hóngsè de nà jiàn.', vi: 'Em có thấy áo của anh không? Cái màu đỏ ấy.' },
    { who: 'A', hanzi: '那件衣服我帮你洗了，在外边呢。', pinyin: 'Nà jiàn yīfu wǒ bāng nǐ xǐ le, zài wàibian ne.', vi: 'Cái áo đó em giặt giúp anh rồi, đang phơi ngoài kia.' },
  ],
  dialogueClips: [
    { label: '10-1 · Hội thoại 1: 不要看电视了', src: A + 'l10-1.mp3' },
    { label: '10-2 · Hội thoại 2: 别看报纸了', src: A + 'l10-2.mp3' },
    { label: '10-3 · Hội thoại 3: 你怎么买了这么多东西啊？', src: A + 'l10-3.mp3' },
    { label: '10-4 · Hội thoại 4: 别找了，手机在桌子上呢', src: A + 'l10-4.mp3' },
  ],
  dialogueTip: '<b>不要 + động từ + 了</b> / <b>别 + động từ + 了</b>: khuyên ngăn, cấm làm gì (đừng… nữa). <b>A 对 B + 有帮助 / 很好 / 不好</b>: A có tác dụng với B. <b>正在 …… 呢</b>: đang làm gì.',
  slowSay: '别找了，手机在桌子上呢',

  vocab: [
    { hanzi: '课', parts: '讠 + 果', pinyin: 'kè', pos: 'danh từ', meaning: 'giờ học, bài học', han_viet: 'khóa' },
    { hanzi: '帮助', parts: '帮 (bang) + 助 (trợ)', pinyin: 'bāngzhù', pos: 'động từ', meaning: 'giúp đỡ', han_viet: 'bang trợ' },
    { hanzi: '别', parts: '另 + 刂', pinyin: 'bié', pos: 'phó từ', meaning: 'đừng', han_viet: 'biệt' },
    { hanzi: '哥哥', pinyin: 'gēge', pos: 'danh từ', meaning: 'anh trai', han_viet: 'ca ca' },
    { hanzi: '鸡蛋', parts: '鸡 (kê) + 蛋 (đản)', pinyin: 'jīdàn', pos: 'danh từ', meaning: 'trứng gà', han_viet: 'kê đản' },
    { hanzi: '西瓜', parts: '西 (tây) + 瓜 (qua)', pinyin: 'xīguā', pos: 'danh từ', meaning: 'dưa hấu', han_viet: 'tây qua' },
    { hanzi: '正在', parts: '正 (chính) + 在 (tại)', pinyin: 'zhèngzài', pos: 'phó từ', meaning: 'đang', han_viet: 'chính tại' },
    { hanzi: '手机', parts: '手 (thủ) + 机 (cơ)', pinyin: 'shǒujī', pos: 'danh từ', meaning: 'điện thoại di động', han_viet: 'thủ cơ' },
    { hanzi: '洗', parts: '氵 + 先', pinyin: 'xǐ', pos: 'động từ', meaning: 'giặt, rửa', han_viet: 'tẩy' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Câu cầu khiến', title: 'Câu cầu khiến: 不要……了 · 别……了',
      intro: 'Dùng để khuyên ngăn hoặc cấm ai làm việc gì.',
      groups: [
        { label: '不要 + động từ (+ tân ngữ) + 了', items: [['不要玩手机了。', 'Búyào wán shǒujī le.', 'Đừng nghịch điện thoại nữa.'], ['不要做饭了。', 'Búyào zuò fàn le.', 'Đừng nấu cơm nữa.'], ['不要看电视了。', 'Búyào kàn diànshì le.', 'Đừng xem ti vi nữa.']] },
        { label: '别 + động từ (+ tân ngữ) + 了', items: [['别睡觉了。', 'Bié shuì jiào le.', 'Đừng ngủ nữa.'], ['别看书了。', 'Bié kàn shū le.', 'Đừng đọc sách nữa.'], ['别看报纸了。', 'Bié kàn bàozhǐ le.', 'Đừng đọc báo nữa.']] },
      ],
    },
    {
      kind: 'examples', label: 'Giới từ 对', title: 'Giới từ 对',
      intro: 'Giới từ 对 chỉ quan hệ đối với giữa người với người, người với sự vật, sự vật với sự vật.',
      groups: [{ label: 'A 对 B + động từ / tính từ', items: [['跑步对身体很好。', 'Pǎo bù duì shēntǐ hěn hǎo.', 'Chạy bộ rất tốt cho sức khỏe.'], ['老师对学生非常好。', 'Lǎoshī duì xuésheng fēicháng hǎo.', 'Thầy giáo rất tốt với học sinh.'], ['看电视对学汉语有帮助。', 'Kàn diànshì duì xué Hànyǔ yǒu bāngzhù.', 'Xem ti vi giúp ích cho việc học tiếng Hán.']] }],
    },
    {
      kind: 'examples', label: 'Ngữ điệu', title: 'Ngữ điệu câu hỏi có từ để hỏi (特指问句)',
      clip: { label: '10-5 · Nghe và đọc theo (ngữ điệu)', src: A + 'l10-5.mp3' },
      intro: 'Từ để hỏi được đọc nhấn, sau trọng âm thì ngữ điệu cả câu hạ dần.',
      groups: [{ label: 'Nhấn từ để hỏi, rồi hạ giọng ↘', items: [['这是谁的笔？', 'Zhè shì shéi de bǐ? ↘', 'nhấn 谁'], ['你们学校有多少学生？', 'Nǐmen xuéxiào yǒu duōshao xuésheng? ↘', 'nhấn 多少'], ['你在找什么？', 'Nǐ zài zhǎo shénme? ↘', 'nhấn 什么']] }],
    },
    {
      kind: 'examples', label: 'Bộ thủ', title: 'Chữ Hán: bộ 走 và 穴',
      intro: 'Bộ 走 (tẩu) thường liên quan đến chạy, đi; bộ 穴 (huyệt) thường liên quan đến hang động, nhà cửa.',
      groups: [{ label: 'Bộ 走 và 穴', items: [['超', 'chāo', 'vượt (bộ 走)'], ['起', 'qǐ', 'dậy (bộ 走)'], ['空', 'kōng', 'trống (bộ 穴)'], ['穿', 'chuān', 'xuyên, mặc (bộ 穴)']] }],
    },
  ],

  notes: [
    {
      title: 'Câu cầu khiến 不要……了 / 别……了',
      body: 'Dùng để khuyên ngăn hoặc cấm ai làm gì. Ví dụ: 不要玩手机了。 不要看电视了。 别睡觉了。 别看报纸了。',
      say: '别找了',
    },
    {
      title: 'Giới từ 对',
      body: '对 chỉ quan hệ đối với giữa người và người, người và vật, vật và vật. Ví dụ: 跑步对身体很好。 老师对学生非常好。 看电视对学汉语有帮助。',
      say: '看电视对学汉语有帮助',
    },
    {
      title: 'Ngữ điệu câu hỏi có từ để hỏi',
      body: 'Câu có 谁, 什么, 多少… thì nhấn vào từ để hỏi, sau đó giọng hạ dần, KHÁC câu hỏi có 吗 (lên giọng ở cuối).',
      say: '你在找什么',
    },
  ],

  writeChars: ['别', '课', '助', '洗', '机', '蛋'],

  drills: [
    {
      title: 'Nói câu với 不要……了 / 别……了 (运用 1, sách trang 78)',
      hint: 'Ghép động từ với tân ngữ: 看/咖啡, 吃/手机, 玩/新衣服, 买/药, 喝/电视. Mẫu: 不要玩儿电脑了。',
      items: [
        { h: '不要玩儿电脑了。', p: 'Búyào wánr diànnǎo le.', m: 'Đừng chơi máy tính nữa.' },
        { h: '别喝咖啡了。', p: 'Bié hē kāfēi le.', m: 'Đừng uống cà phê nữa.' },
        { h: '不要买新衣服了。', p: 'Búyào mǎi xīn yīfu le.', m: 'Đừng mua quần áo mới nữa.' },
        { h: '看电视对眼睛不好。', p: 'Kàn diànshì duì yǎnjing bù hǎo.', m: 'Xem ti vi không tốt cho mắt.' },
      ],
    },
  ],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 2, sách trang 76–77)',
      items: [
        { q: '孩子们正在做什么？', hint: '孩子们正在看电视。' },
        { q: '妈妈为什么不让他们看电视了？', hint: '因为明天上午还有汉语课。' },
        { q: '吃药以后可以喝茶吗？', hint: '不可以，吃药后两个小时不要喝茶。' },
        { q: '他今天都买了什么东西？为什么要买这么多？', hint: '羊肉、鸡蛋、面条、西瓜；因为哥哥中午回来吃饭。' },
        { q: '你知道男的正在找什么吗？', hint: '他在找他的手机。' },
      ],
    },
  ],

  sentences: [
    { parts: ['不要', '看', '电视', '了'], pinyin: 'Búyào kàn diànshì le.', vi: 'Đừng xem ti vi nữa.' },
    { parts: ['看', '电视', '对', '学', '汉语', '有', '帮助'], pinyin: 'Kàn diànshì duì xué Hànyǔ yǒu bāngzhù.', vi: 'Xem ti vi giúp ích cho việc học tiếng Hán.' },
    { parts: ['别', '看', '报纸', '了'], pinyin: 'Bié kàn bàozhǐ le.', vi: 'Đừng đọc báo nữa.' },
    { parts: ['医生', '让', '你', '听', '我', '的'], pinyin: 'Yīshēng ràng nǐ tīng wǒ de.', vi: 'Bác sĩ bảo anh nghe lời em.' },
    { parts: ['妈妈', '正在', '准备', '午饭', '呢'], pinyin: 'Māma zhèngzài zhǔnbèi wǔfàn ne.', vi: 'Mẹ đang chuẩn bị cơm trưa.' },
    { parts: ['别', '找', '了', '，', '手机', '在', '桌子', '上', '呢'], pinyin: 'Bié zhǎo le, shǒujī zài zhuōzi shang ne.', vi: 'Đừng tìm nữa, điện thoại ở trên bàn kìa.' },
  ],

  dictations: [
    {
      title: 'Sách bài tập · Nghe, chọn đáp án (câu 11–15)',
      hint: 'Nghe đoạn ghi âm (10-1, phần 3), chọn A, B hoặc C. Câu 11: A 电视好看 · B 他不想睡觉 · C 他想学习汉语. Câu 12: A 茶不好喝 · B 他生病了 · C 他吃药了. Câu 13: A 不知道 · B 床上 · C 桌子上. Câu 14: A 不太忙 · B 不太累 · C 想休息. Câu 15: A 没有米饭 · B 吃完了 · C 很快就可以吃饭.',
      clip: { label: '10-1 · Sách bài tập, phần nghe', src: A + 'w10-1.mp3' },
      items: [
        { prompt: 'Câu 11', answer: 'C', gloss: '他想学习汉语' }, { prompt: 'Câu 12', answer: 'C', gloss: '他吃药了' },
        { prompt: 'Câu 13', answer: 'A', gloss: '不知道' }, { prompt: 'Câu 14', answer: 'B', gloss: '不太累' },
        { prompt: 'Câu 15', answer: 'C', gloss: '很快就可以吃饭' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, điền từ (câu 21–25)',
      hint: 'A 帮助 · B 正在 · C 课 · D 鸡蛋 · E 贵 · F 别. Gõ chữ cái A–F.',
      items: [
        { prompt: '明天的（ ）我都准备好了，可以睡觉了。', answer: 'C', gloss: '课' }, { prompt: '大卫是一个喜欢（ ）别人的好孩子。', answer: 'A', gloss: '帮助' },
        { prompt: '我每天早上吃一个（ ），喝一杯牛奶。', answer: 'D', gloss: '鸡蛋' }, { prompt: '妈妈睡觉了，我们（ ）看电视了。', answer: 'F', gloss: '别' },
        { prompt: '哥哥（ ）玩儿电脑呢，没时间帮助我。', answer: 'B', gloss: '正在' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, đúng hay sai (câu 26–30)',
      hint: 'Đọc câu cho sẵn rồi xét câu có dấu * đúng (gõ D) hay sai (gõ S).',
      items: [
        { prompt: '这本书是我写的，希望能对你有帮助。* 这本书还没写完。', answer: 'S', gloss: 'Sai' },
        { prompt: '医生说这个药要饭后吃，吃药后两个小时别喝茶。* 医生说多喝茶对身体好。', answer: 'S', gloss: 'Sai' },
        { prompt: '别找了，你的手机在桌子上呢，电脑旁边。* 电脑也在桌子上。', answer: 'D', gloss: 'Đúng' },
        { prompt: '那件白色的衣服我帮你洗了，在外面呢。* 衣服在外面。', answer: 'D', gloss: 'Đúng' },
        { prompt: '机场离这儿很远，坐公共汽车要一个多小时，坐出租车也要四五十分钟吧。* 机场离这儿非常远。', answer: 'D', gloss: 'Đúng' },
      ],
    },
    {
      title: 'Sách bài tập · Đọc, nối câu (câu 31–35)',
      hint: 'A 爸，我们明天去跑步吧。 B 我弟弟正在学习汉语呢。 C 一个红的，一个白的，真漂亮。 D 你明天的课都准备好了吗？ E 他在哪儿呢？你看见他了吗？ F 别看电视了，明天还要考试呢。 Gõ chữ cái A–F.',
      items: [
        { prompt: '你喜欢哪个？我可以送给你。', answer: 'C', gloss: '一个红的，一个白的，真漂亮。' }, { prompt: '好啊，医生说多运动对我的身体好。', answer: 'A', gloss: '爸，我们明天去跑步吧。' },
        { prompt: '好吧，我这就去睡觉。', answer: 'F', gloss: '别看电视了，明天还要考试呢。' }, { prompt: '对，因为公司想让他明年去中国工作。', answer: 'B', gloss: '我弟弟正在学习汉语呢。' },
        { prompt: '没问题，您放心吧。', answer: 'D', gloss: '你明天的课都准备好了吗？' },
      ],
    },
  ],
}
