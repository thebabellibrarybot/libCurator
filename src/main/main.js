import TombGrid from "../tombGrid/tombGrid";
import tombData from "../backend/book";
import ChangePage from "../tombGrid/changePage";
import { useState } from 'react';
import Counter from '../tombGrid/counter';

const Main = () => {

    const [switchPage, setSwitchPage] = useState(true);

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
                    <h1>Current Collection Title:</h1>
                    <Counter /> 
                </div>
            </div>
            <div className="main-body">
                {switchPage ? <TombGrid data = {tombData} type = 'Available Tombs'/> : <TombGrid data = {tombData} type = 'Active Collection'/>}
                <ChangePage changePage={setSwitch} maxPage={switchPage}/>
            </div>
        </div>
    )
}
export default Main;