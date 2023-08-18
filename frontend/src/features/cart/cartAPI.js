export function addToCart(items) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8090/cart", {
      method: "POST",
      body: JSON.stringify(items),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("http://localhost:8090/cart?user=" + userId);
    const data = await response.json();
    resolve({ data });
  });
}
