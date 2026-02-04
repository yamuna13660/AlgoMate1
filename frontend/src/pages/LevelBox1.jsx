import {Link} from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function LevelBox1({level}){
    return(
          <div className="div1">
  <h4>
    Practice Categories
  </h4>

  <ul>
    <li>
     <MdKeyboardArrowRight className="arrow-icon" />
      <Link to={`/array${level}`} className="topic-text">Arrays</Link>
      
    </li>

    <li>
       <MdKeyboardArrowRight className="arrow-icon" />
      <Link to={`/string${level}`} className="topic-text">Strings</Link>
     
    </li>

    <li>
      <MdKeyboardArrowRight className="arrow-icon" />
      <Link to={`/linked${level}`} className="topic-text">Linked List</Link>
    
    </li>

    <li>
     <MdKeyboardArrowRight className="arrow-icon" />
      <Link to={`/stack${level}`} className="topic-text">Stack</Link>
    </li>

    <li>
     <MdKeyboardArrowRight className="arrow-icon" />
      <Link to={`/queue${level}`} className="topic-text">Queue</Link>
    </li>
    <li>
      <MdKeyboardArrowRight className="arrow-icon" />
      <Link to={`/binarysearch${level}`} className="topic-text">Binary Search</Link>
    </li>
  <li>
     <MdKeyboardArrowRight className="arrow-icon" />
      <Link to={`/sorting${level}`} className="topic-text">Sorting Algorithms</Link>
      
    </li>

    <li>
       <MdKeyboardArrowRight className="arrow-icon" />
      <Link to={`/recursion${level}`} className="topic-text">Recursion</Link>
     
    </li>

    <li>
      <MdKeyboardArrowRight className="arrow-icon" />
      <Link to={`/binarytrees${level}`} className="topic-text">Binary Trees</Link>
    
    </li>

    <li>
     <MdKeyboardArrowRight className="arrow-icon" />
      <Link to={`/heap${level}`} className="topic-text">Heaps</Link>
    </li>

    <li>
     <MdKeyboardArrowRight className="arrow-icon" />
      <Link to={`/hashing${level}`} className="topic-text">Hashing</Link>
    </li>
    <li>
      <MdKeyboardArrowRight className="arrow-icon" />
      <Link to={`/graph${level}`} className="topic-text">Graphs</Link>
    </li>
   <li>
     <MdKeyboardArrowRight className="arrow-icon" />
      <Link to={`/greedy${level}`} className="topic-text">Greedy Algorithms</Link>
    </li>

    <li>
     <MdKeyboardArrowRight className="arrow-icon" />
      <Link to={`/dynamic${level}`} className="topic-text">Dynamic Programming</Link>
    </li>
    <li>
      <MdKeyboardArrowRight className="arrow-icon" />
      <Link to={`/searching${level}`} className="topic-text">Searching Algorithms</Link>
    </li>
  </ul>
</div>
    )
}