import styles from "./Footer.module.css";
import FooterInfo from "./FooterInfo";
import FooterLinks from "./FooterLinks";
import FooterCopyright from "./FooterCopyright";

function Footer(){

    return(
        <footer className={`site-footer ${styles.footer}`}>
            <div className={`container ${styles.inner}`}>
                {/* 상단 */}
                <div className={styles.top}>
                    <FooterInfo />
                    <FooterLinks />
                </div>

                <hr className={styles.dividerLine} />

                {/* 하단 */}
                <FooterCopyright />
            </div>
        </footer>
    );
}
export default Footer;