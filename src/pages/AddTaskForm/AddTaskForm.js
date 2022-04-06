import './AddTaskForm.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from "react";
import Navigation from '../../components/Navigation/Navigation';

function AddTaskForm({tasks, history, handleDateSelect, startdate,events}) {

    const submitHandler = (e) => { 
        e.preventDefault();
        console.log({tasktitle: e.target.tasktitle.value,
        description: e.target.description.value,
        startdate: e.target.startdate.value,
        enddate: e.target.enddate.value,
        time: e.target.time.value})

    axios
    .post('/task', {
        tasktitle: e.target.tasktitle.value,
        description: e.target.description.value,
        startdate: e.target.startdate.value,
        enddate: e.target.enddate.value,
        time: e.target.time.value,
    })

        .then(response => {
            console.log(response);
            alert('task added');
            history.push(`/`)
        })
        .catch(e => {
            alert('failed to complete request')
            console.log(e)
        })
        const Dateselector = () => {
            const [startDate, setStartDate] = useState(new Date());
        };
    }
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }
    return (
    <>
      <section className ='form'>
        <h2 className='form__info'>New Task</h2>
        <h3 className='form__instruction'>Please fill out the form below to add a new task.</h3>
        <form className='form__form' onSubmit={submitHandler}>
            <div className='form__holder'>
                <label className='form__title'>Task Title</label>
                <textarea className='form__description' name='tasktitle' placeholder='Add a title of your task'></textarea>
            </div>
            <div className='form__holder'>
                <label className='form__title'>Task Description</label>
                <textarea className='form__description' name='description' placeholder='Add a description of your task'></textarea>
            </div>
            <div className='form__holder'>
                <label className='form__title'>Date</label>
                <DatePicker className='form__date form__date--start' name='startdate' placeholderText="Start Date"  selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker className='form__date' name='enddate'placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
            </div>
            <div className='form__holder'> 
                <label className='form__title'>Time</label>
                <input className='form__time' name='time' type='time' />
            </div>
            <div className='form__button-holder'>
                <button className='form__button' type='submit'>Add New Task</button>
                <Link to ='/' className='form__cancel'>
                    <button className='form__button'>Cancel</button>
                </Link>
            </div>
        </form>
      </section>
      <Navigation active='task'/>
    </>
    );
  }
  
  export default AddTaskForm;
  