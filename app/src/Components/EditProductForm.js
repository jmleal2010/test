import React, {Fragment} from "react";
import {useForm} from "react-hook-form";
import Modal from "react-bootstrap/cjs/Modal";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const EditProductForm = ({updateProduct, currentProduct, show, onHide}) => {
    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: {
            _id: currentProduct._id,
            title: currentProduct.title,
            description: currentProduct.description,
            price: currentProduct.price,
        }
    });
    setValue('_id', currentProduct._id)
    setValue('title', currentProduct.title)
    setValue('description', currentProduct.description)
    setValue('price', currentProduct.price)

    const onSubmit = (data, e) => {
        data._id = currentProduct._id;
        updateProduct(data)
        e.target.reset();
        onHide(true)
    }
    return (
        <Fragment>
            <Modal
                show
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mb-2">
                            <div className="mb-2 col-md-12">
                                <input
                                    className="form-control"
                                    type="text"
                                    style={errors?.title ? {borderColor: 'red'} : {border: '1px solid #ced4da'}}
                                    name="title"
                                    placeholder="Title"
                                    {...register('title', { required: {
                                            value: true,
                                            message: 'The field is required'
                                        }
                                    })
                                    }
                                />
                            </div>
                            <div className="mb-2 col-md-12">
                                <input
                                    className="form-control"
                                    type="text"
                                    style={errors?.description ? {borderColor: 'red'} : {border: '1px solid #ced4da'}}
                                    name="description"
                                    placeholder="Description"
                                    {...register('description', { required: {
                                            value: true,
                                            message: 'The field is required'
                                        }
                                    })
                                    }
                                />
                            </div>
                            <div className="mb-2 col-md-12">
                                <input
                                    className="form-control"
                                    type="number"
                                    style={errors?.price ? {borderColor: 'red'} : {border: '1px solid #ced4da'}}
                                    name="price"
                                    placeholder="Price"
                                    {...register('price', { required: {
                                            value: true,
                                            message: 'The field is required'
                                        }
                                    })
                                    }
                                />
                            </div>
                            <div className="col-md-12">
                                <button className="btn btn-block btn-primary" onClick={() => show}>Edit Product</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </Fragment>
    )
}

export default EditProductForm
