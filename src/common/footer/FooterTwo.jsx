import React from 'react';
import { Link } from 'react-router-dom';

const FooterTwo = () => {
   
    return (
        <>
             <section className="footer footer-3 pt-250">
                <div className="footer-mid">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-sm-8 me-auto">
                                <div className="widget footer-widget mb-5 mb-lg-0">
                                    <div className="footer-logo">
                                        <img src="assets/images/logoo.png" alt="" className="img-fluid"/>
                                    </div>
                                    
                                    <p className="mt-4">CRECHE - NURSERY - PRIMARY - SECONDARY

MOTTO: Quest for Excellence</p>

                                    <div className="footer-socials mt-5">
                                        <span className="me-2">Connect :</span>
                                        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                                        <Link to="#"><i className="fab fa-pinterest"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-sm-4">
                                <div className="footer-widget mb-5 mb-lg-0">
                                    <h5 className="widget-title">Explore</h5>
                                    <ul className="list-unstyled footer-links">
                                        <li><Link to="#">About us</Link></li>
                                        <li><Link to="#">Contact us</Link></li>
                                        <li><Link to="#">Services</Link></li>
                                        <li><Link to="#">Support</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-sm-4">
                                <div className="footer-widget mb-5 mb-lg-0">
                                    <h5 className="widget-title ">Programs</h5>
                                    <ul className="list-unstyled footer-links">
                                        <li><Link to="#">SEO Business</Link></li>
                                        <li><Link to="#">Digital Marketing</Link></li>
                                        <li><Link to="#">Graphic Design</Link></li>
                                        <li><Link to="#">Social Marketing</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-sm-4">
                                <div className="footer-widget mb-5 mb-lg-0">
                                    <h5 className="widget-title">Links</h5>
                                    <ul className="list-unstyled footer-links">
                                        <li><Link to="#">News & Blogs</Link></li>
                                        <li><Link to="#">Privacy Policy</Link></li>
                                        <li><Link to="#">Support</Link></li>
                                        <li><Link to="#">Return Policy</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-sm-4">
                                <div className="footer-widget mb-5 mb-lg-0">
                                    <h5 className="widget-title">Address</h5>
                                    <ul className="list-unstyled footer-links">
                                        <li><Link to="#">+234 (0) 806 929 3980</Link></li>
                                        <li><Link to="#">support@edumel.com</Link></li>
                                        <li><Link to="#">Address 1: 57, Unity street, Papa Olorunda, Ibafo, Ogun state.</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-btm">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-sm-12 col-lg-6">
                                <p className="mb-0 copyright text-sm-center text-lg-start">Ibadu Rahman © 2023. All rights reserved. </p>
                            </div>

                            
                        </div>
                    </div>
                </div>

                <div className="fixed-btm-top">
                    <Link to="#top-header" className="js-scroll-trigger scroll-to-top"><i className="fa fa-angle-up"></i></Link>
                </div>
                
            </section>
        </>
    )
}

export default FooterTwo;