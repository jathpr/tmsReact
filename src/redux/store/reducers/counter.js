const initialState = 0;

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};
