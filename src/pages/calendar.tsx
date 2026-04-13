import { DashboardLayout } from '../components/Layout'

export const CalendarPage = () => (
  <DashboardLayout active="calendar">
    <div class="fade-in">
      {/* Header */}
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 class="text-2xl font-bold text-gray-800">
            <i class="fas fa-calendar-alt text-blue-500 mr-2"></i>カレンダー・マッチング
          </h1>
          <p class="text-gray-500 text-sm mt-0.5">空き枠を登録・公開して、練習相手を見つけましょう</p>
        </div>
        <button class="btn-primary self-start sm:self-auto"
          onclick="document.getElementById('new-slot-modal').classList.remove('hidden')">
          <i class="fas fa-plus"></i>空き枠を登録する
        </button>
      </div>

      {/* View mode tabs */}
      <div class="flex gap-2 mb-5">
        {[
          { id: 'my-slots', label: '自分の枠', icon: 'fa-user' },
          { id: 'find-slots', label: '枠を探す', icon: 'fa-search' },
          { id: 'requests', label: '申請管理', icon: 'fa-inbox', badge: '' },
        ].map((t, i) => (
          <button
            data-tab={t.id}
            onclick={`switchTab('${t.id}', 'cal-tab')`}
            class={`px-4 py-2 rounded-xl text-sm font-medium transition-smooth flex items-center gap-2 ${i === 0 ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
          >
            <i class={`fas ${t.icon} text-xs`}></i>
            {t.label}
            {t.badge ? <span class="bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">{t.badge}</span> : null}
          </button>
        ))}
      </div>

      {/* My slots - Calendar view */}
      <div id="my-slots" class="cal-tab">
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Calendar header */}
          <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <button onclick="prevMonth()" class="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-smooth">
              <i class="fas fa-chevron-left text-gray-500"></i>
            </button>
            <h2 id="calendar-month-label" class="text-lg font-bold text-gray-800">2026年4月</h2>
            <button onclick="nextMonth()" class="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-smooth">
              <i class="fas fa-chevron-right text-gray-500"></i>
            </button>
          </div>

          {/* Day labels */}
          <div class="grid grid-cols-7 border-b border-gray-100">
            {['日', '月', '火', '水', '木', '金', '土'].map((d, i) => (
              <div class={`py-2 text-center text-xs font-semibold ${i === 0 ? 'text-red-400' : i === 6 ? 'text-blue-400' : 'text-gray-500'}`}>
                {d}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div id="calendar-grid" class="grid grid-cols-7">
            {/* Rendered by JavaScript */}
          </div>

          {/* Legend */}
          <div class="px-6 py-3 border-t border-gray-100 flex items-center gap-4 text-xs text-gray-500">
            <div class="flex items-center gap-1.5">
              <div class="w-3 h-3 rounded bg-amber-100 border border-amber-300"></div>
              <span>今日</span>
            </div>
            <div class="flex items-center gap-1.5">
              <div class="w-3 h-3 rounded bg-blue-100 border border-blue-300"></div>
              <span>枠あり</span>
            </div>
            <span class="ml-auto text-gray-400">日付をクリックして枠を登録・確認</span>
          </div>
        </div>
      </div>

      {/* Find slots */}
      <div id="find-slots" class="cal-tab hidden">
        {/* Search filters */}
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5">
          <h3 class="font-semibold text-gray-700 text-sm mb-3">
            <i class="fas fa-filter text-blue-500 mr-1.5"></i>絞り込み
          </h3>
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
                <option value="practitioner">施術者側を求めている</option>
                <option value="client">クライアント側を求めている</option>
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
              <label class="text-xs text-gray-500 mb-1 block">言語</label>
              <select class="form-input text-sm py-2">
                <option>日本語</option>
                <option>英語</option>
                <option>すべて</option>
              </select>
            </div>
          </div>
          <div class="flex items-center justify-between mt-3">
            <p class="text-sm text-gray-500"><span id="search-count" class="font-bold text-blue-600">8件</span>の枠が見つかりました</p>
            <button onclick="applyFilter()" class="btn-primary text-sm py-1.5 px-3">
              <i class="fas fa-search"></i>検索
            </button>
          </div>
        </div>

        {/* Slot cards */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              name: '山田はるか',
              avatar: '山',
              color: 'from-blue-400 to-blue-600',
              genres: ['コーチング', 'NLP'],
              tags: ['tag-coaching', 'tag-nlp'],
              date: '4月15日(火)',
              time: '10:00〜11:00',
              role: '施術者役希望',
              tool: 'Google Meet',
              lang: '日本語',
              cert: 'ICFアソシエイト（取得予定）',
              data_genre: 'coaching nlp',
              data_role: 'practitioner',
              data_tool: 'meet',
            },
            {
              name: '鈴木たけし',
              avatar: '鈴',
              color: 'from-green-400 to-teal-500',
              genres: ['NLP'],
              tags: ['tag-nlp'],
              date: '4月16日(水)',
              time: '19:00〜20:30',
              role: 'クライアント役希望',
              tool: 'Zoom',
              lang: '日本語・英語',
              cert: 'NLPプラクティショナー',
              data_genre: 'nlp',
              data_role: 'client',
              data_tool: 'zoom',
            },
            {
              name: '伊藤まな',
              avatar: '伊',
              color: 'from-pink-400 to-pink-600',
              genres: ['カウンセリング'],
              tags: ['tag-counseling'],
              date: '4月18日(金)',
              time: '21:00〜22:00',
              role: '両方可',
              tool: 'Google Meet',
              lang: '日本語',
              cert: '臨床心理士（取得予定）',
              data_genre: 'counseling',
              data_role: 'both',
              data_tool: 'meet',
            },
            {
              name: '渡辺そら',
              avatar: '渡',
              color: 'from-purple-400 to-purple-600',
              genres: ['ヒプノセラピー', 'NLP'],
              tags: ['tag-hypno', 'tag-nlp'],
              date: '4月20日(日)',
              time: '14:00〜15:30',
              role: '両方可',
              tool: 'Zoom',
              lang: '日本語',
              cert: 'ヒプノセラピスト資格',
              data_genre: 'hypno nlp',
              data_role: 'both',
              data_tool: 'zoom',
            },
          ].map(s => (
            <div class="member-card bg-white rounded-2xl shadow-sm border border-gray-100 p-5 card-hover"
              data-genre={s.data_genre} data-role={s.data_role} data-tool={s.data_tool}>
              <div class="flex items-start gap-3 mb-3">
                <div class={`w-10 h-10 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center flex-shrink-0`}>
                  <span class="text-white font-bold">{s.avatar}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-semibold text-gray-800">{s.name}</p>
                  <div class="flex flex-wrap gap-1 mt-0.5">
                    {s.tags.map((tag, i) => <span class={`badge ${tag} text-xs`}>{s.genres[i]}</span>)}
                  </div>
                </div>
                <span class="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0">
                  <i class="fas fa-circle text-green-500 text-xs mr-1"></i>募集中
                </span>
              </div>

              <div class="bg-blue-50 rounded-xl p-3 mb-3 text-sm">
                <div class="flex items-center gap-2 mb-1.5">
                  <i class="fas fa-calendar text-blue-500 text-xs"></i>
                  <span class="font-bold text-blue-800">{s.date} {s.time}</span>
                </div>
                <div class="grid grid-cols-2 gap-1 text-xs text-blue-600">
                  <span><i class="fas fa-user-tag mr-1"></i>{s.role}</span>
                  <span><i class="fas fa-video mr-1"></i>{s.tool}</span>
                  <span><i class="fas fa-language mr-1"></i>{s.lang}</span>
                  <span><i class="fas fa-certificate mr-1"></i>{s.cert}</span>
                </div>
              </div>

              <div class="flex gap-2">
                <a href="/members/detail" class="flex-1 btn-primary text-sm py-2 justify-center">
                  <i class="fas fa-paper-plane"></i>申し込む
                </a>
                <a href="/members/detail" class="btn-secondary text-sm py-2 px-3">
                  <i class="fas fa-user text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Requests management */}
      <div id="requests" class="cal-tab hidden">
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 class="font-bold text-gray-800 mb-5">申請管理</h3>
          <div class="space-y-6">
            <div>
              <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">受信した申請</h4>
              <div class="flex flex-col items-center justify-center py-8 text-gray-400 border border-dashed border-gray-200 rounded-xl">
                <i class="fas fa-inbox text-3xl mb-2 text-gray-200"></i>
                <p class="text-sm">受信した申請はありません</p>
              </div>
            </div>
            <div>
              <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">送信した申請</h4>
              <div class="flex flex-col items-center justify-center py-8 text-gray-400 border border-dashed border-gray-200 rounded-xl">
                <i class="fas fa-paper-plane text-3xl mb-2 text-gray-200"></i>
                <p class="text-sm">送信した申請はありません</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* New slot modal */}
    <div id="new-slot-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between p-5 border-b border-gray-100">
          <h3 class="font-bold text-gray-800">
            <i class="fas fa-calendar-plus text-blue-500 mr-2"></i>空き枠を登録する
          </h3>
          <button onclick="closeModal('new-slot-modal')" class="text-gray-400 hover:text-gray-600 text-xl">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="p-5 space-y-4">
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">開始日時<span class="text-red-500 ml-1">*</span></label>
              <input type="datetime-local" class="form-input text-sm" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">終了時刻<span class="text-red-500 ml-1">*</span></label>
              <input type="time" class="form-input text-sm" />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">練習分野<span class="text-red-500 ml-1">*</span></label>
            <div class="grid grid-cols-2 gap-2">
              {[
                { id: 'c', label: 'コーチング', cls: 'tag-coaching' },
                { id: 'cn', label: 'カウンセリング', cls: 'tag-counseling' },
                { id: 'n', label: 'NLP', cls: 'tag-nlp' },
                { id: 'h', label: 'ヒプノセラピー', cls: 'tag-hypno' },
              ].map(g => (
                <label class="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 cursor-pointer hover:border-blue-300">
                  <input type="checkbox" class="rounded text-blue-600" />
                  <span class="text-sm text-gray-700">{g.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">希望役割<span class="text-red-500 ml-1">*</span></label>
            <select class="form-input text-sm">
              <option>施術者側（コーチ・セラピスト役）</option>
              <option>クライアント側</option>
              <option selected>両方可</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">使用ツール<span class="text-red-500 ml-1">*</span></label>
            <select class="form-input text-sm">
              <option>Google Meet</option>
              <option>Zoom</option>
              <option>どちらでも可</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">補足・メモ（任意）</label>
            <textarea class="form-input text-sm" rows={3} placeholder="特定のテーマ・スキルレベル・希望する相手の条件など"></textarea>
          </div>

          <div class="alert alert-warning text-xs">
            <i class="fas fa-exclamation-triangle text-amber-500 flex-shrink-0"></i>
            <span>金銭の授受・勧誘・営業行為は厳禁です。利用規約をご遵守ください。</span>
          </div>
        </div>
        <div class="p-5 border-t border-gray-100 flex gap-3">
          <button class="btn-primary flex-1 justify-center"
            onclick="closeModal('new-slot-modal'); showToast('空き枠を登録しました！')">
            <i class="fas fa-calendar-plus"></i>登録する
          </button>
          <button class="btn-secondary" onclick="closeModal('new-slot-modal')">キャンセル</button>
        </div>
      </div>
    </div>

    {/* Day slot modal */}
    <div id="slot-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
        <div class="flex items-center justify-between p-4 border-b border-gray-100">
          <h3 class="font-bold text-gray-800" id="modal-date-label">2026年4月5日</h3>
          <button onclick="closeModal('slot-modal')" class="text-gray-400 hover:text-gray-600">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="p-4">
          <p class="text-sm text-gray-500 mb-3">この日の枠：</p>
          <div class="session-card bg-white border border-gray-100 rounded-xl p-3 mb-3">
            <p class="text-sm font-bold text-gray-800">10:00〜11:00 コーチング</p>
            <p class="text-xs text-gray-500">施術者役・Google Meet</p>
          </div>
        </div>
        <div class="p-4 border-t border-gray-100">
          <button class="btn-primary w-full justify-center text-sm"
            onclick="closeModal('slot-modal'); document.getElementById('new-slot-modal').classList.remove('hidden')">
            <i class="fas fa-plus"></i>この日に枠を追加
          </button>
        </div>
      </div>
    </div>
  </DashboardLayout>
)
