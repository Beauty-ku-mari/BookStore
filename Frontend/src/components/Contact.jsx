// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const ContactForm  = () => {
return(

 const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



)
};