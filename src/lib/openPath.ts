export function openPath(path: string, push: (href: string) => void) {
  if (/^https?:\/\//i.test(path)) {
    window.open(path, '_blank', 'noopener,noreferrer');
    return;
  }
  push(path);
}
