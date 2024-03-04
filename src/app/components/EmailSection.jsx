import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import TwitterIcon from "../../../public/twitter-icon.svg";
import InstaIcon from "../../../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2  md:my-12 pt-20 py-8 gap-4 "
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I'm actively seeking fresh possibilities, and you're welcome to reach
          out to me anytime. Whether you have inquiries or simply want to drop a
          greeting, I'll make every effort to respond promptly.
        </p>
        <div className="socials flex flex-row justify-evenly md:justify-normal">
          <Link
            href="https://github.com/Kaustubh-Narwade"
            className="h-10 w-20 hover:scale-125 active:scale-105 duration-200"
          >
            <Image src={GithubIcon} alt="GitHub Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kaustubh-narwade-32b21b245/"
            className="h-20 w-20 hover:scale-125 active:scale-105 duration-200"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link
            href="https://twitter.com/Kaustubh1817"
            className="h-20 w-20 hover:scale-125 active:scale-105 duration-200"
          >
            <Image src={TwitterIcon} alt="Twitter Icon" />
          </Link>
          <Link
            href="https://www.instagram.com/"
            className="h-20 w-20 hover:scale-125 active:scale-105 duration-200"
          >
            <Image src={InstaIcon} alt="insta Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="flex flex-col "
        >
          <input
            type="hidden"
            name="access_key"
            value="eb38c88a-2293-4e5b-a265-be3496abbf20"
          />
          <input
            type="hidden"
            name="subject"
            value="(IMP) Portfolio connection for Kaustubh"
          />

          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block mb-2 text-sm font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="subject"
              name="name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-300 text-sm rounded-lg block w-full p-2.5 focus:border-[#fff]"
              placeholder="John"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-300 text-sm rounded-lg block w-full p-2.5 focus:border-[#fff]"
              placeholder="johndoe@gmail.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-300 text-sm rounded-lg block w-full p-2.5 mb-2 focus:border-[#fff]"
              placeholder="Leave your message here"
            />
            <button
              type="submit"
              className="px-5 py-2.5 border border-[#000000] rounded-lg bg-[#ffffff] mr-4 text-[#000] w-full font-semibold mt-4 hover:bg-[#cbd3d9] hover:border-[#000] active:scale-95 duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
