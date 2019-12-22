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
            <container>
            <div>
                <h2 className= "logo"> BeatTree</h2>
                   <span className='container-1'>
                    </span> <br/>
                    
                    <div >
                    </div> <br/>
                    
                    <div>
                    </div>   <br/>
             </div> 
            <div>       
                    <div className='container-2'>
                    </div> <br/>
                    
                    <div className='container-2'>
                    </div> <br/>

                    <div className='container-2'>
                    </div>   
             </div>
             </container>

        )
    }
}
