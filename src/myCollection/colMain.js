import { useParams } from "react-router-dom";
import { useMyContext } from "../provider/provider";

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
        <div className="main-body">
            <div className="body">
                <p>Date: {collection[0].date_created}</p>
                <p>User: {collection[0].user}</p>
                <p>Collection ID: {collectionID}</p>
                <ul>
                    <li>Tomb List</li>
                    {collection[0][collectionID].map((obj) => {
                        const key = Object.keys(obj)[0];
                        return (
                            <li>{obj[key].tomb_id}</li>
                            )
                        })}
                    
                </ul>
            </div>
        </div>
    </div>
    )
}
export default ColMain;