import React, { Component } from 'react';
import VoteService from '../../services/knuvote-service';

import './login.css';

export default class Login extends Component{
    state = {
        email:'bogdan_zhyk@ukr.net',
        password:'12345AA44433',
        isLogin: false,
        userData :{}
    }

    obj = new VoteService();

    onSubmit(e){
        e.preventDefault();
        this.obj.login(this.state);

    }
    onButtonClick = () =>{
        this.obj.login(this.state).then((e)=>{
            
            this.setState({
                
                isLogin: true,  
                userData: e                 
            });          
            if (e.token === undefined){
                this.setState({
                    isLogin:false
                }); 
                localStorage.setItem('isLogin','true');
            }
            localStorage.setItem('username', '${this.state.userData.username}');
            localStorage.setItem('token', this.state.userData.token);
            localStorage.setItem('email', this.state.userData.email);
            localStorage.setItem('id', this.state.userData.id);
            
            this.props.getUserData( this.state.isLogin);
           }
        );                   
    }

    onChangeUsername =(e) =>{
        this.setState({
            email:e.target.value
        });
    };

    onChangePassword =(e) =>{
        this.setState({
            password:e.target.value
        });
    };

    render(){
        const {email, password, isLogin} = this.state;
        return(
            <div>
            <form className = "login-class"
             onSubmit = {this.onSubmit}>
                <h3>LOGIN AREA</h3>
                <input value={email} onChange = {this.onChangeUsername}type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"></input>
                <input  value={password} onChange = {this.onChangePassword} type="text" className="form-control" placeholder="Password" aria-label="Username" ></input>
                <button  
                onClick = {this.onButtonClick} 
                type="button" 
                className="btn btn-primary">Log in</button>
                
                </form>
                <span className = 'loginLabelClass'>{isLogin ? "Login": "Something went wrong, try again"}</span>
                </div>
                        
        );
    }
};