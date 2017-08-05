import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';


//HeroRankReducer
const rankReducer = (state = { rank: 0, name: 'WindStorm' }, action) => {
    switch (action.type) {
        case 'INCREMENT_RANK':
            //ES 5    
            //return { rank: state.rank + 1, name: state.name };
            //ES 6 - Object.Assign Method
            return Object.assign({}, state, { rank: state.rank + 1 });
        //ES 7 -Spread Operator
        //return { ...state, rank: state.rank + 1 };
        case 'UPDATE_HERO_NAME':
            // return { rank: state.rank, name: action.name };
            //ES 7- Spread Operator
            //return { ...state, name: action.name };
            return Object.assign({}, state, { name: action.name });
        default:
            return state;
    }
};

//Store
const store = createStore(rankReducer);
//action
const INCREMENT_RANK_ACTION = { type: 'INCREMENT_RANK' };

//Action Creator
const updateActionCreator = function (newName) {
    return { type: 'UPDATE_HERO_NAME', name: newName }
}

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        rank: state.rank,
        name: state.name
    }
}
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(INCREMENT_RANK_ACTION),
        onUpdateName: (event) => dispatch(updateActionCreator(event.target.value))
    }
}

class Hero extends React.Component {

    render() {
        console.log(this.props);

        const { rank, name, onIncreaseClick, onUpdateName} = this.props
        return (<div>
            <h1>Hero App With Redux</h1>
            <p>Your name is {name}</p>
            <p>Rank {rank} </p>
            <Widget onUpdateName={onUpdateName} />
            <button onClick={onIncreaseClick}>Rank</button>
        </div>)
    }

}
const Widget = (props) => <input type="text" onChange={props.onUpdateName} />

//Create HOC
const HeroApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Hero);



const mountPoint = document.getElementById('root');
ReactDOM.render(<Provider store={store}>
    <HeroApp />
</Provider>, mountPoint)