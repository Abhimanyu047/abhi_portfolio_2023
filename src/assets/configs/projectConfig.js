import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import graphEmbeddings from "../images/graph_embeddings.png"
import kafkaMl from "../images/kafkaml.png"
import lunar_lander1 from "../images/lunar_lander1.webp"
import tescoVisual from "../images/tesco_visual.png"
import age_gender_2 from "../images/age_gender_2.webp"
import senti_results from "../images/senti_results_100.png"
import time_track1 from "../images/time_track.jpg"
import decision_trees1 from "../images/Decision_trees.webp"
import linear_regression1 from "../images/linear_regression.webp"

import React from 'react'

const projectConfig = [
    {
        id: "project-1",
        title: "Linear Regression",
        links: [
            
            {
                name: "repo",
                url: "/project-1",
                // icon: <AiFillGithub/>,
            },
            // {
            //     name: "fork",
            //     url: "https://github.com/rodrigo-arenas/Graph-Embeddings/fork",
            //     icon: <BiGitRepoForked/>,
            // },
            // {
            //     name: "subscription",
            //     url: "https://github.com/rodrigo-arenas/Graph-Embeddings/subscription",
            //     icon: <AiFillEye/>,
            // },
            // {
            //     name: "docs",
            //     url: "https://graph-embeddings.readthedocs.io/",
            //     icon: <ImBook/>,
            // }
        ],
        image: linear_regression1,
        description: "Predicting Boston Housing Prices with TensorFlow Linear Regression",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Tesco Data Analysis",
        links: [
            {
                name: "repo",
                url: "/project-2",
                // icon: <AiFillGithub/>,
            },
            // {
            //     name: "fork",
            //     url: "https://github.com/rodrigo-arenas/Graph-Embeddings/fork",
            //     icon: <BiGitRepoForked/>,
            // },
            // {
            //     name: "subscription",
            //     url: "https://github.com/rodrigo-arenas/Graph-Embeddings/subscription",
            //     icon: <AiFillEye/>,
            // },
            // {
            //     name: "docs",
            //     url: "https://graph-embeddings.readthedocs.io/",
            //     icon: <ImBook/>,
            // }
        ],
        image: tescoVisual,
        description: "A deep dive into Tesco Grocery Dataset 1.0 (public dataset) and finding insights",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Keras: Age Estimation and Gender Classification",
        links: [
            {
                name: "repo",
                url: "/project-3",
                // icon: <AiFillGithub/>
            },
            // {
            //     name: "fork",
            //     url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/fork",
            //     icon: <BiGitRepoForked/>
            // },
            // {
            //     name: "subscription",
            //     url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/subscription",
            //     icon: <AiFillEye/>
            // }
        ],
        image: age_gender_2,
        description: "Age Estimation and Gender Classification using UTK Face dataset and Keras",
        target: "_blank"
    },
    {
        id: "project-4",
        title: "Time Recorder Application",
        links: [
            {
                name: "repo",
                url: "/project-4",
                // icon: <AiFillGithub/>
            },
            // {
            //     name: "fork",
            //     url: "https://github.com/rodrigo-arenas/pyworkforce/fork",
            //     icon: <BiGitRepoForked/>
            // },
            // {
            //     name: "subscription",
            //     url: "https://github.com/rodrigo-arenas/pyworkforce/subscription",
            //     icon: <AiFillEye/>
            // },
            // {
            //     name: "docs",
            //     url: "https://pyworkforce.readthedocs.io/en/stable/",
            //     icon: <ImBook/>,
            // }
        ],
        image: time_track1,
        description: "Standard tools for workforce management, queuing, scheduling, rostering and optimization problems.",
        target: "_blank"
    },
    {
        id: "project-5",
        title: "Lunar Lander",
        links: [
            {
                name: "repo",
                url: "/project-5",
                // icon: <AiFillGithub/>
            },
            // {
            //     name: "fork",
            //     url: "https://github.com/rodrigo-arenas/portfolio/fork",
            //     icon: <BiGitRepoForked/>
            // },
            // {
            //     name: "subscription",
            //     url: "https://github.com/rodrigo-arenas/portfolio/subscription",
            //     icon: <AiFillEye/>
            // }
        ],
        image: lunar_lander1,
        description: "Learning Safe Landings with Reinforcement Learning",
        target: "_blank"
    },
    {
        id: "project-6",
        title: "Decision Trees in Python",
        links: [
            {
                name: "repo",
                url: "/project-6",
                // icon: <AiFillGithub/>
            },
            // {
            //     name: "fork",
            //     url: "https://github.com/rodrigo-arenas/portfolio/fork",
            //     icon: <BiGitRepoForked/>
            // },
            // {
            //     name: "subscription",
            //     url: "https://github.com/rodrigo-arenas/portfolio/subscription",
            //     icon: <AiFillEye/>
            // }
        ],
        image: decision_trees1,
        description: "Building a Decision Tree Classifier from Scratch",
        target: "_blank"
    }//,
    // {
    //     id: "project-7",
    //     title: "News Bias Mapping",
    //     links: [
    //         {
    //             name: "repo",
    //             // url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt",
    //             url: '/project-7',
    //             icon: <AiFillGithub/>,
    //         },
    //         {
    //             name: "fork",
    //             url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/fork",
    //             icon: <BiGitRepoForked/>,
    //         },
    //         {
    //             name: "subscription",
    //             url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/subscription",
    //             icon: <AiFillEye/>,
    //         },
    //         {
    //             name: "docs",
    //             url: "https://sklearn-genetic-opt.readthedocs.io/en/stable/",
    //             icon: <ImBook/>,
    //         }
    //     ],
    //     image: senti_results,
    //     description: "A computational study for detecting and quantifying topical and sentiment" +
    //     " bias in news articles using natural language processing techniques.",
    //     target: "_blank"
    // }
]

export default projectConfig