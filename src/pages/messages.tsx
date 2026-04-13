import { DashboardLayout } from '../components/Layout'

export const MessagesPage = () => (
  <DashboardLayout active="messages">
    <div class="fade-in">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">
        <i class="fas fa-envelope text-blue-500 mr-2"></i>メッセージ
      </h1>

      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" style="height: calc(100vh - 200px); min-height: 500px;">
        <div class="flex h-full">
          {/* Contact list */}
          <div class="w-full sm:w-72 lg:w-80 border-r border-gray-100 flex flex-col">
            <div class="p-3 border-b border-gray-100">
              <div class="relative">
                <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
                <input type="text" class="form-input pl-8 text-sm py-2" placeholder="検索..." />
              </div>
            </div>

            <div class="flex-1 overflow-y-auto divide-y divide-gray-50">
              {[
                {
                  name: '山田はるか',
                  color: 'from-blue-400 to-blue-600',
                  last: '明日の練習楽しみにしています！',
                  time: '5分前',
                  unread: 2,
                  active: true,
                },
                {
                  name: '鈴木たけし',
                  color: 'from-green-400 to-teal-500',
                  last: 'ありがとうございました。とても勉強になりました。',
                  time: '1時間前',
                  unread: 1,
                  active: false,
                },
                {
                  name: '佐藤みのり',
                  color: 'from-purple-400 to-purple-600',
                  last: 'セッション後の振り返りができますか？',
                  time: '昨日',
                  unread: 0,
                  active: false,
                },
                {
                  name: '中村ゆき',
                  color: 'from-amber-400 to-orange-500',
                  last: 'よろしくお願いします！',
                  time: '3日前',
                  unread: 0,
                  active: false,
                },
              ].map(c => (
                <div class={`p-3 cursor-pointer hover:bg-gray-50 transition-smooth ${c.active ? 'bg-blue-50' : ''}`}>
                  <div class="flex gap-3">
                    <div class={`w-10 h-10 rounded-full bg-gradient-to-br ${c.color} flex items-center justify-center flex-shrink-0`}>
                      <span class="text-white font-bold text-sm">{c.name[0]}</span>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between">
                        <p class={`font-semibold text-sm truncate ${c.active ? 'text-blue-700' : 'text-gray-800'}`}>{c.name}</p>
                        <div class="flex items-center gap-1 flex-shrink-0">
                          <span class="text-xs text-gray-400">{c.time}</span>
                          {c.unread > 0 && (
                            <span class="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{c.unread}</span>
                          )}
                        </div>
                      </div>
                      <p class="text-xs text-gray-500 truncate mt-0.5">{c.last}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat area */}
          <div class="hidden sm:flex flex-1 flex-col min-w-0">
            {/* Chat header */}
            <div class="p-4 border-b border-gray-100 flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span class="text-white font-bold text-sm">山</span>
              </div>
              <div class="flex-1">
                <p class="font-bold text-gray-800">山田はるか</p>
                <p class="text-xs text-gray-400">
                  <i class="fas fa-calendar mr-1"></i>次回セッション：4月15日(火) 19:00〜 · Google Meet
                </p>
              </div>
              <div class="flex items-center gap-2">
                <a href="https://meet.google.com/xxx" class="btn-primary text-xs py-1.5 px-3">
                  <i class="fas fa-video"></i>参加
                </a>
                <a href="/report" class="text-gray-400 hover:text-red-500 transition-smooth p-1.5" title="違反報告">
                  <i class="fas fa-flag text-sm"></i>
                </a>
              </div>
            </div>

            {/* Warning */}
            <div class="alert alert-warning mx-4 mt-3 text-xs">
              <i class="fas fa-exclamation-triangle text-amber-500 flex-shrink-0"></i>
              <span>マッチングが成立した相手とのみ連絡できます。金銭の授受・勧誘・外部連絡先の共有は禁止です。</span>
            </div>

            {/* Messages */}
            <div class="flex-1 overflow-y-auto p-4 space-y-3">
              {[
                { me: false, text: 'はじめまして！セッション申し込みありがとうございます。4月15日のコーチング練習、よろしくお願いします😊', time: '昨日 10:00' },
                { me: true, text: 'こちらこそよろしくお願いします！私はコーチ役でいかせていただきたいと思っています。テーマは「目標設定」でいかがでしょうか？', time: '昨日 10:15' },
                { me: false, text: 'ぜひ！目標設定は私も練習したかったテーマです。事前に何か準備しておくことはありますか？', time: '昨日 10:20' },
                { me: true, text: '特に準備は不要ですが、練習したい「目標」を一つ考えてきていただけると助かります。何でもOKです！', time: '昨日 10:30' },
                { me: false, text: 'わかりました！準備しておきます。URLは当日に共有してもらえますか？', time: '昨日 11:00' },
                { me: true, text: 'はい、当日の1時間前にこちらのメッセージでURLをお送りします。よろしくお願いします！', time: '昨日 11:05' },
                { me: false, text: '明日の練習楽しみにしています！', time: '5分前' },
              ].map(msg => (
                <div class={`flex ${msg.me ? 'justify-end' : 'justify-start'}`}>
                  {!msg.me && (
                    <div class="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 mr-2 mt-auto">
                      <span class="text-white font-bold text-xs">山</span>
                    </div>
                  )}
                  <div class={msg.me ? 'msg-bubble-me' : 'msg-bubble-other'}>
                    <p class="text-sm text-gray-700 leading-relaxed">{msg.text}</p>
                    <p class="text-xs text-gray-400 mt-1 text-right">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message input */}
            <div class="p-4 border-t border-gray-100">
              <div class="flex gap-2">
                <input type="text" class="form-input flex-1 text-sm" placeholder="メッセージを入力... (URLの送信は制限されています)" />
                <button class="btn-primary text-sm px-4" onclick="showToast('メッセージを送信しました')">
                  <i class="fas fa-paper-plane"></i>
                </button>
              </div>
              <p class="text-xs text-gray-400 mt-1.5">テキストのみ送信可能 · URL・ファイル送信不可</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
)
