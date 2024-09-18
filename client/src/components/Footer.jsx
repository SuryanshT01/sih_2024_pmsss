import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton, useTheme } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.alt,
        color: theme.palette.text.primary,
        py: 6,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Scholar Saarthi
            </Typography>
            <Typography variant="body2">
              Empowering education through innovative scholarship solutions.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/about" color="inherit" display="block" mb={1}>
              About Us
            </Link>
            <Link href="/services" color="inherit" display="block" mb={1}>
              Our Services
            </Link>
            <Link href="/contact" color="inherit" display="block" mb={1}>
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body2" mb={1}>
              Email: support@scholarsaarthi.com
            </Typography>
            <Typography variant="body2" mb={1}>
              Phone: +1 (123) 456-7890
            </Typography>
            <Typography variant="body2">
              Address: 123 Education St, Knowledge City, IN 54321
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: `1px solid ${theme.palette.divider}`,
            textAlign: "center",
          }}
        >
          <IconButton color="primary" aria-label="Facebook" component="a" href="https://www.facebook.com/scholarsaarthi" target="_blank">
            <FacebookIcon />
          </IconButton>
          <IconButton color="primary" aria-label="Twitter" component="a" href="https://twitter.com/scholarsaarthi" target="_blank">
            <TwitterIcon />
          </IconButton>
          <IconButton color="primary" aria-label="LinkedIn" component="a" href="https://www.linkedin.com/company/scholarsaarthi" target="_blank">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="primary" aria-label="Instagram" component="a" href="https://www.instagram.com/scholarsaarthi" target="_blank">
            <InstagramIcon />
          </IconButton>
          <Typography variant="body2" color="text.secondary" mt={2}>
            &copy; {new Date().getFullYear()} Scholar Saarthi. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;