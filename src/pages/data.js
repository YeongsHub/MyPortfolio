import project1_main from '../assets/projectfotos/project1_main.png';
import project1_creatingProject from '../assets/projectfotos/project1_creatingProject.png';
import project1_addedSidebar from '../assets/projectfotos/project1_addedSidebar.png';
import project1_addTask from '../assets/projectfotos/project1_addTask.png';
import project1_clearTask from '../assets/projectfotos/project1_clearTask.png';

import project2_main from '../assets/projectfotos/project2_main.png';
import project2_namesetting from '../assets/projectfotos/project2_namesetting.png';
import project2_TimeMeasure from '../assets/projectfotos/project2_TimeMeasure.png';
import project2_timesup from '../assets/projectfotos/project2_timesup.png';

import project3p_main from '../assets/projectfotos/project3p_main.png';
import project3p_techstack from '../assets/projectfotos/project3p_techstack.png';
import project3p_projects from '../assets/projectfotos/project3p_projects.png';

import project4_main from '../assets/projectfotos/project4_main.png';
import project4_JSX from '../assets/projectfotos/project4_JSX.png';
import project4_props from '../assets/projectfotos/project4_props.png';
import project4_state from '../assets/projectfotos/project4_state.png';

import project5_main from '../assets/projectfotos/project5_main.png';
import project5_nameSetting from '../assets/projectfotos/project5_nameSetting.png';
import project5_gameStart from '../assets/projectfotos/project5_gameStart.png';
import project5_gameover from '../assets/projectfotos/project5_gameover.png';

import project6_main from '../assets/projectfotos/project6_main.png';
import project6_after1 from '../assets/projectfotos/project6_after1.png';
import project6_after2 from '../assets/projectfotos/project6_after2.png';
import project6_after12 from '../assets/projectfotos/project6_after12.png';

import project7_main from '../assets/projectfotos/project7_main.png';

import project8_beatbox from '../assets/projectfotos/project8_beatbox.png';

import project9_main0 from '../assets/projectfotos/project9_main0.png';
import project9_login from '../assets/projectfotos/project3_login.png';
import project9_invalid from '../assets/projectfotos/project3_invalid.png';


const projects = [
  {
    id: 0,
    name: 'Project Planner',
    subtext: 'Project Planner, Create and delete project plans, Add Task function',
    imgurl: project1_main,
    detailimginfo: [
      { imgurl: project1_main, subject: 'Main' },
      { imgurl: project1_creatingProject, subject: 'Create project' },
      { imgurl: project1_addedSidebar, subject: 'Added project in the sidebar' },
      { imgurl: project1_addTask, subject: 'Add tasks' },
      { imgurl: project1_clearTask, subject: 'Clear tasks' },
    ],
    tools: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    id: 1,
    name: 'Timer Challenge',
    subtext: 'Countdown Game: Who can press the countdown button closest to the chosen time?',
    imgurl: project2_main,
    detailimginfo: [
      { imgurl: project2_namesetting, subject: 'Name setting' },
      { imgurl: project2_TimeMeasure, subject: 'Before timesUp' },
      { imgurl: project2_timesup, subject: 'Timeover' },
    ],
    tools: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    id: 2,
    name: 'Portfolio',
    subtext: 'My portfolio, showing my Techstack I use and the projects that I have built.',
    imgurl: project3p_main,
    detailimginfo: [
      { imgurl: project3p_techstack, subject: 'Techstack page' },
      { imgurl: project3p_projects, subject: 'Small projects collection' },
    ],
    tools: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    id: 3,
    name: 'Learn React',
    subtext: 'Overview of fundamental React concepts—Components, JSX, Props, and State',
    imgurl: project4_main,
    detailimginfo: [
      { imgurl: project4_JSX, subject: 'Explaination JSX' },
      { imgurl: project4_props, subject: 'Explaination props' },
      { imgurl: project4_state, subject: 'Explaination state' },
    ],
    tools: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    id: 4,
    name: 'Tic-Tac-Toe',
    subtext: 'A game, leveraging state hooks to alternate player turns, and determine win',
    imgurl: project5_main,
    detailimginfo: [
      { imgurl: project5_nameSetting, subject: 'Set playername' },
      { imgurl: project5_gameStart, subject: 'Game start' },
      { imgurl: project5_gameover, subject: 'Game over' },
    ],
    tools: ['HTML', 'Tailwind CSS', 'JavaScript', 'React']
  },
  {
    id: 5,
    name: 'Investment calculartor',
    subtext: 'An investment calculator that estimates future returns based on your initial investment',
    imgurl: project6_main,
    detailimginfo: [
      { imgurl: project6_after1, subject: 'How much is the return after one year?' },
      { imgurl: project6_after2, subject: 'How much is the return after two year?' },
      { imgurl: project6_after12, subject: 'How much is the return after twelve year?' },
    ],
    tools: ['HTML', 'Tailwind CSS', 'JavaScript', 'React']
  },
  {
    id: 6,
    name: 'Simple Chat',
    subtext: 'Very simple chat using java websocket and java swing for the UI',
    imgurl: project7_main,
    detailimginfo: [


    ],
    tools: ['Java', 'Java swing', 'Web Socket']
  },
  {
    id: 7,
    name: 'BeatBox',
    subtext: 'A beatbox that plays a selected instrument at a fixed beat',
    imgurl: project8_beatbox,
    detailimginfo: [


    ],
    tools: ['Java', 'Java swing', 'Web Socket']
  },
  {
    id: 8,
    name: 'Practice using Tailwind CSS',
    subtext: 'A web site without functionality, using Tailwind CSS enabled quick and easy development',
    imgurl: project9_main0,
    detailimginfo: [
      { imgurl: project9_login, subject: 'Login function' },
      { imgurl: project9_invalid, subject: 'If the email address is invalid' },
    ],
    tools: ['HTML', 'Tailwind CSS', 'JavaScript', 'React']
  },
];



export default projects;
