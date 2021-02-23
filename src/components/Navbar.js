import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/'>Home </Link>
            <Link to='/yourCreation'> Your Pizza Art</Link>
            <Link to='/usForYou'>Our Pizza for you</Link>
        </div>
    )
}

export default Navbar;