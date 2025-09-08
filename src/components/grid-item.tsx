interface GridItemProps {
  children: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
  className?: string;
}

export function GridItem({
  children,
  colSpan = 1,
  rowSpan = 1,
  className,
}: GridItemProps) {
  return (
    <div className={`p-4 col-span-${colSpan} row-span-${rowSpan} ${className ?? ""}`}>
      {children}
    </div>
  );
}
