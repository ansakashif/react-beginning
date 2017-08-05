import React, {
    Component
} from 'react';

export class ParentComponent extends Component{
    constructor() {
        super();
          this.state ={name:'windStorm'}
          this.updateHeroName = this.updateHeroName.bind(this);
    }
      updateHeroName(event) {
        this.setState({ name: event.target.value });
    }
      render() {
        return (
            <div>
                <LifeCycleComponent name={this.state.name} />
                <input type="text" onChange={this.updateHeroName} />
            </div>)
    }
}


class LifeCycleComponent extends Component {
    //Mount phase
    constructor() {
        super();
        console.log('Constructor is called.');
        this.state = { heroes: [],rank: 0, rating: 0 };
        //Event Binding
        //Increment method is attach with Event Object
        this.incrementRank = this.incrementRank.bind(this);
    }

    componentWillMount() {
        console.log('Component Will Mount')
    }
     incrementRank(event) {
        this.setState({ rank: this.state.rank + 1 });
    }
    render() {
        console.log('render is called');
       const listItem = this.state.heroes.map((hero) => (
        <li  key={hero.id.toString()}>
            <span>{hero.id}</span>{hero.name}
        </li>)
    ); 

        return ( <div>
              Component Life Cylcles.
            
              <ul>{listItem}</ul>  
              <h1>Props from Parent {this.props.name}</h1> 
               <p>Your Rank is {this.state.rank}</p>

              <input onClick={this.incrementRank} type="button" value="IncrementRank" />


        </div>
        
        );
        
    }
     componentDidMount() {
         console.log('Component Did Mount!');
         this.getHeroes();
    }            

    getHeroes() {
        fetch('http://localhost:8081/api/sapient/heroes')
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                this.setState({ heroes: res });
            });
    }
   //update
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps is called',nextProps);
    } 
    shouldComponentUpdate() {
        console.log('Component should update');
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component will update!',nextProps,nextState);
    }
    //render render()
    componentDidUpdate() {
        console.log('Component did update');
    }

}