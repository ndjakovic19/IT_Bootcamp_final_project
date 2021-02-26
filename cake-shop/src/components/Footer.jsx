import { FaFacebookSquare,FaPhoneSquare,FaEnvelopeSquare, FaInstagramSquare} from "react-icons/fa";
import { StyledFooter } from "./styled/StyledFooter";
const Footer = () => {

    return (
        <>
            <StyledFooter>
                <div className="container">
                    <div className="row">
                        <div className="col-1-3">
                            <h4>GRANDMA 'S</h4>
                            <p className="info">
                                info@grandmas.com
                                <br />
                                +123 456 789
                                <br />
                                Omladinskih brigada 218, Novi Beograd<br />
                                Srbija
                            </p>
                            <p className="work-hour"><span>WORK HOUR:</span>
                                <br/>
                                Mon - Sat: 08:20h
                                <br/>
                                Sunday: 09-15h
                            </p>
                        </div>
                        <div className="col-1-3 additionally-info">
                            <a href="/">About us</a>
                            <a href="/">Contact </a>
                            <a href="/">Careers</a>
                            <a href="/">FAQ</a>
                        </div>
                        <div className="col-1-3 end-child">
                            <div className="contact">
                                <h4>Contact us on:</h4>
                                <ul>
                                    <li>
                                        <a href="tel:+381669079167" target="_blank" rel="noreferrer"><FaPhoneSquare className="icon" /></a>
                                    </li>
                                    <li>
                                        <a href="mailto: nevenakovacevic19@gmail.com" target="_blank" rel="noreferrer"><FaEnvelopeSquare className="icon" /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookSquare className="icon" /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagramSquare className="icon" /></a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <small>@Designed with passion by Nevena Đaković </small>
                </div>

          
            </StyledFooter>

        </>
    )
}
export default Footer 
