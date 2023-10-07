import productsService from "@component/services/products.service";
import { ProductType } from "@component/types/serviceTypes/ProductsType";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useDeleteProduct() {
  const router = useRouter();
  const { mutate } = useMutation(
    ["delete product"],
    ({ id }: { id: string | number }) =>
      productsService
        .deleteProduct(id)
        .then((data) => {
          const productsDataString = localStorage.getItem("productsData");
          if (productsDataString !== null) {
            const productsData: ProductType[] = JSON.parse(productsDataString);
            const updatedProductsData = productsData.filter(
              (product) => product.id !== Number(id)
            );
            localStorage.setItem(
              "productsData",
              JSON.stringify(updatedProductsData)
            );
            router.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
        })
  );
  const deleteProduct = async ({ id }: { id: string | number }) => {
    mutate({ id });
  };

  return { deleteProduct };
}
