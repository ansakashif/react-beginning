import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

//Components will be rendered based on Routing
const Home = () => (<h1>Welcome to Home</h1>);
const AboutUs = () => (<h1>AboutUs</h1>)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)



class App extends Component {
  render() {
      return (
      <div>  
              <h1>Router App</h1>
           <Router>
              <div>  
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>
           <hr/>
          
                <Route exact path="/" component={Home} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/topics" component={Topics}/>      
            </div>          
       </Router>    
      </div>        
    );
  }
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/////////////////

App 

import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class FoodApp extends Component{
    state = {
        counter: 1,
        gists:null
    }
    clickMe = this.clickMe.bind(this);
    clickMe(event) {
        console.log(this.state.gists);
    }
 componentDidMount() {
    fetch('https://api.github.com/gists')
      .then(res => res.json())
      .then(gists => {
        this.setState({ gists })
      })
  }

    
 render() {
    const { gists } = this.state;
        return (
            <Router>
                <div>
                <ul className="container">        
               {gists ? (
               gists.map((gist, index) => (
                <li  key={gist.id}>
                
                 <p><Link to={`/g/${gist.id}`}>
                    {gist.description || '[no description]'}
                  </Link></p>
                </li>
                            
                        ))
              ) : (
                <div>Loading...</div>
                   )}
                </ul>            
               <div>
                <Route extact={true} path="/" render={()=><h1>Welcome</h1>} />    
                <Route path="/g/:gistId" render={({ match }) => {
                    console.log(match.params.gistId);
                    const gist = gists && gists.find(g => g.id === match.params.gistId)    
                    console.log(gist);
                    return (<div>
                       <h1>{JSON.stringify(gist)}</h1>
                   
                    </div>)
        
                }}/>    
                        
               </div>    

            </div> 
            </Router>
           
    )
     
    }
}