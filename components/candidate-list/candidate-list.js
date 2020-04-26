import React, { Component } from 'react';
import CandidateListItem from '../candidate-list-item';

export default class CandidateList extends Component{
    render(){
        const { candidates, categoryId, categoryName} = this.props;
        const selectedCandidates = candidates.filter(cand => cand.category_id == categoryId)
           const elements = selectedCandidates.map((item)=>{
            const {id, ...allitems} = item;
                return (<li key = {id} className = "list-group-item">    
    
                <CandidateListItem
                {...allitems}/>
                    </li>
            );
        });  
        
        return (
        <ul className = "list-group ">
         <div>
             <input placeholder = "find a category"/>
             </div>
        <h5>{categoryName}</h5>
       {elements}
       </ul>
     );
    }
}