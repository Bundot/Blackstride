import React, { useState } from 'react';
interface ContactFormProps {
  className?: string;
  buttonClassName?: string;
  inputClassName?: string;
  textareaClassName?: string;
  labelClassName?: string;
  darkMode?: boolean;
}
export const ContactForm: React.FC<ContactFormProps> = ({
  className = '',
  buttonClassName = '',
  inputClassName = '',
  textareaClassName = '',
  labelClassName = '',
  darkMode = false
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real application, you would send the form data to a server here
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };
  const baseInputClass = `w-full p-3 rounded-md border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-blue-500 focus:border-blue-500' : 'focus:ring-green-500 focus:border-green-500'} ${inputClassName}`;
  const baseTextareaClass = `w-full p-3 rounded-md border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-blue-500 focus:border-blue-500' : 'focus:ring-green-500 focus:border-green-500'} ${textareaClassName}`;
  const baseLabelClass = `block mb-2 font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'} ${labelClassName}`;
  const baseButtonClass = `w-full p-3 rounded-md font-semibold transition-colors ${darkMode ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500' : 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500'} focus:outline-none focus:ring-2 focus:ring-offset-2 ${buttonClassName}`;
  return <div className={`${className}`}>
      {submitted ? <div className={`p-4 mb-4 text-sm rounded-md ${darkMode ? 'bg-green-800 text-green-100' : 'bg-green-100 text-green-700'}`}>
          Thank you for your message! We'll get back to you soon.
        </div> : null}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className={baseLabelClass}>
            Your Name
          </label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={baseInputClass} placeholder="John Doe" />
          {errors.name && <p className={`mt-1 text-sm ${darkMode ? 'text-red-400' : 'text-red-500'}`}>
              {errors.name}
            </p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className={baseLabelClass}>
            Your Email
          </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={baseInputClass} placeholder="john@example.com" />
          {errors.email && <p className={`mt-1 text-sm ${darkMode ? 'text-red-400' : 'text-red-500'}`}>
              {errors.email}
            </p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className={baseLabelClass}>
            Your Message
          </label>
          <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={baseTextareaClass} placeholder="How can we help you?" />
          {errors.message && <p className={`mt-1 text-sm ${darkMode ? 'text-red-400' : 'text-red-500'}`}>
              {errors.message}
            </p>}
        </div>
        <button type="submit" className={baseButtonClass}>
          Send Message
        </button>
      </form>
    </div>;
};