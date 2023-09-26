import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductType } from "@component/types/serviceTypes/ProductsType";
import Link from "next/link";

const ProductCard: React.FC<ProductType> = ({
  id,
  price,
  title,
  description,
  category,
  image,
  rating,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`product-detail/${id}`}>
          <Button size="small">More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
