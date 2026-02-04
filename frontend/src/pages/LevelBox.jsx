 import {Link} from "react-router-dom";
 export default function LevelBox({level,path1,path2,leveltext1,leveltext2,level1,level2}){
    return(
<div className="div3">
          <div>
            <h5>{level} Problems</h5>
            <Link to={path1} className={leveltext1}>{level1}</Link>
          </div>
          <div>
            <h5>{level} Problems</h5>
            <Link to={path2} className={leveltext2}>{level2}</Link>
          </div>
        </div>
    )
 }
 