import React, {Component} from "react";
import './Todo.css'

class Todo extends Component{
    constructor(props){
        super(props);
        this.state ={isEditiong :false,
                        task :this.props.task};
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
    }
    handleRemove(){
        console.log(this.props.toremoveid);
        this.props.removeTask(this.props.toremoveid);
    }
    toggleForm(){
        this.setState({isEditiong : !this.state.isEditiong})
    };
    handleChange(evt){

        this.setState({task: evt.target.value});
    }
    handleUpdate(evt){
       evt.preventDefault();
       console.log(this.props.toremoveid);
       this.props.edittask(this.props.toremoveid, this.state.task);
       this.setState({isEditiong:false});
    };
    handleCompleted(evt){
        this.props.toggletaskstatus(this.props.toremoveid, this.state.task);

    }
    
    render (){
        let result;
        if (this.state.isEditiong){
            result=(<div>
                <form onSubmit={this.handleUpdate}>
                    <input tpye="text"
                        name= 'currenttaks'
                        value = {this.state.task}
                        onChange={this.handleChange}
                        

                    />
                    <button>Save</button>
                </form>
            </div>
            );
        }
        else 
        {
            result= ( <div>
                <button onClick={this.toggleForm}>Edit</button>
                <button onClick={this.handleRemove}> X</button>
                <li onClick ={this.handleCompleted} className={this.props.completed ? "Todo": ""}> {this.props.task}</li>
            </div>
           )

        }
        return       result;
        
    
    }

}

export default Todo;