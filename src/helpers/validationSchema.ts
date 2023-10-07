import * as yup from "yup";

export const productSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be a positive number"),
  category: yup.string().required("Category is required"),
  image: yup
    .string()
    .url("Image link must be a valid URL")
    .required("Image link is required"),
});
