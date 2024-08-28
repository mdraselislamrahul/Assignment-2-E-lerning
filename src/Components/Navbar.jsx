import React from 'react';
import img1 from "./Navbar/Image/logo.png"
import img2 from "./Navbar/Image/call.png"
import "./Navbar/Navbar.css"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from 'react';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const [manus, setManu] = useState(false)
    const handleManu = () => {
        setManu(!manus)
    }
    return (
        <div className='nav'>
            <div className='icon'>
                <button onClick={handleManu}>
                    {
                        manus ? <ImCross /> : <FaBars />
                    }
                </button>

            </div>

            <div className='flex items-center justify-between px-10 navber'>

                <div className='image'>
                    <img src={img1} alt="" />
                </div>
                <div className={`manu ${manus ? "nonmanu" : ""}`}>
                    <ul>
                        <li><NavLink to="/"
                            style={({ isActive, }) => {
                                return {

                                    color: isActive ? "red" : "",
                                    textDecoration: isActive ? "underline" : ""

                                };
                            }}
                        >Home</NavLink></li>
                        <li><NavLink to="/allfoods"
                            style={({ isActive, }) => {
                                return {

                                    color: isActive ? "red" : "",
                                    textDecoration: isActive ? "underline" : ""

                                };
                            }}
                        >All Foods</NavLink></li>
                        <li><NavLink to="/addfoods"
                            style={({ isActive, }) => {
                                return {

                                    color: isActive ? "red" : "",
                                    textDecoration: isActive ? "underline" : ""

                                };
                            }}
                        >Add Food</NavLink></li>
                        <li><NavLink to="/myorder"
                            style={({ isActive, }) => {
                                return {

                                    color: isActive ? "red" : "",
                                    textDecoration: isActive ? "underline" : ""

                                };
                            }}
                        >My Order</NavLink></li>
                        <li><NavLink to="/service"
                            style={({ isActive, }) => {
                                return {

                                    color: isActive ? "red" : "",
                                    textDecoration: isActive ? "underline" : ""

                                };
                            }}
                        >Services</NavLink></li>
                        <li><NavLink to="/about"
                            style={({ isActive, }) => {
                                return {

                                    color: isActive ? "red" : "",
                                    textDecoration: isActive ? "underline" : ""

                                };
                            }}
                        >About Us</NavLink></li>
                        <li><NavLink to="/contact"
                            style={({ isActive, }) => {
                                return {

                                    color: isActive ? "red" : "",
                                    textDecoration: isActive ? "underline" : ""

                                };
                            }}
                        >Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className=''>
                    <div className='flex justify-center gap-3 contact'>
                        <img className='h-10' src={img2} alt="" />

                        <button className='px-5 text-white bg-red-900 rounded-md'>Log In</button>
                    </div>
                    <h4 className='text-lg font-bold text-red-900 md:mt-3 text'>+880 123 456 789</h4>
                </div>
            </div>
        </div>
    );
};

export default Navbar;