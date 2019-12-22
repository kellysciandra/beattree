import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

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
                <ul>
                  <span> <div className='container-1'>▶
                    </div></span> 
                    
                    <span> <div className='container-1'>▶
                    </div></span> 
                    
                    <span> <div className='container-1'>▶
                    </div></span> 
                  
                    <span> <div className='container-2'>▶
                    </div></span> 
                    
                    <span> <div className='container-2'>▶
                    </div></span> 

                    <div className='container-2'>▶
                    </div> <br/>
                    </ul>
             </div>
         

        )
    }
}
