import React, { Component }from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom'
import  { fetchArtist } from './actions/artistActions'

import Home from './components/layout/Home'
import NavBar from './components/layout/NavBar'
import MessageBoard from './components/artist/MessageBoard'
import FavoritesBoard from './components/artist/FavoritesBoard'
import ArtistLogin from './components/artist/ArtistLogin'
import ArtistSignup from './components/artist/ArtistSignup'
import ArtistEdit from './components/artist/ArtistEdit'
import Artist from './components/artist/Artist'
import history from './history'
//css
import './css/style.scss'


class App extends Component {

  componentDidMount() {
    this.props.fetchArtist()
  }

  render() {   
    if (!this.props.loggedIn && !this.props.authError) history.push('/')
    return (
      <div>
         <Router history={history}>
         <NavBar artist={this.props.artist} loggedIn={this.props.loggedIn}/>
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/artist" exact component={Artist} />
          <Route path="/artist/ArtistLogin" exact component={ArtistLogin} />
          <Route path="/artist/ArtistSignup" exact component={ArtistSignup} />  
          <Route path="/artist/ArtistEdit" exact component={ArtistEdit} /> 
          <Route component={MessageBoard}/>
          <Route component={FavoritesBoard}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => { 
  return {
    artist: state.artist.artist,
    messages: state.artist.messages,
    loggedIn: state.artist.loggedIn,
    authError: state.artist.authError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: () => dispatch(fetchArtist()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)