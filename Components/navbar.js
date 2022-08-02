import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import Profile from './Profile.js';
import { useUser } from '@auth0/nextjs-auth0';

// image
import ProfileDefault from '../public/profile_pic_default.png';

export default function Nav() {
  const { user } = useUser();

  return (
    <header className={styles.header}>
      <img className={styles.image} src="/Inline-logo-whiteandblack.png" alt="Untrodden"/>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/aboutUs">
          <a className={styles.link}>About Us</a>
        </Link>
        {/* <Link href='/addlocation'><a  className={styles.link}>ADD LOCATION</a></Link> */}

        {user ? (
          <Link className={styles.link} href="/addlocation">
            Add Location
          </Link>
        ) : (
          <a className={styles.link} href="/api/auth/login">
            Add Location
          </a>

        )}

        {user ? (
          <>
            <a className={styles.link} href="/api/auth/logout">
              Logout
            </a>
            <Profile />
          </>
        ) : (
          <>
            <a className={styles.link} href="/api/auth/login">
              Login
            </a>
            <Image
              src={ProfileDefault}
              alt="profile"
              className={styles.default_image}
              height={50}
              width={50}
            />
          </>
        )}
      </nav>

    </header>
  );
}
