import { ArrowLeft, Map, Send, ShieldCheck, Sparkles, X, ZoomIn } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import lifeStoryMapUrl from '../assets/life-story-map.png'
import { edgeFunctionErrorMessage } from '../lib/edgeFunctionError'
import { buildLifeMapPrompt, lifeMapWeeks } from '../lib/lifeStoryMap'
import { getPresenterToken } from '../lib/presenterAuth'
import { requireSupabase } from '../lib/supabase'

export function LifeMapPage() {
  const { sessionId = '' } = useParams()
  const navigate = useNavigate()
  const [selectedWeek, setSelectedWeek] = useState(6)
  const [expanded, setExpanded] = useState(false)
  const [busy, setBusy] = useState(false)
  const [notice, setNotice] = useState('')
  const [error, setError] = useState('')
  const week = useMemo(
    () => lifeMapWeeks.find((item) => item.week === selectedWeek) || lifeMapWeeks[0],
    [selectedWeek],
  )
  const prompt = buildLifeMapPrompt(week)

  async function dispatchWeekQuestion() {
    const presenterToken = getPresenterToken(sessionId)
    if (!presenterToken) {
      setError('找不到老師端操作權限，請回到場次重新開啟生命地圖。')
      return
    }
    setBusy(true)
    setError('')
    setNotice('')
    try {
      const { data, error: invokeError } = await requireSupabase().functions.invoke('presenter-action', {
        body: {
          action: 'create_question',
          sessionId,
          presenterToken,
          questionType: 'short_answer',
          title: `W${week.week}｜${week.title}`,
          promptText: prompt,
          options: [],
          allowMultiple: false,
        },
      })
      if (invokeError) throw new Error(await edgeFunctionErrorMessage(invokeError, '派送生命地圖任務失敗。'))
      if (!data?.question) throw new Error(data?.message || '派送生命地圖任務失敗。')
      setNotice(`已派送 W${week.week}「${week.title}」問答題，學生端會立即看到。`)
    } catch (dispatchError) {
      setError(dispatchError instanceof Error ? dispatchError.message : '派送生命地圖任務失敗。')
    } finally {
      setBusy(false)
    }
  }

  return (
    <main className="life-map-page">
      <header className="life-map-header">
        <div>
          <p className="eyebrow"><Map size={16} />LOLODAFANG 生命書寫模組</p>
          <h1>生命故事冒險地圖</h1>
          <p>點選 W1-W18 帶學生走進本週任務，必要時可直接派送成即時問答。</p>
        </div>
        <div className="life-map-header-actions">
          <button className="ghost-button" type="button" onClick={() => navigate(`/presenter/${sessionId}`)}>
            <ArrowLeft size={17} />回老師面板
          </button>
          <button type="button" onClick={dispatchWeekQuestion} disabled={busy}>
            <Send size={17} />{busy ? '派送中...' : '派送本週任務'}
          </button>
        </div>
      </header>

      {(notice || error) && (
        <div className={error ? 'life-map-alert error' : 'life-map-alert success'}>
          {error || notice}
        </div>
      )}

      <section className="life-map-workspace">
        <div className="life-map-stage">
          <img alt="生命故事冒險地圖" src={lifeStoryMapUrl} />
          {lifeMapWeeks.map((item) => (
            <button
              aria-label={`第 ${item.week} 週 ${item.title}`}
              className={`life-map-hotspot${item.week === week.week ? ' active' : ''}`}
              key={item.week}
              style={{ left: `${item.hotspot.left}%`, top: `${item.hotspot.top}%` }}
              type="button"
              onClick={() => {
                setSelectedWeek(item.week)
                setNotice('')
                setError('')
              }}
            >
              {item.week}
            </button>
          ))}
          <button className="life-map-zoom" type="button" onClick={() => setExpanded(true)}>
            <ZoomIn size={17} />查看大圖
          </button>
        </div>

        <aside className="life-map-panel">
          <div className="life-map-week-kicker">
            <span>{week.region}</span>
            <span>{week.stage}</span>
          </div>
          <div className="life-map-week-heading">
            <span>{week.icon}</span>
            <h2>W{week.week}｜{week.title}</h2>
          </div>
          <section>
            <h3>課堂內容</h3>
            <p>{week.summary}</p>
          </section>
          <section>
            <h3>本週任務</h3>
            <p>{week.mission}</p>
          </section>
          <section>
            <h3>任務目標</h3>
            <p>{week.goal}</p>
          </section>
          <section className="life-map-reward">
            <h3>獲得獎勵</h3>
            <strong>{week.reward}</strong>
          </section>
          <section>
            <h3>本關帶走</h3>
            <ul>
              {week.takeaway.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
          <section className="life-map-ai-tip">
            <h3><Sparkles size={16} />AI 夥伴提示</h3>
            <p>{week.ai}</p>
          </section>
          <section className="life-map-privacy">
            <h3><ShieldCheck size={16} />隱私提醒</h3>
            <p>生命書寫題目預設給老師端查看；公開投影時請先篩選內容，避免展示學生不想公開的細節。</p>
          </section>
        </aside>
      </section>

      {expanded && (
        <div className="life-map-modal" role="presentation" onClick={() => setExpanded(false)}>
          <div className="life-map-modal-body" role="dialog" aria-modal="true" aria-label="生命故事冒險地圖大圖" onClick={(event) => event.stopPropagation()}>
            <button aria-label="關閉大圖" className="life-map-modal-close" type="button" onClick={() => setExpanded(false)}>
              <X size={20} />
            </button>
            <img alt="生命故事冒險地圖大圖" src={lifeStoryMapUrl} />
          </div>
        </div>
      )}
    </main>
  )
}
