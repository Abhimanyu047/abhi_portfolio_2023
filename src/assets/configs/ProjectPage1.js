import React from "react";
import myImage from "../images/boston.webp"; // Import the image
const ProjectPage1 = () => {
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
      <h2 style={headingStyle}>Project 1: Linear Regression</h2>
      <p style={subHeadingStyle}>MSc Data Science - Machine Learning Module</p>
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
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">ML - Supervised</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Python</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">TensorFlow</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Predictive Modelling</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Matplotlib</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Feature Engineering</span>
        </p>
      </div>
      <div style={textStyle}>
        <p>
          <b>Dataset Description: </b>
          The Boston Housing Price dataset contains 13 features, such as crime rates, room counts, 
          and pupil-teacher ratios, with the target variable being the median housing price in 
          thousands of dollars. It comprises 506 data points and was obtained from the UCI 
          Machine Learning Repository.
        </p>
        <p>
          <b>Overview: </b>
          The task at hand was to build a machine learning model using TensorFlow for predicting the 
          median value of owner-occupied homes in different Boston neighborhoods. We used the Boston 
          Housing Price dataset, a classic choice for learning and practicing linear regression
        </p>
        <p>
          <b>Implementation: </b>
          <ul>
            <li>Data cleaning: Checked for missing values and inconsistencies.</li>
            <li>Feature selection: Analyzed feature importance and relevance to the target variable.</li>
            <li>Feature scaling: Normalized features to maintain consistency.</li>
            <li>Split the dataset into training (80%) and testing (20%) subsets for model evaluation.</li>
            <li>Model Architecture: Developed a linear regression model using TensorFlow's high-level APIs.</li>
            <li>Model Training: Mean Squared Error as the loss function and Stochastic Gradient Descent as the optimizer.</li>
            <li>Model Evaluation: Utilized evaluation metrics like Mean Absolute Error (MAE), Mean Squared Error (MSE), 
              and Root Mean Squared Error (RMSE) to quantify accuracy.</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default ProjectPage1;
