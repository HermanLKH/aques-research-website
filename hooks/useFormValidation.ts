// useFormValidation.ts
"use client"

import { EmailFormState } from "@/lib/types";
import { useState } from "react";

export function useFormValidation(initialState: EmailFormState) {
  const [formData, setFormData] = useState<EmailFormState>(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};
    if (!formData.full_name) newErrors.fullName = "Full name is required.";
    if (!formData.email_id) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email_id)) {
      newErrors.email = "Email format is invalid.";
    }
    if (!formData.phone_num) newErrors.phoneNum = "Phone number is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData: EmailFormState) => ({
      ...prevData,
      [id]: value,
    }));
    if (errors[id]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "",
      }));
    }
  };

  return {
    formData,
    errors,
    handleChange,
    validateForm,
  };
}
