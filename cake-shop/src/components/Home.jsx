import { Slide } from 'react-slideshow-image';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import { StyledHome } from './styled/StyledHome'
import 'react-slideshow-image/dist/styles.css'
import About from './About'
import Store from './Store'

const Home = ({ blur }) => {

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
    }

    let isBlurClass = blur ? 'blur' : 'not-blur'
    
    return (
        <> 
            <div className={isBlurClass}>
            <StyledHome>
                <Slide {...properties}>
                    <div className="each-slide">
                        <div>
                            <img src={img1} alt="img1" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <img src={img2} alt="img2" />
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>   
                            <img src={img3} alt="img3" />
                        </div>
                    </div>
                </Slide>
                    <h2>Welcome To <span>Grandma's</span></h2>
            </StyledHome>
            <About/>
            <Store/>
        </div>
        </>
    )
}
export default Home