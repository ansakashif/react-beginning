import React , {Component} from 'react';
import ReactDOM from 'react-dom';
// import { Greeter } from'./greeter';
import  Greeter from'./greeter';
import User from './userComponent';
import Placeholder from './placeholder';


console.log(Greeter);
ReactDOM.render(<Greeter/>,document.getElementById('root'));
console.log(Greeter);
ReactDOM.render(<Greeter name = "Sudivya" message = "Heya" age = "12"/>,document.getElementById('root'));


const root = document.getElementById('root');
const user =[{id :1,name:"Su"}];
ReactDOM.render(<User user ={user} />,root)
// ReactDOM.render(<User user ={ user }/>,root)

ReactDOM.render(
    <Placeholder>
    <h1>Welcome</h1>
    <h2>React JS</h2>
    </Placeholder>,root
)