import React, { Component } from 'react';
import Axios from 'axios';
import "./index.css"

class todoListApp extends Component {
    constructor (props) {
        super (props);
        this.state = {
            name: "TodoList",
            todos:[]
        }
    }

    updateTaskName = (event) => {
        this.setState({
            taskName: event.target.value
        })
    }
   
    componentDidMount() {

    }
    fetchTasks=() => {
        Axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then((response) => {
            this.setState({
                todos: response.data.slice(0,40),
                dataFetched: true
            })
        })
        .catch((error) => {
            alert(`Error: ${error}`);
        })
    }
    
    render() {
        const {name, todos} = this.state;
        console.log("zfxffzdf")  

        return(
            <div>
            <h1> {name} </h1>
            <button onClick={this.fetchTasks}> AddFetch </button>
            <ul>
                {todos.map((todo)=>{
                    return (
                    <div key={todo.id}>
                    {todo.completed === true ? (
                        <li style={{color:'green'}}>
                    {todo.title}
                    <span className="marker">
                        <input className="checked-box" type="checkbox" checked={todo.completed} />
                    </span>
                    </li>
                    ):(<li style={{color:'red'}}>
                    {todo.title}
                    <span className="marker">
                        <input className="checked-box" type="checkbox" checked={todo.completed} />
                    </span>
                    </li>)}
                    
                    </div>
                    )
                })}
            </ul>    
            </div>
        )
    }
}
export default todoListApp;

