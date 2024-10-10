import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: 'Todo List',
        desc: "A React & JavaScript based app for managing your tasks efficiently.",
        img: "/project_01.png",
        tags: ["React", "Node", "CSS", "JavaScript"]
    },
    {
        id: 1,
        title: "Countdown Timer",
        desc: "A Next.js and TypeScript powered website to track time with an intractive countdown feature.",
        img: "/project_02.png",
        tags:["Next.JS", "Node", "CSS", "TypeScript"]
    },
    {
        id: 2,
        title: "Coin Toss",
        desc: "A simple HTML and JavaScript based app that display coins toss.",
        img: "/project_03.png",
        tags: ["HTML", "Node", "CSS", "JavaScript"]
    },
    {
        id: 3,
        title: "Currency Converter Project",
        desc: "A simple HTML and TypeScript powered tool for converting currencies with real-time rates.",
        img: "/project_04.png",
        tags: ["HTML", "Node", "CSS", "TypeScript"]
    },
    {
        id: 4,
        title: "Static Interactive Resume",
        desc: "A TypeScript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
        img: "/project_05.png",
        tags: ["HTML", "Node", "CSS", "TypeScript"]
    },
    {
        id: 5,
        title: "Simple Calculator Project",
        desc: "A basic HTML CSS and TypeScript calculator for performing essential arithmetic operations.",
        img: "/project_06.png",
        tags: ["HTML", "Node", "CSS", "TypeScript"]
    }
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My ProJects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
