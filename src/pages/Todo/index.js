import { connect } from 'react-redux';
import { addTodo, getTodos, setDone, setTab } from '../../store/todosActionCreators';
import { getTabTodos } from '../../store/todosSelectors';
import { TodoComponent } from './TodoComponent';

const mapStateToProps = (state) => ({
  todos: getTabTodos(state),
  tab: state.tab,
});

const actionCreators = {
  addTodo,
  getTodos,
  setDone,
  setTab,
};

export const Todo = connect(mapStateToProps, actionCreators)(TodoComponent);

// const url = new URL('path.com');
// url.searchParams.set('pAR', 'привет');
// fetch(url);
