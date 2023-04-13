import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import "../src/footer.css"
const Footer = () => {
    return (
        <>
            <div className="shape">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#343a40" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,197.3C672,213,768,203,864,186.7C960,171,1056,149,1152,154.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
                </svg>
            </div>


            <footer className="footer py-3 bg-dark text-center">
                <div className="container">
                    <div className="row">
                        <div className="logo mt-md-3">
                            <img src="/public/res.jpg" className='img-fluid rounded-circle kucult' alt="logo" />
                            <p className='text-left text-white'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Veritatis, distinctio ratione natus
                                ipsum perspiciatis laboriosam odit voluptates cupiditate dolore, error iusto soluta! Quasi
                                tempora reprehenderit, doloribus soluta possimus iusto magni!
                            </p>
                            <hr className='text-light' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4  d-flex justify-content-center align-items-center mt-3">
                            <div className="copyright  text-white">
                                <p>&copy; 2023 OM3R. All right reserved</p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex">
                            <div className="links">
                                <ul className="d-flex justify-content-center align-items-lg-center mt-4">
                                    <li className="list-unstyled"> <a href="#" className="nav-link link-light">Home</a></li>
                                    <li className="list-unstyled"> <a href="#" className="nav-link link-light">About</a></li>
                                    <li className="list-unstyled"> <a href="#" className="nav-link link-light">Products</a></li>
                                    <li className="list-unstyled"> <a href="#" className="nav-link link-light">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <ul className="social d-flex justify-content-center align-content-lg-center col-4 m-auto mb-md-2">
                                <li className="list-unstyled"><a className="nav-link link-light" href="#">
                                    <FaFacebook className='social-links' size={18} />
                                </a></li>
                                <li className="list-unstyled"><a className="nav-link link-light" href="#">
                                    <FaTwitter className='social-links' size={18} />
                                </a></li>
                                <li className="list-unstyled"><a className="nav-link link-light" href="#">
                                    <FaInstagram className='social-links' size={18} />
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer