/*React+Redux=React-Reux Binding*/
//react-view ;redux state(data)

// redux contains actions/methods which will b copied in react as prop.

/**
 * React + Redux => React-Redux Binding
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { PropTypes } from 'prop-types';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}
Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}
////////////////////////////////////////////////////////////////

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}
// Action
const increaseAction = { type: 'increase' }

// Store
const store = createStore(counter);

//Mapping Redux state ----> React state --via props

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}
// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)