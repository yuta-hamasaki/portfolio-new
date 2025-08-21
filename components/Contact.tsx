'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const serviceKey = process.env.NEXT_PUBLIC_SERVICE_KEY as string;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
  const pubkey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) {
      console.error('Form reference is null');
      return;
    }

    if (!serviceKey || !templateId || !pubkey) {
      console.error('Missing environment variables');
      return;
    }

    emailjs.sendForm(serviceKey, templateId, form.current, pubkey)
      .then((result) => {
        toast.success('Sent!');
        if (form.current) {
          form.current.reset();
        }
      })
      .catch((error) => {
        toast.error('Faild sending...', error.text);
      });
  };

  return (
    <div className="container mb-5 mx-auto pb-8 py-16" id="contact">
      <h1 className="text-center text-3xl font-bold mb-4">Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className="w-full mt-8 px-10 flex justify-center flex-col md:px-20 md:mx-5">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm text-gray-600">Name</label>
          <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm text-gray-600">Message</label>
          <textarea id="message" name="message" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required></textarea>
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-800 focus:outline-none focus:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
