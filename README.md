# Portfolio — Misaki Mochizuki

看護師としての経験を軸に、Webアプリ開発・Web制作・デザインに取り組んでいます。
その制作物をまとめたポートフォリオサイトです。

## コンセプト

**「作品が主役の静かなギャラリー」**

余白とタイポグラフィを中心に構成し、UIが作品より目立たないことを最優先にしています。
白黒を基調とし、アニメーションは opacity と translate の最小限にとどめています。

## 技術スタック

| 分類           | 技術                     |
| -------------- | ------------------------ |
| フレームワーク | Next.js 16（App Router） |
| 言語           | TypeScript 5（strict）   |
| UI             | React 19                 |
| スタイリング   | Tailwind CSS v4          |
| アニメーション | Framer Motion 12         |
| デプロイ       | Vercel                   |

## 主な実装

- **2カラムレイアウト** — PC: 左固定のダークサイドバー / SP: 上部固定バー。ナビゲーションを常時表示（ハンバーガー不使用）
- **作品一覧** — PC: 縦スクロールに連動して2段グリッドが横移動する1画面完結型（`useScroll` + `useSpring`）/ SP: 縦スクロール
- **作品詳細** — 作品タイプ（app / web / wordpress / design / illustration）に応じてギャラリーのレイアウトを切り替え。画像の縦横比がバラバラでも崩れないよう、画像種別ごとに表示方法を出し分け
- **静的生成** — `generateStaticParams` + `dynamicParams = false` で全詳細ページを事前生成
- **アクセシビリティ** — セマンティックな見出し構造、`aria-*` 属性、キーボード操作、`prefers-reduced-motion` 対応

## セットアップ

```bash
npm install
npm run dev
```

http://localhost:3000 で起動します。

## スクリプト

| コマンド            | 内容                         |
| ------------------- | ---------------------------- |
| `npm run dev`       | 開発サーバー起動             |
| `npm run build`     | 本番ビルド                   |
| `npm run start`     | 本番サーバー起動             |
| `npm run lint`      | ESLint                       |
| `npm run typecheck` | 型チェック（`tsc --noEmit`） |

## ディレクトリ構成

```
app/
├── page.tsx            # トップ（作品一覧）
├── profile/            # プロフィール・お問い合わせ
├── works/[slug]/       # 作品詳細（動的ルート）
├── icon.svg            # ファビコン
└── globals.css         # デザイントークン・グローバルスタイル
components/             # UIコンポーネント
data/works.ts           # 作品データ（単一の情報源）
types/work.ts           # 作品の型定義
public/works/           # 作品画像
```

作品の追加・編集は `data/works.ts` と `public/works/<slug>/` で完結します。

## ライセンス

このリポジトリのコードとコンテンツ（画像・文章を含む）の著作権は制作者に帰属します。
掲載している制作物には、クライアントワークおよび学習目的の課題作品が含まれます。

---

© 2026 Misaki Mochizuki
