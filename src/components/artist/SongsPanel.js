import React, { Component } from 'react'

export default class SongsPanel extends Component {
    render() {
        const beatItems = this.props.beats.map(beat => (
            <div className="" key={beat.id}>
                <div className="">
                    <a href={`#${beat.id}`} onClick={(e)=>this.props.handleAddToCart(e, beat)}>
                       
                        <h6 class="card-header">{beat.title}</h6>                        
                    </a>
                    <h6>{beat.description}</h6>
                  
                </div>
            </div>
        ));

        return (
            <div className="row">
                {beatItems}
            </div>
        )
    }
}
