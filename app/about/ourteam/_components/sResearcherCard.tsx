"use client";

import { Profile } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaGoogleScholar } from "react-icons/fa6";

export default function SResearcherCard({
  sResearcher,
}: {
  sResearcher: Profile;
}) {
  const router = useRouter();

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("a")) return;
    router.push(`/about/ourteam/${sResearcher.id}`);
  };

  return (
    <div
      key={sResearcher.id}
      className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 m-4 relative cursor-pointer transition-transform transform hover:scale-105 flex flex-col"
      onClick={handleCardClick}
    >
      {/* Profile Image */}
      <div className="relative w-full h-[240px] overflow-hidden rounded-t-lg">
        <Image
          src={sResearcher?.profile_picture || "/images/elonmusk.jpg"}
          fill={true}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={sResearcher?.profile_picture || "/images/elonmusk.jpg"}
          alt={`Profile Picture of ${sResearcher.name}`}
          className="object-cover"
        />
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow">
        <h6 className="text-sm text-cyan-600 font-normal">Senior Researcher</h6>
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2 text-justify">
          {sResearcher.name}
        </h5>
        <p className="mb-4 font-medium text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 text-justify">
          {sResearcher?.bio ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. At similique tempora, aliquam nihil sequi id porro dolorum. Voluptates aspernatur voluptate ab culpa esse, quam obcaecati error dignissimos doloremque! Eos, quibusdam!"}
        </p>
        {sResearcher?.contact?.research && (
          <Link href={sResearcher.contact.research} className="mt-auto">
            <FaGoogleScholar className="text-3xl text-gray-700 hover:text-cyan-600 transition-colors duration-200 cursor-pointer" />
          </Link>
        )}
      </div>
    </div>
  );
}
