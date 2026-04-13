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

            {/* Empty state */}
            <div class="flex-1 flex flex-col items-center justify-center text-gray-400 p-6">
              <i class="fas fa-comments text-4xl mb-3 text-gray-200"></i>
              <p class="text-sm text-center">まだメッセージはありません</p>
              <p class="text-xs text-center mt-1 text-gray-400">マッチング成立後に<br />メッセージできます</p>
              <a href="/members" class="mt-4 btn-primary text-sm py-2">
                <i class="fas fa-search"></i>練習相手を探す
              </a>
            </div>
          </div>

          {/* Chat area - empty state */}
          <div class="hidden sm:flex flex-1 flex-col items-center justify-center text-gray-400">
            <i class="fas fa-comment-dots text-5xl mb-4 text-gray-200"></i>
            <p class="text-base font-medium text-gray-500">会話を選択してください</p>
            <p class="text-sm text-gray-400 mt-1">マッチング成立後、相手とメッセージをやりとりできます</p>
            <div class="mt-6 alert alert-info text-xs max-w-sm">
              <i class="fas fa-lock text-blue-500 flex-shrink-0"></i>
              <span>テキストのみ送信可能・URL・ファイル送信不可・外部連絡先の共有禁止</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
)
