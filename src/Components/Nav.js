import React from "react";
import { Link } from "react-router-dom";
import '../css/nav.css';
import logo from "../assets/main/logo.webp"
import { motion } from "framer-motion";

function Nav() {

  const nav ={
    hidden:{
      opacity:0,

    },
    visible:{
      opacity:1,
      transition:{
        duration:2,
        staggerChildren: .5
      }

    }
    
  }
  const links ={
    hidden:{
      opacity:0,
      y:-50

    },
    visible:{
      opacity:1,
      y:0
    }
    
  }

  return (
    <nav>
      <div className="img">
      <img src={logo} alt="logoimg" />
      </div>
      <motion.ul
          variants={nav}
          initial="hidden"
          animate="visible"
      className="links">
      <motion.li variants={links}>
        <Link to="/">home</Link>
        </motion.li>
      <motion.li
          variants={links}>
        <Link to="/characters">characters</Link>
        </motion.li>
      <motion.li
          variants={links}>
        <Link to="/gallery">gallery</Link>
        </motion.li>
      <motion.li
          variants={links}>
        <Link to="/fights">fights</Link>
        </motion.li>
      <motion.li
          variants={links}>
        <Link to="/story">story</Link>
        </motion.li>
      </motion.ul>
    </nav>
  );
}

export default Nav;