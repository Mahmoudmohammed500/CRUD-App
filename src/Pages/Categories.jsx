import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
function Categories() {
    const [Categories, setCategories] = useState([]);
    let API_URL = 'http://localhost:9000/categories';

    const GetAllGategories = () => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
            })
    }
    useEffect(() => {
        GetAllGategories()
    }, [])

    function DeleteCategory(category) {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: `Are you sure you want to delete ${category.title} Category`,
            showCancelButton: true
        }).then((data) => {
            if (data.isConfirmed) {
                fetch(`http://localhost:9000/categories/${category.id}`, {
                    method: 'delete'
                })
                    .then((res) => res.json)
                    .then(() => {
                        GetAllGategories()
                    })

            }
        })
    }
    return (
        <>
            <h1 className="text-center">Our Categories</h1>
            <br></br>
            <Link to='/categories/add' className="btn btn-success btn-sm"> Add New Category </Link>
            <br></br>
            <table className="table table-striped products-table">
                <thead>
                    <tr>
                        <th> Id</th>
                        <th>Title </th>
                        <th>Number Of Products </th>
                        <th>Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Categories.map((cat) => {
                            return (
                                <tr key={cat.id}>
                                    <td>{cat.id}</td>
                                    <td>{cat.title}</td>
                                    <td>{cat.quantity}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm" onClick={() => { DeleteCategory(cat) }}> Delete</button>
                                        <Link to={`/categories/${cat.id}`} className="btn btn-info btn-sm"> View</Link>
                                        <Link className="btn btn-primary btn-sm" to={`/categories/edit/${cat.id}`}> Edit</Link>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </>
    )
}
export default Categories;