import { FaFacebookF, FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";
import { StyledFooter } from "./styled/StyledFooter";
const Footer = () => {

    return (
        <>
            <StyledFooter>
                <div className="contact">
                    <ul>
                        <li>
                            <a href="tel:+381669079167" target="_blank" rel="noreferrer"><FaPhone className="icon"/></a>
                        </li>
                        <li>
                            <a href="mailto: nevenakovacevic19@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope className="icon" /></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookF className="icon"/></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram className="icon"/></a>
                        </li>
                    </ul>
                    <small>@Designed with passion by Nevena Đaković </small>
                </div>

            </StyledFooter>

        </>
    )
}
export default Footer 
