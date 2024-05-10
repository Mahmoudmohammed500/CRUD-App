// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../CSS/navbar.css';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
function Navbar() {
    const Location = useLocation();
    let houseicon = document.getElementById("house");

    useEffect(() => {
        if (houseicon && Location.pathname == "/") {
            houseicon.style.color = "rgb(0 0 0)";
        }
        else if (Location.pathname != "/" && houseicon) {
            houseicon.style.color = "rgb(0 0 0 / 65%)";
        }
    }, [Location])
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary d-flex ">
                <div class="container-fluid">
                    <div className='nav-element'>
                        <Link class="navbar-brand" to="/">
                            <span className="text-success fw-bold fs-1">C</span>
                            <span className="text-info fw-bold fs-1">R</span>
                            <span className="text-primary fw-bold fs-1">U</span>
                            <span className="text-danger fw-bold fs-1">D</span>
                        </Link>
                    </div>
                    <div className='nav-element'>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link" aria-current="page" to="/"><FontAwesomeIcon id="house" icon="fa-solid fa-house" /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )

}

export default Navbar;

