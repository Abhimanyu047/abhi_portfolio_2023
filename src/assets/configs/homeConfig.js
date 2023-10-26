import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter, DiRedhat} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaGraduationCap, FaRegBuilding, FaDatabase, FaChartBar} from "react-icons/fa";
const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Abhimanyu Sangitrao</strong>
        </h1>,
    titles: [
        "Data Scientist",
        "Machine Learning Enthusiast",
        "Python Developer",
    ],
    about: {
        start: "I'm a passionate Data Scientist with over 4 years of experience working in this field." +
            " Having worked with multinational companies like IBM, I possess strong communication," +
            " problem-solving, time management and leadereship skills." + 
            " What sets me apart is my relentless pursuit of innovation and my entrepreneurial mindset." +
            " I thrive on disrupting conventional methodologies and crafting data-driven solutions that drive tangible business impact." + 
            " My ability to communicate complex technical concepts and tell compelling data stories makes me a valuable asset in any team.",
        exit: "Feel free to check out rest of the sections to know more about me and my work!"
    },
    workTimeline: [
        {
            id: "work-3",
            title: "MSc Data Science",
            company: "University of Bath",
            description: "Fruther strengthened core concepts in Machine Learning and Data Science " +
            "along with hands-on projects in Deep learning, ML based Research project and assignments.",
            date: " Sep 2022 - Sep 2023",
            icon: <FaGraduationCap/>,
            tags: ["ml", "python", "Data Science", "Statistics", "NLP","Deep Learning"]
        },
        {
            id: "work-2",
            title: "Data Scientist",
            company: "IBM India Pvt. Ltd.",
            description: "Kick-started career in Data Science, developed core skills like Data preparation, pre-processing, " +
                "Exploratory Data Analysis, Data Visualization, Predictive Modelling, and building a full ML pipeline.",
            date: "July 2019 - Mar 2022",
            icon: <FaDatabase/>,
            tags: ["ml", "airflow", "python", "docker", "snowflake", "postgres", "azure"]
        },
        {
            id: "work-1",
            title: "Data Science Internship",
            company: "IBM India Pvt. Ltd.",
            description: "Shadowing senior data scientist, upskilling through IBM certified trainings," +
                " first hands-on industry project, learning about data warehouse and Power BI dashboards.",
            date: "Jan 2019-June 2019",
            icon: <FaChartBar/>,
            tags: ["ml", "mssql", "python", "docker", "pbi", "azure"]
        },
        // {
        //     id: "work-0",
        //     title: "BI Analyst",
        //     company: "Onelink BPO",
        //     description: "Build interactive dashboards, ETLs and SQL queries to show the company KPIs.",
        //     date: "2016-2018",
        //     icon: <BsClipboardData/>,
        //     tags: ["python", "mssql", "pbi", "excel"]
        // }
    ]
}


export default homeConfig