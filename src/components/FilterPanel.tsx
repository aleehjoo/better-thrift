import React from "react";

export type FilterPanelProps = {
  title?: string;
  sectionLabel: string;
  options: string[];
  selected: Set<string>;
  onToggle: (opt: string) => void;
  onClear?: () => void;
  className?: string;
};

const FilterPanel: React.FC<FilterPanelProps> = ({
  title = "Filters",
  sectionLabel,
  options,
  selected,
  onToggle,
  onClear,
  className,
}) => (
  <div className={["rounded-xl border border-foreground/15 bg-background p-5", className]
    .filter(Boolean)
    .join(" ")}
  >
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      {onClear && (
        <button
          onClick={onClear}
          className="text-xs text-foreground/60 hover:text-foreground/90"
        >
          Clear
        </button>
      )}
    </div>
    <div>
      <h3 className="text-sm font-medium text-foreground/80 mb-2">{sectionLabel}</h3>
      <div className="space-y-2">
        {options.map((opt) => (
          <label
            key={opt}
            className="flex items-center gap-3 text-sm cursor-pointer select-none"
          >
            <input
              type="checkbox"
              className="accent-foreground/70"
              checked={selected.has(opt)}
              onChange={() => onToggle(opt)}
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  </div>
);

export default FilterPanel;
