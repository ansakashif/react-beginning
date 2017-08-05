import React , {Component} from 'react';
import ReactDOM from 'react-dom';

class Hero extends React.Component {
    constructor(props){
        super(props);
    this.state = { rank : 0, rating : 0};

//Event Binding
//Increment methid is attatch with Event Object
    this.incrementRank = this.incrementRank.bind(this);
}
incrementRank(event) { 
    console.log(event);
    this.setState({ rank: this.state.rank + 1});
}
render() {
    console.log('Render is called');
    return(
        <div><h1>Hero</h1>
        <p>ur rankl is {this.state.rank}</p>
        <input onClick = {this.incrementRank} type = "button" value = "incrementRank" />
        </div>
    )
}
}
export default Hero;