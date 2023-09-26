"use client";
import { usePathname } from "next/navigation";

function PageTitleDisplay() {
  const pathname = usePathname();

  let pageTitle = null;

  if (pathname === "/") {
    pageTitle = "Products";
  } else if (pathname === "/create-product") {
    pageTitle = "Create Product";
  } else if (pathname === "product-detail") {
    pageTitle = "Product Detail";
  }

  return <div>{pageTitle}</div>;
}

export default PageTitleDisplay;
