import React from 'react'
import CardIcons from "./CardIcons";
import "./CardItem.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const CardItem = (props) => {
    const paragraphStyle = {
        fontSize: "13px", // Set the font size to your desired value
        lineHeight: "1.5", // Optional: Set the line height if needed
        textAlign: 'center'
      };
    const navigate = useNavigate();
    const handleLearnMoreClick = () => {
    // Navigate to the URL specified in the "links" component
    navigate(props.item.links[0].url);
    };
    const linkStyles = {
        color: '#007bff', /* Set the link color */
        textDecoration: 'underline', /* Add underline to mimic a link */
        cursor: 'pointer', /* Change cursor to pointer on hover */
      };
    
      const linkHoverStyles = {
        color: '#0056b3', /* Change link color on hover */
      };
      const [hovering, setHovering] = useState(false);

    return (

        <div className={"card"} key={props.item.id}>
            {/* <a style={{display: "flex"}}
               href={props.item.links[0].url}
               target={"_blank"}
               rel={"noopener noreferrer"}> */}
            <div style={{backgroundImage: "url('"+props.item.image+"')"}} className="card__img" alt={props.item.title}/>
            {/* </a> */}
            <div className={"card__body"}>
                <h2 className={"card__title"}><strong>{props.item.title}</strong></h2>
                <p style={paragraphStyle}>
                    {/* <a  href={props.item.links[0].url}
                        // target={"_blank"}
                        rel={"noopener noreferrer"}> */}
                    {/* <a onClick={handleLearnMoreClick}> */}
                    <a
                        onClick={handleLearnMoreClick}
                        style={{ ...linkStyles, ...(hovering && linkHoverStyles) }}
                    >
                        Click here to learn more..
                    </a>
                </p>
                <p className={"card__description"}>{props.item.description}</p>
                <hr className={"card__line"}/>
                <CardIcons item={props.item}/>
            </div>
        </div>


    );
}

export default CardItem