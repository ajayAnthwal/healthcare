"use client";

import { useState } from "react";
import nurseAtHome from "@/assets/images/homepage/nurseAtHome.png";
import longTermCare from "@/assets/images/homepage/longTermCare.png";
import rehab from "@/assets/images/homepage/rehab.png";
import motherBabyCare from "@/assets/images/homepage/motherBabyCare.png";
import elderCare from "@/assets/images/homepage/elderCare.png";
import icuSetup from "@/assets/images/homepage/icuSetup.png";
import doctorsNurses from "@/assets/images/homepage/doctorsNurses.png";
import medicalProcedures from "@/assets/images/homepage/medicalProcedures.png";
import vaccinationAtHome from "@/assets/images/homepage/vaccinationAtHome.png";
import diagnosticServices from "@/assets/images/homepage/diagnosticServices.png";
import { Card } from "../Card";

const ComprehensiveServices = () => {
  const services = [
    {
      title: "Nurse at Home",
      image: nurseAtHome,
    },
    {
      title: "Long Term Assisted Care",
      image: longTermCare,
    },
    {
      title: "Rehab Packages",
      image: rehab,
    },
    {
      title: "Mother & Baby Care",
      image: motherBabyCare,
    },
    {
      title: "Elder Care",
      image: elderCare,
    },
    {
      title: "ICU Setup at Home",
      image: icuSetup,
    },
    {
      title: "Doctors/ Nurses/ Physiotherapists Visits at Home",
      image: doctorsNurses,
    },
    {
      title: "Medical Procedures at Home",
      image: medicalProcedures,
    },
    {
      title: "Vaccinations at Home",
      image: vaccinationAtHome,
    },
    {
      title: "Diagnostic Services",
      image: diagnosticServices,
    },
    {
      title: "Vaccinations at Home",
      image: vaccinationAtHome,
    },
    {
      title: "Diagnostic Services",
      image: diagnosticServices,
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center mt-5 container w-full ">
        <h1 className="text-[32px] font-semibold mb-5 text-[#031432] leading-[48px]">
          Our Comprehensive Services
        </h1>
        <p className="text-[#6C87AE] w-full lg:w-[60%] text-center text-base">
          Explore a range of healthcare services tailored to meet your needs. At
          Apollo Homecare, we provide flexible, high-quality support designed
          for every stage of life and wellness.
        </p>
      </div>
      <div className="w-full container mx-auto mb-[100px]">
        {/* Mobile View */}
        <div className="md:hidden flex flex-wrap gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[calc(50%-8px)] sm:w-[calc(33.33%-8px)] p-2"
            >
              <Card title={service.title} image={service.image} />
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-6 gap-5">
          {services.map((service, index) => (
            <div key={index}>
              <Card title={service.title} image={service.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServices;
