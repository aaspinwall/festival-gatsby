const getTopElement = (element, flag) => {
  const reg = new RegExp(flag);
  let parent = element.target;
  while (parent.parentElement.id.search(reg) === -1) {
    parent = parent.parentElement;
  }
  return parent.parentElement;
};

export default getTopElement;
