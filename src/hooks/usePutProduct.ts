import { notification } from "@component/helpers/notification";
import productsService from "@component/controllers/products.service";
import {
  CreateProductType,
  ProductType,
} from "@component/types/serviceTypes/ProductsType";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function usePutProduct() {
  const router = useRouter();
  const { mutate } = useMutation(
    ["products"],
    ({ id, data }: { id: string | number; data: CreateProductType }) =>
      productsService
        .editProduct({ id, data })
        .then(() => {
          const productsDataString = localStorage.getItem("productsData");
          if (productsDataString !== null) {
            const productsData: ProductType[] = JSON.parse(productsDataString);
            const indexOfProductToUpdate = productsData.findIndex(
              (product) => product.id === Number(id)
            );
            const updatedProduct = {
              ...productsData[indexOfProductToUpdate],
              ...data,
              id: Number(id),
            };
            productsData[indexOfProductToUpdate] = updatedProduct;
            localStorage.setItem("productsData", JSON.stringify(productsData));
            router.push("/");
            notification("Продукт успешно изменен", "success");
          }
        })
        .catch(() => {
          notification("Не удалось изменить продукт", "error");
        })
  );

  const editProduct = async ({
    data,
    id,
  }: {
    data: CreateProductType;
    id: string | number;
  }) => {
    mutate({ data, id });
  };

  return { editProduct };
}
