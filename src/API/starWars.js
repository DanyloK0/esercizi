export const fetchApi = (ep, method) => {
  fetch(`https://swapi.dev/api/${ep}`)
    .then((response) => response.json())
    .then((data) => {
      return method(data.results);
    });
};
