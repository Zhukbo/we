import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import VoteService from '../../services/knuvote-service';
import CategoryList from '../category-list/category-list';
import Registration from '../registration';

class ActivateAccount extends Component{
    state = {
        load: false
    }
    
    obj = new VoteService();
    componentDidMount() 
    { 
        
        console.log(this.props.location.search);
        console.log(this.props.location.search.slice(7,this.props.location.search.Length));
        let token = this.props.location.search.slice(7,this.props.location.search.Length);
        const f = {token}
        this.obj.verificationAccount(f);
        
    }
    render(){
        const {load} = this.state;
        const rendering = load ? <CategoryList/> : <Registration/>
        return(
        <div>{rendering}</div>
        )
    }
}
export default withRouter(ActivateAccount);