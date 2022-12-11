import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hfew5xe', 'template_72u8ytg', form.current, 'pMBjk8F1065ZzKj_U')
            .then((result) => {
                if (result.EmailJSResponseStatus = 'OK') {
                    toast.success('Email Send Successfully')
                    e.target.reset()
                }
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <form onSubmit={sendEmail} ref={form} className="card-body">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name='user_name' className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" name='user_email' className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Message</span>
                </label>
                <textarea type="text" placeholder="Message" name='message' className="textarea textarea-primary"/>
            </div>
            <div className="form-control mt-6">
                <button value='send' className="btn btn-primary">Send</button>
            </div>
        </form>

    );
};

export default Contact;