import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-sm navbar-light bg-light">

            <a class="navbar-brand" href="#">Users App</a>

            <ul class="navbar-nav">
                <li class="nav-item">
                    <NavLink class="nav-link" to="/">Home<span class="sr-only">(current)</span></NavLink>
                </li>

                <li class="nav-item">
                    <NavLink class="nav-link" to="/add-user">Add User</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;