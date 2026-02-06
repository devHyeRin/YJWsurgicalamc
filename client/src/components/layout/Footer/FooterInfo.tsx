import styles from "./Footer.module.css";
import FooterLogo from "../../../assets/images/logo-footer2.png";
import MapIcon from "../../../assets/icons/footer_map.svg";

function FooterInfo(){
    
    return(
        <div className={styles.infoBox}>

            <div className={styles.logo}>
                <img src={FooterLogo} alt="윤장원 외과 동물병원 로고"/>
            </div>

            <div className={styles.info}>
                <strong className={styles.brand}>윤장원 외과 동물병원</strong>
                <span className={styles.sub}>YJW Animal Surgical Center</span>
            </div>

            <address className={styles.address}>
                <img src={MapIcon} alt="" />
                <a href="https://map.naver.com/p/entry/place/2028233441?placePath=/home?entry=plt&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202602052215&locale=ko&svcName=map_pcv5&searchType=place&lng=126.9968998&lat=37.4831457&c=15.29,0,0,0,dh" 
                    target="_blank" rel="noopener noreferrer"
                    aria-label="네이버 지도"
                >
                    서울 서초구 방배로 98 나우빌딩 2층
                </a>
            </address>

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