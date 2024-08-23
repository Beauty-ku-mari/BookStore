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



)
};