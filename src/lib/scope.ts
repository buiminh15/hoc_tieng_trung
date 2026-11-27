import { allLessons } from '../data/lessons'

/**
 * Phạm vi luyện tập: "" = tất cả, "b7" = cả quyển 7, "7-3" = một bài.
 * Trả về danh sách khoá bài cho scopeFor.
 */
export function keysOf(scope: string | null): string[] {
  if (!scope) return []
  if (scope.startsWith('b')) {
    const b = Number(scope.slice(1))
    return allLessons.filter(x => x.book === b).map(x => `${x.book}-${x.lesson.id}`)
  }
  return [scope]
}
