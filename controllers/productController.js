import Product from "../models/product.js";


export const getAllProducts = async (req, res) => {

    const products = await Product.findAll();

    res.json(products);

};

export const getAllProductById = async (req, res) => {

    const product = await Product.findByPk(req.params.id);

    if(!product) return res.status(404).json({message: "Product Not Found"});

    res.json(product);
};

export const createProduct = async (req, res) => {

    try {

        const product = await Product.create(req.body);

        res.status(201).json(product)

    } catch (error) {
        res.status(400).json({error: error.message});
    }

};

export const updateProduct = async (req, res) => {

    const product = await Product.findByPk(req.params.id);

    if(!product) return res.status(404).json({message: "Product Not Found"});

    await product.update(req.body)

    res.json(product);
};

export const deleteProduct = async (req, res) => {

    const product = await Product.findByPk(req.params.id);

    if (!product) return res.status(404).json({message: "Product Not Found"});

    await product.destroy();

    res.json({message: 'Product deleted successfully'});
}