// Styles
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
    return (
        <>
            <div>
            <div className={styles.menu}>
                <div className={styles.label}>MENU</div>
                <div className={styles.spacer}></div>
                <div className={styles.item}><span className={styles.span}>Home</span></div>
                <div className={styles.item}><span className={styles.span}>Cart</span></div>
                <div className={styles.item}><span className={styles.span}>Profile</span></div>
                <div className={styles.item}><span className={styles.span}>Support</span></div>
                <div className={styles.item}><span className={styles.span}>Logout</span></div>
            </div>
        </div>
        </>
    )
}

export default NavBar;
