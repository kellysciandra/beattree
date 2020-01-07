import React, { Component }from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import axios from 'axios'
// import { connect } from 'react-redux';


//components
import Home from './components/layout/Home'

import Artist from './components/artist/Artist'
import ArtistLogin from './components/artist/ArtistLogin'
import Producer from './components/producer/Producer'
import ArtistSignup from './components/artist/ArtistSignup'
import ArtistUpload from './components/artist/ArtistUpload'
import ArtistBeats from './components/artist/ArtistBeats'
import ProducerSignup from './components/signup/ProducerSignup'
import Beats from './components/audio/Beats'

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
     this.handleAuth = this.handleAuth.bind(this)
     this.handleLogout = this.handleLogout.bind(this)
   
  }



  loginStatus = () => { 
    axios.get('http://localhost:3001/logged_in', { withCredentials: true })
    .then(response => { 
      if (
        response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN"
      ) {
        this.setState({
          loggedInStatus: "LOGGED_IN",
          artist: response.data.artist
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

  handleAuth = (data) =>{ 
    this.handleLogin(data)
}


  handleLogin = (data) => { 
    this.setState ({
      loggedInStatus: "LOGGED_IN",
      artist: data
    })
  }

  handleLogout = () => {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      artist: {}
    })
  }


  render() { 
    return (
      <div>
         <BrowserRouter>
          <Switch>
            <Route exact path="/"
                   render={props => (
                   <Home {...props} loggedInStatus={this.state.loggedInStatus}
                   handleLogin={this.handleLogin} handleLogout={this.handleLogout}
                   />
                    )}/>
            <Route exact path="/artist/ArtistSignup"
                    render={props => (
                    <ArtistSignup {...props} handleLogin={this.handleLogin}
                    loggedInStatus={this.state.isLoggedIn}
                    handleAuth={this.handleAuth} handleLogout={this.handleLogout} />
                    )}/>
            <Route exact path="/artist/ArtistLogin" 
                    render={props => (
                      <ArtistLogin {...props} handleLogin={this.handleLogin}
                        loggedInStatus={this.state.loggedInStatus}
                        handleAuth={this.handleAuth} handleLogout={this.handleLogout}
                        />
                    )}/>
            <Route exact path='/artist' 
                    render={props => (
                      <Artist {...props} artist={this.state.artist}
                      loggedInStatus={this.state.loggedInStatus} handleLogout={this.handleLogout}/>
                    )}/>
             <Route exact path='/artist/upload'
                    render={props => (
                      <ArtistUpload {...props} artist={this.state.artist}
                      loggedInStatus={this.state.loggedInStatus} 
                      handleLogout={this.handleLogout}/>
                    )}/>
           
  
             <Route exact path="/signup/producer" component={ProducerSignup}/>
            <Route exact path="/producer" component={Producer}/>
            <Route exact path="/audio/beats" component={Beats}/>
            <Route exact path="/artist/show" component={ArtistBeats}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}




export default App