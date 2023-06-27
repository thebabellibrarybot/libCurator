import React, { createContext, useState, useContext } from 'react';

// Create the context
export const MyContext = createContext();

// Create the provider component
export const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [collection, setCollection] = useState({}); // { 'collection_name': [{'tomb_name': {'tomb_info'}}, {'tomb_name2': {'tomb_info'}}] }
  const [myCollections, setMyCollections] = useState([]);  // [ {'collection_name': [{'tomb_name': {'tomb_info'}}, 'tomb_name2': {'tomb_info'}}], {'collection_name': [{'tomb_name': {'tomb_info'}}, {'tomb_name2': {'tomb_info'}}] } ]

  const incrementCount = (tomb) => {
    //const tombExists = Object.values(collection).flat().some(item => item.tomb_name === tomb.tomb_name);
    
    //if (!tombExists) {
      setCount(count + 1);
    //}
  };
  
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  

  // mk random word if needed
  const generateRandomWord = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const wordLength = 8; // Length of the random word
  
    let randomWord = '';
    for (let i = 0; i < wordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomWord += characters[randomIndex];
    }
  
    return randomWord;
  };
  

  const addCollectionObj = (obj) => {
    setCollection((prevCollection) => {
      // Check if the collection is empty and no collection with a name exists
      if (Object.keys(prevCollection).length === 0 && prevCollection.constructor === Object) {
        const randomWord = generateRandomWord(); // Function to generate a random word
        const collectionName = `untitled_${randomWord}`;
        const timestamp = Date.now();
        const date = new Date(timestamp).toLocaleString();
        return { [collectionName]: [obj], 'date_created': date, 'user': 'user_id' };
      }
      const collectionName = Object.keys(prevCollection)[0];
      const newObj = {
        ...prevCollection,
        [collectionName]: [...prevCollection[collectionName], obj],
      }
      return newObj;
    });
  };
  

  const removeCollectionObj = (objKey) => {
    setCollection((prevCollection) => {

        const collectionName = Object.keys(prevCollection)[0];
        const originalArray = prevCollection[collectionName];
        const updatedArray = originalArray.filter((obj) => Object.keys(obj)[0] !== Object.keys(objKey)[0] );
        
        const updatedObj = {
            [collectionName]: updatedArray
        };

        return updatedObj;
    });
  };

  const createCollection = (collectionName) => {
    setCollection({ [collectionName]: [] });
    setMyCollections((prevCollections) => [...prevCollections, { collection_name: collectionName, tombs: [] }]);
  };

  const saveCollection = () => {
    setMyCollections((prevCollections) => [...prevCollections, collection]);
  };

  const removeCollection = (collectionName) => {
    setMyCollections((prevCollections) =>
      prevCollections.filter((collection) => collection.collection_name !== collectionName)
    );
  };

  // Provide the state and methods to the child components
  const contextValue = {
    count,
    setCount,
    incrementCount,
    decrementCount,

    collection,
    addCollectionObj,
    removeCollectionObj,
    setCollection,

    myCollections,
    createCollection,
    saveCollection,
    removeCollection,
  };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};

// Custom hook to access the context
export const useMyContext = () => {
  return useContext(MyContext);
};
