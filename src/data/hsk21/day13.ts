import type { DayContent, Ex, ErrQ } from './types'

/**
 * Tuần 3 · Thứ Tư: Câu phức (1) (复句一): đẳng lập, tăng tiến, nối tiếp, lựa chọn, chuyển ngoặt. Sách trang 225–245.
 * Phần dịch tiếng Việt và pinyin do app tự thêm.
 */

const e = (h: string, vi: string, note?: string, tag?: string): Ex => ({ h, vi, note, tag })
const seg = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'segment', parts, answer, topic, fix, why })
const sen = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'sentence', parts, answer, topic, fix, why })

export const day13: DayContent = {
  intro:
    'Câu phức dùng liên từ nối hai hay nhiều câu đơn thành một ý trọn vẹn. Dùng liên từ chính xác làm lời nói có tính lô-gic. Hôm nay tổng hợp các liên từ trong tiếng Hán; khi học hãy chú ý cấu trúc ngữ pháp và quan hệ ngữ nghĩa giữa các phân câu. Câu phức chiếm nhiều trong đề HSK mới, nắm không vững sẽ ảnh hưởng trực tiếp đến điểm. Hãy dành nhiều thời gian ghi nhớ và hiểu cách dùng mọi liên từ.',

  focusTitle: 'Năm loại câu phức hôm nay',

  cheat: {
    title: 'Bảng tra nhanh: năm loại câu phức',
    lead: 'Cách nhớ: nhìn quan hệ giữa hai vế, rồi chọn liên từ đi cặp. Chú ý vị trí chủ ngữ (phó từ nằm sau chủ ngữ, liên từ nằm trước).',
    head: ['Loại', 'Liên từ thường gặp'],
    rows: [
      { key: 'Đẳng lập', cells: ['一边……一边……; 一面……一面……; 一方面……(另)一方面……; 又……又……; 既……又/也……; 也……也……; 一会儿……一会儿……; 时而……时而……; 忽而……忽而……'] },
      { key: 'Tăng tiến', cells: ['不但/不仅/不光/不单……而且(也/还)……; ……，还……; ……，更……; 不只……连……都……; ……，甚至……; 尚且……何况……; ……，何况/况且……; 不但不/没……反而……'] },
      { key: 'Nối tiếp', cells: ['先……然后……再/又……; 起初……后来……; 一……就……; 刚……就……; ……，于是……'] },
      { key: 'Lựa chọn', cells: ['是……还是……; 或者……或者……; 不是……就是……; 要么……要么……; 宁可/宁愿/宁肯……也……; 与其……不如……'] },
      { key: 'Chuyển ngoặt', cells: ['虽然……但是/可是……; 尽管……但是/然而……; ……，而……则/却……; 不是……而是……; ……，倒……; ……，不过/就是……; 固然……但是……也……; ……，反而/反倒……; 看起来……其实……'] },
    ],
  },

  sections: [
    {
      id: 'binglie', hanzi: '并列复句', pinyin: 'bìngliè fùjù', title: 'Câu phức đẳng lập',
      intro: 'Các phân câu bình đẳng, không có chủ thứ. Có ba nhóm: động tác đồng thời, cùng lúc có nhiều tính chất, và nhiều động tác thay phiên nhau.',
      groups: [
        { title: '1. Động tác đồng thời', patterns: [
          { formula: '(一)边……(一)边……', title: '(一)边……(一)边……', note: 'Hai động tác tiến hành đồng thời. "一边" không nối tính từ và động từ "是".', examples: [
            e('我喜欢一边听音乐，一边看书。', 'Tôi thích vừa nghe nhạc vừa đọc sách.'),
            e('他一边是我的老师，一边是我的朋友。(×)', 'Sai: nên dùng "既……又……".', 'Không nối động từ "是".'),
          ] },
          { formula: '一面……一面… / 同时……', title: '一面……一面……', note: 'Nối nhiều động tác đồng thời, dùng nhiều trong văn viết.', examples: [
            e('我们应该一面发展物质文明，一面发展精神文明。', 'Ta cần vừa phát triển văn minh vật chất vừa phát triển văn minh tinh thần.'),
            e('他一面笑着和我们告别，同时捉起脚下的行李，转身走了。', 'Anh vừa cười chào tạm biệt, vừa nhấc hành lý dưới chân rồi quay đi.'),
          ] },
          { formula: '一方面……(另)一方面……', title: '一方面……另一方面……', note: 'Nối hai việc liên quan hoặc hai mặt của cùng một việc. Không dùng cho hai động tác đồng thời.', examples: [
            e('他一方面要照顾孩子，一方面又要照顾老人，很辛苦。', 'Anh vừa phải chăm con vừa phải chăm người già, rất vất vả.'),
            e('一方面路远，另一方面天黑，还是明天再去比较好。', 'Một mặt đường xa, mặt khác trời tối, mai đi vẫn hơn.'),
            e('他们一方面走，一方面谈。(×)', 'Sai: nên dùng "一边……一边……" hoặc "一面……一面……".'),
          ] },
        ] },
        { title: '2. Đồng thời có nhiều tính chất', patterns: [
          { formula: '又……又……', title: '又……又……', note: 'Chủ ngữ giống nhau; nối tính từ, cũng nối động từ (động từ thường, năng nguyện, hoặc 是/有).', examples: [
            e('他又累又饿，实在走不动了。', 'Anh vừa mệt vừa đói, thực sự đi không nổi.'),
            e('晚会上，大家又唱又跳，高兴极了。', 'Trong buổi tối, mọi người vừa hát vừa nhảy, vui cực.'),
          ] },
          { formula: '既……又/也……', title: '既……又/也……', note: 'Thường không nối động từ chỉ động tác cụ thể; hay dùng trong văn viết.', examples: [
            e('我想给他买一件既漂亮又实用的礼物。', 'Tôi muốn mua cho anh món quà vừa đẹp vừa thực dụng.'),
            e('人生道路上，既留有胜利者的欢乐，也留着失败者的泪痕。', 'Trên đường đời, vừa có niềm vui của người thắng, vừa có vệt nước mắt của người thua.'),
          ] },
          { formula: '(主₁)也……，(主₂)也……', title: '也……也……', note: 'Chỉ nối động từ, hai chữ "也" trước có thể là hai chủ ngữ.', examples: [
            e('他总觉得这也不好，那也不好。', 'Anh luôn thấy cái này không tốt, cái kia cũng không tốt.'),
            e('今天去也行，明天去也行。', 'Hôm nay đi cũng được, mai đi cũng được.'),
          ] },
        ] },
        { title: '3. Nhiều động tác hoặc tình huống thay phiên', patterns: [
          { formula: '一会儿……一会儿…… / 时(而)……时(而)…… / 忽(而)……忽(而)……', title: 'Thay phiên', note: 'Nối động từ hoặc tính từ.', examples: [
            e('他一会儿嫌时间过得慢，一会儿又觉得它跑得太快了。', 'Lúc anh chê thời gian trôi chậm, lúc lại thấy nó chạy quá nhanh.'),
            e('他的病情很不稳定，身体时好时坏。', 'Bệnh tình anh không ổn định, sức khỏe lúc tốt lúc xấu.'),
            e('他最近的心情好像六月里的天气一样，忽而阴忽而晴。', 'Tâm trạng anh dạo này như thời tiết tháng sáu, lúc âm u lúc nắng.'),
          ] },
        ] },
      ],
    },
    {
      id: 'dijin', hanzi: '递进复句', pinyin: 'dìjìn fùjù', title: 'Câu phức tăng tiến',
      intro: 'Ý của vế sau tiến thêm một bước so với vế trước (từ thấp lên cao hoặc cao xuống thấp). Về ngữ pháp là quan hệ đẳng lập: vế trước có động từ, tính từ, năng nguyện, giới từ thì vế sau cũng nên có. Đặc biệt chú ý vị trí chủ ngữ.',
      groups: [
        { title: '1. Nêu thêm tình huống', patterns: [
          { formula: '不但/不仅/不光/不单……而且……(也/还)……', title: 'Vị trí chủ ngữ', note: 'Hai vế cùng chủ ngữ thì "不但" đặt sau chủ ngữ; hai vế khác chủ ngữ thì "不但" đặt trước chủ ngữ thứ nhất.', examples: [
            e('健康的概念不仅是指身体不生病，而且还包括心理健康和社会交往方面的健康。', 'Khái niệm sức khỏe không chỉ là không bệnh mà còn gồm sức khỏe tâm lý và giao tiếp xã hội.', 'Một chủ ngữ.'),
            e('不但我信任他，而且以前反对他的人现在也信任他了。', 'Không chỉ tôi tin anh mà cả những người trước phản đối anh nay cũng tin.', 'Hai chủ ngữ.'),
            e('不要只想到自己，还应该关心别人。', 'Đừng chỉ nghĩ đến mình mà còn phải quan tâm người khác.', '……，还……'),
          ] },
        ] },
        { title: '2. Nêu tình huống đặc biệt', patterns: [
          { formula: '……，更……  ;  不只/不光/不单……连……都(也)……  ;  ……，甚至(于)……  ;  尚且……(更)何况……呢', title: 'Các cấu trúc', note: 'Nêu một tình huống đặc biệt, biểu thị "thường thế, đương nhiên thế".', examples: [
            e('你都没有这种本事，我就更不行了。', 'Bạn còn không có bản lĩnh này, tôi càng không được.'),
            e('我不只喜欢听西方音乐，连东方音乐也喜欢。', 'Tôi không chỉ thích nhạc phương Tây, cả nhạc phương Đông cũng thích.'),
            e('最近我的汉语水平没有提高，甚至有时还觉得退步了呢。', 'Dạo này trình độ tiếng Hán của tôi không tiến mà thậm chí có lúc còn thấy lùi.'),
            e('一个房间尚且不能打扫干净，更何况处理天下事呢？', 'Một căn phòng còn quét không sạch, huống hồ lo việc thiên hạ?'),
          ] },
        ] },
        { title: '3. Nêu thêm nguyên nhân', patterns: [
          { formula: '……，何况/况且……也/又/还……', title: '何况 / 况且', note: 'Hai vế đều là nguyên nhân: "A，再说 B". Dạng "…… 尚且……，(更)何况……": nghĩa "别说 B, 连 A 也都……".', examples: [
            e('我已经不止一次去过长城，何况马上又要考试了，所以我没和朋友一起去。', 'Tôi đã đi Trường Thành không chỉ một lần, hơn nữa sắp thi, nên không đi cùng bạn.'),
            e('这件衣服样子好看，况且价格也不贵，你买吧。', 'Bộ này kiểu đẹp, hơn nữa giá cũng không đắt, bạn mua đi.'),
            e('上海话和普通话差异很大，一些中国人尚且听不懂，更何况我这个外国人呢。', 'Tiếng Thượng Hải rất khác tiếng phổ thông, có người Trung Quốc còn nghe không hiểu, huống hồ tôi là người nước ngoài.'),
          ] },
        ] },
        { title: '4. Tình huống bất thường, "không ngờ"', patterns: [
          { formula: '不仅不/没……，还……  ;  不但(仅)不/没……反倒/反而/反面……', title: '不但不……反而……', note: 'Vế trước nêu điều nên làm / bình thường, vế sau nêu điều không nên / bất thường. Đây không phải chuyển ngoặt mà là tăng tiến, nhấn mạnh tình huống "không nên xảy ra đã xảy ra".', examples: [
            e('售货员不仅不着急，还耐心地解释。', 'Nhân viên không những không nóng mà còn kiên nhẫn giải thích.'),
            e('他不但不听我的劝告，反而冲上前去。', 'Anh không những không nghe lời khuyên của tôi mà còn lao lên phía trước.'),
            e('吃了药以后，我的感冒不但没有好转，反而加重了。', 'Uống thuốc xong, cảm của tôi không những không đỡ mà còn nặng hơn.'),
          ] },
        ] },
      ],
    },
    {
      id: 'chengjie', hanzi: '承接复句', pinyin: 'chéngjiē fùjù', title: 'Câu phức nối tiếp',
      intro: 'Các phân câu mô tả theo trình tự các động tác liên tục hoặc một sự việc trọn vẹn.',
      groups: [{ patterns: [
        { formula: '(首)先……然后……接着……再/又……', title: '(首)先……然后……再/又……', note: '"再" chỉ việc chưa làm, "又" chỉ việc đã làm. "首先" đặt trước hay sau chủ ngữ đều được, "先" phải đặt sau chủ ngữ.', examples: [
          e('放学后，我们先做完作业，然后再去看电影吧。', 'Tan học, chúng ta làm xong bài tập rồi hãy đi xem phim.'),
          e('上周末，我们先做完作业，然后又去看了一场电影。', 'Cuối tuần trước, chúng tôi làm xong bài rồi lại đi xem phim.'),
          e('我们要约束好自己，然后才能要求别人。', 'Ta phải quản được mình rồi mới yêu cầu được người khác.'),
        ] },
        { formula: '起初/起先……后来……', title: '起初……后来……', note: 'Chỉ dùng để kể việc đã xảy ra trong quá khứ. "后来" chỉ kể việc đã qua, không đi sau động tác hay từ chỉ thời gian; "以后" có thể dùng quá khứ, hiện tại, tương lai.', examples: [
          e('我是去年来中国的，起初我不习惯中国的生活，后来慢慢适应了。', 'Tôi đến Trung Quốc từ năm ngoái, ban đầu chưa quen, sau dần thích nghi.'),
          e('今天我很忙，以后再去你家玩儿吧。', 'Hôm nay tôi rất bận, sau này lại đến nhà bạn chơi.'),
          e('等我回国以后一定去看望他。', 'Sau khi về nước tôi nhất định đến thăm anh.'),
        ] },
        { formula: '(一)……便/就……  ;  (刚)……就……', title: 'Hai động tác nối ngay nhau', note: 'Có điều kiện trước thì nhất định xuất hiện việc sau; hoặc hai động tác nối rất sát.', examples: [
          e('他要什么，父母就给什么。', 'Anh muốn gì, bố mẹ cho nấy.'),
          e('我的身体不太好，天气一变化，便容易生病。', 'Sức khỏe tôi không tốt, trời vừa đổi là dễ bệnh.'),
          e('她一听到这个消息，便大哭起来。', 'Cô vừa nghe tin này liền khóc òa.'),
        ] },
        { formula: '……，于是……', title: '……，于是……', note: '"于是" gồm hai nghĩa: "所以" và "然后". Vì A nên B xảy ra ngay sau.', examples: [
          e('小王忘了报名的地点，于是跑到学校打听了一下。', 'Tiểu Vương quên chỗ đăng ký, bèn chạy đến trường hỏi.'),
          e('现代社会竞争越来越激烈，于是许多人又回到了学校进修。', 'Xã hội hiện đại cạnh tranh ngày càng gay gắt, nên nhiều người lại quay về trường tu nghiệp.'),
        ] },
      ] }],
    },
    {
      id: 'xuanze', hanzi: '选择复句', pinyin: 'xuǎnzé fùjù', title: 'Câu phức lựa chọn',
      intro: 'Các phân câu nêu nhiều tình huống để chọn lấy một.',
      groups: [{ patterns: [
        { formula: '是……还是……  ;  或者……或者……  ;  不是……就是……', title: 'Ba loại cơ bản', note: '是……还是……: chọn một trong hai, dùng được trong câu hỏi. 或者……或者……: liệt kê các khả năng, chỉ dùng câu trần thuật. 不是……就是……: chỉ có hai khả năng.', examples: [
          e('这次去广州你是坐飞机，还是坐火车？', 'Lần này đi Quảng Châu bạn đi máy bay hay tàu?'),
          e('我们是早上出发，还是下午出发？', 'Chúng ta xuất phát sáng hay chiều?'),
          e('我周末不是睡懒觉，就是找朋友，不是看电视，反正不学习了。', 'Cuối tuần tôi hoặc ngủ nướng, hoặc tìm bạn, hoặc xem TV, dù sao cũng không học.'),
          e('办公室就方方和刘明的电话多，只要电话铃一响，不是找方方就是找刘明。', 'Trong văn phòng chỉ Phương Phương và Lưu Minh hay có điện thoại, chuông reo là hoặc tìm Phương Phương hoặc tìm Lưu Minh.'),
        ] },
        { formula: '要么……要么……  /  要不……要不……  /  ……也好，……也好', title: '要么……要么……', note: 'Thường dùng đưa đề nghị, cung cấp lựa chọn; còn đi với "反正/总之/无论如何". "……也好，……也好": hai lựa chọn không ảnh hưởng kết quả.', examples: [
          e('要么我去，要么你去，反正得有人去。', 'Hoặc tôi đi hoặc bạn đi, dù sao phải có người đi.'),
          e('下雨也好，刮风也好，总之得去上课。', 'Mưa cũng được, gió cũng được, tóm lại phải đi học.'),
          e('你听也好，不听也好，反正这个意见我得提。', 'Bạn nghe hay không nghe, dù sao ý kiến này tôi cũng phải nêu.'),
        ] },
        { formula: '宁可/宁愿/宁肯……也不/决不……  ;  宁可……也要……', title: 'Chọn sau khi so sánh', note: '宁可……也不: vế trước là tình huống không tốt, vế sau là điều hoàn toàn không muốn, so sánh xong chọn vế trước. 宁可……也要: vế sau là mục đích; vế trước là điều không tốt để đạt mục đích.', examples: [
          e('我宁可骑自行车去，也不挤公共汽车。', 'Tôi thà đi xe đạp chứ không chen xe buýt.'),
          e('我宁可一夜不睡，也要看完这本书。', 'Tôi thà thức trắng đêm cũng phải đọc xong cuốn sách.'),
        ] },
        { formula: '与其……(倒)不如……  ;  与其说……不如说……', title: '与其……不如……', note: 'A và B so sánh, B tốt hơn nên chọn B. "与其说……不如说……": hai cách nói, B chính xác hơn.', examples: [
          e('与其在屋里闷着，不如出去散散步。', 'Thay vì ở trong phòng ngột ngạt, chi bằng ra ngoài đi dạo.'),
          e('他对她的感情，与其说是爱，倒不如说是感激。', 'Tình cảm của anh với cô, nói là yêu chi bằng nói là biết ơn.'),
        ] },
      ] }],
    },
    {
      id: 'zhuanzhe', hanzi: '转折复句', pinyin: 'zhuǎnzhé fùjù', title: 'Câu phức chuyển ngoặt',
      intro: 'Các phân câu nêu sự việc không nhất quán, trái ngược hay đối lập nhau. Chú ý vị trí chủ ngữ: 可是/但是/然而/而 + chủ ngữ + 却/则…',
      groups: [{ patterns: [
        { formula: '虽然……，但是/可是……  ;  尽管……，但是/然而……却……  ;  ……，而……则/却……', title: 'Chuyển ngoặt nặng', note: 'Vế trước và vế sau hoàn toàn trái nhau.', examples: [
          e('这篇课文虽然不长，可是生词不少。', 'Bài khóa này tuy không dài nhưng nhiều từ mới.'),
          e('他不喜欢踢足球，可他喜欢看足球比赛。', 'Anh không thích đá bóng, nhưng thích xem bóng đá.'),
          e('别看他年龄小，能力倒很强。', 'Đừng thấy anh tuổi nhỏ, năng lực lại rất mạnh.'),
          e('听口音他像北京人，其实他是广东人。', 'Nghe giọng anh như người Bắc Kinh, thật ra anh là người Quảng Đông.'),
          e('在中国南北方差别很大，一般北方人比较豪爽，而南方人则比较温婉细腻。', 'Ở Trung Quốc Nam Bắc khác nhau nhiều, người Bắc thường hào sảng, còn người Nam thì dịu dàng tinh tế.'),
        ] },
        { formula: '不是……而是……', title: '不是……而是……', note: 'Phủ định vế trước, khẳng định vế sau. Hình thức: 不是A而是B; 不……而/就……; 不是A就是B (khác nghĩa).', examples: [
          e('老师叫你去办公室不是批评你，而是表扬你。', 'Thầy gọi bạn đến văn phòng không phải để phê bình mà để khen.'),
          e('我不是日本人，而是韩国人。', 'Tôi không phải người Nhật mà là người Hàn.'),
        ] },
        { formula: '……，反而/反倒……', title: '反而 / 反倒', note: 'Vế trước là sự thật khách quan, vế sau là điều không ngờ, bất thường. "反而/反倒" là phó từ, đặt sau chủ ngữ.', examples: [
          e('他年纪大了，身体反而更好了。', 'Ông tuổi cao rồi mà sức khỏe lại tốt hơn.'),
          e('秋天到了，天气反而更热了。', 'Thu đến rồi mà trời lại nóng hơn.'),
        ] },
        { formula: '……，倒(是)……  ;  ……，不过/就是/只是……', title: '倒(是) · 不过 · 就是', note: 'Chuyển ngoặt nhẹ. Hai vế cùng chủ ngữ thì "倒(是)" đặt sau chủ ngữ; hai vế khác chủ ngữ thì "倒(是)" đặt trước chủ ngữ thứ hai.', examples: [
          e('我性格比较内向，不喜欢唱歌，(我)倒喜欢听歌。', 'Tôi khá hướng nội, không thích hát, ngược lại thích nghe nhạc.', 'Một chủ ngữ.'),
          e('我们没什么意见，倒是小张好像不太满意。', 'Chúng tôi không có ý kiến, ngược lại Tiểu Trương hình như không hài lòng lắm.', 'Hai chủ ngữ.'),
          e('这东西好是好，不过贵了点儿。', 'Cái này tốt thì tốt, nhưng đắt chút.'),
          e('今天天气是挺晴朗，就是有点儿风。', 'Hôm nay trời quả rất nắng, chỉ hơi có gió.'),
        ] },
        { formula: '尽管……，但是/可是/然而……还是/也……  ;  固然……，但是……也……', title: 'Nhượng bộ rồi chuyển', note: 'Vế trước thừa nhận một sự thật, vế sau nêu ý kiến trái ngược.', examples: [
          e('尽管他不接受我的意见，但是我有意见还是要向他提。', 'Dù anh không nhận ý kiến của tôi, tôi có ý kiến vẫn phải nói với anh.'),
          e('学习固然重要，但是身体也一定要保重啊。', 'Học tập đúng là quan trọng, nhưng cũng nhất định phải giữ gìn sức khỏe.'),
        ] },
      ] }],
    },
  ],

  boards: [
    {
      id: 'bl-board', hanzi: '并列复句', title: 'Câu đẳng lập',
      rows: [
        { label: '1', text: '一边……一边……: nối động tác cụ thể. 一面……一面……: nối động tác cụ thể hoặc trừu tượng. 一方面……(另)一方面……: nối hai mặt của tình huống, nguyên nhân, mục đích. Ba loại này không thể thay nhau.', examples: [e('我们一边走一边聊，很快就到了学校。', 'Chúng tôi vừa đi vừa trò chuyện, chẳng mấy đã tới trường.'), e('中国一面发展经济，一面提高人民的精神生活水平。', 'Trung Quốc vừa phát triển kinh tế vừa nâng cao đời sống tinh thần nhân dân.'), e('我来中国一方面学习汉语，(另)一方面找工作。', 'Tôi đến Trung Quốc một mặt học tiếng Hán, một mặt tìm việc.')] },
        { label: '2', text: '既A又(也)B: A, B có thể là tính từ, danh từ trừu tượng, động từ năng nguyện, động từ phán đoán (是/有). 又A又B: ① tương đương "既A又B". ② A, B là động tác cụ thể, nhiều động tác. 主₁也A，主₂也B: có thể hai chủ ngữ.', examples: [e('她既是我的姐姐，又是我的好朋友。', 'Cô vừa là chị tôi vừa là bạn tốt.'), e('他又会说汉语又会说英语。', 'Anh vừa nói được tiếng Hán vừa nói được tiếng Anh.'), e('今天去也行，明天去也行。', 'Hôm nay đi cũng được, mai đi cũng được.')], ps: 'A, B phải là hai phần đẳng lập; chỉ trong biểu đạt tâm lý, A và B mới có thể ngược nhau: 我心里又高兴又有点紧张。' },
      ],
    },
    {
      id: 'dj-board', hanzi: '递进复句', title: 'Câu tăng tiến',
      rows: [
        { label: 'Điểm thi 1', text: 'A, B tương tự về ngữ pháp và ngữ nghĩa. "不但……而且(也/还)……" ≈ "不仅/不光……而且……". Chủ ngữ: một chủ ngữ thì "不但" sau chủ ngữ; hai chủ ngữ thì "不但" trước chủ ngữ.', examples: [e('这间教室不但宽敞，而且干净。', 'Phòng học này không chỉ rộng mà còn sạch.'), e('练瑜伽不但可以强身健体，而且还可以陶冶性情。', 'Tập yoga không chỉ rèn thể lực mà còn rèn tính tình.'), e('不但我知道这件事，而且他也知道。', 'Không chỉ tôi biết chuyện này mà anh cũng biết.')], points: [{ text: 'Điểm thi: "不但" đặt sai vị trí so với chủ ngữ.', fixes: [{ wrong: '不但人们注重单体建筑的质量，还关注小区的绿化环境', right: '人们不但注重单体建筑的质量，还关注小区的绿化环境', ref: 'Kiểm tra 1 · B' }, { wrong: '他家里总是那么安静舒适，虽说面积显得小点儿，反而收拾得一尘不染', right: '虽说面积显得小点儿，却(/不过)收拾得一尘不染', ref: 'Kiểm tra 2 · D' }] }] },
        { label: 'Điểm thi 2', text: '"不但" có thể lược, thành "……而且(也/还)……", khi đó A, B thường là tính từ hoặc câu. "而且" tương đương "而/并且/且" khi A, B nghĩa gần nhau; khi A, B nghĩa trái nhau, chỉ dùng "而", nghĩa "但是/却".', examples: [e('他聪明而且能干。', 'Anh thông minh và giỏi giang.'), e('这件事费力大而收效小。', 'Việc này tốn nhiều sức mà hiệu quả nhỏ.'), e('中国南北方差异很大，南方气候温暖湿润，而北方气候寒冷干燥。', 'Nam Bắc Trung Quốc khác nhau nhiều, miền Nam ấm ẩm, còn miền Bắc lạnh khô.')], points: [{ text: 'Điểm thi: "势在必行" và "迫在眉睫" cùng nghĩa, không thể dùng "而".', fixes: [{ wrong: '手机实名制不但势在必行，而迫在眉睫', right: '手机实名制不但势在必行，而且迫在眉睫', ref: 'Kiểm tra 5 · D' }] }] },
        { label: 'Điểm thi 3', text: '不但不/没……反而/反倒……: vế trước là điều nên làm, vế sau là điều không nên / bất thường. Không phải chuyển ngoặt mà là tăng tiến, nhấn mạnh "不A, 没A".', examples: [e('春天到了，天气不但不暖和，反而更冷了。', 'Xuân đến rồi mà trời không ấm lại lạnh hơn.'), e('吃了药以后，我的感冒不但没有好转，反而加重了。', 'Uống thuốc xong, cảm của tôi không đỡ mà nặng hơn.')] },
        { label: 'Điểm thi 4', text: 'A……，何况/况且 B……也/又/还…… = "A，再说 B" (hai nguyên nhân). Dạng "……尚且……，(更)何况……": = 别说 B, 连 A 也/都……; = B, 甚至(连) A 也/都……', examples: [e('今天下午我不出去了，有很多作业要做，况且外边风又那么大。', 'Chiều nay tôi không ra ngoài, có nhiều bài tập, hơn nữa gió lại lớn.'), e('上海话和普通话差异很大，一些中国人尚且听不懂，更何况我这个外国人呢。', 'Tiếng Thượng Hải khác tiếng phổ thông nhiều, người Trung Quốc còn không hiểu, huống hồ tôi là người nước ngoài.')], points: [{ text: 'Điểm thi: "成人学习也不能排除必要的博闻强记，何况小孩儿" — cần "连……也……", sau đó mới "何况".', fixes: [{ wrong: '并且成人学习也不能排除必要的博闻强记，何况小孩儿', right: '并且连成人学习也不能排除必要的博闻强记，何况小孩儿', ref: 'Kiểm tra 6 · D' }] }] },
        { label: 'Điểm thi 5: 尤其 và 甚至', text: 'A……，尤其(是) a₁……: a₁ là một phần của A. A……，甚至 B……: B là mặt khác với A. "尤其是" = "特别是", chỉ phần đặc biệt trong tổng thể; "甚至" chỉ mặt khác với cái trước.', examples: [e('这个电影大家都喜欢，尤其是孩子。', 'Phim này ai cũng thích, đặc biệt là trẻ con.'), e('这个电影我很喜欢，甚至平时不爱看电影的他也很喜欢。', 'Phim này tôi rất thích, thậm chí cả anh ấy vốn không thích xem phim cũng thích.')], points: [{ text: 'Điểm thi: "拿不出房款的首付" và "养老" là hai mặt khác nhau, nên dùng "甚至".', fixes: [{ wrong: '父母不仅拿不出房款的首付，尤其连养老都成问题', right: '父母不仅拿不出房款的首付，甚至连养老都成问题', ref: 'Kiểm tra 3 · D' }] }] },
      ],
    },
    {
      id: 'cj-board', hanzi: '承接复句', title: 'Câu nối tiếp',
      rows: [
        { label: '1', text: '(首)先……然后……再/又……: 再 = chưa làm; 又 = đã làm. 首先 đặt trước hay sau chủ ngữ đều được; 先 phải sau chủ ngữ.', examples: [e('放学后，我们先做完作业，然后再去看电影吧。', 'Tan học ta làm xong bài rồi mới đi xem phim.'), e('上周末，我们先做完作业，然后又去看了一场电影。', 'Cuối tuần trước ta làm bài xong rồi lại đi xem phim.')] },
        { label: '2', text: '起初……，后来……: chỉ dùng cho việc quá khứ. 后来: chỉ kể việc quá khứ, không đứng sau động tác hay từ chỉ thời gian. 以后: quá khứ, hiện tại, tương lai đều dùng được.', examples: [e('他以前在政府部门工作，后来"下海"经商了。', 'Trước anh làm ở cơ quan nhà nước, sau "xuống biển" kinh doanh.'), e('今天我很忙，以后再去你家玩儿吧。', 'Hôm nay tôi bận, sau này lại tới nhà bạn chơi.')] },
        { label: '3. 于是', text: '……，于是……: chứa nghĩa "所以" và "然后". Vì A nên B xảy ra ngay sau.', examples: [e('他回答了第一个问题，然后回答第二个问题。', 'Anh trả lời câu thứ nhất, rồi trả lời câu thứ hai.', '然后'), e('他乐于助人，所以我们有困难常找他帮忙。', 'Anh vui giúp người nên khi có khó khăn chúng tôi hay nhờ anh.', '所以'), e('我男朋友喜欢上了一位漂亮的护士小姐，于是我们就分手了。', 'Bạn trai tôi phải lòng một cô y tá xinh đẹp, thế là chúng tôi chia tay.', '于是')] },
      ],
    },
    {
      id: 'xz-board', hanzi: '选择复句', title: 'Câu lựa chọn',
      rows: [
        { label: '1', text: '是……还是……: chọn một trong A và B. 或者……或者……: liệt kê các khả năng như A, B. 不是……就是……: chỉ A hoặc B.', examples: [e('我们应该商量一下，是明天出发，还是后天出发。', 'Ta nên bàn xem xuất phát ngày mai hay ngày kia.'), e('或者明天去，或者后天去，反正这件事得去解决。', 'Hoặc mai đi hoặc ngày kia đi, dù sao cũng phải đi giải quyết.'), e('我们班就数张华和李丽学习好，每次考试第一名不是张华就是李丽。', 'Lớp chúng tôi chỉ Trương Hoa và Lý Lệ học giỏi, mỗi lần thi nhất hoặc là Trương Hoa hoặc Lý Lệ.')] },
        { label: '2', text: '要么A，要么B / 要不A，要不B / ……也好，……也好: giả sử hai khả năng A, B, nhấn mạnh "phải/nhất định"; thường kèm "反正/总之/无论如何".', examples: [e('要么我去，要么你去，反正得有人去。', 'Hoặc tôi đi hoặc bạn đi, dù sao phải có người đi.')] },
        { label: '3', text: '宁可/宁愿/宁肯 A 也 B: 不 B: so sánh A và B rồi chọn A (dù A không tốt, nhưng B càng không tốt). 要 B: B là mục đích, để đạt B có thể chịu A.', examples: [e('我宁愿走路，也不坐公共汽车。', 'Tôi thà đi bộ chứ không đi xe buýt.'), e('我宁可一夜不睡，也要看完这本书。', 'Tôi thà thức đêm cũng phải đọc xong sách.')] },
        { label: '4', text: '与其……(倒)不如……: A và B so sánh, B tốt hơn nên chọn B. 与其说……不如说……: hai cách nói, B chính xác hơn.', examples: [e('与其在屋里闷着，不如出去散散步。', 'Thay vì ở trong phòng ngột ngạt, chi bằng ra ngoài đi dạo.'), e('他对她的感情，与其说是爱，倒不如说是感激。', 'Tình cảm của anh với cô nói là yêu chi bằng nói là biết ơn.')] },
      ],
    },
    {
      id: 'zz-board', hanzi: '转折复句', title: 'Câu chuyển ngoặt',
      rows: [
        { label: '1', text: '虽然……，可是/但是……却……  /  尽管……，可是/但是/然而……却……  /  ……，而……则/却……. Chú ý vị trí chủ ngữ: 可是/但是/然而/而 + chủ ngữ + 却/则…', examples: [e('我喜欢安静，而我的同屋则喜欢热闹。', 'Tôi thích yên tĩnh, còn bạn cùng phòng lại thích náo nhiệt.')], points: [{ text: 'Điểm thi: "却" là phó từ, đặt sau chủ ngữ.', fixes: [{ wrong: '但中国却首次承办世界小姐比赛没有引起中国公众的普遍关注', right: '但中国首次承办世界小姐比赛却没有引起中国公众的普遍关注', ref: 'Kiểm tra 4 · C' }] }] },
        { label: '2', text: '看起来/听起来/以为 A，其实/实际上 B: A là bề ngoài, B là sự thật.', examples: [e('他看起来像个大学生，其实他已经是工作多年的医生了。', 'Anh trông như sinh viên, thật ra là bác sĩ đã làm nhiều năm.')] },
        { label: '3. 不是……而是……', text: 'Phủ định A, khẳng định B. Dạng: 不是A而是B. 不……而/就……. 不是A就是B: A hoặc B.', examples: [e('我不是日本人，而是韩国人。', 'Tôi không phải người Nhật mà là người Hàn.'), e('他不是日本人，就是中国人，反正不是韩国人。', 'Anh hoặc là người Nhật hoặc là người Trung Quốc, dù sao không phải người Hàn.')] },
        { label: '4. 倒(是)', text: '倒(是): một chủ ngữ thì đặt sau chủ ngữ; hai chủ ngữ khác nhau thì đặt trước chủ ngữ thứ hai. 不过/就是: chuyển ngoặt nhẹ.', examples: [e('这件衣服便宜倒是便宜，就是颜色不太好。', 'Bộ này rẻ thì rẻ, chỉ là màu không đẹp lắm.'), e('我们都听懂了，倒是小张满脸疑惑。', 'Chúng tôi đều hiểu, ngược lại Tiểu Trương mặt đầy nghi hoặc.')] },
        { label: '5. 固然', text: 'A 固然……，但是 B 也……: A và B tuy trái nhau nhưng ở một mặt nào đó thì như nhau.', examples: [e('学习努力固然好，但是适当休息也是必需的。', 'Học chăm chỉ đúng là tốt, nhưng nghỉ ngơi vừa phải cũng là cần thiết.')] },
        { label: '6. 反而/反倒', text: 'A……，反而/反倒 B……: A là sự thật khách quan, B là điều bất thường, không ngờ.', examples: [e('不想记住的事，反倒记得很清楚。', 'Chuyện không muốn nhớ lại nhớ rất rõ.')], points: [{ text: 'Điểm thi: B là tình huống đặc biệt, không dùng "虽然/虽说" ở A.', fixes: [{ wrong: '虽说面积显得小点儿，反而收拾得一尘不染', right: '虽说面积显得小点儿，却/不过收拾得一尘不染', ref: 'Kiểm tra 2 · D' }] }] },
      ],
    },
  ],

  test: [
    seg(['随着环保意识不断增强，', '不但人们注重单体建筑的质量，', '还关注小区的绿化环境和空气质量，', '由于居室空气污染导致的法律纠纷屡见于报端。'], 1, 'Vị trí chủ ngữ của 不但',
      '人们不但注重单体建筑的质量，还关注……', 'Hai vế cùng một chủ ngữ "人们", "不但" phải đặt sau chủ ngữ.'),
    seg(['他家里总是那么安静舒适，', '一套两居室的房间，', '虽说面积显得小点儿，', '反而收拾得一尘不染、井井有条。'], 3, 'Chuyển ngoặt hay "反而"',
      '虽说面积显得小点儿，却(/不过)收拾得一尘不染', '"反而" biểu thị tình huống đặc biệt, bất thường; câu này chỉ là chuyển ngoặt nhẹ nên dùng "却/不过".'),
    seg(['有些参加工作好几年的人告诉我，', '他们的家庭不是很富裕，', '父母不仅拿不出房款的首付，', '尤其连养老都成问题。'], 3, '尤其 và 甚至',
      '甚至连养老都成问题', '"拿不出首付" và "养老" là hai mặt khác nhau, phải dùng "甚至".'),
    seg(['虽然追求时尚已在中国大城市的年轻人，', '尤其在女性中成为潮流，', '但中国却首次承办世界小姐比赛', '没有引起中国公众的普遍关注，甚至一些受过良好教育的城市女性也不知道此事。'], 2, 'Vị trí của 却',
      '但中国首次承办世界小姐比赛却没有引起……', '"却" là phó từ, phải đặt sau chủ ngữ ("中国首次承办世界小姐比赛").'),
    seg(['如今，利用手机短信诈骗、骚扰、发布广告等行为比较猖獗，', '垃圾短信泛滥已经威胁到公众利益及社会安全，', '手机实名制不但势在必行，', '而迫在眉睫。'], 3, 'Quan hệ cùng nghĩa',
      '而且迫在眉睫', '"势在必行" và "迫在眉睫" nghĩa gần nhau, dùng "而且", không dùng "而".'),
    seg(['中国传统的育儿之道认为，', '教婴幼儿唱儿歌、背古诗并不需要逐字逐句地给他们解释清楚，', '机械记忆是最好的学习方法，', '并且成人学习也不能排除必要的博闻强记，何况小孩儿。'], 3, '何况 cần "连"',
      '并且连成人学习也不能排除必要的博闻强记，何况小孩儿', '"何况" nghĩa "连……都……", phía trước cần nêu "连成人……也……".'),
  ],

  exam: [
    sen(['坚毅的人遇到困难，不是绕着困难走，而是迎着困难上。', '实际上，世上没有绝望的处境，只有对处境绝望的人。', '这是我同事小李的女儿，不仅年纪小，而且非常懂事。', '阴阳历和二十四节气不仅列于中国历法中，而且还相互关联。'], 2, 'Quan hệ chuyển ngoặt',
      '这是我同事小李的女儿，虽然年纪小，但是非常懂事', '"年纪小" và "懂事" tương phản, phải là chuyển ngoặt, không dùng "不仅……而且".'),
    sen(['成功很容易让人骄傲，而骄傲又会让人失去方向。', '人生最精彩的不是实现梦想的瞬间，而是坚持梦想的过程。', '不但《易经》文化不是迷信，而且是这个百年品牌得以立足的基石。', '世界各国的国徽五花八门，设计寓意深刻，往往还有许多有趣的故事。'], 2, 'Vị trí 不但',
      '《易经》文化不但不是迷信，而且是……', 'Một chủ ngữ nên "不但" phải đặt sau chủ ngữ.'),
    sen(['积极的人在忧患中看到机会，而消极的人则在机会中看到忧患。', '蘑菇中有丰富的营养成分，而且热量很低，常吃也不会发胖。', '人们追逐时尚，不是因为它符合自己的气质，而只是因为大家都是如此。', '互联网的应用给我们的生活带来了巨大的变化，这些变化既有正面的也有负面的。'], 3, 'Đối ứng hai vế đẳng lập',
      '这些变化既有正面的也有负面的', 'Sách chỉ ra lỗi nằm ở hai vế đẳng lập không đối ứng: phải là "既有正面的，也有负面的".'),
    sen(['普通人只想到如何度过时间，而有才能的人则设法利用时间。', '这件衣服的样子不太好看，而是颜色不好。', '他是那种比较理性的人，性格虽然外向，但交友却极为谨慎。', '人们的幸福与其说来自偶尔发生的鸿运，不如说来自每天都有的小收获。'], 1, 'Vị trí chủ ngữ của 不是……而是……',
      '这件衣服不是样子不好看，而是颜色不好', 'Hai vế có chủ ngữ nhỏ khác nhau (样子 / 颜色); phải là "不是样子不好看，而是颜色不好".'),
    sen(['人所缺乏的不是才干而是志向，不是成功的能力而是勤劳的意志。', '她这个人性格内向，爱学习、喜独处，在北京上研究生的三年中，连一次都没去过故宫。', '我家就在海边，小时候，父亲常常带着我到海边散步，一边走一边给我讲故事。', '近年来，高科技电子产品不断普及，而且价格越来越便宜，更加适合大众消费群体。'], 1, 'Cấu trúc 连……都……',
      '连一次故宫都没去过', 'Cấu trúc đúng là "连 + số lượng từ + danh từ + 都/也 + động từ".'),
    sen(['专家指出，很多所谓的防醉方法不但对身体危害极大，而且不能防醉解酒。', '工作是一种乐趣时，生活是一种享受；工作是一种义务时，生活则是一种苦役。', '真诚不意味着一定要指责别人的缺点，但意味着一定不恭维别人的缺点。', '地震是引起海啸的主要原因，但并不是所有地震都会引起海啸。'], 0, 'Logic tăng tiến',
      '不但不能防醉解酒，而且对身体危害极大', 'Trong "不但……而且……" phải đi từ nhẹ đến nặng; hai vế không thể đổi chỗ.'),
    sen(['倾听别人谈话，对我来说是获得某种知识、经验和思想启迪的机会。', '树木年轮宽，说明当年气候温暖湿润，树木年轮窄，说明当年气候寒冷干旱。', '一个自由的人除了从书本上获取知识外，还可以从许多别的来源获得知识。', '一个人是否健康应该用两个标准去衡量：一个是身体健康和一个是心理健康。'], 3, 'Liên từ 和 trong hai vế',
      '一个是身体健康，(另)一个是心理健康', 'Biểu thị quan hệ đẳng lập giữa hai tiểu câu không dùng "和".'),
    sen(['坏人从我们身上偷走的最宝贵的东西，并不是金钱，而是信任，因此我们大家都互相猜疑。', '赛后我没有上网看大家对我的评价，我不是想封闭自己，反而觉得这块金牌已经成为历史，我要面对的是新的挑战。', '对刚刚毕业的大学生来说，想要成功创业，重要的是提升自主创业的综合实力，光有决心是不够的。', '在人的一生中，可以有所作为的时候只有一次。那就是现在，然而，许多人却在悔恨过去和担忧未来之中浪费了大好时光。'], 1, 'Đáp ứng cặp liên từ',
      '我不是想封闭自己，而是觉得这块金牌已经成为历史', 'Cặp liên từ sai: phải là "不是……而是……".'),
    sen(['解决人口问题应该进行宏观调控，否则不但不能使矛盾有所缓解，因而使问题更加复杂化。', '不是每个付出努力的人都能够成功，但是每个成功的人都必须付出艰辛的努力。', '青少年时代的磨砺，使他养成了在艰苦条件下坚持不懈、勇往直前的优秀品质。', '我们知道72小时的"黄金救援时间"，但我们宁愿相信超过72小时的等待和坚持，相信生命的顽强毅力。'], 0, 'Cặp liên từ',
      '不但不能使矛盾有所缓解，反而使问题更加复杂化', 'Phải dùng "不但……反而……" để biểu thị tương phản bất thường.'),
    sen(['黄河不但以"地上悬河"闻名世界，而且还是输沙量最大的河流。', '在动物界，往往是强者为王，尤其在婚配问题上，更是强者得婚，弱者孤单。', '古希腊哲学家柏拉图这样阐述教育的意义：与其不受教育，不如不生，因为无知是不幸的根源。', '中国要用世界上9%左右的耕地解决世界上20%左右人口的粮食问题，因此中国政府一贯高度重视农业甚至是粮食问题。'], 3, '甚至',
      '重视农业尤其是粮食问题', '"粮食问题" và "农业" có quan hệ bao hàm, nên dùng "尤其是" thay "甚至".'),
    sen(['近年来日渐风靡的素食主义不仅是一种健康的饮食选择，而且也代表了崇尚自然、尊重生命的生活理念。', '东边时刻与西边时刻的差值，不仅要以小时来计算，而且还要以分和秒来计算，这给人们的日常生活和工作都带来许多不便。', '近年来出国留学的高中生尤其是初中生越来越多，这表明中国学生选择教育的范围扩大了，但留学低龄化也暴露出一些问题，其中有些问题已经到了必须解决的地步。', '自由职业带来的"自由"是相对的，自由职业者虽然可以自主选择工作内容、方式等，却不等于可以随心所欲。'], 2, '尤其 phải cùng phạm vi',
      '近年来出国留学的中学生尤其是初中生越来越多', '"高中生" không bao hàm "初中生"; phải là "中学生".'),
    sen(['在现代社会，衡量人才的标准不仅是知识的储备，更重要的是创新的能力。', '生活并不会使每个人称心如意，但人生的意义不仅仅在于要获得成功，更多的是要享受一路走来的点点滴滴。', '景泰蓝是"燕京八绝"之一，由于它的釉料颜色以蓝色为主，并且最初兴盛于元景泰年间，故称为景泰蓝。', '大学毕业生就业难，一方面学校应改变教育模式，另一方面大学毕业生也要放低就业标准也是非常重要的，两者缺一不可。'], 3, '一方面……另一方面……',
      '另一方面大学毕业生也要放低就业标准', 'Cấu trúc "一方面……另一方面……" đã nêu hai mặt đều quan trọng, nên bỏ "也是非常重要的".'),
    sen(['有人认为，与其让老人在家呆着不如让他去养老院，跟其他老人聊聊天、下下棋，还有专人照顾。', '神话故事里把龙王住在海底居住的宫殿称为"水晶宫"，实际上，水晶不是生在水下龙宫，而是生于山上的岩洞中。', '秋天是干燥而凉爽的季节，温度变化明显，午后升温快，却早晚很凉。容易罹患呼吸道感染性疾病、水痘和秋季腹泻等。', '家庭是人生的摇篮，这句话不仅是指家庭是一个人出生、成长的地方，同时也意味着家庭是一个人思想、道德和价值观形成的起点。'], 2, 'Vị trí của 却',
      '午后升温快，早晚却很凉', '"却" là phó từ nên phải đặt sau chủ ngữ "早晚".'),
    sen(['利用风能，不会产生任何污染物质，有利于生态平衡和环境保护，而且投资少、见效快、价格低廉。', '亚马孙河之所以成为地球上鱼类最重要的基因库，一方面缘于它得天独厚的自然地理条件，一方面是由于人类主动保持与它的距离。', '最近几年，在城市建设的热潮中，一些地方出现了"种草"与"种树"的辩论，其实种树也好，种草也罢，不能一概而论，要因地制宜。', '作为管理者，我宁愿让下属偶尔犯错误，然后大家一起总结。如果一个组织里什么事都由我来推动，肯定会有问题。'], 2, '其实 / 实际上',
      '实际上种树也好，种草也罢', '"其实" biểu thị chuyển ngoặt; ở đây nên dùng "实际上/事实上".'),
    sen(['"好事要往坏处想，坏事要往好处想"，这样既看到了光明的一面，又看到了隐藏的危险，使我们永远保持良好的心态。', '实践表明，一个国家森林的覆盖率达到全国总面积的30%以上，或者分布均匀时，就不会发生较大的风沙旱涝等自然灾害。', '尽管气候严寒，南极大陆并不是一个死寂的世界。天上有信天翁在翱翔，海域中繁殖着藻类和浮游生物，海滩和浮冰上还有海豹、海象和企鹅活动。', '他们可以没地位，但他们有希望；他们可以不被理解，但他们有独立的人格；他们可以没有一切，但他们不可以没有艺术相伴。'], 1, '或者 / 并且',
      '覆盖率达到全国总面积的30%以上，并且分布均匀时', '这里两个条件同样重要，不能用"或者"表示选择，应用"并且/而且".'),
  ],
}
