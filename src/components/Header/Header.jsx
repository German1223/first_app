import { Link } from 'react-router-dom';
import head from './Header.module.css'
const Header = (props) => {
    return (
        <header className={head.header} >
            <a href='#'><img src='https://logojinni.com/image/logos/react-446.svg' /></a>
            <div className={head.login_block}>
                {props.isAuth ? props.login
                 : <Link to={'/login'}>Login</Link>
                 }
            </div>
        </header>
    )
}

export default Header;