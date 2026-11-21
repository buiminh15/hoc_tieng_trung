import type { Lesson } from '../types'

/** Giáo trình chuẩn HSK 5 (Thượng), Bài 15: 纸上谈兵. Nghĩa từ mới và ngữ pháp theo sách; dịch bài khóa do app thêm. Không có file nghe. Đáp án theo HSK5-BH1. */

export const hskStd5Lesson15: Lesson = {
  id: 15,
  title: "Đánh trận trên giấy",
  hanzi: "纸上谈兵",
  pinyin: "Zhǐshàng tán bīng",
  vi: "Đánh trận trên giấy",
  intro: "Truyện Triệu Quát chỉ biết lý thuyết quân sự. Học 过 (bổ ngữ khả năng), so sánh 胜利 – 成功.",

  dialogue: [
    { who: 'A', name: '课文', hanzi: "两千七百多年前的战国末期，赵国名将赵奢有个儿子叫赵括，他从小读了不少兵书，跟别人谈论起军事来，没有人说得过他，就是父亲赵奢也难不住他。赵括因此很骄傲，自以为天下无敌，连父亲也不放在眼里。但是赵奢心里明白，自己的儿子虽然对军事理论都很了解，但是没有实际作战的经验，想法很不符合实际。他曾经偷偷对妻子说：“儿子的毛病是只会讲大道理，缺乏实际锻炼，不能当大将。如果让他当了大将，迟早会害了赵国。”", pinyin: "", vi: "Hơn 2700 năm trước, cuối thời Chiến Quốc, danh tướng nước Triệu Triệu Xa có con trai tên Triệu Quát, từ nhỏ đọc nhiều binh thư, bàn quân sự không ai nói lại, ngay cả cha cũng không làm khó được. Triệu Quát vì thế rất kiêu ngạo, tự cho thiên hạ vô địch, đến cha cũng không coi ra gì. Nhưng Triệu Xa hiểu rõ con tuy rành lý thuyết quân sự nhưng thiếu kinh nghiệm thực chiến, ý nghĩ không sát thực tế. Ông từng lén nói với vợ: \"Tật của con là chỉ biết nói lý lẽ lớn, thiếu rèn luyện thực tế, không thể làm đại tướng. Nếu cho nó làm đại tướng, sớm muộn sẽ hại nước Triệu.\"", scene: "Triệu Quát" },
    { who: 'A', name: '课文', hanzi: "几年后，赵奢去世了。这一年正好秦国军队来打赵国，赵国派老将廉颇带20万大军迎战。廉颇根据敌强我弱的形势，命令士兵们坚守阵地，绝对不可主动出战。秦军多次挑战，骂他是胆小鬼，他还是不出兵。这个办法果然非常有效，成功地把秦军拦在了国门之外。渐渐地，秦军无法快速取得胜利，粮食也快没了，有些坚持不住了。秦人深知廉颇善于用兵，如果想在短期内打败赵国，必须想办法叫赵国把廉颇调回去。于是，他们在赵国四处散布谣言，说秦军最怕赵括，别的人都不放在眼里。", pinyin: "", vi: "Mấy năm sau Triệu Xa mất. Năm đó quân Tần đánh Triệu, Triệu cử lão tướng Liêm Pha dẫn 200.000 quân nghênh chiến. Liêm Pha dựa vào thế địch mạnh ta yếu, lệnh quân giữ vững trận địa, tuyệt đối không chủ động xuất chiến. Quân Tần nhiều lần khiêu chiến, mắng ông là kẻ nhát gan, ông vẫn không ra quân. Cách này quả nhiên rất hiệu quả, chặn quân Tần ngoài cổng nước. Dần dần quân Tần không thể nhanh thắng, lương cũng sắp hết, có người không trụ nổi. Người Tần biết rõ Liêm Pha giỏi dùng binh, muốn đánh bại Triệu trong thời gian ngắn phải tìm cách bắt Triệu điều Liêm Pha về. Họ bèn tung tin đồn khắp nước Triệu rằng quân Tần chỉ sợ Triệu Quát, những người khác không coi ra gì.", scene: "Liêm Pha" },
    { who: 'A', name: '课文', hanzi: "这时，赵王正因廉颇闭门不战而生气呢，听到外面的那些谣言，果然上当了，他派赵括去换回廉颇。赵括的母亲再三阻止赵王任命儿子为大将，说他还没有独立带兵作战的资格。可是，糊涂的赵王哪里听得进去！公元前260年，赵括带兵出战。一直盲目自信、轻视秦军的他完全改变了廉颇的作战方案，死搬兵书上的理论，主动进攻秦军，结果数十万赵军全部被杀，丢掉了宝贵的生命。", pinyin: "", vi: "Lúc này vua Triệu đang giận Liêm Pha đóng cửa không đánh, nghe tin đồn bên ngoài liền mắc lừa, cử Triệu Quát thay Liêm Pha. Mẹ Triệu Quát nhiều lần can vua đừng bổ nhiệm con làm đại tướng, nói nó chưa đủ tư cách tự chỉ huy. Nhưng vua hồ đồ nào nghe lọt! Năm 260 TCN Triệu Quát ra trận. Vốn mù quáng tự tin, coi thường quân Tần, hắn đổi hoàn toàn phương án của Liêm Pha, cứng nhắc theo lý thuyết binh thư, chủ động tấn công, kết quả mấy chục vạn quân Triệu bị giết hết, mất đi sinh mạng quý giá.", scene: "Thảm bại" },
    { who: 'A', name: '课文', hanzi: "这就是成语“纸上谈兵”的故事。现在常用这个成语讽刺那些只会空谈理论的人，提醒大家做事一定要灵活，要注意理论联系实际。", pinyin: "", vi: "Đây là câu chuyện thành ngữ \"đánh trận trên giấy\". Nay thường dùng để châm biếm người chỉ biết nói suông lý thuyết, nhắc mọi người làm việc phải linh hoạt, chú ý gắn lý thuyết với thực tế.", scene: "Bài học" },
  ],
  dialogueTip: "<b>过</b>: bổ ngữ khả năng. <b>胜利</b>/<b>成功</b>.",
  slowSay: "纸上谈兵",

  vocab: [
    { hanzi: "纸上谈兵", pinyin: "zhǐshàng tánbīng", pos: "thành ngữ", meaning: "đánh trận trên giấy", han_viet: '' },
    { hanzi: "军事", pinyin: "jūnshì", pos: "danh từ", meaning: "quân sự", han_viet: '' },
    { hanzi: "敌(人)", pinyin: "dí(rén)", pos: "danh từ", meaning: "quân địch", han_viet: '' },
    { hanzi: "理论", pinyin: "lǐlùn", pos: "danh từ", meaning: "lý luận", han_viet: '' },
    { hanzi: "作战", pinyin: "zuòzhàn", pos: "động từ", meaning: "tác chiến", han_viet: '' },
    { hanzi: "毛病", pinyin: "máobìng", pos: "danh từ", meaning: "khuyết điểm", han_viet: '' },
    { hanzi: "道理", pinyin: "dàolǐ", pos: "danh từ", meaning: "đạo lý", han_viet: '' },
    { hanzi: "迟早", pinyin: "chízǎo", pos: "phó từ", meaning: "sớm muộn", han_viet: '' },
    { hanzi: "军队", pinyin: "jūnduì", pos: "danh từ", meaning: "quân đội", han_viet: '' },
    { hanzi: "派", pinyin: "pài", pos: "động từ", meaning: "cử đi", han_viet: '' },
    { hanzi: "弱", pinyin: "ruò", pos: "tính từ", meaning: "yếu", han_viet: '' },
    { hanzi: "形势", pinyin: "xíngshì", pos: "danh từ", meaning: "tình hình", han_viet: '' },
    { hanzi: "命令", pinyin: "mìnglìng", pos: "động từ/danh từ", meaning: "ra lệnh", han_viet: '' },
    { hanzi: "守", pinyin: "shǒu", pos: "động từ", meaning: "phòng thủ", han_viet: '' },
    { hanzi: "阵地", pinyin: "zhèndì", pos: "danh từ", meaning: "trận địa", han_viet: '' },
    { hanzi: "绝对", pinyin: "juéduì", pos: "tính từ/phó từ", meaning: "tuyệt đối", han_viet: '' },
    { hanzi: "主动", pinyin: "zhǔdòng", pos: "tính từ", meaning: "chủ động", han_viet: '' },
    { hanzi: "挑战", pinyin: "tiǎozhàn", pos: "động từ", meaning: "khiêu chiến", han_viet: '' },
    { hanzi: "骂", pinyin: "mà", pos: "động từ", meaning: "chửi", han_viet: '' },
    { hanzi: "胆小鬼", pinyin: "dǎnxiǎoguǐ", pos: "danh từ", meaning: "kẻ nhát gan", han_viet: '' },
    { hanzi: "胜利", pinyin: "shènglì", pos: "động từ", meaning: "thắng lợi", han_viet: '' },
    { hanzi: "调(动)", pinyin: "diào(dòng)", pos: "động từ", meaning: "điều động", han_viet: '' },
    { hanzi: "散布", pinyin: "sànbù", pos: "động từ", meaning: "tung ra", han_viet: '' },
    { hanzi: "谣言", pinyin: "yáoyán", pos: "danh từ", meaning: "tin đồn", han_viet: '' },
    { hanzi: "上当", pinyin: "shàng dàng", pos: "động từ", meaning: "mắc lừa", han_viet: '' },
    { hanzi: "再三", pinyin: "zàisān", pos: "phó từ", meaning: "nhiều lần", han_viet: '' },
    { hanzi: "阻止", pinyin: "zǔzhǐ", pos: "động từ", meaning: "ngăn cản", han_viet: '' },
    { hanzi: "任命", pinyin: "rènmìng", pos: "động từ", meaning: "bổ nhiệm", han_viet: '' },
    { hanzi: "独立", pinyin: "dúlì", pos: "động từ", meaning: "độc lập", han_viet: '' },
    { hanzi: "资格", pinyin: "zīgé", pos: "danh từ", meaning: "tư cách", han_viet: '' },
    { hanzi: "糊涂", pinyin: "hútu", pos: "tính từ", meaning: "hồ đồ", han_viet: '' },
    { hanzi: "公元", pinyin: "gōngyuán", pos: "danh từ", meaning: "công nguyên", han_viet: '' },
    { hanzi: "盲目", pinyin: "mángmù", pos: "tính từ", meaning: "mù quáng", han_viet: '' },
    { hanzi: "轻视", pinyin: "qīngshì", pos: "động từ", meaning: "coi thường", han_viet: '' },
    { hanzi: "方案", pinyin: "fāng’àn", pos: "danh từ", meaning: "phương án", han_viet: '' },
    { hanzi: "进攻", pinyin: "jìngōng", pos: "động từ", meaning: "tấn công", han_viet: '' },
    { hanzi: "宝贵", pinyin: "bǎoguì", pos: "tính từ", meaning: "quý giá", han_viet: '' },
    { hanzi: "讽刺", pinyin: "fěngcì", pos: "động từ", meaning: "châm biếm", han_viet: '' },
    { hanzi: "灵活", pinyin: "línghuó", pos: "tính từ", meaning: "linh hoạt", han_viet: '' },
  ],

  sections: [
    { kind: 'examples', label: "过", title: "过 (bổ ngữ khả năng)", intro: "动词+得/不+过: biểu thị thắng/không thắng được.", groups: [{ label: 'Ví dụ', items: [["跟人谈论起军事来，没有人说得过他。", "Gēn rén tánlùn qǐ jūnshì lái, méiyǒu rén shuō de guò tā.", "Bàn quân sự, không ai nói lại được anh."], ["年轻人记忆力好，这一点我比不过你们。", "Niánqīngrén jìyìlì hǎo, zhè yì diǎn wǒ bǐ bu guò nǐmen.", "Người trẻ trí nhớ tốt, điểm này tôi không bằng các bạn."]] }] },
    { kind: 'examples', label: "胜利 – 成功", title: "So sánh 胜利 và 成功", intro: "胜利: thắng trong chiến tranh/thi đấu, có đối thủ; 成功: đạt mục đích, không cần đối thủ.", groups: [{ label: 'Ví dụ', items: [["得民心者才会赢得这场战争的胜利。", "Dé mínxīn zhě cái huì yíngdé zhè chǎng zhànzhēng de shènglì.", "Người được lòng dân mới giành thắng lợi trận chiến này."], ["座谈会开得很成功。", "Zuòtánhuì kāi de hěn chénggōng.", "Buổi tọa đàm rất thành công."]] }] },
  ],

  notes: [
    { title: "过", body: "Bổ ngữ khả năng: 说得过/比不过。", say: "没有人说得过他" },
    { title: "胜利/成功", body: "Thắng lợi / thành công.", say: "成功地拦在国门之外" },
  ],

  writeChars: ["兵", "谈", "赵", "括", "敌", "阵", "谣", "糊"],

  drills: [],

  qa: [{ title: 'Hoạt động (运用)', items: [{"q": "“纸上谈兵”给你什么启发？", "hint": "理论要联系实际……"}, {"q": "你认为理论和实践哪个更重要？", "hint": "……"}] }],

  sentences: [],

  dictations: [
    { title: "Giáo trình 练习 1 / 2", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "我见朋友的小孩打不开房门，想帮他，却被朋友（ ）了。", answer: "阻止", gloss: "ngăn" },
      { prompt: "任何经验都是（ ）的，但并不是任何时候都是有效的。", answer: "宝贵", gloss: "quý" },
      { prompt: "社会上的成功人士，有不少都（ ）记住别人的名字。", answer: "善于", gloss: "giỏi" },
      { prompt: "你这脑子可真（ ），银行卡的密码怎么能忘了呢？", answer: "糊涂", gloss: "hồ đồ" },
      { prompt: "跳伞运动以自身的惊险和（ ）性，被称为勇敢者的运动。", answer: "挑战", gloss: "thách thức" },
      { prompt: "家长应尽量创造一个能让孩子（ ）生活和学习的环境。", answer: "独立", gloss: "độc lập" },
      { prompt: "我（ ）以为这一生我只能做一个普通工人了。", answer: "曾经", gloss: "từng" },
      { prompt: "最近我这车出了点儿（ ），空调总是不太凉。", answer: "毛病", gloss: "trục trặc" },
      { prompt: "父母给我讲了许多做人的（ ）。", answer: "道理", gloss: "đạo lý" },
      { prompt: "这样的安排他是（ ）不会同意的。", answer: "绝对", gloss: "tuyệt đối" },
      { prompt: "得民心者才会赢得这场战争的（ ）。", answer: "胜利", gloss: "thắng lợi" },
      { prompt: "她（ ）地说服了丈夫。", answer: "成功", gloss: "thành công" },
      { prompt: "猎人慌乱地连开了几（ ）。", answer: "枪", gloss: "phát súng" },
      { prompt: "花木兰是中国古代的女（ ）。", answer: "英雄", gloss: "anh hùng" },
      { prompt: "在1896年的奥运会上，（ ）就被列为了正式比赛项目。", answer: "射击", gloss: "bắn súng" },
    ] },
  ],
}
