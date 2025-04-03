import '../css/gallery.css';
import { Data } from "../Datas/GalleyData";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
    const [file, setFile] = useState(null); 
    const titleText = "gallery"
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
    return (
        <motion.div
        initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{duration:1, delay:.3}}
        className='galleryCont'>
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
            <div className='imagesCont'>
                    {
                        Data.map((fileData, index) => (
                            <div 
                                className='img' 
                                key={index}
                                onClick={() => setFile(fileData)}
                            >
                                <img src={fileData.img} alt='img' />
                            </div>
                        ))
                    }
            </div>


            {file && (
                <div 
                    className='popup' 
                    onClick={() => setFile(null)} 
                >
                        <img src={file.img} alt='popup' />
                </div>
            )}
        </motion.div>
    );
}
