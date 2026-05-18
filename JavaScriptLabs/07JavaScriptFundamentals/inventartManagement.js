let inventory = [];

function findProductIndex(productName) {
  const searchName = productName.toLowerCase();
  return inventory.findIndex(item => item.name.toLowerCase() === searchName);
}
function addProduct(product) {
  const productName = product.name.toLowerCase();
  const productQuantity = product.quantity;
  
  const index = findProductIndex(productName);

  if (index !== -1) {
    inventory[index].quantity += productQuantity;
    console.log(`${productName} quantity updated`);
  } else {
    inventory.push({ name: productName, quantity: productQuantity });
    console.log(`${productName} added to inventory`);
  }
}

function removeProduct(productName, quantity) {
  const searchName = productName.toLowerCase();
  const index = findProductIndex(searchName);

  if (index === -1) {
    console.log(`${searchName} not found`);
    return;
  }

  const currentProduct = inventory[index];

  if (currentProduct.quantity < quantity) {
    console.log(`Not enough ${searchName} available, remaining pieces: ${currentProduct.quantity}`);
    return;
  }

  currentProduct.quantity -= quantity;

  if (currentProduct.quantity === 0) {
    console.log(`Remaining ${searchName} pieces: 0`);
    inventory.splice(index, 1);
  } else {
    console.log(`Remaining ${searchName} pieces: ${currentProduct.quantity}`);
  }
}