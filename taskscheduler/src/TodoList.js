import React,{Component} from 'react';
import Todo  from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css'
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {Todos:[ ]};
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update  = this.update.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    }

    update(id, currenttakstoupate){
        const updatedTasks = this.state.Todos.map(todo =>{
            if (todo.id === id){
                return {...todo, task:currenttakstoupate}

            }
            return todo;

        });
        this.setState({Todos : updatedTasks});
    }
    remove(id){
       
        this.setState({Todos : this.state.Todos.filter(task=>  task.id !== id)});

    }
    create(newTask){
        console.log(newTask);
        this.setState({Todos:[...this.state.Todos, newTask]});

    }
    toggleComplete(id,currenttakstoupate){

        const updatedTasks = this.state.Todos.map(todo =>{
            if (todo.id === id){
                return {...todo, task:currenttakstoupate, completed :!todo.completed };

            }
            return todo;

        });
        this.setState({Todos : updatedTasks});
    } 
    render(){
        const todos = this.state.Todos.map(todo=>{
            console.log(todo.id)
                return <Todo className="TodoList" key={todo.id} toremoveid={todo.id} completed ={todo.completed} toggletaskstatus = {this.toggleComplete} edittask={this.update} removeTask= {this.remove}  task={todo.task}/>


        })
       
        return (
            <div>
                <h1>Todo List</h1>
                <NewTodoForm createTask = {this.create} />
                <ul>{todos}</ul>
            </div>
        )

    }

}

export default TodoList;
