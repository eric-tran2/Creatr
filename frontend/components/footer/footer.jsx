import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaAngellist, FaGithub} from 'react-icons/fa';


const Footer = () => (
  <footer className="bottomfooter">
    <a href="https://www.linkedin.com/in/eric-tran-6aab70130/"><FaLinkedin /></a>
    <a href="https://angel.co/u/eric-tran-28"><FaAngellist/></a>
    <a href="https://github.com/eric-tran2/Creatr"><FaGithub/></a>
  </footer>
)

export default Footer