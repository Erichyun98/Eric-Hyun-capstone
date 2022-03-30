import './Navigation.scss';
import home from '../../assets/icons/home.png'
import calendar from '../../assets/icons/calendar.png'
import message from '../../assets/icons/comment.png'
import task from '../../assets/icons/clipboard.png'

function Navigation () { 
    return (
        <nav className='nav'>
            <div className='nav__link'>
                <img src = {home} className='nav__icon' />
                <h3 className='nav__heading'>Home</h3>
            </div>
            <div className='nav__link'>
                <img src = {task} className='nav__icon' />
                <h3 className='nav__heading'>Tasks</h3>
            </div>
            <div className='nav__link'>
                <img src = {calendar} className='nav__icon' />
                <h3 className='nav__heading'>Calender</h3>
            </div>
            <div className='nav__link'>
                <img src = {message} className='nav__icon' />    
                <h3 className='nav__heading'>Messenger</h3>
            </div>
        </nav>
    )
}

export default Navigation;