import './App.css'
import Home from './pages/Home';
import { Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
import ProtectedLayout from "./Components/ProtectedLayout";
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import StartPage from './pages/StartPage';
import Practice from './pages/Practice';
import ArrayEasy from "./Problems/ArrayEasy";
import ArrayMedium from './Problems/ArrayMedium';
import ArrayHard from "./Problems/ArrayHard";
import StringEasy from "./Problems/StringEasy";
import StringMedium from "./Problems/StringMedium";
import StringHard from "./Problems/StringHard";
import LinkedEasy from './Problems/LinkedEasy';
import LinkedMedium from './Problems/LinkedMedium';
import LinkedHard from './Problems/LinkedHard';
import StackEasy from './Problems/StackEasy';
import StackMedium from './Problems/StackMedium';
import StackHard from './Problems/StackHard';
import QueueEasy from './Problems/QueueEasy';
import QueueMedium from './Problems/QueueMedium';
import QueueHard from './Problems/QueueHard';
import BinarySearchEasy from './Problems/BinarySearchEasy';
import BinarySearchMedium from './Problems/BinarySearchMedium';
import BinarySearchHard from './Problems/BinarySearchHard';
import BinaryTreesEasy from './Problems/BinaryTreesEasy';
import BinaryTreesMedium from './Problems/BinaryTreesMedium';
import BinaryTreesHard from './Problems/BinaryTreesHard';
import SortingEasy from './Problems/SortingEasy';
import SortingMedium from './Problems/SortingMedium';
import SortingHard from './Problems/SortingHard';
import RecursionEasy from './Problems/RecursionEasy';
import RecursionMedium from './Problems/RecursionMedium';
import RecursionHard from './Problems/RecursionHard';
import HeapEasy from './Problems/HeapEasy';
import HeapMedium from './Problems/HeapMedium';
import HeapHard from './Problems/HeapHard';
import HashingEasy from './Problems/HashingEasy';
import HashingMedium from './Problems/HashingMedium';
import HashingHard from './Problems/HashingHard';
import GraphEasy from './Problems/GraphEasy';
import GraphMedium from './Problems/GraphMedium';
import GraphHard from './Problems/GraphHard';
import GreedyEasy from './Problems/GreedyEasy';
import GreedyMedium from './Problems/GreedyMedium';
import GreedyHard from './Problems/GreedyHard';
import DynamicEasy from "./Problems/DynamicEasy";
import DynamicMedium from "./Problems/DynamicMedium";
import DynamicHard from "./Problems/DynamicHard";
import SearchingEasy from "./Problems/SearchingEasy";
import SearchingMedium from "./Problems/SearchingMedium";
import SearchingHard from "./Problems/SearchingHard";
export default function App()
{
  return(
    <>
      <Routes>

  {/* PUBLIC ROUTES */}
  <Route path="/" element={<StartPage />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/terms" element={<Terms />} />
<Route path="/privacy" element={<Privacy />} />
  {/* 🔒 PROTECTED ROUTES (ALL INSIDE THIS) */}
  <Route element={<ProtectedLayout />}>
    <Route path="/profile" element={<Profile />} />
    <Route path="/practice" element={<Practice />} />

    {/* ALL PROBLEM ROUTES */}
    <Route path="/arrayeasy" element={<ArrayEasy />} />
    <Route path="/arraymedium" element={<ArrayMedium />} />
    <Route path="/arrayhard" element={<ArrayHard />} />

    <Route path="/stringeasy" element={<StringEasy />} />
    <Route path="/stringmedium" element={<StringMedium />} />
    <Route path="/stringhard" element={<StringHard />} />

    <Route path="/linkedeasy" element={<LinkedEasy />} />
    <Route path="/linkedmedium" element={<LinkedMedium />} />
    <Route path="/linkedhard" element={<LinkedHard />} />

    <Route path="/stackeasy" element={<StackEasy />} />
    <Route path="/stackmedium" element={<StackMedium />} />
    <Route path="/stackhard" element={<StackHard />} />

    <Route path="/queueeasy" element={<QueueEasy />} />
    <Route path="/queuemedium" element={<QueueMedium />} />
    <Route path="/queuehard" element={<QueueHard />} />

    <Route path="/binarysearcheasy" element={<BinarySearchEasy />} />
    <Route path="/binarysearchmedium" element={<BinarySearchMedium />} />
    <Route path="/binarysearchhard" element={<BinarySearchHard />} />

      <Route path="/binarytreeseasy" element={<BinaryTreesEasy />} />
    <Route path="/binarytreesmedium" element={<BinaryTreesMedium />} />
    <Route path="/binarytreeshard" element={<BinaryTreesHard />} />

    <Route path="/sortingeasy" element={<SortingEasy />} />
    <Route path="/sortingmedium" element={<SortingMedium />} />
    <Route path="/sortinghard" element={<SortingHard />} />
<Route path="/heapeasy" element={<HeapEasy />} />
    <Route path="/heapmedium" element={<HeapMedium />} />
    <Route path="/heaphard" element={<HeapHard />} />
     
     <Route path="/grapheasy" element={<GraphEasy />} />
    <Route path="/graphmedium" element={<GraphMedium />} />
    <Route path="/graphhard" element={<GraphHard />} />

<Route path="/greedyeasy" element={<GreedyEasy />} />
    <Route path="/greedymedium" element={<GreedyMedium />} />
    <Route path="/greedyhard" element={<GreedyHard />} />

<Route path="/dynamiceasy" element={<DynamicEasy />} />
    <Route path="/dynamicmedium" element={<DynamicMedium />} />
    <Route path="/dynamichard" element={<DynamicHard />} />

     <Route path="/hashingeasy" element={<HashingEasy />} />
    <Route path="/hashingmedium" element={<HashingMedium />} />
    <Route path="/hashinghard" element={<HashingHard />} />

    <Route path="/searchingeasy" element={<SearchingEasy />} />
    <Route path="/searchingmedium" element={<SearchingMedium />} />
    <Route path="/searchinghard" element={<SearchingHard />} />

    <Route path="/recursioneasy" element={<RecursionEasy />} />
    <Route path="/recursionmedium" element={<RecursionMedium />} />
    <Route path="/recursionhard" element={<RecursionHard />} />

    
  </Route>
<Route path="*" element={<NotFound />} />
</Routes>

    </>
  )
}
