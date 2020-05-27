const state = {
  list: [
    { id: 0, name: 'Купить молоко', done: false, active: true },
    { id: 1, name: 'Купить хлеб', done: true, active: true },
    { id: 2, name: 'Купить масло', done: false, active: false },
  ],
};

const toggleListValueById = (prop, list, id) => list.map((el) => (el.id === id ? { ...el, [prop]: !el[prop] } : el));
const newList = toggleListValueById('done', state.list, 2);
console.log('newList', newList);
console.log('list', state.list);
