import type { Lesson } from '../types'

/** Giáo trình chuẩn HSK 5 (Thượng), Bài 12: 海外用户玩儿微信. Nghĩa từ mới và ngữ pháp theo sách; dịch bài khóa do app thêm. Không có file nghe. Đáp án theo HSK5-BH1. */

export const hskStd5Lesson12: Lesson = {
  id: 12,
  title: "Người dùng WeChat ở nước ngoài",
  hanzi: "海外用户玩儿微信",
  pinyin: "Hǎiwài yònghù wánr Wēixìn",
  vi: "Người dùng WeChat ở nước ngoài",
  intro: "Sự mở rộng ra thế giới của WeChat. Học 以及, 针对, ……下, 出 và so sánh 发达 – 发展.",

  dialogue: [
    { who: 'A', name: '课文', hanzi: "举着手机，边颠着球边自拍……国际足球明星梅西用微信直播自己的颠球技术，把手机另一头一个正在哭的小宝贝逗笑。这条30秒的全新广告宣传片在全球15个国家和地区同步上线。如此大手笔的推广，腾讯自有其底气所在。微信“在海外注册用户已经超过7000万，且在快速增长当中”。7月3日，在北京召开的2013腾讯合作伙伴大会上，腾讯总裁刘炽平言语间充满了骄傲。", pinyin: "", vi: "Cầm điện thoại, vừa tâng bóng vừa tự quay… Ngôi sao bóng đá Messi dùng WeChat phát trực tiếp kỹ thuật tâng bóng, làm em bé đang khóc ở đầu kia điện thoại bật cười. Phim quảng cáo 30 giây hoàn toàn mới này lên sóng đồng thời tại 15 quốc gia và khu vực. Quảng bá hào phóng như vậy, Tencent tự có nền tảng. WeChat \"đã có hơn 70 triệu người dùng đăng ký ở nước ngoài và đang tăng nhanh\". Ngày 3/7, tại Hội nghị đối tác Tencent 2013 ở Bắc Kinh, chủ tịch Lưu Xí Bình lời lẽ đầy tự hào.", scene: "Mở đầu" },
    { who: 'A', name: '课文', hanzi: "2011年1月，微信上线；同年4月，以英文名WeChat正式进入国际市场；2011年12月，实现支持全球100个国家的短信注册；2012年底，覆盖国家和地区超过100个。如今，微信已经覆盖了200多个国家和地区、支持16种外语，是全球使用人数最多的移动通信应用。在美国互联网企业“称霸”全球的背景下，作为中国自己的移动互联网产品，微信的出现，自然吸引了更多的关注。", pinyin: "", vi: "Tháng 1/2011 WeChat ra mắt; tháng 4 cùng năm chính thức vào thị trường quốc tế với tên WeChat; tháng 12/2011 hỗ trợ đăng ký bằng tin nhắn ở 100 nước; cuối 2012 phủ hơn 100 quốc gia và khu vực. Nay đã phủ hơn 200 nước, hỗ trợ 16 ngoại ngữ, là ứng dụng liên lạc di động nhiều người dùng nhất thế giới. Trong bối cảnh doanh nghiệp internet Mỹ \"xưng bá\" toàn cầu, sản phẩm internet di động của Trung Quốc xuất hiện tự nhiên thu hút nhiều chú ý.", scene: "Quá trình mở rộng" },
    { who: 'A', name: '课文', hanzi: "被称为“微信之父”的腾讯公司高级副总裁张小龙介绍了微信的发展过程：微信的研究开发工作开展得很早，2010年底，移动互联网刚起步，腾讯广州产品研发中心就开始考虑相关业务。他们清楚地认识到了这样的现实——在个人计算机时代，由于中国互联网的用户数量以及市场成熟程度等都低于发达国家，在产品创新上难有领导地位，而移动互联网是一个重新开始的机会。", pinyin: "", vi: "Phó tổng giám đốc cấp cao Tencent Trương Tiểu Long, được gọi là \"cha đẻ WeChat\", giới thiệu quá trình phát triển: nghiên cứu phát triển WeChat bắt đầu rất sớm, cuối 2010 khi internet di động mới khởi đầu, trung tâm nghiên cứu sản phẩm Tencent Quảng Châu đã cân nhắc nghiệp vụ liên quan. Họ nhận rõ thực tế: thời máy tính cá nhân, do số người dùng và độ chín muồi thị trường internet Trung Quốc thấp hơn các nước phát triển nên khó dẫn đầu đổi mới sản phẩm, còn internet di động là cơ hội bắt đầu lại.", scene: "Cha đẻ WeChat" },
    { who: 'A', name: '课文', hanzi: "在经营销售上，微信针对不同的国家和地区，推出了不同的广告片，邀请当地明星和名人代言，收效相当不错。海外用户群中不仅有华裔和新移民，还出现了更多的外国人。", pinyin: "", vi: "Về kinh doanh, WeChat nhắm vào từng nước và khu vực, tung quảng cáo khác nhau, mời ngôi sao và người nổi tiếng địa phương đại diện, hiệu quả khá tốt. Nhóm người dùng ở nước ngoài không chỉ có người gốc Hoa và dân nhập cư mới mà còn xuất hiện nhiều người nước ngoài hơn.", scene: "Kinh doanh" },
  ],
  dialogueTip: "<b>以及</b>: và. <b>针对</b>: nhằm vào. <b>发达</b>/<b>发展</b>.",
  slowSay: "海外用户玩儿微信",

  vocab: [
    { hanzi: "用户", pinyin: "yònghù", pos: "danh từ", meaning: "người dùng", han_viet: '' },
    { hanzi: "颠球", pinyin: "diān qiú", pos: "động từ", meaning: "tâng bóng", han_viet: '' },
    { hanzi: "明星", pinyin: "míngxīng", pos: "danh từ", meaning: "ngôi sao", han_viet: '' },
    { hanzi: "直播", pinyin: "zhíbō", pos: "động từ", meaning: "phát trực tiếp", han_viet: '' },
    { hanzi: "宝贝", pinyin: "bǎobèi", pos: "danh từ", meaning: "cục cưng", han_viet: '' },
    { hanzi: "逗", pinyin: "dòu", pos: "động từ", meaning: "chọc cười", han_viet: '' },
    { hanzi: "宣传", pinyin: "xuānchuán", pos: "động từ", meaning: "tuyên truyền", han_viet: '' },
    { hanzi: "手笔", pinyin: "shǒubǐ", pos: "danh từ", meaning: "sự phô trương", han_viet: '' },
    { hanzi: "推广", pinyin: "tuīguǎng", pos: "động từ", meaning: "phổ biến", han_viet: '' },
    { hanzi: "注册", pinyin: "zhùcè", pos: "động từ", meaning: "đăng ký", han_viet: '' },
    { hanzi: "召开", pinyin: "zhàokāi", pos: "động từ", meaning: "triệu tập, tổ chức", han_viet: '' },
    { hanzi: "合作", pinyin: "hézuò", pos: "động từ", meaning: "hợp tác", han_viet: '' },
    { hanzi: "伙伴", pinyin: "huǒbàn", pos: "danh từ", meaning: "cộng sự", han_viet: '' },
    { hanzi: "总裁", pinyin: "zǒngcái", pos: "danh từ", meaning: "chủ tịch", han_viet: '' },
    { hanzi: "实现", pinyin: "shíxiàn", pos: "động từ", meaning: "thực hiện", han_viet: '' },
    { hanzi: "覆盖", pinyin: "fùgài", pos: "động từ", meaning: "bao phủ", han_viet: '' },
    { hanzi: "移动", pinyin: "yídòng", pos: "động từ", meaning: "di động", han_viet: '' },
    { hanzi: "通信", pinyin: "tōngxìn", pos: "động từ", meaning: "thông tin liên lạc", han_viet: '' },
    { hanzi: "应用", pinyin: "yìngyòng", pos: "động từ", meaning: "ứng dụng", han_viet: '' },
    { hanzi: "企业", pinyin: "qǐyè", pos: "danh từ", meaning: "xí nghiệp", han_viet: '' },
    { hanzi: "称霸", pinyin: "chēngbà", pos: "động từ", meaning: "xưng bá", han_viet: '' },
    { hanzi: "背景", pinyin: "bèijǐng", pos: "danh từ", meaning: "bối cảnh", han_viet: '' },
    { hanzi: "高级", pinyin: "gāojí", pos: "tính từ", meaning: "cao cấp", han_viet: '' },
    { hanzi: "副", pinyin: "fù", pos: "tính từ", meaning: "phó", han_viet: '' },
    { hanzi: "开发", pinyin: "kāifā", pos: "động từ", meaning: "khai thác, phát triển", han_viet: '' },
    { hanzi: "中心", pinyin: "zhōngxīn", pos: "danh từ", meaning: "trung tâm", han_viet: '' },
    { hanzi: "相关", pinyin: "xiāngguān", pos: "động từ", meaning: "liên quan", han_viet: '' },
    { hanzi: "业务", pinyin: "yèwù", pos: "danh từ", meaning: "nghiệp vụ", han_viet: '' },
    { hanzi: "现实", pinyin: "xiànshí", pos: "danh từ", meaning: "hiện thực", han_viet: '' },
    { hanzi: "个人", pinyin: "gèrén", pos: "danh từ", meaning: "cá nhân", han_viet: '' },
    { hanzi: "以及", pinyin: "yǐjí", pos: "liên từ", meaning: "và, cùng với", han_viet: '' },
    { hanzi: "程度", pinyin: "chéngdù", pos: "danh từ", meaning: "mức độ", han_viet: '' },
    { hanzi: "发达", pinyin: "fādá", pos: "tính từ", meaning: "phát triển", han_viet: '' },
    { hanzi: "创新", pinyin: "chuàngxīn", pos: "động từ", meaning: "sáng tạo cái mới", han_viet: '' },
    { hanzi: "领导", pinyin: "lǐngdǎo", pos: "danh từ", meaning: "lãnh đạo", han_viet: '' },
    { hanzi: "地位", pinyin: "dìwèi", pos: "danh từ", meaning: "địa vị", han_viet: '' },
    { hanzi: "经营", pinyin: "jīngyíng", pos: "động từ", meaning: "kinh doanh", han_viet: '' },
    { hanzi: "销售", pinyin: "xiāoshòu", pos: "động từ", meaning: "tiêu thụ", han_viet: '' },
    { hanzi: "针对", pinyin: "zhēnduì", pos: "động từ", meaning: "nhằm vào", han_viet: '' },
    { hanzi: "当地", pinyin: "dāngdì", pos: "danh từ", meaning: "bản địa", han_viet: '' },
    { hanzi: "代言", pinyin: "dàiyán", pos: "động từ", meaning: "phát ngôn", han_viet: '' },
    { hanzi: "华裔", pinyin: "huáyì", pos: "danh từ", meaning: "người gốc Hoa", han_viet: '' },
    { hanzi: "移民", pinyin: "yímín", pos: "danh từ", meaning: "dân di cư", han_viet: '' },
  ],

  sections: [
    { kind: 'examples', label: "以及", title: "以及 (và)", intro: "以及: liên từ nối các từ/cụm song song, thường có chủ thứ.", groups: [{ label: 'Ví dụ', items: [["吃饭时不要用筷子敲打碗、盘子以及桌面。", "Chī fàn shí búyào yòng kuàizi qiāodǎ wǎn, pánzi yǐjí zhuōmiàn.", "Khi ăn đừng dùng đũa gõ bát, đĩa và mặt bàn."], ["学校的领导、教师以及一些学生代表观看了演出。", "Xuéxiào de lǐngdǎo, jiàoshī yǐjí yìxiē xuésheng dàibiǎo guānkànle yǎnchū.", "Lãnh đạo, giáo viên và một số đại diện học sinh xem buổi diễn."]] }] },
    { kind: 'examples', label: "发达 – 发展", title: "So sánh 发达 và 发展", intro: "发达: tính từ (kinh tế, đầu óc… phát triển cao); 发展: động từ/danh từ (quá trình thay đổi, mở rộng).", groups: [{ label: 'Ví dụ', items: [["其实它的大脑很发达。", "Qíshí tā de dànǎo hěn fādá.", "Thật ra bộ não của nó rất phát triển."], ["方便的交通是发展经济的基础。", "Fāngbiàn de jiāotōng shì fāzhǎn jīngjì de jīchǔ.", "Giao thông thuận tiện là nền tảng phát triển kinh tế."]] }] },
  ],

  notes: [
    { title: "以及", body: "Và, cùng với (liên từ).", say: "学校领导、教师以及学生" },
    { title: "针对", body: "Nhằm vào.", say: "针对不同的国家推出不同广告" },
  ],

  writeChars: ["微", "信", "推", "广", "注", "册", "覆", "盖"],

  drills: [],

  qa: [{ title: 'Hoạt động (运用)', items: [{"q": "你主要用什么方式跟家人朋友联系？", "hint": "……"}, {"q": "你使用过微信这类产品吗？", "hint": "……"}] }],

  sentences: [],

  dictations: [
    { title: "Giáo trình 练习 1", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "为了（ ）这项新产品，公司做了很多宣传。", answer: "推广", gloss: "phổ biến" },
      { prompt: "原本定在周三上午（ ）的会议改时间了。", answer: "召开", gloss: "tổ chức" },
      { prompt: "你做这么多事，难道只是为了（ ）女朋友开心？", answer: "逗", gloss: "chọc" },
      { prompt: "你必须先（ ）一个它的邮箱。", answer: "注册", gloss: "đăng ký" },
      { prompt: "那个新来的销售员这个月做成了三笔大（ ）。", answer: "业务", gloss: "nghiệp vụ" },
      { prompt: "我们跟这家公司（ ）过两次，很愉快。", answer: "合作", gloss: "hợp tác" },
    ] },
    { title: "Giáo trình 练习 2 / 做一做 / 扩展", hint: 'Gõ chữ Hán theo đáp án sách.', items: [
      { prompt: "这样的事情，我们应该重点（ ）。 (宣传/宣布)", answer: "宣传", gloss: "tuyên truyền" },
      { prompt: "要吃中国菜，你首先要学会（ ）筷子。", answer: "使用", gloss: "sử dụng" },
      { prompt: "过了这么多年，我的愿望终于（ ）了！", answer: "实现", gloss: "thực hiện" },
      { prompt: "这是我的（ ）爱好。 (个人/个子)", answer: "个人", gloss: "cá nhân" },
      { prompt: "人们常说这种动物不聪明，其实它的大脑很（ ）。", answer: "发达", gloss: "phát triển" },
      { prompt: "方便的交通是（ ）经济的基础。", answer: "发展", gloss: "phát triển" },
      { prompt: "我忘带手机（ ）了，得节省着用。", answer: "充电器", gloss: "sạc" },
      { prompt: "汉字是一个整体的（ ），字与字之间是有联系的。", answer: "系统", gloss: "hệ thống" },
      { prompt: "调查（ ）显示，用户们对微信的服务很满意。", answer: "数据", gloss: "dữ liệu" },
      { prompt: "这里（ ）不太好。", answer: "信号", gloss: "tín hiệu" },
    ] },
  ],
}
