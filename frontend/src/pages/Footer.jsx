import "../Components/Foot.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="footer">

        {/* Logo & About */}
        <div>
          <h2>
            Algo<span style={{ color: "rgb(234,118,63)" }}>Mate</span>
          </h2>
          <p>
            The best place to learn Data Structures,<br />
            Algorithms, and ace your coding interviews<br />
            with curated resources and real<br />
            experiences.
          </p>

          {/* Icons */}
          <div className="icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/practice">All Problems</Link></li>
            <li><Link to="/home">Tutorials</Link></li>
            <li><Link to="/practice">DSA Sheets</Link></li>
            <li><Link to="/home">RoadMap</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Help & Support</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Line + Copyright */}
      <div className="footer-bottom">
        <hr />
        <p>© 2026 AlgoMate. All rights reserved.</p>
      </div>
    </div>
  );
}
