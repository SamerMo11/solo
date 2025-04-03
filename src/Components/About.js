import img from "../assets/main/about.webp"
import '../css/about.css';
import { motion } from "framer-motion";
export default function About(){

    const paras = {
        hidden: {
            opacity:0
        },
        visible : {
            opacity:1
        }
    }

    return(
        <div className="about" id="about">
            <motion.img
                        initial={{y:150 , opacity:0}}
                        transition={{
                            duration: 1 ,
                            type:"tween",
                            }}
                            whileInView={{y:0, opacity:1}}
            src={img} alt="aboutImg"/>
            <div className="aboutCont">
                <motion.p

                whileInView={{opacity:1}}
                >about us</motion.p>
                <motion.p
                whileInView={{opacity:1}}
                
                >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim deserunt, voluptates adipisci vitae aliquid sed esse perspiciatis mollitia facilis fuga expedita, veritatis consequatur voluptatum magnam quis voluptatem inventore possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam est sit fugiat, asperiores placeat corrupti eveniet amet.
                </motion.p>
                <motion.p

                whileInView={{opacity:1}}
                >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim deserunt, voluptates adipisci vitae aliquid sed esse perspiciatis mollitia facilis fuga expedita, veritatis consequatur voluptatum magnam quis voluptatem inventore possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam est sit fugiat, asperiores placeat corrupti eveniet amet.
                </motion.p>
                <motion.a
                
                href="#contact">contact us</motion.a>
            </div>
        </div>
    )
}