import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import axios from 'axios'

//components
import Home from './components/layout/Home'
import NavBar from './components/layout/NavBar'
import Artist from './components/artist/Artist'
import Producer from './components/producer/Producer'
import ArtistSignup from './components/artist/ArtistSignup'
import ArtistLogin from './components/artist/ArtistLogin'
import ArtistUpload from './components/artist/ArtistUpload'
import ProducerSignup from './components/signup/ProducerSignup'
import Beats from './components/audio/Beats'

//css
import './css/style.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      artist: {}
    };
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
      artist: {}
    })
  }

  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
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
    )
  }
}

export default App