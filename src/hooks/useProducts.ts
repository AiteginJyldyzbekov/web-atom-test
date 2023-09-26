import productsService from "@component/services/products.service";
import { useQuery } from "@tanstack/react-query";

const UseProducts = () => {
  return useQuery(["products"], () => productsService.getAllProducts(), {
    select: ({ data }) => data,
  });
};

export default UseProducts;
