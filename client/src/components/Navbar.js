import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = ()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">React - GraphQL</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-link active" to="/">Menus<span className="sr-only">(current)</span></Link>
                        <Link className="nav-link" to="/new-menu">New Menus</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navigation;