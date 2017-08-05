import React , {Component} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


const element = (<div>
                    <h1>Hello React </h1>
                </div>)   //Object BEST PRACTICE TO WRAP IN BRACKET
ReactDOM.render(element,document.getElementById('root'));//what where to insert

//2nd way of component creation
function Greeter() {
    return (
        <div>
            <h1>Welcome</h1>
        </div>
    )
}
ReactDOM.render(<Greeter/>,document.getElementById('root'));

//Using Arrow function
const Greeter = props => (<div><h1>ES-6 Functional Component1</h1></div>);
ReactDOM.render(<Greeter/>,document.getElementById('root'));

//Es-6 Class Pattern
class Greeter extends Component {
    //Without component class it acts as vanilla class
    render() {
        return (<div><h1>ES-6 Functional Component</h1></div>);
    }
}