import {
  getAll as getAllProducts,
  getById as getProductById,
  create as createProduct,
  update as updateProduct,
  remove as removeProduct,
} from "../services/products.service.js";

export const getAll = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

export const getById = async (req, res) => {
  try {
    const product = await getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
};

export const create = async (req, res) => {
  try {
    const { name, price, stock } = req.body;

    if (!name || price === undefined) {
      return res
        .status(400)
        .json({ error: "Faltan campos requeridos: name, price" });
    }

    const product = await createProduct({
      name,
      price: Number(price),
      stock: Number(stock) || 0,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
};

export const update = async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    const product = await updateProduct(req.params.id, {
      name,
      price: Number(price),
      stock: Number(stock),
    });
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};

export const remove = async (req, res) => {
  try {
    const result = await removeProduct(req.params.id);
    if (!result) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json({ message: "Producto eliminado correctamente", id: result.id });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
};
