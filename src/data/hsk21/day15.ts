import type { DayContent, Ex, ErrQ } from './types'

/**
 * Tuần 3 · Thứ Sáu: Thiếu thành phần câu, thiếu vế đẳng lập, kết hợp sai (句子成分残缺 并列缺省 搭配不当), sách trang 265–279.
 * Phần dịch tiếng Việt do app tự thêm.
 */

const e = (h: string, vi: string, note?: string, tag?: string): Ex => ({ h, vi, note, tag })
const seg = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'segment', parts, answer, topic, fix, why })
const sen = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'sentence', parts, answer, topic, fix, why })

export const day15: DayContent = {
  intro:
    'Hôm nay là ngày cuối cùng. Thầy chủ yếu giảng bằng bảng ghi nhớ: hãy theo mạch tổng kết của thầy và xem kỹ phần "điểm chốt". Học xong, bạn chắc chắn sẽ thu hoạch được nhiều. Ba nhóm lỗi lớn của đề HSK mới: câu thiếu thành phần, câu thiếu phần đẳng lập, và kết hợp từ không phù hợp. Tư duy cốt lõi: luôn tìm chủ ngữ, vị ngữ, tân ngữ trước, rồi kiểm tra từng chỗ khác.',

  focusTitle: 'Ba nhóm lỗi hôm nay',

  anatomyTitle: 'Tìm trục câu: ai làm gì?',
  anatomyLead: 'Trục câu là chủ ngữ, vị ngữ, tân ngữ; định ngữ, trạng ngữ, bổ ngữ là phần bám vào. Gạch dưới trục câu rồi mới xét các phần còn lại.',
  anatomy: [
    { label: 'Câu cơ bản', chunks: [['我', '主'], ['喜欢', '谓'], ['中国', '宾']] },
    { label: 'Câu dài, tìm trục', chunks: [['来中国两年多的', '定'], ['我', '主'], ['已经', '状'], ['深深地', '状'], ['喜欢', '谓'], ['上', '补'], ['可爱的', '定'], ['中国', '宾']] },
    { label: 'Tân ngữ đưa lên đầu', chunks: [['他的护照', '主'], ['他', '主'], ['没有找到', '谓']] },
  ],

  cheat: {
    title: 'Bảng tra nhanh: ba nhóm lỗi',
    lead: 'Quy trình làm đề: (1) tìm chủ ngữ, vị ngữ, tân ngữ; (2) kiểm tra từng cặp có hợp nghĩa không; (3) kiểm tra liên từ, giới từ; (4) xem có thừa hay thiếu.',
    head: ['Nhóm lỗi', 'Biểu hiện', 'Ví dụ sai → sửa'],
    rows: [
      { key: 'Thiếu thành phần', cells: ['Thiếu chủ ngữ (khi đổi chủ ngữ), vị ngữ, tân ngữ trung tâm, giới từ', '他一直把她当作自己的附属物 → …的附属物'] },
      { key: 'Thừa thành phần', cells: ['Trùng chủ ngữ, vị ngữ, tân ngữ, định/trạng/bổ ngữ, liên từ', '最好的方法措施 → 最好的方法'] },
      { key: 'Thiếu phần đẳng lập', cells: ['Hai vế nối bằng 和/与/及/并且 mà một vế không hợp với động từ hoặc giới từ phía trước', '拿起包和推车里的婴儿 → 拿起包和推着车里的婴儿'] },
      { key: 'Kết hợp sai', cells: ['Chủ-vị, động-tân, định-trung tâm ngữ, trạng-trung tâm ngữ, liên từ không đi cặp', '回响在我的耳边 (trừu tượng)'] },
    ],
  },

  sections: [
    {
      id: 'chengfen', hanzi: '句子成分残缺', pinyin: 'jùzi chéngfèn cánquē', title: 'Câu thiếu thành phần', intro: 'Trước hết nắm cấu trúc câu tiếng Hán, rồi mới xem lỗi thường gặp.',
      groups: [
        { title: '1. Cấu trúc câu', patterns: [
          { formula: '(定)主 + (状)谓 + (补) + (定)宾', title: 'Cấu trúc cơ bản', note: 'Chủ ngữ, vị ngữ, tân ngữ là trục; định ngữ, trạng ngữ, bổ ngữ bám vào. Câu chủ-vị đơn giản: 今天天气很好 (主 + 主谓). Tân ngữ đưa lên đầu thành chủ ngữ: 他的护照他没有找到.', examples: [
            e('我喜欢中国。', 'Tôi thích Trung Quốc.', 'Chủ - vị - tân.'),
            e('来中国两年多的我已经深深地喜欢上了可爱的中国。', 'Tôi đã đến Trung Quốc hơn hai năm đã yêu sâu sắc đất nước Trung Quốc đáng yêu.'),
            e('他的护照他没有找到。 / 昨天的语法讲座你听了吗？', 'Hộ chiếu của anh anh chưa tìm thấy. / Bài giảng ngữ pháp hôm qua bạn nghe chưa?', 'Tân ngữ đưa lên đầu.'),
            e('他对这件事很满意。 / 我跟朋友见面了。 / 她的话使我感动。', 'Anh rất hài lòng việc này. / Tôi gặp bạn. / Lời cô làm tôi cảm động.', 'Giới + tân + vị.'),
          ] },
        ] },
        { title: '2. Các lỗi thường gặp trong đề', patterns: [
          { formula: 'Điểm thi 1: 语序不当', title: 'Thứ tự từ sai', note: 'Thứ tự tiếng Hán là chủ - vị - tân. Đề hay đảo thứ tự theo thói quen tiếng mẹ đẻ. Lỗi thường: đảo chủ ngữ và tân ngữ, định ngữ - trạng ngữ lẫn lộn, nhiều định ngữ sai thứ tự, thứ tự các từ liên kết, vị trí liên từ.', examples: [
            e('张艺谋导演的电影对许多喜爱中国文化的外国人并不陌生。(sửa: 许多喜爱中国文化的外国人对张艺谋导演的电影并不陌生。)', 'Phim của đạo diễn Trương Nghệ Mưu không còn xa lạ với nhiều người nước ngoài yêu văn hóa Trung Quốc.', 'Tân ngữ và chủ ngữ đảo.'),
            e('广大青年表现出无比的进行改革的热情。(sửa: 表现出无比的进行改革的热情 → 表现出进行改革的无比热情)', 'Đông đảo thanh niên biểu hiện nhiệt tình vô cùng đối với cải cách.', 'Định ngữ sai thứ tự.'),
            e('为了发挥自己的充分才能，他毅然决定回国。(sửa: 为了充分发挥自己的才能)', 'Để phát huy đầy đủ tài năng của mình, anh quyết định về nước.', '"充分" là trạng ngữ phải đứng trước động từ.'),
            e('华南农业大学兽医学院使用并研制了禽流感灭活油乳剂疫苗。(sửa: 研制并使用)', 'Học viện thú y Đại học Nông nghiệp Hoa Nam đã nghiên cứu chế tạo và sử dụng vắc xin cúm gia cầm.', 'Thứ tự động từ trước/sau sai.'),
            e('他如果不当面向我们解释清楚，那么我们只能诉诸法律。(sửa: 如果他不当面……)', 'Nếu anh không giải thích rõ trước mặt chúng tôi, chúng tôi đành đưa ra pháp luật.', 'Vị trí "如果" sai.'),
          ] },
          { formula: 'Điểm thi 2: 搭配不当', title: 'Kết hợp thành phần không hợp', note: 'Lỗi hay gặp: chủ-vị, động-tân, hoặc chủ-tân không hợp; thành phần phụ và trung tâm ngữ không hợp; liên từ không hợp. Phần lớn do quan hệ đẳng lập gây ra.', examples: [
            e('她那优美的舞姿、动听的歌声还回响在我的耳边。(×: 舞姿 không thể "回响")', 'Dáng múa duyên dáng, tiếng hát êm tai của cô còn vang bên tai tôi.', 'Chủ - vị không hợp; có thể bỏ "回响" hoặc thêm "还浮现在我的脑海中".'),
            e('李校长工作很忙，常常要接待许多学生家长的来访和来信。(×: 接待 không đi với 来信)', 'Hiệu trưởng Lý bận việc, thường phải tiếp nhiều phụ huynh đến thăm và thư từ.', 'Động - tân không hợp.'),
            e('深秋的岳麓山，是人们欣赏麓山红叶、登高远眺的好时候。(sửa: 好地方)', 'Núi Nhạc Lộc cuối thu là chỗ tốt để ngắm lá đỏ, lên cao ngắm xa.', 'Chủ - tân không hợp.'),
            e('同学们就学校的教育课程改革交换了广泛的意见。(sửa: 广泛地交换了意见)', 'Các bạn trao đổi rộng rãi ý kiến về cải cách chương trình giáo dục của trường.', 'Phụ và trung tâm ngữ không hợp.'),
            e('即便试验一直没有成功，但他一点儿也不气馁，继续坚持研究。(sửa: 虽然)', 'Tuy thí nghiệm mãi không thành công, anh không hề nản chí, tiếp tục nghiên cứu.', 'Liên từ không hợp.'),
          ] },
          { formula: 'Điểm thi 3: 用词不当', title: 'Dùng từ không thích hợp', note: 'Gốc rễ của lỗi nhiều khi là cách dùng từ: từ loại, từ nghĩa, khẳng định/phủ định, sắc thái cảm xúc không phù hợp.', examples: [
            e('她的画简洁明快，跳动着青春的气息，一直都是同学们所喜闻乐见的。(×: 画 không "喜闻")', 'Tranh của cô giản dị tươi sáng, rộn ràng hơi thở tuổi trẻ, luôn được bạn học yêu thích.', 'Dùng từ cố định không hợp.'),
            e('日本的"核泄漏事件"，充分展示了核发电的致命缺点。(sửa: 暴露)', 'Sự cố rò rỉ hạt nhân ở Nhật đã phơi bày khuyết điểm chí mạng của điện hạt nhân.', 'Sắc thái: "展示" nghĩa tốt, "暴露" nghĩa xấu.'),
            e('几年来，他无时无刻不忘搜集、整理民歌，积累了大量的资料。(sửa: 无时无刻不在)', 'Mấy năm nay anh lúc nào cũng sưu tầm, chỉnh lý dân ca, tích lũy nhiều tư liệu.', '"无时无刻不" + "忘" mâu thuẫn.'),
            e('我们严肃地研究了职工们的建议，又虚心地征求了专家们的意见。(sửa: 认真地研究)', 'Chúng tôi nghiêm túc nghiên cứu đề nghị của công nhân, lại khiêm tốn xin ý kiến chuyên gia.', '"严肃" không bổ nghĩa "研究".'),
          ] },
        ] },
        { title: '3. Thừa thành phần', patterns: [
          { formula: 'Thừa trung tâm ngữ / thừa định - trạng - bổ ngữ', title: 'Hai loại thừa', note: 'Trung tâm ngữ thừa: chủ ngữ, vị ngữ, tân ngữ lặp lại gây lộn xộn. Liên từ, trạng/định/bổ ngữ thừa: từ gần nghĩa hoặc bao hàm nhau đặt cạnh nhau, tạo thành "vẽ rắn thêm chân".', examples: [
            e('要想根除田野里的杂草，最好的方法措施就是在上面种庄稼。(sửa: bỏ một trong "方法/措施")', 'Muốn diệt tận gốc cỏ dại ngoài ruộng, cách tốt nhất là trồng hoa màu lên trên.', 'Chủ ngữ lặp.'),
            e('上海文艺出版社出版的《生存》，作者是一位蛰居海外二十多年的加拿大籍华裔作者之手。(sửa: 作者是……华裔)', 'Cuốn "Sinh tồn" do nhà xuất bản văn nghệ Thượng Hải ấn hành, tác giả là một người Canada gốc Hoa sống ở nước ngoài hơn hai mươi năm.', 'Tân ngữ thừa.'),
            e('同学们正在努力复习，迎接下个月的汉语水平考试到来。(sửa: bỏ "到来")', 'Các bạn đang cố ôn thi để đón kỳ thi HSK tháng sau.', 'Vị ngữ thừa: "迎接" đón "考试" không phải "到来".'),
            e('作文写好以后，我们要学会把不正确的错别字改正过来。(sửa: 错别字)', 'Viết xong bài, ta phải biết sửa chữ sai.', 'Định ngữ lặp: "错别字" đã là "不正确的".'),
            e('他看着手机里的这个短信不禁忍不住笑出声来。(sửa: bỏ một)', 'Anh nhìn tin nhắn trong điện thoại không nhịn được bật cười.', 'Trạng ngữ lặp.'),
            e('同学们把教室打扫得干干净净得一尘不染。(sửa: bỏ một)', 'Các bạn dọn lớp sạch sẽ không một hạt bụi.', 'Bổ ngữ lặp.'),
            e('在老师的鼓励下，使我信心倍增。(sửa: bỏ "使" hoặc "在……下")', 'Dưới sự khích lệ của thầy, tôi tăng thêm tự tin.', '"在……下" và "使" cùng chỉ điều kiện, nguyên nhân, thừa một.'),
            e('无论如何天气怎样变化多端，天池总是一片沉静，渺渺湖水，清澈碧绿。(sửa: bỏ "如何")', 'Dù thời tiết thay đổi thế nào, Thiên Trì vẫn tĩnh lặng, nước hồ xanh trong.', 'Liên từ "无论如何" và "怎样" lặp.'),
          ] },
          { formula: 'Câu tạp (句式杂糅)', title: 'Câu tạp: hai kiểu câu trộn vào nhau', note: 'Hợp nhiều cấu trúc làm một câu gây rối ý. Gồm: biểu đạt lộn xộn, logic rối, phạm vi không rõ; hoặc phân loại khái niệm sai.', examples: [
            e('他是多少个死难者中幸免的一个。(sửa: 多少人死难了，他是幸免的一个)', 'Anh là một trong những người sống sót giữa bao nhiêu nạn nhân.', '"幸免" là chưa chết, không thể nói "死难中".'),
            e('考场就设在一间古色古香的大厅里举行的。(sửa: 考场设在…… hoặc 考试就是在……举行的)', 'Phòng thi đặt trong một đại sảnh cổ kính.', 'Hai câu trộn.'),
            e('燕子、啄木鸟和青蛙等益鸟都是人类的好朋友。(sửa: bỏ 青蛙)', 'Én, chim gõ kiến … là những loài chim có ích, bạn của người.', '"青蛙" không phải chim.'),
          ] },
        ] },
        { title: '4. Thiếu thành phần', patterns: [
          { formula: 'Thiếu định ngữ / giới từ / vị ngữ / chủ ngữ', title: 'Bốn loại thiếu', note: '(1) Thiếu định ngữ trước tân ngữ: trung tâm ngữ thiếu. (2) Cụm giới - tân thiếu giới từ. (3) Thiếu vị ngữ: ngoại trừ tân ngữ đưa lên đầu, giữa chủ ngữ và tân ngữ phải có động từ hoặc giới từ. (4) Thiếu chủ ngữ: khi đổi chủ ngữ mà quên.', examples: [
            e('他从来不认为李真是个有思想、有主见。(sửa: 有主见的人)', 'Anh chưa bao giờ cho rằng Lý Chân là người có tư tưởng, có chủ kiến.', 'Thiếu trung tâm ngữ "人".'),
            e('他发了大财，北京最大的饭店请我们吃饭。(sửa: 他请我们在北京最大的饭店吃饭)', 'Anh phát tài, mời chúng tôi ăn ở khách sạn lớn nhất Bắc Kinh.', 'Thiếu giới từ "在".'),
            e('她的善良与热心深受感动。(sửa: 使我深受感动)', 'Lòng tốt và nhiệt tình của cô làm tôi cảm động sâu sắc.', 'Thiếu giới từ/động từ.'),
            e('上海一座很繁华的城市。(sửa: 上海是一座很繁华的城市)', 'Thượng Hải là một thành phố rất phồn hoa.', 'Thiếu vị ngữ "是".'),
            e('炎黄子孙世界160多个国家和地区。(sửa: 遍布世界160多个国家和地区)', 'Con cháu Viêm Hoàng có mặt ở hơn 160 nước và khu vực.', 'Thiếu vị ngữ.'),
            e('我把拾到的钱包交给他，见到失而复得的钱包，竟感动得流下了眼泪，不住地说着“谢谢”。(sửa: …，他见到……感动得……)', 'Tôi trả ví nhặt được cho anh, anh thấy ví mất lại tìm lại được cảm động đến rơi lệ, luôn miệng nói "cảm ơn".', 'Thiếu chủ ngữ khi đổi chủ ngữ.'),
          ] },
        ] },
      ],
    },
    {
      id: 'binglie-quesheng', hanzi: '并列缺省、搭配不当', pinyin: 'bìngliè quēshěng, dāpèi bùdàng', title: 'Thiếu vế đẳng lập và kết hợp sai',
      intro: 'Tiếng Hán thường dùng 和/与/以及/并且/而且/又 nối các phần đẳng lập. Hãy kiểm tra từng phần đẳng lập có hợp với động từ hay giới từ phía trước không.',
      groups: [{ patterns: [
        { formula: '动 + 宾₁ + 和 + 宾₂  /  介 + 宾₁ + 和 + 宾₂  /  介 + 宾 + 动₁、动₂  /  主₁ + 主₂ + 谓语  /  地点 + 景点', title: 'Năm kiểu thiếu đẳng lập', note: '1) động + tân₁ + tân₂: động từ phải hợp cả hai tân ngữ. 2) giới + tân₁ + tân₂: giới từ phải hợp cả hai. 3) giới + tân + động₁ + động₂: giới từ sau phải đi cùng cả hai động từ. 4) chủ₁ + chủ₂ + vị: vị ngữ phải hợp cả hai chủ ngữ. 5) Các hạng mục đẳng lập phải cùng loại (thành phố và danh lam không đẳng lập).', examples: [
          e('我来中国学习汉语和中国文化。(✓)', 'Tôi đến Trung Quốc học tiếng Hán và văn hóa Trung Quốc.'),
          e('多看书可以丰富知识和写作水平。(×: 丰富 không đi với 水平; sửa: 提高写作水平)', 'Đọc nhiều sách có thể làm phong phú tri thức và nâng cao trình độ viết.', 'Động - tân đẳng lập sai.'),
          e('女人不听我的解释，气急败坏地拿起包和推车里的婴儿。(sửa: 拿起包和推着车里的婴儿)', 'Người phụ nữ không nghe tôi giải thích, giận dữ cầm túi và đẩy xe có đứa bé.', '"拿" chỉ hợp "包", "婴儿" không hợp.'),
          e('我对中国文化和中国人都很感兴趣。(✓)', 'Tôi rất hứng thú với văn hóa và con người Trung Quốc.'),
          e('每位家长对于孩子以及孩子的教育都十分关注。(×: 对于 không đi với người; sửa: 对)', 'Mỗi phụ huynh đều rất quan tâm đến con và việc giáo dục con.', 'Giới từ không hợp.'),
          e('我们是多年的朋友，我遇到什么事都喜欢和他聊天、征求意见。(sửa: 和他聊天、向他征求意见)', 'Chúng tôi là bạn nhiều năm, gặp việc gì tôi cũng thích trò chuyện và xin ý kiến anh.', 'Hai động từ cần hai giới từ khác nhau.'),
          e('经过半年的学习，我的汉语水平和发音都越来越好了。(×: 水平好 không hợp; sửa: 水平越来越高，而且发音也越来越好了)', 'Sau nửa năm học, trình độ tiếng Hán của tôi ngày càng cao, phát âm cũng ngày càng tốt.', 'Hai chủ ngữ cần vị ngữ hợp.'),
          e('来中国以后我游览过很多地方，如西安、上海、杭州、颐和园。(sửa: …西安、上海、杭州，还去过颐和园)', 'Từ khi đến Trung Quốc tôi đã đi nhiều nơi như Tây An, Thượng Hải, Hàng Châu, và còn đến Di Hòa Viên.', 'Thành phố và danh lam không đẳng lập.'),
        ] },
      ] }],
    },
  ],

  boards: [
    {
      id: 'cf-board', hanzi: '句子成分', title: 'Thành phần câu',
      rows: [
        { label: 'Các lỗi chủ yếu', text: 'Có ba nhóm lỗi chính: (1) thiếu, (2) thừa, (3) kết hợp sai. Khi gặp câu dài, trước hết gạch ra chủ ngữ, vị ngữ, tân ngữ, rồi mới xét từng phần.', examples: [e('来中国两年多的我已经深深地喜欢上了可爱的中国。', 'Tôi đến Trung Quốc hơn hai năm đã yêu sâu đậm đất nước đáng yêu này.', 'Trục: 我 - 喜欢上 - 中国.')] },
        { label: 'Thiếu', points: [{ text: 'Thiếu trung tâm ngữ: định ngữ dài đứng trước tân ngữ nên dễ bỏ mất danh từ trung tâm.', fixes: [{ wrong: '他从来不认为李真是个有思想、有主见', right: '他从来不认为李真是个有思想、有主见的人', ref: 'Kiểm tra 1 · B' }] }, { text: 'Thiếu giới từ: cụm giới-tân bị cụt thì đổi chủ ngữ ngầm.', fixes: [{ wrong: '她的善良与热心深受感动', right: '她的善良与热心使我深受感动', ref: 'Kiểm tra 3 · D' }] }, { text: 'Thiếu vị ngữ: ngoại trừ tân ngữ đưa lên đầu, giữa chủ ngữ và tân ngữ phải có động từ hoặc giới từ.', fixes: [{ wrong: '炎黄子孙世界160多个国家和地区', right: '炎黄子孙遍布世界160多个国家和地区', ref: 'Kiểm tra 2 · A' }] }, { text: 'Thiếu chủ ngữ: khi đổi chủ ngữ mà quên thêm.', fixes: [{ wrong: '我在炎炎烈日下等了他半个多钟头，才踱着方步走过来', right: '我在炎炎烈日下等了他半个多钟头，他才踱着方步走过来', why: 'Chủ ngữ của "走" là "他", không phải "我".', ref: 'Kiểm tra 4 · B' }] }] },
        { label: 'Thừa', points: [{ text: 'Thừa trung tâm ngữ, thừa liên từ, thừa trạng/định/bổ ngữ. "无论如何" và "怎样" đều chỉ điều kiện nên bỏ một.', fixes: [{ wrong: '无论如何天气怎样变化多端', right: '无论天气怎样变化多端', ref: 'Điểm thi thừa' }] }] },
      ],
    },
    {
      id: 'bl-board', hanzi: '并列缺省', title: 'Thiếu vế đẳng lập',
      rows: [
        { label: 'Năm điểm cần kiểm', text: '1. 动 + 宾₁ + 和 + 宾₂: động từ hợp cả hai tân ngữ chưa? 2. 介 + 宾₁ + 和 + 宾₂: giới từ hợp cả hai chưa? 3. 介 + 宾 + 动₁、动₂: giới từ phía trước đi được cả hai động từ chưa? 4. 主₁ + 主₂ + 谓语: vị ngữ hợp cả hai chủ ngữ chưa? 5. Các phần đẳng lập có cùng loại không?', examples: [e('我来中国学习汉语和中国文化。', 'Tôi đến Trung Quốc học tiếng Hán và văn hóa Trung Quốc.'), e('我对中国文化和中国人都很感兴趣。', 'Tôi rất hứng thú với văn hóa và con người Trung Quốc.')],
          points: [{ text: 'Điểm thi: "拿" chỉ hợp "包", "婴儿" phải đi cùng "推着/抱起".', fixes: [{ wrong: '气急败坏地拿起包和推车里的婴儿', right: '气急败坏地拿起包和推着车里的婴儿', ref: 'Kiểm tra 5 · B' }] }, { text: 'Điểm thi: "其" thay cho phần đã nói trước; "全球气候变暖" là nguyên nhân độc lập nên bỏ "其".', fixes: [{ wrong: '工业污染及其全球气候变暖的结果', right: '工业污染及全球气候变暖的结果', ref: 'Kiểm tra 6 · C' }] }] },
      ],
    },
  ],

  test: [
    seg(['在他的心目中，他从来不认为李真是个有思想、有主见，', '他一直把她当作自己的附属物，', '而李真对此也早已习惯了。'], 1, 'Thiếu trung tâm ngữ',
      '他从来不认为李真是个有思想、有主见的人', 'Định ngữ dài đứng trước tân ngữ; thiếu trung tâm ngữ "人".'),
    seg(['炎黄子孙世界160多个国家和地区，', '他们以自己的勤劳智慧赢得了世界人民的尊敬，', '也融入了当地的社会生活，', '但是他们许多人依然保留着中华民族传统的风俗习惯。'], 0, 'Thiếu vị ngữ',
      '炎黄子孙遍布世界160多个国家和地区', 'Giữa chủ ngữ và tân ngữ thiếu động từ "遍布".'),
    seg(['刚来中国的我对一切都不适应，', '一下子瘦了很多，', '房东大妈常常请我到她家里吃饭，', '还专门做一些我吃惯的菜，她的善良与热心深受感动。'], 3, 'Thiếu giới từ',
      '她的善良与热心使我深受感动', 'Thiếu giới từ/động từ "使我".'),
    seg(['我在炎炎烈日下等了他半个多钟头，', '才踱着方步走过来，', '脸上没有一丝的歉意，', '我强压住心里的怒气把情况向他报告了一遍。'], 1, 'Thiếu chủ ngữ',
      '他才踱着方步走过来', 'Chủ ngữ của "走过来" là "他", không phải "我"; phải thêm "他".'),
    seg(['女人不听我的解释，', '气急败坏地拿起包和推车里的婴儿，', '转身就往门外走去。', '而身为保安的我，只能遵守规定。'], 1, 'Thiếu vế đẳng lập',
      '气急败坏地拿起包和推着车里的婴儿', '"拿起" chỉ hợp "包"; "婴儿" phải đi cùng "推着".'),
    seg(['传统观点认为，物种的消失并非真正的自然选择，', '更多的是砍伐森林、过度捕猎、', '工业污染及其全球气候变暖的结果，', '这一观点是不全面的。'], 2, '其 thừa',
      '工业污染及全球气候变暖的结果', '"其" thay cho phần nói trước; "全球气候变暖" là nguyên nhân độc lập nên bỏ "其".'),
  ],

  exam: [
    sen(['孩子做错了事，总是会担心父母责备。', '这个月公司的业绩是今年以来业绩中最好的一个月。', '枸杞具有降低血糖等作用，是一种名贵的药材和滋补品。', '这个年龄段的孩子逆反心理很强，你要注意教育的方式方法。'], 1, 'Thừa thành phần', '这个月公司的业绩是今年以来业绩中最好的/这个月是公司今年以来业绩最好的一个月', '"……业绩是……一个月" là sai; chủ ngữ và tân ngữ không tương hợp.'),
    sen(['许多取得伟大成就的人，都具有刻苦勤奋的精神。', '为了躲避天敌的追杀，很多动物都具有非常强的伪装能力。', '跳绳是一项很好的运动，能有效训练人们的耐力和协调力的提高。', '冬季南北温差较大，夏季普遍高温，是中国气温分布的特点。'], 2, 'Thừa trung tâm ngữ', '能有效训练人们的耐力和协调力', 'Tân ngữ của "训练" không thể là "提高".'),
    sen(['孙中山铜像总高度为11.12米，寓意孙中山先生的诞辰11月12日。', '这本杂志的读者对象，主要是面向来中国的外国留学生及其他汉语爱好者。', '无论在什么时代，一个杰出的领导者都必定是一个高明的授权人。', '园林建筑是指建造在园林和城市绿化地段内供人们游憩或观赏用的建筑物。'], 1, 'Lặp ngữ nghĩa', '这本杂志的读者对象，主要是来中国的外国留学生…… (hoặc: 这本杂志主要是面向……的)', '"面向" đã biểu thị đối tượng, thừa "读者对象".'),
    sen(['不会在失败中总结经验教训的人，其通向成功的道路是遥远的。', '"胡思乱想"有助于消除工作、生活中的紧张疲劳与放松身心的作用。', '噪声虽然有害，但可以采取措施消除或减轻它的危害。', '一提起绿色食品，不少人误以为只是蔬菜水果之类，其实它的涵义是多方面的。'], 1, 'Động - tân không hợp', '有助于消除……与放松身心', '"有助于" thì không dùng cùng "作用".'),
    sen(['他成立了自己的家庭，过着忙碌而充实的生活。', '这个地区的粮食总产量，除了供给本地外，还运送给其他地区。', '长时间或大音量地听音乐，不仅会使听力下降，甚至还会导致"噪声性耳聋"。', '踢毽子是中国民间体育游戏，有助于培养人的灵敏性和协调性，有助于身体的全面发展。'], 1, 'Chủ ngữ không hợp', '这个地区的粮食总产量很高，除了供给本地外……', '"总产量" không thể "供给"; phải đổi chủ ngữ.'),
    sen(['立冬过后，冷空气就会不期而至，形成大风降温或雨雪天气。', '一句简单的赞美能给别人带来很大的快乐。', '你不努力学习，那怎么可能有好的成绩是可想而知的。', '即使是婴儿也能分辨出友好和不友好的伙伴，并且知道该和谁一起玩。'], 2, 'Câu tạp', '你不努力学习，那怎么可能有好的成绩呢？这是可想而知的', 'Hai câu trộn vào nhau, tách làm hai.'),
    sen(['网络传播极大地开阔了人们的视野，丰富了人们的文化生活。', '我对她很了解，才华横溢，能写一手好文章，是某出版公司的图书策划编辑。', '幸福不是你成功时听到的喝彩有多么热烈，而是在失意时有个声音对你说："朋友，别倒下。"', '没有知识和技能你将无法生存，而知识和技能的获得要不断地学习，学习，再学习。'], 1, 'Thiếu chủ ngữ', '我对她很了解，她才华横溢，能写一手好文章', 'Đổi chủ ngữ phải thêm "她".'),
    sen(['有相当一部分人以收入多少作为选择职业的标准。', '很多父母在教育孩子时往往都有自己的主张，而且都认为他们的主张非常有道理。', '调查显示，多数女性喜欢有责任心、成熟、认真、幽默的男性最受女性欢迎。', '有时候，我们总是责怪别人的态度太冷漠、自己的运气太不好，却不知你是对方一面最好的镜子。'], 2, 'Câu tạp', '多数女性喜欢有责任心、成熟、认真、幽默的男性，这样的男性最受女性欢迎', 'Hai câu trộn: tách ra.'),
    sen(['钓鱼是一件很讲究耐心的事，如果缺乏平和的心态，你就无法让鱼上钩。', '窗花是民间剪纸中最为普及的种类，人们在春节期间贴窗花，以此达到装点环境、渲染气氛。', '家庭、朋友和一份令人愉快的工作为你带来的幸福感，要远远超过金钱带来的幸福感。', '她因为宿舍中的人际关系紧张而苦恼。她希望改变这种状况，但又不知从何做起。'], 1, 'Tân ngữ không hợp', '以此达到装点环境、渲染气氛的效果', '"达到" cần tân ngữ "效果"; sửa thành "以此装点环境、渲染气氛".'),
    sen(['如果一个人不能把他所掌握的知识当做创新的源泉，那么他对社会的贡献将会十分有限。', '早在一个多世纪以前的小说里，人类就开始在火星上散步了，然而直到今天，这还只是个设想。', '今天，我们去了北京郊区的地方，游览了许多著名的景点，如十三陵、青龙峡、黑龙潭等。', '由于绿色和平组织等非政府环保组织的不懈努力，国内公众对转基因作物普遍持怀疑态度。转基因作物对环境和人类的影响还有待进一步研究。'], 2, 'Thừa tân ngữ', '今天，我们去了北京郊区，游览了……', '"郊区" chính là "地方", thừa.'),
    sen(['长时间地看电视会对眼睛产生影响，很多人因为看电视而戴上了眼镜。', '电视使我们花去了很多可以用来看书、学习的时间，那些特别喜欢看电视的孩子，会对学习失去兴趣，导致学习成绩下降。', '天气的变化，直接影响着动物的生活，往往能及时察觉到天气的变化，并预先做好相应的准备。', '十二生肖是中华民俗文化中富有鲜明特色的一个组成部分，生肖的说法起源于何时，现在已经难以考查清楚了。'], 2, 'Thiếu chủ ngữ', '动物往往能及时察觉到天气的变化', 'Phần sau đổi chủ ngữ thành "动物" nên phải thêm.'),
    sen(['多读好书，就像充满智慧的人聊天一样，可以丰富和提高我们的知识。', '凡事都有两面性，就如同出门，如果向左走是死胡同，向右走也许就能走出阳光大道。', '利用电视学汉字，在看画面、听声音的同时，还可以看字幕。这样既不增加学生负担，又能提高他们识字的兴趣。', '一个人如果长期在一个相对不变的环境中循环往复地生活，没有新信息激发他去思考、去比较，就很容易思维僵化，更难有预测未来的能力。'], 0, 'Thiếu vế đẳng lập', '可以丰富我们的知识，提高我们的知识水平', '"提高" không đi với "知识" mà với "水平".'),
    sen(['电视带给我们知识和娱乐，但同时也带来了一定的危害，重要的是我们怎样充分利用电视，怎样来看电视。', '电视带给我们许多快乐，使我们学到了很多知识，丰富了我们的文化生活，但电视也给我们带来了很多坏处。', '最理想的情况是能找到一份既让人喜欢又有较多收入的职业。可惜的是，这种情况在生活中并不能经常遇到。', '这所大学在澳大利亚排名第七，以校风开放著称和专栏作家很多，不仅受全国各地学生的欢迎，还吸引了世界上50多个国家的学生前来求学。'], 3, 'Câu tạp', '以校风开放著称，而且专栏作家很多', 'Hai câu bị ghép lẫn: tách làm hai.'),
    sen(['在参加个人全能比赛的运动员中，以杨威为首的前36名选手进入了全运会资格。李小鹏、杨威等奥运会冠军是全场的焦点，表现出了很高的竞技水平。', '按照饮食特点分，中国主要有四大菜系，即川菜、鲁菜、淮菜和粤菜。当然，其中最有名的，还是大家熟悉的川菜。', '我本以为自己的性子已经够急了，没想到在时间观念上，和我的老板也出现了沟通上的误差。', '中国一直推崇以和为贵，而真正的"和"就是在承认不同声音、不同观点的前提下，对于他人的一种宽容、一种吸纳。其实这就是所谓的"君子之道"。'], 0, 'Động - tân không hợp', '以杨威为首的前36名选手取得了全运会资格', '"进入" không đi với "资格"; dùng "取得".'),
    sen(['春节联欢晚会，不仅仅是简简单单的一台文艺演出，它折射出了改革开放以来中国社会深刻而巨大的变革。', '战斗机是一种主要用于与其他飞机进行作战的军用飞机，具有体积小、飞行速度快、机动性强等特点。', '专家对肝移植手术的方法进行了改进，大大减轻了患者麻醉的持续时间和血液供应的负担，患者的术后存活率为80%到85%，处于世界领先水平。', '老医生虽然经验丰富，但是他看病时漫不经心、与己无关的态度，让病人本来就因身体疼痛而糟糕的心情雪上加霜。'], 2, 'Thiếu vế đẳng lập', '大大缩短了患者麻醉的持续时间并减轻了血液供应的负担', '"减轻" không đi với "时间"; "时间" dùng "缩短/减少".'),
  ],
}
