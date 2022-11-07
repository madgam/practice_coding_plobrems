import { useMemo } from 'react'
import ja from 'src/locales/ja'

export default function useI18n() {
  return useMemo<typeof ja>(() => {
    return ja
  }, [])
}
