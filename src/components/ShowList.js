import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>Show List</h2>
      {shows.map((show) => (
        <div key={show.show.id} className="show-item">
          <div className="show-item-details">
            <h3>{show.show.name}</h3>
            <p>{show.show.summary}</p>
            <Link to={`/summary/${show.show.id}`} className="btn btn-primary">
              View Summary
            </Link>
          </div>
          {show.show.image && <img src={show.show.image.medium} alt={show.show.name} className="show-item-image" />}
        </div>
      ))}
    </div>
  );
};

export default ShowList;