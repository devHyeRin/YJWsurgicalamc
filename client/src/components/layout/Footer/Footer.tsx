import "./Footer.css";
import FooterCopyright from "./FooterCopyright";
import FooterInfo from "./FooterInfo";
import FooterLinks from "./FooterLinks";

function Footer(){

    return(
        <footer>
            <div>
                <FooterInfo/>
                <FooterLinks/>
                <FooterCopyright/>
            </div>
        </footer>
    );
}
export default Footer;