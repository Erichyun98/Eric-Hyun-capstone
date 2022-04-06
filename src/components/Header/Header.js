import './Header.scss';
import logo from '../../assets/icons/support.png';
import {Link} from 'react-router-dom';

function Header () { 
    return (
       <section className='header'> 
       <Link to = '/' className='header__link'>
            <h1 className='header__title'>AccountMe</h1>
           <img src = {logo} alt = 'AccountMe Logo' className='header__logo'/> 
        </Link>
       </section>
    )
}
export default Header;