import { NavBar, Footer } from '../components/Layout'

export const RegisterPage = () => (
  <>
    <NavBar />
    <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-12">
      <div class="max-w-lg mx-auto px-4">
        {/* Header */}
        <div class="text-center mb-8">
          <a href="/" class="inline-flex items-center gap-2 mb-6">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center shadow-md">
              <i class="fas fa-hands-helping text-white"></i>
            </div>
            <span class="text-2xl font-bold bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">PractiConnect</span>
          </a>
          <h1 class="text-2xl font-bold text-gray-800">無料アカウント作成</h1>
          <p class="text-gray-500 mt-1 text-sm">練習相手を見つけて、スキルを磨きましょう</p>
        </div>

        {/* Warning */}
        <div class="alert alert-warning mb-6">
          <i class="fas fa-exclamation-triangle text-amber-500 flex-shrink-0 mt-0.5"></i>
          <div class="text-xs">
            <p class="font-semibold mb-0.5">ご登録前にご確認ください</p>
            <p>本サービスは無償の練習マッチングです。金銭の授受・勧誘・営業行為は厳禁です。</p>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {/* Registration form */}
          <form id="register-form" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                表示名（ニックネーム可）<span class="text-red-500 ml-1">*</span>
              </label>
              <input type="text" class="form-input" placeholder="山田はるか" required />
              <p class="text-xs text-gray-400 mt-1">本名でなくてもかまいません</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                メールアドレス<span class="text-red-500 ml-1">*</span>
              </label>
              <input type="email" class="form-input" placeholder="your@email.com" required />
              <p class="text-xs text-gray-400 mt-1">他のユーザーには公開されません</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                パスワード<span class="text-red-500 ml-1">*</span>
              </label>
              <div class="relative">
                <input type="password" id="password-input" class="form-input pr-10" placeholder="8文字以上・英数字" required
                  oninput="checkPasswordStrength(this.value)" />
                <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onclick="togglePassword('password-input')">
                  <i class="fas fa-eye"></i>
                </button>
              </div>
              <div class="mt-1.5">
                <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div id="pw-strength" class="h-2 rounded-full transition-all bg-gray-200" style="width:0%"></div>
                </div>
                <p class="text-xs text-gray-400 mt-1" id="pw-strength-label"></p>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                居住国・タイムゾーン<span class="text-red-500 ml-1">*</span>
              </label>
              <select class="form-input" required>
                <option value="">選択してください</option>
                <option value="asia-tokyo">日本（JST UTC+9）</option>
                <option value="asia-singapore">シンガポール（SGT UTC+8）</option>
                <option value="asia-seoul">韓国（KST UTC+9）</option>
                <option value="europe-london">イギリス（GMT UTC+0）</option>
                <option value="america-new_york">米国東部（EST UTC-5）</option>
                <option value="america-los_angeles">米国西部（PST UTC-8）</option>
                <option value="australia-sydney">オーストラリア（AEST UTC+10）</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                練習希望分野<span class="text-red-500 ml-1">*</span>（複数選択可）
              </label>
              <div class="grid grid-cols-2 gap-2">
                {[
                  { id: 'coaching', label: 'コーチング', icon: 'fa-comment-dots' },
                  { id: 'counseling', label: 'カウンセリング', icon: 'fa-heart' },
                  { id: 'nlp', label: 'NLP', icon: 'fa-brain' },
                  { id: 'hypno', label: 'ヒプノセラピー', icon: 'fa-moon' },
                ].map(g => (
                  <label class="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-smooth">
                    <input type="checkbox" value={g.id} class="rounded text-blue-600" />
                    <i class={`fas ${g.icon} text-sm text-gray-500`}></i>
                    <span class="text-sm font-medium text-gray-700">{g.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div class="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div class="space-y-2">
                <label class="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required class="mt-1 rounded text-blue-600" />
                  <span class="text-sm text-gray-600">
                    <a href="/terms" class="text-blue-600 hover:underline">利用規約</a>および
                    <a href="/privacy" class="text-blue-600 hover:underline ml-1">プライバシーポリシー</a>に同意します
                    <span class="text-red-500 ml-1">*</span>
                  </span>
                </label>
                <label class="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required class="mt-1 rounded text-blue-600" />
                  <span class="text-sm text-gray-600">
                    金銭の授受・有料サービスへの勧誘・資格の虚偽申告を行わないことに同意します
                    <span class="text-red-500 ml-1">*</span>
                  </span>
                </label>
              </div>
            </div>

            <button type="submit" class="btn-primary w-full justify-center py-3 text-base"
              onclick="showToast('登録メールを送信しました。メールをご確認ください。'); return false;">
              <i class="fas fa-user-plus"></i>アカウントを作成する
            </button>
          </form>

          <p class="text-center text-sm text-gray-500 mt-4">
            すでにアカウントをお持ちの方は
            <a href="/login" class="text-blue-600 hover:underline font-medium ml-1">ログイン</a>
          </p>
        </div>
      </div>
    </div>
    <Footer />
    <script dangerouslySetInnerHTML={{__html: `
      function togglePassword(id) {
        const input = document.getElementById(id);
        input.type = input.type === 'password' ? 'text' : 'password';
      }
    `}} />
  </>
)

export const LoginPage = () => (
  <>
    <NavBar />
    <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-12">
      <div class="max-w-md mx-auto px-4">
        <div class="text-center mb-8">
          <a href="/" class="inline-flex items-center gap-2 mb-6">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center shadow-md">
              <i class="fas fa-hands-helping text-white"></i>
            </div>
            <span class="text-2xl font-bold bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">PractiConnect</span>
          </a>
          <h1 class="text-2xl font-bold text-gray-800">ログイン</h1>
          <p class="text-gray-500 mt-1 text-sm">おかえりなさい！セッションを続けましょう</p>
        </div>

        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">メールアドレス</label>
              <input type="email" class="form-input" placeholder="your@email.com" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                パスワード
                <a href="/password-reset" class="float-right text-blue-600 hover:underline font-normal text-xs">パスワードを忘れた場合</a>
              </label>
              <div class="relative">
                <input type="password" id="login-pw" class="form-input pr-10" placeholder="パスワード" />
                <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onclick="togglePassword('login-pw')">
                  <i class="fas fa-eye"></i>
                </button>
              </div>
            </div>

            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" class="rounded text-blue-600" />
              <span class="text-sm text-gray-600">ログイン状態を保持する</span>
            </label>

            <a href="/dashboard" class="btn-primary w-full justify-center py-3 text-base block text-center">
              <i class="fas fa-sign-in-alt"></i>ログイン
            </a>
          </form>

          <p class="text-center text-sm text-gray-500 mt-4">
            アカウントをお持ちでない方は
            <a href="/register" class="text-blue-600 hover:underline font-medium ml-1">無料登録</a>
          </p>
        </div>
      </div>
    </div>
    <Footer />
    <script dangerouslySetInnerHTML={{__html: `
      function togglePassword(id) {
        const input = document.getElementById(id);
        input.type = input.type === 'password' ? 'text' : 'password';
      }
    `}} />
  </>
)
