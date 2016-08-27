import {useDeps} from 'react-simple-di';
import {composeAll} from 'react-komposer-plus';

import withRedux from '/client/lib/compose-with-redux';
import Counter from '../components/counter';

const mapStateToProps = (state) => ({
  counter: state.counter
});

const depsToProps = (context, actions) => ({
  context,

  onIncrement() {
    context.dispatch(actions.counter.increment());
  },

  onReset() {
    context.dispatch(actions.counter.reset());
  },

  onRandom() {
    context.dispatch(actions.counter.random());
  }
});

export default composeAll(
  withRedux(mapStateToProps),
  useDeps(depsToProps)
)(Counter);