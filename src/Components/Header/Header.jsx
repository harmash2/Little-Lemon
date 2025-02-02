import styles from './Header.module.css';
import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header>
      <Logo/>
      <Nav/>
    </header>
  )
}
export default Header;