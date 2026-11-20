import type { Lesson } from '../types'

/**
 * Giáo trình chuẩn HSK 3, Bài 14: 你把水果拿过来。 (sách trang 132–140).
 * Bản sách có tiếng Việt; nghĩa từ mới và giải thích ngữ pháp lấy theo sách.
 * Nghe: 14-1…14-5. Bài tập: 热身/注释/练习 của giáo trình, đáp án theo "Đáp án giáo trình HSK 3" trang 28–29.
 */

const A = '/audio/hsk-std3/'

export const hskStd3Lesson14: Lesson = {
  id: 14,
  title: 'Cậu mang trái cây đến đây',
  hanzi: '你把水果拿过来。',
  pinyin: 'Nǐ bǎ shuǐguǒ ná guòlai.',
  vi: 'Cậu mang trái cây đến đây',
  intro: 'Nhờ làm việc theo thứ tự. Học câu chữ 把 (3) "A把B + động từ + bổ ngữ kết quả/phương hướng" và cấu trúc trình tự 先……，再/又……，然后……',

  dialogue: [
    { who: 'A', name: '周太太', hanzi: '客人就要来了，你怎么还不打扫房间啊？', pinyin: 'Kèrén jiù yào lái le, nǐ zěnme hái bù dǎsǎo fángjiān a?', vi: 'Khách sắp đến rồi, sao anh còn chưa dọn phòng?', scene: 'Hội thoại 1 · Ở nhà' },
    { who: 'B', name: '周明', hanzi: '别着急，我让孩子们打扫呢，客人来的时候，他们会把房间打扫干净。', pinyin: 'Bié zháo jí, wǒ ràng háizimen dǎsǎo ne, kèrén lái de shíhou, tāmen huì bǎ fángjiān dǎsǎo gānjìng.', vi: 'Đừng vội, anh bảo bọn trẻ dọn rồi, lúc khách đến chúng sẽ dọn sạch phòng.' },
    { who: 'A', name: '周太太', hanzi: '那你也不能看电视啊。', pinyin: 'Nà nǐ yě bù néng kàn diànshì a.', vi: 'Vậy anh cũng không được xem ti vi chứ.' },
    { who: 'B', name: '周明', hanzi: '你让我做什么？', pinyin: 'Nǐ ràng wǒ zuò shénme?', vi: 'Em bảo anh làm gì?' },
    { who: 'A', name: '周太太', hanzi: '先把茶和杯子放好，然后把冰箱里的西瓜拿出来。', pinyin: 'Xiān bǎ chá hé bēizi fàng hǎo, ránhòu bǎ bīngxiāng lǐ de xīguā ná chūlai.', vi: 'Trước hết để trà và cốc cho gọn, sau đó lấy dưa hấu trong tủ lạnh ra.' },
    { who: 'B', name: '周明', hanzi: '太热了，我还是先把空调打开吧。', pinyin: 'Tài rè le, wǒ háishi xiān bǎ kōngtiáo dǎ kāi ba.', vi: 'Nóng quá, anh vẫn nên bật điều hòa trước.' },
    { who: 'A', name: '同事', hanzi: '你在忙什么呢？刚才打你的手机你也不接。', pinyin: 'Nǐ zài máng shénme ne? Gāngcái dǎ nǐ de shǒujī nǐ yě bù jiē.', vi: 'Cậu đang bận gì thế? Vừa nãy gọi di động cậu cũng không nghe.', scene: 'Hội thoại 2 · Nói chuyện qua điện thoại' },
    { who: 'B', name: '小刚', hanzi: '对不起，我刚洗了个澡，没听见。有什么事吗？', pinyin: 'Duìbuqǐ, wǒ gāng xǐle ge zǎo, méi tīngjiàn. Yǒu shénme shì ma?', vi: 'Xin lỗi, tớ vừa tắm xong nên không nghe thấy. Có việc gì không?' },
    { who: 'A', name: '同事', hanzi: '我想问问你公司里的一些事情。', pinyin: 'Wǒ xiǎng wènwen nǐ gōngsī lǐ de yìxiē shìqing.', vi: 'Tớ muốn hỏi cậu vài chuyện trong công ty.' },
    { who: 'B', name: '小刚', hanzi: '你先等一下，我去把电视关了。', pinyin: 'Nǐ xiān děng yíxià, wǒ qù bǎ diànshì guān le.', vi: 'Cậu đợi chút, tớ đi tắt ti vi.' },
    { who: 'A', name: '同事', hanzi: '没关系，你先把电视节目看完吧，然后再给我回电话。', pinyin: 'Méi guānxi, nǐ xiān bǎ diànshì jiémù kànwán ba, ránhòu zài gěi wǒ huí diànhuà.', vi: 'Không sao, cậu cứ xem hết chương trình ti vi đi, rồi gọi lại cho tớ.' },
    { who: 'A', name: '同学', hanzi: '今晚的月亮真漂亮，像白色的盘子一样。', pinyin: 'Jīn wǎn de yuèliang zhēn piàoliang, xiàng báisè de pánzi yíyàng.', vi: 'Trăng tối nay đẹp thật, giống cái đĩa trắng.', scene: 'Hội thoại 3 · Tại nhà bạn Minh' },
    { who: 'B', name: '小明', hanzi: '是啊，外边也不刮风，我们坐在外边一边看月亮一边吃东西，怎么样？', pinyin: 'Shì a, wàibian yě bù guā fēng, wǒmen zuò zài wàibian yìbiān kàn yuèliang yìbiān chī dōngxi, zěnmeyàng?', vi: 'Ừ, bên ngoài cũng không có gió, mình ngồi ngoài vừa ngắm trăng vừa ăn, thế nào?' },
    { who: 'A', name: '同学', hanzi: '好啊，我先把桌椅搬出去，然后你把水果拿过来，我们听叔叔阿姨讲讲他们年轻时候的故事。', pinyin: 'Hǎo a, wǒ xiān bǎ zhuōyǐ bān chūqu, ránhòu nǐ bǎ shuǐguǒ ná guòlai, wǒmen tīng shūshu āyí jiǎngjiang tāmen niánqīng shíhou de gùshi.', vi: 'Được, tớ mang bàn ghế ra trước, rồi cậu mang trái cây qua, mình nghe chú dì kể chuyện thời trẻ.' },
    { who: 'B', name: '小明', hanzi: '太好了！记得给大山打个电话，让他马上过来。', pinyin: 'Tài hǎo le! Jìde gěi Dàshān dǎ ge diànhuà, ràng tā mǎshàng guòlai.', vi: 'Hay quá! Nhớ gọi cho Đại Sơn, bảo cậu ấy qua ngay.' },
    { who: 'A', name: '同学', hanzi: '不用打了，你听外边的声音，一定是大山。', pinyin: 'Búyòng dǎ le, nǐ tīng wàibian de shēngyīn, yídìng shì Dàshān.', vi: 'Khỏi gọi, cậu nghe tiếng bên ngoài kìa, chắc chắn là Đại Sơn.' },
    { who: 'A', name: '短文', hanzi: '你吃过水果饭吗？你在饭馆儿的菜单上见过水果饭吗？你想学着做水果饭吗？其实做水果饭很简单，先把米饭做好，然后再把一块块新鲜的水果放进去，水果饭就做好了。你可以做苹果饭、香蕉饭，要是你愿意，还可以做西瓜饭。多吃新鲜水果对身体好。', pinyin: 'Nǐ chīguo shuǐguǒ fàn ma? Nǐ zài fànguǎnr de càidān shang jiànguo shuǐguǒ fàn ma? Nǐ xiǎng xuézhe zuò shuǐguǒ fàn ma? Qíshí zuò shuǐguǒ fàn hěn jiǎndān, xiān bǎ mǐfàn zuò hǎo, ránhòu zài bǎ yí kuàikuài xīnxiān de shuǐguǒ fàng jìnqu, shuǐguǒ fàn jiù zuò hǎo le. Nǐ kěyǐ zuò píngguǒ fàn, xiāngjiāo fàn, yàoshi nǐ yuànyì, hái kěyǐ zuò xīguā fàn. Duō chī xīnxiān shuǐguǒ duì shēntǐ hǎo.', vi: 'Bạn đã ăn cơm trái cây chưa? Bạn đã thấy cơm trái cây trong thực đơn nhà hàng chưa? Bạn muốn học làm không? Thật ra làm rất đơn giản: nấu cơm xong rồi cho từng miếng trái cây tươi vào là được. Có thể làm cơm táo, cơm chuối, nếu thích còn có thể làm cơm dưa hấu. Ăn nhiều trái cây tươi tốt cho sức khỏe.', scene: 'Bài đọc 4 · Cơm trái cây' },
  ],
  dialogueClips: [
    { label: '14-1 · Ở nhà', src: A + 'l14-1.mp3' },
    { label: '14-2 · Nói chuyện qua điện thoại', src: A + 'l14-2.mp3' },
    { label: '14-3 · Tại nhà bạn Minh', src: A + 'l14-3.mp3' },
    { label: '14-4 · Cơm trái cây', src: A + 'l14-4.mp3' },
  ],
  dialogueTip: '<b>A把B + động từ + bổ ngữ kết quả/phương hướng</b> (洗干净, 做好, 拿出来, 拿过来). <b>先……，再/又……，然后……</b>: trình tự hành động; 再 = chưa xảy ra, 又 = đã xảy ra.',
  slowSay: '你把水果拿过来',

  vocab: [
    { hanzi: '打扫', pinyin: 'dǎsǎo', pos: 'động từ', meaning: 'quét dọn', han_viet: 'đả tảo' },
    { hanzi: '干净', pinyin: 'gānjìng', pos: 'tính từ', meaning: 'sạch sẽ', han_viet: 'can tịnh' },
    { hanzi: '然后', pinyin: 'ránhòu', pos: 'liên từ', meaning: 'sau đó', han_viet: 'nhiên hậu' },
    { hanzi: '冰箱', pinyin: 'bīngxiāng', pos: 'danh từ', meaning: 'tủ lạnh', han_viet: 'băng tương' },
    { hanzi: '洗澡', pinyin: 'xǐ zǎo', pos: 'động từ', meaning: 'tắm, tắm rửa', han_viet: 'tẩy tháo' },
    { hanzi: '节目', pinyin: 'jiémù', pos: 'danh từ', meaning: 'chương trình (truyền hình)', han_viet: 'tiết mục' },
    { hanzi: '月亮', pinyin: 'yuèliang', pos: 'danh từ', meaning: 'mặt trăng', han_viet: 'nguyệt lượng' },
    { hanzi: '像', pinyin: 'xiàng', pos: 'động từ', meaning: 'giống', han_viet: 'tượng' },
    { hanzi: '盘子', pinyin: 'pánzi', pos: 'danh từ', meaning: 'đĩa, mâm', han_viet: 'bàn tử' },
    { hanzi: '刮风', pinyin: 'guā fēng', pos: 'cụm', meaning: 'nổi gió', han_viet: 'quát phong' },
    { hanzi: '叔叔', pinyin: 'shūshu', pos: 'danh từ', meaning: 'chú', han_viet: 'thúc thúc' },
    { hanzi: '阿姨', pinyin: 'āyí', pos: 'danh từ', meaning: 'dì, cô', han_viet: 'a di' },
    { hanzi: '故事', pinyin: 'gùshi', pos: 'danh từ', meaning: 'truyện, câu chuyện', han_viet: 'cố sự' },
    { hanzi: '声音', pinyin: 'shēngyīn', pos: 'danh từ', meaning: 'âm thanh, tiếng', han_viet: 'thanh âm' },
    { hanzi: '菜单', pinyin: 'càidān', pos: 'danh từ', meaning: 'thực đơn', han_viet: 'thái đơn' },
    { hanzi: '简单', pinyin: 'jiǎndān', pos: 'tính từ', meaning: 'đơn giản', han_viet: 'giản đơn' },
    { hanzi: '香蕉', pinyin: 'xiāngjiāo', pos: 'danh từ', meaning: 'chuối tiêu', han_viet: 'hương tiêu' },
  ],

  sections: [
    {
      kind: 'examples', label: 'Câu chữ 把 (3)', title: 'Câu chữ 把: A把B + động từ + bổ ngữ kết quả / phương hướng',
      intro: 'Mẫu câu "A把B + động từ + bổ ngữ chỉ kết quả/phương hướng" cho biết một hành động khiến người hay sự vật xác định đạt kết quả nào đó, hoặc làm thay đổi vị trí của người hay sự vật đó.',
      groups: [{ label: 'Ví dụ', items: [['我把衣服洗干净了。', 'Wǒ bǎ yīfu xǐ gānjìng le.', 'Tôi đã giặt sạch quần áo.'], ['妈妈还没把饭做好呢。', 'Māma hái méi bǎ fàn zuò hǎo ne.', 'Mẹ chưa nấu xong cơm.'], ['请同学们把铅笔拿出来。', 'Qǐng tóngxuémen bǎ qiānbǐ ná chūlai.', 'Mời các em lấy bút chì ra.'], ['你把水果拿过来。', 'Nǐ bǎ shuǐguǒ ná guòlai.', 'Cậu mang trái cây qua đây.']] }],
    },
    {
      kind: 'examples', label: '先…再…然后', title: 'Cấu trúc 先……，再/又……，然后……',
      intro: 'Diễn tả trình tự các hành động. 再 chỉ hành động chưa xảy ra, 又 chỉ hành động đã xảy ra.',
      groups: [{ label: 'Ví dụ', items: [['回家以后，我先做作业，然后吃饭。', 'Huí jiā yǐhòu, wǒ xiān zuò zuòyè, ránhòu chī fàn.', 'Về nhà tôi làm bài tập trước, rồi ăn cơm.'], ['我先坐了一个小时公共汽车，又坐了一会儿地铁才到小刚家。', 'Wǒ xiān zuòle yí ge xiǎoshí gōnggòng qìchē, yòu zuòle yíhuìr dìtiě cái dào Xiǎogāng jiā.', 'Tôi đi xe buýt một tiếng, rồi đi tàu điện thêm một lúc mới đến nhà Tiểu Cương.'], ['你先把电视节目看完吧，然后再给我回电话。', 'Nǐ xiān bǎ diànshì jiémù kànwán ba, ránhòu zài gěi wǒ huí diànhuà.', 'Bạn xem hết chương trình đã, rồi gọi lại cho tôi.'], ['先把米饭做好，然后再把一块块新鲜的水果放进去。', 'Xiān bǎ mǐfàn zuò hǎo, ránhòu zài bǎ yí kuàikuài xīnxiān de shuǐguǒ fàng jìnqu.', 'Nấu cơm xong, rồi cho từng miếng trái cây tươi vào.']] }],
    },
    {
      kind: 'examples', label: 'Đọc cụm từ', title: 'Đọc to các cụm từ và câu (练习 1)',
      clip: { label: '14-5 · Đọc to các cụm từ và câu', src: A + 'l14-5.mp3' },
      intro: 'Bấm để nghe từng cụm.',
      groups: [{ label: 'Cụm từ', items: [
        ['打扫一下', 'dǎsǎo yíxià', 'quét dọn một chút'], ['打扫教室', 'dǎsǎo jiàoshì', 'dọn lớp học'], ['你怎么还不打扫房间啊？', 'nǐ zěnme hái bù dǎsǎo fángjiān a?', 'sao bạn còn chưa dọn phòng?'],
        ['不干净', 'bù gānjìng', 'không sạch'], ['把手洗干净', 'bǎ shǒu xǐ gānjìng', 'rửa sạch tay'], ['洗澡', 'xǐ zǎo', 'tắm'], ['洗了一个小时澡', 'xǐle yí ge xiǎoshí zǎo', 'tắm một tiếng'],
        ['一个节目', 'yí ge jiémù', 'một chương trình'], ['你先把电视节目看完吧', 'nǐ xiān bǎ diànshì jiémù kànwán ba', 'bạn xem hết chương trình ti vi đã'], ['常常刮风', 'chángcháng guā fēng', 'thường nổi gió'], ['外面没刮风', 'wàimiàn méi guā fēng', 'bên ngoài không có gió'],
      ] }],
    },
  ],

  notes: [
    {
      title: 'Câu chữ 把 (3): bổ ngữ kết quả / phương hướng',
      body: 'A把B + động từ + bổ ngữ kết quả/phương hướng: 我把衣服洗干净了, 妈妈还没把饭做好, 请同学们把铅笔拿出来, 你把水果拿过来. Phủ định (没, 别) đặt trước 把.',
      say: '你把水果拿过来',
    },
    {
      title: 'Cấu trúc 先……，再/又……，然后……',
      body: '先 … 再/又 … 然后 … diễn tả trình tự các hành động. 再 chỉ hành động chưa xảy ra; 又 chỉ hành động đã xảy ra.',
      say: '先把米饭做好，然后再放水果',
    },
    {
      title: 'Cách thành lập từ mới (旧字新词)',
      body: '名字 + 菜单 = 名单 (danh sách); 读 + 声音 = 读音 (cách đọc); 买 + 菜单 = 买单 (thanh toán).',
      say: '名单',
    },
    {
      title: 'Tục ngữ: 先到先得',
      body: 'Người đến sớm sẽ được trước. "先" nghĩa là sớm. Đồ vật có hạn nên người đến sớm nhận được, người đến muộn thì hết phần. Ngày nay còn dùng để khuyên mọi người phải tích cực, chủ động, chuẩn bị và bắt tay vào làm càng sớm càng tốt.',
      say: '先到先得',
    },
  ],

  writeChars: ['扫', '净', '澡', '亮', '盘', '故', '声', '蕉'],

  drills: [],

  qa: [
    {
      title: 'Trả lời câu hỏi theo bài khóa (练习 4)',
      items: [
        { q: '周明在做什么？他太太想让他做什么？', hint: '周明在看电视，他太太想让他把茶和杯子放好，然后把冰箱里的西瓜拿出来。' },
        { q: '小刚为什么没接电话？', hint: '小刚刚洗了个澡，没听见。' },
        { q: '同事为什么给小刚打电话？', hint: '同事想问问小刚公司里的一些事情。' },
        { q: '小明和同学打算做什么？', hint: '他们打算坐在外边一边看月亮一边吃东西。' },
        { q: '怎么做水果饭？', hint: '先把米饭做好，然后再把一块块新鲜的水果放进去，水果饭就做好了。' },
        { q: '为什么要多吃水果？', hint: '多吃水果对身体好。' },
      ],
    },
    {
      title: 'Hoạt động (运用)',
      items: [
        { q: 'Theo cặp: xem bản đồ tàu điện ngầm Bắc Kinh, nói cách đi', hint: 'Mẫu: 从雍和宫到王府井，先坐5号线到东单，然后换1号线到王府井。' },
        { q: 'Theo nhóm: đưa cừu, hoa, hổ qua sông, mỗi lần một thứ — dùng 先…再…然后…', hint: '我先把羊送过去，再……，然后……' },
      ],
    },
  ],

  sentences: [
    { parts: ['客人', '就', '要', '来', '了'], pinyin: 'Kèrén jiù yào lái le.', vi: 'Khách sắp đến rồi.' },
    { parts: ['他们', '会', '把', '房间', '打扫', '干净'], pinyin: 'Tāmen huì bǎ fángjiān dǎsǎo gānjìng.', vi: 'Chúng sẽ dọn sạch phòng.' },
    { parts: ['先', '把', '茶', '和', '杯子', '放', '好'], pinyin: 'Xiān bǎ chá hé bēizi fàng hǎo.', vi: 'Trước hết để trà và cốc cho gọn.' },
    { parts: ['你', '把', '水果', '拿', '过来'], pinyin: 'Nǐ bǎ shuǐguǒ ná guòlai.', vi: 'Cậu mang trái cây qua đây.' },
    { parts: ['月亮', '像', '白色', '的', '盘子', '一样'], pinyin: 'Yuèliang xiàng báisè de pánzi yíyàng.', vi: 'Trăng giống cái đĩa trắng.' },
    { parts: ['先', '把', '米饭', '做', '好', '再', '放', '水果'], pinyin: 'Xiān bǎ mǐfàn zuò hǎo zài fàng shuǐguǒ.', vi: 'Nấu cơm xong rồi cho trái cây vào.' },
  ],

  dictations: [
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 1–5)',
      hint: 'A 节目 · B 故事 · C 菜单 · D 香蕉 · E 盘子. Gõ chữ cái A–E.',
      items: [
        { prompt: '每天晚上，爸爸都要给女儿讲一个（ ）。', answer: 'B', gloss: '故事' }, { prompt: '我来做饭，你来洗（ ），怎么样？', answer: 'E', gloss: '盘子' },
        { prompt: '我们买几斤（ ）吧，家里没有水果了。', answer: 'D', gloss: '香蕉' }, { prompt: '跟朋友一起喝着饮料看电视（ ），是最快乐的事。', answer: 'A', gloss: '节目' },
        { prompt: '服务员，请拿（ ）过来，我们点菜。', answer: 'C', gloss: '菜单' },
      ],
    },
    {
      title: 'Giáo trình 练习 2 · Điền từ (câu 6–10)',
      hint: 'A 打扫 · B 干净 · C 简单 · D 声音 · E 像. Gõ chữ cái A–E.',
      items: [
        { prompt: '我们什么时候吃晚饭？ 先（ ）完房间再吃。', answer: 'A', gloss: '打扫' }, { prompt: '听！是谁在外边说话？ 没有（ ）啊。', answer: 'D', gloss: '声音' },
        { prompt: '你觉得洗衣服很（ ），可我觉得很难。 那你觉得做什么不难呢？', answer: 'C', gloss: '简单' }, { prompt: '那么多衣服，终于洗完了！ 都洗（ ）了吗？', answer: 'B', gloss: '干净' },
        { prompt: '这个地方真美！ 是啊，（ ）画儿一样。', answer: 'E', gloss: '像' },
      ],
    },
    {
      title: 'Giáo trình 注释 · Hoàn thành đối thoại (gõ phần còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: 'A: 好吧，你把这个节目（ ）就去写作业。', answer: '看完', gloss: '把 + 看完' },
        { prompt: 'A: 房间里太热了。 B: （ ）。', answer: '那我们出去走走吧', gloss: 'đề nghị' },
        { prompt: 'A: 下课以后，你做什么？ B: （ ）。', answer: '我先回家吃饭，然后再做作业', gloss: '先…然后' },
        { prompt: 'A: 考完试了，你有什么打算？ B: （ ）。', answer: '我打算先跟家人去旅游，然后回家乡', gloss: '先…然后' },
      ],
    },
    {
      title: 'Giáo trình 练习 3 · Hoàn thành đối thoại (gõ phần còn thiếu)',
      hint: 'Gõ đúng theo đáp án sách.',
      items: [
        { prompt: 'A: 今天下午你做什么？ B: 我先打扫房间，然后（ ）。', answer: '去图书馆', gloss: '然后' },
        { prompt: 'A: 你要走了？你还没有把饭（ ）。', answer: '吃完呢', gloss: '把 + 吃完' },
        { prompt: 'A: 今天你下了课就回家吧。 B: 我先去（ ），然后回家。', answer: '做运动', gloss: '先…然后' },
        { prompt: 'A: 别着急，我（ ），然后回来帮你。', answer: '先去开会', gloss: '先…然后' },
        { prompt: 'B: 好的。回来以后，我先帮你找宾馆，（ ）。', answer: '然后买飞机票', gloss: '然后' },
      ],
    },
  ],
}
