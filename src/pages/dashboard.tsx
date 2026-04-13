import { DashboardLayout } from '../components/Layout'

export const DashboardPage = () => (
  <DashboardLayout active="home">
    <div class="fade-in">
      {/* Welcome header */}
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 class="text-2xl font-bold text-gray-800">ダッシュボード</h1>
          <p class="text-gray-500 mt-0.5">練習枠を登録・検索して、セッションを始めましょう。</p>
        </div>
        <a href="/calendar" class="btn-primary self-start sm:self-auto">
          <i class="fas fa-plus"></i>枠を登録する
        </a>
      </div>

      {/* Stats */}
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: '予定セッション', value: '0', icon: 'fa-calendar-check', color: 'border-blue-400', bg: 'bg-blue-50', text: 'text-blue-600' },
          { label: '累計セッション', value: '0', icon: 'fa-handshake', color: 'border-teal-400', bg: 'bg-teal-50', text: 'text-teal-600' },
          { label: '未読メッセージ', value: '0', icon: 'fa-envelope', color: 'border-pink-400', bg: 'bg-pink-50', text: 'text-pink-600' },
          { label: '募集中の枠', value: '0', icon: 'fa-calendar-plus', color: 'border-green-400', bg: 'bg-green-50', text: 'text-green-600' },
        ].map(s => (
          <div class={`stat-card ${s.color}`}>
            <div class={`${s.bg} ${s.text} w-10 h-10 rounded-xl flex items-center justify-center mb-3`}>
              <i class={`fas ${s.icon} text-lg`}></i>
            </div>
            <p class="text-2xl font-bold text-gray-800">{s.value}</p>
            <p class="text-sm text-gray-500 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming sessions */}
        <div class="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div class="flex items-center justify-between mb-5">
            <h2 class="text-lg font-bold text-gray-800">
              <i class="fas fa-calendar-alt text-blue-500 mr-2"></i>予定セッション
            </h2>
            <a href="/calendar" class="text-sm text-blue-600 hover:underline">カレンダーを見る →</a>
          </div>
          <div class="flex flex-col items-center justify-center py-10 text-gray-400">
            <i class="fas fa-calendar-alt text-4xl mb-3 text-gray-200"></i>
            <p class="text-sm">予定しているセッションはありません</p>
            <a href="/calendar" class="mt-4 btn-primary text-sm py-2">
              <i class="fas fa-search"></i>練習相手を探す
            </a>
          </div>
        </div>

        {/* Sidebar widgets */}
        <div class="space-y-5">
          {/* Quick links */}
          <div class="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-5 text-white">
            <h3 class="font-bold mb-3">クイックアクション</h3>
            <div class="space-y-2">
              <a href="/members" class="flex items-center gap-2 text-blue-100 hover:text-white text-sm transition-smooth">
                <i class="fas fa-search w-4"></i>練習相手を探す
              </a>
              <a href="/calendar" class="flex items-center gap-2 text-blue-100 hover:text-white text-sm transition-smooth">
                <i class="fas fa-calendar-plus w-4"></i>空き枠を登録する
              </a>
              <a href="/profile" class="flex items-center gap-2 text-blue-100 hover:text-white text-sm transition-smooth">
                <i class="fas fa-user-edit w-4"></i>プロフィールを編集
              </a>
              <a href="/messages" class="flex items-center gap-2 text-blue-100 hover:text-white text-sm transition-smooth">
                <i class="fas fa-envelope w-4"></i>メッセージを確認
              </a>
            </div>
          </div>

          {/* My slots */}
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-bold text-gray-800">
                <i class="fas fa-calendar-plus text-green-500 mr-2"></i>募集中の枠
              </h3>
              <a href="/calendar" class="text-xs text-blue-600 hover:underline">+追加</a>
            </div>
            <div class="flex flex-col items-center justify-center py-6 text-gray-400">
              <i class="fas fa-calendar-plus text-3xl mb-2 text-gray-200"></i>
              <p class="text-xs text-center">募集中の枠はありません<br />カレンダーから登録できます</p>
            </div>
          </div>

          {/* Notifications */}
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-bold text-gray-800">
                <i class="fas fa-bell text-amber-400 mr-2"></i>通知
              </h3>
            </div>
            <div class="flex flex-col items-center justify-center py-6 text-gray-400">
              <i class="fas fa-bell text-3xl mb-2 text-gray-200"></i>
              <p class="text-xs">新しい通知はありません</p>
            </div>
          </div>
        </div>
      </div>

      {/* Getting started guide */}
      <div class="mt-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl border border-blue-100 p-6">
        <h2 class="text-lg font-bold text-gray-800 mb-4">
          <i class="fas fa-rocket text-blue-500 mr-2"></i>はじめ方ガイド
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { step: '1', icon: 'fa-user-edit', title: 'プロフィールを設定', desc: '自己紹介・資格・ジャンルを登録して、練習相手に自分を伝えましょう。', href: '/profile', label: 'プロフィールを編集' },
            { step: '2', icon: 'fa-calendar-plus', title: '空き枠を登録する', desc: '練習できる日時をカレンダーに登録。相手からの申請を受け付けます。', href: '/calendar', label: '枠を登録する' },
            { step: '3', icon: 'fa-search', title: '練習相手を探す', desc: 'ジャンル・日時・役割で絞り込んで、ぴったりの相手を見つけましょう。', href: '/members', label: 'メンバーを探す' },
          ].map(g => (
            <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {g.step}
                </div>
                <h3 class="font-semibold text-gray-800 text-sm">{g.title}</h3>
              </div>
              <p class="text-xs text-gray-500 leading-relaxed mb-3">{g.desc}</p>
              <a href={g.href} class="text-xs text-blue-600 hover:underline font-medium">
                {g.label} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </DashboardLayout>
)
