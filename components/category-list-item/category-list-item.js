import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CategotyListItem extends Component{
    
    render()
    {
        const {name, creator, expiration_time, onCategoryClick} = this.props;
        return(
         <span>
          <Link to="/candidate-list"
                onClick = {onCategoryClick} >{name}</Link> expiration time : {expiration_time}
                <button>Edit</button>
        </span>
        
        
        );
    };
}

