"use client";
import React from "react";
import FamilyMembers from "@/components/Profile/FamilyMembers";
import ProfileActions from "@/components/Profile/ProfileActions";

const ProfilePage = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-6">
        Home &gt;&gt; <span className="text-gray-900 font-semibold">(UserName) Profile</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section - Family Members */}
        <div className="bg-white  rounded-lg p-6 w-full md:w-[332px] border-r border-[#C0C0C0]">
          <FamilyMembers />
        </div>

        {/* Right Section - Profile Actions */}
        <div className="bg-white  rounded-lg p-6 w-full md:w-2/3">
          <ProfileActions />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
