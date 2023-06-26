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

    return (
        <div>
            {!collection[Object.keys(collection)[0]] ? 
            <>
            <SVG ability = 'addcollection'/>
            <button>create</button>
            </>
            :
            <>
                <>
                <SVG ability = 'savecollection'/>
                <button onClick={()=>saveCollection(collection)}>save</button>
                </>
                <>
                <SVG ability = 'deletecollection'/>
                <button onClick={deleteCollection}>delete</button>
                </>
                <>
                <SVG ability = 'newcollection'/>
                <button onClick={newCollection}>new collection</button>
                </>
            </>
            }
        </div>
    )
}
export default CollectionButton;