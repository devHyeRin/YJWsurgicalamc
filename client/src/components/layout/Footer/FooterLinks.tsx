import styles from "./Footer.module.css";
import InstaIcon from "../../../assets/icons/instagram.svg";
import BlogIcon from "../../../assets/icons/naver-blog.svg";

function FooterLinks() {

    return (
        <div className={styles.links}>
            <nav className={styles.policy}>
                <a href="/terms">이용약관</a>
                <span className={styles.divider}>|</span>
                <a href="/privacy">개인정보처리방침</a>
            </nav>

            <div className={styles.sns}>
                <a href="https://blog.naver.com/yjwsurgicalamc" target="_blank" rel="noopener noreferrer"
                    aria-label="네이버 블로그"
                >
                    <img src={BlogIcon} alt="" />
                </a>
                <a
                    href="https://www.instagram.com/yjwsurgicalamc" target="_blank" rel="noopener noreferrer"
                    aria-label="인스타그램"
                >
                    <img src={InstaIcon} alt="" />
                </a>
            </div>
        </div>


    );

}
export default FooterLinks;