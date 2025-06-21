import React, { useRef } from 'react';
import Container from './Container';
import FeedbackCard from './FeedbackCard';
import user1 from '../assets/images/user1.png';
import user2 from '../assets/images/user2.png';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Feedback = () => {
    const sliderRef = useRef(null); // Slider reference

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "0px", // No side space
      }
    }
  ]
};

    return (
        <section className='bg-blue-100 pt-18 pb-10'>
            <Container>
                <h2 className='font-semibold lg:text-[40px] text-3xl text-center mb-10'>
                    Our Customer Feedback Success Stories
                </h2>

                <div className="mx-auto">
                    <Slider ref={sliderRef} {...settings}>
                    <div className='px-3 flex justify-center'>
                        <FeedbackCard
                            image={user2}
                            name={'Litan Molla'}
                            company={'Cloud Dhaka'}
                            feedback={'Firstly say thanks to Services that I am using Max Cloud Host Server & Services from more than 2 years & very satisfied. I recommend Max Cloud Host Server & Services.'}
                        />
                    </div>
                    <div className='px-3 flex justify-center'>
                        <FeedbackCard
                            image={user1}
                            name={'Faisal Munir'}
                            company={'M Soft Sys'}
                            feedback={'Firstly say thanks to Services that I am using Max Cloud Host Server & Services from more than 2 years & very satisfied. I recommend Max Cloud Host Server & Services.'}
                        />
                    </div>
                    <div className='px-3 flex justify-center'>
                        <FeedbackCard
                            image={user2}
                            name={'Litan Molla'}
                            company={'Cloud Dhaka'}
                            feedback={'Firstly say thanks to Services that I am using Max Cloud Host Server & Services from more than 2 years & very satisfied. I recommend Max Cloud Host Server & Services.'}
                        />
                    </div>
                    <div className='px-3 flex justify-center'>
                        <FeedbackCard
                            image={user1}
                            name={'Faisal Munir'}
                            company={'M Soft Sys'}
                            feedback={'Firstly say thanks to Services that I am using Max Cloud Host Server & Services from more than 2 years & very satisfied. I recommend Max Cloud Host Server & Services.'}
                        />
                    </div>
                    <div className='px-3 flex justify-center'>
                        <FeedbackCard
                            image={user2}
                            name={'Litan Molla'}
                            company={'Cloud Dhaka'}
                            feedback={'Firstly say thanks to Services that I am using Max Cloud Host Server & Services from more than 2 years & very satisfied. I recommend Max Cloud Host Server & Services.'}
                        />
                    </div>
                    <div className='px-3 flex justify-center'>
                        <FeedbackCard
                            image={user1}
                            name={'Faisal Munir'}
                            company={'M Soft Sys'}
                            feedback={'Firstly say thanks to Services that I am using Max Cloud Host Server & Services from more than 2 years & very satisfied. I recommend Max Cloud Host Server & Services.'}
                        />
                    </div>
                    
                </Slider>
                </div>

                <div className="mx-auto flex justify-center mt-8 text-2xl text-blue-950 gap-3">
                    <button
                        className='p-2 rounded-md border border-blue-950 cursor-pointer duration-300 hover:bg-blue-950 hover:text-white text-base'
                        onClick={() => sliderRef.current.slickPrev()}
                    >
                        <GrFormPrevious />
                    </button>
                    <button
                        className='p-2 rounded-md border border-blue-950 cursor-pointer duration-300 hover:bg-blue-950 hover:text-white text-base'
                        onClick={() => sliderRef.current.slickNext()}
                    >
                        <GrFormNext />
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default Feedback;
