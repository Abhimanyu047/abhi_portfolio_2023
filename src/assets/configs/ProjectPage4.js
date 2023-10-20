import React from "react";
// import myImage from "../images/sklearn_genetic_opt.png"; // Import the image
import time_track2 from "../images/time_track2.webp";
const ProjectPage4 = () => {
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
    padding: '10px', // Adjust the padding as needed
    margin: '10px', // Adjust the margin as needed
    textAlign: 'justify'
  };

  const centerText = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  }
  return (
    <div className="project-page">
      <h2 style={headingStyle}>Project 4: Time Recorder Web App</h2>
      <p style={subHeadingStyle}>MSc Data Science - Software Technologies for Data Science Module</p>
      <div style={containerStyle}>
        <img
          src={time_track2} // Replace with the actual path to your image
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
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">SQL</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Python</span>
          {/* <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Data Visualization</span> */}
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Web App</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">JavaScript</span>
          {/* <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Data Preprocessing</span> */}
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">HTML, CSS</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Client-Server Architecture</span>
        </p>
      </div>
      <div style={textStyle}>
        <p>
            <b>Abstract: </b>
            This project involved the development of a web-based time tracking application using Python,
            SQLite and JavaScript. The application allows users to track time spent on activities by 
            starting and stopping timers. Usage statistics are generated to analyze productivity. 
            A RESTful API backend provides the core functionality which is accessed by the frontend 
            JavaScript code. Security, efficiency and robustness were key focus areas of the 
            implementation.

            <p>
                <b>Overview: </b>
                Time tracking is important for productivity analysis. Manual methods like spreadsheets 
                often fail to capture accurate data. This project involved building an automated 
                web-based solution for time tracking. Users can define activities and record time 
                periods spent on them with a click. The application maintains a persistent database 
                of this time log which can then be mined for insights using statistical summaries.
            </p>
            <p>
                <h8><b>Front End: </b></h8>
            A browser-based frontend provides the user interface. It is backed by a Python web server 
            that handles the core logic and data storage. Security considerations were vital given the 
            need to store user credentials. Efficiency was also critical for a responsive user experience.
            The frontend was provided as part of the project specification. It consists of HTML pages 
            styled using CSS and enhanced with jQuery and JavaScript code. The index page displays the 
            tracked activity instances in a responsive grid. Users can create, update and delete 
            activities through forms. Activity instances can be started and stopped through 
            point-and-click interfaces, dynamically updating the display
            </p>
            <p>
                <h8><b>Backend: </b></h8>
                A simple Python HTTP server was written to handle API requests and route them to 
                appropriate handler functions. The server listens on a configurable port for HTTP 
                requests. Based on the URL path, requests are 
                routed to the appropriate handler function. These functions process the request, interact with 
                the database using SQL queries, and return JSON responses.
                Input validation and escaping is implemented in each handler to defend against injection 
                attacks. Random session tokens ensure security. Caching is used to improve performance 
                of frequent sequential calls.
            </p>
        </p>
      </div>
    </div>
  );
};

export default ProjectPage4;
