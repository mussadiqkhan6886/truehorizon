'use client';

import React, { useState } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    companySite: '',
    companyName: '',
    email: '',
    companySize: '',
    companyRevenue: '',
    budget: '',
    message: '',
    service: '',
  });

  const [status, setStatus] = useState("") 

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      companyName: data.companyName,
      companySite: data.companySite,
      companySize: data.companySize,
      companyRevenue: data.companyRevenue,
      service: data.service,
      budget: data.budget,
      message: data.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        'service_lf7tzbf', // 🔹 Your EmailJS service ID
        'template_xb1e3ay', // 🔹 Replace with your EmailJS template ID
        templateParams,
        '65CmXKqEPg5W8j6gG' // 🔹 Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Your message has been sent successfully!');
          setData({
            firstName: '',
            lastName: '',
            phone: '',
            companySite: '',
            companyName: '',
            email: '',
            companySize: '',
            companyRevenue: '',
            budget: '',
            message: '',
            service: '',
          });
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus('Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <div className='flex min-h-screen flex-col gap-4 px-2 sm:px-0'>
      <div className='flex flex-col gap-2 lg:flex-row'>
        <div className='border relative overflow-hidden border-zinc-800 rounded-lg p-6 min-w-[310px]'>
          <div className='absolute -bottom-[60px] w-[100px] h-[50px] -right-[20px] bg-purple-800 blur-3xl' />
          <div className='flex gap-2 mb-2'>
            <FaEnvelope />
            <p>E-mail</p>
          </div>
          <p>truehorizonai@gmail.com</p>
        </div>
        <div className='border relative overflow-hidden border-zinc-800 rounded-lg p-6 min-w-[310px]'>
          <div className='absolute -bottom-[60px] w-[100px] h-[50px] -right-[20px] bg-purple-800 blur-3xl' />
          <div className='flex gap-2 mb-2 '>
            <FaPhone />
            <p>Phone</p>
          </div>
          <p>signup below</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className='p-3 rounded-lg mb-6 border gap-2 border-zinc-800 grid grid-cols-2'
      >
        <div className='flex flex-col gap-2'>
          <label className='text-sm mt-1' htmlFor='firstName'>
            First Name
          </label>
          <input
            value={data.firstName}
            onChange={handleChange}
            name='firstName'
            type='text'
            id='firstName'
            placeholder='Arman'
            className='outline-none border border-zinc-800 p-2 text-zinc-200'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-sm mt-1' htmlFor='lastName'>
            Last Name
          </label>
          <input
            value={data.lastName}
            onChange={handleChange}
            name='lastName'
            type='text'
            id='lastName'
            placeholder='Khan'
            className='outline-none border border-zinc-800 p-2 text-zinc-200'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-sm mt-1' htmlFor='email'>
            Email
          </label>
          <input
            value={data.email}
            onChange={handleChange}
            name='email'
            type='email'
            id='email'
            className='outline-none border border-zinc-800 p-2 text-zinc-200'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-sm mt-1' htmlFor='companySite'>
            Company Site
          </label>
          <input
            value={data.companySite}
            onChange={handleChange}
            name='companySite'
            type='text'
            id='companySite'
            className='outline-none border border-zinc-800 p-2 text-zinc-200'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-sm mt-1' htmlFor='phone'>
            Phone
          </label>
          <input
            value={data.phone}
            onChange={handleChange}
            name='phone'
            type='phone'
            id='phone'
            className='outline-none border border-zinc-800 p-2 text-zinc-200'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-sm mt-1' htmlFor='companyName'>
            Company Name
          </label>
          <input
            value={data.companyName}
            onChange={handleChange}
            name='companyName'
            type='text'
            id='companyName'
            className='outline-none border border-zinc-800 p-2 text-zinc-200'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-sm mt-1' htmlFor='companySize'>
            Company Size
          </label>
          <input
            value={data.companySize}
            onChange={handleChange}
            name='companySize'
            type='text'
            id='companySize'
            className='outline-none border border-zinc-800 p-2 text-zinc-200'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-sm mt-1' htmlFor='revenue'>
            Company Annual Revenue
          </label>
          <input
            value={data.companyRevenue}
            onChange={handleChange}
            name='companyRevenue'
            type='text'
            id='revenue'
            className='outline-none border border-zinc-800 p-2 text-zinc-200'
          />
        </div>
        <div className='flex flex-col gap-2 col-span-2'>
          <label className='text-sm mt-1' htmlFor='projectBudget'>
            Project Budget
          </label>
          <input
            value={data.budget}
            onChange={handleChange}
            name='budget'
            type='text'
            id='projectBudget'
            placeholder='$10k-$50k'
            className='outline-none border border-zinc-800 p-2 text-zinc-200'
          />
        </div>
        <div className='col-span-2 flex flex-col gap-2'>
          <label className='text-sm mt-1' htmlFor='services'>
            What services are you looking for
          </label>
          <textarea
            value={data.service}
            onChange={handleChange}
            name='service'
            id='services'
            className='outline-none border border-zinc-800 p-2 text-zinc-200'
          />
        </div>
        <div className='col-span-2 flex flex-col gap-2'>
          <label className='text-sm mt-1' htmlFor='message'>
            Message
          </label>
          <textarea
            value={data.message}
            onChange={handleChange}
            name='message'
            id='message'
            placeholder='Hi, I am Jane. I want help with...'
            className='outline-none border border-zinc-800 p-2 text-zinc-200'
          />
        </div>
        <button
          type='submit'
          className='bg-purple-800 py-2 mt-2 rounded-sm text-white col-span-2'
        >
          Submit Form
        </button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default ContactSection;
