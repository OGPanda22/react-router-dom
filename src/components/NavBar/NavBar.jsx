import { Link } from 'react-router';

const NavBar = () => {
    return (
        <nav>
            <ul>
                {/* A new link to our home page */}
                <li>
                    <Link to='/'>Home</Link>
                </li>
                {/* A new link to our pokemon list page */}
                <li>
                    <Link to='/pokemon'>Pokemon</Link>
                </li>
                {/* A new link to our pokemon form page */}
                <li>
                    <Link to="/pokemon/new">New Pokemon</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;