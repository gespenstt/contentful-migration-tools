export const getElementPrefix = (key: string): string => {
  const match: Record<string, string> = {
    atoms: 'at',
    molecules: 'ml',
    organisms: 'or',
    pages: 'pg',
    templates: 'tm',
    semantics: 'sm',
  };
  return match[key] ?? '';
};
