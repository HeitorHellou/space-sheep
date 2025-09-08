interface MasonryGridProps {
  children: React.ReactNode;
}

export function MasonryGrid({ children }: MasonryGridProps) {
  return (
    <div className="p-4">
      <div className="grid grid-cols-6 auto-rows-[200px] gap-4">
        {children}
      </div>
    </div>
  );
}