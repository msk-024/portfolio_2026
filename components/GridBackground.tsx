/**
 * 薄いグリッド背景（装飾専用）
 *
 * @precondition 親要素が position: relative であること
 * @postcondition 親要素いっぱいに 3〜5% 程度の存在感のグリッド線を描画する
 * @invariant pointer-events: none — 一切の操作を妨げない
 */
export default function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(47, 47, 47, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(47, 47, 47, 0.04) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
  );
}
