import '../css/home.css';
import logo from "../assets/main/logo.webp"
import { Data } from "../Datas/HomeData.js"
import About from "../Components/About.js"
import Contact from "../Components/Contact.js"
import { delay, motion } from "framer-motion";

// import Footer from './Footer.js';

    export default function Home(){


    const accVariantsDiv ={
        hidden:{
            y: 0
        },
        visible:{
            y: 0,
            transition:{
                delay: 2,
                staggerChildren: .5
            },
        },
    }
    const accVariants ={
        hidden:{
            y: 200
        },
        visible:{
            y: 0
        }
    }

    return(
        <motion.div className="homePage">


            <motion.div
            initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{duration:1, delay:.3}}
            className='home' >


            <div className='homeContent'>
            <motion.h1
            initial={{
                opacity: 0,
                scale:[1,1,1]
            }}
            animate={{
                opacity: 1,
                scale:[1,1.2,1]
            }}
            transition={{
                delay:2
            }}
            >game on a whole new level</motion.h1>
           

            <motion.img
            initial={{x:-450}}
            animate={{x:0}}
            transition={{
                duration: 5 ,
                delay:2,
                type:"spring",
                stiffness: 120 ,
                mass: .5,
                damping: 5
                            }}
            src={logo} alt='back'/>

            <motion.div
            variants={accVariantsDiv}
            initial="hidden"
            animate="visible"
            className='accs'>
            <motion.a
            variants={accVariants}
            target='blank' href="https://www.facebook.com/profile.php?id=100083281736623&mibextid=ZbWKwL">
                <i class="fa-brands fa-facebook"></i>
                </motion.a>
            <motion.a
            variants={accVariants}
            target='blank' href="https://www.linkedin.com/in/samer-mohamed-5b2586280">
                <i class="fa-brands fa-linkedin"></i>
                </motion.a>
            <motion.a
            variants={accVariants}
            target='blank' href="https://api.whatsapp.com/qr/DSRQF7O6GN4JL1?autoload=1&app_absent=0">
                <i class="fa-brands fa-whatsapp"></i>
                </motion.a>
            <motion.a
            variants={accVariants}
            target='blank' href="https://github.com/SamerMo11">
                <i class="fa-brands fa-github"></i>
                </motion.a>
            <motion.a
            variants={accVariants}
            target='blank' href="https://www.youtube.com/@Samer-Mohamed-96">
                <i class="fa-brands fa-youtube"></i>
                </motion.a>
            </motion.div>

            </div>





            </motion.div>

            <div className='section1'>

            {Data.map((data,index)=>(
            <motion.a
            transition={{
                duration: 2,
                type:"spring",

            }}
            initial={{y:400 , opacity:0}}
                whileInView={{y:0, opacity:1}}
            href={data.href} key={index}>
                <img src={data.src} alt='img'/>
                <p>{data.title}</p>
                </motion.a>
            ))}
            
            </div>
            <About />
            <Contact />
            {/* <Footer /> */}
        </motion.div>
    )
}