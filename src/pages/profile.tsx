import { DashboardLayout } from '../components/Layout'

export const ProfilePage = () => (
  <DashboardLayout active="profile">
    <div class="fade-in max-w-3xl">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">
        <i class="fas fa-user-edit text-blue-500 mr-2"></i>プロフィール編集
      </h1>

      {/* Tab navigation */}
      <div class="flex gap-1 bg-gray-100 rounded-xl p-1 mb-6 w-fit">
        {[
          { id: 'tab-basic', label: '基本情報', icon: 'fa-user' },
          { id: 'tab-intro', label: '自己紹介', icon: 'fa-pen' },
          { id: 'tab-cert', label: '資格・学歴', icon: 'fa-certificate' },
          { id: 'tab-genre', label: 'ジャンル設定', icon: 'fa-graduation-cap' },
        ].map((t, i) => (
          <button
            data-tab={t.id}
            onclick={`switchTab('${t.id}', 'profile-tab')`}
            class={`px-3 py-2 rounded-lg text-sm font-medium transition-smooth flex items-center gap-1.5 ${i === 0 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
          >
            <i class={`fas ${t.icon} text-xs`}></i>
            <span class="hidden sm:inline">{t.label}</span>
          </button>
        ))}
      </div>

      {/* Basic info tab */}
      <div id="tab-basic" class="profile-tab bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 class="text-lg font-bold text-gray-800 mb-5">基本情報</h2>

        {/* Avatar upload */}
        <div class="flex items-center gap-6 mb-6 pb-6 border-b border-gray-100">
          <div class="relative">
            <div id="profile-img-preview" class="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center shadow-md overflow-hidden">
              <span class="text-white text-3xl font-bold">田</span>
            </div>
            <label class="absolute -bottom-1 -right-1 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-blue-700 transition-smooth">
              <i class="fas fa-camera text-white text-xs"></i>
              <input type="file" accept="image/*" class="hidden" onchange="previewProfileImage(this)" />
            </label>
          </div>
          <div>
            <p class="font-semibold text-gray-700 text-sm">プロフィール画像</p>
            <p class="text-xs text-gray-400 mt-1">JPG・PNG形式、5MB以下<br />正方形推奨</p>
          </div>
        </div>

        <div class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">表示名<span class="text-red-500 ml-1">*</span></label>
              <input type="text" class="form-input" value="田中さくら" placeholder="ニックネーム可" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">居住エリア</label>
              <input type="text" class="form-input" value="東京都（日本）" placeholder="都道府県・国" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">年齢層</label>
              <select class="form-input">
                <option>非公開</option>
                <option>10代</option>
                <option>20代</option>
                <option selected>30代</option>
                <option>40代</option>
                <option>50代以上</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">性別</label>
              <select class="form-input">
                <option>非公開</option>
                <option selected>女性</option>
                <option>男性</option>
                <option>その他</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">タイムゾーン</label>
            <select class="form-input">
              <option selected>Asia/Tokyo (JST UTC+9)</option>
              <option>Asia/Singapore (SGT UTC+8)</option>
              <option>Europe/London (GMT UTC+0)</option>
              <option>America/New_York (EST UTC-5)</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">使用言語（複数可）</label>
            <div class="flex flex-wrap gap-2">
              {['日本語', '英語', '中国語', '韓国語', 'スペイン語', 'フランス語'].map((lang, i) => (
                <label class="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" class="rounded text-blue-600" checked={i < 2} />
                  <span class="text-sm text-gray-700">{lang}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div class="flex justify-end mt-6">
          <button class="btn-primary" onclick="showToast('基本情報を保存しました')">
            <i class="fas fa-save"></i>保存する
          </button>
        </div>
      </div>

      {/* Intro tab */}
      <div id="tab-intro" class="profile-tab hidden bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 class="text-lg font-bold text-gray-800 mb-5">自己紹介・アピール</h2>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">自己紹介文</label>
            <textarea class="form-input" rows={5} placeholder="学習歴・強み・練習スタイル・希望する相手の特徴などを記入してください">コーチングを学び始めて1年半になります。ICFアソシエイトコーチ取得を目指してNLPも並行して学習中です。特にラポール形成と質問技法を深めたいと思っています。週1〜2回、19〜22時台を中心に活動しています。</textarea>
            <p class="text-xs text-gray-400 mt-1 text-right">0 / 500文字</p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">学習歴・バックグラウンド</label>
            <textarea class="form-input" rows={3} placeholder="スクール名・受講歴・学習期間など">○○コーチングスクール（2024年4月〜）在籍中。NLPプラクティショナー認定取得予定（2026年6月）。もともと看護師として20年間従事。</textarea>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">希望する練習スタイル</label>
            <div class="space-y-2">
              {[
                { label: '振り返りをしっかり行いたい', checked: true },
                { label: 'まずは実践第一でたくさんこなしたい', checked: false },
                { label: '交互に役割を交代したい', checked: true },
                { label: '事前にテーマを決めて臨みたい', checked: false },
                { label: '初学者同士でも歓迎', checked: true },
              ].map(s => (
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" class="rounded text-blue-600" checked={s.checked} />
                  <span class="text-sm text-gray-700">{s.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div class="flex justify-end mt-6">
          <button class="btn-primary" onclick="showToast('自己紹介を保存しました')">
            <i class="fas fa-save"></i>保存する
          </button>
        </div>
      </div>

      {/* Certification tab */}
      <div id="tab-cert" class="profile-tab hidden bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div class="flex items-center justify-between mb-5">
          <h2 class="text-lg font-bold text-gray-800">資格・学歴</h2>
          <button class="btn-secondary text-sm py-1.5 px-3" onclick="document.getElementById('add-cert-form').classList.toggle('hidden')">
            <i class="fas fa-plus"></i>追加
          </button>
        </div>

        {/* Add certification form */}
        <div id="add-cert-form" class="hidden mb-5 bg-blue-50 rounded-xl p-4 border border-blue-200">
          <h3 class="font-semibold text-blue-800 text-sm mb-3">資格を追加</h3>
          <div class="space-y-3">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-medium text-gray-600 mb-1">資格名</label>
                <input type="text" class="form-input text-sm" placeholder="ICFアソシエイト認定コーチ" />
              </div>
              <div>
                <label class="block text-xs font-medium text-gray-600 mb-1">発行団体</label>
                <input type="text" class="form-input text-sm" placeholder="ICF（国際コーチング連盟）" />
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-medium text-gray-600 mb-1">取得年月</label>
                <input type="month" class="form-input text-sm" />
              </div>
              <div>
                <label class="block text-xs font-medium text-gray-600 mb-1">証明書画像（任意）</label>
                <input type="file" accept="image/*" class="form-input text-sm" />
              </div>
            </div>
            <div class="flex gap-2">
              <button class="btn-primary text-sm py-1.5 px-4" onclick="showToast('資格を追加しました'); document.getElementById('add-cert-form').classList.add('hidden')">
                <i class="fas fa-plus"></i>追加
              </button>
              <button class="btn-secondary text-sm py-1.5 px-4" onclick="document.getElementById('add-cert-form').classList.add('hidden')">
                キャンセル
              </button>
            </div>
          </div>
        </div>

        <div class="space-y-3">
          {[
            {
              name: 'NLPプラクティショナー',
              org: '日本NLP協会',
              date: '取得予定：2026年6月',
              status: '取得予定',
              statusCls: 'bg-amber-100 text-amber-700',
              icon: 'fa-brain',
              color: 'text-green-600',
            },
            {
              name: '○○コーチングスクール 修了証',
              org: '○○コーチングスクール',
              date: '2025年3月',
              status: '取得済み',
              statusCls: 'bg-green-100 text-green-700',
              icon: 'fa-graduation-cap',
              color: 'text-blue-600',
            },
          ].map(c => (
            <div class="flex gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50 group">
              <div class="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                <i class={`fas ${c.icon} ${c.color}`}></i>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 flex-wrap">
                  <p class="font-semibold text-gray-800 text-sm">{c.name}</p>
                  <span class={`badge text-xs ${c.statusCls}`}>{c.status}</span>
                </div>
                <p class="text-xs text-gray-500 mt-0.5">{c.org}</p>
                <p class="text-xs text-gray-400">{c.date}</p>
              </div>
              <div class="flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                <button class="text-blue-500 hover:text-blue-700 text-sm" title="編集">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="text-red-400 hover:text-red-600 text-sm" title="削除">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Genre tab */}
      <div id="tab-genre" class="profile-tab hidden bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 class="text-lg font-bold text-gray-800 mb-2">ジャンル・役割設定</h2>
        <p class="text-sm text-gray-500 mb-5">練習したいジャンルと、セッションでの役割を設定してください。</p>

        <div class="space-y-4">
          {[
            { id: 'coaching', label: 'コーチング', icon: 'fa-comment-dots', bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', checked: true },
            { id: 'counseling', label: 'カウンセリング', icon: 'fa-heart', bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700', checked: false },
            { id: 'nlp', label: 'NLP', icon: 'fa-brain', bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', checked: true },
            { id: 'hypno', label: 'ヒプノセラピー', icon: 'fa-moon', bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', checked: false },
          ].map(g => (
            <div class={`${g.bg} border ${g.border} rounded-xl p-4`}>
              <div class="flex items-center gap-3 mb-3">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" class="rounded text-blue-600" checked={g.checked} id={`genre-${g.id}`} />
                  <i class={`fas ${g.icon} ${g.text}`}></i>
                  <span class={`font-semibold ${g.text}`}>{g.label}</span>
                </label>
              </div>
              <div class="ml-6">
                <p class="text-xs text-gray-500 mb-2">希望役割：</p>
                <div class="flex gap-3">
                  {['施術者側（コーチ・セラピスト役）', 'クライアント側', '両方可'].map((role, ri) => (
                    <label class="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name={`role-${g.id}`} class="text-blue-600" checked={ri === 2} />
                      <span class="text-xs text-gray-700">{role}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div class="flex justify-end mt-6">
          <button class="btn-primary" onclick="showToast('ジャンル設定を保存しました')">
            <i class="fas fa-save"></i>保存する
          </button>
        </div>
      </div>

      {/* Privacy warning */}
      <div class="mt-4 alert alert-info">
        <i class="fas fa-lock text-blue-500 flex-shrink-0"></i>
        <p class="text-xs text-blue-700">メールアドレスは他のユーザーに公開されません。表示名・自己紹介・資格は公開されます。</p>
      </div>
    </div>
  </DashboardLayout>
)
