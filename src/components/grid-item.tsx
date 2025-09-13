interface GridItemProps {
  children: React.ReactNode;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2 | 3;
  className?: string;
}

const colSpanClasses = {
  1: 'col-span-1',
  2: 'col-span-2', 
  3: 'col-span-3'
} as const;

const rowSpanClasses = {
  1: 'row-span-1',
  2: 'row-span-2',
  3: 'row-span-3'
} as const;

export function GridItem({
  children,
  colSpan = 1,
  rowSpan = 1,
  className = "",
}: GridItemProps) {
  return (
    <div className={`grid-item ${colSpanClasses[colSpan]} ${rowSpanClasses[rowSpan]} ${className}`}>
      {children}
    </div>
  );
}
