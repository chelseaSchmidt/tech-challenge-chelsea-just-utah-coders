export const convertLabelToId = (label) => {
  const whitespace = /\s/g;
  return label.toLowerCase().replace(whitespace, '');
};

export const checkIfEmailValid = (email) => {
  const emailPattern = /^\S+@\S+\.\S+$/;
  return emailPattern.test(email);
};

export const checkIfDateValid = (dateString) => {
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  const matchesPattern = datePattern.test(dateString);
  if (matchesPattern) {
    const date = new Date(dateString);
    try {
      date.toISOString();
    } catch {
      return false;
    }
    return true;
  }
  return false;
};
