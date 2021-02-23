import { StyledAbout } from './styled/StyledAbout'

const About = () => {
    return (
        <>
            <StyledAbout>
                <div className="container">
                    <div className="row">
                        <div className="container-about">
                            <h1>About<span> Us</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas
            beatae vitae expedita consectetur nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis
            porro at dolorum! Ad!</p>
                            <button>Expolore</button>
                        </div>
                        <div className="google-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.1708299199045!2d20.397000750685148!3d44.797707078996154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6f981e14fc2f%3A0x56dbd3ae248d4e82!2sOmladinskih%20brigada%20218%2C%20Beograd%2011070!5e0!3m2!1sen!2srs!4v1614079029810!5m2!1sen!2srs"
                                width="576" height="387,5" allowfullscreen="" loading="lazy" title="jsx-a11y/iframe-has-title"></iframe>
                        </div>
                    </div>
                </div>
            </StyledAbout>
        </>
    )
}
export default About    