// get the first folio info 
// timeline: basic timeline of  #tomb in collection :timeline
// get #tombs per year from collection :timeline
export const getNumTombsPerYear = (collection) => {
    const years = {};
    const tombs = collection[Object.keys(collection)[0]];
    try {
        tombs.forEach((tomb) => {
        const tombID = Object.keys(tomb)[0];
        const tombInfo = tomb[tombID];
        const year = tombInfo.tomb_date;
        if (year in years) {
            years[year] += 1; // Increment the count for the existing year
        } else {
            years[year] = 1; // Initialize the count for a new year
        }
        });
        return years;
    } catch (error) {
        return null;
    }
};
// get #locations per year from collection :timeline
export const getNumLocationsPerYear = (collection) => {
    const years = {};
    const tombs = collection[Object.keys(collection)[0]];
    try {
      tombs.forEach((tomb) => {
        const tombID = Object.keys(tomb)[0];
        const tombInfo = tomb[tombID];
        const year = tombInfo.tomb_date;
        const location = tombInfo.tomb_location;
  
        if (year in years) {
          // Check if the location is unique for the year
          if (!years[year].has(location)) {
            years[year].add(location); // Add the unique location to the Set
            years[year].count += 1; // Increment the count for the existing year
          }
        } else {
          years[year] = new Set([location]); // Initialize the Set with the first location
          years[year].count = 1; // Initialize the count for a new year
        }
      });
  
      // Transform the years object to {year: count} pairs
      const result = {};
      for (const year in years) {
        result[year] = years[year].count;
      }
      return result;
    } catch (error) {
      return null;
    }
  };  


// geomap: basic geo map of each tomb in collection :geomap
// get #tombs per location :geomap
export const getNumTombsPerLocation = (collection) => {
    const locations = {};
  
    try {
      const tombs = collection[Object.keys(collection)[0]];
  
      tombs.forEach((tomb) => {
        const tombID = Object.keys(tomb)[0];
        const tombInfo = tomb[tombID];
        const location = tombInfo.tomb_location;
  
        if (location in locations) {
          // Increment the count for the existing location
          locations[location].count += 1;
        } else {
          const newLocation = {
            location: location,
            count: 1,
            lat: tombInfo.coords.lat,
            lng: tombInfo.coords.lng
          };
          locations[location] = newLocation; // Initialize the count for a new location
        }
      });
  
      // Convert the locations object to an array of location objects
      return Object.values(locations);
    } catch (error) {
      return null;
    }
  };
  
// get #types per location :geomap
export const getNumTypesPerLocation = (collection) => {
    const locations = {};
  
    try {
      const tombs = collection[Object.keys(collection)[0]];
  
      tombs.forEach((tomb) => {
        const tombID = Object.keys(tomb)[0];
        const tombInfo = tomb[tombID];
        const location = tombInfo.tomb_type;
  
        if (location in locations) {
          // Increment the count for the existing location
          locations[location].count += 1;
        } else {
          const newLocation = {
            location: location,
            count: 1,
            lat: tombInfo.coords.lat,
            lng: tombInfo.coords.lng
          };
          locations[location] = newLocation; // Initialize the count for a new location
        }
      });
  
      // Convert the locations object to an array of location objects
      return Object.values(locations);
    } catch (error) {
      return null;
    }
  };


export function getFirstFolioURL(url, tombId) {
    return fetch(url)
      .then(response => response.json())
      .then(jsonData => {
        for (let i = 0; i < jsonData.length; i++) {
          if (jsonData[i].tomb_id === tombId) {
            return jsonData[i].folio_url;
          }
        }
        return null; // Return null if no matching object is found
      })
      .catch(error => {
        console.error('Error fetching or parsing JSON:', error);
        return null;
      });
  }
  


