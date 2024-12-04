import React, { useState } from "react";
import { Send, CheckCircle, Loader } from "lucide-react";

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = true,
  errorMessage,
}) => (
  <div className="relative mb-6">
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`block w-full px-4 py-3 text-gray-900 bg-gray-50 border rounded-lg shadow-sm appearance-none dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 ${
        errorMessage
          ? "border-red-500 focus:ring-red-400"
          : "border-gray-300 focus:ring-blue-400"
      }`}
      placeholder=" "
    />
    <label
      htmlFor={name}
      className={`absolute text-sm duration-300 transform -translate-y-3 scale-75 top-3 left-4 origin-[0] bg-gray-50 px-1 dark:bg-gray-700 ${
        errorMessage ? "text-red-500" : "text-gray-500 dark:text-gray-400"
      } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:left-4 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:left-4`}
    >
      {label}
    </label>
    {errorMessage && (
      <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
    )}
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, submitted, error
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.message) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Prevent submission if validation fails

    setStatus("submitting");

    try {
      const response = await fetch(
        "https://formsubmit.co/ernestayitey65@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("submitted");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg dark:bg-gray-800 transition-all duration-300">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
        Get in Touch
      </h2>
      {status === "submitted" ? (
        <div className="text-center py-10">
          <CheckCircle className="mx-auto text-green-500 w-16 h-16 mb-4" />
          <p className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Thank you for reaching out!
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            I'll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            label="Name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            errorMessage={errors.name}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            errorMessage={errors.email}
          />
          <div className="relative mb-6">
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className={`block w-full px-4 py-3 text-gray-900 bg-gray-50 border rounded-lg shadow-sm appearance-none dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 ${
                errors.message
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
              placeholder=" "
            ></textarea>
            <label
              htmlFor="message"
              className={`absolute text-sm duration-300 transform -translate-y-3 scale-75 top-3 left-4 origin-[0] bg-gray-50 px-1 dark:bg-gray-700 ${
                errors.message
                  ? "text-red-500"
                  : "text-gray-500 dark:text-gray-400"
              } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:left-4 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:left-4`}
            >
              Message
            </label>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {status === "submitting" ? (
              <>
                <Loader className="animate-spin mr-2 h-5 w-5" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-500 text-center">
          There was an error submitting the form. Please try again.
        </p>
      )}
    </div>
  );
};

export default ContactForm;
