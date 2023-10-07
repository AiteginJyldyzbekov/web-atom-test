import {
  CreateProductType,
  ProductType,
} from "@component/types/serviceTypes/ProductsType";
import axios from "axios";

class ProductsService {
  private url = "https://fakestoreapi.com";

  async getAllProducts() {
    return axios.get<ProductType[]>(`${this.url}/products`);
  }

  async getById(id: number) {
    return axios.get<ProductType>(`${this.url}/products/${id}`);
  }

  async addProduct(product: CreateProductType) {
    return axios.post<ProductType>(`${this.url}/products`, {
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category,
    });
  }

  async deleteProduct(id: number | string) {
    return axios.delete<ProductType>(`${this.url}/products/${id}`);
  }

  async editProduct({
    id,
    data,
  }: {
    id: string | number;
    data: CreateProductType;
  }) {
    return axios.delete<ProductType>(`${this.url}/carts/${id}`, { data });
  }
}

export default new ProductsService();
