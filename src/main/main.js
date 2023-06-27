import TombGrid from "../tombGrid/tombGrid";
import tombData from "../backend/book";
import ChangePage from "../tombGrid/changePage";
import { useEffect, useState } from 'react';
import Counter from '../tombGrid/counter';
import { useMyContext } from "../provider/provider";
import CollectionButton from "../tombGrid/collectionButton";

const Main = ({pageType}) => {

    useEffect(() => {
    }, [pageType]);

    const [switchPage, setSwitchPage] = useState(pageType);
    const { collection } = useMyContext();

    const curTombs = Object.values(collection).flatMap((obj) => {
        if (typeof obj === 'object') {
          return Object.values(obj);
        }
        return [];
      });

    function setSwitch(value) {

        if (value === 1) {
            setSwitchPage(true);
        }
        else { 
            setSwitchPage(false);
        }
    }

    return (

        <div className="main main-bx">
            <div className="main-header">
                <div className="header">
                    {Object.keys(collection).length < 1 ? <CollectionButton/> : <><h1>Current Collection: {Object.keys(collection)[0]}</h1> <CollectionButton/></>}
                    <Counter /> 
                </div>
            </div>
            <div className="main-body">
                {switchPage ? <TombGrid data = {tombData} type = 'Available Tombs'/> : <TombGrid data = {curTombs} type = 'Active Collection'/>}
                <ChangePage changePage={setSwitch} maxPage={switchPage}/>
            </div>
        </div>
    )
}
export default Main;