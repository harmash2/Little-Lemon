import styles from './Footer.module.css';
import Nav from '../Nav/Nav';

function Contacts() {
  return (
    <div className={styles.footerContacts}>
      <p>Contacts</p>
      <ul className={styles.footerContacts}>
        <li>
          <a href='#'>
          Address
          </a>
        </li>
        <li>
          <a href='#'>
          Phone number
          </a>
        </li>
        <li>
          <a href='#'>
          Email
          </a>
        </li>
      </ul>
    </div>
  )
};

function Social() {
  return (
    <div className={styles.footerContacts}>
      <p>Social Media Links</p>
      <ul className={styles.footerContacts}>
        <li>
          <a href='#'>
          Address
          </a>
        </li>
        <li>
          <a href='#'>
          Phone number
          </a>
        </li>
        <li>
          <a href='#'>
          Email
          </a>
        </li>
      </ul>
    </div>
  )
};

function Footer() {

  return (
    <footer>
      <div className={styles.footerNav}>
        <p>Doormate Navigation</p>
        <Nav/>
      </div>
      <Contacts/>
      <Social/>
    </footer>
  );
};
export default Footer;