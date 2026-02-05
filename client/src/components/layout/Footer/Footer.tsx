import styles from "./Footer.module.css";
import FooterInfo from "./FooterInfo";
import FooterLinks from "./FooterLinks";
import FooterCopyright from "./FooterCopyright";

function Footer(){

    return(
        <footer className={`site-footer ${styles.footer}`}>
            <div className="container">
                {/* 상단 영역 */}
                <div className={styles.inner}>
                    <FooterInfo />
                    <FooterLinks />
                </div>

                {/* 하단 카피라이트 */}
                <FooterCopyright />
            </div>
        </footer>
    );
}
export default Footer;