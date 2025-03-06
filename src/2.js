function getRandomCode() {
  const codes = ['ABC', 'XYZ', '123'];
  return codes[Math.floor(Math.random() * codes.length)];
}
