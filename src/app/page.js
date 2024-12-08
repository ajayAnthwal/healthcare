"use client";
import { Button, Heading } from "@medusajs/ui";
import banner from "../assets/images/homepage/banner.svg";
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
import WhyChooseUs from "@/components/WhyChooseUs";

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
      <div>
        <WhyChooseUs/>
     </div>
      {/* ---------------Statistics Section---------------- */}
      <div className="container mx-auto mt-20 px-4">
        <div
          className="flex items-center justify-between p-6"
          style={{
            background:
              "linear-gradient(118.43deg, #1AE2E9 -5.9%, #019196 42.54%, #03676A 90.98%)",
            borderRadius: "28px",
          }}
        >
          <div className="flex flex-col items-center">
            <Image
              src={stethoscope_arrow}
              alt="Patients Served"
              width={32}
              height={32}
              className="mb-2"
            />
            <h4 className="text-2xl font-bold text-white">1Mn+</h4>
            <p className="text-sm text-white opacity-75">
              PATIENTS SERVED A YEAR
            </p>
          </div>

          <div className="border-l border-white h-12 mx-6"></div>

          <div className="flex flex-col items-center">
            <Image
              src={relax}
              alt="Care Hours"
              width={32}
              height={32}
              className="mb-2"
            />
            <h4 className="text-2xl font-bold text-white">5Mn+</h4>
            <p className="text-sm text-white opacity-75">
              CARE HOURS PERFORMED
            </p>
          </div>

          <div className="border-l border-white h-12 mx-6"></div>

          <div className="flex flex-col items-center">
            <Image
              src={emoji_people}
              alt="Care Givers"
              width={32}
              height={32}
              className="mb-2"
            />
            <h4 className="text-2xl font-bold text-white">2K+</h4>
            <p className="text-sm text-white opacity-75">CARE GIVERS</p>
          </div>

          <div className="border-l border-white h-12 mx-6"></div>

          <div className="flex flex-col items-center">
            <Image
              src={star}
              alt="Rating"
              width={32}
              height={32}
              className="mb-2"
            />
            <h4 className="text-2xl font-bold text-white">4.9</h4>
            <p className="text-sm text-white opacity-75">RATING ON GOOGLE</p>
          </div>
        </div>
      </div>
      {/* ---------------Booking Button---------------- */}
      <div className="flex justify-center mt-10 mb-10">
        <Button className="px-10 py-4 bg-[#009A9F] rounded-[32px] text-white">
          Book an Appointment
        </Button>
      </div>
      <div className="flex flex-col mt-20 items-center">
        <h1 className="text-3xl mt-4 font-bold">PR/in the news</h1>
        <p className=" mt-4 w-1/2 text-center" style={{ color: "#6C87AE" }}>
          Stay updated with the latest news and media coverage about Apollo
          Homecare. Our commitment to providing quality care has made us a
          trusted name in the healthcare industry, and our recent achievements
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
        <h1 className="text-3xl mt-4 font-bold">PR/in the news</h1>
        <p className=" mt-4 w-1/2 text-center" style={{ color: "#6C87AE" }}>
          Stay updated with the latest news and media coverage about Apollo
          Homecare. Our commitment to providing quality care has made us a
          trusted name in the healthcare industry, and our recent achievements
          are gaining attention.
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
              <h4 className="mt-3 font-bold text-md">{item.title}</h4>
              <p className="mt-3 text-sm" style={{ color: "#696969" }}>
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
