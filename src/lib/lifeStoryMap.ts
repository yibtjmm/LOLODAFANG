export type LifeMapWeek = {
  week: number
  title: string
  region: string
  stage: string
  summary: string
  mission: string
  goal: string
  reward: string
  takeaway: string[]
  ai: string
  icon: string
  hotspot: { left: number; top: number }
}

export const lifeMapWeeks: LifeMapWeek[] = [
  { week: 1, title: '新手登入', region: '新手村', stage: '起點區', summary: '課程說明、薩提爾自我價值宣言、三個美好特質', mission: '建立你的冒險者角色卡，寫下三個美好特質。', goal: '完成自我介紹並留下第一張角色資料。', reward: '角色卡 x1', takeaway: ['認識自己的起點', '完成角色設定', '建立本學期的冒險身份'], ai: '如果不知道從哪裡開始，可以先想：別人眼中的我，和我心中的我，有什麼不一樣？', icon: 'ID', hotspot: { left: 12.1, top: 20.5 } },
  { week: 2, title: '讀自己的履歷', region: '新手村', stage: '起點區', summary: '辛波絲卡〈寫履歷表〉', mission: '練習從文字裡看見自己，不只寫經歷，也寫你如何理解自己。', goal: '把「我是誰」寫得比傳統履歷更真實。', reward: '另類履歷 x1', takeaway: ['跳出制式自我介紹', '看見個人經驗的價值', '為故事建立自我視角'], ai: '你可以問 AI：如果一份履歷要看出一個人的性格與生命感，應該補上哪些細節？', icon: 'CV', hotspot: { left: 24.8, top: 22.8 } },
  { week: 3, title: '技能工坊', region: '故事平原', stage: '敘事練習', summary: '創意履歷＋心智圖', mission: '把自己的生命關鍵字整理成心智圖。', goal: '完成第一版生命地圖，建立你的技能樹。', reward: '心智圖技能 x1', takeaway: ['整理生命關鍵字', '看見經驗之間的連結', '建立故事素材庫'], ai: '如果素材很多，可以請 AI 協助分類：人物、事件、感受、轉折。', icon: 'MAP', hotspot: { left: 35.5, top: 23 } },
  { week: 4, title: '故事之門', region: '故事平原', stage: '敘事練習', summary: '妙語說書人、敘事練習', mission: '完成 60 秒生命小故事，練習事件、人物、轉折與細節。', goal: '打開「怎麼說一個故事」的大門。', reward: '故事說法 x1', takeaway: ['知道故事不是流水帳', '掌握轉折與節奏', '練習把經驗說給別人聽'], ai: '你可以請 AI 幫你判斷：這段故事的起點、衝突、轉折和收束各在哪裡？', icon: 'ST', hotspot: { left: 48.5, top: 24.7 } },
  { week: 5, title: '氣味傳送點', region: '記憶森林', stage: '感官探索', summary: '〈氣味〉、感官書寫', mission: '從嗅覺打開記憶，寫下一段感官碎片。', goal: '把抽象回憶寫成可被感覺到的畫面。', reward: '感官碎片 x1', takeaway: ['用感官喚醒回憶', '讓文字變得有畫面', '蒐集細膩的故事質地'], ai: '可以請 AI 追問：這段回憶除了氣味，還有什麼聲音、光線、觸感？', icon: 'SEN', hotspot: { left: 62.4, top: 27 } },
  { week: 6, title: '生命地圖', region: '記憶森林', stage: '感官探索', summary: '感官生命地圖', mission: '把人物、場景、聲音與氣味放上你的地圖。', goal: '讓你的記憶地景成形。', reward: '生命素材庫 A', takeaway: ['回憶不再零散', '開始形成生命地景', '為主線鋪出更多路徑'], ai: '如果卡住，可以請 AI 把素材整理成「地點、人物、情緒、事件」四欄。', icon: 'A', hotspot: { left: 71.7, top: 32 } },
  { week: 7, title: '物件召喚', region: '關係迷宮', stage: '關係線索', summary: '紀念品九宮格', mission: '從一件物品打開一段故事，也打開一段關係。', goal: '找到物件背後的人與情感。', reward: '物件故事 x1', takeaway: ['從物件回到關係', '看見故事中的重要他人', '找到回憶的情感入口'], ai: '你可以讓 AI 問：這件物品為什麼留下來？它替你保留了什麼？', icon: 'OBJ', hotspot: { left: 10.9, top: 42 } },
  { week: 8, title: '故事種子', region: '關係迷宮', stage: '主線解鎖', summary: '選一條故事線', mission: '從前面的素材中選出一件最想寫的事，完成 200 字故事種子。', goal: '主線任務正式解鎖。從這一週開始，故事不再只是素材，而會開始聚焦成一條主線。', reward: '故事種子 x1', takeaway: ['一個清楚的故事焦點', '一條可發展的主線', '後續 1000 字生命故事的起點'], ai: '先從最有感覺的一件事開始，不必一次寫完人生。真正重要的，是找到你最想說的入口。', icon: 'SEED', hotspot: { left: 24.5, top: 45.6 } },
  { week: 9, title: '中途補給站', region: '驛站', stage: '素材盤點', summary: '期中檢核、素材盤點', mission: '盤點背包裡已經擁有的素材，準備進入深層關卡。', goal: '確認你已經帶著足夠素材往前走，並從驛站銜接主線高地。', reward: '進階冒險者稱號', takeaway: ['整理目前所得', '辨識還缺什麼', '為後續深寫做準備'], ai: '你可以請 AI 檢查：目前素材是否已包含事件、人物、情緒與轉折？', icon: 'MID', hotspot: { left: 52.2, top: 53.1 } },
  { week: 10, title: '情緒洞穴入口', region: '情緒洞穴', stage: '情緒整理', summary: '情緒照護、流心瓶', mission: '辨識情緒，不急著打敗它，先學會看見它。', goal: '學會和自己的情緒同處。', reward: '情緒命名技能', takeaway: ['更精確地辨識情緒', '不只用「開心／難過」概括', '建立情緒書寫能力'], ai: '若不知道怎麼說，可以請 AI 提供更多情緒詞，幫你找到更接近的感受名稱。', icon: 'EMO', hotspot: { left: 79.3, top: 47.5 } },
  { week: 11, title: '情緒年史', region: '情緒洞穴', stage: '情緒整理', summary: '《親愛的我》、情緒年史、情緒拼圖', mission: '看見自己的情緒軌跡與因應方式。', goal: '把情緒變化整理成可理解的地圖。', reward: '生命素材庫 B', takeaway: ['理解情緒的時間線', '看見壓力與回應方式', '更接近自我覺察'], ai: '可以請 AI 協助整理：哪些情緒反覆出現？哪些時刻是轉折點？', icon: 'B', hotspot: { left: 89.5, top: 55.4 } },
  { week: 12, title: 'AI 鏡像之門', region: '鏡像之門', stage: 'AI 對話', summary: 'AI 生命訪談員', mission: '讓 AI 只提問不代寫，幫你把故事問得更清楚。', goal: '讓故事從模糊走向具體，並可直接回到驛站整合素材。', reward: 'AI NPC 夥伴', takeaway: ['體驗 AI 作為反思鷹架', '看見故事中的空白處', '讓敘事變得更具體'], ai: '核心規則：AI 可以提問、回饋、照鏡子，但不能代替你寫出生命經驗。', icon: 'AI', hotspot: { left: 8, top: 77 } },
  { week: 13, title: '生命圖像', region: '鏡像之門', stage: '人機再詮釋', summary: '生命圖像創作、人機再詮釋比較', mission: '把故事變成圖像，比較「我如何表達」與「AI 如何理解」。', goal: '打開文字之外的另一種敘事視角，並從鏡像之門銜接驛站。', reward: '圖像轉譯技能', takeaway: ['把故事轉成圖像', '比較人與 AI 的詮釋差異', '深化自我理解'], ai: '把自己的關鍵詞給 AI 產圖，再比較哪些地方接近你、哪些地方偏離你。', icon: 'IMG', hotspot: { left: 18.8, top: 79.8 } },
  { week: 14, title: '主線任務', region: '主線高地', stage: '主線推進', summary: '1000 字生命故事初稿', mission: '把前面蒐集的碎片整合成完整初稿。', goal: '把零散碎片串成真正的主線，從驛站正式登上主線高地。', reward: '初稿 v1', takeaway: ['完成第一版完整生命故事', '把素材組織成敘事', '建立主題與重心'], ai: '可以請 AI 從「結構、細節、轉折、主題」四個面向給你回饋。', icon: 'V1', hotspot: { left: 33.2, top: 81 } },
  { week: 15, title: '真假試煉', region: '主線高地', stage: 'AI 判讀', summary: 'AI 回饋與判讀', mission: '判斷哪些建議要接受、修改或拒絕。', goal: '守住你的作者聲音。', reward: 'AI 判讀技能', takeaway: ['學會辨識 AI 建議', '保留個人聲音', '進行批判性修訂'], ai: '不是 AI 說得好就要全收。要問自己：這真的像我嗎？這符合我的經驗嗎？', icon: 'CHK', hotspot: { left: 41.6, top: 82.8 } },
  { week: 16, title: '重寫之塔', region: '重寫之塔', stage: '修訂定稿', summary: '生命故事定稿', mission: '保留自己的聲音，完成定稿與修訂說明。', goal: '完成再敘事，不被 AI 取代。', reward: '定稿 v2', takeaway: ['完成定稿', '看見修訂後的成長', '更清楚自己的敘事選擇'], ai: '這一關最重要的不是把文字修漂亮，而是知道你為什麼這樣寫。', icon: 'V2', hotspot: { left: 56.2, top: 84.8 } },
  { week: 17, title: '轉職關卡', region: '創作港', stage: '再創作', summary: '圖像、影音、歌曲、手工書等再創作', mission: '把文字轉譯成另一種媒介，讓故事換個方式被看見。', goal: '讓你的故事擁有第二種型態。', reward: '多模態作品', takeaway: ['跨媒介表達自己的故事', '讓作品更能被分享', '把文字轉化為成果'], ai: '可以用 AI 協助腳本、分鏡、歌詞、圖像，但主題與故事核心仍然來自你。', icon: 'ART', hotspot: { left: 69.7, top: 79.5 } },
  { week: 18, title: '最終 Boss', region: '終章劇場', stage: '成果展演', summary: '成果展、人生藍圖、課程回饋、BRS 後測', mission: '回望整學期，想一想：我會帶著這個故事走向哪裡？', goal: '完成展演，帶著你的故事離開地圖。', reward: '我的下一章', takeaway: ['整理整學期收穫', '完成展演分享', '帶著更清楚的自己前進'], ai: '最終回顧時，可以問 AI：這段旅程裡，我最大的改變是什麼？我下一步想走去哪裡？', icon: 'END', hotspot: { left: 86.5, top: 92.9 } },
]

export function buildLifeMapPrompt(week: LifeMapWeek) {
  return [
    `第 ${week.week} 週｜${week.title}`,
    `區域：${week.region}｜${week.stage}`,
    `本週任務：${week.mission}`,
    `任務目標：${week.goal}`,
    '',
    '請用 3 到 5 句回應本週任務。你可以只分享願意被老師看見的內容；不需要寫出過度私密或讓自己不舒服的細節。',
  ].join('\n')
}
