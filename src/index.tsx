import { Hono } from 'hono'
import { renderer } from './renderer'
import { TopPage } from './pages/top'
import { RegisterPage, LoginPage } from './pages/auth'
import { DashboardPage } from './pages/dashboard'
import { ProfilePage } from './pages/profile'
import { CalendarPage } from './pages/calendar'
import { MembersPage, MemberDetailPage } from './pages/members'
import { MessagesPage } from './pages/messages'
import { RulesPage, ReportPage } from './pages/rules'
import { SettingsPage } from './pages/settings'

const app = new Hono()

app.use(renderer)

// Top page
app.get('/', (c) => c.render(<TopPage />, { title: 'PractiConnect - 練習が、成長になる。' }))

// Auth
app.get('/register', (c) => c.render(<RegisterPage />, { title: '無料会員登録' }))
app.get('/login', (c) => c.render(<LoginPage />, { title: 'ログイン' }))

// Dashboard & profile
app.get('/dashboard', (c) => c.render(<DashboardPage />, { title: 'ダッシュボード' }))
app.get('/profile', (c) => c.render(<ProfilePage />, { title: 'プロフィール編集' }))

// Calendar & matching
app.get('/calendar', (c) => c.render(<CalendarPage />, { title: 'カレンダー・マッチング' }))

// Members
app.get('/members', (c) => c.render(<MembersPage />, { title: 'メンバー検索' }))
app.get('/members/:id', (c) => {
  const id = c.req.param('id')
  return c.render(<MemberDetailPage id={id} />, { title: 'メンバー詳細' })
})

// Messages
app.get('/messages', (c) => c.render(<MessagesPage />, { title: 'メッセージ' }))

// Rules & report
app.get('/rules', (c) => c.render(<RulesPage />, { title: '利用ルール・禁止事項' }))
app.get('/report', (c) => c.render(<ReportPage />, { title: '違反報告' }))

// Static pages (simple)
app.get('/terms', (c) => c.render(
  <div>
    <a href="/" style="display:inline-block;padding:12px 20px;background:#2563eb;color:white;border-radius:8px;text-decoration:none;margin:20px;">← トップへ戻る</a>
    <div style="max-width:800px;margin:0 auto;padding:20px;">
      <h1 style="font-size:24px;font-weight:bold;margin-bottom:20px;">利用規約</h1>
      <p>詳細な利用規約は現在準備中です。<a href="/rules">利用ルール・禁止事項</a>をご確認ください。</p>
    </div>
  </div>,
  { title: '利用規約' }
))

app.get('/privacy', (c) => c.render(
  <div>
    <a href="/" style="display:inline-block;padding:12px 20px;background:#2563eb;color:white;border-radius:8px;text-decoration:none;margin:20px;">← トップへ戻る</a>
    <div style="max-width:800px;margin:0 auto;padding:20px;">
      <h1 style="font-size:24px;font-weight:bold;margin-bottom:20px;">プライバシーポリシー</h1>
      <p>プライバシーポリシーは現在準備中です。</p>
    </div>
  </div>,
  { title: 'プライバシーポリシー' }
))

app.get('/contact', (c) => c.render(
  <div>
    <a href="/" style="display:inline-block;padding:12px 20px;background:#2563eb;color:white;border-radius:8px;text-decoration:none;margin:20px;">← トップへ戻る</a>
    <div style="max-width:600px;margin:0 auto;padding:20px;">
      <h1 style="font-size:24px;font-weight:bold;margin-bottom:20px;">お問い合わせ</h1>
      <p>お問い合わせフォームは現在準備中です。メールにてお問い合わせください。</p>
    </div>
  </div>,
  { title: 'お問い合わせ' }
))

app.get('/settings', (c) => c.render(<SettingsPage />, { title: '設定' }))

export default app
