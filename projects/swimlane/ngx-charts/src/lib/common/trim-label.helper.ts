export function trimLabel(s, max = 16): string {
  if (typeof s !== 'string') {
    if (typeof s === 'number') {
      return s + '';
    } else {
      return '';
    }
  }

  s = s.trim();
  if (s.length <= max) {
    return s;
  } else {
    return `${s.slice(0, max)}...`;
  }
}

export function chunkLabel(s, max = 16) {
  const numChunks = Math.ceil(s.length / max);
  const chunks = new Array(numChunks);

  for (let i = 0, o = 0; i < numChunks; ++i, o += max) {
    chunks[i] = s.substr(o, max);
  }

  return chunks;
}
