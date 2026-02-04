import Navbar from "./Navbar";
import Footer from "./Footer";
import '../Components/pract.css';
import { Link } from "react-router-dom";
import ArrayEasy from "../Problems/ArrayEasy";
import ArrayMedium from "../Problems/ArrayMedium";
import ArrayHard from "../Problems/ArrayHard";
import StringEasy from "../Problems/StringEasy";
import LinkedEasy from "../Problems/LinkedEasy";
import LinkedMedium from "../Problems/LinkedMedium";
import LinkedHard from "../Problems/LinkedHard";
import StackEasy from "../Problems/StackEasy";
import StackMedium from "../Problems/StackMedium";
import StackHard from "../Problems/StackHard";
import QueueEasy from '../Problems/QueueEasy';
import QueueMedium from '../Problems/QueueMedium';
import QueueHard from '../Problems/QueueHard';
import BinarySearchEasy from '../Problems/BinarySearchEasy';
import BinarySearchMedium from '../Problems/BinarySearchMedium';
import BinarySearchHard from '../Problems/BinarySearchHard';
import BinaryTreesEasy from "../Problems/BinaryTreesEasy";
import BinaryTreesMedium from "../Problems/BinaryTreesMedium";
import BinaryTreesHard from "../Problems/BinaryTreesHard";
import SortingEasy from '../Problems/SortingEasy';
import SortingMedium from '../Problems/SortingMedium';
import SortingHard from '../Problems/SortingHard';
import RecursionEasy from '../Problems/RecursionEasy';
import RecursionMedium from '../Problems/RecursionMedium';
import RecursionHard from '../Problems/RecursionHard';
import HeapEasy from "../Problems/HeapEasy";
import HeapMedium from "../Problems/HeapMedium";
import HeapHard from "../Problems/HeapHard";
import HashingEasy from "../Problems/HashingEasy";
import HashingMedium from "../Problems/HashingMedium";
import HashingHard from "../Problems/HashingHard";
import GraphEasy from "../Problems/GraphEasy";
import GraphMedium from "../Problems/GraphMedium";
import GraphHard from "../Problems/GraphHard";
import GreedyEasy from "../Problems/GreedyEasy";
import GreedyMedium from "../Problems/GreedyMedium";
import GreedyHard from "../Problems/GreedyHard";
import DynamicEasy from "../Problems/DynamicEasy";
import DynamicMedium from "../Problems/DynamicMedium";
import DynamicHard from "../Problems/DynamicHard";
import SearchingEasy from "../Problems/SearchingEasy";
import SearchingMedium from "../Problems/SearchingMedium";
import SearchingHard from "../Problems/SearchingHard";
// ICONS
import { 
  BiGrid, BiText, BiLink, BiListOl, BiSearchAlt, BiSortAlt2,
  BiGitBranch, BiHash, BiNetworkChart, BiSearch
} from "react-icons/bi";

import { FaLayerGroup, FaMountain, FaBolt } from "react-icons/fa";
import { RiLoopRightLine, RiFunctionLine } from "react-icons/ri";

export default function Practice() {
  return (
    <div className="HomePage">
      <Navbar />

      <div className="practice-container">

        <h3 className="practice-title">
          Start Your DSA Journey with <span>AlgoMate</span>
        </h3>

        <p className="practice-desc">
          This course is designed to help you build a strong foundation in Data Structures & Algorithms 
          and gradually advance to expert-level skills — completely free and structured for easy learning.
        </p>

        <p className="practice-desc">
          📌 We’ve organized this sheet in a step-by-step manner so beginners can learn confidently 
          and prepare effectively for interviews.
        </p>

        <div className="note-box">
          <b>Note:</b> All practice problems redirect you to trusted platforms like 
          <span className="highlight"> GeeksforGeeks </span> and 
          <span className="highlight"> LeetCode</span>. AlgoMate does not host these problems; 
          instead, we guide you to reliable resources to support your learning and practice.
        </div>
      </div>

    <h3 id="heading">Topic-Wise DSA Practice</h3>


      {/* --------------- ROW 1 ---------------- */}
      <div className="practice-category">
        
        <div>
          <BiGrid size={28} className="icon" />
          <h4>Arrays</h4>
          <p>Arrays store sequential same-type elements in continuous memory, enabling fast indexed access.</p>
          <div className="btn-row">
           <Link to="/arrayeasy" className="easy">Easy</Link>
          <Link to="/arraymedium" className="medium">Medium</Link>
          <Link to="/arrayhard" className="hard">Hard</Link>
          </div>
         
        </div>

        <div>
          <BiText size={28} className="icon" />
          <h4>Strings</h4>
          <p>Strings represent ordered character sequences used for processing text efficiently.</p>
           <div className="btn-row">
           <Link to="/stringeasy"className="easy">Easy</Link>
          <Link to="/stringmedium" className="medium">Medium</Link>
          <Link to="/stringhard" className="hard">Hard</Link>
          </div>
        </div>

        <div>
          <BiLink size={28} className="icon" />
          <h4>Linked List</h4>
          <p>Linked lists store elements using connected nodes allowing flexible insert/delete operations.</p>
          <div className="btn-row">
           <Link to="/linkedeasy" className="easy">Easy</Link>
          <Link to="/linkedmedium"className="medium">Medium</Link>
          <Link to="/linkedhard"className="hard">Hard</Link>
          </div>
        </div>

      </div>

      {/* --------------- ROW 2 ---------------- */}
      <div className="practice-category">

        <div>
          <FaLayerGroup size={28} className="icon" />
          <h4>Stack</h4>
          <p>A stack stores elements using LIFO order with fast push/pop operations.</p>
          <div className="btn-row">
           <Link to="/stackeasy" className="easy">Easy</Link>
          <Link to="/stackmedium"className="medium">Medium</Link>
          <Link to="/stackhard"className="hard">Hard</Link>
          </div>
        </div>

        <div>
          <BiListOl size={28} className="icon" />
          <h4>Queue</h4>
          <p>A queue stores elements in FIFO order enabling structured insertion/removal.</p>
           <div className="btn-row">
           <Link to="/queueeasy"className="easy">Easy</Link>
          <Link to="/queuemedium"className="medium">Medium</Link>
          <Link to="/queuehard"className="hard">Hard</Link>
          </div>
        </div>

        <div>
          <BiSearchAlt size={28} className="icon" />
          <h4>Binary Search</h4>
          <p>Binary search finds values by halving the interval each step efficiently.</p>
          <div className="btn-row">
           <Link to="/binarysearcheasy"className="easy">Easy</Link>
          <Link to="/binarysearchmedium" className="medium">Medium</Link>
          <Link to="/binarysearchhard" className="hard">Hard</Link>
          </div>
        </div>

      </div>

      {/* --------------- ROW 3 ---------------- */}
      <div className="practice-category">

        <div>
          <BiSortAlt2 size={28} className="icon" />
          <h4>Sorting Algorithms</h4>
          <p>Sorting arranges elements in order to improve searching and organization.</p>
          <div className="btn-row">
           <Link to="/sortingeasy" className="easy">Easy</Link>
          <Link to="/sortingmedium"className="medium">Medium</Link>
          <Link to="/sortinghard" className="hard">Hard</Link>
          </div>
        </div>

        <div>
          <RiLoopRightLine size={28} className="icon" />
          <h4>Recursion</h4>
          <p>Recursion solves problems by repeatedly calling functions on smaller cases.</p>
          <div className="btn-row">
           <Link to="/recursioneasy" className="easy">Easy</Link>
          <Link to="/recursionmedium" className="medium">Medium</Link>
          <Link to="/recursionhard" className="hard">Hard</Link>
          </div>
        </div>

        <div>
          <BiGitBranch size={28} className="icon" />
          <h4>Binary Trees</h4>
          <p>Binary trees organize data using nodes for efficient search & traversal.</p>
       <div className="btn-row">
           <Link to="/binarytreeseasy"className="easy">Easy</Link>
          <Link to="/binarytreesmedium" className="medium">Medium</Link>
          <Link to="/binarytreeshard" className="hard">Hard</Link>
          </div>
        </div>

      </div>

      {/* --------------- ROW 4 ---------------- */}
      <div className="practice-category">

        <div>
          <FaMountain size={28} className="icon" />
          <h4>Heaps</h4>
          <p>Heaps maintain ordered trees enabling fast min/max access operations.</p>
           <div className="btn-row">
           <Link to="/heapeasy" className="easy">Easy</Link>
          <Link to="/heapmedium" className="medium">Medium</Link>
          <Link to="/heaphard" className="hard">Hard</Link>
          </div>
        </div>

        <div>
          <BiHash size={28} className="icon" />
          <h4>Hashing</h4>
          <p>Hashing maps data using hash functions for extremely fast lookup.</p>
         <div className="btn-row">
           <Link to="/hashingeasy"className="easy">Easy</Link>
          <Link to="/hashingmedium"className="medium">Medium</Link>
          <Link to="/hashinghard"className="hard">Hard</Link>
          </div>
        </div>

        <div>
          <BiNetworkChart size={28} className="icon" />
          <h4>Graphs</h4>
          <p>Graphs represent connected relationships using nodes and edges.</p>
   <div className="btn-row">
           <Link to="/grapheasy" className="easy">Easy</Link>
          <Link to="/graphmedium" className="medium">Medium</Link>
          <Link to="/graphhard" className="hard">Hard</Link>
          </div>
        </div>

      </div>

      {/* --------------- ROW 5 ---------------- */}
      <div className="practice-category">

        <div>
          <FaBolt size={28} className="icon" />
          <h4>Greedy Algorithms</h4>
          <p>Greedy algorithms pick the best immediate choice at every step.</p>
          <div className="btn-row">
           <Link to="/greedyeasy" className="easy">Easy</Link>
          <Link to="/greedymedium" className="medium">Medium</Link>
          <Link to="/greedyhard" className="hard">Hard</Link>
          </div>
        </div>

        <div>
          <RiFunctionLine size={28} className="icon" />
          <h4>Dynamic Programming</h4>
          <p>DP stores results of subproblems to avoid repeated computation.</p>
      <div className="btn-row">
           <Link to="/dynamiceasy"className="easy">Easy</Link>
          <Link to="/dynamicmedium"className="medium">Medium</Link>
          <Link to="/dynamichard" className="hard">Hard</Link>
          </div>
        </div>

        <div>
          <BiSearch size={28} className="icon" />
          <h4>Searching Algorithms</h4>
          <p>Search algorithms locate elements efficiently using systematic checks.</p>
         <div className="btn-row">
           <Link to="/searchingeasy"className="easy">Easy</Link>
          <Link to="/searchingmedium"className="medium">Medium</Link>
          <Link to="/searchinghard"className="hard">Hard</Link>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  );
}
