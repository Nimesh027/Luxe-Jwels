import { createSlice } from "@reduxjs/toolkit";
import type { Testimonial } from "@/types";
import { testimonialsData } from "@/data";

export interface TestimonialsState {
  items: Testimonial[];
}

const initialState: TestimonialsState = {
  items: testimonialsData,
};

export { testimonialsData };

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
});

export default testimonialsSlice.reducer;
