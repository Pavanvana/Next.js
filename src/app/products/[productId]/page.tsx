import { Metadata } from "next";

interface Props {
  params: {
    productId: string;
  };
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 1000);
  });
  return {
    title: `Product ${title}`,
  };
};

const ProductDetails = (props: Props) => {
  const { params } = props;
  return <h1>Product Details for {params.productId}</h1>;
};
export default ProductDetails;
