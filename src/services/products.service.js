import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../models/products.model.js";

export const getAll = () => getAllProducts();
export const getById = (id) => getProductById(id);
export const create = (data) => createProduct(data);
export const update = (id, data) => updateProduct(id, data);
export const remove = (id) => deleteProduct(id);
