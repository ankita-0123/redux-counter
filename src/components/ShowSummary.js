import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const ShowSummary = () => {
  const { id } = useParams();
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setSummary(response.data.summary);
        setImage(response.data.image.medium); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchSummary();
  }, [id]);

  const handleBookTicket = () => {
    console.log('Booking ticket for show with ID:', id);
  };

  return (
    <div className="container">
      <h2>Show Summary</h2>
      {image && <img src={image} alt="Show Poster" />}
      <p>{summary}</p>
      <Link to={`/booking/${id}`} className="btn btn-primary" onClick={handleBookTicket}>
        Book Ticket
      </Link>
    </div>
  );
};

export default ShowSummary;