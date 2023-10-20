import React from "react";
// import myImage from "../images/sklearn_genetic_opt.png"; // Import the image
import time_track2 from "../images/time_track2.webp";
import lunar_gif from "../images/lunar_gif.gif"
const ProjectPage5 = () => {
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
      <h2 style={headingStyle}>Project 5: Training AI agent to Land on the Moon</h2>
      <p style={subHeadingStyle}>MSc Data Science - Reinforcement Learning Module</p>
      <div style={containerStyle}>
        <img
          src={lunar_gif} // Replace with the actual path to your image
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
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Reinforcement Learning</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Python</span>
          {/* <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Data Visualization</span> */}
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">DQN</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">DDQN</span>
          {/* <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Data Preprocessing</span> */}
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">A2C, PPO</span>
          <span class="tag mr-2 mb-2 badge rounded-pill bg-secondary">Neural Networks</span>
        </p>
      </div>
      <div style={textStyle}>
        <p>
          <b>Abstract: </b>
          The project aims to develop an artificial agent capable of safely landing a simulated lunar 
          lander using reinforcement learning algorithms. The lunar landing environment has a 
          continuous state space representing parameters like lander coordinates, velocities, angle, 
          and ground contact sensors. Four discrete actions are available to control the lander's 
          thrusters and rotation. The agent receives rewards for successful landing and penalties for 
          crashing or using fuel. An episodic regime is employed where the agent repeatedly interacts 
          with the environment to learn an optimal policy. The objective is to develop an agent that 
          can reliably land the spacecraft at high velocities and challenging terrain, demonstrated by 
          accumulating rewards above a defined threshold. This problem presents a complex control task 
          well-suited to modern deep reinforcement learning techniques.
        </p>
        <p>
          <b>Implementation: </b>
          A fully-connected feedforward neural network was developed as the function approximator in 
          DQN and DDQN using the PyTorch framework. Rectified linear units were used for hidden 
          activations while linear units were employed for the output layer representing Q-value 
          estimates. Experience replay was implemented using Python's Collections module with uniform 
          random sampling of experience tuples. A target network clone was created and updated 
          periodically to stabilize training. ε-greedy action selection was used for exploration-exploitation 
          trade-off. The Adam optimizer was utilized for gradient-based Q-network updates using MSE loss. 
          Various hyperparameters including learning rate, batch size, and network structure were tuned 
          using grid search. The environment interaction loop was coded to generate experience tuples for 
          agent training. Testing scripts evaluated averaged episodic rewards over multiple trials.
        </p>
        <p>
          <h8><b>Results: </b></h8>
          The DDQN agent achieved the best performance with average rewards of 254, solving the lunar 
          landing task. DQN also succeeded with average rewards of 219 but required more training time 
          to converge. Both surpassed the PPO and A2C implementations which scored 170 and 150 
          respectively. Further hyperparameter tuning was shown to significantly impact learning for 
          DQN and DDQN. Better rewards were obtained using a learning rate of 0.0005 and batch size of 64. 
          The training curves exhibited a characteristic upward trend as agents progressively mastered the 
          control task through iterated learning.
        </p>
        {/* <p>
          <h8><b>Backend: </b></h8>
          A simple Python HTTP server was written to handle API requests and route them to 
          appropriate handler functions. The server listens on a configurable port for HTTP 
          requests. Based on the URL path, requests are 
          routed to the appropriate handler function. These functions process the request, interact with 
          the database using SQL queries, and return JSON responses.
          Input validation and escaping is implemented in each handler to defend against injection 
          attacks. Random session tokens ensure security. Caching is used to improve performance 
          of frequent sequential calls.
        </p> */}
      </div>
    </div>
  );
};

export default ProjectPage5;
