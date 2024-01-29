import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './quote.css';

const Quote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Make an API request when the component mounts
    const fetchRandomQuote = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/random');
        setQuote(response.data.content);
      } catch (error) {
        console.error('Error fetching random quote:', error);
      }
    };

    fetchRandomQuote();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="container1">
        <div className = "quote">
      <h2>Random Quote:</h2>
      <p>{quote}</p>
      </div>
    </div>
  );
};

export default Quote;
