import { connect } from 'react-redux';
import { ContentComponent } from './Content';
import { setUsers } from '../../store/actions';

const mapStateToProps = (state) => ({
  isLoged: !!state.login.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUsers: (users) => {
    dispatch(setUsers(users));
  },
});

export const Content = connect(mapStateToProps, mapDispatchToProps)(ContentComponent);
