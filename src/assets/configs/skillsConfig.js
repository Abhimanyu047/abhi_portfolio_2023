import {
    SiPython,
    SiPostgresql,
    SiMicrosoftsqlserver,
    SiDocker,
    SiMicrosoftazure,
    SiRedis,
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiWindowsterminal,
    SiSnowflake,
    SiApacheairflow,
    SiApachekafka,
    SiPowerbi,
    SiTableau,
    SiDatabricks,
    SiApachespark
} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {FaGitAlt,FaDatabase, FaRobot} from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <FaDatabase size={50}/>,
            text: "Data Science"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <FaRobot size={50}/>,
            text: "AI/ML"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <GrMysql size={50}/>,
            text: "SQL"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiMicrosoftazure size={50}/>,
            text: "Azure"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        }
    ],
    complementarySkills: [
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiTableau size={50}/>,
            text: "Tableau"
        },
        
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <AiOutlineFileText size={50}/>,
            text: "NLP"
        },
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <SiDatabricks size={50}/>,
            text: "Databricks"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiApachespark size={50}/>,
            text: "PySpark"
        },
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiPowerbi size={50}/>,
            text: "Power BI"
        },
        // {
        //     id: "skills-9",
        //     className: "skill-icon",
        //     icon: <SiApacheairflow size={50}/>,
        //     text: "Airflow"
        // },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiJavascript size={50}/>,
            text: "JS"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiCss3 size={50}/>,
            text: "CSS 3"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/>,
            text: "HTML 5"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiRedis size={50}/>,
            text: "Redis"
        },
        
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <SiReact size={50}/>,
            text: "React"
        }
    ]
}

export default skillsConfig
