export const SEVERITY_STYLES: Record<
  'medium' | 'high',
  { bg: string; accent: string }
> = {
  medium: { bg: 'bg-(--mid-accent)', accent: 'bg-(--mid-main)' },
  high: { bg: 'bg-(--high-accent)', accent: 'bg-(--high-main)' },
};
