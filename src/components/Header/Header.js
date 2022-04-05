import './Header.scss';
import logo from '../../assets/icons/support.png';

function Header () { 
    return (
       <section className='header'> 
            <h1 className='header__title'>AccountMe</h1>
           <img src = {logo} className='header__logo'/> 
       </section>
    )
}
export default Header;