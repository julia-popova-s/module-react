const cutLine = (text, count) => {
  if (text.length > count + 1) {
    return text.slice(0, count) + "...";
  }
  return text;
};
export default cutLine;
