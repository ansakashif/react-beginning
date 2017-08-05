import React , {Component} from 'react';

class User extends Component {

    constructor() {
        super();
        this.state = { password: "ABC"};
    }
    render(){
        return(
            <div>
                <h1>User Info</h1>
                <h2>{this.props.id}</h2>
                <h2>{this.props.name}</h2>
                <h2>{this.props.user[0].id}</h2>
                <h2>{this.props.user[0].name}</h2>
                <h2>ur pass is {this.state.password}</h2>
            </div>
        )
    }
}

export default User;