// utils/calcOpacity.js
export const calcOpacity = (count) => {
  if (count === 0) return 0;
  return Math.min(1, 0.1 + Math.log10(count + 1) * 0.3);
};
