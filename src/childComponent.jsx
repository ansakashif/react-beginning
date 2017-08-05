import React , {Component} from 'react';

class ChildComponent extends Component {
    render(){
        return(
            <div>
                <h1>Child Component</h1>
                <h2>Data from child: {this.props.message}</h2>
            </div>
        )
    }
}

export default ChildComponent;