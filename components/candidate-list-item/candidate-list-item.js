import React, { Component } from 'react';

export default class CandidateListItem extends Component {
    render(){
        const {name} = this.props;
        return(
            <span>{name   }
            <button>Vote</button></span>
        )
    }
}