import React from "react";

// Sample card data
const cardData = [
  {
    id: 1,
    title: "Wound Dressing",
    description: "Professional care for faster healing and infection prevention.",
    buttonText: "Enquire Now",
    icon: "/path/to/icon1.png", // Replace with your image path
  },
  {
    id: 2,
    title: "Enema @ Home",
    description: "Safe and hygienic enema services in the comfort of your home.",
    buttonText: "Enquire Now",
    icon: "/path/to/icon2.png", // Replace with your image path
  },
  {
    id: 3,
    title: "IV Infusion",
    description: "Skilled nurses to administer IV fluids and medications at home.",
    buttonText: "Enquire Now",
    icon: "/path/to/icon3.png", // Replace with your image path
  },
];

const ServiceCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-between"
        >
          <img
            src={card.icon}
            alt={card.title}
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-center">{card.title}</h3>
          <p className="text-center text-gray-600 mb-4">{card.description}</p>
          <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition duration-300">
            {card.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
