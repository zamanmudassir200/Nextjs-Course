import React from "react";

const ReviewId = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <h1>
      {Number(params.reviewId) > 1 ? "Reviews" : "Review"} {params.reviewId} for
      product {params.productId}
    </h1>
  );
};

export default ReviewId;
