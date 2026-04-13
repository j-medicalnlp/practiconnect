import { DashboardLayout } from '../components/Layout'

export const SettingsPage = () => (
  <DashboardLayout active="settings">
    <div class="fade-in max-w-3xl">
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-800">
          <i class="fas fa-cog text-blue-500 mr-2"></i>設定
        </h1>
        <p class="text-gray-500 text-sm mt-0.5">通知・API連携・アカウントの設定を管理します</p>
      </div>

      {/* Notification settings */}
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
        <h2 class="text-lg font-bold text-gray-800 mb-1 flex items-center gap-2">
          <i class="fas fa-bell text-blue-500"></i>通知設定
        </h2>
        <p class="text-sm text-gray-500 mb-5">受け取る通知の種類を選択してください</p>

        <div class="space-y-4">
          {/* In-site notifications */}
          <div>
            <h3 class="text-sm font-semibold text-gray-600 mb-3 flex items-center gap-2">
              <i class="fas fa-desktop text-gray-400 text-xs"></i>サイト内通知
            </h3>
            <div class="space-y-3 pl-5">
              {[
                { id: 'notif-match', label: 'マッチング成立・申請', desc: '新しい申請や承認の通知' },
                { id: 'notif-message', label: '新着メッセージ', desc: 'マッチング相手からのメッセージ' },
                { id: 'notif-session', label: 'セッションリマインダー', desc: '24時間前・1時間前の通知' },
                { id: 'notif-report', label: '違反報告の結果', desc: '報告した案件の処理結果' },
              ].map(n => (
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <p class="text-sm font-medium text-gray-700">{n.label}</p>
                    <p class="text-xs text-gray-400">{n.desc}</p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-0.5">
                    <input type="checkbox" id={n.id} class="sr-only peer" checked />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <hr class="border-gray-100" />

          {/* Email notifications */}
          <div>
            <h3 class="text-sm font-semibold text-gray-600 mb-3 flex items-center gap-2">
              <i class="fas fa-envelope text-gray-400 text-xs"></i>メール通知
            </h3>
            <div class="space-y-3 pl-5">
              {[
                { id: 'email-match', label: 'マッチング成立・申請', desc: 'マッチングが成立した際にメールを送信' },
                { id: 'email-message', label: '新着メッセージ（未読の場合）', desc: '未読のまま一定時間経過した場合' },
                { id: 'email-session', label: 'セッションリマインダー', desc: '予定セッション前日にメールを送信' },
                { id: 'email-news', label: 'お知らせ・アップデート情報', desc: 'サービスの新機能や重要なお知らせ' },
              ].map(n => (
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <p class="text-sm font-medium text-gray-700">{n.label}</p>
                    <p class="text-xs text-gray-400">{n.desc}</p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-0.5">
                    <input type="checkbox" id={n.id} class="sr-only peer" checked />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div class="mt-5 flex justify-end">
          <button class="btn-primary" onclick="showToast('通知設定を保存しました', 'success')">
            <i class="fas fa-save"></i>保存する
          </button>
        </div>
      </section>

      {/* Video tool integration */}
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
        <h2 class="text-lg font-bold text-gray-800 mb-1 flex items-center gap-2">
          <i class="fas fa-video text-blue-500"></i>ビデオツール連携
        </h2>
        <p class="text-sm text-gray-500 mb-5">Google Meet / Zoom のデフォルト設定を登録できます</p>

        <div class="space-y-5">
          {/* Google Meet */}
          <div class="border border-gray-100 rounded-xl p-4">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                <i class="fab fa-google text-blue-500"></i>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Google Meet</p>
                <p class="text-xs text-gray-400">デフォルトの Meet URL を登録（任意）</p>
              </div>
            </div>
            <div class="flex gap-2">
              <input
                type="url"
                class="form-input flex-1 text-sm"
                placeholder="https://meet.google.com/xxx-xxxx-xxx"
              />
              <button class="btn-secondary text-sm" onclick="showToast('Google Meet URLを保存しました', 'success')">
                <i class="fas fa-save"></i>保存
              </button>
            </div>
            <p class="text-xs text-gray-400 mt-2">
              <i class="fas fa-info-circle mr-1"></i>
              空き枠登録時にデフォルト値として使用されます。セッションごとに変更可能です。
            </p>
          </div>

          {/* Zoom */}
          <div class="border border-gray-100 rounded-xl p-4">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                <i class="fas fa-video text-blue-500"></i>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Zoom</p>
                <p class="text-xs text-gray-400">デフォルトの Zoom URL を登録（任意）</p>
              </div>
            </div>
            <div class="flex gap-2">
              <input
                type="url"
                class="form-input flex-1 text-sm"
                placeholder="https://zoom.us/j/xxxxxxxxxx"
              />
              <button class="btn-secondary text-sm" onclick="showToast('Zoom URLを保存しました', 'success')">
                <i class="fas fa-save"></i>保存
              </button>
            </div>
            <p class="text-xs text-gray-400 mt-2">
              <i class="fas fa-info-circle mr-1"></i>
              空き枠登録時にデフォルト値として使用されます。セッションごとに変更可能です。
            </p>
          </div>
        </div>

        <div class="alert alert-warning text-xs mt-4">
          <i class="fas fa-shield-alt text-amber-500 flex-shrink-0"></i>
          <span>URL はマッチング成立後のみ相手に共有されます。第三者には公開されません。</span>
        </div>
      </section>

      {/* Display settings */}
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
        <h2 class="text-lg font-bold text-gray-800 mb-1 flex items-center gap-2">
          <i class="fas fa-sliders-h text-blue-500"></i>表示設定
        </h2>
        <p class="text-sm text-gray-500 mb-5">プロフィールの公開範囲を設定します</p>

        <div class="space-y-4">
          {[
            { id: 'disp-age', label: '年齢・年代を表示', desc: 'プロフィールに年齢・年代を公開する', checked: true },
            { id: 'disp-area', label: '活動エリアを表示', desc: '都道府県・地域を公開する', checked: true },
            { id: 'disp-sessions', label: '累計セッション数を表示', desc: '過去のセッション数を公開する', checked: true },
            { id: 'disp-lang', label: '対応言語を表示', desc: '使用可能な言語を公開する', checked: true },
          ].map(d => (
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="text-sm font-medium text-gray-700">{d.label}</p>
                <p class="text-xs text-gray-400">{d.desc}</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-0.5">
                <input type="checkbox" id={d.id} class="sr-only peer" checked={d.checked} />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>

        <div class="mt-5 flex justify-end">
          <button class="btn-primary" onclick="showToast('表示設定を保存しました', 'success')">
            <i class="fas fa-save"></i>保存する
          </button>
        </div>
      </section>

      {/* Account management */}
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
        <h2 class="text-lg font-bold text-gray-800 mb-1 flex items-center gap-2">
          <i class="fas fa-user-cog text-blue-500"></i>アカウント管理
        </h2>
        <p class="text-sm text-gray-500 mb-5">メールアドレス・パスワードの変更ができます</p>

        <div class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">
              登録メールアドレス
            </label>
            <div class="flex gap-2">
              <input
                type="email"
                class="form-input flex-1 text-sm"
                placeholder="example@email.com"
                value=""
              />
              <button class="btn-secondary text-sm whitespace-nowrap" onclick="showToast('確認メールを送信しました', 'info')">
                <i class="fas fa-envelope"></i>変更する
              </button>
            </div>
            <p class="text-xs text-gray-400 mt-1">変更時は確認メールが届きます</p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">
              パスワード変更
            </label>
            <div class="space-y-2">
              <input type="password" class="form-input text-sm" placeholder="現在のパスワード" />
              <input type="password" class="form-input text-sm" placeholder="新しいパスワード（8文字以上）" />
              <input type="password" class="form-input text-sm" placeholder="新しいパスワード（確認）" />
            </div>
            <div class="mt-3 flex justify-end">
              <button class="btn-primary text-sm" onclick="showToast('パスワードを変更しました', 'success')">
                <i class="fas fa-lock"></i>パスワードを変更する
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Danger zone */}
      <section class="bg-white rounded-2xl shadow-sm border border-red-100 p-6">
        <h2 class="text-lg font-bold text-red-700 mb-1 flex items-center gap-2">
          <i class="fas fa-exclamation-triangle text-red-500"></i>危険な操作
        </h2>
        <p class="text-sm text-gray-500 mb-5">以下の操作は取り消せません。慎重に行ってください。</p>

        <div class="space-y-4">
          <div class="flex items-center justify-between gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
            <div>
              <p class="text-sm font-semibold text-gray-700">アカウントを一時停止する</p>
              <p class="text-xs text-gray-400">プロフィールを非公開にし、マッチングを停止します。再開はいつでも可能です。</p>
            </div>
            <button class="flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium bg-orange-100 text-orange-700 hover:bg-orange-200 transition-smooth"
              onclick="showToast('アカウントを一時停止しました', 'warning')">
              停止する
            </button>
          </div>

          <div class="flex items-center justify-between gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
            <div>
              <p class="text-sm font-semibold text-red-700">アカウントを削除する</p>
              <p class="text-xs text-gray-400">すべてのデータが完全に削除されます。この操作は取り消せません。</p>
            </div>
            <button class="flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-smooth"
              onclick="if(confirm('本当にアカウントを削除しますか？\nこの操作は取り消せません。')) { showToast('アカウント削除リクエストを受け付けました', 'error') }">
              削除する
            </button>
          </div>
        </div>
      </section>
    </div>
  </DashboardLayout>
)
