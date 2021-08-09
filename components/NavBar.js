// Styles
import styles from '../styles/NavBar.module.css';
// Next modules
import Link from 'next/link';

const NavBar = () => {
    return (
        <>
            <div>
                <div className={styles.menu}>
                    <div className={styles.label}>MENU</div>
                    <div className={styles.spacer}></div>
                    <Link href='/' passHref>
                        <div className={styles.item}><span className={styles.span}>Home</span></div>
                    </Link>
                    <Link href='/cart' passHref>
                    <div className={styles.item}><span className={styles.span}>Cart</span></div>
                    </Link>
                    <div className={styles.item}><span className={styles.span}>Profile</span></div>
                    <div className={styles.item}><span className={styles.span}>Support</span></div>
                    <div className={styles.item}><span className={styles.span}>Logout</span></div>
                </div>
            </div>
        </>
    )
}

export default NavBar;
