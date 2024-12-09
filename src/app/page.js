"use client";
import useEmblaCarousel from "embla-carousel-react";
import { Button, Heading } from "@medusajs/ui";
import banner from "../assets/images/homepage/banner.svg";
import whyChooseUs1 from "../assets/images/homepage/whyChooseUs1.png";
import chevronLeft from "../assets/images/homepage/chevron-left.svg";
import chevronRight from "../assets/images/homepage/chevron-right.svg";
import ourMission from "../assets/images/homepage/ourMission.svg";
import ourTeam from "../assets/images/homepage/ourTeam.svg";
import ourVision from "../assets/images/homepage/ourVision.svg";
import ourApproach from "../assets/images/homepage/ourApproach.svg";
import testimonial1 from "../assets/images/homepage/testimonial1.png";
import testimonial2 from "../assets/images/homepage/testimonial2.png";
import mediaCoverage from "../assets/images/homepage/mediaCoverage.png";
import healthcare from "@/assets/images/homepage/healthcare.png";
import stethoscope_arrow from "@/assets/images/homepage/stethoscope_arrow.png";
import relax from "@/assets/images/homepage/relax.png";
import emoji_people from "@/assets/images/homepage/emoji_people.png";
import star from "@/assets/images/homepage/star.png";

import Image from "next/image";
import { useState } from "react";
import ComprehensiveServices from "@/components/ComprehensiveServices";
import Homecare from "@/components/Homecare";

const Home = () => {
  const [currentTestimony, setCurrentTestimony] = useState(0);
  const options = ["Home", "Long term care", "Book", "Buy/Rent Equipments"];
  const abouts = [
    {
      image: ourMission,
      title: "Our Mission",
      desc: "To provide high-quality, accessible, and compassionate healthcare services within the comfort of home, enhancing patient well-being and recovery.",
    },
    {
      image: ourVision,
      title: "Our Vision",
      desc: "To redefine healthcare by making it more patient-centric, convenient, and reliable.",
    },
    {
      image: ourTeam,
      title: "Our Team",
      desc: "Apollo Homecare’s team consists of experienced doctors, skilled nurses, physiotherapists, and caregivers committed to exceptional home-based care.",
    },
    {
      image: ourApproach,
      title: "Our Approach",
      desc: "We blend advanced medical practices with a patient-first philosophy, ensuring every service is tailored to meet individual needs.",
    },
  ];

  const next = () => {
    setCurrentTestimony(currentTestimony + 1);
    emblaApi?.scrollNext();
  };

  const prev = () => {
    emblaApi?.scrollPrev();
    setCurrentTestimony(currentTestimony - 1);
  };

  const testimonials = [
    {
      date: "May 8, 2020",
      title: "Radhika S., Daughter of a patient",
      testimony:
        "Apollo Homecare has been a blessing for our family. The nurses and caregivers are skilled and compassionate, making my father’s recovery so much smoother. We couldn’t be happier with the service!",
      image: testimonial1,
    },
    {
      date: "May 8, 2020",
      title: "Sunita P., Family Member of a Patient",
      testimony:
        "The personalized care plans were exactly what we needed. Knowing that Apollo’s team is just a call away gives us peace of mind every day.",
      image: testimonial2,
    },
    {
      date: "May 8, 2020",
      title: "Anil K., Homecare Patient",
      testimony:
        "The convenience of homecare has been life-changing. Apollo Homecare provided us with everything we needed, from regular health check-ups to emergency support, all from the comfort of home.",
      image: testimonial1,
    },
  ];

  return (
    <div>
      <Image src={banner} alt="banner" className="w-full z-1" />
      <div className="flex flex-col items-center mt-5 container w-full mx-auto px-4">
        <ComprehensiveServices />
      </div>
      <div className="container mx-auto flex">
        <Image src={healthcare} alt="banner" className="w-[100%]" />
      </div>
      {/* ---------------Homecare Section---------------- */}
      <div>
        <Homecare />
      </div>
      {/* ---------------Why Choose Us Section---------------- */}
      <div className="mt-20 flex flex-col items-center container mx-auto px-4">
        <h1 className="text-[32px] font-bold leading-[48px] text-center text-[#031432]">
          Why Choose Us?
        </h1>
        <p className="text-[16px] font-normal leading-[24px] text-center text-[#6C87AE] mt-4 w-full sm:w-3/4 md:w-1/2 mx-auto">
          Choosing Apollo Homecare means choosing a healthcare provider that
          prioritizes your comfort, convenience, and well-being. Discover why
          countless families trust us to deliver exceptional care right at home.
        </p>
      </div>
      <div className="mt-5 flex flex-col sm:flex-row justify-center gap-[42px] container mx-auto px-4">
        {/* Image Section */}
        <Image
          className="w-full sm:w-auto sm:mr-20 rounded-[32px]"
          src={whyChooseUs1}
          alt="Why Choose Us 1"
        />

        {/* Text Section */}
        <div className="mt-4 text-center sm:text-left">
          <h1 className="text-[32px] leading-[48px] text-left text-[#031432] font-bold">
            Experienced Professionals
          </h1>
          <p className="text-[16px] leading-[24px] text-justify text-[#6C87AE] mt-4 sm:w-3/4">
            Our team includes highly skilled doctors, nurses, and caregivers
            with extensive experience in home-based healthcare.
          </p>

          <h1 className="text-[32px] leading-[48px] text-left text-[#031432] font-bold mt-8">
            Personalized Care Plans
          </h1>
          <p className="text-[16px] leading-[24px] text-justify text-[#6C87AE] mt-4 sm:w-3/4">
            We customize each care plan to fit individual health needs and
            lifestyles, ensuring the best possible outcomes.
          </p>

          <h1 className="text-[32px] leading-[48px] text-left text-[#031432] font-bold mt-8">
            24/7 Support
          </h1>
          <p className="text-[16px] leading-[24px] text-justify text-[#6C87AE] mt-4 sm:w-3/4">
            Receive round-the-clock assistance and support, so help is always
            just a call away.
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-col sm:flex-row justify-center gap-[42px] container mx-auto px-4">
        {/* Text Section */}
        <div className="mt-4 w-full sm:w-[90rem] sm:mr-20 text-center sm:text-left">
          <h1 className="text-[32px] leading-[48px] text-[#031432] font-bold">
            Advanced Technology
          </h1>
          <p className="text-[16px] leading-[24px] text-justify text-[#6C87AE] mt-4">
            From remote health monitoring to on-demand consultations, we use the
            latest technology to provide efficient and reliable care.
          </p>

          <h1 className="text-[32px] leading-[48px] text-[#031432] font-bold mt-8">
            Trusted Brand
          </h1>
          <p className="text-[16px] leading-[24px] text-justify text-[#6C87AE] mt-4">
            As part of the Apollo family, we bring a legacy of healthcare
            excellence and trust that our patients rely on.
          </p>

          <h1 className="text-[32px] leading-[48px] text-[#031432] font-bold mt-8">
            Affordable Care Options
          </h1>
          <p className="text-[16px] leading-[24px] text-justify text-[#6C87AE] mt-4">
            We offer cost-effective care solutions that provide value without
            compromising quality.
          </p>
        </div>

        {/* Image Section */}
        <Image
          src={whyChooseUs1}
          className="w-full sm:w-[40%] rounded-[32px]"
          alt="Why Choose Us 1"
        />
      </div>

      {/* ---------------Statistics Section---------------- */}
      <div className="container mx-auto mt-20 px-4">
        <div
          className="flex items-center justify-between p-[20px] px-[28px]"
          style={{
            background:
              "linear-gradient(118.43deg, #1AE2E9 -5.9%, #019196 42.54%, #03676A 90.98%)",
            borderRadius: "28px",
          }}
        >
          {/* Patients Served Section */}
          <div className="flex flex-col items-center p-[20px]">
            <Image
              src={stethoscope_arrow}
              alt="Patients Served"
              width={50}
              height={50}
              className="mb-2"
            />
            <h4 className="text-[34px] font-[600] leading-[51px] tracking-[0.13px] text-white">
              1Mn+
            </h4>
            <p className="text-[18px] font-[600] leading-[27px] text-left text-white opacity-75">
              PATIENTS SERVED A YEAR
            </p>
          </div>

          <div className="border-l border-white h-12 mx-6"></div>

          {/* Care Hours Section */}
          <div className="flex flex-col items-center p-[20px]">
            <Image
              src={relax}
              alt="Care Hours"
              width={50}
              height={50}
              className="mb-2"
            />
            <h4 className="text-[34px] font-[600] leading-[51px] tracking-[0.13px] text-white">
              5Mn+
            </h4>
            <p className="text-[18px] font-[600] leading-[27px] text-left text-white opacity-75">
              CARE HOURS PERFORMED
            </p>
          </div>

          <div className="border-l border-white h-12 mx-6"></div>

          {/* Care Givers Section */}
          <div className="flex flex-col items-center p-[20px]">
            <Image
              src={emoji_people}
              alt="Care Givers"
              width={50}
              height={50}
              className="mb-2"
            />
            <h4 className="text-[34px] font-[600] leading-[51px] tracking-[0.13px] text-white">
              2K+
            </h4>
            <p className="text-[18px] font-[600] leading-[27px] text-left text-white opacity-75">
              CARE GIVERS
            </p>
          </div>

          <div className="border-l border-white h-12 mx-6"></div>

          {/* Rating Section */}
          <div className="flex flex-col items-center p-[20px]">
            <Image
              src={star}
              alt="Rating"
              width={50}
              height={50}
              className="mb-2"
            />
            <h4 className="text-[34px] font-[600] leading-[51px] tracking-[0.13px] text-white">
              4.9
            </h4>
            <p className="text-[18px] font-[600] leading-[27px] text-left text-white opacity-75">
              RATING ON GOOGLE
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-20 items-center">
        <h1 className="text-[32px] font-bold leading-[48px] text-left mt-4">
          PR/in the news
        </h1>
        <p className="mt-4 w-1/2 text-center text-[#6C87AE] text-[16px] font-[400] leading-[24px]">
          Stay updated with the latest news and media coverage about Apollo
          Homecare. Our commitment to <br/> providing quality care has made us a
          trusted name in the healthcare industry, and our recent <br/> achievements
          are gaining attention.
        </p>

        <div
          className="mt-10 flex w-3/4 container mx-auto"
          style={{
            boxShadow: "0px 15px 35.8px 0px rgba(0, 0, 0, 0.25)",
            borderRadius: "20px",
          }}
        >
          <Image
            src={mediaCoverage}
            alt="media coverage"
            style={{
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
            }}
          />
          <div className="m-5">
            <h1 className="text-3xl mt-4 font-bold">Recent Media Coverage</h1>
            <p className="mt-4">
              &quot;Apollo Homecare’s New Homecare Initiative Gains Recognition
              in Healthcare Magazine&quot;
            </p>
            <p>
              &quot;Apollo Homecare Featured in National News for Pioneering
              Virtual Health Services&quot;
            </p>
          </div>
        </div>
        {/* -----------------Carousel Button------------------ */}
        <div className="flex justify-center items-center mt-10">
          <Image onClick={prev} src={chevronLeft} alt="prev" />
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 m-3"
              style={{
                borderRadius: "100%",
                backgroundColor:
                  currentTestimony === index ? "#009A9F" : "#C7C7C7",
              }}
            ></div>
          ))}
          <Image onClick={next} src={chevronRight} alt="next" />
        </div>
      </div>
      {/* ---------------About Apollo---------------- */}
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-3xl mt-4 font-bold">About Apollo Homecare</h1>
        <p className=" mt-4 text-center" style={{ color: "#6C87AE" }}>
          Apollo Homecare is dedicated to bringing world-class healthcare
          services directly to your home. As a <br /> trusted leader in
          healthcare, we combine professional medical expertise with
          personalized care to <br />
          support you and your loved ones through every step of your health
          journey.
        </p>
      </div>
      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap gap-5 justify-center">
          {abouts.map((item, index) => (
            <div
              key={index}
              className="p-10"
              style={{
                maxWidth: "20rem",
                boxShadow: "0px 10px 40px 0px rgba(18, 18, 18, 0.10)",
                borderRadius: "0px 0px 10px 10px",
                borderTop: "3px solid var(--Green-Normal, #009A9F)",
              }}
            >
              <Image src={item.image} alt="image" />
              <h4 className="mt-3 font-[700] text-[14px] leading-[28px] tracking-[0.03em] text-left text-[#121212]">
                {item.title}
              </h4>
              <p className="mt-3 text-[12px] font-[400] leading-[16px] tracking-[0.03em] text-left text-[#696969]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
