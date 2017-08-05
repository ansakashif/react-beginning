import React , {Component} from 'react';
 import ReactDOM from 'react-dom';
// import {Greeter}  from './greeterFunc';
import './styles.css';
//import MasterComponent from './masterComponent';
//import Hero from './compComm'
//import ListComponent from './listComp';
// import LifeCycleComponent from './lifecycle';
// import task from './task';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';

// console.log(Router);
// routing
/*const Home = () => (<h1>Welcome home </h1>);
const AboutUS = () => (<h1>About us </h1>);
const Topics = ({match}) => (
    <div>
        <h2>Topics</h2>
        <ul><li><Link to ="/react"> React</Link></li></ul>
        <ul><li><Link to ="/angular2">Angular2</Link></li></ul>
        <ul><li><Link to ="/jquery">JQuery</Link></li></ul>
    </div>
);

class App extends Component{
    render() {
        return(
                <Router>
                    <div>
                        <h1>Router App</h1>  
                        <ul>
                            <li><Link to ="/">Home</Link></li>
                            <li><Link to ="/aboutus">AboutUS</Link></li>
                            <li><Link to ="/topics">Topics</Link></li>        
                        </ul>
                        <hr/>
                    <Route exact path = "/" component  = {Home}/>
                    <Route path = "/aboutus" component  = {AboutUS}/>
                    <Route path = "/topics" component  = {Topics}/>
                </div>
                </Router>

        );
    }
}
*/


import { createStore } from 'redux';
//Create a redux store holding the state of ur app
// its api { subscribe, dispatch ,getState }.

//REDUCER:
const counter = (state = 0 , action) => {
    switch(action.type){
        case 'INCREMENT':
        return state+1;
        case 'DECREMENT':
        return state-1;
        default:
        return state;

    }
}


//You can use subscribe() to update the UI in response to state change
// normally u would use a view binding library ( eg React Redux) rather than subscribe() directly
//however it can also b handy to persist the current state in the

let store = createStore(counter);
store.subscribe(() =>
console.log(store.getState())
)

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});





// const root = document.getElementById('root');

// ReactDOM.render(<App/>,root);