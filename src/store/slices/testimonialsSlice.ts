import { createSlice } from "@reduxjs/toolkit";
import type { Testimonial } from "@/types";

export interface TestimonialsState {
  items: Testimonial[];
}

const initialState: TestimonialsState = {
  items: [
    {
      id: "testimonial-priya",
      name: "Priya Sharma",
      avatar: "https://picsum.photos/seed/luxe-avatar-priya/100/100",
      rating: 5,
      quote:
        "Absolutely loved the quality and finishing. Luxe Jewels never disappoints!",
    },
    {
      id: "testimonial-rahul",
      name: "Rahul Verma",
      avatar: "https://picsum.photos/seed/luxe-avatar-rahul/100/100",
      rating: 5,
      quote:
        "The designs are modern yet timeless. My go-to store for all occasions.",
    },
    {
      id: "testimonial-neha",
      name: "Neha Kapoor",
      avatar: "https://picsum.photos/seed/luxe-avatar-neha/100/100",
      rating: 5,
      quote:
        "Great service and beautiful packaging. Felt really special unboxing it.",
    },
  ],
};

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
});

export default testimonialsSlice.reducer;
