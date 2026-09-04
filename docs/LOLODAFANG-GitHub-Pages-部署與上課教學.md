# LOLODAFANG GitHub Pages 部署與上課教學

這份文件說明如何把 LOLODAFANG 學生端部署到自己的 GitHub Pages，以及上課時老師與學生要怎麼使用。

## 你會得到什麼

- 一個公開學生端網址，例如 `https://你的帳號.github.io/LOLODAFANG`
- 老師用 LOLODAFANG 桌面版建立課堂
- 學生掃老師畫面上的 QR Code，進入你的 GitHub Pages 學生端互動
- 課堂資料寫入你自己的 Supabase 專案

## 部署前需要準備

1. GitHub 帳號
2. 一個 GitHub repository，例如 `LOLODAFANG`
3. Supabase 專案
4. Supabase 的 Project URL 與 publishable/anon key
5. 已完成 Supabase schema 與 Edge Functions 部署

## 建立 GitHub Repository

在 GitHub 建立一個新的 repository，建議名稱用：

```text
LOLODAFANG
```

建立完成後，把本機專案改推到你的 repository：

```bash
git remote rename origin upstream
git remote add origin https://github.com/你的帳號/LOLODAFANG.git
git add .
git commit -m "Brand LOLODAFANG classroom app"
git push -u origin main
```

如果 Git 要求登入，請用 GitHub 帳號登入或依照 Git Credential Manager 的提示授權。

## 設定 GitHub Pages

到你的 repository：

1. 進入 `Settings`
2. 進入 `Pages`
3. `Build and deployment` 的 `Source` 選 `GitHub Actions`

## GitHub Actions Variables

目前 LOLODAFANG 的 GitHub Pages build 不會把 Supabase 金鑰寫進靜態網站。老師端產生 QR Code 時，會把課堂需要的 Supabase 專案資訊放在學生加入連結裡。

因此一般情況下，你不需要在 GitHub Actions 裡設定 Supabase variables。

如果你想讓學生直接打開首頁也能連到固定 Supabase 專案，再使用下面這種進階設定。

到你的 repository：

1. 進入 `Settings`
2. 進入 `Secrets and variables`
3. 進入 `Actions`
4. 切到 `Variables`
5. 新增以下 repository variables

```text
VITE_SUPABASE_URL=https://你的-project.supabase.co
VITE_SUPABASE_ANON_KEY=你的 publishable 或 anon key
VITE_PUBLIC_APP_URL=https://你的帳號.github.io/LOLODAFANG
```

`VITE_PUBLIC_APP_URL` 必須填最後的 GitHub Pages 網址，這樣老師端產生的 QR Code 才會指到你的學生端。

## 觸發部署

設定完成後，GitHub Actions 會在每次 push 到 `main` 時自動部署。

也可以手動部署：

1. 進入 repository 的 `Actions`
2. 選 `Deploy to GitHub Pages`
3. 按 `Run workflow`

部署成功後，GitHub Pages 網址通常會是：

```text
https://你的帳號.github.io/LOLODAFANG
```

## 上課使用方式

1. 老師開啟 LOLODAFANG 桌面版
2. 第一次使用時輸入自己的 Supabase Project URL 與 publishable/anon key
3. 若尚未部署後端，使用設定畫面的自動部署功能，或依照 Supabase 文件手動部署 schema 與 Edge Functions
4. 點選建立新課堂
5. 把畫面上的 QR Code 投影給學生
6. 學生用手機掃 QR Code，輸入姓名後加入
7. 老師可發送提問、收集文字回覆、檔案、截圖、錄音或產生課堂報告

## 常見問題

### 學生掃 QR Code 後進不去

請確認 `VITE_PUBLIC_APP_URL` 是你的 GitHub Pages 網址，而且 Actions 已重新部署成功。

### GitHub Actions 顯示 Missing repository variable

代表 repository variables 少填了 `VITE_SUPABASE_URL`、`VITE_SUPABASE_ANON_KEY` 或 `VITE_PUBLIC_APP_URL`。

### 網頁打開但顯示尚未連接 Supabase

代表 GitHub Pages build 沒有吃到 Supabase variables，請回到 GitHub repo 的 Actions variables 檢查名稱是否完全一致。

### 老師端網址能不能直接用 GitHub Pages？

目前不行。這個專案把老師端限制在桌面版，GitHub Pages 主要給學生端使用。老師開課請使用 LOLODAFANG 桌面版。
