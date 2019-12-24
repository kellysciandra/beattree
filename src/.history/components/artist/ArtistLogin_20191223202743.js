import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class ArtistLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errors: ''
        }
    }
}