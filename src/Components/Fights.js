import '../css/fights.css';
import video1 from "../assets/video/1.mp4"
import { Data } from "../Datas/FightsData.js"
import { useState } from "react"
import { motion } from 'framer-motion';
export default function Fights(){

        const [currentVideo, setCurrentVideo] = useState({
          mainsrc: video1,
          title: "sung junwoo VS igris"
        });

        const handleVideoClick = (video) => {
            setCurrentVideo({ mainsrc: video.src, title: video.title });
        };

        // const animation = ()=>{
        //     const title = document.querySelector(".title");
        //     if(title){
        //         title.classlist.add("active");
        //     }
        // }


    return(
        
    <motion.div
    initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{duration:1, delay:.3}}
    className="fights" >
            <video src={currentVideo.mainsrc} autoPlay={true} loop  muted   />

        <p className='title'> {currentVideo.title} </p>
        <div className='videos'>
        {Data.map((video, index) => (

        <div className='video' key={index} 
        onClick={() => { 
            handleVideoClick(video);
            // animation()
        }
        }>
            <img src={video.icon} alt='img'/>
            <span>{video.title}</span>
        </div>
        ))}
       


        </div>
        </motion.div>
    )
}