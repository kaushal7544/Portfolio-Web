import React from "react";
import { AppBar, Box, Grid, Typography, IconButton, Divider, Toolbar } from "@mui/material";
import { Email, Phone, LocationOn, LinkedIn, GitHub, YouTube, Facebook, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <AppBar position="static" sx={{ 
      background: "linear-gradient(to right, #000, #1E3A8A)", 
      boxShadow: "0px 4px 10px 10px rgba(255, 255, 255, 0.3)",
      mt: "3%" 
      }}>
      <Toolbar sx={{ 
        flexDirection: "column", 
        padding: "2rem 1rem", 
        margin:"auto",
        width: "93%",
        maxWidth: "2222px",
        textAlign: "center", 
        mt: "2%"
        }}>

        <Grid container spacing={4} justifyContent="center">
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "lightblue", textTransform: "uppercase", fontSize: "30px" }}>
              Contact Me
            </Typography>
            <Typography variant="body1" sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
              <Email sx={{ mr: 1, color: "lightblue" }} /> kaushalvaghela@gmail.com
            </Typography>
            <Typography variant="body1" sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
              <Phone sx={{ mr: 1, color: "lightblue" }} /> +91 88664 83404
            </Typography>
            <Typography variant="body1" sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: "20px" }}>
              <LocationOn sx={{ mr: 1, color: "lightblue" }} /> India
            </Typography>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "lightblue", textTransform: "uppercase", fontSize: "30px" }}>
              Follow Me
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              {[
                ["LinkedIn", "https://www.linkedin.com/in/kaushal-vaghela-5b7130234/", <LinkedIn fontSize="large" />],
                ["GitHub", "https://github.com/kaushal7544", <GitHub fontSize="large" />],
                // ["Twitter", "https://twitter.com", <Twitter fontSize="large" />],
                // ["Facebook", "https://facebook.com", <Facebook fontSize="large" />],
                // ["YouTube", "https://youtube.com", <YouTube fontSize="large" />],
              ].map(([name, link, icon]) => (
                <IconButton
                  key={name}
                  sx={{
                    color: "lightblue",
                    transition: "0.3s",
                    "&:hover": {
                      color: "white",
                      transform: "scale(1.3) rotate(5deg)", // Hover animation
                      textShadow: "0px 0px 10px rgba(0, 153, 255, 0.8)", // Glowing effect
                    },
                  }}
                  href={link}
                  target="_blank"
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Glowing Divider Line */}
        <Divider sx={{ backgroundColor: "rgba(0, 153, 255, 0.6)", my: 2, height: "2px", borderRadius: "10px", width: "80%" }} />

        {/* Copyright with Glow Effect */}
        <Typography variant="body2" sx={{ opacity: 0.8, textShadow: "0px 0px 5px rgba(0, 153, 255, 0.6)" }}>
          © {new Date().getFullYear()} Kaushal | All Rights Reserved
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
