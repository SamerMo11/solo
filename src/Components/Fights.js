import '../css/fights.css';
import { useState } from "react";
import { motion } from 'framer-motion';
import img1 from "../assets/fights/1.webp"
import img2 from "../assets/fights/2.webp"
import img3 from "../assets/fights/3.webp"
import img4 from "../assets/fights/4.webp"
import img5 from "../assets/fights/5.webp"
import img6 from "../assets/fights/6.webp"
export default function Fights() {
    // ✅ مصفوفة تحتوي على روابط الفيديوهات
    const videos = [
        { 
            src: "https://www.youtube.com/embed/bQAFicg_9SY?si=LyDpgtJO4qWAza9c&mute=1&controls=0&autoplay=1", 
            title: "sung junwoo VS igris", 
            icon: img1  
        },
        { 
            src: "https://www.youtube.com/embed/uYGmdIGqUXs?si=wMeVgdABL_jBXXcb&controls=0&autoplay=1", 
            title: "sung junwoo VS bakura", 
            icon: img2
        },
        { 
            src: "https://www.youtube.com/embed/ER8bo7jvp1w?si=xxdeHBXgUA9sPvRu&controls=0&autoplay=1", 
            title: "sung junwoo VS vulcan", 
            icon: img3
        },
        { 
            src: "https://www.youtube.com/embed/dLKYFu_sMTM?si=S0EstZAlDkDl495-&controls=0&autoplay=1", 
            title: "sung junwoo VS kargalan", 
            icon: img4
        },
        { 
            src: "https://www.youtube.com/embed/l9Zd8gBZC-s?si=fJmcBqpfOJLlz4_1&controls=0&autoplay=1", 
            title: "sung junwoo VS baran", 
            icon: img5
        },
        { 
            src: "https://www.youtube.com/embed/IrHTT2IEKpE?si=QPnn_mTlBaiSMutP&controls=0&autoplay=1", 
            title: "sung junwoo VS beru", 
            icon: img6
        }
    ];
    

    // ✅ حالة لتحديد الفيديو الحالي
    const [currentVideo, setCurrentVideo] = useState(videos[0]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="fights"
        >
            {/* ✅ استبدال <video> بـ <iframe> */}
            <iframe
                src={currentVideo.src}
                title={currentVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                muted
            ></iframe>

            <p className='title'>{currentVideo.title}</p>

            <div className='videos'>
                {videos.map((video, index) => (
                    <div
                        className='video'
                        key={index}
                        onClick={() => setCurrentVideo(video)}
                    >
                        <img src={video.icon} alt='img' />
                        <span>{video.title}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
