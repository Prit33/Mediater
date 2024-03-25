import React from "react";

const Services = () => {
  return (
    <>
      <span id="mission"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-sky-500 dark:text-sky-500"
            >
              Mission
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-200 text-m"
            >
              Empowering collaboration and innovation, our mission is to
              seamlessly connect content creators with businesses, fostering
              meaningful partnerships in the digital landscape. By providing a
              dynamic platform that facilitates efficient communication, secure
              transactions, and insightful analytics, we aim to be the catalyst
              for creativity, growth, and success in the online content creation
              ecosystem. Our commitment lies in building a vibrant community
              where creators thrive, businesses prosper, and authentic
              collaborations flourish.
            </p>
          </div>

          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-sky-500 dark:text-sky-500"
            >
              Vision
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-200 text-m"
            >
              Envisioning a future where the boundaries between content creators
              and businesses dissolve, our app aspires to be the unparalleled
              hub for dynamic collaboration in the digital realm. We see a
              landscape where creativity knows no limits, and partnerships
              transcend traditional boundaries, resulting in a global network of
              thriving content ecosystems. By pioneering innovation, fostering
              inclusivity, and driving transformative connections, our vision is
              to shape the future of online collaboration, where every creator's
              voice is amplified, and every business finds its ideal
              collaborator effortlessly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
