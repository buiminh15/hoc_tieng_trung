import { getLesson } from './lessons'
import type { Lesson, Note } from './types'

/**
 * Chủ đề "Tự giải thích" của từng bài. `note` là tiêu đề đúng của một mục trong phần Ghi chú của bài,
 * dùng làm đáp án mẫu. Khoá bài có dạng "quyển-bài", ví dụ "1-7".
 */
export interface Topic { id: string; prompt: string; note: string }

export const SELF_EXPLAIN: Record<string, Topic[]> = {
  '1-1': [
    { id: 'cau-tao', prompt: 'Giải thích một âm tiết tiếng Hán gồm những phần nào', note: 'Cấu tạo âm tiết tiếng Hán' },
    { id: 'yi-wu-yu', prompt: 'Giải thích khi nào i, u, ü được viết thành yi, wu, yu', note: 'Quy tắc viết: i, u, ü đứng một mình' },
    { id: 'dau-thanh', prompt: 'Giải thích dấu thanh được đặt trên nguyên âm nào', note: 'Quy tắc đặt dấu thanh' },
    { id: 'bien-dieu', prompt: 'Giải thích vì sao 你好 viết nǐ hǎo nhưng đọc là ní hǎo', note: 'Biến điệu: hai thanh 3 đứng liền' },
    { id: 'dong-am', prompt: 'Giải thích vì sao chỉ có pinyin thì chưa đủ để biết nghĩa của từ', note: 'Âm tiết và chữ Hán' },
  ],
  '1-2': [
    { id: 'van-mui', prompt: 'Giải thích khác nhau giữa vần mũi n (an, en) và ng (ang, eng, ong)', note: 'Vận mẫu mũi: an en ang eng ong' },
    { id: 'thanh-nhe', prompt: 'Giải thích thanh nhẹ là gì và thường gặp ở đâu', note: 'Thanh nhẹ (轻声)' },
    { id: 'nua-3', prompt: 'Giải thích nửa thanh 3 đọc như thế nào', note: 'Nửa thanh 3 (半三声)' },
    { id: 'ma', prompt: 'Giải thích cách đặt câu hỏi có/không bằng 吗', note: 'Ngữ pháp 1: câu hỏi có/không với 吗' },
    { id: 'hen', prompt: 'Giải thích khác nhau giữa 很 + tính từ và 不太 + tính từ', note: 'Ngữ pháp 2: 很 + tính từ và 不太 + tính từ' },
  ],
  '1-3': [
    { id: 'jqx', prompt: 'Giải thích cách phát âm j, q, x và khác nhau giữa j với q', note: 'Thanh mẫu j, q, x' },
    { id: 'y-rule', prompt: 'Giải thích khi nào vần bắt đầu bằng i được viết thành y', note: 'Quy tắc viết 1: i đứng đầu âm tiết viết thành y' },
    { id: 'u-rule', prompt: 'Giải thích khi nào ü giữ hai chấm, khi nào bỏ hai chấm', note: 'Quy tắc viết 2: ü và vần ü- (üe, üan, ün)' },
    { id: 'bu', prompt: 'Giải thích vì sao 不 lúc đọc bù, lúc đọc bú', note: 'Biến điệu của "不"' },
    { id: 'qu', prompt: 'Giải thích cách nói đi đâu để làm gì bằng 去 + nơi chốn + động từ', note: 'Ngữ pháp 2: 去 + nơi chốn + động từ' },
  ],
  '1-4': [
    { id: 'zcs', prompt: 'Giải thích cách phát âm z, c, s và khác nhau giữa z với c', note: 'Thanh mẫu z, c, s' },
    { id: 'i-zcs', prompt: 'Giải thích vì sao chữ i trong zi, ci, si không đọc là i', note: 'Vần -i trong zi, ci, si' },
    { id: 'er', prompt: 'Giải thích vần er và cách 儿 hoá (như 哪儿)', note: 'Vần er và 儿 hoá' },
    { id: 'thu', prompt: 'Giải thích cách hỏi và nói thứ trong tuần', note: 'Ngữ pháp 1: hỏi thứ trong tuần' },
    { id: 'vbv', prompt: 'Giải thích câu hỏi chính phản V + 不 + V (như 你去不去)', note: 'Ngữ pháp 2: câu hỏi chính phản V + 不 + V' },
  ],
  '1-5': [
    { id: 'zh', prompt: 'Giải thích khác nhau giữa zh ch sh r (cuốn lưỡi) và z c s', note: 'Thanh mẫu cuốn lưỡi zh, ch, sh, r' },
    { id: 'i-zh', prompt: 'Giải thích vì sao chữ i trong zhi, chi, shi, ri không đọc là i', note: 'Vần -i trong zhi, chi, shi, ri' },
    { id: 'shi', prompt: 'Giải thích cách đặt câu có 是 (…là…)', note: 'Ngữ pháp 1: câu có 是 (…là…)' },
    { id: 'qing', prompt: 'Giải thích cách mời người khác bằng 请 + động từ', note: 'Ngữ pháp 2: 请 + động từ (mời…)' },
    { id: 'nin', prompt: 'Giải thích khi nào dùng 您 thay cho 你', note: 'Ngữ pháp 3: 您 và 你; hỏi thăm bằng 吗' },
  ],
  '1-6': [
    { id: 'ho-ten', prompt: 'Giải thích thứ tự họ và tên của người Trung Quốc', note: 'Họ tên của người Trung Quốc' },
    { id: 'guixing', prompt: 'Giải thích cách hỏi họ bằng 贵姓 và vì sao không nói 我贵姓', note: '贵姓 – cách hỏi họ lịch sự' },
    { id: 'quoc-tich', prompt: 'Giải thích cách hỏi và nói quốc tịch', note: 'Hỏi quốc tịch: 哪国人' },
    { id: 'de', prompt: 'Giải thích cách dùng 的 để chỉ sở hữu', note: 'Trợ từ 的 và hỏi 谁的' },
    { id: 'yu-wen', prompt: 'Giải thích khác nhau giữa …语 và …文', note: '…语 và …文' },
  ],
  '1-7': [
    { id: 'yi', prompt: 'Giải thích vì sao 一 đọc yī / yì / yí', note: 'Biến điệu của "一"' },
    { id: 'yao', prompt: 'Giải thích cách gọi món bằng 要 + số + lượng từ', note: 'Ngữ pháp 2: 要 + số + lượng từ + danh từ' },
    { id: 'mantou', prompt: 'Giải thích khác nhau giữa 馒头 và 包子', note: 'Món ăn: 馒头, 包子, 饺子, 面条' },
    { id: 'xie', prompt: 'Giải thích 这些 và 那些 khác 这 và 那 ở chỗ nào', note: 'Ngữ pháp 4: 这些 và 那些 (số nhiều)' },
    { id: 'co-khong', prompt: 'Giải thích cách hỏi và trả lời có/không (你吃吗? – 不吃)', note: 'Ngữ pháp 3: hỏi và đáp có/không' },
  ],
  '1-8': [
    { id: 'ba', prompt: 'Giải thích 吧 dùng để làm gì và khác 吗 ở chỗ nào', note: 'Trợ từ 吧 (đề nghị, thương lượng)' },
    { id: 'liang', prompt: 'Giải thích khi nào dùng 两 thay cho 二', note: 'Số 2 trước lượng từ: 两 + lượng từ' },
    { id: 'tien', prompt: 'Giải thích cách đọc và nói số tiền với 块, 毛, 分', note: 'Tiền Trung Quốc: 块, 毛, 分 và cách đọc giá' },
    { id: 'le', prompt: 'Giải thích mẫu 太……了 dùng khi nào', note: 'Ngữ pháp: 太……了' },
    { id: 'so', prompt: 'Giải thích cách đọc các số từ 11 đến 99', note: 'Đọc số từ 11 đến 99' },
  ],
  '1-9': [
    { id: 'tam-thanh3', prompt: 'Giải thích cách đọc ba thanh 3 liền nhau (五百美元, 我很好)', note: 'Ba thanh 3 liền nhau (三个三声)' },
    { id: 'xiansheng', prompt: 'Giải thích cách gọi 先生 và 小姐, và đặt họ ở đâu', note: 'Cách gọi: 先生 và 小姐' },
    { id: 'yao', prompt: 'Giải thích 要 + động từ trong 我要去银行换钱', note: 'Ngữ pháp: 要 + động từ (muốn, định)' },
    { id: 'huan', prompt: 'Giải thích cách nói đổi tiền và tên các loại tiền', note: 'Đổi tiền: 换 và tên các loại tiền' },
    { id: 'so-lon', prompt: 'Giải thích cách đọc 百, 千, 万 và vì sao nói 二百', note: 'Số lớn: 百, 千, 万' },
  ],
  '1-10': [
    { id: 'ma-so', prompt: 'Giải thích cách đọc số điện thoại, số phòng (vì sao 1 đọc yāo)', note: 'Cách đọc số hiệu: số điện thoại, số phòng (号码)' },
    { id: 'ngu-tu', prompt: 'Giải thích trật tự câu tiếng Hán: chủ ngữ, trạng ngữ, động từ, tân ngữ', note: 'Trật tự câu tiếng Hán (语序)' },
    { id: 'dong-tu', prompt: 'Giải thích câu vị ngữ động từ (như 我学习汉语)', note: 'Câu vị ngữ động từ: chủ ngữ + động từ + tân ngữ' },
    { id: 'ne', prompt: 'Giải thích trợ từ 呢 trong 他在家呢', note: 'Trợ từ 呢: xác nhận sự việc' },
    { id: 'zai-zhao', prompt: 'Giải thích cách dùng 在 và 找', note: 'Động từ 在 và 找: ở đâu, tìm ai' },
  ],
  '1-11': [
    { id: 'ma', prompt: 'Giải thích cách đặt câu hỏi có/không bằng 吗 và cách trả lời', note: 'Ngữ pháp: câu hỏi có/không với 吗 (……吗?)' },
    { id: 'zhuangyu', prompt: 'Giải thích trạng ngữ là gì và đứng ở đâu trong câu', note: 'Trạng ngữ (状语): đứng trước động từ, tính từ' },
    { id: 'ye', prompt: 'Giải thích cách dùng 也 (cũng), kể cả trong câu phủ định', note: 'Phó từ 也: cũng' },
    { id: 'dou', prompt: 'Giải thích cách dùng 都 (đều) và vì sao không đặt trước chủ ngữ', note: 'Phó từ 都: đều' },
    { id: 'zhongyin', prompt: 'Giải thích trọng âm của câu: nhấn thành phần nào', note: 'Trọng âm của câu (句重音 1)' },
  ],
  '1-12': [
    { id: 'nghi-van', prompt: 'Giải thích cách hỏi bằng đại từ nghi vấn và vì sao không thêm 吗', note: 'Hỏi bằng đại từ nghi vấn (怎么问 2)' },
    { id: 'de', prompt: 'Giải thích định ngữ là gì và vai trò của 的', note: 'Định ngữ (定语) và trợ từ 的' },
    { id: 'bo-de', prompt: 'Giải thích khi nào dùng 的 và khi nào có thể bỏ 的', note: 'Khi nào dùng 的, khi nào bỏ 的' },
    { id: 'zai', prompt: 'Giải thích giới từ 在 và vị trí của nơi chốn trong câu', note: 'Giới từ 在: nơi xảy ra hành động' },
    { id: 'gei', prompt: 'Giải thích giới từ 给 và khác với 给 là động từ ở Bài 8', note: 'Giới từ 给: đối tượng của hành động' },
  ],
  '1-13': [
    { id: 'xie', prompt: 'Giải thích lượng từ 些 và vì sao chỉ đi với 一', note: 'Lượng từ 些: một vài, một số' },
    { id: 'tinh-tu', prompt: 'Giải thích câu vị ngữ tính từ và vì sao không dùng 是', note: 'Câu vị ngữ tính từ phủ định, không dùng 是' },
    { id: 'chinh-phan', prompt: 'Giải thích cách hỏi chính phản V不V và cách trả lời', note: 'Câu hỏi chính phản (怎么问 3): V不V' },
    { id: 'de-phrase', prompt: 'Giải thích cụm 的 (như 新的, 旧的) dùng để làm gì', note: 'Cụm 的 (的字词组): dùng như danh từ' },
    { id: 'luong-tu', prompt: 'Giải thích cách chọn lượng từ cho đồ vật (件, 把, 瓶, 本, 张, 支)', note: 'Lượng từ cho đồ dùng: 件, 把, 瓶, 本, 张, 支, 个' },
  ],
  '1-14': [
    { id: 'youdianr', prompt: 'Giải thích 有点儿 + tính từ nghĩa là gì và khi nào dùng', note: 'Hơi, hơi hơi: 有(一)点儿' },
    { id: 'zhuwei', prompt: 'Giải thích câu chủ vị làm vị ngữ (我身体很好)', note: 'Câu chủ vị làm vị ngữ (主谓谓语句)' },
    { id: 'haishi', prompt: 'Giải thích câu hỏi lựa chọn A 还是 B và cách trả lời', note: 'Câu hỏi lựa chọn: A 还是 B' },
    { id: 'ne-noi', prompt: 'Giải thích câu hỏi rút gọn …呢 khi hỏi nơi chốn', note: 'Câu hỏi rút gọn: …呢? (1) hỏi nơi chốn' },
    { id: 'ne-ngucanh', prompt: 'Giải thích câu hỏi rút gọn …呢 khi có ngữ cảnh (你呢?)', note: 'Câu hỏi rút gọn: …呢? (2) theo ngữ cảnh' },
  ],
  '1-15': [
    { id: 'er-liang', prompt: 'Giải thích khi nào dùng 二 và khi nào dùng 两', note: '二 và 两: hai cách nói "2"' },
    { id: 'bu-dou', prompt: 'Giải thích khác nhau giữa 不都是 và 都不是', note: 'Không phải tất cả: 不都是 và 都不是' },
    { id: 'you', prompt: 'Giải thích câu có 有 chỉ sở hữu: khẳng định, phủ định, hỏi', note: 'Câu có 有 (1): chỉ sở hữu' },
    { id: 'ji-duoshao', prompt: 'Giải thích khi nào hỏi bằng 几 và khi nào hỏi bằng 多少', note: 'Hỏi số lượng: 几 và 多少' },
    { id: 'so-luong', prompt: 'Giải thích cụm số từ + lượng từ + danh từ', note: 'Số từ + lượng từ + danh từ' },
  ],
  '2-16': [
    { id: 'hao-ma', prompt: 'Giải thích cách rủ rê, hỏi ý kiến bằng ……，好吗?', note: 'Đề nghị và hỏi ý kiến: ……，好吗?' },
    { id: 'zanmen', prompt: 'Giải thích khác nhau giữa 咱们 và 我们', note: '咱们 và 我们' },
    { id: 'shaoshao', prompt: 'Giải thích 很少 và vì sao không nói 很多 + động từ', note: '很少 = 不常' },
    { id: 'thoi-gian', prompt: 'Giải thích từ chỉ thời gian đứng ở đâu trong câu tiếng Hán', note: 'Từ chỉ thời gian làm trạng ngữ (时间词语作状语)' },
    { id: 'haishi-huozhe', prompt: 'Giải thích khác nhau giữa 还是 và 或者', note: '还是 và 或者: cùng nghĩa "hay là", khác cách dùng' },
  ],
  '2-17': [
    { id: 'dang-lam', prompt: 'Giải thích cách nói hành động đang diễn ra với 在, 正, 正在, 呢', note: 'Hành động đang diễn ra: 在 / 正 / 正在 + động từ + (呢)' },
    { id: 'zheng-zai', prompt: 'Giải thích khác nhau giữa 正, 在 và 正在, và cách phủ định', note: 'Khác nhau giữa 正, 在 và 正在' },
    { id: 'hai-tan-ngu', prompt: 'Giải thích câu có hai tân ngữ và các động từ dùng được', note: 'Câu có hai tân ngữ (双宾语句)' },
    { id: 'zenme', prompt: 'Giải thích cách hỏi cách thức bằng 怎么 + động từ', note: 'Hỏi cách thức: 怎么 + động từ' },
    { id: 'ne-hoi', prompt: 'Giải thích 呢 ở cuối câu hỏi làm giọng mềm đi như thế nào', note: 'Trợ từ 呢 trong câu hỏi: làm giọng mềm' },
  ],
  '2-18': [
    { id: 'nho-giup', prompt: 'Giải thích cách nhờ giúp đỡ bằng 顺便替我…, 帮我…, 行吗?', note: 'Nhờ giúp đỡ: 顺便替我买几张邮票吧' },
    { id: 'lien-dong', prompt: 'Giải thích câu liên động và hai dạng chính của nó', note: 'Câu liên động (连动句)' },
    { id: 'thu-tu', prompt: 'Giải thích thứ tự các động từ trong câu liên động', note: 'Trật tự trong câu liên động' },
    { id: 'ti-bang-gei', prompt: 'Giải thích khác nhau giữa 替, 帮 và 给', note: 'Làm thay và giúp: 替, 帮, 给' },
    { id: 'logic', prompt: 'Giải thích trọng âm logic: nhấn phần nào khi trả lời các câu hỏi khác nhau', note: 'Trọng âm logic (逻辑重音)' },
  ],
  '2-19': [
    { id: 'tien-te', prompt: 'Giải thích cách đọc số tiền với 块, 毛, 分 và khi nào thêm 钱', note: 'Đơn vị tiền tệ: 元, 角, 分 (块, 毛, 分)' },
    { id: 'tai-le', prompt: 'Giải thích mẫu 太…了 khi chê và khi khen', note: '太……了 (1): chê quá mức; (2): khen' },
    { id: 'lap', prompt: 'Giải thích cách lặp động từ (试试, 看一看, 预习预习) và ý nghĩa', note: 'Động từ lặp (动词重叠): V V' },
    { id: 'you-you', prompt: 'Giải thích cấu trúc 又…又…', note: '又……又…… : vừa… vừa…' },
    { id: 'yidianr', prompt: 'Giải thích khác nhau giữa 一点儿 và 有(一)点儿', note: '一点儿 và 有(一)点儿' },
  ],
  '2-20': [
    { id: 'shu', prompt: 'Giải thích cách nói tuổi con giáp với 属 và hỏi 属什么的', note: 'Tuổi con giáp: 属狗' },
    { id: 'jiu', prompt: 'Giải thích 就 trong 就在我的房间 mang ý gì', note: '就 nhấn mạnh: 就在我的房间' },
    { id: 'danh-tu', prompt: 'Giải thích câu vị ngữ danh từ và vì sao không dùng 是', note: 'Câu vị ngữ danh từ (名词谓语句)' },
    { id: 'nam-thang', prompt: 'Giải thích cách đọc năm, tháng, ngày và thứ tự khi nói ngày', note: 'Năm, tháng, ngày (年、月、日)' },
    { id: 'ngu-dieu', prompt: 'Giải thích cách hỏi chỉ bằng giọng nghi vấn, không dùng 吗', note: 'Câu hỏi bằng giọng nghi vấn (怎么问 6)' },
  ],
  '2-21': [
    { id: 'nar', prompt: 'Giải thích vì sao nói 去朋友那儿 chứ không nói 去朋友', note: 'Đến chỗ ai: 去朋友那儿, 来我这儿' },
    { id: 'men', prompt: 'Giải thích hậu tố 们 và khi nào không thêm 们', note: 'Hậu tố 们 (同学们)' },
    { id: 'gio', prompt: 'Giải thích cách nói giờ với 点, 刻, 半, 差', note: 'Biểu đạt giờ giấc (1): giờ chính, 刻, 半, 差' },
    { id: 'thu-tu', prompt: 'Giải thích thứ tự biểu đạt thời gian và vai trò của từ chỉ thời gian trong câu', note: 'Biểu đạt giờ giấc (2): thứ tự và vai trò trong câu' },
    { id: 'truoc-noi', prompt: 'Giải thích vì sao thời gian đứng trước nơi chốn trong câu', note: 'Thời gian đứng trước nơi chốn' },
  ],
  '2-22': [
    { id: 'a-bien-am', prompt: 'Giải thích 啊 biến âm theo âm cuối của chữ đứng trước', note: '你喜欢看京剧? 是啊: biến âm của 啊' },
    { id: 'yiqian', prompt: 'Giải thích cách dùng 以前 và 以后, một mình và sau cụm từ', note: '以前 và 以后' },
    { id: 'dui', prompt: 'Giải thích giới từ 对 trong 对…感兴趣', note: 'Giới từ 对: 我对书法感兴趣' },
    { id: 'kiem-ngu', prompt: 'Giải thích câu kiêm ngữ với 请, 叫, 让', note: 'Câu kiêm ngữ (兼语句)' },
    { id: 'hoi-so-thich', prompt: 'Giải thích cách hỏi và nói về sở thích', note: 'Hỏi sở thích và thể hiện hứng thú' },
  ],
  '2-23': [
    { id: 'phuong-vi', prompt: 'Giải thích từ chỉ phương vị (东边, 里边…) và khi nào thêm 的', note: 'Phương vị từ và 的; bỏ 边' },
    { id: 'zai', prompt: 'Giải thích câu 在 chỉ vị trí của người hoặc vật', note: 'Câu tồn tại (1): 在 chỉ vị trí' },
    { id: 'you', prompt: 'Giải thích câu 有 chỉ nơi có người hoặc vật', note: 'Câu tồn tại (2): 有 chỉ nơi có người, vật' },
    { id: 'shi', prompt: 'Giải thích câu 是 khi muốn biết cụ thể ở đó là gì', note: 'Câu tồn tại (3): 是 khi muốn biết cụ thể' },
    { id: 'li-cong-wang', prompt: 'Giải thích khác nhau giữa 离, 从 và 往', note: 'Giới từ 离, 从, 往' },
  ],
  '2-24': [
    { id: 'zai', prompt: 'Giải thích phó từ 再 và hành động lặp lại chưa xảy ra', note: 'Hỏi bằng 能不能再说一遍; trạng từ 再' },
    { id: 'cong-dao', prompt: 'Giải thích cấu trúc 从…到… chỉ thời gian', note: '从……到……: từ… đến…' },
    { id: 'nang-nguyen', prompt: 'Giải thích động từ năng nguyện và cách hỏi chính phản', note: 'Động từ năng nguyện (能愿动词)' },
    { id: 'yao', prompt: 'Giải thích 要 và vì sao phủ định là 不想 hoặc 不愿意', note: '要: muốn, phải; phủ định 不想 hoặc 不愿意' },
    { id: 'neng-keyi', prompt: 'Giải thích 能 và 可以: khả năng và sự cho phép', note: '能 / 可以: có thể, được phép' },
  ],
  '2-25': [
    { id: 'nali', prompt: 'Giải thích 哪里 là lời khiêm tốn khi được khen', note: '哪里: lời khiêm tốn khi được khen' },
    { id: 'hai-keyi', prompt: 'Giải thích 还 trong 打得还可以 diễn tả mức độ nào', note: '打得还可以: 还 chỉ mức tạm ổn' },
    { id: 'bo-ngu', prompt: 'Giải thích bổ ngữ trạng thái V + 得 + tính từ dùng để làm gì', note: 'Bổ ngữ trạng thái (状态补语) (1)' },
    { id: 'phu-dinh', prompt: 'Giải thích dạng phủ định và câu hỏi chính phản của bổ ngữ trạng thái', note: 'Dạng phủ định và hỏi chính phản' },
    { id: 'tan-ngu', prompt: 'Giải thích cấu trúc bổ ngữ trạng thái khi động từ có tân ngữ', note: 'Khi động từ có tân ngữ' },
  ],
}

export const topicsOf = (book: number, id: number): Topic[] => SELF_EXPLAIN[`${book}-${id}`] ?? []

/** Mục ghi chú dùng làm đáp án mẫu của một chủ đề. */
export const sampleNote = (lesson: Lesson, topic: Topic): Note | undefined => lesson.notes.find(n => n.title === topic.note)

/** Tìm chủ đề theo khoá bài + id chủ đề (dùng ở trang Ôn tập). */
export function findTopic(lessonKey: string, topicId: string) {
  const [b, l] = lessonKey.split('-').map(Number)
  const lesson = getLesson(b, l)
  const topic = SELF_EXPLAIN[lessonKey]?.find(t => t.id === topicId)
  return lesson && topic ? { book: b, lesson, topic } : null
}
