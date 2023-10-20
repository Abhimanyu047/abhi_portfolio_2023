import React from "react";
import Decision_trees2 from "../images/decision_trees2.webp"
const ProjectPage6 = () => {
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
      <h2 style={headingStyle}>Project 6: Decision Trees in Python</h2>
      <p style={subHeadingStyle}>MSc Data Science - Machine Learning Module</p>
      <div style={containerStyle}>
        <img
          src={Decision_trees2} // Replace with the actual path to your image
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
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Supervised Machine Learning</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Python</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Data Visualization</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Decision Trees</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Classification</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Data Preprocessing</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">information gain</span>
        </p>
      </div>
      <div style={textStyle}>
        <p>
            The assignment focuses on building a classification model using decision trees on a breast cancer 
            diagnosis dataset. The dataset contains features extracted from digitized images of fine needle 
            aspirates of breast mass samples. It has 30 real-valued features characterizing properties of cell 
            nuclei present in the images. The target variable indicates a benign or malignant diagnosis.
        </p> 
        <p>The goal is to implement decision trees from scratch using information gain and recursive 
            partitioning to induce a model that can accurately classify unseen samples. 
            Key steps include:
        </p>
        <ul> 
            <li>Data visualization after dimensionality reduction using PCA to get insights.</li> 
            <li>Implementing core decision tree functions like information gain calculation, 
                finding optimal splits, recursive tree building, and prediction.</li> 
            <li>Building a decision tree classifier on train data and assessing its accuracy on a 
                held-out test set.</li> 
            <li>Tuning the tree depth hyperparameter and identifying the optimal value through 
                cross-validation.</li> 
            <li>Adding functionality to print the induced tree for interpretation.</li> 
        </ul> 
        <p>
            The implementation demonstrates core concepts like greedy recursive partitioning, 
            information gain, overfitting-based early stopping, and tree interpretation. It 
            achieves over 90% accuracy, indicating decision trees can effectively model the complex 
            feature interactions in this diagnostic dataset.
        </p> 
        <p>
            The assignment provides hands-on experience with a foundational machine learning algorithm. 
            It covers data exploration, metric design, recursive implementations, hyperparameter tuning,
            model evaluation, and result interpretation. Mastering decision trees lays the groundwork 
            for extending to ensemble techniques like random forests and gradient boosting trees 
            commonly used in practice. Overall, it develops both theoretical and practical skills in 
            supervised learning.
        </p> 
      </div>
    </div>
  );
};

export default ProjectPage6;
