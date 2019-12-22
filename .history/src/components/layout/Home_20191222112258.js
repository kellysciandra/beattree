import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default class Header extends Component {
    constructor(props) {
        super(props) 

        this.state = {
    
        }
    }

    render() {
        return (
            <div>
                <h2 className= "logo"> BeatTree</h2>
                
                  <span><Button className='container-1'>▶
                    </Button></span>
                    <Button className='container-1'>▶
                    </Button>
                    <Button className='container-1'>▶
                    </Button>
                    <Button className='container-2'>▶
                    </Button>
                    <Button className='container-2'>▶
                    </Button>
                    <Button className='container-2'>▶
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