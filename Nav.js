import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://example-api.com/data');
      const data = await response.json();
      setApiData(data);
    };

    fetchData();
    const intervalId = setInterval(fetchData, 60000); // update data every 60 seconds
    return () => clearInterval(intervalId); // clear interval on unmount
  }, []);

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><a href="#">Home</a></li>
        <li className="nav__item"><a href="#">About</a></li>
        <li className="nav__item"><a href="#">Blog</a></li>
        <li className="nav__item"><a href="#">Contact</a></li>
      </ul>
      <div className="api-data">
        {apiData.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
