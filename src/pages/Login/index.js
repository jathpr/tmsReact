import { connect } from 'react-redux';
import { LoginComponent } from './Login';
import { setUser } from '../../store/actions';

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (users) => {
    dispatch(setUser(users));
  },
});

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
