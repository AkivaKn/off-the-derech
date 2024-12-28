import { useState } from "react";
import submitContactForm from "../api/email";

export default function Contact() {
  const [formValidation, setFormValidation] = useState({
    name: null,
    email: null,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (formValidation[name] !== null) {
      name === "name" && validateName(value);
      name === "email" && validateEmail(value);
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const validateName = (value) => {
    if (value === "") {
      setFormValidation((prevValidation) => ({
        ...prevValidation,
        name: false,
      }));
      return true;
    } else {
      setFormValidation((prevValidation) => ({
        ...prevValidation,
        name: true,
      }));
      return true;
    }
  };
  const validateEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(value)) {
      setFormValidation((prevValidation) => ({
        ...prevValidation,
        email: true,
      }));
      return true;
    } else {
      setFormValidation((prevValidation) => ({
        ...prevValidation,
        email: false,
      }));
      return false;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isValidName = validateName(formData.name);
      const isValidEmail = validateEmail(formData.email);
      if (isValidName && isValidEmail) {
        await submitContactForm(formData);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setFormValidation({
          name: null,
          email: null,
        });
        alert("Thank you. Your message has been sent.");
      }
    } catch (error) {
      alert("Sorry that didn't work. Please try again later.");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-1 items-center justify-center bg-backgroundColor p-10">
      <section className="flex flex-col items-center justify-center lg:w-2/3 xl:w-1/2">
        <h2 className="mb-1.5 text-lg font-bold text-primaryColor md:mb-2 md:text-xl lg:mb-3 lg:text-xl xl:mb-4 xl:text-3xl 2xl:text-4xl">
          Contact Us
        </h2>
        <h3 className="mb-2.5 text-sm md:mb-4 md:text-base lg:mb-5 lg:text-lg xl:mb-6 xl:text-xl">
          {
            "For more information, or to submit a blog post, please send us an enquiry and we'll get back to you as soon as possible."
          }
        </h3>
        <form
          className="flex w-full flex-col items-center gap-3 md:gap-3.5 xl:gap-4"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="relative w-full">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              onBlur={() => validateName(formData.name)}
              placeholder="Name"
              className={`peer h-10 w-full appearance-none rounded-xl border-2 px-3 py-2 text-sm leading-tight text-gray-700 shadow placeholder:text-transparent focus:outline-none md:h-14 md:text-base lg:rounded-3xl lg:text-lg xl:h-16 xl:px-5 xl:py-4 xl:text-xl ${formValidation.name ? "border-green-500" : formValidation.name === false ? "border-red-500" : "focus:ring"}`}
            />
            <label
              htmlFor="name"
              className="absolute left-0 top-2 ml-2 -translate-y-5 bg-white px-1 text-base text-gray-500 duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 peer-focus:px-1 md:top-3 md:-translate-y-7 md:text-lg md:peer-focus:-translate-y-7 lg:top-4 lg:ml-3 lg:-translate-y-8 lg:text-xl lg:peer-focus:-translate-y-8"
            >
              Name
            </label>
            <p
              className={`text-xs italic text-red-500 md:text-sm lg:mt-0.5 lg:text-base ${formValidation.name !== false && "invisible"}`}
            >
              Please provide a name.
            </p>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              onBlur={() => validateEmail(formData.email)}
              placeholder="Email"
              className={`peer h-10 w-full appearance-none rounded-xl border-2 px-3 py-2 text-sm leading-tight text-gray-700 shadow placeholder:text-transparent focus:outline-none md:h-14 md:text-base lg:rounded-3xl lg:text-lg xl:h-16 xl:px-5 xl:py-4 xl:text-xl ${formValidation.email ? "border-green-500" : formValidation.email === false ? "border-red-500" : "focus:ring"}`}
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-2 ml-2 -translate-y-5 bg-white px-1 text-base text-gray-500 duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 peer-focus:px-1 md:top-3 md:-translate-y-7 md:text-lg md:peer-focus:-translate-y-7 lg:top-4 lg:ml-3 lg:-translate-y-8 lg:text-xl lg:peer-focus:-translate-y-8"
            >
              Email
            </label>
            <p
              className={`text-xs italic text-red-500 md:text-sm lg:mt-0.5 lg:text-base ${formValidation.email !== false && "invisible"}`}
            >
              Please provide a valid email.
            </p>
          </div>
          <div className="relative w-full">
            <textarea
              rows={4}
              id="message"
              name="message"
              value={formData.message || ""}
              onChange={handleChange}
              placeholder="Message"
              className="peer w-full appearance-none rounded-xl border-2 px-3 py-2 text-sm leading-tight text-gray-700 shadow placeholder:text-transparent focus:outline-none focus:ring md:text-base lg:rounded-3xl lg:text-lg xl:px-5 xl:py-4 xl:text-xl"
            />
            <label
              htmlFor="message"
              className="absolute left-0 top-2 ml-2 -translate-y-5 bg-white px-1 text-base text-gray-500 duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 peer-focus:px-1 md:top-3 md:-translate-y-7 md:text-lg md:peer-focus:-translate-y-7 lg:top-4 lg:ml-3 lg:-translate-y-8 lg:text-xl lg:peer-focus:-translate-y-8"
            >
              Message
            </label>
          </div>
          <button className="rounded-xl bg-primaryColor px-4 py-2 text-center text-sm font-bold text-secondaryColor shadow-md transition-all hover:bg-hoverColor hover:text-secondaryColor hover:shadow-lg focus:bg-hoverColor focus:text-secondaryColor focus:shadow-none md:py-3 md:text-base lg:rounded-3xl lg:px-5 xl:px-8 xl:py-4 xl:text-lg 2xl:px-10 2xl:py-5 2xl:text-xl">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
