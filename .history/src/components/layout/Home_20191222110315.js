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
                
                   <div className='container-1'>
                    </div> 
                    
                    <div className='container-1'>
                    </div> <br/>
                    
                    <div className='container-1'>
                    </div>  <br/>
                    
                    <div className='container-1'>
                    </div>   <br></br>
                  
                    <div className='container-2'>
                    </div> 
                    
                    <div className='container-2'>
                    </div> <br/>

                    <div className='container-2'>
                    </div><br/>
             </div>
         

        )
    }
}
