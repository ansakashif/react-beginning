import React , {Component} from 'react';

  const HEROES = [
        {id: 11, name :"Sudivya"},
        {id: 12, name:"Sud"},
        {id: 13, name:"Sivya"},
        {id: 14, name:"Suya"},
        {id: 16, name:"Su"},
        {id: 15, name:"divya"}                                
    ];

class ListComponent extends Component {
    render() {
    const listItem = HEROES.map((hero) => (
        <li onClick={() => { this.onSelect(hero)}} key = {hero.id.toString()}>
            <span className = "badge">{hero.id}</span>{hero.name}</li>
    ));

    return(
        <div>
                <ul>{listItem}</ul>
        </div>
    );
}
  
}

export default ListComponent;