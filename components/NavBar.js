// Styles
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
    return (
        <>
            <div>
            <div class={styles.menu}>
                <div class={styles.label}>MENU</div>
                <div class={styles.spacer}></div>
                <div class={styles.item}><span className={styles.span}>Home</span></div>
                <div class={styles.item}><span className={styles.span}>Cart</span></div>
                <div class={styles.item}><span className={styles.span}>Profile</span></div>
                <div class={styles.item}><span className={styles.span}>Support</span></div>
                <div class={styles.item}><span className={styles.span}>Logout</span></div>
            </div>
        </div>
        </>
    )
}

export default NavBar;
