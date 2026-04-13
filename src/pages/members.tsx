import { DashboardLayout, NavBar, Footer } from '../components/Layout'

export const MembersPage = () => (
  <DashboardLayout active="members">
    <div class="fade-in">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 class="text-2xl font-bold text-gray-800">
            <i class="fas fa-users text-blue-500 mr-2"></i>メンバー検索
          </h1>
          <p class="text-gray-500 text-sm mt-0.5">条件を指定して練習相手を見つけましょう</p>
        </div>
      </div>

      {/* Search & filter */}
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5">
        <div class="flex flex-col sm:flex-row gap-3 mb-4">
          <div class="flex-1 relative">
            <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input type="text" class="form-input pl-9" placeholder="名前・キーワードで検索..." />
          </div>
          <button class="btn-primary" onclick="applyFilter()">
            <i class="fas fa-search"></i>検索
          </button>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div>
            <label class="text-xs text-gray-500 mb-1 block">ジャンル</label>
            <select id="filter-genre" class="form-input text-sm py-2" onchange="applyFilter()">
              <option value="">すべて</option>
              <option value="coaching">コーチング</option>
              <option value="counseling">カウンセリング</option>
              <option value="nlp">NLP</option>
              <option value="hypno">ヒプノセラピー</option>
            </select>
          </div>
          <div>
            <label class="text-xs text-gray-500 mb-1 block">役割</label>
            <select id="filter-role" class="form-input text-sm py-2" onchange="applyFilter()">
              <option value="">すべて</option>
              <option value="practitioner">施術者役希望</option>
              <option value="client">クライアント役希望</option>
              <option value="both">両方可</option>
            </select>
          </div>
          <div>
            <label class="text-xs text-gray-500 mb-1 block">ツール</label>
            <select id="filter-tool" class="form-input text-sm py-2" onchange="applyFilter()">
              <option value="">すべて</option>
              <option value="meet">Google Meet</option>
              <option value="zoom">Zoom</option>
            </select>
          </div>
          <div>
            <label class="text-xs text-gray-500 mb-1 block">空き枠</label>
            <select class="form-input text-sm py-2">
              <option>すべて</option>
              <option>枠あり</option>
              <option>今週</option>
              <option>今月</option>
            </select>
          </div>
        </div>

        <div class="flex items-center justify-between mt-3">
          <p class="text-sm text-gray-500"><span id="search-count" class="font-bold text-blue-600">0名</span>のメンバーが見つかりました</p>
          <button class="text-xs text-gray-400 hover:text-gray-600" onclick="applyFilter()">
            <i class="fas fa-redo mr-1"></i>リセット
          </button>
        </div>
      </div>

      {/* Member grid - empty state */}
      <div id="member-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div class="col-span-full flex flex-col items-center justify-center py-20 text-gray-400 border border-dashed border-gray-200 rounded-2xl bg-white">
          <i class="fas fa-users text-5xl mb-4 text-gray-200"></i>
          <p class="text-base font-medium text-gray-500 mb-1">まだ登録メンバーがいません</p>
          <p class="text-sm text-gray-400 mb-5">あなたが最初のメンバーになりましょう！</p>
          <a href="/register" class="btn-primary">
            <i class="fas fa-user-plus"></i>無料で登録する
          </a>
        </div>
      </div>
    </div>
  </DashboardLayout>
)

export const MemberDetailPage = ({ id = '1' }: { id?: string }) => {
  return (
    <DashboardLayout active="members">
      <div class="fade-in max-w-4xl">
        <a href="/members" class="inline-flex items-center gap-2 text-blue-600 hover:underline text-sm mb-5">
          <i class="fas fa-arrow-left"></i>メンバー一覧に戻る
        </a>

        {/* Member not found state */}
        <div class="flex flex-col items-center justify-center py-20 text-gray-400">
          <i class="fas fa-user-slash text-5xl mb-4 text-gray-200"></i>
          <p class="text-base font-medium text-gray-500 mb-1">メンバーが見つかりません</p>
          <p class="text-sm text-gray-400 mb-5">指定されたメンバー（ID: {id}）は存在しないか、削除されました。</p>
          <a href="/members" class="btn-secondary">
            <i class="fas fa-arrow-left"></i>メンバー一覧に戻る
          </a>
        </div>
      </div>
    </DashboardLayout>
  )
}
