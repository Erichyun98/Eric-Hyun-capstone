import './Navigation.scss';
import home from '../../assets/icons/home.png'
import calendar from '../../assets/icons/calendar.png'
import message from '../../assets/icons/comment.png'
import task from '../../assets/icons/clipboard.png'
import {Link} from 'react-router-dom';

function Navigation ({active}) { 

    return (
        <nav className='nav'>
            <Link to= '/' className={active === 'home' ? 'nav__link nav__link--active' : 'nav__link'}>
                <img src = {home} alt='home logo' className= 'nav__icon' />
                <h3 className='nav__heading'>Home</h3>
            </Link>
            <Link to= '/form' className={active === 'task' ? 'nav__link nav__link--active' : 'nav__link'}>
                <img src = {task} alt='task logo' className='nav__icon' />
                <h3 className='nav__heading'>Tasks</h3>
            </Link>
            <Link to='/calendar' className={active === 'calendar' ? 'nav__link nav__link--active' : 'nav__link'}>
                <img src = {calendar} alt='calendar logo' className='nav__icon' />
                <h3 className='nav__heading'>Calender</h3>
            </Link>
            {/* <Link to= '/' className={active === '' ? 'nav__link nav__link--active' : 'nav__link'}>
                <img src = {message} alt='message logo' className='nav__icon' />    
                <h3 className='nav__heading'>Messenger</h3>
            </Link> */}
        </nav>
    )
}

export default Navigation;