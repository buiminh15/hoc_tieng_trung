import type { DayContent, Ex, ErrQ } from './types'

/**
 * Tuần 3 · Thứ Năm: Câu phức (2) (复句二): nhân quả, mục đích, điều kiện, giả thiết, nhượng bộ, ý hợp. Sách trang 246–264.
 * Phần dịch tiếng Việt do app tự thêm.
 */

const e = (h: string, vi: string, note?: string, tag?: string): Ex => ({ h, vi, note, tag })
const seg = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'segment', parts, answer, topic, fix, why })
const sen = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'sentence', parts, answer, topic, fix, why })

export const day14: DayContent = {
  intro:
    'Câu phức dùng liên từ nối hai hay nhiều câu đơn thành ý đầy đủ và có lô-gic, rõ ràng. Có thể nói học dùng đúng liên từ là học được logic biểu đạt của tiếng Hán. Hãy hiểu và phân tích thật kỹ quan hệ lô-gic của từng loại câu phức, nắm chắc các liên từ này thì trình độ tiếng Hán của bạn sẽ tiến một bước lớn.',

  focusTitle: 'Sáu loại câu phức hôm nay',

  cheat: {
    title: 'Bảng tra nhanh: sáu loại câu phức (phần 2)',
    lead: 'Điểm chốt: liên từ phải đi đúng cặp, vị trí chủ ngữ và tính chất vế sau (nguyên nhân hay kết quả, mục đích hay hành động).',
    head: ['Loại', 'Liên từ thường gặp'],
    rows: [
      { key: 'Nhân quả', cells: ['因为……所以……; 由于……(所以/因此)……; ……，因此/故此/因而……; ……，从而……; (是)由于/因为……; 之所以……是因为……; 只好/只得; (由此)可见; 这样一来; 以至(于); 以致; 不免/难免/免不了'] },
      { key: 'Mục đích', cells: ['为了……，(只好/要/所以/而)……; ……，为的是/是为了……; ……，以/以便(于)……; ……好; 以免/免得/省得……'] },
      { key: 'Điều kiện', cells: ['只有……才……; 只要……就……; 除非……才……/否则……; 凡是……都……; 既然……就……; 不管/不论/无论/别管……都/也/总……; 任凭……也/都……'] },
      { key: 'Giả thiết', cells: ['如果/假如/要是/假若……(的话)，那么/就……; ……，否则/要不然……; 幸亏/幸好/好在/多亏……，不然/否则……; 要不是……就……'] },
      { key: 'Nhượng bộ', cells: ['哪怕……也/都……; 就是/就算……也……; 即使/即便……也……; 纵然……也/仍……'] },
      { key: 'Ý hợp', cells: ['Không có liên từ, chỉ nhờ ý nghĩa hiểu quan hệ đẳng lập, nối tiếp, tăng tiến, lựa chọn, chuyển ngoặt, nhân quả, điều kiện, giả thiết.'] },
    ],
  },

  sections: [
    { id: 'yinguo', hanzi: '因果复句', pinyin: 'yīnguǒ fùjù', title: 'Câu phức nhân quả', intro: 'Một vế nêu nguyên nhân, vế kia nêu kết quả; hai vế có thể đổi chỗ.', groups: [
      { title: '1. Nguyên nhân trước, kết quả sau', patterns: [
        { formula: '因为……所以……  ;  由于……(所以/因此)……', title: '因为 / 由于', note: 'Chú ý vị trí chủ ngữ: nếu hai vế cùng chủ ngữ, chủ ngữ thường đặt trước "因为/由于"; khác chủ ngữ thì chủ ngữ đặt sau.', examples: [
          e('因为天气不好，所以我不想去公园了。', 'Vì thời tiết xấu nên tôi không muốn đi công viên.'),
          e('他由于每天练习，因此发音特别好。', 'Anh vì ngày nào cũng luyện nên phát âm đặc biệt tốt.'),
          e('他生病了，因此没来上课。', 'Anh bệnh nên không đến lớp.'),
          e('他们来自不同的国家，因而生活习惯不完全一样。', 'Họ đến từ các nước khác nhau nên thói quen sinh hoạt không hoàn toàn giống.'),
          e('应当通过调查研究发现问题，从而找到解决问题的方法。', 'Cần qua điều tra nghiên cứu phát hiện vấn đề, từ đó tìm ra cách giải quyết.'),
        ] },
      ] },
      { title: '2. Kết quả trước, nguyên nhân sau', patterns: [
        { formula: '……，(是)由于/因为……  ;  之所以……是因为……', title: '是由于 / 之所以', note: 'Nêu kết quả trước, giải thích nguyên nhân sau.', examples: [
          e('我最近身体不好，是由于运动太少。', 'Dạo này sức khỏe tôi không tốt, là do vận động quá ít.'),
          e('人们之所以失败，常常是因为没有坚持到最后，半途而废了。', 'Sở dĩ người ta thất bại, thường là vì không kiên trì đến cùng mà bỏ dở.'),
        ] },
      ] },
      { title: '3. Nêu nguyên nhân rồi suy ra kết quả', patterns: [
        { formula: '只好/只得  ;  (由此)可见  ;  这样一来/这一下  ;  以至(于)  ;  以致  ;  不免/难免/免不了', title: 'Các cấu trúc suy ra kết luận', note: '只好/只得: vì nguyên nhân trước nên đành làm việc sau. 可见: từ tình hình trước rút kết luận. 这样一来: vì tình hình trước nên sự việc phát triển thành kết quả. 以至(于): mức độ cao dẫn đến kết quả. 以致: kết quả xấu, nghiêm trọng. 不免/难免: vì nguyên nhân trước nên không tránh khỏi kết quả.', examples: [
          e('等了半天他还不来，我只好一个人去了。', 'Đợi nửa ngày anh vẫn không đến, tôi đành đi một mình.'),
          e('他连汉语都能看懂，可见中文水平相当高。', 'Anh đến chữ Hán cũng đọc được, thấy trình độ tiếng Hán khá cao.'),
          e('他看书看得十分用心，以至(于)有人来也没发现。', 'Anh đọc sách quá chăm chú đến nỗi có người đến cũng không hay.'),
          e('他酒后开车，以致发生了交通事故。', 'Anh uống rượu lái xe, dẫn đến tai nạn giao thông.'),
          e('快要考试了，可还有很多功课没有复习，心中不免紧张。', 'Sắp thi mà còn nhiều bài chưa ôn, trong lòng khó tránh căng thẳng.'),
        ] },
      ] },
    ] },
    { id: 'mudi', hanzi: '目的复句', pinyin: 'mùdì fùjù', title: 'Câu phức mục đích', intro: 'Một vế nêu mục đích, một vế nêu hành động.', groups: [{ patterns: [
      { formula: '为了……，(只好/只得/要/所以/而)……  ;  ……，是为了/为的是……', title: 'Mục đích trước hoặc sau', note: '"为了 + mục đích" ở nửa trước; nếu nêu hành động trước, mục đích sau phải dùng "是为了/为的是". Trong văn viết dùng "……，以……", sau "以" thường là động từ hai âm tiết; khẩu ngữ dùng "……好……".', examples: [
        e('为了取得好成绩，他参加了很多辅导班。', 'Để đạt thành tích tốt, anh đăng ký nhiều lớp phụ đạo.'),
        e('她六点起床，为的是去机场接朋友。', 'Cô dậy lúc sáu giờ để ra sân bay đón bạn.'),
        e('他学习汉语，以便毕业后能找到更好的工作。', 'Anh học tiếng Hán để sau tốt nghiệp tìm được việc tốt hơn.'),
        e('今年公司建了两座住宅楼，以解决员工住房问题。', 'Năm nay công ty xây hai tòa nhà ở để giải quyết vấn đề nhà ở của nhân viên.'),
        e('早点儿睡，明天你好早点儿起床。', 'Ngủ sớm chút, ngày mai bạn dậy sớm cho dễ.'),
      ] },
      { formula: '……，以免/免得/省得……', title: 'Tránh điều không mong muốn', note: '"以免, 免得, 省得": A là hành vi để tránh B. "以免" B thường là việc nguy hiểm nghiêm trọng; "省得" B thường là việc phiền hà.', examples: [
        e('喝酒以后不要开车，以免发生交通事故。', 'Uống rượu xong đừng lái xe, kẻo xảy ra tai nạn.'),
        e('天气不好，多注意身体，以免感冒。', 'Thời tiết xấu, chú ý sức khỏe kẻo cảm.'),
        e('你有什么事可以给我打电话，省得你亲自跑过来。', 'Bạn có việc gì cứ gọi điện cho tôi, đỡ phải đích thân chạy đến.'),
      ] },
    ] }] },
    { id: 'tiaojian', hanzi: '条件复句', pinyin: 'tiáojiàn fùjù', title: 'Câu phức điều kiện', intro: 'Vế trước nêu điều kiện, vế sau nêu kết quả khi thỏa điều kiện. Có điều kiện cần, điều kiện đủ và không điều kiện.', groups: [{ patterns: [
      { formula: '只有……才……  ;  只要……就……', title: '1. Điều kiện cần và đủ', note: '只有……才……: bắt buộc có A, không A thì không B (điều kiện nghiêm). 只要……就……: có A thì chắc chắn có B (điều kiện dễ đạt).', examples: [
        e('市场竞争激烈，商品只有质量可靠，才能在市场竞争中立于不败之地。', 'Cạnh tranh thị trường gay gắt, hàng hóa chỉ có chất lượng đáng tin mới đứng vững.'),
        e('虽然有很多困难，但是只要我们团结一心，共同努力，就一定能成功。', 'Tuy nhiều khó khăn nhưng chỉ cần đoàn kết một lòng, cùng nỗ lực là nhất định thành công.'),
      ] },
      { formula: '除非A才B  ;  除非A，否则B', title: '2. 除非', note: '"除非" tương đương "只有"; A là điều kiện bắt buộc.', examples: [
        e('除非你答应我一个条件，我才告诉你这个秘密。', 'Trừ phi bạn nhận một điều kiện của tôi, tôi mới nói bí mật này.'),
        e('除非你答应我一个条件，否则我不告诉你这个秘密。', 'Trừ phi bạn nhận một điều kiện của tôi, nếu không tôi không nói bí mật này.'),
      ] },
      { formula: '凡是……(的名)，都……  ;  既然……，就……', title: '3. 凡是 và 既然', note: '凡是: mọi danh từ thỏa điều kiện A đều B. 既然: nhấn mạnh có sự thật A, đương nhiên nên B.', examples: [
        e('凡是计划好的事，我都要努力完成。', 'Việc nào đã lên kế hoạch, tôi đều cố hoàn thành.'),
        e('既然你来了，那就多玩一会儿再走吧。', 'Đã đến rồi thì chơi thêm lát rồi hãy đi.'),
      ] },
      { formula: '不管/不论/无论/别管……，都/也/总……  ;  任凭……也/都……', title: '4. Không điều kiện', note: 'A là nhiều điều kiện, thường dùng đại từ nghi vấn (谁/什么/怎么/哪儿), câu hỏi chính-phản, câu chọn, hoặc "多 + 形". Dù điều kiện thế nào kết quả vẫn như nhau.', examples: [
        e('不管刮风还是下雨，他都坚持早起运动。', 'Dù gió hay mưa, anh đều kiên trì dậy sớm tập.'),
        e('不管有多大的困难，我们都要坚持下去。', 'Khó khăn lớn đến đâu ta cũng phải kiên trì.'),
        e('任凭他跑到天涯海角，我们也要找到他。', 'Mặc anh chạy đến chân trời góc biển, ta cũng phải tìm ra.'),
      ] },
    ] }] },
    { id: 'jiashe', hanzi: '假设复句', pinyin: 'jiǎshè fùjù', title: 'Câu phức giả thiết', intro: 'Một vế nêu điều kiện giả thiết, một vế nêu kết quả. Liên từ rất nhiều nhưng ý giống nhau.', groups: [{ patterns: [
      { formula: '如果/假如/假使/假若/若/要是……(的话)，那么/则……就……', title: 'Giả thiết cơ bản', note: '"如果" có thể trước hoặc sau chủ ngữ, nhưng phải nối phần giả thiết.', examples: [
        e('如果不下雨，我就来。', 'Nếu không mưa thì tôi đến.'),
        e('要是你同意(的话)，我们就这样决定了。', 'Nếu bạn đồng ý thì chúng ta quyết định thế.'),
        e('假如你同意，我们明天就去。', 'Giả sử bạn đồng ý, ngày mai chúng ta đi.'),
      ] },
      { formula: '……，否则/要不然……  ;  幸亏/幸好/好在/多亏……，不然/否则……  ;  要不是……就……', title: 'Giả thiết ngược', note: 'Vế trước nêu điều kiện, vế sau từ mặt trái nói "nếu không thế thì sẽ có kết quả…". "幸亏" nêu điều kiện khách quan có sẵn; "要不是A就B": giả thiết trái sự thật.', examples: [
        e('你亲自去请他，否则他不来。', 'Bạn đích thân đi mời anh, nếu không anh sẽ không đến.'),
        e('幸亏你提醒我，不然我就忘了。', 'May mà bạn nhắc, nếu không tôi quên mất.'),
        e('要不是下雨，我们早就走了。', 'Nếu không mưa thì chúng tôi đã đi từ lâu.'),
      ] },
    ] }] },
    { id: 'rangbu', hanzi: '让步复句', pinyin: 'ràngbù fùjù', title: 'Câu phức nhượng bộ', intro: 'Vế trước giả thiết một điều kiện, vế sau nói điều kiện đó không ảnh hưởng đến kết quả, nhờ vậy nhấn mạnh vế sau.', groups: [{ patterns: [
      { formula: '哪怕/就是/就算/即使/即便/纵然……，也/都/仍……', title: 'Các liên từ nhượng bộ', note: 'A là điều kiện giả thiết không phù hợp, B là kết quả chắc chắn xảy ra.', examples: [
        e('当初你哪怕给我一点点帮助，今天我也不会这样。', 'Hồi đó bạn dù chỉ giúp tôi một chút, hôm nay tôi cũng không ra nông nỗi này.'),
        e('就是有困难，你也应该坚持下去。', 'Dù có khó khăn, bạn cũng nên kiên trì.'),
        e('即使明天下雪，我们也要去长城。', 'Dù mai có tuyết, chúng ta cũng đi Trường Thành.'),
        e('这个问题至关重要，纵然一时无法处理，仍需尽快解决。', 'Vấn đề này cực kỳ quan trọng, dù nhất thời chưa xử lý được vẫn cần giải quyết sớm.'),
      ] },
      { formula: '尽管……，也……  /  不管……，都/也……  /  即使……，也……', title: 'Phân biệt ba loại', note: '尽管: A là sự thật (chuyển ngoặt). 不管: A là nhiều điều kiện, thường là câu hỏi (điều kiện). 即使: A là giả thiết (nhượng bộ).', examples: [
        e('尽管有很多困难，我们也要坚持下去。', 'Dù có rất nhiều khó khăn, ta vẫn phải kiên trì.', 'A là sự thật.'),
        e('即使有再多困难，我们也要坚持下去。', 'Dù có nhiều khó khăn đến mấy, ta cũng phải kiên trì.', 'A là giả thiết.'),
        e('不管困难有多大，我们也要坚持下去。', 'Dù khó khăn lớn đến đâu, ta cũng phải kiên trì.', 'A là câu hỏi.'),
      ] },
    ] }] },
    { id: 'yihe', hanzi: '意合复句', pinyin: 'yìhé fùjù', title: 'Câu phức ý hợp', intro: 'Không có liên từ, chỉ nhờ ý nghĩa mà thể hiện quan hệ câu phức.', groups: [{ patterns: [
      { formula: '(không liên từ)', title: 'Tám quan hệ', note: 'Có thể hiểu qua liên từ ngầm trong ngoặc.', examples: [
        e('我们(又)复习生词，(又)写汉字，(又)做练习。', 'Chúng ta vừa ôn từ mới, vừa viết chữ Hán, vừa làm bài tập.', 'Đẳng lập.'),
        e('吃了饭，我们(就)去散步。', 'Ăn cơm xong, chúng ta đi dạo.', 'Nối tiếp.'),
        e('那地方我早就去过，(而且)去过两次了。', 'Chỗ đó tôi đã đi từ lâu, đi hai lần rồi.', 'Tăng tiến.'),
        e('这次去广州你坐火车，(还是)坐飞机？', 'Lần này đi Quảng Châu bạn đi tàu hay máy bay?', 'Lựa chọn.'),
        e('你觉得不好，(可是)我觉得不错。', 'Bạn thấy không tốt, nhưng tôi thấy cũng được.', 'Chuyển ngoặt.'),
        e('(因为)他病了，(所以)今天没来上课。', 'Vì anh bệnh nên hôm nay không đến lớp.', 'Nhân quả.'),
        e('(只要)天不下雨，我们就可以去。', 'Chỉ cần trời không mưa, chúng ta có thể đi.', 'Điều kiện.'),
        e('(如果)有套房子多好啊，(就)不用再住宿舍了。', 'Giá có căn nhà thì tốt biết mấy, đỡ phải ở ký túc.', 'Giả thiết.'),
      ] },
    ] }] },
  ],

  boards: [
    {
      id: 'yg-board', hanzi: '因果复句', title: 'Câu nhân quả',
      rows: [
        { label: '1', text: '因为A, 所以B / (之所以)B, (是)因为A. "因为"和"所以"是连词，前边不用"的"，后边不用"是"; "原因"和"结果"是名词，前边可以用"的"，后边可以用"是": 他不来上课的原因是他生病了。', examples: [e('因为生病，所以他这个星期没去上课。', 'Vì bệnh nên tuần này anh không đi học.'), e('他(之所以)这个星期没上课，(是)因为他生病了。', 'Tuần này anh không đi học là vì anh bệnh.')], points: [{ text: 'Điểm thi: "主要" + "原因" phải có "是" hoặc "因为": "主要是因为经济发达地区……".', fixes: [{ wrong: '主要因为是经济发达地区进口贸易发展迅速', right: '主要是因为经济发达地区进口贸易发展迅速', ref: 'Kiểm tra 5 · B' }] }] },
        { label: '2', text: '因为A的缘故，所以B / 由于A(的原因/的缘故)，因此/因而B. "因为"不能和"因此/因而"搭配: 因为堵车，所以我今天迟到了. "因此" và "因而" gần giống nhau; "因此" có thể bổ sung kết luận cho phần luận bàn trước, sau đó là câu hoàn chỉnh; "因而" không có cách dùng đó; "因而" có thể tách: "因……而……". "从而" biểu thị kết quả hoặc hành động tiếp theo từ A.', examples: [e('上次考试失败了，他因此失去了信心。', 'Lần thi trước thất bại, anh vì thế mất tự tin.'), e('因病而不能来上课的同学必须事先向老师请假。', 'Học sinh vì bệnh không đến lớp phải xin phép thầy trước.'), e('通过宣传让人们了解环保知识，从而提高他们的环保意识。', 'Qua tuyên truyền cho mọi người hiểu kiến thức bảo vệ môi trường, từ đó nâng cao ý thức.')] },
        { label: '3', text: 'A不免/难免B: vì có A nên không thể tránh B xuất hiện. A以至(于)B: mức độ cao nên có kết quả B. A以致B: B là hậu quả rất nghiêm trọng.', examples: [e('快要考试了，可还有很多功课没有复习，心中不免紧张。', 'Sắp thi mà còn nhiều bài chưa ôn, trong lòng khó tránh căng thẳng.'), e('他看书看得十分用心，以至(于)有人来也没发现。', 'Anh đọc sách quá chăm chú đến nỗi có người đến cũng không biết.'), e('他酒后驾车，以致发生了交通事故。', 'Anh uống rượu lái xe, dẫn đến tai nạn.')] },
      ],
    },
    {
      id: 'md-board', hanzi: '目的复句', title: 'Câu mục đích',
      rows: [
        { label: '1', text: '为了……，(只好/只得/要/所以/而)……. Nếu nêu hành động trước, mục đích sau thì phải dùng "……，是为了/为的是……". Trong văn viết dùng "……，以/以便(于)……"; sau "以" thường là động từ hai âm tiết. Khẩu ngữ dùng "……好……", "好" là phó từ chỉ mục đích, phải đứng sau chủ ngữ hoặc từ chỉ thời gian.', examples: [e('为了学好汉语，我来到中国。', 'Để học tốt tiếng Hán, tôi đến Trung Quốc.'), e('我来到中国，是为了学好汉语。', 'Tôi đến Trung Quốc là để học tốt tiếng Hán.'), e('我来到中国，以提高汉语水平。', 'Tôi đến Trung Quốc để nâng cao trình độ tiếng Hán.'), e('上课时要认真记笔记，下课以后好复习。', 'Khi học phải ghi chép kỹ, tan học sẽ dễ ôn.')], points: [{ text: 'Điểm thi: "能多喝酒" là nguyên nhân, không phải mục đích, nên không dùng "是为了".', fixes: [{ wrong: '并不一定是为了他们酒量好或者身体格外强壮', right: '并不一定是因为他们酒量好或者身体格外强壮', ref: 'Kiểm tra 4 · B' }] }] },
        { label: '2', text: '……，以免/免得/省得……: làm A là để không xảy ra B. "以免/免得/省得" đều phủ định; B thường là việc người nói không muốn. Thường "以免 + việc nguy hiểm", "省得 + việc phiền hà". Chú ý phân biệt với "不免/难免": "不免/难免" nhấn mạnh khẳng định.', examples: [e('明天我得早点起床，免得又迟到。', 'Mai tôi phải dậy sớm, kẻo lại muộn.'), e('喝酒以后不要开车，以免发生交通事故。', 'Uống rượu xong đừng lái xe kẻo tai nạn.'), e('你有什么事可以给我打电话，省得你亲自跑过来。', 'Có việc gì cứ gọi điện, đỡ phải chạy đến.')] },
      ],
    },
    {
      id: 'tj-board', hanzi: '条件复句', title: 'Câu điều kiện',
      rows: [
        { label: '1', text: '只有A才B: bắt buộc có A, không A không có B (nghiêm). 只要A就B: có A thì chắc có B (rộng).', examples: [e('市场竞争激烈，商品只有质量可靠，才能在市场竞争中立于不败之地。', 'Thị trường cạnh tranh, hàng chỉ có chất lượng đáng tin mới đứng vững.'), e('虽然有很多困难，但是只要我们团结一心，共同努力，就一定能成功。', 'Tuy nhiều khó khăn nhưng chỉ cần đoàn kết là nhất định thành công.')] },
        { label: '2', text: '除非A才B / 除非A否则B / B，除非A: "除非" tương đương "只有", A là điều kiện bắt buộc. 凡是……(的名)，都……: mọi danh từ thỏa A đều B. 既然A，就B: có sự thật A nên đương nhiên B.', examples: [e('除非你答应我一个条件，我才告诉你这个秘密。', 'Trừ phi bạn nhận điều kiện của tôi, tôi mới nói bí mật.'), e('凡是计划好的事，我都要努力完成。', 'Việc nào đã lên kế hoạch, tôi đều cố hoàn thành.'), e('既然你来了，那就多玩一会儿再走吧。', 'Đã đến rồi thì chơi thêm lát rồi đi.')], points: [{ text: 'Điểm thi: "既然" không đi với "所以"; phải dùng "那么/就".', fixes: [{ wrong: '既然大家都知道真相，所以你不妨当众说明', right: '既然大家都知道真相，那么你不妨当众说明', ref: 'Đề mô phỏng 3 · B' }, { wrong: '但入了这一行没有什么好抱怨的了', right: '但既然入了这一行，就没有什么好抱怨的了', ref: 'Kiểm tra 3 · C' }] }] },
        { label: '3', text: '不管/不论/无论/别管A，都/也/总B: A là nhiều điều kiện, thường dùng câu hỏi (谁/什么/怎么/哪儿), câu chính-phản, câu chọn, "多 + 形".', examples: [e('不管刮风还是下雨，他都坚持早起运动。', 'Dù gió hay mưa anh đều dậy sớm tập.')], points: [{ text: 'Điểm thi: "无论" phải dùng liệt kê nhiều điều kiện.', fixes: [{ wrong: '科普工作的深入开展无论是对街道的精神文明建设，就是对物质文明建设都具有深远的意义', right: '科普工作的深入开展无论是对街道的精神文明建设，还是对物质文明建设，都具有深远的意义', ref: 'Kiểm tra 2 · D' }, { wrong: '不管大家强烈反对，他仍然坚持自己的意见', right: '尽管大家强烈反对，他仍然坚持自己的意见', ref: 'Đề mô phỏng 1 · B' }] }] },
      ],
    },
    {
      id: 'js-board', hanzi: '假设复句', title: 'Câu giả thiết',
      rows: [
        { label: 'Liên từ', text: '如果/假如/假使/假若/若/要是……的话，那么/则……就…… Liên từ rất nhiều, nghĩa cơ bản giống nhau. Chú ý "如果" có thể đứng trước hoặc sau chủ ngữ nhưng phải nối phần giả thiết.', examples: [e('要是下雨的话，(那么)明天的比赛就顺延到下周举行。', 'Nếu mưa thì trận mai dời sang tuần sau.')], points: [{ text: 'Điểm thi: "如果" phải nối toàn bộ phần giả thiết, không đứng giữa "她" và "今天穿的".', fixes: [{ wrong: '她如果今天穿的是雍容华贵的晚礼服', right: '如果她今天穿的是雍容华贵的晚礼服', ref: 'Kiểm tra 6 · A' }] }] },
      ],
    },
    {
      id: 'rb-board', hanzi: '让步复句', title: 'Câu nhượng bộ',
      rows: [
        { label: 'So sánh', text: '尽管……，也……: A là sự thật (chuyển ngoặt). 不管……，都/也……: A là nhiều điều kiện, câu hỏi (điều kiện). 即使……，也……: A là giả thiết (nhượng bộ). Ba câu đều nói B chắc chắn xảy ra, chỉ khác tính chất của A.', examples: [e('尽管有很多困难，我们也要坚持下去。', 'Dù có nhiều khó khăn, ta cũng phải kiên trì.'), e('即使有再多困难，我们也要坚持下去。', 'Dù có nhiều khó khăn nữa, ta cũng phải kiên trì.'), e('不管困难有多大，我们也要坚持下去。', 'Dù khó khăn lớn đến đâu, ta cũng phải kiên trì.')], points: [{ text: 'Điểm thi: "贵为英国王子" là sự thật, nên dùng "尽管"; "不管贵为……" sai.', fixes: [{ wrong: '不管贵为英国王子，哈里也要和其他学员一样', right: '尽管贵为英国王子，哈里也要和其他学员一样', ref: 'Kiểm tra 1 · C' }] }] },
      ],
    },
  ],

  test: [
    seg(['据英国《镜报》报道，英国王子哈里在他就读的军事学院被命令清扫学校的公厕，', '不管贵为英国王子，', '哈里也要和其他学员一样', '认真完成这一项训练任务。'], 1, '不管 và 尽管',
      '尽管贵为英国王子', '"贵为英国王子" là sự thật, nên phải dùng "尽管"; "不管" cần nhiều điều kiện.'),
    seg(['居委会十分重视科普工作，', '领导们一致认为，', '科普工作的深入开展无论是对街道的精神文明建设，', '就是对物质文明建设都具有深远的意义。'], 3, '无论……还是……',
      '还是对物质文明建设，都具有深远的意义', '"无论" cần liệt kê nhiều điều kiện, đối ứng "无论……还是……".'),
    seg(['宾馆服务员杨丽说，第一年过年没回家，', '很想父母，', '但入了这一行没有什么好抱怨的了，', '行业的特殊性决定了他们春节不能与家人团聚。'], 2, '既然……就……',
      '但既然入了这一行，就没有什么好抱怨的了', 'Ý nghĩa "đã vào nghề này thì đương nhiên không nên than phiền" cần "既然……就……".'),
    seg(['一些人在酒桌上能够豪饮不止，', '并不一定是为了他们酒量好或者身体格外强壮，', '而是因为他们体内的一种基因可能发生了变异，', '美国科学家的一项新发现证明了这种猜测。'], 1, 'Mục đích hay nguyên nhân',
      '并不一定是因为他们酒量好', '"能多喝酒" là kết quả nên dùng "因为", không dùng "为了".'),
    seg(['经济发达地区的消费者对品牌的选择相对分散一些，', '主要因为是经济发达地区进口贸易发展迅速，', '新品牌、新产品不断涌现，', '品牌竞争更激烈。'], 1, 'Nguyên nhân',
      '主要是因为经济发达地区……', '"因为" là liên từ, không đi trực tiếp với "是" ở sau; phải là "主要是因为".'),
    seg(['她如果今天穿的是雍容华贵的晚礼服，', '或是时下最流行的前卫装束，', '他们就不会把她误认为是打扫卫生的小妹，', '让她到厨房去帮忙了。'], 0, 'Vị trí của 如果',
      '如果她今天穿的是雍容华贵的晚礼服', '"如果" phải nối cả phần giả thiết "她今天穿的是……", đặt trước "她".'),
  ],

  exam: [
    sen(['只有在东北地区，才能看到鹅毛般的大雪。', '不管大家强烈反对，他仍然坚持自己的意见。', '女人因为可爱而美丽，因为成熟而更有魅力。', '要善于控制自己的态度和情绪，不然你就会被它们控制。'], 1, '不管 và 尽管', '尽管大家强烈反对，他仍然坚持自己的意见', '"不管" phải liệt kê nhiều điều kiện; chỉ một điều kiện thì không dùng được, nên dùng "尽管".'),
    sen(['太阳能发电不用燃料，不会产生公害，因为太阳能发电被誉为是理想的能源。', '我怀念我的童年生活，不是因为那时的故事，而只是因为那时愉快的心情。', '老师常常鼓励我们说："只要有信心，就能够获得成功。"', '人经过努力可以改变世界，这种努力可以使人类达到更美好的境界。'], 0, 'Logic nhân quả', '太阳能发电不用燃料，不会产生公害，所以(因此)被誉为理想的能源', 'Vế trước là nguyên nhân, vế sau là kết quả, phải dùng "所以/因此".'),
    sen(['即使是天才，缺少了勤奋的汗水也难以取得成功。', '既然大家都想知道真相，所以你不妨当众说明，免得让媒体猜疑，引起更多的争端。', '人，只要有信念，有追求，什么苦难都能忍受，什么环境也都能适应。', '不管是火山喷发还是海啸地震，如果相关地区无人居住，就构不成自然灾害。'], 1, '既然……所以', '既然大家都想知道真相，那么你不妨当众说明', '"既然" không đi cùng "所以"; phải dùng "那么/就".'),
    sen(['任何一个国家，不管它多富裕，都浪费不起人力资源。', '由于计算机技术的普及，为学校开展多媒体教学提供了良好的条件。', '大发明家爱迪生告诫我们，如果你年轻时没有学会思考，那么就永远不会学会思考。', '真理如果不能在新的社会形势下被赋予新的意义，那它就不是真理。'], 1, '由于 và hai chủ ngữ', '由于计算机技术的普及，学校开展了多媒体教学', '"由于" nối nguyên nhân, hai vế khác chủ ngữ không được dùng giới từ làm lẫn; sửa để có hai vế đầy đủ.'),
    sen(['如果人们连续看上四五个小时的电视节目，就会感到十分疲劳。', '为了能见亲生父母一面，她一个人翻山越岭来到这个偏僻的小山村。', '在荷兰，男性对女性通常只问候致意，只有女性主动伸手时，男性才可轻握对方的手。', '我们常说的"青出于蓝"这个成语出自荀子的《劝学》，比喻学生胜过老师，后人胜过前人。'], 0, 'Vị trí 如果', '人们如果连续看上四五个小时的电视节目，就会感到十分疲劳', 'Câu chỉ có một chủ ngữ nên "如果" phải đứng sau chủ ngữ "人们".'),
    sen(['为了缓解电力紧张的压力，国家发展和改革委员会决定自6月1日起上调工商业、农业用电价格。', '日前，法国和荷兰先后就是否批准《欧盟宪法条约》举行全民公投，由于反对票过半，而且未获通过。', '诗歌之所以吸引人，一个很大的原因就是它营造的意境和包含的意韵是其他艺术形式所无法比拟的。', '人生就是这样，没有人为你等待，没有机会为你停留，只有与时间赛跑，你才有可能会赢。'], 1, '由于 và 而且', '由于反对票过半，因而未获通过', '"由于" không đi cùng "而且"; phải dùng "因而/所以".'),
    sen(['我觉得这篇文章已经很不错了，但还存在一些缺点，只有好好修改修改，并把内容充实一下，那就更好了。', '在一个人需要帮助的时候，你助他一臂之力，那是给他力量。但是，如果给了他太多的帮助，那就是在削弱他的力量。', '我很喜欢林肯说的一句话："如果一个目的是正当而必须做的，则达到这个目的的必要手段也是正当而必须采取的。"', '这条变更线位于太平洋中的180度经线上，是地球上"今天"和"昨天"的分界线，因此被称为"国际日期变更线"。'], 0, '只有 / 只要', '只要好好修改修改，并把内容充实一下，那就更好了', '"只有……才……" mới dùng cho điều kiện bắt buộc; ở đây là điều kiện dễ, nên dùng "只要……就……".'),
    sen(['一个人有了远大的理想，就算是在最艰苦的时候，也会感到幸福。', '学问包括两层意思：一是学，二是问，即使是知识渊博的人也离不开问。', '如果把巴黎圣母院作为古老巴黎的象征，所以矗立在塞纳河左岸的埃菲尔铁塔，便是现代巴黎的标志。', '任何时候都不要认为你什么都懂，不管别人怎样称赞你，你时时刻刻都要有勇气对自己说，我是个门外汉。'], 2, '如果……所以', '如果把巴黎圣母院作为古老巴黎的象征，那么矗立在塞纳河左岸的埃菲尔铁塔，便是现代巴黎的标志', '"如果" không đi cùng "所以", phải dùng "那么".'),
    sen(['如果说性格决定命运，那么我愿意接受命运的挑战。', '不要因为问题小就忽视它，于是很容易导致严重后果。', '今年香港的元宵节，并未因气温的骤降而冷清，游人们纷纷穿上冬装前来赏灯。', '假如你希望人们乐于和你相处，那你就要保持快乐的心情。'], 1, 'Phủ định và liên từ', '不要因为问题小就忽视它，否则很容易导致严重后果', '"于是" không phù hợp logic phủ định; dùng "否则" hoặc "这很容易导致严重后果".'),
    sen(['为了防止假票流通，组委会决定购票者最早在比赛开始前两个星期才能拿到票。', '在这个世界上，取得成功的人是那些努力寻找他们想要的机会的人，如果找不到机会，他们就去创造机会。', '我认为，即使个税改革不在今年推出，也必然会在近两年内推出，我国的税收管理将朝着更科学、更公平的方向不断完善。', '现在有很多人为了享受丰厚的积分回馈办理了许多信用卡和商户积分卡。'], 2, 'Vị trí 即使', '我认为，个税改革即使不在今年推出，也必然会在近两年内推出', '"即使" nối giả thiết, câu chỉ có một chủ ngữ thì phải đặt sau chủ ngữ.'),
    sen(['他事先没有充分调查研究，也没有征询别人的意见，至于决策失误，给公司造成了损失。', '他不顾自己有心脏病，过度操劳，甚至有一回因连续工作36小时而昏厥。', '持之以恒，必有成就，倘若这山望着那山高，那就会一事无成。', '由于长期与汉族交往，白族语言中有大量汉语词汇，汉文很早就被白族人习用。'], 0, '至于 và 以至于', '以至于/以致决策失误', '"至于" nêu mặt khác; "以至于/以致" mới diễn tả kết quả.'),
    sen(['犯了错误，首先要反思自己，不要总是抱怨别人做得不好，否则你就永远也不可能进步。', '一杯清水会因滴入一滴污水而变得污浊，一杯污水却不会因一滴清水的存在而变清澈。', '人若是太幸运，则不知天高地厚，也不知自己的能力究竟有多少；若是太不幸，则会终生默默无名。', '《敕勒歌》是一首只有27个字的北朝民歌，所以它有着极大的艺术感染力。静山、平川、苍天、茫野，加上清风拂过时所现之牛羊，动静结合，描绘了北国草原的富饶和壮丽。'], 3, 'Logic chuyển ngoặt', '……是一首只有27个字的北朝民歌，但它却有着极大的艺术感染力', '27 chữ ít, nhưng sức cảm hóa lớn: quan hệ chuyển ngoặt, không dùng "所以".'),
    sen(['A 600多年前，郑和率船队七下西洋，历时28年，途经亚非30多个国家和地区，开创了中国航海史上的新纪元。', '有时候，人们往往因为害怕失败而不敢去尝试，但这应当改变，因为即使失败了，只要正视失败，就有成功的机会。', '每一个人都应该了解一些面对挫折的心理学方法，并适时地应用一下，为了不断提高自己的挫折承受能力。', '无论年龄、性别、信仰、经济地位或种族有多么不同，有一件东西是所有人都有的，那就是每个人在内心深处都相信，我们比普通人要强。'], 2, 'Mục đích đặt trước', '为了不断提高自己的挫折承受能力，每一个人都应该了解……', '"为了 + mục đích" phải đặt ở nửa trước; nêu hành động trước thì mục đích dùng "是为了/以/以便".'),
    sen(['只有真正了解自己的长处和短处，避己所短，扬己所长，才能对自己的人生坐标进行准确定位。', '"知己知彼，百战不殆"，意思是说了解敌我双方十分重要，只要把双方情况了解透彻，打起仗来就不会有危险。', '光芒四射的太阳，表面看去显得平静而安详，但实际上太阳局部的活动十分频繁，有时还相当剧烈。', '一定要把你的生活安排得井井有条，不论事情看上去那么微不足道，因为从生活中我们可以看出一个人的性格，并能判断他适合什么工作。'], 3, '不论 + nhiều điều kiện', '不论事情看上去多么微不足道 (hoặc: 即使事情看上去那么微不足道)', '"无论" biểu thị nhượng bộ, phía sau phải là nhiều điều kiện, hoặc dùng "即使".'),
    sen(['青岛港是中国重要的国际贸易口岸，与世界130多个国家和地区的450多个港口都有贸易往来。', '随着经济发展水平的提高，越来越多的私家车进入普通家庭，随之而来的问题就是汽车尾气污染日益严重，从长远来看，整个社会都会因为付出昂贵的代价。', '能意识到每个人都有其脆弱的一面，从而待人温和宽容，是很多优秀的人的相同品质。这也就是以待己之心待人。', '大凡成功的投资者，都是"戒骄戒躁"的高手，他们每逢大事都能保持冷静，善于控制自己的情绪，以稳健又不失迅速的行动追求赢利。'], 1, 'Thiếu thành phần sau 因为', '整个社会都会因为这些问题(而)付出昂贵的代价 (hoặc: 因此而付出昂贵的代价)', '"因为" phía sau thiếu nguyên nhân; phải thêm "这些问题" hoặc "因此".'),
  ],
}
