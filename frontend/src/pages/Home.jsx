import Navbar from "./Navbar"
import Footer from "./Footer"
import '../Components/Home.css'
import {Link} from 'react-router-dom'
import { FaTasks, FaBookOpen, FaUserTie } from "react-icons/fa";

export default function Home(){
    return(
        <div className="HomePage">
        <Navbar/>
        <div className="center">
        <h3>Master DSA with AlgoMate</h3>
        <p>Struggling with Data Structures and Algorithms? AlgoMate is your personal learning assistant to <br></br>master DSA efficiently. Track your progress, solve curated problems, and get directed to quality<br></br> resources like LeetCode and GeeksforGeeks.</p>
       <div className="btns">
   <Link to="/practice">Start Practicing</Link>
    <Link to="/about">Learn More</Link>
</div>
        </div>
     
       <h3 id="heading">Level Up Your Coding Journey</h3>
       <div className="boxes">
    <div>
        <FaTasks className="icon"/>
        <h4>AlgoMate DSA Tracker</h4>
        <p>Master DSA with handpicked problems and track your progress efficiently.</p>
    </div>

    <div>
        <FaBookOpen className="icon"/>
        <h4>Topic-Wise Challenges</h4>
        <p>Sharpen your skills with curated questions sorted by topic.</p>
    </div>

    <div>
        <FaUserTie className="icon"/>
        <h4>Interview Insights</h4>
        <p>Read real interview stories from top tech companies to prepare better</p>
    </div>
</div>
<Footer/>
        </div>
    
    )
}