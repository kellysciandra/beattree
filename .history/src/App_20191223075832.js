import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

//components
import Home from './components/layout/Home'
import NavBar from './components/layout/NavBar'
import Artist from './components/artist/Artist'
import MusicSection from './components/MusicSection'
import ArtistSignup from './components/signup/ArtistSignup'
import ArtistUpload from './components/artist/ArtistUpload'
import ProducerSignup from './components/signup/ProducerSignup'
import Beats from './components/audio/Beats'

//css
import './css/style.scss'


const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup/artist" component={ArtistSignup}/>
        <Route exact path="/signup/producer" component={ProducerSignup}/>
        <Route exact path="/artist" component={Artist}/>
        <Route exact path="/producer" component={MusicSection}/>
        <Route exact path="/audio/beats" component={Beats}/>
      </div>
    </Router>
  )
}

export default App
