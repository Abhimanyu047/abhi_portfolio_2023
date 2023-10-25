import React from "react";
import ReactDOM from 'react-dom';
import "../../../src/about_me.css";
// import "./about.css"
import prof_pic from "../images/prof_pic2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import flute_img from '../images/flute_img.png';
import { faFutbol, faMusic, fas, faFilm, faPlane, faTrophy, faCertificate, faCompass } from '@fortawesome/free-solid-svg-icons'
const AboutMe = (props) => {
    const containerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // Center vertically
      };
      
      const textStyle = {
        color: "black",
        fontFamily: "Arial, sans-serif",
        fontSize: '16px',
        textAlign: "justify",
        maxWidth: "600px", // Set the maximum width for the text content
        margin: "0 auto", // Center the content horizontally
        padding: "20px", // Add padding to the content
      };
    
      const centerText = {
        color: "black",
        fontFamily: "Arial, sans-serif",
        fontSize: '22px',
        textAlign: 'center',
        fontWeight: 'bold',
        margin: '0 0 10px'
    };
      const headingStyle = {
        color: 'black', // Change the font color
        // fontStyle: 'italic', // Change the font style
        fontWeight: 'bold', // Change the font weight
        fontFamily: 'Arial, sans-serif', // Change the font family
        // alignItems: 'center', // Center vertically
        textAlign: 'center' // Center horizontally
      };
    
      const subHeadingStyle = {
        color: 'black', // Change the font color
        fontStyle: 'italic', // Change the font style
        // fontWeight: 'bold', // Change the font weight
        fontFamily: 'Arial, sans-serif', // Change the font family
        textAlign: 'center'
      };

      const centerImage = {
        textAlign: 'center',
        padding: '10px 0 0 0'
        // margin: '1px'
      };
      const leftColumnStyle = {
        // Add your desired styling for the left column here
        color: "black",
        fontFamily: "Arial, sans-serif",
        fontSize: '16px',
        textAlign: "justify",
        maxWidth: "300px",
        margin: "0 0 300px 0",
        padding: "50px"
    };
    const rightColumnStyle = {
        color: "black",
        fontFamily: "Arial, sans-serif",
        fontSize: '16px',
        textAlign: "justify",
        maxWidth: "350px",
        margin: "0 0 60px 0",
        padding: "50px"
    };
    const achievementsListStyle = {
        listStyleType: "none",
        padding: "10px",
        margin: "0",
        fontSize: "18px",
        textAlign: 'left'
    };

    const achievementsItemStyle = {
        marginBottom: "10px",
        display: "flex",
        alignItems: "left",
    };

    const hobbyListStyle = {
        listStyleType: "none",
        padding: "10px",
        margin: "0",
        fontSize: "18px",
        textAlign: 'left'
    };

    const hobbyItemStyle = {
        marginBottom: "10px",
        display: "flex",
        alignItems: "left",
    };
      
      
    return (
        <div class='app'>
        <section class="about-us">
            {/* Main "div" which is further divided into three columns */}
            <div style={containerStyle}>
                {/* Part 1: left-column */}
                <div style={leftColumnStyle}>
                    <ul style={hobbyListStyle}>
                        <li style={centerText}>
                            <span><FontAwesomeIcon />{" "}Hobbies</span>
                        </li>
                        <li style={hobbyItemStyle}>  
                            <span><FontAwesomeIcon icon={faFutbol} />{" "}Football</span>
                        </li>
                        <li style={hobbyItemStyle}>
                            <span><FontAwesomeIcon icon={faMusic} />{" "}Play Flute</span>
                        </li>
                        <li style={hobbyItemStyle}>
                            <span><FontAwesomeIcon icon={faFilm} />{" "}Movies</span>
                        </li>
                        <li style={hobbyItemStyle}>
                            <span><FontAwesomeIcon icon={faPlane} />{" "}Traveling</span>
                        </li>
                    </ul>         
                </div>
                {/* Part 2: Middle-column */}
                <div style={textStyle}>
                    <div style={centerImage}>
                        <img class = 'round-image'
                        src={prof_pic} // Replace with the actual path to your image
                        // alt="Description of the image"
                        width = 'auto' // You can set the width and height attributes as needed
                        height = "auto"
                        // border-radius = '50%' /* Makes the image round */
                        // object-fit= 'cover' /* Ensures the image fills the circular container */
                        align='center'
                        />
                    </div>
                    <h3 style={headingStyle}>Abhimanyu Sangitrao</h3>
                    <h5 style={subHeadingStyle}>Data Scientist | Machine Learning | Python Developer</h5>
                    <div style={textStyle}>
                        <p>
                            I remember my very first interaction with a computer program, back in school, when we were made to write some procedures 
                            (there was a thing called "logo" back in the early 2000s) or steps in order to make the "turtle" move up and down on the screen. 
                            I was very overwhelmed and fascinated to see the turtle follow my instructions, because, I had never done anything like that with 
                            a computer, before. 
                        </p>
                        <p>
                            As I grew up, I used to play a lot of computer games (Age of Mythology still my favorite) and had to face a lot of 
                            problems while installing those games, but, that gave me an idea about how a software product is built, how powerful 
                            operating systems are, why are there so many files, etc. and that developed my interest in software development and 
                            programming, even more. 
                        </p>
                        <p>
                            During my Bachelor's degree, I learnt a lot about programming languages, Data Structures and Algorithms, 
                            SQL, Natural Language Processing, Predictive Modelling, etc. and hence, I chose Software Industry 
                            as a career path. I have been working as a Data Scientist for over two years or so, and I have worked with some 
                            real big data sets and also, got a chance to apply my knowledge of programming and Data Analytics to build and 
                            train models that could solve some real business problems. 
                        </p>
                        <p>
                            I look forward to strengthen my skills as a Data Scientist, work on some challenging projects across business domains 
                            and try my hands on new technologies, whenever possible.
                        </p>
                    
                    </div>
                </div>
                {/* Part 3: Right-column */}
                <div style={rightColumnStyle}>
                <ul style={achievementsListStyle}>
                        <li style={centerText}>
                            <span><FontAwesomeIcon />{" "}Achievements(IBM)</span>
                        </li>
                        <li style={achievementsItemStyle}>  
                            <span><FontAwesomeIcon icon={faTrophy} />{" "}Manager Choice Award</span>
                        </li>
                        <li style={achievementsItemStyle}>
                            <span><FontAwesomeIcon icon={faTrophy} />{" "}Performance Awards</span>
                        </li>
                        <li style={achievementsItemStyle}>
                            <span><FontAwesomeIcon icon={faCertificate} />{" "}IBM Data Science Professional</span>
                        </li>
                        <li style={achievementsItemStyle}>
                            <span><FontAwesomeIcon icon={faCertificate} />{" "}Microsoft Azure Fundamentals</span>
                        </li>
                    </ul>
                    <div style={achievementsListStyle}>
                        <ul style={achievementsListStyle}>
                            <li style={centerText}>
                                <span><FontAwesomeIcon />{" "}Now Exploring</span>
                            </li>
                            <li style={achievementsItemStyle}>
                                <span><FontAwesomeIcon icon={faCompass} />{" "}NLP</span>
                            </li>
                            <li style={achievementsItemStyle}>
                                <span><FontAwesomeIcon icon={faCompass} />{" "}Azure Databricks</span>
                            </li>
                            <li style={achievementsItemStyle}>
                                <span><FontAwesomeIcon icon={faCompass} />{" "}PySpark</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </div>

    );
}

export default AboutMe;