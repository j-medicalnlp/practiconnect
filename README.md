# PractiConnect - 練習が、成長になる。

## プロジェクト概要
- **名称**: PractiConnect（プラクティコネクト）
- **目的**: コーチング・カウンセリング・NLP・ヒプノセラピーを学ぶ方同士が「安全に・対等に・無償で」練習相手を見つけるオンラインマッチングプラットフォーム
- **キャッチコピー**: 「練習が、成長になる。」

## 実装済みページ

| ページ | パス | 説明 |
|--------|------|------|
| トップページ | `/` | ランディングページ・サービス紹介 |
| 会員登録 | `/register` | ソーシャルログイン・メール登録 |
| ログイン | `/login` | 認証ページ |
| ダッシュボード | `/dashboard` | 予定セッション・通知・統計 |
| プロフィール編集 | `/profile` | 基本情報・自己紹介・資格・ジャンル設定 |
| カレンダー | `/calendar` | 空き枠登録・検索・申請管理 |
| メンバー検索 | `/members` | フィルタ検索・メンバー一覧 |
| メンバー詳細 | `/members/:id` | 個人プロフィール・枠申込 |
| メッセージ | `/messages` | マッチング後チャット |
| 利用ルール | `/rules` | 禁止事項・ルール詳細 |
| 違反報告 | `/report` | 匿名違反報告フォーム |

## 技術スタック
- **フレームワーク**: Hono（TSX JSX）
- **スタイリング**: Tailwind CSS（CDN）
- **アイコン**: Font Awesome 6
- **ランタイム**: Cloudflare Pages / Workers
- **ビルド**: Vite + @hono/vite-build

## 主要機能（フェーズ1 MVP）
- ✅ サービス紹介ランディングページ
- ✅ 会員登録・ログインUI
- ✅ ダッシュボード（予定セッション・通知・統計）
- ✅ プロフィール編集（基本・自己紹介・資格・ジャンル）
- ✅ カレンダー（月表示・空き枠登録モーダル）
- ✅ 枠検索・フィルタリング・申請管理
- ✅ メンバー検索・詳細
- ✅ メッセージ（チャットUI）
- ✅ 利用ルール・禁止事項
- ✅ 違反報告フォーム
- ✅ レスポンシブデザイン（PC・タブレット・スマホ）

## 未実装（フェーズ2以降）
- Firebase Authentication / Auth0 連携
- Cloudflare D1 によるデータ永続化
- Google Meet / Zoom API 自動URL生成
- リアルタイムメッセージ（WebSocket）
- メール通知（SendGrid）
- 管理画面

## デザイン方針
- **カラー**: 白・青（#2563eb）・グリーン（#16a34a）・ティール（#0d9488）
- **トンマナ**: 安心・成長・信頼
- WCAG 2.1 AA 準拠を目指した配色・コントラスト

## ローカル開発
```bash
npm install
npm run build
pm2 start ecosystem.config.cjs
# → http://localhost:3000
```

## デプロイ
```bash
npm run build
npx wrangler pages deploy dist --project-name practiconnect
```

## プロジェクト構造
```
src/
├── index.tsx           # メインルーティング
├── renderer.tsx        # HTML レイアウト・ヘッダ
├── components/
│   └── Layout.tsx      # NavBar・Footer・DashboardLayout
└── pages/
    ├── top.tsx         # トップページ
    ├── auth.tsx        # 登録・ログイン
    ├── dashboard.tsx   # ダッシュボード
    ├── profile.tsx     # プロフィール編集
    ├── calendar.tsx    # カレンダー・マッチング
    ├── members.tsx     # メンバー検索・詳細
    ├── messages.tsx    # メッセージ
    └── rules.tsx       # 利用ルール・違反報告
public/
└── static/
    ├── style.css       # カスタムCSS
    └── app.js          # フロントエンドJS
```

**最終更新**: 2026年4月13日
