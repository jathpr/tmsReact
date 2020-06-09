import { SecondComponent } from './Second';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  counter: state,
});

const mapDispatchToProps = {
  increment: () => ({ type: 'INCREMENT' }),
};

// const mapDispatchToProps = (dispatch) => ({
//   increment: () => {
//     dispatch({ type: 'INCREMENT' });
//   },
// });

export const Second = connect(mapStateToProps, mapDispatchToProps)(SecondComponent);
