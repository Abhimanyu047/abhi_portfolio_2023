import React from "react";
import myImage from "../images/senti_results_100.png"; // Import the image
const ProjectPage7 = () => {
  const containerStyle = {
    display: "flex",
    // flexDirection: "column",
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
    // minHeight: "100vh", // Make the container at least the height of the viewport
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
  
  const textStyle = {
    color: 'black', // Change the font color
    // fontStyle: 'italic', // Change the font style
    // fontWeight: 'bold', // Change the font weight
    fontFamily: 'Arial, sans-serif', // Change the font family
    textAlign: 'left'
  };

  const centerText = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  }
  return (
    <div className="project-page">
      <h2 style={headingStyle}>Project 1: News Bias Mapping</h2>
      <p style={subHeadingStyle}>MSc Research Project - University of Bath</p>
      <div style={containerStyle}>
        <img
          src={myImage} // Replace with the actual path to your image
          alt="Description of the image"
          width="300" // You can set the width and height attributes as needed
          height="200"
          align='center'
        />
      </div>
      <br />
      <div style={textStyle}>
         <p style={centerText}>
          Keywords: 
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">ML - Unsupervised</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Python</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">NLP</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Sentiment Analysis</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Topic Modelling</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">LDA</span>
        </p>
      </div>
      <div style={textStyle}>
        <p>
           This project forms the main component of my MSc degree.
        </p>
      </div>
    </div>
  );
};

export default ProjectPage7;
