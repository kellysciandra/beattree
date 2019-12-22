import React, { Component } from 'react'
import Beats from '../components/audio/Beats'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default class Header extends Component {
    constructor(props) {
        super(props) 

        this.state = {
    
        }
    }

    render() { console.log(this.props)
        return (
            <div>
                <h2 className= "logo"> BeatTree</h2>
                
                    <Button variant="light" className='container-1'>▶
                    </Button>
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


{/* <span> <div className='container-2'>▶
</div></span> 

<span> <div className='container-2'>▶
</div></span> 

<span> <div className='container-2'>▶
</div></span>  */}