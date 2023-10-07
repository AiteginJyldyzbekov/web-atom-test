import productsService from "@component/services/products.service";
import { useQuery } from "@tanstack/react-query";
import { ProductType } from "@component/types/serviceTypes/ProductsType";

const UseProducts = () => {
  return useQuery(
    ["products"],
    async () => {
      const cachedData = localStorage.getItem("productsData");
      if (cachedData) {
        return JSON.parse(cachedData);
      } else {
        const response = await productsService.getAllProducts();
        const serverData = response.data;
        localStorage.setItem("productsData", JSON.stringify(serverData));
        return serverData;
      }
    }
  );
};

export default UseProducts;
