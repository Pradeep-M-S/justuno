import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    if(!container.current.firstChild) {
      lottie.loadAnimation({
        container: container.current, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require("../assets/lottie-1.json"), // the path to the animation json
      });
    }
  },[]);


  return (
      <div className="min-h-max w-full text-white grid grid-flow-row my-8 md:my-0  md:grid-flow-col md:grid-cols-2">
        <div className='flex px-5 flex-col gap-5 align-center justify-center md:px-8 text-left md:w-4/5 mx-auto'>
          <div>
            <div className='text-6xl sm:text-7xl font-extrabold'>
              Pop-ups – and  
            </div>
            <div className='text-6xl sm:text-7xl font-extrabold'>
              so much more
            </div>
          </div>
          <div className='text-lg font-light tracking-widest mx-auto'>
            Convert more website traffic into customers with personalized onsite messaging at every touchpoint.
          </div>
          <div className='relative'>
            <input className='p-4 w-full rounded-full text-lg' placeholder='Your Email Address'/>
            <a
                  href="#"
                  className="hidden absolute -top-0 right-0 py-4 my-auto ml-8 whitespace-nowrap md:inline-flex items-center justify-center px-5 py-4 border border-transparent rounded-full shadow-sm text-xl font-medium text-white bg-lime-600 hover:bg-lime-700 ease-in duration-200"
              >
                Try for free
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
          </div>
          <div>
          <a
                  href="#"
                  className="inline-flex md:hidden my-auto whitespace-nowrap items-center justify-center px-5 py-4 border border-transparent rounded-full shadow-sm text-xl font-medium text-white bg-lime-600 hover:bg-lime-700 ease-in duration-200"
              >
                Try for free
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
          </div>
          <div className='text-lg font-light tracking-widest'>
            or <span className='underline font-semibold cursor-pointer'>
            Schedule a Demo
            </span> with one of our CRO experts
          </div>
        </div>
        <div className='p-5 max-h-screen' ref={container}></div>
      </div>
  )
};

export default Hero;