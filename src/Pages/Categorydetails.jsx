import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Categorydetails() {
    let { categoryid } = useParams();
    const [Category, setCategory] = useState([]);
    useEffect(() => {
        fetch(`https://json-server-for-crud-app-repositry.onrender.com/categories/${categoryid}`)
            .then((res) => res.json())
            .then((data) => setCategory(data))
        // The next code line to scroll up to the beginning of the page
        window.scroll({ top: 0, behavior: "smooth" });
    }, [])
    return (
        <>
            <h1 className="text-center">Category Details</h1>
            <br></br>  <br></br>  <br></br>  <br></br>
            <div className="text-center" >
                <h2>#{Category.id}</h2>
                <h2> "{Category.title}"</h2>
                <div> Number of products on {Category.title} category is {Category.quantity}.</div>
            </div>
        </>
    )
}
export default Categorydetails;