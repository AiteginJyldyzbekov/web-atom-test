import { ProductType } from "@component/types/serviceTypes/ProductsType";
import axios from "axios";

class ProductsService {
  private url = "https://fakestoreapi.com";

  async getAllProducts() {
    return axios.get<ProductType[]>(`${this.url}/products`);
  }

  async getById(id: number) {
    return axios.get<ProductType>(`${this.url}/products/${id}`);
  }
}

export default new ProductsService();
