import { DashboardLayout } from '../components/Layout'

export const DashboardPage = () => (
  <DashboardLayout active="home">
    <div class="fade-in">
      {/* Welcome header */}
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 class="text-2xl font-bold text-gray-800">こんにちは、さくらさん！👋</h1>
          <p class="text-gray-500 mt-0.5">今日も練習を続けましょう。</p>
        </div>
        <a href="/calendar" class="btn-primary self-start sm:self-auto">
          <i class="fas fa-plus"></i>枠を登録する
        </a>
      </div>

      {/* Announcement */}
      <div class="alert alert-info mb-6">
        <i class="fas fa-bullhorn text-blue-500 flex-shrink-0 mt-0.5"></i>
        <div>
          <p class="font-medium text-blue-900 text-sm">【お知らせ】新機能リリース</p>
          <p class="text-xs text-blue-700 mt-0.5">カレンダーのGoogle Calendar連携機能（β版）がリリースされました。設定ページからお試しください。</p>
        </div>
        <button class="ml-auto text-blue-400 hover:text-blue-600 flex-shrink-0">
          <i class="fas fa-times"></i>
        </button>
      </div>

      {/* Stats */}
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: '予定セッション', value: '3', icon: 'fa-calendar-check', color: 'border-blue-400', bg: 'bg-blue-50', text: 'text-blue-600' },
          { label: '累計セッション', value: '12', icon: 'fa-handshake', color: 'border-teal-400', bg: 'bg-teal-50', text: 'text-teal-600' },
          { label: '未読メッセージ', value: '3', icon: 'fa-envelope', color: 'border-pink-400', bg: 'bg-pink-50', text: 'text-pink-600' },
          { label: '募集中の枠', value: '2', icon: 'fa-calendar-plus', color: 'border-green-400', bg: 'bg-green-50', text: 'text-green-600' },
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

          <div class="space-y-3">
            {[
              {
                date: '4月15日（火）',
                time: '19:00〜20:00',
                partner: '山田はるかさん',
                genre: 'コーチング',
                role: '施術者役',
                tool: 'Google Meet',
                tagCls: 'tag-coaching',
                sessionCls: 'session-card',
                url: 'https://meet.google.com/xxx',
              },
              {
                date: '4月18日（金）',
                time: '10:00〜11:00',
                partner: '鈴木たけしさん',
                genre: 'NLP',
                role: 'クライアント役',
                tool: 'Zoom',
                tagCls: 'tag-nlp',
                sessionCls: 'session-card nlp',
                url: 'https://zoom.us/j/xxx',
              },
              {
                date: '4月22日（火）',
                time: '14:00〜15:30',
                partner: '佐藤みのりさん',
                genre: 'カウンセリング',
                role: '両方可',
                tool: 'Google Meet',
                tagCls: 'tag-counseling',
                sessionCls: 'session-card counseling',
                url: 'https://meet.google.com/yyy',
              },
            ].map(s => (
              <div class={`${s.sessionCls} bg-white border border-gray-100 rounded-xl p-4`}>
                <div class="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-sm font-bold text-gray-800">{s.date} {s.time}</span>
                      <span class={`badge ${s.tagCls}`}>{s.genre}</span>
                    </div>
                    <p class="text-sm text-gray-600">
                      <i class="fas fa-user mr-1.5 text-gray-400"></i>{s.partner}
                      <span class="mx-2 text-gray-300">|</span>
                      <span class="text-gray-500">{s.role}</span>
                      <span class="mx-2 text-gray-300">|</span>
                      <i class="fas fa-video mr-1 text-gray-400"></i>{s.tool}
                    </p>
                  </div>
                  <div class="flex gap-2">
                    <a href={s.url} class="btn-primary text-xs py-1.5 px-3">
                      <i class="fas fa-video"></i>参加
                    </a>
                    <a href="/messages" class="btn-secondary text-xs py-1.5 px-3">
                      <i class="fas fa-comment"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar widgets */}
        <div class="space-y-5">
          {/* Notifications */}
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-bold text-gray-800">
                <i class="fas fa-bell text-amber-400 mr-2"></i>通知
              </h3>
              <button onclick="markAllRead()" class="text-xs text-blue-600 hover:underline">すべて既読</button>
            </div>
            <div id="notif-list" class="space-y-2">
              {[
                { msg: '山田はるかさんがセッション申請を承認しました', time: '5分前', unread: true, icon: 'fa-check-circle', color: 'text-green-500' },
                { msg: '鈴木たけしさんからメッセージが届きました', time: '1時間前', unread: true, icon: 'fa-envelope', color: 'text-blue-500' },
                { msg: 'セッションリマインダー：明日19:00〜 山田はるかさん', time: '2時間前', unread: true, icon: 'fa-clock', color: 'text-amber-500' },
                { msg: '新しい練習枠が5件追加されました（コーチング）', time: '昨日', unread: false, icon: 'fa-calendar-plus', color: 'text-teal-500' },
              ].map(n => (
                <div class={`flex gap-3 p-2.5 rounded-lg text-sm ${n.unread ? 'bg-blue-50 unread' : ''}`}>
                  <i class={`fas ${n.icon} ${n.color} flex-shrink-0 mt-0.5`}></i>
                  <div class="flex-1 min-w-0">
                    <p class="text-gray-700 text-xs leading-snug">{n.msg}</p>
                    <p class="text-gray-400 text-xs mt-0.5">{n.time}</p>
                  </div>
                  {n.unread && <div class="notif-badge w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>}
                </div>
              ))}
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
            <div class="space-y-2">
              {[
                { date: '4月25日(金)', time: '21:00〜22:00', genre: 'コーチング', requests: 1, tag: 'tag-coaching' },
                { date: '4月27日(日)', time: '10:00〜11:00', genre: 'NLP', requests: 0, tag: 'tag-nlp' },
              ].map(slot => (
                <div class="bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <div class="flex items-start justify-between">
                    <div>
                      <p class="text-xs font-bold text-gray-700">{slot.date} {slot.time}</p>
                      <span class={`badge ${slot.tag} mt-1`}>{slot.genre}</span>
                    </div>
                    <div class="text-right">
                      {slot.requests > 0 && (
                        <span class="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">
                          申請 {slot.requests}
                        </span>
                      )}
                    </div>
                  </div>
                  <div class="flex gap-2 mt-2">
                    <button class="text-xs text-blue-600 hover:underline">編集</button>
                    <span class="text-gray-300">|</span>
                    <button class="text-xs text-red-500 hover:underline">削除</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
                <span class="ml-auto bg-red-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Recent sessions history */}
      <div class="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div class="flex items-center justify-between mb-5">
          <h2 class="text-lg font-bold text-gray-800">
            <i class="fas fa-history text-gray-400 mr-2"></i>過去のセッション
          </h2>
          <button class="text-sm text-gray-400 hover:text-gray-600">すべて見る →</button>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-100">
                <th class="text-left text-gray-400 font-medium pb-3 pr-4">日時</th>
                <th class="text-left text-gray-400 font-medium pb-3 pr-4">相手</th>
                <th class="text-left text-gray-400 font-medium pb-3 pr-4">ジャンル</th>
                <th class="text-left text-gray-400 font-medium pb-3 pr-4">役割</th>
                <th class="text-left text-gray-400 font-medium pb-3">ツール</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              {[
                { date: '4月10日', partner: '中村ゆきさん', genre: 'コーチング', tag: 'tag-coaching', role: '施術者役', tool: 'Google Meet' },
                { date: '4月5日', partner: '高橋けんじさん', genre: 'NLP', tag: 'tag-nlp', role: 'クライアント役', tool: 'Zoom' },
                { date: '3月28日', partner: '伊藤まなさん', genre: 'カウンセリング', tag: 'tag-counseling', role: '両方', tool: 'Google Meet' },
                { date: '3月20日', partner: '渡辺そらさん', genre: 'ヒプノセラピー', tag: 'tag-hypno', role: 'クライアント役', tool: 'Zoom' },
              ].map(s => (
                <tr class="hover:bg-gray-50">
                  <td class="py-3 pr-4 text-gray-600">{s.date}</td>
                  <td class="py-3 pr-4 font-medium text-gray-800">{s.partner}</td>
                  <td class="py-3 pr-4"><span class={`badge ${s.tag}`}>{s.genre}</span></td>
                  <td class="py-3 pr-4 text-gray-500">{s.role}</td>
                  <td class="py-3 text-gray-500"><i class="fas fa-video mr-1 text-gray-400"></i>{s.tool}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </DashboardLayout>
)
