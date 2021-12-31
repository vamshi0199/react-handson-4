import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styling.css'

 class Header extends Component {
    render() {
        return (
            <div className='main-div'>
                <Link to='/home' className='main-div1'>HOME</Link>
                <Link to='/student' className='main-div1'>STUDENT</Link>
                <Link to='/contact' className='main-div1'>CONTACT</Link>
            </div>
        )
    }
}

export default Header
