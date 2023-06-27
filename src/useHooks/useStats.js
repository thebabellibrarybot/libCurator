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
    const tombs = collection[Object.keys(collection)[0]];
    try {
        tombs.forEach((tomb) => {
        const tombID = Object.keys(tomb)[0];
        const tombInfo = tomb[tombID];
        const location = tombInfo.tomb_location;
        if (location in locations) {
            locations[location] += 1; // Increment the count for the existing location
        } else {
            locations[location] = 1; // Initialize the count for a new location
        }
        });
        return locations;
    } catch (error) {
        return null;
    }
};
// get #types per location :geomap
export const getNumTypesPerLocation = (collection) => {
    const locations = {};
    const tombs = collection[Object.keys(collection)[0]];
    try {
      tombs.forEach((tomb) => {
        const tombID = Object.keys(tomb)[0];
        const tombInfo = tomb[tombID];
        const location = tombInfo.tomb_location;
        const type = tombInfo.tomb_type;
  
        if (location in locations) {
          if (!locations[location].has(type)) {
            locations[location].add(type);
            locations[location].count += 1;
          }
        } else {
          locations[location] = new Set([type]);
          locations[location].count = 1;
        }
      });
  
      // Transform the locations object to {location: count} pairs
      const result = {};
      for (const location in locations) {
        result[location] = locations[location].count;
      }
      return result;
    } catch (error) {
      return null;
    }
  };

// mk sure data is fit for D3
export const getFitData = (data) => {
    const fitData = [];
    for (const key in data) {
        fitData.push({name: key, value: data[key]});
    }
    return fitData;
}
// GET COORDS FOR GEOMAPS
export function getCoordinates(location) {
    // Replace this with your own logic to fetch coordinates based on the location
    // This is just a dummy implementation
    const coordinates = {
      France: { lat: 48.8566, lng: 2.3522 },
      England: { lat: 51.5074, lng: -0.1278 },
      Italy: { lat: 41.9028, lng: 12.4964 },
      'East Anglia': { lat: 52.6316, lng: 1.2983 },
      Germany: { lat: 51.1657, lng: 10.4515 },
      Spain: { lat: 40.4637, lng: -3.7492 },
      Netherlands: { lat: 52.1326, lng: 5.2913 },
      Belgium: { lat: 50.5039, lng: 4.4699 },
      Switzerland: { lat: 46.8182, lng: 8.2275 },
      Austria: { lat: 47.5162, lng: 14.5501 },
      Egypt: { lat: 26.8206, lng: 30.8025 },
      Syria: { lat: 34.8021, lng: 38.9968 }
      // Add more locations and their respective coordinates
    };
  
    return coordinates[location] || null;
    }


