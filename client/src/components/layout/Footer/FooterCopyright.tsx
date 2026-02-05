import styles from "./Footer.module.css";

function FooterCopyright(){

    return(
        <p className={styles.copyright}>
            © {new Date().getFullYear()} HBM Labs. Designed & Developed by HBM Labs.
        </p>
    );
}
export default FooterCopyright;
