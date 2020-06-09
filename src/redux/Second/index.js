import { SecondComponent } from './Second';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({
    counter: state,
  });
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch({ type: 'INCREMENT' });
  },
});
// const mapDispatchToProps = {
//   increment: () => ({ type: 'INCREMENT' }),
// };

export const Second = connect(mapStateToProps, mapDispatchToProps)(SecondComponent);
