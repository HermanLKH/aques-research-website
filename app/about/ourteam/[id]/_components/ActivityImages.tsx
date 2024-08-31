"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";

const ActivityImages = ({ activityImages }: { activityImages: string[] }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = useCallback((img: string) => {
    setSelectedImage(img);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <div>
      {activityImages.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Activity Images
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {activityImages.map((img, index) => (
              <div
                key={index}
                className="relative h-48 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                onClick={() => openModal(img)}
              >
                <Image
                  src={img}
                  alt={`Activity image ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative w-4/5 h-4/5">
            <Image
              src={selectedImage}
              alt="Enlarged activity image"
              fill
              style={{ objectFit: "contain" }}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
      {/* No activity image */}
      {activityImages.length === 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Activity Images
          </h2>
          <p className="text-gray-600">No activity image available</p>
        </div>
      )}
    </div>
  );
};

export default ActivityImages;
