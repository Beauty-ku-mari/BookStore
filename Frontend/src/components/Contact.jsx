// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const ContactForm  = () => {


 const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

return(

<div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
<h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>










</form>


)
};