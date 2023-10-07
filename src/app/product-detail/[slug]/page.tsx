import ProductDetail from "@component/components/templates/product-detail";
import BackBtn from "@component/components/atoms/back-btn";

const ProductDetailPage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <BackBtn />
      <ProductDetail id={params.slug} />
    </>
  );
};

export default ProductDetailPage;
