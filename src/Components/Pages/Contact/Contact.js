import React, { useRef } from "react";
import { toast } from "react-hot-toast";
import cover from "../../../images/cover/contact.png";
import emailjs from "@emailjs/browser";
import Section from "../../shared/Section/Section";

const Contact = () => {
  return (
    <>
      <div className="min-h-screen my-5">
        <div
          className="sticky top-3"
        >
          <Section>CONTACT</Section>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 my-10 md:mt-32">
          <Email />
          <div className="md:w-1/2">
            <img src={cover} className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};
const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_8jhccnt", "template_ia2h00c", form.current, {
        publicKey: "bEhGI7jzT_ISdXSK2",
      })
      .then(
        () => {
        },
        (error) => {
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="md:w-1/2 w-full">
      <div data-aos="flip-up" data-aos-duration="1000" className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Name"
          name="user_name"
          className="input border-[#be94f9]"
          required
        />
      </div>
      <div data-aos="flip-up" data-aos-duration="2000" className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="Email"
          name="user_email"
          className="input border-[#be94f9]"
          required
        />
      </div>
      <div data-aos="flip-up" data-aos-duration="3000" className="form-control">
        <label className="label">
          <span className="label-text">Message</span>
        </label>
        <textarea
          type="text"
          placeholder="Message"
          name="message"
          className="textarea border-[#be94f9]"
          required
        />
      </div>
      <div data-aos="zoom-in" data-aos-duration="3000" className="form-control mt-6">
        <button
          value="send"
          className="bg-[#be94f9] hover:font-semibold py-4 rounded-lg hover:rounded-2xl hover:drop-shadow-xl hover:text-slate-800"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};
export default Contact;
