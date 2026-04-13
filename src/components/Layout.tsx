// Common layout components

export const NavBar = ({ active = '' }: { active?: string }) => (
  <nav class="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" class="flex items-center gap-2 no-underline">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center">
            <i class="fas fa-hands-helping text-white text-sm"></i>
          </div>
          <span class="text-xl font-bold bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">
            PractiConnect
          </span>
        </a>

        {/* Desktop Nav */}
        <div class="hidden md:flex items-center gap-1">
          <a href="/members" class={`px-3 py-2 rounded-lg text-sm font-medium transition-smooth ${active === 'members' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
            <i class="fas fa-users mr-1"></i>メンバー検索
          </a>
          <a href="/calendar" class={`px-3 py-2 rounded-lg text-sm font-medium transition-smooth ${active === 'calendar' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
            <i class="fas fa-calendar-alt mr-1"></i>カレンダー
          </a>
          <a href="/rules" class={`px-3 py-2 rounded-lg text-sm font-medium transition-smooth ${active === 'rules' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
            <i class="fas fa-shield-alt mr-1"></i>利用ルール
          </a>
        </div>

        {/* Auth buttons */}
        <div class="hidden md:flex items-center gap-3">
          <a href="/login" class="text-sm font-medium text-gray-600 hover:text-blue-700 transition-smooth px-3 py-2">
            ログイン
          </a>
          <a href="/register" class="btn-primary text-sm py-2 px-4">
            <i class="fas fa-user-plus"></i>無料登録
          </a>
          <a href="/dashboard" class="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1.5 transition-smooth" title="ダッシュボード（デモ）">
            <div class="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
              <span class="text-white text-xs font-bold">田</span>
            </div>
            <span class="text-sm text-gray-700 font-medium">田中さくら</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button onclick="toggleMobileMenu()" class="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100">
          <i class="fas fa-bars text-lg"></i>
        </button>
      </div>
    </div>

    {/* Mobile menu */}
    <div id="mobile-menu" class="md:hidden border-t border-gray-100 bg-white">
      <div class="px-4 py-3 space-y-1">
        <a href="/members" class="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">
          <i class="fas fa-users mr-2"></i>メンバー検索
        </a>
        <a href="/calendar" class="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">
          <i class="fas fa-calendar-alt mr-2"></i>カレンダー
        </a>
        <a href="/rules" class="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">
          <i class="fas fa-shield-alt mr-2"></i>利用ルール
        </a>
        <hr class="my-2" />
        <a href="/login" class="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50">ログイン</a>
        <a href="/register" class="block px-3 py-2 rounded-lg text-sm bg-blue-600 text-white text-center font-medium">無料登録</a>
      </div>
    </div>
  </nav>
)

export const Footer = () => (
  <footer class="bg-gray-900 text-gray-300 mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
              <i class="fas fa-hands-helping text-white text-sm"></i>
            </div>
            <span class="text-white text-lg font-bold">PractiConnect</span>
          </div>
          <p class="text-sm text-gray-400 leading-relaxed">
            練習が、成長になる。<br />
            コーチング・カウンセリング・NLP・ヒプノセラピーを学ぶ方の練習マッチングプラットフォーム。
          </p>
          <div class="flex gap-3 mt-4">
            <a href="#" class="text-gray-400 hover:text-white transition-smooth"><i class="fab fa-twitter text-lg"></i></a>
            <a href="#" class="text-gray-400 hover:text-white transition-smooth"><i class="fab fa-instagram text-lg"></i></a>
            <a href="#" class="text-gray-400 hover:text-white transition-smooth"><i class="fab fa-facebook text-lg"></i></a>
          </div>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">サービス</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="/" class="hover:text-white transition-smooth">PractiConnectとは</a></li>
            <li><a href="/members" class="hover:text-white transition-smooth">メンバー検索</a></li>
            <li><a href="/calendar" class="hover:text-white transition-smooth">カレンダー</a></li>
            <li><a href="/register" class="hover:text-white transition-smooth">無料登録</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">サポート</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="/rules" class="hover:text-white transition-smooth">利用ルール</a></li>
            <li><a href="/terms" class="hover:text-white transition-smooth">利用規約</a></li>
            <li><a href="/privacy" class="hover:text-white transition-smooth">プライバシーポリシー</a></li>
            <li><a href="/contact" class="hover:text-white transition-smooth">お問い合わせ</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">注意事項</h4>
          <div class="alert alert-warning text-xs">
            <i class="fas fa-exclamation-triangle text-amber-500 mt-0.5 flex-shrink-0"></i>
            <span>本サービスは無償の練習マッチングです。金銭の授受・勧誘・営業行為は厳禁です。</span>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-xs text-gray-500">© 2026 PractiConnect. All rights reserved.</p>
        <div class="flex gap-4 text-xs text-gray-500">
          <a href="/terms" class="hover:text-gray-300">利用規約</a>
          <a href="/privacy" class="hover:text-gray-300">プライバシーポリシー</a>
          <a href="/tokusho" class="hover:text-gray-300">特商法表記</a>
        </div>
      </div>
    </div>
  </footer>
)

export const DashboardLayout = ({ children, active = '' }: { children: any, active?: string }) => (
  <div class="flex min-h-screen bg-gray-50">
    {/* Sidebar */}
    <aside class="hidden lg:flex flex-col w-64 bg-white border-r border-gray-100 shadow-sm">
      <div class="p-5 border-b border-gray-100">
        <a href="/" class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center">
            <i class="fas fa-hands-helping text-white text-sm"></i>
          </div>
          <span class="text-lg font-bold bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">
            PractiConnect
          </span>
        </a>
      </div>

      {/* User info */}
      <div class="p-5 border-b border-gray-100">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0">
            <span class="text-white text-sm font-bold">田</span>
          </div>
          <div class="overflow-hidden">
            <p class="font-semibold text-gray-800 text-sm truncate">田中さくら</p>
            <p class="text-xs text-gray-500">コーチング・NLP学習中</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav class="flex-1 p-4 space-y-1 overflow-y-auto">
        <a href="/dashboard" class={`sidebar-link ${active === 'home' ? 'active' : ''}`}>
          <i class="fas fa-home w-4 text-center"></i>ホーム
        </a>
        <a href="/calendar" class={`sidebar-link ${active === 'calendar' ? 'active' : ''}`}>
          <i class="fas fa-calendar-alt w-4 text-center"></i>カレンダー
        </a>
        <a href="/members" class={`sidebar-link ${active === 'members' ? 'active' : ''}`}>
          <i class="fas fa-users w-4 text-center"></i>メンバー検索
        </a>
        <a href="/messages" class={`sidebar-link ${active === 'messages' ? 'active' : ''}`}>
          <i class="fas fa-envelope w-4 text-center"></i>メッセージ
          <span class="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
        </a>
        <a href="/profile" class={`sidebar-link ${active === 'profile' ? 'active' : ''}`}>
          <i class="fas fa-user w-4 text-center"></i>プロフィール
        </a>
        <hr class="my-2 border-gray-100" />
        <a href="/rules" class={`sidebar-link ${active === 'rules' ? 'active' : ''}`}>
          <i class="fas fa-shield-alt w-4 text-center"></i>利用ルール
        </a>
        <a href="/settings" class={`sidebar-link ${active === 'settings' ? 'active' : ''}`}>
          <i class="fas fa-cog w-4 text-center"></i>設定
        </a>
        <a href="/report" class={`sidebar-link text-red-500 hover:bg-red-50`}>
          <i class="fas fa-flag w-4 text-center"></i>違反報告
        </a>
      </nav>

      <div class="p-4 border-t border-gray-100">
        <a href="/" class="sidebar-link text-gray-500 text-sm">
          <i class="fas fa-sign-out-alt w-4 text-center"></i>ログアウト
        </a>
      </div>
    </aside>

    {/* Main content */}
    <div class="flex-1 flex flex-col min-w-0">
      {/* Top bar for mobile */}
      <header class="lg:hidden bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <a href="/" class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center">
            <i class="fas fa-hands-helping text-white text-xs"></i>
          </div>
          <span class="font-bold text-blue-700 text-base">PractiConnect</span>
        </a>
        <button onclick="toggleMobileMenu()" class="p-2 rounded-lg text-gray-500 hover:bg-gray-100">
          <i class="fas fa-bars"></i>
        </button>
      </header>

      {/* Mobile sidebar */}
      <div id="mobile-menu" class="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50 hidden">
        <div class="bg-white w-72 h-full shadow-xl p-5 overflow-y-auto">
          <div class="flex justify-between items-center mb-5">
            <span class="font-bold text-blue-700">メニュー</span>
            <button onclick="toggleMobileMenu()" class="text-gray-500 hover:text-gray-700">
              <i class="fas fa-times text-xl"></i>
            </button>
          </div>
          <nav class="space-y-1">
            <a href="/dashboard" class="sidebar-link">
              <i class="fas fa-home w-4 text-center"></i>ホーム
            </a>
            <a href="/calendar" class="sidebar-link">
              <i class="fas fa-calendar-alt w-4 text-center"></i>カレンダー
            </a>
            <a href="/members" class="sidebar-link">
              <i class="fas fa-users w-4 text-center"></i>メンバー検索
            </a>
            <a href="/messages" class="sidebar-link">
              <i class="fas fa-envelope w-4 text-center"></i>メッセージ
            </a>
            <a href="/profile" class="sidebar-link">
              <i class="fas fa-user w-4 text-center"></i>プロフィール
            </a>
          </nav>
        </div>
      </div>

      <main class="flex-1 p-4 md:p-6 lg:p-8">
        {children}
      </main>
    </div>
  </div>
)
