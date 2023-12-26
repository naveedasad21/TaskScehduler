import React,{Component} from "react";
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css'

class NewTodoForm extends Component{
    constructor(props){
        super(props);
        this.state ={task:""}
        this.handleChange = this.handleChange.bind(this);
        this.hanldeSubmit = this.hanldeSubmit.bind(this);        
    }
    handleChange(evt){
            this.setState({[evt.target.name] : evt.target.value});
    }
    hanldeSubmit(evt){
        evt.preventDefault();
        this.props.createTask({...this.state, id:uuidv4 ()});
        this.setState({task:""});

    }
    render(){
    return(
        <form onSubmit={this.hanldeSubmit}> 
            <label htmlFor="task">New Task</label>
            <input id="task" 
            name ="task"
            placeholder="NewTask"  
            type="text" 
            value ={this.state.task}
            onChange={this.handleChange}

        />
            <button> Add Task</button>
        </form>

    )

    }

}

export default NewTodoForm;