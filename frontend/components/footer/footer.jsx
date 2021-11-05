import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaAngellist, FaGithub} from 'react-icons/fa';
import { SiFramer } from "react-icons/si";


const Footer = () => (
  <footer className="bottomfooter">
    <a href="https://www.linkedin.com/in/eric-tran-6aab70130/" target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
    <a href="https://angel.co/u/eric-tran-28" target='_blank' rel="noopener noreferrer"><FaAngellist/></a>
    <a href="https://github.com/eric-tran2/Creatr" target='_blank' rel="noopener noreferrer"><FaGithub /></a>
  </footer>
)

export default Footer