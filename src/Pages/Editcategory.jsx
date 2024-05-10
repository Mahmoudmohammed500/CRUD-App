import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../CSS/form.css';
function Editcategory() {
    const { categoryid } = useParams();
    const [title, settitle] = useState('');
    const [quantity, setquantity] = useState(0);
    const navegate = useNavigate();
    const [Category, setCategory] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:9000/categories/${categoryid}`)
            .then((res) => res.json())
            .then((data) => setCategory(data))
    }, [])

    const FormSubmit = (e) => {
        e.preventDefault()
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: ` Product Data Edited successfully`,
        }).then(() => {
            // put new data to server by Fetch( )
            fetch(`http://localhost:9000/categories/${categoryid}`, {
                method: "put",
                Headers: {
                    "Content-type": "Aplication/json"
                },
                body: JSON.stringify({
                    title,
                    quantity
                })
            })
                .then((res) => res.json)
                .then(() => navegate('../categories'))

            /*
            // put new data to server by axios library
            axios
                .put(`http://localhost:9000/categories/${productid}`, {
                    title,
                    description,
                    price
                }).then((data) => console.log(data))
            navegate('../categories')
            */
        })

    }
    return (
        <>
            <h1 className="text-center">Edit Category</h1>
            <br></br>   <br></br>
            <form className="container form" onSubmit={FormSubmit}>
                <fieldset>
                <div className="mb-3">
                    <label htmlFor="categorytitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="categorytitle" placeholder={Category.title} aria-describedby="Category Title" onChange={(e) => { settitle(e.target.value) }} />
                </div>
                <br></br>
                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">Quantity</label>
                    <input type="number" className="form-control" id="quantity" placeholder={Category.quantity} aria-describedby="Product Price" onChange={(e) => { setquantity(e.target.value) }} />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary d-block m-auto">Edit Product</button>
                </fieldset>
            </form>
        </>
    )
}
export default Editcategory;