import React, { Component } from 'react'
import Beats from '../audio/Beats'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default class Home extends Component {
    constructor(props) {
        super(props) 

        this.state = {
    
        }
    }

    render() { 
        return (
            <div>
                <h2 className= "logo"> BeatTree</h2>
                
                    <Button onClick={console.log(this.props)} variant="light" className='container-1'>▶
                    {this.state.play ? 'Pause' : 'Play'}</Button>
                    <Button variant="light"  className='container-1'>▶
                    </Button>
                    <Button variant="light"  className='container-1'>▶
                    </Button>
                    <Button variant="light"  className='container-2'>▶
                    </Button>
                    <Button variant="light"  className='container-2'>▶
                    </Button>
                    <Button variant="light"  className='container-2'>▶
                    </Button>
                  
         
             </div>
         

        )
    }
}
