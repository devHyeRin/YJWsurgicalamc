import "./Footer.css";

function FooterLinks(){

    return(
        <div>
            <div>
                <nav>
                    <a>이용약관</a>
                    <span>|</span>
                    <a>개인정보처리방침</a>
                </nav>

                <div>
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