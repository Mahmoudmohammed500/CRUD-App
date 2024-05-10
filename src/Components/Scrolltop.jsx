import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import '../CSS/scrolltop.css';
function Scrolltop() {
    const [visible, setvisible] = useState(false);
    const togglevisible = () => {
        const scrolled = document.documentElement.scrollTop;
        console.log("Scroll is =",scrolled);
        if (scrolled > 50) {
            setvisible(true);
        }
        else if (scrolled <= 50) {
            setvisible(false);
        }
    }
    const scrolltop = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    }

    window.addEventListener('scroll', togglevisible);
    return (
        <>
                <div className="scroll-container" style={{ display: visible ? 'block' : 'none' }} onClick={scrolltop} >
                    <FontAwesomeIcon className="scroll-btn" icon="fa-solid fa-arrow-up" />
                </div>
        </>
    )
}
export default Scrolltop;