import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import VoteService from '../../services/knuvote-service';


export default class Header extends Component{
  componentDidMount(){
    this.setState({
      isLogin: localStorage.getItem('isLogin')
    })
  }
  state = {
    isLogin: false
  }
    onClickLabel=()=>{
      localStorage.setItem('isLogin', 'false');
      this.setState({
        isLogin:localStorage.getItem('isLogin')
      });

    }
render (){

  const {isLogin}  = this.state;
    return(
    <div className = 'header d-flex'>
        <h3>
        <Link to = "/">
          KNU Vote
        </Link>
      </h3>
      <ul className="d-flex justify-content-end">
        <li className={isLogin ? 'hidden' : ''}>
          <Link to="/login">Log in</Link>
        </li>
        <li className={isLogin  ? 'hidden' : ''}>
          <Link to="/registration">Registration</Link>
        </li>
        <li className={isLogin  ? '' : 'hidden'}>
          <Link to="/logout"
          onClick = {this.onClickLabel}>Log out</Link>
        </li>
      </ul>

    </div>
    );
}

}

