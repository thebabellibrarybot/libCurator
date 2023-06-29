import SVG from "../useHooks/useSVG";
import { useMyContext } from "../provider/provider";

const Counter = () => {

    const {count} = useMyContext()

    return (
        <div className="count">
            <SVG ability = 'counter'/>
            <p>{count}</p>
        </div>
    )
}
export default Counter;