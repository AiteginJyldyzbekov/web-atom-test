"use client";
import styles from "./ProductDetail.module.scss";
import UseProduct from "@component/hooks/useProduct";
import ImageDisplay from "@component/components/atoms/image-display";
import { useEffect, useState } from "react";
import { ProductType } from "@component/types/serviceTypes/ProductsType";
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

const ProductDetail = ({ id }: { id: string }) => {
  const { isLoading, data } = UseProduct({ id });
  const [product, setProduct] = useState<ProductType>();
  const [rating, setRating] = useState<number>();

  useEffect(() => {
    if (data) {
      setProduct(data);
      setRating(product?.rating.rate);
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
        <ImageDisplay link={product?.image} />
        <CardContent>
          <Typography variant="h5" component="h2">
            {product?.title}
          </Typography>
          <TextDisplay>{product?.description}</TextDisplay>
          <Grid sx={{ display: "flex", alignItems: "center" }}>
            <Rating
              name="half-rating-read"
              defaultValue={rating}
              precision={0.5}
              readOnly
              sx={{
                marginRight: "5px",
              }}
            />
            <TextDisplay>{product?.rating.rate}</TextDisplay>
          </Grid>
          <Chip label="Category" className={styles.chip} />
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
