import React , {Component} from 'react';
import ReactDOM from 'react-dom';

//Child Component -Rank -Stateless Components

const Rank = (props) => (
    <div>
        <p> {props.name}rank is {props.heroRank}</p>
        <input type = "text" onChange = { props.updateHeroName}/>
    </div>
)
class Hero extends React.Component {
    constructor(props){
        super(props);
    this.state = { rank : 0, rating : 0};

//Event Binding
//Increment methid is attatch with Event Object
    this.incrementRank = this.incrementRank.bind(this);
    this.updateHeroName = this.updateHeroName.bind(this);
}
incrementRank(event) { 
    console.log(event);
    this.setState({ rank: this.state.rank + 1});
}

updateHeroName(event) {
    console.log('Parent is called');
    this.setState({
        name: event.target.value
    });
}

render() {
    console.log('Render is called');
    return(
        <div><h1>Hero {this.state.name}</h1>
        <Rank updateHeroName = {this.updateHeroName } heroRank = {this.state.rank}/>
        <p>Our rank is {this.state.rank}</p>
        <input onClick = {this.incrementRank} type = "button" value = "incrementRank" />
        </div>
    )
}
}
export default Hero;