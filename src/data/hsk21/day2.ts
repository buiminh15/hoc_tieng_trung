import type { DayContent, Ex, ErrQ } from './types'

/**
 * Tuần 1 · Thứ Ba: Nghĩa mở rộng của bổ ngữ xu hướng (趋向补语的引申用法), sách trang 17–30.
 * Phần dịch tiếng Việt và pinyin do app tự thêm.
 */

const x = (h: string, p: string, vi: string, note?: string, tag?: string): Ex => ({ h, p, vi, note, tag })
const seg = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'segment', parts, answer, topic, fix, why })
const sen = (parts: string[], answer: number, topic: string, fix: string, why: string): ErrQ => ({ kind: 'sentence', parts, answer, topic, fix, why })

export const day2: DayContent = {
  intro:
    'Ngoài nghĩa gốc, bổ ngữ xu hướng còn có nghĩa mở rộng, và phần lớn đó là thói quen dùng từ của tiếng Hán. Vì vậy khi học, hãy cảm nhận thói quen ấy của người Trung Quốc: nhìn hình minh họa của thầy, từ nghĩa gốc mà suy ra nghĩa mở rộng. Lâu dần những cách dùng này sẽ thành thói quen của bạn. Có thể nói đây là cơ hội tốt để rèn ngữ cảm, nên mong bạn nghiêm túc đi theo mạch suy nghĩ của thầy.',

  focusTitle: 'Năm nhóm tổ hợp hôm nay',

  cheat: {
    title: 'Bảng tra nhanh: nghĩa gốc → nghĩa mở rộng',
    lead: 'Mỗi tổ hợp đều có nghĩa gốc là hướng đi so với vị trí người nói (来 = đi về phía người nói, 去 = rời xa người nói). Các nghĩa mở rộng đều mọc ra từ nghĩa gốc ấy, nên hãy nhìn hình rồi tự suy ra, đừng học thuộc lòng.',
    head: ['Tổ hợp', 'Nghĩa gốc', 'Nghĩa mở rộng thường gặp'],
    rows: [
      { key: '上来', glyph: 'shangLai', cells: ['Từ thấp lên cao, người nói ở trên', 'Người nói là cấp trên · làm được, đạt tới (hay đi với 得/不)'] },
      { key: '上去', glyph: 'shangQu', cells: ['Từ thấp lên cao, người nói ở dưới', 'Người nói là cấp dưới · muốn đạt tới (tương lai) · thêm vào, gắn lên'] },
      { key: '下来', glyph: 'xiaLai', cells: ['Từ trên xuống, người nói ở dưới', 'Cấp dưới · từ quá khứ đến nay · tách rời · cố định lại · mạnh → yếu'] },
      { key: '下去', glyph: 'xiaQu', cells: ['Từ trên xuống, người nói ở trên', 'Cấp trên · tiếp diễn đến tương lai'] },
      { key: '出来', glyph: 'chuLai', cells: ['Từ trong ra ngoài, về phía người nói', 'Có kết quả (không → có, chưa rõ → rõ) · nhận ra, phân biệt'] },
      { key: '出去', glyph: 'chuQu', cells: ['Từ trong ra ngoài, xa người nói', 'Thực hiện được · lộ ra công khai (bí mật bị nói ra)'] },
      { key: '过来', glyph: 'guoLai', cells: ['Từ nơi khác sang chỗ người nói', 'Hồi phục (xấu → tốt) · từ trước đến nay · vượt qua khó khăn · làm xuể (得/不)'] },
      { key: '过去', glyph: 'guoQu', cells: ['Từ chỗ người nói sang nơi khác', 'Ngất đi (tốt → xấu) · thời gian đã qua · tạm được (过得去)'] },
      { key: '起来', glyph: 'qiLai', cells: ['Từ thấp lên (đứng dậy)', 'Bắt đầu và tăng dần · yếu → mạnh · gom lại · nhớ ra · "khi…"'] },
    ],
  },

  sections: [
    // ───────────────────────── 上来 / 上去 ─────────────────────────
    {
      id: 'shang', hanzi: '上来 · 上去', pinyin: 'shànglái · shàngqù', title: 'Đi lên',
      intro: 'Cả hai đều chỉ động tác đi từ thấp lên cao; khác nhau ở chỗ người nói đứng ở đâu. 上来: người nói ở trên, động tác đã đạt tới. 上去: người nói ở dưới, động tác còn hướng tới (mong muốn, tương lai).',
      groups: [
        {
          title: '〈动〉 + 上来', glyph: 'shangLai',
          patterns: [
            {
              formula: '〈动〉 + 上来', title: 'Từ dưới lên trên, người nói là cấp trên',
              note: 'Nghĩa mở rộng theo địa vị: người nói ở vị thế cao hơn người kia.',
              examples: [
                x('下课后，请同学们把作业[交上来]。', 'Xiàkè hòu, qǐng tóngxuémen bǎ zuòyè jiāo shànglái.', 'Tan học, mời các bạn nộp bài tập lên.', 'Người nói là thầy giáo.'),
                x('他是刚从基层[调上来]的。', 'Tā shì gāng cóng jīcéng diào shànglái de.', 'Anh ấy vừa được điều từ cơ sở lên.'),
              ],
            },
            {
              formula: '〈动〉 + 上来', title: 'Hoàn thành thành công một động tác',
              note: 'Hay dùng chung với 得 / 不 (bổ ngữ khả năng): 答得上来, 答不上来.',
              examples: [
                x('经过努力，我的学习已经[跟上来]了。', 'Jīngguò nǔlì, wǒ de xuéxí yǐjīng gēn shànglái le.', 'Nhờ cố gắng, việc học của tôi đã theo kịp rồi.'),
                x('他很聪明，每个问题都[答得上来]。', 'Tā hěn cōngming, měi ge wèntí dōu dá de shànglái.', 'Cậu ấy rất thông minh, câu hỏi nào cũng trả lời được.'),
              ],
            },
          ],
        },
        {
          title: '〈动〉 + 上去', glyph: 'shangQu',
          patterns: [
            {
              formula: '〈动〉 + 上去', title: 'Từ dưới lên trên, người nói là cấp dưới',
              note: 'Ngược với 上来: người nói ở vị thế thấp hơn.',
              examples: [
                x('我的作业[交上去]了。', 'Wǒ de zuòyè jiāo shàngqù le.', 'Bài tập của tôi đã nộp lên rồi.'),
                x('我们的问题已经[反映上去]了。', 'Wǒmen de wèntí yǐjīng fǎnyìng shàngqù le.', 'Vấn đề của chúng tôi đã được phản ánh lên trên.'),
              ],
            },
            {
              formula: '〈动〉 + 上去', title: 'Muốn hoàn thành thành công một động tác',
              note: 'Hướng về tương lai: mong muốn đạt tới.',
              examples: [
                x('我希望通过自己的努力把汉语水平[提上去]。', 'Wǒ xīwàng tōngguò zìjǐ de nǔlì bǎ Hànyǔ shuǐpíng tí shàngqù.', 'Tôi hy vọng nhờ nỗ lực của mình nâng trình độ tiếng Hán lên.'),
                x('这学期你的成绩一定要[搞上去]。', 'Zhè xuéqī nǐ de chéngjì yídìng yào gǎo shàngqù.', 'Học kỳ này điểm của bạn nhất định phải nâng lên.'),
              ],
            },
            {
              formula: '〈动〉 + 上去', title: 'Thêm vào hoặc gắn vào một chỗ',
              note: 'Đối lập với 下来 (tách ra).',
              examples: [
                x('我把画[挂上去]了。', 'Wǒ bǎ huà guà shàngqù le.', 'Tôi treo bức tranh lên rồi.'),
                x('他把零件[安上去]了。', 'Tā bǎ língjiàn ān shàngqù le.', 'Anh ấy lắp bộ phận vào rồi.'),
              ],
            },
          ],
        },
      ],
    },

    // ───────────────────────── 下来 / 下去 ─────────────────────────
    {
      id: 'xia', hanzi: '下来 · 下去', pinyin: 'xiàlái · xiàqù', title: 'Đi xuống',
      intro: 'Cùng là đi từ trên xuống. 下来: người nói ở dưới; về thời gian là từ quá khứ kéo đến hiện tại. 下去: người nói ở trên; về thời gian là từ hiện tại kéo sang tương lai. Cặp này là chỗ HSK rất hay gài bẫy.',
      groups: [
        {
          title: '〈动 / 形〉 + 下来', glyph: 'xiaLai',
          patterns: [
            {
              formula: '〈动 / 形〉 + 下来', title: 'Từ trên xuống, người nói là cấp dưới',
              note: 'Nghĩa mở rộng theo địa vị.',
              examples: [
                x('老师把咱们的作业[发下来]了。', 'Lǎoshī bǎ zánmen de zuòyè fā xiàlái le.', 'Thầy đã phát bài tập của chúng ta xuống rồi.'),
                x('工作已经[分配下来]了，我们开始干吧。', 'Gōngzuò yǐjīng fēnpèi xiàlái le, wǒmen kāishǐ gàn ba.', 'Công việc đã được giao xuống, chúng ta bắt đầu làm thôi.'),
              ],
            },
            {
              formula: '〈动 / 形〉 + 下来', title: 'Động tác kéo dài từ quá khứ đến hiện tại',
              note: 'Đã trải qua rồi và còn tới tận bây giờ. Hay gặp trong đề thi cặp 下来 / 下去.',
              verbs: ['坚持', '听', '讲', '跑', '传'],
              examples: [x('虽然来中国以后遇到了不少困难，但是我还是[坚持了下来]。', 'Suīrán lái Zhōngguó yǐhòu yùdào le bù shǎo kùnnan, dànshì wǒ háishi jiānchí le xiàlái.', 'Tuy sang Trung Quốc gặp không ít khó khăn, nhưng tôi vẫn kiên trì được.')],
            },
            {
              formula: '〈动 / 形〉 + 下来', title: 'Làm cho sự vật tách rời',
              note: 'Đối lập với 上去 (gắn vào).',
              verbs: ['脱', '撕', '拔', '摘', '割', '拆', '剪'],
              examples: [
                x('快把湿衣服[脱下来]。', 'Kuài bǎ shī yīfu tuō xiàlái.', 'Mau cởi bộ đồ ướt ra.'),
                x('他从本子上[撕下]一张纸[来]。', 'Tā cóng běnzi shang sīxià yì zhāng zhǐ lái.', 'Anh ấy xé một tờ giấy từ quyển vở.'),
              ],
            },
            {
              formula: '〈动 / 形〉 + 下来', title: 'Làm cố định, không động hay đổi nữa',
              note: 'Sự vật dừng lại, được ghi lại, giữ lại.',
              examples: [
                x('老师说的话，你都[记下来]了吗？', 'Lǎoshī shuō de huà, nǐ dōu jì xiàlái le ma?', 'Lời thầy nói, bạn ghi lại hết chưa?'),
                x('红灯一亮，车都[停了下来]。', 'Hóngdēng yí liàng, chē dōu tíng le xiàlái.', 'Đèn đỏ vừa sáng, xe đều dừng lại.'),
              ],
            },
            {
              formula: '〈形〉 + 下来', title: 'Trạng thái từ mạnh sang yếu',
              note: 'Chỉ dùng với tính từ biến đổi theo hướng yếu đi.',
              verbs: ['安静', '暗', '黑', '冷'],
              examples: [
                x('天渐渐[暗下来]了。', 'Tiān jiànjiàn àn xiàlái le.', 'Trời dần tối lại.'),
                x('教室里[安静下来]了。', 'Jiàoshì lǐ ānjìng xiàlái le.', 'Trong lớp học yên tĩnh lại.'),
              ],
            },
          ],
        },
        {
          title: '〈动 / 形〉 + 下去', glyph: 'xiaQu',
          patterns: [
            {
              formula: '〈动 / 形〉 + 下去', title: 'Từ trên xuống, người nói là cấp trên',
              note: 'Ngược với 下来.',
              examples: [x('我把你们的作业[发下去]了。', 'Wǒ bǎ nǐmen de zuòyè fā xiàqù le.', 'Tôi đã phát bài tập của các bạn xuống rồi.', 'Người nói là thầy giáo.')],
            },
            {
              formula: '〈动 / 形〉 + 下去', title: 'Động tác, trạng thái đã có và sẽ còn tiếp tục',
              note: 'Hướng về tương lai: sẽ kéo dài tiếp.',
              examples: [
                x('我很想在中国一直[住下去]。', 'Wǒ hěn xiǎng zài Zhōngguó yìzhí zhù xiàqù.', 'Tôi rất muốn cứ ở lại Trung Quốc mãi.'),
                x('这儿的天气能这样[好下去]吗？', 'Zhèr de tiānqì néng zhèyàng hǎo xiàqù ma?', 'Thời tiết ở đây có thể cứ tốt thế này mãi không?'),
              ],
            },
          ],
        },
      ],
    },

    // ───────────────────────── 出来 / 出去 ─────────────────────────
    {
      id: 'chu', hanzi: '出来 · 出去', pinyin: 'chūlái · chūqù', title: 'Đi ra',
      intro: 'Nghĩa gốc là từ trong ra ngoài. 出来 nghiêng về chỗ có kết quả hoặc nhận ra điều gì (từ không đến có, từ mờ đến rõ); 出去 nghiêng về việc thực hiện được và điều bí mật bị đưa ra công khai.',
      groups: [
        {
          title: '〈动〉 + 出来', glyph: 'chuLai',
          patterns: [
            {
              formula: '〈动〉 + 出来', title: 'Xuất hiện hoặc sinh ra kết quả',
              note: 'Sự vật từ không đến có, từ chưa rõ đến rõ.',
              verbs: ['写', '画', '弄', '编', '排', '研究', '整理', '设计', '印', '想'],
              examples: [
                x('快把东西[整理出来]。', 'Kuài bǎ dōngxi zhěnglǐ chūlái.', 'Mau sắp xếp đồ đạc ra đi.'),
                x('我已经[写出]论文草稿[来]了。', 'Wǒ yǐjīng xiěchū lùnwén cǎogǎo lái le.', 'Tôi đã viết xong bản nháp luận văn.'),
                x('我[想出]办法[来]了。', 'Wǒ xiǎngchū bànfǎ lái le.', 'Tôi nghĩ ra cách rồi.'),
              ],
            },
            {
              formula: '〈动〉 + 出来', title: 'Phân biệt, nhận ra người hoặc vật',
              note: 'Nhờ động tác mà nhận ra được. Phủ định hay dùng dạng 认不出来.',
              verbs: ['听', '看', '认', '查', '识别', '辨认', '辨别'],
              examples: [
                x('我[听出]你的声音[来]了。', 'Wǒ tīngchū nǐ de shēngyīn lái le.', 'Tôi nghe ra giọng của bạn rồi.'),
                x('几年不见，我都[认不出]你[来]了。', 'Jǐ nián bú jiàn, wǒ dōu rèn bu chū nǐ lái le.', 'Mấy năm không gặp, tôi không nhận ra bạn nữa.'),
              ],
            },
          ],
        },
        {
          title: '〈动〉 + 出去', glyph: 'chuQu',
          patterns: [
            {
              formula: '〈动〉 + 出去', title: 'Thực hiện được: từ trong ra ngoài, từ gần ra xa, từ bí mật ra công khai',
              note: 'Gặp nhiều với các động từ bán, cho thuê, truyền tin, công bố, làm lộ.',
              verbs: ['卖', '销售', '租', '传', '说', '宣扬', '公布', '泄露 xièlòu'],
              examples: [
                x('那间房子[租出去]了没有？', 'Nà jiān fángzi zū chūqù le méiyǒu?', 'Căn phòng đó cho thuê được chưa?'),
                x('这件事任何人都不能[说出去]。', 'Zhè jiàn shì rènhé rén dōu bù néng shuō chūqù.', 'Chuyện này ai cũng không được nói ra ngoài.'),
              ],
            },
          ],
        },
      ],
    },

    // ───────────────────────── 过来 / 过去 ─────────────────────────
    {
      id: 'guo', hanzi: '过来 · 过去', pinyin: 'guòlái · guòqù', title: 'Đi sang',
      intro: 'Nghĩa gốc là chuyển từ chỗ này sang chỗ kia. 过来 sang chỗ người nói, nghĩa mở rộng thường là trở lại trạng thái tốt, bình thường, hoặc vượt qua một giai đoạn khó. 过去 rời chỗ người nói, nghĩa mở rộng thường là chuyển sang trạng thái xấu hoặc thời gian đã trôi qua.',
      groups: [
        {
          title: '〈动 / 形〉 + 过来', glyph: 'guoLai',
          patterns: [
            {
              formula: '〈动 / 形〉 + 过来', title: 'Từ trạng thái xấu, bất thường trở lại tốt, bình thường',
              note: 'Hồi phục, tỉnh lại, hiểu ra, sửa lại.',
              verbs: ['苏醒', '恢复', '明白', '缓', '抢救', '暖和', '改', '活', '觉悟', '纠正'],
              examples: [
                x('一觉[醒过来]，天就亮了。', 'Yí jiào xǐng guòlái, tiān jiù liàng le.', 'Tỉnh dậy sau một giấc thì trời đã sáng.'),
                x('他讲了半天我才[明白过来]。', 'Tā jiǎng le bàntiān wǒ cái míngbai guòlái.', 'Anh ấy giảng mãi tôi mới hiểu ra.'),
              ],
            },
            {
              formula: '〈动〉 + 过来', title: 'Từ nơi cũ đến nơi hiện tại, hoặc từ tình hình cũ đến tình hình hiện tại',
              note: 'Chỉ dùng với động từ, thường không có tân ngữ.',
              examples: [
                x('我刚从北大[转过来]。', 'Wǒ gāng cóng Běidà zhuǎn guòlái.', 'Tôi vừa chuyển từ Bắc Đại sang.'),
                x('这本小说是[翻译过来]的。', 'Zhè běn xiǎoshuō shì fānyì guòlái de.', 'Cuốn tiểu thuyết này là bản dịch.'),
              ],
            },
            {
              formula: '〈动〉 + 过来 + 了', title: 'Đã trải qua tình huống khó khăn, nay đã xong',
              note: 'Cuối câu thường có 了.',
              verbs: ['对付', '挣扎', '挨', '忍', '撑', '熬', '挺'],
              examples: [
                x('那么艰难的日子，我们都[熬过来]了。', 'Nàme jiānnán de rìzi, wǒmen dōu áo guòlái le.', 'Những ngày khó khăn đến vậy, chúng tôi đều vượt qua rồi.'),
                x('哎，总算[挺过来]了。', 'Āi, zǒngsuàn tǐng guòlái le.', 'Haizz, cuối cùng cũng gắng gượng vượt qua.'),
              ],
            },
            {
              formula: '〈动〉 + 得 / 不 + 过来', title: 'Số lượng rất nhiều: chủ ngữ có (không có) khả năng làm xuể',
              note: 'Hay đi cùng 得 / 不.',
              examples: [
                x('工作太多，我一个人[忙不过来]。', 'Gōngzuò tài duō, wǒ yí ge rén máng bu guòlái.', 'Việc nhiều quá, một mình tôi bận không xuể.'),
                x('这点儿账，我[算得过来]。', 'Zhè diǎnr zhàng, wǒ suàn de guòlái.', 'Món sổ sách nhỏ này tôi tính xuể.'),
              ],
            },
          ],
        },
        {
          title: '〈动〉 + 过去', glyph: 'guoQu',
          patterns: [
            {
              formula: '〈动〉 + 过去', title: 'Từ trạng thái tốt, bình thường sang xấu, bất thường',
              note: 'Ngược với 过来.',
              examples: [
                x('老王太累了，[昏过去]了。', 'Lǎo Wáng tài lèi le, hūn guòqù le.', 'Lão Vương mệt quá, ngất đi rồi.'),
                x('病人已经[晕死过去]了，又被他救活了。', 'Bìngrén yǐjīng yūnsǐ guòqù le, yòu bèi tā jiùhuó le.', 'Bệnh nhân đã ngất đi, lại được anh ấy cứu sống.'),
              ],
            },
            {
              formula: '〈动〉 + 过去', title: 'Đã trải qua một khoảng thời gian, nay đã kết thúc',
              note: 'Có thể không cần động từ. Khi chỉ nói thời gian, đối lập với 到来.',
              examples: [
                x('圣诞节已经[过去]了。', 'Shèngdàn Jié yǐjīng guòqù le.', 'Giáng sinh đã qua rồi.'),
                x('一天的时间就这么[过去]了。', 'Yì tiān de shíjiān jiù zhème guòqù le.', 'Một ngày trôi qua như thế.'),
              ],
            },
            {
              formula: '〈动〉 + 得 / 不 + 过去', title: 'Còn tạm được, không tệ',
              note: 'Hay dùng với 说, 看; cũng có thể nói thẳng 过得去.',
              verbs: ['说', '看'],
              examples: [
                x('这件衣服还[看得过去]。', 'Zhè jiàn yīfu hái kàn de guòqù.', 'Bộ đồ này còn tạm coi được.'),
                x('这样的考试成绩也太[说不过去]了。', 'Zhèyàng de kǎoshì chéngjì yě tài shuō bu guòqù le.', 'Kết quả thi như thế thì thật khó biện minh.'),
                x('一家六口靠爸爸一个人的工资，日子还算[过得去]吧。', 'Yì jiā liù kǒu kào bàba yí ge rén de gōngzī, rìzi hái suàn guò de qù ba.', 'Cả nhà sáu người nhờ lương một mình bố, cuộc sống coi như cũng tạm được.'),
              ],
            },
          ],
        },
      ],
    },

    // ───────────────────────── 起来 ─────────────────────────
    {
      id: 'qi', hanzi: '起来', pinyin: 'qǐlái', title: 'Bắt đầu và tăng dần',
      intro: 'Nghĩa gốc là từ thấp đứng lên. Từ đó mọc ra các nghĩa: bắt đầu rồi càng lúc càng sâu, yếu thành mạnh, tản mát thành tập trung, nhớ ra điều đã quên, và "khi…". Lưu ý đối lập: 起来 ↔ 下来.',
      groups: [
        {
          title: '〈动 / 形〉 + 起来', glyph: 'qiLai',
          patterns: [
            {
              formula: '〈动〉 + 起 + 〈宾〉 + 来', title: 'Động tác bắt đầu và mức độ ngày càng sâu',
              note: 'Tân ngữ đặt giữa 起 và 来.',
              examples: [
                x('他俩一见面就[吵起架来]了。', 'Tā liǎ yí jiànmiàn jiù chǎoqǐ jià lái le.', 'Hai người vừa gặp là cãi nhau.'),
                x('音乐响起，大家[跳起舞来]。', 'Yīnyuè xiǎngqǐ, dàjiā tiàoqǐ wǔ lái.', 'Nhạc vang lên, mọi người nhảy múa.'),
              ],
            },
            {
              formula: '〈形〉 + 起来', title: 'Trạng thái từ yếu sang mạnh',
              note: 'Chỉ dùng với tính từ biến đổi theo hướng mạnh lên.',
              verbs: ['热闹', '亮', '大', '热'],
              examples: [
                x('天[亮了起来]。', 'Tiān liàng le qǐlái.', 'Trời sáng lên.'),
                x('他一到，会场立刻[热闹起来]了。', 'Tā yí dào, huìchǎng lìkè rènao qǐlái le.', 'Anh ấy vừa đến, hội trường lập tức náo nhiệt hẳn.'),
              ],
            },
            {
              formula: '〈动〉 + 起来', title: 'Sự vật từ tản mát đến tập trung',
              note: 'Đối lập với 下来 ở nghĩa gom, cất đi.',
              verbs: ['存', '捆', '扎', '收', '装', '攒', '积累', '收集', '汇集', '堆', '收拾'],
              examples: [
                x('把桌子上的书都[收起来]吧。', 'Bǎ zhuōzi shang de shū dōu shōu qǐlái ba.', 'Cất hết sách trên bàn đi.'),
                x('经验都是一点点[积累起来]的。', 'Jīngyàn dōu shì yìdiǎndiǎn jīlěi qǐlái de.', 'Kinh nghiệm đều là tích lũy từng chút một.'),
              ],
            },
            {
              formula: '〈动〉 + 起来', title: 'Nhớ lại điều đã quên',
              note: 'Hồi tưởng có kết quả.',
              verbs: ['想', '记', '回忆', '回想'],
              examples: [
                x('我[记起来]了，我刚才把钥匙放在洗手池边上了。', 'Wǒ jì qǐlái le, wǒ gāngcái bǎ yàoshi fàng zài xǐshǒuchí biān shang le.', 'Tôi nhớ ra rồi, vừa nãy tôi để chìa khóa bên bồn rửa tay.'),
                x('我常[回忆起]大学生活[来]。', 'Wǒ cháng huíyì qǐ dàxué shēnghuó lái.', 'Tôi thường nhớ lại cuộc sống đại học.'),
              ],
            },
            {
              formula: '〈动〉 + 起来', title: 'Động tác đang tiến hành, nghĩa là "……的时候"',
              note: 'Chỉ dùng với động từ có tính động tác mạnh.',
              verbs: ['笑', '说', '看'],
              examples: [
                x('她[笑起来]很美，很迷人。', 'Tā xiào qǐlái hěn měi, hěn mírén.', 'Lúc cô ấy cười rất đẹp, rất cuốn hút.'),
                x('[说起]这件事[来]，我就生气。', 'Shuōqǐ zhè jiàn shì lái, wǒ jiù shēngqì.', 'Nói đến chuyện này là tôi tức.'),
              ],
            },
          ],
        },
      ],
    },
  ],

  // ───────────────────────── 学习要点 (bảng ghi nhớ) ─────────────────────────
  boards: [
    {
      id: 'xiaqu', hanzi: '动 / 形 + 下去', title: 'Đi xuống, người nói ở trên', glyph: 'xiaQu',
      rows: [
        { label: 'Vị trí (nghĩa gốc)', examples: [x('他从山上[走下去]。', 'Tā cóng shān shang zǒu xiàqù.', 'Anh ấy từ trên núi đi xuống.', 'Người nói đang ở trên núi.')] },
        { label: 'Địa vị', examples: [x('我[安排下去]的事你做好了吗？', 'Wǒ ānpái xiàqù de shì nǐ zuòhǎo le ma?', 'Việc tôi giao xuống bạn làm xong chưa?', 'Cấp trên nói với cấp dưới.')] },
        {
          label: 'Thời gian',
          examples: [
            x('我去年来的中国，真想一直在中国[住下去]。', 'Wǒ qùnián lái de Zhōngguó, zhēn xiǎng yìzhí zài Zhōngguó zhù xiàqù.', 'Tôi sang Trung Quốc năm ngoái, thật muốn ở lại mãi.', undefined, 'quá khứ → tương lai'),
            x('今天的天气真好。以后能这样[好下去]吗？', 'Jīntiān de tiānqì zhēn hǎo. Yǐhòu néng zhèyàng hǎo xiàqù ma?', 'Hôm nay trời thật đẹp. Sau này có thể cứ đẹp thế mãi không?', undefined, 'hiện tại → tương lai'),
          ],
        },
        {
          label: 'Điểm thi',
          points: [{
            text: '下去 chỉ tiếp diễn đến tương lai.',
            fixes: [{ wrong: '倒希望生活就这样平静下来', right: '倒希望生活就这样平静下去', ref: 'Kiểm tra 3 · D', why: '"平静" là trạng thái kéo dài từ quá khứ sang tương lai.' }],
          }],
        },
      ],
    },
    {
      id: 'xialai', hanzi: '动 / 形 + 下来', title: 'Đi xuống, người nói ở dưới', glyph: 'xiaLai',
      rows: [
        { label: 'Vị trí (nghĩa gốc)', examples: [x('你[跳下来]吧，我接着你。', 'Nǐ tiào xiàlái ba, wǒ jiēzhe nǐ.', 'Bạn nhảy xuống đi, tôi đỡ bạn.', 'Người nói ở dưới.')] },
        { label: 'Địa vị', examples: [x('老师[发下来]的作业，我看了又看。', 'Lǎoshī fā xiàlái de zuòyè, wǒ kàn le yòu kàn.', 'Bài tập thầy phát xuống, tôi xem đi xem lại.', 'Người nói là học sinh, tương đương cấp dưới.')] },
        { label: 'Thời gian', examples: [x('终于考完试了，我总算[坚持下来]了。', 'Zhōngyú kǎowán shì le, wǒ zǒngsuàn jiānchí xiàlái le.', 'Cuối cùng thi xong, tôi cũng gắng trụ được.', undefined, 'quá khứ → hiện tại')] },
        {
          label: 'Điểm thi',
          points: [{
            text: '"下去" chỉ việc kéo dài đến tương lai. "下来" chỉ từ quá khứ đến hiện tại.',
            examples: [x('这种游戏是古代流传[____]的。  A 下去　B 下来', 'Zhè zhǒng yóuxì shì gǔdài liúchuán ____ de.', 'Trò chơi này được lưu truyền từ thời cổ.', 'Đáp án B: từ cổ đại đến nay.')],
          }],
        },
        { label: 'Tách rời', text: 'Lấy xuống, đối lập với 上去.', examples: [x('墙上的画怎么[掉下来]了呢？', 'Qiáng shang de huà zěnme diào xiàlái le ne?', 'Bức tranh trên tường sao lại rơi xuống?')] },
        { label: 'Cố định, không đổi', examples: [x('车[停了下来]。', 'Chē tíng le xiàlái.', 'Xe dừng lại.')] },
        {
          label: 'Mạnh → yếu',
          examples: [x('天[暗下来]了。', 'Tiān àn xiàlái le.', 'Trời tối dần.')],
          points: [{ text: 'Điểm thi: trạng thái mạnh dần yếu đi thì dùng 下来.', fixes: [{ wrong: '他才安静下去', right: '他才安静下来', ref: 'Kiểm tra 2 · B', why: 'Cơn giận của "anh ấy" đi từ mạnh đến yếu.' }] }],
        },
      ],
    },
    {
      id: 'shanglai', hanzi: '动 + 上来', title: 'Đi lên, người nói ở trên', glyph: 'shangLai',
      rows: [
        { label: 'Vị trí (nghĩa gốc)', examples: [x('我爬了半个多小时，终于[爬上来]了，山上的风景真美。', 'Wǒ pá le bàn ge duō xiǎoshí, zhōngyú pá shànglái le, shān shang de fēngjǐng zhēn měi.', 'Tôi leo hơn nửa tiếng, cuối cùng cũng lên tới, phong cảnh trên núi thật đẹp.', 'Người nói đã ở trên đỉnh.')] },
        { label: 'Địa vị', examples: [x('下课后，请同学们把作业[交上来]。', 'Xiàkè hòu, qǐng tóngxuémen bǎ zuòyè jiāo shànglái.', 'Tan học, mời các bạn nộp bài tập lên.', 'Người nói là thầy giáo.')] },
        {
          label: 'Thành công, đạt tới',
          examples: [
            x('经过努力，他的学习[赶上来]了。', 'Jīngguò nǔlì, tā de xuéxí gǎn shànglái le.', 'Nhờ cố gắng, việc học của anh ấy đã bắt kịp.'),
            x('这个问题太难了，我也[答不上来]。', 'Zhège wèntí tài nán le, wǒ yě dá bu shànglái.', 'Câu hỏi này khó quá, tôi cũng không trả lời được.'),
          ],
        },
      ],
    },
    {
      id: 'shangqu', hanzi: '动 + 上去', title: 'Đi lên, người nói ở dưới', glyph: 'shangQu',
      rows: [
        { label: 'Vị trí (nghĩa gốc)', examples: [x('这座山太高了，我担心自己[爬不上去]。', 'Zhè zuò shān tài gāo le, wǒ dānxīn zìjǐ pá bu shàngqù.', 'Ngọn núi này cao quá, tôi lo mình không leo lên được.', 'Người nói ở dưới chân núi.')] },
        { label: 'Địa vị', examples: [x('我的作业[交上去]了。', 'Wǒ de zuòyè jiāo shàngqù le.', 'Bài tập của tôi đã nộp lên rồi.', 'Người nói là học sinh.')] },
        {
          label: 'Muốn thành công, hy vọng đạt tới',
          examples: [x('我希望把成绩[搞上去]。', 'Wǒ xīwàng bǎ chéngjì gǎo shàngqù.', 'Tôi hy vọng nâng được thành tích lên.')],
          ps: '"上来" là quá khứ, chỉ việc đã đạt tới. "上去" là tương lai, chỉ việc hy vọng đạt tới.',
          points: [{ text: 'Điểm thi: hy vọng nâng lên thì dùng 上去.', fixes: [{ wrong: '把国民经济提高起来', right: '把国民经济提高上去', ref: 'Kiểm tra 4 · C' }] }],
        },
        {
          label: 'Thêm vào, gắn vào',
          text: 'Đối lập với 下来.',
          examples: [x('请你把这张画[挂上去]。', 'Qǐng nǐ bǎ zhè zhāng huà guà shàngqù.', 'Bạn treo bức tranh này lên giúp.')],
          ps: 'Ta thường nói "加上" hoặc "加上去", nhưng không nói "减下", mà nói "减去".',
          points: [{ text: '"加上" được, nhưng "减下" là sai.', fixes: [{ wrong: '日期都要减下一天', right: '日期都要减去一天', ref: 'Kiểm tra 5 · D' }] }],
        },
      ],
    },
    {
      id: 'chulai', hanzi: '动 + 出来', title: 'Đi ra, về phía người nói', glyph: 'chuLai',
      rows: [
        { label: 'Vị trí (nghĩa gốc)', examples: [x('他从包里[拿出来]几本新书。', 'Tā cóng bāo lǐ ná chūlái jǐ běn xīn shū.', 'Anh ấy lấy mấy cuốn sách mới từ trong túi ra.')] },
        {
          label: 'Có kết quả',
          examples: [x('我[回答出]这个问题[来]了。', 'Wǒ huídá chū zhège wèntí lái le.', 'Tôi trả lời được câu hỏi này rồi.')],
          ps: 'Ta hay thấy cả "回答出来" lẫn "回答上来", đều đúng. Nhưng "出来" nhấn mạnh có kết quả, còn "上来" hàm ý câu hỏi rất khó. Vì thế thường nói "老师的问题我回答不上来" hoặc "老师的问题我回答得上来".',
        },
        { label: 'Phân biệt, nhận ra', examples: [x('我一眼就从人群中[认出]他[来]了。', 'Wǒ yì yǎn jiù cóng rénqún zhōng rèn chū tā lái le.', 'Tôi liếc mắt là nhận ra anh ấy giữa đám đông.')] },
      ],
    },
    {
      id: 'chuqu', hanzi: '动 + 出去', title: 'Đi ra, xa người nói', glyph: 'chuQu',
      rows: [
        { label: 'Vị trí (nghĩa gốc)', examples: [x('他人在教室里，心却[飞出去]了。', 'Tā rén zài jiàoshì lǐ, xīn què fēi chūqù le.', 'Người anh ấy ở trong lớp, mà tâm hồn đã bay ra ngoài.')] },
        { label: 'Thực hiện, công khai', text: 'Điều bí mật bị đưa ra ngoài.', examples: [x('这是我的秘密，你别[说出去]呀。', 'Zhè shì wǒ de mìmì, nǐ bié shuō chūqù ya.', 'Đây là bí mật của tôi, bạn đừng nói ra ngoài nhé.')] },
      ],
    },
    {
      id: 'guolai', hanzi: '动 / 形 + 过来', title: 'Đi sang, về phía người nói', glyph: 'guoLai',
      rows: [
        { label: 'Vị trí (nghĩa gốc)', examples: [x('我看见他从马路对面[跑过来]。', 'Wǒ kànjiàn tā cóng mǎlù duìmiàn pǎo guòlái.', 'Tôi thấy anh ấy từ bên kia đường chạy sang.')] },
        { label: 'Trạng thái', examples: [x('他晕倒了，半天才[醒过来]。', 'Tā yūndǎo le, bàntiān cái xǐng guòlái.', 'Anh ấy ngất đi, mãi mới tỉnh lại.', undefined, 'bất thường, xấu → bình thường, tốt')] },
        { label: 'Tình hình', examples: [x('这本书是[翻译过来]的。', 'Zhè běn shū shì fānyì guòlái de.', 'Cuốn sách này là bản dịch.', undefined, 'trước đây → hiện nay')], points: [{ text: 'Điểm thi: từ tình hình cũ đến tình hình hiện tại phải dùng 过来.', fixes: [{ wrong: 'GMS，翻译起来叫大型综合超市', right: 'GMS，翻译过来叫大型综合超市', ref: 'Đề mô phỏng · 10D' }] }] },
        { label: 'Vượt qua thời gian khó', examples: [x('我以前很不习惯这儿的生活，现在都[熬过来]了。', 'Wǒ yǐqián hěn bù xíguàn zhèr de shēnghuó, xiànzài dōu áo guòlái le.', 'Trước đây tôi rất không quen cuộc sống ở đây, giờ đã vượt qua rồi.', undefined, 'trước khó → nay xong')] },
        { label: 'Số lượng', examples: [x('天上的星星[数不过来]。', 'Tiān shang de xīngxing shǔ bu guòlái.', 'Sao trên trời đếm không xuể.')] },
      ],
    },
    {
      id: 'guoqu', hanzi: '动 + 过去', title: 'Đi sang, xa người nói', glyph: 'guoQu',
      rows: [
        { label: 'Vị trí (nghĩa gốc)', examples: [x('那边真热闹，我们快[跑过去]看看。', 'Nàbiān zhēn rènao, wǒmen kuài pǎo guòqù kànkan.', 'Bên kia náo nhiệt quá, chúng ta mau chạy qua xem.')] },
        { label: 'Trạng thái', examples: [x('他累得[晕过去]了。', 'Tā lèi de yūn guòqù le.', 'Anh ấy mệt đến ngất đi.', undefined, 'bình thường, tốt → bất thường, xấu')] },
        {
          label: 'Vượt qua thời gian',
          examples: [x('现在是很辛苦，但[挺过去]就会有成功的幸福感。', 'Xiànzài shì hěn xīnkǔ, dàn tǐng guòqù jiù huì yǒu chénggōng de xìngfúgǎn.', 'Bây giờ rất vất vả, nhưng cố vượt qua sẽ có cảm giác hạnh phúc của thành công.', undefined, 'hiện tại → tương lai')],
          ps: 'Khi chỉ riêng thời gian, 过去 đối lập với 到来. Ví dụ: 圣诞节已经过去了，新年即将到来。',
        },
        { label: 'Chịu được, thông qua', examples: [x('这么难看的衣服，太让人[看不过去]了。', 'Zhème nánkàn de yīfu, tài ràng rén kàn bu guòqù le.', 'Bộ quần áo xấu thế này, thật khiến người ta chướng mắt.')] },
      ],
    },
    {
      id: 'qilai', hanzi: '动 / 形 + 起来', title: 'Đứng lên, bắt đầu', glyph: 'qiLai',
      rows: [
        { label: 'Vị trí (nghĩa gốc)', examples: [x('他慢慢地从座位上[站起来]。', 'Tā mànmàn de cóng zuòwèi shang zhàn qǐlái.', 'Anh ấy từ từ đứng dậy khỏi chỗ ngồi.')] },
        {
          label: 'Bắt đầu → tiếp tục, ngày càng sâu',
          examples: [x('他俩一见面就[聊起天来]。', 'Tā liǎ yí jiànmiàn jiù liáoqǐ tiān lái.', 'Hai người vừa gặp là trò chuyện luôn.')],
          ps: '"起来" đối lập với "下来".',
        },
        {
          label: 'Trạng thái yếu → mạnh',
          examples: [x('天慢慢[亮起来]了。', 'Tiān mànmàn liàng qǐlái le.', 'Trời dần sáng lên.')],
          points: [{ text: 'Điểm thi: mức độ từ yếu đến mạnh thì dùng 起来.', fixes: [{ wrong: '富裕上来的中国人', right: '富裕起来的中国人', ref: 'Kiểm tra 1 · B', why: '"富裕" có mức độ đi từ yếu đến mạnh.' }] }],
        },
        { label: 'Tản mát → tập trung', examples: [x('快把桌子上的书[收起来]。', 'Kuài bǎ zhuōzi shang de shū shōu qǐlái.', 'Mau cất sách trên bàn đi.')] },
        { label: 'Nhớ lại có kết quả', examples: [x('啊！我[想起来]了。他不是我的小学同学吗？', 'Ā! Wǒ xiǎng qǐlái le. Tā bú shì wǒ de xiǎoxué tóngxué ma?', 'A! Tôi nhớ ra rồi. Chẳng phải anh ấy là bạn học tiểu học của tôi sao?')] },
        { label: 'Tiến hành: "……的时候"', examples: [x('她[笑起来]很美。', 'Tā xiào qǐlái hěn měi.', 'Khi cười cô ấy rất đẹp.')] },
      ],
    },
  ],

  // ───────────────────────── 知识点测试 (5 câu) ─────────────────────────
  test: [
    seg(['改革开放以来，', '富裕上来的中国人开始致力于教育事业，', '大力发展教育，', '"科教兴国"成为跨世纪的宏伟战略。'], 1, '起来: yếu → mạnh',
      '富裕起来的中国人开始致力于教育事业', '"富裕" có mức độ từ yếu đến mạnh nên dùng 起来, không dùng 上来.'),
    seg(['大家劝了他半天，', '他才安静下去，', '但是我看他那不依不饶的样子，', '就知道这事肯定还没完。'], 1, '下来: mạnh → yếu',
      '他才安静下来', 'Cơn giận của "anh ấy" đi từ mạnh đến yếu, phải dùng 安静下来.'),
    seg(['年轻时我也是满腔热情，', '一心想要轰轰烈烈地做一番大事，', '然而人到暮年，突然对什么都看得很淡了，', '倒希望生活就这样平静下来，不要再有任何波折才好。'], 3, '下去: tương lai',
      '倒希望生活就这样平静下去', '"平静" là trạng thái kéo dài từ quá khứ sang tương lai, dùng 下去 chứ không dùng 下来.'),
    seg(['改革开放初期，', '我们的关键任务是尽快解决人民的温饱问题，', '把国民经济提高起来，', '同时，国民素质教育问题也不容忽视。'], 2, '上去: hy vọng đạt tới',
      '把国民经济提高上去', 'Nói về việc mong muốn nâng lên thì dùng 提高上去.'),
    seg(['按照规定，无论什么时候经过这条线，', '日期都要发生变化，', '从东向西经过这条线时，', '日期都要加上一天，从西向东经过这条线时，日期都要减下一天。'], 3, '上去: thêm vào ↔ 减去',
      '日期都要减去一天', '"加上" được, nhưng "减下" là sai; phải nói "减去".'),
  ],

  // ───────────────────────── 新HSK仿真试题 (15 câu) ─────────────────────────
  exam: [
    sen([
      '随着时间的推移，流行音乐也有可能上升为高雅音乐。',
      '孩子总是充满了想象，孩子的世界也是一个充满了想象的世界。',
      '处于困境中的人，只有从压抑与抱怨中解放起来，才能全力以赴地追求新生活。',
      '夏季，人的体温通常较高，喝下大量冷饮，容易引起消化系统疾病。',
    ], 2, '出来: từ trong ra ngoài', '只有从压抑与抱怨中解放出来', 'Từ khóa là "从……中", chỉ đi từ trong ra ngoài, phải dùng 解放出来.'),
    sen([
      '我看起来他这次新HSK四级肯定能过，因为他每天都很努力地学习汉语。',
      '路是脚踏出来的，历史是人写出来的。人的每一步行动都在书写自己的历史。',
      '随着生活节奏的不断加快，现代人工作之余需要用娱乐来调节身体的紧张状态。',
      '争吵时，你最不应该用强硬的语气或态度来压倒对方，使争吵继续下去。',
    ], 0, '看起来: không cần chủ ngữ "我"', '看起来他这次新HSK四级肯定能过', '"看起来" diễn tả suy đoán của người nói nên không cần "我" làm chủ ngữ; chủ ngữ phải là chủ ngữ của mệnh đề phía sau. Có thể sửa thành 他看起来这次……'),
    sen([
      '经过心理医生的治疗，他终于变得快乐起来。',
      '一个十几岁的少年能写出这样的文章来，真令人难以相信。',
      '他与死神搏斗了半年，最终活了下来，但却留下了终身残疾。',
      '自从有了私家车，我的腿也"变长"了，想去什么地方说走就走，看到自己感兴趣的好地方也可以马上停过去赏玩一番。',
    ], 3, 'Động từ và bổ ngữ không hợp', '可以马上停下来赏玩一番', 'Động từ 停 phải đi với 下来. Hoặc sửa thành 可以马上把车开过去赏玩一番.'),
    sen([
      '笑可以使人延缓衰老。俗话说得好："笑一笑，十年少。"',
      '秦陵兵马俑中的8000兵马俑不是一个模型里制出来的，而是一个一个雕塑而成的艺术珍品。',
      '住在高层公寓，最怕的就是电梯停运了，从28层爬下来，我已经累得上气不接下气了。',
      '航天科技活动与人类的关系日益密切，居民的电视、手机信号等无不依赖于天上卫星发来的信号。',
    ], 2, 'Hướng của động từ 爬', '从28层走下来', 'Hướng của 爬 phải đi lên, ta hay nói 爬上山, 爬上楼. Ở đây phải sửa thành 从28层走下来 hoặc 步行下来.'),
    sen([
      '我在床上一觉醒起来，发现李老师正站在我的床前，我猛然发现，她站立的姿势、神态，就像我妈妈一样。',
      '不经一事，不长一智，智慧是人通过现实的历练而产生出来的。若逃避现实，智慧便无从产生。',
      '小王是一名刚刚毕业的大学生，参加了好几次人才招聘会，投出去的简历不计其数，却都石沉大海。',
      '"五岳"是中国五大名山的总称，一般指北岳恒山、西岳华山、中岳嵩山、东岳泰山和南岳衡山。',
    ], 0, 'Chú ý động từ khóa 醒', '我在床上一觉醒来', 'Phải là 醒来 hoặc 醒过来. "床上" dễ khiến ta nghĩ ngay đến 起床, 起来 mà bỏ qua động từ khóa 醒. Nếu muốn lấy "床上" làm từ khóa thì nói 我从床上起来.'),
    sen([
      '这些规定讨论下来容易，执行起来可是另外一回事。所以我们必须在如何执行上下工夫，制订出一些切实可行的办法。',
      '北方雪地上的动物，北极熊也好，北极狐也好，外表都是白色的，它们在雪的背景下简直看不出来。',
      '在中国，女性的就业情况普遍比西方国家乐观，但高级管理层的女性比例仍然是非常低的。',
      '管理者应该更懂得怎样去甄别每个人的能力，把他放在合适的位置上，放手让他去做，这样才能不浪费人才资源。',
    ], 0, '起来: "……的时候"', '这些规定讨论起来容易', '"讨论起来" nghĩa là "khi thảo luận thì dễ, còn khi thực hiện thì không dễ". Dùng 下来 là sai.'),
    sen([
      '夫妻双方只有互相欣赏、互相体谅，遇到困难时互相帮助，婚姻才能美满。',
      '他向前望下去，看见迎面有一颗颗黑点在铁轨上蠕动，再走近一些他才看清，那是人，是迎着他走来的人群。',
      '为了保护孩子，野兔妈妈将它们藏在地下隐秘的兔子窝里，让它们能够存活下来。',
      '李清云是清朝到民国初年的中医中药学者，也是世界上著名的长寿老人，传说中他在世256年，但无确切史料考证。',
    ], 1, 'Không có chênh lệch độ cao', '他向前望去', 'Từ khóa "向前" cho thấy không có sự cao thấp về vị trí, và câu sau có "迎面" (đối diện), nên không cần 下. Sửa thành 他向前望去.'),
    sen([
      '烟草在全球盛行了200多年，直到20世纪，人类才开始认识到烟草对人类的危害。',
      '感恩节是美国人民独创的一个节日，也是美国人合家欢聚的节日，因此美国人提起感恩节来总是倍感亲切。',
      '"水至清则无鱼"这句话告诫人们，指责人不要太苛刻，看问题不要过于严厉，否则，就容易使大家因害怕而不愿意与之打交道，就像水过于清澈养不住鱼儿一样。',
      '征服历来是人类的天性和乐趣。一种由古希腊人发明的惊险、刺激的游戏一代一代流传下去，到今天竟然扎根在美国，成了西部牛仔热衷的竞技活动。',
    ], 3, '下来 ↔ 下去: thời gian', '一代一代流传下来', 'Từ khóa là "由古希腊人……到今天", đi từ cổ đại, quá khứ đến hiện tại nên dùng 下来; còn 下去 chỉ thời gian đến tương lai.'),
    sen([
      '很多中国人认不过来我是韩国人，我跟他们聊天儿时，他们常问我老家是不是南方的，这让我感到十分得意。',
      '微笑，不单是种表情，更是一种感情，是拉近人们之间距离的法宝，是增进人们感情的催化剂。',
      '广东省中山市翠亨村，是中国近代民主革命的伟大先行者孙中山先生的家乡。',
      '加入世界贸易组织后，中国各行各业面临着新的发展机遇和国际竞争，越来越多的中国人通过阅读来补充前沿的经济知识。',
    ], 0, '出来: phân biệt, nhận ra', '很多中国人认不出来我是韩国人', 'Nghĩa "phát hiện sự thật, phân biệt" phải dùng 出来; ta thường nói 认不出来.'),
    sen([
      '虽说万事开头难，起步固然不容易，但是坚持到底才是最难的事。',
      '白天要尽量利用自然光线，经常打开窗户，让阳光进入室内。',
      '少林寺这个有着1500多年历史的佛教寺院，是举世闻名的少林武术的发源地。',
      'GMS，翻译起来叫大型综合超市，它必须有2500平方米以上的购物面积、开放式的自选购物环境、电脑化的管理以及条形码商品。',
    ], 3, '过来: tình hình cũ → hiện tại', 'GMS，翻译过来叫大型综合超市', 'Từ tình hình ban đầu (tiếng nước ngoài) đến tình hình hiện tại (tiếng Hán) phải dùng 过来: 翻译过来.'),
    sen([
      '编辑的首要任务是提出好选题，按照不同读者的需要，约请合适的作者写稿。',
      '她知道要去采访成龙以后，提前半个月就开始搜集资料、准备稿子，然而真正面对成龙时竟然整整呆了一分钟，一句话也说不起来。',
      '人类在远古时代以破坏自然环境为代价，才能够生存下来，居住一处，就会破坏一处。',
      '含羞草稍被触摸，叶子就会自然地收缩起来，即使一阵风吹过，也会出现这种情形，就像一个害羞的少女一般。',
    ], 1, 'Cụm cố định 想不起来 / 说不出来', '一句话也说不出来', 'Quên điều đã chuẩn bị thì nói 一句话也想不起来; xúc động đến mức không nói nên lời thì nói 一句话也说不出来.'),
    sen([
      '我和他在大学时同系不同班，只是在上选修课时见过面，对他也不怎么了解，现在连他的名字也想不出来了。',
      '中国的书法是一种富有民族特色的传统艺术，它伴随着汉字的产生和发展一直延续到今天，经过历代书法名家的熔炼和创新，成为中华民族的宝贵财富。',
      '达人，是指在某一领域非常专业、出类拔萃的人物。后来这个称呼被越来越多的网友接受和喜爱，成为流行用语。',
      '1948年世界卫生组织将每年的5月8日确定为"世界微笑日"。这一天会特别温馨，在对别人的微笑中，你也会看到世界对自己微笑起来。',
    ], 0, '起来: nhớ lại', '现在连他的名字也想不起来了', '"想出来" nghĩa là nghĩ ra, có đáp án. Câu này nói hồi tưởng, nhớ lại có kết quả nên phải là 想起来 (phủ định: 想不起来), hoặc nói 叫不出来.'),
    sen([
      '他毕业于名牌大学，是一家小公司的老板，虽然还称不上是"贵族"，却也是我认识的人中少有的"大款"了。',
      '我非常敬佩我们的老师，她能把看上来十分复杂的问题讲解得非常透彻、生动，而且还能让学生记忆深刻、举一反三。我第一次上课就对她产生了好感！',
      '五谷杂粮、山村野菜摆到了高级酒店的餐桌上，这说明随着人们生活水平的提高，大鱼大肉已经司空见惯了，人们更向往绿色食品了。',
      '农历八月十五是中国的传统节日——中秋节。中秋节、春节、清明节和端午节是中华民族的四大传统节日。',
    ], 1, '看上去 / 看起来', '看起来十分复杂的问题', '"看上来" không có nghĩa mở rộng đặc biệt nào; phải nói 看上去 hoặc 看起来.'),
    sen([
      '职场竞争激烈，上班族通常都承受着很大的工作压力，而压力增大易导致代谢减缓，形成肥胖。',
      '他是个生性腼腆的人，一定不喜欢让别人了解他的私事，我们最好不要把他的不幸宣扬出来，弄不好没帮上忙，反倒给他增加了负担。',
      '善良是人性中最基本的品格，也是人性里最朴素的美，只有在善良的土壤里，才能开出更为崇高的品德之花。',
      '在文化逐渐多元、信息日益丰富的今天，端午节等中国传统节日面临着不少挑战。这迫切需要人们与时俱进，既要保持传统，又要适应当今人们的需要。',
    ], 1, '出去: bí mật bị lộ', '我们最好不要把他的不幸宣扬出去', 'Việc kín đáo bị công khai phải dùng 出去, không dùng 出来: 宣扬出去.'),
    sen([
      '孔府菜由于孔府在历代封建王朝中所处的特殊地位而得以保全下来，它是清朝乾隆时期的官府菜。',
      '他将我们的约会安排在一家舞厅里。我不明白他为什么要这么安排，其实他完全可以选择咖啡馆或者酒吧，至少那里更清静些。',
      '在人生的道路上，人们常常会与困难和挫折不期而遇，这时，许多人不知所措，放弃了自己为之奋斗的理想，而有些人却能冷静起来，依然保持着先前的拼劲和勇气。',
      '当传媒只限于纸质媒介时，人们对事物的了解还只限于文字和图片；广播诞生以后，人们听到了事件发生时的真实声音；而电视的出现则一下子把观众带到了事件发生的现场。',
    ], 2, '下来: mạnh → yếu', '而有些人却能冷静下来', '"冷静" là tính từ; mức độ đi từ mạnh đến yếu (bình tĩnh lại) phải dùng 下来.'),
  ],
}
