import React, { Component }from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom'

import { connect } from 'react-redux';
import  { fetchArtist } from './actions/artistActions'

import Home from './components/layout/Home'
import ArtistLogin from './components/artist/ArtistLogin'
import ArtistSignup from './components/artist/ArtistSignup'
import Artist from './components/artist/Artist'
//css
import './css/style.scss'


class App extends Component {


  componentDidMount() {
    this.props.fetchArtist()
  }


  render() { 
    return (
      <div>
         <BrowserRouter>
          <Switch>
          <Route exact path="/" component={Home} artist={this.props.artist} loggedIn={this.props.loggedIn} />
          <Route exact path="/artist/ArtistLogin" artist={this.props.artist} component={ArtistLogin} />
          <Route exact path="/artist/ArtistSignup" component={ArtistSignup} />
          <Route exact path="/artist" component={Artist} artist={this.props.artist} loggedIn={this.props.loggedIn} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


const mapStateToProps = (state)  => {
  return {
    artist: state.artist,
    loggedIn: state.loggedIn
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: () => dispatch(fetchArtist())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)