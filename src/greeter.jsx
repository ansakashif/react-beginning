import React , {Component} from 'react';
import ReactDOM from 'react-dom';

//Pattern1
// export default class Greeter extends Component { //When exporting 1 class prefer export default
//     //Without component class it acts as vanilla class
//     render() {
//         return (<div><h1>ES-6 Functional Component</h1></div>);
//     }
// }

//Pattern2
class Greeter extends Component { //When exporting 1 class prefer export default
    //Without component class it acts as vanilla class
    render() {
        return (<div>
        <h1>ES-6 Functional Component</h1>
        <h2>{this.props.name}</h2>
        <h2>{this.props.message}</h2>
        <h2>{+(this.props.age)+10}</h2>
        <h2>{parseInt(this.props.age)+10}</h2>
        </div>);
    }
}
export default Greeter;