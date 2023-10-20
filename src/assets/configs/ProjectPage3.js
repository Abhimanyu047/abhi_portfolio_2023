import React from "react";
// import myImage from "../images/sklearn_genetic_opt.png"; // Import the image
import age_gender1 from "../images/age_gender_1.webp";
const ProjectPage3 = () => {
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
      <h2 style={headingStyle}>Project 3: Keras: Age Estimation and Gender Classification</h2>
      <p style={subHeadingStyle}>MSc Data Science - Machine Learning Module</p>
      <div style={containerStyle}>
        <img
          src={age_gender1} // Replace with the actual path to your image
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
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Deep Learning - Keras</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Python</span>
          {/* <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Data Visualization</span> */}
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Classification</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Regression</span>
          {/* <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Data Preprocessing</span> */}
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Google Colab</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Convolutional Neural Networks(CNN)</span>
        </p>
      </div>
      <div style={textStyle}>
        <p>
        <b>Introduction: </b>
        In this project, we aimed to tackle the challenging tasks of age estimation and gender classification 
        using deep learning techniques, specifically Convolutional Neural Networks (CNNs). We utilized the 
        UTKFace dataset, a diverse collection of facial images, to train and evaluate our models. 
        The primary objectives were to accurately predict the age of individuals in the images and 
        classify their gender.
        </p>
        <p>
        <b>Problem Statement: </b>
        Age estimation and gender classification are fundamental tasks in computer vision with 
        numerous practical applications, including facial recognition systems, targeted marketing, 
        and content recommendation. Accurate age estimation and gender classification from images 
        pose several challenges due to variations in facial appearances, lighting conditions, and 
        age progression. Our goal was to develop a robust CNN-based solution to address these challenges.
        </p>
        <p>
        <b>Methods: </b>
        Data Preprocessing: The first step in our project involved data preprocessing. 
        We loaded the UTKFace dataset, which includes facial images labeled with age, gender, 
        and ethnicity. We focused on extracting images with labeled age and gender information, 
        discarding ethnicity labels as it was not our primary concern. We then resized and normalized 
        the images to ensure uniformity and facilitate training.
        </p>
        <p>
        <b>Architecture Selection: </b>
        For age estimation and gender classification, we designed separate CNN architectures. 
        For age estimation, we chose a CNN architecture capable of regression tasks, with a 
        numerical age output. For gender classification, we configured a CNN architecture with a 
        binary classification output, distinguishing between male and female.
        </p>
        <p>
        <b>Training Strategy: </b>
        We split the dataset into training, validation, and test sets to assess model performance. 
        We implemented data augmentation techniques to increase the diversity of training examples 
        and reduce overfitting. The models were trained using appropriate loss functions, such as 
        mean squared error for age estimation and binary cross-entropy for gender classification. 
        We used Adam optimization and early stopping to efficiently train the models.
        </p>
        <p>
        <b>Evaluation Metrics: </b>
        To evaluate the performance of our models, we employed commonly used metrics. 
        For age estimation, we measured Mean Absolute Error (MAE) to quantify the difference 
        between predicted and actual ages. For gender classification, we assessed accuracy, 
        precision, recall, and F1-score to gauge the model's ability to classify gender correctly.
        </p>
      </div>
    </div>
  );
};

export default ProjectPage3;
