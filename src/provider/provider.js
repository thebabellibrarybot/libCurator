import React, { createContext, useState, useContext } from 'react';

// Create the context
export const MyContext = createContext();

// Create the provider component
export const MyProvider = ({ children }) => {

    const [count, setCount] = useState(0);
    const [collection, setCollection] = useState({}); // { 'collection_name': [{'tomb_name': {'tomb_info'}}, {'tomb_name2': {'tomb_info'}}] }
    const [myCollections, setMyCollections] = useState([]); // [ {'collection_name': [{'tomb_name': {'tomb_info'}}, 'tomb_name2': {'tomb_info'}}], {'collection_name': [{'tomb_name': {'tomb_info'}}, {'tomb_name2': {'tomb_info'}}] } ]

    // Define any methods or functions to modify the state
    const incrementCount = () => {
    setCount(count + 1);
    };
    // add a tomb to collection
    const addCollectionObj = (obj) => {
        setCollection(collection + obj)
    }
    // remove a tomb from a collection
    const removeCollectionObj = (obj) => {
        setCollection(collection - obj)
    }
    // add a collection to myCollections
    const createCollection = (obj) => {
        setMyCollections(myCollections + obj)
    }
    // delete collection from myCollections
    const removeCollection = (obj) => {
        setMyCollections(myCollections - obj)
    }


    // Provide the state and methods to the child components
    const contextValue = {
    count,
    incrementCount,
    collection,
    addCollectionObj,
    removeCollectionObj,
    myCollections,
    createCollection,
    removeCollection
    };

    return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};
// Custom hook to access the context
export const useMyContext = () => {
    return useContext(MyContext);
  };