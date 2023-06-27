import { useParams } from "react-router-dom";
import { useMyContext } from "../provider/provider";
import LoadGraphs from "./loadGraphs";

const ColMain = () => {

    const collectionID = useParams().collectionID;
    const { myCollections } = useMyContext();
    const collection = myCollections.filter((obj) => Object.keys(obj)[0] === collectionID);

    // base image = get_base_image
    // collection ingo = get_collection_info

    return (
        <div className="main main-bx">
        <div className="main-header">
            <div className="header">
                <h1>My Collection: {collectionID}</h1>
            </div>
        </div>
        <div className="main-body main-flbx">
            <div className="body">

                <div className="main-flgd">
                    <p>Date: {collection[0].date_created}</p>
                    <p>User: {collection[0].user}</p>
                    <p>Collection ID: {collectionID}</p>
                    <p>Tombs: {collection[0][collectionID].length}</p>
                </div>

                <LoadGraphs />
              
            </div>
        </div>
    </div>
    )
}
export default ColMain;