import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../CSS/productdetails.css';

function Productsdetails() {
    let { productid } = useParams();
    const [Product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://json-server-for-crud-app-repositry.onrender.com/products/${productid}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
        // The next code line to scroll up to the beginning of the page
        window.scroll({ top: 0, behavior: "smooth" });
    }, [])
    return (
        <>
            <h1 className="text-center">Products Details</h1>
            <br></br>  <br></br>  <br></br>  <br></br>
            <div className="text-center product-container" >
                <img src={Product.image} alt="Product Image" />
                <h1>#{productid}</h1>
                <h3> "{Product.title}"</h3>
                <h4> *{Product.category}</h4>
                <div> {Product.description}.</div>
                <p className="mt-2">price: {Product.price}$</p>
            </div>
        </>
    );
}

export default Productsdetails;