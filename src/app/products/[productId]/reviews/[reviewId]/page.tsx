"use client";
import { notFound } from "next/navigation";

interface Props {
  params: {
    productId: string;
    reviewId: string;
  };
}

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const reviewDetails = (props: Props) => {
  const { params } = props;
  // if (getRandomInt(2) === 1) {
  //   throw new Error("Error loading review");
  // }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
};

export default reviewDetails;
