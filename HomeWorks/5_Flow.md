- Написать калькулятор (пример на ![фото](HomeWorks/calc.png))
- Написать отображение статистики по COVID
  url - https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats
  https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search
  options:
  limit
  page
  order (field name)
  search

1. продумать архитектуру, разбить задачу на шаги + компоненты

var url = new URL("http://foo.bar/?x=1&y=2");

// If your expected result is "http://foo.bar/?x=1&y=2&x=42"
url.searchParams.append('x', 42);

// If your expected result is "http://foo.bar/?x=42&y=2"
url.searchParams.set('x', 42);
