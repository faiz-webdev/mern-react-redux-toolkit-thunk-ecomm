export function fetchAllProducts(amount = 1) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("http://localhost:8090/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination) {
  let queryString = "";
  for (let key in filter) {
    let categoryValues = filter[key];
    if (categoryValues.length > 0) {
      let lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }

  for(let key in sort) {
    queryString += `${key}=${sort[key]}$`;
  }
  for(let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(
      "http://localhost:8090/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
