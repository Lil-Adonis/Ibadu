import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const HeaderTwo= () => {
    return (
        <>
            <header className="header-style-1"> 
                <div className="header-topbar topbar-style-1">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-8 col-lg-8 col-sm-6">
                                <div className="header-contact text-center text-sm-start text-lg-start">
                                    <Link to="#">Address 1: 57, Unity street, Papa Olorunda, Ibafo, Ogun state.</Link>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-sm-6">
                                <div className="header-socials text-center text-lg-end">
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><Link to=""><i className="fab fa-facebook-f"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#"><i className="fab fa-pinterest"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="header-navbar navbar-sticky">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="site-logo">
                            <Link to="#">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/logoo.png`} alt="Course Thumb" class="img-fluid"/>
                            </Link>
                        </div>
            
                        <div className="offcanvas-icon d-block d-lg-none">
                            <Link to="#" className="nav-toggler"><i className="fal fa-bars"></i></Link> 
                        </div>
            
                      
            
                        <nav className="site-navbar ms-auto">
                            <Nav/>
            
                            <Link to="#" className="nav-close"><i className="fal fa-times"></i></Link>
                        </nav>
            
                        <div className="header-btn d-none d-xl-block">
                            <Link to="/login" className="login">Login</Link>
                            <Link to="/register" className="btn btn-main-2 btn-sm-2 rounded">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default HeaderTwo;