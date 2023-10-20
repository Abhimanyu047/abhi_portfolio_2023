import React from "react";
import myImage from "../images/sklearn_genetic_opt.png"; // Import the image
import tesco_img2 from "../images/tesco_img2.jpg";
const ProjectPage2 = () => {
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
      <h2 style={headingStyle}>Project 2: Data Analysis - Tesco Grocery 1.0 Dataset</h2>
      <p style={subHeadingStyle}>MSc Data Science - Applied Data Science Module</p>
      <div style={containerStyle}>
        <img
          src={tesco_img2} // Replace with the actual path to your image
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
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">ML - Linear Regression</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Python</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Data Visualization</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">GeoPandas</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Data Analysis</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Data Preprocessing</span>
        </p>
      </div>
      <div style={textStyle}>
        <p>
          The Tesco Grocery 1.0 dataset is a record of over 420 M food items, 
          purchased by 1.6M fidelity card owners across Greater London. The data analysis begins 
          by importing core Python libraries like Pandas, NumPy, and Matplotlib to enable data 
          manipulation and visualization. The raw datasets pertaining to grocery spending habits, 
          childhood obesity prevalence, and household income levels across London are loaded and 
          preprocessed. Data cleaning tasks are performed to handle missing values, formatting 
          inconsistencies, and data type conversions. Exploratory analysis commences with aggregation, 
          subsetting, and merging operations to derive unified datasets for further statistical analysis. 
          Choropleth visualizations are generated using the GeoPandas library to analyze regional 
          consumption patterns and trends. Predictive modeling involves training a linear regression 
          model to determine the relationship between food categories and obesity levels. 
          Key model evaluation metrics like R-squared and mean squared error are computed. Further 
          analysis entails calculating the Pearson correlation coefficient between grocery spending 
          and income variables to uncover associations. Statistical hypothesis testing identifies 
          significant correlations. Finally, the Matplotlib library is employed to generate insightful 
          data visualizations like clustered bar charts to communicate the analysis results. 
          The visualizations synthesize complex statistical insights into intuitive formats. In summary, 
          a range of technical data science techniques spanning data preparation, exploratory and 
          predictive modeling, statistical analysis, and reporting are applied to derive actionable 
          insights from the datasets. The analysis aims to highlight interesting relationships between 
          food habits, health, and economic factors.
        </p>
      </div>
    </div>
  );
};

export default ProjectPage2;
