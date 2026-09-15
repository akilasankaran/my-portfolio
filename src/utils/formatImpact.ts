export function formatImpact(impact: string): { value: string; label: string } {
  const lowerMatch = impact.match(/^([~]?\d+(?:[–-]\d+)?%?)\s+(?:lower|fewer)\s+(.+)$/i);

  if (lowerMatch) {
    return {
      value: `${lowerMatch[1]} ↓`,
      label: lowerMatch[2].toUpperCase(),
    };
  }

  const fasterMatch = impact.match(/^([~]?\d+(?:[–-]\d+)?%?)\s+faster\s+(.+?)(?:\s+through\b|$)/i);

  if (fasterMatch) {
    return {
      value: `${fasterMatch[1]} ↑`,
      label: fasterMatch[2].toUpperCase(),
    };
  }

  const parts = impact.split(/\s+/);
  return {
    value: parts[0] ?? impact,
    label: impact.replace(/^[^\s]+\s+/, "").toUpperCase() || impact.toUpperCase(),
  };
}
