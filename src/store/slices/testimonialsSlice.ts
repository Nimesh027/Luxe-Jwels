import { createSlice } from "@reduxjs/toolkit";
import type { Testimonial } from "@/types";

export interface TestimonialsState {
  items: Testimonial[];
}

const initialState: TestimonialsState = {
  items: [
    {
      id: "testimonial-1",
      name: "Babitha Shrikanth",
      rating: 5,
      date: "JUN 2026",
      location: "Lotus Paradise Elite, Mangaluru",
      purchase: "Diamond Choker Suite",
      quote:
        "Friendly, helpful, and attentive staff. They explained the diamond cut and clarity grading in detail and provided outstanding bespoke service.",
    },
    {
      id: "testimonial-2",
      name: "Gayatri Chavan",
      rating: 5,
      date: "JUN 2026",
      location: "Sky City Mall, Mumbai",
      purchase: "Solitaire Diamond Ring",
      quote:
        "Great experience with the Luxe Jewels team. Calm and pleasing hospitality with an amazing shopping experience. Thank you for the patience throughout my bridal selection!",
    },
    {
      id: "testimonial-3",
      name: "Sindhuja K",
      rating: 5,
      date: "JUN 2026",
      location: "HSR Layout, Bangalore",
      purchase: "18K Gold Emerald Pendant",
      quote:
        "I had an amazing shopping experience at Luxe Jewels. The collection is elegant, unique, and beautifully crafted. Their knowledge, attention to detail, and warm hospitality made it truly enjoyable.",
    },
    {
      id: "testimonial-4",
      name: "Harsha Kadu",
      rating: 5,
      date: "JUN 2026",
      location: "Luxe Boutique, Pune",
      purchase: "Tennis Diamond Bracelet",
      quote:
        "I'm extremely happy with my purchase and would highly recommend Luxe Jewels to anyone looking for certified fine jewellery and outstanding customer service. Thank you for making it so memorable!",
    },
    {
      id: "testimonial-5",
      name: "Priya Sharma",
      rating: 5,
      date: "MAY 2026",
      location: "Jubilee Hills, Hyderabad",
      purchase: "Gold Signet Cuff",
      quote:
        "Absolutely loved the finishing and certification transparency. The tamper-evident luxury unboxing experience was breathtaking and delivery was seamless!",
    },
    {
      id: "testimonial-6",
      name: "Rahul Verma",
      rating: 5,
      date: "MAY 2026",
      location: "Connaught Place, New Delhi",
      purchase: "Men's Cuban Chain",
      quote:
        "The designs are modern yet timeless. My go-to store for all milestones and gifting occasions. Truly top-tier hallmark craft.",
    },
  ],
};

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
});

export default testimonialsSlice.reducer;
