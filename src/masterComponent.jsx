import React , {Component} from 'react';
import ChildComponent from './childComponent';

class MasterComponent extends Component {
    constructor(){
        super();
        this.state = { name : "Sudivya" };
    }
    render(){
        return(
            <div>
                <h1>Master Component</h1>
                {/*<ChildComponent message = "Welcome"/>*/}
                {/*<ChildComponent message = {this.props.message}/>*/}
                <ChildComponent message = {this.state.name}/>
            </div>
        )
    }
}

export default MasterComponent;