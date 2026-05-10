import { useScrollProgress } from '@/hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-background/20 backdrop-blur-sm">
      <div 
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent shadow-[0_0_10px_rgba(0,212,255,0.5)]"
        style={{ width: `${progress}%` }}
        data-testid="scroll-progress"
      />
    </div>
  );
}
