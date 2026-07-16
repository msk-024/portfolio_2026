"use client";

import { workCategories, type WorkCategoryFilter } from "@/data/works";

type Props = {
  active: WorkCategoryFilter;
  onChange: (category: WorkCategoryFilter) => void;
};

export default function WorksFilter({ active, onChange }: Props) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="カテゴリフィルター"
    >
      {workCategories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className="text-[12px] tracking-[1px] px-3 py-1 rounded-full border transition-colors duration-200"
            style={
              isActive
                ? {
                    backgroundColor: "var(--color-dark)",
                    color: "var(--color-white)",
                    borderColor: "var(--color-dark)",
                    fontFamily: "var(--font-jp)",
                  }
                : {
                    backgroundColor: "transparent",
                    color: "var(--color-text)",
                    borderColor: "var(--color-border)",
                    fontFamily: "var(--font-jp)",
                  }
            }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
