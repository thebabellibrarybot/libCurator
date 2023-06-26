import { useMyContext } from "../provider/provider";

const MyCollections = () => {

    const { myCollections } = useMyContext();

    console.log(myCollections, 'myCollections')

    return (
        <div className="main main-bx">
        <div className="main-header">
            <div className="header">
                <h1>My Tombs</h1>
            </div>
        </div>
        <div className="main-body">
            <p>tomb list</p>
        </div>
    </div>
    )
}
export default MyCollections;