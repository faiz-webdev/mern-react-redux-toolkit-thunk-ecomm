export function fetchAllProduct(amount = 1) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("http://localhost:8090/products");
    const data = await response.json();
    resolve({ data });
  });
}
