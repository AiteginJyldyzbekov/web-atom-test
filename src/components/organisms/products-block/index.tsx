"use client";
import ProductCard from "@component/components/molecules/product-card";
import UseProducts from "@component/hooks/useProducts";
import { useMemo } from "react";
import Grid from "@mui/material/Grid";
import Preloader from "@component/components/atoms/preloader";

const ProductsBlock: React.FC = () => {
  const { isLoading, data } = UseProducts();

  const renderProducts = useMemo(() => {
    return data?.map((el) => <ProductCard {...el} />);
  }, [data]);

  if (isLoading) return <Preloader />;
  return (
    <Grid
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "30px",
        marginTop: "25px",
      }}
    >
      {renderProducts}
    </Grid>
  );
};

export default ProductsBlock;
