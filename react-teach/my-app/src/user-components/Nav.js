import React, { Component } from 'react';


class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">E动国际</a>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">用户管理</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">图书管理</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;
