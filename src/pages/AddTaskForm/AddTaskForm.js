import './AddTaskForm.scss';
import Navigation from '../../components/Navigation/Navigation'; 
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';



function AddTaskForm(history) {

    const submitHandler = (e) => { 
        e.preventDefault();

    axios
    .post('/tasks', {
        title: e.target.title.value,
        description: e.target.description.value,
    })
        .then(response => {
            console.log(response);
            alert('task added');
            history.push(`/tasks/${response.data.id}`)
        })
        .catch(e => {
            alert('failed to complete request')
        })
    }

    return (
      <section className ='form'>
        {/* <Header />  */}
        <h2 className='form__info'>New Task</h2>
        <h3 className='form__instruction'>Please fill out the form below to add a new task or goal.</h3>
        {/* <Navigation />  */}
        <form className='form__form'>
            <div className='form__holder'>
                <label className='form__title'>Task Title</label>
                <textarea className='form__description' placeholder='Add a title of your task'></textarea>
            </div>
            <div className='form__holder'>
                <label className='form__title'>Task Description</label>
                <textarea className='form__description'placeholder='Add a description of your task'></textarea>
            </div>
            <div className='form__holder'>
                <label className='form__title'>Date</label>
            </div>
            <div className='form__holder'> 
                <label className='form__title'>Time</label>
            </div>
            <div className='form__holder'>
                <button className='form__button'>Add New Task</button>
                <Link to ='/' className='form__cancel'>Cancel</Link>
            </div>
        </form>
      </section>
    );
  }
  
  export default AddTaskForm;
  