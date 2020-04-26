import React, { Component } from 'react';

export default class CreateCategory extends Component{
    state = {
        name: '',
        expiration_time: ''
    }
    render(){
        return(
            <div>
                 <form>
                    <input type="text" class="form-control" placeholder="Name"/>
                    <input type="text" class="form-control" placeholder="Date of expiration"/>
                    <button>Add category</button>
                 </form>
            </div>
      )
    }
}