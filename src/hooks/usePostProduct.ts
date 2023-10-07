import productsService from "@component/services/products.service";
import {
  CreateProductType,
  ProductType,
} from "@component/types/serviceTypes/ProductsType";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function usePostProduct() {
  const router = useRouter();
  const { mutate } = useMutation(["products"], (data: CreateProductType) =>
    productsService
      .addProduct(data)
      .then((data) => {
        const cachedDataJSON = localStorage.getItem("productsData");
        const cachedData: ProductType[] = cachedDataJSON
          ? JSON.parse(cachedDataJSON)
          : [];

        const newProduct = data.data;
        cachedData.push(newProduct);

        localStorage.setItem("productsData", JSON.stringify(cachedData));
        router.push("/");
      })
      .catch((error) => console.log(error))
  );

  const addProduct = async (data: CreateProductType) => {
    mutate(data);
  };

  return { addProduct };
}
