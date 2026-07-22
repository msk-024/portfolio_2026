export type WorkCategory =
  "Webアプリ" | "Webサイト" | "WordPress" | "デザイン" | "イラスト";

export type WorkType = "app" | "web" | "wordpress" | "design" | "illustration";

/**
 * Gallery 画像の種別 — 詳細ページでの表示レイアウトを決める
 * - hero:   メインビジュアル（全幅・16:10 枠）
 * - mockup: PC / デバイスモック（全幅・16:10 枠）
 * - full:   LP 全体などの縦長画像（枠に入れず全幅で全体を見せる）
 * - mobile: スマホ向けLPなど縦長画像（スマホ幅で中央寄せ・全体を見せる）
 * - poster: チラシ・ポスターなど縦長の印刷物（やや広めの幅で中央寄せ・全体を見せる）
 * - screen:      スマホの完成モック画像（枠なし・そのまま・横スクロール）
 * - screen-wide: PC など横長の完成モック画像（枠なし・そのまま・横スクロール）
 * - page:        Web ページのキャプチャ（16:10 枠でグリッド表示）
 * - design:      デザイン・イラスト作品（正方形カードでグリッド表示）
 */
export type GalleryImageType =
  | "hero"
  | "mockup"
  | "full"
  | "mobile"
  | "poster"
  | "screen"
  | "screen-wide"
  | "page"
  | "design";

export type GalleryItem = {
  type: GalleryImageType;
  src: string;
  alt: string;
  title: string;
  description?: string;
};

export type Work = {
  id: string;
  slug: string;
  title: string;
  category: WorkCategory;
  type: WorkType;
  description: string;
  /** 一覧カード用の画像（アプリはモック、その他はサムネイル） */
  image: string;
  /** アプリのアイコン（詳細ページのタイトル横に表示）。アプリのみ設定 */
  icon?: string;
  tech: string[];
  demoUrl?: string;
  /** demoUrl の下に表示する注意書き（例: デモの利用制限）。demoUrl がある時だけ表示 */
  demoNote?: string;
  githubUrl?: string;
  featured?: boolean;
  /**
   * 詳細ページを持たず、一覧カードから直接この URL へ遷移させる作品用。
   * （例: イラストは別サイトで公開するため、カードは外部リンクにする）
   * 設定された作品は詳細ページ（/works/[slug]）を生成しない。
   */
  externalUrl?: string;
  // 詳細ページ用フィールド
  overview: string;
  role?: string;
  period?: string;
  challenge?: string;
  solution?: string;
  gallery: GalleryItem[];
};
