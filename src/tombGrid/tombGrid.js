import React, { useEffect, useState } from 'react';
import './tombGrid.css';
import ChangePage from './changePage.js';
import { useMyContext } from '../provider/provider';
import SVG from '../useHooks/useSVG';

const TombGrid = ({ data, type }) => {
  const itemsPerPage = 12;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  const { collection, addCollectionObj, removeCollectionObj, incrementCount, decrementCount } = useMyContext();

  console.log(collection, 'collection');

  // i need to take another look at this datatype
  const isTombActive = (tomb) => {
    return Object.entries(collection).some(([collectionName, tombArray]) => {
      try {
        return tombArray.some((tombObj) => Object.keys(tombObj)[0] === tomb.tomb_id);
      } catch (error) {
        console.error('An error occurred while checking tomb existence:', error);
        return false;
      }   
    });
  };

  const handleAddTombToCollection = (tomb) => {
    addCollectionObj({ [tomb.tomb_id]: tomb });
    incrementCount(tomb);
  };

  const handleRemoveTombFromCollection = (tomb) => {
    removeCollectionObj({[tomb.tomb_id]: tomb});
    decrementCount();
  };

  const changePage = (value) => {
    const nextPage = currentPage + value;
    if (nextPage >= 1 && nextPage <= totalPages) {
      setCurrentPage(nextPage);
    }
  };

  return (
    <div className="body">
      <div className="header-sm">
        <h3>{type}</h3>
      </div>

      <ChangePage changePage={changePage} curPage={currentPage} maxPage={totalPages} />

      <div className="grid-body">
        {currentPageData.map((tombs, index) => {
          const tomb = tombs.tomb_id ? tombs : tombs[Object.keys(tombs)[0]];
          return (
          <div className={`tomb ${isTombActive(tomb) ? 'active-tomb' : ''}`} key={index}>
            <div>
              <h1>{tomb.tomb_id}</h1>
              <p>{tomb.tomb_type}</p>
              <p>{tomb.tomb_location}</p>
            </div>
            <div onClick={() => handleAddTombToCollection(tomb)}>
              <SVG ability="add" />
            </div>
            <div onClick={() => handleRemoveTombFromCollection(tomb)}>
              <SVG ability="sub" />
            </div>
            {/*isTombActive(tomb) && <div>active already</div>*/}
          </div>
          )
          })}
      </div>
    </div>
  );
};

export default TombGrid;
