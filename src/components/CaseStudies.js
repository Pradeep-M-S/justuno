const CaseStudies = () => {
    return (
        <div className="case-studies-container">
            <div className="case-studies-inner-left">
                <p className="font-extrabold text-3xl">
                    133K+ brands use Justuno to optimize and convert their traffic.
                </p>
                <p className="font-light text-left text-xl tracking-wide">
                    But don’t just take our word for it, see what our customers have to say.
                </p>
                <a
                  href="#"
                  className="whitespace-nowrap inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-full shadow-sm text-xl font-normal text-black bg-amber-500 hover:bg-amber-600 ease-in duration-200 md:w-1/2"
              >
                Read Case Studies
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div className="case-studies-inner-right">
                <p className="font-light text-left text-xl tracking-wide">“Customer engagement via onsite messaging was a challenge until I found Justuno…if you’re looking for a site messaging solution that works extremely well with your ESP then look no further.”</p>
                <div className="flex flex-row">
                    <img className="rounded-full w-20 shadow-md shadow-gray-600" src='https://www.justuno.com/wp-content/uploads/2021/10/anthony-painter.webp' alt='profile' />
                    <div className="flex flex-col text-left pl-5 align-center justify-center">
                        <p className="text-lg font-bold tracking-wide">Anthony Painter</p>
                        <p className="text-lg font-light tracking-wide">Director of Operations, Ellus & Krue</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CaseStudies;