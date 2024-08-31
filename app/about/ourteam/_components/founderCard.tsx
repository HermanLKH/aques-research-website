"use client";

import { Profile } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaGoogleScholar } from "react-icons/fa6";

export default function FounderCard({ founder }: { founder: Profile }) {
  const router = useRouter();

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("a")) return;
    router.push(`/about/ourteam/${founder.id}`);
  };

  return (
    <div
      key={founder.id}
      className="w-1/3 mx-auto my-6 bg-gradient-to-br from-cyan-500 to-cyan-500 text-white rounded-xl shadow-lg dark:bg-gradient-to-br dark:from-cyan-700 dark:to-cyan-500 relative cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col"
      onClick={handleCardClick}
    >
      {/* Profile Image with Overlay Effect */}
      <div className="relative w-full h-[320px] overflow-hidden rounded-t-xl bg-black/50">
        <Image
          src={founder.profile_picture || "/images/elonmusk.jpg"}
          fill={true}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          alt={`Profile Picture of ${founder.name}`}
          className="object-cover duration-300"
          placeholder="blur"
          blurDataURL={founder.profile_picture || "/images/elonmusk.jpg"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content Area with Highlighted Design */}
      <div className="p-5 border-t-4 border-cyan-300 dark:border-cyan-400 rounded-b-xl bg-white dark:bg-gray-800 transform -translate-y-8 mx-4 shadow-md flex-grow flex flex-col">
        <h6 className="text-xs font-semibold uppercase text-cyan-600 dark:text-cyan-400 mb-1">
          Founder
        </h6>
        <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-justify">
          {founder.name}
        </h5>
        <p className="mb-4 font-medium text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-5 text-justify">
          {founder?.bio ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque neque non iure id, doloribus dolor fuga placeat nostrum maxime architecto! Eum ducimus voluptatem nesciunt fugit quidem quod officia adipisci maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        </p>
        {founder?.contact?.research && (
          <Link href={founder.contact.research} className="mt-auto">
            <FaGoogleScholar className="text-3xl text-gray-700 hover:text-cyan-600 transition-colors duration-200 cursor-pointer" />
          </Link>
        )}
      </div>
    </div>
  );
}
