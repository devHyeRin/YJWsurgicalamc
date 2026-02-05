import styles from "./Footer.module.css";

function FooterLinks(){

    return(
        <div>
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
                        <i className="icon-blog" />
                    </a>
                    <a
                    href="https://www.instagram.com/yjwsurgicalamc" target="_blank" rel="noopener noreferrer"
                        aria-label="인스타그램"
                    >
                        <i className="icon-instagram" />
                    </a>
                </div>
            </div>
            
        </div>
        
    );

}
export default FooterLinks;