import React, { Component } from 'react';
import './category-list.css';
import CategoryListItem from '../category-list-item';
import VoteService from '../../services/knuvote-service';

export default class CategoryList extends Component{

    state = {
        term: ''
    }
    obj = new VoteService();

    search(items, term){
        if(term.length === 0){
            return items
        }
    
         return items.filter((item)=>{
                return item.name.toLowerCase().indexOf(term.toLowerCase())>-1
        });
    };
    onInputChange = (e)=>{
        const term = e.target.value;
        this.setState({term});
        
    }    
    categoryCreate=()=>{
        this.obj.addCandidate(4);
    }

    render(){
        const {arr, onCategoryClick}= this.props;
        const {term}= this.state;
        const visibleItems = this.search(arr, term);


        const elements = visibleItems.map((item)=>{
            const {id, name,  ...allItems} = item;
                return (<li key = {id} className = "list-group-item">    
    
                <CategoryListItem
                {...item}
                onCategoryClick = {()=>onCategoryClick(id, name)} />
                    </li>
            );
        });  
        return (
        <ul className = "list-group ">
         <div>
             <input placeholder = "find a category"
                    value = {term}
                    onChange = {this.onInputChange} />
                    <button className = "btn btn-info"
                    onClick = {this.categoryCreate}>Add category</button>
             </div>
         
       {elements}
       </ul>
     );
    }
    

}

