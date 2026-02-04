import {Link} from 'react-router-dom';
import "../Components/Startpage.css"
export default function StartPage(){
    return(
        <div className='center-page'>
            <h1 className='heading-tag'>ALGOMATE</h1>
            <Link to="/home" className="btn-primary">🚀 Start Learning</Link>
        </div>
    )
}