import styles from "./Footer.module.css";

function FooterInfo(){
    
    return(
        <div>
            <div className={styles.info}>
                <strong className={styles.brand}>윤장원 외과 동물병원</strong>
                <span>YJW Animal Surgical Center</span>
            </div>

            <div className={styles.address}>
                <address>
                    서울 서초구 방배로 98 나우빌딩 2층
                </address>
            </div>

            <div className={styles.meta}>
                <ul>
                    <li>사업자등록번호 | </li>
                    <li>통신판매업신고 | </li>
                    <li>대표자명 : 윤장원</li>
                    <li>
                        E-mail : {' '}
                        <a href="mailto:test@gmail.com">test@gmail.com</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default FooterInfo;