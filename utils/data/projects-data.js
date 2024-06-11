import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Job Portal Website",
    description:
      "Job Portal is a web application built using the MERN stack (MongoDB, Express, React, Node.js) that allows users to search for jobs, apply for them, and manage job postings.",
    tools: ["Express", "MongoDB", "Node", "React", "moongose"],
    role: "Full Stack Developer",
    code: "",
    demo: "https://abinesh-job-portal-client.vercel.app/login",
    image: crefin,
    github: "https://github.com/Abinesh010104/JobPortal",
  },
  {
    id: 2,
    name: "Chennai Shortest Path Finder",
    description:
      "Implemented Dijkstra’s algorithm to find the shortest path between locations in Chennai.",
    tools: ["Python", "Matplotlib"],
    role: "Problem Solver",
    code: "",
    demo: "",
    image: travel,
    github: "https://github.com/Abinesh010104/Chennai-Express-Shortest-Path-",
  },
  {
    id: 3,
    name: "Realtime Fire Detection Alert System",
    description:
      "This project implements a real-time fire detection alert system that sends notifications via Gmail. The system uses the YOLOv8 model for fire detection, and the model was trained on a custom dataset available on Roboflow.",
    tools: ["YOLO v8", "Python", "Gmail Service", "Roboflow"],
    code: "",
    role: "Machine Learning Scientist",
    demo: "",
    image: realEstate,
    github:
      "https://github.com/Abinesh010104/Realtime-Fire-Detection-Alert-System",
  },
  {
    id: 4,
    name: "Online Food Delivery Platform",
    description:
      "This project is a web-based application designed to facilitate online food ordering. Developed using HTML, CSS, and JavaScript, it offers a seamless user experience with login functionality and attractive design elements for easy navigation.",
    tools: ["HTML", "CSS", "Java Script"],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
    github: "https://github.com/Abinesh010104/Online_Food_Delivery_Website",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
