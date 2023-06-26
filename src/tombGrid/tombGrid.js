import React, { useState } from 'react';
import './tombGrid.css';
import ChangePage from './changePage.js';
import CollectionButton from './collectionButton';


const TombGrid = ({data, type}) => {

  const itemsPerPage = 12; // Number of items to display per page
  const totalPages = Math.ceil(data.length / itemsPerPage); // Calculate total pages based on data length
  const [currentPage, setCurrentPage] = useState(1); // Current page state

  // Calculate start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the data to display on the current page
  const currentPageData = data.slice(startIndex, endIndex);

  function changePage(value) {
    const nextPage = currentPage + value;
    if (nextPage >= 1 && nextPage <= totalPages) {
      setCurrentPage(nextPage);
    }
  }

  return (
    <div className="body">

      <div className="header-sm">
        <h1>{type}</h1>
        <CollectionButton/>
      </div>

      <ChangePage changePage={changePage} curPage = {currentPage} maxPage = {totalPages}/>

      <div className="grid-body">
        {currentPageData.map((tomb, index) => (
          <div className="tomb" key={index}>
              <h1>{tomb.tomb_id}</h1>
              <p>{tomb.tomb_type}</p>
              <p>{tomb.tomb_location}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TombGrid;
