import { getNumLocationsPerYear, getNumTombsPerLocation, getNumTombsPerYear, getNumTypesPerLocation } from "../useHooks/useStats.js"
import { useMyContext } from "../provider/provider";
import { useParams } from "react-router-dom";
import GeoMap from "../graphs/geomap.js" 
import { useEffect, useState } from 'react';

const LoadGraphs = () => {

    // set current collection data
    const { myCollections } = useMyContext();
    const collection = useParams().collectionID;
    const curCollection = myCollections.filter((obj) => Object.keys(obj)[0] === collection);

    // get data
    const numLocationsPerYear = getNumLocationsPerYear(curCollection[0]);
    const numTombsPerYear = getNumTombsPerYear(curCollection[0]);
    const numTombsPerLocation = getNumTombsPerLocation(curCollection[0]);
    const numTypesPerLocation = getNumTypesPerLocation(curCollection[0]);

    // get geograph
    const myUrl = "https://raw.githubusercontent.com/thebabellibrarybot/libCurator/main/public/custom.geo.json";
    const startlocation = [25.8566,30.3522];
    const [data, setData] = useState(null); 
    

    useEffect(() => {
        fetch(myUrl)
        .then((response) => response.json())
        .then((data) => {
            setData(data);
        });
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid-body-3">
            <div className='tomb gr'>
                <p>Map</p>
                <GeoMap props = {data} marks = {numLocationsPerYear} hw = {[250,250]} startpoint = {startlocation} scale = {280} viewer = {true}/>
            </div>
            <div className='tomb gr'>
                <>{/* geomap of tombsPerLocation*/}</>
                <p>Number of Tombs Per Location</p>
                <GeoMap props = {data} marks = {numTombsPerLocation} hw = {[250,250]} startpoint = {startlocation} scale = {240} viewer = {true}/> 
            </div>
            <div className='tomb gr'>
                <p>Number of Tomb Types Per Location</p>
                <GeoMap props = {data} marks = {numTypesPerLocation} hw = {[250,250]} startpoint = {startlocation} scale = {240} viewer = {true}/>
            </div>
            <div className='tomb gr'>
                graph 4
            </div>
            <div className='tomb gr'>
                graph 5
            </div>
            <div className='tomb gr'>
                graph 6
            </div>
        </div>
    )
}
export default LoadGraphs;