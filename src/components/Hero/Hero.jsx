import React from "react";

const Hero = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full sm:max-w-[380px] md:max-w-[630px]"
            />
            
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Connecting Brands with {" "}
              <span className="text-sky-500">Creativity</span>
            </h1>
            <h2><span className="text-sky-500  italic">Your Gateway to Digital Collaboration!</span></h2>

            <p data-aos="fade-up" data-aos-delay="300">
              At Mediater,we redefine collaboration by seamlessly connecting content creators
              with businesses, fostering a dynamic ecosystem of innovation and creativity. 
              Our platform serves as the catalyst for strategic alliances, unlocking endless 
              possibilities in the digital landscape. Join the revolution, where every collaboration 
              is an opportunity to elevate and innovate.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
