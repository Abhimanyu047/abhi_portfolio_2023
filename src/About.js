import React from "react";
// import "./about.css"
import chris from "../src/assets/images/chris.webp";
const About = (props) => {
    const about = props.about.start
    const aboutExit = props.about.exit
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
    //     textAlign: 'left'
    //   };
    
    //   const centerText = {
    //     textAlign: 'center',
    //     fontFamily: 'Arial, sans-serif'
    //   };
      
      
    return (
        // <div class='app'>
        // <section class="about-us">
        //     <div style={containerStyle}>
        //         <img class = 'round-image'
        //         src={chris} // Replace with the actual path to your image
        //         // alt="Description of the image"
        //         width = 'auto' // You can set the width and height attributes as needed
        //         height = "auto"
        //         // border-radius = '50%' /* Makes the image round */
        //         // object-fit= 'cover' /* Ensures the image fills the circular container */
        //         align='center'
        //         />
        //     </div>
        //     <div class="about">
            
        //         <div class="text">
        //             {/* <h2>About Me</h2> */}
        //             <h5 style={centerText}>Abhimanyu Sangitrao - Data Scientist</h5>
        //             <p style={textStyle}>
        //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed 
        //                 harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto 
        //                 molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere 
        //                 consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, 
        //                 eos provident necessitatibus reiciendis corrupti!
        //             </p>
        //             <p style={textStyle}>
        //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed 
        //                 harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto 
        //                 molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere 
        //                 consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, 
        //                 eos provident necessitatibus reiciendis corrupti!
        //             </p>
        //             {/* <div class="data">
        //                 <a href="#" class="hire">Hire Me</a>
        //             </div> */}
        //         </div>
        //     </div>
        // </section>
        // </div>
        
        
        <section id="about">
            <div className="about-card" style={{backgroundColor: "#263238"}}>
                <div className="card-header">
                    <span
                        className="iconify"
                        data-icon="emojione:red-circle"
                        data-inline="false"
                    />{" "}
                    &nbsp;{" "}
                    <span
                        className="iconify"
                        data-icon="twemoji:yellow-circle"
                        data-inline="false"
                    />{" "}
                    &nbsp;{" "}
                    <span
                        className="iconify"
                        data-icon="twemoji:green-circle"
                        data-inline="false"
                    />
                </div>
                <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                        height: "auto",
                        fontSize: "132%",
                        lineHeight: "150%",
                        backgroundColor: "#F6F6F6",
                        color: "#8e8d8a",
                        padding: "2rem"
                    }}
                >
                    {about}
                    <br/>
                    {aboutExit}
                </div>
            </div>
        </section>

    );
}

export default About;