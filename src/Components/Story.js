import '../css/story.css';
import Back from '../assets/story/back.mp4'
import { motion } from 'framer-motion';
export default function Story(){
    return(
        <motion.div
        initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{duration:1, delay:.3}}
         className='storyCont'>
            <video src={Back} autoPlay={true} loop  muted   />
            <div className='paraCont'>
                <div className='paras'>
                    <p>
                    About a decade ago, "gates" began to open and connect this world to different dimensions.
                    </p>
                    <p>
                    "Awakened Beings" started to appear among ordinary citizens.
                    </p>
                    <p>
                    These "Awakened Beings" are the only ones strong enough to fight the monsters in the dungeons beyond each gate.
                    </p>
                    <p>
                    They are called "hunters."
                    </p>
                    <p>
                    However, not all hunters are created equally.
                    </p>
                    <p>
                    One E-Rank hunter they call "The Weakest Hunter of All Mankind" struggles to stay alive, even in the lowest-level dungeons.
                    </p>
                    <p>
                    His name is Sung Jinwoo.
                    </p>
                    <p>
                    With almost nothing to his name, he braves the dungeons to support his family and barely makes enough to get by.
                    </p>
                    <p>
                    At least until he finds himself in a deadly "Double Dungeon," hidden inside a lowly D-Rank gate.
                    </p>
                    <p>
                    Believing it's the end, he accepts the inevitable...
                    </p>
                    <p>
                    ...But awakens to discover new and strange abilities.
                    </p>
                    <p>
                    A quest window, like one from a video game- only visible to him!
                    </p>
                    <p>
                    And with it, a secret means of "Leveling Up!"
                    </p>
                    <p>
                    He now seeks to "level up" by hunting monsters and completing these quests...
                    </p>
                    <p>
                    ...that can only be done solo!
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
