import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "-Prayag_gift_",
    text: "I do Online business through instagram. I haven't really thought of marketing my product since cost is just too high. Since the platform would assist in marketing in a cheap rate by connecting to micro influencer, It would be really helpful. ",
    img: "https://d1yei2z3i6k35z.cloudfront.net/5927876/657353d637873_355416957_778721383898886_5922994672076128725_n.jpg",
  },
  {
    id: 2,
    name: "- visualvoyager__",
    text: `We are a group of college students who started the production house - "Visual Voyagers". Currently it's very expensive to rent a high quality camera even for one day. It would be really great if we can monetise our content, even if it's low. `,
    img: "https://d1yei2z3i6k35z.cloudfront.net/5927876/65735457cb90d_342713289_1255759948382281_5627551466514372940_n.jpg",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <span id="testimonial"></span>

      <div className="py-10">
        <div className="container">
          {/* testimonial section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-19 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                      <img
                        src={img}
                        alt=""
                        className="block mx-auto h-[300px] w-full sm:w-[300px]"
                      />
                      <div className="space-y-4">
                        <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                          “{text}”
                        </p>
                        <h1 className="text-xl italic font-bold ">{name}</h1>
                      </div>
                      <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
