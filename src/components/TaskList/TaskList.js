import React, { Component } from 'react';
import './TaskList.scss'; 
import {Link} from 'react-router-dom';
import axios from 'axios';
import add from '../../assets/icons/plus.png';
import remove from '../../assets/icons/delete.png'; 
import edit from '../../assets/icons/edit.png'; 

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

    deleteTasks = (e, id) => { 
        // let request = {
        //     url: "http://localhost:8080/task/delete/" + id,
        //     method: "delete"
        // }
        //     axios(request)
        //     .then(response => { 
        //         console.log("deleted a task successfully", response);
        //         this.setState({
        //             tasks: response.data
        axios.delete(`/task/delete/${id}`)
            .then(response => {
                this.setState ({
                    tasks: response.data
                })
            })
            .catch(error => { 
                console.log("Delete task error ", error)
            })
    }

    render () {
        const tasks = this.state.tasks
        return (
            <section className ='task'>
                {tasks.map((task => {
                    return (
                    <div className='task__container' key={task.id}>
                        <h2 className ='task__title'>{task.tasktitle}</h2>
                        <p className ='task__description'>Description: {task.description}</p>
                        <p className ='task__date'>Start Date: {task.startdate}</p>
                        <p className ='task__date'>End Date: {task.enddate}</p>
                        <p className ='task__time'>DeadLine: {task.time}</p>
                        <div className='task__button-container'>
                            <button className='task__button'>
                                <img className='task__img' src={edit} alt='edit Task' />
                            </button>
                            <button key={task.id} onClick={(e) => this.deleteTasks(e, task.id)} className='task__button task__delete-button'>
                                <img className='task__img' src={remove} alt='Delete' />
                            </button>
                            <Link to = '/form' className='task__button task__add-button'>
                                <img className='task__img' src={add} alt='Add' /> 
                            </Link>
                        </div>
                    </div>
                )}))}
            </section>
        )
    }    
}

export default TaskList;
