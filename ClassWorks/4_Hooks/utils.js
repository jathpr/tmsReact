const toggleListValueById = (prop, list, id) => list.map((el) => (el.id === id ? { ...el, [prop]: !el[prop] } : el));

export const toggleRemove = (list, id) => toggleListValueById('active', list, id);

export const toggleDone = (list, id) => list.map((el) => (el.id === id ? { ...el, done: !el.done } : el));

export const getNewId = (list) => {
  if (!list || list.length === 0) return 0;
  return list[list.length - 1].id + 1;
};
