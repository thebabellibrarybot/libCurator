import { useMyContext } from "../provider/provider";
import SVG from '../useHooks/useSVG';

const CollectionButton = () => {


    const { collection, setCollection, saveCollection, setCount } = useMyContext();

    const newCollection = () => {
        // check if collection is !empty if !empty prompt user to save collection
        setCollection({});
        setCount(0);
    };
    const deleteCollection = () => {
        // check if collection is !empty if !empty prompt user to save collection
        setCollection({});
        setCount(0);
    };
    const saveBasic = () => {
        // check if collection is !empty if !empty prompt user to save collection
        saveCollection(collection);
        setCollection({});
        setCount(0);
    };

    return (
        <div>
            {!collection[Object.keys(collection)[0]] ? 
            <>
            <SVG ability = 'addcollection'/>
            <button>create</button>
            </>
            :
            <div className="main-flbx">
                <div className = "butts">
                <SVG ability = 'savecollection'/>
                <p onClick={()=>saveBasic(collection)}>save</p>
                </div>
                <div className = "butts">
                <SVG ability = 'deletecollection'/>
                <p onClick={deleteCollection}>delete</p>
                </div>
                <div className = "butts">
                <SVG ability = 'newcollection'/>
                <p onClick={newCollection}>new collection</p>
                </div>
            </div>
            }
        </div>
    )
}
export default CollectionButton;