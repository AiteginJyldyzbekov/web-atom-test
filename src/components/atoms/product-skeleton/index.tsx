"use client";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

const ProductSkeleton = () => {
  return (
    <Card
      sx={{
        width: "400px",
      }}
    >
      <Skeleton variant="rectangular" width="100%" height={300} />
      <CardContent>
        <Skeleton variant="text" width={200} height={50} />
        <Skeleton variant="text" width="100%" height={100} />
        <Skeleton variant="text" width={50} height={50} />
      </CardContent>
      <Divider />
    </Card>
  );
};

export default ProductSkeleton;
