import React, { Component } from 'react';
import './registration.css';
import VoteService from '../../services/knuvote-service';
import QueryString from 'query-string';

export default class Registration extends  Component{
    state = {
       username: '',
       email: '' ,
       password: ''
  
    }

    obj = new VoteService();

    onSubmit=(e)=>{
        e.preventDefault();
        this.obj.registration(this.state)

    }

    onChangeEmail =(e) =>{
        this.setState({
            email:e.target.value
        });
    };
    onChangeUsername =(e) =>{
        this.setState({
            username:e.target.value
        });
    };
    onChangePassword =(e) =>{
        this.setState({
            password:e.target.value
        });
    };
    onButtonClick = () =>{
        this.obj.registration(this.state)
    }

    render(){
        const {username,email,password} =this.state;
        return(     
            <form className = 'registration-class'
            onSubmit = {this.onSubmit}>
                <h3>Registration AREA</h3>
                <input value={email} onChange = {this.onChangeEmail} type="text" className="form-control" placeholder="E-mail"  />
                <input value={username} onChange = {this.onChangeUsername} type="text" className="form-control" placeholder="Username"  />
                <input value={password} onChange = {this.onChangePassword} type="text" className="form-control" placeholder="Password" />
                <button 
                type="button" 
                className="btn btn-primary"
                onClick={this.onButtonClick} >
                Registration</button>
                 
            </form>
        );
    }
    
};
