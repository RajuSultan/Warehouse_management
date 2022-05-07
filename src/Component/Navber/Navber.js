import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css';
import logo from "../../images/logo.png";
import menu from "../../images/menu.png";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Navber = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div id='nav-bar'>
            <nav className="navbar navbar-expand-lg ">

                <div className="container-fluid mx-5 my-2">
                    <Link className="navbar-brand" to="/"><img id='logo' src={logo} alt="" /></Link>
                    <button id='toggler' className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img src={menu} alt="" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-4 me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item me-3 fs-5">
                                <Link className="nav-link active text-white" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item me-3 fs-5">
                                <Link className="nav-link active text-white" aria-current="page" to="/blogs">Blogs</Link>
                            </li>
                            {
                                user ? <>
                                    <li className="nav-item me-3 fs-5">
                                        <Link className="nav-link active text-white" aria-current="page" to="/managein">Manage Inventories</Link>
                                    </li>
                                    <li className="nav-item me-3 fs-5">
                                        <Link className="nav-link active text-white" aria-current="page" to="/myitems">My Items</Link>
                                    </li>
                                </>
                                    :
                                    ""
                            }
                            <li className="nav-item dropdown me-3 fs-5">
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
                            {
                                user ? <Link onClick={() => signOut(auth)} to="/login"><button id='hover-color' className="btn btn-outline-light" >LogOut</button></Link>
                                    :

                                    < >
                                        <Link to='/login'>
                                            <button id='hover-color' className="btn btn-outline-light" >Login </button>
                                        </Link>
                                        <Link to='/resister'>
                                            < button className="btn btn-outline-light ms-3" type="">Resister</button>
                                        </Link>

                                    </>

                            }



                        </form>
                    </div>
                </div>


            </nav >
        </div >
    );
};

export default Navber;