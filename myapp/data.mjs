export const products = [
  { id: 1, name: "skyflakes", price: 250 },
  { id: 2, name: "nova", price: 25 },
  { id: 3, name: "kwekkwek", price: 5 },
  { id: 4, name: "piatos", price: 500 },
  { id: 5, name: "gibulak nga inununan", price: 1000 },
];

export const getProductById = (id) => {
  const product = products.find((product) => product._id === id);
  return product;
};
