import React from "react"
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    render() { return (

        <nav>
            <h1 className="h1">Hello</h1>
            <ul>
            <Link to="../App"> Log-In </Link>
            </ul>
        </nav>
    ) 
    }
}

export default NavBar