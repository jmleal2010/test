import React, {Fragment, useEffect, useState} from "react";
import ProductTable from "./ProductTable";
import {v4 as uuidv4} from 'uuid';
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm";
import productServices from "../services/product";
import product from "../services/product";

const Product = () => {
    const productData = []
    const [products, setProduct] = useState(productData);
    const [editing, setEditing] = useState(false);
    const [modalShow,setModalShow] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({_id: null, title: '', product: '', price: 0})

    useEffect(async () => {
            const {data} = await productServices.listProducts();
            setProduct(data);
    }, []);

    const addProduct = product => {
        setProduct([...products, product]);
        productServices.addProduct(product);
    }

    const deleteProduct = id => {
       productServices.deleteProduct(id)
        setProduct(products.filter(product => product._id !== id));
    }

    const editRow = (product) => {
        setEditing(true);
        setCurrentProduct({_id: product._id, title: product.title, description: product.description, price: product.price})
    }

    const updateProduct = (updateProduct) => {
        productServices.updateProduct(updateProduct)
        setEditing(false);
        setProduct(products.map(product => {
            return (product._id === updateProduct._id ? updateProduct : product);
        }))

    }

    const onHideModal =() => {
        setModalShow(false)
    }

    return (
        <Fragment>
            <h1>Listado de Productos</h1>
            <div className="row">
                <div className="col-md-6">
                    {editing ? (
                        <div className="row">
                            <h4>Edit Product</h4>
                            <EditProductForm
                                show={modalShow}
                                updateProduct={updateProduct}
                                currentProduct={currentProduct}
                                onHide={() => onHideModal}
                            />
                        </div>
                    ) : (
                        <div className="row">
                            <h4>Adicionar Producto</h4>
                            <AddProductForm addProduct={addProduct}/>
                        </div>
                    )
                    }
                </div>
                <div className="col-md-6">
                    <h4>Ver Producto</h4>
                    <ProductTable
                        products={products}
                        editRow={editRow}
                        deleteProduct={deleteProduct}
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default Product;
