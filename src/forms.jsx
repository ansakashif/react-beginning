import React,{Component} from 'react';

export default class forms extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        alert('A name was submitted:'+ this.input.value);
        event.preventDefault();
    }
    render(){
        return(

                <form onSubmit = {this.handleSubmit}>
                    <label>NAme:
                        <input type ="text" ref ={input => this.input = input}/>
                    </label>
                    <input type = "submit" value = "submit"/>
                </form>
 
        )
    }
}