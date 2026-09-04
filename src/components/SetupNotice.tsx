import { isSupabaseConfigured } from '../lib/supabase'
import { brand } from '../lib/brand'

export function SetupNotice() {
  if (isSupabaseConfigured) return null

  return (
    <div className="notice">
      <strong>尚未連接 Supabase。</strong>
      <span>請使用老師提供的 QR Code 或場次連結加入；老師端請在 {brand.name} 桌面版設定 Supabase。</span>
    </div>
  )
}
