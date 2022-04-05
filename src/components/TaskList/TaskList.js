import React, { Component } from 'react';
import './TaskList.scss'; 
import {Link} from 'react-router-dom';
import axios from 'axios';

class TaskList extends Component {
    state = { 
        tasks: [],
    };

    getTasks = () => { 
        console.log ("gettasks"); 
        let request = { 
            url: "http://localhost:8080/task",
            method: "get"
        }
        axios(request)
        .then(response =>{
            console.log(response.data);
            this.setState (
                {
                tasks: response.data
                }
            )
        })
        .catch(error => {
            console.log(error);
        })
    }
    componentDidMount() {
        this.getTasks();
    }

    render () {
        const tasks = this.state.tasks
        return (
            <section className ='task'>
                {tasks.map((task =>{
                    return (
                    <div>
                        <h2 className ='task__title'>{task.title}</h2>
                        <p className ='task__description'>{task.description}</p>
                        <p className ='task__date'>Date</p>
                        <p className ='task__time'>Time</p>
                        <button clasName='task__button'>Edit Task</button>
                        <button className= 'task__delete-button'>Delete</button>
                        <Link to = '/form' className='task__add-button'>Add Task</Link>
                    </div>
                )}))}
            </section>
        )
    }    
}
export default TaskList;
