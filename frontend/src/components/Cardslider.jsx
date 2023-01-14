import"./Cardslider.css"
import Opinioncard from "./Opinioncard";
import Slider from "react-slick";
import { rightarrow,leftarrow } from "../image";



const NextArrow = ({ currentSlide, slideCount, ...props }) => (
    <img src={rightarrow} alt="nextArrow" {...props} className="rarrow"/>
  );

const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
   <img src={leftarrow} alt="prevArrow" {...props} className="larrow"/>
);


const Cardslider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

    };

    return(
        <section>
                <Slider {...settings} className="slider">
                    <div className="d-flex justify-center">
                        <Opinioncard/>
                    </div>
                    <div className="d-flex justify-center">
                        <Opinioncard/>
                    </div>
                    <div className="d-flex justify-center">
                        <Opinioncard/>
                    </div>
                    <div className="d-flex justify-center">
                        <Opinioncard/>
                    </div>
                </Slider>
        </section>
    )
}

export default Cardslider;