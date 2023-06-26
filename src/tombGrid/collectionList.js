import React from 'react';
import './collectionList.css';

const CollectionList = ({ tombs }) => {
  return (
    <ul className="collection-list">
      {tombs.map((tomb) => (
        <li key={tomb.id} className="collection-item">
          <p>{tomb.name}</p>
          <p>Date Created: {tomb.dateCreated}</p>
          <p>Username: {tomb.username}</p>
        </li>
      ))}
    </ul>
  );
};

export default CollectionList;
