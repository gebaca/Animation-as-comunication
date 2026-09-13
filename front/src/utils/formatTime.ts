const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

export function formatRelativeHours(timestamp: string): string {
  const diffMs = Date.now() - new Date(timestamp).getTime();
  const diffHours = Math.round(diffMs / (1000 * 60 * 60));

  return rtf.format(-diffHours, 'hour');
}
