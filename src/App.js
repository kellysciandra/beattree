import React, { Component }from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import  { fetchArtist } from './actions/artistActions'

import Home from './components/layout/Home'
import ArtistLogin from './components/artist/ArtistLogin'
import ArtistSignup from './components/artist/ArtistSignup'
import ArtistUpload from './components/artist/ArtistUpload'
import Artist from './components/artist/Artist'
import history from './history'
//css
import './css/style.scss'


class App extends Component {


  componentDidMount() {
    this.props.fetchArtist()
  }

  render() { 
    return (
      <div>
         <BrowserRouter history={history}>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/artist/ArtistLogin" component={ArtistLogin} />
          <Route exact path="/artist/ArtistSignup" component={ArtistSignup} />  
          <Route exact path="/artist/ArtistUpload" component={ArtistUpload} />  
          <Route exact path="/artist" component={Artist} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state)  => {
  return {
    artist: state.artist.artist,
    loggedIn: state.artist.loggedIn,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: () => dispatch(fetchArtist())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)