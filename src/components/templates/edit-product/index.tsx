"use client";
import { usePostProduct } from "@component/hooks/usePostProduct";
import {
  CreateProductType,
  ProductType,
} from "@component/types/serviceTypes/ProductsType";
import FormContainer from "@component/components/atoms/form-container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import TextDisplay from "@component/components/atoms/text-display";
import Button from "@mui/material/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import UseProduct from "@component/hooks/useProduct";
import { useEffect, useState } from "react";
import { usePutProduct } from "@component/hooks/usePutProduct";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "@component/helpers/validationSchema";
import { Box, Typography } from "@mui/material";

const EditProduct = ({ id }: { id: string }) => {
  const [product, setProduct] = useState<ProductType>();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateProductType>({
    defaultValues: {
      title: "sds",
      description: product && product.description,
      price: product && product.price,
      category: product && product.category,
      image: product && product.image,
    },
    resolver: yupResolver(productSchema),
  });
  const { editProduct } = usePutProduct();
  const { isLoading, data } = UseProduct({ id });

  const submit: SubmitHandler<CreateProductType> = (data, e) => {
    e?.preventDefault();
    editProduct({ data, id });
    console.log(data);
  };

  const findData = () => {
    const productsDataString: string | null =
      localStorage.getItem("productsData");
    if (productsDataString != null) {
      const productsData: ProductType[] = JSON.parse(productsDataString);
      const foundProduct = productsData.find(
        (product) => product.id === Number(id)
      );
      setProduct(foundProduct);
    }
  };

  useEffect(() => {
    if (data) {
      setProduct(data);
    } else {
      findData();
    }
  }, [data]);

  useEffect(() => {
    if (product) {
      setValue("title", product.title);
      setValue("description", product.description);
      setValue("price", product.price);
      setValue("category", product.category);
      setValue("image", product.image);
    }
  }, [product]);

  return (
    <FormContainer>
      <Grid
        sx={{
          marginTop: "25px",
        }}
      >
        <TextDisplay>Edit Product</TextDisplay>
        <form onSubmit={handleSubmit(submit)}>
          <div className="inputs">
            <Box>
              <TextField
                {...register("title")}
                label="Title"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
              />
              <Typography variant="h6" sx={{ color: "red" }}>
                {errors.title?.message}
              </Typography>
            </Box>
            <Box>
              <TextField
                {...register("description")}
                label="Description"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
              />
              <Typography variant="h6" sx={{ color: "red" }}>
                {errors.description?.message}
              </Typography>
            </Box>
            <Box>
              <TextField
                {...register("price")}
                label="Price"
                type="number"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
              />
              {errors.price?.message}
            </Box>
            <Box>
              <TextField
                {...register("category")}
                label="Category"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
              />
              <Typography variant="h6" sx={{ color: "red" }}>
                {errors.category?.message}
              </Typography>
            </Box>
            <Box>
              <TextField
                {...register("image")}
                label="Image link"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
              />
              <Typography variant="h6" sx={{ color: "red" }}>
                {errors.image?.message}
              </Typography>
            </Box>
          </div>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </form>
      </Grid>
    </FormContainer>
  );
};

export default EditProduct;
