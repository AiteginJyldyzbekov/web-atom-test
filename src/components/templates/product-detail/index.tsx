"use client";
import styles from "./ProductDetail.module.scss";
import UseProduct from "@component/hooks/useProduct";
import ImageDisplay from "@component/components/atoms/image-display";
import { useEffect, useState } from "react";
import {
  CreateProductType,
  ProductType,
} from "@component/types/serviceTypes/ProductsType";
import TextDisplay from "@component/components/atoms/text-display";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import ProductSkeleton from "@component/components/atoms/product-skeleton";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteProduct } from "@component/hooks/useDeleteProduct";
import { useRouter } from "next/navigation";

const ProductDetail = ({ id }: { id: string }) => {
  const { isLoading, data } = UseProduct({ id });
  const { deleteProduct } = useDeleteProduct();
  const router = useRouter();
  const [product, setProduct] = useState<ProductType>();

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

  function deepEqual(obj1: ProductType, obj2: ProductType) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  useEffect(() => {
    findData();
    if (data && product) {
      if (deepEqual(data, product)) {
        setProduct(data);
      }
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        <ProductSkeleton />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Card className={styles.card}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => router.push(`/edit-product/${id}`)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => {
              deleteProduct({ id });
            }}
          >
            Delete
          </Button>
        </Grid>
        <ImageDisplay link={product?.image} />
        <CardContent>
          <Typography variant="h5" component="h2">
            {product?.title}
          </Typography>
          <TextDisplay>{product?.description}</TextDisplay>
          <Grid sx={{ display: "flex", alignItems: "center" }}>
            {data?.rating && (
              <Rating
                name="half-rating-read"
                defaultValue={data?.rating?.rate}
                readOnly
                sx={{
                  marginRight: "5px",
                }}
              />
            )}
            <TextDisplay>{data?.rating?.rate}</TextDisplay>
          </Grid>
          <Chip label={product?.category} className={styles.chip} />
          <Typography variant="h6" component="h3">
            {`${product?.price}$`}
          </Typography>
        </CardContent>
        <Divider />
      </Card>
    </div>
  );
};

export default ProductDetail;
