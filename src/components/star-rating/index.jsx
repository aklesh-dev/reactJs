/*
This component represents a star rating system with a specified number of stars.
It allows users to click on stars to set a rating and hover over stars to see the rating they would receive if clicked.
 */
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css';


export default function StarRating({ noOfStars = 5 }){

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick (getCurrentIndex){
        // console.log("Getting index num on click: ",getCurrentIndex);
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex){
        // console.log("Getting index num on Mouse enter: ",getCurrentIndex);
        setHover(getCurrentIndex);
    }

    function handleMouseLeave(getCurrentIndex){
        // console.log("Getting index num on mouse leaving: ",getCurrentIndex);
        setHover(rating);
    }

    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_,index)=> {
                    index += 1;

                    return <FaStar
                    key= {index}
                    className={index <= (hover ||  rating) ? `filled` : `empty`}
                    onClick={()=>handleClick(index)}
                    onMouseMove={()=>handleMouseEnter(index)}
                    onMouseLeave={()=>handleMouseLeave()}
                    size={40}
                    />
                })
            }
        </div>
    )
}