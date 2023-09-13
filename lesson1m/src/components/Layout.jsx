import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/create'>Create Post</Link>
                        </li>
                        <li>
                            <Link to='/posts'>See Posts</Link>
                        </li>
                    </ul>
            </header>

            <Outlet/>
            <footer><h1>Footer</h1></footer>
        </div>
    );
};

export default Layout;