import { DashboardLayout, NavBar, Footer } from '../components/Layout'

const sampleMembers = [
  {
    id: 1, name: '山田はるか', avatar: '山', color: 'from-blue-400 to-blue-600',
    area: '東京都', age: '30代', genres: ['コーチング', 'NLP'], tags: ['tag-coaching', 'tag-nlp'],
    data_genre: 'coaching nlp',
    role: '施術者役・クライアント役', tool: 'Google Meet',
    cert: 'ICFアソシエイト（取得予定）', certIcon: 'fa-certificate text-blue-500',
    intro: 'コーチングスクール在籍中。NLPプラクティショナーも学習中。特にラポール形成と質問技法を磨きたいです。週1〜2回、夜間に活動中。',
    langs: ['日本語'], slots: 2, sessions: 8,
    hasSlot: true,
  },
  {
    id: 2, name: '鈴木たけし', avatar: '鈴', color: 'from-green-400 to-teal-500',
    area: 'オンライン（海外）', age: '40代', genres: ['NLP', 'カウンセリング'], tags: ['tag-nlp', 'tag-counseling'],
    data_genre: 'nlp counseling',
    role: '両方可', tool: 'Zoom',
    cert: 'NLPプラクティショナー', certIcon: 'fa-brain text-green-500',
    intro: '元心理相談員。NLPと認知行動療法を統合した独自アプローチを研究中。土日昼間が主な活動時間です。',
    langs: ['日本語', '英語'], slots: 3, sessions: 21,
    hasSlot: true,
  },
  {
    id: 3, name: '伊藤まな', avatar: '伊', color: 'from-pink-400 to-pink-600',
    area: '大阪府', age: '20代', genres: ['カウンセリング'], tags: ['tag-counseling'],
    data_genre: 'counseling',
    role: 'クライアント役希望', tool: 'Google Meet',
    cert: '公認心理師（取得予定）', certIcon: 'fa-heart text-pink-500',
    intro: '大学院にて臨床心理学を専攻。カウンセリングの傾聴・共感スキルを実践で磨きたいです。初学者の方も歓迎！',
    langs: ['日本語'], slots: 1, sessions: 5,
    hasSlot: false,
  },
  {
    id: 4, name: '渡辺そら', avatar: '渡', color: 'from-purple-400 to-purple-600',
    area: 'シンガポール', age: '30代', genres: ['ヒプノセラピー', 'NLP'], tags: ['tag-hypno', 'tag-nlp'],
    data_genre: 'hypno nlp',
    role: '施術者役希望', tool: 'Zoom',
    cert: 'NGHヒプノセラピスト', certIcon: 'fa-moon text-purple-500',
    intro: 'シンガポール在住。ヒプノセラピーとNLPを組み合わせたアプローチを実践中。英語での練習も可能です。',
    langs: ['日本語', '英語'], slots: 2, sessions: 15,
    hasSlot: true,
  },
  {
    id: 5, name: '中村ゆき', avatar: '中', color: 'from-amber-400 to-orange-500',
    area: '神奈川県', age: '40代', genres: ['コーチング', 'カウンセリング'], tags: ['tag-coaching', 'tag-counseling'],
    data_genre: 'coaching counseling',
    role: '両方可', tool: 'Google Meet',
    cert: 'ICFプロフェッショナルコーチ', certIcon: 'fa-award text-amber-500',
    intro: 'キャリアコーチとして5年の経験。スクール卒業生の練習相手として、フィードバックを丁寧に行います。',
    langs: ['日本語'], slots: 4, sessions: 45,
    hasSlot: true,
  },
  {
    id: 6, name: '高橋けんじ', avatar: '高', color: 'from-teal-400 to-cyan-500',
    area: '福岡県', age: '50代', genres: ['NLP', 'ヒプノセラピー'], tags: ['tag-nlp', 'tag-hypno'],
    data_genre: 'nlp hypno',
    role: 'クライアント役希望', tool: 'Zoom',
    cert: 'NLPマスタープラクティショナー', certIcon: 'fa-star text-teal-500',
    intro: '元経営者。NLPとヒプノセラピーを経営・自己啓発に応用することに興味。平日夜と週末に対応可能。',
    langs: ['日本語'], slots: 1, sessions: 12,
    hasSlot: true,
  },
]

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
          <p class="text-sm text-gray-500"><span id="search-count" class="font-bold text-blue-600">6名</span>のメンバーが見つかりました</p>
          <button class="text-xs text-gray-400 hover:text-gray-600" onclick="applyFilter()">
            <i class="fas fa-redo mr-1"></i>リセット
          </button>
        </div>
      </div>

      {/* Member grid */}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sampleMembers.map(m => (
          <div class="member-card bg-white rounded-2xl shadow-sm border border-gray-100 p-5 card-hover"
            data-genre={m.data_genre} data-role="both" data-tool="meet">
            {/* Header */}
            <div class="flex items-start gap-3 mb-3">
              <div class={`w-12 h-12 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                <span class="text-white font-bold text-lg">{m.avatar}</span>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2">
                  <p class="font-bold text-gray-800 truncate">{m.name}</p>
                  {m.hasSlot && (
                    <span class="bg-green-100 text-green-700 text-xs font-medium px-1.5 py-0.5 rounded-full flex-shrink-0">
                      <i class="fas fa-circle text-green-500 text-xs mr-0.5"></i>枠あり
                    </span>
                  )}
                </div>
                <p class="text-xs text-gray-500 mt-0.5">
                  <i class="fas fa-map-marker-alt mr-1"></i>{m.area}
                  <span class="mx-1 text-gray-300">|</span>
                  {m.age}
                </p>
              </div>
            </div>

            {/* Genres */}
            <div class="flex flex-wrap gap-1 mb-3">
              {m.tags.map((tag, i) => <span class={`badge ${tag}`}>{m.genres[i]}</span>)}
              {m.langs.map(l => (
                <span class="badge bg-gray-100 text-gray-600">{l}</span>
              ))}
            </div>

            {/* Intro */}
            <p class="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">{m.intro}</p>

            {/* Cert */}
            <div class="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
              <i class={`fas ${m.certIcon}`}></i>
              <span>{m.cert}</span>
            </div>

            {/* Stats */}
            <div class="flex gap-3 text-xs text-gray-400 mb-3 pb-3 border-b border-gray-100">
              <span><i class="fas fa-calendar-check mr-1 text-blue-400"></i>{m.slots}枠募集中</span>
              <span><i class="fas fa-handshake mr-1 text-teal-400"></i>累計{m.sessions}回</span>
              <span><i class="fas fa-{m.tool === 'Google Meet' ? 'google' : 'video'} mr-1 text-gray-400"></i>{m.tool}</span>
            </div>

            {/* Actions */}
            <div class="flex gap-2">
              <a href={`/members/${m.id}`} class="flex-1 btn-secondary text-sm py-2 justify-center">
                <i class="fas fa-user"></i>プロフィール
              </a>
              <a href="/calendar" class="flex-1 btn-primary text-sm py-2 justify-center">
                <i class="fas fa-calendar"></i>枠を見る
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </DashboardLayout>
)

export const MemberDetailPage = ({ id = '1' }: { id?: string }) => {
  const m = sampleMembers[0]
  return (
    <DashboardLayout active="members">
      <div class="fade-in max-w-4xl">
        <a href="/members" class="inline-flex items-center gap-2 text-blue-600 hover:underline text-sm mb-5">
          <i class="fas fa-arrow-left"></i>メンバー一覧に戻る
        </a>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Profile card */}
          <div class="lg:col-span-1 space-y-4">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mx-auto mb-3 shadow-md">
                <span class="text-white font-bold text-3xl">{m.avatar}</span>
              </div>
              <h2 class="text-xl font-bold text-gray-800 mb-1">{m.name}</h2>
              <p class="text-sm text-gray-500 mb-3">
                <i class="fas fa-map-marker-alt mr-1"></i>{m.area} · {m.age}
              </p>
              <div class="flex flex-wrap justify-center gap-1 mb-4">
                {m.tags.map((tag, i) => <span class={`badge ${tag}`}>{m.genres[i]}</span>)}
              </div>
              <div class="flex gap-3 text-sm text-center">
                <div class="flex-1 bg-blue-50 rounded-xl py-2">
                  <p class="font-bold text-blue-600">{m.sessions}</p>
                  <p class="text-xs text-gray-500">累計セッション</p>
                </div>
                <div class="flex-1 bg-green-50 rounded-xl py-2">
                  <p class="font-bold text-green-600">{m.slots}</p>
                  <p class="text-xs text-gray-500">募集中の枠</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 class="font-bold text-gray-800 mb-3">
                <i class="fas fa-certificate text-amber-500 mr-2"></i>資格・学歴
              </h3>
              <div class="space-y-2">
                {[
                  { name: 'ICFアソシエイト認定コーチ', org: 'ICF', date: '取得予定 2026年', status: '取得予定', cls: 'bg-amber-100 text-amber-700' },
                  { name: 'NLPプラクティショナー', org: '日本NLP協会', date: '取得予定 2026年6月', status: '取得予定', cls: 'bg-amber-100 text-amber-700' },
                  { name: '○○スクール修了', org: '○○コーチングスクール', date: '2025年3月', status: '取得済み', cls: 'bg-green-100 text-green-700' },
                ].map(c => (
                  <div class="flex gap-2 text-sm p-2 bg-gray-50 rounded-lg">
                    <div class="flex-1">
                      <p class="font-medium text-gray-700 text-xs">{c.name}</p>
                      <p class="text-gray-400 text-xs">{c.org} · {c.date}</p>
                    </div>
                    <span class={`badge text-xs self-start ${c.cls}`}>{c.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Report */}
            <div class="text-center">
              <a href="/report" class="text-xs text-red-400 hover:text-red-600">
                <i class="fas fa-flag mr-1"></i>このユーザーを報告する
              </a>
            </div>
          </div>

          {/* Right: Detail */}
          <div class="lg:col-span-2 space-y-5">
            {/* Intro */}
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 class="font-bold text-gray-800 mb-3">
                <i class="fas fa-user mr-2 text-blue-500"></i>自己紹介
              </h3>
              <p class="text-gray-600 leading-relaxed">{m.intro}</p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span class="badge bg-gray-100 text-gray-600">
                  <i class="fas fa-language mr-1"></i>日本語
                </span>
                <span class="badge bg-gray-100 text-gray-600">
                  <i class="fas fa-video mr-1"></i>Google Meet
                </span>
                <span class="badge bg-blue-50 text-blue-700">
                  <i class="fas fa-user-tag mr-1"></i>施術者役・クライアント役
                </span>
              </div>
            </div>

            {/* Available slots */}
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 class="font-bold text-gray-800 mb-4">
                <i class="fas fa-calendar text-green-500 mr-2"></i>募集中の枠
              </h3>
              <div class="space-y-3">
                {[
                  { date: '4月15日(火)', time: '10:00〜11:00', genre: 'コーチング', tag: 'tag-coaching', role: '施術者役希望', tool: 'Google Meet' },
                  { date: '4月20日(日)', time: '14:00〜15:00', genre: 'NLP', tag: 'tag-nlp', role: 'クライアント役希望', tool: 'Google Meet' },
                ].map(slot => (
                  <div class="border border-gray-100 rounded-xl p-4 bg-gray-50">
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="flex items-center gap-2 mb-1">
                          <span class="font-bold text-gray-800 text-sm">{slot.date} {slot.time}</span>
                          <span class={`badge ${slot.tag} text-xs`}>{slot.genre}</span>
                        </div>
                        <p class="text-xs text-gray-500">
                          {slot.role} · <i class="fas fa-video mr-1"></i>{slot.tool}
                        </p>
                      </div>
                      <button class="btn-primary text-xs py-1.5 px-3 flex-shrink-0"
                        onclick="showToast('セッション申請を送りました！', 'success')">
                        <i class="fas fa-paper-plane"></i>申し込む
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Practice style */}
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 class="font-bold text-gray-800 mb-3">
                <i class="fas fa-star mr-2 text-amber-400"></i>練習スタイル
              </h3>
              <div class="grid grid-cols-2 gap-2">
                {[
                  '振り返りをしっかり行いたい',
                  '交互に役割を交代したい',
                  '初学者同士でも歓迎',
                ].map(s => (
                  <div class="flex items-center gap-2 text-sm text-gray-600 bg-blue-50 rounded-lg px-3 py-2">
                    <i class="fas fa-check text-blue-500 text-xs flex-shrink-0"></i>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
