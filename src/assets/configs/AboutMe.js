import React from "react";
import ReactDOM from 'react-dom';
import "../../../src/about_me.css";
import prof_pic from "../images/prof_pic2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faMusic, fas, faFilm, faPlane, faTrophy, faCertificate, faCompass, faLanguage } from '@fortawesome/free-solid-svg-icons';

const AboutMe = (props) => {
const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
};

const textStyle = {
    color: "black",
    fontFamily: "Arial, sans-serif",
    fontSize: '16px',
    textAlign: "justify",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
};

const centerText = {
    color: "black",
    fontFamily: "Arial, sans-serif",
    fontSize: '22px',
    textAlign: 'center',
    fontWeight: 'bold'
};
const leftText = {
    color: "black",
    fontFamily: "Arial, sans-serif",
    fontSize: '22px',
    textAlign: 'left',
    fontWeight: 'bold'
};

const headingStyle = {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
};

const subHeadingStyle = {
    color: 'black',
    fontStyle: 'italic',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
};
const emailStyle = {
  color: 'black',
  fontStyle: 'italic',
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
  fontSize: '16px'
};

const centerImage = {
    textAlign: 'center',
    padding: '10px 0 0 0',
};

const columnStyle = {
    color: "black",
    fontFamily: "Arial, sans-serif",
    fontSize: '16px',
    textAlign: "justify",
    maxWidth: "350px",
    margin: "0 0 60px 0",
    padding: "50px"
};

const leftColumnStyle = {
    color: "black",
    fontFamily: "Arial, sans-serif",
    fontSize: '16px',
    textAlign: "justify",
    maxWidth: "300px",
    margin: "0 0 250px 0",
    padding: "50px"
};

const rightColumnStyle = {
    color: "black",
    fontFamily: "Arial, sans-serif",
    fontSize: '16px',
    textAlign: "justify",
    maxWidth: "350px",
    margin: "0 0 90px 0",
    padding: "50px"
};

const listStyle = {
    listStyleType: "none",
    padding: "10px",
    margin: "0",
    fontSize: "18px",
    textAlign: 'left'
};

const itemStyle = {
    marginBottom: "10px",
    display: "flex",
    alignItems: "left",
};

  return (
    <div className='app'>
      <section className="about-us">
        <div style={containerStyle}>
          {/* Left Column */}
          <div style={leftColumnStyle}>
            <ul style={listStyle}>
              <li style={centerText}>
                <span><FontAwesomeIcon />{" "}Hobbies</span>
              </li>
              <li style={itemStyle}>
                <span><FontAwesomeIcon icon={faFutbol} />{" "}Football</span>
              </li>
              <li style={itemStyle}>
                <span><FontAwesomeIcon icon={faMusic} />{" "}Play Flute</span>
              </li>
              <li style={itemStyle}>
                <span><FontAwesomeIcon icon={faFilm} />{" "}Movies</span>
              </li>
              <li style={itemStyle}>
                <span><FontAwesomeIcon icon={faPlane} />{" "}Traveling</span>
              </li>
              <li><br></br></li> {/* Blank list element to add white space*/}
              <li style={centerText}>
                <span><FontAwesomeIcon />{" "}Languages</span>
              </li>
              <li style={itemStyle}>
                <span><FontAwesomeIcon icon={faLanguage} />{" "}English</span>
              </li>
              <li style={itemStyle}>
                <span><FontAwesomeIcon icon={faLanguage} />{" "}Hindi</span>
              </li>
              <li style={itemStyle}>
                <span><FontAwesomeIcon icon={faLanguage} />{" "}Marathi</span>
              </li>
            </ul>
          </div>

          {/* Middle Column */}
          <div style={textStyle}>
            <div style={centerImage}>
              <img className='round-image' src={prof_pic} width='auto' height='auto' alt="Profile" />
            </div>
            <h3 style={headingStyle}>Abhimanyu Sangitrao</h3>
            <h5 style={subHeadingStyle}>
              <h7 style={emailStyle}><u>abhi.workk47@gmail.com</u></h7>
              <br></br>
              Data Scientist | Machine Learning | Python Developer
            </h5>
            
            <div style={textStyle}>
            <p>
                I remember my very <b>first interaction with a computer program</b>, back in school, when we were made to write some procedures 
                (there was a thing called "logo" back in the early 2000s) or steps in order to make the "turtle" move up and down on the screen. 
                I was very overwhelmed and fascinated to see the turtle follow my instructions. As I grew up, I used to play a lot of <b>computer games</b> (Age of Mythology still my favorite) and had to face a lot of 
                problems while installing those games, but, that gave me an idea about how a software product is built, how powerful 
                operating systems are, why are there so many files, etc. and that developed my <b>interest in software development</b> and 
                programming, even more. 
            </p>
                

            <p>
                During my <b>Bachelor's degree</b>, I learnt a lot about programming languages, Data Structures and Algorithms, 
                SQL, Natural Language Processing, Predictive Modelling, etc. In the <b>final year</b>, I was quite confident
                to start my career either in Software Engineering or Data Analytics. Fortunately, I got an <b>internship
                at IBM</b> and I completed my undergraduate degree with a <b>distinction grade</b>.
            </p>
            <p>
                I kick-started my career in <b>Data Science</b> at <b>IBM</b> and it was a wonderful journey of about <b>three years</b>. 
                I met some really amazing people, got to learn a lot more than I had learnt in my degree,
                worked on real-time <b>industry problems</b> and datasets, worked on-site with <b>international clients</b> like American
                Express and finally I decided to take a break from my career and pursue higher education.
                
            </p>
            <p>
                In <b>September 2022</b>, I came to the UK to pursue my <b>Masters Degee</b> in <b>Data Science</b> from the <b>University of Bath</b>.
                It was a bit intense course but a lot more in depth and full of interesting stuff! This course
                gave me a <b>further direction in my career</b> and I am glad I took the risk to leave my job and come all the way to 
                England. I have <b>successfully completed</b> my course in <b>September 2023</b> and still exploring more about the topics that
                I have learnt during my course.
            </p>
            {/* <p>
                I look forward to strengthen my skills as a Data Scientist, work on some challenging projects across business domains 
                and try my hands on new technologies.
            </p> */}
            </div>
          </div>

          {/* Right Column */}
          <div style={rightColumnStyle}>
            <ul style={listStyle}>
              <li style={leftText}>
                <span><FontAwesomeIcon />{" "}Achievements (IBM)</span>
              </li>
              <li style={itemStyle}>
                <span><FontAwesomeIcon icon={faTrophy} />{" "}Manager Choice Award</span>
              </li>
              <li style={itemStyle}>
                <span><FontAwesomeIcon icon={faTrophy} />{" "}Performance Awards</span>
              </li>
              <li style={itemStyle}>
                <span><FontAwesomeIcon icon={faCertificate} />{" "}IBM Data Science Professional</span>
              </li>
              <li style={itemStyle}>
                <span><FontAwesomeIcon icon={faCertificate} />{" "}Microsoft Azure Fundamentals</span>
              </li>
              <li><br></br></li> {/* Blank list element to add white space*/}
              <li style={leftText}>
                <span><FontAwesomeIcon />Exploring jobs in:</span>
              </li>
              <li style={itemStyle}>
                <span><FontAwesomeIcon icon={faCompass} />{" "}NLP</span>
              </li>
              <li style={itemStyle}>
                <span><FontAwesomeIcon icon={faCompass} />{" "}AI/Machine Learning</span>
              </li>
              <li style={itemStyle}>
                <span><FontAwesomeIcon icon={faCompass} />{" "}Data Science</span>
              </li>
              <li style={itemStyle}>
                <span><FontAwesomeIcon icon={faCompass} />{" "}Big Data</span>
              </li>
              <li style={itemStyle}>
                <span><FontAwesomeIcon icon={faCompass} />{" "}Python Development</span>
              </li>
              <li style={itemStyle}>
                <span><FontAwesomeIcon icon={faCompass} />{" "}Software Engineering</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;













// import React from "react";
// import ReactDOM from 'react-dom';
// import "../../../src/about_me.css";
// // import "./about.css"
// import prof_pic from "../images/prof_pic2.jpg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import flute_img from '../images/flute_img.png';
// import { faFutbol, faMusic, fas, faFilm, faPlane, faTrophy, faCertificate, faCompass } from '@fortawesome/free-solid-svg-icons'
// const AboutMe = (props) => {
//     const containerStyle = {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "100vh", // Center vertically
//       };
      
//       const textStyle = {
//         color: "black",
//         fontFamily: "Arial, sans-serif",
//         fontSize: '16px',
//         textAlign: "justify",
//         maxWidth: "600px", // Set the maximum width for the text content
//         margin: "0 auto", // Center the content horizontally
//         padding: "20px", // Add padding to the content
//       };
    
//       const centerText = {
//         color: "black",
//         fontFamily: "Arial, sans-serif",
//         fontSize: '22px',
//         textAlign: 'center',
//         fontWeight: 'bold',
//         margin: '0 0 10px'
//     };
//       const headingStyle = {
//         color: 'black', // Change the font color
//         // fontStyle: 'italic', // Change the font style
//         fontWeight: 'bold', // Change the font weight
//         fontFamily: 'Arial, sans-serif', // Change the font family
//         // alignItems: 'center', // Center vertically
//         textAlign: 'center' // Center horizontally
//       };
    
//       const subHeadingStyle = {
//         color: 'black', // Change the font color
//         fontStyle: 'italic', // Change the font style
//         // fontWeight: 'bold', // Change the font weight
//         fontFamily: 'Arial, sans-serif', // Change the font family
//         textAlign: 'center'
//       };

//       const centerImage = {
//         textAlign: 'center',
//         padding: '10px 0 0 0'
//         // margin: '1px'
//       };
//       const leftColumnStyle = {
//         // Add your desired styling for the left column here
//         color: "black",
//         fontFamily: "Arial, sans-serif",
//         fontSize: '16px',
//         textAlign: "justify",
//         maxWidth: "300px",
//         margin: "0 0 300px 0",
//         padding: "50px"
//     };
//     const rightColumnStyle = {
//         color: "black",
//         fontFamily: "Arial, sans-serif",
//         fontSize: '16px',
//         textAlign: "justify",
//         maxWidth: "350px",
//         margin: "0 0 60px 0",
//         padding: "50px"
//     };
//     const achievementsListStyle = {
//         listStyleType: "none",
//         padding: "10px",
//         margin: "0",
//         fontSize: "18px",
//         textAlign: 'left'
//     };

//     const achievementsItemStyle = {
//         marginBottom: "10px",
//         display: "flex",
//         alignItems: "left",
//     };

//     const hobbyListStyle = {
//         listStyleType: "none",
//         padding: "10px",
//         margin: "0",
//         fontSize: "18px",
//         textAlign: 'left'
//     };

//     const hobbyItemStyle = {
//         marginBottom: "10px",
//         display: "flex",
//         alignItems: "left",
//     };
      
      
//     return (
//         <div class='app'>
//         <section class="about-us">
//             {/* Main "div" which is further divided into three columns */}
//             <div style={containerStyle}>
//                 {/* Part 1: left-column */}
//                 <div style={leftColumnStyle}>
//                     <ul style={hobbyListStyle}>
//                         <li style={centerText}>
//                             <span><FontAwesomeIcon />{" "}Hobbies</span>
//                         </li>
//                         <li style={hobbyItemStyle}>  
//                             <span><FontAwesomeIcon icon={faFutbol} />{" "}Football</span>
//                         </li>
//                         <li style={hobbyItemStyle}>
//                             <span><FontAwesomeIcon icon={faMusic} />{" "}Play Flute</span>
//                         </li>
//                         <li style={hobbyItemStyle}>
//                             <span><FontAwesomeIcon icon={faFilm} />{" "}Movies</span>
//                         </li>
//                         <li style={hobbyItemStyle}>
//                             <span><FontAwesomeIcon icon={faPlane} />{" "}Traveling</span>
//                         </li>
//                     </ul>         
//                 </div>
//                 {/* Part 2: Middle-column */}
//                 <div style={textStyle}>
//                     <div style={centerImage}>
//                         <img class = 'round-image'
//                         src={prof_pic} // Replace with the actual path to your image
//                         // alt="Description of the image"
//                         width = 'auto' // You can set the width and height attributes as needed
//                         height = "auto"
//                         // border-radius = '50%' /* Makes the image round */
//                         // object-fit= 'cover' /* Ensures the image fills the circular container */
//                         align='center'
//                         />
//                     </div>
//                     <h3 style={headingStyle}>Abhimanyu Sangitrao</h3>
//                     <h5 style={subHeadingStyle}>Data Scientist | Machine Learning | Python Developer</h5>
//                     <div style={textStyle}>
//                         <p>
//                             I remember my very first interaction with a computer program, back in school, when we were made to write some procedures 
//                             (there was a thing called "logo" back in the early 2000s) or steps in order to make the "turtle" move up and down on the screen. 
//                             I was very overwhelmed and fascinated to see the turtle follow my instructions, because, I had never done anything like that with 
//                             a computer, before. 
//                         </p>
//                         <p>
//                             As I grew up, I used to play a lot of computer games (Age of Mythology still my favorite) and had to face a lot of 
//                             problems while installing those games, but, that gave me an idea about how a software product is built, how powerful 
//                             operating systems are, why are there so many files, etc. and that developed my interest in software development and 
//                             programming, even more. 
//                         </p>
//                         <p>
//                             During my Bachelor's degree, I learnt a lot about programming languages, Data Structures and Algorithms, 
//                             SQL, Natural Language Processing, Predictive Modelling, etc. and hence, I chose Software Industry 
//                             as a career path. I have been working as a Data Scientist for over two years or so, and I have worked with some 
//                             real big data sets and also, got a chance to apply my knowledge of programming and Data Analytics to build and 
//                             train models that could solve some real business problems. 
//                         </p>
//                         <p>
//                             I look forward to strengthen my skills as a Data Scientist, work on some challenging projects across business domains 
//                             and try my hands on new technologies, whenever possible.
//                         </p>
                    
//                     </div>
//                 </div>
//                 {/* Part 3: Right-column */}
//                 <div style={rightColumnStyle}>
//                 <ul style={achievementsListStyle}>
//                         <li style={centerText}>
//                             <span><FontAwesomeIcon />{" "}Achievements(IBM)</span>
//                         </li>
//                         <li style={achievementsItemStyle}>  
//                             <span><FontAwesomeIcon icon={faTrophy} />{" "}Manager Choice Award</span>
//                         </li>
//                         <li style={achievementsItemStyle}>
//                             <span><FontAwesomeIcon icon={faTrophy} />{" "}Performance Awards</span>
//                         </li>
//                         <li style={achievementsItemStyle}>
//                             <span><FontAwesomeIcon icon={faCertificate} />{" "}IBM Data Science Professional</span>
//                         </li>
//                         <li style={achievementsItemStyle}>
//                             <span><FontAwesomeIcon icon={faCertificate} />{" "}Microsoft Azure Fundamentals</span>
//                         </li>
//                     </ul>
//                     <div style={achievementsListStyle}>
//                         <ul style={achievementsListStyle}>
//                             <li style={centerText}>
//                                 <span><FontAwesomeIcon />{" "}Now Exploring</span>
//                             </li>
//                             <li style={achievementsItemStyle}>
//                                 <span><FontAwesomeIcon icon={faCompass} />{" "}NLP</span>
//                             </li>
//                             <li style={achievementsItemStyle}>
//                                 <span><FontAwesomeIcon icon={faCompass} />{" "}Azure Databricks</span>
//                             </li>
//                             <li style={achievementsItemStyle}>
//                                 <span><FontAwesomeIcon icon={faCompass} />{" "}PySpark</span>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </section>
//         </div>

//     );
// }

// export default AboutMe;