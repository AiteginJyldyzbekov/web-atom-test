"use client";
import { usePostProduct } from "@component/hooks/usePostProduct";
import { CreateProductType } from "@component/types/serviceTypes/ProductsType";
import FormContainer from "@component/components/atoms/form-container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import TextDisplay from "@component/components/atoms/text-display";
import Button from "@mui/material/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "@component/helpers/validationSchema";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });
  const { addProduct } = usePostProduct();

  const submit: SubmitHandler<CreateProductType> = (data, e) => {
    e?.preventDefault();
    addProduct(data);
  };
  return (
    <FormContainer>
      <Grid
        sx={{
          marginTop: "25px",
        }}
      >
        <TextDisplay>Create Product</TextDisplay>
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
              <Typography variant="h6" sx={{ color: "red" }}>
                {errors.price?.message}
              </Typography>
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
            Add product
          </Button>
        </form>
      </Grid>
    </FormContainer>
  );
};

export default CreateProduct;
