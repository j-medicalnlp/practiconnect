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

        {/* Beta notice */}
        <div class="bg-blue-600 text-white rounded-2xl p-5 mb-6 shadow-md">
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-xl bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <i class="fas fa-tools text-white text-lg"></i>
            </div>
            <div>
              <p class="font-bold text-base mb-1">現在、会員登録機能を準備中です</p>
              <p class="text-blue-100 text-sm leading-relaxed">
                PractiConnect は現在ベータ版として開発中です。<br />
                正式リリース時にいち早くご案内するため、<strong class="text-white">メールアドレスを事前登録</strong>いただけます。
              </p>
            </div>
          </div>
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

          {/* Success message (hidden by default) */}
          <div id="register-success" class="hidden text-center py-6">
            <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-check text-green-600 text-2xl"></i>
            </div>
            <h2 class="text-xl font-bold text-gray-800 mb-2">事前登録を受け付けました！</h2>
            <p class="text-gray-500 text-sm leading-relaxed mb-6">
              正式リリース時にご登録のメールアドレスへご案内をお送りします。<br />
              しばらくお待ちください。
            </p>
            <a href="/" class="btn-primary justify-center">
              <i class="fas fa-home"></i>トップページへ戻る
            </a>
          </div>

          {/* Registration form */}
          <form id="register-form" class="space-y-4" onsubmit="handleRegister(event)">

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                表示名（ニックネーム可）<span class="text-red-500 ml-1">*</span>
              </label>
              <input type="text" id="reg-name" class="form-input" placeholder="山田はるか" required />
              <p class="text-xs text-gray-400 mt-1">本名でなくてもかまいません</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                メールアドレス<span class="text-red-500 ml-1">*</span>
              </label>
              <input type="email" id="reg-email" class="form-input" placeholder="your@email.com" required />
              <p class="text-xs text-gray-400 mt-1">他のユーザーには公開されません。リリース時にご連絡します。</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                パスワード（仮）<span class="text-red-500 ml-1">*</span>
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
                居住国・タイムゾーン
              </label>
              <select id="reg-tz" class="form-input">
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
                練習希望分野（複数選択可）
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
                  <input type="checkbox" id="agree-terms" required class="mt-1 rounded text-blue-600" />
                  <span class="text-sm text-gray-600">
                    <a href="/terms" class="text-blue-600 hover:underline">利用規約</a>および
                    <a href="/privacy" class="text-blue-600 hover:underline ml-1">プライバシーポリシー</a>に同意します
                    <span class="text-red-500 ml-1">*</span>
                  </span>
                </label>
                <label class="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" id="agree-rules" required class="mt-1 rounded text-blue-600" />
                  <span class="text-sm text-gray-600">
                    金銭の授受・有料サービスへの勧誘・資格の虚偽申告を行わないことに同意します
                    <span class="text-red-500 ml-1">*</span>
                  </span>
                </label>
              </div>
            </div>

            <button type="submit" id="register-btn" class="btn-primary w-full justify-center py-3 text-base">
              <i class="fas fa-user-plus"></i>事前登録する（無料）
            </button>

            <p class="text-xs text-center text-gray-400 mt-2">
              <i class="fas fa-lock mr-1"></i>
              正式リリース前はデータは保存されます。確認メールは現在送信されません。
            </p>
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
        if (!input) return;
        input.type = input.type === 'password' ? 'text' : 'password';
      }

      function handleRegister(e) {
        e.preventDefault();
        const name = document.getElementById('reg-name').value.trim();
        const email = document.getElementById('reg-email').value.trim();
        if (!name || !email) {
          showToast('表示名とメールアドレスは必須です', 'error');
          return;
        }
        const btn = document.getElementById('register-btn');
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 処理中...';
        setTimeout(() => {
          document.getElementById('register-form').classList.add('hidden');
          document.getElementById('register-success').classList.remove('hidden');
        }, 1200);
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

        {/* Beta notice */}
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 flex items-start gap-3">
          <i class="fas fa-info-circle text-amber-500 mt-0.5 flex-shrink-0"></i>
          <div class="text-sm text-amber-800">
            <p class="font-semibold mb-0.5">ログイン機能は準備中です</p>
            <p class="text-xs leading-relaxed">現在ベータ版のため、認証システムは開発中です。正式リリース後にご利用いただけます。</p>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <form class="space-y-4" onsubmit="handleLogin(event)">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">メールアドレス</label>
              <input type="email" class="form-input" placeholder="your@email.com" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                パスワード
                <a href="#" class="float-right text-blue-600 hover:underline font-normal text-xs" onclick="showToast('パスワードリセット機能は準備中です', 'info'); return false;">パスワードを忘れた場合</a>
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

            <button type="submit" class="btn-primary w-full justify-center py-3 text-base">
              <i class="fas fa-sign-in-alt"></i>ログイン（準備中）
            </button>
          </form>

          <p class="text-center text-sm text-gray-500 mt-4">
            アカウントをお持ちでない方は
            <a href="/register" class="text-blue-600 hover:underline font-medium ml-1">事前登録（無料）</a>
          </p>
        </div>
      </div>
    </div>
    <Footer />
    <script dangerouslySetInnerHTML={{__html: `
      function togglePassword(id) {
        const input = document.getElementById(id);
        if (!input) return;
        input.type = input.type === 'password' ? 'text' : 'password';
      }
      function handleLogin(e) {
        e.preventDefault();
        showToast('ログイン機能は現在準備中です。正式リリースをお待ちください。', 'info');
      }
    `}} />
  </>
)
