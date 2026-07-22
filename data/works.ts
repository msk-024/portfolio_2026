import type { Work, WorkCategory } from "@/types/work";

export const workCategories = [
  "すべて",
  "Webアプリ",
  "Webサイト",
  "WordPress",
  "デザイン",
  "イラスト",
] as const satisfies readonly ["すべて", ...WorkCategory[]];

export type WorkCategoryFilter = (typeof workCategories)[number];

export const works: Work[] = [
  {
    id: "nurse-calc",
    slug: "nurse-calc",
    title: "NurseCalc",
    category: "Webアプリ",
    type: "app",
    description:
      "看護業務でよく使う9種類の計算を、根拠や看護のポイントまで確認できるツールです。",
    image: "/works/nurse-calc/thumb.webp",
    icon: "/works/nurse-calc/icon.webp",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form", "Zod"],
    overview:
      "薬剤計算・点滴速度・体液バランスなど、看護師業務でよく使われる9種類の計算をスマートフォンでもすぐに行えるWebアプリです。計算結果が基準範囲の内か外か、その数値が何を示す可能性があるか、どんな看護をすべきかまでヘルプで確認でき、新人〜中堅看護師のアセスメントを教育的に支援します。ログイン不要・インストール不要で、忙しい現場でもすぐに使えます。",
    role: "個人開発（企画・設計・実装）",
    period: "2025年4月",
    challenge:
      "新人〜中堅の看護師がアセスメントを行う際、計算した数値が何を示しているのか、その結果がどう関連するのかが分からない、という問題を解決したかった。",
    solution:
      "計算機能に加えて、結果画面に「その数値が何を示すか」「関連して何を観察すべきか」「看護のポイント」を表示するヘルプを組み込み、計算から臨床判断までを一つの画面で支援できるようにした。入力は React Hook Form + Zod でバリデーションし、履歴は LocalStorage に自動保存して再計算にも対応している。",
    demoUrl: "https://nurse-calc-app.vercel.app/",
    githubUrl: "https://github.com/msk-024/nurse-calc-app",
    gallery: [
      {
        type: "screen",
        src: "/works/nurse-calc/screen-1.webp",
        alt: "NurseCalc のホーム画面",
        title: "ホーム画面",
        description: "よく使う計算をひとつに集約。",
      },
      {
        type: "screen",
        src: "/works/nurse-calc/screen-2.webp",
        alt: "NurseCalc の計算結果・ヘルプ表示画面",
        title: "結果・ヘルプ表示",
        description: "数字だけじゃなく、根拠や看護ポイントまで確認。",
      },
      {
        type: "screen",
        src: "/works/nurse-calc/screen-3.webp",
        alt: "NurseCalc の履歴ページ",
        title: "履歴ページ",
        description: "履歴保存機能があり、履歴もすぐ再利用できます。",
      },
    ],
  },
  {
    id: "mirureco",
    slug: "mirureco",
    title: "ミルレコ",
    category: "Webアプリ",
    type: "app",
    description:
      "喋るだけで、頭の中の情報を10秒でSBAR形式に整える申し送り支援AIツールです。",
    image: "/works/mirureco/thumb.webp",
    icon: "/works/mirureco/icon.webp",
    tech: [
      "Next.js",
      "TypeScript",
      "Google Gemini",
      "Zod",
      "Dexie.js",
      "Tailwind CSS",
    ],
    overview:
      "医療・介護現場のスタッフが「申し送り」を素早く・正確・安全に残すためのWebアプリです。音声またはテキストで入力するだけで、AIが自動的にSBAR形式（状況・背景・評価・提案）に整理し、そのまま読み上げられる1文要約も生成します。ログイン不要・インストール不要のPWAで、思考を止めずに申し送りを整えられます。",
    role: "個人開発（企画・設計・AI実装）",
    period: "2026年5月",
    challenge:
      "申し送りは長くなりがちで、考えながら話すと内容が飛んだりまとめづらい。「カルテを見れば」と言われても、カルテには載せられない情報もある。そうした申し送りを、素早く分かりやすく整理したかった。",
    solution:
      "音声入力だけでなく、音声が使えない場面を想定してテキスト入力にも対応。解析の中止（キャンセル）も可能にした。個人情報を持たない・入れない設計として、氏名を話しても出力時に「A氏」へ自動で匿名化し、音声そのものは保存しない。AIには Google Gemini を用い、ストリーミングで結果を即座に表示する（ネット接続が必要）。",
    demoUrl: "https://mirureco.vercel.app/",
    githubUrl: "https://github.com/msk-024/mirureco",
    demoNote:
      "デモは Google Gemini の無料枠を利用しているため、同一IPアドレスから1時間に5回までの制限があります。上限に達した場合は時間をおいてお試しください。",
    gallery: [
      {
        type: "screen",
        src: "/works/mirureco/screen-1.webp",
        alt: "ミルレコのトップ画面",
        title: "トップ画面",
        description: "音声でもテキストでも、AIが申し送りを整理します。",
      },
      {
        type: "screen",
        src: "/works/mirureco/screen-2.webp",
        alt: "ミルレコの出力結果画面",
        title: "出力結果画面",
        description: "共有しやすい文章へ変換します。",
      },
      {
        type: "screen",
        src: "/works/mirureco/screen-3.webp",
        alt: "ミルレコの SBAR 形式の詳細画面",
        title: "SBAR形式の詳細画面",
        description: "SBAR形式の詳細もワンタップで見返せます。",
      },
    ],
  },
  {
    id: "nekopomo",
    slug: "nekopomo",
    title: "ねこポモ",
    category: "Webアプリ",
    type: "app",
    description: "猫と一緒に集中できる、ポモドーロ × TODO 管理アプリです。",
    image: "/works/nekopomo/thumb.webp",
    icon: "/works/nekopomo/icon.webp",
    tech: ["React Native", "Expo", "TypeScript", "Zustand", "Reanimated"],
    overview:
      "猫と一緒にポモドーロができる、タイマー × TODO 管理アプリです。集中中は猫が静かに隣にいて、サボると睨まれる——かわいく、でも機能的に。集中の記録・カレンダー・時間帯で変わる背景など「毎日続けたくなる」仕掛けを備え、PWA 対応でホーム画面にも追加できます。",
    role: "個人開発（企画・設計・AI実装）",
    period: "2026年5月",
    challenge:
      "特定のターゲット向けではなく、「かわいくポモドーロもできて、タスク管理もできる」——そんな自分が使いたいアプリが見つからなかったので作った。",
    solution:
      "集中状態に応じて猫の表情が変わるアニメーションや時間帯連動の背景、記録画面（連続日数・週間チャート・カレンダー）で「続けたくなる」体験を設計。iOSネイティブ化を見据えつつ、まずはコストをかけずに試せるよう Expo の Web 書き出し（PWA）で公開し、タイマーは終了予定時刻方式にしてバックグラウンドでも時間が狂わないようにした。",
    demoUrl: "https://neko-pomo.vercel.app",
    githubUrl: "https://github.com/msk-024/neko-pomo",
    demoNote:
      "Web版のため、別タブ表示中や画面ロック中は完了音・通知が鳴らない場合があります（タブを開いていればチャイムが鳴り、タブタイトルにも完了が表示されます）。",
    gallery: [
      {
        type: "screen",
        src: "/works/nekopomo/screen-1.webp",
        alt: "ねこポモのポモドーロ画面",
        title: "ポモドーロ画面",
        description: "猫と始めるポモドーロ。",
      },
      {
        type: "screen",
        src: "/works/nekopomo/screen-2.webp",
        alt: "ねこポモの Todo 画面",
        title: "Todo画面",
        description: "タスクを整理して、そのまま集中。",
      },
      {
        type: "screen",
        src: "/works/nekopomo/screen-3.webp",
        alt: "ねこポモのきろく画面",
        title: "きろく画面",
        description: "今日の頑張りをきろくで振り返ることができます。",
      },
    ],
  },
  {
    id: "tejun",
    slug: "tejun",
    title: "TEJUN",
    category: "Webアプリ",
    type: "app",
    description:
      "紙・Word・Excel で散らばる看護手順書を、最新版・変更履歴ごと一元管理できるアプリです。",
    image: "/works/tejun/thumb.webp",
    icon: "/works/tejun/icon.webp",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "TipTap",
      "shadcn/ui",
    ],
    overview:
      "紙や Word・Excel で管理されがちな看護の手順書・マニュアルを、作成・編集・変更履歴までブラウザで一元管理できるアプリです。閲覧はログイン不要でURLを共有するだけ、編集・新規作成のときだけログインが必要。既存ファイル（Word / Excel）の取り込みやテンプレート、全文検索・カテゴリ分けに対応し、チーム全員がいつでも最新の手順を確認できます。",
    role: "個人開発（企画・設計・AI実装）",
    challenge:
      "紙・Word・Excel の手順書があちこちで複製され、「どれが最新か」「いつ・誰が更新したか」「そもそも該当の手順がどこにあるか」が分からない、という現場の問題を解決したかった。",
    solution:
      "既存の手順ファイル（Word / Excel）を読み込んで登録でき、新規もテンプレートに沿って入力するだけ。全文検索・カテゴリ分けで目的の手順にすぐ辿り着ける。閲覧は登録不要／編集・新規作成のみログイン必須という権限設計とし、改ざん防止のため履歴テーブルは INSERT のみ（UPDATE・DELETE を RLS で禁止）、削除は論理削除のみとして Supabase の RLS で安全性を担保している。",
    demoUrl: "https://tejun.vercel.app",
    githubUrl: "https://github.com/msk-024/tejun",
    gallery: [
      {
        type: "screen-wide",
        src: "/works/tejun/screen-1.webp",
        alt: "TEJUN の手順書一覧・検索画面",
        title: "手順一覧・検索",
        description: "タイトル・本文・カテゴリで横断検索。",
      },
      {
        type: "screen-wide",
        src: "/works/tejun/screen-2.webp",
        alt: "TEJUN の手順書作成・取り込み画面",
        title: "作成・取り込み",
        description: "Word・Excel を取り込み、Web エディタで編集。",
      },
      {
        type: "screen-wide",
        src: "/works/tejun/screen-3.webp",
        alt: "TEJUN の変更履歴画面",
        title: "変更履歴",
        description: "更新日時を自動記録し、差分で管理。印刷にも対応。",
      },
    ],
  },
  {
    id: "nextrealty",
    slug: "nextrealty",
    title: "株式会社ネクストリアルティ",
    category: "WordPress",
    type: "wordpress",
    description:
      "全国の自宅用不動産の売買コンサルティングを行う企業のコーポレートサイト（オリジナルテーマ構築）です。",
    image: "/works/nextrealty/thumb.webp",
    tech: ["WordPress", "PHP", "ACF", "reCAPTCHA", "CSS", "JavaScript"],
    overview:
      "日本全国のご自宅用不動産の売買コンサルティングを行う「株式会社ネクストリアルティ」のホームページです。不動産を通じてお客様のより良いライフプランを実現するために、ヒアリングから販売会社の斡旋、アフターフォローまでを一貫して支援する——というコンセプトを軸に、WordPress のオリジナルテーマとして構築しました。",
    role: "オリジナルテーマ構築",
    period: "2025年11月",
    challenge:
      "不動産という慎重な検討を要する商材で、コンセプトと安心感を伝えつつ、お客様の声などを継続的に更新できるようにすること。",
    solution:
      "「ヒアリング → 販売会社の斡旋 → アフターフォロー」というコンセプトが伝わる構成にし、「お客様の声」セクションはカスタム投稿として実装してランダムに表示。お問い合わせフォームには reCAPTCHA を導入してスパム対策を行いつつ、バッジは非表示にして規約文をテキストで表示することでデザインを崩さないよう配慮した。ACF でコンテンツを更新しやすいオリジナルテーマとして構築している。",
    demoUrl: "https://n-farm.holy.jp/last-practical",
    gallery: [
      {
        type: "full",
        src: "/works/nextrealty/thumb.webp",
        alt: "株式会社ネクストリアルティのコーポレートサイトのデザイン",
        title: "サイトデザイン",
      },
    ],
  },
  {
    id: "life",
    slug: "life",
    title: "LIFE",
    category: "Webサイト",
    type: "web",
    description:
      "「自分を大事にしながら変化を楽しむ」をコンセプトにした美容室のLPです。",
    image: "/works/life/thumb.webp",
    tech: ["Adobe Illustrator"],
    overview:
      "「自分を大事にしながら変化を楽しむ」というコンセプトの美容室のランディングページです。光が差して輝くような女性をトップに据え、ロゴと同系色でサイト全体をまとめることで、コンセプトの世界観を表現しました。",
    role: "デザイン",
    period: "2023年11月",
    challenge:
      "「自分を大事にしながら変化を楽しむ」というコンセプトを、ひと目で伝わるビジュアルに落とし込むこと。",
    solution:
      "光が差して輝くような女性をトップに据え、ロゴと同系色でサイト全体をまとめて世界観を統一した。",
    gallery: [
      {
        type: "full",
        src: "/works/life/detail-1.webp",
        alt: "LIFE の美容室ランディングページのデザイン",
        title: "ファーストビュー",
      },
    ],
  },
  {
    id: "sakura-kids",
    slug: "sakura-kids",
    title: "桜のこもれびキッズランド",
    category: "WordPress",
    type: "wordpress",
    description:
      "全国展開する保育園運営団体の公式サイト（オリジナルテーマ構築）です。",
    image: "/works/sakura-kids/thumb.webp",
    tech: ["WordPress", "PHP", "ACF", "reCAPTCHA", "CSS", "JavaScript"],
    overview:
      "全国に展開する保育園運営団体「桜のこもれびキッズランド」の公式サイトです。各保育園の詳細ページや「こもれびだより」「お知らせ」を、各園のスタッフ自身が更新・追加できるよう、WordPress のオリジナルテーマとして構築しました。",
    role: "オリジナルテーマ構築",
    period: "2024年6月",
    challenge:
      "全国の各保育園のページを、エンジニアでない園のスタッフ自身が無理なく更新・追加できるようにすること。",
    solution:
      "詳細ページはスタッフがテキスト・画像を直接入力できるようカスタムフィールドで実装。「こもれびだより」「お知らせ」の詳細も同様にカスタムフィールド化し、サムネイル下の本文はループで段落を自由に追加できるようにした。お問い合わせと採用エントリーの完了画面を共通化するなど、運用と保守のしやすさを重視して構築した。",
    demoUrl: "https://n-farm.holy.jp/practical2",
    gallery: [
      {
        type: "full",
        src: "/works/sakura-kids/thumb.webp",
        alt: "桜のこもれびキッズランドの公式サイトのデザイン",
        title: "サイトデザイン",
      },
    ],
  },
  {
    id: "and-hair",
    slug: "and-hair",
    title: "&HAIR",
    category: "Webサイト",
    type: "web",
    description: "美容室の魅力を伝える、お客様向けのランディングページです。",
    image: "/works/and-hair/thumb.webp",
    tech: ["Adobe Illustrator", "HTML", "CSS", "JavaScript"],
    overview:
      "美容室のランディングページのデザイン・実装に取り組んだ Web デザイン作品です。来店を検討しているお客様に向けて、店舗の世界観をわかりやすく伝えることを目指しました。",
    role: "デザイン・コーディング",
    period: "2023年10月",
    challenge: "情報を詰め込みすぎず、お客様に伝わりやすい構成にすること。",
    solution:
      "スクロールに合わせたフェードなど、控えめなアニメーションで動きを添え、視線を誘導しながら店舗の世界観を伝えた。",
    gallery: [
      {
        type: "full",
        src: "/works/and-hair/detail-1.webp",
        alt: "&HAIR のランディングページデザイン",
        title: "ファーストビュー",
      },
    ],
  },
  {
    id: "aspace",
    slug: "aspace",
    title: "ASpace",
    category: "Webサイト",
    type: "web",
    description: "好みのインテリアを見つけられる、インテリア紹介サイトです。",
    image: "/works/aspace/thumb.webp",
    tech: ["Adobe Illustrator"],
    overview:
      "インテリアを紹介する Web デザイン作品です。7部屋のインテリアを主役に、余計な要素を削ぎ落として、写真そのものを楽しめる構成を目指しました。",
    role: "デザイン",
    period: "2023年11月",
    challenge: "部屋のインテリアそのものを主役に見せること。",
    solution:
      "無駄な文字などを極力排除し、インテリアの写真が引き立つ静かな構成にした。",
    gallery: [
      {
        type: "full",
        src: "/works/aspace/detail-1.webp",
        alt: "ASpace のインテリア紹介サイトのデザイン",
        title: "ファーストビュー",
      },
    ],
  },
  {
    id: "trrrip",
    slug: "trrrip",
    title: "trrrip",
    category: "デザイン",
    type: "design",
    description: "「trrrip」のバナーデザインです。",
    image: "/works/trrrip/thumb.webp",
    tech: ["Adobe Illustrator"],
    overview:
      "「trrrip」のバナーの作成・デザインを担当したグラフィックデザイン作品です。",
    role: "バナーの作成・デザイン",
    period: "2023年11月",
    gallery: [
      {
        type: "full",
        src: "/works/trrrip/detail-1.webp",
        alt: "trrrip のバナーデザイン",
        title: "バナー",
      },
    ],
  },
  {
    id: "workers",
    slug: "workers",
    title: "Workers",
    category: "Webサイト",
    type: "web",
    description: "「Workers」のスマホ向けランディングページのデザインです。",
    image: "/works/workers/thumb.webp",
    tech: ["Adobe Illustrator"],
    overview:
      "「Workers」のランディングページのデザインに取り組んだ Web デザイン作品です。全体のトーン&マナーを合わせ、わかりやすく伝わるデザインを目指しました。",
    role: "デザイン",
    period: "2023年11月",
    challenge: "全体のトーン&マナーを統一し、分かりやすく伝えること。",
    solution:
      "配色や要素のトーン&マナーを合わせ、情報が直感的に伝わるデザインに仕上げた。",
    gallery: [
      {
        type: "mobile",
        src: "/works/workers/detail-1.webp",
        alt: "Workers のスマホ向けランディングページのデザイン",
        title: "ファーストビュー",
      },
    ],
  },
  {
    id: "mamayume",
    slug: "mamayume",
    title: "ママ夢マルシェ",
    category: "デザイン",
    type: "design",
    description:
      "ママ夢ラジオ香川様「ママ夢マルシェ」初開催のチラシデザインです。",
    image: "/works/mamayume/thumb.webp",
    tech: ["Canva"],
    overview:
      "ママ夢ラジオ香川様の親子向けイベント「ママ夢マルシェ」初開催に向けたチラシデザインです。初開催かつ親子が対象のため、子どもでも惹きつけられるポップでカラフルなデザインに仕上げました。",
    role: "チラシデザイン",
    period: "2023年11月",
    challenge:
      "初開催・親子対象のイベントで、子どもの目にも留まるチラシにすること。",
    solution:
      "ポップでカラフルな配色とあしらいで、親子が思わず手に取りたくなるデザインにした。",
    gallery: [
      {
        type: "poster",
        src: "/works/mamayume/detail-1.webp",
        alt: "ママ夢マルシェのチラシデザイン",
        title: "チラシデザイン",
      },
    ],
  },
  {
    id: "mamayume-radio",
    slug: "mamayume-radio",
    title: "ママ夢ラジオ香川 紹介チラシ",
    category: "デザイン",
    type: "design",
    description: "ママ夢ラジオ香川の活動を紹介する、表裏のチラシデザインです。",
    image: "/works/mamayume-radio/thumb.webp",
    tech: ["Canva"],
    overview:
      "ママ夢ラジオ香川の概要や活動内容、どんな人たちが関わっているのかが伝わるよう、写真を多く使って制作した紹介チラシ（表・裏）のデザインです。ロゴマークと色のトーン&マナーを合わせ、団体の世界観を統一しました。",
    role: "チラシデザイン",
    period: "2025年4月",
    challenge:
      "ママ夢ラジオ香川がどんな団体で、どんな人が活動しているのかを、ひと目で伝えること。",
    solution:
      "写真を多く配置して活動の様子や人柄が伝わるようにし、ロゴマークと色のトーン&マナーを合わせて全体を統一した。",
    gallery: [
      {
        type: "poster",
        src: "/works/mamayume-radio/front.webp",
        alt: "ママ夢ラジオ香川 紹介チラシ（表面）",
        title: "表面",
      },
      {
        type: "poster",
        src: "/works/mamayume-radio/back.webp",
        alt: "ママ夢ラジオ香川 紹介チラシ（裏面）",
        title: "裏面",
      },
    ],
  },
  {
    id: "valentine-rose",
    slug: "valentine-rose",
    title: "VALENTINE ROSE",
    category: "WordPress",
    type: "wordpress",
    description:
      "架空の女性専門脱毛サロンチェーンのコーポレートサイト（オリジナルテーマ構築）です。",
    image: "/works/valentine-rose/thumb.webp",
    tech: ["WordPress", "PHP", "ACF", "reCAPTCHA", "CSS", "JavaScript"],
    overview:
      "「VALENTINE ROSE」という架空の女性専門脱毛サロンチェーンのコーポレートサイトです。全国展開を想定し、各店舗の紹介ページや NEWS を、店舗スタッフ自身が更新・追加できるよう WordPress のオリジナルテーマとして構築しました。",
    role: "オリジナルテーマ構築",
    period: "2024年4月",
    challenge:
      "全国展開する各店舗のページを、エンジニアでない店舗スタッフ自身が無理なく更新・追加できるようにすること。",
    solution:
      "店舗詳細ページはスタッフがテキスト・画像を直接入力できるようカスタムフィールドで実装。特に「お問い合わせから施術の流れ」は店舗ごとにステップ数が異なるため、任意の数だけ繰り返せるループとして構築した。NEWS 詳細も同様にカスタムフィールド化し、サムネイル下の本文はループで段落を自由に追加できるようにして、非エンジニアのスタッフでも運用しやすい設計にした。",
    demoUrl: "https://n-farm.holy.jp/practical",
    gallery: [
      {
        type: "full",
        src: "/works/valentine-rose/thumb.webp",
        alt: "VALENTINE ROSE のコーポレートサイトのデザイン",
        title: "サイトデザイン",
      },
    ],
  },
  {
    id: "dm-agusa",
    slug: "dm-agusa",
    title: "阿草健吾　個展DM",
    category: "デザイン",
    type: "design",
    description: "阿草健吾の個展のDMです。",
    image: "/works/dm-agusa/thumb.webp",
    tech: ["Canva"],
    overview:
      "阿草健吾氏の芸術作品が際立つようにお知らせなどはシンプルに配置し、洗練されたデザインを目指しました。",
    role: "DMデザイン",
    period: "2025年2月",
    challenge:
      "阿草健吾の作品の魅力を１枚で伝え、個展へ足を運んでいただくこと。",
    solution:
      "作品を主役に、他は必要な情報のみをシンプルに配置。",
    gallery: [
      {
        type: "poster",
        src: "/works/dm-agusa/front.webp",
        alt: "阿草健吾　個展DM（表面）",
        title: "表面",
      },
      {
        type: "poster",
        src: "/works/dm-agusa/back.webp",
        alt: "阿草健吾　個展DM（裏面）",
        title: "裏面",
      },
    ],
  },
  {
    id: "illustration",
    slug: "illustration",
    title: "イラスト",
    category: "イラスト",
    type: "illustration",
    description: "イラスト作品はこちら",
    // ↓ モック画像ができたら "/works/illustration/thumb.webp" に差し替えてください（今はグレー表示）
    image: "/works/placeholder.jpg",
    tech: [],
    overview: "イラスト作品は別サイトで公開しています。",
    // ↓ 今はinstagramだが、別サイトができたら URL をさし替えてください（カードがそのサイトへ遷移します）
    externalUrl: "https://www.instagram.com/mo0_ch1/",
    gallery: [],
  },
];
