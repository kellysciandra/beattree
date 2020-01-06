import React, { Component }from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import axios from 'axios'
// import { connect } from 'react-redux';


//components
import Home from './components/layout/Home'
import NavBar from './components/layout/NavBar'
import Artist from './components/artist/Artist'
// import ArtistLogin from './components/artist/ArtistLogin'
// import Producer from './components/producer/Producer'
// import ArtistSignup from './components/artist/ArtistSignup'
// import ArtistUpload from './components/artist/ArtistUpload'
// import ArtistBeats from './components/artist/ArtistBeats'
// import ProducerSignup from './components/signup/ProducerSignup'
// import Beats from './components/audio/Beats'

//css
import './css/style.scss'


class App extends Component {
  constructor() {
    super();

    this.state = { 
      loggedInStatus: "NOT_LOGGED_IN",
      artist: {}
     };

     this.handleLogin = this.handleLogin.bind(this)
   
  }



  loginStatus = () => { 
    axios.get('http://localhost:3001/logged_in', { withCredentials: true })
    .then(response => { console.log(response, response.data.logged_in, this.state.loggedInStatus)
      if (
        response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN"
      ) {
        this.setState({
          loggedInStatus: "LOGGED_IN",
          artist: response.data
        });
      } else if (
        !response.data.logged_in & (this.state.loggedInStatus === "LOGGED_IN")
      ) {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN", 
          artist: {}
        })
      }
    }).catch(error => {
      console.log(error)
    })
  }

  componentDidMount() {
    this.loginStatus();
  }


  handleLogin = (data) => { console.log(data)
    this.setState ({
      loggedInStatus: "LOGGED_IN",
      artist: data
    })
    this.loginStatus();
  }


  render() { 
    return (
      <div>
         <BrowserRouter>
          <Switch>
            <Route exact path="/"
                   render={props => (
                   <Home {...props} loggedInStatus={this.state.loggedInStatus}
                   handleLogin={this.handleLogin}
                   />
                    )}/>
            {/* <Route exact path="/artist/ArtistSignup"
                    render={props => (
                    <ArtistSignup {...props} handleLogin={this.handleLogin}
                    loggedInStatus={this.state.isLoggedIn}
                    handleAuth={this.handleAuth} />
                    )}/>
            <Route exact path="/artist/ArtistLogin" 
                    render={props => (
                      <ArtistLogin {...props} handleLogin={this.handleLogin}
                        loggedInStatus={this.state.loggedInStatus}/>
                    )}/> */}
            <Route exact path='/artist' 
                    render={props => (
                      <Artist {...props} handleLogin={this.handleLogin}
                      loggedInStatus={this.state.loggedInStatus}/>
                    )}/>

            <Route exact path="/" component={NavBar} />
            {/* <Route exact path="/signup/producer" component={ProducerSignup}/>
            <Route exact path="/producer" component={Producer}/>
            <Route exact path="/audio/beats" component={Beats}/>
            <Route exact path="/artist/show" component={ArtistBeats}/>
            <Route exact path='/artist/upload' component={ArtistUpload}/> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}




export default App