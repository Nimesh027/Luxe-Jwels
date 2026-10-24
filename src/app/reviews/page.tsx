import type { Metadata } from "next";
import ReviewsClient from "./ReviewsClient";

export const metadata: Metadata = {
  title: "Customer Reviews — Real Stories, Genuine Reviews",
  description:
    "Read verified Luxe Jewels customer reviews and ratings for our certified diamond and hallmarked gold jewellery.",
  alternates: { canonical: "/reviews" },
};

export default function Page() {
  return <ReviewsClient />;
}
