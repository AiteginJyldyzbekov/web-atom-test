import BackBtn from "@component/components/atoms/back-btn";
import EditProduct from "@component/components/templates/edit-product";

const EditProductPage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <BackBtn />
      <EditProduct id={params.slug} />
    </>
  );
};

export default EditProductPage;
