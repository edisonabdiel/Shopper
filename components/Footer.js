// Styles
import styles from '../styles/Footer.module.css'

function Footer() {
    return (
        <div>
            <div class={styles.menu}>
                <div class={styles.label}>Follow Me</div>
                <div class={styles.spacer}></div>
                <div class={styles.item}><span className={styles.span}>Twitter</span></div>
                <div class={styles.item}><span className={styles.span}>Instagram</span></div>
                <div class={styles.item}><span className={styles.span}>Flickr</span></div>
                <div class={styles.item}><span className={styles.span}>Behance</span></div>
                <div class={styles.item}><span className={styles.span}>MixCloud</span></div>
            </div>
        </div>
    )
}

export default Footer;
