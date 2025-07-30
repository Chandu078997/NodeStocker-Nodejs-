let products = [
  { id: 1, name: 'Shoe', price: 100, description: 'Running shoe' },
  { id: 2, name: 'Shirt', price: 50, description: 'Cotton shirt' }
];

let nextId = 3;

// GET /products
const getAllProducts = (req, res) => {
  const { q, page = 1, limit = 10 } = req.query;

  let result = [...products];

  // Search
  if (q) {
    result = result.filter(p =>
      p.name.toLowerCase().includes(q.toLowerCase())
    );
  }

  // Pagination
  const start = (page - 1) * limit;
  const end = start + parseInt(limit);
  result = result.slice(start, end);

  res.json(result);
};

// GET /products/:id
const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

// POST /products
const createProduct = (req, res) => {
  const { name, price, description } = req.body;

  // Input validation
  if (!name || typeof price !== 'number') {
    return res
      .status(400)
      .json({ message: 'Name is required and price must be a number' });
  }

  const newProduct = {
    id: nextId++,
    name,
    price,
    description: description || ''
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

// PUT /products/:id
const updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price, description } = req.body;
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: 'Product not found' });

  // Input validation
  if (!name || typeof price !== 'number') {
    return res
      .status(400)
      .json({ message: 'Name is required and price must be a number' });
  }

  products[index] = { id, name, price, description: description || '' };
  res.json(products[index]);
};

// DELETE /products/:id
const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: 'Product not found' });

  products.splice(index, 1);
  res.json({ message: 'Product deleted successfully' });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
