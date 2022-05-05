import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css';
import logo from "../../images/logo.png";
import menu from "../../images/menu.png";

const Navber = () => {
    return (
        <div id='nav-bar'>
            <nav className="navbar navbar-expand-lg ">

                <div className="container-fluid mx-5 my-2">
                    <Link className="navbar-brand" to="/"><img id='logo' src={logo} alt="" /></Link>
                    <button id='toggler' className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img src={menu} alt="" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>

                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button id='hover-color' className="btn btn-outline-light" type="submit">Login </button>
                            <button className="btn btn-outline-light ms-3" type="submit">Resister</button>
                        </form>
                    </div>
                </div>


            </nav>
        </div>
    );
};

export default Navber;