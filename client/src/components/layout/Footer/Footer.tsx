import styles from "./Footer.module.css";
import FooterInfo from "./FooterInfo";
import FooterLinks from "./FooterLinks";
import FooterCopyright from "./FooterCopyright";

function Footer(){

    return(
        <footer className={`site-footer ${styles.footer}`}>
            <div className={`container ${styles.inner}`}>
                <FooterInfo/>
                <FooterLinks/>
                <FooterCopyright/>
            </div>
        </footer>
    );
}
export default Footer;