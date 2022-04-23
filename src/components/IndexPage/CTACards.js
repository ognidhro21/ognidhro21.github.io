import React from "react";
import { Box } from "@mui/material";

import HomepageCardWide from "../HomepageCardWide";
const CTACards = () => {
  return (
    <Box
      sx={{
        py: 3,
        backgroundColor: "var(--red-50)",
      }}
    >
      <HomepageCardWide
        link="/routines"
        bgcolor="g.main"
        title="Routines"
        subtitle="Check out the routine of the Ognidhro 21!"
      />
      <HomepageCardWide
        link="https://facebook.com/pg/ognidhro21/"
        bgcolor="b.main"
        title="Facebook Page"
        subtitle="Get latest updates from Ognidhro 21!"
      />
    </Box>
  );
};

export default CTACards;
