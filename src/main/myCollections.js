import { useMyContext } from "../provider/provider";
import CollectionList from "../tombGrid/collectionList";

const MyCollections = () => {

    const { myCollections, collection } = useMyContext();

    return (
        <div className="main main-bx">
        <div className="main-header">
            <div className="header">
                <h1>My Tombs</h1>
            </div>
        </div>
        <div className="main-body">
            <CollectionList tombs = {myCollections}/>
        </div>
    </div>
    )
}
export default MyCollections;