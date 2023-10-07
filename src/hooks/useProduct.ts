import productsService from "@component/services/products.service";
import { ProductType } from "@component/types/serviceTypes/ProductsType";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

type UseProductProps = {
  id?: string | undefined;
};

const UseProduct = ({ id }: UseProductProps): UseQueryResult<ProductType> => {
  return useQuery(["product", id], () => productsService.getById(Number(id)), {
    select: ({ data }) => data,
    enabled: !!id,
  });
};

export default UseProduct;
