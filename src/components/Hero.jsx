import React, { useState, useEffect } from 'react';
import sliderimgone from '../assets/sliderimg1.jpg'
import sliderimgtwo from '../assets/sliderimg2.jpg'
import sliderimgthree from '../assets/sliderimg3.jpg'
import sliderimgfour from '../assets/sliderimg4.jpg'
import sliderimgfive from '../assets/sliderimg5.jpg'
const AnimatedText = () => {
  const [text, setText] = useState('');
  const fullText = "Capture Every Emotion\nWith Motions!";

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (text !== fullText) {
        setText(text + fullText[text.length]);
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the interval for animation speed

    return () => clearInterval(intervalId);
  }, [text, fullText]);

  return (
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-950">
      {text}
    </h1>
  );
};

function Hero() {
  const images = [
    sliderimgone,
    sliderimgtwo,
    sliderimgthree,
    sliderimgfour,
    sliderimgfive,
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Automatically slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-col md:flex-row items-center px-12 py-12 md:py-24">
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
              {/* Animated h1 */}
              <AnimatedText />
              <p className="mb-8 leading-relaxed">
                {/* <span className="font-semibold text-indigo-800">
                  A Complete Photography & Videography Solution for All Your
                  Special Moments
                </span> */}
                <br />
                <span className='text-black'>
                Pre Wedding Shoot, Haldi Shoots, Wedding Shoot, Album Designing,
                360 Photobooth, Cinematography Drone Shoot, 4K Videography and
                many more!</span>
              </p>
            </div>
            <div className="relative md:w-1/2 w-full">
              <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={`absolute object-cover w-full h-full transition-opacity duration-700 ${
                      index === activeIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                  onClick={handlePrev}
                  className="text-white bg-indigo-950 hover:bg-indigo-600 rounded-full p-2 focus:outline-none"
                >
                  &#9664;
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                  onClick={handleNext}
                  className="text-white bg-indigo-950 hover:bg-indigo-600 rounded-full p-2 focus:outline-none"
                >
                  &#9654;
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;