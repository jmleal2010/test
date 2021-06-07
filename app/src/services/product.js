import api from "../axios/axios";

const PRODUCT_BASE_PATH = 'products';
const PRODUCT_FETCH_ALL = `${PRODUCT_BASE_PATH}/`;
const PRODUCT_CREATE = `${PRODUCT_BASE_PATH}/create`;
const PRODUCT_UPDATE = `${PRODUCT_BASE_PATH}/update`;
const PRODUCT_DELETE = `${PRODUCT_BASE_PATH}/delete`;

export default {
    listProducts: () => api.get(PRODUCT_FETCH_ALL),
    addProduct: (params) => api.post(PRODUCT_CREATE, params),
    updateProduct: (params) => api.put(`${PRODUCT_UPDATE}/${params._id}`, params),
    deleteProduct: (id) => api.delete(`${PRODUCT_DELETE}/${id}`),
};
