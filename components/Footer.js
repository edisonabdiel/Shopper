// Styles
import styles from '../styles/Footer.module.css'

function Footer() {
    return (
        <div>
            <div className={styles.menu}>
                <div className={styles.label}>Follow Me</div>
                <div className={styles.spacer}></div>
                <div className={styles.item}><span className={styles.span}>Twitter</span></div>
                <div className={styles.item}><span className={styles.span}>Instagram</span></div>
                <div className={styles.item}><span className={styles.span}>Flickr</span></div>
                <div className={styles.item}><span className={styles.span}>Behance</span></div>
                <div className={styles.item}><span className={styles.span}>MixCloud</span></div>
            </div>
        </div>
    )
}

export default Footer;
