import Product from '../models/Product.js';

export const fetchProducts = async (req, res) => {
  try {
    const { mode } = req.params;
    if (mode === 'all') {
      var products = await Product.find();
    }
    if (mode === 'new') {
      var products = await Product.find({ new: true });
    }
    if (mode === 'top') {
      var products = await Product.find({ rating: { $gte: 4.5 } });
    }
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};

export const fetchProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findById(productId);

    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};
