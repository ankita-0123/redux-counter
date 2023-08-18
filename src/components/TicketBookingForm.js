import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './styles.css';

const TicketBookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('bookingDetails', JSON.stringify(formData));

    
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
    setBookingSuccess(true);
    navigate('/booking/success');
  };

  return (
    <div className="container">
      <h2>Ticket Booking Form</h2>
      <h3>Movie ID: {id}</h3>
      {bookingSuccess ? (
        <div className="success-message">Ticket booked successfully!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
          </div>
          <button type="submit" className="btn btn-success">
            Book Ticket
          </button>
        </form>
      )}
    </div>
  );
};

export default TicketBookingForm;