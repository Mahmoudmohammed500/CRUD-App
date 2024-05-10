import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
function Editproduct() {
    const { productid } = useParams();
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [price, setprice] = useState(0);
    const navegate = useNavigate();
    const [Product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:9000/products/${productid}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
    }, [])

    const FormSubmit = (e) => {
        e.preventDefault()
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: ` Product Data Edited successfully`,
        }).then(() => {
            // put new data to server by Fetch( )
            fetch(`http://localhost:9000/products/${productid}`, {
                method: "put",
                Headers: {
                    "Content-type": "Aplication/json"
                },
                body: JSON.stringify({
                    title,
                    description,
                    price
                })
            })
                .then((res) => res.json)
                .then(() => navegate('../products'))

            /*
            // put new data to server by axios library
            axios
                .put(`http://localhost:9000/products/${productid}`, {
                    title,
                    description,
                    price
                }).then((data) => console.log(data))
            navegate('../products')
            */
        })

    }
    return (
        <>
            <h1 className="text-center"> Edit Product </h1>
            <br></br>   <br></br>
            <form className="container form" onSubmit={FormSubmit}>
                <fieldset>
                    <div className="mb-3">
                        <label htmlFor="producttitle" className="form-label">Title</label>
                        <input type="text" className="form-control" id="producttitle" placeholder={Product.title} aria-describedby="Product Title" onChange={(e) => { settitle(e.target.value) }} />
                    </div>
                    <br></br>
                    <div className="mb-3">
                        <label htmlFor="productdescription" className="form-label">Description</label>
                        <input type="text" className="form-control" id="productdescription" placeholder={Product.description} aria-describedby="Product Description" onChange={(e) => { setdescription(e.target.value) }} />
                    </div>
                    <br></br>
                    <div className="mb-3">
                        <label htmlFor="productprice" className="form-label">price</label>
                        <input type="number" className="form-control" id="productprice" placeholder={Product.price} aria-describedby="Product Price" onChange={(e) => { setprice(e.target.value) }} />
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary d-block m-auto">Edit Product</button>
                </fieldset>
            </form>
        </>
    );
}

export default Editproduct;
