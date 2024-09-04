// src/components/Footer.js

import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: "auto",
        backgroundColor: (theme) => theme.palette.background.paper,
        p: "1rem",
        textAlign: "center",
        boxShadow: "0px -2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Scholar Saarthi. All rights reserved.
      </Typography>
      <Typography variant="body2" color="textSecondary">
        <Link href="mailto:support@scholarsaarthi.com" color="inherit">
          Contact Us
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary">
        <Link href="https://www.facebook.com/scholarsaarthi" color="inherit" target="_blank" rel="noopener noreferrer">
          Facebook
        </Link>{" "}
        |{" "}
        <Link href="https://twitter.com/scholarsaarthi" color="inherit" target="_blank" rel="noopener noreferrer">
          Twitter
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
