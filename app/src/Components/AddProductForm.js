import React, {Fragment} from "react";
import {useForm} from "react-hook-form";

const AddProductForm = ({addProduct}) => {
    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        addProduct(data);
       e.target.reset()
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
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
                        <button type="submit" className="btn btn-block btn-primary">Add another product</button>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default AddProductForm
