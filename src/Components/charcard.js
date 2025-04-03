// import { motion } from "framer-motion"
export default function charcard(props) {
    return(
        <div className="char">
            <img src={props.img} alt="img" />
            <div className="paras">
            <p className="charname">{props.title}</p>
            {/* <p className="charrank">Rank: {props.rank}</p> */}
            </div>
        </div>
    )
}