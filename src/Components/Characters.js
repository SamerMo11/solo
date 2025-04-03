import '../css/chars.css';
import {chars} from "../Datas/CharsData"
import Charcard from "../Components/charcard"
// import { useState } from 'react';
import {  motion } from 'framer-motion';
export default function Characters() {
    const datashow = chars.map((el)=> <Charcard 
    img={el.img}
    title={el.title}
    // rank={el.rank}
    key={el.key} />)

    const titleText = "characters"
    const title ={
        hidden:{
          opacity:0,
          
        },
        visible:{
          opacity:1,
          transition:{
            // delay:.5,
            staggerChildren: .3,
          }
        }
        
      }
      const titleSpan ={
        hidden:{
            opacity:0,
        },
        visible:{
            opacity:1,

        }
        
      }
    return(
        <motion.div
        initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{duration:1, delay:.3}}
             className='charsCont'>
            <motion.p
            variants={title}
            initial= "hidden"
            animate= "visible"
            >   
            {titleText.split("").map((char,index)=>(
                <motion.span
                variants={titleSpan}
                key={index}
                >
                    {char}
                </motion.span>
            ))}

            </motion.p>
            <div className='chars'>
                {datashow}
            </div>
        </motion.div>
    )
}