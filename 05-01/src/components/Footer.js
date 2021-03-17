import React from "react";
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer-basic">
      <footer>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/" >Home</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/about" >About Us</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/about" >Random Link</Link>
          </li>
        </ul>
        <p className="copyright">Punk Ass Kicking Beers © 2136 a.k.a. future</p>
      </footer>
    </div>
  );
}
