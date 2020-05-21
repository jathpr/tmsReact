### Шпаргалка по JSX

##### В основу легли статьи [introducing-jsx](https://ru.reactjs.org/docs/introducing-jsx.html) и [jsx-in-depth](https://ru.reactjs.org/docs/jsx-in-depth.html)

- расширений файлов - jsx
- import React from 'react';
- имена компонентов с большой буквы
- jsx выражения это функции результат которых объект, к примеру их можно присваивать `const element = <div tabIndex="0"></div>;`
- пропсы - любые js-выражения `<MyComponent foo={1 + 2 + 3 + 4} />`
  Оператор if и цикл for не являются выражениями в JavaScript, поэтому их нельзя непосредственно использовать в JSX
- `<MyComponent message="привет, мир" />` эквивалентно `<MyComponent message={'привет, мир'} />`
- `<MyTextBox autocomplete />` эквивалентно `<MyTextBox autocomplete={true} />`
- эквивалентно:

```
function App1() {
  return <Greeting firstName="Иван" lastName="Иванов" />;
}

function App1() {
  const props = {firstName: 'Иван', lastName: 'Иванов'};
  return <Greeting {...props} />;
}
```

- внутри компонента можно писать как текст (без кавычек) так и js-выражения в фигурных скобках  
  `<MyComponent>Пример</MyComponent>`  
  `<MyComponent>{'Пример'}</MyComponent>`  
  `<ul> {array.map((data) => <Item key={data.id} message={data.message} />)} </ul>`
- компонент должен возвращать одно значение. Это может быть реакт элемент, реакт компонент или массив.
- Логические значения, null и undefined игнорируются  
  Это используется для короткой записи:  
  `{showHeader && <Header />}`
- если на текущей итерации компонент не должен ничего отрисовывать, можно вернуть `null`
