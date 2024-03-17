import React, { useRef } from "react";
import { toast } from "react-hot-toast";
import cover from "../../../images/cover/contact.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm("service_8jhccnt", "template_ia2h00c", form.current, {
  //       publicKey: "WbySdTkjjVO95MNFn",
  //     })
  //     .then(
  //       () => {
  //         toast("Email Send Successfully");
  //       },
  //       (error) => {
  //         toast("FAILED...", error.text);
  //       }
  //     );
  // };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8jhccnt', 'template_ia2h00c', form.current, {
        publicKey: 'FoJ4EcR04kqQNB7q7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <div className="min-h-screen my-5">
        <div className="sticky top-3 py-5">
          <h1 className="md:text-3xl text-[#be94f9] text-xl flex gap-3 items-center text-start font-semibold">
            Contact
          </h1>
          <hr className="md:w-28 w-16" />
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 my-10 md:mt-32">
          <form ref={form} onSubmit={sendEmail} className="md:w-1/2 w-full">
            <div className="form-control">
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
            <div className="form-control">
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
            <div className="form-control">
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
            <div className="form-control mt-6">
              <button
                value="send"
                className="bg-[#be94f9] py-4 rounded-lg hover:rounded-2xl hover:drop-shadow-xl hover:text-slate-800"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
          <div className="md:w-1/2">
            <img src={cover} className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
