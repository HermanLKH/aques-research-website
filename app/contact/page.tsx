"use client";
import React from "react";
import { useFormValidation } from "@/hooks/useFormValidation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EmailFormState } from "@/lib/types";

// ContactUs Component
export default function ContactUs() {
  const initialState: EmailFormState = {
    full_name: "",
    email_id: "",
    phone_num: "",
    message: "",
  };

  const { formData, errors, handleChange, validateForm } =
    useFormValidation(initialState);

  // List of email recipients
  const recipients = ["myaquesgroup@gmail.com"];

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const mailtoLink = `mailto:${recipients.join(
      ","
    )}?subject=${encodeURIComponent(
      `AquES: email from ${formData.full_name}`
    )}&body=${encodeURIComponent(
      `To AquES,\n${formData.message}\n\nfrom ${formData.full_name}\n${formData.email_id}\n${formData.phone_num}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* Section 1: Title & Description */}
      <section className="flex flex-col items-center my-12 sm:my-16 px-4">
        <div className="w-11/12 md:w-3/4 lg:w-3/5">
          <h1 className="font-bold text-4xl sm:text-5xl text-center">
            Contact <span className="text-cyan-600">AquES</span>
          </h1>
          <p className="text-center font-light mt-2 text-sm sm:text-base">
            Reach out to us for detailed information. Your feedback is
            invaluable in helping us enhance our research and outreach efforts.
          </p>
        </div>
      </section>

      {/* Section 2: Contact Form */}
      <section className="bg-slate-50 py-8 sm:py-10 flex justify-center px-4">
        <div className="w-full sm:w-3/4 lg:w-4/5 flex flex-col items-center">
          {/* Subheader */}
          <h2 className="font-semibold text-2xl sm:text-3xl text-center mb-5">
            Send us an Email
          </h2>
          {/* Form */}
          <form className="w-full" onSubmit={handleSubmit}>
            {/* Full name input */}
            <div className="mb-4">
              <Label htmlFor="full_name" className="text-sm sm:text-base">
                Full Name
              </Label>
              <Input
                type="text"
                id="full_name"
                name="full_name"
                placeholder="Enter your name"
                value={formData.full_name}
                onChange={handleChange}
                className={errors.fullName ? "border-red-500" : ""}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs sm:text-sm">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email and Phone Number */}
            <div className="flex flex-col sm:flex-row mb-4">
              <div className="w-full sm:w-1/2 sm:pr-2 mb-4 sm:mb-0">
                <Label htmlFor="email_id" className="text-sm sm:text-base">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email_id"
                  name="email_id"
                  placeholder="Enter your email"
                  value={formData.email_id}
                  onChange={handleChange}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs sm:text-sm">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="w-full sm:w-1/2 sm:pl-2">
                <Label htmlFor="phone_num" className="text-sm sm:text-base">
                  Phone Number
                </Label>
                <Input
                  type="text"
                  id="phone_num"
                  name="phone_num"
                  placeholder="Enter your phone number"
                  value={formData.phone_num}
                  onChange={handleChange}
                  className={errors.phoneNum ? "border-red-500" : ""}
                />
                {errors.phoneNum && (
                  <p className="text-red-500 text-xs sm:text-sm">
                    {errors.phoneNum}
                  </p>
                )}
              </div>
            </div>

            {/* Message Textarea */}
            <div className="mb-6">
              <Label htmlFor="message" className="text-sm sm:text-base">
                Your message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "border-red-500" : ""}
              />
              {errors.message && (
                <p className="text-red-500 text-xs sm:text-sm">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <Button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm sm:text-base"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
