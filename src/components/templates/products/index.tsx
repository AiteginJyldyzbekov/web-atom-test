"use client";
import UseProducts from "@component/hooks/useProducts";
import styles from "./Products.module.scss";
import { useMemo } from "react";
import ProductsBlock from "@component/components/organisms/products-block";
import { useSession } from "next-auth/react";

export const Products = () => {
  return (
    <div>
      <ProductsBlock />
    </div>
  );
};
