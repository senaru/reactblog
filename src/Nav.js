import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (

    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/articles">Articles</Link>
            </li>
        </ul>
    </nav>

);

export default Nav;