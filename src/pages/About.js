import React from "react";
import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", my: 2, fontSize: "1.75rem" }}>
          Welcome To My DhabaStyle
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify" }}>
          At Our Restaurant, "DhabaStyle," we redefine dining with exceptional flavors and culinary excellence,
          where every dish is crafted with care and passion, a haven for food enthusiasts seeking quality and satisfaction,
          a symphony of taste that leaves a lasting impression, and a destination where gastronomic dreams come true.
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify", mt: 2 }}>
          Step into our DhabaStyle Restaurant, where tradition meets taste, offering an authentic culinary journey
          through rich flavors and cherished recipes from the heart of our culture. Indulge in a symphony of spices and
          aromas that tell the story of our heritage, all within a budget-friendly experience that doesn't compromise on quality.
          Our menu is a celebration of local ingredients and regional specialties, promising a delightful exploration of classic Desi cuisine.
          Whether it's a hearty biryani, a flavorful curry, or a crispy samosa, each bite takes you back to your roots.
          Discover the essence of Desi dining without breaking the bank, as we strive to offer an unforgettable taste of home.
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify", mt: 2 }}>
          Embark on a culinary adventure at our Desi Style Restaurant, where our passion for food shines through in every dish we create.
          Our menu is a carefully curated selection of authentic Desi flavors, bringing together the finest ingredients, time-honored recipes,
          and a touch of innovation. From aromatic biryanis to sizzling kebabs, our dishes are a reflection of our commitment to delivering
          an unforgettable dining experience. Each plate tells a story of tradition and taste, while our limited pricing ensures that you can
          savor the richness of Desi cuisine without stretching your budget. Whether you're craving the comfort of daal chawal or the
          indulgence of rich curries, our restaurant is the perfect place to savor the magic of Desi food.
        </Typography>
      </Box>
    </Layout>
  );
};

export default About;
