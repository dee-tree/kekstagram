function randomInt(fromInclusive, toInclusive) {
  if (fromInclusive > toInclusive) {
    throw new RangeError('toInclusive must be greater than or equal fromInclusive');
  }

  const min = Math.floor(fromInclusive);
  const max = Math.floor(toInclusive);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

function isStringNoLonger(string, maxLength) {
  return string.length <= maxLength;
}

/* just functions call to avoid ESLnt errors */
randomInt(1, 2);
isStringNoLonger('lol', 3); // true
