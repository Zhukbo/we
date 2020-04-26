import React from 'react';
import { Link } from 'react-router-dom';

const HeaderPanel = ({isLogin}) =>{
    if(!isLogin){
      return(
        <div className = 'header d-flex'>
      <ul className="d-flex justify-content-end">
        <li>
          <Link to="/login">Votings</Link>
        </li>
        <li>
          <Link to="/login">Create a category</Link>
        </li>
      </ul>
    </div>
      )
    }
    else{
    return(

        <div className = 'header d-flex'>
      <ul className="d-flex justify-content-end">
        <li>
          <Link to="/category-list">Votings</Link>
        </li>
        <li>
          <Link to="/create-category">Create a category</Link>
        </li>
      </ul>

    </div>
    );}
};
export default HeaderPanel;