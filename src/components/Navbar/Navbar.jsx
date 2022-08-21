import { Link } from 'react-router-dom';
import navbar from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={navbar.cont}>
      <nav className={navbar.nav}>
        <Link to='/profile' className={navbar.navel}> Profile</Link>
        <Link to='/dialogs' className={navbar.navel}> Messages</Link>
        <Link to='/users' className={navbar.navel}> Users</Link>
        <Link to='#' className={navbar.navel}> News</Link>
        <Link to='#' className={navbar.navel}> Music</Link>
        <Link to='#' className={navbar.navel}> Settings</Link>
      </nav>
    </div>
  )
}
export default Navbar;