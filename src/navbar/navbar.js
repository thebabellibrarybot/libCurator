import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        /* styles === specs(H,W), colors, borders, interior spacing */
        <div className="nav-ex">
            <img src={process.env.PUBLIC_URL + `/book.svg`} alt="profile pic" />
            <ul className="vert-ls">
                <li><Link to = '/mycollections'>My Collections</Link></li>
                <li><Link to = '/alltombs'>Available Tombs</Link></li>
            </ul>
        </div>
    )
}
export default Navbar;