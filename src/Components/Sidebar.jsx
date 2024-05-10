import '../CSS/sidebar.css';
import { NavLink } from "react-router-dom";
function Sidebar() {
    return (
        <>
            <nav class="nav sidebar bg-body-tertiary flex-column">
                <NavLink class=" active" aria-current="page" to="/products">Get All Products</NavLink>
                <NavLink to="/categories">Get All Categories</NavLink>
            </nav>
        </>
    );
}

export default Sidebar;
