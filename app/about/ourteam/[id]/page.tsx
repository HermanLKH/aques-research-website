import { getProfile } from "@/hooks/getProfile";
import { Profile } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { getActivityPhotos } from "@/hooks/getActivityPhotos";
import ActivityImages from "./_components/ActivityImages";
import React from "react";

const ProfilePage = async ({ params }: { params: { id: string } }) => {
  const profileData: Profile | null = await getProfile(params.id);

  if (!profileData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl text-gray-600">Profile not found.</p>
      </div>
    );
  }

  const formattedBio = profileData.bio?.split("\n").map((text, index) => (
    <React.Fragment key={index}>
      {index == 0 && (
        <>
          <span>&emsp;</span>
          <span>&emsp;</span>
        </>
      )}
      {text}
    </React.Fragment>
  ));

  const activityImages = await getActivityPhotos(params.id);

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 p-6 min-h-screen">
      {/* Section 1: Profile Image, Name, Role & Contact Information */}
      <div className="md:flex md:flex-row items-center py-8">
        {/* Profile Image */}
        <div className="md:flex-shrink-0 md:mr-8 mb-4 md:mb-0">
          <Image
            src={profileData.profile_picture || "/images/elonmusk.jpg"}
            width={800}
            height={800}
            alt={profileData.name}
            className="h-48 w-full object-contain md:object-cover md:w-48 rounded-lg"
          />
        </div>
        {/* Profile Info */}
        <div>
          {/* Role */}
          <div className="uppercase tracking-wide text-xs sm:text-sm text-cyan-600 font-semibold mb-2">
            {profileData.role || "Role not specified"}
          </div>
          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            {profileData.name || "Name not specified"}
          </h1>
          {/* Institution */}
          <p className="text-sm sm:text-md text-gray-700 mt-2">
            {profileData.institution || "Institution not specified"}
          </p>
          {/* Location */}
          <p className="text-sm sm:text-md text-gray-500 mt-1">
            {profileData.location || "Location not specified"}
          </p>
          {/* Contact Information */}
          <div className="flex justify-start space-x-4 mt-4">
            {profileData?.contact?.linkedin && (
              <Link href={profileData.contact.linkedin}>
                <FaLinkedin className="text-2xl sm:text-3xl text-gray-700 hover:text-cyan-600 transition-colors duration-200" />
              </Link>
            )}
            {profileData?.contact?.email && (
              <Link href={`mailto:${profileData.contact.email}`}>
                <FaEnvelope className="text-2xl sm:text-3xl text-gray-700 hover:text-cyan-600 transition-colors duration-200" />
              </Link>
            )}
            {profileData?.contact?.research && (
              <Link href={profileData.contact.research}>
                <FaGoogleScholar className="text-2xl sm:text-3xl text-gray-700 hover:text-cyan-600 transition-colors duration-200" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Section 2: Biography & Area of Interests */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Biography */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8 md:col-span-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
            Biography
          </h2>
          <div className="prose prose-sm md:prose lg:prose-lg max-w-none text-gray-800 leading-relaxed text-justify">
            {formattedBio || "Biography not specified"}
          </div>
        </div>
        {/* Areas of Interest */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
            Areas of Interest
          </h2>
          <ul className="space-y-2">
            {profileData.area_of_interest?.map((interest, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="text-cyan-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base">{interest}</span>
              </li>
            ))}
            {(!profileData?.area_of_interest ||
              profileData?.area_of_interest.length === 0) && (
              <li className="text-gray-600 text-sm sm:text-base">
                No area of interest specified
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Section 3: Activity Photos */}
      <ActivityImages activityImages={activityImages} />

      {/* Section 4: Back to Team Button */}
      <div className="text-center mt-8">
        <Button
          asChild
          variant="outline"
          className="text-cyan-600 border-cyan-600 hover:bg-cyan-600 hover:text-white transition-colors duration-200 text-sm sm:text-base"
        >
          <Link href="/about/ourteam">Back to Team</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;
