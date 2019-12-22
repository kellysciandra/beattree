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
                <h1 className= ""> 
                BeatTree
                </h1>
                <div>
        <NavLink to="/signup/artist" variant="flat" size="sm" block>
        Artist Signup
        </NavLink><br/>
        <NavLink to="/signup/producer" variant="flat" size="sm" block>
        Producer Signup
        </NavLink>
    </div>
    </div>   
    </containter>
        )
    }
}
