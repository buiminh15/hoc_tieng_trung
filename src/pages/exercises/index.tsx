/** Tab Bài tập: danh sách mục và điều hướng tới từng mục. */
import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import Quiz from './Quiz'
import PairGame from './PairGame'
import { MatchBoard, PairsBoard, SequenceBoard, TfBoard } from './boards'
import { ClozeGame, SortGame } from './SentenceGames'
import GrammarPractice from './GrammarPractice'
import type { QuizKind } from '../../lib/exercises'

const VOCAB_KINDS: QuizKind[] = ['meaning', 'reading', 'blank', 'compound']
const HANZI_KINDS: QuizKind[] = ['reading', 'hanviet', 'compound']

const PAGES: Record<string, ReactNode> = {
  vocab: <Quiz key="vocab" title="Từ vựng" desc="Trắc nghiệm 4 đáp án, mỗi lượt tối đa 10 câu. Phím 1–4 để chọn, Enter để sang câu tiếp." kinds={VOCAB_KINDS} />,
  grammar: <GrammarPractice />,
  pairs: <PairGame key="pairs" title="Nối cặp" desc="Chạm một mục bên trái rồi chạm mục tương ứng bên phải." countLabel="Số cặp" counts={[5, 6, 8]} Board={PairsBoard} />,
  tf: <PairGame key="tf" title="Đúng hay Sai" desc="Đáp án đi kèm có thể đúng, hoặc là của từ khác." countLabel="Số câu" counts={[10, 15, 20]} timer Board={TfBoard} />,
  sort: <SortGame />,
  cloze: <ClozeGame />,
  sequence: <PairGame key="sequence" title="Nhớ chuỗi" desc="Bắt đầu với 3 từ, mỗi vòng đúng thêm 1 từ. Chạm sai là dừng." countLabel="Số từ trong ván" counts={[8, 10, 12]} Board={SequenceBoard} />,
  match: <PairGame key="match" title="Lật thẻ" desc="Lật hai thẻ để tìm cặp tương ứng, càng ít lượt càng tốt." countLabel="Số cặp" counts={[6, 8, 10]} Board={MatchBoard} />,
  hanzi: <Quiz key="hanzi" title="Chữ Hán" desc="Chọn cách đọc, chọn chữ theo âm Hán Việt và ghép từ." kinds={HANZI_KINDS} />,
}

const ITEMS: [string, string, string, string][] = [
  ['/exercises/vocab', '词', 'Từ vựng', 'Trắc nghiệm: nghĩa, pinyin, điền chỗ trống, ghép từ'],
  ['/exercises/grammar', '法', 'Ngữ pháp', 'Bài tập theo chủ đề, có giải thích'],
  ['/exercises/pairs', '连', 'Nối cặp', 'Nối hai cột'],
  ['/exercises/tf', '判', 'Đúng hay Sai', 'Rèn phản xạ, có thể giới hạn 3 giây'],
  ['/exercises/sort', '序', 'Sắp xếp câu', 'Ghép các cụm thành câu'],
  ['/exercises/cloze', '填', 'Điền từ', 'Điền từ vào câu ví dụ'],
  ['/exercises/sequence', '记', 'Nhớ chuỗi', 'Nhớ thứ tự các từ'],
  ['/exercises/match', '翻', 'Lật thẻ', 'Lật thẻ tìm cặp'],
  ['/exercises/hanzi', '字', 'Chữ Hán', 'Cách đọc, âm Hán Việt, ghép từ'],
  ['/hsk', '考', 'Đề HSK', 'Đề nghe và đọc hiểu (mở trang Đề HSK)'],
  ['/exam', '试', 'Thi thử', 'Nộp bài mới chấm (mở trang Thi thử)'],
]

export default function Exercises() {
  const { kind } = useParams()
  if (kind && PAGES[kind]) return <>{PAGES[kind]}</>
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Bài tập</h1>
        <p className="mt-1 max-w-xl text-slate-500">Làm thêm khi muốn. Làm bài không thay đổi lịch ôn; bạn tự chọn từ làm sai để đưa vào ôn tập.</p>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {ITEMS.map(([to, glyph, title, desc]) => (
          <li key={to}>
            <Link to={to} className="tile group flex h-full items-center gap-4 rounded-lg border bg-surface p-4 shadow">
              <span aria-hidden className="hz grid size-14 shrink-0 place-items-center rounded-md border-2 border-accent text-3xl font-black text-accent-fg transition-colors group-hover:bg-accent group-hover:text-white">{glyph}</span>
              <span className="min-w-0"><span className="block font-bold">{title}</span><span className="block text-sm text-slate-500">{desc}</span></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
