
import axios from "axios";
export function fetchProducts(amount = 1) {
   return axios.get('http://localhost:8080/products')
}
