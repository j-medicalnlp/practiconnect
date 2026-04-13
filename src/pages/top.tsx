import { NavBar, Footer } from '../components/Layout'

export const TopPage = () => (
  <>
    <NavBar active="top" />

    {/* Hero Section */}
    <section class="hero-gradient text-white overflow-hidden relative">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-20 w-64 h-64 rounded-full bg-white opacity-20 blur-3xl"></div>
        <div class="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-teal-300 opacity-20 blur-3xl"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center gap-2 bg-white bg-opacity-20 rounded-full px-4 py-1.5 mb-6 text-sm font-medium">
              <i class="fas fa-star text-yellow-300"></i>
              <span>無償・対等・安全なマッチング</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
              練習が、<br />
              <span class="text-yellow-300">成長</span>になる。
            </h1>
            <p class="text-lg text-blue-100 leading-relaxed mb-8">
              コーチング・カウンセリング・NLP・ヒプノセラピーを学ぶあなたへ。<br />
              志を同じくする仲間と、安心・無償で練習セッションができるプラットフォーム。
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="/register" class="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-3.5 rounded-xl text-center transition-smooth shadow-lg">
                <i class="fas fa-user-plus mr-2"></i>無料で登録する
              </a>
              <a href="/members" class="bg-blue-700 bg-opacity-50 hover:bg-opacity-70 border border-white border-opacity-40 text-white font-semibold px-8 py-3.5 rounded-xl text-center transition-smooth">
                <i class="fas fa-search mr-2"></i>練習相手を探す
              </a>
            </div>
            <p class="mt-4 text-blue-200 text-sm">
              <i class="fas fa-check-circle mr-1"></i>登録無料・広告なし・金銭授受一切なし
            </p>
          </div>

          {/* Hero illustration */}
          <div class="hidden lg:block">
            <div class="relative">
              {/* Main card */}
              <div class="bg-white rounded-2xl shadow-2xl p-6 text-gray-800 max-w-sm mx-auto">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center">
                    <span class="text-white font-bold text-lg">山</span>
                  </div>
                  <div>
                    <p class="font-bold text-gray-800">山田はるか</p>
                    <div class="flex gap-1">
                      <span class="badge tag-coaching text-xs">コーチング</span>
                      <span class="badge tag-nlp text-xs">NLP</span>
                    </div>
                  </div>
                  <div class="ml-auto">
                    <span class="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">
                      <i class="fas fa-circle text-green-500 text-xs mr-1"></i>募集中
                    </span>
                  </div>
                </div>
                <p class="text-sm text-gray-600 mb-3">
                  ICFアソシエイト認定コーチ取得を目指してNLPを学習中です。特にラポール形成と傾聴スキルを練習したいです。
                </p>
                <div class="bg-blue-50 rounded-lg p-3 mb-3">
                  <p class="text-xs text-blue-700 font-medium mb-1">
                    <i class="fas fa-calendar-alt mr-1"></i>次回の空き枠
                  </p>
                  <p class="text-sm font-bold text-blue-800">4月20日(日) 14:00〜15:00</p>
                  <p class="text-xs text-blue-600">Google Meet・コーチング（施術者役）</p>
                </div>
                <button class="w-full btn-primary text-sm py-2 justify-center">
                  <i class="fas fa-paper-plane"></i>セッションを申し込む
                </button>
              </div>

              {/* Floating badges */}
              <div class="absolute -top-4 -right-4 bg-green-500 text-white rounded-xl px-3 py-1.5 text-xs font-bold shadow-lg rotate-3">
                <i class="fas fa-shield-alt mr-1"></i>安全・安心
              </div>
              <div class="absolute -bottom-4 -left-4 bg-amber-400 text-white rounded-xl px-3 py-1.5 text-xs font-bold shadow-lg -rotate-2">
                <i class="fas fa-yen-sign mr-1"></i>完全無料
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f9fafb"/>
        </svg>
      </div>
    </section>

    {/* Stats */}
    <section class="bg-gray-50 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { num: '1,200+', label: '登録メンバー', icon: 'fa-users', color: 'text-blue-600' },
            { num: '3,800+', label: '累計セッション', icon: 'fa-handshake', color: 'text-teal-600' },
            { num: '4', label: '練習ジャンル', icon: 'fa-graduation-cap', color: 'text-green-600' },
            { num: '98%', label: '満足度', icon: 'fa-star', color: 'text-amber-500' },
          ].map(stat => (
            <div class="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 card-hover">
              <i class={`fas ${stat.icon} ${stat.color} text-2xl mb-2`}></i>
              <p class="text-2xl font-bold text-gray-800">{stat.num}</p>
              <p class="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section id="features" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 class="text-3xl font-bold text-gray-800 mt-2">PractiConnectの特徴</h2>
          <div class="section-divider mx-auto"></div>
          <p class="text-gray-500 mt-2 max-w-xl mx-auto">安心・安全な環境で、実践スキルを効果的に磨くための機能を揃えています。</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: 'fa-shield-alt',
              color: 'from-blue-500 to-blue-600',
              title: '安全・対等な場',
              desc: '金銭授受・勧誘・営業行為は厳格禁止。違反報告機能と運営監視で純粋な学びの場を守ります。',
            },
            {
              icon: 'fa-search',
              color: 'from-teal-500 to-teal-600',
              title: 'スマートマッチング',
              desc: 'ジャンル・日時・役割・ツール・言語・資格でフィルタリング。希望にぴったりの練習相手が見つかります。',
            },
            {
              icon: 'fa-calendar-alt',
              color: 'from-green-500 to-green-600',
              title: 'カレンダー連携',
              desc: '空き時間をカレンダーで登録・公開。Google Meet / Zoom のURLを安全に共有できます。',
            },
            {
              icon: 'fa-certificate',
              color: 'from-purple-500 to-purple-600',
              title: '資格・実績提示',
              desc: '取得資格や学習歴をプロフィールに登録。信頼性のある相手と安心して練習できます。',
            },
            {
              icon: 'fa-comments',
              color: 'from-pink-500 to-pink-600',
              title: '安全なメッセージ',
              desc: 'マッチング成立後のみ連絡可能。URL送信制限・テキストのみで不正利用を防止します。',
            },
            {
              icon: 'fa-globe',
              color: 'from-orange-500 to-orange-600',
              title: '多言語・国際対応',
              desc: '日本語・英語をはじめ多言語対応を計画中。海外在住者も日本語で練習できます。',
            },
          ].map(f => (
            <div class="animate-on-scroll">
              <div class="bg-gray-50 rounded-2xl p-6 card-hover h-full border border-gray-100">
                <div class={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 shadow-md`}>
                  <i class={`fas ${f.icon} text-white text-lg`}></i>
                </div>
                <h3 class="text-lg font-bold text-gray-800 mb-2">{f.title}</h3>
                <p class="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Genres */}
    <section class="py-20 hero-gradient-soft">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-wider">Genres</span>
          <h2 class="text-3xl font-bold text-gray-800 mt-2">対応ジャンル</h2>
          <div class="section-divider mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: 'fa-comment-dots',
              title: 'コーチング',
              color: 'from-blue-500 to-blue-600',
              bg: 'bg-blue-50',
              border: 'border-blue-200',
              badge: 'tag-coaching',
              desc: '目標設定・傾聴・質問技法・フィードバック・コーチング実践',
              users: '480名',
            },
            {
              icon: 'fa-heart',
              title: 'カウンセリング',
              color: 'from-pink-500 to-pink-600',
              bg: 'bg-pink-50',
              border: 'border-pink-200',
              badge: 'tag-counseling',
              desc: '傾聴・共感・感情整理・ロールプレイ・ケーススタディ',
              users: '390名',
            },
            {
              icon: 'fa-brain',
              title: 'NLP',
              color: 'from-green-500 to-green-600',
              bg: 'bg-green-50',
              border: 'border-green-200',
              badge: 'tag-nlp',
              desc: 'アンカリング・リフレーミング・タイムライン・スワッシュパターン',
              users: '260名',
            },
            {
              icon: 'fa-moon',
              title: 'ヒプノセラピー',
              color: 'from-purple-500 to-purple-600',
              bg: 'bg-purple-50',
              border: 'border-purple-200',
              badge: 'tag-hypno',
              desc: '誘導・トランス・サブモダリティ変換・ヒーリングセッション',
              users: '130名',
            },
          ].map(g => (
            <div class={`${g.bg} rounded-2xl p-6 border ${g.border} card-hover`}>
              <div class={`w-14 h-14 rounded-2xl bg-gradient-to-br ${g.color} flex items-center justify-center mb-4 shadow-lg`}>
                <i class={`fas ${g.icon} text-white text-2xl`}></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-1">{g.title}</h3>
              <p class="text-sm text-gray-500 mb-3 leading-relaxed">{g.desc}</p>
              <div class="flex items-center justify-between">
                <span class={`badge ${g.badge}`}>{g.title}</span>
                <span class="text-xs text-gray-400"><i class="fas fa-user mr-1"></i>{g.users}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How it works */}
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="text-green-600 font-semibold text-sm uppercase tracking-wider">How it works</span>
          <h2 class="text-3xl font-bold text-gray-800 mt-2">使い方</h2>
          <div class="section-divider mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div class="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-300 via-teal-300 to-green-300 z-0"></div>

          {[
            { step: '01', icon: 'fa-user-plus', title: '無料登録', desc: '表示名・ジャンル・自己紹介を入力。資格情報も登録できます。', color: 'bg-blue-600' },
            { step: '02', icon: 'fa-calendar-plus', title: '枠を登録 or 検索', desc: '空き時間をカレンダーに登録、または他の人の募集枠を検索。', color: 'bg-teal-600' },
            { step: '03', icon: 'fa-handshake', title: '申請・マッチング', desc: '希望するセッションにリクエスト。承認されたらマッチング成立！', color: 'bg-green-600' },
            { step: '04', icon: 'fa-video', title: 'セッション実施', desc: 'Google Meet / Zoom で安心してセッションを行いましょう。', color: 'bg-purple-600' },
          ].map(s => (
            <div class="text-center relative z-10">
              <div class={`${s.color} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <i class={`fas ${s.icon} text-white text-xl`}></i>
              </div>
              <span class="text-xs font-bold text-gray-400 tracking-widest">STEP {s.step}</span>
              <h3 class="text-lg font-bold text-gray-800 mt-1 mb-2">{s.title}</h3>
              <p class="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Safety */}
    <section class="py-16 bg-gradient-to-r from-blue-900 to-teal-800 text-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-2xl md:text-3xl font-bold">安全・安心への取り組み</h2>
          <p class="text-blue-200 mt-2">PractiConnectは純粋な学びと成長の場を守るため、厳格なルールを設けています。</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: 'fa-ban',
              title: '報酬・勧誘禁止',
              items: ['金銭・物品の授受禁止', '有料サービスへの勧誘禁止', '営業・宣伝活動禁止'],
            },
            {
              icon: 'fa-flag',
              title: '違反報告システム',
              items: ['各セッションから報告可能', '報告者は匿名で保護', '運営が迅速に対応'],
            },
            {
              icon: 'fa-lock',
              title: 'プライバシー保護',
              items: ['メールアドレス非公開', 'マッチング後のみ連絡可', 'URL送信制限・テキストのみ'],
            },
          ].map(s => (
            <div class="bg-white bg-opacity-10 rounded-xl p-5 border border-white border-opacity-20">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-lg bg-white bg-opacity-20 flex items-center justify-center">
                  <i class={`fas ${s.icon} text-white text-lg`}></i>
                </div>
                <h3 class="font-bold text-white">{s.title}</h3>
              </div>
              <ul class="space-y-2">
                {s.items.map(item => (
                  <li class="flex items-center gap-2 text-blue-100 text-sm">
                    <i class="fas fa-check text-teal-300 text-xs flex-shrink-0"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div class="mt-8 text-center">
          <a href="/rules" class="bg-white text-blue-800 hover:bg-blue-50 font-bold px-8 py-3 rounded-xl transition-smooth inline-flex items-center gap-2">
            <i class="fas fa-book-open"></i>利用ルールを読む
          </a>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="text-purple-600 font-semibold text-sm uppercase tracking-wider">Voices</span>
          <h2 class="text-3xl font-bold text-gray-800 mt-2">ユーザーの声</h2>
          <div class="section-divider mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: '田中 さくら',
              tag: 'コーチング学習中',
              badge: 'tag-coaching',
              avatar: '田',
              color: 'from-blue-400 to-blue-600',
              text: '資格スクールで学んだあと、実践の場がなくて困っていました。PractiConnectで毎週練習できるようになり、自信がつきました！',
              stars: 5,
            },
            {
              name: '鈴木 たけし',
              tag: 'NLP・カウンセリング',
              badge: 'tag-nlp',
              avatar: '鈴',
              color: 'from-green-400 to-teal-500',
              text: 'クライアント役と施術者役を交互に体験できるので、両方の視点が身につきます。安全な環境で練習できるのが最高です。',
              stars: 5,
            },
            {
              name: '佐藤 みのり',
              tag: 'ヒプノセラピー',
              badge: 'tag-hypno',
              avatar: '佐',
              color: 'from-purple-400 to-purple-600',
              text: '海外在住なのですが、日本語で練習相手を見つけられてとても助かっています。時差があっても柔軟に調整できます。',
              stars: 5,
            },
          ].map(t => (
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover">
              <div class="flex gap-1 mb-4">
                {Array(t.stars).fill(0).map(() => (
                  <i class="fas fa-star text-amber-400 text-sm"></i>
                ))}
              </div>
              <p class="text-gray-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div class="flex items-center gap-3">
                <div class={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span class="text-white font-bold">{t.avatar}</span>
                </div>
                <div>
                  <p class="font-semibold text-gray-800 text-sm">{t.name}</p>
                  <span class={`badge ${t.badge} text-xs`}>{t.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section class="py-20 bg-white">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <div class="bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-10 text-white shadow-xl">
          <i class="fas fa-hands-helping text-5xl mb-4 opacity-80"></i>
          <h2 class="text-3xl font-bold mb-4">今すぐ練習相手を見つけよう</h2>
          <p class="text-blue-100 mb-8 leading-relaxed">
            登録は無料。金銭の授受は一切なし。<br />
            志を同じくする仲間と、安心して実践スキルを磨きましょう。
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" class="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-3.5 rounded-xl transition-smooth shadow-lg">
              <i class="fas fa-user-plus mr-2"></i>無料で登録する
            </a>
            <a href="/members" class="bg-blue-700 bg-opacity-50 border border-white border-opacity-40 text-white font-semibold px-8 py-3.5 rounded-xl transition-smooth">
              <i class="fas fa-search mr-2"></i>メンバーを見る
            </a>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
)
