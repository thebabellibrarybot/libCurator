import React, { useState } from 'react';
import './collectionlist.css';
import { Link } from 'react-router-dom';
import ChangePage from './changePage.js';

const CollectionList = ({ tombs }) => {

  const itemsPerPage = 12;
  const totalPages = Math.ceil(tombs.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTombs = tombs.slice(startIndex, endIndex);

  const changePage = (value) => {
    const nextPage = currentPage + value;
    if (nextPage >= 1 && nextPage <= totalPages) {
      setCurrentPage(nextPage);
    }
  };

  return (
    <>
      {tombs.length >= 1 ? (
        <div className="body">
          <ul className="collection-list">
            <li className="collection-row">
              <p>Collection Name</p>
              <p>Date Created</p>
              <p>Username</p>
              <p></p>
            </li>
            {currentTombs.map((tomb, index) => (
              <li key={index} className={`collection-row ${index % 2 === 0 ? 'even-row' : 'odd-row'}`}>
                <p>{index}: {Object.keys(tomb)[0]}</p>
                <p>Date Created: {tomb.date_created}</p>
                <p>Username: {tomb.user}</p>
                <p>
                  <Link to={`/view-stats/${Object.keys(tomb)[0]}`}>View Stats</Link>
                </p>
              </li>
            ))}
          </ul>
          <ChangePage changePage={changePage} curPage={currentPage} maxPage={totalPages} />
        </div>
      ) : (
        <div className="body">
          <p>User's hasn't saved any collections yet</p>
        </div>
      )}
    </>
  );
};

export default CollectionList;