interface GridProps {
  children: React.ReactNode;
}

export function Grid({ children }: GridProps) {
  return (
    <div className="p-4">
      <div className="grid-container grid grid-cols-3 gap-4 auto-rows-[minmax(150px, auto)]">
        {children}
      </div>
    </div>
  );
}