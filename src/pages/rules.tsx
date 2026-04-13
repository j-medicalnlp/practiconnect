import { NavBar, Footer } from '../components/Layout'

export const RulesPage = () => (
  <>
    <NavBar active="rules" />
    <div class="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Hero */}
      <div class="text-center mb-12">
        <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
          <i class="fas fa-shield-alt text-white text-2xl"></i>
        </div>
        <h1 class="text-3xl font-bold text-gray-800 mb-2">利用ルール・禁止事項</h1>
        <p class="text-gray-500 text-sm max-w-lg mx-auto">PractiConnectは、純粋な学びと成長の場を守るため、以下のルールを設けています。ご登録前に必ずお読みください。</p>
      </div>

      {/* Prohibited actions - red highlight */}
      <div class="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
        <h2 class="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
          <i class="fas fa-ban text-red-500"></i>厳禁事項（違反時はアカウント停止）
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { icon: 'fa-yen-sign', title: '金銭・物品の授受', desc: '報酬・謝礼・物品・サービスのやりとり一切禁止' },
            { icon: 'fa-bullhorn', title: '勧誘・営業活動', desc: '有料サービス・講座・商品への誘導、宣伝、勧誘禁止' },
            { icon: 'fa-id-card', title: '資格の虚偽申告', desc: '未取得・失効・偽造した資格の登録は厳禁' },
            { icon: 'fa-user-slash', title: 'ハラスメント行為', desc: 'セクシャルハラスメント・暴言・差別的言動禁止' },
            { icon: 'fa-share-alt', title: '外部連絡先の無断共有', desc: 'SNS・メール・LINEなどの連絡先を同意なく共有禁止' },
            { icon: 'fa-video', title: '無断録音・録画', desc: 'セッション中の録音・録画は相手の同意なく禁止' },
          ].map(r => (
            <div class="flex gap-3 bg-white rounded-xl p-3 border border-red-100">
              <div class="w-9 h-9 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                <i class={`fas ${r.icon} text-red-500`}></i>
              </div>
              <div>
                <p class="font-semibold text-red-700 text-sm">{r.title}</p>
                <p class="text-xs text-gray-500 mt-0.5">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rules sections */}
      <div class="space-y-6">
        {[
          {
            icon: 'fa-users',
            color: 'from-blue-500 to-blue-600',
            title: '1. 会員資格と登録',
            items: [
              '登録は無料です。コーチング・カウンセリング・NLP・ヒプノセラピーを学ぶすべての方が対象です。',
              '表示名はニックネーム可ですが、礼儀ある名前を使用してください。',
              'メールアドレスによる本人確認が必要です。',
              '1人1アカウントが原則です。',
              '利用規約への同意が登録条件です。',
            ],
          },
          {
            icon: 'fa-handshake',
            color: 'from-teal-500 to-teal-600',
            title: '2. セッションの実施',
            items: [
              '本サービスは無償の練習マッチングです。相手への報酬、謝礼、物品提供は厳禁です。',
              'セッションはオンライン（Google Meet / Zoom）で実施してください。',
              '主催者はURLをシステム内で管理し、参加者のみ共有されます。',
              'セッション中は相互尊重を基本に、安全・安心な練習環境を維持してください。',
              'セッションのキャンセルは早めに連絡し、相手へ誠実に対応してください。',
            ],
          },
          {
            icon: 'fa-lock',
            color: 'from-green-500 to-green-600',
            title: '3. プライバシーと情報管理',
            items: [
              'メールアドレス・実名などの個人情報は他ユーザーに公開されません。',
              'マッチング成立後のみ、システム内メッセージで連絡可能です。',
              'メッセージはテキストのみ。画像・ファイル・URLの送信は制限されています。',
              'セッション中の録音・録画は相手の明示的な同意が必要です。',
              '外部SNSへのセッション内容の投稿は、相手の許可なく行ってはいけません。',
            ],
          },
          {
            icon: 'fa-certificate',
            color: 'from-purple-500 to-purple-600',
            title: '4. 資格・情報の正確性',
            items: [
              '登録する資格・学歴は正確な情報のみ記載してください。',
              '未取得の資格は「取得予定」として明記してください。',
              '資格証明書の画像は任意ですが、提出すると信頼性が高まります。',
              '虚偽の資格情報の登録は即時アカウント停止の対象となります。',
            ],
          },
          {
            icon: 'fa-flag',
            color: 'from-red-500 to-rose-600',
            title: '5. 違反報告と対応',
            items: [
              '違反行為を発見した場合は、各セッション・プロフィールの「違反報告」ボタンからご報告ください。',
              '報告者の情報は匿名で保護されます。',
              '運営チームが報告内容を確認し、適切な対応（警告・停止等）を実施します。',
              '虚偽の違反報告は本人のアカウント停止につながる場合があります。',
            ],
          },
        ].map(section => (
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class={`w-10 h-10 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-sm`}>
                <i class={`fas ${section.icon} text-white`}></i>
              </div>
              <h2 class="text-lg font-bold text-gray-800">{section.title}</h2>
            </div>
            <ul class="space-y-2">
              {section.items.map(item => (
                <li class="flex items-start gap-2.5 text-sm text-gray-600">
                  <i class="fas fa-check-circle text-green-500 flex-shrink-0 mt-0.5"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div class="mt-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 border border-blue-100 text-center">
        <i class="fas fa-envelope text-blue-500 text-3xl mb-3"></i>
        <h3 class="font-bold text-gray-800 mb-2">ご不明な点はお問い合わせください</h3>
        <p class="text-sm text-gray-500 mb-4">ルールに関するご質問、問題の報告は運営チームが対応いたします。</p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/contact" class="btn-primary">
            <i class="fas fa-envelope"></i>お問い合わせ
          </a>
          <a href="/report" class="btn-secondary">
            <i class="fas fa-flag"></i>違反を報告する
          </a>
        </div>
      </div>

      {/* Updated date */}
      <p class="text-center text-xs text-gray-400 mt-6">最終更新：2026年4月13日</p>
    </div>
    <Footer />
  </>
)

export const ReportPage = () => (
  <>
    <NavBar />
    <div class="min-h-screen bg-gray-50 py-12">
      <div class="max-w-lg mx-auto px-4">
        <div class="text-center mb-8">
          <div class="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center mx-auto mb-3">
            <i class="fas fa-flag text-red-500 text-2xl"></i>
          </div>
          <h1 class="text-2xl font-bold text-gray-800">違反報告</h1>
          <p class="text-gray-500 mt-1 text-sm">報告者の情報は匿名で保護されます</p>
        </div>

        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div class="alert alert-warning mb-5">
            <i class="fas fa-exclamation-triangle text-amber-500 flex-shrink-0"></i>
            <div class="text-xs">
              <p class="font-semibold">虚偽の報告は禁止されています</p>
              <p class="mt-0.5">事実に基づいた報告のみお願いします。虚偽報告はアカウント停止の対象となります。</p>
            </div>
          </div>

          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">報告対象<span class="text-red-500 ml-1">*</span></label>
              <select class="form-input">
                <option value="">選択してください</option>
                <option>特定のユーザーのプロフィール</option>
                <option>特定のセッション</option>
                <option>受信したメッセージ</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">ユーザー名 / セッションID</label>
              <input type="text" class="form-input" placeholder="報告対象のユーザー名またはセッションIDを入力" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">違反種別<span class="text-red-500 ml-1">*</span>（複数可）</label>
              <div class="space-y-2">
                {[
                  '報酬・金銭の要求',
                  '有料サービスへの勧誘・宣伝',
                  'ハラスメント・不適切な言動',
                  '資格の虚偽申告',
                  '外部連絡先の無断共有',
                  '無断録音・録画',
                  'その他の利用規約違反',
                ].map(v => (
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" class="rounded text-red-500" />
                    <span class="text-sm text-gray-700">{v}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">詳細説明<span class="text-red-500 ml-1">*</span></label>
              <textarea class="form-input" rows={4} placeholder="いつ・どのような状況で・どのような言動があったかを具体的に記述してください"></textarea>
            </div>

            <button type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-smooth flex items-center justify-center gap-2"
              onclick="showToast('違反報告を送信しました。確認メールをお送りします。', 'info'); return false;">
              <i class="fas fa-flag"></i>違反を報告する
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </>
)
