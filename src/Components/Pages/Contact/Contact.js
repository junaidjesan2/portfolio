import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import cover from "../../../images/cover/contact.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hfew5xe",
        "template_72u8ytg",
        form.current,
        "pMBjk8F1065ZzKj_U"
      )
      .then(
        (result) => {
          if ((result.EmailJSResponseStatus = "OK")) {
            toast.success("Email Send Successfully");
            e.target.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="h-screen">
        <div className="sticky top-3 my-8">
          <h1 className="text-3xl text-start font-semibold ">Contact</h1>
          <hr className="w-28 " />
        </div>
        <div className="flex items-center gap-10 mt-32">
          <form onSubmit={sendEmail} ref={form} className="w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="user_name"
                className="input input-secondary"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                className="input input-secondary"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                type="text"
                placeholder="Message"
                name="message"
                className="textarea textarea-secondary"
              />
            </div>
            <div className="form-control mt-6">
              <button value="send" className="btn btn-secondary">
                Send
              </button>
            </div>
          </form>
          <div className="w-1/2">
            <img src={cover} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
