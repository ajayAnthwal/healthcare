import React from "react";

const actions = [
  {
    title: "My Purchases",
    description: "Track, return or re-buy items",
    // icon: <FaShoppingBag className="text-teal-500" />,
  },
  {
    title: "My Subscriptions",
    description: "Track and manage short term & long term services",
    // icon: <FaChartLine className="text-teal-500" />,
  },
  {
    title: "My Health Files",
    description: "Upload and manage your reports/prescriptions",
    // icon: <FaFileMedical className="text-teal-500" />,
  },
  {
    title: "Payment options",
    description: "Edit or add payment options",
    // icon: <FaCreditCard className="text-teal-500" />,
  },
  {
    title: "Addresses",
    description: "Track and manage address",
    // icon: <FaHome className="text-teal-500" />,
  },
  {
    title: "Edit Profile",
    description: "Manage Login, Name and Mobile Number",
    // icon: <FaUserEdit className="text-teal-500" />,
  },
];

const ProfileActions = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {actions.map((action, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 border-b border-gray-200"
          >
            {/* <div className="text-2xl">{action.icon}</div> */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {action.title}
              </h3>
              <p className="text-sm text-gray-600">{action.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileActions;
