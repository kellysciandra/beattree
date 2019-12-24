import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// import Home from './components/layout/Home'
// import NavBar from './components/layout/NavBar'
import Artist from './components/artist/Artist'
import Producer from './components/producer/Producer'
import ArtistSignup from './components/artist/ArtistSignup'
import ArtistUpload from './components/artist/ArtistUpload'
import ProducerSignup from './components/signup/ProducerSignup'
import Beats from './components/audio/Beats'

import Homee from './components/Homee'
import Login from './components/registrations/Login'
import Signup from './components/registrations/Signup'

//css
import './css/style.scss'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      artist: {}
     };
  }
componentDidMount() {
  this.loginStatus()
}
  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
    {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }
handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      artist: data.artist
    })
  }
handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route 
              exact path='/' 
              render={props => (
              <Homee {...props} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/signup' 
              render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />

          <Route exact path="/artist/ArtistSignup" component={ArtistSignup}/>
          <Route exact path="/artist/ArtistLogin" component={ArtistLogin}/>
          <Route exact path="/signup/producer" component={ProducerSignup}/>
          <Route exact path="/artist" component={Artist}/>
          <Route exact path="/producer" component={Producer}/>
          <Route exact path="/audio/beats" component={Beats}/>
          <Route exact path='/artist/upload' component={ArtistUpload}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;




