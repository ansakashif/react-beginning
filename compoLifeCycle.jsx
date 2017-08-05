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
        this.state = { heroes: [] };
    }

    componentWillMount() {
        console.log('Component Will Mount')
    }
    render() {
      
       const listItem = this.state.heroes.map((hero) => (
        <li  key={hero.id.toString()}>
            <span>{hero.id}</span>{hero.name}
        </li>)
    ); 

        return ( <div>
              Component Life Cylcles.
              <ul>{listItem}</ul>  
               <h1>Props from Parent {this.props.name}</h1> 

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

}