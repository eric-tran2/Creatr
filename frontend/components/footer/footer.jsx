import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaAngellist, FaGithub} from 'react-icons/fa';


const Footer = () => (
  <footer className="bottomfooter">
    <h3> <FaLinkedin /> </h3>
    <h3> <FaAngellist /> </h3>
    <h3> <FaGithub /> </h3>
  </footer>
)

export default Footer