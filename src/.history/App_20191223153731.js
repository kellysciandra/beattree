import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

//components
import Home from './components/layout/Home'
import NavBar from './components/layout/NavBar'
import Artist from './components/artist/ArtistMain'
import Producer from './components/producer/Producer'
import ArtistSignup from './components/artist/ArtistSignup'
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
        <Route exact path="/artist/ArtistSignup" component={ArtistSignup}/>
        <Route exact path="/signup/producer" component={ProducerSignup}/>
        <Route exact path="/artist/ArtistMain" component={ArtistMain}/>
        <Route exact path="/producer" component={Producer}/>
        <Route exact path="/audio/beats" component={Beats}/>
        <Route exact path='/artist/upload' component={ArtistUpload}/>
      </div>
    </Router>
  )
}

export default App
