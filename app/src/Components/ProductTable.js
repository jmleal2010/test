import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const ProductTable = ({products,deleteProduct,editRow,setEditing}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {products.length > 0 ? (
                    products.map(product => {
                        return <tr key={product._id}>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>
                                <button className="btn btn-success btn-sm" style={{marginRight: 4}}><FontAwesomeIcon icon="eye"/></button>
                                <button className="btn btn-primary mr-2 btn-sm mr-2" style={{marginRight: 4}} onClick={()=>editRow(product)}><FontAwesomeIcon icon="pencil-alt"/>
                                </button>
                                <button className="btn btn-danger btn-sm mx-auto" onClick={()=>deleteProduct(product._id)}><FontAwesomeIcon icon="recycle"/></button>
                            </td>
                        </tr>
                    })
                ) :
                <tr>
                    <td className="text-center" colSpan={5}>No hay productos</td>
                </tr>
            }
            </tbody>
        </table>
    )
}

export default ProductTable;
