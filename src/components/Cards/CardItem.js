import React from 'react'
import CardIcons from "./CardIcons";
import "./CardItem.css"
import { useNavigate } from 'react-router-dom';
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
                    <a onClick={handleLearnMoreClick}>
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