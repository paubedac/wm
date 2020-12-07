import axios from 'axios';

const apiUrl = 'http://localhost:8080/api';

export default {
  getProducts: () => axios.get(`${apiUrl}/products`).then(response => {
    return response.data;
  }),
  getDiscounts: () => axios.get(`${apiUrl}/discounts`).then(response => {
    return response.data;
  }),
  getDiscount: (brand) => axios.get(`${apiUrl}/discounts/${brand}`).then(response => {
    return response.data;
  })
}