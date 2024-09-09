import React from 'react';
import { Outlet, Link} from 'react-router-dom';

const Layout = () => {
    return (
        <div className="Layout">
            <div className="saidBar">
                <Link to="/">menu</Link>
                <Link to="/cart">cart</Link>
            </div>
            <>
            <Outlet/>
            </>
        </div>
    );
}

export default Layout;
