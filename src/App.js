import React, { Component }from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom'
import  { fetchArtist } from './actions/artistActions'

import Home from './components/layout/Home'
import NavBar from './components/layout/NavBar'
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
    if (!this.props.loggedIn) history.push('/')
    return (
      <div>
         <Router history={history}>
         <NavBar history={history}/>
          <Switch>
          <Route exact path="/artist" component={Artist} />
          <Route exact path="/" component={Home}/>
          <Route exact path="/artist/ArtistLogin" component={ArtistLogin} />
          <Route exact path="/artist/ArtistSignup" component={ArtistSignup} />  
          <Route exact path="/artist/ArtistEdit" component={ArtistEdit} />  

          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: () => dispatch(fetchArtist()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)