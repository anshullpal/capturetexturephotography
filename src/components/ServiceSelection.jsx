import React, { useState } from "react";
import emailjs from '@emailjs/browser';


function ServiceSelection() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const services = [
    "Photography",
    "Videography",
    "Photo Editing",
    "Video Editing",
    "Drone Shots",
    "Event Coverage",
    "Portraits",
    "Product Photography",
    "Wedding Shoots",
    "Corporate Shoots",
  ];

  const handleCheckboxChange = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const templateParams = {
      to_name: "Service Provider",
      name: formData.name || "No name provided",
      phone: formData.phone || "No phone provided",
      email: formData.email || "No email provided",
      message: formData.message || "No message provided",
      selected_services: selectedServices.length > 0 ? selectedServices : ["No services selected"],
    };
  
    console.log(templateParams); // Debugging
  
    emailjs
      .send(
        "service_mtpv2ne", // Replace with your EmailJS service ID
        "template_hc196xj", // Replace with your EmailJS template ID
        templateParams,
        "W2hfU_ejNw3z5qAkG" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your request has been sent!");
        },
        (error) => {
          console.error("FAILED...", error);
          alert("There was an error sending your request.");
        }
      );
  };
  
  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Select Your Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-4 border rounded-lg cursor-pointer ${
                selectedServices.includes(service)
                  ? "bg-indigo-100 border-indigo-500"
                  : "bg-white border-gray-300"
              }`}
            >
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox text-indigo-600"
                  checked={selectedServices.includes(service)}
                  onChange={() => handleCheckboxChange(service)}
                />
                <span className="text-gray-800">{service}</span>
              </label>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-indigo-200 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 focus:ring focus:ring-indigo-200 focus:outline-none"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default ServiceSelection;
