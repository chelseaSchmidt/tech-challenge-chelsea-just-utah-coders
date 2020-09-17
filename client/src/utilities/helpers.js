export const convertLabelToId = (label) => {
  const whitespace = /\s/g;
  return label.toLowerCase().replace(whitespace, '');
};
