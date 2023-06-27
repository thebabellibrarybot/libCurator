import { getCoordinates, getNumLocationsPerYear, getNumTombsPerLocation, getNumTombsPerYear, getNumTypesPerLocation, getFitData} from "../useHooks/useStats.js"
import { useMyContext } from "../provider/provider";
import { useParams } from "react-router-dom";

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
    

    return (
        <div className="grid-body-3">
            <div className='tomb'>
                graph 1
            </div>
            <div className='tomb'>
                graph 2
            </div>
            <div className='tomb'>
                graph 3
            </div>
            <div className='tomb'>
                graph 4
            </div>
            <div className='tomb'>
                graph 5
            </div>
            <div className='tomb'>
                graph 6
            </div>
        </div>
    )
}
export default LoadGraphs;