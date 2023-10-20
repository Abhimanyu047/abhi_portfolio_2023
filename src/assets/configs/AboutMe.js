import React from "react";
import "../../../src/about_me.css"
// import "./about.css"
import prof_pic from "../images/prof_pic2.jpg";
const AboutMe = (props) => {
    // const about = props.about.start
    // const aboutExit = props.about.exit
    // const containerStyle = {
    //     display: "flex",
    //     // flexDirection: "column",
    //     // padding: '10px 10px',
    //     alignItems: "center", // Center horizontally
    //     justifyContent: "center", // Center vertically
    //     // minHeight: "100vh", // Make the container at least the height of the viewport
    //   };
    //   const textStyle = {
    //     color: 'black', // Change the font color
    //     // fontStyle: 'italic', // Change the font style
    //     // fontWeight: 'bold', // Change the font weight
    //     fontFamily: 'Arial, sans-serif', // Change the font family
    //     textAlign: 'left',
    //     margin: '7px', // Add margin (e.g., 10px on all sides)
    //     padding: '5px 2px' // Add padding (e.g., 5px on all sides)
    //   };
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
        textAlign: "left",
        maxWidth: "600px", // Set the maximum width for the text content
        margin: "0 auto", // Center the content horizontally
        padding: "20px", // Add padding to the content
      };
    
      const centerText = {
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
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
      }
      
      
    return (
        <div class='app'>
        <section class="about-us">
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
            <div style={containerStyle}>
            
                <div style={textStyle}>
                    {/* <h2>About Me</h2> */}
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
                        During my Bachelor  's degree, I learnt a lot about programming languages, Data Structures and Algorithms, 
                        Machine Learning and Natural Language Processing, Predictive Modelling, etc. and hence, I chose Software Industry 
                        as a career path. I have been working as a Data Scientist for over two years or so, and I have worked with some 
                        real big data sets and also, got a chance to apply my knowledge of programming and Data Analytics to build and 
                        train models that could solve some real business problems. 
                    </p>
                    <p>
                        I look forward to strengthen my skills as a Data Scientist, work on some challenging projects across business domains 
                        and try my hands on new technologies, whenever possible.
                    </p>
                    
                    </div>
                    {/* <p style={textStyle}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed 
                        harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto 
                        molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere 
                        consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, 
                        eos provident necessitatibus reiciendis corrupti!
                    </p> */}
                    {/* <div class="data">
                        <a href="#" class="hire">Hire Me</a>
                    </div> */}
                </div>
            </div>
        </section>
        </div>
        
        
        // <section id="about">
        //     <div className="about-card" style={{backgroundColor: "#263238"}}>
        //         <div className="card-header">
        //             <span
        //                 className="iconify"
        //                 data-icon="emojione:red-circle"
        //                 data-inline="false"
        //             />{" "}
        //             &nbsp;{" "}
        //             <span
        //                 className="iconify"
        //                 data-icon="twemoji:yellow-circle"
        //                 data-inline="false"
        //             />{" "}
        //             &nbsp;{" "}
        //             <span
        //                 className="iconify"
        //                 data-icon="twemoji:green-circle"
        //                 data-inline="false"
        //             />
        //         </div>
        //         <div
        //             className="card-body font-trebuchet text-justify ml-3 mr-3"
        //             style={{
        //                 height: "auto",
        //                 fontSize: "132%",
        //                 lineHeight: "150%",
        //                 backgroundColor: "#F6F6F6",
        //                 color: "#8e8d8a",
        //                 padding: "2rem"
        //             }}
        //         >
        //             {about}
        //             <br/>
        //             {aboutExit}
        //         </div>
        //     </div>
        // </section>

    );
}

export default AboutMe;