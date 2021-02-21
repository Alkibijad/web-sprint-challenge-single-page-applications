import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='navbar link'>
            <Link to='/'>Home </Link>
            <Link to='/pizza'> Pizza</Link>
        </div>
    )
}

export default Navbar;