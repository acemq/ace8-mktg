"use client";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/style.css";
const Index = () => {
  return (
    <section className="bg-white relative px-[3rem] sm:px-[0] pt-[3rem] sm:pt-[0] sm:flex sm:pb-[8rem] pb-[5rem] sm:pr-[10rem]  justify-between">
      <div className="bg-[#080A0F] sm:px-[1rem] sm:py-[12rem] sm:pb-[6rem] relative flex flex-col sm:rounded-tr-none rounded-tl-[40px] sm:rounded-tl-none rounded-br-[40px]  h-[20rem] sm:h-auto">
        <img className="sm:w-[70rem]" src="/map.png" alt="" />
        <img src="/contact_info.png" className="sm:w-[50rem] hidden absolute self-center bottom-[-7rem]" alt="" />
        <ContactInfo />
      </div>
      <Form />
    </section>
  );
}

export default Index;

const Form = () => {
  const router = useRouter()
  const [firstName, setFirstName] = useState('')
  const [loading, setLoading] = useState(null)
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [emailError, setEmailError] = useState(null)
  const [role, setRole] = useState('')
  const [message, setMessage] = useState('')
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    setEmailError(EMAIL_REGEX.test(email))
  }, [email])


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!emailError) {
      toast.error("Enter a valid Email Address");
      setLoading(false);
      return;
    }
    try {
      const json = await fetch(
        "https://formspree.io/f/mwpvdabg",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: "This is a ContactUS email from ACEMQ",
            message: {
              firstName,
              lastName,
              phoneNumber,
              email,
              description: message,
              role,
              companyName,
            },
            toaddress: "randall.mcclure@acemq.com",
            toaddress2: "info@acemq.com",
          }),
        }
      );

      const response = await json.json();
      console.log(response);
      if (response) {
        setLoading(false);
        router.push(`/thank-you?source=contact-us`);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setCompanyName("");
        setRole("");
        setMessage("");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="text-black sm:w-[55rem] pt-[8rem] flex flex-col">
      <ToastContainer />
      <h2 className="sub-header w-[25rem] self-center text-center sm:w-auto">
        <span className="text-[#9B86FE]">Tell Us</span> About Yourself
      </h2>
      <form action="" className="sm:mt-[7rem] mt-[3rem]">
        <div className="sm:flex justify-between gap-[2rem]">
          <div className="flex py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem] sm:flex-1">
            <img src="/name_.svg" className="w-[1.6rem]" alt="name" />
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full text-black focus:outline-none text-[1.2rem]"
              placeholder="First Name*"
            />
          </div>
          <div className="flex py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem] sm:flex-1">
            <img src="/name_.svg" className="w-[1.6rem]" alt="name" />
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full text-black focus:outline-none text-[1.2rem]"
              placeholder="Last Name*"
            />
          </div>
        </div>
        <div className="sm:flex justify-between gap-[2rem]">
          <div className="flex py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem] sm:flex-1">
            <img src="/email.svg" className="w-[1.6rem]" alt="name" />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="sm:w-full w-auto text-black focus:outline-none text-[1.2rem]"
              placeholder="Email Address*"
            />
          </div>
          <div className="flex py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem] sm:flex-1">
            <PhoneInput
              country={"us"}
              value={phoneNumber}
              onChange={(value) => setPhoneNumber(value)}
              type="tel"
              className="sm:w-full phone-input w-auto text-black focus:outline-none text-[1.2rem]"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="sm:flex justify-between gap-[2rem]">
          <div className="flex py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem] sm:flex-1">
            <img src="/company.svg" className="w-[1.6rem]" alt="name" />
            <input
              type="text"
              value={companyName}
              required
              onChange={(e) => setCompanyName(e.target.value)}
              className="sm:w-full text-black focus:outline-none text-[1.2rem]"
              placeholder="Company*"
            />
          </div>
          <div className="flex py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem] sm:flex-1">
            <img src="/role.svg" className="w-[1.6rem]" alt="name" />
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="sm:w-full text-black focus:outline-none text-[1.2rem]"
              placeholder="Role"
            />
          </div>
        </div>
        <div className="flex items-start  py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem]">
          <img src="/message_.svg" className="mt-[.4rem]" alt="name" />
          <textarea
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="sm:w-full text-black focus:outline-none text-[1.2rem] h-[8rem] sm:h-[14rem] resize-none"
            placeholder="Project Description"
          />
        </div>

        {/* <div className="sm:flex items-center justify-between hidden">
                    <button className="font-[400] bg-[#9B86FE] text-white rounded-[.8rem] px-[.6rem] h-[4rem] py-[.5rem] text-[1.3rem] w-[11rem]">Choose File</button>
                    <p className="text-[1.12rem] text-[#232323]">PDF, Word, Excel, PNG, JPEG, and TXT files with less than 25MB in size are supported.</p>
                </div> */}

        <button onClick={handleSubmit} className="mt-[2rem] self-center sm:self-start px-[3rem] py-[1rem] text-white bg-conner-gradient rounded-[1rem]">{loading ? 'loading..' : 'Submit'}</button>
      </form>
    </div>
  )
}


const ContactInfo = () => {
  return (
    <div className="bg-[#232323] sm:ml-[9rem]  sm:translate-y-[10rem] sm:max-w-[45rem] max-w-[27rem] w-[27rem] sm:w-[45rem] mx-auto   rounded-[1rem] sm:px-[4.5rem] px-[2.5rem] sm:py-[2.7rem] py-[2rem] flex justify-between">
      <div className="">
        <h3 className="font-[700] text-[1.5rem]">Email Us</h3>
        <p className="text-[1.2rem] sm:text-[1.7rem]">info@ace8.io</p>
      </div>
      <div className="">
        <h3 className="font-[700] text-[1.5rem]">Call Us</h3>
        <p className="text-[1.2rem] sm:text-[1.7rem]">305-204-2607</p>
      </div>
    </div>
  )
}