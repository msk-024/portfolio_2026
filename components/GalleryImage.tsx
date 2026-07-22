import Image from "next/image";
import type { GalleryImageType, GalleryItem } from "@/types/work";

/**
 * 画像種別ごとの枠設定。
 * full / mobile は枠に入れず、画像の縦横比のまま全体を見せる（下の分岐で処理）。
 */
const FRAME_STYLES: Record<
  Exclude<
    GalleryImageType,
    "full" | "mobile" | "poster" | "screen" | "screen-wide"
  >,
  { aspect: string; rounded: string; image: string }
> = {
  hero: {
    aspect: "aspect-[16/10]",
    rounded: "rounded-[20px]",
    image: "object-contain p-4",
  },
  mockup: {
    aspect: "aspect-[16/10]",
    rounded: "rounded-[20px]",
    image: "object-contain p-4",
  },
  page: {
    aspect: "aspect-[16/10]",
    rounded: "rounded-[20px]",
    image: "object-contain p-4",
  },
  design: {
    aspect: "aspect-square",
    rounded: "rounded-[20px]",
    image: "object-cover",
  },
};

/** 自然比率で見せる種別（枠に入れない） */
type NaturalType = "full" | "mobile" | "poster";

/** 自然比率で見せる種別のプレースホルダー用アスペクト比 */
const NATURAL_PLACEHOLDER_ASPECT: Record<NaturalType, string> = {
  full: "aspect-[1/2]",
  mobile: "aspect-[9/16]",
  poster: "aspect-[5/7]",
};

/** 自然比率で見せる種別の Image ratio ヒント（CLS 抑制用。実表示は h-auto で実比率になる） */
const NATURAL_DIMENSIONS: Record<NaturalType, { w: number; h: number }> = {
  full: { w: 1200, h: 2400 },
  mobile: { w: 1080, h: 1920 },
  poster: { w: 1240, h: 1754 },
};

type Props = {
  item: GalleryItem;
  /** グリッド内表示なら小さめの sizes を指定する */
  sizes?: string;
};

/**
 * 詳細ページ用の画像 1 枚。
 *
 * @precondition item.src は public 配下のパス（例: /works/xxx.webp）
 * @postcondition 画像サイズが枠と合わなくても崩れない：
 *                - full 以外 → 固定比率の枠 + object-contain / cover
 *                - full     → h-auto w-full で画像全体を表示
 * @invariant src に "placeholder" を含む場合はグレーのプレースホルダーを表示
 */
export default function GalleryImage({ item, sizes }: Props) {
  const isPlaceholder = item.src.includes("placeholder");

  // ── screen / screen-wide: 完成済みモック画像をそのまま表示（枠・余白・背景なし = App Store風）──
  if (item.type === "screen" || item.type === "screen-wide") {
    const isWide = item.type === "screen-wide";
    if (isPlaceholder) {
      return (
        <div
          className={`${isWide ? "aspect-[16/10]" : "aspect-[9/16]"} w-full rounded-[16px]`}
          role="img"
          aria-label={`${item.alt}（準備中）`}
          style={{ backgroundColor: "var(--color-border)" }}
        />
      );
    }
    return (
      <Image
        src={item.src}
        alt={item.alt}
        width={isWide ? 1600 : 1080}
        height={isWide ? 1000 : 1440}
        className="h-auto w-full rounded-[16px]"
        sizes={
          sizes ??
          (isWide
            ? "(max-width: 640px) 88vw, 440px"
            : "(max-width: 640px) 60vw, 210px")
        }
      />
    );
  }

  // ── full / mobile / poster: 枠に入れず画像の縦横比のまま全体を見せる ──
  // （mobile / poster は WorkGallery 側で幅を絞った中央寄せコンテナに入れる）
  if (
    item.type === "full" ||
    item.type === "mobile" ||
    item.type === "poster"
  ) {
    if (isPlaceholder) {
      return (
        <div
          className={`${NATURAL_PLACEHOLDER_ASPECT[item.type]} w-full rounded-[20px]`}
          role="img"
          aria-label={`${item.alt}（準備中）`}
          style={{ backgroundColor: "var(--color-border)" }}
        />
      );
    }
    const dims = NATURAL_DIMENSIONS[item.type];
    return (
      <Image
        src={item.src}
        alt={item.alt}
        width={dims.w}
        height={dims.h}
        className="h-auto w-full rounded-[20px] border object-contain"
        style={{ borderColor: "var(--color-border)" }}
        sizes={sizes ?? "(max-width: 768px) 100vw, 1200px"}
      />
    );
  }

  // ── full 以外: 固定比率の枠に収める ──
  const frame = FRAME_STYLES[item.type];

  if (isPlaceholder) {
    return (
      <div
        className={`${frame.aspect} ${frame.rounded} w-full`}
        role="img"
        aria-label={`${item.alt}（準備中）`}
        style={{ backgroundColor: "var(--color-border)" }}
      />
    );
  }

  return (
    <div
      className={`relative ${frame.aspect} ${frame.rounded} w-full overflow-hidden border`}
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "var(--color-white)",
      }}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className={frame.image}
        sizes={sizes ?? "(max-width: 768px) 100vw, 1200px"}
      />
    </div>
  );
}
