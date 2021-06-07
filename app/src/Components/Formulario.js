import React, {Fragment, useState} from "react";

const Formulario = () => {
    const [datos, setDatos] = useState({name: '', description: ''})
    const handleInfo = (e) => {
        setDatos({
            ...datos, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(`Name: ${datos.nombre} Description: ${datos.description}`)
    }
    return (
        <Fragment>
            <h1 className=" mt-2">Formulario</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-3">
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={datos.name}
                            onChange={handleInfo}
                        />
                    </div>
                    <div className="col-md-3">
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={datos.description}
                            onChange={handleInfo}
                        />
                    </div>
                    <div className="col-md-3">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default Formulario
