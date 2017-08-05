import React , {Component} from 'react';
import ReactDOM from 'react-dom';

class LifeCycleComponent extends Component {
    constructor() {
        super();
        console.log('Constructor called');
        this.state = { heroes: [] };

    }
    componentWillMount(){
        console.log('Comp mounts');
    }
    render() {
        const listItem = this.state.HEROES.map((hero) => (
        <li key = {hero.id.toString()}>
            <span>{hero.id}</span>{hero.name}</li>
    ));

        console.log('render called');
        return(
            <div>
                Comp Life cycles
                <ul>listItem</ul>
            </div>
        )
    }
    componentDidMount() {
        console.log('Comp mounted');
        this.getHeroes();
    }
    getHeroes() {
        fetch('http://localhost:8081/api/sapient/heroes')
        .then((res) => {
            return res.json();
        })
        .then((res) =>{
            this.setState({heroes: res})
        });
    }

    //update

    componentWillReceiveProps(nextProp) {
        console.log('Component received props');

    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate called');
        true;//If false ui wont change;render wont b called again
    }
}

export default LifeCycleComponent;