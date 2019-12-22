import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

//components
import Home from './components/layout/Home'
import NavBar from './components/layout/NavBar'
import Artist from './components/artist/Artist'
import Signup from './components/signup/Signup'
import MusicSection from './components/MusicSection'
import ArtistSignup from './components/signup/ArtistSignup'
import ProducerSignup from './components/signup/ProducerSignup'

//css
import './css/style.scss'


const App = (props) => {
  return (
    <Router>
      <div className="main-content">
        <NavBar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signup/artist" component={ArtistSignup}/>
        <Route exact path="/signup/producer" component={ProducerSignup}/>
        <Route exact path="/artist" component={Artist}/>
        <Route exact path="/producer" component={MusicSection}/>
      </div>
    </Router>
  )
}

export default App
