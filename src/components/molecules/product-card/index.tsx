import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductType } from "@component/types/serviceTypes/ProductsType";
import Link from "next/link";
import EllipsisText from "@component/helpers/ElipsisText";

const ProductCard: React.FC<ProductType> = ({
  id,
  title,
  description,
  image,
}) => {
  return (
    <Card
      sx={{
        width: 320,
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title.slice(0, 20)}...
        </Typography>
        <EllipsisText len={100}>{description}</EllipsisText>
      </CardContent>
      <CardActions>
        <Link href={`product-detail/${id}`}>
          <Button size="small" variant="contained">
            More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
