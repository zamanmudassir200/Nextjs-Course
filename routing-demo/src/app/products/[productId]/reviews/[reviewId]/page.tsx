import { notFound } from "next/navigation";
import React from "react";

const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  {
    if (Number(params.reviewId) > 1000) {
      notFound();
    }
  }
  return (
    <h1>
      {Number(params.reviewId) > 1 ? "Reviews" : "Review"} {params.reviewId} for
      product {params.productId}
    </h1>
  );
};

export default ReviewDetail;
