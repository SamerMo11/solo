import img from "../assets/main/contact.webp"
import '../css/contact.css';
import { motion } from "framer-motion";

export default function Contact(){
    return(
        <div className="about" id="contact">
            <motion.img
            initial={{y:150 , opacity:0}}
            // animate={{x:0}}
            transition={{
                duration: 1 ,
                type:"tween",
                }}
                whileInView={{y:0, opacity:1}}
            src={img} alt="aboutImg"/>
            <div className="aboutCont">
                <p>contact us</p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim deserunt, voluptates adipisci vitae aliquid sed esse perspiciatis mollitia facilis fuga expedita, veritatis consequatur voluptatum magnam quis voluptatem inventore possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam est sit fugiat, asperiores placeat corrupti eveniet amet.
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim deserunt, voluptates adipisci vitae aliquid sed esse perspiciatis mollitia facilis fuga expedita, veritatis consequatur voluptatum magnam quis voluptatem inventore possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam est sit fugiat, asperiores placeat corrupti eveniet amet.
                </p>
                <a href="#about">about us</a>
            </div>
        </div>
    )
}